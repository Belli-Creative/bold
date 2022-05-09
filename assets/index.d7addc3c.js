import{a as w,b as k}from"./index.13d6aed1.js";import{o as r,c as f,a as t,H as I,m as N,i as h,r as x,B as Q,E as Y,t as T,h as e,d as n,e as c,C as y,S as L,F as U,f as C,y as G}from"./vendor.cadf7c70.js";import{C as W,P as Z,S as z}from"./carousel.a5c8c10d.js";const O={inheritAttrs:!1},S={class:"flex lg:flex-row flex-col items-center lg:w-full"};function J(o,s,g,v,a,u){return r(),f("div",S,[t("div",N(o.$attrs,{class:"font-corsa py-10 lg:mr-[5vw] text-lg text-[#858585] border-black"}),[I(o.$slots,"content")],16),I(o.$slots,"img")])}var F=w(O,[["render",J]]);const X={},P={width:"47",height:"43",viewBox:"0 0 47 43",fill:"none",xmlns:"http://www.w3.org/2000/svg"},V=t("path",{d:"M40.2754 11.2583L6.5004 30.7583",stroke:"black","stroke-width":"2"},null,-1),q=t("path",{d:"M22.5171 6.5L40.2754 11.2583L35.5171 29.0167",stroke:"black","stroke-width":"2"},null,-1),K=[V,q];function $(o,s){return r(),f("svg",P,K)}var b=w(X,[["render",$]]);const tt={class:"flex flex-col justify-center items-end w-[100vw] h-screen mx-auto relative"},et={class:"w-full 2xl:w-[1512px] mx-auto lg:px-55 px-10 lg:mt-30 mt-0"},st={class:"page-title !mb-8 w-full text-left"},lt=["innerHTML"],ot=["src"],it={class:"absolute right-[1%] bottom-[1%] 2xl:bottom-[3.5%]"},nt={class:"asdf grid grid-cols-2 justify-start w-[100vw] lg:mt-31 h-screen"},ct={class:"lg:w-[50vw] w-[100vw] h-full border-x border-black relative"},rt=["src"],at={class:"mt-5 2xl:mt-20 px-10 2xl:px-15"},At=["innerHTML"],dt={class:"absolute right-[1%] bottom-[1%] 2xl:bottom-[2.5%]"},ft={class:"w-[50vw] hidden lg:block"},ut={class:"w-[45vw] 2xl:w-[35vw] 4K:w-[27vw] mx-auto"},ht={class:"h-[50vh] flex flex-row items-center 2xl:justify-between justify-around border-b border-black"},xt={class:"img-wrapper w-60 2xl:w-1/2"},wt=["src"],gt={class:"img-wrapper w-60 2xl:w-1/2 pl-5"},vt=["src"],pt={class:"mt-5 2xl:mt-20"},_t=["innerHTML"],mt={class:"w-[100vw] lg:hidden block"},It={class:"w-full px-10 sm:px-20 py-15"},bt={class:"h-[30vh] mt-20"},Mt=["innerHTML"],Bt={class:"h-[70vh] lg:border-b lg:border-black flex justify-center items-center px-0 sm:px-20"},Rt={class:"carousel__item w-full h-full"},Et=["src"],Ht={setup(o){const{t:s}=k(),g=h("scrollWrapper"),v=h("scroller"),a=h("eventBus"),u=x(),A=x();a.on("wrapper-resize",d);let i=null,l=null;function d(){M()}function M(){l&&l.refresh()}function p(){i&&(i.kill(),i=null),l&&(l.kill(),l=null)}function B(){v.value.scrollTo(0,{duration:0,disableLerp:!0}),p(),i=y.to(A.value,{x:()=>-(A.value.offsetWidth-window.innerWidth)}),l=L.create({trigger:u.value,anticipatePin:1,pin:!0,scrub:!0,start:0,end:A.value.offsetWidth,scroller:g.value,animation:i,invalidateOnRefresh:!0})}Q(()=>{B(),a.on("wrapper-resize",d),d()}),Y(()=>{p(),a.off("wrapper-resize",d)});const R=new URL("assets/1.b4d0699c.jpg",self.location).href;new URL("data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QNzaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9IjdERTFEQUU3MjNBRUQzQjdEODAwODM5N0FDQzc0NjMwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkIwRDczRUIxQjU5MjExRUM4NzY1RjUxMDY2QzM0MzM3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkIwRDczRUIwQjU5MjExRUM4NzY1RjUxMDY2QzM0MzM3IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM3YjFiMTI5LWFkMjItNDEyMi05ZDIyLTFkNGYyMmUxOTYxMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozN2IxYjEyOS1hZDIyLTQxMjItOWQyMi0xZDRmMjJlMTk2MTIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7QBIUGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAA8cAVoAAxslRxwCAAACAAIAOEJJTQQlAAAAAAAQ/OEfici3yXgvNGI0B1h36//uAA5BZG9iZQBkwAAAAAH/2wCEAAYEBAQFBAYFBQYJBgUGCQsIBgYICwwKCgsKCgwQDAwMDAwMEAwODxAPDgwTExQUExMcGxsbHB8fHx8fHx8fHx8BBwcHDQwNGBAQGBoVERUaHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fH//AABEIACEAMgMBEQACEQEDEQH/xACPAAACAgMAAAAAAAAAAAAAAAAFBgQHAQIDAQACAwEAAAAAAAAAAAAAAAABAwACBAUQAAIBAgQCBQYIDwAAAAAAAAECAxEEABIFBiExQWEiExRRgbEyUjNxkcHhciM0B6HRssLSc4NUdLQVNTY3CBEAAgIBBAIDAQAAAAAAAAAAAAERAjEhQRIDUTKRIjMT/9oADAMBAAIRAxEAPwBn2sRBblUJoGIIFOfTjdUwsaoZ2KDifiGJBDo0rEcgfNgQGSHGxa6m7NKReTrOBBJBugxLG13Qc5E/IwKhYRuo1aIhunFgALwKeyPeVxAGNGsoVOqFL+EeFupVSOjMZMrFfqyFpThwqRiisxjoKq6hrMX3ryWK63FcWZt+9ht4+KKvdgvEUNDnVgeONb/qqKUuD+TMq9Ts2m+a+CwLbUoXleB7uFZ46ZoiGDdrlTj5OOMzsPS3Ffdt3u5dx6eugXkc2jzrEbyaBo8pXvfraGTt0Cc8uKNssogdNJsbCZ5Wt76EmSQMIiTUpkoHHCmU08uBVtZJCYWk0WIwFmuolA51YD8eDzDwBXgdN/foPWp6/wA2JyfgrxXkqnRNxC123YR2KLHqM0UYDQxASsMrgUKDN7I5YrRfYbe0Ipl4NavfvAlsormSx1C7v3g74l88bu5HHKc3xY6KvZIzxWC4dK2sNsXNtMVvr6/L93cyvMoLZ+c7LI3qinAYydk8k3ki7NIWBn8Ykd7BarbO0Jjky3a92Io6GmQgtnq2Uchgbg2NTrf9MtO9jsHuXV1hEUDIrBASqtxKDKBxpgPQKex3Tc5uLia1ze7IqK+UV+XBC8GfE9XTXn8+CVDOz32Rt7b1rqNwiC9khjdIE7U0zsOyq1J4fgGETGiH0ry1ZUO7bLRdJ/6Xt7mNRJZXU8OqPAWDqk88JlZAy8DlmFRjVR2dYZTsaWqH7euv6VNqOn3ZlECywi2VWLDPMXPQoPVQnC3pkSnywBzcWK3Sac1wPHC2ZY4C7Zint15V4c+eJOxII93f2EVqslzdeGhnUWqNIWUlwSKjl2uvAlFuLkAaPfkbq1WHNwjYgeYjFVkY8IZvHJ7XVhgsH2v9y0T+DT87Cl7miv42FTd/+8bT6EH8uca0ZX+bLAPu4vhHy4X2ZF9eDVvtX7M+nC9xhCuvs0f61fScS+AoT9I/zDW/pt6Riq9mOfqhj/SxcWf/2Q==",self.location).href;const E=new URL("assets/2.52cfe3ef.jpg",self.location).href,_=new URL("assets/3.0644b9d9.jpeg",self.location).href,m=new URL("assets/4.10c30abc.jpeg",self.location).href,H=x([_,m]);return(jt,Dt)=>(r(),f("div",null,[t("div",{ref_key:"sectionPin",ref:u,class:"min-h-screen overflow-hidden flex"},[t("div",{ref_key:"pinWrap",ref:A,class:"pin-wrap min-h-screen flex flex-row justify-start lg:items-center"},[t("div",tt,[t("div",et,[t("h1",st,T(e(s)("production.title")),1),n(F,{class:"border-t"},{content:c(()=>[t("p",{innerHTML:e(s)("production.paragraph1")},null,8,lt)]),img:c(()=>[t("img",{class:"w-auto lg:min-w-[20vw] h-auto py-10 lg:py-30",src:e(R)},null,8,ot)]),_:1})]),t("div",it,[n(b)])]),t("div",nt,[t("div",ct,[t("div",null,[t("img",{src:e(E),class:"w-full h-[50vh] object-cover"},null,8,rt)]),t("div",at,[t("p",{class:"text-lg text-[#858585] font-corsa",innerHTML:e(s)("production.paragraph2")},null,8,At)]),t("div",dt,[n(b)])]),t("div",ft,[t("div",ut,[t("div",ht,[t("div",xt,[t("img",{src:e(_),class:"w-full h-full pr-5"},null,8,wt)]),t("div",gt,[t("img",{src:e(m),class:"w-full h-full"},null,8,vt)])]),t("div",pt,[t("p",{class:"text-lg text-[#858585] font-corsa text-justify",innerHTML:e(s)("production.paragraph3")},null,8,_t)])])])]),t("div",mt,[t("div",It,[t("div",bt,[t("p",{class:"text-lg text-[#858585] font-corsa text-justify",innerHTML:e(s)("production.paragraph3")},null,8,Mt)]),t("div",Bt,[n(e(W),null,{addons:c(()=>[n(e(Z))]),default:c(()=>[(r(!0),f(U,null,C(H.value,(j,D)=>(r(),G(e(z),{key:D},{default:c(()=>[t("div",Rt,[t("img",{class:"w-full h-full object-cover",src:j,alt:""},null,8,Et)])]),_:2},1024))),128))]),_:1})])])])],512)],512)]))}};var Yt=w(Ht,[["__scopeId","data-v-5da4b7bd"]]);export{Yt as default};
