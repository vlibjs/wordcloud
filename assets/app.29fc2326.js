var Fe=Object.defineProperty,Ve=Object.defineProperties;var qe=Object.getOwnPropertyDescriptors;var le=Object.getOwnPropertySymbols;var We=Object.prototype.hasOwnProperty,Ge=Object.prototype.propertyIsEnumerable;var ue=(e,t,n)=>t in e?Fe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,E=(e,t)=>{for(var n in t||(t={}))We.call(t,n)&&ue(e,n,t[n]);if(le)for(var n of le(t))Ge.call(t,n)&&ue(e,n,t[n]);return e},I=(e,t)=>Ve(e,qe(t));import{r as ee,m as de,a as Le,n as Je,i as Ke,d as k,h as U,_ as m,o as u,c as p,b as l,e as h,u as d,t as G,f as B,g as L,w as A,j as y,k as F,v as V,l as S,p as f,q as H,s as te,x as z,y as J,z as Ye,A as b,B as ne,C as Se,D as Ce,E as se,F as O,G as K,H as Xe,I as Pe,J as Qe,K as Ze}from"./plugin-vue_export-helper.ef6027a8.js";const T=typeof window!="undefined";function Ee(e,t){return`${e}${t}`.replace(/\/+/g,"/")}function Ae(e){let t=e.replace(/\.html$/,"");if(t.endsWith("/")&&(t+="index"),T){const n="/wordcloud/";t=t.slice(n.length).replace(/\//g,"_")+".md";const s=__VP_HASH_MAP__[t.toLowerCase()];t=`${n}assets/${t}.${s}.js`}else t=`./${t.slice(1).replace(/\//g,"_")}.md.js`;return t}const Be=Symbol(),pe="http://a.com",et=()=>({path:"/",component:null,data:null});function tt(e,t){const n=ee(et()),s=typeof window!="undefined";function a(r=s?location.href:"/"){const i=new URL(r,pe);return!i.pathname.endsWith("/")&&!i.pathname.endsWith(".html")&&(i.pathname+=".html",r=i.pathname+i.search+i.hash),s&&(history.replaceState({scrollPosition:window.scrollY},document.title),history.pushState(null,"",r)),c(r)}let o=null;async function c(r,i=0){const _=new URL(r,pe),g=o=_.pathname;try{let $=e(g);if("then"in $&&typeof $.then=="function"&&($=await $),o===g){o=null;const{default:x,__pageData:w}=$;if(!x)throw new Error(`Invalid route component: ${x}`);n.path=g,n.component=de(x),n.data=Le(JSON.parse(w)),s&&Je(()=>{if(_.hash&&!i){const C=document.querySelector(decodeURIComponent(_.hash));if(C){_e(C,_.hash);return}}window.scrollTo(0,i)})}}catch($){$.message.match(/fetch/)||console.error($),o===g&&(o=null,n.path=g,n.component=t?de(t):null)}}return s&&(window.addEventListener("click",r=>{const i=r.target.closest("a");if(i){const{href:_,protocol:g,hostname:$,pathname:x,hash:w,target:C}=i,M=window.location,D=x.match(/\.\w+$/);!r.ctrlKey&&!r.shiftKey&&!r.altKey&&!r.metaKey&&C!=="_blank"&&g===M.protocol&&$===M.hostname&&!(D&&D[0]!==".html")&&(r.preventDefault(),x===M.pathname?w&&w!==M.hash&&(history.pushState(null,"",w),_e(i,w,i.classList.contains("header-anchor"))):a(_))}},{capture:!0}),window.addEventListener("popstate",r=>{c(location.href,r.state&&r.state.scrollPosition||0)}),window.addEventListener("hashchange",r=>{r.preventDefault()})),{route:n,go:a}}function nt(){const e=Ke(Be);if(!e)throw new Error("useRouter() is called without provider.");return e}function P(){return nt().route}function _e(e,t,n=!1){const s=document.querySelector(".nav-bar").offsetHeight,a=e.classList.contains(".header-anchor")?e:document.querySelector(decodeURIComponent(t));if(a){const o=a.offsetTop-s-15;!n||Math.abs(o-window.scrollY)>window.innerHeight?window.scrollTo(0,o):window.scrollTo({left:0,top:o,behavior:"smooth"})}}const st=k({name:"VitePressContent",setup(){const e=P();return()=>e.component?U(e.component):null}});const ot={setup(){return{}}},at={t:"1596458734865",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4898","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"16",height:"16"},rt=l("path",{d:"M68.608 962.56V206.848h740.864V962.56H68.608zM746.496 271.36H131.584v629.248h614.912V271.36zM131.584 262.144","p-id":"4899",fill:"#666"},null,-1),ct=l("path",{d:"M219.136 65.024v116.224h62.976V129.536h614.912v629.248h-60.416v61.952h123.392V65.024z","p-id":"4900",fill:"#666"},null,-1),it=[rt,ct];function lt(e,t,n,s,a,o){return u(),p("svg",at,it)}var ut=m(ot,[["render",lt]]);const dt={setup(){return{}}},pt={t:"1596458647160",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2840","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"22",height:"22"},_t=l("path",{d:"M311.1 739c-6.1 0-12.2-2.3-16.8-7L69.7 507.4l224.6-224.6c9.3-9.3 24.3-9.3 33.6 0s9.3 24.3 0 33.6l-191 191 191 191c9.3 9.3 9.3 24.3 0 33.6-4.6 4.7-10.7 7-16.8 7zM711.5 739c-6.1 0-12.2-2.3-16.8-7-9.3-9.3-9.3-24.3 0-33.6l191-191-191-191c-9.3-9.3-9.3-24.3 0-33.6s24.3-9.3 33.6 0L953 507.4 728.3 732c-4.6 4.7-10.7 7-16.8 7zM418.5 814.7c-2.4 0-4.8-0.4-7.2-1.1-12.5-4-19.4-17.3-15.5-29.8l179.6-567.1c4-12.5 17.3-19.4 29.8-15.5 12.5 4 19.4 17.3 15.5 29.8L441.1 798.1a23.73 23.73 0 0 1-22.6 16.6z",fill:"#666","p-id":"2841"},null,-1),ht=[_t];function ft(e,t,n,s,a,o){return u(),p("svg",pt,ht)}var vt=m(dt,[["render",ft]]);const mt=["href"],gt=l("div",{style:{width:"16px","margin-left":"6px"}},[l("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 1024 1024","xml:space":"preserve"},[l("g",null,[l("path",{d:"M1004.57 319.408l-468-312c-15.974-9.83-33.022-9.92-49.142 0l-468 312C7.428 327.406 0 341.694 0 355.978v311.998c0 14.286 7.428 28.572 19.43 36.572l468 312.044c15.974 9.83 33.022 9.92 49.142 0l468-312.044c12-7.998 19.43-22.286 19.43-36.572V355.978c-0.002-14.284-7.43-28.572-19.432-36.57zM556 126.262l344.572 229.716-153.714 102.858L556 331.406V126.262z m-88 0v205.144l-190.858 127.43-153.714-102.858L468 126.262zM88 438.264l110.286 73.714L88 585.692v-147.428z m380 459.43L123.428 667.978l153.714-102.858L468 692.55v205.144z m44-281.716l-155.43-104 155.43-104 155.43 104-155.43 104z m44 281.716V692.55l190.858-127.43 153.714 102.858L556 897.694z m380-312.002l-110.286-73.714L936 438.264v147.428z","p-id":"2793",fill:"#555"})])])],-1),$t=[gt],wt=k({props:{content:null,importMap:null},setup(e){const t=e,n="https://sfc.vuejs.org/",s=h(()=>{const a={"App.vue":t.content};if(t.importMap)try{a["import-map.json"]=JSON.stringify({imports:JSON.parse(decodeURIComponent(t.importMap))})}catch{}return`${n}#${btoa(unescape(encodeURIComponent(JSON.stringify(a))))}`});return(a,o)=>(u(),p("a",{href:d(s),style:{display:"flex","align-items":"center"},target:"_blank"},$t,8,mt))}});function bt(e){const t=ee({showTip:!1});function n(){navigator.clipboard.writeText(e),t.showTip=!0,setTimeout(()=>{t.showTip=!1},5*1e3)}return I(E({},G(t)),{copyCode:n})}const he=/<script.*>([\s\S]+)<\/script>/,fe=/<style>([\s\S]+)<\/style>/,ve=/<template>([\s\S]+)<\/template>/,X=e=>t=>{const n=t.match(e);return n&&n[1].trim()},me=e=>JSON.parse(decodeURIComponent(e));function kt(e,t,n){const s=ee({expand:!1}),a=()=>s.expand=!s.expand,o=h(()=>{const c=X(he)(e)||"",r=X(fe)(e)||"",i=X(ve)(e)||e.replace(he,"").replace(fe,"").replace(ve,"").trim(),_=me(t),g=me(n);return{js:c,css:r,html:i,jsLibs:_,cssLibs:g}});return I(E({},G(s)),{toggleExpand:a,parsedCode:o})}const yt={props:{componentName:String,htmlStr:String,codeStr:String,importMap:String,language:{default:"vue",type:String},platforms:{default:()=>["codepen"],type:Array},jsLibsStr:{type:String,default:"[]"},cssLibsStr:{type:String,default:"[]"},title:{type:String,default:""},desc:{type:String,default:""}},components:{copySvg:ut,codeSvg:vt,OnlineEdit:wt},setup(e){const t=h(()=>{var i;return decodeURIComponent((i=e.htmlStr)!=null?i:"")}),n=h(()=>{var i;return decodeURIComponent((i=e.codeStr)!=null?i:"")}),{showTip:s,copyCode:a}=bt(n.value),{expand:o,toggleExpand:c,parsedCode:r}=kt(n.value,e.jsLibsStr,e.cssLibsStr);return{expand:o,toggleExpand:c,decodedHtmlStr:t,parsedCode:r,showTip:s,copyCode:a,decodedCodeStr:n}}},xt={class:"demo-slot"},Lt={class:"demo-title-desc"},St={class:"demo-title"},Ct={class:"demo-desc"},Pt={class:"demo-actions"},Et={class:"demo-platforms"},At={class:"demo-buttons"},Bt={class:"demo-actions-copy"},Tt={class:"demo-actions-tip"},Rt=["innerHTML"];function It(e,t,n,s,a,o){const c=B("OnlineEdit"),r=B("copySvg"),i=B("codeSvg"),_=B("ClientOnly");return u(),L(_,null,{default:A(()=>[l("article",te(e.$attrs,{class:"demo"}),[l("div",xt,[y(e.$slots,"default")]),F(l("div",Lt,[l("span",St,S(n.title),1),l("span",Ct,S(n.desc),1)],512),[[V,n.title||n.desc]]),l("div",Pt,[l("div",Et,[f(c,{content:s.decodedCodeStr,importMap:n.importMap},null,8,["content","importMap"])]),l("div",At,[l("div",Bt,[F(l("span",Tt,"\u590D\u5236\u6210\u529F!",512),[[V,s.showTip]]),F(f(r,{onClick:s.copyCode,title:"\u590D\u5236"},null,8,["onClick"]),[[V,!s.showTip]])]),f(i,{class:"demo-actions-expand",onClick:t[0]||(t[0]=g=>s.toggleExpand()),title:"\u5C55\u5F00"})])]),F(l("div",{innerHTML:s.decodedHtmlStr,class:H(`language-${n.language} extra-class`)},null,10,Rt),[[V,s.expand]])],16)]),_:3})}var Mt=m(yt,[["render",It]]);const Dt=k({setup(e,{slots:t}){const n=z(!1);return J(()=>{n.value=!0}),()=>n.value&&t.default?t.default():null}});function Nt(e,t,n,s){Object.defineProperties(e.config.globalProperties,{$site:{get(){return t.value}},$siteByRoute:{get(){return n.value}},$themeConfig:{get(){return n.value.themeConfig}},$page:{get(){return s.value}},$frontmatter:{get(){return s.value.frontmatter}},$lang:{get(){return n.value.lang}},$localePath:{get(){const{locales:a}=t.value,{lang:o}=n.value,c=Object.keys(a).find(r=>a[r].lang===o);return a&&c||"/"}},$title:{get(){return s.value.title?s.value.title+" | "+n.value.title:n.value.title}},$description:{get(){return s.value.description||n.value.description}},$withBase:{value(a){return Ee(t.value.base,a)}}})}function Ut(e){e.component("Content",st),e.component("ClientOnly",Dt),e.component("Demo",Mt),e.component("Debug",()=>null)}var Ht='{"lang":"en-US","title":"wordcloud","description":"A VitePress site","base":"/wordcloud/","head":[],"themeConfig":{"repo":"dewfall123/wordcloud","repoLabel":"Github","lastUpdated":true,"prevLink":true,"nextLink":true},"locales":{},"customData":{}}';const oe=z(Ot(Ht));function Y(){return oe}function Ot(e){return Le(JSON.parse(e))}const zt=typeof window!="undefined";function jt(e,t){t.sort((n,s)=>{const a=s.split("/").length-n.split("/").length;return a!==0?a:s.length-n.length});for(const n of t)if(e.startsWith(n))return n}function ge(e,t){const n=jt(t,Object.keys(e));return n?e[n]:void 0}function Ft(e,t){t=Vt(e,t);const n=ge(e.locales||{},t)||{},s=ge(e.themeConfig&&e.themeConfig.locales||{},t)||{};return I(E(E({},e),n),{themeConfig:I(E(E({},e.themeConfig),s),{locales:{}}),locales:{}})}function Vt(e,t){if(!zt)return t;const n=e.base,s=n.endsWith("/")?n.slice(0,-1):n;return t.slice(s.length)}function R(e){const t=e||P();return h(()=>Ft(oe.value,t.path))}function j(e){const t=e||P();return h(()=>t.data)}function qt(e,t){const n=Array.from(document.querySelectorAll("meta"));let s=!0;const a=o=>{if(s){s=!1;return}n.forEach(c=>document.head.removeChild(c)),n.length=0,o&&o.length&&o.forEach(c=>{const r=Wt(c);document.head.appendChild(r),n.push(r)})};Ye(()=>{const o=e.data,c=t.value,r=o&&o.title,i=o&&o.description,_=o&&o.frontmatter.head;document.title=(r?r+" | ":"")+c.title,a([["meta",{charset:"utf-8"}],["meta",{name:"viewport",content:"width=device-width,initial-scale=1"}],["meta",{name:"description",content:i||c.description}],...c.head,..._&&Jt(_)||[]])})}function Wt([e,t,n]){const s=document.createElement(e);for(const a in t)s.setAttribute(a,t[a]);return n&&(s.innerHTML=n),s}function Gt(e){return e[0]==="meta"&&e[1]&&e[1].name==="description"}function Jt(e){return e.filter(t=>!Gt(t))}const Kt=/#.*$/,Yt=/(index)?\.(md|html)$/,W=/\/$/,Xt=/^[a-z]+:/i;function Qt(e){return e==null}function ae(e){return Array.isArray(e)}function re(e){return Xt.test(e)}function Zt(e,t){if(t===void 0)return!1;const n=$e(`/${e.data.relativePath}`),s=$e(t);return n===s}function $e(e){return decodeURI(e).replace(Kt,"").replace(Yt,"")}function en(e,t){const n=e.endsWith("/"),s=t.startsWith("/");return n&&s?e.slice(0,-1)+t:!n&&!s?`${e}/${t}`:e+t}function Z(e){return/^\//.test(e)?e:`/${e}`}function Te(e){return e.replace(/(index)?(\.(md|html))?$/,"")||"/"}function tn(e){return e===!1||e==="auto"||ae(e)}function nn(e){return e.children!==void 0}function sn(e){return ae(e)?e.length===0:!e}function ce(e,t){if(tn(e))return e;t=Z(t);for(const n in e)if(t.startsWith(Z(n)))return e[n];return"auto"}function Re(e){return e.reduce((t,n)=>(n.link&&t.push({text:n.text,link:Te(n.link)}),nn(n)&&(t=[...t,...Re(n.children)]),t),[])}const on={},an=["href","aria-label"],rn=["src"];function cn(e,t){return u(),p("a",{class:"nav-bar-title",href:e.$withBase(e.$localePath),"aria-label":`${e.$siteByRoute.title}, back to home`},[e.$themeConfig.logo?(u(),p("img",{key:0,class:"logo",src:e.$withBase(e.$themeConfig.logo),alt:"Logo"},null,8,rn)):b("",!0),ne(" "+S(e.$site.title),1)],8,an)}var ln=m(on,[["render",cn],["__scopeId","data-v-74be2d57"]]);function un(){const e=P(),t=Y();return h(()=>{const s=t.value.themeConfig.locales;if(!s)return null;const a=Object.keys(s);if(a.length<=1)return null;const o=T?t.value.base:"/",c=o.endsWith("/")?o.slice(0,-1):o,r=e.path.slice(c.length),i=a.find(w=>w==="/"?!1:r.startsWith(w)),_=i?r.substring(i.length-1):r,g=a.map(w=>{const C=w.endsWith("/")?w.slice(0,-1):w;return{text:s[w].label,link:`${C}${_}`}}),$=i||"/";return{text:s[$].selectText?s[$].selectText:"Languages",items:g}})}const dn=["GitHub","GitLab","Bitbucket"].map(e=>[e,new RegExp(e,"i")]);function pn(){const e=R();return h(()=>{const t=e.value.themeConfig,n=t.docsRepo||t.repo;if(!n)return null;const s=_n(n);return{text:hn(s,t.repoLabel),link:s}})}function _n(e){return/^https?:/.test(e)?e:`https://github.com/${e}`}function hn(e,t){if(t)return t;const n=e.match(/^https?:\/\/[^/]+/);if(!n)return"Source";const s=dn.find(([a,o])=>o.test(n[0]));return s&&s[0]?s[0]:"Source"}function fn(){const e=Y();function t(n){return Ee(e.value.base,n)}return{withBase:t}}function Ie(e){const t=P(),{withBase:n}=fn(),s=re(e.value.link);return{props:h(()=>{const o=we(`/${t.data.relativePath}`);let c=!1;if(e.value.activeMatch)c=new RegExp(e.value.activeMatch).test(o);else{const r=we(n(e.value.link));c=r==="/"?r===o:o.startsWith(r)}return{class:{active:c,isExternal:s},href:s?e.value.link:n(e.value.link),target:e.value.target||s?"_blank":null,rel:e.value.rel||s?"noopener noreferrer":null,"aria-label":e.value.ariaLabel}}),isExternal:s}}function we(e){return e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\.(html|md)$/,"").replace(/\/index$/,"/")}const vn={},mn={class:"icon outbound",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},gn=l("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"},null,-1),$n=l("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"},null,-1),wn=[gn,$n];function bn(e,t){return u(),p("svg",mn,wn)}var ie=m(vn,[["render",bn]]);const kn={class:"nav-link"},yn=k({props:{item:null},setup(e){const n=G(e),{props:s,isExternal:a}=Ie(n.item);return(o,c)=>(u(),p("div",kn,[l("a",te({class:"item"},d(s)),[ne(S(e.item.text)+" ",1),d(a)?(u(),L(ie,{key:0})):b("",!0)],16)]))}});var be=m(yn,[["__scopeId","data-v-f6252dde"]]);const xn=e=>(Se("data-v-230bcec6"),e=e(),Ce(),e),Ln={class:"nav-dropdown-link-item"},Sn=xn(()=>l("span",{class:"arrow"},null,-1)),Cn={class:"text"},Pn={class:"icon"},En=k({props:{item:null},setup(e){const n=G(e),{props:s,isExternal:a}=Ie(n.item);return(o,c)=>(u(),p("div",Ln,[l("a",te({class:"item"},d(s)),[Sn,l("span",Cn,S(e.item.text),1),l("span",Pn,[d(a)?(u(),L(ie,{key:0})):b("",!0)])],16)]))}});var An=m(En,[["__scopeId","data-v-230bcec6"]]);const Bn=["aria-label"],Tn={class:"button-text"},Rn={class:"dialog"},In=k({props:{item:null},setup(e){const t=P(),n=z(!1);se(()=>t.path,()=>{n.value=!1});function s(){n.value=!n.value}return(a,o)=>(u(),p("div",{class:H(["nav-dropdown-link",{open:n.value}])},[l("button",{class:"button","aria-label":e.item.ariaLabel,onClick:s},[l("span",Tn,S(e.item.text),1),l("span",{class:H(["button-arrow",n.value?"down":"right"])},null,2)],8,Bn),l("ul",Rn,[(u(!0),p(O,null,K(e.item.items,c=>(u(),p("li",{key:c.text,class:"dialog-item"},[f(An,{item:c},null,8,["item"])]))),128))])],2))}});var ke=m(In,[["__scopeId","data-v-09ac5408"]]);const Mn={key:0,class:"nav-links"},Dn={key:1,class:"item"},Nn={key:2,class:"item"},Un=k({setup(e){const t=R(),n=un(),s=pn(),a=h(()=>o.value||s.value),o=h(()=>t.value.themeConfig.nav);return(c,r)=>d(a)?(u(),p("nav",Mn,[d(o)?(u(!0),p(O,{key:0},K(d(o),i=>(u(),p("div",{key:i.text,class:"item"},[i.items?(u(),L(ke,{key:0,item:i},null,8,["item"])):(u(),L(be,{key:1,item:i},null,8,["item"]))]))),128)):b("",!0),d(n)?(u(),p("div",Dn,[f(ke,{item:d(n)},null,8,["item"])])):b("",!0),d(s)?(u(),p("div",Nn,[f(be,{item:d(s)},null,8,["item"])])):b("",!0)])):b("",!0)}});var Me=m(Un,[["__scopeId","data-v-46905c02"]]);const Hn={emits:["toggle"]},On=l("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"},[l("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z",class:""})],-1),zn=[On];function jn(e,t,n,s,a,o){return u(),p("div",{class:"sidebar-button",onClick:t[0]||(t[0]=c=>e.$emit("toggle"))},zn)}var Fn=m(Hn,[["render",jn]]);const Vn=e=>(Se("data-v-33b2da5a"),e=e(),Ce(),e),qn={class:"nav-bar"},Wn=Vn(()=>l("div",{class:"flex-grow"},null,-1)),Gn={class:"nav"},Jn=k({emits:["toggle"],setup(e){return(t,n)=>(u(),p("header",qn,[f(Fn,{onToggle:n[0]||(n[0]=s=>t.$emit("toggle"))}),f(ln),Wn,l("div",Gn,[f(Me)]),y(t.$slots,"search",{},void 0,!0)]))}});var Kn=m(Jn,[["__scopeId","data-v-33b2da5a"]]);function Yn(){let e=null,t=null;const n=ts(s,300);function s(){const c=Xn(),r=Qn(c);for(let i=0;i<r.length;i++){const _=r[i],g=r[i+1],[$,x]=es(i,_,g);if($){history.replaceState(null,document.title,x||" "),a(x);return}}}function a(c){if(o(t),o(e),t=document.querySelector(`.sidebar a[href="${c}"]`),!t)return;t.classList.add("active");const r=t.closest(".sidebar-links > ul > li");r&&r!==t.parentElement?(e=r.querySelector("a"),e&&e.classList.add("active")):e=null}function o(c){c&&c.classList.remove("active")}J(()=>{s(),window.addEventListener("scroll",n)}),Xe(()=>{a(decodeURIComponent(location.hash))}),Pe(()=>{window.removeEventListener("scroll",n)})}function Xn(){return[].slice.call(document.querySelectorAll(".sidebar a.sidebar-link-item"))}function Qn(e){return[].slice.call(document.querySelectorAll(".header-anchor")).filter(t=>e.some(n=>n.hash===t.hash))}function Zn(){return document.querySelector(".nav-bar").offsetHeight}function ye(e){const t=Zn();return e.parentElement.offsetTop-t-15}function es(e,t,n){const s=window.scrollY;return e===0&&s===0?[!0,null]:s<ye(t)?[!1,null]:!n||s<ye(n)?[!0,decodeURIComponent(t.hash)]:[!1,null]}function ts(e,t){let n,s=!1;return()=>{n&&clearTimeout(n),s?n=setTimeout(e,t):(e(),s=!0,setTimeout(()=>{s=!1},t))}}function ns(){const e=P(),t=R();return Yn(),h(()=>{const n=e.data.headers,s=e.data.frontmatter.sidebar,a=e.data.frontmatter.sidebarDepth;if(s===!1)return[];if(s==="auto")return xe(n,a);const o=ce(t.value.themeConfig.sidebar,e.data.relativePath);return o===!1?[]:o==="auto"?xe(n,a):o})}function xe(e,t){const n=[];if(e===void 0)return[];let s;return e.forEach(({level:a,title:o,slug:c})=>{if(a-1>t)return;const r={text:o,link:`#${c}`};a===2?(s=r,n.push(r)):s&&(s.children||(s.children=[])).push(r)}),n}const De=e=>{const t=P(),n=Y();t.data.headers;const s=e.item.text,a=ss(n.value.base,e.item.link),o=e.item.children,c=Zt(t,e.item.link),r=os(c,o);return U("li",{class:"sidebar-link"},[U(a?"a":"p",{class:{"sidebar-link-item":!0,active:c},href:a},s),r])};function ss(e,t){return t===void 0||t.startsWith("#")?t:en(e,t)}function os(e,t,n){return t&&t.length>0?U("ul",{class:"sidebar-links"},t.map(s=>U(De,{item:s}))):null}const as={key:0,class:"sidebar-links"},rs=k({setup(e){const t=ns();return(n,s)=>d(t).length>0?(u(),p("ul",as,[(u(!0),p(O,null,K(d(t),a=>(u(),L(d(De),{key:a.text,item:a},null,8,["item"]))),128))])):b("",!0)}});const cs={setup(){const e=P();return{slugs:h(()=>{var a;const n=((a=e.data.headers)!=null?a:[]).filter(o=>o.level>1);let s=10;for(const{level:o}of n)s>o&&(s=o);return n.filter(o=>o.level<s+2).map(o=>I(E({},o),{link:`#${o.slug}`,level:o.level===s?1:2}))})}}},is={class:"right-slug"},ls=["href"];function us(e,t,n,s,a,o){return u(),p("ul",is,[(u(!0),p(O,null,K(s.slugs,({level:c,link:r,title:i})=>(u(),p("li",{class:H(`slug-item level-${c}`),key:r},[l("a",{href:r,class:"link"},S(i),9,ls)],2))),128))])}var ds=m(cs,[["render",us],["__scopeId","data-v-1336cdc6"]]);const ps=k({props:{open:{type:Boolean,required:!0}},setup(e){return(t,n)=>(u(),p(O,null,[l("aside",{class:H(["sidebar hover-scrollbar",{open:e.open}])},[f(Me,{class:"nav"}),y(t.$slots,"sidebar-top",{},void 0,!0),f(rs),y(t.$slots,"sidebar-bottom",{},void 0,!0)],2),f(ds)],64))}});var _s=m(ps,[["__scopeId","data-v-509f3b00"]]);const hs=/bitbucket.org/;function fs(){const e=R(),t=j(),n=h(()=>{const a=Qt(t.value.frontmatter.editLink)?e.value.themeConfig.editLinks:t.value.frontmatter.editLink,{repo:o,docsDir:c="",docsBranch:r="master",docsRepo:i=o}=e.value.themeConfig,{relativePath:_}=t.value;return!a||!_||!o?null:vs(o,i,c,r,_)}),s=h(()=>e.value.themeConfig.editLinkText||"Edit this page");return{url:n,text:s}}function vs(e,t,n,s,a){return hs.test(e)?gs(e,t,n,s,a):ms(e,t,n,s,a)}function ms(e,t,n,s,a){return(re(t)?t:`https://github.com/${t}`).replace(W,"")+`/edit/${s}/`+(n?n.replace(W,"")+"/":"")+a}function gs(e,t,n,s,a){return(re(t)?t:e).replace(W,"")+`/src/${s}/`+(n?n.replace(W,"")+"/":"")+a+`?mode=edit&spa=0&at=${s}&fileviewer=file-view-default`}const $s={class:"edit-link"},ws=["href"],bs=k({setup(e){const{url:t,text:n}=fs();return(s,a)=>(u(),p("div",$s,[d(t)?(u(),p("a",{key:0,class:"link",href:d(t),target:"_blank",rel:"noopener noreferrer"},[ne(S(d(n))+" ",1),f(ie,{class:"icon"})],8,ws)):b("",!0)]))}});var ks=m(bs,[["__scopeId","data-v-4e0cf990"]]);const ys={key:0,class:"last-updated"},xs={class:"prefix"},Ls={class:"datetime"},Ss=k({setup(e){const t=R(),n=j(),s=h(()=>{const c=t.value.themeConfig.lastUpdated;return c!==void 0&&c!==!1}),a=h(()=>{const c=t.value.themeConfig.lastUpdated;return c===!0?"Last Updated":c}),o=z("");return J(()=>{o.value=new Date(n.value.lastUpdated).toLocaleString("en-US")}),(c,r)=>d(s)?(u(),p("p",ys,[l("span",xs,S(d(a))+":",1),l("span",Ls,S(o.value),1)])):b("",!0)}});var Cs=m(Ss,[["__scopeId","data-v-62bdcaad"]]);const Ps={class:"page-footer"},Es={class:"edit"},As={class:"updated"},Bs=k({setup(e){return(t,n)=>(u(),p("footer",Ps,[l("div",Es,[f(ks)]),l("div",As,[f(Cs)])]))}});var Ts=m(Bs,[["__scopeId","data-v-79d80dc0"]]);function Rs(){const e=R(),t=j(),n=h(()=>Te(Z(t.value.relativePath))),s=h(()=>{const i=ce(e.value.themeConfig.sidebar,n.value);return ae(i)?Re(i):[]}),a=h(()=>s.value.findIndex(i=>i.link===n.value)),o=h(()=>{if(e.value.themeConfig.nextLinks!==!1&&a.value>-1&&a.value<s.value.length-1)return s.value[a.value+1]}),c=h(()=>{if(e.value.themeConfig.prevLinks!==!1&&a.value>0)return s.value[a.value-1]}),r=h(()=>!!o.value||!!c.value);return{next:o,prev:c,hasLinks:r}}const Is={},Ms={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Ds=l("path",{d:"M19,11H7.4l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-7,7c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.2-0.1,0.5,0,0.8c0.1,0.1,0.1,0.2,0.2,0.3l7,7c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L7.4,13H19c0.6,0,1-0.4,1-1S19.6,11,19,11z"},null,-1),Ns=[Ds];function Us(e,t){return u(),p("svg",Ms,Ns)}var Hs=m(Is,[["render",Us]]);const Os={},zs={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},js=l("path",{d:"M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"},null,-1),Fs=[js];function Vs(e,t){return u(),p("svg",zs,Fs)}var qs=m(Os,[["render",Vs]]);const Ws={key:0,class:"next-and-prev-link"},Gs={class:"container"},Js={class:"prev"},Ks=["href"],Ys={class:"text"},Xs={class:"next"},Qs=["href"],Zs={class:"text"},eo=k({setup(e){const{hasLinks:t,prev:n,next:s}=Rs();return(a,o)=>d(t)?(u(),p("div",Ws,[l("div",Gs,[l("div",Js,[d(n)?(u(),p("a",{key:0,class:"link",href:a.$withBase(d(n).link)},[f(Hs,{class:"icon icon-prev"}),l("span",Ys,S(d(n).text),1)],8,Ks)):b("",!0)]),l("div",Xs,[d(s)?(u(),p("a",{key:0,class:"link",href:a.$withBase(d(s).link)},[l("span",Zs,S(d(s).text),1),f(qs,{class:"icon icon-next"})],8,Qs)):b("",!0)])])])):b("",!0)}});var to=m(eo,[["__scopeId","data-v-6ea49ff3"]]);const no={class:"page"},so={class:"container hover-scrollbar"},oo={class:"content"},ao=k({setup(e){return(t,n)=>{const s=B("Content");return u(),p("main",no,[l("div",so,[y(t.$slots,"top",{},void 0,!0),l("div",oo,[f(s)]),f(Ts),f(to),y(t.$slots,"bottom",{},void 0,!0)])])}}});var ro=m(ao,[["__scopeId","data-v-a901e69a"]]);const co={key:0,id:"ads-container"},io=k({setup(e){const t=Qe(()=>import("./Home.0b522dc9.js")),n=()=>null,s=n,a=n,o=n,c=P(),r=Y(),i=R(),_=h(()=>r.value.themeConfig),g=j(),$=h(()=>!!c.data.frontmatter.customLayout),x=h(()=>!!c.data.frontmatter.home),w=h(()=>{const{themeConfig:v}=i.value,{frontmatter:N}=c.data;return N.navbar===!1||v.navbar===!1?!1:r.value.title||v.logo||v.repo||v.nav}),C=z(!1),M=h(()=>{const{frontmatter:v}=c.data;if(v.home||v.sidebar===!1)return!1;const{themeConfig:N}=i.value;return!sn(ce(N.sidebar,c.data.relativePath))}),D=v=>{C.value=typeof v=="boolean"?v:!C.value},He=D.bind(null,!1);se(c,He);const Oe=h(()=>[{"no-navbar":!w.value,"sidebar-open":C.value,"no-sidebar":!M.value}]);return(v,N)=>{const ze=B("Content"),je=B("Debug");return u(),p(O,null,[l("div",{class:H(["theme",d(Oe)])},[d(w)?(u(),L(Kn,{key:0,onToggle:D},{search:A(()=>[y(v.$slots,"navbar-search",{},()=>[d(_).algolia?(u(),L(d(o),{key:0,options:d(_).algolia},null,8,["options"])):b("",!0)])]),_:3})):b("",!0),f(_s,{open:C.value},{"sidebar-top":A(()=>[y(v.$slots,"sidebar-top")]),"sidebar-bottom":A(()=>[y(v.$slots,"sidebar-bottom")]),_:3},8,["open"]),l("div",{class:"sidebar-mask",onClick:N[0]||(N[0]=Po=>D(!1))}),d($)?(u(),L(ze,{key:1})):d(x)?(u(),L(d(t),{key:2},{hero:A(()=>[y(v.$slots,"home-hero")]),features:A(()=>[y(v.$slots,"home-features")]),footer:A(()=>[y(v.$slots,"home-footer")]),_:3})):(u(),L(ro,{key:3},{top:A(()=>[y(v.$slots,"page-top-ads",{},()=>[d(_).carbonAds&&d(_).carbonAds.carbon?(u(),p("div",co,[(u(),L(d(s),{key:"carbon"+d(g).relativePath,code:d(_).carbonAds.carbon,placement:d(_).carbonAds.placement},null,8,["code","placement"]))])):b("",!0)]),y(v.$slots,"page-top")]),bottom:A(()=>[y(v.$slots,"page-bottom"),y(v.$slots,"page-bottom-ads",{},()=>[d(_).carbonAds&&d(_).carbonAds.custom?(u(),L(d(a),{key:"custom"+d(g).relativePath,code:d(_).carbonAds.custom,placement:d(_).carbonAds.placement},null,8,["code","placement"])):b("",!0)])]),_:3}))],2),f(je)],64)}}}),lo={class:"theme"},uo=l("h1",null,"404",-1),po=["href"],_o=k({setup(e){const t=["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."];function n(){return t[Math.floor(Math.random()*t.length)]}return(s,a)=>(u(),p("div",lo,[uo,l("blockquote",null,S(n()),1),l("a",{href:s.$site.base,"aria-label":"go to home"},"Take me home.",8,po)]))}}),ho={Layout:io,NotFound:_o},fo={},vo={style:{margin:"auto","max-width":"1000px"}};function mo(e,t){const n=B("Content");return u(),p("article",vo,[f(n)])}var go=m(fo,[["render",mo]]),Ne=I(E({},ho),{Layout:go,enhanceApp({app:e,router:t,siteData:n}){}});const Q=new Set,Ue=()=>document.createElement("link"),$o=e=>{const t=Ue();t.rel="prefetch",t.href=e,document.head.appendChild(t)},wo=e=>{const t=new XMLHttpRequest;t.open("GET",e,t.withCredentials=!0),t.send()};let q;const bo=T&&(q=Ue())&&q.relList&&q.relList.supports&&q.relList.supports("prefetch")?$o:wo;function ko(){if(!T||!window.IntersectionObserver)return;let e;if((e=navigator.connection)&&(e.saveData||/2g/.test(e.effectiveType)))return;const t=window.requestIdleCallback||setTimeout;let n=null;const s=()=>{n&&n.disconnect(),n=new IntersectionObserver(o=>{o.forEach(c=>{if(c.isIntersecting){const r=c.target;n.unobserve(r);const{pathname:i}=r;if(!Q.has(i)){Q.add(i);const _=Ae(i);bo(_)}}})}),t(()=>{document.querySelectorAll("#app a").forEach(o=>{const{target:c,hostname:r,pathname:i}=o,_=i.match(/\.\w+$/);_&&_[0]!==".html"||c!=="_blank"&&r===location.hostname&&(i!==location.pathname?n.observe(o):Q.add(i))})})};J(s);const a=P();se(()=>a.path,s),Pe(()=>{n&&n.disconnect()})}const yo=Ne.NotFound||(()=>"404 Not Found"),xo={name:"VitePressApp",setup(){return ko(),()=>U(Ne.Layout)}};function Lo(){const e=Co(),t=So();t.provide(Be,e);const n=R(e.route),s=j(e.route);return T&&qt(e.route,n),Nt(t,oe,n,s),Ut(t),{app:t,router:e}}function So(){return Ze(xo)}function Co(){let e=T,t;return tt(n=>{let s=Ae(n);return e&&(t=s),(e||t===s)&&(s=s.replace(/\.js$/,".lean.js")),T?(e=!1,import(s)):require(s)},yo)}if(T){const{app:e,router:t}=Lo();t.go().then(()=>{e.mount("#app")})}export{be as N,R as a,Lo as createApp,j as u};