import{u as w,r as m}from"./index.70869e9c.js";import{_ as c}from"./BoldRing.c13abf65.js";import{r as d,Z as g,w as y,B as x,o as t,c as o,a as l,F as h,f as v,d as u}from"./vendor.9769c294.js";const k={class:"pt-[7.5vh]"},B={class:"w-[100vw] flex items-center px-[3vw] py-[3vh] border-b border-white"},V={key:0},j={key:1},E=l("h2",{class:"uppercase text-white font-bold flex flex-col items-center text-[20vw] py-[4vh]"},[l("span",null,"Bold"),l("span",{class:"font-roxbor"},"Space")],-1),L={class:"flex flex-col items-center px-[7vw] pb-[10vh]"},M={key:0,class:"w-[80vw]"},R=["src"],U={key:1,class:"pt-[3vh] w-[80vw]"},A=["src"],S={class:"w-[100vw] flex items-center px-[3vw] py-[3vh] border-b border-t border-white"},F={key:0},N={key:1},H={name:"StoryView",beforeRouteEnter(_,f,r){const i=w();_.name==="BoldSpaceView"&&!i.value?r({name:"HomeView",hash:"#bold-space"}):r()}},q=Object.assign(H,{setup(_){const f=w(),r=d([]),i=d([]);g(()=>{r.value=[],i.value=[]}),f.value||m.push({name:"EditionsView",hash:"#bold-space"}),y(f,e=>{e||m.push({name:"EditionsView",hash:"#bold-space"})});function p(){for(let e=0;e<r.value.length;e++)r.value[e].setAnimation((e+1)*500);for(let e=0;e<r.value.length;e++)i.value[e].setAnimation((e+1)*500);setTimeout(p,4500)}x(()=>{p()});const b=d([new URL("assets/Bold-19.523f3184.png",self.location).href,new URL("assets/lightedition.d28980c5.jpg",self.location).href,new URL("assets/Bold-catalogue.38f6f966.png",self.location).href]);return(e,O)=>(t(),o("div",k,[l("div",B,[(t(),o(h,null,v(6,(n,a)=>l("div",{key:a},[n===6?(t(),o("div",V,[u(c,{ref_for:!0,ref:s=>{s&&r.value.push(s)}},null,512)])):(t(),o("div",j,[u(c,{ref_for:!0,ref:s=>{s&&r.value.push(s)},class:"mr-[2vw]"},null,512)]))])),64))]),l("div",null,[E,l("div",L,[(t(!0),o(h,null,v(b.value,(n,a)=>(t(),o("div",{key:a},[a===0?(t(),o("div",M,[l("img",{src:n,class:"w-full h-full object-cover"},null,8,R)])):(t(),o("div",U,[l("img",{src:n,class:"w-full h-full object-cover"},null,8,A)]))]))),128))])]),l("div",S,[(t(),o(h,null,v(6,(n,a)=>l("div",{key:a},[n===6?(t(),o("div",F,[u(c,{ref_for:!0,ref:s=>{s&&i.value.push(s)}},null,512)])):(t(),o("div",N,[u(c,{ref_for:!0,ref:s=>{s&&i.value.push(s)},class:"mr-[2vw]"},null,512)]))])),64))])]))}});export{q as default};