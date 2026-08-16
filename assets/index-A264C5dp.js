const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/introCanvas-CWHXvdES.js","assets/three-N7G2eEjo.js","assets/useInView-CFBH-oA8.js","assets/about-DA52dZRg.js","assets/experience-K6XJ5x_-.js","assets/projects-CuiS8Wpj.js","assets/contact-CHARTwra.js"])))=>i.map(i=>d[i]);
import{j as p,_ as re,c as Qa}from"./three-N7G2eEjo.js";import{g as Za,R as Bt,a as E}from"./gsap-BNZ_RyOE.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}})();const er=()=>p.jsx("header",{className:"fixed top-0 left-0 right-0 z-50 bg-black text-white",children:p.jsx("div",{className:"flex items-center px-5 py-4",children:p.jsxs("a",{href:"#home",className:"group flex items-center gap-3",children:[p.jsx("span",{className:"flex h-9 w-9 items-center justify-center rounded-lg border border-[#35c19f]/40 bg-[#35c19f]/10 font-Rajdhani text-lg font-black leading-none text-[#35c19f] shadow-[0_0_15px_rgba(53,193,159,0.25)] transition-shadow duration-300 group-hover:shadow-[0_0_25px_rgba(53,193,159,0.5)]",children:"NG"}),p.jsxs("span",{className:"flex flex-col leading-none",children:[p.jsxs("span",{className:"font-Rajdhani text-xl font-black uppercase tracking-[0.2em]",children:["Nitish ",p.jsx("span",{className:"text-[#35c19f]",children:"Gopinath"})]}),p.jsx("span",{className:"mt-1 h-px w-0 bg-gradient-to-r from-[#35c19f] to-transparent transition-all duration-500 group-hover:w-full"})]})]})})});/*!
 * Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */function Ce(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,r=Array(t);a<t;a++)r[a]=e[a];return r}function tr(e){if(Array.isArray(e))return e}function ar(e){if(Array.isArray(e))return Ce(e)}function rr(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function nr(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Vt(r.key),r)}}function ir(e,t,a){return t&&nr(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function ce(e,t){var a=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=Qe(e))||t){a&&(e=a);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:n}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,s=!1;return{s:function(){a=a.call(e)},n:function(){var l=a.next();return o=l.done,l},e:function(l){s=!0,i=l},f:function(){try{o||a.return==null||a.return()}finally{if(s)throw i}}}}function y(e,t,a){return(t=Vt(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function or(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function sr(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var r,n,i,o,s=[],l=!0,u=!1;try{if(i=(a=a.call(e)).next,t===0){if(Object(a)!==a)return;l=!1}else for(;!(l=(r=i.call(a)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(d){u=!0,n=d}finally{try{if(!l&&a.return!=null&&(o=a.return(),Object(o)!==o))return}finally{if(u)throw n}}return s}}function lr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ft(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?ft(Object(a),!0).forEach(function(r){y(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ft(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function be(e,t){return tr(e)||sr(e,t)||Qe(e,t)||lr()}function N(e){return ar(e)||or(e)||Qe(e)||fr()}function ur(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Vt(e){var t=ur(e,"string");return typeof t=="symbol"?t:t+""}function ve(e){"@babel/helpers - typeof";return ve=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ve(e)}function Qe(e,t){if(e){if(typeof e=="string")return Ce(e,t);var a={}.toString.call(e).slice(8,-1);return a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set"?Array.from(e):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Ce(e,t):void 0}}var ut=function(){},Ze={},Xt={},Kt=null,qt={mark:ut,measure:ut};try{typeof window<"u"&&(Ze=window),typeof document<"u"&&(Xt=document),typeof MutationObserver<"u"&&(Kt=MutationObserver),typeof performance<"u"&&(qt=performance)}catch{}var cr=Ze.navigator||{},ct=cr.userAgent,dt=ct===void 0?"":ct,z=Ze,A=Xt,mt=Kt,le=qt;z.document;var R=!!A.documentElement&&!!A.head&&typeof A.addEventListener=="function"&&typeof A.createElement=="function",Jt=~dt.indexOf("MSIE")||~dt.indexOf("Trident/"),Ae,dr=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,mr=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Slab Press|Slab|Whiteboard)?.*/i,Qt={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"}},vr={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Zt=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],O="classic",ne="duotone",ea="sharp",ta="sharp-duotone",aa="chisel",ra="etch",na="jelly",ia="jelly-duo",oa="jelly-fill",sa="notdog",la="notdog-duo",fa="slab",ua="slab-press",ca="thumbprint",da="whiteboard",hr="Classic",pr="Duotone",gr="Sharp",br="Sharp Duotone",yr="Chisel",xr="Etch",wr="Jelly",Sr="Jelly Duo",Ar="Jelly Fill",kr="Notdog",Pr="Notdog Duo",Or="Slab",Ir="Slab Press",jr="Thumbprint",Er="Whiteboard",ma=[O,ne,ea,ta,aa,ra,na,ia,oa,sa,la,fa,ua,ca,da];Ae={},y(y(y(y(y(y(y(y(y(y(Ae,O,hr),ne,pr),ea,gr),ta,br),aa,yr),ra,xr),na,wr),ia,Sr),oa,Ar),sa,kr),y(y(y(y(y(Ae,la,Pr),fa,Or),ua,Ir),ca,jr),da,Er);var _r={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"}},Nr={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"}},Tr=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),Fr={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},whiteboard:{semibold:"fawsb"}},va=["fak","fa-kit","fakd","fa-kit-duotone"],vt={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Cr=["kit"],Lr="kit",Rr="kit-duotone",$r="Kit",Mr="Kit Duotone";y(y({},Lr,$r),Rr,Mr);var Dr={kit:{"fa-kit":"fak"}},zr={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Wr={kit:{fak:"fa-kit"}},ht={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},ke,fe={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ur=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],Yr="classic",Hr="duotone",Gr="sharp",Br="sharp-duotone",Vr="chisel",Xr="etch",Kr="jelly",qr="jelly-duo",Jr="jelly-fill",Qr="notdog",Zr="notdog-duo",en="slab",tn="slab-press",an="thumbprint",rn="whiteboard",nn="Classic",on="Duotone",sn="Sharp",ln="Sharp Duotone",fn="Chisel",un="Etch",cn="Jelly",dn="Jelly Duo",mn="Jelly Fill",vn="Notdog",hn="Notdog Duo",pn="Slab",gn="Slab Press",bn="Thumbprint",yn="Whiteboard";ke={},y(y(y(y(y(y(y(y(y(y(ke,Yr,nn),Hr,on),Gr,sn),Br,ln),Vr,fn),Xr,un),Kr,cn),qr,dn),Jr,mn),Qr,vn),y(y(y(y(y(ke,Zr,hn),en,pn),tn,gn),an,bn),rn,yn);var xn="kit",wn="kit-duotone",Sn="Kit",An="Kit Duotone";y(y({},xn,Sn),wn,An);var kn={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"}},Pn={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"]},Le={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"}},On=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],ha=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr"].concat(Ur,On),In=["solid","regular","light","thin","duotone","brands","semibold"],pa=[1,2,3,4,5,6,7,8,9,10],jn=pa.concat([11,12,13,14,15,16,17,18,19,20]),En=["aw","fw","pull-left","pull-right"],_n=[].concat(N(Object.keys(Pn)),In,En,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",fe.GROUP,fe.SWAP_OPACITY,fe.PRIMARY,fe.SECONDARY]).concat(pa.map(function(e){return"".concat(e,"x")})).concat(jn.map(function(e){return"w-".concat(e)})),Nn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},C="___FONT_AWESOME___",Re=16,ga="fa",ba="svg-inline--fa",H="data-fa-i2svg",$e="data-fa-pseudo-element",Tn="data-fa-pseudo-element-pending",et="data-prefix",tt="data-icon",pt="fontawesome-i2svg",Fn="async",Cn=["HTML","HEAD","STYLE","SCRIPT"],ya=["::before","::after",":before",":after"],xa=(function(){try{return!0}catch{return!1}})();function ie(e){return new Proxy(e,{get:function(a,r){return r in a?a[r]:a[O]}})}var wa=f({},Qt);wa[O]=f(f(f(f({},{"fa-duotone":"duotone"}),Qt[O]),vt.kit),vt["kit-duotone"]);var Ln=ie(wa),Me=f({},Fr);Me[O]=f(f(f(f({},{duotone:"fad"}),Me[O]),ht.kit),ht["kit-duotone"]);var gt=ie(Me),De=f({},Le);De[O]=f(f({},De[O]),Wr.kit);var Sa=ie(De),ze=f({},kn);ze[O]=f(f({},ze[O]),Dr.kit);ie(ze);var Rn=dr,Aa="fa-layers-text",$n=mr,Mn=f({},_r);ie(Mn);var Dn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Pe=vr,zn=[].concat(N(Cr),N(_n)),Z=z.FontAwesomeConfig||{};function Wn(e){var t=A.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Un(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(A&&typeof A.querySelector=="function"){var Yn=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Yn.forEach(function(e){var t=be(e,2),a=t[0],r=t[1],n=Un(Wn(a));n!=null&&(Z[r]=n)})}var ka={styleDefault:"solid",familyDefault:O,cssPrefix:ga,replacementClass:ba,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Z.familyPrefix&&(Z.cssPrefix=Z.familyPrefix);var q=f(f({},ka),Z);q.autoReplaceSvg||(q.observeMutations=!1);var m={};Object.keys(ka).forEach(function(e){Object.defineProperty(m,e,{enumerable:!0,set:function(a){q[e]=a,ee.forEach(function(r){return r(m)})},get:function(){return q[e]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(t){q.cssPrefix=t,ee.forEach(function(a){return a(m)})},get:function(){return q.cssPrefix}});z.FontAwesomeConfig=m;var ee=[];function Hn(e){return ee.push(e),function(){ee.splice(ee.indexOf(e),1)}}var V=Re,F={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Gn(e){if(!(!e||!R)){var t=A.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var a=A.head.childNodes,r=null,n=a.length-1;n>-1;n--){var i=a[n],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return A.head.insertBefore(t,r),e}}var Bn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function bt(){for(var e=12,t="";e-- >0;)t+=Bn[Math.random()*62|0];return t}function J(e){for(var t=[],a=(e||[]).length>>>0;a--;)t[a]=e[a];return t}function at(e){return e.classList?J(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Pa(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Vn(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,'="').concat(Pa(e[a]),'" ')},"").trim()}function ye(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(e[a].trim(),";")},"")}function rt(e){return e.size!==F.size||e.x!==F.x||e.y!==F.y||e.rotate!==F.rotate||e.flipX||e.flipY}function Xn(e){var t=e.transform,a=e.containerWidth,r=e.iconWidth,n={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:n,inner:l,path:u}}function Kn(e){var t=e.transform,a=e.width,r=a===void 0?Re:a,n=e.height,i=n===void 0?Re:n,o="";return Jt?o+="translate(".concat(t.x/V-r/2,"em, ").concat(t.y/V-i/2,"em) "):o+="translate(calc(-50% + ".concat(t.x/V,"em), calc(-50% + ").concat(t.y/V,"em)) "),o+="scale(".concat(t.size/V*(t.flipX?-1:1),", ").concat(t.size/V*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var qn=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}`;function Oa(){var e=ga,t=ba,a=m.cssPrefix,r=m.replacementClass,n=qn;if(a!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");n=n.replace(i,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(s,".".concat(r))}return n}var yt=!1;function Oe(){m.autoAddCss&&!yt&&(Gn(Oa()),yt=!0)}var Jn={mixout:function(){return{dom:{css:Oa,insertCss:Oe}}},hooks:function(){return{beforeDOMElementCreation:function(){Oe()},beforeI2svg:function(){Oe()}}}},L=z||{};L[C]||(L[C]={});L[C].styles||(L[C].styles={});L[C].hooks||(L[C].hooks={});L[C].shims||(L[C].shims=[]);var _=L[C],Ia=[],ja=function(){A.removeEventListener("DOMContentLoaded",ja),he=1,Ia.map(function(t){return t()})},he=!1;R&&(he=(A.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(A.readyState),he||A.addEventListener("DOMContentLoaded",ja));function Qn(e){R&&(he?setTimeout(e,0):Ia.push(e))}function oe(e){var t=e.tag,a=e.attributes,r=a===void 0?{}:a,n=e.children,i=n===void 0?[]:n;return typeof e=="string"?Pa(e):"<".concat(t," ").concat(Vn(r),">").concat(i.map(oe).join(""),"</").concat(t,">")}function xt(e,t,a){if(e&&e[t]&&e[t][a])return{prefix:t,iconName:a,icon:e[t][a]}}var Ie=function(t,a,r,n){var i=Object.keys(t),o=i.length,s=a,l,u,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)u=i[l],d=s(d,t[u],u,t);return d};function Ea(e){return N(e).length!==1?null:e.codePointAt(0).toString(16)}function wt(e){return Object.keys(e).reduce(function(t,a){var r=e[a],n=!!r.icon;return n?t[r.iconName]=r.icon:t[a]=r,t},{})}function _a(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=a.skipHooks,n=r===void 0?!1:r,i=wt(t);typeof _.hooks.addPack=="function"&&!n?_.hooks.addPack(e,wt(t)):_.styles[e]=f(f({},_.styles[e]||{}),i),e==="fas"&&_a("fa",t)}var ae=_.styles,Zn=_.shims,Na=Object.keys(Sa),ei=Na.reduce(function(e,t){return e[t]=Object.keys(Sa[t]),e},{}),nt=null,Ta={},Fa={},Ca={},La={},Ra={};function ti(e){return~zn.indexOf(e)}function ai(e,t){var a=t.split("-"),r=a[0],n=a.slice(1).join("-");return r===e&&n!==""&&!ti(n)?n:null}var $a=function(){var t=function(i){return Ie(ae,function(o,s,l){return o[l]=Ie(s,i,{}),o},{})};Ta=t(function(n,i,o){if(i[3]&&(n[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){n[l.toString(16)]=o})}return n}),Fa=t(function(n,i,o){if(n[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){n[l]=o})}return n}),Ra=t(function(n,i,o){var s=i[2];return n[o]=o,s.forEach(function(l){n[l]=o}),n});var a="far"in ae||m.autoFetchSvg,r=Ie(Zn,function(n,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!a&&(s="fas"),typeof o=="string"&&(n.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(n.unicodes[o.toString(16)]={prefix:s,iconName:l}),n},{names:{},unicodes:{}});Ca=r.names,La=r.unicodes,nt=xe(m.styleDefault,{family:m.familyDefault})};Hn(function(e){nt=xe(e.styleDefault,{family:m.familyDefault})});$a();function it(e,t){return(Ta[e]||{})[t]}function ri(e,t){return(Fa[e]||{})[t]}function Y(e,t){return(Ra[e]||{})[t]}function Ma(e){return Ca[e]||{prefix:null,iconName:null}}function ni(e){var t=La[e],a=it("fas",e);return t||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function W(){return nt}var Da=function(){return{prefix:null,iconName:null,rest:[]}};function ii(e){var t=O,a=Na.reduce(function(r,n){return r[n]="".concat(m.cssPrefix,"-").concat(n),r},{});return ma.forEach(function(r){(e.includes(a[r])||e.some(function(n){return ei[r].includes(n)}))&&(t=r)}),t}function xe(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.family,r=a===void 0?O:a,n=Ln[r][e];if(r===ne&&!e)return"fad";var i=gt[r][e]||gt[r][n],o=e in _.styles?e:null,s=i||o||null;return s}function oi(e){var t=[],a=null;return e.forEach(function(r){var n=ai(m.cssPrefix,r);n?a=n:r&&t.push(r)}),{iconName:a,rest:t}}function St(e){return e.sort().filter(function(t,a,r){return r.indexOf(t)===a})}var At=ha.concat(va);function we(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.skipLookups,r=a===void 0?!1:a,n=null,i=St(e.filter(function(h){return At.includes(h)})),o=St(e.filter(function(h){return!At.includes(h)})),s=i.filter(function(h){return n=h,!Zt.includes(h)}),l=be(s,1),u=l[0],d=u===void 0?null:u,c=ii(i),v=f(f({},oi(o)),{},{prefix:xe(d,{family:c})});return f(f(f({},v),ui({values:e,family:c,styles:ae,config:m,canonical:v,givenPrefix:n})),si(r,n,v))}function si(e,t,a){var r=a.prefix,n=a.iconName;if(e||!r||!n)return{prefix:r,iconName:n};var i=t==="fa"?Ma(n):{},o=Y(r,n);return n=i.iconName||o||n,r=i.prefix||r,r==="far"&&!ae.far&&ae.fas&&!m.autoFetchSvg&&(r="fas"),{prefix:r,iconName:n}}var li=ma.filter(function(e){return e!==O||e!==ne}),fi=Object.keys(Le).filter(function(e){return e!==O}).map(function(e){return Object.keys(Le[e])}).flat();function ui(e){var t=e.values,a=e.family,r=e.canonical,n=e.givenPrefix,i=n===void 0?"":n,o=e.styles,s=o===void 0?{}:o,l=e.config,u=l===void 0?{}:l,d=a===ne,c=t.includes("fa-duotone")||t.includes("fad"),v=u.familyDefault==="duotone",h=r.prefix==="fad"||r.prefix==="fa-duotone";if(!d&&(c||v||h)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&li.includes(a)){var w=Object.keys(s).find(function(S){return fi.includes(S)});if(w||u.autoFetchSvg){var b=Tr.get(a).defaultShortPrefixId;r.prefix=b,r.iconName=Y(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||i==="fa")&&(r.prefix=W()||"fas"),r}var ci=(function(){function e(){rr(this,e),this.definitions={}}return ir(e,[{key:"add",value:function(){for(var a=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];var o=n.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){a.definitions[s]=f(f({},a.definitions[s]||{}),o[s]),_a(s,o[s]),$a()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,r){var n=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(n).map(function(i){var o=n[i],s=o.prefix,l=o.iconName,u=o.icon,d=u[2];a[s]||(a[s]={}),d.length>0&&d.forEach(function(c){typeof c=="string"&&(a[s][c]=u)}),a[s][l]=u}),a}}])})(),kt=[],X={},K={},di=Object.keys(K);function mi(e,t){var a=t.mixoutsTo;return kt=e,X={},Object.keys(K).forEach(function(r){di.indexOf(r)===-1&&delete K[r]}),kt.forEach(function(r){var n=r.mixout?r.mixout():{};if(Object.keys(n).forEach(function(o){typeof n[o]=="function"&&(a[o]=n[o]),ve(n[o])==="object"&&Object.keys(n[o]).forEach(function(s){a[o]||(a[o]={}),a[o][s]=n[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){X[o]||(X[o]=[]),X[o].push(i[o])})}r.provides&&r.provides(K)}),a}function We(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];var i=X[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function G(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];var n=X[e]||[];n.forEach(function(i){i.apply(null,a)})}function U(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return K[e]?K[e].apply(null,t):void 0}function Ue(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,a=e.prefix||W();if(t)return t=Y(a,t)||t,xt(za.definitions,a,t)||xt(_.styles,a,t)}var za=new ci,vi=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,G("noAuto")},hi={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return R?(G("beforeI2svg",t),U("pseudoElements2svg",t),U("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,Qn(function(){gi({autoReplaceSvgRoot:a}),G("watch",t)})}},pi={icon:function(t){if(t===null)return null;if(ve(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Y(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var a=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=xe(t[0]);return{prefix:r,iconName:Y(r,a)||a}}if(typeof t=="string"&&(t.indexOf("".concat(m.cssPrefix,"-"))>-1||t.match(Rn))){var n=we(t.split(" "),{skipLookups:!0});return{prefix:n.prefix||W(),iconName:Y(n.prefix,n.iconName)||n.iconName}}if(typeof t=="string"){var i=W();return{prefix:i,iconName:Y(i,t)||t}}}},I={noAuto:vi,config:m,dom:hi,parse:pi,library:za,findIconDefinition:Ue,toHtml:oe},gi=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot,r=a===void 0?A:a;(Object.keys(_.styles).length>0||m.autoFetchSvg)&&R&&m.autoReplaceSvg&&I.dom.i2svg({node:r})};function Se(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return oe(r)})}}),Object.defineProperty(e,"node",{get:function(){if(R){var r=A.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function bi(e){var t=e.children,a=e.main,r=e.mask,n=e.attributes,i=e.styles,o=e.transform;if(rt(o)&&a.found&&!r.found){var s=a.width,l=a.height,u={x:s/l/2,y:.5};n.style=ye(f(f({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:n,children:t}]}function yi(e){var t=e.prefix,a=e.iconName,r=e.children,n=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(m.cssPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},n),{},{id:o}),children:r}]}]}function xi(e){var t=["aria-label","aria-labelledby","title","role"];return t.some(function(a){return a in e})}function ot(e){var t=e.icons,a=t.main,r=t.mask,n=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.maskId,u=e.extra,d=e.watchable,c=d===void 0?!1:d,v=r.found?r:a,h=v.width,w=v.height,b=[m.replacementClass,i?"".concat(m.cssPrefix,"-").concat(i):""].filter(function(j){return u.classes.indexOf(j)===-1}).filter(function(j){return j!==""||!!j}).concat(u.classes).join(" "),S={children:[],attributes:f(f({},u.attributes),{},{"data-prefix":n,"data-icon":i,class:b,role:u.attributes.role||"img",viewBox:"0 0 ".concat(h," ").concat(w)})};!xi(u.attributes)&&!u.attributes["aria-hidden"]&&(S.attributes["aria-hidden"]="true"),c&&(S.attributes[H]="");var x=f(f({},S),{},{prefix:n,iconName:i,main:a,mask:r,maskId:l,transform:o,symbol:s,styles:f({},u.styles)}),k=r.found&&a.found?U("generateAbstractMask",x)||{children:[],attributes:{}}:U("generateAbstractIcon",x)||{children:[],attributes:{}},P=k.children,$=k.attributes;return x.children=P,x.attributes=$,s?yi(x):bi(x)}function Pt(e){var t=e.content,a=e.width,r=e.height,n=e.transform,i=e.extra,o=e.watchable,s=o===void 0?!1:o,l=f(f({},i.attributes),{},{class:i.classes.join(" ")});s&&(l[H]="");var u=f({},i.styles);rt(n)&&(u.transform=Kn({transform:n,width:a,height:r}),u["-webkit-transform"]=u.transform);var d=ye(u);d.length>0&&(l.style=d);var c=[];return c.push({tag:"span",attributes:l,children:[t]}),c}function wi(e){var t=e.content,a=e.extra,r=f(f({},a.attributes),{},{class:a.classes.join(" ")}),n=ye(a.styles);n.length>0&&(r.style=n);var i=[];return i.push({tag:"span",attributes:r,children:[t]}),i}var je=_.styles;function Ye(e){var t=e[0],a=e[1],r=e.slice(4),n=be(r,1),i=n[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(Pe.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(Pe.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(Pe.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:a,icon:o}}var Si={found:!1,width:512,height:512};function Ai(e,t){!xa&&!m.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function He(e,t){var a=t;return t==="fa"&&m.styleDefault!==null&&(t=W()),new Promise(function(r,n){if(a==="fa"){var i=Ma(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&je[t]&&je[t][e]){var o=je[t][e];return r(Ye(o))}Ai(e,t),r(f(f({},Si),{},{icon:m.showMissingIcons&&e?U("missingIconAbstract")||{}:{}}))})}var Ot=function(){},Ge=m.measurePerformance&&le&&le.mark&&le.measure?le:{mark:Ot,measure:Ot},Q='FA "7.0.0"',ki=function(t){return Ge.mark("".concat(Q," ").concat(t," begins")),function(){return Wa(t)}},Wa=function(t){Ge.mark("".concat(Q," ").concat(t," ends")),Ge.measure("".concat(Q," ").concat(t),"".concat(Q," ").concat(t," begins"),"".concat(Q," ").concat(t," ends"))},st={begin:ki,end:Wa},de=function(){};function It(e){var t=e.getAttribute?e.getAttribute(H):null;return typeof t=="string"}function Pi(e){var t=e.getAttribute?e.getAttribute(et):null,a=e.getAttribute?e.getAttribute(tt):null;return t&&a}function Oi(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(m.replacementClass)}function Ii(){if(m.autoReplaceSvg===!0)return me.replace;var e=me[m.autoReplaceSvg];return e||me.replace}function ji(e){return A.createElementNS("http://www.w3.org/2000/svg",e)}function Ei(e){return A.createElement(e)}function Ua(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.ceFn,r=a===void 0?e.tag==="svg"?ji:Ei:a;if(typeof e=="string")return A.createTextNode(e);var n=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){n.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){n.appendChild(Ua(o,{ceFn:r}))}),n}function _i(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var me={replace:function(t){var a=t[0];if(a.parentNode)if(t[1].forEach(function(n){a.parentNode.insertBefore(Ua(n),a)}),a.getAttribute(H)===null&&m.keepOriginalSource){var r=A.createComment(_i(a));a.parentNode.replaceChild(r,a)}else a.remove()},nest:function(t){var a=t[0],r=t[1];if(~at(a).indexOf(m.replacementClass))return me.replace(t);var n=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===m.replacementClass||l.match(n)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return oe(s)}).join(`
`);a.setAttribute(H,""),a.innerHTML=o}};function jt(e){e()}function Ya(e,t){var a=typeof t=="function"?t:de;if(e.length===0)a();else{var r=jt;m.mutateApproach===Fn&&(r=z.requestAnimationFrame||jt),r(function(){var n=Ii(),i=st.begin("mutate");e.map(n),i(),a()})}}var lt=!1;function Ha(){lt=!0}function Be(){lt=!1}var pe=null;function Et(e){if(mt&&m.observeMutations){var t=e.treeCallback,a=t===void 0?de:t,r=e.nodeCallback,n=r===void 0?de:r,i=e.pseudoElementsCallback,o=i===void 0?de:i,s=e.observeMutationsRoot,l=s===void 0?A:s;pe=new mt(function(u){if(!lt){var d=W();J(u).forEach(function(c){if(c.type==="childList"&&c.addedNodes.length>0&&!It(c.addedNodes[0])&&(m.searchPseudoElements&&o(c.target),a(c.target)),c.type==="attributes"&&c.target.parentNode&&m.searchPseudoElements&&o([c.target],!0),c.type==="attributes"&&It(c.target)&&~Dn.indexOf(c.attributeName))if(c.attributeName==="class"&&Pi(c.target)){var v=we(at(c.target)),h=v.prefix,w=v.iconName;c.target.setAttribute(et,h||d),w&&c.target.setAttribute(tt,w)}else Oi(c.target)&&n(c.target)})}}),R&&pe.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ni(){pe&&pe.disconnect()}function Ti(e){var t=e.getAttribute("style"),a=[];return t&&(a=t.split(";").reduce(function(r,n){var i=n.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),a}function Fi(e){var t=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",n=we(at(e));return n.prefix||(n.prefix=W()),t&&a&&(n.prefix=t,n.iconName=a),n.iconName&&n.prefix||(n.prefix&&r.length>0&&(n.iconName=ri(n.prefix,e.innerText)||it(n.prefix,Ea(e.innerText))),!n.iconName&&m.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=e.firstChild.data)),n}function Ci(e){var t=J(e.attributes).reduce(function(a,r){return a.name!=="class"&&a.name!=="style"&&(a[r.name]=r.value),a},{});return t}function Li(){return{iconName:null,prefix:null,transform:F,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function _t(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=Fi(e),r=a.iconName,n=a.prefix,i=a.rest,o=Ci(e),s=We("parseNodeAttributes",{},e),l=t.styleParser?Ti(e):[];return f({iconName:r,prefix:n,transform:F,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Ri=_.styles;function Ga(e){var t=m.autoReplaceSvg==="nest"?_t(e,{styleParser:!1}):_t(e);return~t.extra.classes.indexOf(Aa)?U("generateLayersText",e,t):U("generateSvgReplacementMutation",e,t)}function $i(){return[].concat(N(va),N(ha))}function Nt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!R)return Promise.resolve();var a=A.documentElement.classList,r=function(c){return a.add("".concat(pt,"-").concat(c))},n=function(c){return a.remove("".concat(pt,"-").concat(c))},i=m.autoFetchSvg?$i():Zt.concat(Object.keys(Ri));i.includes("fa")||i.push("fa");var o=[".".concat(Aa,":not([").concat(H,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(H,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=J(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),n("complete");else return Promise.resolve();var l=st.begin("onTree"),u=s.reduce(function(d,c){try{var v=Ga(c);v&&d.push(v)}catch(h){xa||h.name==="MissingIcon"&&console.error(h)}return d},[]);return new Promise(function(d,c){Promise.all(u).then(function(v){Ya(v,function(){r("active"),r("complete"),n("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),c(v)})})}function Mi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ga(e).then(function(a){a&&Ya([a],t)})}function Di(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Ue(t||{}),n=a.mask;return n&&(n=(n||{}).icon?n:Ue(n||{})),e(r,f(f({},a),{},{mask:n}))}}var zi=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,n=r===void 0?F:r,i=a.symbol,o=i===void 0?!1:i,s=a.mask,l=s===void 0?null:s,u=a.maskId,d=u===void 0?null:u,c=a.classes,v=c===void 0?[]:c,h=a.attributes,w=h===void 0?{}:h,b=a.styles,S=b===void 0?{}:b;if(t){var x=t.prefix,k=t.iconName,P=t.icon;return Se(f({type:"icon"},t),function(){return G("beforeDOMElementCreation",{iconDefinition:t,params:a}),ot({icons:{main:Ye(P),mask:l?Ye(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:k,transform:f(f({},F),n),symbol:o,maskId:d,extra:{attributes:w,styles:S,classes:v}})})}},Wi={mixout:function(){return{icon:Di(zi)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=Nt,a.nodeCallback=Mi,a}}},provides:function(t){t.i2svg=function(a){var r=a.node,n=r===void 0?A:r,i=a.callback,o=i===void 0?function(){}:i;return Nt(n,o)},t.generateSvgReplacementMutation=function(a,r){var n=r.iconName,i=r.prefix,o=r.transform,s=r.symbol,l=r.mask,u=r.maskId,d=r.extra;return new Promise(function(c,v){Promise.all([He(n,i),l.iconName?He(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(h){var w=be(h,2),b=w[0],S=w[1];c([a,ot({icons:{main:b,mask:S},prefix:i,iconName:n,transform:o,symbol:s,maskId:u,extra:d,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(a){var r=a.children,n=a.attributes,i=a.main,o=a.transform,s=a.styles,l=ye(s);l.length>0&&(n.style=l);var u;return rt(o)&&(u=U("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:n}}}},Ui={mixout:function(){return{layer:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.classes,i=n===void 0?[]:n;return Se({type:"layer"},function(){G("beforeDOMElementCreation",{assembler:a,params:r});var o=[];return a(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(N(i)).join(" ")},children:o}]})}}}},Yi={mixout:function(){return{counter:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var n=r.classes,i=n===void 0?[]:n,o=r.attributes,s=o===void 0?{}:o,l=r.styles,u=l===void 0?{}:l;return Se({type:"counter",content:a},function(){return G("beforeDOMElementCreation",{content:a,params:r}),wi({content:a.toString(),extra:{attributes:s,styles:u,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(N(i))}})})}}}},Hi={mixout:function(){return{text:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.transform,i=n===void 0?F:n,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,d=r.styles,c=d===void 0?{}:d;return Se({type:"text",content:a},function(){return G("beforeDOMElementCreation",{content:a,params:r}),Pt({content:a,transform:f(f({},F),i),extra:{attributes:u,styles:c,classes:["".concat(m.cssPrefix,"-layers-text")].concat(N(s))}})})}}},provides:function(t){t.generateLayersText=function(a,r){var n=r.transform,i=r.extra,o=null,s=null;if(Jt){var l=parseInt(getComputedStyle(a).fontSize,10),u=a.getBoundingClientRect();o=u.width/l,s=u.height/l}return Promise.resolve([a,Pt({content:a.innerHTML,width:o,height:s,transform:n,extra:i,watchable:!0})])}}},Ba=new RegExp('"',"ug"),Tt=[1105920,1112319],Ft=f(f(f(f({},{FontAwesome:{normal:"fas",400:"fas"}}),Nr),Nn),zr),Ve=Object.keys(Ft).reduce(function(e,t){return e[t.toLowerCase()]=Ft[t],e},{}),Gi=Object.keys(Ve).reduce(function(e,t){var a=Ve[t];return e[t]=a[900]||N(Object.entries(a))[0][1],e},{});function Bi(e){var t=e.replace(Ba,"");return Ea(N(t)[0]||"")}function Vi(e){var t=e.getPropertyValue("font-feature-settings").includes("ss01"),a=e.getPropertyValue("content"),r=a.replace(Ba,""),n=r.codePointAt(0),i=n>=Tt[0]&&n<=Tt[1],o=r.length===2?r[0]===r[1]:!1;return i||o||t}function Xi(e,t){var a=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),n=isNaN(r)?"normal":r;return(Ve[a]||{})[n]||Gi[a]}function Ct(e,t){var a="".concat(Tn).concat(t.replace(":","-"));return new Promise(function(r,n){if(e.getAttribute(a)!==null)return r();var i=J(e.children),o=i.filter(function(B){return B.getAttribute($e)===t})[0],s=z.getComputedStyle(e,t),l=s.getPropertyValue("font-family"),u=l.match($n),d=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!u)return e.removeChild(o),r();if(u&&c!=="none"&&c!==""){var v=s.getPropertyValue("content"),h=Xi(l,d),w=Bi(v),b=u[0].startsWith("FontAwesome"),S=Vi(s),x=it(h,w),k=x;if(b){var P=ni(w);P.iconName&&P.prefix&&(x=P.iconName,h=P.prefix)}if(x&&!S&&(!o||o.getAttribute(et)!==h||o.getAttribute(tt)!==k)){e.setAttribute(a,k),o&&e.removeChild(o);var $=Li(),j=$.extra;j.attributes[$e]=t,He(x,h).then(function(B){var se=ot(f(f({},$),{},{icons:{main:B,mask:Da()},prefix:h,iconName:k,extra:j,watchable:!0})),M=A.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(M,e.firstChild):e.appendChild(M),M.outerHTML=se.map(function(Ja){return oe(Ja)}).join(`
`),e.removeAttribute(a),r()}).catch(n)}else r()}else r()})}function Ki(e){return Promise.all([Ct(e,"::before"),Ct(e,"::after")])}function qi(e){return e.parentNode!==document.head&&!~Cn.indexOf(e.tagName.toUpperCase())&&!e.getAttribute($e)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var Ji=function(t){return!!t&&ya.some(function(a){return t.includes(a)})},Qi=function(t){if(!t)return[];for(var a=new Set,r=[t],n=[/(?=\s:)/,new RegExp("(?<=\\)\\)?[^,]*,)")],i=function(){var h=s[o];r=r.flatMap(function(w){return w.split(h).map(function(b){return b.replace(/,\s*$/,"").trim()})})},o=0,s=n;o<s.length;o++)i();r=r.flatMap(function(v){return v.includes("(")?v:v.split(",").map(function(h){return h.trim()})});var l=ce(r),u;try{for(l.s();!(u=l.n()).done;){var d=u.value;if(Ji(d)){var c=ya.reduce(function(v,h){return v.replace(h,"")},d);c!==""&&c!=="*"&&a.add(c)}}}catch(v){l.e(v)}finally{l.f()}return a};function Lt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(R){var a;if(t)a=e;else if(m.searchPseudoElementsFullScan)a=e.querySelectorAll("*");else{var r=new Set,n=ce(document.styleSheets),i;try{for(n.s();!(i=n.n()).done;){var o=i.value;try{var s=ce(o.cssRules),l;try{for(s.s();!(l=s.n()).done;){var u=l.value,d=Qi(u.selectorText),c=ce(d),v;try{for(c.s();!(v=c.n()).done;){var h=v.value;r.add(h)}}catch(b){c.e(b)}finally{c.f()}}}catch(b){s.e(b)}finally{s.f()}}catch(b){m.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(b.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(b){n.e(b)}finally{n.f()}if(!r.size)return;var w=Array.from(r).join(", ");try{a=e.querySelectorAll(w)}catch{}}return new Promise(function(b,S){var x=J(a).filter(qi).map(Ki),k=st.begin("searchPseudoElements");Ha(),Promise.all(x).then(function(){k(),Be(),b()}).catch(function(){k(),Be(),S()})})}}var Zi={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=Lt,a}}},provides:function(t){t.pseudoElements2svg=function(a){var r=a.node,n=r===void 0?A:r;m.searchPseudoElements&&Lt(n)}}},Rt=!1,eo={mixout:function(){return{dom:{unwatch:function(){Ha(),Rt=!0}}}},hooks:function(){return{bootstrap:function(){Et(We("mutationObserverCallbacks",{}))},noAuto:function(){Ni()},watch:function(a){var r=a.observeMutationsRoot;Rt?Be():Et(We("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},$t=function(t){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,n){var i=n.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},a)},to={mixout:function(){return{parse:{transform:function(a){return $t(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-transform");return n&&(a.transform=$t(n)),a}}},provides:function(t){t.generateAbstractTransformGrouping=function(a){var r=a.main,n=a.transform,i=a.containerWidth,o=a.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(n.x*32,", ").concat(n.y*32,") "),u="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),d="rotate(".concat(n.rotate," 0 0)"),c={transform:"".concat(l," ").concat(u," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},h={outer:s,inner:c,path:v};return{tag:"g",attributes:f({},h.outer),children:[{tag:"g",attributes:f({},h.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:f(f({},r.icon.attributes),h.path)}]}]}}}},Ee={x:0,y:0,width:"100%",height:"100%"};function Mt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function ao(e){return e.tag==="g"?e.children:[e]}var ro={hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-mask"),i=n?we(n.split(" ").map(function(o){return o.trim()})):Da();return i.prefix||(i.prefix=W()),a.mask=i,a.maskId=r.getAttribute("data-fa-mask-id"),a}}},provides:function(t){t.generateAbstractMask=function(a){var r=a.children,n=a.attributes,i=a.main,o=a.mask,s=a.maskId,l=a.transform,u=i.width,d=i.icon,c=o.width,v=o.icon,h=Xn({transform:l,containerWidth:c,iconWidth:u}),w={tag:"rect",attributes:f(f({},Ee),{},{fill:"white"})},b=d.children?{children:d.children.map(Mt)}:{},S={tag:"g",attributes:f({},h.inner),children:[Mt(f({tag:d.tag,attributes:f(f({},d.attributes),h.path)},b))]},x={tag:"g",attributes:f({},h.outer),children:[S]},k="mask-".concat(s||bt()),P="clip-".concat(s||bt()),$={tag:"mask",attributes:f(f({},Ee),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,x]},j={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:ao(v)},$]};return r.push(j,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(k,")")},Ee)}),{children:r,attributes:n}}}},no={provides:function(t){var a=!1;z.matchMedia&&(a=z.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],n={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:f(f({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=f(f({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:f(f({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||s.children.push({tag:"animate",attributes:f(f({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:f(f({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:f(f({},o),{},{values:"1;0;0;0;0;1;"})}]}),a||r.push({tag:"path",attributes:f(f({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},io={hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-symbol"),i=n===null?!1:n===""?!0:n;return a.symbol=i,a}}}},oo=[Jn,Wi,Ui,Yi,Hi,Zi,eo,to,ro,no,io];mi(oo,{mixoutsTo:I});I.noAuto;I.config;I.library;I.dom;var Xe=I.parse;I.findIconDefinition;I.toHtml;var so=I.icon;I.layer;I.text;I.counter;var _e={exports:{}},Ne,Dt;function lo(){if(Dt)return Ne;Dt=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Ne=e,Ne}var Te,zt;function fo(){if(zt)return Te;zt=1;var e=lo();function t(){}function a(){}return a.resetWarningCache=t,Te=function(){function r(o,s,l,u,d,c){if(c!==e){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}r.isRequired=r;function n(){return r}var i={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:n,element:r,elementType:r,instanceOf:n,node:r,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:a,resetWarningCache:t};return i.PropTypes=i,i},Te}var Wt;function uo(){return Wt||(Wt=1,_e.exports=fo()()),_e.exports}var co=uo();const g=Za(co);var mo={};function Ke(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,r=Array(t);a<t;a++)r[a]=e[a];return r}function vo(e){if(Array.isArray(e))return e}function ho(e){if(Array.isArray(e))return Ke(e)}function D(e,t,a){return(t=Ao(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function po(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function go(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var r,n,i,o,s=[],l=!0,u=!1;try{if(i=(a=a.call(e)).next,t!==0)for(;!(l=(r=i.call(a)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(d){u=!0,n=d}finally{try{if(!l&&a.return!=null&&(o=a.return(),Object(o)!==o))return}finally{if(u)throw n}}return s}}function bo(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yo(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ut(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function T(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?Ut(Object(a),!0).forEach(function(r){D(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ut(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function xo(e,t){if(e==null)return{};var a,r,n=wo(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)===-1&&{}.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function wo(e,t){if(e==null)return{};var a={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;a[r]=e[r]}return a}function Yt(e,t){return vo(e)||go(e,t)||Va(e,t)||bo()}function qe(e){return ho(e)||po(e)||Va(e)||yo()}function So(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ao(e){var t=So(e,"string");return typeof t=="symbol"?t:t+""}function ge(e){"@babel/helpers - typeof";return ge=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ge(e)}function Va(e,t){if(e){if(typeof e=="string")return Ke(e,t);var a={}.toString.call(e).slice(8,-1);return a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set"?Array.from(e):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Ke(e,t):void 0}}var ko="7.0.0-alpha1",Je;try{var Po=require("@fortawesome/fontawesome-svg-core/package.json");Je=Po.version}catch{Je=mo.FA_VERSION||"7.0.0-alpha8"}function Oo(e){var t=e.beat,a=e.fade,r=e.beatFade,n=e.bounce,i=e.shake,o=e.flash,s=e.spin,l=e.spinPulse,u=e.spinReverse,d=e.pulse,c=e.fixedWidth,v=e.inverse,h=e.border,w=e.listItem,b=e.flip,S=e.size,x=e.rotation,k=e.pull,P=e.swapOpacity,$=e.rotateBy,j=e.widthAuto,B=Io(Je,ko),se=D(D(D(D(D(D({"fa-beat":t,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":n,"fa-shake":i,"fa-flash":o,"fa-spin":s,"fa-spin-reverse":u,"fa-spin-pulse":l,"fa-pulse":d,"fa-fw":c,"fa-inverse":v,"fa-border":h,"fa-li":w,"fa-flip":b===!0,"fa-flip-horizontal":b==="horizontal"||b==="both","fa-flip-vertical":b==="vertical"||b==="both"},"fa-".concat(S),typeof S<"u"&&S!==null),"fa-rotate-".concat(x),typeof x<"u"&&x!==null&&x!==0),"fa-pull-".concat(k),typeof k<"u"&&k!==null),"fa-swap-opacity",P),"fa-rotate-by",B&&$),"fa-width-auto",B&&j);return Object.keys(se).map(function(M){return se[M]?M:null}).filter(function(M){return M})}function Io(e,t){for(var a=e.split("-"),r=Yt(a,2),n=r[0],i=r[1],o=t.split("-"),s=Yt(o,2),l=s[0],u=s[1],d=n.split("."),c=l.split("."),v=0;v<Math.max(d.length,c.length);v++){var h=d[v]||"0",w=c[v]||"0",b=parseInt(h,10),S=parseInt(w,10);if(b!==S)return b>S}for(var x=0;x<Math.max(d.length,c.length);x++){var k=d[x]||"0",P=c[x]||"0";if(k!==P&&k.length!==P.length)return k.length<P.length}return!(i&&!u)}function jo(e){return e=e-0,e===e}function Xa(e){return jo(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,a){return a?a.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Eo=["style"];function _o(e){return e.charAt(0).toUpperCase()+e.slice(1)}function No(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,a){var r=a.indexOf(":"),n=Xa(a.slice(0,r)),i=a.slice(r+1).trim();return n.startsWith("webkit")?t[_o(n)]=i:t[n]=i,t},{})}function Ka(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Ka(e,l)}),n=Object.keys(t.attributes||{}).reduce(function(l,u){var d=t.attributes[u];switch(u){case"class":l.attrs.className=d,delete t.attributes.class;break;case"style":l.attrs.style=No(d);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=d:l.attrs[Xa(u)]=d}return l},{attrs:{}}),i=a.style,o=i===void 0?{}:i,s=xo(a,Eo);return n.attrs.style=T(T({},n.attrs.style),o),e.apply(void 0,[t.tag,T(T({},n.attrs),s)].concat(qe(r)))}var qa=!1;try{qa=!0}catch{}function To(){if(!qa&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ht(e){if(e&&ge(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Xe.icon)return Xe.icon(e);if(e===null)return null;if(e&&ge(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Fe(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?D({},e,t):{}}var Gt={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,rotateBy:!1,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1,widthAuto:!1},te=Bt.forwardRef(function(e,t){var a=T(T({},Gt),e),r=a.icon,n=a.mask,i=a.symbol,o=a.className,s=a.title,l=a.titleId,u=a.maskId,d=Ht(r),c=Fe("classes",[].concat(qe(Oo(a)),qe((o||"").split(" ")))),v=Fe("transform",typeof a.transform=="string"?Xe.transform(a.transform):a.transform),h=Fe("mask",Ht(n)),w=so(d,T(T(T(T({},c),v),h),{},{symbol:i,title:s,titleId:l,maskId:u}));if(!w)return To("Could not find icon",d),null;var b=w.abstract,S={ref:t};return Object.keys(a).forEach(function(x){Gt.hasOwnProperty(x)||(S[x]=a[x])}),Fo(b[0],S)});te.displayName="FontAwesomeIcon";te.propTypes={beat:g.bool,border:g.bool,beatFade:g.bool,bounce:g.bool,className:g.string,fade:g.bool,flash:g.bool,mask:g.oneOfType([g.object,g.array,g.string]),maskId:g.string,fixedWidth:g.bool,inverse:g.bool,flip:g.oneOf([!0,!1,"horizontal","vertical","both"]),icon:g.oneOfType([g.object,g.array,g.string]),listItem:g.bool,pull:g.oneOf(["right","left"]),pulse:g.bool,rotation:g.oneOf([0,90,180,270]),rotateBy:g.bool,shake:g.bool,size:g.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:g.bool,spinPulse:g.bool,spinReverse:g.bool,symbol:g.oneOfType([g.bool,g.string]),title:g.string,titleId:g.string,transform:g.oneOfType([g.string,g.object]),swapOpacity:g.bool,widthAuto:g.bool};var Fo=Ka.bind(null,Bt.createElement);/*!
 * Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var Vo={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"]},Co={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]},Lo={prefix:"fas",iconName:"chevron-down",icon:[448,512,[],"f078","M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},Ro={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},Xo={prefix:"fas",iconName:"download",icon:[448,512,[],"f019","M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 242.7 256 32zM64 320c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-46.9 0-56.6 56.6c-31.2 31.2-81.9 31.2-113.1 0L110.9 320 64 320zm304 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]};const $o=E.lazy(()=>re(()=>import("./introCanvas-CWHXvdES.js"),__vite__mapDeps([0,1,2]))),Mo=()=>p.jsxs("div",{className:"absolute left-[5vw] top-0 flex h-[90vh] w-[90vw] flex-col items-center justify-center",children:[p.jsx("span",{className:"canvas-loader"}),p.jsx("p",{className:"mt-6 text-sm font-extrabold tracking-[0.2em] text-[#35c19f]",children:"Loading..."})]}),Do=()=>p.jsxs("div",{id:"home",className:"relative min-h-screen w-full",children:[p.jsx(E.Suspense,{fallback:p.jsx(Mo,{}),children:p.jsx($o,{})}),p.jsxs("div",{className:"pointer-events-none absolute bottom-20 right-8 z-[100] hidden flex-col items-center gap-2 md:flex",children:[p.jsxs("div",{className:"flex items-center gap-2 text-[#35c19f]/70",children:[p.jsx(te,{icon:Ro,className:"text-xs"}),p.jsx("div",{className:"flex h-9 w-28 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white/5 backdrop-blur-sm",children:p.jsx("span",{className:"animate-swipe-x h-4 w-4 rounded-full bg-[#35c19f] shadow-[0_0_14px_rgba(53,193,159,0.8)]"})}),p.jsx(te,{icon:Co,className:"text-xs"})]}),p.jsx("p",{className:"text-[10px] font-medium uppercase tracking-[0.25em] text-white/50",children:"Move mouse to look around"})]}),p.jsx("a",{href:"#about",className:"scroll-down-arrow group animate-bounce",children:p.jsx("span",{className:"flex h-11 w-11 items-center justify-center rounded-full border border-[#35c19f]/40 bg-[#35c19f]/15 text-[#35c19f] shadow-[0_0_20px_rgba(53,193,159,0.3)] backdrop-blur-sm transition-all duration-300 group-hover:bg-[#35c19f]/30 group-hover:shadow-[0_0_30px_rgba(53,193,159,0.5)]",children:p.jsx(te,{icon:Lo,className:"text-lg"})})})]}),zo=E.lazy(()=>re(()=>import("./about-DA52dZRg.js"),__vite__mapDeps([3,1]))),Wo=E.lazy(()=>re(()=>import("./experience-K6XJ5x_-.js"),__vite__mapDeps([4,1]))),Uo=E.lazy(()=>re(()=>import("./projects-CuiS8Wpj.js"),__vite__mapDeps([5,1]))),Yo=E.lazy(()=>re(()=>import("./contact-CHARTwra.js"),__vite__mapDeps([6,1,2]))),ue=()=>p.jsx("div",{className:"min-h-screen","aria-hidden":!0}),Ho=()=>p.jsxs("main",{className:"max-w-100vw min-h-100vh mx-auto",children:[p.jsx(er,{}),p.jsx(Do,{}),p.jsx(E.Suspense,{fallback:p.jsx(ue,{}),children:p.jsx(zo,{})}),p.jsx(E.Suspense,{fallback:p.jsx(ue,{}),children:p.jsx(Wo,{})}),p.jsx(E.Suspense,{fallback:p.jsx(ue,{}),children:p.jsx(Uo,{})}),p.jsx(E.Suspense,{fallback:p.jsx(ue,{}),children:p.jsx(Yo,{})})]});Qa.createRoot(document.getElementById("root")).render(p.jsx(E.StrictMode,{children:p.jsx(Ho,{})}));export{te as F,g as P,Xo as a,Vo as f};
