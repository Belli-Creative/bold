import{c as f,b as y}from"./index.0cedffe2.js";import{o as r,c as a,a as e,r as l,B as g,C as $,S as _,H as v,f as p,i as m,E as b,F as z,h as B,g as x,k as w,s as M,t as C}from"./vendor.83e2b7bc.js";const q={},I={width:"13",height:"14",viewBox:"0 0 17 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},L=e("path",{d:"M8.5 0.5V17.5",stroke:"black","stroke-width":"2"},null,-1),S=e("path",{d:"M17 9L0 9",stroke:"black","stroke-width":"2"},null,-1),T=[L,S];function F(c,t){return r(),a("svg",I,T)}var V=f(q,[["render",F]]);const j={},E={width:"17",height:"2",viewBox:"0 0 17 2",fill:"none",xmlns:"http://www.w3.org/2000/svg"},H=e("path",{d:"M17 1L0 0.999999",stroke:"#FF0000","stroke-width":"2"},null,-1),N=[H];function P(c,t){return r(),a("svg",E,N)}var Q=f(j,[["render",P]]);const R={class:"qa font-corsa cursor-pointer flex flex-row flex-wrap justify-between items-center border-t border-black last:border-b last:border-black py-4 md:py-5"},A={class:"relative w-2/12"},D={setup(c){let t=null;const o=l(),i=l(),n=l(),s=l(!1);g(()=>{t=$.timeline({onComplete:()=>{_.refresh()},onReverseComplete:()=>{_.refresh()}}),t.to(n.value,{opacity:0,zIndex:0,duration:.1}).to(o.value,{marginTop:"15px",duration:.5}).to(o.value,{height:"auto",duration:.5,marginBottom:"15px"},"-=0.5").to(o.value,{opacity:1,duration:1}).to(i.value,{opacity:1,zIndex:1,duration:.2},"-=1"),t.pause()});function h(){s.value?(t.reverse(),s.value=!1):(t.play(),s.value=!0)}return(u,k)=>(r(),a("div",R,[e("div",{onClick:h,class:"text-[#858585] font-[650] lg:text-2xl text-lg w-10/12 z-10"},[v(u.$slots,"question",{},void 0,!0)]),e("div",A,[e("div",{ref_key:"iconPlus",ref:n,class:"absolute right-2 -top-[0.35rem] p-3 -m-3 z-1"},[p(V)],512),e("div",{ref_key:"iconMinus",ref:i,class:"opacity-0 absolute right-2 -top-[0.35rem] p-3 -m-3 z-0"},[p(Q)],512)]),e("div",{ref_key:"answer",ref:o,class:"h-0 opacity-0 z-0 text-black lg:text-2xl text-lg"},[v(u.$slots,"answer",{},void 0,!0)],512)]))}};var K=f(D,[["__scopeId","data-v-ef07a426"]]);const U={style:{"min-height":"calc(100vh - 2 * 2.75rem)"},class:"w-full flex flex-col justify-center 2xl:w-[1512px] lg:px-25 mx-auto 4K:mt-0 mt-30"},W=e("div",{class:"page-title px-7 md:px-25 lg:mt-30"},"FAQ",-1),G={class:"px-7 md:px-25 mb-25"},J=["innerHTML"],Y={setup(c){const{t,local:o}=y(),i=m("scroller"),n=m("eventBus");function s(){_.refresh()}return g(()=>{i.value.scrollTo(0,{duration:0,disableLerp:!0}),n.on("wrapper-resize",s),s()}),b(()=>{n.off("wrapper-resize",s)}),(h,u)=>(r(),a("div",U,[W,e("div",G,[(r(),a(z,null,B(8,(k,d)=>p(K,{key:d},{question:x(()=>[e("div",{innerHTML:w(t)(`faq.question-${d}`)},null,8,J)]),answer:x(()=>[M(C(w(t)(`faq.answer-${d}`)),1)]),_:2},1024)),64))])]))}};export{Y as default};