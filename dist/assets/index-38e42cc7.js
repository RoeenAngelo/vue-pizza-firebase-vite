(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Pl(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const be={},Ps=[],Pt=()=>{},Iv=()=>!1,Tv=/^on[^a-z]/,Xo=t=>Tv.test(t),Ol=t=>t.startsWith("onUpdate:"),qe=Object.assign,xl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},bv=Object.prototype.hasOwnProperty,le=(t,e)=>bv.call(t,e),K=Array.isArray,Os=t=>Zo(t)==="[object Map]",Wd=t=>Zo(t)==="[object Set]",X=t=>typeof t=="function",$e=t=>typeof t=="string",Ml=t=>typeof t=="symbol",ke=t=>t!==null&&typeof t=="object",Gd=t=>ke(t)&&X(t.then)&&X(t.catch),Qd=Object.prototype.toString,Zo=t=>Qd.call(t),Sv=t=>Zo(t).slice(8,-1),Yd=t=>Zo(t)==="[object Object]",Ll=t=>$e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,io=Pl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ea=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Cv=/-(\w)/g,Xt=ea(t=>t.replace(Cv,(e,n)=>n?n.toUpperCase():"")),Av=/\B([A-Z])/g,or=ea(t=>t.replace(Av,"-$1").toLowerCase()),ta=ea(t=>t.charAt(0).toUpperCase()+t.slice(1)),sc=ea(t=>t?`on${ta(t)}`:""),Kr=(t,e)=>!Object.is(t,e),oo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},wo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Oc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Sh;const xc=()=>Sh||(Sh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Fl(t){if(K(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=$e(s)?Dv(s):Fl(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if($e(t))return t;if(ke(t))return t}}const kv=/;(?![^(]*\))/g,Rv=/:([^]+)/,Nv=/\/\*[^]*?\*\//g;function Dv(t){const e={};return t.replace(Nv,"").split(kv).forEach(n=>{if(n){const s=n.split(Rv);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Ul(t){let e="";if($e(t))e=t;else if(K(t))for(let n=0;n<t.length;n++){const s=Ul(t[n]);s&&(e+=s+" ")}else if(ke(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Pv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ov=Pl(Pv);function Jd(t){return!!t||t===""}const me=t=>$e(t)?t:t==null?"":K(t)||ke(t)&&(t.toString===Qd||!X(t.toString))?JSON.stringify(t,Xd,2):String(t),Xd=(t,e)=>e&&e.__v_isRef?Xd(t,e.value):Os(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Wd(e)?{[`Set(${e.size})`]:[...e.values()]}:ke(e)&&!K(e)&&!Yd(e)?String(e):e;let wt;class Zd{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=wt,!e&&wt&&(this.index=(wt.scopes||(wt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=wt;try{return wt=this,e()}finally{wt=n}}}on(){wt=this}off(){wt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function ep(t){return new Zd(t)}function xv(t,e=wt){e&&e.active&&e.effects.push(t)}function tp(){return wt}function Mv(t){wt&&wt.cleanups.push(t)}const $l=t=>{const e=new Set(t);return e.w=0,e.n=0,e},np=t=>(t.w&Bn)>0,sp=t=>(t.n&Bn)>0,Lv=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Bn},Fv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];np(r)&&!sp(r)?r.delete(t):e[n++]=r,r.w&=~Bn,r.n&=~Bn}e.length=n}},Eo=new WeakMap;let Ar=0,Bn=1;const Mc=30;let Nt;const is=Symbol(""),Lc=Symbol("");class Vl{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,xv(this,s)}run(){if(!this.active)return this.fn();let e=Nt,n=Mn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Nt,Nt=this,Mn=!0,Bn=1<<++Ar,Ar<=Mc?Lv(this):Ch(this),this.fn()}finally{Ar<=Mc&&Fv(this),Bn=1<<--Ar,Nt=this.parent,Mn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Nt===this?this.deferStop=!0:this.active&&(Ch(this),this.onStop&&this.onStop(),this.active=!1)}}function Ch(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Mn=!0;const rp=[];function ar(){rp.push(Mn),Mn=!1}function cr(){const t=rp.pop();Mn=t===void 0?!0:t}function mt(t,e,n){if(Mn&&Nt){let s=Eo.get(t);s||Eo.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=$l()),ip(r)}}function ip(t,e){let n=!1;Ar<=Mc?sp(t)||(t.n|=Bn,n=!np(t)):n=!t.has(Nt),n&&(t.add(Nt),Nt.deps.push(t))}function fn(t,e,n,s,r,i){const o=Eo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&K(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":K(t)?Ll(n)&&a.push(o.get("length")):(a.push(o.get(is)),Os(t)&&a.push(o.get(Lc)));break;case"delete":K(t)||(a.push(o.get(is)),Os(t)&&a.push(o.get(Lc)));break;case"set":Os(t)&&a.push(o.get(is));break}if(a.length===1)a[0]&&Fc(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Fc($l(c))}}function Fc(t,e){const n=K(t)?t:[...t];for(const s of n)s.computed&&Ah(s);for(const s of n)s.computed||Ah(s)}function Ah(t,e){(t!==Nt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function Uv(t,e){var n;return(n=Eo.get(t))==null?void 0:n.get(e)}const $v=Pl("__proto__,__v_isRef,__isVue"),op=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ml)),Vv=Bl(),Bv=Bl(!1,!0),jv=Bl(!0),kh=zv();function zv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ce(this);for(let i=0,o=this.length;i<o;i++)mt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ce)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ar();const s=ce(this)[e].apply(this,n);return cr(),s}}),t}function qv(t){const e=ce(this);return mt(e,"has",t),e.hasOwnProperty(t)}function Bl(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?o_:hp:e?up:lp).get(s))return s;const o=K(s);if(!t){if(o&&le(kh,r))return Reflect.get(kh,r,i);if(r==="hasOwnProperty")return qv}const a=Reflect.get(s,r,i);return(Ml(r)?op.has(r):$v(r))||(t||mt(s,"get",r),e)?a:Ne(a)?o&&Ll(r)?a:a.value:ke(a)?t?fp(a):lr(a):a}}const Hv=ap(),Kv=ap(!0);function ap(t=!1){return function(n,s,r,i){let o=n[s];if(Hs(o)&&Ne(o)&&!Ne(r))return!1;if(!t&&(!Io(r)&&!Hs(r)&&(o=ce(o),r=ce(r)),!K(n)&&Ne(o)&&!Ne(r)))return o.value=r,!0;const a=K(n)&&Ll(s)?Number(s)<n.length:le(n,s),c=Reflect.set(n,s,r,i);return n===ce(i)&&(a?Kr(r,o)&&fn(n,"set",s,r):fn(n,"add",s,r)),c}}function Wv(t,e){const n=le(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&fn(t,"delete",e,void 0),s}function Gv(t,e){const n=Reflect.has(t,e);return(!Ml(e)||!op.has(e))&&mt(t,"has",e),n}function Qv(t){return mt(t,"iterate",K(t)?"length":is),Reflect.ownKeys(t)}const cp={get:Vv,set:Hv,deleteProperty:Wv,has:Gv,ownKeys:Qv},Yv={get:jv,set(t,e){return!0},deleteProperty(t,e){return!0}},Jv=qe({},cp,{get:Bv,set:Kv}),jl=t=>t,na=t=>Reflect.getPrototypeOf(t);function zi(t,e,n=!1,s=!1){t=t.__v_raw;const r=ce(t),i=ce(e);n||(e!==i&&mt(r,"get",e),mt(r,"get",i));const{has:o}=na(r),a=s?jl:n?Hl:Wr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function qi(t,e=!1){const n=this.__v_raw,s=ce(n),r=ce(t);return e||(t!==r&&mt(s,"has",t),mt(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Hi(t,e=!1){return t=t.__v_raw,!e&&mt(ce(t),"iterate",is),Reflect.get(t,"size",t)}function Rh(t){t=ce(t);const e=ce(this);return na(e).has.call(e,t)||(e.add(t),fn(e,"add",t,t)),this}function Nh(t,e){e=ce(e);const n=ce(this),{has:s,get:r}=na(n);let i=s.call(n,t);i||(t=ce(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Kr(e,o)&&fn(n,"set",t,e):fn(n,"add",t,e),this}function Dh(t){const e=ce(this),{has:n,get:s}=na(e);let r=n.call(e,t);r||(t=ce(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&fn(e,"delete",t,void 0),i}function Ph(){const t=ce(this),e=t.size!==0,n=t.clear();return e&&fn(t,"clear",void 0,void 0),n}function Ki(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ce(o),c=e?jl:t?Hl:Wr;return!t&&mt(a,"iterate",is),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function Wi(t,e,n){return function(...s){const r=this.__v_raw,i=ce(r),o=Os(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?jl:e?Hl:Wr;return!e&&mt(i,"iterate",c?Lc:is),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function bn(t){return function(...e){return t==="delete"?!1:this}}function Xv(){const t={get(i){return zi(this,i)},get size(){return Hi(this)},has:qi,add:Rh,set:Nh,delete:Dh,clear:Ph,forEach:Ki(!1,!1)},e={get(i){return zi(this,i,!1,!0)},get size(){return Hi(this)},has:qi,add:Rh,set:Nh,delete:Dh,clear:Ph,forEach:Ki(!1,!0)},n={get(i){return zi(this,i,!0)},get size(){return Hi(this,!0)},has(i){return qi.call(this,i,!0)},add:bn("add"),set:bn("set"),delete:bn("delete"),clear:bn("clear"),forEach:Ki(!0,!1)},s={get(i){return zi(this,i,!0,!0)},get size(){return Hi(this,!0)},has(i){return qi.call(this,i,!0)},add:bn("add"),set:bn("set"),delete:bn("delete"),clear:bn("clear"),forEach:Ki(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Wi(i,!1,!1),n[i]=Wi(i,!0,!1),e[i]=Wi(i,!1,!0),s[i]=Wi(i,!0,!0)}),[t,n,e,s]}const[Zv,e_,t_,n_]=Xv();function zl(t,e){const n=e?t?n_:t_:t?e_:Zv;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(le(n,r)&&r in s?n:s,r,i)}const s_={get:zl(!1,!1)},r_={get:zl(!1,!0)},i_={get:zl(!0,!1)},lp=new WeakMap,up=new WeakMap,hp=new WeakMap,o_=new WeakMap;function a_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function c_(t){return t.__v_skip||!Object.isExtensible(t)?0:a_(Sv(t))}function lr(t){return Hs(t)?t:ql(t,!1,cp,s_,lp)}function l_(t){return ql(t,!1,Jv,r_,up)}function fp(t){return ql(t,!0,Yv,i_,hp)}function ql(t,e,n,s,r){if(!ke(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=c_(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function un(t){return Hs(t)?un(t.__v_raw):!!(t&&t.__v_isReactive)}function Hs(t){return!!(t&&t.__v_isReadonly)}function Io(t){return!!(t&&t.__v_isShallow)}function dp(t){return un(t)||Hs(t)}function ce(t){const e=t&&t.__v_raw;return e?ce(e):t}function sa(t){return wo(t,"__v_skip",!0),t}const Wr=t=>ke(t)?lr(t):t,Hl=t=>ke(t)?fp(t):t;function pp(t){Mn&&Nt&&(t=ce(t),ip(t.dep||(t.dep=$l())))}function gp(t,e){t=ce(t);const n=t.dep;n&&Fc(n)}function Ne(t){return!!(t&&t.__v_isRef===!0)}function Ie(t){return mp(t,!1)}function u_(t){return mp(t,!0)}function mp(t,e){return Ne(t)?t:new h_(t,e)}class h_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ce(e),this._value=n?e:Wr(e)}get value(){return pp(this),this._value}set value(e){const n=this.__v_isShallow||Io(e)||Hs(e);e=n?e:ce(e),Kr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Wr(e),gp(this))}}function H(t){return Ne(t)?t.value:t}const f_={get:(t,e,n)=>H(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Ne(r)&&!Ne(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function yp(t){return un(t)?t:new Proxy(t,f_)}function d_(t){const e=K(t)?new Array(t.length):{};for(const n in t)e[n]=vp(t,n);return e}class p_{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Uv(ce(this._object),this._key)}}class g_{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function m_(t,e,n){return Ne(t)?t:X(t)?new g_(t):ke(t)&&arguments.length>1?vp(t,e,n):Ie(t)}function vp(t,e,n){const s=t[e];return Ne(s)?s:new p_(t,e,n)}class y_{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Vl(e,()=>{this._dirty||(this._dirty=!0,gp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ce(this);return pp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function v_(t,e,n=!1){let s,r;const i=X(t);return i?(s=t,r=Pt):(s=t.get,r=t.set),new y_(s,r,i||!r,n)}function Ln(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){ra(i,e,n)}return r}function Ot(t,e,n,s){if(X(t)){const i=Ln(t,e,n,s);return i&&Gd(i)&&i.catch(o=>{ra(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(Ot(t[i],e,n,s));return r}function ra(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Ln(c,null,10,[t,o,a]);return}}__(t,n,r,s)}function __(t,e,n,s=!0){console.error(t)}let Gr=!1,Uc=!1;const tt=[];let jt=0;const xs=[];let rn=null,Zn=0;const _p=Promise.resolve();let Kl=null;function Wl(t){const e=Kl||_p;return t?e.then(this?t.bind(this):t):e}function w_(t){let e=jt+1,n=tt.length;for(;e<n;){const s=e+n>>>1;Qr(tt[s])<t?e=s+1:n=s}return e}function Gl(t){(!tt.length||!tt.includes(t,Gr&&t.allowRecurse?jt+1:jt))&&(t.id==null?tt.push(t):tt.splice(w_(t.id),0,t),wp())}function wp(){!Gr&&!Uc&&(Uc=!0,Kl=_p.then(Ip))}function E_(t){const e=tt.indexOf(t);e>jt&&tt.splice(e,1)}function I_(t){K(t)?xs.push(...t):(!rn||!rn.includes(t,t.allowRecurse?Zn+1:Zn))&&xs.push(t),wp()}function Oh(t,e=Gr?jt+1:0){for(;e<tt.length;e++){const n=tt[e];n&&n.pre&&(tt.splice(e,1),e--,n())}}function Ep(t){if(xs.length){const e=[...new Set(xs)];if(xs.length=0,rn){rn.push(...e);return}for(rn=e,rn.sort((n,s)=>Qr(n)-Qr(s)),Zn=0;Zn<rn.length;Zn++)rn[Zn]();rn=null,Zn=0}}const Qr=t=>t.id==null?1/0:t.id,T_=(t,e)=>{const n=Qr(t)-Qr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Ip(t){Uc=!1,Gr=!0,tt.sort(T_);const e=Pt;try{for(jt=0;jt<tt.length;jt++){const n=tt[jt];n&&n.active!==!1&&Ln(n,null,14)}}finally{jt=0,tt.length=0,Ep(),Gr=!1,Kl=null,(tt.length||xs.length)&&Ip()}}function b_(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||be;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||be;f&&(r=n.map(g=>$e(g)?g.trim():g)),h&&(r=n.map(Oc))}let a,c=s[a=sc(e)]||s[a=sc(Xt(e))];!c&&i&&(c=s[a=sc(or(e))]),c&&Ot(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ot(l,t,6,r)}}function Tp(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!X(t)){const c=l=>{const u=Tp(l,e,!0);u&&(a=!0,qe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ke(t)&&s.set(t,null),null):(K(i)?i.forEach(c=>o[c]=null):qe(o,i),ke(t)&&s.set(t,o),o)}function ia(t,e){return!t||!Xo(e)?!1:(e=e.slice(2).replace(/Once$/,""),le(t,e[0].toLowerCase()+e.slice(1))||le(t,or(e))||le(t,e))}let Et=null,oa=null;function To(t){const e=Et;return Et=t,oa=t&&t.type.__scopeId||null,e}function en(t){oa=t}function tn(){oa=null}function zt(t,e=Et,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&qh(-1);const i=To(e);let o;try{o=t(...r)}finally{To(i),s._d&&qh(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function rc(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:g,ctx:y,inheritAttrs:_}=t;let T,R;const P=To(t);try{if(n.shapeFlag&4){const F=r||s;T=Bt(u.call(F,F,h,i,g,f,y)),R=c}else{const F=e;T=Bt(F.length>1?F(i,{attrs:c,slots:a,emit:l}):F(i,null)),R=e.props?c:S_(c)}}catch(F){Fr.length=0,ra(F,t,1),T=he(ls)}let q=T;if(R&&_!==!1){const F=Object.keys(R),{shapeFlag:oe}=q;F.length&&oe&7&&(o&&F.some(Ol)&&(R=C_(R,o)),q=Ks(q,R))}return n.dirs&&(q=Ks(q),q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition&&(q.transition=n.transition),T=q,To(P),T}const S_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Xo(n))&&((e||(e={}))[n]=t[n]);return e},C_=(t,e)=>{const n={};for(const s in t)(!Ol(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function A_(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?xh(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!ia(l,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?xh(s,o,l):!0:!!o;return!1}function xh(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!ia(n,i))return!0}return!1}function k_({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const R_=t=>t.__isSuspense;function N_(t,e){e&&e.pendingBranch?K(t)?e.effects.push(...t):e.effects.push(t):I_(t)}const Gi={};function Ms(t,e,n){return bp(t,e,n)}function bp(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=be){var a;const c=tp()===((a=ze)==null?void 0:a.scope)?ze:null;let l,u=!1,h=!1;if(Ne(t)?(l=()=>t.value,u=Io(t)):un(t)?(l=()=>t,s=!0):K(t)?(h=!0,u=t.some(F=>un(F)||Io(F)),l=()=>t.map(F=>{if(Ne(F))return F.value;if(un(F))return ts(F);if(X(F))return Ln(F,c,2)})):X(t)?e?l=()=>Ln(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return f&&f(),Ot(t,c,3,[g])}:l=Pt,e&&s){const F=l;l=()=>ts(F())}let f,g=F=>{f=P.onStop=()=>{Ln(F,c,4)}},y;if(Xr)if(g=Pt,e?n&&Ot(e,c,3,[l(),h?[]:void 0,g]):l(),r==="sync"){const F=Tw();y=F.__watcherHandles||(F.__watcherHandles=[])}else return Pt;let _=h?new Array(t.length).fill(Gi):Gi;const T=()=>{if(P.active)if(e){const F=P.run();(s||u||(h?F.some((oe,Te)=>Kr(oe,_[Te])):Kr(F,_)))&&(f&&f(),Ot(e,c,3,[F,_===Gi?void 0:h&&_[0]===Gi?[]:_,g]),_=F)}else P.run()};T.allowRecurse=!!e;let R;r==="sync"?R=T:r==="post"?R=()=>ft(T,c&&c.suspense):(T.pre=!0,c&&(T.id=c.uid),R=()=>Gl(T));const P=new Vl(l,R);e?n?T():_=P.run():r==="post"?ft(P.run.bind(P),c&&c.suspense):P.run();const q=()=>{P.stop(),c&&c.scope&&xl(c.scope.effects,P)};return y&&y.push(q),q}function D_(t,e,n){const s=this.proxy,r=$e(t)?t.includes(".")?Sp(s,t):()=>s[t]:t.bind(s,s);let i;X(e)?i=e:(i=e.handler,n=e);const o=ze;Gs(this);const a=bp(r,i.bind(s),n);return o?Gs(o):os(),a}function Sp(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function ts(t,e){if(!ke(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ne(t))ts(t.value,e);else if(K(t))for(let n=0;n<t.length;n++)ts(t[n],e);else if(Wd(t)||Os(t))t.forEach(n=>{ts(n,e)});else if(Yd(t))for(const n in t)ts(t[n],e);return t}function Ct(t,e){const n=Et;if(n===null)return t;const s=fa(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=be]=e[i];o&&(X(o)&&(o={mounted:o,updated:o}),o.deep&&ts(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Yn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(ar(),Ot(c,n,8,[t.el,a,t,e]),cr())}}function Cp(t,e){return X(t)?(()=>qe({name:t.name},e,{setup:t}))():t}const ao=t=>!!t.type.__asyncLoader,Ap=t=>t.type.__isKeepAlive;function P_(t,e){kp(t,"a",e)}function O_(t,e){kp(t,"da",e)}function kp(t,e,n=ze){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(aa(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Ap(r.parent.vnode)&&x_(s,e,n,r),r=r.parent}}function x_(t,e,n,s){const r=aa(e,t,s,!0);la(()=>{xl(s[e],r)},n)}function aa(t,e,n=ze,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ar(),Gs(n);const a=Ot(e,n,t,o);return os(),cr(),a});return s?r.unshift(i):r.push(i),i}}const wn=t=>(e,n=ze)=>(!Xr||t==="sp")&&aa(t,(...s)=>e(...s),n),Ql=wn("bm"),ca=wn("m"),M_=wn("bu"),L_=wn("u"),F_=wn("bum"),la=wn("um"),U_=wn("sp"),$_=wn("rtg"),V_=wn("rtc");function B_(t,e=ze){aa("ec",t,e)}const Rp="components";function bo(t,e){return z_(Rp,t,!0,e)||t}const j_=Symbol.for("v-ndc");function z_(t,e,n=!0,s=!1){const r=Et||ze;if(r){const i=r.type;if(t===Rp){const a=ww(i,!1);if(a&&(a===e||a===Xt(e)||a===ta(Xt(e))))return i}const o=Mh(r[t]||i[t],e)||Mh(r.appContext[t],e);return!o&&s?i:o}}function Mh(t,e){return t&&(t[e]||t[Xt(e)]||t[ta(Xt(e))])}function Ls(t,e,n,s){let r;const i=n&&n[s];if(K(t)||$e(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(ke(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const $c=t=>t?Vp(t)?fa(t)||t.proxy:$c(t.parent):null,Lr=qe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>$c(t.parent),$root:t=>$c(t.root),$emit:t=>t.emit,$options:t=>Yl(t),$forceUpdate:t=>t.f||(t.f=()=>Gl(t.update)),$nextTick:t=>t.n||(t.n=Wl.bind(t.proxy)),$watch:t=>D_.bind(t)}),ic=(t,e)=>t!==be&&!t.__isScriptSetup&&le(t,e),q_={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(ic(s,e))return o[e]=1,s[e];if(r!==be&&le(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&le(l,e))return o[e]=3,i[e];if(n!==be&&le(n,e))return o[e]=4,n[e];Vc&&(o[e]=0)}}const u=Lr[e];let h,f;if(u)return e==="$attrs"&&mt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==be&&le(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,le(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return ic(r,e)?(r[e]=n,!0):s!==be&&le(s,e)?(s[e]=n,!0):le(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==be&&le(t,o)||ic(e,o)||(a=i[0])&&le(a,o)||le(s,o)||le(Lr,o)||le(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:le(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Lh(t){return K(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Vc=!0;function H_(t){const e=Yl(t),n=t.proxy,s=t.ctx;Vc=!1,e.beforeCreate&&Fh(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:g,updated:y,activated:_,deactivated:T,beforeDestroy:R,beforeUnmount:P,destroyed:q,unmounted:F,render:oe,renderTracked:Te,renderTriggered:Pe,errorCaptured:se,serverPrefetch:ee,expose:Re,inheritAttrs:Ye,components:vt,directives:bt,filters:Qn}=e;if(l&&K_(l,s,null),o)for(const we in o){const pe=o[we];X(pe)&&(s[we]=pe.bind(n))}if(r){const we=r.call(n,n);ke(we)&&(t.data=lr(we))}if(Vc=!0,i)for(const we in i){const pe=i[we],nn=X(pe)?pe.bind(n,n):X(pe.get)?pe.get.bind(n,n):Pt,Tn=!X(pe)&&X(pe.set)?pe.set.bind(n):Pt,Ut=dt({get:nn,set:Tn});Object.defineProperty(s,we,{enumerable:!0,configurable:!0,get:()=>Ut.value,set:ht=>Ut.value=ht})}if(a)for(const we in a)Np(a[we],s,n,we);if(c){const we=X(c)?c.call(n):c;Reflect.ownKeys(we).forEach(pe=>{co(pe,we[pe])})}u&&Fh(u,t,"c");function fe(we,pe){K(pe)?pe.forEach(nn=>we(nn.bind(n))):pe&&we(pe.bind(n))}if(fe(Ql,h),fe(ca,f),fe(M_,g),fe(L_,y),fe(P_,_),fe(O_,T),fe(B_,se),fe(V_,Te),fe($_,Pe),fe(F_,P),fe(la,F),fe(U_,ee),K(Re))if(Re.length){const we=t.exposed||(t.exposed={});Re.forEach(pe=>{Object.defineProperty(we,pe,{get:()=>n[pe],set:nn=>n[pe]=nn})})}else t.exposed||(t.exposed={});oe&&t.render===Pt&&(t.render=oe),Ye!=null&&(t.inheritAttrs=Ye),vt&&(t.components=vt),bt&&(t.directives=bt)}function K_(t,e,n=Pt){K(t)&&(t=Bc(t));for(const s in t){const r=t[s];let i;ke(r)?"default"in r?i=Gt(r.from||s,r.default,!0):i=Gt(r.from||s):i=Gt(r),Ne(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function Fh(t,e,n){Ot(K(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Np(t,e,n,s){const r=s.includes(".")?Sp(n,s):()=>n[s];if($e(t)){const i=e[t];X(i)&&Ms(r,i)}else if(X(t))Ms(r,t.bind(n));else if(ke(t))if(K(t))t.forEach(i=>Np(i,e,n,s));else{const i=X(t.handler)?t.handler.bind(n):e[t.handler];X(i)&&Ms(r,i,t)}}function Yl(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>So(c,l,o,!0)),So(c,e,o)),ke(e)&&i.set(e,c),c}function So(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&So(t,i,n,!0),r&&r.forEach(o=>So(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=W_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const W_={data:Uh,props:$h,emits:$h,methods:kr,computed:kr,beforeCreate:lt,created:lt,beforeMount:lt,mounted:lt,beforeUpdate:lt,updated:lt,beforeDestroy:lt,beforeUnmount:lt,destroyed:lt,unmounted:lt,activated:lt,deactivated:lt,errorCaptured:lt,serverPrefetch:lt,components:kr,directives:kr,watch:Q_,provide:Uh,inject:G_};function Uh(t,e){return e?t?function(){return qe(X(t)?t.call(this,this):t,X(e)?e.call(this,this):e)}:e:t}function G_(t,e){return kr(Bc(t),Bc(e))}function Bc(t){if(K(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function lt(t,e){return t?[...new Set([].concat(t,e))]:e}function kr(t,e){return t?qe(Object.create(null),t,e):e}function $h(t,e){return t?K(t)&&K(e)?[...new Set([...t,...e])]:qe(Object.create(null),Lh(t),Lh(e??{})):e}function Q_(t,e){if(!t)return e;if(!e)return t;const n=qe(Object.create(null),t);for(const s in e)n[s]=lt(t[s],e[s]);return n}function Dp(){return{app:null,config:{isNativeTag:Iv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Y_=0;function J_(t,e){return function(s,r=null){X(s)||(s=qe({},s)),r!=null&&!ke(r)&&(r=null);const i=Dp(),o=new Set;let a=!1;const c=i.app={_uid:Y_++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:bw,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&X(l.install)?(o.add(l),l.install(c,...u)):X(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=he(s,r);return f.appContext=i,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,fa(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){Yr=c;try{return l()}finally{Yr=null}}};return c}}let Yr=null;function co(t,e){if(ze){let n=ze.provides;const s=ze.parent&&ze.parent.provides;s===n&&(n=ze.provides=Object.create(s)),n[t]=e}}function Gt(t,e,n=!1){const s=ze||Et;if(s||Yr){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Yr._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&X(e)?e.call(s&&s.proxy):e}}function X_(){return!!(ze||Et||Yr)}function Z_(t,e,n,s=!1){const r={},i={};wo(i,ha,1),t.propsDefaults=Object.create(null),Pp(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:l_(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function ew(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ce(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(ia(t.emitsOptions,f))continue;const g=e[f];if(c)if(le(i,f))g!==i[f]&&(i[f]=g,l=!0);else{const y=Xt(f);r[y]=jc(c,a,y,g,t,!1)}else g!==i[f]&&(i[f]=g,l=!0)}}}else{Pp(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!le(e,h)&&((u=or(h))===h||!le(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=jc(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!le(e,h))&&(delete i[h],l=!0)}l&&fn(t,"set","$attrs")}function Pp(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(io(c))continue;const l=e[c];let u;r&&le(r,u=Xt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:ia(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=ce(n),l=a||be;for(let u=0;u<i.length;u++){const h=i[u];n[h]=jc(r,c,h,l[h],t,!le(l,h))}}return o}function jc(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=le(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&X(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Gs(r),s=l[n]=c.call(null,e),os())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===or(n))&&(s=!0))}return s}function Op(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!X(t)){const u=h=>{c=!0;const[f,g]=Op(h,e,!0);qe(o,f),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return ke(t)&&s.set(t,Ps),Ps;if(K(i))for(let u=0;u<i.length;u++){const h=Xt(i[u]);Vh(h)&&(o[h]=be)}else if(i)for(const u in i){const h=Xt(u);if(Vh(h)){const f=i[u],g=o[h]=K(f)||X(f)?{type:f}:qe({},f);if(g){const y=zh(Boolean,g.type),_=zh(String,g.type);g[0]=y>-1,g[1]=_<0||y<_,(y>-1||le(g,"default"))&&a.push(h)}}}const l=[o,a];return ke(t)&&s.set(t,l),l}function Vh(t){return t[0]!=="$"}function Bh(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function jh(t,e){return Bh(t)===Bh(e)}function zh(t,e){return K(e)?e.findIndex(n=>jh(n,t)):X(e)&&jh(e,t)?0:-1}const xp=t=>t[0]==="_"||t==="$stable",Jl=t=>K(t)?t.map(Bt):[Bt(t)],tw=(t,e,n)=>{if(e._n)return e;const s=zt((...r)=>Jl(e(...r)),n);return s._c=!1,s},Mp=(t,e,n)=>{const s=t._ctx;for(const r in t){if(xp(r))continue;const i=t[r];if(X(i))e[r]=tw(r,i,s);else if(i!=null){const o=Jl(i);e[r]=()=>o}}},Lp=(t,e)=>{const n=Jl(e);t.slots.default=()=>n},nw=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ce(e),wo(e,"_",n)):Mp(e,t.slots={})}else t.slots={},e&&Lp(t,e);wo(t.slots,ha,1)},sw=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=be;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(qe(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Mp(e,r)),o=e}else e&&(Lp(t,e),o={default:1});if(i)for(const a in r)!xp(a)&&!(a in o)&&delete r[a]};function zc(t,e,n,s,r=!1){if(K(t)){t.forEach((f,g)=>zc(f,e&&(K(e)?e[g]:e),n,s,r));return}if(ao(s)&&!r)return;const i=s.shapeFlag&4?fa(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===be?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&($e(l)?(u[l]=null,le(h,l)&&(h[l]=null)):Ne(l)&&(l.value=null)),X(c))Ln(c,a,12,[o,u]);else{const f=$e(c),g=Ne(c);if(f||g){const y=()=>{if(t.f){const _=f?le(h,c)?h[c]:u[c]:c.value;r?K(_)&&xl(_,i):K(_)?_.includes(i)||_.push(i):f?(u[c]=[i],le(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,le(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,ft(y,n)):y()}}}const ft=N_;function rw(t){return iw(t)}function iw(t,e){const n=xc();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:g=Pt,insertStaticContent:y}=t,_=(d,p,m,w=null,b=null,S=null,x=!1,k=null,N=!!p.dynamicChildren)=>{if(d===p)return;d&&!Ir(d,p)&&(w=E(d),ht(d,b,S,!0),d=null),p.patchFlag===-2&&(N=!1,p.dynamicChildren=null);const{type:C,ref:j,shapeFlag:U}=p;switch(C){case ua:T(d,p,m,w);break;case ls:R(d,p,m,w);break;case oc:d==null&&P(p,m,w,x);break;case je:vt(d,p,m,w,b,S,x,k,N);break;default:U&1?oe(d,p,m,w,b,S,x,k,N):U&6?bt(d,p,m,w,b,S,x,k,N):(U&64||U&128)&&C.process(d,p,m,w,b,S,x,k,N,D)}j!=null&&b&&zc(j,d&&d.ref,S,p||d,!p)},T=(d,p,m,w)=>{if(d==null)s(p.el=a(p.children),m,w);else{const b=p.el=d.el;p.children!==d.children&&l(b,p.children)}},R=(d,p,m,w)=>{d==null?s(p.el=c(p.children||""),m,w):p.el=d.el},P=(d,p,m,w)=>{[d.el,d.anchor]=y(d.children,p,m,w,d.el,d.anchor)},q=({el:d,anchor:p},m,w)=>{let b;for(;d&&d!==p;)b=f(d),s(d,m,w),d=b;s(p,m,w)},F=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=f(d),r(d),d=m;r(p)},oe=(d,p,m,w,b,S,x,k,N)=>{x=x||p.type==="svg",d==null?Te(p,m,w,b,S,x,k,N):ee(d,p,b,S,x,k,N)},Te=(d,p,m,w,b,S,x,k)=>{let N,C;const{type:j,props:U,shapeFlag:z,transition:Y,dirs:re}=d;if(N=d.el=o(d.type,S,U&&U.is,U),z&8?u(N,d.children):z&16&&se(d.children,N,null,w,b,S&&j!=="foreignObject",x,k),re&&Yn(d,null,w,"created"),Pe(N,d,d.scopeId,x,w),U){for(const _e in U)_e!=="value"&&!io(_e)&&i(N,_e,null,U[_e],S,d.children,w,b,Je);"value"in U&&i(N,"value",null,U.value),(C=U.onVnodeBeforeMount)&&Vt(C,w,d)}re&&Yn(d,null,w,"beforeMount");const Ee=(!b||b&&!b.pendingBranch)&&Y&&!Y.persisted;Ee&&Y.beforeEnter(N),s(N,p,m),((C=U&&U.onVnodeMounted)||Ee||re)&&ft(()=>{C&&Vt(C,w,d),Ee&&Y.enter(N),re&&Yn(d,null,w,"mounted")},b)},Pe=(d,p,m,w,b)=>{if(m&&g(d,m),w)for(let S=0;S<w.length;S++)g(d,w[S]);if(b){let S=b.subTree;if(p===S){const x=b.vnode;Pe(d,x,x.scopeId,x.slotScopeIds,b.parent)}}},se=(d,p,m,w,b,S,x,k,N=0)=>{for(let C=N;C<d.length;C++){const j=d[C]=k?kn(d[C]):Bt(d[C]);_(null,j,p,m,w,b,S,x,k)}},ee=(d,p,m,w,b,S,x)=>{const k=p.el=d.el;let{patchFlag:N,dynamicChildren:C,dirs:j}=p;N|=d.patchFlag&16;const U=d.props||be,z=p.props||be;let Y;m&&Jn(m,!1),(Y=z.onVnodeBeforeUpdate)&&Vt(Y,m,p,d),j&&Yn(p,d,m,"beforeUpdate"),m&&Jn(m,!0);const re=b&&p.type!=="foreignObject";if(C?Re(d.dynamicChildren,C,k,m,w,re,S):x||pe(d,p,k,null,m,w,re,S,!1),N>0){if(N&16)Ye(k,p,U,z,m,w,b);else if(N&2&&U.class!==z.class&&i(k,"class",null,z.class,b),N&4&&i(k,"style",U.style,z.style,b),N&8){const Ee=p.dynamicProps;for(let _e=0;_e<Ee.length;_e++){const xe=Ee[_e],Rt=U[xe],Is=z[xe];(Is!==Rt||xe==="value")&&i(k,xe,Rt,Is,b,d.children,m,w,Je)}}N&1&&d.children!==p.children&&u(k,p.children)}else!x&&C==null&&Ye(k,p,U,z,m,w,b);((Y=z.onVnodeUpdated)||j)&&ft(()=>{Y&&Vt(Y,m,p,d),j&&Yn(p,d,m,"updated")},w)},Re=(d,p,m,w,b,S,x)=>{for(let k=0;k<p.length;k++){const N=d[k],C=p[k],j=N.el&&(N.type===je||!Ir(N,C)||N.shapeFlag&70)?h(N.el):m;_(N,C,j,null,w,b,S,x,!0)}},Ye=(d,p,m,w,b,S,x)=>{if(m!==w){if(m!==be)for(const k in m)!io(k)&&!(k in w)&&i(d,k,m[k],null,x,p.children,b,S,Je);for(const k in w){if(io(k))continue;const N=w[k],C=m[k];N!==C&&k!=="value"&&i(d,k,C,N,x,p.children,b,S,Je)}"value"in w&&i(d,"value",m.value,w.value)}},vt=(d,p,m,w,b,S,x,k,N)=>{const C=p.el=d?d.el:a(""),j=p.anchor=d?d.anchor:a("");let{patchFlag:U,dynamicChildren:z,slotScopeIds:Y}=p;Y&&(k=k?k.concat(Y):Y),d==null?(s(C,m,w),s(j,m,w),se(p.children,m,j,b,S,x,k,N)):U>0&&U&64&&z&&d.dynamicChildren?(Re(d.dynamicChildren,z,m,b,S,x,k),(p.key!=null||b&&p===b.subTree)&&Fp(d,p,!0)):pe(d,p,m,j,b,S,x,k,N)},bt=(d,p,m,w,b,S,x,k,N)=>{p.slotScopeIds=k,d==null?p.shapeFlag&512?b.ctx.activate(p,m,w,x,N):Qn(p,m,w,b,S,x,N):St(d,p,N)},Qn=(d,p,m,w,b,S,x)=>{const k=d.component=gw(d,w,b);if(Ap(d)&&(k.ctx.renderer=D),mw(k),k.asyncDep){if(b&&b.registerDep(k,fe),!d.el){const N=k.subTree=he(ls);R(null,N,p,m)}return}fe(k,d,p,m,b,S,x)},St=(d,p,m)=>{const w=p.component=d.component;if(A_(d,p,m))if(w.asyncDep&&!w.asyncResolved){we(w,p,m);return}else w.next=p,E_(w.update),w.update();else p.el=d.el,w.vnode=p},fe=(d,p,m,w,b,S,x)=>{const k=()=>{if(d.isMounted){let{next:j,bu:U,u:z,parent:Y,vnode:re}=d,Ee=j,_e;Jn(d,!1),j?(j.el=re.el,we(d,j,x)):j=re,U&&oo(U),(_e=j.props&&j.props.onVnodeBeforeUpdate)&&Vt(_e,Y,j,re),Jn(d,!0);const xe=rc(d),Rt=d.subTree;d.subTree=xe,_(Rt,xe,h(Rt.el),E(Rt),d,b,S),j.el=xe.el,Ee===null&&k_(d,xe.el),z&&ft(z,b),(_e=j.props&&j.props.onVnodeUpdated)&&ft(()=>Vt(_e,Y,j,re),b)}else{let j;const{el:U,props:z}=p,{bm:Y,m:re,parent:Ee}=d,_e=ao(p);if(Jn(d,!1),Y&&oo(Y),!_e&&(j=z&&z.onVnodeBeforeMount)&&Vt(j,Ee,p),Jn(d,!0),U&&ge){const xe=()=>{d.subTree=rc(d),ge(U,d.subTree,d,b,null)};_e?p.type.__asyncLoader().then(()=>!d.isUnmounted&&xe()):xe()}else{const xe=d.subTree=rc(d);_(null,xe,m,w,d,b,S),p.el=xe.el}if(re&&ft(re,b),!_e&&(j=z&&z.onVnodeMounted)){const xe=p;ft(()=>Vt(j,Ee,xe),b)}(p.shapeFlag&256||Ee&&ao(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&d.a&&ft(d.a,b),d.isMounted=!0,p=m=w=null}},N=d.effect=new Vl(k,()=>Gl(C),d.scope),C=d.update=()=>N.run();C.id=d.uid,Jn(d,!0),C()},we=(d,p,m)=>{p.component=d;const w=d.vnode.props;d.vnode=p,d.next=null,ew(d,p.props,w,m),sw(d,p.children,m),ar(),Oh(),cr()},pe=(d,p,m,w,b,S,x,k,N=!1)=>{const C=d&&d.children,j=d?d.shapeFlag:0,U=p.children,{patchFlag:z,shapeFlag:Y}=p;if(z>0){if(z&128){Tn(C,U,m,w,b,S,x,k,N);return}else if(z&256){nn(C,U,m,w,b,S,x,k,N);return}}Y&8?(j&16&&Je(C,b,S),U!==C&&u(m,U)):j&16?Y&16?Tn(C,U,m,w,b,S,x,k,N):Je(C,b,S,!0):(j&8&&u(m,""),Y&16&&se(U,m,w,b,S,x,k,N))},nn=(d,p,m,w,b,S,x,k,N)=>{d=d||Ps,p=p||Ps;const C=d.length,j=p.length,U=Math.min(C,j);let z;for(z=0;z<U;z++){const Y=p[z]=N?kn(p[z]):Bt(p[z]);_(d[z],Y,m,null,b,S,x,k,N)}C>j?Je(d,b,S,!0,!1,U):se(p,m,w,b,S,x,k,N,U)},Tn=(d,p,m,w,b,S,x,k,N)=>{let C=0;const j=p.length;let U=d.length-1,z=j-1;for(;C<=U&&C<=z;){const Y=d[C],re=p[C]=N?kn(p[C]):Bt(p[C]);if(Ir(Y,re))_(Y,re,m,null,b,S,x,k,N);else break;C++}for(;C<=U&&C<=z;){const Y=d[U],re=p[z]=N?kn(p[z]):Bt(p[z]);if(Ir(Y,re))_(Y,re,m,null,b,S,x,k,N);else break;U--,z--}if(C>U){if(C<=z){const Y=z+1,re=Y<j?p[Y].el:w;for(;C<=z;)_(null,p[C]=N?kn(p[C]):Bt(p[C]),m,re,b,S,x,k,N),C++}}else if(C>z)for(;C<=U;)ht(d[C],b,S,!0),C++;else{const Y=C,re=C,Ee=new Map;for(C=re;C<=z;C++){const _t=p[C]=N?kn(p[C]):Bt(p[C]);_t.key!=null&&Ee.set(_t.key,C)}let _e,xe=0;const Rt=z-re+1;let Is=!1,Ih=0;const Er=new Array(Rt);for(C=0;C<Rt;C++)Er[C]=0;for(C=Y;C<=U;C++){const _t=d[C];if(xe>=Rt){ht(_t,b,S,!0);continue}let $t;if(_t.key!=null)$t=Ee.get(_t.key);else for(_e=re;_e<=z;_e++)if(Er[_e-re]===0&&Ir(_t,p[_e])){$t=_e;break}$t===void 0?ht(_t,b,S,!0):(Er[$t-re]=C+1,$t>=Ih?Ih=$t:Is=!0,_(_t,p[$t],m,null,b,S,x,k,N),xe++)}const Th=Is?ow(Er):Ps;for(_e=Th.length-1,C=Rt-1;C>=0;C--){const _t=re+C,$t=p[_t],bh=_t+1<j?p[_t+1].el:w;Er[C]===0?_(null,$t,m,bh,b,S,x,k,N):Is&&(_e<0||C!==Th[_e]?Ut($t,m,bh,2):_e--)}}},Ut=(d,p,m,w,b=null)=>{const{el:S,type:x,transition:k,children:N,shapeFlag:C}=d;if(C&6){Ut(d.component.subTree,p,m,w);return}if(C&128){d.suspense.move(p,m,w);return}if(C&64){x.move(d,p,m,D);return}if(x===je){s(S,p,m);for(let U=0;U<N.length;U++)Ut(N[U],p,m,w);s(d.anchor,p,m);return}if(x===oc){q(d,p,m);return}if(w!==2&&C&1&&k)if(w===0)k.beforeEnter(S),s(S,p,m),ft(()=>k.enter(S),b);else{const{leave:U,delayLeave:z,afterLeave:Y}=k,re=()=>s(S,p,m),Ee=()=>{U(S,()=>{re(),Y&&Y()})};z?z(S,re,Ee):Ee()}else s(S,p,m)},ht=(d,p,m,w=!1,b=!1)=>{const{type:S,props:x,ref:k,children:N,dynamicChildren:C,shapeFlag:j,patchFlag:U,dirs:z}=d;if(k!=null&&zc(k,null,m,d,!0),j&256){p.ctx.deactivate(d);return}const Y=j&1&&z,re=!ao(d);let Ee;if(re&&(Ee=x&&x.onVnodeBeforeUnmount)&&Vt(Ee,p,d),j&6)ji(d.component,m,w);else{if(j&128){d.suspense.unmount(m,w);return}Y&&Yn(d,null,p,"beforeUnmount"),j&64?d.type.remove(d,p,m,b,D,w):C&&(S!==je||U>0&&U&64)?Je(C,p,m,!1,!0):(S===je&&U&384||!b&&j&16)&&Je(N,p,m),w&&ws(d)}(re&&(Ee=x&&x.onVnodeUnmounted)||Y)&&ft(()=>{Ee&&Vt(Ee,p,d),Y&&Yn(d,null,p,"unmounted")},m)},ws=d=>{const{type:p,el:m,anchor:w,transition:b}=d;if(p===je){Es(m,w);return}if(p===oc){F(d);return}const S=()=>{r(m),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(d.shapeFlag&1&&b&&!b.persisted){const{leave:x,delayLeave:k}=b,N=()=>x(m,S);k?k(d.el,S,N):N()}else S()},Es=(d,p)=>{let m;for(;d!==p;)m=f(d),r(d),d=m;r(p)},ji=(d,p,m)=>{const{bum:w,scope:b,update:S,subTree:x,um:k}=d;w&&oo(w),b.stop(),S&&(S.active=!1,ht(x,d,p,m)),k&&ft(k,p),ft(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Je=(d,p,m,w=!1,b=!1,S=0)=>{for(let x=S;x<d.length;x++)ht(d[x],p,m,w,b)},E=d=>d.shapeFlag&6?E(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),L=(d,p,m)=>{d==null?p._vnode&&ht(p._vnode,null,null,!0):_(p._vnode||null,d,p,null,null,null,m),Oh(),Ep(),p._vnode=d},D={p:_,um:ht,m:Ut,r:ws,mt:Qn,mc:se,pc:pe,pbc:Re,n:E,o:t};let V,ge;return e&&([V,ge]=e(D)),{render:L,hydrate:V,createApp:J_(L,V)}}function Jn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Fp(t,e,n=!1){const s=t.children,r=e.children;if(K(s)&&K(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=kn(r[i]),a.el=o.el),n||Fp(o,a)),a.type===ua&&(a.el=o.el)}}function ow(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const aw=t=>t.__isTeleport,je=Symbol.for("v-fgt"),ua=Symbol.for("v-txt"),ls=Symbol.for("v-cmt"),oc=Symbol.for("v-stc"),Fr=[];let Dt=null;function te(t=!1){Fr.push(Dt=t?null:[])}function cw(){Fr.pop(),Dt=Fr[Fr.length-1]||null}let Jr=1;function qh(t){Jr+=t}function Up(t){return t.dynamicChildren=Jr>0?Dt||Ps:null,cw(),Jr>0&&Dt&&Dt.push(t),t}function ne(t,e,n,s,r,i){return Up(v(t,e,n,s,r,i,!0))}function lw(t,e,n,s,r){return Up(he(t,e,n,s,r,!0))}function qc(t){return t?t.__v_isVNode===!0:!1}function Ir(t,e){return t.type===e.type&&t.key===e.key}const ha="__vInternal",$p=({key:t})=>t??null,lo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?$e(t)||Ne(t)||X(t)?{i:Et,r:t,k:e,f:!!n}:t:null);function v(t,e=null,n=null,s=0,r=null,i=t===je?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&$p(e),ref:e&&lo(e),scopeId:oa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Et};return a?(Xl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=$e(n)?8:16),Jr>0&&!o&&Dt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Dt.push(c),c}const he=uw;function uw(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===j_)&&(t=ls),qc(t)){const a=Ks(t,e,!0);return n&&Xl(a,n),Jr>0&&!i&&Dt&&(a.shapeFlag&6?Dt[Dt.indexOf(t)]=a:Dt.push(a)),a.patchFlag|=-2,a}if(Ew(t)&&(t=t.__vccOpts),e){e=hw(e);let{class:a,style:c}=e;a&&!$e(a)&&(e.class=Ul(a)),ke(c)&&(dp(c)&&!K(c)&&(c=qe({},c)),e.style=Fl(c))}const o=$e(t)?1:R_(t)?128:aw(t)?64:ke(t)?4:X(t)?2:0;return v(t,e,n,s,r,o,i,!0)}function hw(t){return t?dp(t)||ha in t?qe({},t):t:null}function Ks(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?fw(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&$p(a),ref:e&&e.ref?n&&r?K(r)?r.concat(lo(e)):[r,lo(e)]:lo(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==je?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ks(t.ssContent),ssFallback:t.ssFallback&&Ks(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function qt(t=" ",e=0){return he(ua,null,t,e)}function Ws(t="",e=!1){return e?(te(),lw(ls,null,t)):he(ls,null,t)}function Bt(t){return t==null||typeof t=="boolean"?he(ls):K(t)?he(je,null,t.slice()):typeof t=="object"?kn(t):he(ua,null,String(t))}function kn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ks(t)}function Xl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(K(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Xl(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(ha in e)?e._ctx=Et:r===3&&Et&&(Et.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else X(e)?(e={default:e,_ctx:Et},n=32):(e=String(e),s&64?(n=16,e=[qt(e)]):n=8);t.children=e,t.shapeFlag|=n}function fw(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Ul([e.class,s.class]));else if(r==="style")e.style=Fl([e.style,s.style]);else if(Xo(r)){const i=e[r],o=s[r];o&&i!==o&&!(K(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Vt(t,e,n,s=null){Ot(t,e,7,[n,s])}const dw=Dp();let pw=0;function gw(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||dw,i={uid:pw++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Zd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Op(s,r),emitsOptions:Tp(s,r),emit:null,emitted:null,propsDefaults:be,inheritAttrs:s.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=b_.bind(null,i),t.ce&&t.ce(i),i}let ze=null,Zl,Ts,Hh="__VUE_INSTANCE_SETTERS__";(Ts=xc()[Hh])||(Ts=xc()[Hh]=[]),Ts.push(t=>ze=t),Zl=t=>{Ts.length>1?Ts.forEach(e=>e(t)):Ts[0](t)};const Gs=t=>{Zl(t),t.scope.on()},os=()=>{ze&&ze.scope.off(),Zl(null)};function Vp(t){return t.vnode.shapeFlag&4}let Xr=!1;function mw(t,e=!1){Xr=e;const{props:n,children:s}=t.vnode,r=Vp(t);Z_(t,n,r,e),nw(t,s);const i=r?yw(t,e):void 0;return Xr=!1,i}function yw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=sa(new Proxy(t.ctx,q_));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?_w(t):null;Gs(t),ar();const i=Ln(s,t,0,[t.props,r]);if(cr(),os(),Gd(i)){if(i.then(os,os),e)return i.then(o=>{Kh(t,o,e)}).catch(o=>{ra(o,t,0)});t.asyncDep=i}else Kh(t,i,e)}else Bp(t,e)}function Kh(t,e,n){X(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ke(e)&&(t.setupState=yp(e)),Bp(t,n)}let Wh;function Bp(t,e,n){const s=t.type;if(!t.render){if(!e&&Wh&&!s.render){const r=s.template||Yl(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=qe(qe({isCustomElement:i,delimiters:a},o),c);s.render=Wh(r,l)}}t.render=s.render||Pt}Gs(t),ar(),H_(t),cr(),os()}function vw(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return mt(t,"get","$attrs"),e[n]}}))}function _w(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return vw(t)},slots:t.slots,emit:t.emit,expose:e}}function fa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(yp(sa(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Lr)return Lr[n](t)},has(e,n){return n in e||n in Lr}}))}function ww(t,e=!0){return X(t)?t.displayName||t.name:t.name||e&&t.__name}function Ew(t){return X(t)&&"__vccOpts"in t}const dt=(t,e)=>v_(t,e,Xr);function jp(t,e,n){const s=arguments.length;return s===2?ke(e)&&!K(e)?qc(e)?he(t,null,[e]):he(t,e):he(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&qc(n)&&(n=[n]),he(t,e,n))}const Iw=Symbol.for("v-scx"),Tw=()=>Gt(Iw),bw="3.3.4",Sw="http://www.w3.org/2000/svg",es=typeof document<"u"?document:null,Gh=es&&es.createElement("template"),Cw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?es.createElementNS(Sw,t):es.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>es.createTextNode(t),createComment:t=>es.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>es.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Gh.innerHTML=s?`<svg>${t}</svg>`:t;const a=Gh.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Aw(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function kw(t,e,n){const s=t.style,r=$e(n);if(n&&!r){if(e&&!$e(e))for(const i in e)n[i]==null&&Hc(s,i,"");for(const i in n)Hc(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Qh=/\s*!important$/;function Hc(t,e,n){if(K(n))n.forEach(s=>Hc(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Rw(t,e);Qh.test(n)?t.setProperty(or(s),n.replace(Qh,""),"important"):t[s]=n}}const Yh=["Webkit","Moz","ms"],ac={};function Rw(t,e){const n=ac[e];if(n)return n;let s=Xt(e);if(s!=="filter"&&s in t)return ac[e]=s;s=ta(s);for(let r=0;r<Yh.length;r++){const i=Yh[r]+s;if(i in t)return ac[e]=i}return e}const Jh="http://www.w3.org/1999/xlink";function Nw(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Jh,e.slice(6,e.length)):t.setAttributeNS(Jh,e,n);else{const i=Ov(e);n==null||i&&!Jd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Dw(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Jd(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Cs(t,e,n,s){t.addEventListener(e,n,s)}function Pw(t,e,n,s){t.removeEventListener(e,n,s)}function Ow(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=xw(e);if(s){const l=i[e]=Fw(s,r);Cs(t,a,l,c)}else o&&(Pw(t,a,o,c),i[e]=void 0)}}const Xh=/(?:Once|Passive|Capture)$/;function xw(t){let e;if(Xh.test(t)){e={};let s;for(;s=t.match(Xh);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):or(t.slice(2)),e]}let cc=0;const Mw=Promise.resolve(),Lw=()=>cc||(Mw.then(()=>cc=0),cc=Date.now());function Fw(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ot(Uw(s,n.value),e,5,[s])};return n.value=t,n.attached=Lw(),n}function Uw(t,e){if(K(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Zh=/^on[a-z]/,$w=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?Aw(t,s,r):e==="style"?kw(t,n,s):Xo(e)?Ol(e)||Ow(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Vw(t,e,s,r))?Dw(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Nw(t,e,s,r))};function Vw(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Zh.test(e)&&X(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Zh.test(e)&&$e(n)?!1:e in t}const ef=t=>{const e=t.props["onUpdate:modelValue"]||!1;return K(e)?n=>oo(e,n):e};function Bw(t){t.target.composing=!0}function tf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const on={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=ef(r);const i=s||r.props&&r.props.type==="number";Cs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Oc(a)),t._assign(a)}),n&&Cs(t,"change",()=>{t.value=t.value.trim()}),e||(Cs(t,"compositionstart",Bw),Cs(t,"compositionend",tf),Cs(t,"change",tf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=ef(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Oc(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},jw=["ctrl","shift","alt","meta"],zw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>jw.some(n=>t[`${n}Key`]&&!e.includes(n))},Co=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=zw[e[r]];if(i&&i(n,e))return}return t(n,...s)},eu={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Tr(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Tr(t,!0),s.enter(t)):s.leave(t,()=>{Tr(t,!1)}):Tr(t,e))},beforeUnmount(t,{value:e}){Tr(t,e)}};function Tr(t,e){t.style.display=e?t._vod:"none"}const qw=qe({patchProp:$w},Cw);let nf;function Hw(){return nf||(nf=rw(qw))}const Kw=(...t)=>{const e=Hw().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Ww(s);if(!r)return;const i=e._component;!X(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Ww(t){return $e(t)?document.querySelector(t):t}var Gw=!1;/*!
  * pinia v2.1.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let zp;const da=t=>zp=t,qp=Symbol();function Kc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ur;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ur||(Ur={}));function Qw(){const t=ep(!0),e=t.run(()=>Ie({}));let n=[],s=[];const r=sa({install(i){da(r),r._a=i,i.provide(qp,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!Gw?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const Hp=()=>{};function sf(t,e,n,s=Hp){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&tp()&&Mv(r),r}function bs(t,...e){t.slice().forEach(n=>{n(...e)})}const Yw=t=>t();function Wc(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];Kc(r)&&Kc(s)&&t.hasOwnProperty(n)&&!Ne(s)&&!un(s)?t[n]=Wc(r,s):t[n]=s}return t}const Jw=Symbol();function Xw(t){return!Kc(t)||!t.hasOwnProperty(Jw)}const{assign:An}=Object;function Zw(t){return!!(Ne(t)&&t.effect)}function e0(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=r?r():{});const u=d_(n.state.value[t]);return An(u,i,Object.keys(o||{}).reduce((h,f)=>(h[f]=sa(dt(()=>{da(n);const g=n._s.get(t);return o[f].call(g,g)})),h),{}))}return c=Kp(t,l,e,n,s,!0),c}function Kp(t,e,n={},s,r,i){let o;const a=An({actions:{}},n),c={deep:!0};let l,u,h=[],f=[],g;const y=s.state.value[t];!i&&!y&&(s.state.value[t]={}),Ie({});let _;function T(se){let ee;l=u=!1,typeof se=="function"?(se(s.state.value[t]),ee={type:Ur.patchFunction,storeId:t,events:g}):(Wc(s.state.value[t],se),ee={type:Ur.patchObject,payload:se,storeId:t,events:g});const Re=_=Symbol();Wl().then(()=>{_===Re&&(l=!0)}),u=!0,bs(h,ee,s.state.value[t])}const R=i?function(){const{state:ee}=n,Re=ee?ee():{};this.$patch(Ye=>{An(Ye,Re)})}:Hp;function P(){o.stop(),h=[],f=[],s._s.delete(t)}function q(se,ee){return function(){da(s);const Re=Array.from(arguments),Ye=[],vt=[];function bt(fe){Ye.push(fe)}function Qn(fe){vt.push(fe)}bs(f,{args:Re,name:se,store:oe,after:bt,onError:Qn});let St;try{St=ee.apply(this&&this.$id===t?this:oe,Re)}catch(fe){throw bs(vt,fe),fe}return St instanceof Promise?St.then(fe=>(bs(Ye,fe),fe)).catch(fe=>(bs(vt,fe),Promise.reject(fe))):(bs(Ye,St),St)}}const F={_p:s,$id:t,$onAction:sf.bind(null,f),$patch:T,$reset:R,$subscribe(se,ee={}){const Re=sf(h,se,ee.detached,()=>Ye()),Ye=o.run(()=>Ms(()=>s.state.value[t],vt=>{(ee.flush==="sync"?u:l)&&se({storeId:t,type:Ur.direct,events:g},vt)},An({},c,ee)));return Re},$dispose:P},oe=lr(F);s._s.set(t,oe);const Te=s._a&&s._a.runWithContext||Yw,Pe=s._e.run(()=>(o=ep(),Te(()=>o.run(e))));for(const se in Pe){const ee=Pe[se];if(Ne(ee)&&!Zw(ee)||un(ee))i||(y&&Xw(ee)&&(Ne(ee)?ee.value=y[se]:Wc(ee,y[se])),s.state.value[t][se]=ee);else if(typeof ee=="function"){const Re=q(se,ee);Pe[se]=Re,a.actions[se]=ee}}return An(oe,Pe),An(ce(oe),Pe),Object.defineProperty(oe,"$state",{get:()=>s.state.value[t],set:se=>{T(ee=>{An(ee,se)})}}),s._p.forEach(se=>{An(oe,o.run(()=>se({store:oe,app:s._a,pinia:s,options:a})))}),y&&i&&n.hydrate&&n.hydrate(oe.$state,y),l=!0,u=!0,oe}function pa(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,c){const l=X_();return a=a||(l?Gt(qp,null):null),a&&da(a),a=zp,a._s.has(s)||(i?Kp(s,e,r,a):e0(s,r,a)),a._s.get(s)}return o.$id=s,o}function dn(t){{t=ce(t);const e={};for(const n in t){const s=t[n];(Ne(s)||un(s))&&(e[n]=m_(t,n))}return e}}/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const As=typeof window<"u";function t0(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ye=Object.assign;function lc(t,e){const n={};for(const s in e){const r=e[s];n[s]=xt(r)?r.map(t):t(r)}return n}const $r=()=>{},xt=Array.isArray,n0=/\/$/,s0=t=>t.replace(n0,"");function uc(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=a0(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function r0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function rf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function i0(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Qs(e.matched[s],n.matched[r])&&Wp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Qs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Wp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!o0(t[n],e[n]))return!1;return!0}function o0(t,e){return xt(t)?of(t,e):xt(e)?of(e,t):t===e}function of(t,e){return xt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function a0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var Zr;(function(t){t.pop="pop",t.push="push"})(Zr||(Zr={}));var Vr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Vr||(Vr={}));function c0(t){if(!t)if(As){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),s0(t)}const l0=/^[^#]+#/;function u0(t,e){return t.replace(l0,"#")+e}function h0(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const ga=()=>({left:window.pageXOffset,top:window.pageYOffset});function f0(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=h0(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function af(t,e){return(history.state?history.state.position-e:-1)+t}const Gc=new Map;function d0(t,e){Gc.set(t,e)}function p0(t){const e=Gc.get(t);return Gc.delete(t),e}let g0=()=>location.protocol+"//"+location.host;function Gp(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),rf(c,"")}return rf(n,t)+s+r}function m0(t,e,n,s){let r=[],i=[],o=null;const a=({state:f})=>{const g=Gp(t,location),y=n.value,_=e.value;let T=0;if(f){if(n.value=g,e.value=f,o&&o===y){o=null;return}T=_?f.position-_.position:0}else s(g);r.forEach(R=>{R(n.value,y,{delta:T,type:Zr.pop,direction:T?T>0?Vr.forward:Vr.back:Vr.unknown})})};function c(){o=n.value}function l(f){r.push(f);const g=()=>{const y=r.indexOf(f);y>-1&&r.splice(y,1)};return i.push(g),g}function u(){const{history:f}=window;f.state&&f.replaceState(ye({},f.state,{scroll:ga()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function cf(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?ga():null}}function y0(t){const{history:e,location:n}=window,s={value:Gp(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:g0()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),r.value=l}catch(g){console.error(g),n[u?"replace":"assign"](f)}}function o(c,l){const u=ye({},e.state,cf(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=ye({},r.value,e.state,{forward:c,scroll:ga()});i(u.current,u,!0);const h=ye({},cf(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function v0(t){t=c0(t);const e=y0(t),n=m0(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ye({location:"",base:t,go:s,createHref:u0.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function _0(t){return typeof t=="string"||t&&typeof t=="object"}function Qp(t){return typeof t=="string"||typeof t=="symbol"}const Sn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Yp=Symbol("");var lf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(lf||(lf={}));function Ys(t,e){return ye(new Error,{type:t,[Yp]:!0},e)}function sn(t,e){return t instanceof Error&&Yp in t&&(e==null||!!(t.type&e))}const uf="[^/]+?",w0={sensitive:!1,strict:!1,start:!0,end:!0},E0=/[.+*?^${}()[\]/\\]/g;function I0(t,e){const n=ye({},w0,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const f=l[h];let g=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(E0,"\\$&"),g+=40;else if(f.type===1){const{value:y,repeatable:_,optional:T,regexp:R}=f;i.push({name:y,repeatable:_,optional:T});const P=R||uf;if(P!==uf){g+=10;try{new RegExp(`(${P})`)}catch(F){throw new Error(`Invalid custom RegExp for param "${y}" (${P}): `+F.message)}}let q=_?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;h||(q=T&&l.length<2?`(?:/${q})`:"/"+q),T&&(q+="?"),r+=q,g+=20,T&&(g+=-8),_&&(g+=-20),P===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const g=u[f]||"",y=i[f-1];h[y.name]=g&&y.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of f)if(g.type===0)u+=g.value;else if(g.type===1){const{value:y,repeatable:_,optional:T}=g,R=y in l?l[y]:"";if(xt(R)&&!_)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const P=xt(R)?R.join("/"):R;if(!P)if(T)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=P}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function T0(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function b0(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=T0(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(hf(s))return 1;if(hf(r))return-1}return r.length-s.length}function hf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const S0={type:0,value:""},C0=/[a-zA-Z0-9_]/;function A0(t){if(!t)return[[]];if(t==="/")return[[S0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:C0.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function k0(t,e,n){const s=I0(A0(t.path),n),r=ye(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function R0(t,e){const n=[],s=new Map;e=pf({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,f){const g=!f,y=N0(u);y.aliasOf=f&&f.record;const _=pf(e,u),T=[y];if("alias"in u){const q=typeof u.alias=="string"?[u.alias]:u.alias;for(const F of q)T.push(ye({},y,{components:f?f.record.components:y.components,path:F,aliasOf:f?f.record:y}))}let R,P;for(const q of T){const{path:F}=q;if(h&&F[0]!=="/"){const oe=h.record.path,Te=oe[oe.length-1]==="/"?"":"/";q.path=h.record.path+(F&&Te+F)}if(R=k0(q,h,_),f?f.alias.push(R):(P=P||R,P!==R&&P.alias.push(R),g&&u.name&&!df(R)&&o(u.name)),y.children){const oe=y.children;for(let Te=0;Te<oe.length;Te++)i(oe[Te],R,f&&f.children[Te])}f=f||R,(R.record.components&&Object.keys(R.record.components).length||R.record.name||R.record.redirect)&&c(R)}return P?()=>{o(P)}:$r}function o(u){if(Qp(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&b0(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Jp(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!df(u)&&s.set(u.record.name,u)}function l(u,h){let f,g={},y,_;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw Ys(1,{location:u});_=f.record.name,g=ye(ff(h.params,f.keys.filter(P=>!P.optional).map(P=>P.name)),u.params&&ff(u.params,f.keys.map(P=>P.name))),y=f.stringify(g)}else if("path"in u)y=u.path,f=n.find(P=>P.re.test(y)),f&&(g=f.parse(y),_=f.record.name);else{if(f=h.name?s.get(h.name):n.find(P=>P.re.test(h.path)),!f)throw Ys(1,{location:u,currentLocation:h});_=f.record.name,g=ye({},h.params,u.params),y=f.stringify(g)}const T=[];let R=f;for(;R;)T.unshift(R.record),R=R.parent;return{name:_,path:y,params:g,matched:T,meta:P0(T)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function ff(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function N0(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:D0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function D0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function df(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function P0(t){return t.reduce((e,n)=>ye(e,n.meta),{})}function pf(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Jp(t,e){return e.children.some(n=>n===t||Jp(t,n))}const Xp=/#/g,O0=/&/g,x0=/\//g,M0=/=/g,L0=/\?/g,Zp=/\+/g,F0=/%5B/g,U0=/%5D/g,eg=/%5E/g,$0=/%60/g,tg=/%7B/g,V0=/%7C/g,ng=/%7D/g,B0=/%20/g;function tu(t){return encodeURI(""+t).replace(V0,"|").replace(F0,"[").replace(U0,"]")}function j0(t){return tu(t).replace(tg,"{").replace(ng,"}").replace(eg,"^")}function Qc(t){return tu(t).replace(Zp,"%2B").replace(B0,"+").replace(Xp,"%23").replace(O0,"%26").replace($0,"`").replace(tg,"{").replace(ng,"}").replace(eg,"^")}function z0(t){return Qc(t).replace(M0,"%3D")}function q0(t){return tu(t).replace(Xp,"%23").replace(L0,"%3F")}function H0(t){return t==null?"":q0(t).replace(x0,"%2F")}function Ao(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function K0(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Zp," "),o=i.indexOf("="),a=Ao(o<0?i:i.slice(0,o)),c=o<0?null:Ao(i.slice(o+1));if(a in e){let l=e[a];xt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function gf(t){let e="";for(let n in t){const s=t[n];if(n=z0(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(xt(s)?s.map(i=>i&&Qc(i)):[s&&Qc(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function W0(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=xt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const G0=Symbol(""),mf=Symbol(""),nu=Symbol(""),sg=Symbol(""),Yc=Symbol("");function br(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Rn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Ys(4,{from:n,to:e})):h instanceof Error?a(h):_0(h)?a(Ys(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function hc(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Q0(a)){const l=(a.__vccOpts||a)[e];l&&r.push(Rn(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=t0(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&Rn(f,n,s,i,o)()}))}}return r}function Q0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function yf(t){const e=Gt(nu),n=Gt(sg),s=dt(()=>e.resolve(H(t.to))),r=dt(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Qs.bind(null,u));if(f>-1)return f;const g=vf(c[l-2]);return l>1&&vf(u)===g&&h[h.length-1].path!==g?h.findIndex(Qs.bind(null,c[l-2])):f}),i=dt(()=>r.value>-1&&Z0(n.params,s.value.params)),o=dt(()=>r.value>-1&&r.value===n.matched.length-1&&Wp(n.params,s.value.params));function a(c={}){return X0(c)?e[H(t.replace)?"replace":"push"](H(t.to)).catch($r):Promise.resolve()}return{route:s,href:dt(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const Y0=Cp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:yf,setup(t,{slots:e}){const n=lr(yf(t)),{options:s}=Gt(nu),r=dt(()=>({[_f(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[_f(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:jp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),J0=Y0;function X0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Z0(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!xt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function vf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const _f=(t,e,n)=>t??e??n,eE=Cp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Gt(Yc),r=dt(()=>t.route||s.value),i=Gt(mf,0),o=dt(()=>{let l=H(i);const{matched:u}=r.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=dt(()=>r.value.matched[o.value]);co(mf,dt(()=>o.value+1)),co(G0,a),co(Yc,r);const c=Ie();return Ms(()=>[c.value,a.value,t.name],([l,u,h],[f,g,y])=>{u&&(u.instances[h]=l,g&&g!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!Qs(u,g)||!f)&&(u.enterCallbacks[h]||[]).forEach(_=>_(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return wf(n.default,{Component:f,route:l});const g=h.props[u],y=g?g===!0?l.params:typeof g=="function"?g(l):g:null,T=jp(f,ye({},y,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return wf(n.default,{Component:T,route:l})||T}}});function wf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const uo=eE;function tE(t){const e=R0(t.routes,t),n=t.parseQuery||K0,s=t.stringifyQuery||gf,r=t.history,i=br(),o=br(),a=br(),c=u_(Sn);let l=Sn;As&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=lc.bind(null,E=>""+E),h=lc.bind(null,H0),f=lc.bind(null,Ao);function g(E,L){let D,V;return Qp(E)?(D=e.getRecordMatcher(E),V=L):V=E,e.addRoute(V,D)}function y(E){const L=e.getRecordMatcher(E);L&&e.removeRoute(L)}function _(){return e.getRoutes().map(E=>E.record)}function T(E){return!!e.getRecordMatcher(E)}function R(E,L){if(L=ye({},L||c.value),typeof E=="string"){const m=uc(n,E,L.path),w=e.resolve({path:m.path},L),b=r.createHref(m.fullPath);return ye(m,w,{params:f(w.params),hash:Ao(m.hash),redirectedFrom:void 0,href:b})}let D;if("path"in E)D=ye({},E,{path:uc(n,E.path,L.path).path});else{const m=ye({},E.params);for(const w in m)m[w]==null&&delete m[w];D=ye({},E,{params:h(m)}),L.params=h(L.params)}const V=e.resolve(D,L),ge=E.hash||"";V.params=u(f(V.params));const d=r0(s,ye({},E,{hash:j0(ge),path:V.path})),p=r.createHref(d);return ye({fullPath:d,hash:ge,query:s===gf?W0(E.query):E.query||{}},V,{redirectedFrom:void 0,href:p})}function P(E){return typeof E=="string"?uc(n,E,c.value.path):ye({},E)}function q(E,L){if(l!==E)return Ys(8,{from:L,to:E})}function F(E){return Pe(E)}function oe(E){return F(ye(P(E),{replace:!0}))}function Te(E){const L=E.matched[E.matched.length-1];if(L&&L.redirect){const{redirect:D}=L;let V=typeof D=="function"?D(E):D;return typeof V=="string"&&(V=V.includes("?")||V.includes("#")?V=P(V):{path:V},V.params={}),ye({query:E.query,hash:E.hash,params:"path"in V?{}:E.params},V)}}function Pe(E,L){const D=l=R(E),V=c.value,ge=E.state,d=E.force,p=E.replace===!0,m=Te(D);if(m)return Pe(ye(P(m),{state:typeof m=="object"?ye({},ge,m.state):ge,force:d,replace:p}),L||D);const w=D;w.redirectedFrom=L;let b;return!d&&i0(s,V,D)&&(b=Ys(16,{to:w,from:V}),Ut(V,V,!0,!1)),(b?Promise.resolve(b):Re(w,V)).catch(S=>sn(S)?sn(S,2)?S:Tn(S):pe(S,w,V)).then(S=>{if(S){if(sn(S,2))return Pe(ye({replace:p},P(S.to),{state:typeof S.to=="object"?ye({},ge,S.to.state):ge,force:d}),L||w)}else S=vt(w,V,!0,p,ge);return Ye(w,V,S),S})}function se(E,L){const D=q(E,L);return D?Promise.reject(D):Promise.resolve()}function ee(E){const L=Es.values().next().value;return L&&typeof L.runWithContext=="function"?L.runWithContext(E):E()}function Re(E,L){let D;const[V,ge,d]=nE(E,L);D=hc(V.reverse(),"beforeRouteLeave",E,L);for(const m of V)m.leaveGuards.forEach(w=>{D.push(Rn(w,E,L))});const p=se.bind(null,E,L);return D.push(p),Je(D).then(()=>{D=[];for(const m of i.list())D.push(Rn(m,E,L));return D.push(p),Je(D)}).then(()=>{D=hc(ge,"beforeRouteUpdate",E,L);for(const m of ge)m.updateGuards.forEach(w=>{D.push(Rn(w,E,L))});return D.push(p),Je(D)}).then(()=>{D=[];for(const m of E.matched)if(m.beforeEnter&&!L.matched.includes(m))if(xt(m.beforeEnter))for(const w of m.beforeEnter)D.push(Rn(w,E,L));else D.push(Rn(m.beforeEnter,E,L));return D.push(p),Je(D)}).then(()=>(E.matched.forEach(m=>m.enterCallbacks={}),D=hc(d,"beforeRouteEnter",E,L),D.push(p),Je(D))).then(()=>{D=[];for(const m of o.list())D.push(Rn(m,E,L));return D.push(p),Je(D)}).catch(m=>sn(m,8)?m:Promise.reject(m))}function Ye(E,L,D){for(const V of a.list())ee(()=>V(E,L,D))}function vt(E,L,D,V,ge){const d=q(E,L);if(d)return d;const p=L===Sn,m=As?history.state:{};D&&(V||p?r.replace(E.fullPath,ye({scroll:p&&m&&m.scroll},ge)):r.push(E.fullPath,ge)),c.value=E,Ut(E,L,D,p),Tn()}let bt;function Qn(){bt||(bt=r.listen((E,L,D)=>{if(!ji.listening)return;const V=R(E),ge=Te(V);if(ge){Pe(ye(ge,{replace:!0}),V).catch($r);return}l=V;const d=c.value;As&&d0(af(d.fullPath,D.delta),ga()),Re(V,d).catch(p=>sn(p,12)?p:sn(p,2)?(Pe(p.to,V).then(m=>{sn(m,20)&&!D.delta&&D.type===Zr.pop&&r.go(-1,!1)}).catch($r),Promise.reject()):(D.delta&&r.go(-D.delta,!1),pe(p,V,d))).then(p=>{p=p||vt(V,d,!1),p&&(D.delta&&!sn(p,8)?r.go(-D.delta,!1):D.type===Zr.pop&&sn(p,20)&&r.go(-1,!1)),Ye(V,d,p)}).catch($r)}))}let St=br(),fe=br(),we;function pe(E,L,D){Tn(E);const V=fe.list();return V.length?V.forEach(ge=>ge(E,L,D)):console.error(E),Promise.reject(E)}function nn(){return we&&c.value!==Sn?Promise.resolve():new Promise((E,L)=>{St.add([E,L])})}function Tn(E){return we||(we=!E,Qn(),St.list().forEach(([L,D])=>E?D(E):L()),St.reset()),E}function Ut(E,L,D,V){const{scrollBehavior:ge}=t;if(!As||!ge)return Promise.resolve();const d=!D&&p0(af(E.fullPath,0))||(V||!D)&&history.state&&history.state.scroll||null;return Wl().then(()=>ge(E,L,d)).then(p=>p&&f0(p)).catch(p=>pe(p,E,L))}const ht=E=>r.go(E);let ws;const Es=new Set,ji={currentRoute:c,listening:!0,addRoute:g,removeRoute:y,hasRoute:T,getRoutes:_,resolve:R,options:t,push:F,replace:oe,go:ht,back:()=>ht(-1),forward:()=>ht(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:fe.add,isReady:nn,install(E){const L=this;E.component("RouterLink",J0),E.component("RouterView",uo),E.config.globalProperties.$router=L,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>H(c)}),As&&!ws&&c.value===Sn&&(ws=!0,F(r.location).catch(ge=>{}));const D={};for(const ge in Sn)D[ge]=dt(()=>c.value[ge]);E.provide(nu,L),E.provide(sg,lr(D)),E.provide(Yc,c);const V=E.unmount;Es.add(E),E.unmount=function(){Es.delete(E),Es.size<1&&(l=Sn,bt&&bt(),bt=null,c.value=Sn,ws=!1,we=!1),V()}}};function Je(E){return E.reduce((L,D)=>L.then(()=>ee(D)),Promise.resolve())}return ji}function nE(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Qs(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Qs(l,c))||r.push(c))}return[n,s,r]}/**
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
 */const rg=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},sE=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ig={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(f=64)),s.push(n[u],n[h],n[f],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(rg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):sE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new rE;const f=i<<2|a>>4;if(s.push(f),l!==64){const g=a<<4&240|l>>2;if(s.push(g),h!==64){const y=l<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class rE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const iE=function(t){const e=rg(t);return ig.encodeByteArray(e,!0)},ko=function(t){return iE(t).replace(/\./g,"")},og=function(t){try{return ig.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function oE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const aE=()=>oE().__FIREBASE_DEFAULTS__,cE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},lE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&og(t[1]);return e&&JSON.parse(e)},su=()=>{try{return aE()||cE()||lE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ag=t=>{var e,n;return(n=(e=su())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},uE=t=>{const e=ag(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},cg=()=>{var t;return(t=su())===null||t===void 0?void 0:t.config},lg=t=>{var e;return(e=su())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class hE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function fE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ko(JSON.stringify(n)),ko(JSON.stringify(o)),a].join(".")}/**
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
 */function at(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(at())}function pE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function gE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mE(){const t=at();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function yE(){try{return typeof indexedDB=="object"}catch{return!1}}function vE(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const _E="FirebaseError";class En extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=_E,Object.setPrototypeOf(this,En.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_i.prototype.create)}}class _i{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?wE(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new En(r,a,s)}}function wE(t,e){return t.replace(EE,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const EE=/\{\$([^}]+)}/g;function IE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ro(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Ef(i)&&Ef(o)){if(!Ro(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Ef(t){return t!==null&&typeof t=="object"}/**
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
 */function wi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Rr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Nr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function TE(t,e){const n=new bE(t,e);return n.subscribe.bind(n)}class bE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");SE(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=fc),r.error===void 0&&(r.error=fc),r.complete===void 0&&(r.complete=fc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function SE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function fc(){}/**
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
 */function Ve(t){return t&&t._delegate?t._delegate:t}class us{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Xn="[DEFAULT]";/**
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
 */class CE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new hE;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kE(e))try{this.getOrInitializeService({instanceIdentifier:Xn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Xn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xn){return this.instances.has(e)}getOptions(e=Xn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:AE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Xn){return this.component?this.component.multipleInstances?e:Xn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function AE(t){return t===Xn?void 0:t}function kE(t){return t.instantiationMode==="EAGER"}/**
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
 */class RE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new CE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const NE={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},DE=ue.INFO,PE={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},OE=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=PE[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ru{constructor(e){this.name=e,this._logLevel=DE,this._logHandler=OE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?NE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const xE=(t,e)=>e.some(n=>t instanceof n);let If,Tf;function ME(){return If||(If=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function LE(){return Tf||(Tf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ug=new WeakMap,Jc=new WeakMap,hg=new WeakMap,dc=new WeakMap,iu=new WeakMap;function FE(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Fn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ug.set(n,t)}).catch(()=>{}),iu.set(e,t),e}function UE(t){if(Jc.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Jc.set(t,e)}let Xc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Jc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||hg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $E(t){Xc=t(Xc)}function VE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(pc(this),e,...n);return hg.set(s,e.sort?e.sort():[e]),Fn(s)}:LE().includes(t)?function(...e){return t.apply(pc(this),e),Fn(ug.get(this))}:function(...e){return Fn(t.apply(pc(this),e))}}function BE(t){return typeof t=="function"?VE(t):(t instanceof IDBTransaction&&UE(t),xE(t,ME())?new Proxy(t,Xc):t)}function Fn(t){if(t instanceof IDBRequest)return FE(t);if(dc.has(t))return dc.get(t);const e=BE(t);return e!==t&&(dc.set(t,e),iu.set(e,t)),e}const pc=t=>iu.get(t);function jE(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Fn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Fn(o.result),c.oldVersion,c.newVersion,Fn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const zE=["get","getKey","getAll","getAllKeys","count"],qE=["put","add","delete","clear"],gc=new Map;function bf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(gc.get(e))return gc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=qE.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||zE.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return gc.set(e,i),i}$E(t=>({...t,get:(e,n,s)=>bf(e,n)||t.get(e,n,s),has:(e,n)=>!!bf(e,n)||t.has(e,n)}));/**
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
 */class HE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(KE(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function KE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zc="@firebase/app",Sf="0.9.13";/**
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
 */const hs=new ru("@firebase/app"),WE="@firebase/app-compat",GE="@firebase/analytics-compat",QE="@firebase/analytics",YE="@firebase/app-check-compat",JE="@firebase/app-check",XE="@firebase/auth",ZE="@firebase/auth-compat",eI="@firebase/database",tI="@firebase/database-compat",nI="@firebase/functions",sI="@firebase/functions-compat",rI="@firebase/installations",iI="@firebase/installations-compat",oI="@firebase/messaging",aI="@firebase/messaging-compat",cI="@firebase/performance",lI="@firebase/performance-compat",uI="@firebase/remote-config",hI="@firebase/remote-config-compat",fI="@firebase/storage",dI="@firebase/storage-compat",pI="@firebase/firestore",gI="@firebase/firestore-compat",mI="firebase",yI="9.23.0";/**
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
 */const el="[DEFAULT]",vI={[Zc]:"fire-core",[WE]:"fire-core-compat",[QE]:"fire-analytics",[GE]:"fire-analytics-compat",[JE]:"fire-app-check",[YE]:"fire-app-check-compat",[XE]:"fire-auth",[ZE]:"fire-auth-compat",[eI]:"fire-rtdb",[tI]:"fire-rtdb-compat",[nI]:"fire-fn",[sI]:"fire-fn-compat",[rI]:"fire-iid",[iI]:"fire-iid-compat",[oI]:"fire-fcm",[aI]:"fire-fcm-compat",[cI]:"fire-perf",[lI]:"fire-perf-compat",[uI]:"fire-rc",[hI]:"fire-rc-compat",[fI]:"fire-gcs",[dI]:"fire-gcs-compat",[pI]:"fire-fst",[gI]:"fire-fst-compat","fire-js":"fire-js",[mI]:"fire-js-all"};/**
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
 */const No=new Map,tl=new Map;function _I(t,e){try{t.container.addComponent(e)}catch(n){hs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Js(t){const e=t.name;if(tl.has(e))return hs.debug(`There were multiple attempts to register component ${e}.`),!1;tl.set(e,t);for(const n of No.values())_I(n,t);return!0}function ou(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const wI={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Un=new _i("app","Firebase",wI);/**
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
 */class EI{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new us("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Un.create("app-deleted",{appName:this._name})}}/**
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
 */const ur=yI;function fg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:el,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Un.create("bad-app-name",{appName:String(r)});if(n||(n=cg()),!n)throw Un.create("no-options");const i=No.get(r);if(i){if(Ro(n,i.options)&&Ro(s,i.config))return i;throw Un.create("duplicate-app",{appName:r})}const o=new RE(r);for(const c of tl.values())o.addComponent(c);const a=new EI(n,s,o);return No.set(r,a),a}function dg(t=el){const e=No.get(t);if(!e&&t===el&&cg())return fg();if(!e)throw Un.create("no-app",{appName:t});return e}function $n(t,e,n){var s;let r=(s=vI[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),hs.warn(a.join(" "));return}Js(new us(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const II="firebase-heartbeat-database",TI=1,ei="firebase-heartbeat-store";let mc=null;function pg(){return mc||(mc=jE(II,TI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ei)}}}).catch(t=>{throw Un.create("idb-open",{originalErrorMessage:t.message})})),mc}async function bI(t){try{return await(await pg()).transaction(ei).objectStore(ei).get(gg(t))}catch(e){if(e instanceof En)hs.warn(e.message);else{const n=Un.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});hs.warn(n.message)}}}async function Cf(t,e){try{const s=(await pg()).transaction(ei,"readwrite");await s.objectStore(ei).put(e,gg(t)),await s.done}catch(n){if(n instanceof En)hs.warn(n.message);else{const s=Un.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});hs.warn(s.message)}}}function gg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const SI=1024,CI=30*24*60*60*1e3;class AI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new RI(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Af();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=CI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Af(),{heartbeatsToSend:n,unsentEntries:s}=kI(this._heartbeatsCache.heartbeats),r=ko(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Af(){return new Date().toISOString().substring(0,10)}function kI(t,e=SI){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),kf(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),kf(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class RI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yE()?vE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await bI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Cf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Cf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function kf(t){return ko(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function NI(t){Js(new us("platform-logger",e=>new HE(e),"PRIVATE")),Js(new us("heartbeat",e=>new AI(e),"PRIVATE")),$n(Zc,Sf,t),$n(Zc,Sf,"esm2017"),$n("fire-js","")}NI("");function au(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function mg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const DI=mg,yg=new _i("auth","Firebase",mg());/**
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
 */const Do=new ru("@firebase/auth");function PI(t,...e){Do.logLevel<=ue.WARN&&Do.warn(`Auth (${ur}): ${t}`,...e)}function ho(t,...e){Do.logLevel<=ue.ERROR&&Do.error(`Auth (${ur}): ${t}`,...e)}/**
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
 */function Mt(t,...e){throw cu(t,...e)}function Qt(t,...e){return cu(t,...e)}function OI(t,e,n){const s=Object.assign(Object.assign({},DI()),{[e]:n});return new _i("auth","Firebase",s).create(e,{appName:t.name})}function cu(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return yg.create(t,...e)}function W(t,e,...n){if(!t)throw cu(e,...n)}function an(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ho(e),new Error(e)}function pn(t,e){t||an(e)}/**
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
 */function nl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function xI(){return Rf()==="http:"||Rf()==="https:"}function Rf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function MI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xI()||pE()||"connection"in navigator)?navigator.onLine:!0}function LI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ei{constructor(e,n){this.shortDelay=e,this.longDelay=n,pn(n>e,"Short delay should be less than long delay!"),this.isMobile=dE()||gE()}get(){return MI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function lu(t,e){pn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class vg{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;an("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;an("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;an("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const FI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const UI=new Ei(3e4,6e4);function hr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function fr(t,e,n,s,r={}){return _g(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=wi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),vg.fetch()(wg(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function _g(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},FI),e);try{const r=new $I(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Qi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Qi(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Qi(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw OI(t,u,l);Mt(t,u)}}catch(r){if(r instanceof En)throw r;Mt(t,"network-request-failed",{message:String(r)})}}async function Ii(t,e,n,s,r={}){const i=await fr(t,e,n,s,r);return"mfaPendingCredential"in i&&Mt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function wg(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?lu(t.config,r):`${t.config.apiScheme}://${r}`}class $I{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Qt(this.auth,"network-request-failed")),UI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Qi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Qt(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function VI(t,e){return fr(t,"POST","/v1/accounts:delete",e)}async function BI(t,e){return fr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Br(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jI(t,e=!1){const n=Ve(t),s=await n.getIdToken(e),r=uu(s);W(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Br(yc(r.auth_time)),issuedAtTime:Br(yc(r.iat)),expirationTime:Br(yc(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function yc(t){return Number(t)*1e3}function uu(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ho("JWT malformed, contained fewer than 3 sections"),null;try{const r=og(n);return r?JSON.parse(r):(ho("Failed to decode base64 JWT payload"),null)}catch(r){return ho("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function zI(t){const e=uu(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ti(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof En&&qI(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function qI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class HI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Eg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Br(this.lastLoginAt),this.creationTime=Br(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Po(t){var e;const n=t.auth,s=await t.getIdToken(),r=await ti(t,BI(n,{idToken:s}));W(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?GI(i.providerUserInfo):[],a=WI(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Eg(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function KI(t){const e=Ve(t);await Po(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function WI(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function GI(t){return t.map(e=>{var{providerId:n}=e,s=au(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function QI(t,e){const n=await _g(t,{},async()=>{const s=wi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=wg(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",vg.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ni{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return W(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await QI(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new ni;return s&&(W(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(W(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(W(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ni,this.toJSON())}_performRefresh(){return an("not implemented")}}/**
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
 */function Cn(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class as{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=au(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new HI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Eg(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ti(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return jI(this,e)}reload(){return KI(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new as(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Po(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ti(this,VI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,R=(l=n.createdAt)!==null&&l!==void 0?l:void 0,P=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:q,emailVerified:F,isAnonymous:oe,providerData:Te,stsTokenManager:Pe}=n;W(q&&Pe,e,"internal-error");const se=ni.fromJSON(this.name,Pe);W(typeof q=="string",e,"internal-error"),Cn(h,e.name),Cn(f,e.name),W(typeof F=="boolean",e,"internal-error"),W(typeof oe=="boolean",e,"internal-error"),Cn(g,e.name),Cn(y,e.name),Cn(_,e.name),Cn(T,e.name),Cn(R,e.name),Cn(P,e.name);const ee=new as({uid:q,auth:e,email:f,emailVerified:F,displayName:h,isAnonymous:oe,photoURL:y,phoneNumber:g,tenantId:_,stsTokenManager:se,createdAt:R,lastLoginAt:P});return Te&&Array.isArray(Te)&&(ee.providerData=Te.map(Re=>Object.assign({},Re))),T&&(ee._redirectEventId=T),ee}static async _fromIdTokenResponse(e,n,s=!1){const r=new ni;r.updateFromServerResponse(n);const i=new as({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Po(i),i}}/**
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
 */const Nf=new Map;function cn(t){pn(t instanceof Function,"Expected a class definition");let e=Nf.get(t);return e?(pn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Nf.set(t,e),e)}/**
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
 */class Ig{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ig.type="NONE";const Df=Ig;/**
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
 */function fo(t,e,n){return`firebase:${t}:${e}:${n}`}class Fs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=fo(this.userKey,r.apiKey,i),this.fullPersistenceKey=fo("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?as._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Fs(cn(Df),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||cn(Df);const o=fo(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=as._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Fs(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Fs(i,e,s))}}/**
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
 */function Pf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Sg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Tg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ag(e))return"Blackberry";if(kg(e))return"Webos";if(hu(e))return"Safari";if((e.includes("chrome/")||bg(e))&&!e.includes("edge/"))return"Chrome";if(Cg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Tg(t=at()){return/firefox\//i.test(t)}function hu(t=at()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function bg(t=at()){return/crios\//i.test(t)}function Sg(t=at()){return/iemobile/i.test(t)}function Cg(t=at()){return/android/i.test(t)}function Ag(t=at()){return/blackberry/i.test(t)}function kg(t=at()){return/webos/i.test(t)}function ma(t=at()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function YI(t=at()){var e;return ma(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function JI(){return mE()&&document.documentMode===10}function Rg(t=at()){return ma(t)||Cg(t)||kg(t)||Ag(t)||/windows phone/i.test(t)||Sg(t)}function XI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Ng(t,e=[]){let n;switch(t){case"Browser":n=Pf(at());break;case"Worker":n=`${Pf(at())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ur}/${s}`}async function Dg(t,e){return fr(t,"GET","/v2/recaptchaConfig",hr(t,e))}function Of(t){return t!==void 0&&t.enterprise!==void 0}class Pg{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function ZI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Og(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Qt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",ZI().appendChild(s)})}function eT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const tT="https://www.google.com/recaptcha/enterprise.js?render=",nT="recaptcha-enterprise",sT="NO_RECAPTCHA";class xg{constructor(e){this.type=nT,this.auth=dr(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Dg(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Pg(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;Of(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(sT)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&Of(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Og(tT+a).then(()=>{r(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Oo(t,e,n,s=!1){const r=new xg(t);let i;try{i=await r.verify(n)}catch{i=await r.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class rT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class iT{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xf(this),this.idTokenSubscription=new xf(this),this.beforeStateQueue=new rT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=cn(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Fs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Po(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=LI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ve(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(cn(e))})}async initializeRecaptchaConfig(){const e=await Dg(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Pg(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new xg(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _i("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&cn(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await Fs.create(this,[cn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return W(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ng(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&PI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function dr(t){return Ve(t)}class xf{constructor(e){this.auth=e,this.observer=null,this.addObserver=TE(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function oT(t,e){const n=ou(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Ro(i,e??{}))return r;Mt(r,"already-initialized")}return n.initialize({options:e})}function aT(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(cn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function cT(t,e,n){const s=dr(t);W(s._canInitEmulator,s,"emulator-config-failed"),W(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=Mg(e),{host:o,port:a}=lT(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||uT()}function Mg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function lT(t){const e=Mg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Mf(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Mf(o)}}}function Mf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function uT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class fu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return an("not implemented")}_getIdTokenResponse(e){return an("not implemented")}_linkToIdToken(e,n){return an("not implemented")}_getReauthenticationResolver(e){return an("not implemented")}}async function hT(t,e){return fr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function vc(t,e){return Ii(t,"POST","/v1/accounts:signInWithPassword",hr(t,e))}/**
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
 */async function fT(t,e){return Ii(t,"POST","/v1/accounts:signInWithEmailLink",hr(t,e))}async function dT(t,e){return Ii(t,"POST","/v1/accounts:signInWithEmailLink",hr(t,e))}/**
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
 */class si extends fu{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new si(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new si(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const r=await Oo(e,s,"signInWithPassword");return vc(e,r)}else return vc(e,s).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await Oo(e,s,"signInWithPassword");return vc(e,i)}else return Promise.reject(r)});case"emailLink":return fT(e,{email:this._email,oobCode:this._password});default:Mt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return hT(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return dT(e,{idToken:n,email:this._email,oobCode:this._password});default:Mt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Us(t,e){return Ii(t,"POST","/v1/accounts:signInWithIdp",hr(t,e))}/**
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
 */const pT="http://localhost";class fs extends fu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new fs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Mt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=au(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new fs(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Us(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Us(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Us(e,n)}buildRequest(){const e={requestUri:pT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=wi(n)}return e}}/**
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
 */function gT(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mT(t){const e=Rr(Nr(t)).link,n=e?Rr(Nr(e)).deep_link_id:null,s=Rr(Nr(t)).deep_link_id;return(s?Rr(Nr(s)).link:null)||s||n||e||t}class du{constructor(e){var n,s,r,i,o,a;const c=Rr(Nr(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=gT((r=c.mode)!==null&&r!==void 0?r:null);W(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=mT(e);try{return new du(n)}catch{return null}}}/**
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
 */class pr{constructor(){this.providerId=pr.PROVIDER_ID}static credential(e,n){return si._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=du.parseLink(n);return W(s,"argument-error"),si._fromEmailAndCode(e,s.code,s.tenantId)}}pr.PROVIDER_ID="password";pr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";pr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Lg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ti extends Lg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Nn extends Ti{constructor(){super("facebook.com")}static credential(e){return fs._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nn.PROVIDER_ID="facebook.com";/**
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
 */class Dn extends Ti{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return fs._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Dn.credential(n,s)}catch{return null}}}Dn.GOOGLE_SIGN_IN_METHOD="google.com";Dn.PROVIDER_ID="google.com";/**
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
 */class Pn extends Ti{constructor(){super("github.com")}static credential(e){return fs._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pn.credential(e.oauthAccessToken)}catch{return null}}}Pn.GITHUB_SIGN_IN_METHOD="github.com";Pn.PROVIDER_ID="github.com";/**
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
 */class On extends Ti{constructor(){super("twitter.com")}static credential(e,n){return fs._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return On.credential(n,s)}catch{return null}}}On.TWITTER_SIGN_IN_METHOD="twitter.com";On.PROVIDER_ID="twitter.com";/**
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
 */async function _c(t,e){return Ii(t,"POST","/v1/accounts:signUp",hr(t,e))}/**
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
 */class ds{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await as._fromIdTokenResponse(e,s,r),o=Lf(s);return new ds({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Lf(s);return new ds({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Lf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class xo extends En{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,xo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new xo(e,n,s,r)}}function Fg(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?xo._fromErrorAndOperation(t,i,e,s):i})}async function yT(t,e,n=!1){const s=await ti(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ds._forOperation(t,"link",s)}/**
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
 */async function vT(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await ti(t,Fg(s,r,e,t),n);W(i.idToken,s,"internal-error");const o=uu(i.idToken);W(o,s,"internal-error");const{sub:a}=o;return W(t.uid===a,s,"user-mismatch"),ds._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Mt(s,"user-mismatch"),i}}/**
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
 */async function Ug(t,e,n=!1){const s="signIn",r=await Fg(t,s,e),i=await ds._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function _T(t,e){return Ug(dr(t),e)}async function wT(t,e,n){var s;const r=dr(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((s=r._getRecaptchaConfig())===null||s===void 0)&&s.emailPasswordEnabled){const l=await Oo(r,i,"signUpPassword");o=_c(r,l)}else o=_c(r,i).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Oo(r,i,"signUpPassword");return _c(r,u)}else return Promise.reject(l)});const a=await o.catch(l=>Promise.reject(l)),c=await ds._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function ET(t,e,n){return _T(Ve(t),pr.credential(e,n))}function IT(t,e,n,s){return Ve(t).onIdTokenChanged(e,n,s)}function TT(t,e,n){return Ve(t).beforeAuthStateChanged(e,n)}function bT(t,e,n,s){return Ve(t).onAuthStateChanged(e,n,s)}function ST(t){return Ve(t).signOut()}const Mo="__sak";/**
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
 */class $g{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Mo,"1"),this.storage.removeItem(Mo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function CT(){const t=at();return hu(t)||ma(t)}const AT=1e3,kT=10;class Vg extends $g{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=CT()&&XI(),this.fallbackToPolling=Rg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);JI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,kT):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},AT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Vg.type="LOCAL";const RT=Vg;/**
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
 */class Bg extends $g{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Bg.type="SESSION";const jg=Bg;/**
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
 */function NT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ya{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new ya(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await NT(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ya.receivers=[];/**
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
 */function pu(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class DT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=pu("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Yt(){return window}function PT(t){Yt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(){return typeof Yt().WorkerGlobalScope<"u"&&typeof Yt().importScripts=="function"}async function OT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function MT(){return zg()?self:null}/**
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
 */const qg="firebaseLocalStorageDb",LT=1,Lo="firebaseLocalStorage",Hg="fbase_key";class bi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function va(t,e){return t.transaction([Lo],e?"readwrite":"readonly").objectStore(Lo)}function FT(){const t=indexedDB.deleteDatabase(qg);return new bi(t).toPromise()}function sl(){const t=indexedDB.open(qg,LT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Lo,{keyPath:Hg})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Lo)?e(s):(s.close(),await FT(),e(await sl()))})})}async function Ff(t,e,n){const s=va(t,!0).put({[Hg]:e,value:n});return new bi(s).toPromise()}async function UT(t,e){const n=va(t,!1).get(e),s=await new bi(n).toPromise();return s===void 0?null:s.value}function Uf(t,e){const n=va(t,!0).delete(e);return new bi(n).toPromise()}const $T=800,VT=3;class Kg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>VT)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ya._getInstance(MT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await OT(),!this.activeServiceWorker)return;this.sender=new DT(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sl();return await Ff(e,Mo,"1"),await Uf(e,Mo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ff(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>UT(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Uf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=va(r,!1).getAll();return new bi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$T)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Kg.type="LOCAL";const BT=Kg;new Ei(3e4,6e4);/**
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
 */function jT(t,e){return e?cn(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class gu extends fu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Us(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Us(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Us(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function zT(t){return Ug(t.auth,new gu(t),t.bypassAuthState)}function qT(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),vT(n,new gu(t),t.bypassAuthState)}async function HT(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),yT(n,new gu(t),t.bypassAuthState)}/**
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
 */class Wg{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zT;case"linkViaPopup":case"linkViaRedirect":return HT;case"reauthViaPopup":case"reauthViaRedirect":return qT;default:Mt(this.auth,"internal-error")}}resolve(e){pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const KT=new Ei(2e3,1e4);class Ns extends Wg{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Ns.currentPopupAction&&Ns.currentPopupAction.cancel(),Ns.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){pn(this.filter.length===1,"Popup operations only handle one event");const e=pu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ns.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,KT.get())};e()}}Ns.currentPopupAction=null;/**
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
 */const WT="pendingRedirect",po=new Map;class GT extends Wg{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=po.get(this.auth._key());if(!e){try{const s=await QT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}po.set(this.auth._key(),e)}return this.bypassAuthState||po.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function QT(t,e){const n=XT(e),s=JT(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function YT(t,e){po.set(t._key(),e)}function JT(t){return cn(t._redirectPersistence)}function XT(t){return fo(WT,t.config.apiKey,t.name)}async function ZT(t,e,n=!1){const s=dr(t),r=jT(s,e),o=await new GT(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const eb=10*60*1e3;class tb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!nb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Gg(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Qt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=eb&&this.cachedEventUids.clear(),this.cachedEventUids.has($f(e))}saveEventToCache(e){this.cachedEventUids.add($f(e)),this.lastProcessedEventTime=Date.now()}}function $f(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Gg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function nb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gg(t);default:return!1}}/**
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
 */async function sb(t,e={}){return fr(t,"GET","/v1/projects",e)}/**
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
 */const rb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ib=/^https?/;async function ob(t){if(t.config.emulator)return;const{authorizedDomains:e}=await sb(t);for(const n of e)try{if(ab(n))return}catch{}Mt(t,"unauthorized-domain")}function ab(t){const e=nl(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!ib.test(n))return!1;if(rb.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb=new Ei(3e4,6e4);function Vf(){const t=Yt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function lb(t){return new Promise((e,n)=>{var s,r,i;function o(){Vf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vf(),n(Qt(t,"network-request-failed"))},timeout:cb.get()})}if(!((r=(s=Yt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Yt().gapi)===null||i===void 0)&&i.load)o();else{const a=eT("iframefcb");return Yt()[a]=()=>{gapi.load?o():n(Qt(t,"network-request-failed"))},Og(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw go=null,e})}let go=null;function ub(t){return go=go||lb(t),go}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb=new Ei(5e3,15e3),fb="__/auth/iframe",db="emulator/auth/iframe",pb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mb(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?lu(e,db):`https://${t.config.authDomain}/${fb}`,s={apiKey:e.apiKey,appName:t.name,v:ur},r=gb.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${wi(s).slice(1)}`}async function yb(t){const e=await ub(t),n=Yt().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:mb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pb,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Qt(t,"network-request-failed"),a=Yt().setTimeout(()=>{i(o)},hb.get());function c(){Yt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_b=500,wb=600,Eb="_blank",Ib="http://localhost";class Bf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Tb(t,e,n,s=_b,r=wb){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},vb),{width:s.toString(),height:r.toString(),top:i,left:o}),l=at().toLowerCase();n&&(a=bg(l)?Eb:n),Tg(l)&&(e=e||Ib,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[g,y])=>`${f}${g}=${y},`,"");if(YI(l)&&a!=="_self")return bb(e||"",a),new Bf(null);const h=window.open(e||"",a,u);W(h,t,"popup-blocked");try{h.focus()}catch{}return new Bf(h)}function bb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Sb="__/auth/handler",Cb="emulator/auth/handler",Ab=encodeURIComponent("fac");async function jf(t,e,n,s,r,i){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ur,eventId:r};if(e instanceof Lg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",IE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Ti){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${Ab}=${encodeURIComponent(c)}`:"";return`${kb(t)}?${wi(a).slice(1)}${l}`}function kb({config:t}){return t.emulator?lu(t,Cb):`https://${t.authDomain}/${Sb}`}/**
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
 */const wc="webStorageSupport";class Rb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jg,this._completeRedirectFn=ZT,this._overrideRedirectResult=YT}async _openPopup(e,n,s,r){var i;pn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await jf(e,n,s,nl(),r);return Tb(e,o,pu())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await jf(e,n,s,nl(),r);return PT(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(pn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await yb(e),s=new tb(e);return n.register("authEvent",r=>(W(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(wc,{type:wc},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[wc];o!==void 0&&n(!!o),Mt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ob(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Rg()||hu()||ma()}}const Nb=Rb;var zf="@firebase/auth",qf="0.23.2";/**
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
 */class Db{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Pb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ob(t){Js(new us("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ng(t)},l=new iT(s,r,i,c);return aT(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Js(new us("auth-internal",e=>{const n=dr(e.getProvider("auth").getImmediate());return(s=>new Db(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),$n(zf,qf,Pb(t)),$n(zf,qf,"esm2017")}/**
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
 */const xb=5*60,Mb=lg("authIdTokenMaxAge")||xb;let Hf=null;const Lb=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Mb)return;const r=n==null?void 0:n.token;Hf!==r&&(Hf=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Fb(t=dg()){const e=ou(t,"auth");if(e.isInitialized())return e.getImmediate();const n=oT(t,{popupRedirectResolver:Nb,persistence:[BT,RT,jg]}),s=lg("authTokenSyncURL");if(s){const i=Lb(s);TT(n,i,()=>i(n.currentUser)),IT(n,o=>i(o))}const r=ag("auth");return r&&cT(n,`http://${r}`),n}Ob("Browser");var Ub=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O,mu=mu||{},Q=Ub||self;function _a(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Si(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function $b(t){return Object.prototype.hasOwnProperty.call(t,Ec)&&t[Ec]||(t[Ec]=++Vb)}var Ec="closure_uid_"+(1e9*Math.random()>>>0),Vb=0;function Bb(t,e,n){return t.call.apply(t.bind,arguments)}function jb(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function st(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?st=Bb:st=jb,st.apply(null,arguments)}function Yi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ke(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Hn(){this.s=this.s,this.o=this.o}var zb=0;Hn.prototype.s=!1;Hn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),zb!=0)&&$b(this)};Hn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Qg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function yu(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Kf(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(_a(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function rt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}rt.prototype.h=function(){this.defaultPrevented=!0};var qb=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Q.addEventListener("test",()=>{},e),Q.removeEventListener("test",()=>{},e)}catch{}return t}();function ri(t){return/^[\s\xa0]*$/.test(t)}function wa(){var t=Q.navigator;return t&&(t=t.userAgent)?t:""}function Ht(t){return wa().indexOf(t)!=-1}function vu(t){return vu[" "](t),t}vu[" "]=function(){};function Hb(t,e){var n=FS;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var Kb=Ht("Opera"),Xs=Ht("Trident")||Ht("MSIE"),Yg=Ht("Edge"),rl=Yg||Xs,Jg=Ht("Gecko")&&!(wa().toLowerCase().indexOf("webkit")!=-1&&!Ht("Edge"))&&!(Ht("Trident")||Ht("MSIE"))&&!Ht("Edge"),Wb=wa().toLowerCase().indexOf("webkit")!=-1&&!Ht("Edge");function Xg(){var t=Q.document;return t?t.documentMode:void 0}var il;e:{var Ic="",Tc=function(){var t=wa();if(Jg)return/rv:([^\);]+)(\)|;)/.exec(t);if(Yg)return/Edge\/([\d\.]+)/.exec(t);if(Xs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Wb)return/WebKit\/(\S+)/.exec(t);if(Kb)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Tc&&(Ic=Tc?Tc[1]:""),Xs){var bc=Xg();if(bc!=null&&bc>parseFloat(Ic)){il=String(bc);break e}}il=Ic}var ol;if(Q.document&&Xs){var Wf=Xg();ol=Wf||parseInt(il,10)||void 0}else ol=void 0;var Gb=ol;function ii(t,e){if(rt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Jg){e:{try{vu(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Qb[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ii.$.h.call(this)}}Ke(ii,rt);var Qb={2:"touch",3:"pen",4:"mouse"};ii.prototype.h=function(){ii.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ci="closure_listenable_"+(1e6*Math.random()|0),Yb=0;function Jb(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=r,this.key=++Yb,this.fa=this.ia=!1}function Ea(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function _u(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Xb(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Zg(t){const e={};for(const n in t)e[n]=t[n];return e}const Gf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function em(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Gf.length;i++)n=Gf[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Ia(t){this.src=t,this.g={},this.h=0}Ia.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=cl(t,e,s,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new Jb(e,this.src,i,!!s,r),e.ia=n,t.push(e)),e};function al(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Qg(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Ea(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function cl(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==s)return r}return-1}var wu="closure_lm_"+(1e6*Math.random()|0),Sc={};function tm(t,e,n,s,r){if(s&&s.once)return sm(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)tm(t,e[i],n,s,r);return null}return n=Tu(n),t&&t[Ci]?t.O(e,n,Si(s)?!!s.capture:!!s,r):nm(t,e,n,!1,s,r)}function nm(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Si(r)?!!r.capture:!!r,a=Iu(t);if(a||(t[wu]=a=new Ia(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=Zb(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)qb||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(im(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Zb(){function t(n){return e.call(t.src,t.listener,n)}const e=eS;return t}function sm(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)sm(t,e[i],n,s,r);return null}return n=Tu(n),t&&t[Ci]?t.P(e,n,Si(s)?!!s.capture:!!s,r):nm(t,e,n,!0,s,r)}function rm(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)rm(t,e[i],n,s,r);else s=Si(s)?!!s.capture:!!s,n=Tu(n),t&&t[Ci]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=cl(i,n,s,r),-1<n&&(Ea(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Iu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=cl(e,n,s,r)),(n=-1<t?e[t]:null)&&Eu(n))}function Eu(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ci])al(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(im(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Iu(e))?(al(n,t),n.h==0&&(n.src=null,e[wu]=null)):Ea(t)}}}function im(t){return t in Sc?Sc[t]:Sc[t]="on"+t}function eS(t,e){if(t.fa)t=!0;else{e=new ii(e,this);var n=t.listener,s=t.la||t.src;t.ia&&Eu(t),t=n.call(s,e)}return t}function Iu(t){return t=t[wu],t instanceof Ia?t:null}var Cc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Tu(t){return typeof t=="function"?t:(t[Cc]||(t[Cc]=function(e){return t.handleEvent(e)}),t[Cc])}function He(){Hn.call(this),this.i=new Ia(this),this.S=this,this.J=null}Ke(He,Hn);He.prototype[Ci]=!0;He.prototype.removeEventListener=function(t,e,n,s){rm(this,t,e,n,s)};function Qe(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new rt(e,t);else if(e instanceof rt)e.target=e.target||t;else{var r=e;e=new rt(s,t),em(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Ji(o,s,!0,e)&&r}if(o=e.g=t,r=Ji(o,s,!0,e)&&r,r=Ji(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Ji(o,s,!1,e)&&r}He.prototype.N=function(){if(He.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Ea(n[s]);delete t.g[e],t.h--}}this.J=null};He.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};He.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Ji(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&al(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var bu=Q.JSON.stringify;class tS{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function nS(){var t=Su;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class sS{constructor(){this.h=this.g=null}add(e,n){const s=om.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var om=new tS(()=>new rS,t=>t.reset());class rS{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function iS(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function oS(t){Q.setTimeout(()=>{throw t},0)}let oi,ai=!1,Su=new sS,am=()=>{const t=Q.Promise.resolve(void 0);oi=()=>{t.then(aS)}};var aS=()=>{for(var t;t=nS();){try{t.h.call(t.g)}catch(n){oS(n)}var e=om;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ai=!1};function Ta(t,e){He.call(this),this.h=t||1,this.g=e||Q,this.j=st(this.qb,this),this.l=Date.now()}Ke(Ta,He);O=Ta.prototype;O.ga=!1;O.T=null;O.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Qe(this,"tick"),this.ga&&(Cu(this),this.start()))}};O.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Cu(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}O.N=function(){Ta.$.N.call(this),Cu(this),delete this.g};function Au(t,e,n){if(typeof t=="function")n&&(t=st(t,n));else if(t&&typeof t.handleEvent=="function")t=st(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Q.setTimeout(t,e||0)}function cm(t){t.g=Au(()=>{t.g=null,t.i&&(t.i=!1,cm(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class cS extends Hn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:cm(this)}N(){super.N(),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ci(t){Hn.call(this),this.h=t,this.g={}}Ke(ci,Hn);var Qf=[];function lm(t,e,n,s){Array.isArray(n)||(n&&(Qf[0]=n.toString()),n=Qf);for(var r=0;r<n.length;r++){var i=tm(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function um(t){_u(t.g,function(e,n){this.g.hasOwnProperty(n)&&Eu(e)},t),t.g={}}ci.prototype.N=function(){ci.$.N.call(this),um(this)};ci.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ba(){this.g=!0}ba.prototype.Ea=function(){this.g=!1};function lS(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function uS(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Ds(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+fS(t,n)+(s?" "+s:"")})}function hS(t,e){t.info(function(){return"TIMEOUT: "+e})}ba.prototype.info=function(){};function fS(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return bu(n)}catch{return e}}var ys={},Yf=null;function Sa(){return Yf=Yf||new He}ys.Ta="serverreachability";function hm(t){rt.call(this,ys.Ta,t)}Ke(hm,rt);function li(t){const e=Sa();Qe(e,new hm(e))}ys.STAT_EVENT="statevent";function fm(t,e){rt.call(this,ys.STAT_EVENT,t),this.stat=e}Ke(fm,rt);function ut(t){const e=Sa();Qe(e,new fm(e,t))}ys.Ua="timingevent";function dm(t,e){rt.call(this,ys.Ua,t),this.size=e}Ke(dm,rt);function Ai(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Q.setTimeout(function(){t()},e)}var Ca={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},pm={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ku(){}ku.prototype.h=null;function Jf(t){return t.h||(t.h=t.i())}function gm(){}var ki={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ru(){rt.call(this,"d")}Ke(Ru,rt);function Nu(){rt.call(this,"c")}Ke(Nu,rt);var ll;function Aa(){}Ke(Aa,ku);Aa.prototype.g=function(){return new XMLHttpRequest};Aa.prototype.i=function(){return{}};ll=new Aa;function Ri(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new ci(this),this.P=dS,t=rl?125:void 0,this.V=new Ta(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new mm}function mm(){this.i=null,this.g="",this.h=!1}var dS=45e3,ul={},Fo={};O=Ri.prototype;O.setTimeout=function(t){this.P=t};function hl(t,e,n){t.L=1,t.v=Ra(gn(e)),t.s=n,t.S=!0,ym(t,null)}function ym(t,e){t.G=Date.now(),Ni(t),t.A=gn(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),Sm(n.i,"t",s),t.C=0,n=t.l.J,t.h=new mm,t.g=Km(t.l,n?e:null,!t.s),0<t.O&&(t.M=new cS(st(t.Pa,t,t.g),t.O)),lm(t.U,t.g,"readystatechange",t.nb),e=t.I?Zg(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),li(),lS(t.j,t.u,t.A,t.m,t.W,t.s)}O.nb=function(t){t=t.target;const e=this.M;e&&Kt(t)==3?e.l():this.Pa(t)};O.Pa=function(t){try{if(t==this.g)e:{const u=Kt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||rl||this.g&&(this.h.h||this.g.ja()||td(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?li(3):li(2)),ka(this);var n=this.g.da();this.ca=n;t:if(vm(this)){var s=td(this.g);t="";var r=s.length,i=Kt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ns(this),jr(this);var o="";break t}this.h.i=new Q.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,uS(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ri(a)){var l=a;break t}}l=null}if(n=l)Ds(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,fl(this,n);else{this.i=!1,this.o=3,ut(12),ns(this),jr(this);break e}}this.S?(_m(this,u,o),rl&&this.i&&u==3&&(lm(this.U,this.V,"tick",this.mb),this.V.start())):(Ds(this.j,this.m,o,null),fl(this,o)),u==4&&ns(this),this.i&&!this.J&&(u==4?jm(this.l,this):(this.i=!1,Ni(this)))}else xS(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ut(12)):(this.o=0,ut(13)),ns(this),jr(this)}}}catch{}finally{}};function vm(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function _m(t,e,n){let s=!0,r;for(;!t.J&&t.C<n.length;)if(r=pS(t,n),r==Fo){e==4&&(t.o=4,ut(14),s=!1),Ds(t.j,t.m,null,"[Incomplete Response]");break}else if(r==ul){t.o=4,ut(15),Ds(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Ds(t.j,t.m,r,null),fl(t,r);vm(t)&&r!=Fo&&r!=ul&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ut(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Lu(e),e.M=!0,ut(11))):(Ds(t.j,t.m,n,"[Invalid Chunked Response]"),ns(t),jr(t))}O.mb=function(){if(this.g){var t=Kt(this.g),e=this.g.ja();this.C<e.length&&(ka(this),_m(this,t,e),this.i&&t!=4&&Ni(this))}};function pS(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Fo:(n=Number(e.substring(n,s)),isNaN(n)?ul:(s+=1,s+n>e.length?Fo:(e=e.slice(s,s+n),t.C=s+n,e)))}O.cancel=function(){this.J=!0,ns(this)};function Ni(t){t.Y=Date.now()+t.P,wm(t,t.P)}function wm(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ai(st(t.lb,t),e)}function ka(t){t.B&&(Q.clearTimeout(t.B),t.B=null)}O.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(hS(this.j,this.A),this.L!=2&&(li(),ut(17)),ns(this),this.o=2,jr(this)):wm(this,this.Y-t)};function jr(t){t.l.H==0||t.J||jm(t.l,t)}function ns(t){ka(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Cu(t.V),um(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function fl(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||dl(n.i,t))){if(!t.K&&dl(n.i,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Vo(n),Pa(n);else break e;Mu(n),ut(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ai(st(n.ib,n),6e3));if(1>=km(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ss(n,11)}else if((t.K||n.g==t)&&Vo(n),!ri(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=s.i;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Du(i,i.h),i.h=null))}if(s.F){const _=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(s.Da=_,Se(s.I,s.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=Hm(s,s.J?s.pa:null,s.Y),o.K){Rm(s.i,o);var a=o,c=s.L;c&&a.setTimeout(c),a.B&&(ka(a),Ni(a)),s.g=o}else Vm(s);0<n.j.length&&Oa(n)}else l[0]!="stop"&&l[0]!="close"||ss(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?ss(n,7):xu(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}li(4)}catch{}}function gS(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(_a(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function mS(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(_a(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Em(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(_a(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=mS(t),s=gS(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Im=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function yS(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function cs(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof cs){this.h=t.h,Uo(this,t.j),this.s=t.s,this.g=t.g,$o(this,t.m),this.l=t.l;var e=t.i,n=new ui;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Xf(this,n),this.o=t.o}else t&&(e=String(t).match(Im))?(this.h=!1,Uo(this,e[1]||"",!0),this.s=Dr(e[2]||""),this.g=Dr(e[3]||"",!0),$o(this,e[4]),this.l=Dr(e[5]||"",!0),Xf(this,e[6]||"",!0),this.o=Dr(e[7]||"")):(this.h=!1,this.i=new ui(null,this.h))}cs.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Pr(e,Zf,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Pr(e,Zf,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Pr(n,n.charAt(0)=="/"?wS:_S,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Pr(n,IS)),t.join("")};function gn(t){return new cs(t)}function Uo(t,e,n){t.j=n?Dr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function $o(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Xf(t,e,n){e instanceof ui?(t.i=e,TS(t.i,t.h)):(n||(e=Pr(e,ES)),t.i=new ui(e,t.h))}function Se(t,e,n){t.i.set(e,n)}function Ra(t){return Se(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Dr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Pr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,vS),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function vS(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Zf=/[#\/\?@]/g,_S=/[#\?:]/g,wS=/[#\?]/g,ES=/[#\?@]/g,IS=/#/g;function ui(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Kn(t){t.g||(t.g=new Map,t.h=0,t.i&&yS(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}O=ui.prototype;O.add=function(t,e){Kn(this),this.i=null,t=gr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Tm(t,e){Kn(t),e=gr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function bm(t,e){return Kn(t),e=gr(t,e),t.g.has(e)}O.forEach=function(t,e){Kn(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};O.ta=function(){Kn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};O.Z=function(t){Kn(this);let e=[];if(typeof t=="string")bm(this,t)&&(e=e.concat(this.g.get(gr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};O.set=function(t,e){return Kn(this),this.i=null,t=gr(this,t),bm(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};O.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Sm(t,e,n){Tm(t,e),0<n.length&&(t.i=null,t.g.set(gr(t,e),yu(n)),t.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function gr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function TS(t,e){e&&!t.j&&(Kn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Tm(this,s),Sm(this,r,n))},t)),t.j=e}var bS=class{constructor(t,e){this.g=t,this.map=e}};function Cm(t){this.l=t||SS,Q.PerformanceNavigationTiming?(t=Q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Q.g&&Q.g.Ka&&Q.g.Ka()&&Q.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var SS=10;function Am(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function km(t){return t.h?1:t.g?t.g.size:0}function dl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Du(t,e){t.g?t.g.add(e):t.h=e}function Rm(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Cm.prototype.cancel=function(){if(this.i=Nm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Nm(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return yu(t.i)}var CS=class{stringify(t){return Q.JSON.stringify(t,void 0)}parse(t){return Q.JSON.parse(t,void 0)}};function AS(){this.g=new CS}function kS(t,e,n){const s=n||"";try{Em(t,function(r,i){let o=r;Si(r)&&(o=bu(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function RS(t,e){const n=new ba;if(Q.Image){const s=new Image;s.onload=Yi(Xi,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Yi(Xi,n,s,"TestLoadImage: error",!1,e),s.onabort=Yi(Xi,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Yi(Xi,n,s,"TestLoadImage: timeout",!1,e),Q.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Xi(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Di(t){this.l=t.fc||null,this.j=t.ob||!1}Ke(Di,ku);Di.prototype.g=function(){return new Na(this.l,this.j)};Di.prototype.i=function(t){return function(){return t}}({});function Na(t,e){He.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Pu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ke(Na,He);var Pu=0;O=Na.prototype;O.open=function(t,e){if(this.readyState!=Pu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,hi(this)};O.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Q).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Pi(this)),this.readyState=Pu};O.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,hi(this)),this.g&&(this.readyState=3,hi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Dm(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Dm(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}O.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Pi(this):hi(this),this.readyState==3&&Dm(this)}};O.Za=function(t){this.g&&(this.response=this.responseText=t,Pi(this))};O.Ya=function(t){this.g&&(this.response=t,Pi(this))};O.ka=function(){this.g&&Pi(this)};function Pi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,hi(t)}O.setRequestHeader=function(t,e){this.v.append(t,e)};O.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function hi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Na.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var NS=Q.JSON.parse;function Oe(t){He.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Pm,this.L=this.M=!1}Ke(Oe,He);var Pm="",DS=/^https?$/i,PS=["POST","PUT"];O=Oe.prototype;O.Oa=function(t){this.M=t};O.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ll.g(),this.C=this.u?Jf(this.u):Jf(ll),this.g.onreadystatechange=st(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){ed(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=Q.FormData&&t instanceof Q.FormData,!(0<=Qg(PS,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Mm(this),0<this.B&&((this.L=OS(this.g))?(this.g.timeout=this.B,this.g.ontimeout=st(this.ua,this)):this.A=Au(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){ed(this,i)}};function OS(t){return Xs&&typeof t.timeout=="number"&&t.ontimeout!==void 0}O.ua=function(){typeof mu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Qe(this,"timeout"),this.abort(8))};function ed(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Om(t),Da(t)}function Om(t){t.F||(t.F=!0,Qe(t,"complete"),Qe(t,"error"))}O.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Qe(this,"complete"),Qe(this,"abort"),Da(this))};O.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Da(this,!0)),Oe.$.N.call(this)};O.La=function(){this.s||(this.G||this.v||this.l?xm(this):this.kb())};O.kb=function(){xm(this)};function xm(t){if(t.h&&typeof mu<"u"&&(!t.C[1]||Kt(t)!=4||t.da()!=2)){if(t.v&&Kt(t)==4)Au(t.La,0,t);else if(Qe(t,"readystatechange"),Kt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=o===0){var r=String(t.I).match(Im)[1]||null;!r&&Q.self&&Q.self.location&&(r=Q.self.location.protocol.slice(0,-1)),s=!DS.test(r?r.toLowerCase():"")}n=s}if(n)Qe(t,"complete"),Qe(t,"success");else{t.m=6;try{var i=2<Kt(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",Om(t)}}finally{Da(t)}}}}function Da(t,e){if(t.g){Mm(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Qe(t,"ready");try{n.onreadystatechange=s}catch{}}}function Mm(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Q.clearTimeout(t.A),t.A=null)}O.isActive=function(){return!!this.g};function Kt(t){return t.g?t.g.readyState:0}O.da=function(){try{return 2<Kt(this)?this.g.status:-1}catch{return-1}};O.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),NS(e)}};function td(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Pm:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function xS(t){const e={};t=(t.g&&2<=Kt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(ri(t[s]))continue;var n=iS(t[s]);const r=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[r]||[];e[r]=i,i.push(n)}Xb(e,function(s){return s.join(", ")})}O.Ia=function(){return this.m};O.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Lm(t){let e="";return _u(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Ou(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Lm(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Se(t,e,n))}function Sr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Fm(t){this.Ga=0,this.j=[],this.l=new ba,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Sr("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Sr("baseRetryDelayMs",5e3,t),this.hb=Sr("retryDelaySeedMs",1e4,t),this.eb=Sr("forwardChannelMaxRetries",2,t),this.xa=Sr("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Cm(t&&t.concurrentRequestLimit),this.Ja=new AS,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}O=Fm.prototype;O.ra=8;O.H=1;function xu(t){if(Um(t),t.H==3){var e=t.W++,n=gn(t.I);if(Se(n,"SID",t.K),Se(n,"RID",e),Se(n,"TYPE","terminate"),Oi(t,n),e=new Ri(t,t.l,e),e.L=2,e.v=Ra(gn(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon)try{n=Q.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&Q.Image&&(new Image().src=e.v,n=!0),n||(e.g=Km(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ni(e)}qm(t)}function Pa(t){t.g&&(Lu(t),t.g.cancel(),t.g=null)}function Um(t){Pa(t),t.u&&(Q.clearTimeout(t.u),t.u=null),Vo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Q.clearTimeout(t.m),t.m=null)}function Oa(t){if(!Am(t.i)&&!t.m){t.m=!0;var e=t.Na;oi||am(),ai||(oi(),ai=!0),Su.add(e,t),t.C=0}}function MS(t,e){return km(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Ai(st(t.Na,t,e),zm(t,t.C)),t.C++,!0)}O.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new Ri(this,this.l,t);let i=this.s;if(this.U&&(i?(i=Zg(i),em(i,this.U)):i=this.U),this.o!==null||this.O||(r.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=$m(this,r,e),n=gn(this.I),Se(n,"RID",t),Se(n,"CVER",22),this.F&&Se(n,"X-HTTP-Session-Id",this.F),Oi(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Lm(i)))+"&"+e:this.o&&Ou(n,this.o,i)),Du(this.i,r),this.bb&&Se(n,"TYPE","init"),this.P?(Se(n,"$req",e),Se(n,"SID","null"),r.aa=!0,hl(r,n,null)):hl(r,n,e),this.H=2}}else this.H==3&&(t?nd(this,t):this.j.length==0||Am(this.i)||nd(this))};function nd(t,e){var n;e?n=e.m:n=t.W++;const s=gn(t.I);Se(s,"SID",t.K),Se(s,"RID",n),Se(s,"AID",t.V),Oi(t,s),t.o&&t.s&&Ou(s,t.o,t.s),n=new Ri(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=$m(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Du(t.i,n),hl(n,s,e)}function Oi(t,e){t.na&&_u(t.na,function(n,s){Se(e,s,n)}),t.h&&Em({},function(n,s){Se(e,s,n)})}function $m(t,e,n){n=Math.min(t.j.length,n);var s=t.h?st(t.h.Va,t.h,t):null;e:{var r=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].g;const u=r[c].map;if(l-=i,0>l)i=Math.max(0,r[c].g-100),a=!1;else try{kS(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,s}function Vm(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;oi||am(),ai||(oi(),ai=!0),Su.add(e,t),t.A=0}}function Mu(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Ai(st(t.Ma,t),zm(t,t.A)),t.A++,!0)}O.Ma=function(){if(this.u=null,Bm(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Ai(st(this.jb,this),t)}};O.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ut(10),Pa(this),Bm(this))};function Lu(t){t.B!=null&&(Q.clearTimeout(t.B),t.B=null)}function Bm(t){t.g=new Ri(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=gn(t.wa);Se(e,"RID","rpc"),Se(e,"SID",t.K),Se(e,"AID",t.V),Se(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Se(e,"TO",t.qa),Se(e,"TYPE","xmlhttp"),Oi(t,e),t.o&&t.s&&Ou(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Ra(gn(e)),n.s=null,n.S=!0,ym(n,t)}O.ib=function(){this.v!=null&&(this.v=null,Pa(this),Mu(this),ut(19))};function Vo(t){t.v!=null&&(Q.clearTimeout(t.v),t.v=null)}function jm(t,e){var n=null;if(t.g==e){Vo(t),Lu(t),t.g=null;var s=2}else if(dl(t.i,e))n=e.F,Rm(t.i,e),s=1;else return;if(t.H!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;s=Sa(),Qe(s,new dm(s,n)),Oa(t)}else Vm(t);else if(r=e.o,r==3||r==0&&0<e.ca||!(s==1&&MS(t,e)||s==2&&Mu(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:ss(t,5);break;case 4:ss(t,10);break;case 3:ss(t,6);break;default:ss(t,2)}}}function zm(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function ss(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var s=st(t.pb,t);n||(n=new cs("//www.google.com/images/cleardot.gif"),Q.location&&Q.location.protocol=="http"||Uo(n,"https"),Ra(n)),RS(n.toString(),s)}else ut(2);t.H=0,t.h&&t.h.za(e),qm(t),Um(t)}O.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ut(2)):(this.l.info("Failed to ping google.com"),ut(1))};function qm(t){if(t.H=0,t.ma=[],t.h){const e=Nm(t.i);(e.length!=0||t.j.length!=0)&&(Kf(t.ma,e),Kf(t.ma,t.j),t.i.i.length=0,yu(t.j),t.j.length=0),t.h.ya()}}function Hm(t,e,n){var s=n instanceof cs?gn(n):new cs(n);if(s.g!="")e&&(s.g=e+"."+s.g),$o(s,s.m);else{var r=Q.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new cs(null);s&&Uo(i,s),e&&(i.g=e),r&&$o(i,r),n&&(i.l=n),s=i}return n=t.F,e=t.Da,n&&e&&Se(s,n,e),Se(s,"VER",t.ra),Oi(t,s),s}function Km(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Oe(new Di({ob:!0})):new Oe(t.va),e.Oa(t.J),e}O.isActive=function(){return!!this.h&&this.h.isActive(this)};function Wm(){}O=Wm.prototype;O.Ba=function(){};O.Aa=function(){};O.za=function(){};O.ya=function(){};O.isActive=function(){return!0};O.Va=function(){};function Bo(){if(Xs&&!(10<=Number(Gb)))throw Error("Environmental error: no available transport.")}Bo.prototype.g=function(t,e){return new Tt(t,e)};function Tt(t,e){He.call(this),this.g=new Fm(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ri(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ri(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new mr(this)}Ke(Tt,He);Tt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ut(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Hm(t,null,t.Y),Oa(t)};Tt.prototype.close=function(){xu(this.g)};Tt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=bu(t),t=n);e.j.push(new bS(e.fb++,t)),e.H==3&&Oa(e)};Tt.prototype.N=function(){this.g.h=null,delete this.j,xu(this.g),delete this.g,Tt.$.N.call(this)};function Gm(t){Ru.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ke(Gm,Ru);function Qm(){Nu.call(this),this.status=1}Ke(Qm,Nu);function mr(t){this.g=t}Ke(mr,Wm);mr.prototype.Ba=function(){Qe(this.g,"a")};mr.prototype.Aa=function(t){Qe(this.g,new Gm(t))};mr.prototype.za=function(t){Qe(this.g,new Qm)};mr.prototype.ya=function(){Qe(this.g,"b")};function LS(){this.blockSize=-1}function Lt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ke(Lt,LS);Lt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ac(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)s[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var i=t.g[3],o=e+(i^n&(r^i))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[2]+606105819&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[6]+2821735955&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[10]+4294925233&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[14]+2792965006&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^i&(n^r))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[11]+643717713&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[15]+3634488961&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[3]+4107603335&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[7]+1735328473&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^i)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[11]+1839030562&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[7]+4139469664&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[3]+3572445317&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[15]+530742520&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~i))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[14]+2878612391&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[10]+4293915773&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[6]+2734768916&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[2]+718787259&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+i&4294967295}Lt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,r=this.h,i=0;i<e;){if(r==0)for(;i<=n;)Ac(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(s[r++]=t.charCodeAt(i++),r==this.blockSize){Ac(this,s),r=0;break}}else for(;i<e;)if(s[r++]=t[i++],r==this.blockSize){Ac(this,s),r=0;break}}this.h=r,this.i+=e};Lt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function ve(t,e){this.h=e;for(var n=[],s=!0,r=t.length-1;0<=r;r--){var i=t[r]|0;s&&i==e||(n[r]=i,s=!1)}this.g=n}var FS={};function Fu(t){return-128<=t&&128>t?Hb(t,function(e){return new ve([e|0],0>e?-1:0)}):new ve([t|0],0>t?-1:0)}function Wt(t){if(isNaN(t)||!isFinite(t))return $s;if(0>t)return Ge(Wt(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=pl;return new ve(e,0)}function Ym(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ge(Ym(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Wt(Math.pow(e,8)),s=$s,r=0;r<t.length;r+=8){var i=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+i),e);8>i?(i=Wt(Math.pow(e,i)),s=s.R(i).add(Wt(o))):(s=s.R(n),s=s.add(Wt(o)))}return s}var pl=4294967296,$s=Fu(0),gl=Fu(1),sd=Fu(16777216);O=ve.prototype;O.ea=function(){if(At(this))return-Ge(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:pl+s)*e,e*=pl}return t};O.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(ln(this))return"0";if(At(this))return"-"+Ge(this).toString(t);for(var e=Wt(Math.pow(t,6)),n=this,s="";;){var r=zo(n,e).g;n=jo(n,r.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,ln(n))return i+s;for(;6>i.length;)i="0"+i;s=i+s}};O.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function ln(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function At(t){return t.h==-1}O.X=function(t){return t=jo(this,t),At(t)?-1:ln(t)?0:1};function Ge(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new ve(n,~t.h).add(gl)}O.abs=function(){return At(this)?Ge(this):this};O.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,r=0;r<=e;r++){var i=s+(this.D(r)&65535)+(t.D(r)&65535),o=(i>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new ve(n,n[n.length-1]&-2147483648?-1:0)};function jo(t,e){return t.add(Ge(e))}O.R=function(t){if(ln(this)||ln(t))return $s;if(At(this))return At(t)?Ge(this).R(Ge(t)):Ge(Ge(this).R(t));if(At(t))return Ge(this.R(Ge(t)));if(0>this.X(sd)&&0>t.X(sd))return Wt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<t.g.length;r++){var i=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(r)>>>16,c=t.D(r)&65535;n[2*s+2*r]+=o*c,Zi(n,2*s+2*r),n[2*s+2*r+1]+=i*c,Zi(n,2*s+2*r+1),n[2*s+2*r+1]+=o*a,Zi(n,2*s+2*r+1),n[2*s+2*r+2]+=i*a,Zi(n,2*s+2*r+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new ve(n,0)};function Zi(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Cr(t,e){this.g=t,this.h=e}function zo(t,e){if(ln(e))throw Error("division by zero");if(ln(t))return new Cr($s,$s);if(At(t))return e=zo(Ge(t),e),new Cr(Ge(e.g),Ge(e.h));if(At(e))return e=zo(t,Ge(e)),new Cr(Ge(e.g),e.h);if(30<t.g.length){if(At(t)||At(e))throw Error("slowDivide_ only works with positive integers.");for(var n=gl,s=e;0>=s.X(t);)n=rd(n),s=rd(s);var r=Ss(n,1),i=Ss(s,1);for(s=Ss(s,2),n=Ss(n,2);!ln(s);){var o=i.add(s);0>=o.X(t)&&(r=r.add(n),i=o),s=Ss(s,1),n=Ss(n,1)}return e=jo(t,r.R(e)),new Cr(r,e)}for(r=$s;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),i=Wt(n),o=i.R(e);At(o)||0<o.X(t);)n-=s,i=Wt(n),o=i.R(e);ln(i)&&(i=gl),r=r.add(i),t=jo(t,o)}return new Cr(r,t)}O.gb=function(t){return zo(this,t).h};O.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new ve(n,this.h&t.h)};O.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new ve(n,this.h|t.h)};O.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new ve(n,this.h^t.h)};function rd(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new ve(n,t.h)}function Ss(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,r=[],i=0;i<s;i++)r[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new ve(r,t.h)}Bo.prototype.createWebChannel=Bo.prototype.g;Tt.prototype.send=Tt.prototype.u;Tt.prototype.open=Tt.prototype.m;Tt.prototype.close=Tt.prototype.close;Ca.NO_ERROR=0;Ca.TIMEOUT=8;Ca.HTTP_ERROR=6;pm.COMPLETE="complete";gm.EventType=ki;ki.OPEN="a";ki.CLOSE="b";ki.ERROR="c";ki.MESSAGE="d";He.prototype.listen=He.prototype.O;Oe.prototype.listenOnce=Oe.prototype.P;Oe.prototype.getLastError=Oe.prototype.Sa;Oe.prototype.getLastErrorCode=Oe.prototype.Ia;Oe.prototype.getStatus=Oe.prototype.da;Oe.prototype.getResponseJson=Oe.prototype.Wa;Oe.prototype.getResponseText=Oe.prototype.ja;Oe.prototype.send=Oe.prototype.ha;Oe.prototype.setWithCredentials=Oe.prototype.Oa;Lt.prototype.digest=Lt.prototype.l;Lt.prototype.reset=Lt.prototype.reset;Lt.prototype.update=Lt.prototype.j;ve.prototype.add=ve.prototype.add;ve.prototype.multiply=ve.prototype.R;ve.prototype.modulo=ve.prototype.gb;ve.prototype.compare=ve.prototype.X;ve.prototype.toNumber=ve.prototype.ea;ve.prototype.toString=ve.prototype.toString;ve.prototype.getBits=ve.prototype.D;ve.fromNumber=Wt;ve.fromString=Ym;var US=function(){return new Bo},$S=function(){return Sa()},kc=Ca,VS=pm,BS=ys,id={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},jS=Di,eo=gm,zS=Oe,qS=Lt,Vs=ve;const od="@firebase/firestore";/**
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
 */class Ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ze.UNAUTHENTICATED=new Ze(null),Ze.GOOGLE_CREDENTIALS=new Ze("google-credentials-uid"),Ze.FIRST_PARTY=new Ze("first-party-uid"),Ze.MOCK_USER=new Ze("mock-user");/**
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
 */let yr="9.23.0";/**
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
 */const ps=new ru("@firebase/firestore");function ad(){return ps.logLevel}function $(t,...e){if(ps.logLevel<=ue.DEBUG){const n=e.map(Uu);ps.debug(`Firestore (${yr}): ${t}`,...n)}}function mn(t,...e){if(ps.logLevel<=ue.ERROR){const n=e.map(Uu);ps.error(`Firestore (${yr}): ${t}`,...n)}}function Zs(t,...e){if(ps.logLevel<=ue.WARN){const n=e.map(Uu);ps.warn(`Firestore (${yr}): ${t}`,...n)}}function Uu(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function G(t="Unexpected state"){const e=`FIRESTORE (${yr}) INTERNAL ASSERTION FAILED: `+t;throw mn(e),new Error(e)}function Ae(t,e){t||G()}function Z(t,e){return t}/**
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
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends En{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class hn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Jm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class HS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ze.UNAUTHENTICATED))}shutdown(){}}class KS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class WS{constructor(e){this.t=e,this.currentUser=Ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new hn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new hn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new hn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ae(typeof s.accessToken=="string"),new Jm(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ae(e===null||typeof e=="string"),new Ze(e)}}class GS{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=Ze.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class QS{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new GS(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class YS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class JS{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=i=>{i.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ae(typeof n.token=="string"),this.T=n.token,new YS(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function XS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Xm{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=XS(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function de(t,e){return t<e?-1:t>e?1:0}function er(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class Ue{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new M(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new M(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new M(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ue.fromMillis(Date.now())}static fromDate(e){return Ue.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ue(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Ue(0,0))}static max(){return new J(new Ue(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class fi{constructor(e,n,s){n===void 0?n=0:n>e.length&&G(),s===void 0?s=e.length-n:s>e.length-n&&G(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return fi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof fi?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ce extends fi{construct(e,n,s){return new Ce(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new M(I.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Ce(n)}static emptyPath(){return new Ce([])}}const ZS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends fi{construct(e,n,s){return new nt(e,n,s)}static isValidIdentifier(e){return ZS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new nt(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new M(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new M(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new M(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new M(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nt(n)}static emptyPath(){return new nt([])}}/**
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
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(Ce.fromString(e))}static fromName(e){return new B(Ce.fromString(e).popFirst(5))}static empty(){return new B(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new Ce(e.slice()))}}function e1(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=J.fromTimestamp(s===1e9?new Ue(n+1,0):new Ue(n,s));return new jn(r,B.empty(),e)}function t1(t){return new jn(t.readTime,t.key,-1)}class jn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new jn(J.min(),B.empty(),-1)}static max(){return new jn(J.max(),B.empty(),-1)}}function n1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=B.comparator(t.documentKey,e.documentKey),n!==0?n:de(t.largestBatchId,e.largestBatchId))}/**
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
 */const s1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class r1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function xi(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==s1)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,s)=>{n(e)})}static reject(e){return new A((n,s)=>{s(e)})}static waitFor(e){return new A((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=A.resolve(!1);for(const s of e)n=n.next(r=>r?A.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new A((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new A((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Mi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class $u{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}$u.ct=-1;function xa(t){return t==null}function qo(t){return t===0&&1/t==-1/0}function i1(t){return typeof t=="number"&&Number.isInteger(t)&&!qo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function cd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function vs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Zm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class De{constructor(e,n){this.comparator=e,this.root=n||We.EMPTY}insert(e,n){return new De(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,We.BLACK,null,null))}remove(e){return new De(this.comparator,this.root.remove(e,this.comparator).copy(null,null,We.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new to(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new to(this.root,e,this.comparator,!1)}getReverseIterator(){return new to(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new to(this.root,e,this.comparator,!0)}}class to{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class We{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??We.RED,this.left=r??We.EMPTY,this.right=i??We.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new We(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return We.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(t,e,n,s,r){return this}insert(t,e,n){return new We(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class it{constructor(e){this.comparator=e,this.data=new De(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ld(this.data.getIterator())}getIteratorFrom(e){return new ld(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof it)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new it(this.comparator);return n.data=e,n}}class ld{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class It{constructor(e){this.fields=e,e.sort(nt.comparator)}static empty(){return new It([])}unionWith(e){let n=new it(nt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new It(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return er(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class ey extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ct{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new ey("Invalid base64 string: "+r):r}}(e);return new ct(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new ct(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const o1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zn(t){if(Ae(!!t),typeof t=="string"){let e=0;const n=o1.exec(t);if(Ae(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function gs(t){return typeof t=="string"?ct.fromBase64String(t):ct.fromUint8Array(t)}/**
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
 */function Vu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Bu(t){const e=t.mapValue.fields.__previous_value__;return Vu(e)?Bu(e):e}function di(t){const e=zn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ue(e.seconds,e.nanos)}/**
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
 */class a1{constructor(e,n,s,r,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class pi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new pi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof pi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const no={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ms(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Vu(t)?4:c1(t)?9007199254740991:10:G()}function Zt(t,e){if(t===e)return!0;const n=ms(t);if(n!==ms(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return di(t).isEqual(di(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=zn(s.timestampValue),o=zn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return gs(s.bytesValue).isEqual(gs(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Le(s.geoPointValue.latitude)===Le(r.geoPointValue.latitude)&&Le(s.geoPointValue.longitude)===Le(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Le(s.integerValue)===Le(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Le(s.doubleValue),o=Le(r.doubleValue);return i===o?qo(i)===qo(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return er(t.arrayValue.values||[],e.arrayValue.values||[],Zt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(cd(i)!==cd(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Zt(i[a],o[a])))return!1;return!0}(t,e);default:return G()}}function gi(t,e){return(t.values||[]).find(n=>Zt(n,e))!==void 0}function tr(t,e){if(t===e)return 0;const n=ms(t),s=ms(e);if(n!==s)return de(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return de(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Le(r.integerValue||r.doubleValue),a=Le(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return ud(t.timestampValue,e.timestampValue);case 4:return ud(di(t),di(e));case 5:return de(t.stringValue,e.stringValue);case 6:return function(r,i){const o=gs(r),a=gs(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=de(o[c],a[c]);if(l!==0)return l}return de(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=de(Le(r.latitude),Le(i.latitude));return o!==0?o:de(Le(r.longitude),Le(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=tr(o[c],a[c]);if(l)return l}return de(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===no.mapValue&&i===no.mapValue)return 0;if(r===no.mapValue)return 1;if(i===no.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=de(a[u],l[u]);if(h!==0)return h;const f=tr(o[a[u]],c[l[u]]);if(f!==0)return f}return de(a.length,l.length)}(t.mapValue,e.mapValue);default:throw G()}}function ud(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return de(t,e);const n=zn(t),s=zn(e),r=de(n.seconds,s.seconds);return r!==0?r:de(n.nanos,s.nanos)}function nr(t){return ml(t)}function ml(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=zn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?gs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,B.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=ml(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${ml(s.fields[a])}`;return i+"}"}(t.mapValue):G();var e,n}function hd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function yl(t){return!!t&&"integerValue"in t}function ju(t){return!!t&&"arrayValue"in t}function fd(t){return!!t&&"nullValue"in t}function dd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function mo(t){return!!t&&"mapValue"in t}function zr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return vs(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=zr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=zr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function c1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class pt{constructor(e){this.value=e}static empty(){return new pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!mo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=zr(n)}setAll(e){let n=nt.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=zr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());mo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Zt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];mo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){vs(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new pt(zr(this.value))}}function ty(t){const e=[];return vs(t.fields,(n,s)=>{const r=new nt([n]);if(mo(s)){const i=ty(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new It(e)}/**
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
 */class et{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new et(e,0,J.min(),J.min(),J.min(),pt.empty(),0)}static newFoundDocument(e,n,s,r){return new et(e,1,n,J.min(),s,r,0)}static newNoDocument(e,n){return new et(e,2,n,J.min(),J.min(),pt.empty(),0)}static newUnknownDocument(e,n){return new et(e,3,n,J.min(),J.min(),pt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ho{constructor(e,n){this.position=e,this.inclusive=n}}function pd(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=B.comparator(B.fromName(o.referenceValue),n.key):s=tr(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function gd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Zt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Bs{constructor(e,n="asc"){this.field=e,this.dir=n}}function l1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class ny{}class Fe extends ny{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new h1(e,n,s):n==="array-contains"?new p1(e,s):n==="in"?new g1(e,s):n==="not-in"?new m1(e,s):n==="array-contains-any"?new y1(e,s):new Fe(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new f1(e,s):new d1(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(tr(n,this.value)):n!==null&&ms(this.value)===ms(n)&&this.matchesComparison(tr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ft extends ny{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new Ft(e,n)}matches(e){return sy(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function sy(t){return t.op==="and"}function ry(t){return u1(t)&&sy(t)}function u1(t){for(const e of t.filters)if(e instanceof Ft)return!1;return!0}function vl(t){if(t instanceof Fe)return t.field.canonicalString()+t.op.toString()+nr(t.value);if(ry(t))return t.filters.map(e=>vl(e)).join(",");{const e=t.filters.map(n=>vl(n)).join(",");return`${t.op}(${e})`}}function iy(t,e){return t instanceof Fe?function(n,s){return s instanceof Fe&&n.op===s.op&&n.field.isEqual(s.field)&&Zt(n.value,s.value)}(t,e):t instanceof Ft?function(n,s){return s instanceof Ft&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&iy(i,s.filters[o]),!0):!1}(t,e):void G()}function oy(t){return t instanceof Fe?function(e){return`${e.field.canonicalString()} ${e.op} ${nr(e.value)}`}(t):t instanceof Ft?function(e){return e.op.toString()+" {"+e.getFilters().map(oy).join(" ,")+"}"}(t):"Filter"}class h1 extends Fe{constructor(e,n,s){super(e,n,s),this.key=B.fromName(s.referenceValue)}matches(e){const n=B.comparator(e.key,this.key);return this.matchesComparison(n)}}class f1 extends Fe{constructor(e,n){super(e,"in",n),this.keys=ay("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class d1 extends Fe{constructor(e,n){super(e,"not-in",n),this.keys=ay("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ay(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>B.fromName(s.referenceValue))}class p1 extends Fe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ju(n)&&gi(n.arrayValue,this.value)}}class g1 extends Fe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&gi(this.value.arrayValue,n)}}class m1 extends Fe{constructor(e,n){super(e,"not-in",n)}matches(e){if(gi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!gi(this.value.arrayValue,n)}}class y1 extends Fe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ju(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>gi(this.value.arrayValue,s))}}/**
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
 */class v1{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.dt=null}}function md(t,e=null,n=[],s=[],r=null,i=null,o=null){return new v1(t,e,n,s,r,i,o)}function zu(t){const e=Z(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>vl(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),xa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>nr(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>nr(s)).join(",")),e.dt=n}return e.dt}function qu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!l1(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!iy(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!gd(t.startAt,e.startAt)&&gd(t.endAt,e.endAt)}function _l(t){return B.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class vr{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this._t=null,this.startAt,this.endAt}}function _1(t,e,n,s,r,i,o,a){return new vr(t,e,n,s,r,i,o,a)}function Ma(t){return new vr(t)}function yd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Hu(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function La(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function cy(t){return t.collectionGroup!==null}function js(t){const e=Z(t);if(e.wt===null){e.wt=[];const n=La(e),s=Hu(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new Bs(n)),e.wt.push(new Bs(nt.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Bs(nt.keyField(),i))}}}return e.wt}function yn(t){const e=Z(t);if(!e._t)if(e.limitType==="F")e._t=md(e.path,e.collectionGroup,js(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of js(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Bs(i.field,o))}const s=e.endAt?new Ho(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Ho(e.startAt.position,e.startAt.inclusive):null;e._t=md(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function wl(t,e){e.getFirstInequalityField(),La(t);const n=t.filters.concat([e]);return new vr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function El(t,e,n){return new vr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Fa(t,e){return qu(yn(t),yn(e))&&t.limitType===e.limitType}function ly(t){return`${zu(yn(t))}|lt:${t.limitType}`}function Il(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>oy(s)).join(", ")}]`),xa(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>nr(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>nr(s)).join(",")),`Target(${n})`}(yn(t))}; limitType=${t.limitType})`}function Ua(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):B.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of js(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=pd(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,js(n),s)||n.endAt&&!function(r,i,o){const a=pd(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,js(n),s))}(t,e)}function w1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function uy(t){return(e,n)=>{let s=!1;for(const r of js(t)){const i=E1(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function E1(t,e,n){const s=t.field.isKeyField()?B.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?tr(a,c):G()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return G()}}/**
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
 */class _r{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){vs(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Zm(this.inner)}size(){return this.innerSize}}/**
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
 */const I1=new De(B.comparator);function vn(){return I1}const hy=new De(B.comparator);function Or(...t){let e=hy;for(const n of t)e=e.insert(n.key,n);return e}function fy(t){let e=hy;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function rs(){return qr()}function dy(){return qr()}function qr(){return new _r(t=>t.toString(),(t,e)=>t.isEqual(e))}const T1=new De(B.comparator),b1=new it(B.comparator);function ie(...t){let e=b1;for(const n of t)e=e.add(n);return e}const S1=new it(de);function C1(){return S1}/**
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
 */function py(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qo(e)?"-0":e}}function gy(t){return{integerValue:""+t}}function A1(t,e){return i1(e)?gy(e):py(t,e)}/**
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
 */class $a{constructor(){this._=void 0}}function k1(t,e,n){return t instanceof Ko?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&Vu(r)&&(r=Bu(r)),r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof mi?yy(t,e):t instanceof yi?vy(t,e):function(s,r){const i=my(s,r),o=vd(i)+vd(s.gt);return yl(i)&&yl(s.gt)?gy(o):py(s.serializer,o)}(t,e)}function R1(t,e,n){return t instanceof mi?yy(t,e):t instanceof yi?vy(t,e):n}function my(t,e){return t instanceof Wo?yl(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Ko extends $a{}class mi extends $a{constructor(e){super(),this.elements=e}}function yy(t,e){const n=_y(e);for(const s of t.elements)n.some(r=>Zt(r,s))||n.push(s);return{arrayValue:{values:n}}}class yi extends $a{constructor(e){super(),this.elements=e}}function vy(t,e){let n=_y(e);for(const s of t.elements)n=n.filter(r=>!Zt(r,s));return{arrayValue:{values:n}}}class Wo extends $a{constructor(e,n){super(),this.serializer=e,this.gt=n}}function vd(t){return Le(t.integerValue||t.doubleValue)}function _y(t){return ju(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function N1(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof mi&&s instanceof mi||n instanceof yi&&s instanceof yi?er(n.elements,s.elements,Zt):n instanceof Wo&&s instanceof Wo?Zt(n.gt,s.gt):n instanceof Ko&&s instanceof Ko}(t.transform,e.transform)}class D1{constructor(e,n){this.version=e,this.transformResults=n}}class kt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new kt}static exists(e){return new kt(void 0,e)}static updateTime(e){return new kt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function yo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Va{}function wy(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ku(t.key,kt.none()):new Li(t.key,t.data,kt.none());{const n=t.data,s=pt.empty();let r=new it(nt.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Wn(t.key,s,new It(r.toArray()),kt.none())}}function P1(t,e,n){t instanceof Li?function(s,r,i){const o=s.value.clone(),a=wd(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Wn?function(s,r,i){if(!yo(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=wd(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Ey(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Hr(t,e,n,s){return t instanceof Li?function(r,i,o,a){if(!yo(r.precondition,i))return o;const c=r.value.clone(),l=Ed(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Wn?function(r,i,o,a){if(!yo(r.precondition,i))return o;const c=Ed(r.fieldTransforms,a,i),l=i.data;return l.setAll(Ey(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return yo(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function O1(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=my(s.transform,r||null);i!=null&&(n===null&&(n=pt.empty()),n.set(s.field,i))}return n||null}function _d(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&er(n,s,(r,i)=>N1(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Li extends Va{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Wn extends Va{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ey(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function wd(t,e,n){const s=new Map;Ae(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,R1(o,a,n[r]))}return s}function Ed(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,k1(i,o,e))}return s}class Ku extends Va{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class x1 extends Va{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class M1{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&P1(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Hr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Hr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=dy();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=wy(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(J.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&er(this.mutations,e.mutations,(n,s)=>_d(n,s))&&er(this.baseMutations,e.baseMutations,(n,s)=>_d(n,s))}}class Wu{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Ae(e.mutations.length===s.length);let r=T1;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Wu(e,n,s,r)}}/**
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
 */class L1{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class F1{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Me,ae;function U1(t){switch(t){default:return G();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function Iy(t){if(t===void 0)return mn("GRPC error has no .code"),I.UNKNOWN;switch(t){case Me.OK:return I.OK;case Me.CANCELLED:return I.CANCELLED;case Me.UNKNOWN:return I.UNKNOWN;case Me.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Me.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Me.INTERNAL:return I.INTERNAL;case Me.UNAVAILABLE:return I.UNAVAILABLE;case Me.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Me.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Me.NOT_FOUND:return I.NOT_FOUND;case Me.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Me.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Me.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Me.ABORTED:return I.ABORTED;case Me.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Me.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Me.DATA_LOSS:return I.DATA_LOSS;default:return G()}}(ae=Me||(Me={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Gu{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return so}static getOrCreateInstance(){return so===null&&(so=new Gu),so}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let so=null;/**
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
 */function $1(){return new TextEncoder}/**
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
 */const V1=new Vs([4294967295,4294967295],0);function Id(t){const e=$1().encode(t),n=new qS;return n.update(e),new Uint8Array(n.digest())}function Td(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Vs([n,s],0),new Vs([r,i],0)]}class Qu{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new xr(`Invalid padding: ${n}`);if(s<0)throw new xr(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new xr(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new xr(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=Vs.fromNumber(this.It)}Et(e,n,s){let r=e.add(n.multiply(Vs.fromNumber(s)));return r.compare(V1)===1&&(r=new Vs([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=Id(e),[s,r]=Td(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(s,r,i);if(!this.At(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Qu(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=Id(e),[s,r]=Td(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(s,r,i);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class xr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ba{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Fi.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Ba(J.min(),r,new De(de),vn(),ie())}}class Fi{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Fi(s,n,ie(),ie(),ie())}}/**
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
 */class vo{constructor(e,n,s,r){this.Pt=e,this.removedTargetIds=n,this.key=s,this.bt=r}}class Ty{constructor(e,n){this.targetId=e,this.Vt=n}}class by{constructor(e,n,s=ct.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class bd{constructor(){this.St=0,this.Dt=Cd(),this.Ct=ct.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=ie(),n=ie(),s=ie();return this.Dt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:G()}}),new Fi(this.Ct,this.xt,e,n,s)}Ft(){this.Nt=!1,this.Dt=Cd()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class B1{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=vn(),this.zt=Sd(),this.Wt=new De(de)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const s=this.Zt(n);switch(e.state){case 0:this.te(n)&&s.$t(e.resumeToken);break;case 1:s.Ut(),s.kt||s.Ft(),s.$t(e.resumeToken);break;case 2:s.Ut(),s.kt||this.removeTarget(n);break;case 3:this.te(n)&&(s.Kt(),s.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),s.$t(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((s,r)=>{this.te(r)&&n(r)})}ne(e){var n;const s=e.targetId,r=e.Vt.count,i=this.se(s);if(i){const o=i.target;if(_l(o))if(r===0){const a=new B(o.path);this.Yt(s,a,et.newNoDocument(a,J.min()))}else Ae(r===1);else{const a=this.ie(s);if(a!==r){const c=this.re(e,a);if(c!==0){this.ee(s);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(s,l)}(n=Gu.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(l,u,h){var f,g,y,_,T,R;const P={localCacheCount:u,existenceFilterCount:h.count},q=h.unchangedNames;return q&&(P.bloomFilter={applied:l===0,hashCount:(f=q==null?void 0:q.hashCount)!==null&&f!==void 0?f:0,bitmapLength:(_=(y=(g=q==null?void 0:q.bits)===null||g===void 0?void 0:g.bitmap)===null||y===void 0?void 0:y.length)!==null&&_!==void 0?_:0,padding:(R=(T=q==null?void 0:q.bits)===null||T===void 0?void 0:T.padding)!==null&&R!==void 0?R:0}),P}(c,a,e.Vt))}}}}re(e,n){const{unchangedNames:s,count:r}=e.Vt;if(!s||!s.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=s;let c,l;try{c=gs(i).toUint8Array()}catch(u){if(u instanceof ey)return Zs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{l=new Qu(c,o,a)}catch(u){return Zs(u instanceof xr?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return l.It===0?1:r!==n-this.oe(e.targetId,l)?2:0}oe(e,n){const s=this.Gt.getRemoteKeysForTarget(e);let r=0;return s.forEach(i=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;n.vt(a)||(this.Yt(e,i,null),r++)}),r}ce(e){const n=new Map;this.Qt.forEach((i,o)=>{const a=this.se(o);if(a){if(i.current&&_l(a.target)){const c=new B(a.target.path);this.jt.get(c)!==null||this.ae(o,c)||this.Yt(o,c,et.newNoDocument(c,e))}i.Mt&&(n.set(o,i.Ot()),i.Ft())}});let s=ie();this.zt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.se(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.jt.forEach((i,o)=>o.setReadTime(e));const r=new Ba(e,n,this.Wt,this.jt,s);return this.jt=vn(),this.zt=Sd(),this.Wt=new De(de),r}Jt(e,n){if(!this.te(e))return;const s=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,s),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,s){if(!this.te(e))return;const r=this.Zt(e);this.ae(e,n)?r.Bt(n,1):r.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),s&&(this.jt=this.jt.insert(n,s))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new bd,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new it(de),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new bd),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function Sd(){return new De(B.comparator)}function Cd(){return new De(B.comparator)}const j1=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),z1=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),q1=(()=>({and:"AND",or:"OR"}))();class H1{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Tl(t,e){return t.useProto3Json||xa(e)?e:{value:e}}function Go(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Sy(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function K1(t,e){return Go(t,e.toTimestamp())}function Jt(t){return Ae(!!t),J.fromTimestamp(function(e){const n=zn(e);return new Ue(n.seconds,n.nanos)}(t))}function Yu(t,e){return function(n){return new Ce(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Cy(t){const e=Ce.fromString(t);return Ae(Ny(e)),e}function bl(t,e){return Yu(t.databaseId,e.path)}function Rc(t,e){const n=Cy(e);if(n.get(1)!==t.databaseId.projectId)throw new M(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new M(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new B(Ay(n))}function Sl(t,e){return Yu(t.databaseId,e)}function W1(t){const e=Cy(t);return e.length===4?Ce.emptyPath():Ay(e)}function Cl(t){return new Ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ay(t){return Ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ad(t,e,n){return{name:bl(t,e),fields:n.value.mapValue.fields}}function G1(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.useProto3Json?(Ae(l===void 0||typeof l=="string"),ct.fromBase64String(l||"")):(Ae(l===void 0||l instanceof Uint8Array),ct.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?I.UNKNOWN:Iy(c.code);return new M(l,c.message||"")}(o);n=new by(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Rc(t,s.document.name),i=Jt(s.document.updateTime),o=s.document.createTime?Jt(s.document.createTime):J.min(),a=new pt({mapValue:{fields:s.document.fields}}),c=et.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new vo(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Rc(t,s.document),i=s.readTime?Jt(s.readTime):J.min(),o=et.newNoDocument(r,i),a=s.removedTargetIds||[];n=new vo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Rc(t,s.document),i=s.removedTargetIds||[];n=new vo([],i,r,null)}else{if(!("filter"in e))return G();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new F1(r,i),a=s.targetId;n=new Ty(a,o)}}return n}function Q1(t,e){let n;if(e instanceof Li)n={update:Ad(t,e.key,e.value)};else if(e instanceof Ku)n={delete:bl(t,e.key)};else if(e instanceof Wn)n={update:Ad(t,e.key,e.data),updateMask:rC(e.fieldMask)};else{if(!(e instanceof x1))return G();n={verify:bl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Ko)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof mi)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof yi)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Wo)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw G()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:K1(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:G()}(t,e.precondition)),n}function Y1(t,e){return t&&t.length>0?(Ae(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Jt(s.updateTime):Jt(r);return i.isEqual(J.min())&&(i=Jt(r)),new D1(i,s.transformResults||[])}(n,e))):[]}function J1(t,e){return{documents:[Sl(t,e.path)]}}function X1(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Sl(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Sl(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Ry(Ft.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:ks(u.field),direction:tC(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Tl(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function Z1(t){let e=W1(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Ae(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=ky(u);return h instanceof Ft&&ry(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Bs(Rs(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,xa(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,f=u.values||[];return new Ho(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,f=u.values||[];return new Ho(f,h)}(n.endAt)),_1(e,r,o,i,a,"F",c,l)}function eC(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function ky(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Rs(e.unaryFilter.field);return Fe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Rs(e.unaryFilter.field);return Fe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Rs(e.unaryFilter.field);return Fe.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Rs(e.unaryFilter.field);return Fe.create(i,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(e){return Fe.create(Rs(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Ft.create(e.compositeFilter.filters.map(n=>ky(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return G()}}(e.compositeFilter.op))}(t):G()}function tC(t){return j1[t]}function nC(t){return z1[t]}function sC(t){return q1[t]}function ks(t){return{fieldPath:t.canonicalString()}}function Rs(t){return nt.fromServerFormat(t.fieldPath)}function Ry(t){return t instanceof Fe?function(e){if(e.op==="=="){if(dd(e.value))return{unaryFilter:{field:ks(e.field),op:"IS_NAN"}};if(fd(e.value))return{unaryFilter:{field:ks(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(dd(e.value))return{unaryFilter:{field:ks(e.field),op:"IS_NOT_NAN"}};if(fd(e.value))return{unaryFilter:{field:ks(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ks(e.field),op:nC(e.op),value:e.value}}}(t):t instanceof Ft?function(e){const n=e.getFilters().map(s=>Ry(s));return n.length===1?n[0]:{compositeFilter:{op:sC(e.op),filters:n}}}(t):G()}function rC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Ny(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class xn{constructor(e,n,s,r,i=J.min(),o=J.min(),a=ct.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new xn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new xn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class iC{constructor(e){this.fe=e}}function oC(t){const e=Z1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?El(e,e.limit,"L"):e}/**
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
 */class aC{constructor(){this.rn=new cC}addToCollectionParentIndex(e,n){return this.rn.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(jn.min())}getMinOffsetFromCollectionGroup(e,n){return A.resolve(jn.min())}updateCollectionGroup(e,n,s){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class cC{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new it(Ce.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new it(Ce.comparator)).toArray()}}/**
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
 */class sr{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new sr(0)}static Mn(){return new sr(-1)}}/**
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
 */class lC{constructor(){this.changes=new _r(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?A.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class uC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class hC{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Hr(s.mutation,r,It.empty(),Ue.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ie()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ie()){const r=rs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Or();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=rs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ie()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=vn();const o=qr(),a=qr();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof Wn)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Hr(u.mutation,l,u.mutation.getFieldMask(),Ue.now())):o.set(l.key,It.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new uC(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=qr();let r=new De((o,a)=>o-a),i=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||It.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||ie()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=dy();u.forEach(f=>{if(!i.has(f)){const g=wy(n.get(f),s.get(f));g!==null&&h.set(f,g),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return A.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return B.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):cy(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):A.resolve(rs());let a=-1,c=i;return o.next(l=>A.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?A.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,ie())).next(u=>({batchId:a,changes:fy(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new B(n)).next(s=>{let r=Or();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=Or();return this.indexManager.getCollectionParents(e,r).next(o=>A.forEach(o,a=>{const c=function(l,u){return new vr(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,et.newInvalidDocument(l)))});let o=Or();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&Hr(l.mutation,c,It.empty(),Ue.now()),Ua(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class fC{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return A.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var s;return this.cs.set(n.id,{id:(s=n).id,version:s.version,createTime:Jt(s.createTime)}),A.resolve()}getNamedQuery(e,n){return A.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(s){return{name:s.name,query:oC(s.bundledQuery),readTime:Jt(s.readTime)}}(n)),A.resolve()}}/**
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
 */class dC{constructor(){this.overlays=new De(B.comparator),this.ls=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}getOverlays(e,n){const s=rs();return A.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.we(e,n,i)}),A.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ls.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ls.delete(s)),A.resolve()}getOverlaysForCollection(e,n,s){const r=rs(),i=n.length+1,o=new B(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return A.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new De((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=rs(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=rs(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return A.resolve(a)}we(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ls.get(r.largestBatchId).delete(s.key);this.ls.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new L1(n,s));let i=this.ls.get(n);i===void 0&&(i=ie(),this.ls.set(n,i)),this.ls.set(n,i.add(s.key))}}/**
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
 */class Ju{constructor(){this.fs=new it(Be.ds),this.ws=new it(Be._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const s=new Be(e,n);this.fs=this.fs.add(s),this.ws=this.ws.add(s)}gs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ys(new Be(e,n))}ps(e,n){e.forEach(s=>this.removeReference(s,n))}Is(e){const n=new B(new Ce([])),s=new Be(n,e),r=new Be(n,e+1),i=[];return this.ws.forEachInRange([s,r],o=>{this.ys(o),i.push(o.key)}),i}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new B(new Ce([])),s=new Be(n,e),r=new Be(n,e+1);let i=ie();return this.ws.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Be(e,0),s=this.fs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Be{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return B.comparator(e.key,n.key)||de(e.As,n.As)}static _s(e,n){return de(e.As,n.As)||B.comparator(e.key,n.key)}}/**
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
 */class pC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new it(Be.ds)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new M1(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.Rs=this.Rs.add(new Be(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.bs(s),i=r<0?0:r;return A.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Be(n,0),r=new Be(n,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([s,r],o=>{const a=this.Ps(o.As);i.push(a)}),A.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new it(de);return n.forEach(r=>{const i=new Be(r,0),o=new Be(r,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],a=>{s=s.add(a.As)})}),A.resolve(this.Vs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;B.isDocumentKey(i)||(i=i.child(""));const o=new Be(new B(i),0);let a=new it(de);return this.Rs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.As)),!0)},o),A.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(s=>{const r=this.Ps(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Ae(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return A.forEach(n.mutations,r=>{const i=new Be(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Rs=s})}Cn(e){}containsKey(e,n){const s=new Be(n,0),r=this.Rs.firstAfterOrEqual(s);return A.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class gC{constructor(e){this.Ds=e,this.docs=new De(B.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ds(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return A.resolve(s?s.document.mutableCopy():et.newInvalidDocument(n))}getEntries(e,n){let s=vn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():et.newInvalidDocument(r))}),A.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=vn();const o=n.path,a=new B(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||n1(t1(u),s)<=0||(r.has(u.key)||Ua(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return A.resolve(i)}getAllFromCollectionGroup(e,n,s,r){G()}Cs(e,n){return A.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new mC(this)}getSize(e){return A.resolve(this.size)}}class mC extends lC{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.os.addEntry(e,r)):this.os.removeEntry(s)}),A.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
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
 */class yC{constructor(e){this.persistence=e,this.xs=new _r(n=>zu(n),qu),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Ju,this.targetCount=0,this.Ms=sr.kn()}forEachTarget(e,n){return this.xs.forEach((s,r)=>n(r)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ns&&(this.Ns=n),A.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new sr(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.Fn(n),A.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.xs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),A.waitFor(i).next(()=>r)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const s=this.xs.get(n)||null;return A.resolve(s)}addMatchingKeys(e,n,s){return this.ks.gs(n,s),A.resolve()}removeMatchingKeys(e,n,s){this.ks.ps(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),A.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),A.resolve()}getMatchingKeysForTargetId(e,n){const s=this.ks.Es(n);return A.resolve(s)}containsKey(e,n){return A.resolve(this.ks.containsKey(n))}}/**
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
 */class vC{constructor(e,n){this.$s={},this.overlays={},this.Os=new $u(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new yC(this),this.indexManager=new aC,this.remoteDocumentCache=function(s){return new gC(s)}(s=>this.referenceDelegate.Ls(s)),this.serializer=new iC(n),this.qs=new fC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new dC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.$s[e.toKey()];return s||(s=new pC(n,this.referenceDelegate),this.$s[e.toKey()]=s),s}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,s){$("MemoryPersistence","Starting transaction:",e);const r=new _C(this.Os.next());return this.referenceDelegate.Us(),s(r).next(i=>this.referenceDelegate.Ks(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Gs(e,n){return A.or(Object.values(this.$s).map(s=>()=>s.containsKey(e,n)))}}class _C extends r1{constructor(e){super(),this.currentSequenceNumber=e}}class Xu{constructor(e){this.persistence=e,this.Qs=new Ju,this.js=null}static zs(e){return new Xu(e)}get Ws(){if(this.js)return this.js;throw G()}addReference(e,n,s){return this.Qs.addReference(s,n),this.Ws.delete(s.toString()),A.resolve()}removeReference(e,n,s){return this.Qs.removeReference(s,n),this.Ws.add(s.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),A.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(r=>this.Ws.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ws.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Ws,s=>{const r=B.fromPath(s);return this.Hs(e,r).next(i=>{i||n.removeEntry(r,J.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(s=>{s?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return A.or([()=>A.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
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
 */class Zu{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Fi=s,this.Bi=r}static Li(e,n){let s=ie(),r=ie();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Zu(e,n.fromCache,s,r)}}/**
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
 */class wC{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ki(e,n).next(i=>i||this.Gi(e,n,r,s)).next(i=>i||this.Qi(e,n))}Ki(e,n){if(yd(n))return A.resolve(null);let s=yn(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=El(n,null,"F"),s=yn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=ie(...i);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.ji(n,a);return this.zi(n,l,o,c.readTime)?this.Ki(e,El(n,null,"F")):this.Wi(e,l,n,c)}))})))}Gi(e,n,s,r){return yd(n)||r.isEqual(J.min())?this.Qi(e,n):this.Ui.getDocuments(e,s).next(i=>{const o=this.ji(n,i);return this.zi(n,o,s,r)?this.Qi(e,n):(ad()<=ue.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Il(n)),this.Wi(e,o,n,e1(r,-1)))})}ji(e,n){let s=new it(uy(e));return n.forEach((r,i)=>{Ua(e,i)&&(s=s.add(i))}),s}zi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Qi(e,n){return ad()<=ue.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",Il(n)),this.Ui.getDocumentsMatchingQuery(e,n,jn.min())}Wi(e,n,s,r){return this.Ui.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class EC{constructor(e,n,s,r){this.persistence=e,this.Hi=n,this.serializer=r,this.Ji=new De(de),this.Yi=new _r(i=>zu(i),qu),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(s)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new hC(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function IC(t,e,n,s){return new EC(t,e,n,s)}async function Dy(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.tr(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=ie();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({er:l,removedBatchIds:o,addedBatchIds:a}))})})}function TC(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=A.resolve();return h.forEach(g=>{f=f.next(()=>l.getEntry(a,g)).next(y=>{const _=c.docVersions.get(g);Ae(_!==null),y.version.compareTo(_)<0&&(u.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),l.addEntry(y)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=ie();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Py(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function bC(t,e){const n=Z(t),s=e.snapshotVersion;let r=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});r=n.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const f=r.get(h);if(!f)return;a.push(n.Bs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(i,u.addedDocuments,h)));let g=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(ct.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,s)),r=r.insert(h,g),function(y,_,T){return y.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(f,g,u)&&a.push(n.Bs.updateTargetData(i,g))});let c=vn(),l=ie();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(SC(i,o,e.documentUpdates).next(u=>{c=u.nr,l=u.sr})),!s.isEqual(J.min())){const u=n.Bs.getLastRemoteSnapshotVersion(i).next(h=>n.Bs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return A.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ji=r,i))}function SC(t,e,n){let s=ie(),r=ie();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=vn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(J.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):$("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{nr:o,sr:r}})}function CC(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function AC(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Bs.getTargetData(s,e).next(i=>i?(r=i,A.resolve(r)):n.Bs.allocateTargetId(s).next(o=>(r=new xn(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Bs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ji.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(s.targetId,s),n.Yi.set(e,s.targetId)),s})}async function Al(t,e,n){const s=Z(t),r=s.Ji.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Mi(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ji=s.Ji.remove(e),s.Yi.delete(r.target)}function kd(t,e,n){const s=Z(t);let r=J.min(),i=ie();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=Z(a),h=u.Yi.get(l);return h!==void 0?A.resolve(u.Ji.get(h)):u.Bs.getTargetData(c,l)}(s,o,yn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Bs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Hi.getDocumentsMatchingQuery(o,e,n?r:J.min(),n?i:ie())).next(a=>(kC(s,w1(e),a),{documents:a,ir:i})))}function kC(t,e,n){let s=t.Xi.get(e)||J.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Xi.set(e,s)}class Rd{constructor(){this.activeTargetIds=C1()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class RC{constructor(){this.Hr=new Rd,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,s){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Rd,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class NC{Yr(e){}shutdown(){}}/**
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
 */class Nd{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ro=null;function Nc(){return ro===null?ro=268435456+Math.round(2147483648*Math.random()):ro++,"0x"+ro.toString(16)}/**
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
 */const DC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class PC{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
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
 */const Xe="WebChannelConnection";class OC extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,s,r,i){const o=Nc(),a=this.To(e,n);$("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.Eo(c,r,i),this.Ao(e,a,c,s).then(l=>($("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw Zs("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",s),l})}vo(e,n,s,r,i,o){return this.Io(e,n,s,r,i)}Eo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+yr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}To(e,n){const s=DC[e];return`${this.mo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,s,r){const i=Nc();return new Promise((o,a)=>{const c=new zS;c.setWithCredentials(!0),c.listenOnce(VS.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case kc.NO_ERROR:const u=c.getResponseJson();$(Xe,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case kc.TIMEOUT:$(Xe,`RPC '${e}' ${i} timed out`),a(new M(I.DEADLINE_EXCEEDED,"Request time out"));break;case kc.HTTP_ERROR:const h=c.getStatus();if($(Xe,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const g=f==null?void 0:f.error;if(g&&g.status&&g.message){const y=function(_){const T=_.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(T)>=0?T:I.UNKNOWN}(g.status);a(new M(y,g.message))}else a(new M(I.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new M(I.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{$(Xe,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(r);$(Xe,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",l,s,15)})}Ro(e,n,s){const r=Nc(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=US(),a=$S(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new jS({})),this.Eo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const u=i.join("");$(Xe,`Creating RPC '${e}' stream ${r}: ${u}`,c);const h=o.createWebChannel(u,c);let f=!1,g=!1;const y=new PC({ro:T=>{g?$(Xe,`Not sending because RPC '${e}' stream ${r} is closed:`,T):(f||($(Xe,`Opening RPC '${e}' stream ${r} transport.`),h.open(),f=!0),$(Xe,`RPC '${e}' stream ${r} sending:`,T),h.send(T))},oo:()=>h.close()}),_=(T,R,P)=>{T.listen(R,q=>{try{P(q)}catch(F){setTimeout(()=>{throw F},0)}})};return _(h,eo.EventType.OPEN,()=>{g||$(Xe,`RPC '${e}' stream ${r} transport opened.`)}),_(h,eo.EventType.CLOSE,()=>{g||(g=!0,$(Xe,`RPC '${e}' stream ${r} transport closed`),y.wo())}),_(h,eo.EventType.ERROR,T=>{g||(g=!0,Zs(Xe,`RPC '${e}' stream ${r} transport errored:`,T),y.wo(new M(I.UNAVAILABLE,"The operation could not be completed")))}),_(h,eo.EventType.MESSAGE,T=>{var R;if(!g){const P=T.data[0];Ae(!!P);const q=P,F=q.error||((R=q[0])===null||R===void 0?void 0:R.error);if(F){$(Xe,`RPC '${e}' stream ${r} received error:`,F);const oe=F.status;let Te=function(se){const ee=Me[se];if(ee!==void 0)return Iy(ee)}(oe),Pe=F.message;Te===void 0&&(Te=I.INTERNAL,Pe="Unknown error status: "+oe+" with message "+F.message),g=!0,y.wo(new M(Te,Pe)),h.close()}else $(Xe,`RPC '${e}' stream ${r} received:`,P),y._o(P)}}),_(a,BS.STAT_EVENT,T=>{T.stat===id.PROXY?$(Xe,`RPC '${e}' stream ${r} detected buffering proxy`):T.stat===id.NOPROXY&&$(Xe,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{y.fo()},0),y}}function Dc(){return typeof document<"u"?document:null}/**
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
 */function ja(t){return new H1(t,!0)}/**
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
 */class Oy{constructor(e,n,s=1e3,r=1.5,i=6e4){this.ii=e,this.timerId=n,this.Po=s,this.bo=r,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),s=Math.max(0,Date.now()-this.Co),r=Math.max(0,n-s);r>0&&$("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class xy{constructor(e,n,s,r,i,o,a,c){this.ii=e,this.$o=s,this.Oo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Oy(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(mn(n.toString()),mn("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Fo===n&&this.Zo(s,r)},s=>{e(()=>{const r=new M(I.UNKNOWN,"Fetching auth token failed: "+s.message);return this.tu(r)})})}Zo(e,n){const s=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{s(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(r=>{s(()=>this.tu(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class xC extends xy{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=G1(this.serializer,e),s=function(r){if(!("targetChange"in r))return J.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?J.min():i.readTime?Jt(i.readTime):J.min()}(e);return this.listener.nu(n,s)}su(e){const n={};n.database=Cl(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;if(o=_l(a)?{documents:J1(r,a)}:{query:X1(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=Sy(r,i.resumeToken);const c=Tl(r,i.expectedCount);c!==null&&(o.expectedCount=c)}else if(i.snapshotVersion.compareTo(J.min())>0){o.readTime=Go(r,i.snapshotVersion.toTimestamp());const c=Tl(r,i.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const s=eC(this.serializer,e);s&&(n.labels=s),this.Wo(n)}iu(e){const n={};n.database=Cl(this.serializer),n.removeTarget=e,this.Wo(n)}}class MC extends xy{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(Ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=Y1(e.writeResults,e.commitTime),s=Jt(e.commitTime);return this.listener.cu(s,n)}return Ae(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Cl(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Q1(this.serializer,s))};this.Wo(n)}}/**
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
 */class LC extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.lu=!1}fu(){if(this.lu)throw new M(I.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.Io(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new M(I.UNKNOWN,r.toString())})}vo(e,n,s,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.vo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(I.UNKNOWN,i.toString())})}terminate(){this.lu=!0}}class FC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(mn(n),this.mu=!1):$("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class UC{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr(o=>{s.enqueueAndForget(async()=>{_s(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=Z(a);c.vu.add(4),await Ui(c),c.bu.set("Unknown"),c.vu.delete(4),await za(c)}(this))})}),this.bu=new FC(s,r)}}async function za(t){if(_s(t))for(const e of t.Ru)await e(!0)}async function Ui(t){for(const e of t.Ru)await e(!1)}function My(t,e){const n=Z(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),nh(n)?th(n):wr(n).Ko()&&eh(n,e))}function Ly(t,e){const n=Z(t),s=wr(n);n.Au.delete(e),s.Ko()&&Fy(n,e),n.Au.size===0&&(s.Ko()?s.jo():_s(n)&&n.bu.set("Unknown"))}function eh(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}wr(t).su(e)}function Fy(t,e){t.Vu.qt(e),wr(t).iu(e)}function th(t){t.Vu=new B1({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),wr(t).start(),t.bu.gu()}function nh(t){return _s(t)&&!wr(t).Uo()&&t.Au.size>0}function _s(t){return Z(t).vu.size===0}function Uy(t){t.Vu=void 0}async function $C(t){t.Au.forEach((e,n)=>{eh(t,e)})}async function VC(t,e){Uy(t),nh(t)?(t.bu.Iu(e),th(t)):t.bu.set("Unknown")}async function BC(t,e,n){if(t.bu.set("Online"),e instanceof by&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.Au.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.Au.delete(o),s.Vu.removeTarget(o))}(t,e)}catch(s){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Qo(t,s)}else if(e instanceof vo?t.Vu.Ht(e):e instanceof Ty?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(J.min()))try{const s=await Py(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Vu.ce(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.Au.get(c);l&&r.Au.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach((a,c)=>{const l=r.Au.get(a);if(!l)return;r.Au.set(a,l.withResumeToken(ct.EMPTY_BYTE_STRING,l.snapshotVersion)),Fy(r,a);const u=new xn(l.target,a,c,l.sequenceNumber);eh(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){$("RemoteStore","Failed to raise snapshot:",s),await Qo(t,s)}}async function Qo(t,e,n){if(!Mi(e))throw e;t.vu.add(1),await Ui(t),t.bu.set("Offline"),n||(n=()=>Py(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await za(t)})}function $y(t,e){return e().catch(n=>Qo(t,n,e))}async function qa(t){const e=Z(t),n=qn(e);let s=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;jC(e);)try{const r=await CC(e.localStore,s);if(r===null){e.Eu.length===0&&n.jo();break}s=r.batchId,zC(e,r)}catch(r){await Qo(e,r)}Vy(e)&&By(e)}function jC(t){return _s(t)&&t.Eu.length<10}function zC(t,e){t.Eu.push(e);const n=qn(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function Vy(t){return _s(t)&&!qn(t).Uo()&&t.Eu.length>0}function By(t){qn(t).start()}async function qC(t){qn(t).hu()}async function HC(t){const e=qn(t);for(const n of t.Eu)e.uu(n.mutations)}async function KC(t,e,n){const s=t.Eu.shift(),r=Wu.from(s,e,n);await $y(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await qa(t)}async function WC(t,e){e&&qn(t).ou&&await async function(n,s){if(r=s.code,U1(r)&&r!==I.ABORTED){const i=n.Eu.shift();qn(n).Qo(),await $y(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await qa(n)}var r}(t,e),Vy(t)&&By(t)}async function Dd(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const s=_s(n);n.vu.add(3),await Ui(n),s&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await za(n)}async function GC(t,e){const n=Z(t);e?(n.vu.delete(2),await za(n)):e||(n.vu.add(2),await Ui(n),n.bu.set("Unknown"))}function wr(t){return t.Su||(t.Su=function(e,n,s){const r=Z(e);return r.fu(),new xC(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{uo:$C.bind(null,t),ao:VC.bind(null,t),nu:BC.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),nh(t)?th(t):t.bu.set("Unknown")):(await t.Su.stop(),Uy(t))})),t.Su}function qn(t){return t.Du||(t.Du=function(e,n,s){const r=Z(e);return r.fu(),new MC(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{uo:qC.bind(null,t),ao:WC.bind(null,t),au:HC.bind(null,t),cu:KC.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await qa(t)):(await t.Du.stop(),t.Eu.length>0&&($("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
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
 */class sh{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new hn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new sh(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rh(t,e){if(mn("AsyncQueue",`${e}: ${t}`),Mi(t))return new M(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class zs{constructor(e){this.comparator=e?(n,s)=>e(n,s)||B.comparator(n.key,s.key):(n,s)=>B.comparator(n.key,s.key),this.keyedMap=Or(),this.sortedSet=new De(this.comparator)}static emptySet(e){return new zs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof zs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new zs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Pd{constructor(){this.Cu=new De(B.comparator)}track(e){const n=e.doc.key,s=this.Cu.get(n);s?e.type!==0&&s.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&s.type!==1?this.Cu=this.Cu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Cu=this.Cu.remove(n):e.type===1&&s.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):G():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,s)=>{e.push(s)}),e}}class rr{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new rr(e,n,zs.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class QC{constructor(){this.Nu=void 0,this.listeners=[]}}class YC{constructor(){this.queries=new _r(e=>ly(e),Fa),this.onlineState="Unknown",this.ku=new Set}}async function ih(t,e){const n=Z(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new QC),r)try{i.Nu=await n.onListen(s)}catch(o){const a=rh(o,`Initialization of query '${Il(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Mu(n.onlineState),i.Nu&&e.$u(i.Nu)&&ah(n)}async function oh(t,e){const n=Z(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function JC(t,e){const n=Z(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.$u(r)&&(s=!0);o.Nu=r}}s&&ah(n)}function XC(t,e,n){const s=Z(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function ah(t){t.ku.forEach(e=>{e.next()})}class ch{constructor(e,n,s){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=s||{}}$u(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new rr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ku||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=rr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
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
 */class jy{constructor(e){this.key=e}}class zy{constructor(e){this.key=e}}class ZC{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=ie(),this.mutatedKeys=ie(),this.tc=uy(e),this.ec=new zs(this.tc)}get nc(){return this.Yu}sc(e,n){const s=n?n.ic:new Pd,r=n?n.ec:this.ec;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const f=r.get(u),g=Ua(this.query,h)?h:null,y=!!f&&this.mutatedKeys.has(f.key),_=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let T=!1;f&&g?f.data.isEqual(g.data)?y!==_&&(s.track({type:3,doc:g}),T=!0):this.rc(f,g)||(s.track({type:2,doc:g}),T=!0,(c&&this.tc(g,c)>0||l&&this.tc(g,l)<0)&&(a=!0)):!f&&g?(s.track({type:0,doc:g}),T=!0):f&&!g&&(s.track({type:1,doc:f}),T=!0,(c||l)&&(a=!0)),T&&(g?(o=o.add(g),i=_?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{ec:o,ic:s,zi:a,mutatedKeys:i}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const i=e.ic.xu();i.sort((l,u)=>function(h,f){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return g(h)-g(f)}(l.type,u.type)||this.tc(l.doc,u.doc)),this.oc(s);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,c=a!==this.Xu;return this.Xu=a,i.length!==0||c?{snapshot:new rr(this.query,e.ec,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Pd,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=ie(),this.ec.forEach(s=>{this.ac(s.key)&&(this.Zu=this.Zu.add(s.key))});const n=[];return e.forEach(s=>{this.Zu.has(s)||n.push(new zy(s))}),this.Zu.forEach(s=>{e.has(s)||n.push(new jy(s))}),n}hc(e){this.Yu=e.ir,this.Zu=ie();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return rr.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class eA{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class tA{constructor(e){this.key=e,this.fc=!1}}class nA{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new _r(a=>ly(a),Fa),this._c=new Map,this.mc=new Set,this.gc=new De(B.comparator),this.yc=new Map,this.Ic=new Ju,this.Tc={},this.Ec=new Map,this.Ac=sr.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function sA(t,e){const n=dA(t);let s,r;const i=n.wc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.lc();else{const o=await AC(n.localStore,yn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await rA(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&My(n.remoteStore,o)}return r}async function rA(t,e,n,s,r){t.Rc=(h,f,g)=>async function(y,_,T,R){let P=_.view.sc(T);P.zi&&(P=await kd(y.localStore,_.query,!1).then(({documents:oe})=>_.view.sc(oe,P)));const q=R&&R.targetChanges.get(_.targetId),F=_.view.applyChanges(P,y.isPrimaryClient,q);return xd(y,_.targetId,F.cc),F.snapshot}(t,h,f,g);const i=await kd(t.localStore,e,!0),o=new ZC(e,i.ir),a=o.sc(i.documents),c=Fi.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);xd(t,n,l.cc);const u=new eA(e,n,o);return t.wc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),l.snapshot}async function iA(t,e){const n=Z(t),s=n.wc.get(e),r=n._c.get(s.targetId);if(r.length>1)return n._c.set(s.targetId,r.filter(i=>!Fa(i,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Al(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Ly(n.remoteStore,s.targetId),kl(n,s.targetId)}).catch(xi)):(kl(n,s.targetId),await Al(n.localStore,s.targetId,!0))}async function oA(t,e,n){const s=pA(t);try{const r=await function(i,o){const a=Z(i),c=Ue.now(),l=o.reduce((f,g)=>f.add(g.key),ie());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=vn(),y=ie();return a.Zi.getEntries(f,l).next(_=>{g=_,g.forEach((T,R)=>{R.isValidDocument()||(y=y.add(T))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,g)).next(_=>{u=_;const T=[];for(const R of o){const P=O1(R,u.get(R.key).overlayedDocument);P!=null&&T.push(new Wn(R.key,P,ty(P.value.mapValue),kt.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,T,o)}).next(_=>{h=_;const T=_.applyToLocalDocumentSet(u,y);return a.documentOverlayCache.saveOverlays(f,_.batchId,T)})}).then(()=>({batchId:h.batchId,changes:fy(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.Tc[i.currentUser.toKey()];c||(c=new De(de)),c=c.insert(o,a),i.Tc[i.currentUser.toKey()]=c}(s,r.batchId,n),await $i(s,r.changes),await qa(s.remoteStore)}catch(r){const i=rh(r,"Failed to persist write");n.reject(i)}}async function qy(t,e){const n=Z(t);try{const s=await bC(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.yc.get(i);o&&(Ae(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.fc=!0:r.modifiedDocuments.size>0?Ae(o.fc):r.removedDocuments.size>0&&(Ae(o.fc),o.fc=!1))}),await $i(n,s,e)}catch(s){await xi(s)}}function Od(t,e,n){const s=Z(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.wc.forEach((i,o)=>{const a=o.view.Mu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=Z(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Mu(o)&&(c=!0)}),c&&ah(a)}(s.eventManager,e),r.length&&s.dc.nu(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function aA(t,e,n){const s=Z(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.yc.get(e),i=r&&r.key;if(i){let o=new De(B.comparator);o=o.insert(i,et.newNoDocument(i,J.min()));const a=ie().add(i),c=new Ba(J.min(),new Map,new De(de),o,a);await qy(s,c),s.gc=s.gc.remove(i),s.yc.delete(e),lh(s)}else await Al(s.localStore,e,!1).then(()=>kl(s,e,n)).catch(xi)}async function cA(t,e){const n=Z(t),s=e.batch.batchId;try{const r=await TC(n.localStore,e);Ky(n,s,null),Hy(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await $i(n,r)}catch(r){await xi(r)}}async function lA(t,e,n){const s=Z(t);try{const r=await function(i,o){const a=Z(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(Ae(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);Ky(s,e,n),Hy(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await $i(s,r)}catch(r){await xi(r)}}function Hy(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function Ky(t,e,n){const s=Z(t);let r=s.Tc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Tc[s.currentUser.toKey()]=r}}function kl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t._c.get(e))t.wc.delete(s),n&&t.dc.Pc(s,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(s=>{t.Ic.containsKey(s)||Wy(t,s)})}function Wy(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(Ly(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),lh(t))}function xd(t,e,n){for(const s of n)s instanceof jy?(t.Ic.addReference(s.key,e),uA(t,s)):s instanceof zy?($("SyncEngine","Document no longer in limbo: "+s.key),t.Ic.removeReference(s.key,e),t.Ic.containsKey(s.key)||Wy(t,s.key)):G()}function uA(t,e){const n=e.key,s=n.path.canonicalString();t.gc.get(n)||t.mc.has(s)||($("SyncEngine","New document in limbo: "+n),t.mc.add(s),lh(t))}function lh(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new B(Ce.fromString(e)),s=t.Ac.next();t.yc.set(s,new tA(n)),t.gc=t.gc.insert(n,s),My(t.remoteStore,new xn(yn(Ma(n.path)),s,"TargetPurposeLimboResolution",$u.ct))}}async function $i(t,e,n){const s=Z(t),r=[],i=[],o=[];s.wc.isEmpty()||(s.wc.forEach((a,c)=>{o.push(s.Rc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=Zu.Li(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.dc.nu(r),await async function(a,c){const l=Z(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>A.forEach(c,h=>A.forEach(h.Fi,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>A.forEach(h.Bi,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!Mi(u))throw u;$("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.Ji.get(h),g=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(g);l.Ji=l.Ji.insert(h,y)}}}(s.localStore,i))}async function hA(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const s=await Dy(n.localStore,e);n.currentUser=e,function(r,i){r.Ec.forEach(o=>{o.forEach(a=>{a.reject(new M(I.CANCELLED,i))})}),r.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await $i(n,s.er)}}function fA(t,e){const n=Z(t),s=n.yc.get(e);if(s&&s.fc)return ie().add(s.key);{let r=ie();const i=n._c.get(e);if(!i)return r;for(const o of i){const a=n.wc.get(o);r=r.unionWith(a.view.nc)}return r}}function dA(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=qy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=fA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=aA.bind(null,e),e.dc.nu=JC.bind(null,e.eventManager),e.dc.Pc=XC.bind(null,e.eventManager),e}function pA(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=cA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=lA.bind(null,e),e}class Md{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ja(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return IC(this.persistence,new wC,e.initialUser,this.serializer)}createPersistence(e){return new vC(Xu.zs,this.serializer)}createSharedClientState(e){return new RC}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class gA{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Od(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=hA.bind(null,this.syncEngine),await GC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new YC}createDatastore(e){const n=ja(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new OC(r));var r;return function(i,o,a,c){return new LC(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Od(this.syncEngine,a,0),o=Nd.D()?new Nd:new NC,new UC(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new nA(s,r,i,o,a,c);return l&&(u.vc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Z(e);$("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await Ui(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
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
 */class uh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):mn("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class mA{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Ze.UNAUTHENTICATED,this.clientId=Xm.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{$("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>($("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new hn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=rh(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Pc(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Dy(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ld(t,e){t.asyncQueue.verifyOperationInProgress();const n=await vA(t);$("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Dd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Dd(e.remoteStore,i)),t._onlineComponents=e}function yA(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function vA(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await Pc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!yA(n))throw n;Zs("Error using user provided cache. Falling back to memory cache: "+n),await Pc(t,new Md)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await Pc(t,new Md);return t._offlineComponents}async function Gy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await Ld(t,t._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await Ld(t,new gA))),t._onlineComponents}function _A(t){return Gy(t).then(e=>e.syncEngine)}async function Yo(t){const e=await Gy(t),n=e.eventManager;return n.onListen=sA.bind(null,e.syncEngine),n.onUnlisten=iA.bind(null,e.syncEngine),n}function wA(t,e,n={}){const s=new hn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new uh({next:h=>{i.enqueueAndForget(()=>oh(r,u));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new M(I.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new M(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new ch(Ma(o.path),l,{includeMetadataChanges:!0,Ku:!0});return ih(r,u)}(await Yo(t),t.asyncQueue,e,n,s)),s.promise}function EA(t,e,n={}){const s=new hn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new uh({next:h=>{i.enqueueAndForget(()=>oh(r,u)),h.fromCache&&a.source==="server"?c.reject(new M(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new ch(o,l,{includeMetadataChanges:!0,Ku:!0});return ih(r,u)}(await Yo(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */function Qy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Fd=new Map;/**
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
 */function Yy(t,e,n){if(!n)throw new M(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function IA(t,e,n,s){if(e===!0&&s===!0)throw new M(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ud(t){if(!B.isDocumentKey(t))throw new M(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function $d(t){if(B.isDocumentKey(t))throw new M(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ha(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function gt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new M(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ha(t);throw new M(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Vd{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new M(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}IA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Qy((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new M(I.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new M(I.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new M(I.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,s=e.experimentalLongPollingOptions,n.timeoutSeconds===s.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,s}}class Ka{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Vd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new M(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new M(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Vd(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new HS;switch(n.type){case"firstParty":return new QS(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new M(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Fd.get(e);n&&($("ComponentProvider","Removing Datastore"),Fd.delete(e),n.terminate())}(this),Promise.resolve()}}function TA(t,e,n,s={}){var r;const i=(t=gt(t,Ka))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Zs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let a,c;if(typeof s.mockUserToken=="string")a=s.mockUserToken,c=Ze.MOCK_USER;else{a=fE(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new M(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Ze(l)}t._authCredentials=new KS(new Jm(a,c))}}/**
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
 */class ot{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Vn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ot(this.firestore,e,this._key)}}class Gn{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Gn(this.firestore,e,this._query)}}class Vn extends Gn{constructor(e,n,s){super(e,n,Ma(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ot(this.firestore,null,new B(e))}withConverter(e){return new Vn(this.firestore,e,this._path)}}function hh(t,e,...n){if(t=Ve(t),Yy("collection","path",e),t instanceof Ka){const s=Ce.fromString(e,...n);return $d(s),new Vn(t,null,s)}{if(!(t instanceof ot||t instanceof Vn))throw new M(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ce.fromString(e,...n));return $d(s),new Vn(t.firestore,null,s)}}function qs(t,e,...n){if(t=Ve(t),arguments.length===1&&(e=Xm.A()),Yy("doc","path",e),t instanceof Ka){const s=Ce.fromString(e,...n);return Ud(s),new ot(t,null,new B(s))}{if(!(t instanceof ot||t instanceof Vn))throw new M(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ce.fromString(e,...n));return Ud(s),new ot(t.firestore,t instanceof Vn?t.converter:null,new B(s))}}/**
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
 */class bA{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Oy(this,"async_queue_retry"),this.Xc=()=>{const n=Dc();n&&$("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=Dc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=Dc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new hn;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Mi(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(s=>{this.Wc=s,this.Hc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw mn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Hc=!1,s))));return this.Gc=n,n}enqueueAfterDelay(e,n,s){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const r=sh.createAndSchedule(this,e,n,s,i=>this.na(i));return this.zc.push(r),r}Zc(){this.Wc&&G()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}function Bd(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class _n extends Ka{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new bA,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Jy(this),this._firestoreClient.terminate()}}function SA(t,e){const n=typeof t=="object"?t:dg(),s=typeof t=="string"?t:e||"(default)",r=ou(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=uE("firestore");i&&TA(r,...i)}return r}function Wa(t){return t._firestoreClient||Jy(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Jy(t){var e,n,s;const r=t._freezeSettings(),i=function(o,a,c,l){return new a1(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Qy(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new mA(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
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
 */class ir{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ir(ct.fromBase64String(e))}catch(n){throw new M(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ir(ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ga{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new M(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class fh{constructor(e){this._methodName=e}}/**
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
 */class dh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new M(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new M(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}}/**
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
 */const CA=/^__.*__$/;class AA{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Wn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Li(e,this.data,n,this.fieldTransforms)}}class Xy{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Wn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Zy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class ph{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new ph(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.aa({path:s,la:!1});return r.fa(e),r}da(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.aa({path:s,la:!1});return r.ua(),r}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Jo(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(Zy(this.ca)&&CA.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class kA{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||ja(e)}ya(e,n,s,r=!1){return new ph({ca:e,methodName:n,ga:s,path:nt.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Qa(t){const e=t._freezeSettings(),n=ja(t._databaseId);return new kA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ev(t,e,n,s,r,i={}){const o=t.ya(i.merge||i.mergeFields?2:0,e,n,r);gh("Data must be an object, but it was:",o,s);const a=tv(s,o);let c,l;if(i.merge)c=new It(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=Rl(e,h,n);if(!o.contains(f))throw new M(I.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);sv(u,f)||u.push(f)}c=new It(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new AA(new pt(a),c,l)}class Ya extends fh{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ya}}function RA(t,e,n,s){const r=t.ya(1,e,n);gh("Data must be an object, but it was:",r,s);const i=[],o=pt.empty();vs(s,(c,l)=>{const u=mh(e,c,n);l=Ve(l);const h=r.da(u);if(l instanceof Ya)i.push(u);else{const f=Vi(l,h);f!=null&&(i.push(u),o.set(u,f))}});const a=new It(i);return new Xy(o,a,r.fieldTransforms)}function NA(t,e,n,s,r,i){const o=t.ya(1,e,n),a=[Rl(e,s,n)],c=[r];if(i.length%2!=0)throw new M(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(Rl(e,i[f])),c.push(i[f+1]);const l=[],u=pt.empty();for(let f=a.length-1;f>=0;--f)if(!sv(l,a[f])){const g=a[f];let y=c[f];y=Ve(y);const _=o.da(g);if(y instanceof Ya)l.push(g);else{const T=Vi(y,_);T!=null&&(l.push(g),u.set(g,T))}}const h=new It(l);return new Xy(u,h,o.fieldTransforms)}function DA(t,e,n,s=!1){return Vi(n,t.ya(s?4:3,e))}function Vi(t,e){if(nv(t=Ve(t)))return gh("Unsupported field value:",e,t),tv(t,e);if(t instanceof fh)return function(n,s){if(!Zy(s.ca))throw s._a(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Vi(o,s.wa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Ve(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return A1(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Ue.fromDate(n);return{timestampValue:Go(s.serializer,r)}}if(n instanceof Ue){const r=new Ue(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Go(s.serializer,r)}}if(n instanceof dh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ir)return{bytesValue:Sy(s.serializer,n._byteString)};if(n instanceof ot){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Yu(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s._a(`Unsupported field value: ${Ha(n)}`)}(t,e)}function tv(t,e){const n={};return Zm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vs(t,(s,r)=>{const i=Vi(r,e.ha(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function nv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ue||t instanceof dh||t instanceof ir||t instanceof ot||t instanceof fh)}function gh(t,e,n){if(!nv(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Ha(n);throw s==="an object"?e._a(t+" a custom object"):e._a(t+" "+s)}}function Rl(t,e,n){if((e=Ve(e))instanceof Ga)return e._internalPath;if(typeof e=="string")return mh(t,e);throw Jo("Field path arguments must be of type string or ",t,!1,void 0,n)}const PA=new RegExp("[~\\*/\\[\\]]");function mh(t,e,n){if(e.search(PA)>=0)throw Jo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ga(...e.split("."))._internalPath}catch{throw Jo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Jo(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new M(I.INVALID_ARGUMENT,a+t+c)}function sv(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class rv{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new OA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ja("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class OA extends rv{data(){return super.data()}}function Ja(t,e){return typeof e=="string"?mh(t,e):e instanceof Ga?e._internalPath:e._delegate._internalPath}/**
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
 */function iv(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new M(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class yh{}class ov extends yh{}function av(t,e,...n){let s=[];e instanceof yh&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof vh).length,o=r.filter(a=>a instanceof Xa).length;if(i>1||i>0&&o>0)throw new M(I.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class Xa extends ov{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new Xa(e,n,s)}_apply(e){const n=this._parse(e);return cv(e._query,n),new Gn(e.firestore,e.converter,wl(e._query,n))}_parse(e){const n=Qa(e.firestore);return function(r,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new M(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){zd(u,l);const f=[];for(const g of u)f.push(jd(a,r,g));h={arrayValue:{values:f}}}else h=jd(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||zd(u,l),h=DA(o,i,u,l==="in"||l==="not-in");return Fe.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function xA(t,e,n){const s=e,r=Ja("where",t);return Xa._create(r,s,n)}class vh extends yh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new vh(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Ft.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)cv(i,a),i=wl(i,a)}(e._query,n),new Gn(e.firestore,e.converter,wl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class _h extends ov{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new _h(e,n)}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new M(I.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new M(I.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Bs(r,i);return function(a,c){if(Hu(a)===null){const l=La(a);l!==null&&lv(a,l,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new Gn(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new vr(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function MA(t,e="asc"){const n=e,s=Ja("orderBy",t);return _h._create(s,n)}function jd(t,e,n){if(typeof(n=Ve(n))=="string"){if(n==="")throw new M(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!cy(e)&&n.indexOf("/")!==-1)throw new M(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Ce.fromString(n));if(!B.isDocumentKey(s))throw new M(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return hd(t,new B(s))}if(n instanceof ot)return hd(t,n._key);throw new M(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ha(n)}.`)}function zd(t,e){if(!Array.isArray(t)||t.length===0)throw new M(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function cv(t,e){if(e.isInequality()){const s=La(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new M(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=Hu(t);i!==null&&lv(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new M(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new M(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function lv(t,e,n){if(!n.isEqual(e))throw new M(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class LA{convertValue(e,n="none"){switch(ms(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(gs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return vs(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new dh(Le(e.latitude),Le(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Bu(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(di(e));default:return null}}convertTimestamp(e){const n=zn(e);return new Ue(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ce.fromString(e);Ae(Ny(s));const r=new pi(s.get(1),s.get(3)),i=new B(s.popFirst(5));return r.isEqual(n)||mn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function uv(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class Mr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class hv extends rv{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new _o(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Ja("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class _o extends hv{data(e={}){return super.data(e)}}class fv{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Mr(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new _o(this._firestore,this._userDataWriter,s.key,s,new Mr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new M(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new _o(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Mr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new _o(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Mr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:FA(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function FA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
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
 */function UA(t){t=gt(t,ot);const e=gt(t.firestore,_n);return wA(Wa(e),t._key).then(n=>mv(e,t,n))}class wh extends LA{constructor(e){super(),this.firestore=e}convertBytes(e){return new ir(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,n)}}function $A(t){t=gt(t,Gn);const e=gt(t.firestore,_n),n=Wa(e),s=new wh(e);return iv(t._query),EA(n,t._query).then(r=>new fv(e,s,t,r))}function VA(t,e,n){t=gt(t,ot);const s=gt(t.firestore,_n),r=uv(t.converter,e,n);return Za(s,[ev(Qa(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,kt.none())])}function BA(t,e,n,...s){t=gt(t,ot);const r=gt(t.firestore,_n),i=Qa(r);let o;return o=typeof(e=Ve(e))=="string"||e instanceof Ga?NA(i,"updateDoc",t._key,e,n,s):RA(i,"updateDoc",t._key,e),Za(r,[o.toMutation(t._key,kt.exists(!0))])}function dv(t){return Za(gt(t.firestore,_n),[new Ku(t._key,kt.none())])}function pv(t,e){const n=gt(t.firestore,_n),s=qs(t),r=uv(t.converter,e);return Za(n,[ev(Qa(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,kt.exists(!1))]).then(()=>s)}function gv(t,...e){var n,s,r;t=Ve(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Bd(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Bd(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,l,u;if(t instanceof ot)l=gt(t.firestore,_n),u=Ma(t._key.path),c={next:h=>{e[o]&&e[o](mv(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=gt(t,Gn);l=gt(h.firestore,_n),u=h._query;const f=new wh(l);c={next:g=>{e[o]&&e[o](new fv(l,f,h,g))},error:e[o+1],complete:e[o+2]},iv(t._query)}return function(h,f,g,y){const _=new uh(y),T=new ch(f,_,g);return h.asyncQueue.enqueueAndForget(async()=>ih(await Yo(h),T)),()=>{_.Dc(),h.asyncQueue.enqueueAndForget(async()=>oh(await Yo(h),T))}}(Wa(l),u,a,c)}function Za(t,e){return function(n,s){const r=new hn;return n.asyncQueue.enqueueAndForget(async()=>oA(await _A(n),s,r)),r.promise}(Wa(t),e)}function mv(t,e,n){const s=n.docs.get(e._key),r=new wh(t);return new hv(t,r,e._key,s,new Mr(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){yr=n})(ur),Js(new us("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new _n(new WS(n.getProvider("auth-internal")),new JS(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new M(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pi(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),$n(od,"3.13.0",t),$n(od,"3.13.0","esm2017")})();var jA="firebase",zA="9.23.0";/**
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
 */$n(jA,zA,"app");const qA={apiKey:"AIzaSyCVv3B9IHJkACNVEZdBTqBdkPX6ojZXxP0",authDomain:"pizza-planet-f2367.firebaseapp.com",projectId:"pizza-planet-f2367",storageBucket:"pizza-planet-f2367.appspot.com",messagingSenderId:"460912677039",appId:"1:460912677039:web:b50bfa118e2577ea25045a"},HA=fg(qA),vi=SA(HA),Nl=hh(vi,"pizzas"),Dl=hh(vi,"orders"),qd=hh(vi,"users"),Bi=pa("storeAuth",()=>{const t=Fb(),e=Ie(""),n=Ie(!1),s=Ie(null),r=Ie(!1),i=Ie(""),o=Ie(null);async function a(y){try{if(i.value="",!r)return;const _=av(qd,xA("email","==",y)),T=await $A(_),R={id:T.docs[0].id,email:T.docs[0].data().email,isAdmin:T.docs[0].data().isAdmin};o.value=R}catch{o.value=null,i.value="No user found with that email"}}async function c(){var y;if((y=s.value)!=null&&y.uid){const _=qs(qd,s.value.uid),T=await UA(_);T.exists()&&T.data().isAdmin?r.value=!0:r.value=!1}}async function l(){try{if(!r.value)return;const y=qs(vi,"users",o.value.id);await BA(y,{isAdmin:!o.value.isAdmin}),a(o.value.email)}catch(y){console.log(y)}}async function u(y,_){try{const{user:T}=await wT(t,y,_),R={createdAt:new Date,email:T.email,isAdmin:!1},P=qs(vi,"users",T.uid);await VA(P,R),e.value="",n.value=!1}catch(T){switch(T.code){case"auth/email-already-in-use":e.value="Email already exists.";break;case"auth/weak-password":e.value="Password should be at least 6 characters long.";break;default:e.value="Sorry, there was an unexpected error."}}}async function h(y,_){if(!y)return e.value="Please enter a valid email";if(!_)return e.value="Please enter a valid password";try{await ET(t,y,_),e.value="",g()}catch(T){switch(T.code){case"auth/wrong-password":e.value="Incorrect password";break;case"auth/user-not-found":e.value="Incorrect email";break;default:e.value="Sorry, there was an unexpected error."}}}function f(){try{ST(t)}catch(y){e.value=y.message}}function g(){n.value=!n.value}return bT(t,y=>{y?(s.value=y,c()):(s.value=null,r.value=!1)}),{signUp:u,logIn:h,logOut:f,userData:s,errorMessage:e,showSignInModal:n,toggleModal:g,userIsAdmin:r,findUser:a,selectedUser:o,toggleAdminMessage:i,toggleAdmin:l}});const yt=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},Eh=t=>(en("data-v-805ca1e5"),t=t(),tn(),t),KA={key:2,class:"modal"},WA={class:"modal_content"},GA=Eh(()=>v("p",{class:"modal_text"},"Please login to continue",-1)),QA={class:"error_message"},YA={class:"form_group"},JA=Eh(()=>v("label",{for:"email"},"Email",-1)),XA={class:"form_group"},ZA=Eh(()=>v("label",{for:"password"},"Password",-1)),ek={__name:"SignIn",setup(t){const e=Bi(),{errorMessage:n,showSignInModal:s,userData:r}=dn(e),{signUp:i,logIn:o,logOut:a,toggleModal:c}=e,l=Ie({email:"",password:""});function u(h){h.key==="Enter"&&o(l.value.email,l.value.password)}return ca(()=>{document.addEventListener("keyup",u)}),la(()=>{document.removeEventListener("keyup",u)}),(h,f)=>(te(),ne(je,null,[H(r)?(te(),ne("button",{key:1,onClick:f[1]||(f[1]=(...g)=>H(a)&&H(a)(...g)),class:"sign_in_btn"}," Sign out ")):(te(),ne("button",{key:0,onClick:f[0]||(f[0]=(...g)=>H(c)&&H(c)(...g)),class:"sign_in_btn"}," Sign in ")),H(s)?(te(),ne("div",KA,[v("div",WA,[v("span",{onClick:f[2]||(f[2]=(...g)=>H(c)&&H(c)(...g)),class:"close_modal"}," ❌ "),GA,v("span",QA,me(H(n)),1),v("form",null,[v("div",YA,[JA,Ct(v("input",{"onUpdate:modelValue":f[3]||(f[3]=g=>l.value.email=g),id:"email",placeholder:"enter email",type:"email"},null,512),[[on,l.value.email]])]),v("div",XA,[ZA,Ct(v("input",{"onUpdate:modelValue":f[4]||(f[4]=g=>l.value.password=g),id:"password",placeholder:"enter password",type:"password"},null,512),[[on,l.value.password]])]),v("button",{onClick:f[5]||(f[5]=Co(g=>H(o)(l.value.email,l.value.password),["prevent"])),type:"button"}," Sign in "),v("button",{onClick:f[6]||(f[6]=Co(g=>H(i)(l.value.email,l.value.password),["prevent"])),type:"button"}," Sign up ")])])])):Ws("",!0)],64))}},tk=yt(ek,[["__scopeId","data-v-805ca1e5"]]);const nk=t=>(en("data-v-06e47f62"),t=t(),tn(),t),sk={class:"site_title"},rk=nk(()=>v("h2",null,"The #1 Pizza Destination",-1)),ik={__name:"Header",setup(t){return(e,n)=>{const s=bo("RouterLink");return te(),ne("header",null,[he(tk),v("h1",sk,[he(s,{to:{name:"home"}},{default:zt(()=>[qt(" ~ Angelo's ~")]),_:1})]),v("nav",null,[he(s,{class:"link",to:{name:"home"}},{default:zt(()=>[qt("Home")]),_:1}),he(s,{class:"link",to:{name:"menu"}},{default:zt(()=>[qt("Menu")]),_:1}),he(s,{class:"link",to:{name:"about"}},{default:zt(()=>[qt("About")]),_:1}),he(s,{class:"link",to:{name:"admin"}},{default:zt(()=>[qt("Admin")]),_:1})]),rk])}}},ok=yt(ik,[["__scopeId","data-v-06e47f62"]]);const ak={class:"info_block_wrapper"},ck={__name:"App",setup(t){return(e,n)=>(te(),ne(je,null,[he(ok),he(H(uo)),v("div",ak,[he(H(uo),{name:"delivery"}),he(H(uo),{name:"history"})])],64))}},lk=yt(ck,[["__scopeId","data-v-ea83a3a0"]]),uk="/vue-pizza-firebase-vite/assets/fire-7d5fa50f.jpg";const hk={},ec=t=>(en("data-v-c8a22c88"),t=t(),tn(),t),fk={class:"hot"},dk={class:"hot_text"},pk=ec(()=>v("h3",null,"Hot out of the oven!",-1)),gk=ec(()=>v("p",{class:"hot_pizza_name"},"Vegetarian Hot Pizza",-1)),mk=ec(()=>v("p",{class:"hot_pizza_description"},"Our signature Vegetarian pizza, but with a kick!",-1)),yk=ec(()=>v("img",{src:uk,alt:"pizza oven image",class:"hot_img"},null,-1));function vk(t,e){const n=bo("RouterLink");return te(),ne("main",fk,[v("div",dk,[pk,gk,mk,he(n,{to:{name:"menu"}},{default:zt(()=>[qt("Order Now!")]),_:1})]),yk])}const _k=yt(hk,[["render",vk],["__scopeId","data-v-c8a22c88"]]),wk="/vue-pizza-firebase-vite/assets/calzone-dc382459.jpg";const Ek={},yv=t=>(en("data-v-b9aa1baa"),t=t(),tn(),t),Ik={class:"about"},Tk=yv(()=>v("section",{class:"intro"},[v("div",{class:"info_text_wrapper"},[v("h3",null,"Quality Pizza Since 1930"),v("p",{class:"info_text"},"Nothing, but the best quality ingredients.")]),v("img",{class:"info_img",alt:"calzone image",src:wk})],-1)),bk={class:"more_info_wrapper"},Sk=yv(()=>v("h3",null,"Click on the links below for more info",-1));function Ck(t,e){const n=bo("RouterLink"),s=bo("RouterView");return te(),ne("div",Ik,[Tk,v("section",bk,[Sk,v("nav",null,[v("ul",null,[he(n,{class:"link",to:{name:"history"}},{default:zt(()=>[qt("Our History")]),_:1}),he(n,{class:"link",to:{name:"delivery"}},{default:zt(()=>[qt("Delivery")]),_:1}),he(n,{class:"link",to:{name:"locations"}},{default:zt(()=>[qt("Locations")]),_:1})])]),he(s)])])}const Ak=yt(Ek,[["render",Ck],["__scopeId","data-v-b9aa1baa"]]),kk=pa("storeBasket",()=>{const t=Bi(),{userData:e}=dn(t);Ms(e,()=>{r.value=""});const n=Ie([]),s=Ie("Your basket is empty"),r=Ie("");function i(h,f){const g=n.value.find(y=>y.name===h.name&&y.size===f.size);if(g){g.quantity++;return}n.value.push({name:h.name,price:f.price,size:f.size,quantity:1})}function o(h){h.quantity++}function a(h){h.quantity--,h.quantity===0&&c(h)}function c(h){n.value.splice(n.value.indexOf(h),1)}const l=dt(()=>n.value.reduce((h,f)=>h+f.quantity*f.price,0));async function u(){try{if(e.value){const f={user:{id:e.value.uid,email:e.value.email},createdAt:new Date,pizzas:{...n.value}};await pv(Dl,f),n.value=[],s.value="Thank you, your order has been placed!"}else r.value="Please sign in to place an order."}catch{s.value="There was an error placing your order. Please try again."}}return{basket:n,addToBasket:i,increaseQuantity:o,decreaseQuantity:a,total:l,addNewOrder:u,basketText:s,signInMessage:r}}),vv=pa("storePizzas",()=>{const t=Ie([]),e=Ie("");async function n(){try{e.value="",gv(Nl,r=>{t.value=[],r.forEach(i=>{const o={id:i.id,...i.data()};t.value.push(o)})})}catch{e.value="There was an error fetching pizzas, please reload the page"}}ca(n);async function s(r){try{e.value="";const i=qs(Nl,r);await dv(i)}catch{e.value="There was an error deleting the pizza, please try again"}}return{allPizzas:t,deletePizza:s,message:e}});const _v=t=>(en("data-v-901d30c7"),t=t(),tn(),t),Rk={class:"menu_wrapper"},Nk={class:"menu"},Dk=_v(()=>v("h3",null,"~ Authentic Handmade Pizza ~",-1)),Pk=["onClick"],Ok={class:"basket"},xk=_v(()=>v("h3",null,"~ Basket ~",-1)),Mk={key:0},Lk=["onClick"],Fk=["onClick"],Uk={key:1},$k={__name:"ViewMenu",setup(t){const e=kk(),{basket:n,total:s,basketText:r,signInMessage:i}=dn(e),{addToBasket:o,increaseQuantity:a,decreaseQuantity:c,addNewOrder:l}=e,u=vv(),{allPizzas:h}=dn(u);return(f,g)=>(te(),ne("div",Rk,[v("div",Nk,[Dk,v("table",null,[(te(!0),ne(je,null,Ls(H(h),y=>(te(),ne("tbody",{key:y.id},[v("tr",null,[v("td",null,[v("strong",null,"~ "+me(y.name)+" ~",1)])]),v("tr",null,[v("td",null,[v("small",null,me(y.description),1)])]),(te(!0),ne(je,null,Ls(y.options,_=>(te(),ne("tr",{key:y.id+_.size},[v("td",null,me(_.size)+'"',1),v("td",null,me(f.filters.formatMoney(_.price)),1),v("td",null,[v("button",{onClick:T=>H(o)(y,_),type:"button"}," + ",8,Pk)])]))),128))]))),128))])]),v("div",Ok,[xk,H(n).length>0?(te(),ne("div",Mk,[v("table",null,[(te(!0),ne(je,null,Ls(H(n),(y,_)=>(te(),ne("tbody",{key:_},[v("tr",null,[v("td",null,[v("button",{onClick:T=>H(c)(y),class:"quantity_btn",type:"button"},"−",8,Lk),v("span",null,me(y.quantity),1),v("button",{onClick:T=>H(a)(y),class:"quantity_btn",type:"button"},"+",8,Fk)]),v("td",null,me(y.name)+" "+me(y.size)+'"',1),v("td",null,me(f.filters.formatMoney(y.price*y.quantity)),1)])]))),128))]),v("p",null,"Order total: "+me(f.filters.formatMoney(H(s))),1),v("p",null,me(H(i)),1),v("button",{onClick:g[0]||(g[0]=(...y)=>H(l)&&H(l)(...y))}," Place order ")])):(te(),ne("div",Uk,[v("p",null,me(H(r)),1)]))])]))}},Vk=yt($k,[["__scopeId","data-v-901d30c7"]]);const In=t=>(en("data-v-b0838faa"),t=t(),tn(),t),Bk={class:"admin_section"},jk={class:"admin_section_header"},zk=In(()=>v("h3",null,"Add new pizza",-1)),qk={class:"form_group"},Hk=In(()=>v("label",{for:"name"},"Name",-1)),Kk={class:"form_group"},Wk=In(()=>v("label",{for:"description"},"Description",-1)),Gk=In(()=>v("p",null,[v("strong",null,"Option 1:")],-1)),Qk={class:"form_group"},Yk=In(()=>v("label",{for:"size1"},"Size",-1)),Jk={class:"form_group"},Xk=In(()=>v("label",{for:"price1"},"Price",-1)),Zk=In(()=>v("p",null,[v("strong",null,"Option 2:")],-1)),eR={class:"form_group"},tR=In(()=>v("label",{for:"size2"},"Size",-1)),nR={class:"form_group"},sR=In(()=>v("label",{for:"price2"},"Price",-1)),rR={class:"form_group"},iR=["onClick"],oR={__name:"NewPizza",setup(t){const e=Bi(),{userData:n}=dn(e),s=Ie(""),r=Ie({name:"Eg. Margherita",description:"Eg. A delicious tomato based pizza topped with mozzarella",options:[{size:9,price:6.95},{size:12,price:9.95}]});async function i(){try{if(!n.value)return;await pv(Nl,r.value),s.value=`Pizza ${r.value.name} has been added`}catch{s.value="There was an error adding the pizza..."}}const o=Ie(!0);function a(){window.innerWidth<=900&&(o.value=!1)}return Ql(a),(c,l)=>(te(),ne("section",Bk,[v("header",jk,[zk,v("small",{onClick:l[0]||(l[0]=u=>o.value=!o.value),action:"",class:"showOrHide"},me(o.value?"▲":"▼"),1)]),Ct(v("form",null,[v("div",qk,[Hk,Ct(v("input",{"onUpdate:modelValue":l[1]||(l[1]=u=>r.value.name=u),id:"name",type:"text"},null,512),[[on,r.value.name]])]),v("div",Kk,[Wk,Ct(v("textarea",{"onUpdate:modelValue":l[2]||(l[2]=u=>r.value.description=u),id:"description",rows:"5"},`
          `,512),[[on,r.value.description]])]),Gk,v("div",Qk,[Yk,Ct(v("input",{"onUpdate:modelValue":l[3]||(l[3]=u=>r.value.options[0].size=u),id:"size1",type:"text"},null,512),[[on,r.value.options[0].size]])]),v("div",Jk,[Xk,Ct(v("input",{"onUpdate:modelValue":l[4]||(l[4]=u=>r.value.options[0].price=u),id:"price1",type:"text"},null,512),[[on,r.value.options[0].price]])]),Zk,v("div",eR,[tR,Ct(v("input",{"onUpdate:modelValue":l[5]||(l[5]=u=>r.value.options[1].size=u),id:"size2",type:"text"},null,512),[[on,r.value.options[1].size]])]),v("div",nR,[sR,Ct(v("input",{"onUpdate:modelValue":l[6]||(l[6]=u=>r.value.options[1].price=u),id:"price2",type:"text"},null,512),[[on,r.value.options[1].price]])]),v("div",rR,[v("button",{onClick:Co(i,["prevent"])}," Add ",8,iR),v("span",null,me(s.value),1)])],512),[[eu,o.value]])]))}},aR=yt(oR,[["__scopeId","data-v-b0838faa"]]);const wv=t=>(en("data-v-4e64bef4"),t=t(),tn(),t),cR={class:"admin_section"},lR={class:"admin_section_header"},uR=wv(()=>v("h3",null,"Menu",-1)),hR={key:0,class:"error"},fR=wv(()=>v("thead",null,[v("tr",null,[v("th",null,"Pizza"),v("th",null,"Remove from menu")])],-1)),dR=["onClick"],pR={__name:"Pizzas",setup(t){const e=vv(),{allPizzas:n,message:s}=dn(e),{deletePizza:r}=e,i=Ie(!0);function o(){window.innerWidth<=900&&(i.value=!1)}return Ql(o),(a,c)=>(te(),ne("section",cR,[v("header",lR,[uR,v("small",{onClick:c[0]||(c[0]=l=>i.value=!i.value),action:"",class:"showOrHide"},me(i.value?"▲":"▼"),1)]),H(s)?(te(),ne("p",hR,me(H(s)),1)):Ws("",!0),Ct(v("table",null,[fR,(te(!0),ne(je,null,Ls(H(n),l=>(te(),ne("tbody",{key:l.id},[v("td",null,me(l.name),1),v("td",null,[v("button",{onClick:u=>H(r)(l.id),class:"btn_remove",type:"button"}," × ",8,dR)])]))),128))],512),[[eu,i.value]])]))}},gR=yt(pR,[["__scopeId","data-v-4e64bef4"]]),mR=pa("storeOrders",()=>{const t=Ie([]),e=Ie(""),n=Ie();async function s(){try{const i=av(Dl,MA("createdAt"));e.value="";const o=gv(i,a=>{t.value=[],a.forEach(c=>{const l={id:c.id,...c.data()};t.value.push(l)})});n.value=o}catch{e.value="There was an error fetching orders, please reload the page"}}ca(s),la(()=>{n.value()});async function r(i){try{e.value="";const o=qs(Dl,i);await dv(o)}catch{e.value="There was an error deleting the order, please try again"}}return{allOrders:t,deleteOrder:r,message:e}});const tc=t=>(en("data-v-6181f567"),t=t(),tn(),t),yR={class:"admin_section"},vR={class:"admin_section_header"},_R={key:0,class:"error"},wR={key:0},ER=tc(()=>v("th",null,"Item",-1)),IR=tc(()=>v("th",null,"Size",-1)),TR=tc(()=>v("th",null,"Quantity",-1)),bR=tc(()=>v("th",null,"Price (total)",-1)),SR=[ER,IR,TR,bR],CR=["onClick"],AR={__name:"Orders",setup(t){const e=mR(),{allOrders:n,message:s}=dn(e),{deleteOrder:r}=e,i=Ie(!1);return(o,a)=>(te(),ne("section",yR,[v("header",vR,[v("h3",null,"Current orders ("+me(H(n).length)+")",1),v("small",{onClick:a[0]||(a[0]=c=>i.value=!i.value),action:"",class:"showOrHide"},me(i.value?"▲":"▼"),1)]),H(s)?(te(),ne("p",_R,me(H(s))+" error ",1)):Ws("",!0),Ct(v("table",null,[H(n).length>0?(te(),ne("tr",wR,SR)):Ws("",!0),(te(!0),ne(je,null,Ls(H(n),c=>(te(),ne(je,{key:c.id},[v("tr",null,[v("td",null,[v("strong",null,"Order Number: "+me(c.id),1),v("button",{onClick:l=>H(r)(c.id),class:"btn_remove",type:"button"}," × ",8,CR)])]),(te(!0),ne(je,null,Ls(c.pizzas,l=>(te(),ne("tr",{key:l.name+l.size},[v("td",null,me(l.name),1),v("td",null,me(`${l.size}"`),1),v("td",null,me(l.quantity),1),v("td",null,me(o.filters.formatMoney(l.price*l.quantity)),1)]))),128))],64))),128))],512),[[eu,i.value]])]))}},kR=yt(AR,[["__scopeId","data-v-6181f567"]]);const Ev=t=>(en("data-v-06f5659a"),t=t(),tn(),t),RR={class:"admin_section"},NR={class:"admin_section_header"},DR=Ev(()=>v("h3",null,"Admin Priviliges",-1)),PR={key:0},OR={class:"form_group"},xR=Ev(()=>v("label",{for:"email"},"Find user by email",-1)),MR={key:0,class:"selected_user"},LR={__name:"ToggleAdmin",setup(t){const e=Bi(),{toggleAdminMessage:n,selectedUser:s}=dn(e),{findUser:r,toggleAdmin:i}=e,o=Ie(!1),a=Ie("");return(c,l)=>(te(),ne("section",RR,[v("header",NR,[DR,v("small",{onClick:l[0]||(l[0]=u=>o.value=!o.value),action:"",class:"showOrHide"},me(o.value?"▲":"▼"),1)]),o.value?(te(),ne("div",PR,[v("form",null,[v("div",OR,[xR,Ct(v("input",{"onUpdate:modelValue":l[1]||(l[1]=u=>a.value=u),id:"email",placeholder:"Enter email",type:"email"},null,512),[[on,a.value]])]),v("button",{type:"button",onClick:l[2]||(l[2]=Co(u=>H(r)(a.value),["prevent"]))},"Find user")]),H(s)?(te(),ne("div",MR,[v("p",null,me(H(n)),1),v("p",null," User "+me(H(s).email)+" is currently set as "+me(H(s).isAdmin?"admin":"not an admin"),1),v("button",{onClick:l[3]||(l[3]=(...u)=>H(i)&&H(i)(...u))}," Click here to toggle admin setting ")])):Ws("",!0)])):Ws("",!0)]))}},FR=yt(LR,[["__scopeId","data-v-06f5659a"]]);const UR=t=>(en("data-v-03f26eb4"),t=t(),tn(),t),$R={key:0},VR={class:"user_email"},BR=UR(()=>v("h3",null,"Admin",-1)),jR={class:"row"},zR={key:1,class:"warning_msg"},qR={__name:"ViewAdmin",setup(t){const e=Bi(),{userData:n,userIsAdmin:s}=dn(e);return(r,i)=>{var o;return H(s)?(te(),ne("div",$R,[v("p",VR,"Welcome "+me((o=H(n))==null?void 0:o.email),1),BR,v("div",jR,[he(aR),he(gR)]),he(kR),he(FR)])):(te(),ne("p",zR," You must be an admin to view this section"))}}},HR=yt(qR,[["__scopeId","data-v-03f26eb4"]]),KR="/vue-pizza-firebase-vite/assets/box-57c33b89.jpg",WR={},GR={class:"info_block"},QR=v("h3",null,"~ Delivery Info ~",-1),YR=v("img",{class:"info_img",src:KR,alt:"pizza in a box image"},null,-1),JR=v("p",null," Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ad placeat, officiis laboriosam in vero. ",-1),XR=[QR,YR,JR];function ZR(t,e){return te(),ne("div",GR,XR)}const Hd=yt(WR,[["render",ZR]]),eN="/vue-pizza-firebase-vite/assets/chef-d7eb97b7.jpg",tN={},nN={class:"info_block"},sN=v("h3",null,"~ History ~",-1),rN=v("img",{class:"info_img",src:eN,alt:"chef making a pizza image"},null,-1),iN=v("p",null," Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ad placeat, officiis laboriosam in vero. ",-1),oN=[sN,rN,iN];function aN(t,e){return te(),ne("div",nN,oN)}const Kd=yt(tN,[["render",aN]]),cN="/vue-pizza-firebase-vite/assets/tables-1bf79ab6.jpg",lN={},uN={class:"info_block"},hN=v("h3",null,"~ Locations ~",-1),fN=v("img",{class:"info_img",src:cN,alt:"outdoor tables image"},null,-1),dN=v("p",null," Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ad placeat, officiis laboriosam in vero. ",-1),pN=[hN,fN,dN];function gN(t,e){return te(),ne("div",uN,pN)}const mN=yt(lN,[["render",gN]]),yN=tE({history:v0("/vue-pizza-firebase-vite/"),routes:[{path:"/",name:"home",components:{default:_k,delivery:Hd,history:Kd}},{path:"/about",name:"about",component:Ak,children:[{path:"history",name:"history",component:Kd},{path:"delivery",name:"delivery",component:Hd},{path:"locations",name:"locations",component:mN}]},{path:"/admin",name:"admin",component:HR},{path:"/menu",name:"menu",component:Vk}]}),nc=Kw(lk);nc.use(Qw());nc.use(yN);nc.mount("#app");nc.config.globalProperties.filters={formatMoney(t){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t)}};
