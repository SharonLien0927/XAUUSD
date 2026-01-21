(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=e(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Lu(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const Bt={},pr=[],ln=()=>{},Zf=()=>!1,Na=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Bu=n=>n.startsWith("onUpdate:"),be=Object.assign,Uu=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},uy=Object.prototype.hasOwnProperty,Vt=(n,t)=>uy.call(n,t),ft=Array.isArray,mr=n=>io(n)==="[object Map]",Oa=n=>io(n)==="[object Set]",Bh=n=>io(n)==="[object Date]",yt=n=>typeof n=="function",Zt=n=>typeof n=="string",fn=n=>typeof n=="symbol",jt=n=>n!==null&&typeof n=="object",tp=n=>(jt(n)||yt(n))&&yt(n.then)&&yt(n.catch),ep=Object.prototype.toString,io=n=>ep.call(n),cy=n=>io(n).slice(8,-1),np=n=>io(n)==="[object Object]",Ma=n=>Zt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,yi=Lu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fa=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},hy=/-\w/g,ss=Fa(n=>n.replace(hy,t=>t.slice(1).toUpperCase())),dy=/\B([A-Z])/g,Hs=Fa(n=>n.replace(dy,"-$1").toLowerCase()),sp=Fa(n=>n.charAt(0).toUpperCase()+n.slice(1)),Sl=Fa(n=>n?`on${sp(n)}`:""),Yn=(n,t)=>!Object.is(n,t),jo=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},rp=(n,t,e,s=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:s,value:e})},La=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Uh;const Ba=()=>Uh||(Uh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function $u(n){if(ft(n)){const t={};for(let e=0;e<n.length;e++){const s=n[e],r=Zt(s)?gy(s):$u(s);if(r)for(const i in r)t[i]=r[i]}return t}else if(Zt(n)||jt(n))return n}const fy=/;(?![^(]*\))/g,py=/:([^]+)/,my=/\/\*[^]*?\*\//g;function gy(n){const t={};return n.replace(my,"").split(fy).forEach(e=>{if(e){const s=e.split(py);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function $e(n){let t="";if(Zt(n))t=n;else if(ft(n))for(let e=0;e<n.length;e++){const s=$e(n[e]);s&&(t+=s+" ")}else if(jt(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const _y="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",yy=Lu(_y);function ip(n){return!!n||n===""}function vy(n,t){if(n.length!==t.length)return!1;let e=!0;for(let s=0;e&&s<n.length;s++)e=br(n[s],t[s]);return e}function br(n,t){if(n===t)return!0;let e=Bh(n),s=Bh(t);if(e||s)return e&&s?n.getTime()===t.getTime():!1;if(e=fn(n),s=fn(t),e||s)return n===t;if(e=ft(n),s=ft(t),e||s)return e&&s?vy(n,t):!1;if(e=jt(n),s=jt(t),e||s){if(!e||!s)return!1;const r=Object.keys(n).length,i=Object.keys(t).length;if(r!==i)return!1;for(const o in n){const l=n.hasOwnProperty(o),u=t.hasOwnProperty(o);if(l&&!u||!l&&u||!br(n[o],t[o]))return!1}}return String(n)===String(t)}function by(n,t){return n.findIndex(e=>br(e,t))}const op=n=>!!(n&&n.__v_isRef===!0),gt=n=>Zt(n)?n:n==null?"":ft(n)||jt(n)&&(n.toString===ep||!yt(n.toString))?op(n)?gt(n.value):JSON.stringify(n,ap,2):String(n),ap=(n,t)=>op(t)?ap(n,t.value):mr(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[s,r],i)=>(e[Rl(s,i)+" =>"]=r,e),{})}:Oa(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Rl(e))}:fn(t)?Rl(t):jt(t)&&!ft(t)&&!np(t)?String(t):t,Rl=(n,t="")=>{var e;return fn(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let me;class lp{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=me,!t&&me&&(this.index=(me.scopes||(me.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=me;try{return me=this,t()}finally{me=e}}}on(){++this._on===1&&(this.prevScope=me,me=this)}off(){this._on>0&&--this._on===0&&(me=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let e,s;for(e=0,s=this.effects.length;e<s;e++)this.effects[e].stop();for(this.effects.length=0,e=0,s=this.cleanups.length;e<s;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,s=this.scopes.length;e<s;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function up(n){return new lp(n)}function cp(){return me}function Ey(n,t=!1){me&&me.cleanups.push(n)}let $t;const xl=new WeakSet;class hp{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,me&&me.active&&me.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,xl.has(this)&&(xl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||fp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,$h(this),pp(this);const t=$t,e=Qe;$t=this,Qe=!0;try{return this.fn()}finally{mp(this),$t=t,Qe=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)zu(t);this.deps=this.depsTail=void 0,$h(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?xl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Xl(this)&&this.run()}get dirty(){return Xl(this)}}let dp=0,vi,bi;function fp(n,t=!1){if(n.flags|=8,t){n.next=bi,bi=n;return}n.next=vi,vi=n}function ju(){dp++}function qu(){if(--dp>0)return;if(bi){let t=bi;for(bi=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;vi;){let t=vi;for(vi=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){n||(n=s)}t=e}}if(n)throw n}function pp(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function mp(n){let t,e=n.depsTail,s=e;for(;s;){const r=s.prevDep;s.version===-1?(s===e&&(e=r),zu(s),Iy(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}n.deps=t,n.depsTail=e}function Xl(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(gp(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function gp(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Fi)||(n.globalVersion=Fi,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Xl(n))))return;n.flags|=2;const t=n.dep,e=$t,s=Qe;$t=n,Qe=!0;try{pp(n);const r=n.fn(n._value);(t.version===0||Yn(r,n._value))&&(n.flags|=128,n._value=r,t.version++)}catch(r){throw t.version++,r}finally{$t=e,Qe=s,mp(n),n.flags&=-3}}function zu(n,t=!1){const{dep:e,prevSub:s,nextSub:r}=n;if(s&&(s.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=s,n.nextSub=void 0),e.subs===n&&(e.subs=s,!s&&e.computed)){e.computed.flags&=-5;for(let i=e.computed.deps;i;i=i.nextDep)zu(i,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function Iy(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let Qe=!0;const _p=[];function xn(){_p.push(Qe),Qe=!1}function Pn(){const n=_p.pop();Qe=n===void 0?!0:n}function $h(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=$t;$t=void 0;try{t()}finally{$t=e}}}let Fi=0;class Ty{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ku{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!$t||!Qe||$t===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==$t)e=this.activeLink=new Ty($t,this),$t.deps?(e.prevDep=$t.depsTail,$t.depsTail.nextDep=e,$t.depsTail=e):$t.deps=$t.depsTail=e,yp(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const s=e.nextDep;s.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=s),e.prevDep=$t.depsTail,e.nextDep=void 0,$t.depsTail.nextDep=e,$t.depsTail=e,$t.deps===e&&($t.deps=s)}return e}trigger(t){this.version++,Fi++,this.notify(t)}notify(t){ju();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{qu()}}}function yp(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)yp(s)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const ra=new WeakMap,Vs=Symbol(""),Jl=Symbol(""),Li=Symbol("");function _e(n,t,e){if(Qe&&$t){let s=ra.get(n);s||ra.set(n,s=new Map);let r=s.get(e);r||(s.set(e,r=new Ku),r.map=s,r.key=e),r.track()}}function vn(n,t,e,s,r,i){const o=ra.get(n);if(!o){Fi++;return}const l=u=>{u&&u.trigger()};if(ju(),t==="clear")o.forEach(l);else{const u=ft(n),c=u&&Ma(e);if(u&&e==="length"){const d=Number(s);o.forEach((p,y)=>{(y==="length"||y===Li||!fn(y)&&y>=d)&&l(p)})}else switch((e!==void 0||o.has(void 0))&&l(o.get(e)),c&&l(o.get(Li)),t){case"add":u?c&&l(o.get("length")):(l(o.get(Vs)),mr(n)&&l(o.get(Jl)));break;case"delete":u||(l(o.get(Vs)),mr(n)&&l(o.get(Jl)));break;case"set":mr(n)&&l(o.get(Vs));break}}qu()}function wy(n,t){const e=ra.get(n);return e&&e.get(t)}function tr(n){const t=Rt(n);return t===n?t:(_e(t,"iterate",Li),Fe(n)?t:t.map(Xe))}function Ua(n){return _e(n=Rt(n),"iterate",Li),n}function Hn(n,t){return Cn(n)?Tn(n)?Ir(Xe(t)):Ir(t):Xe(t)}const Ay={__proto__:null,[Symbol.iterator](){return Pl(this,Symbol.iterator,n=>Hn(this,n))},concat(...n){return tr(this).concat(...n.map(t=>ft(t)?tr(t):t))},entries(){return Pl(this,"entries",n=>(n[1]=Hn(this,n[1]),n))},every(n,t){return _n(this,"every",n,t,void 0,arguments)},filter(n,t){return _n(this,"filter",n,t,e=>e.map(s=>Hn(this,s)),arguments)},find(n,t){return _n(this,"find",n,t,e=>Hn(this,e),arguments)},findIndex(n,t){return _n(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return _n(this,"findLast",n,t,e=>Hn(this,e),arguments)},findLastIndex(n,t){return _n(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return _n(this,"forEach",n,t,void 0,arguments)},includes(...n){return Cl(this,"includes",n)},indexOf(...n){return Cl(this,"indexOf",n)},join(n){return tr(this).join(n)},lastIndexOf(...n){return Cl(this,"lastIndexOf",n)},map(n,t){return _n(this,"map",n,t,void 0,arguments)},pop(){return ri(this,"pop")},push(...n){return ri(this,"push",n)},reduce(n,...t){return jh(this,"reduce",n,t)},reduceRight(n,...t){return jh(this,"reduceRight",n,t)},shift(){return ri(this,"shift")},some(n,t){return _n(this,"some",n,t,void 0,arguments)},splice(...n){return ri(this,"splice",n)},toReversed(){return tr(this).toReversed()},toSorted(n){return tr(this).toSorted(n)},toSpliced(...n){return tr(this).toSpliced(...n)},unshift(...n){return ri(this,"unshift",n)},values(){return Pl(this,"values",n=>Hn(this,n))}};function Pl(n,t,e){const s=Ua(n),r=s[t]();return s!==n&&!Fe(n)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.done||(i.value=e(i.value)),i}),r}const Sy=Array.prototype;function _n(n,t,e,s,r,i){const o=Ua(n),l=o!==n&&!Fe(n),u=o[t];if(u!==Sy[t]){const p=u.apply(n,i);return l?Xe(p):p}let c=e;o!==n&&(l?c=function(p,y){return e.call(this,Hn(n,p),y,n)}:e.length>2&&(c=function(p,y){return e.call(this,p,y,n)}));const d=u.call(o,c,s);return l&&r?r(d):d}function jh(n,t,e,s){const r=Ua(n);let i=e;return r!==n&&(Fe(n)?e.length>3&&(i=function(o,l,u){return e.call(this,o,l,u,n)}):i=function(o,l,u){return e.call(this,o,Hn(n,l),u,n)}),r[t](i,...s)}function Cl(n,t,e){const s=Rt(n);_e(s,"iterate",Li);const r=s[t](...e);return(r===-1||r===!1)&&$a(e[0])?(e[0]=Rt(e[0]),s[t](...e)):r}function ri(n,t,e=[]){xn(),ju();const s=Rt(n)[t].apply(n,e);return qu(),Pn(),s}const Ry=Lu("__proto__,__v_isRef,__isVue"),vp=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(fn));function xy(n){fn(n)||(n=String(n));const t=Rt(this);return _e(t,"has",n),t.hasOwnProperty(n)}class bp{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,s){if(e==="__v_skip")return t.__v_skip;const r=this._isReadonly,i=this._isShallow;if(e==="__v_isReactive")return!r;if(e==="__v_isReadonly")return r;if(e==="__v_isShallow")return i;if(e==="__v_raw")return s===(r?i?Ly:wp:i?Tp:Ip).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const o=ft(t);if(!r){let u;if(o&&(u=Ay[e]))return u;if(e==="hasOwnProperty")return xy}const l=Reflect.get(t,e,Qt(t)?t:s);if((fn(e)?vp.has(e):Ry(e))||(r||_e(t,"get",e),i))return l;if(Qt(l)){const u=o&&Ma(e)?l:l.value;return r&&jt(u)?Zl(u):u}return jt(l)?r?Zl(l):Er(l):l}}class Ep extends bp{constructor(t=!1){super(!1,t)}set(t,e,s,r){let i=t[e];const o=ft(t)&&Ma(e);if(!this._isShallow){const c=Cn(i);if(!Fe(s)&&!Cn(s)&&(i=Rt(i),s=Rt(s)),!o&&Qt(i)&&!Qt(s))return c||(i.value=s),!0}const l=o?Number(e)<t.length:Vt(t,e),u=Reflect.set(t,e,s,Qt(t)?t:r);return t===Rt(r)&&(l?Yn(s,i)&&vn(t,"set",e,s):vn(t,"add",e,s)),u}deleteProperty(t,e){const s=Vt(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&s&&vn(t,"delete",e,void 0),r}has(t,e){const s=Reflect.has(t,e);return(!fn(e)||!vp.has(e))&&_e(t,"has",e),s}ownKeys(t){return _e(t,"iterate",ft(t)?"length":Vs),Reflect.ownKeys(t)}}class Py extends bp{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Cy=new Ep,Vy=new Py,Dy=new Ep(!0);const Yl=n=>n,Po=n=>Reflect.getPrototypeOf(n);function ky(n,t,e){return function(...s){const r=this.__v_raw,i=Rt(r),o=mr(i),l=n==="entries"||n===Symbol.iterator&&o,u=n==="keys"&&o,c=r[n](...s),d=e?Yl:t?Ir:Xe;return!t&&_e(i,"iterate",u?Jl:Vs),{next(){const{value:p,done:y}=c.next();return y?{value:p,done:y}:{value:l?[d(p[0]),d(p[1])]:d(p),done:y}},[Symbol.iterator](){return this}}}}function Co(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Ny(n,t){const e={get(r){const i=this.__v_raw,o=Rt(i),l=Rt(r);n||(Yn(r,l)&&_e(o,"get",r),_e(o,"get",l));const{has:u}=Po(o),c=t?Yl:n?Ir:Xe;if(u.call(o,r))return c(i.get(r));if(u.call(o,l))return c(i.get(l));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!n&&_e(Rt(r),"iterate",Vs),r.size},has(r){const i=this.__v_raw,o=Rt(i),l=Rt(r);return n||(Yn(r,l)&&_e(o,"has",r),_e(o,"has",l)),r===l?i.has(r):i.has(r)||i.has(l)},forEach(r,i){const o=this,l=o.__v_raw,u=Rt(l),c=t?Yl:n?Ir:Xe;return!n&&_e(u,"iterate",Vs),l.forEach((d,p)=>r.call(i,c(d),c(p),o))}};return be(e,n?{add:Co("add"),set:Co("set"),delete:Co("delete"),clear:Co("clear")}:{add(r){!t&&!Fe(r)&&!Cn(r)&&(r=Rt(r));const i=Rt(this);return Po(i).has.call(i,r)||(i.add(r),vn(i,"add",r,r)),this},set(r,i){!t&&!Fe(i)&&!Cn(i)&&(i=Rt(i));const o=Rt(this),{has:l,get:u}=Po(o);let c=l.call(o,r);c||(r=Rt(r),c=l.call(o,r));const d=u.call(o,r);return o.set(r,i),c?Yn(i,d)&&vn(o,"set",r,i):vn(o,"add",r,i),this},delete(r){const i=Rt(this),{has:o,get:l}=Po(i);let u=o.call(i,r);u||(r=Rt(r),u=o.call(i,r)),l&&l.call(i,r);const c=i.delete(r);return u&&vn(i,"delete",r,void 0),c},clear(){const r=Rt(this),i=r.size!==0,o=r.clear();return i&&vn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=ky(r,n,t)}),e}function Hu(n,t){const e=Ny(n,t);return(s,r,i)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?s:Reflect.get(Vt(e,r)&&r in s?e:s,r,i)}const Oy={get:Hu(!1,!1)},My={get:Hu(!1,!0)},Fy={get:Hu(!0,!1)};const Ip=new WeakMap,Tp=new WeakMap,wp=new WeakMap,Ly=new WeakMap;function By(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Uy(n){return n.__v_skip||!Object.isExtensible(n)?0:By(cy(n))}function Er(n){return Cn(n)?n:Gu(n,!1,Cy,Oy,Ip)}function $y(n){return Gu(n,!1,Dy,My,Tp)}function Zl(n){return Gu(n,!0,Vy,Fy,wp)}function Gu(n,t,e,s,r){if(!jt(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const i=Uy(n);if(i===0)return n;const o=r.get(n);if(o)return o;const l=new Proxy(n,i===2?s:e);return r.set(n,l),l}function Tn(n){return Cn(n)?Tn(n.__v_raw):!!(n&&n.__v_isReactive)}function Cn(n){return!!(n&&n.__v_isReadonly)}function Fe(n){return!!(n&&n.__v_isShallow)}function $a(n){return n?!!n.__v_raw:!1}function Rt(n){const t=n&&n.__v_raw;return t?Rt(t):n}function Wu(n){return!Vt(n,"__v_skip")&&Object.isExtensible(n)&&rp(n,"__v_skip",!0),n}const Xe=n=>jt(n)?Er(n):n,Ir=n=>jt(n)?Zl(n):n;function Qt(n){return n?n.__v_isRef===!0:!1}function Pt(n){return jy(n,!1)}function jy(n,t){return Qt(n)?n:new qy(n,t)}class qy{constructor(t,e){this.dep=new Ku,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:Rt(t),this._value=e?t:Xe(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,s=this.__v_isShallow||Fe(t)||Cn(t);t=s?t:Rt(t),Yn(t,e)&&(this._rawValue=t,this._value=s?t:Xe(t),this.dep.trigger())}}function ae(n){return Qt(n)?n.value:n}const zy={get:(n,t,e)=>t==="__v_raw"?n:ae(Reflect.get(n,t,e)),set:(n,t,e,s)=>{const r=n[t];return Qt(r)&&!Qt(e)?(r.value=e,!0):Reflect.set(n,t,e,s)}};function Ap(n){return Tn(n)?n:new Proxy(n,zy)}function Ky(n){const t=ft(n)?new Array(n.length):{};for(const e in n)t[e]=Gy(n,e);return t}class Hy{constructor(t,e,s){this._object=t,this._key=e,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0,this._raw=Rt(t);let r=!0,i=t;if(!ft(t)||!Ma(String(e)))do r=!$a(i)||Fe(i);while(r&&(i=i.__v_raw));this._shallow=r}get value(){let t=this._object[this._key];return this._shallow&&(t=ae(t)),this._value=t===void 0?this._defaultValue:t}set value(t){if(this._shallow&&Qt(this._raw[this._key])){const e=this._object[this._key];if(Qt(e)){e.value=t;return}}this._object[this._key]=t}get dep(){return wy(this._raw,this._key)}}function Gy(n,t,e){return new Hy(n,t,e)}class Wy{constructor(t,e,s){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Ku(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Fi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&$t!==this)return fp(this,!0),!0}get value(){const t=this.dep.track();return gp(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Qy(n,t,e=!1){let s,r;return yt(n)?s=n:(s=n.get,r=n.set),new Wy(s,r,e)}const Vo={},ia=new WeakMap;let Es;function Xy(n,t=!1,e=Es){if(e){let s=ia.get(e);s||ia.set(e,s=[]),s.push(n)}}function Jy(n,t,e=Bt){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:l,call:u}=e,c=X=>r?X:Fe(X)||r===!1||r===0?bn(X,1):bn(X);let d,p,y,A,O=!1,k=!1;if(Qt(n)?(p=()=>n.value,O=Fe(n)):Tn(n)?(p=()=>c(n),O=!0):ft(n)?(k=!0,O=n.some(X=>Tn(X)||Fe(X)),p=()=>n.map(X=>{if(Qt(X))return X.value;if(Tn(X))return c(X);if(yt(X))return u?u(X,2):X()})):yt(n)?t?p=u?()=>u(n,2):n:p=()=>{if(y){xn();try{y()}finally{Pn()}}const X=Es;Es=d;try{return u?u(n,3,[A]):n(A)}finally{Es=X}}:p=ln,t&&r){const X=p,st=r===!0?1/0:r;p=()=>bn(X(),st)}const R=cp(),F=()=>{d.stop(),R&&R.active&&Uu(R.effects,d)};if(i&&t){const X=t;t=(...st)=>{X(...st),F()}}let Q=k?new Array(n.length).fill(Vo):Vo;const K=X=>{if(!(!(d.flags&1)||!d.dirty&&!X))if(t){const st=d.run();if(r||O||(k?st.some((ut,w)=>Yn(ut,Q[w])):Yn(st,Q))){y&&y();const ut=Es;Es=d;try{const w=[st,Q===Vo?void 0:k&&Q[0]===Vo?[]:Q,A];Q=st,u?u(t,3,w):t(...w)}finally{Es=ut}}}else d.run()};return l&&l(K),d=new hp(p),d.scheduler=o?()=>o(K,!1):K,A=X=>Xy(X,!1,d),y=d.onStop=()=>{const X=ia.get(d);if(X){if(u)u(X,4);else for(const st of X)st();ia.delete(d)}},t?s?K(!0):Q=d.run():o?o(K.bind(null,!0),!0):d.run(),F.pause=d.pause.bind(d),F.resume=d.resume.bind(d),F.stop=F,F}function bn(n,t=1/0,e){if(t<=0||!jt(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,Qt(n))bn(n.value,t,e);else if(ft(n))for(let s=0;s<n.length;s++)bn(n[s],t,e);else if(Oa(n)||mr(n))n.forEach(s=>{bn(s,t,e)});else if(np(n)){for(const s in n)bn(n[s],t,e);for(const s of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,s)&&bn(n[s],t,e)}return n}/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function oo(n,t,e,s){try{return s?n(...s):n()}catch(r){ja(r,t,e)}}function pn(n,t,e,s){if(yt(n)){const r=oo(n,t,e,s);return r&&tp(r)&&r.catch(i=>{ja(i,t,e)}),r}if(ft(n)){const r=[];for(let i=0;i<n.length;i++)r.push(pn(n[i],t,e,s));return r}}function ja(n,t,e,s=!0){const r=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||Bt;if(t){let l=t.parent;const u=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](n,u,c)===!1)return}l=l.parent}if(i){xn(),oo(i,null,10,[n,u,c]),Pn();return}}Yy(n,e,r,s,o)}function Yy(n,t,e,s=!0,r=!1){if(r)throw n;console.error(n)}const Te=[];let nn=-1;const gr=[];let Gn=null,lr=0;const Sp=Promise.resolve();let oa=null;function Qu(n){const t=oa||Sp;return n?t.then(this?n.bind(this):n):t}function Zy(n){let t=nn+1,e=Te.length;for(;t<e;){const s=t+e>>>1,r=Te[s],i=Bi(r);i<n||i===n&&r.flags&2?t=s+1:e=s}return t}function Xu(n){if(!(n.flags&1)){const t=Bi(n),e=Te[Te.length-1];!e||!(n.flags&2)&&t>=Bi(e)?Te.push(n):Te.splice(Zy(t),0,n),n.flags|=1,Rp()}}function Rp(){oa||(oa=Sp.then(Pp))}function tv(n){ft(n)?gr.push(...n):Gn&&n.id===-1?Gn.splice(lr+1,0,n):n.flags&1||(gr.push(n),n.flags|=1),Rp()}function qh(n,t,e=nn+1){for(;e<Te.length;e++){const s=Te[e];if(s&&s.flags&2){if(n&&s.id!==n.uid)continue;Te.splice(e,1),e--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function xp(n){if(gr.length){const t=[...new Set(gr)].sort((e,s)=>Bi(e)-Bi(s));if(gr.length=0,Gn){Gn.push(...t);return}for(Gn=t,lr=0;lr<Gn.length;lr++){const e=Gn[lr];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}Gn=null,lr=0}}const Bi=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Pp(n){try{for(nn=0;nn<Te.length;nn++){const t=Te[nn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),oo(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;nn<Te.length;nn++){const t=Te[nn];t&&(t.flags&=-2)}nn=-1,Te.length=0,xp(),oa=null,(Te.length||gr.length)&&Pp()}}let qe=null,Cp=null;function aa(n){const t=qe;return qe=n,Cp=n&&n.type.__scopeId||null,t}function ev(n,t=qe,e){if(!t||n._n)return n;const s=(...r)=>{s._d&&Zh(-1);const i=aa(t);let o;try{o=n(...r)}finally{aa(i),s._d&&Zh(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function _t(n,t){if(qe===null)return n;const e=Ha(qe),s=n.dirs||(n.dirs=[]);for(let r=0;r<t.length;r++){let[i,o,l,u=Bt]=t[r];i&&(yt(i)&&(i={mounted:i,updated:i}),i.deep&&bn(o),s.push({dir:i,instance:e,value:o,oldValue:void 0,arg:l,modifiers:u}))}return n}function ys(n,t,e,s){const r=n.dirs,i=t&&t.dirs;for(let o=0;o<r.length;o++){const l=r[o];i&&(l.oldValue=i[o].value);let u=l.dir[s];u&&(xn(),pn(u,e,8,[n.el,l,n,t]),Pn())}}const nv=Symbol("_vte"),sv=n=>n.__isTeleport,rv=Symbol("_leaveCb");function Ju(n,t){n.shapeFlag&6&&n.component?(n.transition=t,Ju(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function ao(n,t){return yt(n)?be({name:n.name},t,{setup:n}):n}function Vp(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const la=new WeakMap;function Ei(n,t,e,s,r=!1){if(ft(n)){n.forEach((O,k)=>Ei(O,t&&(ft(t)?t[k]:t),e,s,r));return}if(Ii(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Ei(n,t,e,s.component.subTree);return}const i=s.shapeFlag&4?Ha(s.component):s.el,o=r?null:i,{i:l,r:u}=n,c=t&&t.r,d=l.refs===Bt?l.refs={}:l.refs,p=l.setupState,y=Rt(p),A=p===Bt?Zf:O=>Vt(y,O);if(c!=null&&c!==u){if(zh(t),Zt(c))d[c]=null,A(c)&&(p[c]=null);else if(Qt(c)){c.value=null;const O=t;O.k&&(d[O.k]=null)}}if(yt(u))oo(u,l,12,[o,d]);else{const O=Zt(u),k=Qt(u);if(O||k){const R=()=>{if(n.f){const F=O?A(u)?p[u]:d[u]:u.value;if(r)ft(F)&&Uu(F,i);else if(ft(F))F.includes(i)||F.push(i);else if(O)d[u]=[i],A(u)&&(p[u]=d[u]);else{const Q=[i];u.value=Q,n.k&&(d[n.k]=Q)}}else O?(d[u]=o,A(u)&&(p[u]=o)):k&&(u.value=o,n.k&&(d[n.k]=o))};if(o){const F=()=>{R(),la.delete(n)};F.id=-1,la.set(n,F),Ve(F,e)}else zh(n),R()}}}function zh(n){const t=la.get(n);t&&(t.flags|=8,la.delete(n))}Ba().requestIdleCallback;Ba().cancelIdleCallback;const Ii=n=>!!n.type.__asyncLoader,Dp=n=>n.type.__isKeepAlive;function iv(n,t){kp(n,"a",t)}function ov(n,t){kp(n,"da",t)}function kp(n,t,e=we){const s=n.__wdc||(n.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(qa(t,s,e),e){let r=e.parent;for(;r&&r.parent;)Dp(r.parent.vnode)&&av(s,t,e,r),r=r.parent}}function av(n,t,e,s){const r=qa(t,n,s,!0);Np(()=>{Uu(s[t],r)},e)}function qa(n,t,e=we,s=!1){if(e){const r=e[n]||(e[n]=[]),i=t.__weh||(t.__weh=(...o)=>{xn();const l=lo(e),u=pn(t,e,n,o);return l(),Pn(),u});return s?r.unshift(i):r.push(i),i}}const Nn=n=>(t,e=we)=>{(!$i||n==="sp")&&qa(n,(...s)=>t(...s),e)},lv=Nn("bm"),Yu=Nn("m"),uv=Nn("bu"),cv=Nn("u"),hv=Nn("bum"),Np=Nn("um"),dv=Nn("sp"),fv=Nn("rtg"),pv=Nn("rtc");function mv(n,t=we){qa("ec",n,t)}const gv=Symbol.for("v-ndc");function Fs(n,t,e,s){let r;const i=e,o=ft(n);if(o||Zt(n)){const l=o&&Tn(n);let u=!1,c=!1;l&&(u=!Fe(n),c=Cn(n),n=Ua(n)),r=new Array(n.length);for(let d=0,p=n.length;d<p;d++)r[d]=t(u?c?Ir(Xe(n[d])):Xe(n[d]):n[d],d,void 0,i)}else if(typeof n=="number"){r=new Array(n);for(let l=0;l<n;l++)r[l]=t(l+1,l,void 0,i)}else if(jt(n))if(n[Symbol.iterator])r=Array.from(n,(l,u)=>t(l,u,void 0,i));else{const l=Object.keys(n);r=new Array(l.length);for(let u=0,c=l.length;u<c;u++){const d=l[u];r[u]=t(n[d],d,u,i)}}else r=[];return r}const tu=n=>n?nm(n)?Ha(n):tu(n.parent):null,Ti=be(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>tu(n.parent),$root:n=>tu(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Mp(n),$forceUpdate:n=>n.f||(n.f=()=>{Xu(n.update)}),$nextTick:n=>n.n||(n.n=Qu.bind(n.proxy)),$watch:n=>Pv.bind(n)}),Vl=(n,t)=>n!==Bt&&!n.__isScriptSetup&&Vt(n,t),_v={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:s,data:r,props:i,accessCache:o,type:l,appContext:u}=n;if(t[0]!=="$"){const y=o[t];if(y!==void 0)switch(y){case 1:return s[t];case 2:return r[t];case 4:return e[t];case 3:return i[t]}else{if(Vl(s,t))return o[t]=1,s[t];if(r!==Bt&&Vt(r,t))return o[t]=2,r[t];if(Vt(i,t))return o[t]=3,i[t];if(e!==Bt&&Vt(e,t))return o[t]=4,e[t];eu&&(o[t]=0)}}const c=Ti[t];let d,p;if(c)return t==="$attrs"&&_e(n.attrs,"get",""),c(n);if((d=l.__cssModules)&&(d=d[t]))return d;if(e!==Bt&&Vt(e,t))return o[t]=4,e[t];if(p=u.config.globalProperties,Vt(p,t))return p[t]},set({_:n},t,e){const{data:s,setupState:r,ctx:i}=n;return Vl(r,t)?(r[t]=e,!0):s!==Bt&&Vt(s,t)?(s[t]=e,!0):Vt(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(i[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:s,appContext:r,props:i,type:o}},l){let u;return!!(e[l]||n!==Bt&&l[0]!=="$"&&Vt(n,l)||Vl(t,l)||Vt(i,l)||Vt(s,l)||Vt(Ti,l)||Vt(r.config.globalProperties,l)||(u=o.__cssModules)&&u[l])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:Vt(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Kh(n){return ft(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let eu=!0;function yv(n){const t=Mp(n),e=n.proxy,s=n.ctx;eu=!1,t.beforeCreate&&Hh(t.beforeCreate,n,"bc");const{data:r,computed:i,methods:o,watch:l,provide:u,inject:c,created:d,beforeMount:p,mounted:y,beforeUpdate:A,updated:O,activated:k,deactivated:R,beforeDestroy:F,beforeUnmount:Q,destroyed:K,unmounted:X,render:st,renderTracked:ut,renderTriggered:w,errorCaptured:v,serverPrefetch:_,expose:I,inheritAttrs:E,components:x,directives:b,filters:Ut}=t;if(c&&vv(c,s,null),o)for(const W in o){const D=o[W];yt(D)&&(s[W]=D.bind(e))}if(r){const W=r.call(e,e);jt(W)&&(n.data=Er(W))}if(eu=!0,i)for(const W in i){const D=i[W],L=yt(D)?D.bind(e,e):yt(D.get)?D.get.bind(e,e):ln,V=!yt(D)&&yt(D.set)?D.set.bind(e):ln,Y=De({get:L,set:V});Object.defineProperty(s,W,{enumerable:!0,configurable:!0,get:()=>Y.value,set:Nt=>Y.value=Nt})}if(l)for(const W in l)Op(l[W],s,e,W);if(u){const W=yt(u)?u.call(e):u;Reflect.ownKeys(W).forEach(D=>{Av(D,W[D])})}d&&Hh(d,n,"c");function Ft(W,D){ft(D)?D.forEach(L=>W(L.bind(e))):D&&W(D.bind(e))}if(Ft(lv,p),Ft(Yu,y),Ft(uv,A),Ft(cv,O),Ft(iv,k),Ft(ov,R),Ft(mv,v),Ft(pv,ut),Ft(fv,w),Ft(hv,Q),Ft(Np,X),Ft(dv,_),ft(I))if(I.length){const W=n.exposed||(n.exposed={});I.forEach(D=>{Object.defineProperty(W,D,{get:()=>e[D],set:L=>e[D]=L,enumerable:!0})})}else n.exposed||(n.exposed={});st&&n.render===ln&&(n.render=st),E!=null&&(n.inheritAttrs=E),x&&(n.components=x),b&&(n.directives=b),_&&Vp(n)}function vv(n,t,e=ln){ft(n)&&(n=nu(n));for(const s in n){const r=n[s];let i;jt(r)?"default"in r?i=wi(r.from||s,r.default,!0):i=wi(r.from||s):i=wi(r),Qt(i)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[s]=i}}function Hh(n,t,e){pn(ft(n)?n.map(s=>s.bind(t.proxy)):n.bind(t.proxy),t,e)}function Op(n,t,e,s){let r=s.includes(".")?Bp(e,s):()=>e[s];if(Zt(n)){const i=t[n];yt(i)&&En(r,i)}else if(yt(n))En(r,n.bind(e));else if(jt(n))if(ft(n))n.forEach(i=>Op(i,t,e,s));else{const i=yt(n.handler)?n.handler.bind(e):t[n.handler];yt(i)&&En(r,i,n)}}function Mp(n){const t=n.type,{mixins:e,extends:s}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=n.appContext,l=i.get(t);let u;return l?u=l:!r.length&&!e&&!s?u=t:(u={},r.length&&r.forEach(c=>ua(u,c,o,!0)),ua(u,t,o)),jt(t)&&i.set(t,u),u}function ua(n,t,e,s=!1){const{mixins:r,extends:i}=t;i&&ua(n,i,e,!0),r&&r.forEach(o=>ua(n,o,e,!0));for(const o in t)if(!(s&&o==="expose")){const l=bv[o]||e&&e[o];n[o]=l?l(n[o],t[o]):t[o]}return n}const bv={data:Gh,props:Wh,emits:Wh,methods:hi,computed:hi,beforeCreate:Ie,created:Ie,beforeMount:Ie,mounted:Ie,beforeUpdate:Ie,updated:Ie,beforeDestroy:Ie,beforeUnmount:Ie,destroyed:Ie,unmounted:Ie,activated:Ie,deactivated:Ie,errorCaptured:Ie,serverPrefetch:Ie,components:hi,directives:hi,watch:Iv,provide:Gh,inject:Ev};function Gh(n,t){return t?n?function(){return be(yt(n)?n.call(this,this):n,yt(t)?t.call(this,this):t)}:t:n}function Ev(n,t){return hi(nu(n),nu(t))}function nu(n){if(ft(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Ie(n,t){return n?[...new Set([].concat(n,t))]:t}function hi(n,t){return n?be(Object.create(null),n,t):t}function Wh(n,t){return n?ft(n)&&ft(t)?[...new Set([...n,...t])]:be(Object.create(null),Kh(n),Kh(t??{})):t}function Iv(n,t){if(!n)return t;if(!t)return n;const e=be(Object.create(null),n);for(const s in t)e[s]=Ie(n[s],t[s]);return e}function Fp(){return{app:null,config:{isNativeTag:Zf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Tv=0;function wv(n,t){return function(s,r=null){yt(s)||(s=be({},s)),r!=null&&!jt(r)&&(r=null);const i=Fp(),o=new WeakSet,l=[];let u=!1;const c=i.app={_uid:Tv++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:ab,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&yt(d.install)?(o.add(d),d.install(c,...p)):yt(d)&&(o.add(d),d(c,...p))),c},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),c},component(d,p){return p?(i.components[d]=p,c):i.components[d]},directive(d,p){return p?(i.directives[d]=p,c):i.directives[d]},mount(d,p,y){if(!u){const A=c._ceVNode||un(s,r);return A.appContext=i,y===!0?y="svg":y===!1&&(y=void 0),n(A,d,y),u=!0,c._container=d,d.__vue_app__=c,Ha(A.component)}},onUnmount(d){l.push(d)},unmount(){u&&(pn(l,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(d,p){return i.provides[d]=p,c},runWithContext(d){const p=Ds;Ds=c;try{return d()}finally{Ds=p}}};return c}}let Ds=null;function Av(n,t){if(we){let e=we.provides;const s=we.parent&&we.parent.provides;s===e&&(e=we.provides=Object.create(s)),e[n]=t}}function wi(n,t,e=!1){const s=em();if(s||Ds){let r=Ds?Ds._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return e&&yt(t)?t.call(s&&s.proxy):t}}function Sv(){return!!(em()||Ds)}const Rv=Symbol.for("v-scx"),xv=()=>wi(Rv);function En(n,t,e){return Lp(n,t,e)}function Lp(n,t,e=Bt){const{immediate:s,deep:r,flush:i,once:o}=e,l=be({},e),u=t&&s||!t&&i!=="post";let c;if($i){if(i==="sync"){const A=xv();c=A.__watcherHandles||(A.__watcherHandles=[])}else if(!u){const A=()=>{};return A.stop=ln,A.resume=ln,A.pause=ln,A}}const d=we;l.call=(A,O,k)=>pn(A,d,O,k);let p=!1;i==="post"?l.scheduler=A=>{Ve(A,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(A,O)=>{O?A():Xu(A)}),l.augmentJob=A=>{t&&(A.flags|=4),p&&(A.flags|=2,d&&(A.id=d.uid,A.i=d))};const y=Jy(n,t,l);return $i&&(c?c.push(y):u&&y()),y}function Pv(n,t,e){const s=this.proxy,r=Zt(n)?n.includes(".")?Bp(s,n):()=>s[n]:n.bind(s,s);let i;yt(t)?i=t:(i=t.handler,e=t);const o=lo(this),l=Lp(r,i.bind(s),e);return o(),l}function Bp(n,t){const e=t.split(".");return()=>{let s=n;for(let r=0;r<e.length&&s;r++)s=s[e[r]];return s}}const Cv=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${ss(t)}Modifiers`]||n[`${Hs(t)}Modifiers`];function Vv(n,t,...e){if(n.isUnmounted)return;const s=n.vnode.props||Bt;let r=e;const i=t.startsWith("update:"),o=i&&Cv(s,t.slice(7));o&&(o.trim&&(r=e.map(d=>Zt(d)?d.trim():d)),o.number&&(r=e.map(La)));let l,u=s[l=Sl(t)]||s[l=Sl(ss(t))];!u&&i&&(u=s[l=Sl(Hs(t))]),u&&pn(u,n,6,r);const c=s[l+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[l])return;n.emitted[l]=!0,pn(c,n,6,r)}}const Dv=new WeakMap;function Up(n,t,e=!1){const s=e?Dv:t.emitsCache,r=s.get(n);if(r!==void 0)return r;const i=n.emits;let o={},l=!1;if(!yt(n)){const u=c=>{const d=Up(c,t,!0);d&&(l=!0,be(o,d))};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}return!i&&!l?(jt(n)&&s.set(n,null),null):(ft(i)?i.forEach(u=>o[u]=null):be(o,i),jt(n)&&s.set(n,o),o)}function za(n,t){return!n||!Na(t)?!1:(t=t.slice(2).replace(/Once$/,""),Vt(n,t[0].toLowerCase()+t.slice(1))||Vt(n,Hs(t))||Vt(n,t))}function Qh(n){const{type:t,vnode:e,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:l,emit:u,render:c,renderCache:d,props:p,data:y,setupState:A,ctx:O,inheritAttrs:k}=n,R=aa(n);let F,Q;try{if(e.shapeFlag&4){const X=r||s,st=X;F=rn(c.call(st,X,d,p,A,y,O)),Q=l}else{const X=t;F=rn(X.length>1?X(p,{attrs:l,slots:o,emit:u}):X(p,null)),Q=t.props?l:kv(l)}}catch(X){Ai.length=0,ja(X,n,1),F=un(rs)}let K=F;if(Q&&k!==!1){const X=Object.keys(Q),{shapeFlag:st}=K;X.length&&st&7&&(i&&X.some(Bu)&&(Q=Nv(Q,i)),K=Tr(K,Q,!1,!0))}return e.dirs&&(K=Tr(K,null,!1,!0),K.dirs=K.dirs?K.dirs.concat(e.dirs):e.dirs),e.transition&&Ju(K,e.transition),F=K,aa(R),F}const kv=n=>{let t;for(const e in n)(e==="class"||e==="style"||Na(e))&&((t||(t={}))[e]=n[e]);return t},Nv=(n,t)=>{const e={};for(const s in n)(!Bu(s)||!(s.slice(9)in t))&&(e[s]=n[s]);return e};function Ov(n,t,e){const{props:s,children:r,component:i}=n,{props:o,children:l,patchFlag:u}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&u>=0){if(u&1024)return!0;if(u&16)return s?Xh(s,o,c):!!o;if(u&8){const d=t.dynamicProps;for(let p=0;p<d.length;p++){const y=d[p];if(o[y]!==s[y]&&!za(c,y))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Xh(s,o,c):!0:!!o;return!1}function Xh(n,t,e){const s=Object.keys(t);if(s.length!==Object.keys(n).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(t[i]!==n[i]&&!za(e,i))return!0}return!1}function Mv({vnode:n,parent:t},e){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.el=n.el),s===n)(n=t.vnode).el=e,t=t.parent;else break}}const $p={},jp=()=>Object.create($p),qp=n=>Object.getPrototypeOf(n)===$p;function Fv(n,t,e,s=!1){const r={},i=jp();n.propsDefaults=Object.create(null),zp(n,t,r,i);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);e?n.props=s?r:$y(r):n.type.props?n.props=r:n.props=i,n.attrs=i}function Lv(n,t,e,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=n,l=Rt(r),[u]=n.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const d=n.vnode.dynamicProps;for(let p=0;p<d.length;p++){let y=d[p];if(za(n.emitsOptions,y))continue;const A=t[y];if(u)if(Vt(i,y))A!==i[y]&&(i[y]=A,c=!0);else{const O=ss(y);r[O]=su(u,l,O,A,n,!1)}else A!==i[y]&&(i[y]=A,c=!0)}}}else{zp(n,t,r,i)&&(c=!0);let d;for(const p in l)(!t||!Vt(t,p)&&((d=Hs(p))===p||!Vt(t,d)))&&(u?e&&(e[p]!==void 0||e[d]!==void 0)&&(r[p]=su(u,l,p,void 0,n,!0)):delete r[p]);if(i!==l)for(const p in i)(!t||!Vt(t,p))&&(delete i[p],c=!0)}c&&vn(n.attrs,"set","")}function zp(n,t,e,s){const[r,i]=n.propsOptions;let o=!1,l;if(t)for(let u in t){if(yi(u))continue;const c=t[u];let d;r&&Vt(r,d=ss(u))?!i||!i.includes(d)?e[d]=c:(l||(l={}))[d]=c:za(n.emitsOptions,u)||(!(u in s)||c!==s[u])&&(s[u]=c,o=!0)}if(i){const u=Rt(e),c=l||Bt;for(let d=0;d<i.length;d++){const p=i[d];e[p]=su(r,u,p,c[p],n,!Vt(c,p))}}return o}function su(n,t,e,s,r,i){const o=n[e];if(o!=null){const l=Vt(o,"default");if(l&&s===void 0){const u=o.default;if(o.type!==Function&&!o.skipFactory&&yt(u)){const{propsDefaults:c}=r;if(e in c)s=c[e];else{const d=lo(r);s=c[e]=u.call(null,t),d()}}else s=u;r.ce&&r.ce._setProp(e,s)}o[0]&&(i&&!l?s=!1:o[1]&&(s===""||s===Hs(e))&&(s=!0))}return s}const Bv=new WeakMap;function Kp(n,t,e=!1){const s=e?Bv:t.propsCache,r=s.get(n);if(r)return r;const i=n.props,o={},l=[];let u=!1;if(!yt(n)){const d=p=>{u=!0;const[y,A]=Kp(p,t,!0);be(o,y),A&&l.push(...A)};!e&&t.mixins.length&&t.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!i&&!u)return jt(n)&&s.set(n,pr),pr;if(ft(i))for(let d=0;d<i.length;d++){const p=ss(i[d]);Jh(p)&&(o[p]=Bt)}else if(i)for(const d in i){const p=ss(d);if(Jh(p)){const y=i[d],A=o[p]=ft(y)||yt(y)?{type:y}:be({},y),O=A.type;let k=!1,R=!0;if(ft(O))for(let F=0;F<O.length;++F){const Q=O[F],K=yt(Q)&&Q.name;if(K==="Boolean"){k=!0;break}else K==="String"&&(R=!1)}else k=yt(O)&&O.name==="Boolean";A[0]=k,A[1]=R,(k||Vt(A,"default"))&&l.push(p)}}const c=[o,l];return jt(n)&&s.set(n,c),c}function Jh(n){return n[0]!=="$"&&!yi(n)}const Zu=n=>n==="_"||n==="_ctx"||n==="$stable",tc=n=>ft(n)?n.map(rn):[rn(n)],Uv=(n,t,e)=>{if(t._n)return t;const s=ev((...r)=>tc(t(...r)),e);return s._c=!1,s},Hp=(n,t,e)=>{const s=n._ctx;for(const r in n){if(Zu(r))continue;const i=n[r];if(yt(i))t[r]=Uv(r,i,s);else if(i!=null){const o=tc(i);t[r]=()=>o}}},Gp=(n,t)=>{const e=tc(t);n.slots.default=()=>e},Wp=(n,t,e)=>{for(const s in t)(e||!Zu(s))&&(n[s]=t[s])},$v=(n,t,e)=>{const s=n.slots=jp();if(n.vnode.shapeFlag&32){const r=t._;r?(Wp(s,t,e),e&&rp(s,"_",r,!0)):Hp(t,s)}else t&&Gp(n,t)},jv=(n,t,e)=>{const{vnode:s,slots:r}=n;let i=!0,o=Bt;if(s.shapeFlag&32){const l=t._;l?e&&l===1?i=!1:Wp(r,t,e):(i=!t.$stable,Hp(t,r)),o=t}else t&&(Gp(n,t),o={default:1});if(i)for(const l in r)!Zu(l)&&o[l]==null&&delete r[l]},Ve=Gv;function qv(n){return zv(n)}function zv(n,t){const e=Ba();e.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:l,createComment:u,setText:c,setElementText:d,parentNode:p,nextSibling:y,setScopeId:A=ln,insertStaticContent:O}=n,k=(T,S,M,H=null,U=null,$=null,Z=void 0,z=null,q=!!S.dynamicChildren)=>{if(T===S)return;T&&!ii(T,S)&&(H=Xt(T),Nt(T,U,$,!0),T=null),S.patchFlag===-2&&(q=!1,S.dynamicChildren=null);const{type:j,ref:ct,shapeFlag:et}=S;switch(j){case Ka:R(T,S,M,H);break;case rs:F(T,S,M,H);break;case qo:T==null&&Q(S,M,H,Z);break;case ye:x(T,S,M,H,U,$,Z,z,q);break;default:et&1?st(T,S,M,H,U,$,Z,z,q):et&6?b(T,S,M,H,U,$,Z,z,q):(et&64||et&128)&&j.process(T,S,M,H,U,$,Z,z,q,gn)}ct!=null&&U?Ei(ct,T&&T.ref,$,S||T,!S):ct==null&&T&&T.ref!=null&&Ei(T.ref,null,$,T,!0)},R=(T,S,M,H)=>{if(T==null)s(S.el=l(S.children),M,H);else{const U=S.el=T.el;S.children!==T.children&&c(U,S.children)}},F=(T,S,M,H)=>{T==null?s(S.el=u(S.children||""),M,H):S.el=T.el},Q=(T,S,M,H)=>{[T.el,T.anchor]=O(T.children,S,M,H,T.el,T.anchor)},K=({el:T,anchor:S},M,H)=>{let U;for(;T&&T!==S;)U=y(T),s(T,M,H),T=U;s(S,M,H)},X=({el:T,anchor:S})=>{let M;for(;T&&T!==S;)M=y(T),r(T),T=M;r(S)},st=(T,S,M,H,U,$,Z,z,q)=>{if(S.type==="svg"?Z="svg":S.type==="math"&&(Z="mathml"),T==null)ut(S,M,H,U,$,Z,z,q);else{const j=T.el&&T.el._isVueCE?T.el:null;try{j&&j._beginPatch(),_(T,S,U,$,Z,z,q)}finally{j&&j._endPatch()}}},ut=(T,S,M,H,U,$,Z,z)=>{let q,j;const{props:ct,shapeFlag:et,transition:at,dirs:ht}=T;if(q=T.el=o(T.type,$,ct&&ct.is,ct),et&8?d(q,T.children):et&16&&v(T.children,q,null,H,U,Dl(T,$),Z,z),ht&&ys(T,null,H,"created"),w(q,T,T.scopeId,Z,H),ct){for(const Dt in ct)Dt!=="value"&&!yi(Dt)&&i(q,Dt,null,ct[Dt],$,H);"value"in ct&&i(q,"value",null,ct.value,$),(j=ct.onVnodeBeforeMount)&&en(j,H,T)}ht&&ys(T,null,H,"beforeMount");const Et=Kv(U,at);Et&&at.beforeEnter(q),s(q,S,M),((j=ct&&ct.onVnodeMounted)||Et||ht)&&Ve(()=>{j&&en(j,H,T),Et&&at.enter(q),ht&&ys(T,null,H,"mounted")},U)},w=(T,S,M,H,U)=>{if(M&&A(T,M),H)for(let $=0;$<H.length;$++)A(T,H[$]);if(U){let $=U.subTree;if(S===$||Jp($.type)&&($.ssContent===S||$.ssFallback===S)){const Z=U.vnode;w(T,Z,Z.scopeId,Z.slotScopeIds,U.parent)}}},v=(T,S,M,H,U,$,Z,z,q=0)=>{for(let j=q;j<T.length;j++){const ct=T[j]=z?Wn(T[j]):rn(T[j]);k(null,ct,S,M,H,U,$,Z,z)}},_=(T,S,M,H,U,$,Z)=>{const z=S.el=T.el;let{patchFlag:q,dynamicChildren:j,dirs:ct}=S;q|=T.patchFlag&16;const et=T.props||Bt,at=S.props||Bt;let ht;if(M&&vs(M,!1),(ht=at.onVnodeBeforeUpdate)&&en(ht,M,S,T),ct&&ys(S,T,M,"beforeUpdate"),M&&vs(M,!0),(et.innerHTML&&at.innerHTML==null||et.textContent&&at.textContent==null)&&d(z,""),j?I(T.dynamicChildren,j,z,M,H,Dl(S,U),$):Z||D(T,S,z,null,M,H,Dl(S,U),$,!1),q>0){if(q&16)E(z,et,at,M,U);else if(q&2&&et.class!==at.class&&i(z,"class",null,at.class,U),q&4&&i(z,"style",et.style,at.style,U),q&8){const Et=S.dynamicProps;for(let Dt=0;Dt<Et.length;Dt++){const St=Et[Dt],de=et[St],fe=at[St];(fe!==de||St==="value")&&i(z,St,de,fe,U,M)}}q&1&&T.children!==S.children&&d(z,S.children)}else!Z&&j==null&&E(z,et,at,M,U);((ht=at.onVnodeUpdated)||ct)&&Ve(()=>{ht&&en(ht,M,S,T),ct&&ys(S,T,M,"updated")},H)},I=(T,S,M,H,U,$,Z)=>{for(let z=0;z<S.length;z++){const q=T[z],j=S[z],ct=q.el&&(q.type===ye||!ii(q,j)||q.shapeFlag&198)?p(q.el):M;k(q,j,ct,null,H,U,$,Z,!0)}},E=(T,S,M,H,U)=>{if(S!==M){if(S!==Bt)for(const $ in S)!yi($)&&!($ in M)&&i(T,$,S[$],null,U,H);for(const $ in M){if(yi($))continue;const Z=M[$],z=S[$];Z!==z&&$!=="value"&&i(T,$,z,Z,U,H)}"value"in M&&i(T,"value",S.value,M.value,U)}},x=(T,S,M,H,U,$,Z,z,q)=>{const j=S.el=T?T.el:l(""),ct=S.anchor=T?T.anchor:l("");let{patchFlag:et,dynamicChildren:at,slotScopeIds:ht}=S;ht&&(z=z?z.concat(ht):ht),T==null?(s(j,M,H),s(ct,M,H),v(S.children||[],M,ct,U,$,Z,z,q)):et>0&&et&64&&at&&T.dynamicChildren?(I(T.dynamicChildren,at,M,U,$,Z,z),(S.key!=null||U&&S===U.subTree)&&Qp(T,S,!0)):D(T,S,M,ct,U,$,Z,z,q)},b=(T,S,M,H,U,$,Z,z,q)=>{S.slotScopeIds=z,T==null?S.shapeFlag&512?U.ctx.activate(S,M,H,Z,q):Ut(S,M,H,U,$,Z,q):ee(T,S,q)},Ut=(T,S,M,H,U,$,Z)=>{const z=T.component=eb(T,H,U);if(Dp(T)&&(z.ctx.renderer=gn),nb(z,!1,Z),z.asyncDep){if(U&&U.registerDep(z,Ft,Z),!T.el){const q=z.subTree=un(rs);F(null,q,S,M),T.placeholder=q.el}}else Ft(z,T,S,M,U,$,Z)},ee=(T,S,M)=>{const H=S.component=T.component;if(Ov(T,S,M))if(H.asyncDep&&!H.asyncResolved){W(H,S,M);return}else H.next=S,H.update();else S.el=T.el,H.vnode=S},Ft=(T,S,M,H,U,$,Z)=>{const z=()=>{if(T.isMounted){let{next:et,bu:at,u:ht,parent:Et,vnode:Dt}=T;{const Pe=Xp(T);if(Pe){et&&(et.el=Dt.el,W(T,et,Z)),Pe.asyncDep.then(()=>{T.isUnmounted||z()});return}}let St=et,de;vs(T,!1),et?(et.el=Dt.el,W(T,et,Z)):et=Dt,at&&jo(at),(de=et.props&&et.props.onVnodeBeforeUpdate)&&en(de,Et,et,Dt),vs(T,!0);const fe=Qh(T),xe=T.subTree;T.subTree=fe,k(xe,fe,p(xe.el),Xt(xe),T,U,$),et.el=fe.el,St===null&&Mv(T,fe.el),ht&&Ve(ht,U),(de=et.props&&et.props.onVnodeUpdated)&&Ve(()=>en(de,Et,et,Dt),U)}else{let et;const{el:at,props:ht}=S,{bm:Et,m:Dt,parent:St,root:de,type:fe}=T,xe=Ii(S);vs(T,!1),Et&&jo(Et),!xe&&(et=ht&&ht.onVnodeBeforeMount)&&en(et,St,S),vs(T,!0);{de.ce&&de.ce._def.shadowRoot!==!1&&de.ce._injectChildStyle(fe);const Pe=T.subTree=Qh(T);k(null,Pe,M,H,T,U,$),S.el=Pe.el}if(Dt&&Ve(Dt,U),!xe&&(et=ht&&ht.onVnodeMounted)){const Pe=S;Ve(()=>en(et,St,Pe),U)}(S.shapeFlag&256||St&&Ii(St.vnode)&&St.vnode.shapeFlag&256)&&T.a&&Ve(T.a,U),T.isMounted=!0,S=M=H=null}};T.scope.on();const q=T.effect=new hp(z);T.scope.off();const j=T.update=q.run.bind(q),ct=T.job=q.runIfDirty.bind(q);ct.i=T,ct.id=T.uid,q.scheduler=()=>Xu(ct),vs(T,!0),j()},W=(T,S,M)=>{S.component=T;const H=T.vnode.props;T.vnode=S,T.next=null,Lv(T,S.props,H,M),jv(T,S.children,M),xn(),qh(T),Pn()},D=(T,S,M,H,U,$,Z,z,q=!1)=>{const j=T&&T.children,ct=T?T.shapeFlag:0,et=S.children,{patchFlag:at,shapeFlag:ht}=S;if(at>0){if(at&128){V(j,et,M,H,U,$,Z,z,q);return}else if(at&256){L(j,et,M,H,U,$,Z,z,q);return}}ht&8?(ct&16&&Ye(j,U,$),et!==j&&d(M,et)):ct&16?ht&16?V(j,et,M,H,U,$,Z,z,q):Ye(j,U,$,!0):(ct&8&&d(M,""),ht&16&&v(et,M,H,U,$,Z,z,q))},L=(T,S,M,H,U,$,Z,z,q)=>{T=T||pr,S=S||pr;const j=T.length,ct=S.length,et=Math.min(j,ct);let at;for(at=0;at<et;at++){const ht=S[at]=q?Wn(S[at]):rn(S[at]);k(T[at],ht,M,null,U,$,Z,z,q)}j>ct?Ye(T,U,$,!0,!1,et):v(S,M,H,U,$,Z,z,q,et)},V=(T,S,M,H,U,$,Z,z,q)=>{let j=0;const ct=S.length;let et=T.length-1,at=ct-1;for(;j<=et&&j<=at;){const ht=T[j],Et=S[j]=q?Wn(S[j]):rn(S[j]);if(ii(ht,Et))k(ht,Et,M,null,U,$,Z,z,q);else break;j++}for(;j<=et&&j<=at;){const ht=T[et],Et=S[at]=q?Wn(S[at]):rn(S[at]);if(ii(ht,Et))k(ht,Et,M,null,U,$,Z,z,q);else break;et--,at--}if(j>et){if(j<=at){const ht=at+1,Et=ht<ct?S[ht].el:H;for(;j<=at;)k(null,S[j]=q?Wn(S[j]):rn(S[j]),M,Et,U,$,Z,z,q),j++}}else if(j>at)for(;j<=et;)Nt(T[j],U,$,!0),j++;else{const ht=j,Et=j,Dt=new Map;for(j=Et;j<=at;j++){const ue=S[j]=q?Wn(S[j]):rn(S[j]);ue.key!=null&&Dt.set(ue.key,j)}let St,de=0;const fe=at-Et+1;let xe=!1,Pe=0;const Ge=new Array(fe);for(j=0;j<fe;j++)Ge[j]=0;for(j=ht;j<=et;j++){const ue=T[j];if(de>=fe){Nt(ue,U,$,!0);continue}let ie;if(ue.key!=null)ie=Dt.get(ue.key);else for(St=Et;St<=at;St++)if(Ge[St-Et]===0&&ii(ue,S[St])){ie=St;break}ie===void 0?Nt(ue,U,$,!0):(Ge[ie-Et]=j+1,ie>=Pe?Pe=ie:xe=!0,k(ue,S[ie],M,null,U,$,Z,z,q),de++)}const Xs=xe?Hv(Ge):pr;for(St=Xs.length-1,j=fe-1;j>=0;j--){const ue=Et+j,ie=S[ue],qr=S[ue+1],fs=ue+1<ct?qr.el||qr.placeholder:H;Ge[j]===0?k(null,ie,M,fs,U,$,Z,z,q):xe&&(St<0||j!==Xs[St]?Y(ie,M,fs,2):St--)}}},Y=(T,S,M,H,U=null)=>{const{el:$,type:Z,transition:z,children:q,shapeFlag:j}=T;if(j&6){Y(T.component.subTree,S,M,H);return}if(j&128){T.suspense.move(S,M,H);return}if(j&64){Z.move(T,S,M,gn);return}if(Z===ye){s($,S,M);for(let et=0;et<q.length;et++)Y(q[et],S,M,H);s(T.anchor,S,M);return}if(Z===qo){K(T,S,M);return}if(H!==2&&j&1&&z)if(H===0)z.beforeEnter($),s($,S,M),Ve(()=>z.enter($),U);else{const{leave:et,delayLeave:at,afterLeave:ht}=z,Et=()=>{T.ctx.isUnmounted?r($):s($,S,M)},Dt=()=>{$._isLeaving&&$[rv](!0),et($,()=>{Et(),ht&&ht()})};at?at($,Et,Dt):Dt()}else s($,S,M)},Nt=(T,S,M,H=!1,U=!1)=>{const{type:$,props:Z,ref:z,children:q,dynamicChildren:j,shapeFlag:ct,patchFlag:et,dirs:at,cacheIndex:ht}=T;if(et===-2&&(U=!1),z!=null&&(xn(),Ei(z,null,M,T,!0),Pn()),ht!=null&&(S.renderCache[ht]=void 0),ct&256){S.ctx.deactivate(T);return}const Et=ct&1&&at,Dt=!Ii(T);let St;if(Dt&&(St=Z&&Z.onVnodeBeforeUnmount)&&en(St,S,T),ct&6)hs(T.component,M,H);else{if(ct&128){T.suspense.unmount(M,H);return}Et&&ys(T,null,S,"beforeUnmount"),ct&64?T.type.remove(T,S,M,gn,H):j&&!j.hasOnce&&($!==ye||et>0&&et&64)?Ye(j,S,M,!1,!0):($===ye&&et&384||!U&&ct&16)&&Ye(q,S,M),H&&Be(T)}(Dt&&(St=Z&&Z.onVnodeUnmounted)||Et)&&Ve(()=>{St&&en(St,S,T),Et&&ys(T,null,S,"unmounted")},M)},Be=T=>{const{type:S,el:M,anchor:H,transition:U}=T;if(S===ye){Je(M,H);return}if(S===qo){X(T);return}const $=()=>{r(M),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(T.shapeFlag&1&&U&&!U.persisted){const{leave:Z,delayLeave:z}=U,q=()=>Z(M,$);z?z(T.el,$,q):q()}else $()},Je=(T,S)=>{let M;for(;T!==S;)M=y(T),r(T),T=M;r(S)},hs=(T,S,M)=>{const{bum:H,scope:U,job:$,subTree:Z,um:z,m:q,a:j}=T;Yh(q),Yh(j),H&&jo(H),U.stop(),$&&($.flags|=8,Nt(Z,T,S,M)),z&&Ve(z,S),Ve(()=>{T.isUnmounted=!0},S)},Ye=(T,S,M,H=!1,U=!1,$=0)=>{for(let Z=$;Z<T.length;Z++)Nt(T[Z],S,M,H,U)},Xt=T=>{if(T.shapeFlag&6)return Xt(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const S=y(T.anchor||T.el),M=S&&S[nv];return M?y(M):S};let Ue=!1;const ds=(T,S,M)=>{T==null?S._vnode&&Nt(S._vnode,null,null,!0):k(S._vnode||null,T,S,null,null,null,M),S._vnode=T,Ue||(Ue=!0,qh(),xp(),Ue=!1)},gn={p:k,um:Nt,m:Y,r:Be,mt:Ut,mc:v,pc:D,pbc:I,n:Xt,o:n};return{render:ds,hydrate:void 0,createApp:wv(ds)}}function Dl({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function vs({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Kv(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Qp(n,t,e=!1){const s=n.children,r=t.children;if(ft(s)&&ft(r))for(let i=0;i<s.length;i++){const o=s[i];let l=r[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[i]=Wn(r[i]),l.el=o.el),!e&&l.patchFlag!==-2&&Qp(o,l)),l.type===Ka&&l.patchFlag!==-1&&(l.el=o.el),l.type===rs&&!l.el&&(l.el=o.el)}}function Hv(n){const t=n.slice(),e=[0];let s,r,i,o,l;const u=n.length;for(s=0;s<u;s++){const c=n[s];if(c!==0){if(r=e[e.length-1],n[r]<c){t[s]=r,e.push(s);continue}for(i=0,o=e.length-1;i<o;)l=i+o>>1,n[e[l]]<c?i=l+1:o=l;c<n[e[i]]&&(i>0&&(t[s]=e[i-1]),e[i]=s)}}for(i=e.length,o=e[i-1];i-- >0;)e[i]=o,o=t[o];return e}function Xp(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Xp(t)}function Yh(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}const Jp=n=>n.__isSuspense;function Gv(n,t){t&&t.pendingBranch?ft(n)?t.effects.push(...n):t.effects.push(n):tv(n)}const ye=Symbol.for("v-fgt"),Ka=Symbol.for("v-txt"),rs=Symbol.for("v-cmt"),qo=Symbol.for("v-stc"),Ai=[];let Ne=null;function ot(n=!1){Ai.push(Ne=n?null:[])}function Wv(){Ai.pop(),Ne=Ai[Ai.length-1]||null}let Ui=1;function Zh(n,t=!1){Ui+=n,n<0&&Ne&&t&&(Ne.hasOnce=!0)}function Yp(n){return n.dynamicChildren=Ui>0?Ne||pr:null,Wv(),Ui>0&&Ne&&Ne.push(n),n}function dt(n,t,e,s,r,i){return Yp(m(n,t,e,s,r,i,!0))}function di(n,t,e,s,r){return Yp(un(n,t,e,s,r,!0))}function Zp(n){return n?n.__v_isVNode===!0:!1}function ii(n,t){return n.type===t.type&&n.key===t.key}const tm=({key:n})=>n??null,zo=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?Zt(n)||Qt(n)||yt(n)?{i:qe,r:n,k:t,f:!!e}:n:null);function m(n,t=null,e=null,s=0,r=null,i=n===ye?0:1,o=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&tm(t),ref:t&&zo(t),scopeId:Cp,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:qe};return l?(ec(u,e),i&128&&n.normalize(u)):e&&(u.shapeFlag|=Zt(e)?8:16),Ui>0&&!o&&Ne&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&Ne.push(u),u}const un=Qv;function Qv(n,t=null,e=null,s=0,r=null,i=!1){if((!n||n===gv)&&(n=rs),Zp(n)){const l=Tr(n,t,!0);return e&&ec(l,e),Ui>0&&!i&&Ne&&(l.shapeFlag&6?Ne[Ne.indexOf(n)]=l:Ne.push(l)),l.patchFlag=-2,l}if(ob(n)&&(n=n.__vccOpts),t){t=Xv(t);let{class:l,style:u}=t;l&&!Zt(l)&&(t.class=$e(l)),jt(u)&&($a(u)&&!ft(u)&&(u=be({},u)),t.style=$u(u))}const o=Zt(n)?1:Jp(n)?128:sv(n)?64:jt(n)?4:yt(n)?2:0;return m(n,t,e,s,r,o,i,!0)}function Xv(n){return n?$a(n)||qp(n)?be({},n):n:null}function Tr(n,t,e=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:l,transition:u}=n,c=t?Yv(r||{},t):r,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&tm(c),ref:t&&t.ref?e&&i?ft(i)?i.concat(zo(t)):[i,zo(t)]:zo(t):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==ye?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:u,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Tr(n.ssContent),ssFallback:n.ssFallback&&Tr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return u&&s&&Ju(d,u.clone(d)),d}function Ps(n=" ",t=0){return un(Ka,null,n,t)}function Jv(n,t){const e=un(qo,null,n);return e.staticCount=t,e}function xt(n="",t=!1){return t?(ot(),di(rs,null,n)):un(rs,null,n)}function rn(n){return n==null||typeof n=="boolean"?un(rs):ft(n)?un(ye,null,n.slice()):Zp(n)?Wn(n):un(Ka,null,String(n))}function Wn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Tr(n)}function ec(n,t){let e=0;const{shapeFlag:s}=n;if(t==null)t=null;else if(ft(t))e=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),ec(n,r()),r._c&&(r._d=!0));return}else{e=32;const r=t._;!r&&!qp(t)?t._ctx=qe:r===3&&qe&&(qe.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else yt(t)?(t={default:t,_ctx:qe},e=32):(t=String(t),s&64?(e=16,t=[Ps(t)]):e=8);n.children=t,n.shapeFlag|=e}function Yv(...n){const t={};for(let e=0;e<n.length;e++){const s=n[e];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=$e([t.class,s.class]));else if(r==="style")t.style=$u([t.style,s.style]);else if(Na(r)){const i=t[r],o=s[r];o&&i!==o&&!(ft(i)&&i.includes(o))&&(t[r]=i?[].concat(i,o):o)}else r!==""&&(t[r]=s[r])}return t}function en(n,t,e,s=null){pn(n,t,7,[e,s])}const Zv=Fp();let tb=0;function eb(n,t,e){const s=n.type,r=(t?t.appContext:n.appContext)||Zv,i={uid:tb++,vnode:n,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new lp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Kp(s,r),emitsOptions:Up(s,r),emit:null,emitted:null,propsDefaults:Bt,inheritAttrs:s.inheritAttrs,ctx:Bt,data:Bt,props:Bt,attrs:Bt,slots:Bt,refs:Bt,setupState:Bt,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Vv.bind(null,i),n.ce&&n.ce(i),i}let we=null;const em=()=>we||qe;let ca,ru;{const n=Ba(),t=(e,s)=>{let r;return(r=n[e])||(r=n[e]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};ca=t("__VUE_INSTANCE_SETTERS__",e=>we=e),ru=t("__VUE_SSR_SETTERS__",e=>$i=e)}const lo=n=>{const t=we;return ca(n),n.scope.on(),()=>{n.scope.off(),ca(t)}},td=()=>{we&&we.scope.off(),ca(null)};function nm(n){return n.vnode.shapeFlag&4}let $i=!1;function nb(n,t=!1,e=!1){t&&ru(t);const{props:s,children:r}=n.vnode,i=nm(n);Fv(n,s,i,t),$v(n,r,e||t);const o=i?sb(n,t):void 0;return t&&ru(!1),o}function sb(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,_v);const{setup:s}=e;if(s){xn();const r=n.setupContext=s.length>1?ib(n):null,i=lo(n),o=oo(s,n,0,[n.props,r]),l=tp(o);if(Pn(),i(),(l||n.sp)&&!Ii(n)&&Vp(n),l){if(o.then(td,td),t)return o.then(u=>{ed(n,u)}).catch(u=>{ja(u,n,0)});n.asyncDep=o}else ed(n,o)}else sm(n)}function ed(n,t,e){yt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:jt(t)&&(n.setupState=Ap(t)),sm(n)}function sm(n,t,e){const s=n.type;n.render||(n.render=s.render||ln);{const r=lo(n);xn();try{yv(n)}finally{Pn(),r()}}}const rb={get(n,t){return _e(n,"get",""),n[t]}};function ib(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,rb),slots:n.slots,emit:n.emit,expose:t}}function Ha(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Ap(Wu(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Ti)return Ti[e](n)},has(t,e){return e in t||e in Ti}})):n.proxy}function ob(n){return yt(n)&&"__vccOpts"in n}const De=(n,t)=>Qy(n,t,$i),ab="3.5.25";/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let iu;const nd=typeof window<"u"&&window.trustedTypes;if(nd)try{iu=nd.createPolicy("vue",{createHTML:n=>n})}catch{}const rm=iu?n=>iu.createHTML(n):n=>n,lb="http://www.w3.org/2000/svg",ub="http://www.w3.org/1998/Math/MathML",yn=typeof document<"u"?document:null,sd=yn&&yn.createElement("template"),cb={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,s)=>{const r=t==="svg"?yn.createElementNS(lb,n):t==="mathml"?yn.createElementNS(ub,n):e?yn.createElement(n,{is:e}):yn.createElement(n);return n==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:n=>yn.createTextNode(n),createComment:n=>yn.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>yn.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,s,r,i){const o=e?e.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),e),!(r===i||!(r=r.nextSibling)););else{sd.innerHTML=rm(s==="svg"?`<svg>${n}</svg>`:s==="mathml"?`<math>${n}</math>`:n);const l=sd.content;if(s==="svg"||s==="mathml"){const u=l.firstChild;for(;u.firstChild;)l.appendChild(u.firstChild);l.removeChild(u)}t.insertBefore(l,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},hb=Symbol("_vtc");function db(n,t,e){const s=n[hb];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const rd=Symbol("_vod"),fb=Symbol("_vsh"),pb=Symbol(""),mb=/(?:^|;)\s*display\s*:/;function gb(n,t,e){const s=n.style,r=Zt(e);let i=!1;if(e&&!r){if(t)if(Zt(t))for(const o of t.split(";")){const l=o.slice(0,o.indexOf(":")).trim();e[l]==null&&Ko(s,l,"")}else for(const o in t)e[o]==null&&Ko(s,o,"");for(const o in e)o==="display"&&(i=!0),Ko(s,o,e[o])}else if(r){if(t!==e){const o=s[pb];o&&(e+=";"+o),s.cssText=e,i=mb.test(e)}}else t&&n.removeAttribute("style");rd in n&&(n[rd]=i?s.display:"",n[fb]&&(s.display="none"))}const id=/\s*!important$/;function Ko(n,t,e){if(ft(e))e.forEach(s=>Ko(n,t,s));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const s=_b(n,t);id.test(e)?n.setProperty(Hs(s),e.replace(id,""),"important"):n[s]=e}}const od=["Webkit","Moz","ms"],kl={};function _b(n,t){const e=kl[t];if(e)return e;let s=ss(t);if(s!=="filter"&&s in n)return kl[t]=s;s=sp(s);for(let r=0;r<od.length;r++){const i=od[r]+s;if(i in n)return kl[t]=i}return t}const ad="http://www.w3.org/1999/xlink";function ld(n,t,e,s,r,i=yy(t)){s&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(ad,t.slice(6,t.length)):n.setAttributeNS(ad,t,e):e==null||i&&!ip(e)?n.removeAttribute(t):n.setAttribute(t,i?"":fn(e)?String(e):e)}function ud(n,t,e,s,r){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?rm(e):e);return}const i=n.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?n.getAttribute("value")||"":n.value,u=e==null?n.type==="checkbox"?"on":"":String(e);(l!==u||!("_value"in n))&&(n.value=u),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const l=typeof n[t];l==="boolean"?e=ip(e):e==null&&l==="string"?(e="",o=!0):l==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(r||t)}function Qn(n,t,e,s){n.addEventListener(t,e,s)}function yb(n,t,e,s){n.removeEventListener(t,e,s)}const cd=Symbol("_vei");function vb(n,t,e,s,r=null){const i=n[cd]||(n[cd]={}),o=i[t];if(s&&o)o.value=s;else{const[l,u]=bb(t);if(s){const c=i[t]=Tb(s,r);Qn(n,l,c,u)}else o&&(yb(n,l,o,u),i[t]=void 0)}}const hd=/(?:Once|Passive|Capture)$/;function bb(n){let t;if(hd.test(n)){t={};let s;for(;s=n.match(hd);)n=n.slice(0,n.length-s[0].length),t[s[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Hs(n.slice(2)),t]}let Nl=0;const Eb=Promise.resolve(),Ib=()=>Nl||(Eb.then(()=>Nl=0),Nl=Date.now());function Tb(n,t){const e=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=e.attached)return;pn(wb(s,e.value),t,5,[s])};return e.value=n,e.attached=Ib(),e}function wb(n,t){if(ft(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const dd=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Ab=(n,t,e,s,r,i)=>{const o=r==="svg";t==="class"?db(n,s,o):t==="style"?gb(n,e,s):Na(t)?Bu(t)||vb(n,t,e,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Sb(n,t,s,o))?(ud(n,t,s),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&ld(n,t,s,o,i,t!=="value")):n._isVueCE&&(/[A-Z]/.test(t)||!Zt(s))?ud(n,ss(t),s,i,t):(t==="true-value"?n._trueValue=s:t==="false-value"&&(n._falseValue=s),ld(n,t,s,o))};function Sb(n,t,e,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in n&&dd(t)&&yt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return dd(t)&&Zt(e)?!1:t in n}const wr=n=>{const t=n.props["onUpdate:modelValue"]||!1;return ft(t)?e=>jo(t,e):t};function Rb(n){n.target.composing=!0}function fd(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const wn=Symbol("_assign");function pd(n,t,e){return t&&(n=n.trim()),e&&(n=La(n)),n}const wt={created(n,{modifiers:{lazy:t,trim:e,number:s}},r){n[wn]=wr(r);const i=s||r.props&&r.props.type==="number";Qn(n,t?"change":"input",o=>{o.target.composing||n[wn](pd(n.value,e,i))}),(e||i)&&Qn(n,"change",()=>{n.value=pd(n.value,e,i)}),t||(Qn(n,"compositionstart",Rb),Qn(n,"compositionend",fd),Qn(n,"change",fd))},mounted(n,{value:t}){n.value=t??""},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:s,trim:r,number:i}},o){if(n[wn]=wr(o),n.composing)return;const l=(i||n.type==="number")&&!/^0\d/.test(n.value)?La(n.value):n.value,u=t??"";l!==u&&(document.activeElement===n&&n.type!=="range"&&(s&&t===e||r&&n.value.trim()===u)||(n.value=u))}},Do={created(n,{value:t},e){n.checked=br(t,e.props.value),n[wn]=wr(e),Qn(n,"change",()=>{n[wn](ji(n))})},beforeUpdate(n,{value:t,oldValue:e},s){n[wn]=wr(s),t!==e&&(n.checked=br(t,s.props.value))}},ha={deep:!0,created(n,{value:t,modifiers:{number:e}},s){const r=Oa(t);Qn(n,"change",()=>{const i=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>e?La(ji(o)):ji(o));n[wn](n.multiple?r?new Set(i):i:i[0]),n._assigning=!0,Qu(()=>{n._assigning=!1})}),n[wn]=wr(s)},mounted(n,{value:t}){md(n,t)},beforeUpdate(n,t,e){n[wn]=wr(e)},updated(n,{value:t}){n._assigning||md(n,t)}};function md(n,t){const e=n.multiple,s=ft(t);if(!(e&&!s&&!Oa(t))){for(let r=0,i=n.options.length;r<i;r++){const o=n.options[r],l=ji(o);if(e)if(s){const u=typeof l;u==="string"||u==="number"?o.selected=t.some(c=>String(c)===String(l)):o.selected=by(t,l)>-1}else o.selected=t.has(l);else if(br(ji(o),t)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!e&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function ji(n){return"_value"in n?n._value:n.value}const xb=["ctrl","shift","alt","meta"],Pb={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>xb.some(e=>n[`${e}Key`]&&!t.includes(e))},Si=(n,t)=>{const e=n._withMods||(n._withMods={}),s=t.join(".");return e[s]||(e[s]=(r,...i)=>{for(let o=0;o<t.length;o++){const l=Pb[t[o]];if(l&&l(r,t))return}return n(r,...i)})},Cb=be({patchProp:Ab},cb);let gd;function Vb(){return gd||(gd=qv(Cb))}const Db=(...n)=>{const t=Vb().createApp(...n),{mount:e}=t;return t.mount=s=>{const r=Nb(s);if(!r)return;const i=t._component;!yt(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=e(r,!1,kb(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function kb(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Nb(n){return Zt(n)?document.querySelector(n):n}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let im;const Ga=n=>im=n,om=Symbol();function ou(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var Ri;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Ri||(Ri={}));function Ob(){const n=up(!0),t=n.run(()=>Pt({}));let e=[],s=[];const r=Wu({install(i){Ga(r),r._a=i,i.provide(om,r),i.config.globalProperties.$pinia=r,s.forEach(o=>e.push(o)),s=[]},use(i){return this._a?e.push(i):s.push(i),this},_p:e,_a:null,_e:n,_s:new Map,state:t});return r}const am=()=>{};function _d(n,t,e,s=am){n.push(t);const r=()=>{const i=n.indexOf(t);i>-1&&(n.splice(i,1),s())};return!e&&cp()&&Ey(r),r}function er(n,...t){n.slice().forEach(e=>{e(...t)})}const Mb=n=>n(),yd=Symbol(),Ol=Symbol();function au(n,t){n instanceof Map&&t instanceof Map?t.forEach((e,s)=>n.set(s,e)):n instanceof Set&&t instanceof Set&&t.forEach(n.add,n);for(const e in t){if(!t.hasOwnProperty(e))continue;const s=t[e],r=n[e];ou(r)&&ou(s)&&n.hasOwnProperty(e)&&!Qt(s)&&!Tn(s)?n[e]=au(r,s):n[e]=s}return n}const Fb=Symbol();function Lb(n){return!ou(n)||!n.hasOwnProperty(Fb)}const{assign:Kn}=Object;function Bb(n){return!!(Qt(n)&&n.effect)}function Ub(n,t,e,s){const{state:r,actions:i,getters:o}=t,l=e.state.value[n];let u;function c(){l||(e.state.value[n]=r?r():{});const d=Ky(e.state.value[n]);return Kn(d,i,Object.keys(o||{}).reduce((p,y)=>(p[y]=Wu(De(()=>{Ga(e);const A=e._s.get(n);return o[y].call(A,A)})),p),{}))}return u=lm(n,c,t,e,s,!0),u}function lm(n,t,e={},s,r,i){let o;const l=Kn({actions:{}},e),u={deep:!0};let c,d,p=[],y=[],A;const O=s.state.value[n];!i&&!O&&(s.state.value[n]={}),Pt({});let k;function R(v){let _;c=d=!1,typeof v=="function"?(v(s.state.value[n]),_={type:Ri.patchFunction,storeId:n,events:A}):(au(s.state.value[n],v),_={type:Ri.patchObject,payload:v,storeId:n,events:A});const I=k=Symbol();Qu().then(()=>{k===I&&(c=!0)}),d=!0,er(p,_,s.state.value[n])}const F=i?function(){const{state:_}=e,I=_?_():{};this.$patch(E=>{Kn(E,I)})}:am;function Q(){o.stop(),p=[],y=[],s._s.delete(n)}const K=(v,_="")=>{if(yd in v)return v[Ol]=_,v;const I=function(){Ga(s);const E=Array.from(arguments),x=[],b=[];function Ut(W){x.push(W)}function ee(W){b.push(W)}er(y,{args:E,name:I[Ol],store:st,after:Ut,onError:ee});let Ft;try{Ft=v.apply(this&&this.$id===n?this:st,E)}catch(W){throw er(b,W),W}return Ft instanceof Promise?Ft.then(W=>(er(x,W),W)).catch(W=>(er(b,W),Promise.reject(W))):(er(x,Ft),Ft)};return I[yd]=!0,I[Ol]=_,I},X={_p:s,$id:n,$onAction:_d.bind(null,y),$patch:R,$reset:F,$subscribe(v,_={}){const I=_d(p,v,_.detached,()=>E()),E=o.run(()=>En(()=>s.state.value[n],x=>{(_.flush==="sync"?d:c)&&v({storeId:n,type:Ri.direct,events:A},x)},Kn({},u,_)));return I},$dispose:Q},st=Er(X);s._s.set(n,st);const w=(s._a&&s._a.runWithContext||Mb)(()=>s._e.run(()=>(o=up()).run(()=>t({action:K}))));for(const v in w){const _=w[v];if(Qt(_)&&!Bb(_)||Tn(_))i||(O&&Lb(_)&&(Qt(_)?_.value=O[v]:au(_,O[v])),s.state.value[n][v]=_);else if(typeof _=="function"){const I=K(_,v);w[v]=I,l.actions[v]=_}}return Kn(st,w),Kn(Rt(st),w),Object.defineProperty(st,"$state",{get:()=>s.state.value[n],set:v=>{R(_=>{Kn(_,v)})}}),s._p.forEach(v=>{Kn(st,o.run(()=>v({store:st,app:s._a,pinia:s,options:l})))}),O&&i&&e.hydrate&&e.hydrate(st.$state,O),c=!0,d=!0,st}/*! #__NO_SIDE_EFFECTS__ */function $b(n,t,e){let s,r;const i=typeof t=="function";s=n,r=i?e:t;function o(l,u){const c=Sv();return l=l||(c?wi(om,null):null),l&&Ga(l),l=im,l._s.has(s)||(i?lm(s,t,r,l):Ub(s,r,l)),l._s.get(s)}return o.$id=s,o}const jb=()=>{};var vd={};/**
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
 */const um=function(n){const t=[];let e=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?t[e++]=r:r<2048?(t[e++]=r>>6|192,t[e++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),t[e++]=r>>18|240,t[e++]=r>>12&63|128,t[e++]=r>>6&63|128,t[e++]=r&63|128):(t[e++]=r>>12|224,t[e++]=r>>6&63|128,t[e++]=r&63|128)}return t},qb=function(n){const t=[];let e=0,s=0;for(;e<n.length;){const r=n[e++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[e++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[e++],o=n[e++],l=n[e++],u=((r&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;t[s++]=String.fromCharCode(55296+(u>>10)),t[s++]=String.fromCharCode(56320+(u&1023))}else{const i=n[e++],o=n[e++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},cm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],o=r+1<n.length,l=o?n[r+1]:0,u=r+2<n.length,c=u?n[r+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let y=(l&15)<<2|c>>6,A=c&63;u||(A=64,o||(y=64)),s.push(e[d],e[p],e[y],e[A])}return s.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(um(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):qb(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=e[n.charAt(r++)],l=r<n.length?e[n.charAt(r)]:0;++r;const c=r<n.length?e[n.charAt(r)]:64;++r;const p=r<n.length?e[n.charAt(r)]:64;if(++r,i==null||l==null||c==null||p==null)throw new zb;const y=i<<2|l>>4;if(s.push(y),c!==64){const A=l<<4&240|c>>2;if(s.push(A),p!==64){const O=c<<6&192|p;s.push(O)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class zb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Kb=function(n){const t=um(n);return cm.encodeByteArray(t,!0)},da=function(n){return Kb(n).replace(/\./g,"")},Hb=function(n){try{return cm.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function hm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Gb=()=>hm().__FIREBASE_DEFAULTS__,Wb=()=>{if(typeof process>"u"||typeof vd>"u")return;const n=vd.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Qb=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Hb(n[1]);return t&&JSON.parse(t)},nc=()=>{try{return jb()||Gb()||Wb()||Qb()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Xb=n=>{var t,e;return(e=(t=nc())==null?void 0:t.emulatorHosts)==null?void 0:e[n]},Jb=n=>{const t=Xb(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),s]:[t.substring(0,e),s]},dm=()=>{var n;return(n=nc())==null?void 0:n.config};/**
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
 */class Yb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,s)=>{e?this.reject(e):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,s))}}}/**
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
 */function sc(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Zb(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function tE(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},s=t||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[da(JSON.stringify(e)),da(JSON.stringify(o)),""].join(".")}const xi={};function eE(){const n={prod:[],emulator:[]};for(const t of Object.keys(xi))xi[t]?n.emulator.push(t):n.prod.push(t);return n}function nE(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let bd=!1;function sE(n,t){if(typeof window>"u"||typeof document>"u"||!sc(window.location.host)||xi[n]===t||xi[n]||bd)return;xi[n]=t;function e(y){return`__firebase__banner__${y}`}const s="__firebase__banner",i=eE().prod.length>0;function o(){const y=document.getElementById(s);y&&y.remove()}function l(y){y.style.display="flex",y.style.background="#7faaf0",y.style.position="fixed",y.style.bottom="5px",y.style.left="5px",y.style.padding=".5em",y.style.borderRadius="5px",y.style.alignItems="center"}function u(y,A){y.setAttribute("width","24"),y.setAttribute("id",A),y.setAttribute("height","24"),y.setAttribute("viewBox","0 0 24 24"),y.setAttribute("fill","none"),y.style.marginLeft="-6px"}function c(){const y=document.createElement("span");return y.style.cursor="pointer",y.style.marginLeft="16px",y.style.fontSize="24px",y.innerHTML=" &times;",y.onclick=()=>{bd=!0,o()},y}function d(y,A){y.setAttribute("id",A),y.innerText="Learn more",y.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",y.setAttribute("target","__blank"),y.style.paddingLeft="5px",y.style.textDecoration="underline"}function p(){const y=nE(s),A=e("text"),O=document.getElementById(A)||document.createElement("span"),k=e("learnmore"),R=document.getElementById(k)||document.createElement("a"),F=e("preprendIcon"),Q=document.getElementById(F)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(y.created){const K=y.element;l(K),d(R,k);const X=c();u(Q,F),K.append(Q,O,R,X),document.body.appendChild(K)}i?(O.innerText="Preview backend disconnected.",Q.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(Q.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,O.innerText="Preview backend running in this workspace."),O.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function fa(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fm(){var t;const n=(t=nc())==null?void 0:t.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function pm(){return!fm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function mm(){return!fm()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function gm(){try{return typeof indexedDB=="object"}catch{return!1}}function rE(){return new Promise((n,t)=>{try{let e=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),e||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{e=!1},r.onerror=()=>{var i;t(((i=r.error)==null?void 0:i.message)||"")}}catch(e){t(e)}})}/**
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
 */const iE="FirebaseError";class Br extends Error{constructor(t,e,s){super(e),this.code=t,this.customData=s,this.name=iE,Object.setPrototypeOf(this,Br.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_m.prototype.create)}}class _m{constructor(t,e,s){this.service=t,this.serviceName=e,this.errors=s}create(t,...e){const s=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?oE(i,s):"Error",l=`${this.serviceName}: ${o} (${r}).`;return new Br(r,l,s)}}function oE(n,t){return n.replace(aE,(e,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const aE=/\{\$([^}]+)}/g;function pa(n,t){if(n===t)return!0;const e=Object.keys(n),s=Object.keys(t);for(const r of e){if(!s.includes(r))return!1;const i=n[r],o=t[r];if(Ed(i)&&Ed(o)){if(!pa(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!e.includes(r))return!1;return!0}function Ed(n){return n!==null&&typeof n=="object"}/**
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
 */function qi(n){return n&&n._delegate?n._delegate:n}class zi{constructor(t,e,s){this.name=t,this.instanceFactory=e,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Is="[DEFAULT]";/**
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
 */class lE{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const s=new Yb;if(this.instancesDeferred.set(e,s),this.isInitialized(e)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:e});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(cE(t))try{this.getOrInitializeService({instanceIdentifier:Is})}catch{}for(const[e,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(t=Is){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Is){return this.instances.has(t)}getOptions(t=Is){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:e});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);s===l&&o.resolve(r)}return r}onInit(t,e){const s=this.normalizeInstanceIdentifier(e),r=this.onInitCallbacks.get(s)??new Set;r.add(t),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&t(i,s),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const s=this.onInitCallbacks.get(e);if(s)for(const r of s)try{r(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:uE(t),options:e}),this.instances.set(t,s),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Is){return this.component?this.component.multipleInstances?t:Is:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uE(n){return n===Is?void 0:n}function cE(n){return n.instantiationMode==="EAGER"}/**
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
 */class hE{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new lE(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var At;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(At||(At={}));const dE={debug:At.DEBUG,verbose:At.VERBOSE,info:At.INFO,warn:At.WARN,error:At.ERROR,silent:At.SILENT},fE=At.INFO,pE={[At.DEBUG]:"log",[At.VERBOSE]:"log",[At.INFO]:"info",[At.WARN]:"warn",[At.ERROR]:"error"},mE=(n,t,...e)=>{if(t<n.logLevel)return;const s=new Date().toISOString(),r=pE[t];if(r)console[r](`[${s}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ym{constructor(t){this.name=t,this._logLevel=fE,this._logHandler=mE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in At))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?dE[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,At.DEBUG,...t),this._logHandler(this,At.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,At.VERBOSE,...t),this._logHandler(this,At.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,At.INFO,...t),this._logHandler(this,At.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,At.WARN,...t),this._logHandler(this,At.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,At.ERROR,...t),this._logHandler(this,At.ERROR,...t)}}const gE=(n,t)=>t.some(e=>n instanceof e);let Id,Td;function _E(){return Id||(Id=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yE(){return Td||(Td=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vm=new WeakMap,lu=new WeakMap,bm=new WeakMap,Ml=new WeakMap,rc=new WeakMap;function vE(n){const t=new Promise((e,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{e(Zn(n.result)),r()},o=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&vm.set(e,n)}).catch(()=>{}),rc.set(t,n),t}function bE(n){if(lu.has(n))return;const t=new Promise((e,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{e(),r()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});lu.set(n,t)}let uu={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return lu.get(n);if(t==="objectStoreNames")return n.objectStoreNames||bm.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Zn(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function EE(n){uu=n(uu)}function IE(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const s=n.call(Fl(this),t,...e);return bm.set(s,t.sort?t.sort():[t]),Zn(s)}:yE().includes(n)?function(...t){return n.apply(Fl(this),t),Zn(vm.get(this))}:function(...t){return Zn(n.apply(Fl(this),t))}}function TE(n){return typeof n=="function"?IE(n):(n instanceof IDBTransaction&&bE(n),gE(n,_E())?new Proxy(n,uu):n)}function Zn(n){if(n instanceof IDBRequest)return vE(n);if(Ml.has(n))return Ml.get(n);const t=TE(n);return t!==n&&(Ml.set(n,t),rc.set(t,n)),t}const Fl=n=>rc.get(n);function wE(n,t,{blocked:e,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(n,t),l=Zn(o);return s&&o.addEventListener("upgradeneeded",u=>{s(Zn(o.result),u.oldVersion,u.newVersion,Zn(o.transaction),u)}),e&&o.addEventListener("blocked",u=>e(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),r&&u.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const AE=["get","getKey","getAll","getAllKeys","count"],SE=["put","add","delete","clear"],Ll=new Map;function wd(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Ll.get(t))return Ll.get(t);const e=t.replace(/FromIndex$/,""),s=t!==e,r=SE.includes(e);if(!(e in(s?IDBIndex:IDBObjectStore).prototype)||!(r||AE.includes(e)))return;const i=async function(o,...l){const u=this.transaction(o,r?"readwrite":"readonly");let c=u.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[e](...l),r&&u.done]))[0]};return Ll.set(t,i),i}EE(n=>({...n,get:(t,e,s)=>wd(t,e)||n.get(t,e,s),has:(t,e)=>!!wd(t,e)||n.has(t,e)}));/**
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
 */class RE{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(xE(e)){const s=e.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(e=>e).join(" ")}}function xE(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const cu="@firebase/app",Ad="0.14.6";/**
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
 */const Vn=new ym("@firebase/app"),PE="@firebase/app-compat",CE="@firebase/analytics-compat",VE="@firebase/analytics",DE="@firebase/app-check-compat",kE="@firebase/app-check",NE="@firebase/auth",OE="@firebase/auth-compat",ME="@firebase/database",FE="@firebase/data-connect",LE="@firebase/database-compat",BE="@firebase/functions",UE="@firebase/functions-compat",$E="@firebase/installations",jE="@firebase/installations-compat",qE="@firebase/messaging",zE="@firebase/messaging-compat",KE="@firebase/performance",HE="@firebase/performance-compat",GE="@firebase/remote-config",WE="@firebase/remote-config-compat",QE="@firebase/storage",XE="@firebase/storage-compat",JE="@firebase/firestore",YE="@firebase/ai",ZE="@firebase/firestore-compat",tI="firebase",eI="12.6.0";/**
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
 */const hu="[DEFAULT]",nI={[cu]:"fire-core",[PE]:"fire-core-compat",[VE]:"fire-analytics",[CE]:"fire-analytics-compat",[kE]:"fire-app-check",[DE]:"fire-app-check-compat",[NE]:"fire-auth",[OE]:"fire-auth-compat",[ME]:"fire-rtdb",[FE]:"fire-data-connect",[LE]:"fire-rtdb-compat",[BE]:"fire-fn",[UE]:"fire-fn-compat",[$E]:"fire-iid",[jE]:"fire-iid-compat",[qE]:"fire-fcm",[zE]:"fire-fcm-compat",[KE]:"fire-perf",[HE]:"fire-perf-compat",[GE]:"fire-rc",[WE]:"fire-rc-compat",[QE]:"fire-gcs",[XE]:"fire-gcs-compat",[JE]:"fire-fst",[ZE]:"fire-fst-compat",[YE]:"fire-vertex","fire-js":"fire-js",[tI]:"fire-js-all"};/**
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
 */const ma=new Map,sI=new Map,du=new Map;function Sd(n,t){try{n.container.addComponent(t)}catch(e){Vn.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function ga(n){const t=n.name;if(du.has(t))return Vn.debug(`There were multiple attempts to register component ${t}.`),!1;du.set(t,n);for(const e of ma.values())Sd(e,n);for(const e of sI.values())Sd(e,n);return!0}function rI(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function iI(n){return n==null?!1:n.settings!==void 0}/**
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
 */const oI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ts=new _m("app","Firebase",oI);/**
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
 */class aI{constructor(t,e,s){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new zi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ts.create("app-deleted",{appName:this._name})}}/**
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
 */const lI=eI;function Em(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const s={name:hu,automaticDataCollectionEnabled:!0,...t},r=s.name;if(typeof r!="string"||!r)throw ts.create("bad-app-name",{appName:String(r)});if(e||(e=dm()),!e)throw ts.create("no-options");const i=ma.get(r);if(i){if(pa(e,i.options)&&pa(s,i.config))return i;throw ts.create("duplicate-app",{appName:r})}const o=new hE(r);for(const u of du.values())o.addComponent(u);const l=new aI(e,s,o);return ma.set(r,l),l}function uI(n=hu){const t=ma.get(n);if(!t&&n===hu&&dm())return Em();if(!t)throw ts.create("no-app",{appName:n});return t}function _r(n,t,e){let s=nI[n]??n;e&&(s+=`-${e}`);const r=s.match(/\s|\//),i=t.match(/\s|\//);if(r||i){const o=[`Unable to register library "${s}" with version "${t}":`];r&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&o.push("and"),i&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Vn.warn(o.join(" "));return}ga(new zi(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const cI="firebase-heartbeat-database",hI=1,Ki="firebase-heartbeat-store";let Bl=null;function Im(){return Bl||(Bl=wE(cI,hI,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Ki)}catch(e){console.warn(e)}}}}).catch(n=>{throw ts.create("idb-open",{originalErrorMessage:n.message})})),Bl}async function dI(n){try{const e=(await Im()).transaction(Ki),s=await e.objectStore(Ki).get(Tm(n));return await e.done,s}catch(t){if(t instanceof Br)Vn.warn(t.message);else{const e=ts.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Vn.warn(e.message)}}}async function Rd(n,t){try{const s=(await Im()).transaction(Ki,"readwrite");await s.objectStore(Ki).put(t,Tm(n)),await s.done}catch(e){if(e instanceof Br)Vn.warn(e.message);else{const s=ts.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Vn.warn(s.message)}}}function Tm(n){return`${n.name}!${n.options.appId}`}/**
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
 */const fI=1024,pI=30;class mI{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new _I(e),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,e;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=xd();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>pI){const o=yI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Vn.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=xd(),{heartbeatsToSend:s,unsentEntries:r}=gI(this._heartbeatsCache.heartbeats),i=da(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return Vn.warn(e),""}}}function xd(){return new Date().toISOString().substring(0,10)}function gI(n,t=fI){const e=[];let s=n.slice();for(const r of n){const i=e.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Pd(e)>t){i.dates.pop();break}}else if(e.push({agent:r.agent,dates:[r.date]}),Pd(e)>t){e.pop();break}s=s.slice(1)}return{heartbeatsToSend:e,unsentEntries:s}}class _I{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gm()?rE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await dI(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return Rd(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return Rd(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Pd(n){return da(JSON.stringify({version:2,heartbeats:n})).length}function yI(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let s=1;s<n.length;s++)n[s].date<e&&(e=n[s].date,t=s);return t}/**
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
 */function vI(n){ga(new zi("platform-logger",t=>new RE(t),"PRIVATE")),ga(new zi("heartbeat",t=>new mI(t),"PRIVATE")),_r(cu,Ad,n),_r(cu,Ad,"esm2020"),_r("fire-js","")}vI("");var bI="firebase",EI="12.7.0";/**
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
 */_r(bI,EI,"app");var Cd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var es,wm;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(w,v){function _(){}_.prototype=v.prototype,w.F=v.prototype,w.prototype=new _,w.prototype.constructor=w,w.D=function(I,E,x){for(var b=Array(arguments.length-2),Ut=2;Ut<arguments.length;Ut++)b[Ut-2]=arguments[Ut];return v.prototype[E].apply(I,b)}}function e(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(s,e),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(w,v,_){_||(_=0);const I=Array(16);if(typeof v=="string")for(var E=0;E<16;++E)I[E]=v.charCodeAt(_++)|v.charCodeAt(_++)<<8|v.charCodeAt(_++)<<16|v.charCodeAt(_++)<<24;else for(E=0;E<16;++E)I[E]=v[_++]|v[_++]<<8|v[_++]<<16|v[_++]<<24;v=w.g[0],_=w.g[1],E=w.g[2];let x=w.g[3],b;b=v+(x^_&(E^x))+I[0]+3614090360&4294967295,v=_+(b<<7&4294967295|b>>>25),b=x+(E^v&(_^E))+I[1]+3905402710&4294967295,x=v+(b<<12&4294967295|b>>>20),b=E+(_^x&(v^_))+I[2]+606105819&4294967295,E=x+(b<<17&4294967295|b>>>15),b=_+(v^E&(x^v))+I[3]+3250441966&4294967295,_=E+(b<<22&4294967295|b>>>10),b=v+(x^_&(E^x))+I[4]+4118548399&4294967295,v=_+(b<<7&4294967295|b>>>25),b=x+(E^v&(_^E))+I[5]+1200080426&4294967295,x=v+(b<<12&4294967295|b>>>20),b=E+(_^x&(v^_))+I[6]+2821735955&4294967295,E=x+(b<<17&4294967295|b>>>15),b=_+(v^E&(x^v))+I[7]+4249261313&4294967295,_=E+(b<<22&4294967295|b>>>10),b=v+(x^_&(E^x))+I[8]+1770035416&4294967295,v=_+(b<<7&4294967295|b>>>25),b=x+(E^v&(_^E))+I[9]+2336552879&4294967295,x=v+(b<<12&4294967295|b>>>20),b=E+(_^x&(v^_))+I[10]+4294925233&4294967295,E=x+(b<<17&4294967295|b>>>15),b=_+(v^E&(x^v))+I[11]+2304563134&4294967295,_=E+(b<<22&4294967295|b>>>10),b=v+(x^_&(E^x))+I[12]+1804603682&4294967295,v=_+(b<<7&4294967295|b>>>25),b=x+(E^v&(_^E))+I[13]+4254626195&4294967295,x=v+(b<<12&4294967295|b>>>20),b=E+(_^x&(v^_))+I[14]+2792965006&4294967295,E=x+(b<<17&4294967295|b>>>15),b=_+(v^E&(x^v))+I[15]+1236535329&4294967295,_=E+(b<<22&4294967295|b>>>10),b=v+(E^x&(_^E))+I[1]+4129170786&4294967295,v=_+(b<<5&4294967295|b>>>27),b=x+(_^E&(v^_))+I[6]+3225465664&4294967295,x=v+(b<<9&4294967295|b>>>23),b=E+(v^_&(x^v))+I[11]+643717713&4294967295,E=x+(b<<14&4294967295|b>>>18),b=_+(x^v&(E^x))+I[0]+3921069994&4294967295,_=E+(b<<20&4294967295|b>>>12),b=v+(E^x&(_^E))+I[5]+3593408605&4294967295,v=_+(b<<5&4294967295|b>>>27),b=x+(_^E&(v^_))+I[10]+38016083&4294967295,x=v+(b<<9&4294967295|b>>>23),b=E+(v^_&(x^v))+I[15]+3634488961&4294967295,E=x+(b<<14&4294967295|b>>>18),b=_+(x^v&(E^x))+I[4]+3889429448&4294967295,_=E+(b<<20&4294967295|b>>>12),b=v+(E^x&(_^E))+I[9]+568446438&4294967295,v=_+(b<<5&4294967295|b>>>27),b=x+(_^E&(v^_))+I[14]+3275163606&4294967295,x=v+(b<<9&4294967295|b>>>23),b=E+(v^_&(x^v))+I[3]+4107603335&4294967295,E=x+(b<<14&4294967295|b>>>18),b=_+(x^v&(E^x))+I[8]+1163531501&4294967295,_=E+(b<<20&4294967295|b>>>12),b=v+(E^x&(_^E))+I[13]+2850285829&4294967295,v=_+(b<<5&4294967295|b>>>27),b=x+(_^E&(v^_))+I[2]+4243563512&4294967295,x=v+(b<<9&4294967295|b>>>23),b=E+(v^_&(x^v))+I[7]+1735328473&4294967295,E=x+(b<<14&4294967295|b>>>18),b=_+(x^v&(E^x))+I[12]+2368359562&4294967295,_=E+(b<<20&4294967295|b>>>12),b=v+(_^E^x)+I[5]+4294588738&4294967295,v=_+(b<<4&4294967295|b>>>28),b=x+(v^_^E)+I[8]+2272392833&4294967295,x=v+(b<<11&4294967295|b>>>21),b=E+(x^v^_)+I[11]+1839030562&4294967295,E=x+(b<<16&4294967295|b>>>16),b=_+(E^x^v)+I[14]+4259657740&4294967295,_=E+(b<<23&4294967295|b>>>9),b=v+(_^E^x)+I[1]+2763975236&4294967295,v=_+(b<<4&4294967295|b>>>28),b=x+(v^_^E)+I[4]+1272893353&4294967295,x=v+(b<<11&4294967295|b>>>21),b=E+(x^v^_)+I[7]+4139469664&4294967295,E=x+(b<<16&4294967295|b>>>16),b=_+(E^x^v)+I[10]+3200236656&4294967295,_=E+(b<<23&4294967295|b>>>9),b=v+(_^E^x)+I[13]+681279174&4294967295,v=_+(b<<4&4294967295|b>>>28),b=x+(v^_^E)+I[0]+3936430074&4294967295,x=v+(b<<11&4294967295|b>>>21),b=E+(x^v^_)+I[3]+3572445317&4294967295,E=x+(b<<16&4294967295|b>>>16),b=_+(E^x^v)+I[6]+76029189&4294967295,_=E+(b<<23&4294967295|b>>>9),b=v+(_^E^x)+I[9]+3654602809&4294967295,v=_+(b<<4&4294967295|b>>>28),b=x+(v^_^E)+I[12]+3873151461&4294967295,x=v+(b<<11&4294967295|b>>>21),b=E+(x^v^_)+I[15]+530742520&4294967295,E=x+(b<<16&4294967295|b>>>16),b=_+(E^x^v)+I[2]+3299628645&4294967295,_=E+(b<<23&4294967295|b>>>9),b=v+(E^(_|~x))+I[0]+4096336452&4294967295,v=_+(b<<6&4294967295|b>>>26),b=x+(_^(v|~E))+I[7]+1126891415&4294967295,x=v+(b<<10&4294967295|b>>>22),b=E+(v^(x|~_))+I[14]+2878612391&4294967295,E=x+(b<<15&4294967295|b>>>17),b=_+(x^(E|~v))+I[5]+4237533241&4294967295,_=E+(b<<21&4294967295|b>>>11),b=v+(E^(_|~x))+I[12]+1700485571&4294967295,v=_+(b<<6&4294967295|b>>>26),b=x+(_^(v|~E))+I[3]+2399980690&4294967295,x=v+(b<<10&4294967295|b>>>22),b=E+(v^(x|~_))+I[10]+4293915773&4294967295,E=x+(b<<15&4294967295|b>>>17),b=_+(x^(E|~v))+I[1]+2240044497&4294967295,_=E+(b<<21&4294967295|b>>>11),b=v+(E^(_|~x))+I[8]+1873313359&4294967295,v=_+(b<<6&4294967295|b>>>26),b=x+(_^(v|~E))+I[15]+4264355552&4294967295,x=v+(b<<10&4294967295|b>>>22),b=E+(v^(x|~_))+I[6]+2734768916&4294967295,E=x+(b<<15&4294967295|b>>>17),b=_+(x^(E|~v))+I[13]+1309151649&4294967295,_=E+(b<<21&4294967295|b>>>11),b=v+(E^(_|~x))+I[4]+4149444226&4294967295,v=_+(b<<6&4294967295|b>>>26),b=x+(_^(v|~E))+I[11]+3174756917&4294967295,x=v+(b<<10&4294967295|b>>>22),b=E+(v^(x|~_))+I[2]+718787259&4294967295,E=x+(b<<15&4294967295|b>>>17),b=_+(x^(E|~v))+I[9]+3951481745&4294967295,w.g[0]=w.g[0]+v&4294967295,w.g[1]=w.g[1]+(E+(b<<21&4294967295|b>>>11))&4294967295,w.g[2]=w.g[2]+E&4294967295,w.g[3]=w.g[3]+x&4294967295}s.prototype.v=function(w,v){v===void 0&&(v=w.length);const _=v-this.blockSize,I=this.C;let E=this.h,x=0;for(;x<v;){if(E==0)for(;x<=_;)r(this,w,x),x+=this.blockSize;if(typeof w=="string"){for(;x<v;)if(I[E++]=w.charCodeAt(x++),E==this.blockSize){r(this,I),E=0;break}}else for(;x<v;)if(I[E++]=w[x++],E==this.blockSize){r(this,I),E=0;break}}this.h=E,this.o+=v},s.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var v=1;v<w.length-8;++v)w[v]=0;v=this.o*8;for(var _=w.length-8;_<w.length;++_)w[_]=v&255,v/=256;for(this.v(w),w=Array(16),v=0,_=0;_<4;++_)for(let I=0;I<32;I+=8)w[v++]=this.g[_]>>>I&255;return w};function i(w,v){var _=l;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=v(w)}function o(w,v){this.h=v;const _=[];let I=!0;for(let E=w.length-1;E>=0;E--){const x=w[E]|0;I&&x==v||(_[E]=x,I=!1)}this.g=_}var l={};function u(w){return-128<=w&&w<128?i(w,function(v){return new o([v|0],v<0?-1:0)}):new o([w|0],w<0?-1:0)}function c(w){if(isNaN(w)||!isFinite(w))return p;if(w<0)return R(c(-w));const v=[];let _=1;for(let I=0;w>=_;I++)v[I]=w/_|0,_*=4294967296;return new o(v,0)}function d(w,v){if(w.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(w.charAt(0)=="-")return R(d(w.substring(1),v));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=c(Math.pow(v,8));let I=p;for(let x=0;x<w.length;x+=8){var E=Math.min(8,w.length-x);const b=parseInt(w.substring(x,x+E),v);E<8?(E=c(Math.pow(v,E)),I=I.j(E).add(c(b))):(I=I.j(_),I=I.add(c(b)))}return I}var p=u(0),y=u(1),A=u(16777216);n=o.prototype,n.m=function(){if(k(this))return-R(this).m();let w=0,v=1;for(let _=0;_<this.g.length;_++){const I=this.i(_);w+=(I>=0?I:4294967296+I)*v,v*=4294967296}return w},n.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(O(this))return"0";if(k(this))return"-"+R(this).toString(w);const v=c(Math.pow(w,6));var _=this;let I="";for(;;){const E=X(_,v).g;_=F(_,E.j(v));let x=((_.g.length>0?_.g[0]:_.h)>>>0).toString(w);if(_=E,O(_))return x+I;for(;x.length<6;)x="0"+x;I=x+I}},n.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function O(w){if(w.h!=0)return!1;for(let v=0;v<w.g.length;v++)if(w.g[v]!=0)return!1;return!0}function k(w){return w.h==-1}n.l=function(w){return w=F(this,w),k(w)?-1:O(w)?0:1};function R(w){const v=w.g.length,_=[];for(let I=0;I<v;I++)_[I]=~w.g[I];return new o(_,~w.h).add(y)}n.abs=function(){return k(this)?R(this):this},n.add=function(w){const v=Math.max(this.g.length,w.g.length),_=[];let I=0;for(let E=0;E<=v;E++){let x=I+(this.i(E)&65535)+(w.i(E)&65535),b=(x>>>16)+(this.i(E)>>>16)+(w.i(E)>>>16);I=b>>>16,x&=65535,b&=65535,_[E]=b<<16|x}return new o(_,_[_.length-1]&-2147483648?-1:0)};function F(w,v){return w.add(R(v))}n.j=function(w){if(O(this)||O(w))return p;if(k(this))return k(w)?R(this).j(R(w)):R(R(this).j(w));if(k(w))return R(this.j(R(w)));if(this.l(A)<0&&w.l(A)<0)return c(this.m()*w.m());const v=this.g.length+w.g.length,_=[];for(var I=0;I<2*v;I++)_[I]=0;for(I=0;I<this.g.length;I++)for(let E=0;E<w.g.length;E++){const x=this.i(I)>>>16,b=this.i(I)&65535,Ut=w.i(E)>>>16,ee=w.i(E)&65535;_[2*I+2*E]+=b*ee,Q(_,2*I+2*E),_[2*I+2*E+1]+=x*ee,Q(_,2*I+2*E+1),_[2*I+2*E+1]+=b*Ut,Q(_,2*I+2*E+1),_[2*I+2*E+2]+=x*Ut,Q(_,2*I+2*E+2)}for(w=0;w<v;w++)_[w]=_[2*w+1]<<16|_[2*w];for(w=v;w<2*v;w++)_[w]=0;return new o(_,0)};function Q(w,v){for(;(w[v]&65535)!=w[v];)w[v+1]+=w[v]>>>16,w[v]&=65535,v++}function K(w,v){this.g=w,this.h=v}function X(w,v){if(O(v))throw Error("division by zero");if(O(w))return new K(p,p);if(k(w))return v=X(R(w),v),new K(R(v.g),R(v.h));if(k(v))return v=X(w,R(v)),new K(R(v.g),v.h);if(w.g.length>30){if(k(w)||k(v))throw Error("slowDivide_ only works with positive integers.");for(var _=y,I=v;I.l(w)<=0;)_=st(_),I=st(I);var E=ut(_,1),x=ut(I,1);for(I=ut(I,2),_=ut(_,2);!O(I);){var b=x.add(I);b.l(w)<=0&&(E=E.add(_),x=b),I=ut(I,1),_=ut(_,1)}return v=F(w,E.j(v)),new K(E,v)}for(E=p;w.l(v)>=0;){for(_=Math.max(1,Math.floor(w.m()/v.m())),I=Math.ceil(Math.log(_)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),x=c(_),b=x.j(v);k(b)||b.l(w)>0;)_-=I,x=c(_),b=x.j(v);O(x)&&(x=y),E=E.add(x),w=F(w,b)}return new K(E,w)}n.B=function(w){return X(this,w).h},n.and=function(w){const v=Math.max(this.g.length,w.g.length),_=[];for(let I=0;I<v;I++)_[I]=this.i(I)&w.i(I);return new o(_,this.h&w.h)},n.or=function(w){const v=Math.max(this.g.length,w.g.length),_=[];for(let I=0;I<v;I++)_[I]=this.i(I)|w.i(I);return new o(_,this.h|w.h)},n.xor=function(w){const v=Math.max(this.g.length,w.g.length),_=[];for(let I=0;I<v;I++)_[I]=this.i(I)^w.i(I);return new o(_,this.h^w.h)};function st(w){const v=w.g.length+1,_=[];for(let I=0;I<v;I++)_[I]=w.i(I)<<1|w.i(I-1)>>>31;return new o(_,w.h)}function ut(w,v){const _=v>>5;v%=32;const I=w.g.length-_,E=[];for(let x=0;x<I;x++)E[x]=v>0?w.i(x+_)>>>v|w.i(x+_+1)<<32-v:w.i(x+_);return new o(E,w.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,wm=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,es=o}).apply(typeof Cd<"u"?Cd:typeof self<"u"?self:typeof window<"u"?window:{});var ko=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Am,fi,Sm,Ho,fu,Rm,xm,Pm;(function(){var n,t=Object.defineProperty;function e(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ko=="object"&&ko];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var s=e(this);function r(a,h){if(h)t:{var f=s;a=a.split(".");for(var g=0;g<a.length-1;g++){var C=a[g];if(!(C in f))break t;f=f[C]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&t(f,a,{configurable:!0,writable:!0,value:h})}}r("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(a){return a||function(h){var f=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&f.push([g,h[g]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,f){return a.call.apply(a.bind,arguments)}function c(a,h,f){return c=u,c.apply(null,arguments)}function d(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,h){function f(){}f.prototype=h.prototype,a.Z=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(g,C,N){for(var J=Array(arguments.length-2),vt=2;vt<arguments.length;vt++)J[vt-2]=arguments[vt];return h.prototype[C].apply(g,J)}}var y=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function A(a){const h=a.length;if(h>0){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function O(a,h){for(let g=1;g<arguments.length;g++){const C=arguments[g];var f=typeof C;if(f=f!="object"?f:C?Array.isArray(C)?"array":f:"null",f=="array"||f=="object"&&typeof C.length=="number"){f=a.length||0;const N=C.length||0;a.length=f+N;for(let J=0;J<N;J++)a[f+J]=C[J]}else a.push(C)}}class k{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function R(a){o.setTimeout(()=>{throw a},0)}function F(){var a=w;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Q{constructor(){this.h=this.g=null}add(h,f){const g=K.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var K=new k(()=>new X,a=>a.reset());class X{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let st,ut=!1,w=new Q,v=()=>{const a=Promise.resolve(void 0);st=()=>{a.then(_)}};function _(){for(var a;a=F();){try{a.h.call(a.g)}catch(f){R(f)}var h=K;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}ut=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var x=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,h),o.removeEventListener("test",f,h)}catch{}return a}();function b(a){return/^[\s\xa0]*$/.test(a)}function Ut(a,h){E.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(Ut,E),Ut.prototype.init=function(a,h){const f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Ut.Z.h.call(this)},Ut.prototype.h=function(){Ut.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ee="closure_listenable_"+(Math.random()*1e6|0),Ft=0;function W(a,h,f,g,C){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=C,this.key=++Ft,this.da=this.fa=!1}function D(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function L(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function V(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function Y(a){const h={};for(const f in a)h[f]=a[f];return h}const Nt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Be(a,h){let f,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(f in g)a[f]=g[f];for(let N=0;N<Nt.length;N++)f=Nt[N],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function Je(a){this.src=a,this.g={},this.h=0}Je.prototype.add=function(a,h,f,g,C){const N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);const J=Ye(a,h,g,C);return J>-1?(h=a[J],f||(h.fa=!1)):(h=new W(h,this.src,N,!!g,C),h.fa=f,a.push(h)),h};function hs(a,h){const f=h.type;if(f in a.g){var g=a.g[f],C=Array.prototype.indexOf.call(g,h,void 0),N;(N=C>=0)&&Array.prototype.splice.call(g,C,1),N&&(D(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Ye(a,h,f,g){for(let C=0;C<a.length;++C){const N=a[C];if(!N.da&&N.listener==h&&N.capture==!!f&&N.ha==g)return C}return-1}var Xt="closure_lm_"+(Math.random()*1e6|0),Ue={};function ds(a,h,f,g,C){if(Array.isArray(h)){for(let N=0;N<h.length;N++)ds(a,h[N],f,g,C);return null}return f=Z(f),a&&a[ee]?a.J(h,f,l(g)?!!g.capture:!1,C):gn(a,h,f,!1,g,C)}function gn(a,h,f,g,C,N){if(!h)throw Error("Invalid event type");const J=l(C)?!!C.capture:!!C;let vt=U(a);if(vt||(a[Xt]=vt=new Je(a)),f=vt.add(h,f,g,J,N),f.proxy)return f;if(g=Xc(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)x||(C=J),C===void 0&&(C=!1),a.addEventListener(h.toString(),g,C);else if(a.attachEvent)a.attachEvent(M(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Xc(){function a(f){return h.call(a.src,a.listener,f)}const h=H;return a}function T(a,h,f,g,C){if(Array.isArray(h))for(var N=0;N<h.length;N++)T(a,h[N],f,g,C);else g=l(g)?!!g.capture:!!g,f=Z(f),a&&a[ee]?(a=a.i,N=String(h).toString(),N in a.g&&(h=a.g[N],f=Ye(h,f,g,C),f>-1&&(D(h[f]),Array.prototype.splice.call(h,f,1),h.length==0&&(delete a.g[N],a.h--)))):a&&(a=U(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Ye(h,f,g,C)),(f=a>-1?h[a]:null)&&S(f))}function S(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[ee])hs(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(M(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=U(h))?(hs(f,a),f.h==0&&(f.src=null,h[Xt]=null)):D(a)}}}function M(a){return a in Ue?Ue[a]:Ue[a]="on"+a}function H(a,h){if(a.da)a=!0;else{h=new Ut(h,this);const f=a.listener,g=a.ha||a.src;a.fa&&S(a),a=f.call(g,h)}return a}function U(a){return a=a[Xt],a instanceof Je?a:null}var $="__closure_events_fn_"+(Math.random()*1e9>>>0);function Z(a){return typeof a=="function"?a:(a[$]||(a[$]=function(h){return a.handleEvent(h)}),a[$])}function z(){I.call(this),this.i=new Je(this),this.M=this,this.G=null}p(z,I),z.prototype[ee]=!0,z.prototype.removeEventListener=function(a,h,f,g){T(this,a,h,f,g)};function q(a,h){var f,g=a.G;if(g)for(f=[];g;g=g.G)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new E(h,a);else if(h instanceof E)h.target=h.target||a;else{var C=h;h=new E(g,a),Be(h,C)}C=!0;let N,J;if(f)for(J=f.length-1;J>=0;J--)N=h.g=f[J],C=j(N,g,!0,h)&&C;if(N=h.g=a,C=j(N,g,!0,h)&&C,C=j(N,g,!1,h)&&C,f)for(J=0;J<f.length;J++)N=h.g=f[J],C=j(N,g,!1,h)&&C}z.prototype.N=function(){if(z.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const f=a.g[h];for(let g=0;g<f.length;g++)D(f[g]);delete a.g[h],a.h--}}this.G=null},z.prototype.J=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},z.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function j(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let C=!0;for(let N=0;N<h.length;++N){const J=h[N];if(J&&!J.da&&J.capture==f){const vt=J.listener,ne=J.ha||J.src;J.fa&&hs(a.i,J),C=vt.call(ne,g)!==!1&&C}}return C&&!g.defaultPrevented}function ct(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function et(a){a.g=ct(()=>{a.g=null,a.i&&(a.i=!1,et(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class at extends I{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:et(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ht(a){I.call(this),this.h=a,this.g={}}p(ht,I);var Et=[];function Dt(a){L(a.g,function(h,f){this.g.hasOwnProperty(f)&&S(h)},a),a.g={}}ht.prototype.N=function(){ht.Z.N.call(this),Dt(this)},ht.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var St=o.JSON.stringify,de=o.JSON.parse,fe=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function xe(){}function Pe(){}var Ge={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Xs(){E.call(this,"d")}p(Xs,E);function ue(){E.call(this,"c")}p(ue,E);var ie={},qr=null;function fs(){return qr=qr||new z}ie.Ia="serverreachability";function Jc(a){E.call(this,ie.Ia,a)}p(Jc,E);function zr(a){const h=fs();q(h,new Jc(h))}ie.STAT_EVENT="statevent";function Yc(a,h){E.call(this,ie.STAT_EVENT,a),this.stat=h}p(Yc,E);function Ee(a){const h=fs();q(h,new Yc(h,a))}ie.Ja="timingevent";function Zc(a,h){E.call(this,ie.Ja,a),this.size=h}p(Zc,E);function Kr(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Hr(){this.g=!0}Hr.prototype.ua=function(){this.g=!1};function $_(a,h,f,g,C,N){a.info(function(){if(a.g)if(N){var J="",vt=N.split("&");for(let Lt=0;Lt<vt.length;Lt++){var ne=vt[Lt].split("=");if(ne.length>1){const oe=ne[0];ne=ne[1];const tn=oe.split("_");J=tn.length>=2&&tn[1]=="type"?J+(oe+"="+ne+"&"):J+(oe+"=redacted&")}}}else J=null;else J=N;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+h+`
`+f+`
`+J})}function j_(a,h,f,g,C,N,J){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+h+`
`+f+`
`+N+" "+J})}function Js(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+z_(a,f)+(g?" "+g:"")})}function q_(a,h){a.info(function(){return"TIMEOUT: "+h})}Hr.prototype.info=function(){};function z_(a,h){if(!a.g)return h;if(!h)return null;try{const N=JSON.parse(h);if(N){for(a=0;a<N.length;a++)if(Array.isArray(N[a])){var f=N[a];if(!(f.length<2)){var g=f[1];if(Array.isArray(g)&&!(g.length<1)){var C=g[0];if(C!="noop"&&C!="stop"&&C!="close")for(let J=1;J<g.length;J++)g[J]=""}}}}return St(N)}catch{return h}}var vo={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},th={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},eh;function dl(){}p(dl,xe),dl.prototype.g=function(){return new XMLHttpRequest},eh=new dl;function Gr(a){return encodeURIComponent(String(a))}function K_(a){var h=1;a=a.split(":");const f=[];for(;h>0&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function Mn(a,h,f,g){this.j=a,this.i=h,this.l=f,this.S=g||1,this.V=new ht(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new nh}function nh(){this.i=null,this.g="",this.h=!1}var sh={},fl={};function pl(a,h,f){a.M=1,a.A=Eo(Ze(h)),a.u=f,a.R=!0,rh(a,null)}function rh(a,h){a.F=Date.now(),bo(a),a.B=Ze(a.A);var f=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),_h(f.i,"t",g),a.C=0,f=a.j.L,a.h=new nh,a.g=Oh(a.j,f?h:null,!a.u),a.P>0&&(a.O=new at(c(a.Y,a,a.g),a.P)),h=a.V,f=a.g,g=a.ba;var C="readystatechange";Array.isArray(C)||(C&&(Et[0]=C.toString()),C=Et);for(let N=0;N<C.length;N++){const J=ds(f,C[N],g||h.handleEvent,!1,h.h||h);if(!J)break;h.g[J.key]=J}h=a.J?Y(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),zr(),$_(a.i,a.v,a.B,a.l,a.S,a.u)}Mn.prototype.ba=function(a){a=a.target;const h=this.O;h&&Bn(a)==3?h.j():this.Y(a)},Mn.prototype.Y=function(a){try{if(a==this.g)t:{const vt=Bn(this.g),ne=this.g.ya(),Lt=this.g.ca();if(!(vt<3)&&(vt!=3||this.g&&(this.h.h||this.g.la()||wh(this.g)))){this.K||vt!=4||ne==7||(ne==8||Lt<=0?zr(3):zr(2)),ml(this);var h=this.g.ca();this.X=h;var f=H_(this);if(this.o=h==200,j_(this.i,this.v,this.B,this.l,this.S,vt,h),this.o){if(this.U&&!this.L){e:{if(this.g){var g,C=this.g;if((g=C.g?C.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!b(g)){var N=g;break e}}N=null}if(a=N)Js(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,gl(this,a);else{this.o=!1,this.m=3,Ee(12),ps(this),Wr(this);break t}}if(this.R){a=!0;let oe;for(;!this.K&&this.C<f.length;)if(oe=G_(this,f),oe==fl){vt==4&&(this.m=4,Ee(14),a=!1),Js(this.i,this.l,null,"[Incomplete Response]");break}else if(oe==sh){this.m=4,Ee(15),Js(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else Js(this.i,this.l,oe,null),gl(this,oe);if(ih(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),vt!=4||f.length!=0||this.h.h||(this.m=1,Ee(16),a=!1),this.o=this.o&&a,!a)Js(this.i,this.l,f,"[Invalid Chunked Response]"),ps(this),Wr(this);else if(f.length>0&&!this.W){this.W=!0;var J=this.j;J.g==this&&J.aa&&!J.P&&(J.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),wl(J),J.P=!0,Ee(11))}}else Js(this.i,this.l,f,null),gl(this,f);vt==4&&ps(this),this.o&&!this.K&&(vt==4?Vh(this.j,this):(this.o=!1,bo(this)))}else ay(this.g),h==400&&f.indexOf("Unknown SID")>0?(this.m=3,Ee(12)):(this.m=0,Ee(13)),ps(this),Wr(this)}}}catch{}finally{}};function H_(a){if(!ih(a))return a.g.la();const h=wh(a.g);if(h==="")return"";let f="";const g=h.length,C=Bn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return ps(a),Wr(a),"";a.h.i=new o.TextDecoder}for(let N=0;N<g;N++)a.h.h=!0,f+=a.h.i.decode(h[N],{stream:!(C&&N==g-1)});return h.length=0,a.h.g+=f,a.C=0,a.h.g}function ih(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function G_(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?fl:(f=Number(h.substring(f,g)),isNaN(f)?sh:(g+=1,g+f>h.length?fl:(h=h.slice(g,g+f),a.C=g+f,h)))}Mn.prototype.cancel=function(){this.K=!0,ps(this)};function bo(a){a.T=Date.now()+a.H,oh(a,a.H)}function oh(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Kr(c(a.aa,a),h)}function ml(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Mn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(q_(this.i,this.B),this.M!=2&&(zr(),Ee(17)),ps(this),this.m=2,Wr(this)):oh(this,this.T-a)};function Wr(a){a.j.I==0||a.K||Vh(a.j,a)}function ps(a){ml(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Dt(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function gl(a,h){try{var f=a.j;if(f.I!=0&&(f.g==a||_l(f.h,a))){if(!a.L&&_l(f.h,a)&&f.I==3){try{var g=f.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){t:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)So(f),wo(f);else break t;Tl(f),Ee(18)}}else f.xa=C[1],0<f.xa-f.K&&C[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=Kr(c(f.Va,f),6e3));uh(f.h)<=1&&f.ta&&(f.ta=void 0)}else gs(f,11)}else if((a.L||f.g==a)&&So(f),!b(h))for(C=f.Ba.g.parse(h),h=0;h<C.length;h++){let Lt=C[h];const oe=Lt[0];if(!(oe<=f.K))if(f.K=oe,Lt=Lt[1],f.I==2)if(Lt[0]=="c"){f.M=Lt[1],f.ba=Lt[2];const tn=Lt[3];tn!=null&&(f.ka=tn,f.j.info("VER="+f.ka));const _s=Lt[4];_s!=null&&(f.za=_s,f.j.info("SVER="+f.za));const Un=Lt[5];Un!=null&&typeof Un=="number"&&Un>0&&(g=1.5*Un,f.O=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const $n=a.g;if($n){const xo=$n.g?$n.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(xo){var N=g.h;N.g||xo.indexOf("spdy")==-1&&xo.indexOf("quic")==-1&&xo.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(yl(N,N.h),N.h=null))}if(g.G){const Al=$n.g?$n.g.getResponseHeader("X-HTTP-Session-Id"):null;Al&&(g.wa=Al,qt(g.J,g.G,Al))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),g=f;var J=a;if(g.na=Nh(g,g.L?g.ba:null,g.W),J.L){ch(g.h,J);var vt=J,ne=g.O;ne&&(vt.H=ne),vt.D&&(ml(vt),bo(vt)),g.g=J}else Ph(g);f.i.length>0&&Ao(f)}else Lt[0]!="stop"&&Lt[0]!="close"||gs(f,7);else f.I==3&&(Lt[0]=="stop"||Lt[0]=="close"?Lt[0]=="stop"?gs(f,7):Il(f):Lt[0]!="noop"&&f.l&&f.l.qa(Lt),f.A=0)}}zr(4)}catch{}}var W_=class{constructor(a,h){this.g=a,this.map=h}};function ah(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function lh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function uh(a){return a.h?1:a.g?a.g.size:0}function _l(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function yl(a,h){a.g?a.g.add(h):a.h=h}function ch(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}ah.prototype.cancel=function(){if(this.i=hh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function hh(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.G);return h}return A(a.i)}var dh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Q_(a,h){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const g=a[f].indexOf("=");let C,N=null;g>=0?(C=a[f].substring(0,g),N=a[f].substring(g+1)):C=a[f],h(C,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Fn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Fn?(this.l=a.l,Qr(this,a.j),this.o=a.o,this.g=a.g,Xr(this,a.u),this.h=a.h,vl(this,yh(a.i)),this.m=a.m):a&&(h=String(a).match(dh))?(this.l=!1,Qr(this,h[1]||"",!0),this.o=Jr(h[2]||""),this.g=Jr(h[3]||"",!0),Xr(this,h[4]),this.h=Jr(h[5]||"",!0),vl(this,h[6]||"",!0),this.m=Jr(h[7]||"")):(this.l=!1,this.i=new Zr(null,this.l))}Fn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Yr(h,fh,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Yr(h,fh,!0),"@"),a.push(Gr(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Yr(f,f.charAt(0)=="/"?Y_:J_,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Yr(f,ty)),a.join("")},Fn.prototype.resolve=function(a){const h=Ze(this);let f=!!a.j;f?Qr(h,a.j):f=!!a.o,f?h.o=a.o:f=!!a.g,f?h.g=a.g:f=a.u!=null;var g=a.h;if(f)Xr(h,a.u);else if(f=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var C=h.h.lastIndexOf("/");C!=-1&&(g=h.h.slice(0,C+1)+g)}if(C=g,C==".."||C==".")g="";else if(C.indexOf("./")!=-1||C.indexOf("/.")!=-1){g=C.lastIndexOf("/",0)==0,C=C.split("/");const N=[];for(let J=0;J<C.length;){const vt=C[J++];vt=="."?g&&J==C.length&&N.push(""):vt==".."?((N.length>1||N.length==1&&N[0]!="")&&N.pop(),g&&J==C.length&&N.push("")):(N.push(vt),g=!0)}g=N.join("/")}else g=C}return f?h.h=g:f=a.i.toString()!=="",f?vl(h,yh(a.i)):f=!!a.m,f&&(h.m=a.m),h};function Ze(a){return new Fn(a)}function Qr(a,h,f){a.j=f?Jr(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Xr(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function vl(a,h,f){h instanceof Zr?(a.i=h,ey(a.i,a.l)):(f||(h=Yr(h,Z_)),a.i=new Zr(h,a.l))}function qt(a,h,f){a.i.set(h,f)}function Eo(a){return qt(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Jr(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Yr(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,X_),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function X_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var fh=/[#\/\?@]/g,J_=/[#\?:]/g,Y_=/[#\?]/g,Z_=/[#\?@]/g,ty=/#/g;function Zr(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function ms(a){a.g||(a.g=new Map,a.h=0,a.i&&Q_(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}n=Zr.prototype,n.add=function(a,h){ms(this),this.i=null,a=Ys(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function ph(a,h){ms(a),h=Ys(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function mh(a,h){return ms(a),h=Ys(a,h),a.g.has(h)}n.forEach=function(a,h){ms(this),this.g.forEach(function(f,g){f.forEach(function(C){a.call(h,C,g,this)},this)},this)};function gh(a,h){ms(a);let f=[];if(typeof h=="string")mh(a,h)&&(f=f.concat(a.g.get(Ys(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)f=f.concat(a[h]);return f}n.set=function(a,h){return ms(this),this.i=null,a=Ys(this,a),mh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},n.get=function(a,h){return a?(a=gh(this,a),a.length>0?String(a[0]):h):h};function _h(a,h,f){ph(a,h),f.length>0&&(a.i=null,a.g.set(Ys(a,h),A(f)),a.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var f=h[g];const C=Gr(f);f=gh(this,f);for(let N=0;N<f.length;N++){let J=C;f[N]!==""&&(J+="="+Gr(f[N])),a.push(J)}}return this.i=a.join("&")};function yh(a){const h=new Zr;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Ys(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function ey(a,h){h&&!a.j&&(ms(a),a.i=null,a.g.forEach(function(f,g){const C=g.toLowerCase();g!=C&&(ph(this,g),_h(this,C,f))},a)),a.j=h}function ny(a,h){const f=new Hr;if(o.Image){const g=new Image;g.onload=d(Ln,f,"TestLoadImage: loaded",!0,h,g),g.onerror=d(Ln,f,"TestLoadImage: error",!1,h,g),g.onabort=d(Ln,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=d(Ln,f,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function sy(a,h){const f=new Hr,g=new AbortController,C=setTimeout(()=>{g.abort(),Ln(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(N=>{clearTimeout(C),N.ok?Ln(f,"TestPingServer: ok",!0,h):Ln(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(C),Ln(f,"TestPingServer: error",!1,h)})}function Ln(a,h,f,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(f)}catch{}}function ry(){this.g=new fe}function bl(a){this.i=a.Sb||null,this.h=a.ab||!1}p(bl,xe),bl.prototype.g=function(){return new Io(this.i,this.h)};function Io(a,h){z.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Io,z),n=Io.prototype,n.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,ei(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ti(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ei(this)),this.g&&(this.readyState=3,ei(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;vh(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function vh(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?ti(this):ei(this),this.readyState==3&&vh(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,ti(this))},n.Na=function(a){this.g&&(this.response=a,ti(this))},n.ga=function(){this.g&&ti(this)};function ti(a){a.readyState=4,a.l=null,a.j=null,a.B=null,ei(a)}n.setRequestHeader=function(a,h){this.A.append(a,h)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function ei(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Io.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function bh(a){let h="";return L(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function El(a,h,f){t:{for(g in f){var g=!1;break t}g=!0}g||(f=bh(f),typeof a=="string"?f!=null&&Gr(f):qt(a,h,f))}function Gt(a){z.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Gt,z);var iy=/^https?$/i,oy=["POST","PUT"];n=Gt.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():eh.g(),this.g.onreadystatechange=y(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(N){Eh(this,N);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)f.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const N of g.keys())f.set(N,g.get(N));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(N=>N.toLowerCase()=="content-type"),C=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(oy,h,void 0)>=0)||g||C||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,J]of f)this.g.setRequestHeader(N,J);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(N){Eh(this,N)}};function Eh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,Ih(a),To(a)}function Ih(a){a.A||(a.A=!0,q(a,"complete"),q(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,q(this,"complete"),q(this,"abort"),To(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),To(this,!0)),Gt.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Th(this):this.Xa())},n.Xa=function(){Th(this)};function Th(a){if(a.h&&typeof i<"u"){if(a.v&&Bn(a)==4)setTimeout(a.Ca.bind(a),0);else if(q(a,"readystatechange"),Bn(a)==4){a.h=!1;try{const N=a.ca();t:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break t;default:h=!1}var f;if(!(f=h)){var g;if(g=N===0){let J=String(a.D).match(dh)[1]||null;!J&&o.self&&o.self.location&&(J=o.self.location.protocol.slice(0,-1)),g=!iy.test(J?J.toLowerCase():"")}f=g}if(f)q(a,"complete"),q(a,"success");else{a.o=6;try{var C=Bn(a)>2?a.g.statusText:""}catch{C=""}a.l=C+" ["+a.ca()+"]",Ih(a)}}finally{To(a)}}}}function To(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,h||q(a,"ready");try{f.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Bn(a){return a.g?a.g.readyState:0}n.ca=function(){try{return Bn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),de(h)}};function wh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function ay(a){const h={};a=(a.g&&Bn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(b(a[g]))continue;var f=K_(a[g]);const C=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const N=h[C]||[];h[C]=N,N.push(f)}V(h,function(g){return g.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ni(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Ah(a){this.za=0,this.i=[],this.j=new Hr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ni("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ni("baseRetryDelayMs",5e3,a),this.Za=ni("retryDelaySeedMs",1e4,a),this.Ta=ni("forwardChannelMaxRetries",2,a),this.va=ni("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new ah(a&&a.concurrentRequestLimit),this.Ba=new ry,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Ah.prototype,n.ka=8,n.I=1,n.connect=function(a,h,f,g){Ee(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.J=Nh(this,null,this.W),Ao(this)};function Il(a){if(Sh(a),a.I==3){var h=a.V++,f=Ze(a.J);if(qt(f,"SID",a.M),qt(f,"RID",h),qt(f,"TYPE","terminate"),si(a,f),h=new Mn(a,a.j,h),h.M=2,h.A=Eo(Ze(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=h.A,f=!0),f||(h.g=Oh(h.j,null),h.g.ea(h.A)),h.F=Date.now(),bo(h)}kh(a)}function wo(a){a.g&&(wl(a),a.g.cancel(),a.g=null)}function Sh(a){wo(a),a.v&&(o.clearTimeout(a.v),a.v=null),So(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Ao(a){if(!lh(a.h)&&!a.m){a.m=!0;var h=a.Ea;st||v(),ut||(st(),ut=!0),w.add(h,a),a.D=0}}function ly(a,h){return uh(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Kr(c(a.Ea,a,h),Dh(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const C=new Mn(this,this.j,a);let N=this.o;if(this.U&&(N?(N=Y(N),Be(N,this.U)):N=this.U),this.u!==null||this.R||(C.J=N,N=null),this.S)t:{for(var h=0,f=0;f<this.i.length;f++){e:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break e}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=f;break t}if(h===4096||f===this.i.length-1){h=f+1;break t}}h=1e3}else h=1e3;h=xh(this,C,h),f=Ze(this.J),qt(f,"RID",a),qt(f,"CVER",22),this.G&&qt(f,"X-HTTP-Session-Id",this.G),si(this,f),N&&(this.R?h="headers="+Gr(bh(N))+"&"+h:this.u&&El(f,this.u,N)),yl(this.h,C),this.Ra&&qt(f,"TYPE","init"),this.S?(qt(f,"$req",h),qt(f,"SID","null"),C.U=!0,pl(C,f,null)):pl(C,f,h),this.I=2}}else this.I==3&&(a?Rh(this,a):this.i.length==0||lh(this.h)||Rh(this))};function Rh(a,h){var f;h?f=h.l:f=a.V++;const g=Ze(a.J);qt(g,"SID",a.M),qt(g,"RID",f),qt(g,"AID",a.K),si(a,g),a.u&&a.o&&El(g,a.u,a.o),f=new Mn(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),h&&(a.i=h.G.concat(a.i)),h=xh(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),yl(a.h,f),pl(f,g,h)}function si(a,h){a.H&&L(a.H,function(f,g){qt(h,g,f)}),a.l&&L({},function(f,g){qt(h,g,f)})}function xh(a,h,f){f=Math.min(a.i.length,f);const g=a.l?c(a.l.Ka,a.l,a):null;t:{var C=a.i;let vt=-1;for(;;){const ne=["count="+f];vt==-1?f>0?(vt=C[0].g,ne.push("ofs="+vt)):vt=0:ne.push("ofs="+vt);let Lt=!0;for(let oe=0;oe<f;oe++){var N=C[oe].g;const tn=C[oe].map;if(N-=vt,N<0)vt=Math.max(0,C[oe].g-100),Lt=!1;else try{N="req"+N+"_"||"";try{var J=tn instanceof Map?tn:Object.entries(tn);for(const[_s,Un]of J){let $n=Un;l(Un)&&($n=St(Un)),ne.push(N+_s+"="+encodeURIComponent($n))}}catch(_s){throw ne.push(N+"type="+encodeURIComponent("_badmap")),_s}}catch{g&&g(tn)}}if(Lt){J=ne.join("&");break t}}J=void 0}return a=a.i.splice(0,f),h.G=a,J}function Ph(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;st||v(),ut||(st(),ut=!0),w.add(h,a),a.A=0}}function Tl(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Kr(c(a.Da,a),Dh(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,Ch(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Kr(c(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ee(10),wo(this),Ch(this))};function wl(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Ch(a){a.g=new Mn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=Ze(a.na);qt(h,"RID","rpc"),qt(h,"SID",a.M),qt(h,"AID",a.K),qt(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&qt(h,"TO",a.ia),qt(h,"TYPE","xmlhttp"),si(a,h),a.u&&a.o&&El(h,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=Eo(Ze(h)),f.u=null,f.R=!0,rh(f,a)}n.Va=function(){this.C!=null&&(this.C=null,wo(this),Tl(this),Ee(19))};function So(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Vh(a,h){var f=null;if(a.g==h){So(a),wl(a),a.g=null;var g=2}else if(_l(a.h,h))f=h.G,ch(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){f=h.u?h.u.length:0,h=Date.now()-h.F;var C=a.D;g=fs(),q(g,new Zc(g,f)),Ao(a)}else Ph(a);else if(C=h.m,C==3||C==0&&h.X>0||!(g==1&&ly(a,h)||g==2&&Tl(a)))switch(f&&f.length>0&&(h=a.h,h.i=h.i.concat(f)),C){case 1:gs(a,5);break;case 4:gs(a,10);break;case 3:gs(a,6);break;default:gs(a,2)}}}function Dh(a,h){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*h}function gs(a,h){if(a.j.info("Error code "+h),h==2){var f=c(a.bb,a),g=a.Ua;const C=!g;g=new Fn(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Qr(g,"https"),Eo(g),C?ny(g.toString(),f):sy(g.toString(),f)}else Ee(2);a.I=0,a.l&&a.l.pa(h),kh(a),Sh(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Ee(2)):(this.j.info("Failed to ping google.com"),Ee(1))};function kh(a){if(a.I=0,a.ja=[],a.l){const h=hh(a.h);(h.length!=0||a.i.length!=0)&&(O(a.ja,h),O(a.ja,a.i),a.h.i.length=0,A(a.i),a.i.length=0),a.l.oa()}}function Nh(a,h,f){var g=f instanceof Fn?Ze(f):new Fn(f);if(g.g!="")h&&(g.g=h+"."+g.g),Xr(g,g.u);else{var C=o.location;g=C.protocol,h=h?h+"."+C.hostname:C.hostname,C=+C.port;const N=new Fn(null);g&&Qr(N,g),h&&(N.g=h),C&&Xr(N,C),f&&(N.h=f),g=N}return f=a.G,h=a.wa,f&&h&&qt(g,f,h),qt(g,"VER",a.ka),si(a,g),g}function Oh(a,h,f){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Gt(new bl({ab:f})):new Gt(a.ma),h.Fa(a.L),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Mh(){}n=Mh.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Ro(){}Ro.prototype.g=function(a,h){return new Ce(a,h)};function Ce(a,h){z.call(this),this.g=new Ah(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!b(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!b(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Zs(this)}p(Ce,z),Ce.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ce.prototype.close=function(){Il(this.g)},Ce.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=St(a),a=f);h.i.push(new W_(h.Ya++,a)),h.I==3&&Ao(h)},Ce.prototype.N=function(){this.g.l=null,delete this.j,Il(this.g),delete this.g,Ce.Z.N.call(this)};function Fh(a){Xs.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){t:{for(const f in h){a=f;break t}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(Fh,Xs);function Lh(){ue.call(this),this.status=1}p(Lh,ue);function Zs(a){this.g=a}p(Zs,Mh),Zs.prototype.ra=function(){q(this.g,"a")},Zs.prototype.qa=function(a){q(this.g,new Fh(a))},Zs.prototype.pa=function(a){q(this.g,new Lh)},Zs.prototype.oa=function(){q(this.g,"b")},Ro.prototype.createWebChannel=Ro.prototype.g,Ce.prototype.send=Ce.prototype.o,Ce.prototype.open=Ce.prototype.m,Ce.prototype.close=Ce.prototype.close,Pm=function(){return new Ro},xm=function(){return fs()},Rm=ie,fu={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},vo.NO_ERROR=0,vo.TIMEOUT=8,vo.HTTP_ERROR=6,Ho=vo,th.COMPLETE="complete",Sm=th,Pe.EventType=Ge,Ge.OPEN="a",Ge.CLOSE="b",Ge.ERROR="c",Ge.MESSAGE="d",z.prototype.listen=z.prototype.J,fi=Pe,Gt.prototype.listenOnce=Gt.prototype.K,Gt.prototype.getLastError=Gt.prototype.Ha,Gt.prototype.getLastErrorCode=Gt.prototype.ya,Gt.prototype.getStatus=Gt.prototype.ca,Gt.prototype.getResponseJson=Gt.prototype.La,Gt.prototype.getResponseText=Gt.prototype.la,Gt.prototype.send=Gt.prototype.ea,Gt.prototype.setWithCredentials=Gt.prototype.Fa,Am=Gt}).apply(typeof ko<"u"?ko:typeof self<"u"?self:typeof window<"u"?window:{});const Vd="@firebase/firestore",Dd="4.9.3";/**
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
 */class ce{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ce.UNAUTHENTICATED=new ce(null),ce.GOOGLE_CREDENTIALS=new ce("google-credentials-uid"),ce.FIRST_PARTY=new ce("first-party-uid"),ce.MOCK_USER=new ce("mock-user");/**
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
 */let Ur="12.7.0";/**
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
 */const Ls=new ym("@firebase/firestore");function ur(){return Ls.logLevel}function G(n,...t){if(Ls.logLevel<=At.DEBUG){const e=t.map(ic);Ls.debug(`Firestore (${Ur}): ${n}`,...e)}}function Ae(n,...t){if(Ls.logLevel<=At.ERROR){const e=t.map(ic);Ls.error(`Firestore (${Ur}): ${n}`,...e)}}function Bs(n,...t){if(Ls.logLevel<=At.WARN){const e=t.map(ic);Ls.warn(`Firestore (${Ur}): ${n}`,...e)}}function ic(n){if(typeof n=="string")return n;try{/**
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
 */function rt(n,t,e){let s="Unexpected state";typeof t=="string"?s=t:e=t,Cm(n,s,e)}function Cm(n,t,e){let s=`FIRESTORE (${Ur}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{s+=" CONTEXT: "+JSON.stringify(e)}catch{s+=" CONTEXT: "+e}throw Ae(s),new Error(s)}function it(n,t,e,s){let r="Unexpected state";typeof e=="string"?r=e:s=e,n||Cm(t,r,s)}function mt(n,t){return n}/**
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
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class nt extends Br{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class An{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class Vm{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class II{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(ce.UNAUTHENTICATED))}shutdown(){}}class TI{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class wI{constructor(t){this.t=t,this.currentUser=ce.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){it(this.o===void 0,42304);let s=this.i;const r=u=>this.i!==s?(s=this.i,e(u)):Promise.resolve();let i=new An;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new An,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const u=i;t.enqueueRetryable(async()=>{await u.promise,await r(this.currentUser)})},l=u=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new An)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(s=>this.i!==t?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(it(typeof s.accessToken=="string",31837,{l:s}),new Vm(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return it(t===null||typeof t=="string",2055,{h:t}),new ce(t)}}class AI{constructor(t,e,s){this.P=t,this.T=e,this.I=s,this.type="FirstParty",this.user=ce.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class SI{constructor(t,e,s){this.P=t,this.T=e,this.I=s}getToken(){return Promise.resolve(new AI(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(ce.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class kd{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class RI{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,iI(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){it(this.o===void 0,3512);const s=i=>{i.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,G("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>s(i))};const r=i=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new kd(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(it(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new kd(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function xI(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let s=0;s<n;s++)e[s]=Math.floor(256*Math.random());return e}/**
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
 */class oc{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=xI(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<e&&(s+=t.charAt(r[i]%62))}return s}}function pt(n,t){return n<t?-1:n>t?1:0}function pu(n,t){const e=Math.min(n.length,t.length);for(let s=0;s<e;s++){const r=n.charAt(s),i=t.charAt(s);if(r!==i)return Ul(r)===Ul(i)?pt(r,i):Ul(r)?1:-1}return pt(n.length,t.length)}const PI=55296,CI=57343;function Ul(n){const t=n.charCodeAt(0);return t>=PI&&t<=CI}function Ar(n,t,e){return n.length===t.length&&n.every((s,r)=>e(s,t[r]))}function Dm(n){return n+"\0"}/**
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
 */const Nd="__name__";class sn{constructor(t,e,s){e===void 0?e=0:e>t.length&&rt(637,{offset:e,range:t.length}),s===void 0?s=t.length-e:s>t.length-e&&rt(1746,{length:s,range:t.length-e}),this.segments=t,this.offset=e,this.len=s}get length(){return this.len}isEqual(t){return sn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof sn?t.forEach(s=>{e.push(s)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,s=this.limit();e<s;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const s=Math.min(t.length,e.length);for(let r=0;r<s;r++){const i=sn.compareSegments(t.get(r),e.get(r));if(i!==0)return i}return pt(t.length,e.length)}static compareSegments(t,e){const s=sn.isNumericId(t),r=sn.isNumericId(e);return s&&!r?-1:!s&&r?1:s&&r?sn.extractNumericId(t).compare(sn.extractNumericId(e)):pu(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return es.fromString(t.substring(4,t.length-2))}}class Ot extends sn{construct(t,e,s){return new Ot(t,e,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const s of t){if(s.indexOf("//")>=0)throw new nt(B.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);e.push(...s.split("/").filter(r=>r.length>0))}return new Ot(e)}static emptyPath(){return new Ot([])}}const VI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ht extends sn{construct(t,e,s){return new Ht(t,e,s)}static isValidIdentifier(t){return VI.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ht.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Nd}static keyField(){return new Ht([Nd])}static fromServerFormat(t){const e=[];let s="",r=0;const i=()=>{if(s.length===0)throw new nt(B.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(s),s=""};let o=!1;for(;r<t.length;){const l=t[r];if(l==="\\"){if(r+1===t.length)throw new nt(B.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[r+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new nt(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=u,r+=2}else l==="`"?(o=!o,r++):l!=="."||o?(s+=l,r++):(i(),r++)}if(i(),o)throw new nt(B.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ht(e)}static emptyPath(){return new Ht([])}}/**
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
 */class tt{constructor(t){this.path=t}static fromPath(t){return new tt(Ot.fromString(t))}static fromName(t){return new tt(Ot.fromString(t).popFirst(5))}static empty(){return new tt(Ot.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Ot.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Ot.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new tt(new Ot(t.slice()))}}/**
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
 */function DI(n,t,e){if(!e)throw new nt(B.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function kI(n,t,e,s){if(t===!0&&s===!0)throw new nt(B.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Od(n){if(!tt.isDocumentKey(n))throw new nt(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function km(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function ac(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(s){return s.constructor?s.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":rt(12329,{type:typeof n})}function Sn(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new nt(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ac(n);throw new nt(B.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */function Yt(n,t){const e={typeString:n};return t&&(e.value=t),e}function uo(n,t){if(!km(n))throw new nt(B.INVALID_ARGUMENT,"JSON must be an object");let e;for(const s in t)if(t[s]){const r=t[s].typeString,i="value"in t[s]?{value:t[s].value}:void 0;if(!(s in n)){e=`JSON missing required field: '${s}'`;break}const o=n[s];if(r&&typeof o!==r){e=`JSON field '${s}' must be a ${r}.`;break}if(i!==void 0&&o!==i.value){e=`Expected '${s}' field to equal '${i.value}'`;break}}if(e)throw new nt(B.INVALID_ARGUMENT,e);return!0}/**
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
 */const Md=-62135596800,Fd=1e6;class Ct{static now(){return Ct.fromMillis(Date.now())}static fromDate(t){return Ct.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),s=Math.floor((t-1e3*e)*Fd);return new Ct(e,s)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new nt(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new nt(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Md)throw new nt(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new nt(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Fd}_compareTo(t){return this.seconds===t.seconds?pt(this.nanoseconds,t.nanoseconds):pt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ct._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(uo(t,Ct._jsonSchema))return new Ct(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Md;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ct._jsonSchemaVersion="firestore/timestamp/1.0",Ct._jsonSchema={type:Yt("string",Ct._jsonSchemaVersion),seconds:Yt("number"),nanoseconds:Yt("number")};/**
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
 */class lt{static fromTimestamp(t){return new lt(t)}static min(){return new lt(new Ct(0,0))}static max(){return new lt(new Ct(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Hi=-1;class _a{constructor(t,e,s,r){this.indexId=t,this.collectionGroup=e,this.fields=s,this.indexState=r}}function mu(n){return n.fields.find(t=>t.kind===2)}function Ts(n){return n.fields.filter(t=>t.kind!==2)}_a.UNKNOWN_ID=-1;class Go{constructor(t,e){this.fieldPath=t,this.kind=e}}class Gi{constructor(t,e){this.sequenceNumber=t,this.offset=e}static empty(){return new Gi(0,Le.min())}}function NI(n,t){const e=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=lt.fromTimestamp(s===1e9?new Ct(e+1,0):new Ct(e,s));return new Le(r,tt.empty(),t)}function Nm(n){return new Le(n.readTime,n.key,Hi)}class Le{constructor(t,e,s){this.readTime=t,this.documentKey=e,this.largestBatchId=s}static min(){return new Le(lt.min(),tt.empty(),Hi)}static max(){return new Le(lt.max(),tt.empty(),Hi)}}function lc(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=tt.comparator(n.documentKey,t.documentKey),e!==0?e:pt(n.largestBatchId,t.largestBatchId))}/**
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
 */const Om="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Mm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Gs(n){if(n.code!==B.FAILED_PRECONDITION||n.message!==Om)throw n;G("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&rt(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new P((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(e,i).next(s,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof P?e:P.resolve(e)}catch(e){return P.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):P.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):P.reject(e)}static resolve(t){return new P((e,s)=>{e(t)})}static reject(t){return new P((e,s)=>{s(t)})}static waitFor(t){return new P((e,s)=>{let r=0,i=0,o=!1;t.forEach(l=>{++r,l.next(()=>{++i,o&&i===r&&e()},u=>s(u))}),o=!0,i===r&&e()})}static or(t){let e=P.resolve(!1);for(const s of t)e=e.next(r=>r?P.resolve(r):s());return e}static forEach(t,e){const s=[];return t.forEach((r,i)=>{s.push(e.call(this,r,i))}),this.waitFor(s)}static mapArray(t,e){return new P((s,r)=>{const i=t.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const c=u;e(t[c]).next(d=>{o[c]=d,++l,l===i&&s(o)},d=>r(d))}})}static doWhile(t,e){return new P((s,r)=>{const i=()=>{t()===!0?e().next(()=>{i()},r):s()};i()})}}/**
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
 */const ke="SimpleDb";class Wa{static open(t,e,s,r){try{return new Wa(e,t.transaction(r,s))}catch(i){throw new Pi(e,i)}}constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.S=new An,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{e.error?this.S.reject(new Pi(t,e.error)):this.S.resolve()},this.transaction.onerror=s=>{const r=uc(s.target.error);this.S.reject(new Pi(t,r))}}get D(){return this.S.promise}abort(t){t&&this.S.reject(t),this.aborted||(G(ke,"Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const e=this.transaction.objectStore(t);return new MI(e)}}class ns{static delete(t){return G(ke,"Removing database:",t),As(hm().indexedDB.deleteDatabase(t)).toPromise()}static v(){if(!gm())return!1;if(ns.F())return!0;const t=fa(),e=ns.M(t),s=0<e&&e<10,r=Fm(t),i=0<r&&r<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||s||i)}static F(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)==null?void 0:t.__PRIVATE_USE_MOCK_PERSISTENCE)==="YES"}static O(t,e){return t.store(e)}static M(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),s=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(s)}constructor(t,e,s){this.name=t,this.version=e,this.N=s,this.B=null,ns.M(fa())===12.2&&Ae("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async L(t){return this.db||(G(ke,"Opening database:",this.name),this.db=await new Promise((e,s)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=i=>{const o=i.target.result;e(o)},r.onblocked=()=>{s(new Pi(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=i=>{const o=i.target.error;o.name==="VersionError"?s(new nt(B.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?s(new nt(B.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):s(new Pi(t,o))},r.onupgradeneeded=i=>{G(ke,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.N.k(o,r.transaction,i.oldVersion,this.version).next(()=>{G(ke,"Database upgrade to version "+this.version+" complete")})}})),this.q&&(this.db.onversionchange=e=>this.q(e)),this.db}$(t){this.q=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,s,r){const i=e==="readonly";let o=0;for(;;){++o;try{this.db=await this.L(t);const l=Wa.open(this.db,t,i?"readonly":"readwrite",s),u=r(l).next(c=>(l.C(),c)).catch(c=>(l.abort(c),P.reject(c))).toPromise();return u.catch(()=>{}),await l.D,u}catch(l){const u=l,c=u.name!=="FirebaseError"&&o<3;if(G(ke,"Transaction failed with error:",u.message,"Retrying:",c),this.close(),!c)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Fm(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}class OI{constructor(t){this.U=t,this.K=!1,this.W=null}get isDone(){return this.K}get G(){return this.W}set cursor(t){this.U=t}done(){this.K=!0}j(t){this.W=t}delete(){return As(this.U.delete())}}class Pi extends nt{constructor(t,e){super(B.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function us(n){return n.name==="IndexedDbTransactionError"}class MI{constructor(t){this.store=t}put(t,e){let s;return e!==void 0?(G(ke,"PUT",this.store.name,t,e),s=this.store.put(e,t)):(G(ke,"PUT",this.store.name,"<auto-key>",t),s=this.store.put(t)),As(s)}add(t){return G(ke,"ADD",this.store.name,t,t),As(this.store.add(t))}get(t){return As(this.store.get(t)).next(e=>(e===void 0&&(e=null),G(ke,"GET",this.store.name,t,e),e))}delete(t){return G(ke,"DELETE",this.store.name,t),As(this.store.delete(t))}count(){return G(ke,"COUNT",this.store.name),As(this.store.count())}J(t,e){const s=this.options(t,e),r=s.index?this.store.index(s.index):this.store;if(typeof r.getAll=="function"){const i=r.getAll(s.range);return new P((o,l)=>{i.onerror=u=>{l(u.target.error)},i.onsuccess=u=>{o(u.target.result)}})}{const i=this.cursor(s),o=[];return this.H(i,(l,u)=>{o.push(u)}).next(()=>o)}}Y(t,e){const s=this.store.getAll(t,e===null?void 0:e);return new P((r,i)=>{s.onerror=o=>{i(o.target.error)},s.onsuccess=o=>{r(o.target.result)}})}Z(t,e){G(ke,"DELETE ALL",this.store.name);const s=this.options(t,e);s.X=!1;const r=this.cursor(s);return this.H(r,(i,o,l)=>l.delete())}ee(t,e){let s;e?s=t:(s={},e=t);const r=this.cursor(s);return this.H(r,e)}te(t){const e=this.cursor({});return new P((s,r)=>{e.onerror=i=>{const o=uc(i.target.error);r(o)},e.onsuccess=i=>{const o=i.target.result;o?t(o.primaryKey,o.value).next(l=>{l?o.continue():s()}):s()}})}H(t,e){const s=[];return new P((r,i)=>{t.onerror=o=>{i(o.target.error)},t.onsuccess=o=>{const l=o.target.result;if(!l)return void r();const u=new OI(l),c=e(l.primaryKey,l.value,u);if(c instanceof P){const d=c.catch(p=>(u.done(),P.reject(p)));s.push(d)}u.isDone?r():u.G===null?l.continue():l.continue(u.G)}}).next(()=>P.waitFor(s))}options(t,e){let s;return t!==void 0&&(typeof t=="string"?s=t:e=t),{index:s,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const s=this.store.index(t.index);return t.X?s.openKeyCursor(t.range,e):s.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function As(n){return new P((t,e)=>{n.onsuccess=s=>{const r=s.target.result;t(r)},n.onerror=s=>{const r=uc(s.target.error);e(r)}})}let Ld=!1;function uc(n){const t=ns.M(fa());if(t>=12.2&&t<13){const e="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(e)>=0){const s=new nt("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Ld||(Ld=!0,setTimeout(()=>{throw s},0)),s}}return n}const Ci="IndexBackfiller";class FI{constructor(t,e){this.asyncQueue=t,this.ne=e,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}re(t){G(Ci,`Scheduled in ${t}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",t,async()=>{this.task=null;try{const e=await this.ne.ie();G(Ci,`Documents written: ${e}`)}catch(e){us(e)?G(Ci,"Ignoring IndexedDB error during index backfill: ",e):await Gs(e)}await this.re(6e4)})}}class LI{constructor(t,e){this.localStore=t,this.persistence=e}async ie(t=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",e=>this.se(e,t))}se(t,e){const s=new Set;let r=e,i=!0;return P.doWhile(()=>i===!0&&r>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(t).next(o=>{if(o!==null&&!s.has(o))return G(Ci,`Processing collection: ${o}`),this.oe(t,o,r).next(l=>{r-=l,s.add(o)});i=!1})).next(()=>e-r)}oe(t,e,s){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(t,e).next(r=>this.localStore.localDocuments.getNextDocuments(t,e,r,s).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(t,o).next(()=>this._e(r,i)).next(l=>(G(Ci,`Updating offset: ${l}`),this.localStore.indexManager.updateCollectionGroup(t,e,l))).next(()=>o.size)}))}_e(t,e){let s=t;return e.changes.forEach((r,i)=>{const o=Nm(i);lc(o,s)>0&&(s=o)}),new Le(s.readTime,s.documentKey,Math.max(e.batchId,t.largestBatchId))}}/**
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
 */class ze{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>e.writeSequenceNumber(s))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}ze.ce=-1;/**
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
 */const ks=-1;function Qa(n){return n==null}function Wi(n){return n===0&&1/n==-1/0}function BI(n){return typeof n=="number"&&Number.isInteger(n)&&!Wi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const ya="";function ve(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Bd(t)),t=UI(n.get(e),t);return Bd(t)}function UI(n,t){let e=t;const s=n.length;for(let r=0;r<s;r++){const i=n.charAt(r);switch(i){case"\0":e+="";break;case ya:e+="";break;default:e+=i}}return e}function Bd(n){return n+ya+""}function on(n){const t=n.length;if(it(t>=2,64408,{path:n}),t===2)return it(n.charAt(0)===ya&&n.charAt(1)==="",56145,{path:n}),Ot.emptyPath();const e=t-2,s=[];let r="";for(let i=0;i<t;){const o=n.indexOf(ya,i);switch((o<0||o>e)&&rt(50515,{path:n}),n.charAt(o+1)){case"":const l=n.substring(i,o);let u;r.length===0?u=l:(r+=l,u=r,r=""),s.push(u);break;case"":r+=n.substring(i,o),r+="\0";break;case"":r+=n.substring(i,o+1);break;default:rt(61167,{path:n})}i=o+2}return new Ot(s)}/**
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
 */const ws="remoteDocuments",co="owner",nr="owner",Qi="mutationQueues",$I="userId",We="mutations",Ud="batchId",Cs="userMutationsIndex",$d=["userId","batchId"];/**
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
 */function Wo(n,t){return[n,ve(t)]}function Lm(n,t,e){return[n,ve(t),e]}const jI={},Sr="documentMutations",va="remoteDocumentsV14",qI=["prefixPath","collectionGroup","readTime","documentId"],Qo="documentKeyIndex",zI=["prefixPath","collectionGroup","documentId"],Bm="collectionGroupIndex",KI=["collectionGroup","readTime","prefixPath","documentId"],Xi="remoteDocumentGlobal",gu="remoteDocumentGlobalKey",Rr="targets",Um="queryTargetsIndex",HI=["canonicalId","targetId"],xr="targetDocuments",GI=["targetId","path"],cc="documentTargetsIndex",WI=["path","targetId"],ba="targetGlobalKey",Ns="targetGlobal",Ji="collectionParents",QI=["collectionId","parent"],Pr="clientMetadata",XI="clientId",Xa="bundles",JI="bundleId",Ja="namedQueries",YI="name",hc="indexConfiguration",ZI="indexId",_u="collectionGroupIndex",tT="collectionGroup",Vi="indexState",eT=["indexId","uid"],$m="sequenceNumberIndex",nT=["uid","sequenceNumber"],Di="indexEntries",sT=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],jm="documentKeyIndex",rT=["indexId","uid","orderedDocumentKey"],Ya="documentOverlays",iT=["userId","collectionPath","documentId"],yu="collectionPathOverlayIndex",oT=["userId","collectionPath","largestBatchId"],qm="collectionGroupOverlayIndex",aT=["userId","collectionGroup","largestBatchId"],dc="globals",lT="name",zm=[Qi,We,Sr,ws,Rr,co,Ns,xr,Pr,Xi,Ji,Xa,Ja],uT=[...zm,Ya],Km=[Qi,We,Sr,va,Rr,co,Ns,xr,Pr,Xi,Ji,Xa,Ja,Ya],Hm=Km,fc=[...Hm,hc,Vi,Di],cT=fc,Gm=[...fc,dc],hT=Gm;/**
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
 */class vu extends Mm{constructor(t,e){super(),this.le=t,this.currentSequenceNumber=e}}function re(n,t){const e=mt(n);return ns.O(e.le,t)}/**
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
 */function jd(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Ws(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Wm(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class Kt{constructor(t,e){this.comparator=t,this.root=e||he.EMPTY}insert(t,e){return new Kt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,he.BLACK,null,null))}remove(t){return new Kt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,he.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const s=this.comparator(t,e.key);if(s===0)return e.value;s<0?e=e.left:s>0&&(e=e.right)}return null}indexOf(t){let e=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(t,s.key);if(r===0)return e+s.left.size;r<0?s=s.left:(e+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,s)=>(t(e,s),!1))}toString(){const t=[];return this.inorderTraversal((e,s)=>(t.push(`${e}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new No(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new No(this.root,t,this.comparator,!1)}getReverseIterator(){return new No(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new No(this.root,t,this.comparator,!0)}}class No{constructor(t,e,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?s(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class he{constructor(t,e,s,r,i){this.key=t,this.value=e,this.color=s??he.RED,this.left=r??he.EMPTY,this.right=i??he.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,s,r,i){return new he(t??this.key,e??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,s){let r=this;const i=s(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,s),null):i===0?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return he.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let s,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),e(t,r.key)===0){if(r.right.isEmpty())return he.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,he.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,he.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw rt(43730,{key:this.key,value:this.value});if(this.right.isRed())throw rt(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw rt(27949);return t+(this.isRed()?0:1)}}he.EMPTY=null,he.RED=!0,he.BLACK=!1;he.EMPTY=new class{constructor(){this.size=0}get key(){throw rt(57766)}get value(){throw rt(16141)}get color(){throw rt(16727)}get left(){throw rt(29726)}get right(){throw rt(36894)}copy(t,e,s,r,i){return this}insert(t,e,s){return new he(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class kt{constructor(t){this.comparator=t,this.data=new Kt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,s)=>(t(e),!1))}forEachInRange(t,e){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let s;for(s=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new qd(this.data.getIterator())}getIteratorFrom(t){return new qd(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(s=>{e=e.add(s)}),e}isEqual(t){if(!(t instanceof kt)||this.size!==t.size)return!1;const e=this.data.getIterator(),s=t.data.getIterator();for(;e.hasNext();){const r=e.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new kt(this.comparator);return e.data=t,e}}class qd{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function sr(n){return n.hasNext()?n.getNext():void 0}/**
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
 */class Ke{constructor(t){this.fields=t,t.sort(Ht.comparator)}static empty(){return new Ke([])}unionWith(t){let e=new kt(Ht.comparator);for(const s of this.fields)e=e.add(s);for(const s of t)e=e.add(s);return new Ke(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ar(this.fields,t.fields,(e,s)=>e.isEqual(s))}}/**
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
 */class Qm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class te{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Qm("Invalid base64 string: "+i):i}}(t);return new te(e)}static fromUint8Array(t){const e=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(t);return new te(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const s=new Uint8Array(e.length);for(let r=0;r<e.length;r++)s[r]=e.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return pt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}te.EMPTY_BYTE_STRING=new te("");const dT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Dn(n){if(it(!!n,39018),typeof n=="string"){let t=0;const e=dT.exec(n);if(it(!!e,46558,{timestamp:n}),e[1]){let r=e[1];r=(r+"000000000").substr(0,9),t=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:zt(n.seconds),nanos:zt(n.nanos)}}function zt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function kn(n){return typeof n=="string"?te.fromBase64String(n):te.fromUint8Array(n)}/**
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
 */const Xm="server_timestamp",Jm="__type__",Ym="__previous_value__",Zm="__local_write_time__";function pc(n){var e,s;return((s=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[Jm])==null?void 0:s.stringValue)===Xm}function Za(n){const t=n.mapValue.fields[Ym];return pc(t)?Za(t):t}function Yi(n){const t=Dn(n.mapValue.fields[Zm].timestampValue);return new Ct(t.seconds,t.nanos)}/**
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
 */class fT{constructor(t,e,s,r,i,o,l,u,c,d){this.databaseId=t,this.appId=e,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=d}}const Ea="(default)";class Us{constructor(t,e){this.projectId=t,this.database=e||Ea}static empty(){return new Us("","")}get isDefaultDatabase(){return this.database===Ea}isEqual(t){return t instanceof Us&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const mc="__type__",tg="__max__",Jn={mapValue:{fields:{__type__:{stringValue:tg}}}},gc="__vector__",Cr="value",Xo={nullValue:"NULL_VALUE"};function is(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?pc(n)?4:eg(n)?9007199254740991:tl(n)?10:11:rt(28295,{value:n})}function mn(n,t){if(n===t)return!0;const e=is(n);if(e!==is(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Yi(n).isEqual(Yi(t));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=Dn(r.timestampValue),l=Dn(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(r,i){return kn(r.bytesValue).isEqual(kn(i.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(r,i){return zt(r.geoPointValue.latitude)===zt(i.geoPointValue.latitude)&&zt(r.geoPointValue.longitude)===zt(i.geoPointValue.longitude)}(n,t);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return zt(r.integerValue)===zt(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=zt(r.doubleValue),l=zt(i.doubleValue);return o===l?Wi(o)===Wi(l):isNaN(o)&&isNaN(l)}return!1}(n,t);case 9:return Ar(n.arrayValue.values||[],t.arrayValue.values||[],mn);case 10:case 11:return function(r,i){const o=r.mapValue.fields||{},l=i.mapValue.fields||{};if(jd(o)!==jd(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!mn(o[u],l[u])))return!1;return!0}(n,t);default:return rt(52216,{left:n})}}function Zi(n,t){return(n.values||[]).find(e=>mn(e,t))!==void 0}function os(n,t){if(n===t)return 0;const e=is(n),s=is(t);if(e!==s)return pt(e,s);switch(e){case 0:case 9007199254740991:return 0;case 1:return pt(n.booleanValue,t.booleanValue);case 2:return function(i,o){const l=zt(i.integerValue||i.doubleValue),u=zt(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,t);case 3:return zd(n.timestampValue,t.timestampValue);case 4:return zd(Yi(n),Yi(t));case 5:return pu(n.stringValue,t.stringValue);case 6:return function(i,o){const l=kn(i),u=kn(o);return l.compareTo(u)}(n.bytesValue,t.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=pt(l[c],u[c]);if(d!==0)return d}return pt(l.length,u.length)}(n.referenceValue,t.referenceValue);case 8:return function(i,o){const l=pt(zt(i.latitude),zt(o.latitude));return l!==0?l:pt(zt(i.longitude),zt(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Kd(n.arrayValue,t.arrayValue);case 10:return function(i,o){var y,A,O,k;const l=i.fields||{},u=o.fields||{},c=(y=l[Cr])==null?void 0:y.arrayValue,d=(A=u[Cr])==null?void 0:A.arrayValue,p=pt(((O=c==null?void 0:c.values)==null?void 0:O.length)||0,((k=d==null?void 0:d.values)==null?void 0:k.length)||0);return p!==0?p:Kd(c,d)}(n.mapValue,t.mapValue);case 11:return function(i,o){if(i===Jn.mapValue&&o===Jn.mapValue)return 0;if(i===Jn.mapValue)return 1;if(o===Jn.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const y=pu(u[p],d[p]);if(y!==0)return y;const A=os(l[u[p]],c[d[p]]);if(A!==0)return A}return pt(u.length,d.length)}(n.mapValue,t.mapValue);default:throw rt(23264,{he:e})}}function zd(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return pt(n,t);const e=Dn(n),s=Dn(t),r=pt(e.seconds,s.seconds);return r!==0?r:pt(e.nanos,s.nanos)}function Kd(n,t){const e=n.values||[],s=t.values||[];for(let r=0;r<e.length&&r<s.length;++r){const i=os(e[r],s[r]);if(i)return i}return pt(e.length,s.length)}function Vr(n){return bu(n)}function bu(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const s=Dn(e);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return kn(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return tt.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let s="[",r=!0;for(const i of e.values||[])r?r=!1:s+=",",s+=bu(i);return s+"]"}(n.arrayValue):"mapValue"in n?function(e){const s=Object.keys(e.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${bu(e.fields[o])}`;return r+"}"}(n.mapValue):rt(61005,{value:n})}function Jo(n){switch(is(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Za(n);return t?16+Jo(t):16;case 5:return 2*n.stringValue.length;case 6:return kn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((r,i)=>r+Jo(i),0)}(n.arrayValue);case 10:case 11:return function(s){let r=0;return Ws(s.fields,(i,o)=>{r+=i.length+Jo(o)}),r}(n.mapValue);default:throw rt(13486,{value:n})}}function _c(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Eu(n){return!!n&&"integerValue"in n}function to(n){return!!n&&"arrayValue"in n}function Hd(n){return!!n&&"nullValue"in n}function Gd(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Yo(n){return!!n&&"mapValue"in n}function tl(n){var e,s;return((s=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[mc])==null?void 0:s.stringValue)===gc}function ki(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return Ws(n.mapValue.fields,(e,s)=>t.mapValue.fields[e]=ki(s)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=ki(n.arrayValue.values[e]);return t}return{...n}}function eg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===tg}const ng={mapValue:{fields:{[mc]:{stringValue:gc},[Cr]:{arrayValue:{}}}}};function pT(n){return"nullValue"in n?Xo:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?_c(Us.empty(),tt.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?tl(n)?ng:{mapValue:{}}:rt(35942,{value:n})}function mT(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?_c(Us.empty(),tt.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?ng:"mapValue"in n?tl(n)?{mapValue:{}}:Jn:rt(61959,{value:n})}function Wd(n,t){const e=os(n.value,t.value);return e!==0?e:n.inclusive&&!t.inclusive?-1:!n.inclusive&&t.inclusive?1:0}function Qd(n,t){const e=os(n.value,t.value);return e!==0?e:n.inclusive&&!t.inclusive?1:!n.inclusive&&t.inclusive?-1:0}/**
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
 */class Re{constructor(t){this.value=t}static empty(){return new Re({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let s=0;s<t.length-1;++s)if(e=(e.mapValue.fields||{})[t.get(s)],!Yo(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ki(e)}setAll(t){let e=Ht.emptyPath(),s={},r=[];t.forEach((o,l)=>{if(!e.isImmediateParentOf(l)){const u=this.getFieldsMap(e);this.applyChanges(u,s,r),s={},r=[],e=l.popLast()}o?s[l.lastSegment()]=ki(o):r.push(l.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,s,r)}delete(t){const e=this.field(t.popLast());Yo(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return mn(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let s=0;s<t.length;++s){let r=e.mapValue.fields[t.get(s)];Yo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(s)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,s){Ws(e,(r,i)=>t[r]=i);for(const r of s)delete t[r]}clone(){return new Re(ki(this.value))}}function sg(n){const t=[];return Ws(n.fields,(e,s)=>{const r=new Ht([e]);if(Yo(s)){const i=sg(s.mapValue).fields;if(i.length===0)t.push(r);else for(const o of i)t.push(r.child(o))}else t.push(r)}),new Ke(t)}/**
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
 */class Wt{constructor(t,e,s,r,i,o,l){this.key=t,this.documentType=e,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(t){return new Wt(t,0,lt.min(),lt.min(),lt.min(),Re.empty(),0)}static newFoundDocument(t,e,s,r){return new Wt(t,1,e,lt.min(),s,r,0)}static newNoDocument(t,e){return new Wt(t,2,e,lt.min(),lt.min(),Re.empty(),0)}static newUnknownDocument(t,e){return new Wt(t,3,e,lt.min(),lt.min(),Re.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(lt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Re.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Re.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=lt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Wt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Dr{constructor(t,e){this.position=t,this.inclusive=e}}function Xd(n,t,e){let s=0;for(let r=0;r<n.position.length;r++){const i=t[r],o=n.position[r];if(i.field.isKeyField()?s=tt.comparator(tt.fromName(o.referenceValue),e.key):s=os(o,e.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Jd(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!mn(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Ia{constructor(t,e="asc"){this.field=t,this.dir=e}}function gT(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class rg{}class It extends rg{constructor(t,e,s){super(),this.field=t,this.op=e,this.value=s}static create(t,e,s){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,s):new _T(t,e,s):e==="array-contains"?new bT(t,s):e==="in"?new cg(t,s):e==="not-in"?new ET(t,s):e==="array-contains-any"?new IT(t,s):new It(t,e,s)}static createKeyFieldInFilter(t,e,s){return e==="in"?new yT(t,s):new vT(t,s)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(os(e,this.value)):e!==null&&is(this.value)===is(e)&&this.matchesComparison(os(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return rt(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Mt extends rg{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new Mt(t,e)}matches(t){return kr(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function kr(n){return n.op==="and"}function Iu(n){return n.op==="or"}function yc(n){return ig(n)&&kr(n)}function ig(n){for(const t of n.filters)if(t instanceof Mt)return!1;return!0}function Tu(n){if(n instanceof It)return n.field.canonicalString()+n.op.toString()+Vr(n.value);if(yc(n))return n.filters.map(t=>Tu(t)).join(",");{const t=n.filters.map(e=>Tu(e)).join(",");return`${n.op}(${t})`}}function og(n,t){return n instanceof It?function(s,r){return r instanceof It&&s.op===r.op&&s.field.isEqual(r.field)&&mn(s.value,r.value)}(n,t):n instanceof Mt?function(s,r){return r instanceof Mt&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,o,l)=>i&&og(o,r.filters[l]),!0):!1}(n,t):void rt(19439)}function ag(n,t){const e=n.filters.concat(t);return Mt.create(e,n.op)}function lg(n){return n instanceof It?function(e){return`${e.field.canonicalString()} ${e.op} ${Vr(e.value)}`}(n):n instanceof Mt?function(e){return e.op.toString()+" {"+e.getFilters().map(lg).join(" ,")+"}"}(n):"Filter"}class _T extends It{constructor(t,e,s){super(t,e,s),this.key=tt.fromName(s.referenceValue)}matches(t){const e=tt.comparator(t.key,this.key);return this.matchesComparison(e)}}class yT extends It{constructor(t,e){super(t,"in",e),this.keys=ug("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class vT extends It{constructor(t,e){super(t,"not-in",e),this.keys=ug("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function ug(n,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map(s=>tt.fromName(s.referenceValue))}class bT extends It{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return to(e)&&Zi(e.arrayValue,this.value)}}class cg extends It{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Zi(this.value.arrayValue,e)}}class ET extends It{constructor(t,e){super(t,"not-in",e)}matches(t){if(Zi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Zi(this.value.arrayValue,e)}}class IT extends It{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!to(e)||!e.arrayValue.values)&&e.arrayValue.values.some(s=>Zi(this.value.arrayValue,s))}}/**
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
 */class TT{constructor(t,e=null,s=[],r=[],i=null,o=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function wu(n,t=null,e=[],s=[],r=null,i=null,o=null){return new TT(n,t,e,s,r,i,o)}function $s(n){const t=mt(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(s=>Tu(s)).join(","),e+="|ob:",e+=t.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Qa(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(s=>Vr(s)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(s=>Vr(s)).join(",")),t.Te=e}return t.Te}function ho(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!gT(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!og(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Jd(n.startAt,t.startAt)&&Jd(n.endAt,t.endAt)}function Ta(n){return tt.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function wa(n,t){return n.filters.filter(e=>e instanceof It&&e.field.isEqual(t))}function Yd(n,t,e){let s=Xo,r=!0;for(const i of wa(n,t)){let o=Xo,l=!0;switch(i.op){case"<":case"<=":o=pT(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,l=!1;break;case"!=":case"not-in":o=Xo}Wd({value:s,inclusive:r},{value:o,inclusive:l})<0&&(s=o,r=l)}if(e!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(t)){const o=e.position[i];Wd({value:s,inclusive:r},{value:o,inclusive:e.inclusive})<0&&(s=o,r=e.inclusive);break}}return{value:s,inclusive:r}}function Zd(n,t,e){let s=Jn,r=!0;for(const i of wa(n,t)){let o=Jn,l=!0;switch(i.op){case">=":case">":o=mT(i.value),l=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,l=!1;break;case"!=":case"not-in":o=Jn}Qd({value:s,inclusive:r},{value:o,inclusive:l})>0&&(s=o,r=l)}if(e!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(t)){const o=e.position[i];Qd({value:s,inclusive:r},{value:o,inclusive:e.inclusive})>0&&(s=o,r=e.inclusive);break}}return{value:s,inclusive:r}}/**
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
 */class el{constructor(t,e=null,s=[],r=[],i=null,o="F",l=null,u=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function wT(n,t,e,s,r,i,o,l){return new el(n,t,e,s,r,i,o,l)}function fo(n){return new el(n)}function tf(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function AT(n){return n.collectionGroup!==null}function Ni(n){const t=mt(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const i of t.explicitOrderBy)t.Ie.push(i),e.add(i.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new kt(Ht.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(t).forEach(i=>{e.has(i.canonicalString())||i.isKeyField()||t.Ie.push(new Ia(i,s))}),e.has(Ht.keyField().canonicalString())||t.Ie.push(new Ia(Ht.keyField(),s))}return t.Ie}function He(n){const t=mt(n);return t.Ee||(t.Ee=ST(t,Ni(n))),t.Ee}function ST(n,t){if(n.limitType==="F")return wu(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new Ia(r.field,i)});const e=n.endAt?new Dr(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Dr(n.startAt.position,n.startAt.inclusive):null;return wu(n.path,n.collectionGroup,t,n.filters,n.limit,e,s)}}function Au(n,t,e){return new el(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function nl(n,t){return ho(He(n),He(t))&&n.limitType===t.limitType}function hg(n){return`${$s(He(n))}|lt:${n.limitType}`}function cr(n){return`Query(target=${function(e){let s=e.path.canonicalString();return e.collectionGroup!==null&&(s+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(s+=`, filters: [${e.filters.map(r=>lg(r)).join(", ")}]`),Qa(e.limit)||(s+=", limit: "+e.limit),e.orderBy.length>0&&(s+=`, orderBy: [${e.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),e.startAt&&(s+=", startAt: ",s+=e.startAt.inclusive?"b:":"a:",s+=e.startAt.position.map(r=>Vr(r)).join(",")),e.endAt&&(s+=", endAt: ",s+=e.endAt.inclusive?"a:":"b:",s+=e.endAt.position.map(r=>Vr(r)).join(",")),`Target(${s})`}(He(n))}; limitType=${n.limitType})`}function po(n,t){return t.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):tt.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(n,t)&&function(s,r){for(const i of Ni(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(n,t)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(n,t)&&function(s,r){return!(s.startAt&&!function(o,l,u){const c=Xd(o,l,u);return o.inclusive?c<=0:c<0}(s.startAt,Ni(s),r)||s.endAt&&!function(o,l,u){const c=Xd(o,l,u);return o.inclusive?c>=0:c>0}(s.endAt,Ni(s),r))}(n,t)}function RT(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function dg(n){return(t,e)=>{let s=!1;for(const r of Ni(n)){const i=xT(r,t,e);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function xT(n,t,e){const s=n.field.isKeyField()?tt.comparator(t.key,e.key):function(i,o,l){const u=o.data.field(i),c=l.data.field(i);return u!==null&&c!==null?os(u,c):rt(42886)}(n.field,t,e);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return rt(19790,{direction:n.dir})}}/**
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
 */class On{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),s=this.inner[e];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,t))return i}}has(t){return this.get(t)!==void 0}set(t,e){const s=this.mapKeyFn(t),r=this.inner[s];if(r===void 0)return this.inner[s]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),s=this.inner[e];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return s.length===1?delete this.inner[e]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Ws(this.inner,(e,s)=>{for(const[r,i]of s)t(r,i)})}isEmpty(){return Wm(this.inner)}size(){return this.innerSize}}/**
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
 */const PT=new Kt(tt.comparator);function Oe(){return PT}const fg=new Kt(tt.comparator);function pi(...n){let t=fg;for(const e of n)t=t.insert(e.key,e);return t}function pg(n){let t=fg;return n.forEach((e,s)=>t=t.insert(e,s.overlayedDocument)),t}function an(){return Oi()}function mg(){return Oi()}function Oi(){return new On(n=>n.toString(),(n,t)=>n.isEqual(t))}const CT=new Kt(tt.comparator),VT=new kt(tt.comparator);function bt(...n){let t=VT;for(const e of n)t=t.add(e);return t}const DT=new kt(pt);function kT(){return DT}/**
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
 */function vc(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wi(t)?"-0":t}}function gg(n){return{integerValue:""+n}}function NT(n,t){return BI(t)?gg(t):vc(n,t)}/**
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
 */class sl{constructor(){this._=void 0}}function OT(n,t,e){return n instanceof eo?function(r,i){const o={fields:{[Jm]:{stringValue:Xm},[Zm]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&pc(i)&&(i=Za(i)),i&&(o.fields[Ym]=i),{mapValue:o}}(e,t):n instanceof Nr?yg(n,t):n instanceof Or?vg(n,t):function(r,i){const o=_g(r,i),l=ef(o)+ef(r.Ae);return Eu(o)&&Eu(r.Ae)?gg(l):vc(r.serializer,l)}(n,t)}function MT(n,t,e){return n instanceof Nr?yg(n,t):n instanceof Or?vg(n,t):e}function _g(n,t){return n instanceof no?function(s){return Eu(s)||function(i){return!!i&&"doubleValue"in i}(s)}(t)?t:{integerValue:0}:null}class eo extends sl{}class Nr extends sl{constructor(t){super(),this.elements=t}}function yg(n,t){const e=bg(t);for(const s of n.elements)e.some(r=>mn(r,s))||e.push(s);return{arrayValue:{values:e}}}class Or extends sl{constructor(t){super(),this.elements=t}}function vg(n,t){let e=bg(t);for(const s of n.elements)e=e.filter(r=>!mn(r,s));return{arrayValue:{values:e}}}class no extends sl{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function ef(n){return zt(n.integerValue||n.doubleValue)}function bg(n){return to(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class FT{constructor(t,e){this.field=t,this.transform=e}}function LT(n,t){return n.field.isEqual(t.field)&&function(s,r){return s instanceof Nr&&r instanceof Nr||s instanceof Or&&r instanceof Or?Ar(s.elements,r.elements,mn):s instanceof no&&r instanceof no?mn(s.Ae,r.Ae):s instanceof eo&&r instanceof eo}(n.transform,t.transform)}class BT{constructor(t,e){this.version=t,this.transformResults=e}}class Me{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Me}static exists(t){return new Me(void 0,t)}static updateTime(t){return new Me(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Zo(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class rl{}function Eg(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new bc(n.key,Me.none()):new $r(n.key,n.data,Me.none());{const e=n.data,s=Re.empty();let r=new kt(Ht.comparator);for(let i of t.fields)if(!r.has(i)){let o=e.field(i);o===null&&i.length>1&&(i=i.popLast(),o=e.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new cs(n.key,s,new Ke(r.toArray()),Me.none())}}function UT(n,t,e){n instanceof $r?function(r,i,o){const l=r.value.clone(),u=sf(r.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,t,e):n instanceof cs?function(r,i,o){if(!Zo(r.precondition,i))return void i.convertToUnknownDocument(o.version);const l=sf(r.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(Ig(r)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,t,e):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function Mi(n,t,e,s){return n instanceof $r?function(i,o,l,u){if(!Zo(i.precondition,o))return l;const c=i.value.clone(),d=rf(i.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(n,t,e,s):n instanceof cs?function(i,o,l,u){if(!Zo(i.precondition,o))return l;const c=rf(i.fieldTransforms,u,o),d=o.data;return d.setAll(Ig(i)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(n,t,e,s):function(i,o,l){return Zo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(n,t,e)}function $T(n,t){let e=null;for(const s of n.fieldTransforms){const r=t.data.field(s.field),i=_g(s.transform,r||null);i!=null&&(e===null&&(e=Re.empty()),e.set(s.field,i))}return e||null}function nf(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Ar(s,r,(i,o)=>LT(i,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class $r extends rl{constructor(t,e,s,r=[]){super(),this.key=t,this.value=e,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class cs extends rl{constructor(t,e,s,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ig(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const s=n.data.field(e);t.set(e,s)}}),t}function sf(n,t,e){const s=new Map;it(n.length===e.length,32656,{Re:e.length,Ve:n.length});for(let r=0;r<e.length;r++){const i=n[r],o=i.transform,l=t.data.field(i.field);s.set(i.field,MT(o,l,e[r]))}return s}function rf(n,t,e){const s=new Map;for(const r of n){const i=r.transform,o=e.data.field(r.field);s.set(r.field,OT(i,o,t))}return s}class bc extends rl{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Tg extends rl{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Ec{constructor(t,e,s,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(t,e){const s=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(t.key)&&UT(i,t,s[r])}}applyToLocalView(t,e){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(e=Mi(s,t,e,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(e=Mi(s,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const s=mg();return this.mutations.forEach(r=>{const i=t.get(r.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=e.has(r.key)?null:l;const u=Eg(o,l);u!==null&&s.set(r.key,u),o.isValidDocument()||o.convertToNoDocument(lt.min())}),s}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),bt())}isEqual(t){return this.batchId===t.batchId&&Ar(this.mutations,t.mutations,(e,s)=>nf(e,s))&&Ar(this.baseMutations,t.baseMutations,(e,s)=>nf(e,s))}}class Ic{constructor(t,e,s,r){this.batch=t,this.commitVersion=e,this.mutationResults=s,this.docVersions=r}static from(t,e,s){it(t.mutations.length===s.length,58842,{me:t.mutations.length,fe:s.length});let r=function(){return CT}();const i=t.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Ic(t,e,s,r)}}/**
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
 */class Tc{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class jT{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var Jt,Tt;function qT(n){switch(n){case B.OK:return rt(64938);case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0;default:return rt(15467,{code:n})}}function wg(n){if(n===void 0)return Ae("GRPC error has no .code"),B.UNKNOWN;switch(n){case Jt.OK:return B.OK;case Jt.CANCELLED:return B.CANCELLED;case Jt.UNKNOWN:return B.UNKNOWN;case Jt.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case Jt.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case Jt.INTERNAL:return B.INTERNAL;case Jt.UNAVAILABLE:return B.UNAVAILABLE;case Jt.UNAUTHENTICATED:return B.UNAUTHENTICATED;case Jt.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case Jt.NOT_FOUND:return B.NOT_FOUND;case Jt.ALREADY_EXISTS:return B.ALREADY_EXISTS;case Jt.PERMISSION_DENIED:return B.PERMISSION_DENIED;case Jt.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case Jt.ABORTED:return B.ABORTED;case Jt.OUT_OF_RANGE:return B.OUT_OF_RANGE;case Jt.UNIMPLEMENTED:return B.UNIMPLEMENTED;case Jt.DATA_LOSS:return B.DATA_LOSS;default:return rt(39323,{code:n})}}(Tt=Jt||(Jt={}))[Tt.OK=0]="OK",Tt[Tt.CANCELLED=1]="CANCELLED",Tt[Tt.UNKNOWN=2]="UNKNOWN",Tt[Tt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Tt[Tt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Tt[Tt.NOT_FOUND=5]="NOT_FOUND",Tt[Tt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Tt[Tt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Tt[Tt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Tt[Tt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Tt[Tt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Tt[Tt.ABORTED=10]="ABORTED",Tt[Tt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Tt[Tt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Tt[Tt.INTERNAL=13]="INTERNAL",Tt[Tt.UNAVAILABLE=14]="UNAVAILABLE",Tt[Tt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function zT(){return new TextEncoder}/**
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
 */const KT=new es([4294967295,4294967295],0);function of(n){const t=zT().encode(n),e=new wm;return e.update(t),new Uint8Array(e.digest())}function af(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),s=t.getUint32(4,!0),r=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new es([e,s],0),new es([r,i],0)]}class wc{constructor(t,e,s){if(this.bitmap=t,this.padding=e,this.hashCount=s,e<0||e>=8)throw new mi(`Invalid padding: ${e}`);if(s<0)throw new mi(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new mi(`Invalid hash count: ${s}`);if(t.length===0&&e!==0)throw new mi(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=es.fromNumber(this.ge)}ye(t,e,s){let r=t.add(e.multiply(es.fromNumber(s)));return r.compare(KT)===1&&(r=new es([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=of(t),[s,r]=af(e);for(let i=0;i<this.hashCount;i++){const o=this.ye(s,r,i);if(!this.we(o))return!1}return!0}static create(t,e,s){const r=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new wc(i,r,e);return s.forEach(l=>o.insert(l)),o}insert(t){if(this.ge===0)return;const e=of(t),[s,r]=af(e);for(let i=0;i<this.hashCount;i++){const o=this.ye(s,r,i);this.Se(o)}}Se(t){const e=Math.floor(t/8),s=t%8;this.bitmap[e]|=1<<s}}class mi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class il{constructor(t,e,s,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,s){const r=new Map;return r.set(t,mo.createSynthesizedTargetChangeForCurrentChange(t,e,s)),new il(lt.min(),r,new Kt(pt),Oe(),bt())}}class mo{constructor(t,e,s,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,s){return new mo(s,e,bt(),bt(),bt())}}/**
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
 */class ta{constructor(t,e,s,r){this.be=t,this.removedTargetIds=e,this.key=s,this.De=r}}class Ag{constructor(t,e){this.targetId=t,this.Ce=e}}class Sg{constructor(t,e,s=te.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=s,this.cause=r}}class lf{constructor(){this.ve=0,this.Fe=uf(),this.Me=te.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=bt(),e=bt(),s=bt();return this.Fe.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:s=s.add(r);break;default:rt(38017,{changeType:i})}}),new mo(this.Me,this.xe,t,e,s)}qe(){this.Oe=!1,this.Fe=uf()}Qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,it(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class HT{constructor(t){this.Ge=t,this.ze=new Map,this.je=Oe(),this.Je=Oo(),this.He=Oo(),this.Ye=new Kt(pt)}Ze(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Xe(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,e=>{const s=this.nt(e);switch(t.state){case 0:this.rt(e)&&s.Le(t.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(t.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(s.We(),s.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),s.Le(t.resumeToken));break;default:rt(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach((s,r)=>{this.rt(r)&&e(r)})}st(t){const e=t.targetId,s=t.Ce.count,r=this.ot(e);if(r){const i=r.target;if(Ta(i))if(s===0){const o=new tt(i.path);this.et(e,o,Wt.newNoDocument(o,lt.min()))}else it(s===1,20013,{expectedCount:s});else{const o=this._t(e);if(o!==s){const l=this.ut(t),u=l?this.ct(l,t,o):1;if(u!==0){this.it(e);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(e,c)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=e;let o,l;try{o=kn(s).toUint8Array()}catch(u){if(u instanceof Qm)return Bs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new wc(o,r,i)}catch(u){return Bs(u instanceof mi?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(t,e,s){return e.Ce.count===s-this.Pt(t,e.targetId)?0:2}Pt(t,e){const s=this.Ge.getRemoteKeysForTarget(e);let r=0;return s.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.mightContain(l)||(this.et(e,i,null),r++)}),r}Tt(t){const e=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&Ta(l.target)){const u=new tt(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,Wt.newNoDocument(u,t))}i.Be&&(e.set(o,i.ke()),i.qe())}});let s=bt();this.He.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(s=s.add(i))}),this.je.forEach((i,o)=>o.setReadTime(t));const r=new il(t,e,this.Ye,this.je,s);return this.je=Oe(),this.Je=Oo(),this.He=Oo(),this.Ye=new Kt(pt),r}Xe(t,e){if(!this.rt(t))return;const s=this.Et(t,e.key)?2:0;this.nt(t).Qe(e.key,s),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.He=this.He.insert(e.key,this.dt(e.key).add(t))}et(t,e,s){if(!this.rt(t))return;const r=this.nt(t);this.Et(t,e)?r.Qe(e,1):r.$e(e),this.He=this.He.insert(e,this.dt(e).delete(t)),this.He=this.He.insert(e,this.dt(e).add(t)),s&&(this.je=this.je.insert(e,s))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let e=this.ze.get(t);return e||(e=new lf,this.ze.set(t,e)),e}dt(t){let e=this.He.get(t);return e||(e=new kt(pt),this.He=this.He.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new kt(pt),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||G("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new lf),this.Ge.getRemoteKeysForTarget(t).forEach(e=>{this.et(t,e,null)})}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function Oo(){return new Kt(tt.comparator)}function uf(){return new Kt(tt.comparator)}const GT={asc:"ASCENDING",desc:"DESCENDING"},WT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},QT={and:"AND",or:"OR"};class XT{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Su(n,t){return n.useProto3Json||Qa(t)?t:{value:t}}function Mr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Rg(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function JT(n,t){return Mr(n,t.toTimestamp())}function Se(n){return it(!!n,49232),lt.fromTimestamp(function(e){const s=Dn(e);return new Ct(s.seconds,s.nanos)}(n))}function Ac(n,t){return Ru(n,t).canonicalString()}function Ru(n,t){const e=function(r){return new Ot(["projects",r.projectId,"databases",r.database])}(n).child("documents");return t===void 0?e:e.child(t)}function xg(n){const t=Ot.fromString(n);return it(Fg(t),10190,{key:t.toString()}),t}function Aa(n,t){return Ac(n.databaseId,t.path)}function Os(n,t){const e=xg(t);if(e.get(1)!==n.databaseId.projectId)throw new nt(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new nt(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new tt(Vg(e))}function Pg(n,t){return Ac(n.databaseId,t)}function Cg(n){const t=xg(n);return t.length===4?Ot.emptyPath():Vg(t)}function xu(n){return new Ot(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Vg(n){return it(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function cf(n,t,e){return{name:Aa(n,t),fields:e.value.mapValue.fields}}function YT(n,t,e){const s=Os(n,t.name),r=Se(t.updateTime),i=t.createTime?Se(t.createTime):lt.min(),o=new Re({mapValue:{fields:t.fields}}),l=Wt.newFoundDocument(s,r,i,o);return e&&l.setHasCommittedMutations(),e?l.setHasCommittedMutations():l}function ZT(n,t){let e;if("targetChange"in t){t.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:rt(39313,{state:c})}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],i=function(c,d){return c.useProto3Json?(it(d===void 0||typeof d=="string",58123),te.fromBase64String(d||"")):(it(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),te.fromUint8Array(d||new Uint8Array))}(n,t.targetChange.resumeToken),o=t.targetChange.cause,l=o&&function(c){const d=c.code===void 0?B.UNKNOWN:wg(c.code);return new nt(d,c.message||"")}(o);e=new Sg(s,r,i,l||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const r=Os(n,s.document.name),i=Se(s.document.updateTime),o=s.document.createTime?Se(s.document.createTime):lt.min(),l=new Re({mapValue:{fields:s.document.fields}}),u=Wt.newFoundDocument(r,i,o,l),c=s.targetIds||[],d=s.removedTargetIds||[];e=new ta(c,d,u.key,u)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const r=Os(n,s.document),i=s.readTime?Se(s.readTime):lt.min(),o=Wt.newNoDocument(r,i),l=s.removedTargetIds||[];e=new ta([],l,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const r=Os(n,s.document),i=s.removedTargetIds||[];e=new ta([],i,r,null)}else{if(!("filter"in t))return rt(11601,{Rt:t});{t.filter;const s=t.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new jT(r,i),l=s.targetId;e=new Ag(l,o)}}return e}function Sa(n,t){let e;if(t instanceof $r)e={update:cf(n,t.key,t.value)};else if(t instanceof bc)e={delete:Aa(n,t.key)};else if(t instanceof cs)e={update:cf(n,t.key,t.data),updateMask:iw(t.fieldMask)};else{if(!(t instanceof Tg))return rt(16599,{Vt:t.type});e={verify:Aa(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(s=>function(i,o){const l=o.transform;if(l instanceof eo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Nr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Or)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof no)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw rt(20930,{transform:o.transform})}(0,s))),t.precondition.isNone||(e.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:JT(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:rt(27497)}(n,t.precondition)),e}function Pu(n,t){const e=t.currentDocument?function(i){return i.updateTime!==void 0?Me.updateTime(Se(i.updateTime)):i.exists!==void 0?Me.exists(i.exists):Me.none()}(t.currentDocument):Me.none(),s=t.updateTransforms?t.updateTransforms.map(r=>function(o,l){let u=null;if("setToServerValue"in l)it(l.setToServerValue==="REQUEST_TIME",16630,{proto:l}),u=new eo;else if("appendMissingElements"in l){const d=l.appendMissingElements.values||[];u=new Nr(d)}else if("removeAllFromArray"in l){const d=l.removeAllFromArray.values||[];u=new Or(d)}else"increment"in l?u=new no(o,l.increment):rt(16584,{proto:l});const c=Ht.fromServerFormat(l.fieldPath);return new FT(c,u)}(n,r)):[];if(t.update){t.update.name;const r=Os(n,t.update.name),i=new Re({mapValue:{fields:t.update.fields}});if(t.updateMask){const o=function(u){const c=u.fieldPaths||[];return new Ke(c.map(d=>Ht.fromServerFormat(d)))}(t.updateMask);return new cs(r,i,o,e,s)}return new $r(r,i,e,s)}if(t.delete){const r=Os(n,t.delete);return new bc(r,e)}if(t.verify){const r=Os(n,t.verify);return new Tg(r,e)}return rt(1463,{proto:t})}function tw(n,t){return n&&n.length>0?(it(t!==void 0,14353),n.map(e=>function(r,i){let o=r.updateTime?Se(r.updateTime):Se(i);return o.isEqual(lt.min())&&(o=Se(i)),new BT(o,r.transformResults||[])}(e,t))):[]}function Dg(n,t){return{documents:[Pg(n,t.path)]}}function kg(n,t){const e={structuredQuery:{}},s=t.path;let r;t.collectionGroup!==null?(r=s,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(r=s.popLast(),e.structuredQuery.from=[{collectionId:s.lastSegment()}]),e.parent=Pg(n,r);const i=function(c){if(c.length!==0)return Mg(Mt.create(c,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(d=>function(y){return{field:hr(y.field),direction:nw(y.dir)}}(d))}(t.orderBy);o&&(e.structuredQuery.orderBy=o);const l=Su(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),{ft:e,parent:r}}function Ng(n){let t=Cg(n.parent);const e=n.structuredQuery,s=e.from?e.from.length:0;let r=null;if(s>0){it(s===1,65062);const d=e.from[0];d.allDescendants?r=d.collectionId:t=t.child(d.collectionId)}let i=[];e.where&&(i=function(p){const y=Og(p);return y instanceof Mt&&yc(y)?y.getFilters():[y]}(e.where));let o=[];e.orderBy&&(o=function(p){return p.map(y=>function(O){return new Ia(dr(O.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(O.direction))}(y))}(e.orderBy));let l=null;e.limit&&(l=function(p){let y;return y=typeof p=="object"?p.value:p,Qa(y)?null:y}(e.limit));let u=null;e.startAt&&(u=function(p){const y=!!p.before,A=p.values||[];return new Dr(A,y)}(e.startAt));let c=null;return e.endAt&&(c=function(p){const y=!p.before,A=p.values||[];return new Dr(A,y)}(e.endAt)),wT(t,r,o,i,l,"F",u,c)}function ew(n,t){const e=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return rt(28987,{purpose:r})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Og(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const s=dr(e.unaryFilter.field);return It.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=dr(e.unaryFilter.field);return It.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=dr(e.unaryFilter.field);return It.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=dr(e.unaryFilter.field);return It.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return rt(61313);default:return rt(60726)}}(n):n.fieldFilter!==void 0?function(e){return It.create(dr(e.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return rt(58110);default:return rt(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Mt.create(e.compositeFilter.filters.map(s=>Og(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return rt(1026)}}(e.compositeFilter.op))}(n):rt(30097,{filter:n})}function nw(n){return GT[n]}function sw(n){return WT[n]}function rw(n){return QT[n]}function hr(n){return{fieldPath:n.canonicalString()}}function dr(n){return Ht.fromServerFormat(n.fieldPath)}function Mg(n){return n instanceof It?function(e){if(e.op==="=="){if(Gd(e.value))return{unaryFilter:{field:hr(e.field),op:"IS_NAN"}};if(Hd(e.value))return{unaryFilter:{field:hr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Gd(e.value))return{unaryFilter:{field:hr(e.field),op:"IS_NOT_NAN"}};if(Hd(e.value))return{unaryFilter:{field:hr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:hr(e.field),op:sw(e.op),value:e.value}}}(n):n instanceof Mt?function(e){const s=e.getFilters().map(r=>Mg(r));return s.length===1?s[0]:{compositeFilter:{op:rw(e.op),filters:s}}}(n):rt(54877,{filter:n})}function iw(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Fg(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class In{constructor(t,e,s,r,i=lt.min(),o=lt.min(),l=te.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=e,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(t){return new In(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new In(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new In(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new In(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Lg{constructor(t){this.yt=t}}function ow(n,t){let e;if(t.document)e=YT(n.yt,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const s=tt.fromSegments(t.noDocument.path),r=qs(t.noDocument.readTime);e=Wt.newNoDocument(s,r),t.hasCommittedMutations&&e.setHasCommittedMutations()}else{if(!t.unknownDocument)return rt(56709);{const s=tt.fromSegments(t.unknownDocument.path),r=qs(t.unknownDocument.version);e=Wt.newUnknownDocument(s,r)}}return t.readTime&&e.setReadTime(function(r){const i=new Ct(r[0],r[1]);return lt.fromTimestamp(i)}(t.readTime)),e}function hf(n,t){const e=t.key,s={prefixPath:e.getCollectionPath().popLast().toArray(),collectionGroup:e.collectionGroup,documentId:e.path.lastSegment(),readTime:Ra(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())s.document=function(i,o){return{name:Aa(i,o.key),fields:o.data.value.mapValue.fields,updateTime:Mr(i,o.version.toTimestamp()),createTime:Mr(i,o.createTime.toTimestamp())}}(n.yt,t);else if(t.isNoDocument())s.noDocument={path:e.path.toArray(),readTime:js(t.version)};else{if(!t.isUnknownDocument())return rt(57904,{document:t});s.unknownDocument={path:e.path.toArray(),version:js(t.version)}}return s}function Ra(n){const t=n.toTimestamp();return[t.seconds,t.nanoseconds]}function js(n){const t=n.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function qs(n){const t=new Ct(n.seconds,n.nanoseconds);return lt.fromTimestamp(t)}function Ss(n,t){const e=(t.baseMutations||[]).map(i=>Pu(n.yt,i));for(let i=0;i<t.mutations.length-1;++i){const o=t.mutations[i];if(i+1<t.mutations.length&&t.mutations[i+1].transform!==void 0){const l=t.mutations[i+1];o.updateTransforms=l.transform.fieldTransforms,t.mutations.splice(i+1,1),++i}}const s=t.mutations.map(i=>Pu(n.yt,i)),r=Ct.fromMillis(t.localWriteTimeMs);return new Ec(t.batchId,r,e,s)}function gi(n){const t=qs(n.readTime),e=n.lastLimboFreeSnapshotVersion!==void 0?qs(n.lastLimboFreeSnapshotVersion):lt.min();let s;return s=function(i){return i.documents!==void 0}(n.query)?function(i){const o=i.documents.length;return it(o===1,1966,{count:o}),He(fo(Cg(i.documents[0])))}(n.query):function(i){return He(Ng(i))}(n.query),new In(s,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,t,e,te.fromBase64String(n.resumeToken))}function Bg(n,t){const e=js(t.snapshotVersion),s=js(t.lastLimboFreeSnapshotVersion);let r;r=Ta(t.target)?Dg(n.yt,t.target):kg(n.yt,t.target).ft;const i=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:$s(t.target),readTime:e,resumeToken:i,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:s,query:r}}function Ug(n){const t=Ng({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Au(t,t.limit,"L"):t}function $l(n,t){return new Tc(t.largestBatchId,Pu(n.yt,t.overlayMutation))}function df(n,t){const e=t.path.lastSegment();return[n,ve(t.path.popLast()),e]}function ff(n,t,e,s){return{indexId:n,uid:t,sequenceNumber:e,readTime:js(s.readTime),documentKey:ve(s.documentKey.path),largestBatchId:s.largestBatchId}}/**
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
 */class aw{getBundleMetadata(t,e){return pf(t).get(e).next(s=>{if(s)return function(i){return{id:i.bundleId,createTime:qs(i.createTime),version:i.version}}(s)})}saveBundleMetadata(t,e){return pf(t).put(function(r){return{bundleId:r.id,createTime:js(Se(r.createTime)),version:r.version}}(e))}getNamedQuery(t,e){return mf(t).get(e).next(s=>{if(s)return function(i){return{name:i.name,query:Ug(i.bundledQuery),readTime:qs(i.readTime)}}(s)})}saveNamedQuery(t,e){return mf(t).put(function(r){return{name:r.name,readTime:js(Se(r.readTime)),bundledQuery:r.bundledQuery}}(e))}}function pf(n){return re(n,Xa)}function mf(n){return re(n,Ja)}/**
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
 */class ol{constructor(t,e){this.serializer=t,this.userId=e}static wt(t,e){const s=e.uid||"";return new ol(t,s)}getOverlay(t,e){return oi(t).get(df(this.userId,e)).next(s=>s?$l(this.serializer,s):null)}getOverlays(t,e){const s=an();return P.forEach(e,r=>this.getOverlay(t,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(t,e,s){const r=[];return s.forEach((i,o)=>{const l=new Tc(e,o);r.push(this.St(t,l))}),P.waitFor(r)}removeOverlaysForBatchId(t,e,s){const r=new Set;e.forEach(o=>r.add(ve(o.getCollectionPath())));const i=[];return r.forEach(o=>{const l=IDBKeyRange.bound([this.userId,o,s],[this.userId,o,s+1],!1,!0);i.push(oi(t).Z(yu,l))}),P.waitFor(i)}getOverlaysForCollection(t,e,s){const r=an(),i=ve(e),o=IDBKeyRange.bound([this.userId,i,s],[this.userId,i,Number.POSITIVE_INFINITY],!0);return oi(t).J(yu,o).next(l=>{for(const u of l){const c=$l(this.serializer,u);r.set(c.getKey(),c)}return r})}getOverlaysForCollectionGroup(t,e,s,r){const i=an();let o;const l=IDBKeyRange.bound([this.userId,e,s],[this.userId,e,Number.POSITIVE_INFINITY],!0);return oi(t).ee({index:qm,range:l},(u,c,d)=>{const p=$l(this.serializer,c);i.size()<r||p.largestBatchId===o?(i.set(p.getKey(),p),o=p.largestBatchId):d.done()}).next(()=>i)}St(t,e){return oi(t).put(function(r,i,o){const[l,u,c]=df(i,o.mutation.key);return{userId:i,collectionPath:u,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Sa(r.yt,o.mutation)}}(this.serializer,this.userId,e))}}function oi(n){return re(n,Ya)}/**
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
 */class lw{bt(t){return re(t,dc)}getSessionToken(t){return this.bt(t).get("sessionToken").next(e=>{const s=e==null?void 0:e.value;return s?te.fromUint8Array(s):te.EMPTY_BYTE_STRING})}setSessionToken(t,e){return this.bt(t).put({name:"sessionToken",value:e.toUint8Array()})}}/**
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
 */class Rs{constructor(){}Dt(t,e){this.Ct(t,e),e.vt()}Ct(t,e){if("nullValue"in t)this.Ft(e,5);else if("booleanValue"in t)this.Ft(e,10),e.Mt(t.booleanValue?1:0);else if("integerValue"in t)this.Ft(e,15),e.Mt(zt(t.integerValue));else if("doubleValue"in t){const s=zt(t.doubleValue);isNaN(s)?this.Ft(e,13):(this.Ft(e,15),Wi(s)?e.Mt(0):e.Mt(s))}else if("timestampValue"in t){let s=t.timestampValue;this.Ft(e,20),typeof s=="string"&&(s=Dn(s)),e.xt(`${s.seconds||""}`),e.Mt(s.nanos||0)}else if("stringValue"in t)this.Ot(t.stringValue,e),this.Nt(e);else if("bytesValue"in t)this.Ft(e,30),e.Bt(kn(t.bytesValue)),this.Nt(e);else if("referenceValue"in t)this.Lt(t.referenceValue,e);else if("geoPointValue"in t){const s=t.geoPointValue;this.Ft(e,45),e.Mt(s.latitude||0),e.Mt(s.longitude||0)}else"mapValue"in t?eg(t)?this.Ft(e,Number.MAX_SAFE_INTEGER):tl(t)?this.kt(t.mapValue,e):(this.qt(t.mapValue,e),this.Nt(e)):"arrayValue"in t?(this.Qt(t.arrayValue,e),this.Nt(e)):rt(19022,{$t:t})}Ot(t,e){this.Ft(e,25),this.Ut(t,e)}Ut(t,e){e.xt(t)}qt(t,e){const s=t.fields||{};this.Ft(e,55);for(const r of Object.keys(s))this.Ot(r,e),this.Ct(s[r],e)}kt(t,e){var o,l;const s=t.fields||{};this.Ft(e,53);const r=Cr,i=((l=(o=s[r].arrayValue)==null?void 0:o.values)==null?void 0:l.length)||0;this.Ft(e,15),e.Mt(zt(i)),this.Ot(r,e),this.Ct(s[r],e)}Qt(t,e){const s=t.values||[];this.Ft(e,50);for(const r of s)this.Ct(r,e)}Lt(t,e){this.Ft(e,37),tt.fromName(t).path.forEach(s=>{this.Ft(e,60),this.Ut(s,e)})}Ft(t,e){t.Mt(e)}Nt(t){t.Mt(2)}}Rs.Kt=new Rs;/**
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
 */const rr=255;function uw(n){if(n===0)return 8;let t=0;return n>>4||(t+=4,n<<=4),n>>6||(t+=2,n<<=2),n>>7||(t+=1),t}function gf(n){const t=64-function(s){let r=0;for(let i=0;i<8;++i){const o=uw(255&s[i]);if(r+=o,o!==8)break}return r}(n);return Math.ceil(t/8)}class cw{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Wt(t){const e=t[Symbol.iterator]();let s=e.next();for(;!s.done;)this.Gt(s.value),s=e.next();this.zt()}jt(t){const e=t[Symbol.iterator]();let s=e.next();for(;!s.done;)this.Jt(s.value),s=e.next();this.Ht()}Yt(t){for(const e of t){const s=e.charCodeAt(0);if(s<128)this.Gt(s);else if(s<2048)this.Gt(960|s>>>6),this.Gt(128|63&s);else if(e<"\uD800"||"\uDBFF"<e)this.Gt(480|s>>>12),this.Gt(128|63&s>>>6),this.Gt(128|63&s);else{const r=e.codePointAt(0);this.Gt(240|r>>>18),this.Gt(128|63&r>>>12),this.Gt(128|63&r>>>6),this.Gt(128|63&r)}}this.zt()}Zt(t){for(const e of t){const s=e.charCodeAt(0);if(s<128)this.Jt(s);else if(s<2048)this.Jt(960|s>>>6),this.Jt(128|63&s);else if(e<"\uD800"||"\uDBFF"<e)this.Jt(480|s>>>12),this.Jt(128|63&s>>>6),this.Jt(128|63&s);else{const r=e.codePointAt(0);this.Jt(240|r>>>18),this.Jt(128|63&r>>>12),this.Jt(128|63&r>>>6),this.Jt(128|63&r)}}this.Ht()}Xt(t){const e=this.en(t),s=gf(e);this.tn(1+s),this.buffer[this.position++]=255&s;for(let r=e.length-s;r<e.length;++r)this.buffer[this.position++]=255&e[r]}nn(t){const e=this.en(t),s=gf(e);this.tn(1+s),this.buffer[this.position++]=~(255&s);for(let r=e.length-s;r<e.length;++r)this.buffer[this.position++]=~(255&e[r])}rn(){this.sn(rr),this.sn(255)}_n(){this.an(rr),this.an(255)}reset(){this.position=0}seed(t){this.tn(t.length),this.buffer.set(t,this.position),this.position+=t.length}un(){return this.buffer.slice(0,this.position)}en(t){const e=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(t),s=!!(128&e[0]);e[0]^=s?255:128;for(let r=1;r<e.length;++r)e[r]^=s?255:0;return e}Gt(t){const e=255&t;e===0?(this.sn(0),this.sn(255)):e===rr?(this.sn(rr),this.sn(0)):this.sn(e)}Jt(t){const e=255&t;e===0?(this.an(0),this.an(255)):e===rr?(this.an(rr),this.an(0)):this.an(t)}zt(){this.sn(0),this.sn(1)}Ht(){this.an(0),this.an(1)}sn(t){this.tn(1),this.buffer[this.position++]=t}an(t){this.tn(1),this.buffer[this.position++]=~t}tn(t){const e=t+this.position;if(e<=this.buffer.length)return;let s=2*this.buffer.length;s<e&&(s=e);const r=new Uint8Array(s);r.set(this.buffer),this.buffer=r}}class hw{constructor(t){this.cn=t}Bt(t){this.cn.Wt(t)}xt(t){this.cn.Yt(t)}Mt(t){this.cn.Xt(t)}vt(){this.cn.rn()}}class dw{constructor(t){this.cn=t}Bt(t){this.cn.jt(t)}xt(t){this.cn.Zt(t)}Mt(t){this.cn.nn(t)}vt(){this.cn._n()}}class ai{constructor(){this.cn=new cw,this.ln=new hw(this.cn),this.hn=new dw(this.cn)}seed(t){this.cn.seed(t)}Pn(t){return t===0?this.ln:this.hn}un(){return this.cn.un()}reset(){this.cn.reset()}}/**
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
 */class xs{constructor(t,e,s,r){this.Tn=t,this.In=e,this.En=s,this.dn=r}An(){const t=this.dn.length,e=t===0||this.dn[t-1]===255?t+1:t,s=new Uint8Array(e);return s.set(this.dn,0),e!==t?s.set([0],this.dn.length):++s[s.length-1],new xs(this.Tn,this.In,this.En,s)}Rn(t,e,s){return{indexId:this.Tn,uid:t,arrayValue:ea(this.En),directionalValue:ea(this.dn),orderedDocumentKey:ea(e),documentKey:s.path.toArray()}}Vn(t,e,s){const r=this.Rn(t,e,s);return[r.indexId,r.uid,r.arrayValue,r.directionalValue,r.orderedDocumentKey,r.documentKey]}}function jn(n,t){let e=n.Tn-t.Tn;return e!==0?e:(e=_f(n.En,t.En),e!==0?e:(e=_f(n.dn,t.dn),e!==0?e:tt.comparator(n.In,t.In)))}function _f(n,t){for(let e=0;e<n.length&&e<t.length;++e){const s=n[e]-t[e];if(s!==0)return s}return n.length-t.length}function ea(n){return mm()?function(e){let s="";for(let r=0;r<e.length;r++)s+=String.fromCharCode(e[r]);return s}(n):n}function yf(n){return typeof n!="string"?n:function(e){const s=new Uint8Array(e.length);for(let r=0;r<e.length;r++)s[r]=e.charCodeAt(r);return s}(n)}class vf{constructor(t){this.mn=new kt((e,s)=>Ht.comparator(e.field,s.field)),this.collectionId=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment(),this.fn=t.orderBy,this.gn=[];for(const e of t.filters){const s=e;s.isInequality()?this.mn=this.mn.add(s):this.gn.push(s)}}get pn(){return this.mn.size>1}yn(t){if(it(t.collectionGroup===this.collectionId,49279),this.pn)return!1;const e=mu(t);if(e!==void 0&&!this.wn(e))return!1;const s=Ts(t);let r=new Set,i=0,o=0;for(;i<s.length&&this.wn(s[i]);++i)r=r.add(s[i].fieldPath.canonicalString());if(i===s.length)return!0;if(this.mn.size>0){const l=this.mn.getIterator().getNext();if(!r.has(l.field.canonicalString())){const u=s[i];if(!this.Sn(l,u)||!this.bn(this.fn[o++],u))return!1}++i}for(;i<s.length;++i){const l=s[i];if(o>=this.fn.length||!this.bn(this.fn[o++],l))return!1}return!0}Dn(){if(this.pn)return null;let t=new kt(Ht.comparator);const e=[];for(const s of this.gn)if(!s.field.isKeyField())if(s.op==="array-contains"||s.op==="array-contains-any")e.push(new Go(s.field,2));else{if(t.has(s.field))continue;t=t.add(s.field),e.push(new Go(s.field,0))}for(const s of this.fn)s.field.isKeyField()||t.has(s.field)||(t=t.add(s.field),e.push(new Go(s.field,s.dir==="asc"?0:1)));return new _a(_a.UNKNOWN_ID,this.collectionId,e,Gi.empty())}wn(t){for(const e of this.gn)if(this.Sn(e,t))return!0;return!1}Sn(t,e){if(t===void 0||!t.field.isEqual(e.fieldPath))return!1;const s=t.op==="array-contains"||t.op==="array-contains-any";return e.kind===2===s}bn(t,e){return!!t.field.isEqual(e.fieldPath)&&(e.kind===0&&t.dir==="asc"||e.kind===1&&t.dir==="desc")}}/**
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
 */function $g(n){var e,s;if(it(n instanceof It||n instanceof Mt,20012),n instanceof It){if(n instanceof cg){const r=((s=(e=n.value.arrayValue)==null?void 0:e.values)==null?void 0:s.map(i=>It.create(n.field,"==",i)))||[];return Mt.create(r,"or")}return n}const t=n.filters.map(r=>$g(r));return Mt.create(t,n.op)}function fw(n){if(n.getFilters().length===0)return[];const t=Du($g(n));return it(jg(t),7391),Cu(t)||Vu(t)?[t]:t.getFilters()}function Cu(n){return n instanceof It}function Vu(n){return n instanceof Mt&&yc(n)}function jg(n){return Cu(n)||Vu(n)||function(e){if(e instanceof Mt&&Iu(e)){for(const s of e.getFilters())if(!Cu(s)&&!Vu(s))return!1;return!0}return!1}(n)}function Du(n){if(it(n instanceof It||n instanceof Mt,34018),n instanceof It)return n;if(n.filters.length===1)return Du(n.filters[0]);const t=n.filters.map(s=>Du(s));let e=Mt.create(t,n.op);return e=xa(e),jg(e)?e:(it(e instanceof Mt,64498),it(kr(e),40251),it(e.filters.length>1,57927),e.filters.reduce((s,r)=>Sc(s,r)))}function Sc(n,t){let e;return it(n instanceof It||n instanceof Mt,38388),it(t instanceof It||t instanceof Mt,25473),e=n instanceof It?t instanceof It?function(r,i){return Mt.create([r,i],"and")}(n,t):bf(n,t):t instanceof It?bf(t,n):function(r,i){if(it(r.filters.length>0&&i.filters.length>0,48005),kr(r)&&kr(i))return ag(r,i.getFilters());const o=Iu(r)?r:i,l=Iu(r)?i:r,u=o.filters.map(c=>Sc(c,l));return Mt.create(u,"or")}(n,t),xa(e)}function bf(n,t){if(kr(t))return ag(t,n.getFilters());{const e=t.filters.map(s=>Sc(n,s));return Mt.create(e,"or")}}function xa(n){if(it(n instanceof It||n instanceof Mt,11850),n instanceof It)return n;const t=n.getFilters();if(t.length===1)return xa(t[0]);if(ig(n))return n;const e=t.map(r=>xa(r)),s=[];return e.forEach(r=>{r instanceof It?s.push(r):r instanceof Mt&&(r.op===n.op?s.push(...r.filters):s.push(r))}),s.length===1?s[0]:Mt.create(s,n.op)}/**
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
 */class pw{constructor(){this.Cn=new Rc}addToCollectionParentIndex(t,e){return this.Cn.add(e),P.resolve()}getCollectionParents(t,e){return P.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return P.resolve()}deleteFieldIndex(t,e){return P.resolve()}deleteAllFieldIndexes(t){return P.resolve()}createTargetIndexes(t,e){return P.resolve()}getDocumentsMatchingTarget(t,e){return P.resolve(null)}getIndexType(t,e){return P.resolve(0)}getFieldIndexes(t,e){return P.resolve([])}getNextCollectionGroupToUpdate(t){return P.resolve(null)}getMinOffset(t,e){return P.resolve(Le.min())}getMinOffsetFromCollectionGroup(t,e){return P.resolve(Le.min())}updateCollectionGroup(t,e,s){return P.resolve()}updateIndexEntries(t,e){return P.resolve()}}class Rc{constructor(){this.index={}}add(t){const e=t.lastSegment(),s=t.popLast(),r=this.index[e]||new kt(Ot.comparator),i=!r.has(s);return this.index[e]=r.add(s),i}has(t){const e=t.lastSegment(),s=t.popLast(),r=this.index[e];return r&&r.has(s)}getEntries(t){return(this.index[t]||new kt(Ot.comparator)).toArray()}}/**
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
 */const Ef="IndexedDbIndexManager",Mo=new Uint8Array(0);class mw{constructor(t,e){this.databaseId=e,this.vn=new Rc,this.Fn=new On(s=>$s(s),(s,r)=>ho(s,r)),this.uid=t.uid||""}addToCollectionParentIndex(t,e){if(!this.vn.has(e)){const s=e.lastSegment(),r=e.popLast();t.addOnCommittedListener(()=>{this.vn.add(e)});const i={collectionId:s,parent:ve(r)};return If(t).put(i)}return P.resolve()}getCollectionParents(t,e){const s=[],r=IDBKeyRange.bound([e,""],[Dm(e),""],!1,!0);return If(t).J(r).next(i=>{for(const o of i){if(o.collectionId!==e)break;s.push(on(o.parent))}return s})}addFieldIndex(t,e){const s=li(t),r=function(l){return{indexId:l.indexId,collectionGroup:l.collectionGroup,fields:l.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(e);delete r.indexId;const i=s.add(r);if(e.indexState){const o=or(t);return i.next(l=>{o.put(ff(l,this.uid,e.indexState.sequenceNumber,e.indexState.offset))})}return i.next()}deleteFieldIndex(t,e){const s=li(t),r=or(t),i=ir(t);return s.delete(e.indexId).next(()=>r.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0)))}deleteAllFieldIndexes(t){const e=li(t),s=ir(t),r=or(t);return e.Z().next(()=>s.Z()).next(()=>r.Z())}createTargetIndexes(t,e){return P.forEach(this.Mn(e),s=>this.getIndexType(t,s).next(r=>{if(r===0||r===1){const i=new vf(s).Dn();if(i!=null)return this.addFieldIndex(t,i)}}))}getDocumentsMatchingTarget(t,e){const s=ir(t);let r=!0;const i=new Map;return P.forEach(this.Mn(e),o=>this.xn(t,o).next(l=>{r&&(r=!!l),i.set(o,l)})).next(()=>{if(r){let o=bt();const l=[];return P.forEach(i,(u,c)=>{G(Ef,`Using index ${function(K){return`id=${K.indexId}|cg=${K.collectionGroup}|f=${K.fields.map(X=>`${X.fieldPath}:${X.kind}`).join(",")}`}(u)} to execute ${$s(e)}`);const d=function(K,X){const st=mu(X);if(st===void 0)return null;for(const ut of wa(K,st.fieldPath))switch(ut.op){case"array-contains-any":return ut.value.arrayValue.values||[];case"array-contains":return[ut.value]}return null}(c,u),p=function(K,X){const st=new Map;for(const ut of Ts(X))for(const w of wa(K,ut.fieldPath))switch(w.op){case"==":case"in":st.set(ut.fieldPath.canonicalString(),w.value);break;case"not-in":case"!=":return st.set(ut.fieldPath.canonicalString(),w.value),Array.from(st.values())}return null}(c,u),y=function(K,X){const st=[];let ut=!0;for(const w of Ts(X)){const v=w.kind===0?Yd(K,w.fieldPath,K.startAt):Zd(K,w.fieldPath,K.startAt);st.push(v.value),ut&&(ut=v.inclusive)}return new Dr(st,ut)}(c,u),A=function(K,X){const st=[];let ut=!0;for(const w of Ts(X)){const v=w.kind===0?Zd(K,w.fieldPath,K.endAt):Yd(K,w.fieldPath,K.endAt);st.push(v.value),ut&&(ut=v.inclusive)}return new Dr(st,ut)}(c,u),O=this.On(u,c,y),k=this.On(u,c,A),R=this.Nn(u,c,p),F=this.Bn(u.indexId,d,O,y.inclusive,k,A.inclusive,R);return P.forEach(F,Q=>s.Y(Q,e.limit).next(K=>{K.forEach(X=>{const st=tt.fromSegments(X.documentKey);o.has(st)||(o=o.add(st),l.push(st))})}))}).next(()=>l)}return P.resolve(null)})}Mn(t){let e=this.Fn.get(t);return e||(t.filters.length===0?e=[t]:e=fw(Mt.create(t.filters,"and")).map(s=>wu(t.path,t.collectionGroup,t.orderBy,s.getFilters(),t.limit,t.startAt,t.endAt)),this.Fn.set(t,e),e)}Bn(t,e,s,r,i,o,l){const u=(e!=null?e.length:1)*Math.max(s.length,i.length),c=u/(e!=null?e.length:1),d=[];for(let p=0;p<u;++p){const y=e?this.Ln(e[p/c]):Mo,A=this.kn(t,y,s[p%c],r),O=this.qn(t,y,i[p%c],o),k=l.map(R=>this.kn(t,y,R,!0));d.push(...this.createRange(A,O,k))}return d}kn(t,e,s,r){const i=new xs(t,tt.empty(),e,s);return r?i:i.An()}qn(t,e,s,r){const i=new xs(t,tt.empty(),e,s);return r?i.An():i}xn(t,e){const s=new vf(e),r=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment();return this.getFieldIndexes(t,r).next(i=>{let o=null;for(const l of i)s.yn(l)&&(!o||l.fields.length>o.fields.length)&&(o=l);return o})}getIndexType(t,e){let s=2;const r=this.Mn(e);return P.forEach(r,i=>this.xn(t,i).next(o=>{o?s!==0&&o.fields.length<function(u){let c=new kt(Ht.comparator),d=!1;for(const p of u.filters)for(const y of p.getFlattenedFilters())y.field.isKeyField()||(y.op==="array-contains"||y.op==="array-contains-any"?d=!0:c=c.add(y.field));for(const p of u.orderBy)p.field.isKeyField()||(c=c.add(p.field));return c.size+(d?1:0)}(i)&&(s=1):s=0})).next(()=>function(o){return o.limit!==null}(e)&&r.length>1&&s===2?1:s)}Qn(t,e){const s=new ai;for(const r of Ts(t)){const i=e.data.field(r.fieldPath);if(i==null)return null;const o=s.Pn(r.kind);Rs.Kt.Dt(i,o)}return s.un()}Ln(t){const e=new ai;return Rs.Kt.Dt(t,e.Pn(0)),e.un()}$n(t,e){const s=new ai;return Rs.Kt.Dt(_c(this.databaseId,e),s.Pn(function(i){const o=Ts(i);return o.length===0?0:o[o.length-1].kind}(t))),s.un()}Nn(t,e,s){if(s===null)return[];let r=[];r.push(new ai);let i=0;for(const o of Ts(t)){const l=s[i++];for(const u of r)if(this.Un(e,o.fieldPath)&&to(l))r=this.Kn(r,o,l);else{const c=u.Pn(o.kind);Rs.Kt.Dt(l,c)}}return this.Wn(r)}On(t,e,s){return this.Nn(t,e,s.position)}Wn(t){const e=[];for(let s=0;s<t.length;++s)e[s]=t[s].un();return e}Kn(t,e,s){const r=[...t],i=[];for(const o of s.arrayValue.values||[])for(const l of r){const u=new ai;u.seed(l.un()),Rs.Kt.Dt(o,u.Pn(e.kind)),i.push(u)}return i}Un(t,e){return!!t.filters.find(s=>s instanceof It&&s.field.isEqual(e)&&(s.op==="in"||s.op==="not-in"))}getFieldIndexes(t,e){const s=li(t),r=or(t);return(e?s.J(_u,IDBKeyRange.bound(e,e)):s.J()).next(i=>{const o=[];return P.forEach(i,l=>r.get([l.indexId,this.uid]).next(u=>{o.push(function(d,p){const y=p?new Gi(p.sequenceNumber,new Le(qs(p.readTime),new tt(on(p.documentKey)),p.largestBatchId)):Gi.empty(),A=d.fields.map(([O,k])=>new Go(Ht.fromServerFormat(O),k));return new _a(d.indexId,d.collectionGroup,A,y)}(l,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(t){return this.getFieldIndexes(t).next(e=>e.length===0?null:(e.sort((s,r)=>{const i=s.indexState.sequenceNumber-r.indexState.sequenceNumber;return i!==0?i:pt(s.collectionGroup,r.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(t,e,s){const r=li(t),i=or(t);return this.Gn(t).next(o=>r.J(_u,IDBKeyRange.bound(e,e)).next(l=>P.forEach(l,u=>i.put(ff(u.indexId,this.uid,o,s)))))}updateIndexEntries(t,e){const s=new Map;return P.forEach(e,(r,i)=>{const o=s.get(r.collectionGroup);return(o?P.resolve(o):this.getFieldIndexes(t,r.collectionGroup)).next(l=>(s.set(r.collectionGroup,l),P.forEach(l,u=>this.zn(t,r,u).next(c=>{const d=this.jn(i,u);return c.isEqual(d)?P.resolve():this.Jn(t,i,u,c,d)}))))})}Hn(t,e,s,r){return ir(t).put(r.Rn(this.uid,this.$n(s,e.key),e.key))}Yn(t,e,s,r){return ir(t).delete(r.Vn(this.uid,this.$n(s,e.key),e.key))}zn(t,e,s){const r=ir(t);let i=new kt(jn);return r.ee({index:jm,range:IDBKeyRange.only([s.indexId,this.uid,ea(this.$n(s,e))])},(o,l)=>{i=i.add(new xs(s.indexId,e,yf(l.arrayValue),yf(l.directionalValue)))}).next(()=>i)}jn(t,e){let s=new kt(jn);const r=this.Qn(e,t);if(r==null)return s;const i=mu(e);if(i!=null){const o=t.data.field(i.fieldPath);if(to(o))for(const l of o.arrayValue.values||[])s=s.add(new xs(e.indexId,t.key,this.Ln(l),r))}else s=s.add(new xs(e.indexId,t.key,Mo,r));return s}Jn(t,e,s,r,i){G(Ef,"Updating index entries for document '%s'",e.key);const o=[];return function(u,c,d,p,y){const A=u.getIterator(),O=c.getIterator();let k=sr(A),R=sr(O);for(;k||R;){let F=!1,Q=!1;if(k&&R){const K=d(k,R);K<0?Q=!0:K>0&&(F=!0)}else k!=null?Q=!0:F=!0;F?(p(R),R=sr(O)):Q?(y(k),k=sr(A)):(k=sr(A),R=sr(O))}}(r,i,jn,l=>{o.push(this.Hn(t,e,s,l))},l=>{o.push(this.Yn(t,e,s,l))}),P.waitFor(o)}Gn(t){let e=1;return or(t).ee({index:$m,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(s,r,i)=>{i.done(),e=r.sequenceNumber+1}).next(()=>e)}createRange(t,e,s){s=s.sort((o,l)=>jn(o,l)).filter((o,l,u)=>!l||jn(o,u[l-1])!==0);const r=[];r.push(t);for(const o of s){const l=jn(o,t),u=jn(o,e);if(l===0)r[0]=t.An();else if(l>0&&u<0)r.push(o),r.push(o.An());else if(u>0)break}r.push(e);const i=[];for(let o=0;o<r.length;o+=2){if(this.Zn(r[o],r[o+1]))return[];const l=r[o].Vn(this.uid,Mo,tt.empty()),u=r[o+1].Vn(this.uid,Mo,tt.empty());i.push(IDBKeyRange.bound(l,u))}return i}Zn(t,e){return jn(t,e)>0}getMinOffsetFromCollectionGroup(t,e){return this.getFieldIndexes(t,e).next(Tf)}getMinOffset(t,e){return P.mapArray(this.Mn(e),s=>this.xn(t,s).next(r=>r||rt(44426))).next(Tf)}}function If(n){return re(n,Ji)}function ir(n){return re(n,Di)}function li(n){return re(n,hc)}function or(n){return re(n,Vi)}function Tf(n){it(n.length!==0,28825);let t=n[0].indexState.offset,e=t.largestBatchId;for(let s=1;s<n.length;s++){const r=n[s].indexState.offset;lc(r,t)<0&&(t=r),e<r.largestBatchId&&(e=r.largestBatchId)}return new Le(t.readTime,t.documentKey,e)}/**
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
 */const wf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},qg=41943040;class ge{static withCacheSize(t){return new ge(t,ge.DEFAULT_COLLECTION_PERCENTILE,ge.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,s){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=s}}/**
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
 */function zg(n,t,e){const s=n.store(We),r=n.store(Sr),i=[],o=IDBKeyRange.only(e.batchId);let l=0;const u=s.ee({range:o},(d,p,y)=>(l++,y.delete()));i.push(u.next(()=>{it(l===1,47070,{batchId:e.batchId})}));const c=[];for(const d of e.mutations){const p=Lm(t,d.key.path,e.batchId);i.push(r.delete(p)),c.push(d.key)}return P.waitFor(i).next(()=>c)}function Pa(n){if(!n)return 0;let t;if(n.document)t=n.document;else if(n.unknownDocument)t=n.unknownDocument;else{if(!n.noDocument)throw rt(14731);t=n.noDocument}return JSON.stringify(t).length}/**
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
 */ge.DEFAULT_COLLECTION_PERCENTILE=10,ge.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ge.DEFAULT=new ge(qg,ge.DEFAULT_COLLECTION_PERCENTILE,ge.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ge.DISABLED=new ge(-1,0,0);class al{constructor(t,e,s,r){this.userId=t,this.serializer=e,this.indexManager=s,this.referenceDelegate=r,this.Xn={}}static wt(t,e,s,r){it(t.uid!=="",64387);const i=t.isAuthenticated()?t.uid:"";return new al(i,e,s,r)}checkEmpty(t){let e=!0;const s=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return qn(t).ee({index:Cs,range:s},(r,i,o)=>{e=!1,o.done()}).next(()=>e)}addMutationBatch(t,e,s,r){const i=fr(t),o=qn(t);return o.add({}).next(l=>{it(typeof l=="number",49019);const u=new Ec(l,e,s,r),c=function(A,O,k){const R=k.baseMutations.map(Q=>Sa(A.yt,Q)),F=k.mutations.map(Q=>Sa(A.yt,Q));return{userId:O,batchId:k.batchId,localWriteTimeMs:k.localWriteTime.toMillis(),baseMutations:R,mutations:F}}(this.serializer,this.userId,u),d=[];let p=new kt((y,A)=>pt(y.canonicalString(),A.canonicalString()));for(const y of r){const A=Lm(this.userId,y.key.path,l);p=p.add(y.key.path.popLast()),d.push(o.put(c)),d.push(i.put(A,jI))}return p.forEach(y=>{d.push(this.indexManager.addToCollectionParentIndex(t,y))}),t.addOnCommittedListener(()=>{this.Xn[l]=u.keys()}),P.waitFor(d).next(()=>u)})}lookupMutationBatch(t,e){return qn(t).get(e).next(s=>s?(it(s.userId===this.userId,48,"Unexpected user for mutation batch",{userId:s.userId,batchId:e}),Ss(this.serializer,s)):null)}er(t,e){return this.Xn[e]?P.resolve(this.Xn[e]):this.lookupMutationBatch(t,e).next(s=>{if(s){const r=s.keys();return this.Xn[e]=r,r}return null})}getNextMutationBatchAfterBatchId(t,e){const s=e+1,r=IDBKeyRange.lowerBound([this.userId,s]);let i=null;return qn(t).ee({index:Cs,range:r},(o,l,u)=>{l.userId===this.userId&&(it(l.batchId>=s,47524,{tr:s}),i=Ss(this.serializer,l)),u.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let s=ks;return qn(t).ee({index:Cs,range:e,reverse:!0},(r,i,o)=>{s=i.batchId,o.done()}).next(()=>s)}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,ks],[this.userId,Number.POSITIVE_INFINITY]);return qn(t).J(Cs,e).next(s=>s.map(r=>Ss(this.serializer,r)))}getAllMutationBatchesAffectingDocumentKey(t,e){const s=Wo(this.userId,e.path),r=IDBKeyRange.lowerBound(s),i=[];return fr(t).ee({range:r},(o,l,u)=>{const[c,d,p]=o,y=on(d);if(c===this.userId&&e.path.isEqual(y))return qn(t).get(p).next(A=>{if(!A)throw rt(61480,{nr:o,batchId:p});it(A.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:A.userId,batchId:p}),i.push(Ss(this.serializer,A))});u.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let s=new kt(pt);const r=[];return e.forEach(i=>{const o=Wo(this.userId,i.path),l=IDBKeyRange.lowerBound(o),u=fr(t).ee({range:l},(c,d,p)=>{const[y,A,O]=c,k=on(A);y===this.userId&&i.path.isEqual(k)?s=s.add(O):p.done()});r.push(u)}),P.waitFor(r).next(()=>this.rr(t,s))}getAllMutationBatchesAffectingQuery(t,e){const s=e.path,r=s.length+1,i=Wo(this.userId,s),o=IDBKeyRange.lowerBound(i);let l=new kt(pt);return fr(t).ee({range:o},(u,c,d)=>{const[p,y,A]=u,O=on(y);p===this.userId&&s.isPrefixOf(O)?O.length===r&&(l=l.add(A)):d.done()}).next(()=>this.rr(t,l))}rr(t,e){const s=[],r=[];return e.forEach(i=>{r.push(qn(t).get(i).next(o=>{if(o===null)throw rt(35274,{batchId:i});it(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:i}),s.push(Ss(this.serializer,o))}))}),P.waitFor(r).next(()=>s)}removeMutationBatch(t,e){return zg(t.le,this.userId,e).next(s=>(t.addOnCommittedListener(()=>{this.ir(e.batchId)}),P.forEach(s,r=>this.referenceDelegate.markPotentiallyOrphaned(t,r))))}ir(t){delete this.Xn[t]}performConsistencyCheck(t){return this.checkEmpty(t).next(e=>{if(!e)return P.resolve();const s=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),r=[];return fr(t).ee({range:s},(i,o,l)=>{if(i[0]===this.userId){const u=on(i[1]);r.push(u)}else l.done()}).next(()=>{it(r.length===0,56720,{sr:r.map(i=>i.canonicalString())})})})}containsKey(t,e){return Kg(t,this.userId,e)}_r(t){return Hg(t).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:ks,lastStreamToken:""})}}function Kg(n,t,e){const s=Wo(t,e.path),r=s[1],i=IDBKeyRange.lowerBound(s);let o=!1;return fr(n).ee({range:i,X:!0},(l,u,c)=>{const[d,p,y]=l;d===t&&p===r&&(o=!0),c.done()}).next(()=>o)}function qn(n){return re(n,We)}function fr(n){return re(n,Sr)}function Hg(n){return re(n,Qi)}/**
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
 */class zs{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new zs(0)}static cr(){return new zs(-1)}}/**
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
 */class gw{constructor(t,e){this.referenceDelegate=t,this.serializer=e}allocateTargetId(t){return this.lr(t).next(e=>{const s=new zs(e.highestTargetId);return e.highestTargetId=s.next(),this.hr(t,e).next(()=>e.highestTargetId)})}getLastRemoteSnapshotVersion(t){return this.lr(t).next(e=>lt.fromTimestamp(new Ct(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(t){return this.lr(t).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(t,e,s){return this.lr(t).next(r=>(r.highestListenSequenceNumber=e,s&&(r.lastRemoteSnapshotVersion=s.toTimestamp()),e>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=e),this.hr(t,r)))}addTargetData(t,e){return this.Pr(t,e).next(()=>this.lr(t).next(s=>(s.targetCount+=1,this.Tr(e,s),this.hr(t,s))))}updateTargetData(t,e){return this.Pr(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next(()=>ar(t).delete(e.targetId)).next(()=>this.lr(t)).next(s=>(it(s.targetCount>0,8065),s.targetCount-=1,this.hr(t,s)))}removeTargets(t,e,s){let r=0;const i=[];return ar(t).ee((o,l)=>{const u=gi(l);u.sequenceNumber<=e&&s.get(u.targetId)===null&&(r++,i.push(this.removeTargetData(t,u)))}).next(()=>P.waitFor(i)).next(()=>r)}forEachTarget(t,e){return ar(t).ee((s,r)=>{const i=gi(r);e(i)})}lr(t){return Af(t).get(ba).next(e=>(it(e!==null,2888),e))}hr(t,e){return Af(t).put(ba,e)}Pr(t,e){return ar(t).put(Bg(this.serializer,e))}Tr(t,e){let s=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,s=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,s=!0),s}getTargetCount(t){return this.lr(t).next(e=>e.targetCount)}getTargetData(t,e){const s=$s(e),r=IDBKeyRange.bound([s,Number.NEGATIVE_INFINITY],[s,Number.POSITIVE_INFINITY]);let i=null;return ar(t).ee({range:r,index:Um},(o,l,u)=>{const c=gi(l);ho(e,c.target)&&(i=c,u.done())}).next(()=>i)}addMatchingKeys(t,e,s){const r=[],i=Xn(t);return e.forEach(o=>{const l=ve(o.path);r.push(i.put({targetId:s,path:l})),r.push(this.referenceDelegate.addReference(t,s,o))}),P.waitFor(r)}removeMatchingKeys(t,e,s){const r=Xn(t);return P.forEach(e,i=>{const o=ve(i.path);return P.waitFor([r.delete([s,o]),this.referenceDelegate.removeReference(t,s,i)])})}removeMatchingKeysForTargetId(t,e){const s=Xn(t),r=IDBKeyRange.bound([e],[e+1],!1,!0);return s.delete(r)}getMatchingKeysForTargetId(t,e){const s=IDBKeyRange.bound([e],[e+1],!1,!0),r=Xn(t);let i=bt();return r.ee({range:s,X:!0},(o,l,u)=>{const c=on(o[1]),d=new tt(c);i=i.add(d)}).next(()=>i)}containsKey(t,e){const s=ve(e.path),r=IDBKeyRange.bound([s],[Dm(s)],!1,!0);let i=0;return Xn(t).ee({index:cc,X:!0,range:r},([o,l],u,c)=>{o!==0&&(i++,c.done())}).next(()=>i>0)}At(t,e){return ar(t).get(e).next(s=>s?gi(s):null)}}function ar(n){return re(n,Rr)}function Af(n){return re(n,Ns)}function Xn(n){return re(n,xr)}/**
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
 */const Sf="LruGarbageCollector",_w=1048576;function Rf([n,t],[e,s]){const r=pt(n,e);return r===0?pt(t,s):r}class yw{constructor(t){this.Ir=t,this.buffer=new kt(Rf),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const s=this.buffer.last();Rf(e,s)<0&&(this.buffer=this.buffer.delete(s).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Gg{constructor(t,e,s){this.garbageCollector=t,this.asyncQueue=e,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){G(Sf,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){us(e)?G(Sf,"Ignoring IndexedDB error during garbage collection: ",e):await Gs(e)}await this.Vr(3e5)})}}class vw{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next(s=>Math.floor(e/100*s))}nthSequenceNumber(t,e){if(e===0)return P.resolve(ze.ce);const s=new yw(e);return this.mr.forEachTarget(t,r=>s.Ar(r.sequenceNumber)).next(()=>this.mr.pr(t,r=>s.Ar(r))).next(()=>s.maxValue)}removeTargets(t,e,s){return this.mr.removeTargets(t,e,s)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(G("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(wf)):this.getCacheSize(t).next(s=>s<this.params.cacheSizeCollectionThreshold?(G("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),wf):this.yr(t,e))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let s,r,i,o,l,u,c;const d=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(G("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),r=this.params.maximumSequenceNumbersToCollect):r=p,o=Date.now(),this.nthSequenceNumber(t,r))).next(p=>(s=p,l=Date.now(),this.removeTargets(t,s,e))).next(p=>(i=p,u=Date.now(),this.removeOrphanedDocuments(t,s))).next(p=>(c=Date.now(),ur()<=At.DEBUG&&G("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${r} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:p})))}}function Wg(n,t){return new vw(n,t)}/**
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
 */class bw{constructor(t,e){this.db=t,this.garbageCollector=Wg(this,e)}gr(t){const e=this.wr(t);return this.db.getTargetCache().getTargetCount(t).next(s=>e.next(r=>s+r))}wr(t){let e=0;return this.pr(t,s=>{e++}).next(()=>e)}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}pr(t,e){return this.Sr(t,(s,r)=>e(r))}addReference(t,e,s){return Fo(t,s)}removeReference(t,e,s){return Fo(t,s)}removeTargets(t,e,s){return this.db.getTargetCache().removeTargets(t,e,s)}markPotentiallyOrphaned(t,e){return Fo(t,e)}br(t,e){return function(r,i){let o=!1;return Hg(r).te(l=>Kg(r,l,i).next(u=>(u&&(o=!0),P.resolve(!u)))).next(()=>o)}(t,e)}removeOrphanedDocuments(t,e){const s=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Sr(t,(o,l)=>{if(l<=e){const u=this.br(t,o).next(c=>{if(!c)return i++,s.getEntry(t,o).next(()=>(s.removeEntry(o,lt.min()),Xn(t).delete(function(p){return[0,ve(p.path)]}(o))))});r.push(u)}}).next(()=>P.waitFor(r)).next(()=>s.apply(t)).next(()=>i)}removeTarget(t,e){const s=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,s)}updateLimboDocument(t,e){return Fo(t,e)}Sr(t,e){const s=Xn(t);let r,i=ze.ce;return s.ee({index:cc},([o,l],{path:u,sequenceNumber:c})=>{o===0?(i!==ze.ce&&e(new tt(on(r)),i),i=c,r=u):i=ze.ce}).next(()=>{i!==ze.ce&&e(new tt(on(r)),i)})}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function Fo(n,t){return Xn(n).put(function(s,r){return{targetId:0,path:ve(s.path),sequenceNumber:r}}(t,n.currentSequenceNumber))}/**
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
 */class Qg{constructor(){this.changes=new On(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Wt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const s=this.changes.get(e);return s!==void 0?P.resolve(s):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Ew{constructor(t){this.serializer=t}setIndexManager(t){this.indexManager=t}addEntry(t,e,s){return bs(t).put(s)}removeEntry(t,e,s){return bs(t).delete(function(i,o){const l=i.path.toArray();return[l.slice(0,l.length-2),l[l.length-2],Ra(o),l[l.length-1]]}(e,s))}updateMetadata(t,e){return this.getMetadata(t).next(s=>(s.byteSize+=e,this.Dr(t,s)))}getEntry(t,e){let s=Wt.newInvalidDocument(e);return bs(t).ee({index:Qo,range:IDBKeyRange.only(ui(e))},(r,i)=>{s=this.Cr(e,i)}).next(()=>s)}vr(t,e){let s={size:0,document:Wt.newInvalidDocument(e)};return bs(t).ee({index:Qo,range:IDBKeyRange.only(ui(e))},(r,i)=>{s={document:this.Cr(e,i),size:Pa(i)}}).next(()=>s)}getEntries(t,e){let s=Oe();return this.Fr(t,e,(r,i)=>{const o=this.Cr(r,i);s=s.insert(r,o)}).next(()=>s)}Mr(t,e){let s=Oe(),r=new Kt(tt.comparator);return this.Fr(t,e,(i,o)=>{const l=this.Cr(i,o);s=s.insert(i,l),r=r.insert(i,Pa(o))}).next(()=>({documents:s,Or:r}))}Fr(t,e,s){if(e.isEmpty())return P.resolve();let r=new kt(Cf);e.forEach(u=>r=r.add(u));const i=IDBKeyRange.bound(ui(r.first()),ui(r.last())),o=r.getIterator();let l=o.getNext();return bs(t).ee({index:Qo,range:i},(u,c,d)=>{const p=tt.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;l&&Cf(l,p)<0;)s(l,null),l=o.getNext();l&&l.isEqual(p)&&(s(l,c),l=o.hasNext()?o.getNext():null),l?d.j(ui(l)):d.done()}).next(()=>{for(;l;)s(l,null),l=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(t,e,s,r,i){const o=e.path,l=[o.popLast().toArray(),o.lastSegment(),Ra(s.readTime),s.documentKey.path.isEmpty()?"":s.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return bs(t).J(IDBKeyRange.bound(l,u,!0)).next(c=>{i==null||i.incrementDocumentReadCount(c.length);let d=Oe();for(const p of c){const y=this.Cr(tt.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);y.isFoundDocument()&&(po(e,y)||r.has(y.key))&&(d=d.insert(y.key,y))}return d})}getAllFromCollectionGroup(t,e,s,r){let i=Oe();const o=Pf(e,s),l=Pf(e,Le.max());return bs(t).ee({index:Bm,range:IDBKeyRange.bound(o,l,!0)},(u,c,d)=>{const p=this.Cr(tt.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);i=i.insert(p.key,p),i.size===r&&d.done()}).next(()=>i)}newChangeBuffer(t){return new Iw(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next(e=>e.byteSize)}getMetadata(t){return xf(t).get(gu).next(e=>(it(!!e,20021),e))}Dr(t,e){return xf(t).put(gu,e)}Cr(t,e){if(e){const s=ow(this.serializer,e);if(!(s.isNoDocument()&&s.version.isEqual(lt.min())))return s}return Wt.newInvalidDocument(t)}}function Xg(n){return new Ew(n)}class Iw extends Qg{constructor(t,e){super(),this.Nr=t,this.trackRemovals=e,this.Br=new On(s=>s.toString(),(s,r)=>s.isEqual(r))}applyChanges(t){const e=[];let s=0,r=new kt((i,o)=>pt(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const l=this.Br.get(i);if(e.push(this.Nr.removeEntry(t,i,l.readTime)),o.isValidDocument()){const u=hf(this.Nr.serializer,o);r=r.add(i.path.popLast());const c=Pa(u);s+=c-l.size,e.push(this.Nr.addEntry(t,i,u))}else if(s-=l.size,this.trackRemovals){const u=hf(this.Nr.serializer,o.convertToNoDocument(lt.min()));e.push(this.Nr.addEntry(t,i,u))}}),r.forEach(i=>{e.push(this.Nr.indexManager.addToCollectionParentIndex(t,i))}),e.push(this.Nr.updateMetadata(t,s)),P.waitFor(e)}getFromCache(t,e){return this.Nr.vr(t,e).next(s=>(this.Br.set(e,{size:s.size,readTime:s.document.readTime}),s.document))}getAllFromCache(t,e){return this.Nr.Mr(t,e).next(({documents:s,Or:r})=>(r.forEach((i,o)=>{this.Br.set(i,{size:o,readTime:s.get(i).readTime})}),s))}}function xf(n){return re(n,Xi)}function bs(n){return re(n,va)}function ui(n){const t=n.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function Pf(n,t){const e=t.documentKey.path.toArray();return[n,Ra(t.readTime),e.slice(0,e.length-2),e.length>0?e[e.length-1]:""]}function Cf(n,t){const e=n.path.toArray(),s=t.path.toArray();let r=0;for(let i=0;i<e.length-2&&i<s.length-2;++i)if(r=pt(e[i],s[i]),r)return r;return r=pt(e.length,s.length),r||(r=pt(e[e.length-2],s[s.length-2]),r||pt(e[e.length-1],s[s.length-1]))}/**
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
 */class Tw{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class Jg{constructor(t,e,s,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=s,this.indexManager=r}getDocument(t,e){let s=null;return this.documentOverlayCache.getOverlay(t,e).next(r=>(s=r,this.remoteDocumentCache.getEntry(t,e))).next(r=>(s!==null&&Mi(s.mutation,r,Ke.empty(),Ct.now()),r))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(s=>this.getLocalViewOfDocuments(t,s,bt()).next(()=>s))}getLocalViewOfDocuments(t,e,s=bt()){const r=an();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,s).next(i=>{let o=pi();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const s=an();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,bt()))}populateOverlays(t,e,s){const r=[];return s.forEach(i=>{e.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(t,r).next(i=>{i.forEach((o,l)=>{e.set(o,l)})})}computeViews(t,e,s,r){let i=Oe();const o=Oi(),l=function(){return Oi()}();return e.forEach((u,c)=>{const d=s.get(c.key);r.has(c.key)&&(d===void 0||d.mutation instanceof cs)?i=i.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Mi(d.mutation,c,d.mutation.getFieldMask(),Ct.now())):o.set(c.key,Ke.empty())}),this.recalculateAndSaveOverlays(t,i).next(u=>(u.forEach((c,d)=>o.set(c,d)),e.forEach((c,d)=>l.set(c,new Tw(d,o.get(c)??null))),l))}recalculateAndSaveOverlays(t,e){const s=Oi();let r=new Kt((o,l)=>o-l),i=bt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=e.get(u);if(c===null)return;let d=s.get(u)||Ke.empty();d=l.applyToLocalView(c,d),s.set(u,d);const p=(r.get(l.batchId)||bt()).add(u);r=r.insert(l.batchId,p)})}).next(()=>{const o=[],l=r.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=mg();d.forEach(y=>{if(!i.has(y)){const A=Eg(e.get(y),s.get(y));A!==null&&p.set(y,A),i=i.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,p))}return P.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,e,s,r){return function(o){return tt.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):AT(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,s,r):this.getDocumentsMatchingCollectionQuery(t,e,s,r)}getNextDocuments(t,e,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,s.largestBatchId,r-i.size):P.resolve(an());let l=Hi,u=i;return o.next(c=>P.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?P.resolve():this.remoteDocumentCache.getEntry(t,d).next(y=>{u=u.insert(d,y)}))).next(()=>this.populateOverlays(t,c,i)).next(()=>this.computeViews(t,u,c,bt())).next(d=>({batchId:l,changes:pg(d)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new tt(e)).next(s=>{let r=pi();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(t,e,s,r){const i=e.collectionGroup;let o=pi();return this.indexManager.getCollectionParents(t,i).next(l=>P.forEach(l,u=>{const c=function(p,y){return new el(y,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(e,u.child(i));return this.getDocumentsMatchingCollectionQuery(t,c,s,r).next(d=>{d.forEach((p,y)=>{o=o.insert(p,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,s.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,s,i,r))).next(o=>{i.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,Wt.newInvalidDocument(d)))});let l=pi();return o.forEach((u,c)=>{const d=i.get(u);d!==void 0&&Mi(d.mutation,c,Ke.empty(),Ct.now()),po(e,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class ww{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return P.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,function(r){return{id:r.id,version:r.version,createTime:Se(r.createTime)}}(e)),P.resolve()}getNamedQuery(t,e){return P.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,function(r){return{name:r.name,query:Ug(r.bundledQuery),readTime:Se(r.readTime)}}(e)),P.resolve()}}/**
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
 */class Aw{constructor(){this.overlays=new Kt(tt.comparator),this.qr=new Map}getOverlay(t,e){return P.resolve(this.overlays.get(e))}getOverlays(t,e){const s=an();return P.forEach(e,r=>this.getOverlay(t,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(t,e,s){return s.forEach((r,i)=>{this.St(t,e,i)}),P.resolve()}removeOverlaysForBatchId(t,e,s){const r=this.qr.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(s)),P.resolve()}getOverlaysForCollection(t,e,s){const r=an(),i=e.length+1,o=new tt(e.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!e.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>s&&r.set(u.getKey(),u)}return P.resolve(r)}getOverlaysForCollectionGroup(t,e,s,r){let i=new Kt((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===e&&c.largestBatchId>s){let d=i.get(c.largestBatchId);d===null&&(d=an(),i=i.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=an(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=r)););return P.resolve(l)}St(t,e,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.qr.get(r.largestBatchId).delete(s.key);this.qr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Tc(e,s));let i=this.qr.get(e);i===void 0&&(i=bt(),this.qr.set(e,i)),this.qr.set(e,i.add(s.key))}}/**
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
 */class Sw{constructor(){this.sessionToken=te.EMPTY_BYTE_STRING}getSessionToken(t){return P.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,P.resolve()}}/**
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
 */class xc{constructor(){this.Qr=new kt(le.$r),this.Ur=new kt(le.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const s=new le(t,e);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(t,e){t.forEach(s=>this.addReference(s,e))}removeReference(t,e){this.Gr(new le(t,e))}zr(t,e){t.forEach(s=>this.removeReference(s,e))}jr(t){const e=new tt(new Ot([])),s=new le(e,t),r=new le(e,t+1),i=[];return this.Ur.forEachInRange([s,r],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(t=>this.Gr(t))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new tt(new Ot([])),s=new le(e,t),r=new le(e,t+1);let i=bt();return this.Ur.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(t){const e=new le(t,0),s=this.Qr.firstAfterOrEqual(e);return s!==null&&t.isEqual(s.key)}}class le{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return tt.comparator(t.key,e.key)||pt(t.Yr,e.Yr)}static Kr(t,e){return pt(t.Yr,e.Yr)||tt.comparator(t.key,e.key)}}/**
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
 */class Rw{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new kt(le.$r)}checkEmpty(t){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,s,r){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ec(i,e,s,r);this.mutationQueue.push(o);for(const l of r)this.Zr=this.Zr.add(new le(l.key,i)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return P.resolve(o)}lookupMutationBatch(t,e){return P.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const s=e+1,r=this.ei(s),i=r<0?0:r;return P.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?ks:this.tr-1)}getAllMutationBatches(t){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const s=new le(e,0),r=new le(e,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([s,r],o=>{const l=this.Xr(o.Yr);i.push(l)}),P.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let s=new kt(pt);return e.forEach(r=>{const i=new le(r,0),o=new le(r,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],l=>{s=s.add(l.Yr)})}),P.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(t,e){const s=e.path,r=s.length+1;let i=s;tt.isDocumentKey(i)||(i=i.child(""));const o=new le(new tt(i),0);let l=new kt(pt);return this.Zr.forEachWhile(u=>{const c=u.key.path;return!!s.isPrefixOf(c)&&(c.length===r&&(l=l.add(u.Yr)),!0)},o),P.resolve(this.ti(l))}ti(t){const e=[];return t.forEach(s=>{const r=this.Xr(s);r!==null&&e.push(r)}),e}removeMutationBatch(t,e){it(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return P.forEach(e.mutations,r=>{const i=new le(r.key,e.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.Zr=s})}ir(t){}containsKey(t,e){const s=new le(e,0),r=this.Zr.firstAfterOrEqual(s);return P.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,P.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class xw{constructor(t){this.ri=t,this.docs=function(){return new Kt(tt.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const s=e.key,r=this.docs.get(s),i=r?r.size:0,o=this.ri(e);return this.docs=this.docs.insert(s,{document:e.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const s=this.docs.get(e);return P.resolve(s?s.document.mutableCopy():Wt.newInvalidDocument(e))}getEntries(t,e){let s=Oe();return e.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Wt.newInvalidDocument(r))}),P.resolve(s)}getDocumentsMatchingQuery(t,e,s,r){let i=Oe();const o=e.path,l=new tt(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||lc(Nm(d),s)<=0||(r.has(d.key)||po(e,d))&&(i=i.insert(d.key,d.mutableCopy()))}return P.resolve(i)}getAllFromCollectionGroup(t,e,s,r){rt(9500)}ii(t,e){return P.forEach(this.docs,s=>e(s))}newChangeBuffer(t){return new Pw(this)}getSize(t){return P.resolve(this.size)}}class Pw extends Qg{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?e.push(this.Nr.addEntry(t,r)):this.Nr.removeEntry(s)}),P.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
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
 */class Cw{constructor(t){this.persistence=t,this.si=new On(e=>$s(e),ho),this.lastRemoteSnapshotVersion=lt.min(),this.highestTargetId=0,this.oi=0,this._i=new xc,this.targetCount=0,this.ai=zs.ur()}forEachTarget(t,e){return this.si.forEach((s,r)=>e(r)),P.resolve()}getLastRemoteSnapshotVersion(t){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return P.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(t,e,s){return s&&(this.lastRemoteSnapshotVersion=s),e>this.oi&&(this.oi=e),P.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new zs(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,P.resolve()}updateTargetData(t,e){return this.Pr(e),P.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,P.resolve()}removeTargets(t,e,s){let r=0;const i=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=e&&s.get(l.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(t,l.targetId)),r++)}),P.waitFor(i).next(()=>r)}getTargetCount(t){return P.resolve(this.targetCount)}getTargetData(t,e){const s=this.si.get(e)||null;return P.resolve(s)}addMatchingKeys(t,e,s){return this._i.Wr(e,s),P.resolve()}removeMatchingKeys(t,e,s){this._i.zr(e,s);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach(o=>{i.push(r.markPotentiallyOrphaned(t,o))}),P.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),P.resolve()}getMatchingKeysForTargetId(t,e){const s=this._i.Hr(e);return P.resolve(s)}containsKey(t,e){return P.resolve(this._i.containsKey(e))}}/**
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
 */class Pc{constructor(t,e){this.ui={},this.overlays={},this.ci=new ze(0),this.li=!1,this.li=!0,this.hi=new Sw,this.referenceDelegate=t(this),this.Pi=new Cw(this),this.indexManager=new pw,this.remoteDocumentCache=function(r){return new xw(r)}(s=>this.referenceDelegate.Ti(s)),this.serializer=new Lg(e),this.Ii=new ww(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Aw,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let s=this.ui[t.toKey()];return s||(s=new Rw(e,this.referenceDelegate),this.ui[t.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,s){G("MemoryPersistence","Starting transaction:",t);const r=new Vw(this.ci.next());return this.referenceDelegate.Ei(),s(r).next(i=>this.referenceDelegate.di(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ai(t,e){return P.or(Object.values(this.ui).map(s=>()=>s.containsKey(t,e)))}}class Vw extends Mm{constructor(t){super(),this.currentSequenceNumber=t}}class ll{constructor(t){this.persistence=t,this.Ri=new xc,this.Vi=null}static mi(t){return new ll(t)}get fi(){if(this.Vi)return this.Vi;throw rt(60996)}addReference(t,e,s){return this.Ri.addReference(s,e),this.fi.delete(s.toString()),P.resolve()}removeReference(t,e,s){return this.Ri.removeReference(s,e),this.fi.add(s.toString()),P.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),P.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach(r=>this.fi.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,e.targetId).next(r=>{r.forEach(i=>this.fi.add(i.toString()))}).next(()=>s.removeTargetData(t,e))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.fi,s=>{const r=tt.fromPath(s);return this.gi(t,r).next(i=>{i||e.removeEntry(r,lt.min())})}).next(()=>(this.Vi=null,e.apply(t)))}updateLimboDocument(t,e){return this.gi(t,e).next(s=>{s?this.fi.delete(e.toString()):this.fi.add(e.toString())})}Ti(t){return 0}gi(t,e){return P.or([()=>P.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class Ca{constructor(t,e){this.persistence=t,this.pi=new On(s=>ve(s.path),(s,r)=>s.isEqual(r)),this.garbageCollector=Wg(this,e)}static mi(t,e){return new Ca(t,e)}Ei(){}di(t){return P.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next(s=>e.next(r=>s+r))}wr(t){let e=0;return this.pr(t,s=>{e++}).next(()=>e)}pr(t,e){return P.forEach(this.pi,(s,r)=>this.br(t,s,r).next(i=>i?P.resolve():e(r)))}removeTargets(t,e,s){return this.persistence.getTargetCache().removeTargets(t,e,s)}removeOrphanedDocuments(t,e){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ii(t,o=>this.br(t,o,e).next(l=>{l||(s++,i.removeEntry(o,lt.min()))})).next(()=>i.apply(t)).next(()=>s)}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),P.resolve()}removeTarget(t,e){const s=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,s)}addReference(t,e,s){return this.pi.set(s,t.currentSequenceNumber),P.resolve()}removeReference(t,e,s){return this.pi.set(s,t.currentSequenceNumber),P.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),P.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Jo(t.data.value)),e}br(t,e,s){return P.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const r=this.pi.get(e);return P.resolve(r!==void 0&&r>s)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Dw{constructor(t){this.serializer=t}k(t,e,s,r){const i=new Wa("createOrUpgrade",e);s<1&&r>=1&&(function(u){u.createObjectStore(co)}(t),function(u){u.createObjectStore(Qi,{keyPath:$I}),u.createObjectStore(We,{keyPath:Ud,autoIncrement:!0}).createIndex(Cs,$d,{unique:!0}),u.createObjectStore(Sr)}(t),Vf(t),function(u){u.createObjectStore(ws)}(t));let o=P.resolve();return s<3&&r>=3&&(s!==0&&(function(u){u.deleteObjectStore(xr),u.deleteObjectStore(Rr),u.deleteObjectStore(Ns)}(t),Vf(t)),o=o.next(()=>function(u){const c=u.store(Ns),d={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:lt.min().toTimestamp(),targetCount:0};return c.put(ba,d)}(i))),s<4&&r>=4&&(s!==0&&(o=o.next(()=>function(u,c){return c.store(We).J().next(p=>{u.deleteObjectStore(We),u.createObjectStore(We,{keyPath:Ud,autoIncrement:!0}).createIndex(Cs,$d,{unique:!0});const y=c.store(We),A=p.map(O=>y.put(O));return P.waitFor(A)})}(t,i))),o=o.next(()=>{(function(u){u.createObjectStore(Pr,{keyPath:XI})})(t)})),s<5&&r>=5&&(o=o.next(()=>this.yi(i))),s<6&&r>=6&&(o=o.next(()=>(function(u){u.createObjectStore(Xi)}(t),this.wi(i)))),s<7&&r>=7&&(o=o.next(()=>this.Si(i))),s<8&&r>=8&&(o=o.next(()=>this.bi(t,i))),s<9&&r>=9&&(o=o.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(t)})),s<10&&r>=10&&(o=o.next(()=>this.Di(i))),s<11&&r>=11&&(o=o.next(()=>{(function(u){u.createObjectStore(Xa,{keyPath:JI})})(t),function(u){u.createObjectStore(Ja,{keyPath:YI})}(t)})),s<12&&r>=12&&(o=o.next(()=>{(function(u){const c=u.createObjectStore(Ya,{keyPath:iT});c.createIndex(yu,oT,{unique:!1}),c.createIndex(qm,aT,{unique:!1})})(t)})),s<13&&r>=13&&(o=o.next(()=>function(u){const c=u.createObjectStore(va,{keyPath:qI});c.createIndex(Qo,zI),c.createIndex(Bm,KI)}(t)).next(()=>this.Ci(t,i)).next(()=>t.deleteObjectStore(ws))),s<14&&r>=14&&(o=o.next(()=>this.Fi(t,i))),s<15&&r>=15&&(o=o.next(()=>function(u){u.createObjectStore(hc,{keyPath:ZI,autoIncrement:!0}).createIndex(_u,tT,{unique:!1}),u.createObjectStore(Vi,{keyPath:eT}).createIndex($m,nT,{unique:!1}),u.createObjectStore(Di,{keyPath:sT}).createIndex(jm,rT,{unique:!1})}(t))),s<16&&r>=16&&(o=o.next(()=>{e.objectStore(Vi).clear()}).next(()=>{e.objectStore(Di).clear()})),s<17&&r>=17&&(o=o.next(()=>{(function(u){u.createObjectStore(dc,{keyPath:lT})})(t)})),s<18&&r>=18&&mm()&&(o=o.next(()=>{e.objectStore(Vi).clear()}).next(()=>{e.objectStore(Di).clear()})),o}wi(t){let e=0;return t.store(ws).ee((s,r)=>{e+=Pa(r)}).next(()=>{const s={byteSize:e};return t.store(Xi).put(gu,s)})}yi(t){const e=t.store(Qi),s=t.store(We);return e.J().next(r=>P.forEach(r,i=>{const o=IDBKeyRange.bound([i.userId,ks],[i.userId,i.lastAcknowledgedBatchId]);return s.J(Cs,o).next(l=>P.forEach(l,u=>{it(u.userId===i.userId,18650,"Cannot process batch from unexpected user",{batchId:u.batchId});const c=Ss(this.serializer,u);return zg(t,i.userId,c).next(()=>{})}))}))}Si(t){const e=t.store(xr),s=t.store(ws);return t.store(Ns).get(ba).next(r=>{const i=[];return s.ee((o,l)=>{const u=new Ot(o),c=function(p){return[0,ve(p)]}(u);i.push(e.get(c).next(d=>d?P.resolve():(p=>e.put({targetId:0,path:ve(p),sequenceNumber:r.highestListenSequenceNumber}))(u)))}).next(()=>P.waitFor(i))})}bi(t,e){t.createObjectStore(Ji,{keyPath:QI});const s=e.store(Ji),r=new Rc,i=o=>{if(r.add(o)){const l=o.lastSegment(),u=o.popLast();return s.put({collectionId:l,parent:ve(u)})}};return e.store(ws).ee({X:!0},(o,l)=>{const u=new Ot(o);return i(u.popLast())}).next(()=>e.store(Sr).ee({X:!0},([o,l,u],c)=>{const d=on(l);return i(d.popLast())}))}Di(t){const e=t.store(Rr);return e.ee((s,r)=>{const i=gi(r),o=Bg(this.serializer,i);return e.put(o)})}Ci(t,e){const s=e.store(ws),r=[];return s.ee((i,o)=>{const l=e.store(va),u=function(p){return p.document?new tt(Ot.fromString(p.document.name).popFirst(5)):p.noDocument?tt.fromSegments(p.noDocument.path):p.unknownDocument?tt.fromSegments(p.unknownDocument.path):rt(36783)}(o).path.toArray(),c={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};r.push(l.put(c))}).next(()=>P.waitFor(r))}Fi(t,e){const s=e.store(We),r=Xg(this.serializer),i=new Pc(ll.mi,this.serializer.yt);return s.J().next(o=>{const l=new Map;return o.forEach(u=>{let c=l.get(u.userId)??bt();Ss(this.serializer,u).keys().forEach(d=>c=c.add(d)),l.set(u.userId,c)}),P.forEach(l,(u,c)=>{const d=new ce(c),p=ol.wt(this.serializer,d),y=i.getIndexManager(d),A=al.wt(d,this.serializer,y,i.referenceDelegate);return new Jg(r,A,p,y).recalculateAndSaveOverlaysForDocumentKeys(new vu(e,ze.ce),u).next()})})}}function Vf(n){n.createObjectStore(xr,{keyPath:GI}).createIndex(cc,WI,{unique:!0}),n.createObjectStore(Rr,{keyPath:"targetId"}).createIndex(Um,HI,{unique:!0}),n.createObjectStore(Ns)}const zn="IndexedDbPersistence",jl=18e5,ql=5e3,zl="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",kw="main";class Cc{constructor(t,e,s,r,i,o,l,u,c,d,p=18){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=s,this.Mi=i,this.window=o,this.document=l,this.xi=c,this.Oi=d,this.Ni=p,this.ci=null,this.li=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Bi=null,this.inForeground=!1,this.Li=null,this.ki=null,this.qi=Number.NEGATIVE_INFINITY,this.Qi=y=>Promise.resolve(),!Cc.v())throw new nt(B.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new bw(this,r),this.$i=e+kw,this.serializer=new Lg(u),this.Ui=new ns(this.$i,this.Ni,new Dw(this.serializer)),this.hi=new lw,this.Pi=new gw(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Xg(this.serializer),this.Ii=new aw,this.window&&this.window.localStorage?this.Ki=this.window.localStorage:(this.Ki=null,d===!1&&Ae(zn,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Wi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new nt(B.FAILED_PRECONDITION,zl);return this.Gi(),this.zi(),this.ji(),this.runTransaction("getHighestListenSequenceNumber","readonly",t=>this.Pi.getHighestSequenceNumber(t))}).then(t=>{this.ci=new ze(t,this.xi)}).then(()=>{this.li=!0}).catch(t=>(this.Ui&&this.Ui.close(),Promise.reject(t)))}Ji(t){return this.Qi=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.Ui.$(async e=>{e.newVersion===null&&await t()})}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.Mi.enqueueAndForget(async()=>{this.started&&await this.Wi()}))}Wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",t=>Lo(t).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Hi(t).next(e=>{e||(this.isPrimary=!1,this.Mi.enqueueRetryable(()=>this.Qi(!1)))})}).next(()=>this.Yi(t)).next(e=>this.isPrimary&&!e?this.Zi(t).next(()=>!1):!!e&&this.Xi(t).next(()=>!0))).catch(t=>{if(us(t))return G(zn,"Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return G(zn,"Releasing owner lease after error during lease refresh",t),!1}).then(t=>{this.isPrimary!==t&&this.Mi.enqueueRetryable(()=>this.Qi(t)),this.isPrimary=t})}Hi(t){return ci(t).get(nr).next(e=>P.resolve(this.es(e)))}ts(t){return Lo(t).delete(this.clientId)}async ns(){if(this.isPrimary&&!this.rs(this.qi,jl)){this.qi=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const s=re(e,Pr);return s.J().next(r=>{const i=this.ss(r,jl),o=r.filter(l=>i.indexOf(l)===-1);return P.forEach(o,l=>s.delete(l.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ki)for(const e of t)this.Ki.removeItem(this._s(e.clientId))}}ji(){this.ki=this.Mi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Wi().then(()=>this.ns()).then(()=>this.ji()))}es(t){return!!t&&t.ownerId===this.clientId}Yi(t){return this.Oi?P.resolve(!0):ci(t).get(nr).next(e=>{if(e!==null&&this.rs(e.leaseTimestampMs,ql)&&!this.us(e.ownerId)){if(this.es(e)&&this.networkEnabled)return!0;if(!this.es(e)){if(!e.allowTabSynchronization)throw new nt(B.FAILED_PRECONDITION,zl);return!1}}return!(!this.networkEnabled||!this.inForeground)||Lo(t).J().next(s=>this.ss(s,ql).find(r=>{if(this.clientId!==r.clientId){const i=!this.networkEnabled&&r.networkEnabled,o=!this.inForeground&&r.inForeground,l=this.networkEnabled===r.networkEnabled;if(i||o&&l)return!0}return!1})===void 0)}).next(e=>(this.isPrimary!==e&&G(zn,`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.li=!1,this.cs(),this.ki&&(this.ki.cancel(),this.ki=null),this.ls(),this.hs(),await this.Ui.runTransaction("shutdown","readwrite",[co,Pr],t=>{const e=new vu(t,ze.ce);return this.Zi(e).next(()=>this.ts(e))}),this.Ui.close(),this.Ps()}ss(t,e){return t.filter(s=>this.rs(s.updateTimeMs,e)&&!this.us(s.clientId))}Ts(){return this.runTransaction("getActiveClients","readonly",t=>Lo(t).J().next(e=>this.ss(e,jl).map(s=>s.clientId)))}get started(){return this.li}getGlobalsCache(){return this.hi}getMutationQueue(t,e){return al.wt(t,this.serializer,e,this.referenceDelegate)}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(t){return new mw(t,this.serializer.yt.databaseId)}getDocumentOverlayCache(t){return ol.wt(this.serializer,t)}getBundleCache(){return this.Ii}runTransaction(t,e,s){G(zn,"Starting transaction:",t);const r=e==="readonly"?"readonly":"readwrite",i=function(u){return u===18?hT:u===17?Gm:u===16?cT:u===15?fc:u===14?Hm:u===13?Km:u===12?uT:u===11?zm:void rt(60245)}(this.Ni);let o;return this.Ui.runTransaction(t,r,i,l=>(o=new vu(l,this.ci?this.ci.next():ze.ce),e==="readwrite-primary"?this.Hi(o).next(u=>!!u||this.Yi(o)).next(u=>{if(!u)throw Ae(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.Mi.enqueueRetryable(()=>this.Qi(!1)),new nt(B.FAILED_PRECONDITION,Om);return s(o)}).next(u=>this.Xi(o).next(()=>u)):this.Is(o).next(()=>s(o)))).then(l=>(o.raiseOnCommittedEvent(),l))}Is(t){return ci(t).get(nr).next(e=>{if(e!==null&&this.rs(e.leaseTimestampMs,ql)&&!this.us(e.ownerId)&&!this.es(e)&&!(this.Oi||this.allowTabSynchronization&&e.allowTabSynchronization))throw new nt(B.FAILED_PRECONDITION,zl)})}Xi(t){const e={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ci(t).put(nr,e)}static v(){return ns.v()}Zi(t){const e=ci(t);return e.get(nr).next(s=>this.es(s)?(G(zn,"Releasing primary lease."),e.delete(nr)):P.resolve())}rs(t,e){const s=Date.now();return!(t<s-e)&&(!(t>s)||(Ae(`Detected an update time that is in the future: ${t} > ${s}`),!1))}Gi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Li=()=>{this.Mi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Wi()))},this.document.addEventListener("visibilitychange",this.Li),this.inForeground=this.document.visibilityState==="visible")}ls(){this.Li&&(this.document.removeEventListener("visibilitychange",this.Li),this.Li=null)}zi(){var t;typeof((t=this.window)==null?void 0:t.addEventListener)=="function"&&(this.Bi=()=>{this.cs();const e=/(?:Version|Mobile)\/1[456]/;pm()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.Mi.enterRestrictedMode(!0),this.Mi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Bi))}hs(){this.Bi&&(this.window.removeEventListener("pagehide",this.Bi),this.Bi=null)}us(t){var e;try{const s=((e=this.Ki)==null?void 0:e.getItem(this._s(t)))!==null;return G(zn,`Client '${t}' ${s?"is":"is not"} zombied in LocalStorage`),s}catch(s){return Ae(zn,"Failed to get zombied client id.",s),!1}}cs(){if(this.Ki)try{this.Ki.setItem(this._s(this.clientId),String(Date.now()))}catch(t){Ae("Failed to set zombie client id.",t)}}Ps(){if(this.Ki)try{this.Ki.removeItem(this._s(this.clientId))}catch{}}_s(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function ci(n){return re(n,co)}function Lo(n){return re(n,Pr)}function Nw(n,t){let e=n.projectId;return n.isDefaultDatabase||(e+="."+n.database),"firestore/"+t+"/"+e+"/"}/**
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
 */class Vc{constructor(t,e,s,r){this.targetId=t,this.fromCache=e,this.Es=s,this.ds=r}static As(t,e){let s=bt(),r=bt();for(const i of e.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Vc(t,e.fromCache,s,r)}}/**
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
 */class Ow{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Yg{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return pm()?8:Fm(fa())>0?6:4}()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,s,r){const i={result:null};return this.ys(t,e).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(t,e,r,s).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Ow;return this.Ss(t,e,o).next(l=>{if(i.result=l,this.Vs)return this.bs(t,e,o,l.size)})}).next(()=>i.result)}bs(t,e,s,r){return s.documentReadCount<this.fs?(ur()<=At.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",cr(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),P.resolve()):(ur()<=At.DEBUG&&G("QueryEngine","Query:",cr(e),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.gs*r?(ur()<=At.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",cr(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,He(e))):P.resolve())}ys(t,e){if(tf(e))return P.resolve(null);let s=He(e);return this.indexManager.getIndexType(t,s).next(r=>r===0?null:(e.limit!==null&&r===1&&(e=Au(e,null,"F"),s=He(e)),this.indexManager.getDocumentsMatchingTarget(t,s).next(i=>{const o=bt(...i);return this.ps.getDocuments(t,o).next(l=>this.indexManager.getMinOffset(t,s).next(u=>{const c=this.Ds(e,l);return this.Cs(e,c,o,u.readTime)?this.ys(t,Au(e,null,"F")):this.vs(t,c,e,u)}))})))}ws(t,e,s,r){return tf(e)||r.isEqual(lt.min())?P.resolve(null):this.ps.getDocuments(t,s).next(i=>{const o=this.Ds(e,i);return this.Cs(e,o,s,r)?P.resolve(null):(ur()<=At.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),cr(e)),this.vs(t,o,e,NI(r,Hi)).next(l=>l))})}Ds(t,e){let s=new kt(dg(t));return e.forEach((r,i)=>{po(t,i)&&(s=s.add(i))}),s}Cs(t,e,s,r){if(t.limit===null)return!1;if(s.size!==e.size)return!0;const i=t.limitType==="F"?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ss(t,e,s){return ur()<=At.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",cr(e)),this.ps.getDocumentsMatchingQuery(t,e,Le.min(),s)}vs(t,e,s,r){return this.ps.getDocumentsMatchingQuery(t,s,r).next(i=>(e.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const Dc="LocalStore",Mw=3e8;class Fw{constructor(t,e,s,r){this.persistence=t,this.Fs=e,this.serializer=r,this.Ms=new Kt(pt),this.xs=new On(i=>$s(i),ho),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(s)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Jg(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ms))}}function Zg(n,t,e,s){return new Fw(n,t,e,s)}async function t_(n,t){const e=mt(n);return await e.persistence.runTransaction("Handle user change","readonly",s=>{let r;return e.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,e.Bs(t),e.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],l=[];let u=bt();for(const c of r){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of i){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return e.localDocuments.getDocuments(s,u).next(c=>({Ls:c,removedBatchIds:o,addedBatchIds:l}))})})}function Lw(n,t){const e=mt(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=t.batch.keys(),i=e.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,y=p.keys();let A=P.resolve();return y.forEach(O=>{A=A.next(()=>d.getEntry(u,O)).next(k=>{const R=c.docVersions.get(O);it(R!==null,48541),k.version.compareTo(R)<0&&(p.applyToRemoteDocument(k,c),k.isValidDocument()&&(k.setReadTime(c.commitVersion),d.addEntry(k)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(e,s,t,i).next(()=>i.apply(s)).next(()=>e.mutationQueue.performConsistencyCheck(s)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(s,r,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(l){let u=bt();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(t))).next(()=>e.localDocuments.getDocuments(s,r))})}function e_(n){const t=mt(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Pi.getLastRemoteSnapshotVersion(e))}function Bw(n,t){const e=mt(n),s=t.snapshotVersion;let r=e.Ms;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=e.Ns.newChangeBuffer({trackRemovals:!0});r=e.Ms;const l=[];t.targetChanges.forEach((d,p)=>{const y=r.get(p);if(!y)return;l.push(e.Pi.removeMatchingKeys(i,d.removedDocuments,p).next(()=>e.Pi.addMatchingKeys(i,d.addedDocuments,p)));let A=y.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(p)!==null?A=A.withResumeToken(te.EMPTY_BYTE_STRING,lt.min()).withLastLimboFreeSnapshotVersion(lt.min()):d.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(d.resumeToken,s)),r=r.insert(p,A),function(k,R,F){return k.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=Mw?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(y,A,d)&&l.push(e.Pi.updateTargetData(i,A))});let u=Oe(),c=bt();if(t.documentUpdates.forEach(d=>{t.resolvedLimboDocuments.has(d)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(Uw(i,o,t.documentUpdates).next(d=>{u=d.ks,c=d.qs})),!s.isEqual(lt.min())){const d=e.Pi.getLastRemoteSnapshotVersion(i).next(p=>e.Pi.setTargetsMetadata(i,i.currentSequenceNumber,s));l.push(d)}return P.waitFor(l).next(()=>o.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(e.Ms=r,i))}function Uw(n,t,e){let s=bt(),r=bt();return e.forEach(i=>s=s.add(i)),t.getEntries(n,s).next(i=>{let o=Oe();return e.forEach((l,u)=>{const c=i.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(r=r.add(l)),u.isNoDocument()&&u.version.isEqual(lt.min())?(t.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(u),o=o.insert(l,u)):G(Dc,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{ks:o,qs:r}})}function $w(n,t){const e=mt(n);return e.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=ks),e.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function jw(n,t){const e=mt(n);return e.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return e.Pi.getTargetData(s,t).next(i=>i?(r=i,P.resolve(r)):e.Pi.allocateTargetId(s).next(o=>(r=new In(t,o,"TargetPurposeListen",s.currentSequenceNumber),e.Pi.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=e.Ms.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(e.Ms=e.Ms.insert(s.targetId,s),e.xs.set(t,s.targetId)),s})}async function ku(n,t,e){const s=mt(n),r=s.Ms.get(t),i=e?"readwrite":"readwrite-primary";try{e||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!us(o))throw o;G(Dc,`Failed to update sequence numbers for target ${t}: ${o}`)}s.Ms=s.Ms.remove(t),s.xs.delete(r.target)}function Df(n,t,e){const s=mt(n);let r=lt.min(),i=bt();return s.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=mt(u),y=p.xs.get(d);return y!==void 0?P.resolve(p.Ms.get(y)):p.Pi.getTargetData(c,d)}(s,o,He(t)).next(l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>s.Fs.getDocumentsMatchingQuery(o,t,e?r:lt.min(),e?i:bt())).next(l=>(qw(s,RT(t),l),{documents:l,Qs:i})))}function qw(n,t,e){let s=n.Os.get(t)||lt.min();e.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),n.Os.set(t,s)}class kf{constructor(){this.activeTargetIds=kT()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class n_{constructor(){this.Mo=new kf,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,s){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,s){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new kf,Promise.resolve()}handleUserChange(t,e,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class zw{Oo(t){}shutdown(){}}/**
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
 */const Nf="ConnectivityMonitor";class Of{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){G(Nf,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){G(Nf,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Bo=null;function Nu(){return Bo===null?Bo=function(){return 268435456+Math.round(2147483648*Math.random())}():Bo++,"0x"+Bo.toString(16)}/**
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
 */const Kl="RestConnection",Kw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Hw{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${s}/databases/${r}`,this.Wo=this.databaseId.database===Ea?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Go(t,e,s,r,i){const o=Nu(),l=this.zo(t,e.toUriEncodedString());G(Kl,`Sending RPC '${t}' ${o}:`,l,s);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,r,i);const{host:c}=new URL(l),d=sc(c);return this.Jo(t,l,u,s,d).then(p=>(G(Kl,`Received RPC '${t}' ${o}: `,p),p),p=>{throw Bs(Kl,`RPC '${t}' ${o} failed with error: `,p,"url: ",l,"request:",s),p})}Ho(t,e,s,r,i,o){return this.Go(t,e,s,r,i)}jo(t,e,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ur}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((r,i)=>t[i]=r),s&&s.headers.forEach((r,i)=>t[i]=r)}zo(t,e){const s=Kw[t];return`${this.Uo}/v1/${e}:${s}`}terminate(){}}/**
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
 */class Gw{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
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
 */const pe="WebChannelConnection";class Ww extends Hw{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,s,r,i){const o=Nu();return new Promise((l,u)=>{const c=new Am;c.setWithCredentials(!0),c.listenOnce(Sm.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ho.NO_ERROR:const p=c.getResponseJson();G(pe,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(p)),l(p);break;case Ho.TIMEOUT:G(pe,`RPC '${t}' ${o} timed out`),u(new nt(B.DEADLINE_EXCEEDED,"Request time out"));break;case Ho.HTTP_ERROR:const y=c.getStatus();if(G(pe,`RPC '${t}' ${o} failed with status:`,y,"response text:",c.getResponseText()),y>0){let A=c.getResponseJson();Array.isArray(A)&&(A=A[0]);const O=A==null?void 0:A.error;if(O&&O.status&&O.message){const k=function(F){const Q=F.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(Q)>=0?Q:B.UNKNOWN}(O.status);u(new nt(k,O.message))}else u(new nt(B.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new nt(B.UNAVAILABLE,"Connection failed."));break;default:rt(9055,{l_:t,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{G(pe,`RPC '${t}' ${o} completed.`)}});const d=JSON.stringify(r);G(pe,`RPC '${t}' ${o} sending request:`,r),c.send(e,"POST",d,s,15)})}T_(t,e,s){const r=Nu(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Pm(),l=xm(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,e,s),u.encodeInitMessageHeaders=!0;const d=i.join("");G(pe,`Creating RPC '${t}' stream ${r}: ${d}`,u);const p=o.createWebChannel(d,u);this.I_(p);let y=!1,A=!1;const O=new Gw({Yo:R=>{A?G(pe,`Not sending because RPC '${t}' stream ${r} is closed:`,R):(y||(G(pe,`Opening RPC '${t}' stream ${r} transport.`),p.open(),y=!0),G(pe,`RPC '${t}' stream ${r} sending:`,R),p.send(R))},Zo:()=>p.close()}),k=(R,F,Q)=>{R.listen(F,K=>{try{Q(K)}catch(X){setTimeout(()=>{throw X},0)}})};return k(p,fi.EventType.OPEN,()=>{A||(G(pe,`RPC '${t}' stream ${r} transport opened.`),O.o_())}),k(p,fi.EventType.CLOSE,()=>{A||(A=!0,G(pe,`RPC '${t}' stream ${r} transport closed`),O.a_(),this.E_(p))}),k(p,fi.EventType.ERROR,R=>{A||(A=!0,Bs(pe,`RPC '${t}' stream ${r} transport errored. Name:`,R.name,"Message:",R.message),O.a_(new nt(B.UNAVAILABLE,"The operation could not be completed")))}),k(p,fi.EventType.MESSAGE,R=>{var F;if(!A){const Q=R.data[0];it(!!Q,16349);const K=Q,X=(K==null?void 0:K.error)||((F=K[0])==null?void 0:F.error);if(X){G(pe,`RPC '${t}' stream ${r} received error:`,X);const st=X.status;let ut=function(_){const I=Jt[_];if(I!==void 0)return wg(I)}(st),w=X.message;ut===void 0&&(ut=B.INTERNAL,w="Unknown error status: "+st+" with message "+X.message),A=!0,O.a_(new nt(ut,w)),p.close()}else G(pe,`RPC '${t}' stream ${r} received:`,Q),O.u_(Q)}}),k(l,Rm.STAT_EVENT,R=>{R.stat===fu.PROXY?G(pe,`RPC '${t}' stream ${r} detected buffering proxy`):R.stat===fu.NOPROXY&&G(pe,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{O.__()},0),O}terminate(){this.c_.forEach(t=>t.close()),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter(e=>e===t)}}/**
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
 */function Qw(){return typeof window<"u"?window:null}function na(){return typeof document<"u"?document:null}/**
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
 */function ul(n){return new XT(n,!0)}/**
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
 */class s_{constructor(t,e,s=1e3,r=1.5,i=6e4){this.Mi=t,this.timerId=e,this.d_=s,this.A_=r,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),r=Math.max(0,e-s);r>0&&G("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,r,()=>(this.f_=Date.now(),t())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Mf="PersistentStream";class r_{constructor(t,e,s,r,i,o,l,u){this.Mi=t,this.S_=s,this.b_=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new s_(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===B.RESOURCE_EXHAUSTED?(Ae(e.toString()),Ae("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.D_===e&&this.G_(s,r)},s=>{t(()=>{const r=new nt(B.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(r)})})}G_(t,e){const s=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo(()=>{s(()=>this.listener.Xo())}),this.stream.t_(()=>{s(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(r=>{s(()=>this.z_(r))}),this.stream.onMessage(r=>{s(()=>++this.F_==1?this.J_(r):this.onNext(r))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return G(Mf,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget(()=>this.D_===t?e():(G(Mf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Xw extends r_{constructor(t,e,s,r,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,s,r,o),this.serializer=i}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=ZT(this.serializer,t),s=function(i){if(!("targetChange"in i))return lt.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?lt.min():o.readTime?Se(o.readTime):lt.min()}(t);return this.listener.H_(e,s)}Y_(t){const e={};e.database=xu(this.serializer),e.addTarget=function(i,o){let l;const u=o.target;if(l=Ta(u)?{documents:Dg(i,u)}:{query:kg(i,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Rg(i,o.resumeToken);const c=Su(i,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(lt.min())>0){l.readTime=Mr(i,o.snapshotVersion.toTimestamp());const c=Su(i,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,t);const s=ew(this.serializer,t);s&&(e.labels=s),this.q_(e)}Z_(t){const e={};e.database=xu(this.serializer),e.removeTarget=t,this.q_(e)}}class Jw extends r_{constructor(t,e,s,r,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,s,r,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return it(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,it(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){it(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=tw(t.writeResults,t.commitTime),s=Se(t.commitTime);return this.listener.na(s,e)}ra(){const t={};t.database=xu(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map(s=>Sa(this.serializer,s))};this.q_(e)}}/**
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
 */class Yw{}class Zw extends Yw{constructor(t,e,s,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=s,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new nt(B.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(t,Ru(e,s),r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new nt(B.UNKNOWN,i.toString())})}Ho(t,e,s,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(t,Ru(e,s),r,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new nt(B.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class t1{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ae(e),this.aa=!1):G("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Ks="RemoteStore";class e1{constructor(t,e,s,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{s.enqueueAndForget(async()=>{Qs(this)&&(G(Ks,"Restarting streams for network reachability change."),await async function(u){const c=mt(u);c.Ea.add(4),await go(c),c.Ra.set("Unknown"),c.Ea.delete(4),await cl(c)}(this))})}),this.Ra=new t1(s,r)}}async function cl(n){if(Qs(n))for(const t of n.da)await t(!0)}async function go(n){for(const t of n.da)await t(!1)}function i_(n,t){const e=mt(n);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),Mc(e)?Oc(e):jr(e).O_()&&Nc(e,t))}function kc(n,t){const e=mt(n),s=jr(e);e.Ia.delete(t),s.O_()&&o_(e,t),e.Ia.size===0&&(s.O_()?s.L_():Qs(e)&&e.Ra.set("Unknown"))}function Nc(n,t){if(n.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(lt.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}jr(n).Y_(t)}function o_(n,t){n.Va.Ue(t),jr(n).Z_(t)}function Oc(n){n.Va=new HT({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),At:t=>n.Ia.get(t)||null,ht:()=>n.datastore.serializer.databaseId}),jr(n).start(),n.Ra.ua()}function Mc(n){return Qs(n)&&!jr(n).x_()&&n.Ia.size>0}function Qs(n){return mt(n).Ea.size===0}function a_(n){n.Va=void 0}async function n1(n){n.Ra.set("Online")}async function s1(n){n.Ia.forEach((t,e)=>{Nc(n,t)})}async function r1(n,t){a_(n),Mc(n)?(n.Ra.ha(t),Oc(n)):n.Ra.set("Unknown")}async function i1(n,t,e){if(n.Ra.set("Online"),t instanceof Sg&&t.state===2&&t.cause)try{await async function(r,i){const o=i.cause;for(const l of i.targetIds)r.Ia.has(l)&&(await r.remoteSyncer.rejectListen(l,o),r.Ia.delete(l),r.Va.removeTarget(l))}(n,t)}catch(s){G(Ks,"Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Va(n,s)}else if(t instanceof ta?n.Va.Ze(t):t instanceof Ag?n.Va.st(t):n.Va.tt(t),!e.isEqual(lt.min()))try{const s=await e_(n.localStore);e.compareTo(s)>=0&&await function(i,o){const l=i.Va.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=i.Ia.get(c);d&&i.Ia.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=i.Ia.get(u);if(!d)return;i.Ia.set(u,d.withResumeToken(te.EMPTY_BYTE_STRING,d.snapshotVersion)),o_(i,u);const p=new In(d.target,u,c,d.sequenceNumber);Nc(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(n,e)}catch(s){G(Ks,"Failed to raise snapshot:",s),await Va(n,s)}}async function Va(n,t,e){if(!us(t))throw t;n.Ea.add(1),await go(n),n.Ra.set("Offline"),e||(e=()=>e_(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{G(Ks,"Retrying IndexedDB access"),await e(),n.Ea.delete(1),await cl(n)})}function l_(n,t){return t().catch(e=>Va(n,e,t))}async function _o(n){const t=mt(n),e=as(t);let s=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:ks;for(;o1(t);)try{const r=await $w(t.localStore,s);if(r===null){t.Ta.length===0&&e.L_();break}s=r.batchId,a1(t,r)}catch(r){await Va(t,r)}u_(t)&&c_(t)}function o1(n){return Qs(n)&&n.Ta.length<10}function a1(n,t){n.Ta.push(t);const e=as(n);e.O_()&&e.X_&&e.ea(t.mutations)}function u_(n){return Qs(n)&&!as(n).x_()&&n.Ta.length>0}function c_(n){as(n).start()}async function l1(n){as(n).ra()}async function u1(n){const t=as(n);for(const e of n.Ta)t.ea(e.mutations)}async function c1(n,t,e){const s=n.Ta.shift(),r=Ic.from(s,t,e);await l_(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await _o(n)}async function h1(n,t){t&&as(n).X_&&await async function(s,r){if(function(o){return qT(o)&&o!==B.ABORTED}(r.code)){const i=s.Ta.shift();as(s).B_(),await l_(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await _o(s)}}(n,t),u_(n)&&c_(n)}async function Ff(n,t){const e=mt(n);e.asyncQueue.verifyOperationInProgress(),G(Ks,"RemoteStore received new credentials");const s=Qs(e);e.Ea.add(3),await go(e),s&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await cl(e)}async function d1(n,t){const e=mt(n);t?(e.Ea.delete(2),await cl(e)):t||(e.Ea.add(2),await go(e),e.Ra.set("Unknown"))}function jr(n){return n.ma||(n.ma=function(e,s,r){const i=mt(e);return i.sa(),new Xw(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Xo:n1.bind(null,n),t_:s1.bind(null,n),r_:r1.bind(null,n),H_:i1.bind(null,n)}),n.da.push(async t=>{t?(n.ma.B_(),Mc(n)?Oc(n):n.Ra.set("Unknown")):(await n.ma.stop(),a_(n))})),n.ma}function as(n){return n.fa||(n.fa=function(e,s,r){const i=mt(e);return i.sa(),new Jw(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:l1.bind(null,n),r_:h1.bind(null,n),ta:u1.bind(null,n),na:c1.bind(null,n)}),n.da.push(async t=>{t?(n.fa.B_(),await _o(n)):(await n.fa.stop(),n.Ta.length>0&&(G(Ks,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
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
 */class Fc{constructor(t,e,s,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new An,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,s,r,i){const o=Date.now()+s,l=new Fc(t,e,o,r,i);return l.start(s),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new nt(B.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Lc(n,t){if(Ae("AsyncQueue",`${t}: ${n}`),us(n))return new nt(B.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class yr{static emptySet(t){return new yr(t.comparator)}constructor(t){this.comparator=t?(e,s)=>t(e,s)||tt.comparator(e.key,s.key):(e,s)=>tt.comparator(e.key,s.key),this.keyedMap=pi(),this.sortedSet=new Kt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,s)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof yr)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;e.hasNext();){const r=e.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const s=new yr;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=e,s}}/**
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
 */class Lf{constructor(){this.ga=new Kt(tt.comparator)}track(t){const e=t.doc.key,s=this.ga.get(e);s?t.type!==0&&s.type===3?this.ga=this.ga.insert(e,t):t.type===3&&s.type!==1?this.ga=this.ga.insert(e,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.ga=this.ga.remove(e):t.type===1&&s.type===2?this.ga=this.ga.insert(e,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):rt(63341,{Rt:t,pa:s}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal((e,s)=>{t.push(s)}),t}}class Fr{constructor(t,e,s,r,i,o,l,u,c){this.query=t,this.docs=e,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(t,e,s,r,i){const o=[];return e.forEach(l=>{o.push({type:0,doc:l})}),new Fr(t,e,yr.emptySet(e),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&nl(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,s=t.docChanges;if(e.length!==s.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==s[r].type||!e[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class f1{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(t=>t.Da())}}class p1{constructor(){this.queries=Bf(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,s){const r=mt(e),i=r.queries;r.queries=Bf(),i.forEach((o,l)=>{for(const u of l.Sa)u.onError(s)})})(this,new nt(B.ABORTED,"Firestore shutting down"))}}function Bf(){return new On(n=>hg(n),nl)}async function h_(n,t){const e=mt(n);let s=3;const r=t.query;let i=e.queries.get(r);i?!i.ba()&&t.Da()&&(s=2):(i=new f1,s=t.Da()?0:1);try{switch(s){case 0:i.wa=await e.onListen(r,!0);break;case 1:i.wa=await e.onListen(r,!1);break;case 2:await e.onFirstRemoteStoreListen(r)}}catch(o){const l=Lc(o,`Initialization of query '${cr(t.query)}' failed`);return void t.onError(l)}e.queries.set(r,i),i.Sa.push(t),t.va(e.onlineState),i.wa&&t.Fa(i.wa)&&Bc(e)}async function d_(n,t){const e=mt(n),s=t.query;let r=3;const i=e.queries.get(s);if(i){const o=i.Sa.indexOf(t);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?r=t.Da()?0:1:!i.ba()&&t.Da()&&(r=2))}switch(r){case 0:return e.queries.delete(s),e.onUnlisten(s,!0);case 1:return e.queries.delete(s),e.onUnlisten(s,!1);case 2:return e.onLastRemoteStoreUnlisten(s);default:return}}function m1(n,t){const e=mt(n);let s=!1;for(const r of t){const i=r.query,o=e.queries.get(i);if(o){for(const l of o.Sa)l.Fa(r)&&(s=!0);o.wa=r}}s&&Bc(e)}function g1(n,t,e){const s=mt(n),r=s.queries.get(t);if(r)for(const i of r.Sa)i.onError(e);s.queries.delete(t)}function Bc(n){n.Ca.forEach(t=>{t.next()})}var Ou,Uf;(Uf=Ou||(Ou={})).Ma="default",Uf.Cache="cache";class f_{constructor(t,e,s){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(t){if(!this.options.includeMetadataChanges){const s=[];for(const r of t.docChanges)r.type!==3&&s.push(r);t=new Fr(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const s=e!=="Offline";return(!this.options.qa||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=Fr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Ou.Cache}}/**
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
 */class p_{constructor(t){this.key=t}}class m_{constructor(t){this.key=t}}class _1{constructor(t,e){this.query=t,this.Ya=e,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=bt(),this.mutatedKeys=bt(),this.eu=dg(t),this.tu=new yr(this.eu)}get nu(){return this.Ya}ru(t,e){const s=e?e.iu:new Lf,r=e?e.tu:this.tu;let i=e?e.mutatedKeys:this.mutatedKeys,o=r,l=!1;const u=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,c=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((d,p)=>{const y=r.get(d),A=po(this.query,p)?p:null,O=!!y&&this.mutatedKeys.has(y.key),k=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let R=!1;y&&A?y.data.isEqual(A.data)?O!==k&&(s.track({type:3,doc:A}),R=!0):this.su(y,A)||(s.track({type:2,doc:A}),R=!0,(u&&this.eu(A,u)>0||c&&this.eu(A,c)<0)&&(l=!0)):!y&&A?(s.track({type:0,doc:A}),R=!0):y&&!A&&(s.track({type:1,doc:y}),R=!0,(u||c)&&(l=!0)),R&&(A?(o=o.add(A),i=k?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),s.track({type:1,doc:d})}return{tu:o,iu:s,Cs:l,mutatedKeys:i}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,s,r){const i=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const o=t.iu.ya();o.sort((d,p)=>function(A,O){const k=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return rt(20277,{Rt:R})}};return k(A)-k(O)}(d.type,p.type)||this.eu(d.doc,p.doc)),this.ou(s),r=r??!1;const l=e&&!r?this._u():[],u=this.Xa.size===0&&this.current&&!r?1:0,c=u!==this.Za;return this.Za=u,o.length!==0||c?{snapshot:new Fr(this.query,t.tu,i,o,t.mutatedKeys,u===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Lf,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach(e=>this.Ya=this.Ya.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ya=this.Ya.delete(e)),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=bt(),this.tu.forEach(s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))});const e=[];return t.forEach(s=>{this.Xa.has(s)||e.push(new m_(s))}),this.Xa.forEach(s=>{t.has(s)||e.push(new p_(s))}),e}cu(t){this.Ya=t.Qs,this.Xa=bt();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return Fr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Uc="SyncEngine";class y1{constructor(t,e,s){this.query=t,this.targetId=e,this.view=s}}class v1{constructor(t){this.key=t,this.hu=!1}}class b1{constructor(t,e,s,r,i,o){this.localStore=t,this.remoteStore=e,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new On(l=>hg(l),nl),this.Iu=new Map,this.Eu=new Set,this.du=new Kt(tt.comparator),this.Au=new Map,this.Ru=new xc,this.Vu={},this.mu=new Map,this.fu=zs.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function E1(n,t,e=!0){const s=E_(n);let r;const i=s.Tu.get(t);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.lu()):r=await g_(s,t,e,!0),r}async function I1(n,t){const e=E_(n);await g_(e,t,!0,!1)}async function g_(n,t,e,s){const r=await jw(n.localStore,He(t)),i=r.targetId,o=n.sharedClientState.addLocalQueryTarget(i,e);let l;return s&&(l=await T1(n,t,i,o==="current",r.resumeToken)),n.isPrimaryClient&&e&&i_(n.remoteStore,r),l}async function T1(n,t,e,s,r){n.pu=(p,y,A)=>async function(k,R,F,Q){let K=R.view.ru(F);K.Cs&&(K=await Df(k.localStore,R.query,!1).then(({documents:w})=>R.view.ru(w,K)));const X=Q&&Q.targetChanges.get(R.targetId),st=Q&&Q.targetMismatches.get(R.targetId)!=null,ut=R.view.applyChanges(K,k.isPrimaryClient,X,st);return jf(k,R.targetId,ut.au),ut.snapshot}(n,p,y,A);const i=await Df(n.localStore,t,!0),o=new _1(t,i.Qs),l=o.ru(i.documents),u=mo.createSynthesizedTargetChangeForCurrentChange(e,s&&n.onlineState!=="Offline",r),c=o.applyChanges(l,n.isPrimaryClient,u);jf(n,e,c.au);const d=new y1(t,e,o);return n.Tu.set(t,d),n.Iu.has(e)?n.Iu.get(e).push(t):n.Iu.set(e,[t]),c.snapshot}async function w1(n,t,e){const s=mt(n),r=s.Tu.get(t),i=s.Iu.get(r.targetId);if(i.length>1)return s.Iu.set(r.targetId,i.filter(o=>!nl(o,t))),void s.Tu.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await ku(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),e&&kc(s.remoteStore,r.targetId),Mu(s,r.targetId)}).catch(Gs)):(Mu(s,r.targetId),await ku(s.localStore,r.targetId,!0))}async function A1(n,t){const e=mt(n),s=e.Tu.get(t),r=e.Iu.get(s.targetId);e.isPrimaryClient&&r.length===1&&(e.sharedClientState.removeLocalQueryTarget(s.targetId),kc(e.remoteStore,s.targetId))}async function S1(n,t,e){const s=I_(n);try{const r=await function(o,l){const u=mt(o),c=Ct.now(),d=l.reduce((A,O)=>A.add(O.key),bt());let p,y;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let O=Oe(),k=bt();return u.Ns.getEntries(A,d).next(R=>{O=R,O.forEach((F,Q)=>{Q.isValidDocument()||(k=k.add(F))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,O)).next(R=>{p=R;const F=[];for(const Q of l){const K=$T(Q,p.get(Q.key).overlayedDocument);K!=null&&F.push(new cs(Q.key,K,sg(K.value.mapValue),Me.exists(!0)))}return u.mutationQueue.addMutationBatch(A,c,F,l)}).next(R=>{y=R;const F=R.applyToLocalDocumentSet(p,k);return u.documentOverlayCache.saveOverlays(A,R.batchId,F)})}).then(()=>({batchId:y.batchId,changes:pg(p)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(r.batchId),function(o,l,u){let c=o.Vu[o.currentUser.toKey()];c||(c=new Kt(pt)),c=c.insert(l,u),o.Vu[o.currentUser.toKey()]=c}(s,r.batchId,e),await yo(s,r.changes),await _o(s.remoteStore)}catch(r){const i=Lc(r,"Failed to persist write");e.reject(i)}}async function __(n,t){const e=mt(n);try{const s=await Bw(e.localStore,t);t.targetChanges.forEach((r,i)=>{const o=e.Au.get(i);o&&(it(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?o.hu=!0:r.modifiedDocuments.size>0?it(o.hu,14607):r.removedDocuments.size>0&&(it(o.hu,42227),o.hu=!1))}),await yo(e,s,t)}catch(s){await Gs(s)}}function $f(n,t,e){const s=mt(n);if(s.isPrimaryClient&&e===0||!s.isPrimaryClient&&e===1){const r=[];s.Tu.forEach((i,o)=>{const l=o.view.va(t);l.snapshot&&r.push(l.snapshot)}),function(o,l){const u=mt(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const y of p.Sa)y.va(l)&&(c=!0)}),c&&Bc(u)}(s.eventManager,t),r.length&&s.Pu.H_(r),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function R1(n,t,e){const s=mt(n);s.sharedClientState.updateQueryState(t,"rejected",e);const r=s.Au.get(t),i=r&&r.key;if(i){let o=new Kt(tt.comparator);o=o.insert(i,Wt.newNoDocument(i,lt.min()));const l=bt().add(i),u=new il(lt.min(),new Map,new Kt(pt),o,l);await __(s,u),s.du=s.du.remove(i),s.Au.delete(t),$c(s)}else await ku(s.localStore,t,!1).then(()=>Mu(s,t,e)).catch(Gs)}async function x1(n,t){const e=mt(n),s=t.batch.batchId;try{const r=await Lw(e.localStore,t);v_(e,s,null),y_(e,s),e.sharedClientState.updateMutationState(s,"acknowledged"),await yo(e,r)}catch(r){await Gs(r)}}async function P1(n,t,e){const s=mt(n);try{const r=await function(o,l){const u=mt(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(it(p!==null,37113),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(s.localStore,t);v_(s,t,e),y_(s,t),s.sharedClientState.updateMutationState(t,"rejected",e),await yo(s,r)}catch(r){await Gs(r)}}function y_(n,t){(n.mu.get(t)||[]).forEach(e=>{e.resolve()}),n.mu.delete(t)}function v_(n,t,e){const s=mt(n);let r=s.Vu[s.currentUser.toKey()];if(r){const i=r.get(t);i&&(e?i.reject(e):i.resolve(),r=r.remove(t)),s.Vu[s.currentUser.toKey()]=r}}function Mu(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const s of n.Iu.get(t))n.Tu.delete(s),e&&n.Pu.yu(s,e);n.Iu.delete(t),n.isPrimaryClient&&n.Ru.jr(t).forEach(s=>{n.Ru.containsKey(s)||b_(n,s)})}function b_(n,t){n.Eu.delete(t.path.canonicalString());const e=n.du.get(t);e!==null&&(kc(n.remoteStore,e),n.du=n.du.remove(t),n.Au.delete(e),$c(n))}function jf(n,t,e){for(const s of e)s instanceof p_?(n.Ru.addReference(s.key,t),C1(n,s)):s instanceof m_?(G(Uc,"Document no longer in limbo: "+s.key),n.Ru.removeReference(s.key,t),n.Ru.containsKey(s.key)||b_(n,s.key)):rt(19791,{wu:s})}function C1(n,t){const e=t.key,s=e.path.canonicalString();n.du.get(e)||n.Eu.has(s)||(G(Uc,"New document in limbo: "+e),n.Eu.add(s),$c(n))}function $c(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Eu.values().next().value;n.Eu.delete(t);const e=new tt(Ot.fromString(t)),s=n.fu.next();n.Au.set(s,new v1(e)),n.du=n.du.insert(e,s),i_(n.remoteStore,new In(He(fo(e.path)),s,"TargetPurposeLimboResolution",ze.ce))}}async function yo(n,t,e){const s=mt(n),r=[],i=[],o=[];s.Tu.isEmpty()||(s.Tu.forEach((l,u)=>{o.push(s.pu(u,t,e).then(c=>{var d;if((c||e)&&s.isPrimaryClient){const p=c?!c.fromCache:(d=e==null?void 0:e.targetChanges.get(u.targetId))==null?void 0:d.current;s.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){r.push(c);const p=Vc.As(u.targetId,c);i.push(p)}}))}),await Promise.all(o),s.Pu.H_(r),await async function(u,c){const d=mt(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>P.forEach(c,y=>P.forEach(y.Es,A=>d.persistence.referenceDelegate.addReference(p,y.targetId,A)).next(()=>P.forEach(y.ds,A=>d.persistence.referenceDelegate.removeReference(p,y.targetId,A)))))}catch(p){if(!us(p))throw p;G(Dc,"Failed to update sequence numbers: "+p)}for(const p of c){const y=p.targetId;if(!p.fromCache){const A=d.Ms.get(y),O=A.snapshotVersion,k=A.withLastLimboFreeSnapshotVersion(O);d.Ms=d.Ms.insert(y,k)}}}(s.localStore,i))}async function V1(n,t){const e=mt(n);if(!e.currentUser.isEqual(t)){G(Uc,"User change. New user:",t.toKey());const s=await t_(e.localStore,t);e.currentUser=t,function(i,o){i.mu.forEach(l=>{l.forEach(u=>{u.reject(new nt(B.CANCELLED,o))})}),i.mu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await yo(e,s.Ls)}}function D1(n,t){const e=mt(n),s=e.Au.get(t);if(s&&s.hu)return bt().add(s.key);{let r=bt();const i=e.Iu.get(t);if(!i)return r;for(const o of i){const l=e.Tu.get(o);r=r.unionWith(l.view.nu)}return r}}function E_(n){const t=mt(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=__.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=D1.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=R1.bind(null,t),t.Pu.H_=m1.bind(null,t.eventManager),t.Pu.yu=g1.bind(null,t.eventManager),t}function I_(n){const t=mt(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=x1.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=P1.bind(null,t),t}class so{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=ul(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return Zg(this.persistence,new Yg,t.initialUser,this.serializer)}Cu(t){return new Pc(ll.mi,this.serializer)}Du(t){return new n_}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}so.provider={build:()=>new so};class k1 extends so{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){it(this.persistence.referenceDelegate instanceof Ca,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new Gg(s,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?ge.withCacheSize(this.cacheSizeBytes):ge.DEFAULT;return new Pc(s=>Ca.mi(s,e),this.serializer)}}class N1 extends so{constructor(t,e,s){super(),this.xu=t,this.cacheSizeBytes=e,this.forceOwnership=s,this.kind="persistent",this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await this.xu.initialize(this,t),await I_(this.xu.syncEngine),await _o(this.xu.remoteStore),await this.persistence.Ji(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}vu(t){return Zg(this.persistence,new Yg,t.initialUser,this.serializer)}Fu(t,e){const s=this.persistence.referenceDelegate.garbageCollector;return new Gg(s,t.asyncQueue,e)}Mu(t,e){const s=new LI(e,this.persistence);return new FI(t.asyncQueue,s)}Cu(t){const e=Nw(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),s=this.cacheSizeBytes!==void 0?ge.withCacheSize(this.cacheSizeBytes):ge.DEFAULT;return new Cc(this.synchronizeTabs,e,t.clientId,s,t.asyncQueue,Qw(),na(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Du(t){return new n_}}class Da{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>$f(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=V1.bind(null,this.syncEngine),await d1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new p1}()}createDatastore(t){const e=ul(t.databaseInfo.databaseId),s=function(i){return new Ww(i)}(t.databaseInfo);return function(i,o,l,u){return new Zw(i,o,l,u)}(t.authCredentials,t.appCheckCredentials,s,e)}createRemoteStore(t){return function(s,r,i,o,l){return new e1(s,r,i,o,l)}(this.localStore,this.datastore,t.asyncQueue,e=>$f(this.syncEngine,e,0),function(){return Of.v()?new Of:new zw}())}createSyncEngine(t,e){return function(r,i,o,l,u,c,d){const p=new b1(r,i,o,l,u,c);return d&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(r){const i=mt(r);G(Ks,"RemoteStore shutting down."),i.Ea.add(5),await go(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}Da.provider={build:()=>new Da};/**
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
 */class T_{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):Ae("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */const ls="FirestoreClient";class O1{constructor(t,e,s,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=s,this.databaseInfo=r,this.user=ce.UNAUTHENTICATED,this.clientId=oc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,async o=>{G(ls,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(s,o=>(G(ls,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new An;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const s=Lc(e,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Hl(n,t){n.asyncQueue.verifyOperationInProgress(),G(ls,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let s=e.initialUser;n.setCredentialChangeListener(async r=>{s.isEqual(r)||(await t_(t.localStore,r),s=r)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function qf(n,t){n.asyncQueue.verifyOperationInProgress();const e=await M1(n);G(ls,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(s=>Ff(t.remoteStore,s)),n.setAppCheckTokenChangeListener((s,r)=>Ff(t.remoteStore,r)),n._onlineComponents=t}async function M1(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){G(ls,"Using user provided OfflineComponentProvider");try{await Hl(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(r){return r.name==="FirebaseError"?r.code===B.FAILED_PRECONDITION||r.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(e))throw e;Bs("Error using user provided cache. Falling back to memory cache: "+e),await Hl(n,new so)}}else G(ls,"Using default OfflineComponentProvider"),await Hl(n,new k1(void 0));return n._offlineComponents}async function w_(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(G(ls,"Using user provided OnlineComponentProvider"),await qf(n,n._uninitializedComponentsProvider._online)):(G(ls,"Using default OnlineComponentProvider"),await qf(n,new Da))),n._onlineComponents}function F1(n){return w_(n).then(t=>t.syncEngine)}async function Fu(n){const t=await w_(n),e=t.eventManager;return e.onListen=E1.bind(null,t.syncEngine),e.onUnlisten=w1.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=I1.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=A1.bind(null,t.syncEngine),e}function L1(n,t,e={}){const s=new An;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const d=new T_({next:y=>{d.Nu(),o.enqueueAndForget(()=>d_(i,p));const A=y.docs.has(l);!A&&y.fromCache?c.reject(new nt(B.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&y.fromCache&&u&&u.source==="server"?c.reject(new nt(B.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(y)},error:y=>c.reject(y)}),p=new f_(fo(l.path),d,{includeMetadataChanges:!0,qa:!0});return h_(i,p)}(await Fu(n),n.asyncQueue,t,e,s)),s.promise}/**
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
 */function A_(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const zf=new Map;/**
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
 */const S_="firestore.googleapis.com",Kf=!0;class Hf{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new nt(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=S_,this.ssl=Kf}else this.host=t.host,this.ssl=t.ssl??Kf;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=qg;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<_w)throw new nt(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}kI("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=A_(t.experimentalLongPollingOptions??{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new nt(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new nt(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new nt(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class jc{constructor(t,e,s,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Hf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new nt(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new nt(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Hf(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new II;switch(s.type){case"firstParty":return new SI(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new nt(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const s=zf.get(e);s&&(G("ComponentProvider","Removing Datastore"),zf.delete(e),s.terminate())}(this),Promise.resolve()}}function B1(n,t,e,s={}){var c;n=Sn(n,jc);const r=sc(t),i=n._getSettings(),o={...i,emulatorOptions:n._getEmulatorOptions()},l=`${t}:${e}`;r&&(Zb(`https://${l}`),sE("Firestore",!0)),i.host!==S_&&i.host!==l&&Bs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:r,emulatorOptions:s};if(!pa(u,o)&&(n._setSettings(u),s.mockUserToken)){let d,p;if(typeof s.mockUserToken=="string")d=s.mockUserToken,p=ce.MOCK_USER;else{d=tE(s.mockUserToken,(c=n._app)==null?void 0:c.options.projectId);const y=s.mockUserToken.sub||s.mockUserToken.user_id;if(!y)throw new nt(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new ce(y)}n._authCredentials=new TI(new Vm(d,p))}}/**
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
 */class hl{constructor(t,e,s){this.converter=e,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new hl(this.firestore,t,this._query)}}class se{constructor(t,e,s){this.converter=e,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ro(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new se(this.firestore,t,this._key)}toJSON(){return{type:se._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,s){if(uo(e,se._jsonSchema))return new se(t,s||null,new tt(Ot.fromString(e.referencePath)))}}se._jsonSchemaVersion="firestore/documentReference/1.0",se._jsonSchema={type:Yt("string",se._jsonSchemaVersion),referencePath:Yt("string")};class ro extends hl{constructor(t,e,s){super(t,e,fo(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new se(this.firestore,null,new tt(t))}withConverter(t){return new ro(this.firestore,t,this._path)}}function Rn(n,t,...e){if(n=qi(n),arguments.length===1&&(t=oc.newId()),DI("doc","path",t),n instanceof jc){const s=Ot.fromString(t,...e);return Od(s),new se(n,null,new tt(s))}{if(!(n instanceof se||n instanceof ro))throw new nt(B.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Ot.fromString(t,...e));return Od(s),new se(n.firestore,n instanceof ro?n.converter:null,new tt(s))}}/**
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
 */const Gf="AsyncQueue";class Wf{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new s_(this,"async_queue_retry"),this._c=()=>{const s=na();s&&G(Gf,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=t;const e=na();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=na();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const e=new An;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Xu.push(t),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!us(t))throw t;G(Gf,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const e=this.ac.then(()=>(this.rc=!0,t().catch(s=>{throw this.nc=s,this.rc=!1,Ae("INTERNAL UNHANDLED ERROR: ",Qf(s)),s}).then(s=>(this.rc=!1,s))));return this.ac=e,e}enqueueAfterDelay(t,e,s){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const r=Fc.createAndSchedule(this,t,e,s,i=>this.hc(i));return this.tc.push(r),r}uc(){this.nc&&rt(47125,{Pc:Qf(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then(()=>{this.tc.sort((e,s)=>e.targetTimeMs-s.targetTimeMs);for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()})}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function Qf(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function Xf(n){return function(e,s){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of s)if(i in r&&typeof r[i]=="function")return!0;return!1}(n,["next","error","complete"])}class Lr extends jc{constructor(t,e,s,r){super(t,e,s,r),this.type="firestore",this._queue=new Wf,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Wf(t),this._firestoreClient=void 0,await t}}}function U1(n,t){const e=typeof n=="object"?n:uI(),s=typeof n=="string"?n:Ea,r=rI(e,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Jb("firestore");i&&B1(r,...i)}return r}function qc(n){if(n._terminated)throw new nt(B.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||R_(n),n._firestoreClient}function R_(n){var s,r,i;const t=n._freezeSettings(),e=function(l,u,c,d){return new fT(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,A_(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(n._databaseId,((s=n._app)==null?void 0:s.options.appId)||"",n._persistenceKey,t);n._componentsProvider||(r=t.localCache)!=null&&r._offlineComponentProvider&&((i=t.localCache)!=null&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new O1(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(n._componentsProvider))}function $1(n,t){Bs("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=n._freezeSettings();return j1(n,Da.provider,{build:s=>new N1(s,e.cacheSizeBytes,t==null?void 0:t.forceOwnership)}),Promise.resolve()}function j1(n,t,e){if((n=Sn(n,Lr))._firestoreClient||n._terminated)throw new nt(B.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new nt(B.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:t,_offline:e},R_(n)}/**
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
 */class je{constructor(t){this._byteString=t}static fromBase64String(t){try{return new je(te.fromBase64String(t))}catch(e){throw new nt(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new je(te.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:je._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(uo(t,je._jsonSchema))return je.fromBase64String(t.bytes)}}je._jsonSchemaVersion="firestore/bytes/1.0",je._jsonSchema={type:Yt("string",je._jsonSchemaVersion),bytes:Yt("string")};/**
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
 */class zc{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new nt(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ht(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class x_{constructor(t){this._methodName=t}}/**
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
 */class cn{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new nt(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new nt(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return pt(this._lat,t._lat)||pt(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:cn._jsonSchemaVersion}}static fromJSON(t){if(uo(t,cn._jsonSchema))return new cn(t.latitude,t.longitude)}}cn._jsonSchemaVersion="firestore/geoPoint/1.0",cn._jsonSchema={type:Yt("string",cn._jsonSchemaVersion),latitude:Yt("number"),longitude:Yt("number")};/**
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
 */class hn{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0}(this._values,t._values)}toJSON(){return{type:hn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(uo(t,hn._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new hn(t.vectorValues);throw new nt(B.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}hn._jsonSchemaVersion="firestore/vectorValue/1.0",hn._jsonSchema={type:Yt("string",hn._jsonSchemaVersion),vectorValues:Yt("object")};/**
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
 */const q1=/^__.*__$/;class z1{constructor(t,e,s){this.data=t,this.fieldMask=e,this.fieldTransforms=s}toMutation(t,e){return this.fieldMask!==null?new cs(t,this.data,this.fieldMask,e,this.fieldTransforms):new $r(t,this.data,e,this.fieldTransforms)}}function P_(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw rt(40011,{Ac:n})}}class Kc{constructor(t,e,s,r,i,o){this.settings=t,this.databaseId=e,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new Kc({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){var r;const e=(r=this.path)==null?void 0:r.child(t),s=this.Vc({path:e,fc:!1});return s.gc(t),s}yc(t){var r;const e=(r=this.path)==null?void 0:r.child(t),s=this.Vc({path:e,fc:!1});return s.Rc(),s}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return ka(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(P_(this.Ac)&&q1.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class K1{constructor(t,e,s){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=s||ul(t)}Cc(t,e,s,r=!1){return new Kc({Ac:t,methodName:e,Dc:s,path:Ht.emptyPath(),fc:!1,bc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function H1(n){const t=n._freezeSettings(),e=ul(n._databaseId);return new K1(n._databaseId,!!t.ignoreUndefinedProperties,e)}function G1(n,t,e,s,r,i={}){const o=n.Cc(i.merge||i.mergeFields?2:0,t,e,r);k_("Data must be an object, but it was:",o,s);const l=V_(s,o);let u,c;if(i.merge)u=new Ke(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const y=W1(t,p,e);if(!o.contains(y))throw new nt(B.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);X1(d,y)||d.push(y)}u=new Ke(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new z1(new Re(l),u,c)}function C_(n,t){if(D_(n=qi(n)))return k_("Unsupported field value:",t,n),V_(n,t);if(n instanceof x_)return function(s,r){if(!P_(r.Ac))throw r.Sc(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Sc(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return function(s,r){const i=[];let o=0;for(const l of s){let u=C_(l,r.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(n,t)}return function(s,r){if((s=qi(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return NT(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=Ct.fromDate(s);return{timestampValue:Mr(r.serializer,i)}}if(s instanceof Ct){const i=new Ct(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Mr(r.serializer,i)}}if(s instanceof cn)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof je)return{bytesValue:Rg(r.serializer,s._byteString)};if(s instanceof se){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ac(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof hn)return function(o,l){return{mapValue:{fields:{[mc]:{stringValue:gc},[Cr]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Sc("VectorValues must only contain numeric values.");return vc(l.serializer,c)})}}}}}}(s,r);throw r.Sc(`Unsupported field value: ${ac(s)}`)}(n,t)}function V_(n,t){const e={};return Wm(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ws(n,(s,r)=>{const i=C_(r,t.mc(s));i!=null&&(e[s]=i)}),{mapValue:{fields:e}}}function D_(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ct||n instanceof cn||n instanceof je||n instanceof se||n instanceof x_||n instanceof hn)}function k_(n,t,e){if(!D_(e)||!km(e)){const s=ac(e);throw s==="an object"?t.Sc(n+" a custom object"):t.Sc(n+" "+s)}}function W1(n,t,e){if((t=qi(t))instanceof zc)return t._internalPath;if(typeof t=="string")return N_(n,t);throw ka("Field path arguments must be of type string or ",n,!1,void 0,e)}const Q1=new RegExp("[~\\*/\\[\\]]");function N_(n,t,e){if(t.search(Q1)>=0)throw ka(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new zc(...t.split("."))._internalPath}catch{throw ka(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function ka(n,t,e,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${s}`),o&&(u+=` in document ${r}`),u+=")"),new nt(B.INVALID_ARGUMENT,l+n+u)}function X1(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class O_{constructor(t,e,s,r,i){this._firestore=t,this._userDataWriter=e,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new se(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new J1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(M_("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class J1 extends O_{data(){return super.data()}}function M_(n,t){return typeof t=="string"?N_(n,t):t instanceof zc?t._internalPath:t._delegate._internalPath}/**
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
 */function Y1(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new nt(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Z1{convertValue(t,e="none"){switch(is(t)){case 0:return null;case 1:return t.booleanValue;case 2:return zt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(kn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw rt(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const s={};return Ws(t,(r,i)=>{s[r]=this.convertValue(i,e)}),s}convertVectorValue(t){var s,r,i;const e=(i=(r=(s=t.fields)==null?void 0:s[Cr].arrayValue)==null?void 0:r.values)==null?void 0:i.map(o=>zt(o.doubleValue));return new hn(e)}convertGeoPoint(t){return new cn(zt(t.latitude),zt(t.longitude))}convertArray(t,e){return(t.values||[]).map(s=>this.convertValue(s,e))}convertServerTimestamp(t,e){switch(e){case"previous":const s=Za(t);return s==null?null:this.convertValue(s,e);case"estimate":return this.convertTimestamp(Yi(t));default:return null}}convertTimestamp(t){const e=Dn(t);return new Ct(e.seconds,e.nanos)}convertDocumentKey(t,e){const s=Ot.fromString(t);it(Fg(s),9688,{name:t});const r=new Us(s.get(1),s.get(3)),i=new tt(s.popFirst(5));return r.isEqual(e)||Ae(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
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
 */function t0(n,t,e){let s;return s=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,s}class _i{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ms extends O_{constructor(t,e,s,r,i,o){super(t,e,s,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new sa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const s=this._document.data.field(M_("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new nt(B.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Ms._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Ms._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ms._jsonSchema={type:Yt("string",Ms._jsonSchemaVersion),bundleSource:Yt("string","DocumentSnapshot"),bundleName:Yt("string"),bundle:Yt("string")};class sa extends Ms{data(t={}){return super.data(t)}}class vr{constructor(t,e,s,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new _i(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(s=>{t.call(e,new sa(this._firestore,this._userDataWriter,s.key,s,new _i(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new nt(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(l=>{const u=new sa(r._firestore,r._userDataWriter,l.doc.key,l.doc,new _i(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new sa(r._firestore,r._userDataWriter,l.doc.key,l.doc,new _i(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:e0(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new nt(B.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=vr._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=oc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],s=[],r=[];return this.docs.forEach(i=>{i._document!==null&&(e.push(i._document),s.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function e0(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return rt(61501,{type:n})}}/**
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
 */function Hc(n){n=Sn(n,se);const t=Sn(n.firestore,Lr);return L1(qc(t),n._key).then(e=>L_(t,n,e))}vr._jsonSchemaVersion="firestore/querySnapshot/1.0",vr._jsonSchema={type:Yt("string",vr._jsonSchemaVersion),bundleSource:Yt("string","QuerySnapshot"),bundleName:Yt("string"),bundle:Yt("string")};class F_ extends Z1{constructor(t){super(),this.firestore=t}convertBytes(t){return new je(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new se(this.firestore,null,e)}}function Gc(n,t,e){n=Sn(n,se);const s=Sn(n.firestore,Lr),r=t0(n.converter,t,e);return n0(s,[G1(H1(s),"setDoc",n._key,r,n.converter!==null,e).toMutation(n._key,Me.none())])}function Wc(n,...t){var u,c,d;n=qi(n);let e={includeMetadataChanges:!1,source:"default"},s=0;typeof t[s]!="object"||Xf(t[s])||(e=t[s++]);const r={includeMetadataChanges:e.includeMetadataChanges,source:e.source};if(Xf(t[s])){const p=t[s];t[s]=(u=p.next)==null?void 0:u.bind(p),t[s+1]=(c=p.error)==null?void 0:c.bind(p),t[s+2]=(d=p.complete)==null?void 0:d.bind(p)}let i,o,l;if(n instanceof se)o=Sn(n.firestore,Lr),l=fo(n._key.path),i={next:p=>{t[s]&&t[s](L_(o,n,p))},error:t[s+1],complete:t[s+2]};else{const p=Sn(n,hl);o=Sn(p.firestore,Lr),l=p._query;const y=new F_(o);i={next:A=>{t[s]&&t[s](new vr(o,y,p,A))},error:t[s+1],complete:t[s+2]},Y1(n._query)}return function(y,A,O,k){const R=new T_(k),F=new f_(A,R,O);return y.asyncQueue.enqueueAndForget(async()=>h_(await Fu(y),F)),()=>{R.Nu(),y.asyncQueue.enqueueAndForget(async()=>d_(await Fu(y),F))}}(qc(o),l,r,i)}function n0(n,t){return function(s,r){const i=new An;return s.asyncQueue.enqueueAndForget(async()=>S1(await F1(s),r,i)),i.promise}(qc(n),t)}function L_(n,t,e){const s=e.docs.get(t._key),r=new F_(n);return new Ms(n,r,t._key,s,new _i(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(r){Ur=r})(lI),ga(new zi("firestore",(s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),l=new Lr(new wI(s.getProvider("auth-internal")),new RI(o,s.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new nt(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Us(c.options.projectId,d)}(o,r),o);return i={useFetchStreams:e,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),_r(Vd,Dd,t),_r(Vd,Dd,"esm2020")})();const s0={apiKey:"AIzaSyCeuFf7o9xtohXriEW29fWZ1A3jZa3akY4",authDomain:"xauusd-e9d42.firebaseapp.com",projectId:"xauusd-e9d42",storageBucket:"xauusd-e9d42.firebasestorage.app",messagingSenderId:"55867486676",appId:"1:55867486676:web:2995ce77d3cdd6eae4c91f"},r0=Em(s0),dn=U1(r0);$1(dn).catch(n=>{n.code==="failed-precondition"?console.warn("多個標籤頁開啟，無法啟用持久化"):n.code==="unimplemented"&&console.warn("瀏覽器不支援持久化")});const Jf="volatility_store_data",Gl="user_data",B_=$b("volatility",()=>{var X,st,ut,w,v;const n=()=>{const _=[];let I=new Date;for(;_.length<5;){const E=I.getDay();E!==0&&E!==6&&_.unshift(I.toISOString().split("T")[0]),I.setDate(I.getDate()-1)}return _},e=(()=>{try{const _=localStorage.getItem(Jf);if(_)return JSON.parse(_)}catch(_){console.error("Failed to load data from localStorage:",_)}return null})(),s=Pt((e==null?void 0:e.dailyVolatilities)||n().map(_=>({date:_,highPoint:0,lowPoint:0}))),r=Pt((e==null?void 0:e.breakoutHigh)||0),i=Pt((e==null?void 0:e.breakoutLow)||0),o=Pt((e==null?void 0:e.moduleTemplate)||""),l=Pt({quantity:((X=e==null?void 0:e.sellLimit)==null?void 0:X.quantity)||0,stopLoss:((st=e==null?void 0:e.sellLimit)==null?void 0:st.stopLoss)||0,cost:((ut=e==null?void 0:e.sellLimit)==null?void 0:ut.cost)||0,price:((w=e==null?void 0:e.sellLimit)==null?void 0:w.price)||0,takeProfit:((v=e==null?void 0:e.sellLimit)==null?void 0:v.takeProfit)||0}),u=De(()=>s.value.length===0?0:s.value.reduce((I,E)=>I+(E.highPoint-E.lowPoint),0)/s.value.length),c=De(()=>u.value*.1),d=()=>{l.value.price=l.value.stopLoss-l.value.cost,p()},p=()=>{l.value.takeProfit=l.value.price-l.value.cost},y=(_,I)=>{s.value[_]&&(s.value[_].date=I)},A=(_,I,E)=>{s.value[_]&&(s.value[_].highPoint=I,s.value[_].lowPoint=E)},O=_=>{Object.assign(l.value,_)},k=()=>{const _={dailyVolatilities:s.value,breakoutHigh:r.value,breakoutLow:i.value,costRange:c.value,moduleTemplate:o.value,sellLimit:l.value};try{localStorage.setItem(Jf,JSON.stringify(_))}catch(I){console.error("Failed to save data to localStorage:",I)}},R=async()=>{try{const _={dailyVolatilities:s.value,breakoutHigh:r.value,breakoutLow:i.value,costRange:c.value,moduleTemplate:o.value,sellLimit:l.value},I=Rn(dn,"users",Gl);await Gc(I,{..._,updatedAt:Ct.now()},{merge:!0})}catch(_){console.error("Failed to save data to Firebase:",_)}},F=async()=>{try{const _=Rn(dn,"users",Gl),I=await Hc(_);if(I.exists()){const E=I.data();return s.value=E.dailyVolatilities||s.value,r.value=E.breakoutHigh||0,i.value=E.breakoutLow||0,o.value=E.moduleTemplate||"",E.sellLimit&&(l.value={...l.value,...E.sellLimit}),!0}}catch(_){console.error("Failed to load data from Firebase:",_)}return!1},Q=()=>{try{const _=Rn(dn,"users",Gl);Wc(_,I=>{if(I.exists()){const E=I.data();K.value||(s.value=E.dailyVolatilities||s.value,r.value=E.breakoutHigh||0,i.value=E.breakoutLow||0,o.value=E.moduleTemplate||"",E.sellLimit&&(l.value={...l.value,...E.sellLimit}))}})}catch(_){console.error("Failed to start Firebase listener:",_)}},K=Pt(!1);return En([s,r,i,o,l],async()=>{k()},{deep:!0}),{dailyVolatilities:s,breakoutHigh:r,breakoutLow:i,moduleTemplate:o,sellLimit:l,averageVolatility:u,costRange:c,calculatePrice:d,calculateTakeProfit:p,updateDate:y,updateVolatility:A,updateSellLimit:O,saveToStorage:k,saveToFirebase:R,loadFromFirebase:F,startFirebaseListener:Q,isLocalEditing:K}}),i0={class:"card"},o0={class:"vol-item-date"},a0=["onUpdate:modelValue","onChange"],l0={class:"weekday-display"},u0={class:"vol-item"},c0=["onUpdate:modelValue","onInput"],h0={class:"vol-item"},d0=["onUpdate:modelValue","onInput"],f0={class:"data-row highlight"},p0={class:"data-item"},m0={class:"data-value highlight"},g0={class:"data-item"},_0={class:"data-value highlight"},y0={class:"data-row highlight",style:{"margin-top":"12px"}},v0={class:"form-group",style:{flex:"1"}},b0=["value"],E0={class:"data-item",style:{"margin-left":"12px"}},I0={class:"data-value highlight"},T0={class:"card"},w0={class:"grid-3"},A0={class:"form-group"},S0={class:"form-group"},R0={class:"form-group"},x0={class:"form-group",style:{"margin-top":"12px"}},P0={style:{"margin-top":"16px","padding-top":"16px","border-top":"1px solid var(--color-border)"}},C0={class:"grid-3",style:{"margin-bottom":"12px"}},V0={class:"form-group"},D0={class:"form-group"},k0={class:"data-row highlight",style:{"margin-bottom":"12px"}},N0={class:"data-item"},O0={class:"data-value highlight"},M0={class:"data-row highlight",style:{"margin-bottom":"12px"}},F0={class:"data-item"},L0={class:"data-value highlight"},B0={class:"data-item"},U0={class:"data-value highlight"},$0={style:{"margin-top":"16px","padding-top":"16px","border-top":"1px solid var(--color-border)"}},j0={class:"grid-3",style:{"margin-bottom":"12px"}},q0={class:"form-group"},z0={class:"form-group"},K0={class:"data-row highlight",style:{"margin-bottom":"12px"}},H0={class:"data-item"},G0={class:"data-value highlight"},W0={class:"data-row highlight",style:{"margin-bottom":"12px"}},Q0={class:"data-item"},X0={class:"data-value highlight"},J0={class:"data-item"},Y0={class:"data-value highlight"},Z0=ao({__name:"Volatility",setup(n){const t=B_(),e=Pt(""),s=Er({quantity:0,stopLoss:0,cost:0,price:0,takeProfit:0,costDisplay:0}),r=Er({quantity:0,stopLoss:0,cost:0,price:0,takeProfit:0}),i=()=>{const k=t.breakoutHigh+1;return Math.round((k-Math.floor(k))*100)/100>0?Math.ceil(k*10)/10:k},o=()=>{const k=t.breakoutLow-.5;return Math.round((k-Math.floor(k))*100)/100>0?Math.ceil(k*10)/10:k},l=()=>{const k=i();s.price=k-s.cost,s.takeProfit=s.price-s.cost,t.updateSellLimit({quantity:s.quantity,stopLoss:k,cost:s.cost,price:s.price,takeProfit:s.takeProfit})},u=()=>{const k=o();r.stopLoss=k,r.price=k+r.cost,r.takeProfit=r.price+r.cost},c=De(()=>t.breakoutHigh);En(c,()=>{l()});const d=De(()=>t.breakoutLow);En(d,()=>{u()}),En(()=>s.cost,()=>{l()}),En(()=>r.cost,()=>{u()});const p=()=>{t.updateSellLimit({quantity:s.quantity}),l()},y=()=>{u()},A=k=>{if(!k)return"";const F=new Date(k).getDay();return["星期日","星期一","星期二","星期三","星期四","星期五","星期六"][F]},O=()=>t.dailyVolatilities;return(k,R)=>(ot(),dt("div",null,[m("div",i0,[R[14]||(R[14]=Jv('<div class="card-title">平均波幅</div><div class="volatility-row-header"><div class="vol-header-date">日期</div><div class="vol-header-item">最高點</div><div class="vol-header-item">最低點</div></div>',2)),(ot(!0),dt(ye,null,Fs(O(),(F,Q)=>(ot(),dt("div",{key:Q,class:"volatility-row"},[m("div",o0,[_t(m("input",{"onUpdate:modelValue":K=>F.date=K,type:"date",class:"form-input date-input",onChange:K=>ae(t).updateDate(Q,F.date)},null,40,a0),[[wt,F.date]]),m("div",l0,gt(A(F.date)),1)]),m("div",u0,[_t(m("input",{"onUpdate:modelValue":K=>F.highPoint=K,type:"number",step:"0.01",class:"form-input",onInput:K=>ae(t).updateVolatility(ae(t).dailyVolatilities.indexOf(F),F.highPoint,F.lowPoint),placeholder:"0"},null,40,c0),[[wt,F.highPoint,void 0,{number:!0}]])]),m("div",h0,[_t(m("input",{"onUpdate:modelValue":K=>F.lowPoint=K,type:"number",step:"0.01",class:"form-input",onInput:K=>ae(t).updateVolatility(ae(t).dailyVolatilities.indexOf(F),F.highPoint,F.lowPoint),placeholder:"0"},null,40,d0),[[wt,F.lowPoint,void 0,{number:!0}]])])]))),128)),m("div",f0,[m("div",p0,[R[9]||(R[9]=m("span",{class:"data-label"},"五日平均波幅",-1)),m("span",m0,gt(ae(t).averageVolatility.toFixed(2)),1)]),m("div",g0,[R[10]||(R[10]=m("span",{class:"data-label"},"成本&領域範圍 (10%)",-1)),m("span",_0,gt(ae(t).costRange.toFixed(2)),1)])]),m("div",y0,[m("div",v0,[R[12]||(R[12]=m("label",{style:{display:"block","margin-bottom":"8px","font-size":"14px"}},"單日波幅",-1)),_t(m("select",{"onUpdate:modelValue":R[0]||(R[0]=F=>e.value=F),class:"form-input",style:{width:"100%"}},[R[11]||(R[11]=m("option",{value:"",disabled:""},"選擇一天的資料",-1)),(ot(!0),dt(ye,null,Fs(ae(t).dailyVolatilities,(F,Q)=>(ot(),dt("option",{key:Q,value:Q},gt(F.date)+" - 波幅: "+gt((F.highPoint-F.lowPoint).toFixed(2)),9,b0))),128))],512),[[ha,e.value]])]),m("div",E0,[R[13]||(R[13]=m("span",{class:"data-label"},"波幅值",-1)),m("span",I0,gt(e.value!==""?(ae(t).dailyVolatilities[parseInt(e.value)].highPoint-ae(t).dailyVolatilities[parseInt(e.value)].lowPoint).toFixed(2):"0.00"),1)])])]),m("div",T0,[R[33]||(R[33]=m("div",{class:"card-title"},"掛單範圍",-1)),m("div",w0,[m("div",A0,[R[15]||(R[15]=m("label",null,"突破口高點(or 美盤回調高點)",-1)),_t(m("input",{"onUpdate:modelValue":R[1]||(R[1]=F=>ae(t).breakoutHigh=F),type:"number",step:"0.01",class:"form-input",placeholder:"輸入價格"},null,512),[[wt,ae(t).breakoutHigh,void 0,{number:!0}]])]),m("div",S0,[R[16]||(R[16]=m("label",null,"突破口低點(or 美盤回調低點)",-1)),_t(m("input",{"onUpdate:modelValue":R[2]||(R[2]=F=>ae(t).breakoutLow=F),type:"number",step:"0.01",class:"form-input",placeholder:"輸入價格"},null,512),[[wt,ae(t).breakoutLow,void 0,{number:!0}]])]),m("div",R0,[R[17]||(R[17]=m("label",null,"成本&領域範圍",-1)),_t(m("input",{"onUpdate:modelValue":R[3]||(R[3]=F=>s.costDisplay=F),type:"number",step:"0.01",class:"form-input",placeholder:"自動計算或手動輸入"},null,512),[[wt,s.costDisplay,void 0,{number:!0}]])])]),m("div",x0,[R[18]||(R[18]=m("label",null,"套用模組",-1)),_t(m("input",{"onUpdate:modelValue":R[4]||(R[4]=F=>ae(t).moduleTemplate=F),type:"text",class:"form-input",placeholder:"輸入模組名稱"},null,512),[[wt,ae(t).moduleTemplate]])]),m("div",P0,[R[24]||(R[24]=m("div",{class:"data-label",style:{"margin-bottom":"12px","text-transform":"uppercase","letter-spacing":"1px"}}," Sell Limit 配置 ",-1)),m("div",C0,[m("div",V0,[R[19]||(R[19]=m("label",null,"手數",-1)),_t(m("input",{"onUpdate:modelValue":R[5]||(R[5]=F=>s.quantity=F),type:"number",step:"0.01",class:"form-input",placeholder:"0.01",onInput:p},null,544),[[wt,s.quantity,void 0,{number:!0}]])]),m("div",D0,[R[20]||(R[20]=m("label",null,"成本 (USD)",-1)),_t(m("input",{"onUpdate:modelValue":R[6]||(R[6]=F=>s.cost=F),type:"number",step:"0.01",class:"form-input",placeholder:"例如 5",onInput:l},null,544),[[wt,s.cost,void 0,{number:!0}]])])]),m("div",k0,[m("div",N0,[R[21]||(R[21]=m("span",{class:"data-label"},"止損",-1)),m("span",O0,gt(i().toFixed(2)),1)])]),m("div",M0,[m("div",F0,[R[22]||(R[22]=m("span",{class:"data-label"},"價格",-1)),m("span",L0,gt(s.price.toFixed(2)),1)]),m("div",B0,[R[23]||(R[23]=m("span",{class:"data-label"},"止盈",-1)),m("span",U0,gt(s.takeProfit.toFixed(2)),1)])]),R[25]||(R[25]=m("div",{style:{"font-size":"12px",color:"var(--color-text-tertiary)",padding:"8px","background-color":"rgba(212, 175, 55, 0.05)","border-radius":"6px"}},[m("strong",null,"計算說明："),m("br"),Ps(" • 價格 = 止損 - 成本"),m("br"),Ps(" • 止盈 = 價格 - 成本 ")],-1))]),m("div",$0,[R[31]||(R[31]=m("div",{class:"data-label",style:{"margin-bottom":"12px","text-transform":"uppercase","letter-spacing":"1px"}}," Buy Limit 配置 ",-1)),m("div",j0,[m("div",q0,[R[26]||(R[26]=m("label",null,"手數",-1)),_t(m("input",{"onUpdate:modelValue":R[7]||(R[7]=F=>r.quantity=F),type:"number",step:"0.01",class:"form-input",placeholder:"0.01",onInput:y},null,544),[[wt,r.quantity,void 0,{number:!0}]])]),m("div",z0,[R[27]||(R[27]=m("label",null,"成本 (USD)",-1)),_t(m("input",{"onUpdate:modelValue":R[8]||(R[8]=F=>r.cost=F),type:"number",step:"0.01",class:"form-input",placeholder:"例如 5",onInput:u},null,544),[[wt,r.cost,void 0,{number:!0}]])])]),m("div",K0,[m("div",H0,[R[28]||(R[28]=m("span",{class:"data-label"},"止損",-1)),m("span",G0,gt(o().toFixed(2)),1)])]),m("div",W0,[m("div",Q0,[R[29]||(R[29]=m("span",{class:"data-label"},"價格",-1)),m("span",X0,gt(r.price.toFixed(2)),1)]),m("div",J0,[R[30]||(R[30]=m("span",{class:"data-label"},"止盈",-1)),m("span",Y0,gt(r.takeProfit.toFixed(2)),1)])]),R[32]||(R[32]=m("div",{style:{"font-size":"12px",color:"var(--color-text-tertiary)",padding:"8px","background-color":"rgba(212, 175, 55, 0.05)","border-radius":"6px"}},[m("strong",null,"計算說明："),m("br"),Ps(" • 價格 = 止損 + 成本"),m("br"),Ps(" • 止盈 = 價格 + 成本 ")],-1))])])]))}}),tA={class:"card"},eA={class:"card-header"},nA={class:"button-group"},sA={width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",style:{color:"#0f1419"}},rA={viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",style:{display:"inline-block"}},iA={key:0,style:{"text-align":"center",padding:"32px",color:"var(--color-text-secondary)"}},oA={key:1,class:"strategy-buttons"},aA=["onClick"],lA=["checked","onChange"],uA={style:{"font-size":"12px"}},cA={key:2,style:{display:"flex",gap:"8px","margin-bottom":"16px"}},hA={key:3,class:"strategy-details"},dA={class:"data-row",style:{"margin-bottom":"8px"}},fA={class:"data-item"},pA={class:"data-value"},mA={class:"data-row",style:{"margin-bottom":"8px"}},gA={class:"data-item"},_A={class:"data-value"},yA={class:"data-item"},vA={class:"data-value"},bA={class:"data-row",style:{"margin-bottom":"8px"}},EA={class:"data-item"},IA={class:"data-value"},TA={class:"data-item"},wA={class:"data-value"},AA={class:"data-row",style:{"margin-bottom":"8px"}},SA={class:"data-item"},RA={class:"data-value"},xA={class:"data-row"},PA={class:"data-item",style:{"flex-direction":"column","align-items":"flex-start"}},CA={class:"data-value",style:{"white-space":"pre-wrap","margin-top":"8px"}},VA={class:"modal-body"},DA={class:"form-group",style:{"margin-bottom":"12px"}},kA={style:{"font-size":"12px",color:"var(--color-text-secondary)","margin-top":"4px"}},NA={class:"grid-2",style:{"margin-bottom":"12px"}},OA={class:"form-group"},MA={class:"form-group"},FA={class:"grid-2",style:{"margin-bottom":"12px"}},LA={class:"form-group"},BA={style:{display:"flex","justify-content":"space-between","align-items":"center","margin-bottom":"8px"}},UA={class:"radio-group-inline"},$A={class:"radio-label"},jA={class:"radio-label"},qA={class:"form-group"},zA={class:"form-group",style:{"margin-bottom":"12px"}},KA={class:"modal-body"},HA={class:"form-group",style:{"margin-bottom":"12px"}},GA={style:{"font-size":"12px",color:"var(--color-text-secondary)","margin-top":"4px"}},WA={class:"grid-2",style:{"margin-bottom":"12px"}},QA={class:"form-group"},XA={class:"form-group"},JA={class:"grid-2",style:{"margin-bottom":"12px"}},YA={class:"form-group"},ZA={style:{display:"flex","justify-content":"space-between","align-items":"center","margin-bottom":"8px"}},tS={class:"radio-group-inline"},eS={class:"radio-label"},nS={class:"radio-label"},sS={class:"form-group"},rS={class:"form-group",style:{"margin-bottom":"12px"}},Uo="xauusd_strategies",Wl="strategies",iS=ao({__name:"Plan",setup(n){const t=Pt(b()),e=Pt(null),s=Pt(!1),r=Pt(!1),i=Pt(!1),o=Pt([]),l=Pt(!1),u=Pt([]),c=Pt({date:new Date().toISOString().split("T")[0],breakoutHigh:0,breakoutLow:0,usRetrace:"高",points:0,module:"",description:""}),d=Pt({date:"",breakoutHigh:0,breakoutLow:0,usRetrace:"高",points:0,module:"",description:""});Yu(async()=>{await E()?(console.log("✓ Strategies loaded from Firebase on mount"),x()):console.log("⚠ No Firebase strategies found, using localStorage")});function p(W){const D=new Date(W+"T00:00:00");return["日","一","二","三","四","五","六"][D.getDay()]}function y(){c.value={date:new Date().toISOString().split("T")[0],breakoutHigh:0,breakoutLow:0,usRetrace:"高",points:0,module:"",description:""},s.value=!0}function A(){s.value=!1}function O(){const W=[];if(c.value.date||W.push("❌ 請選擇日期"),c.value.breakoutHigh!==0&&c.value.breakoutLow!==0&&c.value.breakoutHigh<=c.value.breakoutLow&&W.push("❌ 突破口高點必須大於突破口低點！"),c.value.points!==0&&c.value.breakoutHigh!==0&&c.value.breakoutLow!==0&&(c.value.usRetrace==="高"?(c.value.points>=c.value.breakoutHigh||c.value.points<=c.value.breakoutLow)&&W.push(`❌ 美盤回調點（${c.value.points}）必須在突破口低點（${c.value.breakoutLow}）和高點（${c.value.breakoutHigh}）之間！`):c.value.usRetrace==="低"&&(c.value.points>=c.value.breakoutHigh||c.value.points<=c.value.breakoutLow)&&W.push(`❌ 美盤回調點（${c.value.points}）必須在突破口低點（${c.value.breakoutLow}）和高點（${c.value.breakoutHigh}）之間！`)),W.length>0){alert(W.join(`
`));return}const D={...c.value,createdAt:new Date().toISOString()};t.value.push(D),_(),A(),e.value=t.value.length-1}function k(){i.value=!i.value,o.value=[]}function R(){i.value=!1,o.value=[]}function F(W){o.value.includes(W)?o.value=o.value.filter(D=>D!==W):o.value.push(W)}function Q(){o.value.length!==0&&confirm(`確定要刪除選中的 ${o.value.length} 個策略嗎？`)&&(o.value.sort((D,L)=>L-D).forEach(D=>{t.value.splice(D,1)}),_(),i.value=!1,o.value=[],e.value=null)}function K(){l.value=!l.value,u.value=[]}function X(W){u.value.includes(W)?u.value=u.value.filter(D=>D!==W):u.value.push(W)}function st(){l.value=!1,u.value=[]}function ut(W){i.value?F(W):l.value||(e.value=W)}function w(){if(u.value.length===0)return;const W=u.value.map(Nt=>t.value[Nt]),D=v(W),L=new Blob([D],{type:"text/html;charset=utf-8"}),V=document.createElement("a"),Y=URL.createObjectURL(L);V.setAttribute("href",Y),V.setAttribute("download",`XAUUSD_策略_${new Date().toISOString().split("T")[0]}.html`),V.style.visibility="hidden",document.body.appendChild(V),V.click(),document.body.removeChild(V),l.value=!1,u.value=[]}function v(W){const D=`
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
  `;let L="";return W.forEach(V=>{L+=`
      <div class="strategy-card">
        <div class="strategy-header">
          <div>
            <div class="strategy-date">${V.date}</div>
            <div class="strategy-weekday">星期${p(V.date)}</div>
          </div>
        </div>
        
        <div class="strategy-content">
          <div class="strategy-field">
            <span class="strategy-label">突破口高點</span>
            <span class="strategy-value">${V.breakoutHigh.toFixed(2)}</span>
          </div>
          <div class="strategy-field">
            <span class="strategy-label">突破口低點</span>
            <span class="strategy-value">${V.breakoutLow.toFixed(2)}</span>
          </div>
          <div class="strategy-field">
            <span class="strategy-label">美盤回調點</span>
            <span class="strategy-value">${V.points.toFixed(2)}</span>
          </div>
          <div class="strategy-field">
            <span class="strategy-label">美盤回調</span>
            <span class="strategy-value">${V.usRetrace}</span>
          </div>
          <div class="strategy-field">
            <span class="strategy-label">模組</span>
            <span class="strategy-value">${V.module||"—"}</span>
          </div>
          <div class="strategy-field"></div>
          
          <div class="strategy-description">
            <div class="strategy-description-label">策略說明</div>
            <div class="strategy-description-text">${V.description||"無"}</div>
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
      <style>${D}</style>
    </head>
    <body>
      <div class="container">
        <h1>🏆 XAUUSD 黃金策略分析</h1>
        ${L}
        <div class="export-date">生成時間：${new Date().toLocaleString("zh-TW")}</div>
      </div>
    </body>
    </html>
  `}function _(){localStorage.setItem(Uo,JSON.stringify(t.value)),I()}async function I(){try{const W=Rn(dn,"users",Wl);await Gc(W,{data:t.value,updatedAt:Ct.now()},{merge:!0}),console.log("✓ Strategies saved to Firebase")}catch(W){console.error("Failed to save strategies to Firebase:",W)}}async function E(){try{const W=Rn(dn,"users",Wl),D=await Hc(W);if(D.exists()&&D.data().data){const L=D.data().data;return t.value=L,localStorage.setItem(Uo,JSON.stringify(L)),console.log("✓ Strategies loaded from Firebase"),!0}}catch(W){console.error("Failed to load strategies from Firebase:",W)}return!1}function x(){try{const W=Rn(dn,"users",Wl);Wc(W,D=>{if(D.exists()&&D.data().data){const L=D.data().data;!s.value&&!r.value&&(t.value=L,localStorage.setItem(Uo,JSON.stringify(L)),console.log("✓ Strategies synced from Firebase"))}})}catch(W){console.error("Failed to start Firebase listener:",W)}}function b(){const W=localStorage.getItem(Uo);return W?JSON.parse(W):[]}function Ut(){if(e.value===null)return;const W=t.value[e.value];d.value={date:W.date,breakoutHigh:W.breakoutHigh,breakoutLow:W.breakoutLow,usRetrace:W.usRetrace,points:W.points,module:W.module,description:W.description},r.value=!0}function ee(){r.value=!1}function Ft(){if(e.value!==null){if(!d.value.date){alert("請選擇日期");return}t.value[e.value]={...d.value,createdAt:t.value[e.value].createdAt},_(),ee()}}return(W,D)=>(ot(),dt("div",null,[m("div",tA,[m("div",eA,[D[21]||(D[21]=m("div",{class:"card-title"},"黃金策略分析",-1)),m("div",nA,[i.value?xt("",!0):(ot(),dt("button",{key:0,class:"btn-floating btn-delete-floating",onClick:k,title:"刪除策略"},[(ot(),dt("svg",sA,[...D[19]||(D[19]=[m("polyline",{points:"3 6 5 6 21 6"},null,-1),m("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"},null,-1),m("line",{x1:"10",y1:"11",x2:"10",y2:"17"},null,-1),m("line",{x1:"14",y1:"11",x2:"14",y2:"17"},null,-1)])]))])),i.value&&o.value.length>0?(ot(),dt("button",{key:1,class:"btn-floating btn-confirm-delete",onClick:Q,title:"確認刪除"}," ✓ ")):xt("",!0),i.value?(ot(),dt("button",{key:2,class:"btn-floating btn-cancel-delete",onClick:R,title:"取消刪除"}," ✕ ")):xt("",!0),e.value!==null&&!i.value?(ot(),dt("button",{key:3,class:"btn-floating btn-edit-floating",onClick:Ut,title:"編輯策略"}," ✎ ")):xt("",!0),i.value?xt("",!0):(ot(),dt("button",{key:4,class:"btn-floating btn-export-floating",onClick:K,title:"輸出策略"},[(ot(),dt("svg",rA,[...D[20]||(D[20]=[m("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"},null,-1),m("polyline",{points:"7 10 12 15 17 10"},null,-1),m("line",{x1:"12",y1:"15",x2:"12",y2:"3"},null,-1)])]))])),i.value?xt("",!0):(ot(),dt("button",{key:5,class:"btn-floating",onClick:y},"+"))])]),t.value.length===0?(ot(),dt("div",iA,[...D[22]||(D[22]=[m("p",{style:{"font-size":"14px"}},'還沒有策略，點擊右上角"+"新增',-1)])])):xt("",!0),t.value.length>0?(ot(),dt("div",oA,[(ot(!0),dt(ye,null,Fs(t.value,(L,V)=>(ot(),dt("button",{key:V,class:$e(["strategy-button",{active:e.value===V&&!i.value&&!l.value,"delete-selected":i.value&&o.value.includes(V),"export-selected":l.value&&u.value.includes(V)}]),onClick:Y=>ut(V)},[l.value?(ot(),dt("input",{key:0,type:"checkbox",checked:u.value.includes(V),onChange:Y=>X(V),onClick:D[0]||(D[0]=Si(()=>{},["stop"])),style:{"margin-right":"6px",width:"16px",height:"16px",cursor:"pointer"}},null,40,lA)):xt("",!0),Ps(" "+gt(L.date),1),D[23]||(D[23]=m("br",null,null,-1)),m("span",uA,gt(p(L.date)),1)],10,aA))),128))])):xt("",!0),l.value&&u.value.length>0?(ot(),dt("div",cA,[m("button",{class:"btn btn-primary",onClick:w},"確認輸出 ("+gt(u.value.length)+")",1),m("button",{class:"btn btn-secondary",onClick:st},"取消")])):xt("",!0),t.value.length>0&&e.value!==null?(ot(),dt("div",hA,[m("div",dA,[m("div",fA,[D[24]||(D[24]=m("span",{class:"data-label"},"日期",-1)),m("span",pA,gt(t.value[e.value].date)+" ("+gt(p(t.value[e.value].date))+")",1)])]),m("div",mA,[m("div",gA,[D[25]||(D[25]=m("span",{class:"data-label"},"突破口高點",-1)),m("span",_A,gt(t.value[e.value].breakoutHigh),1)]),m("div",yA,[D[26]||(D[26]=m("span",{class:"data-label"},"突破口低點",-1)),m("span",vA,gt(t.value[e.value].breakoutLow),1)])]),m("div",bA,[m("div",EA,[D[27]||(D[27]=m("span",{class:"data-label"},"美盤回調",-1)),m("span",IA,gt(t.value[e.value].usRetrace),1)]),m("div",TA,[D[28]||(D[28]=m("span",{class:"data-label"},"點",-1)),m("span",wA,gt(t.value[e.value].points),1)])]),m("div",AA,[m("div",SA,[D[29]||(D[29]=m("span",{class:"data-label"},"模組",-1)),m("span",RA,gt(t.value[e.value].module),1)])]),m("div",xA,[m("div",PA,[D[30]||(D[30]=m("span",{class:"data-label"},"策略",-1)),m("span",CA,gt(t.value[e.value].description),1)])])])):xt("",!0)]),s.value?(ot(),dt("div",{key:0,class:"modal-overlay",onClick:A},[m("div",{class:"modal",onClick:D[9]||(D[9]=Si(()=>{},["stop"]))},[m("div",{class:"modal-header"},[D[31]||(D[31]=m("h2",null,"新增策略",-1)),m("button",{class:"modal-close",onClick:A},"×")]),m("div",VA,[m("div",DA,[D[32]||(D[32]=m("label",null,"日期",-1)),_t(m("input",{"onUpdate:modelValue":D[1]||(D[1]=L=>c.value.date=L),type:"date",class:"form-input"},null,512),[[wt,c.value.date]]),m("div",kA,gt(c.value.date?`星期${p(c.value.date)}`:"請選擇日期"),1)]),m("div",NA,[m("div",OA,[D[33]||(D[33]=m("label",null,"突破口高點",-1)),_t(m("input",{"onUpdate:modelValue":D[2]||(D[2]=L=>c.value.breakoutHigh=L),type:"number",step:"0.01",class:"form-input",placeholder:"例如：2700"},null,512),[[wt,c.value.breakoutHigh,void 0,{number:!0}]])]),m("div",MA,[D[34]||(D[34]=m("label",null,"突破口低點",-1)),_t(m("input",{"onUpdate:modelValue":D[3]||(D[3]=L=>c.value.breakoutLow=L),type:"number",step:"0.01",class:"form-input",placeholder:"例如：2650"},null,512),[[wt,c.value.breakoutLow,void 0,{number:!0}]])])]),m("div",FA,[m("div",LA,[m("div",BA,[D[37]||(D[37]=m("label",null,"美盤回調點",-1)),m("div",UA,[m("label",$A,[_t(m("input",{"onUpdate:modelValue":D[4]||(D[4]=L=>c.value.usRetrace=L),type:"radio",value:"高"},null,512),[[Do,c.value.usRetrace]]),D[35]||(D[35]=m("span",null,"高",-1))]),m("label",jA,[_t(m("input",{"onUpdate:modelValue":D[5]||(D[5]=L=>c.value.usRetrace=L),type:"radio",value:"低"},null,512),[[Do,c.value.usRetrace]]),D[36]||(D[36]=m("span",null,"低",-1))])])]),_t(m("input",{"onUpdate:modelValue":D[6]||(D[6]=L=>c.value.points=L),type:"number",step:"0.01",class:"form-input",placeholder:"例如：50"},null,512),[[wt,c.value.points,void 0,{number:!0}]])]),m("div",qA,[D[38]||(D[38]=m("label",null,"模組",-1)),_t(m("input",{"onUpdate:modelValue":D[7]||(D[7]=L=>c.value.module=L),type:"text",class:"form-input",placeholder:"例如：模組A"},null,512),[[wt,c.value.module]])])]),m("div",zA,[D[39]||(D[39]=m("label",null,"策略",-1)),_t(m("textarea",{"onUpdate:modelValue":D[8]||(D[8]=L=>c.value.description=L),class:"form-input",rows:"5",placeholder:"詳細說明策略內容...",style:{resize:"vertical"}},null,512),[[wt,c.value.description]])])]),m("div",{class:"modal-footer"},[m("button",{class:"btn btn-secondary",onClick:A},"取消"),m("button",{class:"btn btn-primary",onClick:O},"新增策略")])])])):xt("",!0),r.value?(ot(),dt("div",{key:1,class:"modal-overlay",onClick:ee},[m("div",{class:"modal",onClick:D[18]||(D[18]=Si(()=>{},["stop"]))},[m("div",{class:"modal-header"},[D[40]||(D[40]=m("h2",null,"編輯策略",-1)),m("button",{class:"modal-close",onClick:ee},"×")]),m("div",KA,[m("div",HA,[D[41]||(D[41]=m("label",null,"日期",-1)),_t(m("input",{"onUpdate:modelValue":D[10]||(D[10]=L=>d.value.date=L),type:"date",class:"form-input"},null,512),[[wt,d.value.date]]),m("div",GA,gt(d.value.date?`星期${p(d.value.date)}`:"請選擇日期"),1)]),m("div",WA,[m("div",QA,[D[42]||(D[42]=m("label",null,"突破口高點",-1)),_t(m("input",{"onUpdate:modelValue":D[11]||(D[11]=L=>d.value.breakoutHigh=L),type:"number",step:"0.01",class:"form-input",placeholder:"例如：2700"},null,512),[[wt,d.value.breakoutHigh,void 0,{number:!0}]])]),m("div",XA,[D[43]||(D[43]=m("label",null,"突破口低點",-1)),_t(m("input",{"onUpdate:modelValue":D[12]||(D[12]=L=>d.value.breakoutLow=L),type:"number",step:"0.01",class:"form-input",placeholder:"例如：2650"},null,512),[[wt,d.value.breakoutLow,void 0,{number:!0}]])])]),m("div",JA,[m("div",YA,[m("div",ZA,[D[46]||(D[46]=m("label",null,"美盤回調點",-1)),m("div",tS,[m("label",eS,[_t(m("input",{"onUpdate:modelValue":D[13]||(D[13]=L=>d.value.usRetrace=L),type:"radio",value:"高"},null,512),[[Do,d.value.usRetrace]]),D[44]||(D[44]=m("span",null,"高",-1))]),m("label",nS,[_t(m("input",{"onUpdate:modelValue":D[14]||(D[14]=L=>d.value.usRetrace=L),type:"radio",value:"低"},null,512),[[Do,d.value.usRetrace]]),D[45]||(D[45]=m("span",null,"低",-1))])])]),_t(m("input",{"onUpdate:modelValue":D[15]||(D[15]=L=>d.value.points=L),type:"number",step:"0.01",class:"form-input",placeholder:"例如：50"},null,512),[[wt,d.value.points,void 0,{number:!0}]])]),m("div",sS,[D[47]||(D[47]=m("label",null,"模組",-1)),_t(m("input",{"onUpdate:modelValue":D[16]||(D[16]=L=>d.value.module=L),type:"text",class:"form-input",placeholder:"例如：模組A"},null,512),[[wt,d.value.module]])])]),m("div",rS,[D[48]||(D[48]=m("label",null,"策略",-1)),_t(m("textarea",{"onUpdate:modelValue":D[17]||(D[17]=L=>d.value.description=L),class:"form-input",rows:"5",placeholder:"詳細說明策略內容...",style:{resize:"vertical"}},null,512),[[wt,d.value.description]])])]),m("div",{class:"modal-footer"},[m("button",{class:"btn btn-secondary",onClick:ee},"取消"),m("button",{class:"btn btn-primary",onClick:Ft},"保存修改")])])])):xt("",!0)]))}}),Qc=(n,t)=>{const e=n.__vccOpts||n;for(const[s,r]of t)e[s]=r;return e},oS=Qc(iS,[["__scopeId","data-v-20034499"]]),aS={class:"card"},lS={key:0,style:{"text-align":"center",padding:"32px",color:"var(--color-text-secondary)"}},uS={style:{display:"flex","justify-content":"space-between","align-items":"start"}},cS={style:{flex:"1"}},hS={class:"data-label"},dS={style:{"font-size":"14px","margin-top":"6px",color:"var(--color-text-primary)"}},fS=["onClick"],pS={style:{"margin-top":"8px"}},mS={class:"card"},gS={class:"form-group",style:{"margin-bottom":"12px"}},_S={class:"form-group",style:{"margin-bottom":"12px"}},yS=ao({__name:"Rules",setup(n){const t=Pt(o()),e=Pt({content:"",priority:"高"});function s(){if(!e.value.content){alert("請填寫守則內容");return}const l={content:e.value.content,priority:e.value.priority,createdAt:new Date().toISOString()};t.value.push(l),i(),e.value={content:"",priority:"高"}}function r(l){t.value.splice(l,1),i()}function i(){localStorage.setItem("xauusd_rules",JSON.stringify(t.value))}function o(){const l=localStorage.getItem("xauusd_rules");return l?JSON.parse(l):[]}return(l,u)=>(ot(),dt("div",null,[m("div",aS,[u[4]||(u[4]=m("div",{class:"card-title"},"交易守則",-1)),t.value.length===0?(ot(),dt("div",lS,[...u[2]||(u[2]=[m("p",{style:{"font-size":"14px"}},"還沒有守則，點擊下方按鈕新增",-1)])])):xt("",!0),(ot(!0),dt(ye,null,Fs(t.value,(c,d)=>(ot(),dt("div",{key:d,class:"data-row",style:{"flex-direction":"column"}},[m("div",uS,[m("div",cS,[m("span",hS,"規則 #"+gt(d+1),1),m("p",dS,gt(c.content),1)]),m("button",{class:"btn btn-danger",onClick:p=>r(d),style:{"margin-left":"12px"}},"刪除",8,fS)]),m("div",pS,[u[3]||(u[3]=m("span",{class:"data-label"},"優先級",-1)),m("span",{class:$e(["data-value",c.priority==="高"?"negative":c.priority==="中"?"highlight":"positive"])},gt(c.priority),3)])]))),128))]),m("div",mS,[u[8]||(u[8]=m("div",{class:"card-title"},"新增守則",-1)),m("div",gS,[u[5]||(u[5]=m("label",null,"守則內容",-1)),_t(m("textarea",{"onUpdate:modelValue":u[0]||(u[0]=c=>e.value.content=c),class:"form-input",rows:"3",placeholder:"例如：不能超過資本金的2%風險，必須等待確認信號...",style:{resize:"vertical"}},null,512),[[wt,e.value.content]])]),m("div",_S,[u[7]||(u[7]=m("label",null,"優先級",-1)),_t(m("select",{"onUpdate:modelValue":u[1]||(u[1]=c=>e.value.priority=c),class:"form-select"},[...u[6]||(u[6]=[m("option",{value:"高"},"高 (必須遵守)",-1),m("option",{value:"中"},"中 (重要)",-1),m("option",{value:"低"},"低 (參考)",-1)])],512),[[ha,e.value.priority]])]),m("button",{class:"btn btn-primary",onClick:s},"新增守則")])]))}}),vS=Qc(yS,[["__scopeId","data-v-62aaea1e"]]),bS={class:"card"},ES={class:"card-header"},IS={class:"button-group"},TS={width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",style:{color:"#0f1419"}},wS={viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",style:{display:"inline-block"}},AS={key:0,style:{"text-align":"center",padding:"32px",color:"var(--color-text-secondary)"}},SS={key:1,class:"record-buttons"},RS=["onClick"],xS={style:{"font-size":"11px"}},PS={key:2,class:"record-details"},CS={class:"data-row",style:{"margin-bottom":"8px"}},VS={class:"data-item"},DS={class:"data-value"},kS={class:"data-row",style:{"margin-bottom":"8px"}},NS={class:"data-item"},OS={class:"data-item"},MS={class:"data-value highlight"},FS={class:"data-row",style:{"margin-bottom":"8px"}},LS={class:"data-item"},BS={class:"data-value"},US={class:"data-item"},$S={key:0,class:"data-row"},jS={class:"data-item",style:{"flex-direction":"column","align-items":"flex-start"}},qS={class:"data-value",style:{"white-space":"pre-wrap","margin-top":"8px"}},zS={class:"modal-body"},KS={class:"grid-2",style:{"margin-bottom":"12px"}},HS={class:"form-group"},GS={class:"form-group"},WS={class:"grid-2",style:{"margin-bottom":"12px"}},QS={class:"form-group"},XS={class:"form-group"},JS={class:"form-group",style:{"margin-bottom":"12px"}},YS={class:"form-group",style:{"margin-bottom":"12px"}},ZS={class:"modal-body"},tR={class:"grid-2",style:{"margin-bottom":"12px"}},eR={class:"form-group"},nR={class:"form-group"},sR={class:"grid-2",style:{"margin-bottom":"12px"}},rR={class:"form-group"},iR={class:"form-group"},oR={class:"form-group",style:{"margin-bottom":"12px"}},aR={class:"form-group",style:{"margin-bottom":"12px"}},lR={key:2,class:"card"},uR={class:"month-buttons",style:{"margin-bottom":"16px"}},cR=["onClick"],hR={key:0,style:{display:"flex",gap:"8px","margin-bottom":"16px","align-items":"center"}},dR={style:{color:"var(--color-text-secondary)","font-size":"14px"}},fR={class:"grid-3"},pR={class:"data-row"},mR={class:"data-item"},gR={class:"data-value highlight"},_R={class:"data-row"},yR={class:"data-item"},vR={class:"data-row"},bR={class:"data-item"},ER={class:"data-value highlight"},$o="xauusd_records",Ql="records",IR=ao({__name:"Records",setup(n){const t=Pt(D()),e=Pt(null),s=Pt(null),r=Pt(!1),i=Pt(!1),o=Pt(!1),l=Pt(!1),u=Pt([]),c=Pt({timestamp:new Date().toISOString().slice(0,16),type:"空單 Sell Limit",price:0,quantity:0,profitLoss:0,notes:""}),d=Pt({timestamp:"",type:"",price:0,quantity:0,profitLoss:0,notes:""});Yu(async()=>{await Ft()?(console.log("✓ Records loaded from Firebase on mount"),W()):console.log("⚠ No Firebase records found, using localStorage")}),De(()=>t.value.reduce((L,V)=>L+parseFloat(V.profitLoss),0)),De(()=>t.value.length===0?0:t.value.filter(V=>parseFloat(V.profitLoss)>0).length/t.value.length*100),De(()=>{if(t.value.length===0)return"";const L=new Set;return t.value.forEach(V=>{const Y=new Date(V.timestamp),Nt=Y.getFullYear(),Be=Y.getMonth()+1;L.add(`${Nt}年${Be}月`)}),Array.from(L).reverse().join(", ")});const p=De(()=>{const L=new Set;return t.value.forEach(V=>{const Y=new Date(V.timestamp),Nt=Y.getFullYear(),Be=Y.getMonth()+1;L.add(`${Nt}年${Be}月`)}),Array.from(L).reverse()}),y=De(()=>s.value?t.value.filter(L=>{const V=new Date(L.timestamp),Y=V.getFullYear(),Nt=V.getMonth()+1;return`${Y}年${Nt}月`===s.value}):t.value),A=De(()=>y.value.reduce((L,V)=>L+parseFloat(V.profitLoss),0)),O=De(()=>y.value.length===0?0:y.value.filter(V=>parseFloat(V.profitLoss)>0).length/y.value.length*100);function k(){c.value={timestamp:new Date().toISOString().slice(0,16),type:"空單 Sell Limit",price:0,quantity:0,profitLoss:0,notes:""},r.value=!0}function R(){r.value=!1}function F(){if(!c.value.price||!c.value.quantity){alert("請填寫價格和手數");return}const L={timestamp:c.value.timestamp,type:c.value.type,price:c.value.price,quantity:c.value.quantity,profitLoss:c.value.profitLoss.toString(),notes:c.value.notes};t.value.push(L),Ut(),R(),e.value=t.value.length-1}function Q(){o.value=!o.value,u.value=[]}function K(){o.value=!1,u.value=[]}function X(L){u.value.includes(L)?u.value=u.value.filter(V=>V!==L):u.value.push(L)}function st(){u.value.length!==0&&confirm(`確定要刪除選中的 ${u.value.length} 筆紀錄嗎？`)&&(u.value.sort((V,Y)=>Y-V).forEach(V=>{t.value.splice(V,1)}),Ut(),o.value=!1,u.value=[],e.value=null)}function ut(){if(e.value===null)return;const L=t.value[e.value];d.value={timestamp:L.timestamp,type:L.type,price:L.price,quantity:L.quantity,profitLoss:parseFloat(L.profitLoss),notes:L.notes},i.value=!0}function w(){i.value=!1}function v(){if(e.value!==null){if(!d.value.price||!d.value.quantity){alert("請填寫價格和手數");return}t.value[e.value]={timestamp:d.value.timestamp,type:d.value.type,price:d.value.price,quantity:d.value.quantity,profitLoss:d.value.profitLoss.toString(),notes:d.value.notes},Ut(),w()}}function _(L){try{return new Date(L).toLocaleString("zh-TW",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})}catch{return L}}function I(){l.value=!l.value}function E(){l.value=!1}function x(){if(y.value.length===0)return;const L=b(y.value),V=new Blob([L],{type:"text/html;charset=utf-8"}),Y=document.createElement("a"),Nt=URL.createObjectURL(V);Y.setAttribute("href",Nt),Y.setAttribute("download",`XAUUSD_交易紀錄_${new Date().toISOString().split("T")[0]}.html`),Y.style.visibility="hidden",document.body.appendChild(Y),Y.click(),document.body.removeChild(Y),l.value=!1}function b(L){const V=`
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
  `,Y=L.reduce((Xt,Ue)=>Xt+parseFloat(Ue.profitLoss),0),Nt=L.filter(Xt=>parseFloat(Xt.profitLoss)>0).length,Be=L.length>0?Nt/L.length*100:0;let Je='<table class="record-table"><thead><tr><th>日期時間</th><th>交易類型</th><th>價格</th><th>手數</th><th>損益 (USD)</th><th>備註</th></tr></thead><tbody>';L.forEach(Xt=>{const Ue=parseFloat(Xt.profitLoss),ds=Ue>=0?"profit-positive":"profit-negative",gn=Xt.type.includes("Buy")?"type-buy":"type-sell";Je+=`<tr>
      <td>${_(Xt.timestamp)}</td>
      <td><span class="type-cell ${gn}">${Xt.type}</span></td>
      <td>${Xt.price.toFixed(2)}</td>
      <td>${Xt.quantity}</td>
      <td><span class="${ds}">${Ue.toFixed(2)}</span></td>
      <td>${Xt.notes||"-"}</td>
    </tr>`}),Je+="</tbody></table>";const hs=Y>=0?"positive":"negative";return`<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>XAUUSD 交易紀錄</title>
  <style>
    ${V}
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
        <div class="summary-value ${hs}">${Y.toFixed(2)} USD</div>
      </div>
      <div class="summary-item">
        <div class="summary-label">勝率</div>
        <div class="summary-value">${Be.toFixed(1)}%</div>
      </div>
    </div>
    
    ${Je}
    
    <div class="export-date">
      導出於 ${new Date().toLocaleString("zh-TW")}
    </div>
  </div>
</body>
</html>`}function Ut(){localStorage.setItem($o,JSON.stringify(t.value)),ee()}async function ee(){try{const L=Rn(dn,"users",Ql);await Gc(L,{data:t.value,updatedAt:Ct.now()},{merge:!0}),console.log("✓ Records saved to Firebase")}catch(L){console.error("Failed to save records to Firebase:",L)}}async function Ft(){try{const L=Rn(dn,"users",Ql),V=await Hc(L);if(V.exists()&&V.data().data){const Y=V.data().data;return t.value=Y,localStorage.setItem($o,JSON.stringify(Y)),console.log("✓ Records loaded from Firebase"),!0}}catch(L){console.error("Failed to load records from Firebase:",L)}return!1}function W(){try{const L=Rn(dn,"users",Ql);Wc(L,V=>{if(V.exists()&&V.data().data){const Y=V.data().data;!r.value&&!i.value&&(t.value=Y,localStorage.setItem($o,JSON.stringify(Y)),console.log("✓ Records synced from Firebase"))}})}catch(L){console.error("Failed to start Firebase listener:",L)}}function D(){const L=localStorage.getItem($o);return L?JSON.parse(L):[]}return(L,V)=>(ot(),dt("div",null,[m("div",bS,[m("div",ES,[V[17]||(V[17]=m("div",{class:"card-title"},"交易紀錄",-1)),m("div",IS,[o.value?xt("",!0):(ot(),dt("button",{key:0,class:"btn-floating btn-delete-floating",onClick:Q,title:"刪除紀錄"},[(ot(),dt("svg",TS,[...V[15]||(V[15]=[m("polyline",{points:"3 6 5 6 21 6"},null,-1),m("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"},null,-1),m("line",{x1:"10",y1:"11",x2:"10",y2:"17"},null,-1),m("line",{x1:"14",y1:"11",x2:"14",y2:"17"},null,-1)])]))])),o.value&&u.value.length>0?(ot(),dt("button",{key:1,class:"btn-floating btn-confirm-delete",onClick:st,title:"確認刪除"}," ✓ ")):xt("",!0),o.value?(ot(),dt("button",{key:2,class:"btn-floating btn-cancel-delete",onClick:K,title:"取消刪除"}," ✕ ")):xt("",!0),e.value!==null&&!o.value&&!l.value?(ot(),dt("button",{key:3,class:"btn-floating btn-edit-floating",onClick:ut,title:"編輯紀錄"}," ✎ ")):xt("",!0),o.value?xt("",!0):(ot(),dt("button",{key:4,class:"btn-floating btn-export-floating",onClick:I,title:"下載紀錄"},[(ot(),dt("svg",wS,[...V[16]||(V[16]=[m("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"},null,-1),m("polyline",{points:"7 10 12 15 17 10"},null,-1),m("line",{x1:"12",y1:"15",x2:"12",y2:"3"},null,-1)])]))])),!o.value&&!l.value?(ot(),dt("button",{key:5,class:"btn-floating",onClick:k},"+")):xt("",!0)])]),t.value.length===0?(ot(),dt("div",AS,[...V[18]||(V[18]=[m("p",{style:{"font-size":"14px"}},'還沒有交易紀錄，點擊右上角"+"新增',-1)])])):xt("",!0),t.value.length>0?(ot(),dt("div",SS,[(ot(!0),dt(ye,null,Fs(y.value,(Y,Nt)=>(ot(),dt("button",{key:Nt,class:$e(["record-button",{active:e.value===t.value.indexOf(Y)&&!o.value,"delete-selected":o.value&&u.value.includes(t.value.indexOf(Y))}]),onClick:Be=>o.value?X(t.value.indexOf(Y)):e.value=t.value.indexOf(Y)},[Ps(gt(_(Y.timestamp)),1),V[19]||(V[19]=m("br",null,null,-1)),m("span",xS,gt(Y.type),1)],10,RS))),128))])):xt("",!0),t.value.length>0&&e.value!==null?(ot(),dt("div",PS,[m("div",CS,[m("div",VS,[V[20]||(V[20]=m("span",{class:"data-label"},"日期時間",-1)),m("span",DS,gt(_(t.value[e.value].timestamp)),1)])]),m("div",kS,[m("div",NS,[V[21]||(V[21]=m("span",{class:"data-label"},"交易類型",-1)),m("span",{class:$e(["data-value",t.value[e.value].type.includes("Buy")?"positive":"negative"])},gt(t.value[e.value].type),3)]),m("div",OS,[V[22]||(V[22]=m("span",{class:"data-label"},"價格",-1)),m("span",MS,gt(t.value[e.value].price.toFixed(2)),1)])]),m("div",FS,[m("div",LS,[V[23]||(V[23]=m("span",{class:"data-label"},"手數",-1)),m("span",BS,gt(t.value[e.value].quantity),1)]),m("div",US,[V[24]||(V[24]=m("span",{class:"data-label"},"損益",-1)),m("span",{class:$e(["data-value",parseFloat(t.value[e.value].profitLoss)>=0?"positive":"negative"])},gt(parseFloat(t.value[e.value].profitLoss).toFixed(2))+" USD ",3)])]),t.value[e.value].notes?(ot(),dt("div",$S,[m("div",jS,[V[25]||(V[25]=m("span",{class:"data-label"},"備註",-1)),m("span",qS,gt(t.value[e.value].notes),1)])])):xt("",!0)])):xt("",!0)]),r.value?(ot(),dt("div",{key:0,class:"modal-overlay",onClick:R},[m("div",{class:"modal",onClick:V[6]||(V[6]=Si(()=>{},["stop"]))},[m("div",{class:"modal-header"},[V[26]||(V[26]=m("h2",null,"新增交易紀錄",-1)),m("button",{class:"modal-close",onClick:R},"×")]),m("div",zS,[m("div",KS,[m("div",HS,[V[27]||(V[27]=m("label",null,"日期時間",-1)),_t(m("input",{"onUpdate:modelValue":V[0]||(V[0]=Y=>c.value.timestamp=Y),type:"datetime-local",class:"form-input"},null,512),[[wt,c.value.timestamp]])]),m("div",GS,[V[29]||(V[29]=m("label",null,"交易類型",-1)),_t(m("select",{"onUpdate:modelValue":V[1]||(V[1]=Y=>c.value.type=Y),class:"form-select"},[...V[28]||(V[28]=[m("option",{value:"空單 Sell Limit"},"空單 Sell Limit",-1),m("option",{value:"多單 Buy Limit"},"多單 Buy Limit",-1)])],512),[[ha,c.value.type]])])]),m("div",WS,[m("div",QS,[V[30]||(V[30]=m("label",null,"價格",-1)),_t(m("input",{"onUpdate:modelValue":V[2]||(V[2]=Y=>c.value.price=Y),type:"number",step:"0.01",class:"form-input",placeholder:"例如 4200.50"},null,512),[[wt,c.value.price,void 0,{number:!0}]])]),m("div",XS,[V[31]||(V[31]=m("label",null,"手數",-1)),_t(m("input",{"onUpdate:modelValue":V[3]||(V[3]=Y=>c.value.quantity=Y),type:"number",step:"0.01",class:"form-input",placeholder:"例如 0.01"},null,512),[[wt,c.value.quantity,void 0,{number:!0}]])])]),m("div",JS,[V[32]||(V[32]=m("label",null,"損益 (USD)",-1)),_t(m("input",{"onUpdate:modelValue":V[4]||(V[4]=Y=>c.value.profitLoss=Y),type:"number",step:"0.01",class:"form-input",placeholder:"例如 50.00 或 -10.00"},null,512),[[wt,c.value.profitLoss,void 0,{number:!0}]])]),m("div",YS,[V[33]||(V[33]=m("label",null,"備註",-1)),_t(m("textarea",{"onUpdate:modelValue":V[5]||(V[5]=Y=>c.value.notes=Y),class:"form-input",rows:"3",placeholder:"記錄交易詳情、策略等...",style:{resize:"vertical"}},null,512),[[wt,c.value.notes]])])]),m("div",{class:"modal-footer"},[m("button",{class:"btn btn-secondary",onClick:R},"取消"),m("button",{class:"btn btn-primary",onClick:F},"新增紀錄")])])])):xt("",!0),i.value?(ot(),dt("div",{key:1,class:"modal-overlay",onClick:w},[m("div",{class:"modal",onClick:V[13]||(V[13]=Si(()=>{},["stop"]))},[m("div",{class:"modal-header"},[V[34]||(V[34]=m("h2",null,"編輯交易紀錄",-1)),m("button",{class:"modal-close",onClick:w},"×")]),m("div",ZS,[m("div",tR,[m("div",eR,[V[35]||(V[35]=m("label",null,"日期時間",-1)),_t(m("input",{"onUpdate:modelValue":V[7]||(V[7]=Y=>d.value.timestamp=Y),type:"datetime-local",class:"form-input"},null,512),[[wt,d.value.timestamp]])]),m("div",nR,[V[37]||(V[37]=m("label",null,"交易類型",-1)),_t(m("select",{"onUpdate:modelValue":V[8]||(V[8]=Y=>d.value.type=Y),class:"form-select"},[...V[36]||(V[36]=[m("option",{value:"空單 Sell Limit"},"空單 Sell Limit",-1),m("option",{value:"多單 Buy Limit"},"多單 Buy Limit",-1)])],512),[[ha,d.value.type]])])]),m("div",sR,[m("div",rR,[V[38]||(V[38]=m("label",null,"價格",-1)),_t(m("input",{"onUpdate:modelValue":V[9]||(V[9]=Y=>d.value.price=Y),type:"number",step:"0.01",class:"form-input",placeholder:"例如 4200.50"},null,512),[[wt,d.value.price,void 0,{number:!0}]])]),m("div",iR,[V[39]||(V[39]=m("label",null,"手數",-1)),_t(m("input",{"onUpdate:modelValue":V[10]||(V[10]=Y=>d.value.quantity=Y),type:"number",step:"0.01",class:"form-input",placeholder:"例如 0.01"},null,512),[[wt,d.value.quantity,void 0,{number:!0}]])])]),m("div",oR,[V[40]||(V[40]=m("label",null,"損益 (USD)",-1)),_t(m("input",{"onUpdate:modelValue":V[11]||(V[11]=Y=>d.value.profitLoss=Y),type:"number",step:"0.01",class:"form-input",placeholder:"例如 50.00 或 -10.00"},null,512),[[wt,d.value.profitLoss,void 0,{number:!0}]])]),m("div",aR,[V[41]||(V[41]=m("label",null,"備註",-1)),_t(m("textarea",{"onUpdate:modelValue":V[12]||(V[12]=Y=>d.value.notes=Y),class:"form-input",rows:"3",placeholder:"記錄交易詳情、策略等...",style:{resize:"vertical"}},null,512),[[wt,d.value.notes]])])]),m("div",{class:"modal-footer"},[m("button",{class:"btn btn-secondary",onClick:w},"取消"),m("button",{class:"btn btn-primary",onClick:v},"保存修改")])])])):xt("",!0),t.value.length>0?(ot(),dt("div",lR,[V[45]||(V[45]=m("div",{class:"card-title"},"交易統計",-1)),m("div",uR,[m("button",{class:$e(["month-button",{active:s.value===null}]),onClick:V[14]||(V[14]=Y=>s.value=null)}," 全部 ",2),(ot(!0),dt(ye,null,Fs(p.value,Y=>(ot(),dt("button",{key:Y,class:$e(["month-button",{active:s.value===Y}]),onClick:Nt=>s.value=Y},gt(Y),11,cR))),128))]),l.value&&y.value.length>0?(ot(),dt("div",hR,[m("span",dR,"已選擇 "+gt(y.value.length)+" 筆紀錄",1),m("button",{class:"btn btn-primary",onClick:x,style:{flex:"1"}}," 下載為 HTML "),m("button",{class:"btn btn-secondary",onClick:E}," 取消 ")])):xt("",!0),m("div",fR,[m("div",pR,[m("div",mR,[V[42]||(V[42]=m("span",{class:"data-label"},"總交易筆數",-1)),m("span",gR,gt(y.value.length),1)])]),m("div",_R,[m("div",yR,[V[43]||(V[43]=m("span",{class:"data-label"},"總損益",-1)),m("span",{class:$e(["data-value",A.value>=0?"positive":"negative"])},gt(A.value.toFixed(2))+" USD ",3)])]),m("div",vR,[m("div",bR,[V[44]||(V[44]=m("span",{class:"data-label"},"勝率",-1)),m("span",ER,gt(O.value.toFixed(1))+"%",1)])])])])):xt("",!0)]))}}),TR=Qc(IR,[["__scopeId","data-v-0f6f6c54"]]),wR={class:"app-container"},AR={class:"app-content"},SR={class:"app-footer"},RR={class:"nav-tabs"},xR=["onClick"],PR=ao({__name:"App",setup(n){const t=["計算","策略","守則","紀錄"],e=Pt("計算");return(s,r)=>(ot(),dt("div",wR,[r[0]||(r[0]=m("div",{class:"app-header"},[m("h1",null,"🏆 XAUUSD")],-1)),m("div",AR,[e.value==="計算"?(ot(),di(Z0,{key:0})):xt("",!0),e.value==="策略"?(ot(),di(oS,{key:1})):xt("",!0),e.value==="守則"?(ot(),di(vS,{key:2})):xt("",!0),e.value==="紀錄"?(ot(),di(TR,{key:3})):xt("",!0)]),m("div",SR,[m("div",RR,[(ot(),dt(ye,null,Fs(t,i=>m("button",{key:i,class:$e(["nav-tab",{active:e.value===i}]),onClick:o=>e.value=i},gt(i),11,xR)),64))])])]))}}),U_=Db(PR),CR=Ob();U_.use(CR);U_.mount("#app");const Yf=B_();Yf.loadFromFirebase().then(n=>{n?(console.log("✓ Data loaded from Firebase"),Yf.startFirebaseListener()):console.log("⚠ No Firebase data found, using localStorage")}).catch(n=>{console.error("Firebase loading failed:",n)});
