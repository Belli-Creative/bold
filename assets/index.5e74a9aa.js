import{b as kn,a as is,c as ss,u as Wc,_ as qc}from"./index.d63f1218.js";import{i as Xe,r as ke,B as tn,E as un,e as jc,o as ye,c as Me,a as C,k as oe,f as Fe,g as so,X as Qs,C as Et,S as Bt,z as Xc,F as wo,Y as $s,Z as Zs,s as Te,J as Ut,v as Bl,t as fn,n as Jo,h as zl,y as Yc,m as Qo,w as Jc,O as Qc,I as $c,d as Zc}from"./vendor.83e2b7bc.js";import{u as On,I as Kc,B as eh,L as Fl,e as Ul,a as th,b as nh,c as ih,d as sh}from"./IconYoutube.c6b833a6.js";import{i as Zt}from"./v-lazy-image.d7acfd30.js";import{S as rh,C as oh}from"./carousel.1b2f6303.js";/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bo="138",ah=0,$o=1,lh=2,Nl=1,ch=2,qi=3,Ji=0,ut=1,bi=2,kl=1,bn=0,xi=1,Zo=2,Ko=3,ea=4,hh=5,di=100,uh=101,dh=102,ta=103,na=104,fh=200,ph=201,mh=202,gh=203,Ol=204,Hl=205,vh=206,xh=207,_h=208,yh=209,wh=210,bh=0,Mh=1,Sh=2,ro=3,Ah=4,Eh=5,Th=6,Rh=7,Ks=0,Ch=1,Lh=2,Mn=0,Ph=1,Ih=2,Dh=3,Bh=4,zh=5,Vl=300,Mi=301,Si=302,oo=303,ao=304,er=306,Mo=307,lo=1e3,Wt=1001,co=1002,mt=1003,ia=1004,sa=1005,wt=1006,Fh=1007,tr=1008,Nn=1009,Uh=1010,Nh=1011,Qi=1012,kh=1013,Gs=1014,Fn=1015,_i=1016,Oh=1017,Hh=1018,yi=1020,Vh=1021,Gh=1022,Rt=1023,Wh=1024,qh=1025,Un=1026,Ai=1027,jh=1028,Xh=1029,Yh=1030,Jh=1031,Qh=1033,vr=33776,xr=33777,_r=33778,yr=33779,ra=35840,oa=35841,aa=35842,la=35843,$h=36196,ca=37492,ha=37496,ua=37808,da=37809,fa=37810,pa=37811,ma=37812,ga=37813,va=37814,xa=37815,_a=37816,ya=37817,wa=37818,ba=37819,Ma=37820,Sa=37821,Aa=36492,Zh=2200,Kh=2201,eu=2202,Ws=2300,qs=2301,wr=2302,fi=2400,pi=2401,js=2402,So=2500,Gl=2501,tu=0,En=3e3,it=3001,nu=3200,iu=3201,Ri=0,su=1,br=7680,ru=519,$i=35044,Xs=35048,Ea="300 es",ho=1035;class Hn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const vt=[];for(let r=0;r<256;r++)vt[r]=(r<16?"0":"")+r.toString(16);const Mr=Math.PI/180,uo=180/Math.PI;function Kt(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vt[r&255]+vt[r>>8&255]+vt[r>>16&255]+vt[r>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[n&255]+vt[n>>8&255]+vt[n>>16&255]+vt[n>>24&255]).toUpperCase()}function Dt(r,e,t){return Math.max(e,Math.min(t,r))}function ou(r,e){return(r%e+e)%e}function Sr(r,e,t){return(1-t)*r+t*e}function Ta(r){return(r&r-1)===0&&r!==0}function fo(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}class Q{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}Q.prototype.isVector2=!0;class xt{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],v=i[0],x=i[3],p=i[6],m=i[1],A=i[4],b=i[7],w=i[2],L=i[5],P=i[8];return s[0]=o*v+a*m+l*w,s[3]=o*x+a*A+l*L,s[6]=o*p+a*b+l*P,s[1]=c*v+h*m+d*w,s[4]=c*x+h*A+d*L,s[7]=c*p+h*b+d*P,s[2]=u*v+f*m+g*w,s[5]=u*x+f*A+g*L,s[8]=u*p+f*b+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*s,f=c*s-o*l,g=t*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(i*c-h*n)*v,e[2]=(a*n-i*o)*v,e[3]=u*v,e[4]=(h*t-i*l)*v,e[5]=(i*s-a*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],o=i[3],a=i[6],l=i[1],c=i[4],h=i[7];return i[0]=t*s+n*l,i[3]=t*o+n*c,i[6]=t*a+n*h,i[1]=-n*s+t*l,i[4]=-n*o+t*c,i[7]=-n*a+t*h,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}xt.prototype.isMatrix3=!0;function Wl(r){for(let e=r.length-1;e>=0;--e)if(r[e]>65535)return!0;return!1}function Zi(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}const ql={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ht={h:0,s:0,l:0},hs={h:0,s:0,l:0};function Ar(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function wi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Er(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}class ge{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=ou(e,1),t=Dt(t,0,1),n=Dt(n,0,1),t===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+t):n+t-n*t,s=2*n-i;this.r=Ar(s,i,e+1/3),this.g=Ar(s,i,e),this.b=Ar(s,i,e-1/3)}return this}setStyle(e){function t(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let i;const s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,t(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,t(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const a=parseFloat(i[1])/360,l=parseInt(i[2],10)/100,c=parseInt(i[3],10)/100;return t(i[4]),this.setHSL(a,l,c)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=n[1],s=i.length;if(s===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=ql[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}copyLinearToSRGB(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){const t=this.r,n=this.g,i=this.b,s=Math.max(t,n,i),o=Math.min(t,n,i);let a,l;const c=(o+s)/2;if(o===s)a=0,l=0;else{const h=s-o;switch(l=c<=.5?h/(s+o):h/(2-s-o),s){case t:a=(n-i)/h+(n<i?6:0);break;case n:a=(i-t)/h+2;break;case i:a=(t-n)/h+4;break}a/=6}return e.h=a,e.s=l,e.l=c,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,n){return this.getHSL(Ht),Ht.h+=e,Ht.s+=t,Ht.l+=n,this.setHSL(Ht.h,Ht.s,Ht.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ht),e.getHSL(hs);const n=Sr(Ht.h,hs.h,t),i=Sr(Ht.s,hs.s,t),s=Sr(Ht.l,hs.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}ge.NAMES=ql;ge.prototype.isColor=!0;ge.prototype.r=1;ge.prototype.g=1;ge.prototype.b=1;let Yn;class Vn{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Yn===void 0&&(Yn=Zi("canvas")),Yn.width=e.width,Yn.height=e.height;const n=Yn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Yn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=Zi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=wi(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wi(t[n]/255)*255):t[n]=wi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class jl{constructor(e=null){this.uuid=Kt(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Tr(i[o].image)):s.push(Tr(i[o]))}else s=Tr(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Tr(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?Vn.getDataURL(r):r.data?{data:Array.prototype.slice.call(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}jl.prototype.isSource=!0;let au=0;class gt extends Hn{constructor(e=gt.DEFAULT_IMAGE,t=gt.DEFAULT_MAPPING,n=Wt,i=Wt,s=wt,o=tr,a=Rt,l=Nn,c=1,h=En){super();Object.defineProperty(this,"id",{value:au++}),this.uuid=Kt(),this.name="",this.source=new jl(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lo:e.x=e.x-Math.floor(e.x);break;case Wt:e.x=e.x<0?0:1;break;case co:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lo:e.y=e.y-Math.floor(e.y);break;case Wt:e.y=e.y<0?0:1;break;case co:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}gt.DEFAULT_IMAGE=null;gt.DEFAULT_MAPPING=Vl;gt.prototype.isTexture=!0;class Ze{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],v=l[2],x=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-x)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+x)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,b=(f+1)/2,w=(p+1)/2,L=(h+u)/4,P=(d+v)/4,W=(g+x)/4;return A>b&&A>w?A<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(A),i=L/n,s=P/n):b>w?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=L/i,s=W/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=P/s,i=W/s),this.set(n,i,s,t),this}let m=Math.sqrt((x-g)*(x-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(m)<.001&&(m=1),this.x=(x-g)/m,this.y=(d-v)/m,this.z=(u-h)/m,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}Ze.prototype.isVector4=!0;class zt extends Hn{constructor(e,t,n={}){super();this.width=e,this.height=t,this.depth=1,this.scissor=new Ze(0,0,e,t),this.scissorTest=!1,this.viewport=new Ze(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new gt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:wt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image=Object.assign({},e.texture.image),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}zt.prototype.isWebGLRenderTarget=!0;class nr extends gt{constructor(e=null,t=1,n=1,i=1){super(null);this.image={data:e,width:t,height:n,depth:i},this.magFilter=mt,this.minFilter=mt,this.wrapR=Wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}nr.prototype.isDataArrayTexture=!0;class lu extends zt{constructor(e,t,n){super(e,t);this.depth=n,this.texture=new nr(null,e,t,n),this.texture.isRenderTargetTexture=!0}}lu.prototype.isWebGLArrayRenderTarget=!0;class Ao extends gt{constructor(e=null,t=1,n=1,i=1){super(null);this.image={data:e,width:t,height:n,depth:i},this.magFilter=mt,this.minFilter=mt,this.wrapR=Wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}Ao.prototype.isData3DTexture=!0;class cu extends zt{constructor(e,t,n){super(e,t);this.depth=n,this.texture=new Ao(null,e,t,n),this.texture.isRenderTargetTexture=!0}}cu.prototype.isWebGL3DRenderTarget=!0;class hu extends zt{constructor(e,t,n,i={}){super(e,t,i);const s=this.texture;this.texture=[];for(let o=0;o<n;o++)this.texture[o]=s.clone(),this.texture[o].isRenderTargetTexture=!0}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.texture.length;i<s;i++)this.texture[i].image.width=e,this.texture[i].image.height=t,this.texture[i].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone();return this}}hu.prototype.isWebGLMultipleRenderTargets=!0;class Ct{constructor(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=s[o+0],f=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(d!==v||l!==u||c!==f||h!==g){let x=1-a;const p=l*u+c*f+h*g+d*v,m=p>=0?1:-1,A=1-p*p;if(A>Number.EPSILON){const w=Math.sqrt(A),L=Math.atan2(w,p*m);x=Math.sin(x*L)/w,a=Math.sin(a*L)/w}const b=a*m;if(l=l*x+u*b,c=c*x+f*b,h=h*x+g*b,d=d*x+v*b,x===1-a){const w=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=w,c*=w,h*=w,d*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[o],u=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-a*f,e[t+2]=c*g+h*f+a*u-l*d,e[t+3]=h*g-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(s/2),u=l(n/2),f=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}Ct.prototype.isQuaternion=!0;class E{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Ra.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ra.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,h=l*n+a*t-s*i,d=l*i+s*n-o*t,u=-s*t-o*n-a*i;return this.x=c*l+u*-s+h*-a-d*-o,this.y=h*l+u*-o+d*-s-c*-a,this.z=d*l+u*-a+c*-o-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Rr.copy(this).projectOnVector(e),this.sub(Rr)}reflect(e){return this.sub(Rr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}E.prototype.isVector3=!0;const Rr=new E,Ra=new Ct;class jt{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const h=e[l],d=e[l+1],u=e[l+2];h<t&&(t=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>o&&(o=d),u>a&&(a=u)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const h=e.getX(l),d=e.getY(l),u=e.getZ(l);h<t&&(t=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>o&&(o=d),u>a&&(a=u)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)Pn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Pn)}else n.boundingBox===null&&n.computeBoundingBox(),Cr.copy(n.boundingBox),Cr.applyMatrix4(e.matrixWorld),this.union(Cr);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ui),us.subVectors(this.max,Ui),Jn.subVectors(e.a,Ui),Qn.subVectors(e.b,Ui),$n.subVectors(e.c,Ui),pn.subVectors(Qn,Jn),mn.subVectors($n,Qn),In.subVectors(Jn,$n);let t=[0,-pn.z,pn.y,0,-mn.z,mn.y,0,-In.z,In.y,pn.z,0,-pn.x,mn.z,0,-mn.x,In.z,0,-In.x,-pn.y,pn.x,0,-mn.y,mn.x,0,-In.y,In.x,0];return!Lr(t,Jn,Qn,$n,us)||(t=[1,0,0,0,1,0,0,0,1],!Lr(t,Jn,Qn,$n,us))?!1:(ds.crossVectors(pn,mn),t=[ds.x,ds.y,ds.z],Lr(t,Jn,Qn,$n,us))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Pn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}jt.prototype.isBox3=!0;const sn=[new E,new E,new E,new E,new E,new E,new E,new E],Pn=new E,Cr=new jt,Jn=new E,Qn=new E,$n=new E,pn=new E,mn=new E,In=new E,Ui=new E,us=new E,ds=new E,Dn=new E;function Lr(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Dn.fromArray(r,s);const a=i.x*Math.abs(Dn.x)+i.y*Math.abs(Dn.y)+i.z*Math.abs(Dn.z),l=e.dot(Dn),c=t.dot(Dn),h=n.dot(Dn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const uu=new jt,Ca=new E,fs=new E,Pr=new E;class Ci{constructor(e=new E,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):uu.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Pr.subVectors(e,this.center);const t=Pr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(Pr.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?fs.set(0,0,1).multiplyScalar(e.radius):fs.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Ca.copy(e.center).add(fs)),this.expandByPoint(Ca.copy(e.center).sub(fs)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const rn=new E,Ir=new E,ps=new E,gn=new E,Dr=new E,ms=new E,Br=new E;class Gn{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rn.copy(this.direction).multiplyScalar(t).add(this.origin),rn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ir.copy(e).add(t).multiplyScalar(.5),ps.copy(t).sub(e).normalize(),gn.copy(this.origin).sub(Ir);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ps),a=gn.dot(this.direction),l=-gn.dot(ps),c=gn.lengthSq(),h=Math.abs(1-o*o);let d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=s*h,d>=0)if(u>=-g)if(u<=g){const v=1/h;d*=v,u*=v,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(d).add(this.origin),i&&i.copy(ps).multiplyScalar(u).add(Ir),f}intersectSphere(e,t){rn.subVectors(e.center,this.origin);const n=rn.dot(this.direction),i=rn.dot(rn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||s>i||((s>n||n!==n)&&(n=s),(o<i||i!==i)&&(i=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,rn)!==null}intersectTriangle(e,t,n,i,s){Dr.subVectors(t,e),ms.subVectors(n,e),Br.crossVectors(Dr,ms);let o=this.direction.dot(Br),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gn.subVectors(this.origin,e);const l=a*this.direction.dot(ms.crossVectors(gn,ms));if(l<0)return null;const c=a*this.direction.dot(Dr.cross(gn));if(c<0||l+c>o)return null;const h=-a*gn.dot(Br);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class we{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,o,a,l,c,h,d,u,f,g,v,x){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=v,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new we().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Zn.setFromMatrixColumn(e,0).length(),s=1/Zn.setFromMatrixColumn(e,1).length(),o=1/Zn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=o*h,f=o*d,g=a*h,v=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-v*c,t[9]=-a*l,t[2]=v-u*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const u=l*h,f=l*d,g=c*h,v=c*d;t[0]=u+v*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=v+u*a,t[10]=o*l}else if(e.order==="ZXY"){const u=l*h,f=l*d,g=c*h,v=c*d;t[0]=u-v*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=v-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const u=o*h,f=o*d,g=a*h,v=a*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+v,t[1]=l*d,t[5]=v*c+u,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const u=o*l,f=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=v-u*d,t[8]=g*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-v*d}else if(e.order==="XZY"){const u=o*l,f=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+v,t[5]=o*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*h,t[10]=v*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(du,e,fu)}lookAt(e,t,n){const i=this.elements;return Pt.subVectors(e,t),Pt.lengthSq()===0&&(Pt.z=1),Pt.normalize(),vn.crossVectors(n,Pt),vn.lengthSq()===0&&(Math.abs(n.z)===1?Pt.x+=1e-4:Pt.z+=1e-4,Pt.normalize(),vn.crossVectors(n,Pt)),vn.normalize(),gs.crossVectors(Pt,vn),i[0]=vn.x,i[4]=gs.x,i[8]=Pt.x,i[1]=vn.y,i[5]=gs.y,i[9]=Pt.y,i[2]=vn.z,i[6]=gs.z,i[10]=Pt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],v=n[6],x=n[10],p=n[14],m=n[3],A=n[7],b=n[11],w=n[15],L=i[0],P=i[4],W=i[8],ne=i[12],O=i[1],_=i[5],T=i[9],I=i[13],F=i[2],H=i[6],U=i[10],V=i[14],B=i[3],X=i[7],K=i[11],Z=i[15];return s[0]=o*L+a*O+l*F+c*B,s[4]=o*P+a*_+l*H+c*X,s[8]=o*W+a*T+l*U+c*K,s[12]=o*ne+a*I+l*V+c*Z,s[1]=h*L+d*O+u*F+f*B,s[5]=h*P+d*_+u*H+f*X,s[9]=h*W+d*T+u*U+f*K,s[13]=h*ne+d*I+u*V+f*Z,s[2]=g*L+v*O+x*F+p*B,s[6]=g*P+v*_+x*H+p*X,s[10]=g*W+v*T+x*U+p*K,s[14]=g*ne+v*I+x*V+p*Z,s[3]=m*L+A*O+b*F+w*B,s[7]=m*P+A*_+b*H+w*X,s[11]=m*W+A*T+b*U+w*K,s[15]=m*ne+A*I+b*V+w*Z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],v=e[7],x=e[11],p=e[15];return g*(+s*l*d-i*c*d-s*a*u+n*c*u+i*a*f-n*l*f)+v*(+t*l*f-t*c*u+s*o*u-i*o*f+i*c*h-s*l*h)+x*(+t*c*d-t*a*f-s*o*d+n*o*f+s*a*h-n*c*h)+p*(-i*a*h-t*l*d+t*a*u+i*o*d-n*o*u+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],v=e[13],x=e[14],p=e[15],m=d*x*c-v*u*c+v*l*f-a*x*f-d*l*p+a*u*p,A=g*u*c-h*x*c-g*l*f+o*x*f+h*l*p-o*u*p,b=h*v*c-g*d*c+g*a*f-o*v*f-h*a*p+o*d*p,w=g*d*l-h*v*l-g*a*u+o*v*u+h*a*x-o*d*x,L=t*m+n*A+i*b+s*w;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/L;return e[0]=m*P,e[1]=(v*u*s-d*x*s-v*i*f+n*x*f+d*i*p-n*u*p)*P,e[2]=(a*x*s-v*l*s+v*i*c-n*x*c-a*i*p+n*l*p)*P,e[3]=(d*l*s-a*u*s-d*i*c+n*u*c+a*i*f-n*l*f)*P,e[4]=A*P,e[5]=(h*x*s-g*u*s+g*i*f-t*x*f-h*i*p+t*u*p)*P,e[6]=(g*l*s-o*x*s-g*i*c+t*x*c+o*i*p-t*l*p)*P,e[7]=(o*u*s-h*l*s+h*i*c-t*u*c-o*i*f+t*l*f)*P,e[8]=b*P,e[9]=(g*d*s-h*v*s-g*n*f+t*v*f+h*n*p-t*d*p)*P,e[10]=(o*v*s-g*a*s+g*n*c-t*v*c-o*n*p+t*a*p)*P,e[11]=(h*a*s-o*d*s-h*n*c+t*d*c+o*n*f-t*a*f)*P,e[12]=w*P,e[13]=(h*v*i-g*d*i+g*n*u-t*v*u-h*n*x+t*d*x)*P,e[14]=(g*a*i-o*v*i-g*n*l+t*v*l+o*n*x-t*a*x)*P,e[15]=(o*d*i-h*a*i+h*n*l-t*d*l-o*n*u+t*a*u)*P,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,d=a+a,u=s*c,f=s*h,g=s*d,v=o*h,x=o*d,p=a*d,m=l*c,A=l*h,b=l*d,w=n.x,L=n.y,P=n.z;return i[0]=(1-(v+p))*w,i[1]=(f+b)*w,i[2]=(g-A)*w,i[3]=0,i[4]=(f-b)*L,i[5]=(1-(u+p))*L,i[6]=(x+m)*L,i[7]=0,i[8]=(g+A)*P,i[9]=(x-m)*P,i[10]=(1-(u+v))*P,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Zn.set(i[0],i[1],i[2]).length();const o=Zn.set(i[4],i[5],i[6]).length(),a=Zn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Vt.copy(this);const c=1/s,h=1/o,d=1/a;return Vt.elements[0]*=c,Vt.elements[1]*=c,Vt.elements[2]*=c,Vt.elements[4]*=h,Vt.elements[5]*=h,Vt.elements[6]*=h,Vt.elements[8]*=d,Vt.elements[9]*=d,Vt.elements[10]*=d,t.setFromRotationMatrix(Vt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*s/(t-e),c=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i),u=-(o+s)/(o-s),f=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=u,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,l=1/(t-e),c=1/(n-i),h=1/(o-s),d=(t+e)*l,u=(n+i)*c,f=(o+s)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-u,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}we.prototype.isMatrix4=!0;const Zn=new E,Vt=new we,du=new E(0,0,0),fu=new E(1,1,1),vn=new E,gs=new E,Pt=new E,La=new we,Pa=new Ct;class Wn{constructor(e=0,t=0,n=0,i=Wn.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return La.makeRotationFromQuaternion(e),this.setFromRotationMatrix(La,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pa.setFromEuler(this),this.setFromQuaternion(Pa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}Wn.prototype.isEuler=!0;Wn.DefaultOrder="XYZ";Wn.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Eo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pu=0;const Ia=new E,Kn=new Ct,on=new we,vs=new E,Ni=new E,mu=new E,gu=new Ct,Da=new E(1,0,0),Ba=new E(0,1,0),za=new E(0,0,1),vu={type:"added"},Fa={type:"removed"};class Qe extends Hn{constructor(){super();Object.defineProperty(this,"id",{value:pu++}),this.uuid=Kt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qe.DefaultUp.clone();const e=new E,t=new Wn,n=new Ct,i=new E(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new we},normalMatrix:{value:new xt}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=Qe.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Eo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Kn.setFromAxisAngle(e,t),this.quaternion.multiply(Kn),this}rotateOnWorldAxis(e,t){return Kn.setFromAxisAngle(e,t),this.quaternion.premultiply(Kn),this}rotateX(e){return this.rotateOnAxis(Da,e)}rotateY(e){return this.rotateOnAxis(Ba,e)}rotateZ(e){return this.rotateOnAxis(za,e)}translateOnAxis(e,t){return Ia.copy(e).applyQuaternion(this.quaternion),this.position.add(Ia.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Da,e)}translateY(e){return this.translateOnAxis(Ba,e)}translateZ(e){return this.translateOnAxis(za,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(on.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?vs.copy(e):vs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ni.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?on.lookAt(Ni,vs,this.up):on.lookAt(vs,Ni,this.up),this.quaternion.setFromRotationMatrix(on),i&&(on.extractRotation(i.matrixWorld),Kn.setFromRotationMatrix(on),this.quaternion.premultiply(Kn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(vu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fa)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Fa)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),on.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),on.multiply(e.parent.matrixWorld)),e.applyMatrix4(on),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,e,mu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,gu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Qe.DefaultUp=new E(0,1,0);Qe.DefaultMatrixAutoUpdate=!0;Qe.prototype.isObject3D=!0;const Gt=new E,an=new E,zr=new E,ln=new E,ei=new E,ti=new E,Ua=new E,Fr=new E,Ur=new E,Nr=new E;class ht{constructor(e=new E,t=new E,n=new E){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Gt.subVectors(e,t),i.cross(Gt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Gt.subVectors(i,t),an.subVectors(n,t),zr.subVectors(e,t);const o=Gt.dot(Gt),a=Gt.dot(an),l=Gt.dot(zr),c=an.dot(an),h=an.dot(zr),d=o*c-a*a;if(d===0)return s.set(-2,-1,-1);const u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ln),ln.x>=0&&ln.y>=0&&ln.x+ln.y<=1}static getUV(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,ln),l.set(0,0),l.addScaledVector(s,ln.x),l.addScaledVector(o,ln.y),l.addScaledVector(a,ln.z),l}static isFrontFacing(e,t,n,i){return Gt.subVectors(n,t),an.subVectors(e,t),Gt.cross(an).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gt.subVectors(this.c,this.b),an.subVectors(this.a,this.b),Gt.cross(an).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ht.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ht.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return ht.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return ht.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ht.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;ei.subVectors(i,n),ti.subVectors(s,n),Fr.subVectors(e,n);const l=ei.dot(Fr),c=ti.dot(Fr);if(l<=0&&c<=0)return t.copy(n);Ur.subVectors(e,i);const h=ei.dot(Ur),d=ti.dot(Ur);if(h>=0&&d<=h)return t.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(ei,o);Nr.subVectors(e,s);const f=ei.dot(Nr),g=ti.dot(Nr);if(g>=0&&f<=g)return t.copy(s);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ti,a);const x=h*g-f*d;if(x<=0&&d-h>=0&&f-g>=0)return Ua.subVectors(s,i),a=(d-h)/(d-h+(f-g)),t.copy(i).addScaledVector(Ua,a);const p=1/(x+v+u);return o=v*p,a=u*p,t.copy(n).addScaledVector(ei,o).addScaledVector(ti,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let xu=0;class ft extends Hn{constructor(){super();Object.defineProperty(this,"id",{value:xu++}),this.uuid=Kt(),this.name="",this.type="Material",this.fog=!0,this.blending=xi,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ol,this.blendDst=Hl,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ru,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=br,this.stencilZFail=br,this.stencilZPass=br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===kl;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xi&&(n.blending=this.blending),this.side!==Ji&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}ft.prototype.isMaterial=!0;ft.fromType=function(){return null};class ir extends ft{constructor(e){super();this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ks,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}ir.prototype.isMeshBasicMaterial=!0;const et=new E,xs=new Q;class dt{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=$i,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),o=new ge),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),o=new Q),t[n++]=o.x,t[n++]=o.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),o=new E),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),o=new Ze),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xs.fromBufferAttribute(this,t),xs.applyMatrix3(e),this.setXY(t,xs.x,xs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)et.fromBufferAttribute(this,t),et.applyMatrix3(e),this.setXYZ(t,et.x,et.y,et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)et.x=this.getX(t),et.y=this.getY(t),et.z=this.getZ(t),et.applyMatrix4(e),this.setXYZ(t,et.x,et.y,et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)et.x=this.getX(t),et.y=this.getY(t),et.z=this.getZ(t),et.applyNormalMatrix(e),this.setXYZ(t,et.x,et.y,et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)et.x=this.getX(t),et.y=this.getY(t),et.z=this.getZ(t),et.transformDirection(e),this.setXYZ(t,et.x,et.y,et.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$i&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}dt.prototype.isBufferAttribute=!0;class Xl extends dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Yl extends dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class _u extends dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}_u.prototype.isFloat16BufferAttribute=!0;class lt extends dt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let yu=0;const Ft=new we,kr=new Qe,ni=new E,It=new jt,ki=new jt,pt=new E;class tt extends Hn{constructor(){super();Object.defineProperty(this,"id",{value:yu++}),this.uuid=Kt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wl(e)?Yl:Xl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new xt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ft.makeRotationFromQuaternion(e),this.applyMatrix4(Ft),this}rotateX(e){return Ft.makeRotationX(e),this.applyMatrix4(Ft),this}rotateY(e){return Ft.makeRotationY(e),this.applyMatrix4(Ft),this}rotateZ(e){return Ft.makeRotationZ(e),this.applyMatrix4(Ft),this}translate(e,t,n){return Ft.makeTranslation(e,t,n),this.applyMatrix4(Ft),this}scale(e,t,n){return Ft.makeScale(e,t,n),this.applyMatrix4(Ft),this}lookAt(e){return kr.lookAt(e),kr.updateMatrix(),this.applyMatrix4(kr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ni).negate(),this.translate(ni.x,ni.y,ni.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new lt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];It.setFromBufferAttribute(s),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,It.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,It.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(It.min),this.boundingBox.expandByPoint(It.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new E,1/0);return}if(e){const n=this.boundingSphere.center;if(It.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ki.setFromBufferAttribute(a),this.morphTargetsRelative?(pt.addVectors(It.min,ki.min),It.expandByPoint(pt),pt.addVectors(It.max,ki.max),It.expandByPoint(pt)):(It.expandByPoint(ki.min),It.expandByPoint(ki.max))}It.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)pt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(pt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)pt.fromBufferAttribute(a,c),l&&(ni.fromBufferAttribute(e,c),pt.add(ni)),i=Math.max(i,n.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let O=0;O<a;O++)c[O]=new E,h[O]=new E;const d=new E,u=new E,f=new E,g=new Q,v=new Q,x=new Q,p=new E,m=new E;function A(O,_,T){d.fromArray(i,O*3),u.fromArray(i,_*3),f.fromArray(i,T*3),g.fromArray(o,O*2),v.fromArray(o,_*2),x.fromArray(o,T*2),u.sub(d),f.sub(d),v.sub(g),x.sub(g);const I=1/(v.x*x.y-x.x*v.y);!isFinite(I)||(p.copy(u).multiplyScalar(x.y).addScaledVector(f,-v.y).multiplyScalar(I),m.copy(f).multiplyScalar(v.x).addScaledVector(u,-x.x).multiplyScalar(I),c[O].add(p),c[_].add(p),c[T].add(p),h[O].add(m),h[_].add(m),h[T].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let O=0,_=b.length;O<_;++O){const T=b[O],I=T.start,F=T.count;for(let H=I,U=I+F;H<U;H+=3)A(n[H+0],n[H+1],n[H+2])}const w=new E,L=new E,P=new E,W=new E;function ne(O){P.fromArray(s,O*3),W.copy(P);const _=c[O];w.copy(_),w.sub(P.multiplyScalar(P.dot(_))).normalize(),L.crossVectors(W,_);const I=L.dot(h[O])<0?-1:1;l[O*4]=w.x,l[O*4+1]=w.y,l[O*4+2]=w.z,l[O*4+3]=I}for(let O=0,_=b.length;O<_;++O){const T=b[O],I=T.start,F=T.count;for(let H=I,U=I+F;H<U;H+=3)ne(n[H+0]),ne(n[H+1]),ne(n[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new E,s=new E,o=new E,a=new E,l=new E,c=new E,h=new E,d=new E;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),v=e.getX(u+1),x=e.getX(u+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,x),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,x),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const o=n[i].array,a=e.attributes[i],l=a.array,c=a.itemSize*t,h=Math.min(l.length,o.length-c);for(let d=0,u=c;d<h;d++,u++)o[u]=l[d]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,x=l.length;v<x;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new dt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new tt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}tt.prototype.isBufferGeometry=!0;const Na=new we,ii=new Gn,Or=new Ci,xn=new E,_n=new E,yn=new E,Hr=new E,Vr=new E,Gr=new E,_s=new E,ys=new E,ws=new E,bs=new Q,Ms=new Q,Ss=new Q,Wr=new E,As=new E;class Mt extends Qe{constructor(e=new tt,t=new ir){super();this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(s),e.ray.intersectsSphere(Or)===!1)||(Na.copy(s).invert(),ii.copy(e.ray).applyMatrix4(Na),n.boundingBox!==null&&ii.intersectsBox(n.boundingBox)===!1))return;let o;if(n.isBufferGeometry){const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,h=n.morphTargetsRelative,d=n.attributes.uv,u=n.attributes.uv2,f=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(i))for(let v=0,x=f.length;v<x;v++){const p=f[v],m=i[p.materialIndex],A=Math.max(p.start,g.start),b=Math.min(a.count,Math.min(p.start+p.count,g.start+g.count));for(let w=A,L=b;w<L;w+=3){const P=a.getX(w),W=a.getX(w+1),ne=a.getX(w+2);o=Es(this,m,e,ii,l,c,h,d,u,P,W,ne),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const v=Math.max(0,g.start),x=Math.min(a.count,g.start+g.count);for(let p=v,m=x;p<m;p+=3){const A=a.getX(p),b=a.getX(p+1),w=a.getX(p+2);o=Es(this,i,e,ii,l,c,h,d,u,A,b,w),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let v=0,x=f.length;v<x;v++){const p=f[v],m=i[p.materialIndex],A=Math.max(p.start,g.start),b=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let w=A,L=b;w<L;w+=3){const P=w,W=w+1,ne=w+2;o=Es(this,m,e,ii,l,c,h,d,u,P,W,ne),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const v=Math.max(0,g.start),x=Math.min(l.count,g.start+g.count);for(let p=v,m=x;p<m;p+=3){const A=p,b=p+1,w=p+2;o=Es(this,i,e,ii,l,c,h,d,u,A,b,w),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}Mt.prototype.isMesh=!0;function wu(r,e,t,n,i,s,o,a){let l;if(e.side===ut?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side!==bi,a),l===null)return null;As.copy(a),As.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(As);return c<t.near||c>t.far?null:{distance:c,point:As.clone(),object:r}}function Es(r,e,t,n,i,s,o,a,l,c,h,d){xn.fromBufferAttribute(i,c),_n.fromBufferAttribute(i,h),yn.fromBufferAttribute(i,d);const u=r.morphTargetInfluences;if(s&&u){_s.set(0,0,0),ys.set(0,0,0),ws.set(0,0,0);for(let g=0,v=s.length;g<v;g++){const x=u[g],p=s[g];x!==0&&(Hr.fromBufferAttribute(p,c),Vr.fromBufferAttribute(p,h),Gr.fromBufferAttribute(p,d),o?(_s.addScaledVector(Hr,x),ys.addScaledVector(Vr,x),ws.addScaledVector(Gr,x)):(_s.addScaledVector(Hr.sub(xn),x),ys.addScaledVector(Vr.sub(_n),x),ws.addScaledVector(Gr.sub(yn),x)))}xn.add(_s),_n.add(ys),yn.add(ws)}r.isSkinnedMesh&&(r.boneTransform(c,xn),r.boneTransform(h,_n),r.boneTransform(d,yn));const f=wu(r,e,t,n,xn,_n,yn,Wr);if(f){a&&(bs.fromBufferAttribute(a,c),Ms.fromBufferAttribute(a,h),Ss.fromBufferAttribute(a,d),f.uv=ht.getUV(Wr,xn,_n,yn,bs,Ms,Ss,new Q)),l&&(bs.fromBufferAttribute(l,c),Ms.fromBufferAttribute(l,h),Ss.fromBufferAttribute(l,d),f.uv2=ht.getUV(Wr,xn,_n,yn,bs,Ms,Ss,new Q));const g={a:c,b:h,c:d,normal:new E,materialIndex:0};ht.getNormal(xn,_n,yn,g.normal),f.face=g}return f}class rs extends tt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(d,2));function g(v,x,p,m,A,b,w,L,P,W,ne){const O=b/P,_=w/W,T=b/2,I=w/2,F=L/2,H=P+1,U=W+1;let V=0,B=0;const X=new E;for(let K=0;K<U;K++){const Z=K*_-I;for(let ee=0;ee<H;ee++){const _e=ee*O-T;X[v]=_e*m,X[x]=Z*A,X[p]=F,c.push(X.x,X.y,X.z),X[v]=0,X[x]=0,X[p]=L>0?1:-1,h.push(X.x,X.y,X.z),d.push(ee/P),d.push(1-K/W),V+=1}}for(let K=0;K<W;K++)for(let Z=0;Z<P;Z++){const ee=u+Z+H*K,_e=u+Z+H*(K+1),We=u+(Z+1)+H*(K+1),Se=u+(Z+1)+H*K;l.push(ee,_e,Se),l.push(_e,We,Se),B+=6}a.addGroup(f,B,ne),f+=B,u+=V}}static fromJSON(e){return new rs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ei(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function yt(r){const e={};for(let t=0;t<r.length;t++){const n=Ei(r[t]);for(const i in n)e[i]=n[i]}return e}const bu={clone:Ei,merge:yt};var Mu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Su=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qt extends ft{constructor(e){super();this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Mu,this.fragmentShader=Su,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ei(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}qt.prototype.isShaderMaterial=!0;class To extends Qe{constructor(){super();this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}To.prototype.isCamera=!0;class bt extends To{constructor(e=50,t=1,n=.1,i=2e3){super();this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=uo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return uo*2*Math.atan(Math.tan(Mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Mr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}bt.prototype.isPerspectiveCamera=!0;const si=90,ri=1;class Ro extends Qe{constructor(e,t,n){super();if(this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new bt(si,ri,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new E(1,0,0)),this.add(i);const s=new bt(si,ri,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new E(-1,0,0)),this.add(s);const o=new bt(si,ri,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new E(0,1,0)),this.add(o);const a=new bt(si,ri,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new E(0,-1,0)),this.add(a);const l=new bt(si,ri,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new E(0,0,1)),this.add(l);const c=new bt(si,ri,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new E(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,l,c]=this.children,h=e.xr.enabled,d=e.getRenderTarget();e.xr.enabled=!1;const u=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=u,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(d),e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class sr extends gt{constructor(e,t,n,i,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Mi;super(e,t,n,i,s,o,a,l,c,h);this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}sr.prototype.isCubeTexture=!0;class Jl extends zt{constructor(e,t={}){super(e,e,t);const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new sr(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=Rt,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new rs(5,5,5),s=new qt({name:"CubemapFromEquirect",uniforms:Ei(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ut,blending:bn});s.uniforms.tEquirect.value=t;const o=new Mt(i,s),a=t.minFilter;return t.minFilter===tr&&(t.minFilter=wt),new Ro(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}Jl.prototype.isWebGLCubeRenderTarget=!0;const qr=new E,Au=new E,Eu=new xt;class hn{constructor(e=new E(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=qr.subVectors(n,t).cross(Au.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(qr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Eu.getNormalMatrix(e),i=this.coplanarPoint(qr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}hn.prototype.isPlane=!0;const oi=new Ci,Ts=new E;class rr{constructor(e=new hn,t=new hn,n=new hn,i=new hn,s=new hn,o=new hn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7],u=n[8],f=n[9],g=n[10],v=n[11],x=n[12],p=n[13],m=n[14],A=n[15];return t[0].setComponents(a-i,d-l,v-u,A-x).normalize(),t[1].setComponents(a+i,d+l,v+u,A+x).normalize(),t[2].setComponents(a+s,d+c,v+f,A+p).normalize(),t[3].setComponents(a-s,d-c,v-f,A-p).normalize(),t[4].setComponents(a-o,d-h,v-g,A-m).normalize(),t[5].setComponents(a+o,d+h,v+g,A+m).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(oi)}intersectsSprite(e){return oi.center.set(0,0,0),oi.radius=.7071067811865476,oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ts.x=i.normal.x>0?e.max.x:e.min.x,Ts.y=i.normal.y>0?e.max.y:e.min.y,Ts.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ts)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ql(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Tu(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const d=c.array,u=c.usage,f=r.createBuffer();r.bindBuffer(h,f),r.bufferData(h,d,u),c.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:f,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,d){const u=h.array,f=h.updateRange;r.bindBuffer(d,c),f.count===-1?r.bufferSubData(d,0,u):(t?r.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):r.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,h)):d.version<c.version&&(s(d.buffer,c,h),d.version=c.version)}return{get:o,remove:a,update:l}}class or extends tt{constructor(e=1,t=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=e/a,u=t/l,f=[],g=[],v=[],x=[];for(let p=0;p<h;p++){const m=p*u-o;for(let A=0;A<c;A++){const b=A*d-s;g.push(b,-m,0),v.push(0,0,1),x.push(A/a),x.push(1-p/l)}}for(let p=0;p<l;p++)for(let m=0;m<a;m++){const A=m+c*p,b=m+c*(p+1),w=m+1+c*(p+1),L=m+1+c*p;f.push(A,b,L),f.push(b,w,L)}this.setIndex(f),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(v,3)),this.setAttribute("uv",new lt(x,2))}static fromJSON(e){return new or(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ru=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Cu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Pu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Iu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Du=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bu="vec3 transformed = vec3( position );",zu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fu=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Uu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Nu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,ku=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ou=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,qu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ju=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Xu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 ) + 0.5;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Yu=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ju=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,$u=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ku="gl_FragColor = linearToOutputTexel( gl_FragColor );",ed=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,td=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,id=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,od=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ad=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ld=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,ud=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,dd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fd=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,pd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,md=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,gd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,xd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_d=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,yd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,wd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bd=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Md=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Ad=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ed=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Td=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Rd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Cd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ld=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Id=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ]
		#endif
	}
#endif`,Fd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ud=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			float texelIndex = float( vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;
			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Nd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,kd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Od=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,qd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,jd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Xd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Yd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Qd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$d=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ef=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nf=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,sf=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rf=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,of=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,af=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,cf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,uf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,df=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ff=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mf=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,gf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,vf=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,xf=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,_f=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,yf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,wf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,bf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Mf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Af=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tf=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Rf=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Cf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Lf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Pf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,If=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Df=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Bf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ff=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Uf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nf=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kf=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Of=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Hf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Wf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Xf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$f=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zf=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ep=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ne={alphamap_fragment:Ru,alphamap_pars_fragment:Cu,alphatest_fragment:Lu,alphatest_pars_fragment:Pu,aomap_fragment:Iu,aomap_pars_fragment:Du,begin_vertex:Bu,beginnormal_vertex:zu,bsdfs:Fu,bumpmap_pars_fragment:Uu,clipping_planes_fragment:Nu,clipping_planes_pars_fragment:ku,clipping_planes_pars_vertex:Ou,clipping_planes_vertex:Hu,color_fragment:Vu,color_pars_fragment:Gu,color_pars_vertex:Wu,color_vertex:qu,common:ju,cube_uv_reflection_fragment:Xu,defaultnormal_vertex:Yu,displacementmap_pars_vertex:Ju,displacementmap_vertex:Qu,emissivemap_fragment:$u,emissivemap_pars_fragment:Zu,encodings_fragment:Ku,encodings_pars_fragment:ed,envmap_fragment:td,envmap_common_pars_fragment:nd,envmap_pars_fragment:id,envmap_pars_vertex:sd,envmap_physical_pars_fragment:md,envmap_vertex:rd,fog_vertex:od,fog_pars_vertex:ad,fog_fragment:ld,fog_pars_fragment:cd,gradientmap_pars_fragment:hd,lightmap_fragment:ud,lightmap_pars_fragment:dd,lights_lambert_vertex:fd,lights_pars_begin:pd,lights_toon_fragment:gd,lights_toon_pars_fragment:vd,lights_phong_fragment:xd,lights_phong_pars_fragment:_d,lights_physical_fragment:yd,lights_physical_pars_fragment:wd,lights_fragment_begin:bd,lights_fragment_maps:Md,lights_fragment_end:Sd,logdepthbuf_fragment:Ad,logdepthbuf_pars_fragment:Ed,logdepthbuf_pars_vertex:Td,logdepthbuf_vertex:Rd,map_fragment:Cd,map_pars_fragment:Ld,map_particle_fragment:Pd,map_particle_pars_fragment:Id,metalnessmap_fragment:Dd,metalnessmap_pars_fragment:Bd,morphcolor_vertex:zd,morphnormal_vertex:Fd,morphtarget_pars_vertex:Ud,morphtarget_vertex:Nd,normal_fragment_begin:kd,normal_fragment_maps:Od,normal_pars_fragment:Hd,normal_pars_vertex:Vd,normal_vertex:Gd,normalmap_pars_fragment:Wd,clearcoat_normal_fragment_begin:qd,clearcoat_normal_fragment_maps:jd,clearcoat_pars_fragment:Xd,output_fragment:Yd,packing:Jd,premultiplied_alpha_fragment:Qd,project_vertex:$d,dithering_fragment:Zd,dithering_pars_fragment:Kd,roughnessmap_fragment:ef,roughnessmap_pars_fragment:tf,shadowmap_pars_fragment:nf,shadowmap_pars_vertex:sf,shadowmap_vertex:rf,shadowmask_pars_fragment:of,skinbase_vertex:af,skinning_pars_vertex:lf,skinning_vertex:cf,skinnormal_vertex:hf,specularmap_fragment:uf,specularmap_pars_fragment:df,tonemapping_fragment:ff,tonemapping_pars_fragment:pf,transmission_fragment:mf,transmission_pars_fragment:gf,uv_pars_fragment:vf,uv_pars_vertex:xf,uv_vertex:_f,uv2_pars_fragment:yf,uv2_pars_vertex:wf,uv2_vertex:bf,worldpos_vertex:Mf,background_vert:Sf,background_frag:Af,cube_vert:Ef,cube_frag:Tf,depth_vert:Rf,depth_frag:Cf,distanceRGBA_vert:Lf,distanceRGBA_frag:Pf,equirect_vert:If,equirect_frag:Df,linedashed_vert:Bf,linedashed_frag:zf,meshbasic_vert:Ff,meshbasic_frag:Uf,meshlambert_vert:Nf,meshlambert_frag:kf,meshmatcap_vert:Of,meshmatcap_frag:Hf,meshnormal_vert:Vf,meshnormal_frag:Gf,meshphong_vert:Wf,meshphong_frag:qf,meshphysical_vert:jf,meshphysical_frag:Xf,meshtoon_vert:Yf,meshtoon_frag:Jf,points_vert:Qf,points_frag:$f,shadow_vert:Zf,shadow_frag:Kf,sprite_vert:ep,sprite_frag:tp},re={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new xt},uv2Transform:{value:new xt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new xt}}},$t={basic:{uniforms:yt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:yt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.fog,re.lights,{emissive:{value:new ge(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:yt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:yt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:yt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new ge(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:yt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:yt([re.points,re.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:yt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:yt([re.common,re.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:yt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:yt([re.sprite,re.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},cube:{uniforms:yt([re.envmap,{opacity:{value:1}}]),vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:yt([re.common,re.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:yt([re.lights,re.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};$t.physical={uniforms:yt([$t.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Q(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};function np(r,e,t,n,i,s){const o=new ge(0);let a=i===!0?0:1,l,c,h=null,d=0,u=null;function f(v,x){let p=!1,m=x.isScene===!0?x.background:null;m&&m.isTexture&&(m=e.get(m));const A=r.xr,b=A.getSession&&A.getSession();b&&b.environmentBlendMode==="additive"&&(m=null),m===null?g(o,a):m&&m.isColor&&(g(m,1),p=!0),(r.autoClear||p)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),m&&(m.isCubeTexture||m.mapping===er)?(c===void 0&&(c=new Mt(new rs(1,1,1),new qt({name:"BackgroundCubeMaterial",uniforms:Ei($t.cube.uniforms),vertexShader:$t.cube.vertexShader,fragmentShader:$t.cube.fragmentShader,side:ut,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,L,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=m,c.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,(h!==m||d!==m.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,h=m,d=m.version,u=r.toneMapping),v.unshift(c,c.geometry,c.material,0,0,null)):m&&m.isTexture&&(l===void 0&&(l=new Mt(new or(2,2),new qt({name:"BackgroundMaterial",uniforms:Ei($t.background.uniforms),vertexShader:$t.background.vertexShader,fragmentShader:$t.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=m,m.matrixAutoUpdate===!0&&m.updateMatrix(),l.material.uniforms.uvTransform.value.copy(m.matrix),(h!==m||d!==m.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,h=m,d=m.version,u=r.toneMapping),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,x){t.buffers.color.setClear(v.r,v.g,v.b,x,s)}return{getClearColor:function(){return o},setClearColor:function(v,x=1){o.set(v),a=x,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,g(o,a)},render:f}}function ip(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=v(null);let c=l;function h(I,F,H,U,V){let B=!1;if(o){const X=g(U,H,F);c!==X&&(c=X,u(c.object)),B=x(U,V),B&&p(U,V)}else{const X=F.wireframe===!0;(c.geometry!==U.id||c.program!==H.id||c.wireframe!==X)&&(c.geometry=U.id,c.program=H.id,c.wireframe=X,B=!0)}I.isInstancedMesh===!0&&(B=!0),V!==null&&t.update(V,34963),B&&(P(I,F,H,U),V!==null&&r.bindBuffer(34963,t.get(V).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function u(I){return n.isWebGL2?r.bindVertexArray(I):s.bindVertexArrayOES(I)}function f(I){return n.isWebGL2?r.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function g(I,F,H){const U=H.wireframe===!0;let V=a[I.id];V===void 0&&(V={},a[I.id]=V);let B=V[F.id];B===void 0&&(B={},V[F.id]=B);let X=B[U];return X===void 0&&(X=v(d()),B[U]=X),X}function v(I){const F=[],H=[],U=[];for(let V=0;V<i;V++)F[V]=0,H[V]=0,U[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:H,attributeDivisors:U,object:I,attributes:{},index:null}}function x(I,F){const H=c.attributes,U=I.attributes;let V=0;for(const B in U){const X=H[B],K=U[B];if(X===void 0||X.attribute!==K||X.data!==K.data)return!0;V++}return c.attributesNum!==V||c.index!==F}function p(I,F){const H={},U=I.attributes;let V=0;for(const B in U){const X=U[B],K={};K.attribute=X,X.data&&(K.data=X.data),H[B]=K,V++}c.attributes=H,c.attributesNum=V,c.index=F}function m(){const I=c.newAttributes;for(let F=0,H=I.length;F<H;F++)I[F]=0}function A(I){b(I,0)}function b(I,F){const H=c.newAttributes,U=c.enabledAttributes,V=c.attributeDivisors;H[I]=1,U[I]===0&&(r.enableVertexAttribArray(I),U[I]=1),V[I]!==F&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,F),V[I]=F)}function w(){const I=c.newAttributes,F=c.enabledAttributes;for(let H=0,U=F.length;H<U;H++)F[H]!==I[H]&&(r.disableVertexAttribArray(H),F[H]=0)}function L(I,F,H,U,V,B){n.isWebGL2===!0&&(H===5124||H===5125)?r.vertexAttribIPointer(I,F,H,V,B):r.vertexAttribPointer(I,F,H,U,V,B)}function P(I,F,H,U){if(n.isWebGL2===!1&&(I.isInstancedMesh||U.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const V=U.attributes,B=H.getAttributes(),X=F.defaultAttributeValues;for(const K in B){const Z=B[K];if(Z.location>=0){let ee=V[K];if(ee===void 0&&(K==="instanceMatrix"&&I.instanceMatrix&&(ee=I.instanceMatrix),K==="instanceColor"&&I.instanceColor&&(ee=I.instanceColor)),ee!==void 0){const _e=ee.normalized,We=ee.itemSize,Se=t.get(ee);if(Se===void 0)continue;const Y=Se.buffer,qe=Se.type,De=Se.bytesPerElement;if(ee.isInterleavedBufferAttribute){const fe=ee.data,pe=fe.stride,Oe=ee.offset;if(fe.isInstancedInterleavedBuffer){for(let N=0;N<Z.locationSize;N++)b(Z.location+N,fe.meshPerAttribute);I.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let N=0;N<Z.locationSize;N++)A(Z.location+N);r.bindBuffer(34962,Y);for(let N=0;N<Z.locationSize;N++)L(Z.location+N,We/Z.locationSize,qe,_e,pe*De,(Oe+We/Z.locationSize*N)*De)}else{if(ee.isInstancedBufferAttribute){for(let fe=0;fe<Z.locationSize;fe++)b(Z.location+fe,ee.meshPerAttribute);I.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let fe=0;fe<Z.locationSize;fe++)A(Z.location+fe);r.bindBuffer(34962,Y);for(let fe=0;fe<Z.locationSize;fe++)L(Z.location+fe,We/Z.locationSize,qe,_e,We*De,We/Z.locationSize*fe*De)}}else if(X!==void 0){const _e=X[K];if(_e!==void 0)switch(_e.length){case 2:r.vertexAttrib2fv(Z.location,_e);break;case 3:r.vertexAttrib3fv(Z.location,_e);break;case 4:r.vertexAttrib4fv(Z.location,_e);break;default:r.vertexAttrib1fv(Z.location,_e)}}}}w()}function W(){_();for(const I in a){const F=a[I];for(const H in F){const U=F[H];for(const V in U)f(U[V].object),delete U[V];delete F[H]}delete a[I]}}function ne(I){if(a[I.id]===void 0)return;const F=a[I.id];for(const H in F){const U=F[H];for(const V in U)f(U[V].object),delete U[V];delete F[H]}delete a[I.id]}function O(I){for(const F in a){const H=a[F];if(H[I.id]===void 0)continue;const U=H[I.id];for(const V in U)f(U[V].object),delete U[V];delete H[I.id]}}function _(){T(),c!==l&&(c=l,u(c.object))}function T(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:_,resetDefaultState:T,dispose:W,releaseStatesOfGeometry:ne,releaseStatesOfProgram:O,initAttributes:m,enableAttribute:A,disableUnusedAttributes:w}}function sp(r,e,t,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,h){r.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,d){if(d===0)return;let u,f;if(i)u=r,f="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[f](s,c,h,d),t.update(h,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function rp(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(P){if(P==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&r instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=r.getParameter(34930),u=r.getParameter(35660),f=r.getParameter(3379),g=r.getParameter(34076),v=r.getParameter(34921),x=r.getParameter(36347),p=r.getParameter(36348),m=r.getParameter(36349),A=u>0,b=o||e.has("OES_texture_float"),w=A&&b,L=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:x,maxVaryings:p,maxFragmentUniforms:m,vertexTextures:A,floatFragmentTextures:b,floatVertexTextures:w,maxSamples:L}}function op(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new hn,a=new xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u,f){const g=d.length!==0||u||n!==0||i;return i=u,t=h(d,f,0),n=d.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,c()},this.setState=function(d,u,f){const g=d.clippingPlanes,v=d.clipIntersection,x=d.clipShadows,p=r.get(d);if(!i||g===null||g.length===0||s&&!x)s?h(null):c();else{const m=s?0:n,A=m*4;let b=p.clippingState||null;l.value=b,b=h(g,u,A,f);for(let w=0;w!==A;++w)b[w]=t[w];p.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){const v=d!==null?d.length:0;let x=null;if(v!==0){if(x=l.value,g!==!0||x===null){const p=f+v*4,m=u.matrixWorldInverse;a.getNormalMatrix(m),(x===null||x.length<p)&&(x=new Float32Array(p));for(let A=0,b=f;A!==v;++A,b+=4)o.copy(d[A]).applyMatrix4(m,a),o.normal.toArray(x,b),x[b+3]=o.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,x}}function ap(r){let e=new WeakMap;function t(o,a){return a===oo?o.mapping=Mi:a===ao&&(o.mapping=Si),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===oo||a===ao)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Jl(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Co extends To{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super();this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}Co.prototype.isOrthographicCamera=!0;const mi=4,ka=[.125,.215,.35,.446,.526,.582],zn=20,jr=new Co,Oa=new ge;let Xr=null;const Bn=(1+Math.sqrt(5))/2,ai=1/Bn,Ha=[new E(1,1,1),new E(-1,1,1),new E(1,1,-1),new E(-1,1,-1),new E(0,Bn,ai),new E(0,Bn,-ai),new E(ai,0,Bn),new E(-ai,0,Bn),new E(Bn,ai,0),new E(-Bn,ai,0)];class Va{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Xr=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xr),e.scissorTest=!1,Rs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mi||e.mapping===Si?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xr=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize-32,n={magFilter:wt,minFilter:wt,generateMipmaps:!1,type:_i,format:Rt,encoding:En,depthBuffer:!1},i=Ga(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ga(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lp(s)),this._blurMaterial=cp(s,e,t)}return i}_compileMaterial(e){const t=new Mt(this._lodPlanes[0],e);this._renderer.compile(t,jr)}_sceneToCubeUV(e,t,n,i){const a=new bt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Oa),h.toneMapping=Mn,h.autoClear=!1;const f=new ir({name:"PMREM.Background",side:ut,depthWrite:!1,depthTest:!1}),g=new Mt(new rs,f);let v=!1;const x=e.background;x?x.isColor&&(f.color.copy(x),e.background=null,v=!0):(f.color.copy(Oa),v=!0);for(let p=0;p<6;p++){const m=p%3;m===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):m===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const A=this._cubeSize;Rs(i,m*A,p>2?A:0,A,A),h.setRenderTarget(i),v&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Mi||e.mapping===Si;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=qa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wa());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Mt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Rs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,jr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Ha[(i-1)%Ha.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Mt(this._lodPlanes[i],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*zn-1),v=s/g,x=isFinite(s)?1+Math.floor(h*v):zn;x>zn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${zn}`);const p=[];let m=0;for(let P=0;P<zn;++P){const W=P/v,ne=Math.exp(-W*W/2);p.push(ne),P===0?m+=ne:P<x&&(m+=2*ne)}for(let P=0;P<p.length;P++)p[P]=p[P]/m;u.envMap.value=e.texture,u.samples.value=x,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:A}=this;u.dTheta.value=g,u.mipInt.value=A-n;const b=this._sizeLods[i],w=3*b*(i>A-mi?i-A+mi:0),L=4*(this._cubeSize-b);Rs(t,w,L,3*b,2*b),l.setRenderTarget(t),l.render(d,jr)}}function lp(r){const e=[],t=[],n=[];let i=r;const s=r-mi+1+ka.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-mi?l=ka[o-r+mi-1]:o===0&&(l=0),n.push(l);const c=1/(a-1),h=-c/2,d=1+c/2,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,v=3,x=2,p=1,m=new Float32Array(v*g*f),A=new Float32Array(x*g*f),b=new Float32Array(p*g*f);for(let L=0;L<f;L++){const P=L%3*2/3-1,W=L>2?0:-1,ne=[P,W,0,P+2/3,W,0,P+2/3,W+1,0,P,W,0,P+2/3,W+1,0,P,W+1,0];m.set(ne,v*g*L),A.set(u,x*g*L);const O=[L,L,L,L,L,L];b.set(O,p*g*L)}const w=new tt;w.setAttribute("position",new dt(m,v)),w.setAttribute("uv",new dt(A,x)),w.setAttribute("faceIndex",new dt(b,p)),e.push(w),i>mi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ga(r,e,t){const n=new zt(r,e,t);return n.texture.mapping=er,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rs(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function cp(r,e,t){const n=new Float32Array(zn),i=new E(0,1,0);return new qt({name:"SphericalGaussianBlur",defines:{n:zn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Wa(){return new qt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function qa(){return new qt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Lo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hp(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===oo||l===ao,h=l===Mi||l===Si;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Va(r)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||h&&d&&i(d)){t===null&&(t=new Va(r));const u=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,u),a.addEventListener("dispose",s),u.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function up(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function dp(r,e,t,n){const i={},s=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete i[u.id];const f=s.get(u);f&&(e.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)e.update(u[g],34962);const f=d.morphAttributes;for(const g in f){const v=f[g];for(let x=0,p=v.length;x<p;x++)e.update(v[x],34962)}}function c(d){const u=[],f=d.index,g=d.attributes.position;let v=0;if(f!==null){const m=f.array;v=f.version;for(let A=0,b=m.length;A<b;A+=3){const w=m[A+0],L=m[A+1],P=m[A+2];u.push(w,L,L,P,P,w)}}else{const m=g.array;v=g.version;for(let A=0,b=m.length/3-1;A<b;A+=3){const w=A+0,L=A+1,P=A+2;u.push(w,L,L,P,P,w)}}const x=new(Wl(u)?Yl:Xl)(u,1);x.version=v;const p=s.get(d);p&&e.remove(p),s.set(d,x)}function h(d){const u=s.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function fp(r,e,t,n){const i=n.isWebGL2;let s;function o(u){s=u}let a,l;function c(u){a=u.type,l=u.bytesPerElement}function h(u,f){r.drawElements(s,f,a,u*l),t.update(f,s,1)}function d(u,f,g){if(g===0)return;let v,x;if(i)v=r,x="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[x](s,f,a,u*l,g),t.update(f,s,g)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d}function pp(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function mp(r,e){return r[0]-e[0]}function gp(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Yr(r,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),r.divideScalar(t)}function vp(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new Ze,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d,u){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let x=s.get(h);if(x===void 0||x.count!==v){let H=function(){I.dispose(),s.delete(h),h.removeEventListener("dispose",H)};x!==void 0&&x.texture.dispose();const A=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,L=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],W=h.morphAttributes.color||[];let ne=0;A===!0&&(ne=1),b===!0&&(ne=2),w===!0&&(ne=3);let O=h.attributes.position.count*ne,_=1;O>e.maxTextureSize&&(_=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const T=new Float32Array(O*_*4*v),I=new nr(T,O,_,v);I.format=Rt,I.type=Fn,I.needsUpdate=!0;const F=ne*4;for(let U=0;U<v;U++){const V=L[U],B=P[U],X=W[U],K=O*_*4*U;for(let Z=0;Z<V.count;Z++){const ee=Z*F;A===!0&&(o.fromBufferAttribute(V,Z),V.normalized===!0&&Yr(o,V),T[K+ee+0]=o.x,T[K+ee+1]=o.y,T[K+ee+2]=o.z,T[K+ee+3]=0),b===!0&&(o.fromBufferAttribute(B,Z),B.normalized===!0&&Yr(o,B),T[K+ee+4]=o.x,T[K+ee+5]=o.y,T[K+ee+6]=o.z,T[K+ee+7]=0),w===!0&&(o.fromBufferAttribute(X,Z),X.normalized===!0&&Yr(o,B),T[K+ee+8]=o.x,T[K+ee+9]=o.y,T[K+ee+10]=o.z,T[K+ee+11]=X.itemSize===4?o.w:1)}}x={count:v,texture:I,size:new Q(O,_)},s.set(h,x),h.addEventListener("dispose",H)}let p=0;for(let A=0;A<f.length;A++)p+=f[A];const m=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(r,"morphTargetBaseInfluence",m),u.getUniforms().setValue(r,"morphTargetInfluences",f),u.getUniforms().setValue(r,"morphTargetsTexture",x.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}else{const g=f===void 0?0:f.length;let v=n[h.id];if(v===void 0||v.length!==g){v=[];for(let b=0;b<g;b++)v[b]=[b,0];n[h.id]=v}for(let b=0;b<g;b++){const w=v[b];w[0]=b,w[1]=f[b]}v.sort(gp);for(let b=0;b<8;b++)b<g&&v[b][1]?(a[b][0]=v[b][0],a[b][1]=v[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(mp);const x=h.morphAttributes.position,p=h.morphAttributes.normal;let m=0;for(let b=0;b<8;b++){const w=a[b],L=w[0],P=w[1];L!==Number.MAX_SAFE_INTEGER&&P?(x&&h.getAttribute("morphTarget"+b)!==x[L]&&h.setAttribute("morphTarget"+b,x[L]),p&&h.getAttribute("morphNormal"+b)!==p[L]&&h.setAttribute("morphNormal"+b,p[L]),i[b]=P,m+=P):(x&&h.hasAttribute("morphTarget"+b)===!0&&h.deleteAttribute("morphTarget"+b),p&&h.hasAttribute("morphNormal"+b)===!0&&h.deleteAttribute("morphNormal"+b),i[b]=0)}const A=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(r,"morphTargetBaseInfluence",A),u.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function xp(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);return i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const $l=new gt,Zl=new nr,Kl=new Ao,ec=new sr,ja=[],Xa=[],Ya=new Float32Array(16),Ja=new Float32Array(9),Qa=new Float32Array(4);function Li(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=ja[i];if(s===void 0&&(s=new Float32Array(i),ja[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Tt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function St(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ar(r,e){let t=Xa[e];t===void 0&&(t=new Int32Array(e),Xa[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function _p(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function yp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;r.uniform2fv(this.addr,e),St(t,e)}}function wp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;r.uniform3fv(this.addr,e),St(t,e)}}function bp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;r.uniform4fv(this.addr,e),St(t,e)}}function Mp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(Tt(t,n))return;Qa.set(n),r.uniformMatrix2fv(this.addr,!1,Qa),St(t,n)}}function Sp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(Tt(t,n))return;Ja.set(n),r.uniformMatrix3fv(this.addr,!1,Ja),St(t,n)}}function Ap(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(Tt(t,n))return;Ya.set(n),r.uniformMatrix4fv(this.addr,!1,Ya),St(t,n)}}function Ep(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Tp(r,e){const t=this.cache;Tt(t,e)||(r.uniform2iv(this.addr,e),St(t,e))}function Rp(r,e){const t=this.cache;Tt(t,e)||(r.uniform3iv(this.addr,e),St(t,e))}function Cp(r,e){const t=this.cache;Tt(t,e)||(r.uniform4iv(this.addr,e),St(t,e))}function Lp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Pp(r,e){const t=this.cache;Tt(t,e)||(r.uniform2uiv(this.addr,e),St(t,e))}function Ip(r,e){const t=this.cache;Tt(t,e)||(r.uniform3uiv(this.addr,e),St(t,e))}function Dp(r,e){const t=this.cache;Tt(t,e)||(r.uniform4uiv(this.addr,e),St(t,e))}function Bp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||$l,i)}function zp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Kl,i)}function Fp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ec,i)}function Up(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Zl,i)}function Np(r){switch(r){case 5126:return _p;case 35664:return yp;case 35665:return wp;case 35666:return bp;case 35674:return Mp;case 35675:return Sp;case 35676:return Ap;case 5124:case 35670:return Ep;case 35667:case 35671:return Tp;case 35668:case 35672:return Rp;case 35669:case 35673:return Cp;case 5125:return Lp;case 36294:return Pp;case 36295:return Ip;case 36296:return Dp;case 35678:case 36198:case 36298:case 36306:case 35682:return Bp;case 35679:case 36299:case 36307:return zp;case 35680:case 36300:case 36308:case 36293:return Fp;case 36289:case 36303:case 36311:case 36292:return Up}}function kp(r,e){r.uniform1fv(this.addr,e)}function Op(r,e){const t=Li(e,this.size,2);r.uniform2fv(this.addr,t)}function Hp(r,e){const t=Li(e,this.size,3);r.uniform3fv(this.addr,t)}function Vp(r,e){const t=Li(e,this.size,4);r.uniform4fv(this.addr,t)}function Gp(r,e){const t=Li(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Wp(r,e){const t=Li(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function qp(r,e){const t=Li(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function jp(r,e){r.uniform1iv(this.addr,e)}function Xp(r,e){r.uniform2iv(this.addr,e)}function Yp(r,e){r.uniform3iv(this.addr,e)}function Jp(r,e){r.uniform4iv(this.addr,e)}function Qp(r,e){r.uniform1uiv(this.addr,e)}function $p(r,e){r.uniform2uiv(this.addr,e)}function Zp(r,e){r.uniform3uiv(this.addr,e)}function Kp(r,e){r.uniform4uiv(this.addr,e)}function em(r,e,t){const n=e.length,i=ar(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2D(e[s]||$l,i[s])}function tm(r,e,t){const n=e.length,i=ar(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture3D(e[s]||Kl,i[s])}function nm(r,e,t){const n=e.length,i=ar(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTextureCube(e[s]||ec,i[s])}function im(r,e,t){const n=e.length,i=ar(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||Zl,i[s])}function sm(r){switch(r){case 5126:return kp;case 35664:return Op;case 35665:return Hp;case 35666:return Vp;case 35674:return Gp;case 35675:return Wp;case 35676:return qp;case 5124:case 35670:return jp;case 35667:case 35671:return Xp;case 35668:case 35672:return Yp;case 35669:case 35673:return Jp;case 5125:return Qp;case 36294:return $p;case 36295:return Zp;case 36296:return Kp;case 35678:case 36198:case 36298:case 36306:case 35682:return em;case 35679:case 36299:case 36307:return tm;case 35680:case 36300:case 36308:case 36293:return nm;case 36289:case 36303:case 36311:case 36292:return im}}function rm(r,e,t){this.id=r,this.addr=t,this.cache=[],this.setValue=Np(e.type)}function tc(r,e,t){this.id=r,this.addr=t,this.cache=[],this.size=e.size,this.setValue=sm(e.type)}tc.prototype.updateCache=function(r){const e=this.cache;r instanceof Float32Array&&e.length!==r.length&&(this.cache=new Float32Array(r.length)),St(e,r)};function nc(r){this.id=r,this.seq=[],this.map={}}nc.prototype.setValue=function(r,e,t){const n=this.seq;for(let i=0,s=n.length;i!==s;++i){const o=n[i];o.setValue(r,e[o.id],t)}};const Jr=/(\w+)(\])?(\[|\.)?/g;function $a(r,e){r.seq.push(e),r.map[e.id]=e}function om(r,e,t){const n=r.name,i=n.length;for(Jr.lastIndex=0;;){const s=Jr.exec(n),o=Jr.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){$a(t,c===void 0?new rm(a,r,e):new tc(a,r,e));break}else{let d=t.map[a];d===void 0&&(d=new nc(a),$a(t,d)),t=d}}}function Sn(r,e){this.seq=[],this.map={};const t=r.getProgramParameter(e,35718);for(let n=0;n<t;++n){const i=r.getActiveUniform(e,n),s=r.getUniformLocation(e,i.name);om(i,s,this)}}Sn.prototype.setValue=function(r,e,t,n){const i=this.map[e];i!==void 0&&i.setValue(r,t,n)};Sn.prototype.setOptional=function(r,e,t){const n=e[t];n!==void 0&&this.setValue(r,t,n)};Sn.upload=function(r,e,t,n){for(let i=0,s=e.length;i!==s;++i){const o=e[i],a=t[o.id];a.needsUpdate!==!1&&o.setValue(r,a.value,n)}};Sn.seqWithValue=function(r,e){const t=[];for(let n=0,i=r.length;n!==i;++n){const s=r[n];s.id in e&&t.push(s)}return t};function Za(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let am=0;function lm(r){const e=r.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function cm(r){switch(r){case En:return["Linear","( value )"];case it:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Ka(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();return n&&i===""?"":t.toUpperCase()+`

`+i+`

`+lm(r.getShaderSource(e))}function hm(r,e){const t=cm(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function um(r,e){let t;switch(e){case Ph:t="Linear";break;case Ih:t="Reinhard";break;case Dh:t="OptimizedCineon";break;case Bh:t="ACESFilmic";break;case zh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function dm(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ji).join(`
`)}function fm(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function pm(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function ji(r){return r!==""}function el(r,e){return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tl(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mm=/^[ \t]*#include +<([\w\d./]+)>/gm;function po(r){return r.replace(mm,gm)}function gm(r,e){const t=Ne[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return po(t)}const vm=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,xm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nl(r){return r.replace(xm,ic).replace(vm,_m)}function _m(r,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),ic(r,e,t,n)}function ic(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function il(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ym(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Nl?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===ch?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===qi&&(e="SHADOWMAP_TYPE_VSM"),e}function wm(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Mi:case Si:e="ENVMAP_TYPE_CUBE";break;case er:case Mo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bm(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Si:case Mo:e="ENVMAP_MODE_REFRACTION";break}return e}function Mm(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ks:e="ENVMAP_BLENDING_MULTIPLY";break;case Ch:e="ENVMAP_BLENDING_MIX";break;case Lh:e="ENVMAP_BLENDING_ADD";break}return e}function Sm(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e/32+1)+3,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Am(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=ym(t),c=wm(t),h=bm(t),d=Mm(t),u=Sm(t),f=t.isWebGL2?"":dm(t),g=fm(s),v=i.createProgram();let x,p,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=[g].filter(ji).join(`
`),x.length>0&&(x+=`
`),p=[f,g].filter(ji).join(`
`),p.length>0&&(p+=`
`)):(x=[il(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ji).join(`
`),p=[f,il(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mn?"#define TONE_MAPPING":"",t.toneMapping!==Mn?Ne.tonemapping_pars_fragment:"",t.toneMapping!==Mn?um("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.encodings_pars_fragment,hm("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ji).join(`
`)),o=po(o),o=el(o,t),o=tl(o,t),a=po(a),a=el(a,t),a=tl(a,t),o=nl(o),a=nl(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===Ea?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ea?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=m+x+o,b=m+p+a,w=Za(i,35633,A),L=Za(i,35632,b);if(i.attachShader(v,w),i.attachShader(v,L),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v),r.debug.checkShaderErrors){const ne=i.getProgramInfoLog(v).trim(),O=i.getShaderInfoLog(w).trim(),_=i.getShaderInfoLog(L).trim();let T=!0,I=!0;if(i.getProgramParameter(v,35714)===!1){T=!1;const F=Ka(i,w,"vertex"),H=Ka(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,35715)+`

Program Info Log: `+ne+`
`+F+`
`+H)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(O===""||_==="")&&(I=!1);I&&(this.diagnostics={runnable:T,programLog:ne,vertexShader:{log:O,prefix:x},fragmentShader:{log:_,prefix:p}})}i.deleteShader(w),i.deleteShader(L);let P;this.getUniforms=function(){return P===void 0&&(P=new Sn(i,v)),P};let W;return this.getAttributes=function(){return W===void 0&&(W=pm(i,v)),W},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.name=t.shaderName,this.id=am++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=L,this}let Em=0;class Tm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new Rm;t.set(e,n)}return t.get(e)}}class Rm{constructor(){this.id=Em++,this.usedTimes=0}}function Cm(r,e,t,n,i,s,o){const a=new Eo,l=new Tm,c=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.floatVertexTextures,f=i.maxVertexUniforms,g=i.vertexTextures;let v=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){const I=_.skeleton.bones;if(u)return 1024;{const H=Math.floor((f-20)/4),U=Math.min(H,I.length);return U<I.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+I.length+" bones. This GPU supports "+U+"."),0):U}}function m(_,T,I,F,H){const U=F.fog,V=H.geometry,B=_.isMeshStandardMaterial?F.environment:null,X=(_.isMeshStandardMaterial?t:e).get(_.envMap||B),K=!!X&&(X.mapping===er||X.mapping===Mo)?X.image.height:null,Z=x[_.type],ee=H.isSkinnedMesh?p(H):0;_.precision!==null&&(v=i.getMaxPrecision(_.precision),v!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",v,"instead."));const _e=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,We=_e!==void 0?_e.length:0;let Se=0;V.morphAttributes.position!==void 0&&(Se=1),V.morphAttributes.normal!==void 0&&(Se=2),V.morphAttributes.color!==void 0&&(Se=3);let Y,qe,De,fe;if(Z){const ie=$t[Z];Y=ie.vertexShader,qe=ie.fragmentShader}else Y=_.vertexShader,qe=_.fragmentShader,l.update(_),De=l.getVertexShaderID(_),fe=l.getFragmentShaderID(_);const pe=r.getRenderTarget(),Oe=_.alphaTest>0,N=_.clearcoat>0;return{isWebGL2:h,shaderID:Z,shaderName:_.type,vertexShader:Y,fragmentShader:qe,defines:_.defines,customVertexShaderID:De,customFragmentShaderID:fe,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:v,instancing:H.isInstancedMesh===!0,instancingColor:H.isInstancedMesh===!0&&H.instanceColor!==null,supportsVertexTextures:g,outputEncoding:pe===null?r.outputEncoding:pe.isXRRenderTarget===!0?pe.texture.encoding:En,map:!!_.map,matcap:!!_.matcap,envMap:!!X,envMapMode:X&&X.mapping,envMapCubeUVHeight:K,lightMap:!!_.lightMap,aoMap:!!_.aoMap,emissiveMap:!!_.emissiveMap,bumpMap:!!_.bumpMap,normalMap:!!_.normalMap,objectSpaceNormalMap:_.normalMapType===su,tangentSpaceNormalMap:_.normalMapType===Ri,decodeVideoTexture:!!_.map&&_.map.isVideoTexture===!0&&_.map.encoding===it,clearcoat:N,clearcoatMap:N&&!!_.clearcoatMap,clearcoatRoughnessMap:N&&!!_.clearcoatRoughnessMap,clearcoatNormalMap:N&&!!_.clearcoatNormalMap,displacementMap:!!_.displacementMap,roughnessMap:!!_.roughnessMap,metalnessMap:!!_.metalnessMap,specularMap:!!_.specularMap,specularIntensityMap:!!_.specularIntensityMap,specularColorMap:!!_.specularColorMap,opaque:_.transparent===!1&&_.blending===xi,alphaMap:!!_.alphaMap,alphaTest:Oe,gradientMap:!!_.gradientMap,sheen:_.sheen>0,sheenColorMap:!!_.sheenColorMap,sheenRoughnessMap:!!_.sheenRoughnessMap,transmission:_.transmission>0,transmissionMap:!!_.transmissionMap,thicknessMap:!!_.thicknessMap,combine:_.combine,vertexTangents:!!_.normalMap&&!!V.attributes.tangent,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUvs:!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatMap||!!_.clearcoatRoughnessMap||!!_.clearcoatNormalMap||!!_.displacementMap||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||!!_.sheenColorMap||!!_.sheenRoughnessMap,uvsVertexOnly:!(!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatNormalMap||_.transmission>0||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||_.sheen>0||!!_.sheenColorMap||!!_.sheenRoughnessMap)&&!!_.displacementMap,fog:!!U,useFog:_.fog,fogExp2:U&&U.isFogExp2,flatShading:!!_.flatShading,sizeAttenuation:_.sizeAttenuation,logarithmicDepthBuffer:d,skinning:H.isSkinnedMesh===!0&&ee>0,maxBones:ee,useVertexTexture:u,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:We,morphTextureStride:Se,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:_.toneMapped?r.toneMapping:Mn,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===bi,flipSided:_.side===ut,depthPacking:_.depthPacking!==void 0?_.depthPacking:!1,index0AttributeName:_.index0AttributeName,extensionDerivatives:_.extensions&&_.extensions.derivatives,extensionFragDepth:_.extensions&&_.extensions.fragDepth,extensionDrawBuffers:_.extensions&&_.extensions.drawBuffers,extensionShaderTextureLOD:_.extensions&&_.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function A(_){const T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(const I in _.defines)T.push(I),T.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(b(T,_),w(T,_),T.push(r.outputEncoding)),T.push(_.customProgramCacheKey),T.join()}function b(_,T){_.push(T.precision),_.push(T.outputEncoding),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.combine),_.push(T.vertexUvs),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.maxBones),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection)}function w(_,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.displacementMap&&a.enable(18),T.specularMap&&a.enable(19),T.roughnessMap&&a.enable(20),T.metalnessMap&&a.enable(21),T.gradientMap&&a.enable(22),T.alphaMap&&a.enable(23),T.alphaTest&&a.enable(24),T.vertexColors&&a.enable(25),T.vertexAlphas&&a.enable(26),T.vertexUvs&&a.enable(27),T.vertexTangents&&a.enable(28),T.uvsVertexOnly&&a.enable(29),T.fog&&a.enable(30),_.push(a.mask),a.disableAll(),T.useFog&&a.enable(0),T.flatShading&&a.enable(1),T.logarithmicDepthBuffer&&a.enable(2),T.skinning&&a.enable(3),T.useVertexTexture&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.physicallyCorrectLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.depthPacking&&a.enable(13),T.dithering&&a.enable(14),T.specularIntensityMap&&a.enable(15),T.specularColorMap&&a.enable(16),T.transmission&&a.enable(17),T.transmissionMap&&a.enable(18),T.thicknessMap&&a.enable(19),T.sheen&&a.enable(20),T.sheenColorMap&&a.enable(21),T.sheenRoughnessMap&&a.enable(22),T.decodeVideoTexture&&a.enable(23),T.opaque&&a.enable(24),_.push(a.mask)}function L(_){const T=x[_.type];let I;if(T){const F=$t[T];I=bu.clone(F.uniforms)}else I=_.uniforms;return I}function P(_,T){let I;for(let F=0,H=c.length;F<H;F++){const U=c[F];if(U.cacheKey===T){I=U,++I.usedTimes;break}}return I===void 0&&(I=new Am(r,T,_,s),c.push(I)),I}function W(_){if(--_.usedTimes===0){const T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),_.destroy()}}function ne(_){l.remove(_)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:A,getUniforms:L,acquireProgram:P,releaseProgram:W,releaseShaderCache:ne,programs:c,dispose:O}}function Lm(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Pm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function sl(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function rl(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(d,u,f,g,v,x){let p=r[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:x},r[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=x),e++,p}function a(d,u,f,g,v,x){const p=o(d,u,f,g,v,x);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(d,u,f,g,v,x){const p=o(d,u,f,g,v,x);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(d,u){t.length>1&&t.sort(d||Pm),n.length>1&&n.sort(u||sl),i.length>1&&i.sort(u||sl)}function h(){for(let d=e,u=r.length;d<u;d++){const f=r[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function Im(){let r=new WeakMap;function e(n,i){let s;return r.has(n)===!1?(s=new rl,r.set(n,[s])):i>=r.get(n).length?(s=new rl,r.get(n).push(s)):s=r.get(n)[i],s}function t(){r=new WeakMap}return{get:e,dispose:t}}function Dm(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new ge};break;case"SpotLight":t={position:new E,direction:new E,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":t={color:new ge,position:new E,halfWidth:new E,halfHeight:new E};break}return r[e.id]=t,t}}}function Bm(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let zm=0;function Fm(r,e){return(e.castShadow?1:0)-(r.castShadow?1:0)}function Um(r,e){const t=new Dm,n=Bm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let h=0;h<9;h++)i.probe.push(new E);const s=new E,o=new we,a=new we;function l(h,d){let u=0,f=0,g=0;for(let ne=0;ne<9;ne++)i.probe[ne].set(0,0,0);let v=0,x=0,p=0,m=0,A=0,b=0,w=0,L=0;h.sort(Fm);const P=d!==!0?Math.PI:1;for(let ne=0,O=h.length;ne<O;ne++){const _=h[ne],T=_.color,I=_.intensity,F=_.distance,H=_.shadow&&_.shadow.map?_.shadow.map.texture:null;if(_.isAmbientLight)u+=T.r*I*P,f+=T.g*I*P,g+=T.b*I*P;else if(_.isLightProbe)for(let U=0;U<9;U++)i.probe[U].addScaledVector(_.sh.coefficients[U],I);else if(_.isDirectionalLight){const U=t.get(_);if(U.color.copy(_.color).multiplyScalar(_.intensity*P),_.castShadow){const V=_.shadow,B=n.get(_);B.shadowBias=V.bias,B.shadowNormalBias=V.normalBias,B.shadowRadius=V.radius,B.shadowMapSize=V.mapSize,i.directionalShadow[v]=B,i.directionalShadowMap[v]=H,i.directionalShadowMatrix[v]=_.shadow.matrix,b++}i.directional[v]=U,v++}else if(_.isSpotLight){const U=t.get(_);if(U.position.setFromMatrixPosition(_.matrixWorld),U.color.copy(T).multiplyScalar(I*P),U.distance=F,U.coneCos=Math.cos(_.angle),U.penumbraCos=Math.cos(_.angle*(1-_.penumbra)),U.decay=_.decay,_.castShadow){const V=_.shadow,B=n.get(_);B.shadowBias=V.bias,B.shadowNormalBias=V.normalBias,B.shadowRadius=V.radius,B.shadowMapSize=V.mapSize,i.spotShadow[p]=B,i.spotShadowMap[p]=H,i.spotShadowMatrix[p]=_.shadow.matrix,L++}i.spot[p]=U,p++}else if(_.isRectAreaLight){const U=t.get(_);U.color.copy(T).multiplyScalar(I),U.halfWidth.set(_.width*.5,0,0),U.halfHeight.set(0,_.height*.5,0),i.rectArea[m]=U,m++}else if(_.isPointLight){const U=t.get(_);if(U.color.copy(_.color).multiplyScalar(_.intensity*P),U.distance=_.distance,U.decay=_.decay,_.castShadow){const V=_.shadow,B=n.get(_);B.shadowBias=V.bias,B.shadowNormalBias=V.normalBias,B.shadowRadius=V.radius,B.shadowMapSize=V.mapSize,B.shadowCameraNear=V.camera.near,B.shadowCameraFar=V.camera.far,i.pointShadow[x]=B,i.pointShadowMap[x]=H,i.pointShadowMatrix[x]=_.shadow.matrix,w++}i.point[x]=U,x++}else if(_.isHemisphereLight){const U=t.get(_);U.skyColor.copy(_.color).multiplyScalar(I*P),U.groundColor.copy(_.groundColor).multiplyScalar(I*P),i.hemi[A]=U,A++}}m>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=g;const W=i.hash;(W.directionalLength!==v||W.pointLength!==x||W.spotLength!==p||W.rectAreaLength!==m||W.hemiLength!==A||W.numDirectionalShadows!==b||W.numPointShadows!==w||W.numSpotShadows!==L)&&(i.directional.length=v,i.spot.length=p,i.rectArea.length=m,i.point.length=x,i.hemi.length=A,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=L,i.spotShadowMap.length=L,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=w,i.spotShadowMatrix.length=L,W.directionalLength=v,W.pointLength=x,W.spotLength=p,W.rectAreaLength=m,W.hemiLength=A,W.numDirectionalShadows=b,W.numPointShadows=w,W.numSpotShadows=L,i.version=zm++)}function c(h,d){let u=0,f=0,g=0,v=0,x=0;const p=d.matrixWorldInverse;for(let m=0,A=h.length;m<A;m++){const b=h[m];if(b.isDirectionalLight){const w=i.directional[u];w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),u++}else if(b.isSpotLight){const w=i.spot[g];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),g++}else if(b.isRectAreaLight){const w=i.rectArea[v];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(p),a.identity(),o.copy(b.matrixWorld),o.premultiply(p),a.extractRotation(o),w.halfWidth.set(b.width*.5,0,0),w.halfHeight.set(0,b.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),v++}else if(b.isPointLight){const w=i.point[f];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){const w=i.hemi[x];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(p),w.direction.normalize(),x++}}}return{setup:l,setupView:c,state:i}}function ol(r,e){const t=new Um(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Nm(r,e){let t=new WeakMap;function n(s,o=0){let a;return t.has(s)===!1?(a=new ol(r,e),t.set(s,[a])):o>=t.get(s).length?(a=new ol(r,e),t.get(s).push(a)):a=t.get(s)[o],a}function i(){t=new WeakMap}return{get:n,dispose:i}}class Po extends ft{constructor(e){super();this.type="MeshDepthMaterial",this.depthPacking=nu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}Po.prototype.isMeshDepthMaterial=!0;class Io extends ft{constructor(e){super();this.type="MeshDistanceMaterial",this.referencePosition=new E,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}Io.prototype.isMeshDistanceMaterial=!0;const km=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Om=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function sc(r,e,t){let n=new rr;const i=new Q,s=new Q,o=new Ze,a=new Po({depthPacking:iu}),l=new Io,c={},h=t.maxTextureSize,d={0:ut,1:Ji,2:bi},u=new qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:km,fragmentShader:Om}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new tt;g.setAttribute("position",new dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Mt(g,u),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nl,this.render=function(b,w,L){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||b.length===0)return;const P=r.getRenderTarget(),W=r.getActiveCubeFace(),ne=r.getActiveMipmapLevel(),O=r.state;O.setBlending(bn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);for(let _=0,T=b.length;_<T;_++){const I=b[_],F=I.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);const H=F.getFrameExtents();if(i.multiply(H),s.copy(F.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/H.x),i.x=s.x*H.x,F.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/H.y),i.y=s.y*H.y,F.mapSize.y=s.y)),F.map===null&&!F.isPointLightShadow&&this.type===qi){const V={minFilter:wt,magFilter:wt,format:Rt};F.map=new zt(i.x,i.y,V),F.map.texture.name=I.name+".shadowMap",F.mapPass=new zt(i.x,i.y,V),F.camera.updateProjectionMatrix()}if(F.map===null){const V={minFilter:mt,magFilter:mt,format:Rt};F.map=new zt(i.x,i.y,V),F.map.texture.name=I.name+".shadowMap",F.camera.updateProjectionMatrix()}r.setRenderTarget(F.map),r.clear();const U=F.getViewportCount();for(let V=0;V<U;V++){const B=F.getViewport(V);o.set(s.x*B.x,s.y*B.y,s.x*B.z,s.y*B.w),O.viewport(o),F.updateMatrices(I,V),n=F.getFrustum(),A(w,L,F.camera,I,this.type)}!F.isPointLightShadow&&this.type===qi&&p(F,L),F.needsUpdate=!1}x.needsUpdate=!1,r.setRenderTarget(P,W,ne)};function p(b,w){const L=e.update(v);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),u.uniforms.shadow_pass.value=b.map.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(w,null,L,u,v,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(w,null,L,f,v,null)}function m(b,w,L,P,W,ne){let O=null;const _=L.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(_!==void 0?O=_:O=L.isPointLight===!0?l:a,r.localClippingEnabled&&w.clipShadows===!0&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0){const T=O.uuid,I=w.uuid;let F=c[T];F===void 0&&(F={},c[T]=F);let H=F[I];H===void 0&&(H=O.clone(),F[I]=H),O=H}return O.visible=w.visible,O.wireframe=w.wireframe,ne===qi?O.side=w.shadowSide!==null?w.shadowSide:w.side:O.side=w.shadowSide!==null?w.shadowSide:d[w.side],O.alphaMap=w.alphaMap,O.alphaTest=w.alphaTest,O.clipShadows=w.clipShadows,O.clippingPlanes=w.clippingPlanes,O.clipIntersection=w.clipIntersection,O.displacementMap=w.displacementMap,O.displacementScale=w.displacementScale,O.displacementBias=w.displacementBias,O.wireframeLinewidth=w.wireframeLinewidth,O.linewidth=w.linewidth,L.isPointLight===!0&&O.isMeshDistanceMaterial===!0&&(O.referencePosition.setFromMatrixPosition(L.matrixWorld),O.nearDistance=P,O.farDistance=W),O}function A(b,w,L,P,W){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&W===qi)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,b.matrixWorld);const _=e.update(b),T=b.material;if(Array.isArray(T)){const I=_.groups;for(let F=0,H=I.length;F<H;F++){const U=I[F],V=T[U.materialIndex];if(V&&V.visible){const B=m(b,V,P,L.near,L.far,W);r.renderBufferDirect(L,null,_,B,b,U)}}}else if(T.visible){const I=m(b,T,P,L.near,L.far,W);r.renderBufferDirect(L,null,_,I,b,null)}}const O=b.children;for(let _=0,T=O.length;_<T;_++)A(O[_],w,L,P,W)}}function Hm(r,e,t){const n=t.isWebGL2;function i(){let R=!1;const ue=new Ze;let le=null;const Pe=new Ze(0,0,0,0);return{setMask:function(ce){le!==ce&&!R&&(r.colorMask(ce,ce,ce,ce),le=ce)},setLocked:function(ce){R=ce},setClear:function(ce,te,Le,He,At){At===!0&&(ce*=He,te*=He,Le*=He),ue.set(ce,te,Le,He),Pe.equals(ue)===!1&&(r.clearColor(ce,te,Le,He),Pe.copy(ue))},reset:function(){R=!1,le=null,Pe.set(-1,0,0,0)}}}function s(){let R=!1,ue=null,le=null,Pe=null;return{setTest:function(ce){ce?Se(2929):Y(2929)},setMask:function(ce){ue!==ce&&!R&&(r.depthMask(ce),ue=ce)},setFunc:function(ce){if(le!==ce){if(ce)switch(ce){case bh:r.depthFunc(512);break;case Mh:r.depthFunc(519);break;case Sh:r.depthFunc(513);break;case ro:r.depthFunc(515);break;case Ah:r.depthFunc(514);break;case Eh:r.depthFunc(518);break;case Th:r.depthFunc(516);break;case Rh:r.depthFunc(517);break;default:r.depthFunc(515)}else r.depthFunc(515);le=ce}},setLocked:function(ce){R=ce},setClear:function(ce){Pe!==ce&&(r.clearDepth(ce),Pe=ce)},reset:function(){R=!1,ue=null,le=null,Pe=null}}}function o(){let R=!1,ue=null,le=null,Pe=null,ce=null,te=null,Le=null,He=null,At=null;return{setTest:function(Ke){R||(Ke?Se(2960):Y(2960))},setMask:function(Ke){ue!==Ke&&!R&&(r.stencilMask(Ke),ue=Ke)},setFunc:function(Ke,Xt,Yt){(le!==Ke||Pe!==Xt||ce!==Yt)&&(r.stencilFunc(Ke,Xt,Yt),le=Ke,Pe=Xt,ce=Yt)},setOp:function(Ke,Xt,Yt){(te!==Ke||Le!==Xt||He!==Yt)&&(r.stencilOp(Ke,Xt,Yt),te=Ke,Le=Xt,He=Yt)},setLocked:function(Ke){R=Ke},setClear:function(Ke){At!==Ke&&(r.clearStencil(Ke),At=Ke)},reset:function(){R=!1,ue=null,le=null,Pe=null,ce=null,te=null,Le=null,He=null,At=null}}}const a=new i,l=new s,c=new o;let h={},d={},u=new WeakMap,f=[],g=null,v=!1,x=null,p=null,m=null,A=null,b=null,w=null,L=null,P=!1,W=null,ne=null,O=null,_=null,T=null;const I=r.getParameter(35661);let F=!1,H=0;const U=r.getParameter(7938);U.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(U)[1]),F=H>=1):U.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),F=H>=2);let V=null,B={};const X=r.getParameter(3088),K=r.getParameter(2978),Z=new Ze().fromArray(X),ee=new Ze().fromArray(K);function _e(R,ue,le){const Pe=new Uint8Array(4),ce=r.createTexture();r.bindTexture(R,ce),r.texParameteri(R,10241,9728),r.texParameteri(R,10240,9728);for(let te=0;te<le;te++)r.texImage2D(ue+te,0,6408,1,1,0,6408,5121,Pe);return ce}const We={};We[3553]=_e(3553,3553,1),We[34067]=_e(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Se(2929),l.setFunc(ro),ie(!1),de($o),Se(2884),N(bn);function Se(R){h[R]!==!0&&(r.enable(R),h[R]=!0)}function Y(R){h[R]!==!1&&(r.disable(R),h[R]=!1)}function qe(R,ue){return d[R]!==ue?(r.bindFramebuffer(R,ue),d[R]=ue,n&&(R===36009&&(d[36160]=ue),R===36160&&(d[36009]=ue)),!0):!1}function De(R,ue){let le=f,Pe=!1;if(R)if(le=u.get(ue),le===void 0&&(le=[],u.set(ue,le)),R.isWebGLMultipleRenderTargets){const ce=R.texture;if(le.length!==ce.length||le[0]!==36064){for(let te=0,Le=ce.length;te<Le;te++)le[te]=36064+te;le.length=ce.length,Pe=!0}}else le[0]!==36064&&(le[0]=36064,Pe=!0);else le[0]!==1029&&(le[0]=1029,Pe=!0);Pe&&(t.isWebGL2?r.drawBuffers(le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(le))}function fe(R){return g!==R?(r.useProgram(R),g=R,!0):!1}const pe={[di]:32774,[uh]:32778,[dh]:32779};if(n)pe[ta]=32775,pe[na]=32776;else{const R=e.get("EXT_blend_minmax");R!==null&&(pe[ta]=R.MIN_EXT,pe[na]=R.MAX_EXT)}const Oe={[fh]:0,[ph]:1,[mh]:768,[Ol]:770,[wh]:776,[_h]:774,[vh]:772,[gh]:769,[Hl]:771,[yh]:775,[xh]:773};function N(R,ue,le,Pe,ce,te,Le,He){if(R===bn){v===!0&&(Y(3042),v=!1);return}if(v===!1&&(Se(3042),v=!0),R!==hh){if(R!==x||He!==P){if((p!==di||b!==di)&&(r.blendEquation(32774),p=di,b=di),He)switch(R){case xi:r.blendFuncSeparate(1,771,1,771);break;case Zo:r.blendFunc(1,1);break;case Ko:r.blendFuncSeparate(0,769,0,1);break;case ea:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case xi:r.blendFuncSeparate(770,771,1,771);break;case Zo:r.blendFunc(770,1);break;case Ko:r.blendFuncSeparate(0,769,0,1);break;case ea:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}m=null,A=null,w=null,L=null,x=R,P=He}return}ce=ce||ue,te=te||le,Le=Le||Pe,(ue!==p||ce!==b)&&(r.blendEquationSeparate(pe[ue],pe[ce]),p=ue,b=ce),(le!==m||Pe!==A||te!==w||Le!==L)&&(r.blendFuncSeparate(Oe[le],Oe[Pe],Oe[te],Oe[Le]),m=le,A=Pe,w=te,L=Le),x=R,P=null}function $(R,ue){R.side===bi?Y(2884):Se(2884);let le=R.side===ut;ue&&(le=!le),ie(le),R.blending===xi&&R.transparent===!1?N(bn):N(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),a.setMask(R.colorWrite);const Pe=R.stencilWrite;c.setTest(Pe),Pe&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Ae(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Se(32926):Y(32926)}function ie(R){W!==R&&(R?r.frontFace(2304):r.frontFace(2305),W=R)}function de(R){R!==ah?(Se(2884),R!==ne&&(R===$o?r.cullFace(1029):R===lh?r.cullFace(1028):r.cullFace(1032))):Y(2884),ne=R}function ae(R){R!==O&&(F&&r.lineWidth(R),O=R)}function Ae(R,ue,le){R?(Se(32823),(_!==ue||T!==le)&&(r.polygonOffset(ue,le),_=ue,T=le)):Y(32823)}function ve(R){R?Se(3089):Y(3089)}function Be(R){R===void 0&&(R=33984+I-1),V!==R&&(r.activeTexture(R),V=R)}function nt(R,ue){V===null&&Be();let le=B[V];le===void 0&&(le={type:void 0,texture:void 0},B[V]=le),(le.type!==R||le.texture!==ue)&&(r.bindTexture(R,ue||We[R]),le.type=R,le.texture=ue)}function S(){const R=B[V];R!==void 0&&R.type!==void 0&&(r.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function y(){try{r.compressedTexImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function G(){try{r.texSubImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function J(){try{r.texSubImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function se(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function he(){try{r.texStorage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function be(){try{r.texStorage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function q(){try{r.texImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Re(){try{r.texImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ce(R){Z.equals(R)===!1&&(r.scissor(R.x,R.y,R.z,R.w),Z.copy(R))}function xe(R){ee.equals(R)===!1&&(r.viewport(R.x,R.y,R.z,R.w),ee.copy(R))}function me(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},V=null,B={},d={},u=new WeakMap,f=[],g=null,v=!1,x=null,p=null,m=null,A=null,b=null,w=null,L=null,P=!1,W=null,ne=null,O=null,_=null,T=null,Z.set(0,0,r.canvas.width,r.canvas.height),ee.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Se,disable:Y,bindFramebuffer:qe,drawBuffers:De,useProgram:fe,setBlending:N,setMaterial:$,setFlipSided:ie,setCullFace:de,setLineWidth:ae,setPolygonOffset:Ae,setScissorTest:ve,activeTexture:Be,bindTexture:nt,unbindTexture:S,compressedTexImage2D:y,texImage2D:q,texImage3D:Re,texStorage2D:he,texStorage3D:be,texSubImage2D:G,texSubImage3D:J,compressedTexSubImage2D:se,scissor:Ce,viewport:xe,reset:me}}function Vm(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=new WeakMap;let g;const v=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(S,y){return x?new OffscreenCanvas(S,y):Zi("canvas")}function m(S,y,G,J){let se=1;if((S.width>J||S.height>J)&&(se=J/Math.max(S.width,S.height)),se<1||y===!0)if(typeof HTMLImageElement!="undefined"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&S instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&S instanceof ImageBitmap){const he=y?fo:Math.floor,be=he(se*S.width),q=he(se*S.height);g===void 0&&(g=p(be,q));const Re=G?p(be,q):g;return Re.width=be,Re.height=q,Re.getContext("2d").drawImage(S,0,0,be,q),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+be+"x"+q+")."),Re}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function A(S){return Ta(S.width)&&Ta(S.height)}function b(S){return a?!1:S.wrapS!==Wt||S.wrapT!==Wt||S.minFilter!==mt&&S.minFilter!==wt}function w(S,y){return S.generateMipmaps&&y&&S.minFilter!==mt&&S.minFilter!==wt}function L(S){r.generateMipmap(S)}function P(S,y,G,J,se=!1){if(a===!1)return y;if(S!==null){if(r[S]!==void 0)return r[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let he=y;return y===6403&&(G===5126&&(he=33326),G===5131&&(he=33325),G===5121&&(he=33321)),y===33319&&(G===5126&&(he=33328),G===5131&&(he=33327),G===5121&&(he=33323)),y===6408&&(G===5126&&(he=34836),G===5131&&(he=34842),G===5121&&(he=J===it&&se===!1?35907:32856),G===32819&&(he=32854),G===32820&&(he=32855)),(he===33325||he===33326||he===33327||he===33328||he===34842||he===34836)&&e.get("EXT_color_buffer_float"),he}function W(S,y,G){return w(S,G)===!0||S.isFramebufferTexture&&S.minFilter!==mt&&S.minFilter!==wt?Math.log2(Math.max(y.width,y.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?y.mipmaps.length:1}function ne(S){return S===mt||S===ia||S===sa?9728:9729}function O(S){const y=S.target;y.removeEventListener("dispose",O),T(y),y.isVideoTexture&&f.delete(y)}function _(S){const y=S.target;y.removeEventListener("dispose",_),F(y)}function T(S){const y=n.get(S);if(y.__webglInit===void 0)return;const G=S.source,J=v.get(G);if(J){const se=J[y.__cacheKey];se.usedTimes--,se.usedTimes===0&&I(S),Object.keys(J).length===0&&v.delete(G)}n.remove(S)}function I(S){const y=n.get(S);r.deleteTexture(y.__webglTexture);const G=S.source,J=v.get(G);delete J[y.__cacheKey],o.memory.textures--}function F(S){const y=S.texture,G=n.get(S),J=n.get(y);if(J.__webglTexture!==void 0&&(r.deleteTexture(J.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let se=0;se<6;se++)r.deleteFramebuffer(G.__webglFramebuffer[se]),G.__webglDepthbuffer&&r.deleteRenderbuffer(G.__webglDepthbuffer[se]);else r.deleteFramebuffer(G.__webglFramebuffer),G.__webglDepthbuffer&&r.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&r.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer&&r.deleteRenderbuffer(G.__webglColorRenderbuffer),G.__webglDepthRenderbuffer&&r.deleteRenderbuffer(G.__webglDepthRenderbuffer);if(S.isWebGLMultipleRenderTargets)for(let se=0,he=y.length;se<he;se++){const be=n.get(y[se]);be.__webglTexture&&(r.deleteTexture(be.__webglTexture),o.memory.textures--),n.remove(y[se])}n.remove(y),n.remove(S)}let H=0;function U(){H=0}function V(){const S=H;return S>=l&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+l),H+=1,S}function B(S){const y=[];return y.push(S.wrapS),y.push(S.wrapT),y.push(S.magFilter),y.push(S.minFilter),y.push(S.anisotropy),y.push(S.internalFormat),y.push(S.format),y.push(S.type),y.push(S.generateMipmaps),y.push(S.premultiplyAlpha),y.push(S.flipY),y.push(S.unpackAlignment),y.push(S.encoding),y.join()}function X(S,y){const G=n.get(S);if(S.isVideoTexture&&Be(S),S.isRenderTargetTexture===!1&&S.version>0&&G.__version!==S.version){const J=S.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{qe(G,S,y);return}}t.activeTexture(33984+y),t.bindTexture(3553,G.__webglTexture)}function K(S,y){const G=n.get(S);if(S.version>0&&G.__version!==S.version){qe(G,S,y);return}t.activeTexture(33984+y),t.bindTexture(35866,G.__webglTexture)}function Z(S,y){const G=n.get(S);if(S.version>0&&G.__version!==S.version){qe(G,S,y);return}t.activeTexture(33984+y),t.bindTexture(32879,G.__webglTexture)}function ee(S,y){const G=n.get(S);if(S.version>0&&G.__version!==S.version){De(G,S,y);return}t.activeTexture(33984+y),t.bindTexture(34067,G.__webglTexture)}const _e={[lo]:10497,[Wt]:33071,[co]:33648},We={[mt]:9728,[ia]:9984,[sa]:9986,[wt]:9729,[Fh]:9985,[tr]:9987};function Se(S,y,G){if(G?(r.texParameteri(S,10242,_e[y.wrapS]),r.texParameteri(S,10243,_e[y.wrapT]),(S===32879||S===35866)&&r.texParameteri(S,32882,_e[y.wrapR]),r.texParameteri(S,10240,We[y.magFilter]),r.texParameteri(S,10241,We[y.minFilter])):(r.texParameteri(S,10242,33071),r.texParameteri(S,10243,33071),(S===32879||S===35866)&&r.texParameteri(S,32882,33071),(y.wrapS!==Wt||y.wrapT!==Wt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(S,10240,ne(y.magFilter)),r.texParameteri(S,10241,ne(y.minFilter)),y.minFilter!==mt&&y.minFilter!==wt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const J=e.get("EXT_texture_filter_anisotropic");if(y.type===Fn&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===_i&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(r.texParameterf(S,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function Y(S,y){let G=!1;S.__webglInit===void 0&&(S.__webglInit=!0,y.addEventListener("dispose",O));const J=y.source;let se=v.get(J);se===void 0&&(se={},v.set(J,se));const he=B(y);if(he!==S.__cacheKey){se[he]===void 0&&(se[he]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),se[he].usedTimes++;const be=se[S.__cacheKey];be!==void 0&&(se[S.__cacheKey].usedTimes--,be.usedTimes===0&&I(y)),S.__cacheKey=he,S.__webglTexture=se[he].texture}return G}function qe(S,y,G){let J=3553;y.isDataArrayTexture&&(J=35866),y.isData3DTexture&&(J=32879);const se=Y(S,y),he=y.source;if(t.activeTexture(33984+G),t.bindTexture(J,S.__webglTexture),he.version!==he.__currentVersion||se===!0){r.pixelStorei(37440,y.flipY),r.pixelStorei(37441,y.premultiplyAlpha),r.pixelStorei(3317,y.unpackAlignment),r.pixelStorei(37443,0);const be=b(y)&&A(y.image)===!1;let q=m(y.image,be,!1,h);q=nt(y,q);const Re=A(q)||a,Ce=s.convert(y.format,y.encoding);let xe=s.convert(y.type),me=P(y.internalFormat,Ce,xe,y.encoding,y.isVideoTexture);Se(J,y,Re);let R;const ue=y.mipmaps,le=a&&y.isVideoTexture!==!0,Pe=S.__version===void 0,ce=W(y,q,Re);if(y.isDepthTexture)me=6402,a?y.type===Fn?me=36012:y.type===Gs?me=33190:y.type===yi?me=35056:me=33189:y.type===Fn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Un&&me===6402&&y.type!==Qi&&y.type!==Gs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Qi,xe=s.convert(y.type)),y.format===Ai&&me===6402&&(me=34041,y.type!==yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=yi,xe=s.convert(y.type))),le&&Pe?t.texStorage2D(3553,1,me,q.width,q.height):t.texImage2D(3553,0,me,q.width,q.height,0,Ce,xe,null);else if(y.isDataTexture)if(ue.length>0&&Re){le&&Pe&&t.texStorage2D(3553,ce,me,ue[0].width,ue[0].height);for(let te=0,Le=ue.length;te<Le;te++)R=ue[te],le?t.texSubImage2D(3553,te,0,0,R.width,R.height,Ce,xe,R.data):t.texImage2D(3553,te,me,R.width,R.height,0,Ce,xe,R.data);y.generateMipmaps=!1}else le?(Pe&&t.texStorage2D(3553,ce,me,q.width,q.height),t.texSubImage2D(3553,0,0,0,q.width,q.height,Ce,xe,q.data)):t.texImage2D(3553,0,me,q.width,q.height,0,Ce,xe,q.data);else if(y.isCompressedTexture){le&&Pe&&t.texStorage2D(3553,ce,me,ue[0].width,ue[0].height);for(let te=0,Le=ue.length;te<Le;te++)R=ue[te],y.format!==Rt?Ce!==null?le?t.compressedTexSubImage2D(3553,te,0,0,R.width,R.height,Ce,R.data):t.compressedTexImage2D(3553,te,me,R.width,R.height,0,R.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?t.texSubImage2D(3553,te,0,0,R.width,R.height,Ce,xe,R.data):t.texImage2D(3553,te,me,R.width,R.height,0,Ce,xe,R.data)}else if(y.isDataArrayTexture)le?(Pe&&t.texStorage3D(35866,ce,me,q.width,q.height,q.depth),t.texSubImage3D(35866,0,0,0,0,q.width,q.height,q.depth,Ce,xe,q.data)):t.texImage3D(35866,0,me,q.width,q.height,q.depth,0,Ce,xe,q.data);else if(y.isData3DTexture)le?(Pe&&t.texStorage3D(32879,ce,me,q.width,q.height,q.depth),t.texSubImage3D(32879,0,0,0,0,q.width,q.height,q.depth,Ce,xe,q.data)):t.texImage3D(32879,0,me,q.width,q.height,q.depth,0,Ce,xe,q.data);else if(y.isFramebufferTexture)le&&Pe?t.texStorage2D(3553,ce,me,q.width,q.height):t.texImage2D(3553,0,me,q.width,q.height,0,Ce,xe,null);else if(ue.length>0&&Re){le&&Pe&&t.texStorage2D(3553,ce,me,ue[0].width,ue[0].height);for(let te=0,Le=ue.length;te<Le;te++)R=ue[te],le?t.texSubImage2D(3553,te,0,0,Ce,xe,R):t.texImage2D(3553,te,me,Ce,xe,R);y.generateMipmaps=!1}else le?(Pe&&t.texStorage2D(3553,ce,me,q.width,q.height),t.texSubImage2D(3553,0,0,0,Ce,xe,q)):t.texImage2D(3553,0,me,Ce,xe,q);w(y,Re)&&L(J),he.__currentVersion=he.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function De(S,y,G){if(y.image.length!==6)return;const J=Y(S,y),se=y.source;if(t.activeTexture(33984+G),t.bindTexture(34067,S.__webglTexture),se.version!==se.__currentVersion||J===!0){r.pixelStorei(37440,y.flipY),r.pixelStorei(37441,y.premultiplyAlpha),r.pixelStorei(3317,y.unpackAlignment),r.pixelStorei(37443,0);const he=y.isCompressedTexture||y.image[0].isCompressedTexture,be=y.image[0]&&y.image[0].isDataTexture,q=[];for(let te=0;te<6;te++)!he&&!be?q[te]=m(y.image[te],!1,!0,c):q[te]=be?y.image[te].image:y.image[te],q[te]=nt(y,q[te]);const Re=q[0],Ce=A(Re)||a,xe=s.convert(y.format,y.encoding),me=s.convert(y.type),R=P(y.internalFormat,xe,me,y.encoding),ue=a&&y.isVideoTexture!==!0,le=S.__version===void 0;let Pe=W(y,Re,Ce);Se(34067,y,Ce);let ce;if(he){ue&&le&&t.texStorage2D(34067,Pe,R,Re.width,Re.height);for(let te=0;te<6;te++){ce=q[te].mipmaps;for(let Le=0;Le<ce.length;Le++){const He=ce[Le];y.format!==Rt?xe!==null?ue?t.compressedTexSubImage2D(34069+te,Le,0,0,He.width,He.height,xe,He.data):t.compressedTexImage2D(34069+te,Le,R,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ue?t.texSubImage2D(34069+te,Le,0,0,He.width,He.height,xe,me,He.data):t.texImage2D(34069+te,Le,R,He.width,He.height,0,xe,me,He.data)}}}else{ce=y.mipmaps,ue&&le&&(ce.length>0&&Pe++,t.texStorage2D(34067,Pe,R,q[0].width,q[0].height));for(let te=0;te<6;te++)if(be){ue?t.texSubImage2D(34069+te,0,0,0,q[te].width,q[te].height,xe,me,q[te].data):t.texImage2D(34069+te,0,R,q[te].width,q[te].height,0,xe,me,q[te].data);for(let Le=0;Le<ce.length;Le++){const At=ce[Le].image[te].image;ue?t.texSubImage2D(34069+te,Le+1,0,0,At.width,At.height,xe,me,At.data):t.texImage2D(34069+te,Le+1,R,At.width,At.height,0,xe,me,At.data)}}else{ue?t.texSubImage2D(34069+te,0,0,0,xe,me,q[te]):t.texImage2D(34069+te,0,R,xe,me,q[te]);for(let Le=0;Le<ce.length;Le++){const He=ce[Le];ue?t.texSubImage2D(34069+te,Le+1,0,0,xe,me,He.image[te]):t.texImage2D(34069+te,Le+1,R,xe,me,He.image[te])}}}w(y,Ce)&&L(34067),se.__currentVersion=se.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function fe(S,y,G,J,se){const he=s.convert(G.format,G.encoding),be=s.convert(G.type),q=P(G.internalFormat,he,be,G.encoding);n.get(y).__hasExternalTextures||(se===32879||se===35866?t.texImage3D(se,0,q,y.width,y.height,y.depth,0,he,be,null):t.texImage2D(se,0,q,y.width,y.height,0,he,be,null)),t.bindFramebuffer(36160,S),ve(y)?u.framebufferTexture2DMultisampleEXT(36160,J,se,n.get(G).__webglTexture,0,Ae(y)):r.framebufferTexture2D(36160,J,se,n.get(G).__webglTexture,0),t.bindFramebuffer(36160,null)}function pe(S,y,G){if(r.bindRenderbuffer(36161,S),y.depthBuffer&&!y.stencilBuffer){let J=33189;if(G||ve(y)){const se=y.depthTexture;se&&se.isDepthTexture&&(se.type===Fn?J=36012:se.type===Gs&&(J=33190));const he=Ae(y);ve(y)?u.renderbufferStorageMultisampleEXT(36161,he,J,y.width,y.height):r.renderbufferStorageMultisample(36161,he,J,y.width,y.height)}else r.renderbufferStorage(36161,J,y.width,y.height);r.framebufferRenderbuffer(36160,36096,36161,S)}else if(y.depthBuffer&&y.stencilBuffer){const J=Ae(y);G&&ve(y)===!1?r.renderbufferStorageMultisample(36161,J,35056,y.width,y.height):ve(y)?u.renderbufferStorageMultisampleEXT(36161,J,35056,y.width,y.height):r.renderbufferStorage(36161,34041,y.width,y.height),r.framebufferRenderbuffer(36160,33306,36161,S)}else{const J=y.isWebGLMultipleRenderTargets===!0?y.texture[0]:y.texture,se=s.convert(J.format,J.encoding),he=s.convert(J.type),be=P(J.internalFormat,se,he,J.encoding),q=Ae(y);G&&ve(y)===!1?r.renderbufferStorageMultisample(36161,q,be,y.width,y.height):ve(y)?u.renderbufferStorageMultisampleEXT(36161,q,be,y.width,y.height):r.renderbufferStorage(36161,be,y.width,y.height)}r.bindRenderbuffer(36161,null)}function Oe(S,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,S),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X(y.depthTexture,0);const J=n.get(y.depthTexture).__webglTexture,se=Ae(y);if(y.depthTexture.format===Un)ve(y)?u.framebufferTexture2DMultisampleEXT(36160,36096,3553,J,0,se):r.framebufferTexture2D(36160,36096,3553,J,0);else if(y.depthTexture.format===Ai)ve(y)?u.framebufferTexture2DMultisampleEXT(36160,33306,3553,J,0,se):r.framebufferTexture2D(36160,33306,3553,J,0);else throw new Error("Unknown depthTexture format")}function N(S){const y=n.get(S),G=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!y.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Oe(y.__webglFramebuffer,S)}else if(G){y.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(36160,y.__webglFramebuffer[J]),y.__webglDepthbuffer[J]=r.createRenderbuffer(),pe(y.__webglDepthbuffer[J],S,!1)}else t.bindFramebuffer(36160,y.__webglFramebuffer),y.__webglDepthbuffer=r.createRenderbuffer(),pe(y.__webglDepthbuffer,S,!1);t.bindFramebuffer(36160,null)}function $(S,y,G){const J=n.get(S);y!==void 0&&fe(J.__webglFramebuffer,S,S.texture,36064,3553),G!==void 0&&N(S)}function ie(S){const y=S.texture,G=n.get(S),J=n.get(y);S.addEventListener("dispose",_),S.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=y.version,o.memory.textures++);const se=S.isWebGLCubeRenderTarget===!0,he=S.isWebGLMultipleRenderTargets===!0,be=A(S)||a;if(se){G.__webglFramebuffer=[];for(let q=0;q<6;q++)G.__webglFramebuffer[q]=r.createFramebuffer()}else if(G.__webglFramebuffer=r.createFramebuffer(),he)if(i.drawBuffers){const q=S.texture;for(let Re=0,Ce=q.length;Re<Ce;Re++){const xe=n.get(q[Re]);xe.__webglTexture===void 0&&(xe.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(a&&S.samples>0&&ve(S)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=r.createRenderbuffer(),r.bindRenderbuffer(36161,G.__webglColorRenderbuffer);const q=s.convert(y.format,y.encoding),Re=s.convert(y.type),Ce=P(y.internalFormat,q,Re,y.encoding),xe=Ae(S);r.renderbufferStorageMultisample(36161,xe,Ce,S.width,S.height),t.bindFramebuffer(36160,G.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064,36161,G.__webglColorRenderbuffer),r.bindRenderbuffer(36161,null),S.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),pe(G.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(36160,null)}if(se){t.bindTexture(34067,J.__webglTexture),Se(34067,y,be);for(let q=0;q<6;q++)fe(G.__webglFramebuffer[q],S,y,36064,34069+q);w(y,be)&&L(34067),t.unbindTexture()}else if(he){const q=S.texture;for(let Re=0,Ce=q.length;Re<Ce;Re++){const xe=q[Re],me=n.get(xe);t.bindTexture(3553,me.__webglTexture),Se(3553,xe,be),fe(G.__webglFramebuffer,S,xe,36064+Re,3553),w(xe,be)&&L(3553)}t.unbindTexture()}else{let q=3553;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?q=S.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(q,J.__webglTexture),Se(q,y,be),fe(G.__webglFramebuffer,S,y,36064,q),w(y,be)&&L(q),t.unbindTexture()}S.depthBuffer&&N(S)}function de(S){const y=A(S)||a,G=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let J=0,se=G.length;J<se;J++){const he=G[J];if(w(he,y)){const be=S.isWebGLCubeRenderTarget?34067:3553,q=n.get(he).__webglTexture;t.bindTexture(be,q),L(be),t.unbindTexture()}}}function ae(S){if(a&&S.samples>0&&ve(S)===!1){const y=S.width,G=S.height;let J=16384;const se=[36064],he=S.stencilBuffer?33306:36096;S.depthBuffer&&se.push(he);const be=n.get(S),q=be.__ignoreDepthValues!==void 0?be.__ignoreDepthValues:!1;q===!1&&(S.depthBuffer&&(J|=256),S.stencilBuffer&&(J|=1024)),t.bindFramebuffer(36008,be.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,be.__webglFramebuffer),q===!0&&(r.invalidateFramebuffer(36008,[he]),r.invalidateFramebuffer(36009,[he])),r.blitFramebuffer(0,0,y,G,0,0,y,G,J,9728),r.invalidateFramebuffer(36008,se),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,be.__webglMultisampledFramebuffer)}}function Ae(S){return Math.min(d,S.samples)}function ve(S){const y=n.get(S);return a&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Be(S){const y=o.render.frame;f.get(S)!==y&&(f.set(S,y),S.update())}function nt(S,y){const G=S.encoding,J=S.format,se=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===ho||G!==En&&(G===it?a===!1?e.has("EXT_sRGB")===!0&&J===Rt?(S.format=ho,S.minFilter=wt,S.generateMipmaps=!1):y=Vn.sRGBToLinear(y):(J!==Rt||se!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",G)),y}this.allocateTextureUnit=V,this.resetTextureUnits=U,this.setTexture2D=X,this.setTexture2DArray=K,this.setTexture3D=Z,this.setTextureCube=ee,this.rebindTextures=$,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=N,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=ve}function Gm(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===Nn)return 5121;if(s===Oh)return 32819;if(s===Hh)return 32820;if(s===Uh)return 5120;if(s===Nh)return 5122;if(s===Qi)return 5123;if(s===kh)return 5124;if(s===Gs)return 5125;if(s===Fn)return 5126;if(s===_i)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Vh)return 6406;if(s===Rt)return 6408;if(s===Wh)return 6409;if(s===qh)return 6410;if(s===Un)return 6402;if(s===Ai)return 34041;if(s===jh)return 6403;if(s===Gh)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===ho)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Xh)return 36244;if(s===Yh)return 33319;if(s===Jh)return 33320;if(s===Qh)return 36249;if(s===vr||s===xr||s===_r||s===yr)if(o===it)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===vr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===xr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===_r)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===yr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===vr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===xr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===_r)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===yr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ra||s===oa||s===aa||s===la)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ra)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===oa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===aa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===la)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===$h)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ca||s===ha)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ca)return o===it?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===ha)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ua||s===da||s===fa||s===pa||s===ma||s===ga||s===va||s===xa||s===_a||s===ya||s===wa||s===ba||s===Ma||s===Sa)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ua)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===da)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===fa)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===pa)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ma)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ga)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===va)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===xa)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===_a)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ya)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===wa)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ba)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ma)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Sa)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Aa)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Aa)return o===it?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===yi)return n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}class rc extends bt{constructor(e=[]){super();this.cameras=e}}rc.prototype.isArrayCamera=!0;class gi extends Qe{constructor(){super();this.type="Group"}}gi.prototype.isGroup=!0;const Wm={type:"move"};class Qr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Wm))),c&&e.hand){o=!0;for(const v of e.hand.values()){const x=t.getJointPose(v,n);if(c.joints[v.jointName]===void 0){const m=new gi;m.matrixAutoUpdate=!1,m.visible=!1,c.joints[v.jointName]=m,c.add(m)}const p=c.joints[v.jointName];x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.jointRadius=x.radius),p.visible=x!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}}class oc extends gt{constructor(e,t,n,i,s,o,a,l,c,h){if(h=h!==void 0?h:Un,h!==Un&&h!==Ai)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Un&&(n=Qi),n===void 0&&h===Ai&&(n=yi);super(null,i,s,o,a,l,h,n,c);this.image={width:e,height:t},this.magFilter=a!==void 0?a:mt,this.minFilter=l!==void 0?l:mt,this.flipY=!1,this.generateMipmaps=!1}}oc.prototype.isDepthTexture=!0;class qm extends Hn{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=null,c=null,h=null,d=null,u=null;const f=t.getContextAttributes();let g=null,v=null;const x=[],p=new Map,m=new bt;m.layers.enable(1),m.viewport=new Ze;const A=new bt;A.layers.enable(2),A.viewport=new Ze;const b=[m,A],w=new rc;w.layers.enable(1),w.layers.enable(2);let L=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let X=x[B];return X===void 0&&(X=new Qr,x[B]=X),X.getTargetRaySpace()},this.getControllerGrip=function(B){let X=x[B];return X===void 0&&(X=new Qr,x[B]=X),X.getGripSpace()},this.getHand=function(B){let X=x[B];return X===void 0&&(X=new Qr,x[B]=X),X.getHandSpace()};function W(B){const X=p.get(B.inputSource);X&&X.dispatchEvent({type:B.type,data:B.inputSource})}function ne(){p.forEach(function(B,X){B.disconnect(X)}),p.clear(),L=null,P=null,e.setRenderTarget(g),d=null,h=null,c=null,i=null,v=null,V.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return c},this.getFrame=function(){return u},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",ne),i.addEventListener("inputsourceschange",O),f.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const X={antialias:i.renderState.layers===void 0?f.antialias:!0,alpha:f.alpha,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,X),i.updateRenderState({baseLayer:d}),v=new zt(d.framebufferWidth,d.framebufferHeight,{format:Rt,type:Nn,encoding:e.outputEncoding})}else{let X=null,K=null,Z=null;f.depth&&(Z=f.stencil?35056:33190,X=f.stencil?Ai:Un,K=f.stencil?yi:Qi);const ee={colorFormat:e.outputEncoding===it?35907:32856,depthFormat:Z,scaleFactor:s};c=new XRWebGLBinding(i,t),h=c.createProjectionLayer(ee),i.updateRenderState({layers:[h]}),v=new zt(h.textureWidth,h.textureHeight,{format:Rt,type:Nn,depthTexture:new oc(h.textureWidth,h.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:f.stencil,encoding:e.outputEncoding,samples:f.antialias?4:0});const _e=e.properties.get(v);_e.__ignoreDepthValues=h.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(1),o=await i.requestReferenceSpace(a),V.setContext(i),V.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function O(B){const X=i.inputSources;for(let K=0;K<x.length;K++)p.set(X[K],x[K]);for(let K=0;K<B.removed.length;K++){const Z=B.removed[K],ee=p.get(Z);ee&&(ee.dispatchEvent({type:"disconnected",data:Z}),p.delete(Z))}for(let K=0;K<B.added.length;K++){const Z=B.added[K],ee=p.get(Z);ee&&ee.dispatchEvent({type:"connected",data:Z})}}const _=new E,T=new E;function I(B,X,K){_.setFromMatrixPosition(X.matrixWorld),T.setFromMatrixPosition(K.matrixWorld);const Z=_.distanceTo(T),ee=X.projectionMatrix.elements,_e=K.projectionMatrix.elements,We=ee[14]/(ee[10]-1),Se=ee[14]/(ee[10]+1),Y=(ee[9]+1)/ee[5],qe=(ee[9]-1)/ee[5],De=(ee[8]-1)/ee[0],fe=(_e[8]+1)/_e[0],pe=We*De,Oe=We*fe,N=Z/(-De+fe),$=N*-De;X.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX($),B.translateZ(N),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const ie=We+N,de=Se+N,ae=pe-$,Ae=Oe+(Z-$),ve=Y*Se/de*ie,Be=qe*Se/de*ie;B.projectionMatrix.makePerspective(ae,Ae,ve,Be,ie,de)}function F(B,X){X===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(X.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;w.near=A.near=m.near=B.near,w.far=A.far=m.far=B.far,(L!==w.near||P!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),L=w.near,P=w.far);const X=B.parent,K=w.cameras;F(w,X);for(let ee=0;ee<K.length;ee++)F(K[ee],X);w.matrixWorld.decompose(w.position,w.quaternion,w.scale),B.position.copy(w.position),B.quaternion.copy(w.quaternion),B.scale.copy(w.scale),B.matrix.copy(w.matrix),B.matrixWorld.copy(w.matrixWorld);const Z=B.children;for(let ee=0,_e=Z.length;ee<_e;ee++)Z[ee].updateMatrixWorld(!0);K.length===2?I(w,m,A):w.projectionMatrix.copy(m.projectionMatrix)},this.getCamera=function(){return w},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(B){h!==null&&(h.fixedFoveation=B),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=B)};let H=null;function U(B,X){if(l=X.getViewerPose(o),u=X,l!==null){const Z=l.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let ee=!1;Z.length!==w.cameras.length&&(w.cameras.length=0,ee=!0);for(let _e=0;_e<Z.length;_e++){const We=Z[_e];let Se=null;if(d!==null)Se=d.getViewport(We);else{const qe=c.getViewSubImage(h,We);Se=qe.viewport,_e===0&&(e.setRenderTargetTextures(v,qe.colorTexture,h.ignoreDepthValues?void 0:qe.depthStencilTexture),e.setRenderTarget(v))}const Y=b[_e];Y.matrix.fromArray(We.transform.matrix),Y.projectionMatrix.fromArray(We.projectionMatrix),Y.viewport.set(Se.x,Se.y,Se.width,Se.height),_e===0&&w.matrix.copy(Y.matrix),ee===!0&&w.cameras.push(Y)}}const K=i.inputSources;for(let Z=0;Z<x.length;Z++){const ee=x[Z],_e=K[Z];ee.update(_e,X,o)}H&&H(B,X),u=null}const V=new Ql;V.setAnimationLoop(U),this.setAnimationLoop=function(B){H=B},this.dispose=function(){}}}function jm(r){function e(p,m){p.fogColor.value.copy(m.color),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function t(p,m,A,b,w){m.isMeshBasicMaterial?n(p,m):m.isMeshLambertMaterial?(n(p,m),l(p,m)):m.isMeshToonMaterial?(n(p,m),h(p,m)):m.isMeshPhongMaterial?(n(p,m),c(p,m)):m.isMeshStandardMaterial?(n(p,m),m.isMeshPhysicalMaterial?u(p,m,w):d(p,m)):m.isMeshMatcapMaterial?(n(p,m),f(p,m)):m.isMeshDepthMaterial?(n(p,m),g(p,m)):m.isMeshDistanceMaterial?(n(p,m),v(p,m)):m.isMeshNormalMaterial?(n(p,m),x(p,m)):m.isLineBasicMaterial?(i(p,m),m.isLineDashedMaterial&&s(p,m)):m.isPointsMaterial?o(p,m,A,b):m.isSpriteMaterial?a(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function n(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.specularMap&&(p.specularMap.value=m.specularMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const A=r.get(m).envMap;A&&(p.envMap.value=A,p.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity);let b;m.map?b=m.map:m.specularMap?b=m.specularMap:m.displacementMap?b=m.displacementMap:m.normalMap?b=m.normalMap:m.bumpMap?b=m.bumpMap:m.roughnessMap?b=m.roughnessMap:m.metalnessMap?b=m.metalnessMap:m.alphaMap?b=m.alphaMap:m.emissiveMap?b=m.emissiveMap:m.clearcoatMap?b=m.clearcoatMap:m.clearcoatNormalMap?b=m.clearcoatNormalMap:m.clearcoatRoughnessMap?b=m.clearcoatRoughnessMap:m.specularIntensityMap?b=m.specularIntensityMap:m.specularColorMap?b=m.specularColorMap:m.transmissionMap?b=m.transmissionMap:m.thicknessMap?b=m.thicknessMap:m.sheenColorMap?b=m.sheenColorMap:m.sheenRoughnessMap&&(b=m.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uvTransform.value.copy(b.matrix));let w;m.aoMap?w=m.aoMap:m.lightMap&&(w=m.lightMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),p.uv2Transform.value.copy(w.matrix))}function i(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity}function s(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function o(p,m,A,b){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*A,p.scale.value=b*.5,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let w;m.map?w=m.map:m.alphaMap&&(w=m.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),p.uvTransform.value.copy(w.matrix))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let A;m.map?A=m.map:m.alphaMap&&(A=m.alphaMap),A!==void 0&&(A.matrixAutoUpdate===!0&&A.updateMatrix(),p.uvTransform.value.copy(A.matrix))}function l(p,m){m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap)}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===ut&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===ut&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===ut&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===ut&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias)}function d(p,m){p.roughness.value=m.roughness,p.metalness.value=m.metalness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===ut&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===ut&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),r.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function u(p,m,A){d(p,m),p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),p.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===ut&&p.clearcoatNormalScale.value.negate())),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap)}function f(p,m){m.matcap&&(p.matcap.value=m.matcap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===ut&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===ut&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias)}function g(p,m){m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias)}function v(p,m){m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),p.referencePosition.value.copy(m.referencePosition),p.nearDistance.value=m.nearDistance,p.farDistance.value=m.farDistance}function x(p,m){m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===ut&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===ut&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function Xm(){const r=Zi("canvas");return r.style.display="block",r}function $e(r={}){const e=r.canvas!==void 0?r.canvas:Xm(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let h;r.context!==void 0?h=t.getContextAttributes().alpha:h=r.alpha!==void 0?r.alpha:!1;let d=null,u=null;const f=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=En,this.physicallyCorrectLights=!1,this.toneMapping=Mn,this.toneMappingExposure=1;const v=this;let x=!1,p=0,m=0,A=null,b=-1,w=null;const L=new Ze,P=new Ze;let W=null,ne=e.width,O=e.height,_=1,T=null,I=null;const F=new Ze(0,0,ne,O),H=new Ze(0,0,ne,O);let U=!1;const V=new rr;let B=!1,X=!1,K=null;const Z=new we,ee=new Q,_e=new E,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Se(){return A===null?_:1}let Y=t;function qe(M,D){for(let k=0;k<M.length;k++){const z=M[k],j=e.getContext(z,D);if(j!==null)return j}return null}try{const M={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${bo}`),e.addEventListener("webglcontextlost",R,!1),e.addEventListener("webglcontextrestored",ue,!1),Y===null){const D=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&D.shift(),Y=qe(D,M),Y===null)throw qe(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let De,fe,pe,Oe,N,$,ie,de,ae,Ae,ve,Be,nt,S,y,G,J,se,he,be,q,Re,Ce;function xe(){De=new up(Y),fe=new rp(Y,De,r),De.init(fe),Re=new Gm(Y,De,fe),pe=new Hm(Y,De,fe),Oe=new pp(Y),N=new Lm,$=new Vm(Y,De,pe,N,fe,Re,Oe),ie=new ap(v),de=new hp(v),ae=new Tu(Y,fe),Ce=new ip(Y,De,ae,fe),Ae=new dp(Y,ae,Oe,Ce),ve=new xp(Y,Ae,ae,Oe),he=new vp(Y,fe,$),G=new op(N),Be=new Cm(v,ie,de,De,fe,Ce,G),nt=new jm(N),S=new Im,y=new Nm(De,fe),se=new np(v,ie,pe,ve,h,o),J=new sc(v,ve,fe),be=new sp(Y,De,Oe,fe),q=new fp(Y,De,Oe,fe),Oe.programs=Be.programs,v.capabilities=fe,v.extensions=De,v.properties=N,v.renderLists=S,v.shadowMap=J,v.state=pe,v.info=Oe}xe();const me=new qm(v,Y);this.xr=me,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const M=De.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=De.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return _},this.setPixelRatio=function(M){M!==void 0&&(_=M,this.setSize(ne,O,!1))},this.getSize=function(M){return M.set(ne,O)},this.setSize=function(M,D,k){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=M,O=D,e.width=Math.floor(M*_),e.height=Math.floor(D*_),k!==!1&&(e.style.width=M+"px",e.style.height=D+"px"),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(ne*_,O*_).floor()},this.setDrawingBufferSize=function(M,D,k){ne=M,O=D,_=k,e.width=Math.floor(M*k),e.height=Math.floor(D*k),this.setViewport(0,0,M,D)},this.getCurrentViewport=function(M){return M.copy(L)},this.getViewport=function(M){return M.copy(F)},this.setViewport=function(M,D,k,z){M.isVector4?F.set(M.x,M.y,M.z,M.w):F.set(M,D,k,z),pe.viewport(L.copy(F).multiplyScalar(_).floor())},this.getScissor=function(M){return M.copy(H)},this.setScissor=function(M,D,k,z){M.isVector4?H.set(M.x,M.y,M.z,M.w):H.set(M,D,k,z),pe.scissor(P.copy(H).multiplyScalar(_).floor())},this.getScissorTest=function(){return U},this.setScissorTest=function(M){pe.setScissorTest(U=M)},this.setOpaqueSort=function(M){T=M},this.setTransparentSort=function(M){I=M},this.getClearColor=function(M){return M.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor.apply(se,arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha.apply(se,arguments)},this.clear=function(M=!0,D=!0,k=!0){let z=0;M&&(z|=16384),D&&(z|=256),k&&(z|=1024),Y.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",R,!1),e.removeEventListener("webglcontextrestored",ue,!1),S.dispose(),y.dispose(),N.dispose(),ie.dispose(),de.dispose(),ve.dispose(),Ce.dispose(),Be.dispose(),me.dispose(),me.removeEventListener("sessionstart",He),me.removeEventListener("sessionend",At),K&&(K.dispose(),K=null),Ke.stop()};function R(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const M=Oe.autoReset,D=J.enabled,k=J.autoUpdate,z=J.needsUpdate,j=J.type;xe(),Oe.autoReset=M,J.enabled=D,J.autoUpdate=k,J.needsUpdate=z,J.type=j}function le(M){const D=M.target;D.removeEventListener("dispose",le),Pe(D)}function Pe(M){ce(M),N.remove(M)}function ce(M){const D=N.get(M).programs;D!==void 0&&(D.forEach(function(k){Be.releaseProgram(k)}),M.isShaderMaterial&&Be.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,k,z,j,Ee){D===null&&(D=We);const Ie=j.isMesh&&j.matrixWorld.determinant()<0,Ue=Hc(M,D,k,z,j);pe.setMaterial(z,Ie);let ze=k.index;const Ye=k.attributes.position;if(ze===null){if(Ye===void 0||Ye.count===0)return}else if(ze.count===0)return;let Ve=1;z.wireframe===!0&&(ze=Ae.getWireframeAttribute(k),Ve=2),Ce.setup(j,z,Ue,k,ze);let Ge,ot=be;ze!==null&&(Ge=ae.get(ze),ot=q,ot.setIndex(Ge));const Ln=ze!==null?ze.count:Ye.count,qn=k.drawRange.start*Ve,jn=k.drawRange.count*Ve,Jt=Ee!==null?Ee.start*Ve:0,je=Ee!==null?Ee.count*Ve:1/0,Xn=Math.max(qn,Jt),ct=Math.min(Ln,qn+jn,Jt+je)-1,Qt=Math.max(0,ct-Xn+1);if(Qt!==0){if(j.isMesh)z.wireframe===!0?(pe.setLineWidth(z.wireframeLinewidth*Se()),ot.setMode(1)):ot.setMode(4);else if(j.isLine){let dn=z.linewidth;dn===void 0&&(dn=1),pe.setLineWidth(dn*Se()),j.isLineSegments?ot.setMode(1):j.isLineLoop?ot.setMode(2):ot.setMode(3)}else j.isPoints?ot.setMode(0):j.isSprite&&ot.setMode(4);if(j.isInstancedMesh)ot.renderInstances(Xn,Qt,j.count);else if(k.isInstancedBufferGeometry){const dn=Math.min(k.instanceCount,k._maxInstanceCount);ot.renderInstances(Xn,Qt,dn)}else ot.render(Xn,Qt)}},this.compile=function(M,D){u=y.get(M),u.init(),g.push(u),M.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(u.pushLight(k),k.castShadow&&u.pushShadow(k))}),u.setupLights(v.physicallyCorrectLights),M.traverse(function(k){const z=k.material;if(z)if(Array.isArray(z))for(let j=0;j<z.length;j++){const Ee=z[j];pr(Ee,M,k)}else pr(z,M,k)}),g.pop(),u=null};let te=null;function Le(M){te&&te(M)}function He(){Ke.stop()}function At(){Ke.start()}const Ke=new Ql;Ke.setAnimationLoop(Le),typeof window!="undefined"&&Ke.setContext(window),this.setAnimationLoop=function(M){te=M,me.setAnimationLoop(M),M===null?Ke.stop():Ke.start()},me.addEventListener("sessionstart",He),me.addEventListener("sessionend",At),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;M.autoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(D),D=me.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,D,A),u=y.get(M,g.length),u.init(),g.push(u),Z.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),V.setFromProjectionMatrix(Z),X=this.localClippingEnabled,B=G.init(this.clippingPlanes,X,D),d=S.get(M,f.length),d.init(),f.push(d),Xt(M,D,0,v.sortObjects),d.finish(),v.sortObjects===!0&&d.sort(T,I),B===!0&&G.beginShadows();const k=u.state.shadowsArray;if(J.render(k,M,D),B===!0&&G.endShadows(),this.info.autoReset===!0&&this.info.reset(),se.render(d,M),u.setupLights(v.physicallyCorrectLights),D.isArrayCamera){const z=D.cameras;for(let j=0,Ee=z.length;j<Ee;j++){const Ie=z[j];Yt(d,M,Ie,Ie.viewport)}}else Yt(d,M,D);A!==null&&($.updateMultisampleRenderTarget(A),$.updateRenderTargetMipmap(A)),M.isScene===!0&&M.onAfterRender(v,M,D),Ce.resetDefaultState(),b=-1,w=null,g.pop(),g.length>0?u=g[g.length-1]:u=null,f.pop(),f.length>0?d=f[f.length-1]:d=null};function Xt(M,D,k,z){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)k=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLight)u.pushLight(M),M.castShadow&&u.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||V.intersectsSprite(M)){z&&_e.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Z);const Ie=ve.update(M),Ue=M.material;Ue.visible&&d.push(M,Ie,Ue,k,_e.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(M.isSkinnedMesh&&M.skeleton.frame!==Oe.render.frame&&(M.skeleton.update(),M.skeleton.frame=Oe.render.frame),!M.frustumCulled||V.intersectsObject(M))){z&&_e.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Z);const Ie=ve.update(M),Ue=M.material;if(Array.isArray(Ue)){const ze=Ie.groups;for(let Ye=0,Ve=ze.length;Ye<Ve;Ye++){const Ge=ze[Ye],ot=Ue[Ge.materialIndex];ot&&ot.visible&&d.push(M,Ie,ot,k,_e.z,Ge)}}else Ue.visible&&d.push(M,Ie,Ue,k,_e.z,null)}}const Ee=M.children;for(let Ie=0,Ue=Ee.length;Ie<Ue;Ie++)Xt(Ee[Ie],D,k,z)}function Yt(M,D,k,z){const j=M.opaque,Ee=M.transmissive,Ie=M.transparent;u.setupLightsView(k),Ee.length>0&&kc(j,D,k),z&&pe.viewport(L.copy(z)),j.length>0&&cs(j,D,k),Ee.length>0&&cs(Ee,D,k),Ie.length>0&&cs(Ie,D,k),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function kc(M,D,k){const z=fe.isWebGL2;K===null&&(K=new zt(1,1,{generateMipmaps:!0,type:Re.convert(_i)!==null?_i:Nn,minFilter:tr,samples:z&&s===!0?4:0})),v.getDrawingBufferSize(ee),z?K.setSize(ee.x,ee.y):K.setSize(fo(ee.x),fo(ee.y));const j=v.getRenderTarget();v.setRenderTarget(K),v.clear();const Ee=v.toneMapping;v.toneMapping=Mn,cs(M,D,k),v.toneMapping=Ee,$.updateMultisampleRenderTarget(K),$.updateRenderTargetMipmap(K),v.setRenderTarget(j)}function cs(M,D,k){const z=D.isScene===!0?D.overrideMaterial:null;for(let j=0,Ee=M.length;j<Ee;j++){const Ie=M[j],Ue=Ie.object,ze=Ie.geometry,Ye=z===null?Ie.material:z,Ve=Ie.group;Ue.layers.test(k.layers)&&Oc(Ue,D,k,ze,Ye,Ve)}}function Oc(M,D,k,z,j,Ee){M.onBeforeRender(v,D,k,z,j,Ee),M.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),j.onBeforeRender(v,D,k,z,M,Ee),j.transparent===!0&&j.side===bi?(j.side=ut,j.needsUpdate=!0,v.renderBufferDirect(k,D,z,j,M,Ee),j.side=Ji,j.needsUpdate=!0,v.renderBufferDirect(k,D,z,j,M,Ee),j.side=bi):v.renderBufferDirect(k,D,z,j,M,Ee),M.onAfterRender(v,D,k,z,j,Ee)}function pr(M,D,k){D.isScene!==!0&&(D=We);const z=N.get(M),j=u.state.lights,Ee=u.state.shadowsArray,Ie=j.state.version,Ue=Be.getParameters(M,j.state,Ee,D,k),ze=Be.getProgramCacheKey(Ue);let Ye=z.programs;z.environment=M.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(M.isMeshStandardMaterial?de:ie).get(M.envMap||z.environment),Ye===void 0&&(M.addEventListener("dispose",le),Ye=new Map,z.programs=Ye);let Ve=Ye.get(ze);if(Ve!==void 0){if(z.currentProgram===Ve&&z.lightsStateVersion===Ie)return Yo(M,Ue),Ve}else Ue.uniforms=Be.getUniforms(M),M.onBuild(k,Ue,v),M.onBeforeCompile(Ue,v),Ve=Be.acquireProgram(Ue,ze),Ye.set(ze,Ve),z.uniforms=Ue.uniforms;const Ge=z.uniforms;(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ge.clippingPlanes=G.uniform),Yo(M,Ue),z.needsLights=Gc(M),z.lightsStateVersion=Ie,z.needsLights&&(Ge.ambientLightColor.value=j.state.ambient,Ge.lightProbe.value=j.state.probe,Ge.directionalLights.value=j.state.directional,Ge.directionalLightShadows.value=j.state.directionalShadow,Ge.spotLights.value=j.state.spot,Ge.spotLightShadows.value=j.state.spotShadow,Ge.rectAreaLights.value=j.state.rectArea,Ge.ltc_1.value=j.state.rectAreaLTC1,Ge.ltc_2.value=j.state.rectAreaLTC2,Ge.pointLights.value=j.state.point,Ge.pointLightShadows.value=j.state.pointShadow,Ge.hemisphereLights.value=j.state.hemi,Ge.directionalShadowMap.value=j.state.directionalShadowMap,Ge.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ge.spotShadowMap.value=j.state.spotShadowMap,Ge.spotShadowMatrix.value=j.state.spotShadowMatrix,Ge.pointShadowMap.value=j.state.pointShadowMap,Ge.pointShadowMatrix.value=j.state.pointShadowMatrix);const ot=Ve.getUniforms(),Ln=Sn.seqWithValue(ot.seq,Ge);return z.currentProgram=Ve,z.uniformsList=Ln,Ve}function Yo(M,D){const k=N.get(M);k.outputEncoding=D.outputEncoding,k.instancing=D.instancing,k.skinning=D.skinning,k.morphTargets=D.morphTargets,k.morphNormals=D.morphNormals,k.morphColors=D.morphColors,k.morphTargetsCount=D.morphTargetsCount,k.numClippingPlanes=D.numClippingPlanes,k.numIntersection=D.numClipIntersection,k.vertexAlphas=D.vertexAlphas,k.vertexTangents=D.vertexTangents,k.toneMapping=D.toneMapping}function Hc(M,D,k,z,j){D.isScene!==!0&&(D=We),$.resetTextureUnits();const Ee=D.fog,Ie=z.isMeshStandardMaterial?D.environment:null,Ue=A===null?v.outputEncoding:A.isXRRenderTarget===!0?A.texture.encoding:En,ze=(z.isMeshStandardMaterial?de:ie).get(z.envMap||Ie),Ye=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ve=!!z.normalMap&&!!k.attributes.tangent,Ge=!!k.morphAttributes.position,ot=!!k.morphAttributes.normal,Ln=!!k.morphAttributes.color,qn=z.toneMapped?v.toneMapping:Mn,jn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Jt=jn!==void 0?jn.length:0,je=N.get(z),Xn=u.state.lights;if(B===!0&&(X===!0||M!==w)){const Ot=M===w&&z.id===b;G.setState(z,M,Ot)}let ct=!1;z.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Xn.state.version||je.outputEncoding!==Ue||j.isInstancedMesh&&je.instancing===!1||!j.isInstancedMesh&&je.instancing===!0||j.isSkinnedMesh&&je.skinning===!1||!j.isSkinnedMesh&&je.skinning===!0||je.envMap!==ze||z.fog&&je.fog!==Ee||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==G.numPlanes||je.numIntersection!==G.numIntersection)||je.vertexAlphas!==Ye||je.vertexTangents!==Ve||je.morphTargets!==Ge||je.morphNormals!==ot||je.morphColors!==Ln||je.toneMapping!==qn||fe.isWebGL2===!0&&je.morphTargetsCount!==Jt)&&(ct=!0):(ct=!0,je.__version=z.version);let Qt=je.currentProgram;ct===!0&&(Qt=pr(z,D,j));let dn=!1,zi=!1,mr=!1;const _t=Qt.getUniforms(),Fi=je.uniforms;if(pe.useProgram(Qt.program)&&(dn=!0,zi=!0,mr=!0),z.id!==b&&(b=z.id,zi=!0),dn||w!==M){if(_t.setValue(Y,"projectionMatrix",M.projectionMatrix),fe.logarithmicDepthBuffer&&_t.setValue(Y,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),w!==M&&(w=M,zi=!0,mr=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){const Ot=_t.map.cameraPosition;Ot!==void 0&&Ot.setValue(Y,_e.setFromMatrixPosition(M.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&_t.setValue(Y,"isOrthographic",M.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||j.isSkinnedMesh)&&_t.setValue(Y,"viewMatrix",M.matrixWorldInverse)}if(j.isSkinnedMesh){_t.setOptional(Y,j,"bindMatrix"),_t.setOptional(Y,j,"bindMatrixInverse");const Ot=j.skeleton;Ot&&(fe.floatVertexTextures?(Ot.boneTexture===null&&Ot.computeBoneTexture(),_t.setValue(Y,"boneTexture",Ot.boneTexture,$),_t.setValue(Y,"boneTextureSize",Ot.boneTextureSize)):_t.setOptional(Y,Ot,"boneMatrices"))}const gr=k.morphAttributes;return(gr.position!==void 0||gr.normal!==void 0||gr.color!==void 0&&fe.isWebGL2===!0)&&he.update(j,k,z,Qt),(zi||je.receiveShadow!==j.receiveShadow)&&(je.receiveShadow=j.receiveShadow,_t.setValue(Y,"receiveShadow",j.receiveShadow)),zi&&(_t.setValue(Y,"toneMappingExposure",v.toneMappingExposure),je.needsLights&&Vc(Fi,mr),Ee&&z.fog&&nt.refreshFogUniforms(Fi,Ee),nt.refreshMaterialUniforms(Fi,z,_,O,K),Sn.upload(Y,je.uniformsList,Fi,$)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Sn.upload(Y,je.uniformsList,Fi,$),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&_t.setValue(Y,"center",j.center),_t.setValue(Y,"modelViewMatrix",j.modelViewMatrix),_t.setValue(Y,"normalMatrix",j.normalMatrix),_t.setValue(Y,"modelMatrix",j.matrixWorld),Qt}function Vc(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function Gc(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return p},this.getActiveMipmapLevel=function(){return m},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(M,D,k){N.get(M.texture).__webglTexture=D,N.get(M.depthTexture).__webglTexture=k;const z=N.get(M);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=k===void 0,z.__autoAllocateDepthBuffer||De.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,D){const k=N.get(M);k.__webglFramebuffer=D,k.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,k=0){A=M,p=D,m=k;let z=!0;if(M){const ze=N.get(M);ze.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(36160,null),z=!1):ze.__webglFramebuffer===void 0?$.setupRenderTarget(M):ze.__hasExternalTextures&&$.rebindTextures(M,N.get(M.texture).__webglTexture,N.get(M.depthTexture).__webglTexture)}let j=null,Ee=!1,Ie=!1;if(M){const ze=M.texture;(ze.isData3DTexture||ze.isDataArrayTexture)&&(Ie=!0);const Ye=N.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(j=Ye[D],Ee=!0):fe.isWebGL2&&M.samples>0&&$.useMultisampledRTT(M)===!1?j=N.get(M).__webglMultisampledFramebuffer:j=Ye,L.copy(M.viewport),P.copy(M.scissor),W=M.scissorTest}else L.copy(F).multiplyScalar(_).floor(),P.copy(H).multiplyScalar(_).floor(),W=U;if(pe.bindFramebuffer(36160,j)&&fe.drawBuffers&&z&&pe.drawBuffers(M,j),pe.viewport(L),pe.scissor(P),pe.setScissorTest(W),Ee){const ze=N.get(M.texture);Y.framebufferTexture2D(36160,36064,34069+D,ze.__webglTexture,k)}else if(Ie){const ze=N.get(M.texture),Ye=D||0;Y.framebufferTextureLayer(36160,36064,ze.__webglTexture,k||0,Ye)}b=-1},this.readRenderTargetPixels=function(M,D,k,z,j,Ee,Ie){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=N.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ue=Ue[Ie]),Ue){pe.bindFramebuffer(36160,Ue);try{const ze=M.texture,Ye=ze.format,Ve=ze.type;if(Ye!==Rt&&Re.convert(Ye)!==Y.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=Ve===_i&&(De.has("EXT_color_buffer_half_float")||fe.isWebGL2&&De.has("EXT_color_buffer_float"));if(Ve!==Nn&&Re.convert(Ve)!==Y.getParameter(35738)&&!(Ve===Fn&&(fe.isWebGL2||De.has("OES_texture_float")||De.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y.checkFramebufferStatus(36160)===36053?D>=0&&D<=M.width-z&&k>=0&&k<=M.height-j&&Y.readPixels(D,k,z,j,Re.convert(Ye),Re.convert(Ve),Ee):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const ze=A!==null?N.get(A).__webglFramebuffer:null;pe.bindFramebuffer(36160,ze)}}},this.copyFramebufferToTexture=function(M,D,k=0){if(D.isFramebufferTexture!==!0){console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");return}const z=Math.pow(2,-k),j=Math.floor(D.image.width*z),Ee=Math.floor(D.image.height*z);$.setTexture2D(D,0),Y.copyTexSubImage2D(3553,k,0,0,M.x,M.y,j,Ee),pe.unbindTexture()},this.copyTextureToTexture=function(M,D,k,z=0){const j=D.image.width,Ee=D.image.height,Ie=Re.convert(k.format),Ue=Re.convert(k.type);$.setTexture2D(k,0),Y.pixelStorei(37440,k.flipY),Y.pixelStorei(37441,k.premultiplyAlpha),Y.pixelStorei(3317,k.unpackAlignment),D.isDataTexture?Y.texSubImage2D(3553,z,M.x,M.y,j,Ee,Ie,Ue,D.image.data):D.isCompressedTexture?Y.compressedTexSubImage2D(3553,z,M.x,M.y,D.mipmaps[0].width,D.mipmaps[0].height,Ie,D.mipmaps[0].data):Y.texSubImage2D(3553,z,M.x,M.y,Ie,Ue,D.image),z===0&&k.generateMipmaps&&Y.generateMipmap(3553),pe.unbindTexture()},this.copyTextureToTexture3D=function(M,D,k,z,j=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ee=M.max.x-M.min.x+1,Ie=M.max.y-M.min.y+1,Ue=M.max.z-M.min.z+1,ze=Re.convert(z.format),Ye=Re.convert(z.type);let Ve;if(z.isData3DTexture)$.setTexture3D(z,0),Ve=32879;else if(z.isDataArrayTexture)$.setTexture2DArray(z,0),Ve=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(37440,z.flipY),Y.pixelStorei(37441,z.premultiplyAlpha),Y.pixelStorei(3317,z.unpackAlignment);const Ge=Y.getParameter(3314),ot=Y.getParameter(32878),Ln=Y.getParameter(3316),qn=Y.getParameter(3315),jn=Y.getParameter(32877),Jt=k.isCompressedTexture?k.mipmaps[0]:k.image;Y.pixelStorei(3314,Jt.width),Y.pixelStorei(32878,Jt.height),Y.pixelStorei(3316,M.min.x),Y.pixelStorei(3315,M.min.y),Y.pixelStorei(32877,M.min.z),k.isDataTexture||k.isData3DTexture?Y.texSubImage3D(Ve,j,D.x,D.y,D.z,Ee,Ie,Ue,ze,Ye,Jt.data):k.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(Ve,j,D.x,D.y,D.z,Ee,Ie,Ue,ze,Jt.data)):Y.texSubImage3D(Ve,j,D.x,D.y,D.z,Ee,Ie,Ue,ze,Ye,Jt),Y.pixelStorei(3314,Ge),Y.pixelStorei(32878,ot),Y.pixelStorei(3316,Ln),Y.pixelStorei(3315,qn),Y.pixelStorei(32877,jn),j===0&&z.generateMipmaps&&Y.generateMipmap(Ve),pe.unbindTexture()},this.initTexture=function(M){$.setTexture2D(M,0),pe.unbindTexture()},this.resetState=function(){p=0,m=0,A=null,pe.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}$e.prototype.isWebGLRenderer=!0;class ac extends $e{}ac.prototype.isWebGL1Renderer=!0;class lr extends Qe{constructor(){super();this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}lr.prototype.isScene=!0;class os{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=$i,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Kt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}os.prototype.isInterleavedBuffer=!0;const at=new E;class Ki{constructor(e,t,n,i=!1){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)at.x=this.getX(t),at.y=this.getY(t),at.z=this.getZ(t),at.applyMatrix4(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)at.x=this.getX(t),at.y=this.getY(t),at.z=this.getZ(t),at.applyNormalMatrix(e),this.setXYZ(t,at.x,at.y,at.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)at.x=this.getX(t),at.y=this.getY(t),at.z=this.getZ(t),at.transformDirection(e),this.setXYZ(t,at.x,at.y,at.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new dt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ki(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}Ki.prototype.isInterleavedBufferAttribute=!0;class Do extends ft{constructor(e){super();this.type="SpriteMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}Do.prototype.isSpriteMaterial=!0;let li;const Oi=new E,ci=new E,hi=new E,ui=new Q,Hi=new Q,lc=new we,Cs=new E,Vi=new E,Ls=new E,al=new Q,$r=new Q,ll=new Q;class Ym extends Qe{constructor(e){super();if(this.type="Sprite",li===void 0){li=new tt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new os(t,5);li.setIndex([0,1,2,0,2,3]),li.setAttribute("position",new Ki(n,3,0,!1)),li.setAttribute("uv",new Ki(n,2,3,!1))}this.geometry=li,this.material=e!==void 0?e:new Do,this.center=new Q(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ci.setFromMatrixScale(this.matrixWorld),lc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),hi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ci.multiplyScalar(-hi.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;Ps(Cs.set(-.5,-.5,0),hi,o,ci,i,s),Ps(Vi.set(.5,-.5,0),hi,o,ci,i,s),Ps(Ls.set(.5,.5,0),hi,o,ci,i,s),al.set(0,0),$r.set(1,0),ll.set(1,1);let a=e.ray.intersectTriangle(Cs,Vi,Ls,!1,Oi);if(a===null&&(Ps(Vi.set(-.5,.5,0),hi,o,ci,i,s),$r.set(0,1),a=e.ray.intersectTriangle(Cs,Ls,Vi,!1,Oi),a===null))return;const l=e.ray.origin.distanceTo(Oi);l<e.near||l>e.far||t.push({distance:l,point:Oi.clone(),uv:ht.getUV(Oi,Cs,Vi,Ls,al,$r,ll,new Q),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}Ym.prototype.isSprite=!0;function Ps(r,e,t,n,i,s){ui.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Hi.x=s*ui.x-i*ui.y,Hi.y=i*ui.x+s*ui.y):Hi.copy(ui),r.copy(e),r.x+=Hi.x,r.y+=Hi.y,r.applyMatrix4(lc)}const cl=new E,hl=new Ze,ul=new Ze,Jm=new E,dl=new we;class cc extends Mt{constructor(e,t){super(e,t);this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new we,this.bindMatrixInverse=new we}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ze,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;hl.fromBufferAttribute(i.attributes.skinIndex,e),ul.fromBufferAttribute(i.attributes.skinWeight,e),cl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=ul.getComponent(s);if(o!==0){const a=hl.getComponent(s);dl.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Jm.copy(cl).applyMatrix4(dl),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}cc.prototype.isSkinnedMesh=!0;class Qm extends Qe{constructor(){super();this.type="Bone"}}Qm.prototype.isBone=!0;class $m extends gt{constructor(e=null,t=1,n=1,i,s,o,a,l,c=mt,h=mt,d,u){super(null,o,a,l,c,h,i,s,d,u);this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}$m.prototype.isDataTexture=!0;class mo extends dt{constructor(e,t,n,i=1){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."));super(e,t,n);this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}mo.prototype.isInstancedBufferAttribute=!0;const fl=new we,pl=new we,Is=[],Gi=new Mt;class Zm extends Mt{constructor(e,t,n){super(e,t);this.instanceMatrix=new mo(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Gi.geometry=this.geometry,Gi.material=this.material,Gi.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,fl),pl.multiplyMatrices(n,fl),Gi.matrixWorld=pl,Gi.raycast(e,Is);for(let o=0,a=Is.length;o<a;o++){const l=Is[o];l.instanceId=s,l.object=this,t.push(l)}Is.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new mo(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}Zm.prototype.isInstancedMesh=!0;class Pi extends ft{constructor(e){super();this.type="LineBasicMaterial",this.color=new ge(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this}}Pi.prototype.isLineBasicMaterial=!0;const ml=new E,gl=new E,vl=new we,Zr=new Gn,Ds=new Ci;class Bo extends Qe{constructor(e=new tt,t=new Pi){super();this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)ml.fromBufferAttribute(t,i-1),gl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ml.distanceTo(gl);e.setAttribute("lineDistance",new lt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(i),Ds.radius+=s,e.ray.intersectsSphere(Ds)===!1)return;vl.copy(i).invert(),Zr.copy(e.ray).applyMatrix4(vl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new E,h=new E,d=new E,u=new E,f=this.isLineSegments?2:1;if(n.isBufferGeometry){const g=n.index,x=n.attributes.position;if(g!==null){const p=Math.max(0,o.start),m=Math.min(g.count,o.start+o.count);for(let A=p,b=m-1;A<b;A+=f){const w=g.getX(A),L=g.getX(A+1);if(c.fromBufferAttribute(x,w),h.fromBufferAttribute(x,L),Zr.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const W=e.ray.origin.distanceTo(u);W<e.near||W>e.far||t.push({distance:W,point:d.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),m=Math.min(x.count,o.start+o.count);for(let A=p,b=m-1;A<b;A+=f){if(c.fromBufferAttribute(x,A),h.fromBufferAttribute(x,A+1),Zr.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(u);L<e.near||L>e.far||t.push({distance:L,point:d.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Bo.prototype.isLine=!0;const xl=new E,_l=new E;class zo extends Bo{constructor(e,t){super(e,t);this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)xl.fromBufferAttribute(t,i),_l.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+xl.distanceTo(_l);e.setAttribute("lineDistance",new lt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}zo.prototype.isLineSegments=!0;class Km extends Bo{constructor(e,t){super(e,t);this.type="LineLoop"}}Km.prototype.isLineLoop=!0;class Fo extends ft{constructor(e){super();this.type="PointsMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this}}Fo.prototype.isPointsMaterial=!0;const yl=new we,go=new Gn,Bs=new Ci,zs=new E;class eg extends Qe{constructor(e=new tt,t=new Fo){super();this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bs.copy(n.boundingSphere),Bs.applyMatrix4(i),Bs.radius+=s,e.ray.intersectsSphere(Bs)===!1)return;yl.copy(i).invert(),go.copy(e.ray).applyMatrix4(yl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a;if(n.isBufferGeometry){const c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=u,v=f;g<v;g++){const x=c.getX(g);zs.fromBufferAttribute(d,x),wl(zs,x,l,i,e,t,this)}}else{const u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,v=f;g<v;g++)zs.fromBufferAttribute(d,g),wl(zs,g,l,i,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}eg.prototype.isPoints=!0;function wl(r,e,t,n,i,s,o){const a=go.distanceSqToPoint(r);if(a<t){const l=new E;go.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class tg extends gt{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c);this.minFilter=o!==void 0?o:wt,this.magFilter=s!==void 0?s:wt,this.generateMipmaps=!1;const h=this;function d(){h.needsUpdate=!0,e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(d)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}tg.prototype.isVideoTexture=!0;class ng extends gt{constructor(e,t,n){super({width:e,height:t});this.format=n,this.magFilter=mt,this.minFilter=mt,this.generateMipmaps=!1,this.needsUpdate=!0}}ng.prototype.isFramebufferTexture=!0;class ig extends gt{constructor(e,t,n,i,s,o,a,l,c,h,d,u){super(null,o,a,l,c,h,i,s,d,u);this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}ig.prototype.isCompressedTexture=!0;class sg extends gt{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c);this.needsUpdate=!0}}sg.prototype.isCanvasTexture=!0;new E;new E;new E;new ht;class Nt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const h=n[i],u=n[i+1]-h,f=(o-h)/u;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new Q:new E);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new E,i=[],s=[],o=[],a=new E,l=new we;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new E)}s[0]=new E,o[0]=new E;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Dt(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(Dt(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class cr extends Nt{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super();this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new Q,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}cr.prototype.isEllipseCurve=!0;class hc extends cr{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o);this.type="ArcCurve"}}hc.prototype.isArcCurve=!0;function Uo(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,d){let u=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,i(o,a,u,f)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const Fs=new E,Kr=new Uo,eo=new Uo,to=new Uo;class uc extends Nt{constructor(e=[],t=!1,n="centripetal",i=.5){super();this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new E){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(Fs.subVectors(i[0],i[1]).add(i[0]),c=Fs);const d=i[a%s],u=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Fs.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Fs),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),x<1e-4&&(x=v),Kr.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,v,x),eo.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,v,x),to.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,v,x)}else this.curveType==="catmullrom"&&(Kr.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),eo.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),to.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Kr.calc(l),eo.calc(l),to.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new E().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}uc.prototype.isCatmullRomCurve3=!0;function bl(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function rg(r,e){const t=1-r;return t*t*e}function og(r,e){return 2*(1-r)*r*e}function ag(r,e){return r*r*e}function Xi(r,e,t,n){return rg(r,e)+og(r,t)+ag(r,n)}function lg(r,e){const t=1-r;return t*t*t*e}function cg(r,e){const t=1-r;return 3*t*t*r*e}function hg(r,e){return 3*(1-r)*r*r*e}function ug(r,e){return r*r*r*e}function Yi(r,e,t,n,i){return lg(r,e)+cg(r,t)+hg(r,n)+ug(r,i)}class No extends Nt{constructor(e=new Q,t=new Q,n=new Q,i=new Q){super();this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Q){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Yi(e,i.x,s.x,o.x,a.x),Yi(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}No.prototype.isCubicBezierCurve=!0;class dc extends Nt{constructor(e=new E,t=new E,n=new E,i=new E){super();this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new E){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Yi(e,i.x,s.x,o.x,a.x),Yi(e,i.y,s.y,o.y,a.y),Yi(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}dc.prototype.isCubicBezierCurve3=!0;class hr extends Nt{constructor(e=new Q,t=new Q){super();this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Q){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new Q;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}hr.prototype.isLineCurve=!0;class dg extends Nt{constructor(e=new E,t=new E){super();this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new E){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ko extends Nt{constructor(e=new Q,t=new Q,n=new Q){super();this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Q){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Xi(e,i.x,s.x,o.x),Xi(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}ko.prototype.isQuadraticBezierCurve=!0;class fc extends Nt{constructor(e=new E,t=new E,n=new E){super();this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new E){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Xi(e,i.x,s.x,o.x),Xi(e,i.y,s.y,o.y),Xi(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}fc.prototype.isQuadraticBezierCurve3=!0;class Oo extends Nt{constructor(e=[]){super();this.type="SplineCurve",this.points=e}getPoint(e,t=new Q){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(bl(a,l.x,c.x,h.x,d.x),bl(a,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Q().fromArray(i))}return this}}Oo.prototype.isSplineCurve=!0;var pc=Object.freeze({__proto__:null,ArcCurve:hc,CatmullRomCurve3:uc,CubicBezierCurve:No,CubicBezierCurve3:dc,EllipseCurve:cr,LineCurve:hr,LineCurve3:dg,QuadraticBezierCurve:ko,QuadraticBezierCurve3:fc,SplineCurve:Oo});class fg extends Nt{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new hr(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new pc[i.type]().fromJSON(i))}return this}}class vo extends fg{constructor(e){super();this.type="Path",this.currentPoint=new Q,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new hr(this.currentPoint.clone(),new Q(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new ko(this.currentPoint.clone(),new Q(e,t),new Q(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new No(this.currentPoint.clone(),new Q(e,t),new Q(n,i),new Q(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Oo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){const c=new cr(e,t,n,i,s,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class as extends vo{constructor(e){super(e);this.uuid=Kt(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new vo().fromJSON(i))}return this}}const pg={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=mc(r,0,i,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,d,u,f;if(n&&(s=_g(r,e,s,t)),r.length>80*t){a=c=r[0],l=h=r[1];for(let g=t;g<i;g+=t)d=r[g],u=r[g+1],d<a&&(a=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);f=Math.max(c-a,h-l),f=f!==0?1/f:0}return es(s,o,t,a,l,f),o}};function mc(r,e,t,n,i){let s,o;if(i===Lg(r,e,t,n)>0)for(s=e;s<t;s+=n)o=Ml(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=Ml(s,r[s],r[s+1],o);return o&&ur(o,o.next)&&(ns(o),o=o.next),o}function Tn(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(ur(t,t.next)||rt(t.prev,t,t.next)===0)){if(ns(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function es(r,e,t,n,i,s,o){if(!r)return;!o&&s&&Sg(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?gg(r,n,i,s):mg(r)){e.push(l.i/t),e.push(r.i/t),e.push(c.i/t),ns(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=vg(Tn(r),e,t),es(r,e,t,n,i,s,2)):o===2&&xg(r,e,t,n,i,s):es(Tn(r),e,t,n,i,s,1);break}}}function mg(r){const e=r.prev,t=r,n=r.next;if(rt(e,t,n)>=0)return!1;let i=r.next.next;for(;i!==r.prev;){if(vi(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&rt(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function gg(r,e,t,n){const i=r.prev,s=r,o=r.next;if(rt(i,s,o)>=0)return!1;const a=i.x<s.x?i.x<o.x?i.x:o.x:s.x<o.x?s.x:o.x,l=i.y<s.y?i.y<o.y?i.y:o.y:s.y<o.y?s.y:o.y,c=i.x>s.x?i.x>o.x?i.x:o.x:s.x>o.x?s.x:o.x,h=i.y>s.y?i.y>o.y?i.y:o.y:s.y>o.y?s.y:o.y,d=xo(a,l,e,t,n),u=xo(c,h,e,t,n);let f=r.prevZ,g=r.nextZ;for(;f&&f.z>=d&&g&&g.z<=u;){if(f!==r.prev&&f!==r.next&&vi(i.x,i.y,s.x,s.y,o.x,o.y,f.x,f.y)&&rt(f.prev,f,f.next)>=0||(f=f.prevZ,g!==r.prev&&g!==r.next&&vi(i.x,i.y,s.x,s.y,o.x,o.y,g.x,g.y)&&rt(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;f&&f.z>=d;){if(f!==r.prev&&f!==r.next&&vi(i.x,i.y,s.x,s.y,o.x,o.y,f.x,f.y)&&rt(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;g&&g.z<=u;){if(g!==r.prev&&g!==r.next&&vi(i.x,i.y,s.x,s.y,o.x,o.y,g.x,g.y)&&rt(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function vg(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!ur(i,s)&&gc(i,n,n.next,s)&&ts(i,s)&&ts(s,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(s.i/t),ns(n),ns(n.next),n=r=s),n=n.next}while(n!==r);return Tn(n)}function xg(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Tg(o,a)){let l=vc(o,a);o=Tn(o,o.next),l=Tn(l,l.next),es(o,e,t,n,i,s),es(l,e,t,n,i,s);return}a=a.next}o=o.next}while(o!==r)}function _g(r,e,t,n){const i=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=mc(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Eg(c));for(i.sort(yg),s=0;s<i.length;s++)wg(i[s],t),t=Tn(t,t.next);return t}function yg(r,e){return r.x-e.x}function wg(r,e){if(e=bg(r,e),e){const t=vc(e,r);Tn(e,e.next),Tn(t,t.next)}}function bg(r,e){let t=e;const n=r.x,i=r.y;let s=-1/0,o;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>s){if(s=u,u===n){if(i===t.y)return t;if(i===t.next.y)return t.next}o=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!o)return null;if(n===s)return o;const a=o,l=o.x,c=o.y;let h=1/0,d;t=o;do n>=t.x&&t.x>=l&&n!==t.x&&vi(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)&&(d=Math.abs(i-t.y)/(n-t.x),ts(t,r)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&Mg(o,t)))&&(o=t,h=d)),t=t.next;while(t!==a);return o}function Mg(r,e){return rt(r.prev,r,e.prev)<0&&rt(e.next,r,r.next)<0}function Sg(r,e,t,n){let i=r;do i.z===null&&(i.z=xo(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Ag(i)}function Ag(r){let e,t,n,i,s,o,a,l,c=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(o>1);return r}function xo(r,e,t,n,i){return r=32767*(r-t)*i,e=32767*(e-n)*i,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function Eg(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function vi(r,e,t,n,i,s,o,a){return(i-o)*(e-a)-(r-o)*(s-a)>=0&&(r-o)*(n-a)-(t-o)*(e-a)>=0&&(t-o)*(s-a)-(i-o)*(n-a)>=0}function Tg(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!Rg(r,e)&&(ts(r,e)&&ts(e,r)&&Cg(r,e)&&(rt(r.prev,r,e.prev)||rt(r,e.prev,e))||ur(r,e)&&rt(r.prev,r,r.next)>0&&rt(e.prev,e,e.next)>0)}function rt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function ur(r,e){return r.x===e.x&&r.y===e.y}function gc(r,e,t,n){const i=Ns(rt(r,e,t)),s=Ns(rt(r,e,n)),o=Ns(rt(t,n,r)),a=Ns(rt(t,n,e));return!!(i!==s&&o!==a||i===0&&Us(r,t,e)||s===0&&Us(r,n,e)||o===0&&Us(t,r,n)||a===0&&Us(t,e,n))}function Us(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Ns(r){return r>0?1:r<0?-1:0}function Rg(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&gc(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function ts(r,e){return rt(r.prev,r,r.next)<0?rt(r,e,r.next)>=0&&rt(r,r.prev,e)>=0:rt(r,e,r.prev)<0||rt(r,r.next,e)<0}function Cg(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function vc(r,e){const t=new _o(r.i,r.x,r.y),n=new _o(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Ml(r,e,t,n){const i=new _o(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ns(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function _o(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Lg(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class An{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return An.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];Sl(e),Al(n,e);let o=e.length;t.forEach(Sl);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Al(n,t[l]);const a=pg.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Sl(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Al(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Ii extends tt{constructor(e=new as([new Q(.5,.5),new Q(-.5,.5),new Q(-.5,-.5),new Q(.5,-.5)]),t={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new lt(i,3)),this.setAttribute("uv",new lt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1;let d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,m=t.UVGenerator!==void 0?t.UVGenerator:Pg;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),d=t.amount);let A,b=!1,w,L,P,W;p&&(A=p.getSpacedPoints(h),b=!0,u=!1,w=p.computeFrenetFrames(h,!1),L=new E,P=new E,W=new E),u||(x=0,f=0,g=0,v=0);const ne=a.extractPoints(c);let O=ne.shape;const _=ne.holes;if(!An.isClockWise(O)){O=O.reverse();for(let N=0,$=_.length;N<$;N++){const ie=_[N];An.isClockWise(ie)&&(_[N]=ie.reverse())}}const I=An.triangulateShape(O,_),F=O;for(let N=0,$=_.length;N<$;N++){const ie=_[N];O=O.concat(ie)}function H(N,$,ie){return $||console.error("THREE.ExtrudeGeometry: vec does not exist"),$.clone().multiplyScalar(ie).add(N)}const U=O.length,V=I.length;function B(N,$,ie){let de,ae,Ae;const ve=N.x-$.x,Be=N.y-$.y,nt=ie.x-N.x,S=ie.y-N.y,y=ve*ve+Be*Be,G=ve*S-Be*nt;if(Math.abs(G)>Number.EPSILON){const J=Math.sqrt(y),se=Math.sqrt(nt*nt+S*S),he=$.x-Be/J,be=$.y+ve/J,q=ie.x-S/se,Re=ie.y+nt/se,Ce=((q-he)*S-(Re-be)*nt)/(ve*S-Be*nt);de=he+ve*Ce-N.x,ae=be+Be*Ce-N.y;const xe=de*de+ae*ae;if(xe<=2)return new Q(de,ae);Ae=Math.sqrt(xe/2)}else{let J=!1;ve>Number.EPSILON?nt>Number.EPSILON&&(J=!0):ve<-Number.EPSILON?nt<-Number.EPSILON&&(J=!0):Math.sign(Be)===Math.sign(S)&&(J=!0),J?(de=-Be,ae=ve,Ae=Math.sqrt(y)):(de=ve,ae=Be,Ae=Math.sqrt(y/2))}return new Q(de/Ae,ae/Ae)}const X=[];for(let N=0,$=F.length,ie=$-1,de=N+1;N<$;N++,ie++,de++)ie===$&&(ie=0),de===$&&(de=0),X[N]=B(F[N],F[ie],F[de]);const K=[];let Z,ee=X.concat();for(let N=0,$=_.length;N<$;N++){const ie=_[N];Z=[];for(let de=0,ae=ie.length,Ae=ae-1,ve=de+1;de<ae;de++,Ae++,ve++)Ae===ae&&(Ae=0),ve===ae&&(ve=0),Z[de]=B(ie[de],ie[Ae],ie[ve]);K.push(Z),ee=ee.concat(Z)}for(let N=0;N<x;N++){const $=N/x,ie=f*Math.cos($*Math.PI/2),de=g*Math.sin($*Math.PI/2)+v;for(let ae=0,Ae=F.length;ae<Ae;ae++){const ve=H(F[ae],X[ae],de);qe(ve.x,ve.y,-ie)}for(let ae=0,Ae=_.length;ae<Ae;ae++){const ve=_[ae];Z=K[ae];for(let Be=0,nt=ve.length;Be<nt;Be++){const S=H(ve[Be],Z[Be],de);qe(S.x,S.y,-ie)}}}const _e=g+v;for(let N=0;N<U;N++){const $=u?H(O[N],ee[N],_e):O[N];b?(P.copy(w.normals[0]).multiplyScalar($.x),L.copy(w.binormals[0]).multiplyScalar($.y),W.copy(A[0]).add(P).add(L),qe(W.x,W.y,W.z)):qe($.x,$.y,0)}for(let N=1;N<=h;N++)for(let $=0;$<U;$++){const ie=u?H(O[$],ee[$],_e):O[$];b?(P.copy(w.normals[N]).multiplyScalar(ie.x),L.copy(w.binormals[N]).multiplyScalar(ie.y),W.copy(A[N]).add(P).add(L),qe(W.x,W.y,W.z)):qe(ie.x,ie.y,d/h*N)}for(let N=x-1;N>=0;N--){const $=N/x,ie=f*Math.cos($*Math.PI/2),de=g*Math.sin($*Math.PI/2)+v;for(let ae=0,Ae=F.length;ae<Ae;ae++){const ve=H(F[ae],X[ae],de);qe(ve.x,ve.y,d+ie)}for(let ae=0,Ae=_.length;ae<Ae;ae++){const ve=_[ae];Z=K[ae];for(let Be=0,nt=ve.length;Be<nt;Be++){const S=H(ve[Be],Z[Be],de);b?qe(S.x,S.y+A[h-1].y,A[h-1].x+ie):qe(S.x,S.y,d+ie)}}}We(),Se();function We(){const N=i.length/3;if(u){let $=0,ie=U*$;for(let de=0;de<V;de++){const ae=I[de];De(ae[2]+ie,ae[1]+ie,ae[0]+ie)}$=h+x*2,ie=U*$;for(let de=0;de<V;de++){const ae=I[de];De(ae[0]+ie,ae[1]+ie,ae[2]+ie)}}else{for(let $=0;$<V;$++){const ie=I[$];De(ie[2],ie[1],ie[0])}for(let $=0;$<V;$++){const ie=I[$];De(ie[0]+U*h,ie[1]+U*h,ie[2]+U*h)}}n.addGroup(N,i.length/3-N,0)}function Se(){const N=i.length/3;let $=0;Y(F,$),$+=F.length;for(let ie=0,de=_.length;ie<de;ie++){const ae=_[ie];Y(ae,$),$+=ae.length}n.addGroup(N,i.length/3-N,1)}function Y(N,$){let ie=N.length;for(;--ie>=0;){const de=ie;let ae=ie-1;ae<0&&(ae=N.length-1);for(let Ae=0,ve=h+x*2;Ae<ve;Ae++){const Be=U*Ae,nt=U*(Ae+1),S=$+de+Be,y=$+ae+Be,G=$+ae+nt,J=$+de+nt;fe(S,y,G,J)}}}function qe(N,$,ie){l.push(N),l.push($),l.push(ie)}function De(N,$,ie){pe(N),pe($),pe(ie);const de=i.length/3,ae=m.generateTopUV(n,i,de-3,de-2,de-1);Oe(ae[0]),Oe(ae[1]),Oe(ae[2])}function fe(N,$,ie,de){pe(N),pe($),pe(de),pe($),pe(ie),pe(de);const ae=i.length/3,Ae=m.generateSideWallUV(n,i,ae-6,ae-3,ae-2,ae-1);Oe(Ae[0]),Oe(Ae[1]),Oe(Ae[3]),Oe(Ae[1]),Oe(Ae[2]),Oe(Ae[3])}function pe(N){i.push(l[N*3+0]),i.push(l[N*3+1]),i.push(l[N*3+2])}function Oe(N){s.push(N.x),s.push(N.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Ig(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new pc[i.type]().fromJSON(i)),new Ii(n,e.options)}}const Pg={generateTopUV:function(r,e,t,n,i){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new Q(s,o),new Q(a,l),new Q(c,h)]},generateSideWallUV:function(r,e,t,n,i,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[i*3],f=e[i*3+1],g=e[i*3+2],v=e[s*3],x=e[s*3+1],p=e[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Q(o,1-l),new Q(c,1-d),new Q(u,1-g),new Q(v,1-p)]:[new Q(a,1-l),new Q(h,1-d),new Q(f,1-g),new Q(x,1-p)]}};function Ig(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ho extends tt{constructor(e=new as([new Q(0,.5),new Q(-.5,-.5),new Q(.5,-.5)]),t=12){super();this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new lt(i,3)),this.setAttribute("normal",new lt(s,3)),this.setAttribute("uv",new lt(o,2));function c(h){const d=i.length/3,u=h.extractPoints(t);let f=u.shape;const g=u.holes;An.isClockWise(f)===!1&&(f=f.reverse());for(let x=0,p=g.length;x<p;x++){const m=g[x];An.isClockWise(m)===!0&&(g[x]=m.reverse())}const v=An.triangulateShape(f,g);for(let x=0,p=g.length;x<p;x++){const m=g[x];f=f.concat(m)}for(let x=0,p=f.length;x<p;x++){const m=f[x];i.push(m.x,m.y,0),s.push(0,0,1),o.push(m.x,m.y)}for(let x=0,p=v.length;x<p;x++){const m=v[x],A=m[0]+d,b=m[1]+d,w=m[2]+d;n.push(A,b,w),l+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Dg(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const o=t[e.shapes[i]];n.push(o)}return new Ho(n,e.curveSegments)}}function Dg(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class Vo extends tt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new E,u=new E,f=[],g=[],v=[],x=[];for(let p=0;p<=n;p++){const m=[],A=p/n;let b=0;p==0&&o==0?b=.5/t:p==n&&l==Math.PI&&(b=-.5/t);for(let w=0;w<=t;w++){const L=w/t;d.x=-e*Math.cos(i+L*s)*Math.sin(o+A*a),d.y=e*Math.cos(o+A*a),d.z=e*Math.sin(i+L*s)*Math.sin(o+A*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),x.push(L+b,1-A),m.push(c++)}h.push(m)}for(let p=0;p<n;p++)for(let m=0;m<t;m++){const A=h[p][m+1],b=h[p][m],w=h[p+1][m],L=h[p+1][m+1];(p!==0||o>0)&&f.push(A,b,L),(p!==n-1||l<Math.PI)&&f.push(b,w,L)}this.setIndex(f),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(v,3)),this.setAttribute("uv",new lt(x,2))}static fromJSON(e){return new Vo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class xc extends ft{constructor(e){super();this.type="ShadowMaterial",this.color=new ge(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}xc.prototype.isShadowMaterial=!0;class dr extends qt{constructor(e){super(e);this.type="RawShaderMaterial"}}dr.prototype.isRawShaderMaterial=!0;class Go extends ft{constructor(e){super();this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ri,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}Go.prototype.isMeshStandardMaterial=!0;class _c extends Go{constructor(e){super();this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Q(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.sheenColor=new ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ge(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}_c.prototype.isMeshPhysicalMaterial=!0;class yc extends ft{constructor(e){super();this.type="MeshPhongMaterial",this.color=new ge(16777215),this.specular=new ge(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ri,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ks,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}yc.prototype.isMeshPhongMaterial=!0;class wc extends ft{constructor(e){super();this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ge(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ri,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}wc.prototype.isMeshToonMaterial=!0;class bc extends ft{constructor(e){super();this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ri,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}bc.prototype.isMeshNormalMaterial=!0;class Mc extends ft{constructor(e){super();this.type="MeshLambertMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ks,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Mc.prototype.isMeshLambertMaterial=!0;class Sc extends ft{constructor(e){super();this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ge(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ri,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this}}Sc.prototype.isMeshMatcapMaterial=!0;class Ac extends Pi{constructor(e){super();this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}Ac.prototype.isLineDashedMaterial=!0;const Bg={ShadowMaterial:xc,SpriteMaterial:Do,RawShaderMaterial:dr,ShaderMaterial:qt,PointsMaterial:Fo,MeshPhysicalMaterial:_c,MeshStandardMaterial:Go,MeshPhongMaterial:yc,MeshToonMaterial:wc,MeshNormalMaterial:bc,MeshLambertMaterial:Mc,MeshDepthMaterial:Po,MeshDistanceMaterial:Io,MeshBasicMaterial:ir,MeshMatcapMaterial:Sc,LineDashedMaterial:Ac,LineBasicMaterial:Pi,Material:ft};ft.fromType=function(r){return new Bg[r]};const st={arraySlice:function(r,e,t){return st.isTypedArray(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)},convertArray:function(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)},isTypedArray:function(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)},getKeyframeOrder:function(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n},sortedArray:function(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i},flattenJSON:function(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)},subclip:function(r,e,t,n,i=30){const s=r.clone();s.name=e;const o=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],h=c.getValueSize(),d=[],u=[];for(let f=0;f<c.times.length;++f){const g=c.times[f]*i;if(!(g<t||g>=n)){d.push(c.times[f]);for(let v=0;v<h;++v)u.push(c.values[f*h+v])}}d.length!==0&&(c.times=st.convertArray(d,c.times.constructor),c.values=st.convertArray(u,c.values.constructor),o.push(c))}s.tracks=o;let a=1/0;for(let l=0;l<s.tracks.length;++l)a>s.tracks[l].times[0]&&(a=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let o=0;o<i;++o){const a=t.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=r.tracks.find(function(p){return p.name===a.name&&p.ValueTypeName===l});if(c===void 0)continue;let h=0;const d=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=d/3);let u=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=f/3);const g=a.times.length-1;let v;if(s<=a.times[0]){const p=h,m=d-h;v=st.arraySlice(a.values,p,m)}else if(s>=a.times[g]){const p=g*d+h,m=p+d-h;v=st.arraySlice(a.values,p,m)}else{const p=a.createInterpolant(),m=h,A=d-h;p.evaluate(s),v=st.arraySlice(p.resultBuffer,m,A)}l==="quaternion"&&new Ct().fromArray(v).normalize().conjugate().toArray(v);const x=c.times.length;for(let p=0;p<x;++p){const m=p*f+u;if(l==="quaternion")Ct.multiplyQuaternionsFlat(c.values,m,v,0,c.values,m);else{const A=f-u*2;for(let b=0;b<A;++b)c.values[m+b]-=v[b]}}}return r.blendMode=Gl,r}};class Rn{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,s)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,s,e)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}Rn.prototype.beforeStart_=Rn.prototype.copySampleValue_;Rn.prototype.afterEnd_=Rn.prototype.copySampleValue_;class zg extends Rn{constructor(e,t,n,i){super(e,t,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fi,endingEnd:fi}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case pi:s=e,a=2*t-n;break;case js:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case pi:o=e,l=2*n-t;break;case js:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),v=g*g,x=v*g,p=-u*x+2*u*v-u*g,m=(1+u)*x+(-1.5-2*u)*v+(-.5+u)*g+1,A=(-1-f)*x+(1.5+f)*v+.5*g,b=f*x-f*v;for(let w=0;w!==a;++w)s[w]=p*o[h+w]+m*o[c+w]+A*o[l+w]+b*o[d+w];return s}}class Ec extends Rn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==a;++u)s[u]=o[c+u]*d+o[l+u]*h;return s}}class Fg extends Rn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class nn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=st.convertArray(t,this.TimeBufferType),this.values=st.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:st.convertArray(e.times,Array),values:st.convertArray(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Fg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ec(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new zg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ws:t=this.InterpolantFactoryMethodDiscrete;break;case qs:t=this.InterpolantFactoryMethodLinear;break;case wr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ws;case this.InterpolantFactoryMethodLinear:return qs;case this.InterpolantFactoryMethodSmooth:return wr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=st.arraySlice(n,s,o),this.values=st.arraySlice(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&st.isTypedArray(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=st.arraySlice(this.times),t=st.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===wr,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const d=a*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){const v=t[d+g];if(v!==t[u+g]||v!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*n,u=o*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=st.arraySlice(e,0,o),this.values=st.arraySlice(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=st.arraySlice(this.times,0),t=st.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}nn.prototype.TimeBufferType=Float32Array;nn.prototype.ValueBufferType=Float32Array;nn.prototype.DefaultInterpolation=qs;class Di extends nn{}Di.prototype.ValueTypeName="bool";Di.prototype.ValueBufferType=Array;Di.prototype.DefaultInterpolation=Ws;Di.prototype.InterpolantFactoryMethodLinear=void 0;Di.prototype.InterpolantFactoryMethodSmooth=void 0;class Tc extends nn{}Tc.prototype.ValueTypeName="color";class Ys extends nn{}Ys.prototype.ValueTypeName="number";class Ug extends Rn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)Ct.slerpFlat(s,0,o,c-a,o,c,l);return s}}class ls extends nn{InterpolantFactoryMethodLinear(e){return new Ug(this.times,this.values,this.getValueSize(),e)}}ls.prototype.ValueTypeName="quaternion";ls.prototype.DefaultInterpolation=qs;ls.prototype.InterpolantFactoryMethodSmooth=void 0;class Bi extends nn{}Bi.prototype.ValueTypeName="string";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=Ws;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;class Js extends nn{}Js.prototype.ValueTypeName="vector";class El{constructor(e,t=-1,n,i=So){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Kt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(kg(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(nn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=st.getKeyframeOrder(l);l=st.sortedArray(l,1,h),c=st.sortedArray(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Ys(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(s);if(h&&h.length>1){const d=h[1];let u=i[d];u||(i[d]=u=[]),u.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,u,f,g,v){if(f.length!==0){const x=[],p=[];st.flattenJSON(f,x,p,g),x.length!==0&&v.push(new d(u,x,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const u=c[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let v=0;v<u[g].morphTargets.length;v++)f[u[g].morphTargets[v]]=-1;for(const v in f){const x=[],p=[];for(let m=0;m!==u[g].morphTargets.length;++m){const A=u[g];x.push(A.time),p.push(A.morphTarget===v?1:0)}i.push(new Ys(".morphTargetInfluence["+v+"]",x,p))}l=f.length*o}else{const f=".bones["+t[d].name+"]";n(Js,f+".position",u,"pos",i),n(ls,f+".quaternion",u,"rot",i),n(Js,f+".scale",u,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Ng(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ys;case"vector":case"vector2":case"vector3":case"vector4":return Js;case"color":return Tc;case"quaternion":return ls;case"bool":case"boolean":return Di;case"string":return Bi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function kg(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Ng(r.type);if(r.times===void 0){const t=[],n=[];st.flattenJSON(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Ti={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Og{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const Hg=new Og;class Cn{constructor(e){this.manager=e!==void 0?e:Hg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const cn={};class Vg extends Cn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ti.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(cn[e]!==void 0){cn[e].push({onLoad:t,onProgress:n,onError:i});return}cn[e]=[],cn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;const h=cn[e],d=c.body.getReader(),u=c.headers.get("Content-Length"),f=u?parseInt(u):0,g=f!==0;let v=0;const x=new ReadableStream({start(p){m();function m(){d.read().then(({done:A,value:b})=>{if(A)p.close();else{v+=b.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let L=0,P=h.length;L<P;L++){const W=h[L];W.onProgress&&W.onProgress(w)}p.enqueue(b),m()}})}}});return new Response(x)}else throw Error(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Ti.add(e,c);const h=cn[e];delete cn[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=cn[e];if(h===void 0)throw this.manager.itemError(e),c;delete cn[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Rc extends Cn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ti.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Zi("img");function l(){h(),Ti.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){h(),i&&i(d),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Gg extends Cn{constructor(e){super(e)}load(e,t,n,i){const s=new sr,o=new Rc(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(h){s.images[c]=h,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return s}}class Cc extends Cn{constructor(e){super(e)}load(e,t,n,i){const s=new gt,o=new Rc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class en extends Qe{constructor(e,t=1){super();this.type="Light",this.color=new ge(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}en.prototype.isLight=!0;class Wg extends en{constructor(e,t,n){super(e,n);this.type="HemisphereLight",this.position.copy(Qe.DefaultUp),this.updateMatrix(),this.groundColor=new ge(t)}copy(e){return en.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}Wg.prototype.isHemisphereLight=!0;const Tl=new we,Rl=new E,Cl=new E;class Wo{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rr,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Rl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rl),Cl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cl),t.updateMatrixWorld(),Tl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Lc extends Wo{constructor(){super(new bt(50,1,.5,500));this.focus=1}updateMatrices(e){const t=this.camera,n=uo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}Lc.prototype.isSpotLightShadow=!0;class qg extends en{constructor(e,t,n=0,i=Math.PI/3,s=0,o=1){super(e,t);this.type="SpotLight",this.position.copy(Qe.DefaultUp),this.updateMatrix(),this.target=new Qe,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.shadow=new Lc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}qg.prototype.isSpotLight=!0;const Ll=new we,Wi=new E,no=new E;class Pc extends Wo{constructor(){super(new bt(90,1,.5,500));this._frameExtents=new Q(4,2),this._viewportCount=6,this._viewports=[new Ze(2,1,1,1),new Ze(0,1,1,1),new Ze(3,1,1,1),new Ze(1,1,1,1),new Ze(3,0,1,1),new Ze(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Wi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Wi),no.copy(n.position),no.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(no),n.updateMatrixWorld(),i.makeTranslation(-Wi.x,-Wi.y,-Wi.z),Ll.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ll)}}Pc.prototype.isPointLightShadow=!0;class jg extends en{constructor(e,t,n=0,i=1){super(e,t);this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Pc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}jg.prototype.isPointLight=!0;class Ic extends Wo{constructor(){super(new Co(-5,5,5,-5,.5,500))}}Ic.prototype.isDirectionalLightShadow=!0;class Xg extends en{constructor(e,t){super(e,t);this.type="DirectionalLight",this.position.copy(Qe.DefaultUp),this.updateMatrix(),this.target=new Qe,this.shadow=new Ic}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}Xg.prototype.isDirectionalLight=!0;class Yg extends en{constructor(e,t){super(e,t);this.type="AmbientLight"}}Yg.prototype.isAmbientLight=!0;class Jg extends en{constructor(e,t,n=10,i=10){super(e,t);this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}Jg.prototype.isRectAreaLight=!0;class Dc{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new E)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*i),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*i)),t.addScaledVector(o[5],1.092548*(i*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(n*s)),t.addScaledVector(o[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*i),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*i),t.addScaledVector(o[5],2*.429043*i*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*n*s),t.addScaledVector(o[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}Dc.prototype.isSphericalHarmonics3=!0;class qo extends en{constructor(e=new Dc,t=1){super(void 0,t);this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}qo.prototype.isLightProbe=!0;class Qg{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class $g extends tt{constructor(){super();this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}$g.prototype.isInstancedBufferGeometry=!0;class Zg extends Cn{constructor(e){super(e);typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ti.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){Ti.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}Zg.prototype.isImageBitmapLoader=!0;let ks;const Kg={getContext:function(){return ks===void 0&&(ks=new(window.AudioContext||window.webkitAudioContext)),ks},setContext:function(r){ks=r}};class ev extends Cn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Vg(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{const l=a.slice(0);Kg.getContext().decodeAudioData(l,function(h){t(h)})}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}}class tv extends qo{constructor(e,t,n=1){super(void 0,n);const i=new ge().set(e),s=new ge().set(t),o=new E(i.r,i.g,i.b),a=new E(s.r,s.g,s.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(o).add(a).multiplyScalar(l),this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(c)}}tv.prototype.isHemisphereLightProbe=!0;class nv extends qo{constructor(e,t=1){super(void 0,t);const n=new ge().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}nv.prototype.isAmbientLightProbe=!0;class Bc{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Pl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Pl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Pl(){return(typeof performance=="undefined"?Date:performance).now()}class iv extends Qe{constructor(e){super();this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}class sv{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Ct.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const o=this._workIndex*s;Ct.multiplyQuaternionsFlat(e,o,e,t,e,n),Ct.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const jo="\\[\\]\\.:\\/",rv=new RegExp("["+jo+"]","g"),Xo="[^"+jo+"]",ov="[^"+jo.replace("\\.","")+"]",av=/((?:WC+[\/:])*)/.source.replace("WC",Xo),lv=/(WCOD+)?/.source.replace("WCOD",ov),cv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xo),hv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xo),uv=new RegExp("^"+av+lv+cv+hv+"$"),dv=["material","materials","bones"];class fv{constructor(e,t,n){const i=n||Je.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Je{constructor(e,t,n){this.path=t,this.parsedPath=n||Je.parseTrackName(t),this.node=Je.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Je.Composite(e,t,n):new Je(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(rv,"")}static parseTrackName(e){const t=uv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);dv.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Je.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Je.Composite=fv;Je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Je.prototype.GetterByBindingType=[Je.prototype._getValue_direct,Je.prototype._getValue_array,Je.prototype._getValue_arrayElement,Je.prototype._getValue_toArray];Je.prototype.SetterByBindingTypeAndVersioning=[[Je.prototype._setValue_direct,Je.prototype._setValue_direct_setNeedsUpdate,Je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_array,Je.prototype._setValue_array_setNeedsUpdate,Je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_arrayElement,Je.prototype._setValue_arrayElement_setNeedsUpdate,Je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_fromArray,Je.prototype._setValue_fromArray_setNeedsUpdate,Je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class pv{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,o=s.length,a=new Array(o),l={endingStart:fi,endingEnd:fi};for(let c=0;c!==o;++c){const h=s[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Kh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;if(l<0||n===0)return;this._startTime=null,t=n*l}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Gl:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case So:default:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;n!==null&&(t*=n.evaluate(e)[0],e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const o=n===eu;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===Zh){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=pi,i.endingEnd=pi):(e?i.endingStart=this.zeroSlopeAtStart?pi:fi:i.endingStart=js,t?i.endingEnd=this.zeroSlopeAtEnd?pi:fi:i.endingEnd=js)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}}class mv extends Hn{constructor(e){super();this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==s;++d){const u=i[d],f=u.name;let g=h[f];if(g!==void 0)++g.referenceCount,o[d]=g;else{if(g=o[d],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const v=t&&t._propertyBindings[d].binding.parsedPath;g=new sv(Je.create(n,f,v),u.ValueTypeName,u.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),o[d]=g}a[d].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const d=a.actionByRoot,u=(e._localRoot||this._root).uuid;delete d[u],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Ec(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let o=typeof e=="string"?El.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=So),l!==void 0){const d=l.actionByRoot[s];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new pv(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,s),h}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?El.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}mv.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class gv extends os{constructor(e,t,n=1){super(e,t);this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}gv.prototype.isInstancedInterleavedBuffer=!0;class vv{constructor(e,t,n=0,i=1/0){this.ray=new Gn(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Eo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return yo(e,this,n,t),n.sort(Il),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)yo(e[i],this,n,t);return n.sort(Il),n}}function Il(r,e){return r.distance-e.distance}function yo(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)yo(i[s],e,t,!0)}}const wn=new E,Os=new we,io=new we;class xv extends zo{constructor(e){const t=zc(e),n=new tt,i=[],s=[],o=new ge(0,0,1),a=new ge(0,1,0);for(let c=0;c<t.length;c++){const h=t[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}n.setAttribute("position",new lt(i,3)),n.setAttribute("color",new lt(s,3));const l=new Pi({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l);this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");io.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<t.length;s++){const a=t[s];a.parent&&a.parent.isBone&&(Os.multiplyMatrices(io,a.matrixWorld),wn.setFromMatrixPosition(Os),i.setXYZ(o,wn.x,wn.y,wn.z),Os.multiplyMatrices(io,a.parent.matrixWorld),wn.setFromMatrixPosition(Os),i.setXYZ(o+1,wn.x,wn.y,wn.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function zc(r){const e=[];r.isBone===!0&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,zc(r.children[t]));return e}class _v extends zo{constructor(e=10,t=10,n=4473924,i=8947848){n=new ge(n),i=new ge(i);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let u=0,f=0,g=-a;u<=t;u++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const v=u===s?n:i;v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3}const h=new tt;h.setAttribute("position",new lt(l,3)),h.setAttribute("color",new lt(c,3));const d=new Pi({vertexColors:!0,toneMapped:!1});super(h,d);this.type="GridHelper"}}const yv=new Float32Array(1);new Int32Array(yv.buffer);Nt.create=function(r,e){return console.log("THREE.Curve.create() has been deprecated"),r.prototype=Object.create(Nt.prototype),r.prototype.constructor=r,r.prototype.getPoint=e,r};vo.prototype.fromPoints=function(r){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(r)};_v.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};xv.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};Cn.prototype.extractUrlBase=function(r){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),Qg.extractUrlBase(r)};Cn.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};jt.prototype.center=function(r){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(r)};jt.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};jt.prototype.isIntersectionBox=function(r){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};jt.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};jt.prototype.size=function(r){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(r)};Wn.prototype.toVector3=function(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")};Ci.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};rr.prototype.setFromMatrix=function(r){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(r)};xt.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)};xt.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};xt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};xt.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};xt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};xt.prototype.getInverse=function(r){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};we.prototype.extractPosition=function(r){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(r)};we.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)};we.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new E().setFromMatrixColumn(this,3)};we.prototype.setRotationFromQuaternion=function(r){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(r)};we.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};we.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};we.prototype.multiplyVector4=function(r){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};we.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};we.prototype.rotateAxis=function(r){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),r.transformDirection(this)};we.prototype.crossVector=function(r){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};we.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};we.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};we.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};we.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};we.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};we.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};we.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};we.prototype.makeFrustum=function(r,e,t,n,i,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(r,e,n,t,i,s)};we.prototype.getInverse=function(r){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};hn.prototype.isIntersectionLine=function(r){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(r)};Ct.prototype.multiplyVector3=function(r){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),r.applyQuaternion(this)};Ct.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};Gn.prototype.isIntersectionBox=function(r){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};Gn.prototype.isIntersectionPlane=function(r){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(r)};Gn.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};ht.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};ht.prototype.barycoordFromPoint=function(r,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(r,e)};ht.prototype.midpoint=function(r){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(r)};ht.prototypenormal=function(r){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(r)};ht.prototype.plane=function(r){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(r)};ht.barycoordFromPoint=function(r,e,t,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),ht.getBarycoord(r,e,t,n,i)};ht.normal=function(r,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),ht.getNormal(r,e,t,n)};as.prototype.extractAllPoints=function(r){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(r)};as.prototype.extrude=function(r){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Ii(this,r)};as.prototype.makeGeometry=function(r){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Ho(this,r)};Q.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};Q.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};Q.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};E.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};E.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};E.prototype.getPositionFromMatrix=function(r){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(r)};E.prototype.getScaleFromMatrix=function(r){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(r)};E.prototype.getColumnFromMatrix=function(r,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,r)};E.prototype.applyProjection=function(r){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(r)};E.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};E.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};E.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Ze.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};Ze.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Qe.prototype.getChildByName=function(r){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(r)};Qe.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};Qe.prototype.translate=function(r,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,r)};Qe.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};Qe.prototype.applyMatrix=function(r){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(Qe.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(r){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=r}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Mt.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(Mt.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),tu},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});cc.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};bt.prototype.setLens=function(r,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(r)};Object.defineProperties(en.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(r){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=r}},shadowCameraLeft:{set:function(r){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=r}},shadowCameraRight:{set:function(r){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=r}},shadowCameraTop:{set:function(r){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=r}},shadowCameraBottom:{set:function(r){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=r}},shadowCameraNear:{set:function(r){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=r}},shadowCameraFar:{set:function(r){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=r}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(r){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=r}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(r){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=r}},shadowMapHeight:{set:function(r){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=r}}});Object.defineProperties(dt.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===Xs},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(Xs)}}});dt.prototype.setDynamic=function(r){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?Xs:$i),this};dt.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},dt.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};tt.prototype.addIndex=function(r){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(r)};tt.prototype.addAttribute=function(r,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(r,new dt(arguments[1],arguments[2]))):r==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(r,e)};tt.prototype.addDrawCall=function(r,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(r,e)};tt.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};tt.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};tt.prototype.removeAttribute=function(r){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(r)};tt.prototype.applyMatrix=function(r){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(tt.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});os.prototype.setDynamic=function(r){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?Xs:$i),this};os.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Ii.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};Ii.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};Ii.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};lr.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(ft.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new ge}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(r){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=r===kl}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(r){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=r}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(qt.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(r){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=r}}});$e.prototype.clearTarget=function(r,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(r),this.clear(e,t,n)};$e.prototype.animate=function(r){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(r)};$e.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};$e.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};$e.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};$e.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};$e.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};$e.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};$e.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};$e.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};$e.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};$e.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};$e.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};$e.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};$e.prototype.enableScissorTest=function(r){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(r)};$e.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};$e.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};$e.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};$e.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};$e.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};$e.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};$e.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};$e.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};$e.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};$e.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties($e.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=r}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=r}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(r){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=r===!0?it:En}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}},gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});Object.defineProperties(sc.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(zt.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=r}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=r}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=r}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=r}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(r){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=r}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(r){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=r}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(r){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=r}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(r){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=r}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(r){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=r}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(r){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=r}}});iv.prototype.load=function(r){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new ev().load(r,function(n){e.setBuffer(n)}),this};Ro.prototype.updateCubeMap=function(r,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(r,e)};Ro.prototype.clear=function(r,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(r,e,t,n)};Vn.crossOrigin=void 0;Vn.loadTexture=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const i=new Cc;i.setCrossOrigin(this.crossOrigin);const s=i.load(r,t,void 0,n);return e&&(s.mapping=e),s};Vn.loadTextureCube=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const i=new Gg;i.setCrossOrigin(this.crossOrigin);const s=i.load(r,t,void 0,n);return e&&(s.mapping=e),s};Vn.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};Vn.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bo}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bo);var wv=`varying vec2 vUv;\r
uniform mat4 modelMatrix;\r
// = camera.matrixWorldInverse * object.matrixWorld\r
uniform mat4 modelViewMatrix;\r
// = camera.projectionMatrix\r
uniform mat4 projectionMatrix;\r
// = camera.matrixWorldInverse\r
uniform mat4 viewMatrix;\r
// = inverse transpose of modelViewMatrix\r
uniform mat3 normalMatrix;\r
// = camera position in world space\r
uniform vec3 cameraPosition;\r
attribute vec3 position;\r
attribute vec3 normal;\r
attribute vec2 uv;\r
void main() {\r
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);\r
    vUv = uv;\r
}`,bv=`precision mediump float;\r
uniform vec2 uResolution;\r
    \r
    \r
    \r
    uniform float uTime;\r
    varying vec2 vUv;\r
    const int AMOUNT=10;\r
    vec3 mod289(vec3 x)\r
    {\r
        return x-floor(x*(1./289.))*289.;\r
    }\r
    vec4 mod289(vec4 x)\r
    {\r
        return x-floor(x*(1./289.))*289.;\r
    }\r
    vec4 permute(vec4 x)\r
    {\r
        return mod289(((x*34.)+1.)*x);\r
    }\r
    vec4 taylorInvSqrt(vec4 r)\r
    {\r
        return 1.79284291400159-.85373472095314*r;\r
    }\r
    vec3 fade(vec3 t){\r
        return t*t*t*(t*(t*6.-15.)+10.);\r
    }\r
    float pnoise(vec3 P,vec3 rep)\r
    {\r
        vec3 Pi0=mod(floor(P),rep);\r
        vec3 Pi1=mod(Pi0+vec3(1.),rep);\r
        Pi0=mod289(Pi0);\r
        Pi1=mod289(Pi1);\r
        vec3 Pf0=fract(P);\r
        vec3 Pf1=Pf0-vec3(1.);\r
        vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);\r
        vec4 iy=vec4(Pi0.yy,Pi1.yy);\r
        vec4 iz0=Pi0.zzzz;\r
        vec4 iz1=Pi1.zzzz;\r
        vec4 ixy=permute(permute(ix)+iy);\r
        vec4 ixy0=permute(ixy+iz0);\r
        vec4 ixy1=permute(ixy+iz1);\r
        vec4 gx0=ixy0*(1./7.);\r
        vec4 gy0=fract(floor(gx0)*(1./7.))-.5;\r
        gx0=fract(gx0);\r
        vec4 gz0=vec4(.5)-abs(gx0)-abs(gy0);\r
        vec4 sz0=step(gz0,vec4(0.));\r
        gx0-=sz0*(step(0.,gx0)-.5);\r
        gy0-=sz0*(step(0.,gy0)-.5);\r
        vec4 gx1=ixy1*(1./7.);\r
        vec4 gy1=fract(floor(gx1)*(1./7.))-.5;\r
        gx1=fract(gx1);\r
        vec4 gz1=vec4(.5)-abs(gx1)-abs(gy1);\r
        vec4 sz1=step(gz1,vec4(0.));\r
        gx1-=sz1*(step(0.,gx1)-.5);\r
        gy1-=sz1*(step(0.,gy1)-.5);\r
        vec3 g000=vec3(gx0.x,gy0.x,gz0.x);\r
        vec3 g100=vec3(gx0.y,gy0.y,gz0.y);\r
        vec3 g010=vec3(gx0.z,gy0.z,gz0.z);\r
        vec3 g110=vec3(gx0.w,gy0.w,gz0.w);\r
        vec3 g001=vec3(gx1.x,gy1.x,gz1.x);\r
        vec3 g101=vec3(gx1.y,gy1.y,gz1.y);\r
        vec3 g011=vec3(gx1.z,gy1.z,gz1.z);\r
        vec3 g111=vec3(gx1.w,gy1.w,gz1.w);\r
        vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));\r
        g000*=norm0.x;\r
        g010*=norm0.y;\r
        g100*=norm0.z;\r
        g110*=norm0.w;\r
        vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));\r
        g001*=norm1.x;\r
        g011*=norm1.y;\r
        g101*=norm1.z;\r
        g111*=norm1.w;\r
        float n000=dot(g000,Pf0);\r
        float n100=dot(g100,vec3(Pf1.x,Pf0.yz));\r
        float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));\r
        float n110=dot(g110,vec3(Pf1.xy,Pf0.z));\r
        float n001=dot(g001,vec3(Pf0.xy,Pf1.z));\r
        float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));\r
        float n011=dot(g011,vec3(Pf0.x,Pf1.yz));\r
        float n111=dot(g111,Pf1);\r
        vec3 fade_xyz=fade(Pf0);\r
        vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);\r
        vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);\r
        float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);\r
        return 2.2*n_xyz;\r
    }\r
    float snoise(vec3 v)\r
    {\r
        const vec2 C=vec2(1./6.,1./3.);\r
        const vec4 D=vec4(0.,.5,1.,2.);\r
        vec3 i=floor(v+dot(v,C.yyy));\r
        vec3 x0=v-i+dot(i,C.xxx);\r
        vec3 g=step(x0.yzx,x0.xyz);\r
        vec3 l=1.-g;\r
        vec3 i1=min(g.xyz,l.zxy);\r
        vec3 i2=max(g.xyz,l.zxy);\r
        vec3 x1=x0-i1+C.xxx;\r
        vec3 x2=x0-i2+C.yyy;\r
        vec3 x3=x0-D.yyy;\r
        i=mod289(i);\r
        vec4 p=permute(permute(permute(\r
                    i.z+vec4(0.,i1.z,i2.z,1.))\r
                    +i.y+vec4(0.,i1.y,i2.y,1.))\r
                    +i.x+vec4(0.,i1.x,i2.x,1.));\r
                    float n_=.142857142857;\r
                    vec3 ns=n_*D.wyz-D.xzx;\r
                    vec4 j=p-49.*floor(p*ns.z*ns.z);\r
                    vec4 x_=floor(j*ns.z);\r
                    vec4 y_=floor(j-7.*x_);\r
                    vec4 x=x_*ns.x+ns.yyyy;\r
                    vec4 y=y_*ns.x+ns.yyyy;\r
                    vec4 h=1.-abs(x)-abs(y);\r
                    vec4 b0=vec4(x.xy,y.xy);\r
                    vec4 b1=vec4(x.zw,y.zw);\r
                    vec4 s0=floor(b0)*2.+1.;\r
                    vec4 s1=floor(b1)*2.+1.;\r
                    vec4 sh=-step(h,vec4(0.));\r
                    vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;\r
                    vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;\r
                    vec3 p0=vec3(a0.xy,h.x);\r
                    vec3 p1=vec3(a0.zw,h.y);\r
                    vec3 p2=vec3(a1.xy,h.z);\r
                    vec3 p3=vec3(a1.zw,h.w);\r
                    vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));\r
                    p0*=norm.x;\r
                    p1*=norm.y;\r
                    p2*=norm.z;\r
                    p3*=norm.w;\r
                    vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);\r
                    m=m*m;\r
                    return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),\r
                    dot(p2,x2),dot(p3,x3)));\r
                }\r
                float grain(vec2 vUv,vec2 uResolution,float frame,float multiplier){\r
                    vec2 mult=vUv*uResolution;\r
                    float offset=snoise(vec3(mult/multiplier,frame));\r
                    float n1=pnoise(vec3(mult,offset),vec3(1./vUv*uResolution,1.));\r
                    return n1/2.+.5;\r
                }\r
                float grain(vec2 vUv,vec2 uResolution,float frame){\r
                    return grain(vUv,uResolution,frame,2.5);\r
                }\r
                float grain(vec2 vUv,vec2 uResolution){\r
                    return grain(vUv + cos(uTime),uResolution,0.);\r
                }\r
                void main(){\r
                    vec2 newUv=20.*(vUv.xy-uResolution);\r
                    float len;\r
                    for(int i=0;i<AMOUNT;i++){\r
                        len=length(vec2(newUv.x,newUv.y));\r
                        newUv.x=newUv.x-cos(newUv.y+sin(len))+cos(uTime/3.);\r
                        newUv.y=newUv.y+sin(newUv.x+cos(len))+sin(uTime/3.);\r
                    }\r
                    float grainSize=1.1;\r
                    float g=grain(vUv,uResolution/grainSize);\r
                    vec3 color=vec3(g);\r
                    gl_FragColor=vec4(color,1.);\r
                    gl_FragColor=vec4(cos(len + g),cos(len + g),cos(len + g),1.);\r
                }`;function Hs(r,e,t){return r*(1-t)+e*t}class Dl{constructor(e){this.element=document.querySelector(".main"),this.viewport={width:this.element.offsetWidth,height:this.element.offsetHeight},this.resize=this.onResize.bind(this),this.mouseMove=this.onMouseMove.bind(this),this.mouse={x:0,y:0},this.clock=new Bc,this.update=this.update.bind(this),this.size=e,this.init()}init(){this.addCanvas(),this.addScene(),this.addCamera(),this.addMesh(),this.addEventListeners(),this.onResize(),this.update()}remove(){this.removeEventListeners(),window.cancelAnimationFrame(this.animationFrame),this.renderer=null,this.scene=null,this.element.removeChild(this.canvas),this.canvas=null,this.camera=null,this.geometry=null,this.mesh=null,this.material=null}addCanvas(){this.renderer=new ac({alpha:!0,powerPreference:"high-performance",precision:"mediump"}),this.canvas=this.renderer.domElement,this.canvas.classList.add("webgl"),this.element.appendChild(this.canvas)}addScene(){this.scene=new lr}addCamera(){this.camera=new bt(75,this.viewport.width/this.viewport.height,.1,10),this.camera.position.set(0,0,2),this.scene.add(this.camera)}addMesh(){this.geometry=new Vo(1.1,32,32),this.material=new dr({fragmentShader:bv,vertexShader:wv,uniforms:{uResolution:{value:new Q(this.viewport.width,this.viewport.height)},uTime:{value:0},uMouse:{value:new Q(this.mouse.x,this.mouse.y)}}}),this.mesh=new Mt(this.geometry,this.material),this.scene.add(this.mesh)}addEventListeners(){window.addEventListener("resize",this.resize),window.addEventListener("mousemove",this.mouseMove)}removeEventListeners(){window.removeEventListener("resize",this.resize),window.removeEventListener("mousemove",this.mouseMove)}onResize(){this.viewport={width:this.element.offsetWidth,height:this.element.offsetHeight},this.camera.aspect=this.viewport.width/this.viewport.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.viewport.width,this.viewport.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5))}onMouseMove(e){let t=this.mouse.x,n=this.mouse.y;this.mouse.x=Hs(t,e.clientX/this.viewport.width-.5,1),this.mouse.y=Hs(n,e.clientY/this.viewport.height-.5,1)}update(){this.render(),this.mesh.rotation.y=Hs(this.mesh.rotation.y,this.mouse.x,.075),this.mesh.rotation.x=Hs(this.mesh.rotation.x,this.mouse.y,.075),this.material.uniforms.uTime.value=this.clock.getElapsedTime(),this.animationFrame=window.requestAnimationFrame(this.update)}render(){this.renderer.render(this.scene,this.camera)}}const Mv={class:"left-side lg:absolute relative top-0 left-0 w-[100vw] flex justify-center items-center h-screen"},Sv={class:"relative w-full h-full"},Av={class:"main-text absolute top-0 left-0 w-full h-full z-[28] flex flex-col justify-center items-center text-white pb-[15vh]"},Ev={key:0,class:"flex flex-col justify-center items-center"},Tv=C("span",{class:"font-corsa font-bold uppercase tracking-[-0.05em] xl:text-[7vw] lg:text-8xl sm:text-7xl xl:pr-[15vw] lg:pr-30 sm:pr-10"}," ENERGY FAR ",-1),Rv=C("span",{class:"font-corsa font-bold uppercase tracking-[-0.05em] xl:text-[7vw] lg:text-8xl sm:text-7xl xl:pr-[15vw] lg:pr-30 sm:pr-10"}," FROM ORDINARY ",-1),Cv=C("span",{class:"font-roxbor font-extrabold italic text-[7vw] pl-[4vw]"}," The Extraordinary.",-1),Lv=[Tv,Rv,Cv],Pv={key:1,class:"flex flex-col justify-center items-center"},Iv=C("span",{class:"font-corsa font-bold uppercase tracking-[-0.05em] xl:text-[7vw] lg:text-8xl sm:text-7xl lg:pl-30 sm:pl-10"}," \u042D\u043D\u0435\u0440\u0433\u0438\u044F \u0434\u0430\u043B\u0435\u043A\u0430 ",-1),Dv=C("span",{class:"font-corsa font-bold uppercase tracking-[-0.05em] xl:text-[7vw] lg:text-8xl sm:text-7xl xl:pr-[20vw] lg:pr-30 sm:pr-10"}," \u043E\u0442 \u043E\u0431\u044B\u0447\u043D\u043E\u0439. ",-1),Bv=C("span",{class:"font-playfair font-semibold italic xl:text-[6vw] lg:text-8xl sm:text-7xl lg:pl-30 sm:pl-10"}," \u042D\u043A\u0441\u0442\u0440\u0430\u043E\u0440\u0434\u0438\u043D\u0430\u0440\u043D\u044B\u0439!",-1),zv=[Iv,Dv,Bv],Fv={key:2,class:"flex flex-col justify-center items-center"},Uv=C("span",{class:"font-corsa font-bold uppercase tracking-[-0.05em] xl:text-[7vw] lg:text-8xl sm:text-7xl xl:pr-0 lg:pr-30 sm:pr-10"}," ADATDAN ",-1),Nv=C("span",{class:"font-corsa font-bold uppercase tracking-[-0.05em] xl:text-[7vw] lg:text-8xl sm:text-7xl xl:pr-0 lg:pr-30 sm:pr-10"}," DA\u015EARY ENERGI\xDDA ",-1),kv=C("span",{class:"font-roxbor font-extrabold italic xl:text-[6vw] lg:text-8xl sm:text-7xl xl:pl-0 lg:pl-30 sm:pl-10"}," I\xC7GISI.",-1),Ov=[Uv,Nv,kv],Hv={class:"absolute top-0 left-0 w-full h-full z-30 overflow-hidden flex justify-center items-center"},Vv=C("div",{class:"absolute top-0 left-0 w-full h-full z-20 overflow-hidden flex justify-center items-center mt-10"},[C("div",{class:"outside border-[20px] 4K:border-[25px] border-c-black rounded-full p-20 4K:p-30"},[C("div",{class:"inside bg-c-black p-56 4K:p-65 rounded-full"})])],-1),Gv={class:"absolute top-0 left-0 w-full h-screen z-20 flex justify-center items-center mt-10 text-white"},Wv=Qs('<div class="bold-space-sample absolute top-0 left-0 w-full h-screen z-20 flex justify-center items-center mt-10 opacity-0 text-white"><h1 class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold uppercase text-[8vw] 4K:text-[6vw] leading-[1]"><span class="font-corsa">Bold</span><br><span class="font-roxbor">Space </span></h1></div><div class="main absolute top-0 left-0 w-full h-full overflow-hidden z-10 mt-10"></div>',2),qv=C("div",{class:"seperator h-full absolute left-full top-0 w-25 bg-custom-red-100 z-100"},null,-1),jv={ref:"pin",class:"right-side bg-c-black w-[100vw] lg:h-screen sm:h-[120vh] h-screen lg:absolute relative top-0 left-0 lg:opacity-0 opacity-100"},Xv={class:"relative w-full h-full flex justify-center items-center text-c-gray p-5"},Yv={class:"relative content lg:w-[45vw] md:w-100 w-full mx-[4vw] lg:text-[2vw] text-[5vw] lg:text-center text-c-gray"},Jv=["innerHTML"],Qv={class:"div lg:block flex mt-12 lg:mt-0"},$v={class:"bottle-light lg:w-[10vw] w-[40vw] lg:absolute relative lg:top-[-18%] lg:left-[-25%] animate-float"},Zv=["src"],Kv={class:"flex justify-end bottle-black lg:w-[10vw] w-[40vw] lg:absolute relative lg:bottom-[-60%] lg:right-[-20%] animate-float mt-[10rem] lg:mt-0"},ex=["src"],tx={setup(r,{expose:e}){const{t,local:n}=kn(),i=On(),s=is();let o,a;i?(o=new URL("assets/light.0ca475e9.png",self.location).href,a=new URL("assets/black.31873f0b.png",self.location).href,new URL("assets/boldSphere.dd3f99ce.png",self.location).href):(o=new URL("assets/light.da664012.webp",self.location).href,a=new URL("assets/black.0ccf4106.webp",self.location).href,new URL("assets/boldSphere.c3ce28ec.webp",self.location).href);const l=Xe("scrollWrapper"),c=Xe("scroller"),h=Xe("eventBus"),d=ke(),u=ke(),f=ke();let g=null,v=null,x=null,p=null;function m(){return s.value?t("main-page.pMobile"):t("main-page.p")}function A(){let T=window.innerHeight;return window.innerWidth>=2560?250:T<700?133:T<800?150:T<850?165:T<900?175:200}function b(){g&&(g.kill(),g=null),v&&(v.kill(),v=null),x&&(x.kill(),document.querySelector(".bold-space-sample").style.opacity=0,x=null),p&&(p.remove(),p=null),d.value.removeEventListener("mousewheel",W)}function w(){x.play()}function L(){x.reverse()}function P(){g&&g.refresh()}function W(T){d.value.getBoundingClientRect().top<0&&p&&(p.remove(),p=null),T.deltaY>0&&d.value.getBoundingClientRect().top>0&&v.reversed()&&v.play(),T.deltaY<0&&d.value.getBoundingClientRect().top>0&&!v.reversed()&&_()}function ne(){s.value||(c.value.scrollTo(0,{duration:0,disableLerp:!0}),b(),p=new Dl(2),x=Et.timeline(),x.to(".main-text",{opacity:0,duration:.28}).to(u.value,{scale:A()},"-=0.28").to(".bold-space-sample",{opacity:1}),x.pause(),v=Et.timeline({onUpdate:()=>{c.value.stop()},onComplete:()=>c.value.start()}).to(".seperator",{width:"100%",duration:1,left:0,ease:"power3"}).to(".seperator",{width:"0px"}).to(".left-side",{opacity:0},1).to(".right-side",{opacity:1},1),v.pause(),g=Bt.create({trigger:d.value,pin:!0,start:"top top",end:"50%",scroller:l.value,invalidateOnRefresh:!0}),d.value.addEventListener("mousewheel",W,{passive:!0}))}function O(){P()}function _(){v.reverse(),p||(p=new Dl(2))}return tn(()=>{ne(),h.on("wrapper-resize",O),O(),window.innerHeight<900&&!s.value&&(document.querySelector(".outside").style.padding="5rem",document.querySelector(".inside").style.padding="10rem",document.querySelector(".bold-space").style.transform="translate(38vh,30vh)"),window.innerWidth<768&&!s.value&&(document.querySelector(".bold-space").style.transform="translate(0,30vh)")}),un(()=>{b(),h.off("wrapper-resize",O)}),e({reverse:_}),(T,I)=>{const F=jc("RouterLink");return ye(),Me("div",{ref_key:"sectionPin",ref:d,class:"overflow-hidden flex"},[C("div",{ref_key:"pinWrap",ref:f,class:"pin-wrap lg:h-screen h-auto w-full relative"},[C("div",Mv,[C("div",Sv,[C("div",Av,[oe(n)==="en"?(ye(),Me("div",Ev,Lv)):oe(n)==="ru"?(ye(),Me("div",Pv,zv)):(ye(),Me("div",Fv,Ov))]),C("button",Hv,[Fe(F,{to:{hash:"#bold-space"}},{default:so(()=>[Fe(Kc,{class:"w-30 h-30 md:w-full md:h-full bold-space hover:rotate-360 duration-700 md:translate-x-[37vh] md:translate-y-[27vh] 4K:translate-x-115 4K:translate-y-70",onMouseover:w,onMouseleave:L})]),_:1})]),Vv,C("div",Gv,[C("div",{ref_key:"boldSpacePage",ref:u,class:"bold-space-page rounded-full w-1 h-1 bg-c-black"},null,512)]),Wv])]),qv,C("div",jv,[C("div",Xv,[C("div",Yv,[C("p",{innerHTML:m()},null,8,Jv),C("div",Qv,[C("div",$v,[C("img",{src:oe(o)},null,8,Zv)]),C("div",Kv,[C("img",{src:oe(a)},null,8,ex)])])])])],512)],512)],512)}}};var nx="assets/video.f2ea5752.webm",ix="assets/video.276a73f0.mp4",sx={mounted(r){r.__observer__=new IntersectionObserver(e=>{e[0].isIntersecting?r.paused&&r.play():r.paused||r.pause()},{threshold:0}),r.__observer__.observe(r)},unmounted(r){r.__observer__.unobserve(r),r.__observer__.disconnect()}};const Fc=r=>($s("data-v-320f9bf9"),r=r(),Zs(),r),rx={ref:"point",class:"point z-10 absolute top-1/2 left-1/2 rounded-full bg-custom-red-100 w-[5px] h-[5px] opacity-0"},ox={ref:"lightCans",class:"bold-video absolute top-0 relative-0 z-2 h-screen w-[100vw] bg-c-black"},ax={class:"w-[100vw] h-[100vh] object-cover",autoplay:"",muted:"",loop:""},lx=Fc(()=>C("source",{src:nx,type:"video/webm"},null,-1)),cx=Fc(()=>C("source",{src:ix,type:"video/mp4"},null,-1)),hx=[lx,cx],ux={emits:["activate"],setup(r,{emit:e}){new URL("assets/poster.81424a07.png",self.location).href;const t=Xe("scrollWrapper"),n=Xe("sectionPin"),i=Xe("pinWrap"),s=Xe("eventBus");let o=null,a=null;function l(){o&&(o.kill(),o=null),a&&(a.kill(),a=null)}function c(){a.refresh()}function h(){o=Et.timeline({onComplete:()=>{e("activate","story")},onReverseComplete:()=>{e("activate","")}}).to(".point",{scale:400,opacity:100,duration:500}).to(".bold-video",{opacity:0}).to(".point",{scale:0}).to(i.value,{opacity:1.5,ease:"none",duration:150}).to(".bold-video",{scale:0}),a=Bt.create({trigger:n.value,scroller:t.value,start:"center",end:"+=500px",scrub:!0,animation:o})}function d(){c()}return tn(()=>{h(),s.on("wrapper-resize",d),d()}),un(()=>{l(),s.off("wrapper-resize",d)}),(u,f)=>(ye(),Me(wo,null,[C("div",rx,null,512),C("div",ox,[Xc((ye(),Me("video",ax,hx)),[[oe(sx)]])],512)],64))}};var dx=ss(ux,[["__scopeId","data-v-320f9bf9"]]);const fx={class:"w-screen h-screen bg-custom-red-100"},px={class:"flex justify-center items-center flex-col h-screen px-12"},mx={class:"leading-[1.1] text-[9vw] md:text-[5.5vw] flex justify-center items-center flex-col"},gx={key:0,class:"flex justify-center items-center flex-col"},vx=Qs('<div class="w-full md:w-full md:pl-[20.5vw] flex flex-col justify-center items-center md:block"><span class="font-corsa font-bold uppercase text-black mr-[1vw]">It&#39;s</span><span class="font-roxbor font-bold italic text-white">New!</span></div><div class="w-full md:w-full flex flex-col justify-center items-center md:block"><span class="font-corsa font-bold uppercase text-black mr-[1vw]">Exceptionally</span><span class="font-roxbor font-bold italic text-white">Distinct!</span></div><div class="w-full md:w-full md:pl-[20.5vw] flex flex-col justify-center items-center md:block"><span class="font-corsa font-bold uppercase text-black mr-[1vw]">Unfamiliarly</span><span class="font-roxbor font-bold italic text-white">Fresh!</span></div>',3),xx=[vx],_x={key:1,class:"flex justify-center items-center flex-col"},yx=Qs('<div class="w-full md:w-full md:pl-[20.5vw] flex flex-col justify-center items-center md:block"><span class="font-playfair italic text-white font-bold mr-[1vw]">\u041D\u043E\u0432\u0438\u043D\u043A\u0430!</span><span class="font-playfair font-bold italic text-white"></span></div><div class="w-full md:w-full flex flex-col justify-center items-center md:block"><span class="font-corsa font-bold uppercase text-black mr-[1vw]">\u0418\u0437\u044B\u0441\u043A\u0430\u043D\u043D\u044B\u0439 \u0438</span><span class="font-playfair font-bold italic text-white">\u0423\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0439!</span></div><div class="w-full md:w-full md:pl-[20.5vw] flex flex-col justify-center items-center md:block"><span class="font-corsa font-bold uppercase text-black mr-[1vw]">\u0411\u0435\u0437\u0443\u043F\u0440\u0435\u0447\u043D\u043E</span><span class="font-playfair font-bold italic text-white">\u0427\u0438\u0441\u0442\u044B\u0439!</span></div>',3),wx=[yx],bx={key:2,class:"flex justify-center items-center flex-col"},Mx=Qs('<div class="w-full md:w-full md:pl-[20.5vw] flex flex-col justify-center items-center md:block"><span class="font-roxbor italic text-white font-bold mr-[1vw]">T\xE4ze</span><span class="font-roxbor font-bold italic text-white">!</span></div><div class="w-full md:w-full flex flex-col justify-center items-center md:block"><span class="font-corsa font-bold uppercase text-black mr-[1vw]">A\u0147RYBA\u015E HEM</span><span class="font-roxbor font-bold italic text-white">A\xFDratyn!</span></div><div class="w-full md:w-full md:pl-[20.5vw] flex flex-col justify-center items-center md:block"><span class="font-corsa font-bold uppercase text-black mr-[1vw]">Birkemsiz</span><span class="font-roxbor font-bold italic text-white">Arassa!</span></div>',3),Sx=[Mx],Ax={class:"w-full md:w-[30vw] pt-[3.5vw] md:pt-[1.5vw] border-t border-black font-corsa font-normal text-lg md:text-[1.3vw] text-[#580808] leading-[1.8] md:transform translate-y-[35%]"},Ex={key:0},Tx=Te(" It's Bold. Bold with the uniqueness of its components. Bold with its energizing effect "),Rx=C("br",null,null,-1),Cx=Te(" on your body, soul, mind. It is "),Lx=C("span",{class:"font-roxbor italic text-black"},"launched",-1),Px=Te(" in "),Ix=C("br",null,null,-1),Dx=Te(" 2019. In 2020 it was acknowledged as the "),Bx=C("span",{class:"font-roxbor italic text-black"},"Innovative Product of the Year.",-1),zx=[Tx,Rx,Cx,Lx,Px,Ix,Dx,Bx],Fx={key:1},Ux=Te(" Bold \u0443\u043D\u0438\u043A\u0430\u043B\u0435\u043D. \u0423\u043D\u0438\u043A\u0430\u043B\u0435\u043D \u0441\u0432\u043E\u0435\u043E\u0431\u0440\u0430\u0437\u043D\u043E\u0439 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u044C\u044E \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432. \u0423\u043D\u0438\u043A\u0430\u043B\u0435\u043D \u0441 \u0435\u0433\u043E \u044D\u043D\u0435\u0440\u0433\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u044D\u0444\u0444\u0435\u043A\u0442\u043E\u043C \u043D\u0430 \u0432\u0430\u0448\u0435 \u0442\u0435\u043B\u043E, \u0434\u0443\u0448\u0443, \u0440\u0430\u0437\u0443\u043C. "),Nx=C("span",{class:"font-playfair italic text-black"},"\u0412\u044B\u043F\u0443\u0449\u0435\u043D \u043D\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0443",-1),kx=Te(" \u0432 2019 \u0433\u043E\u0434\u0443 \u0438 \u0432 2020 \u0433\u043E\u0434\u0443 \u043F\u0440\u0438\u0437\u043D\u0430\u043D "),Ox=C("span",{class:"font-playfair italic text-black"},"\xAB\u0418\u043D\u043D\u043E\u0432\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u043C \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u043C \u0433\u043E\u0434\u0430\xBB.",-1),Hx=[Ux,Nx,kx,Ox],Vx={key:2},Gx=Te(" Bold a\xFDratyn. Komponentlerini\u0148 \xF6zbolu\u015Flylygy bilen a\xFDratyn. Bedene, a\u0148a we jana ber\xFD\xE4n energi\xFDasy bilen a\xFDratyn. 2019-nji \xFDylda "),Wx=C("span",{class:"font-roxbor italic text-black"},"satuwa \xE7ykaryldy",-1),qx=Te(" we 2020-nji \xFDylda "),jx=C("span",{class:"font-roxbor italic text-black"},"\xAB\xDDyly\u0148 i\u0148 innowatiw \xF6n\xFCmi\xBB",-1),Xx=Te(" di\xFDlip ykrar edildi. "),Yx=[Gx,Wx,qx,jx,Xx],Jx={setup(r){const{t:e,local:t}=kn();return(n,i)=>(ye(),Me("div",fx,[C("div",px,[C("div",mx,[oe(t)==="en"?(ye(),Me("div",gx,xx)):oe(t)==="ru"?(ye(),Me("div",_x,wx)):(ye(),Me("div",bx,Sx))]),C("div",Ax,[oe(t)==="en"?(ye(),Me("p",Ex,zx)):oe(t)==="ru"?(ye(),Me("p",Fx,Hx)):(ye(),Me("p",Vx,Yx))])])]))}};const Lt=r=>($s("data-v-2c2a9aab"),r=r(),Zs(),r),Qx={class:"w-screen md:h-screen"},$x={class:"w-screen md:min-h-screen flex flex-col md:flex-row"},Zx={class:"w-screen md:w-[50vw] md:min-h-screen"},Kx={class:"img-wrapper img h-auto md:w-[50vw] md:h-screen"},e_={class:"flex pt-[14vh] items-center flex-col min-h-screen w-screen md:w-[50%] bg-custom-red-100 z-6 px-12"},t_={class:"w-full leading-[1.1] text-[9vw] md:text-[5.5vw] flex flex-col justify-center items-center"},n_={key:0,class:"flex flex-col justify-center items-center"},i_=Lt(()=>C("span",{class:"font-corsa font-bold uppercase text-c-black"},"Innovative?",-1)),s_=Lt(()=>C("span",{class:"font-roxbor font-bold italic text-white md:pl-[22vw]"},"How?",-1)),r_=[i_,s_],o_={key:1,class:"flex flex-col justify-center items-center"},a_=Lt(()=>C("div",{style:{"line-height":"0.7"}},[C("span",{class:"font-corsa font-bold uppercase text-c-black",style:{"font-size":"4vw"}},"\u0418\u043D\u043D\u043E\u0432\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439?"),C("span",{class:"font-playfair font-bold italic text-white md:pl-[15vw]",style:{"font-size":"3.5vw"}},"\u041A\u0430\u043A\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C?")],-1)),l_=[a_],c_={key:2,class:"flex flex-col justify-center items-center"},h_=Lt(()=>C("span",{class:"font-corsa font-bold uppercase text-c-black"},"Innowatiw?",-1)),u_=Lt(()=>C("span",{class:"font-roxbor font-bold italic text-white md:pl-75"},"N\xE4hili?",-1)),d_=[h_,u_],f_={class:"w-full md:w-[27vw] mt-[12vh] pt-[3.5vw] md:pt-[1.5vw] border-t border-black font-corsa font-normal text-lg md:text-[1.3vw] text-[#580808] leading:[1.8] md:leading-[1.4] 3xl:leading-[1.6]"},p_={key:0},m_=Te(" Because of its components. It doesn't contain taurine. Yet, it gives the most "),g_=Lt(()=>C("span",{class:"font-roxbor italic text-black"},"powerful energy",-1)),v_=Te(" you need to achieve your accomplishments. Bold "),x_=Lt(()=>C("span",{class:"font-roxbor italic text-black"},"procures",-1)),__=Te(" the energy with vitamins: B2, B3, B5, B6, B12, and Vitamin C. You gain the energy without harming your body. You gain it by "),y_=Lt(()=>C("span",{class:"font-roxbor italic text-black"},"vitalazing ",-1)),w_=Te(" your body. "),b_=[m_,g_,v_,x_,__,y_,w_],M_={key:1},S_=Te(" \u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u0441\u0432\u043E\u0438\u043C \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430\u043C. \u0412 \u043E\u0442\u043B\u0438\u0447\u0438\u0435 \u043E\u0442 \u043F\u0440\u043E\u0447\u0438\u0445 "),A_=Lt(()=>C("span",{class:"font-playfair italic text-black"},"\u044D\u043D\u0435\u0440\u0433\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043D\u0430\u043F\u0438\u0442\u043A\u043E\u0432",-1)),E_=Te(" \u0432 Bold-\u0435 \u043D\u0435\u0442 \u0442\u0430\u0443\u0440\u0438\u043D\u0430. \u0421\u0432\u043E\u044E \u044D\u043D\u0435\u0440\u0433\u0438\u044E Bold \u0431\u0435\u0440\u0435\u0442 \u0441 \u0432\u0438\u0442\u0430\u043C\u0438\u043D\u043E\u0432, \u0442\u0430\u043A\u0438\u0445 \u043A\u0430\u043A: B2, B3, B5, B6, B12 \u0438 \u0432\u0438\u043D\u0430\u043C\u0438\u043D\u0430 \u0421. Bold "),T_=Lt(()=>C("span",{class:"font-playfair italic text-black"},"\u0434\u0430\u0435\u0442 \u044D\u043D\u0435\u0440\u0433\u0438\u044E",-1)),R_=Te(" \u043D\u0435 \u043D\u0430\u043D\u043E\u0441\u044F \u0432\u0440\u0435\u0434 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u043C\u0443. \u041E\u043D \u0434\u0430\u0435\u0442 \u044D\u043D\u0435\u0440\u0433\u0438\u044E, "),C_=Lt(()=>C("span",{class:"font-playfair italic text-black"},"\u043E\u0436\u0438\u0432\u043B\u044F\u044F",-1)),L_=Te(" \u0442\u0435\u043B\u043E. "),P_=[S_,A_,E_,T_,R_,C_,L_],I_={key:2},D_=Te(" Komponentleri seb\xE4pli. Be\xFDleki "),B_=Lt(()=>C("span",{class:"font-roxbor italic text-black"},"energi\xFDa",-1)),z_=Te(" beriji i\xE7gilerden tapawutlylykda Bold-da taurin \xFDok. Bold \xF6z\xFCnd\xE4ki energi\xFDany witaminlerden "),F_=Lt(()=>C("span",{class:"font-roxbor italic text-black"},"al\xFDar",-1)),U_=Te(": B2, B3, B5, B6, B12 we witamin C. Bold bedene zy\xFDan bermezden energi\xFDa ber\xFD\xE4r. Ol bedeni "),N_=Lt(()=>C("span",{class:"font-roxbor italic text-black"},"sapla\xFDar.",-1)),k_=[D_,B_,z_,F_,U_,N_],O_={setup(r){const{t:e,local:t}=kn(),n=On();let i;n?i=new URL("assets/black.7296b691.png",self.location).href:i=new URL("assets/black.be127aeb.webp",self.location).href;const s=new URL("data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QNiaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9IjU5NzRERTFFQUMyMkFCODM4RjJCNjE5RDBGMEZDMDgzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjI4NTI0OEYxQTlDQzExRUNCRDQxQzBFNDQxM0UwNUM5IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjI4NTI0OEYwQTlDQzExRUNCRDQxQzBFNDQxM0UwNUM5IiB4bXA6Q3JlYXRvclRvb2w9Ik5JS09OIEQ4NTAgVmVyLjEuMDMgICAgICI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjdCNjY4Q0EyQTQ1ODExRUNCQzQ0OTAyMkMyNjU2QUU0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjdCNjY4Q0EzQTQ1ODExRUNCQzQ0OTAyMkMyNjU2QUU0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgAQAAyAwERAAIRAQMRAf/EAIMAAAEFAQEBAAAAAAAAAAAAAAYBBAUHCAIDAAEAAgMBAQEAAAAAAAAAAAAAAQIAAwQFBgcQAAECBQMCBQQBBQAAAAAAAAECAwARBAUGITESQVEiQhMjB2FxUxSBMmIzFhcRAAICAQQBBQEAAAAAAAAAAAABEQIDIUESBDFRIhMFBhX/2gAMAwEAAhEDEQA/AB3i60jkrU9I9yfNJTegzXVVZMhMCCXrHU9mKlSNVI5H6xXajYyhHzrrrywUDgBBrSBbNE7S+o7b1F/xBA0EOcrJCv7QdeU76h4niJ6CCdWqUCTc/J0gSyaehPqp2w3yUNO0WQcxXcjb2NuAgwW+71FCaXzJl9YkEm2x2aBperSgR2gQL8zXkmWqINW0unUASKRC8tYMdrO1gUqgC4ogSE4eDr43oeHGBBbIZWqnpHaxDFYkllRkVJ6RT2MjrR2Wxi6VK3ypPcIDiOK1FSGKSu9w+U7gx5e33mWT26/P4Y3Bm7YxU0txcpW5rQg6KlvHpOn2fkxqzPJd/GsGV0WsCMY9XAzDatNSZGLrdilfLMSrkv4qx0zXNlBtlL79W74eHYxzX9phdvJur+f7D90HLfxrlFSqfoBAPeDf7nAtzqYvpM72HH/Icj7o2nFP93Eav4OYOKL4zt9Er1fWWtxvVM9pxyMv3WS64xozp4fz2KjVt0V1dHblbMyUhBQEKIKSRuZ7RyVB29i6LZb6d2lbqHmkrfUkFSiPpFluxdKE9CivTxWfK1U2NsqudosdlfqakIbmghAkBMkbRUr2tuX/ABUr4SM0YllDdHmKrgr/AA+qVSJ2BMWtaCJ6mqLNcqe6ULVbSLC2XACDGZpo0JqCQlBIcuCbavtERGVfnFkomq5i4uAArIE/7pxswcZcmLPy0gsW0a0LWoPgTtttGbLE6GnFMagF87UaX8RUTMKQZpI6GFq4LODtojMWNB1y4kO+JCehi610SvVu9jXPxapCsTp+A4gT0imzknHjowumYUIpE0kQQFW/IoonnmW/3FJcaVIsy6ExZJXAXYxe7SunZoWnZuoQB4ushAtqGmhGfLTlM1jSjUibSjxP8iERYk29DN+L/wCv0N2dVUpUtC1e2O2sTl6m3Jimq4zJqD47NOrH210+jSlEpSOkF6mFppwwnlAgh3BAC2ZYexd6cvMpCKxvVKu/0hk4A0VJXt3q31g4cmn2j002ixCE5e7rVZZhlRaqpJRcWk8mlDzkQsBTKAbxnJW7hw/XWkoVqVaQ/FE+W/qaW+LcnYo7Sxaq72nh5+hMV2qFWLJ/aY/Inblv07wkDHuDOGIKRPSIAHcnxWmubRdaSE1KRoe8FOCNAQ3jt4Zd4pYUFg6KENIsE1UYQ7W20PuoDdckageb7wshgEnLQ7TulC0FK0GHFHHrXL8q/wCnhudu0Qkn/9k=",self.location).href;return(o,a)=>(ye(),Me("div",Qx,[C("div",$x,[C("div",Zx,[C("div",Kx,[Fe(oe(Zt),{class:"w-full h-full object-cover",src:oe(i),"src-placeholder":oe(s)},null,8,["src","src-placeholder"])])]),C("div",e_,[C("div",t_,[oe(t)==="en"?(ye(),Me("div",n_,r_)):oe(t)==="ru"?(ye(),Me("div",o_,l_)):(ye(),Me("div",c_,d_))]),C("div",f_,[oe(t)==="en"?(ye(),Me("p",p_,b_)):oe(t)==="ru"?(ye(),Me("p",M_,P_)):(ye(),Me("p",I_,k_))])])])]))}};var H_=ss(O_,[["__scopeId","data-v-2c2a9aab"]]);const kt=r=>($s("data-v-1fca0c1e"),r=r(),Zs(),r),V_={class:"w-screen md:h-screen"},G_={class:"w-screen md:min-h-screen flex flex-col md:flex-row"},W_={class:"w-screen md:w-[50vw] md:min-h-screen"},q_={class:"img-wrapper img h-auto md:w-[50vw] md:h-screen"},j_={class:"flex pt-[14vh] md:pt-[10vh] items-center flex-col min-h-screen w-screen md:w-[50%] bg-custom-red-100 z-6 px-12"},X_={class:"w-full leading-[1.1] text-[9vw] md:text-[5.5vw] flex justify-center items-center flex-col"},Y_={class:"w-full flex flex-col justify-center items-center"},J_={class:"text-center"},Q_={key:0,class:"text-center"},$_=kt(()=>C("span",{class:"font-roxbor font-bold italic text-white pr-[2vw]"},"How",-1)),Z_=kt(()=>C("span",{class:"font-corsa font-bold uppercase text-c-black"},[Te("is "),C("br"),Te(" bold "),C("br"),Te("created? ")],-1)),K_=[$_,Z_],e0={key:1,class:"text-center"},t0=kt(()=>C("div",{style:{"line-height":"0.8"}},[C("span",{class:"font-playfair font-bold italic text-white"},[Te("\u041A\u0430\u043A"),C("br")]),C("span",{class:"font-corsa font-bold uppercase text-c-black",style:{"font-size":"4.1vw"}},[Te("\u0421\u043E\u0437\u0434\u0430\u0432\u0430\u043B\u0438 "),C("br"),Te(" BOLD? ")])],-1)),n0=[t0],i0={key:2,class:"text-center"},s0=kt(()=>C("span",{class:"font-bold pr-[2vw]"},[Te("Bold"),C("br")],-1)),r0=kt(()=>C("span",{class:"font-corsa font-bold text-c-black"},[C("span",{class:"text-white font-roxbor italic"},"N\xE4hili"),C("br"),Te("D\xF6redildi? ")],-1)),o0=[s0,r0],a0={class:"w-full md:w-[65%] mt-[9vh] pt-[3.5vw] md:pt-[1.5vw] border-t border-black font-corsa font-normal text-lg md:text-[1.3vw] text-[#580808] leading:[1.8] md:leading-[1.4] 3xl:leading-[1.7]"},l0={key:0},c0=Te(" Pouring lots of flavors or vitamins doesn\u2019t make great energy. It has to be composed scientifically. Bold is created at the "),h0=kt(()=>C("br",null,null,-1)),u0=kt(()=>C("span",{class:"font-roxbor italic text-black"},"Yupekchi plant",-1)),d0=Te(" \u2014 by scientists with years of experience and knowledge. Its secret is smart work and "),f0=kt(()=>C("span",{class:"font-roxbor italic text-black"},"well-composed",-1)),p0=Te(" components. "),m0=[c0,h0,u0,d0,f0,p0],g0={key:1},v0=Te(" \u042D\u043D\u0435\u0440\u0433\u0438\u044F \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u043E\u0442 \u0432\u043A\u0443\u0441\u0430 \u0438 \u0432\u0438\u0442\u0430\u043C\u0438\u043D\u043E\u0432. \u0414\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u0435\u0433\u043E \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u0441\u043E\u0447\u0435\u0442\u0430\u0442\u044C \u043D\u0430\u0443\u0447\u043D\u044B\u043C \u043C\u0435\u0442\u043E\u0434\u043E\u043C. Bold \u0431\u044B\u043B \u0441\u043E\u0437\u0434\u0430\u043D \u043E\u043F\u044B\u0442\u043D\u044B\u043C\u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u0430\u043C\u0438 "),x0=kt(()=>C("span",{class:"font-playfair italic text-black"},"\u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \xAB\u042E\u043F\u0435\u043A\u0447\u0438\xBB",-1)),_0=Te(". \u0415\u0433\u043E \u0441\u0435\u043A\u0440\u0435\u0442 \u2014 \u044D\u0442\u043E \u043F\u0440\u043E\u0434\u0443\u043C\u0430\u043D\u043D\u044B\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0438 \u0445\u043E\u0440\u043E\u0448\u043E "),y0=kt(()=>C("span",{class:"font-playfair italic text-black"},"\u0440\u0435\u0433\u0443\u043B\u0438\u0440\u0443\u0435\u043C\u044B\u0439 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442.",-1)),w0=[v0,x0,_0,y0],b0={key:2},M0=Te(" Energi\xFDa di\u0148e tagam we witaminlere bagly d\xE4l. Energi\xFDany\u0148 d\xF6remegi \xFC\xE7in olary\u0148 ylmy usulda dogry sazlanmagy m\xF6h\xFCm. Bold, "),S0=kt(()=>C("span",{class:"font-roxbor italic text-black"},"\xAB\xDD\xFCpek\xE7i\xBB kompani\xFDasyny\u0148",-1)),A0=Te(" \xFDyllara barabar tejribesi bolan h\xFCn\xE4rmenleri tarapyndan d\xF6redildi. Onu\u0148 syry z\xE4hmet we "),E0=kt(()=>C("span",{class:"font-roxbor italic text-black"},"gowy sazlanan",-1)),T0=Te(" komponentlerdir. "),R0=[M0,S0,A0,E0,T0],C0={setup(r){const{t:e,local:t}=kn(),n=On();let i;n?i=new URL("assets/light.e2732fb7.png",self.location).href:i=new URL("assets/light.52ceac49.webp",self.location).href;const s=new URL("data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QNiaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9IjU5NzRERTFFQUMyMkFCODM4RjJCNjE5RDBGMEZDMDgzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjI4NTI0OEVEQTlDQzExRUNCRDQxQzBFNDQxM0UwNUM5IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjI4NTI0OEVDQTlDQzExRUNCRDQxQzBFNDQxM0UwNUM5IiB4bXA6Q3JlYXRvclRvb2w9Ik5JS09OIEQ4NTAgVmVyLjEuMDMgICAgICI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjdCNjY4Q0E2QTQ1ODExRUNCQzQ0OTAyMkMyNjU2QUU0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM5RkM2MkVFQTQ1QTExRUNCQzQ0OTAyMkMyNjU2QUU0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgARQAyAwERAAIRAQMRAf/EAJAAAAEFAQEAAAAAAAAAAAAAAAYCAwQFBwEIAQACAwEBAQAAAAAAAAAAAAACBAABAwUGBxAAAQMCBQIDBAgHAAAAAAAAAQIDBAARITESBQZBE1EiB2FxMhSBkbFCUiMVFqHR4aIzUxcRAAICAQQBAQcFAAAAAAAAAAABEQIDITEEBRJCQVFhUhMVBnEiMhQW/9oADAMBAAIRAxEAPwASZ7iz5nNIr3TbPndoRLaQwD53b+6qlmU/AnRnmEoIQrSvoo0STFMtXPwEPbZOfPcSvug+FSIDpyKLTYYRBeCrG4IzvVo0tmRKTGcSnE3NEjB5EI0q8OtXAXkVOnGqgdkdQ22lJUtQSBmTS/I5FcVZZtx+PbNbxqOx1sufCq48RQ8bl1zKag83iXwOLFvtk1yM+koGpIOVNWrKg5WSierL/cNqVKDclDfZ7mJFYVt46Ctsjq9VoJa29EcWUjUrqTRzIvbLZnOxE/AM/wCNUD9SwOMcR5DIP5cNePiKxtz8K9R7GnX5rekp+UbfI2mI6zN8j5GDYzFcbs+dTJXxqdvq+BfFbytoI4Gw1ujzUJx4MKWbJUeppTg9gsCcqRrsOtfIahwbBC9J1M6XFyNVsbCt7/kD9lRH/Lq29glb4a0pDYddUQ38KaRt3GR7I3p+L4V/Jtk9zjcBbehSAbC16VfY5veP16Lir0lf+y9u/B969B9xz/Ma/ZeL8iChptu2CAn6KWk6UGBes/GJUjfC9HP+TMUzjTgVvZJkP0z4Ruzc1KnUICAsELOeHhV3q4BrkrMSbnunIdv2kNsSnkNOKT5NZsCRSmo3JU7dzNp2clp6QyplZsCkgmrSK8gtGlVik3ScQaGAjumrJIq9QhmHqI1JXuYLaQpItnTmCs77CPItG24nhLm5qmhtxCUNBWYocitrGxMbrpO5TevMD51cRoO9peklKssqxxscutDNuJbNLg77t/clF1DqgpIBJBsfbV5LwHx8KvOux6tjkiM1YX8o+ysihzGqIKteiIZB6vSt32qa3LZSXI7gtYC9jW+OzQvlom9QJ4pzbk7u7toLBbilQ1rAthR3s2twKY6pzBfer+/RF/pr6Ul3SLKvhal1+1D+LF9WySA/j89qbyiAttBQlNrJ6Z0DvKG/6rxW/VHp1AUIzagT8IwHuqrIRQjuPeJoNQtCdWxmRp0CFNaLUppLqPBQvUI0CO68Fab1PbekADHtgUasA6mb8x2hqVIjsTPyg0SSlWFyKt6h0u66rcGojG37ZyyC6hxKUqAK0A3AsaytWFCHMWe123Z+w9JbTu8CbHbDLgKgkeXrlRQJyWNk1RAN4vzUSAmNuHldyDnQ0bqCmGCSlYCkm4ORFA0EKqEBPnPBY3JIgSlXZkIxS4KJWgpqTK/+UDap4kz1LeWg3QemFHMgQEm3znoUhDzRsEfd9lXBYWfvxr/Wfg/uoPAKQKT2dQ0E6ulh/WjAD3if6z2h3cY3TXcK+jOs7BoKKEs7UIRNx+Q7Cvm9Oi2N6tFGd7wNk7yvk1OZ4jSNP21opBZWWa8T9Q/nRFH/2Q==",self.location).href;return(o,a)=>(ye(),Me("div",V_,[C("div",G_,[C("div",W_,[C("div",q_,[Fe(oe(Zt),{class:"w-full h-full object-cover",src:oe(i),"src-placeholder":oe(s)},null,8,["src","src-placeholder"])])]),C("div",j_,[C("div",X_,[C("div",Y_,[C("div",J_,[oe(t)==="en"?(ye(),Me("div",Q_,K_)):oe(t)==="ru"?(ye(),Me("div",e0,n0)):(ye(),Me("div",i0,o0))])])]),C("div",a0,[oe(t)==="en"?(ye(),Me("p",l0,m0)):oe(t)==="ru"?(ye(),Me("p",g0,w0)):(ye(),Me("p",b0,R0))])])])]))}};var L0=ss(C0,[["__scopeId","data-v-1fca0c1e"]]);const P0={ref:"blankSpace",class:"blank-space h-screen bg-custom-red-100"},I0={setup(r,{expose:e}){const t=Xe("main"),n=Xe("eventBus"),i=Xe("scrollWrapper"),s=ke(),o=ke(),a=ke(),l=window.innerWidth;Ut("sectionPin",s),Ut("pinWrap",o);let c=null,h=null;function d(){c&&(c.kill(),c=null),h&&(h.kill(),h=null)}function u(){h.refresh()}function f(){d(),c=Et.to(o.value,{x:()=>-(o.value.offsetWidth-window.innerWidth)}),h=Bt.create({trigger:s.value,pin:!0,scrub:!0,start:()=>1.5*t.value.$el.offsetHeight,end:()=>1.5*t.value.$el.offsetHeight+o.value.offsetWidth,scroller:i.value,animation:c,invalidateOnRefresh:!0})}function g(){u()}return tn(()=>{let v;l>=1400&&(v="80vw"),l>=1600&&(v="75vw"),document.querySelector(".blank-space").style.width=v,f(),n.on("wrapper-resize",g),g()}),un(()=>{d(),n.off("wrapper-resize",g)}),e({pinWrap:o,story:a}),(v,x)=>(ye(),Me("div",{ref_key:"sectionPin",ref:s,class:"relative h-screen flex bg-custom-red-100"},[Fe(dx,{onActivate:x[0]||(x[0]=p=>v.$emit("activate",p))}),C("div",{ref_key:"pinWrap",ref:o,class:"h-screen flex justify-start items-center opacity-0"},[C("div",P0,null,512),Fe(Jx,{ref_key:"story",ref:a},null,512),Fe(H_,{ref:"story2"},null,512),Fe(L0,{ref:"story3"},null,512)],512)],512))}};var D0="assets/IconBoldOLetter.30ee9bc0.png";const fr=r=>($s("data-v-d837592e"),r=r(),Zs(),r),B0={class:"w-full min-h-screen relative"},z0={class:"relative min-h-screen w-[100vw]"},F0={class:"absolute bottom-0 left-0 z-20 transform-gpu will-change-transform w-[100vw] h-[540vh]",style:{transform:"translate3d(0, 440vh, 0)"}},U0={id:"spotlight-mask"},N0=fr(()=>C("rect",{x:"0",y:"0",width:"100vw",height:"230vh",fill:"#fff"},null,-1)),k0=fr(()=>C("image",{"xlink:href":D0},null,-1)),O0=[k0],H0=fr(()=>C("rect",{mask:"url(#spotlight-mask)",x:"0",y:"0",width:"100vw",height:"400vh",fill:"#ff0000"},null,-1)),V0=["src"],G0={class:"relative w-full min-h-screen mt-[30vh]"},W0=["src"],q0=fr(()=>C("div",{class:"nav-bar w-full h-[40vw] py-[25vh] px-[5vw] flex flex-col bg-white"},null,-1)),j0={setup(r){const e=new URL("assets/IconBoldOLetter.30ee9bc0.png",self.location).href,t=new URL("assets/extraordnary-01.a890b86c.svg",self.location).href,n=new URL("assets/light-bold.7fd9d90c.png",self.location).href,i=new URL("assets/light-bold_blur.0e070ff9.png",self.location).href,s=new URL("assets/black-bold-1.d80951c5.png",self.location).href,o=new URL("assets/black-bold-1_blur.70b2a095.png",self.location).href,a=new URL("assets/black-bold-2.ff6362ad.png",self.location).href,l=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA+CAYAAACbQR1vAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAAXNSR0IArs4c6QAADYBJREFUaEPtmmuMHFV2x09V3Vv3VlVP9zw9L9tjGxsTa1mSdZBXICcDrAgOmNhIkwSQFxO/kNB+Q0T51nzmW/wlNo8ERJQF1qsNhA0hu5G1u3k4K2eIs2ZmGHv8mLG7x93T1Y963Xrd6JRnyCJF0Uru7o2FW2r5y8gz93fP+Z//Oecq8BX/KF/x88MdAHci4CtO4E4KfMUD4I4IdiMFlKmpKRUAtIWFBcI511zX1Xp7eyGfzydRFIW7du2KisVi+uuIxo4AkFIqr7zyCvU8j9Xr9Zxt2/lGo9HrOE7B9/2eOI4ZpVQpFAqOaZpLuq5fJoTU33///aTbENoK4L333tMKhQIPw7B3cXFxZHFxcXxpaWlDpVIZt2172HXdfgSQpikCAMuyWrlcbppz/kNFUT795JNP3NsSQLFYVJ944gleqVTWRVG0pdVq7SiXy/csLCxsXri0MFYul/vqdj3n+T6LoohIKVWm62BaVmiZ5nnG2Duapv3gzJkz1wGgq6lwyxGAh/noo48KQojtKyv2Lsdp/nYcx/c4jjO2sLBQmJubY6VSSWs5jiKEgDRJQFEUwAgwDEOaplnmnP+AEPKXQohzFy5cEN2MglsG8Pbbb1tRFH29Wq3uLZVKDzeazS2U0gIhGi2Xysr8/DyUy2XwPA/CKMoAgKIA0TRgnINpmp7B+T/ruv6aYRj/+Omnn9ZvGwAodsePHx+sVCqPX79+/flr167tdFzX7O/vU/r6+qDZaMKlS5cyAI7rQhiGkCQJSClBVVXQMQ0MIzEta47p+luEkHdnZmYWu5kGtxoByksvvTRULpf3l8vlozXb/nqaJGRwcBDwGwQBLC4tQblUgpbjQCgExHEMqZQ304AQ4JgGlrXMOT/Fdf0NwzB+cfbs2ahbUXCrAGDfvn29zWZzj+u6LwRBsEtKyfL5PAwMDGQ3vby8nEVAs9mEYA1AmmYANEwDxjAKWoZh/BOl9ATn/Cfnzp3rWjW4ZQB79+41a7Xa78Zx/IIQ4pEkTS2Dc+jt7QNCNLBtGyqVCrRarS+lQHbD/6MFIWdsWtf11y3L+tvp6ekqAMhuRMEtA5iamtKr1epvhWF4JAiCP4iiaJAQgi4POOcQ+j60bBu8IIAgjkGEIcRJkokh6gF+CKUpY+wSZ+yvNU17Z2Zm5mK3dKAdADTf97H2Hwh8/9lUiE1MVVXDssAoFIBKCaLRgIbvQ10IcDwPsBxGcXwTgJQ3U4HzKmfsA0LI66qqnv3ss8/C2yICMJD3798/VK/V9mlCHO4Lw9/sVYAGnIOPaUAp+M0mVOt1qHkeuFgOMQrWAGCTcFMLPM75TymlJ+M4/tGFCxeatwsAmJyczPVo2mS/EMe2RNFDgzK1rmsELuZyEBgGBL4PK7UaNB0nE8IMQBTdLIkAoN40RjHn/Dzl/A1VylNzc3OlbujALacA3hLqgJUk9w143uER19k3IMJ1FUWB84YBtmVBlCSZGDYajaw0IoA1T/CFGBIiOedLnLF3KaV/tW7durnTp0/HnY6CtgDAXiBoNDY5i4vPatXqgWHPvYuCol7UdSjlchCpanZ4u14HHzUgDCH6JVOEh9TQE3BeZ7r+MSHkpOu6/7a0tOTfFgBQB4rF4sDC/PyTwfLykdFW8xtjaaovUwqXrRwIXQfP88Gu2+CupgECwGqw5gxXdUAwXT+j6/pJQsjfnz9/vna7AIBXX33Vmp2d3W2XSsd66/Yjd4VRj080mDdMcA0TRBxB3bah2WqBCAKIoij7Zs4wTdesccI5/5wx9paqqt/thi1uSwrgLZ04cYKePXv23hul0iHDtp/aGgTDTFWVec5gxbQAkxnToI5pEASZCGYQ4hjkqjMkhEjG2DJj7BSl9E3TNP+r07a4bQBQBy6XL2+sXr3xtNZoPLdVBNuGFFW9QiksWTlICAHHdTIAa41RBgEjYK1BwnKo6y3OeddscdsAYBTs379/wHGc3we3dXSLiO7frCisSghcNC0QnGUVAAGgLUYzhOGPAFAP8F/sDzhjoWVZ04yx1znnH5w7d67SyXLYVgDYF3ie9wAIcWxUiEe3S5kPNRXmuAEtw8hEDw/vuu6XyqHv+xkQRVURQGpaVmaLKaVoixcAoGOzwrYCmJycJKOjozsatdqf5BxnapsQo6aqKJ/rDKqWBVLTAA+7BgG1AA+eiWIc3zREuo4QqpzzDwkhr8Vx/B+dnBK1FQAOSF588cX1pWvX/kjWas9vDoLtwyC1q5TCopWDVNezm0cxRAgIAw0RukFsi3FOiFGgKIqnAPyMEHIiCIKO2uK2AkAdeOaZZ/pqtdpjstU6uiEU37xLAl8hGlw0TAgYy6wwzgYcx8kAoA7g4YeHh6Gvvz+rDq7nxYHvn4/j+E0hxPc6aYvbDmBycpIDwDdl4B8bi5PH7pGyN9E0mGMM6oYBYRRDs9m4qQOrQojzg4mJCRgZGclSol6vy5brLgVB8G4YBB21xZ0AQFgUbU/S9GBPHP/x9jQd70E/QCmUEQAAtJrNLwYkGAFog8fHx2H9+HjmDDFFXNet+77/sRDiZKPR6JgtbjsACaA89/DDY7YQU2oUPb8pTXaMgkIWCYHLCICQ7PbrjUbWFyAA/AwODcHGjRuzaTG6Rd/zRBAEZxBAmqYds8VtB4CH+dNvfatwOQge9cLw2EiaPLAZwKirGnzOOXiMZc0QdodoiNaaokKhABsnJiCXy2X9gud5ie/782EYvhWG4d90yhZ3BMCf79nDfu7799tCHO2Jose3S9kvVRVmdR1sw8jaYxRCnBRnhiiKsh3Bhg0bYGCgH3w/QJGUQojlUIjvp2n6BqW0I7a4IwCmpqY0UqlsqwjxnBVFT98t0429iqpcoBSucw6xqmZpkJVCnA+gCVIUGBkdhZHh4SwtsEpEUeQIIX4cx/EJRVE6Mi3uCABsj39v9+4RP46fYnF8aFua3rtBAXJNI7CAg1Ick60aIvQF+MXGqH+gH9av35DtCxCAECIKw3A6iqLXAKAjtrhTAODBBx/sUdP0ESVJXticJLu3AZgtDdOAgcNYtiZzWi3wfD+DgV/TNGHTpk1QyOez2aHveWkYhpdFFL0Th2FHbHHHAOzYsUMfGhramQpxZDiOn/wNmQ5oqAOEQgXTIE2zFEAtwL0hgsCFKQLAkogd4qpZWhFCfBCG4etBEJxtty3uGADUAdd17wqD4IDpec/eHUUTfYqiXtQ0uIqWWMrsgGs6gHmPvcDo6Chs3boVN8dZOWzU657ruj9DHaCU/ujMmTNtnRZ3DADqwOHDh9fVarV9ca12eIPr3rc+Tel1VYXPKYWA0qwBwtvHqTECwC8efGx8HHKWlQlls9mMhRDnpZRvapr2venp6bZOizsJAIrFYu7KlSuTTqn0wrp6fXJzHFk1RYHPqA6eZWWND3qBRr2e5TyKITpBbIoIJZDECS5SpUbINapp2bR4ZmZmFiAbMLXl02kA+o0bN+5LlpaODNn2vrEgGKpKCf9JCDRME6SiZLa3VqtlqbBWDRIckWEIra7QDcNomIbxMWMMp8X/2s5pcacBqO7KymZlefmZXKXybeo4W64lsTqPN68zwIPiwdEWe6775ZXZ6sIke0NgmsIwjH9HAIyxH7ZzWtxRAHiJf/ad7ww6y8t7w0rlSLPZ+EYljPSmqgLoehYBeHAUO8z3bGe4tjH68huCxDTNedMw8BHFd2dnZ6+2a3naaQBw4MABK2g0dtu2fazVaj3iRVEPrIY27gIw7DEKsCKspQCOzvBtwRePKDjHt0Q3LMs6xTlvqy3uOICdO3fSQqFwbxiGh3zff0oIMYwdo05pVvejKAbXdTIfgLe/9oYID4/PaPCNAWMcq0LLsqwfG4ZxwjTNn3z44YdeO1Sw4wAwlfc99tjGIE2fbrnuc47jbIvjWMXctiwreyeEt41jMTRK+EFtwLU5KqGqqNmG2bKswDLNfzFN8y8YY/9w/PjxtviBbgCAQ4cO9a/cuPG43WwedRznfkVVWX9fXzYBwrdEWPvxUQXeOnoBTIW1OUEWCZoqKaEOpfS0pmknAeB0sVh0bpcIAByXh2H4QBRHx3SqPzo4OJhfv359ZnnxzTCmAq7H0APgkBRTYfUlmVQUJVFV1UmSZCFJkr8Lw/BUvV6fLRaLbXlA0ZUIwHH5wEB+Rz4/cHBwcPAPx8bGxvr7+xW8eRTCtcOvCh8eOlVVNVRU1VEVZRkA5qWUPxdC/FQI8YuDBw82FEVpyxuirgDAcvjyyy+PDg0P7S30FL6t6/p9cRwbq2EuVVVNNU1LdF0XlFKXEGJrmlZWVfWyqqpzUsoZKeU8AFyfnp522/myvFsAcHlq5nK5r/m+/2Sr1fqdRqMxHMexQgiJOOeuYZoN0zRXLNMsU0qXCCFXpZSLiqKUGGM1wzC8hx56CDdEbbn5Nf3oGgBcnk5MTORt2767Wq1+rd6sr4vDWOWcB7lcrmn2mHYhV1jJ5/O1QqFgSylbjDF/z549EaZEOwTvf/s/ugYAfzlCAABeLpdzruvyJEkwAuKhoSHR09MTTkxMhFeuXMFGJ21nmP9f8LoK4Jf+EAUFDz9Y5lY/bQ3tXzVifl0AftW/r+M/dwdAxxH/P/8F/w1KRhi3OyJ4MwAAAABJRU5ErkJggg==",self.location).href,c=ke(),h=Xe("scrollWrapper"),d=Xe("eventBus"),u=ke(),f=ke();let g=null,v=null,x=null,p=null,m=null,A=null,b=null,w=null,L=null,P=null;function W(){g&&(g.kill(),g=null),m&&(m.kill(),m=null),A&&(A.kill(),A=null),v&&(v.kill(),v=null),L&&(L.kill(),L=null),P&&(P.kill(),P=null),p&&(p.kill(),p=null),x&&(x.kill(),x=null)}function ne(){v.refresh(),x.refresh()}function O(){W(),g=Et.timeline().to("#spotlight",{transform:()=>`translate3d(${35}vw, ${25}vw, 0)`,attr:{r:()=>`${19}vw`}}),m=Et.timeline().to("#spotlight",{transform:()=>`translate3d(${73}vw, ${23}vw, 0)`,attr:{r:()=>`${11}vw`},onStart:()=>{document.getElementById("spotlight").setAttribute("r","11vw")}}),p=Et.timeline().to("#spotlight",{transform:()=>`translate3d(${35}vw, ${205}vh, 0)`,attr:{r:()=>`${55}vw`}}),b=Et.timeline().to(".icon-image",{transform:()=>`scale(${1.8})`,left:()=>`${24}vw`,top:()=>`${14}vw`}),w=Et.timeline().to(".icon-image",{opacity:()=>0}),A=Bt.create({trigger:u.value,start:"bottom center",end:"top top",scrub:!0,animation:m,scroller:h.value,invalidateOnRefresh:!0}),v=Bt.create({trigger:u.value,start:"top top",end:"bottom center",pin:!0,scrub:!0,animation:g,scroller:h.value,invalidateOnRefresh:!0}),x=Bt.create({trigger:u.value,start:"center 100%",scrub:!0,animation:p,scroller:h.value,invalidateOnRefresh:!0}),L=Bt.create({trigger:u.value,start:"top top",end:"bottom center",scrub:!0,scroller:h.value,animation:b,invalidateOnRefresh:!0}),P=Bt.create({trigger:u.value,start:"center 100%",end:"center 90%",scrub:!0,scroller:h.value,animation:w,invalidateOnRefresh:!0})}function _(){T(),ne()}async function T(){await Bl(),c.value.style.transform=`translate3d(${73}vw, ${23}vw, 0)`,c.value.setAttribute("r","11vw"),f.value.style.top=`${27-15}vw`,f.value.style.left=`${77-15}vw`}return tn(()=>{T().then(()=>{O(),d.on("wrapper-resize",_),_()})}),un(()=>{W(),d.off("wrapper-resize",_)}),(I,F)=>(ye(),Me("div",B0,[C("div",{ref_key:"mask",ref:u,class:"relative w-[100vw] min-h-screen bg-white"},[C("div",z0,[(ye(),Me("svg",F0,[C("defs",null,[C("mask",U0,[N0,C("circle",{id:"spotlight",ref_key:"circle",ref:c,r:"11vw",fill:"#000",class:"will-change-transform transform-gpu"},O0,512)])]),H0]))]),C("div",{ref_key:"iconImage",ref:f,class:"icon-image absolute top-0 right-0 w-[22vw] h-[22vw] z-10"},[C("img",{class:"object-cover w-full h-full",src:oe(e)},null,8,V0)],512),C("div",G0,[C("img",{class:"absolute bottom-0 left-0",src:oe(t)},null,8,W0),Fe(oe(Zt),{class:"img-1 absolute -bottom-[10vw] left-[12vw] z-15 w-[50vw]",src:oe(n),"src-placeholder":oe(i)},null,8,["src","src-placeholder"]),Fe(oe(Zt),{class:"img-2 absolute bottom-[15vw] left-0 w-[30vw]",src:oe(s),"src-placeholder":oe(o)},null,8,["src","src-placeholder"]),Fe(oe(Zt),{class:"img-3 absolute -bottom-[35vw] left-[35vw] w-[60vw]",src:oe(a),"src-placeholder":oe(l)},null,8,["src","src-placeholder"])])],512),q0]))}};var X0=ss(j0,[["__scopeId","data-v-d837592e"]]);const Y0={class:"w-[100vw] flex lg:flex-row flex-col lg:justify-start justify-center items-center min-h-screen bg-c-black lg:px-15 px-5 relative mb-20 lg:mb-0"},J0={class:"black-edition text-white text-[22vw] leading-none mt-40 lg:mt-[5vh] tracking-tighter"},Q0=C("span",{class:"relative font-roxbor font-normal italic"},"Black ",-1),$0=C("br",null,null,-1),Z0={class:"relative uppercase font-corsa font-bold"},K0=Te("Edition "),ey={class:"img-wrapper rounded-image lg:absolute relative lg:right-[17%] lg:top-[10%] flex justify-center items-center lg:mt-0 mt-10 lg:w-[19vw] w-[80vw]"},ty=["src"],ny={ref:"doubleCircle",class:"bg-c-black w-[100vw] h-screen relative flex justify-center items-center pb-20 md:pb-0"},iy={class:"img-wrapper lg:w-[90] w-[100vw] h-full z-100 lg:relative absolute"},sy=["src"],ry={class:"text-c-gray lg:text-[2.25vw] text-[3vw] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:w-[35vw] w-auto text-center"},oy=C("br",null,null,-1),ay=C("br",null,null,-1),ly=C("br",null,null,-1),cy={setup(r,{expose:e}){const t=On();let n,i,s;t?(n=new URL("assets/Bold191.7cc2b2ac.png",self.location).href,i=new URL("assets/black.31873f0b.png",self.location).href,s=new URL("assets/circles.5f2a1054.png",self.location).href):(n=new URL("assets/Bold191.e42de8d6.webp",self.location).href,i=new URL("assets/black.0ccf4106.webp",self.location).href,s=new URL("assets/circles.a9ad6f1a.webp",self.location).href);const o=new URL("assets/black_blur.aa63a0d1.png",self.location).href,a=Xe("scrollWrapper"),l=Xe("eventBus"),c=Xe("main"),{local:h}=kn(),d=Xe("scalingCircle"),u=Xe("horizontalScroll2"),f=ke(),g=ke(),v=is(),x=Wc();let p=null,m=null,A=null;function b(){p&&(p.kill(),p=null),m&&(m.kill(),m=null)}function w(){m&&m.refresh()}function L(){v.value||x.value||(b(),A=Et.timeline(),A.from(".black-edition",{y:800,duration:1}).from(".rounded-image",{x:1e3,rotate:360,duration:1},"-=1"),A.pause(),p=Et.to(g.value,{x:()=>-(g.value.offsetWidth-window.innerWidth),onStart:()=>{A.play()}}),m=Bt.create({trigger:f.value,anticipatePin:1,pin:!0,scrub:!0,start:1.5*c.value.$el.offsetHeight+d.value.$el.offsetHeight+window.innerHeight/2+d.value.$refs.mask.offsetHeight+u.value.$refs.story.$el.offsetWidth+u.value.$refs.story2.$el.offsetWidth+u.value.$refs.story3.$el.offsetWidth+u.value.$refs.blankSpace.offsetWidth,end:g.value.offsetWidth+1.5*c.value.$el.offsetHeight+d.value.$el.offsetHeight+window.innerHeight/2+d.value.$refs.mask.offsetHeight+u.value.$refs.story.$el.offsetWidth+u.value.$refs.story2.$el.offsetWidth+u.value.$refs.story3.$el.offsetWidth+u.value.$refs.blankSpace.offsetWidth,scroller:a.value,animation:p,invalidateOnRefresh:!0}))}function P(){w()}tn(()=>{L(),l.on("wrapper-resize",P),P()}),un(()=>{b(),l.off("wrapper-resize",P)});function W(){A.play()}return e({pinWrap:g,animate:W}),(ne,O)=>(ye(),Me("div",{ref_key:"sectionPin",ref:f,class:"min-h-screen overflow-hidden flex"},[C("div",{ref_key:"pinWrap",ref:g,class:"pin-wrap min-h-screen flex flex-col lg:flex-row justify-start lg:items-center"},[C("div",Y0,[C("h1",J0,[Q0,$0,C("span",Z0,[K0,Fe(oe(Zt),{class:"absolute lg:left-[30%] lg:bottom-[8%] lg:w-[12vw] w-[25vw] right-0 bottom-[70%] animate-float",src:oe(i),"src-placeholder":oe(o)},null,8,["src","src-placeholder"])])]),C("div",ey,[C("img",{class:"w-full h-full rounded-full",alt:"",src:oe(n)},null,8,ty)])]),C("div",ny,[C("div",iy,[C("img",{class:"w-full h-full object-cover",alt:"",src:oe(s)},null,8,sy)]),C("div",ry,[C("p",null,[Te(fn(ne.$t("editions.black-edition.paragraph.first-part"))+" ",1),oy,Te(" "+fn(ne.$t("editions.black-edition.paragraph.second-part"))+" ",1),ay,Te(" "+fn(ne.$t("editions.black-edition.paragraph.third-part"))+" ",1),C("span",{class:Jo(["font-roxbor italic text-white",{"font-playfair font-medium":oe(h)==="ru"}])},fn(ne.$t("editions.black-edition.paragraph.first-high")),3),Te(" "+fn(ne.$t("editions.black-edition.paragraph.fourth-part"))+" ",1),ly,Te(" "+fn(ne.$t("editions.black-edition.paragraph.fifth-part"))+" ",1),C("span",{class:Jo(["font-roxbor italic text-white",{"font-playfair font-medium":oe(h)==="ru"}])},fn(ne.$t("editions.black-edition.paragraph.second-high")),3),Te(" "+fn(ne.$t("editions.black-edition.paragraph.sixth-part")),1)])])],512)],512)],512))}},hy={class:"text-white text-[22vw] leading-tight lg:leading-none relative mt-15 lg:mt-0"},uy={class:"word absolute font-roxbor font-bold italic z-2"},dy=C("span",null,"L",-1),fy={class:"relative"},py=Te("i"),my=C("div",{class:"w-4 h-4 bg-white rounded-full"},null,-1),gy=[my],vy=C("span",null,"g",-1),xy=C("span",null,"h",-1),_y=C("span",null,"t",-1),yy=C("br",null,null,-1),wy=C("span",{class:"font-corsa font-bold uppercase tracking-tighter"},[C("span",null,"E"),C("span",null,"d"),C("span",null,"i"),C("span",null,"t"),C("span",null,"i"),C("span",null,"o"),C("span",null,"n")],-1),by={class:"lg:hidden h-full w-full mt-10"},My={setup(r){const e=On();let t,n,i,s;e?(t=new URL("assets/light.0ca475e9.png",self.location).href,n=new URL("assets/group1.69cec22d.png",self.location).href,i=new URL("assets/group2.e547a3b2.png",self.location).href,s=new URL("assets/lightedition.d28980c5.jpg",self.location).href):(t=new URL("assets/light.da664012.webp",self.location).href,n=new URL("data:image/webp;base64,UklGRg4OAABXRUJQVlA4TAIOAAAvkwJ6AOWobduGsf8/2+lljwiFbdsgKg0fwUdQqFSVf7L2VSkj4D8gq9aeOpQioRKQUAlIQEIl4KDM7RENSKgENOAgEuKAtUqS9uHMDIe5JKL/ENxIkqTE7gJ7dhbKqumuHniAH2vb48a2bWsUYRapF2UUYdYg/0x48IIzhTc4c5iYKUx66B49mAzv9wIeWhP/jIqIOZs0s4j+y4JttW6drdt36x4ySJGQI8xvX5IX8x/zH/Mf8x/zH/Mf8x/zH/Mf8x/zH/Mf8x/zH/Mf8x/zH/Mf8x/zH/Mf8x/zH/Mf8x/zH/Of//uP+Y/5z39QwBhfn5AA/b+3qc81Si4ae87Eh+Oyxphy4yJyTgBSPpsqOGtsuTLGlpe4pEqyC+U+Z1tj8ti3TgpvQpw3KEG02G80qM0pmICNXS5IeXkIQ+rMp1yPfUuDNyCpLt3OKwWgdBpHi0wItdYyUNvZnIIbQLx7xI0G9ZvKZQgq0tY2j31r45KAIYdc5tIUEQ/htBFhSG/vVwS/MD/fzmFZsaBy1rg67VsfK/kqiDinphlouig/G7BxDqDxPqR2lDD4lSI57Vsdl4BgxJkiFk1URPTzFpA4GYFLaxxNRAKy07510l7KiGIc1fgO8DOL1BKRucShQEDhdKd96wHXOKuueBqQvyotAeSnc3+fO9f0gqDpPee0YvLqs2+FtEaBoS3aN5htOlBnAep4Gw298rvgt6+vkRe/YBVev1a9KThnGywYtXGCobfzAKjTvuVxkaMoAbuYAWyGND/s3xY+3gr1Louiz74FgdvRC6J08OTF3YkSkrLUcuG2b4m8eJ0RVQmqH16capSlUgeSC5d9q4JhXGlWhB3QguqRlLnnMpQ4p7MTlaZMFVY1ejVK1TfULfvWQw80DuNKJOcJAau6MRQbE9TPWLtUtpxShh0qCAlZ9ox4U9n5bUk3Ca8GenyrAfBhFnz9FJRlVIK+4jk9GUtawhlJGkoACTEGkB0q0G9LyjcVIaVTduzWjUdqfCtiZU/iSsaMtcNwWqovOFsoXY9qAo43/GgJ7mtg6tI2pg/8sSRe3YfrSiwwVM2Z7tEP0+9PJWPaWrqpjnp3qJtTt2+ZXDJAn8e+dULE+snsWyXN+v3z2LdOSIif0b71cepm3T+RfUvyYv5j/jP3UPls/aOBlO5wvFlP6fVzcqQAhPz+VA8fmjxz/x3u+se1tlQvHtryOV8S8eHH9/6d5ADcR/7dxNznlQ6gfTC+fu0f4Yj1MuZ4X/nUWs8Axwf++88D+8TSAGx3hi6nA73vwNpjJG8qig/RPED9uC8rvc8sbysS3RugfyAA+rgfAkflPqXro/yJm9BP0/gZFz3uXxPjfhYfv9HHmFx78J1D/dPB8U+T+5V4f1R0H2OMWuIGWvfg88H2oSgfmQbgO+FHGQOp9xuaZmougvFVSeBJOQ/JqGuMqZAjHei4yK4KazJfaL9ZFlPeVRtWLbWoULMCy6ll50JOs5e1kVx5nfaMuizbVQ5RTvHDjFdG92CaSYicXUvgSR0gwSblVDsdKF2kqsIywDqbllu0eVOLGmqqkY4UVXm9iCLgykVWr+j9kapyX4yxp5S55isePtZbYTzuS2ECIhfBlKEDl7XfQUnBHzHTIACElEpLQ2TqVJjados7mAAR+h1YKPNIZUf07b3XiNgUVoTS2rYC2M10oOP+5JukTtRzBDZmw3oTYKQWPdVswHpqOVi+PG53DmdaUcFrPIXt5uuYzjtO9KKMXgBBjlJqbUxZpn4CyxHcAaA2B6OKY2CfNNR4bbJaRlJhBHCyzNdaURNZNiZJxJB46NjzCGgWaUDo2hHPCogku0q0A/j3RZz1K2zOQVhz9bcpKoey0gokQXZFcq+tKM1Qcf8SY+zC2xvLuNvBY4AK4K4TI7N1465Gjzur6kzDyQa4yU/3EWCTFTsp3S681Tsm9ZZ+zSJR30Yq0CBtU+f1vSH1fZ7mVRS9Vd9VaifOHfgEWbEl0w7glDEelDk4hJ7jGk13zfAUaCzIROJErWug5ZjMClUSz6s29HCpAVyfRA5g1c/OF1g5utu7f6dHAu4AFxqNFyNx0D3fDikA0kvDJvGxCDsJPeetQp3z0kFK5hTp5wrg1RWazApFksi3wqQSD8LhLLJbu+1Jor079/dG7p/T3XClj8oA8e883wC1cvrOsEXooD0S08O9TYrh2a07Ph1A+ZFKckQ5P+j4ovKXbUx4N3kc8NRnkWo5eNH+2QdCrJTW7fVOiBfDDMgykmf38tDK6TvDouPf61EfPK6JoHDHdIkAnCjGWjPUKdmWRVYQCEnoGhO2KYHNJKSPmx8QLTHEOQ+l+/Fq7Rw0Phs2CQDtyeIZIArDbsQLeBYr+K7q0QyPEbnsylUWbc6qzg9kVuiS0KOioo4N/YlkA/YP/p0SYlojS1r7Xuz27pKcY6pGfTas0FFzqg+N9wcRCUUAT8U4aN2Doh0BlDH4TajILLCppFke9vLR+A7QLW5nXPQqvuRlBXj1EUULVDvmN92w3MCQRYC6HsXwXskcrnLTskzJsTfbUvwmVMCo8DOJY2nd8d7o8nwpaykg3oXDmrLGm1gFy7GT4urr3X5mAnDPFV0XsTUZwBAQlQlCeWj8y6ygQWaSMJBMQpjNPU25Flckxcvsl3gTHJrPkhyyhzr+Mzbg1Y/66A5SY3ay6T3zjo2XU7o0Lx8q+O6+lL33Rj0o7ACNkN9XjwCNWGit4ykyOavgREIBkA9hFUNyI5x8u8QmO9ULAnGyfGCRhQQBi5Ja1IknHWk7NfiJiqtb4eUUo/CyYJNHhoFTFmNcXJVzj1JyHzglOTCIcq5NbHMRO0549q6BIrXaTJ77cZyDclpzjgh79iJj5lGmAy2IQ/v3++ukCoAURz6VjiLmI1UImePcF7JSi3qZpxX59aar36SGYzrZ5eLd3zhu/X1HbT9T2/uuLD3b432nTAdCYKNoK6rg8Xk/M5xcUmm5SyqIfKwJ5/J8JMrgLRFboPuZVaQD7eZeDik3Dmn6QoraXj27tWlhStI0U4t6kFKVe5iO6UDxdFfKNRY4G46OJTOzeqinDcaaPob6simaFD87lAJyKeSAC9zV/UytJVD0ubnjgY1TnOaScxTc6tbEsypdYVbuoJ0td8gknZNco3fFOhQhUaQINVOLurCl1nHhTuPvn9cL7Eq/EA77g1Phl2+++fJtOGedvz999cvf5lRX77aIb5UbicJNy/d+QHLQxeHzyOYCnmdbv4awh9UaCyzT1J7TGS4/KdUhE332YeUN7Z68ocMQMvpNyR1Si3qkXn2d/sbcuf3+F5P/Bz8Uw+kPf69MgxupMn8/dRGKAGV0/VtjWv8mbigpuZLQVqoITemBaoHNqP+tCGR/Dj4IKv/XculT5rMP4/b2nd1Knp+GT8y7QrbU5/Owjb3mlMtG8ynZ/u8///efv814S6k9IbMxA/U/lCgx3Z81lmcXGfH+JOT/kOTl6cWI7wDhuUXNmT28yNmaklVUZCg9ZJGfg2UNTRtTkZnUyKTuQmphUrvezzyCtQSkaRWRTyMn6XBA2apKtJDycu28KlEuihlX6YGsiVFreRopQvPoQDeLAqU5oTThtD0qhweq7ugQbNYlKn8yVk2KTQLoclWit8tpxj2KP+mttYjQztbF4cKh8Lyky845WFGgxIoJjWOeEoHEpB4ir2TtNHq2v0gKTqdgcYR2lnWJbnMKKWkXUqpFPcW5qxItFcvWNp5xqirGPYZ/yz4vU00RepPDycoR6VsQXqrnedR6wBGwTOdhco0Ljghdq0uUrKyUby83mUaSCiGgGVWJFhFviKuQoghvscyHlKovmhI4CVD6ytSw3tcdacoswTQ9if2KmbGFgKRCAasoZifqpphViWbNbpqPKWzU1HxT+U5ZNWn4lv5vahzAJVgLLCgHF7+YUjQoIpIja8CuVSXqOtnzMeWwfDndkCVkuXDlUYnaL4Xg7olcaePq2XlWK9eawsq65aWqRFXj9kcVX9rajXscW1mnsg8fBahflRYQ7SM4F0VwB1ZN4nrDlqKkJK01K33sBXBWJWob94hiJ9cxEgI0cSp/85BhNC3s7xHcYDSO0QS8rcqYrzcFh3FLGw8xm/rOXBIPfLooVW3KbcC2YFddooNVLWhJYSw581nBpapEfcYdj+ovypW1EQtLKlx/NiJTcGSz5OLZvyzePc23F/W3faXCOI0bDyeeZ3ngcVFzsWXSr+yKO3pVQLIFBUQvk4Jw7Qr0O5WvU4D2kF4o6X+xigsd+7TnFFaB6ENj6BxNF+wIF0lHdyF6WZa5dC9BTY1P1ceR7zRv7vbz53Q+ubUnEcF40pJF6QFbUtkD71hKgn0KRl2ixFNNBkXKsZCRAF8IKKqPj1Is+s04Mxw2HkI24WtDpgjtZ6axhHgOnmJznIRzR9l9sEmpRblroyc1SKoL7kF75KKN5KxzFYNqqFxK4VJIcf31ZsaFqkQ9xp3BfSZkewg/NBuBEKN8mALt5qIuNr61YkKDUtkll1q5VE2X5oZScNQF72pdouvgJmjikEigvCCBzKpEw27/Ip2iuHE7fxXCY/gJxaQ+be+xKmlGDyUuyoWFQsp8gMcis5FVNFb17dormJqoSzR3pStKcbkb923qF+j5UlWiUre47OOYsm30fpCjJFBfMlJDHBnFhnrnj84spjTvIGVOb1WidzCOjvmUbP/3H/Mf8x/zH/Mf8x/zH/Mf8x/zH/Mf8x/zH/Mf8x/zH/Mf8x/zH/Mf8x/zH/Mf8x/zH/Mf8x/zH/Mfy48O",self.location).href,i=new URL("assets/group2.506c8767.webp",self.location).href,s=new URL("assets/lightedition.4597b332.webp",self.location).href);const o=new URL("assets/light_blur.4be139ab.png",self.location).href,a=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAAnCAYAAACv+ADgAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAAXNSR0IArs4c6QAAAhRJREFUaEPtl9mKAjEQRdPu+/Ymvvji/3+SL6Igiorgri2noGSQYTA91dOjJBB6otWVe+pWIhPFcRy7DxtRgHoTR4NTb2KUC04FpzKsQGi/DIvvtXVwyqtcGQYHpzIsvtfWf+KU/iMQRZGXuKTBqUHt93t3PB7d6XSS2W63RSOfAQlgqVRytVrNFQqFpPq/fc8c6na7CcR2u3WbzeYhvtPpyBoogIA5HA5uMBi4YrH4v6FwAbDr9SrPfD4vELlcThzSyRr4arVqCkQyL6cQhAO0DaKoOn8jmmrrmjigeJ7PZxFdqVQecHw2nU5dr9cTKG1H8pCDYpCXgrAP02d4QSF0MpmIYMblcpGNW62WCEQocLSVgvDc7XYSh1DeHY/HbjabyTvNZlMc4wySZ71eC3yj0XDlctmNRqPHeXwVzAuKirIpIhHe7XZFAJOK4yJV1lsOCCARDAznaLFYuPl8LjG4BxTvrFYridHzxcXCfsPhUAriM7ygNLGeFxWg7aPfP6+/CgKA719tqSQ/A4mgnkUul0tpLR16toBGPG2qDtJqegY1Hifq9bqPGT/GmkBxPjj8TAQjEhDajXMBNEMdUkDiaEHW/X7f7Gr/NRRiqT4QOvT61utcYbWVeCoYsbSz3nYWdplAWQixzBGgLKuZZq7gVJrVtcwdnLKsZpq5glNpVtcyd3DKsppp5gpOpVldy9wf6dQdcTGmm6wzuDIAAAAASUVORK5CYII=",self.location).href,l=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAAnCAYAAACv+ADgAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAAXNSR0IArs4c6QAAAj5JREFUaEPtl1mK60AMRcuZ5/kvC8j+l5BNZAmBQCADmcfHEX2h6K+2XSavmyowtqokla6uJJLk/X6/3R9bSQT1SxiNTP0SolxkKjL1wQzE8vtg8lNdHZlKla4PKkemPpj8VFdnYoof9q/Xy5XL5R9d9ng8TDdJEoft8/l0lUrFbJF9f+ho/36/u1qt9qM7fKVMoDabjTudTm48Hrvz+WwACZTV7Xbd5XJxBMQqlUqmMxwO7d1oNNxut3PNZtPAoCtgAGi32yaje7vd3HQ6NR9pVmpQXLharezCTqfjrterAUButVoW7PF4tGCRecMKwR4OB7PhHPbYx1+1WjUf+BqNRpYg7LCZTCZp8JhualAYwYwWAeh/pspR52RY35wJCDYqRb3lT6yovNOylBmUnzoCXC6XVooEst1urQ8Gg4HJBK1+Uq/YxV/9JV/IPFlAfKcyE1O+E0DM53MrG3oNkPV63UpKDNJn9BTlSJmJNR8wupQmydGwSF13Xwa5QQFksVjY4Oj1ehYwfUWPaYDs93s3m80MFHswSc/ACg+Dgz2GCMnJy1ZuUCSH7PPAkMrI7zmd+cH6faVe4zwvS0F6SoNjvV5buSnjAusHybdGP+z0+32TYQgWQ60gTGlYMKIpP2TKjBITKL41Hek3dDmDRUoOUOz/N0zBECWkaYdMT6lnvo9v7Ys1TT0BzctYEKbyBhHaPoIKndGi/EWmispsaL+RqdAZLcpfZKqozIb2G5kKndGi/EWmispsaL9/kql/Yfrfm8D88PYAAAAASUVORK5CYII=",self.location).href,c=new URL("assets/lightedition_blur.f80d5398.png",self.location).href,h=Xe("scrollWrapper"),d=Xe("lightEdition"),u=Xe("eventBus"),f=ke(),g=ke();let v=null,x=null,p=null,m=null;function A(){v&&(v.kill(),v=null),x&&(x.kill(),x=null),p&&(p.kill(),p=null),m&&(m.kill(),m=null)}function b(){p.refresh(),m.refresh()}function w(){A(),v=Et.timeline().to(".dot",{scale:0}).to(".dot",{opacity:0,duration:.01}),p=Bt.create({trigger:d.value.$el,scrub:!0,scroller:h.value,start:"75% top",end:"135%",animation:v}),x=Et.timeline().from(".word",{translateY:0}),m=Bt.create({trigger:d.value.$el,scroller:h.value,scrub:!0,start:"top",end:"100%",animation:x})}function L(){b()}return tn(()=>{w(),u.on("wrapper-resize",L),L()}),un(()=>{A(),u.off("wrapper-resize",L)}),(P,W)=>(ye(),Me("div",{ref_key:"typo",ref:f,class:"flex flex-col min-h-[140vh] bg-c-black lg:items-center items-start justify-center overflow-hidden relative lg:px-0 px-5"},[C("div",hy,[C("span",uy,[dy,C("span",fy,[py,C("span",{ref_key:"dot",ref:g,class:"dot absolute -right-[35%] top-[18%] transform lg:scale-[85] 4K:scale-[115] hidden lg:block"},gy,512)]),vy,xy,_y]),yy,wy,Fe(oe(Zt),{class:"absolute lg:right-[14%] lg:top-[24%] right-[5%] top-[3%] lg:w-[13.5vw] w-[23vw] animate-float",alt:"",src:oe(t),"src-placeholder":oe(o)},null,8,["src","src-placeholder"])]),C("div",by,[Fe(oe(Zt),{class:"w-full",alt:"",src:oe(n),"src-placeholder":oe(a)},null,8,["src","src-placeholder"]),Fe(oe(Zt),{class:"mt-5 w-full",alt:"",src:oe(s),"src-placeholder":oe(c)},null,8,["src","src-placeholder"]),Fe(oe(Zt),{class:"mt-5 w-full",alt:"",src:oe(i),"src-placeholder":oe(l)},null,8,["src","src-placeholder"])])],512))}};const Sy={class:"h-[60vh]"},Ay={key:0,class:"carousel__item h-full w-full mx-10"},Ey=["src"],Ty=["innerHTML"],Ry={props:{imgs:{type:Array,required:!0}},setup(r){const{t:e}=kn();return(t,n)=>(ye(),Me("div",Sy,[Fe(oe(oh),{"items-to-show":2.5,autoplay:2500,"wrap-around":!0},{default:so(()=>[(ye(!0),Me(wo,null,zl(r.imgs,(i,s)=>(ye(),Yc(oe(rh),{key:s},{default:so(()=>[i.isImage?(ye(),Me("div",Ay,[C("img",{class:"w-full h-full object-cover",src:i.url,alt:""},null,8,Ey)])):(ye(),Me("div",{key:1,class:"carousel__item w-full h-full bg-white mx-10 flex justify-center items-center text-[1.5vw]",innerHTML:oe(e)("editions.light-edition.paragraph")},null,8,Ty))]),_:2},1024))),128))]),_:1},8,["items-to-show"])]))}};var Cy=ss(Ry,[["__scopeId","data-v-1323e746"]]);const Ly={key:0},Py={setup(r){const{local:e}=kn(),t=On();let n;t?n=ke([{isImage:!0,url:new URL("assets/lightedition.d28980c5.jpg",self.location).href},{content:e==="ru"?"<p class='text-custom-gray'><span class='font-playfair italic text-c-black'>\u0421\u0438\u043B\u044C\u043D\u044B\u0439</span> \u0438 \u0432 \u0442\u043E\u0436\u0435 \u0432\u0440\u0435\u043C\u044F \u043D\u0435\u0436\u043D\u044B\u0439. <br />\u0425\u043E\u0447\u0435\u0448\u044C \u0432 \u0430\u043B\u044E\u043C\u0438\u043D\u0438\u0435\u0432\u043E\u0439 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0435, <br />\u0445\u043E\u0447\u0435\u0448\u044C \u0432 \u043F\u043B\u0430\u0441\u0442\u0438\u043A\u043E\u0432\u043E\u0439. <br />\u041D\u0435\u043E\u0431\u044B\u043A\u043D\u043E\u0432\u0435\u043D\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u0434\u043B\u044F \u043B\u044E\u0431\u0438\u0442\u0435\u043B\u0435\u0439 <br />\u0430\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u0443\u0434\u043E\u0432\u043E\u043B\u044C\u0441\u0442\u0432\u0438\u044F!</p>":e==="en"?"<p>A can and a bottle of <br /><span class='font-roxbor italic text-c-black'>lightning</span> energy.<br />It\u2019s powerful yet very <br />light. Just for alternative <br />taste seekers.</p>":"<p class='text-custom-gray'><span class='font-roxbor italic text-c-black'>G\xFC\xFD\xE7li</span>, \xFD\xF6ne \u015Fol bir wagty\u0148 <br />\xF6z\xFCnde-de myla\xFDym.<br />Isle gapda, isle \xE7\xFC\xFD\u015Fede. <br />Alternatiw lezzet isle\xFD\xE4nler \xFC\xE7in <br />adatdan da\u015Fary energi\xFDa!</p>"},{isImage:!0,url:new URL("assets/lightEdition2.9d2e37a6.png",self.location).href},{isImage:!0,url:new URL("assets/lightedition.d28980c5.jpg",self.location).href},{content:e==="ru"?"<p class='text-custom-gray'><span class='font-playfair italic text-c-black'>\u0421\u0438\u043B\u044C\u043D\u044B\u0439</span> \u0438 \u0432 \u0442\u043E\u0436\u0435 \u0432\u0440\u0435\u043C\u044F \u043D\u0435\u0436\u043D\u044B\u0439. <br />\u0425\u043E\u0447\u0435\u0448\u044C \u0432 \u0430\u043B\u044E\u043C\u0438\u043D\u0438\u0435\u0432\u043E\u0439 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0435, <br />\u0445\u043E\u0447\u0435\u0448\u044C \u0432 \u043F\u043B\u0430\u0441\u0442\u0438\u043A\u043E\u0432\u043E\u0439. <br />\u041D\u0435\u043E\u0431\u044B\u043A\u043D\u043E\u0432\u0435\u043D\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u0434\u043B\u044F \u043B\u044E\u0431\u0438\u0442\u0435\u043B\u0435\u0439 <br />\u0430\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u0443\u0434\u043E\u0432\u043E\u043B\u044C\u0441\u0442\u0432\u0438\u044F!</p>":e==="en"?"<p>A can and a bottle of <br /><span class='font-roxbor italic text-c-black'>lightning</span> energy.<br />It\u2019s powerful yet very <br />light. Just for alternative <br />taste seekers.</p>":"<p class='text-custom-gray'><span class='font-roxbor italic text-c-black'>G\xFC\xFD\xE7li</span>, \xFD\xF6ne \u015Fol bir wagty\u0148 <br />\xF6z\xFCnde-de myla\xFDym.<br />Isle gapda, isle \xE7\xFC\xFD\u015Fede. <br />Alternatiw lezzet isle\xFD\xE4nler \xFC\xE7in <br />adatdan da\u015Fary energi\xFDa!</p>"},{isImage:!0,url:new URL("assets/lightEdition2.9d2e37a6.png",self.location).href}]):n=ke([{isImage:!0,url:new URL("assets/lightedition.4597b332.webp",self.location).href},{content:e==="ru"?"<p class='text-custom-gray'><span class='font-playfair italic text-c-black'>\u0421\u0438\u043B\u044C\u043D\u044B\u0439</span> \u0438 \u0432 \u0442\u043E\u0436\u0435 \u0432\u0440\u0435\u043C\u044F \u043D\u0435\u0436\u043D\u044B\u0439. <br />\u0425\u043E\u0447\u0435\u0448\u044C \u0432 \u0430\u043B\u044E\u043C\u0438\u043D\u0438\u0435\u0432\u043E\u0439 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0435, <br />\u0445\u043E\u0447\u0435\u0448\u044C \u0432 \u043F\u043B\u0430\u0441\u0442\u0438\u043A\u043E\u0432\u043E\u0439. <br />\u041D\u0435\u043E\u0431\u044B\u043A\u043D\u043E\u0432\u0435\u043D\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u0434\u043B\u044F \u043B\u044E\u0431\u0438\u0442\u0435\u043B\u0435\u0439 <br />\u0430\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u0443\u0434\u043E\u0432\u043E\u043B\u044C\u0441\u0442\u0432\u0438\u044F!</p>":e==="en"?"<p>A can and a bottle of <br /><span class='font-roxbor italic text-c-black'>lightning</span> energy.<br />It\u2019s powerful yet very <br />light. Just for alternative <br />taste seekers.</p>":"<p class='text-custom-gray'><span class='font-roxbor italic text-c-black'>G\xFC\xFD\xE7li</span>, \xFD\xF6ne \u015Fol bir wagty\u0148 <br />\xF6z\xFCnde-de myla\xFDym.<br />Isle gapda, isle \xE7\xFC\xFD\u015Fede. <br />Alternatiw lezzet isle\xFD\xE4nler \xFC\xE7in <br />adatdan da\u015Fary energi\xFDa!</p>"},{isImage:!0,url:new URL("assets/light2.e15c4a99.webp",self.location).href},{isImage:!0,url:new URL("assets/lightedition.4597b332.webp",self.location).href},{content:e==="ru"?"<p class='text-custom-gray'><span class='font-playfair italic text-c-black'>\u0421\u0438\u043B\u044C\u043D\u044B\u0439</span> \u0438 \u0432 \u0442\u043E\u0436\u0435 \u0432\u0440\u0435\u043C\u044F \u043D\u0435\u0436\u043D\u044B\u0439. <br />\u0425\u043E\u0447\u0435\u0448\u044C \u0432 \u0430\u043B\u044E\u043C\u0438\u043D\u0438\u0435\u0432\u043E\u0439 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0435, <br />\u0445\u043E\u0447\u0435\u0448\u044C \u0432 \u043F\u043B\u0430\u0441\u0442\u0438\u043A\u043E\u0432\u043E\u0439. <br />\u041D\u0435\u043E\u0431\u044B\u043A\u043D\u043E\u0432\u0435\u043D\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u0434\u043B\u044F \u043B\u044E\u0431\u0438\u0442\u0435\u043B\u0435\u0439 <br />\u0430\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u0443\u0434\u043E\u0432\u043E\u043B\u044C\u0441\u0442\u0432\u0438\u044F!</p>":e==="en"?"<p>A can and a bottle of <br /><span class='font-roxbor italic text-c-black'>lightning</span> energy.<br />It\u2019s powerful yet very <br />light. Just for alternative <br />taste seekers.</p>":"<p class='text-custom-gray'><span class='font-roxbor italic text-c-black'>G\xFC\xFD\xE7li</span>, \xFD\xF6ne \u015Fol bir wagty\u0148 <br />\xF6z\xFCnde-de myla\xFDym.<br />Isle gapda, isle \xE7\xFC\xFD\u015Fede. <br />Alternatiw lezzet isle\xFD\xE4nler \xFC\xE7in <br />adatdan da\u015Fary energi\xFDa!</p>"},{isImage:!0,url:new URL("assets/light2.e15c4a99.webp",self.location).href}]);const i=is(),s=ke(),o=ke(),a=ke(),l=ke(),c=ke(),h=ke(),d=ke();return Ut("blackEditionCans",l),Ut("lightEdition",h),Ut("cansWrapper",a),Ut("sliderWrapper",c),Ut("hs1",s),Ut("hs2",o),(u,f)=>(ye(),Me("div",null,[C("div",null,[Fe(cy,{ref_key:"hs1",ref:s},null,512)]),C("div",{ref_key:"cansWrapper",ref:a,class:"w-full"},[Fe(eh,{ref_key:"blackEditionCans",ref:l},null,512),Fe(My,{ref_key:"lightEdition",ref:h},null,512)],512),oe(i)?(ye(),Me("div",Ly,[Fe(Fl)])):Qo("",!0),oe(i)?Qo("",!0):(ye(),Me("div",{key:1,ref_key:"sliderWrapper",ref:c,class:"w-full"},[Fe(Cy,{ref_key:"slider",ref:d,imgs:oe(n)},null,8,["imgs"])],512))]))}};const Vs={setup(r,{expose:e}){const t=is(),n=ke(),i=ke();Jc(t,a=>{if(!a){n.value.classList.remove("mobile-animated");return}}),e({setAnimation:s,childRing:n});function s(a){i.value.addEventListener("animationend",()=>{n.value.classList.remove("mobile-animated")}),n.value.style.setProperty("--delay",a+"ms"),n.value.classList.add("mobile-animated")}function o(){if(t.value){i.value.removeEventListener("animationend",()=>{n.value.classList.remove("animated")}),i.value.removeEventListener("mouseover",()=>{n.value.classList.add("animated")});return}i.value.addEventListener("animationend",()=>{n.value.classList.remove("animated")}),i.value.addEventListener("mouseover",()=>{n.value.classList.add("animated")})}return tn(()=>{o()}),(a,l)=>(ye(),Me("div",{ref_key:"parentRing",ref:i,class:"border-custom-red-100 lg:border-[1.5vw] border-[2vw] rounded-full lg:w-[10.6vw] lg:h-[10.6vw] w-[14vw] h-[14vw] flex items-center justify-center"},[C("div",{ref_key:"childRing",ref:n,class:"lg:border-[1vw] lg:w-[7vw] lg:h-[7vw] border-[1.5vw] w-[9vw] h-[9vw] border-custom-red-100 rounded-full child-ring"},null,512)],512))}},Iy={class:"w-[100vw] min-h-screen flex items-center flex-wrap px-[4vw] py-[1vw]"},Dy={key:0},By={key:1},zy={key:2},Fy={key:3},Uy={setup(r){return(e,t)=>(ye(),Me("div",Iy,[(ye(),Me(wo,null,zl(32,(n,i)=>C("div",{key:i},[n!==32&&n%8===0?(ye(),Me("div",Dy,[Fe(Vs,{class:"mb-[1vw]"})])):n!==32&&n>24?(ye(),Me("div",By,[Fe(Vs,{class:"mr-[1vw]"})])):n!==32?(ye(),Me("div",zy,[Fe(Vs,{class:"mr-[1vw] mb-[1vw]"})])):(ye(),Me("div",Fy,[Fe(Vs)]))])),64))]))}},Ny={class:"w-[100vw]"},ky={class:"bg-c-black w-[100vw] h-screen"},Oy={setup(r,{expose:e}){const t=Xe("scrollWrapper"),n=Xe("eventBus"),i=Xe("main"),s=Xe("scalingCircle"),o=Xe("horizontalScroll2"),a=Xe("editions"),l=ke(),c=ke(),h=is();let d=null,u=null;function f(){d&&(d.kill(),d=null),u&&(u.kill(),u=null)}function g(){u&&u.refresh()}function v(){h.value||(f(),d=Et.to(c.value,{x:()=>-(c.value.offsetWidth-window.innerWidth)}),u=Bt.create({trigger:l.value,pin:!0,scrub:!0,start:1.5*i.value.$el.offsetHeight+s.value.$el.offsetHeight+window.innerHeight/2+s.value.$refs.mask.offsetHeight+o.value.$refs.story.$el.offsetWidth+o.value.$refs.story2.$el.offsetWidth+o.value.$refs.story3.$el.offsetWidth+o.value.$refs.blankSpace.offsetWidth+2*window.innerWidth+window.innerHeight+a.value.$refs.blackEditionCans.$el.offsetHeight+a.value.$refs.lightEdition.$el.offsetHeight+a.value.$refs.slider.$el.offsetHeight,end:c.value.offsetWidth+1.5*i.value.$el.offsetHeight+s.value.$el.offsetHeight+window.innerHeight/2+s.value.$refs.mask.offsetHeight+o.value.$refs.story.$el.offsetWidth+o.value.$refs.story2.$el.offsetWidth+o.value.$refs.story3.$el.offsetWidth+o.value.$refs.blankSpace.offsetWidth+2*a.value.$refs.hs1.$el.offsetWidth+window.innerHeight+a.value.$refs.lightEdition.$el.offsetHeight+a.value.$refs.blackEditionCans.$el.offsetHeight+a.value.$refs.sliderWrapper.offsetHeight,scroller:t.value,animation:d,invalidateOnRefresh:!0}))}function x(){g()}return tn(()=>{v(),n.on("wrapper-resize",x),x()}),un(()=>{f(),n.off("wrapper-resize",x)}),e({pinWrap:c}),(p,m)=>(ye(),Me("div",{ref_key:"sectionPin",ref:l,class:"min-h-screen overflow-hidden flex"},[C("div",{ref_key:"pinWrap",ref:c,class:"pin-wrap min-h-screen flex flex-col lg:flex-row justify-start lg:items-center"},[C("div",Ny,[Fe(Fl)]),C("div",ky,[Fe(Uy)])],512)],512))}};var Uc={exports:{}},Nc={exports:{}};(function(r){(function(e,t){r.exports?r.exports=t():e.EvEmitter=t()})(typeof window!="undefined"?window:Ul,function(){function e(){}let t=e.prototype;return t.on=function(n,i){if(!n||!i)return this;let s=this._events=this._events||{},o=s[n]=s[n]||[];return o.includes(i)||o.push(i),this},t.once=function(n,i){if(!n||!i)return this;this.on(n,i);let s=this._onceEvents=this._onceEvents||{},o=s[n]=s[n]||{};return o[i]=!0,this},t.off=function(n,i){let s=this._events&&this._events[n];if(!s||!s.length)return this;let o=s.indexOf(i);return o!=-1&&s.splice(o,1),this},t.emitEvent=function(n,i){let s=this._events&&this._events[n];if(!s||!s.length)return this;s=s.slice(0),i=i||[];let o=this._onceEvents&&this._onceEvents[n];for(let a of s)o&&o[a]&&(this.off(n,a),delete o[a]),a.apply(this,i);return this},t.allOff=function(){return delete this._events,delete this._onceEvents,this},e})})(Nc);/*!
 * imagesLoaded v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */(function(r){(function(e,t){r.exports?r.exports=t(e,Nc.exports):e.imagesLoaded=t(e,e.EvEmitter)})(typeof window!="undefined"?window:Ul,function(t,n){let i=t.jQuery,s=t.console;function o(u){return Array.isArray(u)?u:typeof u=="object"&&typeof u.length=="number"?[...u]:[u]}function a(u,f,g){if(!(this instanceof a))return new a(u,f,g);let v=u;if(typeof u=="string"&&(v=document.querySelectorAll(u)),!v){s.error(`Bad element for imagesLoaded ${v||u}`);return}this.elements=o(v),this.options={},typeof f=="function"?g=f:Object.assign(this.options,f),g&&this.on("always",g),this.getImages(),i&&(this.jqDeferred=new i.Deferred),setTimeout(this.check.bind(this))}a.prototype=Object.create(n.prototype),a.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)};const l=[1,9,11];a.prototype.addElementImages=function(u){u.nodeName==="IMG"&&this.addImage(u),this.options.background===!0&&this.addElementBackgroundImages(u);let{nodeType:f}=u;if(!f||!l.includes(f))return;let g=u.querySelectorAll("img");for(let v of g)this.addImage(v);if(typeof this.options.background=="string"){let v=u.querySelectorAll(this.options.background);for(let x of v)this.addElementBackgroundImages(x)}};const c=/url\((['"])?(.*?)\1\)/gi;a.prototype.addElementBackgroundImages=function(u){let f=getComputedStyle(u);if(!f)return;let g=c.exec(f.backgroundImage);for(;g!==null;){let v=g&&g[2];v&&this.addBackground(v,u),g=c.exec(f.backgroundImage)}},a.prototype.addImage=function(u){let f=new h(u);this.images.push(f)},a.prototype.addBackground=function(u,f){let g=new d(u,f);this.images.push(g)},a.prototype.check=function(){if(this.progressedCount=0,this.hasAnyBroken=!1,!this.images.length){this.complete();return}let u=(f,g,v)=>{setTimeout(()=>{this.progress(f,g,v)})};this.images.forEach(function(f){f.once("progress",u),f.check()})},a.prototype.progress=function(u,f,g){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!u.isLoaded,this.emitEvent("progress",[this,u,f]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,u),this.progressedCount===this.images.length&&this.complete(),this.options.debug&&s&&s.log(`progress: ${g}`,u,f)},a.prototype.complete=function(){let u=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(u,[this]),this.emitEvent("always",[this]),this.jqDeferred){let f=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[f](this)}};function h(u){this.img=u}h.prototype=Object.create(n.prototype),h.prototype.check=function(){if(this.getIsImageComplete()){this.confirm(this.img.naturalWidth!==0,"naturalWidth");return}this.proxyImage=new Image,this.img.crossOrigin&&(this.proxyImage.crossOrigin=this.img.crossOrigin),this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.currentSrc||this.img.src},h.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},h.prototype.confirm=function(u,f){this.isLoaded=u;let{parentNode:g}=this.img,v=g.nodeName==="PICTURE"?g:this.img;this.emitEvent("progress",[this,v,f])},h.prototype.handleEvent=function(u){let f="on"+u.type;this[f]&&this[f](u)},h.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},h.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},h.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)};function d(u,f){this.url=u,this.element=f,this.img=new Image}return d.prototype=Object.create(h.prototype),d.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(this.img.naturalWidth!==0,"naturalWidth"),this.unbindEvents())},d.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},d.prototype.confirm=function(u,f){this.isLoaded=u,this.emitEvent("progress",[this,this.element,f])},a.makeJQueryPlugin=function(u){u=u||t.jQuery,u&&(i=u,i.fn.imagesLoaded=function(f,g){return new a(this,f,g).jqDeferred.promise(i(this))})},a.makeJQueryPlugin(),a})})(Uc);var Hy=Uc.exports;const Vy=`varying vec2 vUv;\r
#define PI 3.1415926535897932384626433832795

uniform float uScrollSpeed;\r
uniform vec2 uViewportSizes;\r
uniform float uHoverState;\r
uniform vec2 uHover;\r
uniform float uTime;

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
attribute vec3 position;
attribute vec2 uv;


void main() {

    vec4 newPosition = modelViewMatrix * vec4(position, 1.0);

    float dist = distance(uv, uHover);

    newPosition.z += sin(newPosition.y / uViewportSizes.y * PI + PI / 2.0) * - (uScrollSpeed * 15.0);

    newPosition.z += (uHoverState * 6.0) * sin(dist * 10.0 + (uTime * 1.5));

    gl_Position = projectionMatrix * newPosition;

    vUv = uv;\r
}`,Gy=`
precision mediump float;
uniform sampler2D uImage;

varying vec2 vUv;

void main(){\r
    gl_FragColor=texture2D(uImage,vUv);\r
}`;class Wy{constructor(e){this.element=document.querySelector(".wave-pin"),this.viewport={width:window.innerWidth,height:window.innerHeight},this.locoScroll=e,this.locoSpeed=0,this.loader=new Cc,this.scrollSpeed=0,this.clock=new Bc,this.update=this.update.bind(this),this.allImages=[...document.querySelectorAll(".project__item__img")],this.loadedLength=0,this.maxPos=document.querySelector(".wave-slider").getBoundingClientRect().height,this.minPos=0,this.mouse=new Q,this.raycaster=new vv,this.resize=this.onResize.bind(this),this.wheel=this.onWheel.bind(this);const t=new Promise(n=>{Hy(document.querySelectorAll(".project__item__img"),{background:!0},n)});this.imagesGroup=new gi,Promise.all([t]).then(()=>{this.init()})}init(){this.addCanvas(),this.addScene(),this.addCamera(),this.setLocoSpeed(),this.addImages(),this.setImagesPositions(),this.onResize(),this.addEventListeners(),this.update()}setLocoSpeed(){this.locoScroll.on("scroll",e=>{this.locoSpeed=e.speed})}remove(){this.removeEventListeners(),window.cancelAnimationFrame(this.animationFrame),this.element.removeChild(this.canvas),this.camera=null,this.scene=null,this.canvas=null,this.renderer=null,this.material=null,this.imagesGroup=null,this.imageStore=null}addCanvas(){this.renderer=new $e({antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.canvas=this.renderer.domElement,this.canvas.classList.add("webgl"),this.element.appendChild(this.canvas)}addScene(){this.scene=new lr}addCamera(){this.camera=new bt(70,this.viewport.width/this.viewport.height,100,2e3),this.scene.add(this.camera)}addImages(){this.imagesGroup.clear(),this.material=new dr({uniforms:{uTime:{value:0},uImage:{value:0},uHover:{value:new Q(.5,.5)},uHoverState:{value:0},uScrollSpeed:{value:this.scrollSpeed},uViewportSizes:{value:new Q(this.viewport.width,this.viewport.height)}},fragmentShader:Gy,vertexShader:Vy}),this.materials=[],this.imageStore=this.allImages.map((e,t)=>{let n=e.getBoundingClientRect(),i=new or(500,500*n.height/n.width,16,16),s=this.loader.load(e.src);s.needsUpdate=!0;let o=this.material.clone();this.materials.push(o),o.uniforms.uImage.value=s;let a=new Mt(i,o);this.imagesGroup.add(a);let l=this.viewport.width/20,c=this.viewport.height/20;const h=window.innerHeight/2;let d=[{top:h,left:300},{top:h,left:window.innerWidth-300-l},{top:h+window.innerHeight,left:window.innerWidth/2-l/2},{top:h+window.innerHeight*2,left:window.innerWidth-300-l},{top:h+window.innerHeight*2,left:300},{top:h+window.innerHeight*3,left:window.innerWidth/2-l/2},{top:h+window.innerHeight*4,left:300},{top:h+window.innerHeight*4,left:window.innerWidth-300-l},{top:h+window.innerHeight*5,left:window.innerWidth/2-l/2},{top:h+window.innerHeight*6,left:300},{top:h+window.innerHeight*6,left:window.innerWidth-300-l},{top:h+window.innerHeight*7,left:window.innerWidth/2-l/2},{top:h+window.innerHeight*8,left:300},{top:h+window.innerHeight*8,left:window.innerWidth-300-l},{top:h+window.innerHeight*9,left:window.innerWidth/2-l/2}];return{img:e,mesh:a,top:d[t].top,left:d[t].left,width:l,height:c}})}setImagesPositions(){this.scene.add(this.imagesGroup),this.imageStore.forEach(e=>{const t=-e.top-document.querySelector(".wave-wrapper").getBoundingClientRect().top-this.viewport.height/2-e.height/2,n=e.left-this.viewport.width/2+e.width/2;e.mesh.position.y=t,e.mesh.position.x=n})}onWheel(){this.scrollSpeed=-this.locoSpeed/5}addEventListeners(){window.addEventListener("resize",this.resize),window.addEventListener("wheel",this.wheel,{passive:!0})}removeEventListeners(){window.removeEventListener("resize",this.resize),window.removeEventListener("wheel",this.wheel,{passive:!0})}onResize(){this.viewport={width:window.innerWidth,height:window.innerHeight},this.camera.position.z=700,this.camera.fov=2*Math.atan(this.viewport.height/2/this.camera.position.z)*(180/Math.PI),this.camera.aspect=this.viewport.width/this.viewport.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.viewport.width,this.viewport.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.addImages(),this.setImagesPositions()}update(){const e=this.clock.getElapsedTime();this.materials.forEach(t=>{t.uniforms.uTime.value=e,t.uniforms.uScrollSpeed.value=this.scrollSpeed}),this.setImagesPositions(),this.render(),this.animationFrame=window.requestAnimationFrame(this.update)}render(){this.renderer.render(this.scene,this.camera)}}const qy={class:"wave-slider wave-wrapper w-full bg-c-black"},jy=C("br",null,null,-1),Xy=C("span",{class:"font-roxbor"},"Space",-1),Yy={class:"flex justify-center w-full mt-10"},Jy={href:"https://www.facebook.com/bold.drink",class:"w-[0.95vw]"},Qy={href:"https://www.instagram.com/bold.drinks",class:"w-[1.8vw] ml-4.5"},$y={href:"https://tiktok.com/@bold.drinks",class:"w-[1.6vw] ml-4"},Zy={href:"https://www.youtube.com/channel/UCb6fbDeE0chj6pRF8FsZ3mQ",class:"w-[2.1vw] ml-4"},Ky={class:"absolute left-0 top-0 w-1 h-1 z-1 opacity-0 pointer-events-none"},ew=["src"],tw=["src"],nw=["src"],iw=["src"],sw=["src"],rw=["src"],ow=["src"],aw=["src"],lw=["src"],cw=["src"],hw=["src"],uw=["src"],dw=["src"],fw=["src"],pw=["src"],mw={setup(r){const e=On(),t=ke(),n=ke();let i,s,o,a,l,c,h,d,u,f,g,v,x,p,m;e?(i=new URL("assets/1.e9a1140c.jpg",self.location).href,s=new URL("assets/2.f89a49ed.jpg",self.location).href,o=new URL("assets/3.6e154453.jpg",self.location).href,a=new URL("assets/4.8ade7363.jpg",self.location).href,l=new URL("assets/5.32aff663.jpg",self.location).href,c=new URL("assets/6.ce0d6e67.jpg",self.location).href,h=new URL("assets/7.09628d27.jpg",self.location).href,d=new URL("assets/8.0b7216f7.jpg",self.location).href,u=new URL("assets/9.cc9367ce.jpg",self.location).href,f=new URL("assets/10.9af18c5c.jpg",self.location).href,g=new URL("assets/11.2412f427.jpg",self.location).href,v=new URL("assets/12.b30c0311.jpg",self.location).href,x=new URL("assets/13.fee9e7b9.jpg",self.location).href,p=new URL("assets/14.80288b10.jpg",self.location).href,m=new URL("assets/15.dbc7154a.jpg",self.location).href):(i=new URL("assets/1.dec50dc2.webp",self.location).href,s=new URL("assets/2.67223983.webp",self.location).href,o=new URL("assets/3.83a7f007.webp",self.location).href,a=new URL("assets/4.04975da7.webp",self.location).href,l=new URL("assets/5.15a66f4d.webp",self.location).href,c=new URL("assets/6.8df6178f.webp",self.location).href,h=new URL("assets/7.e49539af.webp",self.location).href,d=new URL("assets/8.f030292c.webp",self.location).href,u=new URL("assets/9.628146a9.webp",self.location).href,f=new URL("assets/10.9e632d21.webp",self.location).href,g=new URL("assets/11.9ca0700b.webp",self.location).href,v=new URL("assets/12.dc6697e5.webp",self.location).href,x=new URL("assets/13.029a444f.webp",self.location).href,p=new URL("assets/14.f65ecaf0.webp",self.location).href,m=new URL("assets/15.f18df144.webp",self.location).href);const A=Xe("scrollWrapper"),b=Xe("scroller"),w=Xe("eventBus"),L=ke();let P=null,W=null;function ne(){P&&(P.kill(),P=null),W&&(W.remove(),W=null)}function O(){P&&P.refresh()}function _(){ne();let I=null;I=Et.to(".bold",{x:t.value.clientWidth/2-n.value.clientWidth/2+10}),W=new Wy(b.value),P=Bt.create({trigger:L.value,pin:!0,start:`${1.8*window.innerHeight} top`,end:"1150%",scroller:A.value,onLeaveBack:()=>{I.reverse()},animation:I,invalidateOnRefresh:!0})}function T(){O()}return tn(()=>{_(),w.on("wrapper-resize",T),T()}),un(()=>{ne(),w.off("wrapper-resize",T)}),(I,F)=>(ye(),Me("div",null,[C("div",qy,[C("div",{ref_key:"wavePin",ref:L,class:"wave-pin z-2 w-full text-white flex items-center justify-center h-screen"},[C("h1",{ref_key:"boldText",ref:t,class:"absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold uppercase text-[9vw] leading-[1]"},[C("span",{ref_key:"boldFirst",ref:n,class:"absolute font-corsa bold"}," Bold ",512),jy,Xy,C("div",Yy,[C("a",Jy,[Fe(th)]),C("a",Qy,[Fe(nh)]),C("a",$y,[Fe(ih)]),C("a",Zy,[Fe(sh)])])],512),C("div",Ky,[C("img",{src:oe(i),alt:"Image of the sea",class:"project__item__img"},null,8,ew),C("img",{src:oe(s),alt:"Skater",class:"project__item__img"},null,8,tw),C("img",{src:oe(o),alt:"Abstract night",class:"project__item__img"},null,8,nw),C("img",{src:oe(a),alt:"Some image",class:"project__item__img"},null,8,iw),C("img",{src:oe(l),alt:"Sea",class:"project__item__img"},null,8,sw),C("img",{src:oe(c),alt:"Mens facing the ocean",class:"project__item__img"},null,8,rw),C("img",{src:oe(h),alt:"Mens facing the ocean",class:"project__item__img"},null,8,ow),C("img",{src:oe(d),alt:"Mens facing the ocean",class:"project__item__img"},null,8,aw),C("img",{src:oe(u),alt:"Mens facing the ocean",class:"project__item__img"},null,8,lw),C("img",{src:oe(f),alt:"Mens facing the ocean",class:"project__item__img"},null,8,cw),C("img",{src:oe(g),alt:"Mens facing the ocean",class:"project__item__img"},null,8,hw),C("img",{src:oe(v),alt:"Mens facing the ocean",class:"project__item__img"},null,8,uw),C("img",{src:oe(x),alt:"Mens facing the ocean",class:"project__item__img"},null,8,dw),C("img",{src:oe(p),alt:"Mens facing the ocean",class:"project__item__img"},null,8,fw),C("img",{src:oe(m),alt:"Mens facing the ocean",class:"project__item__img"},null,8,pw)])],512)])]))}},ww={emits:["activate"],setup(r,{emit:e}){const t=Qc(()=>qc(()=>import("./index.d63f1218.js").then(function(x){return x.i}),["assets/index.d63f1218.js","assets/index.197fc48b.css","assets/vendor.83e2b7bc.js"])),n=$c(),i=Zc(),s=ke(),o=ke(),a=ke(),l=ke(),c=ke(),h=ke(),d=ke();let u,f;Ut("main",o),Ut("horizontalScroll2",a),Ut("scalingCircle",l),Ut("editions",c);const g=Xe("scroller");g.value.on("scroll",x=>{d.value=x.speed}),n.afterEach((x,p)=>{v(x.hash,p.hash)});function v(x,p,m=!0){Bl(()=>{if(x==="#story"&&o.value){let A=1.5*o.value.$el.offsetHeight+.5*window.innerWidth+100;(p==="#bold-space"||p==="#editions")&&(A=o.value.$el.offsetHeight+.5*window.innerWidth+100),p==="#story"&&(A=window.innerWidth+100),g.value.scrollTo(o.value.$el,{duration:0,offset:A,disableLerp:!0})}x==="#bold-space"&&s.value&&g.value.scrollTo(s.value.$el,{duration:0,disableLerp:!0}),x==="#editions"&&c.value&&(g.value.scrollTo(c.value.$el,{duration:0,disableLerp:m,callback:()=>{g.value.stop(),setTimeout(()=>g.value.start(),1e3)}}),c.value.$refs.hs1.animate()),x===""&&(g.value.scrollTo("top",{duration:0,disableLerp:!0}),o.value&&o.value.reverse())})}return tn(()=>{u=new IntersectionObserver(x=>{x.forEach(p=>{p.isIntersecting&&e("activate","editions"),!p.isIntersecting&&d.value<0&&e("activate","story")})}),f=new IntersectionObserver(x=>{x.forEach(p=>{p.isIntersecting&&e("activate","bold-space"),!p.isIntersecting&&d.value<0&&e("activate","editions")})}),u.observe(l.value.$el),f.observe(s.value.$el),setTimeout(()=>{v(i.hash)},50)}),un(()=>{f.unobserve(c.value.$el),u.unobserve(s.value.$el),f.disconnect(),u.disconnect()}),(x,p)=>(ye(),Me("div",null,[Fe(tx,{ref_key:"main",ref:o},null,512),Fe(I0,{onActivate:p[0]||(p[0]=m=>e("activate",m)),ref_key:"horizontalScroll2",ref:a},null,512),Fe(X0,{ref_key:"scalingCircle",ref:l},null,512),Fe(Py,{ref_key:"editions",ref:c},null,512),Fe(Oy,{ref_key:"horizontallScroll3",ref:h},null,512),Fe(mw,{ref_key:"boldGallery",ref:s},null,512),Fe(oe(t))]))}};export{ww as default};
