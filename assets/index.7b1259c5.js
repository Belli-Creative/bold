import{o as e,c as s,C as c,a as t,b as m,D as p,F as f,f as u,t as w,j as v,E as k,e as _,G as g,d as l,k as y,h as $}from"./vendor.5df25090.js";import{_ as h,I as b,u as j}from"./index.797bbf02.js";const B={},T={class:"text-c-gray 4K:w-200 lg:w-80 w-150 leading-none lg:text-[1.5vw] text-[5vw] mt-5 pl-2"},L=c(" B"),S=t("span",{class:"text-custom-red-100"},"o",-1),C=c("ld is owned by "),M=t("span",{class:"font-roxbor italic text-white"},"Yupekchi",-1),N=c(" Company. Please visit the companies website for more information and business opportunities. "),V=[L,S,C,M,N];function I(o,n){return e(),s("p",T,V)}var E=h(B,[["render",I]]);const F={},R={class:"w-full h-full"},A=t("h2",{class:"text-white lg:text-[10vw] text-[22vw] font-bold leading-none"},[c(" Many "),t("br"),t("span",{class:"font-roxbor italic"},"Thanks!")],-1),D=[A];function Y(o,n){return e(),s("div",R,D)}var q=h(F,[["render",Y]]);const G={class:"lg:w-10/12 w-full h-full"},H={class:"py-6 lg:text-[1.5vw] text-[5vw]"},K={key:0,class:"flex-wrap items-center lg:justify-between justify-start w-full hidden lg:flex"},O=["href"],P={key:1,class:"flex-wrap items-center lg:justify-between justify-start w-full lg:hidden flex"},U=g('<div class="links flex flex-col"><a href="#" class="text-white"> Instagram </a><a href="#" class="text-white"> Facebook </a></div><div class="links flex flex-col ml-10"><a href="#" class="text-white"> Twitter </a><a href="#" class="text-white"> Tik tok </a></div>',2),z=[U],J={key:2,class:"flex flex-wrap items-center justify-between"},x={props:{links:{type:Object,required:!0},socialLinks:{type:Boolean,default:!1}},setup(o){return(n,a)=>{const d=m("RouterLink");return e(),s("div",G,[t("div",{class:"uppercase text-white border-b lg:text-[3.75vw] text-[10vw] font-bold flex items-center py-6",onClick:a[0]||(a[0]=i=>n.$router.push("/"))},[p(n.$slots,"title")]),t("div",H,[o.socialLinks?(e(),s("div",K,[(e(!0),s(f,null,u(o.links,(i,r)=>(e(),s("a",{key:r,href:i.to,class:"text-white"},w(i.name),9,O))),128))])):v("",!0),o.socialLinks?(e(),s("div",P,z)):(e(),s("div",J,[(e(!0),s(f,null,u(o.links,(i,r)=>(e(),k(d,{key:r,to:i.to,class:"text-white"},{default:_(()=>[c(w(i.name),1)]),_:2},1032,["to"]))),128))]))])])}}},Q={},W={width:"46",height:"47",viewBox:"0 0 46 47",fill:"none",xmlns:"http://www.w3.org/2000/svg"},X=t("path",{d:"M36.7715 9.71094L9.19432 37.2881",stroke:"white","stroke-width":"5"},null,-1),Z=t("path",{d:"M18.3857 9.71094H36.7705V28.0957",stroke:"white","stroke-width":"5"},null,-1),tt=[X,Z];function et(o,n){return e(),s("svg",W,tt)}var st=h(Q,[["render",et]]);const ot={class:"flex items-center text-c-gray py-10 pb-16"},nt=t("span",{class:"text-c-gray lg:text-2xl text-base"},"\xA9 2003-2021 All rights reserved",-1),it={class:"ml-auto hidden lg:block"},lt={setup(o){return(n,a)=>(e(),s("div",ot,[nt,t("div",it,[l(b,{width:"120",height:"41"})])]))}},at={class:"w-full flex flex-col justify-between min-h-screen lg:px-18 px-5 mt-10"},ct={class:"flex lg:flex-row flex-col lg:justify-between pt-20"},rt={class:"lg:w-[50vw] w-full flex justify-start"},dt={class:"lg:w-[50vw] w-full self-end py-3 flex lg:justify-center justify-start"},_t={class:"flex lg:flex-row flex-col"},ht={class:"lg:w-1/2 w-full flex justify-start"},ft=t("h2",null,"Menu",-1),ut={class:"lg:w-1/2 w-full flex lg:justify-end"},wt=t("h2",null,"Back To Top",-1),xt={class:"ml-auto"},vt={setup(o){const n=j(),a=y(()=>n.value?{editions:{name:"Editions",to:"/editions"},story:{name:"Story",to:"/story"},boldSpace:{name:"Bold Space",to:"/bold-space"}}:{editions:{name:"Editions",to:"/editions"},story:{name:"Story",to:"/editions#story"},boldSpace:{name:"Bold Space",to:"/editions#bold-space"}}),d=[{name:"Instagram",to:"https://www.instagram.com"},{name:"Facebook",to:"https://www.facebook.com"},{name:"Youtube",to:"https://www.youtube.com"},{name:"Tik Tok",to:"https://www.tiktok.com"}];return(i,r)=>(e(),s("div",at,[t("div",ct,[t("div",rt,[l(q)]),t("div",dt,[l(E)])]),t("div",_t,[t("div",ht,[l(x,{links:$(a)},{title:_(()=>[ft]),_:1},8,["links"])]),t("div",ut,[l(x,{"social-links":!0,links:d},{title:_(()=>[wt,t("div",xt,[l(st)])]),_:1})])]),l(lt)]))}};export{vt as default};