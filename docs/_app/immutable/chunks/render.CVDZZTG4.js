import{G as b,I as E,J as I,K as R,L as P,M as W,N as Y,O as H,P as S,Q as $,R as q,S as B,T as m,c as w,s as A,a as C,f as y,V as j,W as G,X as J,Y as K,Z as Q,_ as X,$ as Z,a0 as x,e as z,x as F,h as L,A as U,i as rr}from"./runtime.1cXzvj64.js";import{d as er}from"./disclose-version.KgU8vGWa.js";const tr=["touchstart","touchmove"];function ar(r){return tr.includes(r)}function nr(r){var e=I,a=R;b(null),E(null);try{return r()}finally{b(e),E(a)}}const ir=new Set,D=new Set;function sr(r,e,a,o){function i(t){if(o.capture||p.call(e,t),!t.cancelBubble)return nr(()=>a.call(this,t))}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?W(()=>{e.addEventListener(r,i,o)}):e.addEventListener(r,i,o),i}function lr(r,e,a,o,i){var t={capture:o,passive:i},u=sr(r,e,a,t);(e===document.body||e===window||e===document)&&P(()=>{e.removeEventListener(r,u,t)})}function p(r){var O;var e=this,a=e.ownerDocument,o=r.type,i=((O=r.composedPath)==null?void 0:O.call(r))||[],t=i[0]||r.target,u=0,_=r.__root;if(_){var c=i.indexOf(_);if(c!==-1&&(e===document||e===window)){r.__root=e;return}var h=i.indexOf(e);if(h===-1)return;c<=h&&(u=c)}if(t=i[u]||r.target,t!==e){Y(r,"currentTarget",{configurable:!0,get(){return t||a}});var T=I,f=R;b(null),E(null);try{for(var n,s=[];t!==null;){var l=t.assignedSlot||t.parentNode||t.host||null;try{var d=t["__"+o];if(d!==void 0&&!t.disabled)if(H(d)){var[k,...M]=d;k.apply(t,[r,...M])}else d.call(t,r)}catch(g){n?s.push(g):n=g}if(r.cancelBubble||l===e||l===null)break;t=l}if(n){for(let g of s)queueMicrotask(()=>{throw g});throw n}}finally{r.__root=e,delete r.currentTarget,b(T),E(f)}}}function cr(r,e){var a=e==null?"":typeof e=="object"?e+"":e;a!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=a,r.nodeValue=a==null?"":a+"")}function or(r,e){return V(r,e)}function dr(r,e){S(),e.intro=e.intro??!1;const a=e.target,o=L,i=y;try{for(var t=$(a);t&&(t.nodeType!==8||t.data!==q);)t=B(t);if(!t)throw m;w(!0),A(t),C();const u=V(r,{...e,anchor:t});if(y===null||y.nodeType!==8||y.data!==j)throw G(),m;return w(!1),u}catch(u){if(u===m)return e.recover===!1&&J(),S(),K(a),w(!1),or(r,e);throw u}finally{w(o),A(i)}}const v=new Map;function V(r,{target:e,anchor:a,props:o={},events:i,context:t,intro:u=!0}){S();var _=new Set,c=f=>{for(var n=0;n<f.length;n++){var s=f[n];if(!_.has(s)){_.add(s);var l=ar(s);e.addEventListener(s,p,{passive:l});var d=v.get(s);d===void 0?(document.addEventListener(s,p,{passive:l}),v.set(s,1)):v.set(s,d+1)}}};c(Q(ir)),D.add(c);var h=void 0,T=X(()=>{var f=a??e.appendChild(x());return z(()=>{if(t){F({});var n=rr;n.c=t}i&&(o.$$events=i),L&&er(f,null),h=r(f,o)||{},L&&(R.nodes_end=y),t&&U()}),()=>{var l;for(var n of _){e.removeEventListener(n,p);var s=v.get(n);--s===0?(document.removeEventListener(n,p),v.delete(n)):v.set(n,s)}D.delete(c),f!==a&&((l=f.parentNode)==null||l.removeChild(f))}});return N.set(h,T),h}let N=new WeakMap;function _r(r,e){const a=N.get(r);return a?(N.delete(r),a(e)):(Z(),Promise.resolve())}export{lr as e,dr as h,or as m,cr as s,_r as u};
