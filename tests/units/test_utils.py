import pytest

from canarytokens.utils import (
    coerce_to_float,
    get_deployed_commit_sha,
    get_src_ip_continent,
)


def test_get_deployed_commit_sha(tmpdir):
    sha_dir = tmpdir / "base"
    sha_dir.mkdir()
    sha_file = sha_dir / "COMMIT_SHA"
    example_sha = "comecommitsha"
    sha_file.write_text(example_sha, "utf-8")
    sha_file.is_file = lambda: True
    reported_sha = get_deployed_commit_sha(commit_sha_file=sha_file)
    assert reported_sha == example_sha


def test_coerce_to_float():
    assert 10.3 == coerce_to_float("10.3")
    assert 10 == coerce_to_float("10")
    assert not coerce_to_float("notafloat")


@pytest.mark.parametrize(
    "geo_info, continent",
    [
        ({"country": "ZA"}, "AF"),
        ({"country": "AQ"}, "AN"),
        ({"country": "CN"}, "AS"),
        ({"country": "GB"}, "EU"),
        ({"country": "US"}, "NA"),
        ({"country": "AU"}, "OC"),
        ({"country": "AR"}, "SA"),
        ({"country": "Mordor"}, "NO_CONTINENT"),
        ({"bogon": True}, "NO_CONTINENT"),
        ({}, "NO_CONTINENT"),
    ],
)
def test_get_src_ip_continent(geo_info, continent):
    assert continent == get_src_ip_continent(geo_info)
