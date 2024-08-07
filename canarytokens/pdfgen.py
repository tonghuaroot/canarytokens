import random
import re
import zlib
from io import BytesIO
from pathlib import Path

from canarytokens.constants import CANARY_PDF_TEMPLATE_OFFSET as STREAM_OFFSET

# PDF_FILE=settings.CANARY_PDF_TEMPLATE
# STREAM_OFFSET=settings.CANARY_PDF_TEMPLATE_OFFSET
# STREAM_OFFSET = 793
# CANARY_PDF_TEMPLATE_OFFSET=793


def _substitute_stream(
    header,
    stream: bytes,
    replace: bytes,
    search: bytes = b"abcdefghijklmnopqrstuvwxyz.zyxwvutsrqponmlkjihgfedcba.aceegikmoqsuwy.bdfhjlnprtvxz",
):
    # Ohhhh, this is nasty. Instead of trying to get the xref positions right,
    # we're going to brute-force a URL that's the right size after compression.
    # Give up after 100 attempts.

    MAX_ATTEMPTS = 100

    old_len = len(stream)
    attempts = 0
    while attempts < MAX_ATTEMPTS:
        candidate_stream = zlib.compress(
            zlib.decompress(stream).replace(search, replace)
        )
        count = 1
        while len(candidate_stream) < old_len and count < 10000:
            padding = "".join(
                [chr(random.randrange(65, 90)) for x in range(0, count)]
            ).encode()
            candidate_stream = zlib.compress(
                zlib.decompress(stream).replace(search, replace + b"/" + padding)
            )
            count += 1
        if old_len == len(candidate_stream):
            break
        attempts += 1

    if attempts == MAX_ATTEMPTS:
        raise Exception(
            "Dammit, new PDF is too big after {attempts} attempts, ({new_len} > {old_len})".format(
                attempts=attempts, new_len=len(candidate_stream), old_len=old_len
            )
        )

    return (header, candidate_stream)


def make_canary_pdf(
    hostname: bytes, template: Path, stream_offset: int = STREAM_OFFSET
):
    with open(template, "rb") as fp:
        contents = fp.read()

    stream_size = int(
        re.match(rb".*\/Length ([0-9]+)\/.*", contents[stream_offset:]).group(1)
    )
    stream_start = stream_offset + contents[stream_offset:].index(b"stream\r\n") + 8
    stream_header = contents[stream_offset:stream_start]
    stream = contents[stream_start : stream_start + stream_size]  # noqa: E203

    (stream_header, stream) = _substitute_stream(
        header=stream_header, stream=stream, replace=hostname
    )

    output = BytesIO()
    output.write(contents[0:stream_offset])
    output.write(stream_header)
    output.write(stream)
    output.write(contents[stream_start + stream_size :])  # noqa: E203
    new_contents = output.getvalue()
    output.close()

    return new_contents
