import{r as a,i as k,p as oe,v as Ue,o as M,c as Q,a as l,d as R,h as i,D as j,q as G,S as se,K as ae,L as P,z as U,M as Le,I as ne,w as _e,N as De,O as E,b as ye,e as Se,F as je,f as Be,G as Me,k as We}from"./vendor.31b2950f.js";import{u as ke,_ as Re}from"./index.4cf0b81f.js";import{i as B}from"./v-lazy-image.20674330.js";import{u as X}from"./isSafari.91ffff2c.js";const Oe={class:"w-[100vw] flex lg:flex-row flex-col lg:justify-start justify-center items-center min-h-screen bg-c-black lg:px-15 px-5 relative mb-20 lg:mb-0"},qe={class:"black-edition text-white text-[22vw] leading-none mt-40 lg:mt-[5vh] tracking-tighter"},Qe=l("span",{class:"relative font-roxbor font-normal italic"},"Black ",-1),Ve=l("br",null,null,-1),Ne={class:"relative uppercase font-corsa font-bold"},Fe=j("Edition "),He={class:"img-wrapper rounded-image lg:absolute relative lg:right-[17%] lg:top-[10%] flex justify-center items-center lg:mt-0 mt-10 lg:w-[19vw] w-[80vw]"},Ye=["src"],Ie={ref:"doubleCircle",class:"bg-c-black w-[100vw] h-screen relative flex justify-center items-center pb-20 md:pb-0"},Je={class:"img-wrapper lg:w-[90] w-[100vw] h-full z-100 lg:relative absolute"},Pe=["src"],Ee=l("div",{class:"text-c-gray lg:text-[2.25vw] text-[3vw] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:w-[35vw] w-auto text-center"},[l("p",null,[j(" It's in a can and bottle. "),l("br"),j(" Choose whichever sounds "),l("br"),j(" good for you. "),l("span",{class:"font-roxbor italic text-white"},"Intentionally innovated"),j(" to give you energy, "),l("br"),j(" so you can achieve your most "),l("span",{class:"font-roxbor italic text-white"},"extraordinary"),j(" acts. ")])],-1),Ge={setup(t,{expose:r}){const s=X();a();let o,d,p;s?(o=new URL("assets/Bold191.7cc2b2ac.png",self.location).href,d=new URL("assets/black.31873f0b.png",self.location).href,p=new URL("assets/circles.5f2a1054.png",self.location).href):(o=new URL("assets/Bold191.e42de8d6.webp",self.location).href,d=new URL("assets/black.0ccf4106.webp",self.location).href,p=new URL("assets/circles.a9ad6f1a.webp",self.location).href);const f=new URL("assets/black_blur.aa63a0d1.png",self.location).href,h=k("scrollWrapper");k("scroller");const v=k("eventBus"),c=k("main"),b=k("scalingCircle"),m=k("horizontalScroll2"),S=a(),g=a(),n=ke();let u=null,x=null,_=null;function A(){u&&(u.kill(),u=null),x&&(x.kill(),x=null)}function z(){x&&x.refresh()}function V(){n.value||(A(),_=G.timeline(),_.from(".black-edition",{y:800,duration:1}).from(".rounded-image",{x:1e3,rotate:360,duration:1},"-=1"),_.pause(),u=G.to(g.value,{x:()=>-(g.value.offsetWidth-window.innerWidth),onStart:()=>{_.play()}}),x=se.create({trigger:S.value,anticipatePin:1,pin:!0,scrub:!0,onStart:()=>console.log("Hello"),start:1.5*c.value.$el.offsetHeight+b.value.$el.offsetHeight+window.innerHeight/2+b.value.$refs.mask.offsetHeight+m.value.$refs.story.$el.offsetWidth+m.value.$refs.story2.$el.offsetWidth+m.value.$refs.story3.$el.offsetWidth+m.value.$refs.blankSpace.offsetWidth,end:g.value.offsetWidth+1.5*c.value.$el.offsetHeight+b.value.$el.offsetHeight+window.innerHeight/2+b.value.$refs.mask.offsetHeight+m.value.$refs.story.$el.offsetWidth+m.value.$refs.story2.$el.offsetWidth+m.value.$refs.story3.$el.offsetWidth+m.value.$refs.blankSpace.offsetWidth,scroller:h.value,animation:u,invalidateOnRefresh:!0}))}function K(){z()}return oe(()=>{V(),v.on("wrapper-resize",K),K()}),Ue(()=>{A(),v.off("wrapper-resize",K)}),r({pinWrap:g}),(W,Z)=>(M(),Q("div",{ref_key:"sectionPin",ref:S,class:"min-h-screen overflow-hidden flex"},[l("div",{ref_key:"pinWrap",ref:g,class:"pin-wrap min-h-screen flex flex-col lg:flex-row justify-start lg:items-center"},[l("div",Oe,[l("h1",qe,[Qe,Ve,l("span",Ne,[Fe,R(i(B),{class:"absolute lg:left-[30%] lg:bottom-[0%] lg:w-[12vw] w-[25vw] right-0 bottom-[70%] animate-float",src:i(d),"src-placeholder":i(f)},null,8,["src","src-placeholder"])])]),l("div",He,[l("img",{class:"w-full h-full rounded-full",alt:"",src:i(o)},null,8,Ye)])]),l("div",Ie,[l("div",Je,[l("img",{class:"w-full h-full object-cover",alt:"",src:i(p)},null,8,Pe)]),Ee],512)],512)],512))}};const Xe={class:"cans relative z-3 min-h-screen bg-white"},Ze={class:"can can-1 absolute z-3"},$e={class:"can can-2 absolute z-1 animate-float"},et={class:"can can-3 absolute z-2 animate-float"},tt={setup(t){const r=X();a();let s,o,d;r?(s=new URL("assets/1.547e70ed.png",self.location).href,o=new URL("assets/2.bb393830.png",self.location).href,d=new URL("assets/3.1088e741.png",self.location).href):(s=new URL("assets/1.e9635126.webp",self.location).href,o=new URL("assets/2.1623d768.webp",self.location).href,d=new URL("assets/3.6e8c59c6.webp",self.location).href);const p=new URL("assets/1_blur.aeedb15e.png",self.location).href,f=new URL("assets/2_blur.38664fe2.png",self.location).href,h=new URL("assets/3_blur.3740b0be.png",self.location).href;return(v,c)=>(M(),Q("div",Xe,[l("div",Ze,[R(i(B),{class:"w-full h-auto",src:i(s),"src-placeholder":i(p)},null,8,["src","src-placeholder"])]),l("div",$e,[R(i(B),{class:"w-full h-auto",src:i(o),"src-placeholder":i(f)},null,8,["src","src-placeholder"])]),l("div",et,[R(i(B),{class:"w-full h-auto",src:i(d),"src-placeholder":i(h)},null,8,["src","src-placeholder"])])]))}};var lt=Re(tt,[["__scopeId","data-v-3e2e224a"]]);const st={class:"text-white text-[22vw] leading-tight lg:leading-none relative mt-15 lg:mt-0"},nt={class:"word absolute font-roxbor font-bold italic z-2"},ot=l("span",null,"L",-1),at={class:"relative"},rt=j("i"),it=l("div",{class:"w-4 h-4 bg-white rounded-full"},null,-1),ct=[it],ut=l("span",null,"g",-1),dt=l("span",null,"h",-1),ft=l("span",null,"t",-1),pt=l("br",null,null,-1),ht=l("span",{class:"font-corsa font-bold uppercase tracking-tighter"},[l("span",null,"E"),l("span",null,"d"),l("span",null,"i"),l("span",null,"t"),l("span",null,"i"),l("span",null,"o"),l("span",null,"n")],-1),gt={class:"lg:hidden h-full w-full mt-10"},vt={setup(t){const r=X();let s,o,d,p;r?(s=new URL("assets/light.0ca475e9.png",self.location).href,o=new URL("assets/group1.69cec22d.png",self.location).href,d=new URL("assets/group2.e547a3b2.png",self.location).href,p=new URL("assets/lightedition.d28980c5.jpg",self.location).href):(s=new URL("assets/light.da664012.webp",self.location).href,o=new URL("data:image/webp;base64,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",self.location).href,d=new URL("assets/group2.506c8767.webp",self.location).href,p=new URL("assets/lightedition.4597b332.webp",self.location).href);const f=new URL("assets/light_blur.4be139ab.png",self.location).href,h=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAAnCAYAAACv+ADgAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAAXNSR0IArs4c6QAAAhRJREFUaEPtl9mKAjEQRdPu+/Ymvvji/3+SL6Igiorgri2noGSQYTA91dOjJBB6otWVe+pWIhPFcRy7DxtRgHoTR4NTb2KUC04FpzKsQGi/DIvvtXVwyqtcGQYHpzIsvtfWf+KU/iMQRZGXuKTBqUHt93t3PB7d6XSS2W63RSOfAQlgqVRytVrNFQqFpPq/fc8c6na7CcR2u3WbzeYhvtPpyBoogIA5HA5uMBi4YrH4v6FwAbDr9SrPfD4vELlcThzSyRr4arVqCkQyL6cQhAO0DaKoOn8jmmrrmjigeJ7PZxFdqVQecHw2nU5dr9cTKG1H8pCDYpCXgrAP02d4QSF0MpmIYMblcpGNW62WCEQocLSVgvDc7XYSh1DeHY/HbjabyTvNZlMc4wySZ71eC3yj0XDlctmNRqPHeXwVzAuKirIpIhHe7XZFAJOK4yJV1lsOCCARDAznaLFYuPl8LjG4BxTvrFYridHzxcXCfsPhUAriM7ygNLGeFxWg7aPfP6+/CgKA719tqSQ/A4mgnkUul0tpLR16toBGPG2qDtJqegY1Hifq9bqPGT/GmkBxPjj8TAQjEhDajXMBNEMdUkDiaEHW/X7f7Gr/NRRiqT4QOvT61utcYbWVeCoYsbSz3nYWdplAWQixzBGgLKuZZq7gVJrVtcwdnLKsZpq5glNpVtcyd3DKsppp5gpOpVldy9wf6dQdcTGmm6wzuDIAAAAASUVORK5CYII=",self.location).href,v=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAAnCAYAAACv+ADgAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAAXNSR0IArs4c6QAAAj5JREFUaEPtl1mK60AMRcuZ5/kvC8j+l5BNZAmBQCADmcfHEX2h6K+2XSavmyowtqokla6uJJLk/X6/3R9bSQT1SxiNTP0SolxkKjL1wQzE8vtg8lNdHZlKla4PKkemPpj8VFdnYoof9q/Xy5XL5R9d9ng8TDdJEoft8/l0lUrFbJF9f+ho/36/u1qt9qM7fKVMoDabjTudTm48Hrvz+WwACZTV7Xbd5XJxBMQqlUqmMxwO7d1oNNxut3PNZtPAoCtgAGi32yaje7vd3HQ6NR9pVmpQXLharezCTqfjrterAUButVoW7PF4tGCRecMKwR4OB7PhHPbYx1+1WjUf+BqNRpYg7LCZTCZp8JhualAYwYwWAeh/pspR52RY35wJCDYqRb3lT6yovNOylBmUnzoCXC6XVooEst1urQ8Gg4HJBK1+Uq/YxV/9JV/IPFlAfKcyE1O+E0DM53MrG3oNkPV63UpKDNJn9BTlSJmJNR8wupQmydGwSF13Xwa5QQFksVjY4Oj1ehYwfUWPaYDs93s3m80MFHswSc/ACg+Dgz2GCMnJy1ZuUCSH7PPAkMrI7zmd+cH6faVe4zwvS0F6SoNjvV5buSnjAusHybdGP+z0+32TYQgWQ60gTGlYMKIpP2TKjBITKL41Hek3dDmDRUoOUOz/N0zBECWkaYdMT6lnvo9v7Ys1TT0BzctYEKbyBhHaPoIKndGi/EWmispsaL+RqdAZLcpfZKqozIb2G5kKndGi/EWmispsaL9/kql/Yfrfm8D88PYAAAAASUVORK5CYII=",self.location).href,c=new URL("assets/lightedition_blur.f80d5398.png",self.location).href,b=k("scrollWrapper"),m=k("lightEdition"),S=k("eventBus"),g=a(),n=a();let u=null,x=null,_=null,A=null;function z(){u&&(u.kill(),u=null),x&&(x.kill(),x=null),_&&(_.kill(),_=null),A&&(A.kill(),A=null)}function V(){_.refresh(),A.refresh()}function K(){z(),u=G.timeline().to(".dot",{scale:0}).to(".dot",{opacity:0,duration:.01}),_=se.create({trigger:m.value.$el,scrub:!0,scroller:b.value,start:"75% top",end:"135%",animation:u}),x=G.timeline().from(".word",{translateY:0}),A=se.create({trigger:m.value.$el,scroller:b.value,scrub:!0,start:"top",end:"100%",animation:x})}function W(){V()}return oe(()=>{K(),S.on("wrapper-resize",W),W()}),Ue(()=>{z(),S.off("wrapper-resize",W)}),(Z,N)=>(M(),Q("div",{ref_key:"typo",ref:g,class:"flex flex-col min-h-[140vh] bg-c-black lg:items-center items-start justify-center overflow-hidden relative lg:px-0 px-5"},[l("div",st,[l("span",nt,[ot,l("span",at,[rt,l("span",{ref_key:"dot",ref:n,class:"dot absolute -right-[35%] top-[18%] transform lg:scale-[85] hidden lg:block"},ct,512)]),ut,dt,ft]),pt,ht,R(i(B),{class:"absolute lg:right-[14%] lg:top-[24%] right-[5%] top-[3%] lg:w-[13.5vw] w-[23vw]",alt:"",src:i(s),"src-placeholder":i(f)},null,8,["src","src-placeholder"])]),l("div",gt,[R(i(B),{class:"w-full",alt:"",src:i(o),"src-placeholder":i(h)},null,8,["src","src-placeholder"]),R(i(B),{class:"mt-5 w-full",alt:"",src:i(p),"src-placeholder":i(c)},null,8,["src","src-placeholder"]),R(i(B),{class:"mt-5 w-full",alt:"",src:i(d),"src-placeholder":i(v)},null,8,["src","src-placeholder"])])],512))}};/**
 * Vue 3 Carousel 0.1.36
 * (c) 2022
 * @license MIT
 */const C={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,breakpoints:void 0};function mt(t,r){let s;return function(...o){s&&clearTimeout(s),s=setTimeout(()=>{t(...o),s=null},r)}}function wt(t,r){let s;return function(...o){const d=this;s||(t.apply(d,o),s=!0,setTimeout(()=>s=!1,r))}}function bt(t){var r,s,o;return t?((s=(r=t[0])===null||r===void 0?void 0:r.type)===null||s===void 0?void 0:s.name)==="CarouselSlide"?t:((o=t[0])===null||o===void 0?void 0:o.children)||[]:[]}function At(t,r){if(t.wrapAround)return r-1;switch(t.snapAlign){case"start":return r-t.itemsToShow;case"end":return r-1;case"center":case"center-odd":return r-Math.ceil(t.itemsToShow/2);case"center-even":return r-Math.ceil(t.itemsToShow/2);default:return 0}}function yt(t){if(t.wrapAround)return 0;switch(t.snapAlign){case"start":return 0;case"end":return t.itemsToShow-1;case"center":case"center-odd":return Math.floor((t.itemsToShow-1)/2);case"center-even":return Math.floor((t.itemsToShow-2)/2);default:return 0}}function xe(t,r,s,o){return t.wrapAround?r:Math.min(Math.max(r,o),s)}function St({slidesBuffer:t,currentSlide:r,snapAlign:s,itemsToShow:o,wrapAround:d,slidesCount:p}){let f=t.indexOf(r);if(s==="center"||s==="center-odd"?f-=(o-1)/2:s==="center-even"?f-=(o-2)/2:s==="end"&&(f-=o-1),!d){const h=p-o,v=0;f=Math.max(Math.min(f,h),v)}return f}var xt=ae({name:"Carousel",props:{itemsToShow:{default:C.itemsToShow,type:Number},itemsToScroll:{default:C.itemsToScroll,type:Number},wrapAround:{default:C.wrapAround,type:Boolean},snapAlign:{default:C.snapAlign,validator(t){return["start","end","center","center-even","center-odd"].includes(t)}},transition:{default:C.transition,type:Number},breakpoints:{default:C.breakpoints,type:Object},autoplay:{default:C.autoplay,type:Number},pauseAutoplayOnHover:{default:C.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:C.mouseDrag,type:Boolean},touchDrag:{default:C.touchDrag,type:Boolean},settings:{default(){return{}},type:Object}},setup(t,{slots:r,emit:s,expose:o}){var d;const p=a(null),f=a([]),h=a([]),v=a(0),c=a(1),b=a(null),m=a(null);let S=a({}),g=Object.assign({},C);const n=P(Object.assign({},g)),u=a((d=n.modelValue)!==null&&d!==void 0?d:0),x=a(0),_=a(0),A=a(0),z=a(0);U("config",n),U("slidesBuffer",h),U("slidesCount",c),U("currentSlide",u),U("maxSlide",A),U("minSlide",z);function V(){const e=Object.assign(Object.assign({},t),t.settings);S=a(Object.assign({},e.breakpoints)),g=Object.assign(Object.assign({},e),{settings:void 0,breakpoints:void 0}),W(g)}function K(){const e=Object.keys(S.value).map(y=>Number(y)).sort((y,L)=>+L-+y);let w=Object.assign({},g);e.some(y=>window.matchMedia(`(min-width: ${y}px)`).matches?(w=Object.assign(Object.assign({},w),S.value[y]),!0):!1),W(w)}function W(e){for(let w in e)n[w]=e[w]}const Z=mt(()=>{S.value&&(K(),F()),N()},16);function N(){if(!p.value)return;const e=p.value.getBoundingClientRect();v.value=e.width/n.itemsToShow}function F(){c.value=Math.max(f.value.length,1),!(c.value<=0)&&(_.value=Math.ceil((c.value-1)/2),A.value=At(n,c.value),z.value=yt(n),u.value=xe(n,u.value,A.value,z.value))}function Y(){const e=[...Array(c.value).keys()];if(n.wrapAround&&n.itemsToShow+1<=c.value){let L=(n.itemsToShow!==1?Math.round((c.value-n.itemsToShow)/2):0)-u.value;if(n.snapAlign==="end"?L+=Math.floor(n.itemsToShow-1):(n.snapAlign==="center"||n.snapAlign==="center-odd")&&L++,L<0)for(let q=L;q<0;q++)e.push(Number(e.shift()));else for(let q=0;q<L;q++)e.unshift(Number(e.pop()))}h.value=e}oe(()=>{S.value&&(K(),F()),N(),n.autoplay&&n.autoplay>0&&de(),window.addEventListener("resize",Z,{passive:!0})}),Le(()=>{m.value&&clearTimeout(m.value),fe(!1)});let T=!1;const I={x:0,y:0},J={x:0,y:0},O=P({x:0,y:0}),re=a(!1),$=a(!1),Te=()=>{$.value=!0},Ce=()=>{$.value=!1},ie=wt(e=>{T||e.preventDefault(),J.x=T?e.touches[0].clientX:e.clientX,J.y=T?e.touches[0].clientY:e.clientY;const w=J.x-I.x,y=J.y-I.y;O.y=y,O.x=w},16);function ce(e){T=e.type==="touchstart",T||e.preventDefault(),!(!T&&e.button!==0||H.value)&&(re.value=!0,I.x=T?e.touches[0].clientX:e.clientX,I.y=T?e.touches[0].clientY:e.clientY,document.addEventListener(T?"touchmove":"mousemove",ie),document.addEventListener(T?"touchend":"mouseup",ue))}function ue(){re.value=!1;const e=Math.sign(O.x)*.4,w=Math.round(O.x/v.value+e);let y=xe(n,u.value-w,A.value,z.value);D(y),O.x=0,O.y=0,document.removeEventListener(T?"touchmove":"mousemove",ie),document.removeEventListener(T?"touchend":"mouseup",ue)}function de(){b.value=setInterval(()=>{n.pauseAutoplayOnHover&&$.value||ee()},n.autoplay)}function fe(e=!0){!b.value||(clearInterval(b.value),e&&de())}const H=a(!1);function D(e,w=!1){if(fe(),u.value===e||H.value)return;const y=c.value-1;if(e>y)return D(e-c.value);if(e<0)return D(e+c.value);H.value=!0,x.value=u.value,u.value=e,w||s("update:modelValue",u.value),m.value=setTimeout(()=>{n.wrapAround&&Y(),H.value=!1},n.transition)}function ee(){let e=u.value+n.itemsToScroll;n.wrapAround||(e=Math.min(e,A.value)),D(e)}function pe(){let e=u.value-n.itemsToScroll;n.wrapAround||(e=Math.max(e,z.value)),D(e)}const he={slideTo:D,next:ee,prev:pe};U("nav",he);const ge=ne(()=>St({slidesBuffer:h.value,itemsToShow:n.itemsToShow,snapAlign:n.snapAlign,wrapAround:Boolean(n.wrapAround),currentSlide:u.value,slidesCount:c.value}));U("slidesToScroll",ge);const ze=ne(()=>({transform:`translateX(${O.x-ge.value*v.value}px)`,transition:`${H.value?n.transition:0}ms`}));function ve(){V()}function me(){V(),K(),F(),Y(),N()}function we(){F(),Y()}_e(()=>Object.values(t),me),ve(),De(()=>{const e=c.value!==f.value.length;t.modelValue!==void 0&&u.value!==t.modelValue&&D(Number(t.modelValue),!0),e&&we()});const be={config:n,slidesBuffer:h,slidesCount:c,slideWidth:v,currentSlide:u,maxSlide:A,minSlide:z,middleSlide:_};o({updateBreakpointsConfigs:K,updateSlidesData:F,updateSlideWidth:N,updateSlidesBuffer:Y,initCarousel:ve,restartCarousel:me,updateCarousel:we,slideTo:D,next:ee,prev:pe,nav:he,data:be});const te=r.default||r.slides,le=r.addons,Ae=P(be);return()=>{const e=bt(te==null?void 0:te(Ae)),w=(le==null?void 0:le(Ae))||[];f.value=e,e.forEach((q,Ke)=>q.props.index=Ke);const y=E("ol",{class:"carousel__track",style:ze.value,onMousedown:n.mouseDrag?ce:null,onTouchstart:n.touchDrag?ce:null},e),L=E("div",{class:"carousel__viewport"},y);return E("section",{ref:p,class:"carousel","aria-label":"Gallery",onMouseenter:Te,onMouseleave:Ce},[L,w])}}}),Ut=ae({name:"CarouselSlide",props:{index:{type:Number,default:1}},setup(t,{slots:r}){const s=k("config",P(Object.assign({},C))),o=k("slidesBuffer",a([])),d=k("currentSlide",a(0)),p=k("slidesToScroll",a(0)),f=a(t.index);s.wrapAround&&(h(),_e(o,h));function h(){f.value=o.value.indexOf(t.index)}const v=ne(()=>{const g=s.itemsToShow;return{width:`${1/g*100}%`,order:f.value.toString()}}),c=()=>t.index===d.value,b=()=>{const g=Math.ceil(p.value),n=Math.floor(p.value+s.itemsToShow);return o.value.slice(g,n).includes(t.index)},m=()=>t.index===o.value[Math.ceil(p.value)-1],S=()=>t.index===o.value[Math.floor(p.value+s.itemsToShow)];return()=>{var g;return E("li",{style:v.value,class:{carousel__slide:!0,"carousel__slide--active":c(),"carousel__slide--visible":b(),"carousel__slide--prev":m(),"carousel__slide--next":S()}},(g=r.default)===null||g===void 0?void 0:g.call(r))}}});const _t=ae({components:{Carousel:xt,Slide:Ut},props:{imgs:{type:Array,required:!0}}}),kt={class:"h-[60vh]"},Rt={class:"carousel__item h-full w-full mx-10"},Tt=["src"];function Ct(t,r,s,o,d,p){const f=ye("Slide"),h=ye("Carousel");return M(),Q("div",kt,[R(h,{"items-to-show":2.5,autoplay:2500,"wrap-around":!0},{default:Se(()=>[(M(!0),Q(je,null,Be(t.imgs,(v,c)=>(M(),Me(f,{key:c},{default:Se(()=>[l("div",Rt,[l("img",{class:"w-full h-full object-cover",src:v,alt:""},null,8,Tt)])]),_:2},1024))),128))]),_:1},8,["items-to-show"])])}var zt=Re(_t,[["render",Ct],["__scopeId","data-v-0a9686a8"]]);const Bt={setup(t){const r=X();let s;r?s=a([new URL("assets/lightedition.d28980c5.jpg",self.location).href,new URL("assets/group4.4db9a065.png",self.location).href,new URL("assets/lightedition.d28980c5.jpg",self.location).href,new URL("assets/group4.4db9a065.png",self.location).href,new URL("assets/lightedition.d28980c5.jpg",self.location).href,new URL("assets/group4.4db9a065.png",self.location).href]):s=a([new URL("assets/lightedition.4597b332.webp",self.location).href,new URL("assets/group4.4d660d44.webp",self.location).href,new URL("assets/lightedition.4597b332.webp",self.location).href,new URL("assets/group4.4d660d44.webp",self.location).href,new URL("assets/lightedition.4597b332.webp",self.location).href,new URL("assets/group4.4d660d44.webp",self.location).href]);const o=ke(),d=a(),p=a(),f=a(),h=a(),v=a(),c=a(),b=a();return U("blackEditionCans",h),U("lightEdition",c),U("cansWrapper",f),U("sliderWrapper",v),U("hs1",d),U("hs2",p),(m,S)=>(M(),Q("div",null,[l("div",null,[R(Ge,{ref_key:"hs1",ref:d},null,512)]),l("div",{ref_key:"cansWrapper",ref:f,class:"w-full"},[R(lt,{ref_key:"blackEditionCans",ref:h},null,512),R(vt,{ref_key:"lightEdition",ref:c},null,512)],512),i(o)?We("",!0):(M(),Q("div",{key:0,ref_key:"sliderWrapper",ref:v,class:"w-full"},[R(zt,{ref_key:"slider",ref:b,imgs:i(s)},null,8,["imgs"])],512))]))}};export{Bt as default};
