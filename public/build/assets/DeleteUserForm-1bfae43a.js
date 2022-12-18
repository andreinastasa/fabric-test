import{T as g,r as s,b as Be,a as v,j as M,u as Ue}from"./app-e988f306.js";import{T as je,I as _e}from"./TextInput-7da9aab7.js";import{I as We}from"./InputLabel-6a38ad14.js";import{a as q,s as U,e as ne,u as A,b as oe,C as $,$ as P,o as E,y as T,p as Ye,t as ae,f as ye,T as Ge,S as pe,c as qe,d as me,m as Ve,J}from"./transition-83edec64.js";var ge;let ze=0;function ve(){return++ze}let I=(ge=g.useId)!=null?ge:function(){let e=q(),[t,r]=g.useState(e?ve:null);return U(()=>{t===null&&r(ve())},[t]),t!=null?""+t:void 0};function le(e){return ne?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let Q=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var S=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(S||{}),Ee=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Ee||{}),Xe=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Xe||{});function Je(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(Q)).sort((t,r)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(r.tabIndex||Number.MAX_SAFE_INTEGER)))}var $e=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))($e||{});function Ke(e,t=0){var r;return e===((r=le(e))==null?void 0:r.body)?!1:A(t,{[0](){return e.matches(Q)},[1](){let n=e;for(;n!==null;){if(n.matches(Q))return!0;n=n.parentElement}return!1}})}function N(e){e==null||e.focus({preventScroll:!0})}let Qe=["textarea","input"].join(",");function Ze(e){var t,r;return(r=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,Qe))!=null?r:!1}function et(e,t=r=>r){return e.slice().sort((r,n)=>{let o=t(r),l=t(n);if(o===null||l===null)return 0;let a=o.compareDocumentPosition(l);return a&Node.DOCUMENT_POSITION_FOLLOWING?-1:a&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function W(e,t,{sorted:r=!0,relativeTo:n=null,skipElements:o=[]}={}){let l=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,a=Array.isArray(e)?r?et(e):e:Je(e);o.length>0&&(a=a.filter(p=>!o.includes(p))),n=n??l.activeElement;let i=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,a.indexOf(n))-1;if(t&4)return Math.max(0,a.indexOf(n))+1;if(t&8)return a.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=t&32?{preventScroll:!0}:{},u=0,f=a.length,m;do{if(u>=f||u+f<=0)return 0;let p=d+u;if(t&16)p=(p+f)%f;else{if(p<0)return 3;if(p>=f)return 1}m=a[p],m==null||m.focus(c),u+=i}while(m!==l.activeElement);return t&6&&Ze(m)&&m.select(),m.hasAttribute("tabindex")||m.setAttribute("tabindex","0"),2}function K(e,t,r){let n=oe(t);s.exports.useEffect(()=>{function o(l){n.current(l)}return document.addEventListener(e,o,r),()=>document.removeEventListener(e,o,r)},[e,r])}function tt(e,t,r=!0){let n=s.exports.useRef(!1);s.exports.useEffect(()=>{requestAnimationFrame(()=>{n.current=r})},[r]);function o(a,i){if(!n.current||a.defaultPrevented)return;let d=function u(f){return typeof f=="function"?u(f()):Array.isArray(f)||f instanceof Set?f:[f]}(e),c=i(a);if(c!==null&&c.getRootNode().contains(c)){for(let u of d){if(u===null)continue;let f=u instanceof HTMLElement?u:u.current;if(f!=null&&f.contains(c)||a.composed&&a.composedPath().includes(f))return}return!Ke(c,$e.Loose)&&c.tabIndex!==-1&&a.preventDefault(),t(a,c)}}let l=s.exports.useRef(null);K("mousedown",a=>{var i,d;n.current&&(l.current=((d=(i=a.composedPath)==null?void 0:i.call(a))==null?void 0:d[0])||a.target)},!0),K("click",a=>{!l.current||(o(a,()=>l.current),l.current=null)},!0),K("blur",a=>o(a,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function rt(e){let t=e.parentElement,r=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(r=t),t=t.parentElement;let n=(t==null?void 0:t.getAttribute("disabled"))==="";return n&&nt(r)?!1:n}function nt(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}let ot="div";var Y=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(Y||{});let Z=$(function(e,t){let{features:r=1,...n}=e,o={ref:t,"aria-hidden":(r&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return P({ourProps:o,theirProps:n,slot:{},defaultTag:ot,name:"Hidden"})});var Pe=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Pe||{});function Te(e,t){let r=s.exports.useRef([]),n=E(e);s.exports.useEffect(()=>{let o=[...r.current];for(let[l,a]of t.entries())if(r.current[l]!==a){let i=n(t,o);return r.current=t,i}},[n,...t])}function at(e,t,r){let n=oe(t);s.exports.useEffect(()=>{function o(l){n.current(l)}return window.addEventListener(e,o,r),()=>window.removeEventListener(e,o,r)},[e,r])}var B=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(B||{});function lt(){let e=s.exports.useRef(0);return at("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function V(...e){return s.exports.useMemo(()=>le(...e),[...e])}function ie(e,t,r,n){let o=oe(r);s.exports.useEffect(()=>{e=e??window;function l(a){o.current(a)}return e.addEventListener(t,l,n),()=>e.removeEventListener(t,l,n)},[e,t,n])}let it="div";var Fe=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Fe||{});let H=Object.assign($(function(e,t){let r=s.exports.useRef(null),n=T(r,t),{initialFocus:o,containers:l,features:a=30,...i}=e;q()||(a=1);let d=V(r);st({ownerDocument:d},Boolean(a&16));let c=ut({ownerDocument:d,container:r,initialFocus:o},Boolean(a&2));ct({ownerDocument:d,container:r,containers:l,previousActiveElement:c},Boolean(a&8));let u=lt(),f=E(w=>{let x=r.current;x&&(F=>F())(()=>{A(u.current,{[B.Forwards]:()=>W(x,S.First,{skipElements:[w.relatedTarget]}),[B.Backwards]:()=>W(x,S.Last,{skipElements:[w.relatedTarget]})})})}),m=Ye(),p=s.exports.useRef(!1),O={ref:n,onKeyDown(w){w.key=="Tab"&&(p.current=!0,m.requestAnimationFrame(()=>{p.current=!1}))},onBlur(w){let x=new Set(l==null?void 0:l.current);x.add(r);let F=w.relatedTarget;!F||F.dataset.headlessuiFocusGuard!=="true"&&(De(x,F)||(p.current?W(r.current,A(u.current,{[B.Forwards]:()=>S.Next,[B.Backwards]:()=>S.Previous})|S.WrapAround,{relativeTo:w.target}):w.target instanceof HTMLElement&&N(w.target)))}};return g.createElement(g.Fragment,null,Boolean(a&4)&&g.createElement(Z,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:Y.Focusable}),P({ourProps:O,theirProps:i,defaultTag:it,name:"FocusTrap"}),Boolean(a&4)&&g.createElement(Z,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:Y.Focusable}))}),{features:Fe});function st({ownerDocument:e},t){let r=s.exports.useRef(null);ie(e==null?void 0:e.defaultView,"focusout",o=>{!t||r.current||(r.current=o.target)},!0),Te(()=>{t||((e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&N(r.current),r.current=null)},[t]);let n=s.exports.useRef(!1);s.exports.useEffect(()=>(n.current=!1,()=>{n.current=!0,ae(()=>{!n.current||(N(r.current),r.current=null)})}),[])}function ut({ownerDocument:e,container:t,initialFocus:r},n){let o=s.exports.useRef(null),l=ye();return Te(()=>{if(!n)return;let a=t.current;!a||ae(()=>{if(!l.current)return;let i=e==null?void 0:e.activeElement;if(r!=null&&r.current){if((r==null?void 0:r.current)===i){o.current=i;return}}else if(a.contains(i)){o.current=i;return}r!=null&&r.current?N(r.current):W(a,S.First)===Ee.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),o.current=e==null?void 0:e.activeElement})},[n]),o}function ct({ownerDocument:e,container:t,containers:r,previousActiveElement:n},o){let l=ye();ie(e==null?void 0:e.defaultView,"focus",a=>{if(!o||!l.current)return;let i=new Set(r==null?void 0:r.current);i.add(t);let d=n.current;if(!d)return;let c=a.target;c&&c instanceof HTMLElement?De(i,c)?(n.current=c,N(c)):(a.preventDefault(),a.stopPropagation(),N(d)):N(n.current)},!0)}function De(e,t){var r;for(let n of e)if((r=n.current)!=null&&r.contains(t))return!0;return!1}let L=new Set,D=new Map;function he(e){e.setAttribute("aria-hidden","true"),e.inert=!0}function we(e){let t=D.get(e);!t||(t["aria-hidden"]===null?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",t["aria-hidden"]),e.inert=t.inert)}function dt(e,t=!0){U(()=>{if(!t||!e.current)return;let r=e.current,n=le(r);if(n){L.add(r);for(let o of D.keys())o.contains(r)&&(we(o),D.delete(o));return n.querySelectorAll("body > *").forEach(o=>{if(o instanceof HTMLElement){for(let l of L)if(o.contains(l))return;L.size===1&&(D.set(o,{"aria-hidden":o.getAttribute("aria-hidden"),inert:o.inert}),he(o))}}),()=>{if(L.delete(r),L.size>0)n.querySelectorAll("body > *").forEach(o=>{if(o instanceof HTMLElement&&!D.has(o)){for(let l of L)if(o.contains(l))return;D.set(o,{"aria-hidden":o.getAttribute("aria-hidden"),inert:o.inert}),he(o)}});else for(let o of D.keys())we(o),D.delete(o)}}},[t])}let Se=s.exports.createContext(!1);function ft(){return s.exports.useContext(Se)}function ee(e){return g.createElement(Se.Provider,{value:e.force},e.children)}function pt(e){let t=ft(),r=s.exports.useContext(Ae),n=V(e),[o,l]=s.exports.useState(()=>{if(!t&&r!==null||ne)return null;let a=n==null?void 0:n.getElementById("headlessui-portal-root");if(a)return a;if(n===null)return null;let i=n.createElement("div");return i.setAttribute("id","headlessui-portal-root"),n.body.appendChild(i)});return s.exports.useEffect(()=>{o!==null&&(n!=null&&n.body.contains(o)||n==null||n.body.appendChild(o))},[o,n]),s.exports.useEffect(()=>{t||r!==null&&l(r.current)},[r,l,t]),o}let mt=s.exports.Fragment,gt=$(function(e,t){let r=e,n=s.exports.useRef(null),o=T(Ge(u=>{n.current=u}),t),l=V(n),a=pt(n),[i]=s.exports.useState(()=>{var u;return ne?null:(u=l==null?void 0:l.createElement("div"))!=null?u:null}),d=q(),c=s.exports.useRef(!1);return U(()=>{if(c.current=!1,!(!a||!i))return a.contains(i)||(i.setAttribute("data-headlessui-portal",""),a.appendChild(i)),()=>{c.current=!0,ae(()=>{var u;!c.current||!a||!i||(a.removeChild(i),a.childNodes.length<=0&&((u=a.parentElement)==null||u.removeChild(a)))})}},[a,i]),d?!a||!i?null:Be.exports.createPortal(P({ourProps:{ref:o},theirProps:r,defaultTag:mt,name:"Portal"}),i):null}),vt=s.exports.Fragment,Ae=s.exports.createContext(null),ht=$(function(e,t){let{target:r,...n}=e,o={ref:T(t)};return g.createElement(Ae.Provider,{value:r},P({ourProps:o,theirProps:n,defaultTag:vt,name:"Popover.Group"}))}),te=Object.assign(gt,{Group:ht}),Ne=s.exports.createContext(null);function Ce(){let e=s.exports.useContext(Ne);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,Ce),t}return e}function wt(){let[e,t]=s.exports.useState([]);return[e.length>0?e.join(" "):void 0,s.exports.useMemo(()=>function(r){let n=E(l=>(t(a=>[...a,l]),()=>t(a=>{let i=a.slice(),d=i.indexOf(l);return d!==-1&&i.splice(d,1),i}))),o=s.exports.useMemo(()=>({register:n,slot:r.slot,name:r.name,props:r.props}),[n,r.slot,r.name,r.props]);return g.createElement(Ne.Provider,{value:o},r.children)},[t])]}let xt="p",bt=$(function(e,t){let r=I(),{id:n=`headlessui-description-${r}`,...o}=e,l=Ce(),a=T(t);U(()=>l.register(n),[n,l.register]);let i={ref:a,...l.props,id:n};return P({ourProps:i,theirProps:o,slot:l.slot||{},defaultTag:xt,name:l.name||"Description"})}),se=s.exports.createContext(()=>{});se.displayName="StackContext";var re=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(re||{});function yt(){return s.exports.useContext(se)}function Et({children:e,onUpdate:t,type:r,element:n,enabled:o}){let l=yt(),a=E((...i)=>{t==null||t(...i),l(...i)});return U(()=>{let i=o===void 0||o===!0;return i&&a(0,r,n),()=>{i&&a(1,r,n)}},[a,r,n,o]),g.createElement(se.Provider,{value:a},e)}function $t(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}var Pt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Pt||{}),Tt=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(Tt||{});let Ft={[0](e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},G=s.exports.createContext(null);G.displayName="DialogContext";function j(e){let t=s.exports.useContext(G);if(t===null){let r=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,j),r}return t}function Dt(e,t,r=()=>[document.body]){s.exports.useEffect(()=>{var n;if(!t||!e)return;let o=Ve(),l=window.pageYOffset;function a(c,u,f){let m=c.style.getPropertyValue(u);return Object.assign(c.style,{[u]:f}),o.add(()=>{Object.assign(c.style,{[u]:m})})}let i=e.documentElement,d=((n=e.defaultView)!=null?n:window).innerWidth-i.clientWidth;if(a(i,"overflow","hidden"),d>0){let c=i.clientWidth-i.offsetWidth,u=d-c;a(i,"paddingRight",`${u}px`)}if($t()){a(e.body,"marginTop",`-${l}px`),window.scrollTo(0,0);let c=null;o.addEventListener(e,"click",u=>{if(u.target instanceof HTMLElement)try{let f=u.target.closest("a");if(!f)return;let{hash:m}=new URL(f.href),p=e.querySelector(m);p&&!r().some(O=>O.contains(p))&&(c=p)}catch{}},!0),o.addEventListener(e,"touchmove",u=>{u.target instanceof HTMLElement&&!r().some(f=>f.contains(u.target))&&u.preventDefault()},{passive:!1}),o.add(()=>{window.scrollTo(0,window.pageYOffset+l),c&&c.isConnected&&(c.scrollIntoView({block:"nearest"}),c=null)})}return o.dispose},[e,t])}function St(e,t){return A(t.type,Ft,e,t)}let At="div",Nt=pe.RenderStrategy|pe.Static,Ct=$(function(e,t){let r=I(),{id:n=`headlessui-dialog-${r}`,open:o,onClose:l,initialFocus:a,__demoMode:i=!1,...d}=e,[c,u]=s.exports.useState(0),f=qe();o===void 0&&f!==null&&(o=A(f,{[me.Open]:!0,[me.Closed]:!1}));let m=s.exports.useRef(new Set),p=s.exports.useRef(null),O=T(p,t),w=s.exports.useRef(null),x=V(p),F=e.hasOwnProperty("open")||f!==null,ue=e.hasOwnProperty("onClose");if(!F&&!ue)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!F)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!ue)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof o!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${o}`);if(typeof l!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${l}`);let b=o?0:1,[C,Re]=s.exports.useReducer(St,{titleId:null,descriptionId:null,panelRef:s.exports.createRef()}),R=E(()=>l(!1)),ce=E(h=>Re({type:0,id:h})),z=q()?i?!1:b===0:!1,_=c>1,ke=s.exports.useContext(G)!==null,Le=_?"parent":"leaf";dt(p,_?z:!1);let de=E(()=>{var h,k;return[...Array.from((h=x==null?void 0:x.querySelectorAll("body > *, [data-headlessui-portal]"))!=null?h:[]).filter(y=>!(!(y instanceof HTMLElement)||y.contains(w.current)||C.panelRef.current&&y.contains(C.panelRef.current))),(k=C.panelRef.current)!=null?k:p.current]});tt(()=>de(),R,z&&!_),ie(x==null?void 0:x.defaultView,"keydown",h=>{h.defaultPrevented||h.key===Pe.Escape&&b===0&&(_||(h.preventDefault(),h.stopPropagation(),R()))}),Dt(x,b===0&&!ke,de),s.exports.useEffect(()=>{if(b!==0||!p.current)return;let h=new IntersectionObserver(k=>{for(let y of k)y.boundingClientRect.x===0&&y.boundingClientRect.y===0&&y.boundingClientRect.width===0&&y.boundingClientRect.height===0&&R()});return h.observe(p.current),()=>h.disconnect()},[b,p,R]);let[Me,Ie]=wt(),Oe=s.exports.useMemo(()=>[{dialogState:b,close:R,setTitleId:ce},C],[b,C,R,ce]),fe=s.exports.useMemo(()=>({open:b===0}),[b]),He={ref:O,id:n,role:"dialog","aria-modal":b===0?!0:void 0,"aria-labelledby":C.titleId,"aria-describedby":Me};return g.createElement(Et,{type:"Dialog",enabled:b===0,element:p,onUpdate:E((h,k,y)=>{k==="Dialog"&&A(h,{[re.Add](){m.current.add(y),u(X=>X+1)},[re.Remove](){m.current.add(y),u(X=>X-1)}})})},g.createElement(ee,{force:!0},g.createElement(te,null,g.createElement(G.Provider,{value:Oe},g.createElement(te.Group,{target:p},g.createElement(ee,{force:!1},g.createElement(Ie,{slot:fe,name:"Dialog.Description"},g.createElement(H,{initialFocus:a,containers:m,features:z?A(Le,{parent:H.features.RestoreFocus,leaf:H.features.All&~H.features.FocusLock}):H.features.None},P({ourProps:He,theirProps:d,slot:fe,defaultTag:At,features:Nt,visible:b===0,name:"Dialog"})))))))),g.createElement(Z,{features:Y.Hidden,ref:w}))}),Rt="div",kt=$(function(e,t){let r=I(),{id:n=`headlessui-dialog-overlay-${r}`,...o}=e,[{dialogState:l,close:a}]=j("Dialog.Overlay"),i=T(t),d=E(u=>{if(u.target===u.currentTarget){if(rt(u.currentTarget))return u.preventDefault();u.preventDefault(),u.stopPropagation(),a()}}),c=s.exports.useMemo(()=>({open:l===0}),[l]);return P({ourProps:{ref:i,id:n,"aria-hidden":!0,onClick:d},theirProps:o,slot:c,defaultTag:Rt,name:"Dialog.Overlay"})}),Lt="div",Mt=$(function(e,t){let r=I(),{id:n=`headlessui-dialog-backdrop-${r}`,...o}=e,[{dialogState:l},a]=j("Dialog.Backdrop"),i=T(t);s.exports.useEffect(()=>{if(a.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[a.panelRef]);let d=s.exports.useMemo(()=>({open:l===0}),[l]);return g.createElement(ee,{force:!0},g.createElement(te,null,P({ourProps:{ref:i,id:n,"aria-hidden":!0},theirProps:o,slot:d,defaultTag:Lt,name:"Dialog.Backdrop"})))}),It="div",Ot=$(function(e,t){let r=I(),{id:n=`headlessui-dialog-panel-${r}`,...o}=e,[{dialogState:l},a]=j("Dialog.Panel"),i=T(t,a.panelRef),d=s.exports.useMemo(()=>({open:l===0}),[l]),c=E(u=>{u.stopPropagation()});return P({ourProps:{ref:i,id:n,onClick:c},theirProps:o,slot:d,defaultTag:It,name:"Dialog.Panel"})}),Ht="h2",Bt=$(function(e,t){let r=I(),{id:n=`headlessui-dialog-title-${r}`,...o}=e,[{dialogState:l,setTitleId:a}]=j("Dialog.Title"),i=T(t);s.exports.useEffect(()=>(a(n),()=>a(null)),[n,a]);let d=s.exports.useMemo(()=>({open:l===0}),[l]);return P({ourProps:{ref:i,id:n},theirProps:o,slot:d,defaultTag:Ht,name:"Dialog.Title"})}),xe=Object.assign(Ct,{Backdrop:Mt,Panel:Ot,Overlay:kt,Title:Bt,Description:bt});function be({type:e="submit",className:t="",processing:r,children:n,onClick:o}){return v("button",{type:e,onClick:o,className:`inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 ${r&&"opacity-25"} `+t,disabled:r,children:n})}function Ut({children:e,show:t=!1,maxWidth:r="2xl",closeable:n=!0,onClose:o=()=>{}}){const l=()=>{n&&o()},a={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[r];return v(J,{show:t,as:s.exports.Fragment,leave:"duration-200",children:M(xe,{as:"div",id:"modal",className:"fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",onClose:l,children:[v(J.Child,{as:s.exports.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:v("div",{className:"absolute inset-0 bg-gray-500/75 "})}),v(J.Child,{as:s.exports.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:v(xe.Panel,{className:`mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${a}`,children:e})})]})})}function jt({type:e="button",className:t="",processing:r,children:n,onClick:o}){return v("button",{type:e,onClick:o,className:`inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${r&&"opacity-25"} `+t,disabled:r,children:n})}function qt({className:e}){const[t,r]=s.exports.useState(!1),n=s.exports.useRef(),{data:o,setData:l,delete:a,processing:i,reset:d,errors:c}=Ue({password:""}),u=()=>{r(!0)},f=p=>{p.preventDefault(),a(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>m(),onError:()=>n.current.focus(),onFinish:()=>d()})},m=()=>{r(!1),d()};return M("section",{className:`space-y-6 ${e}`,children:[M("header",{children:[v("h2",{className:"text-lg font-medium text-gray-900 ",children:"Delete Account"}),v("p",{className:"mt-1 text-sm text-gray-600 ",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."})]}),v(be,{onClick:u,children:"Delete Account"}),v(Ut,{show:t,onClose:m,children:M("form",{onSubmit:f,className:"p-6",children:[v("h2",{className:"text-lg font-medium text-gray-900 ",children:"Are you sure you want to delete your account?"}),v("p",{className:"mt-1 text-sm text-gray-600 ",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."}),M("div",{className:"mt-6",children:[v(We,{for:"password",value:"Password",className:"sr-only"}),v(je,{id:"password",type:"password",name:"password",ref:n,value:o.password,handleChange:p=>l("password",p.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Password"}),v(_e,{message:c.password,className:"mt-2"})]}),M("div",{className:"mt-6 flex justify-end",children:[v(jt,{onClick:m,children:"Cancel"}),v(be,{className:"ml-3",processing:i,children:"Delete Account"})]})]})})]})}export{qt as default};
