import{d as i,r,a as p,c,i as t,I as m,f as l,p as _}from"./index-V0ERJlwk.js";import{_ as h}from"./TokenDisplay.vue_vue_type_script_setup_true_lang-68dhoA29.js";import"./BaseSwitch-BS1zB0rf.js";import"./BaseCodeSnippet.vue_vue_type_script_setup_true_lang-CHS3ZykA.js";const d=l("p",{class:"mt-16 text-sm"}," Use this Javascript to detect when someone has cloned a webpage. ",-1),v=i({__name:"ActivatedToken",props:{tokenData:{}},emits:["howToUse"],setup(o){const s=r(o.tokenData.clonedsite_js||"");return(n,e)=>{const a=_;return p(),c(m,null,[t(h,{"token-snippet":s.value},null,8,["token-snippet"]),d,t(a,{class:"mt-24",variant:"info",message:"When someone clones your site, they’ll grab this JavaScript too. When the script runs on their cloned site, it triggers an alert to let you know what’s going on.","text-link":"More tips?",onClick:e[0]||(e[0]=()=>n.$emit("howToUse"))})],64)}}});export{v as default};
