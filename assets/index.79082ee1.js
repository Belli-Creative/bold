import{u as a,a as n}from"./index.4cf0b81f.js";import{I as u,y as i,o as m,G as p,J as c,h as l}from"./vendor.31b2950f.js";const f={name:"EditionView",beforeRouteEnter(t,s,e){const o=a();t.hash==="#story"&&o.value?e("/story"):e()}},E=Object.assign(f,{setup(t){const s=a(),e=u(()=>s.value?i(()=>n(()=>import("./Mobile.5e4bbb07.js"),["assets/Mobile.5e4bbb07.js","assets/Mobile.140c53d1.css","assets/lazy-video.9828dd5b.js","assets/vendor.31b2950f.js","assets/index.4cf0b81f.js","assets/index.7ad8f35e.css","assets/isSafari.91ffff2c.js","assets/v-lazy-image.20674330.js"])):i(()=>n(()=>import("./Desktop.65715005.js"),["assets/Desktop.65715005.js","assets/Desktop.0ae0d8b8.css","assets/index.4cf0b81f.js","assets/index.7ad8f35e.css","assets/vendor.31b2950f.js","assets/lazy-video.9828dd5b.js","assets/isSafari.91ffff2c.js","assets/BoldStory3.c6af08a1.js","assets/BoldStory3.cbc46eb4.css","assets/v-lazy-image.20674330.js","assets/index.58225a36.js","assets/index.b35e782e.css","assets/BoldRing.795dcc96.js","assets/BoldRing.c32cf198.css"])));return(o,r)=>(m(),p(c(l(e)),{onActivate:r[0]||(r[0]=_=>o.$emit("activate",_))}))}});export{E as default};