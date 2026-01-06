(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=e(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Nu(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const Lt={},cr=[],an=()=>{},Kf=()=>!1,Ca=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Mu=n=>n.startsWith("onUpdate:"),me=Object.assign,Ou=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},ey=Object.prototype.hasOwnProperty,Ct=(n,t)=>ey.call(n,t),ft=Array.isArray,hr=n=>so(n)==="[object Map]",Va=n=>so(n)==="[object Set]",Vh=n=>so(n)==="[object Date]",gt=n=>typeof n=="function",Xt=n=>typeof n=="string",hn=n=>typeof n=="symbol",Ut=n=>n!==null&&typeof n=="object",Hf=n=>(Ut(n)||gt(n))&&gt(n.then)&&gt(n.catch),Gf=Object.prototype.toString,so=n=>Gf.call(n),ny=n=>so(n).slice(8,-1),Wf=n=>so(n)==="[object Object]",Da=n=>Xt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,gi=Nu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ka=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},sy=/-\w/g,Zn=ka(n=>n.replace(sy,t=>t.slice(1).toUpperCase())),ry=/\B([A-Z])/g,$s=ka(n=>n.replace(ry,"-$1").toLowerCase()),Qf=ka(n=>n.charAt(0).toUpperCase()+n.slice(1)),bl=ka(n=>n?`on${Qf(n)}`:""),Wn=(n,t)=>!Object.is(n,t),Lo=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Xf=(n,t,e,s=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:s,value:e})},Na=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Dh;const Ma=()=>Dh||(Dh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Fu(n){if(ft(n)){const t={};for(let e=0;e<n.length;e++){const s=n[e],r=Xt(s)?ly(s):Fu(s);if(r)for(const i in r)t[i]=r[i]}return t}else if(Xt(n)||Ut(n))return n}const iy=/;(?![^(]*\))/g,oy=/:([^]+)/,ay=/\/\*[^]*?\*\//g;function ly(n){const t={};return n.replace(ay,"").split(iy).forEach(e=>{if(e){const s=e.split(oy);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Be(n){let t="";if(Xt(n))t=n;else if(ft(n))for(let e=0;e<n.length;e++){const s=Be(n[e]);s&&(t+=s+" ")}else if(Ut(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const uy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",cy=Nu(uy);function Jf(n){return!!n||n===""}function hy(n,t){if(n.length!==t.length)return!1;let e=!0;for(let s=0;e&&s<n.length;s++)e=gr(n[s],t[s]);return e}function gr(n,t){if(n===t)return!0;let e=Vh(n),s=Vh(t);if(e||s)return e&&s?n.getTime()===t.getTime():!1;if(e=hn(n),s=hn(t),e||s)return n===t;if(e=ft(n),s=ft(t),e||s)return e&&s?hy(n,t):!1;if(e=Ut(n),s=Ut(t),e||s){if(!e||!s)return!1;const r=Object.keys(n).length,i=Object.keys(t).length;if(r!==i)return!1;for(const o in n){const l=n.hasOwnProperty(o),u=t.hasOwnProperty(o);if(l&&!u||!l&&u||!gr(n[o],t[o]))return!1}}return String(n)===String(t)}function dy(n,t){return n.findIndex(e=>gr(e,t))}const Yf=n=>!!(n&&n.__v_isRef===!0),vt=n=>Xt(n)?n:n==null?"":ft(n)||Ut(n)&&(n.toString===Gf||!gt(n.toString))?Yf(n)?vt(n.value):JSON.stringify(n,Zf,2):String(n),Zf=(n,t)=>Yf(t)?Zf(n,t.value):hr(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[s,r],i)=>(e[Tl(s,i)+" =>"]=r,e),{})}:Va(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Tl(e))}:hn(t)?Tl(t):Ut(t)&&!ft(t)&&!Wf(t)?String(t):t,Tl=(n,t="")=>{var e;return hn(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let he;class tp{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=he,!t&&he&&(this.index=(he.scopes||(he.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=he;try{return he=this,t()}finally{he=e}}}on(){++this._on===1&&(this.prevScope=he,he=this)}off(){this._on>0&&--this._on===0&&(he=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let e,s;for(e=0,s=this.effects.length;e<s;e++)this.effects[e].stop();for(this.effects.length=0,e=0,s=this.cleanups.length;e<s;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,s=this.scopes.length;e<s;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function ep(n){return new tp(n)}function np(){return he}function fy(n,t=!1){he&&he.cleanups.push(n)}let Bt;const wl=new WeakSet;class sp{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,he&&he.active&&he.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,wl.has(this)&&(wl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ip(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,kh(this),op(this);const t=Bt,e=We;Bt=this,We=!0;try{return this.fn()}finally{ap(this),Bt=t,We=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Uu(t);this.deps=this.depsTail=void 0,kh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?wl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Kl(this)&&this.run()}get dirty(){return Kl(this)}}let rp=0,_i,yi;function ip(n,t=!1){if(n.flags|=8,t){n.next=yi,yi=n;return}n.next=_i,_i=n}function Lu(){rp++}function Bu(){if(--rp>0)return;if(yi){let t=yi;for(yi=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;_i;){let t=_i;for(_i=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){n||(n=s)}t=e}}if(n)throw n}function op(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function ap(n){let t,e=n.depsTail,s=e;for(;s;){const r=s.prevDep;s.version===-1?(s===e&&(e=r),Uu(s),py(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}n.deps=t,n.depsTail=e}function Kl(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(lp(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function lp(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Mi)||(n.globalVersion=Mi,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Kl(n))))return;n.flags|=2;const t=n.dep,e=Bt,s=We;Bt=n,We=!0;try{op(n);const r=n.fn(n._value);(t.version===0||Wn(r,n._value))&&(n.flags|=128,n._value=r,t.version++)}catch(r){throw t.version++,r}finally{Bt=e,We=s,ap(n),n.flags&=-3}}function Uu(n,t=!1){const{dep:e,prevSub:s,nextSub:r}=n;if(s&&(s.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=s,n.nextSub=void 0),e.subs===n&&(e.subs=s,!s&&e.computed)){e.computed.flags&=-5;for(let i=e.computed.deps;i;i=i.nextDep)Uu(i,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function py(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let We=!0;const up=[];function wn(){up.push(We),We=!1}function An(){const n=up.pop();We=n===void 0?!0:n}function kh(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=Bt;Bt=void 0;try{t()}finally{Bt=e}}}let Mi=0;class my{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class $u{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Bt||!We||Bt===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==Bt)e=this.activeLink=new my(Bt,this),Bt.deps?(e.prevDep=Bt.depsTail,Bt.depsTail.nextDep=e,Bt.depsTail=e):Bt.deps=Bt.depsTail=e,cp(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const s=e.nextDep;s.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=s),e.prevDep=Bt.depsTail,e.nextDep=void 0,Bt.depsTail.nextDep=e,Bt.depsTail=e,Bt.deps===e&&(Bt.deps=s)}return e}trigger(t){this.version++,Mi++,this.notify(t)}notify(t){Lu();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Bu()}}}function cp(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)cp(s)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const ea=new WeakMap,Rs=Symbol(""),Hl=Symbol(""),Oi=Symbol("");function fe(n,t,e){if(We&&Bt){let s=ea.get(n);s||ea.set(n,s=new Map);let r=s.get(e);r||(s.set(e,r=new $u),r.map=s,r.key=e),r.track()}}function gn(n,t,e,s,r,i){const o=ea.get(n);if(!o){Mi++;return}const l=u=>{u&&u.trigger()};if(Lu(),t==="clear")o.forEach(l);else{const u=ft(n),c=u&&Da(e);if(u&&e==="length"){const d=Number(s);o.forEach((p,y)=>{(y==="length"||y===Oi||!hn(y)&&y>=d)&&l(p)})}else switch((e!==void 0||o.has(void 0))&&l(o.get(e)),c&&l(o.get(Oi)),t){case"add":u?c&&l(o.get("length")):(l(o.get(Rs)),hr(n)&&l(o.get(Hl)));break;case"delete":u||(l(o.get(Rs)),hr(n)&&l(o.get(Hl)));break;case"set":hr(n)&&l(o.get(Rs));break}}Bu()}function gy(n,t){const e=ea.get(n);return e&&e.get(t)}function Xs(n){const t=Rt(n);return t===n?t:(fe(t,"iterate",Oi),Fe(n)?t:t.map(Qe))}function Oa(n){return fe(n=Rt(n),"iterate",Oi),n}function jn(n,t){return Sn(n)?En(n)?yr(Qe(t)):yr(t):Qe(t)}const _y={__proto__:null,[Symbol.iterator](){return Al(this,Symbol.iterator,n=>jn(this,n))},concat(...n){return Xs(this).concat(...n.map(t=>ft(t)?Xs(t):t))},entries(){return Al(this,"entries",n=>(n[1]=jn(this,n[1]),n))},every(n,t){return pn(this,"every",n,t,void 0,arguments)},filter(n,t){return pn(this,"filter",n,t,e=>e.map(s=>jn(this,s)),arguments)},find(n,t){return pn(this,"find",n,t,e=>jn(this,e),arguments)},findIndex(n,t){return pn(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return pn(this,"findLast",n,t,e=>jn(this,e),arguments)},findLastIndex(n,t){return pn(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return pn(this,"forEach",n,t,void 0,arguments)},includes(...n){return Sl(this,"includes",n)},indexOf(...n){return Sl(this,"indexOf",n)},join(n){return Xs(this).join(n)},lastIndexOf(...n){return Sl(this,"lastIndexOf",n)},map(n,t){return pn(this,"map",n,t,void 0,arguments)},pop(){return ni(this,"pop")},push(...n){return ni(this,"push",n)},reduce(n,...t){return Nh(this,"reduce",n,t)},reduceRight(n,...t){return Nh(this,"reduceRight",n,t)},shift(){return ni(this,"shift")},some(n,t){return pn(this,"some",n,t,void 0,arguments)},splice(...n){return ni(this,"splice",n)},toReversed(){return Xs(this).toReversed()},toSorted(n){return Xs(this).toSorted(n)},toSpliced(...n){return Xs(this).toSpliced(...n)},unshift(...n){return ni(this,"unshift",n)},values(){return Al(this,"values",n=>jn(this,n))}};function Al(n,t,e){const s=Oa(n),r=s[t]();return s!==n&&!Fe(n)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.done||(i.value=e(i.value)),i}),r}const yy=Array.prototype;function pn(n,t,e,s,r,i){const o=Oa(n),l=o!==n&&!Fe(n),u=o[t];if(u!==yy[t]){const p=u.apply(n,i);return l?Qe(p):p}let c=e;o!==n&&(l?c=function(p,y){return e.call(this,jn(n,p),y,n)}:e.length>2&&(c=function(p,y){return e.call(this,p,y,n)}));const d=u.call(o,c,s);return l&&r?r(d):d}function Nh(n,t,e,s){const r=Oa(n);let i=e;return r!==n&&(Fe(n)?e.length>3&&(i=function(o,l,u){return e.call(this,o,l,u,n)}):i=function(o,l,u){return e.call(this,o,jn(n,l),u,n)}),r[t](i,...s)}function Sl(n,t,e){const s=Rt(n);fe(s,"iterate",Oi);const r=s[t](...e);return(r===-1||r===!1)&&Fa(e[0])?(e[0]=Rt(e[0]),s[t](...e)):r}function ni(n,t,e=[]){wn(),Lu();const s=Rt(n)[t].apply(n,e);return Bu(),An(),s}const vy=Nu("__proto__,__v_isRef,__isVue"),hp=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(hn));function Ey(n){hn(n)||(n=String(n));const t=Rt(this);return fe(t,"has",n),t.hasOwnProperty(n)}class dp{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,s){if(e==="__v_skip")return t.__v_skip;const r=this._isReadonly,i=this._isShallow;if(e==="__v_isReactive")return!r;if(e==="__v_isReadonly")return r;if(e==="__v_isShallow")return i;if(e==="__v_raw")return s===(r?i?Cy:gp:i?mp:pp).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const o=ft(t);if(!r){let u;if(o&&(u=_y[e]))return u;if(e==="hasOwnProperty")return Ey}const l=Reflect.get(t,e,Gt(t)?t:s);if((hn(e)?hp.has(e):vy(e))||(r||fe(t,"get",e),i))return l;if(Gt(l)){const u=o&&Da(e)?l:l.value;return r&&Ut(u)?Wl(u):u}return Ut(l)?r?Wl(l):_r(l):l}}class fp extends dp{constructor(t=!1){super(!1,t)}set(t,e,s,r){let i=t[e];const o=ft(t)&&Da(e);if(!this._isShallow){const c=Sn(i);if(!Fe(s)&&!Sn(s)&&(i=Rt(i),s=Rt(s)),!o&&Gt(i)&&!Gt(s))return c||(i.value=s),!0}const l=o?Number(e)<t.length:Ct(t,e),u=Reflect.set(t,e,s,Gt(t)?t:r);return t===Rt(r)&&(l?Wn(s,i)&&gn(t,"set",e,s):gn(t,"add",e,s)),u}deleteProperty(t,e){const s=Ct(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&s&&gn(t,"delete",e,void 0),r}has(t,e){const s=Reflect.has(t,e);return(!hn(e)||!hp.has(e))&&fe(t,"has",e),s}ownKeys(t){return fe(t,"iterate",ft(t)?"length":Rs),Reflect.ownKeys(t)}}class Iy extends dp{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const by=new fp,Ty=new Iy,wy=new fp(!0);const Gl=n=>n,Ro=n=>Reflect.getPrototypeOf(n);function Ay(n,t,e){return function(...s){const r=this.__v_raw,i=Rt(r),o=hr(i),l=n==="entries"||n===Symbol.iterator&&o,u=n==="keys"&&o,c=r[n](...s),d=e?Gl:t?yr:Qe;return!t&&fe(i,"iterate",u?Hl:Rs),{next(){const{value:p,done:y}=c.next();return y?{value:p,done:y}:{value:l?[d(p[0]),d(p[1])]:d(p),done:y}},[Symbol.iterator](){return this}}}}function xo(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Sy(n,t){const e={get(r){const i=this.__v_raw,o=Rt(i),l=Rt(r);n||(Wn(r,l)&&fe(o,"get",r),fe(o,"get",l));const{has:u}=Ro(o),c=t?Gl:n?yr:Qe;if(u.call(o,r))return c(i.get(r));if(u.call(o,l))return c(i.get(l));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!n&&fe(Rt(r),"iterate",Rs),r.size},has(r){const i=this.__v_raw,o=Rt(i),l=Rt(r);return n||(Wn(r,l)&&fe(o,"has",r),fe(o,"has",l)),r===l?i.has(r):i.has(r)||i.has(l)},forEach(r,i){const o=this,l=o.__v_raw,u=Rt(l),c=t?Gl:n?yr:Qe;return!n&&fe(u,"iterate",Rs),l.forEach((d,p)=>r.call(i,c(d),c(p),o))}};return me(e,n?{add:xo("add"),set:xo("set"),delete:xo("delete"),clear:xo("clear")}:{add(r){!t&&!Fe(r)&&!Sn(r)&&(r=Rt(r));const i=Rt(this);return Ro(i).has.call(i,r)||(i.add(r),gn(i,"add",r,r)),this},set(r,i){!t&&!Fe(i)&&!Sn(i)&&(i=Rt(i));const o=Rt(this),{has:l,get:u}=Ro(o);let c=l.call(o,r);c||(r=Rt(r),c=l.call(o,r));const d=u.call(o,r);return o.set(r,i),c?Wn(i,d)&&gn(o,"set",r,i):gn(o,"add",r,i),this},delete(r){const i=Rt(this),{has:o,get:l}=Ro(i);let u=o.call(i,r);u||(r=Rt(r),u=o.call(i,r)),l&&l.call(i,r);const c=i.delete(r);return u&&gn(i,"delete",r,void 0),c},clear(){const r=Rt(this),i=r.size!==0,o=r.clear();return i&&gn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=Ay(r,n,t)}),e}function ju(n,t){const e=Sy(n,t);return(s,r,i)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?s:Reflect.get(Ct(e,r)&&r in s?e:s,r,i)}const Ry={get:ju(!1,!1)},xy={get:ju(!1,!0)},Py={get:ju(!0,!1)};const pp=new WeakMap,mp=new WeakMap,gp=new WeakMap,Cy=new WeakMap;function Vy(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Dy(n){return n.__v_skip||!Object.isExtensible(n)?0:Vy(ny(n))}function _r(n){return Sn(n)?n:qu(n,!1,by,Ry,pp)}function ky(n){return qu(n,!1,wy,xy,mp)}function Wl(n){return qu(n,!0,Ty,Py,gp)}function qu(n,t,e,s,r){if(!Ut(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const i=Dy(n);if(i===0)return n;const o=r.get(n);if(o)return o;const l=new Proxy(n,i===2?s:e);return r.set(n,l),l}function En(n){return Sn(n)?En(n.__v_raw):!!(n&&n.__v_isReactive)}function Sn(n){return!!(n&&n.__v_isReadonly)}function Fe(n){return!!(n&&n.__v_isShallow)}function Fa(n){return n?!!n.__v_raw:!1}function Rt(n){const t=n&&n.__v_raw;return t?Rt(t):n}function zu(n){return!Ct(n,"__v_skip")&&Object.isExtensible(n)&&Xf(n,"__v_skip",!0),n}const Qe=n=>Ut(n)?_r(n):n,yr=n=>Ut(n)?Wl(n):n;function Gt(n){return n?n.__v_isRef===!0:!1}function Pt(n){return Ny(n,!1)}function Ny(n,t){return Gt(n)?n:new My(n,t)}class My{constructor(t,e){this.dep=new $u,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:Rt(t),this._value=e?t:Qe(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,s=this.__v_isShallow||Fe(t)||Sn(t);t=s?t:Rt(t),Wn(t,e)&&(this._rawValue=t,this._value=s?t:Qe(t),this.dep.trigger())}}function ve(n){return Gt(n)?n.value:n}const Oy={get:(n,t,e)=>t==="__v_raw"?n:ve(Reflect.get(n,t,e)),set:(n,t,e,s)=>{const r=n[t];return Gt(r)&&!Gt(e)?(r.value=e,!0):Reflect.set(n,t,e,s)}};function _p(n){return En(n)?n:new Proxy(n,Oy)}function Fy(n){const t=ft(n)?new Array(n.length):{};for(const e in n)t[e]=By(n,e);return t}class Ly{constructor(t,e,s){this._object=t,this._key=e,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0,this._raw=Rt(t);let r=!0,i=t;if(!ft(t)||!Da(String(e)))do r=!Fa(i)||Fe(i);while(r&&(i=i.__v_raw));this._shallow=r}get value(){let t=this._object[this._key];return this._shallow&&(t=ve(t)),this._value=t===void 0?this._defaultValue:t}set value(t){if(this._shallow&&Gt(this._raw[this._key])){const e=this._object[this._key];if(Gt(e)){e.value=t;return}}this._object[this._key]=t}get dep(){return gy(this._raw,this._key)}}function By(n,t,e){return new Ly(n,t,e)}class Uy{constructor(t,e,s){this.fn=t,this.setter=e,this._value=void 0,this.dep=new $u(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Mi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Bt!==this)return ip(this,!0),!0}get value(){const t=this.dep.track();return lp(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function $y(n,t,e=!1){let s,r;return gt(n)?s=n:(s=n.get,r=n.set),new Uy(s,r,e)}const Po={},na=new WeakMap;let _s;function jy(n,t=!1,e=_s){if(e){let s=na.get(e);s||na.set(e,s=[]),s.push(n)}}function qy(n,t,e=Lt){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:l,call:u}=e,c=W=>r?W:Fe(W)||r===!1||r===0?_n(W,1):_n(W);let d,p,y,A,k=!1,R=!1;if(Gt(n)?(p=()=>n.value,k=Fe(n)):En(n)?(p=()=>c(n),k=!0):ft(n)?(R=!0,k=n.some(W=>En(W)||Fe(W)),p=()=>n.map(W=>{if(Gt(W))return W.value;if(En(W))return c(W);if(gt(W))return u?u(W,2):W()})):gt(n)?t?p=u?()=>u(n,2):n:p=()=>{if(y){wn();try{y()}finally{An()}}const W=_s;_s=d;try{return u?u(n,3,[A]):n(A)}finally{_s=W}}:p=an,t&&r){const W=p,nt=r===!0?1/0:r;p=()=>_n(W(),nt)}const D=np(),X=()=>{d.stop(),D&&D.active&&Ou(D.effects,d)};if(i&&t){const W=t;t=(...nt)=>{W(...nt),X()}}let G=R?new Array(n.length).fill(Po):Po;const Q=W=>{if(!(!(d.flags&1)||!d.dirty&&!W))if(t){const nt=d.run();if(r||k||(R?nt.some((ut,w)=>Wn(ut,G[w])):Wn(nt,G))){y&&y();const ut=_s;_s=d;try{const w=[nt,G===Po?void 0:R&&G[0]===Po?[]:G,A];G=nt,u?u(t,3,w):t(...w)}finally{_s=ut}}}else d.run()};return l&&l(Q),d=new sp(p),d.scheduler=o?()=>o(Q,!1):Q,A=W=>jy(W,!1,d),y=d.onStop=()=>{const W=na.get(d);if(W){if(u)u(W,4);else for(const nt of W)nt();na.delete(d)}},t?s?Q(!0):G=d.run():o?o(Q.bind(null,!0),!0):d.run(),X.pause=d.pause.bind(d),X.resume=d.resume.bind(d),X.stop=X,X}function _n(n,t=1/0,e){if(t<=0||!Ut(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,Gt(n))_n(n.value,t,e);else if(ft(n))for(let s=0;s<n.length;s++)_n(n[s],t,e);else if(Va(n)||hr(n))n.forEach(s=>{_n(s,t,e)});else if(Wf(n)){for(const s in n)_n(n[s],t,e);for(const s of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,s)&&_n(n[s],t,e)}return n}/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ro(n,t,e,s){try{return s?n(...s):n()}catch(r){La(r,t,e)}}function dn(n,t,e,s){if(gt(n)){const r=ro(n,t,e,s);return r&&Hf(r)&&r.catch(i=>{La(i,t,e)}),r}if(ft(n)){const r=[];for(let i=0;i<n.length;i++)r.push(dn(n[i],t,e,s));return r}}function La(n,t,e,s=!0){const r=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||Lt;if(t){let l=t.parent;const u=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](n,u,c)===!1)return}l=l.parent}if(i){wn(),ro(i,null,10,[n,u,c]),An();return}}zy(n,e,r,s,o)}function zy(n,t,e,s=!0,r=!1){if(r)throw n;console.error(n)}const Ee=[];let en=-1;const dr=[];let qn=null,rr=0;const yp=Promise.resolve();let sa=null;function Ku(n){const t=sa||yp;return n?t.then(this?n.bind(this):n):t}function Ky(n){let t=en+1,e=Ee.length;for(;t<e;){const s=t+e>>>1,r=Ee[s],i=Fi(r);i<n||i===n&&r.flags&2?t=s+1:e=s}return t}function Hu(n){if(!(n.flags&1)){const t=Fi(n),e=Ee[Ee.length-1];!e||!(n.flags&2)&&t>=Fi(e)?Ee.push(n):Ee.splice(Ky(t),0,n),n.flags|=1,vp()}}function vp(){sa||(sa=yp.then(Ip))}function Hy(n){ft(n)?dr.push(...n):qn&&n.id===-1?qn.splice(rr+1,0,n):n.flags&1||(dr.push(n),n.flags|=1),vp()}function Mh(n,t,e=en+1){for(;e<Ee.length;e++){const s=Ee[e];if(s&&s.flags&2){if(n&&s.id!==n.uid)continue;Ee.splice(e,1),e--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Ep(n){if(dr.length){const t=[...new Set(dr)].sort((e,s)=>Fi(e)-Fi(s));if(dr.length=0,qn){qn.push(...t);return}for(qn=t,rr=0;rr<qn.length;rr++){const e=qn[rr];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}qn=null,rr=0}}const Fi=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Ip(n){try{for(en=0;en<Ee.length;en++){const t=Ee[en];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),ro(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;en<Ee.length;en++){const t=Ee[en];t&&(t.flags&=-2)}en=-1,Ee.length=0,Ep(),sa=null,(Ee.length||dr.length)&&Ip()}}let $e=null,bp=null;function ra(n){const t=$e;return $e=n,bp=n&&n.type.__scopeId||null,t}function Gy(n,t=$e,e){if(!t||n._n)return n;const s=(...r)=>{s._d&&Kh(-1);const i=ra(t);let o;try{o=n(...r)}finally{ra(i),s._d&&Kh(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function _t(n,t){if($e===null)return n;const e=ja($e),s=n.dirs||(n.dirs=[]);for(let r=0;r<t.length;r++){let[i,o,l,u=Lt]=t[r];i&&(gt(i)&&(i={mounted:i,updated:i}),i.deep&&_n(o),s.push({dir:i,instance:e,value:o,oldValue:void 0,arg:l,modifiers:u}))}return n}function ps(n,t,e,s){const r=n.dirs,i=t&&t.dirs;for(let o=0;o<r.length;o++){const l=r[o];i&&(l.oldValue=i[o].value);let u=l.dir[s];u&&(wn(),dn(u,e,8,[n.el,l,n,t]),An())}}const Wy=Symbol("_vte"),Qy=n=>n.__isTeleport,Xy=Symbol("_leaveCb");function Gu(n,t){n.shapeFlag&6&&n.component?(n.transition=t,Gu(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function io(n,t){return gt(n)?me({name:n.name},t,{setup:n}):n}function Tp(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const ia=new WeakMap;function vi(n,t,e,s,r=!1){if(ft(n)){n.forEach((k,R)=>vi(k,t&&(ft(t)?t[R]:t),e,s,r));return}if(Ei(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&vi(n,t,e,s.component.subTree);return}const i=s.shapeFlag&4?ja(s.component):s.el,o=r?null:i,{i:l,r:u}=n,c=t&&t.r,d=l.refs===Lt?l.refs={}:l.refs,p=l.setupState,y=Rt(p),A=p===Lt?Kf:k=>Ct(y,k);if(c!=null&&c!==u){if(Oh(t),Xt(c))d[c]=null,A(c)&&(p[c]=null);else if(Gt(c)){c.value=null;const k=t;k.k&&(d[k.k]=null)}}if(gt(u))ro(u,l,12,[o,d]);else{const k=Xt(u),R=Gt(u);if(k||R){const D=()=>{if(n.f){const X=k?A(u)?p[u]:d[u]:u.value;if(r)ft(X)&&Ou(X,i);else if(ft(X))X.includes(i)||X.push(i);else if(k)d[u]=[i],A(u)&&(p[u]=d[u]);else{const G=[i];u.value=G,n.k&&(d[n.k]=G)}}else k?(d[u]=o,A(u)&&(p[u]=o)):R&&(u.value=o,n.k&&(d[n.k]=o))};if(o){const X=()=>{D(),ia.delete(n)};X.id=-1,ia.set(n,X),Ve(X,e)}else Oh(n),D()}}}function Oh(n){const t=ia.get(n);t&&(t.flags|=8,ia.delete(n))}Ma().requestIdleCallback;Ma().cancelIdleCallback;const Ei=n=>!!n.type.__asyncLoader,wp=n=>n.type.__isKeepAlive;function Jy(n,t){Ap(n,"a",t)}function Yy(n,t){Ap(n,"da",t)}function Ap(n,t,e=be){const s=n.__wdc||(n.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Ba(t,s,e),e){let r=e.parent;for(;r&&r.parent;)wp(r.parent.vnode)&&Zy(s,t,e,r),r=r.parent}}function Zy(n,t,e,s){const r=Ba(t,n,s,!0);Sp(()=>{Ou(s[t],r)},e)}function Ba(n,t,e=be,s=!1){if(e){const r=e[n]||(e[n]=[]),i=t.__weh||(t.__weh=(...o)=>{wn();const l=oo(e),u=dn(t,e,n,o);return l(),An(),u});return s?r.unshift(i):r.push(i),i}}const Cn=n=>(t,e=be)=>{(!Bi||n==="sp")&&Ba(n,(...s)=>t(...s),e)},tv=Cn("bm"),ev=Cn("m"),nv=Cn("bu"),sv=Cn("u"),rv=Cn("bum"),Sp=Cn("um"),iv=Cn("sp"),ov=Cn("rtg"),av=Cn("rtc");function lv(n,t=be){Ba("ec",n,t)}const uv=Symbol.for("v-ndc");function vr(n,t,e,s){let r;const i=e,o=ft(n);if(o||Xt(n)){const l=o&&En(n);let u=!1,c=!1;l&&(u=!Fe(n),c=Sn(n),n=Oa(n)),r=new Array(n.length);for(let d=0,p=n.length;d<p;d++)r[d]=t(u?c?yr(Qe(n[d])):Qe(n[d]):n[d],d,void 0,i)}else if(typeof n=="number"){r=new Array(n);for(let l=0;l<n;l++)r[l]=t(l+1,l,void 0,i)}else if(Ut(n))if(n[Symbol.iterator])r=Array.from(n,(l,u)=>t(l,u,void 0,i));else{const l=Object.keys(n);r=new Array(l.length);for(let u=0,c=l.length;u<c;u++){const d=l[u];r[u]=t(n[d],d,u,i)}}else r=[];return r}const Ql=n=>n?Wp(n)?ja(n):Ql(n.parent):null,Ii=me(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ql(n.parent),$root:n=>Ql(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>xp(n),$forceUpdate:n=>n.f||(n.f=()=>{Hu(n.update)}),$nextTick:n=>n.n||(n.n=Ku.bind(n.proxy)),$watch:n=>bv.bind(n)}),Rl=(n,t)=>n!==Lt&&!n.__isScriptSetup&&Ct(n,t),cv={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:s,data:r,props:i,accessCache:o,type:l,appContext:u}=n;if(t[0]!=="$"){const y=o[t];if(y!==void 0)switch(y){case 1:return s[t];case 2:return r[t];case 4:return e[t];case 3:return i[t]}else{if(Rl(s,t))return o[t]=1,s[t];if(r!==Lt&&Ct(r,t))return o[t]=2,r[t];if(Ct(i,t))return o[t]=3,i[t];if(e!==Lt&&Ct(e,t))return o[t]=4,e[t];Xl&&(o[t]=0)}}const c=Ii[t];let d,p;if(c)return t==="$attrs"&&fe(n.attrs,"get",""),c(n);if((d=l.__cssModules)&&(d=d[t]))return d;if(e!==Lt&&Ct(e,t))return o[t]=4,e[t];if(p=u.config.globalProperties,Ct(p,t))return p[t]},set({_:n},t,e){const{data:s,setupState:r,ctx:i}=n;return Rl(r,t)?(r[t]=e,!0):s!==Lt&&Ct(s,t)?(s[t]=e,!0):Ct(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(i[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:s,appContext:r,props:i,type:o}},l){let u;return!!(e[l]||n!==Lt&&l[0]!=="$"&&Ct(n,l)||Rl(t,l)||Ct(i,l)||Ct(s,l)||Ct(Ii,l)||Ct(r.config.globalProperties,l)||(u=o.__cssModules)&&u[l])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:Ct(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Fh(n){return ft(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Xl=!0;function hv(n){const t=xp(n),e=n.proxy,s=n.ctx;Xl=!1,t.beforeCreate&&Lh(t.beforeCreate,n,"bc");const{data:r,computed:i,methods:o,watch:l,provide:u,inject:c,created:d,beforeMount:p,mounted:y,beforeUpdate:A,updated:k,activated:R,deactivated:D,beforeDestroy:X,beforeUnmount:G,destroyed:Q,unmounted:W,render:nt,renderTracked:ut,renderTriggered:w,errorCaptured:v,serverPrefetch:_,expose:b,inheritAttrs:I,components:P,directives:E,filters:it}=t;if(c&&dv(c,s,null),o)for(const x in o){const H=o[x];gt(H)&&(s[x]=H.bind(e))}if(r){const x=r.call(e,e);Ut(x)&&(n.data=_r(x))}if(Xl=!0,i)for(const x in i){const H=i[x],Ot=gt(H)?H.bind(e,e):gt(H.get)?H.get.bind(e,e):an,Re=!gt(H)&&gt(H.set)?H.set.bind(e):an,Ae=De({get:Ot,set:Re});Object.defineProperty(s,x,{enumerable:!0,configurable:!0,get:()=>Ae.value,set:ge=>Ae.value=ge})}if(l)for(const x in l)Rp(l[x],s,e,x);if(u){const x=gt(u)?u.call(e):u;Reflect.ownKeys(x).forEach(H=>{yv(H,x[H])})}d&&Lh(d,n,"c");function L(x,H){ft(H)?H.forEach(Ot=>x(Ot.bind(e))):H&&x(H.bind(e))}if(L(tv,p),L(ev,y),L(nv,A),L(sv,k),L(Jy,R),L(Yy,D),L(lv,v),L(av,ut),L(ov,w),L(rv,G),L(Sp,W),L(iv,_),ft(b))if(b.length){const x=n.exposed||(n.exposed={});b.forEach(H=>{Object.defineProperty(x,H,{get:()=>e[H],set:Ot=>e[H]=Ot,enumerable:!0})})}else n.exposed||(n.exposed={});nt&&n.render===an&&(n.render=nt),I!=null&&(n.inheritAttrs=I),P&&(n.components=P),E&&(n.directives=E),_&&Tp(n)}function dv(n,t,e=an){ft(n)&&(n=Jl(n));for(const s in n){const r=n[s];let i;Ut(r)?"default"in r?i=bi(r.from||s,r.default,!0):i=bi(r.from||s):i=bi(r),Gt(i)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[s]=i}}function Lh(n,t,e){dn(ft(n)?n.map(s=>s.bind(t.proxy)):n.bind(t.proxy),t,e)}function Rp(n,t,e,s){let r=s.includes(".")?Vp(e,s):()=>e[s];if(Xt(n)){const i=t[n];gt(i)&&yn(r,i)}else if(gt(n))yn(r,n.bind(e));else if(Ut(n))if(ft(n))n.forEach(i=>Rp(i,t,e,s));else{const i=gt(n.handler)?n.handler.bind(e):t[n.handler];gt(i)&&yn(r,i,n)}}function xp(n){const t=n.type,{mixins:e,extends:s}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=n.appContext,l=i.get(t);let u;return l?u=l:!r.length&&!e&&!s?u=t:(u={},r.length&&r.forEach(c=>oa(u,c,o,!0)),oa(u,t,o)),Ut(t)&&i.set(t,u),u}function oa(n,t,e,s=!1){const{mixins:r,extends:i}=t;i&&oa(n,i,e,!0),r&&r.forEach(o=>oa(n,o,e,!0));for(const o in t)if(!(s&&o==="expose")){const l=fv[o]||e&&e[o];n[o]=l?l(n[o],t[o]):t[o]}return n}const fv={data:Bh,props:Uh,emits:Uh,methods:ui,computed:ui,beforeCreate:ye,created:ye,beforeMount:ye,mounted:ye,beforeUpdate:ye,updated:ye,beforeDestroy:ye,beforeUnmount:ye,destroyed:ye,unmounted:ye,activated:ye,deactivated:ye,errorCaptured:ye,serverPrefetch:ye,components:ui,directives:ui,watch:mv,provide:Bh,inject:pv};function Bh(n,t){return t?n?function(){return me(gt(n)?n.call(this,this):n,gt(t)?t.call(this,this):t)}:t:n}function pv(n,t){return ui(Jl(n),Jl(t))}function Jl(n){if(ft(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function ye(n,t){return n?[...new Set([].concat(n,t))]:t}function ui(n,t){return n?me(Object.create(null),n,t):t}function Uh(n,t){return n?ft(n)&&ft(t)?[...new Set([...n,...t])]:me(Object.create(null),Fh(n),Fh(t??{})):t}function mv(n,t){if(!n)return t;if(!t)return n;const e=me(Object.create(null),n);for(const s in t)e[s]=ye(n[s],t[s]);return e}function Pp(){return{app:null,config:{isNativeTag:Kf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let gv=0;function _v(n,t){return function(s,r=null){gt(s)||(s=me({},s)),r!=null&&!Ut(r)&&(r=null);const i=Pp(),o=new WeakSet,l=[];let u=!1;const c=i.app={_uid:gv++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:tE,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&gt(d.install)?(o.add(d),d.install(c,...p)):gt(d)&&(o.add(d),d(c,...p))),c},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),c},component(d,p){return p?(i.components[d]=p,c):i.components[d]},directive(d,p){return p?(i.directives[d]=p,c):i.directives[d]},mount(d,p,y){if(!u){const A=c._ceVNode||ln(s,r);return A.appContext=i,y===!0?y="svg":y===!1&&(y=void 0),n(A,d,y),u=!0,c._container=d,d.__vue_app__=c,ja(A.component)}},onUnmount(d){l.push(d)},unmount(){u&&(dn(l,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(d,p){return i.provides[d]=p,c},runWithContext(d){const p=xs;xs=c;try{return d()}finally{xs=p}}};return c}}let xs=null;function yv(n,t){if(be){let e=be.provides;const s=be.parent&&be.parent.provides;s===e&&(e=be.provides=Object.create(s)),e[n]=t}}function bi(n,t,e=!1){const s=Gp();if(s||xs){let r=xs?xs._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return e&&gt(t)?t.call(s&&s.proxy):t}}function vv(){return!!(Gp()||xs)}const Ev=Symbol.for("v-scx"),Iv=()=>bi(Ev);function yn(n,t,e){return Cp(n,t,e)}function Cp(n,t,e=Lt){const{immediate:s,deep:r,flush:i,once:o}=e,l=me({},e),u=t&&s||!t&&i!=="post";let c;if(Bi){if(i==="sync"){const A=Iv();c=A.__watcherHandles||(A.__watcherHandles=[])}else if(!u){const A=()=>{};return A.stop=an,A.resume=an,A.pause=an,A}}const d=be;l.call=(A,k,R)=>dn(A,d,k,R);let p=!1;i==="post"?l.scheduler=A=>{Ve(A,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(A,k)=>{k?A():Hu(A)}),l.augmentJob=A=>{t&&(A.flags|=4),p&&(A.flags|=2,d&&(A.id=d.uid,A.i=d))};const y=qy(n,t,l);return Bi&&(c?c.push(y):u&&y()),y}function bv(n,t,e){const s=this.proxy,r=Xt(n)?n.includes(".")?Vp(s,n):()=>s[n]:n.bind(s,s);let i;gt(t)?i=t:(i=t.handler,e=t);const o=oo(this),l=Cp(r,i.bind(s),e);return o(),l}function Vp(n,t){const e=t.split(".");return()=>{let s=n;for(let r=0;r<e.length&&s;r++)s=s[e[r]];return s}}const Tv=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Zn(t)}Modifiers`]||n[`${$s(t)}Modifiers`];function wv(n,t,...e){if(n.isUnmounted)return;const s=n.vnode.props||Lt;let r=e;const i=t.startsWith("update:"),o=i&&Tv(s,t.slice(7));o&&(o.trim&&(r=e.map(d=>Xt(d)?d.trim():d)),o.number&&(r=e.map(Na)));let l,u=s[l=bl(t)]||s[l=bl(Zn(t))];!u&&i&&(u=s[l=bl($s(t))]),u&&dn(u,n,6,r);const c=s[l+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[l])return;n.emitted[l]=!0,dn(c,n,6,r)}}const Av=new WeakMap;function Dp(n,t,e=!1){const s=e?Av:t.emitsCache,r=s.get(n);if(r!==void 0)return r;const i=n.emits;let o={},l=!1;if(!gt(n)){const u=c=>{const d=Dp(c,t,!0);d&&(l=!0,me(o,d))};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}return!i&&!l?(Ut(n)&&s.set(n,null),null):(ft(i)?i.forEach(u=>o[u]=null):me(o,i),Ut(n)&&s.set(n,o),o)}function Ua(n,t){return!n||!Ca(t)?!1:(t=t.slice(2).replace(/Once$/,""),Ct(n,t[0].toLowerCase()+t.slice(1))||Ct(n,$s(t))||Ct(n,t))}function $h(n){const{type:t,vnode:e,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:l,emit:u,render:c,renderCache:d,props:p,data:y,setupState:A,ctx:k,inheritAttrs:R}=n,D=ra(n);let X,G;try{if(e.shapeFlag&4){const W=r||s,nt=W;X=sn(c.call(nt,W,d,p,A,y,k)),G=l}else{const W=t;X=sn(W.length>1?W(p,{attrs:l,slots:o,emit:u}):W(p,null)),G=t.props?l:Sv(l)}}catch(W){Ti.length=0,La(W,n,1),X=ln(ts)}let Q=X;if(G&&R!==!1){const W=Object.keys(G),{shapeFlag:nt}=Q;W.length&&nt&7&&(i&&W.some(Mu)&&(G=Rv(G,i)),Q=Er(Q,G,!1,!0))}return e.dirs&&(Q=Er(Q,null,!1,!0),Q.dirs=Q.dirs?Q.dirs.concat(e.dirs):e.dirs),e.transition&&Gu(Q,e.transition),X=Q,ra(D),X}const Sv=n=>{let t;for(const e in n)(e==="class"||e==="style"||Ca(e))&&((t||(t={}))[e]=n[e]);return t},Rv=(n,t)=>{const e={};for(const s in n)(!Mu(s)||!(s.slice(9)in t))&&(e[s]=n[s]);return e};function xv(n,t,e){const{props:s,children:r,component:i}=n,{props:o,children:l,patchFlag:u}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&u>=0){if(u&1024)return!0;if(u&16)return s?jh(s,o,c):!!o;if(u&8){const d=t.dynamicProps;for(let p=0;p<d.length;p++){const y=d[p];if(o[y]!==s[y]&&!Ua(c,y))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?jh(s,o,c):!0:!!o;return!1}function jh(n,t,e){const s=Object.keys(t);if(s.length!==Object.keys(n).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(t[i]!==n[i]&&!Ua(e,i))return!0}return!1}function Pv({vnode:n,parent:t},e){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.el=n.el),s===n)(n=t.vnode).el=e,t=t.parent;else break}}const kp={},Np=()=>Object.create(kp),Mp=n=>Object.getPrototypeOf(n)===kp;function Cv(n,t,e,s=!1){const r={},i=Np();n.propsDefaults=Object.create(null),Op(n,t,r,i);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);e?n.props=s?r:ky(r):n.type.props?n.props=r:n.props=i,n.attrs=i}function Vv(n,t,e,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=n,l=Rt(r),[u]=n.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const d=n.vnode.dynamicProps;for(let p=0;p<d.length;p++){let y=d[p];if(Ua(n.emitsOptions,y))continue;const A=t[y];if(u)if(Ct(i,y))A!==i[y]&&(i[y]=A,c=!0);else{const k=Zn(y);r[k]=Yl(u,l,k,A,n,!1)}else A!==i[y]&&(i[y]=A,c=!0)}}}else{Op(n,t,r,i)&&(c=!0);let d;for(const p in l)(!t||!Ct(t,p)&&((d=$s(p))===p||!Ct(t,d)))&&(u?e&&(e[p]!==void 0||e[d]!==void 0)&&(r[p]=Yl(u,l,p,void 0,n,!0)):delete r[p]);if(i!==l)for(const p in i)(!t||!Ct(t,p))&&(delete i[p],c=!0)}c&&gn(n.attrs,"set","")}function Op(n,t,e,s){const[r,i]=n.propsOptions;let o=!1,l;if(t)for(let u in t){if(gi(u))continue;const c=t[u];let d;r&&Ct(r,d=Zn(u))?!i||!i.includes(d)?e[d]=c:(l||(l={}))[d]=c:Ua(n.emitsOptions,u)||(!(u in s)||c!==s[u])&&(s[u]=c,o=!0)}if(i){const u=Rt(e),c=l||Lt;for(let d=0;d<i.length;d++){const p=i[d];e[p]=Yl(r,u,p,c[p],n,!Ct(c,p))}}return o}function Yl(n,t,e,s,r,i){const o=n[e];if(o!=null){const l=Ct(o,"default");if(l&&s===void 0){const u=o.default;if(o.type!==Function&&!o.skipFactory&&gt(u)){const{propsDefaults:c}=r;if(e in c)s=c[e];else{const d=oo(r);s=c[e]=u.call(null,t),d()}}else s=u;r.ce&&r.ce._setProp(e,s)}o[0]&&(i&&!l?s=!1:o[1]&&(s===""||s===$s(e))&&(s=!0))}return s}const Dv=new WeakMap;function Fp(n,t,e=!1){const s=e?Dv:t.propsCache,r=s.get(n);if(r)return r;const i=n.props,o={},l=[];let u=!1;if(!gt(n)){const d=p=>{u=!0;const[y,A]=Fp(p,t,!0);me(o,y),A&&l.push(...A)};!e&&t.mixins.length&&t.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!i&&!u)return Ut(n)&&s.set(n,cr),cr;if(ft(i))for(let d=0;d<i.length;d++){const p=Zn(i[d]);qh(p)&&(o[p]=Lt)}else if(i)for(const d in i){const p=Zn(d);if(qh(p)){const y=i[d],A=o[p]=ft(y)||gt(y)?{type:y}:me({},y),k=A.type;let R=!1,D=!0;if(ft(k))for(let X=0;X<k.length;++X){const G=k[X],Q=gt(G)&&G.name;if(Q==="Boolean"){R=!0;break}else Q==="String"&&(D=!1)}else R=gt(k)&&k.name==="Boolean";A[0]=R,A[1]=D,(R||Ct(A,"default"))&&l.push(p)}}const c=[o,l];return Ut(n)&&s.set(n,c),c}function qh(n){return n[0]!=="$"&&!gi(n)}const Wu=n=>n==="_"||n==="_ctx"||n==="$stable",Qu=n=>ft(n)?n.map(sn):[sn(n)],kv=(n,t,e)=>{if(t._n)return t;const s=Gy((...r)=>Qu(t(...r)),e);return s._c=!1,s},Lp=(n,t,e)=>{const s=n._ctx;for(const r in n){if(Wu(r))continue;const i=n[r];if(gt(i))t[r]=kv(r,i,s);else if(i!=null){const o=Qu(i);t[r]=()=>o}}},Bp=(n,t)=>{const e=Qu(t);n.slots.default=()=>e},Up=(n,t,e)=>{for(const s in t)(e||!Wu(s))&&(n[s]=t[s])},Nv=(n,t,e)=>{const s=n.slots=Np();if(n.vnode.shapeFlag&32){const r=t._;r?(Up(s,t,e),e&&Xf(s,"_",r,!0)):Lp(t,s)}else t&&Bp(n,t)},Mv=(n,t,e)=>{const{vnode:s,slots:r}=n;let i=!0,o=Lt;if(s.shapeFlag&32){const l=t._;l?e&&l===1?i=!1:Up(r,t,e):(i=!t.$stable,Lp(t,r)),o=t}else t&&(Bp(n,t),o={default:1});if(i)for(const l in r)!Wu(l)&&o[l]==null&&delete r[l]},Ve=Uv;function Ov(n){return Fv(n)}function Fv(n,t){const e=Ma();e.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:l,createComment:u,setText:c,setElementText:d,parentNode:p,nextSibling:y,setScopeId:A=an,insertStaticContent:k}=n,R=(T,S,M,z=null,B=null,U=null,Y=void 0,q=null,j=!!S.dynamicChildren)=>{if(T===S)return;T&&!si(T,S)&&(z=Je(T),ge(T,B,U,!0),T=null),S.patchFlag===-2&&(j=!1,S.dynamicChildren=null);const{type:$,ref:ct,shapeFlag:tt}=S;switch($){case $a:D(T,S,M,z);break;case ts:X(T,S,M,z);break;case Bo:T==null&&G(S,M,z,Y);break;case Ie:P(T,S,M,z,B,U,Y,q,j);break;default:tt&1?nt(T,S,M,z,B,U,Y,q,j):tt&6?E(T,S,M,z,B,U,Y,q,j):(tt&64||tt&128)&&$.process(T,S,M,z,B,U,Y,q,j,ls)}ct!=null&&B?vi(ct,T&&T.ref,U,S||T,!S):ct==null&&T&&T.ref!=null&&vi(T.ref,null,U,T,!0)},D=(T,S,M,z)=>{if(T==null)s(S.el=l(S.children),M,z);else{const B=S.el=T.el;S.children!==T.children&&c(B,S.children)}},X=(T,S,M,z)=>{T==null?s(S.el=u(S.children||""),M,z):S.el=T.el},G=(T,S,M,z)=>{[T.el,T.anchor]=k(T.children,S,M,z,T.el,T.anchor)},Q=({el:T,anchor:S},M,z)=>{let B;for(;T&&T!==S;)B=y(T),s(T,M,z),T=B;s(S,M,z)},W=({el:T,anchor:S})=>{let M;for(;T&&T!==S;)M=y(T),r(T),T=M;r(S)},nt=(T,S,M,z,B,U,Y,q,j)=>{if(S.type==="svg"?Y="svg":S.type==="math"&&(Y="mathml"),T==null)ut(S,M,z,B,U,Y,q,j);else{const $=T.el&&T.el._isVueCE?T.el:null;try{$&&$._beginPatch(),_(T,S,B,U,Y,q,j)}finally{$&&$._endPatch()}}},ut=(T,S,M,z,B,U,Y,q)=>{let j,$;const{props:ct,shapeFlag:tt,transition:ot,dirs:ht}=T;if(j=T.el=o(T.type,U,ct&&ct.is,ct),tt&8?d(j,T.children):tt&16&&v(T.children,j,null,z,B,xl(T,U),Y,q),ht&&ps(T,null,z,"created"),w(j,T,T.scopeId,Y,z),ct){for(const Dt in ct)Dt!=="value"&&!gi(Dt)&&i(j,Dt,null,ct[Dt],U,z);"value"in ct&&i(j,"value",null,ct.value,U),($=ct.onVnodeBeforeMount)&&tn($,z,T)}ht&&ps(T,null,z,"beforeMount");const It=Lv(B,ot);It&&ot.beforeEnter(j),s(j,S,M),(($=ct&&ct.onVnodeMounted)||It||ht)&&Ve(()=>{$&&tn($,z,T),It&&ot.enter(j),ht&&ps(T,null,z,"mounted")},B)},w=(T,S,M,z,B)=>{if(M&&A(T,M),z)for(let U=0;U<z.length;U++)A(T,z[U]);if(B){let U=B.subTree;if(S===U||qp(U.type)&&(U.ssContent===S||U.ssFallback===S)){const Y=B.vnode;w(T,Y,Y.scopeId,Y.slotScopeIds,B.parent)}}},v=(T,S,M,z,B,U,Y,q,j=0)=>{for(let $=j;$<T.length;$++){const ct=T[$]=q?zn(T[$]):sn(T[$]);R(null,ct,S,M,z,B,U,Y,q)}},_=(T,S,M,z,B,U,Y)=>{const q=S.el=T.el;let{patchFlag:j,dynamicChildren:$,dirs:ct}=S;j|=T.patchFlag&16;const tt=T.props||Lt,ot=S.props||Lt;let ht;if(M&&ms(M,!1),(ht=ot.onVnodeBeforeUpdate)&&tn(ht,M,S,T),ct&&ps(S,T,M,"beforeUpdate"),M&&ms(M,!0),(tt.innerHTML&&ot.innerHTML==null||tt.textContent&&ot.textContent==null)&&d(q,""),$?b(T.dynamicChildren,$,q,M,z,xl(S,B),U):Y||H(T,S,q,null,M,z,xl(S,B),U,!1),j>0){if(j&16)I(q,tt,ot,M,B);else if(j&2&&tt.class!==ot.class&&i(q,"class",null,ot.class,B),j&4&&i(q,"style",tt.style,ot.style,B),j&8){const It=S.dynamicProps;for(let Dt=0;Dt<It.length;Dt++){const St=It[Dt],le=tt[St],ue=ot[St];(ue!==le||St==="value")&&i(q,St,le,ue,B,M)}}j&1&&T.children!==S.children&&d(q,S.children)}else!Y&&$==null&&I(q,tt,ot,M,B);((ht=ot.onVnodeUpdated)||ct)&&Ve(()=>{ht&&tn(ht,M,S,T),ct&&ps(S,T,M,"updated")},z)},b=(T,S,M,z,B,U,Y)=>{for(let q=0;q<S.length;q++){const j=T[q],$=S[q],ct=j.el&&(j.type===Ie||!si(j,$)||j.shapeFlag&198)?p(j.el):M;R(j,$,ct,null,z,B,U,Y,!0)}},I=(T,S,M,z,B)=>{if(S!==M){if(S!==Lt)for(const U in S)!gi(U)&&!(U in M)&&i(T,U,S[U],null,B,z);for(const U in M){if(gi(U))continue;const Y=M[U],q=S[U];Y!==q&&U!=="value"&&i(T,U,q,Y,B,z)}"value"in M&&i(T,"value",S.value,M.value,B)}},P=(T,S,M,z,B,U,Y,q,j)=>{const $=S.el=T?T.el:l(""),ct=S.anchor=T?T.anchor:l("");let{patchFlag:tt,dynamicChildren:ot,slotScopeIds:ht}=S;ht&&(q=q?q.concat(ht):ht),T==null?(s($,M,z),s(ct,M,z),v(S.children||[],M,ct,B,U,Y,q,j)):tt>0&&tt&64&&ot&&T.dynamicChildren?(b(T.dynamicChildren,ot,M,B,U,Y,q),(S.key!=null||B&&S===B.subTree)&&$p(T,S,!0)):H(T,S,M,ct,B,U,Y,q,j)},E=(T,S,M,z,B,U,Y,q,j)=>{S.slotScopeIds=q,T==null?S.shapeFlag&512?B.ctx.activate(S,M,z,Y,j):it(S,M,z,B,U,Y,j):O(T,S,j)},it=(T,S,M,z,B,U,Y)=>{const q=T.component=Wv(T,z,B);if(wp(T)&&(q.ctx.renderer=ls),Qv(q,!1,Y),q.asyncDep){if(B&&B.registerDep(q,L,Y),!T.el){const j=q.subTree=ln(ts);X(null,j,S,M),T.placeholder=j.el}}else L(q,T,S,M,B,U,Y)},O=(T,S,M)=>{const z=S.component=T.component;if(xv(T,S,M))if(z.asyncDep&&!z.asyncResolved){x(z,S,M);return}else z.next=S,z.update();else S.el=T.el,z.vnode=S},L=(T,S,M,z,B,U,Y)=>{const q=()=>{if(T.isMounted){let{next:tt,bu:ot,u:ht,parent:It,vnode:Dt}=T;{const Pe=jp(T);if(Pe){tt&&(tt.el=Dt.el,x(T,tt,Y)),Pe.asyncDep.then(()=>{T.isUnmounted||q()});return}}let St=tt,le;ms(T,!1),tt?(tt.el=Dt.el,x(T,tt,Y)):tt=Dt,ot&&Lo(ot),(le=tt.props&&tt.props.onVnodeBeforeUpdate)&&tn(le,It,tt,Dt),ms(T,!0);const ue=$h(T),xe=T.subTree;T.subTree=ue,R(xe,ue,p(xe.el),Je(xe),T,B,U),tt.el=ue.el,St===null&&Pv(T,ue.el),ht&&Ve(ht,B),(le=tt.props&&tt.props.onVnodeUpdated)&&Ve(()=>tn(le,It,tt,Dt),B)}else{let tt;const{el:ot,props:ht}=S,{bm:It,m:Dt,parent:St,root:le,type:ue}=T,xe=Ei(S);ms(T,!1),It&&Lo(It),!xe&&(tt=ht&&ht.onVnodeBeforeMount)&&tn(tt,St,S),ms(T,!0);{le.ce&&le.ce._def.shadowRoot!==!1&&le.ce._injectChildStyle(ue);const Pe=T.subTree=$h(T);R(null,Pe,M,z,T,B,U),S.el=Pe.el}if(Dt&&Ve(Dt,B),!xe&&(tt=ht&&ht.onVnodeMounted)){const Pe=S;Ve(()=>tn(tt,St,Pe),B)}(S.shapeFlag&256||St&&Ei(St.vnode)&&St.vnode.shapeFlag&256)&&T.a&&Ve(T.a,B),T.isMounted=!0,S=M=z=null}};T.scope.on();const j=T.effect=new sp(q);T.scope.off();const $=T.update=j.run.bind(j),ct=T.job=j.runIfDirty.bind(j);ct.i=T,ct.id=T.uid,j.scheduler=()=>Hu(ct),ms(T,!0),$()},x=(T,S,M)=>{S.component=T;const z=T.vnode.props;T.vnode=S,T.next=null,Vv(T,S.props,z,M),Mv(T,S.children,M),wn(),Mh(T),An()},H=(T,S,M,z,B,U,Y,q,j=!1)=>{const $=T&&T.children,ct=T?T.shapeFlag:0,tt=S.children,{patchFlag:ot,shapeFlag:ht}=S;if(ot>0){if(ot&128){Re($,tt,M,z,B,U,Y,q,j);return}else if(ot&256){Ot($,tt,M,z,B,U,Y,q,j);return}}ht&8?(ct&16&&Ke($,B,U),tt!==$&&d(M,tt)):ct&16?ht&16?Re($,tt,M,z,B,U,Y,q,j):Ke($,B,U,!0):(ct&8&&d(M,""),ht&16&&v(tt,M,z,B,U,Y,q,j))},Ot=(T,S,M,z,B,U,Y,q,j)=>{T=T||cr,S=S||cr;const $=T.length,ct=S.length,tt=Math.min($,ct);let ot;for(ot=0;ot<tt;ot++){const ht=S[ot]=j?zn(S[ot]):sn(S[ot]);R(T[ot],ht,M,null,B,U,Y,q,j)}$>ct?Ke(T,B,U,!0,!1,tt):v(S,M,z,B,U,Y,q,j,tt)},Re=(T,S,M,z,B,U,Y,q,j)=>{let $=0;const ct=S.length;let tt=T.length-1,ot=ct-1;for(;$<=tt&&$<=ot;){const ht=T[$],It=S[$]=j?zn(S[$]):sn(S[$]);if(si(ht,It))R(ht,It,M,null,B,U,Y,q,j);else break;$++}for(;$<=tt&&$<=ot;){const ht=T[tt],It=S[ot]=j?zn(S[ot]):sn(S[ot]);if(si(ht,It))R(ht,It,M,null,B,U,Y,q,j);else break;tt--,ot--}if($>tt){if($<=ot){const ht=ot+1,It=ht<ct?S[ht].el:z;for(;$<=ot;)R(null,S[$]=j?zn(S[$]):sn(S[$]),M,It,B,U,Y,q,j),$++}}else if($>ot)for(;$<=tt;)ge(T[$],B,U,!0),$++;else{const ht=$,It=$,Dt=new Map;for($=It;$<=ot;$++){const ie=S[$]=j?zn(S[$]):sn(S[$]);ie.key!=null&&Dt.set(ie.key,$)}let St,le=0;const ue=ot-It+1;let xe=!1,Pe=0;const He=new Array(ue);for($=0;$<ue;$++)He[$]=0;for($=ht;$<=tt;$++){const ie=T[$];if(le>=ue){ge(ie,B,U,!0);continue}let ne;if(ie.key!=null)ne=Dt.get(ie.key);else for(St=It;St<=ot;St++)if(He[St-It]===0&&si(ie,S[St])){ne=St;break}ne===void 0?ge(ie,B,U,!0):(He[ne-It]=$+1,ne>=Pe?Pe=ne:xe=!0,R(ie,S[ne],M,null,B,U,Y,q,j),le++)}const Hs=xe?Bv(He):cr;for(St=Hs.length-1,$=ue-1;$>=0;$--){const ie=It+$,ne=S[ie],$r=S[ie+1],us=ie+1<ct?$r.el||$r.placeholder:z;He[$]===0?R(null,ne,M,us,B,U,Y,q,j):xe&&(St<0||$!==Hs[St]?Ae(ne,M,us,2):St--)}}},Ae=(T,S,M,z,B=null)=>{const{el:U,type:Y,transition:q,children:j,shapeFlag:$}=T;if($&6){Ae(T.component.subTree,S,M,z);return}if($&128){T.suspense.move(S,M,z);return}if($&64){Y.move(T,S,M,ls);return}if(Y===Ie){s(U,S,M);for(let tt=0;tt<j.length;tt++)Ae(j[tt],S,M,z);s(T.anchor,S,M);return}if(Y===Bo){Q(T,S,M);return}if(z!==2&&$&1&&q)if(z===0)q.beforeEnter(U),s(U,S,M),Ve(()=>q.enter(U),B);else{const{leave:tt,delayLeave:ot,afterLeave:ht}=q,It=()=>{T.ctx.isUnmounted?r(U):s(U,S,M)},Dt=()=>{U._isLeaving&&U[Xy](!0),tt(U,()=>{It(),ht&&ht()})};ot?ot(U,It,Dt):Dt()}else s(U,S,M)},ge=(T,S,M,z=!1,B=!1)=>{const{type:U,props:Y,ref:q,children:j,dynamicChildren:$,shapeFlag:ct,patchFlag:tt,dirs:ot,cacheIndex:ht}=T;if(tt===-2&&(B=!1),q!=null&&(wn(),vi(q,null,M,T,!0),An()),ht!=null&&(S.renderCache[ht]=void 0),ct&256){S.ctx.deactivate(T);return}const It=ct&1&&ot,Dt=!Ei(T);let St;if(Dt&&(St=Y&&Y.onVnodeBeforeUnmount)&&tn(St,S,T),ct&6)Xe(T.component,M,z);else{if(ct&128){T.suspense.unmount(M,z);return}It&&ps(T,null,S,"beforeUnmount"),ct&64?T.type.remove(T,S,M,ls,z):$&&!$.hasOnce&&(U!==Ie||tt>0&&tt&64)?Ke($,S,M,!1,!0):(U===Ie&&tt&384||!B&&ct&16)&&Ke(j,S,M),z&&Ks(T)}(Dt&&(St=Y&&Y.onVnodeUnmounted)||It)&&Ve(()=>{St&&tn(St,S,T),It&&ps(T,null,S,"unmounted")},M)},Ks=T=>{const{type:S,el:M,anchor:z,transition:B}=T;if(S===Ie){ee(M,z);return}if(S===Bo){W(T);return}const U=()=>{r(M),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(T.shapeFlag&1&&B&&!B.persisted){const{leave:Y,delayLeave:q}=B,j=()=>Y(M,U);q?q(T.el,U,j):j()}else U()},ee=(T,S)=>{let M;for(;T!==S;)M=y(T),r(T),T=M;r(S)},Xe=(T,S,M)=>{const{bum:z,scope:B,job:U,subTree:Y,um:q,m:j,a:$}=T;zh(j),zh($),z&&Lo(z),B.stop(),U&&(U.flags|=8,ge(Y,T,S,M)),q&&Ve(q,S),Ve(()=>{T.isUnmounted=!0},S)},Ke=(T,S,M,z=!1,B=!1,U=0)=>{for(let Y=U;Y<T.length;Y++)ge(T[Y],S,M,z,B)},Je=T=>{if(T.shapeFlag&6)return Je(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const S=y(T.anchor||T.el),M=S&&S[Wy];return M?y(M):S};let as=!1;const Ur=(T,S,M)=>{T==null?S._vnode&&ge(S._vnode,null,null,!0):R(S._vnode||null,T,S,null,null,null,M),S._vnode=T,as||(as=!0,Mh(),Ep(),as=!1)},ls={p:R,um:ge,m:Ae,r:Ks,mt:it,mc:v,pc:H,pbc:b,n:Je,o:n};return{render:Ur,hydrate:void 0,createApp:_v(Ur)}}function xl({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function ms({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Lv(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function $p(n,t,e=!1){const s=n.children,r=t.children;if(ft(s)&&ft(r))for(let i=0;i<s.length;i++){const o=s[i];let l=r[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[i]=zn(r[i]),l.el=o.el),!e&&l.patchFlag!==-2&&$p(o,l)),l.type===$a&&l.patchFlag!==-1&&(l.el=o.el),l.type===ts&&!l.el&&(l.el=o.el)}}function Bv(n){const t=n.slice(),e=[0];let s,r,i,o,l;const u=n.length;for(s=0;s<u;s++){const c=n[s];if(c!==0){if(r=e[e.length-1],n[r]<c){t[s]=r,e.push(s);continue}for(i=0,o=e.length-1;i<o;)l=i+o>>1,n[e[l]]<c?i=l+1:o=l;c<n[e[i]]&&(i>0&&(t[s]=e[i-1]),e[i]=s)}}for(i=e.length,o=e[i-1];i-- >0;)e[i]=o,o=t[o];return e}function jp(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:jp(t)}function zh(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}const qp=n=>n.__isSuspense;function Uv(n,t){t&&t.pendingBranch?ft(n)?t.effects.push(...n):t.effects.push(n):Hy(n)}const Ie=Symbol.for("v-fgt"),$a=Symbol.for("v-txt"),ts=Symbol.for("v-cmt"),Bo=Symbol.for("v-stc"),Ti=[];let Ne=null;function lt(n=!1){Ti.push(Ne=n?null:[])}function $v(){Ti.pop(),Ne=Ti[Ti.length-1]||null}let Li=1;function Kh(n,t=!1){Li+=n,n<0&&Ne&&t&&(Ne.hasOnce=!0)}function zp(n){return n.dynamicChildren=Li>0?Ne||cr:null,$v(),Li>0&&Ne&&Ne.push(n),n}function dt(n,t,e,s,r,i){return zp(m(n,t,e,s,r,i,!0))}function ci(n,t,e,s,r){return zp(ln(n,t,e,s,r,!0))}function Kp(n){return n?n.__v_isVNode===!0:!1}function si(n,t){return n.type===t.type&&n.key===t.key}const Hp=({key:n})=>n??null,Uo=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?Xt(n)||Gt(n)||gt(n)?{i:$e,r:n,k:t,f:!!e}:n:null);function m(n,t=null,e=null,s=0,r=null,i=n===Ie?0:1,o=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Hp(t),ref:t&&Uo(t),scopeId:bp,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:$e};return l?(Xu(u,e),i&128&&n.normalize(u)):e&&(u.shapeFlag|=Xt(e)?8:16),Li>0&&!o&&Ne&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&Ne.push(u),u}const ln=jv;function jv(n,t=null,e=null,s=0,r=null,i=!1){if((!n||n===uv)&&(n=ts),Kp(n)){const l=Er(n,t,!0);return e&&Xu(l,e),Li>0&&!i&&Ne&&(l.shapeFlag&6?Ne[Ne.indexOf(n)]=l:Ne.push(l)),l.patchFlag=-2,l}if(Zv(n)&&(n=n.__vccOpts),t){t=qv(t);let{class:l,style:u}=t;l&&!Xt(l)&&(t.class=Be(l)),Ut(u)&&(Fa(u)&&!ft(u)&&(u=me({},u)),t.style=Fu(u))}const o=Xt(n)?1:qp(n)?128:Qy(n)?64:Ut(n)?4:gt(n)?2:0;return m(n,t,e,s,r,o,i,!0)}function qv(n){return n?Fa(n)||Mp(n)?me({},n):n:null}function Er(n,t,e=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:l,transition:u}=n,c=t?Kv(r||{},t):r,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Hp(c),ref:t&&t.ref?e&&i?ft(i)?i.concat(Uo(t)):[i,Uo(t)]:Uo(t):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Ie?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:u,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Er(n.ssContent),ssFallback:n.ssFallback&&Er(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return u&&s&&Gu(d,u.clone(d)),d}function As(n=" ",t=0){return ln($a,null,n,t)}function zv(n,t){const e=ln(Bo,null,n);return e.staticCount=t,e}function xt(n="",t=!1){return t?(lt(),ci(ts,null,n)):ln(ts,null,n)}function sn(n){return n==null||typeof n=="boolean"?ln(ts):ft(n)?ln(Ie,null,n.slice()):Kp(n)?zn(n):ln($a,null,String(n))}function zn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Er(n)}function Xu(n,t){let e=0;const{shapeFlag:s}=n;if(t==null)t=null;else if(ft(t))e=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),Xu(n,r()),r._c&&(r._d=!0));return}else{e=32;const r=t._;!r&&!Mp(t)?t._ctx=$e:r===3&&$e&&($e.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else gt(t)?(t={default:t,_ctx:$e},e=32):(t=String(t),s&64?(e=16,t=[As(t)]):e=8);n.children=t,n.shapeFlag|=e}function Kv(...n){const t={};for(let e=0;e<n.length;e++){const s=n[e];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=Be([t.class,s.class]));else if(r==="style")t.style=Fu([t.style,s.style]);else if(Ca(r)){const i=t[r],o=s[r];o&&i!==o&&!(ft(i)&&i.includes(o))&&(t[r]=i?[].concat(i,o):o)}else r!==""&&(t[r]=s[r])}return t}function tn(n,t,e,s=null){dn(n,t,7,[e,s])}const Hv=Pp();let Gv=0;function Wv(n,t,e){const s=n.type,r=(t?t.appContext:n.appContext)||Hv,i={uid:Gv++,vnode:n,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new tp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Fp(s,r),emitsOptions:Dp(s,r),emit:null,emitted:null,propsDefaults:Lt,inheritAttrs:s.inheritAttrs,ctx:Lt,data:Lt,props:Lt,attrs:Lt,slots:Lt,refs:Lt,setupState:Lt,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=wv.bind(null,i),n.ce&&n.ce(i),i}let be=null;const Gp=()=>be||$e;let aa,Zl;{const n=Ma(),t=(e,s)=>{let r;return(r=n[e])||(r=n[e]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};aa=t("__VUE_INSTANCE_SETTERS__",e=>be=e),Zl=t("__VUE_SSR_SETTERS__",e=>Bi=e)}const oo=n=>{const t=be;return aa(n),n.scope.on(),()=>{n.scope.off(),aa(t)}},Hh=()=>{be&&be.scope.off(),aa(null)};function Wp(n){return n.vnode.shapeFlag&4}let Bi=!1;function Qv(n,t=!1,e=!1){t&&Zl(t);const{props:s,children:r}=n.vnode,i=Wp(n);Cv(n,s,i,t),Nv(n,r,e||t);const o=i?Xv(n,t):void 0;return t&&Zl(!1),o}function Xv(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,cv);const{setup:s}=e;if(s){wn();const r=n.setupContext=s.length>1?Yv(n):null,i=oo(n),o=ro(s,n,0,[n.props,r]),l=Hf(o);if(An(),i(),(l||n.sp)&&!Ei(n)&&Tp(n),l){if(o.then(Hh,Hh),t)return o.then(u=>{Gh(n,u)}).catch(u=>{La(u,n,0)});n.asyncDep=o}else Gh(n,o)}else Qp(n)}function Gh(n,t,e){gt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:Ut(t)&&(n.setupState=_p(t)),Qp(n)}function Qp(n,t,e){const s=n.type;n.render||(n.render=s.render||an);{const r=oo(n);wn();try{hv(n)}finally{An(),r()}}}const Jv={get(n,t){return fe(n,"get",""),n[t]}};function Yv(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,Jv),slots:n.slots,emit:n.emit,expose:t}}function ja(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(_p(zu(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Ii)return Ii[e](n)},has(t,e){return e in t||e in Ii}})):n.proxy}function Zv(n){return gt(n)&&"__vccOpts"in n}const De=(n,t)=>$y(n,t,Bi),tE="3.5.25";/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let tu;const Wh=typeof window<"u"&&window.trustedTypes;if(Wh)try{tu=Wh.createPolicy("vue",{createHTML:n=>n})}catch{}const Xp=tu?n=>tu.createHTML(n):n=>n,eE="http://www.w3.org/2000/svg",nE="http://www.w3.org/1998/Math/MathML",mn=typeof document<"u"?document:null,Qh=mn&&mn.createElement("template"),sE={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,s)=>{const r=t==="svg"?mn.createElementNS(eE,n):t==="mathml"?mn.createElementNS(nE,n):e?mn.createElement(n,{is:e}):mn.createElement(n);return n==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:n=>mn.createTextNode(n),createComment:n=>mn.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>mn.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,s,r,i){const o=e?e.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),e),!(r===i||!(r=r.nextSibling)););else{Qh.innerHTML=Xp(s==="svg"?`<svg>${n}</svg>`:s==="mathml"?`<math>${n}</math>`:n);const l=Qh.content;if(s==="svg"||s==="mathml"){const u=l.firstChild;for(;u.firstChild;)l.appendChild(u.firstChild);l.removeChild(u)}t.insertBefore(l,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},rE=Symbol("_vtc");function iE(n,t,e){const s=n[rE];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const Xh=Symbol("_vod"),oE=Symbol("_vsh"),aE=Symbol(""),lE=/(?:^|;)\s*display\s*:/;function uE(n,t,e){const s=n.style,r=Xt(e);let i=!1;if(e&&!r){if(t)if(Xt(t))for(const o of t.split(";")){const l=o.slice(0,o.indexOf(":")).trim();e[l]==null&&$o(s,l,"")}else for(const o in t)e[o]==null&&$o(s,o,"");for(const o in e)o==="display"&&(i=!0),$o(s,o,e[o])}else if(r){if(t!==e){const o=s[aE];o&&(e+=";"+o),s.cssText=e,i=lE.test(e)}}else t&&n.removeAttribute("style");Xh in n&&(n[Xh]=i?s.display:"",n[oE]&&(s.display="none"))}const Jh=/\s*!important$/;function $o(n,t,e){if(ft(e))e.forEach(s=>$o(n,t,s));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const s=cE(n,t);Jh.test(e)?n.setProperty($s(s),e.replace(Jh,""),"important"):n[s]=e}}const Yh=["Webkit","Moz","ms"],Pl={};function cE(n,t){const e=Pl[t];if(e)return e;let s=Zn(t);if(s!=="filter"&&s in n)return Pl[t]=s;s=Qf(s);for(let r=0;r<Yh.length;r++){const i=Yh[r]+s;if(i in n)return Pl[t]=i}return t}const Zh="http://www.w3.org/1999/xlink";function td(n,t,e,s,r,i=cy(t)){s&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Zh,t.slice(6,t.length)):n.setAttributeNS(Zh,t,e):e==null||i&&!Jf(e)?n.removeAttribute(t):n.setAttribute(t,i?"":hn(e)?String(e):e)}function ed(n,t,e,s,r){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Xp(e):e);return}const i=n.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?n.getAttribute("value")||"":n.value,u=e==null?n.type==="checkbox"?"on":"":String(e);(l!==u||!("_value"in n))&&(n.value=u),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const l=typeof n[t];l==="boolean"?e=Jf(e):e==null&&l==="string"?(e="",o=!0):l==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(r||t)}function Kn(n,t,e,s){n.addEventListener(t,e,s)}function hE(n,t,e,s){n.removeEventListener(t,e,s)}const nd=Symbol("_vei");function dE(n,t,e,s,r=null){const i=n[nd]||(n[nd]={}),o=i[t];if(s&&o)o.value=s;else{const[l,u]=fE(t);if(s){const c=i[t]=gE(s,r);Kn(n,l,c,u)}else o&&(hE(n,l,o,u),i[t]=void 0)}}const sd=/(?:Once|Passive|Capture)$/;function fE(n){let t;if(sd.test(n)){t={};let s;for(;s=n.match(sd);)n=n.slice(0,n.length-s[0].length),t[s[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):$s(n.slice(2)),t]}let Cl=0;const pE=Promise.resolve(),mE=()=>Cl||(pE.then(()=>Cl=0),Cl=Date.now());function gE(n,t){const e=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=e.attached)return;dn(_E(s,e.value),t,5,[s])};return e.value=n,e.attached=mE(),e}function _E(n,t){if(ft(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const rd=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,yE=(n,t,e,s,r,i)=>{const o=r==="svg";t==="class"?iE(n,s,o):t==="style"?uE(n,e,s):Ca(t)?Mu(t)||dE(n,t,e,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):vE(n,t,s,o))?(ed(n,t,s),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&td(n,t,s,o,i,t!=="value")):n._isVueCE&&(/[A-Z]/.test(t)||!Xt(s))?ed(n,Zn(t),s,i,t):(t==="true-value"?n._trueValue=s:t==="false-value"&&(n._falseValue=s),td(n,t,s,o))};function vE(n,t,e,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in n&&rd(t)&&gt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return rd(t)&&Xt(e)?!1:t in n}const Ir=n=>{const t=n.props["onUpdate:modelValue"]||!1;return ft(t)?e=>Lo(t,e):t};function EE(n){n.target.composing=!0}function id(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const In=Symbol("_assign");function od(n,t,e){return t&&(n=n.trim()),e&&(n=Na(n)),n}const wt={created(n,{modifiers:{lazy:t,trim:e,number:s}},r){n[In]=Ir(r);const i=s||r.props&&r.props.type==="number";Kn(n,t?"change":"input",o=>{o.target.composing||n[In](od(n.value,e,i))}),(e||i)&&Kn(n,"change",()=>{n.value=od(n.value,e,i)}),t||(Kn(n,"compositionstart",EE),Kn(n,"compositionend",id),Kn(n,"change",id))},mounted(n,{value:t}){n.value=t??""},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:s,trim:r,number:i}},o){if(n[In]=Ir(o),n.composing)return;const l=(i||n.type==="number")&&!/^0\d/.test(n.value)?Na(n.value):n.value,u=t??"";l!==u&&(document.activeElement===n&&n.type!=="range"&&(s&&t===e||r&&n.value.trim()===u)||(n.value=u))}},Co={created(n,{value:t},e){n.checked=gr(t,e.props.value),n[In]=Ir(e),Kn(n,"change",()=>{n[In](Ui(n))})},beforeUpdate(n,{value:t,oldValue:e},s){n[In]=Ir(s),t!==e&&(n.checked=gr(t,s.props.value))}},eu={deep:!0,created(n,{value:t,modifiers:{number:e}},s){const r=Va(t);Kn(n,"change",()=>{const i=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>e?Na(Ui(o)):Ui(o));n[In](n.multiple?r?new Set(i):i:i[0]),n._assigning=!0,Ku(()=>{n._assigning=!1})}),n[In]=Ir(s)},mounted(n,{value:t}){ad(n,t)},beforeUpdate(n,t,e){n[In]=Ir(e)},updated(n,{value:t}){n._assigning||ad(n,t)}};function ad(n,t){const e=n.multiple,s=ft(t);if(!(e&&!s&&!Va(t))){for(let r=0,i=n.options.length;r<i;r++){const o=n.options[r],l=Ui(o);if(e)if(s){const u=typeof l;u==="string"||u==="number"?o.selected=t.some(c=>String(c)===String(l)):o.selected=dy(t,l)>-1}else o.selected=t.has(l);else if(gr(Ui(o),t)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!e&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Ui(n){return"_value"in n?n._value:n.value}const IE=["ctrl","shift","alt","meta"],bE={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>IE.some(e=>n[`${e}Key`]&&!t.includes(e))},wi=(n,t)=>{const e=n._withMods||(n._withMods={}),s=t.join(".");return e[s]||(e[s]=(r,...i)=>{for(let o=0;o<t.length;o++){const l=bE[t[o]];if(l&&l(r,t))return}return n(r,...i)})},TE=me({patchProp:yE},sE);let ld;function wE(){return ld||(ld=Ov(TE))}const AE=(...n)=>{const t=wE().createApp(...n),{mount:e}=t;return t.mount=s=>{const r=RE(s);if(!r)return;const i=t._component;!gt(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=e(r,!1,SE(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function SE(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function RE(n){return Xt(n)?document.querySelector(n):n}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Jp;const qa=n=>Jp=n,Yp=Symbol();function nu(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var Ai;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Ai||(Ai={}));function xE(){const n=ep(!0),t=n.run(()=>Pt({}));let e=[],s=[];const r=zu({install(i){qa(r),r._a=i,i.provide(Yp,r),i.config.globalProperties.$pinia=r,s.forEach(o=>e.push(o)),s=[]},use(i){return this._a?e.push(i):s.push(i),this},_p:e,_a:null,_e:n,_s:new Map,state:t});return r}const Zp=()=>{};function ud(n,t,e,s=Zp){n.push(t);const r=()=>{const i=n.indexOf(t);i>-1&&(n.splice(i,1),s())};return!e&&np()&&fy(r),r}function Js(n,...t){n.slice().forEach(e=>{e(...t)})}const PE=n=>n(),cd=Symbol(),Vl=Symbol();function su(n,t){n instanceof Map&&t instanceof Map?t.forEach((e,s)=>n.set(s,e)):n instanceof Set&&t instanceof Set&&t.forEach(n.add,n);for(const e in t){if(!t.hasOwnProperty(e))continue;const s=t[e],r=n[e];nu(r)&&nu(s)&&n.hasOwnProperty(e)&&!Gt(s)&&!En(s)?n[e]=su(r,s):n[e]=s}return n}const CE=Symbol();function VE(n){return!nu(n)||!n.hasOwnProperty(CE)}const{assign:$n}=Object;function DE(n){return!!(Gt(n)&&n.effect)}function kE(n,t,e,s){const{state:r,actions:i,getters:o}=t,l=e.state.value[n];let u;function c(){l||(e.state.value[n]=r?r():{});const d=Fy(e.state.value[n]);return $n(d,i,Object.keys(o||{}).reduce((p,y)=>(p[y]=zu(De(()=>{qa(e);const A=e._s.get(n);return o[y].call(A,A)})),p),{}))}return u=tm(n,c,t,e,s,!0),u}function tm(n,t,e={},s,r,i){let o;const l=$n({actions:{}},e),u={deep:!0};let c,d,p=[],y=[],A;const k=s.state.value[n];!i&&!k&&(s.state.value[n]={}),Pt({});let R;function D(v){let _;c=d=!1,typeof v=="function"?(v(s.state.value[n]),_={type:Ai.patchFunction,storeId:n,events:A}):(su(s.state.value[n],v),_={type:Ai.patchObject,payload:v,storeId:n,events:A});const b=R=Symbol();Ku().then(()=>{R===b&&(c=!0)}),d=!0,Js(p,_,s.state.value[n])}const X=i?function(){const{state:_}=e,b=_?_():{};this.$patch(I=>{$n(I,b)})}:Zp;function G(){o.stop(),p=[],y=[],s._s.delete(n)}const Q=(v,_="")=>{if(cd in v)return v[Vl]=_,v;const b=function(){qa(s);const I=Array.from(arguments),P=[],E=[];function it(x){P.push(x)}function O(x){E.push(x)}Js(y,{args:I,name:b[Vl],store:nt,after:it,onError:O});let L;try{L=v.apply(this&&this.$id===n?this:nt,I)}catch(x){throw Js(E,x),x}return L instanceof Promise?L.then(x=>(Js(P,x),x)).catch(x=>(Js(E,x),Promise.reject(x))):(Js(P,L),L)};return b[cd]=!0,b[Vl]=_,b},W={_p:s,$id:n,$onAction:ud.bind(null,y),$patch:D,$reset:X,$subscribe(v,_={}){const b=ud(p,v,_.detached,()=>I()),I=o.run(()=>yn(()=>s.state.value[n],P=>{(_.flush==="sync"?d:c)&&v({storeId:n,type:Ai.direct,events:A},P)},$n({},u,_)));return b},$dispose:G},nt=_r(W);s._s.set(n,nt);const w=(s._a&&s._a.runWithContext||PE)(()=>s._e.run(()=>(o=ep()).run(()=>t({action:Q}))));for(const v in w){const _=w[v];if(Gt(_)&&!DE(_)||En(_))i||(k&&VE(_)&&(Gt(_)?_.value=k[v]:su(_,k[v])),s.state.value[n][v]=_);else if(typeof _=="function"){const b=Q(_,v);w[v]=b,l.actions[v]=_}}return $n(nt,w),$n(Rt(nt),w),Object.defineProperty(nt,"$state",{get:()=>s.state.value[n],set:v=>{D(_=>{$n(_,v)})}}),s._p.forEach(v=>{$n(nt,o.run(()=>v({store:nt,app:s._a,pinia:s,options:l})))}),k&&i&&e.hydrate&&e.hydrate(nt.$state,k),c=!0,d=!0,nt}/*! #__NO_SIDE_EFFECTS__ */function NE(n,t,e){let s,r;const i=typeof t=="function";s=n,r=i?e:t;function o(l,u){const c=vv();return l=l||(c?bi(Yp,null):null),l&&qa(l),l=Jp,l._s.has(s)||(i?tm(s,t,r,l):kE(s,r,l)),l._s.get(s)}return o.$id=s,o}const ME=()=>{};var hd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em=function(n){const t=[];let e=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?t[e++]=r:r<2048?(t[e++]=r>>6|192,t[e++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),t[e++]=r>>18|240,t[e++]=r>>12&63|128,t[e++]=r>>6&63|128,t[e++]=r&63|128):(t[e++]=r>>12|224,t[e++]=r>>6&63|128,t[e++]=r&63|128)}return t},OE=function(n){const t=[];let e=0,s=0;for(;e<n.length;){const r=n[e++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[e++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[e++],o=n[e++],l=n[e++],u=((r&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;t[s++]=String.fromCharCode(55296+(u>>10)),t[s++]=String.fromCharCode(56320+(u&1023))}else{const i=n[e++],o=n[e++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},nm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],o=r+1<n.length,l=o?n[r+1]:0,u=r+2<n.length,c=u?n[r+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let y=(l&15)<<2|c>>6,A=c&63;u||(A=64,o||(y=64)),s.push(e[d],e[p],e[y],e[A])}return s.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(em(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):OE(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=e[n.charAt(r++)],l=r<n.length?e[n.charAt(r)]:0;++r;const c=r<n.length?e[n.charAt(r)]:64;++r;const p=r<n.length?e[n.charAt(r)]:64;if(++r,i==null||l==null||c==null||p==null)throw new FE;const y=i<<2|l>>4;if(s.push(y),c!==64){const A=l<<4&240|c>>2;if(s.push(A),p!==64){const k=c<<6&192|p;s.push(k)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class FE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const LE=function(n){const t=em(n);return nm.encodeByteArray(t,!0)},la=function(n){return LE(n).replace(/\./g,"")},BE=function(n){try{return nm.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE=()=>sm().__FIREBASE_DEFAULTS__,$E=()=>{if(typeof process>"u"||typeof hd>"u")return;const n=hd.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},jE=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&BE(n[1]);return t&&JSON.parse(t)},Ju=()=>{try{return ME()||UE()||$E()||jE()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},qE=n=>{var t,e;return(e=(t=Ju())==null?void 0:t.emulatorHosts)==null?void 0:e[n]},zE=n=>{const t=qE(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),s]:[t.substring(0,e),s]},rm=()=>{var n;return(n=Ju())==null?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,s)=>{e?this.reject(e):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function HE(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GE(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},s=t||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[la(JSON.stringify(e)),la(JSON.stringify(o)),""].join(".")}const Si={};function WE(){const n={prod:[],emulator:[]};for(const t of Object.keys(Si))Si[t]?n.emulator.push(t):n.prod.push(t);return n}function QE(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let dd=!1;function XE(n,t){if(typeof window>"u"||typeof document>"u"||!Yu(window.location.host)||Si[n]===t||Si[n]||dd)return;Si[n]=t;function e(y){return`__firebase__banner__${y}`}const s="__firebase__banner",i=WE().prod.length>0;function o(){const y=document.getElementById(s);y&&y.remove()}function l(y){y.style.display="flex",y.style.background="#7faaf0",y.style.position="fixed",y.style.bottom="5px",y.style.left="5px",y.style.padding=".5em",y.style.borderRadius="5px",y.style.alignItems="center"}function u(y,A){y.setAttribute("width","24"),y.setAttribute("id",A),y.setAttribute("height","24"),y.setAttribute("viewBox","0 0 24 24"),y.setAttribute("fill","none"),y.style.marginLeft="-6px"}function c(){const y=document.createElement("span");return y.style.cursor="pointer",y.style.marginLeft="16px",y.style.fontSize="24px",y.innerHTML=" &times;",y.onclick=()=>{dd=!0,o()},y}function d(y,A){y.setAttribute("id",A),y.innerText="Learn more",y.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",y.setAttribute("target","__blank"),y.style.paddingLeft="5px",y.style.textDecoration="underline"}function p(){const y=QE(s),A=e("text"),k=document.getElementById(A)||document.createElement("span"),R=e("learnmore"),D=document.getElementById(R)||document.createElement("a"),X=e("preprendIcon"),G=document.getElementById(X)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(y.created){const Q=y.element;l(Q),d(D,R);const W=c();u(G,X),Q.append(G,k,D,W),document.body.appendChild(Q)}i?(k.innerText="Preview backend disconnected.",G.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(G.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function im(){var t;const n=(t=Ju())==null?void 0:t.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function om(){return!im()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function am(){return!im()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function lm(){try{return typeof indexedDB=="object"}catch{return!1}}function JE(){return new Promise((n,t)=>{try{let e=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),e||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{e=!1},r.onerror=()=>{var i;t(((i=r.error)==null?void 0:i.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE="FirebaseError";class Or extends Error{constructor(t,e,s){super(e),this.code=t,this.customData=s,this.name=YE,Object.setPrototypeOf(this,Or.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,um.prototype.create)}}class um{constructor(t,e,s){this.service=t,this.serviceName=e,this.errors=s}create(t,...e){const s=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?ZE(i,s):"Error",l=`${this.serviceName}: ${o} (${r}).`;return new Or(r,l,s)}}function ZE(n,t){return n.replace(tI,(e,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const tI=/\{\$([^}]+)}/g;function ca(n,t){if(n===t)return!0;const e=Object.keys(n),s=Object.keys(t);for(const r of e){if(!s.includes(r))return!1;const i=n[r],o=t[r];if(fd(i)&&fd(o)){if(!ca(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!e.includes(r))return!1;return!0}function fd(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(n){return n&&n._delegate?n._delegate:n}class ji{constructor(t,e,s){this.name=t,this.instanceFactory=e,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const s=new KE;if(this.instancesDeferred.set(e,s),this.isInitialized(e)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:e});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(sI(t))try{this.getOrInitializeService({instanceIdentifier:ys})}catch{}for(const[e,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(t=ys){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ys){return this.instances.has(t)}getOptions(t=ys){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:e});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);s===l&&o.resolve(r)}return r}onInit(t,e){const s=this.normalizeInstanceIdentifier(e),r=this.onInitCallbacks.get(s)??new Set;r.add(t),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&t(i,s),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const s=this.onInitCallbacks.get(e);if(s)for(const r of s)try{r(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:nI(t),options:e}),this.instances.set(t,s),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=ys){return this.component?this.component.multipleInstances?t:ys:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nI(n){return n===ys?void 0:n}function sI(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new eI(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var At;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(At||(At={}));const iI={debug:At.DEBUG,verbose:At.VERBOSE,info:At.INFO,warn:At.WARN,error:At.ERROR,silent:At.SILENT},oI=At.INFO,aI={[At.DEBUG]:"log",[At.VERBOSE]:"log",[At.INFO]:"info",[At.WARN]:"warn",[At.ERROR]:"error"},lI=(n,t,...e)=>{if(t<n.logLevel)return;const s=new Date().toISOString(),r=aI[t];if(r)console[r](`[${s}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class cm{constructor(t){this.name=t,this._logLevel=oI,this._logHandler=lI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in At))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?iI[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,At.DEBUG,...t),this._logHandler(this,At.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,At.VERBOSE,...t),this._logHandler(this,At.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,At.INFO,...t),this._logHandler(this,At.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,At.WARN,...t),this._logHandler(this,At.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,At.ERROR,...t),this._logHandler(this,At.ERROR,...t)}}const uI=(n,t)=>t.some(e=>n instanceof e);let pd,md;function cI(){return pd||(pd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hI(){return md||(md=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hm=new WeakMap,ru=new WeakMap,dm=new WeakMap,Dl=new WeakMap,Zu=new WeakMap;function dI(n){const t=new Promise((e,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{e(Qn(n.result)),r()},o=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&hm.set(e,n)}).catch(()=>{}),Zu.set(t,n),t}function fI(n){if(ru.has(n))return;const t=new Promise((e,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{e(),r()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});ru.set(n,t)}let iu={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return ru.get(n);if(t==="objectStoreNames")return n.objectStoreNames||dm.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Qn(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function pI(n){iu=n(iu)}function mI(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const s=n.call(kl(this),t,...e);return dm.set(s,t.sort?t.sort():[t]),Qn(s)}:hI().includes(n)?function(...t){return n.apply(kl(this),t),Qn(hm.get(this))}:function(...t){return Qn(n.apply(kl(this),t))}}function gI(n){return typeof n=="function"?mI(n):(n instanceof IDBTransaction&&fI(n),uI(n,cI())?new Proxy(n,iu):n)}function Qn(n){if(n instanceof IDBRequest)return dI(n);if(Dl.has(n))return Dl.get(n);const t=gI(n);return t!==n&&(Dl.set(n,t),Zu.set(t,n)),t}const kl=n=>Zu.get(n);function _I(n,t,{blocked:e,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(n,t),l=Qn(o);return s&&o.addEventListener("upgradeneeded",u=>{s(Qn(o.result),u.oldVersion,u.newVersion,Qn(o.transaction),u)}),e&&o.addEventListener("blocked",u=>e(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),r&&u.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const yI=["get","getKey","getAll","getAllKeys","count"],vI=["put","add","delete","clear"],Nl=new Map;function gd(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Nl.get(t))return Nl.get(t);const e=t.replace(/FromIndex$/,""),s=t!==e,r=vI.includes(e);if(!(e in(s?IDBIndex:IDBObjectStore).prototype)||!(r||yI.includes(e)))return;const i=async function(o,...l){const u=this.transaction(o,r?"readwrite":"readonly");let c=u.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[e](...l),r&&u.done]))[0]};return Nl.set(t,i),i}pI(n=>({...n,get:(t,e,s)=>gd(t,e)||n.get(t,e,s),has:(t,e)=>!!gd(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(II(e)){const s=e.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(e=>e).join(" ")}}function II(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ou="@firebase/app",_d="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn=new cm("@firebase/app"),bI="@firebase/app-compat",TI="@firebase/analytics-compat",wI="@firebase/analytics",AI="@firebase/app-check-compat",SI="@firebase/app-check",RI="@firebase/auth",xI="@firebase/auth-compat",PI="@firebase/database",CI="@firebase/data-connect",VI="@firebase/database-compat",DI="@firebase/functions",kI="@firebase/functions-compat",NI="@firebase/installations",MI="@firebase/installations-compat",OI="@firebase/messaging",FI="@firebase/messaging-compat",LI="@firebase/performance",BI="@firebase/performance-compat",UI="@firebase/remote-config",$I="@firebase/remote-config-compat",jI="@firebase/storage",qI="@firebase/storage-compat",zI="@firebase/firestore",KI="@firebase/ai",HI="@firebase/firestore-compat",GI="firebase",WI="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au="[DEFAULT]",QI={[ou]:"fire-core",[bI]:"fire-core-compat",[wI]:"fire-analytics",[TI]:"fire-analytics-compat",[SI]:"fire-app-check",[AI]:"fire-app-check-compat",[RI]:"fire-auth",[xI]:"fire-auth-compat",[PI]:"fire-rtdb",[CI]:"fire-data-connect",[VI]:"fire-rtdb-compat",[DI]:"fire-fn",[kI]:"fire-fn-compat",[NI]:"fire-iid",[MI]:"fire-iid-compat",[OI]:"fire-fcm",[FI]:"fire-fcm-compat",[LI]:"fire-perf",[BI]:"fire-perf-compat",[UI]:"fire-rc",[$I]:"fire-rc-compat",[jI]:"fire-gcs",[qI]:"fire-gcs-compat",[zI]:"fire-fst",[HI]:"fire-fst-compat",[KI]:"fire-vertex","fire-js":"fire-js",[GI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha=new Map,XI=new Map,lu=new Map;function yd(n,t){try{n.container.addComponent(t)}catch(e){Rn.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function da(n){const t=n.name;if(lu.has(t))return Rn.debug(`There were multiple attempts to register component ${t}.`),!1;lu.set(t,n);for(const e of ha.values())yd(e,n);for(const e of XI.values())yd(e,n);return!0}function JI(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function YI(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xn=new um("app","Firebase",ZI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(t,e,s){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ji("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Xn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb=WI;function fm(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const s={name:au,automaticDataCollectionEnabled:!0,...t},r=s.name;if(typeof r!="string"||!r)throw Xn.create("bad-app-name",{appName:String(r)});if(e||(e=rm()),!e)throw Xn.create("no-options");const i=ha.get(r);if(i){if(ca(e,i.options)&&ca(s,i.config))return i;throw Xn.create("duplicate-app",{appName:r})}const o=new rI(r);for(const u of lu.values())o.addComponent(u);const l=new tb(e,s,o);return ha.set(r,l),l}function nb(n=au){const t=ha.get(n);if(!t&&n===au&&rm())return fm();if(!t)throw Xn.create("no-app",{appName:n});return t}function fr(n,t,e){let s=QI[n]??n;e&&(s+=`-${e}`);const r=s.match(/\s|\//),i=t.match(/\s|\//);if(r||i){const o=[`Unable to register library "${s}" with version "${t}":`];r&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&o.push("and"),i&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Rn.warn(o.join(" "));return}da(new ji(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sb="firebase-heartbeat-database",rb=1,qi="firebase-heartbeat-store";let Ml=null;function pm(){return Ml||(Ml=_I(sb,rb,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(qi)}catch(e){console.warn(e)}}}}).catch(n=>{throw Xn.create("idb-open",{originalErrorMessage:n.message})})),Ml}async function ib(n){try{const e=(await pm()).transaction(qi),s=await e.objectStore(qi).get(mm(n));return await e.done,s}catch(t){if(t instanceof Or)Rn.warn(t.message);else{const e=Xn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Rn.warn(e.message)}}}async function vd(n,t){try{const s=(await pm()).transaction(qi,"readwrite");await s.objectStore(qi).put(t,mm(n)),await s.done}catch(e){if(e instanceof Or)Rn.warn(e.message);else{const s=Xn.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Rn.warn(s.message)}}}function mm(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob=1024,ab=30;class lb{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new cb(e),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,e;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ed();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>ab){const o=hb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Rn.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ed(),{heartbeatsToSend:s,unsentEntries:r}=ub(this._heartbeatsCache.heartbeats),i=la(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return Rn.warn(e),""}}}function Ed(){return new Date().toISOString().substring(0,10)}function ub(n,t=ob){const e=[];let s=n.slice();for(const r of n){const i=e.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Id(e)>t){i.dates.pop();break}}else if(e.push({agent:r.agent,dates:[r.date]}),Id(e)>t){e.pop();break}s=s.slice(1)}return{heartbeatsToSend:e,unsentEntries:s}}class cb{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lm()?JE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await ib(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return vd(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return vd(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Id(n){return la(JSON.stringify({version:2,heartbeats:n})).length}function hb(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let s=1;s<n.length;s++)n[s].date<e&&(e=n[s].date,t=s);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function db(n){da(new ji("platform-logger",t=>new EI(t),"PRIVATE")),da(new ji("heartbeat",t=>new lb(t),"PRIVATE")),fr(ou,_d,n),fr(ou,_d,"esm2020"),fr("fire-js","")}db("");var fb="firebase",pb="12.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fr(fb,pb,"app");var bd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jn,gm;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(w,v){function _(){}_.prototype=v.prototype,w.F=v.prototype,w.prototype=new _,w.prototype.constructor=w,w.D=function(b,I,P){for(var E=Array(arguments.length-2),it=2;it<arguments.length;it++)E[it-2]=arguments[it];return v.prototype[I].apply(b,E)}}function e(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(s,e),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(w,v,_){_||(_=0);const b=Array(16);if(typeof v=="string")for(var I=0;I<16;++I)b[I]=v.charCodeAt(_++)|v.charCodeAt(_++)<<8|v.charCodeAt(_++)<<16|v.charCodeAt(_++)<<24;else for(I=0;I<16;++I)b[I]=v[_++]|v[_++]<<8|v[_++]<<16|v[_++]<<24;v=w.g[0],_=w.g[1],I=w.g[2];let P=w.g[3],E;E=v+(P^_&(I^P))+b[0]+3614090360&4294967295,v=_+(E<<7&4294967295|E>>>25),E=P+(I^v&(_^I))+b[1]+3905402710&4294967295,P=v+(E<<12&4294967295|E>>>20),E=I+(_^P&(v^_))+b[2]+606105819&4294967295,I=P+(E<<17&4294967295|E>>>15),E=_+(v^I&(P^v))+b[3]+3250441966&4294967295,_=I+(E<<22&4294967295|E>>>10),E=v+(P^_&(I^P))+b[4]+4118548399&4294967295,v=_+(E<<7&4294967295|E>>>25),E=P+(I^v&(_^I))+b[5]+1200080426&4294967295,P=v+(E<<12&4294967295|E>>>20),E=I+(_^P&(v^_))+b[6]+2821735955&4294967295,I=P+(E<<17&4294967295|E>>>15),E=_+(v^I&(P^v))+b[7]+4249261313&4294967295,_=I+(E<<22&4294967295|E>>>10),E=v+(P^_&(I^P))+b[8]+1770035416&4294967295,v=_+(E<<7&4294967295|E>>>25),E=P+(I^v&(_^I))+b[9]+2336552879&4294967295,P=v+(E<<12&4294967295|E>>>20),E=I+(_^P&(v^_))+b[10]+4294925233&4294967295,I=P+(E<<17&4294967295|E>>>15),E=_+(v^I&(P^v))+b[11]+2304563134&4294967295,_=I+(E<<22&4294967295|E>>>10),E=v+(P^_&(I^P))+b[12]+1804603682&4294967295,v=_+(E<<7&4294967295|E>>>25),E=P+(I^v&(_^I))+b[13]+4254626195&4294967295,P=v+(E<<12&4294967295|E>>>20),E=I+(_^P&(v^_))+b[14]+2792965006&4294967295,I=P+(E<<17&4294967295|E>>>15),E=_+(v^I&(P^v))+b[15]+1236535329&4294967295,_=I+(E<<22&4294967295|E>>>10),E=v+(I^P&(_^I))+b[1]+4129170786&4294967295,v=_+(E<<5&4294967295|E>>>27),E=P+(_^I&(v^_))+b[6]+3225465664&4294967295,P=v+(E<<9&4294967295|E>>>23),E=I+(v^_&(P^v))+b[11]+643717713&4294967295,I=P+(E<<14&4294967295|E>>>18),E=_+(P^v&(I^P))+b[0]+3921069994&4294967295,_=I+(E<<20&4294967295|E>>>12),E=v+(I^P&(_^I))+b[5]+3593408605&4294967295,v=_+(E<<5&4294967295|E>>>27),E=P+(_^I&(v^_))+b[10]+38016083&4294967295,P=v+(E<<9&4294967295|E>>>23),E=I+(v^_&(P^v))+b[15]+3634488961&4294967295,I=P+(E<<14&4294967295|E>>>18),E=_+(P^v&(I^P))+b[4]+3889429448&4294967295,_=I+(E<<20&4294967295|E>>>12),E=v+(I^P&(_^I))+b[9]+568446438&4294967295,v=_+(E<<5&4294967295|E>>>27),E=P+(_^I&(v^_))+b[14]+3275163606&4294967295,P=v+(E<<9&4294967295|E>>>23),E=I+(v^_&(P^v))+b[3]+4107603335&4294967295,I=P+(E<<14&4294967295|E>>>18),E=_+(P^v&(I^P))+b[8]+1163531501&4294967295,_=I+(E<<20&4294967295|E>>>12),E=v+(I^P&(_^I))+b[13]+2850285829&4294967295,v=_+(E<<5&4294967295|E>>>27),E=P+(_^I&(v^_))+b[2]+4243563512&4294967295,P=v+(E<<9&4294967295|E>>>23),E=I+(v^_&(P^v))+b[7]+1735328473&4294967295,I=P+(E<<14&4294967295|E>>>18),E=_+(P^v&(I^P))+b[12]+2368359562&4294967295,_=I+(E<<20&4294967295|E>>>12),E=v+(_^I^P)+b[5]+4294588738&4294967295,v=_+(E<<4&4294967295|E>>>28),E=P+(v^_^I)+b[8]+2272392833&4294967295,P=v+(E<<11&4294967295|E>>>21),E=I+(P^v^_)+b[11]+1839030562&4294967295,I=P+(E<<16&4294967295|E>>>16),E=_+(I^P^v)+b[14]+4259657740&4294967295,_=I+(E<<23&4294967295|E>>>9),E=v+(_^I^P)+b[1]+2763975236&4294967295,v=_+(E<<4&4294967295|E>>>28),E=P+(v^_^I)+b[4]+1272893353&4294967295,P=v+(E<<11&4294967295|E>>>21),E=I+(P^v^_)+b[7]+4139469664&4294967295,I=P+(E<<16&4294967295|E>>>16),E=_+(I^P^v)+b[10]+3200236656&4294967295,_=I+(E<<23&4294967295|E>>>9),E=v+(_^I^P)+b[13]+681279174&4294967295,v=_+(E<<4&4294967295|E>>>28),E=P+(v^_^I)+b[0]+3936430074&4294967295,P=v+(E<<11&4294967295|E>>>21),E=I+(P^v^_)+b[3]+3572445317&4294967295,I=P+(E<<16&4294967295|E>>>16),E=_+(I^P^v)+b[6]+76029189&4294967295,_=I+(E<<23&4294967295|E>>>9),E=v+(_^I^P)+b[9]+3654602809&4294967295,v=_+(E<<4&4294967295|E>>>28),E=P+(v^_^I)+b[12]+3873151461&4294967295,P=v+(E<<11&4294967295|E>>>21),E=I+(P^v^_)+b[15]+530742520&4294967295,I=P+(E<<16&4294967295|E>>>16),E=_+(I^P^v)+b[2]+3299628645&4294967295,_=I+(E<<23&4294967295|E>>>9),E=v+(I^(_|~P))+b[0]+4096336452&4294967295,v=_+(E<<6&4294967295|E>>>26),E=P+(_^(v|~I))+b[7]+1126891415&4294967295,P=v+(E<<10&4294967295|E>>>22),E=I+(v^(P|~_))+b[14]+2878612391&4294967295,I=P+(E<<15&4294967295|E>>>17),E=_+(P^(I|~v))+b[5]+4237533241&4294967295,_=I+(E<<21&4294967295|E>>>11),E=v+(I^(_|~P))+b[12]+1700485571&4294967295,v=_+(E<<6&4294967295|E>>>26),E=P+(_^(v|~I))+b[3]+2399980690&4294967295,P=v+(E<<10&4294967295|E>>>22),E=I+(v^(P|~_))+b[10]+4293915773&4294967295,I=P+(E<<15&4294967295|E>>>17),E=_+(P^(I|~v))+b[1]+2240044497&4294967295,_=I+(E<<21&4294967295|E>>>11),E=v+(I^(_|~P))+b[8]+1873313359&4294967295,v=_+(E<<6&4294967295|E>>>26),E=P+(_^(v|~I))+b[15]+4264355552&4294967295,P=v+(E<<10&4294967295|E>>>22),E=I+(v^(P|~_))+b[6]+2734768916&4294967295,I=P+(E<<15&4294967295|E>>>17),E=_+(P^(I|~v))+b[13]+1309151649&4294967295,_=I+(E<<21&4294967295|E>>>11),E=v+(I^(_|~P))+b[4]+4149444226&4294967295,v=_+(E<<6&4294967295|E>>>26),E=P+(_^(v|~I))+b[11]+3174756917&4294967295,P=v+(E<<10&4294967295|E>>>22),E=I+(v^(P|~_))+b[2]+718787259&4294967295,I=P+(E<<15&4294967295|E>>>17),E=_+(P^(I|~v))+b[9]+3951481745&4294967295,w.g[0]=w.g[0]+v&4294967295,w.g[1]=w.g[1]+(I+(E<<21&4294967295|E>>>11))&4294967295,w.g[2]=w.g[2]+I&4294967295,w.g[3]=w.g[3]+P&4294967295}s.prototype.v=function(w,v){v===void 0&&(v=w.length);const _=v-this.blockSize,b=this.C;let I=this.h,P=0;for(;P<v;){if(I==0)for(;P<=_;)r(this,w,P),P+=this.blockSize;if(typeof w=="string"){for(;P<v;)if(b[I++]=w.charCodeAt(P++),I==this.blockSize){r(this,b),I=0;break}}else for(;P<v;)if(b[I++]=w[P++],I==this.blockSize){r(this,b),I=0;break}}this.h=I,this.o+=v},s.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var v=1;v<w.length-8;++v)w[v]=0;v=this.o*8;for(var _=w.length-8;_<w.length;++_)w[_]=v&255,v/=256;for(this.v(w),w=Array(16),v=0,_=0;_<4;++_)for(let b=0;b<32;b+=8)w[v++]=this.g[_]>>>b&255;return w};function i(w,v){var _=l;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=v(w)}function o(w,v){this.h=v;const _=[];let b=!0;for(let I=w.length-1;I>=0;I--){const P=w[I]|0;b&&P==v||(_[I]=P,b=!1)}this.g=_}var l={};function u(w){return-128<=w&&w<128?i(w,function(v){return new o([v|0],v<0?-1:0)}):new o([w|0],w<0?-1:0)}function c(w){if(isNaN(w)||!isFinite(w))return p;if(w<0)return D(c(-w));const v=[];let _=1;for(let b=0;w>=_;b++)v[b]=w/_|0,_*=4294967296;return new o(v,0)}function d(w,v){if(w.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(w.charAt(0)=="-")return D(d(w.substring(1),v));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=c(Math.pow(v,8));let b=p;for(let P=0;P<w.length;P+=8){var I=Math.min(8,w.length-P);const E=parseInt(w.substring(P,P+I),v);I<8?(I=c(Math.pow(v,I)),b=b.j(I).add(c(E))):(b=b.j(_),b=b.add(c(E)))}return b}var p=u(0),y=u(1),A=u(16777216);n=o.prototype,n.m=function(){if(R(this))return-D(this).m();let w=0,v=1;for(let _=0;_<this.g.length;_++){const b=this.i(_);w+=(b>=0?b:4294967296+b)*v,v*=4294967296}return w},n.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(k(this))return"0";if(R(this))return"-"+D(this).toString(w);const v=c(Math.pow(w,6));var _=this;let b="";for(;;){const I=W(_,v).g;_=X(_,I.j(v));let P=((_.g.length>0?_.g[0]:_.h)>>>0).toString(w);if(_=I,k(_))return P+b;for(;P.length<6;)P="0"+P;b=P+b}},n.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function k(w){if(w.h!=0)return!1;for(let v=0;v<w.g.length;v++)if(w.g[v]!=0)return!1;return!0}function R(w){return w.h==-1}n.l=function(w){return w=X(this,w),R(w)?-1:k(w)?0:1};function D(w){const v=w.g.length,_=[];for(let b=0;b<v;b++)_[b]=~w.g[b];return new o(_,~w.h).add(y)}n.abs=function(){return R(this)?D(this):this},n.add=function(w){const v=Math.max(this.g.length,w.g.length),_=[];let b=0;for(let I=0;I<=v;I++){let P=b+(this.i(I)&65535)+(w.i(I)&65535),E=(P>>>16)+(this.i(I)>>>16)+(w.i(I)>>>16);b=E>>>16,P&=65535,E&=65535,_[I]=E<<16|P}return new o(_,_[_.length-1]&-2147483648?-1:0)};function X(w,v){return w.add(D(v))}n.j=function(w){if(k(this)||k(w))return p;if(R(this))return R(w)?D(this).j(D(w)):D(D(this).j(w));if(R(w))return D(this.j(D(w)));if(this.l(A)<0&&w.l(A)<0)return c(this.m()*w.m());const v=this.g.length+w.g.length,_=[];for(var b=0;b<2*v;b++)_[b]=0;for(b=0;b<this.g.length;b++)for(let I=0;I<w.g.length;I++){const P=this.i(b)>>>16,E=this.i(b)&65535,it=w.i(I)>>>16,O=w.i(I)&65535;_[2*b+2*I]+=E*O,G(_,2*b+2*I),_[2*b+2*I+1]+=P*O,G(_,2*b+2*I+1),_[2*b+2*I+1]+=E*it,G(_,2*b+2*I+1),_[2*b+2*I+2]+=P*it,G(_,2*b+2*I+2)}for(w=0;w<v;w++)_[w]=_[2*w+1]<<16|_[2*w];for(w=v;w<2*v;w++)_[w]=0;return new o(_,0)};function G(w,v){for(;(w[v]&65535)!=w[v];)w[v+1]+=w[v]>>>16,w[v]&=65535,v++}function Q(w,v){this.g=w,this.h=v}function W(w,v){if(k(v))throw Error("division by zero");if(k(w))return new Q(p,p);if(R(w))return v=W(D(w),v),new Q(D(v.g),D(v.h));if(R(v))return v=W(w,D(v)),new Q(D(v.g),v.h);if(w.g.length>30){if(R(w)||R(v))throw Error("slowDivide_ only works with positive integers.");for(var _=y,b=v;b.l(w)<=0;)_=nt(_),b=nt(b);var I=ut(_,1),P=ut(b,1);for(b=ut(b,2),_=ut(_,2);!k(b);){var E=P.add(b);E.l(w)<=0&&(I=I.add(_),P=E),b=ut(b,1),_=ut(_,1)}return v=X(w,I.j(v)),new Q(I,v)}for(I=p;w.l(v)>=0;){for(_=Math.max(1,Math.floor(w.m()/v.m())),b=Math.ceil(Math.log(_)/Math.LN2),b=b<=48?1:Math.pow(2,b-48),P=c(_),E=P.j(v);R(E)||E.l(w)>0;)_-=b,P=c(_),E=P.j(v);k(P)&&(P=y),I=I.add(P),w=X(w,E)}return new Q(I,w)}n.B=function(w){return W(this,w).h},n.and=function(w){const v=Math.max(this.g.length,w.g.length),_=[];for(let b=0;b<v;b++)_[b]=this.i(b)&w.i(b);return new o(_,this.h&w.h)},n.or=function(w){const v=Math.max(this.g.length,w.g.length),_=[];for(let b=0;b<v;b++)_[b]=this.i(b)|w.i(b);return new o(_,this.h|w.h)},n.xor=function(w){const v=Math.max(this.g.length,w.g.length),_=[];for(let b=0;b<v;b++)_[b]=this.i(b)^w.i(b);return new o(_,this.h^w.h)};function nt(w){const v=w.g.length+1,_=[];for(let b=0;b<v;b++)_[b]=w.i(b)<<1|w.i(b-1)>>>31;return new o(_,w.h)}function ut(w,v){const _=v>>5;v%=32;const b=w.g.length-_,I=[];for(let P=0;P<b;P++)I[P]=v>0?w.i(P+_)>>>v|w.i(P+_+1)<<32-v:w.i(P+_);return new o(I,w.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,gm=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Jn=o}).apply(typeof bd<"u"?bd:typeof self<"u"?self:typeof window<"u"?window:{});var Vo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _m,hi,ym,jo,uu,vm,Em,Im;(function(){var n,t=Object.defineProperty;function e(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vo=="object"&&Vo];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var s=e(this);function r(a,h){if(h)t:{var f=s;a=a.split(".");for(var g=0;g<a.length-1;g++){var V=a[g];if(!(V in f))break t;f=f[V]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&t(f,a,{configurable:!0,writable:!0,value:h})}}r("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(a){return a||function(h){var f=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&f.push([g,h[g]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,f){return a.call.apply(a.bind,arguments)}function c(a,h,f){return c=u,c.apply(null,arguments)}function d(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,h){function f(){}f.prototype=h.prototype,a.Z=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(g,V,N){for(var J=Array(arguments.length-2),yt=2;yt<arguments.length;yt++)J[yt-2]=arguments[yt];return h.prototype[V].apply(g,J)}}var y=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function A(a){const h=a.length;if(h>0){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function k(a,h){for(let g=1;g<arguments.length;g++){const V=arguments[g];var f=typeof V;if(f=f!="object"?f:V?Array.isArray(V)?"array":f:"null",f=="array"||f=="object"&&typeof V.length=="number"){f=a.length||0;const N=V.length||0;a.length=f+N;for(let J=0;J<N;J++)a[f+J]=V[J]}else a.push(V)}}class R{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function D(a){o.setTimeout(()=>{throw a},0)}function X(){var a=w;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class G{constructor(){this.h=this.g=null}add(h,f){const g=Q.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Q=new R(()=>new W,a=>a.reset());class W{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let nt,ut=!1,w=new G,v=()=>{const a=Promise.resolve(void 0);nt=()=>{a.then(_)}};function _(){for(var a;a=X();){try{a.h.call(a.g)}catch(f){D(f)}var h=Q;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}ut=!1}function b(){this.u=this.u,this.C=this.C}b.prototype.u=!1,b.prototype.dispose=function(){this.u||(this.u=!0,this.N())},b.prototype[Symbol.dispose]=function(){this.dispose()},b.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var P=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,h),o.removeEventListener("test",f,h)}catch{}return a}();function E(a){return/^[\s\xa0]*$/.test(a)}function it(a,h){I.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(it,I),it.prototype.init=function(a,h){const f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&it.Z.h.call(this)},it.prototype.h=function(){it.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var O="closure_listenable_"+(Math.random()*1e6|0),L=0;function x(a,h,f,g,V){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=V,this.key=++L,this.da=this.fa=!1}function H(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ot(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function Re(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function Ae(a){const h={};for(const f in a)h[f]=a[f];return h}const ge="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ks(a,h){let f,g;for(let V=1;V<arguments.length;V++){g=arguments[V];for(f in g)a[f]=g[f];for(let N=0;N<ge.length;N++)f=ge[N],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function ee(a){this.src=a,this.g={},this.h=0}ee.prototype.add=function(a,h,f,g,V){const N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);const J=Ke(a,h,g,V);return J>-1?(h=a[J],f||(h.fa=!1)):(h=new x(h,this.src,N,!!g,V),h.fa=f,a.push(h)),h};function Xe(a,h){const f=h.type;if(f in a.g){var g=a.g[f],V=Array.prototype.indexOf.call(g,h,void 0),N;(N=V>=0)&&Array.prototype.splice.call(g,V,1),N&&(H(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Ke(a,h,f,g){for(let V=0;V<a.length;++V){const N=a[V];if(!N.da&&N.listener==h&&N.capture==!!f&&N.ha==g)return V}return-1}var Je="closure_lm_"+(Math.random()*1e6|0),as={};function Ur(a,h,f,g,V){if(Array.isArray(h)){for(let N=0;N<h.length;N++)Ur(a,h[N],f,g,V);return null}return f=Y(f),a&&a[O]?a.J(h,f,l(g)?!!g.capture:!1,V):ls(a,h,f,!1,g,V)}function ls(a,h,f,g,V,N){if(!h)throw Error("Invalid event type");const J=l(V)?!!V.capture:!!V;let yt=B(a);if(yt||(a[Je]=yt=new ee(a)),f=yt.add(h,f,g,J,N),f.proxy)return f;if(g=jc(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)P||(V=J),V===void 0&&(V=!1),a.addEventListener(h.toString(),g,V);else if(a.attachEvent)a.attachEvent(M(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function jc(){function a(f){return h.call(a.src,a.listener,f)}const h=z;return a}function T(a,h,f,g,V){if(Array.isArray(h))for(var N=0;N<h.length;N++)T(a,h[N],f,g,V);else g=l(g)?!!g.capture:!!g,f=Y(f),a&&a[O]?(a=a.i,N=String(h).toString(),N in a.g&&(h=a.g[N],f=Ke(h,f,g,V),f>-1&&(H(h[f]),Array.prototype.splice.call(h,f,1),h.length==0&&(delete a.g[N],a.h--)))):a&&(a=B(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Ke(h,f,g,V)),(f=a>-1?h[a]:null)&&S(f))}function S(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[O])Xe(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(M(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=B(h))?(Xe(f,a),f.h==0&&(f.src=null,h[Je]=null)):H(a)}}}function M(a){return a in as?as[a]:as[a]="on"+a}function z(a,h){if(a.da)a=!0;else{h=new it(h,this);const f=a.listener,g=a.ha||a.src;a.fa&&S(a),a=f.call(g,h)}return a}function B(a){return a=a[Je],a instanceof ee?a:null}var U="__closure_events_fn_"+(Math.random()*1e9>>>0);function Y(a){return typeof a=="function"?a:(a[U]||(a[U]=function(h){return a.handleEvent(h)}),a[U])}function q(){b.call(this),this.i=new ee(this),this.M=this,this.G=null}p(q,b),q.prototype[O]=!0,q.prototype.removeEventListener=function(a,h,f,g){T(this,a,h,f,g)};function j(a,h){var f,g=a.G;if(g)for(f=[];g;g=g.G)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new I(h,a);else if(h instanceof I)h.target=h.target||a;else{var V=h;h=new I(g,a),Ks(h,V)}V=!0;let N,J;if(f)for(J=f.length-1;J>=0;J--)N=h.g=f[J],V=$(N,g,!0,h)&&V;if(N=h.g=a,V=$(N,g,!0,h)&&V,V=$(N,g,!1,h)&&V,f)for(J=0;J<f.length;J++)N=h.g=f[J],V=$(N,g,!1,h)&&V}q.prototype.N=function(){if(q.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const f=a.g[h];for(let g=0;g<f.length;g++)H(f[g]);delete a.g[h],a.h--}}this.G=null},q.prototype.J=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},q.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function $(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let V=!0;for(let N=0;N<h.length;++N){const J=h[N];if(J&&!J.da&&J.capture==f){const yt=J.listener,Yt=J.ha||J.src;J.fa&&Xe(a.i,J),V=yt.call(Yt,g)!==!1&&V}}return V&&!g.defaultPrevented}function ct(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function tt(a){a.g=ct(()=>{a.g=null,a.i&&(a.i=!1,tt(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class ot extends b{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:tt(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ht(a){b.call(this),this.h=a,this.g={}}p(ht,b);var It=[];function Dt(a){Ot(a.g,function(h,f){this.g.hasOwnProperty(f)&&S(h)},a),a.g={}}ht.prototype.N=function(){ht.Z.N.call(this),Dt(this)},ht.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var St=o.JSON.stringify,le=o.JSON.parse,ue=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function xe(){}function Pe(){}var He={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Hs(){I.call(this,"d")}p(Hs,I);function ie(){I.call(this,"c")}p(ie,I);var ne={},$r=null;function us(){return $r=$r||new q}ne.Ia="serverreachability";function qc(a){I.call(this,ne.Ia,a)}p(qc,I);function jr(a){const h=us();j(h,new qc(h))}ne.STAT_EVENT="statevent";function zc(a,h){I.call(this,ne.STAT_EVENT,a),this.stat=h}p(zc,I);function _e(a){const h=us();j(h,new zc(h,a))}ne.Ja="timingevent";function Kc(a,h){I.call(this,ne.Ja,a),this.size=h}p(Kc,I);function qr(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function zr(){this.g=!0}zr.prototype.ua=function(){this.g=!1};function k_(a,h,f,g,V,N){a.info(function(){if(a.g)if(N){var J="",yt=N.split("&");for(let Ft=0;Ft<yt.length;Ft++){var Yt=yt[Ft].split("=");if(Yt.length>1){const se=Yt[0];Yt=Yt[1];const Ze=se.split("_");J=Ze.length>=2&&Ze[1]=="type"?J+(se+"="+Yt+"&"):J+(se+"=redacted&")}}}else J=null;else J=N;return"XMLHTTP REQ ("+g+") [attempt "+V+"]: "+h+`
`+f+`
`+J})}function N_(a,h,f,g,V,N,J){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+V+"]: "+h+`
`+f+`
`+N+" "+J})}function Gs(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+O_(a,f)+(g?" "+g:"")})}function M_(a,h){a.info(function(){return"TIMEOUT: "+h})}zr.prototype.info=function(){};function O_(a,h){if(!a.g)return h;if(!h)return null;try{const N=JSON.parse(h);if(N){for(a=0;a<N.length;a++)if(Array.isArray(N[a])){var f=N[a];if(!(f.length<2)){var g=f[1];if(Array.isArray(g)&&!(g.length<1)){var V=g[0];if(V!="noop"&&V!="stop"&&V!="close")for(let J=1;J<g.length;J++)g[J]=""}}}}return St(N)}catch{return h}}var _o={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Hc={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Gc;function ll(){}p(ll,xe),ll.prototype.g=function(){return new XMLHttpRequest},Gc=new ll;function Kr(a){return encodeURIComponent(String(a))}function F_(a){var h=1;a=a.split(":");const f=[];for(;h>0&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function Dn(a,h,f,g){this.j=a,this.i=h,this.l=f,this.S=g||1,this.V=new ht(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Wc}function Wc(){this.i=null,this.g="",this.h=!1}var Qc={},ul={};function cl(a,h,f){a.M=1,a.A=vo(Ye(h)),a.u=f,a.R=!0,Xc(a,null)}function Xc(a,h){a.F=Date.now(),yo(a),a.B=Ye(a.A);var f=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),uh(f.i,"t",g),a.C=0,f=a.j.L,a.h=new Wc,a.g=Rh(a.j,f?h:null,!a.u),a.P>0&&(a.O=new ot(c(a.Y,a,a.g),a.P)),h=a.V,f=a.g,g=a.ba;var V="readystatechange";Array.isArray(V)||(V&&(It[0]=V.toString()),V=It);for(let N=0;N<V.length;N++){const J=Ur(f,V[N],g||h.handleEvent,!1,h.h||h);if(!J)break;h.g[J.key]=J}h=a.J?Ae(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),jr(),k_(a.i,a.v,a.B,a.l,a.S,a.u)}Dn.prototype.ba=function(a){a=a.target;const h=this.O;h&&Mn(a)==3?h.j():this.Y(a)},Dn.prototype.Y=function(a){try{if(a==this.g)t:{const yt=Mn(this.g),Yt=this.g.ya(),Ft=this.g.ca();if(!(yt<3)&&(yt!=3||this.g&&(this.h.h||this.g.la()||gh(this.g)))){this.K||yt!=4||Yt==7||(Yt==8||Ft<=0?jr(3):jr(2)),hl(this);var h=this.g.ca();this.X=h;var f=L_(this);if(this.o=h==200,N_(this.i,this.v,this.B,this.l,this.S,yt,h),this.o){if(this.U&&!this.L){e:{if(this.g){var g,V=this.g;if((g=V.g?V.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(g)){var N=g;break e}}N=null}if(a=N)Gs(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,dl(this,a);else{this.o=!1,this.m=3,_e(12),cs(this),Hr(this);break t}}if(this.R){a=!0;let se;for(;!this.K&&this.C<f.length;)if(se=B_(this,f),se==ul){yt==4&&(this.m=4,_e(14),a=!1),Gs(this.i,this.l,null,"[Incomplete Response]");break}else if(se==Qc){this.m=4,_e(15),Gs(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else Gs(this.i,this.l,se,null),dl(this,se);if(Jc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),yt!=4||f.length!=0||this.h.h||(this.m=1,_e(16),a=!1),this.o=this.o&&a,!a)Gs(this.i,this.l,f,"[Invalid Chunked Response]"),cs(this),Hr(this);else if(f.length>0&&!this.W){this.W=!0;var J=this.j;J.g==this&&J.aa&&!J.P&&(J.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),El(J),J.P=!0,_e(11))}}else Gs(this.i,this.l,f,null),dl(this,f);yt==4&&cs(this),this.o&&!this.K&&(yt==4?Th(this.j,this):(this.o=!1,yo(this)))}else Z_(this.g),h==400&&f.indexOf("Unknown SID")>0?(this.m=3,_e(12)):(this.m=0,_e(13)),cs(this),Hr(this)}}}catch{}finally{}};function L_(a){if(!Jc(a))return a.g.la();const h=gh(a.g);if(h==="")return"";let f="";const g=h.length,V=Mn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return cs(a),Hr(a),"";a.h.i=new o.TextDecoder}for(let N=0;N<g;N++)a.h.h=!0,f+=a.h.i.decode(h[N],{stream:!(V&&N==g-1)});return h.length=0,a.h.g+=f,a.C=0,a.h.g}function Jc(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function B_(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?ul:(f=Number(h.substring(f,g)),isNaN(f)?Qc:(g+=1,g+f>h.length?ul:(h=h.slice(g,g+f),a.C=g+f,h)))}Dn.prototype.cancel=function(){this.K=!0,cs(this)};function yo(a){a.T=Date.now()+a.H,Yc(a,a.H)}function Yc(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=qr(c(a.aa,a),h)}function hl(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Dn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(M_(this.i,this.B),this.M!=2&&(jr(),_e(17)),cs(this),this.m=2,Hr(this)):Yc(this,this.T-a)};function Hr(a){a.j.I==0||a.K||Th(a.j,a)}function cs(a){hl(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Dt(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function dl(a,h){try{var f=a.j;if(f.I!=0&&(f.g==a||fl(f.h,a))){if(!a.L&&fl(f.h,a)&&f.I==3){try{var g=f.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var V=g;if(V[0]==0){t:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)wo(f),bo(f);else break t;vl(f),_e(18)}}else f.xa=V[1],0<f.xa-f.K&&V[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=qr(c(f.Va,f),6e3));eh(f.h)<=1&&f.ta&&(f.ta=void 0)}else ds(f,11)}else if((a.L||f.g==a)&&wo(f),!E(h))for(V=f.Ba.g.parse(h),h=0;h<V.length;h++){let Ft=V[h];const se=Ft[0];if(!(se<=f.K))if(f.K=se,Ft=Ft[1],f.I==2)if(Ft[0]=="c"){f.M=Ft[1],f.ba=Ft[2];const Ze=Ft[3];Ze!=null&&(f.ka=Ze,f.j.info("VER="+f.ka));const fs=Ft[4];fs!=null&&(f.za=fs,f.j.info("SVER="+f.za));const On=Ft[5];On!=null&&typeof On=="number"&&On>0&&(g=1.5*On,f.O=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Fn=a.g;if(Fn){const So=Fn.g?Fn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(So){var N=g.h;N.g||So.indexOf("spdy")==-1&&So.indexOf("quic")==-1&&So.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(pl(N,N.h),N.h=null))}if(g.G){const Il=Fn.g?Fn.g.getResponseHeader("X-HTTP-Session-Id"):null;Il&&(g.wa=Il,$t(g.J,g.G,Il))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),g=f;var J=a;if(g.na=Sh(g,g.L?g.ba:null,g.W),J.L){nh(g.h,J);var yt=J,Yt=g.O;Yt&&(yt.H=Yt),yt.D&&(hl(yt),yo(yt)),g.g=J}else Ih(g);f.i.length>0&&To(f)}else Ft[0]!="stop"&&Ft[0]!="close"||ds(f,7);else f.I==3&&(Ft[0]=="stop"||Ft[0]=="close"?Ft[0]=="stop"?ds(f,7):yl(f):Ft[0]!="noop"&&f.l&&f.l.qa(Ft),f.A=0)}}jr(4)}catch{}}var U_=class{constructor(a,h){this.g=a,this.map=h}};function Zc(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function th(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function eh(a){return a.h?1:a.g?a.g.size:0}function fl(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function pl(a,h){a.g?a.g.add(h):a.h=h}function nh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Zc.prototype.cancel=function(){if(this.i=sh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function sh(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.G);return h}return A(a.i)}var rh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $_(a,h){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const g=a[f].indexOf("=");let V,N=null;g>=0?(V=a[f].substring(0,g),N=a[f].substring(g+1)):V=a[f],h(V,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function kn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof kn?(this.l=a.l,Gr(this,a.j),this.o=a.o,this.g=a.g,Wr(this,a.u),this.h=a.h,ml(this,ch(a.i)),this.m=a.m):a&&(h=String(a).match(rh))?(this.l=!1,Gr(this,h[1]||"",!0),this.o=Qr(h[2]||""),this.g=Qr(h[3]||"",!0),Wr(this,h[4]),this.h=Qr(h[5]||"",!0),ml(this,h[6]||"",!0),this.m=Qr(h[7]||"")):(this.l=!1,this.i=new Jr(null,this.l))}kn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Xr(h,ih,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Xr(h,ih,!0),"@"),a.push(Kr(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Xr(f,f.charAt(0)=="/"?z_:q_,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Xr(f,H_)),a.join("")},kn.prototype.resolve=function(a){const h=Ye(this);let f=!!a.j;f?Gr(h,a.j):f=!!a.o,f?h.o=a.o:f=!!a.g,f?h.g=a.g:f=a.u!=null;var g=a.h;if(f)Wr(h,a.u);else if(f=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var V=h.h.lastIndexOf("/");V!=-1&&(g=h.h.slice(0,V+1)+g)}if(V=g,V==".."||V==".")g="";else if(V.indexOf("./")!=-1||V.indexOf("/.")!=-1){g=V.lastIndexOf("/",0)==0,V=V.split("/");const N=[];for(let J=0;J<V.length;){const yt=V[J++];yt=="."?g&&J==V.length&&N.push(""):yt==".."?((N.length>1||N.length==1&&N[0]!="")&&N.pop(),g&&J==V.length&&N.push("")):(N.push(yt),g=!0)}g=N.join("/")}else g=V}return f?h.h=g:f=a.i.toString()!=="",f?ml(h,ch(a.i)):f=!!a.m,f&&(h.m=a.m),h};function Ye(a){return new kn(a)}function Gr(a,h,f){a.j=f?Qr(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Wr(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function ml(a,h,f){h instanceof Jr?(a.i=h,G_(a.i,a.l)):(f||(h=Xr(h,K_)),a.i=new Jr(h,a.l))}function $t(a,h,f){a.i.set(h,f)}function vo(a){return $t(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Qr(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Xr(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,j_),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function j_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var ih=/[#\/\?@]/g,q_=/[#\?:]/g,z_=/[#\?]/g,K_=/[#\?@]/g,H_=/#/g;function Jr(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function hs(a){a.g||(a.g=new Map,a.h=0,a.i&&$_(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}n=Jr.prototype,n.add=function(a,h){hs(this),this.i=null,a=Ws(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function oh(a,h){hs(a),h=Ws(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function ah(a,h){return hs(a),h=Ws(a,h),a.g.has(h)}n.forEach=function(a,h){hs(this),this.g.forEach(function(f,g){f.forEach(function(V){a.call(h,V,g,this)},this)},this)};function lh(a,h){hs(a);let f=[];if(typeof h=="string")ah(a,h)&&(f=f.concat(a.g.get(Ws(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)f=f.concat(a[h]);return f}n.set=function(a,h){return hs(this),this.i=null,a=Ws(this,a),ah(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},n.get=function(a,h){return a?(a=lh(this,a),a.length>0?String(a[0]):h):h};function uh(a,h,f){oh(a,h),f.length>0&&(a.i=null,a.g.set(Ws(a,h),A(f)),a.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var f=h[g];const V=Kr(f);f=lh(this,f);for(let N=0;N<f.length;N++){let J=V;f[N]!==""&&(J+="="+Kr(f[N])),a.push(J)}}return this.i=a.join("&")};function ch(a){const h=new Jr;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Ws(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function G_(a,h){h&&!a.j&&(hs(a),a.i=null,a.g.forEach(function(f,g){const V=g.toLowerCase();g!=V&&(oh(this,g),uh(this,V,f))},a)),a.j=h}function W_(a,h){const f=new zr;if(o.Image){const g=new Image;g.onload=d(Nn,f,"TestLoadImage: loaded",!0,h,g),g.onerror=d(Nn,f,"TestLoadImage: error",!1,h,g),g.onabort=d(Nn,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=d(Nn,f,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function Q_(a,h){const f=new zr,g=new AbortController,V=setTimeout(()=>{g.abort(),Nn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(N=>{clearTimeout(V),N.ok?Nn(f,"TestPingServer: ok",!0,h):Nn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(V),Nn(f,"TestPingServer: error",!1,h)})}function Nn(a,h,f,g,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),g(f)}catch{}}function X_(){this.g=new ue}function gl(a){this.i=a.Sb||null,this.h=a.ab||!1}p(gl,xe),gl.prototype.g=function(){return new Eo(this.i,this.h)};function Eo(a,h){q.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Eo,q),n=Eo.prototype,n.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Zr(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Yr(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Zr(this)),this.g&&(this.readyState=3,Zr(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;hh(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function hh(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Yr(this):Zr(this),this.readyState==3&&hh(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,Yr(this))},n.Na=function(a){this.g&&(this.response=a,Yr(this))},n.ga=function(){this.g&&Yr(this)};function Yr(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Zr(a)}n.setRequestHeader=function(a,h){this.A.append(a,h)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Zr(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Eo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function dh(a){let h="";return Ot(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function _l(a,h,f){t:{for(g in f){var g=!1;break t}g=!0}g||(f=dh(f),typeof a=="string"?f!=null&&Kr(f):$t(a,h,f))}function Kt(a){q.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Kt,q);var J_=/^https?$/i,Y_=["POST","PUT"];n=Kt.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Gc.g(),this.g.onreadystatechange=y(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(N){fh(this,N);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var V in g)f.set(V,g[V]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const N of g.keys())f.set(N,g.get(N));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(N=>N.toLowerCase()=="content-type"),V=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Y_,h,void 0)>=0)||g||V||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,J]of f)this.g.setRequestHeader(N,J);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(N){fh(this,N)}};function fh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,ph(a),Io(a)}function ph(a){a.A||(a.A=!0,j(a,"complete"),j(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,j(this,"complete"),j(this,"abort"),Io(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Io(this,!0)),Kt.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?mh(this):this.Xa())},n.Xa=function(){mh(this)};function mh(a){if(a.h&&typeof i<"u"){if(a.v&&Mn(a)==4)setTimeout(a.Ca.bind(a),0);else if(j(a,"readystatechange"),Mn(a)==4){a.h=!1;try{const N=a.ca();t:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break t;default:h=!1}var f;if(!(f=h)){var g;if(g=N===0){let J=String(a.D).match(rh)[1]||null;!J&&o.self&&o.self.location&&(J=o.self.location.protocol.slice(0,-1)),g=!J_.test(J?J.toLowerCase():"")}f=g}if(f)j(a,"complete"),j(a,"success");else{a.o=6;try{var V=Mn(a)>2?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.ca()+"]",ph(a)}}finally{Io(a)}}}}function Io(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,h||j(a,"ready");try{f.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Mn(a){return a.g?a.g.readyState:0}n.ca=function(){try{return Mn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),le(h)}};function gh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Z_(a){const h={};a=(a.g&&Mn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(E(a[g]))continue;var f=F_(a[g]);const V=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const N=h[V]||[];h[V]=N,N.push(f)}Re(h,function(g){return g.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ti(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function _h(a){this.za=0,this.i=[],this.j=new zr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ti("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ti("baseRetryDelayMs",5e3,a),this.Za=ti("retryDelaySeedMs",1e4,a),this.Ta=ti("forwardChannelMaxRetries",2,a),this.va=ti("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Zc(a&&a.concurrentRequestLimit),this.Ba=new X_,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=_h.prototype,n.ka=8,n.I=1,n.connect=function(a,h,f,g){_e(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.J=Sh(this,null,this.W),To(this)};function yl(a){if(yh(a),a.I==3){var h=a.V++,f=Ye(a.J);if($t(f,"SID",a.M),$t(f,"RID",h),$t(f,"TYPE","terminate"),ei(a,f),h=new Dn(a,a.j,h),h.M=2,h.A=vo(Ye(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=h.A,f=!0),f||(h.g=Rh(h.j,null),h.g.ea(h.A)),h.F=Date.now(),yo(h)}Ah(a)}function bo(a){a.g&&(El(a),a.g.cancel(),a.g=null)}function yh(a){bo(a),a.v&&(o.clearTimeout(a.v),a.v=null),wo(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function To(a){if(!th(a.h)&&!a.m){a.m=!0;var h=a.Ea;nt||v(),ut||(nt(),ut=!0),w.add(h,a),a.D=0}}function ty(a,h){return eh(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=qr(c(a.Ea,a,h),wh(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const V=new Dn(this,this.j,a);let N=this.o;if(this.U&&(N?(N=Ae(N),Ks(N,this.U)):N=this.U),this.u!==null||this.R||(V.J=N,N=null),this.S)t:{for(var h=0,f=0;f<this.i.length;f++){e:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break e}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=f;break t}if(h===4096||f===this.i.length-1){h=f+1;break t}}h=1e3}else h=1e3;h=Eh(this,V,h),f=Ye(this.J),$t(f,"RID",a),$t(f,"CVER",22),this.G&&$t(f,"X-HTTP-Session-Id",this.G),ei(this,f),N&&(this.R?h="headers="+Kr(dh(N))+"&"+h:this.u&&_l(f,this.u,N)),pl(this.h,V),this.Ra&&$t(f,"TYPE","init"),this.S?($t(f,"$req",h),$t(f,"SID","null"),V.U=!0,cl(V,f,null)):cl(V,f,h),this.I=2}}else this.I==3&&(a?vh(this,a):this.i.length==0||th(this.h)||vh(this))};function vh(a,h){var f;h?f=h.l:f=a.V++;const g=Ye(a.J);$t(g,"SID",a.M),$t(g,"RID",f),$t(g,"AID",a.K),ei(a,g),a.u&&a.o&&_l(g,a.u,a.o),f=new Dn(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Eh(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),pl(a.h,f),cl(f,g,h)}function ei(a,h){a.H&&Ot(a.H,function(f,g){$t(h,g,f)}),a.l&&Ot({},function(f,g){$t(h,g,f)})}function Eh(a,h,f){f=Math.min(a.i.length,f);const g=a.l?c(a.l.Ka,a.l,a):null;t:{var V=a.i;let yt=-1;for(;;){const Yt=["count="+f];yt==-1?f>0?(yt=V[0].g,Yt.push("ofs="+yt)):yt=0:Yt.push("ofs="+yt);let Ft=!0;for(let se=0;se<f;se++){var N=V[se].g;const Ze=V[se].map;if(N-=yt,N<0)yt=Math.max(0,V[se].g-100),Ft=!1;else try{N="req"+N+"_"||"";try{var J=Ze instanceof Map?Ze:Object.entries(Ze);for(const[fs,On]of J){let Fn=On;l(On)&&(Fn=St(On)),Yt.push(N+fs+"="+encodeURIComponent(Fn))}}catch(fs){throw Yt.push(N+"type="+encodeURIComponent("_badmap")),fs}}catch{g&&g(Ze)}}if(Ft){J=Yt.join("&");break t}}J=void 0}return a=a.i.splice(0,f),h.G=a,J}function Ih(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;nt||v(),ut||(nt(),ut=!0),w.add(h,a),a.A=0}}function vl(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=qr(c(a.Da,a),wh(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,bh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=qr(c(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,_e(10),bo(this),bh(this))};function El(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function bh(a){a.g=new Dn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=Ye(a.na);$t(h,"RID","rpc"),$t(h,"SID",a.M),$t(h,"AID",a.K),$t(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&$t(h,"TO",a.ia),$t(h,"TYPE","xmlhttp"),ei(a,h),a.u&&a.o&&_l(h,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=vo(Ye(h)),f.u=null,f.R=!0,Xc(f,a)}n.Va=function(){this.C!=null&&(this.C=null,bo(this),vl(this),_e(19))};function wo(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Th(a,h){var f=null;if(a.g==h){wo(a),El(a),a.g=null;var g=2}else if(fl(a.h,h))f=h.G,nh(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){f=h.u?h.u.length:0,h=Date.now()-h.F;var V=a.D;g=us(),j(g,new Kc(g,f)),To(a)}else Ih(a);else if(V=h.m,V==3||V==0&&h.X>0||!(g==1&&ty(a,h)||g==2&&vl(a)))switch(f&&f.length>0&&(h=a.h,h.i=h.i.concat(f)),V){case 1:ds(a,5);break;case 4:ds(a,10);break;case 3:ds(a,6);break;default:ds(a,2)}}}function wh(a,h){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*h}function ds(a,h){if(a.j.info("Error code "+h),h==2){var f=c(a.bb,a),g=a.Ua;const V=!g;g=new kn(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Gr(g,"https"),vo(g),V?W_(g.toString(),f):Q_(g.toString(),f)}else _e(2);a.I=0,a.l&&a.l.pa(h),Ah(a),yh(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),_e(2)):(this.j.info("Failed to ping google.com"),_e(1))};function Ah(a){if(a.I=0,a.ja=[],a.l){const h=sh(a.h);(h.length!=0||a.i.length!=0)&&(k(a.ja,h),k(a.ja,a.i),a.h.i.length=0,A(a.i),a.i.length=0),a.l.oa()}}function Sh(a,h,f){var g=f instanceof kn?Ye(f):new kn(f);if(g.g!="")h&&(g.g=h+"."+g.g),Wr(g,g.u);else{var V=o.location;g=V.protocol,h=h?h+"."+V.hostname:V.hostname,V=+V.port;const N=new kn(null);g&&Gr(N,g),h&&(N.g=h),V&&Wr(N,V),f&&(N.h=f),g=N}return f=a.G,h=a.wa,f&&h&&$t(g,f,h),$t(g,"VER",a.ka),ei(a,g),g}function Rh(a,h,f){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Kt(new gl({ab:f})):new Kt(a.ma),h.Fa(a.L),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function xh(){}n=xh.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Ao(){}Ao.prototype.g=function(a,h){return new Ce(a,h)};function Ce(a,h){q.call(this),this.g=new _h(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!E(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!E(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Qs(this)}p(Ce,q),Ce.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ce.prototype.close=function(){yl(this.g)},Ce.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=St(a),a=f);h.i.push(new U_(h.Ya++,a)),h.I==3&&To(h)},Ce.prototype.N=function(){this.g.l=null,delete this.j,yl(this.g),delete this.g,Ce.Z.N.call(this)};function Ph(a){Hs.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){t:{for(const f in h){a=f;break t}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(Ph,Hs);function Ch(){ie.call(this),this.status=1}p(Ch,ie);function Qs(a){this.g=a}p(Qs,xh),Qs.prototype.ra=function(){j(this.g,"a")},Qs.prototype.qa=function(a){j(this.g,new Ph(a))},Qs.prototype.pa=function(a){j(this.g,new Ch)},Qs.prototype.oa=function(){j(this.g,"b")},Ao.prototype.createWebChannel=Ao.prototype.g,Ce.prototype.send=Ce.prototype.o,Ce.prototype.open=Ce.prototype.m,Ce.prototype.close=Ce.prototype.close,Im=function(){return new Ao},Em=function(){return us()},vm=ne,uu={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},_o.NO_ERROR=0,_o.TIMEOUT=8,_o.HTTP_ERROR=6,jo=_o,Hc.COMPLETE="complete",ym=Hc,Pe.EventType=He,He.OPEN="a",He.CLOSE="b",He.ERROR="c",He.MESSAGE="d",q.prototype.listen=q.prototype.J,hi=Pe,Kt.prototype.listenOnce=Kt.prototype.K,Kt.prototype.getLastError=Kt.prototype.Ha,Kt.prototype.getLastErrorCode=Kt.prototype.ya,Kt.prototype.getStatus=Kt.prototype.ca,Kt.prototype.getResponseJson=Kt.prototype.La,Kt.prototype.getResponseText=Kt.prototype.la,Kt.prototype.send=Kt.prototype.ea,Kt.prototype.setWithCredentials=Kt.prototype.Fa,_m=Kt}).apply(typeof Vo<"u"?Vo:typeof self<"u"?self:typeof window<"u"?window:{});const Td="@firebase/firestore",wd="4.9.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}oe.UNAUTHENTICATED=new oe(null),oe.GOOGLE_CREDENTIALS=new oe("google-credentials-uid"),oe.FIRST_PARTY=new oe("first-party-uid"),oe.MOCK_USER=new oe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fr="12.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks=new cm("@firebase/firestore");function ir(){return ks.logLevel}function K(n,...t){if(ks.logLevel<=At.DEBUG){const e=t.map(tc);ks.debug(`Firestore (${Fr}): ${n}`,...e)}}function Te(n,...t){if(ks.logLevel<=At.ERROR){const e=t.map(tc);ks.error(`Firestore (${Fr}): ${n}`,...e)}}function Ns(n,...t){if(ks.logLevel<=At.WARN){const e=t.map(tc);ks.warn(`Firestore (${Fr}): ${n}`,...e)}}function tc(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(n,t,e){let s="Unexpected state";typeof t=="string"?s=t:e=t,bm(n,s,e)}function bm(n,t,e){let s=`FIRESTORE (${Fr}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{s+=" CONTEXT: "+JSON.stringify(e)}catch{s+=" CONTEXT: "+e}throw Te(s),new Error(s)}function rt(n,t,e,s){let r="Unexpected state";typeof e=="string"?r=e:s=e,n||bm(t,r,s)}function mt(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class et extends Or{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class mb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(oe.UNAUTHENTICATED))}shutdown(){}}class gb{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class _b{constructor(t){this.t=t,this.currentUser=oe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){rt(this.o===void 0,42304);let s=this.i;const r=u=>this.i!==s?(s=this.i,e(u)):Promise.resolve();let i=new bn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new bn,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const u=i;t.enqueueRetryable(async()=>{await u.promise,await r(this.currentUser)})},l=u=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new bn)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(s=>this.i!==t?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(rt(typeof s.accessToken=="string",31837,{l:s}),new Tm(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return rt(t===null||typeof t=="string",2055,{h:t}),new oe(t)}}class yb{constructor(t,e,s){this.P=t,this.T=e,this.I=s,this.type="FirstParty",this.user=oe.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class vb{constructor(t,e,s){this.P=t,this.T=e,this.I=s}getToken(){return Promise.resolve(new yb(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(oe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ad{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Eb{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,YI(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){rt(this.o===void 0,3512);const s=i=>{i.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>s(i))};const r=i=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ad(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(rt(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Ad(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ib(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let s=0;s<n;s++)e[s]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=Ib(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<e&&(s+=t.charAt(r[i]%62))}return s}}function pt(n,t){return n<t?-1:n>t?1:0}function cu(n,t){const e=Math.min(n.length,t.length);for(let s=0;s<e;s++){const r=n.charAt(s),i=t.charAt(s);if(r!==i)return Ol(r)===Ol(i)?pt(r,i):Ol(r)?1:-1}return pt(n.length,t.length)}const bb=55296,Tb=57343;function Ol(n){const t=n.charCodeAt(0);return t>=bb&&t<=Tb}function br(n,t,e){return n.length===t.length&&n.every((s,r)=>e(s,t[r]))}function wm(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd="__name__";class nn{constructor(t,e,s){e===void 0?e=0:e>t.length&&st(637,{offset:e,range:t.length}),s===void 0?s=t.length-e:s>t.length-e&&st(1746,{length:s,range:t.length-e}),this.segments=t,this.offset=e,this.len=s}get length(){return this.len}isEqual(t){return nn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof nn?t.forEach(s=>{e.push(s)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,s=this.limit();e<s;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const s=Math.min(t.length,e.length);for(let r=0;r<s;r++){const i=nn.compareSegments(t.get(r),e.get(r));if(i!==0)return i}return pt(t.length,e.length)}static compareSegments(t,e){const s=nn.isNumericId(t),r=nn.isNumericId(e);return s&&!r?-1:!s&&r?1:s&&r?nn.extractNumericId(t).compare(nn.extractNumericId(e)):cu(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Jn.fromString(t.substring(4,t.length-2))}}class Nt extends nn{construct(t,e,s){return new Nt(t,e,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const s of t){if(s.indexOf("//")>=0)throw new et(F.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);e.push(...s.split("/").filter(r=>r.length>0))}return new Nt(e)}static emptyPath(){return new Nt([])}}const wb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class zt extends nn{construct(t,e,s){return new zt(t,e,s)}static isValidIdentifier(t){return wb.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),zt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Sd}static keyField(){return new zt([Sd])}static fromServerFormat(t){const e=[];let s="",r=0;const i=()=>{if(s.length===0)throw new et(F.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(s),s=""};let o=!1;for(;r<t.length;){const l=t[r];if(l==="\\"){if(r+1===t.length)throw new et(F.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[r+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new et(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=u,r+=2}else l==="`"?(o=!o,r++):l!=="."||o?(s+=l,r++):(i(),r++)}if(i(),o)throw new et(F.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new zt(e)}static emptyPath(){return new zt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t){this.path=t}static fromPath(t){return new Z(Nt.fromString(t))}static fromName(t){return new Z(Nt.fromString(t).popFirst(5))}static empty(){return new Z(Nt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Nt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Nt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Z(new Nt(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ab(n,t,e){if(!e)throw new et(F.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Sb(n,t,e,s){if(t===!0&&s===!0)throw new et(F.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Rd(n){if(!Z.isDocumentKey(n))throw new et(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Am(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function nc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(s){return s.constructor?s.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":st(12329,{type:typeof n})}function Tn(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new et(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=nc(n);throw new et(F.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(n,t){const e={typeString:n};return t&&(e.value=t),e}function ao(n,t){if(!Am(n))throw new et(F.INVALID_ARGUMENT,"JSON must be an object");let e;for(const s in t)if(t[s]){const r=t[s].typeString,i="value"in t[s]?{value:t[s].value}:void 0;if(!(s in n)){e=`JSON missing required field: '${s}'`;break}const o=n[s];if(r&&typeof o!==r){e=`JSON field '${s}' must be a ${r}.`;break}if(i!==void 0&&o!==i.value){e=`Expected '${s}' field to equal '${i.value}'`;break}}if(e)throw new et(F.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd=-62135596800,Pd=1e6;class Vt{static now(){return Vt.fromMillis(Date.now())}static fromDate(t){return Vt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),s=Math.floor((t-1e3*e)*Pd);return new Vt(e,s)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new et(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new et(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<xd)throw new et(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new et(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Pd}_compareTo(t){return this.seconds===t.seconds?pt(this.nanoseconds,t.nanoseconds):pt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Vt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(ao(t,Vt._jsonSchema))return new Vt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-xd;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Vt._jsonSchemaVersion="firestore/timestamp/1.0",Vt._jsonSchema={type:Qt("string",Vt._jsonSchemaVersion),seconds:Qt("number"),nanoseconds:Qt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{static fromTimestamp(t){return new at(t)}static min(){return new at(new Vt(0,0))}static max(){return new at(new Vt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi=-1;class fa{constructor(t,e,s,r){this.indexId=t,this.collectionGroup=e,this.fields=s,this.indexState=r}}function hu(n){return n.fields.find(t=>t.kind===2)}function vs(n){return n.fields.filter(t=>t.kind!==2)}fa.UNKNOWN_ID=-1;class qo{constructor(t,e){this.fieldPath=t,this.kind=e}}class Ki{constructor(t,e){this.sequenceNumber=t,this.offset=e}static empty(){return new Ki(0,Le.min())}}function Rb(n,t){const e=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=at.fromTimestamp(s===1e9?new Vt(e+1,0):new Vt(e,s));return new Le(r,Z.empty(),t)}function Sm(n){return new Le(n.readTime,n.key,zi)}class Le{constructor(t,e,s){this.readTime=t,this.documentKey=e,this.largestBatchId=s}static min(){return new Le(at.min(),Z.empty(),zi)}static max(){return new Le(at.max(),Z.empty(),zi)}}function sc(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=Z.comparator(n.documentKey,t.documentKey),e!==0?e:pt(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class xm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function js(n){if(n.code!==F.FAILED_PRECONDITION||n.message!==Rm)throw n;K("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&st(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new C((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(e,i).next(s,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof C?e:C.resolve(e)}catch(e){return C.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):C.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):C.reject(e)}static resolve(t){return new C((e,s)=>{e(t)})}static reject(t){return new C((e,s)=>{s(t)})}static waitFor(t){return new C((e,s)=>{let r=0,i=0,o=!1;t.forEach(l=>{++r,l.next(()=>{++i,o&&i===r&&e()},u=>s(u))}),o=!0,i===r&&e()})}static or(t){let e=C.resolve(!1);for(const s of t)e=e.next(r=>r?C.resolve(r):s());return e}static forEach(t,e){const s=[];return t.forEach((r,i)=>{s.push(e.call(this,r,i))}),this.waitFor(s)}static mapArray(t,e){return new C((s,r)=>{const i=t.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const c=u;e(t[c]).next(d=>{o[c]=d,++l,l===i&&s(o)},d=>r(d))}})}static doWhile(t,e){return new C((s,r)=>{const i=()=>{t()===!0?e().next(()=>{i()},r):s()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke="SimpleDb";class za{static open(t,e,s,r){try{return new za(e,t.transaction(r,s))}catch(i){throw new Ri(e,i)}}constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.S=new bn,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{e.error?this.S.reject(new Ri(t,e.error)):this.S.resolve()},this.transaction.onerror=s=>{const r=rc(s.target.error);this.S.reject(new Ri(t,r))}}get D(){return this.S.promise}abort(t){t&&this.S.reject(t),this.aborted||(K(ke,"Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const e=this.transaction.objectStore(t);return new Pb(e)}}class Yn{static delete(t){return K(ke,"Removing database:",t),Is(sm().indexedDB.deleteDatabase(t)).toPromise()}static v(){if(!lm())return!1;if(Yn.F())return!0;const t=ua(),e=Yn.M(t),s=0<e&&e<10,r=Pm(t),i=0<r&&r<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||s||i)}static F(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)==null?void 0:t.__PRIVATE_USE_MOCK_PERSISTENCE)==="YES"}static O(t,e){return t.store(e)}static M(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),s=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(s)}constructor(t,e,s){this.name=t,this.version=e,this.N=s,this.B=null,Yn.M(ua())===12.2&&Te("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async L(t){return this.db||(K(ke,"Opening database:",this.name),this.db=await new Promise((e,s)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=i=>{const o=i.target.result;e(o)},r.onblocked=()=>{s(new Ri(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=i=>{const o=i.target.error;o.name==="VersionError"?s(new et(F.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?s(new et(F.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):s(new Ri(t,o))},r.onupgradeneeded=i=>{K(ke,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.N.k(o,r.transaction,i.oldVersion,this.version).next(()=>{K(ke,"Database upgrade to version "+this.version+" complete")})}})),this.q&&(this.db.onversionchange=e=>this.q(e)),this.db}$(t){this.q=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,s,r){const i=e==="readonly";let o=0;for(;;){++o;try{this.db=await this.L(t);const l=za.open(this.db,t,i?"readonly":"readwrite",s),u=r(l).next(c=>(l.C(),c)).catch(c=>(l.abort(c),C.reject(c))).toPromise();return u.catch(()=>{}),await l.D,u}catch(l){const u=l,c=u.name!=="FirebaseError"&&o<3;if(K(ke,"Transaction failed with error:",u.message,"Retrying:",c),this.close(),!c)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Pm(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}class xb{constructor(t){this.U=t,this.K=!1,this.W=null}get isDone(){return this.K}get G(){return this.W}set cursor(t){this.U=t}done(){this.K=!0}j(t){this.W=t}delete(){return Is(this.U.delete())}}class Ri extends et{constructor(t,e){super(F.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function is(n){return n.name==="IndexedDbTransactionError"}class Pb{constructor(t){this.store=t}put(t,e){let s;return e!==void 0?(K(ke,"PUT",this.store.name,t,e),s=this.store.put(e,t)):(K(ke,"PUT",this.store.name,"<auto-key>",t),s=this.store.put(t)),Is(s)}add(t){return K(ke,"ADD",this.store.name,t,t),Is(this.store.add(t))}get(t){return Is(this.store.get(t)).next(e=>(e===void 0&&(e=null),K(ke,"GET",this.store.name,t,e),e))}delete(t){return K(ke,"DELETE",this.store.name,t),Is(this.store.delete(t))}count(){return K(ke,"COUNT",this.store.name),Is(this.store.count())}J(t,e){const s=this.options(t,e),r=s.index?this.store.index(s.index):this.store;if(typeof r.getAll=="function"){const i=r.getAll(s.range);return new C((o,l)=>{i.onerror=u=>{l(u.target.error)},i.onsuccess=u=>{o(u.target.result)}})}{const i=this.cursor(s),o=[];return this.H(i,(l,u)=>{o.push(u)}).next(()=>o)}}Y(t,e){const s=this.store.getAll(t,e===null?void 0:e);return new C((r,i)=>{s.onerror=o=>{i(o.target.error)},s.onsuccess=o=>{r(o.target.result)}})}Z(t,e){K(ke,"DELETE ALL",this.store.name);const s=this.options(t,e);s.X=!1;const r=this.cursor(s);return this.H(r,(i,o,l)=>l.delete())}ee(t,e){let s;e?s=t:(s={},e=t);const r=this.cursor(s);return this.H(r,e)}te(t){const e=this.cursor({});return new C((s,r)=>{e.onerror=i=>{const o=rc(i.target.error);r(o)},e.onsuccess=i=>{const o=i.target.result;o?t(o.primaryKey,o.value).next(l=>{l?o.continue():s()}):s()}})}H(t,e){const s=[];return new C((r,i)=>{t.onerror=o=>{i(o.target.error)},t.onsuccess=o=>{const l=o.target.result;if(!l)return void r();const u=new xb(l),c=e(l.primaryKey,l.value,u);if(c instanceof C){const d=c.catch(p=>(u.done(),C.reject(p)));s.push(d)}u.isDone?r():u.G===null?l.continue():l.continue(u.G)}}).next(()=>C.waitFor(s))}options(t,e){let s;return t!==void 0&&(typeof t=="string"?s=t:e=t),{index:s,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const s=this.store.index(t.index);return t.X?s.openKeyCursor(t.range,e):s.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function Is(n){return new C((t,e)=>{n.onsuccess=s=>{const r=s.target.result;t(r)},n.onerror=s=>{const r=rc(s.target.error);e(r)}})}let Cd=!1;function rc(n){const t=Yn.M(ua());if(t>=12.2&&t<13){const e="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(e)>=0){const s=new et("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Cd||(Cd=!0,setTimeout(()=>{throw s},0)),s}}return n}const xi="IndexBackfiller";class Cb{constructor(t,e){this.asyncQueue=t,this.ne=e,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}re(t){K(xi,`Scheduled in ${t}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",t,async()=>{this.task=null;try{const e=await this.ne.ie();K(xi,`Documents written: ${e}`)}catch(e){is(e)?K(xi,"Ignoring IndexedDB error during index backfill: ",e):await js(e)}await this.re(6e4)})}}class Vb{constructor(t,e){this.localStore=t,this.persistence=e}async ie(t=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",e=>this.se(e,t))}se(t,e){const s=new Set;let r=e,i=!0;return C.doWhile(()=>i===!0&&r>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(t).next(o=>{if(o!==null&&!s.has(o))return K(xi,`Processing collection: ${o}`),this.oe(t,o,r).next(l=>{r-=l,s.add(o)});i=!1})).next(()=>e-r)}oe(t,e,s){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(t,e).next(r=>this.localStore.localDocuments.getNextDocuments(t,e,r,s).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(t,o).next(()=>this._e(r,i)).next(l=>(K(xi,`Updating offset: ${l}`),this.localStore.indexManager.updateCollectionGroup(t,e,l))).next(()=>o.size)}))}_e(t,e){let s=t;return e.changes.forEach((r,i)=>{const o=Sm(i);sc(o,s)>0&&(s=o)}),new Le(s.readTime,s.documentKey,Math.max(e.batchId,t.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>e.writeSequenceNumber(s))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}je.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=-1;function Ka(n){return n==null}function Hi(n){return n===0&&1/n==-1/0}function Db(n){return typeof n=="number"&&Number.isInteger(n)&&!Hi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa="";function pe(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Vd(t)),t=kb(n.get(e),t);return Vd(t)}function kb(n,t){let e=t;const s=n.length;for(let r=0;r<s;r++){const i=n.charAt(r);switch(i){case"\0":e+="";break;case pa:e+="";break;default:e+=i}}return e}function Vd(n){return n+pa+""}function rn(n){const t=n.length;if(rt(t>=2,64408,{path:n}),t===2)return rt(n.charAt(0)===pa&&n.charAt(1)==="",56145,{path:n}),Nt.emptyPath();const e=t-2,s=[];let r="";for(let i=0;i<t;){const o=n.indexOf(pa,i);switch((o<0||o>e)&&st(50515,{path:n}),n.charAt(o+1)){case"":const l=n.substring(i,o);let u;r.length===0?u=l:(r+=l,u=r,r=""),s.push(u);break;case"":r+=n.substring(i,o),r+="\0";break;case"":r+=n.substring(i,o+1);break;default:st(61167,{path:n})}i=o+2}return new Nt(s)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es="remoteDocuments",lo="owner",Ys="owner",Gi="mutationQueues",Nb="userId",Ge="mutations",Dd="batchId",Ss="userMutationsIndex",kd=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(n,t){return[n,pe(t)]}function Cm(n,t,e){return[n,pe(t),e]}const Mb={},Tr="documentMutations",ma="remoteDocumentsV14",Ob=["prefixPath","collectionGroup","readTime","documentId"],Ko="documentKeyIndex",Fb=["prefixPath","collectionGroup","documentId"],Vm="collectionGroupIndex",Lb=["collectionGroup","readTime","prefixPath","documentId"],Wi="remoteDocumentGlobal",du="remoteDocumentGlobalKey",wr="targets",Dm="queryTargetsIndex",Bb=["canonicalId","targetId"],Ar="targetDocuments",Ub=["targetId","path"],ic="documentTargetsIndex",$b=["path","targetId"],ga="targetGlobalKey",Cs="targetGlobal",Qi="collectionParents",jb=["collectionId","parent"],Sr="clientMetadata",qb="clientId",Ha="bundles",zb="bundleId",Ga="namedQueries",Kb="name",oc="indexConfiguration",Hb="indexId",fu="collectionGroupIndex",Gb="collectionGroup",Pi="indexState",Wb=["indexId","uid"],km="sequenceNumberIndex",Qb=["uid","sequenceNumber"],Ci="indexEntries",Xb=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Nm="documentKeyIndex",Jb=["indexId","uid","orderedDocumentKey"],Wa="documentOverlays",Yb=["userId","collectionPath","documentId"],pu="collectionPathOverlayIndex",Zb=["userId","collectionPath","largestBatchId"],Mm="collectionGroupOverlayIndex",tT=["userId","collectionGroup","largestBatchId"],ac="globals",eT="name",Om=[Gi,Ge,Tr,Es,wr,lo,Cs,Ar,Sr,Wi,Qi,Ha,Ga],nT=[...Om,Wa],Fm=[Gi,Ge,Tr,ma,wr,lo,Cs,Ar,Sr,Wi,Qi,Ha,Ga,Wa],Lm=Fm,lc=[...Lm,oc,Pi,Ci],sT=lc,Bm=[...lc,ac],rT=Bm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu extends xm{constructor(t,e){super(),this.le=t,this.currentSequenceNumber=e}}function te(n,t){const e=mt(n);return Yn.O(e.le,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function qs(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Um(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t,e){this.comparator=t,this.root=e||ae.EMPTY}insert(t,e){return new qt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ae.BLACK,null,null))}remove(t){return new qt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ae.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const s=this.comparator(t,e.key);if(s===0)return e.value;s<0?e=e.left:s>0&&(e=e.right)}return null}indexOf(t){let e=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(t,s.key);if(r===0)return e+s.left.size;r<0?s=s.left:(e+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,s)=>(t(e,s),!1))}toString(){const t=[];return this.inorderTraversal((e,s)=>(t.push(`${e}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Do(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Do(this.root,t,this.comparator,!1)}getReverseIterator(){return new Do(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Do(this.root,t,this.comparator,!0)}}class Do{constructor(t,e,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?s(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ae{constructor(t,e,s,r,i){this.key=t,this.value=e,this.color=s??ae.RED,this.left=r??ae.EMPTY,this.right=i??ae.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,s,r,i){return new ae(t??this.key,e??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,s){let r=this;const i=s(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,s),null):i===0?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ae.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let s,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),e(t,r.key)===0){if(r.right.isEmpty())return ae.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw st(43730,{key:this.key,value:this.value});if(this.right.isRed())throw st(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw st(27949);return t+(this.isRed()?0:1)}}ae.EMPTY=null,ae.RED=!0,ae.BLACK=!1;ae.EMPTY=new class{constructor(){this.size=0}get key(){throw st(57766)}get value(){throw st(16141)}get color(){throw st(16727)}get left(){throw st(29726)}get right(){throw st(36894)}copy(t,e,s,r,i){return this}insert(t,e,s){return new ae(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(t){this.comparator=t,this.data=new qt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,s)=>(t(e),!1))}forEachInRange(t,e){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let s;for(s=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Md(this.data.getIterator())}getIteratorFrom(t){return new Md(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(s=>{e=e.add(s)}),e}isEqual(t){if(!(t instanceof kt)||this.size!==t.size)return!1;const e=this.data.getIterator(),s=t.data.getIterator();for(;e.hasNext();){const r=e.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new kt(this.comparator);return e.data=t,e}}class Md{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Zs(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(t){this.fields=t,t.sort(zt.comparator)}static empty(){return new qe([])}unionWith(t){let e=new kt(zt.comparator);for(const s of this.fields)e=e.add(s);for(const s of t)e=e.add(s);return new qe(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return br(this.fields,t.fields,(e,s)=>e.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new $m("Invalid base64 string: "+i):i}}(t);return new Jt(e)}static fromUint8Array(t){const e=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(t);return new Jt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const s=new Uint8Array(e.length);for(let r=0;r<e.length;r++)s[r]=e.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return pt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Jt.EMPTY_BYTE_STRING=new Jt("");const iT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xn(n){if(rt(!!n,39018),typeof n=="string"){let t=0;const e=iT.exec(n);if(rt(!!e,46558,{timestamp:n}),e[1]){let r=e[1];r=(r+"000000000").substr(0,9),t=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:jt(n.seconds),nanos:jt(n.nanos)}}function jt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Pn(n){return typeof n=="string"?Jt.fromBase64String(n):Jt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm="server_timestamp",qm="__type__",zm="__previous_value__",Km="__local_write_time__";function uc(n){var e,s;return((s=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[qm])==null?void 0:s.stringValue)===jm}function Qa(n){const t=n.mapValue.fields[zm];return uc(t)?Qa(t):t}function Xi(n){const t=xn(n.mapValue.fields[Km].timestampValue);return new Vt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(t,e,s,r,i,o,l,u,c,d){this.databaseId=t,this.appId=e,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=d}}const _a="(default)";class Ms{constructor(t,e){this.projectId=t,this.database=e||_a}static empty(){return new Ms("","")}get isDefaultDatabase(){return this.database===_a}isEqual(t){return t instanceof Ms&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc="__type__",Hm="__max__",Gn={mapValue:{fields:{__type__:{stringValue:Hm}}}},hc="__vector__",Rr="value",Ho={nullValue:"NULL_VALUE"};function es(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?uc(n)?4:Gm(n)?9007199254740991:Xa(n)?10:11:st(28295,{value:n})}function fn(n,t){if(n===t)return!0;const e=es(n);if(e!==es(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Xi(n).isEqual(Xi(t));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=xn(r.timestampValue),l=xn(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(r,i){return Pn(r.bytesValue).isEqual(Pn(i.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(r,i){return jt(r.geoPointValue.latitude)===jt(i.geoPointValue.latitude)&&jt(r.geoPointValue.longitude)===jt(i.geoPointValue.longitude)}(n,t);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return jt(r.integerValue)===jt(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=jt(r.doubleValue),l=jt(i.doubleValue);return o===l?Hi(o)===Hi(l):isNaN(o)&&isNaN(l)}return!1}(n,t);case 9:return br(n.arrayValue.values||[],t.arrayValue.values||[],fn);case 10:case 11:return function(r,i){const o=r.mapValue.fields||{},l=i.mapValue.fields||{};if(Nd(o)!==Nd(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!fn(o[u],l[u])))return!1;return!0}(n,t);default:return st(52216,{left:n})}}function Ji(n,t){return(n.values||[]).find(e=>fn(e,t))!==void 0}function ns(n,t){if(n===t)return 0;const e=es(n),s=es(t);if(e!==s)return pt(e,s);switch(e){case 0:case 9007199254740991:return 0;case 1:return pt(n.booleanValue,t.booleanValue);case 2:return function(i,o){const l=jt(i.integerValue||i.doubleValue),u=jt(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,t);case 3:return Od(n.timestampValue,t.timestampValue);case 4:return Od(Xi(n),Xi(t));case 5:return cu(n.stringValue,t.stringValue);case 6:return function(i,o){const l=Pn(i),u=Pn(o);return l.compareTo(u)}(n.bytesValue,t.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=pt(l[c],u[c]);if(d!==0)return d}return pt(l.length,u.length)}(n.referenceValue,t.referenceValue);case 8:return function(i,o){const l=pt(jt(i.latitude),jt(o.latitude));return l!==0?l:pt(jt(i.longitude),jt(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Fd(n.arrayValue,t.arrayValue);case 10:return function(i,o){var y,A,k,R;const l=i.fields||{},u=o.fields||{},c=(y=l[Rr])==null?void 0:y.arrayValue,d=(A=u[Rr])==null?void 0:A.arrayValue,p=pt(((k=c==null?void 0:c.values)==null?void 0:k.length)||0,((R=d==null?void 0:d.values)==null?void 0:R.length)||0);return p!==0?p:Fd(c,d)}(n.mapValue,t.mapValue);case 11:return function(i,o){if(i===Gn.mapValue&&o===Gn.mapValue)return 0;if(i===Gn.mapValue)return 1;if(o===Gn.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const y=cu(u[p],d[p]);if(y!==0)return y;const A=ns(l[u[p]],c[d[p]]);if(A!==0)return A}return pt(u.length,d.length)}(n.mapValue,t.mapValue);default:throw st(23264,{he:e})}}function Od(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return pt(n,t);const e=xn(n),s=xn(t),r=pt(e.seconds,s.seconds);return r!==0?r:pt(e.nanos,s.nanos)}function Fd(n,t){const e=n.values||[],s=t.values||[];for(let r=0;r<e.length&&r<s.length;++r){const i=ns(e[r],s[r]);if(i)return i}return pt(e.length,s.length)}function xr(n){return gu(n)}function gu(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const s=xn(e);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Pn(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return Z.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let s="[",r=!0;for(const i of e.values||[])r?r=!1:s+=",",s+=gu(i);return s+"]"}(n.arrayValue):"mapValue"in n?function(e){const s=Object.keys(e.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${gu(e.fields[o])}`;return r+"}"}(n.mapValue):st(61005,{value:n})}function Go(n){switch(es(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Qa(n);return t?16+Go(t):16;case 5:return 2*n.stringValue.length;case 6:return Pn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((r,i)=>r+Go(i),0)}(n.arrayValue);case 10:case 11:return function(s){let r=0;return qs(s.fields,(i,o)=>{r+=i.length+Go(o)}),r}(n.mapValue);default:throw st(13486,{value:n})}}function dc(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function _u(n){return!!n&&"integerValue"in n}function Yi(n){return!!n&&"arrayValue"in n}function Ld(n){return!!n&&"nullValue"in n}function Bd(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Wo(n){return!!n&&"mapValue"in n}function Xa(n){var e,s;return((s=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[cc])==null?void 0:s.stringValue)===hc}function Vi(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return qs(n.mapValue.fields,(e,s)=>t.mapValue.fields[e]=Vi(s)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Vi(n.arrayValue.values[e]);return t}return{...n}}function Gm(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Hm}const Wm={mapValue:{fields:{[cc]:{stringValue:hc},[Rr]:{arrayValue:{}}}}};function aT(n){return"nullValue"in n?Ho:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?dc(Ms.empty(),Z.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?Xa(n)?Wm:{mapValue:{}}:st(35942,{value:n})}function lT(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?dc(Ms.empty(),Z.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?Wm:"mapValue"in n?Xa(n)?{mapValue:{}}:Gn:st(61959,{value:n})}function Ud(n,t){const e=ns(n.value,t.value);return e!==0?e:n.inclusive&&!t.inclusive?-1:!n.inclusive&&t.inclusive?1:0}function $d(n,t){const e=ns(n.value,t.value);return e!==0?e:n.inclusive&&!t.inclusive?1:!n.inclusive&&t.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(t){this.value=t}static empty(){return new Se({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let s=0;s<t.length-1;++s)if(e=(e.mapValue.fields||{})[t.get(s)],!Wo(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Vi(e)}setAll(t){let e=zt.emptyPath(),s={},r=[];t.forEach((o,l)=>{if(!e.isImmediateParentOf(l)){const u=this.getFieldsMap(e);this.applyChanges(u,s,r),s={},r=[],e=l.popLast()}o?s[l.lastSegment()]=Vi(o):r.push(l.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,s,r)}delete(t){const e=this.field(t.popLast());Wo(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return fn(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let s=0;s<t.length;++s){let r=e.mapValue.fields[t.get(s)];Wo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(s)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,s){qs(e,(r,i)=>t[r]=i);for(const r of s)delete t[r]}clone(){return new Se(Vi(this.value))}}function Qm(n){const t=[];return qs(n.fields,(e,s)=>{const r=new zt([e]);if(Wo(s)){const i=Qm(s.mapValue).fields;if(i.length===0)t.push(r);else for(const o of i)t.push(r.child(o))}else t.push(r)}),new qe(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t,e,s,r,i,o,l){this.key=t,this.documentType=e,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(t){return new Ht(t,0,at.min(),at.min(),at.min(),Se.empty(),0)}static newFoundDocument(t,e,s,r){return new Ht(t,1,e,at.min(),s,r,0)}static newNoDocument(t,e){return new Ht(t,2,e,at.min(),at.min(),Se.empty(),0)}static newUnknownDocument(t,e){return new Ht(t,3,e,at.min(),at.min(),Se.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(at.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Se.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Se.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=at.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Ht&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(t,e){this.position=t,this.inclusive=e}}function jd(n,t,e){let s=0;for(let r=0;r<n.position.length;r++){const i=t[r],o=n.position[r];if(i.field.isKeyField()?s=Z.comparator(Z.fromName(o.referenceValue),e.key):s=ns(o,e.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function qd(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!fn(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(t,e="asc"){this.field=t,this.dir=e}}function uT(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{}class bt extends Xm{constructor(t,e,s){super(),this.field=t,this.op=e,this.value=s}static create(t,e,s){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,s):new cT(t,e,s):e==="array-contains"?new fT(t,s):e==="in"?new ng(t,s):e==="not-in"?new pT(t,s):e==="array-contains-any"?new mT(t,s):new bt(t,e,s)}static createKeyFieldInFilter(t,e,s){return e==="in"?new hT(t,s):new dT(t,s)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(ns(e,this.value)):e!==null&&es(this.value)===es(e)&&this.matchesComparison(ns(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return st(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Mt extends Xm{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new Mt(t,e)}matches(t){return Cr(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Cr(n){return n.op==="and"}function yu(n){return n.op==="or"}function fc(n){return Jm(n)&&Cr(n)}function Jm(n){for(const t of n.filters)if(t instanceof Mt)return!1;return!0}function vu(n){if(n instanceof bt)return n.field.canonicalString()+n.op.toString()+xr(n.value);if(fc(n))return n.filters.map(t=>vu(t)).join(",");{const t=n.filters.map(e=>vu(e)).join(",");return`${n.op}(${t})`}}function Ym(n,t){return n instanceof bt?function(s,r){return r instanceof bt&&s.op===r.op&&s.field.isEqual(r.field)&&fn(s.value,r.value)}(n,t):n instanceof Mt?function(s,r){return r instanceof Mt&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,o,l)=>i&&Ym(o,r.filters[l]),!0):!1}(n,t):void st(19439)}function Zm(n,t){const e=n.filters.concat(t);return Mt.create(e,n.op)}function tg(n){return n instanceof bt?function(e){return`${e.field.canonicalString()} ${e.op} ${xr(e.value)}`}(n):n instanceof Mt?function(e){return e.op.toString()+" {"+e.getFilters().map(tg).join(" ,")+"}"}(n):"Filter"}class cT extends bt{constructor(t,e,s){super(t,e,s),this.key=Z.fromName(s.referenceValue)}matches(t){const e=Z.comparator(t.key,this.key);return this.matchesComparison(e)}}class hT extends bt{constructor(t,e){super(t,"in",e),this.keys=eg("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class dT extends bt{constructor(t,e){super(t,"not-in",e),this.keys=eg("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function eg(n,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map(s=>Z.fromName(s.referenceValue))}class fT extends bt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Yi(e)&&Ji(e.arrayValue,this.value)}}class ng extends bt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Ji(this.value.arrayValue,e)}}class pT extends bt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ji(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Ji(this.value.arrayValue,e)}}class mT extends bt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Yi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(s=>Ji(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(t,e=null,s=[],r=[],i=null,o=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function Eu(n,t=null,e=[],s=[],r=null,i=null,o=null){return new gT(n,t,e,s,r,i,o)}function Os(n){const t=mt(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(s=>vu(s)).join(","),e+="|ob:",e+=t.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Ka(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(s=>xr(s)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(s=>xr(s)).join(",")),t.Te=e}return t.Te}function uo(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!uT(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Ym(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!qd(n.startAt,t.startAt)&&qd(n.endAt,t.endAt)}function va(n){return Z.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Ea(n,t){return n.filters.filter(e=>e instanceof bt&&e.field.isEqual(t))}function zd(n,t,e){let s=Ho,r=!0;for(const i of Ea(n,t)){let o=Ho,l=!0;switch(i.op){case"<":case"<=":o=aT(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,l=!1;break;case"!=":case"not-in":o=Ho}Ud({value:s,inclusive:r},{value:o,inclusive:l})<0&&(s=o,r=l)}if(e!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(t)){const o=e.position[i];Ud({value:s,inclusive:r},{value:o,inclusive:e.inclusive})<0&&(s=o,r=e.inclusive);break}}return{value:s,inclusive:r}}function Kd(n,t,e){let s=Gn,r=!0;for(const i of Ea(n,t)){let o=Gn,l=!0;switch(i.op){case">=":case">":o=lT(i.value),l=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,l=!1;break;case"!=":case"not-in":o=Gn}$d({value:s,inclusive:r},{value:o,inclusive:l})>0&&(s=o,r=l)}if(e!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(t)){const o=e.position[i];$d({value:s,inclusive:r},{value:o,inclusive:e.inclusive})>0&&(s=o,r=e.inclusive);break}}return{value:s,inclusive:r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(t,e=null,s=[],r=[],i=null,o="F",l=null,u=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function _T(n,t,e,s,r,i,o,l){return new Ja(n,t,e,s,r,i,o,l)}function co(n){return new Ja(n)}function Hd(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function yT(n){return n.collectionGroup!==null}function Di(n){const t=mt(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const i of t.explicitOrderBy)t.Ie.push(i),e.add(i.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new kt(zt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(t).forEach(i=>{e.has(i.canonicalString())||i.isKeyField()||t.Ie.push(new ya(i,s))}),e.has(zt.keyField().canonicalString())||t.Ie.push(new ya(zt.keyField(),s))}return t.Ie}function ze(n){const t=mt(n);return t.Ee||(t.Ee=vT(t,Di(n))),t.Ee}function vT(n,t){if(n.limitType==="F")return Eu(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new ya(r.field,i)});const e=n.endAt?new Pr(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Pr(n.startAt.position,n.startAt.inclusive):null;return Eu(n.path,n.collectionGroup,t,n.filters,n.limit,e,s)}}function Iu(n,t,e){return new Ja(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Ya(n,t){return uo(ze(n),ze(t))&&n.limitType===t.limitType}function sg(n){return`${Os(ze(n))}|lt:${n.limitType}`}function or(n){return`Query(target=${function(e){let s=e.path.canonicalString();return e.collectionGroup!==null&&(s+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(s+=`, filters: [${e.filters.map(r=>tg(r)).join(", ")}]`),Ka(e.limit)||(s+=", limit: "+e.limit),e.orderBy.length>0&&(s+=`, orderBy: [${e.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),e.startAt&&(s+=", startAt: ",s+=e.startAt.inclusive?"b:":"a:",s+=e.startAt.position.map(r=>xr(r)).join(",")),e.endAt&&(s+=", endAt: ",s+=e.endAt.inclusive?"a:":"b:",s+=e.endAt.position.map(r=>xr(r)).join(",")),`Target(${s})`}(ze(n))}; limitType=${n.limitType})`}function ho(n,t){return t.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):Z.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(n,t)&&function(s,r){for(const i of Di(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(n,t)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(n,t)&&function(s,r){return!(s.startAt&&!function(o,l,u){const c=jd(o,l,u);return o.inclusive?c<=0:c<0}(s.startAt,Di(s),r)||s.endAt&&!function(o,l,u){const c=jd(o,l,u);return o.inclusive?c>=0:c>0}(s.endAt,Di(s),r))}(n,t)}function ET(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function rg(n){return(t,e)=>{let s=!1;for(const r of Di(n)){const i=IT(r,t,e);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function IT(n,t,e){const s=n.field.isKeyField()?Z.comparator(t.key,e.key):function(i,o,l){const u=o.data.field(i),c=l.data.field(i);return u!==null&&c!==null?ns(u,c):st(42886)}(n.field,t,e);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return st(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),s=this.inner[e];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,t))return i}}has(t){return this.get(t)!==void 0}set(t,e){const s=this.mapKeyFn(t),r=this.inner[s];if(r===void 0)return this.inner[s]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),s=this.inner[e];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return s.length===1?delete this.inner[e]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(t){qs(this.inner,(e,s)=>{for(const[r,i]of s)t(r,i)})}isEmpty(){return Um(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT=new qt(Z.comparator);function Me(){return bT}const ig=new qt(Z.comparator);function di(...n){let t=ig;for(const e of n)t=t.insert(e.key,e);return t}function og(n){let t=ig;return n.forEach((e,s)=>t=t.insert(e,s.overlayedDocument)),t}function on(){return ki()}function ag(){return ki()}function ki(){return new Vn(n=>n.toString(),(n,t)=>n.isEqual(t))}const TT=new qt(Z.comparator),wT=new kt(Z.comparator);function Et(...n){let t=wT;for(const e of n)t=t.add(e);return t}const AT=new kt(pt);function ST(){return AT}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Hi(t)?"-0":t}}function lg(n){return{integerValue:""+n}}function RT(n,t){return Db(t)?lg(t):pc(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(){this._=void 0}}function xT(n,t,e){return n instanceof Zi?function(r,i){const o={fields:{[qm]:{stringValue:jm},[Km]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&uc(i)&&(i=Qa(i)),i&&(o.fields[zm]=i),{mapValue:o}}(e,t):n instanceof Vr?cg(n,t):n instanceof Dr?hg(n,t):function(r,i){const o=ug(r,i),l=Gd(o)+Gd(r.Ae);return _u(o)&&_u(r.Ae)?lg(l):pc(r.serializer,l)}(n,t)}function PT(n,t,e){return n instanceof Vr?cg(n,t):n instanceof Dr?hg(n,t):e}function ug(n,t){return n instanceof to?function(s){return _u(s)||function(i){return!!i&&"doubleValue"in i}(s)}(t)?t:{integerValue:0}:null}class Zi extends Za{}class Vr extends Za{constructor(t){super(),this.elements=t}}function cg(n,t){const e=dg(t);for(const s of n.elements)e.some(r=>fn(r,s))||e.push(s);return{arrayValue:{values:e}}}class Dr extends Za{constructor(t){super(),this.elements=t}}function hg(n,t){let e=dg(t);for(const s of n.elements)e=e.filter(r=>!fn(r,s));return{arrayValue:{values:e}}}class to extends Za{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function Gd(n){return jt(n.integerValue||n.doubleValue)}function dg(n){return Yi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(t,e){this.field=t,this.transform=e}}function VT(n,t){return n.field.isEqual(t.field)&&function(s,r){return s instanceof Vr&&r instanceof Vr||s instanceof Dr&&r instanceof Dr?br(s.elements,r.elements,fn):s instanceof to&&r instanceof to?fn(s.Ae,r.Ae):s instanceof Zi&&r instanceof Zi}(n.transform,t.transform)}class DT{constructor(t,e){this.version=t,this.transformResults=e}}class Oe{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Oe}static exists(t){return new Oe(void 0,t)}static updateTime(t){return new Oe(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Qo(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class tl{}function fg(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new mc(n.key,Oe.none()):new Lr(n.key,n.data,Oe.none());{const e=n.data,s=Se.empty();let r=new kt(zt.comparator);for(let i of t.fields)if(!r.has(i)){let o=e.field(i);o===null&&i.length>1&&(i=i.popLast(),o=e.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new os(n.key,s,new qe(r.toArray()),Oe.none())}}function kT(n,t,e){n instanceof Lr?function(r,i,o){const l=r.value.clone(),u=Qd(r.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,t,e):n instanceof os?function(r,i,o){if(!Qo(r.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Qd(r.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(pg(r)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,t,e):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function Ni(n,t,e,s){return n instanceof Lr?function(i,o,l,u){if(!Qo(i.precondition,o))return l;const c=i.value.clone(),d=Xd(i.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(n,t,e,s):n instanceof os?function(i,o,l,u){if(!Qo(i.precondition,o))return l;const c=Xd(i.fieldTransforms,u,o),d=o.data;return d.setAll(pg(i)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(n,t,e,s):function(i,o,l){return Qo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(n,t,e)}function NT(n,t){let e=null;for(const s of n.fieldTransforms){const r=t.data.field(s.field),i=ug(s.transform,r||null);i!=null&&(e===null&&(e=Se.empty()),e.set(s.field,i))}return e||null}function Wd(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&br(s,r,(i,o)=>VT(i,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Lr extends tl{constructor(t,e,s,r=[]){super(),this.key=t,this.value=e,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class os extends tl{constructor(t,e,s,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function pg(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const s=n.data.field(e);t.set(e,s)}}),t}function Qd(n,t,e){const s=new Map;rt(n.length===e.length,32656,{Re:e.length,Ve:n.length});for(let r=0;r<e.length;r++){const i=n[r],o=i.transform,l=t.data.field(i.field);s.set(i.field,PT(o,l,e[r]))}return s}function Xd(n,t,e){const s=new Map;for(const r of n){const i=r.transform,o=e.data.field(r.field);s.set(r.field,xT(i,o,t))}return s}class mc extends tl{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class mg extends tl{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(t,e,s,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(t,e){const s=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(t.key)&&kT(i,t,s[r])}}applyToLocalView(t,e){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(e=Ni(s,t,e,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(e=Ni(s,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const s=ag();return this.mutations.forEach(r=>{const i=t.get(r.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=e.has(r.key)?null:l;const u=fg(o,l);u!==null&&s.set(r.key,u),o.isValidDocument()||o.convertToNoDocument(at.min())}),s}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Et())}isEqual(t){return this.batchId===t.batchId&&br(this.mutations,t.mutations,(e,s)=>Wd(e,s))&&br(this.baseMutations,t.baseMutations,(e,s)=>Wd(e,s))}}class _c{constructor(t,e,s,r){this.batch=t,this.commitVersion=e,this.mutationResults=s,this.docVersions=r}static from(t,e,s){rt(t.mutations.length===s.length,58842,{me:t.mutations.length,fe:s.length});let r=function(){return TT}();const i=t.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new _c(t,e,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wt,Tt;function OT(n){switch(n){case F.OK:return st(64938);case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0;default:return st(15467,{code:n})}}function gg(n){if(n===void 0)return Te("GRPC error has no .code"),F.UNKNOWN;switch(n){case Wt.OK:return F.OK;case Wt.CANCELLED:return F.CANCELLED;case Wt.UNKNOWN:return F.UNKNOWN;case Wt.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case Wt.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case Wt.INTERNAL:return F.INTERNAL;case Wt.UNAVAILABLE:return F.UNAVAILABLE;case Wt.UNAUTHENTICATED:return F.UNAUTHENTICATED;case Wt.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case Wt.NOT_FOUND:return F.NOT_FOUND;case Wt.ALREADY_EXISTS:return F.ALREADY_EXISTS;case Wt.PERMISSION_DENIED:return F.PERMISSION_DENIED;case Wt.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case Wt.ABORTED:return F.ABORTED;case Wt.OUT_OF_RANGE:return F.OUT_OF_RANGE;case Wt.UNIMPLEMENTED:return F.UNIMPLEMENTED;case Wt.DATA_LOSS:return F.DATA_LOSS;default:return st(39323,{code:n})}}(Tt=Wt||(Wt={}))[Tt.OK=0]="OK",Tt[Tt.CANCELLED=1]="CANCELLED",Tt[Tt.UNKNOWN=2]="UNKNOWN",Tt[Tt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Tt[Tt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Tt[Tt.NOT_FOUND=5]="NOT_FOUND",Tt[Tt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Tt[Tt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Tt[Tt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Tt[Tt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Tt[Tt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Tt[Tt.ABORTED=10]="ABORTED",Tt[Tt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Tt[Tt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Tt[Tt.INTERNAL=13]="INTERNAL",Tt[Tt.UNAVAILABLE=14]="UNAVAILABLE",Tt[Tt.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FT(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT=new Jn([4294967295,4294967295],0);function Jd(n){const t=FT().encode(n),e=new gm;return e.update(t),new Uint8Array(e.digest())}function Yd(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),s=t.getUint32(4,!0),r=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new Jn([e,s],0),new Jn([r,i],0)]}class vc{constructor(t,e,s){if(this.bitmap=t,this.padding=e,this.hashCount=s,e<0||e>=8)throw new fi(`Invalid padding: ${e}`);if(s<0)throw new fi(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new fi(`Invalid hash count: ${s}`);if(t.length===0&&e!==0)throw new fi(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=Jn.fromNumber(this.ge)}ye(t,e,s){let r=t.add(e.multiply(Jn.fromNumber(s)));return r.compare(LT)===1&&(r=new Jn([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=Jd(t),[s,r]=Yd(e);for(let i=0;i<this.hashCount;i++){const o=this.ye(s,r,i);if(!this.we(o))return!1}return!0}static create(t,e,s){const r=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new vc(i,r,e);return s.forEach(l=>o.insert(l)),o}insert(t){if(this.ge===0)return;const e=Jd(t),[s,r]=Yd(e);for(let i=0;i<this.hashCount;i++){const o=this.ye(s,r,i);this.Se(o)}}Se(t){const e=Math.floor(t/8),s=t%8;this.bitmap[e]|=1<<s}}class fi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(t,e,s,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,s){const r=new Map;return r.set(t,fo.createSynthesizedTargetChangeForCurrentChange(t,e,s)),new el(at.min(),r,new qt(pt),Me(),Et())}}class fo{constructor(t,e,s,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,s){return new fo(s,e,Et(),Et(),Et())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(t,e,s,r){this.be=t,this.removedTargetIds=e,this.key=s,this.De=r}}class _g{constructor(t,e){this.targetId=t,this.Ce=e}}class yg{constructor(t,e,s=Jt.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=s,this.cause=r}}class Zd{constructor(){this.ve=0,this.Fe=tf(),this.Me=Jt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=Et(),e=Et(),s=Et();return this.Fe.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:s=s.add(r);break;default:st(38017,{changeType:i})}}),new fo(this.Me,this.xe,t,e,s)}qe(){this.Oe=!1,this.Fe=tf()}Qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,rt(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class BT{constructor(t){this.Ge=t,this.ze=new Map,this.je=Me(),this.Je=ko(),this.He=ko(),this.Ye=new qt(pt)}Ze(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Xe(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,e=>{const s=this.nt(e);switch(t.state){case 0:this.rt(e)&&s.Le(t.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(t.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(s.We(),s.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),s.Le(t.resumeToken));break;default:st(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach((s,r)=>{this.rt(r)&&e(r)})}st(t){const e=t.targetId,s=t.Ce.count,r=this.ot(e);if(r){const i=r.target;if(va(i))if(s===0){const o=new Z(i.path);this.et(e,o,Ht.newNoDocument(o,at.min()))}else rt(s===1,20013,{expectedCount:s});else{const o=this._t(e);if(o!==s){const l=this.ut(t),u=l?this.ct(l,t,o):1;if(u!==0){this.it(e);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(e,c)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=e;let o,l;try{o=Pn(s).toUint8Array()}catch(u){if(u instanceof $m)return Ns("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new vc(o,r,i)}catch(u){return Ns(u instanceof fi?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(t,e,s){return e.Ce.count===s-this.Pt(t,e.targetId)?0:2}Pt(t,e){const s=this.Ge.getRemoteKeysForTarget(e);let r=0;return s.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.mightContain(l)||(this.et(e,i,null),r++)}),r}Tt(t){const e=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&va(l.target)){const u=new Z(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,Ht.newNoDocument(u,t))}i.Be&&(e.set(o,i.ke()),i.qe())}});let s=Et();this.He.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(s=s.add(i))}),this.je.forEach((i,o)=>o.setReadTime(t));const r=new el(t,e,this.Ye,this.je,s);return this.je=Me(),this.Je=ko(),this.He=ko(),this.Ye=new qt(pt),r}Xe(t,e){if(!this.rt(t))return;const s=this.Et(t,e.key)?2:0;this.nt(t).Qe(e.key,s),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.He=this.He.insert(e.key,this.dt(e.key).add(t))}et(t,e,s){if(!this.rt(t))return;const r=this.nt(t);this.Et(t,e)?r.Qe(e,1):r.$e(e),this.He=this.He.insert(e,this.dt(e).delete(t)),this.He=this.He.insert(e,this.dt(e).add(t)),s&&(this.je=this.je.insert(e,s))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let e=this.ze.get(t);return e||(e=new Zd,this.ze.set(t,e)),e}dt(t){let e=this.He.get(t);return e||(e=new kt(pt),this.He=this.He.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new kt(pt),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||K("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Zd),this.Ge.getRemoteKeysForTarget(t).forEach(e=>{this.et(t,e,null)})}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function ko(){return new qt(Z.comparator)}function tf(){return new qt(Z.comparator)}const UT={asc:"ASCENDING",desc:"DESCENDING"},$T={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},jT={and:"AND",or:"OR"};class qT{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function bu(n,t){return n.useProto3Json||Ka(t)?t:{value:t}}function kr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function vg(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function zT(n,t){return kr(n,t.toTimestamp())}function we(n){return rt(!!n,49232),at.fromTimestamp(function(e){const s=xn(e);return new Vt(s.seconds,s.nanos)}(n))}function Ec(n,t){return Tu(n,t).canonicalString()}function Tu(n,t){const e=function(r){return new Nt(["projects",r.projectId,"databases",r.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Eg(n){const t=Nt.fromString(n);return rt(Pg(t),10190,{key:t.toString()}),t}function Ia(n,t){return Ec(n.databaseId,t.path)}function Vs(n,t){const e=Eg(t);if(e.get(1)!==n.databaseId.projectId)throw new et(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new et(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new Z(Tg(e))}function Ig(n,t){return Ec(n.databaseId,t)}function bg(n){const t=Eg(n);return t.length===4?Nt.emptyPath():Tg(t)}function wu(n){return new Nt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Tg(n){return rt(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function ef(n,t,e){return{name:Ia(n,t),fields:e.value.mapValue.fields}}function KT(n,t,e){const s=Vs(n,t.name),r=we(t.updateTime),i=t.createTime?we(t.createTime):at.min(),o=new Se({mapValue:{fields:t.fields}}),l=Ht.newFoundDocument(s,r,i,o);return e&&l.setHasCommittedMutations(),e?l.setHasCommittedMutations():l}function HT(n,t){let e;if("targetChange"in t){t.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:st(39313,{state:c})}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],i=function(c,d){return c.useProto3Json?(rt(d===void 0||typeof d=="string",58123),Jt.fromBase64String(d||"")):(rt(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Jt.fromUint8Array(d||new Uint8Array))}(n,t.targetChange.resumeToken),o=t.targetChange.cause,l=o&&function(c){const d=c.code===void 0?F.UNKNOWN:gg(c.code);return new et(d,c.message||"")}(o);e=new yg(s,r,i,l||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const r=Vs(n,s.document.name),i=we(s.document.updateTime),o=s.document.createTime?we(s.document.createTime):at.min(),l=new Se({mapValue:{fields:s.document.fields}}),u=Ht.newFoundDocument(r,i,o,l),c=s.targetIds||[],d=s.removedTargetIds||[];e=new Xo(c,d,u.key,u)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const r=Vs(n,s.document),i=s.readTime?we(s.readTime):at.min(),o=Ht.newNoDocument(r,i),l=s.removedTargetIds||[];e=new Xo([],l,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const r=Vs(n,s.document),i=s.removedTargetIds||[];e=new Xo([],i,r,null)}else{if(!("filter"in t))return st(11601,{Rt:t});{t.filter;const s=t.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new MT(r,i),l=s.targetId;e=new _g(l,o)}}return e}function ba(n,t){let e;if(t instanceof Lr)e={update:ef(n,t.key,t.value)};else if(t instanceof mc)e={delete:Ia(n,t.key)};else if(t instanceof os)e={update:ef(n,t.key,t.data),updateMask:YT(t.fieldMask)};else{if(!(t instanceof mg))return st(16599,{Vt:t.type});e={verify:Ia(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(s=>function(i,o){const l=o.transform;if(l instanceof Zi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Vr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Dr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof to)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw st(20930,{transform:o.transform})}(0,s))),t.precondition.isNone||(e.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:zT(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:st(27497)}(n,t.precondition)),e}function Au(n,t){const e=t.currentDocument?function(i){return i.updateTime!==void 0?Oe.updateTime(we(i.updateTime)):i.exists!==void 0?Oe.exists(i.exists):Oe.none()}(t.currentDocument):Oe.none(),s=t.updateTransforms?t.updateTransforms.map(r=>function(o,l){let u=null;if("setToServerValue"in l)rt(l.setToServerValue==="REQUEST_TIME",16630,{proto:l}),u=new Zi;else if("appendMissingElements"in l){const d=l.appendMissingElements.values||[];u=new Vr(d)}else if("removeAllFromArray"in l){const d=l.removeAllFromArray.values||[];u=new Dr(d)}else"increment"in l?u=new to(o,l.increment):st(16584,{proto:l});const c=zt.fromServerFormat(l.fieldPath);return new CT(c,u)}(n,r)):[];if(t.update){t.update.name;const r=Vs(n,t.update.name),i=new Se({mapValue:{fields:t.update.fields}});if(t.updateMask){const o=function(u){const c=u.fieldPaths||[];return new qe(c.map(d=>zt.fromServerFormat(d)))}(t.updateMask);return new os(r,i,o,e,s)}return new Lr(r,i,e,s)}if(t.delete){const r=Vs(n,t.delete);return new mc(r,e)}if(t.verify){const r=Vs(n,t.verify);return new mg(r,e)}return st(1463,{proto:t})}function GT(n,t){return n&&n.length>0?(rt(t!==void 0,14353),n.map(e=>function(r,i){let o=r.updateTime?we(r.updateTime):we(i);return o.isEqual(at.min())&&(o=we(i)),new DT(o,r.transformResults||[])}(e,t))):[]}function wg(n,t){return{documents:[Ig(n,t.path)]}}function Ag(n,t){const e={structuredQuery:{}},s=t.path;let r;t.collectionGroup!==null?(r=s,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(r=s.popLast(),e.structuredQuery.from=[{collectionId:s.lastSegment()}]),e.parent=Ig(n,r);const i=function(c){if(c.length!==0)return xg(Mt.create(c,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(d=>function(y){return{field:ar(y.field),direction:QT(y.dir)}}(d))}(t.orderBy);o&&(e.structuredQuery.orderBy=o);const l=bu(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),{ft:e,parent:r}}function Sg(n){let t=bg(n.parent);const e=n.structuredQuery,s=e.from?e.from.length:0;let r=null;if(s>0){rt(s===1,65062);const d=e.from[0];d.allDescendants?r=d.collectionId:t=t.child(d.collectionId)}let i=[];e.where&&(i=function(p){const y=Rg(p);return y instanceof Mt&&fc(y)?y.getFilters():[y]}(e.where));let o=[];e.orderBy&&(o=function(p){return p.map(y=>function(k){return new ya(lr(k.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(y))}(e.orderBy));let l=null;e.limit&&(l=function(p){let y;return y=typeof p=="object"?p.value:p,Ka(y)?null:y}(e.limit));let u=null;e.startAt&&(u=function(p){const y=!!p.before,A=p.values||[];return new Pr(A,y)}(e.startAt));let c=null;return e.endAt&&(c=function(p){const y=!p.before,A=p.values||[];return new Pr(A,y)}(e.endAt)),_T(t,r,o,i,l,"F",u,c)}function WT(n,t){const e=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return st(28987,{purpose:r})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Rg(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const s=lr(e.unaryFilter.field);return bt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=lr(e.unaryFilter.field);return bt.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=lr(e.unaryFilter.field);return bt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=lr(e.unaryFilter.field);return bt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return st(61313);default:return st(60726)}}(n):n.fieldFilter!==void 0?function(e){return bt.create(lr(e.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return st(58110);default:return st(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Mt.create(e.compositeFilter.filters.map(s=>Rg(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return st(1026)}}(e.compositeFilter.op))}(n):st(30097,{filter:n})}function QT(n){return UT[n]}function XT(n){return $T[n]}function JT(n){return jT[n]}function ar(n){return{fieldPath:n.canonicalString()}}function lr(n){return zt.fromServerFormat(n.fieldPath)}function xg(n){return n instanceof bt?function(e){if(e.op==="=="){if(Bd(e.value))return{unaryFilter:{field:ar(e.field),op:"IS_NAN"}};if(Ld(e.value))return{unaryFilter:{field:ar(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Bd(e.value))return{unaryFilter:{field:ar(e.field),op:"IS_NOT_NAN"}};if(Ld(e.value))return{unaryFilter:{field:ar(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ar(e.field),op:XT(e.op),value:e.value}}}(n):n instanceof Mt?function(e){const s=e.getFilters().map(r=>xg(r));return s.length===1?s[0]:{compositeFilter:{op:JT(e.op),filters:s}}}(n):st(54877,{filter:n})}function YT(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Pg(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(t,e,s,r,i=at.min(),o=at.min(),l=Jt.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=e,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(t){return new vn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new vn(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(t){this.yt=t}}function ZT(n,t){let e;if(t.document)e=KT(n.yt,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const s=Z.fromSegments(t.noDocument.path),r=Ls(t.noDocument.readTime);e=Ht.newNoDocument(s,r),t.hasCommittedMutations&&e.setHasCommittedMutations()}else{if(!t.unknownDocument)return st(56709);{const s=Z.fromSegments(t.unknownDocument.path),r=Ls(t.unknownDocument.version);e=Ht.newUnknownDocument(s,r)}}return t.readTime&&e.setReadTime(function(r){const i=new Vt(r[0],r[1]);return at.fromTimestamp(i)}(t.readTime)),e}function nf(n,t){const e=t.key,s={prefixPath:e.getCollectionPath().popLast().toArray(),collectionGroup:e.collectionGroup,documentId:e.path.lastSegment(),readTime:Ta(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())s.document=function(i,o){return{name:Ia(i,o.key),fields:o.data.value.mapValue.fields,updateTime:kr(i,o.version.toTimestamp()),createTime:kr(i,o.createTime.toTimestamp())}}(n.yt,t);else if(t.isNoDocument())s.noDocument={path:e.path.toArray(),readTime:Fs(t.version)};else{if(!t.isUnknownDocument())return st(57904,{document:t});s.unknownDocument={path:e.path.toArray(),version:Fs(t.version)}}return s}function Ta(n){const t=n.toTimestamp();return[t.seconds,t.nanoseconds]}function Fs(n){const t=n.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function Ls(n){const t=new Vt(n.seconds,n.nanoseconds);return at.fromTimestamp(t)}function bs(n,t){const e=(t.baseMutations||[]).map(i=>Au(n.yt,i));for(let i=0;i<t.mutations.length-1;++i){const o=t.mutations[i];if(i+1<t.mutations.length&&t.mutations[i+1].transform!==void 0){const l=t.mutations[i+1];o.updateTransforms=l.transform.fieldTransforms,t.mutations.splice(i+1,1),++i}}const s=t.mutations.map(i=>Au(n.yt,i)),r=Vt.fromMillis(t.localWriteTimeMs);return new gc(t.batchId,r,e,s)}function pi(n){const t=Ls(n.readTime),e=n.lastLimboFreeSnapshotVersion!==void 0?Ls(n.lastLimboFreeSnapshotVersion):at.min();let s;return s=function(i){return i.documents!==void 0}(n.query)?function(i){const o=i.documents.length;return rt(o===1,1966,{count:o}),ze(co(bg(i.documents[0])))}(n.query):function(i){return ze(Sg(i))}(n.query),new vn(s,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,t,e,Jt.fromBase64String(n.resumeToken))}function Vg(n,t){const e=Fs(t.snapshotVersion),s=Fs(t.lastLimboFreeSnapshotVersion);let r;r=va(t.target)?wg(n.yt,t.target):Ag(n.yt,t.target).ft;const i=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:Os(t.target),readTime:e,resumeToken:i,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:s,query:r}}function Dg(n){const t=Sg({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Iu(t,t.limit,"L"):t}function Fl(n,t){return new yc(t.largestBatchId,Au(n.yt,t.overlayMutation))}function sf(n,t){const e=t.path.lastSegment();return[n,pe(t.path.popLast()),e]}function rf(n,t,e,s){return{indexId:n,uid:t,sequenceNumber:e,readTime:Fs(s.readTime),documentKey:pe(s.documentKey.path),largestBatchId:s.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{getBundleMetadata(t,e){return of(t).get(e).next(s=>{if(s)return function(i){return{id:i.bundleId,createTime:Ls(i.createTime),version:i.version}}(s)})}saveBundleMetadata(t,e){return of(t).put(function(r){return{bundleId:r.id,createTime:Fs(we(r.createTime)),version:r.version}}(e))}getNamedQuery(t,e){return af(t).get(e).next(s=>{if(s)return function(i){return{name:i.name,query:Dg(i.bundledQuery),readTime:Ls(i.readTime)}}(s)})}saveNamedQuery(t,e){return af(t).put(function(r){return{name:r.name,readTime:Fs(we(r.readTime)),bundledQuery:r.bundledQuery}}(e))}}function of(n){return te(n,Ha)}function af(n){return te(n,Ga)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(t,e){this.serializer=t,this.userId=e}static wt(t,e){const s=e.uid||"";return new nl(t,s)}getOverlay(t,e){return ri(t).get(sf(this.userId,e)).next(s=>s?Fl(this.serializer,s):null)}getOverlays(t,e){const s=on();return C.forEach(e,r=>this.getOverlay(t,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(t,e,s){const r=[];return s.forEach((i,o)=>{const l=new yc(e,o);r.push(this.St(t,l))}),C.waitFor(r)}removeOverlaysForBatchId(t,e,s){const r=new Set;e.forEach(o=>r.add(pe(o.getCollectionPath())));const i=[];return r.forEach(o=>{const l=IDBKeyRange.bound([this.userId,o,s],[this.userId,o,s+1],!1,!0);i.push(ri(t).Z(pu,l))}),C.waitFor(i)}getOverlaysForCollection(t,e,s){const r=on(),i=pe(e),o=IDBKeyRange.bound([this.userId,i,s],[this.userId,i,Number.POSITIVE_INFINITY],!0);return ri(t).J(pu,o).next(l=>{for(const u of l){const c=Fl(this.serializer,u);r.set(c.getKey(),c)}return r})}getOverlaysForCollectionGroup(t,e,s,r){const i=on();let o;const l=IDBKeyRange.bound([this.userId,e,s],[this.userId,e,Number.POSITIVE_INFINITY],!0);return ri(t).ee({index:Mm,range:l},(u,c,d)=>{const p=Fl(this.serializer,c);i.size()<r||p.largestBatchId===o?(i.set(p.getKey(),p),o=p.largestBatchId):d.done()}).next(()=>i)}St(t,e){return ri(t).put(function(r,i,o){const[l,u,c]=sf(i,o.mutation.key);return{userId:i,collectionPath:u,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:ba(r.yt,o.mutation)}}(this.serializer,this.userId,e))}}function ri(n){return te(n,Wa)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{bt(t){return te(t,ac)}getSessionToken(t){return this.bt(t).get("sessionToken").next(e=>{const s=e==null?void 0:e.value;return s?Jt.fromUint8Array(s):Jt.EMPTY_BYTE_STRING})}setSessionToken(t,e){return this.bt(t).put({name:"sessionToken",value:e.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(){}Dt(t,e){this.Ct(t,e),e.vt()}Ct(t,e){if("nullValue"in t)this.Ft(e,5);else if("booleanValue"in t)this.Ft(e,10),e.Mt(t.booleanValue?1:0);else if("integerValue"in t)this.Ft(e,15),e.Mt(jt(t.integerValue));else if("doubleValue"in t){const s=jt(t.doubleValue);isNaN(s)?this.Ft(e,13):(this.Ft(e,15),Hi(s)?e.Mt(0):e.Mt(s))}else if("timestampValue"in t){let s=t.timestampValue;this.Ft(e,20),typeof s=="string"&&(s=xn(s)),e.xt(`${s.seconds||""}`),e.Mt(s.nanos||0)}else if("stringValue"in t)this.Ot(t.stringValue,e),this.Nt(e);else if("bytesValue"in t)this.Ft(e,30),e.Bt(Pn(t.bytesValue)),this.Nt(e);else if("referenceValue"in t)this.Lt(t.referenceValue,e);else if("geoPointValue"in t){const s=t.geoPointValue;this.Ft(e,45),e.Mt(s.latitude||0),e.Mt(s.longitude||0)}else"mapValue"in t?Gm(t)?this.Ft(e,Number.MAX_SAFE_INTEGER):Xa(t)?this.kt(t.mapValue,e):(this.qt(t.mapValue,e),this.Nt(e)):"arrayValue"in t?(this.Qt(t.arrayValue,e),this.Nt(e)):st(19022,{$t:t})}Ot(t,e){this.Ft(e,25),this.Ut(t,e)}Ut(t,e){e.xt(t)}qt(t,e){const s=t.fields||{};this.Ft(e,55);for(const r of Object.keys(s))this.Ot(r,e),this.Ct(s[r],e)}kt(t,e){var o,l;const s=t.fields||{};this.Ft(e,53);const r=Rr,i=((l=(o=s[r].arrayValue)==null?void 0:o.values)==null?void 0:l.length)||0;this.Ft(e,15),e.Mt(jt(i)),this.Ot(r,e),this.Ct(s[r],e)}Qt(t,e){const s=t.values||[];this.Ft(e,50);for(const r of s)this.Ct(r,e)}Lt(t,e){this.Ft(e,37),Z.fromName(t).path.forEach(s=>{this.Ft(e,60),this.Ut(s,e)})}Ft(t,e){t.Mt(e)}Nt(t){t.Mt(2)}}Ts.Kt=new Ts;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=255;function nw(n){if(n===0)return 8;let t=0;return n>>4||(t+=4,n<<=4),n>>6||(t+=2,n<<=2),n>>7||(t+=1),t}function lf(n){const t=64-function(s){let r=0;for(let i=0;i<8;++i){const o=nw(255&s[i]);if(r+=o,o!==8)break}return r}(n);return Math.ceil(t/8)}class sw{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Wt(t){const e=t[Symbol.iterator]();let s=e.next();for(;!s.done;)this.Gt(s.value),s=e.next();this.zt()}jt(t){const e=t[Symbol.iterator]();let s=e.next();for(;!s.done;)this.Jt(s.value),s=e.next();this.Ht()}Yt(t){for(const e of t){const s=e.charCodeAt(0);if(s<128)this.Gt(s);else if(s<2048)this.Gt(960|s>>>6),this.Gt(128|63&s);else if(e<"\uD800"||"\uDBFF"<e)this.Gt(480|s>>>12),this.Gt(128|63&s>>>6),this.Gt(128|63&s);else{const r=e.codePointAt(0);this.Gt(240|r>>>18),this.Gt(128|63&r>>>12),this.Gt(128|63&r>>>6),this.Gt(128|63&r)}}this.zt()}Zt(t){for(const e of t){const s=e.charCodeAt(0);if(s<128)this.Jt(s);else if(s<2048)this.Jt(960|s>>>6),this.Jt(128|63&s);else if(e<"\uD800"||"\uDBFF"<e)this.Jt(480|s>>>12),this.Jt(128|63&s>>>6),this.Jt(128|63&s);else{const r=e.codePointAt(0);this.Jt(240|r>>>18),this.Jt(128|63&r>>>12),this.Jt(128|63&r>>>6),this.Jt(128|63&r)}}this.Ht()}Xt(t){const e=this.en(t),s=lf(e);this.tn(1+s),this.buffer[this.position++]=255&s;for(let r=e.length-s;r<e.length;++r)this.buffer[this.position++]=255&e[r]}nn(t){const e=this.en(t),s=lf(e);this.tn(1+s),this.buffer[this.position++]=~(255&s);for(let r=e.length-s;r<e.length;++r)this.buffer[this.position++]=~(255&e[r])}rn(){this.sn(tr),this.sn(255)}_n(){this.an(tr),this.an(255)}reset(){this.position=0}seed(t){this.tn(t.length),this.buffer.set(t,this.position),this.position+=t.length}un(){return this.buffer.slice(0,this.position)}en(t){const e=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(t),s=!!(128&e[0]);e[0]^=s?255:128;for(let r=1;r<e.length;++r)e[r]^=s?255:0;return e}Gt(t){const e=255&t;e===0?(this.sn(0),this.sn(255)):e===tr?(this.sn(tr),this.sn(0)):this.sn(e)}Jt(t){const e=255&t;e===0?(this.an(0),this.an(255)):e===tr?(this.an(tr),this.an(0)):this.an(t)}zt(){this.sn(0),this.sn(1)}Ht(){this.an(0),this.an(1)}sn(t){this.tn(1),this.buffer[this.position++]=t}an(t){this.tn(1),this.buffer[this.position++]=~t}tn(t){const e=t+this.position;if(e<=this.buffer.length)return;let s=2*this.buffer.length;s<e&&(s=e);const r=new Uint8Array(s);r.set(this.buffer),this.buffer=r}}class rw{constructor(t){this.cn=t}Bt(t){this.cn.Wt(t)}xt(t){this.cn.Yt(t)}Mt(t){this.cn.Xt(t)}vt(){this.cn.rn()}}class iw{constructor(t){this.cn=t}Bt(t){this.cn.jt(t)}xt(t){this.cn.Zt(t)}Mt(t){this.cn.nn(t)}vt(){this.cn._n()}}class ii{constructor(){this.cn=new sw,this.ln=new rw(this.cn),this.hn=new iw(this.cn)}seed(t){this.cn.seed(t)}Pn(t){return t===0?this.ln:this.hn}un(){return this.cn.un()}reset(){this.cn.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(t,e,s,r){this.Tn=t,this.In=e,this.En=s,this.dn=r}An(){const t=this.dn.length,e=t===0||this.dn[t-1]===255?t+1:t,s=new Uint8Array(e);return s.set(this.dn,0),e!==t?s.set([0],this.dn.length):++s[s.length-1],new ws(this.Tn,this.In,this.En,s)}Rn(t,e,s){return{indexId:this.Tn,uid:t,arrayValue:Jo(this.En),directionalValue:Jo(this.dn),orderedDocumentKey:Jo(e),documentKey:s.path.toArray()}}Vn(t,e,s){const r=this.Rn(t,e,s);return[r.indexId,r.uid,r.arrayValue,r.directionalValue,r.orderedDocumentKey,r.documentKey]}}function Ln(n,t){let e=n.Tn-t.Tn;return e!==0?e:(e=uf(n.En,t.En),e!==0?e:(e=uf(n.dn,t.dn),e!==0?e:Z.comparator(n.In,t.In)))}function uf(n,t){for(let e=0;e<n.length&&e<t.length;++e){const s=n[e]-t[e];if(s!==0)return s}return n.length-t.length}function Jo(n){return am()?function(e){let s="";for(let r=0;r<e.length;r++)s+=String.fromCharCode(e[r]);return s}(n):n}function cf(n){return typeof n!="string"?n:function(e){const s=new Uint8Array(e.length);for(let r=0;r<e.length;r++)s[r]=e.charCodeAt(r);return s}(n)}class hf{constructor(t){this.mn=new kt((e,s)=>zt.comparator(e.field,s.field)),this.collectionId=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment(),this.fn=t.orderBy,this.gn=[];for(const e of t.filters){const s=e;s.isInequality()?this.mn=this.mn.add(s):this.gn.push(s)}}get pn(){return this.mn.size>1}yn(t){if(rt(t.collectionGroup===this.collectionId,49279),this.pn)return!1;const e=hu(t);if(e!==void 0&&!this.wn(e))return!1;const s=vs(t);let r=new Set,i=0,o=0;for(;i<s.length&&this.wn(s[i]);++i)r=r.add(s[i].fieldPath.canonicalString());if(i===s.length)return!0;if(this.mn.size>0){const l=this.mn.getIterator().getNext();if(!r.has(l.field.canonicalString())){const u=s[i];if(!this.Sn(l,u)||!this.bn(this.fn[o++],u))return!1}++i}for(;i<s.length;++i){const l=s[i];if(o>=this.fn.length||!this.bn(this.fn[o++],l))return!1}return!0}Dn(){if(this.pn)return null;let t=new kt(zt.comparator);const e=[];for(const s of this.gn)if(!s.field.isKeyField())if(s.op==="array-contains"||s.op==="array-contains-any")e.push(new qo(s.field,2));else{if(t.has(s.field))continue;t=t.add(s.field),e.push(new qo(s.field,0))}for(const s of this.fn)s.field.isKeyField()||t.has(s.field)||(t=t.add(s.field),e.push(new qo(s.field,s.dir==="asc"?0:1)));return new fa(fa.UNKNOWN_ID,this.collectionId,e,Ki.empty())}wn(t){for(const e of this.gn)if(this.Sn(e,t))return!0;return!1}Sn(t,e){if(t===void 0||!t.field.isEqual(e.fieldPath))return!1;const s=t.op==="array-contains"||t.op==="array-contains-any";return e.kind===2===s}bn(t,e){return!!t.field.isEqual(e.fieldPath)&&(e.kind===0&&t.dir==="asc"||e.kind===1&&t.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg(n){var e,s;if(rt(n instanceof bt||n instanceof Mt,20012),n instanceof bt){if(n instanceof ng){const r=((s=(e=n.value.arrayValue)==null?void 0:e.values)==null?void 0:s.map(i=>bt.create(n.field,"==",i)))||[];return Mt.create(r,"or")}return n}const t=n.filters.map(r=>kg(r));return Mt.create(t,n.op)}function ow(n){if(n.getFilters().length===0)return[];const t=xu(kg(n));return rt(Ng(t),7391),Su(t)||Ru(t)?[t]:t.getFilters()}function Su(n){return n instanceof bt}function Ru(n){return n instanceof Mt&&fc(n)}function Ng(n){return Su(n)||Ru(n)||function(e){if(e instanceof Mt&&yu(e)){for(const s of e.getFilters())if(!Su(s)&&!Ru(s))return!1;return!0}return!1}(n)}function xu(n){if(rt(n instanceof bt||n instanceof Mt,34018),n instanceof bt)return n;if(n.filters.length===1)return xu(n.filters[0]);const t=n.filters.map(s=>xu(s));let e=Mt.create(t,n.op);return e=wa(e),Ng(e)?e:(rt(e instanceof Mt,64498),rt(Cr(e),40251),rt(e.filters.length>1,57927),e.filters.reduce((s,r)=>Ic(s,r)))}function Ic(n,t){let e;return rt(n instanceof bt||n instanceof Mt,38388),rt(t instanceof bt||t instanceof Mt,25473),e=n instanceof bt?t instanceof bt?function(r,i){return Mt.create([r,i],"and")}(n,t):df(n,t):t instanceof bt?df(t,n):function(r,i){if(rt(r.filters.length>0&&i.filters.length>0,48005),Cr(r)&&Cr(i))return Zm(r,i.getFilters());const o=yu(r)?r:i,l=yu(r)?i:r,u=o.filters.map(c=>Ic(c,l));return Mt.create(u,"or")}(n,t),wa(e)}function df(n,t){if(Cr(t))return Zm(t,n.getFilters());{const e=t.filters.map(s=>Ic(n,s));return Mt.create(e,"or")}}function wa(n){if(rt(n instanceof bt||n instanceof Mt,11850),n instanceof bt)return n;const t=n.getFilters();if(t.length===1)return wa(t[0]);if(Jm(n))return n;const e=t.map(r=>wa(r)),s=[];return e.forEach(r=>{r instanceof bt?s.push(r):r instanceof Mt&&(r.op===n.op?s.push(...r.filters):s.push(r))}),s.length===1?s[0]:Mt.create(s,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(){this.Cn=new bc}addToCollectionParentIndex(t,e){return this.Cn.add(e),C.resolve()}getCollectionParents(t,e){return C.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return C.resolve()}deleteFieldIndex(t,e){return C.resolve()}deleteAllFieldIndexes(t){return C.resolve()}createTargetIndexes(t,e){return C.resolve()}getDocumentsMatchingTarget(t,e){return C.resolve(null)}getIndexType(t,e){return C.resolve(0)}getFieldIndexes(t,e){return C.resolve([])}getNextCollectionGroupToUpdate(t){return C.resolve(null)}getMinOffset(t,e){return C.resolve(Le.min())}getMinOffsetFromCollectionGroup(t,e){return C.resolve(Le.min())}updateCollectionGroup(t,e,s){return C.resolve()}updateIndexEntries(t,e){return C.resolve()}}class bc{constructor(){this.index={}}add(t){const e=t.lastSegment(),s=t.popLast(),r=this.index[e]||new kt(Nt.comparator),i=!r.has(s);return this.index[e]=r.add(s),i}has(t){const e=t.lastSegment(),s=t.popLast(),r=this.index[e];return r&&r.has(s)}getEntries(t){return(this.index[t]||new kt(Nt.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff="IndexedDbIndexManager",No=new Uint8Array(0);class lw{constructor(t,e){this.databaseId=e,this.vn=new bc,this.Fn=new Vn(s=>Os(s),(s,r)=>uo(s,r)),this.uid=t.uid||""}addToCollectionParentIndex(t,e){if(!this.vn.has(e)){const s=e.lastSegment(),r=e.popLast();t.addOnCommittedListener(()=>{this.vn.add(e)});const i={collectionId:s,parent:pe(r)};return pf(t).put(i)}return C.resolve()}getCollectionParents(t,e){const s=[],r=IDBKeyRange.bound([e,""],[wm(e),""],!1,!0);return pf(t).J(r).next(i=>{for(const o of i){if(o.collectionId!==e)break;s.push(rn(o.parent))}return s})}addFieldIndex(t,e){const s=oi(t),r=function(l){return{indexId:l.indexId,collectionGroup:l.collectionGroup,fields:l.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(e);delete r.indexId;const i=s.add(r);if(e.indexState){const o=nr(t);return i.next(l=>{o.put(rf(l,this.uid,e.indexState.sequenceNumber,e.indexState.offset))})}return i.next()}deleteFieldIndex(t,e){const s=oi(t),r=nr(t),i=er(t);return s.delete(e.indexId).next(()=>r.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0)))}deleteAllFieldIndexes(t){const e=oi(t),s=er(t),r=nr(t);return e.Z().next(()=>s.Z()).next(()=>r.Z())}createTargetIndexes(t,e){return C.forEach(this.Mn(e),s=>this.getIndexType(t,s).next(r=>{if(r===0||r===1){const i=new hf(s).Dn();if(i!=null)return this.addFieldIndex(t,i)}}))}getDocumentsMatchingTarget(t,e){const s=er(t);let r=!0;const i=new Map;return C.forEach(this.Mn(e),o=>this.xn(t,o).next(l=>{r&&(r=!!l),i.set(o,l)})).next(()=>{if(r){let o=Et();const l=[];return C.forEach(i,(u,c)=>{K(ff,`Using index ${function(Q){return`id=${Q.indexId}|cg=${Q.collectionGroup}|f=${Q.fields.map(W=>`${W.fieldPath}:${W.kind}`).join(",")}`}(u)} to execute ${Os(e)}`);const d=function(Q,W){const nt=hu(W);if(nt===void 0)return null;for(const ut of Ea(Q,nt.fieldPath))switch(ut.op){case"array-contains-any":return ut.value.arrayValue.values||[];case"array-contains":return[ut.value]}return null}(c,u),p=function(Q,W){const nt=new Map;for(const ut of vs(W))for(const w of Ea(Q,ut.fieldPath))switch(w.op){case"==":case"in":nt.set(ut.fieldPath.canonicalString(),w.value);break;case"not-in":case"!=":return nt.set(ut.fieldPath.canonicalString(),w.value),Array.from(nt.values())}return null}(c,u),y=function(Q,W){const nt=[];let ut=!0;for(const w of vs(W)){const v=w.kind===0?zd(Q,w.fieldPath,Q.startAt):Kd(Q,w.fieldPath,Q.startAt);nt.push(v.value),ut&&(ut=v.inclusive)}return new Pr(nt,ut)}(c,u),A=function(Q,W){const nt=[];let ut=!0;for(const w of vs(W)){const v=w.kind===0?Kd(Q,w.fieldPath,Q.endAt):zd(Q,w.fieldPath,Q.endAt);nt.push(v.value),ut&&(ut=v.inclusive)}return new Pr(nt,ut)}(c,u),k=this.On(u,c,y),R=this.On(u,c,A),D=this.Nn(u,c,p),X=this.Bn(u.indexId,d,k,y.inclusive,R,A.inclusive,D);return C.forEach(X,G=>s.Y(G,e.limit).next(Q=>{Q.forEach(W=>{const nt=Z.fromSegments(W.documentKey);o.has(nt)||(o=o.add(nt),l.push(nt))})}))}).next(()=>l)}return C.resolve(null)})}Mn(t){let e=this.Fn.get(t);return e||(t.filters.length===0?e=[t]:e=ow(Mt.create(t.filters,"and")).map(s=>Eu(t.path,t.collectionGroup,t.orderBy,s.getFilters(),t.limit,t.startAt,t.endAt)),this.Fn.set(t,e),e)}Bn(t,e,s,r,i,o,l){const u=(e!=null?e.length:1)*Math.max(s.length,i.length),c=u/(e!=null?e.length:1),d=[];for(let p=0;p<u;++p){const y=e?this.Ln(e[p/c]):No,A=this.kn(t,y,s[p%c],r),k=this.qn(t,y,i[p%c],o),R=l.map(D=>this.kn(t,y,D,!0));d.push(...this.createRange(A,k,R))}return d}kn(t,e,s,r){const i=new ws(t,Z.empty(),e,s);return r?i:i.An()}qn(t,e,s,r){const i=new ws(t,Z.empty(),e,s);return r?i.An():i}xn(t,e){const s=new hf(e),r=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment();return this.getFieldIndexes(t,r).next(i=>{let o=null;for(const l of i)s.yn(l)&&(!o||l.fields.length>o.fields.length)&&(o=l);return o})}getIndexType(t,e){let s=2;const r=this.Mn(e);return C.forEach(r,i=>this.xn(t,i).next(o=>{o?s!==0&&o.fields.length<function(u){let c=new kt(zt.comparator),d=!1;for(const p of u.filters)for(const y of p.getFlattenedFilters())y.field.isKeyField()||(y.op==="array-contains"||y.op==="array-contains-any"?d=!0:c=c.add(y.field));for(const p of u.orderBy)p.field.isKeyField()||(c=c.add(p.field));return c.size+(d?1:0)}(i)&&(s=1):s=0})).next(()=>function(o){return o.limit!==null}(e)&&r.length>1&&s===2?1:s)}Qn(t,e){const s=new ii;for(const r of vs(t)){const i=e.data.field(r.fieldPath);if(i==null)return null;const o=s.Pn(r.kind);Ts.Kt.Dt(i,o)}return s.un()}Ln(t){const e=new ii;return Ts.Kt.Dt(t,e.Pn(0)),e.un()}$n(t,e){const s=new ii;return Ts.Kt.Dt(dc(this.databaseId,e),s.Pn(function(i){const o=vs(i);return o.length===0?0:o[o.length-1].kind}(t))),s.un()}Nn(t,e,s){if(s===null)return[];let r=[];r.push(new ii);let i=0;for(const o of vs(t)){const l=s[i++];for(const u of r)if(this.Un(e,o.fieldPath)&&Yi(l))r=this.Kn(r,o,l);else{const c=u.Pn(o.kind);Ts.Kt.Dt(l,c)}}return this.Wn(r)}On(t,e,s){return this.Nn(t,e,s.position)}Wn(t){const e=[];for(let s=0;s<t.length;++s)e[s]=t[s].un();return e}Kn(t,e,s){const r=[...t],i=[];for(const o of s.arrayValue.values||[])for(const l of r){const u=new ii;u.seed(l.un()),Ts.Kt.Dt(o,u.Pn(e.kind)),i.push(u)}return i}Un(t,e){return!!t.filters.find(s=>s instanceof bt&&s.field.isEqual(e)&&(s.op==="in"||s.op==="not-in"))}getFieldIndexes(t,e){const s=oi(t),r=nr(t);return(e?s.J(fu,IDBKeyRange.bound(e,e)):s.J()).next(i=>{const o=[];return C.forEach(i,l=>r.get([l.indexId,this.uid]).next(u=>{o.push(function(d,p){const y=p?new Ki(p.sequenceNumber,new Le(Ls(p.readTime),new Z(rn(p.documentKey)),p.largestBatchId)):Ki.empty(),A=d.fields.map(([k,R])=>new qo(zt.fromServerFormat(k),R));return new fa(d.indexId,d.collectionGroup,A,y)}(l,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(t){return this.getFieldIndexes(t).next(e=>e.length===0?null:(e.sort((s,r)=>{const i=s.indexState.sequenceNumber-r.indexState.sequenceNumber;return i!==0?i:pt(s.collectionGroup,r.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(t,e,s){const r=oi(t),i=nr(t);return this.Gn(t).next(o=>r.J(fu,IDBKeyRange.bound(e,e)).next(l=>C.forEach(l,u=>i.put(rf(u.indexId,this.uid,o,s)))))}updateIndexEntries(t,e){const s=new Map;return C.forEach(e,(r,i)=>{const o=s.get(r.collectionGroup);return(o?C.resolve(o):this.getFieldIndexes(t,r.collectionGroup)).next(l=>(s.set(r.collectionGroup,l),C.forEach(l,u=>this.zn(t,r,u).next(c=>{const d=this.jn(i,u);return c.isEqual(d)?C.resolve():this.Jn(t,i,u,c,d)}))))})}Hn(t,e,s,r){return er(t).put(r.Rn(this.uid,this.$n(s,e.key),e.key))}Yn(t,e,s,r){return er(t).delete(r.Vn(this.uid,this.$n(s,e.key),e.key))}zn(t,e,s){const r=er(t);let i=new kt(Ln);return r.ee({index:Nm,range:IDBKeyRange.only([s.indexId,this.uid,Jo(this.$n(s,e))])},(o,l)=>{i=i.add(new ws(s.indexId,e,cf(l.arrayValue),cf(l.directionalValue)))}).next(()=>i)}jn(t,e){let s=new kt(Ln);const r=this.Qn(e,t);if(r==null)return s;const i=hu(e);if(i!=null){const o=t.data.field(i.fieldPath);if(Yi(o))for(const l of o.arrayValue.values||[])s=s.add(new ws(e.indexId,t.key,this.Ln(l),r))}else s=s.add(new ws(e.indexId,t.key,No,r));return s}Jn(t,e,s,r,i){K(ff,"Updating index entries for document '%s'",e.key);const o=[];return function(u,c,d,p,y){const A=u.getIterator(),k=c.getIterator();let R=Zs(A),D=Zs(k);for(;R||D;){let X=!1,G=!1;if(R&&D){const Q=d(R,D);Q<0?G=!0:Q>0&&(X=!0)}else R!=null?G=!0:X=!0;X?(p(D),D=Zs(k)):G?(y(R),R=Zs(A)):(R=Zs(A),D=Zs(k))}}(r,i,Ln,l=>{o.push(this.Hn(t,e,s,l))},l=>{o.push(this.Yn(t,e,s,l))}),C.waitFor(o)}Gn(t){let e=1;return nr(t).ee({index:km,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(s,r,i)=>{i.done(),e=r.sequenceNumber+1}).next(()=>e)}createRange(t,e,s){s=s.sort((o,l)=>Ln(o,l)).filter((o,l,u)=>!l||Ln(o,u[l-1])!==0);const r=[];r.push(t);for(const o of s){const l=Ln(o,t),u=Ln(o,e);if(l===0)r[0]=t.An();else if(l>0&&u<0)r.push(o),r.push(o.An());else if(u>0)break}r.push(e);const i=[];for(let o=0;o<r.length;o+=2){if(this.Zn(r[o],r[o+1]))return[];const l=r[o].Vn(this.uid,No,Z.empty()),u=r[o+1].Vn(this.uid,No,Z.empty());i.push(IDBKeyRange.bound(l,u))}return i}Zn(t,e){return Ln(t,e)>0}getMinOffsetFromCollectionGroup(t,e){return this.getFieldIndexes(t,e).next(mf)}getMinOffset(t,e){return C.mapArray(this.Mn(e),s=>this.xn(t,s).next(r=>r||st(44426))).next(mf)}}function pf(n){return te(n,Qi)}function er(n){return te(n,Ci)}function oi(n){return te(n,oc)}function nr(n){return te(n,Pi)}function mf(n){rt(n.length!==0,28825);let t=n[0].indexState.offset,e=t.largestBatchId;for(let s=1;s<n.length;s++){const r=n[s].indexState.offset;sc(r,t)<0&&(t=r),e<r.largestBatchId&&(e=r.largestBatchId)}return new Le(t.readTime,t.documentKey,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Mg=41943040;class de{static withCacheSize(t){return new de(t,de.DEFAULT_COLLECTION_PERCENTILE,de.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,s){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Og(n,t,e){const s=n.store(Ge),r=n.store(Tr),i=[],o=IDBKeyRange.only(e.batchId);let l=0;const u=s.ee({range:o},(d,p,y)=>(l++,y.delete()));i.push(u.next(()=>{rt(l===1,47070,{batchId:e.batchId})}));const c=[];for(const d of e.mutations){const p=Cm(t,d.key.path,e.batchId);i.push(r.delete(p)),c.push(d.key)}return C.waitFor(i).next(()=>c)}function Aa(n){if(!n)return 0;let t;if(n.document)t=n.document;else if(n.unknownDocument)t=n.unknownDocument;else{if(!n.noDocument)throw st(14731);t=n.noDocument}return JSON.stringify(t).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */de.DEFAULT_COLLECTION_PERCENTILE=10,de.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,de.DEFAULT=new de(Mg,de.DEFAULT_COLLECTION_PERCENTILE,de.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),de.DISABLED=new de(-1,0,0);class sl{constructor(t,e,s,r){this.userId=t,this.serializer=e,this.indexManager=s,this.referenceDelegate=r,this.Xn={}}static wt(t,e,s,r){rt(t.uid!=="",64387);const i=t.isAuthenticated()?t.uid:"";return new sl(i,e,s,r)}checkEmpty(t){let e=!0;const s=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Bn(t).ee({index:Ss,range:s},(r,i,o)=>{e=!1,o.done()}).next(()=>e)}addMutationBatch(t,e,s,r){const i=ur(t),o=Bn(t);return o.add({}).next(l=>{rt(typeof l=="number",49019);const u=new gc(l,e,s,r),c=function(A,k,R){const D=R.baseMutations.map(G=>ba(A.yt,G)),X=R.mutations.map(G=>ba(A.yt,G));return{userId:k,batchId:R.batchId,localWriteTimeMs:R.localWriteTime.toMillis(),baseMutations:D,mutations:X}}(this.serializer,this.userId,u),d=[];let p=new kt((y,A)=>pt(y.canonicalString(),A.canonicalString()));for(const y of r){const A=Cm(this.userId,y.key.path,l);p=p.add(y.key.path.popLast()),d.push(o.put(c)),d.push(i.put(A,Mb))}return p.forEach(y=>{d.push(this.indexManager.addToCollectionParentIndex(t,y))}),t.addOnCommittedListener(()=>{this.Xn[l]=u.keys()}),C.waitFor(d).next(()=>u)})}lookupMutationBatch(t,e){return Bn(t).get(e).next(s=>s?(rt(s.userId===this.userId,48,"Unexpected user for mutation batch",{userId:s.userId,batchId:e}),bs(this.serializer,s)):null)}er(t,e){return this.Xn[e]?C.resolve(this.Xn[e]):this.lookupMutationBatch(t,e).next(s=>{if(s){const r=s.keys();return this.Xn[e]=r,r}return null})}getNextMutationBatchAfterBatchId(t,e){const s=e+1,r=IDBKeyRange.lowerBound([this.userId,s]);let i=null;return Bn(t).ee({index:Ss,range:r},(o,l,u)=>{l.userId===this.userId&&(rt(l.batchId>=s,47524,{tr:s}),i=bs(this.serializer,l)),u.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let s=Ps;return Bn(t).ee({index:Ss,range:e,reverse:!0},(r,i,o)=>{s=i.batchId,o.done()}).next(()=>s)}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,Ps],[this.userId,Number.POSITIVE_INFINITY]);return Bn(t).J(Ss,e).next(s=>s.map(r=>bs(this.serializer,r)))}getAllMutationBatchesAffectingDocumentKey(t,e){const s=zo(this.userId,e.path),r=IDBKeyRange.lowerBound(s),i=[];return ur(t).ee({range:r},(o,l,u)=>{const[c,d,p]=o,y=rn(d);if(c===this.userId&&e.path.isEqual(y))return Bn(t).get(p).next(A=>{if(!A)throw st(61480,{nr:o,batchId:p});rt(A.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:A.userId,batchId:p}),i.push(bs(this.serializer,A))});u.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let s=new kt(pt);const r=[];return e.forEach(i=>{const o=zo(this.userId,i.path),l=IDBKeyRange.lowerBound(o),u=ur(t).ee({range:l},(c,d,p)=>{const[y,A,k]=c,R=rn(A);y===this.userId&&i.path.isEqual(R)?s=s.add(k):p.done()});r.push(u)}),C.waitFor(r).next(()=>this.rr(t,s))}getAllMutationBatchesAffectingQuery(t,e){const s=e.path,r=s.length+1,i=zo(this.userId,s),o=IDBKeyRange.lowerBound(i);let l=new kt(pt);return ur(t).ee({range:o},(u,c,d)=>{const[p,y,A]=u,k=rn(y);p===this.userId&&s.isPrefixOf(k)?k.length===r&&(l=l.add(A)):d.done()}).next(()=>this.rr(t,l))}rr(t,e){const s=[],r=[];return e.forEach(i=>{r.push(Bn(t).get(i).next(o=>{if(o===null)throw st(35274,{batchId:i});rt(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:i}),s.push(bs(this.serializer,o))}))}),C.waitFor(r).next(()=>s)}removeMutationBatch(t,e){return Og(t.le,this.userId,e).next(s=>(t.addOnCommittedListener(()=>{this.ir(e.batchId)}),C.forEach(s,r=>this.referenceDelegate.markPotentiallyOrphaned(t,r))))}ir(t){delete this.Xn[t]}performConsistencyCheck(t){return this.checkEmpty(t).next(e=>{if(!e)return C.resolve();const s=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),r=[];return ur(t).ee({range:s},(i,o,l)=>{if(i[0]===this.userId){const u=rn(i[1]);r.push(u)}else l.done()}).next(()=>{rt(r.length===0,56720,{sr:r.map(i=>i.canonicalString())})})})}containsKey(t,e){return Fg(t,this.userId,e)}_r(t){return Lg(t).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:Ps,lastStreamToken:""})}}function Fg(n,t,e){const s=zo(t,e.path),r=s[1],i=IDBKeyRange.lowerBound(s);let o=!1;return ur(n).ee({range:i,X:!0},(l,u,c)=>{const[d,p,y]=l;d===t&&p===r&&(o=!0),c.done()}).next(()=>o)}function Bn(n){return te(n,Ge)}function ur(n){return te(n,Tr)}function Lg(n){return te(n,Gi)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new Bs(0)}static cr(){return new Bs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(t,e){this.referenceDelegate=t,this.serializer=e}allocateTargetId(t){return this.lr(t).next(e=>{const s=new Bs(e.highestTargetId);return e.highestTargetId=s.next(),this.hr(t,e).next(()=>e.highestTargetId)})}getLastRemoteSnapshotVersion(t){return this.lr(t).next(e=>at.fromTimestamp(new Vt(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(t){return this.lr(t).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(t,e,s){return this.lr(t).next(r=>(r.highestListenSequenceNumber=e,s&&(r.lastRemoteSnapshotVersion=s.toTimestamp()),e>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=e),this.hr(t,r)))}addTargetData(t,e){return this.Pr(t,e).next(()=>this.lr(t).next(s=>(s.targetCount+=1,this.Tr(e,s),this.hr(t,s))))}updateTargetData(t,e){return this.Pr(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next(()=>sr(t).delete(e.targetId)).next(()=>this.lr(t)).next(s=>(rt(s.targetCount>0,8065),s.targetCount-=1,this.hr(t,s)))}removeTargets(t,e,s){let r=0;const i=[];return sr(t).ee((o,l)=>{const u=pi(l);u.sequenceNumber<=e&&s.get(u.targetId)===null&&(r++,i.push(this.removeTargetData(t,u)))}).next(()=>C.waitFor(i)).next(()=>r)}forEachTarget(t,e){return sr(t).ee((s,r)=>{const i=pi(r);e(i)})}lr(t){return _f(t).get(ga).next(e=>(rt(e!==null,2888),e))}hr(t,e){return _f(t).put(ga,e)}Pr(t,e){return sr(t).put(Vg(this.serializer,e))}Tr(t,e){let s=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,s=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,s=!0),s}getTargetCount(t){return this.lr(t).next(e=>e.targetCount)}getTargetData(t,e){const s=Os(e),r=IDBKeyRange.bound([s,Number.NEGATIVE_INFINITY],[s,Number.POSITIVE_INFINITY]);let i=null;return sr(t).ee({range:r,index:Dm},(o,l,u)=>{const c=pi(l);uo(e,c.target)&&(i=c,u.done())}).next(()=>i)}addMatchingKeys(t,e,s){const r=[],i=Hn(t);return e.forEach(o=>{const l=pe(o.path);r.push(i.put({targetId:s,path:l})),r.push(this.referenceDelegate.addReference(t,s,o))}),C.waitFor(r)}removeMatchingKeys(t,e,s){const r=Hn(t);return C.forEach(e,i=>{const o=pe(i.path);return C.waitFor([r.delete([s,o]),this.referenceDelegate.removeReference(t,s,i)])})}removeMatchingKeysForTargetId(t,e){const s=Hn(t),r=IDBKeyRange.bound([e],[e+1],!1,!0);return s.delete(r)}getMatchingKeysForTargetId(t,e){const s=IDBKeyRange.bound([e],[e+1],!1,!0),r=Hn(t);let i=Et();return r.ee({range:s,X:!0},(o,l,u)=>{const c=rn(o[1]),d=new Z(c);i=i.add(d)}).next(()=>i)}containsKey(t,e){const s=pe(e.path),r=IDBKeyRange.bound([s],[wm(s)],!1,!0);let i=0;return Hn(t).ee({index:ic,X:!0,range:r},([o,l],u,c)=>{o!==0&&(i++,c.done())}).next(()=>i>0)}At(t,e){return sr(t).get(e).next(s=>s?pi(s):null)}}function sr(n){return te(n,wr)}function _f(n){return te(n,Cs)}function Hn(n){return te(n,Ar)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf="LruGarbageCollector",cw=1048576;function vf([n,t],[e,s]){const r=pt(n,e);return r===0?pt(t,s):r}class hw{constructor(t){this.Ir=t,this.buffer=new kt(vf),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const s=this.buffer.last();vf(e,s)<0&&(this.buffer=this.buffer.delete(s).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Bg{constructor(t,e,s){this.garbageCollector=t,this.asyncQueue=e,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){K(yf,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){is(e)?K(yf,"Ignoring IndexedDB error during garbage collection: ",e):await js(e)}await this.Vr(3e5)})}}class dw{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next(s=>Math.floor(e/100*s))}nthSequenceNumber(t,e){if(e===0)return C.resolve(je.ce);const s=new hw(e);return this.mr.forEachTarget(t,r=>s.Ar(r.sequenceNumber)).next(()=>this.mr.pr(t,r=>s.Ar(r))).next(()=>s.maxValue)}removeTargets(t,e,s){return this.mr.removeTargets(t,e,s)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(K("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(gf)):this.getCacheSize(t).next(s=>s<this.params.cacheSizeCollectionThreshold?(K("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),gf):this.yr(t,e))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let s,r,i,o,l,u,c;const d=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(K("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),r=this.params.maximumSequenceNumbersToCollect):r=p,o=Date.now(),this.nthSequenceNumber(t,r))).next(p=>(s=p,l=Date.now(),this.removeTargets(t,s,e))).next(p=>(i=p,u=Date.now(),this.removeOrphanedDocuments(t,s))).next(p=>(c=Date.now(),ir()<=At.DEBUG&&K("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${r} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:p})))}}function Ug(n,t){return new dw(n,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(t,e){this.db=t,this.garbageCollector=Ug(this,e)}gr(t){const e=this.wr(t);return this.db.getTargetCache().getTargetCount(t).next(s=>e.next(r=>s+r))}wr(t){let e=0;return this.pr(t,s=>{e++}).next(()=>e)}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}pr(t,e){return this.Sr(t,(s,r)=>e(r))}addReference(t,e,s){return Mo(t,s)}removeReference(t,e,s){return Mo(t,s)}removeTargets(t,e,s){return this.db.getTargetCache().removeTargets(t,e,s)}markPotentiallyOrphaned(t,e){return Mo(t,e)}br(t,e){return function(r,i){let o=!1;return Lg(r).te(l=>Fg(r,l,i).next(u=>(u&&(o=!0),C.resolve(!u)))).next(()=>o)}(t,e)}removeOrphanedDocuments(t,e){const s=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Sr(t,(o,l)=>{if(l<=e){const u=this.br(t,o).next(c=>{if(!c)return i++,s.getEntry(t,o).next(()=>(s.removeEntry(o,at.min()),Hn(t).delete(function(p){return[0,pe(p.path)]}(o))))});r.push(u)}}).next(()=>C.waitFor(r)).next(()=>s.apply(t)).next(()=>i)}removeTarget(t,e){const s=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,s)}updateLimboDocument(t,e){return Mo(t,e)}Sr(t,e){const s=Hn(t);let r,i=je.ce;return s.ee({index:ic},([o,l],{path:u,sequenceNumber:c})=>{o===0?(i!==je.ce&&e(new Z(rn(r)),i),i=c,r=u):i=je.ce}).next(()=>{i!==je.ce&&e(new Z(rn(r)),i)})}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function Mo(n,t){return Hn(n).put(function(s,r){return{targetId:0,path:pe(s.path),sequenceNumber:r}}(t,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(){this.changes=new Vn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Ht.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const s=this.changes.get(e);return s!==void 0?C.resolve(s):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(t){this.serializer=t}setIndexManager(t){this.indexManager=t}addEntry(t,e,s){return gs(t).put(s)}removeEntry(t,e,s){return gs(t).delete(function(i,o){const l=i.path.toArray();return[l.slice(0,l.length-2),l[l.length-2],Ta(o),l[l.length-1]]}(e,s))}updateMetadata(t,e){return this.getMetadata(t).next(s=>(s.byteSize+=e,this.Dr(t,s)))}getEntry(t,e){let s=Ht.newInvalidDocument(e);return gs(t).ee({index:Ko,range:IDBKeyRange.only(ai(e))},(r,i)=>{s=this.Cr(e,i)}).next(()=>s)}vr(t,e){let s={size:0,document:Ht.newInvalidDocument(e)};return gs(t).ee({index:Ko,range:IDBKeyRange.only(ai(e))},(r,i)=>{s={document:this.Cr(e,i),size:Aa(i)}}).next(()=>s)}getEntries(t,e){let s=Me();return this.Fr(t,e,(r,i)=>{const o=this.Cr(r,i);s=s.insert(r,o)}).next(()=>s)}Mr(t,e){let s=Me(),r=new qt(Z.comparator);return this.Fr(t,e,(i,o)=>{const l=this.Cr(i,o);s=s.insert(i,l),r=r.insert(i,Aa(o))}).next(()=>({documents:s,Or:r}))}Fr(t,e,s){if(e.isEmpty())return C.resolve();let r=new kt(bf);e.forEach(u=>r=r.add(u));const i=IDBKeyRange.bound(ai(r.first()),ai(r.last())),o=r.getIterator();let l=o.getNext();return gs(t).ee({index:Ko,range:i},(u,c,d)=>{const p=Z.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;l&&bf(l,p)<0;)s(l,null),l=o.getNext();l&&l.isEqual(p)&&(s(l,c),l=o.hasNext()?o.getNext():null),l?d.j(ai(l)):d.done()}).next(()=>{for(;l;)s(l,null),l=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(t,e,s,r,i){const o=e.path,l=[o.popLast().toArray(),o.lastSegment(),Ta(s.readTime),s.documentKey.path.isEmpty()?"":s.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return gs(t).J(IDBKeyRange.bound(l,u,!0)).next(c=>{i==null||i.incrementDocumentReadCount(c.length);let d=Me();for(const p of c){const y=this.Cr(Z.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);y.isFoundDocument()&&(ho(e,y)||r.has(y.key))&&(d=d.insert(y.key,y))}return d})}getAllFromCollectionGroup(t,e,s,r){let i=Me();const o=If(e,s),l=If(e,Le.max());return gs(t).ee({index:Vm,range:IDBKeyRange.bound(o,l,!0)},(u,c,d)=>{const p=this.Cr(Z.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);i=i.insert(p.key,p),i.size===r&&d.done()}).next(()=>i)}newChangeBuffer(t){return new mw(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next(e=>e.byteSize)}getMetadata(t){return Ef(t).get(du).next(e=>(rt(!!e,20021),e))}Dr(t,e){return Ef(t).put(du,e)}Cr(t,e){if(e){const s=ZT(this.serializer,e);if(!(s.isNoDocument()&&s.version.isEqual(at.min())))return s}return Ht.newInvalidDocument(t)}}function jg(n){return new pw(n)}class mw extends $g{constructor(t,e){super(),this.Nr=t,this.trackRemovals=e,this.Br=new Vn(s=>s.toString(),(s,r)=>s.isEqual(r))}applyChanges(t){const e=[];let s=0,r=new kt((i,o)=>pt(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const l=this.Br.get(i);if(e.push(this.Nr.removeEntry(t,i,l.readTime)),o.isValidDocument()){const u=nf(this.Nr.serializer,o);r=r.add(i.path.popLast());const c=Aa(u);s+=c-l.size,e.push(this.Nr.addEntry(t,i,u))}else if(s-=l.size,this.trackRemovals){const u=nf(this.Nr.serializer,o.convertToNoDocument(at.min()));e.push(this.Nr.addEntry(t,i,u))}}),r.forEach(i=>{e.push(this.Nr.indexManager.addToCollectionParentIndex(t,i))}),e.push(this.Nr.updateMetadata(t,s)),C.waitFor(e)}getFromCache(t,e){return this.Nr.vr(t,e).next(s=>(this.Br.set(e,{size:s.size,readTime:s.document.readTime}),s.document))}getAllFromCache(t,e){return this.Nr.Mr(t,e).next(({documents:s,Or:r})=>(r.forEach((i,o)=>{this.Br.set(i,{size:o,readTime:s.get(i).readTime})}),s))}}function Ef(n){return te(n,Wi)}function gs(n){return te(n,ma)}function ai(n){const t=n.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function If(n,t){const e=t.documentKey.path.toArray();return[n,Ta(t.readTime),e.slice(0,e.length-2),e.length>0?e[e.length-1]:""]}function bf(n,t){const e=n.path.toArray(),s=t.path.toArray();let r=0;for(let i=0;i<e.length-2&&i<s.length-2;++i)if(r=pt(e[i],s[i]),r)return r;return r=pt(e.length,s.length),r||(r=pt(e[e.length-2],s[s.length-2]),r||pt(e[e.length-1],s[s.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(t,e,s,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=s,this.indexManager=r}getDocument(t,e){let s=null;return this.documentOverlayCache.getOverlay(t,e).next(r=>(s=r,this.remoteDocumentCache.getEntry(t,e))).next(r=>(s!==null&&Ni(s.mutation,r,qe.empty(),Vt.now()),r))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(s=>this.getLocalViewOfDocuments(t,s,Et()).next(()=>s))}getLocalViewOfDocuments(t,e,s=Et()){const r=on();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,s).next(i=>{let o=di();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const s=on();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,Et()))}populateOverlays(t,e,s){const r=[];return s.forEach(i=>{e.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(t,r).next(i=>{i.forEach((o,l)=>{e.set(o,l)})})}computeViews(t,e,s,r){let i=Me();const o=ki(),l=function(){return ki()}();return e.forEach((u,c)=>{const d=s.get(c.key);r.has(c.key)&&(d===void 0||d.mutation instanceof os)?i=i.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Ni(d.mutation,c,d.mutation.getFieldMask(),Vt.now())):o.set(c.key,qe.empty())}),this.recalculateAndSaveOverlays(t,i).next(u=>(u.forEach((c,d)=>o.set(c,d)),e.forEach((c,d)=>l.set(c,new gw(d,o.get(c)??null))),l))}recalculateAndSaveOverlays(t,e){const s=ki();let r=new qt((o,l)=>o-l),i=Et();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=e.get(u);if(c===null)return;let d=s.get(u)||qe.empty();d=l.applyToLocalView(c,d),s.set(u,d);const p=(r.get(l.batchId)||Et()).add(u);r=r.insert(l.batchId,p)})}).next(()=>{const o=[],l=r.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=ag();d.forEach(y=>{if(!i.has(y)){const A=fg(e.get(y),s.get(y));A!==null&&p.set(y,A),i=i.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,p))}return C.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,e,s,r){return function(o){return Z.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):yT(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,s,r):this.getDocumentsMatchingCollectionQuery(t,e,s,r)}getNextDocuments(t,e,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,s.largestBatchId,r-i.size):C.resolve(on());let l=zi,u=i;return o.next(c=>C.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?C.resolve():this.remoteDocumentCache.getEntry(t,d).next(y=>{u=u.insert(d,y)}))).next(()=>this.populateOverlays(t,c,i)).next(()=>this.computeViews(t,u,c,Et())).next(d=>({batchId:l,changes:og(d)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Z(e)).next(s=>{let r=di();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(t,e,s,r){const i=e.collectionGroup;let o=di();return this.indexManager.getCollectionParents(t,i).next(l=>C.forEach(l,u=>{const c=function(p,y){return new Ja(y,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(e,u.child(i));return this.getDocumentsMatchingCollectionQuery(t,c,s,r).next(d=>{d.forEach((p,y)=>{o=o.insert(p,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,s.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,s,i,r))).next(o=>{i.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,Ht.newInvalidDocument(d)))});let l=di();return o.forEach((u,c)=>{const d=i.get(u);d!==void 0&&Ni(d.mutation,c,qe.empty(),Vt.now()),ho(e,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return C.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,function(r){return{id:r.id,version:r.version,createTime:we(r.createTime)}}(e)),C.resolve()}getNamedQuery(t,e){return C.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,function(r){return{name:r.name,query:Dg(r.bundledQuery),readTime:we(r.readTime)}}(e)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(){this.overlays=new qt(Z.comparator),this.qr=new Map}getOverlay(t,e){return C.resolve(this.overlays.get(e))}getOverlays(t,e){const s=on();return C.forEach(e,r=>this.getOverlay(t,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(t,e,s){return s.forEach((r,i)=>{this.St(t,e,i)}),C.resolve()}removeOverlaysForBatchId(t,e,s){const r=this.qr.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(s)),C.resolve()}getOverlaysForCollection(t,e,s){const r=on(),i=e.length+1,o=new Z(e.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!e.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>s&&r.set(u.getKey(),u)}return C.resolve(r)}getOverlaysForCollectionGroup(t,e,s,r){let i=new qt((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===e&&c.largestBatchId>s){let d=i.get(c.largestBatchId);d===null&&(d=on(),i=i.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=on(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=r)););return C.resolve(l)}St(t,e,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.qr.get(r.largestBatchId).delete(s.key);this.qr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new yc(e,s));let i=this.qr.get(e);i===void 0&&(i=Et(),this.qr.set(e,i)),this.qr.set(e,i.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(){this.sessionToken=Jt.EMPTY_BYTE_STRING}getSessionToken(t){return C.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,C.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(){this.Qr=new kt(re.$r),this.Ur=new kt(re.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const s=new re(t,e);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(t,e){t.forEach(s=>this.addReference(s,e))}removeReference(t,e){this.Gr(new re(t,e))}zr(t,e){t.forEach(s=>this.removeReference(s,e))}jr(t){const e=new Z(new Nt([])),s=new re(e,t),r=new re(e,t+1),i=[];return this.Ur.forEachInRange([s,r],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(t=>this.Gr(t))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new Z(new Nt([])),s=new re(e,t),r=new re(e,t+1);let i=Et();return this.Ur.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(t){const e=new re(t,0),s=this.Qr.firstAfterOrEqual(e);return s!==null&&t.isEqual(s.key)}}class re{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return Z.comparator(t.key,e.key)||pt(t.Yr,e.Yr)}static Kr(t,e){return pt(t.Yr,e.Yr)||Z.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new kt(re.$r)}checkEmpty(t){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,s,r){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new gc(i,e,s,r);this.mutationQueue.push(o);for(const l of r)this.Zr=this.Zr.add(new re(l.key,i)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return C.resolve(o)}lookupMutationBatch(t,e){return C.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const s=e+1,r=this.ei(s),i=r<0?0:r;return C.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?Ps:this.tr-1)}getAllMutationBatches(t){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const s=new re(e,0),r=new re(e,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([s,r],o=>{const l=this.Xr(o.Yr);i.push(l)}),C.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let s=new kt(pt);return e.forEach(r=>{const i=new re(r,0),o=new re(r,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],l=>{s=s.add(l.Yr)})}),C.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(t,e){const s=e.path,r=s.length+1;let i=s;Z.isDocumentKey(i)||(i=i.child(""));const o=new re(new Z(i),0);let l=new kt(pt);return this.Zr.forEachWhile(u=>{const c=u.key.path;return!!s.isPrefixOf(c)&&(c.length===r&&(l=l.add(u.Yr)),!0)},o),C.resolve(this.ti(l))}ti(t){const e=[];return t.forEach(s=>{const r=this.Xr(s);r!==null&&e.push(r)}),e}removeMutationBatch(t,e){rt(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return C.forEach(e.mutations,r=>{const i=new re(r.key,e.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.Zr=s})}ir(t){}containsKey(t,e){const s=new re(e,0),r=this.Zr.firstAfterOrEqual(s);return C.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,C.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(t){this.ri=t,this.docs=function(){return new qt(Z.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const s=e.key,r=this.docs.get(s),i=r?r.size:0,o=this.ri(e);return this.docs=this.docs.insert(s,{document:e.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const s=this.docs.get(e);return C.resolve(s?s.document.mutableCopy():Ht.newInvalidDocument(e))}getEntries(t,e){let s=Me();return e.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Ht.newInvalidDocument(r))}),C.resolve(s)}getDocumentsMatchingQuery(t,e,s,r){let i=Me();const o=e.path,l=new Z(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||sc(Sm(d),s)<=0||(r.has(d.key)||ho(e,d))&&(i=i.insert(d.key,d.mutableCopy()))}return C.resolve(i)}getAllFromCollectionGroup(t,e,s,r){st(9500)}ii(t,e){return C.forEach(this.docs,s=>e(s))}newChangeBuffer(t){return new bw(this)}getSize(t){return C.resolve(this.size)}}class bw extends $g{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?e.push(this.Nr.addEntry(t,r)):this.Nr.removeEntry(s)}),C.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(t){this.persistence=t,this.si=new Vn(e=>Os(e),uo),this.lastRemoteSnapshotVersion=at.min(),this.highestTargetId=0,this.oi=0,this._i=new Tc,this.targetCount=0,this.ai=Bs.ur()}forEachTarget(t,e){return this.si.forEach((s,r)=>e(r)),C.resolve()}getLastRemoteSnapshotVersion(t){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return C.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(t,e,s){return s&&(this.lastRemoteSnapshotVersion=s),e>this.oi&&(this.oi=e),C.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new Bs(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,C.resolve()}updateTargetData(t,e){return this.Pr(e),C.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,C.resolve()}removeTargets(t,e,s){let r=0;const i=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=e&&s.get(l.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(t,l.targetId)),r++)}),C.waitFor(i).next(()=>r)}getTargetCount(t){return C.resolve(this.targetCount)}getTargetData(t,e){const s=this.si.get(e)||null;return C.resolve(s)}addMatchingKeys(t,e,s){return this._i.Wr(e,s),C.resolve()}removeMatchingKeys(t,e,s){this._i.zr(e,s);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach(o=>{i.push(r.markPotentiallyOrphaned(t,o))}),C.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),C.resolve()}getMatchingKeysForTargetId(t,e){const s=this._i.Hr(e);return C.resolve(s)}containsKey(t,e){return C.resolve(this._i.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(t,e){this.ui={},this.overlays={},this.ci=new je(0),this.li=!1,this.li=!0,this.hi=new vw,this.referenceDelegate=t(this),this.Pi=new Tw(this),this.indexManager=new aw,this.remoteDocumentCache=function(r){return new Iw(r)}(s=>this.referenceDelegate.Ti(s)),this.serializer=new Cg(e),this.Ii=new _w(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new yw,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let s=this.ui[t.toKey()];return s||(s=new Ew(e,this.referenceDelegate),this.ui[t.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,s){K("MemoryPersistence","Starting transaction:",t);const r=new ww(this.ci.next());return this.referenceDelegate.Ei(),s(r).next(i=>this.referenceDelegate.di(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ai(t,e){return C.or(Object.values(this.ui).map(s=>()=>s.containsKey(t,e)))}}class ww extends xm{constructor(t){super(),this.currentSequenceNumber=t}}class rl{constructor(t){this.persistence=t,this.Ri=new Tc,this.Vi=null}static mi(t){return new rl(t)}get fi(){if(this.Vi)return this.Vi;throw st(60996)}addReference(t,e,s){return this.Ri.addReference(s,e),this.fi.delete(s.toString()),C.resolve()}removeReference(t,e,s){return this.Ri.removeReference(s,e),this.fi.add(s.toString()),C.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),C.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach(r=>this.fi.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,e.targetId).next(r=>{r.forEach(i=>this.fi.add(i.toString()))}).next(()=>s.removeTargetData(t,e))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.fi,s=>{const r=Z.fromPath(s);return this.gi(t,r).next(i=>{i||e.removeEntry(r,at.min())})}).next(()=>(this.Vi=null,e.apply(t)))}updateLimboDocument(t,e){return this.gi(t,e).next(s=>{s?this.fi.delete(e.toString()):this.fi.add(e.toString())})}Ti(t){return 0}gi(t,e){return C.or([()=>C.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class Sa{constructor(t,e){this.persistence=t,this.pi=new Vn(s=>pe(s.path),(s,r)=>s.isEqual(r)),this.garbageCollector=Ug(this,e)}static mi(t,e){return new Sa(t,e)}Ei(){}di(t){return C.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next(s=>e.next(r=>s+r))}wr(t){let e=0;return this.pr(t,s=>{e++}).next(()=>e)}pr(t,e){return C.forEach(this.pi,(s,r)=>this.br(t,s,r).next(i=>i?C.resolve():e(r)))}removeTargets(t,e,s){return this.persistence.getTargetCache().removeTargets(t,e,s)}removeOrphanedDocuments(t,e){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ii(t,o=>this.br(t,o,e).next(l=>{l||(s++,i.removeEntry(o,at.min()))})).next(()=>i.apply(t)).next(()=>s)}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),C.resolve()}removeTarget(t,e){const s=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,s)}addReference(t,e,s){return this.pi.set(s,t.currentSequenceNumber),C.resolve()}removeReference(t,e,s){return this.pi.set(s,t.currentSequenceNumber),C.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),C.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Go(t.data.value)),e}br(t,e,s){return C.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const r=this.pi.get(e);return C.resolve(r!==void 0&&r>s)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(t){this.serializer=t}k(t,e,s,r){const i=new za("createOrUpgrade",e);s<1&&r>=1&&(function(u){u.createObjectStore(lo)}(t),function(u){u.createObjectStore(Gi,{keyPath:Nb}),u.createObjectStore(Ge,{keyPath:Dd,autoIncrement:!0}).createIndex(Ss,kd,{unique:!0}),u.createObjectStore(Tr)}(t),Tf(t),function(u){u.createObjectStore(Es)}(t));let o=C.resolve();return s<3&&r>=3&&(s!==0&&(function(u){u.deleteObjectStore(Ar),u.deleteObjectStore(wr),u.deleteObjectStore(Cs)}(t),Tf(t)),o=o.next(()=>function(u){const c=u.store(Cs),d={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:at.min().toTimestamp(),targetCount:0};return c.put(ga,d)}(i))),s<4&&r>=4&&(s!==0&&(o=o.next(()=>function(u,c){return c.store(Ge).J().next(p=>{u.deleteObjectStore(Ge),u.createObjectStore(Ge,{keyPath:Dd,autoIncrement:!0}).createIndex(Ss,kd,{unique:!0});const y=c.store(Ge),A=p.map(k=>y.put(k));return C.waitFor(A)})}(t,i))),o=o.next(()=>{(function(u){u.createObjectStore(Sr,{keyPath:qb})})(t)})),s<5&&r>=5&&(o=o.next(()=>this.yi(i))),s<6&&r>=6&&(o=o.next(()=>(function(u){u.createObjectStore(Wi)}(t),this.wi(i)))),s<7&&r>=7&&(o=o.next(()=>this.Si(i))),s<8&&r>=8&&(o=o.next(()=>this.bi(t,i))),s<9&&r>=9&&(o=o.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(t)})),s<10&&r>=10&&(o=o.next(()=>this.Di(i))),s<11&&r>=11&&(o=o.next(()=>{(function(u){u.createObjectStore(Ha,{keyPath:zb})})(t),function(u){u.createObjectStore(Ga,{keyPath:Kb})}(t)})),s<12&&r>=12&&(o=o.next(()=>{(function(u){const c=u.createObjectStore(Wa,{keyPath:Yb});c.createIndex(pu,Zb,{unique:!1}),c.createIndex(Mm,tT,{unique:!1})})(t)})),s<13&&r>=13&&(o=o.next(()=>function(u){const c=u.createObjectStore(ma,{keyPath:Ob});c.createIndex(Ko,Fb),c.createIndex(Vm,Lb)}(t)).next(()=>this.Ci(t,i)).next(()=>t.deleteObjectStore(Es))),s<14&&r>=14&&(o=o.next(()=>this.Fi(t,i))),s<15&&r>=15&&(o=o.next(()=>function(u){u.createObjectStore(oc,{keyPath:Hb,autoIncrement:!0}).createIndex(fu,Gb,{unique:!1}),u.createObjectStore(Pi,{keyPath:Wb}).createIndex(km,Qb,{unique:!1}),u.createObjectStore(Ci,{keyPath:Xb}).createIndex(Nm,Jb,{unique:!1})}(t))),s<16&&r>=16&&(o=o.next(()=>{e.objectStore(Pi).clear()}).next(()=>{e.objectStore(Ci).clear()})),s<17&&r>=17&&(o=o.next(()=>{(function(u){u.createObjectStore(ac,{keyPath:eT})})(t)})),s<18&&r>=18&&am()&&(o=o.next(()=>{e.objectStore(Pi).clear()}).next(()=>{e.objectStore(Ci).clear()})),o}wi(t){let e=0;return t.store(Es).ee((s,r)=>{e+=Aa(r)}).next(()=>{const s={byteSize:e};return t.store(Wi).put(du,s)})}yi(t){const e=t.store(Gi),s=t.store(Ge);return e.J().next(r=>C.forEach(r,i=>{const o=IDBKeyRange.bound([i.userId,Ps],[i.userId,i.lastAcknowledgedBatchId]);return s.J(Ss,o).next(l=>C.forEach(l,u=>{rt(u.userId===i.userId,18650,"Cannot process batch from unexpected user",{batchId:u.batchId});const c=bs(this.serializer,u);return Og(t,i.userId,c).next(()=>{})}))}))}Si(t){const e=t.store(Ar),s=t.store(Es);return t.store(Cs).get(ga).next(r=>{const i=[];return s.ee((o,l)=>{const u=new Nt(o),c=function(p){return[0,pe(p)]}(u);i.push(e.get(c).next(d=>d?C.resolve():(p=>e.put({targetId:0,path:pe(p),sequenceNumber:r.highestListenSequenceNumber}))(u)))}).next(()=>C.waitFor(i))})}bi(t,e){t.createObjectStore(Qi,{keyPath:jb});const s=e.store(Qi),r=new bc,i=o=>{if(r.add(o)){const l=o.lastSegment(),u=o.popLast();return s.put({collectionId:l,parent:pe(u)})}};return e.store(Es).ee({X:!0},(o,l)=>{const u=new Nt(o);return i(u.popLast())}).next(()=>e.store(Tr).ee({X:!0},([o,l,u],c)=>{const d=rn(l);return i(d.popLast())}))}Di(t){const e=t.store(wr);return e.ee((s,r)=>{const i=pi(r),o=Vg(this.serializer,i);return e.put(o)})}Ci(t,e){const s=e.store(Es),r=[];return s.ee((i,o)=>{const l=e.store(ma),u=function(p){return p.document?new Z(Nt.fromString(p.document.name).popFirst(5)):p.noDocument?Z.fromSegments(p.noDocument.path):p.unknownDocument?Z.fromSegments(p.unknownDocument.path):st(36783)}(o).path.toArray(),c={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};r.push(l.put(c))}).next(()=>C.waitFor(r))}Fi(t,e){const s=e.store(Ge),r=jg(this.serializer),i=new wc(rl.mi,this.serializer.yt);return s.J().next(o=>{const l=new Map;return o.forEach(u=>{let c=l.get(u.userId)??Et();bs(this.serializer,u).keys().forEach(d=>c=c.add(d)),l.set(u.userId,c)}),C.forEach(l,(u,c)=>{const d=new oe(c),p=nl.wt(this.serializer,d),y=i.getIndexManager(d),A=sl.wt(d,this.serializer,y,i.referenceDelegate);return new qg(r,A,p,y).recalculateAndSaveOverlaysForDocumentKeys(new mu(e,je.ce),u).next()})})}}function Tf(n){n.createObjectStore(Ar,{keyPath:Ub}).createIndex(ic,$b,{unique:!0}),n.createObjectStore(wr,{keyPath:"targetId"}).createIndex(Dm,Bb,{unique:!0}),n.createObjectStore(Cs)}const Un="IndexedDbPersistence",Ll=18e5,Bl=5e3,Ul="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",Sw="main";class Ac{constructor(t,e,s,r,i,o,l,u,c,d,p=18){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=s,this.Mi=i,this.window=o,this.document=l,this.xi=c,this.Oi=d,this.Ni=p,this.ci=null,this.li=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Bi=null,this.inForeground=!1,this.Li=null,this.ki=null,this.qi=Number.NEGATIVE_INFINITY,this.Qi=y=>Promise.resolve(),!Ac.v())throw new et(F.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new fw(this,r),this.$i=e+Sw,this.serializer=new Cg(u),this.Ui=new Yn(this.$i,this.Ni,new Aw(this.serializer)),this.hi=new ew,this.Pi=new uw(this.referenceDelegate,this.serializer),this.remoteDocumentCache=jg(this.serializer),this.Ii=new tw,this.window&&this.window.localStorage?this.Ki=this.window.localStorage:(this.Ki=null,d===!1&&Te(Un,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Wi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new et(F.FAILED_PRECONDITION,Ul);return this.Gi(),this.zi(),this.ji(),this.runTransaction("getHighestListenSequenceNumber","readonly",t=>this.Pi.getHighestSequenceNumber(t))}).then(t=>{this.ci=new je(t,this.xi)}).then(()=>{this.li=!0}).catch(t=>(this.Ui&&this.Ui.close(),Promise.reject(t)))}Ji(t){return this.Qi=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.Ui.$(async e=>{e.newVersion===null&&await t()})}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.Mi.enqueueAndForget(async()=>{this.started&&await this.Wi()}))}Wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",t=>Oo(t).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Hi(t).next(e=>{e||(this.isPrimary=!1,this.Mi.enqueueRetryable(()=>this.Qi(!1)))})}).next(()=>this.Yi(t)).next(e=>this.isPrimary&&!e?this.Zi(t).next(()=>!1):!!e&&this.Xi(t).next(()=>!0))).catch(t=>{if(is(t))return K(Un,"Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return K(Un,"Releasing owner lease after error during lease refresh",t),!1}).then(t=>{this.isPrimary!==t&&this.Mi.enqueueRetryable(()=>this.Qi(t)),this.isPrimary=t})}Hi(t){return li(t).get(Ys).next(e=>C.resolve(this.es(e)))}ts(t){return Oo(t).delete(this.clientId)}async ns(){if(this.isPrimary&&!this.rs(this.qi,Ll)){this.qi=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const s=te(e,Sr);return s.J().next(r=>{const i=this.ss(r,Ll),o=r.filter(l=>i.indexOf(l)===-1);return C.forEach(o,l=>s.delete(l.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ki)for(const e of t)this.Ki.removeItem(this._s(e.clientId))}}ji(){this.ki=this.Mi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Wi().then(()=>this.ns()).then(()=>this.ji()))}es(t){return!!t&&t.ownerId===this.clientId}Yi(t){return this.Oi?C.resolve(!0):li(t).get(Ys).next(e=>{if(e!==null&&this.rs(e.leaseTimestampMs,Bl)&&!this.us(e.ownerId)){if(this.es(e)&&this.networkEnabled)return!0;if(!this.es(e)){if(!e.allowTabSynchronization)throw new et(F.FAILED_PRECONDITION,Ul);return!1}}return!(!this.networkEnabled||!this.inForeground)||Oo(t).J().next(s=>this.ss(s,Bl).find(r=>{if(this.clientId!==r.clientId){const i=!this.networkEnabled&&r.networkEnabled,o=!this.inForeground&&r.inForeground,l=this.networkEnabled===r.networkEnabled;if(i||o&&l)return!0}return!1})===void 0)}).next(e=>(this.isPrimary!==e&&K(Un,`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.li=!1,this.cs(),this.ki&&(this.ki.cancel(),this.ki=null),this.ls(),this.hs(),await this.Ui.runTransaction("shutdown","readwrite",[lo,Sr],t=>{const e=new mu(t,je.ce);return this.Zi(e).next(()=>this.ts(e))}),this.Ui.close(),this.Ps()}ss(t,e){return t.filter(s=>this.rs(s.updateTimeMs,e)&&!this.us(s.clientId))}Ts(){return this.runTransaction("getActiveClients","readonly",t=>Oo(t).J().next(e=>this.ss(e,Ll).map(s=>s.clientId)))}get started(){return this.li}getGlobalsCache(){return this.hi}getMutationQueue(t,e){return sl.wt(t,this.serializer,e,this.referenceDelegate)}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(t){return new lw(t,this.serializer.yt.databaseId)}getDocumentOverlayCache(t){return nl.wt(this.serializer,t)}getBundleCache(){return this.Ii}runTransaction(t,e,s){K(Un,"Starting transaction:",t);const r=e==="readonly"?"readonly":"readwrite",i=function(u){return u===18?rT:u===17?Bm:u===16?sT:u===15?lc:u===14?Lm:u===13?Fm:u===12?nT:u===11?Om:void st(60245)}(this.Ni);let o;return this.Ui.runTransaction(t,r,i,l=>(o=new mu(l,this.ci?this.ci.next():je.ce),e==="readwrite-primary"?this.Hi(o).next(u=>!!u||this.Yi(o)).next(u=>{if(!u)throw Te(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.Mi.enqueueRetryable(()=>this.Qi(!1)),new et(F.FAILED_PRECONDITION,Rm);return s(o)}).next(u=>this.Xi(o).next(()=>u)):this.Is(o).next(()=>s(o)))).then(l=>(o.raiseOnCommittedEvent(),l))}Is(t){return li(t).get(Ys).next(e=>{if(e!==null&&this.rs(e.leaseTimestampMs,Bl)&&!this.us(e.ownerId)&&!this.es(e)&&!(this.Oi||this.allowTabSynchronization&&e.allowTabSynchronization))throw new et(F.FAILED_PRECONDITION,Ul)})}Xi(t){const e={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return li(t).put(Ys,e)}static v(){return Yn.v()}Zi(t){const e=li(t);return e.get(Ys).next(s=>this.es(s)?(K(Un,"Releasing primary lease."),e.delete(Ys)):C.resolve())}rs(t,e){const s=Date.now();return!(t<s-e)&&(!(t>s)||(Te(`Detected an update time that is in the future: ${t} > ${s}`),!1))}Gi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Li=()=>{this.Mi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Wi()))},this.document.addEventListener("visibilitychange",this.Li),this.inForeground=this.document.visibilityState==="visible")}ls(){this.Li&&(this.document.removeEventListener("visibilitychange",this.Li),this.Li=null)}zi(){var t;typeof((t=this.window)==null?void 0:t.addEventListener)=="function"&&(this.Bi=()=>{this.cs();const e=/(?:Version|Mobile)\/1[456]/;om()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.Mi.enterRestrictedMode(!0),this.Mi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Bi))}hs(){this.Bi&&(this.window.removeEventListener("pagehide",this.Bi),this.Bi=null)}us(t){var e;try{const s=((e=this.Ki)==null?void 0:e.getItem(this._s(t)))!==null;return K(Un,`Client '${t}' ${s?"is":"is not"} zombied in LocalStorage`),s}catch(s){return Te(Un,"Failed to get zombied client id.",s),!1}}cs(){if(this.Ki)try{this.Ki.setItem(this._s(this.clientId),String(Date.now()))}catch(t){Te("Failed to set zombie client id.",t)}}Ps(){if(this.Ki)try{this.Ki.removeItem(this._s(this.clientId))}catch{}}_s(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function li(n){return te(n,lo)}function Oo(n){return te(n,Sr)}function Rw(n,t){let e=n.projectId;return n.isDefaultDatabase||(e+="."+n.database),"firestore/"+t+"/"+e+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(t,e,s,r){this.targetId=t,this.fromCache=e,this.Es=s,this.ds=r}static As(t,e){let s=Et(),r=Et();for(const i of e.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Sc(t,e.fromCache,s,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return om()?8:Pm(ua())>0?6:4}()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,s,r){const i={result:null};return this.ys(t,e).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(t,e,r,s).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new xw;return this.Ss(t,e,o).next(l=>{if(i.result=l,this.Vs)return this.bs(t,e,o,l.size)})}).next(()=>i.result)}bs(t,e,s,r){return s.documentReadCount<this.fs?(ir()<=At.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",or(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),C.resolve()):(ir()<=At.DEBUG&&K("QueryEngine","Query:",or(e),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.gs*r?(ir()<=At.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",or(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ze(e))):C.resolve())}ys(t,e){if(Hd(e))return C.resolve(null);let s=ze(e);return this.indexManager.getIndexType(t,s).next(r=>r===0?null:(e.limit!==null&&r===1&&(e=Iu(e,null,"F"),s=ze(e)),this.indexManager.getDocumentsMatchingTarget(t,s).next(i=>{const o=Et(...i);return this.ps.getDocuments(t,o).next(l=>this.indexManager.getMinOffset(t,s).next(u=>{const c=this.Ds(e,l);return this.Cs(e,c,o,u.readTime)?this.ys(t,Iu(e,null,"F")):this.vs(t,c,e,u)}))})))}ws(t,e,s,r){return Hd(e)||r.isEqual(at.min())?C.resolve(null):this.ps.getDocuments(t,s).next(i=>{const o=this.Ds(e,i);return this.Cs(e,o,s,r)?C.resolve(null):(ir()<=At.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),or(e)),this.vs(t,o,e,Rb(r,zi)).next(l=>l))})}Ds(t,e){let s=new kt(rg(t));return e.forEach((r,i)=>{ho(t,i)&&(s=s.add(i))}),s}Cs(t,e,s,r){if(t.limit===null)return!1;if(s.size!==e.size)return!0;const i=t.limitType==="F"?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ss(t,e,s){return ir()<=At.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",or(e)),this.ps.getDocumentsMatchingQuery(t,e,Le.min(),s)}vs(t,e,s,r){return this.ps.getDocumentsMatchingQuery(t,s,r).next(i=>(e.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc="LocalStore",Pw=3e8;class Cw{constructor(t,e,s,r){this.persistence=t,this.Fs=e,this.serializer=r,this.Ms=new qt(pt),this.xs=new Vn(i=>Os(i),uo),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(s)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new qg(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ms))}}function Kg(n,t,e,s){return new Cw(n,t,e,s)}async function Hg(n,t){const e=mt(n);return await e.persistence.runTransaction("Handle user change","readonly",s=>{let r;return e.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,e.Bs(t),e.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],l=[];let u=Et();for(const c of r){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of i){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return e.localDocuments.getDocuments(s,u).next(c=>({Ls:c,removedBatchIds:o,addedBatchIds:l}))})})}function Vw(n,t){const e=mt(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=t.batch.keys(),i=e.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,y=p.keys();let A=C.resolve();return y.forEach(k=>{A=A.next(()=>d.getEntry(u,k)).next(R=>{const D=c.docVersions.get(k);rt(D!==null,48541),R.version.compareTo(D)<0&&(p.applyToRemoteDocument(R,c),R.isValidDocument()&&(R.setReadTime(c.commitVersion),d.addEntry(R)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(e,s,t,i).next(()=>i.apply(s)).next(()=>e.mutationQueue.performConsistencyCheck(s)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(s,r,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(l){let u=Et();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(t))).next(()=>e.localDocuments.getDocuments(s,r))})}function Gg(n){const t=mt(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Pi.getLastRemoteSnapshotVersion(e))}function Dw(n,t){const e=mt(n),s=t.snapshotVersion;let r=e.Ms;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=e.Ns.newChangeBuffer({trackRemovals:!0});r=e.Ms;const l=[];t.targetChanges.forEach((d,p)=>{const y=r.get(p);if(!y)return;l.push(e.Pi.removeMatchingKeys(i,d.removedDocuments,p).next(()=>e.Pi.addMatchingKeys(i,d.addedDocuments,p)));let A=y.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(p)!==null?A=A.withResumeToken(Jt.EMPTY_BYTE_STRING,at.min()).withLastLimboFreeSnapshotVersion(at.min()):d.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(d.resumeToken,s)),r=r.insert(p,A),function(R,D,X){return R.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=Pw?!0:X.addedDocuments.size+X.modifiedDocuments.size+X.removedDocuments.size>0}(y,A,d)&&l.push(e.Pi.updateTargetData(i,A))});let u=Me(),c=Et();if(t.documentUpdates.forEach(d=>{t.resolvedLimboDocuments.has(d)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(kw(i,o,t.documentUpdates).next(d=>{u=d.ks,c=d.qs})),!s.isEqual(at.min())){const d=e.Pi.getLastRemoteSnapshotVersion(i).next(p=>e.Pi.setTargetsMetadata(i,i.currentSequenceNumber,s));l.push(d)}return C.waitFor(l).next(()=>o.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(e.Ms=r,i))}function kw(n,t,e){let s=Et(),r=Et();return e.forEach(i=>s=s.add(i)),t.getEntries(n,s).next(i=>{let o=Me();return e.forEach((l,u)=>{const c=i.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(r=r.add(l)),u.isNoDocument()&&u.version.isEqual(at.min())?(t.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(u),o=o.insert(l,u)):K(Rc,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{ks:o,qs:r}})}function Nw(n,t){const e=mt(n);return e.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=Ps),e.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function Mw(n,t){const e=mt(n);return e.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return e.Pi.getTargetData(s,t).next(i=>i?(r=i,C.resolve(r)):e.Pi.allocateTargetId(s).next(o=>(r=new vn(t,o,"TargetPurposeListen",s.currentSequenceNumber),e.Pi.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=e.Ms.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(e.Ms=e.Ms.insert(s.targetId,s),e.xs.set(t,s.targetId)),s})}async function Pu(n,t,e){const s=mt(n),r=s.Ms.get(t),i=e?"readwrite":"readwrite-primary";try{e||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!is(o))throw o;K(Rc,`Failed to update sequence numbers for target ${t}: ${o}`)}s.Ms=s.Ms.remove(t),s.xs.delete(r.target)}function wf(n,t,e){const s=mt(n);let r=at.min(),i=Et();return s.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=mt(u),y=p.xs.get(d);return y!==void 0?C.resolve(p.Ms.get(y)):p.Pi.getTargetData(c,d)}(s,o,ze(t)).next(l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>s.Fs.getDocumentsMatchingQuery(o,t,e?r:at.min(),e?i:Et())).next(l=>(Ow(s,ET(t),l),{documents:l,Qs:i})))}function Ow(n,t,e){let s=n.Os.get(t)||at.min();e.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),n.Os.set(t,s)}class Af{constructor(){this.activeTargetIds=ST()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Wg{constructor(){this.Mo=new Af,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,s){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,s){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new Af,Promise.resolve()}handleUserChange(t,e,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{Oo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf="ConnectivityMonitor";class Rf{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){K(Sf,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){K(Sf,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fo=null;function Cu(){return Fo===null?Fo=function(){return 268435456+Math.round(2147483648*Math.random())}():Fo++,"0x"+Fo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l="RestConnection",Lw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Bw{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${s}/databases/${r}`,this.Wo=this.databaseId.database===_a?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Go(t,e,s,r,i){const o=Cu(),l=this.zo(t,e.toUriEncodedString());K($l,`Sending RPC '${t}' ${o}:`,l,s);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,r,i);const{host:c}=new URL(l),d=Yu(c);return this.Jo(t,l,u,s,d).then(p=>(K($l,`Received RPC '${t}' ${o}: `,p),p),p=>{throw Ns($l,`RPC '${t}' ${o} failed with error: `,p,"url: ",l,"request:",s),p})}Ho(t,e,s,r,i,o){return this.Go(t,e,s,r,i)}jo(t,e,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Fr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((r,i)=>t[i]=r),s&&s.headers.forEach((r,i)=>t[i]=r)}zo(t,e){const s=Lw[t];return`${this.Uo}/v1/${e}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce="WebChannelConnection";class $w extends Bw{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,s,r,i){const o=Cu();return new Promise((l,u)=>{const c=new _m;c.setWithCredentials(!0),c.listenOnce(ym.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case jo.NO_ERROR:const p=c.getResponseJson();K(ce,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(p)),l(p);break;case jo.TIMEOUT:K(ce,`RPC '${t}' ${o} timed out`),u(new et(F.DEADLINE_EXCEEDED,"Request time out"));break;case jo.HTTP_ERROR:const y=c.getStatus();if(K(ce,`RPC '${t}' ${o} failed with status:`,y,"response text:",c.getResponseText()),y>0){let A=c.getResponseJson();Array.isArray(A)&&(A=A[0]);const k=A==null?void 0:A.error;if(k&&k.status&&k.message){const R=function(X){const G=X.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(G)>=0?G:F.UNKNOWN}(k.status);u(new et(R,k.message))}else u(new et(F.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new et(F.UNAVAILABLE,"Connection failed."));break;default:st(9055,{l_:t,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{K(ce,`RPC '${t}' ${o} completed.`)}});const d=JSON.stringify(r);K(ce,`RPC '${t}' ${o} sending request:`,r),c.send(e,"POST",d,s,15)})}T_(t,e,s){const r=Cu(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Im(),l=Em(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,e,s),u.encodeInitMessageHeaders=!0;const d=i.join("");K(ce,`Creating RPC '${t}' stream ${r}: ${d}`,u);const p=o.createWebChannel(d,u);this.I_(p);let y=!1,A=!1;const k=new Uw({Yo:D=>{A?K(ce,`Not sending because RPC '${t}' stream ${r} is closed:`,D):(y||(K(ce,`Opening RPC '${t}' stream ${r} transport.`),p.open(),y=!0),K(ce,`RPC '${t}' stream ${r} sending:`,D),p.send(D))},Zo:()=>p.close()}),R=(D,X,G)=>{D.listen(X,Q=>{try{G(Q)}catch(W){setTimeout(()=>{throw W},0)}})};return R(p,hi.EventType.OPEN,()=>{A||(K(ce,`RPC '${t}' stream ${r} transport opened.`),k.o_())}),R(p,hi.EventType.CLOSE,()=>{A||(A=!0,K(ce,`RPC '${t}' stream ${r} transport closed`),k.a_(),this.E_(p))}),R(p,hi.EventType.ERROR,D=>{A||(A=!0,Ns(ce,`RPC '${t}' stream ${r} transport errored. Name:`,D.name,"Message:",D.message),k.a_(new et(F.UNAVAILABLE,"The operation could not be completed")))}),R(p,hi.EventType.MESSAGE,D=>{var X;if(!A){const G=D.data[0];rt(!!G,16349);const Q=G,W=(Q==null?void 0:Q.error)||((X=Q[0])==null?void 0:X.error);if(W){K(ce,`RPC '${t}' stream ${r} received error:`,W);const nt=W.status;let ut=function(_){const b=Wt[_];if(b!==void 0)return gg(b)}(nt),w=W.message;ut===void 0&&(ut=F.INTERNAL,w="Unknown error status: "+nt+" with message "+W.message),A=!0,k.a_(new et(ut,w)),p.close()}else K(ce,`RPC '${t}' stream ${r} received:`,G),k.u_(G)}}),R(l,vm.STAT_EVENT,D=>{D.stat===uu.PROXY?K(ce,`RPC '${t}' stream ${r} detected buffering proxy`):D.stat===uu.NOPROXY&&K(ce,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{k.__()},0),k}terminate(){this.c_.forEach(t=>t.close()),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter(e=>e===t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jw(){return typeof window<"u"?window:null}function Yo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(n){return new qT(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(t,e,s=1e3,r=1.5,i=6e4){this.Mi=t,this.timerId=e,this.d_=s,this.A_=r,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),r=Math.max(0,e-s);r>0&&K("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,r,()=>(this.f_=Date.now(),t())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf="PersistentStream";class Xg{constructor(t,e,s,r,i,o,l,u){this.Mi=t,this.S_=s,this.b_=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Qg(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===F.RESOURCE_EXHAUSTED?(Te(e.toString()),Te("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.D_===e&&this.G_(s,r)},s=>{t(()=>{const r=new et(F.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(r)})})}G_(t,e){const s=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo(()=>{s(()=>this.listener.Xo())}),this.stream.t_(()=>{s(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(r=>{s(()=>this.z_(r))}),this.stream.onMessage(r=>{s(()=>++this.F_==1?this.J_(r):this.onNext(r))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return K(xf,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget(()=>this.D_===t?e():(K(xf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class qw extends Xg{constructor(t,e,s,r,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,s,r,o),this.serializer=i}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=HT(this.serializer,t),s=function(i){if(!("targetChange"in i))return at.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?at.min():o.readTime?we(o.readTime):at.min()}(t);return this.listener.H_(e,s)}Y_(t){const e={};e.database=wu(this.serializer),e.addTarget=function(i,o){let l;const u=o.target;if(l=va(u)?{documents:wg(i,u)}:{query:Ag(i,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=vg(i,o.resumeToken);const c=bu(i,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(at.min())>0){l.readTime=kr(i,o.snapshotVersion.toTimestamp());const c=bu(i,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,t);const s=WT(this.serializer,t);s&&(e.labels=s),this.q_(e)}Z_(t){const e={};e.database=wu(this.serializer),e.removeTarget=t,this.q_(e)}}class zw extends Xg{constructor(t,e,s,r,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,s,r,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return rt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,rt(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){rt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=GT(t.writeResults,t.commitTime),s=we(t.commitTime);return this.listener.na(s,e)}ra(){const t={};t.database=wu(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map(s=>ba(this.serializer,s))};this.q_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{}class Hw extends Kw{constructor(t,e,s,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=s,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new et(F.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(t,Tu(e,s),r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new et(F.UNKNOWN,i.toString())})}Ho(t,e,s,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(t,Tu(e,s),r,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new et(F.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class Gw{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Te(e),this.aa=!1):K("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us="RemoteStore";class Ww{constructor(t,e,s,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{s.enqueueAndForget(async()=>{zs(this)&&(K(Us,"Restarting streams for network reachability change."),await async function(u){const c=mt(u);c.Ea.add(4),await po(c),c.Ra.set("Unknown"),c.Ea.delete(4),await ol(c)}(this))})}),this.Ra=new Gw(s,r)}}async function ol(n){if(zs(n))for(const t of n.da)await t(!0)}async function po(n){for(const t of n.da)await t(!1)}function Jg(n,t){const e=mt(n);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),Vc(e)?Cc(e):Br(e).O_()&&Pc(e,t))}function xc(n,t){const e=mt(n),s=Br(e);e.Ia.delete(t),s.O_()&&Yg(e,t),e.Ia.size===0&&(s.O_()?s.L_():zs(e)&&e.Ra.set("Unknown"))}function Pc(n,t){if(n.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(at.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Br(n).Y_(t)}function Yg(n,t){n.Va.Ue(t),Br(n).Z_(t)}function Cc(n){n.Va=new BT({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),At:t=>n.Ia.get(t)||null,ht:()=>n.datastore.serializer.databaseId}),Br(n).start(),n.Ra.ua()}function Vc(n){return zs(n)&&!Br(n).x_()&&n.Ia.size>0}function zs(n){return mt(n).Ea.size===0}function Zg(n){n.Va=void 0}async function Qw(n){n.Ra.set("Online")}async function Xw(n){n.Ia.forEach((t,e)=>{Pc(n,t)})}async function Jw(n,t){Zg(n),Vc(n)?(n.Ra.ha(t),Cc(n)):n.Ra.set("Unknown")}async function Yw(n,t,e){if(n.Ra.set("Online"),t instanceof yg&&t.state===2&&t.cause)try{await async function(r,i){const o=i.cause;for(const l of i.targetIds)r.Ia.has(l)&&(await r.remoteSyncer.rejectListen(l,o),r.Ia.delete(l),r.Va.removeTarget(l))}(n,t)}catch(s){K(Us,"Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Ra(n,s)}else if(t instanceof Xo?n.Va.Ze(t):t instanceof _g?n.Va.st(t):n.Va.tt(t),!e.isEqual(at.min()))try{const s=await Gg(n.localStore);e.compareTo(s)>=0&&await function(i,o){const l=i.Va.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=i.Ia.get(c);d&&i.Ia.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=i.Ia.get(u);if(!d)return;i.Ia.set(u,d.withResumeToken(Jt.EMPTY_BYTE_STRING,d.snapshotVersion)),Yg(i,u);const p=new vn(d.target,u,c,d.sequenceNumber);Pc(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(n,e)}catch(s){K(Us,"Failed to raise snapshot:",s),await Ra(n,s)}}async function Ra(n,t,e){if(!is(t))throw t;n.Ea.add(1),await po(n),n.Ra.set("Offline"),e||(e=()=>Gg(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{K(Us,"Retrying IndexedDB access"),await e(),n.Ea.delete(1),await ol(n)})}function t_(n,t){return t().catch(e=>Ra(n,e,t))}async function mo(n){const t=mt(n),e=ss(t);let s=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Ps;for(;Zw(t);)try{const r=await Nw(t.localStore,s);if(r===null){t.Ta.length===0&&e.L_();break}s=r.batchId,t1(t,r)}catch(r){await Ra(t,r)}e_(t)&&n_(t)}function Zw(n){return zs(n)&&n.Ta.length<10}function t1(n,t){n.Ta.push(t);const e=ss(n);e.O_()&&e.X_&&e.ea(t.mutations)}function e_(n){return zs(n)&&!ss(n).x_()&&n.Ta.length>0}function n_(n){ss(n).start()}async function e1(n){ss(n).ra()}async function n1(n){const t=ss(n);for(const e of n.Ta)t.ea(e.mutations)}async function s1(n,t,e){const s=n.Ta.shift(),r=_c.from(s,t,e);await t_(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await mo(n)}async function r1(n,t){t&&ss(n).X_&&await async function(s,r){if(function(o){return OT(o)&&o!==F.ABORTED}(r.code)){const i=s.Ta.shift();ss(s).B_(),await t_(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await mo(s)}}(n,t),e_(n)&&n_(n)}async function Pf(n,t){const e=mt(n);e.asyncQueue.verifyOperationInProgress(),K(Us,"RemoteStore received new credentials");const s=zs(e);e.Ea.add(3),await po(e),s&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await ol(e)}async function i1(n,t){const e=mt(n);t?(e.Ea.delete(2),await ol(e)):t||(e.Ea.add(2),await po(e),e.Ra.set("Unknown"))}function Br(n){return n.ma||(n.ma=function(e,s,r){const i=mt(e);return i.sa(),new qw(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Xo:Qw.bind(null,n),t_:Xw.bind(null,n),r_:Jw.bind(null,n),H_:Yw.bind(null,n)}),n.da.push(async t=>{t?(n.ma.B_(),Vc(n)?Cc(n):n.Ra.set("Unknown")):(await n.ma.stop(),Zg(n))})),n.ma}function ss(n){return n.fa||(n.fa=function(e,s,r){const i=mt(e);return i.sa(),new zw(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:e1.bind(null,n),r_:r1.bind(null,n),ta:n1.bind(null,n),na:s1.bind(null,n)}),n.da.push(async t=>{t?(n.fa.B_(),await mo(n)):(await n.fa.stop(),n.Ta.length>0&&(K(Us,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(t,e,s,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new bn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,s,r,i){const o=Date.now()+s,l=new Dc(t,e,o,r,i);return l.start(s),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new et(F.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function kc(n,t){if(Te("AsyncQueue",`${t}: ${n}`),is(n))return new et(F.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{static emptySet(t){return new pr(t.comparator)}constructor(t){this.comparator=t?(e,s)=>t(e,s)||Z.comparator(e.key,s.key):(e,s)=>Z.comparator(e.key,s.key),this.keyedMap=di(),this.sortedSet=new qt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,s)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof pr)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;e.hasNext();){const r=e.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const s=new pr;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=e,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(){this.ga=new qt(Z.comparator)}track(t){const e=t.doc.key,s=this.ga.get(e);s?t.type!==0&&s.type===3?this.ga=this.ga.insert(e,t):t.type===3&&s.type!==1?this.ga=this.ga.insert(e,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.ga=this.ga.remove(e):t.type===1&&s.type===2?this.ga=this.ga.insert(e,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):st(63341,{Rt:t,pa:s}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal((e,s)=>{t.push(s)}),t}}class Nr{constructor(t,e,s,r,i,o,l,u,c){this.query=t,this.docs=e,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(t,e,s,r,i){const o=[];return e.forEach(l=>{o.push({type:0,doc:l})}),new Nr(t,e,pr.emptySet(e),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ya(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,s=t.docChanges;if(e.length!==s.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==s[r].type||!e[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(t=>t.Da())}}class a1{constructor(){this.queries=Vf(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,s){const r=mt(e),i=r.queries;r.queries=Vf(),i.forEach((o,l)=>{for(const u of l.Sa)u.onError(s)})})(this,new et(F.ABORTED,"Firestore shutting down"))}}function Vf(){return new Vn(n=>sg(n),Ya)}async function s_(n,t){const e=mt(n);let s=3;const r=t.query;let i=e.queries.get(r);i?!i.ba()&&t.Da()&&(s=2):(i=new o1,s=t.Da()?0:1);try{switch(s){case 0:i.wa=await e.onListen(r,!0);break;case 1:i.wa=await e.onListen(r,!1);break;case 2:await e.onFirstRemoteStoreListen(r)}}catch(o){const l=kc(o,`Initialization of query '${or(t.query)}' failed`);return void t.onError(l)}e.queries.set(r,i),i.Sa.push(t),t.va(e.onlineState),i.wa&&t.Fa(i.wa)&&Nc(e)}async function r_(n,t){const e=mt(n),s=t.query;let r=3;const i=e.queries.get(s);if(i){const o=i.Sa.indexOf(t);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?r=t.Da()?0:1:!i.ba()&&t.Da()&&(r=2))}switch(r){case 0:return e.queries.delete(s),e.onUnlisten(s,!0);case 1:return e.queries.delete(s),e.onUnlisten(s,!1);case 2:return e.onLastRemoteStoreUnlisten(s);default:return}}function l1(n,t){const e=mt(n);let s=!1;for(const r of t){const i=r.query,o=e.queries.get(i);if(o){for(const l of o.Sa)l.Fa(r)&&(s=!0);o.wa=r}}s&&Nc(e)}function u1(n,t,e){const s=mt(n),r=s.queries.get(t);if(r)for(const i of r.Sa)i.onError(e);s.queries.delete(t)}function Nc(n){n.Ca.forEach(t=>{t.next()})}var Vu,Df;(Df=Vu||(Vu={})).Ma="default",Df.Cache="cache";class i_{constructor(t,e,s){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(t){if(!this.options.includeMetadataChanges){const s=[];for(const r of t.docChanges)r.type!==3&&s.push(r);t=new Nr(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const s=e!=="Offline";return(!this.options.qa||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=Nr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Vu.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(t){this.key=t}}class a_{constructor(t){this.key=t}}class c1{constructor(t,e){this.query=t,this.Ya=e,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Et(),this.mutatedKeys=Et(),this.eu=rg(t),this.tu=new pr(this.eu)}get nu(){return this.Ya}ru(t,e){const s=e?e.iu:new Cf,r=e?e.tu:this.tu;let i=e?e.mutatedKeys:this.mutatedKeys,o=r,l=!1;const u=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,c=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((d,p)=>{const y=r.get(d),A=ho(this.query,p)?p:null,k=!!y&&this.mutatedKeys.has(y.key),R=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let D=!1;y&&A?y.data.isEqual(A.data)?k!==R&&(s.track({type:3,doc:A}),D=!0):this.su(y,A)||(s.track({type:2,doc:A}),D=!0,(u&&this.eu(A,u)>0||c&&this.eu(A,c)<0)&&(l=!0)):!y&&A?(s.track({type:0,doc:A}),D=!0):y&&!A&&(s.track({type:1,doc:y}),D=!0,(u||c)&&(l=!0)),D&&(A?(o=o.add(A),i=R?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),s.track({type:1,doc:d})}return{tu:o,iu:s,Cs:l,mutatedKeys:i}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,s,r){const i=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const o=t.iu.ya();o.sort((d,p)=>function(A,k){const R=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return st(20277,{Rt:D})}};return R(A)-R(k)}(d.type,p.type)||this.eu(d.doc,p.doc)),this.ou(s),r=r??!1;const l=e&&!r?this._u():[],u=this.Xa.size===0&&this.current&&!r?1:0,c=u!==this.Za;return this.Za=u,o.length!==0||c?{snapshot:new Nr(this.query,t.tu,i,o,t.mutatedKeys,u===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Cf,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach(e=>this.Ya=this.Ya.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ya=this.Ya.delete(e)),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=Et(),this.tu.forEach(s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))});const e=[];return t.forEach(s=>{this.Xa.has(s)||e.push(new a_(s))}),this.Xa.forEach(s=>{t.has(s)||e.push(new o_(s))}),e}cu(t){this.Ya=t.Qs,this.Xa=Et();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return Nr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Mc="SyncEngine";class h1{constructor(t,e,s){this.query=t,this.targetId=e,this.view=s}}class d1{constructor(t){this.key=t,this.hu=!1}}class f1{constructor(t,e,s,r,i,o){this.localStore=t,this.remoteStore=e,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Vn(l=>sg(l),Ya),this.Iu=new Map,this.Eu=new Set,this.du=new qt(Z.comparator),this.Au=new Map,this.Ru=new Tc,this.Vu={},this.mu=new Map,this.fu=Bs.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function p1(n,t,e=!0){const s=f_(n);let r;const i=s.Tu.get(t);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.lu()):r=await l_(s,t,e,!0),r}async function m1(n,t){const e=f_(n);await l_(e,t,!0,!1)}async function l_(n,t,e,s){const r=await Mw(n.localStore,ze(t)),i=r.targetId,o=n.sharedClientState.addLocalQueryTarget(i,e);let l;return s&&(l=await g1(n,t,i,o==="current",r.resumeToken)),n.isPrimaryClient&&e&&Jg(n.remoteStore,r),l}async function g1(n,t,e,s,r){n.pu=(p,y,A)=>async function(R,D,X,G){let Q=D.view.ru(X);Q.Cs&&(Q=await wf(R.localStore,D.query,!1).then(({documents:w})=>D.view.ru(w,Q)));const W=G&&G.targetChanges.get(D.targetId),nt=G&&G.targetMismatches.get(D.targetId)!=null,ut=D.view.applyChanges(Q,R.isPrimaryClient,W,nt);return Nf(R,D.targetId,ut.au),ut.snapshot}(n,p,y,A);const i=await wf(n.localStore,t,!0),o=new c1(t,i.Qs),l=o.ru(i.documents),u=fo.createSynthesizedTargetChangeForCurrentChange(e,s&&n.onlineState!=="Offline",r),c=o.applyChanges(l,n.isPrimaryClient,u);Nf(n,e,c.au);const d=new h1(t,e,o);return n.Tu.set(t,d),n.Iu.has(e)?n.Iu.get(e).push(t):n.Iu.set(e,[t]),c.snapshot}async function _1(n,t,e){const s=mt(n),r=s.Tu.get(t),i=s.Iu.get(r.targetId);if(i.length>1)return s.Iu.set(r.targetId,i.filter(o=>!Ya(o,t))),void s.Tu.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await Pu(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),e&&xc(s.remoteStore,r.targetId),Du(s,r.targetId)}).catch(js)):(Du(s,r.targetId),await Pu(s.localStore,r.targetId,!0))}async function y1(n,t){const e=mt(n),s=e.Tu.get(t),r=e.Iu.get(s.targetId);e.isPrimaryClient&&r.length===1&&(e.sharedClientState.removeLocalQueryTarget(s.targetId),xc(e.remoteStore,s.targetId))}async function v1(n,t,e){const s=p_(n);try{const r=await function(o,l){const u=mt(o),c=Vt.now(),d=l.reduce((A,k)=>A.add(k.key),Et());let p,y;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let k=Me(),R=Et();return u.Ns.getEntries(A,d).next(D=>{k=D,k.forEach((X,G)=>{G.isValidDocument()||(R=R.add(X))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,k)).next(D=>{p=D;const X=[];for(const G of l){const Q=NT(G,p.get(G.key).overlayedDocument);Q!=null&&X.push(new os(G.key,Q,Qm(Q.value.mapValue),Oe.exists(!0)))}return u.mutationQueue.addMutationBatch(A,c,X,l)}).next(D=>{y=D;const X=D.applyToLocalDocumentSet(p,R);return u.documentOverlayCache.saveOverlays(A,D.batchId,X)})}).then(()=>({batchId:y.batchId,changes:og(p)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(r.batchId),function(o,l,u){let c=o.Vu[o.currentUser.toKey()];c||(c=new qt(pt)),c=c.insert(l,u),o.Vu[o.currentUser.toKey()]=c}(s,r.batchId,e),await go(s,r.changes),await mo(s.remoteStore)}catch(r){const i=kc(r,"Failed to persist write");e.reject(i)}}async function u_(n,t){const e=mt(n);try{const s=await Dw(e.localStore,t);t.targetChanges.forEach((r,i)=>{const o=e.Au.get(i);o&&(rt(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?o.hu=!0:r.modifiedDocuments.size>0?rt(o.hu,14607):r.removedDocuments.size>0&&(rt(o.hu,42227),o.hu=!1))}),await go(e,s,t)}catch(s){await js(s)}}function kf(n,t,e){const s=mt(n);if(s.isPrimaryClient&&e===0||!s.isPrimaryClient&&e===1){const r=[];s.Tu.forEach((i,o)=>{const l=o.view.va(t);l.snapshot&&r.push(l.snapshot)}),function(o,l){const u=mt(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const y of p.Sa)y.va(l)&&(c=!0)}),c&&Nc(u)}(s.eventManager,t),r.length&&s.Pu.H_(r),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function E1(n,t,e){const s=mt(n);s.sharedClientState.updateQueryState(t,"rejected",e);const r=s.Au.get(t),i=r&&r.key;if(i){let o=new qt(Z.comparator);o=o.insert(i,Ht.newNoDocument(i,at.min()));const l=Et().add(i),u=new el(at.min(),new Map,new qt(pt),o,l);await u_(s,u),s.du=s.du.remove(i),s.Au.delete(t),Oc(s)}else await Pu(s.localStore,t,!1).then(()=>Du(s,t,e)).catch(js)}async function I1(n,t){const e=mt(n),s=t.batch.batchId;try{const r=await Vw(e.localStore,t);h_(e,s,null),c_(e,s),e.sharedClientState.updateMutationState(s,"acknowledged"),await go(e,r)}catch(r){await js(r)}}async function b1(n,t,e){const s=mt(n);try{const r=await function(o,l){const u=mt(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(rt(p!==null,37113),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(s.localStore,t);h_(s,t,e),c_(s,t),s.sharedClientState.updateMutationState(t,"rejected",e),await go(s,r)}catch(r){await js(r)}}function c_(n,t){(n.mu.get(t)||[]).forEach(e=>{e.resolve()}),n.mu.delete(t)}function h_(n,t,e){const s=mt(n);let r=s.Vu[s.currentUser.toKey()];if(r){const i=r.get(t);i&&(e?i.reject(e):i.resolve(),r=r.remove(t)),s.Vu[s.currentUser.toKey()]=r}}function Du(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const s of n.Iu.get(t))n.Tu.delete(s),e&&n.Pu.yu(s,e);n.Iu.delete(t),n.isPrimaryClient&&n.Ru.jr(t).forEach(s=>{n.Ru.containsKey(s)||d_(n,s)})}function d_(n,t){n.Eu.delete(t.path.canonicalString());const e=n.du.get(t);e!==null&&(xc(n.remoteStore,e),n.du=n.du.remove(t),n.Au.delete(e),Oc(n))}function Nf(n,t,e){for(const s of e)s instanceof o_?(n.Ru.addReference(s.key,t),T1(n,s)):s instanceof a_?(K(Mc,"Document no longer in limbo: "+s.key),n.Ru.removeReference(s.key,t),n.Ru.containsKey(s.key)||d_(n,s.key)):st(19791,{wu:s})}function T1(n,t){const e=t.key,s=e.path.canonicalString();n.du.get(e)||n.Eu.has(s)||(K(Mc,"New document in limbo: "+e),n.Eu.add(s),Oc(n))}function Oc(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Eu.values().next().value;n.Eu.delete(t);const e=new Z(Nt.fromString(t)),s=n.fu.next();n.Au.set(s,new d1(e)),n.du=n.du.insert(e,s),Jg(n.remoteStore,new vn(ze(co(e.path)),s,"TargetPurposeLimboResolution",je.ce))}}async function go(n,t,e){const s=mt(n),r=[],i=[],o=[];s.Tu.isEmpty()||(s.Tu.forEach((l,u)=>{o.push(s.pu(u,t,e).then(c=>{var d;if((c||e)&&s.isPrimaryClient){const p=c?!c.fromCache:(d=e==null?void 0:e.targetChanges.get(u.targetId))==null?void 0:d.current;s.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){r.push(c);const p=Sc.As(u.targetId,c);i.push(p)}}))}),await Promise.all(o),s.Pu.H_(r),await async function(u,c){const d=mt(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>C.forEach(c,y=>C.forEach(y.Es,A=>d.persistence.referenceDelegate.addReference(p,y.targetId,A)).next(()=>C.forEach(y.ds,A=>d.persistence.referenceDelegate.removeReference(p,y.targetId,A)))))}catch(p){if(!is(p))throw p;K(Rc,"Failed to update sequence numbers: "+p)}for(const p of c){const y=p.targetId;if(!p.fromCache){const A=d.Ms.get(y),k=A.snapshotVersion,R=A.withLastLimboFreeSnapshotVersion(k);d.Ms=d.Ms.insert(y,R)}}}(s.localStore,i))}async function w1(n,t){const e=mt(n);if(!e.currentUser.isEqual(t)){K(Mc,"User change. New user:",t.toKey());const s=await Hg(e.localStore,t);e.currentUser=t,function(i,o){i.mu.forEach(l=>{l.forEach(u=>{u.reject(new et(F.CANCELLED,o))})}),i.mu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await go(e,s.Ls)}}function A1(n,t){const e=mt(n),s=e.Au.get(t);if(s&&s.hu)return Et().add(s.key);{let r=Et();const i=e.Iu.get(t);if(!i)return r;for(const o of i){const l=e.Tu.get(o);r=r.unionWith(l.view.nu)}return r}}function f_(n){const t=mt(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=u_.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=A1.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=E1.bind(null,t),t.Pu.H_=l1.bind(null,t.eventManager),t.Pu.yu=u1.bind(null,t.eventManager),t}function p_(n){const t=mt(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=I1.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=b1.bind(null,t),t}class eo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=il(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return Kg(this.persistence,new zg,t.initialUser,this.serializer)}Cu(t){return new wc(rl.mi,this.serializer)}Du(t){return new Wg}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}eo.provider={build:()=>new eo};class S1 extends eo{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){rt(this.persistence.referenceDelegate instanceof Sa,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new Bg(s,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?de.withCacheSize(this.cacheSizeBytes):de.DEFAULT;return new wc(s=>Sa.mi(s,e),this.serializer)}}class R1 extends eo{constructor(t,e,s){super(),this.xu=t,this.cacheSizeBytes=e,this.forceOwnership=s,this.kind="persistent",this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await this.xu.initialize(this,t),await p_(this.xu.syncEngine),await mo(this.xu.remoteStore),await this.persistence.Ji(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}vu(t){return Kg(this.persistence,new zg,t.initialUser,this.serializer)}Fu(t,e){const s=this.persistence.referenceDelegate.garbageCollector;return new Bg(s,t.asyncQueue,e)}Mu(t,e){const s=new Vb(e,this.persistence);return new Cb(t.asyncQueue,s)}Cu(t){const e=Rw(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),s=this.cacheSizeBytes!==void 0?de.withCacheSize(this.cacheSizeBytes):de.DEFAULT;return new Ac(this.synchronizeTabs,e,t.clientId,s,t.asyncQueue,jw(),Yo(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Du(t){return new Wg}}class xa{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>kf(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=w1.bind(null,this.syncEngine),await i1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new a1}()}createDatastore(t){const e=il(t.databaseInfo.databaseId),s=function(i){return new $w(i)}(t.databaseInfo);return function(i,o,l,u){return new Hw(i,o,l,u)}(t.authCredentials,t.appCheckCredentials,s,e)}createRemoteStore(t){return function(s,r,i,o,l){return new Ww(s,r,i,o,l)}(this.localStore,this.datastore,t.asyncQueue,e=>kf(this.syncEngine,e,0),function(){return Rf.v()?new Rf:new Fw}())}createSyncEngine(t,e){return function(r,i,o,l,u,c,d){const p=new f1(r,i,o,l,u,c);return d&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(r){const i=mt(r);K(Us,"RemoteStore shutting down."),i.Ea.add(5),await po(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}xa.provider={build:()=>new xa};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):Te("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs="FirestoreClient";class x1{constructor(t,e,s,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=s,this.databaseInfo=r,this.user=oe.UNAUTHENTICATED,this.clientId=ec.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,async o=>{K(rs,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(s,o=>(K(rs,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new bn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const s=kc(e,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function jl(n,t){n.asyncQueue.verifyOperationInProgress(),K(rs,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let s=e.initialUser;n.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Hg(t.localStore,r),s=r)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Mf(n,t){n.asyncQueue.verifyOperationInProgress();const e=await P1(n);K(rs,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(s=>Pf(t.remoteStore,s)),n.setAppCheckTokenChangeListener((s,r)=>Pf(t.remoteStore,r)),n._onlineComponents=t}async function P1(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){K(rs,"Using user provided OfflineComponentProvider");try{await jl(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(r){return r.name==="FirebaseError"?r.code===F.FAILED_PRECONDITION||r.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(e))throw e;Ns("Error using user provided cache. Falling back to memory cache: "+e),await jl(n,new eo)}}else K(rs,"Using default OfflineComponentProvider"),await jl(n,new S1(void 0));return n._offlineComponents}async function g_(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(K(rs,"Using user provided OnlineComponentProvider"),await Mf(n,n._uninitializedComponentsProvider._online)):(K(rs,"Using default OnlineComponentProvider"),await Mf(n,new xa))),n._onlineComponents}function C1(n){return g_(n).then(t=>t.syncEngine)}async function ku(n){const t=await g_(n),e=t.eventManager;return e.onListen=p1.bind(null,t.syncEngine),e.onUnlisten=_1.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=m1.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=y1.bind(null,t.syncEngine),e}function V1(n,t,e={}){const s=new bn;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const d=new m_({next:y=>{d.Nu(),o.enqueueAndForget(()=>r_(i,p));const A=y.docs.has(l);!A&&y.fromCache?c.reject(new et(F.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&y.fromCache&&u&&u.source==="server"?c.reject(new et(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(y)},error:y=>c.reject(y)}),p=new i_(co(l.path),d,{includeMetadataChanges:!0,qa:!0});return s_(i,p)}(await ku(n),n.asyncQueue,t,e,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_="firestore.googleapis.com",Ff=!0;class Lf{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new et(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=y_,this.ssl=Ff}else this.host=t.host,this.ssl=t.ssl??Ff;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Mg;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<cw)throw new et(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Sb("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=__(t.experimentalLongPollingOptions??{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new et(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new et(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new et(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Fc{constructor(t,e,s,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new et(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new et(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lf(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new mb;switch(s.type){case"firstParty":return new vb(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new et(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const s=Of.get(e);s&&(K("ComponentProvider","Removing Datastore"),Of.delete(e),s.terminate())}(this),Promise.resolve()}}function D1(n,t,e,s={}){var c;n=Tn(n,Fc);const r=Yu(t),i=n._getSettings(),o={...i,emulatorOptions:n._getEmulatorOptions()},l=`${t}:${e}`;r&&(HE(`https://${l}`),XE("Firestore",!0)),i.host!==y_&&i.host!==l&&Ns("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:r,emulatorOptions:s};if(!ca(u,o)&&(n._setSettings(u),s.mockUserToken)){let d,p;if(typeof s.mockUserToken=="string")d=s.mockUserToken,p=oe.MOCK_USER;else{d=GE(s.mockUserToken,(c=n._app)==null?void 0:c.options.projectId);const y=s.mockUserToken.sub||s.mockUserToken.user_id;if(!y)throw new et(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new oe(y)}n._authCredentials=new gb(new Tm(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(t,e,s){this.converter=e,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new al(this.firestore,t,this._query)}}class Zt{constructor(t,e,s){this.converter=e,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new no(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Zt(this.firestore,t,this._key)}toJSON(){return{type:Zt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,s){if(ao(e,Zt._jsonSchema))return new Zt(t,s||null,new Z(Nt.fromString(e.referencePath)))}}Zt._jsonSchemaVersion="firestore/documentReference/1.0",Zt._jsonSchema={type:Qt("string",Zt._jsonSchemaVersion),referencePath:Qt("string")};class no extends al{constructor(t,e,s){super(t,e,co(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Zt(this.firestore,null,new Z(t))}withConverter(t){return new no(this.firestore,t,this._path)}}function ql(n,t,...e){if(n=$i(n),arguments.length===1&&(t=ec.newId()),Ab("doc","path",t),n instanceof Fc){const s=Nt.fromString(t,...e);return Rd(s),new Zt(n,null,new Z(s))}{if(!(n instanceof Zt||n instanceof no))throw new et(F.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Nt.fromString(t,...e));return Rd(s),new Zt(n.firestore,n instanceof no?n.converter:null,new Z(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf="AsyncQueue";class Uf{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Qg(this,"async_queue_retry"),this._c=()=>{const s=Yo();s&&K(Bf,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=t;const e=Yo();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=Yo();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const e=new bn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Xu.push(t),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!is(t))throw t;K(Bf,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const e=this.ac.then(()=>(this.rc=!0,t().catch(s=>{throw this.nc=s,this.rc=!1,Te("INTERNAL UNHANDLED ERROR: ",$f(s)),s}).then(s=>(this.rc=!1,s))));return this.ac=e,e}enqueueAfterDelay(t,e,s){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const r=Dc.createAndSchedule(this,t,e,s,i=>this.hc(i));return this.tc.push(r),r}uc(){this.nc&&st(47125,{Pc:$f(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then(()=>{this.tc.sort((e,s)=>e.targetTimeMs-s.targetTimeMs);for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()})}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function $f(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jf(n){return function(e,s){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of s)if(i in r&&typeof r[i]=="function")return!0;return!1}(n,["next","error","complete"])}class Mr extends Fc{constructor(t,e,s,r){super(t,e,s,r),this.type="firestore",this._queue=new Uf,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Uf(t),this._firestoreClient=void 0,await t}}}function k1(n,t){const e=typeof n=="object"?n:nb(),s=typeof n=="string"?n:_a,r=JI(e,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=zE("firestore");i&&D1(r,...i)}return r}function Lc(n){if(n._terminated)throw new et(F.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||v_(n),n._firestoreClient}function v_(n){var s,r,i;const t=n._freezeSettings(),e=function(l,u,c,d){return new oT(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,__(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(n._databaseId,((s=n._app)==null?void 0:s.options.appId)||"",n._persistenceKey,t);n._componentsProvider||(r=t.localCache)!=null&&r._offlineComponentProvider&&((i=t.localCache)!=null&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new x1(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(n._componentsProvider))}function N1(n,t){Ns("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=n._freezeSettings();return M1(n,xa.provider,{build:s=>new R1(s,e.cacheSizeBytes,t==null?void 0:t.forceOwnership)}),Promise.resolve()}function M1(n,t,e){if((n=Tn(n,Mr))._firestoreClient||n._terminated)throw new et(F.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new et(F.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:t,_offline:e},v_(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ue(Jt.fromBase64String(t))}catch(e){throw new et(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ue(Jt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Ue._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(ao(t,Ue._jsonSchema))return Ue.fromBase64String(t.bytes)}}Ue._jsonSchemaVersion="firestore/bytes/1.0",Ue._jsonSchema={type:Qt("string",Ue._jsonSchemaVersion),bytes:Qt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new et(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new zt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new et(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new et(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return pt(this._lat,t._lat)||pt(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:un._jsonSchemaVersion}}static fromJSON(t){if(ao(t,un._jsonSchema))return new un(t.latitude,t.longitude)}}un._jsonSchemaVersion="firestore/geoPoint/1.0",un._jsonSchema={type:Qt("string",un._jsonSchemaVersion),latitude:Qt("number"),longitude:Qt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0}(this._values,t._values)}toJSON(){return{type:cn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(ao(t,cn._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new cn(t.vectorValues);throw new et(F.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}cn._jsonSchemaVersion="firestore/vectorValue/1.0",cn._jsonSchema={type:Qt("string",cn._jsonSchemaVersion),vectorValues:Qt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O1=/^__.*__$/;class F1{constructor(t,e,s){this.data=t,this.fieldMask=e,this.fieldTransforms=s}toMutation(t,e){return this.fieldMask!==null?new os(t,this.data,this.fieldMask,e,this.fieldTransforms):new Lr(t,this.data,e,this.fieldTransforms)}}function I_(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw st(40011,{Ac:n})}}class Uc{constructor(t,e,s,r,i,o){this.settings=t,this.databaseId=e,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new Uc({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){var r;const e=(r=this.path)==null?void 0:r.child(t),s=this.Vc({path:e,fc:!1});return s.gc(t),s}yc(t){var r;const e=(r=this.path)==null?void 0:r.child(t),s=this.Vc({path:e,fc:!1});return s.Rc(),s}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return Pa(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(I_(this.Ac)&&O1.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class L1{constructor(t,e,s){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=s||il(t)}Cc(t,e,s,r=!1){return new Uc({Ac:t,methodName:e,Dc:s,path:zt.emptyPath(),fc:!1,bc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function B1(n){const t=n._freezeSettings(),e=il(n._databaseId);return new L1(n._databaseId,!!t.ignoreUndefinedProperties,e)}function U1(n,t,e,s,r,i={}){const o=n.Cc(i.merge||i.mergeFields?2:0,t,e,r);A_("Data must be an object, but it was:",o,s);const l=T_(s,o);let u,c;if(i.merge)u=new qe(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const y=$1(t,p,e);if(!o.contains(y))throw new et(F.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);q1(d,y)||d.push(y)}u=new qe(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new F1(new Se(l),u,c)}function b_(n,t){if(w_(n=$i(n)))return A_("Unsupported field value:",t,n),T_(n,t);if(n instanceof E_)return function(s,r){if(!I_(r.Ac))throw r.Sc(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Sc(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return function(s,r){const i=[];let o=0;for(const l of s){let u=b_(l,r.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(n,t)}return function(s,r){if((s=$i(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return RT(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=Vt.fromDate(s);return{timestampValue:kr(r.serializer,i)}}if(s instanceof Vt){const i=new Vt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:kr(r.serializer,i)}}if(s instanceof un)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Ue)return{bytesValue:vg(r.serializer,s._byteString)};if(s instanceof Zt){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ec(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof cn)return function(o,l){return{mapValue:{fields:{[cc]:{stringValue:hc},[Rr]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Sc("VectorValues must only contain numeric values.");return pc(l.serializer,c)})}}}}}}(s,r);throw r.Sc(`Unsupported field value: ${nc(s)}`)}(n,t)}function T_(n,t){const e={};return Um(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):qs(n,(s,r)=>{const i=b_(r,t.mc(s));i!=null&&(e[s]=i)}),{mapValue:{fields:e}}}function w_(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Vt||n instanceof un||n instanceof Ue||n instanceof Zt||n instanceof E_||n instanceof cn)}function A_(n,t,e){if(!w_(e)||!Am(e)){const s=nc(e);throw s==="an object"?t.Sc(n+" a custom object"):t.Sc(n+" "+s)}}function $1(n,t,e){if((t=$i(t))instanceof Bc)return t._internalPath;if(typeof t=="string")return S_(n,t);throw Pa("Field path arguments must be of type string or ",n,!1,void 0,e)}const j1=new RegExp("[~\\*/\\[\\]]");function S_(n,t,e){if(t.search(j1)>=0)throw Pa(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Bc(...t.split("."))._internalPath}catch{throw Pa(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Pa(n,t,e,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${s}`),o&&(u+=` in document ${r}`),u+=")"),new et(F.INVALID_ARGUMENT,l+n+u)}function q1(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(t,e,s,r,i){this._firestore=t,this._userDataWriter=e,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Zt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new z1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(x_("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class z1 extends R_{data(){return super.data()}}function x_(n,t){return typeof t=="string"?S_(n,t):t instanceof Bc?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K1(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new et(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class H1{convertValue(t,e="none"){switch(es(t)){case 0:return null;case 1:return t.booleanValue;case 2:return jt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Pn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw st(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const s={};return qs(t,(r,i)=>{s[r]=this.convertValue(i,e)}),s}convertVectorValue(t){var s,r,i;const e=(i=(r=(s=t.fields)==null?void 0:s[Rr].arrayValue)==null?void 0:r.values)==null?void 0:i.map(o=>jt(o.doubleValue));return new cn(e)}convertGeoPoint(t){return new un(jt(t.latitude),jt(t.longitude))}convertArray(t,e){return(t.values||[]).map(s=>this.convertValue(s,e))}convertServerTimestamp(t,e){switch(e){case"previous":const s=Qa(t);return s==null?null:this.convertValue(s,e);case"estimate":return this.convertTimestamp(Xi(t));default:return null}}convertTimestamp(t){const e=xn(t);return new Vt(e.seconds,e.nanos)}convertDocumentKey(t,e){const s=Nt.fromString(t);rt(Pg(s),9688,{name:t});const r=new Ms(s.get(1),s.get(3)),i=new Z(s.popFirst(5));return r.isEqual(e)||Te(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G1(n,t,e){let s;return s=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,s}class mi{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ds extends R_{constructor(t,e,s,r,i,o){super(t,e,s,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Zo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const s=this._document.data.field(x_("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new et(F.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Ds._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Ds._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ds._jsonSchema={type:Qt("string",Ds._jsonSchemaVersion),bundleSource:Qt("string","DocumentSnapshot"),bundleName:Qt("string"),bundle:Qt("string")};class Zo extends Ds{data(t={}){return super.data(t)}}class mr{constructor(t,e,s,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new mi(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(s=>{t.call(e,new Zo(this._firestore,this._userDataWriter,s.key,s,new mi(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new et(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(l=>{const u=new Zo(r._firestore,r._userDataWriter,l.doc.key,l.doc,new mi(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Zo(r._firestore,r._userDataWriter,l.doc.key,l.doc,new mi(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:W1(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new et(F.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=mr._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=ec.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],s=[],r=[];return this.docs.forEach(i=>{i._document!==null&&(e.push(i._document),s.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function W1(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return st(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q1(n){n=Tn(n,Zt);const t=Tn(n.firestore,Mr);return V1(Lc(t),n._key).then(e=>C_(t,n,e))}mr._jsonSchemaVersion="firestore/querySnapshot/1.0",mr._jsonSchema={type:Qt("string",mr._jsonSchemaVersion),bundleSource:Qt("string","QuerySnapshot"),bundleName:Qt("string"),bundle:Qt("string")};class P_ extends H1{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ue(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Zt(this.firestore,null,e)}}function X1(n,t,e){n=Tn(n,Zt);const s=Tn(n.firestore,Mr),r=G1(n.converter,t,e);return Y1(s,[U1(B1(s),"setDoc",n._key,r,n.converter!==null,e).toMutation(n._key,Oe.none())])}function J1(n,...t){var u,c,d;n=$i(n);let e={includeMetadataChanges:!1,source:"default"},s=0;typeof t[s]!="object"||jf(t[s])||(e=t[s++]);const r={includeMetadataChanges:e.includeMetadataChanges,source:e.source};if(jf(t[s])){const p=t[s];t[s]=(u=p.next)==null?void 0:u.bind(p),t[s+1]=(c=p.error)==null?void 0:c.bind(p),t[s+2]=(d=p.complete)==null?void 0:d.bind(p)}let i,o,l;if(n instanceof Zt)o=Tn(n.firestore,Mr),l=co(n._key.path),i={next:p=>{t[s]&&t[s](C_(o,n,p))},error:t[s+1],complete:t[s+2]};else{const p=Tn(n,al);o=Tn(p.firestore,Mr),l=p._query;const y=new P_(o);i={next:A=>{t[s]&&t[s](new mr(o,y,p,A))},error:t[s+1],complete:t[s+2]},K1(n._query)}return function(y,A,k,R){const D=new m_(R),X=new i_(A,D,k);return y.asyncQueue.enqueueAndForget(async()=>s_(await ku(y),X)),()=>{D.Nu(),y.asyncQueue.enqueueAndForget(async()=>r_(await ku(y),X))}}(Lc(o),l,r,i)}function Y1(n,t){return function(s,r){const i=new bn;return s.asyncQueue.enqueueAndForget(async()=>v1(await C1(s),r,i)),i.promise}(Lc(n),t)}function C_(n,t,e){const s=e.docs.get(t._key),r=new P_(n);return new Ds(n,r,t._key,s,new mi(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(r){Fr=r})(eb),da(new ji("firestore",(s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),l=new Mr(new _b(s.getProvider("auth-internal")),new Eb(o,s.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new et(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ms(c.options.projectId,d)}(o,r),o);return i={useFetchStreams:e,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),fr(Td,wd,t),fr(Td,wd,"esm2020")})();const Z1={apiKey:"",authDomain:"",projectId:"",storageBucket:"",messagingSenderId:"",appId:""},t0=fm(Z1),ta=k1(t0);N1(ta).catch(n=>{n.code==="failed-precondition"?console.warn("多個標籤頁開啟，無法啟用持久化"):n.code==="unimplemented"&&console.warn("瀏覽器不支援持久化")});const qf="volatility_store_data",zl="user_data",V_=NE("volatility",()=>{var W,nt,ut,w,v;const n=()=>{const _=[];let b=new Date;for(;_.length<5;){const I=b.getDay();I!==0&&I!==6&&_.unshift(b.toISOString().split("T")[0]),b.setDate(b.getDate()-1)}return _},e=(()=>{try{const _=localStorage.getItem(qf);if(_)return JSON.parse(_)}catch(_){console.error("Failed to load data from localStorage:",_)}return null})(),s=Pt((e==null?void 0:e.dailyVolatilities)||n().map(_=>({date:_,highPoint:0,lowPoint:0}))),r=Pt((e==null?void 0:e.breakoutHigh)||0),i=Pt((e==null?void 0:e.breakoutLow)||0),o=Pt((e==null?void 0:e.moduleTemplate)||""),l=Pt({quantity:((W=e==null?void 0:e.sellLimit)==null?void 0:W.quantity)||0,stopLoss:((nt=e==null?void 0:e.sellLimit)==null?void 0:nt.stopLoss)||0,cost:((ut=e==null?void 0:e.sellLimit)==null?void 0:ut.cost)||0,price:((w=e==null?void 0:e.sellLimit)==null?void 0:w.price)||0,takeProfit:((v=e==null?void 0:e.sellLimit)==null?void 0:v.takeProfit)||0}),u=De(()=>s.value.length===0?0:s.value.reduce((b,I)=>b+(I.highPoint-I.lowPoint),0)/s.value.length),c=De(()=>u.value*.1),d=()=>{l.value.price=l.value.stopLoss-l.value.cost,p()},p=()=>{l.value.takeProfit=l.value.price-l.value.cost},y=(_,b)=>{s.value[_]&&(s.value[_].date=b)},A=(_,b,I)=>{s.value[_]&&(s.value[_].highPoint=b,s.value[_].lowPoint=I)},k=_=>{Object.assign(l.value,_)},R=()=>{const _={dailyVolatilities:s.value,breakoutHigh:r.value,breakoutLow:i.value,costRange:c.value,moduleTemplate:o.value,sellLimit:l.value};try{localStorage.setItem(qf,JSON.stringify(_))}catch(b){console.error("Failed to save data to localStorage:",b)}},D=async()=>{try{const _={dailyVolatilities:s.value,breakoutHigh:r.value,breakoutLow:i.value,costRange:c.value,moduleTemplate:o.value,sellLimit:l.value},b=ql(ta,"users",zl);await X1(b,{..._,updatedAt:Vt.now()},{merge:!0})}catch(_){console.error("Failed to save data to Firebase:",_)}},X=async()=>{try{const _=ql(ta,"users",zl),b=await Q1(_);if(b.exists()){const I=b.data();return s.value=I.dailyVolatilities||s.value,r.value=I.breakoutHigh||0,i.value=I.breakoutLow||0,o.value=I.moduleTemplate||"",I.sellLimit&&(l.value={...l.value,...I.sellLimit}),!0}}catch(_){console.error("Failed to load data from Firebase:",_)}return!1},G=()=>{try{const _=ql(ta,"users",zl);J1(_,b=>{if(b.exists()){const I=b.data();Q.value||(s.value=I.dailyVolatilities||s.value,r.value=I.breakoutHigh||0,i.value=I.breakoutLow||0,o.value=I.moduleTemplate||"",I.sellLimit&&(l.value={...l.value,...I.sellLimit}))}})}catch(_){console.error("Failed to start Firebase listener:",_)}},Q=Pt(!1);return yn([s,r,i,o,l],async()=>{R(),await D()},{deep:!0}),{dailyVolatilities:s,breakoutHigh:r,breakoutLow:i,moduleTemplate:o,sellLimit:l,averageVolatility:u,costRange:c,calculatePrice:d,calculateTakeProfit:p,updateDate:y,updateVolatility:A,updateSellLimit:k,saveToStorage:R,saveToFirebase:D,loadFromFirebase:X,startFirebaseListener:G,isLocalEditing:Q}}),e0={class:"card"},n0={class:"vol-item-date"},s0=["onUpdate:modelValue","onChange"],r0={class:"weekday-display"},i0={class:"vol-item"},o0=["onUpdate:modelValue","onInput"],a0={class:"vol-item"},l0=["onUpdate:modelValue","onInput"],u0={class:"data-row highlight"},c0={class:"data-item"},h0={class:"data-value highlight"},d0={class:"data-item"},f0={class:"data-value highlight"},p0={class:"card"},m0={class:"grid-3"},g0={class:"form-group"},_0={class:"form-group"},y0={class:"form-group"},v0={class:"form-group",style:{"margin-top":"12px"}},E0={style:{"margin-top":"16px","padding-top":"16px","border-top":"1px solid var(--color-border)"}},I0={class:"grid-3",style:{"margin-bottom":"12px"}},b0={class:"form-group"},T0={class:"form-group"},w0={class:"data-row highlight",style:{"margin-bottom":"12px"}},A0={class:"data-item"},S0={class:"data-value highlight"},R0={class:"data-row highlight",style:{"margin-bottom":"12px"}},x0={class:"data-item"},P0={class:"data-value highlight"},C0={class:"data-item"},V0={class:"data-value highlight"},D0={style:{"margin-top":"16px","padding-top":"16px","border-top":"1px solid var(--color-border)"}},k0={class:"grid-3",style:{"margin-bottom":"12px"}},N0={class:"form-group"},M0={class:"form-group"},O0={class:"data-row highlight",style:{"margin-bottom":"12px"}},F0={class:"data-item"},L0={class:"data-value highlight"},B0={class:"data-row highlight",style:{"margin-bottom":"12px"}},U0={class:"data-item"},$0={class:"data-value highlight"},j0={class:"data-item"},q0={class:"data-value highlight"},z0=io({__name:"Volatility",setup(n){const t=V_(),e=_r({quantity:0,stopLoss:0,cost:0,price:0,takeProfit:0,costDisplay:0}),s=_r({quantity:0,stopLoss:0,cost:0,price:0,takeProfit:0}),r=()=>{const k=t.breakoutHigh+1;return Math.round((k-Math.floor(k))*100)/100>0?Math.ceil(k*10)/10:k},i=()=>{const k=t.breakoutLow-.5;return Math.round((k-Math.floor(k))*100)/100>0?Math.ceil(k*10)/10:k},o=()=>{const k=r();e.price=k-e.cost,e.takeProfit=e.price-e.cost,t.updateSellLimit({quantity:e.quantity,stopLoss:k,cost:e.cost,price:e.price,takeProfit:e.takeProfit})},l=()=>{const k=i();s.stopLoss=k,s.price=k+s.cost,s.takeProfit=s.price+s.cost},u=De(()=>t.breakoutHigh);yn(u,()=>{o()});const c=De(()=>t.breakoutLow);yn(c,()=>{l()}),yn(()=>e.cost,()=>{o()}),yn(()=>s.cost,()=>{l()});const d=()=>{t.updateSellLimit({quantity:e.quantity}),o()},p=()=>{l()},y=k=>{if(!k)return"";const D=new Date(k).getDay();return["星期日","星期一","星期二","星期三","星期四","星期五","星期六"][D]},A=()=>t.dailyVolatilities;return(k,R)=>(lt(),dt("div",null,[m("div",e0,[R[10]||(R[10]=zv('<div class="card-title">五日平均波幅</div><div class="volatility-row-header"><div class="vol-header-date">日期</div><div class="vol-header-item">最高點</div><div class="vol-header-item">最低點</div></div>',2)),(lt(!0),dt(Ie,null,vr(A(),(D,X)=>(lt(),dt("div",{key:X,class:"volatility-row"},[m("div",n0,[_t(m("input",{"onUpdate:modelValue":G=>D.date=G,type:"date",class:"form-input date-input",onChange:G=>ve(t).updateDate(X,D.date)},null,40,s0),[[wt,D.date]]),m("div",r0,vt(y(D.date)),1)]),m("div",i0,[_t(m("input",{"onUpdate:modelValue":G=>D.highPoint=G,type:"number",step:"0.01",class:"form-input",onInput:G=>ve(t).updateVolatility(ve(t).dailyVolatilities.indexOf(D),D.highPoint,D.lowPoint),placeholder:"0"},null,40,o0),[[wt,D.highPoint,void 0,{number:!0}]])]),m("div",a0,[_t(m("input",{"onUpdate:modelValue":G=>D.lowPoint=G,type:"number",step:"0.01",class:"form-input",onInput:G=>ve(t).updateVolatility(ve(t).dailyVolatilities.indexOf(D),D.highPoint,D.lowPoint),placeholder:"0"},null,40,l0),[[wt,D.lowPoint,void 0,{number:!0}]])])]))),128)),m("div",u0,[m("div",c0,[R[8]||(R[8]=m("span",{class:"data-label"},"五日平均波幅",-1)),m("span",h0,vt(ve(t).averageVolatility.toFixed(2)),1)]),m("div",d0,[R[9]||(R[9]=m("span",{class:"data-label"},"成本&領域範圍 (10%)",-1)),m("span",f0,vt(ve(t).costRange.toFixed(2)),1)])])]),m("div",p0,[R[29]||(R[29]=m("div",{class:"card-title"},"掛單範圍",-1)),m("div",m0,[m("div",g0,[R[11]||(R[11]=m("label",null,"突破口高點(or 美盤回調高點)",-1)),_t(m("input",{"onUpdate:modelValue":R[0]||(R[0]=D=>ve(t).breakoutHigh=D),type:"number",step:"0.01",class:"form-input",placeholder:"輸入價格"},null,512),[[wt,ve(t).breakoutHigh,void 0,{number:!0}]])]),m("div",_0,[R[12]||(R[12]=m("label",null,"突破口低點(or 美盤回調低點)",-1)),_t(m("input",{"onUpdate:modelValue":R[1]||(R[1]=D=>ve(t).breakoutLow=D),type:"number",step:"0.01",class:"form-input",placeholder:"輸入價格"},null,512),[[wt,ve(t).breakoutLow,void 0,{number:!0}]])]),m("div",y0,[R[13]||(R[13]=m("label",null,"成本&領域範圍",-1)),_t(m("input",{"onUpdate:modelValue":R[2]||(R[2]=D=>e.costDisplay=D),type:"number",step:"0.01",class:"form-input",placeholder:"自動計算或手動輸入"},null,512),[[wt,e.costDisplay,void 0,{number:!0}]])])]),m("div",v0,[R[14]||(R[14]=m("label",null,"套用模組",-1)),_t(m("input",{"onUpdate:modelValue":R[3]||(R[3]=D=>ve(t).moduleTemplate=D),type:"text",class:"form-input",placeholder:"輸入模組名稱"},null,512),[[wt,ve(t).moduleTemplate]])]),m("div",E0,[R[20]||(R[20]=m("div",{class:"data-label",style:{"margin-bottom":"12px","text-transform":"uppercase","letter-spacing":"1px"}}," Sell Limit 配置 ",-1)),m("div",I0,[m("div",b0,[R[15]||(R[15]=m("label",null,"手數",-1)),_t(m("input",{"onUpdate:modelValue":R[4]||(R[4]=D=>e.quantity=D),type:"number",step:"0.01",class:"form-input",placeholder:"0.01",onInput:d},null,544),[[wt,e.quantity,void 0,{number:!0}]])]),m("div",T0,[R[16]||(R[16]=m("label",null,"成本 (USD)",-1)),_t(m("input",{"onUpdate:modelValue":R[5]||(R[5]=D=>e.cost=D),type:"number",step:"0.01",class:"form-input",placeholder:"例如 5",onInput:o},null,544),[[wt,e.cost,void 0,{number:!0}]])])]),m("div",w0,[m("div",A0,[R[17]||(R[17]=m("span",{class:"data-label"},"止損",-1)),m("span",S0,vt(r().toFixed(2)),1)])]),m("div",R0,[m("div",x0,[R[18]||(R[18]=m("span",{class:"data-label"},"價格",-1)),m("span",P0,vt(e.price.toFixed(2)),1)]),m("div",C0,[R[19]||(R[19]=m("span",{class:"data-label"},"止盈",-1)),m("span",V0,vt(e.takeProfit.toFixed(2)),1)])]),R[21]||(R[21]=m("div",{style:{"font-size":"12px",color:"var(--color-text-tertiary)",padding:"8px","background-color":"rgba(212, 175, 55, 0.05)","border-radius":"6px"}},[m("strong",null,"計算說明："),m("br"),As(" • 價格 = 止損 - 成本"),m("br"),As(" • 止盈 = 價格 - 成本 ")],-1))]),m("div",D0,[R[27]||(R[27]=m("div",{class:"data-label",style:{"margin-bottom":"12px","text-transform":"uppercase","letter-spacing":"1px"}}," Buy Limit 配置 ",-1)),m("div",k0,[m("div",N0,[R[22]||(R[22]=m("label",null,"手數",-1)),_t(m("input",{"onUpdate:modelValue":R[6]||(R[6]=D=>s.quantity=D),type:"number",step:"0.01",class:"form-input",placeholder:"0.01",onInput:p},null,544),[[wt,s.quantity,void 0,{number:!0}]])]),m("div",M0,[R[23]||(R[23]=m("label",null,"成本 (USD)",-1)),_t(m("input",{"onUpdate:modelValue":R[7]||(R[7]=D=>s.cost=D),type:"number",step:"0.01",class:"form-input",placeholder:"例如 5",onInput:l},null,544),[[wt,s.cost,void 0,{number:!0}]])])]),m("div",O0,[m("div",F0,[R[24]||(R[24]=m("span",{class:"data-label"},"止損",-1)),m("span",L0,vt(i().toFixed(2)),1)])]),m("div",B0,[m("div",U0,[R[25]||(R[25]=m("span",{class:"data-label"},"價格",-1)),m("span",$0,vt(s.price.toFixed(2)),1)]),m("div",j0,[R[26]||(R[26]=m("span",{class:"data-label"},"止盈",-1)),m("span",q0,vt(s.takeProfit.toFixed(2)),1)])]),R[28]||(R[28]=m("div",{style:{"font-size":"12px",color:"var(--color-text-tertiary)",padding:"8px","background-color":"rgba(212, 175, 55, 0.05)","border-radius":"6px"}},[m("strong",null,"計算說明："),m("br"),As(" • 價格 = 止損 + 成本"),m("br"),As(" • 止盈 = 價格 + 成本 ")],-1))])])]))}}),K0={class:"card"},H0={class:"card-header"},G0={class:"button-group"},W0={width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",style:{color:"#0f1419"}},Q0={viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",style:{display:"inline-block"}},X0={key:0,style:{"text-align":"center",padding:"32px",color:"var(--color-text-secondary)"}},J0={key:1,class:"strategy-buttons"},Y0=["onClick"],Z0=["checked","onChange"],tA={style:{"font-size":"12px"}},eA={key:2,style:{display:"flex",gap:"8px","margin-bottom":"16px"}},nA={key:3,class:"strategy-details"},sA={class:"data-row",style:{"margin-bottom":"8px"}},rA={class:"data-item"},iA={class:"data-value"},oA={class:"data-row",style:{"margin-bottom":"8px"}},aA={class:"data-item"},lA={class:"data-value"},uA={class:"data-item"},cA={class:"data-value"},hA={class:"data-row",style:{"margin-bottom":"8px"}},dA={class:"data-item"},fA={class:"data-value"},pA={class:"data-item"},mA={class:"data-value"},gA={class:"data-row",style:{"margin-bottom":"8px"}},_A={class:"data-item"},yA={class:"data-value"},vA={class:"data-row"},EA={class:"data-item",style:{"flex-direction":"column","align-items":"flex-start"}},IA={class:"data-value",style:{"white-space":"pre-wrap","margin-top":"8px"}},bA={class:"modal-body"},TA={class:"form-group",style:{"margin-bottom":"12px"}},wA={style:{"font-size":"12px",color:"var(--color-text-secondary)","margin-top":"4px"}},AA={class:"grid-2",style:{"margin-bottom":"12px"}},SA={class:"form-group"},RA={class:"form-group"},xA={class:"grid-2",style:{"margin-bottom":"12px"}},PA={class:"form-group"},CA={style:{display:"flex","justify-content":"space-between","align-items":"center","margin-bottom":"8px"}},VA={class:"radio-group-inline"},DA={class:"radio-label"},kA={class:"radio-label"},NA={class:"form-group"},MA={class:"form-group",style:{"margin-bottom":"12px"}},OA={class:"modal-body"},FA={class:"form-group",style:{"margin-bottom":"12px"}},LA={style:{"font-size":"12px",color:"var(--color-text-secondary)","margin-top":"4px"}},BA={class:"grid-2",style:{"margin-bottom":"12px"}},UA={class:"form-group"},$A={class:"form-group"},jA={class:"grid-2",style:{"margin-bottom":"12px"}},qA={class:"form-group"},zA={style:{display:"flex","justify-content":"space-between","align-items":"center","margin-bottom":"8px"}},KA={class:"radio-group-inline"},HA={class:"radio-label"},GA={class:"radio-label"},WA={class:"form-group"},QA={class:"form-group",style:{"margin-bottom":"12px"}},XA=io({__name:"Plan",setup(n){const t=Pt(b()),e=Pt(null),s=Pt(!1),r=Pt(!1),i=Pt(!1),o=Pt([]),l=Pt(!1),u=Pt([]),c=Pt({date:new Date().toISOString().split("T")[0],breakoutHigh:0,breakoutLow:0,usRetrace:"高",points:0,module:"",description:""}),d=Pt({date:"",breakoutHigh:0,breakoutLow:0,usRetrace:"高",points:0,module:"",description:""});function p(it){const O=new Date(it+"T00:00:00");return["日","一","二","三","四","五","六"][O.getDay()]}function y(){c.value={date:new Date().toISOString().split("T")[0],breakoutHigh:0,breakoutLow:0,usRetrace:"高",points:0,module:"",description:""},s.value=!0}function A(){s.value=!1}function k(){if(!c.value.date){alert("請選擇日期");return}const it={...c.value,createdAt:new Date().toISOString()};t.value.push(it),_(),A(),e.value=t.value.length-1}function R(){i.value=!i.value,o.value=[]}function D(){i.value=!1,o.value=[]}function X(it){o.value.includes(it)?o.value=o.value.filter(O=>O!==it):o.value.push(it)}function G(){o.value.length!==0&&confirm(`確定要刪除選中的 ${o.value.length} 個策略嗎？`)&&(o.value.sort((O,L)=>L-O).forEach(O=>{t.value.splice(O,1)}),_(),i.value=!1,o.value=[],e.value=null)}function Q(){l.value=!l.value,u.value=[]}function W(it){u.value.includes(it)?u.value=u.value.filter(O=>O!==it):u.value.push(it)}function nt(){l.value=!1,u.value=[]}function ut(it){i.value?X(it):l.value||(e.value=it)}function w(){if(u.value.length===0)return;const it=u.value.map(Ot=>t.value[Ot]),O=v(it),L=new Blob([O],{type:"text/html;charset=utf-8"}),x=document.createElement("a"),H=URL.createObjectURL(L);x.setAttribute("href",H),x.setAttribute("download",`XAUUSD_策略_${new Date().toISOString().split("T")[0]}.html`),x.style.visibility="hidden",document.body.appendChild(x),x.click(),document.body.removeChild(x),l.value=!1,u.value=[]}function v(it){const O=`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif;
      background-color: #0f1419;
      color: #e8eef7;
      padding: 20px;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
    
    h1 {
      text-align: center;
      margin-bottom: 30px;
      color: #d4af37;
      font-size: 32px;
    }
    
    .strategy-card {
      background-color: #1a1f26;
      border: 1px solid #2d3748;
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 20px;
      page-break-inside: avoid;
    }
    
    .strategy-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid #d4af37;
      padding-bottom: 12px;
      margin-bottom: 16px;
    }
    
    .strategy-date {
      font-size: 18px;
      font-weight: bold;
      color: #d4af37;
    }
    
    .strategy-weekday {
      color: #a0a9b8;
      font-size: 14px;
    }
    
    .strategy-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin-bottom: 16px;
    }
    
    .strategy-field {
      display: flex;
      flex-direction: column;
    }
    
    .strategy-label {
      font-size: 12px;
      color: #a0a9b8;
      margin-bottom: 4px;
      text-transform: uppercase;
    }
    
    .strategy-value {
      font-size: 16px;
      font-weight: 600;
      color: #e8eef7;
    }
    
    .strategy-description {
      grid-column: 1 / -1;
      background-color: #252d36;
      padding: 12px;
      border-radius: 8px;
      border-left: 3px solid #d4af37;
    }
    
    .strategy-description-label {
      font-size: 12px;
      color: #a0a9b8;
      margin-bottom: 8px;
      text-transform: uppercase;
    }
    
    .strategy-description-text {
      white-space: pre-wrap;
      line-height: 1.6;
      color: #e8eef7;
    }
    
    .export-date {
      text-align: center;
      margin-top: 40px;
      padding-top: 20px;
      border-top: 1px solid #2d3748;
      color: #a0a9b8;
      font-size: 12px;
    }
    
    @media print {
      body {
        background-color: #fff;
        color: #000;
      }
      
      .strategy-card {
        background-color: #fff;
        border: 1px solid #ccc;
      }
      
      .strategy-header {
        border-bottom: 2px solid #000;
      }
      
      .strategy-date {
        color: #000;
      }
      
      h1 {
        color: #000;
      }
    }
  `;let L="";return it.forEach(x=>{L+=`
      <div class="strategy-card">
        <div class="strategy-header">
          <div>
            <div class="strategy-date">${x.date}</div>
            <div class="strategy-weekday">星期${p(x.date)}</div>
          </div>
        </div>
        
        <div class="strategy-content">
          <div class="strategy-field">
            <span class="strategy-label">突破口高點</span>
            <span class="strategy-value">${x.breakoutHigh.toFixed(2)}</span>
          </div>
          <div class="strategy-field">
            <span class="strategy-label">突破口低點</span>
            <span class="strategy-value">${x.breakoutLow.toFixed(2)}</span>
          </div>
          <div class="strategy-field">
            <span class="strategy-label">美盤回調點</span>
            <span class="strategy-value">${x.points.toFixed(2)}</span>
          </div>
          <div class="strategy-field">
            <span class="strategy-label">美盤回調</span>
            <span class="strategy-value">${x.usRetrace}</span>
          </div>
          <div class="strategy-field">
            <span class="strategy-label">模組</span>
            <span class="strategy-value">${x.module||"—"}</span>
          </div>
          <div class="strategy-field"></div>
          
          <div class="strategy-description">
            <div class="strategy-description-label">策略說明</div>
            <div class="strategy-description-text">${x.description||"無"}</div>
          </div>
        </div>
      </div>
    `}),`
    <!DOCTYPE html>
    <html lang="zh-TW">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>XAUUSD 黃金策略分析</title>
      <style>${O}</style>
    </head>
    <body>
      <div class="container">
        <h1>🏆 XAUUSD 黃金策略分析</h1>
        ${L}
        <div class="export-date">生成時間：${new Date().toLocaleString("zh-TW")}</div>
      </div>
    </body>
    </html>
  `}function _(){localStorage.setItem("xauusd_strategies",JSON.stringify(t.value))}function b(){const it=localStorage.getItem("xauusd_strategies");return it?JSON.parse(it):[]}function I(){if(e.value===null)return;const it=t.value[e.value];d.value={date:it.date,breakoutHigh:it.breakoutHigh,breakoutLow:it.breakoutLow,usRetrace:it.usRetrace,points:it.points,module:it.module,description:it.description},r.value=!0}function P(){r.value=!1}function E(){if(e.value!==null){if(!d.value.date){alert("請選擇日期");return}t.value[e.value]={...d.value,createdAt:t.value[e.value].createdAt},_(),P()}}return(it,O)=>(lt(),dt("div",null,[m("div",K0,[m("div",H0,[O[21]||(O[21]=m("div",{class:"card-title"},"黃金策略分析",-1)),m("div",G0,[i.value?xt("",!0):(lt(),dt("button",{key:0,class:"btn-floating btn-delete-floating",onClick:R,title:"刪除策略"},[(lt(),dt("svg",W0,[...O[19]||(O[19]=[m("polyline",{points:"3 6 5 6 21 6"},null,-1),m("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"},null,-1),m("line",{x1:"10",y1:"11",x2:"10",y2:"17"},null,-1),m("line",{x1:"14",y1:"11",x2:"14",y2:"17"},null,-1)])]))])),i.value&&o.value.length>0?(lt(),dt("button",{key:1,class:"btn-floating btn-confirm-delete",onClick:G,title:"確認刪除"}," ✓ ")):xt("",!0),i.value?(lt(),dt("button",{key:2,class:"btn-floating btn-cancel-delete",onClick:D,title:"取消刪除"}," ✕ ")):xt("",!0),e.value!==null&&!i.value?(lt(),dt("button",{key:3,class:"btn-floating btn-edit-floating",onClick:I,title:"編輯策略"}," ✎ ")):xt("",!0),i.value?xt("",!0):(lt(),dt("button",{key:4,class:"btn-floating btn-export-floating",onClick:Q,title:"輸出策略"},[(lt(),dt("svg",Q0,[...O[20]||(O[20]=[m("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"},null,-1),m("polyline",{points:"7 10 12 15 17 10"},null,-1),m("line",{x1:"12",y1:"15",x2:"12",y2:"3"},null,-1)])]))])),i.value?xt("",!0):(lt(),dt("button",{key:5,class:"btn-floating",onClick:y},"+"))])]),t.value.length===0?(lt(),dt("div",X0,[...O[22]||(O[22]=[m("p",{style:{"font-size":"14px"}},'還沒有策略，點擊右上角"+"新增',-1)])])):xt("",!0),t.value.length>0?(lt(),dt("div",J0,[(lt(!0),dt(Ie,null,vr(t.value,(L,x)=>(lt(),dt("button",{key:x,class:Be(["strategy-button",{active:e.value===x&&!i.value&&!l.value,"delete-selected":i.value&&o.value.includes(x),"export-selected":l.value&&u.value.includes(x)}]),onClick:H=>ut(x)},[l.value?(lt(),dt("input",{key:0,type:"checkbox",checked:u.value.includes(x),onChange:H=>W(x),onClick:O[0]||(O[0]=wi(()=>{},["stop"])),style:{"margin-right":"6px",width:"16px",height:"16px",cursor:"pointer"}},null,40,Z0)):xt("",!0),As(" "+vt(L.date),1),O[23]||(O[23]=m("br",null,null,-1)),m("span",tA,vt(p(L.date)),1)],10,Y0))),128))])):xt("",!0),l.value&&u.value.length>0?(lt(),dt("div",eA,[m("button",{class:"btn btn-primary",onClick:w},"確認輸出 ("+vt(u.value.length)+")",1),m("button",{class:"btn btn-secondary",onClick:nt},"取消")])):xt("",!0),t.value.length>0&&e.value!==null?(lt(),dt("div",nA,[m("div",sA,[m("div",rA,[O[24]||(O[24]=m("span",{class:"data-label"},"日期",-1)),m("span",iA,vt(t.value[e.value].date)+" ("+vt(p(t.value[e.value].date))+")",1)])]),m("div",oA,[m("div",aA,[O[25]||(O[25]=m("span",{class:"data-label"},"突破口高點",-1)),m("span",lA,vt(t.value[e.value].breakoutHigh),1)]),m("div",uA,[O[26]||(O[26]=m("span",{class:"data-label"},"突破口低點",-1)),m("span",cA,vt(t.value[e.value].breakoutLow),1)])]),m("div",hA,[m("div",dA,[O[27]||(O[27]=m("span",{class:"data-label"},"美盤回調",-1)),m("span",fA,vt(t.value[e.value].usRetrace),1)]),m("div",pA,[O[28]||(O[28]=m("span",{class:"data-label"},"點",-1)),m("span",mA,vt(t.value[e.value].points),1)])]),m("div",gA,[m("div",_A,[O[29]||(O[29]=m("span",{class:"data-label"},"模組",-1)),m("span",yA,vt(t.value[e.value].module),1)])]),m("div",vA,[m("div",EA,[O[30]||(O[30]=m("span",{class:"data-label"},"策略",-1)),m("span",IA,vt(t.value[e.value].description),1)])])])):xt("",!0)]),s.value?(lt(),dt("div",{key:0,class:"modal-overlay",onClick:A},[m("div",{class:"modal",onClick:O[9]||(O[9]=wi(()=>{},["stop"]))},[m("div",{class:"modal-header"},[O[31]||(O[31]=m("h2",null,"新增策略",-1)),m("button",{class:"modal-close",onClick:A},"×")]),m("div",bA,[m("div",TA,[O[32]||(O[32]=m("label",null,"日期",-1)),_t(m("input",{"onUpdate:modelValue":O[1]||(O[1]=L=>c.value.date=L),type:"date",class:"form-input"},null,512),[[wt,c.value.date]]),m("div",wA,vt(c.value.date?`星期${p(c.value.date)}`:"請選擇日期"),1)]),m("div",AA,[m("div",SA,[O[33]||(O[33]=m("label",null,"突破口高點",-1)),_t(m("input",{"onUpdate:modelValue":O[2]||(O[2]=L=>c.value.breakoutHigh=L),type:"number",step:"0.01",class:"form-input",placeholder:"例如：2700"},null,512),[[wt,c.value.breakoutHigh,void 0,{number:!0}]])]),m("div",RA,[O[34]||(O[34]=m("label",null,"突破口低點",-1)),_t(m("input",{"onUpdate:modelValue":O[3]||(O[3]=L=>c.value.breakoutLow=L),type:"number",step:"0.01",class:"form-input",placeholder:"例如：2650"},null,512),[[wt,c.value.breakoutLow,void 0,{number:!0}]])])]),m("div",xA,[m("div",PA,[m("div",CA,[O[37]||(O[37]=m("label",null,"美盤回調點",-1)),m("div",VA,[m("label",DA,[_t(m("input",{"onUpdate:modelValue":O[4]||(O[4]=L=>c.value.usRetrace=L),type:"radio",value:"高"},null,512),[[Co,c.value.usRetrace]]),O[35]||(O[35]=m("span",null,"高",-1))]),m("label",kA,[_t(m("input",{"onUpdate:modelValue":O[5]||(O[5]=L=>c.value.usRetrace=L),type:"radio",value:"低"},null,512),[[Co,c.value.usRetrace]]),O[36]||(O[36]=m("span",null,"低",-1))])])]),_t(m("input",{"onUpdate:modelValue":O[6]||(O[6]=L=>c.value.points=L),type:"number",step:"0.01",class:"form-input",placeholder:"例如：50"},null,512),[[wt,c.value.points,void 0,{number:!0}]])]),m("div",NA,[O[38]||(O[38]=m("label",null,"模組",-1)),_t(m("input",{"onUpdate:modelValue":O[7]||(O[7]=L=>c.value.module=L),type:"text",class:"form-input",placeholder:"例如：模組A"},null,512),[[wt,c.value.module]])])]),m("div",MA,[O[39]||(O[39]=m("label",null,"策略",-1)),_t(m("textarea",{"onUpdate:modelValue":O[8]||(O[8]=L=>c.value.description=L),class:"form-input",rows:"5",placeholder:"詳細說明策略內容...",style:{resize:"vertical"}},null,512),[[wt,c.value.description]])])]),m("div",{class:"modal-footer"},[m("button",{class:"btn btn-secondary",onClick:A},"取消"),m("button",{class:"btn btn-primary",onClick:k},"新增策略")])])])):xt("",!0),r.value?(lt(),dt("div",{key:1,class:"modal-overlay",onClick:P},[m("div",{class:"modal",onClick:O[18]||(O[18]=wi(()=>{},["stop"]))},[m("div",{class:"modal-header"},[O[40]||(O[40]=m("h2",null,"編輯策略",-1)),m("button",{class:"modal-close",onClick:P},"×")]),m("div",OA,[m("div",FA,[O[41]||(O[41]=m("label",null,"日期",-1)),_t(m("input",{"onUpdate:modelValue":O[10]||(O[10]=L=>d.value.date=L),type:"date",class:"form-input"},null,512),[[wt,d.value.date]]),m("div",LA,vt(d.value.date?`星期${p(d.value.date)}`:"請選擇日期"),1)]),m("div",BA,[m("div",UA,[O[42]||(O[42]=m("label",null,"突破口高點",-1)),_t(m("input",{"onUpdate:modelValue":O[11]||(O[11]=L=>d.value.breakoutHigh=L),type:"number",step:"0.01",class:"form-input",placeholder:"例如：2700"},null,512),[[wt,d.value.breakoutHigh,void 0,{number:!0}]])]),m("div",$A,[O[43]||(O[43]=m("label",null,"突破口低點",-1)),_t(m("input",{"onUpdate:modelValue":O[12]||(O[12]=L=>d.value.breakoutLow=L),type:"number",step:"0.01",class:"form-input",placeholder:"例如：2650"},null,512),[[wt,d.value.breakoutLow,void 0,{number:!0}]])])]),m("div",jA,[m("div",qA,[m("div",zA,[O[46]||(O[46]=m("label",null,"美盤回調點",-1)),m("div",KA,[m("label",HA,[_t(m("input",{"onUpdate:modelValue":O[13]||(O[13]=L=>d.value.usRetrace=L),type:"radio",value:"高"},null,512),[[Co,d.value.usRetrace]]),O[44]||(O[44]=m("span",null,"高",-1))]),m("label",GA,[_t(m("input",{"onUpdate:modelValue":O[14]||(O[14]=L=>d.value.usRetrace=L),type:"radio",value:"低"},null,512),[[Co,d.value.usRetrace]]),O[45]||(O[45]=m("span",null,"低",-1))])])]),_t(m("input",{"onUpdate:modelValue":O[15]||(O[15]=L=>d.value.points=L),type:"number",step:"0.01",class:"form-input",placeholder:"例如：50"},null,512),[[wt,d.value.points,void 0,{number:!0}]])]),m("div",WA,[O[47]||(O[47]=m("label",null,"模組",-1)),_t(m("input",{"onUpdate:modelValue":O[16]||(O[16]=L=>d.value.module=L),type:"text",class:"form-input",placeholder:"例如：模組A"},null,512),[[wt,d.value.module]])])]),m("div",QA,[O[48]||(O[48]=m("label",null,"策略",-1)),_t(m("textarea",{"onUpdate:modelValue":O[17]||(O[17]=L=>d.value.description=L),class:"form-input",rows:"5",placeholder:"詳細說明策略內容...",style:{resize:"vertical"}},null,512),[[wt,d.value.description]])])]),m("div",{class:"modal-footer"},[m("button",{class:"btn btn-secondary",onClick:P},"取消"),m("button",{class:"btn btn-primary",onClick:E},"保存修改")])])])):xt("",!0)]))}}),$c=(n,t)=>{const e=n.__vccOpts||n;for(const[s,r]of t)e[s]=r;return e},JA=$c(XA,[["__scopeId","data-v-556361c5"]]),YA={class:"card"},ZA={key:0,style:{"text-align":"center",padding:"32px",color:"var(--color-text-secondary)"}},tS={style:{display:"flex","justify-content":"space-between","align-items":"start"}},eS={style:{flex:"1"}},nS={class:"data-label"},sS={style:{"font-size":"14px","margin-top":"6px",color:"var(--color-text-primary)"}},rS=["onClick"],iS={style:{"margin-top":"8px"}},oS={class:"card"},aS={class:"form-group",style:{"margin-bottom":"12px"}},lS={class:"form-group",style:{"margin-bottom":"12px"}},uS=io({__name:"Rules",setup(n){const t=Pt(o()),e=Pt({content:"",priority:"高"});function s(){if(!e.value.content){alert("請填寫守則內容");return}const l={content:e.value.content,priority:e.value.priority,createdAt:new Date().toISOString()};t.value.push(l),i(),e.value={content:"",priority:"高"}}function r(l){t.value.splice(l,1),i()}function i(){localStorage.setItem("xauusd_rules",JSON.stringify(t.value))}function o(){const l=localStorage.getItem("xauusd_rules");return l?JSON.parse(l):[]}return(l,u)=>(lt(),dt("div",null,[m("div",YA,[u[4]||(u[4]=m("div",{class:"card-title"},"交易守則",-1)),t.value.length===0?(lt(),dt("div",ZA,[...u[2]||(u[2]=[m("p",{style:{"font-size":"14px"}},"還沒有守則，點擊下方按鈕新增",-1)])])):xt("",!0),(lt(!0),dt(Ie,null,vr(t.value,(c,d)=>(lt(),dt("div",{key:d,class:"data-row",style:{"flex-direction":"column"}},[m("div",tS,[m("div",eS,[m("span",nS,"規則 #"+vt(d+1),1),m("p",sS,vt(c.content),1)]),m("button",{class:"btn btn-danger",onClick:p=>r(d),style:{"margin-left":"12px"}},"刪除",8,rS)]),m("div",iS,[u[3]||(u[3]=m("span",{class:"data-label"},"優先級",-1)),m("span",{class:Be(["data-value",c.priority==="高"?"negative":c.priority==="中"?"highlight":"positive"])},vt(c.priority),3)])]))),128))]),m("div",oS,[u[8]||(u[8]=m("div",{class:"card-title"},"新增守則",-1)),m("div",aS,[u[5]||(u[5]=m("label",null,"守則內容",-1)),_t(m("textarea",{"onUpdate:modelValue":u[0]||(u[0]=c=>e.value.content=c),class:"form-input",rows:"3",placeholder:"例如：不能超過資本金的2%風險，必須等待確認信號...",style:{resize:"vertical"}},null,512),[[wt,e.value.content]])]),m("div",lS,[u[7]||(u[7]=m("label",null,"優先級",-1)),_t(m("select",{"onUpdate:modelValue":u[1]||(u[1]=c=>e.value.priority=c),class:"form-select"},[...u[6]||(u[6]=[m("option",{value:"高"},"高 (必須遵守)",-1),m("option",{value:"中"},"中 (重要)",-1),m("option",{value:"低"},"低 (參考)",-1)])],512),[[eu,e.value.priority]])]),m("button",{class:"btn btn-primary",onClick:s},"新增守則")])]))}}),cS=$c(uS,[["__scopeId","data-v-62aaea1e"]]),hS={class:"card"},dS={class:"card-header"},fS={class:"button-group"},pS={width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",style:{color:"#0f1419"}},mS={viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",style:{display:"inline-block"}},gS={key:0,style:{"text-align":"center",padding:"32px",color:"var(--color-text-secondary)"}},_S={key:1,class:"record-buttons"},yS=["onClick"],vS={style:{"font-size":"11px"}},ES={key:2,class:"record-details"},IS={class:"data-row",style:{"margin-bottom":"8px"}},bS={class:"data-item"},TS={class:"data-value"},wS={class:"data-row",style:{"margin-bottom":"8px"}},AS={class:"data-item"},SS={class:"data-item"},RS={class:"data-value highlight"},xS={class:"data-row",style:{"margin-bottom":"8px"}},PS={class:"data-item"},CS={class:"data-value"},VS={class:"data-item"},DS={key:0,class:"data-row"},kS={class:"data-item",style:{"flex-direction":"column","align-items":"flex-start"}},NS={class:"data-value",style:{"white-space":"pre-wrap","margin-top":"8px"}},MS={class:"modal-body"},OS={class:"grid-2",style:{"margin-bottom":"12px"}},FS={class:"form-group"},LS={class:"form-group"},BS={class:"grid-2",style:{"margin-bottom":"12px"}},US={class:"form-group"},$S={class:"form-group"},jS={class:"form-group",style:{"margin-bottom":"12px"}},qS={class:"form-group",style:{"margin-bottom":"12px"}},zS={class:"modal-body"},KS={class:"grid-2",style:{"margin-bottom":"12px"}},HS={class:"form-group"},GS={class:"form-group"},WS={class:"grid-2",style:{"margin-bottom":"12px"}},QS={class:"form-group"},XS={class:"form-group"},JS={class:"form-group",style:{"margin-bottom":"12px"}},YS={class:"form-group",style:{"margin-bottom":"12px"}},ZS={key:2,class:"card"},tR={class:"month-buttons",style:{"margin-bottom":"16px"}},eR=["onClick"],nR={key:0,style:{display:"flex",gap:"8px","margin-bottom":"16px","align-items":"center"}},sR={style:{color:"var(--color-text-secondary)","font-size":"14px"}},rR={class:"grid-3"},iR={class:"data-row"},oR={class:"data-item"},aR={class:"data-value highlight"},lR={class:"data-row"},uR={class:"data-item"},cR={class:"data-row"},hR={class:"data-item"},dR={class:"data-value highlight"},fR=io({__name:"Records",setup(n){const t=Pt(O()),e=Pt(null),s=Pt(null),r=Pt(!1),i=Pt(!1),o=Pt(!1),l=Pt(!1),u=Pt([]),c=Pt({timestamp:new Date().toISOString().slice(0,16),type:"空單 Sell Limit",price:0,quantity:0,profitLoss:0,notes:""}),d=Pt({timestamp:"",type:"",price:0,quantity:0,profitLoss:0,notes:""});De(()=>t.value.reduce((L,x)=>L+parseFloat(x.profitLoss),0)),De(()=>t.value.length===0?0:t.value.filter(x=>parseFloat(x.profitLoss)>0).length/t.value.length*100),De(()=>{if(t.value.length===0)return"";const L=new Set;return t.value.forEach(x=>{const H=new Date(x.timestamp),Ot=H.getFullYear(),Re=H.getMonth()+1;L.add(`${Ot}年${Re}月`)}),Array.from(L).reverse().join(", ")});const p=De(()=>{const L=new Set;return t.value.forEach(x=>{const H=new Date(x.timestamp),Ot=H.getFullYear(),Re=H.getMonth()+1;L.add(`${Ot}年${Re}月`)}),Array.from(L).reverse()}),y=De(()=>s.value?t.value.filter(L=>{const x=new Date(L.timestamp),H=x.getFullYear(),Ot=x.getMonth()+1;return`${H}年${Ot}月`===s.value}):t.value),A=De(()=>y.value.reduce((L,x)=>L+parseFloat(x.profitLoss),0)),k=De(()=>y.value.length===0?0:y.value.filter(x=>parseFloat(x.profitLoss)>0).length/y.value.length*100);function R(){c.value={timestamp:new Date().toISOString().slice(0,16),type:"空單 Sell Limit",price:0,quantity:0,profitLoss:0,notes:""},r.value=!0}function D(){r.value=!1}function X(){if(!c.value.price||!c.value.quantity){alert("請填寫價格和手數");return}const L={timestamp:c.value.timestamp,type:c.value.type,price:c.value.price,quantity:c.value.quantity,profitLoss:c.value.profitLoss.toString(),notes:c.value.notes};t.value.push(L),it(),D(),e.value=t.value.length-1}function G(){o.value=!o.value,u.value=[]}function Q(){o.value=!1,u.value=[]}function W(L){u.value.includes(L)?u.value=u.value.filter(x=>x!==L):u.value.push(L)}function nt(){u.value.length!==0&&confirm(`確定要刪除選中的 ${u.value.length} 筆紀錄嗎？`)&&(u.value.sort((x,H)=>H-x).forEach(x=>{t.value.splice(x,1)}),it(),o.value=!1,u.value=[],e.value=null)}function ut(){if(e.value===null)return;const L=t.value[e.value];d.value={timestamp:L.timestamp,type:L.type,price:L.price,quantity:L.quantity,profitLoss:parseFloat(L.profitLoss),notes:L.notes},i.value=!0}function w(){i.value=!1}function v(){if(e.value!==null){if(!d.value.price||!d.value.quantity){alert("請填寫價格和手數");return}t.value[e.value]={timestamp:d.value.timestamp,type:d.value.type,price:d.value.price,quantity:d.value.quantity,profitLoss:d.value.profitLoss.toString(),notes:d.value.notes},it(),w()}}function _(L){try{return new Date(L).toLocaleString("zh-TW",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})}catch{return L}}function b(){l.value=!l.value}function I(){l.value=!1}function P(){if(y.value.length===0)return;const L=E(y.value),x=new Blob([L],{type:"text/html;charset=utf-8"}),H=document.createElement("a"),Ot=URL.createObjectURL(x);H.setAttribute("href",Ot),H.setAttribute("download",`XAUUSD_交易紀錄_${new Date().toISOString().split("T")[0]}.html`),H.style.visibility="hidden",document.body.appendChild(H),H.click(),document.body.removeChild(H),l.value=!1}function E(L){const x=`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif;
      background-color: #0f1419;
      color: #e8eef7;
      padding: 20px;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
    
    h1 {
      text-align: center;
      margin-bottom: 30px;
      color: #d4af37;
      font-size: 32px;
    }
    
    .summary {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      margin-bottom: 30px;
      background-color: #1a1f26;
      padding: 16px;
      border-radius: 12px;
    }
    
    .summary-item {
      display: flex;
      flex-direction: column;
    }
    
    .summary-label {
      font-size: 12px;
      color: #a0a9b8;
      margin-bottom: 4px;
      text-transform: uppercase;
    }
    
    .summary-value {
      font-size: 20px;
      font-weight: bold;
      color: #d4af37;
    }
    
    .summary-value.positive {
      color: #60a5fa;
    }
    
    .summary-value.negative {
      color: #f87171;
    }
    
    .record-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 20px;
      background-color: #1a1f26;
      border-radius: 12px;
      overflow: hidden;
    }
    
    .record-table th {
      background-color: #252d36;
      color: #d4af37;
      padding: 12px;
      text-align: left;
      font-size: 14px;
      font-weight: 600;
      border-bottom: 2px solid #d4af37;
    }
    
    .record-table td {
      padding: 12px;
      border-bottom: 1px solid #2d3748;
      color: #e8eef7;
    }
    
    .record-table tr:last-child td {
      border-bottom: none;
    }
    
    .record-table .type-cell {
      font-weight: 600;
    }
    
    .type-buy {
      color: #60a5fa;
    }
    
    .type-sell {
      color: #f87171;
    }
    
    .profit-positive {
      color: #60a5fa;
      font-weight: 600;
    }
    
    .profit-negative {
      color: #f87171;
      font-weight: 600;
    }
    
    .export-date {
      text-align: center;
      margin-top: 40px;
      padding-top: 20px;
      border-top: 1px solid #2d3748;
      color: #a0a9b8;
      font-size: 12px;
    }
    
    @media print {
      body {
        background-color: #fff;
        color: #000;
      }
      
      .container {
        background-color: #fff;
      }
      
      .summary {
        background-color: #f5f5f5;
      }
      
      h1 {
        color: #000;
      }
      
      .summary-label {
        color: #666;
      }
      
      .summary-value {
        color: #000;
      }
      
      .summary-value.positive {
        color: #0066cc;
      }
      
      .summary-value.negative {
        color: #cc0000;
      }
      
      .record-table {
        background-color: #fff;
      }
      
      .record-table th {
        background-color: #e0e0e0;
        color: #000;
        border-bottom: 2px solid #000;
      }
      
      .record-table td {
        border-bottom: 1px solid #ccc;
        color: #000;
      }
      
      .type-buy {
        color: #0066cc;
      }
      
      .type-sell {
        color: #cc0000;
      }
      
      .profit-positive {
        color: #0066cc;
      }
      
      .profit-negative {
        color: #cc0000;
      }
    }
  `,H=L.reduce((ee,Xe)=>ee+parseFloat(Xe.profitLoss),0),Ot=L.filter(ee=>parseFloat(ee.profitLoss)>0).length,Re=L.length>0?Ot/L.length*100:0;let Ae='<table class="record-table"><thead><tr><th>日期時間</th><th>交易類型</th><th>價格</th><th>手數</th><th>損益 (USD)</th><th>備註</th></tr></thead><tbody>';L.forEach(ee=>{const Xe=parseFloat(ee.profitLoss),Ke=Xe>=0?"profit-positive":"profit-negative",Je=ee.type.includes("Buy")?"type-buy":"type-sell";Ae+=`<tr>
      <td>${_(ee.timestamp)}</td>
      <td><span class="type-cell ${Je}">${ee.type}</span></td>
      <td>${ee.price.toFixed(2)}</td>
      <td>${ee.quantity}</td>
      <td><span class="${Ke}">${Xe.toFixed(2)}</span></td>
      <td>${ee.notes||"-"}</td>
    </tr>`}),Ae+="</tbody></table>";const ge=H>=0?"positive":"negative";return`<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>XAUUSD 交易紀錄</title>
  <style>
    ${x}
  </style>
</head>
<body>
  <div class="container">
    <h1>🏆 XAUUSD 交易紀錄</h1>
    
    <div class="summary">
      <div class="summary-item">
        <div class="summary-label">總交易筆數</div>
        <div class="summary-value">${L.length}</div>
      </div>
      <div class="summary-item">
        <div class="summary-label">總損益</div>
        <div class="summary-value ${ge}">${H.toFixed(2)} USD</div>
      </div>
      <div class="summary-item">
        <div class="summary-label">勝率</div>
        <div class="summary-value">${Re.toFixed(1)}%</div>
      </div>
    </div>
    
    ${Ae}
    
    <div class="export-date">
      導出於 ${new Date().toLocaleString("zh-TW")}
    </div>
  </div>
</body>
</html>`}function it(){localStorage.setItem("xauusd_records",JSON.stringify(t.value))}function O(){const L=localStorage.getItem("xauusd_records");return L?JSON.parse(L):[]}return(L,x)=>(lt(),dt("div",null,[m("div",hS,[m("div",dS,[x[17]||(x[17]=m("div",{class:"card-title"},"交易紀錄",-1)),m("div",fS,[o.value?xt("",!0):(lt(),dt("button",{key:0,class:"btn-floating btn-delete-floating",onClick:G,title:"刪除紀錄"},[(lt(),dt("svg",pS,[...x[15]||(x[15]=[m("polyline",{points:"3 6 5 6 21 6"},null,-1),m("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"},null,-1),m("line",{x1:"10",y1:"11",x2:"10",y2:"17"},null,-1),m("line",{x1:"14",y1:"11",x2:"14",y2:"17"},null,-1)])]))])),o.value&&u.value.length>0?(lt(),dt("button",{key:1,class:"btn-floating btn-confirm-delete",onClick:nt,title:"確認刪除"}," ✓ ")):xt("",!0),o.value?(lt(),dt("button",{key:2,class:"btn-floating btn-cancel-delete",onClick:Q,title:"取消刪除"}," ✕ ")):xt("",!0),e.value!==null&&!o.value&&!l.value?(lt(),dt("button",{key:3,class:"btn-floating btn-edit-floating",onClick:ut,title:"編輯紀錄"}," ✎ ")):xt("",!0),o.value?xt("",!0):(lt(),dt("button",{key:4,class:"btn-floating btn-export-floating",onClick:b,title:"下載紀錄"},[(lt(),dt("svg",mS,[...x[16]||(x[16]=[m("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"},null,-1),m("polyline",{points:"7 10 12 15 17 10"},null,-1),m("line",{x1:"12",y1:"15",x2:"12",y2:"3"},null,-1)])]))])),!o.value&&!l.value?(lt(),dt("button",{key:5,class:"btn-floating",onClick:R},"+")):xt("",!0)])]),t.value.length===0?(lt(),dt("div",gS,[...x[18]||(x[18]=[m("p",{style:{"font-size":"14px"}},'還沒有交易紀錄，點擊右上角"+"新增',-1)])])):xt("",!0),t.value.length>0?(lt(),dt("div",_S,[(lt(!0),dt(Ie,null,vr(y.value,(H,Ot)=>(lt(),dt("button",{key:Ot,class:Be(["record-button",{active:e.value===t.value.indexOf(H)&&!o.value,"delete-selected":o.value&&u.value.includes(t.value.indexOf(H))}]),onClick:Re=>o.value?W(t.value.indexOf(H)):e.value=t.value.indexOf(H)},[As(vt(_(H.timestamp)),1),x[19]||(x[19]=m("br",null,null,-1)),m("span",vS,vt(H.type),1)],10,yS))),128))])):xt("",!0),t.value.length>0&&e.value!==null?(lt(),dt("div",ES,[m("div",IS,[m("div",bS,[x[20]||(x[20]=m("span",{class:"data-label"},"日期時間",-1)),m("span",TS,vt(_(t.value[e.value].timestamp)),1)])]),m("div",wS,[m("div",AS,[x[21]||(x[21]=m("span",{class:"data-label"},"交易類型",-1)),m("span",{class:Be(["data-value",t.value[e.value].type.includes("Buy")?"positive":"negative"])},vt(t.value[e.value].type),3)]),m("div",SS,[x[22]||(x[22]=m("span",{class:"data-label"},"價格",-1)),m("span",RS,vt(t.value[e.value].price.toFixed(2)),1)])]),m("div",xS,[m("div",PS,[x[23]||(x[23]=m("span",{class:"data-label"},"手數",-1)),m("span",CS,vt(t.value[e.value].quantity),1)]),m("div",VS,[x[24]||(x[24]=m("span",{class:"data-label"},"損益",-1)),m("span",{class:Be(["data-value",parseFloat(t.value[e.value].profitLoss)>=0?"positive":"negative"])},vt(parseFloat(t.value[e.value].profitLoss).toFixed(2))+" USD ",3)])]),t.value[e.value].notes?(lt(),dt("div",DS,[m("div",kS,[x[25]||(x[25]=m("span",{class:"data-label"},"備註",-1)),m("span",NS,vt(t.value[e.value].notes),1)])])):xt("",!0)])):xt("",!0)]),r.value?(lt(),dt("div",{key:0,class:"modal-overlay",onClick:D},[m("div",{class:"modal",onClick:x[6]||(x[6]=wi(()=>{},["stop"]))},[m("div",{class:"modal-header"},[x[26]||(x[26]=m("h2",null,"新增交易紀錄",-1)),m("button",{class:"modal-close",onClick:D},"×")]),m("div",MS,[m("div",OS,[m("div",FS,[x[27]||(x[27]=m("label",null,"日期時間",-1)),_t(m("input",{"onUpdate:modelValue":x[0]||(x[0]=H=>c.value.timestamp=H),type:"datetime-local",class:"form-input"},null,512),[[wt,c.value.timestamp]])]),m("div",LS,[x[29]||(x[29]=m("label",null,"交易類型",-1)),_t(m("select",{"onUpdate:modelValue":x[1]||(x[1]=H=>c.value.type=H),class:"form-select"},[...x[28]||(x[28]=[m("option",{value:"空單 Sell Limit"},"空單 Sell Limit",-1),m("option",{value:"多單 Buy Limit"},"多單 Buy Limit",-1)])],512),[[eu,c.value.type]])])]),m("div",BS,[m("div",US,[x[30]||(x[30]=m("label",null,"價格",-1)),_t(m("input",{"onUpdate:modelValue":x[2]||(x[2]=H=>c.value.price=H),type:"number",step:"0.01",class:"form-input",placeholder:"例如 4200.50"},null,512),[[wt,c.value.price,void 0,{number:!0}]])]),m("div",$S,[x[31]||(x[31]=m("label",null,"手數",-1)),_t(m("input",{"onUpdate:modelValue":x[3]||(x[3]=H=>c.value.quantity=H),type:"number",step:"0.01",class:"form-input",placeholder:"例如 0.01"},null,512),[[wt,c.value.quantity,void 0,{number:!0}]])])]),m("div",jS,[x[32]||(x[32]=m("label",null,"損益 (USD)",-1)),_t(m("input",{"onUpdate:modelValue":x[4]||(x[4]=H=>c.value.profitLoss=H),type:"number",step:"0.01",class:"form-input",placeholder:"例如 50.00 或 -10.00"},null,512),[[wt,c.value.profitLoss,void 0,{number:!0}]])]),m("div",qS,[x[33]||(x[33]=m("label",null,"備註",-1)),_t(m("textarea",{"onUpdate:modelValue":x[5]||(x[5]=H=>c.value.notes=H),class:"form-input",rows:"3",placeholder:"記錄交易詳情、策略等...",style:{resize:"vertical"}},null,512),[[wt,c.value.notes]])])]),m("div",{class:"modal-footer"},[m("button",{class:"btn btn-secondary",onClick:D},"取消"),m("button",{class:"btn btn-primary",onClick:X},"新增紀錄")])])])):xt("",!0),i.value?(lt(),dt("div",{key:1,class:"modal-overlay",onClick:w},[m("div",{class:"modal",onClick:x[13]||(x[13]=wi(()=>{},["stop"]))},[m("div",{class:"modal-header"},[x[34]||(x[34]=m("h2",null,"編輯交易紀錄",-1)),m("button",{class:"modal-close",onClick:w},"×")]),m("div",zS,[m("div",KS,[m("div",HS,[x[35]||(x[35]=m("label",null,"日期時間",-1)),_t(m("input",{"onUpdate:modelValue":x[7]||(x[7]=H=>d.value.timestamp=H),type:"datetime-local",class:"form-input"},null,512),[[wt,d.value.timestamp]])]),m("div",GS,[x[37]||(x[37]=m("label",null,"交易類型",-1)),_t(m("select",{"onUpdate:modelValue":x[8]||(x[8]=H=>d.value.type=H),class:"form-select"},[...x[36]||(x[36]=[m("option",{value:"空單 Sell Limit"},"空單 Sell Limit",-1),m("option",{value:"多單 Buy Limit"},"多單 Buy Limit",-1)])],512),[[eu,d.value.type]])])]),m("div",WS,[m("div",QS,[x[38]||(x[38]=m("label",null,"價格",-1)),_t(m("input",{"onUpdate:modelValue":x[9]||(x[9]=H=>d.value.price=H),type:"number",step:"0.01",class:"form-input",placeholder:"例如 4200.50"},null,512),[[wt,d.value.price,void 0,{number:!0}]])]),m("div",XS,[x[39]||(x[39]=m("label",null,"手數",-1)),_t(m("input",{"onUpdate:modelValue":x[10]||(x[10]=H=>d.value.quantity=H),type:"number",step:"0.01",class:"form-input",placeholder:"例如 0.01"},null,512),[[wt,d.value.quantity,void 0,{number:!0}]])])]),m("div",JS,[x[40]||(x[40]=m("label",null,"損益 (USD)",-1)),_t(m("input",{"onUpdate:modelValue":x[11]||(x[11]=H=>d.value.profitLoss=H),type:"number",step:"0.01",class:"form-input",placeholder:"例如 50.00 或 -10.00"},null,512),[[wt,d.value.profitLoss,void 0,{number:!0}]])]),m("div",YS,[x[41]||(x[41]=m("label",null,"備註",-1)),_t(m("textarea",{"onUpdate:modelValue":x[12]||(x[12]=H=>d.value.notes=H),class:"form-input",rows:"3",placeholder:"記錄交易詳情、策略等...",style:{resize:"vertical"}},null,512),[[wt,d.value.notes]])])]),m("div",{class:"modal-footer"},[m("button",{class:"btn btn-secondary",onClick:w},"取消"),m("button",{class:"btn btn-primary",onClick:v},"保存修改")])])])):xt("",!0),t.value.length>0?(lt(),dt("div",ZS,[x[45]||(x[45]=m("div",{class:"card-title"},"交易統計",-1)),m("div",tR,[m("button",{class:Be(["month-button",{active:s.value===null}]),onClick:x[14]||(x[14]=H=>s.value=null)}," 全部 ",2),(lt(!0),dt(Ie,null,vr(p.value,H=>(lt(),dt("button",{key:H,class:Be(["month-button",{active:s.value===H}]),onClick:Ot=>s.value=H},vt(H),11,eR))),128))]),l.value&&y.value.length>0?(lt(),dt("div",nR,[m("span",sR,"已選擇 "+vt(y.value.length)+" 筆紀錄",1),m("button",{class:"btn btn-primary",onClick:P,style:{flex:"1"}}," 下載為 HTML "),m("button",{class:"btn btn-secondary",onClick:I}," 取消 ")])):xt("",!0),m("div",rR,[m("div",iR,[m("div",oR,[x[42]||(x[42]=m("span",{class:"data-label"},"總交易筆數",-1)),m("span",aR,vt(y.value.length),1)])]),m("div",lR,[m("div",uR,[x[43]||(x[43]=m("span",{class:"data-label"},"總損益",-1)),m("span",{class:Be(["data-value",A.value>=0?"positive":"negative"])},vt(A.value.toFixed(2))+" USD ",3)])]),m("div",cR,[m("div",hR,[x[44]||(x[44]=m("span",{class:"data-label"},"勝率",-1)),m("span",dR,vt(k.value.toFixed(1))+"%",1)])])])])):xt("",!0)]))}}),pR=$c(fR,[["__scopeId","data-v-b90af780"]]),mR={class:"app-container"},gR={class:"app-content"},_R={class:"app-footer"},yR={class:"nav-tabs"},vR=["onClick"],ER=io({__name:"App",setup(n){const t=["計算","策略","守則","紀錄"],e=Pt("計算");return(s,r)=>(lt(),dt("div",mR,[r[0]||(r[0]=m("div",{class:"app-header"},[m("h1",null,"🏆 XAUUSD")],-1)),m("div",gR,[e.value==="計算"?(lt(),ci(z0,{key:0})):xt("",!0),e.value==="策略"?(lt(),ci(JA,{key:1})):xt("",!0),e.value==="守則"?(lt(),ci(cS,{key:2})):xt("",!0),e.value==="紀錄"?(lt(),ci(pR,{key:3})):xt("",!0)]),m("div",_R,[m("div",yR,[(lt(),dt(Ie,null,vr(t,i=>m("button",{key:i,class:Be(["nav-tab",{active:e.value===i}]),onClick:o=>e.value=i},vt(i),11,vR)),64))])])]))}}),D_=AE(ER),IR=xE();D_.use(IR);D_.mount("#app");const zf=V_();zf.loadFromFirebase().then(n=>{n?(console.log("✓ Data loaded from Firebase"),zf.startFirebaseListener()):console.log("⚠ No Firebase data found, using localStorage")}).catch(n=>{console.error("Firebase loading failed:",n)});
