import{i as m,r as a,B as j,E as H,o as y,c as x,a as e,d as n,h as l,s as A,C as S,S as F,P as N,b as B,e as V,F as I,f as P,y as G,J as K,k as O}from"./vendor.174b2452.js";import{u as T,a as D}from"./index.9242546d.js";import{i as U}from"./v-lazy-image.686f9aeb.js";import{u as Q}from"./isSafari.91ffff2c.js";import{C as X,S as E}from"./carousel.0852e321.js";const M={class:"w-[100vw] flex lg:flex-row flex-col lg:justify-start justify-center items-center min-h-screen bg-c-black lg:px-15 px-5 relative mb-20 lg:mb-0"},Z={class:"black-edition text-white text-[22vw] leading-none mt-40 lg:mt-[5vh] tracking-tighter"},$=e("span",{class:"relative font-roxbor font-normal italic"},"Black ",-1),ee=e("br",null,null,-1),le={class:"relative uppercase font-corsa font-bold"},se=A("Edition "),te={class:"img-wrapper rounded-image lg:absolute relative lg:right-[17%] lg:top-[10%] flex justify-center items-center lg:mt-0 mt-10 lg:w-[19vw] w-[80vw]"},oe=["src"],ae={ref:"doubleCircle",class:"bg-c-black w-[100vw] h-screen relative flex justify-center items-center pb-20 md:pb-0"},ne={class:"img-wrapper lg:w-[90] w-[100vw] h-full z-100 lg:relative absolute"},re=["src"],ie=e("div",{class:"text-c-gray lg:text-[2.25vw] text-[3vw] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:w-[35vw] w-auto text-center"},[e("p",null,[A(" It's in a can and bottle. "),e("br"),A(" Choose whichever sounds "),e("br"),A(" good for you. "),e("span",{class:"font-roxbor italic text-white"},"Intentionally innovated"),A(" to give you energy, "),e("br"),A(" so you can achieve your most "),e("span",{class:"font-roxbor italic text-white"},"extraordinary"),A(" acts. ")])],-1),ce={setup(R,{expose:w}){const s=Q();let t,o,r;s?(t=new URL("assets/Bold191.7cc2b2ac.png",self.location).href,o=new URL("assets/black.31873f0b.png",self.location).href,r=new URL("assets/circles.5f2a1054.png",self.location).href):(t=new URL("assets/Bold191.e42de8d6.webp",self.location).href,o=new URL("assets/black.0ccf4106.webp",self.location).href,r=new URL("assets/circles.a9ad6f1a.webp",self.location).href);const d=new URL("assets/black_blur.aa63a0d1.png",self.location).href,p=m("scrollWrapper"),h=m("eventBus"),g=m("main"),b=m("scalingCircle"),i=m("horizontalScroll2"),k=a(),_=a(),W=T();let f=null,c=null,u=null;function v(){f&&(f.kill(),f=null),c&&(c.kill(),c=null)}function L(){c&&c.refresh()}function q(){W.value||(v(),u=S.timeline(),u.from(".black-edition",{y:800,duration:1}).from(".rounded-image",{x:1e3,rotate:360,duration:1},"-=1"),u.pause(),f=S.to(_.value,{x:()=>-(_.value.offsetWidth-window.innerWidth),onStart:()=>{u.play()}}),c=F.create({trigger:k.value,anticipatePin:1,pin:!0,scrub:!0,start:1.5*g.value.$el.offsetHeight+b.value.$el.offsetHeight+window.innerHeight/2+b.value.$refs.mask.offsetHeight+i.value.$refs.story.$el.offsetWidth+i.value.$refs.story2.$el.offsetWidth+i.value.$refs.story3.$el.offsetWidth+i.value.$refs.blankSpace.offsetWidth,end:_.value.offsetWidth+1.5*g.value.$el.offsetHeight+b.value.$el.offsetHeight+window.innerHeight/2+b.value.$refs.mask.offsetHeight+i.value.$refs.story.$el.offsetWidth+i.value.$refs.story2.$el.offsetWidth+i.value.$refs.story3.$el.offsetWidth+i.value.$refs.blankSpace.offsetWidth,scroller:p.value,animation:f,invalidateOnRefresh:!0}))}function C(){L()}j(()=>{q(),h.on("wrapper-resize",C),C()}),H(()=>{v(),h.off("wrapper-resize",C)});function z(){u.play()}return w({pinWrap:_,animate:z}),(J,Y)=>(y(),x("div",{ref_key:"sectionPin",ref:k,class:"min-h-screen overflow-hidden flex"},[e("div",{ref_key:"pinWrap",ref:_,class:"pin-wrap min-h-screen flex flex-col lg:flex-row justify-start lg:items-center"},[e("div",M,[e("h1",Z,[$,ee,e("span",le,[se,n(l(U),{class:"absolute lg:left-[30%] lg:bottom-[0%] lg:w-[12vw] w-[25vw] right-0 bottom-[70%] animate-float",src:l(o),"src-placeholder":l(d)},null,8,["src","src-placeholder"])])]),e("div",te,[e("img",{class:"w-full h-full rounded-full",alt:"",src:l(t)},null,8,oe)])]),e("div",ae,[e("div",ne,[e("img",{class:"w-full h-full object-cover",alt:"",src:l(r)},null,8,re)]),ie],512)],512)],512))}};const fe={class:"cans relative z-3 min-h-screen bg-white"},ue={class:"can can-1 absolute z-3"},de={class:"can can-2 absolute z-1 animate-float"},pe={class:"can can-3 absolute z-2 animate-float"},he={setup(R){const w=Q();a();let s,t,o;w?(s=new URL("assets/1.547e70ed.png",self.location).href,t=new URL("assets/2.bb393830.png",self.location).href,o=new URL("assets/3.1088e741.png",self.location).href):(s=new URL("assets/1.e9635126.webp",self.location).href,t=new URL("assets/2.1623d768.webp",self.location).href,o=new URL("assets/3.6e8c59c6.webp",self.location).href);const r=new URL("assets/1_blur.aeedb15e.png",self.location).href,d=new URL("assets/2_blur.38664fe2.png",self.location).href,p=new URL("assets/3_blur.3740b0be.png",self.location).href;return(h,g)=>(y(),x("div",fe,[e("div",ue,[n(l(U),{class:"w-full h-auto",src:l(s),"src-placeholder":l(r)},null,8,["src","src-placeholder"])]),e("div",de,[n(l(U),{class:"w-full h-auto",src:l(t),"src-placeholder":l(d)},null,8,["src","src-placeholder"])]),e("div",pe,[n(l(U),{class:"w-full h-auto",src:l(o),"src-placeholder":l(p)},null,8,["src","src-placeholder"])])]))}};var ge=D(he,[["__scopeId","data-v-3e2e224a"]]);const we={class:"text-white text-[22vw] leading-tight lg:leading-none relative mt-15 lg:mt-0"},be={class:"word absolute font-roxbor font-bold italic z-2"},ve=e("span",null,"L",-1),Ae={class:"relative"},me=A("i"),Ue=e("div",{class:"w-4 h-4 bg-white rounded-full"},null,-1),ye=[Ue],Re=e("span",null,"g",-1),_e=e("span",null,"h",-1),xe=e("span",null,"t",-1),ke=e("br",null,null,-1),Ke=e("span",{class:"font-corsa font-bold uppercase tracking-tighter"},[e("span",null,"E"),e("span",null,"d"),e("span",null,"i"),e("span",null,"t"),e("span",null,"i"),e("span",null,"o"),e("span",null,"n")],-1),Ce={class:"lg:hidden h-full w-full mt-10"},ze={setup(R){const w=Q();let s,t,o,r;w?(s=new URL("assets/light.0ca475e9.png",self.location).href,t=new URL("assets/group1.69cec22d.png",self.location).href,o=new URL("assets/group2.e547a3b2.png",self.location).href,r=new URL("assets/lightedition.d28980c5.jpg",self.location).href):(s=new URL("assets/light.da664012.webp",self.location).href,t=new URL("data:image/webp;base64,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",self.location).href,o=new URL("assets/group2.506c8767.webp",self.location).href,r=new URL("assets/lightedition.4597b332.webp",self.location).href);const d=new URL("assets/light_blur.4be139ab.png",self.location).href,p=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAAnCAYAAACv+ADgAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAAXNSR0IArs4c6QAAAhRJREFUaEPtl9mKAjEQRdPu+/Ymvvji/3+SL6Igiorgri2noGSQYTA91dOjJBB6otWVe+pWIhPFcRy7DxtRgHoTR4NTb2KUC04FpzKsQGi/DIvvtXVwyqtcGQYHpzIsvtfWf+KU/iMQRZGXuKTBqUHt93t3PB7d6XSS2W63RSOfAQlgqVRytVrNFQqFpPq/fc8c6na7CcR2u3WbzeYhvtPpyBoogIA5HA5uMBi4YrH4v6FwAbDr9SrPfD4vELlcThzSyRr4arVqCkQyL6cQhAO0DaKoOn8jmmrrmjigeJ7PZxFdqVQecHw2nU5dr9cTKG1H8pCDYpCXgrAP02d4QSF0MpmIYMblcpGNW62WCEQocLSVgvDc7XYSh1DeHY/HbjabyTvNZlMc4wySZ71eC3yj0XDlctmNRqPHeXwVzAuKirIpIhHe7XZFAJOK4yJV1lsOCCARDAznaLFYuPl8LjG4BxTvrFYridHzxcXCfsPhUAriM7ygNLGeFxWg7aPfP6+/CgKA719tqSQ/A4mgnkUul0tpLR16toBGPG2qDtJqegY1Hifq9bqPGT/GmkBxPjj8TAQjEhDajXMBNEMdUkDiaEHW/X7f7Gr/NRRiqT4QOvT61utcYbWVeCoYsbSz3nYWdplAWQixzBGgLKuZZq7gVJrVtcwdnLKsZpq5glNpVtcyd3DKsppp5gpOpVldy9wf6dQdcTGmm6wzuDIAAAAASUVORK5CYII=",self.location).href,h=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAAnCAYAAACv+ADgAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAAXNSR0IArs4c6QAAAj5JREFUaEPtl1mK60AMRcuZ5/kvC8j+l5BNZAmBQCADmcfHEX2h6K+2XSavmyowtqokla6uJJLk/X6/3R9bSQT1SxiNTP0SolxkKjL1wQzE8vtg8lNdHZlKla4PKkemPpj8VFdnYoof9q/Xy5XL5R9d9ng8TDdJEoft8/l0lUrFbJF9f+ho/36/u1qt9qM7fKVMoDabjTudTm48Hrvz+WwACZTV7Xbd5XJxBMQqlUqmMxwO7d1oNNxut3PNZtPAoCtgAGi32yaje7vd3HQ6NR9pVmpQXLharezCTqfjrterAUButVoW7PF4tGCRecMKwR4OB7PhHPbYx1+1WjUf+BqNRpYg7LCZTCZp8JhualAYwYwWAeh/pspR52RY35wJCDYqRb3lT6yovNOylBmUnzoCXC6XVooEst1urQ8Gg4HJBK1+Uq/YxV/9JV/IPFlAfKcyE1O+E0DM53MrG3oNkPV63UpKDNJn9BTlSJmJNR8wupQmydGwSF13Xwa5QQFksVjY4Oj1ehYwfUWPaYDs93s3m80MFHswSc/ACg+Dgz2GCMnJy1ZuUCSH7PPAkMrI7zmd+cH6faVe4zwvS0F6SoNjvV5buSnjAusHybdGP+z0+32TYQgWQ60gTGlYMKIpP2TKjBITKL41Hek3dDmDRUoOUOz/N0zBECWkaYdMT6lnvo9v7Ys1TT0BzctYEKbyBhHaPoIKndGi/EWmispsaL+RqdAZLcpfZKqozIb2G5kKndGi/EWmispsaL9/kql/Yfrfm8D88PYAAAAASUVORK5CYII=",self.location).href,g=new URL("assets/lightedition_blur.f80d5398.png",self.location).href,b=m("scrollWrapper"),i=m("lightEdition"),k=m("eventBus"),_=a(),W=a();let f=null,c=null,u=null,v=null;function L(){f&&(f.kill(),f=null),c&&(c.kill(),c=null),u&&(u.kill(),u=null),v&&(v.kill(),v=null)}function q(){u.refresh(),v.refresh()}function C(){L(),f=S.timeline().to(".dot",{scale:0}).to(".dot",{opacity:0,duration:.01}),u=F.create({trigger:i.value.$el,scrub:!0,scroller:b.value,start:"75% top",end:"135%",animation:f}),c=S.timeline().from(".word",{translateY:0}),v=F.create({trigger:i.value.$el,scroller:b.value,scrub:!0,start:"top",end:"100%",animation:c})}function z(){q()}return j(()=>{C(),k.on("wrapper-resize",z),z()}),H(()=>{L(),k.off("wrapper-resize",z)}),(J,Y)=>(y(),x("div",{ref_key:"typo",ref:_,class:"flex flex-col min-h-[140vh] bg-c-black lg:items-center items-start justify-center overflow-hidden relative lg:px-0 px-5"},[e("div",we,[e("span",be,[ve,e("span",Ae,[me,e("span",{ref_key:"dot",ref:W,class:"dot absolute -right-[35%] top-[18%] transform lg:scale-[85] 4K:scale-[115] hidden lg:block"},ye,512)]),Re,_e,xe]),ke,Ke,n(l(U),{class:"absolute lg:right-[14%] lg:top-[24%] right-[5%] top-[3%] lg:w-[13.5vw] w-[23vw] animate-float",alt:"",src:l(s),"src-placeholder":l(d)},null,8,["src","src-placeholder"])]),e("div",Ce,[n(l(U),{class:"w-full",alt:"",src:l(t),"src-placeholder":l(p)},null,8,["src","src-placeholder"]),n(l(U),{class:"mt-5 w-full",alt:"",src:l(r),"src-placeholder":l(g)},null,8,["src","src-placeholder"]),n(l(U),{class:"mt-5 w-full",alt:"",src:l(o),"src-placeholder":l(h)},null,8,["src","src-placeholder"])])],512))}};const Le=N({components:{Carousel:X,Slide:E},props:{imgs:{type:Array,required:!0}}}),Se={class:"h-[60vh]"},Qe={class:"carousel__item h-full w-full mx-10"},We=["src"];function qe(R,w,s,t,o,r){const d=B("Slide"),p=B("Carousel");return y(),x("div",Se,[n(p,{"items-to-show":2.5,autoplay:2500,"wrap-around":!0},{default:V(()=>[(y(!0),x(I,null,P(R.imgs,(h,g)=>(y(),G(d,{key:g},{default:V(()=>[e("div",Qe,[e("img",{class:"w-full h-full object-cover",src:h,alt:""},null,8,We)])]),_:2},1024))),128))]),_:1},8,["items-to-show"])])}var Fe=D(Le,[["render",qe],["__scopeId","data-v-0a9686a8"]]);const Te={name:"StoryView",beforeRouteEnter(R,w,s){const t=T();R.name==="EditionsView"&&!t.value?s({name:"HomeView",hash:"#editions"}):s()}},Je=Object.assign(Te,{setup(R){const w=Q();let s;w?s=a([new URL("assets/lightedition.d28980c5.jpg",self.location).href,new URL("assets/group4.4db9a065.png",self.location).href,new URL("assets/lightedition.d28980c5.jpg",self.location).href,new URL("assets/group4.4db9a065.png",self.location).href,new URL("assets/lightedition.d28980c5.jpg",self.location).href,new URL("assets/group4.4db9a065.png",self.location).href]):s=a([new URL("assets/lightedition.4597b332.webp",self.location).href,new URL("assets/group4.4d660d44.webp",self.location).href,new URL("assets/lightedition.4597b332.webp",self.location).href,new URL("assets/group4.4d660d44.webp",self.location).href,new URL("assets/lightedition.4597b332.webp",self.location).href,new URL("assets/group4.4d660d44.webp",self.location).href]);const t=T(),o=a(),r=a(),d=a(),p=a(),h=a(),g=a(),b=a();return K("blackEditionCans",p),K("lightEdition",g),K("cansWrapper",d),K("sliderWrapper",h),K("hs1",o),K("hs2",r),(i,k)=>(y(),x("div",null,[e("div",null,[n(ce,{ref_key:"hs1",ref:o},null,512)]),e("div",{ref_key:"cansWrapper",ref:d,class:"w-full"},[n(ge,{ref_key:"blackEditionCans",ref:p},null,512),n(ze,{ref_key:"lightEdition",ref:g},null,512)],512),l(t)?O("",!0):(y(),x("div",{key:0,ref_key:"sliderWrapper",ref:h,class:"w-full"},[n(Fe,{ref_key:"slider",ref:b,imgs:l(s)},null,8,["imgs"])],512))]))}});export{Je as default};
