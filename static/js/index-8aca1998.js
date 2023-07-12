function t(t,e){const i=Object.create(null),n=t.split(",");for(let r=0;r<n.length;r++)i[n[r]]=!0;return e?t=>!!i[t.toLowerCase()]:t=>!!i[t]}!function(){const t=document.createElement("link").relList;if(!(t&&t.supports&&t.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver((t=>{for(const i of t)if("childList"===i.type)for(const t of i.addedNodes)"LINK"===t.tagName&&"modulepreload"===t.rel&&e(t)})).observe(document,{childList:!0,subtree:!0})}function e(t){if(t.ep)return;t.ep=!0;const e=function(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),"use-credentials"===t.crossOrigin?e.credentials="include":"anonymous"===t.crossOrigin?e.credentials="omit":e.credentials="same-origin",e}(t);fetch(t.href,e)}}();const e={},i=[],n=()=>{},r=()=>!1,o=/^on[^a-z]/,s=t=>o.test(t),a=t=>t.startsWith("onUpdate:"),l=Object.assign,c=(t,e)=>{const i=t.indexOf(e);i>-1&&t.splice(i,1)},h=Object.prototype.hasOwnProperty,u=(t,e)=>h.call(t,e),f=Array.isArray,d=t=>"[object Map]"===x(t),p=t=>"[object Set]"===x(t),g=t=>"function"==typeof t,v=t=>"string"==typeof t,m=t=>"symbol"==typeof t,y=t=>null!==t&&"object"==typeof t,_=t=>y(t)&&g(t.then)&&g(t.catch),b=Object.prototype.toString,x=t=>b.call(t),C=t=>x(t).slice(8,-1),S=t=>"[object Object]"===x(t),w=t=>v(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,T=t(
// the leading comma is intentional so empty string "" is also included
",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),O=t=>{const e=Object.create(null);return i=>e[i]||(e[i]=t(i))},k=/-(\w)/g,E=O((t=>t.replace(k,((t,e)=>e?e.toUpperCase():"")))),P=/\B([A-Z])/g,M=O((t=>t.replace(P,"-$1").toLowerCase())),A=O((t=>t.charAt(0).toUpperCase()+t.slice(1))),j=O((t=>t?`on${A(t)}`:"")),D=(t,e)=>!Object.is(t,e),F=(t,e)=>{for(let i=0;i<t.length;i++)t[i](e)},L=(t,e,i)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:i})},I=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let B;const R=()=>B||(B="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{});function z(t){if(f(t)){const e={};for(let i=0;i<t.length;i++){const n=t[i],r=v(n)?X(n):z(n);if(r)for(const t in r)e[t]=r[t]}return e}return v(t)||y(t)?t:void 0}const N=/;(?![^(]*\))/g,H=/:([^]+)/,W=/\/\*[^]*?\*\//g;function X(t){const e={};return t.replace(W,"").split(N).forEach((t=>{if(t){const i=t.split(H);i.length>1&&(e[i[0].trim()]=i[1].trim())}})),e}function V(t){let e="";if(v(t))e=t;else if(f(t))for(let i=0;i<t.length;i++){const n=V(t[i]);n&&(e+=n+" ")}else if(y(t))for(const i in t)t[i]&&(e+=i+" ");return e.trim()}const Y=t("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function U(t){return!!t||""===t}const G=(t,e)=>e&&e.__v_isRef?G(t,e.value):d(e)?{[`Map(${e.size})`]:[...e.entries()].reduce(((t,[e,i])=>(t[`${e} =>`]=i,t)),{})}:p(e)?{[`Set(${e.size})`]:[...e.values()]}:!y(e)||f(e)||S(e)?e:String(e);let q;class K{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=q,!t&&q&&(this.index=(q.scopes||(q.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const e=q;try{return q=this,t()}finally{q=e}}}
/**
   * This should only be called on non-detached scopes
   * @internal
   */on(){q=this}
/**
   * This should only be called on non-detached scopes
   * @internal
   */off(){q=this.parent}stop(t){if(this._active){let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.scopes)for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.parent=void 0,this._active=!1}}}function $(t){return new K(t)}function J(){return q}const Z=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Q=t=>(t.w&nt)>0,tt=t=>(t.n&nt)>0,et=new WeakMap;let it=0,nt=1;const rt=30;let ot;const st=Symbol(""),at=Symbol("");class lt{constructor(t,e=null,i){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,function(t,e=q){e&&e.active&&e.effects.push(t)}(this,i)}run(){if(!this.active)return this.fn();let t=ot,e=ht;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ot,ot=this,ht=!0,nt=1<<++it,it<=rt?(({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=nt})(this):ct(this),this.fn()}finally{it<=rt&&(t=>{const{deps:e}=t;if(e.length){let i=0;for(let n=0;n<e.length;n++){const r=e[n];Q(r)&&!tt(r)?r.delete(t):e[i++]=r,r.w&=~nt,r.n&=~nt}e.length=i}})(this),nt=1<<--it,ot=this.parent,ht=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ot===this?this.deferStop=!0:this.active&&(ct(this),this.onStop&&this.onStop(),this.active=!1)}}function ct(t){const{deps:e}=t;if(e.length){for(let i=0;i<e.length;i++)e[i].delete(t);e.length=0}}let ht=!0;const ut=[];function ft(){ut.push(ht),ht=!1}function dt(){const t=ut.pop();ht=void 0===t||t}function pt(t,e,i){if(ht&&ot){let e=et.get(t);e||et.set(t,e=new Map);let n=e.get(i);n||e.set(i,n=Z()),gt(n)}}function gt(t,e){let i=!1;it<=rt?tt(t)||(t.n|=nt,i=!Q(t)):i=!t.has(ot),i&&(t.add(ot),ot.deps.push(t))}function vt(t,e,i,n,r,o){const s=et.get(t);if(!s)return;let a=[];if("clear"===e)a=[...s.values()];else if("length"===i&&f(t)){const t=Number(n);s.forEach(((e,i)=>{("length"===i||i>=t)&&a.push(e)}))}else switch(void 0!==i&&a.push(s.get(i)),e){case"add":f(t)?w(i)&&a.push(s.get("length")):(a.push(s.get(st)),d(t)&&a.push(s.get(at)));break;case"delete":f(t)||(a.push(s.get(st)),d(t)&&a.push(s.get(at)));break;case"set":d(t)&&a.push(s.get(st))}if(1===a.length)a[0]&&mt(a[0]);else{const t=[];for(const e of a)e&&t.push(...e);mt(Z(t))}}function mt(t,e){const i=f(t)?t:[...t];for(const n of i)n.computed&&yt(n);for(const n of i)n.computed||yt(n)}function yt(t,e){(t!==ot||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const _t=t("__proto__,__v_isRef,__isVue"),bt=new Set(
Object.getOwnPropertyNames(Symbol).filter((t=>"arguments"!==t&&"caller"!==t)).map((t=>Symbol[t])).filter(m)),xt=kt(),Ct=kt(!1,!0),St=kt(!0),wt=Tt();function Tt(){const t={};return["includes","indexOf","lastIndexOf"].forEach((e=>{t[e]=function(...t){const i=he(this);for(let e=0,r=this.length;e<r;e++)pt(i,0,e+"");const n=i[e](...t);return-1===n||!1===n?i[e](...t.map(he)):n}})),["push","pop","shift","unshift","splice"].forEach((e=>{t[e]=function(...t){ft();const i=he(this)[e].apply(this,t);return dt(),i}})),t}function Ot(t){const e=he(this);return pt(e,0,t),e.hasOwnProperty(t)}function kt(t=!1,e=!1){return function(i,n,r){if("__v_isReactive"===n)return!t;if("__v_isReadonly"===n)return t;if("__v_isShallow"===n)return e;if("__v_raw"===n&&r===(t?e?ie:ee:e?te:Qt).get(i))return i;const o=f(i);if(!t){if(o&&u(wt,n))return Reflect.get(wt,n,r);if("hasOwnProperty"===n)return Ot}const s=Reflect.get(i,n,r);return(m(n)?bt.has(n):_t(n))?s:(t||pt(i,0,n),e?s:ve(s)?o&&w(n)?s:s.value:y(s)?t?re(s):ne(s):s)}}function Et(t=!1){return function(e,i,n,r){let o=e[i];if(ae(o)&&ve(o)&&!ve(n))return!1;if(!t&&(le(n)||ae(n)||(o=he(o),n=he(n)),!f(e)&&ve(o)&&!ve(n)))return o.value=n,!0;const s=f(e)&&w(i)?Number(i)<e.length:u(e,i),a=Reflect.set(e,i,n,r);return e===he(r)&&(s?D(n,o)&&vt(e,"set",i,n):vt(e,"add",i,n)),a}}const Pt={get:xt,set:Et(),deleteProperty:function(t,e){const i=u(t,e);t[e];const n=Reflect.deleteProperty(t,e);return n&&i&&vt(t,"delete",e,void 0),n},has:function(t,e){const i=Reflect.has(t,e);return m(e)&&bt.has(e)||pt(t,0,e),i},ownKeys:function(t){return pt(t,0,f(t)?"length":st),Reflect.ownKeys(t)}},Mt={get:St,set:(t,e)=>!0,deleteProperty:(t,e)=>!0},At=l({},Pt,{get:Ct,set:Et(!0)}),jt=t=>t,Dt=t=>Reflect.getPrototypeOf(t);function Ft(t,e,i=!1,n=!1){const r=he(t=t.__v_raw),o=he(e);i||(e!==o&&pt(r,0,e),pt(r,0,o));const{has:s}=Dt(r),a=n?jt:i?de:fe;return s.call(r,e)?a(t.get(e)):s.call(r,o)?a(t.get(o)):void(t!==r&&t.get(e))}function Lt(t,e=!1){const i=this.__v_raw,n=he(i),r=he(t);return e||(t!==r&&pt(n,0,t),pt(n,0,r)),t===r?i.has(t):i.has(t)||i.has(r)}function It(t,e=!1){return t=t.__v_raw,!e&&pt(he(t),0,st),Reflect.get(t,"size",t)}function Bt(t){t=he(t);const e=he(this);return Dt(e).has.call(e,t)||(e.add(t),vt(e,"add",t,t)),this}function Rt(t,e){e=he(e);const i=he(this),{has:n,get:r}=Dt(i);let o=n.call(i,t);o||(t=he(t),o=n.call(i,t));const s=r.call(i,t);return i.set(t,e),o?D(e,s)&&vt(i,"set",t,e):vt(i,"add",t,e),this}function zt(t){const e=he(this),{has:i,get:n}=Dt(e);let r=i.call(e,t);r||(t=he(t),r=i.call(e,t)),n&&n.call(e,t);const o=e.delete(t);return r&&vt(e,"delete",t,void 0),o}function Nt(){const t=he(this),e=0!==t.size,i=t.clear();return e&&vt(t,"clear",void 0,void 0),i}function Ht(t,e){return function(i,n){const r=this,o=r.__v_raw,s=he(o),a=e?jt:t?de:fe;return!t&&pt(s,0,st),o.forEach(((t,e)=>i.call(n,a(t),a(e),r)))}}function Wt(t,e,i){return function(...n){const r=this.__v_raw,o=he(r),s=d(o),a="entries"===t||t===Symbol.iterator&&s,l="keys"===t&&s,c=r[t](...n),h=i?jt:e?de:fe;return!e&&pt(o,0,l?at:st),{
// iterator protocol
next(){const{value:t,done:e}=c.next();return e?{value:t,done:e}:{value:a?[h(t[0]),h(t[1])]:h(t),done:e}},
// iterable protocol
[Symbol.iterator](){return this}}}}function Xt(t){return function(...e){return"delete"!==t&&this}}function Vt(){const t={get(t){return Ft(this,t)},get size(){return It(this)},has:Lt,add:Bt,set:Rt,delete:zt,clear:Nt,forEach:Ht(!1,!1)},e={get(t){return Ft(this,t,!1,!0)},get size(){return It(this)},has:Lt,add:Bt,set:Rt,delete:zt,clear:Nt,forEach:Ht(!1,!0)},i={get(t){return Ft(this,t,!0)},get size(){return It(this,!0)},has(t){return Lt.call(this,t,!0)},add:Xt("add"),set:Xt("set"),delete:Xt("delete"),clear:Xt("clear"),forEach:Ht(!0,!1)},n={get(t){return Ft(this,t,!0,!0)},get size(){return It(this,!0)},has(t){return Lt.call(this,t,!0)},add:Xt("add"),set:Xt("set"),delete:Xt("delete"),clear:Xt("clear"),forEach:Ht(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach((r=>{t[r]=Wt(r,!1,!1),i[r]=Wt(r,!0,!1),e[r]=Wt(r,!1,!0),n[r]=Wt(r,!0,!0)})),[t,i,e,n]}const[Yt,Ut,Gt,qt]=Vt();function Kt(t,e){const i=e?t?qt:Gt:t?Ut:Yt;return(e,n,r)=>"__v_isReactive"===n?!t:"__v_isReadonly"===n?t:"__v_raw"===n?e:Reflect.get(u(i,n)&&n in e?i:e,n,r)}const $t={get:Kt(!1,!1)},Jt={get:Kt(!1,!0)},Zt={get:Kt(!0,!1)},Qt=new WeakMap,te=new WeakMap,ee=new WeakMap,ie=new WeakMap;function ne(t){return ae(t)?t:oe(t,!1,Pt,$t,Qt)}function re(t){return oe(t,!0,Mt,Zt,ee)}function oe(t,e,i,n,r){if(!y(t))return t;if(t.__v_raw&&(!e||!t.__v_isReactive))return t;const o=r.get(t);if(o)return o;const s=(a=t).__v_skip||!Object.isExtensible(a)?0:function(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}(C(a));var a;if(0===s)return t;const l=new Proxy(t,2===s?n:i);return r.set(t,l),l}function se(t){return ae(t)?se(t.__v_raw):!(!t||!t.__v_isReactive)}function ae(t){return!(!t||!t.__v_isReadonly)}function le(t){return!(!t||!t.__v_isShallow)}function ce(t){return se(t)||ae(t)}function he(t){const e=t&&t.__v_raw;return e?he(e):t}function ue(t){return L(t,"__v_skip",!0),t}const fe=t=>y(t)?ne(t):t,de=t=>y(t)?re(t):t;function pe(t){ht&&ot&&gt((t=he(t)).dep||(t.dep=Z()))}function ge(t,e){const i=(t=he(t)).dep;i&&mt(i)}function ve(t){return!(!t||!0!==t.__v_isRef)}function me(t){return function(t,e){if(ve(t))return t;return new ye(t,e)}(t,!1)}class ye{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:he(t),this._value=e?t:fe(t)}get value(){return pe(this),this._value}set value(t){const e=this.__v_isShallow||le(t)||ae(t);t=e?t:he(t),D(t,this._rawValue)&&(this._rawValue=t,this._value=e?t:fe(t),ge(this))}}function _e(t){return ve(t)?t.value:t}const be={get:(t,e,i)=>_e(Reflect.get(t,e,i)),set:(t,e,i,n)=>{const r=t[e];return ve(r)&&!ve(i)?(r.value=i,!0):Reflect.set(t,e,i,n)}};function xe(t){return se(t)?t:new Proxy(t,be)}class Ce{constructor(t,e,i){this._object=t,this._key=e,this._defaultValue=i,this.__v_isRef=!0}get value(){const t=this._object[this._key];return void 0===t?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return t=he(this._object),e=this._key,null==(i=et.get(t))?void 0:i.get(e);var t,e,i}}function Se(t,e,i){const n=t[e];return ve(n)?n:new Ce(t,e,i)}class we{constructor(t,e,i,n){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new lt(t,(()=>{this._dirty||(this._dirty=!0,ge(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!n,this.__v_isReadonly=i}get value(){const t=he(this);return pe(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Te(t,e,i,n){let r;try{r=n?t(...n):t()}catch(o){ke(o,e,i)}return r}function Oe(t,e,i,n){if(g(t)){const r=Te(t,e,i,n);return r&&_(r)&&r.catch((t=>{ke(t,e,i)})),r}const r=[];for(let o=0;o<t.length;o++)r.push(Oe(t[o],e,i,n));return r}function ke(t,e,i,n=!0){e&&e.vnode;if(e){let n=e.parent;const r=e.proxy,o=i;for(;n;){const e=n.ec;if(e)for(let i=0;i<e.length;i++)if(!1===e[i](t,r,o))return;n=n.parent}const s=e.appContext.config.errorHandler;if(s)return void Te(s,null,10,[t,r,o])}}let Ee=!1,Pe=!1;const Me=[];let Ae=0;const je=[];let De=null,Fe=0;const Le=Promise.resolve();let Ie=null;function Be(t){const e=Ie||Le;return t?e.then(this?t.bind(this):t):e}function Re(t){Me.length&&Me.includes(t,Ee&&t.allowRecurse?Ae+1:Ae)||(null==t.id?Me.push(t):Me.splice(function(t){let e=Ae+1,i=Me.length;for(;e<i;){const n=e+i>>>1;We(Me[n])<t?e=n+1:i=n}return e}(t.id),0,t),ze())}function ze(){Ee||Pe||(Pe=!0,Ie=Le.then(Ve))}function Ne(t,e=(Ee?Ae+1:0)){for(;e<Me.length;e++){const t=Me[e];t&&t.pre&&(Me.splice(e,1),e--,t())}}function He(t){if(je.length){const t=[...new Set(je)];if(je.length=0,De)return void De.push(...t);for(De=t,De.sort(((t,e)=>We(t)-We(e))),Fe=0;Fe<De.length;Fe++)De[Fe]();De=null,Fe=0}}const We=t=>null==t.id?1/0:t.id,Xe=(t,e)=>{const i=We(t)-We(e);if(0===i){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return i};function Ve(t){Pe=!1,Ee=!0,Me.sort(Xe);try{for(Ae=0;Ae<Me.length;Ae++){const t=Me[Ae];t&&!1!==t.active&&Te(t,null,14)}}finally{Ae=0,Me.length=0,He(),Ee=!1,Ie=null,(Me.length||je.length)&&Ve()}}function Ye(t,i,...n){if(t.isUnmounted)return;const r=t.vnode.props||e;let o=n;const s=i.startsWith("update:"),a=s&&i.slice(7);if(a&&a in r){const t=`${"modelValue"===a?"model":a}Modifiers`,{number:i,trim:s}=r[t]||e;s&&(o=n.map((t=>v(t)?t.trim():t))),i&&(o=n.map(I))}let l,c=r[l=j(i)]||// also try camelCase event handler (#2249)
r[l=j(E(i))];!c&&s&&(c=r[l=j(M(i))]),c&&Oe(c,t,6,o);const h=r[l+"Once"];if(h){if(t.emitted){if(t.emitted[l])return}else t.emitted={};t.emitted[l]=!0,Oe(h,t,6,o)}}function Ue(t,e,i=!1){const n=e.emitsCache,r=n.get(t);if(void 0!==r)return r;const o=t.emits;let s={},a=!1;if(!g(t)){const n=t=>{const i=Ue(t,e,!0);i&&(a=!0,l(s,i))};!i&&e.mixins.length&&e.mixins.forEach(n),t.extends&&n(t.extends),t.mixins&&t.mixins.forEach(n)}return o||a?(f(o)?o.forEach((t=>s[t]=null)):l(s,o),y(t)&&n.set(t,s),s):(y(t)&&n.set(t,null),null)}function Ge(t,e){return!(!t||!s(e))&&(e=e.slice(2).replace(/Once$/,""),u(t,e[0].toLowerCase()+e.slice(1))||u(t,M(e))||u(t,e))}let qe=null,Ke=null;function $e(t){const e=qe;return qe=t,Ke=t&&t.type.__scopeId||null,e}function Je(t){Ke=t}function Ze(){Ke=null}function Qe(t,e=qe,i){if(!e)return t;if(t._n)return t;const n=(...i)=>{n._d&&An(-1);const r=$e(e);let o;try{o=t(...i)}finally{$e(r),n._d&&An(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function ti(t){const{type:e,vnode:i,proxy:n,withProxy:r,props:o,propsOptions:[s],slots:l,attrs:c,emit:h,render:u,renderCache:f,data:d,setupState:p,ctx:g,inheritAttrs:v}=t;let m,y;const _=$e(t);try{if(4&i.shapeFlag){const t=r||n;m=Yn(u.call(t,t,f,o,p,d,g)),y=c}else{const t=e;0,m=Yn(t.length>1?t(o,{attrs:c,slots:l,emit:h}):t(o,null
/* we know it doesn't need it */)),y=e.props?c:ei(c)}}catch(x){kn.length=0,ke(x,t,1),m=Hn(Tn)}let b=m;if(y&&!1!==v){const t=Object.keys(y),{shapeFlag:e}=b;t.length&&7&e&&(s&&t.some(a)&&(y=ii(y,s)),b=Wn(b,y))}return i.dirs&&(b=Wn(b),b.dirs=b.dirs?b.dirs.concat(i.dirs):i.dirs),i.transition&&(b.transition=i.transition),m=b,$e(_),m}const ei=t=>{let e;for(const i in t)("class"===i||"style"===i||s(i))&&((e||(e={}))[i]=t[i]);return e},ii=(t,e)=>{const i={};for(const n in t)a(n)&&n.slice(9)in e||(i[n]=t[n]);return i};function ni(t,e,i){const n=Object.keys(e);if(n.length!==Object.keys(t).length)return!0;for(let r=0;r<n.length;r++){const o=n[r];if(e[o]!==t[o]&&!Ge(i,o))return!0}return!1}const ri={};function oi(t,e,i){return si(t,e,i)}function si(t,i,{immediate:r,deep:o,flush:s,onTrack:a,onTrigger:l}=e){var h;const u=J()===(null==(h=Jn)?void 0:h.scope)?Jn:null;let d,p,v=!1,m=!1;if(ve(t)?(d=()=>t.value,v=le(t)):se(t)?(d=()=>t,o=!0):f(t)?(m=!0,v=t.some((t=>se(t)||le(t))),d=()=>t.map((t=>ve(t)?t.value:se(t)?ci(t):g(t)?Te(t,u,2):void 0))):d=g(t)?i?()=>Te(t,u,2):()=>{if(!u||!u.isUnmounted)return p&&p(),Oe(t,u,3,[_])}:n,i&&o){const t=d;d=()=>ci(t())}let y,_=t=>{p=S.onStop=()=>{Te(t,u,4)}};if(or){if(_=n,i?r&&Oe(i,u,3,[d(),m?[]:void 0,_]):d(),"sync"!==s)return n;{const t=ur();y=t.__watcherHandles||(t.__watcherHandles=[])}}let b=m?new Array(t.length).fill(ri):ri;const x=()=>{if(S.active)if(i){const t=S.run();(o||v||(m?t.some(((t,e)=>D(t,b[e]))):D(t,b)))&&(p&&p(),Oe(i,u,3,[t,
// pass undefined as the old value when it's changed for the first time
b===ri?void 0:m&&b[0]===ri?[]:b,_]),b=t)}else S.run()};let C;x.allowRecurse=!!i,"sync"===s?C=x:"post"===s?C=()=>_n(x,u&&u.suspense):(x.pre=!0,u&&(x.id=u.uid),C=()=>Re(x));const S=new lt(d,C);i?r?x():b=S.run():"post"===s?_n(S.run.bind(S),u&&u.suspense):S.run();const w=()=>{S.stop(),u&&u.scope&&c(u.scope.effects,S)};return y&&y.push(w),w}function ai(t,e,i){const n=this.proxy,r=v(t)?t.includes(".")?li(n,t):()=>n[t]:t.bind(n,n);let o;g(e)?o=e:(o=e.handler,i=e);const s=Jn;er(this);const a=si(r,o.bind(n),i);return s?er(s):ir(),a}function li(t,e){const i=e.split(".");return()=>{let e=t;for(let t=0;t<i.length&&e;t++)e=e[i[t]];return e}}function ci(t,e){if(!y(t)||t.__v_skip)return t;if((e=e||new Set).has(t))return t;if(e.add(t),ve(t))ci(t.value,e);else if(f(t))for(let i=0;i<t.length;i++)ci(t[i],e);else if(p(t)||d(t))t.forEach((t=>{ci(t,e)}));else if(S(t))for(const i in t)ci(t[i],e);return t}function hi(t,i){const n=qe;if(null===n)return t;const r=lr(n)||n.proxy,o=t.dirs||(t.dirs=[]);for(let s=0;s<i.length;s++){let[t,n,a,l=e]=i[s];t&&(g(t)&&(t={mounted:t,updated:t}),t.deep&&ci(n),o.push({dir:t,instance:r,value:n,oldValue:void 0,arg:a,modifiers:l}))}return t}function ui(t,e,i,n){const r=t.dirs,o=e&&e.dirs;for(let s=0;s<r.length;s++){const a=r[s];o&&(a.oldValue=o[s].value);let l=a.dir[n];l&&(ft(),Oe(l,i,8,[t.el,a,t,e]),dt())}}function fi(t,e){return g(t)?
// #8326: extend call and options.name access are considered side-effects
// by Rollup, so we have to wrap it in a pure-annotated IIFE.
(()=>l({name:t.name},e,{setup:t}))():t}const di=t=>!!t.type.__asyncLoader,pi=t=>t.type.__isKeepAlive;function gi(t,e){mi(t,"a",e)}function vi(t,e){mi(t,"da",e)}function mi(t,e,i=Jn){const n=t.__wdc||(t.__wdc=()=>{let e=i;for(;e;){if(e.isDeactivated)return;e=e.parent}return t()});if(_i(e,n,i),i){let t=i.parent;for(;t&&t.parent;)pi(t.parent.vnode)&&yi(n,e,i,t),t=t.parent}}function yi(t,e,i,n){const r=_i(e,t,n,!0
/* prepend */);Oi((()=>{c(n[e],r)}),i)}function _i(t,e,i=Jn,n=!1){if(i){const r=i[t]||(i[t]=[]),o=e.__weh||(e.__weh=(...n)=>{if(i.isUnmounted)return;ft(),er(i);const r=Oe(e,i,t,n);return ir(),dt(),r});return n?r.unshift(o):r.push(o),o}}const bi=t=>(e,i=Jn)=>
// post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
(!or||"sp"===t)&&_i(t,((...t)=>e(...t)),i),xi=bi("bm"),Ci=bi("m"),Si=bi("bu"),wi=bi("u"),Ti=bi("bum"),Oi=bi("um"),ki=bi("sp"),Ei=bi("rtg"),Pi=bi("rtc");function Mi(t,e=Jn){_i("ec",t,e)}const Ai=Symbol.for("v-ndc");function ji(t,e,i={},n,r){if(qe.isCE||qe.parent&&di(qe.parent)&&qe.parent.isCE)return"default"!==e&&(i.name=e),Hn("slot",i,n&&n());let o=t[e];o&&o._c&&(o._d=!1),Pn();const s=o&&Di(o(i)),a=Fn(Sn,{key:i.key||// slot content array of a dynamic conditional slot may have a branch
// key attached in the `createSlots` helper, respect that
s&&s.key||`_${e}`},s||(n?n():[]),s&&1===t._?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),o&&o._c&&(o._d=!0),a}function Di(t){return t.some((t=>!Ln(t)||t.type!==Tn&&!(t.type===Sn&&!Di(t.children))))?t:null}const Fi=t=>t?nr(t)?lr(t)||t.proxy:Fi(t.parent):null,Li=
// Move PURE marker to new line to workaround compiler discarding it
// due to type annotation
l(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Fi(t.parent),$root:t=>Fi(t.root),$emit:t=>t.emit,$options:t=>Xi(t),$forceUpdate:t=>t.f||(t.f=()=>Re(t.update)),$nextTick:t=>t.n||(t.n=Be.bind(t.proxy)),$watch:t=>ai.bind(t)}),Ii=(t,i)=>t!==e&&!t.__isScriptSetup&&u(t,i),Bi={get({_:t},i){const{ctx:n,setupState:r,data:o,props:s,accessCache:a,type:l,appContext:c}=t;let h;if("$"!==i[0]){const l=a[i];if(void 0!==l)switch(l){case 1:return r[i];case 2:return o[i];case 4:return n[i];case 3:return s[i]}else{if(Ii(r,i))return a[i]=1,r[i];if(o!==e&&u(o,i))return a[i]=2,o[i];if(
// only cache other properties when instance has declared (thus stable)
// props
(h=t.propsOptions[0])&&u(h,i))return a[i]=3,s[i];if(n!==e&&u(n,i))return a[i]=4,n[i];zi&&(a[i]=0)}}const f=Li[i];let d,p;return f?("$attrs"===i&&pt(t,0,i),f(t)):
// css module (injected by vue-loader)
(d=l.__cssModules)&&(d=d[i])?d:n!==e&&u(n,i)?(a[i]=4,n[i]):(
// global properties
p=c.config.globalProperties,u(p,i)?p[i]:void 0)},set({_:t},i,n){const{data:r,setupState:o,ctx:s}=t;return Ii(o,i)?(o[i]=n,!0):r!==e&&u(r,i)?(r[i]=n,!0):!u(t.props,i)&&(("$"!==i[0]||!(i.slice(1)in t))&&(s[i]=n,!0))},has({_:{data:t,setupState:i,accessCache:n,ctx:r,appContext:o,propsOptions:s}},a){let l;return!!n[a]||t!==e&&u(t,a)||Ii(i,a)||(l=s[0])&&u(l,a)||u(r,a)||u(Li,a)||u(o.config.globalProperties,a)},defineProperty(t,e,i){return null!=i.get?t._.accessCache[e]=0:u(i,"value")&&this.set(t,e,i.value,null),Reflect.defineProperty(t,e,i)}};function Ri(t){return f(t)?t.reduce(((t,e)=>(t[e]=null,t)),{}):t}let zi=!0;function Ni(t){const e=Xi(t),i=t.proxy,r=t.ctx;zi=!1,e.beforeCreate&&Hi(e.beforeCreate,t,"bc");const{
// state
data:o,computed:s,methods:a,watch:l,provide:c,inject:h,created:
// lifecycle
u,beforeMount:d,mounted:p,beforeUpdate:v,updated:m,activated:_,deactivated:b,beforeDestroy:x,beforeUnmount:C,destroyed:S,unmounted:w,render:T,renderTracked:O,renderTriggered:k,errorCaptured:E,serverPrefetch:P,expose:
// public API
M,inheritAttrs:A,components:
// assets
j,directives:D,filters:F}=e;if(h&&function(t,e,i=n){f(t)&&(t=Gi(t));for(const n in t){const i=t[n];let r;r=y(i)?"default"in i?en(i.from||n,i.default,!0
/* treat default function as factory */):en(i.from||n):en(i),ve(r)?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>r.value,set:t=>r.value=t}):e[n]=r}}(h,r,null),a)for(const n in a){const t=a[n];g(t)&&(r[n]=t.bind(i))}if(o){const e=o.call(i,i);y(e)&&(t.data=ne(e))}if(zi=!0,s)for(const f in s){const t=s[f],e=g(t)?t.bind(i,i):g(t.get)?t.get.bind(i,i):n,o=!g(t)&&g(t.set)?t.set.bind(i):n,a=cr({get:e,set:o});Object.defineProperty(r,f,{enumerable:!0,configurable:!0,get:()=>a.value,set:t=>a.value=t})}if(l)for(const n in l)Wi(l[n],r,i,n);if(c){const t=g(c)?c.call(i):c;Reflect.ownKeys(t).forEach((e=>{!function(t,e){if(Jn){let i=Jn.provides;const n=Jn.parent&&Jn.parent.provides;n===i&&(i=Jn.provides=Object.create(n)),i[t]=e}else;}(e,t[e])}))}function L(t,e){f(e)?e.forEach((e=>t(e.bind(i)))):e&&t(e.bind(i))}if(u&&Hi(u,t,"c"),L(xi,d),L(Ci,p),L(Si,v),L(wi,m),L(gi,_),L(vi,b),L(Mi,E),L(Pi,O),L(Ei,k),L(Ti,C),L(Oi,w),L(ki,P),f(M))if(M.length){const e=t.exposed||(t.exposed={});M.forEach((t=>{Object.defineProperty(e,t,{get:()=>i[t],set:e=>i[t]=e})}))}else t.exposed||(t.exposed={});T&&t.render===n&&(t.render=T),null!=A&&(t.inheritAttrs=A),j&&(t.components=j),D&&(t.directives=D)}function Hi(t,e,i){Oe(f(t)?t.map((t=>t.bind(e.proxy))):t.bind(e.proxy),e,i)}function Wi(t,e,i,n){const r=n.includes(".")?li(i,n):()=>i[n];if(v(t)){const i=e[t];g(i)&&oi(r,i)}else if(g(t))oi(r,t.bind(i));else if(y(t))if(f(t))t.forEach((t=>Wi(t,e,i,n)));else{const n=g(t.handler)?t.handler.bind(i):e[t.handler];g(n)&&oi(r,n,t)}}function Xi(t){const e=t.type,{mixins:i,extends:n}=e,{mixins:r,optionsCache:o,config:{optionMergeStrategies:s}}=t.appContext,a=o.get(e);let l;return a?l=a:r.length||i||n?(l={},r.length&&r.forEach((t=>Vi(l,t,s,!0))),Vi(l,e,s)):l=e,y(e)&&o.set(e,l),l}function Vi(t,e,i,n=!1){const{mixins:r,extends:o}=e;o&&Vi(t,o,i,!0),r&&r.forEach((e=>Vi(t,e,i,!0)));for(const s in e)if(n&&"expose"===s);else{const n=Yi[s]||i&&i[s];t[s]=n?n(t[s],e[s]):e[s]}return t}const Yi={data:Ui,props:$i,emits:$i,
// objects
methods:Ki,computed:Ki,
// lifecycle
beforeCreate:qi,created:qi,beforeMount:qi,mounted:qi,beforeUpdate:qi,updated:qi,beforeDestroy:qi,beforeUnmount:qi,destroyed:qi,unmounted:qi,activated:qi,deactivated:qi,errorCaptured:qi,serverPrefetch:qi,
// assets
components:Ki,directives:Ki,
// watch
watch:function(t,e){if(!t)return e;if(!e)return t;const i=l(Object.create(null),t);for(const n in e)i[n]=qi(t[n],e[n]);return i},
// provide / inject
provide:Ui,inject:function(t,e){return Ki(Gi(t),Gi(e))}};function Ui(t,e){return e?t?function(){return l(g(t)?t.call(this,this):t,g(e)?e.call(this,this):e)}:e:t}function Gi(t){if(f(t)){const e={};for(let i=0;i<t.length;i++)e[t[i]]=t[i];return e}return t}function qi(t,e){return t?[...new Set([].concat(t,e))]:e}function Ki(t,e){return t?l(Object.create(null),t,e):e}function $i(t,e){return t?f(t)&&f(e)?[...new Set([...t,...e])]:l(
Object.create(null),Ri(t),Ri(null!=e?e:{})):e}function Ji(){return{app:null,config:{isNativeTag:r,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zi=0;function Qi(t,e){return function(i,n=null){g(i)||(i=l({},i)),null==n||y(n)||(n=null);const r=Ji(),o=new Set;let s=!1;const a=r.app={_uid:Zi++,_component:i,_props:n,_container:null,_context:r,_instance:null,version:fr,get config(){return r.config},set config(t){},use:(t,...e)=>(o.has(t)||(t&&g(t.install)?(o.add(t),t.install(a,...e)):g(t)&&(o.add(t),t(a,...e))),a),mixin:t=>(r.mixins.includes(t)||r.mixins.push(t),a),component:(t,e)=>e?(r.components[t]=e,a):r.components[t],directive:(t,e)=>e?(r.directives[t]=e,a):r.directives[t],mount(o,l,c){if(!s){const h=Hn(i,n);return h.appContext=r,l&&e?e(h,o):t(h,o,c),s=!0,a._container=o,o.__vue_app__=a,lr(h.component)||h.component.proxy}},unmount(){s&&(t(null,a._container),delete a._container.__vue_app__)},provide:(t,e)=>(r.provides[t]=e,a),runWithContext(t){tn=a;try{return t()}finally{tn=null}}};return a}}let tn=null;function en(t,e,i=!1){const n=Jn||qe;if(n||tn){const r=n?null==n.parent?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:tn._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return i&&g(e)?e.call(n&&n.proxy):e}}function nn(t,e,i,n=!1){const r={},o={};L(o,Bn,1),t.propsDefaults=Object.create(null),rn(t,e,r,o);for(const s in t.propsOptions[0])s in r||(r[s]=void 0);i?t.props=n?r:oe(r,!1,At,Jt,te):t.type.props?t.props=r:t.props=o,t.attrs=o}function rn(t,i,n,r){const[o,s]=t.propsOptions;let a,l=!1;if(i)for(let e in i){if(T(e))continue;const c=i[e];let h;o&&u(o,h=E(e))?s&&s.includes(h)?(a||(a={}))[h]=c:n[h]=c:Ge(t.emitsOptions,e)||e in r&&c===r[e]||(r[e]=c,l=!0)}if(s){const i=he(n),r=a||e;for(let e=0;e<s.length;e++){const a=s[e];n[a]=on(o,i,a,r[a],t,!u(r,a))}}return l}function on(t,e,i,n,r,o){const s=t[i];if(null!=s){const t=u(s,"default");if(t&&void 0===n){const t=s.default;if(s.type!==Function&&!s.skipFactory&&g(t)){const{propsDefaults:o}=r;i in o?n=o[i]:(er(r),n=o[i]=t.call(null,e),ir())}else n=t}s[0
/* shouldCast */]&&(o&&!t?n=!1:!s[1
/* shouldCastTrue */]||""!==n&&n!==M(i)||(n=!0))}return n}function sn(t,n,r=!1){const o=n.propsCache,s=o.get(t);if(s)return s;const a=t.props,c={},h=[];let d=!1;if(!g(t)){const e=t=>{d=!0;const[e,i]=sn(t,n,!0);l(c,e),i&&h.push(...i)};!r&&n.mixins.length&&n.mixins.forEach(e),t.extends&&e(t.extends),t.mixins&&t.mixins.forEach(e)}if(!a&&!d)return y(t)&&o.set(t,i),i;if(f(a))for(let i=0;i<a.length;i++){const t=E(a[i]);an(t)&&(c[t]=e)}else if(a)for(const e in a){const t=E(e);if(an(t)){const i=a[e],n=c[t]=f(i)||g(i)?{type:i}:l({},i);if(n){const e=hn(Boolean,n.type),i=hn(String,n.type);n[0
/* shouldCast */]=e>-1,n[1
/* shouldCastTrue */]=i<0||e<i,(e>-1||u(n,"default"))&&h.push(t)}}}const p=[c,h];return y(t)&&o.set(t,p),p}function an(t){return"$"!==t[0]}function ln(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:null===t?"null":""}function cn(t,e){return ln(t)===ln(e)}function hn(t,e){return f(e)?e.findIndex((e=>cn(e,t))):g(e)&&cn(e,t)?0:-1}const un=t=>"_"===t[0]||"$stable"===t,fn=t=>f(t)?t.map(Yn):[Yn(t)],dn=(t,e,i)=>{if(e._n)return e;const n=Qe(((...t)=>fn(e(...t))),i);return n._c=!1,n},pn=(t,e,i)=>{const n=t._ctx;for(const r in t){if(un(r))continue;const i=t[r];if(g(i))e[r]=dn(0,i,n);else if(null!=i){const t=fn(i);e[r]=()=>t}}},gn=(t,e)=>{const i=fn(e);t.slots.default=()=>i},vn=(t,e)=>{if(32&t.vnode.shapeFlag){const i=e._;i?(t.slots=he(e),L(e,"_",i)):pn(e,t.slots={})}else t.slots={},e&&gn(t,e);L(t.slots,Bn,1)},mn=(t,i,n)=>{const{vnode:r,slots:o}=t;let s=!0,a=e;if(32&r.shapeFlag){const t=i._;t?n&&1===t?s=!1:(l(o,i),n||1!==t||delete o._):(s=!i.$stable,pn(i,o)),a=i}else i&&(gn(t,i),a={default:1});if(s)for(const e in o)un(e)||e in a||delete o[e]};function yn(t,i,n,r,o=!1){if(f(t))return void t.forEach(((t,e)=>yn(t,i&&(f(i)?i[e]:i),n,r,o)));if(di(r)&&!o)return;const s=4&r.shapeFlag?lr(r.component)||r.component.proxy:r.el,a=o?null:s,{i:l,r:h}=t,d=i&&i.r,p=l.refs===e?l.refs={}:l.refs,m=l.setupState;if(null!=d&&d!==h&&(v(d)?(p[d]=null,u(m,d)&&(m[d]=null)):ve(d)&&(d.value=null)),g(h))Te(h,l,12,[a,p]);else{const e=v(h),i=ve(h);if(e||i){const r=()=>{if(t.f){const i=e?u(m,h)?m[h]:p[h]:h.value;o?f(i)&&c(i,s):f(i)?i.includes(s)||i.push(s):e?(p[h]=[s],u(m,h)&&(m[h]=p[h])):(h.value=[s],t.k&&(p[t.k]=h.value))}else e?(p[h]=a,u(m,h)&&(m[h]=a)):i&&(h.value=a,t.k&&(p[t.k]=a))};a?(r.id=-1,_n(r,n)):r()}}}const _n=function(t,e){var i;e&&e.pendingBranch?f(t)?e.effects.push(...t):e.effects.push(t):(f(i=t)?je.push(...i):De&&De.includes(i,i.allowRecurse?Fe+1:Fe)||je.push(i),ze())};function bn(t){return function(t,r){R().__VUE__=!0;const{insert:o,remove:s,patchProp:a,createElement:l,createText:c,createComment:h,setText:f,setElementText:d,parentNode:p,nextSibling:g,setScopeId:v=n,insertStaticContent:m}=t,y=(t,e,i,n=null,r=null,o=null,s=!1,a=null,l=!!e.dynamicChildren)=>{if(t===e)return;t&&!In(t,e)&&(n=Q(t),G(t,r,o,!0),t=null),-2===e.patchFlag&&(l=!1,e.dynamicChildren=null);const{type:c,ref:h,shapeFlag:u}=e;switch(c){case wn:b(t,e,i,n);break;case Tn:x(t,e,i,n);break;case On:null==t&&C(e,i,n,s);break;case Sn:I(t,e,i,n,r,o,s,a,l);break;default:1&u?O(t,e,i,n,r,o,s,a,l):6&u?B(t,e,i,n,r,o,s,a,l):(64&u||128&u)&&c.process(t,e,i,n,r,o,s,a,l,et)}null!=h&&r&&yn(h,t&&t.ref,o,e||t,!e)},b=(t,e,i,n)=>{if(null==t)o(e.el=c(e.children),i,n);else{const i=e.el=t.el;e.children!==t.children&&f(i,e.children)}},x=(t,e,i,n)=>{null==t?o(e.el=h(e.children||""),i,n):e.el=t.el},C=(t,e,i,n)=>{[t.el,t.anchor]=m(t.children,e,i,n,t.el,t.anchor)},S=({el:t,anchor:e},i,n)=>{let r;for(;t&&t!==e;)r=g(t),o(t,i,n),t=r;o(e,i,n)},w=({el:t,anchor:e})=>{let i;for(;t&&t!==e;)i=g(t),s(t),t=i;s(e)},O=(t,e,i,n,r,o,s,a,l)=>{s=s||"svg"===e.type,null==t?k(e,i,n,r,o,s,a,l):j(t,e,r,o,s,a,l)},k=(t,e,i,n,r,s,c,h)=>{let u,f;const{type:p,props:g,shapeFlag:v,transition:m,dirs:y}=t;if(u=t.el=l(t.type,s,g&&g.is,g),8&v?d(u,t.children):16&v&&A(t.children,u,null,n,r,s&&"foreignObject"!==p,c,h),y&&ui(t,null,n,"created"),P(u,t,t.scopeId,c,n),g){for(const e in g)"value"===e||T(e)||a(u,e,null,g[e],s,t.children,n,r,Z);"value"in g&&a(u,"value",null,g.value),(f=g.onVnodeBeforeMount)&&qn(f,n,t)}y&&ui(t,null,n,"beforeMount");const _=(!r||r&&!r.pendingBranch)&&m&&!m.persisted;_&&m.beforeEnter(u),o(u,e,i),((f=g&&g.onVnodeMounted)||_||y)&&_n((()=>{f&&qn(f,n,t),_&&m.enter(u),y&&ui(t,null,n,"mounted")}),r)},P=(t,e,i,n,r)=>{if(i&&v(t,i),n)for(let o=0;o<n.length;o++)v(t,n[o]);if(r){if(e===r.subTree){const e=r.vnode;P(t,e,e.scopeId,e.slotScopeIds,r.parent)}}},A=(t,e,i,n,r,o,s,a,l=0)=>{for(let c=l;c<t.length;c++){const l=t[c]=a?Un(t[c]):Yn(t[c]);y(null,l,e,i,n,r,o,s,a)}},j=(t,i,n,r,o,s,l)=>{const c=i.el=t.el;let{patchFlag:h,dynamicChildren:u,dirs:f}=i;h|=16&t.patchFlag;const p=t.props||e,g=i.props||e;let v;n&&xn(n,!1),(v=g.onVnodeBeforeUpdate)&&qn(v,n,i,t),f&&ui(i,t,n,"beforeUpdate"),n&&xn(n,!0);const m=o&&"foreignObject"!==i.type;if(u?D(t.dynamicChildren,u,c,n,r,m,s):l||X(t,i,c,null,n,r,m,s,!1),h>0){if(16&h)L(c,i,p,g,n,r,o);else if(2&h&&p.class!==g.class&&a(c,"class",null,g.class,o),4&h&&a(c,"style",p.style,g.style,o),8&h){const e=i.dynamicProps;for(let i=0;i<e.length;i++){const s=e[i],l=p[s],h=g[s];h===l&&"value"!==s||a(c,s,l,h,o,t.children,n,r,Z)}}1&h&&t.children!==i.children&&d(c,i.children)}else l||null!=u||L(c,i,p,g,n,r,o);((v=g.onVnodeUpdated)||f)&&_n((()=>{v&&qn(v,n,i,t),f&&ui(i,t,n,"updated")}),r)},D=(t,e,i,n,r,o,s)=>{for(let a=0;a<e.length;a++){const l=t[a],c=e[a],h=
// oldVNode may be an errored async setup() component inside Suspense
// which will not have a mounted element
l.el&&(// - In the case of a Fragment, we need to provide the actual parent
// of the Fragment itself so it can move its children.
l.type===Sn||// - In the case of different nodes, there is going to be a replacement
// which also requires the correct parent container
!In(l,c)||// - In the case of a component, it could contain anything.
70&l.shapeFlag)?p(l.el):
// In other cases, the parent container is not actually used so we
// just pass the block element here to avoid a DOM parentNode call.
i;y(l,c,h,null,n,r,o,s,!0)}},L=(t,i,n,r,o,s,l)=>{if(n!==r){if(n!==e)for(const e in n)T(e)||e in r||a(t,e,n[e],null,l,i.children,o,s,Z);for(const e in r){if(T(e))continue;const c=r[e],h=n[e];c!==h&&"value"!==e&&a(t,e,h,c,l,i.children,o,s,Z)}"value"in r&&a(t,"value",n.value,r.value)}},I=(t,e,i,n,r,s,a,l,h)=>{const u=e.el=t?t.el:c(""),f=e.anchor=t?t.anchor:c("");let{patchFlag:d,dynamicChildren:p,slotScopeIds:g}=e;g&&(l=l?l.concat(g):g),null==t?(o(u,i,n),o(f,i,n),A(e.children,i,f,r,s,a,l,h)):d>0&&64&d&&p&&// #2715 the previous fragment could've been a BAILed one as a result
// of renderSlot() with no valid children
t.dynamicChildren?(D(t.dynamicChildren,p,i,r,s,a,l),(
// #2080 if the stable fragment has a key, it's a <template v-for> that may
//  get moved around. Make sure all root level vnodes inherit el.
// #2134 or if it's a component root, it may also get moved around
// as the component is being moved.
null!=e.key||r&&e===r.subTree)&&Cn(t,e,!0
/* shallow */)):X(t,e,i,f,r,s,a,l,h)},B=(t,e,i,n,r,o,s,a,l)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?r.ctx.activate(e,i,n,s,l):z(e,i,n,r,o,s,l):N(t,e,l)},z=(t,i,n,r,o,s,a)=>{const l=t.component=function(t,i,n){const r=t.type,o=(i?i.appContext:t.appContext)||Kn,s={uid:$n++,vnode:t,type:r,parent:i,appContext:o,root:null,
// to be immediately set
next:null,subTree:null,
// will be set synchronously right after creation
effect:null,update:null,
// will be set synchronously right after creation
scope:new K(!0
/* detached */),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:i?i.provides:Object.create(o.provides),accessCache:null,renderCache:[],
// local resolved assets
components:null,directives:null,
// resolved props and emits options
propsOptions:sn(r,o),emitsOptions:Ue(r,o),
// emit
emit:null,
// to be set immediately
emitted:null,
// props default value
propsDefaults:e,
// inheritAttrs
inheritAttrs:r.inheritAttrs,
// state
ctx:e,data:e,props:e,attrs:e,slots:e,refs:e,setupState:e,setupContext:null,attrsProxy:null,slotsProxy:null,
// suspense related
suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,
// lifecycle hooks
// not using enums here because it results in computed properties
isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};s.ctx={_:s},s.root=i?i.root:s,s.emit=Ye.bind(null,s),t.ce&&t.ce(s);return s}(t,r,o);if(pi(t)&&(l.ctx.renderer=et),function(t,e=!1){or=e;const{props:i,children:n}=t.vnode,r=nr(t);nn(t,i,r,e),vn(t,n);const o=r?function(t,e){const i=t.type;t.accessCache=Object.create(null),t.proxy=ue(new Proxy(t.ctx,Bi));const{setup:n}=i;if(n){const i=t.setupContext=n.length>1?function(t){const e=e=>{t.exposed=e||{}};return{get attrs(){return function(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get:(e,i)=>(pt(t,0,"$attrs"),e[i])}))}(t)},slots:t.slots,emit:t.emit,expose:e}}(t):null;er(t),ft();const r=Te(n,t,0,[t.props,i]);if(dt(),ir(),_(r)){if(r.then(ir,ir),e)return r.then((i=>{sr(t,i,e)})).catch((e=>{ke(e,t,0)}));t.asyncDep=r}else sr(t,r,e)}else ar(t,e)}(t,e):void 0;or=!1}(l),l.asyncDep){if(o&&o.registerDep(l,H),!t.el){const t=l.subTree=Hn(Tn);x(null,t,i,n)}}else H(l,t,i,n,o,s,a)},N=(t,e,i)=>{const n=e.component=t.component;if(function(t,e,i){const{props:n,children:r,component:o}=t,{props:s,children:a,patchFlag:l}=e,c=o.emitsOptions;if(e.dirs||e.transition)return!0;if(!(i&&l>=0))return!(!r&&!a||a&&a.$stable)||n!==s&&(n?!s||ni(n,s,c):!!s);if(1024&l)return!0;if(16&l)return n?ni(n,s,c):!!s;if(8&l){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const i=t[e];if(s[i]!==n[i]&&!Ge(c,i))return!0}}return!1}(t,e,i)){if(n.asyncDep&&!n.asyncResolved)return void W(n,e,i);n.next=e,function(t){const e=Me.indexOf(t);e>Ae&&Me.splice(e,1)}(n.update),n.update()}else e.el=t.el,n.vnode=e},H=(t,e,i,n,r,o,s)=>{const a=()=>{if(t.isMounted){let e,{next:i,bu:n,u:a,parent:l,vnode:c}=t,h=i;xn(t,!1),i?(i.el=c.el,W(t,i,s)):i=c,n&&F(n),(e=i.props&&i.props.onVnodeBeforeUpdate)&&qn(e,l,i,c),xn(t,!0);const u=ti(t),f=t.subTree;t.subTree=u,y(f,u,
// parent may have changed if it's in a teleport
p(f.el),
// anchor may have changed if it's in a fragment
Q(f),t,r,o),i.el=u.el,null===h&&function({vnode:t,parent:e},i){for(;e&&e.subTree===t;)(t=e.vnode).el=i,e=e.parent}(t,u.el),a&&_n(a,r),(e=i.props&&i.props.onVnodeUpdated)&&_n((()=>qn(e,l,i,c)),r)}else{let s;const{el:a,props:l}=e,{bm:c,m:h,parent:u}=t,f=di(e);if(xn(t,!1),c&&F(c),!f&&(s=l&&l.onVnodeBeforeMount)&&qn(s,u,e),xn(t,!0),a&&nt){const i=()=>{t.subTree=ti(t),nt(a,t.subTree,t,r,null)};f?e.type.__asyncLoader().then((
// note: we are moving the render call into an async callback,
// which means it won't track dependencies - but it's ok because
// a server-rendered async wrapper is already in resolved state
// and it will never need to change.
()=>!t.isUnmounted&&i())):i()}else{const s=t.subTree=ti(t);y(null,s,i,n,t,r,o),e.el=s.el}if(h&&_n(h,r),!f&&(s=l&&l.onVnodeMounted)){const t=e;_n((()=>qn(s,u,t)),r)}(256&e.shapeFlag||u&&di(u.vnode)&&256&u.vnode.shapeFlag)&&t.a&&_n(t.a,r),t.isMounted=!0,e=i=n=null}},l=t.effect=new lt(a,(()=>Re(c)),t.scope),c=t.update=()=>l.run();c.id=t.uid,xn(t,!0),c()},W=(t,e,i)=>{e.component=t;const n=t.vnode.props;t.vnode=e,t.next=null,function(t,e,i,n){const{props:r,attrs:o,vnode:{patchFlag:s}}=t,a=he(r),[l]=t.propsOptions;let c=!1;if(
// always force full diff in dev
// - #1942 if hmr is enabled with sfc component
// - vite#872 non-sfc component used by sfc component
!(n||s>0)||16&s){let n;rn(t,e,r,o)&&(c=!0);for(const o in a)e&&(// for camelCase
u(e,o)||// it's possible the original props was passed in as kebab-case
// and converted to camelCase (#955)
(n=M(o))!==o&&u(e,n))||(l?!i||// for camelCase
void 0===i[o]&&// for kebab-case
void 0===i[n]||(r[o]=on(l,a,o,void 0,t,!0
/* isAbsent */)):delete r[o]);if(o!==a)for(const t in o)e&&u(e,t)||(delete o[t],c=!0)}else if(8&s){const i=t.vnode.dynamicProps;for(let n=0;n<i.length;n++){let s=i[n];if(Ge(t.emitsOptions,s))continue;const h=e[s];if(l)if(u(o,s))h!==o[s]&&(o[s]=h,c=!0);else{const e=E(s);r[e]=on(l,a,e,h,t,!1
/* isAbsent */)}else h!==o[s]&&(o[s]=h,c=!0)}}c&&vt(t,"set","$attrs")}(t,e.props,n,i),mn(t,e.children,i),ft(),Ne(),dt()},X=(t,e,i,n,r,o,s,a,l=!1)=>{const c=t&&t.children,h=t?t.shapeFlag:0,u=e.children,{patchFlag:f,shapeFlag:p}=e;if(f>0){if(128&f)return void Y(c,u,i,n,r,o,s,a,l);if(256&f)return void V(c,u,i,n,r,o,s,a,l)}8&p?(16&h&&Z(c,r,o),u!==c&&d(i,u)):16&h?16&p?Y(c,u,i,n,r,o,s,a,l):Z(c,r,o,!0):(8&h&&d(i,""),16&p&&A(u,i,n,r,o,s,a,l))},V=(t,e,n,r,o,s,a,l,c)=>{e=e||i;const h=(t=t||i).length,u=e.length,f=Math.min(h,u);let d;for(d=0;d<f;d++){const i=e[d]=c?Un(e[d]):Yn(e[d]);y(t[d],i,n,null,o,s,a,l,c)}h>u?Z(t,o,s,!0,!1,f):A(e,n,r,o,s,a,l,c,f)},Y=(t,e,n,r,o,s,a,l,c)=>{let h=0;const u=e.length;let f=t.length-1,d=u-1;for(;h<=f&&h<=d;){const i=t[h],r=e[h]=c?Un(e[h]):Yn(e[h]);if(!In(i,r))break;y(i,r,n,null,o,s,a,l,c),h++}for(;h<=f&&h<=d;){const i=t[f],r=e[d]=c?Un(e[d]):Yn(e[d]);if(!In(i,r))break;y(i,r,n,null,o,s,a,l,c),f--,d--}if(h>f){if(h<=d){const t=d+1,i=t<u?e[t].el:r;for(;h<=d;)y(null,e[h]=c?Un(e[h]):Yn(e[h]),n,i,o,s,a,l,c),h++}}else if(h>d)for(;h<=f;)G(t[h],o,s,!0),h++;else{const p=h,g=h,v=new Map;for(h=g;h<=d;h++){const t=e[h]=c?Un(e[h]):Yn(e[h]);null!=t.key&&v.set(t.key,h)}let m,_=0;const b=d-g+1;let x=!1,C=0;const S=new Array(b);for(h=0;h<b;h++)S[h]=0;for(h=p;h<=f;h++){const i=t[h];if(_>=b){G(i,o,s,!0);continue}let r;if(null!=i.key)r=v.get(i.key);else for(m=g;m<=d;m++)if(0===S[m-g]&&In(i,e[m])){r=m;break}void 0===r?G(i,o,s,!0):(S[r-g]=h+1,r>=C?C=r:x=!0,y(i,e[r],n,null,o,s,a,l,c),_++)}const w=x?function(t){const e=t.slice(),i=[0];let n,r,o,s,a;const l=t.length;for(n=0;n<l;n++){const l=t[n];if(0!==l){if(r=i[i.length-1],t[r]<l){e[n]=r,i.push(n);continue}for(o=0,s=i.length-1;o<s;)a=o+s>>1,t[i[a]]<l?o=a+1:s=a;l<t[i[o]]&&(o>0&&(e[n]=i[o-1]),i[o]=n)}}o=i.length,s=i[o-1];for(;o-- >0;)i[o]=s,s=e[s];return i}(S):i;for(m=w.length-1,h=b-1;h>=0;h--){const t=g+h,i=e[t],f=t+1<u?e[t+1].el:r;0===S[h]?y(null,i,n,f,o,s,a,l,c):x&&(m<0||h!==w[m]?U(i,n,f,2):m--)}}},U=(t,e,i,n,r=null)=>{const{el:s,type:a,transition:l,children:c,shapeFlag:h}=t;if(6&h)return void U(t.component.subTree,e,i,n);if(128&h)return void t.suspense.move(e,i,n);if(64&h)return void a.move(t,e,i,et);if(a===Sn){o(s,e,i);for(let t=0;t<c.length;t++)U(c[t],e,i,n);return void o(t.anchor,e,i)}if(a===On)return void S(t,e,i);if(2!==n&&1&h&&l)if(0===n)l.beforeEnter(s),o(s,e,i),_n((()=>l.enter(s)),r);else{const{leave:t,delayLeave:n,afterLeave:r}=l,a=()=>o(s,e,i),c=()=>{t(s,(()=>{a(),r&&r()}))};n?n(s,a,c):c()}else o(s,e,i)},G=(t,e,i,n=!1,r=!1)=>{const{type:o,props:s,ref:a,children:l,dynamicChildren:c,shapeFlag:h,patchFlag:u,dirs:f}=t;if(null!=a&&yn(a,null,i,t,!0),256&h)return void e.ctx.deactivate(t);const d=1&h&&f,p=!di(t);let g;if(p&&(g=s&&s.onVnodeBeforeUnmount)&&qn(g,e,t),6&h)J(t.component,i,n);else{if(128&h)return void t.suspense.unmount(i,n);d&&ui(t,null,e,"beforeUnmount"),64&h?t.type.remove(t,e,i,r,et,n):c&&(// #1153: fast path should not be taken for non-stable (v-for) fragments
o!==Sn||u>0&&64&u)?Z(c,e,i,!1,!0):(o===Sn&&384&u||!r&&16&h)&&Z(l,e,i),n&&q(t)}(p&&(g=s&&s.onVnodeUnmounted)||d)&&_n((()=>{g&&qn(g,e,t),d&&ui(t,null,e,"unmounted")}),i)},q=t=>{const{type:e,el:i,anchor:n,transition:r}=t;if(e===Sn)return void $(i,n);if(e===On)return void w(t);const o=()=>{s(i),r&&!r.persisted&&r.afterLeave&&r.afterLeave()};if(1&t.shapeFlag&&r&&!r.persisted){const{leave:e,delayLeave:n}=r,s=()=>e(i,o);n?n(t.el,o,s):s()}else o()},$=(t,e)=>{let i;for(;t!==e;)i=g(t),s(t),t=i;s(e)},J=(t,e,i)=>{const{bum:n,scope:r,update:o,subTree:s,um:a}=t;n&&F(n),r.stop(),o&&(o.active=!1,G(s,t,e,i)),a&&_n(a,e),_n((()=>{t.isUnmounted=!0}),e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},Z=(t,e,i,n=!1,r=!1,o=0)=>{for(let s=o;s<t.length;s++)G(t[s],e,i,n,r)},Q=t=>6&t.shapeFlag?Q(t.component.subTree):128&t.shapeFlag?t.suspense.next():g(t.anchor||t.el),tt=(t,e,i)=>{null==t?e._vnode&&G(e._vnode,null,null,!0):y(e._vnode||null,t,e,null,null,null,i),Ne(),He(),e._vnode=t},et={p:y,um:G,m:U,r:q,mt:z,mc:A,pc:X,pbc:D,n:Q,o:t};let it,nt;r&&([it,nt]=r(et));return{render:tt,hydrate:it,createApp:Qi(tt,it)}}(t)}function xn({effect:t,update:e},i){t.allowRecurse=e.allowRecurse=i}function Cn(t,e,i=!1){const n=t.children,r=e.children;if(f(n)&&f(r))for(let o=0;o<n.length;o++){const t=n[o];let e=r[o];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=r[o]=Un(r[o]),e.el=t.el),i||Cn(t,e)),e.type===wn&&(e.el=t.el)}}const Sn=Symbol.for("v-fgt"),wn=Symbol.for("v-txt"),Tn=Symbol.for("v-cmt"),On=Symbol.for("v-stc"),kn=[];let En=null;function Pn(t=!1){kn.push(En=t?null:[])}let Mn=1;function An(t){Mn+=t}function jn(t){return t.dynamicChildren=Mn>0?En||i:null,kn.pop(),En=kn[kn.length-1]||null,Mn>0&&En&&En.push(t),t}function Dn(t,e,i,n,r,o){return jn(Nn(t,e,i,n,r,o,!0
/* isBlock */))}function Fn(t,e,i,n,r){return jn(Hn(t,e,i,n,r,!0
/* isBlock: prevent a block from tracking itself */))}function Ln(t){return!!t&&!0===t.__v_isVNode}function In(t,e){return t.type===e.type&&t.key===e.key}const Bn="__vInternal",Rn=({key:t})=>null!=t?t:null,zn=({ref:t,ref_key:e,ref_for:i})=>("number"==typeof t&&(t=""+t),null!=t?v(t)||ve(t)||g(t)?{i:qe,r:t,k:e,f:!!i}:t:null);function Nn(t,e=null,i=null,n=0,r=null,o=(t===Sn?0:1),s=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Rn(e),ref:e&&zn(e),scopeId:Ke,slotScopeIds:null,children:i,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:qe};return a?(Gn(l,i),128&o&&t.normalize(l)):i&&(l.shapeFlag|=v(i)?8:16),Mn>0&&// avoid a block node from tracking itself
!s&&// has current parent block
En&&(// presence of a patch flag indicates this node needs patching on updates.
// component nodes also should always be patched, because even if the
// component doesn't need to update, it needs to persist the instance on to
// the next vnode so that it can be properly unmounted later.
l.patchFlag>0||6&o)&&// the EVENTS flag is only for hydration and if it is the only flag, the
// vnode should not be considered dynamic due to handler caching.
32!==l.patchFlag&&En.push(l),l}const Hn=function(t,e=null,i=null,n=0,r=null,o=!1){t&&t!==Ai||(t=Tn);if(Ln(t)){const n=Wn(t,e,!0
/* mergeRef: true */);return i&&Gn(n,i),Mn>0&&!o&&En&&(6&n.shapeFlag?En[En.indexOf(t)]=n:En.push(n)),n.patchFlag|=-2,n}s=t,g(s)&&"__vccOpts"in s&&(t=t.__vccOpts);var s;if(e){e=function(t){return t?ce(t)||Bn in t?l({},t):t:null}(e);let{class:t,style:i}=e;t&&!v(t)&&(e.class=V(t)),y(i)&&(ce(i)&&!f(i)&&(i=l({},i)),e.style=z(i))}const a=v(t)?1:(t=>t.__isSuspense)(t)?128:(t=>t.__isTeleport)(t)?64:y(t)?4:g(t)?2:0;return Nn(t,e,i,n,r,a,o,!0)};function Wn(t,e,i=!1){const{props:n,ref:r,patchFlag:o,children:a}=t,l=e?function(...t){const e={};for(let i=0;i<t.length;i++){const n=t[i];for(const t in n)if("class"===t)e.class!==n.class&&(e.class=V([e.class,n.class]));else if("style"===t)e.style=z([e.style,n.style]);else if(s(t)){const i=e[t],r=n[t];!r||i===r||f(i)&&i.includes(r)||(e[t]=i?[].concat(i,r):r)}else""!==t&&(e[t]=n[t])}return e}(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Rn(l),ref:e&&e.ref?
// #2078 in the case of <component :is="vnode" ref="extra"/>
// if the vnode itself already has a ref, cloneVNode will need to merge
// the refs so the single vnode can be set on multiple refs
i&&r?f(r)?r.concat(zn(e)):[r,zn(e)]:zn(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,
// if the vnode is cloned with extra props, we can no longer assume its
// existing patch flag to be reliable and need to add the FULL_PROPS flag.
// note: preserve flag for fragments since they use the flag for children
// fast paths only.
patchFlag:e&&t.type!==Sn?-1===o?16:16|o:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,
// These should technically only be non-null on mounted VNodes. However,
// they *should* be copied for kept-alive vnodes. So we just always copy
// them since them being non-null during a mount doesn't affect the logic as
// they will simply be overwritten.
component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Wn(t.ssContent),ssFallback:t.ssFallback&&Wn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Xn(t=" ",e=0){return Hn(wn,null,t,e)}function Vn(t="",e=!1){return e?(Pn(),Fn(Tn,null,t)):Hn(Tn,null,t)}function Yn(t){return null==t||"boolean"==typeof t?Hn(Tn):f(t)?Hn(Sn,null,
// #3666, avoid reference pollution when reusing vnode
t.slice()):"object"==typeof t?Un(t):Hn(wn,null,String(t))}function Un(t){return null===t.el&&-1!==t.patchFlag||t.memo?t:Wn(t)}function Gn(t,e){let i=0;const{shapeFlag:n}=t;if(null==e)e=null;else if(f(e))i=16;else if("object"==typeof e){if(65&n){const i=e.default;return void(i&&(i._c&&(i._d=!1),Gn(t,i()),i._c&&(i._d=!0)))}{i=32;const n=e._;n||Bn in e?3===n&&qe&&(1===qe.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=qe}}else g(e)?(e={default:e,_ctx:qe},i=32):(e=String(e),64&n?(i=16,e=[Xn(e)]):i=8);t.children=e,t.shapeFlag|=i}function qn(t,e,i,n=null){Oe(t,e,7,[i,n])}const Kn=Ji();let $n=0;let Jn=null;let Zn,Qn,tr="__VUE_INSTANCE_SETTERS__";(Qn=R()[tr])||(Qn=R()[tr]=[]),Qn.push((t=>Jn=t)),Zn=t=>{Qn.length>1?Qn.forEach((e=>e(t))):Qn[0](t)};const er=t=>{Zn(t),t.scope.on()},ir=()=>{Jn&&Jn.scope.off(),Zn(null)};function nr(t){return 4&t.vnode.shapeFlag}let rr,or=!1;function sr(t,e,i){g(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:y(e)&&(t.setupState=xe(e)),ar(t,i)}function ar(t,e,i){const r=t.type;if(!t.render){if(!e&&rr&&!r.render){const e=r.template||Xi(t).template;if(e){const{isCustomElement:i,compilerOptions:n}=t.appContext.config,{delimiters:o,compilerOptions:s}=r,a=l(l({isCustomElement:i,delimiters:o},n),s);r.render=rr(e,a)}}t.render=r.render||n}er(t),ft(),Ni(t),dt(),ir()}function lr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(xe(ue(t.exposed)),{get:(e,i)=>i in e?e[i]:i in Li?Li[i](t):void 0,has:(t,e)=>e in t||e in Li}))}const cr=(t,e)=>function(t,e,i=!1){let r,o;const s=g(t);return s?(r=t,o=n):(r=t.get,o=t.set),new we(r,o,s||!o,i)}(t,0,or),hr=Symbol.for("v-scx"),ur=()=>en(hr),fr="3.3.4",dr="undefined"!=typeof document?document:null,pr=dr&&dr.createElement("template"),gr={insert:(t,e,i)=>{e.insertBefore(t,i||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,i,n)=>{const r=e?dr.createElementNS("http://www.w3.org/2000/svg",t):dr.createElement(t,i?{is:i}:void 0);return"select"===t&&n&&null!=n.multiple&&r.setAttribute("multiple",n.multiple),r},createText:t=>dr.createTextNode(t),createComment:t=>dr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>dr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},
// __UNSAFE__
// Reason: innerHTML.
// Static content here can only come from compiled templates.
// As long as the user only uses trusted templates, this is safe.
insertStaticContent(t,e,i,n,r,o){const s=i?i.previousSibling:e.lastChild;if(r&&(r===o||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),i),r!==o&&(r=r.nextSibling););else{pr.innerHTML=n?`<svg>${t}</svg>`:t;const r=pr.content;if(n){const t=r.firstChild;for(;t.firstChild;)r.appendChild(t.firstChild);r.removeChild(t)}e.insertBefore(r,i)}return[
// first
s?s.nextSibling:e.firstChild,
// last
i?i.previousSibling:e.lastChild]}};const vr=/\s*!important$/;function mr(t,e,i){if(f(i))i.forEach((i=>mr(t,e,i)));else if(null==i&&(i=""),e.startsWith("--"))t.setProperty(e,i);else{const n=function(t,e){const i=_r[e];if(i)return i;let n=E(e);if("filter"!==n&&n in t)return _r[e]=n;n=A(n);for(let r=0;r<yr.length;r++){const i=yr[r]+n;if(i in t)return _r[e]=i}return e}(t,e);vr.test(i)?t.setProperty(M(n),i.replace(vr,""),"important"):t[n]=i}}const yr=["Webkit","Moz","ms"],_r={};const br="http://www.w3.org/1999/xlink";function xr(t,e,i,n,r=null){const o=t._vei||(t._vei={}),s=o[e];if(n&&s)s.value=n;else{const[i,a]=function(t){let e;if(Cr.test(t)){let i;for(e={};i=t.match(Cr);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}const i=":"===t[2]?t.slice(3):M(t.slice(2));return[i,e]}(e);if(n){const s=o[e]=function(t,e){const i=t=>{if(t._vts){if(t._vts<=i.attached)return}else t._vts=Date.now();Oe(function(t,e){if(f(e)){const i=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{i.call(t),t._stopped=!0},e.map((t=>e=>!e._stopped&&t&&t(e)))}return e}(t,i.value),e,5,[t])};return i.value=t,i.attached=Tr(),i}(n,r);!function(t,e,i,n){t.addEventListener(e,i,n)}(t,i,s,a)}else s&&(!function(t,e,i,n){t.removeEventListener(e,i,n)}(t,i,s,a),o[e]=void 0)}}const Cr=/(?:Once|Passive|Capture)$/;let Sr=0;const wr=Promise.resolve(),Tr=()=>Sr||(wr.then((()=>Sr=0)),Sr=Date.now());const Or=/^on[a-z]/;function kr(t){const e=Jn||qe;if(!e)return;const i=e.ut=(i=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach((t=>Pr(t,i)))},n=()=>{const n=t(e.proxy);Er(e.subTree,n),i(n)};si(n,null,{flush:"post"}),Ci((()=>{const t=new MutationObserver(n);t.observe(e.subTree.el.parentNode,{childList:!0}),Oi((()=>t.disconnect()))}))}function Er(t,e){if(128&t.shapeFlag){const i=t.suspense;t=i.activeBranch,i.pendingBranch&&!i.isHydrating&&i.effects.push((()=>{Er(i.activeBranch,e)}))}for(;t.component;)t=t.component.subTree;if(1&t.shapeFlag&&t.el)Pr(t.el,e);else if(t.type===Sn)t.children.forEach((t=>Er(t,e)));else if(t.type===On){let{el:i,anchor:n}=t;for(;i&&(Pr(i,e),i!==n);)i=i.nextSibling}}function Pr(t,e){if(1===t.nodeType){const i=t.style;for(const t in e)i.setProperty(`--${t}`,e[t])}}const Mr=["ctrl","shift","alt","meta"],Ar={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>Mr.some((i=>t[`${i}Key`]&&!e.includes(i)))},jr={beforeMount(t,{value:e},{transition:i}){t._vod="none"===t.style.display?"":t.style.display,i&&e?i.beforeEnter(t):Dr(t,e)},mounted(t,{value:e},{transition:i}){i&&e&&i.enter(t)},updated(t,{value:e,oldValue:i},{transition:n}){!e!=!i&&(n?e?(n.beforeEnter(t),Dr(t,!0),n.enter(t)):n.leave(t,(()=>{Dr(t,!1)})):Dr(t,e))},beforeUnmount(t,{value:e}){Dr(t,e)}};function Dr(t,e){t.style.display=e?t._vod:"none"}const Fr=l({patchProp:(t,e,i,n,r=!1,o,l,c,h)=>{"class"===e?function(t,e,i){const n=t._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),null==e?t.removeAttribute("class"):i?t.setAttribute("class",e):t.className=e}(t,n,r):"style"===e?function(t,e,i){const n=t.style,r=v(i);if(i&&!r){if(e&&!v(e))for(const t in e)null==i[t]&&mr(n,t,"");for(const t in i)mr(n,t,i[t])}else{const o=n.display;r?e!==i&&(n.cssText=i):e&&t.removeAttribute("style"),"_vod"in t&&(n.display=o)}}(t,i,n):s(e)?a(e)||xr(t,e,0,n,l):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):function(t,e,i,n){if(n)return"innerHTML"===e||"textContent"===e||!!(e in t&&Or.test(e)&&g(i));if("spellcheck"===e||"draggable"===e||"translate"===e)return!1;if("form"===e)return!1;if("list"===e&&"INPUT"===t.tagName)return!1;if("type"===e&&"TEXTAREA"===t.tagName)return!1;if(Or.test(e)&&v(i))return!1;return e in t}(t,e,n,r))?function(t,e,i,n,r,o,s){if("innerHTML"===e||"textContent"===e)return n&&s(n,r,o),void(t[e]=null==i?"":i);const a=t.tagName;if("value"===e&&"PROGRESS"!==a&&// custom elements may use _value internally
!a.includes("-")){t._value=i;const n=null==i?"":i;return("OPTION"===a?t.getAttribute("value"):t.value)!==n&&(t.value=n),void(null==i&&t.removeAttribute(e))}let l=!1;if(""===i||null==i){const n=typeof t[e];"boolean"===n?i=U(i):null==i&&"string"===n?(i="",l=!0):"number"===n&&(i=0,l=!0)}try{t[e]=i}catch(c){}l&&t.removeAttribute(e)}(t,e,n,o,l,c,h):("true-value"===e?t._trueValue=n:"false-value"===e&&(t._falseValue=n),function(t,e,i,n,r){if(n&&e.startsWith("xlink:"))null==i?t.removeAttributeNS(br,e.slice(6,e.length)):t.setAttributeNS(br,e,i);else{const n=Y(e);null==i||n&&!U(i)?t.removeAttribute(e):t.setAttribute(e,n?"":i)}}(t,e,n,r))}},gr);let Lr;
/*!
  * pinia v2.1.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
let Ir;const Br=t=>Ir=t,Rr=
/* istanbul ignore next */Symbol();function zr(t){return t&&"object"==typeof t&&"[object Object]"===Object.prototype.toString.call(t)&&"function"!=typeof t.toJSON}var Nr,Hr;(Hr=Nr||(Nr={})).direct="direct",Hr.patchObject="patch object",Hr.patchFunction="patch function";const Wr=()=>{};function Xr(t,e,i,n=Wr){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),n())};var o;return!i&&J()&&(o=r,q&&q.cleanups.push(o)),r}function Vr(t,...e){t.slice().forEach((t=>{t(...e)}))}const Yr=t=>t();function Ur(t,e){t instanceof Map&&e instanceof Map&&e.forEach(((e,i)=>t.set(i,e))),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const i in e){if(!e.hasOwnProperty(i))continue;const n=e[i],r=t[i];zr(r)&&zr(n)&&t.hasOwnProperty(i)&&!ve(n)&&!se(n)?t[i]=Ur(r,n):t[i]=n}return t}const Gr=
/* istanbul ignore next */Symbol();const{assign:qr}=Object;function Kr(t,e,i,n){const{state:r,actions:o,getters:s}=e,a=i.state.value[t];let l;return l=$r(t,(function(){a||(i.state.value[t]=r?r():{});const e=function(t){const e=f(t)?new Array(t.length):{};for(const i in t)e[i]=Se(t,i);return e}(i.state.value[t]);return qr(e,o,Object.keys(s||{}).reduce(((e,n)=>(e[n]=ue(cr((()=>{Br(i);const e=i._s.get(t);return s[n].call(e,e)}))),e)),{}))}),e,i,n,!0),l}function $r(t,e,i={},n,r,o){let s;const a=qr({actions:{}},i),l={deep:!0};let c,h,u,f=[],d=[];const p=n.state.value[t];let g;function v(e){let i;c=h=!1,"function"==typeof e?(e(n.state.value[t]),i={type:Nr.patchFunction,storeId:t,events:u}):(Ur(n.state.value[t],e),i={type:Nr.patchObject,payload:e,storeId:t,events:u});const r=g=Symbol();Be().then((()=>{g===r&&(c=!0)})),h=!0,Vr(f,i,n.state.value[t])}o||p||(n.state.value[t]={}),me({});const m=o?function(){const{state:t}=i,e=t?t():{};this.$patch((t=>{qr(t,e)}))}:
/* istanbul ignore next */Wr;function y(e,i){return function(){Br(n);const r=Array.from(arguments),o=[],s=[];let a;Vr(d,{args:r,name:e,store:_,after:function(t){o.push(t)},onError:function(t){s.push(t)}});try{a=i.apply(this&&this.$id===t?this:_,r)}catch(l){throw Vr(s,l),l}return a instanceof Promise?a.then((t=>(Vr(o,t),t))).catch((t=>(Vr(s,t),Promise.reject(t)))):(Vr(o,a),a)}}const _=ne({_p:n,
// _s: scope,
$id:t,$onAction:Xr.bind(null,d),$patch:v,$reset:m,$subscribe(e,i={}){const r=Xr(f,e,i.detached,(()=>o())),o=s.run((()=>oi((()=>n.state.value[t]),(n=>{("sync"===i.flush?h:c)&&e({storeId:t,type:Nr.direct,events:u},n)}),qr({},l,i))));return r},$dispose:function(){s.stop(),f=[],d=[],n._s.delete(t)}});n._s.set(t,_);const b=n._a&&n._a.runWithContext||Yr,x=n._e.run((()=>(s=$(),b((()=>s.run(e))))));for(const w in x){const e=x[w];if(ve(e)&&(!ve(S=e)||!S.effect)||se(e))o||(!p||zr(C=e)&&C.hasOwnProperty(Gr)||(ve(e)?e.value=p[w]:Ur(e,p[w])),n.state.value[t][w]=e);else if("function"==typeof e){const t=y(w,e);x[w]=t,a.actions[w]=e}}var C,S;return qr(_,x),qr(he(_),x),Object.defineProperty(_,"$state",{get:()=>n.state.value[t],set:t=>{v((e=>{qr(e,t)}))}}),n._p.forEach((t=>{qr(_,s.run((()=>t({store:_,app:n._a,pinia:n,options:a}))))})),p&&o&&i.hydrate&&i.hydrate(_.$state,p),c=!0,h=!0,_}function Jr(t,e,i){let n,r;const o="function"==typeof e;function s(t,i){(t=// in test mode, ignore the argument provided as we can always retrieve a
// pinia instance with getActivePinia()
t||(!!(Jn||qe||tn)?en(Rr,null):null))&&Br(t),(t=Ir)._s.has(n)||(o?$r(n,e,r,t):Kr(n,r,t));return t._s.get(n)}return"string"==typeof t?(n=t,r=o?i:e):(r=t,n=t.id),s.$id=n,s}const Zr=Jr({id:"contextMenu",state:()=>({visibile:!1,positionX:0,positionY:0,width:0,height:0})}),Qr=Jr({id:"canvas",state:()=>({canvasExample:null,selectedGraphics:"select",selectedElement:[],KeyboardKey:"",scheme:"LIGHTSCHEME",lockStatus:!1,zoomLevel:1}),actions:{updateCanvas(t){this.canvasExample=JSON.parse(JSON.stringify(t))}},
// 开启数据持久化
persist:{storage:window.localStorage}});function to(t){if(t.__esModule)return t;var e=t.default;if("function"==typeof e){var i=function t(){if(this instanceof t){var i=[null];return i.push.apply(i,arguments),new(Function.bind.apply(e,i))}return e.apply(this,arguments)};i.prototype=e.prototype}else i={};return Object.defineProperty(i,"__esModule",{value:!0}),Object.keys(t).forEach((function(e){var n=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(i,e,n.get?n:{enumerable:!0,get:function(){return t[e]}})})),i}var eo={};const io=to(Object.freeze(Object.defineProperty({__proto__:null,default:{}},Symbol.toStringTag,{value:"Module"})));!function(t){
/*! Fabric.js Copyright 2008-2015, Printio (Juriy Zaytsev, Maxim Chernyak) */
var e,i,n,r,o,s,a,l,c,h,u,f,d,p,g,v,m,y,_,b,x,C=C||{version:"5.3.0"};if(t.fabric=C,"undefined"!=typeof document&&"undefined"!=typeof window)document instanceof("undefined"!=typeof HTMLDocument?HTMLDocument:Document)?C.document=document:C.document=document.implementation.createHTMLDocument(""),C.window=window;else{var S=new io.JSDOM(decodeURIComponent("%3C!DOCTYPE%20html%3E%3Chtml%3E%3Chead%3E%3C%2Fhead%3E%3Cbody%3E%3C%2Fbody%3E%3C%2Fhtml%3E"),{features:{FetchExternalResources:["img"]},resources:"usable"}).window;C.document=S.document,C.jsdomImplForWrapper=io.implForWrapper,C.nodeCanvas=io.Canvas,C.window=S,DOMParser=C.window.DOMParser}function w(t,e){var i=t.canvas,n=e.targetCanvas,r=n.getContext("2d");r.translate(0,n.height),r.scale(1,-1);var o=i.height-n.height;r.drawImage(i,0,o,n.width,n.height,0,0,n.width,n.height)}function T(t,e){var i=e.targetCanvas.getContext("2d"),n=e.destinationWidth,r=e.destinationHeight,o=n*r*4,s=new Uint8Array(this.imageBuffer,0,o),a=new Uint8ClampedArray(this.imageBuffer,0,o);t.readPixels(0,0,n,r,t.RGBA,t.UNSIGNED_BYTE,s);var l=new ImageData(a,n,r);i.putImageData(l,0,0)}C.isTouchSupported="ontouchstart"in C.window||"ontouchstart"in C.document||C.window&&C.window.navigator&&C.window.navigator.maxTouchPoints>0,C.isLikelyNode="undefined"!=typeof Buffer&&"undefined"==typeof window,C.SHARED_ATTRIBUTES=["display","transform","fill","fill-opacity","fill-rule","opacity","stroke","stroke-dasharray","stroke-linecap","stroke-dashoffset","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","id","paint-order","vector-effect","instantiated_by_use","clip-path"],C.DPI=96,C.reNum="(?:[-+]?(?:\\d+|\\d*\\.\\d+)(?:[eE][-+]?\\d+)?)",C.commaWsp="(?:\\s+,?\\s*|,\\s*)",C.rePathCommand=/([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:[eE][-+]?\d+)?)/gi,C.reNonWord=/[ \n\.,;!\?\-]/,C.fontPaths={},C.iMatrix=[1,0,0,1,0,0],C.svgNS="http://www.w3.org/2000/svg",C.perfLimitSizeTotal=2097152,C.maxCacheSideLimit=4096,C.minCacheSideLimit=256,C.charWidthsCache={},C.textureSize=2048,C.disableStyleCopyPaste=!1,C.enableGLFiltering=!0,C.devicePixelRatio=C.window.devicePixelRatio||C.window.webkitDevicePixelRatio||C.window.mozDevicePixelRatio||1,C.browserShadowBlurConstant=1,C.arcToSegmentsCache={},C.boundsOfCurveCache={},C.cachesBoundsOfCurve=!0,C.forceGLPutImageData=!1,C.initFilterBackend=function(){return C.enableGLFiltering&&C.isWebglSupported&&C.isWebglSupported(C.textureSize)?new C.WebglFilterBackend({tileSize:C.textureSize}):C.Canvas2dFilterBackend?new C.Canvas2dFilterBackend:void 0},"undefined"!=typeof document&&"undefined"!=typeof window&&(window.fabric=C),function(){function t(t,e){if(this.__eventListeners[t]){var i=this.__eventListeners[t];e?i[i.indexOf(e)]=!1:C.util.array.fill(i,!1)}}function e(t,e){var i=function(){e.apply(this,arguments),this.off(t,i)}.bind(this);this.on(t,i)}C.Observable={fire:function(t,e){if(!this.__eventListeners)return this;var i=this.__eventListeners[t];if(!i)return this;for(var n=0,r=i.length;n<r;n++)i[n]&&i[n].call(this,e||{});return this.__eventListeners[t]=i.filter((function(t){return!1!==t})),this},on:function(t,e){if(this.__eventListeners||(this.__eventListeners={}),1===arguments.length)for(var i in t)this.on(i,t[i]);else this.__eventListeners[t]||(this.__eventListeners[t]=[]),this.__eventListeners[t].push(e);return this},once:function(t,i){if(1===arguments.length)for(var n in t)e.call(this,n,t[n]);else e.call(this,t,i);return this},off:function(e,i){if(!this.__eventListeners)return this;if(0===arguments.length)for(e in this.__eventListeners)t.call(this,e);else if(1===arguments.length&&"object"==typeof arguments[0])for(var n in e)t.call(this,n,e[n]);else t.call(this,e,i);return this}}}(),C.Collection={_objects:[],
/**
     * Adds objects to collection, Canvas or Group, then renders canvas
     * (if `renderOnAddRemove` is not `false`).
     * in case of Group no changes to bounding box are made.
     * Objects should be instances of (or inherit from) fabric.Object
     * Use of this function is highly discouraged for groups.
     * you can add a bunch of objects with the add method but then you NEED
     * to run a addWithUpdate call for the Group class or position/bbox will be wrong.
     * @param {...fabric.Object} object Zero or more fabric instances
     * @return {Self} thisArg
     * @chainable
     */
add:function(){if(this._objects.push.apply(this._objects,arguments),this._onObjectAdded)for(var t=0,e=arguments.length;t<e;t++)this._onObjectAdded(arguments[t]);return this.renderOnAddRemove&&this.requestRenderAll(),this},
/**
     * Inserts an object into collection at specified index, then renders canvas (if `renderOnAddRemove` is not `false`)
     * An object should be an instance of (or inherit from) fabric.Object
     * Use of this function is highly discouraged for groups.
     * you can add a bunch of objects with the insertAt method but then you NEED
     * to run a addWithUpdate call for the Group class or position/bbox will be wrong.
     * @param {Object} object Object to insert
     * @param {Number} index Index to insert object at
     * @param {Boolean} nonSplicing When `true`, no splicing (shifting) of objects occurs
     * @return {Self} thisArg
     * @chainable
     */
insertAt:function(t,e,i){var n=this._objects;return i?n[e]=t:n.splice(e,0,t),this._onObjectAdded&&this._onObjectAdded(t),this.renderOnAddRemove&&this.requestRenderAll(),this},
/**
     * Removes objects from a collection, then renders canvas (if `renderOnAddRemove` is not `false`)
     * @param {...fabric.Object} object Zero or more fabric instances
     * @return {Self} thisArg
     * @chainable
     */
remove:function(){for(var t,e=this._objects,i=!1,n=0,r=arguments.length;n<r;n++)-1!==(t=e.indexOf(arguments[n]))&&(i=!0,e.splice(t,1),this._onObjectRemoved&&this._onObjectRemoved(arguments[n]));return this.renderOnAddRemove&&i&&this.requestRenderAll(),this},
/**
     * Executes given function for each object in this group
     * @param {Function} callback
     *                   Callback invoked with current object as first argument,
     *                   index - as second and an array of all objects - as third.
     *                   Callback is invoked in a context of Global Object (e.g. `window`)
     *                   when no `context` argument is given
     *
     * @param {Object} context Context (aka thisObject)
     * @return {Self} thisArg
     * @chainable
     */
forEachObject:function(t,e){for(var i=this.getObjects(),n=0,r=i.length;n<r;n++)t.call(e,i[n],n,i);return this},
/**
     * Returns an array of children objects of this instance
     * Type parameter introduced in 1.3.10
     * since 2.3.5 this method return always a COPY of the array;
     * @param {String} [type] When specified, only objects of this type are returned
     * @return {Array}
     */
getObjects:function(t){return void 0===t?this._objects.concat():this._objects.filter((function(e){return e.type===t}))},
/**
     * Returns object at specified index
     * @param {Number} index
     * @return {Self} thisArg
     */
item:function(t){return this._objects[t]},
/**
     * Returns true if collection contains no objects
     * @return {Boolean} true if collection is empty
     */
isEmpty:function(){return 0===this._objects.length},
/**
     * Returns a size of a collection (i.e: length of an array containing its objects)
     * @return {Number} Collection size
     */
size:function(){return this._objects.length},
/**
     * Returns true if collection contains an object
     * @param {Object} object Object to check against
     * @param {Boolean} [deep=false] `true` to check all descendants, `false` to check only `_objects`
     * @return {Boolean} `true` if collection contains an object
     */
contains:function(t,e){return this._objects.indexOf(t)>-1||!!e&&this._objects.some((function(e){return"function"==typeof e.contains&&e.contains(t,!0)}))},
/**
     * Returns number representation of a collection complexity
     * @return {Number} complexity
     */
complexity:function(){return this._objects.reduce((function(t,e){return t+=e.complexity?e.complexity():0}),0)}},C.CommonMethods={
/**
     * Sets object's properties from options
     * @param {Object} [options] Options object
     */
_setOptions:function(t){for(var e in t)this.set(e,t[e])},
/**
     * @private
     * @param {Object} [filler] Options object
     * @param {String} [property] property to set the Gradient to
     */
_initGradient:function(t,e){!t||!t.colorStops||t instanceof C.Gradient||this.set(e,new C.Gradient(t))},
/**
     * @private
     * @param {Object} [filler] Options object
     * @param {String} [property] property to set the Pattern to
     * @param {Function} [callback] callback to invoke after pattern load
     */
_initPattern:function(t,e,i){!t||!t.source||t instanceof C.Pattern?i&&i():this.set(e,new C.Pattern(t,i))},
/**
     * @private
     */
_setObject:function(t){for(var e in t)this._set(e,t[e])},
/**
     * Sets property to a given value. When changing position/dimension -related properties (left, top, scale, angle, etc.) `set` does not update position of object's borders/controls. If you need to update those, call `setCoords()`.
     * @param {String|Object} key Property name or object (if object, iterate over the object properties)
     * @param {Object|Function} value Property value (if function, the value is passed into it and its return value is used as a new one)
     * @return {fabric.Object} thisArg
     * @chainable
     */
set:function(t,e){return"object"==typeof t?this._setObject(t):this._set(t,e),this},_set:function(t,e){this[t]=e},
/**
     * Toggles specified property from `true` to `false` or from `false` to `true`
     * @param {String} property Property to toggle
     * @return {fabric.Object} thisArg
     * @chainable
     */
toggle:function(t){var e=this.get(t);return"boolean"==typeof e&&this.set(t,!e),this},
/**
     * Basic getter
     * @param {String} property Property name
     * @return {*} value of a property
     */
get:function(t){return this[t]}},e=t,i=Math.sqrt,n=Math.atan2,r=Math.pow,o=Math.PI/180,s=Math.PI/2,C.util={
/**
       * Calculate the cos of an angle, avoiding returning floats for known results
       * @static
       * @memberOf fabric.util
       * @param {Number} angle the angle in radians or in degree
       * @return {Number}
       */
cos:function(t){if(0===t)return 1;switch(t<0&&(t=-t),t/s){case 1:case 3:return 0;case 2:return-1}return Math.cos(t)},
/**
       * Calculate the sin of an angle, avoiding returning floats for known results
       * @static
       * @memberOf fabric.util
       * @param {Number} angle the angle in radians or in degree
       * @return {Number}
       */
sin:function(t){if(0===t)return 0;var e=1;switch(t<0&&(e=-1),t/s){case 1:return e;case 2:return 0;case 3:return-e}return Math.sin(t)},
/**
       * Removes value from an array.
       * Presence of value (and its position in an array) is determined via `Array.prototype.indexOf`
       * @static
       * @memberOf fabric.util
       * @param {Array} array
       * @param {*} value
       * @return {Array} original array
       */
removeFromArray:function(t,e){var i=t.indexOf(e);return-1!==i&&t.splice(i,1),t},
/**
       * Returns random number between 2 specified ones.
       * @static
       * @memberOf fabric.util
       * @param {Number} min lower limit
       * @param {Number} max upper limit
       * @return {Number} random value (between min and max)
       */
getRandomInt:function(t,e){return Math.floor(Math.random()*(e-t+1))+t},
/**
       * Transforms degrees to radians.
       * @static
       * @memberOf fabric.util
       * @param {Number} degrees value in degrees
       * @return {Number} value in radians
       */
degreesToRadians:function(t){return t*o},
/**
       * Transforms radians to degrees.
       * @static
       * @memberOf fabric.util
       * @param {Number} radians value in radians
       * @return {Number} value in degrees
       */
radiansToDegrees:function(t){return t/o},
/**
       * Rotates `point` around `origin` with `radians`
       * @static
       * @memberOf fabric.util
       * @param {fabric.Point} point The point to rotate
       * @param {fabric.Point} origin The origin of the rotation
       * @param {Number} radians The radians of the angle for the rotation
       * @return {fabric.Point} The new rotated point
       */
rotatePoint:function(t,e,i){var n=new C.Point(t.x-e.x,t.y-e.y),r=C.util.rotateVector(n,i);return new C.Point(r.x,r.y).addEquals(e)},
/**
       * Rotates `vector` with `radians`
       * @static
       * @memberOf fabric.util
       * @param {Object} vector The vector to rotate (x and y)
       * @param {Number} radians The radians of the angle for the rotation
       * @return {Object} The new rotated point
       */
rotateVector:function(t,e){var i=C.util.sin(e),n=C.util.cos(e);return{x:t.x*n-t.y*i,y:t.x*i+t.y*n}},
/**
       * Creates a vetor from points represented as a point
       * @static
       * @memberOf fabric.util
       *
       * @typedef {Object} Point
       * @property {number} x
       * @property {number} y
       *
       * @param {Point} from
       * @param {Point} to
       * @returns {Point} vector
       */
createVector:function(t,e){return new C.Point(e.x-t.x,e.y-t.y)},
/**
       * Calculates angle between 2 vectors using dot product
       * @static
       * @memberOf fabric.util
       * @param {Point} a
       * @param {Point} b
       * @returns the angle in radian between the vectors
       */
calcAngleBetweenVectors:function(t,e){return Math.acos((t.x*e.x+t.y*e.y)/(Math.hypot(t.x,t.y)*Math.hypot(e.x,e.y)))},
/**
       * @static
       * @memberOf fabric.util
       * @param {Point} v
       * @returns {Point} vector representing the unit vector of pointing to the direction of `v`
       */
getHatVector:function(t){return new C.Point(t.x,t.y).multiply(1/Math.hypot(t.x,t.y))},
/**
       * @static
       * @memberOf fabric.util
       * @param {Point} A
       * @param {Point} B
       * @param {Point} C
       * @returns {{ vector: Point, angle: number }} vector representing the bisector of A and A's angle
       */
getBisector:function(t,e,i){var n=C.util.createVector(t,e),r=C.util.createVector(t,i),o=C.util.calcAngleBetweenVectors(n,r),s=o*(0===C.util.calcAngleBetweenVectors(C.util.rotateVector(n,o),r)?1:-1)/2;return{vector:C.util.getHatVector(C.util.rotateVector(n,s)),angle:o}},
/**
       * Project stroke width on points returning 2 projections for each point as follows:
       * - `miter`: 2 points corresponding to the outer boundary and the inner boundary of stroke.
       * - `bevel`: 2 points corresponding to the bevel boundaries, tangent to the bisector.
       * - `round`: same as `bevel`
       * Used to calculate object's bounding box
       * @static
       * @memberOf fabric.util
       * @param {Point[]} points
       * @param {Object} options
       * @param {number} options.strokeWidth
       * @param {'miter'|'bevel'|'round'} options.strokeLineJoin
       * @param {number} options.strokeMiterLimit https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-miterlimit
       * @param {boolean} options.strokeUniform
       * @param {number} options.scaleX
       * @param {number} options.scaleY
       * @param {boolean} [openPath] whether the shape is open or not, affects the calculations of the first and last points
       * @returns {fabric.Point[]} array of size 2n/4n of all suspected points
       */
projectStrokeOnPoints:function(t,e,i){var n=[],r=e.strokeWidth/2,o=e.strokeUniform?new C.Point(1/e.scaleX,1/e.scaleY):new C.Point(1,1),s=function(t){var e=r/Math.hypot(t.x,t.y);return new C.Point(t.x*e*o.x,t.y*e*o.y)};return t.length<=1||t.forEach((function(a,l){var c,h,u=new C.Point(a.x,a.y);0===l?(h=t[l+1],c=i?s(C.util.createVector(h,u)).addEquals(u):t[t.length-1]):l===t.length-1?(c=t[l-1],h=i?s(C.util.createVector(c,u)).addEquals(u):t[0]):(c=t[l-1],h=t[l+1]);var f,d,p=C.util.getBisector(u,c,h),g=p.vector,v=p.angle;if("miter"===e.strokeLineJoin&&(f=-r/Math.sin(v/2),d=new C.Point(g.x*f*o.x,g.y*f*o.y),Math.hypot(d.x,d.y)/r<=e.strokeMiterLimit))return n.push(u.add(d)),void n.push(u.subtract(d));f=-r*Math.SQRT2,d=new C.Point(g.x*f*o.x,g.y*f*o.y),n.push(u.add(d)),n.push(u.subtract(d))})),n},
/**
       * Apply transform t to point p
       * @static
       * @memberOf fabric.util
       * @param  {fabric.Point} p The point to transform
       * @param  {Array} t The transform
       * @param  {Boolean} [ignoreOffset] Indicates that the offset should not be applied
       * @return {fabric.Point} The transformed point
       */
transformPoint:function(t,e,i){return i?new C.Point(e[0]*t.x+e[2]*t.y,e[1]*t.x+e[3]*t.y):new C.Point(e[0]*t.x+e[2]*t.y+e[4],e[1]*t.x+e[3]*t.y+e[5])},
/**
       * Returns coordinates of points's bounding rectangle (left, top, width, height)
       * @param {Array} points 4 points array
       * @param {Array} [transform] an array of 6 numbers representing a 2x3 transform matrix
       * @return {Object} Object with left, top, width, height properties
       */
makeBoundingBoxFromPoints:function(t,e){if(e)for(var i=0;i<t.length;i++)t[i]=C.util.transformPoint(t[i],e);var n=[t[0].x,t[1].x,t[2].x,t[3].x],r=C.util.array.min(n),o=C.util.array.max(n)-r,s=[t[0].y,t[1].y,t[2].y,t[3].y],a=C.util.array.min(s);return{left:r,top:a,width:o,height:C.util.array.max(s)-a}},
/**
       * Invert transformation t
       * @static
       * @memberOf fabric.util
       * @param {Array} t The transform
       * @return {Array} The inverted transform
       */
invertTransform:function(t){var e=1/(t[0]*t[3]-t[1]*t[2]),i=[e*t[3],-e*t[1],-e*t[2],e*t[0]],n=C.util.transformPoint({x:t[4],y:t[5]},i,!0);return i[4]=-n.x,i[5]=-n.y,i},
/**
       * A wrapper around Number#toFixed, which contrary to native method returns number, not string.
       * @static
       * @memberOf fabric.util
       * @param {Number|String} number number to operate on
       * @param {Number} fractionDigits number of fraction digits to "leave"
       * @return {Number}
       */
toFixed:function(t,e){return parseFloat(Number(t).toFixed(e))},
/**
       * Converts from attribute value to pixel value if applicable.
       * Returns converted pixels or original value not converted.
       * @param {Number|String} value number to operate on
       * @param {Number} fontSize
       * @return {Number|String}
       */
parseUnit:function(t,e){var i=/\D{0,2}$/.exec(t),n=parseFloat(t);switch(e||(e=C.Text.DEFAULT_SVG_FONT_SIZE),i[0]){case"mm":return n*C.DPI/25.4;case"cm":return n*C.DPI/2.54;case"in":return n*C.DPI;case"pt":return n*C.DPI/72;case"pc":return n*C.DPI/72*12;case"em":return n*e;default:return n}},
/**
       * Function which always returns `false`.
       * @static
       * @memberOf fabric.util
       * @return {Boolean}
       */
falseFunction:function(){return!1},
/**
       * Returns klass "Class" object of given namespace
       * @memberOf fabric.util
       * @param {String} type Type of object (eg. 'circle')
       * @param {String} namespace Namespace to get klass "Class" object from
       * @return {Object} klass "Class"
       */
getKlass:function(t,e){return t=C.util.string.camelize(t.charAt(0).toUpperCase()+t.slice(1)),C.util.resolveNamespace(e)[t]},
/**
       * Returns array of attributes for given svg that fabric parses
       * @memberOf fabric.util
       * @param {String} type Type of svg element (eg. 'circle')
       * @return {Array} string names of supported attributes
       */
getSvgAttributes:function(t){var e=["instantiated_by_use","style","id","class"];switch(t){case"linearGradient":e=e.concat(["x1","y1","x2","y2","gradientUnits","gradientTransform"]);break;case"radialGradient":e=e.concat(["gradientUnits","gradientTransform","cx","cy","r","fx","fy","fr"]);break;case"stop":e=e.concat(["offset","stop-color","stop-opacity"])}return e},
/**
       * Returns object of given namespace
       * @memberOf fabric.util
       * @param {String} namespace Namespace string e.g. 'fabric.Image.filter' or 'fabric'
       * @return {Object} Object for given namespace (default fabric)
       */
resolveNamespace:function(t){if(!t)return C;var i,n=t.split("."),r=n.length,o=e||C.window;for(i=0;i<r;++i)o=o[n[i]];return o},
/**
       * Loads image element from given url and passes it to a callback
       * @memberOf fabric.util
       * @param {String} url URL representing an image
       * @param {Function} callback Callback; invoked with loaded image
       * @param {*} [context] Context to invoke callback in
       * @param {Object} [crossOrigin] crossOrigin value to set image element to
       */
loadImage:function(t,e,i,n){if(t){var r=C.util.createImage(),o=function(){e&&e.call(i,r,!1),r=r.onload=r.onerror=null};r.onload=o,r.onerror=function(){C.log("Error loading "+r.src),e&&e.call(i,null,!0),r=r.onload=r.onerror=null},0!==t.indexOf("data")&&null!=n&&(r.crossOrigin=n),"data:image/svg"===t.substring(0,14)&&(r.onload=null,C.util.loadImageInDom(r,o)),r.src=t}else e&&e.call(i,t)},
/**
       * Attaches SVG image with data: URL to the dom
       * @memberOf fabric.util
       * @param {Object} img Image object with data:image/svg src
       * @param {Function} callback Callback; invoked with loaded image
       * @return {Object} DOM element (div containing the SVG image)
       */
loadImageInDom:function(t,e){var i=C.document.createElement("div");i.style.width=i.style.height="1px",i.style.left=i.style.top="-100%",i.style.position="absolute",i.appendChild(t),C.document.querySelector("body").appendChild(i),t.onload=function(){e(),i.parentNode.removeChild(i),i=null}},
/**
       * Creates corresponding fabric instances from their object representations
       * @static
       * @memberOf fabric.util
       * @param {Array} objects Objects to enliven
       * @param {Function} callback Callback to invoke when all objects are created
       * @param {String} namespace Namespace to get klass "Class" object from
       * @param {Function} reviver Method for further parsing of object elements,
       * called after each fabric object created.
       */
enlivenObjects:function(t,e,i,n){var r=[],o=0,s=(t=t||[]).length;function a(){++o===s&&e&&e(r.filter((function(t){return t})))}s?t.forEach((function(t,e){t&&t.type?C.util.getKlass(t.type,i).fromObject(t,(function(i,o){o||(r[e]=i),n&&n(t,i,o),a()})):a()})):e&&e(r)},
/**
       * Creates corresponding fabric instances residing in an object, e.g. `clipPath`
       * @see {@link fabric.Object.ENLIVEN_PROPS}
       * @param {Object} object
       * @param {Object} [context] assign enlived props to this object (pass null to skip this)
       * @param {(objects:fabric.Object[]) => void} callback
       */
enlivenObjectEnlivables:function(t,e,i){var n=C.Object.ENLIVEN_PROPS.filter((function(e){return!!t[e]}));C.util.enlivenObjects(n.map((function(e){return t[e]})),(function(t){var r={};n.forEach((function(i,n){r[i]=t[n],e&&(e[i]=t[n])})),i&&i(r)}))},
/**
       * Create and wait for loading of patterns
       * @static
       * @memberOf fabric.util
       * @param {Array} patterns Objects to enliven
       * @param {Function} callback Callback to invoke when all objects are created
       * called after each fabric object created.
       */
enlivenPatterns:function(t,e){function i(){++r===o&&e&&e(n)}var n=[],r=0,o=(t=t||[]).length;o?t.forEach((function(t,e){t&&t.source?new C.Pattern(t,(function(t){n[e]=t,i()})):(n[e]=t,i())})):e&&e(n)},
/**
       * Groups SVG elements (usually those retrieved from SVG document)
       * @static
       * @memberOf fabric.util
       * @param {Array} elements SVG elements to group
       * @param {Object} [options] Options object
       * @param {String} path Value to set sourcePath to
       * @return {fabric.Object|fabric.Group}
       */
groupSVGElements:function(t,e,i){var n;return t&&1===t.length?(void 0!==i&&(t[0].sourcePath=i),t[0]):(e&&(e.width&&e.height?e.centerPoint={x:e.width/2,y:e.height/2}:(delete e.width,delete e.height)),n=new C.Group(t,e),void 0!==i&&(n.sourcePath=i),n)},
/**
       * Populates an object with properties of another object
       * @static
       * @memberOf fabric.util
       * @param {Object} source Source object
       * @param {Object} destination Destination object
       * @return {Array} properties Properties names to include
       */
populateWithProperties:function(t,e,i){if(i&&Array.isArray(i))for(var n=0,r=i.length;n<r;n++)i[n]in t&&(e[i[n]]=t[i[n]])},
/**
       * Creates canvas element
       * @static
       * @memberOf fabric.util
       * @return {CanvasElement} initialized canvas element
       */
createCanvasElement:function(){return C.document.createElement("canvas")},
/**
       * Creates a canvas element that is a copy of another and is also painted
       * @param {CanvasElement} canvas to copy size and content of
       * @static
       * @memberOf fabric.util
       * @return {CanvasElement} initialized canvas element
       */
copyCanvasElement:function(t){var e=C.util.createCanvasElement();return e.width=t.width,e.height=t.height,e.getContext("2d").drawImage(t,0,0),e},
/**
       * since 2.6.0 moved from canvas instance to utility.
       * @param {CanvasElement} canvasEl to copy size and content of
       * @param {String} format 'jpeg' or 'png', in some browsers 'webp' is ok too
       * @param {Number} quality <= 1 and > 0
       * @static
       * @memberOf fabric.util
       * @return {String} data url
       */
toDataURL:function(t,e,i){return t.toDataURL("image/"+e,i)},
/**
       * Creates image element (works on client and node)
       * @static
       * @memberOf fabric.util
       * @return {HTMLImageElement} HTML image element
       */
createImage:function(){return C.document.createElement("img")},
/**
       * Multiply matrix A by matrix B to nest transformations
       * @static
       * @memberOf fabric.util
       * @param  {Array} a First transformMatrix
       * @param  {Array} b Second transformMatrix
       * @param  {Boolean} is2x2 flag to multiply matrices as 2x2 matrices
       * @return {Array} The product of the two transform matrices
       */
multiplyTransformMatrices:function(t,e,i){return[t[0]*e[0]+t[2]*e[1],t[1]*e[0]+t[3]*e[1],t[0]*e[2]+t[2]*e[3],t[1]*e[2]+t[3]*e[3],i?0:t[0]*e[4]+t[2]*e[5]+t[4],i?0:t[1]*e[4]+t[3]*e[5]+t[5]]},
/**
       * Decomposes standard 2x3 matrix into transform components
       * @static
       * @memberOf fabric.util
       * @param  {Array} a transformMatrix
       * @return {Object} Components of transform
       */
qrDecompose:function(t){var e=n(t[1],t[0]),s=r(t[0],2)+r(t[1],2),a=i(s),l=(t[0]*t[3]-t[2]*t[1])/a,c=n(t[0]*t[2]+t[1]*t[3],s);return{angle:e/o,scaleX:a,scaleY:l,skewX:c/o,skewY:0,translateX:t[4],translateY:t[5]}},
/**
       * Returns a transform matrix starting from an object of the same kind of
       * the one returned from qrDecompose, useful also if you want to calculate some
       * transformations from an object that is not enlived yet
       * @static
       * @memberOf fabric.util
       * @param  {Object} options
       * @param  {Number} [options.angle] angle in degrees
       * @return {Number[]} transform matrix
       */
calcRotateMatrix:function(t){if(!t.angle)return C.iMatrix.concat();var e=C.util.degreesToRadians(t.angle),i=C.util.cos(e),n=C.util.sin(e);return[i,n,-n,i,0,0]},
/**
       * Returns a transform matrix starting from an object of the same kind of
       * the one returned from qrDecompose, useful also if you want to calculate some
       * transformations from an object that is not enlived yet.
       * is called DimensionsTransformMatrix because those properties are the one that influence
       * the size of the resulting box of the object.
       * @static
       * @memberOf fabric.util
       * @param  {Object} options
       * @param  {Number} [options.scaleX]
       * @param  {Number} [options.scaleY]
       * @param  {Boolean} [options.flipX]
       * @param  {Boolean} [options.flipY]
       * @param  {Number} [options.skewX]
       * @param  {Number} [options.skewY]
       * @return {Number[]} transform matrix
       */
calcDimensionsMatrix:function(t){var e=void 0===t.scaleX?1:t.scaleX,i=void 0===t.scaleY?1:t.scaleY,n=[t.flipX?-e:e,0,0,t.flipY?-i:i,0,0],r=C.util.multiplyTransformMatrices,o=C.util.degreesToRadians;return t.skewX&&(n=r(n,[1,0,Math.tan(o(t.skewX)),1],!0)),t.skewY&&(n=r(n,[1,Math.tan(o(t.skewY)),0,1],!0)),n},
/**
       * Returns a transform matrix starting from an object of the same kind of
       * the one returned from qrDecompose, useful also if you want to calculate some
       * transformations from an object that is not enlived yet
       * @static
       * @memberOf fabric.util
       * @param  {Object} options
       * @param  {Number} [options.angle]
       * @param  {Number} [options.scaleX]
       * @param  {Number} [options.scaleY]
       * @param  {Boolean} [options.flipX]
       * @param  {Boolean} [options.flipY]
       * @param  {Number} [options.skewX]
       * @param  {Number} [options.skewX]
       * @param  {Number} [options.translateX]
       * @param  {Number} [options.translateY]
       * @return {Number[]} transform matrix
       */
composeMatrix:function(t){var e=[1,0,0,1,t.translateX||0,t.translateY||0],i=C.util.multiplyTransformMatrices;return t.angle&&(e=i(e,C.util.calcRotateMatrix(t))),(1!==t.scaleX||1!==t.scaleY||t.skewX||t.skewY||t.flipX||t.flipY)&&(e=i(e,C.util.calcDimensionsMatrix(t))),e},
/**
       * reset an object transform state to neutral. Top and left are not accounted for
       * @static
       * @memberOf fabric.util
       * @param  {fabric.Object} target object to transform
       */
resetObjectTransform:function(t){t.scaleX=1,t.scaleY=1,t.skewX=0,t.skewY=0,t.flipX=!1,t.flipY=!1,t.rotate(0)},
/**
       * Extract Object transform values
       * @static
       * @memberOf fabric.util
       * @param  {fabric.Object} target object to read from
       * @return {Object} Components of transform
       */
saveObjectTransform:function(t){return{scaleX:t.scaleX,scaleY:t.scaleY,skewX:t.skewX,skewY:t.skewY,angle:t.angle,left:t.left,flipX:t.flipX,flipY:t.flipY,top:t.top}},
/**
       * Returns true if context has transparent pixel
       * at specified location (taking tolerance into account)
       * @param {CanvasRenderingContext2D} ctx context
       * @param {Number} x x coordinate
       * @param {Number} y y coordinate
       * @param {Number} tolerance Tolerance
       */
isTransparent:function(t,e,i,n){n>0&&(e>n?e-=n:e=0,i>n?i-=n:i=0);var r,o=!0,s=t.getImageData(e,i,2*n||1,2*n||1),a=s.data.length;for(r=3;r<a&&!1!=(o=s.data[r]<=0);r+=4);return s=null,o},
/**
       * Parse preserveAspectRatio attribute from element
       * @param {string} attribute to be parsed
       * @return {Object} an object containing align and meetOrSlice attribute
       */
parsePreserveAspectRatioAttribute:function(t){var e,i="meet",n=t.split(" ");return n&&n.length&&("meet"!==(i=n.pop())&&"slice"!==i?(e=i,i="meet"):n.length&&(e=n.pop())),{meetOrSlice:i,alignX:"none"!==e?e.slice(1,4):"none",alignY:"none"!==e?e.slice(5,8):"none"}},
/**
       * Clear char widths cache for the given font family or all the cache if no
       * fontFamily is specified.
       * Use it if you know you are loading fonts in a lazy way and you are not waiting
       * for custom fonts to load properly when adding text objects to the canvas.
       * If a text object is added when its own font is not loaded yet, you will get wrong
       * measurement and so wrong bounding boxes.
       * After the font cache is cleared, either change the textObject text content or call
       * initDimensions() to trigger a recalculation
       * @memberOf fabric.util
       * @param {String} [fontFamily] font family to clear
       */
clearFabricFontCache:function(t){(t=(t||"").toLowerCase())?C.charWidthsCache[t]&&delete C.charWidthsCache[t]:C.charWidthsCache={}},
/**
       * Given current aspect ratio, determines the max width and height that can
       * respect the total allowed area for the cache.
       * @memberOf fabric.util
       * @param {Number} ar aspect ratio
       * @param {Number} maximumArea Maximum area you want to achieve
       * @return {Object.x} Limited dimensions by X
       * @return {Object.y} Limited dimensions by Y
       */
limitDimsByArea:function(t,e){var i=Math.sqrt(e*t),n=Math.floor(e/i);return{x:Math.floor(i),y:n}},capValue:function(t,e,i){return Math.max(t,Math.min(e,i))},
/**
       * Finds the scale for the object source to fit inside the object destination,
       * keeping aspect ratio intact.
       * respect the total allowed area for the cache.
       * @memberOf fabric.util
       * @param {Object | fabric.Object} source
       * @param {Number} source.height natural unscaled height of the object
       * @param {Number} source.width natural unscaled width of the object
       * @param {Object | fabric.Object} destination
       * @param {Number} destination.height natural unscaled height of the object
       * @param {Number} destination.width natural unscaled width of the object
       * @return {Number} scale factor to apply to source to fit into destination
       */
findScaleToFit:function(t,e){return Math.min(e.width/t.width,e.height/t.height)},
/**
       * Finds the scale for the object source to cover entirely the object destination,
       * keeping aspect ratio intact.
       * respect the total allowed area for the cache.
       * @memberOf fabric.util
       * @param {Object | fabric.Object} source
       * @param {Number} source.height natural unscaled height of the object
       * @param {Number} source.width natural unscaled width of the object
       * @param {Object | fabric.Object} destination
       * @param {Number} destination.height natural unscaled height of the object
       * @param {Number} destination.width natural unscaled width of the object
       * @return {Number} scale factor to apply to source to cover destination
       */
findScaleToCover:function(t,e){return Math.max(e.width/t.width,e.height/t.height)},
/**
       * given an array of 6 number returns something like `"matrix(...numbers)"`
       * @memberOf fabric.util
       * @param {Array} transform an array with 6 numbers
       * @return {String} transform matrix for svg
       * @return {Object.y} Limited dimensions by Y
       */
matrixToSVG:function(t){return"matrix("+t.map((function(t){return C.util.toFixed(t,C.Object.NUM_FRACTION_DIGITS)})).join(" ")+")"},
/**
       * given an object and a transform, apply the inverse transform to the object,
       * this is equivalent to remove from that object that transformation, so that
       * added in a space with the removed transform, the object will be the same as before.
       * Removing from an object a transform that scale by 2 is like scaling it by 1/2.
       * Removing from an object a transfrom that rotate by 30deg is like rotating by 30deg
       * in the opposite direction.
       * This util is used to add objects inside transformed groups or nested groups.
       * @memberOf fabric.util
       * @param {fabric.Object} object the object you want to transform
       * @param {Array} transform the destination transform
       */
removeTransformFromObject:function(t,e){var i=C.util.invertTransform(e),n=C.util.multiplyTransformMatrices(i,t.calcOwnMatrix());C.util.applyTransformToObject(t,n)},
/**
       * given an object and a transform, apply the transform to the object.
       * this is equivalent to change the space where the object is drawn.
       * Adding to an object a transform that scale by 2 is like scaling it by 2.
       * This is used when removing an object from an active selection for example.
       * @memberOf fabric.util
       * @param {fabric.Object} object the object you want to transform
       * @param {Array} transform the destination transform
       */
addTransformToObject:function(t,e){C.util.applyTransformToObject(t,C.util.multiplyTransformMatrices(e,t.calcOwnMatrix()))},
/**
       * discard an object transform state and apply the one from the matrix.
       * @memberOf fabric.util
       * @param {fabric.Object} object the object you want to transform
       * @param {Array} transform the destination transform
       */
applyTransformToObject:function(t,e){var i=C.util.qrDecompose(e),n=new C.Point(i.translateX,i.translateY);t.flipX=!1,t.flipY=!1,t.set("scaleX",i.scaleX),t.set("scaleY",i.scaleY),t.skewX=i.skewX,t.skewY=i.skewY,t.angle=i.angle,t.setPositionByOrigin(n,"center","center")},
/**
       * given a width and height, return the size of the bounding box
       * that can contains the box with width/height with applied transform
       * described in options.
       * Use to calculate the boxes around objects for controls.
       * @memberOf fabric.util
       * @param {Number} width
       * @param {Number} height
       * @param {Object} options
       * @param {Number} options.scaleX
       * @param {Number} options.scaleY
       * @param {Number} options.skewX
       * @param {Number} options.skewY
       * @return {Object.x} width of containing
       * @return {Object.y} height of containing
       */
sizeAfterTransform:function(t,e,i){var n=t/2,r=e/2,o=[{x:-n,y:-r},{x:n,y:-r},{x:-n,y:r},{x:n,y:r}],s=C.util.calcDimensionsMatrix(i),a=C.util.makeBoundingBoxFromPoints(o,s);return{x:a.width,y:a.height}},
/**
       * Merges 2 clip paths into one visually equal clip path
       *
       * **IMPORTANT**:\
       * Does **NOT** clone the arguments, clone them proir if necessary.
       *
       * Creates a wrapper (group) that contains one clip path and is clipped by the other so content is kept where both overlap.
       * Use this method if both the clip paths may have nested clip paths of their own, so assigning one to the other's clip path property is not possible.
       *
       * In order to handle the `inverted` property we follow logic described in the following cases:\
       * **(1)** both clip paths are inverted - the clip paths pass the inverted prop to the wrapper and loose it themselves.\
       * **(2)** one is inverted and the other isn't - the wrapper shouldn't become inverted and the inverted clip path must clip the non inverted one to produce an identical visual effect.\
       * **(3)** both clip paths are not inverted - wrapper and clip paths remain unchanged.
       *
       * @memberOf fabric.util
       * @param {fabric.Object} c1
       * @param {fabric.Object} c2
       * @returns {fabric.Object} merged clip path
       */
mergeClipPaths:function(t,e){var i=t,n=e;i.inverted&&!n.inverted&&(i=e,n=t),C.util.applyTransformToObject(n,C.util.multiplyTransformMatrices(C.util.invertTransform(i.calcTransformMatrix()),n.calcTransformMatrix()));var r=i.inverted&&n.inverted;return r&&(i.inverted=n.inverted=!1),new C.Group([i],{clipPath:n,inverted:r})},
/**
       * @memberOf fabric.util
       * @param {Object} prevStyle first style to compare
       * @param {Object} thisStyle second style to compare
       * @param {boolean} forTextSpans whether to check overline, underline, and line-through properties
       * @return {boolean} true if the style changed
       */
hasStyleChanged:function(t,e,i){return i=i||!1,t.fill!==e.fill||t.stroke!==e.stroke||t.strokeWidth!==e.strokeWidth||t.fontSize!==e.fontSize||t.fontFamily!==e.fontFamily||t.fontWeight!==e.fontWeight||t.fontStyle!==e.fontStyle||t.textBackgroundColor!==e.textBackgroundColor||t.deltaY!==e.deltaY||i&&(t.overline!==e.overline||t.underline!==e.underline||t.linethrough!==e.linethrough)},
/**
       * Returns the array form of a text object's inline styles property with styles grouped in ranges
       * rather than per character. This format is less verbose, and is better suited for storage
       * so it is used in serialization (not during runtime).
       * @memberOf fabric.util
       * @param {object} styles per character styles for a text object
       * @param {String} text the text string that the styles are applied to
       * @return {{start: number, end: number, style: object}[]}
       */
stylesToArray:function(t,e){t=C.util.object.clone(t,!0);for(var i=e.split("\n"),n=-1,r={},o=[],s=0;s<i.length;s++)if(t[s])for(var a=0;a<i[s].length;a++){n++;var l=t[s][a];l&&Object.keys(l).length>0&&(C.util.hasStyleChanged(r,l,!0)?o.push({start:n,end:n+1,style:l}):o[o.length-1].end++),r=l||{}}else n+=i[s].length;return o},
/**
       * Returns the object form of the styles property with styles that are assigned per
       * character rather than grouped by range. This format is more verbose, and is
       * only used during runtime (not for serialization/storage)
       * @memberOf fabric.util
       * @param {Array} styles the serialized form of a text object's styles
       * @param {String} text the text string that the styles are applied to
       * @return {Object}
       */
stylesFromArray:function(t,e){if(!Array.isArray(t))return t;for(var i=e.split("\n"),n=-1,r=0,o={},s=0;s<i.length;s++)for(var a=0;a<i[s].length;a++)n++,t[r]&&t[r].start<=n&&n<t[r].end&&(o[s]=o[s]||{},o[s][a]=Object.assign({},t[r].style),n===t[r].end-1&&r++);return o}},function(){var t=Array.prototype.join,e={m:2,l:2,h:1,v:1,c:6,s:4,q:4,t:2,a:7},i={m:"l",M:"L"};function n(t,e,i,n,r,o,s,a,l,c,h){var u=C.util.cos(t),f=C.util.sin(t),d=C.util.cos(e),p=C.util.sin(e),g=i*r*d-n*o*p+s,v=n*r*d+i*o*p+a;return["C",c+l*(-i*r*f-n*o*u),h+l*(-n*r*f+i*o*u),g+l*(i*r*p+n*o*d),v+l*(n*r*p-i*o*d),g,v]}function r(t,e,i,n){var r=Math.atan2(e,t),o=Math.atan2(n,i);return o>=r?o-r:2*Math.PI-(r-o)}function o(t,e,i){for(var o=i[1],s=i[2],a=i[3],l=i[4],c=i[5],h=function(t,e,i,o,s,a,l){var c=Math.PI,h=l*c/180,u=C.util.sin(h),f=C.util.cos(h),d=0,p=0,g=-f*t*.5-u*e*.5,v=-f*e*.5+u*t*.5,m=(i=Math.abs(i))*i,y=(o=Math.abs(o))*o,_=v*v,b=g*g,x=m*y-m*_-y*b,S=0;if(x<0){var w=Math.sqrt(1-x/(m*y));i*=w,o*=w}else S=(s===a?-1:1)*Math.sqrt(x/(m*_+y*b));var T=S*i*v/o,O=-S*o*g/i,k=f*T-u*O+.5*t,E=u*T+f*O+.5*e,P=r(1,0,(g-T)/i,(v-O)/o),M=r((g-T)/i,(v-O)/o,(-g-T)/i,(-v-O)/o);0===a&&M>0?M-=2*c:1===a&&M<0&&(M+=2*c);for(var A=Math.ceil(Math.abs(M/c*2)),j=[],D=M/A,F=8/3*Math.sin(D/4)*Math.sin(D/4)/Math.sin(D/2),L=P+D,I=0;I<A;I++)j[I]=n(P,L,f,u,i,o,k,E,F,d,p),d=j[I][5],p=j[I][6],P=L,L+=D;return j}(i[6]-t,i[7]-e,o,s,l,c,a),u=0,f=h.length;u<f;u++)h[u][1]+=t,h[u][2]+=e,h[u][3]+=t,h[u][4]+=e,h[u][5]+=t,h[u][6]+=e;return h}function s(t,e,i,n){return Math.sqrt((i-t)*(i-t)+(n-e)*(n-e))}function a(t,e,i,n,r,o,s,a){return function(l){var c,h=(c=l)*c*c,u=function(t){return 3*t*t*(1-t)}(l),f=function(t){return 3*t*(1-t)*(1-t)}(l),d=function(t){return(1-t)*(1-t)*(1-t)}(l);return{x:s*h+r*u+i*f+t*d,y:a*h+o*u+n*f+e*d}}}function l(t,e,i,n,r,o,s,a){return function(l){var c=1-l,h=3*c*c*(i-t)+6*c*l*(r-i)+3*l*l*(s-r),u=3*c*c*(n-e)+6*c*l*(o-n)+3*l*l*(a-o);return Math.atan2(u,h)}}function c(t,e,i,n,r,o){return function(s){var a,l=(a=s)*a,c=function(t){return 2*t*(1-t)}(s),h=function(t){return(1-t)*(1-t)}(s);return{x:r*l+i*c+t*h,y:o*l+n*c+e*h}}}function h(t,e,i,n,r,o){return function(s){var a=1-s,l=2*a*(i-t)+2*s*(r-i),c=2*a*(n-e)+2*s*(o-n);return Math.atan2(c,l)}}function u(t,e,i){var n,r,o={x:e,y:i},a=0;for(r=1;r<=100;r+=1)n=t(r/100),a+=s(o.x,o.y,n.x,n.y),o=n;return a}function f(t,e){for(var i,n,r,o=0,a=0,l=t.iterator,c={x:t.x,y:t.y},h=.01,u=t.angleFinder;a<e&&h>1e-4;)i=l(o),r=o,(n=s(c.x,c.y,i.x,i.y))+a>e?(o-=h,h/=2):(c=i,o+=h,a+=n);return i.angle=u(r),i}function d(t){for(var e,i,n,r,o=0,f=t.length,d=0,p=0,g=0,v=0,m=[],y=0;y<f;y++){switch(n={x:d,y:p,command:(e=t[y])[0]},e[0]){case"M":n.length=0,g=d=e[1],v=p=e[2];break;case"L":n.length=s(d,p,e[1],e[2]),d=e[1],p=e[2];break;case"C":i=a(d,p,e[1],e[2],e[3],e[4],e[5],e[6]),r=l(d,p,e[1],e[2],e[3],e[4],e[5],e[6]),n.iterator=i,n.angleFinder=r,n.length=u(i,d,p),d=e[5],p=e[6];break;case"Q":i=c(d,p,e[1],e[2],e[3],e[4]),r=h(d,p,e[1],e[2],e[3],e[4]),n.iterator=i,n.angleFinder=r,n.length=u(i,d,p),d=e[3],p=e[4];break;case"Z":case"z":n.destX=g,n.destY=v,n.length=s(d,p,g,v),d=g,p=v}o+=n.length,m.push(n)}return m.push({length:o,x:d,y:p}),m}C.util.joinPath=function(t){return t.map((function(t){return t.join(" ")})).join(" ")},C.util.parsePath=function(t){var n,r,o,s,a,l=[],c=[],h=C.rePathCommand,u="[-+]?(?:\\d*\\.\\d+|\\d+\\.?)(?:[eE][-+]?\\d+)?\\s*",f="("+u+")"+C.commaWsp,d="([01])"+C.commaWsp+"?",p=new RegExp(f+"?"+f+"?"+f+d+d+f+"?("+u+")","g");if(!t||!t.match)return l;for(var g,v=0,m=(a=t.match(/[mzlhvcsqta][^mzlhvcsqta]*/gi)).length;v<m;v++){s=(n=a[v]).slice(1).trim(),c.length=0;var y=n.charAt(0);if(g=[y],"a"===y.toLowerCase())for(var _;_=p.exec(s);)for(var b=1;b<_.length;b++)c.push(_[b]);else for(;o=h.exec(s);)c.push(o[0]);b=0;for(var x=c.length;b<x;b++)r=parseFloat(c[b]),isNaN(r)||g.push(r);var S=e[y.toLowerCase()],w=i[y]||y;if(g.length-1>S)for(var T=1,O=g.length;T<O;T+=S)l.push([y].concat(g.slice(T,T+S))),y=w;else l.push(g)}return l},C.util.makePathSimpler=function(t){var e,i,n,r,s,a,l=0,c=0,h=t.length,u=0,f=0,d=[];for(i=0;i<h;++i){switch(n=!1,(e=t[i].slice(0))[0]){case"l":e[0]="L",e[1]+=l,e[2]+=c;case"L":l=e[1],c=e[2];break;case"h":e[1]+=l;case"H":e[0]="L",e[2]=c,l=e[1];break;case"v":e[1]+=c;case"V":e[0]="L",c=e[1],e[1]=l,e[2]=c;break;case"m":e[0]="M",e[1]+=l,e[2]+=c;case"M":l=e[1],c=e[2],u=e[1],f=e[2];break;case"c":e[0]="C",e[1]+=l,e[2]+=c,e[3]+=l,e[4]+=c,e[5]+=l,e[6]+=c;case"C":s=e[3],a=e[4],l=e[5],c=e[6];break;case"s":e[0]="S",e[1]+=l,e[2]+=c,e[3]+=l,e[4]+=c;case"S":"C"===r?(s=2*l-s,a=2*c-a):(s=l,a=c),l=e[3],c=e[4],e[0]="C",e[5]=e[3],e[6]=e[4],e[3]=e[1],e[4]=e[2],e[1]=s,e[2]=a,s=e[3],a=e[4];break;case"q":e[0]="Q",e[1]+=l,e[2]+=c,e[3]+=l,e[4]+=c;case"Q":s=e[1],a=e[2],l=e[3],c=e[4];break;case"t":e[0]="T",e[1]+=l,e[2]+=c;case"T":"Q"===r?(s=2*l-s,a=2*c-a):(s=l,a=c),e[0]="Q",l=e[1],c=e[2],e[1]=s,e[2]=a,e[3]=l,e[4]=c;break;case"a":e[0]="A",e[6]+=l,e[7]+=c;case"A":n=!0,d=d.concat(o(l,c,e)),l=e[6],c=e[7];break;case"z":case"Z":l=u,c=f}n||d.push(e),r=e[0]}return d},C.util.getSmoothPathFromPoints=function(t,e){var i,n=[],r=new C.Point(t[0].x,t[0].y),o=new C.Point(t[1].x,t[1].y),s=t.length,a=1,l=0,c=s>2;for(e=e||0,c&&(a=t[2].x<o.x?-1:t[2].x===o.x?0:1,l=t[2].y<o.y?-1:t[2].y===o.y?0:1),n.push(["M",r.x-a*e,r.y-l*e]),i=1;i<s;i++){if(!r.eq(o)){var h=r.midPointFrom(o);n.push(["Q",r.x,r.y,h.x,h.y])}r=t[i],i+1<t.length&&(o=t[i+1])}return c&&(a=r.x>t[i-2].x?1:r.x===t[i-2].x?0:-1,l=r.y>t[i-2].y?1:r.y===t[i-2].y?0:-1),n.push(["L",r.x+a*e,r.y+l*e]),n},C.util.getPathSegmentsInfo=d,C.util.getBoundsOfCurve=function(e,i,n,r,o,s,a,l){var c;if(C.cachesBoundsOfCurve&&(c=t.call(arguments),C.boundsOfCurveCache[c]))return C.boundsOfCurveCache[c];var h,u,f,d,p,g,v,m,y=Math.sqrt,_=Math.min,b=Math.max,x=Math.abs,S=[],w=[[],[]];u=6*e-12*n+6*o,h=-3*e+9*n-9*o+3*a,f=3*n-3*e;for(var T=0;T<2;++T)if(T>0&&(u=6*i-12*r+6*s,h=-3*i+9*r-9*s+3*l,f=3*r-3*i),x(h)<1e-12){if(x(u)<1e-12)continue;0<(d=-f/u)&&d<1&&S.push(d)}else(v=u*u-4*f*h)<0||(0<(p=(-u+(m=y(v)))/(2*h))&&p<1&&S.push(p),0<(g=(-u-m)/(2*h))&&g<1&&S.push(g));for(var O,k,E,P=S.length,M=P;P--;)O=(E=1-(d=S[P]))*E*E*e+3*E*E*d*n+3*E*d*d*o+d*d*d*a,w[0][P]=O,k=E*E*E*i+3*E*E*d*r+3*E*d*d*s+d*d*d*l,w[1][P]=k;w[0][M]=e,w[1][M]=i,w[0][M+1]=a,w[1][M+1]=l;var A=[{x:_.apply(null,w[0]),y:_.apply(null,w[1])},{x:b.apply(null,w[0]),y:b.apply(null,w[1])}];return C.cachesBoundsOfCurve&&(C.boundsOfCurveCache[c]=A),A},C.util.getPointOnPath=function(t,e,i){i||(i=d(t));for(var n=0;e-i[n].length>0&&n<i.length-2;)e-=i[n].length,n++;var r,o=i[n],s=e/o.length,a=o.command,l=t[n];switch(a){case"M":return{x:o.x,y:o.y,angle:0};case"Z":case"z":return(r=new C.Point(o.x,o.y).lerp(new C.Point(o.destX,o.destY),s)).angle=Math.atan2(o.destY-o.y,o.destX-o.x),r;case"L":return(r=new C.Point(o.x,o.y).lerp(new C.Point(l[1],l[2]),s)).angle=Math.atan2(l[2]-o.y,l[1]-o.x),r;case"C":case"Q":return f(o,e)}},C.util.transformPath=function(t,e,i){return i&&(e=C.util.multiplyTransformMatrices(e,[1,0,0,1,-i.x,-i.y])),t.map((function(t){for(var i=t.slice(0),n={},r=1;r<t.length-1;r+=2)n.x=t[r],n.y=t[r+1],n=C.util.transformPoint(n,e),i[r]=n.x,i[r+1]=n.y;return i}))}}(),function(){var t=Array.prototype.slice;function e(t,e,i){if(t&&0!==t.length){var n=t.length-1,r=e?t[n][e]:t[n];if(e)for(;n--;)i(t[n][e],r)&&(r=t[n][e]);else for(;n--;)i(t[n],r)&&(r=t[n]);return r}}C.util.array={fill:function(t,e){for(var i=t.length;i--;)t[i]=e;return t},invoke:function(e,i){for(var n=t.call(arguments,2),r=[],o=0,s=e.length;o<s;o++)r[o]=n.length?e[o][i].apply(e[o],n):e[o][i].call(e[o]);return r},min:function(t,i){return e(t,i,(function(t,e){return t<e}))},max:function(t,i){return e(t,i,(function(t,e){return t>=e}))}}}(),function(){function t(e,i,n){if(n)if(!C.isLikelyNode&&i instanceof Element)e=i;else if(i instanceof Array){e=[];for(var r=0,o=i.length;r<o;r++)e[r]=t({},i[r],n)}else if(i&&"object"==typeof i)for(var s in i)"canvas"===s||"group"===s?e[s]=null:i.hasOwnProperty(s)&&(e[s]=t({},i[s],n));else e=i;else for(var s in i)e[s]=i[s];return e}C.util.object={extend:t,clone:function(e,i){return t({},e,i)}},C.util.object.extend(C.util,C.Observable)}(),function(){function t(t,e){var i=t.charCodeAt(e);if(isNaN(i))return"";if(i<55296||i>57343)return t.charAt(e);if(55296<=i&&i<=56319){if(t.length<=e+1)throw"High surrogate without following low surrogate";var n=t.charCodeAt(e+1);if(56320>n||n>57343)throw"High surrogate without following low surrogate";return t.charAt(e)+t.charAt(e+1)}if(0===e)throw"Low surrogate without preceding high surrogate";var r=t.charCodeAt(e-1);if(55296>r||r>56319)throw"Low surrogate without preceding high surrogate";return!1}C.util.string={camelize:function(t){return t.replace(/-+(.)?/g,(function(t,e){return e?e.toUpperCase():""}))},capitalize:function(t,e){return t.charAt(0).toUpperCase()+(e?t.slice(1):t.slice(1).toLowerCase())},escapeXml:function(t){return t.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},graphemeSplit:function(e){var i,n=0,r=[];for(n=0;n<e.length;n++)!1!==(i=t(e,n))&&r.push(i);return r}}}(),function(){var t=Array.prototype.slice,e=function(){},i=function(){for(var t in{toString:1})if("toString"===t)return!1;return!0}(),n=function(t,e,n){for(var r in e)r in t.prototype&&"function"==typeof t.prototype[r]&&(e[r]+"").indexOf("callSuper")>-1?t.prototype[r]=function(t){return function(){var i=this.constructor.superclass;this.constructor.superclass=n;var r=e[t].apply(this,arguments);if(this.constructor.superclass=i,"initialize"!==t)return r}}(r):t.prototype[r]=e[r],i&&(e.toString!==Object.prototype.toString&&(t.prototype.toString=e.toString),e.valueOf!==Object.prototype.valueOf&&(t.prototype.valueOf=e.valueOf))};function r(){}function o(e){for(var i=null,n=this;n.constructor.superclass;){var r=n.constructor.superclass.prototype[e];if(n[e]!==r){i=r;break}n=n.constructor.superclass.prototype}if(i)return arguments.length>1?i.apply(this,t.call(arguments,1)):i.call(this)}C.util.createClass=function(){var i=null,s=t.call(arguments,0);function a(){this.initialize.apply(this,arguments)}"function"==typeof s[0]&&(i=s.shift()),a.superclass=i,a.subclasses=[],i&&(r.prototype=i.prototype,a.prototype=new r,i.subclasses.push(a));for(var l=0,c=s.length;l<c;l++)n(a,s[l],i);return a.prototype.initialize||(a.prototype.initialize=e),a.prototype.constructor=a,a.prototype.callSuper=o,a}}(),a=!!C.document.createElement("div").attachEvent,l=["touchstart","touchmove","touchend"],C.util.addListener=function(t,e,i,n){t&&t.addEventListener(e,i,!a&&n)},C.util.removeListener=function(t,e,i,n){t&&t.removeEventListener(e,i,!a&&n)},C.util.getPointer=function(t){var e=t.target,i=C.util.getScrollLeftTop(e),n=function(t){var e=t.changedTouches;return e&&e[0]?e[0]:t}(t);return{x:n.clientX+i.left,y:n.clientY+i.top}},C.util.isTouchEvent=function(t){return l.indexOf(t.type)>-1||"touch"===t.pointerType},c=C.document.createElement("div"),h="string"==typeof c.style.opacity,u="string"==typeof c.style.filter,f=/alpha\s*\(\s*opacity\s*=\s*([^\)]+)\)/,d=function(t){return t},h?d=function(t,e){return t.style.opacity=e,t}:u&&(d=function(t,e){var i=t.style;return t.currentStyle&&!t.currentStyle.hasLayout&&(i.zoom=1),f.test(i.filter)?(e=e>=.9999?"":"alpha(opacity="+100*e+")",i.filter=i.filter.replace(f,e)):i.filter+=" alpha(opacity="+100*e+")",t}),C.util.setStyle=function(t,e){var i=t.style;if(!i)return t;if("string"==typeof e)return t.style.cssText+=";"+e,e.indexOf("opacity")>-1?d(t,e.match(/opacity:\s*(\d?\.?\d*)/)[1]):t;for(var n in e)if("opacity"===n)d(t,e[n]);else{var r="float"===n||"cssFloat"===n?void 0===i.styleFloat?"cssFloat":"styleFloat":n;i.setProperty(r,e[n])}return t},function(){var t=Array.prototype.slice;var e,i,n,r,o=function(e){return t.call(e,0)};try{e=o(C.document.childNodes)instanceof Array}catch(l){}function s(t,e){var i=C.document.createElement(t);for(var n in e)"class"===n?i.className=e[n]:"for"===n?i.htmlFor=e[n]:i.setAttribute(n,e[n]);return i}function a(t){for(var e=0,i=0,n=C.document.documentElement,r=C.document.body||{scrollLeft:0,scrollTop:0};t&&(t.parentNode||t.host)&&((t=t.parentNode||t.host)===C.document?(e=r.scrollLeft||n.scrollLeft||0,i=r.scrollTop||n.scrollTop||0):(e+=t.scrollLeft||0,i+=t.scrollTop||0),1!==t.nodeType||"fixed"!==t.style.position););return{left:e,top:i}}e||(o=function(t){for(var e=new Array(t.length),i=t.length;i--;)e[i]=t[i];return e}),i=C.document.defaultView&&C.document.defaultView.getComputedStyle?function(t,e){var i=C.document.defaultView.getComputedStyle(t,null);return i?i[e]:void 0}:function(t,e){var i=t.style[e];return!i&&t.currentStyle&&(i=t.currentStyle[e]),i},n=C.document.documentElement.style,r="userSelect"in n?"userSelect":"MozUserSelect"in n?"MozUserSelect":"WebkitUserSelect"in n?"WebkitUserSelect":"KhtmlUserSelect"in n?"KhtmlUserSelect":"",C.util.makeElementUnselectable=function(t){return void 0!==t.onselectstart&&(t.onselectstart=C.util.falseFunction),r?t.style[r]="none":"string"==typeof t.unselectable&&(t.unselectable="on"),t},C.util.makeElementSelectable=function(t){return void 0!==t.onselectstart&&(t.onselectstart=null),r?t.style[r]="":"string"==typeof t.unselectable&&(t.unselectable=""),t},C.util.setImageSmoothing=function(t,e){t.imageSmoothingEnabled=t.imageSmoothingEnabled||t.webkitImageSmoothingEnabled||t.mozImageSmoothingEnabled||t.msImageSmoothingEnabled||t.oImageSmoothingEnabled,t.imageSmoothingEnabled=e},C.util.getById=function(t){return"string"==typeof t?C.document.getElementById(t):t},C.util.toArray=o,C.util.addClass=function(t,e){t&&-1===(" "+t.className+" ").indexOf(" "+e+" ")&&(t.className+=(t.className?" ":"")+e)},C.util.makeElement=s,C.util.wrapElement=function(t,e,i){return"string"==typeof e&&(e=s(e,i)),t.parentNode&&t.parentNode.replaceChild(e,t),e.appendChild(t),e},C.util.getScrollLeftTop=a,C.util.getElementOffset=function(t){var e,n,r=t&&t.ownerDocument,o={left:0,top:0},s={left:0,top:0},l={borderLeftWidth:"left",borderTopWidth:"top",paddingLeft:"left",paddingTop:"top"};if(!r)return s;for(var c in l)s[l[c]]+=parseInt(i(t,c),10)||0;return e=r.documentElement,void 0!==t.getBoundingClientRect&&(o=t.getBoundingClientRect()),n=a(t),{left:o.left+n.left-(e.clientLeft||0)+s.left,top:o.top+n.top-(e.clientTop||0)+s.top}},C.util.getNodeCanvas=function(t){var e=C.jsdomImplForWrapper(t);return e._canvas||e._image},C.util.cleanUpJsdomNode=function(t){if(C.isLikelyNode){var e=C.jsdomImplForWrapper(t);e&&(e._image=null,e._canvas=null,e._currentSrc=null,e._attributes=null,e._classList=null)}}}(),function(){function t(){}C.util.request=function(e,i){i||(i={});var n=i.method?i.method.toUpperCase():"GET",r=i.onComplete||function(){},o=new C.window.XMLHttpRequest,s=i.body||i.parameters;return o.onreadystatechange=function(){4===o.readyState&&(r(o),o.onreadystatechange=t)},"GET"===n&&(s=null,"string"==typeof i.parameters&&(e=function(t,e){return t+(/\?/.test(t)?"&":"?")+e}(e,i.parameters))),o.open(n,e,!0),"POST"!==n&&"PUT"!==n||o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.send(s),o}}(),C.log=console.log,C.warn=console.warn,function(){var t=C.util.object.extend,e=C.util.object.clone,i=[];function n(){return!1}function r(t,e,i,n){return-i*Math.cos(t/n*(Math.PI/2))+i+e}C.util.object.extend(i,{
/**
       * cancel all running animations at the next requestAnimFrame
       * @returns {AnimationContext[]}
       */
cancelAll:function(){var t=this.splice(0);return t.forEach((function(t){t.cancel()})),t},
/**
       * cancel all running animations attached to canvas at the next requestAnimFrame
       * @param {fabric.Canvas} canvas
       * @returns {AnimationContext[]}
       */
cancelByCanvas:function(t){if(!t)return[];var e=this.filter((function(e){return"object"==typeof e.target&&e.target.canvas===t}));return e.forEach((function(t){t.cancel()})),e},
/**
       * cancel all running animations for target at the next requestAnimFrame
       * @param {*} target
       * @returns {AnimationContext[]}
       */
cancelByTarget:function(t){var e=this.findAnimationsByTarget(t);return e.forEach((function(t){t.cancel()})),e},
/**
       *
       * @param {CancelFunction} cancelFunc the function returned by animate
       * @returns {number}
       */
findAnimationIndex:function(t){return this.indexOf(this.findAnimation(t))},
/**
       *
       * @param {CancelFunction} cancelFunc the function returned by animate
       * @returns {AnimationContext | undefined} animation's options object
       */
findAnimation:function(t){return this.find((function(e){return e.cancel===t}))},
/**
       *
       * @param {*} target the object that is assigned to the target property of the animation context
       * @returns {AnimationContext[]} array of animation options object associated with target
       */
findAnimationsByTarget:function(t){return t?this.filter((function(e){return e.target===t})):[]}});var o=C.window.requestAnimationFrame||C.window.webkitRequestAnimationFrame||C.window.mozRequestAnimationFrame||C.window.oRequestAnimationFrame||C.window.msRequestAnimationFrame||function(t){return C.window.setTimeout(t,1e3/60)},s=C.window.cancelAnimationFrame||C.window.clearTimeout;function a(){return o.apply(C.window,arguments)}C.util.animate=function(i){i||(i={});var o,s=!1,l=function(){var t=C.runningAnimations.indexOf(o);return t>-1&&C.runningAnimations.splice(t,1)[0]};return o=t(e(i),{cancel:function(){return s=!0,l()},currentValue:"startValue"in i?i.startValue:0,completionRate:0,durationRate:0}),C.runningAnimations.push(o),a((function(t){var e,c=t||+new Date,h=i.duration||500,u=c+h,f=i.onChange||n,d=i.abort||n,p=i.onComplete||n,g=i.easing||r,v="startValue"in i&&i.startValue.length>0,m="startValue"in i?i.startValue:0,y="endValue"in i?i.endValue:100,_=i.byValue||(v?m.map((function(t,e){return y[e]-m[e]})):y-m);i.onStart&&i.onStart(),function t(i){var n=(e=i||+new Date)>u?h:e-c,r=n/h,b=v?m.map((function(t,e){return g(n,m[e],_[e],h)})):g(n,m,_,h),x=v?Math.abs((b[0]-m[0])/_[0]):Math.abs((b-m)/_);if(o.currentValue=v?b.slice():b,o.completionRate=x,o.durationRate=r,!s){if(!d(b,x,r))return e>u?(o.currentValue=v?y.slice():y,o.completionRate=1,o.durationRate=1,f(v?y.slice():y,1,1),p(y,1,1),void l()):(f(b,x,r),void a(t));l()}}(c)})),o.cancel},C.util.requestAnimFrame=a,C.util.cancelAnimFrame=function(){return s.apply(C.window,arguments)},C.runningAnimations=i}(),function(){function t(t,e,i){var n="rgba("+parseInt(t[0]+i*(e[0]-t[0]),10)+","+parseInt(t[1]+i*(e[1]-t[1]),10)+","+parseInt(t[2]+i*(e[2]-t[2]),10);return n+=","+(t&&e?parseFloat(t[3]+i*(e[3]-t[3])):1),n+=")"}C.util.animateColor=function(e,i,n,r){var o=new C.Color(e).getSource(),s=new C.Color(i).getSource(),a=r.onComplete,l=r.onChange;return r=r||{},C.util.animate(C.util.object.extend(r,{duration:n||500,startValue:o,endValue:s,byValue:s,easing:function(e,i,n,o){return t(i,n,r.colorEasing?r.colorEasing(e,o):1-Math.cos(e/o*(Math.PI/2)))},
// has to take in account for color restoring;
onComplete:function(e,i,n){if(a)return a(t(s,s,0),i,n)},onChange:function(e,i,n){if(l){if(Array.isArray(e))return l(t(e,e,0),i,n);l(e,i,n)}}}))}}(),function(){function t(t,e,i,n){return t<Math.abs(e)?(t=e,n=i/4):n=0===e&&0===t?i/(2*Math.PI)*Math.asin(1):i/(2*Math.PI)*Math.asin(e/t),{a:t,c:e,p:i,s:n}}function e(t,e,i){return t.a*Math.pow(2,10*(e-=1))*Math.sin((e*i-t.s)*(2*Math.PI)/t.p)}function i(t,e,i,r){return i-n(r-t,0,i,r)+e}function n(t,e,i,n){return(t/=n)<1/2.75?i*(7.5625*t*t)+e:t<2/2.75?i*(7.5625*(t-=1.5/2.75)*t+.75)+e:t<2.5/2.75?i*(7.5625*(t-=2.25/2.75)*t+.9375)+e:i*(7.5625*(t-=2.625/2.75)*t+.984375)+e}C.util.ease={
/**
       * Quadratic easing in
       * @memberOf fabric.util.ease
       */
easeInQuad:function(t,e,i,n){return i*(t/=n)*t+e},
/**
       * Quadratic easing out
       * @memberOf fabric.util.ease
       */
easeOutQuad:function(t,e,i,n){return-i*(t/=n)*(t-2)+e},
/**
       * Quadratic easing in and out
       * @memberOf fabric.util.ease
       */
easeInOutQuad:function(t,e,i,n){return(t/=n/2)<1?i/2*t*t+e:-i/2*(--t*(t-2)-1)+e},
/**
       * Cubic easing in
       * @memberOf fabric.util.ease
       */
easeInCubic:function(t,e,i,n){return i*(t/=n)*t*t+e},easeOutCubic:function(t,e,i,n){return i*((t=t/n-1)*t*t+1)+e},easeInOutCubic:function(t,e,i,n){return(t/=n/2)<1?i/2*t*t*t+e:i/2*((t-=2)*t*t+2)+e},easeInQuart:function(t,e,i,n){return i*(t/=n)*t*t*t+e},easeOutQuart:function(t,e,i,n){return-i*((t=t/n-1)*t*t*t-1)+e},easeInOutQuart:function(t,e,i,n){return(t/=n/2)<1?i/2*t*t*t*t+e:-i/2*((t-=2)*t*t*t-2)+e},easeInQuint:function(t,e,i,n){return i*(t/=n)*t*t*t*t+e},easeOutQuint:function(t,e,i,n){return i*((t=t/n-1)*t*t*t*t+1)+e},easeInOutQuint:function(t,e,i,n){return(t/=n/2)<1?i/2*t*t*t*t*t+e:i/2*((t-=2)*t*t*t*t+2)+e},easeInSine:function(t,e,i,n){return-i*Math.cos(t/n*(Math.PI/2))+i+e},easeOutSine:function(t,e,i,n){return i*Math.sin(t/n*(Math.PI/2))+e},easeInOutSine:function(t,e,i,n){return-i/2*(Math.cos(Math.PI*t/n)-1)+e},easeInExpo:function(t,e,i,n){return 0===t?e:i*Math.pow(2,10*(t/n-1))+e},easeOutExpo:function(t,e,i,n){return t===n?e+i:i*(1-Math.pow(2,-10*t/n))+e},easeInOutExpo:function(t,e,i,n){return 0===t?e:t===n?e+i:(t/=n/2)<1?i/2*Math.pow(2,10*(t-1))+e:i/2*(2-Math.pow(2,-10*--t))+e},easeInCirc:function(t,e,i,n){return-i*(Math.sqrt(1-(t/=n)*t)-1)+e},easeOutCirc:function(t,e,i,n){return i*Math.sqrt(1-(t=t/n-1)*t)+e},easeInOutCirc:function(t,e,i,n){return(t/=n/2)<1?-i/2*(Math.sqrt(1-t*t)-1)+e:i/2*(Math.sqrt(1-(t-=2)*t)+1)+e},easeInElastic:function(i,n,r,o){var s=0;return 0===i?n:1===(i/=o)?n+r:(s||(s=.3*o),-e(t(r,r,s,1.70158),i,o)+n)},easeOutElastic:function(e,i,n,r){var o=0;if(0===e)return i;if(1===(e/=r))return i+n;o||(o=.3*r);var s=t(n,n,o,1.70158);return s.a*Math.pow(2,-10*e)*Math.sin((e*r-s.s)*(2*Math.PI)/s.p)+s.c+i},easeInOutElastic:function(i,n,r,o){var s=0;if(0===i)return n;if(2===(i/=o/2))return n+r;s||(s=o*(.3*1.5));var a=t(r,r,s,1.70158);return i<1?-.5*e(a,i,o)+n:a.a*Math.pow(2,-10*(i-=1))*Math.sin((i*o-a.s)*(2*Math.PI)/a.p)*.5+a.c+n},easeInBack:function(t,e,i,n,r){return void 0===r&&(r=1.70158),i*(t/=n)*t*((r+1)*t-r)+e},easeOutBack:function(t,e,i,n,r){return void 0===r&&(r=1.70158),i*((t=t/n-1)*t*((r+1)*t+r)+1)+e},easeInOutBack:function(t,e,i,n,r){return void 0===r&&(r=1.70158),(t/=n/2)<1?i/2*(t*t*((1+(r*=1.525))*t-r))+e:i/2*((t-=2)*t*((1+(r*=1.525))*t+r)+2)+e},easeInBounce:i,easeOutBounce:n,easeInOutBounce:function(t,e,r,o){return t<o/2?.5*i(2*t,0,r,o)+e:.5*n(2*t-o,0,r,o)+.5*r+e}}}(),function(t){var e=t.fabric||(t.fabric={}),i=e.util.object.extend,n=e.util.object.clone,r=e.util.toFixed,o=e.util.parseUnit,s=e.util.multiplyTransformMatrices,a={cx:"left",x:"left",r:"radius",cy:"top",y:"top",display:"visible",visibility:"visible",transform:"transformMatrix","fill-opacity":"fillOpacity","fill-rule":"fillRule","font-family":"fontFamily","font-size":"fontSize","font-style":"fontStyle","font-weight":"fontWeight","letter-spacing":"charSpacing","paint-order":"paintFirst","stroke-dasharray":"strokeDashArray","stroke-dashoffset":"strokeDashOffset","stroke-linecap":"strokeLineCap","stroke-linejoin":"strokeLineJoin","stroke-miterlimit":"strokeMiterLimit","stroke-opacity":"strokeOpacity","stroke-width":"strokeWidth","text-decoration":"textDecoration","text-anchor":"textAnchor",opacity:"opacity","clip-path":"clipPath","clip-rule":"clipRule","vector-effect":"strokeUniform","image-rendering":"imageSmoothing"},l={stroke:"strokeOpacity",fill:"fillOpacity"},c="font-size",h="clip-path";function u(t){return t in a?a[t]:t}function f(t,i,n,r){var a,l=Array.isArray(i);if("fill"!==t&&"stroke"!==t||"none"!==i){if("strokeUniform"===t)return"non-scaling-stroke"===i;if("strokeDashArray"===t)i="none"===i?null:i.replace(/,/g," ").split(/\s+/).map(parseFloat);else if("transformMatrix"===t)i=n&&n.transformMatrix?s(n.transformMatrix,e.parseTransformAttribute(i)):e.parseTransformAttribute(i);else if("visible"===t)i="none"!==i&&"hidden"!==i,n&&!1===n.visible&&(i=!1);else if("opacity"===t)i=parseFloat(i),n&&void 0!==n.opacity&&(i*=n.opacity);else if("textAnchor"===t)i="start"===i?"left":"end"===i?"right":"center";else if("charSpacing"===t)a=o(i,r)/r*1e3;else if("paintFirst"===t){var c=i.indexOf("fill"),h=i.indexOf("stroke");i="fill";(c>-1&&h>-1&&h<c||-1===c&&h>-1)&&(i="stroke")}else{if("href"===t||"xlink:href"===t||"font"===t)return i;if("imageSmoothing"===t)return"optimizeQuality"===i;a=l?i.map(o):o(i,r)}}else i="";return!l&&isNaN(a)?i:a}function d(t){return new RegExp("^("+t.join("|")+")\\b","i")}function p(t,e){var i,n,r,o,s=[];for(r=0,o=e.length;r<o;r++)i=e[r],n=t.getElementsByTagName(i),s=s.concat(Array.prototype.slice.call(n));return s}function g(t,e){var i,n=!0;return(i=v(t,e.pop()))&&e.length&&(n=function(t,e){var i,n=!0;for(;t.parentNode&&1===t.parentNode.nodeType&&e.length;)n&&(i=e.pop()),n=v(t=t.parentNode,i);return 0===e.length}(t,e)),i&&n&&0===e.length}function v(t,e){var i,n,r=t.nodeName,o=t.getAttribute("class"),s=t.getAttribute("id");if(i=new RegExp("^"+r,"i"),e=e.replace(i,""),s&&e.length&&(i=new RegExp("#"+s+"(?![a-zA-Z\\-]+)","i"),e=e.replace(i,"")),o&&e.length)for(n=(o=o.split(" ")).length;n--;)i=new RegExp("\\."+o[n]+"(?![a-zA-Z\\-]+)","i"),e=e.replace(i,"");return 0===e.length}function m(t,e){var i;if(t.getElementById&&(i=t.getElementById(e)),i)return i;var n,r,o,s=t.getElementsByTagName("*");for(r=0,o=s.length;r<o;r++)if(e===(n=s[r]).getAttribute("id"))return n}e.svgValidTagNamesRegEx=d(["path","circle","polygon","polyline","ellipse","rect","line","image","text"]),e.svgViewBoxElementsRegEx=d(["symbol","image","marker","pattern","view","svg"]),e.svgInvalidAncestorsRegEx=d(["pattern","defs","symbol","metadata","clipPath","mask","desc"]),e.svgValidParentsRegEx=d(["symbol","g","a","svg","clipPath","defs"]),e.cssRules={},e.gradientDefs={},e.clipPaths={},e.parseTransformAttribute=function(){function t(t,i,n){t[n]=Math.tan(e.util.degreesToRadians(i[0]))}var i=e.iMatrix,n=e.reNum,r=e.commaWsp,o="(?:"+("(?:(matrix)\\s*\\(\\s*("+n+")"+r+"("+n+")"+r+"("+n+")"+r+"("+n+")"+r+"("+n+")"+r+"("+n+")\\s*\\))")+"|"+("(?:(translate)\\s*\\(\\s*("+n+")(?:"+r+"("+n+"))?\\s*\\))")+"|"+("(?:(scale)\\s*\\(\\s*("+n+")(?:"+r+"("+n+"))?\\s*\\))")+"|"+("(?:(rotate)\\s*\\(\\s*("+n+")(?:"+r+"("+n+")"+r+"("+n+"))?\\s*\\))")+"|"+("(?:(skewX)\\s*\\(\\s*("+n+")\\s*\\))")+"|"+("(?:(skewY)\\s*\\(\\s*("+n+")\\s*\\))")+")",s=new RegExp("^\\s*(?:"+("(?:"+o+"(?:"+r+"*"+o+")*)")+"?)\\s*$"),a=new RegExp(o,"g");return function(n){var r=i.concat(),l=[];if(!n||n&&!s.test(n))return r;n.replace(a,(function(n){var s=new RegExp(o).exec(n).filter((function(t){return!!t})),a=s[1],c=s.slice(2).map(parseFloat);switch(a){case"translate":!function(t,e){t[4]=e[0],2===e.length&&(t[5]=e[1])}(r,c);break;case"rotate":c[0]=e.util.degreesToRadians(c[0]),function(t,i){var n=e.util.cos(i[0]),r=e.util.sin(i[0]),o=0,s=0;3===i.length&&(o=i[1],s=i[2]),t[0]=n,t[1]=r,t[2]=-r,t[3]=n,t[4]=o-(n*o-r*s),t[5]=s-(r*o+n*s)}(r,c);break;case"scale":!function(t,e){var i=e[0],n=2===e.length?e[1]:e[0];t[0]=i,t[3]=n}(r,c);break;case"skewX":t(r,c,2);break;case"skewY":t(r,c,1);break;case"matrix":r=c}l.push(r.concat()),r=i.concat()}));for(var c=l[0];l.length>1;)l.shift(),c=e.util.multiplyTransformMatrices(c,l[0]);return c}}();var y=new RegExp("^\\s*("+e.reNum+"+)\\s*,?\\s*("+e.reNum+"+)\\s*,?\\s*("+e.reNum+"+)\\s*,?\\s*("+e.reNum+"+)\\s*$");function _(t){if(!e.svgViewBoxElementsRegEx.test(t.nodeName))return{};var i,n,r,s,a,l,c=t.getAttribute("viewBox"),h=1,u=1,f=t.getAttribute("width"),d=t.getAttribute("height"),p=t.getAttribute("x")||0,g=t.getAttribute("y")||0,v=t.getAttribute("preserveAspectRatio")||"",m=!c||!(c=c.match(y)),_=!f||!d||"100%"===f||"100%"===d,b=m&&_,x={},C="",S=0,w=0;if(x.width=0,x.height=0,x.toBeParsed=b,m&&(p||g)&&t.parentNode&&"#document"!==t.parentNode.nodeName&&(C=" translate("+o(p)+" "+o(g)+") ",a=(t.getAttribute("transform")||"")+C,t.setAttribute("transform",a),t.removeAttribute("x"),t.removeAttribute("y")),b)return x;if(m)return x.width=o(f),x.height=o(d),x;if(i=-parseFloat(c[1]),n=-parseFloat(c[2]),r=parseFloat(c[3]),s=parseFloat(c[4]),x.minX=i,x.minY=n,x.viewBoxWidth=r,x.viewBoxHeight=s,_?(x.width=r,x.height=s):(x.width=o(f),x.height=o(d),h=x.width/r,u=x.height/s),"none"!==(v=e.util.parsePreserveAspectRatioAttribute(v)).alignX&&("meet"===v.meetOrSlice&&(u=h=h>u?u:h),"slice"===v.meetOrSlice&&(u=h=h>u?h:u),S=x.width-r*h,w=x.height-s*h,"Mid"===v.alignX&&(S/=2),"Mid"===v.alignY&&(w/=2),"Min"===v.alignX&&(S=0),"Min"===v.alignY&&(w=0)),1===h&&1===u&&0===i&&0===n&&0===p&&0===g)return x;if((p||g)&&"#document"!==t.parentNode.nodeName&&(C=" translate("+o(p)+" "+o(g)+") "),a=C+" matrix("+h+" 0 0 "+u+" "+(i*h+S)+" "+(n*u+w)+") ","svg"===t.nodeName){for(l=t.ownerDocument.createElementNS(e.svgNS,"g");t.firstChild;)l.appendChild(t.firstChild);t.appendChild(l)}else(l=t).removeAttribute("x"),l.removeAttribute("y"),a=l.getAttribute("transform")+a;return l.setAttribute("transform",a),x}function b(t,e){var i="xlink:href",n=m(t,e.getAttribute(i).slice(1));if(n&&n.getAttribute(i)&&b(t,n),["gradientTransform","x1","x2","y1","y2","gradientUnits","cx","cy","r","fx","fy"].forEach((function(t){n&&!e.hasAttribute(t)&&n.hasAttribute(t)&&e.setAttribute(t,n.getAttribute(t))})),!e.children.length)for(var r=n.cloneNode(!0);r.firstChild;)e.appendChild(r.firstChild);e.removeAttribute(i)}e.parseSVGDocument=function(t,i,r,o){if(t){!function(t){for(var i=p(t,["use","svg:use"]),n=0;i.length&&n<i.length;){var r=i[n],o=r.getAttribute("xlink:href")||r.getAttribute("href");if(null===o)return;var s,a,l,c,h=o.slice(1),u=r.getAttribute("x")||0,f=r.getAttribute("y")||0,d=m(t,h).cloneNode(!0),g=(d.getAttribute("transform")||"")+" translate("+u+", "+f+")",v=i.length,y=e.svgNS;if(_(d),/^svg$/i.test(d.nodeName)){var b=d.ownerDocument.createElementNS(y,"g");for(a=0,c=(l=d.attributes).length;a<c;a++)s=l.item(a),b.setAttributeNS(y,s.nodeName,s.nodeValue);for(;d.firstChild;)b.appendChild(d.firstChild);d=b}for(a=0,c=(l=r.attributes).length;a<c;a++)"x"!==(s=l.item(a)).nodeName&&"y"!==s.nodeName&&"xlink:href"!==s.nodeName&&"href"!==s.nodeName&&("transform"===s.nodeName?g=s.nodeValue+" "+g:d.setAttribute(s.nodeName,s.nodeValue));d.setAttribute("transform",g),d.setAttribute("instantiated_by_use","1"),d.removeAttribute("id"),r.parentNode.replaceChild(d,r),i.length===v&&n++}}(t);var s,a,l=e.Object.__uid++,c=_(t),h=e.util.toArray(t.getElementsByTagName("*"));if(c.crossOrigin=o&&o.crossOrigin,c.svgUid=l,0===h.length&&e.isLikelyNode){var u=[];for(s=0,a=(h=t.selectNodes('//*[name(.)!="svg"]')).length;s<a;s++)u[s]=h[s];h=u}var f=h.filter((function(t){return _(t),e.svgValidTagNamesRegEx.test(t.nodeName.replace("svg:",""))&&!function(t,e){for(;t&&(t=t.parentNode);)if(t.nodeName&&e.test(t.nodeName.replace("svg:",""))&&!t.getAttribute("instantiated_by_use"))return!0;return!1}(t,e.svgInvalidAncestorsRegEx)}));if(!f||f&&!f.length)i&&i([],{});else{var d={};h.filter((function(t){return"clipPath"===t.nodeName.replace("svg:","")})).forEach((function(t){var i=t.getAttribute("id");d[i]=e.util.toArray(t.getElementsByTagName("*")).filter((function(t){return e.svgValidTagNamesRegEx.test(t.nodeName.replace("svg:",""))}))})),e.gradientDefs[l]=e.getGradientDefs(t),e.cssRules[l]=e.getCSSRules(t),e.clipPaths[l]=d,e.parseElements(f,(function(t,n){i&&(i(t,c,n,h),delete e.gradientDefs[l],delete e.cssRules[l],delete e.clipPaths[l])}),n(c),r,o)}}};var x=new RegExp("(normal|italic)?\\s*(normal|small-caps)?\\s*(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)?\\s*("+e.reNum+"(?:px|cm|mm|em|pt|pc|in)*)(?:\\/(normal|"+e.reNum+"))?\\s+(.*)");i(e,{
/**
       * Parses a short font declaration, building adding its properties to a style object
       * @static
       * @function
       * @memberOf fabric
       * @param {String} value font declaration
       * @param {Object} oStyle definition
       */
parseFontDeclaration:function(t,e){var i=t.match(x);if(i){var n=i[1],r=i[3],s=i[4],a=i[5],l=i[6];n&&(e.fontStyle=n),r&&(e.fontWeight=isNaN(parseFloat(r))?r:parseFloat(r)),s&&(e.fontSize=o(s)),l&&(e.fontFamily=l),a&&(e.lineHeight="normal"===a?1:a)}},
/**
       * Parses an SVG document, returning all of the gradient declarations found in it
       * @static
       * @function
       * @memberOf fabric
       * @param {SVGDocument} doc SVG document to parse
       * @return {Object} Gradient definitions; key corresponds to element id, value -- to gradient definition element
       */
getGradientDefs:function(t){var e,i=p(t,["linearGradient","radialGradient","svg:linearGradient","svg:radialGradient"]),n=0,r={};for(n=i.length;n--;)(e=i[n]).getAttribute("xlink:href")&&b(t,e),r[e.getAttribute("id")]=e;return r},
/**
       * Returns an object of attributes' name/value, given element and an array of attribute names;
       * Parses parent "g" nodes recursively upwards.
       * @static
       * @memberOf fabric
       * @param {DOMElement} element Element to parse
       * @param {Array} attributes Array of attributes to parse
       * @return {Object} object containing parsed attributes' names/values
       */
parseAttributes:function(t,n,s){if(t){var a,d,p,v={};void 0===s&&(s=t.getAttribute("svgUid")),t.parentNode&&e.svgValidParentsRegEx.test(t.parentNode.nodeName)&&(v=e.parseAttributes(t.parentNode,n,s));var m=n.reduce((function(e,i){return(a=t.getAttribute(i))&&(e[i]=a),e}),{}),y=i(function(t,i){var n={};for(var r in e.cssRules[i])if(g(t,r.split(" ")))for(var o in e.cssRules[i][r])n[o]=e.cssRules[i][r][o];return n}(t,s),e.parseStyleAttribute(t));m=i(m,y),y[h]&&t.setAttribute(h,y[h]),d=p=v.fontSize||e.Text.DEFAULT_SVG_FONT_SIZE,m[c]&&(m[c]=d=o(m[c],p));var _,b,x={};for(var C in m)b=f(_=u(C),m[C],v,d),x[_]=b;x&&x.font&&e.parseFontDeclaration(x.font,x);var S=i(v,x);return e.svgValidParentsRegEx.test(t.nodeName)?S:function(t){for(var i in l)if(void 0!==t[l[i]]&&""!==t[i]){if(void 0===t[i]){if(!e.Object.prototype[i])continue;t[i]=e.Object.prototype[i]}if(0!==t[i].indexOf("url(")){var n=new e.Color(t[i]);t[i]=n.setAlpha(r(n.getAlpha()*t[l[i]],2)).toRgba()}}return t}(S)}},
/**
       * Transforms an array of svg elements to corresponding fabric.* instances
       * @static
       * @memberOf fabric
       * @param {Array} elements Array of elements to parse
       * @param {Function} callback Being passed an array of fabric instances (transformed from SVG elements)
       * @param {Object} [options] Options object
       * @param {Function} [reviver] Method for further parsing of SVG elements, called after each fabric object created.
       */
parseElements:function(t,i,n,r,o){new e.ElementsParser(t,i,n,r,o).parse()},
/**
       * Parses "style" attribute, retuning an object with values
       * @static
       * @memberOf fabric
       * @param {SVGElement} element Element to parse
       * @return {Object} Objects with values parsed from style attribute of an element
       */
parseStyleAttribute:function(t){var e={},i=t.getAttribute("style");return i?("string"==typeof i?function(t,e){var i,n;t.replace(/;\s*$/,"").split(";").forEach((function(t){var r=t.split(":");i=r[0].trim().toLowerCase(),n=r[1].trim(),e[i]=n}))}(i,e):function(t,e){var i,n;for(var r in t)void 0!==t[r]&&(i=r.toLowerCase(),n=t[r],e[i]=n)}(i,e),e):e},
/**
       * Parses "points" attribute, returning an array of values
       * @static
       * @memberOf fabric
       * @param {String} points points attribute string
       * @return {Array} array of points
       */
parsePointsAttribute:function(t){if(!t)return null;var e,i,n=[];for(e=0,i=(t=(t=t.replace(/,/g," ").trim()).split(/\s+/)).length;e<i;e+=2)n.push({x:parseFloat(t[e]),y:parseFloat(t[e+1])});return n},
/**
       * Returns CSS rules for a given SVG document
       * @static
       * @function
       * @memberOf fabric
       * @param {SVGDocument} doc SVG document to parse
       * @return {Object} CSS rules of this document
       */
getCSSRules:function(t){var i,n,r=t.getElementsByTagName("style"),o={};for(i=0,n=r.length;i<n;i++){var s=r[i].textContent;""!==(s=s.replace(/\/\*[\s\S]*?\*\//g,"")).trim()&&s.split("}").filter((function(t){return t.trim()})).forEach((function(t){var r=t.split("{"),s={},a=r[1].trim().split(";").filter((function(t){return t.trim()}));for(i=0,n=a.length;i<n;i++){var l=a[i].split(":"),c=l[0].trim(),h=l[1].trim();s[c]=h}(t=r[0].trim()).split(",").forEach((function(t){""!==(t=t.replace(/^svg/i,"").trim())&&(o[t]?e.util.object.extend(o[t],s):o[t]=e.util.object.clone(s))}))}))}return o},
/**
       * Takes url corresponding to an SVG document, and parses it into a set of fabric objects.
       * Note that SVG is fetched via XMLHttpRequest, so it needs to conform to SOP (Same Origin Policy)
       * @memberOf fabric
       * @param {String} url
       * @param {Function} callback
       * @param {Function} [reviver] Method for further parsing of SVG elements, called after each fabric object created.
       * @param {Object} [options] Object containing options for parsing
       * @param {String} [options.crossOrigin] crossOrigin crossOrigin setting to use for external resources
       */
loadSVGFromURL:function(t,i,n,r){t=t.replace(/^\n\s*/,"").trim(),new e.util.request(t,{method:"get",onComplete:function(t){var o=t.responseXML;if(!o||!o.documentElement)return i&&i(null),!1;e.parseSVGDocument(o.documentElement,(function(t,e,n,r){i&&i(t,e,n,r)}),n,r)}})},
/**
       * Takes string corresponding to an SVG document, and parses it into a set of fabric objects
       * @memberOf fabric
       * @param {String} string
       * @param {Function} callback
       * @param {Function} [reviver] Method for further parsing of SVG elements, called after each fabric object created.
       * @param {Object} [options] Object containing options for parsing
       * @param {String} [options.crossOrigin] crossOrigin crossOrigin setting to use for external resources
       */
loadSVGFromString:function(t,i,n,r){var o=(new e.window.DOMParser).parseFromString(t.trim(),"text/xml");e.parseSVGDocument(o.documentElement,(function(t,e,n,r){i(t,e,n,r)}),n,r)}})}(t),C.ElementsParser=function(t,e,i,n,r,o){this.elements=t,this.callback=e,this.options=i,this.reviver=n,this.svgUid=i&&i.svgUid||0,this.parsingOptions=r,this.regexUrl=/^url\(['"]?#([^'"]+)['"]?\)/g,this.doc=o},(p=C.ElementsParser.prototype).parse=function(){this.instances=new Array(this.elements.length),this.numElements=this.elements.length,this.createObjects()},p.createObjects=function(){var t=this;this.elements.forEach((function(e,i){e.setAttribute("svgUid",t.svgUid),t.createObject(e,i)}))},p.findTag=function(t){return C[C.util.string.capitalize(t.tagName.replace("svg:",""))]},p.createObject=function(t,e){var i=this.findTag(t);if(i&&i.fromElement)try{i.fromElement(t,this.createCallback(e,t),this.options)}catch(n){C.log(n)}else this.checkIfDone()},p.createCallback=function(t,e){var i=this;return function(n){var r;i.resolveGradient(n,e,"fill"),i.resolveGradient(n,e,"stroke"),n instanceof C.Image&&n._originalElement&&(r=n.parsePreserveAspectRatioAttribute(e)),n._removeTransformMatrix(r),i.resolveClipPath(n,e),i.reviver&&i.reviver(e,n),i.instances[t]=n,i.checkIfDone()}},p.extractPropertyDefinition=function(t,e,i){var n=t[e],r=this.regexUrl;if(r.test(n)){r.lastIndex=0;var o=r.exec(n)[1];return r.lastIndex=0,C[i][this.svgUid][o]}},p.resolveGradient=function(t,e,i){var n=this.extractPropertyDefinition(t,i,"gradientDefs");if(n){var r=e.getAttribute(i+"-opacity"),o=C.Gradient.fromElement(n,t,r,this.options);t.set(i,o)}},p.createClipPathCallback=function(t,e){return function(t){t._removeTransformMatrix(),t.fillRule=t.clipRule,e.push(t)}},p.resolveClipPath=function(t,e){var i,n,r,o,s=this.extractPropertyDefinition(t,"clipPath","clipPaths");if(s){r=[],n=C.util.invertTransform(t.calcTransformMatrix());for(var a=s[0].parentNode,l=e;l.parentNode&&l.getAttribute("clip-path")!==t.clipPath;)l=l.parentNode;l.parentNode.appendChild(a);for(var c=0;c<s.length;c++)i=s[c],this.findTag(i).fromElement(i,this.createClipPathCallback(t,r),this.options);s=1===r.length?r[0]:new C.Group(r),o=C.util.multiplyTransformMatrices(n,s.calcTransformMatrix()),s.clipPath&&this.resolveClipPath(s,l);var h=C.util.qrDecompose(o);s.flipX=!1,s.flipY=!1,s.set("scaleX",h.scaleX),s.set("scaleY",h.scaleY),s.angle=h.angle,s.skewX=h.skewX,s.skewY=0,s.setPositionByOrigin({x:h.translateX,y:h.translateY},"center","center"),t.clipPath=s}else delete t.clipPath},p.checkIfDone=function(){0==--this.numElements&&(this.instances=this.instances.filter((function(t){return null!=t})),this.callback(this.instances,this.elements))},function(t){var e=t.fabric||(t.fabric={});function i(t,e){this.x=t,this.y=e}e.Point?e.warn("fabric.Point is already defined"):(e.Point=i,i.prototype=/** @lends fabric.Point.prototype */
{type:"point",constructor:i,
/**
       * Adds another point to this one and returns another one
       * @param {fabric.Point} that
       * @return {fabric.Point} new Point instance with added values
       */
add:function(t){return new i(this.x+t.x,this.y+t.y)},
/**
       * Adds another point to this one
       * @param {fabric.Point} that
       * @return {fabric.Point} thisArg
       * @chainable
       */
addEquals:function(t){return this.x+=t.x,this.y+=t.y,this},
/**
       * Adds value to this point and returns a new one
       * @param {Number} scalar
       * @return {fabric.Point} new Point with added value
       */
scalarAdd:function(t){return new i(this.x+t,this.y+t)},
/**
       * Adds value to this point
       * @param {Number} scalar
       * @return {fabric.Point} thisArg
       * @chainable
       */
scalarAddEquals:function(t){return this.x+=t,this.y+=t,this},
/**
       * Subtracts another point from this point and returns a new one
       * @param {fabric.Point} that
       * @return {fabric.Point} new Point object with subtracted values
       */
subtract:function(t){return new i(this.x-t.x,this.y-t.y)},
/**
       * Subtracts another point from this point
       * @param {fabric.Point} that
       * @return {fabric.Point} thisArg
       * @chainable
       */
subtractEquals:function(t){return this.x-=t.x,this.y-=t.y,this},
/**
       * Subtracts value from this point and returns a new one
       * @param {Number} scalar
       * @return {fabric.Point}
       */
scalarSubtract:function(t){return new i(this.x-t,this.y-t)},
/**
       * Subtracts value from this point
       * @param {Number} scalar
       * @return {fabric.Point} thisArg
       * @chainable
       */
scalarSubtractEquals:function(t){return this.x-=t,this.y-=t,this},
/**
       * Multiplies this point by a value and returns a new one
       * TODO: rename in scalarMultiply in 2.0
       * @param {Number} scalar
       * @return {fabric.Point}
       */
multiply:function(t){return new i(this.x*t,this.y*t)},
/**
       * Multiplies this point by a value
       * TODO: rename in scalarMultiplyEquals in 2.0
       * @param {Number} scalar
       * @return {fabric.Point} thisArg
       * @chainable
       */
multiplyEquals:function(t){return this.x*=t,this.y*=t,this},
/**
       * Divides this point by a value and returns a new one
       * TODO: rename in scalarDivide in 2.0
       * @param {Number} scalar
       * @return {fabric.Point}
       */
divide:function(t){return new i(this.x/t,this.y/t)},
/**
       * Divides this point by a value
       * TODO: rename in scalarDivideEquals in 2.0
       * @param {Number} scalar
       * @return {fabric.Point} thisArg
       * @chainable
       */
divideEquals:function(t){return this.x/=t,this.y/=t,this},
/**
       * Returns true if this point is equal to another one
       * @param {fabric.Point} that
       * @return {Boolean}
       */
eq:function(t){return this.x===t.x&&this.y===t.y},
/**
       * Returns true if this point is less than another one
       * @param {fabric.Point} that
       * @return {Boolean}
       */
lt:function(t){return this.x<t.x&&this.y<t.y},
/**
       * Returns true if this point is less than or equal to another one
       * @param {fabric.Point} that
       * @return {Boolean}
       */
lte:function(t){return this.x<=t.x&&this.y<=t.y},
/**
      
      	     * Returns true if this point is greater another one
      	     * @param {fabric.Point} that
      	     * @return {Boolean}
      	     */
gt:function(t){return this.x>t.x&&this.y>t.y},
/**
       * Returns true if this point is greater than or equal to another one
       * @param {fabric.Point} that
       * @return {Boolean}
       */
gte:function(t){return this.x>=t.x&&this.y>=t.y},
/**
       * Returns new point which is the result of linear interpolation with this one and another one
       * @param {fabric.Point} that
       * @param {Number} t , position of interpolation, between 0 and 1 default 0.5
       * @return {fabric.Point}
       */
lerp:function(t,e){return void 0===e&&(e=.5),e=Math.max(Math.min(1,e),0),new i(this.x+(t.x-this.x)*e,this.y+(t.y-this.y)*e)},
/**
       * Returns distance from this point and another one
       * @param {fabric.Point} that
       * @return {Number}
       */
distanceFrom:function(t){var e=this.x-t.x,i=this.y-t.y;return Math.sqrt(e*e+i*i)},
/**
       * Returns the point between this point and another one
       * @param {fabric.Point} that
       * @return {fabric.Point}
       */
midPointFrom:function(t){return this.lerp(t)},
/**
       * Returns a new point which is the min of this and another one
       * @param {fabric.Point} that
       * @return {fabric.Point}
       */
min:function(t){return new i(Math.min(this.x,t.x),Math.min(this.y,t.y))},
/**
       * Returns a new point which is the max of this and another one
       * @param {fabric.Point} that
       * @return {fabric.Point}
       */
max:function(t){return new i(Math.max(this.x,t.x),Math.max(this.y,t.y))},
/**
       * Returns string representation of this point
       * @return {String}
       */
toString:function(){return this.x+","+this.y},
/**
       * Sets x/y of this point
       * @param {Number} x
       * @param {Number} y
       * @chainable
       */
setXY:function(t,e){return this.x=t,this.y=e,this},
/**
       * Sets x of this point
       * @param {Number} x
       * @chainable
       */
setX:function(t){return this.x=t,this},
/**
       * Sets y of this point
       * @param {Number} y
       * @chainable
       */
setY:function(t){return this.y=t,this},
/**
       * Sets x/y of this point from another point
       * @param {fabric.Point} that
       * @chainable
       */
setFromPoint:function(t){return this.x=t.x,this.y=t.y,this},
/**
       * Swaps x/y of this point and another point
       * @param {fabric.Point} that
       */
swap:function(t){var e=this.x,i=this.y;this.x=t.x,this.y=t.y,t.x=e,t.y=i},
/**
       * return a cloned instance of the point
       * @return {fabric.Point}
       */
clone:function(){return new i(this.x,this.y)}})}(t),function(t){var e=t.fabric||(t.fabric={});function i(t){this.status=t,this.points=[]}e.Intersection?e.warn("fabric.Intersection is already defined"):(e.Intersection=i,e.Intersection.prototype=/** @lends fabric.Intersection.prototype */
{constructor:i,
/**
       * Appends a point to intersection
       * @param {fabric.Point} point
       * @return {fabric.Intersection} thisArg
       * @chainable
       */
appendPoint:function(t){return this.points.push(t),this},
/**
       * Appends points to intersection
       * @param {Array} points
       * @return {fabric.Intersection} thisArg
       * @chainable
       */
appendPoints:function(t){return this.points=this.points.concat(t),this}},e.Intersection.intersectLineLine=function(t,n,r,o){var s,a=(o.x-r.x)*(t.y-r.y)-(o.y-r.y)*(t.x-r.x),l=(n.x-t.x)*(t.y-r.y)-(n.y-t.y)*(t.x-r.x),c=(o.y-r.y)*(n.x-t.x)-(o.x-r.x)*(n.y-t.y);if(0!==c){var h=a/c,u=l/c;0<=h&&h<=1&&0<=u&&u<=1?(s=new i("Intersection")).appendPoint(new e.Point(t.x+h*(n.x-t.x),t.y+h*(n.y-t.y))):s=new i}else s=new i(0===a||0===l?"Coincident":"Parallel");return s},e.Intersection.intersectLinePolygon=function(t,e,n){var r,o,s,a,l=new i,c=n.length;for(a=0;a<c;a++)r=n[a],o=n[(a+1)%c],s=i.intersectLineLine(t,e,r,o),l.appendPoints(s.points);return l.points.length>0&&(l.status="Intersection"),l},e.Intersection.intersectPolygonPolygon=function(t,e){var n,r=new i,o=t.length;for(n=0;n<o;n++){var s=t[n],a=t[(n+1)%o],l=i.intersectLinePolygon(s,a,e);r.appendPoints(l.points)}return r.points.length>0&&(r.status="Intersection"),r},e.Intersection.intersectPolygonRectangle=function(t,n,r){var o=n.min(r),s=n.max(r),a=new e.Point(s.x,o.y),l=new e.Point(o.x,s.y),c=i.intersectLinePolygon(o,a,t),h=i.intersectLinePolygon(a,s,t),u=i.intersectLinePolygon(s,l,t),f=i.intersectLinePolygon(l,o,t),d=new i;return d.appendPoints(c.points),d.appendPoints(h.points),d.appendPoints(u.points),d.appendPoints(f.points),d.points.length>0&&(d.status="Intersection"),d})}(t),function(t){var e=t.fabric||(t.fabric={});function i(t){t?this._tryParsingColor(t):this.setSource([0,0,0,1])}function n(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+6*(e-t)*i:i<.5?e:i<2/3?t+(e-t)*(2/3-i)*6:t}e.Color?e.warn("fabric.Color is already defined."):(e.Color=i,e.Color.prototype=/** @lends fabric.Color.prototype */
{
/**
       * @private
       * @param {String|Array} color Color value to parse
       */
_tryParsingColor:function(t){var e;t in i.colorNameMap&&(t=i.colorNameMap[t]),"transparent"===t&&(e=[255,255,255,0]),e||(e=i.sourceFromHex(t)),e||(e=i.sourceFromRgb(t)),e||(e=i.sourceFromHsl(t)),e||(e=[0,0,0,1]),e&&this.setSource(e)},
/**
       * Adapted from <a href="https://rawgithub.com/mjijackson/mjijackson.github.com/master/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript.html">https://github.com/mjijackson</a>
       * @private
       * @param {Number} r Red color value
       * @param {Number} g Green color value
       * @param {Number} b Blue color value
       * @return {Array} Hsl color
       */
_rgbToHsl:function(t,i,n){t/=255,i/=255,n/=255;var r,o,s,a=e.util.array.max([t,i,n]),l=e.util.array.min([t,i,n]);if(s=(a+l)/2,a===l)r=o=0;else{var c=a-l;switch(o=s>.5?c/(2-a-l):c/(a+l),a){case t:r=(i-n)/c+(i<n?6:0);break;case i:r=(n-t)/c+2;break;case n:r=(t-i)/c+4}r/=6}return[Math.round(360*r),Math.round(100*o),Math.round(100*s)]},
/**
       * Returns source of this color (where source is an array representation; ex: [200, 200, 100, 1])
       * @return {Array}
       */
getSource:function(){return this._source},
/**
       * Sets source of this color (where source is an array representation; ex: [200, 200, 100, 1])
       * @param {Array} source
       */
setSource:function(t){this._source=t},
/**
       * Returns color representation in RGB format
       * @return {String} ex: rgb(0-255,0-255,0-255)
       */
toRgb:function(){var t=this.getSource();return"rgb("+t[0]+","+t[1]+","+t[2]+")"},
/**
       * Returns color representation in RGBA format
       * @return {String} ex: rgba(0-255,0-255,0-255,0-1)
       */
toRgba:function(){var t=this.getSource();return"rgba("+t[0]+","+t[1]+","+t[2]+","+t[3]+")"},
/**
       * Returns color representation in HSL format
       * @return {String} ex: hsl(0-360,0%-100%,0%-100%)
       */
toHsl:function(){var t=this.getSource(),e=this._rgbToHsl(t[0],t[1],t[2]);return"hsl("+e[0]+","+e[1]+"%,"+e[2]+"%)"},
/**
       * Returns color representation in HSLA format
       * @return {String} ex: hsla(0-360,0%-100%,0%-100%,0-1)
       */
toHsla:function(){var t=this.getSource(),e=this._rgbToHsl(t[0],t[1],t[2]);return"hsla("+e[0]+","+e[1]+"%,"+e[2]+"%,"+t[3]+")"},
/**
       * Returns color representation in HEX format
       * @return {String} ex: FF5555
       */
toHex:function(){var t,e,i,n=this.getSource();return t=1===(t=n[0].toString(16)).length?"0"+t:t,e=1===(e=n[1].toString(16)).length?"0"+e:e,i=1===(i=n[2].toString(16)).length?"0"+i:i,t.toUpperCase()+e.toUpperCase()+i.toUpperCase()},
/**
       * Returns color representation in HEXA format
       * @return {String} ex: FF5555CC
       */
toHexa:function(){var t,e=this.getSource();return t=1===(t=(t=Math.round(255*e[3])).toString(16)).length?"0"+t:t,this.toHex()+t.toUpperCase()},
/**
       * Gets value of alpha channel for this color
       * @return {Number} 0-1
       */
getAlpha:function(){return this.getSource()[3]},
/**
       * Sets value of alpha channel for this color
       * @param {Number} alpha Alpha value 0-1
       * @return {fabric.Color} thisArg
       */
setAlpha:function(t){var e=this.getSource();return e[3]=t,this.setSource(e),this},
/**
       * Transforms color to its grayscale representation
       * @return {fabric.Color} thisArg
       */
toGrayscale:function(){var t=this.getSource(),e=parseInt((.3*t[0]+.59*t[1]+.11*t[2]).toFixed(0),10),i=t[3];return this.setSource([e,e,e,i]),this},
/**
       * Transforms color to its black and white representation
       * @param {Number} threshold
       * @return {fabric.Color} thisArg
       */
toBlackWhite:function(t){var e=this.getSource(),i=(.3*e[0]+.59*e[1]+.11*e[2]).toFixed(0),n=e[3];return t=t||127,i=Number(i)<Number(t)?0:255,this.setSource([i,i,i,n]),this},
/**
       * Overlays color with another color
       * @param {String|fabric.Color} otherColor
       * @return {fabric.Color} thisArg
       */
overlayWith:function(t){t instanceof i||(t=new i(t));var e,n=[],r=this.getAlpha(),o=this.getSource(),s=t.getSource();for(e=0;e<3;e++)n.push(Math.round(.5*o[e]+.5*s[e]));return n[3]=r,this.setSource(n),this}},e.Color.reRGBa=/^rgba?\(\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*(?:\s*,\s*((?:\d*\.?\d+)?)\s*)?\)$/i,e.Color.reHSLa=/^hsla?\(\s*(\d{1,3})\s*,\s*(\d{1,3}\%)\s*,\s*(\d{1,3}\%)\s*(?:\s*,\s*(\d+(?:\.\d+)?)\s*)?\)$/i,e.Color.reHex=/^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i,e.Color.colorNameMap={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aqua:"#00FFFF",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000000",blanchedalmond:"#FFEBCD",blue:"#0000FF",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#00FFFF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgrey:"#A9A9A9",darkgreen:"#006400",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",fuchsia:"#FF00FF",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",gray:"#808080",grey:"#808080",green:"#008000",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgray:"#D3D3D3",lightgrey:"#D3D3D3",lightgreen:"#90EE90",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",lime:"#00FF00",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",maroon:"#800000",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",navy:"#000080",oldlace:"#FDF5E6",olive:"#808000",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",purple:"#800080",rebeccapurple:"#663399",red:"#FF0000",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",silver:"#C0C0C0",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",teal:"#008080",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",white:"#FFFFFF",whitesmoke:"#F5F5F5",yellow:"#FFFF00",yellowgreen:"#9ACD32"},e.Color.fromRgb=function(t){return i.fromSource(i.sourceFromRgb(t))},e.Color.sourceFromRgb=function(t){var e=t.match(i.reRGBa);if(e){var n=parseInt(e[1],10)/(/%$/.test(e[1])?100:1)*(/%$/.test(e[1])?255:1),r=parseInt(e[2],10)/(/%$/.test(e[2])?100:1)*(/%$/.test(e[2])?255:1),o=parseInt(e[3],10)/(/%$/.test(e[3])?100:1)*(/%$/.test(e[3])?255:1);return[parseInt(n,10),parseInt(r,10),parseInt(o,10),e[4]?parseFloat(e[4]):1]}},e.Color.fromRgba=i.fromRgb,e.Color.fromHsl=function(t){return i.fromSource(i.sourceFromHsl(t))},e.Color.sourceFromHsl=function(t){var e=t.match(i.reHSLa);if(e){var r,o,s,a=(parseFloat(e[1])%360+360)%360/360,l=parseFloat(e[2])/(/%$/.test(e[2])?100:1),c=parseFloat(e[3])/(/%$/.test(e[3])?100:1);if(0===l)r=o=s=c;else{var h=c<=.5?c*(l+1):c+l-c*l,u=2*c-h;r=n(u,h,a+1/3),o=n(u,h,a),s=n(u,h,a-1/3)}return[Math.round(255*r),Math.round(255*o),Math.round(255*s),e[4]?parseFloat(e[4]):1]}},e.Color.fromHsla=i.fromHsl,e.Color.fromHex=function(t){return i.fromSource(i.sourceFromHex(t))},e.Color.sourceFromHex=function(t){if(t.match(i.reHex)){var e=t.slice(t.indexOf("#")+1),n=3===e.length||4===e.length,r=8===e.length||4===e.length,o=n?e.charAt(0)+e.charAt(0):e.substring(0,2),s=n?e.charAt(1)+e.charAt(1):e.substring(2,4),a=n?e.charAt(2)+e.charAt(2):e.substring(4,6),l=r?n?e.charAt(3)+e.charAt(3):e.substring(6,8):"FF";return[parseInt(o,16),parseInt(s,16),parseInt(a,16),parseFloat((parseInt(l,16)/255).toFixed(2))]}},e.Color.fromSource=function(t){var e=new i;return e.setSource(t),e})}(t),function(t){var e=t.fabric||(t.fabric={}),i=["e","se","s","sw","w","nw","n","ne","e"],n=["ns","nesw","ew","nwse"],r={},o="left",s="top",a="right",l="bottom",c="center",h={top:l,bottom:s,left:a,right:o,center:c},u=e.util.radiansToDegrees,f=Math.sign||function(t){return(t>0)-(t<0)||+t};function d(t,e){var i=t.angle+u(Math.atan2(e.y,e.x))+360;return Math.round(i%360/45)}function p(t,i){var n=i.transform.target,r=n.canvas,o=e.util.object.clone(i);o.target=n,r&&r.fire("object:"+t,o),n.fire(t,i)}function g(t,e){var i=e.canvas,n=t[i.uniScaleKey];return i.uniformScaling&&!n||!i.uniformScaling&&n}function v(t){return t.originX===c&&t.originY===c}function m(t,e,i){var n=t.lockScalingX,r=t.lockScalingY;return!(!n||!r)||(!(e||!n&&!r||!i)||(!(!n||"x"!==e)||!(!r||"y"!==e)))}function y(t,e,i,n){return{e:t,transform:e,pointer:{x:i,y:n}}}function _(t){return function(e,i,n,r){var o=i.target,s=o.getCenterPoint(),a=o.translateToOriginPoint(s,i.originX,i.originY),l=t(e,i,n,r);return o.setPositionByOrigin(a,i.originX,i.originY),l}}function b(t,e){return function(i,n,r,o){var s=e(i,n,r,o);return s&&p(t,y(i,n,r,o)),s}}function x(t,i,n,r,o){var s=t.target,a=s.controls[t.corner],l=s.canvas.getZoom(),c=s.padding/l,h=s.toLocalPoint(new e.Point(r,o),i,n);return h.x>=c&&(h.x-=c),h.x<=-c&&(h.x+=c),h.y>=c&&(h.y-=c),h.y<=c&&(h.y+=c),h.x-=a.offsetX,h.y-=a.offsetY,h}function C(t){return t.flipX!==t.flipY}function S(t,e,i,n,r){if(0!==t[e]){var o=r/t._getTransformedDimensions()[n]*t[i];t.set(i,o)}}function w(t,e,i,n){var r,c=e.target,h=c._getTransformedDimensions(0,c.skewY),f=x(e,e.originX,e.originY,i,n),d=Math.abs(2*f.x)-h.x,p=c.skewX;d<2?r=0:(r=u(Math.atan2(d/c.scaleX,h.y/c.scaleY)),e.originX===o&&e.originY===l&&(r=-r),e.originX===a&&e.originY===s&&(r=-r),C(c)&&(r=-r));var g=p!==r;if(g){var v=c._getTransformedDimensions().y;c.set("skewX",r),S(c,"skewY","scaleY","y",v)}return g}function T(t,e,i,n){var r,c=e.target,h=c._getTransformedDimensions(c.skewX,0),f=x(e,e.originX,e.originY,i,n),d=Math.abs(2*f.y)-h.y,p=c.skewY;d<2?r=0:(r=u(Math.atan2(d/c.scaleY,h.x/c.scaleX)),e.originX===o&&e.originY===l&&(r=-r),e.originX===a&&e.originY===s&&(r=-r),C(c)&&(r=-r));var g=p!==r;if(g){var v=c._getTransformedDimensions().x;c.set("skewY",r),S(c,"skewX","scaleX","x",v)}return g}function O(t,e,i,n,r){r=r||{};var o,s,a,l,c,u,d=e.target,p=d.lockScalingX,y=d.lockScalingY,_=r.by,b=g(t,d),C=m(d,_,b),S=e.gestureScale;if(C)return!1;if(S)s=e.scaleX*S,a=e.scaleY*S;else{if(o=x(e,e.originX,e.originY,i,n),c="y"!==_?f(o.x):1,u="x"!==_?f(o.y):1,e.signX||(e.signX=c),e.signY||(e.signY=u),d.lockScalingFlip&&(e.signX!==c||e.signY!==u))return!1;if(l=d._getTransformedDimensions(),b&&!_){var w=Math.abs(o.x)+Math.abs(o.y),T=e.original,O=w/(Math.abs(l.x*T.scaleX/d.scaleX)+Math.abs(l.y*T.scaleY/d.scaleY));s=T.scaleX*O,a=T.scaleY*O}else s=Math.abs(o.x*d.scaleX/l.x),a=Math.abs(o.y*d.scaleY/l.y);v(e)&&(s*=2,a*=2),e.signX!==c&&"y"!==_&&(e.originX=h[e.originX],s*=-1,e.signX=c),e.signY!==u&&"x"!==_&&(e.originY=h[e.originY],a*=-1,e.signY=u)}var k=d.scaleX,E=d.scaleY;return _?("x"===_&&d.set("scaleX",s),"y"===_&&d.set("scaleY",a)):(!p&&d.set("scaleX",s),!y&&d.set("scaleY",a)),k!==d.scaleX||E!==d.scaleY}r.scaleCursorStyleHandler=function(t,e,n){var r=g(t,n),o="";if(0!==e.x&&0===e.y?o="x":0===e.x&&0!==e.y&&(o="y"),m(n,o,r))return"not-allowed";var s=d(n,e);return i[s]+"-resize"},r.skewCursorStyleHandler=function(t,e,i){var r="not-allowed";if(0!==e.x&&i.lockSkewingY)return r;if(0!==e.y&&i.lockSkewingX)return r;var o=d(i,e)%4;return n[o]+"-resize"},r.scaleSkewCursorStyleHandler=function(t,e,i){return t[i.canvas.altActionKey]?r.skewCursorStyleHandler(t,e,i):r.scaleCursorStyleHandler(t,e,i)},r.rotationWithSnapping=b("rotating",_((function(t,e,i,n){var r=e,o=r.target,s=o.translateToOriginPoint(o.getCenterPoint(),r.originX,r.originY);if(o.lockRotation)return!1;var a,l=Math.atan2(r.ey-s.y,r.ex-s.x),c=Math.atan2(n-s.y,i-s.x),h=u(c-l+r.theta);if(o.snapAngle>0){var f=o.snapAngle,d=o.snapThreshold||f,p=Math.ceil(h/f)*f,g=Math.floor(h/f)*f;Math.abs(h-g)<d?h=g:Math.abs(h-p)<d&&(h=p)}return h<0&&(h=360+h),h%=360,a=o.angle!==h,o.angle=h,a}))),r.scalingEqually=b("scaling",_((function(t,e,i,n){return O(t,e,i,n)}))),r.scalingX=b("scaling",_((function(t,e,i,n){return O(t,e,i,n,{by:"x"})}))),r.scalingY=b("scaling",_((function(t,e,i,n){return O(t,e,i,n,{by:"y"})}))),r.scalingYOrSkewingX=function(t,e,i,n){return t[e.target.canvas.altActionKey]?r.skewHandlerX(t,e,i,n):r.scalingY(t,e,i,n)},r.scalingXOrSkewingY=function(t,e,i,n){return t[e.target.canvas.altActionKey]?r.skewHandlerY(t,e,i,n):r.scalingX(t,e,i,n)},r.changeWidth=b("resizing",_((function(t,e,i,n){var r=e.target,o=x(e,e.originX,e.originY,i,n),s=r.strokeWidth/(r.strokeUniform?r.scaleX:1),a=v(e)?2:1,l=r.width,c=Math.abs(o.x*a/r.scaleX)-s;return r.set("width",Math.max(c,0)),l!==c}))),r.skewHandlerX=function(t,e,i,n){var r,l=e.target,h=l.skewX,u=e.originY;return!l.lockSkewingX&&(0===h?r=x(e,c,c,i,n).x>0?o:a:(h>0&&(r=u===s?o:a),h<0&&(r=u===s?a:o),C(l)&&(r=r===o?a:o)),e.originX=r,b("skewing",_(w))(t,e,i,n))},r.skewHandlerY=function(t,e,i,n){var r,a=e.target,h=a.skewY,u=e.originX;return!a.lockSkewingY&&(0===h?r=x(e,c,c,i,n).y>0?s:l:(h>0&&(r=u===o?s:l),h<0&&(r=u===o?l:s),C(a)&&(r=r===s?l:s)),e.originY=r,b("skewing",_(T))(t,e,i,n))},r.dragHandler=function(t,e,i,n){var r=e.target,o=i-e.offsetX,s=n-e.offsetY,a=!r.get("lockMovementX")&&r.left!==o,l=!r.get("lockMovementY")&&r.top!==s;return a&&r.set("left",o),l&&r.set("top",s),(a||l)&&p("moving",y(t,e,i,n)),a||l},r.scaleOrSkewActionName=function(t,e,i){var n=t[i.canvas.altActionKey];return 0===e.x?n?"skewX":"scaleY":0===e.y?n?"skewY":"scaleX":void 0},r.rotationStyleHandler=function(t,e,i){return i.lockRotation?"not-allowed":e.cursorStyle},r.fireEvent=p,r.wrapWithFixedAnchor=_,r.wrapWithFireEvent=b,r.getLocalPoint=x,e.controlsUtils=r}(t),function(t){var e=t.fabric||(t.fabric={}),i=e.util.degreesToRadians,n=e.controlsUtils;n.renderCircleControl=function(t,e,i,n,r){n=n||{};var o,s=this.sizeX||n.cornerSize||r.cornerSize,a=this.sizeY||n.cornerSize||r.cornerSize,l=void 0!==n.transparentCorners?n.transparentCorners:r.transparentCorners,c=l?"stroke":"fill",h=!l&&(n.cornerStrokeColor||r.cornerStrokeColor),u=e,f=i;t.save(),t.fillStyle=n.cornerColor||r.cornerColor,t.strokeStyle=n.cornerStrokeColor||r.cornerStrokeColor,s>a?(o=s,t.scale(1,a/s),f=i*s/a):a>s?(o=a,t.scale(s/a,1),u=e*a/s):o=s,t.lineWidth=1,t.beginPath(),t.arc(u,f,o/2,0,2*Math.PI,!1),t[c](),h&&t.stroke(),t.restore()},n.renderSquareControl=function(t,e,n,r,o){r=r||{};var s=this.sizeX||r.cornerSize||o.cornerSize,a=this.sizeY||r.cornerSize||o.cornerSize,l=void 0!==r.transparentCorners?r.transparentCorners:o.transparentCorners,c=l?"stroke":"fill",h=!l&&(r.cornerStrokeColor||o.cornerStrokeColor),u=s/2,f=a/2;t.save(),t.fillStyle=r.cornerColor||o.cornerColor,t.strokeStyle=r.cornerStrokeColor||o.cornerStrokeColor,t.lineWidth=1,t.translate(e,n),t.rotate(i(o.angle)),t[c+"Rect"](-u,-f,s,a),h&&t.strokeRect(-u,-f,s,a),t.restore()}}(t),function(t){var e=t.fabric||(t.fabric={});e.Control=function(t){for(var e in t)this[e]=t[e]},e.Control.prototype=/** @lends fabric.Control.prototype */
{
/**
       * keep track of control visibility.
       * mainly for backward compatibility.
       * if you do not want to see a control, you can remove it
       * from the controlset.
       * @type {Boolean}
       * @default true
       */
visible:!0,
/**
       * Name of the action that the control will likely execute.
       * This is optional. FabricJS uses to identify what the user is doing for some
       * extra optimizations. If you are writing a custom control and you want to know
       * somewhere else in the code what is going on, you can use this string here.
       * you can also provide a custom getActionName if your control run multiple actions
       * depending on some external state.
       * default to scale since is the most common, used on 4 corners by default
       * @type {String}
       * @default 'scale'
       */
actionName:"scale",
/**
       * Drawing angle of the control.
       * NOT used for now, but name marked as needed for internal logic
       * example: to reuse the same drawing function for different rotated controls
       * @type {Number}
       * @default 0
       */
angle:0,
/**
       * Relative position of the control. X
       * 0,0 is the center of the Object, while -0.5 (left) or 0.5 (right) are the extremities
       * of the bounding box.
       * @type {Number}
       * @default 0
       */
x:0,
/**
       * Relative position of the control. Y
       * 0,0 is the center of the Object, while -0.5 (top) or 0.5 (bottom) are the extremities
       * of the bounding box.
       * @type {Number}
       * @default 0
       */
y:0,
/**
       * Horizontal offset of the control from the defined position. In pixels
       * Positive offset moves the control to the right, negative to the left.
       * It used when you want to have position of control that does not scale with
       * the bounding box. Example: rotation control is placed at x:0, y: 0.5 on
       * the boundindbox, with an offset of 30 pixels vertically. Those 30 pixels will
       * stay 30 pixels no matter how the object is big. Another example is having 2
       * controls in the corner, that stay in the same position when the object scale.
       * of the bounding box.
       * @type {Number}
       * @default 0
       */
offsetX:0,
/**
       * Vertical offset of the control from the defined position. In pixels
       * Positive offset moves the control to the bottom, negative to the top.
       * @type {Number}
       * @default 0
       */
offsetY:0,
/**
       * Sets the length of the control. If null, defaults to object's cornerSize.
       * Expects both sizeX and sizeY to be set when set.
       * @type {?Number}
       * @default null
       */
sizeX:null,
/**
       * Sets the height of the control. If null, defaults to object's cornerSize.
       * Expects both sizeX and sizeY to be set when set.
       * @type {?Number}
       * @default null
       */
sizeY:null,
/**
       * Sets the length of the touch area of the control. If null, defaults to object's touchCornerSize.
       * Expects both touchSizeX and touchSizeY to be set when set.
       * @type {?Number}
       * @default null
       */
touchSizeX:null,
/**
       * Sets the height of the touch area of the control. If null, defaults to object's touchCornerSize.
       * Expects both touchSizeX and touchSizeY to be set when set.
       * @type {?Number}
       * @default null
       */
touchSizeY:null,
/**
       * Css cursor style to display when the control is hovered.
       * if the method `cursorStyleHandler` is provided, this property is ignored.
       * @type {String}
       * @default 'crosshair'
       */
cursorStyle:"crosshair",
/**
       * If controls has an offsetY or offsetX, draw a line that connects
       * the control to the bounding box
       * @type {Boolean}
       * @default false
       */
withConnection:!1,
/**
       * The control actionHandler, provide one to handle action ( control being moved )
       * @param {Event} eventData the native mouse event
       * @param {Object} transformData properties of the current transform
       * @param {Number} x x position of the cursor
       * @param {Number} y y position of the cursor
       * @return {Boolean} true if the action/event modified the object
       */
actionHandler:function(){},
/**
       * The control handler for mouse down, provide one to handle mouse down on control
       * @param {Event} eventData the native mouse event
       * @param {Object} transformData properties of the current transform
       * @param {Number} x x position of the cursor
       * @param {Number} y y position of the cursor
       * @return {Boolean} true if the action/event modified the object
       */
mouseDownHandler:function(){},
/**
       * The control mouseUpHandler, provide one to handle an effect on mouse up.
       * @param {Event} eventData the native mouse event
       * @param {Object} transformData properties of the current transform
       * @param {Number} x x position of the cursor
       * @param {Number} y y position of the cursor
       * @return {Boolean} true if the action/event modified the object
       */
mouseUpHandler:function(){},
/**
       * Returns control actionHandler
       * @param {Event} eventData the native mouse event
       * @param {fabric.Object} fabricObject on which the control is displayed
       * @param {fabric.Control} control control for which the action handler is being asked
       * @return {Function} the action handler
       */
getActionHandler:function(){return this.actionHandler},
/**
       * Returns control mouseDown handler
       * @param {Event} eventData the native mouse event
       * @param {fabric.Object} fabricObject on which the control is displayed
       * @param {fabric.Control} control control for which the action handler is being asked
       * @return {Function} the action handler
       */
getMouseDownHandler:function(){return this.mouseDownHandler},
/**
       * Returns control mouseUp handler
       * @param {Event} eventData the native mouse event
       * @param {fabric.Object} fabricObject on which the control is displayed
       * @param {fabric.Control} control control for which the action handler is being asked
       * @return {Function} the action handler
       */
getMouseUpHandler:function(){return this.mouseUpHandler},
/**
       * Returns control cursorStyle for css using cursorStyle. If you need a more elaborate
       * function you can pass one in the constructor
       * the cursorStyle property
       * @param {Event} eventData the native mouse event
       * @param {fabric.Control} control the current control ( likely this)
       * @param {fabric.Object} object on which the control is displayed
       * @return {String}
       */
cursorStyleHandler:function(t,e){return e.cursorStyle},
/**
       * Returns the action name. The basic implementation just return the actionName property.
       * @param {Event} eventData the native mouse event
       * @param {fabric.Control} control the current control ( likely this)
       * @param {fabric.Object} object on which the control is displayed
       * @return {String}
       */
getActionName:function(t,e){return e.actionName},
/**
       * Returns controls visibility
       * @param {fabric.Object} object on which the control is displayed
       * @param {String} controlKey key where the control is memorized on the
       * @return {Boolean}
       */
getVisibility:function(t,e){var i=t._controlsVisibility;return i&&void 0!==i[e]?i[e]:this.visible},
/**
       * Sets controls visibility
       * @param {Boolean} visibility for the object
       * @return {Void}
       */
setVisibility:function(t){this.visible=t},positionHandler:function(t,i){return e.util.transformPoint({x:this.x*t.x+this.offsetX,y:this.y*t.y+this.offsetY},i)},
/**
       * Returns the coords for this control based on object values.
       * @param {Number} objectAngle angle from the fabric object holding the control
       * @param {Number} objectCornerSize cornerSize from the fabric object holding the control (or touchCornerSize if
       *   isTouch is true)
       * @param {Number} centerX x coordinate where the control center should be
       * @param {Number} centerY y coordinate where the control center should be
       * @param {boolean} isTouch true if touch corner, false if normal corner
       */
calcCornerCoords:function(t,i,n,r,o){var s,a,l,c,h=o?this.touchSizeX:this.sizeX,u=o?this.touchSizeY:this.sizeY;if(h&&u&&h!==u){var f=Math.atan2(u,h),d=Math.sqrt(h*h+u*u)/2,p=f-e.util.degreesToRadians(t),g=Math.PI/2-f-e.util.degreesToRadians(t);s=d*e.util.cos(p),a=d*e.util.sin(p),l=d*e.util.cos(g),c=d*e.util.sin(g)}else{d=.7071067812*(h&&u?h:i);p=e.util.degreesToRadians(45-t);s=l=d*e.util.cos(p),a=c=d*e.util.sin(p)}return{tl:{x:n-c,y:r-l},tr:{x:n+s,y:r-a},bl:{x:n-s,y:r+a},br:{x:n+c,y:r+l}}},
/**
      * Render function for the control.
      * When this function runs the context is unscaled. unrotate. Just retina scaled.
      * all the functions will have to translate to the point left,top before starting Drawing
      * if they want to draw a control where the position is detected.
      * left and top are the result of the positionHandler function
      * @param {RenderingContext2D} ctx the context where the control will be drawn
      * @param {Number} left position of the canvas where we are about to render the control.
      * @param {Number} top position of the canvas where we are about to render the control.
      * @param {Object} styleOverride
      * @param {fabric.Object} fabricObject the object where the control is about to be rendered
      */
render:function(t,i,n,r,o){if("circle"===((r=r||{}).cornerStyle||o.cornerStyle))e.controlsUtils.renderCircleControl.call(this,t,i,n,r,o);else e.controlsUtils.renderSquareControl.call(this,t,i,n,r,o)}}}(t),function(){function t(t,e){var i,n,r,o,s=t.getAttribute("style"),a=t.getAttribute("offset")||0;if(a=(a=parseFloat(a)/(/%$/.test(a)?100:1))<0?0:a>1?1:a,s){var l=s.split(/\s*;\s*/);for(""===l[l.length-1]&&l.pop(),o=l.length;o--;){var c=l[o].split(/\s*:\s*/),h=c[0].trim(),u=c[1].trim();"stop-color"===h?i=u:"stop-opacity"===h&&(r=u)}}return i||(i=t.getAttribute("stop-color")||"rgb(0,0,0)"),r||(r=t.getAttribute("stop-opacity")),n=(i=new C.Color(i)).getAlpha(),r=isNaN(parseFloat(r))?1:parseFloat(r),r*=n*e,{offset:a,color:i.toRgb(),opacity:r}}var e=C.util.object.clone;C.Gradient=C.util.createClass(
/** @lends fabric.Gradient.prototype */
{
/**
         * Horizontal offset for aligning gradients coming from SVG when outside pathgroups
         * @type Number
         * @default 0
         */
offsetX:0,
/**
         * Vertical offset for aligning gradients coming from SVG when outside pathgroups
         * @type Number
         * @default 0
         */
offsetY:0,
/**
         * A transform matrix to apply to the gradient before painting.
         * Imported from svg gradients, is not applied with the current transform in the center.
         * Before this transform is applied, the origin point is at the top left corner of the object
         * plus the addition of offsetY and offsetX.
         * @type Number[]
         * @default null
         */
gradientTransform:null,
/**
         * coordinates units for coords.
         * If `pixels`, the number of coords are in the same unit of width / height.
         * If set as `percentage` the coords are still a number, but 1 means 100% of width
         * for the X and 100% of the height for the y. It can be bigger than 1 and negative.
         * allowed values pixels or percentage.
         * @type String
         * @default 'pixels'
         */
gradientUnits:"pixels",
/**
         * Gradient type linear or radial
         * @type String
         * @default 'pixels'
         */
type:"linear",
/**
         * Constructor
         * @param {Object} options Options object with type, coords, gradientUnits and colorStops
         * @param {Object} [options.type] gradient type linear or radial
         * @param {Object} [options.gradientUnits] gradient units
         * @param {Object} [options.offsetX] SVG import compatibility
         * @param {Object} [options.offsetY] SVG import compatibility
         * @param {Object[]} options.colorStops contains the colorstops.
         * @param {Object} options.coords contains the coords of the gradient
         * @param {Number} [options.coords.x1] X coordiante of the first point for linear or of the focal point for radial
         * @param {Number} [options.coords.y1] Y coordiante of the first point for linear or of the focal point for radial
         * @param {Number} [options.coords.x2] X coordiante of the second point for linear or of the center point for radial
         * @param {Number} [options.coords.y2] Y coordiante of the second point for linear or of the center point for radial
         * @param {Number} [options.coords.r1] only for radial gradient, radius of the inner circle
         * @param {Number} [options.coords.r2] only for radial gradient, radius of the external circle
         * @return {fabric.Gradient} thisArg
         */
initialize:function(t){t||(t={}),t.coords||(t.coords={});var e,i=this;Object.keys(t).forEach((function(e){i[e]=t[e]})),this.id?this.id+="_"+C.Object.__uid++:this.id=C.Object.__uid++,e={x1:t.coords.x1||0,y1:t.coords.y1||0,x2:t.coords.x2||0,y2:t.coords.y2||0},"radial"===this.type&&(e.r1=t.coords.r1||0,e.r2=t.coords.r2||0),this.coords=e,this.colorStops=t.colorStops.slice()},
/**
         * Adds another colorStop
         * @param {Object} colorStop Object with offset and color
         * @return {fabric.Gradient} thisArg
         */
addColorStop:function(t){for(var e in t){var i=new C.Color(t[e]);this.colorStops.push({offset:parseFloat(e),color:i.toRgb(),opacity:i.getAlpha()})}return this},
/**
         * Returns object representation of a gradient
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object}
         */
toObject:function(t){var e={type:this.type,coords:this.coords,colorStops:this.colorStops,offsetX:this.offsetX,offsetY:this.offsetY,gradientUnits:this.gradientUnits,gradientTransform:this.gradientTransform?this.gradientTransform.concat():this.gradientTransform};return C.util.populateWithProperties(this,e,t),e},
/* _TO_SVG_START_ */
/**
         * Returns SVG representation of an gradient
         * @param {Object} object Object to create a gradient for
         * @return {String} SVG representation of an gradient (linear/radial)
         */
toSVG:function(t,i){var n,r,o,s,a=e(this.coords,!0),l=(i=i||{},e(this.colorStops,!0)),c=a.r1>a.r2,h=this.gradientTransform?this.gradientTransform.concat():C.iMatrix.concat(),u=-this.offsetX,f=-this.offsetY,d=!!i.additionalTransform,p="pixels"===this.gradientUnits?"userSpaceOnUse":"objectBoundingBox";if(l.sort((function(t,e){return t.offset-e.offset})),"objectBoundingBox"===p?(u/=t.width,f/=t.height):(u+=t.width/2,f+=t.height/2),"path"===t.type&&"percentage"!==this.gradientUnits&&(u-=t.pathOffset.x,f-=t.pathOffset.y),h[4]-=u,h[5]-=f,s='id="SVGID_'+this.id+'" gradientUnits="'+p+'"',s+=' gradientTransform="'+(d?i.additionalTransform+" ":"")+C.util.matrixToSVG(h)+'" ',"linear"===this.type?o=["<linearGradient ",s,' x1="',a.x1,'" y1="',a.y1,'" x2="',a.x2,'" y2="',a.y2,'">\n']:"radial"===this.type&&(o=["<radialGradient ",s,' cx="',c?a.x1:a.x2,'" cy="',c?a.y1:a.y2,'" r="',c?a.r1:a.r2,'" fx="',c?a.x2:a.x1,'" fy="',c?a.y2:a.y1,'">\n']),"radial"===this.type){if(c)for((l=l.concat()).reverse(),n=0,r=l.length;n<r;n++)l[n].offset=1-l[n].offset;var g=Math.min(a.r1,a.r2);if(g>0){var v=g/Math.max(a.r1,a.r2);for(n=0,r=l.length;n<r;n++)l[n].offset+=v*(1-l[n].offset)}}for(n=0,r=l.length;n<r;n++){var m=l[n];o.push("<stop ",'offset="',100*m.offset+"%",'" style="stop-color:',m.color,void 0!==m.opacity?";stop-opacity: "+m.opacity:";",'"/>\n')}return o.push("linear"===this.type?"</linearGradient>\n":"</radialGradient>\n"),o.join("")},
/* _TO_SVG_END_ */
/**
         * Returns an instance of CanvasGradient
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @return {CanvasGradient}
         */
toLive:function(t){var e,i,n,r=C.util.object.clone(this.coords);if(this.type){for("linear"===this.type?e=t.createLinearGradient(r.x1,r.y1,r.x2,r.y2):"radial"===this.type&&(e=t.createRadialGradient(r.x1,r.y1,r.r1,r.x2,r.y2,r.r2)),i=0,n=this.colorStops.length;i<n;i++){var o=this.colorStops[i].color,s=this.colorStops[i].opacity,a=this.colorStops[i].offset;void 0!==s&&(o=new C.Color(o).setAlpha(s).toRgba()),e.addColorStop(a,o)}return e}}}),C.util.object.extend(C.Gradient,{
/* _FROM_SVG_START_ */
/**
       * Returns {@link fabric.Gradient} instance from an SVG element
       * @static
       * @memberOf fabric.Gradient
       * @param {SVGGradientElement} el SVG gradient element
       * @param {fabric.Object} instance
       * @param {String} opacityAttr A fill-opacity or stroke-opacity attribute to multiply to each stop's opacity.
       * @param {Object} svgOptions an object containing the size of the SVG in order to parse correctly gradients
       * that uses gradientUnits as 'userSpaceOnUse' and percentages.
       * @param {Object.number} viewBoxWidth width part of the viewBox attribute on svg
       * @param {Object.number} viewBoxHeight height part of the viewBox attribute on svg
       * @param {Object.number} width width part of the svg tag if viewBox is not specified
       * @param {Object.number} height height part of the svg tag if viewBox is not specified
       * @return {fabric.Gradient} Gradient instance
       * @see http://www.w3.org/TR/SVG/pservers.html#LinearGradientElement
       * @see http://www.w3.org/TR/SVG/pservers.html#RadialGradientElement
       */
fromElement:function(e,i,n,r){var o=parseFloat(n)/(/%$/.test(n)?100:1);o=o<0?0:o>1?1:o,isNaN(o)&&(o=1);var s,a,l,c,h=e.getElementsByTagName("stop"),u="userSpaceOnUse"===e.getAttribute("gradientUnits")?"pixels":"percentage",f=e.getAttribute("gradientTransform")||"",d=[],p=0,g=0;for("linearGradient"===e.nodeName||"LINEARGRADIENT"===e.nodeName?(s="linear",a=function(t){return{x1:t.getAttribute("x1")||0,y1:t.getAttribute("y1")||0,x2:t.getAttribute("x2")||"100%",y2:t.getAttribute("y2")||0}}(e)):(s="radial",a=function(t){return{x1:t.getAttribute("fx")||t.getAttribute("cx")||"50%",y1:t.getAttribute("fy")||t.getAttribute("cy")||"50%",r1:0,x2:t.getAttribute("cx")||"50%",y2:t.getAttribute("cy")||"50%",r2:t.getAttribute("r")||"50%"}}(e)),l=h.length;l--;)d.push(t(h[l],o));return c=C.parseTransformAttribute(f),function(t,e,i,n){var r,o;Object.keys(e).forEach((function(t){"Infinity"===(r=e[t])?o=1:"-Infinity"===r?o=0:(o=parseFloat(e[t],10),"string"==typeof r&&/^(\d+\.\d+)%|(\d+)%$/.test(r)&&(o*=.01,"pixels"===n&&("x1"!==t&&"x2"!==t&&"r2"!==t||(o*=i.viewBoxWidth||i.width),"y1"!==t&&"y2"!==t||(o*=i.viewBoxHeight||i.height)))),e[t]=o}))}(0,a,r,u),"pixels"===u&&(p=-i.left,g=-i.top),new C.Gradient({id:e.getAttribute("id"),type:s,coords:a,colorStops:d,gradientUnits:u,gradientTransform:c,offsetX:p,offsetY:g})}
/* _FROM_SVG_END_ */})}(),g=C.util.toFixed,C.Pattern=C.util.createClass(
/** @lends fabric.Pattern.prototype */
{
/**
         * Repeat property of a pattern (one of repeat, repeat-x, repeat-y or no-repeat)
         * @type String
         * @default
         */
repeat:"repeat",
/**
         * Pattern horizontal offset from object's left/top corner
         * @type Number
         * @default
         */
offsetX:0,
/**
         * Pattern vertical offset from object's left/top corner
         * @type Number
         * @default
         */
offsetY:0,
/**
         * crossOrigin value (one of "", "anonymous", "use-credentials")
         * @see https://developer.mozilla.org/en-US/docs/HTML/CORS_settings_attributes
         * @type String
         * @default
         */
crossOrigin:"",
/**
         * transform matrix to change the pattern, imported from svgs.
         * @type Array
         * @default
         */
patternTransform:null,
/**
         * Constructor
         * @param {Object} [options] Options object
         * @param {Function} [callback] function to invoke after callback init.
         * @return {fabric.Pattern} thisArg
         */
initialize:function(t,e){if(t||(t={}),this.id=C.Object.__uid++,this.setOptions(t),!t.source||t.source&&"string"!=typeof t.source)e&&e(this);else{var i=this;this.source=C.util.createImage(),C.util.loadImage(t.source,(function(t,n){i.source=t,e&&e(i,n)}),null,this.crossOrigin)}},
/**
         * Returns object representation of a pattern
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} Object representation of a pattern instance
         */
toObject:function(t){var e,i,n=C.Object.NUM_FRACTION_DIGITS;return"string"==typeof this.source.src?e=this.source.src:"object"==typeof this.source&&this.source.toDataURL&&(e=this.source.toDataURL()),i={type:"pattern",source:e,repeat:this.repeat,crossOrigin:this.crossOrigin,offsetX:g(this.offsetX,n),offsetY:g(this.offsetY,n),patternTransform:this.patternTransform?this.patternTransform.concat():null},C.util.populateWithProperties(this,i,t),i},
/* _TO_SVG_START_ */
/**
         * Returns SVG representation of a pattern
         * @param {fabric.Object} object
         * @return {String} SVG representation of a pattern
         */
toSVG:function(t){var e="function"==typeof this.source?this.source():this.source,i=e.width/t.width,n=e.height/t.height,r=this.offsetX/t.width,o=this.offsetY/t.height,s="";return"repeat-x"!==this.repeat&&"no-repeat"!==this.repeat||(n=1,o&&(n+=Math.abs(o))),"repeat-y"!==this.repeat&&"no-repeat"!==this.repeat||(i=1,r&&(i+=Math.abs(r))),e.src?s=e.src:e.toDataURL&&(s=e.toDataURL()),'<pattern id="SVGID_'+this.id+'" x="'+r+'" y="'+o+'" width="'+i+'" height="'+n+'">\n<image x="0" y="0" width="'+e.width+'" height="'+e.height+'" xlink:href="'+s+'"></image>\n</pattern>\n'},
/* _TO_SVG_END_ */
setOptions:function(t){for(var e in t)this[e]=t[e]},
/**
         * Returns an instance of CanvasPattern
         * @param {CanvasRenderingContext2D} ctx Context to create pattern
         * @return {CanvasPattern}
         */
toLive:function(t){var e=this.source;if(!e)return"";if(void 0!==e.src){if(!e.complete)return"";if(0===e.naturalWidth||0===e.naturalHeight)return""}return t.createPattern(e,this.repeat)}}),function(t){var e=t.fabric||(t.fabric={}),i=e.util.toFixed;e.Shadow?e.warn("fabric.Shadow is already defined."):(e.Shadow=e.util.createClass(
/** @lends fabric.Shadow.prototype */
{
/**
         * Shadow color
         * @type String
         * @default
         */
color:"rgb(0,0,0)",
/**
         * Shadow blur
         * @type Number
         */
blur:0,
/**
         * Shadow horizontal offset
         * @type Number
         * @default
         */
offsetX:0,
/**
         * Shadow vertical offset
         * @type Number
         * @default
         */
offsetY:0,
/**
         * Whether the shadow should affect stroke operations
         * @type Boolean
         * @default
         */
affectStroke:!1,
/**
         * Indicates whether toObject should include default values
         * @type Boolean
         * @default
         */
includeDefaultValues:!0,
/**
         * When `false`, the shadow will scale with the object.
         * When `true`, the shadow's offsetX, offsetY, and blur will not be affected by the object's scale.
         * default to false
         * @type Boolean
         * @default
         */
nonScaling:!1,
/**
         * Constructor
         * @param {Object|String} [options] Options object with any of color, blur, offsetX, offsetY properties or string (e.g. "rgba(0,0,0,0.2) 2px 2px 10px")
         * @return {fabric.Shadow} thisArg
         */
initialize:function(t){for(var i in"string"==typeof t&&(t=this._parseShadow(t)),t)this[i]=t[i];this.id=e.Object.__uid++},
/**
         * @private
         * @param {String} shadow Shadow value to parse
         * @return {Object} Shadow object with color, offsetX, offsetY and blur
         */
_parseShadow:function(t){var i=t.trim(),n=e.Shadow.reOffsetsAndBlur.exec(i)||[];return{color:(i.replace(e.Shadow.reOffsetsAndBlur,"")||"rgb(0,0,0)").trim(),offsetX:parseFloat(n[1],10)||0,offsetY:parseFloat(n[2],10)||0,blur:parseFloat(n[3],10)||0}},
/**
         * Returns a string representation of an instance
         * @see http://www.w3.org/TR/css-text-decor-3/#text-shadow
         * @return {String} Returns CSS3 text-shadow declaration
         */
toString:function(){return[this.offsetX,this.offsetY,this.blur,this.color].join("px ")},
/* _TO_SVG_START_ */
/**
         * Returns SVG representation of a shadow
         * @param {fabric.Object} object
         * @return {String} SVG representation of a shadow
         */
toSVG:function(t){var n=40,r=40,o=e.Object.NUM_FRACTION_DIGITS,s=e.util.rotateVector({x:this.offsetX,y:this.offsetY},e.util.degreesToRadians(-t.angle)),a=new e.Color(this.color);return t.width&&t.height&&(n=100*i((Math.abs(s.x)+this.blur)/t.width,o)+20,r=100*i((Math.abs(s.y)+this.blur)/t.height,o)+20),t.flipX&&(s.x*=-1),t.flipY&&(s.y*=-1),'<filter id="SVGID_'+this.id+'" y="-'+r+'%" height="'+(100+2*r)+'%" x="-'+n+'%" width="'+(100+2*n)+'%" >\n\t<feGaussianBlur in="SourceAlpha" stdDeviation="'+i(this.blur?this.blur/2:0,o)+'"></feGaussianBlur>\n\t<feOffset dx="'+i(s.x,o)+'" dy="'+i(s.y,o)+'" result="oBlur" ></feOffset>\n\t<feFlood flood-color="'+a.toRgb()+'" flood-opacity="'+a.getAlpha()+'"/>\n\t<feComposite in2="oBlur" operator="in" />\n\t<feMerge>\n\t\t<feMergeNode></feMergeNode>\n\t\t<feMergeNode in="SourceGraphic"></feMergeNode>\n\t</feMerge>\n</filter>\n'},
/* _TO_SVG_END_ */
/**
         * Returns object representation of a shadow
         * @return {Object} Object representation of a shadow instance
         */
toObject:function(){if(this.includeDefaultValues)return{color:this.color,blur:this.blur,offsetX:this.offsetX,offsetY:this.offsetY,affectStroke:this.affectStroke,nonScaling:this.nonScaling};var t={},i=e.Shadow.prototype;return["color","blur","offsetX","offsetY","affectStroke","nonScaling"].forEach((function(e){this[e]!==i[e]&&(t[e]=this[e])}),this),t}}),e.Shadow.reOffsetsAndBlur=/(?:\s|^)(-?\d+(?:\.\d*)?(?:px)?(?:\s?|$))?(-?\d+(?:\.\d*)?(?:px)?(?:\s?|$))?(\d+(?:\.\d*)?(?:px)?)?(?:\s?|$)(?:$|\s)/)}(t),function(){if(C.StaticCanvas)C.warn("fabric.StaticCanvas is already defined.");else{var t=C.util.object.extend,e=C.util.getElementOffset,i=C.util.removeFromArray,n=C.util.toFixed,r=C.util.transformPoint,o=C.util.invertTransform,s=C.util.getNodeCanvas,a=C.util.createCanvasElement,l=new Error("Could not initialize `canvas` element");C.StaticCanvas=C.util.createClass(C.CommonMethods,
/** @lends fabric.StaticCanvas.prototype */
{
/**
         * Constructor
         * @param {HTMLElement | String} el &lt;canvas> element to initialize instance on
         * @param {Object} [options] Options object
         * @return {Object} thisArg
         */
initialize:function(t,e){e||(e={}),this.renderAndResetBound=this.renderAndReset.bind(this),this.requestRenderAllBound=this.requestRenderAll.bind(this),this._initStatic(t,e)},
/**
         * Background color of canvas instance.
         * Should be set via {@link fabric.StaticCanvas#setBackgroundColor}.
         * @type {(String|fabric.Pattern)}
         * @default
         */
backgroundColor:"",
/**
         * Background image of canvas instance.
         * since 2.4.0 image caching is active, please when putting an image as background, add to the
         * canvas property a reference to the canvas it is on. Otherwise the image cannot detect the zoom
         * vale. As an alternative you can disable image objectCaching
         * @type fabric.Image
         * @default
         */
backgroundImage:null,
/**
         * Overlay color of canvas instance.
         * Should be set via {@link fabric.StaticCanvas#setOverlayColor}
         * @since 1.3.9
         * @type {(String|fabric.Pattern)}
         * @default
         */
overlayColor:"",
/**
         * Overlay image of canvas instance.
         * since 2.4.0 image caching is active, please when putting an image as overlay, add to the
         * canvas property a reference to the canvas it is on. Otherwise the image cannot detect the zoom
         * vale. As an alternative you can disable image objectCaching
         * @type fabric.Image
         * @default
         */
overlayImage:null,
/**
         * Indicates whether toObject/toDatalessObject should include default values
         * if set to false, takes precedence over the object value.
         * @type Boolean
         * @default
         */
includeDefaultValues:!0,
/**
         * Indicates whether objects' state should be saved
         * @type Boolean
         * @default
         */
stateful:!1,
/**
         * Indicates whether {@link fabric.Collection.add}, {@link fabric.Collection.insertAt} and {@link fabric.Collection.remove},
         * {@link fabric.StaticCanvas.moveTo}, {@link fabric.StaticCanvas.clear} and many more, should also re-render canvas.
         * Disabling this option will not give a performance boost when adding/removing a lot of objects to/from canvas at once
         * since the renders are quequed and executed one per frame.
         * Disabling is suggested anyway and managing the renders of the app manually is not a big effort ( canvas.requestRenderAll() )
         * Left default to true to do not break documentation and old app, fiddles.
         * @type Boolean
         * @default
         */
renderOnAddRemove:!0,
/**
         * Indicates whether object controls (borders/controls) are rendered above overlay image
         * @type Boolean
         * @default
         */
controlsAboveOverlay:!1,
/**
         * Indicates whether the browser can be scrolled when using a touchscreen and dragging on the canvas
         * @type Boolean
         * @default
         */
allowTouchScrolling:!1,
/**
         * Indicates whether this canvas will use image smoothing, this is on by default in browsers
         * @type Boolean
         * @default
         */
imageSmoothingEnabled:!0,
/**
         * The transformation (a Canvas 2D API transform matrix) which focuses the viewport
         * @type Array
         * @example <caption>Default transform</caption>
         * canvas.viewportTransform = [1, 0, 0, 1, 0, 0];
         * @example <caption>Scale by 70% and translate toward bottom-right by 50, without skewing</caption>
         * canvas.viewportTransform = [0.7, 0, 0, 0.7, 50, 50];
         * @default
         */
viewportTransform:C.iMatrix.concat(),
/**
         * if set to false background image is not affected by viewport transform
         * @since 1.6.3
         * @type Boolean
         * @default
         */
backgroundVpt:!0,
/**
         * if set to false overlya image is not affected by viewport transform
         * @since 1.6.3
         * @type Boolean
         * @default
         */
overlayVpt:!0,
/**
         * When true, canvas is scaled by devicePixelRatio for better rendering on retina screens
         * @type Boolean
         * @default
         */
enableRetinaScaling:!0,
/**
         * Describe canvas element extension over design
         * properties are tl,tr,bl,br.
         * if canvas is not zoomed/panned those points are the four corner of canvas
         * if canvas is viewportTransformed you those points indicate the extension
         * of canvas element in plain untrasformed coordinates
         * The coordinates get updated with @method calcViewportBoundaries.
         * @memberOf fabric.StaticCanvas.prototype
         */
vptCoords:{},
/**
         * Based on vptCoords and object.aCoords, skip rendering of objects that
         * are not included in current viewport.
         * May greatly help in applications with crowded canvas and use of zoom/pan
         * If One of the corner of the bounding box of the object is on the canvas
         * the objects get rendered.
         * @memberOf fabric.StaticCanvas.prototype
         * @type Boolean
         * @default
         */
skipOffscreen:!0,
/**
         * a fabricObject that, without stroke define a clipping area with their shape. filled in black
         * the clipPath object gets used when the canvas has rendered, and the context is placed in the
         * top left corner of the canvas.
         * clipPath will clip away controls, if you do not want this to happen use controlsAboveOverlay = true
         * @type fabric.Object
         */
clipPath:void 0,
/**
         * @private
         * @param {HTMLElement | String} el &lt;canvas> element to initialize instance on
         * @param {Object} [options] Options object
         */
_initStatic:function(t,e){var i=this.requestRenderAllBound;this._objects=[],this._createLowerCanvas(t),this._initOptions(e),this.interactive||this._initRetinaScaling(),e.overlayImage&&this.setOverlayImage(e.overlayImage,i),e.backgroundImage&&this.setBackgroundImage(e.backgroundImage,i),e.backgroundColor&&this.setBackgroundColor(e.backgroundColor,i),e.overlayColor&&this.setOverlayColor(e.overlayColor,i),this.calcOffset()},
/**
         * @private
         */
_isRetinaScaling:function(){return C.devicePixelRatio>1&&this.enableRetinaScaling},
/**
         * @private
         * @return {Number} retinaScaling if applied, otherwise 1;
         */
getRetinaScaling:function(){return this._isRetinaScaling()?Math.max(1,C.devicePixelRatio):1},
/**
         * @private
         */
_initRetinaScaling:function(){if(this._isRetinaScaling()){var t=C.devicePixelRatio;this.__initRetinaScaling(t,this.lowerCanvasEl,this.contextContainer),this.upperCanvasEl&&this.__initRetinaScaling(t,this.upperCanvasEl,this.contextTop)}},__initRetinaScaling:function(t,e,i){e.setAttribute("width",this.width*t),e.setAttribute("height",this.height*t),i.scale(t,t)},
/**
         * Calculates canvas element offset relative to the document
         * This method is also attached as "resize" event handler of window
         * @return {fabric.Canvas} instance
         * @chainable
         */
calcOffset:function(){return this._offset=e(this.lowerCanvasEl),this},
/**
         * Sets {@link fabric.StaticCanvas#overlayImage|overlay image} for this canvas
         * @param {(fabric.Image|String)} image fabric.Image instance or URL of an image to set overlay to
         * @param {Function} callback callback to invoke when image is loaded and set as an overlay
         * @param {Object} [options] Optional options to set for the {@link fabric.Image|overlay image}.
         * @return {fabric.Canvas} thisArg
         * @chainable
         * @see {@link http://jsfiddle.net/fabricjs/MnzHT/|jsFiddle demo}
         * @example <caption>Normal overlayImage with left/top = 0</caption>
         * canvas.setOverlayImage('http://fabricjs.com/assets/jail_cell_bars.png', canvas.renderAll.bind(canvas), {
         *   // Needed to position overlayImage at 0/0
         *   originX: 'left',
         *   originY: 'top'
         * });
         * @example <caption>overlayImage with different properties</caption>
         * canvas.setOverlayImage('http://fabricjs.com/assets/jail_cell_bars.png', canvas.renderAll.bind(canvas), {
         *   opacity: 0.5,
         *   angle: 45,
         *   left: 400,
         *   top: 400,
         *   originX: 'left',
         *   originY: 'top'
         * });
         * @example <caption>Stretched overlayImage #1 - width/height correspond to canvas width/height</caption>
         * fabric.Image.fromURL('http://fabricjs.com/assets/jail_cell_bars.png', function(img, isError) {
         *    img.set({width: canvas.width, height: canvas.height, originX: 'left', originY: 'top'});
         *    canvas.setOverlayImage(img, canvas.renderAll.bind(canvas));
         * });
         * @example <caption>Stretched overlayImage #2 - width/height correspond to canvas width/height</caption>
         * canvas.setOverlayImage('http://fabricjs.com/assets/jail_cell_bars.png', canvas.renderAll.bind(canvas), {
         *   width: canvas.width,
         *   height: canvas.height,
         *   // Needed to position overlayImage at 0/0
         *   originX: 'left',
         *   originY: 'top'
         * });
         * @example <caption>overlayImage loaded from cross-origin</caption>
         * canvas.setOverlayImage('http://fabricjs.com/assets/jail_cell_bars.png', canvas.renderAll.bind(canvas), {
         *   opacity: 0.5,
         *   angle: 45,
         *   left: 400,
         *   top: 400,
         *   originX: 'left',
         *   originY: 'top',
         *   crossOrigin: 'anonymous'
         * });
         */
setOverlayImage:function(t,e,i){return this.__setBgOverlayImage("overlayImage",t,e,i)},
/**
         * Sets {@link fabric.StaticCanvas#backgroundImage|background image} for this canvas
         * @param {(fabric.Image|String)} image fabric.Image instance or URL of an image to set background to
         * @param {Function} callback Callback to invoke when image is loaded and set as background
         * @param {Object} [options] Optional options to set for the {@link fabric.Image|background image}.
         * @return {fabric.Canvas} thisArg
         * @chainable
         * @see {@link http://jsfiddle.net/djnr8o7a/28/|jsFiddle demo}
         * @example <caption>Normal backgroundImage with left/top = 0</caption>
         * canvas.setBackgroundImage('http://fabricjs.com/assets/honey_im_subtle.png', canvas.renderAll.bind(canvas), {
         *   // Needed to position backgroundImage at 0/0
         *   originX: 'left',
         *   originY: 'top'
         * });
         * @example <caption>backgroundImage with different properties</caption>
         * canvas.setBackgroundImage('http://fabricjs.com/assets/honey_im_subtle.png', canvas.renderAll.bind(canvas), {
         *   opacity: 0.5,
         *   angle: 45,
         *   left: 400,
         *   top: 400,
         *   originX: 'left',
         *   originY: 'top'
         * });
         * @example <caption>Stretched backgroundImage #1 - width/height correspond to canvas width/height</caption>
         * fabric.Image.fromURL('http://fabricjs.com/assets/honey_im_subtle.png', function(img, isError) {
         *    img.set({width: canvas.width, height: canvas.height, originX: 'left', originY: 'top'});
         *    canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
         * });
         * @example <caption>Stretched backgroundImage #2 - width/height correspond to canvas width/height</caption>
         * canvas.setBackgroundImage('http://fabricjs.com/assets/honey_im_subtle.png', canvas.renderAll.bind(canvas), {
         *   width: canvas.width,
         *   height: canvas.height,
         *   // Needed to position backgroundImage at 0/0
         *   originX: 'left',
         *   originY: 'top'
         * });
         * @example <caption>backgroundImage loaded from cross-origin</caption>
         * canvas.setBackgroundImage('http://fabricjs.com/assets/honey_im_subtle.png', canvas.renderAll.bind(canvas), {
         *   opacity: 0.5,
         *   angle: 45,
         *   left: 400,
         *   top: 400,
         *   originX: 'left',
         *   originY: 'top',
         *   crossOrigin: 'anonymous'
         * });
         */
// TODO: fix stretched examples
setBackgroundImage:function(t,e,i){return this.__setBgOverlayImage("backgroundImage",t,e,i)},
/**
         * Sets {@link fabric.StaticCanvas#overlayColor|foreground color} for this canvas
         * @param {(String|fabric.Pattern)} overlayColor Color or pattern to set foreground color to
         * @param {Function} callback Callback to invoke when foreground color is set
         * @return {fabric.Canvas} thisArg
         * @chainable
         * @see {@link http://jsfiddle.net/fabricjs/pB55h/|jsFiddle demo}
         * @example <caption>Normal overlayColor - color value</caption>
         * canvas.setOverlayColor('rgba(255, 73, 64, 0.6)', canvas.renderAll.bind(canvas));
         * @example <caption>fabric.Pattern used as overlayColor</caption>
         * canvas.setOverlayColor({
         *   source: 'http://fabricjs.com/assets/escheresque_ste.png'
         * }, canvas.renderAll.bind(canvas));
         * @example <caption>fabric.Pattern used as overlayColor with repeat and offset</caption>
         * canvas.setOverlayColor({
         *   source: 'http://fabricjs.com/assets/escheresque_ste.png',
         *   repeat: 'repeat',
         *   offsetX: 200,
         *   offsetY: 100
         * }, canvas.renderAll.bind(canvas));
         */
setOverlayColor:function(t,e){return this.__setBgOverlayColor("overlayColor",t,e)},
/**
         * Sets {@link fabric.StaticCanvas#backgroundColor|background color} for this canvas
         * @param {(String|fabric.Pattern)} backgroundColor Color or pattern to set background color to
         * @param {Function} callback Callback to invoke when background color is set
         * @return {fabric.Canvas} thisArg
         * @chainable
         * @see {@link http://jsfiddle.net/fabricjs/hXzvk/|jsFiddle demo}
         * @example <caption>Normal backgroundColor - color value</caption>
         * canvas.setBackgroundColor('rgba(255, 73, 64, 0.6)', canvas.renderAll.bind(canvas));
         * @example <caption>fabric.Pattern used as backgroundColor</caption>
         * canvas.setBackgroundColor({
         *   source: 'http://fabricjs.com/assets/escheresque_ste.png'
         * }, canvas.renderAll.bind(canvas));
         * @example <caption>fabric.Pattern used as backgroundColor with repeat and offset</caption>
         * canvas.setBackgroundColor({
         *   source: 'http://fabricjs.com/assets/escheresque_ste.png',
         *   repeat: 'repeat',
         *   offsetX: 200,
         *   offsetY: 100
         * }, canvas.renderAll.bind(canvas));
         */
setBackgroundColor:function(t,e){return this.__setBgOverlayColor("backgroundColor",t,e)},
/**
         * @private
         * @param {String} property Property to set ({@link fabric.StaticCanvas#backgroundImage|backgroundImage}
         * or {@link fabric.StaticCanvas#overlayImage|overlayImage})
         * @param {(fabric.Image|String|null)} image fabric.Image instance, URL of an image or null to set background or overlay to
         * @param {Function} callback Callback to invoke when image is loaded and set as background or overlay. The first argument is the created image, the second argument is a flag indicating whether an error occurred or not.
         * @param {Object} [options] Optional options to set for the {@link fabric.Image|image}.
         */
__setBgOverlayImage:function(t,e,i,n){return"string"==typeof e?C.util.loadImage(e,(function(e,r){if(e){var o=new C.Image(e,n);this[t]=o,o.canvas=this}i&&i(e,r)}),this,n&&n.crossOrigin):(n&&e.setOptions(n),this[t]=e,e&&(e.canvas=this),i&&i(e,!1)),this},
/**
         * @private
         * @param {String} property Property to set ({@link fabric.StaticCanvas#backgroundColor|backgroundColor}
         * or {@link fabric.StaticCanvas#overlayColor|overlayColor})
         * @param {(Object|String|null)} color Object with pattern information, color value or null
         * @param {Function} [callback] Callback is invoked when color is set
         */
__setBgOverlayColor:function(t,e,i){return this[t]=e,this._initGradient(e,t),this._initPattern(e,t,i),this},
/**
         * @private
         */
_createCanvasElement:function(){var t=a();if(!t)throw l;if(t.style||(t.style={}),void 0===t.getContext)throw l;return t},
/**
         * @private
         * @param {Object} [options] Options object
         */
_initOptions:function(t){var e=this.lowerCanvasEl;this._setOptions(t),this.width=this.width||parseInt(e.width,10)||0,this.height=this.height||parseInt(e.height,10)||0,this.lowerCanvasEl.style&&(e.width=this.width,e.height=this.height,e.style.width=this.width+"px",e.style.height=this.height+"px",this.viewportTransform=this.viewportTransform.slice())},
/**
         * Creates a bottom canvas
         * @private
         * @param {HTMLElement} [canvasEl]
         */
_createLowerCanvas:function(t){t&&t.getContext?this.lowerCanvasEl=t:this.lowerCanvasEl=C.util.getById(t)||this._createCanvasElement(),C.util.addClass(this.lowerCanvasEl,"lower-canvas"),this._originalCanvasStyle=this.lowerCanvasEl.style,this.interactive&&this._applyCanvasStyle(this.lowerCanvasEl),this.contextContainer=this.lowerCanvasEl.getContext("2d")},
/**
         * Returns canvas width (in px)
         * @return {Number}
         */
getWidth:function(){return this.width},
/**
         * Returns canvas height (in px)
         * @return {Number}
         */
getHeight:function(){return this.height},
/**
         * Sets width of this canvas instance
         * @param {Number|String} value                         Value to set width to
         * @param {Object}        [options]                     Options object
         * @param {Boolean}       [options.backstoreOnly=false] Set the given dimensions only as canvas backstore dimensions
         * @param {Boolean}       [options.cssOnly=false]       Set the given dimensions only as css dimensions
         * @return {fabric.Canvas} instance
         * @chainable true
         */
setWidth:function(t,e){return this.setDimensions({width:t},e)},
/**
         * Sets height of this canvas instance
         * @param {Number|String} value                         Value to set height to
         * @param {Object}        [options]                     Options object
         * @param {Boolean}       [options.backstoreOnly=false] Set the given dimensions only as canvas backstore dimensions
         * @param {Boolean}       [options.cssOnly=false]       Set the given dimensions only as css dimensions
         * @return {fabric.Canvas} instance
         * @chainable true
         */
setHeight:function(t,e){return this.setDimensions({height:t},e)},
/**
         * Sets dimensions (width, height) of this canvas instance. when options.cssOnly flag active you should also supply the unit of measure (px/%/em)
         * @param {Object}        dimensions                    Object with width/height properties
         * @param {Number|String} [dimensions.width]            Width of canvas element
         * @param {Number|String} [dimensions.height]           Height of canvas element
         * @param {Object}        [options]                     Options object
         * @param {Boolean}       [options.backstoreOnly=false] Set the given dimensions only as canvas backstore dimensions
         * @param {Boolean}       [options.cssOnly=false]       Set the given dimensions only as css dimensions
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
setDimensions:function(t,e){var i;for(var n in e=e||{},t)i=t[n],e.cssOnly||(this._setBackstoreDimension(n,t[n]),i+="px",this.hasLostContext=!0),e.backstoreOnly||this._setCssDimension(n,i);return this._isCurrentlyDrawing&&this.freeDrawingBrush&&this.freeDrawingBrush._setBrushStyles(this.contextTop),this._initRetinaScaling(),this.calcOffset(),e.cssOnly||this.requestRenderAll(),this},
/**
         * Helper for setting width/height
         * @private
         * @param {String} prop property (width|height)
         * @param {Number} value value to set property to
         * @return {fabric.Canvas} instance
         * @chainable true
         */
_setBackstoreDimension:function(t,e){return this.lowerCanvasEl[t]=e,this.upperCanvasEl&&(this.upperCanvasEl[t]=e),this.cacheCanvasEl&&(this.cacheCanvasEl[t]=e),this[t]=e,this},
/**
         * Helper for setting css width/height
         * @private
         * @param {String} prop property (width|height)
         * @param {String} value value to set property to
         * @return {fabric.Canvas} instance
         * @chainable true
         */
_setCssDimension:function(t,e){return this.lowerCanvasEl.style[t]=e,this.upperCanvasEl&&(this.upperCanvasEl.style[t]=e),this.wrapperEl&&(this.wrapperEl.style[t]=e),this},
/**
         * Returns canvas zoom level
         * @return {Number}
         */
getZoom:function(){return this.viewportTransform[0]},
/**
         * Sets viewport transformation of this canvas instance
         * @param {Array} vpt a Canvas 2D API transform matrix
         * @return {fabric.Canvas} instance
         * @chainable true
         */
setViewportTransform:function(t){var e,i,n,r=this._activeObject,o=this.backgroundImage,s=this.overlayImage;for(this.viewportTransform=t,i=0,n=this._objects.length;i<n;i++)(e=this._objects[i]).group||e.setCoords(!0);return r&&r.setCoords(),o&&o.setCoords(!0),s&&s.setCoords(!0),this.calcViewportBoundaries(),this.renderOnAddRemove&&this.requestRenderAll(),this},
/**
         * Sets zoom level of this canvas instance, the zoom centered around point
         * meaning that following zoom to point with the same point will have the visual
         * effect of the zoom originating from that point. The point won't move.
         * It has nothing to do with canvas center or visual center of the viewport.
         * @param {fabric.Point} point to zoom with respect to
         * @param {Number} value to set zoom to, less than 1 zooms out
         * @return {fabric.Canvas} instance
         * @chainable true
         */
zoomToPoint:function(t,e){var i=t,n=this.viewportTransform.slice(0);t=r(t,o(this.viewportTransform)),n[0]=e,n[3]=e;var s=r(t,n);return n[4]+=i.x-s.x,n[5]+=i.y-s.y,this.setViewportTransform(n)},
/**
         * Sets zoom level of this canvas instance
         * @param {Number} value to set zoom to, less than 1 zooms out
         * @return {fabric.Canvas} instance
         * @chainable true
         */
setZoom:function(t){return this.zoomToPoint(new C.Point(0,0),t),this},
/**
         * Pan viewport so as to place point at top left corner of canvas
         * @param {fabric.Point} point to move to
         * @return {fabric.Canvas} instance
         * @chainable true
         */
absolutePan:function(t){var e=this.viewportTransform.slice(0);return e[4]=-t.x,e[5]=-t.y,this.setViewportTransform(e)},
/**
         * Pans viewpoint relatively
         * @param {fabric.Point} point (position vector) to move by
         * @return {fabric.Canvas} instance
         * @chainable true
         */
relativePan:function(t){return this.absolutePan(new C.Point(-t.x-this.viewportTransform[4],-t.y-this.viewportTransform[5]))},
/**
         * Returns &lt;canvas> element corresponding to this instance
         * @return {HTMLCanvasElement}
         */
getElement:function(){return this.lowerCanvasEl},
/**
         * @private
         * @param {fabric.Object} obj Object that was added
         */
_onObjectAdded:function(t){this.stateful&&t.setupState(),t._set("canvas",this),t.setCoords(),this.fire("object:added",{target:t}),t.fire("added")},
/**
         * @private
         * @param {fabric.Object} obj Object that was removed
         */
_onObjectRemoved:function(t){this.fire("object:removed",{target:t}),t.fire("removed"),delete t.canvas},
/**
         * Clears specified context of canvas element
         * @param {CanvasRenderingContext2D} ctx Context to clear
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
clearContext:function(t){return t.clearRect(0,0,this.width,this.height),this},
/**
         * Returns context of canvas where objects are drawn
         * @return {CanvasRenderingContext2D}
         */
getContext:function(){return this.contextContainer},
/**
         * Clears all contexts (background, main, top) of an instance
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
clear:function(){return this.remove.apply(this,this.getObjects()),this.backgroundImage=null,this.overlayImage=null,this.backgroundColor="",this.overlayColor="",this._hasITextHandlers&&(this.off("mouse:up",this._mouseUpITextHandler),this._iTextInstances=null,this._hasITextHandlers=!1),this.clearContext(this.contextContainer),this.fire("canvas:cleared"),this.renderOnAddRemove&&this.requestRenderAll(),this},
/**
         * Renders the canvas
         * @return {fabric.Canvas} instance
         * @chainable
         */
renderAll:function(){var t=this.contextContainer;return this.renderCanvas(t,this._objects),this},
/**
         * Function created to be instance bound at initialization
         * used in requestAnimationFrame rendering
         * Let the fabricJS call it. If you call it manually you could have more
         * animationFrame stacking on to of each other
         * for an imperative rendering, use canvas.renderAll
         * @private
         * @return {fabric.Canvas} instance
         * @chainable
         */
renderAndReset:function(){this.isRendering=0,this.renderAll()},
/**
         * Append a renderAll request to next animation frame.
         * unless one is already in progress, in that case nothing is done
         * a boolean flag will avoid appending more.
         * @return {fabric.Canvas} instance
         * @chainable
         */
requestRenderAll:function(){return this.isRendering||(this.isRendering=C.util.requestAnimFrame(this.renderAndResetBound)),this},
/**
         * Calculate the position of the 4 corner of canvas with current viewportTransform.
         * helps to determinate when an object is in the current rendering viewport using
         * object absolute coordinates ( aCoords )
         * @return {Object} points.tl
         * @chainable
         */
calcViewportBoundaries:function(){var t={},e=this.width,i=this.height,n=o(this.viewportTransform);return t.tl=r({x:0,y:0},n),t.br=r({x:e,y:i},n),t.tr=new C.Point(t.br.x,t.tl.y),t.bl=new C.Point(t.tl.x,t.br.y),this.vptCoords=t,t},cancelRequestedRender:function(){this.isRendering&&(C.util.cancelAnimFrame(this.isRendering),this.isRendering=0)},
/**
         * Renders background, objects, overlay and controls.
         * @param {CanvasRenderingContext2D} ctx
         * @param {Array} objects to render
         * @return {fabric.Canvas} instance
         * @chainable
         */
renderCanvas:function(t,e){var i=this.viewportTransform,n=this.clipPath;this.cancelRequestedRender(),this.calcViewportBoundaries(),this.clearContext(t),C.util.setImageSmoothing(t,this.imageSmoothingEnabled),this.fire("before:render",{ctx:t}),this._renderBackground(t),t.save(),t.transform(i[0],i[1],i[2],i[3],i[4],i[5]),this._renderObjects(t,e),t.restore(),!this.controlsAboveOverlay&&this.interactive&&this.drawControls(t),n&&(n.canvas=this,n.shouldCache(),n._transformDone=!0,n.renderCache({forClipping:!0}),this.drawClipPathOnCanvas(t)),this._renderOverlay(t),this.controlsAboveOverlay&&this.interactive&&this.drawControls(t),this.fire("after:render",{ctx:t})},
/**
         * Paint the cached clipPath on the lowerCanvasEl
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
drawClipPathOnCanvas:function(t){var e=this.viewportTransform,i=this.clipPath;t.save(),t.transform(e[0],e[1],e[2],e[3],e[4],e[5]),t.globalCompositeOperation="destination-in",i.transform(t),t.scale(1/i.zoomX,1/i.zoomY),t.drawImage(i._cacheCanvas,-i.cacheTranslationX,-i.cacheTranslationY),t.restore()},
/**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {Array} objects to render
         */
_renderObjects:function(t,e){var i,n;for(i=0,n=e.length;i<n;++i)e[i]&&e[i].render(t)},
/**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {string} property 'background' or 'overlay'
         */
_renderBackgroundOrOverlay:function(t,e){var i=this[e+"Color"],n=this[e+"Image"],r=this.viewportTransform,o=this[e+"Vpt"];if(i||n){if(i){t.save(),t.beginPath(),t.moveTo(0,0),t.lineTo(this.width,0),t.lineTo(this.width,this.height),t.lineTo(0,this.height),t.closePath(),t.fillStyle=i.toLive?i.toLive(t,this):i,o&&t.transform(r[0],r[1],r[2],r[3],r[4],r[5]),t.transform(1,0,0,1,i.offsetX||0,i.offsetY||0);var s=i.gradientTransform||i.patternTransform;s&&t.transform(s[0],s[1],s[2],s[3],s[4],s[5]),t.fill(),t.restore()}n&&(t.save(),o&&t.transform(r[0],r[1],r[2],r[3],r[4],r[5]),n.render(t),t.restore())}},
/**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
_renderBackground:function(t){this._renderBackgroundOrOverlay(t,"background")},
/**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
_renderOverlay:function(t){this._renderBackgroundOrOverlay(t,"overlay")},
/**
         * Returns coordinates of a center of canvas.
         * Returned value is an object with top and left properties
         * @return {Object} object with "top" and "left" number values
         * @deprecated migrate to `getCenterPoint`
         */
getCenter:function(){return{top:this.height/2,left:this.width/2}},
/**
         * Returns coordinates of a center of canvas.
         * @return {fabric.Point} 
         */
getCenterPoint:function(){return new C.Point(this.width/2,this.height/2)},
/**
         * Centers object horizontally in the canvas
         * @param {fabric.Object} object Object to center horizontally
         * @return {fabric.Canvas} thisArg
         */
centerObjectH:function(t){return this._centerObject(t,new C.Point(this.getCenterPoint().x,t.getCenterPoint().y))},
/**
         * Centers object vertically in the canvas
         * @param {fabric.Object} object Object to center vertically
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
centerObjectV:function(t){return this._centerObject(t,new C.Point(t.getCenterPoint().x,this.getCenterPoint().y))},
/**
         * Centers object vertically and horizontally in the canvas
         * @param {fabric.Object} object Object to center vertically and horizontally
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
centerObject:function(t){var e=this.getCenterPoint();return this._centerObject(t,e)},
/**
         * Centers object vertically and horizontally in the viewport
         * @param {fabric.Object} object Object to center vertically and horizontally
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
viewportCenterObject:function(t){var e=this.getVpCenter();return this._centerObject(t,e)},
/**
         * Centers object horizontally in the viewport, object.top is unchanged
         * @param {fabric.Object} object Object to center vertically and horizontally
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
viewportCenterObjectH:function(t){var e=this.getVpCenter();return this._centerObject(t,new C.Point(e.x,t.getCenterPoint().y)),this},
/**
         * Centers object Vertically in the viewport, object.top is unchanged
         * @param {fabric.Object} object Object to center vertically and horizontally
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
viewportCenterObjectV:function(t){var e=this.getVpCenter();return this._centerObject(t,new C.Point(t.getCenterPoint().x,e.y))},
/**
         * Calculate the point in canvas that correspond to the center of actual viewport.
         * @return {fabric.Point} vpCenter, viewport center
         * @chainable
         */
getVpCenter:function(){var t=this.getCenterPoint(),e=o(this.viewportTransform);return r(t,e)},
/**
         * @private
         * @param {fabric.Object} object Object to center
         * @param {fabric.Point} center Center point
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
_centerObject:function(t,e){return t.setPositionByOrigin(e,"center","center"),t.setCoords(),this.renderOnAddRemove&&this.requestRenderAll(),this},
/**
         * Returns dataless JSON representation of canvas
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {String} json string
         */
toDatalessJSON:function(t){return this.toDatalessObject(t)},
/**
         * Returns object representation of canvas
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} object representation of an instance
         */
toObject:function(t){return this._toObjectMethod("toObject",t)},
/**
         * Returns dataless object representation of canvas
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} object representation of an instance
         */
toDatalessObject:function(t){return this._toObjectMethod("toDatalessObject",t)},
/**
         * @private
         */
_toObjectMethod:function(e,i){var n=this.clipPath,r={version:C.version,objects:this._toObjects(e,i)};return n&&!n.excludeFromExport&&(r.clipPath=this._toObject(this.clipPath,e,i)),t(r,this.__serializeBgOverlay(e,i)),C.util.populateWithProperties(this,r,i),r},
/**
         * @private
         */
_toObjects:function(t,e){return this._objects.filter((function(t){return!t.excludeFromExport})).map((function(i){return this._toObject(i,t,e)}),this)},
/**
         * @private
         */
_toObject:function(t,e,i){var n;this.includeDefaultValues||(n=t.includeDefaultValues,t.includeDefaultValues=!1);var r=t[e](i);return this.includeDefaultValues||(t.includeDefaultValues=n),r},
/**
         * @private
         */
__serializeBgOverlay:function(t,e){var i={},n=this.backgroundImage,r=this.overlayImage,o=this.backgroundColor,s=this.overlayColor;return o&&o.toObject?o.excludeFromExport||(i.background=o.toObject(e)):o&&(i.background=o),s&&s.toObject?s.excludeFromExport||(i.overlay=s.toObject(e)):s&&(i.overlay=s),n&&!n.excludeFromExport&&(i.backgroundImage=this._toObject(n,t,e)),r&&!r.excludeFromExport&&(i.overlayImage=this._toObject(r,t,e)),i},
/* _TO_SVG_START_ */
/**
         * When true, getSvgTransform() will apply the StaticCanvas.viewportTransform to the SVG transformation. When true,
         * a zoomed canvas will then produce zoomed SVG output.
         * @type Boolean
         * @default
         */
svgViewportTransformation:!0,
/**
         * Returns SVG representation of canvas
         * @function
         * @param {Object} [options] Options object for SVG output
         * @param {Boolean} [options.suppressPreamble=false] If true xml tag is not included
         * @param {Object} [options.viewBox] SVG viewbox object
         * @param {Number} [options.viewBox.x] x-coordinate of viewbox
         * @param {Number} [options.viewBox.y] y-coordinate of viewbox
         * @param {Number} [options.viewBox.width] Width of viewbox
         * @param {Number} [options.viewBox.height] Height of viewbox
         * @param {String} [options.encoding=UTF-8] Encoding of SVG output
         * @param {String} [options.width] desired width of svg with or without units
         * @param {String} [options.height] desired height of svg with or without units
         * @param {Function} [reviver] Method for further parsing of svg elements, called after each fabric object converted into svg representation.
         * @return {String} SVG string
         * @tutorial {@link http://fabricjs.com/fabric-intro-part-3#serialization}
         * @see {@link http://jsfiddle.net/fabricjs/jQ3ZZ/|jsFiddle demo}
         * @example <caption>Normal SVG output</caption>
         * var svg = canvas.toSVG();
         * @example <caption>SVG output without preamble (without &lt;?xml ../>)</caption>
         * var svg = canvas.toSVG({suppressPreamble: true});
         * @example <caption>SVG output with viewBox attribute</caption>
         * var svg = canvas.toSVG({
         *   viewBox: {
         *     x: 100,
         *     y: 100,
         *     width: 200,
         *     height: 300
         *   }
         * });
         * @example <caption>SVG output with different encoding (default: UTF-8)</caption>
         * var svg = canvas.toSVG({encoding: 'ISO-8859-1'});
         * @example <caption>Modify SVG output with reviver function</caption>
         * var svg = canvas.toSVG(null, function(svg) {
         *   return svg.replace('stroke-dasharray: ; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; ', '');
         * });
         */
toSVG:function(t,e){t||(t={}),t.reviver=e;var i=[];return this._setSVGPreamble(i,t),this._setSVGHeader(i,t),this.clipPath&&i.push('<g clip-path="url(#'+this.clipPath.clipPathId+')" >\n'),this._setSVGBgOverlayColor(i,"background"),this._setSVGBgOverlayImage(i,"backgroundImage",e),this._setSVGObjects(i,e),this.clipPath&&i.push("</g>\n"),this._setSVGBgOverlayColor(i,"overlay"),this._setSVGBgOverlayImage(i,"overlayImage",e),i.push("</svg>"),i.join("")},
/**
         * @private
         */
_setSVGPreamble:function(t,e){e.suppressPreamble||t.push('<?xml version="1.0" encoding="',e.encoding||"UTF-8",'" standalone="no" ?>\n','<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" ','"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n')},
/**
         * @private
         */
_setSVGHeader:function(t,e){var i,r=e.width||this.width,o=e.height||this.height,s='viewBox="0 0 '+this.width+" "+this.height+'" ',a=C.Object.NUM_FRACTION_DIGITS;e.viewBox?s='viewBox="'+e.viewBox.x+" "+e.viewBox.y+" "+e.viewBox.width+" "+e.viewBox.height+'" ':this.svgViewportTransformation&&(i=this.viewportTransform,s='viewBox="'+n(-i[4]/i[0],a)+" "+n(-i[5]/i[3],a)+" "+n(this.width/i[0],a)+" "+n(this.height/i[3],a)+'" '),t.push("<svg ",'xmlns="http://www.w3.org/2000/svg" ','xmlns:xlink="http://www.w3.org/1999/xlink" ','version="1.1" ','width="',r,'" ','height="',o,'" ',s,'xml:space="preserve">\n',"<desc>Created with Fabric.js ",C.version,"</desc>\n","<defs>\n",this.createSVGFontFacesMarkup(),this.createSVGRefElementsMarkup(),this.createSVGClipPathMarkup(e),"</defs>\n")},createSVGClipPathMarkup:function(t){var e=this.clipPath;return e?(e.clipPathId="CLIPPATH_"+C.Object.__uid++,'<clipPath id="'+e.clipPathId+'" >\n'+this.clipPath.toClipPathSVG(t.reviver)+"</clipPath>\n"):""},
/**
         * Creates markup containing SVG referenced elements like patterns, gradients etc.
         * @return {String}
         */
createSVGRefElementsMarkup:function(){var t=this;return["background","overlay"].map((function(e){var i=t[e+"Color"];if(i&&i.toLive){var n=t[e+"Vpt"],r=t.viewportTransform,o={width:t.width/(n?r[0]:1),height:t.height/(n?r[3]:1)};return i.toSVG(o,{additionalTransform:n?C.util.matrixToSVG(r):""})}})).join("")},
/**
         * Creates markup containing SVG font faces,
         * font URLs for font faces must be collected by developers
         * and are not extracted from the DOM by fabricjs
         * @param {Array} objects Array of fabric objects
         * @return {String}
         */
createSVGFontFacesMarkup:function(){var t,e,i,n,r,o,s,a,l="",c={},h=C.fontPaths,u=[];for(this._objects.forEach((function t(e){u.push(e),e._objects&&e._objects.forEach(t)})),s=0,a=u.length;s<a;s++)if(e=(t=u[s]).fontFamily,-1!==t.type.indexOf("text")&&!c[e]&&h[e]&&(c[e]=!0,t.styles))for(r in i=t.styles)for(o in n=i[r])!c[e=n[o].fontFamily]&&h[e]&&(c[e]=!0);for(var f in c)l+=["\t\t@font-face {\n","\t\t\tfont-family: '",f,"';\n","\t\t\tsrc: url('",h[f],"');\n","\t\t}\n"].join("");return l&&(l=['\t<style type="text/css">',"<![CDATA[\n",l,"]]>","</style>\n"].join("")),l},
/**
         * @private
         */
_setSVGObjects:function(t,e){var i,n,r,o=this._objects;for(n=0,r=o.length;n<r;n++)(i=o[n]).excludeFromExport||this._setSVGObject(t,i,e)},
/**
         * @private
         */
_setSVGObject:function(t,e,i){t.push(e.toSVG(i))},
/**
         * @private
         */
_setSVGBgOverlayImage:function(t,e,i){this[e]&&!this[e].excludeFromExport&&this[e].toSVG&&t.push(this[e].toSVG(i))},
/**
         * @private
         */
_setSVGBgOverlayColor:function(t,e){var i=this[e+"Color"],n=this.viewportTransform,r=this.width,o=this.height;if(i)if(i.toLive){var s=i.repeat,a=C.util.invertTransform(n),l=this[e+"Vpt"]?C.util.matrixToSVG(a):"";t.push('<rect transform="'+l+" translate(",r/2,",",o/2,')"',' x="',i.offsetX-r/2,'" y="',i.offsetY-o/2,'" ','width="',"repeat-y"===s||"no-repeat"===s?i.source.width:r,'" height="',"repeat-x"===s||"no-repeat"===s?i.source.height:o,'" fill="url(#SVGID_'+i.id+')"',"></rect>\n")}else t.push('<rect x="0" y="0" width="100%" height="100%" ','fill="',i,'"',"></rect>\n")},
/* _TO_SVG_END_ */
/**
         * Moves an object or the objects of a multiple selection
         * to the bottom of the stack of drawn objects
         * @param {fabric.Object} object Object to send to back
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
sendToBack:function(t){if(!t)return this;var e,n,r,o=this._activeObject;if(t===o&&"activeSelection"===t.type)for(e=(r=o._objects).length;e--;)n=r[e],i(this._objects,n),this._objects.unshift(n);else i(this._objects,t),this._objects.unshift(t);return this.renderOnAddRemove&&this.requestRenderAll(),this},
/**
         * Moves an object or the objects of a multiple selection
         * to the top of the stack of drawn objects
         * @param {fabric.Object} object Object to send
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
bringToFront:function(t){if(!t)return this;var e,n,r,o=this._activeObject;if(t===o&&"activeSelection"===t.type)for(r=o._objects,e=0;e<r.length;e++)n=r[e],i(this._objects,n),this._objects.push(n);else i(this._objects,t),this._objects.push(t);return this.renderOnAddRemove&&this.requestRenderAll(),this},
/**
         * Moves an object or a selection down in stack of drawn objects
         * An optional parameter, intersecting allows to move the object in behind
         * the first intersecting object. Where intersection is calculated with
         * bounding box. If no intersection is found, there will not be change in the
         * stack.
         * @param {fabric.Object} object Object to send
         * @param {Boolean} [intersecting] If `true`, send object behind next lower intersecting object
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
sendBackwards:function(t,e){if(!t)return this;var n,r,o,s,a,l=this._activeObject,c=0;if(t===l&&"activeSelection"===t.type)for(a=l._objects,n=0;n<a.length;n++)r=a[n],(o=this._objects.indexOf(r))>0+c&&(s=o-1,i(this._objects,r),this._objects.splice(s,0,r)),c++;else 0!==(o=this._objects.indexOf(t))&&(s=this._findNewLowerIndex(t,o,e),i(this._objects,t),this._objects.splice(s,0,t));return this.renderOnAddRemove&&this.requestRenderAll(),this},
/**
         * @private
         */
_findNewLowerIndex:function(t,e,i){var n,r;if(i)for(n=e,r=e-1;r>=0;--r){if(t.intersectsWithObject(this._objects[r])||t.isContainedWithinObject(this._objects[r])||this._objects[r].isContainedWithinObject(t)){n=r;break}}else n=e-1;return n},
/**
         * Moves an object or a selection up in stack of drawn objects
         * An optional parameter, intersecting allows to move the object in front
         * of the first intersecting object. Where intersection is calculated with
         * bounding box. If no intersection is found, there will not be change in the
         * stack.
         * @param {fabric.Object} object Object to send
         * @param {Boolean} [intersecting] If `true`, send object in front of next upper intersecting object
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
bringForward:function(t,e){if(!t)return this;var n,r,o,s,a,l=this._activeObject,c=0;if(t===l&&"activeSelection"===t.type)for(n=(a=l._objects).length;n--;)r=a[n],(o=this._objects.indexOf(r))<this._objects.length-1-c&&(s=o+1,i(this._objects,r),this._objects.splice(s,0,r)),c++;else(o=this._objects.indexOf(t))!==this._objects.length-1&&(s=this._findNewUpperIndex(t,o,e),i(this._objects,t),this._objects.splice(s,0,t));return this.renderOnAddRemove&&this.requestRenderAll(),this},
/**
         * @private
         */
_findNewUpperIndex:function(t,e,i){var n,r,o;if(i)for(n=e,r=e+1,o=this._objects.length;r<o;++r){if(t.intersectsWithObject(this._objects[r])||t.isContainedWithinObject(this._objects[r])||this._objects[r].isContainedWithinObject(t)){n=r;break}}else n=e+1;return n},
/**
         * Moves an object to specified level in stack of drawn objects
         * @param {fabric.Object} object Object to send
         * @param {Number} index Position to move to
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
moveTo:function(t,e){return i(this._objects,t),this._objects.splice(e,0,t),this.renderOnAddRemove&&this.requestRenderAll()},
/**
         * Clears a canvas element and dispose objects
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
dispose:function(){return this.isRendering&&(C.util.cancelAnimFrame(this.isRendering),this.isRendering=0),this.forEachObject((function(t){t.dispose&&t.dispose()})),this._objects=[],this.backgroundImage&&this.backgroundImage.dispose&&this.backgroundImage.dispose(),this.backgroundImage=null,this.overlayImage&&this.overlayImage.dispose&&this.overlayImage.dispose(),this.overlayImage=null,this._iTextInstances=null,this.contextContainer=null,this.lowerCanvasEl.classList.remove("lower-canvas"),C.util.setStyle(this.lowerCanvasEl,this._originalCanvasStyle),delete this._originalCanvasStyle,this.lowerCanvasEl.setAttribute("width",this.width),this.lowerCanvasEl.setAttribute("height",this.height),C.util.cleanUpJsdomNode(this.lowerCanvasEl),this.lowerCanvasEl=void 0,this},
/**
         * Returns a string representation of an instance
         * @return {String} string representation of an instance
         */
toString:function(){return"#<fabric.Canvas ("+this.complexity()+"): { objects: "+this._objects.length+" }>"}}),t(C.StaticCanvas.prototype,C.Observable),t(C.StaticCanvas.prototype,C.Collection),t(C.StaticCanvas.prototype,C.DataURLExporter),t(C.StaticCanvas,
/** @lends fabric.StaticCanvas */
{
/**
         * @static
         * @type String
         * @default
         */
EMPTY_JSON:'{"objects": [], "background": "white"}',
/**
         * Provides a way to check support of some of the canvas methods
         * (either those of HTMLCanvasElement itself, or rendering context)
         *
         * @param {String} methodName Method to check support for;
         *                            Could be one of "setLineDash"
         * @return {Boolean | null} `true` if method is supported (or at least exists),
         *                          `null` if canvas element or context can not be initialized
         */
supports:function(t){var e=a();if(!e||!e.getContext)return null;var i=e.getContext("2d");return i&&"setLineDash"===t?void 0!==i.setLineDash:null}}),C.StaticCanvas.prototype.toJSON=C.StaticCanvas.prototype.toObject,C.isLikelyNode&&(C.StaticCanvas.prototype.createPNGStream=function(){var t=s(this.lowerCanvasEl);return t&&t.createPNGStream()},C.StaticCanvas.prototype.createJPEGStream=function(t){var e=s(this.lowerCanvasEl);return e&&e.createJPEGStream(t)})}}(),C.BaseBrush=C.util.createClass(
/** @lends fabric.BaseBrush.prototype */
{
/**
       * Color of a brush
       * @type String
       * @default
       */
color:"rgb(0, 0, 0)",
/**
       * Width of a brush, has to be a Number, no string literals
       * @type Number
       * @default
       */
width:1,
/**
       * Shadow object representing shadow of this shape.
       * <b>Backwards incompatibility note:</b> This property replaces "shadowColor" (String), "shadowOffsetX" (Number),
       * "shadowOffsetY" (Number) and "shadowBlur" (Number) since v1.2.12
       * @type fabric.Shadow
       * @default
       */
shadow:null,
/**
       * Line endings style of a brush (one of "butt", "round", "square")
       * @type String
       * @default
       */
strokeLineCap:"round",
/**
       * Corner style of a brush (one of "bevel", "round", "miter")
       * @type String
       * @default
       */
strokeLineJoin:"round",
/**
       * Maximum miter length (used for strokeLineJoin = "miter") of a brush's
       * @type Number
       * @default
       */
strokeMiterLimit:10,
/**
       * Stroke Dash Array.
       * @type Array
       * @default
       */
strokeDashArray:null,
/**
       * When `true`, the free drawing is limited to the whiteboard size. Default to false.
       * @type Boolean
       * @default false
      */
limitedToCanvasSize:!1,
/**
       * Sets brush styles
       * @private
       * @param {CanvasRenderingContext2D} ctx
       */
_setBrushStyles:function(t){t.strokeStyle=this.color,t.lineWidth=this.width,t.lineCap=this.strokeLineCap,t.miterLimit=this.strokeMiterLimit,t.lineJoin=this.strokeLineJoin,t.setLineDash(this.strokeDashArray||[])},
/**
       * Sets the transformation on given context
       * @param {RenderingContext2d} ctx context to render on
       * @private
       */
_saveAndTransform:function(t){var e=this.canvas.viewportTransform;t.save(),t.transform(e[0],e[1],e[2],e[3],e[4],e[5])},
/**
       * Sets brush shadow styles
       * @private
       */
_setShadow:function(){if(this.shadow){var t=this.canvas,e=this.shadow,i=t.contextTop,n=t.getZoom();t&&t._isRetinaScaling()&&(n*=C.devicePixelRatio),i.shadowColor=e.color,i.shadowBlur=e.blur*n,i.shadowOffsetX=e.offsetX*n,i.shadowOffsetY=e.offsetY*n}},needsFullRender:function(){return new C.Color(this.color).getAlpha()<1||!!this.shadow},
/**
       * Removes brush shadow styles
       * @private
       */
_resetShadow:function(){var t=this.canvas.contextTop;t.shadowColor="",t.shadowBlur=t.shadowOffsetX=t.shadowOffsetY=0},
/**
       * Check is pointer is outside canvas boundaries
       * @param {Object} pointer
       * @private
      */
_isOutSideCanvas:function(t){return t.x<0||t.x>this.canvas.getWidth()||t.y<0||t.y>this.canvas.getHeight()}}),C.PencilBrush=C.util.createClass(C.BaseBrush,
/** @lends fabric.PencilBrush.prototype */
{
/**
         * Discard points that are less than `decimate` pixel distant from each other
         * @type Number
         * @default 0.4
         */
decimate:.4,
/**
         * Draws a straight line between last recorded point to current pointer
         * Used for `shift` functionality
         *
         * @type boolean
         * @default false
         */
drawStraightLine:!1,
/**
         * The event modifier key that makes the brush draw a straight line.
         * If `null` or 'none' or any other string that is not a modifier key the feature is disabled.
         * @type {'altKey' | 'shiftKey' | 'ctrlKey' | 'none' | undefined | null}
         */
straightLineKey:"shiftKey",
/**
         * Constructor
         * @param {fabric.Canvas} canvas
         * @return {fabric.PencilBrush} Instance of a pencil brush
         */
initialize:function(t){this.canvas=t,this._points=[]},needsFullRender:function(){return this.callSuper("needsFullRender")||this._hasStraightLine},
/**
         * Invoked inside on mouse down and mouse move
         * @param {Object} pointer
         */
_drawSegment:function(t,e,i){var n=e.midPointFrom(i);return t.quadraticCurveTo(e.x,e.y,n.x,n.y),n},
/**
         * Invoked on mouse down
         * @param {Object} pointer
         */
onMouseDown:function(t,e){this.canvas._isMainEvent(e.e)&&(this.drawStraightLine=e.e[this.straightLineKey],this._prepareForDrawing(t),this._captureDrawingPath(t),this._render())},
/**
         * Invoked on mouse move
         * @param {Object} pointer
         */
onMouseMove:function(t,e){if(this.canvas._isMainEvent(e.e)&&(this.drawStraightLine=e.e[this.straightLineKey],(!0!==this.limitedToCanvasSize||!this._isOutSideCanvas(t))&&this._captureDrawingPath(t)&&this._points.length>1))if(this.needsFullRender())this.canvas.clearContext(this.canvas.contextTop),this._render();else{var i=this._points,n=i.length,r=this.canvas.contextTop;this._saveAndTransform(r),this.oldEnd&&(r.beginPath(),r.moveTo(this.oldEnd.x,this.oldEnd.y)),this.oldEnd=this._drawSegment(r,i[n-2],i[n-1],!0),r.stroke(),r.restore()}},
/**
         * Invoked on mouse up
         */
onMouseUp:function(t){return!this.canvas._isMainEvent(t.e)||(this.drawStraightLine=!1,this.oldEnd=void 0,this._finalizeAndAddPath(),!1)},
/**
         * @private
         * @param {Object} pointer Actual mouse position related to the canvas.
         */
_prepareForDrawing:function(t){var e=new C.Point(t.x,t.y);this._reset(),this._addPoint(e),this.canvas.contextTop.moveTo(e.x,e.y)},
/**
         * @private
         * @param {fabric.Point} point Point to be added to points array
         */
_addPoint:function(t){return!(this._points.length>1&&t.eq(this._points[this._points.length-1])||(this.drawStraightLine&&this._points.length>1&&(this._hasStraightLine=!0,this._points.pop()),this._points.push(t),0))},
/**
         * Clear points array and set contextTop canvas style.
         * @private
         */
_reset:function(){this._points=[],this._setBrushStyles(this.canvas.contextTop),this._setShadow(),this._hasStraightLine=!1},
/**
         * @private
         * @param {Object} pointer Actual mouse position related to the canvas.
         */
_captureDrawingPath:function(t){var e=new C.Point(t.x,t.y);return this._addPoint(e)},
/**
         * Draw a smooth path on the topCanvas using quadraticCurveTo
         * @private
         * @param {CanvasRenderingContext2D} [ctx]
         */
_render:function(t){var e,i,n=this._points[0],r=this._points[1];if(t=t||this.canvas.contextTop,this._saveAndTransform(t),t.beginPath(),2===this._points.length&&n.x===r.x&&n.y===r.y){var o=this.width/1e3;n=new C.Point(n.x,n.y),r=new C.Point(r.x,r.y),n.x-=o,r.x+=o}for(t.moveTo(n.x,n.y),e=1,i=this._points.length;e<i;e++)this._drawSegment(t,n,r),n=this._points[e],r=this._points[e+1];t.lineTo(n.x,n.y),t.stroke(),t.restore()},
/**
         * Converts points to SVG path
         * @param {Array} points Array of points
         * @return {(string|number)[][]} SVG path commands
         */
convertPointsToSVGPath:function(t){var e=this.width/1e3;return C.util.getSmoothPathFromPoints(t,e)},
/**
         * @private
         * @param {(string|number)[][]} pathData SVG path commands
         * @returns {boolean}
         */
_isEmptySVGPath:function(t){return"M 0 0 Q 0 0 0 0 L 0 0"===C.util.joinPath(t)},
/**
         * Creates fabric.Path object to add on canvas
         * @param {(string|number)[][]} pathData Path data
         * @return {fabric.Path} Path to add on canvas
         */
createPath:function(t){var e=new C.Path(t,{fill:null,stroke:this.color,strokeWidth:this.width,strokeLineCap:this.strokeLineCap,strokeMiterLimit:this.strokeMiterLimit,strokeLineJoin:this.strokeLineJoin,strokeDashArray:this.strokeDashArray});return this.shadow&&(this.shadow.affectStroke=!0,e.shadow=new C.Shadow(this.shadow)),e},
/**
         * Decimate points array with the decimate value
         */
decimatePoints:function(t,e){if(t.length<=2)return t;var i,n=this.canvas.getZoom(),r=Math.pow(e/n,2),o=t.length-1,s=t[0],a=[s];for(i=1;i<o-1;i++)Math.pow(s.x-t[i].x,2)+Math.pow(s.y-t[i].y,2)>=r&&(s=t[i],a.push(s));return a.push(t[o]),a},
/**
         * On mouseup after drawing the path on contextTop canvas
         * we use the points captured to create an new fabric path object
         * and add it to the fabric canvas.
         */
_finalizeAndAddPath:function(){this.canvas.contextTop.closePath(),this.decimate&&(this._points=this.decimatePoints(this._points,this.decimate));var t=this.convertPointsToSVGPath(this._points);if(this._isEmptySVGPath(t))this.canvas.requestRenderAll();else{var e=this.createPath(t);this.canvas.clearContext(this.canvas.contextTop),this.canvas.fire("before:path:created",{path:e}),this.canvas.add(e),this.canvas.requestRenderAll(),e.setCoords(),this._resetShadow(),this.canvas.fire("path:created",{path:e})}}}),C.CircleBrush=C.util.createClass(C.BaseBrush,
/** @lends fabric.CircleBrush.prototype */
{
/**
       * Width of a brush
       * @type Number
       * @default
       */
width:10,
/**
       * Constructor
       * @param {fabric.Canvas} canvas
       * @return {fabric.CircleBrush} Instance of a circle brush
       */
initialize:function(t){this.canvas=t,this.points=[]},
/**
       * Invoked inside on mouse down and mouse move
       * @param {Object} pointer
       */
drawDot:function(t){var e=this.addPoint(t),i=this.canvas.contextTop;this._saveAndTransform(i),this.dot(i,e),i.restore()},dot:function(t,e){t.fillStyle=e.fill,t.beginPath(),t.arc(e.x,e.y,e.radius,0,2*Math.PI,!1),t.closePath(),t.fill()},
/**
       * Invoked on mouse down
       */
onMouseDown:function(t){this.points.length=0,this.canvas.clearContext(this.canvas.contextTop),this._setShadow(),this.drawDot(t)},
/**
       * Render the full state of the brush
       * @private
       */
_render:function(){var t,e,i=this.canvas.contextTop,n=this.points;for(this._saveAndTransform(i),t=0,e=n.length;t<e;t++)this.dot(i,n[t]);i.restore()},
/**
       * Invoked on mouse move
       * @param {Object} pointer
       */
onMouseMove:function(t){!0===this.limitedToCanvasSize&&this._isOutSideCanvas(t)||(this.needsFullRender()?(this.canvas.clearContext(this.canvas.contextTop),this.addPoint(t),this._render()):this.drawDot(t))},
/**
       * Invoked on mouse up
       */
onMouseUp:function(){var t,e,i=this.canvas.renderOnAddRemove;this.canvas.renderOnAddRemove=!1;var n=[];for(t=0,e=this.points.length;t<e;t++){var r=this.points[t],o=new C.Circle({radius:r.radius,left:r.x,top:r.y,originX:"center",originY:"center",fill:r.fill});this.shadow&&(o.shadow=new C.Shadow(this.shadow)),n.push(o)}var s=new C.Group(n);s.canvas=this.canvas,this.canvas.fire("before:path:created",{path:s}),this.canvas.add(s),this.canvas.fire("path:created",{path:s}),this.canvas.clearContext(this.canvas.contextTop),this._resetShadow(),this.canvas.renderOnAddRemove=i,this.canvas.requestRenderAll()},
/**
       * @param {Object} pointer
       * @return {fabric.Point} Just added pointer point
       */
addPoint:function(t){var e=new C.Point(t.x,t.y),i=C.util.getRandomInt(Math.max(0,this.width-20),this.width+20)/2,n=new C.Color(this.color).setAlpha(C.util.getRandomInt(0,100)/100).toRgba();return e.radius=i,e.fill=n,this.points.push(e),e}}),C.SprayBrush=C.util.createClass(C.BaseBrush,
/** @lends fabric.SprayBrush.prototype */
{
/**
       * Width of a spray
       * @type Number
       * @default
       */
width:10,
/**
       * Density of a spray (number of dots per chunk)
       * @type Number
       * @default
       */
density:20,
/**
       * Width of spray dots
       * @type Number
       * @default
       */
dotWidth:1,
/**
       * Width variance of spray dots
       * @type Number
       * @default
       */
dotWidthVariance:1,
/**
       * Whether opacity of a dot should be random
       * @type Boolean
       * @default
       */
randomOpacity:!1,
/**
       * Whether overlapping dots (rectangles) should be removed (for performance reasons)
       * @type Boolean
       * @default
       */
optimizeOverlapping:!0,
/**
       * Constructor
       * @param {fabric.Canvas} canvas
       * @return {fabric.SprayBrush} Instance of a spray brush
       */
initialize:function(t){this.canvas=t,this.sprayChunks=[]},
/**
       * Invoked on mouse down
       * @param {Object} pointer
       */
onMouseDown:function(t){this.sprayChunks.length=0,this.canvas.clearContext(this.canvas.contextTop),this._setShadow(),this.addSprayChunk(t),this.render(this.sprayChunkPoints)},
/**
       * Invoked on mouse move
       * @param {Object} pointer
       */
onMouseMove:function(t){!0===this.limitedToCanvasSize&&this._isOutSideCanvas(t)||(this.addSprayChunk(t),this.render(this.sprayChunkPoints))},
/**
       * Invoked on mouse up
       */
onMouseUp:function(){var t=this.canvas.renderOnAddRemove;this.canvas.renderOnAddRemove=!1;for(var e=[],i=0,n=this.sprayChunks.length;i<n;i++)for(var r=this.sprayChunks[i],o=0,s=r.length;o<s;o++){var a=new C.Rect({width:r[o].width,height:r[o].width,left:r[o].x+1,top:r[o].y+1,originX:"center",originY:"center",fill:this.color});e.push(a)}this.optimizeOverlapping&&(e=this._getOptimizedRects(e));var l=new C.Group(e);this.shadow&&l.set("shadow",new C.Shadow(this.shadow)),this.canvas.fire("before:path:created",{path:l}),this.canvas.add(l),this.canvas.fire("path:created",{path:l}),this.canvas.clearContext(this.canvas.contextTop),this._resetShadow(),this.canvas.renderOnAddRemove=t,this.canvas.requestRenderAll()},
/**
       * @private
       * @param {Array} rects
       */
_getOptimizedRects:function(t){var e,i,n,r={};for(i=0,n=t.length;i<n;i++)r[e=t[i].left+""+t[i].top]||(r[e]=t[i]);var o=[];for(e in r)o.push(r[e]);return o},
/**
       * Render new chunk of spray brush
       */
render:function(t){var e,i,n=this.canvas.contextTop;for(n.fillStyle=this.color,this._saveAndTransform(n),e=0,i=t.length;e<i;e++){var r=t[e];void 0!==r.opacity&&(n.globalAlpha=r.opacity),n.fillRect(r.x,r.y,r.width,r.width)}n.restore()},
/**
       * Render all spray chunks
       */
_render:function(){var t,e,i=this.canvas.contextTop;for(i.fillStyle=this.color,this._saveAndTransform(i),t=0,e=this.sprayChunks.length;t<e;t++)this.render(this.sprayChunks[t]);i.restore()},
/**
       * @param {Object} pointer
       */
addSprayChunk:function(t){this.sprayChunkPoints=[];var e,i,n,r,o=this.width/2;for(r=0;r<this.density;r++){e=C.util.getRandomInt(t.x-o,t.x+o),i=C.util.getRandomInt(t.y-o,t.y+o),n=this.dotWidthVariance?C.util.getRandomInt(
// bottom clamp width to 1
Math.max(1,this.dotWidth-this.dotWidthVariance),this.dotWidth+this.dotWidthVariance):this.dotWidth;var s=new C.Point(e,i);s.width=n,this.randomOpacity&&(s.opacity=C.util.getRandomInt(0,100)/100),this.sprayChunkPoints.push(s)}this.sprayChunks.push(this.sprayChunkPoints)}}),C.PatternBrush=C.util.createClass(C.PencilBrush,
/** @lends fabric.PatternBrush.prototype */
{getPatternSrc:function(){var t=C.util.createCanvasElement(),e=t.getContext("2d");return t.width=t.height=25,e.fillStyle=this.color,e.beginPath(),e.arc(10,10,10,0,2*Math.PI,!1),e.closePath(),e.fill(),t},getPatternSrcFunction:function(){return String(this.getPatternSrc).replace("this.color",'"'+this.color+'"')},
/**
       * Creates "pattern" instance property
       * @param {CanvasRenderingContext2D} ctx
       */
getPattern:function(t){return t.createPattern(this.source||this.getPatternSrc(),"repeat")},
/**
       * Sets brush styles
       * @param {CanvasRenderingContext2D} ctx
       */
_setBrushStyles:function(t){this.callSuper("_setBrushStyles",t),t.strokeStyle=this.getPattern(t)},
/**
       * Creates path
       */
createPath:function(t){var e=this.callSuper("createPath",t),i=e._getLeftTopCoords().scalarAdd(e.strokeWidth/2);return e.stroke=new C.Pattern({source:this.source||this.getPatternSrcFunction(),offsetX:-i.x,offsetY:-i.y}),e}}),function(){var t=C.util.getPointer,e=C.util.degreesToRadians,i=C.util.isTouchEvent;for(var n in C.Canvas=C.util.createClass(C.StaticCanvas,
/** @lends fabric.Canvas.prototype */
{
/**
         * Constructor
         * @param {HTMLElement | String} el &lt;canvas> element to initialize instance on
         * @param {Object} [options] Options object
         * @return {Object} thisArg
         */
initialize:function(t,e){e||(e={}),this.renderAndResetBound=this.renderAndReset.bind(this),this.requestRenderAllBound=this.requestRenderAll.bind(this),this._initStatic(t,e),this._initInteractive(),this._createCacheCanvas()},
/**
         * When true, objects can be transformed by one side (unproportionally)
         * when dragged on the corners that normally would not do that.
         * @type Boolean
         * @default
         * @since fabric 4.0 // changed name and default value
         */
uniformScaling:!0,
/**
         * Indicates which key switches uniform scaling.
         * values: 'altKey', 'shiftKey', 'ctrlKey'.
         * If `null` or 'none' or any other string that is not a modifier key
         * feature is disabled.
         * totally wrong named. this sounds like `uniform scaling`
         * if Canvas.uniformScaling is true, pressing this will set it to false
         * and viceversa.
         * @since 1.6.2
         * @type String
         * @default
         */
uniScaleKey:"shiftKey",
/**
         * When true, objects use center point as the origin of scale transformation.
         * <b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).
         * @since 1.3.4
         * @type Boolean
         * @default
         */
centeredScaling:!1,
/**
         * When true, objects use center point as the origin of rotate transformation.
         * <b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).
         * @since 1.3.4
         * @type Boolean
         * @default
         */
centeredRotation:!1,
/**
         * Indicates which key enable centered Transform
         * values: 'altKey', 'shiftKey', 'ctrlKey'.
         * If `null` or 'none' or any other string that is not a modifier key
         * feature is disabled feature disabled.
         * @since 1.6.2
         * @type String
         * @default
         */
centeredKey:"altKey",
/**
         * Indicates which key enable alternate action on corner
         * values: 'altKey', 'shiftKey', 'ctrlKey'.
         * If `null` or 'none' or any other string that is not a modifier key
         * feature is disabled feature disabled.
         * @since 1.6.2
         * @type String
         * @default
         */
altActionKey:"shiftKey",
/**
         * Indicates that canvas is interactive. This property should not be changed.
         * @type Boolean
         * @default
         */
interactive:!0,
/**
         * Indicates whether group selection should be enabled
         * @type Boolean
         * @default
         */
selection:!0,
/**
         * Indicates which key or keys enable multiple click selection
         * Pass value as a string or array of strings
         * values: 'altKey', 'shiftKey', 'ctrlKey'.
         * If `null` or empty or containing any other string that is not a modifier key
         * feature is disabled.
         * @since 1.6.2
         * @type String|Array
         * @default
         */
selectionKey:"shiftKey",
/**
         * Indicates which key enable alternative selection
         * in case of target overlapping with active object
         * values: 'altKey', 'shiftKey', 'ctrlKey'.
         * For a series of reason that come from the general expectations on how
         * things should work, this feature works only for preserveObjectStacking true.
         * If `null` or 'none' or any other string that is not a modifier key
         * feature is disabled.
         * @since 1.6.5
         * @type null|String
         * @default
         */
altSelectionKey:null,
/**
         * Color of selection
         * @type String
         * @default
         */
selectionColor:"rgba(100, 100, 255, 0.3)",
// blue
/**
         * Default dash array pattern
         * If not empty the selection border is dashed
         * @type Array
         */
selectionDashArray:[],
/**
         * Color of the border of selection (usually slightly darker than color of selection itself)
         * @type String
         * @default
         */
selectionBorderColor:"rgba(255, 255, 255, 0.3)",
/**
         * Width of a line used in object/group selection
         * @type Number
         * @default
         */
selectionLineWidth:1,
/**
         * Select only shapes that are fully contained in the dragged selection rectangle.
         * @type Boolean
         * @default
         */
selectionFullyContained:!1,
/**
         * Default cursor value used when hovering over an object on canvas
         * @type String
         * @default
         */
hoverCursor:"move",
/**
         * Default cursor value used when moving an object on canvas
         * @type String
         * @default
         */
moveCursor:"move",
/**
         * Default cursor value used for the entire canvas
         * @type String
         * @default
         */
defaultCursor:"default",
/**
         * Cursor value used during free drawing
         * @type String
         * @default
         */
freeDrawingCursor:"crosshair",
/**
         * Cursor value used for disabled elements ( corners with disabled action )
         * @type String
         * @since 2.0.0
         * @default
         */
notAllowedCursor:"not-allowed",
/**
         * Default element class that's given to wrapper (div) element of canvas
         * @type String
         * @default
         */
containerClass:"canvas-container",
/**
         * When true, object detection happens on per-pixel basis rather than on per-bounding-box
         * @type Boolean
         * @default
         */
perPixelTargetFind:!1,
/**
         * Number of pixels around target pixel to tolerate (consider active) during object detection
         * @type Number
         * @default
         */
targetFindTolerance:0,
/**
         * When true, target detection is skipped. Target detection will return always undefined.
         * click selection won't work anymore, events will fire with no targets.
         * if something is selected before setting it to true, it will be deselected at the first click.
         * area selection will still work. check the `selection` property too.
         * if you deactivate both, you should look into staticCanvas.
         * @type Boolean
         * @default
         */
skipTargetFind:!1,
/**
         * When true, mouse events on canvas (mousedown/mousemove/mouseup) result in free drawing.
         * After mousedown, mousemove creates a shape,
         * and then mouseup finalizes it and adds an instance of `fabric.Path` onto canvas.
         * @tutorial {@link http://fabricjs.com/fabric-intro-part-4#free_drawing}
         * @type Boolean
         * @default
         */
isDrawingMode:!1,
/**
         * Indicates whether objects should remain in current stack position when selected.
         * When false objects are brought to top and rendered as part of the selection group
         * @type Boolean
         * @default
         */
preserveObjectStacking:!1,
/**
         * Indicates the angle that an object will lock to while rotating.
         * @type Number
         * @since 1.6.7
         * @default
         */
snapAngle:0,
/**
         * Indicates the distance from the snapAngle the rotation will lock to the snapAngle.
         * When `null`, the snapThreshold will default to the snapAngle.
         * @type null|Number
         * @since 1.6.7
         * @default
         */
snapThreshold:null,
/**
         * Indicates if the right click on canvas can output the context menu or not
         * @type Boolean
         * @since 1.6.5
         * @default
         */
stopContextMenu:!1,
/**
         * Indicates if the canvas can fire right click events
         * @type Boolean
         * @since 1.6.5
         * @default
         */
fireRightClick:!1,
/**
         * Indicates if the canvas can fire middle click events
         * @type Boolean
         * @since 1.7.8
         * @default
         */
fireMiddleClick:!1,
/**
         * Keep track of the subTargets for Mouse Events
         * @type fabric.Object[]
         */
targets:[],
/**
         * When the option is enabled, PointerEvent is used instead of MouseEvent.
         * @type Boolean
         * @default
         */
enablePointerEvents:!1,
/**
         * Keep track of the hovered target
         * @type fabric.Object
         * @private
         */
_hoveredTarget:null,
/**
         * hold the list of nested targets hovered
         * @type fabric.Object[]
         * @private
         */
_hoveredTargets:[],
/**
         * @private
         */
_initInteractive:function(){this._currentTransform=null,this._groupSelector=null,this._initWrapperElement(),this._createUpperCanvas(),this._initEventListeners(),this._initRetinaScaling(),this.freeDrawingBrush=C.PencilBrush&&new C.PencilBrush(this),this.calcOffset()},
/**
         * Divides objects in two groups, one to render immediately
         * and one to render as activeGroup.
         * @return {Array} objects to render immediately and pushes the other in the activeGroup.
         */
_chooseObjectsToRender:function(){var t,e,i,n=this.getActiveObjects();if(n.length>0&&!this.preserveObjectStacking){e=[],i=[];for(var r=0,o=this._objects.length;r<o;r++)t=this._objects[r],-1===n.indexOf(t)?e.push(t):i.push(t);n.length>1&&(this._activeObject._objects=i),e.push.apply(e,i)}else e=this._objects;return e},
/**
         * Renders both the top canvas and the secondary container canvas.
         * @return {fabric.Canvas} instance
         * @chainable
         */
renderAll:function(){!this.contextTopDirty||this._groupSelector||this.isDrawingMode||(this.clearContext(this.contextTop),this.contextTopDirty=!1),this.hasLostContext&&(this.renderTopLayer(this.contextTop),this.hasLostContext=!1);var t=this.contextContainer;return this.renderCanvas(t,this._chooseObjectsToRender()),this},renderTopLayer:function(t){t.save(),this.isDrawingMode&&this._isCurrentlyDrawing&&(this.freeDrawingBrush&&this.freeDrawingBrush._render(),this.contextTopDirty=!0),this.selection&&this._groupSelector&&(this._drawSelection(t),this.contextTopDirty=!0),t.restore()},
/**
         * Method to render only the top canvas.
         * Also used to render the group selection box.
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
renderTop:function(){var t=this.contextTop;return this.clearContext(t),this.renderTopLayer(t),this.fire("after:render"),this},
/**
         * @private
         */
_normalizePointer:function(t,e){var i=t.calcTransformMatrix(),n=C.util.invertTransform(i),r=this.restorePointerVpt(e);return C.util.transformPoint(r,n)},
/**
         * Returns true if object is transparent at a certain location
         * @param {fabric.Object} target Object to check
         * @param {Number} x Left coordinate
         * @param {Number} y Top coordinate
         * @return {Boolean}
         */
isTargetTransparent:function(t,e,i){if(t.shouldCache()&&t._cacheCanvas&&t!==this._activeObject){var n=this._normalizePointer(t,{x:e,y:i}),r=Math.max(t.cacheTranslationX+n.x*t.zoomX,0),o=Math.max(t.cacheTranslationY+n.y*t.zoomY,0);return C.util.isTransparent(t._cacheContext,Math.round(r),Math.round(o),this.targetFindTolerance)}var s=this.contextCache,a=t.selectionBackgroundColor,l=this.viewportTransform;return t.selectionBackgroundColor="",this.clearContext(s),s.save(),s.transform(l[0],l[1],l[2],l[3],l[4],l[5]),t.render(s),s.restore(),t.selectionBackgroundColor=a,C.util.isTransparent(s,e,i,this.targetFindTolerance)},
/**
         * takes an event and determines if selection key has been pressed
         * @private
         * @param {Event} e Event object
         */
_isSelectionKeyPressed:function(t){return Array.isArray(this.selectionKey)?!!this.selectionKey.find((function(e){return!0===t[e]})):t[this.selectionKey]},
/**
         * @private
         * @param {Event} e Event object
         * @param {fabric.Object} target
         */
_shouldClearSelection:function(t,e){var i=this.getActiveObjects(),n=this._activeObject;return!e||e&&n&&i.length>1&&-1===i.indexOf(e)&&n!==e&&!this._isSelectionKeyPressed(t)||e&&!e.evented||e&&!e.selectable&&n&&n!==e},
/**
         * centeredScaling from object can't override centeredScaling from canvas.
         * this should be fixed, since object setting should take precedence over canvas.
         * also this should be something that will be migrated in the control properties.
         * as ability to define the origin of the transformation that the control provide.
         * @private
         * @param {fabric.Object} target
         * @param {String} action
         * @param {Boolean} altKey
         */
_shouldCenterTransform:function(t,e,i){var n;if(t)return"scale"===e||"scaleX"===e||"scaleY"===e||"resizing"===e?n=this.centeredScaling||t.centeredScaling:"rotate"===e&&(n=this.centeredRotation||t.centeredRotation),n?!i:i},
/**
         * should disappear before release 4.0
         * @private
         */
_getOriginFromCorner:function(t,e){var i={x:t.originX,y:t.originY};return"ml"===e||"tl"===e||"bl"===e?i.x="right":"mr"!==e&&"tr"!==e&&"br"!==e||(i.x="left"),"tl"===e||"mt"===e||"tr"===e?i.y="bottom":"bl"!==e&&"mb"!==e&&"br"!==e||(i.y="top"),i},
/**
         * @private
         * @param {Boolean} alreadySelected true if target is already selected
         * @param {String} corner a string representing the corner ml, mr, tl ...
         * @param {Event} e Event object
         * @param {fabric.Object} [target] inserted back to help overriding. Unused
         */
_getActionFromCorner:function(t,e,i,n){if(!e||!t)return"drag";var r=n.controls[e];return r.getActionName(i,r,n)},
/**
         * @private
         * @param {Event} e Event object
         * @param {fabric.Object} target
         */
_setupCurrentTransform:function(t,i,n){if(i){var r=this.getPointer(t),o=i.__corner,s=i.controls[o],a=n&&o?s.getActionHandler(t,i,s):C.controlsUtils.dragHandler,l=this._getActionFromCorner(n,o,t,i),c=this._getOriginFromCorner(i,o),h=t[this.centeredKey],u={target:i,action:l,actionHandler:a,corner:o,scaleX:i.scaleX,scaleY:i.scaleY,skewX:i.skewX,skewY:i.skewY,
// used by transation
offsetX:r.x-i.left,offsetY:r.y-i.top,originX:c.x,originY:c.y,ex:r.x,ey:r.y,lastX:r.x,lastY:r.y,
// unsure they are useful anymore.
// left: target.left,
// top: target.top,
theta:e(i.angle),
// end of unsure
width:i.width*i.scaleX,shiftKey:t.shiftKey,altKey:h,original:C.util.saveObjectTransform(i)};this._shouldCenterTransform(i,l,h)&&(u.originX="center",u.originY="center"),u.original.originX=c.x,u.original.originY=c.y,this._currentTransform=u,this._beforeTransform(t)}},
/**
         * Set the cursor type of the canvas element
         * @param {String} value Cursor type of the canvas element.
         * @see http://www.w3.org/TR/css3-ui/#cursor
         */
setCursor:function(t){this.upperCanvasEl.style.cursor=t},
/**
         * @private
         * @param {CanvasRenderingContext2D} ctx to draw the selection on
         */
_drawSelection:function(t){var e=this._groupSelector,i=new C.Point(e.ex,e.ey),n=C.util.transformPoint(i,this.viewportTransform),r=new C.Point(e.ex+e.left,e.ey+e.top),o=C.util.transformPoint(r,this.viewportTransform),s=Math.min(n.x,o.x),a=Math.min(n.y,o.y),l=Math.max(n.x,o.x),c=Math.max(n.y,o.y),h=this.selectionLineWidth/2;this.selectionColor&&(t.fillStyle=this.selectionColor,t.fillRect(s,a,l-s,c-a)),this.selectionLineWidth&&this.selectionBorderColor&&(t.lineWidth=this.selectionLineWidth,t.strokeStyle=this.selectionBorderColor,s+=h,a+=h,l-=h,c-=h,C.Object.prototype._setLineDash.call(this,t,this.selectionDashArray),t.strokeRect(s,a,l-s,c-a))},
/**
         * Method that determines what object we are clicking on
         * the skipGroup parameter is for internal use, is needed for shift+click action
         * 11/09/2018 TODO: would be cool if findTarget could discern between being a full target
         * or the outside part of the corner.
         * @param {Event} e mouse event
         * @param {Boolean} skipGroup when true, activeGroup is skipped and only objects are traversed through
         * @return {fabric.Object} the target found
         */
findTarget:function(t,e){if(!this.skipTargetFind){var n,r,o=this.getPointer(t,!0),s=this._activeObject,a=this.getActiveObjects(),l=i(t),c=a.length>1&&!e||1===a.length;if(this.targets=[],c&&s._findTargetCorner(o,l))return s;if(a.length>1&&!e&&s===this._searchPossibleTargets([s],o))return s;if(1===a.length&&s===this._searchPossibleTargets([s],o)){if(!this.preserveObjectStacking)return s;n=s,r=this.targets,this.targets=[]}var h=this._searchPossibleTargets(this._objects,o);return t[this.altSelectionKey]&&h&&n&&h!==n&&(h=n,this.targets=r),h}},
/**
         * Checks point is inside the object.
         * @param {Object} [pointer] x,y object of point coordinates we want to check.
         * @param {fabric.Object} obj Object to test against
         * @param {Object} [globalPointer] x,y object of point coordinates relative to canvas used to search per pixel target.
         * @return {Boolean} true if point is contained within an area of given object
         * @private
         */
_checkTarget:function(t,e,i){if(e&&e.visible&&e.evented&&// http://www.geog.ubc.ca/courses/klink/gis.notes/ncgia/u32.html
// http://idav.ucdavis.edu/~okreylos/TAship/Spring2000/PointInPolygon.html
e.containsPoint(t)){if(!this.perPixelTargetFind&&!e.perPixelTargetFind||e.isEditing)return!0;if(!this.isTargetTransparent(e,i.x,i.y))return!0}},
/**
         * Function used to search inside objects an object that contains pointer in bounding box or that contains pointerOnCanvas when painted
         * @param {Array} [objects] objects array to look into
         * @param {Object} [pointer] x,y object of point coordinates we want to check.
         * @return {fabric.Object} object that contains pointer
         * @private
         */
_searchPossibleTargets:function(t,e){for(var i,n,r=t.length;r--;){var o=t[r],s=o.group?this._normalizePointer(o.group,e):e;if(this._checkTarget(s,o,e)){(i=t[r]).subTargetCheck&&i instanceof C.Group&&(n=this._searchPossibleTargets(i._objects,e))&&this.targets.push(n);break}}return i},
/**
         * Returns pointer coordinates without the effect of the viewport
         * @param {Object} pointer with "x" and "y" number values
         * @return {Object} object with "x" and "y" number values
         */
restorePointerVpt:function(t){return C.util.transformPoint(t,C.util.invertTransform(this.viewportTransform))},
/**
         * Returns pointer coordinates relative to canvas.
         * Can return coordinates with or without viewportTransform.
         * ignoreZoom false gives back coordinates that represent
         * the point clicked on canvas element.
         * ignoreZoom true gives back coordinates after being processed
         * by the viewportTransform ( sort of coordinates of what is displayed
         * on the canvas where you are clicking.
         * ignoreZoom true = HTMLElement coordinates relative to top,left
         * ignoreZoom false, default = fabric space coordinates, the same used for shape position
         * To interact with your shapes top and left you want to use ignoreZoom true
         * most of the time, while ignoreZoom false will give you coordinates
         * compatible with the object.oCoords system.
         * of the time.
         * @param {Event} e
         * @param {Boolean} ignoreZoom
         * @return {Object} object with "x" and "y" number values
         */
getPointer:function(e,i){if(this._absolutePointer&&!i)return this._absolutePointer;if(this._pointer&&i)return this._pointer;var n,r=t(e),o=this.upperCanvasEl,s=o.getBoundingClientRect(),a=s.width||0,l=s.height||0;a&&l||("top"in s&&"bottom"in s&&(l=Math.abs(s.top-s.bottom)),"right"in s&&"left"in s&&(a=Math.abs(s.right-s.left))),this.calcOffset(),r.x=r.x-this._offset.left,r.y=r.y-this._offset.top,i||(r=this.restorePointerVpt(r));var c=this.getRetinaScaling();return 1!==c&&(r.x/=c,r.y/=c),n=0===a||0===l?{width:1,height:1}:{width:o.width/a,height:o.height/l},{x:r.x*n.width,y:r.y*n.height}},
/**
         * @private
         * @throws {CANVAS_INIT_ERROR} If canvas can not be initialized
         */
_createUpperCanvas:function(){var t=this.lowerCanvasEl.className.replace(/\s*lower-canvas\s*/,""),e=this.lowerCanvasEl,i=this.upperCanvasEl;i?i.className="":(i=this._createCanvasElement(),this.upperCanvasEl=i),C.util.addClass(i,"upper-canvas "+t),this.wrapperEl.appendChild(i),this._copyCanvasStyle(e,i),this._applyCanvasStyle(i),this.contextTop=i.getContext("2d")},
/**
         * Returns context of top canvas where interactions are drawn
         * @returns {CanvasRenderingContext2D}
         */
getTopContext:function(){return this.contextTop},
/**
         * @private
         */
_createCacheCanvas:function(){this.cacheCanvasEl=this._createCanvasElement(),this.cacheCanvasEl.setAttribute("width",this.width),this.cacheCanvasEl.setAttribute("height",this.height),this.contextCache=this.cacheCanvasEl.getContext("2d")},
/**
         * @private
         */
_initWrapperElement:function(){this.wrapperEl=C.util.wrapElement(this.lowerCanvasEl,"div",{class:this.containerClass}),C.util.setStyle(this.wrapperEl,{width:this.width+"px",height:this.height+"px",position:"relative"}),C.util.makeElementUnselectable(this.wrapperEl)},
/**
         * @private
         * @param {HTMLElement} element canvas element to apply styles on
         */
_applyCanvasStyle:function(t){var e=this.width||t.width,i=this.height||t.height;C.util.setStyle(t,{position:"absolute",width:e+"px",height:i+"px",left:0,top:0,"touch-action":this.allowTouchScrolling?"manipulation":"none","-ms-touch-action":this.allowTouchScrolling?"manipulation":"none"}),t.width=e,t.height=i,C.util.makeElementUnselectable(t)},
/**
         * Copy the entire inline style from one element (fromEl) to another (toEl)
         * @private
         * @param {Element} fromEl Element style is copied from
         * @param {Element} toEl Element copied style is applied to
         */
_copyCanvasStyle:function(t,e){e.style.cssText=t.style.cssText},
/**
         * Returns context of canvas where object selection is drawn
         * @return {CanvasRenderingContext2D}
         */
getSelectionContext:function(){return this.contextTop},
/**
         * Returns &lt;canvas> element on which object selection is drawn
         * @return {HTMLCanvasElement}
         */
getSelectionElement:function(){return this.upperCanvasEl},
/**
         * Returns currently active object
         * @return {fabric.Object} active object
         */
getActiveObject:function(){return this._activeObject},
/**
         * Returns an array with the current selected objects
         * @return {fabric.Object} active object
         */
getActiveObjects:function(){var t=this._activeObject;return t?"activeSelection"===t.type&&t._objects?t._objects.slice(0):[t]:[]},
/**
         * @private
         * @param {fabric.Object} obj Object that was removed
         */
_onObjectRemoved:function(t){t===this._activeObject&&(this.fire("before:selection:cleared",{target:t}),this._discardActiveObject(),this.fire("selection:cleared",{target:t}),t.fire("deselected")),t===this._hoveredTarget&&(this._hoveredTarget=null,this._hoveredTargets=[]),this.callSuper("_onObjectRemoved",t)},
/**
         * @private
         * Compares the old activeObject with the current one and fires correct events
         * @param {fabric.Object} obj old activeObject
         */
_fireSelectionEvents:function(t,e){var i=!1,n=this.getActiveObjects(),r=[],o=[];t.forEach((function(t){-1===n.indexOf(t)&&(i=!0,t.fire("deselected",{e:e,target:t}),o.push(t))})),n.forEach((function(n){-1===t.indexOf(n)&&(i=!0,n.fire("selected",{e:e,target:n}),r.push(n))})),t.length>0&&n.length>0?i&&this.fire("selection:updated",{e:e,selected:r,deselected:o}):n.length>0?this.fire("selection:created",{e:e,selected:r}):t.length>0&&this.fire("selection:cleared",{e:e,deselected:o})},
/**
         * Sets given object as the only active object on canvas
         * @param {fabric.Object} object Object to set as an active one
         * @param {Event} [e] Event (passed along when firing "object:selected")
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
setActiveObject:function(t,e){var i=this.getActiveObjects();return this._setActiveObject(t,e),this._fireSelectionEvents(i,e),this},
/**
         * This is a private method for now.
         * This is supposed to be equivalent to setActiveObject but without firing
         * any event. There is commitment to have this stay this way.
         * This is the functional part of setActiveObject.
         * @private
         * @param {Object} object to set as active
         * @param {Event} [e] Event (passed along when firing "object:selected")
         * @return {Boolean} true if the selection happened
         */
_setActiveObject:function(t,e){return this._activeObject!==t&&(!!this._discardActiveObject(e,t)&&(!t.onSelect({e:e})&&(this._activeObject=t,!0)))},
/**
         * This is a private method for now.
         * This is supposed to be equivalent to discardActiveObject but without firing
         * any events. There is commitment to have this stay this way.
         * This is the functional part of discardActiveObject.
         * @param {Event} [e] Event (passed along when firing "object:deselected")
         * @param {Object} object to set as active
         * @return {Boolean} true if the selection happened
         * @private
         */
_discardActiveObject:function(t,e){var i=this._activeObject;if(i){if(i.onDeselect({e:t,object:e}))return!1;this._activeObject=null}return!0},
/**
         * Discards currently active object and fire events. If the function is called by fabric
         * as a consequence of a mouse event, the event is passed as a parameter and
         * sent to the fire function for the custom events. When used as a method the
         * e param does not have any application.
         * @param {event} e
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
discardActiveObject:function(t){var e=this.getActiveObjects(),i=this.getActiveObject();return e.length&&this.fire("before:selection:cleared",{target:i,e:t}),this._discardActiveObject(t),this._fireSelectionEvents(e,t),this},
/**
         * Clears a canvas element and removes all event listeners
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
dispose:function(){var t=this.wrapperEl;return this.removeListeners(),t.removeChild(this.upperCanvasEl),t.removeChild(this.lowerCanvasEl),this.contextCache=null,this.contextTop=null,["upperCanvasEl","cacheCanvasEl"].forEach(function(t){C.util.cleanUpJsdomNode(this[t]),this[t]=void 0}.bind(this)),t.parentNode&&t.parentNode.replaceChild(this.lowerCanvasEl,this.wrapperEl),delete this.wrapperEl,C.StaticCanvas.prototype.dispose.call(this),this},
/**
         * Clears all contexts (background, main, top) of an instance
         * @return {fabric.Canvas} thisArg
         * @chainable
         */
clear:function(){return this.discardActiveObject(),this.clearContext(this.contextTop),this.callSuper("clear")},
/**
         * Draws objects' controls (borders/controls)
         * @param {CanvasRenderingContext2D} ctx Context to render controls on
         */
drawControls:function(t){var e=this._activeObject;e&&e._renderControls(t)},
/**
         * @private
         */
_toObject:function(t,e,i){var n=this._realizeGroupTransformOnObject(t),r=this.callSuper("_toObject",t,e,i);return this._unwindGroupTransformOnObject(t,n),r},
/**
         * Realises an object's group transformation on it
         * @private
         * @param {fabric.Object} [instance] the object to transform (gets mutated)
         * @returns the original values of instance which were changed
         */
_realizeGroupTransformOnObject:function(t){if(t.group&&"activeSelection"===t.group.type&&this._activeObject===t.group){var e={};return["angle","flipX","flipY","left","scaleX","scaleY","skewX","skewY","top"].forEach((function(i){e[i]=t[i]})),C.util.addTransformToObject(t,this._activeObject.calcOwnMatrix()),e}return null},
/**
         * Restores the changed properties of instance
         * @private
         * @param {fabric.Object} [instance] the object to un-transform (gets mutated)
         * @param {Object} [originalValues] the original values of instance, as returned by _realizeGroupTransformOnObject
         */
_unwindGroupTransformOnObject:function(t,e){e&&t.set(e)},
/**
         * @private
         */
_setSVGObject:function(t,e,i){var n=this._realizeGroupTransformOnObject(e);this.callSuper("_setSVGObject",t,e,i),this._unwindGroupTransformOnObject(e,n)},setViewportTransform:function(t){this.renderOnAddRemove&&this._activeObject&&this._activeObject.isEditing&&this._activeObject.clearContextTop(),C.StaticCanvas.prototype.setViewportTransform.call(this,t)}}),C.StaticCanvas)"prototype"!==n&&(C.Canvas[n]=C.StaticCanvas[n])}(),function(){var t=C.util.addListener,e=C.util.removeListener,i={passive:!1};function n(t,e){return t.button&&t.button===e-1}C.util.object.extend(C.Canvas.prototype,
/** @lends fabric.Canvas.prototype */
{
/**
         * Contains the id of the touch event that owns the fabric transform
         * @type Number
         * @private
         */
mainTouchId:null,
/**
         * Adds mouse listeners to canvas
         * @private
         */
_initEventListeners:function(){this.removeListeners(),this._bindEvents(),this.addOrRemove(t,"add")},
/**
         * return an event prefix pointer or mouse.
         * @private
         */
_getEventPrefix:function(){return this.enablePointerEvents?"pointer":"mouse"},addOrRemove:function(t,e){var n=this.upperCanvasEl,r=this._getEventPrefix();t(C.window,"resize",this._onResize),t(n,r+"down",this._onMouseDown),t(n,r+"move",this._onMouseMove,i),t(n,r+"out",this._onMouseOut),t(n,r+"enter",this._onMouseEnter),t(n,"wheel",this._onMouseWheel),t(n,"contextmenu",this._onContextMenu),t(n,"dblclick",this._onDoubleClick),t(n,"dragover",this._onDragOver),t(n,"dragenter",this._onDragEnter),t(n,"dragleave",this._onDragLeave),t(n,"drop",this._onDrop),this.enablePointerEvents||t(n,"touchstart",this._onTouchStart,i),"undefined"!=typeof eventjs&&e in eventjs&&(eventjs[e](n,"gesture",this._onGesture),eventjs[e](n,"drag",this._onDrag),eventjs[e](n,"orientation",this._onOrientationChange),eventjs[e](n,"shake",this._onShake),eventjs[e](n,"longpress",this._onLongPress))},
/**
         * Removes all event listeners
         */
removeListeners:function(){this.addOrRemove(e,"remove");var t=this._getEventPrefix();e(C.document,t+"up",this._onMouseUp),e(C.document,"touchend",this._onTouchEnd,i),e(C.document,t+"move",this._onMouseMove,i),e(C.document,"touchmove",this._onMouseMove,i)},
/**
         * @private
         */
_bindEvents:function(){this.eventsBound||(this._onMouseDown=this._onMouseDown.bind(this),this._onTouchStart=this._onTouchStart.bind(this),this._onMouseMove=this._onMouseMove.bind(this),this._onMouseUp=this._onMouseUp.bind(this),this._onTouchEnd=this._onTouchEnd.bind(this),this._onResize=this._onResize.bind(this),this._onGesture=this._onGesture.bind(this),this._onDrag=this._onDrag.bind(this),this._onShake=this._onShake.bind(this),this._onLongPress=this._onLongPress.bind(this),this._onOrientationChange=this._onOrientationChange.bind(this),this._onMouseWheel=this._onMouseWheel.bind(this),this._onMouseOut=this._onMouseOut.bind(this),this._onMouseEnter=this._onMouseEnter.bind(this),this._onContextMenu=this._onContextMenu.bind(this),this._onDoubleClick=this._onDoubleClick.bind(this),this._onDragOver=this._onDragOver.bind(this),this._onDragEnter=this._simpleEventHandler.bind(this,"dragenter"),this._onDragLeave=this._simpleEventHandler.bind(this,"dragleave"),this._onDrop=this._onDrop.bind(this),this.eventsBound=!0)},
/**
         * @private
         * @param {Event} [e] Event object fired on Event.js gesture
         * @param {Event} [self] Inner Event object
         */
_onGesture:function(t,e){this.__onTransformGesture&&this.__onTransformGesture(t,e)},
/**
         * @private
         * @param {Event} [e] Event object fired on Event.js drag
         * @param {Event} [self] Inner Event object
         */
_onDrag:function(t,e){this.__onDrag&&this.__onDrag(t,e)},
/**
         * @private
         * @param {Event} [e] Event object fired on wheel event
         */
_onMouseWheel:function(t){this.__onMouseWheel(t)},
/**
         * @private
         * @param {Event} e Event object fired on mousedown
         */
_onMouseOut:function(t){var e=this._hoveredTarget;this.fire("mouse:out",{target:e,e:t}),this._hoveredTarget=null,e&&e.fire("mouseout",{e:t});var i=this;this._hoveredTargets.forEach((function(n){i.fire("mouse:out",{target:e,e:t}),n&&e.fire("mouseout",{e:t})})),this._hoveredTargets=[]},
/**
         * @private
         * @param {Event} e Event object fired on mouseenter
         */
_onMouseEnter:function(t){this._currentTransform||this.findTarget(t)||(this.fire("mouse:over",{target:null,e:t}),this._hoveredTarget=null,this._hoveredTargets=[])},
/**
         * @private
         * @param {Event} [e] Event object fired on Event.js orientation change
         * @param {Event} [self] Inner Event object
         */
_onOrientationChange:function(t,e){this.__onOrientationChange&&this.__onOrientationChange(t,e)},
/**
         * @private
         * @param {Event} [e] Event object fired on Event.js shake
         * @param {Event} [self] Inner Event object
         */
_onShake:function(t,e){this.__onShake&&this.__onShake(t,e)},
/**
         * @private
         * @param {Event} [e] Event object fired on Event.js shake
         * @param {Event} [self] Inner Event object
         */
_onLongPress:function(t,e){this.__onLongPress&&this.__onLongPress(t,e)},
/**
         * prevent default to allow drop event to be fired
         * @private
         * @param {Event} [e] Event object fired on Event.js shake
         */
_onDragOver:function(t){t.preventDefault();var e=this._simpleEventHandler("dragover",t);this._fireEnterLeaveEvents(e,t)},
/**
         * `drop:before` is a an event that allow you to schedule logic
         * before the `drop` event. Prefer `drop` event always, but if you need
         * to run some drop-disabling logic on an event, since there is no way
         * to handle event handlers ordering, use `drop:before`
         * @param {Event} e
         */
_onDrop:function(t){return this._simpleEventHandler("drop:before",t),this._simpleEventHandler("drop",t)},
/**
         * @private
         * @param {Event} e Event object fired on mousedown
         */
_onContextMenu:function(t){return this.stopContextMenu&&(t.stopPropagation(),t.preventDefault()),!1},
/**
         * @private
         * @param {Event} e Event object fired on mousedown
         */
_onDoubleClick:function(t){this._cacheTransformEventData(t),this._handleEvent(t,"dblclick"),this._resetTransformEventData(t)},
/**
         * Return a the id of an event.
         * returns either the pointerId or the identifier or 0 for the mouse event
         * @private
         * @param {Event} evt Event object
         */
getPointerId:function(t){var e=t.changedTouches;return e?e[0]&&e[0].identifier:this.enablePointerEvents?t.pointerId:-1},
/**
         * Determines if an event has the id of the event that is considered main
         * @private
         * @param {evt} event Event object
         */
_isMainEvent:function(t){return!0===t.isPrimary||!1!==t.isPrimary&&("touchend"===t.type&&0===t.touches.length||(!t.changedTouches||t.changedTouches[0].identifier===this.mainTouchId))},
/**
         * @private
         * @param {Event} e Event object fired on mousedown
         */
_onTouchStart:function(n){n.preventDefault(),null===this.mainTouchId&&(this.mainTouchId=this.getPointerId(n)),this.__onMouseDown(n),this._resetTransformEventData();var r=this.upperCanvasEl,o=this._getEventPrefix();t(C.document,"touchend",this._onTouchEnd,i),t(C.document,"touchmove",this._onMouseMove,i),e(r,o+"down",this._onMouseDown)},
/**
         * @private
         * @param {Event} e Event object fired on mousedown
         */
_onMouseDown:function(n){this.__onMouseDown(n),this._resetTransformEventData();var r=this.upperCanvasEl,o=this._getEventPrefix();e(r,o+"move",this._onMouseMove,i),t(C.document,o+"up",this._onMouseUp),t(C.document,o+"move",this._onMouseMove,i)},
/**
         * @private
         * @param {Event} e Event object fired on mousedown
         */
_onTouchEnd:function(n){if(!(n.touches.length>0)){this.__onMouseUp(n),this._resetTransformEventData(),this.mainTouchId=null;var r=this._getEventPrefix();e(C.document,"touchend",this._onTouchEnd,i),e(C.document,"touchmove",this._onMouseMove,i);var o=this;this._willAddMouseDown&&clearTimeout(this._willAddMouseDown),this._willAddMouseDown=setTimeout((function(){t(o.upperCanvasEl,r+"down",o._onMouseDown),o._willAddMouseDown=0}),400)}},
/**
         * @private
         * @param {Event} e Event object fired on mouseup
         */
_onMouseUp:function(n){this.__onMouseUp(n),this._resetTransformEventData();var r=this.upperCanvasEl,o=this._getEventPrefix();this._isMainEvent(n)&&(e(C.document,o+"up",this._onMouseUp),e(C.document,o+"move",this._onMouseMove,i),t(r,o+"move",this._onMouseMove,i))},
/**
         * @private
         * @param {Event} e Event object fired on mousemove
         */
_onMouseMove:function(t){!this.allowTouchScrolling&&t.preventDefault&&t.preventDefault(),this.__onMouseMove(t)},
/**
         * @private
         */
_onResize:function(){this.calcOffset()},
/**
         * Decides whether the canvas should be redrawn in mouseup and mousedown events.
         * @private
         * @param {Object} target
         */
_shouldRender:function(t){var e=this._activeObject;return!!(!!e!=!!t||e&&t&&e!==t)||(e&&e.isEditing,!1)},
/**
         * Method that defines the actions when mouse is released on canvas.
         * The method resets the currentTransform parameters, store the image corner
         * position in the image object and render the canvas on top.
         * @private
         * @param {Event} e Event object fired on mouseup
         */
__onMouseUp:function(t){var e,i=this._currentTransform,r=this._groupSelector,o=!1,s=!r||0===r.left&&0===r.top;if(this._cacheTransformEventData(t),e=this._target,this._handleEvent(t,"up:before"),n(t,3))this.fireRightClick&&this._handleEvent(t,"up",3,s);else{if(n(t,2))return this.fireMiddleClick&&this._handleEvent(t,"up",2,s),void this._resetTransformEventData();if(this.isDrawingMode&&this._isCurrentlyDrawing)this._onMouseUpInDrawingMode(t);else if(this._isMainEvent(t)){if(i&&(this._finalizeCurrentTransform(t),o=i.actionPerformed),!s){var a=e===this._activeObject;this._maybeGroupObjects(t),o||(o=this._shouldRender(e)||!a&&e===this._activeObject)}var l,c;if(e){if(l=e._findTargetCorner(this.getPointer(t,!0),C.util.isTouchEvent(t)),e.selectable&&e!==this._activeObject&&"up"===e.activeOn)this.setActiveObject(e,t),o=!0;else{var h=e.controls[l],u=h&&h.getMouseUpHandler(t,e,h);u&&u(t,i,(c=this.getPointer(t)).x,c.y)}e.isMoving=!1}if(i&&(i.target!==e||i.corner!==l)){var f=i.target&&i.target.controls[i.corner],d=f&&f.getMouseUpHandler(t,e,h);c=c||this.getPointer(t),d&&d(t,i,c.x,c.y)}this._setCursorFromEvent(t,e),this._handleEvent(t,"up",1,s),this._groupSelector=null,this._currentTransform=null,e&&(e.__corner=0),o?this.requestRenderAll():s||this.renderTop()}}},
/**
         * @private
         * Handle event firing for target and subtargets
         * @param {Event} e event from mouse
         * @param {String} eventType event to fire (up, down or move)
         * @return {Fabric.Object} target return the the target found, for internal reasons.
         */
_simpleEventHandler:function(t,e){var i=this.findTarget(e),n=this.targets,r={e:e,target:i,subTargets:n};if(this.fire(t,r),i&&i.fire(t,r),!n)return i;for(var o=0;o<n.length;o++)n[o].fire(t,r);return i},
/**
         * @private
         * Handle event firing for target and subtargets
         * @param {Event} e event from mouse
         * @param {String} eventType event to fire (up, down or move)
         * @param {fabric.Object} targetObj receiving event
         * @param {Number} [button] button used in the event 1 = left, 2 = middle, 3 = right
         * @param {Boolean} isClick for left button only, indicates that the mouse up happened without move.
         */
_handleEvent:function(t,e,i,n){var r=this._target,o=this.targets||[],s={e:t,target:r,subTargets:o,button:i||1,isClick:n||!1,pointer:this._pointer,absolutePointer:this._absolutePointer,transform:this._currentTransform};"up"===e&&(s.currentTarget=this.findTarget(t),s.currentSubTargets=this.targets),this.fire("mouse:"+e,s),r&&r.fire("mouse"+e,s);for(var a=0;a<o.length;a++)o[a].fire("mouse"+e,s)},
/**
         * @private
         * @param {Event} e send the mouse event that generate the finalize down, so it can be used in the event
         */
_finalizeCurrentTransform:function(t){var e=this._currentTransform,i=e.target,n={e:t,target:i,transform:e,action:e.action};i._scaling&&(i._scaling=!1),i.setCoords(),(e.actionPerformed||this.stateful&&i.hasStateChanged())&&this._fire("modified",n)},
/**
         * @private
         * @param {Event} e Event object fired on mousedown
         */
_onMouseDownInDrawingMode:function(t){this._isCurrentlyDrawing=!0,this.getActiveObject()&&this.discardActiveObject(t).requestRenderAll();var e=this.getPointer(t);this.freeDrawingBrush.onMouseDown(e,{e:t,pointer:e}),this._handleEvent(t,"down")},
/**
         * @private
         * @param {Event} e Event object fired on mousemove
         */
_onMouseMoveInDrawingMode:function(t){if(this._isCurrentlyDrawing){var e=this.getPointer(t);this.freeDrawingBrush.onMouseMove(e,{e:t,pointer:e})}this.setCursor(this.freeDrawingCursor),this._handleEvent(t,"move")},
/**
         * @private
         * @param {Event} e Event object fired on mouseup
         */
_onMouseUpInDrawingMode:function(t){var e=this.getPointer(t);this._isCurrentlyDrawing=this.freeDrawingBrush.onMouseUp({e:t,pointer:e}),this._handleEvent(t,"up")},
/**
         * Method that defines the actions when mouse is clicked on canvas.
         * The method inits the currentTransform parameters and renders all the
         * canvas so the current image can be placed on the top canvas and the rest
         * in on the container one.
         * @private
         * @param {Event} e Event object fired on mousedown
         */
__onMouseDown:function(t){this._cacheTransformEventData(t),this._handleEvent(t,"down:before");var e=this._target;if(n(t,3))this.fireRightClick&&this._handleEvent(t,"down",3);else if(n(t,2))this.fireMiddleClick&&this._handleEvent(t,"down",2);else if(this.isDrawingMode)this._onMouseDownInDrawingMode(t);else if(this._isMainEvent(t)&&!this._currentTransform){var i=this._pointer;this._previousPointer=i;var r=this._shouldRender(e),o=this._shouldGroup(t,e);if(this._shouldClearSelection(t,e)?this.discardActiveObject(t):o&&(this._handleGrouping(t,e),e=this._activeObject),!this.selection||e&&(e.selectable||e.isEditing||e===this._activeObject)||(this._groupSelector={ex:this._absolutePointer.x,ey:this._absolutePointer.y,top:0,left:0}),e){var s=e===this._activeObject;e.selectable&&"down"===e.activeOn&&this.setActiveObject(e,t);var a=e._findTargetCorner(this.getPointer(t,!0),C.util.isTouchEvent(t));if(e.__corner=a,e===this._activeObject&&(a||!o)){this._setupCurrentTransform(t,e,s);var l=e.controls[a],c=(i=this.getPointer(t),l&&l.getMouseDownHandler(t,e,l));c&&c(t,this._currentTransform,i.x,i.y)}}this._handleEvent(t,"down"),(r||o)&&this.requestRenderAll()}},
/**
         * reset cache form common information needed during event processing
         * @private
         */
_resetTransformEventData:function(){this._target=null,this._pointer=null,this._absolutePointer=null},
/**
         * Cache common information needed during event processing
         * @private
         * @param {Event} e Event object fired on event
         */
_cacheTransformEventData:function(t){this._resetTransformEventData(),this._pointer=this.getPointer(t,!0),this._absolutePointer=this.restorePointerVpt(this._pointer),this._target=this._currentTransform?this._currentTransform.target:this.findTarget(t)||null},
/**
         * @private
         */
_beforeTransform:function(t){var e=this._currentTransform;this.stateful&&e.target.saveState(),this.fire("before:transform",{e:t,transform:e})},
/**
         * Method that defines the actions when mouse is hovering the canvas.
         * The currentTransform parameter will define whether the user is rotating/scaling/translating
         * an image or neither of them (only hovering). A group selection is also possible and would cancel
         * all any other type of action.
         * In case of an image transformation only the top canvas will be rendered.
         * @private
         * @param {Event} e Event object fired on mousemove
         */
__onMouseMove:function(t){var e,i;if(this._handleEvent(t,"move:before"),this._cacheTransformEventData(t),this.isDrawingMode)this._onMouseMoveInDrawingMode(t);else if(this._isMainEvent(t)){var n=this._groupSelector;n?(i=this._absolutePointer,n.left=i.x-n.ex,n.top=i.y-n.ey,this.renderTop()):this._currentTransform?this._transformObject(t):(e=this.findTarget(t)||null,this._setCursorFromEvent(t,e),this._fireOverOutEvents(e,t)),this._handleEvent(t,"move"),this._resetTransformEventData()}},
/**
         * Manage the mouseout, mouseover events for the fabric object on the canvas
         * @param {Fabric.Object} target the target where the target from the mousemove event
         * @param {Event} e Event object fired on mousemove
         * @private
         */
_fireOverOutEvents:function(t,e){var i=this._hoveredTarget,n=this._hoveredTargets,r=this.targets,o=Math.max(n.length,r.length);this.fireSyntheticInOutEvents(t,e,{oldTarget:i,evtOut:"mouseout",canvasEvtOut:"mouse:out",evtIn:"mouseover",canvasEvtIn:"mouse:over"});for(var s=0;s<o;s++)this.fireSyntheticInOutEvents(r[s],e,{oldTarget:n[s],evtOut:"mouseout",evtIn:"mouseover"});this._hoveredTarget=t,this._hoveredTargets=this.targets.concat()},
/**
         * Manage the dragEnter, dragLeave events for the fabric objects on the canvas
         * @param {Fabric.Object} target the target where the target from the onDrag event
         * @param {Event} e Event object fired on ondrag
         * @private
         */
_fireEnterLeaveEvents:function(t,e){var i=this._draggedoverTarget,n=this._hoveredTargets,r=this.targets,o=Math.max(n.length,r.length);this.fireSyntheticInOutEvents(t,e,{oldTarget:i,evtOut:"dragleave",evtIn:"dragenter"});for(var s=0;s<o;s++)this.fireSyntheticInOutEvents(r[s],e,{oldTarget:n[s],evtOut:"dragleave",evtIn:"dragenter"});this._draggedoverTarget=t},
/**
         * Manage the synthetic in/out events for the fabric objects on the canvas
         * @param {Fabric.Object} target the target where the target from the supported events
         * @param {Event} e Event object fired
         * @param {Object} config configuration for the function to work
         * @param {String} config.targetName property on the canvas where the old target is stored
         * @param {String} [config.canvasEvtOut] name of the event to fire at canvas level for out
         * @param {String} config.evtOut name of the event to fire for out
         * @param {String} [config.canvasEvtIn] name of the event to fire at canvas level for in
         * @param {String} config.evtIn name of the event to fire for in
         * @private
         */
fireSyntheticInOutEvents:function(t,e,i){var n,r,o,s=i.oldTarget,a=s!==t,l=i.canvasEvtIn,c=i.canvasEvtOut;a&&(n={e:e,target:t,previousTarget:s},r={e:e,target:s,nextTarget:t}),o=t&&a,s&&a&&(c&&this.fire(c,r),s.fire(i.evtOut,r)),o&&(l&&this.fire(l,n),t.fire(i.evtIn,n))},
/**
         * Method that defines actions when an Event Mouse Wheel
         * @param {Event} e Event object fired on mouseup
         */
__onMouseWheel:function(t){this._cacheTransformEventData(t),this._handleEvent(t,"wheel"),this._resetTransformEventData()},
/**
         * @private
         * @param {Event} e Event fired on mousemove
         */
_transformObject:function(t){var e=this.getPointer(t),i=this._currentTransform;i.reset=!1,i.shiftKey=t.shiftKey,i.altKey=t[this.centeredKey],this._performTransformAction(t,i,e),i.actionPerformed&&this.requestRenderAll()},
/**
         * @private
         */
_performTransformAction:function(t,e,i){var n=i.x,r=i.y,o=e.action,s=!1,a=e.actionHandler;a&&(s=a(t,e,n,r)),"drag"===o&&s&&(e.target.isMoving=!0,this.setCursor(e.target.moveCursor||this.moveCursor)),e.actionPerformed=e.actionPerformed||s},
/**
         * @private
         */
_fire:C.controlsUtils.fireEvent,
/**
         * Sets the cursor depending on where the canvas is being hovered.
         * Note: very buggy in Opera
         * @param {Event} e Event object
         * @param {Object} target Object that the mouse is hovering, if so.
         */
_setCursorFromEvent:function(t,e){if(!e)return this.setCursor(this.defaultCursor),!1;var i=e.hoverCursor||this.hoverCursor,n=this._activeObject&&"activeSelection"===this._activeObject.type?this._activeObject:null,r=(!n||!n.contains(e))&&e._findTargetCorner(this.getPointer(t,!0));r?this.setCursor(this.getCornerCursor(r,e,t)):(e.subTargetCheck&&this.targets.concat().reverse().map((function(t){i=t.hoverCursor||i})),this.setCursor(i))},
/**
         * @private
         */
getCornerCursor:function(t,e,i){var n=e.controls[t];return n.cursorStyleHandler(i,n,e)}})}(),v=Math.min,m=Math.max,C.util.object.extend(C.Canvas.prototype,
/** @lends fabric.Canvas.prototype */
{
/**
         * @private
         * @param {Event} e Event object
         * @param {fabric.Object} target
         * @return {Boolean}
         */
_shouldGroup:function(t,e){var i=this._activeObject;return i&&this._isSelectionKeyPressed(t)&&e&&e.selectable&&this.selection&&(i!==e||"activeSelection"===i.type)&&!e.onSelect({e:t})},
/**
         * @private
         * @param {Event} e Event object
         * @param {fabric.Object} target
         */
_handleGrouping:function(t,e){var i=this._activeObject;i.__corner||(e!==i||(e=this.findTarget(t,!0))&&e.selectable)&&(i&&"activeSelection"===i.type?this._updateActiveSelection(e,t):this._createActiveSelection(e,t))},
/**
         * @private
         */
_updateActiveSelection:function(t,e){var i=this._activeObject,n=i._objects.slice(0);i.contains(t)?(i.removeWithUpdate(t),this._hoveredTarget=t,this._hoveredTargets=this.targets.concat(),1===i.size()&&this._setActiveObject(i.item(0),e)):(i.addWithUpdate(t),this._hoveredTarget=i,this._hoveredTargets=this.targets.concat()),this._fireSelectionEvents(n,e)},
/**
         * @private
         */
_createActiveSelection:function(t,e){var i=this.getActiveObjects(),n=this._createGroup(t);this._hoveredTarget=n,this._setActiveObject(n,e),this._fireSelectionEvents(i,e)},
/**
         * @private
         * @param {Object} target
         */
_createGroup:function(t){var e=this._objects,i=e.indexOf(this._activeObject)<e.indexOf(t)?[this._activeObject,t]:[t,this._activeObject];return this._activeObject.isEditing&&this._activeObject.exitEditing(),new C.ActiveSelection(i,{canvas:this})},
/**
         * @private
         * @param {Event} e mouse event
         */
_groupSelectedObjects:function(t){var e,i=this._collectObjects(t);1===i.length?this.setActiveObject(i[0],t):i.length>1&&(e=new C.ActiveSelection(i.reverse(),{canvas:this}),this.setActiveObject(e,t))},
/**
         * @private
         */
_collectObjects:function(t){for(var e,i=[],n=this._groupSelector.ex,r=this._groupSelector.ey,o=n+this._groupSelector.left,s=r+this._groupSelector.top,a=new C.Point(v(n,o),v(r,s)),l=new C.Point(m(n,o),m(r,s)),c=!this.selectionFullyContained,h=n===o&&r===s,u=this._objects.length;u--&&!((e=this._objects[u])&&e.selectable&&e.visible&&(c&&e.intersectsWithRect(a,l,!0)||e.isContainedWithinRect(a,l,!0)||c&&e.containsPoint(a,null,!0)||c&&e.containsPoint(l,null,!0))&&(i.push(e),h)););return i.length>1&&(i=i.filter((function(e){return!e.onSelect({e:t})}))),i},
/**
         * @private
         */
_maybeGroupObjects:function(t){this.selection&&this._groupSelector&&this._groupSelectedObjects(t),this.setCursor(this.defaultCursor),this._groupSelector=null}}),C.util.object.extend(C.StaticCanvas.prototype,
/** @lends fabric.StaticCanvas.prototype */
{
/**
         * Exports canvas element to a dataurl image. Note that when multiplier is used, cropping is scaled appropriately
         * @param {Object} [options] Options object
         * @param {String} [options.format=png] The format of the output image. Either "jpeg" or "png"
         * @param {Number} [options.quality=1] Quality level (0..1). Only used for jpeg.
         * @param {Number} [options.multiplier=1] Multiplier to scale by, to have consistent
         * @param {Number} [options.left] Cropping left offset. Introduced in v1.2.14
         * @param {Number} [options.top] Cropping top offset. Introduced in v1.2.14
         * @param {Number} [options.width] Cropping width. Introduced in v1.2.14
         * @param {Number} [options.height] Cropping height. Introduced in v1.2.14
         * @param {Boolean} [options.enableRetinaScaling] Enable retina scaling for clone image. Introduce in 2.0.0
         * @return {String} Returns a data: URL containing a representation of the object in the format specified by options.format
         * @see {@link http://jsfiddle.net/fabricjs/NfZVb/|jsFiddle demo}
         * @example <caption>Generate jpeg dataURL with lower quality</caption>
         * var dataURL = canvas.toDataURL({
         *   format: 'jpeg',
         *   quality: 0.8
         * });
         * @example <caption>Generate cropped png dataURL (clipping of canvas)</caption>
         * var dataURL = canvas.toDataURL({
         *   format: 'png',
         *   left: 100,
         *   top: 100,
         *   width: 200,
         *   height: 200
         * });
         * @example <caption>Generate double scaled png dataURL</caption>
         * var dataURL = canvas.toDataURL({
         *   format: 'png',
         *   multiplier: 2
         * });
         */
toDataURL:function(t){t||(t={});var e=t.format||"png",i=t.quality||1,n=(t.multiplier||1)*(t.enableRetinaScaling?this.getRetinaScaling():1),r=this.toCanvasElement(n,t);return C.util.toDataURL(r,e,i)},
/**
         * Create a new HTMLCanvas element painted with the current canvas content.
         * No need to resize the actual one or repaint it.
         * Will transfer object ownership to a new canvas, paint it, and set everything back.
         * This is an intermediary step used to get to a dataUrl but also it is useful to
         * create quick image copies of a canvas without passing for the dataUrl string
         * @param {Number} [multiplier] a zoom factor.
         * @param {Object} [cropping] Cropping informations
         * @param {Number} [cropping.left] Cropping left offset.
         * @param {Number} [cropping.top] Cropping top offset.
         * @param {Number} [cropping.width] Cropping width.
         * @param {Number} [cropping.height] Cropping height.
         */
toCanvasElement:function(t,e){t=t||1;var i=((e=e||{}).width||this.width)*t,n=(e.height||this.height)*t,r=this.getZoom(),o=this.width,s=this.height,a=r*t,l=this.viewportTransform,c=(l[4]-(e.left||0))*t,h=(l[5]-(e.top||0))*t,u=this.interactive,f=[a,0,0,a,c,h],d=this.enableRetinaScaling,p=C.util.createCanvasElement(),g=this.contextTop;return p.width=i,p.height=n,this.contextTop=null,this.enableRetinaScaling=!1,this.interactive=!1,this.viewportTransform=f,this.width=i,this.height=n,this.calcViewportBoundaries(),this.renderCanvas(p.getContext("2d"),this._objects),this.viewportTransform=l,this.width=o,this.height=s,this.calcViewportBoundaries(),this.interactive=u,this.enableRetinaScaling=d,this.contextTop=g,p}}),C.util.object.extend(C.StaticCanvas.prototype,
/** @lends fabric.StaticCanvas.prototype */
{
/**
       * Populates canvas with data from the specified JSON.
       * JSON format must conform to the one of {@link fabric.Canvas#toJSON}
       * @param {String|Object} json JSON string or object
       * @param {Function} callback Callback, invoked when json is parsed
       *                            and corresponding objects (e.g: {@link fabric.Image})
       *                            are initialized
       * @param {Function} [reviver] Method for further parsing of JSON elements, called after each fabric object created.
       * @return {fabric.Canvas} instance
       * @chainable
       * @tutorial {@link http://fabricjs.com/fabric-intro-part-3#deserialization}
       * @see {@link http://jsfiddle.net/fabricjs/fmgXt/|jsFiddle demo}
       * @example <caption>loadFromJSON</caption>
       * canvas.loadFromJSON(json, canvas.renderAll.bind(canvas));
       * @example <caption>loadFromJSON with reviver</caption>
       * canvas.loadFromJSON(json, canvas.renderAll.bind(canvas), function(o, object) {
       *   // `o` = json object
       *   // `object` = fabric.Object instance
       *   // ... do some stuff ...
       * });
       */
loadFromJSON:function(t,e,i){if(t){var n="string"==typeof t?JSON.parse(t):C.util.object.clone(t),r=this,o=n.clipPath,s=this.renderOnAddRemove;return this.renderOnAddRemove=!1,delete n.clipPath,this._enlivenObjects(n.objects,(function(t){r.clear(),r._setBgOverlay(n,(function(){o?r._enlivenObjects([o],(function(i){r.clipPath=i[0],r.__setupCanvas.call(r,n,t,s,e)})):r.__setupCanvas.call(r,n,t,s,e)}))}),i),this}},
/**
       * @private
       * @param {Object} serialized Object with background and overlay information
       * @param {Array} restored canvas objects
       * @param {Function} cached renderOnAddRemove callback
       * @param {Function} callback Invoked after all background and overlay images/patterns loaded
       */
__setupCanvas:function(t,e,i,n){var r=this;e.forEach((function(t,e){r.insertAt(t,e)})),this.renderOnAddRemove=i,delete t.objects,delete t.backgroundImage,delete t.overlayImage,delete t.background,delete t.overlay,this._setOptions(t),this.renderAll(),n&&n()},
/**
       * @private
       * @param {Object} serialized Object with background and overlay information
       * @param {Function} callback Invoked after all background and overlay images/patterns loaded
       */
_setBgOverlay:function(t,e){var i={backgroundColor:!1,overlayColor:!1,backgroundImage:!1,overlayImage:!1};if(t.backgroundImage||t.overlayImage||t.background||t.overlay){var n=function(){i.backgroundImage&&i.overlayImage&&i.backgroundColor&&i.overlayColor&&e&&e()};this.__setBgOverlay("backgroundImage",t.backgroundImage,i,n),this.__setBgOverlay("overlayImage",t.overlayImage,i,n),this.__setBgOverlay("backgroundColor",t.background,i,n),this.__setBgOverlay("overlayColor",t.overlay,i,n)}else e&&e()},
/**
       * @private
       * @param {String} property Property to set (backgroundImage, overlayImage, backgroundColor, overlayColor)
       * @param {(Object|String)} value Value to set
       * @param {Object} loaded Set loaded property to true if property is set
       * @param {Object} callback Callback function to invoke after property is set
       */
__setBgOverlay:function(t,e,i,n){var r=this;if(!e)return i[t]=!0,void(n&&n());"backgroundImage"===t||"overlayImage"===t?C.util.enlivenObjects([e],(function(e){r[t]=e[0],i[t]=!0,n&&n()})):this["set"+C.util.string.capitalize(t,!0)](e,(function(){i[t]=!0,n&&n()}))},
/**
       * @private
       * @param {Array} objects
       * @param {Function} callback
       * @param {Function} [reviver]
       */
_enlivenObjects:function(t,e,i){t&&0!==t.length?C.util.enlivenObjects(t,(function(t){e&&e(t)}),null,i):e&&e([])},
/**
       * @private
       * @param {String} format
       * @param {Function} callback
       */
_toDataURL:function(t,e){this.clone((function(i){e(i.toDataURL(t))}))},
/**
       * @private
       * @param {String} format
       * @param {Number} multiplier
       * @param {Function} callback
       */
_toDataURLWithMultiplier:function(t,e,i){this.clone((function(n){i(n.toDataURLWithMultiplier(t,e))}))},
/**
       * Clones canvas instance
       * @param {Object} [callback] Receives cloned instance as a first argument
       * @param {Array} [properties] Array of properties to include in the cloned canvas and children
       */
clone:function(t,e){var i=JSON.stringify(this.toJSON(e));this.cloneWithoutData((function(e){e.loadFromJSON(i,(function(){t&&t(e)}))}))},
/**
       * Clones canvas instance without cloning existing data.
       * This essentially copies canvas dimensions, clipping properties, etc.
       * but leaves data empty (so that you can populate it with your own)
       * @param {Object} [callback] Receives cloned instance as a first argument
       */
cloneWithoutData:function(t){var e=C.util.createCanvasElement();e.width=this.width,e.height=this.height;var i=new C.Canvas(e);this.backgroundImage?(i.setBackgroundImage(this.backgroundImage.src,(function(){i.renderAll(),t&&t(i)})),i.backgroundImageOpacity=this.backgroundImageOpacity,i.backgroundImageStretch=this.backgroundImageStretch):t&&t(i)}}),function(t){var e=t.fabric||(t.fabric={}),i=e.util.object.extend,n=e.util.object.clone,r=e.util.toFixed,o=e.util.string.capitalize,s=e.util.degreesToRadians,a=!e.isLikelyNode;e.Object||(e.Object=e.util.createClass(e.CommonMethods,
/** @lends fabric.Object.prototype */
{
/**
         * Type of an object (rect, circle, path, etc.).
         * Note that this property is meant to be read-only and not meant to be modified.
         * If you modify, certain parts of Fabric (such as JSON loading) won't work correctly.
         * @type String
         * @default
         */
type:"object",
/**
         * Horizontal origin of transformation of an object (one of "left", "right", "center")
         * See http://jsfiddle.net/1ow02gea/244/ on how originX/originY affect objects in groups
         * @type String
         * @default
         */
originX:"left",
/**
         * Vertical origin of transformation of an object (one of "top", "bottom", "center")
         * See http://jsfiddle.net/1ow02gea/244/ on how originX/originY affect objects in groups
         * @type String
         * @default
         */
originY:"top",
/**
         * Top position of an object. Note that by default it's relative to object top. You can change this by setting originY={top/center/bottom}
         * @type Number
         * @default
         */
top:0,
/**
         * Left position of an object. Note that by default it's relative to object left. You can change this by setting originX={left/center/right}
         * @type Number
         * @default
         */
left:0,
/**
         * Object width
         * @type Number
         * @default
         */
width:0,
/**
         * Object height
         * @type Number
         * @default
         */
height:0,
/**
         * Object scale factor (horizontal)
         * @type Number
         * @default
         */
scaleX:1,
/**
         * Object scale factor (vertical)
         * @type Number
         * @default
         */
scaleY:1,
/**
         * When true, an object is rendered as flipped horizontally
         * @type Boolean
         * @default
         */
flipX:!1,
/**
         * When true, an object is rendered as flipped vertically
         * @type Boolean
         * @default
         */
flipY:!1,
/**
         * Opacity of an object
         * @type Number
         * @default
         */
opacity:1,
/**
         * Angle of rotation of an object (in degrees)
         * @type Number
         * @default
         */
angle:0,
/**
         * Angle of skew on x axes of an object (in degrees)
         * @type Number
         * @default
         */
skewX:0,
/**
         * Angle of skew on y axes of an object (in degrees)
         * @type Number
         * @default
         */
skewY:0,
/**
         * Size of object's controlling corners (in pixels)
         * @type Number
         * @default
         */
cornerSize:13,
/**
         * Size of object's controlling corners when touch interaction is detected
         * @type Number
         * @default
         */
touchCornerSize:24,
/**
         * When true, object's controlling corners are rendered as transparent inside (i.e. stroke instead of fill)
         * @type Boolean
         * @default
         */
transparentCorners:!0,
/**
         * Default cursor value used when hovering over this object on canvas
         * @type String
         * @default
         */
hoverCursor:null,
/**
         * Default cursor value used when moving this object on canvas
         * @type String
         * @default
         */
moveCursor:null,
/**
         * Padding between object and its controlling borders (in pixels)
         * @type Number
         * @default
         */
padding:0,
/**
         * Color of controlling borders of an object (when it's active)
         * @type String
         * @default
         */
borderColor:"rgb(178,204,255)",
/**
         * Array specifying dash pattern of an object's borders (hasBorder must be true)
         * @since 1.6.2
         * @type Array
         */
borderDashArray:null,
/**
         * Color of controlling corners of an object (when it's active)
         * @type String
         * @default
         */
cornerColor:"rgb(178,204,255)",
/**
         * Color of controlling corners of an object (when it's active and transparentCorners false)
         * @since 1.6.2
         * @type String
         * @default
         */
cornerStrokeColor:null,
/**
         * Specify style of control, 'rect' or 'circle'
         * @since 1.6.2
         * @type String
         */
cornerStyle:"rect",
/**
         * Array specifying dash pattern of an object's control (hasBorder must be true)
         * @since 1.6.2
         * @type Array
         */
cornerDashArray:null,
/**
         * When true, this object will use center point as the origin of transformation
         * when being scaled via the controls.
         * <b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).
         * @since 1.3.4
         * @type Boolean
         * @default
         */
centeredScaling:!1,
/**
         * When true, this object will use center point as the origin of transformation
         * when being rotated via the controls.
         * <b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).
         * @since 1.3.4
         * @type Boolean
         * @default
         */
centeredRotation:!0,
/**
         * Color of object's fill
         * takes css colors https://www.w3.org/TR/css-color-3/
         * @type String
         * @default
         */
fill:"rgb(0,0,0)",
/**
         * Fill rule used to fill an object
         * accepted values are nonzero, evenodd
         * <b>Backwards incompatibility note:</b> This property was used for setting globalCompositeOperation until v1.4.12 (use `fabric.Object#globalCompositeOperation` instead)
         * @type String
         * @default
         */
fillRule:"nonzero",
/**
         * Composite rule used for canvas globalCompositeOperation
         * @type String
         * @default
         */
globalCompositeOperation:"source-over",
/**
         * Background color of an object.
         * takes css colors https://www.w3.org/TR/css-color-3/
         * @type String
         * @default
         */
backgroundColor:"",
/**
         * Selection Background color of an object. colored layer behind the object when it is active.
         * does not mix good with globalCompositeOperation methods.
         * @type String
         * @default
         */
selectionBackgroundColor:"",
/**
         * When defined, an object is rendered via stroke and this property specifies its color
         * takes css colors https://www.w3.org/TR/css-color-3/
         * @type String
         * @default
         */
stroke:null,
/**
         * Width of a stroke used to render this object
         * @type Number
         * @default
         */
strokeWidth:1,
/**
         * Array specifying dash pattern of an object's stroke (stroke must be defined)
         * @type Array
         */
strokeDashArray:null,
/**
         * Line offset of an object's stroke
         * @type Number
         * @default
         */
strokeDashOffset:0,
/**
         * Line endings style of an object's stroke (one of "butt", "round", "square")
         * @type String
         * @default
         */
strokeLineCap:"butt",
/**
         * Corner style of an object's stroke (one of "bevel", "round", "miter")
         * @type String
         * @default
         */
strokeLineJoin:"miter",
/**
         * Maximum miter length (used for strokeLineJoin = "miter") of an object's stroke
         * @type Number
         * @default
         */
strokeMiterLimit:4,
/**
         * Shadow object representing shadow of this shape
         * @type fabric.Shadow
         * @default
         */
shadow:null,
/**
         * Opacity of object's controlling borders when object is active and moving
         * @type Number
         * @default
         */
borderOpacityWhenMoving:.4,
/**
         * Scale factor of object's controlling borders
         * bigger number will make a thicker border
         * border is 1, so this is basically a border thickness
         * since there is no way to change the border itself.
         * @type Number
         * @default
         */
borderScaleFactor:1,
/**
         * Minimum allowed scale value of an object
         * @type Number
         * @default
         */
minScaleLimit:0,
/**
         * When set to `false`, an object can not be selected for modification (using either point-click-based or group-based selection).
         * But events still fire on it.
         * @type Boolean
         * @default
         */
selectable:!0,
/**
         * When set to `false`, an object can not be a target of events. All events propagate through it. Introduced in v1.3.4
         * @type Boolean
         * @default
         */
evented:!0,
/**
         * When set to `false`, an object is not rendered on canvas
         * @type Boolean
         * @default
         */
visible:!0,
/**
         * When set to `false`, object's controls are not displayed and can not be used to manipulate object
         * @type Boolean
         * @default
         */
hasControls:!0,
/**
         * When set to `false`, object's controlling borders are not rendered
         * @type Boolean
         * @default
         */
hasBorders:!0,
/**
         * When set to `true`, objects are "found" on canvas on per-pixel basis rather than according to bounding box
         * @type Boolean
         * @default
         */
perPixelTargetFind:!1,
/**
         * When `false`, default object's values are not included in its serialization
         * @type Boolean
         * @default
         */
includeDefaultValues:!0,
/**
         * When `true`, object horizontal movement is locked
         * @type Boolean
         * @default
         */
lockMovementX:!1,
/**
         * When `true`, object vertical movement is locked
         * @type Boolean
         * @default
         */
lockMovementY:!1,
/**
         * When `true`, object rotation is locked
         * @type Boolean
         * @default
         */
lockRotation:!1,
/**
         * When `true`, object horizontal scaling is locked
         * @type Boolean
         * @default
         */
lockScalingX:!1,
/**
         * When `true`, object vertical scaling is locked
         * @type Boolean
         * @default
         */
lockScalingY:!1,
/**
         * When `true`, object horizontal skewing is locked
         * @type Boolean
         * @default
         */
lockSkewingX:!1,
/**
         * When `true`, object vertical skewing is locked
         * @type Boolean
         * @default
         */
lockSkewingY:!1,
/**
         * When `true`, object cannot be flipped by scaling into negative values
         * @type Boolean
         * @default
         */
lockScalingFlip:!1,
/**
         * When `true`, object is not exported in OBJECT/JSON
         * @since 1.6.3
         * @type Boolean
         * @default
         */
excludeFromExport:!1,
/**
         * When `true`, object is cached on an additional canvas.
         * When `false`, object is not cached unless necessary ( clipPath )
         * default to true
         * @since 1.7.0
         * @type Boolean
         * @default true
         */
objectCaching:a,
/**
         * When `true`, object properties are checked for cache invalidation. In some particular
         * situation you may want this to be disabled ( spray brush, very big, groups)
         * or if your application does not allow you to modify properties for groups child you want
         * to disable it for groups.
         * default to false
         * since 1.7.0
         * @type Boolean
         * @default false
         */
statefullCache:!1,
/**
         * When `true`, cache does not get updated during scaling. The picture will get blocky if scaled
         * too much and will be redrawn with correct details at the end of scaling.
         * this setting is performance and application dependant.
         * default to true
         * since 1.7.0
         * @type Boolean
         * @default true
         */
noScaleCache:!0,
/**
         * When `false`, the stoke width will scale with the object.
         * When `true`, the stroke will always match the exact pixel size entered for stroke width.
         * this Property does not work on Text classes or drawing call that uses strokeText,fillText methods
         * default to false
         * @since 2.6.0
         * @type Boolean
         * @default false
         * @type Boolean
         * @default false
         */
strokeUniform:!1,
/**
         * When set to `true`, object's cache will be rerendered next render call.
         * since 1.7.0
         * @type Boolean
         * @default true
         */
dirty:!0,
/**
         * keeps the value of the last hovered corner during mouse move.
         * 0 is no corner, or 'mt', 'ml', 'mtr' etc..
         * It should be private, but there is no harm in using it as
         * a read-only property.
         * @type number|string|any
         * @default 0
         */
__corner:0,
/**
         * Determines if the fill or the stroke is drawn first (one of "fill" or "stroke")
         * @type String
         * @default
         */
paintFirst:"fill",
/**
         * When 'down', object is set to active on mousedown/touchstart
         * When 'up', object is set to active on mouseup/touchend
         * Experimental. Let's see if this breaks anything before supporting officially
         * @private
         * since 4.4.0
         * @type String
         * @default 'down'
         */
activeOn:"down",
/**
         * List of properties to consider when checking if state
         * of an object is changed (fabric.Object#hasStateChanged)
         * as well as for history (undo/redo) purposes
         * @type Array
         */
stateProperties:"top left width height scaleX scaleY flipX flipY originX originY transformMatrix stroke strokeWidth strokeDashArray strokeLineCap strokeDashOffset strokeLineJoin strokeMiterLimit angle opacity fill globalCompositeOperation shadow visible backgroundColor skewX skewY fillRule paintFirst clipPath strokeUniform".split(" "),
/**
         * List of properties to consider when checking if cache needs refresh
         * Those properties are checked by statefullCache ON ( or lazy mode if we want ) or from single
         * calls to Object.set(key, value). If the key is in this list, the object is marked as dirty
         * and refreshed at the next render
         * @type Array
         */
cacheProperties:"fill stroke strokeWidth strokeDashArray width height paintFirst strokeUniform strokeLineCap strokeDashOffset strokeLineJoin strokeMiterLimit backgroundColor clipPath".split(" "),
/**
         * List of properties to consider for animating colors.
         * @type Array
         */
colorProperties:"fill stroke backgroundColor".split(" "),
/**
         * a fabricObject that, without stroke define a clipping area with their shape. filled in black
         * the clipPath object gets used when the object has rendered, and the context is placed in the center
         * of the object cacheCanvas.
         * If you want 0,0 of a clipPath to align with an object center, use clipPath.originX/Y to 'center'
         * @type fabric.Object
         */
clipPath:void 0,
/**
         * Meaningful ONLY when the object is used as clipPath.
         * if true, the clipPath will make the object clip to the outside of the clipPath
         * since 2.4.0
         * @type boolean
         * @default false
         */
inverted:!1,
/**
         * Meaningful ONLY when the object is used as clipPath.
         * if true, the clipPath will have its top and left relative to canvas, and will
         * not be influenced by the object transform. This will make the clipPath relative
         * to the canvas, but clipping just a particular object.
         * WARNING this is beta, this feature may change or be renamed.
         * since 2.4.0
         * @type boolean
         * @default false
         */
absolutePositioned:!1,
/**
         * Constructor
         * @param {Object} [options] Options object
         */
initialize:function(t){t&&this.setOptions(t)},
/**
         * Create a the canvas used to keep the cached copy of the object
         * @private
         */
_createCacheCanvas:function(){this._cacheProperties={},this._cacheCanvas=e.util.createCanvasElement(),this._cacheContext=this._cacheCanvas.getContext("2d"),this._updateCacheCanvas(),this.dirty=!0},
/**
         * Limit the cache dimensions so that X * Y do not cross fabric.perfLimitSizeTotal
         * and each side do not cross fabric.cacheSideLimit
         * those numbers are configurable so that you can get as much detail as you want
         * making bargain with performances.
         * @param {Object} dims
         * @param {Object} dims.width width of canvas
         * @param {Object} dims.height height of canvas
         * @param {Object} dims.zoomX zoomX zoom value to unscale the canvas before drawing cache
         * @param {Object} dims.zoomY zoomY zoom value to unscale the canvas before drawing cache
         * @return {Object}.width width of canvas
         * @return {Object}.height height of canvas
         * @return {Object}.zoomX zoomX zoom value to unscale the canvas before drawing cache
         * @return {Object}.zoomY zoomY zoom value to unscale the canvas before drawing cache
         */
_limitCacheSize:function(t){var i=e.perfLimitSizeTotal,n=t.width,r=t.height,o=e.maxCacheSideLimit,s=e.minCacheSideLimit;if(n<=o&&r<=o&&n*r<=i)return n<s&&(t.width=s),r<s&&(t.height=s),t;var a=n/r,l=e.util.limitDimsByArea(a,i),c=e.util.capValue,h=c(s,l.x,o),u=c(s,l.y,o);return n>h&&(t.zoomX/=n/h,t.width=h,t.capped=!0),r>u&&(t.zoomY/=r/u,t.height=u,t.capped=!0),t},
/**
         * Return the dimension and the zoom level needed to create a cache canvas
         * big enough to host the object to be cached.
         * @private
         * @return {Object}.x width of object to be cached
         * @return {Object}.y height of object to be cached
         * @return {Object}.width width of canvas
         * @return {Object}.height height of canvas
         * @return {Object}.zoomX zoomX zoom value to unscale the canvas before drawing cache
         * @return {Object}.zoomY zoomY zoom value to unscale the canvas before drawing cache
         */
_getCacheCanvasDimensions:function(){var t=this.getTotalObjectScaling(),e=this._getTransformedDimensions(0,0),i=e.x*t.scaleX/this.scaleX,n=e.y*t.scaleY/this.scaleY;return{
// for sure this ALIASING_LIMIT is slightly creating problem
// in situation in which the cache canvas gets an upper limit
// also objectScale contains already scaleX and scaleY
width:i+2,height:n+2,zoomX:t.scaleX,zoomY:t.scaleY,x:i,y:n}},
/**
         * Update width and height of the canvas for cache
         * returns true or false if canvas needed resize.
         * @private
         * @return {Boolean} true if the canvas has been resized
         */
_updateCacheCanvas:function(){var t=this.canvas;if(this.noScaleCache&&t&&t._currentTransform){var i=t._currentTransform.target,n=t._currentTransform.action;if(this===i&&n.slice&&"scale"===n.slice(0,5))return!1}var r,o,s=this._cacheCanvas,a=this._limitCacheSize(this._getCacheCanvasDimensions()),l=e.minCacheSideLimit,c=a.width,h=a.height,u=a.zoomX,f=a.zoomY,d=c!==this.cacheWidth||h!==this.cacheHeight,p=this.zoomX!==u||this.zoomY!==f,g=d||p,v=0,m=0,y=!1;if(d){var _=this._cacheCanvas.width,b=this._cacheCanvas.height,x=c>_||h>b;y=x||(c<.9*_||h<.9*b)&&_>l&&b>l,x&&!a.capped&&(c>l||h>l)&&(v=.1*c,m=.1*h)}return this instanceof e.Text&&this.path&&(g=!0,y=!0,v+=this.getHeightOfLine(0)*this.zoomX,m+=this.getHeightOfLine(0)*this.zoomY),!!g&&(y?(s.width=Math.ceil(c+v),s.height=Math.ceil(h+m)):(this._cacheContext.setTransform(1,0,0,1,0,0),this._cacheContext.clearRect(0,0,s.width,s.height)),r=a.x/2,o=a.y/2,this.cacheTranslationX=Math.round(s.width/2-r)+r,this.cacheTranslationY=Math.round(s.height/2-o)+o,this.cacheWidth=c,this.cacheHeight=h,this._cacheContext.translate(this.cacheTranslationX,this.cacheTranslationY),this._cacheContext.scale(u,f),this.zoomX=u,this.zoomY=f,!0)},
/**
         * Sets object's properties from options
         * @param {Object} [options] Options object
         */
setOptions:function(t){this._setOptions(t),this._initGradient(t.fill,"fill"),this._initGradient(t.stroke,"stroke"),this._initPattern(t.fill,"fill"),this._initPattern(t.stroke,"stroke")},
/**
         * Transforms context when rendering an object
         * @param {CanvasRenderingContext2D} ctx Context
         */
transform:function(t){var e=this.group&&!this.group._transformDone||this.group&&this.canvas&&t===this.canvas.contextTop,i=this.calcTransformMatrix(!e);t.transform(i[0],i[1],i[2],i[3],i[4],i[5])},
/**
         * Returns an object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} Object representation of an instance
         */
toObject:function(t){var i=e.Object.NUM_FRACTION_DIGITS,n={type:this.type,version:e.version,originX:this.originX,originY:this.originY,left:r(this.left,i),top:r(this.top,i),width:r(this.width,i),height:r(this.height,i),fill:this.fill&&this.fill.toObject?this.fill.toObject():this.fill,stroke:this.stroke&&this.stroke.toObject?this.stroke.toObject():this.stroke,strokeWidth:r(this.strokeWidth,i),strokeDashArray:this.strokeDashArray?this.strokeDashArray.concat():this.strokeDashArray,strokeLineCap:this.strokeLineCap,strokeDashOffset:this.strokeDashOffset,strokeLineJoin:this.strokeLineJoin,strokeUniform:this.strokeUniform,strokeMiterLimit:r(this.strokeMiterLimit,i),scaleX:r(this.scaleX,i),scaleY:r(this.scaleY,i),angle:r(this.angle,i),flipX:this.flipX,flipY:this.flipY,opacity:r(this.opacity,i),shadow:this.shadow&&this.shadow.toObject?this.shadow.toObject():this.shadow,visible:this.visible,backgroundColor:this.backgroundColor,fillRule:this.fillRule,paintFirst:this.paintFirst,globalCompositeOperation:this.globalCompositeOperation,skewX:r(this.skewX,i),skewY:r(this.skewY,i)};return this.clipPath&&!this.clipPath.excludeFromExport&&(n.clipPath=this.clipPath.toObject(t),n.clipPath.inverted=this.clipPath.inverted,n.clipPath.absolutePositioned=this.clipPath.absolutePositioned),e.util.populateWithProperties(this,n,t),this.includeDefaultValues||(n=this._removeDefaultValues(n)),n},
/**
         * Returns (dataless) object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} Object representation of an instance
         */
toDatalessObject:function(t){return this.toObject(t)},
/**
         * @private
         * @param {Object} object
         */
_removeDefaultValues:function(t){var i=e.util.getKlass(t.type).prototype;return i.stateProperties.forEach((function(e){"left"!==e&&"top"!==e&&(t[e]===i[e]&&delete t[e],Array.isArray(t[e])&&Array.isArray(i[e])&&0===t[e].length&&0===i[e].length&&delete t[e])})),t},
/**
         * Returns a string representation of an instance
         * @return {String}
         */
toString:function(){return"#<fabric."+o(this.type)+">"},
/**
         * Return the object scale factor counting also the group scaling
         * @return {Object} object with scaleX and scaleY properties
         */
getObjectScaling:function(){if(!this.group)return{scaleX:this.scaleX,scaleY:this.scaleY};var t=e.util.qrDecompose(this.calcTransformMatrix());return{scaleX:Math.abs(t.scaleX),scaleY:Math.abs(t.scaleY)}},
/**
         * Return the object scale factor counting also the group scaling, zoom and retina
         * @return {Object} object with scaleX and scaleY properties
         */
getTotalObjectScaling:function(){var t=this.getObjectScaling(),e=t.scaleX,i=t.scaleY;if(this.canvas){var n=this.canvas.getZoom(),r=this.canvas.getRetinaScaling();e*=n*r,i*=n*r}return{scaleX:e,scaleY:i}},
/**
         * Return the object opacity counting also the group property
         * @return {Number}
         */
getObjectOpacity:function(){var t=this.opacity;return this.group&&(t*=this.group.getObjectOpacity()),t},
/**
         * @private
         * @param {String} key
         * @param {*} value
         * @return {fabric.Object} thisArg
         */
_set:function(t,i){var n="scaleX"===t||"scaleY"===t,r=this[t]!==i,o=!1;return n&&(i=this._constrainScale(i)),"scaleX"===t&&i<0?(this.flipX=!this.flipX,i*=-1):"scaleY"===t&&i<0?(this.flipY=!this.flipY,i*=-1):"shadow"!==t||!i||i instanceof e.Shadow?"dirty"===t&&this.group&&this.group.set("dirty",i):i=new e.Shadow(i),this[t]=i,r&&(o=this.group&&this.group.isOnACache(),this.cacheProperties.indexOf(t)>-1?(this.dirty=!0,o&&this.group.set("dirty",!0)):o&&this.stateProperties.indexOf(t)>-1&&this.group.set("dirty",!0)),this},
/**
         * This callback function is called by the parent group of an object every
         * time a non-delegated property changes on the group. It is passed the key
         * and value as parameters. Not adding in this function's signature to avoid
         * Travis build error about unused variables.
         */
setOnGroup:function(){},
/**
         * Retrieves viewportTransform from Object's canvas if possible
         * @method getViewportTransform
         * @memberOf fabric.Object.prototype
         * @return {Array}
         */
getViewportTransform:function(){return this.canvas&&this.canvas.viewportTransform?this.canvas.viewportTransform:e.iMatrix.concat()},
/*
         * @private
         * return if the object would be visible in rendering
         * @memberOf fabric.Object.prototype
         * @return {Boolean}
         */
isNotVisible:function(){return 0===this.opacity||!this.width&&!this.height&&0===this.strokeWidth||!this.visible},
/**
         * Renders an object on a specified context
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
render:function(t){this.isNotVisible()||this.canvas&&this.canvas.skipOffscreen&&!this.group&&!this.isOnScreen()||(t.save(),this._setupCompositeOperation(t),this.drawSelectionBackground(t),this.transform(t),this._setOpacity(t),this._setShadow(t,this),this.shouldCache()?(this.renderCache(),this.drawCacheOnCanvas(t)):(this._removeCacheCanvas(),this.dirty=!1,this.drawObject(t),this.objectCaching&&this.statefullCache&&this.saveState({propertySet:"cacheProperties"})),t.restore())},renderCache:function(t){t=t||{},this._cacheCanvas&&this._cacheContext||this._createCacheCanvas(),this.isCacheDirty()&&(this.statefullCache&&this.saveState({propertySet:"cacheProperties"}),this.drawObject(this._cacheContext,t.forClipping),this.dirty=!1)},
/**
         * Remove cacheCanvas and its dimensions from the objects
         */
_removeCacheCanvas:function(){this._cacheCanvas=null,this._cacheContext=null,this.cacheWidth=0,this.cacheHeight=0},
/**
         * return true if the object will draw a stroke
         * Does not consider text styles. This is just a shortcut used at rendering time
         * We want it to be an approximation and be fast.
         * wrote to avoid extra caching, it has to return true when stroke happens,
         * can guess when it will not happen at 100% chance, does not matter if it misses
         * some use case where the stroke is invisible.
         * @since 3.0.0
         * @returns Boolean
         */
hasStroke:function(){return this.stroke&&"transparent"!==this.stroke&&0!==this.strokeWidth},
/**
         * return true if the object will draw a fill
         * Does not consider text styles. This is just a shortcut used at rendering time
         * We want it to be an approximation and be fast.
         * wrote to avoid extra caching, it has to return true when fill happens,
         * can guess when it will not happen at 100% chance, does not matter if it misses
         * some use case where the fill is invisible.
         * @since 3.0.0
         * @returns Boolean
         */
hasFill:function(){return this.fill&&"transparent"!==this.fill},
/**
         * When set to `true`, force the object to have its own cache, even if it is inside a group
         * it may be needed when your object behave in a particular way on the cache and always needs
         * its own isolated canvas to render correctly.
         * Created to be overridden
         * since 1.7.12
         * @returns Boolean
         */
needsItsOwnCache:function(){return!("stroke"!==this.paintFirst||!this.hasFill()||!this.hasStroke()||"object"!=typeof this.shadow)||!!this.clipPath},
/**
         * Decide if the object should cache or not. Create its own cache level
         * objectCaching is a global flag, wins over everything
         * needsItsOwnCache should be used when the object drawing method requires
         * a cache step. None of the fabric classes requires it.
         * Generally you do not cache objects in groups because the group outside is cached.
         * Read as: cache if is needed, or if the feature is enabled but we are not already caching.
         * @return {Boolean}
         */
shouldCache:function(){return this.ownCaching=this.needsItsOwnCache()||this.objectCaching&&(!this.group||!this.group.isOnACache()),this.ownCaching},
/**
         * Check if this object or a child object will cast a shadow
         * used by Group.shouldCache to know if child has a shadow recursively
         * @return {Boolean}
         */
willDrawShadow:function(){return!!this.shadow&&(0!==this.shadow.offsetX||0!==this.shadow.offsetY)},
/**
         * Execute the drawing operation for an object clipPath
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {fabric.Object} clipPath
         */
drawClipPathOnCache:function(t,i){if(t.save(),i.inverted?t.globalCompositeOperation="destination-out":t.globalCompositeOperation="destination-in",i.absolutePositioned){var n=e.util.invertTransform(this.calcTransformMatrix());t.transform(n[0],n[1],n[2],n[3],n[4],n[5])}i.transform(t),t.scale(1/i.zoomX,1/i.zoomY),t.drawImage(i._cacheCanvas,-i.cacheTranslationX,-i.cacheTranslationY),t.restore()},
/**
         * Execute the drawing operation for an object on a specified context
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
drawObject:function(t,e){var i=this.fill,n=this.stroke;e?(this.fill="black",this.stroke="",this._setClippingProperties(t)):this._renderBackground(t),this._render(t),this._drawClipPath(t,this.clipPath),this.fill=i,this.stroke=n},
/**
         * Prepare clipPath state and cache and draw it on instance's cache
         * @param {CanvasRenderingContext2D} ctx
         * @param {fabric.Object} clipPath
         */
_drawClipPath:function(t,e){e&&(e.canvas=this.canvas,e.shouldCache(),e._transformDone=!0,e.renderCache({forClipping:!0}),this.drawClipPathOnCache(t,e))},
/**
         * Paint the cached copy of the object on the target context.
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
drawCacheOnCanvas:function(t){t.scale(1/this.zoomX,1/this.zoomY),t.drawImage(this._cacheCanvas,-this.cacheTranslationX,-this.cacheTranslationY)},
/**
         * Check if cache is dirty
         * @param {Boolean} skipCanvas skip canvas checks because this object is painted
         * on parent canvas.
         */
isCacheDirty:function(t){if(this.isNotVisible())return!1;if(this._cacheCanvas&&this._cacheContext&&!t&&this._updateCacheCanvas())return!0;if(this.dirty||this.clipPath&&this.clipPath.absolutePositioned||this.statefullCache&&this.hasStateChanged("cacheProperties")){if(this._cacheCanvas&&this._cacheContext&&!t){var e=this.cacheWidth/this.zoomX,i=this.cacheHeight/this.zoomY;this._cacheContext.clearRect(-e/2,-i/2,e,i)}return!0}return!1},
/**
         * Draws a background for the object big as its untransformed dimensions
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
_renderBackground:function(t){if(this.backgroundColor){var e=this._getNonTransformedDimensions();t.fillStyle=this.backgroundColor,t.fillRect(-e.x/2,-e.y/2,e.x,e.y),this._removeShadow(t)}},
/**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
_setOpacity:function(t){this.group&&!this.group._transformDone?t.globalAlpha=this.getObjectOpacity():t.globalAlpha*=this.opacity},_setStrokeStyles:function(t,e){var i=e.stroke;i&&(t.lineWidth=e.strokeWidth,t.lineCap=e.strokeLineCap,t.lineDashOffset=e.strokeDashOffset,t.lineJoin=e.strokeLineJoin,t.miterLimit=e.strokeMiterLimit,i.toLive?"percentage"===i.gradientUnits||i.gradientTransform||i.patternTransform?this._applyPatternForTransformedGradient(t,i):(t.strokeStyle=i.toLive(t,this),this._applyPatternGradientTransform(t,i)):t.strokeStyle=e.stroke)},_setFillStyles:function(t,e){var i=e.fill;i&&(i.toLive?(t.fillStyle=i.toLive(t,this),this._applyPatternGradientTransform(t,e.fill)):t.fillStyle=i)},_setClippingProperties:function(t){t.globalAlpha=1,t.strokeStyle="transparent",t.fillStyle="#000000"},
/**
         * @private
         * Sets line dash
         * @param {CanvasRenderingContext2D} ctx Context to set the dash line on
         * @param {Array} dashArray array representing dashes
         */
_setLineDash:function(t,e){e&&0!==e.length&&(1&e.length&&e.push.apply(e,e),t.setLineDash(e))},
/**
         * Renders controls and borders for the object
         * the context here is not transformed
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {Object} [styleOverride] properties to override the object style
         */
_renderControls:function(t,i){var n,r,o,a=this.getViewportTransform(),l=this.calcTransformMatrix();r=void 0!==(i=i||{}).hasBorders?i.hasBorders:this.hasBorders,o=void 0!==i.hasControls?i.hasControls:this.hasControls,l=e.util.multiplyTransformMatrices(a,l),n=e.util.qrDecompose(l),t.save(),t.translate(n.translateX,n.translateY),t.lineWidth=1*this.borderScaleFactor,this.group||(t.globalAlpha=this.isMoving?this.borderOpacityWhenMoving:1),this.flipX&&(n.angle-=180),t.rotate(s(this.group?n.angle:this.angle)),i.forActiveSelection||this.group?r&&this.drawBordersInGroup(t,n,i):r&&this.drawBorders(t,i),o&&this.drawControls(t,i),t.restore()},
/**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
_setShadow:function(t){if(this.shadow){var i,n=this.shadow,r=this.canvas,o=r&&r.viewportTransform[0]||1,s=r&&r.viewportTransform[3]||1;i=n.nonScaling?{scaleX:1,scaleY:1}:this.getObjectScaling(),r&&r._isRetinaScaling()&&(o*=e.devicePixelRatio,s*=e.devicePixelRatio),t.shadowColor=n.color,t.shadowBlur=n.blur*e.browserShadowBlurConstant*(o+s)*(i.scaleX+i.scaleY)/4,t.shadowOffsetX=n.offsetX*o*i.scaleX,t.shadowOffsetY=n.offsetY*s*i.scaleY}},
/**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
_removeShadow:function(t){this.shadow&&(t.shadowColor="",t.shadowBlur=t.shadowOffsetX=t.shadowOffsetY=0)},
/**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {Object} filler fabric.Pattern or fabric.Gradient
         * @return {Object} offset.offsetX offset for text rendering
         * @return {Object} offset.offsetY offset for text rendering
         */
_applyPatternGradientTransform:function(t,e){if(!e||!e.toLive)return{offsetX:0,offsetY:0};var i=e.gradientTransform||e.patternTransform,n=-this.width/2+e.offsetX||0,r=-this.height/2+e.offsetY||0;return"percentage"===e.gradientUnits?t.transform(this.width,0,0,this.height,n,r):t.transform(1,0,0,1,n,r),i&&t.transform(i[0],i[1],i[2],i[3],i[4],i[5]),{offsetX:n,offsetY:r}},
/**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
_renderPaintInOrder:function(t){"stroke"===this.paintFirst?(this._renderStroke(t),this._renderFill(t)):(this._renderFill(t),this._renderStroke(t))},
/**
         * @private
         * function that actually render something on the context.
         * empty here to allow Obects to work on tests to benchmark fabric functionalites
         * not related to rendering
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
_render:function(){},
/**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
_renderFill:function(t){this.fill&&(t.save(),this._setFillStyles(t,this),"evenodd"===this.fillRule?t.fill("evenodd"):t.fill(),t.restore())},
/**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
_renderStroke:function(t){if(this.stroke&&0!==this.strokeWidth){if(this.shadow&&!this.shadow.affectStroke&&this._removeShadow(t),t.save(),this.strokeUniform&&this.group){var e=this.getObjectScaling();t.scale(1/e.scaleX,1/e.scaleY)}else this.strokeUniform&&t.scale(1/this.scaleX,1/this.scaleY);this._setLineDash(t,this.strokeDashArray),this._setStrokeStyles(t,this),t.stroke(),t.restore()}},
/**
         * This function try to patch the missing gradientTransform on canvas gradients.
         * transforming a context to transform the gradient, is going to transform the stroke too.
         * we want to transform the gradient but not the stroke operation, so we create
         * a transformed gradient on a pattern and then we use the pattern instead of the gradient.
         * this method has drwabacks: is slow, is in low resolution, needs a patch for when the size
         * is limited.
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {fabric.Gradient} filler a fabric gradient instance
         */
_applyPatternForTransformedGradient:function(t,i){var n,r=this._limitCacheSize(this._getCacheCanvasDimensions()),o=e.util.createCanvasElement(),s=this.canvas.getRetinaScaling(),a=r.x/this.scaleX/s,l=r.y/this.scaleY/s;o.width=a,o.height=l,(n=o.getContext("2d")).beginPath(),n.moveTo(0,0),n.lineTo(a,0),n.lineTo(a,l),n.lineTo(0,l),n.closePath(),n.translate(a/2,l/2),n.scale(r.zoomX/this.scaleX/s,r.zoomY/this.scaleY/s),this._applyPatternGradientTransform(n,i),n.fillStyle=i.toLive(t),n.fill(),t.translate(-this.width/2-this.strokeWidth/2,-this.height/2-this.strokeWidth/2),t.scale(s*this.scaleX/r.zoomX,s*this.scaleY/r.zoomY),t.strokeStyle=n.createPattern(o,"no-repeat")},
/**
         * This function is an helper for svg import. it returns the center of the object in the svg
         * untransformed coordinates
         * @private
         * @return {Object} center point from element coordinates
         */
_findCenterFromElement:function(){return{x:this.left+this.width/2,y:this.top+this.height/2}},
/**
         * This function is an helper for svg import. it decompose the transformMatrix
         * and assign properties to object.
         * untransformed coordinates
         * @private
         * @chainable
         */
_assignTransformMatrixProps:function(){if(this.transformMatrix){var t=e.util.qrDecompose(this.transformMatrix);this.flipX=!1,this.flipY=!1,this.set("scaleX",t.scaleX),this.set("scaleY",t.scaleY),this.angle=t.angle,this.skewX=t.skewX,this.skewY=0}},
/**
         * This function is an helper for svg import. it removes the transform matrix
         * and set to object properties that fabricjs can handle
         * @private
         * @param {Object} preserveAspectRatioOptions
         * @return {thisArg}
         */
_removeTransformMatrix:function(t){var i=this._findCenterFromElement();this.transformMatrix&&(this._assignTransformMatrixProps(),i=e.util.transformPoint(i,this.transformMatrix)),this.transformMatrix=null,t&&(this.scaleX*=t.scaleX,this.scaleY*=t.scaleY,this.cropX=t.cropX,this.cropY=t.cropY,i.x+=t.offsetLeft,i.y+=t.offsetTop,this.width=t.width,this.height=t.height),this.setPositionByOrigin(i,"center","center")},
/**
         * Clones an instance, using a callback method will work for every object.
         * @param {Function} callback Callback is invoked with a clone as a first argument
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         */
clone:function(t,i){var n=this.toObject(i);this.constructor.fromObject?this.constructor.fromObject(n,t):e.Object._fromObject("Object",n,t)},
/**
         * Creates an instance of fabric.Image out of an object
         * makes use of toCanvasElement.
         * Once this method was based on toDataUrl and loadImage, so it also had a quality
         * and format option. toCanvasElement is faster and produce no loss of quality.
         * If you need to get a real Jpeg or Png from an object, using toDataURL is the right way to do it.
         * toCanvasElement and then toBlob from the obtained canvas is also a good option.
         * This method is sync now, but still support the callback because we did not want to break.
         * When fabricJS 5.0 will be planned, this will probably be changed to not have a callback.
         * @param {Function} callback callback, invoked with an instance as a first argument
         * @param {Object} [options] for clone as image, passed to toDataURL
         * @param {Number} [options.multiplier=1] Multiplier to scale by
         * @param {Number} [options.left] Cropping left offset. Introduced in v1.2.14
         * @param {Number} [options.top] Cropping top offset. Introduced in v1.2.14
         * @param {Number} [options.width] Cropping width. Introduced in v1.2.14
         * @param {Number} [options.height] Cropping height. Introduced in v1.2.14
         * @param {Boolean} [options.enableRetinaScaling] Enable retina scaling for clone image. Introduce in 1.6.4
         * @param {Boolean} [options.withoutTransform] Remove current object transform ( no scale , no angle, no flip, no skew ). Introduced in 2.3.4
         * @param {Boolean} [options.withoutShadow] Remove current object shadow. Introduced in 2.4.2
         * @return {fabric.Object} thisArg
         */
cloneAsImage:function(t,i){var n=this.toCanvasElement(i);return t&&t(new e.Image(n)),this},
/**
         * Converts an object into a HTMLCanvas element
         * @param {Object} options Options object
         * @param {Number} [options.multiplier=1] Multiplier to scale by
         * @param {Number} [options.left] Cropping left offset. Introduced in v1.2.14
         * @param {Number} [options.top] Cropping top offset. Introduced in v1.2.14
         * @param {Number} [options.width] Cropping width. Introduced in v1.2.14
         * @param {Number} [options.height] Cropping height. Introduced in v1.2.14
         * @param {Boolean} [options.enableRetinaScaling] Enable retina scaling for clone image. Introduce in 1.6.4
         * @param {Boolean} [options.withoutTransform] Remove current object transform ( no scale , no angle, no flip, no skew ). Introduced in 2.3.4
         * @param {Boolean} [options.withoutShadow] Remove current object shadow. Introduced in 2.4.2
         * @return {HTMLCanvasElement} Returns DOM element <canvas> with the fabric.Object
         */
toCanvasElement:function(t){t||(t={});var i=e.util,n=i.saveObjectTransform(this),r=this.group,o=this.shadow,s=Math.abs,a=(t.multiplier||1)*(t.enableRetinaScaling?e.devicePixelRatio:1);delete this.group,t.withoutTransform&&i.resetObjectTransform(this),t.withoutShadow&&(this.shadow=null);var l,c,h,u,f=e.util.createCanvasElement(),d=this.getBoundingRect(!0,!0),p=this.shadow,g={x:0,y:0};p&&(c=p.blur,l=p.nonScaling?{scaleX:1,scaleY:1}:this.getObjectScaling(),g.x=2*Math.round(s(p.offsetX)+c)*s(l.scaleX),g.y=2*Math.round(s(p.offsetY)+c)*s(l.scaleY)),h=d.width+g.x,u=d.height+g.y,f.width=Math.ceil(h),f.height=Math.ceil(u);var v=new e.StaticCanvas(f,{enableRetinaScaling:!1,renderOnAddRemove:!1,skipOffscreen:!1});"jpeg"===t.format&&(v.backgroundColor="#fff"),this.setPositionByOrigin(new e.Point(v.width/2,v.height/2),"center","center");var m=this.canvas;v.add(this);var y=v.toCanvasElement(a||1,t);return this.shadow=o,this.set("canvas",m),r&&(this.group=r),this.set(n).setCoords(),v._objects=[],v.dispose(),v=null,y},
/**
         * Converts an object into a data-url-like string
         * @param {Object} options Options object
         * @param {String} [options.format=png] The format of the output image. Either "jpeg" or "png"
         * @param {Number} [options.quality=1] Quality level (0..1). Only used for jpeg.
         * @param {Number} [options.multiplier=1] Multiplier to scale by
         * @param {Number} [options.left] Cropping left offset. Introduced in v1.2.14
         * @param {Number} [options.top] Cropping top offset. Introduced in v1.2.14
         * @param {Number} [options.width] Cropping width. Introduced in v1.2.14
         * @param {Number} [options.height] Cropping height. Introduced in v1.2.14
         * @param {Boolean} [options.enableRetinaScaling] Enable retina scaling for clone image. Introduce in 1.6.4
         * @param {Boolean} [options.withoutTransform] Remove current object transform ( no scale , no angle, no flip, no skew ). Introduced in 2.3.4
         * @param {Boolean} [options.withoutShadow] Remove current object shadow. Introduced in 2.4.2
         * @return {String} Returns a data: URL containing a representation of the object in the format specified by options.format
         */
toDataURL:function(t){return t||(t={}),e.util.toDataURL(this.toCanvasElement(t),t.format||"png",t.quality||1)},
/**
         * Returns true if specified type is identical to the type of an instance
         * @param {String} type Type to check against
         * @return {Boolean}
         */
isType:function(t){return arguments.length>1?Array.from(arguments).includes(this.type):this.type===t},
/**
         * Returns complexity of an instance
         * @return {Number} complexity of this instance (is 1 unless subclassed)
         */
complexity:function(){return 1},
/**
         * Returns a JSON representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} JSON
         */
toJSON:function(t){return this.toObject(t)},
/**
         * Sets "angle" of an instance with centered rotation
         * @param {Number} angle Angle value (in degrees)
         * @return {fabric.Object} thisArg
         * @chainable
         */
rotate:function(t){var e=("center"!==this.originX||"center"!==this.originY)&&this.centeredRotation;return e&&this._setOriginToCenter(),this.set("angle",t),e&&this._resetOrigin(),this},
/**
         * Centers object horizontally on canvas to which it was added last.
         * You might need to call `setCoords` on an object after centering, to update controls area.
         * @return {fabric.Object} thisArg
         * @chainable
         */
centerH:function(){return this.canvas&&this.canvas.centerObjectH(this),this},
/**
         * Centers object horizontally on current viewport of canvas to which it was added last.
         * You might need to call `setCoords` on an object after centering, to update controls area.
         * @return {fabric.Object} thisArg
         * @chainable
         */
viewportCenterH:function(){return this.canvas&&this.canvas.viewportCenterObjectH(this),this},
/**
         * Centers object vertically on canvas to which it was added last.
         * You might need to call `setCoords` on an object after centering, to update controls area.
         * @return {fabric.Object} thisArg
         * @chainable
         */
centerV:function(){return this.canvas&&this.canvas.centerObjectV(this),this},
/**
         * Centers object vertically on current viewport of canvas to which it was added last.
         * You might need to call `setCoords` on an object after centering, to update controls area.
         * @return {fabric.Object} thisArg
         * @chainable
         */
viewportCenterV:function(){return this.canvas&&this.canvas.viewportCenterObjectV(this),this},
/**
         * Centers object vertically and horizontally on canvas to which is was added last
         * You might need to call `setCoords` on an object after centering, to update controls area.
         * @return {fabric.Object} thisArg
         * @chainable
         */
center:function(){return this.canvas&&this.canvas.centerObject(this),this},
/**
         * Centers object on current viewport of canvas to which it was added last.
         * You might need to call `setCoords` on an object after centering, to update controls area.
         * @return {fabric.Object} thisArg
         * @chainable
         */
viewportCenter:function(){return this.canvas&&this.canvas.viewportCenterObject(this),this},
/**
         * Returns coordinates of a pointer relative to an object
         * @param {Event} e Event to operate upon
         * @param {Object} [pointer] Pointer to operate upon (instead of event)
         * @return {Object} Coordinates of a pointer (x, y)
         */
getLocalPointer:function(t,i){i=i||this.canvas.getPointer(t);var n=new e.Point(i.x,i.y),r=this._getLeftTopCoords();return this.angle&&(n=e.util.rotatePoint(n,r,s(-this.angle))),{x:n.x-r.x,y:n.y-r.y}},
/**
         * Sets canvas globalCompositeOperation for specific object
         * custom composition operation for the particular object can be specified using globalCompositeOperation property
         * @param {CanvasRenderingContext2D} ctx Rendering canvas context
         */
_setupCompositeOperation:function(t){this.globalCompositeOperation&&(t.globalCompositeOperation=this.globalCompositeOperation)},
/**
         * cancel instance's running animations
         * override if necessary to dispose artifacts such as `clipPath`
         */
dispose:function(){e.runningAnimations&&e.runningAnimations.cancelByTarget(this)}}),e.util.createAccessors&&e.util.createAccessors(e.Object),i(e.Object.prototype,e.Observable),e.Object.NUM_FRACTION_DIGITS=2,e.Object.ENLIVEN_PROPS=["clipPath"],e.Object._fromObject=function(t,i,r,o){var s=e[t];i=n(i,!0),e.util.enlivenPatterns([i.fill,i.stroke],(function(t){void 0!==t[0]&&(i.fill=t[0]),void 0!==t[1]&&(i.stroke=t[1]),e.util.enlivenObjectEnlivables(i,i,(function(){var t=o?new s(i[o],i):new s(i);r&&r(t)}))}))},e.Object.__uid=0)}(t),y=C.util.degreesToRadians,_={left:-.5,center:0,right:.5},b={top:-.5,center:0,bottom:.5},C.util.object.extend(C.Object.prototype,
/** @lends fabric.Object.prototype */
{
/**
         * Translates the coordinates from a set of origin to another (based on the object's dimensions)
         * @param {fabric.Point} point The point which corresponds to the originX and originY params
         * @param {String} fromOriginX Horizontal origin: 'left', 'center' or 'right'
         * @param {String} fromOriginY Vertical origin: 'top', 'center' or 'bottom'
         * @param {String} toOriginX Horizontal origin: 'left', 'center' or 'right'
         * @param {String} toOriginY Vertical origin: 'top', 'center' or 'bottom'
         * @return {fabric.Point}
         */
translateToGivenOrigin:function(t,e,i,n,r){var o,s,a,l=t.x,c=t.y;return"string"==typeof e?e=_[e]:e-=.5,"string"==typeof n?n=_[n]:n-=.5,"string"==typeof i?i=b[i]:i-=.5,"string"==typeof r?r=b[r]:r-=.5,s=r-i,((o=n-e)||s)&&(a=this._getTransformedDimensions(),l=t.x+o*a.x,c=t.y+s*a.y),new C.Point(l,c)},
/**
         * Translates the coordinates from origin to center coordinates (based on the object's dimensions)
         * @param {fabric.Point} point The point which corresponds to the originX and originY params
         * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
         * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
         * @return {fabric.Point}
         */
translateToCenterPoint:function(t,e,i){var n=this.translateToGivenOrigin(t,e,i,"center","center");return this.angle?C.util.rotatePoint(n,t,y(this.angle)):n},
/**
         * Translates the coordinates from center to origin coordinates (based on the object's dimensions)
         * @param {fabric.Point} center The point which corresponds to center of the object
         * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
         * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
         * @return {fabric.Point}
         */
translateToOriginPoint:function(t,e,i){var n=this.translateToGivenOrigin(t,"center","center",e,i);return this.angle?C.util.rotatePoint(n,t,y(this.angle)):n},
/**
         * Returns the real center coordinates of the object
         * @return {fabric.Point}
         */
getCenterPoint:function(){var t=new C.Point(this.left,this.top);return this.translateToCenterPoint(t,this.originX,this.originY)},
/**
         * Returns the coordinates of the object based on center coordinates
         * @param {fabric.Point} point The point which corresponds to the originX and originY params
         * @return {fabric.Point}
         */
// getOriginPoint: function(center) {
//   return this.translateToOriginPoint(center, this.originX, this.originY);
// },
/**
         * Returns the coordinates of the object as if it has a different origin
         * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
         * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
         * @return {fabric.Point}
         */
getPointByOrigin:function(t,e){var i=this.getCenterPoint();return this.translateToOriginPoint(i,t,e)},
/**
         * Returns the point in local coordinates
         * @param {fabric.Point} point The point relative to the global coordinate system
         * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
         * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
         * @return {fabric.Point}
         */
toLocalPoint:function(t,e,i){var n,r,o=this.getCenterPoint();return n=void 0!==e&&void 0!==i?this.translateToGivenOrigin(o,"center","center",e,i):new C.Point(this.left,this.top),r=new C.Point(t.x,t.y),this.angle&&(r=C.util.rotatePoint(r,o,-y(this.angle))),r.subtractEquals(n)},
/**
         * Returns the point in global coordinates
         * @param {fabric.Point} The point relative to the local coordinate system
         * @return {fabric.Point}
         */
// toGlobalPoint: function(point) {
//   return fabric.util.rotatePoint(point, this.getCenterPoint(), degreesToRadians(this.angle)).addEquals(new fabric.Point(this.left, this.top));
// },
/**
         * Sets the position of the object taking into consideration the object's origin
         * @param {fabric.Point} pos The new position of the object
         * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
         * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
         * @return {void}
         */
setPositionByOrigin:function(t,e,i){var n=this.translateToCenterPoint(t,e,i),r=this.translateToOriginPoint(n,this.originX,this.originY);this.set("left",r.x),this.set("top",r.y)},
/**
         * @param {String} to One of 'left', 'center', 'right'
         */
adjustPosition:function(t){var e,i,n=y(this.angle),r=this.getScaledWidth(),o=C.util.cos(n)*r,s=C.util.sin(n)*r;e="string"==typeof this.originX?_[this.originX]:this.originX-.5,i="string"==typeof t?_[t]:t-.5,this.left+=o*(i-e),this.top+=s*(i-e),this.setCoords(),this.originX=t},
/**
         * Sets the origin/position of the object to it's center point
         * @private
         * @return {void}
         */
_setOriginToCenter:function(){this._originalOriginX=this.originX,this._originalOriginY=this.originY;var t=this.getCenterPoint();this.originX="center",this.originY="center",this.left=t.x,this.top=t.y},
/**
         * Resets the origin/position of the object to it's original origin
         * @private
         * @return {void}
         */
_resetOrigin:function(){var t=this.translateToOriginPoint(this.getCenterPoint(),this._originalOriginX,this._originalOriginY);this.originX=this._originalOriginX,this.originY=this._originalOriginY,this.left=t.x,this.top=t.y,this._originalOriginX=null,this._originalOriginY=null},
/**
         * @private
         */
_getLeftTopCoords:function(){return this.translateToOriginPoint(this.getCenterPoint(),"left","top")}}),function(){var t=C.util,e=t.degreesToRadians,i=t.multiplyTransformMatrices,n=t.transformPoint;t.object.extend(C.Object.prototype,
/** @lends fabric.Object.prototype */
{
/**
         * Describe object's corner position in canvas element coordinates.
         * properties are depending on control keys and padding the main controls.
         * each property is an object with x, y and corner.
         * The `corner` property contains in a similar manner the 4 points of the
         * interactive area of the corner.
         * The coordinates depends from the controls positionHandler and are used
         * to draw and locate controls
         * @memberOf fabric.Object.prototype
         */
oCoords:null,
/**
         * Describe object's corner position in canvas object absolute coordinates
         * properties are tl,tr,bl,br and describe the four main corner.
         * each property is an object with x, y, instance of Fabric.Point.
         * The coordinates depends from this properties: width, height, scaleX, scaleY
         * skewX, skewY, angle, strokeWidth, top, left.
         * Those coordinates are useful to understand where an object is. They get updated
         * with oCoords but they do not need to be updated when zoom or panning change.
         * The coordinates get updated with @method setCoords.
         * You can calculate them without updating with @method calcACoords();
         * @memberOf fabric.Object.prototype
         */
aCoords:null,
/**
         * Describe object's corner position in canvas element coordinates.
         * includes padding. Used of object detection.
         * set and refreshed with setCoords.
         * @memberOf fabric.Object.prototype
         */
lineCoords:null,
/**
         * storage for object transform matrix
         */
ownMatrixCache:null,
/**
         * storage for object full transform matrix
         */
matrixCache:null,
/**
         * custom controls interface
         * controls are added by default_controls.js
         */
controls:{},
/**
         * return correct set of coordinates for intersection
         * this will return either aCoords or lineCoords.
         * @param {Boolean} absolute will return aCoords if true or lineCoords
         * @return {Object} {tl, tr, br, bl} points
         */
_getCoords:function(t,e){return e?t?this.calcACoords():this.calcLineCoords():(this.aCoords&&this.lineCoords||this.setCoords(!0),t?this.aCoords:this.lineCoords)},
/**
         * return correct set of coordinates for intersection
         * this will return either aCoords or lineCoords.
         * The coords are returned in an array.
         * @return {Array} [tl, tr, br, bl] of points
         */
getCoords:function(t,e){return i=this._getCoords(t,e),[new C.Point(i.tl.x,i.tl.y),new C.Point(i.tr.x,i.tr.y),new C.Point(i.br.x,i.br.y),new C.Point(i.bl.x,i.bl.y)];var i},
/**
         * Checks if object intersects with an area formed by 2 points
         * @param {Object} pointTL top-left point of area
         * @param {Object} pointBR bottom-right point of area
         * @param {Boolean} [absolute] use coordinates without viewportTransform
         * @param {Boolean} [calculate] use coordinates of current position instead of .oCoords
         * @return {Boolean} true if object intersects with an area formed by 2 points
         */
intersectsWithRect:function(t,e,i,n){var r=this.getCoords(i,n);return"Intersection"===C.Intersection.intersectPolygonRectangle(r,t,e).status},
/**
         * Checks if object intersects with another object
         * @param {Object} other Object to test
         * @param {Boolean} [absolute] use coordinates without viewportTransform
         * @param {Boolean} [calculate] use coordinates of current position instead of .oCoords
         * @return {Boolean} true if object intersects with another object
         */
intersectsWithObject:function(t,e,i){return"Intersection"===C.Intersection.intersectPolygonPolygon(this.getCoords(e,i),t.getCoords(e,i)).status||t.isContainedWithinObject(this,e,i)||this.isContainedWithinObject(t,e,i)},
/**
         * Checks if object is fully contained within area of another object
         * @param {Object} other Object to test
         * @param {Boolean} [absolute] use coordinates without viewportTransform
         * @param {Boolean} [calculate] use coordinates of current position instead of .oCoords
         * @return {Boolean} true if object is fully contained within area of another object
         */
isContainedWithinObject:function(t,e,i){for(var n=this.getCoords(e,i),r=e?t.aCoords:t.lineCoords,o=0,s=t._getImageLines(r);o<4;o++)if(!t.containsPoint(n[o],s))return!1;return!0},
/**
         * Checks if object is fully contained within area formed by 2 points
         * @param {Object} pointTL top-left point of area
         * @param {Object} pointBR bottom-right point of area
         * @param {Boolean} [absolute] use coordinates without viewportTransform
         * @param {Boolean} [calculate] use coordinates of current position instead of .oCoords
         * @return {Boolean} true if object is fully contained within area formed by 2 points
         */
isContainedWithinRect:function(t,e,i,n){var r=this.getBoundingRect(i,n);return r.left>=t.x&&r.left+r.width<=e.x&&r.top>=t.y&&r.top+r.height<=e.y},
/**
         * Checks if point is inside the object
         * @param {fabric.Point} point Point to check against
         * @param {Object} [lines] object returned from @method _getImageLines
         * @param {Boolean} [absolute] use coordinates without viewportTransform
         * @param {Boolean} [calculate] use coordinates of current position instead of .oCoords
         * @return {Boolean} true if point is inside the object
         */
containsPoint:function(t,e,i,n){var r=this._getCoords(i,n),o=(e=e||this._getImageLines(r),this._findCrossPoints(t,e));return 0!==o&&o%2==1},
/**
         * Checks if object is contained within the canvas with current viewportTransform
         * the check is done stopping at first point that appears on screen
         * @param {Boolean} [calculate] use coordinates of current position instead of .aCoords
         * @return {Boolean} true if object is fully or partially contained within canvas
         */
isOnScreen:function(t){if(!this.canvas)return!1;var e=this.canvas.vptCoords.tl,i=this.canvas.vptCoords.br;return!!this.getCoords(!0,t).some((function(t){return t.x<=i.x&&t.x>=e.x&&t.y<=i.y&&t.y>=e.y}))||(!!this.intersectsWithRect(e,i,!0,t)||this._containsCenterOfCanvas(e,i,t))},
/**
         * Checks if the object contains the midpoint between canvas extremities
         * Does not make sense outside the context of isOnScreen and isPartiallyOnScreen
         * @private
         * @param {Fabric.Point} pointTL Top Left point
         * @param {Fabric.Point} pointBR Top Right point
         * @param {Boolean} calculate use coordinates of current position instead of .oCoords
         * @return {Boolean} true if the object contains the point
         */
_containsCenterOfCanvas:function(t,e,i){var n={x:(t.x+e.x)/2,y:(t.y+e.y)/2};return!!this.containsPoint(n,null,!0,i)},
/**
         * Checks if object is partially contained within the canvas with current viewportTransform
         * @param {Boolean} [calculate] use coordinates of current position instead of .oCoords
         * @return {Boolean} true if object is partially contained within canvas
         */
isPartiallyOnScreen:function(t){if(!this.canvas)return!1;var e=this.canvas.vptCoords.tl,i=this.canvas.vptCoords.br;return!!this.intersectsWithRect(e,i,!0,t)||this.getCoords(!0,t).every((function(t){return(t.x>=i.x||t.x<=e.x)&&(t.y>=i.y||t.y<=e.y)}))&&this._containsCenterOfCanvas(e,i,t)},
/**
         * Method that returns an object with the object edges in it, given the coordinates of the corners
         * @private
         * @param {Object} oCoords Coordinates of the object corners
         */
_getImageLines:function(t){return{topline:{o:t.tl,d:t.tr},rightline:{o:t.tr,d:t.br},bottomline:{o:t.br,d:t.bl},leftline:{o:t.bl,d:t.tl}}},
/**
         * Helper method to determine how many cross points are between the 4 object edges
         * and the horizontal line determined by a point on canvas
         * @private
         * @param {fabric.Point} point Point to check
         * @param {Object} lines Coordinates of the object being evaluated
         */
// remove yi, not used but left code here just in case.
_findCrossPoints:function(t,e){var i,n,r,o=0;for(var s in e)if(!((r=e[s]).o.y<t.y&&r.d.y<t.y||r.o.y>=t.y&&r.d.y>=t.y||(r.o.x===r.d.x&&r.o.x>=t.x?n=r.o.x:(0,i=(r.d.y-r.o.y)/(r.d.x-r.o.x),n=-(t.y-0*t.x-(r.o.y-i*r.o.x))/(0-i)),n>=t.x&&(o+=1),2!==o)))break;return o},
/**
         * Returns coordinates of object's bounding rectangle (left, top, width, height)
         * the box is intended as aligned to axis of canvas.
         * @param {Boolean} [absolute] use coordinates without viewportTransform
         * @param {Boolean} [calculate] use coordinates of current position instead of .oCoords / .aCoords
         * @return {Object} Object with left, top, width, height properties
         */
getBoundingRect:function(e,i){var n=this.getCoords(e,i);return t.makeBoundingBoxFromPoints(n)},
/**
         * Returns width of an object's bounding box counting transformations
         * before 2.0 it was named getWidth();
         * @return {Number} width value
         */
getScaledWidth:function(){return this._getTransformedDimensions().x},
/**
         * Returns height of an object bounding box counting transformations
         * before 2.0 it was named getHeight();
         * @return {Number} height value
         */
getScaledHeight:function(){return this._getTransformedDimensions().y},
/**
         * Makes sure the scale is valid and modifies it if necessary
         * @private
         * @param {Number} value
         * @return {Number}
         */
_constrainScale:function(t){return Math.abs(t)<this.minScaleLimit?t<0?-this.minScaleLimit:this.minScaleLimit:0===t?1e-4:t},
/**
         * Scales an object (equally by x and y)
         * @param {Number} value Scale factor
         * @return {fabric.Object} thisArg
         * @chainable
         */
scale:function(t){return this._set("scaleX",t),this._set("scaleY",t),this.setCoords()},
/**
         * Scales an object to a given width, with respect to bounding box (scaling by x/y equally)
         * @param {Number} value New width value
         * @param {Boolean} absolute ignore viewport
         * @return {fabric.Object} thisArg
         * @chainable
         */
scaleToWidth:function(t,e){var i=this.getBoundingRect(e).width/this.getScaledWidth();return this.scale(t/this.width/i)},
/**
         * Scales an object to a given height, with respect to bounding box (scaling by x/y equally)
         * @param {Number} value New height value
         * @param {Boolean} absolute ignore viewport
         * @return {fabric.Object} thisArg
         * @chainable
         */
scaleToHeight:function(t,e){var i=this.getBoundingRect(e).height/this.getScaledHeight();return this.scale(t/this.height/i)},calcLineCoords:function(){var i=this.getViewportTransform(),r=this.padding,o=e(this.angle),s=t.cos(o)*r,a=t.sin(o)*r,l=s+a,c=s-a,h=this.calcACoords(),u={tl:n(h.tl,i),tr:n(h.tr,i),bl:n(h.bl,i),br:n(h.br,i)};return r&&(u.tl.x-=c,u.tl.y-=l,u.tr.x+=l,u.tr.y-=c,u.bl.x-=l,u.bl.y+=c,u.br.x+=c,u.br.y+=l),u},calcOCoords:function(){var t=this._calcRotateMatrix(),e=this._calcTranslateMatrix(),n=this.getViewportTransform(),r=i(n,e),o=i(r,t),s=(o=i(o,[1/n[0],0,0,1/n[3],0,0]),this._calculateCurrentDimensions()),a={};return this.forEachControl((function(t,e,i){a[e]=t.positionHandler(s,o,i)})),a},calcACoords:function(){var t=this._calcRotateMatrix(),e=this._calcTranslateMatrix(),r=i(e,t),o=this._getTransformedDimensions(),s=o.x/2,a=o.y/2;return{
// corners
tl:n({x:-s,y:-a},r),tr:n({x:s,y:-a},r),bl:n({x:-s,y:a},r),br:n({x:s,y:a},r)}},
/**
         * Sets corner and controls position coordinates based on current angle, width and height, left and top.
         * oCoords are used to find the corners
         * aCoords are used to quickly find an object on the canvas
         * lineCoords are used to quickly find object during pointer events.
         * See {@link https://github.com/fabricjs/fabric.js/wiki/When-to-call-setCoords} and {@link http://fabricjs.com/fabric-gotchas}
         *
         * @param {Boolean} [skipCorners] skip calculation of oCoords.
         * @return {fabric.Object} thisArg
         * @chainable
         */
setCoords:function(t){return this.aCoords=this.calcACoords(),this.lineCoords=this.group?this.aCoords:this.calcLineCoords(),t||(this.oCoords=this.calcOCoords(),this._setCornerCoords&&this._setCornerCoords()),this},
/**
         * calculate rotation matrix of an object
         * @return {Array} rotation matrix for the object
         */
_calcRotateMatrix:function(){return t.calcRotateMatrix(this)},
/**
         * calculate the translation matrix for an object transform
         * @return {Array} rotation matrix for the object
         */
_calcTranslateMatrix:function(){var t=this.getCenterPoint();return[1,0,0,1,t.x,t.y]},transformMatrixKey:function(t){var e="_",i="";return!t&&this.group&&(i=this.group.transformMatrixKey(t)+e),i+this.top+e+this.left+e+this.scaleX+e+this.scaleY+e+this.skewX+e+this.skewY+e+this.angle+e+this.originX+e+this.originY+e+this.width+e+this.height+e+this.strokeWidth+this.flipX+this.flipY},
/**
         * calculate transform matrix that represents the current transformations from the
         * object's properties.
         * @param {Boolean} [skipGroup] return transform matrix for object not counting parent transformations
         * There are some situation in which this is useful to avoid the fake rotation.
         * @return {Array} transform matrix for the object
         */
calcTransformMatrix:function(t){var e=this.calcOwnMatrix();if(t||!this.group)return e;var n=this.transformMatrixKey(t),r=this.matrixCache||(this.matrixCache={});return r.key===n?r.value:(this.group&&(e=i(this.group.calcTransformMatrix(!1),e)),r.key=n,r.value=e,e)},
/**
         * calculate transform matrix that represents the current transformations from the
         * object's properties, this matrix does not include the group transformation
         * @return {Array} transform matrix for the object
         */
calcOwnMatrix:function(){var e=this.transformMatrixKey(!0),i=this.ownMatrixCache||(this.ownMatrixCache={});if(i.key===e)return i.value;var n=this._calcTranslateMatrix(),r={angle:this.angle,translateX:n[4],translateY:n[5],scaleX:this.scaleX,scaleY:this.scaleY,skewX:this.skewX,skewY:this.skewY,flipX:this.flipX,flipY:this.flipY};return i.key=e,i.value=t.composeMatrix(r),i.value},
/*
         * Calculate object dimensions from its properties
         * @private
         * @return {Object} .x width dimension
         * @return {Object} .y height dimension
         */
_getNonTransformedDimensions:function(){var t=this.strokeWidth;return{x:this.width+t,y:this.height+t}},
/*
         * Calculate object bounding box dimensions from its properties scale, skew.
         * @param {Number} skewX, a value to override current skewX
         * @param {Number} skewY, a value to override current skewY
         * @private
         * @return {Object} .x width dimension
         * @return {Object} .y height dimension
         */
_getTransformedDimensions:function(e,i){void 0===e&&(e=this.skewX),void 0===i&&(i=this.skewY);var n,r,o,s=0===e&&0===i;if(this.strokeUniform?(r=this.width,o=this.height):(r=(n=this._getNonTransformedDimensions()).x,o=n.y),s)return this._finalizeDimensions(r*this.scaleX,o*this.scaleY);var a=t.sizeAfterTransform(r,o,{scaleX:this.scaleX,scaleY:this.scaleY,skewX:e,skewY:i});return this._finalizeDimensions(a.x,a.y)},
/*
         * Calculate object bounding box dimensions from its properties scale, skew.
         * @param Number width width of the bbox
         * @param Number height height of the bbox
         * @private
         * @return {Object} .x finalized width dimension
         * @return {Object} .y finalized height dimension
         */
_finalizeDimensions:function(t,e){return this.strokeUniform?{x:t+this.strokeWidth,y:e+this.strokeWidth}:{x:t,y:e}},
/*
         * Calculate object dimensions for controls box, including padding and canvas zoom.
         * and active selection
         * private
         */
_calculateCurrentDimensions:function(){var t=this.getViewportTransform(),e=this._getTransformedDimensions();return n(e,t,!0).scalarAdd(2*this.padding)}})}(),C.util.object.extend(C.Object.prototype,
/** @lends fabric.Object.prototype */
{
/**
       * Moves an object to the bottom of the stack of drawn objects
       * @return {fabric.Object} thisArg
       * @chainable
       */
sendToBack:function(){return this.group?C.StaticCanvas.prototype.sendToBack.call(this.group,this):this.canvas&&this.canvas.sendToBack(this),this},
/**
       * Moves an object to the top of the stack of drawn objects
       * @return {fabric.Object} thisArg
       * @chainable
       */
bringToFront:function(){return this.group?C.StaticCanvas.prototype.bringToFront.call(this.group,this):this.canvas&&this.canvas.bringToFront(this),this},
/**
       * Moves an object down in stack of drawn objects
       * @param {Boolean} [intersecting] If `true`, send object behind next lower intersecting object
       * @return {fabric.Object} thisArg
       * @chainable
       */
sendBackwards:function(t){return this.group?C.StaticCanvas.prototype.sendBackwards.call(this.group,this,t):this.canvas&&this.canvas.sendBackwards(this,t),this},
/**
       * Moves an object up in stack of drawn objects
       * @param {Boolean} [intersecting] If `true`, send object in front of next upper intersecting object
       * @return {fabric.Object} thisArg
       * @chainable
       */
bringForward:function(t){return this.group?C.StaticCanvas.prototype.bringForward.call(this.group,this,t):this.canvas&&this.canvas.bringForward(this,t),this},
/**
       * Moves an object to specified level in stack of drawn objects
       * @param {Number} index New position of object
       * @return {fabric.Object} thisArg
       * @chainable
       */
moveTo:function(t){return this.group&&"activeSelection"!==this.group.type?C.StaticCanvas.prototype.moveTo.call(this.group,this,t):this.canvas&&this.canvas.moveTo(this,t),this}}),function(){function t(t,e){if(e){if(e.toLive)return t+": url(#SVGID_"+e.id+"); ";var i=new C.Color(e),n=t+": "+i.toRgb()+"; ",r=i.getAlpha();return 1!==r&&(n+=t+"-opacity: "+r.toString()+"; "),n}return t+": none; "}var e=C.util.toFixed;C.util.object.extend(C.Object.prototype,
/** @lends fabric.Object.prototype */
{
/**
         * Returns styles-string for svg-export
         * @param {Boolean} skipShadow a boolean to skip shadow filter output
         * @return {String}
         */
getSvgStyles:function(e){var i=this.fillRule?this.fillRule:"nonzero",n=this.strokeWidth?this.strokeWidth:"0",r=this.strokeDashArray?this.strokeDashArray.join(" "):"none",o=this.strokeDashOffset?this.strokeDashOffset:"0",s=this.strokeLineCap?this.strokeLineCap:"butt",a=this.strokeLineJoin?this.strokeLineJoin:"miter",l=this.strokeMiterLimit?this.strokeMiterLimit:"4",c=void 0!==this.opacity?this.opacity:"1",h=this.visible?"":" visibility: hidden;",u=e?"":this.getSvgFilter(),f=t("fill",this.fill);return[t("stroke",this.stroke),"stroke-width: ",n,"; ","stroke-dasharray: ",r,"; ","stroke-linecap: ",s,"; ","stroke-dashoffset: ",o,"; ","stroke-linejoin: ",a,"; ","stroke-miterlimit: ",l,"; ",f,"fill-rule: ",i,"; ","opacity: ",c,";",u,h].join("")},
/**
         * Returns styles-string for svg-export
         * @param {Object} style the object from which to retrieve style properties
         * @param {Boolean} useWhiteSpace a boolean to include an additional attribute in the style.
         * @return {String}
         */
getSvgSpanStyles:function(e,i){var n="; ",r=e.fontFamily?"font-family: "+(-1===e.fontFamily.indexOf("'")&&-1===e.fontFamily.indexOf('"')?"'"+e.fontFamily+"'":e.fontFamily)+n:"",o=e.strokeWidth?"stroke-width: "+e.strokeWidth+n:"",s=(r=r,e.fontSize?"font-size: "+e.fontSize+"px"+n:""),a=e.fontStyle?"font-style: "+e.fontStyle+n:"",l=e.fontWeight?"font-weight: "+e.fontWeight+n:"",c=e.fill?t("fill",e.fill):"",h=e.stroke?t("stroke",e.stroke):"",u=this.getSvgTextDecoration(e);return u&&(u="text-decoration: "+u+n),[h,o,r,s,a,l,u,c,e.deltaY?"baseline-shift: "+-e.deltaY+"; ":"",i?"white-space: pre; ":""].join("")},
/**
         * Returns text-decoration property for svg-export
         * @param {Object} style the object from which to retrieve style properties
         * @return {String}
         */
getSvgTextDecoration:function(t){return["overline","underline","line-through"].filter((function(e){return t[e.replace("-","")]})).join(" ")},
/**
         * Returns filter for svg shadow
         * @return {String}
         */
getSvgFilter:function(){return this.shadow?"filter: url(#SVGID_"+this.shadow.id+");":""},
/**
         * Returns id attribute for svg output
         * @return {String}
         */
getSvgCommons:function(){return[this.id?'id="'+this.id+'" ':"",this.clipPath?'clip-path="url(#'+this.clipPath.clipPathId+')" ':""].join("")},
/**
         * Returns transform-string for svg-export
         * @param {Boolean} use the full transform or the single object one.
         * @return {String}
         */
getSvgTransform:function(t,e){var i=t?this.calcTransformMatrix():this.calcOwnMatrix();return'transform="'+C.util.matrixToSVG(i)+(e||"")+'" '},_setSVGBg:function(t){if(this.backgroundColor){var i=C.Object.NUM_FRACTION_DIGITS;t.push("\t\t<rect ",this._getFillAttributes(this.backgroundColor),' x="',e(-this.width/2,i),'" y="',e(-this.height/2,i),'" width="',e(this.width,i),'" height="',e(this.height,i),'"></rect>\n')}},
/**
         * Returns svg representation of an instance
         * @param {Function} [reviver] Method for further parsing of svg representation.
         * @return {String} svg representation of an instance
         */
toSVG:function(t){return this._createBaseSVGMarkup(this._toSVG(t),{reviver:t})},
/**
         * Returns svg clipPath representation of an instance
         * @param {Function} [reviver] Method for further parsing of svg representation.
         * @return {String} svg representation of an instance
         */
toClipPathSVG:function(t){return"\t"+this._createBaseClipPathSVGMarkup(this._toSVG(t),{reviver:t})},
/**
         * @private
         */
_createBaseClipPathSVGMarkup:function(t,e){var i=(e=e||{}).reviver,n=e.additionalTransform||"",r=[this.getSvgTransform(!0,n),this.getSvgCommons()].join(""),o=t.indexOf("COMMON_PARTS");return t[o]=r,i?i(t.join("")):t.join("")},
/**
         * @private
         */
_createBaseSVGMarkup:function(t,e){var i,n,r=(e=e||{}).noStyle,o=e.reviver,s=r?"":'style="'+this.getSvgStyles()+'" ',a=e.withShadow?'style="'+this.getSvgFilter()+'" ':"",l=this.clipPath,c=this.strokeUniform?'vector-effect="non-scaling-stroke" ':"",h=l&&l.absolutePositioned,u=this.stroke,f=this.fill,d=this.shadow,p=[],g=t.indexOf("COMMON_PARTS"),v=e.additionalTransform;return l&&(l.clipPathId="CLIPPATH_"+C.Object.__uid++,n='<clipPath id="'+l.clipPathId+'" >\n'+l.toClipPathSVG(o)+"</clipPath>\n"),h&&p.push("<g ",a,this.getSvgCommons()," >\n"),p.push("<g ",this.getSvgTransform(!1),h?"":a+this.getSvgCommons()," >\n"),i=[s,c,r?"":this.addPaintOrder()," ",v?'transform="'+v+'" ':""].join(""),t[g]=i,f&&f.toLive&&p.push(f.toSVG(this)),u&&u.toLive&&p.push(u.toSVG(this)),d&&p.push(d.toSVG(this)),l&&p.push(n),p.push(t.join("")),p.push("</g>\n"),h&&p.push("</g>\n"),o?o(p.join("")):p.join("")},addPaintOrder:function(){return"fill"!==this.paintFirst?' paint-order="'+this.paintFirst+'" ':""}})}(),function(){var t=C.util.object.extend,e="stateProperties";function i(e,i,n){var r={};n.forEach((function(t){r[t]=e[t]})),t(e[i],r,!0)}function n(t,e,i){if(t===e)return!0;if(Array.isArray(t)){if(!Array.isArray(e)||t.length!==e.length)return!1;for(var r=0,o=t.length;r<o;r++)if(!n(t[r],e[r]))return!1;return!0}if(t&&"object"==typeof t){var s,a=Object.keys(t);if(!e||"object"!=typeof e||!i&&a.length!==Object.keys(e).length)return!1;for(r=0,o=a.length;r<o;r++)if("canvas"!==(s=a[r])&&"group"!==s&&!n(t[s],e[s]))return!1;return!0}}C.util.object.extend(C.Object.prototype,
/** @lends fabric.Object.prototype */
{
/**
         * Returns true if object state (one of its state properties) was changed
         * @param {String} [propertySet] optional name for the set of property we want to save
         * @return {Boolean} true if instance' state has changed since `{@link fabric.Object#saveState}` was called
         */
hasStateChanged:function(t){var i="_"+(t=t||e);return Object.keys(this[i]).length<this[t].length||!n(this[i],this,!0)},
/**
         * Saves state of an object
         * @param {Object} [options] Object with additional `stateProperties` array to include when saving state
         * @return {fabric.Object} thisArg
         */
saveState:function(t){var n=t&&t.propertySet||e,r="_"+n;return this[r]?(i(this,r,this[n]),t&&t.stateProperties&&i(this,r,t.stateProperties),this):this.setupState(t)},
/**
         * Setups state of an object
         * @param {Object} [options] Object with additional `stateProperties` array to include when saving state
         * @return {fabric.Object} thisArg
         */
setupState:function(t){var i=(t=t||{}).propertySet||e;return t.propertySet=i,this["_"+i]={},this.saveState(t),this}})}(),function(){var t=C.util.degreesToRadians;C.util.object.extend(C.Object.prototype,
/** @lends fabric.Object.prototype */
{
/**
         * Determines which corner has been clicked
         * @private
         * @param {Object} pointer The pointer indicating the mouse position
         * @return {String|Boolean} corner code (tl, tr, bl, br, etc.), or false if nothing is found
         */
_findTargetCorner:function(t,e){if(!this.hasControls||this.group||!this.canvas||this.canvas._activeObject!==this)return!1;var i,n,r,o=t.x,s=t.y,a=Object.keys(this.oCoords),l=a.length-1;for(this.__corner=0;l>=0;l--)if(r=a[l],this.isControlVisible(r)&&(n=this._getImageLines(e?this.oCoords[r].touchCorner:this.oCoords[r].corner),0!==(i=this._findCrossPoints({x:o,y:s},n))&&i%2==1))return this.__corner=r,r;return!1},
/**
         * Calls a function for each control. The function gets called,
         * with the control, the object that is calling the iterator and the control's key
         * @param {Function} fn function to iterate over the controls over
         */
forEachControl:function(t){for(var e in this.controls)t(this.controls[e],e,this)},
/**
         * Sets the coordinates of the draggable boxes in the corners of
         * the image used to scale/rotate it.
         * note: if we would switch to ROUND corner area, all of this would disappear.
         * everything would resolve to a single point and a pythagorean theorem for the distance
         * @private
         */
_setCornerCoords:function(){var t=this.oCoords;for(var e in t){var i=this.controls[e];t[e].corner=i.calcCornerCoords(this.angle,this.cornerSize,t[e].x,t[e].y,!1),t[e].touchCorner=i.calcCornerCoords(this.angle,this.touchCornerSize,t[e].x,t[e].y,!0)}},
/**
         * Draws a colored layer behind the object, inside its selection borders.
         * Requires public options: padding, selectionBackgroundColor
         * this function is called when the context is transformed
         * has checks to be skipped when the object is on a staticCanvas
         * @param {CanvasRenderingContext2D} ctx Context to draw on
         * @return {fabric.Object} thisArg
         * @chainable
         */
drawSelectionBackground:function(e){if(!this.selectionBackgroundColor||this.canvas&&!this.canvas.interactive||this.canvas&&this.canvas._activeObject!==this)return this;e.save();var i=this.getCenterPoint(),n=this._calculateCurrentDimensions(),r=this.canvas.viewportTransform;return e.translate(i.x,i.y),e.scale(1/r[0],1/r[3]),e.rotate(t(this.angle)),e.fillStyle=this.selectionBackgroundColor,e.fillRect(-n.x/2,-n.y/2,n.x,n.y),e.restore(),this},
/**
         * Draws borders of an object's bounding box.
         * Requires public properties: width, height
         * Requires public options: padding, borderColor
         * @param {CanvasRenderingContext2D} ctx Context to draw on
         * @param {Object} styleOverride object to override the object style
         * @return {fabric.Object} thisArg
         * @chainable
         */
drawBorders:function(t,e){e=e||{};var i=this._calculateCurrentDimensions(),n=this.borderScaleFactor,r=i.x+n,o=i.y+n,s=void 0!==e.hasControls?e.hasControls:this.hasControls,a=!1;return t.save(),t.strokeStyle=e.borderColor||this.borderColor,this._setLineDash(t,e.borderDashArray||this.borderDashArray),t.strokeRect(-r/2,-o/2,r,o),s&&(t.beginPath(),this.forEachControl((function(e,i,n){e.withConnection&&e.getVisibility(n,i)&&(a=!0,t.moveTo(e.x*r,e.y*o),t.lineTo(e.x*r+e.offsetX,e.y*o+e.offsetY))})),a&&t.stroke()),t.restore(),this},
/**
         * Draws borders of an object's bounding box when it is inside a group.
         * Requires public properties: width, height
         * Requires public options: padding, borderColor
         * @param {CanvasRenderingContext2D} ctx Context to draw on
         * @param {object} options object representing current object parameters
         * @param {Object} styleOverride object to override the object style
         * @return {fabric.Object} thisArg
         * @chainable
         */
drawBordersInGroup:function(t,e,i){i=i||{};var n=C.util.sizeAfterTransform(this.width,this.height,e),r=this.strokeWidth,o=this.strokeUniform,s=this.borderScaleFactor,a=n.x+r*(o?this.canvas.getZoom():e.scaleX)+s,l=n.y+r*(o?this.canvas.getZoom():e.scaleY)+s;return t.save(),this._setLineDash(t,i.borderDashArray||this.borderDashArray),t.strokeStyle=i.borderColor||this.borderColor,t.strokeRect(-a/2,-l/2,a,l),t.restore(),this},
/**
         * Draws corners of an object's bounding box.
         * Requires public properties: width, height
         * Requires public options: cornerSize, padding
         * @param {CanvasRenderingContext2D} ctx Context to draw on
         * @param {Object} styleOverride object to override the object style
         * @return {fabric.Object} thisArg
         * @chainable
         */
drawControls:function(t,e){e=e||{},t.save();var i,n,r=this.canvas.getRetinaScaling();return t.setTransform(r,0,0,r,0,0),t.strokeStyle=t.fillStyle=e.cornerColor||this.cornerColor,this.transparentCorners||(t.strokeStyle=e.cornerStrokeColor||this.cornerStrokeColor),this._setLineDash(t,e.cornerDashArray||this.cornerDashArray),this.setCoords(),this.group&&(i=this.group.calcTransformMatrix()),this.forEachControl((function(r,o,s){n=s.oCoords[o],r.getVisibility(s,o)&&(i&&(n=C.util.transformPoint(n,i)),r.render(t,n.x,n.y,e,s))})),t.restore(),this},
/**
         * Returns true if the specified control is visible, false otherwise.
         * @param {String} controlKey The key of the control. Possible values are 'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr'.
         * @returns {Boolean} true if the specified control is visible, false otherwise
         */
isControlVisible:function(t){return this.controls[t]&&this.controls[t].getVisibility(this,t)},
/**
         * Sets the visibility of the specified control.
         * @param {String} controlKey The key of the control. Possible values are 'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr'.
         * @param {Boolean} visible true to set the specified control visible, false otherwise
         * @return {fabric.Object} thisArg
         * @chainable
         */
setControlVisible:function(t,e){return this._controlsVisibility||(this._controlsVisibility={}),this._controlsVisibility[t]=e,this},
/**
         * Sets the visibility state of object controls.
         * @param {Object} [options] Options object
         * @param {Boolean} [options.bl] true to enable the bottom-left control, false to disable it
         * @param {Boolean} [options.br] true to enable the bottom-right control, false to disable it
         * @param {Boolean} [options.mb] true to enable the middle-bottom control, false to disable it
         * @param {Boolean} [options.ml] true to enable the middle-left control, false to disable it
         * @param {Boolean} [options.mr] true to enable the middle-right control, false to disable it
         * @param {Boolean} [options.mt] true to enable the middle-top control, false to disable it
         * @param {Boolean} [options.tl] true to enable the top-left control, false to disable it
         * @param {Boolean} [options.tr] true to enable the top-right control, false to disable it
         * @param {Boolean} [options.mtr] true to enable the middle-top-rotate control, false to disable it
         * @return {fabric.Object} thisArg
         * @chainable
         */
setControlsVisibility:function(t){for(var e in t||(t={}),t)this.setControlVisible(e,t[e]);return this},
/**
         * This callback function is called every time _discardActiveObject or _setActiveObject
         * try to to deselect this object. If the function returns true, the process is cancelled
         * @param {Object} [options] options sent from the upper functions
         * @param {Event} [options.e] event if the process is generated by an event
         */
onDeselect:function(){},
/**
         * This callback function is called every time _discardActiveObject or _setActiveObject
         * try to to select this object. If the function returns true, the process is cancelled
         * @param {Object} [options] options sent from the upper functions
         * @param {Event} [options.e] event if the process is generated by an event
         */
onSelect:function(){}})}(),C.util.object.extend(C.StaticCanvas.prototype,
/** @lends fabric.StaticCanvas.prototype */
{
/**
       * Animation duration (in ms) for fx* methods
       * @type Number
       * @default
       */
FX_DURATION:500,
/**
       * Centers object horizontally with animation.
       * @param {fabric.Object} object Object to center
       * @param {Object} [callbacks] Callbacks object with optional "onComplete" and/or "onChange" properties
       * @param {Function} [callbacks.onComplete] Invoked on completion
       * @param {Function} [callbacks.onChange] Invoked on every step of animation
       * @return {fabric.AnimationContext} context
       */
fxCenterObjectH:function(t,e){var i=function(){},n=(e=e||{}).onComplete||i,r=e.onChange||i,o=this;return C.util.animate({target:this,startValue:t.left,endValue:this.getCenterPoint().x,duration:this.FX_DURATION,onChange:function(e){t.set("left",e),o.requestRenderAll(),r()},onComplete:function(){t.setCoords(),n()}})},
/**
       * Centers object vertically with animation.
       * @param {fabric.Object} object Object to center
       * @param {Object} [callbacks] Callbacks object with optional "onComplete" and/or "onChange" properties
       * @param {Function} [callbacks.onComplete] Invoked on completion
       * @param {Function} [callbacks.onChange] Invoked on every step of animation
       * @return {fabric.AnimationContext} context
       */
fxCenterObjectV:function(t,e){var i=function(){},n=(e=e||{}).onComplete||i,r=e.onChange||i,o=this;return C.util.animate({target:this,startValue:t.top,endValue:this.getCenterPoint().y,duration:this.FX_DURATION,onChange:function(e){t.set("top",e),o.requestRenderAll(),r()},onComplete:function(){t.setCoords(),n()}})},
/**
       * Same as `fabric.Canvas#remove` but animated
       * @param {fabric.Object} object Object to remove
       * @param {Object} [callbacks] Callbacks object with optional "onComplete" and/or "onChange" properties
       * @param {Function} [callbacks.onComplete] Invoked on completion
       * @param {Function} [callbacks.onChange] Invoked on every step of animation
       * @return {fabric.AnimationContext} context
       */
fxRemove:function(t,e){var i=function(){},n=(e=e||{}).onComplete||i,r=e.onChange||i,o=this;return C.util.animate({target:this,startValue:t.opacity,endValue:0,duration:this.FX_DURATION,onChange:function(e){t.set("opacity",e),o.requestRenderAll(),r()},onComplete:function(){o.remove(t),n()}})}}),C.util.object.extend(C.Object.prototype,
/** @lends fabric.Object.prototype */
{
/**
       * Animates object's properties
       * @param {String|Object} property Property to animate (if string) or properties to animate (if object)
       * @param {Number|Object} value Value to animate property to (if string was given first) or options object
       * @return {fabric.Object} thisArg
       * @tutorial {@link http://fabricjs.com/fabric-intro-part-2#animation}
       * @return {fabric.AnimationContext | fabric.AnimationContext[]} animation context (or an array if passed multiple properties)
       *
       * As object — multiple properties
       *
       * object.animate({ left: ..., top: ... });
       * object.animate({ left: ..., top: ... }, { duration: ... });
       *
       * As string — one property
       *
       * object.animate('left', ...);
       * object.animate('left', { duration: ... });
       *
       */
animate:function(){if(arguments[0]&&"object"==typeof arguments[0]){var t,e,i=[],n=[];for(t in arguments[0])i.push(t);for(var r=0,o=i.length;r<o;r++)t=i[r],e=r!==o-1,n.push(this._animate(t,arguments[0][t],arguments[1],e));return n}return this._animate.apply(this,arguments)},
/**
       * @private
       * @param {String} property Property to animate
       * @param {String} to Value to animate to
       * @param {Object} [options] Options object
       * @param {Boolean} [skipCallbacks] When true, callbacks like onchange and oncomplete are not invoked
       */
_animate:function(t,e,i,n){var r,o=this;e=e.toString(),i=i?C.util.object.clone(i):{},~t.indexOf(".")&&(r=t.split("."));var s=o.colorProperties.indexOf(t)>-1||r&&o.colorProperties.indexOf(r[1])>-1,a=r?this.get(r[0])[r[1]]:this.get(t);"from"in i||(i.from=a),s||(e=~e.indexOf("=")?a+parseFloat(e.replace("=","")):parseFloat(e));var l={target:this,startValue:i.from,endValue:e,byValue:i.by,easing:i.easing,duration:i.duration,abort:i.abort&&function(t,e,n){return i.abort.call(o,t,e,n)},onChange:function(e,s,a){r?o[r[0]][r[1]]=e:o.set(t,e),n||i.onChange&&i.onChange(e,s,a)},onComplete:function(t,e,r){n||(o.setCoords(),i.onComplete&&i.onComplete(t,e,r))}};return s?C.util.animateColor(l.startValue,l.endValue,l.duration,l):C.util.animate(l)}}),function(t){var e=t.fabric||(t.fabric={}),i=e.util.object.extend,n=e.util.object.clone,r={x1:1,x2:1,y1:1,y2:1};function o(t,e){var i=t.origin,n=t.axis1,r=t.axis2,o=t.dimension,s=e.nearest,a=e.center,l=e.farthest;return function(){switch(this.get(i)){case s:return Math.min(this.get(n),this.get(r));case a:return Math.min(this.get(n),this.get(r))+.5*this.get(o);case l:return Math.max(this.get(n),this.get(r))}}}e.Line?e.warn("fabric.Line is already defined"):(e.Line=e.util.createClass(e.Object,
/** @lends fabric.Line.prototype */
{
/**
         * Type of an object
         * @type String
         * @default
         */
type:"line",
/**
         * x value or first line edge
         * @type Number
         * @default
         */
x1:0,
/**
         * y value or first line edge
         * @type Number
         * @default
         */
y1:0,
/**
         * x value or second line edge
         * @type Number
         * @default
         */
x2:0,
/**
         * y value or second line edge
         * @type Number
         * @default
         */
y2:0,cacheProperties:e.Object.prototype.cacheProperties.concat("x1","x2","y1","y2"),
/**
         * Constructor
         * @param {Array} [points] Array of points
         * @param {Object} [options] Options object
         * @return {fabric.Line} thisArg
         */
initialize:function(t,e){t||(t=[0,0,0,0]),this.callSuper("initialize",e),this.set("x1",t[0]),this.set("y1",t[1]),this.set("x2",t[2]),this.set("y2",t[3]),this._setWidthHeight(e)},
/**
         * @private
         * @param {Object} [options] Options
         */
_setWidthHeight:function(t){t||(t={}),this.width=Math.abs(this.x2-this.x1),this.height=Math.abs(this.y2-this.y1),this.left="left"in t?t.left:this._getLeftToOriginX(),this.top="top"in t?t.top:this._getTopToOriginY()},
/**
         * @private
         * @param {String} key
         * @param {*} value
         */
_set:function(t,e){return this.callSuper("_set",t,e),void 0!==r[t]&&this._setWidthHeight(),this},
/**
         * @private
         * @return {Number} leftToOriginX Distance from left edge of canvas to originX of Line.
         */
_getLeftToOriginX:o({
// property names
origin:"originX",axis1:"x1",axis2:"x2",dimension:"width"},{
// possible values of origin
nearest:"left",center:"center",farthest:"right"}),
/**
         * @private
         * @return {Number} topToOriginY Distance from top edge of canvas to originY of Line.
         */
_getTopToOriginY:o({
// property names
origin:"originY",axis1:"y1",axis2:"y2",dimension:"height"},{
// possible values of origin
nearest:"top",center:"center",farthest:"bottom"}),
/**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
_render:function(t){t.beginPath();var e=this.calcLinePoints();t.moveTo(e.x1,e.y1),t.lineTo(e.x2,e.y2),t.lineWidth=this.strokeWidth;var i=t.strokeStyle;t.strokeStyle=this.stroke||t.fillStyle,this.stroke&&this._renderStroke(t),t.strokeStyle=i},
/**
         * This function is an helper for svg import. it returns the center of the object in the svg
         * untransformed coordinates
         * @private
         * @return {Object} center point from element coordinates
         */
_findCenterFromElement:function(){return{x:(this.x1+this.x2)/2,y:(this.y1+this.y2)/2}},
/**
         * Returns object representation of an instance
         * @method toObject
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} object representation of an instance
         */
toObject:function(t){return i(this.callSuper("toObject",t),this.calcLinePoints())},
/*
         * Calculate object dimensions from its properties
         * @private
         */
_getNonTransformedDimensions:function(){var t=this.callSuper("_getNonTransformedDimensions");return"butt"===this.strokeLineCap&&(0===this.width&&(t.y-=this.strokeWidth),0===this.height&&(t.x-=this.strokeWidth)),t},
/**
         * Recalculates line points given width and height
         * @private
         */
calcLinePoints:function(){var t=this.x1<=this.x2?-1:1,e=this.y1<=this.y2?-1:1,i=t*this.width*.5,n=e*this.height*.5;return{x1:i,x2:t*this.width*-.5,y1:n,y2:e*this.height*-.5}},
/* _TO_SVG_START_ */
/**
         * Returns svg representation of an instance
         * @return {Array} an array of strings with the specific svg representation
         * of the instance
         */
_toSVG:function(){var t=this.calcLinePoints();return["<line ","COMMON_PARTS",'x1="',t.x1,'" y1="',t.y1,'" x2="',t.x2,'" y2="',t.y2,'" />\n']}
/* _TO_SVG_END_ */}),e.Line.ATTRIBUTE_NAMES=e.SHARED_ATTRIBUTES.concat("x1 y1 x2 y2".split(" ")),e.Line.fromElement=function(t,n,r){r=r||{};var o=e.parseAttributes(t,e.Line.ATTRIBUTE_NAMES),s=[o.x1||0,o.y1||0,o.x2||0,o.y2||0];n(new e.Line(s,i(o,r)))},e.Line.fromObject=function(t,i){var r=n(t,!0);r.points=[t.x1,t.y1,t.x2,t.y2],e.Object._fromObject("Line",r,(function(t){delete t.points,i&&i(t)}),"points")})}(t),function(t){var e=t.fabric||(t.fabric={}),i=e.util.degreesToRadians;e.Circle?e.warn("fabric.Circle is already defined."):(e.Circle=e.util.createClass(e.Object,
/** @lends fabric.Circle.prototype */
{
/**
         * Type of an object
         * @type String
         * @default
         */
type:"circle",
/**
         * Radius of this circle
         * @type Number
         * @default
         */
radius:0,
/**
         * degrees of start of the circle.
         * probably will change to degrees in next major version
         * @type Number 0 - 359
         * @default 0
         */
startAngle:0,
/**
         * End angle of the circle
         * probably will change to degrees in next major version
         * @type Number 1 - 360
         * @default 360
         */
endAngle:360,cacheProperties:e.Object.prototype.cacheProperties.concat("radius","startAngle","endAngle"),
/**
         * @private
         * @param {String} key
         * @param {*} value
         * @return {fabric.Circle} thisArg
         */
_set:function(t,e){return this.callSuper("_set",t,e),"radius"===t&&this.setRadius(e),this},
/**
         * Returns object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} object representation of an instance
         */
toObject:function(t){return this.callSuper("toObject",["radius","startAngle","endAngle"].concat(t))},
/* _TO_SVG_START_ */
/**
         * Returns svg representation of an instance
         * @return {Array} an array of strings with the specific svg representation
         * of the instance
         */
_toSVG:function(){var t,n=(this.endAngle-this.startAngle)%360;if(0===n)t=["<circle ","COMMON_PARTS",'cx="0" cy="0" ','r="',this.radius,'" />\n'];else{var r=i(this.startAngle),o=i(this.endAngle),s=this.radius;t=['<path d="M '+e.util.cos(r)*s+" "+e.util.sin(r)*s," A "+s+" "+s," 0 ",+(n>180?"1":"0")+" 1"," "+e.util.cos(o)*s+" "+e.util.sin(o)*s,'" ',"COMMON_PARTS"," />\n"]}return t},
/* _TO_SVG_END_ */
/**
         * @private
         * @param {CanvasRenderingContext2D} ctx context to render on
         */
_render:function(t){t.beginPath(),t.arc(0,0,this.radius,i(this.startAngle),i(this.endAngle),!1),this._renderPaintInOrder(t)},
/**
         * Returns horizontal radius of an object (according to how an object is scaled)
         * @return {Number}
         */
getRadiusX:function(){return this.get("radius")*this.get("scaleX")},
/**
         * Returns vertical radius of an object (according to how an object is scaled)
         * @return {Number}
         */
getRadiusY:function(){return this.get("radius")*this.get("scaleY")},
/**
         * Sets radius of an object (and updates width accordingly)
         * @return {fabric.Circle} thisArg
         */
setRadius:function(t){return this.radius=t,this.set("width",2*t).set("height",2*t)}}),e.Circle.ATTRIBUTE_NAMES=e.SHARED_ATTRIBUTES.concat("cx cy r".split(" ")),e.Circle.fromElement=function(t,i){var n,r=e.parseAttributes(t,e.Circle.ATTRIBUTE_NAMES);if(!("radius"in(n=r)&&n.radius>=0))throw new Error("value of `r` attribute is required and can not be negative");r.left=(r.left||0)-r.radius,r.top=(r.top||0)-r.radius,i(new e.Circle(r))},e.Circle.fromObject=function(t,i){e.Object._fromObject("Circle",t,i)})}(t),function(t){var e=t.fabric||(t.fabric={});e.Triangle?e.warn("fabric.Triangle is already defined"):(e.Triangle=e.util.createClass(e.Object,
/** @lends fabric.Triangle.prototype */
{
/**
         * Type of an object
         * @type String
         * @default
         */
type:"triangle",
/**
         * Width is set to 100 to compensate the old initialize code that was setting it to 100
         * @type Number
         * @default
         */
width:100,
/**
         * Height is set to 100 to compensate the old initialize code that was setting it to 100
         * @type Number
         * @default
         */
height:100,
/**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
_render:function(t){var e=this.width/2,i=this.height/2;t.beginPath(),t.moveTo(-e,i),t.lineTo(0,-i),t.lineTo(e,i),t.closePath(),this._renderPaintInOrder(t)},
/* _TO_SVG_START_ */
/**
         * Returns svg representation of an instance
         * @return {Array} an array of strings with the specific svg representation
         * of the instance
         */
_toSVG:function(){var t=this.width/2,e=this.height/2;return["<polygon ","COMMON_PARTS",'points="',[-t+" "+e,"0 "+-e,t+" "+e].join(","),'" />']}
/* _TO_SVG_END_ */}),e.Triangle.fromObject=function(t,i){return e.Object._fromObject("Triangle",t,i)})}(t),function(t){var e=t.fabric||(t.fabric={}),i=2*Math.PI;e.Ellipse?e.warn("fabric.Ellipse is already defined."):(e.Ellipse=e.util.createClass(e.Object,
/** @lends fabric.Ellipse.prototype */
{
/**
         * Type of an object
         * @type String
         * @default
         */
type:"ellipse",
/**
         * Horizontal radius
         * @type Number
         * @default
         */
rx:0,
/**
         * Vertical radius
         * @type Number
         * @default
         */
ry:0,cacheProperties:e.Object.prototype.cacheProperties.concat("rx","ry"),
/**
         * Constructor
         * @param {Object} [options] Options object
         * @return {fabric.Ellipse} thisArg
         */
initialize:function(t){this.callSuper("initialize",t),this.set("rx",t&&t.rx||0),this.set("ry",t&&t.ry||0)},
/**
         * @private
         * @param {String} key
         * @param {*} value
         * @return {fabric.Ellipse} thisArg
         */
_set:function(t,e){switch(this.callSuper("_set",t,e),t){case"rx":this.rx=e,this.set("width",2*e);break;case"ry":this.ry=e,this.set("height",2*e)}return this},
/**
         * Returns horizontal radius of an object (according to how an object is scaled)
         * @return {Number}
         */
getRx:function(){return this.get("rx")*this.get("scaleX")},
/**
         * Returns Vertical radius of an object (according to how an object is scaled)
         * @return {Number}
         */
getRy:function(){return this.get("ry")*this.get("scaleY")},
/**
         * Returns object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} object representation of an instance
         */
toObject:function(t){return this.callSuper("toObject",["rx","ry"].concat(t))},
/* _TO_SVG_START_ */
/**
         * Returns svg representation of an instance
         * @return {Array} an array of strings with the specific svg representation
         * of the instance
         */
_toSVG:function(){return["<ellipse ","COMMON_PARTS",'cx="0" cy="0" ','rx="',this.rx,'" ry="',this.ry,'" />\n']},
/* _TO_SVG_END_ */
/**
         * @private
         * @param {CanvasRenderingContext2D} ctx context to render on
         */
_render:function(t){t.beginPath(),t.save(),t.transform(1,0,0,this.ry/this.rx,0,0),t.arc(0,0,this.rx,0,i,!1),t.restore(),this._renderPaintInOrder(t)}}),e.Ellipse.ATTRIBUTE_NAMES=e.SHARED_ATTRIBUTES.concat("cx cy rx ry".split(" ")),e.Ellipse.fromElement=function(t,i){var n=e.parseAttributes(t,e.Ellipse.ATTRIBUTE_NAMES);n.left=(n.left||0)-n.rx,n.top=(n.top||0)-n.ry,i(new e.Ellipse(n))},e.Ellipse.fromObject=function(t,i){e.Object._fromObject("Ellipse",t,i)})}(t),function(t){var e=t.fabric||(t.fabric={}),i=e.util.object.extend;e.Rect?e.warn("fabric.Rect is already defined"):(e.Rect=e.util.createClass(e.Object,
/** @lends fabric.Rect.prototype */
{
/**
         * List of properties to consider when checking if state of an object is changed ({@link fabric.Object#hasStateChanged})
         * as well as for history (undo/redo) purposes
         * @type Array
         */
stateProperties:e.Object.prototype.stateProperties.concat("rx","ry"),
/**
         * Type of an object
         * @type String
         * @default
         */
type:"rect",
/**
         * Horizontal border radius
         * @type Number
         * @default
         */
rx:0,
/**
         * Vertical border radius
         * @type Number
         * @default
         */
ry:0,cacheProperties:e.Object.prototype.cacheProperties.concat("rx","ry"),
/**
         * Constructor
         * @param {Object} [options] Options object
         * @return {Object} thisArg
         */
initialize:function(t){this.callSuper("initialize",t),this._initRxRy()},
/**
         * Initializes rx/ry attributes
         * @private
         */
_initRxRy:function(){this.rx&&!this.ry?this.ry=this.rx:this.ry&&!this.rx&&(this.rx=this.ry)},
/**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
_render:function(t){var e=this.rx?Math.min(this.rx,this.width/2):0,i=this.ry?Math.min(this.ry,this.height/2):0,n=this.width,r=this.height,o=-this.width/2,s=-this.height/2,a=0!==e||0!==i,l=.4477152502;t.beginPath(),t.moveTo(o+e,s),t.lineTo(o+n-e,s),a&&t.bezierCurveTo(o+n-l*e,s,o+n,s+l*i,o+n,s+i),t.lineTo(o+n,s+r-i),a&&t.bezierCurveTo(o+n,s+r-l*i,o+n-l*e,s+r,o+n-e,s+r),t.lineTo(o+e,s+r),a&&t.bezierCurveTo(o+l*e,s+r,o,s+r-l*i,o,s+r-i),t.lineTo(o,s+i),a&&t.bezierCurveTo(o,s+l*i,o+l*e,s,o+e,s),t.closePath(),this._renderPaintInOrder(t)},
/**
         * Returns object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} object representation of an instance
         */
toObject:function(t){return this.callSuper("toObject",["rx","ry"].concat(t))},
/* _TO_SVG_START_ */
/**
         * Returns svg representation of an instance
         * @return {Array} an array of strings with the specific svg representation
         * of the instance
         */
_toSVG:function(){return["<rect ","COMMON_PARTS",'x="',-this.width/2,'" y="',-this.height/2,'" rx="',this.rx,'" ry="',this.ry,'" width="',this.width,'" height="',this.height,'" />\n']}
/* _TO_SVG_END_ */}),e.Rect.ATTRIBUTE_NAMES=e.SHARED_ATTRIBUTES.concat("x y rx ry width height".split(" ")),e.Rect.fromElement=function(t,n,r){if(!t)return n(null);r=r||{};var o=e.parseAttributes(t,e.Rect.ATTRIBUTE_NAMES);o.left=o.left||0,o.top=o.top||0,o.height=o.height||0,o.width=o.width||0;var s=new e.Rect(i(r?e.util.object.clone(r):{},o));s.visible=s.visible&&s.width>0&&s.height>0,n(s)},e.Rect.fromObject=function(t,i){return e.Object._fromObject("Rect",t,i)})}(t),function(t){var e=t.fabric||(t.fabric={}),i=e.util.object.extend,n=e.util.array.min,r=e.util.array.max,o=e.util.toFixed,s=e.util.projectStrokeOnPoints;e.Polyline?e.warn("fabric.Polyline is already defined"):(e.Polyline=e.util.createClass(e.Object,
/** @lends fabric.Polyline.prototype */
{
/**
         * Type of an object
         * @type String
         * @default
         */
type:"polyline",
/**
         * Points array
         * @type Array
         * @default
         */
points:null,
/**
         * WARNING: Feature in progress
         * Calculate the exact bounding box taking in account strokeWidth on acute angles
         * this will be turned to true by default on fabric 6.0
         * maybe will be left in as an optimization since calculations may be slow
         * @deprecated
         * @type Boolean
         * @default false
         */
exactBoundingBox:!1,cacheProperties:e.Object.prototype.cacheProperties.concat("points"),
/**
         * Constructor
         * @param {Array} points Array of points (where each point is an object with x and y)
         * @param {Object} [options] Options object
         * @return {fabric.Polyline} thisArg
         * @example
         * var poly = new fabric.Polyline([
         *     { x: 10, y: 10 },
         *     { x: 50, y: 30 },
         *     { x: 40, y: 70 },
         *     { x: 60, y: 50 },
         *     { x: 100, y: 150 },
         *     { x: 40, y: 100 }
         *   ], {
         *   stroke: 'red',
         *   left: 100,
         *   top: 100
         * });
         */
initialize:function(t,e){e=e||{},this.points=t||[],this.callSuper("initialize",e),this._setPositionDimensions(e)},
/**
         * @private
         */
_projectStrokeOnPoints:function(){return s(this.points,this,!0)},_setPositionDimensions:function(t){var e,i=this._calcDimensions(t),n=this.exactBoundingBox?this.strokeWidth:0;this.width=i.width-n,this.height=i.height-n,t.fromSVG||(e=this.translateToGivenOrigin({
// this looks bad, but is one way to keep it optional for now.
x:i.left-this.strokeWidth/2+n/2,y:i.top-this.strokeWidth/2+n/2},"left","top",this.originX,this.originY)),void 0===t.left&&(this.left=t.fromSVG?i.left:e.x),void 0===t.top&&(this.top=t.fromSVG?i.top:e.y),this.pathOffset={x:i.left+this.width/2+n/2,y:i.top+this.height/2+n/2}},
/**
         * Calculate the polygon min and max point from points array,
         * returning an object with left, top, width, height to measure the
         * polygon size
         * @return {Object} object.left X coordinate of the polygon leftmost point
         * @return {Object} object.top Y coordinate of the polygon topmost point
         * @return {Object} object.width distance between X coordinates of the polygon leftmost and rightmost point
         * @return {Object} object.height distance between Y coordinates of the polygon topmost and bottommost point
         * @private
         */
_calcDimensions:function(){var t=this.exactBoundingBox?this._projectStrokeOnPoints():this.points,e=n(t,"x")||0,i=n(t,"y")||0;return{left:e,top:i,width:(r(t,"x")||0)-e,height:(r(t,"y")||0)-i}},
/**
         * Returns object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} Object representation of an instance
         */
toObject:function(t){return i(this.callSuper("toObject",t),{points:this.points.concat()})},
/* _TO_SVG_START_ */
/**
         * Returns svg representation of an instance
         * @return {Array} an array of strings with the specific svg representation
         * of the instance
         */
_toSVG:function(){for(var t=[],i=this.pathOffset.x,n=this.pathOffset.y,r=e.Object.NUM_FRACTION_DIGITS,s=0,a=this.points.length;s<a;s++)t.push(o(this.points[s].x-i,r),",",o(this.points[s].y-n,r)," ");return["<"+this.type+" ","COMMON_PARTS",'points="',t.join(""),'" />\n']},
/* _TO_SVG_END_ */
/**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
commonRender:function(t){var e,i=this.points.length,n=this.pathOffset.x,r=this.pathOffset.y;if(!i||isNaN(this.points[i-1].y))return!1;t.beginPath(),t.moveTo(this.points[0].x-n,this.points[0].y-r);for(var o=0;o<i;o++)e=this.points[o],t.lineTo(e.x-n,e.y-r);return!0},
/**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
_render:function(t){this.commonRender(t)&&this._renderPaintInOrder(t)},
/**
         * Returns complexity of an instance
         * @return {Number} complexity of this instance
         */
complexity:function(){return this.get("points").length}}),e.Polyline.ATTRIBUTE_NAMES=e.SHARED_ATTRIBUTES.concat(),e.Polyline.fromElementGenerator=function(t){return function(n,r,o){if(!n)return r(null);o||(o={});var s=e.parsePointsAttribute(n.getAttribute("points")),a=e.parseAttributes(n,e[t].ATTRIBUTE_NAMES);a.fromSVG=!0,r(new e[t](s,i(a,o)))}},e.Polyline.fromElement=e.Polyline.fromElementGenerator("Polyline"),e.Polyline.fromObject=function(t,i){return e.Object._fromObject("Polyline",t,i,"points")})}(t),function(t){var e=t.fabric||(t.fabric={}),i=e.util.projectStrokeOnPoints;e.Polygon?e.warn("fabric.Polygon is already defined"):(e.Polygon=e.util.createClass(e.Polyline,
/** @lends fabric.Polygon.prototype */
{
/**
         * Type of an object
         * @type String
         * @default
         */
type:"polygon",
/**
         * @private
         */
_projectStrokeOnPoints:function(){return i(this.points,this)},
/**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
_render:function(t){this.commonRender(t)&&(t.closePath(),this._renderPaintInOrder(t))}}),e.Polygon.ATTRIBUTE_NAMES=e.SHARED_ATTRIBUTES.concat(),e.Polygon.fromElement=e.Polyline.fromElementGenerator("Polygon"),e.Polygon.fromObject=function(t,i){e.Object._fromObject("Polygon",t,i,"points")})}(t),function(t){var e=t.fabric||(t.fabric={}),i=e.util.array.min,n=e.util.array.max,r=e.util.object.extend,o=e.util.object.clone,s=e.util.toFixed;e.Path?e.warn("fabric.Path is already defined"):(e.Path=e.util.createClass(e.Object,
/** @lends fabric.Path.prototype */
{
/**
         * Type of an object
         * @type String
         * @default
         */
type:"path",
/**
         * Array of path points
         * @type Array
         * @default
         */
path:null,cacheProperties:e.Object.prototype.cacheProperties.concat("path","fillRule"),stateProperties:e.Object.prototype.stateProperties.concat("path"),
/**
         * Constructor
         * @param {Array|String} path Path data (sequence of coordinates and corresponding "command" tokens)
         * @param {Object} [options] Options object
         * @return {fabric.Path} thisArg
         */
initialize:function(t,e){delete(e=o(e||{})).path,this.callSuper("initialize",e),this._setPath(t||[],e)},
/**
        * @private
        * @param {Array|String} path Path data (sequence of coordinates and corresponding "command" tokens)
        * @param {Object} [options] Options object
        */
_setPath:function(t,i){this.path=e.util.makePathSimpler(Array.isArray(t)?t:e.util.parsePath(t)),e.Polyline.prototype._setPositionDimensions.call(this,i||{})},
/**
         * @private
         * @param {CanvasRenderingContext2D} ctx context to render path on
         */
_renderPathCommands:function(t){var e,i=0,n=0,r=0,o=0,s=0,a=0,l=-this.pathOffset.x,c=-this.pathOffset.y;t.beginPath();for(var h=0,u=this.path.length;h<u;++h)switch((e=this.path[h])[0]){case"L":r=e[1],o=e[2],t.lineTo(r+l,o+c);break;case"M":i=r=e[1],n=o=e[2],t.moveTo(r+l,o+c);break;case"C":r=e[5],o=e[6],s=e[3],a=e[4],t.bezierCurveTo(e[1]+l,e[2]+c,s+l,a+c,r+l,o+c);break;case"Q":t.quadraticCurveTo(e[1]+l,e[2]+c,e[3]+l,e[4]+c),r=e[3],o=e[4],s=e[1],a=e[2];break;case"z":case"Z":r=i,o=n,t.closePath()}},
/**
         * @private
         * @param {CanvasRenderingContext2D} ctx context to render path on
         */
_render:function(t){this._renderPathCommands(t),this._renderPaintInOrder(t)},
/**
         * Returns string representation of an instance
         * @return {String} string representation of an instance
         */
toString:function(){return"#<fabric.Path ("+this.complexity()+'): { "top": '+this.top+', "left": '+this.left+" }>"},
/**
         * Returns object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} object representation of an instance
         */
toObject:function(t){return r(this.callSuper("toObject",t),{path:this.path.map((function(t){return t.slice()}))})},
/**
         * Returns dataless object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} object representation of an instance
         */
toDatalessObject:function(t){var e=this.toObject(["sourcePath"].concat(t));return e.sourcePath&&delete e.path,e},
/* _TO_SVG_START_ */
/**
         * Returns svg representation of an instance
         * @return {Array} an array of strings with the specific svg representation
         * of the instance
         */
_toSVG:function(){return["<path ","COMMON_PARTS",'d="',e.util.joinPath(this.path),'" stroke-linecap="round" ',"/>\n"]},_getOffsetTransform:function(){var t=e.Object.NUM_FRACTION_DIGITS;return" translate("+s(-this.pathOffset.x,t)+", "+s(-this.pathOffset.y,t)+")"},
/**
         * Returns svg clipPath representation of an instance
         * @param {Function} [reviver] Method for further parsing of svg representation.
         * @return {String} svg representation of an instance
         */
toClipPathSVG:function(t){var e=this._getOffsetTransform();return"\t"+this._createBaseClipPathSVGMarkup(this._toSVG(),{reviver:t,additionalTransform:e})},
/**
         * Returns svg representation of an instance
         * @param {Function} [reviver] Method for further parsing of svg representation.
         * @return {String} svg representation of an instance
         */
toSVG:function(t){var e=this._getOffsetTransform();return this._createBaseSVGMarkup(this._toSVG(),{reviver:t,additionalTransform:e})},
/* _TO_SVG_END_ */
/**
         * Returns number representation of an instance complexity
         * @return {Number} complexity of this instance
         */
complexity:function(){return this.path.length},
/**
         * @private
         */
_calcDimensions:function(){for(var t,r,o=[],s=[],a=0,l=0,c=0,h=0,u=0,f=this.path.length;u<f;++u){switch((t=this.path[u])[0]){case"L":c=t[1],h=t[2],r=[];break;case"M":a=c=t[1],l=h=t[2],r=[];break;case"C":r=e.util.getBoundsOfCurve(c,h,t[1],t[2],t[3],t[4],t[5],t[6]),c=t[5],h=t[6];break;case"Q":r=e.util.getBoundsOfCurve(c,h,t[1],t[2],t[1],t[2],t[3],t[4]),c=t[3],h=t[4];break;case"z":case"Z":c=a,h=l}r.forEach((function(t){o.push(t.x),s.push(t.y)})),o.push(c),s.push(h)}var d=i(o)||0,p=i(s)||0;return{left:d,top:p,width:(n(o)||0)-d,height:(n(s)||0)-p}}}),e.Path.fromObject=function(t,i){if("string"==typeof t.sourcePath){var n=t.sourcePath;e.loadSVGFromURL(n,(function(n){var r=n[0];r.setOptions(t),t.clipPath?e.util.enlivenObjects([t.clipPath],(function(t){r.clipPath=t[0],i&&i(r)})):i&&i(r)}))}else e.Object._fromObject("Path",t,i,"path")},e.Path.ATTRIBUTE_NAMES=e.SHARED_ATTRIBUTES.concat(["d"]),e.Path.fromElement=function(t,i,n){var o=e.parseAttributes(t,e.Path.ATTRIBUTE_NAMES);o.fromSVG=!0,i(new e.Path(o.d,r(o,n)))})}(t),function(t){var e=t.fabric||(t.fabric={}),i=e.util.array.min,n=e.util.array.max;e.Group||(e.Group=e.util.createClass(e.Object,e.Collection,
/** @lends fabric.Group.prototype */
{
/**
         * Type of an object
         * @type String
         * @default
         */
type:"group",
/**
         * Width of stroke
         * @type Number
         * @default
         */
strokeWidth:0,
/**
         * Indicates if click, mouseover, mouseout events & hoverCursor should also check for subtargets
         * @type Boolean
         * @default
         */
subTargetCheck:!1,
/**
         * Groups are container, do not render anything on theyr own, ence no cache properties
         * @type Array
         * @default
         */
cacheProperties:[],
/**
         * setOnGroup is a method used for TextBox that is no more used since 2.0.0 The behavior is still
         * available setting this boolean to true.
         * @type Boolean
         * @since 2.0.0
         * @default
         */
useSetOnGroup:!1,
/**
         * Constructor
         * @param {Object} objects Group objects
         * @param {Object} [options] Options object
         * @param {Boolean} [isAlreadyGrouped] if true, objects have been grouped already.
         * @return {Object} thisArg
         */
initialize:function(t,e,i){e=e||{},this._objects=[],i&&this.callSuper("initialize",e),this._objects=t||[];for(var n=this._objects.length;n--;)this._objects[n].group=this;if(i)this._updateObjectsACoords();else{var r=e&&e.centerPoint;void 0!==e.originX&&(this.originX=e.originX),void 0!==e.originY&&(this.originY=e.originY),r||this._calcBounds(),this._updateObjectsCoords(r),delete e.centerPoint,this.callSuper("initialize",e)}this.setCoords()},
/**
         * @private
         */
_updateObjectsACoords:function(){for(var t=this._objects.length;t--;)this._objects[t].setCoords(true)},
/**
         * @private
         * @param {Boolean} [skipCoordsChange] if true, coordinates of objects enclosed in a group do not change
         */
_updateObjectsCoords:function(t){t=t||this.getCenterPoint();for(var e=this._objects.length;e--;)this._updateObjectCoords(this._objects[e],t)},
/**
         * @private
         * @param {Object} object
         * @param {fabric.Point} center, current center of group.
         */
_updateObjectCoords:function(t,e){var i=t.left,n=t.top;t.set({left:i-e.x,top:n-e.y}),t.group=this,t.setCoords(!0)},
/**
         * Returns string represenation of a group
         * @return {String}
         */
toString:function(){return"#<fabric.Group: ("+this.complexity()+")>"},
/**
         * Adds an object to a group; Then recalculates group's dimension, position.
         * @param {Object} object
         * @return {fabric.Group} thisArg
         * @chainable
         */
addWithUpdate:function(t){var i=!!this.group;return this._restoreObjectsState(),e.util.resetObjectTransform(this),t&&(i&&e.util.removeTransformFromObject(t,this.group.calcTransformMatrix()),this._objects.push(t),t.group=this,t._set("canvas",this.canvas)),this._calcBounds(),this._updateObjectsCoords(),this.dirty=!0,i?this.group.addWithUpdate():this.setCoords(),this},
/**
         * Removes an object from a group; Then recalculates group's dimension, position.
         * @param {Object} object
         * @return {fabric.Group} thisArg
         * @chainable
         */
removeWithUpdate:function(t){return this._restoreObjectsState(),e.util.resetObjectTransform(this),this.remove(t),this._calcBounds(),this._updateObjectsCoords(),this.setCoords(),this.dirty=!0,this},
/**
         * @private
         */
_onObjectAdded:function(t){this.dirty=!0,t.group=this,t._set("canvas",this.canvas)},
/**
         * @private
         */
_onObjectRemoved:function(t){this.dirty=!0,delete t.group},
/**
         * @private
         */
_set:function(t,i){var n=this._objects.length;if(this.useSetOnGroup)for(;n--;)this._objects[n].setOnGroup(t,i);if("canvas"===t)for(;n--;)this._objects[n]._set(t,i);e.Object.prototype._set.call(this,t,i)},
/**
         * Returns object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} object representation of an instance
         */
toObject:function(t){var i=this.includeDefaultValues,n=this._objects.filter((function(t){return!t.excludeFromExport})).map((function(e){var n=e.includeDefaultValues;e.includeDefaultValues=i;var r=e.toObject(t);return e.includeDefaultValues=n,r})),r=e.Object.prototype.toObject.call(this,t);return r.objects=n,r},
/**
         * Returns object representation of an instance, in dataless mode.
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} object representation of an instance
         */
toDatalessObject:function(t){var i,n=this.sourcePath;if(n)i=n;else{var r=this.includeDefaultValues;i=this._objects.map((function(e){var i=e.includeDefaultValues;e.includeDefaultValues=r;var n=e.toDatalessObject(t);return e.includeDefaultValues=i,n}))}var o=e.Object.prototype.toDatalessObject.call(this,t);return o.objects=i,o},
/**
         * Renders instance on a given context
         * @param {CanvasRenderingContext2D} ctx context to render instance on
         */
render:function(t){this._transformDone=!0,this.callSuper("render",t),this._transformDone=!1},
/**
         * Decide if the object should cache or not. Create its own cache level
         * needsItsOwnCache should be used when the object drawing method requires
         * a cache step. None of the fabric classes requires it.
         * Generally you do not cache objects in groups because the group is already cached.
         * @return {Boolean}
         */
shouldCache:function(){var t=e.Object.prototype.shouldCache.call(this);if(t)for(var i=0,n=this._objects.length;i<n;i++)if(this._objects[i].willDrawShadow())return this.ownCaching=!1,!1;return t},
/**
         * Check if this object or a child object will cast a shadow
         * @return {Boolean}
         */
willDrawShadow:function(){if(e.Object.prototype.willDrawShadow.call(this))return!0;for(var t=0,i=this._objects.length;t<i;t++)if(this._objects[t].willDrawShadow())return!0;return!1},
/**
         * Check if this group or its parent group are caching, recursively up
         * @return {Boolean}
         */
isOnACache:function(){return this.ownCaching||this.group&&this.group.isOnACache()},
/**
         * Execute the drawing operation for an object on a specified context
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
drawObject:function(t){for(var e=0,i=this._objects.length;e<i;e++)this._objects[e].render(t);this._drawClipPath(t,this.clipPath)},
/**
         * Check if cache is dirty
         */
isCacheDirty:function(t){if(this.callSuper("isCacheDirty",t))return!0;if(!this.statefullCache)return!1;for(var e=0,i=this._objects.length;e<i;e++)if(this._objects[e].isCacheDirty(!0)){if(this._cacheCanvas){var n=this.cacheWidth/this.zoomX,r=this.cacheHeight/this.zoomY;this._cacheContext.clearRect(-n/2,-r/2,n,r)}return!0}return!1},
/**
         * Restores original state of each of group objects (original state is that which was before group was created).
         * if the nested boolean is true, the original state will be restored just for the
         * first group and not for all the group chain
         * @private
         * @param {Boolean} nested tell the function to restore object state up to the parent group and not more
         * @return {fabric.Group} thisArg
         * @chainable
         */
_restoreObjectsState:function(){var t=this.calcOwnMatrix();return this._objects.forEach((function(i){e.util.addTransformToObject(i,t),delete i.group,i.setCoords()})),this},
/**
         * Destroys a group (restoring state of its objects)
         * @return {fabric.Group} thisArg
         * @chainable
         */
destroy:function(){return this._objects.forEach((function(t){t.set("dirty",!0)})),this._restoreObjectsState()},dispose:function(){this.callSuper("dispose"),this.forEachObject((function(t){t.dispose&&t.dispose()})),this._objects=[]},
/**
         * make a group an active selection, remove the group from canvas
         * the group has to be on canvas for this to work.
         * @return {fabric.ActiveSelection} thisArg
         * @chainable
         */
toActiveSelection:function(){if(this.canvas){var t=this._objects,i=this.canvas;this._objects=[];var n=this.toObject();delete n.objects;var r=new e.ActiveSelection([]);return r.set(n),r.type="activeSelection",i.remove(this),t.forEach((function(t){t.group=r,t.dirty=!0,i.add(t)})),r.canvas=i,r._objects=t,i._activeObject=r,r.setCoords(),r}},
/**
         * Destroys a group (restoring state of its objects)
         * @return {fabric.Group} thisArg
         * @chainable
         */
ungroupOnCanvas:function(){return this._restoreObjectsState()},
/**
         * Sets coordinates of all objects inside group
         * @return {fabric.Group} thisArg
         * @chainable
         */
setObjectsCoords:function(){return this.forEachObject((function(t){t.setCoords(true)})),this},
/**
         * @private
         */
_calcBounds:function(t){for(var e,i,n,r,o=[],s=[],a=["tr","br","bl","tl"],l=0,c=this._objects.length,h=a.length;l<c;++l){for(n=(e=this._objects[l]).calcACoords(),r=0;r<h;r++)i=a[r],o.push(n[i].x),s.push(n[i].y);e.aCoords=n}this._getBounds(o,s,t)},
/**
         * @private
         */
_getBounds:function(t,r,o){var s=new e.Point(i(t),i(r)),a=new e.Point(n(t),n(r)),l=s.y||0,c=s.x||0,h=a.x-s.x||0,u=a.y-s.y||0;this.width=h,this.height=u,o||this.setPositionByOrigin({x:c,y:l},"left","top")},
/* _TO_SVG_START_ */
/**
         * Returns svg representation of an instance
         * @param {Function} [reviver] Method for further parsing of svg representation.
         * @return {String} svg representation of an instance
         */
_toSVG:function(t){for(var e=["<g ","COMMON_PARTS"," >\n"],i=0,n=this._objects.length;i<n;i++)e.push("\t\t",this._objects[i].toSVG(t));return e.push("</g>\n"),e},
/**
         * Returns styles-string for svg-export, specific version for group
         * @return {String}
         */
getSvgStyles:function(){var t=void 0!==this.opacity&&1!==this.opacity?"opacity: "+this.opacity+";":"",e=this.visible?"":" visibility: hidden;";return[t,this.getSvgFilter(),e].join("")},
/**
         * Returns svg clipPath representation of an instance
         * @param {Function} [reviver] Method for further parsing of svg representation.
         * @return {String} svg representation of an instance
         */
toClipPathSVG:function(t){for(var e=[],i=0,n=this._objects.length;i<n;i++)e.push("\t",this._objects[i].toClipPathSVG(t));return this._createBaseClipPathSVGMarkup(e,{reviver:t})}
/* _TO_SVG_END_ */}),e.Group.fromObject=function(t,i){var n=t.objects,r=e.util.object.clone(t,!0);delete r.objects,"string"!=typeof n?e.util.enlivenObjects(n,(function(n){e.util.enlivenObjectEnlivables(t,r,(function(){i&&i(new e.Group(n,r,!0))}))})):e.loadSVGFromURL(n,(function(o){var s=e.util.groupSVGElements(o,t,n),a=r.clipPath;delete r.clipPath,s.set(r),a?e.util.enlivenObjects([a],(function(t){s.clipPath=t[0],i&&i(s)})):i&&i(s)}))})}(t),function(t){var e=t.fabric||(t.fabric={});e.ActiveSelection||(e.ActiveSelection=e.util.createClass(e.Group,
/** @lends fabric.ActiveSelection.prototype */
{
/**
         * Type of an object
         * @type String
         * @default
         */
type:"activeSelection",
/**
         * Constructor
         * @param {Object} objects ActiveSelection objects
         * @param {Object} [options] Options object
         * @return {Object} thisArg
         */
initialize:function(t,i){i=i||{},this._objects=t||[];for(var n=this._objects.length;n--;)this._objects[n].group=this;i.originX&&(this.originX=i.originX),i.originY&&(this.originY=i.originY),this._calcBounds(),this._updateObjectsCoords(),e.Object.prototype.initialize.call(this,i),this.setCoords()},
/**
         * Change te activeSelection to a normal group,
         * High level function that automatically adds it to canvas as
         * active object. no events fired.
         * @since 2.0.0
         * @return {fabric.Group}
         */
toGroup:function(){var t=this._objects.concat();this._objects=[];var i=e.Object.prototype.toObject.call(this),n=new e.Group([]);if(delete i.type,n.set(i),t.forEach((function(t){t.canvas.remove(t),t.group=n})),n._objects=t,!this.canvas)return n;var r=this.canvas;return r.add(n),r._activeObject=n,n.setCoords(),n},
/**
         * If returns true, deselection is cancelled.
         * @since 2.0.0
         * @return {Boolean} [cancel]
         */
onDeselect:function(){return this.destroy(),!1},
/**
         * Returns string representation of a group
         * @return {String}
         */
toString:function(){return"#<fabric.ActiveSelection: ("+this.complexity()+")>"},
/**
         * Decide if the object should cache or not. Create its own cache level
         * objectCaching is a global flag, wins over everything
         * needsItsOwnCache should be used when the object drawing method requires
         * a cache step. None of the fabric classes requires it.
         * Generally you do not cache objects in groups because the group outside is cached.
         * @return {Boolean}
         */
shouldCache:function(){return!1},
/**
         * Check if this group or its parent group are caching, recursively up
         * @return {Boolean}
         */
isOnACache:function(){return!1},
/**
         * Renders controls and borders for the object
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {Object} [styleOverride] properties to override the object style
         * @param {Object} [childrenOverride] properties to override the children overrides
         */
_renderControls:function(t,e,i){t.save(),t.globalAlpha=this.isMoving?this.borderOpacityWhenMoving:1,this.callSuper("_renderControls",t,e),void 0===(i=i||{}).hasControls&&(i.hasControls=!1),i.forActiveSelection=!0;for(var n=0,r=this._objects.length;n<r;n++)this._objects[n]._renderControls(t,i);t.restore()}}),e.ActiveSelection.fromObject=function(t,i){e.util.enlivenObjects(t.objects,(function(n){delete t.objects,i&&i(new e.ActiveSelection(n,t,!0))}))})}(t),function(t){var e=C.util.object.extend;t.fabric||(t.fabric={}),t.fabric.Image?C.warn("fabric.Image is already defined."):(C.Image=C.util.createClass(C.Object,
/** @lends fabric.Image.prototype */
{
/**
         * Type of an object
         * @type String
         * @default
         */
type:"image",
/**
         * Width of a stroke.
         * For image quality a stroke multiple of 2 gives better results.
         * @type Number
         * @default
         */
strokeWidth:0,
/**
         * When calling {@link fabric.Image.getSrc}, return value from element src with `element.getAttribute('src')`.
         * This allows for relative urls as image src.
         * @since 2.7.0
         * @type Boolean
         * @default
         */
srcFromAttribute:!1,
/**
         * private
         * contains last value of scaleX to detect
         * if the Image got resized after the last Render
         * @type Number
         */
_lastScaleX:1,
/**
         * private
         * contains last value of scaleY to detect
         * if the Image got resized after the last Render
         * @type Number
         */
_lastScaleY:1,
/**
         * private
         * contains last value of scaling applied by the apply filter chain
         * @type Number
         */
_filterScalingX:1,
/**
         * private
         * contains last value of scaling applied by the apply filter chain
         * @type Number
         */
_filterScalingY:1,
/**
         * minimum scale factor under which any resizeFilter is triggered to resize the image
         * 0 will disable the automatic resize. 1 will trigger automatically always.
         * number bigger than 1 are not implemented yet.
         * @type Number
         */
minimumScaleTrigger:.5,
/**
         * List of properties to consider when checking if
         * state of an object is changed ({@link fabric.Object#hasStateChanged})
         * as well as for history (undo/redo) purposes
         * @type Array
         */
stateProperties:C.Object.prototype.stateProperties.concat("cropX","cropY"),
/**
         * List of properties to consider when checking if cache needs refresh
         * Those properties are checked by statefullCache ON ( or lazy mode if we want ) or from single
         * calls to Object.set(key, value). If the key is in this list, the object is marked as dirty
         * and refreshed at the next render
         * @type Array
         */
cacheProperties:C.Object.prototype.cacheProperties.concat("cropX","cropY"),
/**
         * key used to retrieve the texture representing this image
         * @since 2.0.0
         * @type String
         * @default
         */
cacheKey:"",
/**
         * Image crop in pixels from original image size.
         * @since 2.0.0
         * @type Number
         * @default
         */
cropX:0,
/**
         * Image crop in pixels from original image size.
         * @since 2.0.0
         * @type Number
         * @default
         */
cropY:0,
/**
         * Indicates whether this canvas will use image smoothing when painting this image.
         * Also influence if the cacheCanvas for this image uses imageSmoothing
         * @since 4.0.0-beta.11
         * @type Boolean
         * @default
         */
imageSmoothing:!0,
/**
         * Constructor
         * Image can be initialized with any canvas drawable or a string.
         * The string should be a url and will be loaded as an image.
         * Canvas and Image element work out of the box, while videos require extra code to work.
         * Please check video element events for seeking.
         * @param {HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | String} element Image element
         * @param {Object} [options] Options object
         * @param {function} [callback] callback function to call after eventual filters applied.
         * @return {fabric.Image} thisArg
         */
initialize:function(t,e){e||(e={}),this.filters=[],this.cacheKey="texture"+C.Object.__uid++,this.callSuper("initialize",e),this._initElement(t,e)},
/**
         * Returns image element which this instance if based on
         * @return {HTMLImageElement} Image element
         */
getElement:function(){return this._element||{}},
/**
         * Sets image element for this instance to a specified one.
         * If filters defined they are applied to new image.
         * You might need to call `canvas.renderAll` and `object.setCoords` after replacing, to render new image and update controls area.
         * @param {HTMLImageElement} element
         * @param {Object} [options] Options object
         * @return {fabric.Image} thisArg
         * @chainable
         */
setElement:function(t,e){return this.removeTexture(this.cacheKey),this.removeTexture(this.cacheKey+"_filtered"),this._element=t,this._originalElement=t,this._initConfig(e),0!==this.filters.length&&this.applyFilters(),this.resizeFilter&&this.applyResizeFilters(),this},
/**
         * Delete a single texture if in webgl mode
         */
removeTexture:function(t){var e=C.filterBackend;e&&e.evictCachesForKey&&e.evictCachesForKey(t)},
/**
         * Delete textures, reference to elements and eventually JSDOM cleanup
         */
dispose:function(){this.callSuper("dispose"),this.removeTexture(this.cacheKey),this.removeTexture(this.cacheKey+"_filtered"),this._cacheContext=void 0,["_originalElement","_element","_filteredEl","_cacheCanvas"].forEach(function(t){C.util.cleanUpJsdomNode(this[t]),this[t]=void 0}.bind(this))},
/**
         * Get the crossOrigin value (of the corresponding image element)
         */
getCrossOrigin:function(){return this._originalElement&&(this._originalElement.crossOrigin||null)},
/**
         * Returns original size of an image
         * @return {Object} Object with "width" and "height" properties
         */
getOriginalSize:function(){var t=this.getElement();return{width:t.naturalWidth||t.width,height:t.naturalHeight||t.height}},
/**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
_stroke:function(t){if(this.stroke&&0!==this.strokeWidth){var e=this.width/2,i=this.height/2;t.beginPath(),t.moveTo(-e,-i),t.lineTo(e,-i),t.lineTo(e,i),t.lineTo(-e,i),t.lineTo(-e,-i),t.closePath()}},
/**
         * Returns object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} Object representation of an instance
         */
toObject:function(t){var i=[];this.filters.forEach((function(t){t&&i.push(t.toObject())}));var n=e(this.callSuper("toObject",["cropX","cropY"].concat(t)),{src:this.getSrc(),crossOrigin:this.getCrossOrigin(),filters:i});return this.resizeFilter&&(n.resizeFilter=this.resizeFilter.toObject()),n},
/**
         * Returns true if an image has crop applied, inspecting values of cropX,cropY,width,height.
         * @return {Boolean}
         */
hasCrop:function(){return this.cropX||this.cropY||this.width<this._element.width||this.height<this._element.height},
/* _TO_SVG_START_ */
/**
         * Returns svg representation of an instance
         * @return {Array} an array of strings with the specific svg representation
         * of the instance
         */
_toSVG:function(){var t,e=[],i=[],n=this._element,r=-this.width/2,o=-this.height/2,s="",a="";if(!n)return[];if(this.hasCrop()){var l=C.Object.__uid++;e.push('<clipPath id="imageCrop_'+l+'">\n','\t<rect x="'+r+'" y="'+o+'" width="'+this.width+'" height="'+this.height+'" />\n',"</clipPath>\n"),s=' clip-path="url(#imageCrop_'+l+')" '}if(this.imageSmoothing||(a='" image-rendering="optimizeSpeed'),i.push("\t<image ","COMMON_PARTS",'xlink:href="',this.getSvgSrc(!0),'" x="',r-this.cropX,'" y="',o-this.cropY,
// we're essentially moving origin of transformation from top/left corner to the center of the shape
// by wrapping it in container <g> element with actual transformation, then offsetting object to the top/left
// so that object's center aligns with container's left/top
'" width="',n.width||n.naturalWidth,'" height="',n.height||n.height,a,'"',s,"></image>\n"),this.stroke||this.strokeDashArray){var c=this.fill;this.fill=null,t=["\t<rect ",'x="',r,'" y="',o,'" width="',this.width,'" height="',this.height,'" style="',this.getSvgStyles(),'"/>\n'],this.fill=c}return e="fill"!==this.paintFirst?e.concat(t,i):e.concat(i,t)},
/* _TO_SVG_END_ */
/**
         * Returns source of an image
         * @param {Boolean} filtered indicates if the src is needed for svg
         * @return {String} Source of an image
         */
getSrc:function(t){var e=t?this._element:this._originalElement;return e?e.toDataURL?e.toDataURL():this.srcFromAttribute?e.getAttribute("src"):e.src:this.src||""},
/**
         * Sets source of an image
         * @param {String} src Source string (URL)
         * @param {Function} [callback] Callback is invoked when image has been loaded (and all filters have been applied)
         * @param {Object} [options] Options object
         * @param {String} [options.crossOrigin] crossOrigin value (one of "", "anonymous", "use-credentials")
         * @see https://developer.mozilla.org/en-US/docs/HTML/CORS_settings_attributes
         * @return {fabric.Image} thisArg
         * @chainable
         */
setSrc:function(t,e,i){return C.util.loadImage(t,(function(t,n){this.setElement(t,i),this._setWidthHeight(),e&&e(this,n)}),this,i&&i.crossOrigin),this},
/**
         * Returns string representation of an instance
         * @return {String} String representation of an instance
         */
toString:function(){return'#<fabric.Image: { src: "'+this.getSrc()+'" }>'},applyResizeFilters:function(){var t=this.resizeFilter,e=this.minimumScaleTrigger,i=this.getTotalObjectScaling(),n=i.scaleX,r=i.scaleY,o=this._filteredEl||this._originalElement;if(this.group&&this.set("dirty",!0),!t||n>e&&r>e)return this._element=o,this._filterScalingX=1,this._filterScalingY=1,this._lastScaleX=n,void(this._lastScaleY=r);C.filterBackend||(C.filterBackend=C.initFilterBackend());var s=C.util.createCanvasElement(),a=this._filteredEl?this.cacheKey+"_filtered":this.cacheKey,l=o.width,c=o.height;s.width=l,s.height=c,this._element=s,this._lastScaleX=t.scaleX=n,this._lastScaleY=t.scaleY=r,C.filterBackend.applyFilters([t],o,l,c,this._element,a),this._filterScalingX=s.width/this._originalElement.width,this._filterScalingY=s.height/this._originalElement.height},
/**
         * Applies filters assigned to this image (from "filters" array) or from filter param
         * @method applyFilters
         * @param {Array} filters to be applied
         * @param {Boolean} forResizing specify if the filter operation is a resize operation
         * @return {thisArg} return the fabric.Image object
         * @chainable
         */
applyFilters:function(t){if(t=(t=t||this.filters||[]).filter((function(t){return t&&!t.isNeutralState()})),this.set("dirty",!0),this.removeTexture(this.cacheKey+"_filtered"),0===t.length)return this._element=this._originalElement,this._filteredEl=null,this._filterScalingX=1,this._filterScalingY=1,this;var e=this._originalElement,i=e.naturalWidth||e.width,n=e.naturalHeight||e.height;if(this._element===this._originalElement){var r=C.util.createCanvasElement();r.width=i,r.height=n,this._element=r,this._filteredEl=r}else this._element=this._filteredEl,this._filteredEl.getContext("2d").clearRect(0,0,i,n),this._lastScaleX=1,this._lastScaleY=1;return C.filterBackend||(C.filterBackend=C.initFilterBackend()),C.filterBackend.applyFilters(t,this._originalElement,i,n,this._element,this.cacheKey),this._originalElement.width===this._element.width&&this._originalElement.height===this._element.height||(this._filterScalingX=this._element.width/this._originalElement.width,this._filterScalingY=this._element.height/this._originalElement.height),this},
/**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
_render:function(t){C.util.setImageSmoothing(t,this.imageSmoothing),!0!==this.isMoving&&this.resizeFilter&&this._needsResize()&&this.applyResizeFilters(),this._stroke(t),this._renderPaintInOrder(t)},
/**
         * Paint the cached copy of the object on the target context.
         * it will set the imageSmoothing for the draw operation
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
drawCacheOnCanvas:function(t){C.util.setImageSmoothing(t,this.imageSmoothing),C.Object.prototype.drawCacheOnCanvas.call(this,t)},
/**
         * Decide if the object should cache or not. Create its own cache level
         * needsItsOwnCache should be used when the object drawing method requires
         * a cache step. None of the fabric classes requires it.
         * Generally you do not cache objects in groups because the group outside is cached.
         * This is the special image version where we would like to avoid caching where possible.
         * Essentially images do not benefit from caching. They may require caching, and in that
         * case we do it. Also caching an image usually ends in a loss of details.
         * A full performance audit should be done.
         * @return {Boolean}
         */
shouldCache:function(){return this.needsItsOwnCache()},_renderFill:function(t){var e=this._element;if(e){var i=this._filterScalingX,n=this._filterScalingY,r=this.width,o=this.height,s=Math.min,a=Math.max,l=a(this.cropX,0),c=a(this.cropY,0),h=e.naturalWidth||e.width,u=e.naturalHeight||e.height,f=l*i,d=c*n,p=s(r*i,h-f),g=s(o*n,u-d),v=-r/2,m=-o/2,y=s(r,h/i-l),_=s(o,u/n-c);e&&t.drawImage(e,f,d,p,g,v,m,y,_)}},
/**
         * needed to check if image needs resize
         * @private
         */
_needsResize:function(){var t=this.getTotalObjectScaling();return t.scaleX!==this._lastScaleX||t.scaleY!==this._lastScaleY},
/**
         * @private
         */
_resetWidthHeight:function(){this.set(this.getOriginalSize())},
/**
         * The Image class's initialization method. This method is automatically
         * called by the constructor.
         * @private
         * @param {HTMLImageElement|String} element The element representing the image
         * @param {Object} [options] Options object
         */
_initElement:function(t,e){this.setElement(C.util.getById(t),e),C.util.addClass(this.getElement(),C.Image.CSS_CANVAS)},
/**
         * @private
         * @param {Object} [options] Options object
         */
_initConfig:function(t){t||(t={}),this.setOptions(t),this._setWidthHeight(t)},
/**
         * @private
         * @param {Array} filters to be initialized
         * @param {Function} callback Callback to invoke when all fabric.Image.filters instances are created
         */
_initFilters:function(t,e){t&&t.length?C.util.enlivenObjects(t,(function(t){e&&e(t)}),"fabric.Image.filters"):e&&e()},
/**
         * @private
         * Set the width and the height of the image object, using the element or the
         * options.
         * @param {Object} [options] Object with width/height properties
         */
_setWidthHeight:function(t){t||(t={});var e=this.getElement();this.width=t.width||e.naturalWidth||e.width||0,this.height=t.height||e.naturalHeight||e.height||0},
/**
         * Calculate offset for center and scale factor for the image in order to respect
         * the preserveAspectRatio attribute
         * @private
         * @return {Object}
         */
parsePreserveAspectRatioAttribute:function(){var t,e=C.util.parsePreserveAspectRatioAttribute(this.preserveAspectRatio||""),i=this._element.width,n=this._element.height,r=1,o=1,s=0,a=0,l=0,c=0,h=this.width,u=this.height,f={width:h,height:u};return!e||"none"===e.alignX&&"none"===e.alignY?(r=h/i,o=u/n):("meet"===e.meetOrSlice&&(t=(h-i*(r=o=C.util.findScaleToFit(this._element,f)))/2,"Min"===e.alignX&&(s=-t),"Max"===e.alignX&&(s=t),t=(u-n*o)/2,"Min"===e.alignY&&(a=-t),"Max"===e.alignY&&(a=t)),"slice"===e.meetOrSlice&&(t=i-h/(r=o=C.util.findScaleToCover(this._element,f)),"Mid"===e.alignX&&(l=t/2),"Max"===e.alignX&&(l=t),t=n-u/o,"Mid"===e.alignY&&(c=t/2),"Max"===e.alignY&&(c=t),i=h/r,n=u/o)),{width:i,height:n,scaleX:r,scaleY:o,offsetLeft:s,offsetTop:a,cropX:l,cropY:c}}}),C.Image.CSS_CANVAS="canvas-img",C.Image.prototype.getSvgSrc=C.Image.prototype.getSrc,C.Image.fromObject=function(t,e){var i=C.util.object.clone(t);C.util.loadImage(i.src,(function(t,n){n?e&&e(null,!0):C.Image.prototype._initFilters.call(i,i.filters,(function(n){i.filters=n||[],C.Image.prototype._initFilters.call(i,[i.resizeFilter],(function(n){i.resizeFilter=n[0],C.util.enlivenObjectEnlivables(i,i,(function(){var n=new C.Image(t,i);e(n,!1)}))}))}))}),null,i.crossOrigin)},C.Image.fromURL=function(t,e,i){C.util.loadImage(t,(function(t,n){e&&e(new C.Image(t,i),n)}),null,i&&i.crossOrigin)},C.Image.ATTRIBUTE_NAMES=C.SHARED_ATTRIBUTES.concat("x y width height preserveAspectRatio xlink:href crossOrigin image-rendering".split(" ")),C.Image.fromElement=function(t,i,n){var r=C.parseAttributes(t,C.Image.ATTRIBUTE_NAMES);C.Image.fromURL(r["xlink:href"],i,e(n?C.util.object.clone(n):{},r))})}(t),C.util.object.extend(C.Object.prototype,
/** @lends fabric.Object.prototype */
{
/**
       * @private
       * @return {Number} angle value
       */
_getAngleValueForStraighten:function(){var t=this.angle%360;return t>0?90*Math.round((t-1)/90):90*Math.round(t/90)},
/**
       * Straightens an object (rotating it from current angle to one of 0, 90, 180, 270, etc. depending on which is closer)
       * @return {fabric.Object} thisArg
       * @chainable
       */
straighten:function(){return this.rotate(this._getAngleValueForStraighten())},
/**
       * Same as {@link fabric.Object.prototype.straighten} but with animation
       * @param {Object} callbacks Object with callback functions
       * @param {Function} [callbacks.onComplete] Invoked on completion
       * @param {Function} [callbacks.onChange] Invoked on every step of animation
       * @return {fabric.Object} thisArg
       */
fxStraighten:function(t){var e=function(){},i=(t=t||{}).onComplete||e,n=t.onChange||e,r=this;return C.util.animate({target:this,startValue:this.get("angle"),endValue:this._getAngleValueForStraighten(),duration:this.FX_DURATION,onChange:function(t){r.rotate(t),n()},onComplete:function(){r.setCoords(),i()}})}}),C.util.object.extend(C.StaticCanvas.prototype,
/** @lends fabric.StaticCanvas.prototype */
{
/**
       * Straightens object, then rerenders canvas
       * @param {fabric.Object} object Object to straighten
       * @return {fabric.Canvas} thisArg
       * @chainable
       */
straightenObject:function(t){return t.straighten(),this.requestRenderAll(),this},
/**
       * Same as {@link fabric.Canvas.prototype.straightenObject}, but animated
       * @param {fabric.Object} object Object to straighten
       * @return {fabric.Canvas} thisArg
       */
fxStraightenObject:function(t){return t.fxStraighten({onChange:this.requestRenderAllBound})}}),function(){function t(t,e){var i="precision "+e+" float;\nvoid main(){}",n=t.createShader(t.FRAGMENT_SHADER);return t.shaderSource(n,i),t.compileShader(n),!!t.getShaderParameter(n,t.COMPILE_STATUS)}function e(t){t&&t.tileSize&&(this.tileSize=t.tileSize),this.setupGLContext(this.tileSize,this.tileSize),this.captureGPUInfo()}C.isWebglSupported=function(e){if(C.isLikelyNode)return!1;e=e||C.WebglFilterBackend.prototype.tileSize;var i=document.createElement("canvas"),n=i.getContext("webgl")||i.getContext("experimental-webgl"),r=!1;if(n){C.maxTextureSize=n.getParameter(n.MAX_TEXTURE_SIZE),r=C.maxTextureSize>=e;for(var o=["highp","mediump","lowp"],s=0;s<3;s++)if(t(n,o[s])){C.webGlPrecision=o[s];break}}return this.isSupported=r,r},C.WebglFilterBackend=e,e.prototype=/** @lends fabric.WebglFilterBackend.prototype */
{tileSize:2048,
/**
       * Experimental. This object is a sort of repository of help layers used to avoid
       * of recreating them during frequent filtering. If you are previewing a filter with
       * a slider you probably do not want to create help layers every filter step.
       * in this object there will be appended some canvases, created once, resized sometimes
       * cleared never. Clearing is left to the developer.
       **/
resources:{},
/**
       * Setup a WebGL context suitable for filtering, and bind any needed event handlers.
       */
setupGLContext:function(t,e){this.dispose(),this.createWebGLCanvas(t,e),this.aPosition=new Float32Array([0,0,0,1,1,0,1,1]),this.chooseFastestCopyGLTo2DMethod(t,e)},
/**
       * Pick a method to copy data from GL context to 2d canvas.  In some browsers using
       * putImageData is faster than drawImage for that specific operation.
       */
chooseFastestCopyGLTo2DMethod:function(t,e){var i,n=void 0!==window.performance;try{new ImageData(1,1),i=!0}catch(u){i=!1}var r="undefined"!=typeof ArrayBuffer,o="undefined"!=typeof Uint8ClampedArray;if(n&&i&&r&&o){var s=C.util.createCanvasElement(),a=new ArrayBuffer(t*e*4);if(C.forceGLPutImageData)return this.imageBuffer=a,void(this.copyGLTo2D=T);var l,c,h={imageBuffer:a,destinationWidth:t,destinationHeight:e,targetCanvas:s};s.width=t,s.height=e,l=window.performance.now(),w.call(h,this.gl,h),c=window.performance.now()-l,l=window.performance.now(),T.call(h,this.gl,h),c>window.performance.now()-l?(this.imageBuffer=a,this.copyGLTo2D=T):this.copyGLTo2D=w}},
/**
       * Create a canvas element and associated WebGL context and attaches them as
       * class properties to the GLFilterBackend class.
       */
createWebGLCanvas:function(t,e){var i=C.util.createCanvasElement();i.width=t,i.height=e;var n={alpha:!0,premultipliedAlpha:!1,depth:!1,stencil:!1,antialias:!1},r=i.getContext("webgl",n);r||(r=i.getContext("experimental-webgl",n)),r&&(r.clearColor(0,0,0,0),this.canvas=i,this.gl=r)},
/**
       * Attempts to apply the requested filters to the source provided, drawing the filtered output
       * to the provided target canvas.
       *
       * @param {Array} filters The filters to apply.
       * @param {HTMLImageElement|HTMLCanvasElement} source The source to be filtered.
       * @param {Number} width The width of the source input.
       * @param {Number} height The height of the source input.
       * @param {HTMLCanvasElement} targetCanvas The destination for filtered output to be drawn.
       * @param {String|undefined} cacheKey A key used to cache resources related to the source. If
       * omitted, caching will be skipped.
       */
applyFilters:function(t,e,i,n,r,o){var s,a=this.gl;o&&(s=this.getCachedTexture(o,e));var l={originalWidth:e.width||e.originalWidth,originalHeight:e.height||e.originalHeight,sourceWidth:i,sourceHeight:n,destinationWidth:i,destinationHeight:n,context:a,sourceTexture:this.createTexture(a,i,n,!s&&e),targetTexture:this.createTexture(a,i,n),originalTexture:s||this.createTexture(a,i,n,!s&&e),passes:t.length,webgl:!0,aPosition:this.aPosition,programCache:this.programCache,pass:0,filterBackend:this,targetCanvas:r},c=a.createFramebuffer();return a.bindFramebuffer(a.FRAMEBUFFER,c),t.forEach((function(t){t&&t.applyTo(l)})),function(t){var e=t.targetCanvas,i=e.width,n=e.height,r=t.destinationWidth,o=t.destinationHeight;i===r&&n===o||(e.width=r,e.height=o)}(l),this.copyGLTo2D(a,l),a.bindTexture(a.TEXTURE_2D,null),a.deleteTexture(l.sourceTexture),a.deleteTexture(l.targetTexture),a.deleteFramebuffer(c),r.getContext("2d").setTransform(1,0,0,1,0,0),l},
/**
       * Detach event listeners, remove references, and clean up caches.
       */
dispose:function(){this.canvas&&(this.canvas=null,this.gl=null),this.clearWebGLCaches()},
/**
       * Wipe out WebGL-related caches.
       */
clearWebGLCaches:function(){this.programCache={},this.textureCache={}},
/**
       * Create a WebGL texture object.
       *
       * Accepts specific dimensions to initialize the texture to or a source image.
       *
       * @param {WebGLRenderingContext} gl The GL context to use for creating the texture.
       * @param {Number} width The width to initialize the texture at.
       * @param {Number} height The height to initialize the texture.
       * @param {HTMLImageElement|HTMLCanvasElement} textureImageSource A source for the texture data.
       * @param {Number} filterType gl.NEAREST or gl.LINEAR usually, webgl numeri constants
       * @returns {WebGLTexture}
       */
createTexture:function(t,e,i,n,r){var o=t.createTexture();return t.bindTexture(t.TEXTURE_2D,o),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,r||t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,r||t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),n?t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,n):t.texImage2D(t.TEXTURE_2D,0,t.RGBA,e,i,0,t.RGBA,t.UNSIGNED_BYTE,null),o},
/**
       * Can be optionally used to get a texture from the cache array
       *
       * If an existing texture is not found, a new texture is created and cached.
       *
       * @param {String} uniqueId A cache key to use to find an existing texture.
       * @param {HTMLImageElement|HTMLCanvasElement} textureImageSource A source to use to create the
       * texture cache entry if one does not already exist.
       */
getCachedTexture:function(t,e){if(this.textureCache[t])return this.textureCache[t];var i=this.createTexture(this.gl,e.width,e.height,e);return this.textureCache[t]=i,i},
/**
       * Clear out cached resources related to a source image that has been
       * filtered previously.
       *
       * @param {String} cacheKey The cache key provided when the source image was filtered.
       */
evictCachesForKey:function(t){this.textureCache[t]&&(this.gl.deleteTexture(this.textureCache[t]),delete this.textureCache[t])},copyGLTo2D:w,
/**
       * Attempt to extract GPU information strings from a WebGL context.
       *
       * Useful information when debugging or blacklisting specific GPUs.
       *
       * @returns {Object} A GPU info object with renderer and vendor strings.
       */
captureGPUInfo:function(){if(this.gpuInfo)return this.gpuInfo;var t=this.gl,e={renderer:"",vendor:""};if(!t)return e;var i=t.getExtension("WEBGL_debug_renderer_info");if(i){var n=t.getParameter(i.UNMASKED_RENDERER_WEBGL),r=t.getParameter(i.UNMASKED_VENDOR_WEBGL);n&&(e.renderer=n.toLowerCase()),r&&(e.vendor=r.toLowerCase())}return this.gpuInfo=e,e}}}(),function(){var t=function(){};function e(){}C.Canvas2dFilterBackend=e,e.prototype=/** @lends fabric.Canvas2dFilterBackend.prototype */
{evictCachesForKey:t,dispose:t,clearWebGLCaches:t,
/**
       * Experimental. This object is a sort of repository of help layers used to avoid
       * of recreating them during frequent filtering. If you are previewing a filter with
       * a slider you probably do not want to create help layers every filter step.
       * in this object there will be appended some canvases, created once, resized sometimes
       * cleared never. Clearing is left to the developer.
       **/
resources:{},
/**
       * Apply a set of filters against a source image and draw the filtered output
       * to the provided destination canvas.
       *
       * @param {EnhancedFilter} filters The filter to apply.
       * @param {HTMLImageElement|HTMLCanvasElement} sourceElement The source to be filtered.
       * @param {Number} sourceWidth The width of the source input.
       * @param {Number} sourceHeight The height of the source input.
       * @param {HTMLCanvasElement} targetCanvas The destination for filtered output to be drawn.
       */
applyFilters:function(t,e,i,n,r){var o=r.getContext("2d");o.drawImage(e,0,0,i,n);var s={sourceWidth:i,sourceHeight:n,imageData:o.getImageData(0,0,i,n),originalEl:e,originalImageData:o.getImageData(0,0,i,n),canvasEl:r,ctx:o,filterBackend:this};return t.forEach((function(t){t.applyTo(s)})),s.imageData.width===i&&s.imageData.height===n||(r.width=s.imageData.width,r.height=s.imageData.height),o.putImageData(s.imageData,0,0),s}}}(),C.Image=C.Image||{},C.Image.filters=C.Image.filters||{},C.Image.filters.BaseFilter=C.util.createClass(
/** @lends fabric.Image.filters.BaseFilter.prototype */
{
/**
       * Filter type
       * @param {String} type
       * @default
       */
type:"BaseFilter",
/**
       * Array of attributes to send with buffers. do not modify
       * @private
       */
vertexSource:"attribute vec2 aPosition;\nvarying vec2 vTexCoord;\nvoid main() {\nvTexCoord = aPosition;\ngl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);\n}",fragmentSource:"precision highp float;\nvarying vec2 vTexCoord;\nuniform sampler2D uTexture;\nvoid main() {\ngl_FragColor = texture2D(uTexture, vTexCoord);\n}",
/**
       * Constructor
       * @param {Object} [options] Options object
       */
initialize:function(t){t&&this.setOptions(t)},
/**
       * Sets filter's properties from options
       * @param {Object} [options] Options object
       */
setOptions:function(t){for(var e in t)this[e]=t[e]},
/**
       * Compile this filter's shader program.
       *
       * @param {WebGLRenderingContext} gl The GL canvas context to use for shader compilation.
       * @param {String} fragmentSource fragmentShader source for compilation
       * @param {String} vertexSource vertexShader source for compilation
       */
createProgram:function(t,e,i){e=e||this.fragmentSource,i=i||this.vertexSource,"highp"!==C.webGlPrecision&&(e=e.replace(/precision highp float/g,"precision "+C.webGlPrecision+" float"));var n=t.createShader(t.VERTEX_SHADER);if(t.shaderSource(n,i),t.compileShader(n),!t.getShaderParameter(n,t.COMPILE_STATUS))throw new Error(
// eslint-disable-next-line prefer-template
"Vertex shader compile error for "+this.type+": "+t.getShaderInfoLog(n));var r=t.createShader(t.FRAGMENT_SHADER);if(t.shaderSource(r,e),t.compileShader(r),!t.getShaderParameter(r,t.COMPILE_STATUS))throw new Error(
// eslint-disable-next-line prefer-template
"Fragment shader compile error for "+this.type+": "+t.getShaderInfoLog(r));var o=t.createProgram();if(t.attachShader(o,n),t.attachShader(o,r),t.linkProgram(o),!t.getProgramParameter(o,t.LINK_STATUS))throw new Error(
// eslint-disable-next-line prefer-template
'Shader link error for "${this.type}" '+t.getProgramInfoLog(o));var s=this.getAttributeLocations(t,o),a=this.getUniformLocations(t,o)||{};return a.uStepW=t.getUniformLocation(o,"uStepW"),a.uStepH=t.getUniformLocation(o,"uStepH"),{program:o,attributeLocations:s,uniformLocations:a}},
/**
       * Return a map of attribute names to WebGLAttributeLocation objects.
       *
       * @param {WebGLRenderingContext} gl The canvas context used to compile the shader program.
       * @param {WebGLShaderProgram} program The shader program from which to take attribute locations.
       * @returns {Object} A map of attribute names to attribute locations.
       */
getAttributeLocations:function(t,e){return{aPosition:t.getAttribLocation(e,"aPosition")}},
/**
       * Return a map of uniform names to WebGLUniformLocation objects.
       *
       * Intended to be overridden by subclasses.
       *
       * @param {WebGLRenderingContext} gl The canvas context used to compile the shader program.
       * @param {WebGLShaderProgram} program The shader program from which to take uniform locations.
       * @returns {Object} A map of uniform names to uniform locations.
       */
getUniformLocations:function(){return{}},
/**
       * Send attribute data from this filter to its shader program on the GPU.
       *
       * @param {WebGLRenderingContext} gl The canvas context used to compile the shader program.
       * @param {Object} attributeLocations A map of shader attribute names to their locations.
       */
sendAttributeData:function(t,e,i){var n=e.aPosition,r=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,r),t.enableVertexAttribArray(n),t.vertexAttribPointer(n,2,t.FLOAT,!1,0,0),t.bufferData(t.ARRAY_BUFFER,i,t.STATIC_DRAW)},_setupFrameBuffer:function(t){var e,i,n=t.context;t.passes>1?(e=t.destinationWidth,i=t.destinationHeight,t.sourceWidth===e&&t.sourceHeight===i||(n.deleteTexture(t.targetTexture),t.targetTexture=t.filterBackend.createTexture(n,e,i)),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,t.targetTexture,0)):(n.bindFramebuffer(n.FRAMEBUFFER,null),n.finish())},_swapTextures:function(t){t.passes--,t.pass++;var e=t.targetTexture;t.targetTexture=t.sourceTexture,t.sourceTexture=e},
/**
       * Generic isNeutral implementation for one parameter based filters.
       * Used only in image applyFilters to discard filters that will not have an effect
       * on the image
       * Other filters may need their own version ( ColorMatrix, HueRotation, gamma, ComposedFilter )
       * @param {Object} options
       **/
isNeutralState:function(){var t=this.mainParameter,e=C.Image.filters[this.type].prototype;if(t){if(Array.isArray(e[t])){for(var i=e[t].length;i--;)if(this[t][i]!==e[t][i])return!1;return!0}return e[t]===this[t]}return!1},
/**
       * Apply this filter to the input image data provided.
       *
       * Determines whether to use WebGL or Canvas2D based on the options.webgl flag.
       *
       * @param {Object} options
       * @param {Number} options.passes The number of filters remaining to be executed
       * @param {Boolean} options.webgl Whether to use webgl to render the filter.
       * @param {WebGLTexture} options.sourceTexture The texture setup as the source to be filtered.
       * @param {WebGLTexture} options.targetTexture The texture where filtered output should be drawn.
       * @param {WebGLRenderingContext} options.context The GL context used for rendering.
       * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
       */
applyTo:function(t){t.webgl?(this._setupFrameBuffer(t),this.applyToWebGL(t),this._swapTextures(t)):this.applyTo2d(t)},
/**
       * Retrieves the cached shader.
       * @param {Object} options
       * @param {WebGLRenderingContext} options.context The GL context used for rendering.
       * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
       */
retrieveShader:function(t){return t.programCache.hasOwnProperty(this.type)||(t.programCache[this.type]=this.createProgram(t.context)),t.programCache[this.type]},
/**
       * Apply this filter using webgl.
       *
       * @param {Object} options
       * @param {Number} options.passes The number of filters remaining to be executed
       * @param {Boolean} options.webgl Whether to use webgl to render the filter.
       * @param {WebGLTexture} options.originalTexture The texture of the original input image.
       * @param {WebGLTexture} options.sourceTexture The texture setup as the source to be filtered.
       * @param {WebGLTexture} options.targetTexture The texture where filtered output should be drawn.
       * @param {WebGLRenderingContext} options.context The GL context used for rendering.
       * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
       */
applyToWebGL:function(t){var e=t.context,i=this.retrieveShader(t);0===t.pass&&t.originalTexture?e.bindTexture(e.TEXTURE_2D,t.originalTexture):e.bindTexture(e.TEXTURE_2D,t.sourceTexture),e.useProgram(i.program),this.sendAttributeData(e,i.attributeLocations,t.aPosition),e.uniform1f(i.uniformLocations.uStepW,1/t.sourceWidth),e.uniform1f(i.uniformLocations.uStepH,1/t.sourceHeight),this.sendUniformData(e,i.uniformLocations),e.viewport(0,0,t.destinationWidth,t.destinationHeight),e.drawArrays(e.TRIANGLE_STRIP,0,4)},bindAdditionalTexture:function(t,e,i){t.activeTexture(i),t.bindTexture(t.TEXTURE_2D,e),t.activeTexture(t.TEXTURE0)},unbindAdditionalTexture:function(t,e){t.activeTexture(e),t.bindTexture(t.TEXTURE_2D,null),t.activeTexture(t.TEXTURE0)},getMainParameter:function(){return this[this.mainParameter]},setMainParameter:function(t){this[this.mainParameter]=t},
/**
       * Send uniform data from this filter to its shader program on the GPU.
       *
       * Intended to be overridden by subclasses.
       *
       * @param {WebGLRenderingContext} gl The canvas context used to compile the shader program.
       * @param {Object} uniformLocations A map of shader uniform names to their locations.
       */
sendUniformData:function(){},
/**
       * If needed by a 2d filter, this functions can create an helper canvas to be used
       * remember that options.targetCanvas is available for use till end of chain.
       */
createHelpLayer:function(t){if(!t.helpLayer){var e=document.createElement("canvas");e.width=t.sourceWidth,e.height=t.sourceHeight,t.helpLayer=e}},
/**
       * Returns object representation of an instance
       * @return {Object} Object representation of an instance
       */
toObject:function(){var t={type:this.type},e=this.mainParameter;return e&&(t[e]=this[e]),t},
/**
       * Returns a JSON representation of an instance
       * @return {Object} JSON
       */
toJSON:function(){return this.toObject()}}),C.Image.filters.BaseFilter.fromObject=function(t,e){var i=new C.Image.filters[t.type](t);return e&&e(i),i},function(t){var e=t.fabric||(t.fabric={}),i=e.Image.filters,n=e.util.createClass;i.ColorMatrix=n(i.BaseFilter,
/** @lends fabric.Image.filters.ColorMatrix.prototype */
{
/**
         * Filter type
         * @param {String} type
         * @default
         */
type:"ColorMatrix",fragmentSource:"precision highp float;\nuniform sampler2D uTexture;\nvarying vec2 vTexCoord;\nuniform mat4 uColorMatrix;\nuniform vec4 uConstants;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\ncolor *= uColorMatrix;\ncolor += uConstants;\ngl_FragColor = color;\n}",
/**
         * Colormatrix for pixels.
         * array of 20 floats. Numbers in positions 4, 9, 14, 19 loose meaning
         * outside the -1, 1 range.
         * 0.0039215686 is the part of 1 that get translated to 1 in 2d
         * @param {Array} matrix array of 20 numbers.
         * @default
         */
matrix:[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],mainParameter:"matrix",
/**
         * Lock the colormatrix on the color part, skipping alpha, mainly for non webgl scenario
         * to save some calculation
         * @type Boolean
         * @default true
         */
colorsOnly:!0,
/**
         * Constructor
         * @param {Object} [options] Options object
         */
initialize:function(t){this.callSuper("initialize",t),this.matrix=this.matrix.slice(0)},
/**
         * Apply the ColorMatrix operation to a Uint8Array representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8Array to be filtered.
         */
applyTo2d:function(t){var e,i,n,r,o,s=t.imageData.data,a=s.length,l=this.matrix,c=this.colorsOnly;for(o=0;o<a;o+=4)e=s[o],i=s[o+1],n=s[o+2],c?(s[o]=e*l[0]+i*l[1]+n*l[2]+255*l[4],s[o+1]=e*l[5]+i*l[6]+n*l[7]+255*l[9],s[o+2]=e*l[10]+i*l[11]+n*l[12]+255*l[14]):(r=s[o+3],s[o]=e*l[0]+i*l[1]+n*l[2]+r*l[3]+255*l[4],s[o+1]=e*l[5]+i*l[6]+n*l[7]+r*l[8]+255*l[9],s[o+2]=e*l[10]+i*l[11]+n*l[12]+r*l[13]+255*l[14],s[o+3]=e*l[15]+i*l[16]+n*l[17]+r*l[18]+255*l[19])},
/**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
getUniformLocations:function(t,e){return{uColorMatrix:t.getUniformLocation(e,"uColorMatrix"),uConstants:t.getUniformLocation(e,"uConstants")}},
/**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
sendUniformData:function(t,e){var i=this.matrix,n=[i[0],i[1],i[2],i[3],i[5],i[6],i[7],i[8],i[10],i[11],i[12],i[13],i[15],i[16],i[17],i[18]],r=[i[4],i[9],i[14],i[19]];t.uniformMatrix4fv(e.uColorMatrix,!1,n),t.uniform4fv(e.uConstants,r)}}),e.Image.filters.ColorMatrix.fromObject=e.Image.filters.BaseFilter.fromObject}(t),function(t){var e=t.fabric||(t.fabric={}),i=e.Image.filters,n=e.util.createClass;i.Brightness=n(i.BaseFilter,
/** @lends fabric.Image.filters.Brightness.prototype */
{
/**
         * Filter type
         * @param {String} type
         * @default
         */
type:"Brightness",
/**
         * Fragment source for the brightness program
         */
fragmentSource:"precision highp float;\nuniform sampler2D uTexture;\nuniform float uBrightness;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\ncolor.rgb += uBrightness;\ngl_FragColor = color;\n}",
/**
         * Brightness value, from -1 to 1.
         * translated to -255 to 255 for 2d
         * 0.0039215686 is the part of 1 that get translated to 1 in 2d
         * @param {Number} brightness
         * @default
         */
brightness:0,
/**
         * Describe the property that is the filter parameter
         * @param {String} m
         * @default
         */
mainParameter:"brightness",
/**
        * Apply the Brightness operation to a Uint8ClampedArray representing the pixels of an image.
        *
        * @param {Object} options
        * @param {ImageData} options.imageData The Uint8ClampedArray to be filtered.
        */
applyTo2d:function(t){if(0!==this.brightness){var e,i=t.imageData.data,n=i.length,r=Math.round(255*this.brightness);for(e=0;e<n;e+=4)i[e]=i[e]+r,i[e+1]=i[e+1]+r,i[e+2]=i[e+2]+r}},
/**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
getUniformLocations:function(t,e){return{uBrightness:t.getUniformLocation(e,"uBrightness")}},
/**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
sendUniformData:function(t,e){t.uniform1f(e.uBrightness,this.brightness)}}),e.Image.filters.Brightness.fromObject=e.Image.filters.BaseFilter.fromObject}(t),function(t){var e=t.fabric||(t.fabric={}),i=e.util.object.extend,n=e.Image.filters,r=e.util.createClass;n.Convolute=r(n.BaseFilter,
/** @lends fabric.Image.filters.Convolute.prototype */
{
/**
         * Filter type
         * @param {String} type
         * @default
         */
type:"Convolute",
/*
         * Opaque value (true/false)
         */
opaque:!1,
/*
         * matrix for the filter, max 9x9
         */
matrix:[0,0,0,0,1,0,0,0,0],
/**
         * Fragment source for the brightness program
         */
fragmentSource:{Convolute_3_1:"precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[9];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 0);\nfor (float h = 0.0; h < 3.0; h+=1.0) {\nfor (float w = 0.0; w < 3.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 1), uStepH * (h - 1));\ncolor += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 3.0 + w)];\n}\n}\ngl_FragColor = color;\n}",Convolute_3_0:"precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[9];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 1);\nfor (float h = 0.0; h < 3.0; h+=1.0) {\nfor (float w = 0.0; w < 3.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 1.0), uStepH * (h - 1.0));\ncolor.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 3.0 + w)];\n}\n}\nfloat alpha = texture2D(uTexture, vTexCoord).a;\ngl_FragColor = color;\ngl_FragColor.a = alpha;\n}",Convolute_5_1:"precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[25];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 0);\nfor (float h = 0.0; h < 5.0; h+=1.0) {\nfor (float w = 0.0; w < 5.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));\ncolor += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 5.0 + w)];\n}\n}\ngl_FragColor = color;\n}",Convolute_5_0:"precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[25];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 1);\nfor (float h = 0.0; h < 5.0; h+=1.0) {\nfor (float w = 0.0; w < 5.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));\ncolor.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 5.0 + w)];\n}\n}\nfloat alpha = texture2D(uTexture, vTexCoord).a;\ngl_FragColor = color;\ngl_FragColor.a = alpha;\n}",Convolute_7_1:"precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[49];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 0);\nfor (float h = 0.0; h < 7.0; h+=1.0) {\nfor (float w = 0.0; w < 7.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));\ncolor += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 7.0 + w)];\n}\n}\ngl_FragColor = color;\n}",Convolute_7_0:"precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[49];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 1);\nfor (float h = 0.0; h < 7.0; h+=1.0) {\nfor (float w = 0.0; w < 7.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));\ncolor.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 7.0 + w)];\n}\n}\nfloat alpha = texture2D(uTexture, vTexCoord).a;\ngl_FragColor = color;\ngl_FragColor.a = alpha;\n}",Convolute_9_1:"precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[81];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 0);\nfor (float h = 0.0; h < 9.0; h+=1.0) {\nfor (float w = 0.0; w < 9.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));\ncolor += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 9.0 + w)];\n}\n}\ngl_FragColor = color;\n}",Convolute_9_0:"precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[81];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 1);\nfor (float h = 0.0; h < 9.0; h+=1.0) {\nfor (float w = 0.0; w < 9.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));\ncolor.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 9.0 + w)];\n}\n}\nfloat alpha = texture2D(uTexture, vTexCoord).a;\ngl_FragColor = color;\ngl_FragColor.a = alpha;\n}"},
/**
         * Constructor
         * @memberOf fabric.Image.filters.Convolute.prototype
         * @param {Object} [options] Options object
         * @param {Boolean} [options.opaque=false] Opaque value (true/false)
         * @param {Array} [options.matrix] Filter matrix
         */
/**
        * Retrieves the cached shader.
        * @param {Object} options
        * @param {WebGLRenderingContext} options.context The GL context used for rendering.
        * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
        */
retrieveShader:function(t){var e=Math.sqrt(this.matrix.length),i=this.type+"_"+e+"_"+(this.opaque?1:0),n=this.fragmentSource[i];return t.programCache.hasOwnProperty(i)||(t.programCache[i]=this.createProgram(t.context,n)),t.programCache[i]},
/**
         * Apply the Brightness operation to a Uint8ClampedArray representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8ClampedArray to be filtered.
         */
applyTo2d:function(t){var e,i,n,r,o,s,a,l,c,h,u,f,d,p=t.imageData,g=p.data,v=this.matrix,m=Math.round(Math.sqrt(v.length)),y=Math.floor(m/2),_=p.width,b=p.height,x=t.ctx.createImageData(_,b),C=x.data,S=this.opaque?1:0;for(u=0;u<b;u++)for(h=0;h<_;h++){for(o=4*(u*_+h),e=0,i=0,n=0,r=0,d=0;d<m;d++)for(f=0;f<m;f++)s=h+f-y,(a=u+d-y)<0||a>=b||s<0||s>=_||(l=4*(a*_+s),c=v[d*m+f],e+=g[l]*c,i+=g[l+1]*c,n+=g[l+2]*c,S||(r+=g[l+3]*c));C[o]=e,C[o+1]=i,C[o+2]=n,C[o+3]=S?g[o+3]:r}t.imageData=x},
/**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
getUniformLocations:function(t,e){return{uMatrix:t.getUniformLocation(e,"uMatrix"),uOpaque:t.getUniformLocation(e,"uOpaque"),uHalfSize:t.getUniformLocation(e,"uHalfSize"),uSize:t.getUniformLocation(e,"uSize")}},
/**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
sendUniformData:function(t,e){t.uniform1fv(e.uMatrix,this.matrix)},
/**
         * Returns object representation of an instance
         * @return {Object} Object representation of an instance
         */
toObject:function(){return i(this.callSuper("toObject"),{opaque:this.opaque,matrix:this.matrix})}}),e.Image.filters.Convolute.fromObject=e.Image.filters.BaseFilter.fromObject}(t),function(t){var e=t.fabric||(t.fabric={}),i=e.Image.filters,n=e.util.createClass;i.Grayscale=n(i.BaseFilter,
/** @lends fabric.Image.filters.Grayscale.prototype */
{
/**
         * Filter type
         * @param {String} type
         * @default
         */
type:"Grayscale",fragmentSource:{average:"precision highp float;\nuniform sampler2D uTexture;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nfloat average = (color.r + color.b + color.g) / 3.0;\ngl_FragColor = vec4(average, average, average, color.a);\n}",lightness:"precision highp float;\nuniform sampler2D uTexture;\nuniform int uMode;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 col = texture2D(uTexture, vTexCoord);\nfloat average = (max(max(col.r, col.g),col.b) + min(min(col.r, col.g),col.b)) / 2.0;\ngl_FragColor = vec4(average, average, average, col.a);\n}",luminosity:"precision highp float;\nuniform sampler2D uTexture;\nuniform int uMode;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 col = texture2D(uTexture, vTexCoord);\nfloat average = 0.21 * col.r + 0.72 * col.g + 0.07 * col.b;\ngl_FragColor = vec4(average, average, average, col.a);\n}"},
/**
         * Grayscale mode, between 'average', 'lightness', 'luminosity'
         * @param {String} type
         * @default
         */
mode:"average",mainParameter:"mode",
/**
         * Apply the Grayscale operation to a Uint8Array representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8Array to be filtered.
         */
applyTo2d:function(t){var e,i,n=t.imageData.data,r=n.length,o=this.mode;for(e=0;e<r;e+=4)"average"===o?i=(n[e]+n[e+1]+n[e+2])/3:"lightness"===o?i=(Math.min(n[e],n[e+1],n[e+2])+Math.max(n[e],n[e+1],n[e+2]))/2:"luminosity"===o&&(i=.21*n[e]+.72*n[e+1]+.07*n[e+2]),n[e]=i,n[e+1]=i,n[e+2]=i},
/**
         * Retrieves the cached shader.
         * @param {Object} options
         * @param {WebGLRenderingContext} options.context The GL context used for rendering.
         * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
         */
retrieveShader:function(t){var e=this.type+"_"+this.mode;if(!t.programCache.hasOwnProperty(e)){var i=this.fragmentSource[this.mode];t.programCache[e]=this.createProgram(t.context,i)}return t.programCache[e]},
/**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
getUniformLocations:function(t,e){return{uMode:t.getUniformLocation(e,"uMode")}},
/**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
sendUniformData:function(t,e){t.uniform1i(e.uMode,1)},
/**
         * Grayscale filter isNeutralState implementation
         * The filter is never neutral
         * on the image
         **/
isNeutralState:function(){return!1}}),e.Image.filters.Grayscale.fromObject=e.Image.filters.BaseFilter.fromObject}(t),function(t){var e=t.fabric||(t.fabric={}),i=e.Image.filters,n=e.util.createClass;i.Invert=n(i.BaseFilter,
/** @lends fabric.Image.filters.Invert.prototype */
{
/**
         * Filter type
         * @param {String} type
         * @default
         */
type:"Invert",fragmentSource:"precision highp float;\nuniform sampler2D uTexture;\nuniform int uInvert;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nif (uInvert == 1) {\ngl_FragColor = vec4(1.0 - color.r,1.0 -color.g,1.0 -color.b,color.a);\n} else {\ngl_FragColor = color;\n}\n}",
/**
         * Filter invert. if false, does nothing
         * @param {Boolean} invert
         * @default
         */
invert:!0,mainParameter:"invert",
/**
         * Apply the Invert operation to a Uint8Array representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8Array to be filtered.
         */
applyTo2d:function(t){var e,i=t.imageData.data,n=i.length;for(e=0;e<n;e+=4)i[e]=255-i[e],i[e+1]=255-i[e+1],i[e+2]=255-i[e+2]},
/**
         * Invert filter isNeutralState implementation
         * Used only in image applyFilters to discard filters that will not have an effect
         * on the image
         * @param {Object} options
         **/
isNeutralState:function(){return!this.invert},
/**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
getUniformLocations:function(t,e){return{uInvert:t.getUniformLocation(e,"uInvert")}},
/**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
sendUniformData:function(t,e){t.uniform1i(e.uInvert,this.invert)}}),e.Image.filters.Invert.fromObject=e.Image.filters.BaseFilter.fromObject}(t),function(t){var e=t.fabric||(t.fabric={}),i=e.util.object.extend,n=e.Image.filters,r=e.util.createClass;n.Noise=r(n.BaseFilter,
/** @lends fabric.Image.filters.Noise.prototype */
{
/**
         * Filter type
         * @param {String} type
         * @default
         */
type:"Noise",
/**
         * Fragment source for the noise program
         */
fragmentSource:"precision highp float;\nuniform sampler2D uTexture;\nuniform float uStepH;\nuniform float uNoise;\nuniform float uSeed;\nvarying vec2 vTexCoord;\nfloat rand(vec2 co, float seed, float vScale) {\nreturn fract(sin(dot(co.xy * vScale ,vec2(12.9898 , 78.233))) * 43758.5453 * (seed + 0.01) / 2.0);\n}\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\ncolor.rgb += (0.5 - rand(vTexCoord, uSeed, 0.1 / uStepH)) * uNoise;\ngl_FragColor = color;\n}",
/**
         * Describe the property that is the filter parameter
         * @param {String} m
         * @default
         */
mainParameter:"noise",
/**
         * Noise value, from
         * @param {Number} noise
         * @default
         */
noise:0,
/**
         * Apply the Brightness operation to a Uint8ClampedArray representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8ClampedArray to be filtered.
         */
applyTo2d:function(t){if(0!==this.noise){var e,i,n=t.imageData.data,r=n.length,o=this.noise;for(e=0,r=n.length;e<r;e+=4)i=(.5-Math.random())*o,n[e]+=i,n[e+1]+=i,n[e+2]+=i}},
/**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
getUniformLocations:function(t,e){return{uNoise:t.getUniformLocation(e,"uNoise"),uSeed:t.getUniformLocation(e,"uSeed")}},
/**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
sendUniformData:function(t,e){t.uniform1f(e.uNoise,this.noise/255),t.uniform1f(e.uSeed,Math.random())},
/**
         * Returns object representation of an instance
         * @return {Object} Object representation of an instance
         */
toObject:function(){return i(this.callSuper("toObject"),{noise:this.noise})}}),e.Image.filters.Noise.fromObject=e.Image.filters.BaseFilter.fromObject}(t),function(t){var e=t.fabric||(t.fabric={}),i=e.Image.filters,n=e.util.createClass;i.Pixelate=n(i.BaseFilter,
/** @lends fabric.Image.filters.Pixelate.prototype */
{
/**
         * Filter type
         * @param {String} type
         * @default
         */
type:"Pixelate",blocksize:4,mainParameter:"blocksize",
/**
         * Fragment source for the Pixelate program
         */
fragmentSource:"precision highp float;\nuniform sampler2D uTexture;\nuniform float uBlocksize;\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nfloat blockW = uBlocksize * uStepW;\nfloat blockH = uBlocksize * uStepW;\nint posX = int(vTexCoord.x / blockW);\nint posY = int(vTexCoord.y / blockH);\nfloat fposX = float(posX);\nfloat fposY = float(posY);\nvec2 squareCoords = vec2(fposX * blockW, fposY * blockH);\nvec4 color = texture2D(uTexture, squareCoords);\ngl_FragColor = color;\n}",
/**
         * Apply the Pixelate operation to a Uint8ClampedArray representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8ClampedArray to be filtered.
         */
applyTo2d:function(t){var e,i,n,r,o,s,a,l,c,h,u,f=t.imageData,d=f.data,p=f.height,g=f.width;for(i=0;i<p;i+=this.blocksize)for(n=0;n<g;n+=this.blocksize)for(r=d[e=4*i*g+4*n],o=d[e+1],s=d[e+2],a=d[e+3],h=Math.min(i+this.blocksize,p),u=Math.min(n+this.blocksize,g),l=i;l<h;l++)for(c=n;c<u;c++)d[e=4*l*g+4*c]=r,d[e+1]=o,d[e+2]=s,d[e+3]=a},
/**
         * Indicate when the filter is not gonna apply changes to the image
         **/
isNeutralState:function(){return 1===this.blocksize},
/**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
getUniformLocations:function(t,e){return{uBlocksize:t.getUniformLocation(e,"uBlocksize"),uStepW:t.getUniformLocation(e,"uStepW"),uStepH:t.getUniformLocation(e,"uStepH")}},
/**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
sendUniformData:function(t,e){t.uniform1f(e.uBlocksize,this.blocksize)}}),e.Image.filters.Pixelate.fromObject=e.Image.filters.BaseFilter.fromObject}(t),function(t){var e=t.fabric||(t.fabric={}),i=e.util.object.extend,n=e.Image.filters,r=e.util.createClass;n.RemoveColor=r(n.BaseFilter,
/** @lends fabric.Image.filters.RemoveColor.prototype */
{
/**
         * Filter type
         * @param {String} type
         * @default
         */
type:"RemoveColor",
/**
         * Color to remove, in any format understood by fabric.Color.
         * @param {String} type
         * @default
         */
color:"#FFFFFF",
/**
         * Fragment source for the brightness program
         */
fragmentSource:"precision highp float;\nuniform sampler2D uTexture;\nuniform vec4 uLow;\nuniform vec4 uHigh;\nvarying vec2 vTexCoord;\nvoid main() {\ngl_FragColor = texture2D(uTexture, vTexCoord);\nif(all(greaterThan(gl_FragColor.rgb,uLow.rgb)) && all(greaterThan(uHigh.rgb,gl_FragColor.rgb))) {\ngl_FragColor.a = 0.0;\n}\n}",
/**
         * distance to actual color, as value up or down from each r,g,b
         * between 0 and 1
         **/
distance:.02,
/**
         * For color to remove inside distance, use alpha channel for a smoother deletion
         * NOT IMPLEMENTED YET
         **/
useAlpha:!1,
/**
         * Constructor
         * @memberOf fabric.Image.filters.RemoveWhite.prototype
         * @param {Object} [options] Options object
         * @param {Number} [options.color=#RRGGBB] Threshold value
         * @param {Number} [options.distance=10] Distance value
         */
/**
         * Applies filter to canvas element
         * @param {Object} canvasEl Canvas element to apply filter to
         */
applyTo2d:function(t){var i,n,r,o,s=t.imageData.data,a=255*this.distance,l=new e.Color(this.color).getSource(),c=[l[0]-a,l[1]-a,l[2]-a],h=[l[0]+a,l[1]+a,l[2]+a];for(i=0;i<s.length;i+=4)n=s[i],r=s[i+1],o=s[i+2],n>c[0]&&r>c[1]&&o>c[2]&&n<h[0]&&r<h[1]&&o<h[2]&&(s[i+3]=0)},
/**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
getUniformLocations:function(t,e){return{uLow:t.getUniformLocation(e,"uLow"),uHigh:t.getUniformLocation(e,"uHigh")}},
/**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
sendUniformData:function(t,i){var n=new e.Color(this.color).getSource(),r=parseFloat(this.distance),o=[0+n[0]/255-r,0+n[1]/255-r,0+n[2]/255-r,1],s=[n[0]/255+r,n[1]/255+r,n[2]/255+r,1];t.uniform4fv(i.uLow,o),t.uniform4fv(i.uHigh,s)},
/**
         * Returns object representation of an instance
         * @return {Object} Object representation of an instance
         */
toObject:function(){return i(this.callSuper("toObject"),{color:this.color,distance:this.distance})}}),e.Image.filters.RemoveColor.fromObject=e.Image.filters.BaseFilter.fromObject}(t),function(t){var e=t.fabric||(t.fabric={}),i=e.Image.filters,n=e.util.createClass,r={Brownie:[.5997,.34553,-.27082,0,.186,-.0377,.86095,.15059,0,-.1449,.24113,-.07441,.44972,0,-.02965,0,0,0,1,0],Vintage:[.62793,.32021,-.03965,0,.03784,.02578,.64411,.03259,0,.02926,.0466,-.08512,.52416,0,.02023,0,0,0,1,0],Kodachrome:[1.12855,-.39673,-.03992,0,.24991,-.16404,1.08352,-.05498,0,.09698,-.16786,-.56034,1.60148,0,.13972,0,0,0,1,0],Technicolor:[1.91252,-.85453,-.09155,0,.04624,-.30878,1.76589,-.10601,0,-.27589,-.2311,-.75018,1.84759,0,.12137,0,0,0,1,0],Polaroid:[1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0],Sepia:[.393,.769,.189,0,0,.349,.686,.168,0,0,.272,.534,.131,0,0,0,0,0,1,0],BlackWhite:[1.5,1.5,1.5,0,-1,1.5,1.5,1.5,0,-1,1.5,1.5,1.5,0,-1,0,0,0,1,0]};for(var o in r)i[o]=n(i.ColorMatrix,
/** @lends fabric.Image.filters.Sepia.prototype */
{
/**
           * Filter type
           * @param {String} type
           * @default
           */
type:o,
/**
           * Colormatrix for the effect
           * array of 20 floats. Numbers in positions 4, 9, 14, 19 loose meaning
           * outside the -1, 1 range.
           * @param {Array} matrix array of 20 numbers.
           * @default
           */
matrix:r[o],
/**
           * Lock the matrix export for this kind of static, parameter less filters.
           */
mainParameter:!1,
/**
           * Lock the colormatrix on the color part, skipping alpha
           */
colorsOnly:!0}),e.Image.filters[o].fromObject=e.Image.filters.BaseFilter.fromObject}(t),function(t){var e=t.fabric,i=e.Image.filters,n=e.util.createClass;i.BlendColor=n(i.BaseFilter,
/** @lends fabric.Image.filters.Blend.prototype */
{type:"BlendColor",
/**
         * Color to make the blend operation with. default to a reddish color since black or white
         * gives always strong result.
         * @type String
         * @default
         **/
color:"#F95C63",
/**
         * Blend mode for the filter: one of multiply, add, diff, screen, subtract,
         * darken, lighten, overlay, exclusion, tint.
         * @type String
         * @default
         **/
mode:"multiply",
/**
         * alpha value. represent the strength of the blend color operation.
         * @type Number
         * @default
         **/
alpha:1,
/**
         * Fragment source for the Multiply program
         */
fragmentSource:{multiply:"gl_FragColor.rgb *= uColor.rgb;\n",screen:"gl_FragColor.rgb = 1.0 - (1.0 - gl_FragColor.rgb) * (1.0 - uColor.rgb);\n",add:"gl_FragColor.rgb += uColor.rgb;\n",diff:"gl_FragColor.rgb = abs(gl_FragColor.rgb - uColor.rgb);\n",subtract:"gl_FragColor.rgb -= uColor.rgb;\n",lighten:"gl_FragColor.rgb = max(gl_FragColor.rgb, uColor.rgb);\n",darken:"gl_FragColor.rgb = min(gl_FragColor.rgb, uColor.rgb);\n",exclusion:"gl_FragColor.rgb += uColor.rgb - 2.0 * (uColor.rgb * gl_FragColor.rgb);\n",overlay:"if (uColor.r < 0.5) {\ngl_FragColor.r *= 2.0 * uColor.r;\n} else {\ngl_FragColor.r = 1.0 - 2.0 * (1.0 - gl_FragColor.r) * (1.0 - uColor.r);\n}\nif (uColor.g < 0.5) {\ngl_FragColor.g *= 2.0 * uColor.g;\n} else {\ngl_FragColor.g = 1.0 - 2.0 * (1.0 - gl_FragColor.g) * (1.0 - uColor.g);\n}\nif (uColor.b < 0.5) {\ngl_FragColor.b *= 2.0 * uColor.b;\n} else {\ngl_FragColor.b = 1.0 - 2.0 * (1.0 - gl_FragColor.b) * (1.0 - uColor.b);\n}\n",tint:"gl_FragColor.rgb *= (1.0 - uColor.a);\ngl_FragColor.rgb += uColor.rgb;\n"},
/**
         * build the fragment source for the filters, joining the common part with
         * the specific one.
         * @param {String} mode the mode of the filter, a key of this.fragmentSource
         * @return {String} the source to be compiled
         * @private
         */
buildSource:function(t){return"precision highp float;\nuniform sampler2D uTexture;\nuniform vec4 uColor;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\ngl_FragColor = color;\nif (color.a > 0.0) {\n"+this.fragmentSource[t]+"}\n}"},
/**
         * Retrieves the cached shader.
         * @param {Object} options
         * @param {WebGLRenderingContext} options.context The GL context used for rendering.
         * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
         */
retrieveShader:function(t){var e,i=this.type+"_"+this.mode;return t.programCache.hasOwnProperty(i)||(e=this.buildSource(this.mode),t.programCache[i]=this.createProgram(t.context,e)),t.programCache[i]},
/**
         * Apply the Blend operation to a Uint8ClampedArray representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8ClampedArray to be filtered.
         */
applyTo2d:function(t){var i,n,r,o,s,a,l,c=t.imageData.data,h=c.length,u=1-this.alpha;i=(l=new e.Color(this.color).getSource())[0]*this.alpha,n=l[1]*this.alpha,r=l[2]*this.alpha;for(var f=0;f<h;f+=4)switch(o=c[f],s=c[f+1],a=c[f+2],this.mode){case"multiply":c[f]=o*i/255,c[f+1]=s*n/255,c[f+2]=a*r/255;break;case"screen":c[f]=255-(255-o)*(255-i)/255,c[f+1]=255-(255-s)*(255-n)/255,c[f+2]=255-(255-a)*(255-r)/255;break;case"add":c[f]=o+i,c[f+1]=s+n,c[f+2]=a+r;break;case"diff":case"difference":c[f]=Math.abs(o-i),c[f+1]=Math.abs(s-n),c[f+2]=Math.abs(a-r);break;case"subtract":c[f]=o-i,c[f+1]=s-n,c[f+2]=a-r;break;case"darken":c[f]=Math.min(o,i),c[f+1]=Math.min(s,n),c[f+2]=Math.min(a,r);break;case"lighten":c[f]=Math.max(o,i),c[f+1]=Math.max(s,n),c[f+2]=Math.max(a,r);break;case"overlay":c[f]=i<128?2*o*i/255:255-2*(255-o)*(255-i)/255,c[f+1]=n<128?2*s*n/255:255-2*(255-s)*(255-n)/255,c[f+2]=r<128?2*a*r/255:255-2*(255-a)*(255-r)/255;break;case"exclusion":c[f]=i+o-2*i*o/255,c[f+1]=n+s-2*n*s/255,c[f+2]=r+a-2*r*a/255;break;case"tint":c[f]=i+o*u,c[f+1]=n+s*u,c[f+2]=r+a*u}},
/**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
getUniformLocations:function(t,e){return{uColor:t.getUniformLocation(e,"uColor")}},
/**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
sendUniformData:function(t,i){var n=new e.Color(this.color).getSource();n[0]=this.alpha*n[0]/255,n[1]=this.alpha*n[1]/255,n[2]=this.alpha*n[2]/255,n[3]=this.alpha,t.uniform4fv(i.uColor,n)},
/**
         * Returns object representation of an instance
         * @return {Object} Object representation of an instance
         */
toObject:function(){return{type:this.type,color:this.color,mode:this.mode,alpha:this.alpha}}}),e.Image.filters.BlendColor.fromObject=e.Image.filters.BaseFilter.fromObject}(t),function(t){var e=t.fabric,i=e.Image.filters,n=e.util.createClass;i.BlendImage=n(i.BaseFilter,
/** @lends fabric.Image.filters.BlendImage.prototype */
{type:"BlendImage",
/**
         * Color to make the blend operation with. default to a reddish color since black or white
         * gives always strong result.
         **/
image:null,
/**
         * Blend mode for the filter (one of "multiply", "mask")
         * @type String
         * @default
         **/
mode:"multiply",
/**
         * alpha value. represent the strength of the blend image operation.
         * not implemented.
         **/
alpha:1,vertexSource:"attribute vec2 aPosition;\nvarying vec2 vTexCoord;\nvarying vec2 vTexCoord2;\nuniform mat3 uTransformMatrix;\nvoid main() {\nvTexCoord = aPosition;\nvTexCoord2 = (uTransformMatrix * vec3(aPosition, 1.0)).xy;\ngl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);\n}",
/**
         * Fragment source for the Multiply program
         */
fragmentSource:{multiply:"precision highp float;\nuniform sampler2D uTexture;\nuniform sampler2D uImage;\nuniform vec4 uColor;\nvarying vec2 vTexCoord;\nvarying vec2 vTexCoord2;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nvec4 color2 = texture2D(uImage, vTexCoord2);\ncolor.rgba *= color2.rgba;\ngl_FragColor = color;\n}",mask:"precision highp float;\nuniform sampler2D uTexture;\nuniform sampler2D uImage;\nuniform vec4 uColor;\nvarying vec2 vTexCoord;\nvarying vec2 vTexCoord2;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nvec4 color2 = texture2D(uImage, vTexCoord2);\ncolor.a = color2.a;\ngl_FragColor = color;\n}"},
/**
         * Retrieves the cached shader.
         * @param {Object} options
         * @param {WebGLRenderingContext} options.context The GL context used for rendering.
         * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
         */
retrieveShader:function(t){var e=this.type+"_"+this.mode,i=this.fragmentSource[this.mode];return t.programCache.hasOwnProperty(e)||(t.programCache[e]=this.createProgram(t.context,i)),t.programCache[e]},applyToWebGL:function(t){var e=t.context,i=this.createTexture(t.filterBackend,this.image);this.bindAdditionalTexture(e,i,e.TEXTURE1),this.callSuper("applyToWebGL",t),this.unbindAdditionalTexture(e,e.TEXTURE1)},createTexture:function(t,e){return t.getCachedTexture(e.cacheKey,e._element)},
/**
         * Calculate a transformMatrix to adapt the image to blend over
         * @param {Object} options
         * @param {WebGLRenderingContext} options.context The GL context used for rendering.
         * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
         */
calculateMatrix:function(){var t=this.image,e=t._element.width,i=t._element.height;return[1/t.scaleX,0,0,0,1/t.scaleY,0,-t.left/e,-t.top/i,1]},
/**
         * Apply the Blend operation to a Uint8ClampedArray representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8ClampedArray to be filtered.
         */
applyTo2d:function(t){var i,n,r,o,s,a,l,c,h,u,f,d=t.imageData,p=t.filterBackend.resources,g=d.data,v=g.length,m=d.width,y=d.height,_=this.image;p.blendImage||(p.blendImage=e.util.createCanvasElement()),u=(h=p.blendImage).getContext("2d"),h.width!==m||h.height!==y?(h.width=m,h.height=y):u.clearRect(0,0,m,y),u.setTransform(_.scaleX,0,0,_.scaleY,_.left,_.top),u.drawImage(_._element,0,0,m,y),f=u.getImageData(0,0,m,y).data;for(var b=0;b<v;b+=4)switch(s=g[b],a=g[b+1],l=g[b+2],c=g[b+3],i=f[b],n=f[b+1],r=f[b+2],o=f[b+3],this.mode){case"multiply":g[b]=s*i/255,g[b+1]=a*n/255,g[b+2]=l*r/255,g[b+3]=c*o/255;break;case"mask":g[b+3]=o}},
/**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
getUniformLocations:function(t,e){return{uTransformMatrix:t.getUniformLocation(e,"uTransformMatrix"),uImage:t.getUniformLocation(e,"uImage")}},
/**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
sendUniformData:function(t,e){var i=this.calculateMatrix();t.uniform1i(e.uImage,1),t.uniformMatrix3fv(e.uTransformMatrix,!1,i)},
/**
         * Returns object representation of an instance
         * @return {Object} Object representation of an instance
         */
toObject:function(){return{type:this.type,image:this.image&&this.image.toObject(),mode:this.mode,alpha:this.alpha}}}),e.Image.filters.BlendImage.fromObject=function(t,i){e.Image.fromObject(t.image,(function(n){var r=e.util.object.clone(t);r.image=n,i(new e.Image.filters.BlendImage(r))}))}}(t),function(t){var e=t.fabric||(t.fabric={}),i=Math.pow,n=Math.floor,r=Math.sqrt,o=Math.abs,s=Math.round,a=Math.sin,l=Math.ceil,c=e.Image.filters,h=e.util.createClass;c.Resize=h(c.BaseFilter,
/** @lends fabric.Image.filters.Resize.prototype */
{
/**
         * Filter type
         * @param {String} type
         * @default
         */
type:"Resize",
/**
         * Resize type
         * for webgl resizeType is just lanczos, for canvas2d can be:
         * bilinear, hermite, sliceHack, lanczos.
         * @param {String} resizeType
         * @default
         */
resizeType:"hermite",
/**
         * Scale factor for resizing, x axis
         * @param {Number} scaleX
         * @default
         */
scaleX:1,
/**
         * Scale factor for resizing, y axis
         * @param {Number} scaleY
         * @default
         */
scaleY:1,
/**
         * LanczosLobes parameter for lanczos filter, valid for resizeType lanczos
         * @param {Number} lanczosLobes
         * @default
         */
lanczosLobes:3,
/**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
getUniformLocations:function(t,e){return{uDelta:t.getUniformLocation(e,"uDelta"),uTaps:t.getUniformLocation(e,"uTaps")}},
/**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
sendUniformData:function(t,e){t.uniform2fv(e.uDelta,this.horizontal?[1/this.width,0]:[0,1/this.height]),t.uniform1fv(e.uTaps,this.taps)},
/**
         * Retrieves the cached shader.
         * @param {Object} options
         * @param {WebGLRenderingContext} options.context The GL context used for rendering.
         * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
         */
retrieveShader:function(t){var e=this.getFilterWindow(),i=this.type+"_"+e;if(!t.programCache.hasOwnProperty(i)){var n=this.generateShader(e);t.programCache[i]=this.createProgram(t.context,n)}return t.programCache[i]},getFilterWindow:function(){var t=this.tempScale;return Math.ceil(this.lanczosLobes/t)},getTaps:function(){for(var t=this.lanczosCreate(this.lanczosLobes),e=this.tempScale,i=this.getFilterWindow(),n=new Array(i),r=1;r<=i;r++)n[r-1]=t(r*e);return n},
/**
         * Generate vertex and shader sources from the necessary steps numbers
         * @param {Number} filterWindow
         */
generateShader:function(t){for(var e=new Array(t),i=this.fragmentSourceTOP,n=1;n<=t;n++)e[n-1]=n+".0 * uDelta";return i+="uniform float uTaps["+t+"];\n",i+="void main() {\n",i+="  vec4 color = texture2D(uTexture, vTexCoord);\n",i+="  float sum = 1.0;\n",e.forEach((function(t,e){i+="  color += texture2D(uTexture, vTexCoord + "+t+") * uTaps["+e+"];\n",i+="  color += texture2D(uTexture, vTexCoord - "+t+") * uTaps["+e+"];\n",i+="  sum += 2.0 * uTaps["+e+"];\n"})),i+="  gl_FragColor = color / sum;\n",i+="}"},fragmentSourceTOP:"precision highp float;\nuniform sampler2D uTexture;\nuniform vec2 uDelta;\nvarying vec2 vTexCoord;\n",
/**
         * Apply the resize filter to the image
         * Determines whether to use WebGL or Canvas2D based on the options.webgl flag.
         *
         * @param {Object} options
         * @param {Number} options.passes The number of filters remaining to be executed
         * @param {Boolean} options.webgl Whether to use webgl to render the filter.
         * @param {WebGLTexture} options.sourceTexture The texture setup as the source to be filtered.
         * @param {WebGLTexture} options.targetTexture The texture where filtered output should be drawn.
         * @param {WebGLRenderingContext} options.context The GL context used for rendering.
         * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
         */
applyTo:function(t){t.webgl?(t.passes++,this.width=t.sourceWidth,this.horizontal=!0,this.dW=Math.round(this.width*this.scaleX),this.dH=t.sourceHeight,this.tempScale=this.dW/this.width,this.taps=this.getTaps(),t.destinationWidth=this.dW,this._setupFrameBuffer(t),this.applyToWebGL(t),this._swapTextures(t),t.sourceWidth=t.destinationWidth,this.height=t.sourceHeight,this.horizontal=!1,this.dH=Math.round(this.height*this.scaleY),this.tempScale=this.dH/this.height,this.taps=this.getTaps(),t.destinationHeight=this.dH,this._setupFrameBuffer(t),this.applyToWebGL(t),this._swapTextures(t),t.sourceHeight=t.destinationHeight):this.applyTo2d(t)},isNeutralState:function(){return 1===this.scaleX&&1===this.scaleY},lanczosCreate:function(t){return function(e){if(e>=t||e<=-t)return 0;if(e<1.1920929e-7&&e>-1.1920929e-7)return 1;var i=(e*=Math.PI)/t;return a(e)/e*a(i)/i}},
/**
         * Applies filter to canvas element
         * @memberOf fabric.Image.filters.Resize.prototype
         * @param {Object} canvasEl Canvas element to apply filter to
         * @param {Number} scaleX
         * @param {Number} scaleY
         */
applyTo2d:function(t){var e=t.imageData,i=this.scaleX,n=this.scaleY;this.rcpScaleX=1/i,this.rcpScaleY=1/n;var r,o=e.width,a=e.height,l=s(o*i),c=s(a*n);"sliceHack"===this.resizeType?r=this.sliceByTwo(t,o,a,l,c):"hermite"===this.resizeType?r=this.hermiteFastResize(t,o,a,l,c):"bilinear"===this.resizeType?r=this.bilinearFiltering(t,o,a,l,c):"lanczos"===this.resizeType&&(r=this.lanczosResize(t,o,a,l,c)),t.imageData=r},
/**
         * Filter sliceByTwo
         * @param {Object} canvasEl Canvas element to apply filter to
         * @param {Number} oW Original Width
         * @param {Number} oH Original Height
         * @param {Number} dW Destination Width
         * @param {Number} dH Destination Height
         * @returns {ImageData}
         */
sliceByTwo:function(t,i,r,o,s){var a,l,c=t.imageData,h=.5,u=!1,f=!1,d=i*h,p=r*h,g=e.filterBackend.resources,v=0,m=0,y=i,_=0;for(g.sliceByTwo||(g.sliceByTwo=document.createElement("canvas")),((a=g.sliceByTwo).width<1.5*i||a.height<r)&&(a.width=1.5*i,a.height=r),(l=a.getContext("2d")).clearRect(0,0,1.5*i,r),l.putImageData(c,0,0),o=n(o),s=n(s);!u||!f;)i=d,r=p,o<n(d*h)?d=n(d*h):(d=o,u=!0),s<n(p*h)?p=n(p*h):(p=s,f=!0),l.drawImage(a,v,m,i,r,y,_,d,p),v=y,m=_,_+=p;return l.getImageData(v,m,o,s)},
/**
         * Filter lanczosResize
         * @param {Object} canvasEl Canvas element to apply filter to
         * @param {Number} oW Original Width
         * @param {Number} oH Original Height
         * @param {Number} dW Destination Width
         * @param {Number} dH Destination Height
         * @returns {ImageData}
         */
lanczosResize:function(t,e,s,a,c){var h=t.imageData.data,u=t.ctx.createImageData(a,c),f=u.data,d=this.lanczosCreate(this.lanczosLobes),p=this.rcpScaleX,g=this.rcpScaleY,v=2/this.rcpScaleX,m=2/this.rcpScaleY,y=l(p*this.lanczosLobes/2),_=l(g*this.lanczosLobes/2),b={},x={},C={};return function t(l){var S,w,T,O,k,E,P,M,A,j,D;for(x.x=(l+.5)*p,C.x=n(x.x),S=0;S<c;S++){for(x.y=(S+.5)*g,C.y=n(x.y),k=0,E=0,P=0,M=0,A=0,w=C.x-y;w<=C.x+y;w++)if(!(w<0||w>=e)){j=n(1e3*o(w-x.x)),b[j]||(b[j]={});for(var F=C.y-_;F<=C.y+_;F++)F<0||F>=s||(D=n(1e3*o(F-x.y)),b[j][D]||(b[j][D]=d(r(i(j*v,2)+i(D*m,2))/1e3)),(T=b[j][D])>0&&(k+=T,E+=T*h[O=4*(F*e+w)],P+=T*h[O+1],M+=T*h[O+2],A+=T*h[O+3]))}f[O=4*(S*a+l)]=E/k,f[O+1]=P/k,f[O+2]=M/k,f[O+3]=A/k}return++l<a?t(l):u}(0)},
/**
         * bilinearFiltering
         * @param {Object} canvasEl Canvas element to apply filter to
         * @param {Number} oW Original Width
         * @param {Number} oH Original Height
         * @param {Number} dW Destination Width
         * @param {Number} dH Destination Height
         * @returns {ImageData}
         */
bilinearFiltering:function(t,e,i,r,o){var s,a,l,c,h,u,f,d,p,g=0,v=this.rcpScaleX,m=this.rcpScaleY,y=4*(e-1),_=t.imageData.data,b=t.ctx.createImageData(r,o),x=b.data;for(l=0;l<o;l++)for(c=0;c<r;c++)for(h=v*c-(s=n(v*c)),u=m*l-(a=n(m*l)),p=4*(a*e+s),f=0;f<4;f++)d=_[p+f]*(1-h)*(1-u)+_[p+4+f]*h*(1-u)+_[p+y+f]*u*(1-h)+_[p+y+4+f]*h*u,x[g++]=d;return b},
/**
         * hermiteFastResize
         * @param {Object} canvasEl Canvas element to apply filter to
         * @param {Number} oW Original Width
         * @param {Number} oH Original Height
         * @param {Number} dW Destination Width
         * @param {Number} dH Destination Height
         * @returns {ImageData}
         */
hermiteFastResize:function(t,e,i,s,a){for(var c=this.rcpScaleX,h=this.rcpScaleY,u=l(c/2),f=l(h/2),d=t.imageData.data,p=t.ctx.createImageData(s,a),g=p.data,v=0;v<a;v++)for(var m=0;m<s;m++){for(var y=4*(m+v*s),_=0,b=0,x=0,C=0,S=0,w=0,T=0,O=(v+.5)*h,k=n(v*h);k<(v+1)*h;k++)for(var E=o(O-(k+.5))/f,P=(m+.5)*c,M=E*E,A=n(m*c);A<(m+1)*c;A++){var j=o(P-(A+.5))/u,D=r(M+j*j);D>1&&D<-1||(_=2*D*D*D-3*D*D+1)>0&&(T+=_*d[(j=4*(A+k*e))+3],x+=_,d[j+3]<255&&(_=_*d[j+3]/250),C+=_*d[j],S+=_*d[j+1],w+=_*d[j+2],b+=_)}g[y]=C/b,g[y+1]=S/b,g[y+2]=w/b,g[y+3]=T/x}return p},
/**
         * Returns object representation of an instance
         * @return {Object} Object representation of an instance
         */
toObject:function(){return{type:this.type,scaleX:this.scaleX,scaleY:this.scaleY,resizeType:this.resizeType,lanczosLobes:this.lanczosLobes}}}),e.Image.filters.Resize.fromObject=e.Image.filters.BaseFilter.fromObject}(t),function(t){var e=t.fabric||(t.fabric={}),i=e.Image.filters,n=e.util.createClass;i.Contrast=n(i.BaseFilter,
/** @lends fabric.Image.filters.Contrast.prototype */
{
/**
         * Filter type
         * @param {String} type
         * @default
         */
type:"Contrast",fragmentSource:"precision highp float;\nuniform sampler2D uTexture;\nuniform float uContrast;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nfloat contrastF = 1.015 * (uContrast + 1.0) / (1.0 * (1.015 - uContrast));\ncolor.rgb = contrastF * (color.rgb - 0.5) + 0.5;\ngl_FragColor = color;\n}",
/**
         * contrast value, range from -1 to 1.
         * @param {Number} contrast
         * @default 0
         */
contrast:0,mainParameter:"contrast",
/**
         * Constructor
         * @memberOf fabric.Image.filters.Contrast.prototype
         * @param {Object} [options] Options object
         * @param {Number} [options.contrast=0] Value to contrast the image up (-1...1)
         */
/**
          * Apply the Contrast operation to a Uint8Array representing the pixels of an image.
          *
          * @param {Object} options
          * @param {ImageData} options.imageData The Uint8Array to be filtered.
          */
applyTo2d:function(t){if(0!==this.contrast){var e,i=t.imageData.data,n=i.length,r=Math.floor(255*this.contrast),o=259*(r+255)/(255*(259-r));for(e=0;e<n;e+=4)i[e]=o*(i[e]-128)+128,i[e+1]=o*(i[e+1]-128)+128,i[e+2]=o*(i[e+2]-128)+128}},
/**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
getUniformLocations:function(t,e){return{uContrast:t.getUniformLocation(e,"uContrast")}},
/**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
sendUniformData:function(t,e){t.uniform1f(e.uContrast,this.contrast)}}),e.Image.filters.Contrast.fromObject=e.Image.filters.BaseFilter.fromObject}(t),function(t){var e=t.fabric||(t.fabric={}),i=e.Image.filters,n=e.util.createClass;i.Saturation=n(i.BaseFilter,
/** @lends fabric.Image.filters.Saturation.prototype */
{
/**
         * Filter type
         * @param {String} type
         * @default
         */
type:"Saturation",fragmentSource:"precision highp float;\nuniform sampler2D uTexture;\nuniform float uSaturation;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nfloat rgMax = max(color.r, color.g);\nfloat rgbMax = max(rgMax, color.b);\ncolor.r += rgbMax != color.r ? (rgbMax - color.r) * uSaturation : 0.00;\ncolor.g += rgbMax != color.g ? (rgbMax - color.g) * uSaturation : 0.00;\ncolor.b += rgbMax != color.b ? (rgbMax - color.b) * uSaturation : 0.00;\ngl_FragColor = color;\n}",
/**
         * Saturation value, from -1 to 1.
         * Increases/decreases the color saturation.
         * A value of 0 has no effect.
         * 
         * @param {Number} saturation
         * @default
         */
saturation:0,mainParameter:"saturation",
/**
         * Constructor
         * @memberOf fabric.Image.filters.Saturate.prototype
         * @param {Object} [options] Options object
         * @param {Number} [options.saturate=0] Value to saturate the image (-1...1)
         */
/**
         * Apply the Saturation operation to a Uint8ClampedArray representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8ClampedArray to be filtered.
         */
applyTo2d:function(t){if(0!==this.saturation){var e,i,n=t.imageData.data,r=n.length,o=-this.saturation;for(e=0;e<r;e+=4)i=Math.max(n[e],n[e+1],n[e+2]),n[e]+=i!==n[e]?(i-n[e])*o:0,n[e+1]+=i!==n[e+1]?(i-n[e+1])*o:0,n[e+2]+=i!==n[e+2]?(i-n[e+2])*o:0}},
/**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
getUniformLocations:function(t,e){return{uSaturation:t.getUniformLocation(e,"uSaturation")}},
/**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
sendUniformData:function(t,e){t.uniform1f(e.uSaturation,-this.saturation)}}),e.Image.filters.Saturation.fromObject=e.Image.filters.BaseFilter.fromObject}(t),function(t){var e=t.fabric||(t.fabric={}),i=e.Image.filters,n=e.util.createClass;i.Vibrance=n(i.BaseFilter,
/** @lends fabric.Image.filters.Vibrance.prototype */
{
/**
         * Filter type
         * @param {String} type
         * @default
         */
type:"Vibrance",fragmentSource:"precision highp float;\nuniform sampler2D uTexture;\nuniform float uVibrance;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nfloat max = max(color.r, max(color.g, color.b));\nfloat avg = (color.r + color.g + color.b) / 3.0;\nfloat amt = (abs(max - avg) * 2.0) * uVibrance;\ncolor.r += max != color.r ? (max - color.r) * amt : 0.00;\ncolor.g += max != color.g ? (max - color.g) * amt : 0.00;\ncolor.b += max != color.b ? (max - color.b) * amt : 0.00;\ngl_FragColor = color;\n}",
/**
         * Vibrance value, from -1 to 1.
         * Increases/decreases the saturation of more muted colors with less effect on saturated colors.
         * A value of 0 has no effect.
         * 
         * @param {Number} vibrance
         * @default
         */
vibrance:0,mainParameter:"vibrance",
/**
         * Constructor
         * @memberOf fabric.Image.filters.Vibrance.prototype
         * @param {Object} [options] Options object
         * @param {Number} [options.vibrance=0] Vibrance value for the image (between -1 and 1)
         */
/**
         * Apply the Vibrance operation to a Uint8ClampedArray representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8ClampedArray to be filtered.
         */
applyTo2d:function(t){if(0!==this.vibrance){var e,i,n,r,o=t.imageData.data,s=o.length,a=-this.vibrance;for(e=0;e<s;e+=4)i=Math.max(o[e],o[e+1],o[e+2]),n=(o[e]+o[e+1]+o[e+2])/3,r=2*Math.abs(i-n)/255*a,o[e]+=i!==o[e]?(i-o[e])*r:0,o[e+1]+=i!==o[e+1]?(i-o[e+1])*r:0,o[e+2]+=i!==o[e+2]?(i-o[e+2])*r:0}},
/**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
getUniformLocations:function(t,e){return{uVibrance:t.getUniformLocation(e,"uVibrance")}},
/**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
sendUniformData:function(t,e){t.uniform1f(e.uVibrance,-this.vibrance)}}),e.Image.filters.Vibrance.fromObject=e.Image.filters.BaseFilter.fromObject}(t),function(t){var e=t.fabric||(t.fabric={}),i=e.Image.filters,n=e.util.createClass;i.Blur=n(i.BaseFilter,
/** @lends fabric.Image.filters.Blur.prototype */
{type:"Blur",
/*
        'gl_FragColor = vec4(0.0);',
        'gl_FragColor += texture2D(texture, vTexCoord + -7 * uDelta)*0.0044299121055113265;',
        'gl_FragColor += texture2D(texture, vTexCoord + -6 * uDelta)*0.00895781211794;',
        'gl_FragColor += texture2D(texture, vTexCoord + -5 * uDelta)*0.0215963866053;',
        'gl_FragColor += texture2D(texture, vTexCoord + -4 * uDelta)*0.0443683338718;',
        'gl_FragColor += texture2D(texture, vTexCoord + -3 * uDelta)*0.0776744219933;',
        'gl_FragColor += texture2D(texture, vTexCoord + -2 * uDelta)*0.115876621105;',
        'gl_FragColor += texture2D(texture, vTexCoord + -1 * uDelta)*0.147308056121;',
        'gl_FragColor += texture2D(texture, vTexCoord              )*0.159576912161;',
        'gl_FragColor += texture2D(texture, vTexCoord + 1 * uDelta)*0.147308056121;',
        'gl_FragColor += texture2D(texture, vTexCoord + 2 * uDelta)*0.115876621105;',
        'gl_FragColor += texture2D(texture, vTexCoord + 3 * uDelta)*0.0776744219933;',
        'gl_FragColor += texture2D(texture, vTexCoord + 4 * uDelta)*0.0443683338718;',
        'gl_FragColor += texture2D(texture, vTexCoord + 5 * uDelta)*0.0215963866053;',
        'gl_FragColor += texture2D(texture, vTexCoord + 6 * uDelta)*0.00895781211794;',
        'gl_FragColor += texture2D(texture, vTexCoord + 7 * uDelta)*0.0044299121055113265;',
        */
/* eslint-disable max-len */
fragmentSource:"precision highp float;\nuniform sampler2D uTexture;\nuniform vec2 uDelta;\nvarying vec2 vTexCoord;\nconst float nSamples = 15.0;\nvec3 v3offset = vec3(12.9898, 78.233, 151.7182);\nfloat random(vec3 scale) {\nreturn fract(sin(dot(gl_FragCoord.xyz, scale)) * 43758.5453);\n}\nvoid main() {\nvec4 color = vec4(0.0);\nfloat total = 0.0;\nfloat offset = random(v3offset);\nfor (float t = -nSamples; t <= nSamples; t++) {\nfloat percent = (t + offset - 0.5) / nSamples;\nfloat weight = 1.0 - abs(percent);\ncolor += texture2D(uTexture, vTexCoord + uDelta * percent) * weight;\ntotal += weight;\n}\ngl_FragColor = color / total;\n}",
/* eslint-enable max-len */
/**
         * blur value, in percentage of image dimensions.
         * specific to keep the image blur constant at different resolutions
         * range between 0 and 1.
         * @type Number
         * @default
         */
blur:0,mainParameter:"blur",applyTo:function(t){t.webgl?(this.aspectRatio=t.sourceWidth/t.sourceHeight,t.passes++,this._setupFrameBuffer(t),this.horizontal=!0,this.applyToWebGL(t),this._swapTextures(t),this._setupFrameBuffer(t),this.horizontal=!1,this.applyToWebGL(t),this._swapTextures(t)):this.applyTo2d(t)},applyTo2d:function(t){t.imageData=this.simpleBlur(t)},simpleBlur:function(t){var i,n,r=t.filterBackend.resources,o=t.imageData.width,s=t.imageData.height;r.blurLayer1||(r.blurLayer1=e.util.createCanvasElement(),r.blurLayer2=e.util.createCanvasElement()),i=r.blurLayer1,n=r.blurLayer2,i.width===o&&i.height===s||(n.width=i.width=o,n.height=i.height=s);var a,l,c,h,u=i.getContext("2d"),f=n.getContext("2d"),d=15,p=.06*this.blur*.5;for(u.putImageData(t.imageData,0,0),f.clearRect(0,0,o,s),h=-15;h<=d;h++)c=p*(l=h/d)*o+(a=(Math.random()-.5)/4),f.globalAlpha=1-Math.abs(l),f.drawImage(i,c,a),u.drawImage(n,0,0),f.globalAlpha=1,f.clearRect(0,0,n.width,n.height);for(h=-15;h<=d;h++)c=p*(l=h/d)*s+(a=(Math.random()-.5)/4),f.globalAlpha=1-Math.abs(l),f.drawImage(i,a,c),u.drawImage(n,0,0),f.globalAlpha=1,f.clearRect(0,0,n.width,n.height);t.ctx.drawImage(i,0,0);var g=t.ctx.getImageData(0,0,i.width,i.height);return u.globalAlpha=1,u.clearRect(0,0,i.width,i.height),g},
/**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
getUniformLocations:function(t,e){return{delta:t.getUniformLocation(e,"uDelta")}},
/**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
sendUniformData:function(t,e){var i=this.chooseRightDelta();t.uniform2fv(e.delta,i)},
/**
         * choose right value of image percentage to blur with
         * @returns {Array} a numeric array with delta values
         */
chooseRightDelta:function(){var t,e=1,i=[0,0];return this.horizontal?this.aspectRatio>1&&(e=1/this.aspectRatio):this.aspectRatio<1&&(e=this.aspectRatio),t=e*this.blur*.12,this.horizontal?i[0]=t:i[1]=t,i}}),i.Blur.fromObject=e.Image.filters.BaseFilter.fromObject}(t),function(t){var e=t.fabric||(t.fabric={}),i=e.Image.filters,n=e.util.createClass;i.Gamma=n(i.BaseFilter,
/** @lends fabric.Image.filters.Gamma.prototype */
{
/**
         * Filter type
         * @param {String} type
         * @default
         */
type:"Gamma",fragmentSource:"precision highp float;\nuniform sampler2D uTexture;\nuniform vec3 uGamma;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nvec3 correction = (1.0 / uGamma);\ncolor.r = pow(color.r, correction.r);\ncolor.g = pow(color.g, correction.g);\ncolor.b = pow(color.b, correction.b);\ngl_FragColor = color;\ngl_FragColor.rgb *= color.a;\n}",
/**
         * Gamma array value, from 0.01 to 2.2.
         * @param {Array} gamma
         * @default
         */
gamma:[1,1,1],
/**
         * Describe the property that is the filter parameter
         * @param {String} m
         * @default
         */
mainParameter:"gamma",
/**
         * Constructor
         * @param {Object} [options] Options object
         */
initialize:function(t){this.gamma=[1,1,1],i.BaseFilter.prototype.initialize.call(this,t)},
/**
         * Apply the Gamma operation to a Uint8Array representing the pixels of an image.
         *
         * @param {Object} options
         * @param {ImageData} options.imageData The Uint8Array to be filtered.
         */
applyTo2d:function(t){var e,i=t.imageData.data,n=this.gamma,r=i.length,o=1/n[0],s=1/n[1],a=1/n[2];for(this.rVals||(this.rVals=new Uint8Array(256),this.gVals=new Uint8Array(256),this.bVals=new Uint8Array(256)),e=0,r=256;e<r;e++)this.rVals[e]=255*Math.pow(e/255,o),this.gVals[e]=255*Math.pow(e/255,s),this.bVals[e]=255*Math.pow(e/255,a);for(e=0,r=i.length;e<r;e+=4)i[e]=this.rVals[i[e]],i[e+1]=this.gVals[i[e+1]],i[e+2]=this.bVals[i[e+2]]},
/**
         * Return WebGL uniform locations for this filter's shader.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {WebGLShaderProgram} program This filter's compiled shader program.
         */
getUniformLocations:function(t,e){return{uGamma:t.getUniformLocation(e,"uGamma")}},
/**
         * Send data from this filter to its shader program's uniforms.
         *
         * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
         * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
         */
sendUniformData:function(t,e){t.uniform3fv(e.uGamma,this.gamma)}}),e.Image.filters.Gamma.fromObject=e.Image.filters.BaseFilter.fromObject}(t),function(t){var e=t.fabric||(t.fabric={}),i=e.Image.filters,n=e.util.createClass;i.Composed=n(i.BaseFilter,
/** @lends fabric.Image.filters.Composed.prototype */
{type:"Composed",
/**
         * A non sparse array of filters to apply
         */
subFilters:[],
/**
         * Constructor
         * @param {Object} [options] Options object
         */
initialize:function(t){this.callSuper("initialize",t),this.subFilters=this.subFilters.slice(0)},
/**
         * Apply this container's filters to the input image provided.
         *
         * @param {Object} options
         * @param {Number} options.passes The number of filters remaining to be applied.
         */
applyTo:function(t){t.passes+=this.subFilters.length-1,this.subFilters.forEach((function(e){e.applyTo(t)}))},
/**
         * Serialize this filter into JSON.
         *
         * @returns {Object} A JSON representation of this filter.
         */
toObject:function(){return e.util.object.extend(this.callSuper("toObject"),{subFilters:this.subFilters.map((function(t){return t.toObject()}))})},isNeutralState:function(){return!this.subFilters.some((function(t){return!t.isNeutralState()}))}}),e.Image.filters.Composed.fromObject=function(t,i){var n=(t.subFilters||[]).map((function(t){return new e.Image.filters[t.type](t)})),r=new e.Image.filters.Composed({subFilters:n});return i&&i(r),r}}(t),function(t){var e=t.fabric||(t.fabric={}),i=e.Image.filters,n=e.util.createClass;i.HueRotation=n(i.ColorMatrix,
/** @lends fabric.Image.filters.HueRotation.prototype */
{
/**
         * Filter type
         * @param {String} type
         * @default
         */
type:"HueRotation",
/**
         * HueRotation value, from -1 to 1.
         * the unit is radians
         * @param {Number} myParameter
         * @default
         */
rotation:0,
/**
         * Describe the property that is the filter parameter
         * @param {String} m
         * @default
         */
mainParameter:"rotation",calculateMatrix:function(){var t=this.rotation*Math.PI,i=e.util.cos(t),n=e.util.sin(t),r=1/3,o=Math.sqrt(r)*n,s=1-i;this.matrix=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],this.matrix[0]=i+s/3,this.matrix[1]=r*s-o,this.matrix[2]=r*s+o,this.matrix[5]=r*s+o,this.matrix[6]=i+r*s,this.matrix[7]=r*s-o,this.matrix[10]=r*s-o,this.matrix[11]=r*s+o,this.matrix[12]=i+r*s},
/**
         * HueRotation isNeutralState implementation
         * Used only in image applyFilters to discard filters that will not have an effect
         * on the image
         * @param {Object} options
         **/
isNeutralState:function(t){return this.calculateMatrix(),i.BaseFilter.prototype.isNeutralState.call(this,t)},
/**
         * Apply this filter to the input image data provided.
         *
         * Determines whether to use WebGL or Canvas2D based on the options.webgl flag.
         *
         * @param {Object} options
         * @param {Number} options.passes The number of filters remaining to be executed
         * @param {Boolean} options.webgl Whether to use webgl to render the filter.
         * @param {WebGLTexture} options.sourceTexture The texture setup as the source to be filtered.
         * @param {WebGLTexture} options.targetTexture The texture where filtered output should be drawn.
         * @param {WebGLRenderingContext} options.context The GL context used for rendering.
         * @param {Object} options.programCache A map of compiled shader programs, keyed by filter type.
         */
applyTo:function(t){this.calculateMatrix(),i.BaseFilter.prototype.applyTo.call(this,t)}}),e.Image.filters.HueRotation.fromObject=e.Image.filters.BaseFilter.fromObject}(t),function(t){var e=t.fabric||(t.fabric={}),i=e.util.object.clone;if(e.Text)e.warn("fabric.Text is already defined");else{var n="fontFamily fontWeight fontSize text underline overline linethrough textAlign fontStyle lineHeight textBackgroundColor charSpacing styles direction path pathStartOffset pathSide pathAlign".split(" ");e.Text=e.util.createClass(e.Object,
/** @lends fabric.Text.prototype */
{
/**
         * Properties which when set cause object to change dimensions
         * @type Array
         * @private
         */
_dimensionAffectingProps:["fontSize","fontWeight","fontFamily","fontStyle","lineHeight","text","charSpacing","textAlign","styles","path","pathStartOffset","pathSide","pathAlign"],
/**
         * @private
         */
_reNewline:/\r?\n/,
/**
         * Use this regular expression to filter for whitespaces that is not a new line.
         * Mostly used when text is 'justify' aligned.
         * @private
         */
_reSpacesAndTabs:/[ \t\r]/g,
/**
         * Use this regular expression to filter for whitespace that is not a new line.
         * Mostly used when text is 'justify' aligned.
         * @private
         */
_reSpaceAndTab:/[ \t\r]/,
/**
         * Use this regular expression to filter consecutive groups of non spaces.
         * Mostly used when text is 'justify' aligned.
         * @private
         */
_reWords:/\S+/g,
/**
         * Type of an object
         * @type String
         * @default
         */
type:"text",
/**
         * Font size (in pixels)
         * @type Number
         * @default
         */
fontSize:40,
/**
         * Font weight (e.g. bold, normal, 400, 600, 800)
         * @type {(Number|String)}
         * @default
         */
fontWeight:"normal",
/**
         * Font family
         * @type String
         * @default
         */
fontFamily:"Times New Roman",
/**
         * Text decoration underline.
         * @type Boolean
         * @default
         */
underline:!1,
/**
         * Text decoration overline.
         * @type Boolean
         * @default
         */
overline:!1,
/**
         * Text decoration linethrough.
         * @type Boolean
         * @default
         */
linethrough:!1,
/**
         * Text alignment. Possible values: "left", "center", "right", "justify",
         * "justify-left", "justify-center" or "justify-right".
         * @type String
         * @default
         */
textAlign:"left",
/**
         * Font style . Possible values: "", "normal", "italic" or "oblique".
         * @type String
         * @default
         */
fontStyle:"normal",
/**
         * Line height
         * @type Number
         * @default
         */
lineHeight:1.16,
/**
         * Superscript schema object (minimum overlap)
         * @type {Object}
         * @default
         */
superscript:{size:.6,
// fontSize factor
baseline:-.35},
/**
         * Subscript schema object (minimum overlap)
         * @type {Object}
         * @default
         */
subscript:{size:.6,
// fontSize factor
baseline:.11},
/**
         * Background color of text lines
         * @type String
         * @default
         */
textBackgroundColor:"",
/**
         * List of properties to consider when checking if
         * state of an object is changed ({@link fabric.Object#hasStateChanged})
         * as well as for history (undo/redo) purposes
         * @type Array
         */
stateProperties:e.Object.prototype.stateProperties.concat(n),
/**
         * List of properties to consider when checking if cache needs refresh
         * @type Array
         */
cacheProperties:e.Object.prototype.cacheProperties.concat(n),
/**
         * When defined, an object is rendered via stroke and this property specifies its color.
         * <b>Backwards incompatibility note:</b> This property was named "strokeStyle" until v1.1.6
         * @type String
         * @default
         */
stroke:null,
/**
         * Shadow object representing shadow of this shape.
         * <b>Backwards incompatibility note:</b> This property was named "textShadow" (String) until v1.2.11
         * @type fabric.Shadow
         * @default
         */
shadow:null,
/**
         * fabric.Path that the text should follow.
         * since 4.6.0 the path will be drawn automatically.
         * if you want to make the path visible, give it a stroke and strokeWidth or fill value
         * if you want it to be hidden, assign visible = false to the path.
         * This feature is in BETA, and SVG import/export is not yet supported.
         * @type fabric.Path
         * @example
         * var textPath = new fabric.Text('Text on a path', {
         *     top: 150,
         *     left: 150,
         *     textAlign: 'center',
         *     charSpacing: -50,
         *     path: new fabric.Path('M 0 0 C 50 -100 150 -100 200 0', {
         *         strokeWidth: 1,
         *         visible: false
         *     }),
         *     pathSide: 'left',
         *     pathStartOffset: 0
         * });
         * @default
         */
path:null,
/**
         * Offset amount for text path starting position
         * Only used when text has a path
         * @type Number
         * @default
         */
pathStartOffset:0,
/**
         * Which side of the path the text should be drawn on.
         * Only used when text has a path
         * @type {String} 'left|right'
         * @default
         */
pathSide:"left",
/**
         * How text is aligned to the path. This property determines
         * the perpendicular position of each character relative to the path.
         * (one of "baseline", "center", "ascender", "descender")
         * This feature is in BETA, and its behavior may change
         * @type String
         * @default
         */
pathAlign:"baseline",
/**
         * @private
         */
_fontSizeFraction:.222,
/**
         * @private
         */
offsets:{underline:.1,linethrough:-.315,overline:-.88},
/**
         * Text Line proportion to font Size (in pixels)
         * @type Number
         * @default
         */
_fontSizeMult:1.13,
/**
         * additional space between characters
         * expressed in thousands of em unit
         * @type Number
         * @default
         */
charSpacing:0,
/**
         * Object containing character styles - top-level properties -> line numbers,
         * 2nd-level properties - character numbers
         * @type Object
         * @default
         */
styles:null,
/**
         * Reference to a context to measure text char or couple of chars
         * the cacheContext of the canvas will be used or a freshly created one if the object is not on canvas
         * once created it will be referenced on fabric._measuringContext to avoid creating a canvas for every
         * text object created.
         * @type {CanvasRenderingContext2D}
         * @default
         */
_measuringContext:null,
/**
         * Baseline shift, styles only, keep at 0 for the main text object
         * @type {Number}
         * @default
         */
deltaY:0,
/**
         * WARNING: EXPERIMENTAL. NOT SUPPORTED YET
         * determine the direction of the text.
         * This has to be set manually together with textAlign and originX for proper
         * experience.
         * some interesting link for the future
         * https://www.w3.org/International/questions/qa-bidi-unicode-controls
         * @since 4.5.0
         * @type {String} 'ltr|rtl'
         * @default
         */
direction:"ltr",
/**
         * Array of properties that define a style unit (of 'styles').
         * @type {Array}
         * @default
         */
_styleProperties:["stroke","strokeWidth","fill","fontFamily","fontSize","fontWeight","fontStyle","underline","overline","linethrough","deltaY","textBackgroundColor"],
/**
         * contains characters bounding boxes
         */
__charBounds:[],
/**
         * use this size when measuring text. To avoid IE11 rounding errors
         * @type {Number}
         * @default
         * @readonly
         * @private
         */
CACHE_FONT_SIZE:400,
/**
         * contains the min text width to avoid getting 0
         * @type {Number}
         * @default
         */
MIN_TEXT_WIDTH:2,
/**
         * Constructor
         * @param {String} text Text string
         * @param {Object} [options] Options object
         * @return {fabric.Text} thisArg
         */
initialize:function(t,e){this.styles=e&&e.styles||{},this.text=t,this.__skipDimension=!0,this.callSuper("initialize",e),this.path&&this.setPathInfo(),this.__skipDimension=!1,this.initDimensions(),this.setCoords(),this.setupState({propertySet:"_dimensionAffectingProps"})},
/**
         * If text has a path, it will add the extra information needed
         * for path and text calculations
         * @return {fabric.Text} thisArg
         */
setPathInfo:function(){var t=this.path;t&&(t.segmentsInfo=e.util.getPathSegmentsInfo(t.path))},
/**
         * Return a context for measurement of text string.
         * if created it gets stored for reuse
         * this is for internal use, please do not use it
         * @private
         * @param {String} text Text string
         * @param {Object} [options] Options object
         * @return {fabric.Text} thisArg
         */
getMeasuringContext:function(){return e._measuringContext||(e._measuringContext=this.canvas&&this.canvas.contextCache||e.util.createCanvasElement().getContext("2d")),e._measuringContext},
/**
         * @private
         * Divides text into lines of text and lines of graphemes.
         */
_splitText:function(){var t=this._splitTextIntoLines(this.text);return this.textLines=t.lines,this._textLines=t.graphemeLines,this._unwrappedTextLines=t._unwrappedLines,this._text=t.graphemeText,t},
/**
         * Initialize or update text dimensions.
         * Updates this.width and this.height with the proper values.
         * Does not return dimensions.
         */
initDimensions:function(){this.__skipDimension||(this._splitText(),this._clearCache(),this.path?(this.width=this.path.width,this.height=this.path.height):(this.width=this.calcTextWidth()||this.cursorWidth||this.MIN_TEXT_WIDTH,this.height=this.calcTextHeight()),-1!==this.textAlign.indexOf("justify")&&this.enlargeSpaces(),this.saveState({propertySet:"_dimensionAffectingProps"}))},
/**
         * Enlarge space boxes and shift the others
         */
enlargeSpaces:function(){for(var t,e,i,n,r,o,s,a=0,l=this._textLines.length;a<l;a++)if(("justify"===this.textAlign||a!==l-1&&!this.isEndOfWrapping(a))&&(n=0,r=this._textLines[a],(e=this.getLineWidth(a))<this.width&&(s=this.textLines[a].match(this._reSpacesAndTabs)))){i=s.length,t=(this.width-e)/i;for(var c=0,h=r.length;c<=h;c++)o=this.__charBounds[a][c],this._reSpaceAndTab.test(r[c])?(o.width+=t,o.kernedWidth+=t,o.left+=n,n+=t):o.left+=n}},
/**
         * Detect if the text line is ended with an hard break
         * text and itext do not have wrapping, return false
         * @return {Boolean}
         */
isEndOfWrapping:function(t){return t===this._textLines.length-1},
/**
         * Detect if a line has a linebreak and so we need to account for it when moving
         * and counting style.
         * It return always for text and Itext.
         * @return Number
         */
missingNewlineOffset:function(){return 1},
/**
         * Returns string representation of an instance
         * @return {String} String representation of text object
         */
toString:function(){return"#<fabric.Text ("+this.complexity()+'): { "text": "'+this.text+'", "fontFamily": "'+this.fontFamily+'" }>'},
/**
         * Return the dimension and the zoom level needed to create a cache canvas
         * big enough to host the object to be cached.
         * @private
         * @param {Object} dim.x width of object to be cached
         * @param {Object} dim.y height of object to be cached
         * @return {Object}.width width of canvas
         * @return {Object}.height height of canvas
         * @return {Object}.zoomX zoomX zoom value to unscale the canvas before drawing cache
         * @return {Object}.zoomY zoomY zoom value to unscale the canvas before drawing cache
         */
_getCacheCanvasDimensions:function(){var t=this.callSuper("_getCacheCanvasDimensions"),e=this.fontSize;return t.width+=e*t.zoomX,t.height+=e*t.zoomY,t},
/**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
_render:function(t){var e=this.path;e&&!e.isNotVisible()&&e._render(t),this._setTextStyles(t),this._renderTextLinesBackground(t),this._renderTextDecoration(t,"underline"),this._renderText(t),this._renderTextDecoration(t,"overline"),this._renderTextDecoration(t,"linethrough")},
/**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
_renderText:function(t){"stroke"===this.paintFirst?(this._renderTextStroke(t),this._renderTextFill(t)):(this._renderTextFill(t),this._renderTextStroke(t))},
/**
         * Set the font parameter of the context with the object properties or with charStyle
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {Object} [charStyle] object with font style properties
         * @param {String} [charStyle.fontFamily] Font Family
         * @param {Number} [charStyle.fontSize] Font size in pixels. ( without px suffix )
         * @param {String} [charStyle.fontWeight] Font weight
         * @param {String} [charStyle.fontStyle] Font style (italic|normal)
         */
_setTextStyles:function(t,e,i){if(t.textBaseline="alphabetical",this.path)switch(this.pathAlign){case"center":t.textBaseline="middle";break;case"ascender":t.textBaseline="top";break;case"descender":t.textBaseline="bottom"}t.font=this._getFontDeclaration(e,i)},
/**
         * calculate and return the text Width measuring each line.
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @return {Number} Maximum width of fabric.Text object
         */
calcTextWidth:function(){for(var t=this.getLineWidth(0),e=1,i=this._textLines.length;e<i;e++){var n=this.getLineWidth(e);n>t&&(t=n)}return t},
/**
         * @private
         * @param {String} method Method name ("fillText" or "strokeText")
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {String} line Text to render
         * @param {Number} left Left position of text
         * @param {Number} top Top position of text
         * @param {Number} lineIndex Index of a line in a text
         */
_renderTextLine:function(t,e,i,n,r,o){this._renderChars(t,e,i,n,r,o)},
/**
         * Renders the text background for lines, taking care of style
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
_renderTextLinesBackground:function(t){if(this.textBackgroundColor||this.styleHas("textBackgroundColor")){for(var e,i,n,r,o,s,a,l=t.fillStyle,c=this._getLeftOffset(),h=this._getTopOffset(),u=0,f=0,d=this.path,p=0,g=this._textLines.length;p<g;p++)if(e=this.getHeightOfLine(p),this.textBackgroundColor||this.styleHas("textBackgroundColor",p)){n=this._textLines[p],i=this._getLineLeftOffset(p),f=0,u=0,r=this.getValueOfPropertyAt(p,0,"textBackgroundColor");for(var v=0,m=n.length;v<m;v++)o=this.__charBounds[p][v],s=this.getValueOfPropertyAt(p,v,"textBackgroundColor"),d?(t.save(),t.translate(o.renderLeft,o.renderTop),t.rotate(o.angle),t.fillStyle=s,s&&t.fillRect(-o.width/2,-e/this.lineHeight*(1-this._fontSizeFraction),o.width,e/this.lineHeight),t.restore()):s!==r?(a=c+i+u,"rtl"===this.direction&&(a=this.width-a-f),t.fillStyle=r,r&&t.fillRect(a,h,f,e/this.lineHeight),u=o.left,f=o.width,r=s):f+=o.kernedWidth;s&&!d&&(a=c+i+u,"rtl"===this.direction&&(a=this.width-a-f),t.fillStyle=s,t.fillRect(a,h,f,e/this.lineHeight)),h+=e}else h+=e;t.fillStyle=l,this._removeShadow(t)}},
/**
         * @private
         * @param {Object} decl style declaration for cache
         * @param {String} decl.fontFamily fontFamily
         * @param {String} decl.fontStyle fontStyle
         * @param {String} decl.fontWeight fontWeight
         * @return {Object} reference to cache
         */
getFontCache:function(t){var i=t.fontFamily.toLowerCase();e.charWidthsCache[i]||(e.charWidthsCache[i]={});var n=e.charWidthsCache[i],r=t.fontStyle.toLowerCase()+"_"+(t.fontWeight+"").toLowerCase();return n[r]||(n[r]={}),n[r]},
/**
         * measure and return the width of a single character.
         * possibly overridden to accommodate different measure logic or
         * to hook some external lib for character measurement
         * @private
         * @param {String} _char, char to be measured
         * @param {Object} charStyle style of char to be measured
         * @param {String} [previousChar] previous char
         * @param {Object} [prevCharStyle] style of previous char
         */
_measureChar:function(t,e,i,n){var r,o,s,a,l=this.getFontCache(e),c=i+t,h=this._getFontDeclaration(e)===this._getFontDeclaration(n),u=e.fontSize/this.CACHE_FONT_SIZE;if(i&&void 0!==l[i]&&(s=l[i]),void 0!==l[t]&&(a=r=l[t]),h&&void 0!==l[c]&&(a=(o=l[c])-s),void 0===r||void 0===s||void 0===o){var f=this.getMeasuringContext();this._setTextStyles(f,e,!0)}return void 0===r&&(a=r=f.measureText(t).width,l[t]=r),void 0===s&&h&&i&&(s=f.measureText(i).width,l[i]=s),h&&void 0===o&&(o=f.measureText(c).width,l[c]=o,a=o-s),{width:r*u,kernedWidth:a*u}},
/**
         * Computes height of character at given position
         * @param {Number} line the line index number
         * @param {Number} _char the character index number
         * @return {Number} fontSize of the character
         */
getHeightOfChar:function(t,e){return this.getValueOfPropertyAt(t,e,"fontSize")},
/**
         * measure a text line measuring all characters.
         * @param {Number} lineIndex line number
         * @return {Number} Line width
         */
measureLine:function(t){var e=this._measureLine(t);return 0!==this.charSpacing&&(e.width-=this._getWidthOfCharSpacing()),e.width<0&&(e.width=0),e},
/**
         * measure every grapheme of a line, populating __charBounds
         * @param {Number} lineIndex
         * @return {Object} object.width total width of characters
         * @return {Object} object.widthOfSpaces length of chars that match this._reSpacesAndTabs
         */
_measureLine:function(t){var i,n,r,o,s,a,l=0,c=this._textLines[t],h=new Array(c.length),u=0,f=this.path,d="right"===this.pathSide;for(this.__charBounds[t]=h,i=0;i<c.length;i++)n=c[i],o=this._getGraphemeBox(n,t,i,r),h[i]=o,l+=o.kernedWidth,r=n;if(h[i]={left:o?o.left+o.width:0,width:0,kernedWidth:0,height:this.fontSize},f){switch(a=f.segmentsInfo[f.segmentsInfo.length-1].length,(s=e.util.getPointOnPath(f.path,0,f.segmentsInfo)).x+=f.pathOffset.x,s.y+=f.pathOffset.y,this.textAlign){case"left":u=d?a-l:0;break;case"center":u=(a-l)/2;break;case"right":u=d?0:a-l}for(u+=this.pathStartOffset*(d?-1:1),i=d?c.length-1:0;d?i>=0:i<c.length;d?i--:i++)o=h[i],u>a?u%=a:u<0&&(u+=a),this._setGraphemeOnPath(u,o,s),u+=o.kernedWidth}return{width:l,numOfSpaces:0}},
/**
         * Calculate the angle  and the left,top position of the char that follow a path.
         * It appends it to graphemeInfo to be reused later at rendering
         * @private
         * @param {Number} positionInPath to be measured
         * @param {Object} graphemeInfo current grapheme box information
         * @param {Object} startingPoint position of the point
         */
_setGraphemeOnPath:function(t,i,n){var r=t+i.kernedWidth/2,o=this.path,s=e.util.getPointOnPath(o.path,r,o.segmentsInfo);i.renderLeft=s.x-n.x,i.renderTop=s.y-n.y,i.angle=s.angle+("right"===this.pathSide?Math.PI:0)},
/**
         * Measure and return the info of a single grapheme.
         * needs the the info of previous graphemes already filled
         * @private
         * @param {String} grapheme to be measured
         * @param {Number} lineIndex index of the line where the char is
         * @param {Number} charIndex position in the line
         * @param {String} [prevGrapheme] character preceding the one to be measured
         */
_getGraphemeBox:function(t,e,i,n,r){var o,s=this.getCompleteStyleDeclaration(e,i),a=n?this.getCompleteStyleDeclaration(e,i-1):{},l=this._measureChar(t,s,n,a),c=l.kernedWidth,h=l.width;0!==this.charSpacing&&(h+=o=this._getWidthOfCharSpacing(),c+=o);var u={width:h,left:0,height:s.fontSize,kernedWidth:c,deltaY:s.deltaY};if(i>0&&!r){var f=this.__charBounds[e][i-1];u.left=f.left+f.width+l.kernedWidth-l.width}return u},
/**
         * Calculate height of line at 'lineIndex'
         * @param {Number} lineIndex index of line to calculate
         * @return {Number}
         */
getHeightOfLine:function(t){if(this.__lineHeights[t])return this.__lineHeights[t];for(var e=this._textLines[t],i=this.getHeightOfChar(t,0),n=1,r=e.length;n<r;n++)i=Math.max(this.getHeightOfChar(t,n),i);return this.__lineHeights[t]=i*this.lineHeight*this._fontSizeMult},
/**
         * Calculate text box height
         */
calcTextHeight:function(){for(var t,e=0,i=0,n=this._textLines.length;i<n;i++)t=this.getHeightOfLine(i),e+=i===n-1?t/this.lineHeight:t;return e},
/**
         * @private
         * @return {Number} Left offset
         */
_getLeftOffset:function(){return"ltr"===this.direction?-this.width/2:this.width/2},
/**
         * @private
         * @return {Number} Top offset
         */
_getTopOffset:function(){return-this.height/2},
/**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {String} method Method name ("fillText" or "strokeText")
         */
_renderTextCommon:function(t,e){t.save();for(var i=0,n=this._getLeftOffset(),r=this._getTopOffset(),o=0,s=this._textLines.length;o<s;o++){var a=this.getHeightOfLine(o),l=a/this.lineHeight,c=this._getLineLeftOffset(o);this._renderTextLine(e,t,this._textLines[o],n+c,r+i+l,o),i+=a}t.restore()},
/**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
_renderTextFill:function(t){(this.fill||this.styleHas("fill"))&&this._renderTextCommon(t,"fillText")},
/**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
_renderTextStroke:function(t){(this.stroke&&0!==this.strokeWidth||!this.isEmptyStyles())&&(this.shadow&&!this.shadow.affectStroke&&this._removeShadow(t),t.save(),this._setLineDash(t,this.strokeDashArray),t.beginPath(),this._renderTextCommon(t,"strokeText"),t.closePath(),t.restore())},
/**
         * @private
         * @param {String} method fillText or strokeText.
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {Array} line Content of the line, splitted in an array by grapheme
         * @param {Number} left
         * @param {Number} top
         * @param {Number} lineIndex
         */
_renderChars:function(t,i,n,r,o,s){var a,l,c,h,u,f=this.getHeightOfLine(s),d=-1!==this.textAlign.indexOf("justify"),p="",g=0,v=this.path,m=!d&&0===this.charSpacing&&this.isEmptyStyles(s)&&!v,y="ltr"===this.direction,_="ltr"===this.direction?1:-1,b=i.canvas.getAttribute("dir");if(i.save(),b!==this.direction&&(i.canvas.setAttribute("dir",y?"ltr":"rtl"),i.direction=y?"ltr":"rtl",i.textAlign=y?"left":"right"),o-=f*this._fontSizeFraction/this.lineHeight,m)return this._renderChar(t,i,s,0,n.join(""),r,o,f),void i.restore();for(var x=0,C=n.length-1;x<=C;x++)h=x===C||this.charSpacing||v,p+=n[x],c=this.__charBounds[s][x],0===g?(r+=_*(c.kernedWidth-c.width),g+=c.width):g+=c.kernedWidth,d&&!h&&this._reSpaceAndTab.test(n[x])&&(h=!0),h||(a=a||this.getCompleteStyleDeclaration(s,x),l=this.getCompleteStyleDeclaration(s,x+1),h=e.util.hasStyleChanged(a,l,!1)),h&&(v?(i.save(),i.translate(c.renderLeft,c.renderTop),i.rotate(c.angle),this._renderChar(t,i,s,x,p,-g/2,0,f),i.restore()):(u=r,this._renderChar(t,i,s,x,p,u,o,f)),p="",a=l,r+=_*g,g=0);i.restore()},
/**
         * This function try to patch the missing gradientTransform on canvas gradients.
         * transforming a context to transform the gradient, is going to transform the stroke too.
         * we want to transform the gradient but not the stroke operation, so we create
         * a transformed gradient on a pattern and then we use the pattern instead of the gradient.
         * this method has drawbacks: is slow, is in low resolution, needs a patch for when the size
         * is limited.
         * @private
         * @param {fabric.Gradient} filler a fabric gradient instance
         * @return {CanvasPattern} a pattern to use as fill/stroke style
         */
_applyPatternGradientTransformText:function(t){var i,n=e.util.createCanvasElement(),r=this.width+this.strokeWidth,o=this.height+this.strokeWidth;return n.width=r,n.height=o,(i=n.getContext("2d")).beginPath(),i.moveTo(0,0),i.lineTo(r,0),i.lineTo(r,o),i.lineTo(0,o),i.closePath(),i.translate(r/2,o/2),i.fillStyle=t.toLive(i),this._applyPatternGradientTransform(i,t),i.fill(),i.createPattern(n,"no-repeat")},handleFiller:function(t,e,i){var n,r;return i.toLive?"percentage"===i.gradientUnits||i.gradientTransform||i.patternTransform?(n=-this.width/2,r=-this.height/2,t.translate(n,r),t[e]=this._applyPatternGradientTransformText(i),{offsetX:n,offsetY:r}):(t[e]=i.toLive(t,this),this._applyPatternGradientTransform(t,i)):(t[e]=i,{offsetX:0,offsetY:0})},_setStrokeStyles:function(t,e){return t.lineWidth=e.strokeWidth,t.lineCap=this.strokeLineCap,t.lineDashOffset=this.strokeDashOffset,t.lineJoin=this.strokeLineJoin,t.miterLimit=this.strokeMiterLimit,this.handleFiller(t,"strokeStyle",e.stroke)},_setFillStyles:function(t,e){return this.handleFiller(t,"fillStyle",e.fill)},
/**
         * @private
         * @param {String} method
         * @param {CanvasRenderingContext2D} ctx Context to render on
         * @param {Number} lineIndex
         * @param {Number} charIndex
         * @param {String} _char
         * @param {Number} left Left coordinate
         * @param {Number} top Top coordinate
         * @param {Number} lineHeight Height of the line
         */
_renderChar:function(t,e,i,n,r,o,s){var a,l,c=this._getStyleDeclaration(i,n),h=this.getCompleteStyleDeclaration(i,n),u="fillText"===t&&h.fill,f="strokeText"===t&&h.stroke&&h.strokeWidth;(f||u)&&(e.save(),u&&(a=this._setFillStyles(e,h)),f&&(l=this._setStrokeStyles(e,h)),e.font=this._getFontDeclaration(h),c&&c.textBackgroundColor&&this._removeShadow(e),c&&c.deltaY&&(s+=c.deltaY),u&&e.fillText(r,o-a.offsetX,s-a.offsetY),f&&e.strokeText(r,o-l.offsetX,s-l.offsetY),e.restore())},
/**
         * Turns the character into a 'superior figure' (i.e. 'superscript')
         * @param {Number} start selection start
         * @param {Number} end selection end
         * @returns {fabric.Text} thisArg
         * @chainable
         */
setSuperscript:function(t,e){return this._setScript(t,e,this.superscript)},
/**
         * Turns the character into an 'inferior figure' (i.e. 'subscript')
         * @param {Number} start selection start
         * @param {Number} end selection end
         * @returns {fabric.Text} thisArg
         * @chainable
         */
setSubscript:function(t,e){return this._setScript(t,e,this.subscript)},
/**
         * Applies 'schema' at given position
         * @private
         * @param {Number} start selection start
         * @param {Number} end selection end
         * @param {Number} schema
         * @returns {fabric.Text} thisArg
         * @chainable
         */
_setScript:function(t,e,i){var n=this.get2DCursorLocation(t,!0),r=this.getValueOfPropertyAt(n.lineIndex,n.charIndex,"fontSize"),o=this.getValueOfPropertyAt(n.lineIndex,n.charIndex,"deltaY"),s={fontSize:r*i.size,deltaY:o+r*i.baseline};return this.setSelectionStyles(s,t,e),this},
/**
         * @private
         * @param {Number} lineIndex index text line
         * @return {Number} Line left offset
         */
_getLineLeftOffset:function(t){var e=this.getLineWidth(t),i=this.width-e,n=this.textAlign,r=this.direction,o=0,s=this.isEndOfWrapping(t);return"justify"===n||"justify-center"===n&&!s||"justify-right"===n&&!s||"justify-left"===n&&!s?0:("center"===n&&(o=i/2),"right"===n&&(o=i),"justify-center"===n&&(o=i/2),"justify-right"===n&&(o=i),"rtl"===r&&(o-=i),o)},
/**
         * @private
         */
_clearCache:function(){this.__lineWidths=[],this.__lineHeights=[],this.__charBounds=[]},
/**
         * @private
         */
_shouldClearDimensionCache:function(){var t=this._forceClearCache;return t||(t=this.hasStateChanged("_dimensionAffectingProps")),t&&(this.dirty=!0,this._forceClearCache=!1),t},
/**
         * Measure a single line given its index. Used to calculate the initial
         * text bounding box. The values are calculated and stored in __lineWidths cache.
         * @private
         * @param {Number} lineIndex line number
         * @return {Number} Line width
         */
getLineWidth:function(t){if(void 0!==this.__lineWidths[t])return this.__lineWidths[t];var e=this.measureLine(t).width;return this.__lineWidths[t]=e,e},_getWidthOfCharSpacing:function(){return 0!==this.charSpacing?this.fontSize*this.charSpacing/1e3:0},
/**
         * Retrieves the value of property at given character position
         * @param {Number} lineIndex the line number
         * @param {Number} charIndex the character number
         * @param {String} property the property name
         * @returns the value of 'property'
         */
getValueOfPropertyAt:function(t,e,i){var n=this._getStyleDeclaration(t,e);return n&&void 0!==n[i]?n[i]:this[i]},
/**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
_renderTextDecoration:function(t,e){if(this[e]||this.styleHas(e)){for(var i,n,r,o,s,a,l,c,h,u,f,d,p,g,v,m,y=this._getLeftOffset(),_=this._getTopOffset(),b=this.path,x=this._getWidthOfCharSpacing(),C=this.offsets[e],S=0,w=this._textLines.length;S<w;S++)if(i=this.getHeightOfLine(S),this[e]||this.styleHas(e,S)){l=this._textLines[S],g=i/this.lineHeight,o=this._getLineLeftOffset(S),u=0,f=0,c=this.getValueOfPropertyAt(S,0,e),m=this.getValueOfPropertyAt(S,0,"fill"),h=_+g*(1-this._fontSizeFraction),n=this.getHeightOfChar(S,0),s=this.getValueOfPropertyAt(S,0,"deltaY");for(var T=0,O=l.length;T<O;T++)if(d=this.__charBounds[S][T],p=this.getValueOfPropertyAt(S,T,e),v=this.getValueOfPropertyAt(S,T,"fill"),r=this.getHeightOfChar(S,T),a=this.getValueOfPropertyAt(S,T,"deltaY"),b&&p&&v)t.save(),t.fillStyle=m,t.translate(d.renderLeft,d.renderTop),t.rotate(d.angle),t.fillRect(-d.kernedWidth/2,C*r+a,d.kernedWidth,this.fontSize/15),t.restore();else if((p!==c||v!==m||r!==n||a!==s)&&f>0){var k=y+o+u;"rtl"===this.direction&&(k=this.width-k-f),c&&m&&(t.fillStyle=m,t.fillRect(k,h+C*n+s,f,this.fontSize/15)),u=d.left,f=d.width,c=p,m=v,n=r,s=a}else f+=d.kernedWidth;k=y+o+u;"rtl"===this.direction&&(k=this.width-k-f),t.fillStyle=v,p&&v&&t.fillRect(k,h+C*n+s,f-x,this.fontSize/15),_+=i}else _+=i;this._removeShadow(t)}},
/**
         * return font declaration string for canvas context
         * @param {Object} [styleObject] object
         * @returns {String} font declaration formatted for canvas context.
         */
_getFontDeclaration:function(t,i){var n=t||this,r=this.fontFamily,o=e.Text.genericFonts.indexOf(r.toLowerCase())>-1,s=void 0===r||r.indexOf("'")>-1||r.indexOf(",")>-1||r.indexOf('"')>-1||o?n.fontFamily:'"'+n.fontFamily+'"';return[
// node-canvas needs "weight style", while browsers need "style weight"
// verify if this can be fixed in JSDOM
e.isLikelyNode?n.fontWeight:n.fontStyle,e.isLikelyNode?n.fontStyle:n.fontWeight,i?this.CACHE_FONT_SIZE+"px":n.fontSize+"px",s].join(" ")},
/**
         * Renders text instance on a specified context
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
render:function(t){this.visible&&(this.canvas&&this.canvas.skipOffscreen&&!this.group&&!this.isOnScreen()||(this._shouldClearDimensionCache()&&this.initDimensions(),this.callSuper("render",t)))},
/**
         * Returns the text as an array of lines.
         * @param {String} text text to split
         * @returns {Array} Lines in the text
         */
_splitTextIntoLines:function(t){for(var i=t.split(this._reNewline),n=new Array(i.length),r=["\n"],o=[],s=0;s<i.length;s++)n[s]=e.util.string.graphemeSplit(i[s]),o=o.concat(n[s],r);return o.pop(),{_unwrappedLines:n,lines:i,graphemeText:o,graphemeLines:n}},
/**
         * Returns object representation of an instance
         * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
         * @return {Object} Object representation of an instance
         */
toObject:function(t){var i=n.concat(t),r=this.callSuper("toObject",i);return r.styles=e.util.stylesToArray(this.styles,this.text),r.path&&(r.path=this.path.toObject()),r},
/**
         * Sets property to a given value. When changing position/dimension -related properties (left, top, scale, angle, etc.) `set` does not update position of object's borders/controls. If you need to update those, call `setCoords()`.
         * @param {String|Object} key Property name or object (if object, iterate over the object properties)
         * @param {Object|Function} value Property value (if function, the value is passed into it and its return value is used as a new one)
         * @return {fabric.Object} thisArg
         * @chainable
         */
set:function(t,e){this.callSuper("set",t,e);var i=!1,n=!1;if("object"==typeof t)for(var r in t)"path"===r&&this.setPathInfo(),i=i||-1!==this._dimensionAffectingProps.indexOf(r),n=n||"path"===r;else i=-1!==this._dimensionAffectingProps.indexOf(t),n="path"===t;return n&&this.setPathInfo(),i&&(this.initDimensions(),this.setCoords()),this},
/**
         * Returns complexity of an instance
         * @return {Number} complexity
         */
complexity:function(){return 1}}),e.Text.ATTRIBUTE_NAMES=e.SHARED_ATTRIBUTES.concat("x y dx dy font-family font-style font-weight font-size letter-spacing text-decoration text-anchor".split(" ")),e.Text.DEFAULT_SVG_FONT_SIZE=16,e.Text.fromElement=function(t,n,r){if(!t)return n(null);var o=e.parseAttributes(t,e.Text.ATTRIBUTE_NAMES),s=o.textAnchor||"left";if((r=e.util.object.extend(r?i(r):{},o)).top=r.top||0,r.left=r.left||0,o.textDecoration){var a=o.textDecoration;-1!==a.indexOf("underline")&&(r.underline=!0),-1!==a.indexOf("overline")&&(r.overline=!0),-1!==a.indexOf("line-through")&&(r.linethrough=!0),delete r.textDecoration}"dx"in o&&(r.left+=o.dx),"dy"in o&&(r.top+=o.dy),"fontSize"in r||(r.fontSize=e.Text.DEFAULT_SVG_FONT_SIZE);var l="";"textContent"in t?l=t.textContent:"firstChild"in t&&null!==t.firstChild&&"data"in t.firstChild&&null!==t.firstChild.data&&(l=t.firstChild.data),l=l.replace(/^\s+|\s+$|\n+/g,"").replace(/\s+/g," ");var c=r.strokeWidth;r.strokeWidth=0;var h=new e.Text(l,r),u=h.getScaledHeight()/h.height,f=((h.height+h.strokeWidth)*h.lineHeight-h.height)*u,d=h.getScaledHeight()+f,p=0;"center"===s&&(p=h.getScaledWidth()/2),"right"===s&&(p=h.getScaledWidth()),h.set({left:h.left-p,top:h.top-(d-h.fontSize*(.07+h._fontSizeFraction))/h.lineHeight,strokeWidth:void 0!==c?c:1}),n(h)},e.Text.fromObject=function(t,n){var r=i(t),o=t.path;return delete r.path,e.Object._fromObject("Text",r,(function(i){i.styles=e.util.stylesFromArray(t.styles,t.text),o?e.Object._fromObject("Path",o,(function(t){i.set("path",t),n(i)}),"path"):n(i)}),"text")},e.Text.genericFonts=["sans-serif","serif","cursive","fantasy","monospace"],e.util.createAccessors&&e.util.createAccessors(e.Text)}}(t),C.util.object.extend(C.Text.prototype,
/** @lends fabric.Text.prototype */
{
/**
         * Returns true if object has no styling or no styling in a line
         * @param {Number} lineIndex , lineIndex is on wrapped lines.
         * @return {Boolean}
         */
isEmptyStyles:function(t){if(!this.styles)return!0;if(void 0!==t&&!this.styles[t])return!0;var e=void 0===t?this.styles:{line:this.styles[t]};for(var i in e)for(var n in e[i])for(var r in e[i][n])return!1;return!0},
/**
         * Returns true if object has a style property or has it ina specified line
         * This function is used to detect if a text will use a particular property or not.
         * @param {String} property to check for
         * @param {Number} lineIndex to check the style on
         * @return {Boolean}
         */
styleHas:function(t,e){if(!this.styles||!t||""===t)return!1;if(void 0!==e&&!this.styles[e])return!1;var i=void 0===e?this.styles:{0:this.styles[e]};for(var n in i)for(var r in i[n])if(void 0!==i[n][r][t])return!0;return!1},
/**
         * Check if characters in a text have a value for a property
         * whose value matches the textbox's value for that property.  If so,
         * the character-level property is deleted.  If the character
         * has no other properties, then it is also deleted.  Finally,
         * if the line containing that character has no other characters
         * then it also is deleted.
         *
         * @param {string} property The property to compare between characters and text.
         */
cleanStyle:function(t){if(!this.styles||!t||""===t)return!1;var e,i,n=this.styles,r=0,o=!0,s=0;for(var a in n){for(var l in e=0,n[a]){var c;r++,(c=n[a][l]).hasOwnProperty(t)?(i?c[t]!==i&&(o=!1):i=c[t],c[t]===this[t]&&delete c[t]):o=!1,0!==Object.keys(c).length?e++:delete n[a][l]}0===e&&delete n[a]}for(var h=0;h<this._textLines.length;h++)s+=this._textLines[h].length;o&&r===s&&(this[t]=i,this.removeStyle(t))},
/**
         * Remove a style property or properties from all individual character styles
         * in a text object.  Deletes the character style object if it contains no other style
         * props.  Deletes a line style object if it contains no other character styles.
         *
         * @param {String} props The property to remove from character styles.
         */
removeStyle:function(t){if(this.styles&&t&&""!==t){var e,i,n,r=this.styles;for(i in r){for(n in e=r[i])delete e[n][t],0===Object.keys(e[n]).length&&delete e[n];0===Object.keys(e).length&&delete r[i]}}},
/**
         * @private
         */
_extendStyles:function(t,e){var i=this.get2DCursorLocation(t);this._getLineStyle(i.lineIndex)||this._setLineStyle(i.lineIndex),this._getStyleDeclaration(i.lineIndex,i.charIndex)||this._setStyleDeclaration(i.lineIndex,i.charIndex,{}),C.util.object.extend(this._getStyleDeclaration(i.lineIndex,i.charIndex),e)},
/**
         * Returns 2d representation (lineIndex and charIndex) of cursor (or selection start)
         * @param {Number} [selectionStart] Optional index. When not given, current selectionStart is used.
         * @param {Boolean} [skipWrapping] consider the location for unwrapped lines. useful to manage styles.
         */
get2DCursorLocation:function(t,e){void 0===t&&(t=this.selectionStart);for(var i=e?this._unwrappedTextLines:this._textLines,n=i.length,r=0;r<n;r++){if(t<=i[r].length)return{lineIndex:r,charIndex:t};t-=i[r].length+this.missingNewlineOffset(r)}return{lineIndex:r-1,charIndex:i[r-1].length<t?i[r-1].length:t}},
/**
         * Gets style of a current selection/cursor (at the start position)
         * if startIndex or endIndex are not provided, selectionStart or selectionEnd will be used.
         * @param {Number} [startIndex] Start index to get styles at
         * @param {Number} [endIndex] End index to get styles at, if not specified selectionEnd or startIndex + 1
         * @param {Boolean} [complete] get full style or not
         * @return {Array} styles an array with one, zero or more Style objects
         */
getSelectionStyles:function(t,e,i){void 0===t&&(t=this.selectionStart||0),void 0===e&&(e=this.selectionEnd||t);for(var n=[],r=t;r<e;r++)n.push(this.getStyleAtPosition(r,i));return n},
/**
         * Gets style of a current selection/cursor position
         * @param {Number} position  to get styles at
         * @param {Boolean} [complete] full style if true
         * @return {Object} style Style object at a specified index
         * @private
         */
getStyleAtPosition:function(t,e){var i=this.get2DCursorLocation(t);return(e?this.getCompleteStyleDeclaration(i.lineIndex,i.charIndex):this._getStyleDeclaration(i.lineIndex,i.charIndex))||{}},
/**
         * Sets style of a current selection, if no selection exist, do not set anything.
         * @param {Object} [styles] Styles object
         * @param {Number} [startIndex] Start index to get styles at
         * @param {Number} [endIndex] End index to get styles at, if not specified selectionEnd or startIndex + 1
         * @return {fabric.IText} thisArg
         * @chainable
         */
setSelectionStyles:function(t,e,i){void 0===e&&(e=this.selectionStart||0),void 0===i&&(i=this.selectionEnd||e);for(var n=e;n<i;n++)this._extendStyles(n,t);return this._forceClearCache=!0,this},
/**
         * get the reference, not a clone, of the style object for a given character
         * @param {Number} lineIndex
         * @param {Number} charIndex
         * @return {Object} style object
         */
_getStyleDeclaration:function(t,e){var i=this.styles&&this.styles[t];return i?i[e]:null},
/**
         * return a new object that contains all the style property for a character
         * the object returned is newly created
         * @param {Number} lineIndex of the line where the character is
         * @param {Number} charIndex position of the character on the line
         * @return {Object} style object
         */
getCompleteStyleDeclaration:function(t,e){for(var i,n=this._getStyleDeclaration(t,e)||{},r={},o=0;o<this._styleProperties.length;o++)r[i=this._styleProperties[o]]=void 0===n[i]?this[i]:n[i];return r},
/**
         * @param {Number} lineIndex
         * @param {Number} charIndex
         * @param {Object} style
         * @private
         */
_setStyleDeclaration:function(t,e,i){this.styles[t][e]=i},
/**
         *
         * @param {Number} lineIndex
         * @param {Number} charIndex
         * @private
         */
_deleteStyleDeclaration:function(t,e){delete this.styles[t][e]},
/**
         * @param {Number} lineIndex
         * @return {Boolean} if the line exists or not
         * @private
         */
_getLineStyle:function(t){return!!this.styles[t]},
/**
         * Set the line style to an empty object so that is initialized
         * @param {Number} lineIndex
         * @private
         */
_setLineStyle:function(t){this.styles[t]={}},
/**
         * @param {Number} lineIndex
         * @private
         */
_deleteLineStyle:function(t){delete this.styles[t]}}),function(){function t(t){t.textDecoration&&(t.textDecoration.indexOf("underline")>-1&&(t.underline=!0),t.textDecoration.indexOf("line-through")>-1&&(t.linethrough=!0),t.textDecoration.indexOf("overline")>-1&&(t.overline=!0),delete t.textDecoration)}C.IText=C.util.createClass(C.Text,C.Observable,
/** @lends fabric.IText.prototype */
{
/**
         * Type of an object
         * @type String
         * @default
         */
type:"i-text",
/**
         * Index where text selection starts (or where cursor is when there is no selection)
         * @type Number
         * @default
         */
selectionStart:0,
/**
         * Index where text selection ends
         * @type Number
         * @default
         */
selectionEnd:0,
/**
         * Color of text selection
         * @type String
         * @default
         */
selectionColor:"rgba(17,119,255,0.3)",
/**
         * Indicates whether text is in editing mode
         * @type Boolean
         * @default
         */
isEditing:!1,
/**
         * Indicates whether a text can be edited
         * @type Boolean
         * @default
         */
editable:!0,
/**
         * Border color of text object while it's in editing mode
         * @type String
         * @default
         */
editingBorderColor:"rgba(102,153,255,0.25)",
/**
         * Width of cursor (in px)
         * @type Number
         * @default
         */
cursorWidth:2,
/**
         * Color of text cursor color in editing mode.
         * if not set (default) will take color from the text.
         * if set to a color value that fabric can understand, it will
         * be used instead of the color of the text at the current position.
         * @type String
         * @default
         */
cursorColor:"",
/**
         * Delay between cursor blink (in ms)
         * @type Number
         * @default
         */
cursorDelay:1e3,
/**
         * Duration of cursor fadein (in ms)
         * @type Number
         * @default
         */
cursorDuration:600,
/**
         * Indicates whether internal text char widths can be cached
         * @type Boolean
         * @default
         */
caching:!0,
/**
         * DOM container to append the hiddenTextarea.
         * An alternative to attaching to the document.body.
         * Useful to reduce laggish redraw of the full document.body tree and
         * also with modals event capturing that won't let the textarea take focus.
         * @type HTMLElement
         * @default
         */
hiddenTextareaContainer:null,
/**
         * @private
         */
_reSpace:/\s|\n/,
/**
         * @private
         */
_currentCursorOpacity:0,
/**
         * @private
         */
_selectionDirection:null,
/**
         * @private
         */
_abortCursorAnimation:!1,
/**
         * @private
         */
__widthOfSpace:[],
/**
         * Helps determining when the text is in composition, so that the cursor
         * rendering is altered.
         */
inCompositionMode:!1,
/**
         * Constructor
         * @param {String} text Text string
         * @param {Object} [options] Options object
         * @return {fabric.IText} thisArg
         */
initialize:function(t,e){this.callSuper("initialize",t,e),this.initBehavior()},
/**
         * Sets selection start (left boundary of a selection)
         * @param {Number} index Index to set selection start to
         */
setSelectionStart:function(t){t=Math.max(t,0),this._updateAndFire("selectionStart",t)},
/**
         * Sets selection end (right boundary of a selection)
         * @param {Number} index Index to set selection end to
         */
setSelectionEnd:function(t){t=Math.min(t,this.text.length),this._updateAndFire("selectionEnd",t)},
/**
         * @private
         * @param {String} property 'selectionStart' or 'selectionEnd'
         * @param {Number} index new position of property
         */
_updateAndFire:function(t,e){this[t]!==e&&(this._fireSelectionChanged(),this[t]=e),this._updateTextarea()},
/**
         * Fires the even of selection changed
         * @private
         */
_fireSelectionChanged:function(){this.fire("selection:changed"),this.canvas&&this.canvas.fire("text:selection:changed",{target:this})},
/**
         * Initialize text dimensions. Render all text on given context
         * or on a offscreen canvas to get the text width with measureText.
         * Updates this.width and this.height with the proper values.
         * Does not return dimensions.
         * @private
         */
initDimensions:function(){this.isEditing&&this.initDelayedCursor(),this.clearContextTop(),this.callSuper("initDimensions")},
/**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
render:function(t){this.clearContextTop(),this.callSuper("render",t),this.cursorOffsetCache={},this.renderCursorOrSelection()},
/**
         * @private
         * @param {CanvasRenderingContext2D} ctx Context to render on
         */
_render:function(t){this.callSuper("_render",t)},
/**
         * Prepare and clean the contextTop
         */
clearContextTop:function(t){if(this.isEditing&&this.canvas&&this.canvas.contextTop){var e=this.canvas.contextTop,i=this.canvas.viewportTransform;e.save(),e.transform(i[0],i[1],i[2],i[3],i[4],i[5]),this.transform(e),this._clearTextArea(e),t||e.restore()}},
/**
         * Renders cursor or selection (depending on what exists)
         * it does on the contextTop. If contextTop is not available, do nothing.
         */
renderCursorOrSelection:function(){if(this.isEditing&&this.canvas&&this.canvas.contextTop){var t=this._getCursorBoundaries(),e=this.canvas.contextTop;this.clearContextTop(!0),this.selectionStart===this.selectionEnd?this.renderCursor(t,e):this.renderSelection(t,e),e.restore()}},_clearTextArea:function(t){var e=this.width+4,i=this.height+4;t.clearRect(-e/2,-i/2,e,i)},
/**
         * Returns cursor boundaries (left, top, leftOffset, topOffset)
         * @private
         * @param {Array} chars Array of characters
         * @param {String} typeOfBoundaries
         */
_getCursorBoundaries:function(t){void 0===t&&(t=this.selectionStart);var e=this._getLeftOffset(),i=this._getTopOffset(),n=this._getCursorBoundariesOffsets(t);return{left:e,top:i,leftOffset:n.left,topOffset:n.top}},
/**
         * @private
         */
_getCursorBoundariesOffsets:function(t){if(this.cursorOffsetCache&&"top"in this.cursorOffsetCache)return this.cursorOffsetCache;var e,i,n,r,o=0,s=0,a=this.get2DCursorLocation(t);n=a.charIndex,i=a.lineIndex;for(var l=0;l<i;l++)o+=this.getHeightOfLine(l);e=this._getLineLeftOffset(i);var c=this.__charBounds[i][n];return c&&(s=c.left),0!==this.charSpacing&&n===this._textLines[i].length&&(s-=this._getWidthOfCharSpacing()),r={top:o,left:e+(s>0?s:0)},"rtl"===this.direction&&(r.left*=-1),this.cursorOffsetCache=r,this.cursorOffsetCache},
/**
         * Renders cursor
         * @param {Object} boundaries
         * @param {CanvasRenderingContext2D} ctx transformed context to draw on
         */
renderCursor:function(t,e){var i=this.get2DCursorLocation(),n=i.lineIndex,r=i.charIndex>0?i.charIndex-1:0,o=this.getValueOfPropertyAt(n,r,"fontSize"),s=this.scaleX*this.canvas.getZoom(),a=this.cursorWidth/s,l=t.topOffset,c=this.getValueOfPropertyAt(n,r,"deltaY");l+=(1-this._fontSizeFraction)*this.getHeightOfLine(n)/this.lineHeight-o*(1-this._fontSizeFraction),this.inCompositionMode&&this.renderSelection(t,e),e.fillStyle=this.cursorColor||this.getValueOfPropertyAt(n,r,"fill"),e.globalAlpha=this.__isMousedown?1:this._currentCursorOpacity,e.fillRect(t.left+t.leftOffset-a/2,l+t.top+c,a,o)},
/**
         * Renders text selection
         * @param {Object} boundaries Object with left/top/leftOffset/topOffset
         * @param {CanvasRenderingContext2D} ctx transformed context to draw on
         */
renderSelection:function(t,e){for(var i=this.inCompositionMode?this.hiddenTextarea.selectionStart:this.selectionStart,n=this.inCompositionMode?this.hiddenTextarea.selectionEnd:this.selectionEnd,r=-1!==this.textAlign.indexOf("justify"),o=this.get2DCursorLocation(i),s=this.get2DCursorLocation(n),a=o.lineIndex,l=s.lineIndex,c=o.charIndex<0?0:o.charIndex,h=s.charIndex<0?0:s.charIndex,u=a;u<=l;u++){var f,d=this._getLineLeftOffset(u)||0,p=this.getHeightOfLine(u),g=0,v=0;if(u===a&&(g=this.__charBounds[a][c].left),u>=a&&u<l)v=r&&!this.isEndOfWrapping(u)?this.width:this.getLineWidth(u)||5;else if(u===l)if(0===h)v=this.__charBounds[l][h].left;else{var m=this._getWidthOfCharSpacing();v=this.__charBounds[l][h-1].left+this.__charBounds[l][h-1].width-m}f=p,(this.lineHeight<1||u===l&&this.lineHeight>1)&&(p/=this.lineHeight);var y=t.left+d+g,_=v-g,b=p,x=0;this.inCompositionMode?(e.fillStyle=this.compositionColor||"black",b=1,x=p):e.fillStyle=this.selectionColor,"rtl"===this.direction&&(y=this.width-y-_),e.fillRect(y,t.top+t.topOffset+x,_,b),t.topOffset+=f}},
/**
         * High level function to know the height of the cursor.
         * the currentChar is the one that precedes the cursor
         * Returns fontSize of char at the current cursor
         * Unused from the library, is for the end user
         * @return {Number} Character font size
         */
getCurrentCharFontSize:function(){var t=this._getCurrentCharIndex();return this.getValueOfPropertyAt(t.l,t.c,"fontSize")},
/**
         * High level function to know the color of the cursor.
         * the currentChar is the one that precedes the cursor
         * Returns color (fill) of char at the current cursor
         * if the text object has a pattern or gradient for filler, it will return that.
         * Unused by the library, is for the end user
         * @return {String | fabric.Gradient | fabric.Pattern} Character color (fill)
         */
getCurrentCharColor:function(){var t=this._getCurrentCharIndex();return this.getValueOfPropertyAt(t.l,t.c,"fill")},
/**
         * Returns the cursor position for the getCurrent.. functions
         * @private
         */
_getCurrentCharIndex:function(){var t=this.get2DCursorLocation(this.selectionStart,!0),e=t.charIndex>0?t.charIndex-1:0;return{l:t.lineIndex,c:e}}}),C.IText.fromObject=function(e,i){var n=C.util.stylesFromArray(e.styles,e.text),r=Object.assign({},e,{styles:n});if(t(r),r.styles)for(var o in r.styles)for(var s in r.styles[o])t(r.styles[o][s]);C.Object._fromObject("IText",r,i,"text")}}(),x=C.util.object.clone,C.util.object.extend(C.IText.prototype,
/** @lends fabric.IText.prototype */
{
/**
         * Initializes all the interactive behavior of IText
         */
initBehavior:function(){this.initAddedHandler(),this.initRemovedHandler(),this.initCursorSelectionHandlers(),this.initDoubleClickSimulation(),this.mouseMoveHandler=this.mouseMoveHandler.bind(this)},onDeselect:function(){this.isEditing&&this.exitEditing(),this.selected=!1},
/**
         * Initializes "added" event handler
         */
initAddedHandler:function(){var t=this;this.on("added",(function(){var e=t.canvas;e&&(e._hasITextHandlers||(e._hasITextHandlers=!0,t._initCanvasHandlers(e)),e._iTextInstances=e._iTextInstances||[],e._iTextInstances.push(t))}))},initRemovedHandler:function(){var t=this;this.on("removed",(function(){var e=t.canvas;e&&(e._iTextInstances=e._iTextInstances||[],C.util.removeFromArray(e._iTextInstances,t),0===e._iTextInstances.length&&(e._hasITextHandlers=!1,t._removeCanvasHandlers(e)))}))},
/**
         * register canvas event to manage exiting on other instances
         * @private
         */
_initCanvasHandlers:function(t){t._mouseUpITextHandler=function(){t._iTextInstances&&t._iTextInstances.forEach((function(t){t.__isMousedown=!1}))},t.on("mouse:up",t._mouseUpITextHandler)},
/**
         * remove canvas event to manage exiting on other instances
         * @private
         */
_removeCanvasHandlers:function(t){t.off("mouse:up",t._mouseUpITextHandler)},
/**
         * @private
         */
_tick:function(){this._currentTickState=this._animateCursor(this,1,this.cursorDuration,"_onTickComplete")},
/**
         * @private
         */
_animateCursor:function(t,e,i,n){var r;return r={isAborted:!1,abort:function(){this.isAborted=!0}},t.animate("_currentCursorOpacity",e,{duration:i,onComplete:function(){r.isAborted||t[n]()},onChange:function(){t.canvas&&t.selectionStart===t.selectionEnd&&t.renderCursorOrSelection()},abort:function(){return r.isAborted}}),r},
/**
         * @private
         */
_onTickComplete:function(){var t=this;this._cursorTimeout1&&clearTimeout(this._cursorTimeout1),this._cursorTimeout1=setTimeout((function(){t._currentTickCompleteState=t._animateCursor(t,0,this.cursorDuration/2,"_tick")}),100)},
/**
         * Initializes delayed cursor
         */
initDelayedCursor:function(t){var e=this,i=t?0:this.cursorDelay;this.abortCursorAnimation(),this._currentCursorOpacity=1,this._cursorTimeout2=setTimeout((function(){e._tick()}),i)},
/**
         * Aborts cursor animation and clears all timeouts
         */
abortCursorAnimation:function(){var t=this._currentTickState||this._currentTickCompleteState,e=this.canvas;this._currentTickState&&this._currentTickState.abort(),this._currentTickCompleteState&&this._currentTickCompleteState.abort(),clearTimeout(this._cursorTimeout1),clearTimeout(this._cursorTimeout2),this._currentCursorOpacity=0,t&&e&&e.clearContext(e.contextTop||e.contextContainer)},
/**
         * Selects entire text
         * @return {fabric.IText} thisArg
         * @chainable
         */
selectAll:function(){return this.selectionStart=0,this.selectionEnd=this._text.length,this._fireSelectionChanged(),this._updateTextarea(),this},
/**
         * Returns selected text
         * @return {String}
         */
getSelectedText:function(){return this._text.slice(this.selectionStart,this.selectionEnd).join("")},
/**
         * Find new selection index representing start of current word according to current selection index
         * @param {Number} startFrom Current selection index
         * @return {Number} New selection index
         */
findWordBoundaryLeft:function(t){var e=0,i=t-1;if(this._reSpace.test(this._text[i]))for(;this._reSpace.test(this._text[i]);)e++,i--;for(;/\S/.test(this._text[i])&&i>-1;)e++,i--;return t-e},
/**
         * Find new selection index representing end of current word according to current selection index
         * @param {Number} startFrom Current selection index
         * @return {Number} New selection index
         */
findWordBoundaryRight:function(t){var e=0,i=t;if(this._reSpace.test(this._text[i]))for(;this._reSpace.test(this._text[i]);)e++,i++;for(;/\S/.test(this._text[i])&&i<this._text.length;)e++,i++;return t+e},
/**
         * Find new selection index representing start of current line according to current selection index
         * @param {Number} startFrom Current selection index
         * @return {Number} New selection index
         */
findLineBoundaryLeft:function(t){for(var e=0,i=t-1;!/\n/.test(this._text[i])&&i>-1;)e++,i--;return t-e},
/**
         * Find new selection index representing end of current line according to current selection index
         * @param {Number} startFrom Current selection index
         * @return {Number} New selection index
         */
findLineBoundaryRight:function(t){for(var e=0,i=t;!/\n/.test(this._text[i])&&i<this._text.length;)e++,i++;return t+e},
/**
         * Finds index corresponding to beginning or end of a word
         * @param {Number} selectionStart Index of a character
         * @param {Number} direction 1 or -1
         * @return {Number} Index of the beginning or end of a word
         */
searchWordBoundary:function(t,e){for(var i=this._text,n=this._reSpace.test(i[t])?t-1:t,r=i[n],o=C.reNonWord;!o.test(r)&&n>0&&n<i.length;)r=i[n+=e];return o.test(r)&&(n+=1===e?0:1),n},
/**
         * Selects a word based on the index
         * @param {Number} selectionStart Index of a character
         */
selectWord:function(t){t=t||this.selectionStart;var e=this.searchWordBoundary(t,-1),i=this.searchWordBoundary(t,1);this.selectionStart=e,this.selectionEnd=i,this._fireSelectionChanged(),this._updateTextarea(),this.renderCursorOrSelection()},
/**
         * Selects a line based on the index
         * @param {Number} selectionStart Index of a character
         * @return {fabric.IText} thisArg
         * @chainable
         */
selectLine:function(t){t=t||this.selectionStart;var e=this.findLineBoundaryLeft(t),i=this.findLineBoundaryRight(t);return this.selectionStart=e,this.selectionEnd=i,this._fireSelectionChanged(),this._updateTextarea(),this},
/**
         * Enters editing state
         * @return {fabric.IText} thisArg
         * @chainable
         */
enterEditing:function(t){if(!this.isEditing&&this.editable)return this.canvas&&(this.canvas.calcOffset(),this.exitEditingOnOthers(this.canvas)),this.isEditing=!0,this.initHiddenTextarea(t),this.hiddenTextarea.focus(),this.hiddenTextarea.value=this.text,this._updateTextarea(),this._saveEditingProps(),this._setEditingProps(),this._textBeforeEdit=this.text,this._tick(),this.fire("editing:entered"),this._fireSelectionChanged(),this.canvas?(this.canvas.fire("text:editing:entered",{target:this}),this.initMouseMoveHandler(),this.canvas.requestRenderAll(),this):this},exitEditingOnOthers:function(t){t._iTextInstances&&t._iTextInstances.forEach((function(t){t.selected=!1,t.isEditing&&t.exitEditing()}))},
/**
         * Initializes "mousemove" event handler
         */
initMouseMoveHandler:function(){this.canvas.on("mouse:move",this.mouseMoveHandler)},
/**
         * @private
         */
mouseMoveHandler:function(t){if(this.__isMousedown&&this.isEditing){document.activeElement!==this.hiddenTextarea&&this.hiddenTextarea.focus();var e=this.getSelectionStartFromPointer(t.e),i=this.selectionStart,n=this.selectionEnd;(e===this.__selectionStartOnMouseDown&&i!==n||i!==e&&n!==e)&&(e>this.__selectionStartOnMouseDown?(this.selectionStart=this.__selectionStartOnMouseDown,this.selectionEnd=e):(this.selectionStart=e,this.selectionEnd=this.__selectionStartOnMouseDown),this.selectionStart===i&&this.selectionEnd===n||(this.restartCursorIfNeeded(),this._fireSelectionChanged(),this._updateTextarea(),this.renderCursorOrSelection()))}},
/**
         * @private
         */
_setEditingProps:function(){this.hoverCursor="text",this.canvas&&(this.canvas.defaultCursor=this.canvas.moveCursor="text"),this.borderColor=this.editingBorderColor,this.hasControls=this.selectable=!1,this.lockMovementX=this.lockMovementY=!0},
/**
         * convert from textarea to grapheme indexes
         */
fromStringToGraphemeSelection:function(t,e,i){var n=i.slice(0,t),r=C.util.string.graphemeSplit(n).length;if(t===e)return{selectionStart:r,selectionEnd:r};var o=i.slice(t,e);return{selectionStart:r,selectionEnd:r+C.util.string.graphemeSplit(o).length}},
/**
         * convert from fabric to textarea values
         */
fromGraphemeToStringSelection:function(t,e,i){var n=i.slice(0,t).join("").length;return t===e?{selectionStart:n,selectionEnd:n}:{selectionStart:n,selectionEnd:n+i.slice(t,e).join("").length}},
/**
         * @private
         */
_updateTextarea:function(){if(this.cursorOffsetCache={},this.hiddenTextarea){if(!this.inCompositionMode){var t=this.fromGraphemeToStringSelection(this.selectionStart,this.selectionEnd,this._text);this.hiddenTextarea.selectionStart=t.selectionStart,this.hiddenTextarea.selectionEnd=t.selectionEnd}this.updateTextareaPosition()}},
/**
         * @private
         */
updateFromTextArea:function(){if(this.hiddenTextarea){this.cursorOffsetCache={},this.text=this.hiddenTextarea.value,this._shouldClearDimensionCache()&&(this.initDimensions(),this.setCoords());var t=this.fromStringToGraphemeSelection(this.hiddenTextarea.selectionStart,this.hiddenTextarea.selectionEnd,this.hiddenTextarea.value);this.selectionEnd=this.selectionStart=t.selectionEnd,this.inCompositionMode||(this.selectionStart=t.selectionStart),this.updateTextareaPosition()}},
/**
         * @private
         */
updateTextareaPosition:function(){if(this.selectionStart===this.selectionEnd){var t=this._calcTextareaPosition();this.hiddenTextarea.style.left=t.left,this.hiddenTextarea.style.top=t.top}},
/**
         * @private
         * @return {Object} style contains style for hiddenTextarea
         */
_calcTextareaPosition:function(){if(!this.canvas)return{x:1,y:1};var t=this.inCompositionMode?this.compositionStart:this.selectionStart,e=this._getCursorBoundaries(t),i=this.get2DCursorLocation(t),n=i.lineIndex,r=i.charIndex,o=this.getValueOfPropertyAt(n,r,"fontSize")*this.lineHeight,s=e.leftOffset,a=this.calcTransformMatrix(),l={x:e.left+s,y:e.top+e.topOffset+o},c=this.canvas.getRetinaScaling(),h=this.canvas.upperCanvasEl,u=h.width/c,f=h.height/c,d=u-o,p=f-o,g=h.clientWidth/u,v=h.clientHeight/f;return l=C.util.transformPoint(l,a),(l=C.util.transformPoint(l,this.canvas.viewportTransform)).x*=g,l.y*=v,l.x<0&&(l.x=0),l.x>d&&(l.x=d),l.y<0&&(l.y=0),l.y>p&&(l.y=p),l.x+=this.canvas._offset.left,l.y+=this.canvas._offset.top,{left:l.x+"px",top:l.y+"px",fontSize:o+"px",charHeight:o}},
/**
         * @private
         */
_saveEditingProps:function(){this._savedProps={hasControls:this.hasControls,borderColor:this.borderColor,lockMovementX:this.lockMovementX,lockMovementY:this.lockMovementY,hoverCursor:this.hoverCursor,selectable:this.selectable,defaultCursor:this.canvas&&this.canvas.defaultCursor,moveCursor:this.canvas&&this.canvas.moveCursor}},
/**
         * @private
         */
_restoreEditingProps:function(){this._savedProps&&(this.hoverCursor=this._savedProps.hoverCursor,this.hasControls=this._savedProps.hasControls,this.borderColor=this._savedProps.borderColor,this.selectable=this._savedProps.selectable,this.lockMovementX=this._savedProps.lockMovementX,this.lockMovementY=this._savedProps.lockMovementY,this.canvas&&(this.canvas.defaultCursor=this._savedProps.defaultCursor,this.canvas.moveCursor=this._savedProps.moveCursor))},
/**
         * Exits from editing state
         * @return {fabric.IText} thisArg
         * @chainable
         */
exitEditing:function(){var t=this._textBeforeEdit!==this.text,e=this.hiddenTextarea;return this.selected=!1,this.isEditing=!1,this.selectionEnd=this.selectionStart,e&&(e.blur&&e.blur(),e.parentNode&&e.parentNode.removeChild(e)),this.hiddenTextarea=null,this.abortCursorAnimation(),this._restoreEditingProps(),this._currentCursorOpacity=0,this._shouldClearDimensionCache()&&(this.initDimensions(),this.setCoords()),this.fire("editing:exited"),t&&this.fire("modified"),this.canvas&&(this.canvas.off("mouse:move",this.mouseMoveHandler),this.canvas.fire("text:editing:exited",{target:this}),t&&this.canvas.fire("object:modified",{target:this})),this},
/**
         * @private
         */
_removeExtraneousStyles:function(){for(var t in this.styles)this._textLines[t]||delete this.styles[t]},
/**
         * remove and reflow a style block from start to end.
         * @param {Number} start linear start position for removal (included in removal)
         * @param {Number} end linear end position for removal ( excluded from removal )
         */
removeStyleFromTo:function(t,e){var i,n,r=this.get2DCursorLocation(t,!0),o=this.get2DCursorLocation(e,!0),s=r.lineIndex,a=r.charIndex,l=o.lineIndex,c=o.charIndex;if(s!==l){if(this.styles[s])for(i=a;i<this._unwrappedTextLines[s].length;i++)delete this.styles[s][i];if(this.styles[l])for(i=c;i<this._unwrappedTextLines[l].length;i++)(n=this.styles[l][i])&&(this.styles[s]||(this.styles[s]={}),this.styles[s][a+i-c]=n);for(i=s+1;i<=l;i++)delete this.styles[i];this.shiftLineStyles(l,s-l)}else if(this.styles[s]){n=this.styles[s];var h,u,f=c-a;for(i=a;i<c;i++)delete n[i];for(u in this.styles[s])(h=parseInt(u,10))>=c&&(n[h-f]=n[u],delete n[u])}},
/**
         * Shifts line styles up or down
         * @param {Number} lineIndex Index of a line
         * @param {Number} offset Can any number?
         */
shiftLineStyles:function(t,e){var i=x(this.styles);for(var n in this.styles){var r=parseInt(n,10);r>t&&(this.styles[r+e]=i[r],i[r-e]||delete this.styles[r])}},restartCursorIfNeeded:function(){this._currentTickState&&!this._currentTickState.isAborted&&this._currentTickCompleteState&&!this._currentTickCompleteState.isAborted||this.initDelayedCursor()},
/**
         * Handle insertion of more consecutive style lines for when one or more
         * newlines gets added to the text. Since current style needs to be shifted
         * first we shift the current style of the number lines needed, then we add
         * new lines from the last to the first.
         * @param {Number} lineIndex Index of a line
         * @param {Number} charIndex Index of a char
         * @param {Number} qty number of lines to add
         * @param {Array} copiedStyle Array of objects styles
         */
insertNewlineStyleObject:function(t,e,i,n){var r,o={},s=!1,a=this._unwrappedTextLines[t].length===e;for(var l in i||(i=1),this.shiftLineStyles(t,i),this.styles[t]&&(r=this.styles[t][0===e?e:e-1]),this.styles[t]){var c=parseInt(l,10);c>=e&&(s=!0,o[c-e]=this.styles[t][l],a&&0===e||delete this.styles[t][l])}var h=!1;for(s&&!a&&(this.styles[t+i]=o,h=!0),h&&i--;i>0;)n&&n[i-1]?this.styles[t+i]={0:x(n[i-1])}:r?this.styles[t+i]={0:x(r)}:delete this.styles[t+i],i--;this._forceClearCache=!0},
/**
         * Inserts style object for a given line/char index
         * @param {Number} lineIndex Index of a line
         * @param {Number} charIndex Index of a char
         * @param {Number} quantity number Style object to insert, if given
         * @param {Array} copiedStyle array of style objects
         */
insertCharStyleObject:function(t,e,i,n){this.styles||(this.styles={});var r=this.styles[t],o=r?x(r):{};for(var s in i||(i=1),o){var a=parseInt(s,10);a>=e&&(r[a+i]=o[a],o[a-i]||delete r[a])}if(this._forceClearCache=!0,n)for(;i--;)Object.keys(n[i]).length&&(this.styles[t]||(this.styles[t]={}),this.styles[t][e+i]=x(n[i]));else if(r)for(var l=r[e?e-1:1];l&&i--;)this.styles[t][e+i]=x(l)},
/**
         * Inserts style object(s)
         * @param {Array} insertedText Characters at the location where style is inserted
         * @param {Number} start cursor index for inserting style
         * @param {Array} [copiedStyle] array of style objects to insert.
         */
insertNewStyleBlock:function(t,e,i){for(var n=this.get2DCursorLocation(e,!0),r=[0],o=0,s=0;s<t.length;s++)"\n"===t[s]?r[++o]=0:r[o]++;for(r[0]>0&&(this.insertCharStyleObject(n.lineIndex,n.charIndex,r[0],i),i=i&&i.slice(r[0]+1)),o&&this.insertNewlineStyleObject(n.lineIndex,n.charIndex+r[0],o),s=1;s<o;s++)r[s]>0?this.insertCharStyleObject(n.lineIndex+s,0,r[s],i):i&&this.styles[n.lineIndex+s]&&i[0]&&(this.styles[n.lineIndex+s][0]=i[0]),i=i&&i.slice(r[s]+1);r[s]>0&&this.insertCharStyleObject(n.lineIndex+s,0,r[s],i)},
/**
         * Set the selectionStart and selectionEnd according to the new position of cursor
         * mimic the key - mouse navigation when shift is pressed.
         */
setSelectionStartEndWithShift:function(t,e,i){i<=t?(e===t?this._selectionDirection="left":"right"===this._selectionDirection&&(this._selectionDirection="left",this.selectionEnd=t),this.selectionStart=i):i>t&&i<e?"right"===this._selectionDirection?this.selectionEnd=i:this.selectionStart=i:(e===t?this._selectionDirection="right":"left"===this._selectionDirection&&(this._selectionDirection="right",this.selectionStart=e),this.selectionEnd=i)},setSelectionInBoundaries:function(){var t=this.text.length;this.selectionStart>t?this.selectionStart=t:this.selectionStart<0&&(this.selectionStart=0),this.selectionEnd>t?this.selectionEnd=t:this.selectionEnd<0&&(this.selectionEnd=0)}}),C.util.object.extend(C.IText.prototype,
/** @lends fabric.IText.prototype */
{
/**
       * Initializes "dbclick" event handler
       */
initDoubleClickSimulation:function(){this.__lastClickTime=+new Date,this.__lastLastClickTime=+new Date,this.__lastPointer={},this.on("mousedown",this.onMouseDown)},
/**
       * Default event handler to simulate triple click
       * @private
       */
onMouseDown:function(t){if(this.canvas){this.__newClickTime=+new Date;var e=t.pointer;this.isTripleClick(e)&&(this.fire("tripleclick",t),this._stopEvent(t.e)),this.__lastLastClickTime=this.__lastClickTime,this.__lastClickTime=this.__newClickTime,this.__lastPointer=e,this.__lastIsEditing=this.isEditing,this.__lastSelected=this.selected}},isTripleClick:function(t){return this.__newClickTime-this.__lastClickTime<500&&this.__lastClickTime-this.__lastLastClickTime<500&&this.__lastPointer.x===t.x&&this.__lastPointer.y===t.y},
/**
       * @private
       */
_stopEvent:function(t){t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation()},
/**
       * Initializes event handlers related to cursor or selection
       */
initCursorSelectionHandlers:function(){this.initMousedownHandler(),this.initMouseupHandler(),this.initClicks()},
/**
       * Default handler for double click, select a word
       */
doubleClickHandler:function(t){this.isEditing&&this.selectWord(this.getSelectionStartFromPointer(t.e))},
/**
       * Default handler for triple click, select a line
       */
tripleClickHandler:function(t){this.isEditing&&this.selectLine(this.getSelectionStartFromPointer(t.e))},
/**
       * Initializes double and triple click event handlers
       */
initClicks:function(){this.on("mousedblclick",this.doubleClickHandler),this.on("tripleclick",this.tripleClickHandler)},
/**
       * Default event handler for the basic functionalities needed on _mouseDown
       * can be overridden to do something different.
       * Scope of this implementation is: find the click position, set selectionStart
       * find selectionEnd, initialize the drawing of either cursor or selection area
       * initializing a mousedDown on a text area will cancel fabricjs knowledge of
       * current compositionMode. It will be set to false.
       */
_mouseDownHandler:function(t){!this.canvas||!this.editable||t.e.button&&1!==t.e.button||(this.__isMousedown=!0,this.selected&&(this.inCompositionMode=!1,this.setCursorByClick(t.e)),this.isEditing&&(this.__selectionStartOnMouseDown=this.selectionStart,this.selectionStart===this.selectionEnd&&this.abortCursorAnimation(),this.renderCursorOrSelection()))},
/**
       * Default event handler for the basic functionalities needed on mousedown:before
       * can be overridden to do something different.
       * Scope of this implementation is: verify the object is already selected when mousing down
       */
_mouseDownHandlerBefore:function(t){!this.canvas||!this.editable||t.e.button&&1!==t.e.button||(this.selected=this===this.canvas._activeObject)},
/**
       * Initializes "mousedown" event handler
       */
initMousedownHandler:function(){this.on("mousedown",this._mouseDownHandler),this.on("mousedown:before",this._mouseDownHandlerBefore)},
/**
       * Initializes "mouseup" event handler
       */
initMouseupHandler:function(){this.on("mouseup",this.mouseUpHandler)},
/**
       * standard handler for mouse up, overridable
       * @private
       */
mouseUpHandler:function(t){if(this.__isMousedown=!1,!(!this.editable||this.group||t.transform&&t.transform.actionPerformed||t.e.button&&1!==t.e.button)){if(this.canvas){var e=this.canvas._activeObject;if(e&&e!==this)return}this.__lastSelected&&!this.__corner?(this.selected=!1,this.__lastSelected=!1,this.enterEditing(t.e),this.selectionStart===this.selectionEnd?this.initDelayedCursor(!0):this.renderCursorOrSelection()):this.selected=!0}},
/**
       * Changes cursor location in a text depending on passed pointer (x/y) object
       * @param {Event} e Event object
       */
setCursorByClick:function(t){var e=this.getSelectionStartFromPointer(t),i=this.selectionStart,n=this.selectionEnd;t.shiftKey?this.setSelectionStartEndWithShift(i,n,e):(this.selectionStart=e,this.selectionEnd=e),this.isEditing&&(this._fireSelectionChanged(),this._updateTextarea())},
/**
       * Returns index of a character corresponding to where an object was clicked
       * @param {Event} e Event object
       * @return {Number} Index of a character
       */
getSelectionStartFromPointer:function(t){for(var e,i=this.getLocalPointer(t),n=0,r=0,o=0,s=0,a=0,l=0,c=this._textLines.length;l<c&&o<=i.y;l++)o+=this.getHeightOfLine(l)*this.scaleY,a=l,l>0&&(s+=this._textLines[l-1].length+this.missingNewlineOffset(l-1));r=this._getLineLeftOffset(a)*this.scaleX,e=this._textLines[a],"rtl"===this.direction&&(i.x=this.width*this.scaleX-i.x+r);for(var h=0,u=e.length;h<u&&(n=r,(r+=this.__charBounds[a][h].kernedWidth*this.scaleX)<=i.x);h++)s++;return this._getNewSelectionStartFromOffset(i,n,r,s,u)},
/**
       * @private
       */
_getNewSelectionStartFromOffset:function(t,e,i,n,r){var o=t.x-e,s=i-t.x,a=n+(s>o||s<0?0:1);return this.flipX&&(a=r-a),a>this._text.length&&(a=this._text.length),a}}),C.util.object.extend(C.IText.prototype,
/** @lends fabric.IText.prototype */
{
/**
       * Initializes hidden textarea (needed to bring up keyboard in iOS)
       */
initHiddenTextarea:function(){this.hiddenTextarea=C.document.createElement("textarea"),this.hiddenTextarea.setAttribute("autocapitalize","off"),this.hiddenTextarea.setAttribute("autocorrect","off"),this.hiddenTextarea.setAttribute("autocomplete","off"),this.hiddenTextarea.setAttribute("spellcheck","false"),this.hiddenTextarea.setAttribute("data-fabric-hiddentextarea",""),this.hiddenTextarea.setAttribute("wrap","off");var t=this._calcTextareaPosition();this.hiddenTextarea.style.cssText="position: absolute; top: "+t.top+"; left: "+t.left+"; z-index: -999; opacity: 0; width: 1px; height: 1px; font-size: 1px; padding-top: "+t.fontSize+";",this.hiddenTextareaContainer?this.hiddenTextareaContainer.appendChild(this.hiddenTextarea):C.document.body.appendChild(this.hiddenTextarea),C.util.addListener(this.hiddenTextarea,"keydown",this.onKeyDown.bind(this)),C.util.addListener(this.hiddenTextarea,"keyup",this.onKeyUp.bind(this)),C.util.addListener(this.hiddenTextarea,"input",this.onInput.bind(this)),C.util.addListener(this.hiddenTextarea,"copy",this.copy.bind(this)),C.util.addListener(this.hiddenTextarea,"cut",this.copy.bind(this)),C.util.addListener(this.hiddenTextarea,"paste",this.paste.bind(this)),C.util.addListener(this.hiddenTextarea,"compositionstart",this.onCompositionStart.bind(this)),C.util.addListener(this.hiddenTextarea,"compositionupdate",this.onCompositionUpdate.bind(this)),C.util.addListener(this.hiddenTextarea,"compositionend",this.onCompositionEnd.bind(this)),!this._clickHandlerInitialized&&this.canvas&&(C.util.addListener(this.canvas.upperCanvasEl,"click",this.onClick.bind(this)),this._clickHandlerInitialized=!0)},
/**
       * For functionalities on keyDown
       * Map a special key to a function of the instance/prototype
       * If you need different behaviour for ESC or TAB or arrows, you have to change
       * this map setting the name of a function that you build on the fabric.Itext or
       * your prototype.
       * the map change will affect all Instances unless you need for only some text Instances
       * in that case you have to clone this object and assign your Instance.
       * this.keysMap = fabric.util.object.clone(this.keysMap);
       * The function must be in fabric.Itext.prototype.myFunction And will receive event as args[0]
       */
keysMap:{9:"exitEditing",27:"exitEditing",33:"moveCursorUp",34:"moveCursorDown",35:"moveCursorRight",36:"moveCursorLeft",37:"moveCursorLeft",38:"moveCursorUp",39:"moveCursorRight",40:"moveCursorDown"},keysMapRtl:{9:"exitEditing",27:"exitEditing",33:"moveCursorUp",34:"moveCursorDown",35:"moveCursorLeft",36:"moveCursorRight",37:"moveCursorRight",38:"moveCursorUp",39:"moveCursorLeft",40:"moveCursorDown"},
/**
       * For functionalities on keyUp + ctrl || cmd
       */
ctrlKeysMapUp:{67:"copy",88:"cut"},
/**
       * For functionalities on keyDown + ctrl || cmd
       */
ctrlKeysMapDown:{65:"selectAll"},onClick:function(){this.hiddenTextarea&&this.hiddenTextarea.focus()},
/**
       * Handles keydown event
       * only used for arrows and combination of modifier keys.
       * @param {Event} e Event object
       */
onKeyDown:function(t){if(this.isEditing){var e="rtl"===this.direction?this.keysMapRtl:this.keysMap;if(t.keyCode in e)this[e[t.keyCode]](t);else{if(!(t.keyCode in this.ctrlKeysMapDown)||!t.ctrlKey&&!t.metaKey)return;this[this.ctrlKeysMapDown[t.keyCode]](t)}t.stopImmediatePropagation(),t.preventDefault(),t.keyCode>=33&&t.keyCode<=40?(this.inCompositionMode=!1,this.clearContextTop(),this.renderCursorOrSelection()):this.canvas&&this.canvas.requestRenderAll()}},
/**
       * Handles keyup event
       * We handle KeyUp because ie11 and edge have difficulties copy/pasting
       * if a copy/cut event fired, keyup is dismissed
       * @param {Event} e Event object
       */
onKeyUp:function(t){!this.isEditing||this._copyDone||this.inCompositionMode?this._copyDone=!1:t.keyCode in this.ctrlKeysMapUp&&(t.ctrlKey||t.metaKey)&&(this[this.ctrlKeysMapUp[t.keyCode]](t),t.stopImmediatePropagation(),t.preventDefault(),this.canvas&&this.canvas.requestRenderAll())},
/**
       * Handles onInput event
       * @param {Event} e Event object
       */
onInput:function(t){var e=this.fromPaste;if(this.fromPaste=!1,t&&t.stopPropagation(),this.isEditing){var i,n,r,o,s,a=this._splitTextIntoLines(this.hiddenTextarea.value).graphemeText,l=this._text.length,c=a.length,h=c-l,u=this.selectionStart,f=this.selectionEnd,d=u!==f;if(""===this.hiddenTextarea.value)return this.styles={},this.updateFromTextArea(),this.fire("changed"),void(this.canvas&&(this.canvas.fire("text:changed",{target:this}),this.canvas.requestRenderAll()));var p=this.fromStringToGraphemeSelection(this.hiddenTextarea.selectionStart,this.hiddenTextarea.selectionEnd,this.hiddenTextarea.value),g=u>p.selectionStart;d?(i=this._text.slice(u,f),h+=f-u):c<l&&(i=g?this._text.slice(f+h,f):this._text.slice(u,u-h)),n=a.slice(p.selectionEnd-h,p.selectionEnd),i&&i.length&&(n.length&&(r=this.getSelectionStyles(u,u+1,!1),r=n.map((function(){return r[0]}))),d?(o=u,s=f):g?(o=f-i.length,s=f):(o=f,s=f+i.length),this.removeStyleFromTo(o,s)),n.length&&(e&&n.join("")===C.copiedText&&!C.disableStyleCopyPaste&&(r=C.copiedTextStyle),this.insertNewStyleBlock(n,u,r)),this.updateFromTextArea(),this.fire("changed"),this.canvas&&(this.canvas.fire("text:changed",{target:this}),this.canvas.requestRenderAll())}},
/**
       * Composition start
       */
onCompositionStart:function(){this.inCompositionMode=!0},
/**
       * Composition end
       */
onCompositionEnd:function(){this.inCompositionMode=!1},
// /**
//  * Composition update
//  */
onCompositionUpdate:function(t){this.compositionStart=t.target.selectionStart,this.compositionEnd=t.target.selectionEnd,this.updateTextareaPosition()},
/**
       * Copies selected text
       * @param {Event} e Event object
       */
copy:function(){this.selectionStart!==this.selectionEnd&&(C.copiedText=this.getSelectedText(),C.disableStyleCopyPaste?C.copiedTextStyle=null:C.copiedTextStyle=this.getSelectionStyles(this.selectionStart,this.selectionEnd,!0),this._copyDone=!0)},
/**
       * Pastes text
       * @param {Event} e Event object
       */
paste:function(){this.fromPaste=!0},
/**
       * @private
       * @param {Event} e Event object
       * @return {Object} Clipboard data object
       */
_getClipboardData:function(t){return t&&t.clipboardData||C.window.clipboardData},
/**
       * Finds the width in pixels before the cursor on the same line
       * @private
       * @param {Number} lineIndex
       * @param {Number} charIndex
       * @return {Number} widthBeforeCursor width before cursor
       */
_getWidthBeforeCursor:function(t,e){var i,n=this._getLineLeftOffset(t);return e>0&&(n+=(i=this.__charBounds[t][e-1]).left+i.width),n},
/**
       * Gets start offset of a selection
       * @param {Event} e Event object
       * @param {Boolean} isRight
       * @return {Number}
       */
getDownCursorOffset:function(t,e){var i=this._getSelectionForOffset(t,e),n=this.get2DCursorLocation(i),r=n.lineIndex;if(r===this._textLines.length-1||t.metaKey||34===t.keyCode)return this._text.length-i;var o=n.charIndex,s=this._getWidthBeforeCursor(r,o),a=this._getIndexOnLine(r+1,s);return this._textLines[r].slice(o).length+a+1+this.missingNewlineOffset(r)},
/**
       * private
       * Helps finding if the offset should be counted from Start or End
       * @param {Event} e Event object
       * @param {Boolean} isRight
       * @return {Number}
       */
_getSelectionForOffset:function(t,e){return t.shiftKey&&this.selectionStart!==this.selectionEnd&&e?this.selectionEnd:this.selectionStart},
/**
       * @param {Event} e Event object
       * @param {Boolean} isRight
       * @return {Number}
       */
getUpCursorOffset:function(t,e){var i=this._getSelectionForOffset(t,e),n=this.get2DCursorLocation(i),r=n.lineIndex;if(0===r||t.metaKey||33===t.keyCode)return-i;var o=n.charIndex,s=this._getWidthBeforeCursor(r,o),a=this._getIndexOnLine(r-1,s),l=this._textLines[r].slice(0,o),c=this.missingNewlineOffset(r-1);return-this._textLines[r-1].length+a-l.length+(1-c)},
/**
       * for a given width it founds the matching character.
       * @private
       */
_getIndexOnLine:function(t,e){for(var i,n,r=this._textLines[t],o=this._getLineLeftOffset(t),s=0,a=0,l=r.length;a<l;a++)if((o+=i=this.__charBounds[t][a].width)>e){n=!0;var c=o-i,h=o,u=Math.abs(c-e);s=Math.abs(h-e)<u?a:a-1;break}return n||(s=r.length-1),s},
/**
       * Moves cursor down
       * @param {Event} e Event object
       */
moveCursorDown:function(t){this.selectionStart>=this._text.length&&this.selectionEnd>=this._text.length||this._moveCursorUpOrDown("Down",t)},
/**
       * Moves cursor up
       * @param {Event} e Event object
       */
moveCursorUp:function(t){0===this.selectionStart&&0===this.selectionEnd||this._moveCursorUpOrDown("Up",t)},
/**
       * Moves cursor up or down, fires the events
       * @param {String} direction 'Up' or 'Down'
       * @param {Event} e Event object
       */
_moveCursorUpOrDown:function(t,e){var i=this["get"+t+"CursorOffset"](e,"right"===this._selectionDirection);e.shiftKey?this.moveCursorWithShift(i):this.moveCursorWithoutShift(i),0!==i&&(this.setSelectionInBoundaries(),this.abortCursorAnimation(),this._currentCursorOpacity=1,this.initDelayedCursor(),this._fireSelectionChanged(),this._updateTextarea())},
/**
       * Moves cursor with shift
       * @param {Number} offset
       */
moveCursorWithShift:function(t){var e="left"===this._selectionDirection?this.selectionStart+t:this.selectionEnd+t;return this.setSelectionStartEndWithShift(this.selectionStart,this.selectionEnd,e),0!==t},
/**
       * Moves cursor up without shift
       * @param {Number} offset
       */
moveCursorWithoutShift:function(t){return t<0?(this.selectionStart+=t,this.selectionEnd=this.selectionStart):(this.selectionEnd+=t,this.selectionStart=this.selectionEnd),0!==t},
/**
       * Moves cursor left
       * @param {Event} e Event object
       */
moveCursorLeft:function(t){0===this.selectionStart&&0===this.selectionEnd||this._moveCursorLeftOrRight("Left",t)},
/**
       * @private
       * @return {Boolean} true if a change happened
       */
_move:function(t,e,i){var n;if(t.altKey)n=this["findWordBoundary"+i](this[e]);else{if(!t.metaKey&&35!==t.keyCode&&36!==t.keyCode)return this[e]+="Left"===i?-1:1,!0;n=this["findLineBoundary"+i](this[e])}if(void 0!==n&&this[e]!==n)return this[e]=n,!0},
/**
       * @private
       */
_moveLeft:function(t,e){return this._move(t,e,"Left")},
/**
       * @private
       */
_moveRight:function(t,e){return this._move(t,e,"Right")},
/**
       * Moves cursor left without keeping selection
       * @param {Event} e
       */
moveCursorLeftWithoutShift:function(t){var e=!0;return this._selectionDirection="left",this.selectionEnd===this.selectionStart&&0!==this.selectionStart&&(e=this._moveLeft(t,"selectionStart")),this.selectionEnd=this.selectionStart,e},
/**
       * Moves cursor left while keeping selection
       * @param {Event} e
       */
moveCursorLeftWithShift:function(t){return"right"===this._selectionDirection&&this.selectionStart!==this.selectionEnd?this._moveLeft(t,"selectionEnd"):0!==this.selectionStart?(this._selectionDirection="left",this._moveLeft(t,"selectionStart")):void 0},
/**
       * Moves cursor right
       * @param {Event} e Event object
       */
moveCursorRight:function(t){this.selectionStart>=this._text.length&&this.selectionEnd>=this._text.length||this._moveCursorLeftOrRight("Right",t)},
/**
       * Moves cursor right or Left, fires event
       * @param {String} direction 'Left', 'Right'
       * @param {Event} e Event object
       */
_moveCursorLeftOrRight:function(t,e){var i="moveCursor"+t+"With";this._currentCursorOpacity=1,e.shiftKey?i+="Shift":i+="outShift",this[i](e)&&(this.abortCursorAnimation(),this.initDelayedCursor(),this._fireSelectionChanged(),this._updateTextarea())},
/**
       * Moves cursor right while keeping selection
       * @param {Event} e
       */
moveCursorRightWithShift:function(t){return"left"===this._selectionDirection&&this.selectionStart!==this.selectionEnd?this._moveRight(t,"selectionStart"):this.selectionEnd!==this._text.length?(this._selectionDirection="right",this._moveRight(t,"selectionEnd")):void 0},
/**
       * Moves cursor right without keeping selection
       * @param {Event} e Event object
       */
moveCursorRightWithoutShift:function(t){var e=!0;return this._selectionDirection="right",this.selectionStart===this.selectionEnd?(e=this._moveRight(t,"selectionStart"),this.selectionEnd=this.selectionStart):this.selectionStart=this.selectionEnd,e},
/**
       * Removes characters from start/end
       * start/end ar per grapheme position in _text array.
       *
       * @param {Number} start
       * @param {Number} end default to start + 1
       */
removeChars:function(t,e){void 0===e&&(e=t+1),this.removeStyleFromTo(t,e),this._text.splice(t,e-t),this.text=this._text.join(""),this.set("dirty",!0),this._shouldClearDimensionCache()&&(this.initDimensions(),this.setCoords()),this._removeExtraneousStyles()},
/**
       * insert characters at start position, before start position.
       * start  equal 1 it means the text get inserted between actual grapheme 0 and 1
       * if style array is provided, it must be as the same length of text in graphemes
       * if end is provided and is bigger than start, old text is replaced.
       * start/end ar per grapheme position in _text array.
       *
       * @param {String} text text to insert
       * @param {Array} style array of style objects
       * @param {Number} start
       * @param {Number} end default to start + 1
       */
insertChars:function(t,e,i,n){void 0===n&&(n=i),n>i&&this.removeStyleFromTo(i,n);var r=C.util.string.graphemeSplit(t);this.insertNewStyleBlock(r,i,e),this._text=[].concat(this._text.slice(0,i),r,this._text.slice(n)),this.text=this._text.join(""),this.set("dirty",!0),this._shouldClearDimensionCache()&&(this.initDimensions(),this.setCoords()),this._removeExtraneousStyles()}}),function(){var t=C.util.toFixed,e=/  +/g;C.util.object.extend(C.Text.prototype,
/** @lends fabric.Text.prototype */
{
/**
         * Returns SVG representation of an instance
         * @param {Function} [reviver] Method for further parsing of svg representation.
         * @return {String} svg representation of an instance
         */
_toSVG:function(){var t=this._getSVGLeftTopOffsets(),e=this._getSVGTextAndBg(t.textTop,t.textLeft);return this._wrapSVGTextAndBg(e)},
/**
         * Returns svg representation of an instance
         * @param {Function} [reviver] Method for further parsing of svg representation.
         * @return {String} svg representation of an instance
         */
toSVG:function(t){return this._createBaseSVGMarkup(this._toSVG(),{reviver:t,noStyle:!0,withShadow:!0})},
/**
         * @private
         */
_getSVGLeftTopOffsets:function(){return{textLeft:-this.width/2,textTop:-this.height/2,lineTop:this.getHeightOfLine(0)}},
/**
         * @private
         */
_wrapSVGTextAndBg:function(t){var e=this.getSvgTextDecoration(this);return[t.textBgRects.join(""),'\t\t<text xml:space="preserve" ',this.fontFamily?'font-family="'+this.fontFamily.replace(/"/g,"'")+'" ':"",this.fontSize?'font-size="'+this.fontSize+'" ':"",this.fontStyle?'font-style="'+this.fontStyle+'" ':"",this.fontWeight?'font-weight="'+this.fontWeight+'" ':"",e?'text-decoration="'+e+'" ':"",'style="',this.getSvgStyles(!0),'"',this.addPaintOrder()," >",t.textSpans.join(""),"</text>\n"]},
/**
         * @private
         * @param {Number} textTopOffset Text top offset
         * @param {Number} textLeftOffset Text left offset
         * @return {Object}
         */
_getSVGTextAndBg:function(t,e){var i,n=[],r=[],o=t;this._setSVGBg(r);for(var s=0,a=this._textLines.length;s<a;s++)i=this._getLineLeftOffset(s),(this.textBackgroundColor||this.styleHas("textBackgroundColor",s))&&this._setSVGTextLineBg(r,s,e+i,o),this._setSVGTextLineText(n,s,e+i,o),o+=this.getHeightOfLine(s);return{textSpans:n,textBgRects:r}},
/**
         * @private
         */
_createTextCharSpan:function(i,n,r,o){var s=i!==i.trim()||i.match(e),a=this.getSvgSpanStyles(n,s),l=a?'style="'+a+'"':"",c=n.deltaY,h="",u=C.Object.NUM_FRACTION_DIGITS;return c&&(h=' dy="'+t(c,u)+'" '),['<tspan x="',t(r,u),'" y="',t(o,u),'" ',h,l,">",C.util.string.escapeXml(i),"</tspan>"].join("")},_setSVGTextLineText:function(t,e,i,n){var r,o,s,a,l,c=this.getHeightOfLine(e),h=-1!==this.textAlign.indexOf("justify"),u="",f=0,d=this._textLines[e];n+=c*(1-this._fontSizeFraction)/this.lineHeight;for(var p=0,g=d.length-1;p<=g;p++)l=p===g||this.charSpacing,u+=d[p],s=this.__charBounds[e][p],0===f?(i+=s.kernedWidth-s.width,f+=s.width):f+=s.kernedWidth,h&&!l&&this._reSpaceAndTab.test(d[p])&&(l=!0),l||(r=r||this.getCompleteStyleDeclaration(e,p),o=this.getCompleteStyleDeclaration(e,p+1),l=C.util.hasStyleChanged(r,o,!0)),l&&(a=this._getStyleDeclaration(e,p)||{},t.push(this._createTextCharSpan(u,a,i,n)),u="",r=o,i+=f,f=0)},_pushTextBgRect:function(e,i,n,r,o,s){var a=C.Object.NUM_FRACTION_DIGITS;e.push("\t\t<rect ",this._getFillAttributes(i),' x="',t(n,a),'" y="',t(r,a),'" width="',t(o,a),'" height="',t(s,a),'"></rect>\n')},_setSVGTextLineBg:function(t,e,i,n){for(var r,o,s=this._textLines[e],a=this.getHeightOfLine(e)/this.lineHeight,l=0,c=0,h=this.getValueOfPropertyAt(e,0,"textBackgroundColor"),u=0,f=s.length;u<f;u++)r=this.__charBounds[e][u],(o=this.getValueOfPropertyAt(e,u,"textBackgroundColor"))!==h?(h&&this._pushTextBgRect(t,h,i+c,n,l,a),c=r.left,l=r.width,h=o):l+=r.kernedWidth;o&&this._pushTextBgRect(t,o,i+c,n,l,a)},
/**
         * Adobe Illustrator (at least CS5) is unable to render rgba()-based fill values
         * we work around it by "moving" alpha channel into opacity attribute and setting fill's alpha to 1
         *
         * @private
         * @param {*} value
         * @return {String}
         */
_getFillAttributes:function(t){var e=t&&"string"==typeof t?new C.Color(t):"";return e&&e.getSource()&&1!==e.getAlpha()?'opacity="'+e.getAlpha()+'" fill="'+e.setAlpha(1).toRgb()+'"':'fill="'+t+'"'},
/**
         * @private
         */
_getSVGLineTopOffset:function(t){for(var e,i=0,n=0;n<t;n++)i+=this.getHeightOfLine(n);return e=this.getHeightOfLine(n),{lineTop:i,offset:(this._fontSizeMult-this._fontSizeFraction)*e/(this.lineHeight*this._fontSizeMult)}},
/**
         * Returns styles-string for svg-export
         * @param {Boolean} skipShadow a boolean to skip shadow filter output
         * @return {String}
         */
getSvgStyles:function(t){return C.Object.prototype.getSvgStyles.call(this,t)+" white-space: pre;"}})}(),function(t){var e=t.fabric||(t.fabric={});e.Textbox=e.util.createClass(e.IText,e.Observable,{
/**
       * Type of an object
       * @type String
       * @default
       */
type:"textbox",
/**
       * Minimum width of textbox, in pixels.
       * @type Number
       * @default
       */
minWidth:20,
/**
       * Minimum calculated width of a textbox, in pixels.
       * fixed to 2 so that an empty textbox cannot go to 0
       * and is still selectable without text.
       * @type Number
       * @default
       */
dynamicMinWidth:2,
/**
       * Cached array of text wrapping.
       * @type Array
       */
__cachedLines:null,
/**
       * Override standard Object class values
       */
lockScalingFlip:!0,
/**
       * Override standard Object class values
       * Textbox needs this on false
       */
noScaleCache:!1,
/**
       * Properties which when set cause object to change dimensions
       * @type Object
       * @private
       */
_dimensionAffectingProps:e.Text.prototype._dimensionAffectingProps.concat("width"),
/**
       * Use this regular expression to split strings in breakable lines
       * @private
       */
_wordJoiners:/[ \t\r]/,
/**
       * Use this boolean property in order to split strings that have no white space concept.
       * this is a cheap way to help with chinese/japanese
       * @type Boolean
       * @since 2.6.0
       */
splitByGrapheme:!1,
/**
       * Unlike superclass's version of this function, Textbox does not update
       * its width.
       * @private
       * @override
       */
initDimensions:function(){this.__skipDimension||(this.isEditing&&this.initDelayedCursor(),this.clearContextTop(),this._clearCache(),this.dynamicMinWidth=0,this._styleMap=this._generateStyleMap(this._splitText()),this.dynamicMinWidth>this.width&&this._set("width",this.dynamicMinWidth),-1!==this.textAlign.indexOf("justify")&&this.enlargeSpaces(),this.height=this.calcTextHeight(),this.saveState({propertySet:"_dimensionAffectingProps"}))},
/**
       * Generate an object that translates the style object so that it is
       * broken up by visual lines (new lines and automatic wrapping).
       * The original text styles object is broken up by actual lines (new lines only),
       * which is only sufficient for Text / IText
       * @private
       */
_generateStyleMap:function(t){for(var e=0,i=0,n=0,r={},o=0;o<t.graphemeLines.length;o++)"\n"===t.graphemeText[n]&&o>0?(i=0,n++,e++):!this.splitByGrapheme&&this._reSpaceAndTab.test(t.graphemeText[n])&&o>0&&(i++,n++),r[o]={line:e,offset:i},n+=t.graphemeLines[o].length,i+=t.graphemeLines[o].length;return r},
/**
       * Returns true if object has a style property or has it on a specified line
       * @param {Number} lineIndex
       * @return {Boolean}
       */
styleHas:function(t,i){if(this._styleMap&&!this.isWrapping){var n=this._styleMap[i];n&&(i=n.line)}return e.Text.prototype.styleHas.call(this,t,i)},
/**
       * Returns true if object has no styling or no styling in a line
       * @param {Number} lineIndex , lineIndex is on wrapped lines.
       * @return {Boolean}
       */
isEmptyStyles:function(t){if(!this.styles)return!0;var e,i,n=0,r=!1,o=this._styleMap[t],s=this._styleMap[t+1];for(var a in o&&(t=o.line,n=o.offset),s&&(r=s.line===t,e=s.offset),i=void 0===t?this.styles:{line:this.styles[t]})for(var l in i[a])if(l>=n&&(!r||l<e))for(var c in i[a][l])return!1;return!0},
/**
       * @param {Number} lineIndex
       * @param {Number} charIndex
       * @private
       */
_getStyleDeclaration:function(t,e){if(this._styleMap&&!this.isWrapping){var i=this._styleMap[t];if(!i)return null;t=i.line,e=i.offset+e}return this.callSuper("_getStyleDeclaration",t,e)},
/**
       * @param {Number} lineIndex
       * @param {Number} charIndex
       * @param {Object} style
       * @private
       */
_setStyleDeclaration:function(t,e,i){var n=this._styleMap[t];t=n.line,e=n.offset+e,this.styles[t][e]=i},
/**
       * @param {Number} lineIndex
       * @param {Number} charIndex
       * @private
       */
_deleteStyleDeclaration:function(t,e){var i=this._styleMap[t];t=i.line,e=i.offset+e,delete this.styles[t][e]},
/**
       * probably broken need a fix
       * Returns the real style line that correspond to the wrapped lineIndex line
       * Used just to verify if the line does exist or not.
       * @param {Number} lineIndex
       * @returns {Boolean} if the line exists or not
       * @private
       */
_getLineStyle:function(t){var e=this._styleMap[t];return!!this.styles[e.line]},
/**
       * Set the line style to an empty object so that is initialized
       * @param {Number} lineIndex
       * @param {Object} style
       * @private
       */
_setLineStyle:function(t){var e=this._styleMap[t];this.styles[e.line]={}},
/**
       * Wraps text using the 'width' property of Textbox. First this function
       * splits text on newlines, so we preserve newlines entered by the user.
       * Then it wraps each line using the width of the Textbox by calling
       * _wrapLine().
       * @param {Array} lines The string array of text that is split into lines
       * @param {Number} desiredWidth width you want to wrap to
       * @returns {Array} Array of lines
       */
_wrapText:function(t,e){var i,n=[];for(this.isWrapping=!0,i=0;i<t.length;i++)n=n.concat(this._wrapLine(t[i],i,e));return this.isWrapping=!1,n},
/**
       * Helper function to measure a string of text, given its lineIndex and charIndex offset
       * it gets called when charBounds are not available yet.
       * @param {CanvasRenderingContext2D} ctx
       * @param {String} text
       * @param {number} lineIndex
       * @param {number} charOffset
       * @returns {number}
       * @private
       */
_measureWord:function(t,e,i){var n,r=0;i=i||0;for(var o=0,s=t.length;o<s;o++){r+=this._getGraphemeBox(t[o],e,o+i,n,true).kernedWidth,n=t[o]}return r},
/**
       * Wraps a line of text using the width of the Textbox and a context.
       * @param {Array} line The grapheme array that represent the line
       * @param {Number} lineIndex
       * @param {Number} desiredWidth width you want to wrap the line to
       * @param {Number} reservedSpace space to remove from wrapping for custom functionalities
       * @returns {Array} Array of line(s) into which the given text is wrapped
       * to.
       */
_wrapLine:function(t,i,n,r){var o=0,s=this.splitByGrapheme,a=[],l=[],c=s?e.util.string.graphemeSplit(t):t.split(this._wordJoiners),h="",u=0,f=s?"":" ",d=0,p=0,g=0,v=!0,m=this._getWidthOfCharSpacing();r=r||0;0===c.length&&c.push([]),n-=r;for(var y=0;y<c.length;y++)h=s?c[y]:e.util.string.graphemeSplit(c[y]),d=this._measureWord(h,i,u),u+=h.length,(o+=p+d-m)>n&&!v?(a.push(l),l=[],o=d,v=!0):o+=m,v||s||l.push(f),l=l.concat(h),p=s?0:this._measureWord([f],i,u),u++,v=!1,d>g&&(g=d);return y&&a.push(l),g+r>this.dynamicMinWidth&&(this.dynamicMinWidth=g-m+r),a},
/**
       * Detect if the text line is ended with an hard break
       * text and itext do not have wrapping, return false
       * @param {Number} lineIndex text to split
       * @return {Boolean}
       */
isEndOfWrapping:function(t){return!this._styleMap[t+1]||this._styleMap[t+1].line!==this._styleMap[t].line},
/**
       * Detect if a line has a linebreak and so we need to account for it when moving
       * and counting style.
       * @return Number
       */
missingNewlineOffset:function(t){return this.splitByGrapheme?this.isEndOfWrapping(t)?1:0:1},
/**
      * Gets lines of text to render in the Textbox. This function calculates
      * text wrapping on the fly every time it is called.
      * @param {String} text text to split
      * @returns {Array} Array of lines in the Textbox.
      * @override
      */
_splitTextIntoLines:function(t){for(var i=e.Text.prototype._splitTextIntoLines.call(this,t),n=this._wrapText(i.lines,this.width),r=new Array(n.length),o=0;o<n.length;o++)r[o]=n[o].join("");return i.lines=r,i.graphemeLines=n,i},getMinWidth:function(){return Math.max(this.minWidth,this.dynamicMinWidth)},_removeExtraneousStyles:function(){var t={};for(var e in this._styleMap)this._textLines[e]&&(t[this._styleMap[e].line]=1);for(var e in this.styles)t[e]||delete this.styles[e]},
/**
       * Returns object representation of an instance
       * @method toObject
       * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
       * @return {Object} object representation of an instance
       */
toObject:function(t){return this.callSuper("toObject",["minWidth","splitByGrapheme"].concat(t))}}),e.Textbox.fromObject=function(t,i){var n=e.util.stylesFromArray(t.styles,t.text),r=Object.assign({},t,{styles:n});return e.Object._fromObject("Textbox",r,i,"text")}}(t),function(){var t=C.controlsUtils,e=t.scaleSkewCursorStyleHandler,i=t.scaleCursorStyleHandler,n=t.scalingEqually,r=t.scalingYOrSkewingX,o=t.scalingXOrSkewingY,s=t.scaleOrSkewActionName,a=C.Object.prototype.controls;if(a.ml=new C.Control({x:-.5,y:0,cursorStyleHandler:e,actionHandler:o,getActionName:s}),a.mr=new C.Control({x:.5,y:0,cursorStyleHandler:e,actionHandler:o,getActionName:s}),a.mb=new C.Control({x:0,y:.5,cursorStyleHandler:e,actionHandler:r,getActionName:s}),a.mt=new C.Control({x:0,y:-.5,cursorStyleHandler:e,actionHandler:r,getActionName:s}),a.tl=new C.Control({x:-.5,y:-.5,cursorStyleHandler:i,actionHandler:n}),a.tr=new C.Control({x:.5,y:-.5,cursorStyleHandler:i,actionHandler:n}),a.bl=new C.Control({x:-.5,y:.5,cursorStyleHandler:i,actionHandler:n}),a.br=new C.Control({x:.5,y:.5,cursorStyleHandler:i,actionHandler:n}),a.mtr=new C.Control({x:0,y:-.5,actionHandler:t.rotationWithSnapping,cursorStyleHandler:t.rotationStyleHandler,offsetY:-40,withConnection:!0,actionName:"rotate"}),C.Textbox){var l=C.Textbox.prototype.controls={};l.mtr=a.mtr,l.tr=a.tr,l.br=a.br,l.tl=a.tl,l.bl=a.bl,l.mt=a.mt,l.mb=a.mb,l.mr=new C.Control({x:.5,y:0,actionHandler:t.changeWidth,cursorStyleHandler:e,actionName:"resizing"}),l.ml=new C.Control({x:-.5,y:0,actionHandler:t.changeWidth,cursorStyleHandler:e,actionName:"resizing"})}}()}(eo);const no=Jr({id:"styleToolbar",state:()=>({stroke:"#000000",fill:"#transparent",strokeWidth:"thinLine",strokeDashArray:"line",edges:"rightAngle",opacity:1,fontSize:"18",fontFamily:"Arial",textAlign:"left"})}),ro=t=>"#transparent"===t?"transparent":t,oo=t=>null===t||"transparent"===t?"#transparent":t,so=t=>"thinLine"===t?1:"thickLine"===t?3:2,ao=t=>"dottedDashedLine"===t?[1,1]:"dottedLine"===t?[5,5]:[],lo=()=>{Qr().selectedElement=[];no().$reset()},co=t=>{Qr().canvasExample=JSON.parse(JSON.stringify(t))},ho=()=>{const t=Qr();t.lockStatus||(t.selectedGraphics="select")},uo=t=>t+"-"+Number(Math.random().toString().slice(3,12)+String(Date.now())).toString(36);function fo(t,e){let i;return(...n)=>{null!=i&&clearTimeout(i),i=setTimeout((()=>{t(...n),i=null}),e)}}const po=(t,e)=>{const i=Qr();t.loadFromJSON(e,(()=>{t.getObjects().forEach((t=>{var e;if(t.name=uo(t.type),"path"===t.type){let i="";null==(e=t.path)||e.forEach((t=>{i+=t[0]})),"MLMLL"===i&&(t.name=uo("arrows"))}})),i.$reset(),setTimeout((()=>{co(t)}),0)}))},go=t=>{var e,i;const n=no(),r=Qr();r.selectedElement=[];const o=null==(e=t.selected)?void 0:e.length;null==(i=t.selected)||i.forEach((t=>{var e,i;r.selectedElement.push({name:t.name,type:t.type}),1===o&&(n.stroke=oo(t.stroke),n.fill=oo(t.fill),n.strokeWidth=1===(i=t.strokeWidth)?"thinLine":3===i?"thickLine":"normalLine",n.strokeDashArray=(e=t.strokeDashArray)?e.includes(1)?"dottedDashedLine":e.includes(5)?"dottedLine":"line":"line",n.edges=0===t.edges?"rightAngle":"roundedCorners",n.opacity=t.opacity,n.fontSize=String(t.fontSize),n.fontFamily=t.fontFamily,n.textAlign=t.textAlign,"textbox"===t.type&&(n.stroke=oo(t.fill)))}))},vo=Jr({id:"uploadFile",state:()=>({inputEl:null,imageUrl:""})}),mo=[];let yo,_o,bo=-1;function xo(t){mo.splice(bo+1);const e=t.toJSON();mo.push(e),bo++}function Co(t){const e=mo[bo];t.loadFromJSON(e,(function(){t.renderAll()}))}const So=t=>{const e=t.absolutePointer;if(JSON.stringify(yo)===JSON.stringify(e)||null==e)return;const i=Math.min(yo.y,e.y),n=Math.min(yo.x,e.x),r=Math.abs(yo.x-e.x),o=Math.abs(yo.y-e.y),s=no(),a=new eo.fabric.Rect({name:uo("rect"),top:i,left:n,width:r,height:o,fill:ro(s.fill),strokeWidth:so(s.strokeWidth),stroke:ro(s.stroke),opacity:s.opacity,rx:"rightAngle"===s.edges?0:10,ry:"rightAngle"===s.edges?0:10,strokeUniform:!0,strokeDashArray:ao(s.strokeDashArray)});_o.add(a),_o.renderAll(),xo(_o),co(_o),_o.off("mouse:up",So),ho()};let wo;const To=()=>{if(null==yo)return;const t=no();wo=new eo.fabric.Ellipse({name:uo("circle"),top:yo.y,left:yo.x,rx:0,ry:0,fill:ro(t.fill),strokeWidth:so(t.strokeWidth),stroke:ro(t.stroke),opacity:t.opacity,strokeUniform:!0,strokeDashArray:ao(t.strokeDashArray)}),_o.add(wo),_o.on("mouse:move",Oo),_o.on("mouse:up",ko)},Oo=t=>{const e=t.absolutePointer;if(null!=e){let t=Math.abs(yo.x-e.x)/2,i=Math.abs(yo.y-e.y)/2;if("Shift"===Qr().KeyboardKey){const e=Math.min(t,i);t=e,i=e}const n=e.y>yo.y?yo.y:yo.y-2*i,r=e.x>yo.x?yo.x:yo.x-2*t;wo.set("rx",t),wo.set("ry",i),wo.set("top",n),wo.set("left",r),_o.requestRenderAll()}},ko=t=>{ho(),JSON.stringify(yo)!==JSON.stringify(t.absolutePointer)?(_o.off("mouse:move",Oo),_o.off("mouse:up",ko),co(_o),xo(_o)):_o.remove(wo)};let Eo;const Po=()=>{const t=no();Eo=new eo.fabric.Line([yo.x,yo.y,
// 起始点坐标
yo.x,yo.y],{name:uo("line"),strokeWidth:so(t.strokeWidth),stroke:ro(t.stroke),opacity:t.opacity,strokeUniform:!0,strokeDashArray:ao(t.strokeDashArray)}),_o.add(Eo),_o.on("mouse:move",Mo),_o.on("mouse:up",Ao)},Mo=t=>{const e=t.absolutePointer;null!=e&&(Eo.set("x2",e.x),Eo.set("y2",e.y)),_o.requestRenderAll()},Ao=t=>{ho(),JSON.stringify(yo)!==JSON.stringify(t.absolutePointer)?(_o.off("mouse:move",Mo),_o.off("mouse:up",Ao),co(_o),xo(_o)):_o.remove(Eo)};let jo=null;const Do=()=>{null!=yo&&(_o.on("mouse:move",Fo),_o.on("mouse:up",Lo))},Fo=t=>{const e=t.absolutePointer;if(null!=e){const t=(e.x-yo.x)/2+yo.x,i=yo.y,n=e.x,r=(e.y-yo.y)/2+yo.y,o=[{x:t,y:i},{x:n,y:r},{x:t,y:e.y},{x:yo.x,y:r}],s=no();null!=jo&&_o.remove(jo),jo=new eo.fabric.Polygon(o,{name:uo("rhombus"),left:Math.min(yo.x,e.x),top:Math.min(yo.y,e.y),fill:ro(s.fill),strokeWidth:so(s.strokeWidth),stroke:ro(s.stroke),opacity:s.opacity,strokeUniform:!0,strokeDashArray:ao(s.strokeDashArray)}),_o.add(jo),_o.renderAll()}},Lo=t=>{ho(),null==jo||JSON.stringify(yo)!==JSON.stringify(t.absolutePointer)?(jo=null,_o.off("mouse:move",Fo),_o.off("mouse:up",Lo),co(_o),xo(_o)):_o.remove(jo)};let Io=null;const Bo=()=>{null!=yo&&(_o.on("mouse:move",Ro),_o.on("mouse:up",No))},Ro=t=>{const e=t.absolutePointer;if(null!=e){const t=no();null!=Io&&_o.remove(Io),Io=new eo.fabric.Path(zo(yo.x,yo.y,e.x,e.y),{name:uo("arrows"),left:Math.min(yo.x,e.x),top:Math.min(yo.y,e.y),fill:ro(t.fill),strokeWidth:so(t.strokeWidth),stroke:ro(t.stroke),opacity:t.opacity,strokeUniform:!0}),_o.add(Io),_o.renderAll()}},zo=(t,e,i,n)=>{const r=180*Math.atan2(e-n,t-i)/Math.PI,o=(r+30)*Math.PI/180,s=(r-30)*Math.PI/180,a=10*Math.cos(o),l=10*Math.sin(o);let c=t-a,h=e-l,u=` M ${t} ${e}`;return u+=` L ${i} ${n}`,c=i+a,h=n+l,u+=` M ${c} ${h}`,u+=` L ${i} ${n}`,c=i+10*Math.cos(s),h=n+10*Math.sin(s),u+=` L ${c} ${h}`,u},No=t=>{ho(),null==Io||JSON.stringify(yo)!==JSON.stringify(t.absolutePointer)?(Io=null,_o.off("mouse:move",Ro),_o.off("mouse:up",No),co(_o),xo(_o)):_o.remove(Io)};let Ho=null;const Wo=()=>{const t=no();Ho=new eo.fabric.Textbox("",{name:uo("text"),left:yo.x,top:yo.y,fontSize:Number(t.fontSize),fontFamily:t.fontFamily,textAlign:t.textAlign,width:150,fill:ro(t.stroke)}),_o.add(Ho),_o.renderAll(),xo(_o),_o.setActiveObject(Ho),Ho.enterEditing(),_o.on("selection:cleared",(()=>{null!=Ho&&""===Ho.text&&(_o.remove(Ho),_o.renderAll(),xo(_o),co(_o),Ho=null)})),ho()};let Xo=null;const Vo=()=>{const t=no(),e=vo(),i=new Image;i.onload=function(){const e=i.width,n=i.height,r=10/e,o=10/n;Xo=new eo.fabric.Image(i,{name:uo("image"),left:yo.x,top:yo.y,width:e,height:n,opacity:t.opacity,scaleX:r,scaleY:o}),_o.add(Xo),_o.renderAll()},i.onerror=function(){},i.src=e.imageUrl,_o.on("mouse:move",Yo),_o.on("mouse:up",Uo)},Yo=t=>{const e=t.absolutePointer;if(null!=e){const t=Math.min(yo.y,e.y),i=Math.min(yo.x,e.x),n=Math.abs(yo.x-e.x),r=Math.abs(yo.y-e.y);null==Xo||Xo.set({left:i,top:t}),null==Xo||Xo.scaleToWidth(n),null==Xo||Xo.scaleToHeight(r),_o.renderAll()}},Uo=t=>{if(null!=Io&&JSON.stringify(yo)===JSON.stringify(t.absolutePointer))return void _o.remove(Xo);Xo=null;const e=vo(),i=Qr();e.imageUrl="",i.selectedGraphics="select",_o.off("mouse:move",Yo),_o.off("mouse:up",Uo),xo(_o),co(_o)};let Go;const qo=(t,e)=>{Go.backgroundColor=t,null!=e&&Go.forEachObject((t=>{t.set("stroke",e)})),Go.renderAll(),xo(Go),co(Go)};let Ko=0,$o=0;const Jo=t=>{var e,i;(t=>{const e=Qr();"select"===e.selectedGraphics?(t.selection=!0,t.selectionColor="rgba(100, 100, 255, 0.3)",t.selectionBorderColor="rgba(255, 255, 255, 0.3)",t.skipTargetFind=!1):(t.selectionColor="transparent",t.selectionBorderColor="rect"===e.selectedGraphics?"rgba(0, 0, 0, 0.2)":"transparent",t.skipTargetFind=!0),co(t)})(Go);const n=Qr(),r=Zr();if(3===t.button?(r.positionX=null==(e=t.pointer)?void 0:e.x,r.positionY=null==(i=t.pointer)?void 0:i.y,r.visibile=!0):r.visibile=!1,null!=t.absolutePointer)if(" "===n.KeyboardKey&&"select"===n.selectedGraphics){Go.selectionColor="transparent",Go.selectionBorderColor="transparent",Go.skipTargetFind=!0,Go.setCursor("move");const e=t.e;Ko=e.clientX,$o=e.clientY,Go.on("mouse:move",Zo),Go.on("mouse:up",Qo)}else((t,e)=>{yo=e,_o=t,_o.isDrawingMode=!1;const i=Qr(),n=no();switch(i.selectedGraphics){case"rect":_o.on("mouse:up",So);break;case"circle":To();break;case"line":Po();break;case"rhombus":Do();break;case"arrows":Bo();break;case"painting":_o.isDrawingMode=!0,_o.freeDrawingBrush.color=ro(n.stroke),_o.freeDrawingBrush.width=so(n.strokeWidth)+2,_o.renderAll(),xo(_o);break;case"text":Wo();break;case"image":Vo()}})(Go,t.absolutePointer)},Zo=t=>{const e=t.e,i=Go.viewportTransform;null!=i&&(i[4]+=e.clientX-Ko,i[5]+=e.clientY-$o),Go.requestRenderAll(),Ko=e.clientX,$o=e.clientY},Qo=()=>{Go.selection=!0,Go.selectionColor="rgba(100, 100, 255, 0.3)",Go.selectionBorderColor="rgba(255, 255, 255, 0.3)",Go.skipTargetFind=!1,Go.setCursor("default"),Go.setViewportTransform(Go.viewportTransform),Go.off("mouse:move",Zo),Go.off("mouse:up",Qo),xo(Go),co(Go)},ts=t=>{const e=document.createElement("a");let i="",n="";if("image"===t&&(i=Go.toDataURL({format:"png",multiplier:2}),n="drawing.png"),"json"===t){const t=JSON.stringify(Go.toJSON()),e=new Blob([t],{type:"application/json;charset=utf-8"});i=URL.createObjectURL(e),n="drawing.json"}e.href=i,e.download=n,e.style.display="none",document.body.appendChild(e),e.click(),document.body.removeChild(e),"json"===t&&URL.revokeObjectURL(i)},es=t=>{const e=vo();null!=e.inputEl&&(e.inputEl.accept=t,e.inputEl.click(),e.inputEl.addEventListener("change",(i=>{const n=i.target;if(null!=(null==n?void 0:n.files)){const i=null==n?void 0:n.files[0],r=new FileReader;r.onload=function(i){if(null!=i.target){const n=i.target.result;".json"===t&&po(Go,n),"image/*"===t&&(e.imageUrl=n)}},"image/*"===t&&r.readAsDataURL(i),".json"===t&&r.readAsText(i)}})))},is=(t,e)=>{const i=Go.getActiveObject();if(null!=i&&"activeSelection"===i.type){i._objects.forEach((i=>{if("rect"===i.type&&"edges"===t){const t="rightAngle"===e?0:10,n="rightAngle"===e?0:10;i.set("rx",t),i.set("ry",n)}else i.set(t,e)}))}else if(null!==i)if("rect"===i.type&&"edges"===t){const t="rightAngle"===e?0:10,n="rightAngle"===e?0:10;i.set("rx",t),i.set("ry",n)}else i.set(t,e);Go.renderAll(),xo(Go),co(Go)},ns=()=>{const t=Go.getActiveObject();if(null!=t)if("activeSelection"===t.type){let e=0,i=0;t._objects.forEach(((n,r)=>{0===r&&(e=t.left-n.left,i=t.top-n.top),n.clone((t=>{var n;let r=uo(t.type);if("path"===t.type){let e="";null==(n=t.path)||n.forEach((t=>{e+=t[0]})),"MLMLL"===e&&(r=uo("arrows"))}null!=t.left&&null!=t.top&&t.set({left:Number(t.left+e)+10,top:Number(t.top+i)+10,name:r}),Go.add(t),Go.renderAll(),xo(Go),co(Go)}))}))}else t.clone((t=>{var e;let i=uo(t.type);if("path"===t.type){let n="";null==(e=t.path)||e.forEach((t=>{n+=t[0]})),"MLMLL"===n&&(i=uo("arrows"))}t.set({left:Number(t.left)+10,top:Number(t.top)+10,name:i}),Go.add(t),Go.renderAll(),xo(Go),co(Go)}))},rs=()=>{const t=Qr(),e=Go.getActiveObject();null!=e&&("activeSelection"===e.type?e._objects.forEach((e=>{Go.remove(e),t.selectedElement=[]})):(Go.remove(e),t.selectedElement=[]),Go.discardActiveObject(),xo(Go),co(Go))},os=t=>{const e=Go.getActiveObject();null!=e&&("top"===t&&e.bringToFront(),"bottom"===t&&e.sendToBack(),"up"===t&&e.bringForward(),"down"===t&&e.sendBackwards(),xo(Go),co(Go))},ss=t=>{const e=Qr();let i=Go.getZoom();"enlarge"===t&&(i+=.1),"reduce"===t&&(i=i<=.1?.1:i-.1),"resetSize"===t&&(i=1),e.zoomLevel=parseFloat(i.toFixed(1)),as(parseFloat(i.toFixed(1))),xo(Go),co(Go)},as=t=>{if(null!=Go.height&&null!=Go.width){const e=Go.width/2,i=Go.height/2,n=e*t-e,r=i*t-i;Go.setZoom(t),Go.absolutePan({x:n,y:r})}},ls=t=>{var e;"revocation"===t&&(e=Go,bo>0&&(bo--,Co(e))),"recovery"===t&&function(t){bo<mo.length-1&&(bo++,Co(t))}(Go)},cs=()=>{const t=Go.getObjects();Go.setActiveObject(new eo.fabric.ActiveSelection(t,{canvas:Go})),Go.renderAll()},hs=t=>(Je("data-v-f094a1c6"),t=t(),Ze(),t),us={class:"menu-row"},fs=[hs((()=>Nn("span",null,"复制svg到剪切板",-1))),hs((()=>Nn("span",{class:"clue"},"Control+Shift+A",-1)))],ds=[hs((()=>Nn("span",null,"全部选中",-1))),hs((()=>Nn("span",{class:"clue"},"Control+A",-1)))],ps={class:"menu-row"},gs=[hs((()=>Nn("span",null,"上移一层",-1))),hs((()=>Nn("span",{class:"clue"},"Control+U",-1)))],vs=[hs((()=>Nn("span",null,"下移一层",-1))),hs((()=>Nn("span",{class:"clue"},"Control+P",-1)))],ms=[hs((()=>Nn("span",null,"移至顶层",-1))),hs((()=>Nn("span",{class:"clue"},"Control+T",-1)))],ys=[hs((()=>Nn("span",null,"移至底层",-1))),hs((()=>Nn("span",{class:"clue"},"Control+B",-1)))],_s={class:"menu-row"},bs=[hs((()=>Nn("span",null,"复制",-1))),hs((()=>Nn("span",{class:"clue"},"Control+D",-1)))],xs=[hs((()=>Nn("span",null,"删除",-1))),hs((()=>Nn("span",{class:"clue"},"DELETE/Backspace",-1)))],Cs=fi({name:"ContextMenu"}),Ss=(t,e)=>{const i=t.__vccOpts||t;for(const[n,r]of e)i[n]=r;return i},ws=Ss(fi({...Cs,setup(t){kr((t=>({"2787d6a0":_e(r).pointY,"2787d6a2":_e(r).pointX})));const e=Zr(),i=Qr(),n=me(),r=cr((()=>{let t=e.positionX+10,i=e.positionY+10;if(n.value){const r=n.value.offsetHeight,o=n.value.offsetWidth;e.width-t<=o&&(t-=o+20),e.height-i<=r&&(i-=r)}return{pointX:t+"px",pointY:i+"px"}})),o=t=>{e.visibile=!1,"selectAll"===t&&cs(),"copyGraphics"===t&&ns(),"deleteGraphics"===t&&rs(),"copyToClipboard"===t&&(()=>{const t=Go.toSVG(),e=document.createElement("textarea");e.value=t,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)})(),"up"!==t&&"down"!==t&&"top"!==t&&"bottom"!==t||os(t)};return(t,r)=>hi((Pn(),Dn("section",{ref_key:"menuEl",ref:n,class:"context-menu"},[Nn("div",us,[Nn("div",{class:"menu-text",onClick:r[0]||(r[0]=t=>o("copyToClipboard"))},fs),Nn("div",{class:"menu-text",onClick:r[1]||(r[1]=t=>o("selectAll"))},ds)]),hi(Nn("div",ps,[Nn("div",{class:"menu-text",onClick:r[2]||(r[2]=t=>o("up"))},gs),Nn("div",{class:"menu-text",onClick:r[3]||(r[3]=t=>o("down"))},vs),Nn("div",{class:"menu-text",onClick:r[4]||(r[4]=t=>o("top"))},ms),Nn("div",{class:"menu-text",onClick:r[5]||(r[5]=t=>o("bottom"))},ys)],512),[[jr,_e(i).selectedElement.length>0]]),hi(Nn("div",_s,[Nn("div",{class:"menu-text",onClick:r[6]||(r[6]=t=>o("copyGraphics"))},bs),Nn("div",{class:"menu-text",onClick:r[7]||(r[7]=t=>o("deleteGraphics"))},xs)],512),[[jr,_e(i).selectedElement.length>0]])],512)),[[jr,_e(e).visibile]])}}),[["__scopeId","data-v-f094a1c6"]]),Ts=fi({name:"UploadFile"}),Os=Ss(fi({...Ts,setup(t){const e=me(),i=vo();return Ci((()=>{i.inputEl=e.value})),(t,i)=>(Pn(),Dn("input",{type:"file",ref_key:"inputEl",ref:e,"aria-label":"文件上传"},null,512))}}),[["__scopeId","data-v-755c5681"]]),ks={class:"icon","aria-hidden":"true"},Es=["xlink:href"],Ps=fi({name:"Icon"}),Ms=Ss(fi({...Ps,props:{name:{default:""},size:{default:"20px"}},setup(t){const e=t;return kr((t=>({d00c40ec:e.size}))),(t,i)=>(Pn(),Dn("svg",ks,[Nn("use",{"xlink:href":`#icon-${e.name}`},null,8,Es)]))}}),[["__scopeId","data-v-24c9fc11"]]),As=["title","aria-label"],js=fi({name:"IconBtn"}),Ds=Ss(fi({...js,props:{iconName:{default:""},width:{default:"30px"},height:{default:"30px"},background:{type:Boolean,default:!0},descriptiveText:{default:""},iconSize:{}},emits:["click"],setup(t,{emit:e}){const i=t;kr((t=>({fdc91a10:i.width,eef81b96:i.height})));const n=()=>{e("click",i.iconName)};return(t,e)=>{const i=Ms;return Pn(),Dn("button",{class:V({"icon-btn":!0,noBackground:!t.background}),type:"button",title:t.descriptiveText,"aria-label":t.descriptiveText,onClick:n},[ji(t.$slots,"default",{},(()=>[Hn(i,{name:t.iconName,size:t.iconSize},null,8,["name","size"])]),!0)],10,As)}}}),[["__scopeId","data-v-2d005d70"]]),Fs={key:0},Ls=fi({name:"BtnGroup"}),Is=Ss(fi({...Ls,props:{iconBtns:{},checkActived:{type:Boolean,default:!0},activeName:{default:""},width:{default:"30px"},height:{default:"30px"}},emits:["click"],setup(t,{emit:e}){const i=t;oi((()=>i.activeName),(()=>{n.value=i.activeName}));const n=me(i.activeName);return(t,r)=>{const o=Ds;return Pn(!0),Dn(Sn,null,function(t,e,i,n){let r;const o=i&&i[n];if(f(t)||v(t)){r=new Array(t.length);for(let i=0,n=t.length;i<n;i++)r[i]=e(t[i],i,void 0,o&&o[i])}else if("number"==typeof t){r=new Array(t);for(let i=0;i<t;i++)r[i]=e(i+1,i,void 0,o&&o[i])}else if(y(t))if(t[Symbol.iterator])r=Array.from(t,((t,i)=>e(t,i,void 0,o&&o[i])));else{const i=Object.keys(t);r=new Array(i.length);for(let n=0,s=i.length;n<s;n++){const s=i[n];r[n]=e(t[s],s,n,o&&o[n])}}else r=[];return i&&(i[n]=r),r}(t.iconBtns,(r=>(Pn(),Fn(o,{key:r.iconName,iconName:r.iconName,width:r.width||t.width,height:r.height||t.height,class:V({actived:t.checkActived&&_e(n)===r.iconName}),descriptiveText:r.descriptiveText,onClick:t=>{return o=r.iconName,i.checkActived&&(n.value=o),void e("click",o);var o}},{default:Qe((()=>{return[r.slotText?(Pn(),Dn("div",Fs,[Nn("span",null,(t=r.slotText,v(t)?t:null==t?"":f(t)||y(t)&&(t.toString===b||!g(t.toString))?JSON.stringify(t,G,2):String(t)),1)])):Vn("",!0)];var t})),_:2},1032,["iconName","width","height","class","descriptiveText","onClick"])))),128)}}}),[["__scopeId","data-v-2ee90ccf"]]),Bs={class:"toolbar-card"},Rs={class:"toolbar-row"},zs=fi({name:"OperationToolbar"}),Ns=Ss(fi({...zs,setup(t){const e=ne([{iconName:"enlarge",descriptiveText:"放大-control + +"},{iconName:"reduce",descriptiveText:"缩小-control + -"},ne({iconName:"resetSize",descriptiveText:"重置大小",slotText:"100%",width:"50px"}),{iconName:"revocation",descriptiveText:"撤销-control + z"},{iconName:"recovery",descriptiveText:"恢复-control + p"}]),i=Qr(),n=t=>{"enlarge"!==t&&"reduce"!==t&&"resetSize"!==t||ss(t),"revocation"!==t&&"recovery"!==t||ls(t)};return oi((()=>i.zoomLevel),(()=>{e[2].slotText=(100*i.zoomLevel).toFixed(0)+"%"})),(t,i)=>{const r=Is;return Pn(),Dn("section",Bs,[Nn("div",Rs,[Hn(r,{iconBtns:_e(e),checkActived:!1,onClick:n},null,8,["iconBtns"])])])}}}),[["__scopeId","data-v-f2b74183"]]),Hs=["onClick"],Ws=fi({name:"Slider"}),Xs=Ss(fi({...Ws,props:{size:{default:0}},emits:["update:size","change"],setup(t,{emit:e}){const i=t,n=me(),r=me(),o=me(),s=me(0),a=me(0),l=me(!1),c=me(0),h=me(22),u=t=>{l.value||(o.value.style.left=t.offsetX+"px",r.value.style.width=t.offsetX+"px",e("update:size",t.offsetX/h.value/10),e("change",t.offsetX/h.value/10))},f=t=>{a.value=t.clientX,s.value=o.value.offsetLeft,l.value=!0,document.addEventListener("mousemove",d),document.addEventListener("mouseup",p)},d=t=>{if(!l.value)return;const i=s.value+(t.clientX-a.value),n=Math.round(i/h.value)*h.value;i<=0?(r.value.style.width="0px",o.value.style.left="0px",e("update:size",0),e("change",0)):i>=c.value?(r.value.style.width=c.value+"px",o.value.style.left=c.value+"px",e("update:size",1),e("change",1)):(o.value.style.left=n+"px",r.value.style.width=n+"px",e("update:size",n/h.value/10),e("change",n/h.value/10))},p=()=>{setTimeout((()=>{l.value=!1}),0),document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",p)};return oi((()=>i.size),(t=>{const e=10*t*h.value+"px";r.value.style.width=e,o.value.style.left=e})),Ci((()=>{c.value=n.value.offsetWidth||220,h.value=c.value/10;const t=h.value*i.size*10+"px";r.value.style.width=t,o.value.style.left=t})),(t,e)=>{return Pn(),Dn("div",{ref_key:"slider",ref:n,class:"slider",onClick:(i=u,s=["stop","prevent"],(t,...e)=>{for(let i=0;i<s.length;i++){const e=Ar[s[i]];if(e&&e(t,s))return}return i(t,...e)})},[Nn("div",{ref_key:"bar",ref:r,class:"slider-bar"},null,512),Nn("div",{ref_key:"btn",ref:o,class:"slider-btn",onMousedown:f},null,544)],8,Hs);var i,s}}}),[["__scopeId","data-v-84b7dd23"]]),Vs={class:"tollbar-color-box"},Ys={class:"tollbar-color-content"},Us=["value"],Gs=["value"],qs=fi({name:"ColorSelect"}),Ks=Ss(fi({...qs,props:{modelValue:{default:"#ffffff"}},emits:["update:modelValue","change"],setup(t,{emit:e}){const i=t,n=me(""),r=t=>{const i=t.target.value;e("update:modelValue",i),e("change",i)},o=()=>{let t=i.modelValue;/^#[A-Fa-f0-9]{6}$/.test(t)||"#transparent"===t||(t=n.value),e("update:modelValue",t),e("change",t)};return(t,e)=>{const s=Ms;return Pn(),Dn("div",Vs,[Nn("div",Ys,[Hn(s,{class:"tollbar-color",name:"touming",size:"30px"}),Nn("input",{value:t.modelValue,class:V({"tollbar-color":!0,isTransparent:"#transparent"===t.modelValue}),type:"color","aria-label":"画布背景",onInput:r},null,42,Us)]),Nn("input",{value:t.modelValue,class:"tollbar-text",type:"text","aria-label":"画布背景",onFocus:e[0]||(e[0]=t=>n.value=i.modelValue),onInput:r,onBlur:o},null,40,Gs)])}}}),[["__scopeId","data-v-4df19ff2"]]),$s=t=>(Je("data-v-c29bc6f7"),t=t(),Ze(),t),Js={class:"toolbar-card"},Zs={class:"toolbar-row"},Qs=$s((()=>Nn("span",{class:"toolbar-row-title"},"描边",-1))),ta={class:"toolbar-row"},ea=$s((()=>Nn("span",{class:"toolbar-row-title"},"填充",-1))),ia={class:"toolbar-row"},na=$s((()=>Nn("span",{class:"toolbar-row-title"},"字体大小",-1))),ra={class:"toolbar-row-icon tollbar-row-icon2"},oa={class:"toolbar-row"},sa=$s((()=>Nn("span",{class:"toolbar-row-title"},"字体",-1))),aa={class:"toolbar-row-icon"},la={class:"toolbar-row"},ca=$s((()=>Nn("span",{class:"toolbar-row-title"},"文本对齐",-1))),ha={class:"toolbar-row-icon"},ua={class:"toolbar-row"},fa=$s((()=>Nn("span",{class:"toolbar-row-title"},"描边宽度",-1))),da={class:"toolbar-row-icon"},pa={class:"toolbar-row"},ga=$s((()=>Nn("span",{class:"toolbar-row-title"},"描边样式",-1))),va={class:"toolbar-row-icon"},ma={class:"toolbar-row"},ya=$s((()=>Nn("span",{class:"toolbar-row-title"},"边角",-1))),_a={class:"toolbar-row-icon tollbar-row-icon1"},ba={class:"toolbar-row"},xa=$s((()=>Nn("span",{class:"toolbar-row-title"},"透明度",-1))),Ca={class:"toolbar-row-icon tollbar-row-icon2"},Sa={class:"toolbar-row"},wa=$s((()=>Nn("span",{class:"toolbar-row-title"},"图层",-1))),Ta={class:"toolbar-row-icon tollbar-row-icon2"},Oa={class:"toolbar-row"},ka=$s((()=>Nn("span",{class:"toolbar-row-title"},"操作",-1))),Ea={class:"toolbar-row-icon tollbar-row-icon1"},Pa=fi({name:"StyleToolbar"}),Ma=Ss(fi({...Pa,setup(t){const e=no(),i=Qr(),n=cr((()=>{const t=i.selectedElement.some((t=>"textbox"===t.type));return"text"===i.selectedGraphics||t})),r=cr((()=>{const t=i.selectedElement.some((t=>"image"===t.type));return"image"===i.selectedGraphics||t})),o=cr((()=>{const t=i.selectedElement.some((t=>"rect"===t.type||"ellipse"===t.type||"polygon"===t.type));return"rect"===i.selectedGraphics||"rhombus"===i.selectedGraphics||"circle"===i.selectedGraphics||t})),s=cr((()=>{const t=i.selectedElement.some((t=>"line"===t.type));return"line"===i.selectedGraphics||t})),a=cr((()=>{const t=i.selectedElement.some((t=>"rect"===t.type));return"rect"===i.selectedGraphics||t})),l=cr((()=>{const t=i.selectedElement.some((t=>{var e;return t.name&&(null==(e=t.name)?void 0:e.indexOf("arrow"))>-1}));return"rect"===i.selectedGraphics||t})),c=fo(is,50),h=fo(is,300),u=(t,e)=>{no()[t]=e,h(t,ro(e))},f=(t,e)=>{no()[t]=e;let i=e;"strokeWidth"===t&&(i=so(e)),"strokeDashArray"===t&&(i=ao(e)),c(t,i)},d=t=>{"copy"===t&&ns(),"delete"===t&&rs()},p=[{iconName:"14",descriptiveText:"小号",slotText:"S"},{iconName:"18",descriptiveText:"中等",slotText:"M"},{iconName:"22",descriptiveText:"大号",slotText:"L"},{iconName:"26",descriptiveText:"超大号",slotText:"XL"}],g=[{iconName:"ourier New",descriptiveText:"ON字体",slotText:"ON"},{iconName:"Arial",descriptiveText:"默认",slotText:"NOR"},{iconName:"Comic Sans MS",descriptiveText:"CSM字体",slotText:"CSM"}],v=[{iconName:"left",descriptiveText:"left"},{iconName:"center",descriptiveText:"center"},{iconName:"right",descriptiveText:"right"}],m=[{iconName:"thinLine",descriptiveText:"细"},{iconName:"normalLine",descriptiveText:"适中"},{iconName:"thickLine",descriptiveText:"粗"}],y=[{iconName:"line",descriptiveText:"实线"},{iconName:"dottedLine",descriptiveText:"虚线"},{iconName:"dottedDashedLine",descriptiveText:"点虚线"}],_=[{iconName:"rightAngle",descriptiveText:"直角"},{iconName:"roundedCorners",descriptiveText:"圆角"}],b=[{iconName:"top",descriptiveText:"置于顶层"},{iconName:"bottom",descriptiveText:"置于底层"},{iconName:"up",descriptiveText:"上移一层"},{iconName:"down",descriptiveText:"下移一层"}],x=[{iconName:"copy",descriptiveText:"复制"},{iconName:"delete",descriptiveText:"删除"}];return(t,i)=>{const c=Ks,h=Is,C=Xs;return Pn(),Dn("section",Js,[hi(Nn("div",Zs,[Qs,Hn(c,{modelValue:_e(e).stroke,"onUpdate:modelValue":i[0]||(i[0]=t=>_e(e).stroke=t),onChange:i[1]||(i[1]=t=>u("stroke",t))},null,8,["modelValue"])],512),[[jr,!_e(r)]]),hi(Nn("div",ta,[ea,Hn(c,{modelValue:_e(e).fill,"onUpdate:modelValue":i[2]||(i[2]=t=>_e(e).fill=t),onChange:i[3]||(i[3]=t=>u("fill",t))},null,8,["modelValue"])],512),[[jr,_e(o)]]),hi(Nn("div",ia,[na,Nn("div",ra,[Hn(h,{iconBtns:p,activeName:_e(e).fontSize,width:"48px",height:"26px",onClick:i[4]||(i[4]=t=>f("fontSize",t))},null,8,["activeName"])])],512),[[jr,_e(n)]]),hi(Nn("div",oa,[sa,Nn("div",aa,[Hn(h,{iconBtns:g,activeName:_e(e).fontFamily,width:"48px",height:"26px",onClick:i[5]||(i[5]=t=>f("fontFamily",t))},null,8,["activeName"])])],512),[[jr,_e(n)]]),hi(Nn("div",la,[ca,Nn("div",ha,[Hn(h,{iconBtns:v,activeName:_e(e).textAlign,width:"48px",height:"26px",onClick:i[6]||(i[6]=t=>f("textAlign",t))},null,8,["activeName"])])],512),[[jr,_e(n)]]),hi(Nn("div",ua,[fa,Nn("div",da,[Hn(h,{iconBtns:m,activeName:_e(e).strokeWidth,width:"48px",height:"26px",onClick:i[7]||(i[7]=t=>f("strokeWidth",t))},null,8,["activeName"])])],512),[[jr,_e(o)||_e(s)||_e(l)]]),hi(Nn("div",pa,[ga,Nn("div",va,[Hn(h,{iconBtns:y,activeName:_e(e).strokeDashArray,width:"48px",height:"26px",onClick:i[8]||(i[8]=t=>f("strokeDashArray",t))},null,8,["activeName"])])],512),[[jr,_e(o)||_e(s)]]),hi(Nn("div",ma,[ya,Nn("div",_a,[Hn(h,{iconBtns:_,activeName:_e(e).edges,width:"48px",height:"26px",onClick:i[9]||(i[9]=t=>f("edges",t))},null,8,["activeName"])])],512),[[jr,_e(a)]]),Nn("div",ba,[xa,Nn("div",Ca,[Hn(C,{size:_e(e).opacity,"onUpdate:size":i[10]||(i[10]=t=>_e(e).opacity=t),onChange:i[11]||(i[11]=t=>f("opacity",t))},null,8,["size"])])]),Nn("div",Sa,[wa,Nn("div",Ta,[Hn(h,{iconBtns:b,checkActived:!1,width:"48px",height:"26px",onClick:_e(os)},null,8,["onClick"])])]),Nn("div",Oa,[ka,Nn("div",Ea,[Hn(h,{iconBtns:x,checkActived:!1,width:"48px",height:"26px",onClick:d})])])])}}}),[["__scopeId","data-v-c29bc6f7"]]),Aa={class:"toolbar-card"},ja={class:"toolbar-row"},Da={class:"toolbar-text"},Fa=fi({name:"GraphicalToolbar"}),La=Ss(fi({...Fa,setup(t){const e=Qr(),i=[{iconName:"select",descriptiveText:"选择-1"},{iconName:"rect",descriptiveText:"矩形-2"},{iconName:"rhombus",descriptiveText:"菱形-3"},{iconName:"circle",descriptiveText:"圆/椭圆-4"},{iconName:"arrows",descriptiveText:"箭头-5"},{iconName:"line",descriptiveText:"线条-6"},{iconName:"painting",descriptiveText:"自由绘画-7"},{iconName:"text",descriptiveText:"文字-8"},{iconName:"image",descriptiveText:"图片-9"}],n=t=>{no().$reset(),e.selectedGraphics=t,"image"===t&&es("image/*")};return(t,r)=>{const o=Is;return Pn(),Dn("section",Aa,[Nn("div",ja,[Hn(o,{iconBtns:i,activeName:_e(e).selectedGraphics,width:"40px",height:"40px",onClick:n},null,8,["activeName"])]),hi(Nn("div",Da,"如果需要移动画布，请先按住空格在拖动鼠标",512),[[jr,0===_e(e).selectedElement.length]])])}}}),[["__scopeId","data-v-4dda6880"]]),Ia={"--bg-color":"#ffffff","--text-color":"#606266","--background-color":"#ffffff","--bg-shadow":"0 1px 5px rgba(0,0,0,0.15)","--btn-bg-hover-color":"#ecf5ff"},Ba={"--bg-color":"#000000","--text-color":"#ffffff","--background-color":"#18222c","--bg-shadow":"0 1px 5px rgb(255 255 255 / 40%)","--btn-bg-hover-color":"#aac7e8"},Ra=()=>{const t=Qr(),e=me("#ffffff");return{handleClick:t=>{"reset"===t&&(Go.clear(),xo(Go),co(Go)),"exportImage"===t&&ts("image"),"export"===t&&ts("json"),"inport"===t&&es(".json")},canvasStore:t,schemeChange:()=>{t.scheme="LIGHTSCHEME"===t.scheme?"DARKSCHEME":"LIGHTSCHEME",(t=>{const e="LIGHTSCHEME"===t?Ia:Ba,i=document.documentElement;for(const[n,r]of Object.entries(e))i.style.setProperty(n,r);qo(e["--bg-color"],e["--text-color"])})(t.scheme)},lockStatusChange:()=>{t.lockStatus=!t.lockStatus},bgClocor:e,bgColorChange:t=>{fo(qo,280)(t)}}},za={class:"toolbar-card"},Na={class:"toolbar-row"},Ha={class:"toolbar-row"},Wa=fi({name:"CanvasToolbar"}),Xa=Ss(fi({...Wa,setup(t){const{handleClick:e,canvasStore:i,schemeChange:n,lockStatusChange:r,bgClocor:o,bgColorChange:s}=Ra(),a=[{iconName:"reset",descriptiveText:"重置画布"},{iconName:"inport",descriptiveText:"导入文件"},{iconName:"export",descriptiveText:"导出文件"},{iconName:"exportImage",descriptiveText:"导出图片"}];return(t,l)=>{const c=Is,h=Ds,u=Ks;return Pn(),Dn("section",za,[Nn("div",Na,[Hn(c,{iconBtns:a,checkActived:!1,onClick:_e(e)},null,8,["onClick"]),Hn(h,{iconName:_e(i).lockStatus?"locking":"unlock",width:"30px",height:"30px",background:!1,descriptiveText:_e(i).lockStatus?"锁定":"解锁",onClick:_e(r)},null,8,["iconName","descriptiveText","onClick"])]),Nn("div",Ha,[Hn(u,{modelValue:_e(o),"onUpdate:modelValue":l[0]||(l[0]=t=>ve(o)?o.value=t:null),onChange:_e(s)},null,8,["modelValue","onChange"]),Hn(h,{iconName:"LIGHTSCHEME"===_e(i).scheme?"light":"dark",width:"30px",height:"30px",background:!1,descriptiveText:"LIGHTSCHEME"===_e(i).scheme?"深色":"浅色",onClick:_e(n)},null,8,["iconName","descriptiveText","onClick"])])])}}}),[["__scopeId","data-v-0d3770ab"]]),Va=t=>{const e=Qr();e.KeyboardKey!==t.key&&(0===e.KeyboardKey.length?(e.KeyboardKey=t.key,Ga(t.key)):qa(t))},Ya=t=>{const e=Qr();t.key===e.KeyboardKey&&(e.KeyboardKey="")},Ua=["1","2","3","4","5","6","7","8","9"],Ga=t=>{const e=Qr();"Backspace"!==t&&"Delete"!==t||rs(),Ua.includes(t)&&Ka(t),"q"===t&&(e.lockStatus=!e.lockStatus)},qa=t=>{"Control"===Qr().KeyboardKey&&$a(t)},Ka=t=>{const e=new Map([["1","select"],["2","rect"],["3","rhombus"],["4","circle"],["5","arrows"],["6","line"],["7","painting"],["8","text"],["9","image"]]);no().$reset();Qr().selectedGraphics=e.get(t),"9"===t&&es("image/*")},$a=t=>{if("a"===t.key&&(t.preventDefault(),cs()),"d"===t.key&&ns(),"-"!==t.key&&"="!==t.key||(t.preventDefault(),ss("-"===t.key?"reduce":"enlarge")),"t"===t.key||"b"===t.key||"u"===t.key||"p"===t.key){const e="t"===t.key?"top":"b"===t.key?"bottom":"u"===t.key?"up":"down";os(e)}"p"!==t.key&&"z"!==t.key||(t.preventDefault(),ls("p"===t.key?"recovery":"revocation"))},Ja={class:"toolbar"},Za={class:"canvas"},Qa=Ss(fi({__name:"App",setup(t){const e=me(),i=me(),n=Qr(),r=cr((()=>n.selectedElement.length>0||"select"!==n.selectedGraphics));return Ci((()=>{i.value&&e.value&&(((t,e)=>{Go=new eo.fabric.Canvas(t,{width:e.clientWidth,height:e.clientHeight,backgroundColor:"#ffffff",fireRightClick:!0,
// 启用右键菜单，btn值位3
stopContextMenu:!0});const i=Zr();i.width=e.clientWidth,i.height=e.clientHeight;const n=Qr();null!=n.canvasExample&&po(Go,n.canvasExample),eo.fabric.Object.prototype.cornerStyle="circle",xo(Go),Go.on("mouse:down",Jo),Go.on("selection:updated",go),Go.on("selection:created",go),Go.on("selection:cleared",lo),Go.on("object:modified",(()=>{xo(Go)}))})(i.value,e.value),(t=>{window.addEventListener("resize",(()=>{Go.setDimensions({width:t.clientWidth,height:t.clientHeight}),co(Go)}))})(e.value),document.addEventListener("keydown",Va),document.addEventListener("keyup",Ya))})),(t,n)=>{const o=Xa,s=La,a=Ma,l=Ns,c=Os,h=ws;return Pn(),Dn("div",{class:"content",ref_key:"content",ref:e},[Nn("div",Ja,[Hn(o),Hn(s),hi(Hn(a,null,null,512),[[jr,_e(r)]]),Hn(l)]),Nn("div",Za,[Nn("canvas",{ref_key:"canvasEl",ref:i},null,512)]),Hn(c),Hn(h)],512)}}}),[["__scopeId","data-v-58f55447"]]);window._iconfont_svg_string_4131619='<svg><symbol id="icon-center" viewBox="0 0 1024 1024"><path d="M96 128h832v96H96zM96 576h832v96H96zM224 352h576v96H224zM224 800h576v96H224z" fill="#666666" ></path></symbol><symbol id="icon-right" viewBox="0 0 1024 1024"><path d="M96 128h832v96H96zM96 576h832v96H96zM352 352h576v96H352zM352 800h576v96H352z" fill="#666666" ></path></symbol><symbol id="icon-left" viewBox="0 0 1024 1024"><path d="M96 128h832v96H96zM96 576h832v96H96zM96 352h576v96H96zM96 800h576v96H96z" fill="#666666" ></path></symbol><symbol id="icon-reset" viewBox="0 0 1024 1024"><path d="M624.593455 23.272727a93.090909 93.090909 0 0 1 93.090909 93.090909v168.587637l143.406545 0.023272a116.363636 116.363636 0 0 1 116.247273 111.313455l0.116363 5.050182V861.090909a116.363636 116.363636 0 0 1-116.363636 116.363636H162.909091a116.363636 116.363636 0 0 1-116.363636-116.363636V401.338182a116.363636 116.363636 0 0 1 116.363636-116.363637l146.664727-0.023272V116.363636a93.090909 93.090909 0 0 1 88.459637-92.974545l4.654545-0.116364zM139.636364 581.818182v279.272727a23.272727 23.272727 0 0 0 23.272727 23.272727h302.545454v-162.909091a46.545455 46.545455 0 1 1 93.09091 0v162.909091h93.090909v-162.909091a46.545455 46.545455 0 1 1 93.090909 0v162.909091h116.363636a23.272727 23.272727 0 0 0 23.272727-23.272727V581.818182H139.636364z m0-93.090909h744.727272v-87.389091a23.272727 23.272727 0 0 0-23.272727-23.272727h-166.679273a69.818182 69.818182 0 0 1-69.818181-69.818182V116.363636h-221.905455v191.883637a69.818182 69.818182 0 0 1-69.818182 69.818182H162.909091a23.272727 23.272727 0 0 0-23.272727 23.272727V488.727273z" fill="#666666" ></path></symbol><symbol id="icon-touming" viewBox="0 0 1024 1024"><path d="M102.4 716.8v-204.8h204.8v204.8z m0-409.6V102.4h204.8v204.8z" fill="#666666" ></path><path d="M307.2 921.6v-204.8h204.8v204.8z m0-409.6V307.2h204.8v204.8z" fill="#666666" ></path><path d="M512 716.8v-204.8h204.8v204.8z m0-409.6V102.4h204.8v204.8z" fill="#666666" ></path><path d="M716.8 921.6v-204.8h204.8v204.8z m0-409.6V307.2h204.8v204.8z" fill="#666666" ></path></symbol><symbol id="icon-rightAngle" viewBox="0 0 1024 1024"><path d="M793.45626293 783.67255737L773.91620733 783.67255737 773.91620733 249.65586555 239.89951553 249.65586555 239.89951553 230.11580997 793.45626293 230.11580997Z" fill="#666666" ></path></symbol><symbol id="icon-roundedCorners" viewBox="0 0 1024 1024"><path d="M795.98933333 753.75502222h-72.81777778V595.74044445a275.2512 275.2512 0 0 0-275.2512-274.52302223H289.90577778v-72.81777777h158.01457777a348.06897778 348.06897778 0 0 1 348.06897778 347.3408z" fill="#666666" ></path></symbol><symbol id="icon-painting" viewBox="0 0 1024 1024"><path d="M745.76 369.86l-451 537.48a18.693 18.693 0 0 1-8.46 5.74l-136.58 45.27c-13.24 4.39-26.46-6.71-24.43-20.5l20.86-142.36c0.5-3.44 1.95-6.67 4.19-9.33l451-537.48c6.65-7.93 18.47-8.96 26.4-2.31l115.71 97.1c7.92 6.64 8.96 18.46 2.31 26.39zM894.53 192.56l-65.9 78.53c-6.65 7.93-18.47 8.96-26.4 2.31l-115.71-97.1c-7.93-6.65-8.96-18.47-2.31-26.4l65.9-78.53c6.65-7.93 18.47-8.96 26.4-2.31l115.71 97.1c7.93 6.65 8.96 18.47 2.31 26.4z" fill="#666666" ></path></symbol><symbol id="icon-SVG" viewBox="0 0 1024 1024"><path d="M354.40128 0c-87.04 0-157.44 70.55872-157.44 157.59872v275.68128H78.72c-21.6576 0-39.36256 17.69984-39.36256 39.36256v236.31872c0 21.6576 17.69984 39.35744 39.36256 39.35744h118.24128v118.08256c0 87.04 70.4 157.59872 157.44 157.59872h472.63744c87.04 0 157.59872-70.55872 157.59872-157.59872V315.0336c0-41.74848-38.9888-81.93024-107.52-149.27872l-29.11744-29.12256L818.87744 107.52C751.5392 38.9888 711.39328 0 669.59872 0H354.4064z m0 78.72h287.20128c28.35456 7.0912 27.99616 42.1376 27.99616 76.8v120.16128c0 21.6576 17.69984 39.35744 39.36256 39.35744h118.07744c39.38816 0 78.87872-0.0256 78.87872 39.36256v512c0 43.32032-35.55328 78.87872-78.87872 78.87872H354.4064c-43.32544 0-78.72-35.5584-78.72-78.87872v-118.08256h393.91744c21.66272 0 39.36256-17.69472 39.36256-39.35744V472.64256c0-21.66272-17.69984-39.36256-39.36256-39.36256H275.68128V157.59872c0-43.32032 35.39456-78.87872 78.72-78.87872z m-115.2 426.72128c17.28 0 32.64 3.2 46.08 9.6l-7.68 18.23744c-13.44-5.76-26.24-8.63744-38.4-8.63744-10.24 0-17.92 2.23744-23.04 6.71744s-7.68 10.56256-7.68 18.24256c0 8.96 1.92 15.67744 5.76 20.15744 4.48 3.84 15.03744 9.6 31.67744 17.28 17.28 7.04 28.48256 14.40256 33.60256 22.08256 5.76 7.04 8.63744 16 8.63744 26.88 0 14.72-5.12 26.55744-15.36 35.51744s-24.96 13.44-44.16 13.44c-18.56 0-33.28-2.56-44.16-7.68v-21.12c15.36 6.4 30.08 9.6 44.16 9.6 12.8 0 22.08256-2.23744 27.84256-6.71744 6.4-4.48 9.6-11.52 9.6-21.12 0-7.68-2.24256-14.08-6.72256-19.2-3.2-3.2-15.03744-9.28256-35.51744-18.24256-13.44-6.4-23.04-13.44-28.8-21.12s-8.64256-17.59744-8.64256-29.75744c0-13.44 4.48-24.00256 13.44-31.68256 9.6-8.32 22.72256-12.47744 39.36256-12.47744z m295.68 0c17.92 0 33.92 3.2 48 9.6l-8.64256 20.15744c-14.08-7.04-27.83744-10.55744-41.27744-10.55744-18.56 0-33.28 6.07744-44.16 18.23744s-16.32256 29.76256-16.32256 52.80256c0 23.04 4.80256 40.63744 14.40256 52.79744 10.24 11.52 25.6 17.28 46.08 17.28 9.6 0 19.84-1.28 30.72-3.84v-51.84h-35.52256v-20.15744h57.6v86.4c-17.92 5.76-37.43744 8.63744-58.55744 8.63744-23.68 0-42.56256-7.68-56.64256-23.04s-21.12-37.76-21.12-67.2c0-28.16 7.36256-49.92 22.08256-65.28 15.36-16 36.48-23.99744 63.36-23.99744z m-235.20256 1.92h24.00256l35.51744 111.36c3.2 10.88 6.72256 24.32 10.56256 40.32 1.92-11.52 5.43744-25.28256 10.55744-41.28256l35.52256-110.39744h23.04L380.3136 683.03872H358.2464L299.6736 507.36128z" fill="#666666" ></path></symbol><symbol id="icon-dark" viewBox="0 0 1024 1024"><path d="M492.479078 536.363176A487.602887 487.602887 0 0 1 824.049041 74.700762a487.602887 487.602887 0 1 0 0 923.324827A487.602887 487.602887 0 0 1 492.479078 536.363176z m422.849223-288.465868A270.912164 270.912164 0 0 0 882.561387 140.429631a268.181588 268.181588 0 0 0-33.352037 106.687512 276.178275 276.178275 0 0 0-112.538747 33.74212 276.178275 276.178275 0 0 0 112.538747 33.547079A266.231176 266.231176 0 0 0 882.561387 421.093853a269.936958 269.936958 0 0 0 33.352038-107.467676A270.717123 270.717123 0 0 0 1019.090196 280.859263a270.912164 270.912164 0 0 0-103.761895-32.961955z m-791.086924-175.53704A176.512245 176.512245 0 0 0 102.396768 0a180.803151 180.803151 0 0 0-22.429733 71.385063A184.313891 184.313891 0 0 0 4.87619 93.619754a184.313891 184.313891 0 0 0 75.090845 22.234692A180.803151 180.803151 0 0 0 102.396768 187.044467a175.537039 175.537039 0 0 0 21.844609-71.580103A182.948603 182.948603 0 0 0 193.480987 93.619754a179.632904 179.632904 0 0 0-69.23961-21.844609zM751.103649 491.50371A202.842801 202.842801 0 0 0 726.528463 571.665625a207.328748 207.328748 0 0 0-84.45282 25.160309A210.254365 210.254365 0 0 0 726.528463 621.791202 201.867595 201.867595 0 0 0 751.103649 702.148157a203.818007 203.818007 0 0 0 24.965268-80.551997 205.183295 205.183295 0 0 0 78.016462-24.575185 201.867595 201.867595 0 0 0-78.016462-24.575186 203.622966 203.622966 0 0 0-24.965268-80.942079z" fill="#666666" ></path><path d="M531.487309 536.363176A511.983031 511.983031 0 0 0 825.414329 994.70989C602.092207 951.800836 433.966731 763.000998 433.966731 536.363176S602.092207 120.730475 825.414329 78.016462A511.78799 511.78799 0 0 0 531.487309 536.363176z" fill="#666666" ></path></symbol><symbol id="icon-light" viewBox="0 0 1024 1024"><path d="M288.96 637.76l55.712-31.488A192 192 0 1 1 704 512a190.72 190.72 0 0 1-25.856 96.32l55.328 32.16A256 256 0 1 0 288.96 637.76zM480 128a32 32 0 0 1 64 0v64a32 32 0 0 1-64 0V128zM760.896 217.856a31.968 31.968 0 1 1 45.248 45.248l-45.248 45.248a31.968 31.968 0 1 1-45.248-45.248l45.248-45.248zM263.104 217.856a31.968 31.968 0 1 0-45.248 45.248l45.248 45.248a31.968 31.968 0 1 0 45.248-45.248L263.104 217.856zM896 480a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64h64zM192 480a32 32 0 0 1 0 64H128a32 32 0 0 1 0-64h64z" fill="#FCD118" ></path><path d="M832 672a32 32 0 0 0 0-64H192a32 32 0 0 0 0 64h640zM480 736a32 32 0 0 1 64 0v160a32 32 0 0 1-64 0v-160z" fill="#4A90E2" ></path><path d="M470.848 790.4a32 32 0 1 1-45.696-44.8l62.72-64a31.968 31.968 0 0 1 45.248-0.448l65.28 64a32 32 0 1 1-44.8 45.696l-42.432-41.6-40.32 41.152z" fill="#4A90E2" ></path></symbol><symbol id="icon-text" viewBox="0 0 1024 1024"><path d="M100.992 64l822.016 0 0 277.44-36.352 0c0 0-69.376-169.408-151.232-184.192-81.856-14.784-138.752-4.608-138.752-4.608L595.648 859.968c0 0 22.72 47.808 60.224 51.2l83.008 0L738.88 960 285.184 960l1.152-50.048L359.04 908.8c0 0 54.592-17.088 54.592-56.896 0-39.744 1.152-693.568 1.152-693.568S324.992 145.92 278.336 157.312C231.744 168.64 149.824 236.864 137.344 336.896L100.992 338.048 100.992 64z" fill="#666666" ></path></symbol><symbol id="icon-dottedDashedLine" viewBox="0 0 1024 1024"><path d="M934.4 490.666667h-51.2a25.6 25.6 0 1 0 0 51.2h51.2a25.6 25.6 0 1 0 0-51.2zM115.2 490.666667h-34.133333a25.6 25.6 0 1 0 0 51.2h34.133333a25.6 25.6 0 1 0 0-51.2zM388.266667 490.666667h-51.2a25.6 25.6 0 1 0 0 51.2h51.2a25.6 25.6 0 1 0 0-51.2zM251.733333 490.666667h-51.2a25.6 25.6 0 1 0 0 51.2h51.2a25.6 25.6 0 1 0 0-51.2zM524.8 490.666667h-51.2a25.6 25.6 0 1 0 0 51.2h51.2a25.6 25.6 0 1 0 0-51.2zM797.866667 490.666667h-51.2a25.6 25.6 0 1 0 0 51.2h51.2a25.6 25.6 0 1 0 0-51.2zM661.333333 490.666667h-51.2a25.6 25.6 0 1 0 0 51.2h51.2a25.6 25.6 0 1 0 0-51.2z" fill="#666666" ></path></symbol><symbol id="icon-dottedLine" viewBox="0 0 1024 1024"><path d="M234.666667 490.666667h-153.6a25.6 25.6 0 1 0 0 51.2h153.6a25.6 25.6 0 1 0 0-51.2zM473.6 490.666667h-153.6a25.6 25.6 0 1 0 0 51.2h153.6a25.6 25.6 0 1 0 0-51.2zM934.4 490.666667h-136.533333a25.6 25.6 0 1 0 0 51.2h136.533333a25.6 25.6 0 1 0 0-51.2zM712.533333 490.666667h-153.6a25.6 25.6 0 1 0 0 51.2h153.6a25.6 25.6 0 1 0 0-51.2z" fill="#666666" ></path></symbol><symbol id="icon-up" viewBox="0 0 1024 1024"><path d="M1005 17v783.9H788.8V209.1H221.2V17z" fill="#ff9d4d" ></path><path d="M5 209.1h783.8v783.8H5z" fill="#f4dccb" ></path></symbol><symbol id="icon-down" viewBox="0 0 1024 1024"><path d="M1005 17v783.9H788.8V209.1H221.2V17z" fill="#f4dccb" ></path><path d="M5 209.1h783.8v783.8H5z" fill="#ff9d4d" ></path></symbol><symbol id="icon-arrows" viewBox="0 0 1024 1024"><path d="M729.6 448H128v85.333333h601.6L597.333333 665.6l59.733334 59.733333 234.666666-234.666666L661.333333 256l-59.733333 59.733333 128 132.266667z" fill="#666666" ></path></symbol><symbol id="icon-top" viewBox="0 0 1024 1024"><path d="M510.464 625.152c-7.168 0-13.824-2.048-19.968-6.144L113.664 365.568c-10.24-6.656-15.872-18.432-15.872-30.208 0-12.288 6.656-23.552 16.896-29.696l382.976-239.616c11.776-7.168 26.624-7.168 37.888 0l374.784 234.496c10.24 6.656 16.384 17.408 16.896 29.696 0 12.288-5.632 23.552-15.872 30.208L530.432 619.52c-6.144 3.584-13.312 5.632-19.968 5.632zM199.168 336.896l310.784 209.408 315.392-214.528L516.608 138.24l-317.44 198.656z" fill="#ff9d4d" ></path><path d="M508.416 807.936c-7.168 0-14.336-2.048-19.968-6.144L61.44 509.952c-16.384-11.264-20.48-33.28-9.216-49.664 11.264-16.384 33.28-20.48 49.664-9.216l406.528 277.504L919.552 445.44c16.384-11.264 38.4-7.168 49.664 9.216 11.264 16.384 7.168 38.4-9.216 49.664l-431.616 297.472c-5.632 3.584-12.8 6.144-19.968 6.144z" fill="#f4dccb" ></path><path d="M506.88 982.016c-7.168 0-14.336-2.048-19.968-6.144l-427.008-291.328c-16.384-11.264-20.48-33.28-9.216-49.664 11.264-16.384 33.28-20.48 49.664-9.216L506.88 903.168l411.136-283.136c16.384-11.264 38.4-7.168 49.664 9.216 11.264 16.384 7.168 38.4-9.216 49.664l-431.104 296.96c-6.144 4.096-13.312 6.144-20.48 6.144z" fill="#f4dccb" ></path></symbol><symbol id="icon-thickLine" viewBox="0 0 1227 1024"><path d="M2952.12152915 435.46522537v153.06954926H-1233.08147947v-153.06954926h4185.20300862z" fill="#666666" ></path></symbol><symbol id="icon-thinLine" viewBox="0 0 1227 1024"><path d="M1227.922 489.545v44.91H0v-44.91h1227.922z" fill="#666666" ></path></symbol><symbol id="icon-normalLine" viewBox="0 0 1227 1024"><path d="M1968.06803497 466.33020955v91.3395809H-529.32410222v-91.3395809h2497.39213719z" fill="#666666" ></path></symbol><symbol id="icon-locking" viewBox="0 0 1024 1024"><path d="M385.150849 385.662338l-128.895105 0 0-150.377622q0-49.102897 19.436563-91.556444t53.706294-74.677323 80.815185-50.637363 101.786214-18.413586q49.102897 0 94.625375 18.413586t80.815185 50.637363 56.263736 74.677323 20.971029 91.556444l0 150.377622-123.78022 0 0-121.734266q0-64.447552-35.804196-99.74026t-97.182817-35.292707q-55.240759 0-88.999001 35.292707t-33.758242 99.74026l0 121.734266zM826.053946 447.040959q27.62038 0 47.568432 19.948052t19.948052 47.568432l0 317.122877q0 27.62038-9.718282 51.66034t-26.597403 41.942058-39.896104 28.131868-50.637363 10.22977l-516.603397 0q-27.62038 0-50.125874-10.22977t-38.361638-27.108891-24.551449-39.384615-8.695305-48.07992l0-324.283716q0-27.62038 19.436563-47.568432t47.056943-19.948052l61.378621 0 128.895105 0 255.744256 0 123.78022 0 61.378621 0z" fill="#666666" ></path></symbol><symbol id="icon-unlock" viewBox="0 0 1024 1024"><path d="M768.25422 0q48.810328 0 94.061569 18.303873t80.333664 50.33565 56.436941 74.740814 21.354518 91.519364l0 150.49851-123.042701 0 0-122.025819q0-64.063555-36.099305-99.654419t-97.112214-35.590864q-54.911619 0-88.468719 35.590864t-33.5571 99.654419l0 124.059583-128.12711 0 0-152.532274q0-48.810328 19.320755-91.519364t53.386296-74.740814 80.333664-50.33565 101.179742-18.303873zM766.220457 693.513406l0 87.451837 0 47.793446q0 27.455809-9.660377 51.860973t-26.438928 41.692155-39.658391 27.455809-50.33565 10.168818l-514.542205 0q-27.455809 0-49.82721-9.660377t-38.641509-26.438928-24.913605-39.14995-8.643496-47.793446l0-323.368421q0-28.472691 19.829196-47.793446t46.268123-19.320755l629.449851 0q28.472691 0 47.793446 19.320755t19.320755 47.793446l0 179.988083z" fill="#666666" ></path></symbol><symbol id="icon-copy" viewBox="0 0 1024 1024"><path d="M618.999966 744.283344c-90.242304 0-180.485631 0.002047-270.727934-0.001023-38.940894-0.001023-69.261457-30.29805-69.266573-69.360717-0.025583-179.403996-0.024559-358.806969-0.001023-538.210965 0.005117-39.254026 30.371728-69.474304 69.662593-69.474304 180.176592 0 360.353185 0 540.529777 0 39.529295 0 69.726038 30.18037 69.735248 69.865207 0.032746 132.428102 0.01228 264.856203 0.01228 397.284305 0 46.821375 0.034792 93.64275-0.01228 140.463102-0.034792 34.376948-23.431665 62.461587-57.207933 68.62803-3.767813 0.687662-7.68503 0.771573-11.532661 0.773619C799.794635 744.29153 709.396789 744.283344 618.999966 744.283344zM618.612133 688.652326c81.435731 0 162.872484 0.026606 244.308215-0.051165 6.468318-0.00614 12.975523-0.418532 19.394722-1.207501 11.55108-1.420349 17.283642-6.677073 19.026332-18.09103 1.182942-7.747451 1.711991-15.668865 1.716084-23.512507 0.094144-160.091138 0.081864-320.181253 0.029676-480.272391-0.002047-6.473435-0.408299-12.964266-0.976234-19.416212-1.222851-13.891382-6.364965-19.641339-20.009729-21.906939-5.759167-0.956791-11.67797-1.331321-17.524119-1.334391-163.7996-0.068562-327.5992-0.073678-491.3988 0.016373-6.451946 0.004093-12.96529 0.674359-19.340487 1.711991-10.408047 1.694595-15.688307 6.780427-17.206894 17.185404-1.221828 8.370645-1.864464 16.901948-1.86958 25.361621-0.105401 159.164023-0.088004 318.327022-0.038886 477.491045 0.002047 6.475482 0.37146 12.967336 0.917906 19.421328 1.342578 15.851013 6.924713 21.745257 22.49841 23.605627 5.655813 0.675382 11.391445 0.952698 17.090237 0.956791C456.357725 688.671769 537.484418 688.652326 618.612133 688.652326z" fill="#666666" ></path><path d="M403.609361 959.39561c-90.235141 0-180.470281 0.00307-270.705422-0.001023-38.367843-0.002047-68.984141-30.325679-68.99642-68.679196-0.057305-179.852204-0.056282-359.705432-0.001023-539.557636 0.011256-38.404682 30.614252-68.807109 68.914556-68.808132 22.095227-0.001023 44.190455-0.00921 66.285682 0.00307 16.349363 0.008186 28.29544 11.781324 28.266787 27.824719-0.027629 15.755846-12.016685 27.51875-28.009937 27.690666-18.062378 0.194428-36.123732 0.548492-54.18611 0.837064-0.462534 0.007163-0.927115 0.031722-1.387603 0.074701-15.44783 1.436722-21.714558 7.652284-23.223934 23.526833-0.627287 6.600325-0.951675 13.255908-0.953721 19.885909-0.051165 159.14765-0.065492 318.2953 0.032746 477.44295 0.005117 8.150634 0.62524 16.361643 1.746784 24.435529 1.608637 11.57564 7.505951 17.046235 19.22076 18.453281 6.117324 0.734734 12.308327 1.189082 18.466584 1.191128 163.16515 0.062422 326.3303 0.059352 489.49545 0.008186 5.54325-0.002047 11.116175-0.36532 16.624632-1.001817 14.737656-1.703805 20.933775-7.752568 21.738094-22.700001 0.86981-16.178471 0.88823-32.408107 1.044796-48.618301 0.167822-17.328667 12.418844-30.111808 28.706809-29.626761 16.60519 0.494257 28.117384 14.554484 27.478841 31.956829-0.696872 18.97926-0.227174 37.999452-0.347924 57.002248-0.185218 29.381168-18.374486 55.481615-45.913703 64.811098-7.028067 2.381234-14.777565 3.670599-22.200628 3.691065C585.006757 959.481567 494.308059 959.39561 403.609361 959.39561z" fill="#666666" ></path><path d="M584.352865 437.935144c-2.501984 0-4.329609 0-6.15621 0-42.183751 0-84.367503 0.030699-126.551254-0.016373-15.861246-0.017396-29.66053-11.991102-31.568996-27.186176-2.133593-16.981766 7.563256-31.871895 23.64349-35.950793 3.094478-0.784876 6.40999-0.960885 9.624195-0.964978 41.565674-0.061398 83.131349-0.040932 124.697023-0.040932 1.960655 0 3.921309 0 6.311753 0 0-2.492774 0-4.324492 0-6.155187 0-41.720194-0.004093-83.440387 0.002047-125.160581 0.00307-19.178805 13.678534-33.356712 32.152281-33.358759 18.438954-0.00307 32.17991 14.213723 32.18912 33.378202 0.019443 41.720194 0.00614 83.440387 0.00614 125.160581 0 1.831718 0 3.663436 0 6.136767 2.403746 0 4.367471 0 6.331195 0 42.183751 0.001023 84.367503-0.050142 126.551254 0.028653 15.796778 0.029676 29.071106 11.55108 31.331589 26.838252 2.371 16.041348-6.883781 31.182186-22.11467 35.735899-3.345188 0.99977-6.969739 1.483794-10.468422 1.49198-41.874713 0.099261-83.749426 0.064468-125.624139 0.064468-1.816369 0-3.63376 0-6.006807 0 0 2.24718 0 4.047176 0 5.848195 0 42.029232 0.082888 84.058464-0.048095 126.087697-0.042979 13.773701-6.348592 24.232914-18.99768 29.798676-12.339026 5.429663-24.273846 3.668553-34.580586-5.28026-7.249101-6.294356-10.723226-14.551414-10.723226-24.206308 0.002047-42.183751 0.001023-84.36648 0.001023-126.550231C584.352865 441.951621 584.352865 440.270329 584.352865 437.935144z" fill="#666666" ></path></symbol><symbol id="icon-rect" viewBox="0 0 1024 1024"><path d="M62 62h900v900h-900v-900z" fill="#666666" ></path></symbol><symbol id="icon-rhombus" viewBox="0 0 1024 1024"><path d="M512 69.479l442.498 442.498-442.498 442.498-442.498-442.498 442.498-442.498z" fill="#666666" ></path></symbol><symbol id="icon-circle" viewBox="0 0 1024 1024"><path d="M62 512c0 248.528 201.472 450 450 450s450-201.472 450-450c0-248.528-201.472-450-450-450-248.528 0-450 201.472-450 450z" fill="#666666" ></path></symbol><symbol id="icon-image" viewBox="0 0 1024 1024"><path d="M400.696 268.795c-17.249 0-31.233 13.986-31.233 31.233v30.471c0 17.249 13.986 31.233 31.233 31.233s31.233-13.986 31.233-31.233v-30.471c0-17.249-13.985-31.233-31.233-31.233z" fill="#666666" ></path><path d="M623.649 361.734c17.249 0 31.234-13.986 31.234-31.233v-30.471c0-17.249-13.986-31.233-31.234-31.233s-31.233 13.986-31.233 31.233v30.471c-0.001 17.248 13.985 31.233 31.233 31.233z" fill="#666666" ></path><path d="M438.295 388.804c-14.656 9.104-19.155 28.362-10.050 43.013 11.209 18.047 41.976 48.59 86.157 48.59 43.958 0 75.1-30.313 86.574-48.223 9.303-14.529 5.068-33.847-9.455-43.15-14.539-9.298-33.852-5.068-43.15 9.455-0.122 0.199-13.38 19.45-33.969 19.45-20.009 0-32.444-18.128-33.278-19.373-9.166-14.423-28.28-18.805-42.829-9.761z" fill="#666666" ></path><path d="M824.508503 116.690676 571.592236 116.690676c-17.248849 0-31.233352 13.985526-31.233352 31.233352s13.985526 31.233352 31.233352 31.233352l252.916267 0c40.181141 0 72.878844 32.692586 72.878844 72.878844l0 396.966057-189.334159-165.29465c-12.20088-10.655687-30.517037-10.207479-42.173518 0.9967L468.578048 674.16231 309.521472 517.519714c-11.895935-11.70253-30.903847-12.002358-43.154869-0.645706L126.957507 646.163629l0-394.126382c0-40.186258 32.692586-72.878844 72.878844-72.878844l252.916267 0c17.248849 0 31.233352-13.985526 31.233352-31.233352S470.000444 116.690676 452.751594 116.690676L199.836351 116.690676c-74.632791 0-135.346571 60.71378-135.346571 135.346571l0 520.56405c0 74.632791 60.71378 135.346571 135.346571 135.346571l252.916267 0c17.248849 0 31.233352-13.985526 31.233352-31.233352s-13.985526-31.233352-31.233352-31.233352L199.836351 845.481164c-40.186258 0-72.878844-32.692586-72.878844-72.878844l0-41.23924 160.003134-148.385539 159.428036 157.007917c12.048407 11.865235 31.361265 11.981892 43.546795 0.274246l198.576661-190.68697 208.876238 182.346001 0 40.683585c0 40.186258-32.697703 72.878844-72.878844 72.878844L571.592236 845.481164c-17.248849 0-31.233352 13.985526-31.233352 31.233352s13.985526 31.233352 31.233352 31.233352l252.916267 0c74.627674 0 135.346571-60.71378 135.346571-135.346571L959.855074 252.037247C959.855074 177.404456 899.136178 116.690676 824.508503 116.690676z" fill="#666666" ></path></symbol><symbol id="icon-exportImage" viewBox="0 0 1024 1024"><path d="M459.6 515.7c0-33.2-26.9-60.1-60.1-60.1s-60.2 26.9-60.2 60.1 26.9 60.1 60.2 60.1c33.1 0.1 60.1-26.8 60.1-60.1zM585.2 776.1c15.7-98.2 94.8-175.1 194-187.5l-10-32.5-50.8 16.9-44.1-83L532 695.4l-76.2-49.2-119.5 129.9h248.9z" fill="#666666" ></path><path d="M259.7 829V398c0-7.7 6.2-13.9 13.9-13.9h607.1c7.7 0 13.9 6.2 13.9 13.9v206.4c23.5 9.9 44.9 23.6 63.6 40.4V351.9c0-17.4-14.1-31.4-31.4-31.4h-134l-79.3-206.2c-6.2-16.2-24.4-24.3-40.6-18.1L20.2 347.1C4 353.4-4.1 371.6 2.1 387.8l194 504.5v0.3h401.2c-7.7-20-12.6-41.3-14.3-63.6H259.7z m400.7-660c2.1-0.3 5.5-0.2 7.3 3.8l56.8 147.6H266.6L660.4 169zM196.1 715.1L77.9 407.9c-2.7-7.1 0.8-15.2 8-17.9l110.2-42.4v367.5z" fill="#666666" ></path><path d="M1022.5 800L871 678.5c-2.3-1.7-5.5-0.1-5.5 2.8v75.1H670c-5.3 0-9.7 4.3-9.7 9.6v75.7c0 5.3 4.3 9.7 9.7 9.7h195.5v75.1c0 2.8 3.3 4.5 5.5 2.8l151.5-121.5c2.6-2 2.6-5.9 0-7.8z" fill="#666666" ></path></symbol><symbol id="icon-reduce" viewBox="0 0 1024 1024"><path d="M919.264 905.984l-138.912-138.912C851.808 692.32 896 591.328 896 480c0-229.376-186.624-416-416-416S64 250.624 64 480s186.624 416 416 416c95.008 0 182.432-32.384 252.544-86.208l141.44 141.44a31.904 31.904 0 0 0 45.248 0 32 32 0 0 0 0.032-45.248zM128 480C128 285.92 285.92 128 480 128s352 157.92 352 352-157.92 352-352 352S128 674.08 128 480z" fill="#666666" ></path><path d="M625.792 448H336a32 32 0 0 0 0 64h289.792a32 32 0 1 0 0-64z" fill="#666666" ></path></symbol><symbol id="icon-bottom" viewBox="0 0 1024 1024"><path d="M510.464 625.152c-7.168 0-13.824-2.048-19.968-6.144L113.664 365.568c-10.24-6.656-15.872-18.432-15.872-30.208 0-12.288 6.656-23.552 16.896-29.696l382.976-239.616c11.776-7.168 26.624-7.168 37.888 0l374.784 234.496c10.24 6.656 16.384 17.408 16.896 29.696 0 12.288-5.632 23.552-15.872 30.208L530.432 619.52c-6.144 3.584-13.312 5.632-19.968 5.632zM199.168 336.896l310.784 209.408 315.392-214.528L516.608 138.24l-317.44 198.656z" fill="#F4DCCB" ></path><path d="M508.416 807.936c-7.168 0-14.336-2.048-19.968-6.144L61.44 509.952c-16.384-11.264-20.48-33.28-9.216-49.664 11.264-16.384 33.28-20.48 49.664-9.216l406.528 277.504L919.552 445.44c16.384-11.264 38.4-7.168 49.664 9.216 11.264 16.384 7.168 38.4-9.216 49.664l-431.616 297.472c-5.632 3.584-12.8 6.144-19.968 6.144z" fill="#f4dccb" ></path><path d="M506.88 982.016c-7.168 0-14.336-2.048-19.968-6.144l-427.008-291.328c-16.384-11.264-20.48-33.28-9.216-49.664 11.264-16.384 33.28-20.48 49.664-9.216L506.88 903.168l411.136-283.136c16.384-11.264 38.4-7.168 49.664 9.216 11.264 16.384 7.168 38.4-9.216 49.664l-431.104 296.96c-6.144 4.096-13.312 6.144-20.48 6.144z" fill="#ff9d4d" ></path></symbol><symbol id="icon-enlarge" viewBox="0 0 1024 1024"><path d="M640 456h-118.4V320a32 32 0 0 0-64 0v136H320a32 32 0 0 0 0 64h137.6V640a32 32 0 1 0 64 0v-120H640a32 32 0 1 0 0-64z" fill="#666666" ></path><path d="M919.264 905.984l-138.912-138.912C851.808 692.32 896 591.328 896 480c0-229.376-186.624-416-416-416S64 250.624 64 480s186.624 416 416 416c95.008 0 182.432-32.384 252.544-86.208l141.44 141.44a31.904 31.904 0 0 0 45.248 0 32 32 0 0 0 0.032-45.248zM128 480C128 285.92 285.92 128 480 128s352 157.92 352 352-157.92 352-352 352S128 674.08 128 480z" fill="#666666" ></path></symbol><symbol id="icon-line" viewBox="0 0 1227 1024"><path d="M2656.63806273 444.73310823v134.53378354H-1021.76301906v-134.53378354h3678.40108179z" fill="#666666" ></path></symbol><symbol id="icon-select" viewBox="0 0 1024 1024"><path d="M828.9 641h-187c-2.8 0-4.7 2.7-3.8 5.3l107.1 304.2c2.9 8.3-1.5 17.5-9.8 20.4l-135.8 47.8c-8.3 2.9-17.5-1.5-20.4-9.8L480 727.3c-1-2.9-4.9-3.6-6.9-1.2L348.3 877.2C338.8 888.8 320 882 320 867V0.5l521.1 614.1c8.9 10.4 1.5 26.4-12.2 26.4z" fill="#666666" ></path></symbol><symbol id="icon-recovery" viewBox="0 0 1024 1024"><path d="M32 541.2c-1.5 264.1 210.2 479 473.1 482.7 267.7 3.8 486-210.5 486.9-478.2 0.1-14.5-0.5-28.9-1.8-43.1-4.2-49-45-86.7-94.1-86.7-10.7 0-18.3 10.3-15.3 20.6C890.9 471.2 896 507.2 896 544c0 51.9-10.1 102.2-30.1 149.4-19.3 45.7-47 86.8-82.3 122.1s-76.4 63-122.1 82.3c-47.3 20-97.6 30.1-149.4 30.1s-102.2-10.1-149.4-30.1c-45.7-19.3-86.8-47-122.1-82.3s-63-76.4-82.3-122.1c-20-47.3-30.1-97.6-30.1-149.4s10.1-102.2 30.1-149.4c19.3-45.7 47-86.8 82.3-122.1s76.4-63 122.1-82.3c47.3-20 97.6-30.1 149.4-30.1s102.2 10.1 149.4 30.1c17.9 7.6 35 16.4 51.4 26.5 3.4 2.1 1.9 7.4-2.1 7.4h-63.2c-4.7 0-9.3 2.1-12.3 5.8l-69.7 83.7c-2.2 2.6-0.3 6.6 3.1 6.6H768c70.7 0 128-57.3 128-128V9.7c0-3.6-4.3-5.3-6.8-2.8l-84.5 84.5c-3 3-4.7 7.1-4.7 11.3v49.4c0 3.3-3.7 5.2-6.3 3.2C714.4 97.8 616.9 63.9 511.5 64c-264.4 0.2-478 212.8-479.5 477.2z" fill="#666666" ></path></symbol><symbol id="icon-revocation" viewBox="0 0 1024 1024"><path d="M992 541.2c1.5 264.1-210.2 479-473.1 482.7C251.2 1027.7 33 813.5 32 545.7c-0.1-14.5 0.5-28.9 1.8-43.1 4.2-49 45-86.7 94.1-86.7 10.7 0 18.3 10.3 15.3 20.6C133.1 471.2 128 507.2 128 544c0 51.9 10.1 102.2 30.1 149.4 19.3 45.7 47 86.8 82.3 122.1s76.4 63 122.1 82.3c47.3 20 97.6 30.1 149.4 30.1s102.2-10.1 149.4-30.1c45.7-19.3 86.8-47 122.1-82.3s63-76.4 82.3-122.1c20-47.3 30.1-97.6 30.1-149.4s-10.1-102.2-30.1-149.4c-19.3-45.7-47-86.8-82.3-122.1s-76.4-63-122.1-82.3c-47.3-20-97.6-30.1-149.4-30.1s-102.2 10.1-149.4 30.1c-17.9 7.6-35 16.4-51.4 26.5-3.4 2.1-1.9 7.4 2.1 7.4h63.2c4.7 0 9.3 2.1 12.3 5.8l69.7 83.7c2.2 2.6 0.3 6.6-3.1 6.6H256c-70.7 0-128-57.3-128-128V9.7c0-3.6 4.3-5.3 6.8-2.8l84.5 84.5c3 3 4.7 7.1 4.7 11.3v49.4c0 3.3 3.7 5.2 6.3 3.2C309.6 97.8 407.1 63.9 512.5 64c264.4 0.2 478 212.8 479.5 477.2z" fill="#666666" ></path></symbol><symbol id="icon-delete" viewBox="0 0 1024 1024"><path d="M358.925672 596.814688v30.450522c0 17.248849 13.985526 31.233352 31.233352 31.233352 17.248849 0 31.233352-13.985526 31.233352-31.233352v-30.450522c0-17.248849-13.985526-31.233352-31.233352-31.233352-17.248849 0-31.233352 13.985526-31.233352 31.233352zM602.506317 596.814688v30.450522c0 17.248849 13.985526 31.233352 31.233352 31.233352s31.233352-13.985526 31.233351-31.233352v-30.450522c0-17.248849-13.984503-31.233352-31.233351-31.233352s-31.233352 13.985526-31.233352 31.233352zM437.047937 699.686636c-14.650675 9.104355-19.155269 28.360931-10.04989 43.01263 11.015891 17.73185 41.238216 47.740304 84.651982 47.740304 43.195801 0 73.79368-29.780257 85.059258-47.379077 9.216919-14.391778 5.03262-33.338293-9.237385-42.742477-14.270005-9.393951-33.576723-5.409197-43.159985 8.739035-0.12689 0.188288-13.049201 18.915815-32.661888 18.915815-19.028379 0-30.93864-17.274432-31.772634-18.530028-9.175987-14.412244-28.259624-18.788925-42.829458-9.756202zM907.576407 160.082952H699.352015v-26.882254c0-40.145325-32.692586-72.807213-72.878844-72.807213h-229.046626c-40.186258 0-72.878844 32.661887-72.878844 72.807213v26.882254H116.323309c-17.248849 0-31.233352 13.984503-31.233352 31.233352s13.984503 31.233352 31.233352 31.233351h791.253098c17.248849 0 31.233352-13.984503 31.233352-31.233351s-13.985526-31.233352-31.233352-31.233352z m-270.692119 0H387.014404v-26.882254c0-5.607718 4.768607-10.340509 10.411117-10.340509h229.046627c5.64251 0 10.411117 4.732791 10.411117 10.340509v26.882254z" fill="#666666" ></path><path d="M824.286446 259.279185c-17.248849 0-31.233352 13.984503-31.233352 31.233352v530.07261c0 40.089044-32.692586 72.705905-72.878844 72.705906H303.725466c-40.186258 0-72.878844-32.616862-72.878844-72.705906v-530.07261c0-17.248849-13.984503-31.233352-31.233352-31.233352s-31.233352 13.984503-31.233352 31.233352v530.07261c0 74.535577 60.71378 135.172609 135.345548 135.172609h416.448784c74.632791 0 135.345548-60.637032 135.345548-135.172609v-530.07261c0-17.248849-13.984503-31.233352-31.233352-31.233352z" fill="#666666" ></path><path d="M355.781052 259.279185c-17.248849 0-31.233352 13.984503-31.233351 31.233352v167.494758c0 17.248849 13.985526 31.233352 31.233351 31.233352 17.248849 0 31.233352-13.985526 31.233352-31.233352v-167.494758c0-17.248849-13.984503-31.233352-31.233352-31.233352zM699.352015 458.007295v-167.494758c0-17.248849-13.984503-31.233352-31.233351-31.233352s-31.233352 13.984503-31.233352 31.233352v167.494758c0 17.248849 13.985526 31.233352 31.233352 31.233352s31.233352-13.984503 31.233351-31.233352zM511.949858 489.240647c17.248849 0 31.233352-13.985526 31.233352-31.233352v-167.494758c0-17.248849-13.985526-31.233352-31.233352-31.233352s-31.233352 13.984503-31.233352 31.233352v167.494758c-0.001023 17.248849 13.984503 31.233352 31.233352 31.233352z" fill="#666666" ></path></symbol><symbol id="icon-export" viewBox="0 0 1024 1024"><path d="M512 822.4H214.4V201.6h326.4v272h272V512h64v-86.4l-288-288H150.4v752H512v-67.2z m60.8-611.2l230.4 230.4h-230.4V211.2z" fill="#666666" ></path><path d="M729.6 553.6l-48 44.8 22.4 25.6 70.4 67.2h-240v64h240L704 822.4l-22.4 22.4 48 48 166.4-169.6z" fill="#666666" ></path></symbol><symbol id="icon-inport" viewBox="0 0 1024 1024"><path d="M512 822.4H214.4V201.6h326.4v272h272V512h64v-86.4l-288-288H150.4v752H512v-67.2z m60.8-611.2l230.4 230.4h-230.4V211.2z" fill="#666666" ></path><path d="M723.2 691.2h-67.2l67.2-67.2 22.4-25.6-44.8-44.8-166.4 169.6 166.4 169.6 44.8-48-22.4-22.4-67.2-67.2H896v-64z" fill="#666666" ></path></symbol></svg>',function(t){var e,i=(e=(e=document.getElementsByTagName("script"))[e.length-1]).getAttribute("data-injectcss");if(!(e=e.getAttribute("data-disable-injectsvg"))){var n,r,o,s,a;if(i&&!t.__iconfont__svg__cssinject__){t.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(c){console}}n=function(){var e,i=document.createElement("div");i.innerHTML=t._iconfont_svg_string_4131619,(i=i.getElementsByTagName("svg")[0])&&(i.setAttribute("aria-hidden","true"),i.style.position="absolute",i.style.width=0,i.style.height=0,i.style.overflow="hidden",(e=document.body).firstChild?function(t,e){e.parentNode.insertBefore(t,e)}(i,e.firstChild):e.appendChild(i))},document.addEventListener?~["complete","loaded","interactive"].indexOf(document.readyState)?setTimeout(n,0):(r=function(){document.removeEventListener("DOMContentLoaded",r,!1),n()},document.addEventListener("DOMContentLoaded",r,!1)):document.attachEvent&&(o=n,s=t.document,a=!1,function t(){try{s.documentElement.doScroll("left")}catch(c){return void setTimeout(t,50)}l()}(),s.onreadystatechange=function(){"complete"==s.readyState&&(s.onreadystatechange=null,l())})}function l(){a||(a=!0,o())}}(window);function tl(t,e){var i;return t="object"==typeof(i=t)&&null!==i?t:Object.create(null),new Proxy(t,{get:(t,i,n)=>"key"===i?Reflect.get(t,i,n):Reflect.get(t,i,n)||Reflect.get(e,i,n)})}function el(t,{storage:e,serializer:i,key:n,debug:r}){try{const r=null==e?void 0:e.getItem(n);r&&t.$patch(null==i?void 0:i.deserialize(r))}catch(o){}}function il(t,{storage:e,serializer:i,key:n,paths:r,debug:o}){try{const o=Array.isArray(r)?function(t,e){return e.reduce(((e,i)=>{const n=i.split(".");return function(t,e,i){return e.slice(0,-1).reduce(((t,e)=>/^(__proto__)$/.test(e)?{}:t[e]=t[e]||{}),t)[e[e.length-1]]=i,t}(e,n,function(t,e){return e.reduce(((t,e)=>null==t?void 0:t[e]),t)}(t,n))}),{})}(t,r):t;e.setItem(n,i.serialize(o))}catch(s){}}var nl=function(t={}){return e=>{const{auto:i=!1}=t,{options:{persist:n=i},store:r}=e;if(!n)return;const o=(Array.isArray(n)?n.map((e=>tl(e,t))):[tl(n,t)]).map((({storage:e=localStorage,beforeRestore:i=null,afterRestore:n=null,serializer:o={serialize:JSON.stringify,deserialize:JSON.parse},key:s=r.$id,paths:a=null,debug:l=!1})=>{var c;return{storage:e,beforeRestore:i,afterRestore:n,serializer:o,key:(null!=(c=t.key)?c:t=>t)(s),paths:a,debug:l}}));r.$persist=()=>{o.forEach((t=>{il(r.$state,t)}))},r.$hydrate=({runHooks:t=!0}={})=>{o.forEach((i=>{const{beforeRestore:n,afterRestore:o}=i;t&&(null==n||n(e)),el(r,i),t&&(null==o||o(e))}))},o.forEach((t=>{const{beforeRestore:i,afterRestore:n}=t;null==i||i(e),el(r,t),null==n||n(e),r.$subscribe(((e,i)=>{il(i,t)}),{detached:!0})}))}}();const rl=function(){const t=$(!0),e=t.run((()=>me({})));let i=[],n=[];const r=ue({install(t){Br(r),r._a=t,t.provide(Rr,r),t.config.globalProperties.$pinia=r,n.forEach((t=>i.push(t))),n=[]},use(t){return this._a?i.push(t):n.push(t),this},_p:i,
// it's actually undefined here
// @ts-expect-error
_a:null,_e:t,_s:new Map,state:e});return r}();rl.use(nl);((...t)=>{const e=(Lr||(Lr=bn(Fr))).createApp(...t),{mount:i}=e;return e.mount=t=>{const n=function(t){if(v(t)){return document.querySelector(t)}return t}(t);if(!n)return;const r=e._component;g(r)||r.render||r.template||(r.template=n.innerHTML),n.innerHTML="";const o=i(n,!1,n instanceof SVGElement);return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),o},e})(Qa).use(rl).mount("#app");
