import{o as l,c as a,a as s,r as v,i as H,u as W,w as P,b as A,d as m,e as T,F as w,f as y,n as M,g,t as Z,h as p,j as z,k as I,m as F,l as q,p as L,q as S,S as _,s as j,v as U,x as G,y as K,z as b,R as Q,A as J,B as X,C as Y}from"./vendor.31b2950f.js";const e1=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const C of document.querySelectorAll('link[rel="modulepreload"]'))o(C);new MutationObserver(C=>{for(const n of C)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(C){const n={};return C.integrity&&(n.integrity=C.integrity),C.referrerpolicy&&(n.referrerPolicy=C.referrerpolicy),C.crossorigin==="use-credentials"?n.credentials="include":C.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(C){if(C.ep)return;C.ep=!0;const n=r(C);fetch(C.href,n)}};e1();const C1="modulepreload",R={},t1="",h=function(t,r){return!r||r.length===0?t():Promise.all(r.map(o=>{if(o=`${t1}${o}`,o in R)return;R[o]=!0;const C=o.endsWith(".css"),n=C?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${n}`))return;const c=document.createElement("link");if(c.rel=C?"stylesheet":C1,C||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),C)return new Promise((d,u)=>{c.addEventListener("load",d),c.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())};var O=(e,t)=>{const r=e.__vccOpts||e;for(const[o,C]of t)r[o]=C;return r};const o1={},n1={width:"61",height:"22",viewBox:"0 0 61 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s1=s("path",{d:"M42.0664 0.542847H37.8613V21.4571H42.0664V0.542847Z",fill:"white"},null,-1),r1=s("path",{d:"M8.41547 4.42967C6.9373 4.42857 5.48497 4.82189 4.20503 5.56995V0.542847H0V21.4571H4.20503V20.3169C5.323 20.9658 6.57339 21.3463 7.85975 21.429C9.1461 21.5117 10.434 21.2943 11.6242 20.7937C12.8144 20.2931 13.875 19.5225 14.7242 18.5415C15.5734 17.5606 16.1885 16.3954 16.5221 15.1358C16.8556 13.8762 16.8988 12.556 16.6481 11.2769C16.3975 9.99775 15.8598 8.79399 15.0764 7.75842C14.2931 6.72286 13.2851 5.88316 12.1302 5.30412C10.9754 4.72507 9.70442 4.42214 8.41547 4.41871V4.42967ZM8.41547 17.1975C7.5838 17.1975 6.7708 16.948 6.07929 16.4806C5.38777 16.0131 4.8488 15.3487 4.53054 14.5714C4.21227 13.794 4.12899 12.9387 4.29125 12.1135C4.4535 11.2882 4.85399 10.5302 5.44207 9.93528C6.03016 9.34033 6.77942 8.93516 7.59511 8.77102C8.41081 8.60687 9.2563 8.69112 10.0247 9.0131C10.793 9.33509 11.4498 9.88035 11.9118 10.5799C12.3739 11.2795 12.6205 12.102 12.6205 12.9434C12.6205 13.5021 12.5117 14.0552 12.3004 14.5714C12.0891 15.0875 11.7794 15.5565 11.3889 15.9515C10.9984 16.3466 10.5348 16.6599 10.0247 16.8737C9.51449 17.0875 8.96769 17.1975 8.41547 17.1975Z",fill:"white"},null,-1),i1=s("path",{d:"M56.795 0.542847V5.56995C55.5157 4.82285 54.0645 4.42958 52.5873 4.42967C51.1102 4.42976 49.659 4.82321 48.3798 5.57046C47.1006 6.31772 46.0383 7.39247 45.2997 8.68668C44.5612 9.9809 44.1724 11.449 44.1724 12.9434C44.1724 14.4378 44.5612 15.9059 45.2997 17.2001C46.0383 18.4943 47.1006 19.5691 48.3798 20.3163C49.659 21.0636 51.1102 21.457 52.5873 21.4571C54.0645 21.4572 55.5157 21.064 56.795 20.3169V21.4571H61V0.542847H56.795ZM52.59 17.1975C51.7583 17.1975 50.9453 16.948 50.2538 16.4806C49.5623 16.0131 49.0233 15.3487 48.705 14.5714C48.3868 13.794 48.3035 12.9387 48.4657 12.1135C48.628 11.2882 49.0285 10.5302 49.6166 9.93528C50.2046 9.34033 50.9539 8.93516 51.7696 8.77102C52.5853 8.60687 53.4308 8.69112 54.1992 9.0131C54.9675 9.33509 55.6243 9.88035 56.0863 10.5799C56.5484 11.2795 56.795 12.102 56.795 12.9434C56.795 13.5021 56.6862 14.0552 56.4749 14.5714C56.2636 15.0875 55.9538 15.5565 55.5634 15.9515C55.1729 16.3466 54.7093 16.6599 54.1992 16.8737C53.689 17.0875 53.1422 17.1975 52.59 17.1975Z",fill:"white"},null,-1),l1=s("path",{d:"M27.3437 6.73766C26.1291 6.73766 24.9419 7.10208 23.9321 7.78483C22.9224 8.46757 22.1355 9.43796 21.6709 10.5732C21.2064 11.7085 21.0851 12.9577 21.3225 14.1627C21.5598 15.3677 22.1451 16.4744 23.0043 17.3429C23.8634 18.2113 24.9579 18.8024 26.1492 19.0415C27.3405 19.2805 28.5752 19.1567 29.6969 18.6858C30.8187 18.2148 31.7772 17.4178 32.4511 16.3957C33.1251 15.3735 33.4843 14.1721 33.4832 12.9434C33.4803 11.2975 32.8324 9.71989 31.6815 8.55655C30.5306 7.39322 28.9706 6.73911 27.3437 6.73766ZM27.3437 17.203C26.5109 17.203 25.6969 16.9532 25.0045 16.4852C24.3121 16.0171 23.7724 15.3518 23.4537 14.5735C23.135 13.7952 23.0516 12.9387 23.2141 12.1124C23.3766 11.2861 23.7776 10.5271 24.3664 9.93142C24.9553 9.33571 25.7055 8.93002 26.5222 8.76566C27.339 8.6013 28.1856 8.68566 28.9549 9.00806C29.7243 9.33046 30.3819 9.87642 30.8445 10.5769C31.3072 11.2774 31.5541 12.101 31.5541 12.9434C31.5541 13.5028 31.4452 14.0567 31.2336 14.5735C31.022 15.0903 30.7119 15.5599 30.3209 15.9554C29.9299 16.351 29.4658 16.6647 28.9549 16.8788C28.4441 17.0928 27.8966 17.203 27.3437 17.203ZM27.3437 6.73766C26.1291 6.73766 24.9419 7.10208 23.9321 7.78483C22.9224 8.46757 22.1355 9.43796 21.6709 10.5732C21.2064 11.7085 21.0851 12.9577 21.3225 14.1627C21.5598 15.3677 22.1451 16.4744 23.0043 17.3429C23.8634 18.2113 24.9579 18.8024 26.1492 19.0415C27.3405 19.2805 28.5752 19.1567 29.6969 18.6858C30.8187 18.2148 31.7772 17.4178 32.4511 16.3957C33.1251 15.3735 33.4843 14.1721 33.4832 12.9434C33.4803 11.2975 32.8324 9.71989 31.6815 8.55655C30.5306 7.39322 28.9706 6.73911 27.3437 6.73766ZM27.3437 17.203C26.5109 17.203 25.6969 16.9532 25.0045 16.4852C24.3121 16.0171 23.7724 15.3518 23.4537 14.5735C23.135 13.7952 23.0516 12.9387 23.2141 12.1124C23.3766 11.2861 23.7776 10.5271 24.3664 9.93142C24.9553 9.33571 25.7055 8.93002 26.5222 8.76566C27.339 8.6013 28.1856 8.68566 28.9549 9.00806C29.7243 9.33046 30.3819 9.87642 30.8445 10.5769C31.3072 11.2774 31.5541 12.101 31.5541 12.9434C31.5541 13.5028 31.4452 14.0567 31.2336 14.5735C31.022 15.0903 30.7119 15.5599 30.3209 15.9554C29.9299 16.351 29.4658 16.6647 28.9549 16.8788C28.4441 17.0928 27.8966 17.203 27.3437 17.203ZM27.3437 6.73766C26.1291 6.73766 24.9419 7.10208 23.9321 7.78483C22.9224 8.46757 22.1355 9.43796 21.6709 10.5732C21.2064 11.7085 21.0851 12.9577 21.3225 14.1627C21.5598 15.3677 22.1451 16.4744 23.0043 17.3429C23.8634 18.2113 24.9579 18.8024 26.1492 19.0415C27.3405 19.2805 28.5752 19.1567 29.6969 18.6858C30.8187 18.2148 31.7772 17.4178 32.4511 16.3957C33.1251 15.3735 33.4843 14.1721 33.4832 12.9434C33.4803 11.2975 32.8324 9.71989 31.6815 8.55655C30.5306 7.39322 28.9706 6.73911 27.3437 6.73766ZM27.3437 17.203C26.5109 17.203 25.6969 16.9532 25.0045 16.4852C24.3121 16.0171 23.7724 15.3518 23.4537 14.5735C23.135 13.7952 23.0516 12.9387 23.2141 12.1124C23.3766 11.2861 23.7776 10.5271 24.3664 9.93142C24.9553 9.33571 25.7055 8.93002 26.5222 8.76566C27.339 8.6013 28.1856 8.68566 28.9549 9.00806C29.7243 9.33046 30.3819 9.87642 30.8445 10.5769C31.3072 11.2774 31.5541 12.101 31.5541 12.9434C31.5541 13.5028 31.4452 14.0567 31.2336 14.5735C31.022 15.0903 30.7119 15.5599 30.3209 15.9554C29.9299 16.351 29.4658 16.6647 28.9549 16.8788C28.4441 17.0928 27.8966 17.203 27.3437 17.203ZM27.3437 6.73766C26.1291 6.73766 24.9419 7.10208 23.9321 7.78483C22.9224 8.46757 22.1355 9.43796 21.6709 10.5732C21.2064 11.7085 21.0851 12.9577 21.3225 14.1627C21.5598 15.3677 22.1451 16.4744 23.0043 17.3429C23.8634 18.2113 24.9579 18.8024 26.1492 19.0415C27.3405 19.2805 28.5752 19.1567 29.6969 18.6858C30.8187 18.2148 31.7772 17.4178 32.4511 16.3957C33.1251 15.3735 33.4843 14.1721 33.4832 12.9434C33.4803 11.2975 32.8324 9.71989 31.6815 8.55655C30.5306 7.39322 28.9706 6.73911 27.3437 6.73766ZM27.3437 17.203C26.5109 17.203 25.6969 16.9532 25.0045 16.4852C24.3121 16.0171 23.7724 15.3518 23.4537 14.5735C23.135 13.7952 23.0516 12.9387 23.2141 12.1124C23.3766 11.2861 23.7776 10.5271 24.3664 9.93142C24.9553 9.33571 25.7055 8.93002 26.5222 8.76566C27.339 8.6013 28.1856 8.68566 28.9549 9.00806C29.7243 9.33046 30.3819 9.87642 30.8445 10.5769C31.3072 11.2774 31.5541 12.101 31.5541 12.9434C31.5541 13.5028 31.4452 14.0567 31.2336 14.5735C31.022 15.0903 30.7119 15.5599 30.3209 15.9554C29.9299 16.351 29.4658 16.6647 28.9549 16.8788C28.4441 17.0928 27.8966 17.203 27.3437 17.203ZM27.3437 6.73766C26.1291 6.73766 24.9419 7.10208 23.9321 7.78483C22.9224 8.46757 22.1355 9.43796 21.6709 10.5732C21.2064 11.7085 21.0851 12.9577 21.3225 14.1627C21.5598 15.3677 22.1451 16.4744 23.0043 17.3429C23.8634 18.2113 24.9579 18.8024 26.1492 19.0415C27.3405 19.2805 28.5752 19.1567 29.6969 18.6858C30.8187 18.2148 31.7772 17.4178 32.4511 16.3957C33.1251 15.3735 33.4843 14.1721 33.4832 12.9434C33.4803 11.2975 32.8324 9.71989 31.6815 8.55655C30.5306 7.39322 28.9706 6.73911 27.3437 6.73766ZM27.3437 17.203C26.5109 17.203 25.6969 16.9532 25.0045 16.4852C24.3121 16.0171 23.7724 15.3518 23.4537 14.5735C23.135 13.7952 23.0516 12.9387 23.2141 12.1124C23.3766 11.2861 23.7776 10.5271 24.3664 9.93142C24.9553 9.33571 25.7055 8.93002 26.5222 8.76566C27.339 8.6013 28.1856 8.68566 28.9549 9.00806C29.7243 9.33046 30.3819 9.87642 30.8445 10.5769C31.3072 11.2774 31.5541 12.101 31.5541 12.9434C31.5541 13.5028 31.4452 14.0567 31.2336 14.5735C31.022 15.0903 30.7119 15.5599 30.3209 15.9554C29.9299 16.351 29.4658 16.6647 28.9549 16.8788C28.4441 17.0928 27.8966 17.203 27.3437 17.203ZM27.3437 6.73766C26.1291 6.73766 24.9419 7.10208 23.9321 7.78483C22.9224 8.46757 22.1355 9.43796 21.6709 10.5732C21.2064 11.7085 21.0851 12.9577 21.3225 14.1627C21.5598 15.3677 22.1451 16.4744 23.0043 17.3429C23.8634 18.2113 24.9579 18.8024 26.1492 19.0415C27.3405 19.2805 28.5752 19.1567 29.6969 18.6858C30.8187 18.2148 31.7772 17.4178 32.4511 16.3957C33.1251 15.3735 33.4843 14.1721 33.4832 12.9434C33.4803 11.2975 32.8324 9.71989 31.6815 8.55655C30.5306 7.39322 28.9706 6.73911 27.3437 6.73766ZM27.3437 17.203C26.5109 17.203 25.6969 16.9532 25.0045 16.4852C24.3121 16.0171 23.7724 15.3518 23.4537 14.5735C23.135 13.7952 23.0516 12.9387 23.2141 12.1124C23.3766 11.2861 23.7776 10.5271 24.3664 9.93142C24.9553 9.33571 25.7055 8.93002 26.5222 8.76566C27.339 8.6013 28.1856 8.68566 28.9549 9.00806C29.7243 9.33046 30.3819 9.87642 30.8445 10.5769C31.3072 11.2774 31.5541 12.101 31.5541 12.9434C31.5541 13.5028 31.4452 14.0567 31.2336 14.5735C31.022 15.0903 30.7119 15.5599 30.3209 15.9554C29.9299 16.351 29.4658 16.6647 28.9549 16.8788C28.4441 17.0928 27.8966 17.203 27.3437 17.203ZM27.3437 6.73766C26.1291 6.73766 24.9419 7.10208 23.9321 7.78483C22.9224 8.46757 22.1355 9.43796 21.6709 10.5732C21.2064 11.7085 21.0851 12.9577 21.3225 14.1627C21.5598 15.3677 22.1451 16.4744 23.0043 17.3429C23.8634 18.2113 24.9579 18.8024 26.1492 19.0415C27.3405 19.2805 28.5752 19.1567 29.6969 18.6858C30.8187 18.2148 31.7772 17.4178 32.4511 16.3957C33.1251 15.3735 33.4843 14.1721 33.4832 12.9434C33.4803 11.2975 32.8324 9.71989 31.6815 8.55655C30.5306 7.39322 28.9706 6.73911 27.3437 6.73766ZM27.3437 17.203C26.5109 17.203 25.6969 16.9532 25.0045 16.4852C24.3121 16.0171 23.7724 15.3518 23.4537 14.5735C23.135 13.7952 23.0516 12.9387 23.2141 12.1124C23.3766 11.2861 23.7776 10.5271 24.3664 9.93142C24.9553 9.33571 25.7055 8.93002 26.5222 8.76566C27.339 8.6013 28.1856 8.68566 28.9549 9.00806C29.7243 9.33046 30.3819 9.87642 30.8445 10.5769C31.3072 11.2774 31.5541 12.101 31.5541 12.9434C31.5541 13.5028 31.4452 14.0567 31.2336 14.5735C31.022 15.0903 30.7119 15.5599 30.3209 15.9554C29.9299 16.351 29.4658 16.6647 28.9549 16.8788C28.4441 17.0928 27.8966 17.203 27.3437 17.203ZM27.3437 6.73766C26.1291 6.73766 24.9419 7.10208 23.9321 7.78483C22.9224 8.46757 22.1355 9.43796 21.6709 10.5732C21.2064 11.7085 21.0851 12.9577 21.3225 14.1627C21.5598 15.3677 22.1451 16.4744 23.0043 17.3429C23.8634 18.2113 24.9579 18.8024 26.1492 19.0415C27.3405 19.2805 28.5752 19.1567 29.6969 18.6858C30.8187 18.2148 31.7772 17.4178 32.4511 16.3957C33.1251 15.3735 33.4843 14.1721 33.4832 12.9434C33.4803 11.2975 32.8324 9.71989 31.6815 8.55655C30.5306 7.39322 28.9706 6.73911 27.3437 6.73766ZM27.3437 17.203C26.5109 17.203 25.6969 16.9532 25.0045 16.4852C24.3121 16.0171 23.7724 15.3518 23.4537 14.5735C23.135 13.7952 23.0516 12.9387 23.2141 12.1124C23.3766 11.2861 23.7776 10.5271 24.3664 9.93142C24.9553 9.33571 25.7055 8.93002 26.5222 8.76566C27.339 8.6013 28.1856 8.68566 28.9549 9.00806C29.7243 9.33046 30.3819 9.87642 30.8445 10.5769C31.3072 11.2774 31.5541 12.101 31.5541 12.9434C31.5541 13.5028 31.4452 14.0567 31.2336 14.5735C31.022 15.0903 30.7119 15.5599 30.3209 15.9554C29.9299 16.351 29.4658 16.6647 28.9549 16.8788C28.4441 17.0928 27.8966 17.203 27.3437 17.203ZM27.3437 6.73766C26.1291 6.73766 24.9419 7.10208 23.9321 7.78483C22.9224 8.46757 22.1355 9.43796 21.6709 10.5732C21.2064 11.7085 21.0851 12.9577 21.3225 14.1627C21.5598 15.3677 22.1451 16.4744 23.0043 17.3429C23.8634 18.2113 24.9579 18.8024 26.1492 19.0415C27.3405 19.2805 28.5752 19.1567 29.6969 18.6858C30.8187 18.2148 31.7772 17.4178 32.4511 16.3957C33.1251 15.3735 33.4843 14.1721 33.4832 12.9434C33.4803 11.2975 32.8324 9.71989 31.6815 8.55655C30.5306 7.39322 28.9706 6.73911 27.3437 6.73766ZM27.3437 17.203C26.5109 17.203 25.6969 16.9532 25.0045 16.4852C24.3121 16.0171 23.7724 15.3518 23.4537 14.5735C23.135 13.7952 23.0516 12.9387 23.2141 12.1124C23.3766 11.2861 23.7776 10.5271 24.3664 9.93142C24.9553 9.33571 25.7055 8.93002 26.5222 8.76566C27.339 8.6013 28.1856 8.68566 28.9549 9.00806C29.7243 9.33046 30.3819 9.87642 30.8445 10.5769C31.3072 11.2774 31.5541 12.101 31.5541 12.9434C31.5541 13.5028 31.4452 14.0567 31.2336 14.5735C31.022 15.0903 30.7119 15.5599 30.3209 15.9554C29.9299 16.351 29.4658 16.6647 28.9549 16.8788C28.4441 17.0928 27.8966 17.203 27.3437 17.203ZM27.3437 6.73766C26.1291 6.73766 24.9419 7.10208 23.9321 7.78483C22.9224 8.46757 22.1355 9.43796 21.6709 10.5732C21.2064 11.7085 21.0851 12.9577 21.3225 14.1627C21.5598 15.3677 22.1451 16.4744 23.0043 17.3429C23.8634 18.2113 24.9579 18.8024 26.1492 19.0415C27.3405 19.2805 28.5752 19.1567 29.6969 18.6858C30.8187 18.2148 31.7772 17.4178 32.4511 16.3957C33.1251 15.3735 33.4843 14.1721 33.4832 12.9434C33.4803 11.2975 32.8324 9.71989 31.6815 8.55655C30.5306 7.39322 28.9706 6.73911 27.3437 6.73766ZM27.3437 17.203C26.5109 17.203 25.6969 16.9532 25.0045 16.4852C24.3121 16.0171 23.7724 15.3518 23.4537 14.5735C23.135 13.7952 23.0516 12.9387 23.2141 12.1124C23.3766 11.2861 23.7776 10.5271 24.3664 9.93142C24.9553 9.33571 25.7055 8.93002 26.5222 8.76566C27.339 8.6013 28.1856 8.68566 28.9549 9.00806C29.7243 9.33046 30.3819 9.87642 30.8445 10.5769C31.3072 11.2774 31.5541 12.101 31.5541 12.9434C31.5541 13.5028 31.4452 14.0567 31.2336 14.5735C31.022 15.0903 30.7119 15.5599 30.3209 15.9554C29.9299 16.351 29.4658 16.6647 28.9549 16.8788C28.4441 17.0928 27.8966 17.203 27.3437 17.203ZM27.3437 6.73766C26.1291 6.73766 24.9419 7.10208 23.9321 7.78483C22.9224 8.46757 22.1355 9.43796 21.6709 10.5732C21.2064 11.7085 21.0851 12.9577 21.3225 14.1627C21.5598 15.3677 22.1451 16.4744 23.0043 17.3429C23.8634 18.2113 24.9579 18.8024 26.1492 19.0415C27.3405 19.2805 28.5752 19.1567 29.6969 18.6858C30.8187 18.2148 31.7772 17.4178 32.4511 16.3957C33.1251 15.3735 33.4843 14.1721 33.4832 12.9434C33.4803 11.2975 32.8324 9.71989 31.6815 8.55655C30.5306 7.39322 28.9706 6.73911 27.3437 6.73766ZM27.3437 17.203C26.5109 17.203 25.6969 16.9532 25.0045 16.4852C24.3121 16.0171 23.7724 15.3518 23.4537 14.5735C23.135 13.7952 23.0516 12.9387 23.2141 12.1124C23.3766 11.2861 23.7776 10.5271 24.3664 9.93142C24.9553 9.33571 25.7055 8.93002 26.5222 8.76566C27.339 8.6013 28.1856 8.68566 28.9549 9.00806C29.7243 9.33046 30.3819 9.87642 30.8445 10.5769C31.3072 11.2774 31.5541 12.101 31.5541 12.9434C31.5541 13.5028 31.4452 14.0567 31.2336 14.5735C31.022 15.0903 30.7119 15.5599 30.3209 15.9554C29.9299 16.351 29.4658 16.6647 28.9549 16.8788C28.4441 17.0928 27.8966 17.203 27.3437 17.203ZM27.3437 6.73766C26.1291 6.73766 24.9419 7.10208 23.9321 7.78483C22.9224 8.46757 22.1355 9.43796 21.6709 10.5732C21.2064 11.7085 21.0851 12.9577 21.3225 14.1627C21.5598 15.3677 22.1451 16.4744 23.0043 17.3429C23.8634 18.2113 24.9579 18.8024 26.1492 19.0415C27.3405 19.2805 28.5752 19.1567 29.6969 18.6858C30.8187 18.2148 31.7772 17.4178 32.4511 16.3957C33.1251 15.3735 33.4843 14.1721 33.4832 12.9434C33.4803 11.2975 32.8324 9.71989 31.6815 8.55655C30.5306 7.39322 28.9706 6.73911 27.3437 6.73766ZM27.3437 17.203C26.5109 17.203 25.6969 16.9532 25.0045 16.4852C24.3121 16.0171 23.7724 15.3518 23.4537 14.5735C23.135 13.7952 23.0516 12.9387 23.2141 12.1124C23.3766 11.2861 23.7776 10.5271 24.3664 9.93142C24.9553 9.33571 25.7055 8.93002 26.5222 8.76566C27.339 8.6013 28.1856 8.68566 28.9549 9.00806C29.7243 9.33046 30.3819 9.87642 30.8445 10.5769C31.3072 11.2774 31.5541 12.101 31.5541 12.9434C31.5541 13.5028 31.4452 14.0567 31.2336 14.5735C31.022 15.0903 30.7119 15.5599 30.3209 15.9554C29.9299 16.351 29.4658 16.6647 28.9549 16.8788C28.4441 17.0928 27.8966 17.203 27.3437 17.203ZM27.3437 4.42969C25.6795 4.43077 24.0529 4.93102 22.6697 5.86718C21.2865 6.80334 20.2087 8.13338 19.5726 9.68915C18.9365 11.2449 18.7706 12.9566 19.096 14.6077C19.4213 16.2589 20.2232 17.7754 21.4004 18.9655C22.5775 20.1556 24.077 20.9659 25.7093 21.294C27.3416 21.622 29.0334 21.4531 30.5708 20.8086C32.1082 20.164 33.4222 19.0728 34.3467 17.6728C35.2711 16.2729 35.7645 14.627 35.7645 12.9434C35.7645 11.8249 35.5467 10.7174 35.1234 9.68409C34.7002 8.6508 34.0798 7.71201 33.2978 6.92136C32.5158 6.13072 31.5874 5.50372 30.5658 5.07618C29.5441 4.64865 28.4492 4.42897 27.3437 4.42969ZM27.3437 19.5055C26.0576 19.5055 24.8003 19.1197 23.731 18.3968C22.6616 17.674 21.8282 16.6465 21.336 15.4445C20.8438 14.2424 20.7151 12.9197 20.966 11.6436C21.2169 10.3675 21.8362 9.19527 22.7456 8.27524C23.655 7.35522 24.8137 6.72867 26.0751 6.47484C27.3364 6.221 28.6439 6.35128 29.8321 6.84919C31.0203 7.34711 32.0359 8.19029 32.7504 9.27213C33.4649 10.354 33.8463 11.6259 33.8463 12.927C33.8463 14.6717 33.1612 16.345 31.9417 17.5787C30.7222 18.8124 29.0683 19.5055 27.3437 19.5055ZM27.3437 6.73766C26.1291 6.73766 24.9419 7.10208 23.9321 7.78483C22.9224 8.46757 22.1355 9.43796 21.6709 10.5732C21.2064 11.7085 21.0851 12.9577 21.3225 14.1627C21.5598 15.3677 22.1451 16.4744 23.0043 17.3429C23.8634 18.2113 24.9579 18.8024 26.1492 19.0415C27.3405 19.2805 28.5752 19.1567 29.6969 18.6858C30.8187 18.2148 31.7772 17.4178 32.4511 16.3957C33.1251 15.3735 33.4843 14.1721 33.4832 12.9434C33.4803 11.2975 32.8324 9.71989 31.6815 8.55655C30.5306 7.39322 28.9706 6.73911 27.3437 6.73766ZM27.3437 17.203C26.5109 17.203 25.6969 16.9532 25.0045 16.4852C24.3121 16.0171 23.7724 15.3518 23.4537 14.5735C23.135 13.7952 23.0516 12.9387 23.2141 12.1124C23.3766 11.2861 23.7776 10.5271 24.3664 9.93142C24.9553 9.33571 25.7055 8.93002 26.5222 8.76566C27.339 8.6013 28.1856 8.68566 28.9549 9.00806C29.7243 9.33046 30.3819 9.87642 30.8445 10.5769C31.3072 11.2774 31.5541 12.101 31.5541 12.9434C31.5541 13.5028 31.4452 14.0567 31.2336 14.5735C31.022 15.0903 30.7119 15.5599 30.3209 15.9554C29.9299 16.351 29.4658 16.6647 28.9549 16.8788C28.4441 17.0928 27.8966 17.203 27.3437 17.203ZM27.3437 6.73766C26.1291 6.73766 24.9419 7.10208 23.9321 7.78483C22.9224 8.46757 22.1355 9.43796 21.6709 10.5732C21.2064 11.7085 21.0851 12.9577 21.3225 14.1627C21.5598 15.3677 22.1451 16.4744 23.0043 17.3429C23.8634 18.2113 24.9579 18.8024 26.1492 19.0415C27.3405 19.2805 28.5752 19.1567 29.6969 18.6858C30.8187 18.2148 31.7772 17.4178 32.4511 16.3957C33.1251 15.3735 33.4843 14.1721 33.4832 12.9434C33.4803 11.2975 32.8324 9.71989 31.6815 8.55655C30.5306 7.39322 28.9706 6.73911 27.3437 6.73766ZM27.3437 17.203C26.5109 17.203 25.6969 16.9532 25.0045 16.4852C24.3121 16.0171 23.7724 15.3518 23.4537 14.5735C23.135 13.7952 23.0516 12.9387 23.2141 12.1124C23.3766 11.2861 23.7776 10.5271 24.3664 9.93142C24.9553 9.33571 25.7055 8.93002 26.5222 8.76566C27.339 8.6013 28.1856 8.68566 28.9549 9.00806C29.7243 9.33046 30.3819 9.87642 30.8445 10.5769C31.3072 11.2774 31.5541 12.101 31.5541 12.9434C31.5541 13.5028 31.4452 14.0567 31.2336 14.5735C31.022 15.0903 30.7119 15.5599 30.3209 15.9554C29.9299 16.351 29.4658 16.6647 28.9549 16.8788C28.4441 17.0928 27.8966 17.203 27.3437 17.203ZM27.3437 6.73766C26.1291 6.73766 24.9419 7.10208 23.9321 7.78483C22.9224 8.46757 22.1355 9.43796 21.6709 10.5732C21.2064 11.7085 21.0851 12.9577 21.3225 14.1627C21.5598 15.3677 22.1451 16.4744 23.0043 17.3429C23.8634 18.2113 24.9579 18.8024 26.1492 19.0415C27.3405 19.2805 28.5752 19.1567 29.6969 18.6858C30.8187 18.2148 31.7772 17.4178 32.4511 16.3957C33.1251 15.3735 33.4843 14.1721 33.4832 12.9434C33.4803 11.2975 32.8324 9.71989 31.6815 8.55655C30.5306 7.39322 28.9706 6.73911 27.3437 6.73766ZM27.3437 17.203C26.5109 17.203 25.6969 16.9532 25.0045 16.4852C24.3121 16.0171 23.7724 15.3518 23.4537 14.5735C23.135 13.7952 23.0516 12.9387 23.2141 12.1124C23.3766 11.2861 23.7776 10.5271 24.3664 9.93142C24.9553 9.33571 25.7055 8.93002 26.5222 8.76566C27.339 8.6013 28.1856 8.68566 28.9549 9.00806C29.7243 9.33046 30.3819 9.87642 30.8445 10.5769C31.3072 11.2774 31.5541 12.101 31.5541 12.9434C31.5541 13.5028 31.4452 14.0567 31.2336 14.5735C31.022 15.0903 30.7119 15.5599 30.3209 15.9554C29.9299 16.351 29.4658 16.6647 28.9549 16.8788C28.4441 17.0928 27.8966 17.203 27.3437 17.203ZM27.3437 6.73766C26.1291 6.73766 24.9419 7.10208 23.9321 7.78483C22.9224 8.46757 22.1355 9.43796 21.6709 10.5732C21.2064 11.7085 21.0851 12.9577 21.3225 14.1627C21.5598 15.3677 22.1451 16.4744 23.0043 17.3429C23.8634 18.2113 24.9579 18.8024 26.1492 19.0415C27.3405 19.2805 28.5752 19.1567 29.6969 18.6858C30.8187 18.2148 31.7772 17.4178 32.4511 16.3957C33.1251 15.3735 33.4843 14.1721 33.4832 12.9434C33.4803 11.2975 32.8324 9.71989 31.6815 8.55655C30.5306 7.39322 28.9706 6.73911 27.3437 6.73766ZM27.3437 17.203C26.5109 17.203 25.6969 16.9532 25.0045 16.4852C24.3121 16.0171 23.7724 15.3518 23.4537 14.5735C23.135 13.7952 23.0516 12.9387 23.2141 12.1124C23.3766 11.2861 23.7776 10.5271 24.3664 9.93142C24.9553 9.33571 25.7055 8.93002 26.5222 8.76566C27.339 8.6013 28.1856 8.68566 28.9549 9.00806C29.7243 9.33046 30.3819 9.87642 30.8445 10.5769C31.3072 11.2774 31.5541 12.101 31.5541 12.9434C31.5541 13.5028 31.4452 14.0567 31.2336 14.5735C31.022 15.0903 30.7119 15.5599 30.3209 15.9554C29.9299 16.351 29.4658 16.6647 28.9549 16.8788C28.4441 17.0928 27.8966 17.203 27.3437 17.203ZM27.3437 6.73766C26.1291 6.73766 24.9419 7.10208 23.9321 7.78483C22.9224 8.46757 22.1355 9.43796 21.6709 10.5732C21.2064 11.7085 21.0851 12.9577 21.3225 14.1627C21.5598 15.3677 22.1451 16.4744 23.0043 17.3429C23.8634 18.2113 24.9579 18.8024 26.1492 19.0415C27.3405 19.2805 28.5752 19.1567 29.6969 18.6858C30.8187 18.2148 31.7772 17.4178 32.4511 16.3957C33.1251 15.3735 33.4843 14.1721 33.4832 12.9434C33.4803 11.2975 32.8324 9.71989 31.6815 8.55655C30.5306 7.39322 28.9706 6.73911 27.3437 6.73766ZM27.3437 17.203C26.5109 17.203 25.6969 16.9532 25.0045 16.4852C24.3121 16.0171 23.7724 15.3518 23.4537 14.5735C23.135 13.7952 23.0516 12.9387 23.2141 12.1124C23.3766 11.2861 23.7776 10.5271 24.3664 9.93142C24.9553 9.33571 25.7055 8.93002 26.5222 8.76566C27.339 8.6013 28.1856 8.68566 28.9549 9.00806C29.7243 9.33046 30.3819 9.87642 30.8445 10.5769C31.3072 11.2774 31.5541 12.101 31.5541 12.9434C31.5541 13.5028 31.4452 14.0567 31.2336 14.5735C31.022 15.0903 30.7119 15.5599 30.3209 15.9554C29.9299 16.351 29.4658 16.6647 28.9549 16.8788C28.4441 17.0928 27.8966 17.203 27.3437 17.203ZM27.3437 6.73766C26.1291 6.73766 24.9419 7.10208 23.9321 7.78483C22.9224 8.46757 22.1355 9.43796 21.6709 10.5732C21.2064 11.7085 21.0851 12.9577 21.3225 14.1627C21.5598 15.3677 22.1451 16.4744 23.0043 17.3429C23.8634 18.2113 24.9579 18.8024 26.1492 19.0415C27.3405 19.2805 28.5752 19.1567 29.6969 18.6858C30.8187 18.2148 31.7772 17.4178 32.4511 16.3957C33.1251 15.3735 33.4843 14.1721 33.4832 12.9434C33.4803 11.2975 32.8324 9.71989 31.6815 8.55655C30.5306 7.39322 28.9706 6.73911 27.3437 6.73766ZM27.3437 17.203C26.5109 17.203 25.6969 16.9532 25.0045 16.4852C24.3121 16.0171 23.7724 15.3518 23.4537 14.5735C23.135 13.7952 23.0516 12.9387 23.2141 12.1124C23.3766 11.2861 23.7776 10.5271 24.3664 9.93142C24.9553 9.33571 25.7055 8.93002 26.5222 8.76566C27.339 8.6013 28.1856 8.68566 28.9549 9.00806C29.7243 9.33046 30.3819 9.87642 30.8445 10.5769C31.3072 11.2774 31.5541 12.101 31.5541 12.9434C31.5541 13.5028 31.4452 14.0567 31.2336 14.5735C31.022 15.0903 30.7119 15.5599 30.3209 15.9554C29.9299 16.351 29.4658 16.6647 28.9549 16.8788C28.4441 17.0928 27.8966 17.203 27.3437 17.203ZM27.3437 6.73766C26.1291 6.73766 24.9419 7.10208 23.9321 7.78483C22.9224 8.46757 22.1355 9.43796 21.6709 10.5732C21.2064 11.7085 21.0851 12.9577 21.3225 14.1627C21.5598 15.3677 22.1451 16.4744 23.0043 17.3429C23.8634 18.2113 24.9579 18.8024 26.1492 19.0415C27.3405 19.2805 28.5752 19.1567 29.6969 18.6858C30.8187 18.2148 31.7772 17.4178 32.4511 16.3957C33.1251 15.3735 33.4843 14.1721 33.4832 12.9434C33.4803 11.2975 32.8324 9.71989 31.6815 8.55655C30.5306 7.39322 28.9706 6.73911 27.3437 6.73766ZM27.3437 17.203C26.5109 17.203 25.6969 16.9532 25.0045 16.4852C24.3121 16.0171 23.7724 15.3518 23.4537 14.5735C23.135 13.7952 23.0516 12.9387 23.2141 12.1124C23.3766 11.2861 23.7776 10.5271 24.3664 9.93142C24.9553 9.33571 25.7055 8.93002 26.5222 8.76566C27.339 8.6013 28.1856 8.68566 28.9549 9.00806C29.7243 9.33046 30.3819 9.87642 30.8445 10.5769C31.3072 11.2774 31.5541 12.101 31.5541 12.9434C31.5541 13.5028 31.4452 14.0567 31.2336 14.5735C31.022 15.0903 30.7119 15.5599 30.3209 15.9554C29.9299 16.351 29.4658 16.6647 28.9549 16.8788C28.4441 17.0928 27.8966 17.203 27.3437 17.203ZM27.3437 6.73766C26.1291 6.73766 24.9419 7.10208 23.9321 7.78483C22.9224 8.46757 22.1355 9.43796 21.6709 10.5732C21.2064 11.7085 21.0851 12.9577 21.3225 14.1627C21.5598 15.3677 22.1451 16.4744 23.0043 17.3429C23.8634 18.2113 24.9579 18.8024 26.1492 19.0415C27.3405 19.2805 28.5752 19.1567 29.6969 18.6858C30.8187 18.2148 31.7772 17.4178 32.4511 16.3957C33.1251 15.3735 33.4843 14.1721 33.4832 12.9434C33.4803 11.2975 32.8324 9.71989 31.6815 8.55655C30.5306 7.39322 28.9706 6.73911 27.3437 6.73766ZM27.3437 17.203C26.5109 17.203 25.6969 16.9532 25.0045 16.4852C24.3121 16.0171 23.7724 15.3518 23.4537 14.5735C23.135 13.7952 23.0516 12.9387 23.2141 12.1124C23.3766 11.2861 23.7776 10.5271 24.3664 9.93142C24.9553 9.33571 25.7055 8.93002 26.5222 8.76566C27.339 8.6013 28.1856 8.68566 28.9549 9.00806C29.7243 9.33046 30.3819 9.87642 30.8445 10.5769C31.3072 11.2774 31.5541 12.101 31.5541 12.9434C31.5541 13.5028 31.4452 14.0567 31.2336 14.5735C31.022 15.0903 30.7119 15.5599 30.3209 15.9554C29.9299 16.351 29.4658 16.6647 28.9549 16.8788C28.4441 17.0928 27.8966 17.203 27.3437 17.203ZM27.3437 6.73766C26.1291 6.73766 24.9419 7.10208 23.9321 7.78483C22.9224 8.46757 22.1355 9.43796 21.6709 10.5732C21.2064 11.7085 21.0851 12.9577 21.3225 14.1627C21.5598 15.3677 22.1451 16.4744 23.0043 17.3429C23.8634 18.2113 24.9579 18.8024 26.1492 19.0415C27.3405 19.2805 28.5752 19.1567 29.6969 18.6858C30.8187 18.2148 31.7772 17.4178 32.4511 16.3957C33.1251 15.3735 33.4843 14.1721 33.4832 12.9434C33.4803 11.2975 32.8324 9.71989 31.6815 8.55655C30.5306 7.39322 28.9706 6.73911 27.3437 6.73766ZM27.3437 17.203C26.5109 17.203 25.6969 16.9532 25.0045 16.4852C24.3121 16.0171 23.7724 15.3518 23.4537 14.5735C23.135 13.7952 23.0516 12.9387 23.2141 12.1124C23.3766 11.2861 23.7776 10.5271 24.3664 9.93142C24.9553 9.33571 25.7055 8.93002 26.5222 8.76566C27.339 8.6013 28.1856 8.68566 28.9549 9.00806C29.7243 9.33046 30.3819 9.87642 30.8445 10.5769C31.3072 11.2774 31.5541 12.101 31.5541 12.9434C31.5541 13.5028 31.4452 14.0567 31.2336 14.5735C31.022 15.0903 30.7119 15.5599 30.3209 15.9554C29.9299 16.351 29.4658 16.6647 28.9549 16.8788C28.4441 17.0928 27.8966 17.203 27.3437 17.203ZM27.3437 6.73766C26.1291 6.73766 24.9419 7.10208 23.9321 7.78483C22.9224 8.46757 22.1355 9.43796 21.6709 10.5732C21.2064 11.7085 21.0851 12.9577 21.3225 14.1627C21.5598 15.3677 22.1451 16.4744 23.0043 17.3429C23.8634 18.2113 24.9579 18.8024 26.1492 19.0415C27.3405 19.2805 28.5752 19.1567 29.6969 18.6858C30.8187 18.2148 31.7772 17.4178 32.4511 16.3957C33.1251 15.3735 33.4843 14.1721 33.4832 12.9434C33.4803 11.2975 32.8324 9.71989 31.6815 8.55655C30.5306 7.39322 28.9706 6.73911 27.3437 6.73766ZM27.3437 17.203C26.5109 17.203 25.6969 16.9532 25.0045 16.4852C24.3121 16.0171 23.7724 15.3518 23.4537 14.5735C23.135 13.7952 23.0516 12.9387 23.2141 12.1124C23.3766 11.2861 23.7776 10.5271 24.3664 9.93142C24.9553 9.33571 25.7055 8.93002 26.5222 8.76566C27.339 8.6013 28.1856 8.68566 28.9549 9.00806C29.7243 9.33046 30.3819 9.87642 30.8445 10.5769C31.3072 11.2774 31.5541 12.101 31.5541 12.9434C31.5541 13.5028 31.4452 14.0567 31.2336 14.5735C31.022 15.0903 30.7119 15.5599 30.3209 15.9554C29.9299 16.351 29.4658 16.6647 28.9549 16.8788C28.4441 17.0928 27.8966 17.203 27.3437 17.203ZM27.3437 6.73766C26.1291 6.73766 24.9419 7.10208 23.9321 7.78483C22.9224 8.46757 22.1355 9.43796 21.6709 10.5732C21.2064 11.7085 21.0851 12.9577 21.3225 14.1627C21.5598 15.3677 22.1451 16.4744 23.0043 17.3429C23.8634 18.2113 24.9579 18.8024 26.1492 19.0415C27.3405 19.2805 28.5752 19.1567 29.6969 18.6858C30.8187 18.2148 31.7772 17.4178 32.4511 16.3957C33.1251 15.3735 33.4843 14.1721 33.4832 12.9434C33.4803 11.2975 32.8324 9.71989 31.6815 8.55655C30.5306 7.39322 28.9706 6.73911 27.3437 6.73766ZM27.3437 17.203C26.5109 17.203 25.6969 16.9532 25.0045 16.4852C24.3121 16.0171 23.7724 15.3518 23.4537 14.5735C23.135 13.7952 23.0516 12.9387 23.2141 12.1124C23.3766 11.2861 23.7776 10.5271 24.3664 9.93142C24.9553 9.33571 25.7055 8.93002 26.5222 8.76566C27.339 8.6013 28.1856 8.68566 28.9549 9.00806C29.7243 9.33046 30.3819 9.87642 30.8445 10.5769C31.3072 11.2774 31.5541 12.101 31.5541 12.9434C31.5541 13.5028 31.4452 14.0567 31.2336 14.5735C31.022 15.0903 30.7119 15.5599 30.3209 15.9554C29.9299 16.351 29.4658 16.6647 28.9549 16.8788C28.4441 17.0928 27.8966 17.203 27.3437 17.203ZM27.3437 6.73766C26.1291 6.73766 24.9419 7.10208 23.9321 7.78483C22.9224 8.46757 22.1355 9.43796 21.6709 10.5732C21.2064 11.7085 21.0851 12.9577 21.3225 14.1627C21.5598 15.3677 22.1451 16.4744 23.0043 17.3429C23.8634 18.2113 24.9579 18.8024 26.1492 19.0415C27.3405 19.2805 28.5752 19.1567 29.6969 18.6858C30.8187 18.2148 31.7772 17.4178 32.4511 16.3957C33.1251 15.3735 33.4843 14.1721 33.4832 12.9434C33.4803 11.2975 32.8324 9.71989 31.6815 8.55655C30.5306 7.39322 28.9706 6.73911 27.3437 6.73766ZM27.3437 17.203C26.5109 17.203 25.6969 16.9532 25.0045 16.4852C24.3121 16.0171 23.7724 15.3518 23.4537 14.5735C23.135 13.7952 23.0516 12.9387 23.2141 12.1124C23.3766 11.2861 23.7776 10.5271 24.3664 9.93142C24.9553 9.33571 25.7055 8.93002 26.5222 8.76566C27.339 8.6013 28.1856 8.68566 28.9549 9.00806C29.7243 9.33046 30.3819 9.87642 30.8445 10.5769C31.3072 11.2774 31.5541 12.101 31.5541 12.9434C31.5541 13.5028 31.4452 14.0567 31.2336 14.5735C31.022 15.0903 30.7119 15.5599 30.3209 15.9554C29.9299 16.351 29.4658 16.6647 28.9549 16.8788C28.4441 17.0928 27.8966 17.203 27.3437 17.203ZM27.3437 6.73766C26.1291 6.73766 24.9419 7.10208 23.9321 7.78483C22.9224 8.46757 22.1355 9.43796 21.6709 10.5732C21.2064 11.7085 21.0851 12.9577 21.3225 14.1627C21.5598 15.3677 22.1451 16.4744 23.0043 17.3429C23.8634 18.2113 24.9579 18.8024 26.1492 19.0415C27.3405 19.2805 28.5752 19.1567 29.6969 18.6858C30.8187 18.2148 31.7772 17.4178 32.4511 16.3957C33.1251 15.3735 33.4843 14.1721 33.4832 12.9434C33.4803 11.2975 32.8324 9.71989 31.6815 8.55655C30.5306 7.39322 28.9706 6.73911 27.3437 6.73766ZM27.3437 17.203C26.5109 17.203 25.6969 16.9532 25.0045 16.4852C24.3121 16.0171 23.7724 15.3518 23.4537 14.5735C23.135 13.7952 23.0516 12.9387 23.2141 12.1124C23.3766 11.2861 23.7776 10.5271 24.3664 9.93142C24.9553 9.33571 25.7055 8.93002 26.5222 8.76566C27.339 8.6013 28.1856 8.68566 28.9549 9.00806C29.7243 9.33046 30.3819 9.87642 30.8445 10.5769C31.3072 11.2774 31.5541 12.101 31.5541 12.9434C31.5541 13.5028 31.4452 14.0567 31.2336 14.5735C31.022 15.0903 30.7119 15.5599 30.3209 15.9554C29.9299 16.351 29.4658 16.6647 28.9549 16.8788C28.4441 17.0928 27.8966 17.203 27.3437 17.203Z",fill:"#FF0000"},null,-1),a1=[s1,r1,i1,l1];function c1(e,t){return l(),a("svg",n1,a1)}var u1=O(o1,[["render",c1]]);function B(){const e=v(window.innerWidth<=768);function t(){e.value=window.innerWidth<=768}return window.addEventListener("resize",t),e}const d1={class:"flex"},f1=["href","onClick"],h1={class:"flex font-roxbor italic"},m1=["href","onClick"],_1={class:"flex items-center font-corsa"},p1={class:"hover-clone flex absolute top-0 left-0 font-roxbor italic"},v1=["href","onClick"],w1={class:"flex items-center font-corsa"},y1={class:"hover-clone flex absolute top-0 left-0 font-roxbor italic"},M1={props:{name:{type:String,required:!0},to:{type:[Object,String],required:!0}},setup(e){const t=e,r=B(),o=v(!1),C=H("activeLink"),n=W();function c(u){setTimeout(u,(t.name.length+5)*.05*1e3)}function d(u){return u.indexOf(" ")>=0}return P(n,u=>{u.hash===t.to.hash||u.fullPath==="/editions"&&!t.to.hash?o.value=!0:o.value=!1}),P(C,u=>{t.to.hash===`#${u}`?o.value=!0:o.value=!1}),(u,x)=>{const k=A("RouterLink");return l(),a("div",d1,[m(k,F({to:e.to},u.$attrs),{default:T(({href:$,navigate:E})=>[o.value?(l(),a("a",{key:0,href:$,class:"relative",onClick:E},[s("div",h1,[(l(!0),a(w,null,y(e.name,(f,i)=>(l(),a("span",{key:i,class:M(["uppercase",{spacer:d(e.name)&&e.name.indexOf(" ")===i}]),style:g(`--index: ${i}`)},Z(f),7))),128))])],8,f1)):p(r)&&!o.value?(l(),a("a",{key:1,href:$,class:"menu-item relative",onClick:z(f=>c(E),["prevent"])},[s("div",_1,[(l(!0),a(w,null,y(e.name,(f,i)=>(l(),a("span",{key:i,class:M(["uppercase",{spacer:d(e.name)&&e.name.indexOf(" ")===i}]),style:g(`--index: ${i}`)},Z(f),7))),128))]),s("div",p1,[(l(!0),a(w,null,y(e.name,(f,i)=>(l(),a("span",{key:i,class:M(["uppercase",{spacer:d(e.name)&&e.name.indexOf(" ")===i}]),style:g(`--index: ${i}`)},Z(f),7))),128))])],8,m1)):!o.value&&!p(r)?(l(),a("a",{key:2,href:$,class:"menu-item relative",onClick:E},[s("div",w1,[(l(!0),a(w,null,y(e.name,(f,i)=>(l(),a("span",{key:i,class:M(["uppercase",{spacer:d(e.name)&&e.name.indexOf(" ")===i}]),style:g(`--index: ${i}`)},Z(f),7))),128))]),s("div",y1,[(l(!0),a(w,null,y(e.name,(f,i)=>(l(),a("span",{key:i,class:M(["uppercase",{spacer:d(e.name)&&e.name.indexOf(" ")===i}]),style:g(`--index: ${i}`)},Z(f),7))),128))])],8,v1)):I("",!0)]),_:1},16,["to"])])}}};var V=O(M1,[["__scopeId","data-v-6a911b96"]]);const g1={},Z1={viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},b1=s("line",{y1:"0.5",x2:"16",y2:"0.5",stroke:"white"},null,-1),x1=s("line",{y1:"14.5",x2:"16",y2:"14.5",stroke:"white"},null,-1),k1=s("line",{y1:"7.5",x2:"16",y2:"7.5",stroke:"white"},null,-1),$1=[b1,x1,k1];function E1(e,t){return l(),a("svg",Z1,$1)}var V1=O(g1,[["render",E1]]);const L1={class:"fixed top-0 left-0 z-[9999] flex w-full h-11 items-center pr-10 pl-10 py-8 border-b border-white"},S1={class:"w-full"},O1={class:"lg:bg-transparent bg-c-black navbar lg:w-fit lg:ml-auto lg:h-auto lg:relative lg:flex-row lg:text-base transform -translate-y-full lg:translate-y-0 text-4xl flex ml-0 text-white w-full h-screen absolute left-0 top-0 flex-col justify-center items-center transition-transform duration-500"},P1={class:"hover:text-white"},R1={class:"lg:ml-8 lg:mt-0 mt-12 hover:text-white"},A1={class:"lg:ml-8 lg:mt-0 mt-12 hover:text-white"},T1=s("div",{class:"after-line w-full absolute h-0 bg-custom-red-100 top-0 left-0"},null,-1),I1={setup(e){let t=null;const r=B();function o(){t.play()}function C(){r.value&&t.progress(0).reverse()}const n=q(()=>r.value?{story:{name:"StoryView"},editions:{name:"EditionsView"},boldSpace:{name:"BoldSpace"}}:{story:{hash:"#story"},editions:{hash:"#editions"},boldSpace:{hash:"#bold-space"}});return L(()=>{t=S.timeline(),t.to(".after-line",{height:"100vh",duration:1,ease:"power1"}).to(".after-line",{yPercent:100,ease:"power1"},.5).to(".navbar",{y:0},0),t.pause()}),(c,d)=>{const u=A("RouterLink");return l(),a("div",L1,[s("div",S1,[m(u,{to:"/"},{default:T(()=>[m(u1)]),_:1})]),s("span",{class:"ml-auto lg:hidden w-[1.5rem]",onClick:o},[m(V1)]),s("nav",O1,[s("h1",{class:"uppercase cursor-pointer absolute right-5 top-5 text-xl lg:hidden",onClick:C}," close "),s("div",P1,[m(V,{name:"Story",to:p(n).story,onClick:C},null,8,["to"])]),s("div",R1,[m(V,{name:"Editions",to:p(n).editions,onClick:C},null,8,["to"])]),s("div",A1,[m(V,{name:"Bold Space",to:p(n).boldSpace,onClick:C},null,8,["to"])])]),T1])}}};S.registerPlugin(_);function B1(){const e=v(),t=v();return L(()=>{e.value=new j({el:t.value,getSpeed:!0,smooth:!0}),e.value.on("scroll",_.update),_.scrollerProxy(t.value,{scrollTop(r){return arguments.length?e.value.scrollTo(r,0,0):e.value.scroll.instance.scroll.y},getBoundingClientRect(){return{left:0,top:0,width:window.innerWidth,height:window.innerHeight}},pinType:t.value.style.transform?"transform":"fixed"}),_.addEventListener("refresh",()=>e.value.update()),_.refresh()}),{scroller:e,scrollWrapper:t}}function N1(e){let t=Number.MIN_SAFE_INTEGER;const r=G(),o=new ResizeObserver(()=>{const C=performance.now();C-t<100||(t=C,r.emit("wrapper-resize"),_.refresh())});return L(()=>{o.observe(e.value)}),U(()=>{o.disconnect()}),{eventBus:r}}const D1={class:"flex flex-col w-full bg-c-black"},H1={class:"min-h-screen w-full"},W1={key:0},z1={setup(e){const t=K(()=>h(()=>import("./index.f349c004.js"),["assets/index.f349c004.js","assets/vendor.31b2950f.js"])),{scroller:r,scrollWrapper:o}=B1(),{eventBus:C}=N1(o),n=v(!1),c=v();window.onload=()=>{n.value=!0},b("scroller",r),b("scrollWrapper",o),b("eventBus",C),b("activeLink",c);function d(u){c.value=u}return(u,x)=>(l(),a("div",D1,[m(I1,{active:c.value},null,8,["active"]),s("div",H1,[s("div",{ref_key:"scrollWrapper",ref:o,class:"wrapper overflow-hidden"},[m(p(Q),{onActivate:x[0]||(x[0]=k=>d(k))})],512)]),n.value?(l(),a("div",W1,[m(p(t))])):I("",!0)]))}},N=J({history:X(""),routes:[{path:"/",name:"HomeView",component:()=>h(()=>import("./index.79082ee1.js"),["assets/index.79082ee1.js","assets/vendor.31b2950f.js"])},{path:"/editions",name:"EditionsView",component:()=>h(()=>import("./index.58225a36.js"),["assets/index.58225a36.js","assets/index.b35e782e.css","assets/vendor.31b2950f.js","assets/v-lazy-image.20674330.js","assets/isSafari.91ffff2c.js"])},{path:"/story",name:"StoryView",component:()=>h(()=>import("./index.63fbbc16.js"),["assets/index.63fbbc16.js","assets/BoldStory3.c6af08a1.js","assets/BoldStory3.cbc46eb4.css","assets/vendor.31b2950f.js","assets/v-lazy-image.20674330.js","assets/isSafari.91ffff2c.js"])},{path:"/bold-space",name:"BoldSpace",component:()=>h(()=>import("./index.808d5ea3.js"),["assets/index.808d5ea3.js","assets/BoldRing.795dcc96.js","assets/BoldRing.c32cf198.css","assets/vendor.31b2950f.js"])},{path:"/prospects",name:"ProspectsView",component:()=>h(()=>import("./index.0d088467.js"),["assets/index.0d088467.js","assets/v-lazy-image.20674330.js","assets/vendor.31b2950f.js"])},{path:"/production",name:"ProductionView",component:()=>h(()=>import("./index.b0a60184.js"),["assets/index.b0a60184.js","assets/vendor.31b2950f.js","assets/v-lazy-image.20674330.js"])},{path:"/commerce",name:"CommerceView",component:()=>h(()=>import("./index.63734141.js"),["assets/index.63734141.js","assets/vendor.31b2950f.js"])},{path:"/faq",name:"FAQView",component:()=>h(()=>import("./index.648f167f.js"),["assets/index.648f167f.js","assets/vendor.31b2950f.js"])},{path:"/contacts",name:"ContactsView",component:()=>h(()=>import("./index.d61052bc.js"),["assets/index.d61052bc.js","assets/vendor.31b2950f.js"])}]});N.afterEach(()=>{window.scrollTo(0,0)});S.registerPlugin(_);const D=Y(z1);D.use(N);D.mount("#app");export{V as N,O as _,h as a,N as r,B as u};
