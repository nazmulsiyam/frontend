import{A as Ze,i as $e,l as N,G as ie,F as Le,g as A,ai as et,aj as Ae,_ as ne,m as K,aC as ee,ak as Pe,j as xe,al as tt,a2 as He,C as ke,aD as we,aE as at,O as rt,aF as st,k as it,B as nt,aw as Re,$ as lt,S as ot,a6 as ft,ac as Ee,aG as ve,z as ut,aH as Ve,P as ct,aI as _e,aJ as dt,Y as vt,aK as _t,aL as ht,aM as gt,ah as yt,aN as bt,aO as mt,b as Oe,am as Be,t as R,p as W,I as G,L as M,e as x,J as re,o as H,q as X,M as S,s as z,v as Q,w as qe}from"./Csq6swwR.js";import{a as pt,i as Tt,c as At,d as kt,b as wt,n as Et,f as Nt,l as Ye,s as Ge,e as Ne}from"./Bt46gHeY.js";import{a as w,t as L,c as q,d as Ct}from"./CYOvTfIo.js";import{i as se}from"./CKPaN40w.js";import{p as E,a as B,f as he,h as le,g as It,s as Dt,b as Mt}from"./I9CK69oH.js";import{d as St,g as ce,w as Qe,a as Lt,o as Pt}from"./kz9TlXHQ.js";function Ca(e,t){return t}function xt(e,t,a,r){for(var s=[],o=t.length,l=0;l<o;l++)at(t[l].e,s,!0);var h=o>0&&s.length===0&&a!==null;if(h){var c=a.parentNode;rt(c),c.append(a),r.clear(),O(e,t[0].prev,t[o-1].next)}st(s,()=>{for(var v=0;v<o;v++){var d=t[v];h||(r.delete(d.k),O(e,d.prev,d.next)),it(d.e,!h)}})}function Ht(e,t,a,r,s,o=null){var l=e,h={flags:t,items:new Map,first:null},c=(t&Ve)!==0;if(c){var v=e;l=N?ie(nt(v)):v.appendChild(Ze())}N&&Le();var d=null,m=!1,b=Re(()=>{var i=a();return ut(i)?i:i==null?[]:He(i)});$e(()=>{var i=A(b),f=i.length;if(m&&f===0)return;m=f===0;let n=!1;if(N){var y=l.data===et;y!==(f===0)&&(l=Ae(),ie(l),ne(!1),n=!0)}if(N){for(var u=null,_,p=0;p<f;p++){if(K.nodeType===8&&K.data===lt){l=K,n=!0,ne(!1);break}var k=i[p],g=r(k,p);_=je(K,h,u,null,k,g,p,s,t,a),h.items.set(g,_),u=_}f>0&&ie(Ae())}if(!N){var T=ot;Rt(i,h,l,s,t,(T.f&ee)!==0,r,a)}o!==null&&(f===0?d?Pe(d):d=xe(()=>o(l)):d!==null&&tt(d,()=>{d=null})),n&&ne(!0),A(b)}),N&&(l=K)}function Rt(e,t,a,r,s,o,l,h){var ye,be,me,pe;var c=(s&_t)!==0,v=(s&(_e|ve))!==0,d=e.length,m=t.items,b=t.first,i=b,f,n=null,y,u=[],_=[],p,k,g,T;if(c)for(T=0;T<d;T+=1)p=e[T],k=l(p,T),g=m.get(k),g!==void 0&&((ye=g.a)==null||ye.measure(),(y??(y=new Set)).add(g));for(T=0;T<d;T+=1){if(p=e[T],k=l(p,T),g=m.get(k),g===void 0){var F=i?i.e.nodes_start:a;n=je(F,t,n,n===null?t.first:n.next,p,k,T,r,s,h),m.set(k,n),u=[],_=[],i=n.next;continue}if(v&&Vt(g,p,T,s),g.e.f&ee&&(Pe(g.e),c&&((be=g.a)==null||be.unfix(),(y??(y=new Set)).delete(g))),g!==i){if(f!==void 0&&f.has(g)){if(u.length<_.length){var V=_[0],C;n=V.prev;var $=u[0],J=u[u.length-1];for(C=0;C<u.length;C+=1)Ce(u[C],V,a);for(C=0;C<_.length;C+=1)f.delete(_[C]);O(t,$.prev,J.next),O(t,n,$),O(t,J,V),i=V,n=J,T-=1,u=[],_=[]}else f.delete(g),Ce(g,i,a),O(t,g.prev,g.next),O(t,g,n===null?t.first:n.next),O(t,n,g),n=g;continue}for(u=[],_=[];i!==null&&i.k!==k;)(o||!(i.e.f&ee))&&(f??(f=new Set)).add(i),_.push(i),i=i.next;if(i===null)continue;g=i}u.push(g),n=g,i=g.next}if(i!==null||f!==void 0){for(var Y=f===void 0?[]:He(f);i!==null;)(o||!(i.e.f&ee))&&Y.push(i),i=i.next;var P=Y.length;if(P>0){var Xe=s&Ve&&d===0?a:null;if(c){for(T=0;T<P;T+=1)(me=Y[T].a)==null||me.measure();for(T=0;T<P;T+=1)(pe=Y[T].a)==null||pe.fix()}xt(t,Y,Xe,m)}}c&&ct(()=>{var Te;if(y!==void 0)for(g of y)(Te=g.a)==null||Te.apply()}),ke.first=t.first&&t.first.e,ke.last=n&&n.e}function Vt(e,t,a,r){r&_e&&we(e.v,t),r&ve?we(e.i,a):e.i=a}function je(e,t,a,r,s,o,l,h,c,v){var d=(c&_e)!==0,m=(c&dt)===0,b=d?m?ft(s):Ee(s):s,i=c&ve?Ee(l):l,f={i,v:b,k:o,a:null,e:null,prev:a,next:r};try{return f.e=xe(()=>h(e,b,i,v),N),f.e.prev=a&&a.e,f.e.next=r&&r.e,a===null?t.first=f:(a.next=f,a.e.next=f.e),r!==null&&(r.prev=f,r.e.prev=f.e),f}finally{}}function Ce(e,t,a){for(var r=e.next?e.next.e.nodes_start:a,s=t?t.e.nodes_start:a,o=e.e.nodes_start;o!==r;){var l=vt(o);s.before(o),o=l}}function O(e,t,a){t===null?e.first=a:(t.next=a,t.e.next=a&&a.e),a!==null&&(a.prev=t,a.e.prev=t&&t.e)}function ze(e,t,a,r,s){var h;N&&Le();var o=(h=t.$$slots)==null?void 0:h[a],l=!1;o===!0&&(o=t.children,l=!0),o===void 0?s!==null&&s(e):o(e,l?()=>r:r)}function Fe(e){var t,a,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(a=Fe(e[t]))&&(r&&(r+=" "),r+=a)}else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}function Ot(){for(var e,t,a=0,r="",s=arguments.length;a<s;a++)(e=arguments[a])&&(t=Fe(e))&&(r&&(r+=" "),r+=t);return r}function Bt(e){return typeof e=="object"?Ot(e):e??""}function Ia(e){if(N){var t=!1,a=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var r=e.value;U(e,"value",null),e.value=r}if(e.hasAttribute("checked")){var s=e.checked;U(e,"checked",null),e.checked=s}}};e.__on_r=a,ht(a),pt()}}function qt(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function U(e,t,a,r){var s=e.__attributes??(e.__attributes={});N&&(s[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName==="LINK")||s[t]!==(s[t]=a)&&(t==="style"&&"__styles"in e&&(e.__styles={}),t==="loading"&&(e[gt]=a),a==null?e.removeAttribute(t):typeof a!="string"&&Je(e).includes(t)?e[t]=a:e.setAttribute(t,a))}function Yt(e,t,a,r,s=!1,o=!1,l=!1){var h=t||{},c=e.tagName==="OPTION";for(var v in t)v in a||(a[v]=null);a.class&&(a.class=Bt(a.class)),r!==void 0&&(a.class=a.class?a.class+" "+r:r);var d=Je(e),m=e.__attributes??(e.__attributes={});for(const u in a){let _=a[u];if(c&&u==="value"&&_==null){e.value=e.__value="",h[u]=_;continue}var b=h[u];if(_!==b){h[u]=_;var i=u[0]+u[1];if(i!=="$$"){if(i==="on"){const p={},k="$$"+u;let g=u.slice(2);var f=Nt(g);if(Tt(g)&&(g=g.slice(0,-7),p.capture=!0),!f&&b){if(_!=null)continue;e.removeEventListener(g,h[k],p),h[k]=null}if(_!=null)if(f)e[`__${g}`]=_,kt([g]);else{let T=function(F){h[u].call(this,F)};h[k]=At(g,e,T,p)}else f&&(e[`__${g}`]=void 0)}else if(u==="style"&&_!=null)e.style.cssText=_+"";else if(u==="autofocus")wt(e,!!_);else if(u==="__value"||u==="value"&&_!=null)e.value=e[u]=e.__value=_;else if(u==="selected"&&c)qt(e,_);else{var n=u;s||(n=Et(n));var y=n==="defaultValue"||n==="defaultChecked";if(_==null&&!o&&!y)if(m[u]=null,n==="value"||n==="checked"){let p=e;if(n==="value"){let k=p.defaultValue;p.removeAttribute(n),p.defaultValue=k}else{let k=p.defaultChecked;p.removeAttribute(n),p.defaultChecked=k}}else e.removeAttribute(u);else y||d.includes(n)&&(o||typeof _!="string")?e[n]=_:typeof _!="function"&&(N&&(n==="src"||n==="href"||n==="srcset")||U(e,n,_))}u==="style"&&"__styles"in e&&(e.__styles={})}}}return h}var Ie=new Map;function Je(e){var t=Ie.get(e.nodeName);if(t)return t;Ie.set(e.nodeName,t=[]);for(var a,r=e,s=Element.prototype;s!==r;){a=bt(r);for(var o in a)a[o].set&&t.push(o);r=yt(r)}return t}function Ke(e,t,a){var r=e.__className,s=Gt(t);N&&e.className===s?e.__className=s:(r!==s||N&&e.className!==s)&&(t==null?e.removeAttribute("class"):e.className=s,e.__className=s)}function Gt(e,t){return(e??"")+""}function De(e,t,a){if(a){if(e.classList.contains(t))return;e.classList.add(t)}else{if(!e.classList.contains(t))return;e.classList.remove(t)}}function I(e,t,a,r){var s=e.__styles??(e.__styles={});s[t]!==a&&(s[t]=a,a==null?e.style.removeProperty(t):e.style.setProperty(t,a,""))}function Da(e,t,a=t){var r=mt();Ye(e,"input",s=>{var o=s?e.defaultValue:e.value;if(o=oe(e)?fe(o):o,a(o),r&&o!==(o=t())){var l=e.selectionStart,h=e.selectionEnd;e.value=o??"",h!==null&&(e.selectionStart=l,e.selectionEnd=Math.min(h,e.value.length))}}),(N&&e.defaultValue!==e.value||Oe(t)==null&&e.value)&&a(oe(e)?fe(e.value):e.value),Be(()=>{var s=t();oe(e)&&s===fe(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function Ma(e,t,a=t){Ye(e,"change",r=>{var s=r?e.defaultChecked:e.checked;a(s)}),(N&&e.defaultChecked!==e.checked||Oe(t)==null)&&a(e.checked),Be(()=>{var r=t();e.checked=!!r})}function oe(e){var t=e.type;return t==="number"||t==="range"}function fe(e){return e===""?null:+e}function Qt(e,t,a,r){var s,o,l=!1,h=a.length>=2,c=(f,n,y)=>{if(s=n,h&&(o=f),!l){let u=t(f,n,y);if(t.length<2)n(u);else return u}l=!1},v=St(e,c,r),d=!Array.isArray(e);function m(f){var n=a(f,o);d?(l=!0,e.set(n)):n.forEach((y,u)=>{l=!0,e[u].set(y)}),l=!1}var b=!1;function i(f){var n,y,u,_;if(b){_=f(ce(v)),s(_);return}var p=v.subscribe(k=>{b?n?y=!0:n=!0:u=k});_=f(u),b=!0,s(_),p(),b=!1,y&&(_=ce(v)),n&&m(_)}return{subscribe:v.subscribe,set(f){i(()=>f)},update:i}}const jt=20,j=Qe([]),ge=Qe(null),te=new Map,Me=e=>{if(te.has(e))return;const t=setTimeout(()=>{te.delete(e),We(e)},1e3);te.set(e,t)},zt=e=>{const t=te.get(e);t&&clearTimeout(t)};function Ue(e){e.id&&zt(e.id),j.update(t=>t.map(a=>a.id===e.id?{...a,...e}:a))}function Ft(e){j.update(t=>[e,...t].slice(0,jt))}function Jt(e){ce(j).find(t=>t.id===e.id)?Ue(e):Ft(e)}function Kt(e){j.update(t=>(e?Me(e):t.forEach(a=>{Me(a.id)}),t.map(a=>a.id===e||e===void 0?{...a,visible:!1}:a)))}function We(e){j.update(t=>e===void 0?[]:t.filter(a=>a.id!==e))}function Ut(e){ge.set(e)}function Wt(e){let t;ge.update(a=>(t=e-(a||0),null)),j.update(a=>a.map(r=>({...r,pauseDuration:r.pauseDuration+t})))}const Xt={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3};function Zt(e={}){return{toasts:Qt(j,a=>a.map(r=>{var s,o;return{...e,...e[r.type],...r,duration:r.duration||((s=e[r.type])==null?void 0:s.duration)||(e==null?void 0:e.duration)||Xt[r.type],style:[e.style,(o=e[r.type])==null?void 0:o.style,r.style].join(";")}}),a=>a),pausedAt:ge}}const $t=e=>typeof e=="function",Se=(e,t)=>$t(e)?e(t):e,ea=(()=>{let e=0;return()=>(e+=1,e.toString())})(),de=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){const t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),ta=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(a==null?void 0:a.id)||ea()}),Z=e=>(t,a)=>{const r=ta(t,e,a);return Jt(r),r.id},D=(e,t)=>Z("blank")(e,t);D.error=Z("error");D.success=Z("success");D.loading=Z("loading");D.custom=Z("custom");D.dismiss=e=>{Kt(e)};D.remove=e=>We(e);D.promise=(e,t,a)=>{const r=D.loading(t.loading,{...a,...a==null?void 0:a.loading});return e.then(s=>(D.success(Se(t.success,s),{id:r,...a,...a==null?void 0:a.success}),s)).catch(s=>{D.error(Se(t.error,s),{id:r,...a,...a==null?void 0:a.error})}),e};function aa(e,t,a){const{reverseOrder:r,gutter:s=8,defaultPosition:o}=a||{},l=t.filter(d=>(d.position||o)===(e.position||o)&&d.height),h=l.findIndex(d=>d.id===e.id),c=l.filter((d,m)=>m<h&&d.visible).length;return l.filter(d=>d.visible).slice(...r?[c+1]:[0,c]).reduce((d,m)=>d+(m.height||0)+s,0)}const ra={startPause(){Ut(Date.now())},endPause(){Wt(Date.now())},updateHeight:(e,t)=>{Ue({id:e,height:t})},calculateOffset:aa};function sa(e){const{toasts:t,pausedAt:a}=Zt(e),r=new Map;let s;const o=[a.subscribe(l=>{if(l){for(const[,h]of r)clearTimeout(h);r.clear()}s=l}),t.subscribe(l=>{if(s)return;const h=Date.now();for(const c of l){if(r.has(c.id)||c.duration===1/0)continue;const v=(c.duration||0)+c.pauseDuration-(h-c.createdAt);if(v<0)return c.visible&&D.dismiss(c.id),null;r.set(c.id,setTimeout(()=>D.dismiss(c.id),v))}})];return Lt(()=>{for(const l of o)l()}),{toasts:t,handlers:ra}}var ia=L('<div class="svelte-11kvm4p"></div>');function na(e,t){let a=E(t,"primary",8,"#61d345"),r=E(t,"secondary",8,"#fff");var s=ia();R(()=>{I(s,"--primary",a()),I(s,"--secondary",r())}),w(e,s)}var la=L('<div class="svelte-1ee93ns"></div>');function oa(e,t){let a=E(t,"primary",8,"#ff4b4b"),r=E(t,"secondary",8,"#fff");var s=la();R(()=>{I(s,"--primary",a()),I(s,"--secondary",r())}),w(e,s)}var fa=L('<div class="svelte-1j7dflg"></div>');function ua(e,t){let a=E(t,"primary",8,"#616161"),r=E(t,"secondary",8,"#e0e0e0");var s=fa();R(()=>{I(s,"--primary",a()),I(s,"--secondary",r())}),w(e,s)}var ca=L('<div class="animated svelte-1kgeier"> </div>'),da=L('<div class="status svelte-1kgeier"><!></div>'),va=L('<div class="indicator svelte-1kgeier"><!> <!></div>');function ue(e,t){W(t,!1);const a=S(),r=S(),s=S();let o=E(t,"toast",8);G(()=>(A(a),A(r),A(s),x(o())),()=>{(d=>(M(a,d.type),M(r,d.icon),M(s,d.iconTheme)))(o())}),re();var l=q(),h=H(l);{var c=d=>{var m=ca(),b=z(m,!0);Q(m),R(()=>Ge(b,A(r))),w(d,m)},v=d=>{var m=q(),b=H(m);{var i=n=>{var y=q(),u=H(y);he(u,()=>A(r),(_,p)=>{p(_,{})}),w(n,y)},f=n=>{var y=q(),u=H(y);{var _=p=>{var k=va(),g=z(k);ua(g,le(()=>A(s)));var T=qe(g,2);{var F=V=>{var C=da(),$=z(C);{var J=P=>{oa(P,le(()=>A(s)))},Y=P=>{na(P,le(()=>A(s)))};B($,P=>{A(a)==="error"?P(J):P(Y,!1)})}Q(C),w(V,C)};B(T,V=>{A(a)!=="loading"&&V(F)})}Q(k),w(p,k)};B(u,p=>{A(a)!=="blank"&&p(_)},!0)}w(n,y)};B(b,n=>{typeof A(r)<"u"?n(i):n(f,!1)},!0)}w(d,m)};B(h,d=>{typeof A(r)=="string"?d(c):d(v,!1)})}w(e,l),X()}var _a=L("<div><!></div>");function ae(e,t){W(t,!1);let a=E(t,"toast",8);se();var r=_a();let s;var o=z(r);{var l=c=>{var v=Ct();R(()=>Ge(v,a().message)),w(c,v)},h=c=>{var v=q(),d=H(v);he(d,()=>a().message,(m,b)=>{b(m,{get toast(){return a()}})}),w(c,v)};B(o,c=>{typeof a().message=="string"?c(l):c(h,!1)})}Q(r),R(()=>s=Yt(r,s,{class:"message",...a().ariaProps},"svelte-1nauejd")),w(e,r),X()}var ha=L("<!> <!>",1),ga=L("<div><!></div>");function ya(e,t){W(t,!1);let a=E(t,"toast",8),r=E(t,"position",24,()=>{}),s=E(t,"style",8,""),o=E(t,"Component",24,()=>{}),l=S(),h=S();G(()=>(x(a()),x(r()),de),()=>{const b=(a().position||r()||"top-center").includes("top");M(l,b?1:-1);const[i,f]=de()?["fadeIn","fadeOut"]:["enter","exit"];M(h,a().visible?i:f)}),re(),se();var c=ga(),v=z(c);{var d=b=>{var i=q(),f=H(i);he(f,o,(n,y)=>{y(n,{$$slots:{icon:(u,_)=>{ue(u,{get toast(){return a()},slot:"icon"})},message:(u,_)=>{ae(u,{get toast(){return a()},slot:"message"})}}})}),w(b,i)},m=b=>{var i=q(),f=H(i);ze(f,t,"default",{ToastIcon:ue,ToastMessage:ae,get toast(){return a()}},n=>{var y=ha(),u=H(y);ue(u,{get toast(){return a()}});var _=qe(u,2);ae(_,{get toast(){return a()}}),w(n,y)}),w(b,i)};B(v,b=>{o()?b(d):b(m,!1)})}Q(c),R(()=>{Ke(c,`base ${(a().height?A(h):"transparent")??""} ${a().className||""} svelte-ug60r4`),U(c,"style",`${s()??""}; ${a().style??""}`),I(c,"--factor",A(l))}),w(e,c),X()}var ba=L('<div class="wrapper svelte-v01oml"><!></div>');function ma(e,t){W(t,!1);const a=S(),r=S(),s=S(),o=S();let l=E(t,"toast",8),h=E(t,"setHeight",8),c=S();Pt(()=>{h()(A(c).getBoundingClientRect().height)}),G(()=>x(l()),()=>{var i;M(a,(i=l().position)!=null&&i.includes("top")?0:null)}),G(()=>x(l()),()=>{var i;M(r,(i=l().position)!=null&&i.includes("bottom")?0:null)}),G(()=>x(l()),()=>{var i;M(s,(i=l().position)!=null&&i.includes("top")?1:-1)}),G(()=>x(l()),()=>{var i,f,n;M(o,((i=l().position)==null?void 0:i.includes("center"))&&"center"||(((f=l().position)==null?void 0:f.includes("right"))||((n=l().position)==null?void 0:n.includes("end")))&&"flex-end"||null)}),re(),se();var v=ba(),d=z(v);{var m=i=>{ae(i,{get toast(){return l()}})},b=i=>{var f=q(),n=H(f);ze(n,t,"default",{get toast(){return l()}},y=>{ya(y,{get toast(){return l()},get position(){return l().position}})}),w(i,f)};B(d,i=>{l().type==="custom"?i(m):i(b,!1)})}Q(v),It(v,i=>M(c,i),()=>A(c)),R(i=>{De(v,"active",l().visible),De(v,"transition",i),I(v,"--factor",A(s)),I(v,"--offset",l().offset),I(v,"top",A(a)),I(v,"bottom",A(r)),I(v,"justify-content",A(o))},[()=>!de()],Re),w(e,v),X()}var pa=L('<div role="alert"></div>');function Sa(e,t){W(t,!1);const[a,r]=Dt(),s=()=>Mt(m,"$toasts",a);let o=E(t,"reverseOrder",8,!1),l=E(t,"position",8,"top-center"),h=E(t,"toastOptions",24,()=>{}),c=E(t,"gutter",8,8),v=E(t,"containerStyle",24,()=>{}),d=E(t,"containerClassName",24,()=>{});const{toasts:m,handlers:b}=sa(h());let i=S();G(()=>(s(),x(l()),x(o()),x(c())),()=>{M(i,s().map(n=>({...n,position:n.position||l(),offset:b.calculateOffset(n,s(),{reverseOrder:o(),gutter:c(),defaultPosition:l()})})))}),re(),se();var f=pa();Ht(f,5,()=>A(i),n=>n.id,(n,y)=>{ma(n,{get toast(){return A(y)},setHeight:u=>b.updateHeight(A(y).id,u)})}),Q(f),R(()=>{Ke(f,`toaster ${d()||""} svelte-1phplh9`),U(f,"style",v())}),Ne("mouseenter",f,function(...n){var y;(y=b.startPause)==null||y.apply(this,n)}),Ne("mouseleave",f,function(...n){var y;(y=b.endPause)==null||y.apply(this,n)}),w(e,f),X(),r()}export{Sa as T,Ma as a,Da as b,Ht as e,Ca as i,Ia as r,Yt as s,D as t};
