import{d as A,B as p,k as E,r as d,o as f,a5 as s,C as o,a6 as a,a as N,b as R,j as _,f as t,u as C,g,i as r,h as x,p as U,q as v}from"./index-V0ERJlwk.js";import{A as O}from"./AppLayoutOneColumn-hiXF76Kg.js";import{B}from"./BannerDeviceCanarytools-CioOVBeR.js";const D={class:"flex flex-col items-center gap-8 mb-24"},w=["src"],h=t("h2",{class:"text-xl text-center text-grey-800"}," Automatic Setup Process Complete ",-1),M={class:"flex flex-col justify-center p-16 md:p-32 md:mx-32 rounded-xl bg-grey-50 md:max-w-[50vw] w-full"},j=A({__name:"EntraIDResultView",setup(y){const e=p(),u=E(),l=d("token_icons/azure_id_config.png");f(async()=>{Object.values(s).includes(e.params.result)||u.push({name:"error"})});const c=o(()=>e.params.result===s.ENTRA_STATUS_HAS_CUSTOM_CSS_ALREADY?a.ENTRA_STATUS_HAS_CUSTOM_CSS_ALREADY:e.params.result===s.ENTRA_STATUS_ERROR?a.ENTRA_STATUS_ERROR:e.params.result===s.ENTRA_STATUS_NO_ADMIN_CONSENT?a.ENTRA_STATUS_NO_ADMIN_CONSENT:a.ENTRA_STATUS_SUCCESS),i=o(()=>e.params.result===s.ENTRA_STATUS_ERROR?"danger":e.params.result===s.ENTRA_STATUS_NO_ADMIN_CONSENT?"warning":e.params.result===s.ENTRA_STATUS_SUCCESS?"success":"info"),S=()=>{window.close()};return(I,n)=>{const m=U,T=v;return N(),R(O,null,{default:_(()=>[t("div",D,[t("img",{src:C(g)(l.value),class:"h-[4rem]","aria-hidden":"true",alt:" Azure Entra ID login logo"},null,8,w),h]),t("div",M,[r(m,{class:"mb-16",message:c.value,variant:i.value},null,8,["message","variant"]),r(T,{class:"m-auto",variant:"secondary",onClick:n[0]||(n[0]=b=>S())},{default:_(()=>[x("Close Window")]),_:1}),r(B,{class:"my-8"})])]),_:1})}}});export{j as default};
