function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ManageToken-CejgbJlX.js","assets/TokenDisplay.vue_vue_type_script_setup_true_lang-CXGHKxWp.js","assets/index-CPOagljl.js","assets/index-8fhQJTej.css","assets/ManageToken-DbjvKZfd.js","assets/TokenDisplay.vue_vue_type_script_setup_true_lang-C_0zwL_i.js","assets/BaseCodeSnippet.vue_vue_type_script_setup_true_lang-CjJJBnvE.js","assets/BaseCodeSnippet-BD9YfSrM.css","assets/ManageToken-CiZ8001_.js","assets/TokenDisplay.vue_vue_type_script_setup_true_lang-Ci9sO_G5.js","assets/ManageToken-DJSoB_Oi.js","assets/TokenDisplay.vue_vue_type_script_setup_true_lang-4pIVhW8q.js","assets/ManageToken-BN0xGtqe.js","assets/TokenDisplay.vue_vue_type_script_setup_true_lang-5R3NSCgj.js","assets/BaseSwitch-NzRnr2Ni.js","assets/BaseSwitch-Ea-_x461.css","assets/ManageToken-zXhnKmlb.js","assets/TokenDisplay.vue_vue_type_script_setup_true_lang-DHM-1cj3.js","assets/ManageToken-q34PvnUu.js","assets/TokenDisplay.vue_vue_type_script_setup_true_lang-CYHL2b8X.js","assets/ManageToken-CC1wruhq.js","assets/TokenDisplay.vue_vue_type_script_setup_true_lang-D190uZcu.js","assets/ManageToken-CdDoEGf9.js","assets/TokenDisplay.vue_vue_type_script_setup_true_lang-CTdZ248v.js","assets/ManageToken-CsNmWNFS.js","assets/TokenDisplay.vue_vue_type_script_setup_true_lang-BfhWozKf.js","assets/ManageToken-DS79QvdK.js","assets/TokenDisplay.vue_vue_type_script_setup_true_lang-CSM-UG9-.js","assets/ManageToken-BUopxrff.js","assets/TokenDisplay.vue_vue_type_script_setup_true_lang-DOdjco1i.js","assets/ManageToken-Be0krL6Z.js","assets/TokenDisplay.vue_vue_type_script_setup_true_lang-CG8Lr_Fa.js","assets/ManageToken-CJhem-3r.js","assets/TokenDisplay.vue_vue_type_script_setup_true_lang-Be1H-p1z.js","assets/ManageToken-BkCZBGkQ.js","assets/TokenDisplay.vue_vue_type_script_setup_true_lang-B-7UWbWs.js","assets/ManageToken-DbT7nCVm.js","assets/ManageToken-BDjPebps.js","assets/TokenDisplay.vue_vue_type_script_setup_true_lang-DZB7sMEn.js","assets/ManageToken-DxJi9eYG.js","assets/TokenDisplay.vue_vue_type_script_setup_true_lang-Bxhny67G.js","assets/ManageToken-DL9QcX9j.js","assets/TokenDisplay.vue_vue_type_script_setup_true_lang-VSR2ziss.js","assets/ManageToken-CEODw559.js","assets/generateSVNToken-BUAtZizv.js","assets/ManageToken-BqXKuWhL.js","assets/TokenDisplay.vue_vue_type_script_setup_true_lang-CAE3jstm.js","assets/ManageToken-CpIoZGRx.js","assets/TokenDisplay.vue_vue_type_script_setup_true_lang-1n7ce4h_.js","assets/ManageToken-w4PkBvh2.js","assets/TokenDisplay.vue_vue_type_script_setup_true_lang-CRES0eju.js","assets/ManageToken-BE7Zu6kF.js","assets/TokenDisplay.vue_vue_type_script_setup_true_lang-Dp89VFp1.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{A as G}from"./AppLayoutOneColumn--pcNfiWd.js";import{d as O,r as m,o as H,S as d,a as r,c as E,b as y,w as C,u as f,e as T,T as D,G as K,U as j,s as U,f as s,g as L,h as A,i,j as h,_ as Y,k as $,n as q,l as N,t as B,m as F,p as P,q as W,v as z,x as J,y as Z,z as Q,A as X,B as ee,C as ae,D as oe,E as S,F as te,H as ne,I as se,J as re,K as le,L as ue,M as _e,N as t}from"./index-CPOagljl.js";import{_ as ie}from"./BaseSwitch-NzRnr2Ni.js";const ce={class:"flex flex-col gap-24"},V="An error occurred. Please try again.",de=O({__name:"SettingsToken",props:{tokenBackendResponse:{}},setup(x){const n=x;function _(){return n.tokenBackendResponse.canarydrop.type===D.WEB_BUG||n.tokenBackendResponse.canarydrop.type===D.WEB_IMAGE}function l(){return n.tokenBackendResponse.canarydrop.type===D.WEB_IMAGE}const v=m(n.tokenBackendResponse.canarydrop.alert_email_recipient),o=m(n.tokenBackendResponse.canarydrop.alert_webhook_url),b=m(_()),w=m(l()),e=m({[d.EMAIL]:!1,[d.WEB_HOOK]:!1,[d.BROWSER_SCANNER]:!1,[d.WEB_IMAGE]:!1}),p=m({[d.EMAIL]:!1,[d.WEB_HOOK]:!1,[d.BROWSER_SCANNER]:!1,[d.WEB_IMAGE]:!1}),k=m({[d.EMAIL]:!1,[d.WEB_HOOK]:!1,[d.BROWSER_SCANNER]:!1,[d.WEB_IMAGE]:!1});H(()=>{Object.keys(d).forEach(u=>{const a=K[u];e.value[u]=!!n.tokenBackendResponse.canarydrop[a],p.value[u]=!1,k.value[u]=!1})});function I(u){return u?"on":"off"}async function R(u,a){var c;const g={value:I(a),token:(c=n.tokenBackendResponse.canarydrop.canarytoken)==null?void 0:c._value,auth:n.tokenBackendResponse.canarydrop.auth,setting:j[u]};Object.keys(k.value).forEach(M=>{k.value[M]=!1}),p.value[u]=!0;try{const M=await U(g);M.status===200?e.value[u]=a:(console.log("Error:",M.data.detail),k.value[u]=!0)}catch(M){console.log(M,"error!"),k.value[u]=!0}finally{p.value[u]=!1}}return(u,a)=>{const g=ie;return r(),E("div",ce,[v.value?(r(),y(g,{key:0,id:"email-alert",modelValue:e.value.EMAIL,"onUpdate:modelValue":a[0]||(a[0]=c=>e.value.EMAIL=c),label:"Email alerts","helper-message":u.tokenBackendResponse.canarydrop.alert_email_recipient,loading:p.value.EMAIL,"has-error":k.value.EMAIL,"error-message":V,onClick:a[1]||(a[1]=C(c=>R(f(d).EMAIL,!e.value.EMAIL),["prevent"]))},null,8,["modelValue","helper-message","loading","has-error"])):T("",!0),o.value?(r(),y(g,{key:1,id:"webhook-alert",modelValue:e.value.WEB_HOOK,"onUpdate:modelValue":a[2]||(a[2]=c=>e.value.WEB_HOOK=c),label:"Webhook reporting","helper-message":n.tokenBackendResponse.canarydrop.alert_webhook_url,loading:p.value.WEB_HOOK,"has-error":k.value.WEB_HOOK,"error-message":V,onClick:a[3]||(a[3]=C(c=>R(f(d).WEB_HOOK,!e.value.WEB_HOOK),["prevent"]))},null,8,["modelValue","helper-message","loading","has-error"])):T("",!0),b.value?(r(),y(g,{key:2,id:"browser-alert",modelValue:e.value.BROWSER_SCANNER,"onUpdate:modelValue":a[4]||(a[4]=c=>e.value.BROWSER_SCANNER=c),label:"Browser scanner","helper-message":"Runs Javascript fingerprinting when the token is browsed",loading:p.value.BROWSER_SCANNER,"has-error":k.value.BROWSER_SCANNER,"error-message":V,onClick:a[5]||(a[5]=C(c=>R(f(d).BROWSER_SCANNER,!e.value.BROWSER_SCANNER),["prevent"]))},null,8,["modelValue","loading","has-error"])):T("",!0),w.value?(r(),y(g,{key:3,id:"custom-image",modelValue:e.value.WEB_IMAGE,"onUpdate:modelValue":a[6]||(a[6]=c=>e.value.WEB_IMAGE=c),label:"Custom web image","helper-message":"Serve your alternative image",loading:p.value.WEB_IMAGE,"has-error":k.value.WEB_IMAGE,"error-message":V,onClick:a[7]||(a[7]=C(c=>R(f(d).WEB_IMAGE,!e.value.WEB_IMAGE),["prevent"]))},null,8,["modelValue","loading","has-error"])):T("",!0)])}}}),me={class:"grid sm:grid-cols-[1fr_5fr] border gap-32 border-grey-200 items-center p-32 bg-white rounded-3xl shadow-solid-shadow-grey"},pe={class:"justify-center hidden sm:flex"},ve=["src"],ke={class:"text-left"},ge=s("p",{class:"text-xl font-semibold leading-normal text-grey-800"}," We hope you enjoy the free version of Canarytokens! ",-1),fe={class:"mt-16 leading-relaxed text-balance text-grey-500"},Ee=O({__name:"BannerTextCanarytools",setup(x){return(n,_)=>{const l=Y;return r(),E("div",me,[s("div",pe,[s("img",{src:f(L)("thinkst_canary_logo.png"),alt:"logo Canarytokens",class:"w-full sm:block max-w-[8rem]"},null,8,ve)]),s("div",ke,[ge,s("p",fe,[A(" For more (non-public) tokens, support, mass-deployment-tools and better management of your deployed tokens, check out our commercial offering at "),i(l,{class:"font-semibold",href:"https://canary.tools",target:"_blank"},{default:h(()=>[A("https://canary.tools")]),_:1})])])])}}}),he={class:"relative mb-16"},ye=["src","alt"],Te=s("div",{class:"text-center"},[s("p",{class:"text-xl font-semibold leading-normal text-grey-800"}," Are you sure you want to delete this Canarytoken? "),s("p",{class:"mt-8 leading-normal text-normal text-grey-300"}," All associated alerts will be permanently lost ")],-1),xe={key:1,class:"flex flex-row justify-center w-full"},Re=O({__name:"DeleteTokenModal",props:{auth:{},token:{},type:{},closeModal:{type:Function}},setup(x){const n=$(),_=m(!1),l=m(""),v=m(""),o=x,b=async()=>{_.value=!0,l.value="";const w={auth:o.auth,token:o.token};try{const e=await F(w);e.status===200?(v.value="Yay! Your Canarytoken, plus associated alerts, has been successfully deleted.",setTimeout(()=>{o.closeModal(),n.push({name:"home"})},3e3)):e.status===404?(o.closeModal(),n.push({name:"error"})):l.value="Oh no! Something went wrong when deleting your Canarytoken."}catch(e){console.log(e,"err!"),l.value=e.toString()}finally{_.value=!1}};return(w,e)=>{const p=P,k=W,I=z;return r(),y(I,{"documentation-link":"","has-back-button":!1,title:"Delete token","has-close-button":!0},{footer:h(()=>[s("div",null,[l.value||v.value?(r(),y(p,{key:0,class:q(`w-[90%] m-auto ${l.value?"mb-16":""}`),variant:v.value?"success":"danger",message:l.value||v.value},null,8,["class","variant","message"])):T("",!0),v.value?T("",!0):(r(),E("div",xe,[i(k,{variant:"grey",class:"mr-8",onClick:e[0]||(e[0]=R=>w.closeModal())},{default:h(()=>[A("No, keep it")]),_:1}),i(k,{variant:"danger",loading:_.value,onClick:e[1]||(e[1]=R=>b())},{default:h(()=>[A("Yes, delete")]),_:1},8,["loading"])]))])]),default:h(()=>[s("span",he,[i(N,{title:f(B)[o.type].label,"logo-img-url":f(B)[o.type].icon,class:"h-[6rem] w-[6rem]","has-shadow":!0,"has-animation":!0},null,8,["title","logo-img-url"]),s("img",{src:f(L)("token_icons/delete_token_badge.png"),alt:`${f(B)[o.type].label}`,class:"absolute w-[1.3rem] bottom-[.5rem] right-[.3rem]"},null,8,ye)]),Te]),_:1})}}}),we={class:"flex flex-row items-center justify-between mt-32"},Ae=s("div",{class:"flex flex-col"},[s("span",null,"Delete Canarytoken"),s("span",{class:"text-xs leading-4 text-grey-500 pr-[3rem]"},"Remove this Canarytoken and delete all related alerts")],-1),be=O({__name:"DeleteTokenButton",props:{memo:{},token:{},auth:{},type:{}},setup(x){function n(_,l,v){const{open:o,close:b}=J({component:Re,attrs:{type:_,auth:l,token:v,closeModal:()=>b()}});o()}return(_,l)=>{const v=W;return r(),E("div",we,[Ae,s("div",null,[i(v,{variant:"danger",border:!0,onClick:l[0]||(l[0]=o=>n(_.type,_.auth,_.token))},{default:h(()=>[A("Delete")]),_:1})])])}}}),Be={},Me=s("h3",{class:"inline-block mb-8 text-grey-500"},"Your Memo for this token",-1),Oe={class:"flex flex-row items-center self-start flex-grow gap-16 py-8 w-full bg-grey-100 rounded-2xl min-h-[3rem] text-grey"},Ie={class:"py-8 text-pretty"};function Ce(x,n){const _=Q("font-awesome-icon");return r(),E("div",null,[Me,s("div",Oe,[i(_,{icon:"quote-left",class:"pl-16 text-2xl text-grey-300"}),s("p",Ie,[X(x.$slots,"default")])])])}const Se=Z(Be,[["render",Ce]]),Ve={key:0,class:"flex flex-col items-center gap-8 mb-24"},De={class:"text-xl text-center text-grey-800"},Le={key:1,class:"flex flex-col items-center w-full gap-8"},$e={key:3,class:"md:mx-32 md:max-w-[50vw] w-full"},Ne={class:"flex flex-col justify-center p-16 md:p-32 rounded-3xl bg-grey-50"},Pe={class:"flex flex-col w-full gap-8"},We={key:0},Ge={key:1},He={class:"font-bold"},Ke={class:"flex justify-center sm:max-w-[50vw]"},je=O({__name:"ManageToken",setup(x){const n=ee(),_=$(),l=m(!1),v=m(null),o=m(),b=m(),w=m({props:{}}),e=m(0),p=ae(()=>o.value.canarydrop.expected_referrer==="microsoftonline.com"?D.AZURE_ENTRA_CONFIG:o.value.canarydrop.type);function k(){const u=n.params.auth,a=n.params.token;_.push({name:"history",params:{auth:u,token:a}})}async function I(){l.value=!0;const u={auth:n.params.auth,token:n.params.token};try{const a=await ue(u);l.value=!1,o.value=a.data,b.value=`token_icons/${B[p.value].icon}`,e.value=o.value.canarydrop.triggered_details.hits.length,R()}catch(a){console.log(a,"err!"),v.value=a.toString(),_.push({name:"error"})}finally{l.value=!1}}async function R(){w.value=await re(()=>_e(Object.assign({"./tokens/adobe_pdf/ManageToken.vue":()=>t(()=>import("./ManageToken-CejgbJlX.js"),__vite__mapDeps([0,1,2,3])),"./tokens/aws_keys/ManageToken.vue":()=>t(()=>import("./ManageToken-DbjvKZfd.js"),__vite__mapDeps([4,5,6,2,3,7])),"./tokens/azure_id/ManageToken.vue":()=>t(()=>import("./ManageToken-CiZ8001_.js"),__vite__mapDeps([8,9,2,3,6,7])),"./tokens/azure_id_config/ManageToken.vue":()=>t(()=>import("./ManageToken-DJSoB_Oi.js"),__vite__mapDeps([10,11,2,3])),"./tokens/clonedsite/ManageToken.vue":()=>t(()=>import("./ManageToken-BN0xGtqe.js"),__vite__mapDeps([12,13,14,2,3,15,6,7])),"./tokens/cmd/ManageToken.vue":()=>t(()=>import("./ManageToken-zXhnKmlb.js"),__vite__mapDeps([16,17,2,3])),"./tokens/cssclonedsite/ManageToken.vue":()=>t(()=>import("./ManageToken-q34PvnUu.js"),__vite__mapDeps([18,19,6,2,3,7])),"./tokens/dns/ManageToken.vue":()=>t(()=>import("./ManageToken-CC1wruhq.js"),__vite__mapDeps([20,21,6,2,3,7])),"./tokens/fast_redirect/ManageToken.vue":()=>t(()=>import("./ManageToken-CdDoEGf9.js"),__vite__mapDeps([22,23,6,2,3,7])),"./tokens/kubeconfig/ManageToken.vue":()=>t(()=>import("./ManageToken-CsNmWNFS.js"),__vite__mapDeps([24,25,2,3])),"./tokens/log4shell/ManageToken.vue":()=>t(()=>import("./ManageToken-DS79QvdK.js"),__vite__mapDeps([26,27,6,2,3,7])),"./tokens/ms_excel/ManageToken.vue":()=>t(()=>import("./ManageToken-BUopxrff.js"),__vite__mapDeps([28,29,2,3])),"./tokens/ms_word/ManageToken.vue":()=>t(()=>import("./ManageToken-Be0krL6Z.js"),__vite__mapDeps([30,31,2,3])),"./tokens/my_sql/ManageToken.vue":()=>t(()=>import("./ManageToken-CJhem-3r.js"),__vite__mapDeps([32,33,14,2,3,15,6,7])),"./tokens/qr_code/ManageToken.vue":()=>t(()=>import("./ManageToken-BkCZBGkQ.js"),__vite__mapDeps([34,35,2,3])),"./tokens/signed_exe/ManageToken.vue":()=>t(()=>import("./ManageToken-DbT7nCVm.js"),__vite__mapDeps([36,2,3])),"./tokens/slow_redirect/ManageToken.vue":()=>t(()=>import("./ManageToken-BDjPebps.js"),__vite__mapDeps([37,38,6,2,3,7])),"./tokens/smtp/ManageToken.vue":()=>t(()=>import("./ManageToken-DxJi9eYG.js"),__vite__mapDeps([39,40,6,2,3,7])),"./tokens/sql_server/ManageToken.vue":()=>t(()=>import("./ManageToken-DL9QcX9j.js"),__vite__mapDeps([41,42,6,2,3,7])),"./tokens/svn/ManageToken.vue":()=>t(()=>import("./ManageToken-CEODw559.js"),__vite__mapDeps([43,44,6,2,3,7])),"./tokens/web/ManageToken.vue":()=>t(()=>import("./ManageToken-BqXKuWhL.js"),__vite__mapDeps([45,46,6,2,3,7])),"./tokens/web_image/ManageToken.vue":()=>t(()=>import("./ManageToken-CpIoZGRx.js"),__vite__mapDeps([47,48,6,2,3,7])),"./tokens/windows_dir/ManageToken.vue":()=>t(()=>import("./ManageToken-w4PkBvh2.js"),__vite__mapDeps([49,2,3,50])),"./tokens/wireguard/ManageToken.vue":()=>t(()=>import("./ManageToken-BE7Zu6kF.js"),__vite__mapDeps([51,52,6,2,3,7]))}),`./tokens/${p.value}/ManageToken.vue`))}return R(),oe(()=>n.params.token,I,{immediate:!0}),(u,a)=>{const g=le,c=P;return r(),E(se,null,[o.value?(r(),E("div",Ve,[i(N,{title:f(B)[p.value].label,"logo-img-url":f(B)[p.value].icon,class:"h-[4rem] w-[4rem]","has-shadow":!1},null,8,["title","logo-img-url"]),s("h2",De,S(f(B)[p.value].label),1)])):T("",!0),l.value?(r(),E("div",Le,[i(g,{type:"circle",class:"w-[60px] h-[60px]"}),i(g,{type:"header",class:"w-[200px]"}),i(g,{type:"rectangle",class:"md:max-w-[50vw] w-full h-[250px] mt-16"})])):T("",!0),v.value?(r(),y(c,{key:2,variant:"danger",message:"Oh no! Something went wrong when managing your Canarytoken data. Please refresh the page or try again later."})):T("",!0),o.value?(r(),E("div",$e,[s("div",Ne,[(r(),y(ne,null,{fallback:h(()=>[s("div",Pe,[i(g,{class:"w-[100px]",type:"text"}),i(g,{class:"w-full",type:"header"})])]),default:h(()=>[(r(),y(te(w.value),{"token-backend-response":o.value},null,8,["token-backend-response"]))]),_:1})),i(Se,{class:"mt-32"},{default:h(()=>[A(S(o.value.canarydrop.memo),1)]),_:1}),i(de,{"token-backend-response":o.value,class:"mt-32"},null,8,["token-backend-response"]),i(c,{class:"mt-32",variant:e.value?"danger":"info","text-link":e.value?"Check History":"",onClick:k},{default:h(()=>[e.value?(r(),E("span",Ge,[A(" This Canarytoken has been triggered "),s("span",He,S(e.value),1),A(" time"+S(e.value>1?"s":""),1)])):(r(),E("span",We,"This Canarytoken has never been triggered"))]),_:1},8,["variant","text-link"]),i(be,{memo:o.value.canarydrop.memo,token:o.value.canarydrop.canarytoken._value,auth:o.value.canarydrop.auth,type:o.value.canarydrop.type},null,8,["memo","token","auth","type"])]),s("div",Ke,[i(Ee,{class:"mt-32 mb-8"})])])):T("",!0)],64)}}}),Fe=O({__name:"ManageView",setup(x){return(n,_)=>(r(),y(G,null,{default:h(()=>[i(je)]),_:1}))}});export{Fe as default};