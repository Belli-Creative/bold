import{o as At,c as Nt,A as Ac,G as Pt,r as Ct,l as Ji,s as Ki,a as pe,d as ot,e as Cc,h as ke,j as ir,x as rn,p as nn,S as pn,b as Lc,H as Rc,F as Pc,B as Oi,I as yl,J as wl,K as Ml,z as No}from"./vendor.4d2db35e.js";import{_ as so,u as bl,N as Nr}from"./index.f197b5a6.js";import{B as Dc,a as Ic,b as Bc}from"./BoldStory3.1051805d.js";import{i as ai}from"./v-lazy-image.3e622f19.js";import Fc from"./index.6def3210.js";/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oo="138",zc=0,Uo=1,Nc=2,Sl=1,Uc=2,zi=3,Gi=0,st=1,di=2,El=1,mn=0,li=1,Oo=2,Ho=3,Vo=4,Oc=5,ni=100,Hc=101,Vc=102,Go=103,ko=104,Gc=200,kc=201,Wc=202,qc=203,Tl=204,Al=205,Xc=206,jc=207,Zc=208,Yc=209,Jc=210,Kc=0,Qc=1,$c=2,qs=3,eh=4,th=5,nh=6,ih=7,Wr=0,rh=1,sh=2,gn=0,oh=1,ah=2,lh=3,ch=4,hh=5,Cl=300,fi=301,pi=302,Xs=303,js=304,qr=306,ao=307,Zs=1e3,Ut=1001,Ys=1002,ht=1003,Wo=1004,qo=1005,gt=1006,uh=1007,Xr=1008,Pn=1009,dh=1010,fh=1011,ki=1012,ph=1013,zr=1014,Ln=1015,ci=1016,mh=1017,gh=1018,hi=1020,xh=1021,vh=1022,Mt=1023,_h=1024,yh=1025,Rn=1026,mi=1027,wh=1028,Mh=1029,bh=1030,Sh=1031,Eh=1033,rs=33776,ss=33777,os=33778,as=33779,Xo=35840,jo=35841,Zo=35842,Yo=35843,Th=36196,Jo=37492,Ko=37496,Qo=37808,$o=37809,ea=37810,ta=37811,na=37812,ia=37813,ra=37814,sa=37815,oa=37816,aa=37817,la=37818,ca=37819,ha=37820,ua=37821,da=36492,Ah=2200,Ch=2201,Lh=2202,Ur=2300,Or=2301,ls=2302,ii=2400,ri=2401,Hr=2402,lo=2500,Ll=2501,Rh=0,_n=3e3,Ke=3001,Ph=3200,Dh=3201,vi=0,Ih=1,cs=7680,Bh=519,Wi=35044,Vr=35048,fa="300 es",Js=1035;class Dn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const dt=[];for(let s=0;s<256;s++)dt[s]=(s<16?"0":"")+s.toString(16);const hs=Math.PI/180,Ks=180/Math.PI;function Xt(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dt[s&255]+dt[s>>8&255]+dt[s>>16&255]+dt[s>>24&255]+"-"+dt[e&255]+dt[e>>8&255]+"-"+dt[e>>16&15|64]+dt[e>>24&255]+"-"+dt[t&63|128]+dt[t>>8&255]+"-"+dt[t>>16&255]+dt[t>>24&255]+dt[n&255]+dt[n>>8&255]+dt[n>>16&255]+dt[n>>24&255]).toUpperCase()}function Tt(s,e,t){return Math.max(e,Math.min(t,s))}function Fh(s,e){return(s%e+e)%e}function us(s,e,t){return(1-t)*s+t*e}function pa(s){return(s&s-1)===0&&s!==0}function Qs(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}class K{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}K.prototype.isVector2=!0;class ft{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=i[0],_=i[3],m=i[6],p=i[1],T=i[4],M=i[7],w=i[2],L=i[5],R=i[8];return r[0]=o*x+a*p+c*w,r[3]=o*_+a*T+c*L,r[6]=o*m+a*M+c*R,r[1]=l*x+h*p+u*w,r[4]=l*_+h*T+u*L,r[7]=l*m+h*M+u*R,r[2]=d*x+f*p+g*w,r[5]=d*_+f*T+g*L,r[8]=d*m+f*M+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=u*x,e[1]=(i*l-h*n)*x,e[2]=(a*n-i*o)*x,e[3]=d*x,e[4]=(h*t-i*c)*x,e[5]=(i*r-a*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],o=i[3],a=i[6],c=i[1],l=i[4],h=i[7];return i[0]=t*r+n*c,i[3]=t*o+n*l,i[6]=t*a+n*h,i[1]=-n*r+t*c,i[4]=-n*o+t*l,i[7]=-n*a+t*h,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}ft.prototype.isMatrix3=!0;function Rl(s){for(let e=s.length-1;e>=0;--e)if(s[e]>65535)return!0;return!1}function qi(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}const Pl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bt={h:0,s:0,l:0},rr={h:0,s:0,l:0};function ds(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function ui(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function fs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}class me{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=Fh(e,1),t=Tt(t,0,1),n=Tt(n,0,1),t===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+t):n+t-n*t,r=2*n-i;this.r=ds(r,i,e+1/3),this.g=ds(r,i,e),this.b=ds(r,i,e-1/3)}return this}setStyle(e){function t(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let i;const r=n[1],o=n[2];switch(r){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,t(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,t(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const a=parseFloat(i[1])/360,c=parseInt(i[2],10)/100,l=parseInt(i[3],10)/100;return t(i[4]),this.setHSL(a,c,l)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=n[1],r=i.length;if(r===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(r===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=Pl[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ui(e.r),this.g=ui(e.g),this.b=ui(e.b),this}copyLinearToSRGB(e){return this.r=fs(e.r),this.g=fs(e.g),this.b=fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){const t=this.r,n=this.g,i=this.b,r=Math.max(t,n,i),o=Math.min(t,n,i);let a,c;const l=(o+r)/2;if(o===r)a=0,c=0;else{const h=r-o;switch(c=l<=.5?h/(r+o):h/(2-r-o),r){case t:a=(n-i)/h+(n<i?6:0);break;case n:a=(i-t)/h+2;break;case i:a=(t-n)/h+4;break}a/=6}return e.h=a,e.s=c,e.l=l,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,n){return this.getHSL(Bt),Bt.h+=e,Bt.s+=t,Bt.l+=n,this.setHSL(Bt.h,Bt.s,Bt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bt),e.getHSL(rr);const n=us(Bt.h,rr.h,t),i=us(Bt.s,rr.s,t),r=us(Bt.l,rr.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}me.NAMES=Pl;me.prototype.isColor=!0;me.prototype.r=1;me.prototype.g=1;me.prototype.b=1;let Un;class In{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Un===void 0&&(Un=qi("canvas")),Un.width=e.width,Un.height=e.height;const n=Un.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Un}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=qi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ui(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ui(t[n]/255)*255):t[n]=ui(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Dl{constructor(e=null){this.uuid=Xt(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(ps(i[o].image)):r.push(ps(i[o]))}else r=ps(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function ps(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?In.getDataURL(s):s.data?{data:Array.prototype.slice.call(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}Dl.prototype.isSource=!0;let zh=0;class ut extends Dn{constructor(e=ut.DEFAULT_IMAGE,t=ut.DEFAULT_MAPPING,n=Ut,i=Ut,r=gt,o=Xr,a=Mt,c=Pn,l=1,h=_n){super();Object.defineProperty(this,"id",{value:zh++}),this.uuid=Xt(),this.name="",this.source=new Dl(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new K(0,0),this.repeat=new K(1,1),this.center=new K(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zs:e.x=e.x-Math.floor(e.x);break;case Ut:e.x=e.x<0?0:1;break;case Ys:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zs:e.y=e.y-Math.floor(e.y);break;case Ut:e.y=e.y<0?0:1;break;case Ys:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}ut.DEFAULT_IMAGE=null;ut.DEFAULT_MAPPING=Cl;ut.prototype.isTexture=!0;class qe{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],x=c[2],_=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-_)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+_)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,M=(f+1)/2,w=(m+1)/2,L=(h+d)/4,R=(u+x)/4,j=(g+_)/4;return T>M&&T>w?T<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=L/n,r=R/n):M>w?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=L/i,r=j/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=R/r,i=j/r),this.set(n,i,r,t),this}let p=Math.sqrt((_-g)*(_-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(p)<.001&&(p=1),this.x=(_-g)/p,this.y=(u-x)/p,this.z=(d-h)/p,this.w=Math.acos((l+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}qe.prototype.isVector4=!0;class Lt extends Dn{constructor(e,t,n={}){super();this.width=e,this.height=t,this.depth=1,this.scissor=new qe(0,0,e,t),this.scissorTest=!1,this.viewport=new qe(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new ut(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:gt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image=Object.assign({},e.texture.image),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}Lt.prototype.isWebGLRenderTarget=!0;class jr extends ut{constructor(e=null,t=1,n=1,i=1){super(null);this.image={data:e,width:t,height:n,depth:i},this.magFilter=ht,this.minFilter=ht,this.wrapR=Ut,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}jr.prototype.isDataArrayTexture=!0;class Nh extends Lt{constructor(e,t,n){super(e,t);this.depth=n,this.texture=new jr(null,e,t,n),this.texture.isRenderTargetTexture=!0}}Nh.prototype.isWebGLArrayRenderTarget=!0;class co extends ut{constructor(e=null,t=1,n=1,i=1){super(null);this.image={data:e,width:t,height:n,depth:i},this.magFilter=ht,this.minFilter=ht,this.wrapR=Ut,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}co.prototype.isData3DTexture=!0;class Uh extends Lt{constructor(e,t,n){super(e,t);this.depth=n,this.texture=new co(null,e,t,n),this.texture.isRenderTargetTexture=!0}}Uh.prototype.isWebGL3DRenderTarget=!0;class Oh extends Lt{constructor(e,t,n,i={}){super(e,t,i);const r=this.texture;this.texture=[];for(let o=0;o<n;o++)this.texture[o]=r.clone(),this.texture[o].isRenderTargetTexture=!0}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.texture.length;i<r;i++)this.texture[i].image.width=e,this.texture[i].image.height=t,this.texture[i].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone();return this}}Oh.prototype.isWebGLMultipleRenderTargets=!0;class bt{constructor(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(u!==x||c!==d||l!==f||h!==g){let _=1-a;const m=c*d+l*f+h*g+u*x,p=m>=0?1:-1,T=1-m*m;if(T>Number.EPSILON){const w=Math.sqrt(T),L=Math.atan2(w,m*p);_=Math.sin(_*L)/w,a=Math.sin(a*L)/w}const M=a*p;if(c=c*_+d*M,l=l*_+f*M,h=h*_+g*M,u=u*_+x*M,_===1-a){const w=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=w,l*=w,h*=w,u*=w}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),f=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}bt.prototype.isQuaternion=!0;class E{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(ma.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ma.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*i-a*n,h=c*n+a*t-r*i,u=c*i+r*n-o*t,d=-r*t-o*n-a*i;return this.x=l*c+d*-r+h*-a-u*-o,this.y=h*c+d*-o+u*-r-l*-a,this.z=u*c+d*-a+l*-o-h*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ms.copy(this).projectOnVector(e),this.sub(ms)}reflect(e){return this.sub(ms.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}E.prototype.isVector3=!0;const ms=new E,ma=new bt;class Ht{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.length;c<l;c+=3){const h=e[c],u=e[c+1],d=e[c+2];h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>r&&(r=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.count;c<l;c++){const h=e.getX(c),u=e.getY(c),d=e.getZ(c);h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>r&&(r=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)Sn.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Sn)}else n.boundingBox===null&&n.computeBoundingBox(),gs.copy(n.boundingBox),gs.applyMatrix4(e.matrixWorld),this.union(gs);const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ci),sr.subVectors(this.max,Ci),On.subVectors(e.a,Ci),Hn.subVectors(e.b,Ci),Vn.subVectors(e.c,Ci),on.subVectors(Hn,On),an.subVectors(Vn,Hn),En.subVectors(On,Vn);let t=[0,-on.z,on.y,0,-an.z,an.y,0,-En.z,En.y,on.z,0,-on.x,an.z,0,-an.x,En.z,0,-En.x,-on.y,on.x,0,-an.y,an.x,0,-En.y,En.x,0];return!xs(t,On,Hn,Vn,sr)||(t=[1,0,0,0,1,0,0,0,1],!xs(t,On,Hn,Vn,sr))?!1:(or.crossVectors(on,an),t=[or.x,or.y,or.z],xs(t,On,Hn,Vn,sr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Sn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}Ht.prototype.isBox3=!0;const Yt=[new E,new E,new E,new E,new E,new E,new E,new E],Sn=new E,gs=new Ht,On=new E,Hn=new E,Vn=new E,on=new E,an=new E,En=new E,Ci=new E,sr=new E,or=new E,Tn=new E;function xs(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Tn.fromArray(s,r);const a=i.x*Math.abs(Tn.x)+i.y*Math.abs(Tn.y)+i.z*Math.abs(Tn.z),c=e.dot(Tn),l=t.dot(Tn),h=n.dot(Tn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Hh=new Ht,ga=new E,ar=new E,vs=new E;class _i{constructor(e=new E,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Hh.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){vs.subVectors(e,this.center);const t=vs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(vs.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?ar.set(0,0,1).multiplyScalar(e.radius):ar.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(ga.copy(e.center).add(ar)),this.expandByPoint(ga.copy(e.center).sub(ar)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jt=new E,_s=new E,lr=new E,ln=new E,ys=new E,cr=new E,ws=new E;class yi{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jt.copy(this.direction).multiplyScalar(t).add(this.origin),Jt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){_s.copy(e).add(t).multiplyScalar(.5),lr.copy(t).sub(e).normalize(),ln.copy(this.origin).sub(_s);const r=e.distanceTo(t)*.5,o=-this.direction.dot(lr),a=ln.dot(this.direction),c=-ln.dot(lr),l=ln.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(lr).multiplyScalar(d).add(_s),f}intersectSphere(e,t){Jt.subVectors(e.center,this.origin);const n=Jt.dot(this.direction),i=Jt.dot(Jt)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return a<0&&c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||n!==n)&&(n=r),(o<i||i!==i)&&(i=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Jt)!==null}intersectTriangle(e,t,n,i,r){ys.subVectors(t,e),cr.subVectors(n,e),ws.crossVectors(ys,cr);let o=this.direction.dot(ws),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ln.subVectors(this.origin,e);const c=a*this.direction.dot(cr.crossVectors(ln,cr));if(c<0)return null;const l=a*this.direction.dot(ys.cross(ln));if(l<0||c+l>o)return null;const h=-a*ln.dot(ws);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _e{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,o,a,c,l,h,u,d,f,g,x,_){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=x,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _e().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Gn.setFromMatrixColumn(e,0).length(),r=1/Gn.setFromMatrixColumn(e,1).length(),o=1/Gn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d-x*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vh,e,Gh)}lookAt(e,t,n){const i=this.elements;return St.subVectors(e,t),St.lengthSq()===0&&(St.z=1),St.normalize(),cn.crossVectors(n,St),cn.lengthSq()===0&&(Math.abs(n.z)===1?St.x+=1e-4:St.z+=1e-4,St.normalize(),cn.crossVectors(n,St)),cn.normalize(),hr.crossVectors(St,cn),i[0]=cn.x,i[4]=hr.x,i[8]=St.x,i[1]=cn.y,i[5]=hr.y,i[9]=St.y,i[2]=cn.z,i[6]=hr.z,i[10]=St.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],_=n[10],m=n[14],p=n[3],T=n[7],M=n[11],w=n[15],L=i[0],R=i[4],j=i[8],re=i[12],V=i[1],v=i[5],C=i[9],I=i[13],F=i[2],O=i[6],z=i[10],H=i[14],D=i[3],q=i[7],Q=i[11],J=i[15];return r[0]=o*L+a*V+c*F+l*D,r[4]=o*R+a*v+c*O+l*q,r[8]=o*j+a*C+c*z+l*Q,r[12]=o*re+a*I+c*H+l*J,r[1]=h*L+u*V+d*F+f*D,r[5]=h*R+u*v+d*O+f*q,r[9]=h*j+u*C+d*z+f*Q,r[13]=h*re+u*I+d*H+f*J,r[2]=g*L+x*V+_*F+m*D,r[6]=g*R+x*v+_*O+m*q,r[10]=g*j+x*C+_*z+m*Q,r[14]=g*re+x*I+_*H+m*J,r[3]=p*L+T*V+M*F+w*D,r[7]=p*R+T*v+M*O+w*q,r[11]=p*j+T*C+M*z+w*Q,r[15]=p*re+T*I+M*H+w*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],_=e[11],m=e[15];return g*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*f-n*c*f)+x*(+t*c*f-t*l*d+r*o*d-i*o*f+i*l*h-r*c*h)+_*(+t*l*u-t*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+m*(-i*a*h-t*c*u+t*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],_=e[14],m=e[15],p=u*_*l-x*d*l+x*c*f-a*_*f-u*c*m+a*d*m,T=g*d*l-h*_*l-g*c*f+o*_*f+h*c*m-o*d*m,M=h*x*l-g*u*l+g*a*f-o*x*f-h*a*m+o*u*m,w=g*u*c-h*x*c-g*a*d+o*x*d+h*a*_-o*u*_,L=t*p+n*T+i*M+r*w;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/L;return e[0]=p*R,e[1]=(x*d*r-u*_*r-x*i*f+n*_*f+u*i*m-n*d*m)*R,e[2]=(a*_*r-x*c*r+x*i*l-n*_*l-a*i*m+n*c*m)*R,e[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*f-n*c*f)*R,e[4]=T*R,e[5]=(h*_*r-g*d*r+g*i*f-t*_*f-h*i*m+t*d*m)*R,e[6]=(g*c*r-o*_*r-g*i*l+t*_*l+o*i*m-t*c*m)*R,e[7]=(o*d*r-h*c*r+h*i*l-t*d*l-o*i*f+t*c*f)*R,e[8]=M*R,e[9]=(g*u*r-h*x*r-g*n*f+t*x*f+h*n*m-t*u*m)*R,e[10]=(o*x*r-g*a*r+g*n*l-t*x*l-o*n*m+t*a*m)*R,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*f-t*a*f)*R,e[12]=w*R,e[13]=(h*x*i-g*u*i+g*n*d-t*x*d-h*n*_+t*u*_)*R,e[14]=(g*a*i-o*x*i-g*n*c+t*x*c+o*n*_-t*a*_)*R,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*d+t*a*d)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,x=o*h,_=o*u,m=a*u,p=c*l,T=c*h,M=c*u,w=n.x,L=n.y,R=n.z;return i[0]=(1-(x+m))*w,i[1]=(f+M)*w,i[2]=(g-T)*w,i[3]=0,i[4]=(f-M)*L,i[5]=(1-(d+m))*L,i[6]=(_+p)*L,i[7]=0,i[8]=(g+T)*R,i[9]=(_-p)*R,i[10]=(1-(d+x))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Gn.set(i[0],i[1],i[2]).length();const o=Gn.set(i[4],i[5],i[6]).length(),a=Gn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Ft.copy(this);const l=1/r,h=1/o,u=1/a;return Ft.elements[0]*=l,Ft.elements[1]*=l,Ft.elements[2]*=l,Ft.elements[4]*=h,Ft.elements[5]*=h,Ft.elements[6]*=h,Ft.elements[8]*=u,Ft.elements[9]*=u,Ft.elements[10]*=u,t.setFromRotationMatrix(Ft),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,c=2*r/(t-e),l=2*r/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i),d=-(o+r)/(o-r),f=-2*o*r/(o-r);return a[0]=c,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=l,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,r,o){const a=this.elements,c=1/(t-e),l=1/(n-i),h=1/(o-r),u=(t+e)*c,d=(n+i)*l,f=(o+r)*h;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}_e.prototype.isMatrix4=!0;const Gn=new E,Ft=new _e,Vh=new E(0,0,0),Gh=new E(1,1,1),cn=new E,hr=new E,St=new E,xa=new _e,va=new bt;class Bn{constructor(e=0,t=0,n=0,i=Bn.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Tt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return va.setFromEuler(this),this.setFromQuaternion(va,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}Bn.prototype.isEuler=!0;Bn.DefaultOrder="XYZ";Bn.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Il{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kh=0;const _a=new E,kn=new bt,Kt=new _e,ur=new E,Li=new E,Wh=new E,qh=new bt,ya=new E(1,0,0),wa=new E(0,1,0),Ma=new E(0,0,1),Xh={type:"added"},ba={type:"removed"};class We extends Dn{constructor(){super();Object.defineProperty(this,"id",{value:kh++}),this.uuid=Xt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=We.DefaultUp.clone();const e=new E,t=new Bn,n=new bt,i=new E(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new _e},normalMatrix:{value:new ft}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=We.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Il,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return kn.setFromAxisAngle(e,t),this.quaternion.multiply(kn),this}rotateOnWorldAxis(e,t){return kn.setFromAxisAngle(e,t),this.quaternion.premultiply(kn),this}rotateX(e){return this.rotateOnAxis(ya,e)}rotateY(e){return this.rotateOnAxis(wa,e)}rotateZ(e){return this.rotateOnAxis(Ma,e)}translateOnAxis(e,t){return _a.copy(e).applyQuaternion(this.quaternion),this.position.add(_a.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ya,e)}translateY(e){return this.translateOnAxis(wa,e)}translateZ(e){return this.translateOnAxis(Ma,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Kt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ur.copy(e):ur.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Li.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kt.lookAt(Li,ur,this.up):Kt.lookAt(ur,Li,this.up),this.quaternion.setFromRotationMatrix(Kt),i&&(Kt.extractRotation(i.matrixWorld),kn.setFromRotationMatrix(Kt),this.quaternion.premultiply(kn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Xh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ba)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(ba)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Kt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,e,Wh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,qh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}We.DefaultUp=new E(0,1,0);We.DefaultMatrixAutoUpdate=!0;We.prototype.isObject3D=!0;const zt=new E,Qt=new E,Ms=new E,$t=new E,Wn=new E,qn=new E,Sa=new E,bs=new E,Ss=new E,Es=new E;class rt{constructor(e=new E,t=new E,n=new E){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),zt.subVectors(e,t),i.cross(zt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){zt.subVectors(i,t),Qt.subVectors(n,t),Ms.subVectors(e,t);const o=zt.dot(zt),a=zt.dot(Qt),c=zt.dot(Ms),l=Qt.dot(Qt),h=Qt.dot(Ms),u=o*l-a*a;if(u===0)return r.set(-2,-1,-1);const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,$t),$t.x>=0&&$t.y>=0&&$t.x+$t.y<=1}static getUV(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,$t),c.set(0,0),c.addScaledVector(r,$t.x),c.addScaledVector(o,$t.y),c.addScaledVector(a,$t.z),c}static isFrontFacing(e,t,n,i){return zt.subVectors(n,t),Qt.subVectors(e,t),zt.cross(Qt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zt.subVectors(this.c,this.b),Qt.subVectors(this.a,this.b),zt.cross(Qt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return rt.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return rt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Wn.subVectors(i,n),qn.subVectors(r,n),bs.subVectors(e,n);const c=Wn.dot(bs),l=qn.dot(bs);if(c<=0&&l<=0)return t.copy(n);Ss.subVectors(e,i);const h=Wn.dot(Ss),u=qn.dot(Ss);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Wn,o);Es.subVectors(e,r);const f=Wn.dot(Es),g=qn.dot(Es);if(g>=0&&f<=g)return t.copy(r);const x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(qn,a);const _=h*g-f*u;if(_<=0&&u-h>=0&&f-g>=0)return Sa.subVectors(r,i),a=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(Sa,a);const m=1/(_+x+d);return o=x*m,a=d*m,t.copy(n).addScaledVector(Wn,o).addScaledVector(qn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let jh=0;class lt extends Dn{constructor(){super();Object.defineProperty(this,"id",{value:jh++}),this.uuid=Xt(),this.name="",this.type="Material",this.fog=!0,this.blending=li,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Tl,this.blendDst=Al,this.blendEquation=ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===El;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==li&&(n.blending=this.blending),this.side!==Gi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}lt.prototype.isMaterial=!0;lt.fromType=function(){return null};class Zr extends lt{constructor(e){super();this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Wr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Zr.prototype.isMeshBasicMaterial=!0;const Ze=new E,dr=new K;class at{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Wi,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),o=new me),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),o=new K),t[n++]=o.x,t[n++]=o.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),o=new E),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),o=new qe),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)dr.fromBufferAttribute(this,t),dr.applyMatrix3(e),this.setXY(t,dr.x,dr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ze.fromBufferAttribute(this,t),Ze.applyMatrix3(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ze.x=this.getX(t),Ze.y=this.getY(t),Ze.z=this.getZ(t),Ze.applyMatrix4(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ze.x=this.getX(t),Ze.y=this.getY(t),Ze.z=this.getZ(t),Ze.applyNormalMatrix(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ze.x=this.getX(t),Ze.y=this.getY(t),Ze.z=this.getZ(t),Ze.transformDirection(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wi&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}at.prototype.isBufferAttribute=!0;class Bl extends at{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Fl extends at{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Zh extends at{constructor(e,t,n){super(new Uint16Array(e),t,n)}}Zh.prototype.isFloat16BufferAttribute=!0;class nt extends at{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Yh=0;const Rt=new _e,Ts=new We,Xn=new E,Et=new Ht,Ri=new Ht,ct=new E;class Ye extends Dn{constructor(){super();Object.defineProperty(this,"id",{value:Yh++}),this.uuid=Xt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rl(e)?Fl:Bl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ft().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rt.makeRotationFromQuaternion(e),this.applyMatrix4(Rt),this}rotateX(e){return Rt.makeRotationX(e),this.applyMatrix4(Rt),this}rotateY(e){return Rt.makeRotationY(e),this.applyMatrix4(Rt),this}rotateZ(e){return Rt.makeRotationZ(e),this.applyMatrix4(Rt),this}translate(e,t,n){return Rt.makeTranslation(e,t,n),this.applyMatrix4(Rt),this}scale(e,t,n){return Rt.makeScale(e,t,n),this.applyMatrix4(Rt),this}lookAt(e){return Ts.lookAt(e),Ts.updateMatrix(),this.applyMatrix4(Ts.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xn).negate(),this.translate(Xn.x,Xn.y,Xn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new nt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ht);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Et.setFromBufferAttribute(r),this.morphTargetsRelative?(ct.addVectors(this.boundingBox.min,Et.min),this.boundingBox.expandByPoint(ct),ct.addVectors(this.boundingBox.max,Et.max),this.boundingBox.expandByPoint(ct)):(this.boundingBox.expandByPoint(Et.min),this.boundingBox.expandByPoint(Et.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _i);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new E,1/0);return}if(e){const n=this.boundingSphere.center;if(Et.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ri.setFromBufferAttribute(a),this.morphTargetsRelative?(ct.addVectors(Et.min,Ri.min),Et.expandByPoint(ct),ct.addVectors(Et.max,Ri.max),Et.expandByPoint(ct)):(Et.expandByPoint(Ri.min),Et.expandByPoint(Ri.max))}Et.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)ct.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(ct));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ct.fromBufferAttribute(a,l),c&&(Xn.fromBufferAttribute(e,l),ct.add(Xn)),i=Math.max(i,n.distanceToSquared(ct))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new at(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let V=0;V<a;V++)l[V]=new E,h[V]=new E;const u=new E,d=new E,f=new E,g=new K,x=new K,_=new K,m=new E,p=new E;function T(V,v,C){u.fromArray(i,V*3),d.fromArray(i,v*3),f.fromArray(i,C*3),g.fromArray(o,V*2),x.fromArray(o,v*2),_.fromArray(o,C*2),d.sub(u),f.sub(u),x.sub(g),_.sub(g);const I=1/(x.x*_.y-_.x*x.y);!isFinite(I)||(m.copy(d).multiplyScalar(_.y).addScaledVector(f,-x.y).multiplyScalar(I),p.copy(f).multiplyScalar(x.x).addScaledVector(d,-_.x).multiplyScalar(I),l[V].add(m),l[v].add(m),l[C].add(m),h[V].add(p),h[v].add(p),h[C].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let V=0,v=M.length;V<v;++V){const C=M[V],I=C.start,F=C.count;for(let O=I,z=I+F;O<z;O+=3)T(n[O+0],n[O+1],n[O+2])}const w=new E,L=new E,R=new E,j=new E;function re(V){R.fromArray(r,V*3),j.copy(R);const v=l[V];w.copy(v),w.sub(R.multiplyScalar(R.dot(v))).normalize(),L.crossVectors(j,v);const I=L.dot(h[V])<0?-1:1;c[V*4]=w.x,c[V*4+1]=w.y,c[V*4+2]=w.z,c[V*4+3]=I}for(let V=0,v=M.length;V<v;++V){const C=M[V],I=C.start,F=C.count;for(let O=I,z=I+F;O<z;O+=3)re(n[O+0]),re(n[O+1]),re(n[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new at(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new E,r=new E,o=new E,a=new E,c=new E,l=new E,h=new E,u=new E;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),x=e.getX(d+1),_=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,_),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,_),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(_,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const o=n[i].array,a=e.attributes[i],c=a.array,l=a.itemSize*t,h=Math.min(c.length,o.length-l);for(let u=0,d=l;u<h;u++,d++)o[d]=c[u]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ct.fromBufferAttribute(e,t),ct.normalize(),e.setXYZ(t,ct.x,ct.y,ct.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let x=0,_=c.length;x<_;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let m=0;m<h;m++)d[g++]=l[f++]}return new at(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ye,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}Ye.prototype.isBufferGeometry=!0;const Ea=new _e,jn=new yi,As=new _i,hn=new E,un=new E,dn=new E,Cs=new E,Ls=new E,Rs=new E,fr=new E,pr=new E,mr=new E,gr=new K,xr=new K,vr=new K,Ps=new E,_r=new E;class yt extends We{constructor(e=new Ye,t=new Zr){super();this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),As.copy(n.boundingSphere),As.applyMatrix4(r),e.ray.intersectsSphere(As)===!1)||(Ea.copy(r).invert(),jn.copy(e.ray).applyMatrix4(Ea),n.boundingBox!==null&&jn.intersectsBox(n.boundingBox)===!1))return;let o;if(n.isBufferGeometry){const a=n.index,c=n.attributes.position,l=n.morphAttributes.position,h=n.morphTargetsRelative,u=n.attributes.uv,d=n.attributes.uv2,f=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(i))for(let x=0,_=f.length;x<_;x++){const m=f[x],p=i[m.materialIndex],T=Math.max(m.start,g.start),M=Math.min(a.count,Math.min(m.start+m.count,g.start+g.count));for(let w=T,L=M;w<L;w+=3){const R=a.getX(w),j=a.getX(w+1),re=a.getX(w+2);o=yr(this,p,e,jn,c,l,h,u,d,R,j,re),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const x=Math.max(0,g.start),_=Math.min(a.count,g.start+g.count);for(let m=x,p=_;m<p;m+=3){const T=a.getX(m),M=a.getX(m+1),w=a.getX(m+2);o=yr(this,i,e,jn,c,l,h,u,d,T,M,w),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(i))for(let x=0,_=f.length;x<_;x++){const m=f[x],p=i[m.materialIndex],T=Math.max(m.start,g.start),M=Math.min(c.count,Math.min(m.start+m.count,g.start+g.count));for(let w=T,L=M;w<L;w+=3){const R=w,j=w+1,re=w+2;o=yr(this,p,e,jn,c,l,h,u,d,R,j,re),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const x=Math.max(0,g.start),_=Math.min(c.count,g.start+g.count);for(let m=x,p=_;m<p;m+=3){const T=m,M=m+1,w=m+2;o=yr(this,i,e,jn,c,l,h,u,d,T,M,w),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}yt.prototype.isMesh=!0;function Jh(s,e,t,n,i,r,o,a){let c;if(e.side===st?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side!==di,a),c===null)return null;_r.copy(a),_r.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(_r);return l<t.near||l>t.far?null:{distance:l,point:_r.clone(),object:s}}function yr(s,e,t,n,i,r,o,a,c,l,h,u){hn.fromBufferAttribute(i,l),un.fromBufferAttribute(i,h),dn.fromBufferAttribute(i,u);const d=s.morphTargetInfluences;if(r&&d){fr.set(0,0,0),pr.set(0,0,0),mr.set(0,0,0);for(let g=0,x=r.length;g<x;g++){const _=d[g],m=r[g];_!==0&&(Cs.fromBufferAttribute(m,l),Ls.fromBufferAttribute(m,h),Rs.fromBufferAttribute(m,u),o?(fr.addScaledVector(Cs,_),pr.addScaledVector(Ls,_),mr.addScaledVector(Rs,_)):(fr.addScaledVector(Cs.sub(hn),_),pr.addScaledVector(Ls.sub(un),_),mr.addScaledVector(Rs.sub(dn),_)))}hn.add(fr),un.add(pr),dn.add(mr)}s.isSkinnedMesh&&(s.boneTransform(l,hn),s.boneTransform(h,un),s.boneTransform(u,dn));const f=Jh(s,e,t,n,hn,un,dn,Ps);if(f){a&&(gr.fromBufferAttribute(a,l),xr.fromBufferAttribute(a,h),vr.fromBufferAttribute(a,u),f.uv=rt.getUV(Ps,hn,un,dn,gr,xr,vr,new K)),c&&(gr.fromBufferAttribute(c,l),xr.fromBufferAttribute(c,h),vr.fromBufferAttribute(c,u),f.uv2=rt.getUV(Ps,hn,un,dn,gr,xr,vr,new K));const g={a:l,b:h,c:u,normal:new E,materialIndex:0};rt.getNormal(hn,un,dn,g.normal),f.face=g}return f}class Qi extends Ye{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(u,2));function g(x,_,m,p,T,M,w,L,R,j,re){const V=M/R,v=w/j,C=M/2,I=w/2,F=L/2,O=R+1,z=j+1;let H=0,D=0;const q=new E;for(let Q=0;Q<z;Q++){const J=Q*v-I;for(let $=0;$<O;$++){const ve=$*V-C;q[x]=ve*p,q[_]=J*T,q[m]=F,l.push(q.x,q.y,q.z),q[x]=0,q[_]=0,q[m]=L>0?1:-1,h.push(q.x,q.y,q.z),u.push($/R),u.push(1-Q/j),H+=1}}for(let Q=0;Q<j;Q++)for(let J=0;J<R;J++){const $=d+J+O*Q,ve=d+J+O*(Q+1),Ue=d+(J+1)+O*(Q+1),we=d+(J+1)+O*Q;c.push($,ve,we),c.push(ve,Ue,we),D+=6}a.addGroup(f,D,re),f+=D,d+=H}}static fromJSON(e){return new Qi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gi(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function mt(s){const e={};for(let t=0;t<s.length;t++){const n=gi(s[t]);for(const i in n)e[i]=n[i]}return e}const Kh={clone:gi,merge:mt};var Qh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$h=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ot extends lt{constructor(e){super();this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Qh,this.fragmentShader=$h,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gi(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}Ot.prototype.isShaderMaterial=!0;class ho extends We{constructor(){super();this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}ho.prototype.isCamera=!0;class _t extends ho{constructor(e=50,t=1,n=.1,i=2e3){super();this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ks*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ks*2*Math.atan(Math.tan(hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(hs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}_t.prototype.isPerspectiveCamera=!0;const Zn=90,Yn=1;class uo extends We{constructor(e,t,n){super();if(this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new _t(Zn,Yn,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new E(1,0,0)),this.add(i);const r=new _t(Zn,Yn,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new E(-1,0,0)),this.add(r);const o=new _t(Zn,Yn,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new E(0,1,0)),this.add(o);const a=new _t(Zn,Yn,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new E(0,-1,0)),this.add(a);const c=new _t(Zn,Yn,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new E(0,0,1)),this.add(c);const l=new _t(Zn,Yn,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new E(0,0,-1)),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,a,c,l]=this.children,h=e.xr.enabled,u=e.getRenderTarget();e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class Yr extends ut{constructor(e,t,n,i,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:fi;super(e,t,n,i,r,o,a,c,l,h);this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}Yr.prototype.isCubeTexture=!0;class zl extends Lt{constructor(e,t={}){super(e,e,t);const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Yr(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:gt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=Mt,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Qi(5,5,5),r=new Ot({name:"CubemapFromEquirect",uniforms:gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:st,blending:mn});r.uniforms.tEquirect.value=t;const o=new yt(i,r),a=t.minFilter;return t.minFilter===Xr&&(t.minFilter=gt),new uo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}zl.prototype.isWebGLCubeRenderTarget=!0;const Ds=new E,eu=new E,tu=new ft;class tn{constructor(e=new E(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ds.subVectors(n,t).cross(eu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Ds),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||tu.getNormalMatrix(e),i=this.coplanarPoint(Ds).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}tn.prototype.isPlane=!0;const Jn=new _i,wr=new E;class Jr{constructor(e=new tn,t=new tn,n=new tn,i=new tn,r=new tn,o=new tn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],u=n[7],d=n[8],f=n[9],g=n[10],x=n[11],_=n[12],m=n[13],p=n[14],T=n[15];return t[0].setComponents(a-i,u-c,x-d,T-_).normalize(),t[1].setComponents(a+i,u+c,x+d,T+_).normalize(),t[2].setComponents(a+r,u+l,x+f,T+m).normalize(),t[3].setComponents(a-r,u-l,x-f,T-m).normalize(),t[4].setComponents(a-o,u-h,x-g,T-p).normalize(),t[5].setComponents(a+o,u+h,x+g,T+p).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Jn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Jn)}intersectsSprite(e){return Jn.center.set(0,0,0),Jn.radius=.7071067811865476,Jn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(wr.x=i.normal.x>0?e.max.x:e.min.x,wr.y=i.normal.y>0?e.max.y:e.min.y,wr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(wr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Nl(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function nu(s,e){const t=e.isWebGL2,n=new WeakMap;function i(l,h){const u=l.array,d=l.usage,f=s.createBuffer();s.bindBuffer(h,f),s.bufferData(h,u,d),l.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function r(l,h,u){const d=h.array,f=h.updateRange;s.bindBuffer(u,l),f.count===-1?s.bufferSubData(u,0,d):(t?s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u===void 0?n.set(l,i(l,h)):u.version<l.version&&(r(u.buffer,l,h),u.version=l.version)}return{get:o,remove:a,update:c}}class fo extends Ye{constructor(e=1,t=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],x=[],_=[];for(let m=0;m<h;m++){const p=m*d-o;for(let T=0;T<l;T++){const M=T*u-r;g.push(M,-p,0),x.push(0,0,1),_.push(T/a),_.push(1-m/c)}}for(let m=0;m<c;m++)for(let p=0;p<a;p++){const T=p+l*m,M=p+l*(m+1),w=p+1+l*(m+1),L=p+1+l*m;f.push(T,M,L),f.push(M,w,L)}this.setIndex(f),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(x,3)),this.setAttribute("uv",new nt(_,2))}static fromJSON(e){return new fo(e.width,e.height,e.widthSegments,e.heightSegments)}}var iu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,ru=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,su=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ou=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,au=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cu="vec3 transformed = vec3( position );",hu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uu=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,du=`#ifdef USE_BUMPMAP
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
#endif`,fu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_u=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,yu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,wu=`#define PI 3.141592653589793
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
}`,Mu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bu=`vec3 transformedNormal = objectNormal;
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
#endif`,Su=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Eu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Tu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Au=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lu=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ru=`#ifdef USE_ENVMAP
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
#endif`,Pu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Du=`#ifdef USE_ENVMAP
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
#endif`,Iu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bu=`#ifdef USE_ENVMAP
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
#endif`,Fu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ou=`#ifdef USE_GRADIENTMAP
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
}`,Hu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Vu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gu=`vec3 diffuse = vec3( 1.0 );
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
#endif`,ku=`uniform bool receiveShadow;
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
#endif`,Wu=`#if defined( USE_ENVMAP )
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
#endif`,qu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xu=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,ju=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zu=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Yu=`PhysicalMaterial material;
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
#endif`,Ju=`struct PhysicalMaterial {
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
}`,Ku=`
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
#endif`,Qu=`#if defined( RE_IndirectDiffuse )
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
#endif`,$u=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,ed=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,td=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,id=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,rd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,od=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ad=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ld=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ]
		#endif
	}
#endif`,ud=`#ifdef USE_MORPHNORMALS
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
#endif`,dd=`#ifdef USE_MORPHTARGETS
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
#endif`,fd=`#ifdef USE_MORPHTARGETS
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
#endif`,pd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,md=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,gd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_d=`#ifdef USE_NORMALMAP
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
#endif`,yd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,wd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Md=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,bd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ed=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Td=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ad=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ld=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pd=`#ifdef USE_SHADOWMAP
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
#endif`,Dd=`#ifdef USE_SHADOWMAP
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
#endif`,Id=`#ifdef USE_SHADOWMAP
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
#endif`,Bd=`float getShadowMask() {
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
}`,Fd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zd=`#ifdef USE_SKINNING
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
#endif`,Nd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ud=`#ifdef USE_SKINNING
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
#endif`,Od=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kd=`#ifdef USE_TRANSMISSION
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
#endif`,Wd=`#ifdef USE_TRANSMISSION
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
#endif`,qd=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Xd=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,jd=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Zd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Yd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Jd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Kd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$d=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tf=`#include <envmap_common_pars_fragment>
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
}`,nf=`#include <common>
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
}`,rf=`#if DEPTH_PACKING == 3200
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
}`,sf=`#define DISTANCE
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
}`,of=`#define DISTANCE
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
}`,af=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cf=`uniform float scale;
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
}`,hf=`uniform vec3 diffuse;
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
}`,uf=`#include <common>
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
}`,df=`uniform vec3 diffuse;
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
}`,ff=`#define LAMBERT
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
}`,pf=`uniform vec3 diffuse;
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
}`,mf=`#define MATCAP
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
}`,gf=`#define MATCAP
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
}`,xf=`#define NORMAL
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
}`,vf=`#define NORMAL
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
}`,_f=`#define PHONG
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
}`,yf=`#define PHONG
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
}`,wf=`#define STANDARD
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
}`,Mf=`#define STANDARD
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
}`,bf=`#define TOON
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
}`,Sf=`#define TOON
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
}`,Ef=`uniform float size;
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
}`,Tf=`uniform vec3 diffuse;
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
}`,Af=`#include <common>
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
}`,Cf=`uniform vec3 color;
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
}`,Lf=`uniform float rotation;
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
}`,Rf=`uniform vec3 diffuse;
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
}`,Ie={alphamap_fragment:iu,alphamap_pars_fragment:ru,alphatest_fragment:su,alphatest_pars_fragment:ou,aomap_fragment:au,aomap_pars_fragment:lu,begin_vertex:cu,beginnormal_vertex:hu,bsdfs:uu,bumpmap_pars_fragment:du,clipping_planes_fragment:fu,clipping_planes_pars_fragment:pu,clipping_planes_pars_vertex:mu,clipping_planes_vertex:gu,color_fragment:xu,color_pars_fragment:vu,color_pars_vertex:_u,color_vertex:yu,common:wu,cube_uv_reflection_fragment:Mu,defaultnormal_vertex:bu,displacementmap_pars_vertex:Su,displacementmap_vertex:Eu,emissivemap_fragment:Tu,emissivemap_pars_fragment:Au,encodings_fragment:Cu,encodings_pars_fragment:Lu,envmap_fragment:Ru,envmap_common_pars_fragment:Pu,envmap_pars_fragment:Du,envmap_pars_vertex:Iu,envmap_physical_pars_fragment:Wu,envmap_vertex:Bu,fog_vertex:Fu,fog_pars_vertex:zu,fog_fragment:Nu,fog_pars_fragment:Uu,gradientmap_pars_fragment:Ou,lightmap_fragment:Hu,lightmap_pars_fragment:Vu,lights_lambert_vertex:Gu,lights_pars_begin:ku,lights_toon_fragment:qu,lights_toon_pars_fragment:Xu,lights_phong_fragment:ju,lights_phong_pars_fragment:Zu,lights_physical_fragment:Yu,lights_physical_pars_fragment:Ju,lights_fragment_begin:Ku,lights_fragment_maps:Qu,lights_fragment_end:$u,logdepthbuf_fragment:ed,logdepthbuf_pars_fragment:td,logdepthbuf_pars_vertex:nd,logdepthbuf_vertex:id,map_fragment:rd,map_pars_fragment:sd,map_particle_fragment:od,map_particle_pars_fragment:ad,metalnessmap_fragment:ld,metalnessmap_pars_fragment:cd,morphcolor_vertex:hd,morphnormal_vertex:ud,morphtarget_pars_vertex:dd,morphtarget_vertex:fd,normal_fragment_begin:pd,normal_fragment_maps:md,normal_pars_fragment:gd,normal_pars_vertex:xd,normal_vertex:vd,normalmap_pars_fragment:_d,clearcoat_normal_fragment_begin:yd,clearcoat_normal_fragment_maps:wd,clearcoat_pars_fragment:Md,output_fragment:bd,packing:Sd,premultiplied_alpha_fragment:Ed,project_vertex:Td,dithering_fragment:Ad,dithering_pars_fragment:Cd,roughnessmap_fragment:Ld,roughnessmap_pars_fragment:Rd,shadowmap_pars_fragment:Pd,shadowmap_pars_vertex:Dd,shadowmap_vertex:Id,shadowmask_pars_fragment:Bd,skinbase_vertex:Fd,skinning_pars_vertex:zd,skinning_vertex:Nd,skinnormal_vertex:Ud,specularmap_fragment:Od,specularmap_pars_fragment:Hd,tonemapping_fragment:Vd,tonemapping_pars_fragment:Gd,transmission_fragment:kd,transmission_pars_fragment:Wd,uv_pars_fragment:qd,uv_pars_vertex:Xd,uv_vertex:jd,uv2_pars_fragment:Zd,uv2_pars_vertex:Yd,uv2_vertex:Jd,worldpos_vertex:Kd,background_vert:Qd,background_frag:$d,cube_vert:ef,cube_frag:tf,depth_vert:nf,depth_frag:rf,distanceRGBA_vert:sf,distanceRGBA_frag:of,equirect_vert:af,equirect_frag:lf,linedashed_vert:cf,linedashed_frag:hf,meshbasic_vert:uf,meshbasic_frag:df,meshlambert_vert:ff,meshlambert_frag:pf,meshmatcap_vert:mf,meshmatcap_frag:gf,meshnormal_vert:xf,meshnormal_frag:vf,meshphong_vert:_f,meshphong_frag:yf,meshphysical_vert:wf,meshphysical_frag:Mf,meshtoon_vert:bf,meshtoon_frag:Sf,points_vert:Ef,points_frag:Tf,shadow_vert:Af,shadow_frag:Cf,sprite_vert:Lf,sprite_frag:Rf},ie={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new ft},uv2Transform:{value:new ft},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new K(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new K(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ft}}},qt={basic:{uniforms:mt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:mt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.fog,ie.lights,{emissive:{value:new me(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:mt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:mt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:mt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new me(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:mt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:mt([ie.points,ie.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:mt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:mt([ie.common,ie.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:mt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:mt([ie.sprite,ie.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},cube:{uniforms:mt([ie.envmap,{opacity:{value:1}}]),vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:mt([ie.common,ie.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:mt([ie.lights,ie.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};qt.physical={uniforms:mt([qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new K(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new K},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};function Pf(s,e,t,n,i,r){const o=new me(0);let a=i===!0?0:1,c,l,h=null,u=0,d=null;function f(x,_){let m=!1,p=_.isScene===!0?_.background:null;p&&p.isTexture&&(p=e.get(p));const T=s.xr,M=T.getSession&&T.getSession();M&&M.environmentBlendMode==="additive"&&(p=null),p===null?g(o,a):p&&p.isColor&&(g(p,1),m=!0),(s.autoClear||m)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),p&&(p.isCubeTexture||p.mapping===qr)?(l===void 0&&(l=new yt(new Qi(1,1,1),new Ot({name:"BackgroundCubeMaterial",uniforms:gi(qt.cube.uniforms),vertexShader:qt.cube.vertexShader,fragmentShader:qt.cube.fragmentShader,side:st,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,L,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=p,l.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,(h!==p||u!==p.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=p,u=p.version,d=s.toneMapping),x.unshift(l,l.geometry,l.material,0,0,null)):p&&p.isTexture&&(c===void 0&&(c=new yt(new fo(2,2),new Ot({name:"BackgroundMaterial",uniforms:gi(qt.background.uniforms),vertexShader:qt.background.vertexShader,fragmentShader:qt.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=p,p.matrixAutoUpdate===!0&&p.updateMatrix(),c.material.uniforms.uvTransform.value.copy(p.matrix),(h!==p||u!==p.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=p,u=p.version,d=s.toneMapping),x.unshift(c,c.geometry,c.material,0,0,null))}function g(x,_){t.buffers.color.setClear(x.r,x.g,x.b,_,r)}return{getClearColor:function(){return o},setClearColor:function(x,_=1){o.set(x),a=_,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,g(o,a)},render:f}}function Df(s,e,t,n){const i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=x(null);let l=c;function h(I,F,O,z,H){let D=!1;if(o){const q=g(z,O,F);l!==q&&(l=q,d(l.object)),D=_(z,H),D&&m(z,H)}else{const q=F.wireframe===!0;(l.geometry!==z.id||l.program!==O.id||l.wireframe!==q)&&(l.geometry=z.id,l.program=O.id,l.wireframe=q,D=!0)}I.isInstancedMesh===!0&&(D=!0),H!==null&&t.update(H,34963),D&&(R(I,F,O,z),H!==null&&s.bindBuffer(34963,t.get(H).buffer))}function u(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(I){return n.isWebGL2?s.bindVertexArray(I):r.bindVertexArrayOES(I)}function f(I){return n.isWebGL2?s.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function g(I,F,O){const z=O.wireframe===!0;let H=a[I.id];H===void 0&&(H={},a[I.id]=H);let D=H[F.id];D===void 0&&(D={},H[F.id]=D);let q=D[z];return q===void 0&&(q=x(u()),D[z]=q),q}function x(I){const F=[],O=[],z=[];for(let H=0;H<i;H++)F[H]=0,O[H]=0,z[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:O,attributeDivisors:z,object:I,attributes:{},index:null}}function _(I,F){const O=l.attributes,z=I.attributes;let H=0;for(const D in z){const q=O[D],Q=z[D];if(q===void 0||q.attribute!==Q||q.data!==Q.data)return!0;H++}return l.attributesNum!==H||l.index!==F}function m(I,F){const O={},z=I.attributes;let H=0;for(const D in z){const q=z[D],Q={};Q.attribute=q,q.data&&(Q.data=q.data),O[D]=Q,H++}l.attributes=O,l.attributesNum=H,l.index=F}function p(){const I=l.newAttributes;for(let F=0,O=I.length;F<O;F++)I[F]=0}function T(I){M(I,0)}function M(I,F){const O=l.newAttributes,z=l.enabledAttributes,H=l.attributeDivisors;O[I]=1,z[I]===0&&(s.enableVertexAttribArray(I),z[I]=1),H[I]!==F&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,F),H[I]=F)}function w(){const I=l.newAttributes,F=l.enabledAttributes;for(let O=0,z=F.length;O<z;O++)F[O]!==I[O]&&(s.disableVertexAttribArray(O),F[O]=0)}function L(I,F,O,z,H,D){n.isWebGL2===!0&&(O===5124||O===5125)?s.vertexAttribIPointer(I,F,O,H,D):s.vertexAttribPointer(I,F,O,z,H,D)}function R(I,F,O,z){if(n.isWebGL2===!1&&(I.isInstancedMesh||z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;p();const H=z.attributes,D=O.getAttributes(),q=F.defaultAttributeValues;for(const Q in D){const J=D[Q];if(J.location>=0){let $=H[Q];if($===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&($=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&($=I.instanceColor)),$!==void 0){const ve=$.normalized,Ue=$.itemSize,we=t.get($);if(we===void 0)continue;const X=we.buffer,Oe=we.type,Le=we.bytesPerElement;if($.isInterleavedBufferAttribute){const ue=$.data,de=ue.stride,Be=$.offset;if(ue.isInstancedInterleavedBuffer){for(let N=0;N<J.locationSize;N++)M(J.location+N,ue.meshPerAttribute);I.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let N=0;N<J.locationSize;N++)T(J.location+N);s.bindBuffer(34962,X);for(let N=0;N<J.locationSize;N++)L(J.location+N,Ue/J.locationSize,Oe,ve,de*Le,(Be+Ue/J.locationSize*N)*Le)}else{if($.isInstancedBufferAttribute){for(let ue=0;ue<J.locationSize;ue++)M(J.location+ue,$.meshPerAttribute);I.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ue=0;ue<J.locationSize;ue++)T(J.location+ue);s.bindBuffer(34962,X);for(let ue=0;ue<J.locationSize;ue++)L(J.location+ue,Ue/J.locationSize,Oe,ve,Ue*Le,Ue/J.locationSize*ue*Le)}}else if(q!==void 0){const ve=q[Q];if(ve!==void 0)switch(ve.length){case 2:s.vertexAttrib2fv(J.location,ve);break;case 3:s.vertexAttrib3fv(J.location,ve);break;case 4:s.vertexAttrib4fv(J.location,ve);break;default:s.vertexAttrib1fv(J.location,ve)}}}}w()}function j(){v();for(const I in a){const F=a[I];for(const O in F){const z=F[O];for(const H in z)f(z[H].object),delete z[H];delete F[O]}delete a[I]}}function re(I){if(a[I.id]===void 0)return;const F=a[I.id];for(const O in F){const z=F[O];for(const H in z)f(z[H].object),delete z[H];delete F[O]}delete a[I.id]}function V(I){for(const F in a){const O=a[F];if(O[I.id]===void 0)continue;const z=O[I.id];for(const H in z)f(z[H].object),delete z[H];delete O[I.id]}}function v(){C(),l!==c&&(l=c,d(l.object))}function C(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:v,resetDefaultState:C,dispose:j,releaseStatesOfGeometry:re,releaseStatesOfProgram:V,initAttributes:p,enableAttribute:T,disableUnusedAttributes:w}}function If(s,e,t,n){const i=n.isWebGL2;let r;function o(l){r=l}function a(l,h){s.drawArrays(r,l,h),t.update(h,r,1)}function c(l,h,u){if(u===0)return;let d,f;if(i)d=s,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](r,l,h,u),t.update(h,r,u)}this.setMode=o,this.render=a,this.renderInstances=c}function Bf(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(R){if(R==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&s instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(34930),d=s.getParameter(35660),f=s.getParameter(3379),g=s.getParameter(34076),x=s.getParameter(34921),_=s.getParameter(36347),m=s.getParameter(36348),p=s.getParameter(36349),T=d>0,M=o||e.has("OES_texture_float"),w=T&&M,L=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:_,maxVaryings:m,maxFragmentUniforms:p,vertexTextures:T,floatFragmentTextures:M,floatVertexTextures:w,maxSamples:L}}function Ff(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new tn,a=new ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,f){const g=u.length!==0||d||n!==0||i;return i=d,t=h(u,f,0),n=u.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1,l()},this.setState=function(u,d,f){const g=u.clippingPlanes,x=u.clipIntersection,_=u.clipShadows,m=s.get(u);if(!i||g===null||g.length===0||r&&!_)r?h(null):l();else{const p=r?0:n,T=p*4;let M=m.clippingState||null;c.value=M,M=h(g,d,T,f);for(let w=0;w!==T;++w)M[w]=t[w];m.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=p}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const x=u!==null?u.length:0;let _=null;if(x!==0){if(_=c.value,g!==!0||_===null){const m=f+x*4,p=d.matrixWorldInverse;a.getNormalMatrix(p),(_===null||_.length<m)&&(_=new Float32Array(m));for(let T=0,M=f;T!==x;++T,M+=4)o.copy(u[T]).applyMatrix4(p,a),o.normal.toArray(_,M),_[M+3]=o.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,_}}function zf(s){let e=new WeakMap;function t(o,a){return a===Xs?o.mapping=fi:a===js&&(o.mapping=pi),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Xs||a===js)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new zl(c.height/2);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class po extends ho{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super();this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}po.prototype.isOrthographicCamera=!0;const si=4,Ta=[.125,.215,.35,.446,.526,.582],Cn=20,Is=new po,Aa=new me;let Bs=null;const An=(1+Math.sqrt(5))/2,Kn=1/An,Ca=[new E(1,1,1),new E(-1,1,1),new E(1,1,-1),new E(-1,1,-1),new E(0,An,Kn),new E(0,An,-Kn),new E(Kn,0,An),new E(-Kn,0,An),new E(An,Kn,0),new E(-An,Kn,0)];class La{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Bs=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Da(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bs),e.scissorTest=!1,Mr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fi||e.mapping===pi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bs=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize-32,n={magFilter:gt,minFilter:gt,generateMipmaps:!1,type:ci,format:Mt,encoding:_n,depthBuffer:!1},i=Ra(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ra(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Nf(r)),this._blurMaterial=Uf(r,e,t)}return i}_compileMaterial(e){const t=new yt(this._lodPlanes[0],e);this._renderer.compile(t,Is)}_sceneToCubeUV(e,t,n,i){const a=new _t(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Aa),h.toneMapping=gn,h.autoClear=!1;const f=new Zr({name:"PMREM.Background",side:st,depthWrite:!1,depthTest:!1}),g=new yt(new Qi,f);let x=!1;const _=e.background;_?_.isColor&&(f.color.copy(_),e.background=null,x=!0):(f.color.copy(Aa),x=!0);for(let m=0;m<6;m++){const p=m%3;p===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):p===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const T=this._cubeSize;Mr(i,p*T,m>2?T:0,T,T),h.setRenderTarget(i),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===fi||e.mapping===pi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Da()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pa());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new yt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Mr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Is)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Ca[(i-1)%Ca.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new yt(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Cn-1),x=r/g,_=isFinite(r)?1+Math.floor(h*x):Cn;_>Cn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Cn}`);const m=[];let p=0;for(let R=0;R<Cn;++R){const j=R/x,re=Math.exp(-j*j/2);m.push(re),R===0?p+=re:R<_&&(p+=2*re)}for(let R=0;R<m.length;R++)m[R]=m[R]/p;d.envMap.value=e.texture,d.samples.value=_,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:T}=this;d.dTheta.value=g,d.mipInt.value=T-n;const M=this._sizeLods[i],w=3*M*(i>T-si?i-T+si:0),L=4*(this._cubeSize-M);Mr(t,w,L,3*M,2*M),c.setRenderTarget(t),c.render(u,Is)}}function Nf(s){const e=[],t=[],n=[];let i=s;const r=s-si+1+Ta.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-si?c=Ta[o-s+si-1]:o===0&&(c=0),n.push(c);const l=1/(a-1),h=-l/2,u=1+l/2,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,_=2,m=1,p=new Float32Array(x*g*f),T=new Float32Array(_*g*f),M=new Float32Array(m*g*f);for(let L=0;L<f;L++){const R=L%3*2/3-1,j=L>2?0:-1,re=[R,j,0,R+2/3,j,0,R+2/3,j+1,0,R,j,0,R+2/3,j+1,0,R,j+1,0];p.set(re,x*g*L),T.set(d,_*g*L);const V=[L,L,L,L,L,L];M.set(V,m*g*L)}const w=new Ye;w.setAttribute("position",new at(p,x)),w.setAttribute("uv",new at(T,_)),w.setAttribute("faceIndex",new at(M,m)),e.push(w),i>si&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ra(s,e,t){const n=new Lt(s,e,t);return n.texture.mapping=qr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Mr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Uf(s,e,t){const n=new Float32Array(Cn),i=new E(0,1,0);return new Ot({name:"SphericalGaussianBlur",defines:{n:Cn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:mo(),fragmentShader:`

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
		`,blending:mn,depthTest:!1,depthWrite:!1})}function Pa(){return new Ot({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mo(),fragmentShader:`

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
		`,blending:mn,depthTest:!1,depthWrite:!1})}function Da(){return new Ot({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function mo(){return`

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
	`}function Of(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Xs||c===js,h=c===fi||c===pi;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new La(s)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(l&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new La(s));const d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Hf(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Vf(s,e,t,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)e.update(d[g],34962);const f=u.morphAttributes;for(const g in f){const x=f[g];for(let _=0,m=x.length;_<m;_++)e.update(x[_],34962)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let x=0;if(f!==null){const p=f.array;x=f.version;for(let T=0,M=p.length;T<M;T+=3){const w=p[T+0],L=p[T+1],R=p[T+2];d.push(w,L,L,R,R,w)}}else{const p=g.array;x=g.version;for(let T=0,M=p.length/3-1;T<M;T+=3){const w=T+0,L=T+1,R=T+2;d.push(w,L,L,R,R,w)}}const _=new(Rl(d)?Fl:Bl)(d,1);_.version=x;const m=r.get(u);m&&e.remove(m),r.set(u,_)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Gf(s,e,t,n){const i=n.isWebGL2;let r;function o(d){r=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function h(d,f){s.drawElements(r,f,a,d*c),t.update(f,r,1)}function u(d,f,g){if(g===0)return;let x,_;if(i)x=s,_="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[_](r,f,a,d*c,g),t.update(f,r,g)}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u}function kf(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Wf(s,e){return s[0]-e[0]}function qf(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Fs(s,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),s.divideScalar(t)}function Xf(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new qe,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u,d){const f=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=g!==void 0?g.length:0;let _=r.get(h);if(_===void 0||_.count!==x){let O=function(){I.dispose(),r.delete(h),h.removeEventListener("dispose",O)};_!==void 0&&_.texture.dispose();const T=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,L=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],j=h.morphAttributes.color||[];let re=0;T===!0&&(re=1),M===!0&&(re=2),w===!0&&(re=3);let V=h.attributes.position.count*re,v=1;V>e.maxTextureSize&&(v=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const C=new Float32Array(V*v*4*x),I=new jr(C,V,v,x);I.format=Mt,I.type=Ln,I.needsUpdate=!0;const F=re*4;for(let z=0;z<x;z++){const H=L[z],D=R[z],q=j[z],Q=V*v*4*z;for(let J=0;J<H.count;J++){const $=J*F;T===!0&&(o.fromBufferAttribute(H,J),H.normalized===!0&&Fs(o,H),C[Q+$+0]=o.x,C[Q+$+1]=o.y,C[Q+$+2]=o.z,C[Q+$+3]=0),M===!0&&(o.fromBufferAttribute(D,J),D.normalized===!0&&Fs(o,D),C[Q+$+4]=o.x,C[Q+$+5]=o.y,C[Q+$+6]=o.z,C[Q+$+7]=0),w===!0&&(o.fromBufferAttribute(q,J),q.normalized===!0&&Fs(o,D),C[Q+$+8]=o.x,C[Q+$+9]=o.y,C[Q+$+10]=o.z,C[Q+$+11]=q.itemSize===4?o.w:1)}}_={count:x,texture:I,size:new K(V,v)},r.set(h,_),h.addEventListener("dispose",O)}let m=0;for(let T=0;T<f.length;T++)m+=f[T];const p=h.morphTargetsRelative?1:1-m;d.getUniforms().setValue(s,"morphTargetBaseInfluence",p),d.getUniforms().setValue(s,"morphTargetInfluences",f),d.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{const g=f===void 0?0:f.length;let x=n[h.id];if(x===void 0||x.length!==g){x=[];for(let M=0;M<g;M++)x[M]=[M,0];n[h.id]=x}for(let M=0;M<g;M++){const w=x[M];w[0]=M,w[1]=f[M]}x.sort(qf);for(let M=0;M<8;M++)M<g&&x[M][1]?(a[M][0]=x[M][0],a[M][1]=x[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(Wf);const _=h.morphAttributes.position,m=h.morphAttributes.normal;let p=0;for(let M=0;M<8;M++){const w=a[M],L=w[0],R=w[1];L!==Number.MAX_SAFE_INTEGER&&R?(_&&h.getAttribute("morphTarget"+M)!==_[L]&&h.setAttribute("morphTarget"+M,_[L]),m&&h.getAttribute("morphNormal"+M)!==m[L]&&h.setAttribute("morphNormal"+M,m[L]),i[M]=R,p+=R):(_&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),m&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),i[M]=0)}const T=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(s,"morphTargetBaseInfluence",T),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function jf(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);return i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const Ul=new ut,Ol=new jr,Hl=new co,Vl=new Yr,Ia=[],Ba=[],Fa=new Float32Array(16),za=new Float32Array(9),Na=new Float32Array(4);function wi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Ia[i];if(r===void 0&&(r=new Float32Array(i),Ia[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function wt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function xt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Kr(s,e){let t=Ba[e];t===void 0&&(t=new Int32Array(e),Ba[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Zf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Yf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;s.uniform2fv(this.addr,e),xt(t,e)}}function Jf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;s.uniform3fv(this.addr,e),xt(t,e)}}function Kf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;s.uniform4fv(this.addr,e),xt(t,e)}}function Qf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(wt(t,n))return;Na.set(n),s.uniformMatrix2fv(this.addr,!1,Na),xt(t,n)}}function $f(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(wt(t,n))return;za.set(n),s.uniformMatrix3fv(this.addr,!1,za),xt(t,n)}}function ep(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(wt(t,n))return;Fa.set(n),s.uniformMatrix4fv(this.addr,!1,Fa),xt(t,n)}}function tp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function np(s,e){const t=this.cache;wt(t,e)||(s.uniform2iv(this.addr,e),xt(t,e))}function ip(s,e){const t=this.cache;wt(t,e)||(s.uniform3iv(this.addr,e),xt(t,e))}function rp(s,e){const t=this.cache;wt(t,e)||(s.uniform4iv(this.addr,e),xt(t,e))}function sp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function op(s,e){const t=this.cache;wt(t,e)||(s.uniform2uiv(this.addr,e),xt(t,e))}function ap(s,e){const t=this.cache;wt(t,e)||(s.uniform3uiv(this.addr,e),xt(t,e))}function lp(s,e){const t=this.cache;wt(t,e)||(s.uniform4uiv(this.addr,e),xt(t,e))}function cp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Ul,i)}function hp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Hl,i)}function up(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Vl,i)}function dp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ol,i)}function fp(s){switch(s){case 5126:return Zf;case 35664:return Yf;case 35665:return Jf;case 35666:return Kf;case 35674:return Qf;case 35675:return $f;case 35676:return ep;case 5124:case 35670:return tp;case 35667:case 35671:return np;case 35668:case 35672:return ip;case 35669:case 35673:return rp;case 5125:return sp;case 36294:return op;case 36295:return ap;case 36296:return lp;case 35678:case 36198:case 36298:case 36306:case 35682:return cp;case 35679:case 36299:case 36307:return hp;case 35680:case 36300:case 36308:case 36293:return up;case 36289:case 36303:case 36311:case 36292:return dp}}function pp(s,e){s.uniform1fv(this.addr,e)}function mp(s,e){const t=wi(e,this.size,2);s.uniform2fv(this.addr,t)}function gp(s,e){const t=wi(e,this.size,3);s.uniform3fv(this.addr,t)}function xp(s,e){const t=wi(e,this.size,4);s.uniform4fv(this.addr,t)}function vp(s,e){const t=wi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function _p(s,e){const t=wi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function yp(s,e){const t=wi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function wp(s,e){s.uniform1iv(this.addr,e)}function Mp(s,e){s.uniform2iv(this.addr,e)}function bp(s,e){s.uniform3iv(this.addr,e)}function Sp(s,e){s.uniform4iv(this.addr,e)}function Ep(s,e){s.uniform1uiv(this.addr,e)}function Tp(s,e){s.uniform2uiv(this.addr,e)}function Ap(s,e){s.uniform3uiv(this.addr,e)}function Cp(s,e){s.uniform4uiv(this.addr,e)}function Lp(s,e,t){const n=e.length,i=Kr(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2D(e[r]||Ul,i[r])}function Rp(s,e,t){const n=e.length,i=Kr(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture3D(e[r]||Hl,i[r])}function Pp(s,e,t){const n=e.length,i=Kr(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTextureCube(e[r]||Vl,i[r])}function Dp(s,e,t){const n=e.length,i=Kr(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2DArray(e[r]||Ol,i[r])}function Ip(s){switch(s){case 5126:return pp;case 35664:return mp;case 35665:return gp;case 35666:return xp;case 35674:return vp;case 35675:return _p;case 35676:return yp;case 5124:case 35670:return wp;case 35667:case 35671:return Mp;case 35668:case 35672:return bp;case 35669:case 35673:return Sp;case 5125:return Ep;case 36294:return Tp;case 36295:return Ap;case 36296:return Cp;case 35678:case 36198:case 36298:case 36306:case 35682:return Lp;case 35679:case 36299:case 36307:return Rp;case 35680:case 36300:case 36308:case 36293:return Pp;case 36289:case 36303:case 36311:case 36292:return Dp}}function Bp(s,e,t){this.id=s,this.addr=t,this.cache=[],this.setValue=fp(e.type)}function Gl(s,e,t){this.id=s,this.addr=t,this.cache=[],this.size=e.size,this.setValue=Ip(e.type)}Gl.prototype.updateCache=function(s){const e=this.cache;s instanceof Float32Array&&e.length!==s.length&&(this.cache=new Float32Array(s.length)),xt(e,s)};function kl(s){this.id=s,this.seq=[],this.map={}}kl.prototype.setValue=function(s,e,t){const n=this.seq;for(let i=0,r=n.length;i!==r;++i){const o=n[i];o.setValue(s,e[o.id],t)}};const zs=/(\w+)(\])?(\[|\.)?/g;function Ua(s,e){s.seq.push(e),s.map[e.id]=e}function Fp(s,e,t){const n=s.name,i=n.length;for(zs.lastIndex=0;;){const r=zs.exec(n),o=zs.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Ua(t,l===void 0?new Bp(a,s,e):new Gl(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new kl(a),Ua(t,u)),t=u}}}function xn(s,e){this.seq=[],this.map={};const t=s.getProgramParameter(e,35718);for(let n=0;n<t;++n){const i=s.getActiveUniform(e,n),r=s.getUniformLocation(e,i.name);Fp(i,r,this)}}xn.prototype.setValue=function(s,e,t,n){const i=this.map[e];i!==void 0&&i.setValue(s,t,n)};xn.prototype.setOptional=function(s,e,t){const n=e[t];n!==void 0&&this.setValue(s,t,n)};xn.upload=function(s,e,t,n){for(let i=0,r=e.length;i!==r;++i){const o=e[i],a=t[o.id];a.needsUpdate!==!1&&o.setValue(s,a.value,n)}};xn.seqWithValue=function(s,e){const t=[];for(let n=0,i=s.length;n!==i;++n){const r=s[n];r.id in e&&t.push(r)}return t};function Oa(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let zp=0;function Np(s){const e=s.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function Up(s){switch(s){case _n:return["Linear","( value )"];case Ke:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function Ha(s,e,t){const n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();return n&&i===""?"":t.toUpperCase()+`

`+i+`

`+Np(s.getShaderSource(e))}function Op(s,e){const t=Up(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Hp(s,e){let t;switch(e){case oh:t="Linear";break;case ah:t="Reinhard";break;case lh:t="OptimizedCineon";break;case ch:t="ACESFilmic";break;case hh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Vp(s){return[s.extensionDerivatives||!!s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ni).join(`
`)}function Gp(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function kp(s,e){const t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Ni(s){return s!==""}function Va(s,e){return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ga(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Wp=/^[ \t]*#include +<([\w\d./]+)>/gm;function $s(s){return s.replace(Wp,qp)}function qp(s,e){const t=Ie[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return $s(t)}const Xp=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,jp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ka(s){return s.replace(jp,Wl).replace(Xp,Zp)}function Zp(s,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Wl(s,e,t,n)}function Wl(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Wa(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Yp(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Sl?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Uc?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===zi&&(e="SHADOWMAP_TYPE_VSM"),e}function Jp(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case fi:case pi:e="ENVMAP_TYPE_CUBE";break;case qr:case ao:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Kp(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case pi:case ao:e="ENVMAP_MODE_REFRACTION";break}return e}function Qp(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Wr:e="ENVMAP_BLENDING_MULTIPLY";break;case rh:e="ENVMAP_BLENDING_MIX";break;case sh:e="ENVMAP_BLENDING_ADD";break}return e}function $p(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e/32+1)+3,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function em(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Yp(t),l=Jp(t),h=Kp(t),u=Qp(t),d=$p(t),f=t.isWebGL2?"":Vp(t),g=Gp(r),x=i.createProgram();let _,m,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=[g].filter(Ni).join(`
`),_.length>0&&(_+=`
`),m=[f,g].filter(Ni).join(`
`),m.length>0&&(m+=`
`)):(_=[Wa(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ni).join(`
`),m=[f,Wa(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gn?"#define TONE_MAPPING":"",t.toneMapping!==gn?Ie.tonemapping_pars_fragment:"",t.toneMapping!==gn?Hp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.encodings_pars_fragment,Op("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ni).join(`
`)),o=$s(o),o=Va(o,t),o=Ga(o,t),a=$s(a),a=Va(a,t),a=Ga(a,t),o=ka(o),a=ka(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,_=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",t.glslVersion===fa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const T=p+_+o,M=p+m+a,w=Oa(i,35633,T),L=Oa(i,35632,M);if(i.attachShader(x,w),i.attachShader(x,L),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x),s.debug.checkShaderErrors){const re=i.getProgramInfoLog(x).trim(),V=i.getShaderInfoLog(w).trim(),v=i.getShaderInfoLog(L).trim();let C=!0,I=!0;if(i.getProgramParameter(x,35714)===!1){C=!1;const F=Ha(i,w,"vertex"),O=Ha(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,35715)+`

Program Info Log: `+re+`
`+F+`
`+O)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(V===""||v==="")&&(I=!1);I&&(this.diagnostics={runnable:C,programLog:re,vertexShader:{log:V,prefix:_},fragmentShader:{log:v,prefix:m}})}i.deleteShader(w),i.deleteShader(L);let R;this.getUniforms=function(){return R===void 0&&(R=new xn(i,x)),R};let j;return this.getAttributes=function(){return j===void 0&&(j=kp(i,x)),j},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.name=t.shaderName,this.id=zp++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=L,this}let tm=0;class nm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new im;t.set(e,n)}return t.get(e)}}class im{constructor(){this.id=tm++,this.usedTimes=0}}function rm(s,e,t,n,i,r,o){const a=new Il,c=new nm,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.floatVertexTextures,f=i.maxVertexUniforms,g=i.vertexTextures;let x=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){const I=v.skeleton.bones;if(d)return 1024;{const O=Math.floor((f-20)/4),z=Math.min(O,I.length);return z<I.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+I.length+" bones. This GPU supports "+z+"."),0):z}}function p(v,C,I,F,O){const z=F.fog,H=O.geometry,D=v.isMeshStandardMaterial?F.environment:null,q=(v.isMeshStandardMaterial?t:e).get(v.envMap||D),Q=!!q&&(q.mapping===qr||q.mapping===ao)?q.image.height:null,J=_[v.type],$=O.isSkinnedMesh?m(O):0;v.precision!==null&&(x=i.getMaxPrecision(v.precision),x!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",x,"instead."));const ve=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ue=ve!==void 0?ve.length:0;let we=0;H.morphAttributes.position!==void 0&&(we=1),H.morphAttributes.normal!==void 0&&(we=2),H.morphAttributes.color!==void 0&&(we=3);let X,Oe,Le,ue;if(J){const te=qt[J];X=te.vertexShader,Oe=te.fragmentShader}else X=v.vertexShader,Oe=v.fragmentShader,c.update(v),Le=c.getVertexShaderID(v),ue=c.getFragmentShaderID(v);const de=s.getRenderTarget(),Be=v.alphaTest>0,N=v.clearcoat>0;return{isWebGL2:h,shaderID:J,shaderName:v.type,vertexShader:X,fragmentShader:Oe,defines:v.defines,customVertexShaderID:Le,customFragmentShaderID:ue,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:x,instancing:O.isInstancedMesh===!0,instancingColor:O.isInstancedMesh===!0&&O.instanceColor!==null,supportsVertexTextures:g,outputEncoding:de===null?s.outputEncoding:de.isXRRenderTarget===!0?de.texture.encoding:_n,map:!!v.map,matcap:!!v.matcap,envMap:!!q,envMapMode:q&&q.mapping,envMapCubeUVHeight:Q,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Ih,tangentSpaceNormalMap:v.normalMapType===vi,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Ke,clearcoat:N,clearcoatMap:N&&!!v.clearcoatMap,clearcoatRoughnessMap:N&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:N&&!!v.clearcoatNormalMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===li,alphaMap:!!v.alphaMap,alphaTest:Be,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!H.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!z,useFog:v.fog,fogExp2:z&&z.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:u,skinning:O.isSkinnedMesh===!0&&$>0,maxBones:$,useVertexTexture:d,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Ue,morphTextureStride:we,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:v.toneMapped?s.toneMapping:gn,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===di,flipSided:v.side===st,depthPacking:v.depthPacking!==void 0?v.depthPacking:!1,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function T(v){const C=[];if(v.shaderID?C.push(v.shaderID):(C.push(v.customVertexShaderID),C.push(v.customFragmentShaderID)),v.defines!==void 0)for(const I in v.defines)C.push(I),C.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(M(C,v),w(C,v),C.push(s.outputEncoding)),C.push(v.customProgramCacheKey),C.join()}function M(v,C){v.push(C.precision),v.push(C.outputEncoding),v.push(C.envMapMode),v.push(C.envMapCubeUVHeight),v.push(C.combine),v.push(C.vertexUvs),v.push(C.fogExp2),v.push(C.sizeAttenuation),v.push(C.maxBones),v.push(C.morphTargetsCount),v.push(C.morphAttributeCount),v.push(C.numDirLights),v.push(C.numPointLights),v.push(C.numSpotLights),v.push(C.numHemiLights),v.push(C.numRectAreaLights),v.push(C.numDirLightShadows),v.push(C.numPointLightShadows),v.push(C.numSpotLightShadows),v.push(C.shadowMapType),v.push(C.toneMapping),v.push(C.numClippingPlanes),v.push(C.numClipIntersection)}function w(v,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.map&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.lightMap&&a.enable(7),C.aoMap&&a.enable(8),C.emissiveMap&&a.enable(9),C.bumpMap&&a.enable(10),C.normalMap&&a.enable(11),C.objectSpaceNormalMap&&a.enable(12),C.tangentSpaceNormalMap&&a.enable(13),C.clearcoat&&a.enable(14),C.clearcoatMap&&a.enable(15),C.clearcoatRoughnessMap&&a.enable(16),C.clearcoatNormalMap&&a.enable(17),C.displacementMap&&a.enable(18),C.specularMap&&a.enable(19),C.roughnessMap&&a.enable(20),C.metalnessMap&&a.enable(21),C.gradientMap&&a.enable(22),C.alphaMap&&a.enable(23),C.alphaTest&&a.enable(24),C.vertexColors&&a.enable(25),C.vertexAlphas&&a.enable(26),C.vertexUvs&&a.enable(27),C.vertexTangents&&a.enable(28),C.uvsVertexOnly&&a.enable(29),C.fog&&a.enable(30),v.push(a.mask),a.disableAll(),C.useFog&&a.enable(0),C.flatShading&&a.enable(1),C.logarithmicDepthBuffer&&a.enable(2),C.skinning&&a.enable(3),C.useVertexTexture&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.physicallyCorrectLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.depthPacking&&a.enable(13),C.dithering&&a.enable(14),C.specularIntensityMap&&a.enable(15),C.specularColorMap&&a.enable(16),C.transmission&&a.enable(17),C.transmissionMap&&a.enable(18),C.thicknessMap&&a.enable(19),C.sheen&&a.enable(20),C.sheenColorMap&&a.enable(21),C.sheenRoughnessMap&&a.enable(22),C.decodeVideoTexture&&a.enable(23),C.opaque&&a.enable(24),v.push(a.mask)}function L(v){const C=_[v.type];let I;if(C){const F=qt[C];I=Kh.clone(F.uniforms)}else I=v.uniforms;return I}function R(v,C){let I;for(let F=0,O=l.length;F<O;F++){const z=l[F];if(z.cacheKey===C){I=z,++I.usedTimes;break}}return I===void 0&&(I=new em(s,C,v,r),l.push(I)),I}function j(v){if(--v.usedTimes===0){const C=l.indexOf(v);l[C]=l[l.length-1],l.pop(),v.destroy()}}function re(v){c.remove(v)}function V(){c.dispose()}return{getParameters:p,getProgramCacheKey:T,getUniforms:L,acquireProgram:R,releaseProgram:j,releaseShaderCache:re,programs:l,dispose:V}}function sm(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function om(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function qa(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Xa(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,g,x,_){let m=s[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:_},s[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=x,m.group=_),e++,m}function a(u,d,f,g,x,_){const m=o(u,d,f,g,x,_);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function c(u,d,f,g,x,_){const m=o(u,d,f,g,x,_);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function l(u,d){t.length>1&&t.sort(u||om),n.length>1&&n.sort(d||qa),i.length>1&&i.sort(d||qa)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function am(){let s=new WeakMap;function e(n,i){let r;return s.has(n)===!1?(r=new Xa,s.set(n,[r])):i>=s.get(n).length?(r=new Xa,s.get(n).push(r)):r=s.get(n)[i],r}function t(){s=new WeakMap}return{get:e,dispose:t}}function lm(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new me};break;case"SpotLight":t={position:new E,direction:new E,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new me,groundColor:new me};break;case"RectAreaLight":t={color:new me,position:new E,halfWidth:new E,halfHeight:new E};break}return s[e.id]=t,t}}}function cm(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let hm=0;function um(s,e){return(e.castShadow?1:0)-(s.castShadow?1:0)}function dm(s,e){const t=new lm,n=cm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let h=0;h<9;h++)i.probe.push(new E);const r=new E,o=new _e,a=new _e;function c(h,u){let d=0,f=0,g=0;for(let re=0;re<9;re++)i.probe[re].set(0,0,0);let x=0,_=0,m=0,p=0,T=0,M=0,w=0,L=0;h.sort(um);const R=u!==!0?Math.PI:1;for(let re=0,V=h.length;re<V;re++){const v=h[re],C=v.color,I=v.intensity,F=v.distance,O=v.shadow&&v.shadow.map?v.shadow.map.texture:null;if(v.isAmbientLight)d+=C.r*I*R,f+=C.g*I*R,g+=C.b*I*R;else if(v.isLightProbe)for(let z=0;z<9;z++)i.probe[z].addScaledVector(v.sh.coefficients[z],I);else if(v.isDirectionalLight){const z=t.get(v);if(z.color.copy(v.color).multiplyScalar(v.intensity*R),v.castShadow){const H=v.shadow,D=n.get(v);D.shadowBias=H.bias,D.shadowNormalBias=H.normalBias,D.shadowRadius=H.radius,D.shadowMapSize=H.mapSize,i.directionalShadow[x]=D,i.directionalShadowMap[x]=O,i.directionalShadowMatrix[x]=v.shadow.matrix,M++}i.directional[x]=z,x++}else if(v.isSpotLight){const z=t.get(v);if(z.position.setFromMatrixPosition(v.matrixWorld),z.color.copy(C).multiplyScalar(I*R),z.distance=F,z.coneCos=Math.cos(v.angle),z.penumbraCos=Math.cos(v.angle*(1-v.penumbra)),z.decay=v.decay,v.castShadow){const H=v.shadow,D=n.get(v);D.shadowBias=H.bias,D.shadowNormalBias=H.normalBias,D.shadowRadius=H.radius,D.shadowMapSize=H.mapSize,i.spotShadow[m]=D,i.spotShadowMap[m]=O,i.spotShadowMatrix[m]=v.shadow.matrix,L++}i.spot[m]=z,m++}else if(v.isRectAreaLight){const z=t.get(v);z.color.copy(C).multiplyScalar(I),z.halfWidth.set(v.width*.5,0,0),z.halfHeight.set(0,v.height*.5,0),i.rectArea[p]=z,p++}else if(v.isPointLight){const z=t.get(v);if(z.color.copy(v.color).multiplyScalar(v.intensity*R),z.distance=v.distance,z.decay=v.decay,v.castShadow){const H=v.shadow,D=n.get(v);D.shadowBias=H.bias,D.shadowNormalBias=H.normalBias,D.shadowRadius=H.radius,D.shadowMapSize=H.mapSize,D.shadowCameraNear=H.camera.near,D.shadowCameraFar=H.camera.far,i.pointShadow[_]=D,i.pointShadowMap[_]=O,i.pointShadowMatrix[_]=v.shadow.matrix,w++}i.point[_]=z,_++}else if(v.isHemisphereLight){const z=t.get(v);z.skyColor.copy(v.color).multiplyScalar(I*R),z.groundColor.copy(v.groundColor).multiplyScalar(I*R),i.hemi[T]=z,T++}}p>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=g;const j=i.hash;(j.directionalLength!==x||j.pointLength!==_||j.spotLength!==m||j.rectAreaLength!==p||j.hemiLength!==T||j.numDirectionalShadows!==M||j.numPointShadows!==w||j.numSpotShadows!==L)&&(i.directional.length=x,i.spot.length=m,i.rectArea.length=p,i.point.length=_,i.hemi.length=T,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=L,i.spotShadowMap.length=L,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=w,i.spotShadowMatrix.length=L,j.directionalLength=x,j.pointLength=_,j.spotLength=m,j.rectAreaLength=p,j.hemiLength=T,j.numDirectionalShadows=M,j.numPointShadows=w,j.numSpotShadows=L,i.version=hm++)}function l(h,u){let d=0,f=0,g=0,x=0,_=0;const m=u.matrixWorldInverse;for(let p=0,T=h.length;p<T;p++){const M=h[p];if(M.isDirectionalLight){const w=i.directional[d];w.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(m),d++}else if(M.isSpotLight){const w=i.spot[g];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(m),g++}else if(M.isRectAreaLight){const w=i.rectArea[x];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),a.identity(),o.copy(M.matrixWorld),o.premultiply(m),a.extractRotation(o),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){const w=i.point[f];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const w=i.hemi[_];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(m),w.direction.normalize(),_++}}}return{setup:c,setupView:l,state:i}}function ja(s,e){const t=new dm(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function fm(s,e){let t=new WeakMap;function n(r,o=0){let a;return t.has(r)===!1?(a=new ja(s,e),t.set(r,[a])):o>=t.get(r).length?(a=new ja(s,e),t.get(r).push(a)):a=t.get(r)[o],a}function i(){t=new WeakMap}return{get:n,dispose:i}}class go extends lt{constructor(e){super();this.type="MeshDepthMaterial",this.depthPacking=Ph,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}go.prototype.isMeshDepthMaterial=!0;class xo extends lt{constructor(e){super();this.type="MeshDistanceMaterial",this.referencePosition=new E,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}xo.prototype.isMeshDistanceMaterial=!0;const pm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mm=`uniform sampler2D shadow_pass;
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
}`;function ql(s,e,t){let n=new Jr;const i=new K,r=new K,o=new qe,a=new go({depthPacking:Dh}),c=new xo,l={},h=t.maxTextureSize,u={0:st,1:Gi,2:di},d=new Ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new K},radius:{value:4}},vertexShader:pm,fragmentShader:mm}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ye;g.setAttribute("position",new at(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new yt(g,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sl,this.render=function(M,w,L){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||M.length===0)return;const R=s.getRenderTarget(),j=s.getActiveCubeFace(),re=s.getActiveMipmapLevel(),V=s.state;V.setBlending(mn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);for(let v=0,C=M.length;v<C;v++){const I=M[v],F=I.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);const O=F.getFrameExtents();if(i.multiply(O),r.copy(F.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/O.x),i.x=r.x*O.x,F.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/O.y),i.y=r.y*O.y,F.mapSize.y=r.y)),F.map===null&&!F.isPointLightShadow&&this.type===zi){const H={minFilter:gt,magFilter:gt,format:Mt};F.map=new Lt(i.x,i.y,H),F.map.texture.name=I.name+".shadowMap",F.mapPass=new Lt(i.x,i.y,H),F.camera.updateProjectionMatrix()}if(F.map===null){const H={minFilter:ht,magFilter:ht,format:Mt};F.map=new Lt(i.x,i.y,H),F.map.texture.name=I.name+".shadowMap",F.camera.updateProjectionMatrix()}s.setRenderTarget(F.map),s.clear();const z=F.getViewportCount();for(let H=0;H<z;H++){const D=F.getViewport(H);o.set(r.x*D.x,r.y*D.y,r.x*D.z,r.y*D.w),V.viewport(o),F.updateMatrices(I,H),n=F.getFrustum(),T(w,L,F.camera,I,this.type)}!F.isPointLightShadow&&this.type===zi&&m(F,L),F.needsUpdate=!1}_.needsUpdate=!1,s.setRenderTarget(R,j,re)};function m(M,w){const L=e.update(x);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(w,null,L,d,x,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(w,null,L,f,x,null)}function p(M,w,L,R,j,re){let V=null;const v=L.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(v!==void 0?V=v:V=L.isPointLight===!0?c:a,s.localClippingEnabled&&w.clipShadows===!0&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0){const C=V.uuid,I=w.uuid;let F=l[C];F===void 0&&(F={},l[C]=F);let O=F[I];O===void 0&&(O=V.clone(),F[I]=O),V=O}return V.visible=w.visible,V.wireframe=w.wireframe,re===zi?V.side=w.shadowSide!==null?w.shadowSide:w.side:V.side=w.shadowSide!==null?w.shadowSide:u[w.side],V.alphaMap=w.alphaMap,V.alphaTest=w.alphaTest,V.clipShadows=w.clipShadows,V.clippingPlanes=w.clippingPlanes,V.clipIntersection=w.clipIntersection,V.displacementMap=w.displacementMap,V.displacementScale=w.displacementScale,V.displacementBias=w.displacementBias,V.wireframeLinewidth=w.wireframeLinewidth,V.linewidth=w.linewidth,L.isPointLight===!0&&V.isMeshDistanceMaterial===!0&&(V.referencePosition.setFromMatrixPosition(L.matrixWorld),V.nearDistance=R,V.farDistance=j),V}function T(M,w,L,R,j){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&j===zi)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,M.matrixWorld);const v=e.update(M),C=M.material;if(Array.isArray(C)){const I=v.groups;for(let F=0,O=I.length;F<O;F++){const z=I[F],H=C[z.materialIndex];if(H&&H.visible){const D=p(M,H,R,L.near,L.far,j);s.renderBufferDirect(L,null,v,D,M,z)}}}else if(C.visible){const I=p(M,C,R,L.near,L.far,j);s.renderBufferDirect(L,null,v,I,M,null)}}const V=M.children;for(let v=0,C=V.length;v<C;v++)T(V[v],w,L,R,j)}}function gm(s,e,t){const n=t.isWebGL2;function i(){let A=!1;const ce=new qe;let oe=null;const Ae=new qe(0,0,0,0);return{setMask:function(ae){oe!==ae&&!A&&(s.colorMask(ae,ae,ae,ae),oe=ae)},setLocked:function(ae){A=ae},setClear:function(ae,ee,Te,Fe,vt){vt===!0&&(ae*=Fe,ee*=Fe,Te*=Fe),ce.set(ae,ee,Te,Fe),Ae.equals(ce)===!1&&(s.clearColor(ae,ee,Te,Fe),Ae.copy(ce))},reset:function(){A=!1,oe=null,Ae.set(-1,0,0,0)}}}function r(){let A=!1,ce=null,oe=null,Ae=null;return{setTest:function(ae){ae?we(2929):X(2929)},setMask:function(ae){ce!==ae&&!A&&(s.depthMask(ae),ce=ae)},setFunc:function(ae){if(oe!==ae){if(ae)switch(ae){case Kc:s.depthFunc(512);break;case Qc:s.depthFunc(519);break;case $c:s.depthFunc(513);break;case qs:s.depthFunc(515);break;case eh:s.depthFunc(514);break;case th:s.depthFunc(518);break;case nh:s.depthFunc(516);break;case ih:s.depthFunc(517);break;default:s.depthFunc(515)}else s.depthFunc(515);oe=ae}},setLocked:function(ae){A=ae},setClear:function(ae){Ae!==ae&&(s.clearDepth(ae),Ae=ae)},reset:function(){A=!1,ce=null,oe=null,Ae=null}}}function o(){let A=!1,ce=null,oe=null,Ae=null,ae=null,ee=null,Te=null,Fe=null,vt=null;return{setTest:function(je){A||(je?we(2960):X(2960))},setMask:function(je){ce!==je&&!A&&(s.stencilMask(je),ce=je)},setFunc:function(je,Vt,Gt){(oe!==je||Ae!==Vt||ae!==Gt)&&(s.stencilFunc(je,Vt,Gt),oe=je,Ae=Vt,ae=Gt)},setOp:function(je,Vt,Gt){(ee!==je||Te!==Vt||Fe!==Gt)&&(s.stencilOp(je,Vt,Gt),ee=je,Te=Vt,Fe=Gt)},setLocked:function(je){A=je},setClear:function(je){vt!==je&&(s.clearStencil(je),vt=je)},reset:function(){A=!1,ce=null,oe=null,Ae=null,ae=null,ee=null,Te=null,Fe=null,vt=null}}}const a=new i,c=new r,l=new o;let h={},u={},d=new WeakMap,f=[],g=null,x=!1,_=null,m=null,p=null,T=null,M=null,w=null,L=null,R=!1,j=null,re=null,V=null,v=null,C=null;const I=s.getParameter(35661);let F=!1,O=0;const z=s.getParameter(7938);z.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(z)[1]),F=O>=1):z.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),F=O>=2);let H=null,D={};const q=s.getParameter(3088),Q=s.getParameter(2978),J=new qe().fromArray(q),$=new qe().fromArray(Q);function ve(A,ce,oe){const Ae=new Uint8Array(4),ae=s.createTexture();s.bindTexture(A,ae),s.texParameteri(A,10241,9728),s.texParameteri(A,10240,9728);for(let ee=0;ee<oe;ee++)s.texImage2D(ce+ee,0,6408,1,1,0,6408,5121,Ae);return ae}const Ue={};Ue[3553]=ve(3553,3553,1),Ue[34067]=ve(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),we(2929),c.setFunc(qs),te(!1),he(Uo),we(2884),N(mn);function we(A){h[A]!==!0&&(s.enable(A),h[A]=!0)}function X(A){h[A]!==!1&&(s.disable(A),h[A]=!1)}function Oe(A,ce){return u[A]!==ce?(s.bindFramebuffer(A,ce),u[A]=ce,n&&(A===36009&&(u[36160]=ce),A===36160&&(u[36009]=ce)),!0):!1}function Le(A,ce){let oe=f,Ae=!1;if(A)if(oe=d.get(ce),oe===void 0&&(oe=[],d.set(ce,oe)),A.isWebGLMultipleRenderTargets){const ae=A.texture;if(oe.length!==ae.length||oe[0]!==36064){for(let ee=0,Te=ae.length;ee<Te;ee++)oe[ee]=36064+ee;oe.length=ae.length,Ae=!0}}else oe[0]!==36064&&(oe[0]=36064,Ae=!0);else oe[0]!==1029&&(oe[0]=1029,Ae=!0);Ae&&(t.isWebGL2?s.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function ue(A){return g!==A?(s.useProgram(A),g=A,!0):!1}const de={[ni]:32774,[Hc]:32778,[Vc]:32779};if(n)de[Go]=32775,de[ko]=32776;else{const A=e.get("EXT_blend_minmax");A!==null&&(de[Go]=A.MIN_EXT,de[ko]=A.MAX_EXT)}const Be={[Gc]:0,[kc]:1,[Wc]:768,[Tl]:770,[Jc]:776,[Zc]:774,[Xc]:772,[qc]:769,[Al]:771,[Yc]:775,[jc]:773};function N(A,ce,oe,Ae,ae,ee,Te,Fe){if(A===mn){x===!0&&(X(3042),x=!1);return}if(x===!1&&(we(3042),x=!0),A!==Oc){if(A!==_||Fe!==R){if((m!==ni||M!==ni)&&(s.blendEquation(32774),m=ni,M=ni),Fe)switch(A){case li:s.blendFuncSeparate(1,771,1,771);break;case Oo:s.blendFunc(1,1);break;case Ho:s.blendFuncSeparate(0,769,0,1);break;case Vo:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case li:s.blendFuncSeparate(770,771,1,771);break;case Oo:s.blendFunc(770,1);break;case Ho:s.blendFuncSeparate(0,769,0,1);break;case Vo:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}p=null,T=null,w=null,L=null,_=A,R=Fe}return}ae=ae||ce,ee=ee||oe,Te=Te||Ae,(ce!==m||ae!==M)&&(s.blendEquationSeparate(de[ce],de[ae]),m=ce,M=ae),(oe!==p||Ae!==T||ee!==w||Te!==L)&&(s.blendFuncSeparate(Be[oe],Be[Ae],Be[ee],Be[Te]),p=oe,T=Ae,w=ee,L=Te),_=A,R=null}function Y(A,ce){A.side===di?X(2884):we(2884);let oe=A.side===st;ce&&(oe=!oe),te(oe),A.blending===li&&A.transparent===!1?N(mn):N(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.premultipliedAlpha),c.setFunc(A.depthFunc),c.setTest(A.depthTest),c.setMask(A.depthWrite),a.setMask(A.colorWrite);const Ae=A.stencilWrite;l.setTest(Ae),Ae&&(l.setMask(A.stencilWriteMask),l.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),l.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),Me(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?we(32926):X(32926)}function te(A){j!==A&&(A?s.frontFace(2304):s.frontFace(2305),j=A)}function he(A){A!==zc?(we(2884),A!==re&&(A===Uo?s.cullFace(1029):A===Nc?s.cullFace(1028):s.cullFace(1032))):X(2884),re=A}function se(A){A!==V&&(F&&s.lineWidth(A),V=A)}function Me(A,ce,oe){A?(we(32823),(v!==ce||C!==oe)&&(s.polygonOffset(ce,oe),v=ce,C=oe)):X(32823)}function ge(A){A?we(3089):X(3089)}function Re(A){A===void 0&&(A=33984+I-1),H!==A&&(s.activeTexture(A),H=A)}function Je(A,ce){H===null&&Re();let oe=D[H];oe===void 0&&(oe={type:void 0,texture:void 0},D[H]=oe),(oe.type!==A||oe.texture!==ce)&&(s.bindTexture(A,ce||Ue[A]),oe.type=A,oe.texture=ce)}function S(){const A=D[H];A!==void 0&&A.type!==void 0&&(s.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function y(){try{s.compressedTexImage2D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function G(){try{s.texSubImage2D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Z(){try{s.texSubImage3D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ne(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function le(){try{s.texStorage2D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ye(){try{s.texStorage3D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function k(){try{s.texImage2D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Se(){try{s.texImage3D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ee(A){J.equals(A)===!1&&(s.scissor(A.x,A.y,A.z,A.w),J.copy(A))}function xe(A){$.equals(A)===!1&&(s.viewport(A.x,A.y,A.z,A.w),$.copy(A))}function fe(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},H=null,D={},u={},d=new WeakMap,f=[],g=null,x=!1,_=null,m=null,p=null,T=null,M=null,w=null,L=null,R=!1,j=null,re=null,V=null,v=null,C=null,J.set(0,0,s.canvas.width,s.canvas.height),$.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:we,disable:X,bindFramebuffer:Oe,drawBuffers:Le,useProgram:ue,setBlending:N,setMaterial:Y,setFlipSided:te,setCullFace:he,setLineWidth:se,setPolygonOffset:Me,setScissorTest:ge,activeTexture:Re,bindTexture:Je,unbindTexture:S,compressedTexImage2D:y,texImage2D:k,texImage3D:Se,texStorage2D:le,texStorage3D:ye,texSubImage2D:G,texSubImage3D:Z,compressedTexSubImage2D:ne,scissor:Ee,viewport:xe,reset:fe}}function xm(s,e,t,n,i,r,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=new WeakMap;let g;const x=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(S,y){return _?new OffscreenCanvas(S,y):qi("canvas")}function p(S,y,G,Z){let ne=1;if((S.width>Z||S.height>Z)&&(ne=Z/Math.max(S.width,S.height)),ne<1||y===!0)if(typeof HTMLImageElement!="undefined"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&S instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&S instanceof ImageBitmap){const le=y?Qs:Math.floor,ye=le(ne*S.width),k=le(ne*S.height);g===void 0&&(g=m(ye,k));const Se=G?m(ye,k):g;return Se.width=ye,Se.height=k,Se.getContext("2d").drawImage(S,0,0,ye,k),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+ye+"x"+k+")."),Se}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function T(S){return pa(S.width)&&pa(S.height)}function M(S){return a?!1:S.wrapS!==Ut||S.wrapT!==Ut||S.minFilter!==ht&&S.minFilter!==gt}function w(S,y){return S.generateMipmaps&&y&&S.minFilter!==ht&&S.minFilter!==gt}function L(S){s.generateMipmap(S)}function R(S,y,G,Z,ne=!1){if(a===!1)return y;if(S!==null){if(s[S]!==void 0)return s[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let le=y;return y===6403&&(G===5126&&(le=33326),G===5131&&(le=33325),G===5121&&(le=33321)),y===33319&&(G===5126&&(le=33328),G===5131&&(le=33327),G===5121&&(le=33323)),y===6408&&(G===5126&&(le=34836),G===5131&&(le=34842),G===5121&&(le=Z===Ke&&ne===!1?35907:32856),G===32819&&(le=32854),G===32820&&(le=32855)),(le===33325||le===33326||le===33327||le===33328||le===34842||le===34836)&&e.get("EXT_color_buffer_float"),le}function j(S,y,G){return w(S,G)===!0||S.isFramebufferTexture&&S.minFilter!==ht&&S.minFilter!==gt?Math.log2(Math.max(y.width,y.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?y.mipmaps.length:1}function re(S){return S===ht||S===Wo||S===qo?9728:9729}function V(S){const y=S.target;y.removeEventListener("dispose",V),C(y),y.isVideoTexture&&f.delete(y)}function v(S){const y=S.target;y.removeEventListener("dispose",v),F(y)}function C(S){const y=n.get(S);if(y.__webglInit===void 0)return;const G=S.source,Z=x.get(G);if(Z){const ne=Z[y.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&I(S),Object.keys(Z).length===0&&x.delete(G)}n.remove(S)}function I(S){const y=n.get(S);s.deleteTexture(y.__webglTexture);const G=S.source,Z=x.get(G);delete Z[y.__cacheKey],o.memory.textures--}function F(S){const y=S.texture,G=n.get(S),Z=n.get(y);if(Z.__webglTexture!==void 0&&(s.deleteTexture(Z.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)s.deleteFramebuffer(G.__webglFramebuffer[ne]),G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer[ne]);else s.deleteFramebuffer(G.__webglFramebuffer),G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&s.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer&&s.deleteRenderbuffer(G.__webglColorRenderbuffer),G.__webglDepthRenderbuffer&&s.deleteRenderbuffer(G.__webglDepthRenderbuffer);if(S.isWebGLMultipleRenderTargets)for(let ne=0,le=y.length;ne<le;ne++){const ye=n.get(y[ne]);ye.__webglTexture&&(s.deleteTexture(ye.__webglTexture),o.memory.textures--),n.remove(y[ne])}n.remove(y),n.remove(S)}let O=0;function z(){O=0}function H(){const S=O;return S>=c&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+c),O+=1,S}function D(S){const y=[];return y.push(S.wrapS),y.push(S.wrapT),y.push(S.magFilter),y.push(S.minFilter),y.push(S.anisotropy),y.push(S.internalFormat),y.push(S.format),y.push(S.type),y.push(S.generateMipmaps),y.push(S.premultiplyAlpha),y.push(S.flipY),y.push(S.unpackAlignment),y.push(S.encoding),y.join()}function q(S,y){const G=n.get(S);if(S.isVideoTexture&&Re(S),S.isRenderTargetTexture===!1&&S.version>0&&G.__version!==S.version){const Z=S.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(G,S,y);return}}t.activeTexture(33984+y),t.bindTexture(3553,G.__webglTexture)}function Q(S,y){const G=n.get(S);if(S.version>0&&G.__version!==S.version){Oe(G,S,y);return}t.activeTexture(33984+y),t.bindTexture(35866,G.__webglTexture)}function J(S,y){const G=n.get(S);if(S.version>0&&G.__version!==S.version){Oe(G,S,y);return}t.activeTexture(33984+y),t.bindTexture(32879,G.__webglTexture)}function $(S,y){const G=n.get(S);if(S.version>0&&G.__version!==S.version){Le(G,S,y);return}t.activeTexture(33984+y),t.bindTexture(34067,G.__webglTexture)}const ve={[Zs]:10497,[Ut]:33071,[Ys]:33648},Ue={[ht]:9728,[Wo]:9984,[qo]:9986,[gt]:9729,[uh]:9985,[Xr]:9987};function we(S,y,G){if(G?(s.texParameteri(S,10242,ve[y.wrapS]),s.texParameteri(S,10243,ve[y.wrapT]),(S===32879||S===35866)&&s.texParameteri(S,32882,ve[y.wrapR]),s.texParameteri(S,10240,Ue[y.magFilter]),s.texParameteri(S,10241,Ue[y.minFilter])):(s.texParameteri(S,10242,33071),s.texParameteri(S,10243,33071),(S===32879||S===35866)&&s.texParameteri(S,32882,33071),(y.wrapS!==Ut||y.wrapT!==Ut)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(S,10240,re(y.magFilter)),s.texParameteri(S,10241,re(y.minFilter)),y.minFilter!==ht&&y.minFilter!==gt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Z=e.get("EXT_texture_filter_anisotropic");if(y.type===Ln&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===ci&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(s.texParameterf(S,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function X(S,y){let G=!1;S.__webglInit===void 0&&(S.__webglInit=!0,y.addEventListener("dispose",V));const Z=y.source;let ne=x.get(Z);ne===void 0&&(ne={},x.set(Z,ne));const le=D(y);if(le!==S.__cacheKey){ne[le]===void 0&&(ne[le]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ne[le].usedTimes++;const ye=ne[S.__cacheKey];ye!==void 0&&(ne[S.__cacheKey].usedTimes--,ye.usedTimes===0&&I(y)),S.__cacheKey=le,S.__webglTexture=ne[le].texture}return G}function Oe(S,y,G){let Z=3553;y.isDataArrayTexture&&(Z=35866),y.isData3DTexture&&(Z=32879);const ne=X(S,y),le=y.source;if(t.activeTexture(33984+G),t.bindTexture(Z,S.__webglTexture),le.version!==le.__currentVersion||ne===!0){s.pixelStorei(37440,y.flipY),s.pixelStorei(37441,y.premultiplyAlpha),s.pixelStorei(3317,y.unpackAlignment),s.pixelStorei(37443,0);const ye=M(y)&&T(y.image)===!1;let k=p(y.image,ye,!1,h);k=Je(y,k);const Se=T(k)||a,Ee=r.convert(y.format,y.encoding);let xe=r.convert(y.type),fe=R(y.internalFormat,Ee,xe,y.encoding,y.isVideoTexture);we(Z,y,Se);let A;const ce=y.mipmaps,oe=a&&y.isVideoTexture!==!0,Ae=S.__version===void 0,ae=j(y,k,Se);if(y.isDepthTexture)fe=6402,a?y.type===Ln?fe=36012:y.type===zr?fe=33190:y.type===hi?fe=35056:fe=33189:y.type===Ln&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Rn&&fe===6402&&y.type!==ki&&y.type!==zr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=ki,xe=r.convert(y.type)),y.format===mi&&fe===6402&&(fe=34041,y.type!==hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=hi,xe=r.convert(y.type))),oe&&Ae?t.texStorage2D(3553,1,fe,k.width,k.height):t.texImage2D(3553,0,fe,k.width,k.height,0,Ee,xe,null);else if(y.isDataTexture)if(ce.length>0&&Se){oe&&Ae&&t.texStorage2D(3553,ae,fe,ce[0].width,ce[0].height);for(let ee=0,Te=ce.length;ee<Te;ee++)A=ce[ee],oe?t.texSubImage2D(3553,ee,0,0,A.width,A.height,Ee,xe,A.data):t.texImage2D(3553,ee,fe,A.width,A.height,0,Ee,xe,A.data);y.generateMipmaps=!1}else oe?(Ae&&t.texStorage2D(3553,ae,fe,k.width,k.height),t.texSubImage2D(3553,0,0,0,k.width,k.height,Ee,xe,k.data)):t.texImage2D(3553,0,fe,k.width,k.height,0,Ee,xe,k.data);else if(y.isCompressedTexture){oe&&Ae&&t.texStorage2D(3553,ae,fe,ce[0].width,ce[0].height);for(let ee=0,Te=ce.length;ee<Te;ee++)A=ce[ee],y.format!==Mt?Ee!==null?oe?t.compressedTexSubImage2D(3553,ee,0,0,A.width,A.height,Ee,A.data):t.compressedTexImage2D(3553,ee,fe,A.width,A.height,0,A.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?t.texSubImage2D(3553,ee,0,0,A.width,A.height,Ee,xe,A.data):t.texImage2D(3553,ee,fe,A.width,A.height,0,Ee,xe,A.data)}else if(y.isDataArrayTexture)oe?(Ae&&t.texStorage3D(35866,ae,fe,k.width,k.height,k.depth),t.texSubImage3D(35866,0,0,0,0,k.width,k.height,k.depth,Ee,xe,k.data)):t.texImage3D(35866,0,fe,k.width,k.height,k.depth,0,Ee,xe,k.data);else if(y.isData3DTexture)oe?(Ae&&t.texStorage3D(32879,ae,fe,k.width,k.height,k.depth),t.texSubImage3D(32879,0,0,0,0,k.width,k.height,k.depth,Ee,xe,k.data)):t.texImage3D(32879,0,fe,k.width,k.height,k.depth,0,Ee,xe,k.data);else if(y.isFramebufferTexture)oe&&Ae?t.texStorage2D(3553,ae,fe,k.width,k.height):t.texImage2D(3553,0,fe,k.width,k.height,0,Ee,xe,null);else if(ce.length>0&&Se){oe&&Ae&&t.texStorage2D(3553,ae,fe,ce[0].width,ce[0].height);for(let ee=0,Te=ce.length;ee<Te;ee++)A=ce[ee],oe?t.texSubImage2D(3553,ee,0,0,Ee,xe,A):t.texImage2D(3553,ee,fe,Ee,xe,A);y.generateMipmaps=!1}else oe?(Ae&&t.texStorage2D(3553,ae,fe,k.width,k.height),t.texSubImage2D(3553,0,0,0,Ee,xe,k)):t.texImage2D(3553,0,fe,Ee,xe,k);w(y,Se)&&L(Z),le.__currentVersion=le.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function Le(S,y,G){if(y.image.length!==6)return;const Z=X(S,y),ne=y.source;if(t.activeTexture(33984+G),t.bindTexture(34067,S.__webglTexture),ne.version!==ne.__currentVersion||Z===!0){s.pixelStorei(37440,y.flipY),s.pixelStorei(37441,y.premultiplyAlpha),s.pixelStorei(3317,y.unpackAlignment),s.pixelStorei(37443,0);const le=y.isCompressedTexture||y.image[0].isCompressedTexture,ye=y.image[0]&&y.image[0].isDataTexture,k=[];for(let ee=0;ee<6;ee++)!le&&!ye?k[ee]=p(y.image[ee],!1,!0,l):k[ee]=ye?y.image[ee].image:y.image[ee],k[ee]=Je(y,k[ee]);const Se=k[0],Ee=T(Se)||a,xe=r.convert(y.format,y.encoding),fe=r.convert(y.type),A=R(y.internalFormat,xe,fe,y.encoding),ce=a&&y.isVideoTexture!==!0,oe=S.__version===void 0;let Ae=j(y,Se,Ee);we(34067,y,Ee);let ae;if(le){ce&&oe&&t.texStorage2D(34067,Ae,A,Se.width,Se.height);for(let ee=0;ee<6;ee++){ae=k[ee].mipmaps;for(let Te=0;Te<ae.length;Te++){const Fe=ae[Te];y.format!==Mt?xe!==null?ce?t.compressedTexSubImage2D(34069+ee,Te,0,0,Fe.width,Fe.height,xe,Fe.data):t.compressedTexImage2D(34069+ee,Te,A,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ce?t.texSubImage2D(34069+ee,Te,0,0,Fe.width,Fe.height,xe,fe,Fe.data):t.texImage2D(34069+ee,Te,A,Fe.width,Fe.height,0,xe,fe,Fe.data)}}}else{ae=y.mipmaps,ce&&oe&&(ae.length>0&&Ae++,t.texStorage2D(34067,Ae,A,k[0].width,k[0].height));for(let ee=0;ee<6;ee++)if(ye){ce?t.texSubImage2D(34069+ee,0,0,0,k[ee].width,k[ee].height,xe,fe,k[ee].data):t.texImage2D(34069+ee,0,A,k[ee].width,k[ee].height,0,xe,fe,k[ee].data);for(let Te=0;Te<ae.length;Te++){const vt=ae[Te].image[ee].image;ce?t.texSubImage2D(34069+ee,Te+1,0,0,vt.width,vt.height,xe,fe,vt.data):t.texImage2D(34069+ee,Te+1,A,vt.width,vt.height,0,xe,fe,vt.data)}}else{ce?t.texSubImage2D(34069+ee,0,0,0,xe,fe,k[ee]):t.texImage2D(34069+ee,0,A,xe,fe,k[ee]);for(let Te=0;Te<ae.length;Te++){const Fe=ae[Te];ce?t.texSubImage2D(34069+ee,Te+1,0,0,xe,fe,Fe.image[ee]):t.texImage2D(34069+ee,Te+1,A,xe,fe,Fe.image[ee])}}}w(y,Ee)&&L(34067),ne.__currentVersion=ne.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function ue(S,y,G,Z,ne){const le=r.convert(G.format,G.encoding),ye=r.convert(G.type),k=R(G.internalFormat,le,ye,G.encoding);n.get(y).__hasExternalTextures||(ne===32879||ne===35866?t.texImage3D(ne,0,k,y.width,y.height,y.depth,0,le,ye,null):t.texImage2D(ne,0,k,y.width,y.height,0,le,ye,null)),t.bindFramebuffer(36160,S),ge(y)?d.framebufferTexture2DMultisampleEXT(36160,Z,ne,n.get(G).__webglTexture,0,Me(y)):s.framebufferTexture2D(36160,Z,ne,n.get(G).__webglTexture,0),t.bindFramebuffer(36160,null)}function de(S,y,G){if(s.bindRenderbuffer(36161,S),y.depthBuffer&&!y.stencilBuffer){let Z=33189;if(G||ge(y)){const ne=y.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Ln?Z=36012:ne.type===zr&&(Z=33190));const le=Me(y);ge(y)?d.renderbufferStorageMultisampleEXT(36161,le,Z,y.width,y.height):s.renderbufferStorageMultisample(36161,le,Z,y.width,y.height)}else s.renderbufferStorage(36161,Z,y.width,y.height);s.framebufferRenderbuffer(36160,36096,36161,S)}else if(y.depthBuffer&&y.stencilBuffer){const Z=Me(y);G&&ge(y)===!1?s.renderbufferStorageMultisample(36161,Z,35056,y.width,y.height):ge(y)?d.renderbufferStorageMultisampleEXT(36161,Z,35056,y.width,y.height):s.renderbufferStorage(36161,34041,y.width,y.height),s.framebufferRenderbuffer(36160,33306,36161,S)}else{const Z=y.isWebGLMultipleRenderTargets===!0?y.texture[0]:y.texture,ne=r.convert(Z.format,Z.encoding),le=r.convert(Z.type),ye=R(Z.internalFormat,ne,le,Z.encoding),k=Me(y);G&&ge(y)===!1?s.renderbufferStorageMultisample(36161,k,ye,y.width,y.height):ge(y)?d.renderbufferStorageMultisampleEXT(36161,k,ye,y.width,y.height):s.renderbufferStorage(36161,ye,y.width,y.height)}s.bindRenderbuffer(36161,null)}function Be(S,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,S),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),q(y.depthTexture,0);const Z=n.get(y.depthTexture).__webglTexture,ne=Me(y);if(y.depthTexture.format===Rn)ge(y)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,Z,0,ne):s.framebufferTexture2D(36160,36096,3553,Z,0);else if(y.depthTexture.format===mi)ge(y)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,Z,0,ne):s.framebufferTexture2D(36160,33306,3553,Z,0);else throw new Error("Unknown depthTexture format")}function N(S){const y=n.get(S),G=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!y.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Be(y.__webglFramebuffer,S)}else if(G){y.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)t.bindFramebuffer(36160,y.__webglFramebuffer[Z]),y.__webglDepthbuffer[Z]=s.createRenderbuffer(),de(y.__webglDepthbuffer[Z],S,!1)}else t.bindFramebuffer(36160,y.__webglFramebuffer),y.__webglDepthbuffer=s.createRenderbuffer(),de(y.__webglDepthbuffer,S,!1);t.bindFramebuffer(36160,null)}function Y(S,y,G){const Z=n.get(S);y!==void 0&&ue(Z.__webglFramebuffer,S,S.texture,36064,3553),G!==void 0&&N(S)}function te(S){const y=S.texture,G=n.get(S),Z=n.get(y);S.addEventListener("dispose",v),S.isWebGLMultipleRenderTargets!==!0&&(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=y.version,o.memory.textures++);const ne=S.isWebGLCubeRenderTarget===!0,le=S.isWebGLMultipleRenderTargets===!0,ye=T(S)||a;if(ne){G.__webglFramebuffer=[];for(let k=0;k<6;k++)G.__webglFramebuffer[k]=s.createFramebuffer()}else if(G.__webglFramebuffer=s.createFramebuffer(),le)if(i.drawBuffers){const k=S.texture;for(let Se=0,Ee=k.length;Se<Ee;Se++){const xe=n.get(k[Se]);xe.__webglTexture===void 0&&(xe.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(a&&S.samples>0&&ge(S)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=s.createRenderbuffer(),s.bindRenderbuffer(36161,G.__webglColorRenderbuffer);const k=r.convert(y.format,y.encoding),Se=r.convert(y.type),Ee=R(y.internalFormat,k,Se,y.encoding),xe=Me(S);s.renderbufferStorageMultisample(36161,xe,Ee,S.width,S.height),t.bindFramebuffer(36160,G.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064,36161,G.__webglColorRenderbuffer),s.bindRenderbuffer(36161,null),S.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),de(G.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(36160,null)}if(ne){t.bindTexture(34067,Z.__webglTexture),we(34067,y,ye);for(let k=0;k<6;k++)ue(G.__webglFramebuffer[k],S,y,36064,34069+k);w(y,ye)&&L(34067),t.unbindTexture()}else if(le){const k=S.texture;for(let Se=0,Ee=k.length;Se<Ee;Se++){const xe=k[Se],fe=n.get(xe);t.bindTexture(3553,fe.__webglTexture),we(3553,xe,ye),ue(G.__webglFramebuffer,S,xe,36064+Se,3553),w(xe,ye)&&L(3553)}t.unbindTexture()}else{let k=3553;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?k=S.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(k,Z.__webglTexture),we(k,y,ye),ue(G.__webglFramebuffer,S,y,36064,k),w(y,ye)&&L(k),t.unbindTexture()}S.depthBuffer&&N(S)}function he(S){const y=T(S)||a,G=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let Z=0,ne=G.length;Z<ne;Z++){const le=G[Z];if(w(le,y)){const ye=S.isWebGLCubeRenderTarget?34067:3553,k=n.get(le).__webglTexture;t.bindTexture(ye,k),L(ye),t.unbindTexture()}}}function se(S){if(a&&S.samples>0&&ge(S)===!1){const y=S.width,G=S.height;let Z=16384;const ne=[36064],le=S.stencilBuffer?33306:36096;S.depthBuffer&&ne.push(le);const ye=n.get(S),k=ye.__ignoreDepthValues!==void 0?ye.__ignoreDepthValues:!1;k===!1&&(S.depthBuffer&&(Z|=256),S.stencilBuffer&&(Z|=1024)),t.bindFramebuffer(36008,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ye.__webglFramebuffer),k===!0&&(s.invalidateFramebuffer(36008,[le]),s.invalidateFramebuffer(36009,[le])),s.blitFramebuffer(0,0,y,G,0,0,y,G,Z,9728),s.invalidateFramebuffer(36008,ne),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,ye.__webglMultisampledFramebuffer)}}function Me(S){return Math.min(u,S.samples)}function ge(S){const y=n.get(S);return a&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Re(S){const y=o.render.frame;f.get(S)!==y&&(f.set(S,y),S.update())}function Je(S,y){const G=S.encoding,Z=S.format,ne=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Js||G!==_n&&(G===Ke?a===!1?e.has("EXT_sRGB")===!0&&Z===Mt?(S.format=Js,S.minFilter=gt,S.generateMipmaps=!1):y=In.sRGBToLinear(y):(Z!==Mt||ne!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",G)),y}this.allocateTextureUnit=H,this.resetTextureUnits=z,this.setTexture2D=q,this.setTexture2DArray=Q,this.setTexture3D=J,this.setTextureCube=$,this.rebindTextures=Y,this.setupRenderTarget=te,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=N,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=ge}function vm(s,e,t){const n=t.isWebGL2;function i(r,o=null){let a;if(r===Pn)return 5121;if(r===mh)return 32819;if(r===gh)return 32820;if(r===dh)return 5120;if(r===fh)return 5122;if(r===ki)return 5123;if(r===ph)return 5124;if(r===zr)return 5125;if(r===Ln)return 5126;if(r===ci)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===xh)return 6406;if(r===Mt)return 6408;if(r===_h)return 6409;if(r===yh)return 6410;if(r===Rn)return 6402;if(r===mi)return 34041;if(r===wh)return 6403;if(r===vh)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===Js)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Mh)return 36244;if(r===bh)return 33319;if(r===Sh)return 33320;if(r===Eh)return 36249;if(r===rs||r===ss||r===os||r===as)if(o===Ke)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===rs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ss)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===os)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===as)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===rs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ss)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===os)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===as)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Xo||r===jo||r===Zo||r===Yo)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Xo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===jo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Zo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Yo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Th)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Jo||r===Ko)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Jo)return o===Ke?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Ko)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Qo||r===$o||r===ea||r===ta||r===na||r===ia||r===ra||r===sa||r===oa||r===aa||r===la||r===ca||r===ha||r===ua)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Qo)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===$o)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ea)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ta)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===na)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ia)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ra)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===sa)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===oa)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===aa)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===la)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ca)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ha)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ua)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===da)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===da)return o===Ke?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===hi)return n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}class Xl extends _t{constructor(e=[]){super();this.cameras=e}}Xl.prototype.isArrayCamera=!0;class Ui extends We{constructor(){super();this.type="Group"}}Ui.prototype.isGroup=!0;const _m={type:"move"};class Ns{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_m))),l&&e.hand){o=!0;for(const x of e.hand.values()){const _=t.getJointPose(x,n);if(l.joints[x.jointName]===void 0){const p=new Ui;p.matrixAutoUpdate=!1,p.visible=!1,l.joints[x.jointName]=p,l.add(p)}const m=l.joints[x.jointName];_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=_.radius),m.visible=_!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}}class jl extends ut{constructor(e,t,n,i,r,o,a,c,l,h){if(h=h!==void 0?h:Rn,h!==Rn&&h!==mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Rn&&(n=ki),n===void 0&&h===mi&&(n=hi);super(null,i,r,o,a,c,h,n,l);this.image={width:e,height:t},this.magFilter=a!==void 0?a:ht,this.minFilter=c!==void 0?c:ht,this.flipY=!1,this.generateMipmaps=!1}}jl.prototype.isDepthTexture=!0;class ym extends Dn{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=null,l=null,h=null,u=null,d=null;const f=t.getContextAttributes();let g=null,x=null;const _=[],m=new Map,p=new _t;p.layers.enable(1),p.viewport=new qe;const T=new _t;T.layers.enable(2),T.viewport=new qe;const M=[p,T],w=new Xl;w.layers.enable(1),w.layers.enable(2);let L=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let q=_[D];return q===void 0&&(q=new Ns,_[D]=q),q.getTargetRaySpace()},this.getControllerGrip=function(D){let q=_[D];return q===void 0&&(q=new Ns,_[D]=q),q.getGripSpace()},this.getHand=function(D){let q=_[D];return q===void 0&&(q=new Ns,_[D]=q),q.getHandSpace()};function j(D){const q=m.get(D.inputSource);q&&q.dispatchEvent({type:D.type,data:D.inputSource})}function re(){m.forEach(function(D,q){D.disconnect(q)}),m.clear(),L=null,R=null,e.setRenderTarget(g),u=null,h=null,l=null,i=null,x=null,H.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){r=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getBaseLayer=function(){return h!==null?h:u},this.getBinding=function(){return l},this.getFrame=function(){return d},this.getSession=function(){return i},this.setSession=async function(D){if(i=D,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",j),i.addEventListener("selectstart",j),i.addEventListener("selectend",j),i.addEventListener("squeeze",j),i.addEventListener("squeezestart",j),i.addEventListener("squeezeend",j),i.addEventListener("end",re),i.addEventListener("inputsourceschange",V),f.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:i.renderState.layers===void 0?f.antialias:!0,alpha:f.alpha,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,t,q),i.updateRenderState({baseLayer:u}),x=new Lt(u.framebufferWidth,u.framebufferHeight,{format:Mt,type:Pn,encoding:e.outputEncoding})}else{let q=null,Q=null,J=null;f.depth&&(J=f.stencil?35056:33190,q=f.stencil?mi:Rn,Q=f.stencil?hi:ki);const $={colorFormat:e.outputEncoding===Ke?35907:32856,depthFormat:J,scaleFactor:r};l=new XRWebGLBinding(i,t),h=l.createProjectionLayer($),i.updateRenderState({layers:[h]}),x=new Lt(h.textureWidth,h.textureHeight,{format:Mt,type:Pn,depthTexture:new jl(h.textureWidth,h.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:f.stencil,encoding:e.outputEncoding,samples:f.antialias?4:0});const ve=e.properties.get(x);ve.__ignoreDepthValues=h.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(1),o=await i.requestReferenceSpace(a),H.setContext(i),H.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function V(D){const q=i.inputSources;for(let Q=0;Q<_.length;Q++)m.set(q[Q],_[Q]);for(let Q=0;Q<D.removed.length;Q++){const J=D.removed[Q],$=m.get(J);$&&($.dispatchEvent({type:"disconnected",data:J}),m.delete(J))}for(let Q=0;Q<D.added.length;Q++){const J=D.added[Q],$=m.get(J);$&&$.dispatchEvent({type:"connected",data:J})}}const v=new E,C=new E;function I(D,q,Q){v.setFromMatrixPosition(q.matrixWorld),C.setFromMatrixPosition(Q.matrixWorld);const J=v.distanceTo(C),$=q.projectionMatrix.elements,ve=Q.projectionMatrix.elements,Ue=$[14]/($[10]-1),we=$[14]/($[10]+1),X=($[9]+1)/$[5],Oe=($[9]-1)/$[5],Le=($[8]-1)/$[0],ue=(ve[8]+1)/ve[0],de=Ue*Le,Be=Ue*ue,N=J/(-Le+ue),Y=N*-Le;q.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(Y),D.translateZ(N),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const te=Ue+N,he=we+N,se=de-Y,Me=Be+(J-Y),ge=X*we/he*te,Re=Oe*we/he*te;D.projectionMatrix.makePerspective(se,Me,ge,Re,te,he)}function F(D,q){q===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(q.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(i===null)return;w.near=T.near=p.near=D.near,w.far=T.far=p.far=D.far,(L!==w.near||R!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),L=w.near,R=w.far);const q=D.parent,Q=w.cameras;F(w,q);for(let $=0;$<Q.length;$++)F(Q[$],q);w.matrixWorld.decompose(w.position,w.quaternion,w.scale),D.position.copy(w.position),D.quaternion.copy(w.quaternion),D.scale.copy(w.scale),D.matrix.copy(w.matrix),D.matrixWorld.copy(w.matrixWorld);const J=D.children;for(let $=0,ve=J.length;$<ve;$++)J[$].updateMatrixWorld(!0);Q.length===2?I(w,p,T):w.projectionMatrix.copy(p.projectionMatrix)},this.getCamera=function(){return w},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(u!==null)return u.fixedFoveation},this.setFoveation=function(D){h!==null&&(h.fixedFoveation=D),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=D)};let O=null;function z(D,q){if(c=q.getViewerPose(o),d=q,c!==null){const J=c.views;u!==null&&(e.setRenderTargetFramebuffer(x,u.framebuffer),e.setRenderTarget(x));let $=!1;J.length!==w.cameras.length&&(w.cameras.length=0,$=!0);for(let ve=0;ve<J.length;ve++){const Ue=J[ve];let we=null;if(u!==null)we=u.getViewport(Ue);else{const Oe=l.getViewSubImage(h,Ue);we=Oe.viewport,ve===0&&(e.setRenderTargetTextures(x,Oe.colorTexture,h.ignoreDepthValues?void 0:Oe.depthStencilTexture),e.setRenderTarget(x))}const X=M[ve];X.matrix.fromArray(Ue.transform.matrix),X.projectionMatrix.fromArray(Ue.projectionMatrix),X.viewport.set(we.x,we.y,we.width,we.height),ve===0&&w.matrix.copy(X.matrix),$===!0&&w.cameras.push(X)}}const Q=i.inputSources;for(let J=0;J<_.length;J++){const $=_[J],ve=Q[J];$.update(ve,q,o)}O&&O(D,q),d=null}const H=new Nl;H.setAnimationLoop(z),this.setAnimationLoop=function(D){O=D},this.dispose=function(){}}}function wm(s){function e(m,p){m.fogColor.value.copy(p.color),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function t(m,p,T,M,w){p.isMeshBasicMaterial?n(m,p):p.isMeshLambertMaterial?(n(m,p),c(m,p)):p.isMeshToonMaterial?(n(m,p),h(m,p)):p.isMeshPhongMaterial?(n(m,p),l(m,p)):p.isMeshStandardMaterial?(n(m,p),p.isMeshPhysicalMaterial?d(m,p,w):u(m,p)):p.isMeshMatcapMaterial?(n(m,p),f(m,p)):p.isMeshDepthMaterial?(n(m,p),g(m,p)):p.isMeshDistanceMaterial?(n(m,p),x(m,p)):p.isMeshNormalMaterial?(n(m,p),_(m,p)):p.isLineBasicMaterial?(i(m,p),p.isLineDashedMaterial&&r(m,p)):p.isPointsMaterial?o(m,p,T,M):p.isSpriteMaterial?a(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function n(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=s.get(p).envMap;T&&(m.envMap.value=T,m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let M;p.map?M=p.map:p.specularMap?M=p.specularMap:p.displacementMap?M=p.displacementMap:p.normalMap?M=p.normalMap:p.bumpMap?M=p.bumpMap:p.roughnessMap?M=p.roughnessMap:p.metalnessMap?M=p.metalnessMap:p.alphaMap?M=p.alphaMap:p.emissiveMap?M=p.emissiveMap:p.clearcoatMap?M=p.clearcoatMap:p.clearcoatNormalMap?M=p.clearcoatNormalMap:p.clearcoatRoughnessMap?M=p.clearcoatRoughnessMap:p.specularIntensityMap?M=p.specularIntensityMap:p.specularColorMap?M=p.specularColorMap:p.transmissionMap?M=p.transmissionMap:p.thicknessMap?M=p.thicknessMap:p.sheenColorMap?M=p.sheenColorMap:p.sheenRoughnessMap&&(M=p.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),m.uvTransform.value.copy(M.matrix));let w;p.aoMap?w=p.aoMap:p.lightMap&&(w=p.lightMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uv2Transform.value.copy(w.matrix))}function i(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function r(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function o(m,p,T,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=M*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let w;p.map?w=p.map:p.alphaMap&&(w=p.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uvTransform.value.copy(w.matrix))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let T;p.map?T=p.map:p.alphaMap&&(T=p.alphaMap),T!==void 0&&(T.matrixAutoUpdate===!0&&T.updateMatrix(),m.uvTransform.value.copy(T.matrix))}function c(m,p){p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap)}function l(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===st&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===st&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===st&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===st&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function u(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===st&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===st&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),s.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,T){u(m,p),m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===st&&m.clearcoatNormalScale.value.negate())),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function f(m,p){p.matcap&&(m.matcap.value=p.matcap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===st&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===st&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function g(m,p){p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function x(m,p){p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}function _(m,p){p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===st&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===st&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function Mm(){const s=qi("canvas");return s.style.display="block",s}function Xe(s={}){const e=s.canvas!==void 0?s.canvas:Mm(),t=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,a=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,c=s.powerPreference!==void 0?s.powerPreference:"default",l=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let h;s.context!==void 0?h=t.getContextAttributes().alpha:h=s.alpha!==void 0?s.alpha:!1;let u=null,d=null;const f=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=_n,this.physicallyCorrectLights=!1,this.toneMapping=gn,this.toneMappingExposure=1;const x=this;let _=!1,m=0,p=0,T=null,M=-1,w=null;const L=new qe,R=new qe;let j=null,re=e.width,V=e.height,v=1,C=null,I=null;const F=new qe(0,0,re,V),O=new qe(0,0,re,V);let z=!1;const H=new Jr;let D=!1,q=!1,Q=null;const J=new _e,$=new K,ve=new E,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function we(){return T===null?v:1}let X=t;function Oe(b,P){for(let U=0;U<b.length;U++){const B=b[U],W=e.getContext(B,P);if(W!==null)return W}return null}try{const b={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${oo}`),e.addEventListener("webglcontextlost",A,!1),e.addEventListener("webglcontextrestored",ce,!1),X===null){const P=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&P.shift(),X=Oe(P,b),X===null)throw Oe(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Le,ue,de,Be,N,Y,te,he,se,Me,ge,Re,Je,S,y,G,Z,ne,le,ye,k,Se,Ee;function xe(){Le=new Hf(X),ue=new Bf(X,Le,s),Le.init(ue),Se=new vm(X,Le,ue),de=new gm(X,Le,ue),Be=new kf(X),N=new sm,Y=new xm(X,Le,de,N,ue,Se,Be),te=new zf(x),he=new Of(x),se=new nu(X,ue),Ee=new Df(X,Le,se,ue),Me=new Vf(X,se,Be,Ee),ge=new jf(X,Me,se,Be),le=new Xf(X,ue,Y),G=new Ff(N),Re=new rm(x,te,he,Le,ue,Ee,G),Je=new wm(N),S=new am,y=new fm(Le,ue),ne=new Pf(x,te,de,ge,h,o),Z=new ql(x,ge,ue),ye=new If(X,Le,Be,ue),k=new Gf(X,Le,Be,ue),Be.programs=Re.programs,x.capabilities=ue,x.extensions=Le,x.properties=N,x.renderLists=S,x.shadowMap=Z,x.state=de,x.info=Be}xe();const fe=new ym(x,X);this.xr=fe,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const b=Le.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Le.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return v},this.setPixelRatio=function(b){b!==void 0&&(v=b,this.setSize(re,V,!1))},this.getSize=function(b){return b.set(re,V)},this.setSize=function(b,P,U){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}re=b,V=P,e.width=Math.floor(b*v),e.height=Math.floor(P*v),U!==!1&&(e.style.width=b+"px",e.style.height=P+"px"),this.setViewport(0,0,b,P)},this.getDrawingBufferSize=function(b){return b.set(re*v,V*v).floor()},this.setDrawingBufferSize=function(b,P,U){re=b,V=P,v=U,e.width=Math.floor(b*U),e.height=Math.floor(P*U),this.setViewport(0,0,b,P)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(F)},this.setViewport=function(b,P,U,B){b.isVector4?F.set(b.x,b.y,b.z,b.w):F.set(b,P,U,B),de.viewport(L.copy(F).multiplyScalar(v).floor())},this.getScissor=function(b){return b.copy(O)},this.setScissor=function(b,P,U,B){b.isVector4?O.set(b.x,b.y,b.z,b.w):O.set(b,P,U,B),de.scissor(R.copy(O).multiplyScalar(v).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(b){de.setScissorTest(z=b)},this.setOpaqueSort=function(b){C=b},this.setTransparentSort=function(b){I=b},this.getClearColor=function(b){return b.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(b=!0,P=!0,U=!0){let B=0;b&&(B|=16384),P&&(B|=256),U&&(B|=1024),X.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",A,!1),e.removeEventListener("webglcontextrestored",ce,!1),S.dispose(),y.dispose(),N.dispose(),te.dispose(),he.dispose(),ge.dispose(),Ee.dispose(),Re.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Fe),fe.removeEventListener("sessionend",vt),Q&&(Q.dispose(),Q=null),je.stop()};function A(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const b=Be.autoReset,P=Z.enabled,U=Z.autoUpdate,B=Z.needsUpdate,W=Z.type;xe(),Be.autoReset=b,Z.enabled=P,Z.autoUpdate=U,Z.needsUpdate=B,Z.type=W}function oe(b){const P=b.target;P.removeEventListener("dispose",oe),Ae(P)}function Ae(b){ae(b),N.remove(b)}function ae(b){const P=N.get(b).programs;P!==void 0&&(P.forEach(function(U){Re.releaseProgram(U)}),b.isShaderMaterial&&Re.releaseShaderCache(b))}this.renderBufferDirect=function(b,P,U,B,W,be){P===null&&(P=Ue);const Ce=W.isMesh&&W.matrixWorld.determinant()<0,De=Sc(b,P,U,B,W);de.setMaterial(B,Ce);let Pe=U.index;const Ve=U.attributes.position;if(Pe===null){if(Ve===void 0||Ve.count===0)return}else if(Pe.count===0)return;let ze=1;B.wireframe===!0&&(Pe=Me.getWireframeAttribute(U),ze=2),Ee.setup(W,B,De,U,Pe);let Ne,et=ye;Pe!==null&&(Ne=se.get(Pe),et=k,et.setIndex(Ne));const bn=Pe!==null?Pe.count:Ve.count,Fn=U.drawRange.start*ze,zn=U.drawRange.count*ze,kt=be!==null?be.start*ze:0,He=be!==null?be.count*ze:1/0,Nn=Math.max(Fn,kt),it=Math.min(bn,Fn+zn,kt+He)-1,Wt=Math.max(0,it-Nn+1);if(Wt!==0){if(W.isMesh)B.wireframe===!0?(de.setLineWidth(B.wireframeLinewidth*we()),et.setMode(1)):et.setMode(4);else if(W.isLine){let sn=B.linewidth;sn===void 0&&(sn=1),de.setLineWidth(sn*we()),W.isLineSegments?et.setMode(1):W.isLineLoop?et.setMode(2):et.setMode(3)}else W.isPoints?et.setMode(0):W.isSprite&&et.setMode(4);if(W.isInstancedMesh)et.renderInstances(Nn,Wt,W.count);else if(U.isInstancedBufferGeometry){const sn=Math.min(U.instanceCount,U._maxInstanceCount);et.renderInstances(Nn,Wt,sn)}else et.render(Nn,Wt)}},this.compile=function(b,P){d=y.get(b),d.init(),g.push(d),b.traverseVisible(function(U){U.isLight&&U.layers.test(P.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights(x.physicallyCorrectLights),b.traverse(function(U){const B=U.material;if(B)if(Array.isArray(B))for(let W=0;W<B.length;W++){const be=B[W];ts(be,b,U)}else ts(B,b,U)}),g.pop(),d=null};let ee=null;function Te(b){ee&&ee(b)}function Fe(){je.stop()}function vt(){je.start()}const je=new Nl;je.setAnimationLoop(Te),typeof window!="undefined"&&je.setContext(window),this.setAnimationLoop=function(b){ee=b,fe.setAnimationLoop(b),b===null?je.stop():je.start()},fe.addEventListener("sessionstart",Fe),fe.addEventListener("sessionend",vt),this.render=function(b,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;b.autoUpdate===!0&&b.updateMatrixWorld(),P.parent===null&&P.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(P),P=fe.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,P,T),d=y.get(b,g.length),d.init(),g.push(d),J.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),H.setFromProjectionMatrix(J),q=this.localClippingEnabled,D=G.init(this.clippingPlanes,q,P),u=S.get(b,f.length),u.init(),f.push(u),Vt(b,P,0,x.sortObjects),u.finish(),x.sortObjects===!0&&u.sort(C,I),D===!0&&G.beginShadows();const U=d.state.shadowsArray;if(Z.render(U,b,P),D===!0&&G.endShadows(),this.info.autoReset===!0&&this.info.reset(),ne.render(u,b),d.setupLights(x.physicallyCorrectLights),P.isArrayCamera){const B=P.cameras;for(let W=0,be=B.length;W<be;W++){const Ce=B[W];Gt(u,b,Ce,Ce.viewport)}}else Gt(u,b,P);T!==null&&(Y.updateMultisampleRenderTarget(T),Y.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(x,b,P),Ee.resetDefaultState(),M=-1,w=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,f.pop(),f.length>0?u=f[f.length-1]:u=null};function Vt(b,P,U,B){if(b.visible===!1)return;if(b.layers.test(P.layers)){if(b.isGroup)U=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(P);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||H.intersectsSprite(b)){B&&ve.setFromMatrixPosition(b.matrixWorld).applyMatrix4(J);const Ce=ge.update(b),De=b.material;De.visible&&u.push(b,Ce,De,U,ve.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(b.isSkinnedMesh&&b.skeleton.frame!==Be.render.frame&&(b.skeleton.update(),b.skeleton.frame=Be.render.frame),!b.frustumCulled||H.intersectsObject(b))){B&&ve.setFromMatrixPosition(b.matrixWorld).applyMatrix4(J);const Ce=ge.update(b),De=b.material;if(Array.isArray(De)){const Pe=Ce.groups;for(let Ve=0,ze=Pe.length;Ve<ze;Ve++){const Ne=Pe[Ve],et=De[Ne.materialIndex];et&&et.visible&&u.push(b,Ce,et,U,ve.z,Ne)}}else De.visible&&u.push(b,Ce,De,U,ve.z,null)}}const be=b.children;for(let Ce=0,De=be.length;Ce<De;Ce++)Vt(be[Ce],P,U,B)}function Gt(b,P,U,B){const W=b.opaque,be=b.transmissive,Ce=b.transparent;d.setupLightsView(U),be.length>0&&Mc(W,P,U),B&&de.viewport(L.copy(B)),W.length>0&&nr(W,P,U),be.length>0&&nr(be,P,U),Ce.length>0&&nr(Ce,P,U),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Mc(b,P,U){const B=ue.isWebGL2;Q===null&&(Q=new Lt(1,1,{generateMipmaps:!0,type:Se.convert(ci)!==null?ci:Pn,minFilter:Xr,samples:B&&r===!0?4:0})),x.getDrawingBufferSize($),B?Q.setSize($.x,$.y):Q.setSize(Qs($.x),Qs($.y));const W=x.getRenderTarget();x.setRenderTarget(Q),x.clear();const be=x.toneMapping;x.toneMapping=gn,nr(b,P,U),x.toneMapping=be,Y.updateMultisampleRenderTarget(Q),Y.updateRenderTargetMipmap(Q),x.setRenderTarget(W)}function nr(b,P,U){const B=P.isScene===!0?P.overrideMaterial:null;for(let W=0,be=b.length;W<be;W++){const Ce=b[W],De=Ce.object,Pe=Ce.geometry,Ve=B===null?Ce.material:B,ze=Ce.group;De.layers.test(U.layers)&&bc(De,P,U,Pe,Ve,ze)}}function bc(b,P,U,B,W,be){b.onBeforeRender(x,P,U,B,W,be),b.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(x,P,U,B,b,be),W.transparent===!0&&W.side===di?(W.side=st,W.needsUpdate=!0,x.renderBufferDirect(U,P,B,W,b,be),W.side=Gi,W.needsUpdate=!0,x.renderBufferDirect(U,P,B,W,b,be),W.side=di):x.renderBufferDirect(U,P,B,W,b,be),b.onAfterRender(x,P,U,B,W,be)}function ts(b,P,U){P.isScene!==!0&&(P=Ue);const B=N.get(b),W=d.state.lights,be=d.state.shadowsArray,Ce=W.state.version,De=Re.getParameters(b,W.state,be,P,U),Pe=Re.getProgramCacheKey(De);let Ve=B.programs;B.environment=b.isMeshStandardMaterial?P.environment:null,B.fog=P.fog,B.envMap=(b.isMeshStandardMaterial?he:te).get(b.envMap||B.environment),Ve===void 0&&(b.addEventListener("dispose",oe),Ve=new Map,B.programs=Ve);let ze=Ve.get(Pe);if(ze!==void 0){if(B.currentProgram===ze&&B.lightsStateVersion===Ce)return zo(b,De),ze}else De.uniforms=Re.getUniforms(b),b.onBuild(U,De,x),b.onBeforeCompile(De,x),ze=Re.acquireProgram(De,Pe),Ve.set(Pe,ze),B.uniforms=De.uniforms;const Ne=B.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ne.clippingPlanes=G.uniform),zo(b,De),B.needsLights=Tc(b),B.lightsStateVersion=Ce,B.needsLights&&(Ne.ambientLightColor.value=W.state.ambient,Ne.lightProbe.value=W.state.probe,Ne.directionalLights.value=W.state.directional,Ne.directionalLightShadows.value=W.state.directionalShadow,Ne.spotLights.value=W.state.spot,Ne.spotLightShadows.value=W.state.spotShadow,Ne.rectAreaLights.value=W.state.rectArea,Ne.ltc_1.value=W.state.rectAreaLTC1,Ne.ltc_2.value=W.state.rectAreaLTC2,Ne.pointLights.value=W.state.point,Ne.pointLightShadows.value=W.state.pointShadow,Ne.hemisphereLights.value=W.state.hemi,Ne.directionalShadowMap.value=W.state.directionalShadowMap,Ne.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ne.spotShadowMap.value=W.state.spotShadowMap,Ne.spotShadowMatrix.value=W.state.spotShadowMatrix,Ne.pointShadowMap.value=W.state.pointShadowMap,Ne.pointShadowMatrix.value=W.state.pointShadowMatrix);const et=ze.getUniforms(),bn=xn.seqWithValue(et.seq,Ne);return B.currentProgram=ze,B.uniformsList=bn,ze}function zo(b,P){const U=N.get(b);U.outputEncoding=P.outputEncoding,U.instancing=P.instancing,U.skinning=P.skinning,U.morphTargets=P.morphTargets,U.morphNormals=P.morphNormals,U.morphColors=P.morphColors,U.morphTargetsCount=P.morphTargetsCount,U.numClippingPlanes=P.numClippingPlanes,U.numIntersection=P.numClipIntersection,U.vertexAlphas=P.vertexAlphas,U.vertexTangents=P.vertexTangents,U.toneMapping=P.toneMapping}function Sc(b,P,U,B,W){P.isScene!==!0&&(P=Ue),Y.resetTextureUnits();const be=P.fog,Ce=B.isMeshStandardMaterial?P.environment:null,De=T===null?x.outputEncoding:T.isXRRenderTarget===!0?T.texture.encoding:_n,Pe=(B.isMeshStandardMaterial?he:te).get(B.envMap||Ce),Ve=B.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,ze=!!B.normalMap&&!!U.attributes.tangent,Ne=!!U.morphAttributes.position,et=!!U.morphAttributes.normal,bn=!!U.morphAttributes.color,Fn=B.toneMapped?x.toneMapping:gn,zn=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,kt=zn!==void 0?zn.length:0,He=N.get(B),Nn=d.state.lights;if(D===!0&&(q===!0||b!==w)){const It=b===w&&B.id===M;G.setState(B,b,It)}let it=!1;B.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Nn.state.version||He.outputEncoding!==De||W.isInstancedMesh&&He.instancing===!1||!W.isInstancedMesh&&He.instancing===!0||W.isSkinnedMesh&&He.skinning===!1||!W.isSkinnedMesh&&He.skinning===!0||He.envMap!==Pe||B.fog&&He.fog!==be||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==G.numPlanes||He.numIntersection!==G.numIntersection)||He.vertexAlphas!==Ve||He.vertexTangents!==ze||He.morphTargets!==Ne||He.morphNormals!==et||He.morphColors!==bn||He.toneMapping!==Fn||ue.isWebGL2===!0&&He.morphTargetsCount!==kt)&&(it=!0):(it=!0,He.__version=B.version);let Wt=He.currentProgram;it===!0&&(Wt=ts(B,P,W));let sn=!1,Ti=!1,ns=!1;const pt=Wt.getUniforms(),Ai=He.uniforms;if(de.useProgram(Wt.program)&&(sn=!0,Ti=!0,ns=!0),B.id!==M&&(M=B.id,Ti=!0),sn||w!==b){if(pt.setValue(X,"projectionMatrix",b.projectionMatrix),ue.logarithmicDepthBuffer&&pt.setValue(X,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),w!==b&&(w=b,Ti=!0,ns=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){const It=pt.map.cameraPosition;It!==void 0&&It.setValue(X,ve.setFromMatrixPosition(b.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&pt.setValue(X,"isOrthographic",b.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||W.isSkinnedMesh)&&pt.setValue(X,"viewMatrix",b.matrixWorldInverse)}if(W.isSkinnedMesh){pt.setOptional(X,W,"bindMatrix"),pt.setOptional(X,W,"bindMatrixInverse");const It=W.skeleton;It&&(ue.floatVertexTextures?(It.boneTexture===null&&It.computeBoneTexture(),pt.setValue(X,"boneTexture",It.boneTexture,Y),pt.setValue(X,"boneTextureSize",It.boneTextureSize)):pt.setOptional(X,It,"boneMatrices"))}const is=U.morphAttributes;return(is.position!==void 0||is.normal!==void 0||is.color!==void 0&&ue.isWebGL2===!0)&&le.update(W,U,B,Wt),(Ti||He.receiveShadow!==W.receiveShadow)&&(He.receiveShadow=W.receiveShadow,pt.setValue(X,"receiveShadow",W.receiveShadow)),Ti&&(pt.setValue(X,"toneMappingExposure",x.toneMappingExposure),He.needsLights&&Ec(Ai,ns),be&&B.fog&&Je.refreshFogUniforms(Ai,be),Je.refreshMaterialUniforms(Ai,B,v,V,Q),xn.upload(X,He.uniformsList,Ai,Y)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(xn.upload(X,He.uniformsList,Ai,Y),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&pt.setValue(X,"center",W.center),pt.setValue(X,"modelViewMatrix",W.modelViewMatrix),pt.setValue(X,"normalMatrix",W.normalMatrix),pt.setValue(X,"modelMatrix",W.matrixWorld),Wt}function Ec(b,P){b.ambientLightColor.needsUpdate=P,b.lightProbe.needsUpdate=P,b.directionalLights.needsUpdate=P,b.directionalLightShadows.needsUpdate=P,b.pointLights.needsUpdate=P,b.pointLightShadows.needsUpdate=P,b.spotLights.needsUpdate=P,b.spotLightShadows.needsUpdate=P,b.rectAreaLights.needsUpdate=P,b.hemisphereLights.needsUpdate=P}function Tc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return p},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,P,U){N.get(b.texture).__webglTexture=P,N.get(b.depthTexture).__webglTexture=U;const B=N.get(b);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=U===void 0,B.__autoAllocateDepthBuffer||Le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,P){const U=N.get(b);U.__webglFramebuffer=P,U.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(b,P=0,U=0){T=b,m=P,p=U;let B=!0;if(b){const Pe=N.get(b);Pe.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer(36160,null),B=!1):Pe.__webglFramebuffer===void 0?Y.setupRenderTarget(b):Pe.__hasExternalTextures&&Y.rebindTextures(b,N.get(b.texture).__webglTexture,N.get(b.depthTexture).__webglTexture)}let W=null,be=!1,Ce=!1;if(b){const Pe=b.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture)&&(Ce=!0);const Ve=N.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(W=Ve[P],be=!0):ue.isWebGL2&&b.samples>0&&Y.useMultisampledRTT(b)===!1?W=N.get(b).__webglMultisampledFramebuffer:W=Ve,L.copy(b.viewport),R.copy(b.scissor),j=b.scissorTest}else L.copy(F).multiplyScalar(v).floor(),R.copy(O).multiplyScalar(v).floor(),j=z;if(de.bindFramebuffer(36160,W)&&ue.drawBuffers&&B&&de.drawBuffers(b,W),de.viewport(L),de.scissor(R),de.setScissorTest(j),be){const Pe=N.get(b.texture);X.framebufferTexture2D(36160,36064,34069+P,Pe.__webglTexture,U)}else if(Ce){const Pe=N.get(b.texture),Ve=P||0;X.framebufferTextureLayer(36160,36064,Pe.__webglTexture,U||0,Ve)}M=-1},this.readRenderTargetPixels=function(b,P,U,B,W,be,Ce){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=N.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De){de.bindFramebuffer(36160,De);try{const Pe=b.texture,Ve=Pe.format,ze=Pe.type;if(Ve!==Mt&&Se.convert(Ve)!==X.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ne=ze===ci&&(Le.has("EXT_color_buffer_half_float")||ue.isWebGL2&&Le.has("EXT_color_buffer_float"));if(ze!==Pn&&Se.convert(ze)!==X.getParameter(35738)&&!(ze===Ln&&(ue.isWebGL2||Le.has("OES_texture_float")||Le.has("WEBGL_color_buffer_float")))&&!Ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X.checkFramebufferStatus(36160)===36053?P>=0&&P<=b.width-B&&U>=0&&U<=b.height-W&&X.readPixels(P,U,B,W,Se.convert(Ve),Se.convert(ze),be):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const Pe=T!==null?N.get(T).__webglFramebuffer:null;de.bindFramebuffer(36160,Pe)}}},this.copyFramebufferToTexture=function(b,P,U=0){if(P.isFramebufferTexture!==!0){console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");return}const B=Math.pow(2,-U),W=Math.floor(P.image.width*B),be=Math.floor(P.image.height*B);Y.setTexture2D(P,0),X.copyTexSubImage2D(3553,U,0,0,b.x,b.y,W,be),de.unbindTexture()},this.copyTextureToTexture=function(b,P,U,B=0){const W=P.image.width,be=P.image.height,Ce=Se.convert(U.format),De=Se.convert(U.type);Y.setTexture2D(U,0),X.pixelStorei(37440,U.flipY),X.pixelStorei(37441,U.premultiplyAlpha),X.pixelStorei(3317,U.unpackAlignment),P.isDataTexture?X.texSubImage2D(3553,B,b.x,b.y,W,be,Ce,De,P.image.data):P.isCompressedTexture?X.compressedTexSubImage2D(3553,B,b.x,b.y,P.mipmaps[0].width,P.mipmaps[0].height,Ce,P.mipmaps[0].data):X.texSubImage2D(3553,B,b.x,b.y,Ce,De,P.image),B===0&&U.generateMipmaps&&X.generateMipmap(3553),de.unbindTexture()},this.copyTextureToTexture3D=function(b,P,U,B,W=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const be=b.max.x-b.min.x+1,Ce=b.max.y-b.min.y+1,De=b.max.z-b.min.z+1,Pe=Se.convert(B.format),Ve=Se.convert(B.type);let ze;if(B.isData3DTexture)Y.setTexture3D(B,0),ze=32879;else if(B.isDataArrayTexture)Y.setTexture2DArray(B,0),ze=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(37440,B.flipY),X.pixelStorei(37441,B.premultiplyAlpha),X.pixelStorei(3317,B.unpackAlignment);const Ne=X.getParameter(3314),et=X.getParameter(32878),bn=X.getParameter(3316),Fn=X.getParameter(3315),zn=X.getParameter(32877),kt=U.isCompressedTexture?U.mipmaps[0]:U.image;X.pixelStorei(3314,kt.width),X.pixelStorei(32878,kt.height),X.pixelStorei(3316,b.min.x),X.pixelStorei(3315,b.min.y),X.pixelStorei(32877,b.min.z),U.isDataTexture||U.isData3DTexture?X.texSubImage3D(ze,W,P.x,P.y,P.z,be,Ce,De,Pe,Ve,kt.data):U.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(ze,W,P.x,P.y,P.z,be,Ce,De,Pe,kt.data)):X.texSubImage3D(ze,W,P.x,P.y,P.z,be,Ce,De,Pe,Ve,kt),X.pixelStorei(3314,Ne),X.pixelStorei(32878,et),X.pixelStorei(3316,bn),X.pixelStorei(3315,Fn),X.pixelStorei(32877,zn),W===0&&B.generateMipmaps&&X.generateMipmap(ze),de.unbindTexture()},this.initTexture=function(b){Y.setTexture2D(b,0),de.unbindTexture()},this.resetState=function(){m=0,p=0,T=null,de.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Xe.prototype.isWebGLRenderer=!0;class Zl extends Xe{}Zl.prototype.isWebGL1Renderer=!0;class vo extends We{constructor(){super();this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}vo.prototype.isScene=!0;class $i{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wi,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Xt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}$i.prototype.isInterleavedBuffer=!0;const tt=new E;class Xi{constructor(e,t,n,i=!1){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)tt.x=this.getX(t),tt.y=this.getY(t),tt.z=this.getZ(t),tt.applyMatrix4(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tt.x=this.getX(t),tt.y=this.getY(t),tt.z=this.getZ(t),tt.applyNormalMatrix(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tt.x=this.getX(t),tt.y=this.getY(t),tt.z=this.getZ(t),tt.transformDirection(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new at(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Xi(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}Xi.prototype.isInterleavedBufferAttribute=!0;class _o extends lt{constructor(e){super();this.type="SpriteMaterial",this.color=new me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}_o.prototype.isSpriteMaterial=!0;let Qn;const Pi=new E,$n=new E,ei=new E,ti=new K,Di=new K,Yl=new _e,br=new E,Ii=new E,Sr=new E,Za=new K,Us=new K,Ya=new K;class bm extends We{constructor(e){super();if(this.type="Sprite",Qn===void 0){Qn=new Ye;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new $i(t,5);Qn.setIndex([0,1,2,0,2,3]),Qn.setAttribute("position",new Xi(n,3,0,!1)),Qn.setAttribute("uv",new Xi(n,2,3,!1))}this.geometry=Qn,this.material=e!==void 0?e:new _o,this.center=new K(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$n.setFromMatrixScale(this.matrixWorld),Yl.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ei.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$n.multiplyScalar(-ei.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Er(br.set(-.5,-.5,0),ei,o,$n,i,r),Er(Ii.set(.5,-.5,0),ei,o,$n,i,r),Er(Sr.set(.5,.5,0),ei,o,$n,i,r),Za.set(0,0),Us.set(1,0),Ya.set(1,1);let a=e.ray.intersectTriangle(br,Ii,Sr,!1,Pi);if(a===null&&(Er(Ii.set(-.5,.5,0),ei,o,$n,i,r),Us.set(0,1),a=e.ray.intersectTriangle(br,Sr,Ii,!1,Pi),a===null))return;const c=e.ray.origin.distanceTo(Pi);c<e.near||c>e.far||t.push({distance:c,point:Pi.clone(),uv:rt.getUV(Pi,br,Ii,Sr,Za,Us,Ya,new K),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}bm.prototype.isSprite=!0;function Er(s,e,t,n,i,r){ti.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Di.x=r*ti.x-i*ti.y,Di.y=i*ti.x+r*ti.y):Di.copy(ti),s.copy(e),s.x+=Di.x,s.y+=Di.y,s.applyMatrix4(Yl)}const Ja=new E,Ka=new qe,Qa=new qe,Sm=new E,$a=new _e;class Jl extends yt{constructor(e,t){super(e,t);this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new _e,this.bindMatrixInverse=new _e}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new qe,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;Ka.fromBufferAttribute(i.attributes.skinIndex,e),Qa.fromBufferAttribute(i.attributes.skinWeight,e),Ja.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Qa.getComponent(r);if(o!==0){const a=Ka.getComponent(r);$a.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Sm.copy(Ja).applyMatrix4($a),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}Jl.prototype.isSkinnedMesh=!0;class Em extends We{constructor(){super();this.type="Bone"}}Em.prototype.isBone=!0;class Tm extends ut{constructor(e=null,t=1,n=1,i,r,o,a,c,l=ht,h=ht,u,d){super(null,o,a,c,l,h,i,r,u,d);this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}Tm.prototype.isDataTexture=!0;class eo extends at{constructor(e,t,n,i=1){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."));super(e,t,n);this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}eo.prototype.isInstancedBufferAttribute=!0;const el=new _e,tl=new _e,Tr=[],Bi=new yt;class Am extends yt{constructor(e,t,n){super(e,t);this.instanceMatrix=new eo(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Bi.geometry=this.geometry,Bi.material=this.material,Bi.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,el),tl.multiplyMatrices(n,el),Bi.matrixWorld=tl,Bi.raycast(e,Tr);for(let o=0,a=Tr.length;o<a;o++){const c=Tr[o];c.instanceId=r,c.object=this,t.push(c)}Tr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new eo(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}Am.prototype.isInstancedMesh=!0;class Mi extends lt{constructor(e){super();this.type="LineBasicMaterial",this.color=new me(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this}}Mi.prototype.isLineBasicMaterial=!0;const nl=new E,il=new E,rl=new _e,Os=new yi,Ar=new _i;class yo extends We{constructor(e=new Ye,t=new Mi){super();this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)nl.fromBufferAttribute(t,i-1),il.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=nl.distanceTo(il);e.setAttribute("lineDistance",new nt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere),Ar.applyMatrix4(i),Ar.radius+=r,e.ray.intersectsSphere(Ar)===!1)return;rl.copy(i).invert(),Os.copy(e.ray).applyMatrix4(rl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new E,h=new E,u=new E,d=new E,f=this.isLineSegments?2:1;if(n.isBufferGeometry){const g=n.index,_=n.attributes.position;if(g!==null){const m=Math.max(0,o.start),p=Math.min(g.count,o.start+o.count);for(let T=m,M=p-1;T<M;T+=f){const w=g.getX(T),L=g.getX(T+1);if(l.fromBufferAttribute(_,w),h.fromBufferAttribute(_,L),Os.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const j=e.ray.origin.distanceTo(d);j<e.near||j>e.far||t.push({distance:j,point:u.clone().applyMatrix4(this.matrixWorld),index:T,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),p=Math.min(_.count,o.start+o.count);for(let T=m,M=p-1;T<M;T+=f){if(l.fromBufferAttribute(_,T),h.fromBufferAttribute(_,T+1),Os.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(d);L<e.near||L>e.far||t.push({distance:L,point:u.clone().applyMatrix4(this.matrixWorld),index:T,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}yo.prototype.isLine=!0;const sl=new E,ol=new E;class wo extends yo{constructor(e,t){super(e,t);this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)sl.fromBufferAttribute(t,i),ol.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+sl.distanceTo(ol);e.setAttribute("lineDistance",new nt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}wo.prototype.isLineSegments=!0;class Cm extends yo{constructor(e,t){super(e,t);this.type="LineLoop"}}Cm.prototype.isLineLoop=!0;class Mo extends lt{constructor(e){super();this.type="PointsMaterial",this.color=new me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this}}Mo.prototype.isPointsMaterial=!0;const al=new _e,to=new yi,Cr=new _i,Lr=new E;class Lm extends We{constructor(e=new Ye,t=new Mo){super();this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(i),Cr.radius+=r,e.ray.intersectsSphere(Cr)===!1)return;al.copy(i).invert(),to.copy(e.ray).applyMatrix4(al);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a;if(n.isBufferGeometry){const l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,x=f;g<x;g++){const _=l.getX(g);Lr.fromBufferAttribute(u,_),ll(Lr,_,c,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,x=f;g<x;g++)Lr.fromBufferAttribute(u,g),ll(Lr,g,c,i,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Lm.prototype.isPoints=!0;function ll(s,e,t,n,i,r,o){const a=to.distanceSqToPoint(s);if(a<t){const c=new E;to.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class Rm extends ut{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l);this.minFilter=o!==void 0?o:gt,this.magFilter=r!==void 0?r:gt,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}Rm.prototype.isVideoTexture=!0;class Pm extends ut{constructor(e,t,n){super({width:e,height:t});this.format=n,this.magFilter=ht,this.minFilter=ht,this.generateMipmaps=!1,this.needsUpdate=!0}}Pm.prototype.isFramebufferTexture=!0;class Dm extends ut{constructor(e,t,n,i,r,o,a,c,l,h,u,d){super(null,o,a,c,l,h,i,r,u,d);this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}Dm.prototype.isCompressedTexture=!0;class Im extends ut{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l);this.needsUpdate=!0}}Im.prototype.isCanvasTexture=!0;new E;new E;new E;new rt;class Dt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new K:new E);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new E,i=[],r=[],o=[],a=new E,c=new _e;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new E)}r[0]=new E,o[0]=new E;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Tt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Tt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Qr extends Dt{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super();this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){const n=t||new K,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}Qr.prototype.isEllipseCurve=!0;class Kl extends Qr{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o);this.type="ArcCurve"}}Kl.prototype.isArcCurve=!0;function bo(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const Rr=new E,Hs=new bo,Vs=new bo,Gs=new bo;class Ql extends Dt{constructor(e=[],t=!1,n="centripetal",i=.5){super();this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new E){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(Rr.subVectors(i[0],i[1]).add(i[0]),l=Rr);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Rr.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Rr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),_<1e-4&&(_=x),Hs.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,x,_),Vs.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,x,_),Gs.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,x,_)}else this.curveType==="catmullrom"&&(Hs.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Vs.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Gs.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Hs.calc(c),Vs.calc(c),Gs.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new E().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}Ql.prototype.isCatmullRomCurve3=!0;function cl(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function Bm(s,e){const t=1-s;return t*t*e}function Fm(s,e){return 2*(1-s)*s*e}function zm(s,e){return s*s*e}function Hi(s,e,t,n){return Bm(s,e)+Fm(s,t)+zm(s,n)}function Nm(s,e){const t=1-s;return t*t*t*e}function Um(s,e){const t=1-s;return 3*t*t*s*e}function Om(s,e){return 3*(1-s)*s*s*e}function Hm(s,e){return s*s*s*e}function Vi(s,e,t,n,i){return Nm(s,e)+Um(s,t)+Om(s,n)+Hm(s,i)}class So extends Dt{constructor(e=new K,t=new K,n=new K,i=new K){super();this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new K){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Vi(e,i.x,r.x,o.x,a.x),Vi(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}So.prototype.isCubicBezierCurve=!0;class $l extends Dt{constructor(e=new E,t=new E,n=new E,i=new E){super();this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new E){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Vi(e,i.x,r.x,o.x,a.x),Vi(e,i.y,r.y,o.y,a.y),Vi(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}$l.prototype.isCubicBezierCurve3=!0;class $r extends Dt{constructor(e=new K,t=new K){super();this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new K){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new K;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}$r.prototype.isLineCurve=!0;class Vm extends Dt{constructor(e=new E,t=new E){super();this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new E){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Eo extends Dt{constructor(e=new K,t=new K,n=new K){super();this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new K){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Hi(e,i.x,r.x,o.x),Hi(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Eo.prototype.isQuadraticBezierCurve=!0;class ec extends Dt{constructor(e=new E,t=new E,n=new E){super();this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new E){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Hi(e,i.x,r.x,o.x),Hi(e,i.y,r.y,o.y),Hi(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}ec.prototype.isQuadraticBezierCurve3=!0;class To extends Dt{constructor(e=[]){super();this.type="SplineCurve",this.points=e}getPoint(e,t=new K){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(cl(a,c.x,l.x,h.x,u.x),cl(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new K().fromArray(i))}return this}}To.prototype.isSplineCurve=!0;var tc=Object.freeze({__proto__:null,ArcCurve:Kl,CatmullRomCurve3:Ql,CubicBezierCurve:So,CubicBezierCurve3:$l,EllipseCurve:Qr,LineCurve:$r,LineCurve3:Vm,QuadraticBezierCurve:Eo,QuadraticBezierCurve3:ec,SplineCurve:To});class Gm extends Dt{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new $r(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new tc[i.type]().fromJSON(i))}return this}}class no extends Gm{constructor(e){super();this.type="Path",this.currentPoint=new K,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new $r(this.currentPoint.clone(),new K(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Eo(this.currentPoint.clone(),new K(e,t),new K(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new So(this.currentPoint.clone(),new K(e,t),new K(n,i),new K(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new To(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,o,a,c),this}absellipse(e,t,n,i,r,o,a,c){const l=new Qr(e,t,n,i,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class er extends no{constructor(e){super(e);this.uuid=Xt(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new no().fromJSON(i))}return this}}const km={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=nc(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=Zm(s,e,r,t)),s.length>80*t){a=l=s[0],c=h=s[1];for(let g=t;g<i;g+=t)u=s[g],d=s[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?1/f:0}return ji(r,o,t,a,c,f),o}};function nc(s,e,t,n,i){let r,o;if(i===sg(s,e,t,n)>0)for(r=e;r<t;r+=n)o=hl(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=hl(r,s[r],s[r+1],o);return o&&es(o,o.next)&&(Yi(o),o=o.next),o}function yn(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(es(t,t.next)||$e(t.prev,t,t.next)===0)){if(Yi(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ji(s,e,t,n,i,r,o){if(!s)return;!o&&r&&$m(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?qm(s,n,i,r):Wm(s)){e.push(c.i/t),e.push(s.i/t),e.push(l.i/t),Yi(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=Xm(yn(s),e,t),ji(s,e,t,n,i,r,2)):o===2&&jm(s,e,t,n,i,r):ji(yn(s),e,t,n,i,r,1);break}}}function Wm(s){const e=s.prev,t=s,n=s.next;if($e(e,t,n)>=0)return!1;let i=s.next.next;for(;i!==s.prev;){if(oi(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&$e(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function qm(s,e,t,n){const i=s.prev,r=s,o=s.next;if($e(i,r,o)>=0)return!1;const a=i.x<r.x?i.x<o.x?i.x:o.x:r.x<o.x?r.x:o.x,c=i.y<r.y?i.y<o.y?i.y:o.y:r.y<o.y?r.y:o.y,l=i.x>r.x?i.x>o.x?i.x:o.x:r.x>o.x?r.x:o.x,h=i.y>r.y?i.y>o.y?i.y:o.y:r.y>o.y?r.y:o.y,u=io(a,c,e,t,n),d=io(l,h,e,t,n);let f=s.prevZ,g=s.nextZ;for(;f&&f.z>=u&&g&&g.z<=d;){if(f!==s.prev&&f!==s.next&&oi(i.x,i.y,r.x,r.y,o.x,o.y,f.x,f.y)&&$e(f.prev,f,f.next)>=0||(f=f.prevZ,g!==s.prev&&g!==s.next&&oi(i.x,i.y,r.x,r.y,o.x,o.y,g.x,g.y)&&$e(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;f&&f.z>=u;){if(f!==s.prev&&f!==s.next&&oi(i.x,i.y,r.x,r.y,o.x,o.y,f.x,f.y)&&$e(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;g&&g.z<=d;){if(g!==s.prev&&g!==s.next&&oi(i.x,i.y,r.x,r.y,o.x,o.y,g.x,g.y)&&$e(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function Xm(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!es(i,r)&&ic(i,n,n.next,r)&&Zi(i,r)&&Zi(r,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(r.i/t),Yi(n),Yi(n.next),n=s=r),n=n.next}while(n!==s);return yn(n)}function jm(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ng(o,a)){let c=rc(o,a);o=yn(o,o.next),c=yn(c,c.next),ji(o,e,t,n,i,r),ji(c,e,t,n,i,r);return}a=a.next}o=o.next}while(o!==s)}function Zm(s,e,t,n){const i=[];let r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=nc(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(tg(l));for(i.sort(Ym),r=0;r<i.length;r++)Jm(i[r],t),t=yn(t,t.next);return t}function Ym(s,e){return s.x-e.x}function Jm(s,e){if(e=Km(s,e),e){const t=rc(e,s);yn(e,e.next),yn(t,t.next)}}function Km(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,o;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r){if(r=d,d===n){if(i===t.y)return t;if(i===t.next.y)return t.next}o=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!o)return null;if(n===r)return o;const a=o,c=o.x,l=o.y;let h=1/0,u;t=o;do n>=t.x&&t.x>=c&&n!==t.x&&oi(i<l?n:r,i,c,l,i<l?r:n,i,t.x,t.y)&&(u=Math.abs(i-t.y)/(n-t.x),Zi(t,s)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Qm(o,t)))&&(o=t,h=u)),t=t.next;while(t!==a);return o}function Qm(s,e){return $e(s.prev,s,e.prev)<0&&$e(e.next,s,s.next)<0}function $m(s,e,t,n){let i=s;do i.z===null&&(i.z=io(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,eg(i)}function eg(s){let e,t,n,i,r,o,a,c,l=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(o>1);return s}function io(s,e,t,n,i){return s=32767*(s-t)*i,e=32767*(e-n)*i,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function tg(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function oi(s,e,t,n,i,r,o,a){return(i-o)*(e-a)-(s-o)*(r-a)>=0&&(s-o)*(n-a)-(t-o)*(e-a)>=0&&(t-o)*(r-a)-(i-o)*(n-a)>=0}function ng(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!ig(s,e)&&(Zi(s,e)&&Zi(e,s)&&rg(s,e)&&($e(s.prev,s,e.prev)||$e(s,e.prev,e))||es(s,e)&&$e(s.prev,s,s.next)>0&&$e(e.prev,e,e.next)>0)}function $e(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function es(s,e){return s.x===e.x&&s.y===e.y}function ic(s,e,t,n){const i=Dr($e(s,e,t)),r=Dr($e(s,e,n)),o=Dr($e(t,n,s)),a=Dr($e(t,n,e));return!!(i!==r&&o!==a||i===0&&Pr(s,t,e)||r===0&&Pr(s,n,e)||o===0&&Pr(t,s,n)||a===0&&Pr(t,e,n))}function Pr(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Dr(s){return s>0?1:s<0?-1:0}function ig(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&ic(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Zi(s,e){return $e(s.prev,s,s.next)<0?$e(s,e,s.next)>=0&&$e(s,s.prev,e)>=0:$e(s,e,s.prev)<0||$e(s,s.next,e)<0}function rg(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function rc(s,e){const t=new ro(s.i,s.x,s.y),n=new ro(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function hl(s,e,t,n){const i=new ro(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Yi(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function ro(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function sg(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class vn{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return vn.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];ul(e),dl(n,e);let o=e.length;t.forEach(ul);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,dl(n,t[c]);const a=km.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function ul(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function dl(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class bi extends Ye{constructor(e=new er([new K(.5,.5),new K(-.5,.5),new K(-.5,-.5),new K(.5,-.5)]),t={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new nt(i,3)),this.setAttribute("uv",new nt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1;let u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,_=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,p=t.UVGenerator!==void 0?t.UVGenerator:og;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),u=t.amount);let T,M=!1,w,L,R,j;m&&(T=m.getSpacedPoints(h),M=!0,d=!1,w=m.computeFrenetFrames(h,!1),L=new E,R=new E,j=new E),d||(_=0,f=0,g=0,x=0);const re=a.extractPoints(l);let V=re.shape;const v=re.holes;if(!vn.isClockWise(V)){V=V.reverse();for(let N=0,Y=v.length;N<Y;N++){const te=v[N];vn.isClockWise(te)&&(v[N]=te.reverse())}}const I=vn.triangulateShape(V,v),F=V;for(let N=0,Y=v.length;N<Y;N++){const te=v[N];V=V.concat(te)}function O(N,Y,te){return Y||console.error("THREE.ExtrudeGeometry: vec does not exist"),Y.clone().multiplyScalar(te).add(N)}const z=V.length,H=I.length;function D(N,Y,te){let he,se,Me;const ge=N.x-Y.x,Re=N.y-Y.y,Je=te.x-N.x,S=te.y-N.y,y=ge*ge+Re*Re,G=ge*S-Re*Je;if(Math.abs(G)>Number.EPSILON){const Z=Math.sqrt(y),ne=Math.sqrt(Je*Je+S*S),le=Y.x-Re/Z,ye=Y.y+ge/Z,k=te.x-S/ne,Se=te.y+Je/ne,Ee=((k-le)*S-(Se-ye)*Je)/(ge*S-Re*Je);he=le+ge*Ee-N.x,se=ye+Re*Ee-N.y;const xe=he*he+se*se;if(xe<=2)return new K(he,se);Me=Math.sqrt(xe/2)}else{let Z=!1;ge>Number.EPSILON?Je>Number.EPSILON&&(Z=!0):ge<-Number.EPSILON?Je<-Number.EPSILON&&(Z=!0):Math.sign(Re)===Math.sign(S)&&(Z=!0),Z?(he=-Re,se=ge,Me=Math.sqrt(y)):(he=ge,se=Re,Me=Math.sqrt(y/2))}return new K(he/Me,se/Me)}const q=[];for(let N=0,Y=F.length,te=Y-1,he=N+1;N<Y;N++,te++,he++)te===Y&&(te=0),he===Y&&(he=0),q[N]=D(F[N],F[te],F[he]);const Q=[];let J,$=q.concat();for(let N=0,Y=v.length;N<Y;N++){const te=v[N];J=[];for(let he=0,se=te.length,Me=se-1,ge=he+1;he<se;he++,Me++,ge++)Me===se&&(Me=0),ge===se&&(ge=0),J[he]=D(te[he],te[Me],te[ge]);Q.push(J),$=$.concat(J)}for(let N=0;N<_;N++){const Y=N/_,te=f*Math.cos(Y*Math.PI/2),he=g*Math.sin(Y*Math.PI/2)+x;for(let se=0,Me=F.length;se<Me;se++){const ge=O(F[se],q[se],he);Oe(ge.x,ge.y,-te)}for(let se=0,Me=v.length;se<Me;se++){const ge=v[se];J=Q[se];for(let Re=0,Je=ge.length;Re<Je;Re++){const S=O(ge[Re],J[Re],he);Oe(S.x,S.y,-te)}}}const ve=g+x;for(let N=0;N<z;N++){const Y=d?O(V[N],$[N],ve):V[N];M?(R.copy(w.normals[0]).multiplyScalar(Y.x),L.copy(w.binormals[0]).multiplyScalar(Y.y),j.copy(T[0]).add(R).add(L),Oe(j.x,j.y,j.z)):Oe(Y.x,Y.y,0)}for(let N=1;N<=h;N++)for(let Y=0;Y<z;Y++){const te=d?O(V[Y],$[Y],ve):V[Y];M?(R.copy(w.normals[N]).multiplyScalar(te.x),L.copy(w.binormals[N]).multiplyScalar(te.y),j.copy(T[N]).add(R).add(L),Oe(j.x,j.y,j.z)):Oe(te.x,te.y,u/h*N)}for(let N=_-1;N>=0;N--){const Y=N/_,te=f*Math.cos(Y*Math.PI/2),he=g*Math.sin(Y*Math.PI/2)+x;for(let se=0,Me=F.length;se<Me;se++){const ge=O(F[se],q[se],he);Oe(ge.x,ge.y,u+te)}for(let se=0,Me=v.length;se<Me;se++){const ge=v[se];J=Q[se];for(let Re=0,Je=ge.length;Re<Je;Re++){const S=O(ge[Re],J[Re],he);M?Oe(S.x,S.y+T[h-1].y,T[h-1].x+te):Oe(S.x,S.y,u+te)}}}Ue(),we();function Ue(){const N=i.length/3;if(d){let Y=0,te=z*Y;for(let he=0;he<H;he++){const se=I[he];Le(se[2]+te,se[1]+te,se[0]+te)}Y=h+_*2,te=z*Y;for(let he=0;he<H;he++){const se=I[he];Le(se[0]+te,se[1]+te,se[2]+te)}}else{for(let Y=0;Y<H;Y++){const te=I[Y];Le(te[2],te[1],te[0])}for(let Y=0;Y<H;Y++){const te=I[Y];Le(te[0]+z*h,te[1]+z*h,te[2]+z*h)}}n.addGroup(N,i.length/3-N,0)}function we(){const N=i.length/3;let Y=0;X(F,Y),Y+=F.length;for(let te=0,he=v.length;te<he;te++){const se=v[te];X(se,Y),Y+=se.length}n.addGroup(N,i.length/3-N,1)}function X(N,Y){let te=N.length;for(;--te>=0;){const he=te;let se=te-1;se<0&&(se=N.length-1);for(let Me=0,ge=h+_*2;Me<ge;Me++){const Re=z*Me,Je=z*(Me+1),S=Y+he+Re,y=Y+se+Re,G=Y+se+Je,Z=Y+he+Je;ue(S,y,G,Z)}}}function Oe(N,Y,te){c.push(N),c.push(Y),c.push(te)}function Le(N,Y,te){de(N),de(Y),de(te);const he=i.length/3,se=p.generateTopUV(n,i,he-3,he-2,he-1);Be(se[0]),Be(se[1]),Be(se[2])}function ue(N,Y,te,he){de(N),de(Y),de(he),de(Y),de(te),de(he);const se=i.length/3,Me=p.generateSideWallUV(n,i,se-6,se-3,se-2,se-1);Be(Me[0]),Be(Me[1]),Be(Me[3]),Be(Me[1]),Be(Me[2]),Be(Me[3])}function de(N){i.push(c[N*3+0]),i.push(c[N*3+1]),i.push(c[N*3+2])}function Be(N){r.push(N.x),r.push(N.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return ag(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new tc[i.type]().fromJSON(i)),new bi(n,e.options)}}const og={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[i*3],h=e[i*3+1];return[new K(r,o),new K(a,c),new K(l,h)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],g=e[i*3+2],x=e[r*3],_=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new K(o,1-c),new K(l,1-u),new K(d,1-g),new K(x,1-m)]:[new K(a,1-c),new K(h,1-u),new K(f,1-g),new K(_,1-m)]}};function ag(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ao extends Ye{constructor(e=new er([new K(0,.5),new K(-.5,-.5),new K(.5,-.5)]),t=12){super();this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new nt(i,3)),this.setAttribute("normal",new nt(r,3)),this.setAttribute("uv",new nt(o,2));function l(h){const u=i.length/3,d=h.extractPoints(t);let f=d.shape;const g=d.holes;vn.isClockWise(f)===!1&&(f=f.reverse());for(let _=0,m=g.length;_<m;_++){const p=g[_];vn.isClockWise(p)===!0&&(g[_]=p.reverse())}const x=vn.triangulateShape(f,g);for(let _=0,m=g.length;_<m;_++){const p=g[_];f=f.concat(p)}for(let _=0,m=f.length;_<m;_++){const p=f[_];i.push(p.x,p.y,0),r.push(0,0,1),o.push(p.x,p.y)}for(let _=0,m=x.length;_<m;_++){const p=x[_],T=p[0]+u,M=p[1]+u,w=p[2]+u;n.push(T,M,w),c+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return lg(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const o=t[e.shapes[i]];n.push(o)}return new Ao(n,e.curveSegments)}}function lg(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class Co extends Ye{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new E,d=new E,f=[],g=[],x=[],_=[];for(let m=0;m<=n;m++){const p=[],T=m/n;let M=0;m==0&&o==0?M=.5/t:m==n&&c==Math.PI&&(M=-.5/t);for(let w=0;w<=t;w++){const L=w/t;u.x=-e*Math.cos(i+L*r)*Math.sin(o+T*a),u.y=e*Math.cos(o+T*a),u.z=e*Math.sin(i+L*r)*Math.sin(o+T*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),_.push(L+M,1-T),p.push(l++)}h.push(p)}for(let m=0;m<n;m++)for(let p=0;p<t;p++){const T=h[m][p+1],M=h[m][p],w=h[m+1][p],L=h[m+1][p+1];(m!==0||o>0)&&f.push(T,M,L),(m!==n-1||c<Math.PI)&&f.push(M,w,L)}this.setIndex(f),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(x,3)),this.setAttribute("uv",new nt(_,2))}static fromJSON(e){return new Co(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class sc extends lt{constructor(e){super();this.type="ShadowMaterial",this.color=new me(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}sc.prototype.isShadowMaterial=!0;class Lo extends Ot{constructor(e){super(e);this.type="RawShaderMaterial"}}Lo.prototype.isRawShaderMaterial=!0;class Ro extends lt{constructor(e){super();this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vi,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}Ro.prototype.isMeshStandardMaterial=!0;class oc extends Ro{constructor(e){super();this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new K(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.sheenColor=new me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new me(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}oc.prototype.isMeshPhysicalMaterial=!0;class ac extends lt{constructor(e){super();this.type="MeshPhongMaterial",this.color=new me(16777215),this.specular=new me(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vi,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Wr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}ac.prototype.isMeshPhongMaterial=!0;class lc extends lt{constructor(e){super();this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new me(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vi,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}lc.prototype.isMeshToonMaterial=!0;class cc extends lt{constructor(e){super();this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vi,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}cc.prototype.isMeshNormalMaterial=!0;class hc extends lt{constructor(e){super();this.type="MeshLambertMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Wr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}hc.prototype.isMeshLambertMaterial=!0;class uc extends lt{constructor(e){super();this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new me(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vi,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this}}uc.prototype.isMeshMatcapMaterial=!0;class dc extends Mi{constructor(e){super();this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}dc.prototype.isLineDashedMaterial=!0;const cg={ShadowMaterial:sc,SpriteMaterial:_o,RawShaderMaterial:Lo,ShaderMaterial:Ot,PointsMaterial:Mo,MeshPhysicalMaterial:oc,MeshStandardMaterial:Ro,MeshPhongMaterial:ac,MeshToonMaterial:lc,MeshNormalMaterial:cc,MeshLambertMaterial:hc,MeshDepthMaterial:go,MeshDistanceMaterial:xo,MeshBasicMaterial:Zr,MeshMatcapMaterial:uc,LineDashedMaterial:dc,LineBasicMaterial:Mi,Material:lt};lt.fromType=function(s){return new cg[s]};const Qe={arraySlice:function(s,e,t){return Qe.isTypedArray(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)},convertArray:function(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)},isTypedArray:function(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)},getKeyframeOrder:function(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n},sortedArray:function(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i},flattenJSON:function(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)},subclip:function(s,e,t,n,i=30){const r=s.clone();r.name=e;const o=[];for(let c=0;c<r.tracks.length;++c){const l=r.tracks[c],h=l.getValueSize(),u=[],d=[];for(let f=0;f<l.times.length;++f){const g=l.times[f]*i;if(!(g<t||g>=n)){u.push(l.times[f]);for(let x=0;x<h;++x)d.push(l.values[f*h+x])}}u.length!==0&&(l.times=Qe.convertArray(u,l.times.constructor),l.values=Qe.convertArray(d,l.values.constructor),o.push(l))}r.tracks=o;let a=1/0;for(let c=0;c<r.tracks.length;++c)a>r.tracks[c].times[0]&&(a=r.tracks[c].times[0]);for(let c=0;c<r.tracks.length;++c)r.tracks[c].shift(-1*a);return r.resetDuration(),r},makeClipAdditive:function(s,e=0,t=s,n=30){n<=0&&(n=30);const i=t.tracks.length,r=e/n;for(let o=0;o<i;++o){const a=t.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;const l=s.tracks.find(function(m){return m.name===a.name&&m.ValueTypeName===c});if(l===void 0)continue;let h=0;const u=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0;const f=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const g=a.times.length-1;let x;if(r<=a.times[0]){const m=h,p=u-h;x=Qe.arraySlice(a.values,m,p)}else if(r>=a.times[g]){const m=g*u+h,p=m+u-h;x=Qe.arraySlice(a.values,m,p)}else{const m=a.createInterpolant(),p=h,T=u-h;m.evaluate(r),x=Qe.arraySlice(m.resultBuffer,p,T)}c==="quaternion"&&new bt().fromArray(x).normalize().conjugate().toArray(x);const _=l.times.length;for(let m=0;m<_;++m){const p=m*f+d;if(c==="quaternion")bt.multiplyQuaternionsFlat(l.values,p,x,0,l.values,p);else{const T=f-d*2;for(let M=0;M<T;++M)l.values[p+M]-=x[M]}}}return s.blendMode=Ll,s}};class wn{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,r)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,r,e)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}wn.prototype.beforeStart_=wn.prototype.copySampleValue_;wn.prototype.afterEnd_=wn.prototype.copySampleValue_;class hg extends wn{constructor(e,t,n,i){super(e,t,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ii,endingEnd:ii}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ri:r=e,a=2*t-n;break;case Hr:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ri:o=e,c=2*n-t;break;case Hr:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),x=g*g,_=x*g,m=-d*_+2*d*x-d*g,p=(1+d)*_+(-1.5-2*d)*x+(-.5+d)*g+1,T=(-1-f)*_+(1.5+f)*x+.5*g,M=f*_-f*x;for(let w=0;w!==a;++w)r[w]=m*o[h+w]+p*o[l+w]+T*o[c+w]+M*o[u+w];return r}}class fc extends wn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}}class ug extends wn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Zt{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qe.convertArray(t,this.TimeBufferType),this.values=Qe.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Qe.convertArray(e.times,Array),values:Qe.convertArray(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ug(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new fc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new hg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ur:t=this.InterpolantFactoryMethodDiscrete;break;case Or:t=this.InterpolantFactoryMethodLinear;break;case ls:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ur;case this.InterpolantFactoryMethodLinear:return Or;case this.InterpolantFactoryMethodSmooth:return ls}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=Qe.arraySlice(n,r,o),this.values=Qe.arraySlice(this.values,r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&Qe.isTypedArray(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=Qe.arraySlice(this.times),t=Qe.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===ls,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=Qe.arraySlice(e,0,o),this.values=Qe.arraySlice(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=Qe.arraySlice(this.times,0),t=Qe.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Zt.prototype.TimeBufferType=Float32Array;Zt.prototype.ValueBufferType=Float32Array;Zt.prototype.DefaultInterpolation=Or;class Si extends Zt{}Si.prototype.ValueTypeName="bool";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=Ur;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;class pc extends Zt{}pc.prototype.ValueTypeName="color";class Gr extends Zt{}Gr.prototype.ValueTypeName="number";class dg extends wn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let h=l+a;l!==h;l+=4)bt.slerpFlat(r,0,o,l-a,o,l,c);return r}}class tr extends Zt{InterpolantFactoryMethodLinear(e){return new dg(this.times,this.values,this.getValueSize(),e)}}tr.prototype.ValueTypeName="quaternion";tr.prototype.DefaultInterpolation=Or;tr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ei extends Zt{}Ei.prototype.ValueTypeName="string";Ei.prototype.ValueBufferType=Array;Ei.prototype.DefaultInterpolation=Ur;Ei.prototype.InterpolantFactoryMethodLinear=void 0;Ei.prototype.InterpolantFactoryMethodSmooth=void 0;class kr extends Zt{}kr.prototype.ValueTypeName="vector";class fl{constructor(e,t=-1,n,i=lo){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Xt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(pg(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Zt.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=Qe.getKeyframeOrder(c);c=Qe.sortedArray(c,1,h),l=Qe.sortedArray(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Gr(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,x){if(f.length!==0){const _=[],m=[];Qe.flattenJSON(f,_,m,g),_.length!==0&&x.push(new u(d,_,m))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(const x in f){const _=[],m=[];for(let p=0;p!==d[g].morphTargets.length;++p){const T=d[g];_.push(T.time),m.push(T.morphTarget===x?1:0)}i.push(new Gr(".morphTargetInfluence["+x+"]",_,m))}c=f.length*o}else{const f=".bones["+t[u].name+"]";n(kr,f+".position",d,"pos",i),n(tr,f+".quaternion",d,"rot",i),n(kr,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function fg(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Gr;case"vector":case"vector2":case"vector3":case"vector4":return kr;case"color":return pc;case"quaternion":return tr;case"bool":case"boolean":return Si;case"string":return Ei}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function pg(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=fg(s.type);if(s.times===void 0){const t=[],n=[];Qe.flattenJSON(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const xi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class mg{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const gg=new mg;class Mn{constructor(e){this.manager=e!==void 0?e:gg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const en={};class xg extends Mn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=xi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(en[e]!==void 0){en[e].push({onLoad:t,onProgress:n,onError:i});return}en[e]=[],en[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||l.body===void 0||l.body.getReader===void 0)return l;const h=en[e],u=l.body.getReader(),d=l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let x=0;const _=new ReadableStream({start(m){p();function p(){u.read().then(({done:T,value:M})=>{if(T)m.close();else{x+=M.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let L=0,R=h.length;L<R;L++){const j=h[L];j.onProgress&&j.onProgress(w)}m.enqueue(M),p()}})}}});return new Response(_)}else throw Error(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{xi.add(e,l);const h=en[e];delete en[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=en[e];if(h===void 0)throw this.manager.itemError(e),l;delete en[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class mc extends Mn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=xi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=qi("img");function c(){h(),xi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class vg extends Mn{constructor(e){super(e)}load(e,t,n,i){const r=new Yr,o=new mc(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function c(l){o.load(e[l],function(h){r.images[l]=h,a++,a===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let l=0;l<e.length;++l)c(l);return r}}class _g extends Mn{constructor(e){super(e)}load(e,t,n,i){const r=new ut,o=new mc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class jt extends We{constructor(e,t=1){super();this.type="Light",this.color=new me(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}jt.prototype.isLight=!0;class yg extends jt{constructor(e,t,n){super(e,n);this.type="HemisphereLight",this.position.copy(We.DefaultUp),this.updateMatrix(),this.groundColor=new me(t)}copy(e){return jt.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}yg.prototype.isHemisphereLight=!0;const pl=new _e,ml=new E,gl=new E;class Po{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new K(512,512),this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jr,this._frameExtents=new K(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ml.setFromMatrixPosition(e.matrixWorld),t.position.copy(ml),gl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gl),t.updateMatrixWorld(),pl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class gc extends Po{constructor(){super(new _t(50,1,.5,500));this.focus=1}updateMatrices(e){const t=this.camera,n=Ks*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}gc.prototype.isSpotLightShadow=!0;class wg extends jt{constructor(e,t,n=0,i=Math.PI/3,r=0,o=1){super(e,t);this.type="SpotLight",this.position.copy(We.DefaultUp),this.updateMatrix(),this.target=new We,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.shadow=new gc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}wg.prototype.isSpotLight=!0;const xl=new _e,Fi=new E,ks=new E;class xc extends Po{constructor(){super(new _t(90,1,.5,500));this._frameExtents=new K(4,2),this._viewportCount=6,this._viewports=[new qe(2,1,1,1),new qe(0,1,1,1),new qe(3,1,1,1),new qe(1,1,1,1),new qe(3,0,1,1),new qe(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Fi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Fi),ks.copy(n.position),ks.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ks),n.updateMatrixWorld(),i.makeTranslation(-Fi.x,-Fi.y,-Fi.z),xl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xl)}}xc.prototype.isPointLightShadow=!0;class Mg extends jt{constructor(e,t,n=0,i=1){super(e,t);this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new xc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}Mg.prototype.isPointLight=!0;class vc extends Po{constructor(){super(new po(-5,5,5,-5,.5,500))}}vc.prototype.isDirectionalLightShadow=!0;class bg extends jt{constructor(e,t){super(e,t);this.type="DirectionalLight",this.position.copy(We.DefaultUp),this.updateMatrix(),this.target=new We,this.shadow=new vc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}bg.prototype.isDirectionalLight=!0;class Sg extends jt{constructor(e,t){super(e,t);this.type="AmbientLight"}}Sg.prototype.isAmbientLight=!0;class Eg extends jt{constructor(e,t,n=10,i=10){super(e,t);this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}Eg.prototype.isRectAreaLight=!0;class _c{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new E)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,r=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*i),t.addScaledVector(o[2],.488603*r),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*i)),t.addScaledVector(o[5],1.092548*(i*r)),t.addScaledVector(o[6],.315392*(3*r*r-1)),t.addScaledVector(o[7],1.092548*(n*r)),t.addScaledVector(o[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,r=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*i),t.addScaledVector(o[2],2*.511664*r),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*i),t.addScaledVector(o[5],2*.429043*i*r),t.addScaledVector(o[6],.743125*r*r-.247708),t.addScaledVector(o[7],2*.429043*n*r),t.addScaledVector(o[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}}_c.prototype.isSphericalHarmonics3=!0;class Do extends jt{constructor(e=new _c,t=1){super(void 0,t);this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}Do.prototype.isLightProbe=!0;class Tg{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Ag extends Ye{constructor(){super();this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}Ag.prototype.isInstancedBufferGeometry=!0;class Cg extends Mn{constructor(e){super(e);typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=xi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){xi.add(e,c),t&&t(c),r.manager.itemEnd(e)}).catch(function(c){i&&i(c),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}Cg.prototype.isImageBitmapLoader=!0;let Ir;const Lg={getContext:function(){return Ir===void 0&&(Ir=new(window.AudioContext||window.webkitAudioContext)),Ir},setContext:function(s){Ir=s}};class Rg extends Mn{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new xg(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{const c=a.slice(0);Lg.getContext().decodeAudioData(c,function(h){t(h)})}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}}class Pg extends Do{constructor(e,t,n=1){super(void 0,n);const i=new me().set(e),r=new me().set(t),o=new E(i.r,i.g,i.b),a=new E(r.r,r.g,r.b),c=Math.sqrt(Math.PI),l=c*Math.sqrt(.75);this.sh.coefficients[0].copy(o).add(a).multiplyScalar(c),this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(l)}}Pg.prototype.isHemisphereLightProbe=!0;class Dg extends Do{constructor(e,t=1){super(void 0,t);const n=new me().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}Dg.prototype.isAmbientLightProbe=!0;class Ig{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=vl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function vl(){return(typeof performance=="undefined"?Date:performance).now()}class Bg extends We{constructor(e){super();this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}class Fg{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){bt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;bt.multiplyQuaternionsFlat(e,o,e,t,e,n),bt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const Io="\\[\\]\\.:\\/",zg=new RegExp("["+Io+"]","g"),Bo="[^"+Io+"]",Ng="[^"+Io.replace("\\.","")+"]",Ug=/((?:WC+[\/:])*)/.source.replace("WC",Bo),Og=/(WCOD+)?/.source.replace("WCOD",Ng),Hg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bo),Vg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bo),Gg=new RegExp("^"+Ug+Og+Hg+Vg+"$"),kg=["material","materials","bones"];class Wg{constructor(e,t,n){const i=n||Ge.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ge{constructor(e,t,n){this.path=t,this.parsedPath=n||Ge.parseTrackName(t),this.node=Ge.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ge.Composite(e,t,n):new Ge(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(zg,"")}static parseTrackName(e){const t=Gg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);kg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Ge.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ge.Composite=Wg;Ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ge.prototype.GetterByBindingType=[Ge.prototype._getValue_direct,Ge.prototype._getValue_array,Ge.prototype._getValue_arrayElement,Ge.prototype._getValue_toArray];Ge.prototype.SetterByBindingTypeAndVersioning=[[Ge.prototype._setValue_direct,Ge.prototype._setValue_direct_setNeedsUpdate,Ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_array,Ge.prototype._setValue_array_setNeedsUpdate,Ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_arrayElement,Ge.prototype._setValue_arrayElement_setNeedsUpdate,Ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_fromArray,Ge.prototype._setValue_fromArray_setNeedsUpdate,Ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class qg{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,a=new Array(o),c={endingStart:ii,endingEnd:ii};for(let l=0;l!==o;++l){const h=r[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Ch,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*n;if(c<0||n===0)return;this._startTime=null,t=n*c}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Ll:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case lo:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;n!==null&&(t*=n.evaluate(e)[0],e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===Lh;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===Ah){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=ri,i.endingEnd=ri):(e?i.endingStart=this.zeroSlopeAtStart?ri:ii:i.endingStart=Hr,t?i.endingEnd=this.zeroSlopeAtEnd?ri:ii:i.endingEnd=Hr)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}}class Xg extends Dn{constructor(e){super();this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){const d=i[u],f=d.name;let g=h[f];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}const x=t&&t._propertyBindings[u].binding.parsedPath;g=new Fg(Ge.create(n,f,x),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new fc(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?fl.findByName(i,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=lo),c!==void 0){const u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const h=new qg(this,o,t,n);return this._bindAction(h,l),this._addInactiveAction(h,a,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?fl.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}Xg.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class jg extends $i{constructor(e,t,n=1){super(e,t);this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}jg.prototype.isInstancedInterleavedBuffer=!0;const fn=new E,Br=new _e,Ws=new _e;class Zg extends wo{constructor(e){const t=yc(e),n=new Ye,i=[],r=[],o=new me(0,0,1),a=new me(0,1,0);for(let l=0;l<t.length;l++){const h=t[l];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(o.r,o.g,o.b),r.push(a.r,a.g,a.b))}n.setAttribute("position",new nt(i,3)),n.setAttribute("color",new nt(r,3));const c=new Mi({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,c);this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");Ws.copy(this.root.matrixWorld).invert();for(let r=0,o=0;r<t.length;r++){const a=t[r];a.parent&&a.parent.isBone&&(Br.multiplyMatrices(Ws,a.matrixWorld),fn.setFromMatrixPosition(Br),i.setXYZ(o,fn.x,fn.y,fn.z),Br.multiplyMatrices(Ws,a.parent.matrixWorld),fn.setFromMatrixPosition(Br),i.setXYZ(o+1,fn.x,fn.y,fn.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function yc(s){const e=[];s.isBone===!0&&e.push(s);for(let t=0;t<s.children.length;t++)e.push.apply(e,yc(s.children[t]));return e}class Yg extends wo{constructor(e=10,t=10,n=4473924,i=8947848){n=new me(n),i=new me(i);const r=t/2,o=e/t,a=e/2,c=[],l=[];for(let d=0,f=0,g=-a;d<=t;d++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const x=d===r?n:i;x.toArray(l,f),f+=3,x.toArray(l,f),f+=3,x.toArray(l,f),f+=3,x.toArray(l,f),f+=3}const h=new Ye;h.setAttribute("position",new nt(c,3)),h.setAttribute("color",new nt(l,3));const u=new Mi({vertexColors:!0,toneMapped:!1});super(h,u);this.type="GridHelper"}}const Jg=new Float32Array(1);new Int32Array(Jg.buffer);Dt.create=function(s,e){return console.log("THREE.Curve.create() has been deprecated"),s.prototype=Object.create(Dt.prototype),s.prototype.constructor=s,s.prototype.getPoint=e,s};no.prototype.fromPoints=function(s){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(s)};Yg.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};Zg.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};Mn.prototype.extractUrlBase=function(s){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),Tg.extractUrlBase(s)};Mn.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Ht.prototype.center=function(s){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(s)};Ht.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Ht.prototype.isIntersectionBox=function(s){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)};Ht.prototype.isIntersectionSphere=function(s){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(s)};Ht.prototype.size=function(s){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(s)};Bn.prototype.toVector3=function(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")};_i.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Jr.prototype.setFromMatrix=function(s){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(s)};ft.prototype.flattenToArrayOffset=function(s,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(s,e)};ft.prototype.multiplyVector3=function(s){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),s.applyMatrix3(this)};ft.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};ft.prototype.applyToBufferAttribute=function(s){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),s.applyMatrix3(this)};ft.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};ft.prototype.getInverse=function(s){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(s).invert()};_e.prototype.extractPosition=function(s){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(s)};_e.prototype.flattenToArrayOffset=function(s,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(s,e)};_e.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new E().setFromMatrixColumn(this,3)};_e.prototype.setRotationFromQuaternion=function(s){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(s)};_e.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};_e.prototype.multiplyVector3=function(s){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};_e.prototype.multiplyVector4=function(s){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};_e.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};_e.prototype.rotateAxis=function(s){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),s.transformDirection(this)};_e.prototype.crossVector=function(s){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};_e.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};_e.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};_e.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};_e.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};_e.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};_e.prototype.applyToBufferAttribute=function(s){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};_e.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};_e.prototype.makeFrustum=function(s,e,t,n,i,r){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(s,e,n,t,i,r)};_e.prototype.getInverse=function(s){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(s).invert()};tn.prototype.isIntersectionLine=function(s){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(s)};bt.prototype.multiplyVector3=function(s){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),s.applyQuaternion(this)};bt.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};yi.prototype.isIntersectionBox=function(s){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)};yi.prototype.isIntersectionPlane=function(s){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(s)};yi.prototype.isIntersectionSphere=function(s){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(s)};rt.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};rt.prototype.barycoordFromPoint=function(s,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(s,e)};rt.prototype.midpoint=function(s){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(s)};rt.prototypenormal=function(s){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(s)};rt.prototype.plane=function(s){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(s)};rt.barycoordFromPoint=function(s,e,t,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),rt.getBarycoord(s,e,t,n,i)};rt.normal=function(s,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),rt.getNormal(s,e,t,n)};er.prototype.extractAllPoints=function(s){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(s)};er.prototype.extrude=function(s){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new bi(this,s)};er.prototype.makeGeometry=function(s){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Ao(this,s)};K.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)};K.prototype.distanceToManhattan=function(s){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(s)};K.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};E.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};E.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};E.prototype.getPositionFromMatrix=function(s){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(s)};E.prototype.getScaleFromMatrix=function(s){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(s)};E.prototype.getColumnFromMatrix=function(s,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,s)};E.prototype.applyProjection=function(s){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(s)};E.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)};E.prototype.distanceToManhattan=function(s){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(s)};E.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};qe.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)};qe.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};We.prototype.getChildByName=function(s){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(s)};We.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};We.prototype.translate=function(s,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,s)};We.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};We.prototype.applyMatrix=function(s){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(s)};Object.defineProperties(We.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(s){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=s}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});yt.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(yt.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),Rh},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Jl.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};_t.prototype.setLens=function(s,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(s)};Object.defineProperties(jt.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(s){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=s}},shadowCameraLeft:{set:function(s){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=s}},shadowCameraRight:{set:function(s){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=s}},shadowCameraTop:{set:function(s){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=s}},shadowCameraBottom:{set:function(s){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=s}},shadowCameraNear:{set:function(s){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=s}},shadowCameraFar:{set:function(s){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=s}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(s){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=s}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(s){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=s}},shadowMapHeight:{set:function(s){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=s}}});Object.defineProperties(at.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===Vr},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(Vr)}}});at.prototype.setDynamic=function(s){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(s===!0?Vr:Wi),this};at.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},at.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Ye.prototype.addIndex=function(s){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(s)};Ye.prototype.addAttribute=function(s,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(s,new at(arguments[1],arguments[2]))):s==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(s,e)};Ye.prototype.addDrawCall=function(s,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(s,e)};Ye.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};Ye.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};Ye.prototype.removeAttribute=function(s){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(s)};Ye.prototype.applyMatrix=function(s){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(s)};Object.defineProperties(Ye.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});$i.prototype.setDynamic=function(s){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(s===!0?Vr:Wi),this};$i.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};bi.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};bi.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};bi.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};vo.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(lt.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new me}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(s){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=s===El}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(s){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=s}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(Ot.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(s){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=s}}});Xe.prototype.clearTarget=function(s,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(s),this.clear(e,t,n)};Xe.prototype.animate=function(s){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(s)};Xe.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};Xe.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};Xe.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};Xe.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};Xe.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};Xe.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};Xe.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};Xe.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};Xe.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};Xe.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};Xe.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};Xe.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};Xe.prototype.enableScissorTest=function(s){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(s)};Xe.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};Xe.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};Xe.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};Xe.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};Xe.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};Xe.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};Xe.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};Xe.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};Xe.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};Xe.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(Xe.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(s){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=s}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(s){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=s}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(s){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=s===!0?Ke:_n}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}},gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});Object.defineProperties(ql.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(Lt.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(s){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=s}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(s){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=s}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(s){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=s}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(s){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=s}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(s){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=s}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(s){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=s}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(s){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=s}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(s){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=s}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(s){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=s}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(s){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=s}}});Bg.prototype.load=function(s){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new Rg().load(s,function(n){e.setBuffer(n)}),this};uo.prototype.updateCubeMap=function(s,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(s,e)};uo.prototype.clear=function(s,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(s,e,t,n)};In.crossOrigin=void 0;In.loadTexture=function(s,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const i=new _g;i.setCrossOrigin(this.crossOrigin);const r=i.load(s,t,void 0,n);return e&&(r.mapping=e),r};In.loadTextureCube=function(s,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const i=new vg;i.setCrossOrigin(this.crossOrigin);const r=i.load(s,t,void 0,n);return e&&(r.mapping=e),r};In.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};In.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oo}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oo);var Kg=`varying vec2 vUv;\r
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
}`,Qg=`precision mediump float;\r
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
                }`;function Fr(s,e,t){return s*(1-t)+e*t}class _l{constructor(e){this.element=document.querySelector(".main"),this.viewport={width:this.element.offsetWidth,height:this.element.offsetHeight},this.resize=this.onResize.bind(this),this.mouseMove=this.onMouseMove.bind(this),this.mouse={x:0,y:0},this.clock=new Ig,this.update=this.update.bind(this),this.size=e,this.init()}init(){this.addCanvas(),this.addScene(),this.addCamera(),this.addMesh(),this.addEventListeners(),this.onResize(),this.update()}remove(){this.removeEventListeners(),window.cancelAnimationFrame(this.animationFrame),this.renderer=null,this.scene=null,this.element.removeChild(this.canvas),this.canvas=null,this.camera=null,this.geometry=null,this.mesh=null,this.material=null}addCanvas(){this.renderer=new Zl({alpha:!0,powerPreference:"high-performance",precision:"mediump"}),this.canvas=this.renderer.domElement,this.canvas.classList.add("webgl"),this.element.appendChild(this.canvas)}addScene(){this.scene=new vo}addCamera(){this.camera=new _t(75,this.viewport.width/this.viewport.height,.1,10),this.camera.position.set(0,0,2),this.scene.add(this.camera)}addMesh(){this.geometry=new Co(1.1,32,32),this.material=new Lo({fragmentShader:Qg,vertexShader:Kg,uniforms:{uResolution:{value:new K(this.viewport.width,this.viewport.height)},uTime:{value:0},uMouse:{value:new K(this.mouse.x,this.mouse.y)}}}),this.mesh=new yt(this.geometry,this.material),this.scene.add(this.mesh)}addEventListeners(){window.addEventListener("resize",this.resize),window.addEventListener("mousemove",this.mouseMove)}removeEventListeners(){window.removeEventListener("resize",this.resize),window.removeEventListener("mousemove",this.mouseMove)}onResize(){this.viewport={width:this.element.offsetWidth,height:this.element.offsetHeight},this.camera.aspect=this.viewport.width/this.viewport.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.viewport.width,this.viewport.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5))}onMouseMove(e){let t=this.mouse.x,n=this.mouse.y;this.mouse.x=Fr(t,e.clientX/this.viewport.width-.5,1),this.mouse.y=Fr(n,e.clientY/this.viewport.height-.5,1)}update(){this.render(),this.mesh.rotation.y=Fr(this.mesh.rotation.y,this.mouse.x,.075),this.mesh.rotation.x=Fr(this.mesh.rotation.x,this.mouse.y,.075),this.material.uniforms.uTime.value=this.clock.getElapsedTime(),this.animationFrame=window.requestAnimationFrame(this.update)}render(){this.renderer.render(this.scene,this.camera)}}const $g={},e0={width:"173",height:"173",viewBox:"0 0 173 173",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t0=Ac('<path d="M86.358 172.71C69.2775 172.711 52.5803 167.647 38.3779 158.159C24.1755 148.67 13.1059 135.183 6.56891 119.403C0.0319548 103.623 -1.67872 86.2583 1.65324 69.506C4.98519 52.7536 13.2101 37.3656 25.2878 25.2878C37.3656 13.2101 52.7536 4.98519 69.506 1.65324C86.2583 -1.67872 103.623 0.0319548 119.403 6.56891C135.183 13.1059 148.67 24.1755 158.159 38.3779C167.647 52.5803 172.711 69.2775 172.71 86.358C172.709 109.26 163.61 131.223 147.416 147.416C131.223 163.61 109.26 172.709 86.358 172.71ZM127.379 86.358C127.38 78.2432 124.975 70.3103 120.467 63.5626C115.959 56.8149 109.552 51.5555 102.055 48.4496C94.5582 45.3436 86.3086 44.5307 78.3497 46.1135C70.3907 47.6963 63.0799 51.6039 57.3419 57.3419C51.6039 63.0799 47.6963 70.3907 46.1135 78.3497C44.5307 86.3086 45.3436 94.5582 48.4496 102.055C51.5555 109.552 56.8149 115.959 63.5626 120.467C70.3103 124.975 78.2432 127.38 86.358 127.379C97.2374 127.379 107.671 123.057 115.364 115.364C123.057 107.671 127.379 97.2374 127.379 86.358Z" fill="#FF0000"></path><path d="M30.686 68.6447C34.178 69.2336 35.7915 73.0789 34.9965 77.7722L34.4666 80.8991L33.5715 86.199H33.4419C33.2417 85.1154 32.853 84.1497 31.9697 83.9966L17.8368 81.6058C16.9359 81.4527 16.5119 82.283 16.2174 83.284H16.0879L17.3481 75.8407C18.0312 71.7952 19.2442 68.4327 22.059 68.9097C23.9081 69.2218 25.1977 71.012 25.3214 73.3439C26.2165 70.1758 27.936 68.1795 30.686 68.6447ZM17.3893 78.0078L24.2791 79.1855L24.921 75.3755C25.1506 74.027 24.9975 72.8198 22.7009 72.4312C20.4043 72.0425 18.249 72.9376 17.725 76.0115L17.3893 78.0078ZM31.0864 72.2074C28.6367 71.7952 25.9397 71.9542 25.1447 76.6475L24.7325 79.2444L33.5244 80.7342C34.0788 79.7114 34.4646 78.6058 34.6668 77.4601C35.185 74.239 34.7787 72.8316 31.0864 72.2074Z" fill="white"></path><path d="M38.4595 47.4455C43.3943 50.2956 44.3129 55.7427 41.5629 60.5008C38.8128 65.2588 33.6249 67.2021 28.6902 64.352C23.7554 61.5018 22.8368 56.0548 25.5986 51.2732C28.3604 46.4915 33.5248 44.5954 38.4595 47.4455ZM38.0709 51.4616C33.7073 48.9412 27.5536 48.8058 25.4514 52.445C23.9321 55.0773 25.4514 58.2159 29.0611 60.3241C33.4423 62.8562 39.596 62.9917 41.6983 59.3525C43.2176 56.7202 41.7101 53.5874 38.0709 51.4616Z" fill="white"></path><path d="M54.2408 38.365L56.667 43.1113L56.9261 43.6295L55.9073 43.7826L46.2381 52.3036L46.1556 52.2035C46.4522 51.682 46.5782 51.0808 46.5159 50.4841C46.4536 49.8875 46.2061 49.3253 45.8082 48.8763L36.9221 38.8125C36.3333 38.1295 35.4676 38.5063 34.6079 39.1011L34.5195 39.0069L40.2021 34.0015L40.2846 34.0957C39.4013 35.0438 38.9184 35.8623 39.5249 36.5218L50.0186 48.4288L51.479 47.1451C54.6943 44.3126 54.4234 42.1809 54.1348 38.3944L54.2408 38.365Z" fill="white"></path><path d="M70.0762 26.4992C72.4317 32.0111 69.6581 36.8339 64.0992 39.2306L57.1211 42.2456L57.0681 42.1338C57.8748 41.3741 58.4755 40.532 58.1162 39.6958L52.4101 26.5405C52.0509 25.7043 51.1263 25.7985 50.1194 26.0929L50.0723 25.9751L57.5333 22.7658C63.5515 20.163 67.9622 21.6234 70.0762 26.4992ZM67.2673 29.261C65.0414 24.1437 61.461 21.5115 56.7618 23.5549L55.2072 24.2262L61.6082 39.0422C62.8103 39.0383 63.9989 38.7878 65.1003 38.3061C68.1683 36.9811 69.5286 34.5197 67.2614 29.2669L67.2673 29.261Z" fill="white"></path><path d="M93.0415 29.0608C93.0945 32.1465 90.5506 34.5726 86.0929 34.6433C83.0307 34.6904 80.6046 33.6657 79.2148 32.3761L81.4879 28.6368C81.217 32.1406 84.2379 34.2664 87.0998 34.2193C90.0442 34.1722 90.6331 31.9875 90.6331 30.6448C90.5977 28.3895 88.8664 27.7829 85.8691 27.1116C80.9343 26.0516 79.5505 23.5195 79.5152 21.3407C79.4681 18.2255 82.0944 16.2587 86.1694 16.1939C89.1138 16.1409 91.2278 17.1244 92.5881 18.3904L90.2326 22.1298C90.6331 18.6495 87.7594 16.5473 84.974 16.5885C82.5714 16.6297 81.9649 18.2844 81.9884 19.7036C82.0296 22.3653 84.3439 23.1132 86.9879 23.6726C92.0051 24.7326 93.0415 27.1823 93.0415 29.0608Z" fill="white"></path><path d="M112.857 26.8702C111.744 30.5507 107.934 31.858 103.135 30.4035L100.349 29.5614L98.9301 34.237C98.671 35.1144 99.4366 35.6326 100.391 36.0566L100.355 36.1803L93.3535 34.0545L93.3888 33.9367C94.4194 34.1133 95.3498 34.1075 95.6148 33.2359L99.9135 19.0324C100.179 18.1608 99.413 17.6367 98.4531 17.2127L98.4885 17.095L107.557 19.8391C111.885 21.1464 113.887 23.4783 112.857 26.8702ZM109.241 27.0174C110.089 24.2321 110.225 21.0698 106.103 19.8214L103.535 19.0441L100.644 28.5956C101.735 29.3279 102.924 29.9009 104.177 30.2975C106.674 31.0512 108.128 30.7038 109.241 27.0174Z" fill="white"></path><path d="M122.844 47.7575L122.791 47.8458L116.048 43.5353L116.101 43.4469C117.68 44.2772 118.834 44.3538 119.287 41.9983L119.54 40.6321L111.39 35.4501L110.242 36.2156C108.281 37.5464 108.888 38.471 109.918 39.4956L109.859 39.578L105.938 37.0989L105.991 37.0106C107.05 37.3286 107.822 37.252 109.783 35.9212L121.342 28.1363L121.696 27.4885H122.285L125.659 27.7535C125.412 28.3266 125.255 28.9344 125.194 29.5555L122.426 43.8061C121.896 46.2617 121.967 47.0155 122.844 47.7575ZM119.635 40.1787L121.896 28.3542L111.785 35.1615L119.635 40.1787Z" fill="white"></path><path d="M127.567 55.0771C123.987 50.6488 124.34 44.925 128.456 41.5979C133.167 37.7761 139.091 40.0079 142.365 44.0652C144.42 46.6092 144.721 48.9823 144.373 50.7784L138.225 51.0257V50.9491C141.794 49.7714 143.525 46.3088 141.093 43.2938C139.15 40.8912 135.864 40.4849 132.178 43.4587C128.162 46.7093 126.725 51.9384 129.681 55.6012C130.859 57.0381 132.625 58.1805 134.339 58.1864V58.4043C132.301 58.6457 129.781 57.8154 127.567 55.0771Z" fill="white"></path><path d="M142.819 73.2793L137.348 73.9271L136.759 73.986L136.971 72.9849L132.195 60.4419L132.313 60.4007C133.037 61.231 133.85 61.8729 134.704 61.5784L148.095 56.4788C148.949 56.149 148.89 55.2245 148.642 54.2117L148.76 54.1646L153.713 67.1786L149.885 69.6401L149.803 69.5635C151.769 66.7546 152.6 65.3825 151.434 62.3263L150.297 59.3466L142.589 62.291L143.343 64.2814C144.461 67.2257 145.521 68.0796 147.918 67.8146L141.918 70.0758C143.855 68.6861 144.073 67.3317 142.954 64.3991L142.218 62.4205L134.51 65.3649L135.687 68.4859C136.865 71.5363 138.908 72.4608 142.813 73.1969L142.819 73.2793Z" fill="white"></path><path d="M142.76 101.522C139.227 101.092 137.46 97.3288 138.049 92.6002L138.438 89.4615L139.091 84.1086H139.221C139.468 85.1863 139.886 86.1344 140.793 86.2404L155.02 88.007C155.921 88.1189 156.31 87.2768 156.563 86.2404H156.687L155.762 93.7308C155.262 97.7999 154.208 101.215 151.34 100.868C149.479 100.638 148.113 98.9129 147.889 96.5868C147.159 99.7962 145.528 101.875 142.76 101.522ZM142.171 97.9883C144.639 98.2887 147.324 97.9883 147.907 93.2774L148.225 90.6628L139.392 89.5734C138.887 90.621 138.551 91.7419 138.397 92.8946C138.014 96.1452 138.485 97.529 142.201 97.9883H142.171ZM155.592 91.5755L148.655 90.7217L148.184 94.5434C148.019 95.8978 148.225 97.0991 150.539 97.3818C152.853 97.6645 154.961 96.6752 155.344 93.5836L155.592 91.5755Z" fill="white"></path><path d="M135.947 123.074C130.894 120.448 129.729 115.054 132.261 110.178C134.793 105.302 139.916 103.111 144.945 105.75C149.974 108.388 151.169 113.776 148.62 118.669C146.07 123.563 141.005 125.689 135.947 123.074ZM136.159 119.046C140.629 121.402 146.759 121.225 148.72 117.498C150.121 114.801 148.49 111.727 144.762 109.789C140.263 107.434 134.116 107.599 132.178 111.326C130.777 114.011 132.426 117.097 136.159 119.035V119.046Z" fill="white"></path><path d="M120.577 132.844L117.939 128.215L117.662 127.709L118.669 127.508L127.95 118.569L128.038 118.658C127.772 119.191 127.677 119.793 127.765 120.382C127.854 120.971 128.122 121.518 128.533 121.949L137.86 131.625C138.49 132.284 139.321 131.872 140.157 131.242L140.245 131.33L134.792 136.583L134.704 136.495C135.546 135.505 135.994 134.693 135.364 134.033L124.346 122.603L122.944 123.958C119.859 126.902 120.218 129.045 120.683 132.791L120.577 132.844Z" fill="white"></path><path d="M105.313 145.404C102.687 140.004 105.266 135.063 110.707 132.414L117.538 129.092L117.591 129.204C116.826 129.999 116.26 130.865 116.661 131.689L122.932 144.574C123.327 145.392 124.246 145.257 125.235 144.915L125.294 145.027L118.004 148.56C112.109 151.446 107.639 150.162 105.313 145.404ZM107.993 142.519C110.442 147.553 114.141 150.003 118.74 147.765L120.265 147.023L113.198 132.496C111.997 132.552 110.82 132.857 109.742 133.391C106.738 134.851 105.49 137.378 107.993 142.507V142.519Z" fill="white"></path><path d="M82.1771 143.797C82.0299 140.711 84.4973 138.208 88.9491 137.996C92.0113 137.855 94.461 138.803 95.8919 140.051L93.7425 143.855C93.9015 140.352 90.7982 138.314 87.9539 138.45C85.0096 138.591 84.4914 140.805 84.5562 142.136C84.6622 144.385 86.3875 144.939 89.432 145.504C94.3962 146.411 95.8566 148.902 95.9626 151.075C96.1098 154.184 93.5423 156.234 89.485 156.428C86.5407 156.569 84.4031 155.656 83.0074 154.432L85.2334 150.622C84.9389 154.114 87.8774 156.127 90.6569 155.992C93.0595 155.88 93.6012 154.225 93.5482 152.789C93.4246 150.133 91.1103 149.456 88.425 148.979C83.3725 148.078 82.2655 145.669 82.1771 143.797Z" fill="white"></path><path d="M62.5377 146.959C63.4858 143.231 67.2487 141.753 72.0892 142.99L74.9158 143.708L76.0936 138.997C76.3173 138.114 75.5047 137.625 74.5566 137.231V137.113L81.6231 138.915L81.5936 139.038C80.5572 138.903 79.6268 138.956 79.403 139.839L75.7461 154.22C75.5224 155.103 76.335 155.592 77.2831 155.986L77.2536 156.11L68.0731 153.754C63.7861 152.635 61.6603 150.398 62.5377 146.959ZM66.1416 146.653C65.4232 149.473 65.4291 152.635 69.6042 153.719L72.2011 154.384L74.6626 144.715C73.5411 144.031 72.3275 143.512 71.0587 143.172C68.5325 142.507 67.0897 142.919 66.1416 146.629V146.653Z" fill="white"></path><path d="M51.6266 126.537L51.6737 126.448L58.5989 130.453L58.5518 130.541C56.9383 129.787 55.7841 129.758 55.4366 132.131L55.2364 133.479L63.5984 138.326L64.7172 137.507C66.6193 136.094 65.9656 135.193 64.8939 134.215L64.941 134.127L68.9748 136.483L68.9277 136.571C67.85 136.3 67.0845 136.412 65.1825 137.825L53.9939 146.117L53.67 146.776H53.1165L49.7305 146.629C49.9488 146.043 50.0778 145.428 50.1132 144.803L52.245 130.447C52.6218 127.991 52.5335 127.237 51.6266 126.537ZM55.1599 133.962L53.4462 145.875L63.2215 138.632L55.1599 133.962Z" fill="white"></path><path d="M46.5853 119.441C50.3541 123.704 50.254 129.452 46.2909 132.944C41.7389 136.972 35.7442 135.011 32.2875 131.101C30.1205 128.657 29.6906 126.295 29.985 124.482L36.1152 123.963L36.1446 124.034C32.6114 125.383 31.0568 128.91 33.6243 131.813C35.6735 134.127 38.9771 134.381 42.5221 131.224C46.391 127.803 47.5923 122.515 44.4771 118.987C43.2523 117.604 41.4327 116.538 39.7073 116.632V116.414C41.6918 116.09 44.2534 116.803 46.5853 119.441Z" fill="white"></path><path d="M30.5275 101.928L35.9627 101.038L36.5516 100.956L36.3808 101.963L41.7219 114.282L41.6041 114.329C40.8445 113.528 40.0024 112.928 39.1662 113.293L26.0167 118.993C25.1805 119.352 25.2747 120.277 25.5751 121.284L25.4573 121.331L19.916 108.552L23.6318 105.92L23.7201 105.991C21.8828 108.888 21.1114 110.296 22.4128 113.293L23.6848 116.237L31.2577 112.957L30.4097 111.002C29.1613 108.123 28.0542 107.304 25.6987 107.669L31.5874 105.125C29.7089 106.597 29.5558 107.964 30.8042 110.843L31.6522 112.792L39.2251 109.512L37.9001 106.444C36.5987 103.447 34.5024 102.617 30.5628 102.063L30.5275 101.928Z" fill="white"></path>',19),n0=[t0];function i0(s,e){return At(),Nt("svg",e0,n0)}var r0=so($g,[["render",i0]]);const s0={class:"left-side lg:absolute relative top-0 left-0 w-[100vw] flex justify-center items-center h-screen"},o0={class:"relative w-full h-full"},a0=pe("div",{class:"main-text absolute top-0 left-0 w-full h-full z-[28] flex flex-col justify-center items-center text-white pb-80 md:pb-50"},[pe("span",{class:"font-corsa font-bold uppercase tracking-[-0.05em] xl:text-9xl lg:text-8xl sm:text-7xl xs:text-6xl text-[2.2rem] xl:pr-50 lg:pr-30 sm:pr-10 p-0"}," Energy far "),pe("span",{class:"font-corsa font-bold uppercase tracking-[-0.05em] xl:text-9xl lg:text-8xl sm:text-7xl xs:text-6xl text-[2.2rem] xl:pr-50 lg:pr-30 sm:pr-10 p-0"}," From ordinary. "),pe("span",{class:"font-roxbor font-extrabold italic xl:text-9xl lg:text-8xl sm:text-7xl xs:text-6xl text-[2.2rem] xl:pl-50 lg:pl-30 sm:pl-10 p-0"},"The Extraordinary.")],-1),l0={class:"absolute top-0 left-0 w-full h-full z-30 overflow-hidden flex justify-center items-center"},c0={key:0,class:"absolute top-0 left-0 w-full h-full z-20 overflow-hidden flex justify-center items-center mt-10"},h0=pe("div",{class:"outside border-[20px] 4K:border-[25px] border-c-black rounded-full p-20 4K:p-30"},[pe("div",{class:"inside bg-c-black p-56 4K:p-65 rounded-full"})],-1),u0=[h0],d0={class:"absolute top-0 left-0 w-full h-screen z-20 flex justify-center items-center mt-10 text-white"},f0=pe("div",{class:"bold-space-sample absolute top-0 left-0 w-full h-screen z-20 flex justify-center items-center mt-10 opacity-0 text-white"},[pe("h1",{class:"absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold uppercase text-[8vw] 4K:text-[6vw] leading-[1]"},[pe("span",{class:"font-corsa"},"Bold"),rn(),pe("br"),pe("span",{class:"font-roxbor"},"Space")])],-1),p0={key:1,class:"absolute top-0 left-0 w-full h-screen z-20 flex justify-center items-center mt-10"},m0=["src"],g0=pe("div",{class:"main absolute top-0 left-0 w-full h-full overflow-hidden z-10 mt-10"},null,-1),x0=pe("div",{class:"seperator h-full absolute left-full top-0 w-25 bg-custom-red-100 z-100"},null,-1),v0={ref:"pin",class:"right-side bg-c-black w-[100vw] h-screen lg:absolute relative top-0 left-0 lg:opacity-0 opacity-100"},_0={class:"relative w-full h-full flex justify-center items-center text-c-gray p-5"},y0={class:"relative content lg:w-178 md:w-100 w-full lg:text-[32px] text-[18px] lg:text-center text-left text-c-gray"},w0=rn(" B"),M0=pe("span",{class:"text-custom-red-100"},"o",-1),b0=rn("ld is a distinct type of "),S0=pe("span",{class:"font-roxbor font-extrabold italic text-white"},"energy drink.",-1),E0={key:0},T0=rn(" It has distinguished from others, thanks to its "),A0=pe("span",{class:"font-roxbor font-extrabold italic text-white"},"uniqueness",-1),C0=rn(" of its components. Bold "),L0=pe("span",{class:"font-roxbor font-extrabold italic text-white"},"vitalizes",-1),R0=rn(" the mind and body. It uses a "),P0={key:1},D0=rn(" vitamin base to "),I0=pe("span",{class:"font-roxbor font-extrabold italic text-white"},"energize",-1),B0=rn(" the body. It boosts metabolism and improves "),F0=pe("span",{class:"font-roxbor font-extrabold italic text-white"},"mood",-1),z0=rn(". "),N0={class:"div lg:block flex mt-12 lg:mt-0"},U0={class:"bottle-light w-[60vw] lg:absolute relative lg:top-[-6rem] lg:left-[-13rem] animate-float"},O0=["src"],H0={class:"flex justify-end bottle-black w-[60vw] lg:absolute relative lg:bottom-[-8rem] lg:right-[-9rem] animate-float mt-[10rem] lg:mt-0"},V0=["src"],G0={setup(s){const e=new URL("assets/light.0ca475e9.png",self.location).href,t=new URL("assets/black.31873f0b.png",self.location).href,n=new URL("assets/boldSphere.dd3f99ce.png",self.location).href,i=Pt("scrollWrapper"),r=Pt("scroller"),o=Pt("eventBus"),a=Ct(),c=Ct(),l=Ct();let h=0,u=null,d=null,f=null,g=null;const x=bl();function _(){u&&(u.kill(),u=null),d&&(d.kill(),d=null),f&&(f.kill(),document.querySelector(".bold-space-sample").style.opacity=0,f=null),g&&(g.remove(),g=null)}function m(){f.play()}function p(){f.reverse()}function T(){u&&u.refresh()}function M(){if(x.value)return;r.value.scrollTo(0,{duration:0,disableLerp:!0}),_();function L(){let R=window.innerHeight;return window.innerWidth>=2560?250:R<700?133:R<800?150:R<850?165:R<900?175:200}g=new _l(2),f=nn.timeline(),f.to(".main-text",{opacity:0,duration:.28}).to(c.value,{scale:L()},"-=0.28").to(".bold-space-sample",{opacity:1}),f.pause(),d=nn.timeline().to(".seperator",{width:"100%",duration:1,left:0,ease:"power3"}).to(".seperator",{width:"0px"}).to(".left-side",{opacity:0},1).to(".right-side",{opacity:1},1),d.pause(),u=pn.create({trigger:a.value,pin:!0,start:"top top",end:"100%",scroller:i.value,invalidateOnRefresh:!0,markers:!0}),a.value.addEventListener("wheel",R=>{h+=R.deltaY,h>300&&g&&(g.remove(),g=null),R.deltaY>0?d.play():(h=0,d.reverse(),g||(g=new _l(2)))})}function w(){T()}return Ji(()=>{M(),o.on("wrapper-resize",w),w(),window.innerHeight<900&&!x.value&&(document.querySelector(".outside").style.padding="5rem",document.querySelector(".inside").style.padding="10rem",document.querySelector(".bold-space").style.transform="translate(38vh,30vh)"),window.innerWidth<768&&!x.value&&(document.querySelector(".bold-space").style.transform="translate(0,30vh)")}),Ki(()=>{_(),o.off("wrapper-resize",w)}),(L,R)=>{const j=Lc("RouterLink");return At(),Nt("div",{ref_key:"sectionPin",ref:a,class:"overflow-hidden flex"},[pe("div",{ref_key:"pinWrap",ref:l,class:"pin-wrap lg:h-screen h-auto w-full relative"},[pe("div",s0,[pe("div",o0,[a0,pe("button",l0,[ot(j,{to:{name:"EditionsView",hash:"#bold-space"}},{default:Cc(()=>[ot(r0,{class:"w-30 h-30 md:w-full md:h-full bold-space hover:rotate-360 duration-700 md:translate-x-[37vh] md:translate-y-[27vh] translate-x-[15vh] translate-y-[21vh] 4K:translate-x-115 4K:translate-y-70",onMouseover:m,onMouseleave:p})]),_:1})]),ke(x)?ir("",!0):(At(),Nt("div",c0,u0)),pe("div",d0,[pe("div",{ref_key:"boldSpacePage",ref:c,class:"bold-space-page rounded-full w-1 h-1 bg-c-black"},null,512)]),f0,ke(x)?(At(),Nt("div",p0,[pe("img",{class:"w-90 h-90",src:ke(n)},null,8,m0)])):ir("",!0),g0])]),x0,pe("div",v0,[pe("div",_0,[pe("div",y0,[pe("p",null,[w0,M0,b0,S0,ke(x)?ir("",!0):(At(),Nt("br",E0)),T0,A0,C0,L0,R0,ke(x)?ir("",!0):(At(),Nt("br",P0)),D0,I0,B0,F0,z0]),pe("div",N0,[pe("div",U0,[pe("img",{src:ke(e)},null,8,O0)]),pe("div",H0,[pe("img",{src:ke(t)},null,8,V0)])])])])],512)],512)],512)}}};var k0="assets/video.276a73f0.mp4",W0={mounted(s){s.__observer__=new IntersectionObserver(e=>{e[0].isIntersecting?s.paused&&s.play():s.paused||s.pause()},{threshold:0}),s.__observer__.observe(s)},unmounted(s){s.__observer__.unobserve(s),s.__observer__.disconnect()}};const q0={ref:"point",class:"point z-10 absolute top-1/2 left-1/2 rounded-full bg-custom-red-100 w-[5px] h-[5px] opacity-0"},X0={ref:"lightCans",class:"bold-video absolute top-0 relative-0 z-2 h-screen w-[100vw]"},j0={class:"w-[100vw] h-[100vh] object-cover",src:k0,autoplay:"",muted:"",loop:""},Z0={setup(s){const e=Pt("scrollWrapper"),t=Pt("sectionPin"),n=Pt("pinWrap"),i=Pt("eventBus");let r=null,o=null;function a(){r&&(r.kill(),r=null),o&&(o.kill(),o=null)}function c(){o.refresh()}function l(){r=nn.timeline().to(".point",{scale:400,opacity:100,duration:500}).to(".bold-video",{opacity:0}).to(".point",{scale:0}).to(n.value,{opacity:1.5,ease:"none",duration:150}).to(".bold-video",{scale:0}),o=pn.create({trigger:t.value,scroller:e.value,start:"top",end:"+=500px",scrub:!0,animation:r})}function h(){c()}return Ji(()=>{l(),i.on("wrapper-resize",h),h()}),Ki(()=>{a(),i.off("wrapper-resize",h)}),(u,d)=>(At(),Nt(Pc,null,[pe("div",q0,null,512),pe("div",X0,[Rc(pe("video",j0,null,512),[[ke(W0)]])],512)],64))}},Y0={ref:"blankSpace",class:"blank-space w-[45vw] h-screen bg-custom-red-100"},J0={setup(s,{expose:e}){const t=Pt("main"),n=Pt("eventBus"),i=Pt("scrollWrapper"),r=Ct(),o=Ct(),a=Ct();Oi("sectionPin",r),Oi("pinWrap",o);let c=null,l=null;function h(){c&&(c.kill(),c=null),l&&(l.kill(),l=null)}function u(){l.refresh()}function d(){h(),c=nn.to(o.value,{x:()=>-(o.value.offsetWidth-window.innerWidth)}),l=pn.create({trigger:r.value,pin:!0,scrub:!0,start:()=>2*t.value.$el.offsetHeight,end:()=>2*t.value.$el.offsetHeight+o.value.offsetWidth,scroller:i.value,animation:c,invalidateOnRefresh:!0})}function f(){u()}return Ji(()=>{let g;innerWidth>1280&&(g="55vw"),innerWidth>1536&&(g="45vw"),document.querySelector(".blank-space").style.width=g,d(),n.on("wrapper-resize",f),f()}),Ki(()=>{h(),n.off("wrapper-resize",f)}),e({pinWrap:o,story:a}),(g,x)=>(At(),Nt("div",{ref_key:"sectionPin",ref:r,class:"relative h-screen flex bg-custom-red-100"},[ot(Z0),pe("div",{ref_key:"pinWrap",ref:o,class:"h-screen flex justify-start items-center opacity-0"},[pe("div",Y0,null,512),ot(Dc,{ref_key:"story",ref:a},null,512),ot(Ic,{ref:"story2"},null,512),ot(Bc,{ref:"story3"},null,512)],512)],512))}};var K0="assets/IconBoldOLetter.30ee9bc0.png";const Fo=s=>(yl("data-v-191c1a40"),s=s(),wl(),s),Q0={class:"bg-custom-red-100 overflow-hidden relative"},$0=Fo(()=>pe("div",{class:"w-full min-h-screen"},null,-1)),ex=Fo(()=>pe("img",{src:K0,class:"object-cover w-[80vw] xl:h-[50vh] sm:h-[50vh] xs:h-[25vh] h-[30vh]"},null,-1)),tx=[ex],nx={class:"opacity-0 imgs transition-opacity ease-in-out duration-500"},ix={class:"nav-bar w-full h-full py-[5vh] px-[10vw] flex flex-col bg-white"},rx=Fo(()=>pe("div",{class:"border-b-2 w-[75vw] border-black"},null,-1)),sx={setup(s){const e=new URL("assets/light-bold.7fd9d90c.png",self.location).href,t=new URL("assets/light-bold_blur.0e070ff9.png",self.location).href,n=new URL("assets/black-bold-1.d80951c5.png",self.location).href,i=new URL("assets/black-bold-1_blur.70b2a095.png",self.location).href,r=new URL("assets/black-bold-2.ff6362ad.png",self.location).href,o=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA+CAYAAACbQR1vAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAAXNSR0IArs4c6QAADYBJREFUaEPtmmuMHFV2x09V3Vv3VlVP9zw9L9tjGxsTa1mSdZBXICcDrAgOmNhIkwSQFxO/kNB+Q0T51nzmW/wlNo8ERJQF1qsNhA0hu5G1u3k4K2eIs2ZmGHv8mLG7x93T1Y963Xrd6JRnyCJF0Uru7o2FW2r5y8gz93fP+Z//Oecq8BX/KF/x88MdAHci4CtO4E4KfMUD4I4IdiMFlKmpKRUAtIWFBcI511zX1Xp7eyGfzydRFIW7du2KisVi+uuIxo4AkFIqr7zyCvU8j9Xr9Zxt2/lGo9HrOE7B9/2eOI4ZpVQpFAqOaZpLuq5fJoTU33///aTbENoK4L333tMKhQIPw7B3cXFxZHFxcXxpaWlDpVIZt2172HXdfgSQpikCAMuyWrlcbppz/kNFUT795JNP3NsSQLFYVJ944gleqVTWRVG0pdVq7SiXy/csLCxsXri0MFYul/vqdj3n+T6LoohIKVWm62BaVmiZ5nnG2Duapv3gzJkz1wGgq6lwyxGAh/noo48KQojtKyv2Lsdp/nYcx/c4jjO2sLBQmJubY6VSSWs5jiKEgDRJQFEUwAgwDEOaplnmnP+AEPKXQohzFy5cEN2MglsG8Pbbb1tRFH29Wq3uLZVKDzeazS2U0gIhGi2Xysr8/DyUy2XwPA/CKMoAgKIA0TRgnINpmp7B+T/ruv6aYRj/+Omnn9ZvGwAodsePHx+sVCqPX79+/flr167tdFzX7O/vU/r6+qDZaMKlS5cyAI7rQhiGkCQJSClBVVXQMQ0MIzEta47p+luEkHdnZmYWu5kGtxoByksvvTRULpf3l8vlozXb/nqaJGRwcBDwGwQBLC4tQblUgpbjQCgExHEMqZQ304AQ4JgGlrXMOT/Fdf0NwzB+cfbs2ahbUXCrAGDfvn29zWZzj+u6LwRBsEtKyfL5PAwMDGQ3vby8nEVAs9mEYA1AmmYANEwDxjAKWoZh/BOl9ATn/Cfnzp3rWjW4ZQB79+41a7Xa78Zx/IIQ4pEkTS2Dc+jt7QNCNLBtGyqVCrRarS+lQHbD/6MFIWdsWtf11y3L+tvp6ekqAMhuRMEtA5iamtKr1epvhWF4JAiCP4iiaJAQgi4POOcQ+j60bBu8IIAgjkGEIcRJkokh6gF+CKUpY+wSZ+yvNU17Z2Zm5mK3dKAdADTf97H2Hwh8/9lUiE1MVVXDssAoFIBKCaLRgIbvQ10IcDwPsBxGcXwTgJQ3U4HzKmfsA0LI66qqnv3ss8/C2yICMJD3798/VK/V9mlCHO4Lw9/sVYAGnIOPaUAp+M0mVOt1qHkeuFgOMQrWAGCTcFMLPM75TymlJ+M4/tGFCxeatwsAmJyczPVo2mS/EMe2RNFDgzK1rmsELuZyEBgGBL4PK7UaNB0nE8IMQBTdLIkAoN40RjHn/Dzl/A1VylNzc3OlbujALacA3hLqgJUk9w143uER19k3IMJ1FUWB84YBtmVBlCSZGDYajaw0IoA1T/CFGBIiOedLnLF3KaV/tW7durnTp0/HnY6CtgDAXiBoNDY5i4vPatXqgWHPvYuCol7UdSjlchCpanZ4u14HHzUgDCH6JVOEh9TQE3BeZ7r+MSHkpOu6/7a0tOTfFgBQB4rF4sDC/PyTwfLykdFW8xtjaaovUwqXrRwIXQfP88Gu2+CupgECwGqw5gxXdUAwXT+j6/pJQsjfnz9/vna7AIBXX33Vmp2d3W2XSsd66/Yjd4VRj080mDdMcA0TRBxB3bah2WqBCAKIoij7Zs4wTdesccI5/5wx9paqqt/thi1uSwrgLZ04cYKePXv23hul0iHDtp/aGgTDTFWVec5gxbQAkxnToI5pEASZCGYQ4hjkqjMkhEjG2DJj7BSl9E3TNP+r07a4bQBQBy6XL2+sXr3xtNZoPLdVBNuGFFW9QiksWTlICAHHdTIAa41RBgEjYK1BwnKo6y3OeddscdsAYBTs379/wHGc3we3dXSLiO7frCisSghcNC0QnGUVAAGgLUYzhOGPAFAP8F/sDzhjoWVZ04yx1znnH5w7d67SyXLYVgDYF3ie9wAIcWxUiEe3S5kPNRXmuAEtw8hEDw/vuu6XyqHv+xkQRVURQGpaVmaLKaVoixcAoGOzwrYCmJycJKOjozsatdqf5BxnapsQo6aqKJ/rDKqWBVLTAA+7BgG1AA+eiWIc3zREuo4QqpzzDwkhr8Vx/B+dnBK1FQAOSF588cX1pWvX/kjWas9vDoLtwyC1q5TCopWDVNezm0cxRAgIAw0RukFsi3FOiFGgKIqnAPyMEHIiCIKO2uK2AkAdeOaZZ/pqtdpjstU6uiEU37xLAl8hGlw0TAgYy6wwzgYcx8kAoA7g4YeHh6Gvvz+rDq7nxYHvn4/j+E0hxPc6aYvbDmBycpIDwDdl4B8bi5PH7pGyN9E0mGMM6oYBYRRDs9m4qQOrQojzg4mJCRgZGclSol6vy5brLgVB8G4YBB21xZ0AQFgUbU/S9GBPHP/x9jQd70E/QCmUEQAAtJrNLwYkGAFog8fHx2H9+HjmDDFFXNet+77/sRDiZKPR6JgtbjsACaA89/DDY7YQU2oUPb8pTXaMgkIWCYHLCICQ7PbrjUbWFyAA/AwODcHGjRuzaTG6Rd/zRBAEZxBAmqYds8VtB4CH+dNvfatwOQge9cLw2EiaPLAZwKirGnzOOXiMZc0QdodoiNaaokKhABsnJiCXy2X9gud5ie/782EYvhWG4d90yhZ3BMCf79nDfu7799tCHO2Jose3S9kvVRVmdR1sw8jaYxRCnBRnhiiKsh3Bhg0bYGCgH3w/QJGUQojlUIjvp2n6BqW0I7a4IwCmpqY0UqlsqwjxnBVFT98t0429iqpcoBSucw6xqmZpkJVCnA+gCVIUGBkdhZHh4SwtsEpEUeQIIX4cx/EJRVE6Mi3uCABsj39v9+4RP46fYnF8aFua3rtBAXJNI7CAg1Ick60aIvQF+MXGqH+gH9av35DtCxCAECIKw3A6iqLXAKAjtrhTAODBBx/sUdP0ESVJXticJLu3AZgtDdOAgcNYtiZzWi3wfD+DgV/TNGHTpk1QyOez2aHveWkYhpdFFL0Th2FHbHHHAOzYsUMfGhramQpxZDiOn/wNmQ5oqAOEQgXTIE2zFEAtwL0hgsCFKQLAkogd4qpZWhFCfBCG4etBEJxtty3uGADUAdd17wqD4IDpec/eHUUTfYqiXtQ0uIqWWMrsgGs6gHmPvcDo6Chs3boVN8dZOWzU657ruj9DHaCU/ujMmTNtnRZ3DADqwOHDh9fVarV9ca12eIPr3rc+Tel1VYXPKYWA0qwBwtvHqTECwC8efGx8HHKWlQlls9mMhRDnpZRvapr2venp6bZOizsJAIrFYu7KlSuTTqn0wrp6fXJzHFk1RYHPqA6eZWWND3qBRr2e5TyKITpBbIoIJZDECS5SpUbINapp2bR4ZmZmFiAbMLXl02kA+o0bN+5LlpaODNn2vrEgGKpKCf9JCDRME6SiZLa3VqtlqbBWDRIckWEIra7QDcNomIbxMWMMp8X/2s5pcacBqO7KymZlefmZXKXybeo4W64lsTqPN68zwIPiwdEWe6775ZXZ6sIke0NgmsIwjH9HAIyxH7ZzWtxRAHiJf/ad7ww6y8t7w0rlSLPZ+EYljPSmqgLoehYBeHAUO8z3bGe4tjH68huCxDTNedMw8BHFd2dnZ6+2a3naaQBw4MABK2g0dtu2fazVaj3iRVEPrIY27gIw7DEKsCKspQCOzvBtwRePKDjHt0Q3LMs6xTlvqy3uOICdO3fSQqFwbxiGh3zff0oIMYwdo05pVvejKAbXdTIfgLe/9oYID4/PaPCNAWMcq0LLsqwfG4ZxwjTNn3z44YdeO1Sw4wAwlfc99tjGIE2fbrnuc47jbIvjWMXctiwreyeEt41jMTRK+EFtwLU5KqGqqNmG2bKswDLNfzFN8y8YY/9w/PjxtviBbgCAQ4cO9a/cuPG43WwedRznfkVVWX9fXzYBwrdEWPvxUQXeOnoBTIW1OUEWCZoqKaEOpfS0pmknAeB0sVh0bpcIAByXh2H4QBRHx3SqPzo4OJhfv359ZnnxzTCmAq7H0APgkBRTYfUlmVQUJVFV1UmSZCFJkr8Lw/BUvV6fLRaLbXlA0ZUIwHH5wEB+Rz4/cHBwcPAPx8bGxvr7+xW8eRTCtcOvCh8eOlVVNVRU1VEVZRkA5qWUPxdC/FQI8YuDBw82FEVpyxuirgDAcvjyyy+PDg0P7S30FL6t6/p9cRwbq2EuVVVNNU1LdF0XlFKXEGJrmlZWVfWyqqpzUsoZKeU8AFyfnp522/myvFsAcHlq5nK5r/m+/2Sr1fqdRqMxHMexQgiJOOeuYZoN0zRXLNMsU0qXCCFXpZSLiqKUGGM1wzC8hx56CDdEbbn5Nf3oGgBcnk5MTORt2767Wq1+rd6sr4vDWOWcB7lcrmn2mHYhV1jJ5/O1QqFgSylbjDF/z549EaZEOwTvf/s/ugYAfzlCAABeLpdzruvyJEkwAuKhoSHR09MTTkxMhFeuXMFGJ21nmP9f8LoK4Jf+EAUFDz9Y5lY/bQ3tXzVifl0AftW/r+M/dwdAxxH/P/8F/w1KRhi3OyJ4MwAAAABJRU5ErkJggg==",self.location).href,a=Ct(),c=Ct();let l=null,h=null;function u(){h&&(h.kill(),h=null),l&&(l.kill(),l=null)}function d(){u(),l=nn.timeline().to(".mask",{clipPath:()=>`circle(${200}vh at ${50}vw ${50}vh)`,animationDuration:500}).to(".icon-image",{opacity:0}).to(".imgs",{opacity:100}).to(".mask",{clipPath:"none"}),h=pn.create({trigger:a.value,end:"bottom center",pin:!0,scrub:!0,animation:l,invalidateOnRefresh:!0})}async function f(){await Ml(),a.value.style.clipPath=`circle(${40}vw at ${50}vw ${50}vh)`}return Ji(()=>{f().then(()=>{d()})}),Ki(()=>{u()}),(g,x)=>(At(),Nt("div",Q0,[pe("div",{ref_key:"mask",ref:a,class:"relative mask bg-white transition-[clip-path] ease-in-out duration-500"},[$0,pe("div",{ref_key:"iconImage",ref:c,class:"icon-image absolute top-[35vh] xs:top-[37.5vh] sm:top-[25vh] xl:top-[25vh] left-[10vw] w-full h-full transition-opacity ease-in-out duration-500"},tx,512),pe("div",nx,[ot(ke(ai),{class:"img-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vw]",src:ke(e),"src-placeholder":ke(t)},null,8,["src","src-placeholder"]),ot(ke(ai),{class:"img-2 absolute top-0 left-0 w-[45vw]",src:ke(n),"src-placeholder":ke(i)},null,8,["src","src-placeholder"]),ot(ke(ai),{class:"img-3 absolute -bottom-[10vh] left-[50vw] w-[90vw]",src:ke(r),"src-placeholder":ke(o)},null,8,["src","src-placeholder"])])],512),pe("div",ix,[ot(Nr,{class:"text-black text-[8.5vw] font-extrabold my-1",name:"Black Edition",to:"/editions"}),rx,ot(Nr,{class:"text-black text-[8.5vw] font-extrabold my-1",name:"Light Edition",to:{name:"EditionsView",hash:"#light-edition"}})])]))}};var ox=so(sx,[["__scopeId","data-v-191c1a40"]]);const wc=s=>(yl("data-v-5276bdc2"),s=s(),wl(),s),ax={class:"bg-custom-red-100 relative overflow-hidden"},lx=wc(()=>pe("div",{class:"w-full min-h-screen relative"},null,-1)),cx=["src"],hx={class:"relative w-full min-h-screen mt-[30vh]"},ux=["src"],dx={class:"nav-bar w-full h-[40vw] py-[25vh] px-[5vw] flex flex-col bg-white"},fx=wc(()=>pe("div",{class:"border-b-2 w-1/2 border-black"},null,-1)),px={setup(s){const e=new URL("assets/IconBoldOLetter.30ee9bc0.png",self.location).href,t=new URL("assets/extraordnary-01.a890b86c.svg",self.location).href,n=new URL("assets/light-bold.7fd9d90c.png",self.location).href,i=new URL("assets/light-bold_blur.0e070ff9.png",self.location).href,r=new URL("assets/black-bold-1.d80951c5.png",self.location).href,o=new URL("assets/black-bold-1_blur.70b2a095.png",self.location).href,a=new URL("assets/black-bold-2.ff6362ad.png",self.location).href,c=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA+CAYAAACbQR1vAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAAXNSR0IArs4c6QAADYBJREFUaEPtmmuMHFV2x09V3Vv3VlVP9zw9L9tjGxsTa1mSdZBXICcDrAgOmNhIkwSQFxO/kNB+Q0T51nzmW/wlNo8ERJQF1qsNhA0hu5G1u3k4K2eIs2ZmGHv8mLG7x93T1Y963Xrd6JRnyCJF0Uru7o2FW2r5y8gz93fP+Z//Oecq8BX/KF/x88MdAHci4CtO4E4KfMUD4I4IdiMFlKmpKRUAtIWFBcI511zX1Xp7eyGfzydRFIW7du2KisVi+uuIxo4AkFIqr7zyCvU8j9Xr9Zxt2/lGo9HrOE7B9/2eOI4ZpVQpFAqOaZpLuq5fJoTU33///aTbENoK4L333tMKhQIPw7B3cXFxZHFxcXxpaWlDpVIZt2172HXdfgSQpikCAMuyWrlcbppz/kNFUT795JNP3NsSQLFYVJ944gleqVTWRVG0pdVq7SiXy/csLCxsXri0MFYul/vqdj3n+T6LoohIKVWm62BaVmiZ5nnG2Duapv3gzJkz1wGgq6lwyxGAh/noo48KQojtKyv2Lsdp/nYcx/c4jjO2sLBQmJubY6VSSWs5jiKEgDRJQFEUwAgwDEOaplnmnP+AEPKXQohzFy5cEN2MglsG8Pbbb1tRFH29Wq3uLZVKDzeazS2U0gIhGi2Xysr8/DyUy2XwPA/CKMoAgKIA0TRgnINpmp7B+T/ruv6aYRj/+Omnn9ZvGwAodsePHx+sVCqPX79+/flr167tdFzX7O/vU/r6+qDZaMKlS5cyAI7rQhiGkCQJSClBVVXQMQ0MIzEta47p+luEkHdnZmYWu5kGtxoByksvvTRULpf3l8vlozXb/nqaJGRwcBDwGwQBLC4tQblUgpbjQCgExHEMqZQ304AQ4JgGlrXMOT/Fdf0NwzB+cfbs2ahbUXCrAGDfvn29zWZzj+u6LwRBsEtKyfL5PAwMDGQ3vby8nEVAs9mEYA1AmmYANEwDxjAKWoZh/BOl9ATn/Cfnzp3rWjW4ZQB79+41a7Xa78Zx/IIQ4pEkTS2Dc+jt7QNCNLBtGyqVCrRarS+lQHbD/6MFIWdsWtf11y3L+tvp6ekqAMhuRMEtA5iamtKr1epvhWF4JAiCP4iiaJAQgi4POOcQ+j60bBu8IIAgjkGEIcRJkokh6gF+CKUpY+wSZ+yvNU17Z2Zm5mK3dKAdADTf97H2Hwh8/9lUiE1MVVXDssAoFIBKCaLRgIbvQ10IcDwPsBxGcXwTgJQ3U4HzKmfsA0LI66qqnv3ss8/C2yICMJD3798/VK/V9mlCHO4Lw9/sVYAGnIOPaUAp+M0mVOt1qHkeuFgOMQrWAGCTcFMLPM75TymlJ+M4/tGFCxeatwsAmJyczPVo2mS/EMe2RNFDgzK1rmsELuZyEBgGBL4PK7UaNB0nE8IMQBTdLIkAoN40RjHn/Dzl/A1VylNzc3OlbujALacA3hLqgJUk9w143uER19k3IMJ1FUWB84YBtmVBlCSZGDYajaw0IoA1T/CFGBIiOedLnLF3KaV/tW7durnTp0/HnY6CtgDAXiBoNDY5i4vPatXqgWHPvYuCol7UdSjlchCpanZ4u14HHzUgDCH6JVOEh9TQE3BeZ7r+MSHkpOu6/7a0tOTfFgBQB4rF4sDC/PyTwfLykdFW8xtjaaovUwqXrRwIXQfP88Gu2+CupgECwGqw5gxXdUAwXT+j6/pJQsjfnz9/vna7AIBXX33Vmp2d3W2XSsd66/Yjd4VRj080mDdMcA0TRBxB3bah2WqBCAKIoij7Zs4wTdesccI5/5wx9paqqt/thi1uSwrgLZ04cYKePXv23hul0iHDtp/aGgTDTFWVec5gxbQAkxnToI5pEASZCGYQ4hjkqjMkhEjG2DJj7BSl9E3TNP+r07a4bQBQBy6XL2+sXr3xtNZoPLdVBNuGFFW9QiksWTlICAHHdTIAa41RBgEjYK1BwnKo6y3OeddscdsAYBTs379/wHGc3we3dXSLiO7frCisSghcNC0QnGUVAAGgLUYzhOGPAFAP8F/sDzhjoWVZ04yx1znnH5w7d67SyXLYVgDYF3ie9wAIcWxUiEe3S5kPNRXmuAEtw8hEDw/vuu6XyqHv+xkQRVURQGpaVmaLKaVoixcAoGOzwrYCmJycJKOjozsatdqf5BxnapsQo6aqKJ/rDKqWBVLTAA+7BgG1AA+eiWIc3zREuo4QqpzzDwkhr8Vx/B+dnBK1FQAOSF588cX1pWvX/kjWas9vDoLtwyC1q5TCopWDVNezm0cxRAgIAw0RukFsi3FOiFGgKIqnAPyMEHIiCIKO2uK2AkAdeOaZZ/pqtdpjstU6uiEU37xLAl8hGlw0TAgYy6wwzgYcx8kAoA7g4YeHh6Gvvz+rDq7nxYHvn4/j+E0hxPc6aYvbDmBycpIDwDdl4B8bi5PH7pGyN9E0mGMM6oYBYRRDs9m4qQOrQojzg4mJCRgZGclSol6vy5brLgVB8G4YBB21xZ0AQFgUbU/S9GBPHP/x9jQd70E/QCmUEQAAtJrNLwYkGAFog8fHx2H9+HjmDDFFXNet+77/sRDiZKPR6JgtbjsACaA89/DDY7YQU2oUPb8pTXaMgkIWCYHLCICQ7PbrjUbWFyAA/AwODcHGjRuzaTG6Rd/zRBAEZxBAmqYds8VtB4CH+dNvfatwOQge9cLw2EiaPLAZwKirGnzOOXiMZc0QdodoiNaaokKhABsnJiCXy2X9gud5ie/782EYvhWG4d90yhZ3BMCf79nDfu7799tCHO2Jose3S9kvVRVmdR1sw8jaYxRCnBRnhiiKsh3Bhg0bYGCgH3w/QJGUQojlUIjvp2n6BqW0I7a4IwCmpqY0UqlsqwjxnBVFT98t0429iqpcoBSucw6xqmZpkJVCnA+gCVIUGBkdhZHh4SwtsEpEUeQIIX4cx/EJRVE6Mi3uCABsj39v9+4RP46fYnF8aFua3rtBAXJNI7CAg1Ick60aIvQF+MXGqH+gH9av35DtCxCAECIKw3A6iqLXAKAjtrhTAODBBx/sUdP0ESVJXticJLu3AZgtDdOAgcNYtiZzWi3wfD+DgV/TNGHTpk1QyOez2aHveWkYhpdFFL0Th2FHbHHHAOzYsUMfGhramQpxZDiOn/wNmQ5oqAOEQgXTIE2zFEAtwL0hgsCFKQLAkogd4qpZWhFCfBCG4etBEJxtty3uGADUAdd17wqD4IDpec/eHUUTfYqiXtQ0uIqWWMrsgGs6gHmPvcDo6Chs3boVN8dZOWzU657ruj9DHaCU/ujMmTNtnRZ3DADqwOHDh9fVarV9ca12eIPr3rc+Tel1VYXPKYWA0qwBwtvHqTECwC8efGx8HHKWlQlls9mMhRDnpZRvapr2venp6bZOizsJAIrFYu7KlSuTTqn0wrp6fXJzHFk1RYHPqA6eZWWND3qBRr2e5TyKITpBbIoIJZDECS5SpUbINapp2bR4ZmZmFiAbMLXl02kA+o0bN+5LlpaODNn2vrEgGKpKCf9JCDRME6SiZLa3VqtlqbBWDRIckWEIra7QDcNomIbxMWMMp8X/2s5pcacBqO7KymZlefmZXKXybeo4W64lsTqPN68zwIPiwdEWe6775ZXZ6sIke0NgmsIwjH9HAIyxH7ZzWtxRAHiJf/ad7ww6y8t7w0rlSLPZ+EYljPSmqgLoehYBeHAUO8z3bGe4tjH68huCxDTNedMw8BHFd2dnZ6+2a3naaQBw4MABK2g0dtu2fazVaj3iRVEPrIY27gIw7DEKsCKspQCOzvBtwRePKDjHt0Q3LMs6xTlvqy3uOICdO3fSQqFwbxiGh3zff0oIMYwdo05pVvejKAbXdTIfgLe/9oYID4/PaPCNAWMcq0LLsqwfG4ZxwjTNn3z44YdeO1Sw4wAwlfc99tjGIE2fbrnuc47jbIvjWMXctiwreyeEt41jMTRK+EFtwLU5KqGqqNmG2bKswDLNfzFN8y8YY/9w/PjxtviBbgCAQ4cO9a/cuPG43WwedRznfkVVWX9fXzYBwrdEWPvxUQXeOnoBTIW1OUEWCZoqKaEOpfS0pmknAeB0sVh0bpcIAByXh2H4QBRHx3SqPzo4OJhfv359ZnnxzTCmAq7H0APgkBRTYfUlmVQUJVFV1UmSZCFJkr8Lw/BUvV6fLRaLbXlA0ZUIwHH5wEB+Rz4/cHBwcPAPx8bGxvr7+xW8eRTCtcOvCh8eOlVVNVRU1VEVZRkA5qWUPxdC/FQI8YuDBw82FEVpyxuirgDAcvjyyy+PDg0P7S30FL6t6/p9cRwbq2EuVVVNNU1LdF0XlFKXEGJrmlZWVfWyqqpzUsoZKeU8AFyfnp522/myvFsAcHlq5nK5r/m+/2Sr1fqdRqMxHMexQgiJOOeuYZoN0zRXLNMsU0qXCCFXpZSLiqKUGGM1wzC8hx56CDdEbbn5Nf3oGgBcnk5MTORt2767Wq1+rd6sr4vDWOWcB7lcrmn2mHYhV1jJ5/O1QqFgSylbjDF/z549EaZEOwTvf/s/ugYAfzlCAABeLpdzruvyJEkwAuKhoSHR09MTTkxMhFeuXMFGJ21nmP9f8LoK4Jf+EAUFDz9Y5lY/bQ3tXzVifl0AftW/r+M/dwdAxxH/P/8F/w1KRhi3OyJ4MwAAAABJRU5ErkJggg==",self.location).href,l=Ct(),h=Ct(),u=Pt("scrollWrapper"),d=Pt("eventBus");let f=null,g=null,x=null,_=null,m=null,p=null,T=null,M=null;function w(){f&&(f.kill(),f=null),g&&(g.kill(),g=null),T&&(T.kill(),T=null),M&&(M.kill(),M=null),_&&(_.kill(),_=null),x&&(x.kill(),x=null)}function L(){g.refresh(),x.refresh()}function R(){w(),f=nn.timeline().to(".mask",{clipPath:()=>`circle(${15}vw at ${45}vw ${25}vw)`}),_=nn.timeline().to(".mask",{clipPath:()=>`circle(${55}vw at ${35}vw ${220}vh)`}),m=nn.timeline().to(".icon-image",{transform:()=>`translateX(-${30}vw)`}),p=nn.timeline().to(".icon-image",{opacity:()=>0}),g=pn.create({trigger:l.value,start:"top top",end:"bottom center",pin:!0,scrub:!0,scroller:u.value,animation:f,invalidateOnRefresh:!0}),T=pn.create({trigger:l.value,start:"top top",end:"bottom center",scrub:!0,scroller:u.value,animation:m,invalidateOnRefresh:!0}),M=pn.create({trigger:l.value,start:"center 100%",end:"center 90%",scrub:!0,scroller:u.value,animation:p,invalidateOnRefresh:!0}),x=pn.create({trigger:l.value,start:"center 100%",end:"bottom center",pin:!1,scrub:!0,scroller:u.value,animation:_,invalidateOnRefresh:!0})}async function j(){await Ml();const V=75,v=25;h.value.style.top=`${v-15}vw`,h.value.style.left=`${V-15}vw`,l.value.style.clipPath=`circle(${15}vw at ${V}vw ${v}vw)`}function re(){j(),L()}return Ji(()=>{j().then(()=>{R(),d.on("wrapper-resize",re),re()})}),Ki(()=>{w(),d.off("wrapper-resize",re)}),(V,v)=>(At(),Nt("div",ax,[pe("div",{ref_key:"mask",ref:l,class:"relative mask bg-white"},[lx,pe("div",{ref_key:"iconImage",ref:h,class:"icon-image absolute top-0 right-0 w-[30vw] h-[30vw]"},[pe("img",{class:"object-cover w-[30vw] h-[30vw]",src:ke(e)},null,8,cx)],512),pe("div",hx,[pe("img",{class:"absolute bottom-0 left-0",src:ke(t)},null,8,ux),ot(ke(ai),{class:"img-1 absolute -bottom-[10vw] left-[12vw] z-15 w-[50vw]",src:ke(n),"src-placeholder":ke(i)},null,8,["src","src-placeholder"]),ot(ke(ai),{class:"img-2 absolute bottom-[15vw] left-0 w-[30vw]",src:ke(r),"src-placeholder":ke(o)},null,8,["src","src-placeholder"]),ot(ke(ai),{class:"img-3 absolute -bottom-[35vw] left-[35vw] w-[60vw]",src:ke(a),"src-placeholder":ke(c)},null,8,["src","src-placeholder"])])],512),pe("div",dx,[ot(Nr,{class:"text-black text-[5.5vw] font-extrabold my-1",name:"Black Edition",to:"/editions"}),fx,ot(Nr,{class:"text-black text-[5.5vw] font-extrabold my-1",name:"Light Edition",to:{name:"EditionsView",hash:"#light-edition"}})])]))}};var mx=so(px,[["__scopeId","data-v-5276bdc2"]]);const wx={setup(s){const e=bl(),t=Ct(),n=Ct(),i=Ct();return Oi("main",t),Oi("horizontalScroll2",n),Oi("scalingCircle",i),(r,o)=>(At(),Nt("div",null,[ot(G0,{ref_key:"main",ref:t},null,512),ot(J0,{ref_key:"horizontalScroll2",ref:n},null,512),ke(e)?(At(),No(ox,{key:1})):(At(),No(mx,{key:0,ref_key:"scalingCircle",ref:i},null,512)),ot(Fc)]))}};export{wx as default};
