import{j as S}from"./three-mFKF2Hmq.js";import{R as zt,a as U,u as Ka,b as le,S as Wt}from"./gsap-BNZ_RyOE.js";import{P as p}from"./index-DtJfhlsp.js";import{A as Ja,R as qa}from"./motion-BzxnNHHT.js";/*!
 * Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */function Ce(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,r=Array(t);a<t;a++)r[a]=e[a];return r}function Qa(e){if(Array.isArray(e))return e}function Za(e){if(Array.isArray(e))return Ce(e)}function er(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function tr(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Ut(r.key),r)}}function ar(e,t,a){return t&&tr(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function fe(e,t){var a=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=Ke(e))||t){a&&(e=a);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:n}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,s=!1;return{s:function(){a=a.call(e)},n:function(){var l=a.next();return o=l.done,l},e:function(l){s=!0,i=l},f:function(){try{o||a.return==null||a.return()}finally{if(s)throw i}}}}function b(e,t,a){return(t=Ut(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function rr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function nr(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var r,n,i,o,s=[],l=!0,u=!1;try{if(i=(a=a.call(e)).next,t===0){if(Object(a)!==a)return;l=!1}else for(;!(l=(r=i.call(a)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(d){u=!0,n=d}finally{try{if(!l&&a.return!=null&&(o=a.return(),Object(o)!==o))return}finally{if(u)throw n}}return s}}function ir(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function or(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ot(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?ot(Object(a),!0).forEach(function(r){b(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ot(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function ge(e,t){return Qa(e)||nr(e,t)||Ke(e,t)||ir()}function N(e){return Za(e)||rr(e)||Ke(e)||or()}function sr(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ut(e){var t=sr(e,"string");return typeof t=="symbol"?t:t+""}function de(e){"@babel/helpers - typeof";return de=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},de(e)}function Ke(e,t){if(e){if(typeof e=="string")return Ce(e,t);var a={}.toString.call(e).slice(8,-1);return a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set"?Array.from(e):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Ce(e,t):void 0}}var st=function(){},Je={},Yt={},Ht=null,Gt={mark:st,measure:st};try{typeof window<"u"&&(Je=window),typeof document<"u"&&(Yt=document),typeof MutationObserver<"u"&&(Ht=MutationObserver),typeof performance<"u"&&(Gt=performance)}catch{}var lr=Je.navigator||{},lt=lr.userAgent,ft=lt===void 0?"":lt,D=Je,A=Yt,ut=Ht,oe=Gt;D.document;var $=!!A.documentElement&&!!A.head&&typeof A.addEventListener=="function"&&typeof A.createElement=="function",Bt=~ft.indexOf("MSIE")||~ft.indexOf("Trident/"),Ae,fr=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,ur=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Slab Press|Slab|Whiteboard)?.*/i,Xt={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"}},cr={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Vt=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],I="classic",ae="duotone",Kt="sharp",Jt="sharp-duotone",qt="chisel",Qt="etch",Zt="jelly",ea="jelly-duo",ta="jelly-fill",aa="notdog",ra="notdog-duo",na="slab",ia="slab-press",oa="thumbprint",sa="whiteboard",dr="Classic",mr="Duotone",vr="Sharp",hr="Sharp Duotone",pr="Chisel",gr="Etch",br="Jelly",yr="Jelly Duo",xr="Jelly Fill",wr="Notdog",Ar="Notdog Duo",Sr="Slab",kr="Slab Press",Pr="Thumbprint",Ir="Whiteboard",la=[I,ae,Kt,Jt,qt,Qt,Zt,ea,ta,aa,ra,na,ia,oa,sa];Ae={},b(b(b(b(b(b(b(b(b(b(Ae,I,dr),ae,mr),Kt,vr),Jt,hr),qt,pr),Qt,gr),Zt,br),ea,yr),ta,xr),aa,wr),b(b(b(b(b(Ae,ra,Ar),na,Sr),ia,kr),oa,Pr),sa,Ir);var Or={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"}},Er={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"}},jr=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),Nr={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},whiteboard:{semibold:"fawsb"}},fa=["fak","fa-kit","fakd","fa-kit-duotone"],ct={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Cr=["kit"],Fr="kit",Tr="kit-duotone",_r="Kit",$r="Kit Duotone";b(b({},Fr,_r),Tr,$r);var Lr={kit:{"fa-kit":"fak"}},Mr={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Rr={kit:{fak:"fa-kit"}},dt={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Se,se={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Dr=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],zr="classic",Wr="duotone",Ur="sharp",Yr="sharp-duotone",Hr="chisel",Gr="etch",Br="jelly",Xr="jelly-duo",Vr="jelly-fill",Kr="notdog",Jr="notdog-duo",qr="slab",Qr="slab-press",Zr="thumbprint",en="whiteboard",tn="Classic",an="Duotone",rn="Sharp",nn="Sharp Duotone",on="Chisel",sn="Etch",ln="Jelly",fn="Jelly Duo",un="Jelly Fill",cn="Notdog",dn="Notdog Duo",mn="Slab",vn="Slab Press",hn="Thumbprint",pn="Whiteboard";Se={},b(b(b(b(b(b(b(b(b(b(Se,zr,tn),Wr,an),Ur,rn),Yr,nn),Hr,on),Gr,sn),Br,ln),Xr,fn),Vr,un),Kr,cn),b(b(b(b(b(Se,Jr,dn),qr,mn),Qr,vn),Zr,hn),en,pn);var gn="kit",bn="kit-duotone",yn="Kit",xn="Kit Duotone";b(b({},gn,yn),bn,xn);var wn={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"}},An={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"]},Fe={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"}},Sn=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],ua=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr"].concat(Dr,Sn),kn=["solid","regular","light","thin","duotone","brands","semibold"],ca=[1,2,3,4,5,6,7,8,9,10],Pn=ca.concat([11,12,13,14,15,16,17,18,19,20]),In=["aw","fw","pull-left","pull-right"],On=[].concat(N(Object.keys(An)),kn,In,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",se.GROUP,se.SWAP_OPACITY,se.PRIMARY,se.SECONDARY]).concat(ca.map(function(e){return"".concat(e,"x")})).concat(Pn.map(function(e){return"w-".concat(e)})),En={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},T="___FONT_AWESOME___",Te=16,da="fa",ma="svg-inline--fa",H="data-fa-i2svg",_e="data-fa-pseudo-element",jn="data-fa-pseudo-element-pending",qe="data-prefix",Qe="data-icon",mt="fontawesome-i2svg",Nn="async",Cn=["HTML","HEAD","STYLE","SCRIPT"],va=["::before","::after",":before",":after"],ha=(function(){try{return!0}catch{return!1}})();function re(e){return new Proxy(e,{get:function(a,r){return r in a?a[r]:a[I]}})}var pa=f({},Xt);pa[I]=f(f(f(f({},{"fa-duotone":"duotone"}),Xt[I]),ct.kit),ct["kit-duotone"]);var Fn=re(pa),$e=f({},Nr);$e[I]=f(f(f(f({},{duotone:"fad"}),$e[I]),dt.kit),dt["kit-duotone"]);var vt=re($e),Le=f({},Fe);Le[I]=f(f({},Le[I]),Rr.kit);var ga=re(Le),Me=f({},wn);Me[I]=f(f({},Me[I]),Lr.kit);re(Me);var Tn=fr,ba="fa-layers-text",_n=ur,$n=f({},Or);re($n);var Ln=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ke=cr,Mn=[].concat(N(Cr),N(On)),Z=D.FontAwesomeConfig||{};function Rn(e){var t=A.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Dn(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(A&&typeof A.querySelector=="function"){var zn=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];zn.forEach(function(e){var t=ge(e,2),a=t[0],r=t[1],n=Dn(Rn(a));n!=null&&(Z[r]=n)})}var ya={styleDefault:"solid",familyDefault:I,cssPrefix:da,replacementClass:ma,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Z.familyPrefix&&(Z.cssPrefix=Z.familyPrefix);var J=f(f({},ya),Z);J.autoReplaceSvg||(J.observeMutations=!1);var m={};Object.keys(ya).forEach(function(e){Object.defineProperty(m,e,{enumerable:!0,set:function(a){J[e]=a,ee.forEach(function(r){return r(m)})},get:function(){return J[e]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(t){J.cssPrefix=t,ee.forEach(function(a){return a(m)})},get:function(){return J.cssPrefix}});D.FontAwesomeConfig=m;var ee=[];function Wn(e){return ee.push(e),function(){ee.splice(ee.indexOf(e),1)}}var X=Te,F={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Un(e){if(!(!e||!$)){var t=A.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var a=A.head.childNodes,r=null,n=a.length-1;n>-1;n--){var i=a[n],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return A.head.insertBefore(t,r),e}}var Yn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ht(){for(var e=12,t="";e-- >0;)t+=Yn[Math.random()*62|0];return t}function q(e){for(var t=[],a=(e||[]).length>>>0;a--;)t[a]=e[a];return t}function Ze(e){return e.classList?q(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function xa(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Hn(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,'="').concat(xa(e[a]),'" ')},"").trim()}function be(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(e[a].trim(),";")},"")}function et(e){return e.size!==F.size||e.x!==F.x||e.y!==F.y||e.rotate!==F.rotate||e.flipX||e.flipY}function Gn(e){var t=e.transform,a=e.containerWidth,r=e.iconWidth,n={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:n,inner:l,path:u}}function Bn(e){var t=e.transform,a=e.width,r=a===void 0?Te:a,n=e.height,i=n===void 0?Te:n,o="";return Bt?o+="translate(".concat(t.x/X-r/2,"em, ").concat(t.y/X-i/2,"em) "):o+="translate(calc(-50% + ".concat(t.x/X,"em), calc(-50% + ").concat(t.y/X,"em)) "),o+="scale(".concat(t.size/X*(t.flipX?-1:1),", ").concat(t.size/X*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var Xn=`:root, :host {
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
}`;function wa(){var e=da,t=ma,a=m.cssPrefix,r=m.replacementClass,n=Xn;if(a!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");n=n.replace(i,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(s,".".concat(r))}return n}var pt=!1;function Pe(){m.autoAddCss&&!pt&&(Un(wa()),pt=!0)}var Vn={mixout:function(){return{dom:{css:wa,insertCss:Pe}}},hooks:function(){return{beforeDOMElementCreation:function(){Pe()},beforeI2svg:function(){Pe()}}}},_=D||{};_[T]||(_[T]={});_[T].styles||(_[T].styles={});_[T].hooks||(_[T].hooks={});_[T].shims||(_[T].shims=[]);var j=_[T],Aa=[],Sa=function(){A.removeEventListener("DOMContentLoaded",Sa),me=1,Aa.map(function(t){return t()})},me=!1;$&&(me=(A.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(A.readyState),me||A.addEventListener("DOMContentLoaded",Sa));function Kn(e){$&&(me?setTimeout(e,0):Aa.push(e))}function ne(e){var t=e.tag,a=e.attributes,r=a===void 0?{}:a,n=e.children,i=n===void 0?[]:n;return typeof e=="string"?xa(e):"<".concat(t," ").concat(Hn(r),">").concat(i.map(ne).join(""),"</").concat(t,">")}function gt(e,t,a){if(e&&e[t]&&e[t][a])return{prefix:t,iconName:a,icon:e[t][a]}}var Ie=function(t,a,r,n){var i=Object.keys(t),o=i.length,s=a,l,u,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)u=i[l],d=s(d,t[u],u,t);return d};function ka(e){return N(e).length!==1?null:e.codePointAt(0).toString(16)}function bt(e){return Object.keys(e).reduce(function(t,a){var r=e[a],n=!!r.icon;return n?t[r.iconName]=r.icon:t[a]=r,t},{})}function Pa(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=a.skipHooks,n=r===void 0?!1:r,i=bt(t);typeof j.hooks.addPack=="function"&&!n?j.hooks.addPack(e,bt(t)):j.styles[e]=f(f({},j.styles[e]||{}),i),e==="fas"&&Pa("fa",t)}var te=j.styles,Jn=j.shims,Ia=Object.keys(ga),qn=Ia.reduce(function(e,t){return e[t]=Object.keys(ga[t]),e},{}),tt=null,Oa={},Ea={},ja={},Na={},Ca={};function Qn(e){return~Mn.indexOf(e)}function Zn(e,t){var a=t.split("-"),r=a[0],n=a.slice(1).join("-");return r===e&&n!==""&&!Qn(n)?n:null}var Fa=function(){var t=function(i){return Ie(te,function(o,s,l){return o[l]=Ie(s,i,{}),o},{})};Oa=t(function(n,i,o){if(i[3]&&(n[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){n[l.toString(16)]=o})}return n}),Ea=t(function(n,i,o){if(n[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){n[l]=o})}return n}),Ca=t(function(n,i,o){var s=i[2];return n[o]=o,s.forEach(function(l){n[l]=o}),n});var a="far"in te||m.autoFetchSvg,r=Ie(Jn,function(n,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!a&&(s="fas"),typeof o=="string"&&(n.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(n.unicodes[o.toString(16)]={prefix:s,iconName:l}),n},{names:{},unicodes:{}});ja=r.names,Na=r.unicodes,tt=ye(m.styleDefault,{family:m.familyDefault})};Wn(function(e){tt=ye(e.styleDefault,{family:m.familyDefault})});Fa();function at(e,t){return(Oa[e]||{})[t]}function ei(e,t){return(Ea[e]||{})[t]}function Y(e,t){return(Ca[e]||{})[t]}function Ta(e){return ja[e]||{prefix:null,iconName:null}}function ti(e){var t=Na[e],a=at("fas",e);return t||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function z(){return tt}var _a=function(){return{prefix:null,iconName:null,rest:[]}};function ai(e){var t=I,a=Ia.reduce(function(r,n){return r[n]="".concat(m.cssPrefix,"-").concat(n),r},{});return la.forEach(function(r){(e.includes(a[r])||e.some(function(n){return qn[r].includes(n)}))&&(t=r)}),t}function ye(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.family,r=a===void 0?I:a,n=Fn[r][e];if(r===ae&&!e)return"fad";var i=vt[r][e]||vt[r][n],o=e in j.styles?e:null,s=i||o||null;return s}function ri(e){var t=[],a=null;return e.forEach(function(r){var n=Zn(m.cssPrefix,r);n?a=n:r&&t.push(r)}),{iconName:a,rest:t}}function yt(e){return e.sort().filter(function(t,a,r){return r.indexOf(t)===a})}var xt=ua.concat(fa);function xe(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.skipLookups,r=a===void 0?!1:a,n=null,i=yt(e.filter(function(h){return xt.includes(h)})),o=yt(e.filter(function(h){return!xt.includes(h)})),s=i.filter(function(h){return n=h,!Vt.includes(h)}),l=ge(s,1),u=l[0],d=u===void 0?null:u,c=ai(i),v=f(f({},ri(o)),{},{prefix:ye(d,{family:c})});return f(f(f({},v),si({values:e,family:c,styles:te,config:m,canonical:v,givenPrefix:n})),ni(r,n,v))}function ni(e,t,a){var r=a.prefix,n=a.iconName;if(e||!r||!n)return{prefix:r,iconName:n};var i=t==="fa"?Ta(n):{},o=Y(r,n);return n=i.iconName||o||n,r=i.prefix||r,r==="far"&&!te.far&&te.fas&&!m.autoFetchSvg&&(r="fas"),{prefix:r,iconName:n}}var ii=la.filter(function(e){return e!==I||e!==ae}),oi=Object.keys(Fe).filter(function(e){return e!==I}).map(function(e){return Object.keys(Fe[e])}).flat();function si(e){var t=e.values,a=e.family,r=e.canonical,n=e.givenPrefix,i=n===void 0?"":n,o=e.styles,s=o===void 0?{}:o,l=e.config,u=l===void 0?{}:l,d=a===ae,c=t.includes("fa-duotone")||t.includes("fad"),v=u.familyDefault==="duotone",h=r.prefix==="fad"||r.prefix==="fa-duotone";if(!d&&(c||v||h)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&ii.includes(a)){var y=Object.keys(s).find(function(w){return oi.includes(w)});if(y||u.autoFetchSvg){var g=jr.get(a).defaultShortPrefixId;r.prefix=g,r.iconName=Y(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||i==="fa")&&(r.prefix=z()||"fas"),r}var li=(function(){function e(){er(this,e),this.definitions={}}return ar(e,[{key:"add",value:function(){for(var a=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];var o=n.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){a.definitions[s]=f(f({},a.definitions[s]||{}),o[s]),Pa(s,o[s]),Fa()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,r){var n=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(n).map(function(i){var o=n[i],s=o.prefix,l=o.iconName,u=o.icon,d=u[2];a[s]||(a[s]={}),d.length>0&&d.forEach(function(c){typeof c=="string"&&(a[s][c]=u)}),a[s][l]=u}),a}}])})(),wt=[],V={},K={},fi=Object.keys(K);function ui(e,t){var a=t.mixoutsTo;return wt=e,V={},Object.keys(K).forEach(function(r){fi.indexOf(r)===-1&&delete K[r]}),wt.forEach(function(r){var n=r.mixout?r.mixout():{};if(Object.keys(n).forEach(function(o){typeof n[o]=="function"&&(a[o]=n[o]),de(n[o])==="object"&&Object.keys(n[o]).forEach(function(s){a[o]||(a[o]={}),a[o][s]=n[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){V[o]||(V[o]=[]),V[o].push(i[o])})}r.provides&&r.provides(K)}),a}function Re(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];var i=V[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function G(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];var n=V[e]||[];n.forEach(function(i){i.apply(null,a)})}function W(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return K[e]?K[e].apply(null,t):void 0}function De(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,a=e.prefix||z();if(t)return t=Y(a,t)||t,gt($a.definitions,a,t)||gt(j.styles,a,t)}var $a=new li,ci=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,G("noAuto")},di={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return $?(G("beforeI2svg",t),W("pseudoElements2svg",t),W("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,Kn(function(){vi({autoReplaceSvgRoot:a}),G("watch",t)})}},mi={icon:function(t){if(t===null)return null;if(de(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Y(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var a=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=ye(t[0]);return{prefix:r,iconName:Y(r,a)||a}}if(typeof t=="string"&&(t.indexOf("".concat(m.cssPrefix,"-"))>-1||t.match(Tn))){var n=xe(t.split(" "),{skipLookups:!0});return{prefix:n.prefix||z(),iconName:Y(n.prefix,n.iconName)||n.iconName}}if(typeof t=="string"){var i=z();return{prefix:i,iconName:Y(i,t)||t}}}},O={noAuto:ci,config:m,dom:di,parse:mi,library:$a,findIconDefinition:De,toHtml:ne},vi=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot,r=a===void 0?A:a;(Object.keys(j.styles).length>0||m.autoFetchSvg)&&$&&m.autoReplaceSvg&&O.dom.i2svg({node:r})};function we(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return ne(r)})}}),Object.defineProperty(e,"node",{get:function(){if($){var r=A.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function hi(e){var t=e.children,a=e.main,r=e.mask,n=e.attributes,i=e.styles,o=e.transform;if(et(o)&&a.found&&!r.found){var s=a.width,l=a.height,u={x:s/l/2,y:.5};n.style=be(f(f({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:n,children:t}]}function pi(e){var t=e.prefix,a=e.iconName,r=e.children,n=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(m.cssPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},n),{},{id:o}),children:r}]}]}function gi(e){var t=["aria-label","aria-labelledby","title","role"];return t.some(function(a){return a in e})}function rt(e){var t=e.icons,a=t.main,r=t.mask,n=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.maskId,u=e.extra,d=e.watchable,c=d===void 0?!1:d,v=r.found?r:a,h=v.width,y=v.height,g=[m.replacementClass,i?"".concat(m.cssPrefix,"-").concat(i):""].filter(function(E){return u.classes.indexOf(E)===-1}).filter(function(E){return E!==""||!!E}).concat(u.classes).join(" "),w={children:[],attributes:f(f({},u.attributes),{},{"data-prefix":n,"data-icon":i,class:g,role:u.attributes.role||"img",viewBox:"0 0 ".concat(h," ").concat(y)})};!gi(u.attributes)&&!u.attributes["aria-hidden"]&&(w.attributes["aria-hidden"]="true"),c&&(w.attributes[H]="");var x=f(f({},w),{},{prefix:n,iconName:i,main:a,mask:r,maskId:l,transform:o,symbol:s,styles:f({},u.styles)}),k=r.found&&a.found?W("generateAbstractMask",x)||{children:[],attributes:{}}:W("generateAbstractIcon",x)||{children:[],attributes:{}},P=k.children,L=k.attributes;return x.children=P,x.attributes=L,s?pi(x):hi(x)}function At(e){var t=e.content,a=e.width,r=e.height,n=e.transform,i=e.extra,o=e.watchable,s=o===void 0?!1:o,l=f(f({},i.attributes),{},{class:i.classes.join(" ")});s&&(l[H]="");var u=f({},i.styles);et(n)&&(u.transform=Bn({transform:n,width:a,height:r}),u["-webkit-transform"]=u.transform);var d=be(u);d.length>0&&(l.style=d);var c=[];return c.push({tag:"span",attributes:l,children:[t]}),c}function bi(e){var t=e.content,a=e.extra,r=f(f({},a.attributes),{},{class:a.classes.join(" ")}),n=be(a.styles);n.length>0&&(r.style=n);var i=[];return i.push({tag:"span",attributes:r,children:[t]}),i}var Oe=j.styles;function ze(e){var t=e[0],a=e[1],r=e.slice(4),n=ge(r,1),i=n[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(ke.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(ke.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(ke.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:a,icon:o}}var yi={found:!1,width:512,height:512};function xi(e,t){!ha&&!m.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function We(e,t){var a=t;return t==="fa"&&m.styleDefault!==null&&(t=z()),new Promise(function(r,n){if(a==="fa"){var i=Ta(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Oe[t]&&Oe[t][e]){var o=Oe[t][e];return r(ze(o))}xi(e,t),r(f(f({},yi),{},{icon:m.showMissingIcons&&e?W("missingIconAbstract")||{}:{}}))})}var St=function(){},Ue=m.measurePerformance&&oe&&oe.mark&&oe.measure?oe:{mark:St,measure:St},Q='FA "7.0.0"',wi=function(t){return Ue.mark("".concat(Q," ").concat(t," begins")),function(){return La(t)}},La=function(t){Ue.mark("".concat(Q," ").concat(t," ends")),Ue.measure("".concat(Q," ").concat(t),"".concat(Q," ").concat(t," begins"),"".concat(Q," ").concat(t," ends"))},nt={begin:wi,end:La},ue=function(){};function kt(e){var t=e.getAttribute?e.getAttribute(H):null;return typeof t=="string"}function Ai(e){var t=e.getAttribute?e.getAttribute(qe):null,a=e.getAttribute?e.getAttribute(Qe):null;return t&&a}function Si(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(m.replacementClass)}function ki(){if(m.autoReplaceSvg===!0)return ce.replace;var e=ce[m.autoReplaceSvg];return e||ce.replace}function Pi(e){return A.createElementNS("http://www.w3.org/2000/svg",e)}function Ii(e){return A.createElement(e)}function Ma(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.ceFn,r=a===void 0?e.tag==="svg"?Pi:Ii:a;if(typeof e=="string")return A.createTextNode(e);var n=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){n.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){n.appendChild(Ma(o,{ceFn:r}))}),n}function Oi(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var ce={replace:function(t){var a=t[0];if(a.parentNode)if(t[1].forEach(function(n){a.parentNode.insertBefore(Ma(n),a)}),a.getAttribute(H)===null&&m.keepOriginalSource){var r=A.createComment(Oi(a));a.parentNode.replaceChild(r,a)}else a.remove()},nest:function(t){var a=t[0],r=t[1];if(~Ze(a).indexOf(m.replacementClass))return ce.replace(t);var n=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===m.replacementClass||l.match(n)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return ne(s)}).join(`
`);a.setAttribute(H,""),a.innerHTML=o}};function Pt(e){e()}function Ra(e,t){var a=typeof t=="function"?t:ue;if(e.length===0)a();else{var r=Pt;m.mutateApproach===Nn&&(r=D.requestAnimationFrame||Pt),r(function(){var n=ki(),i=nt.begin("mutate");e.map(n),i(),a()})}}var it=!1;function Da(){it=!0}function Ye(){it=!1}var ve=null;function It(e){if(ut&&m.observeMutations){var t=e.treeCallback,a=t===void 0?ue:t,r=e.nodeCallback,n=r===void 0?ue:r,i=e.pseudoElementsCallback,o=i===void 0?ue:i,s=e.observeMutationsRoot,l=s===void 0?A:s;ve=new ut(function(u){if(!it){var d=z();q(u).forEach(function(c){if(c.type==="childList"&&c.addedNodes.length>0&&!kt(c.addedNodes[0])&&(m.searchPseudoElements&&o(c.target),a(c.target)),c.type==="attributes"&&c.target.parentNode&&m.searchPseudoElements&&o([c.target],!0),c.type==="attributes"&&kt(c.target)&&~Ln.indexOf(c.attributeName))if(c.attributeName==="class"&&Ai(c.target)){var v=xe(Ze(c.target)),h=v.prefix,y=v.iconName;c.target.setAttribute(qe,h||d),y&&c.target.setAttribute(Qe,y)}else Si(c.target)&&n(c.target)})}}),$&&ve.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ei(){ve&&ve.disconnect()}function ji(e){var t=e.getAttribute("style"),a=[];return t&&(a=t.split(";").reduce(function(r,n){var i=n.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),a}function Ni(e){var t=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",n=xe(Ze(e));return n.prefix||(n.prefix=z()),t&&a&&(n.prefix=t,n.iconName=a),n.iconName&&n.prefix||(n.prefix&&r.length>0&&(n.iconName=ei(n.prefix,e.innerText)||at(n.prefix,ka(e.innerText))),!n.iconName&&m.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=e.firstChild.data)),n}function Ci(e){var t=q(e.attributes).reduce(function(a,r){return a.name!=="class"&&a.name!=="style"&&(a[r.name]=r.value),a},{});return t}function Fi(){return{iconName:null,prefix:null,transform:F,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ot(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=Ni(e),r=a.iconName,n=a.prefix,i=a.rest,o=Ci(e),s=Re("parseNodeAttributes",{},e),l=t.styleParser?ji(e):[];return f({iconName:r,prefix:n,transform:F,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Ti=j.styles;function za(e){var t=m.autoReplaceSvg==="nest"?Ot(e,{styleParser:!1}):Ot(e);return~t.extra.classes.indexOf(ba)?W("generateLayersText",e,t):W("generateSvgReplacementMutation",e,t)}function _i(){return[].concat(N(fa),N(ua))}function Et(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!$)return Promise.resolve();var a=A.documentElement.classList,r=function(c){return a.add("".concat(mt,"-").concat(c))},n=function(c){return a.remove("".concat(mt,"-").concat(c))},i=m.autoFetchSvg?_i():Vt.concat(Object.keys(Ti));i.includes("fa")||i.push("fa");var o=[".".concat(ba,":not([").concat(H,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(H,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=q(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),n("complete");else return Promise.resolve();var l=nt.begin("onTree"),u=s.reduce(function(d,c){try{var v=za(c);v&&d.push(v)}catch(h){ha||h.name==="MissingIcon"&&console.error(h)}return d},[]);return new Promise(function(d,c){Promise.all(u).then(function(v){Ra(v,function(){r("active"),r("complete"),n("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),c(v)})})}function $i(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;za(e).then(function(a){a&&Ra([a],t)})}function Li(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:De(t||{}),n=a.mask;return n&&(n=(n||{}).icon?n:De(n||{})),e(r,f(f({},a),{},{mask:n}))}}var Mi=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,n=r===void 0?F:r,i=a.symbol,o=i===void 0?!1:i,s=a.mask,l=s===void 0?null:s,u=a.maskId,d=u===void 0?null:u,c=a.classes,v=c===void 0?[]:c,h=a.attributes,y=h===void 0?{}:h,g=a.styles,w=g===void 0?{}:g;if(t){var x=t.prefix,k=t.iconName,P=t.icon;return we(f({type:"icon"},t),function(){return G("beforeDOMElementCreation",{iconDefinition:t,params:a}),rt({icons:{main:ze(P),mask:l?ze(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:k,transform:f(f({},F),n),symbol:o,maskId:d,extra:{attributes:y,styles:w,classes:v}})})}},Ri={mixout:function(){return{icon:Li(Mi)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=Et,a.nodeCallback=$i,a}}},provides:function(t){t.i2svg=function(a){var r=a.node,n=r===void 0?A:r,i=a.callback,o=i===void 0?function(){}:i;return Et(n,o)},t.generateSvgReplacementMutation=function(a,r){var n=r.iconName,i=r.prefix,o=r.transform,s=r.symbol,l=r.mask,u=r.maskId,d=r.extra;return new Promise(function(c,v){Promise.all([We(n,i),l.iconName?We(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(h){var y=ge(h,2),g=y[0],w=y[1];c([a,rt({icons:{main:g,mask:w},prefix:i,iconName:n,transform:o,symbol:s,maskId:u,extra:d,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(a){var r=a.children,n=a.attributes,i=a.main,o=a.transform,s=a.styles,l=be(s);l.length>0&&(n.style=l);var u;return et(o)&&(u=W("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:n}}}},Di={mixout:function(){return{layer:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.classes,i=n===void 0?[]:n;return we({type:"layer"},function(){G("beforeDOMElementCreation",{assembler:a,params:r});var o=[];return a(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(N(i)).join(" ")},children:o}]})}}}},zi={mixout:function(){return{counter:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var n=r.classes,i=n===void 0?[]:n,o=r.attributes,s=o===void 0?{}:o,l=r.styles,u=l===void 0?{}:l;return we({type:"counter",content:a},function(){return G("beforeDOMElementCreation",{content:a,params:r}),bi({content:a.toString(),extra:{attributes:s,styles:u,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(N(i))}})})}}}},Wi={mixout:function(){return{text:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.transform,i=n===void 0?F:n,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,d=r.styles,c=d===void 0?{}:d;return we({type:"text",content:a},function(){return G("beforeDOMElementCreation",{content:a,params:r}),At({content:a,transform:f(f({},F),i),extra:{attributes:u,styles:c,classes:["".concat(m.cssPrefix,"-layers-text")].concat(N(s))}})})}}},provides:function(t){t.generateLayersText=function(a,r){var n=r.transform,i=r.extra,o=null,s=null;if(Bt){var l=parseInt(getComputedStyle(a).fontSize,10),u=a.getBoundingClientRect();o=u.width/l,s=u.height/l}return Promise.resolve([a,At({content:a.innerHTML,width:o,height:s,transform:n,extra:i,watchable:!0})])}}},Wa=new RegExp('"',"ug"),jt=[1105920,1112319],Nt=f(f(f(f({},{FontAwesome:{normal:"fas",400:"fas"}}),Er),En),Mr),He=Object.keys(Nt).reduce(function(e,t){return e[t.toLowerCase()]=Nt[t],e},{}),Ui=Object.keys(He).reduce(function(e,t){var a=He[t];return e[t]=a[900]||N(Object.entries(a))[0][1],e},{});function Yi(e){var t=e.replace(Wa,"");return ka(N(t)[0]||"")}function Hi(e){var t=e.getPropertyValue("font-feature-settings").includes("ss01"),a=e.getPropertyValue("content"),r=a.replace(Wa,""),n=r.codePointAt(0),i=n>=jt[0]&&n<=jt[1],o=r.length===2?r[0]===r[1]:!1;return i||o||t}function Gi(e,t){var a=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),n=isNaN(r)?"normal":r;return(He[a]||{})[n]||Ui[a]}function Ct(e,t){var a="".concat(jn).concat(t.replace(":","-"));return new Promise(function(r,n){if(e.getAttribute(a)!==null)return r();var i=q(e.children),o=i.filter(function(B){return B.getAttribute(_e)===t})[0],s=D.getComputedStyle(e,t),l=s.getPropertyValue("font-family"),u=l.match(_n),d=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!u)return e.removeChild(o),r();if(u&&c!=="none"&&c!==""){var v=s.getPropertyValue("content"),h=Gi(l,d),y=Yi(v),g=u[0].startsWith("FontAwesome"),w=Hi(s),x=at(h,y),k=x;if(g){var P=ti(y);P.iconName&&P.prefix&&(x=P.iconName,h=P.prefix)}if(x&&!w&&(!o||o.getAttribute(qe)!==h||o.getAttribute(Qe)!==k)){e.setAttribute(a,k),o&&e.removeChild(o);var L=Fi(),E=L.extra;E.attributes[_e]=t,We(x,h).then(function(B){var ie=rt(f(f({},L),{},{icons:{main:B,mask:_a()},prefix:h,iconName:k,extra:E,watchable:!0})),M=A.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(M,e.firstChild):e.appendChild(M),M.outerHTML=ie.map(function(Va){return ne(Va)}).join(`
`),e.removeAttribute(a),r()}).catch(n)}else r()}else r()})}function Bi(e){return Promise.all([Ct(e,"::before"),Ct(e,"::after")])}function Xi(e){return e.parentNode!==document.head&&!~Cn.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(_e)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var Vi=function(t){return!!t&&va.some(function(a){return t.includes(a)})},Ki=function(t){if(!t)return[];for(var a=new Set,r=[t],n=[/(?=\s:)/,new RegExp("(?<=\\)\\)?[^,]*,)")],i=function(){var h=s[o];r=r.flatMap(function(y){return y.split(h).map(function(g){return g.replace(/,\s*$/,"").trim()})})},o=0,s=n;o<s.length;o++)i();r=r.flatMap(function(v){return v.includes("(")?v:v.split(",").map(function(h){return h.trim()})});var l=fe(r),u;try{for(l.s();!(u=l.n()).done;){var d=u.value;if(Vi(d)){var c=va.reduce(function(v,h){return v.replace(h,"")},d);c!==""&&c!=="*"&&a.add(c)}}}catch(v){l.e(v)}finally{l.f()}return a};function Ft(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if($){var a;if(t)a=e;else if(m.searchPseudoElementsFullScan)a=e.querySelectorAll("*");else{var r=new Set,n=fe(document.styleSheets),i;try{for(n.s();!(i=n.n()).done;){var o=i.value;try{var s=fe(o.cssRules),l;try{for(s.s();!(l=s.n()).done;){var u=l.value,d=Ki(u.selectorText),c=fe(d),v;try{for(c.s();!(v=c.n()).done;){var h=v.value;r.add(h)}}catch(g){c.e(g)}finally{c.f()}}}catch(g){s.e(g)}finally{s.f()}}catch(g){m.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(g.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(g){n.e(g)}finally{n.f()}if(!r.size)return;var y=Array.from(r).join(", ");try{a=e.querySelectorAll(y)}catch{}}return new Promise(function(g,w){var x=q(a).filter(Xi).map(Bi),k=nt.begin("searchPseudoElements");Da(),Promise.all(x).then(function(){k(),Ye(),g()}).catch(function(){k(),Ye(),w()})})}}var Ji={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=Ft,a}}},provides:function(t){t.pseudoElements2svg=function(a){var r=a.node,n=r===void 0?A:r;m.searchPseudoElements&&Ft(n)}}},Tt=!1,qi={mixout:function(){return{dom:{unwatch:function(){Da(),Tt=!0}}}},hooks:function(){return{bootstrap:function(){It(Re("mutationObserverCallbacks",{}))},noAuto:function(){Ei()},watch:function(a){var r=a.observeMutationsRoot;Tt?Ye():It(Re("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},_t=function(t){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,n){var i=n.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},a)},Qi={mixout:function(){return{parse:{transform:function(a){return _t(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-transform");return n&&(a.transform=_t(n)),a}}},provides:function(t){t.generateAbstractTransformGrouping=function(a){var r=a.main,n=a.transform,i=a.containerWidth,o=a.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(n.x*32,", ").concat(n.y*32,") "),u="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),d="rotate(".concat(n.rotate," 0 0)"),c={transform:"".concat(l," ").concat(u," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},h={outer:s,inner:c,path:v};return{tag:"g",attributes:f({},h.outer),children:[{tag:"g",attributes:f({},h.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:f(f({},r.icon.attributes),h.path)}]}]}}}},Ee={x:0,y:0,width:"100%",height:"100%"};function $t(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Zi(e){return e.tag==="g"?e.children:[e]}var eo={hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-mask"),i=n?xe(n.split(" ").map(function(o){return o.trim()})):_a();return i.prefix||(i.prefix=z()),a.mask=i,a.maskId=r.getAttribute("data-fa-mask-id"),a}}},provides:function(t){t.generateAbstractMask=function(a){var r=a.children,n=a.attributes,i=a.main,o=a.mask,s=a.maskId,l=a.transform,u=i.width,d=i.icon,c=o.width,v=o.icon,h=Gn({transform:l,containerWidth:c,iconWidth:u}),y={tag:"rect",attributes:f(f({},Ee),{},{fill:"white"})},g=d.children?{children:d.children.map($t)}:{},w={tag:"g",attributes:f({},h.inner),children:[$t(f({tag:d.tag,attributes:f(f({},d.attributes),h.path)},g))]},x={tag:"g",attributes:f({},h.outer),children:[w]},k="mask-".concat(s||ht()),P="clip-".concat(s||ht()),L={tag:"mask",attributes:f(f({},Ee),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,x]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:Zi(v)},L]};return r.push(E,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(k,")")},Ee)}),{children:r,attributes:n}}}},to={provides:function(t){var a=!1;D.matchMedia&&(a=D.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],n={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:f(f({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=f(f({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:f(f({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||s.children.push({tag:"animate",attributes:f(f({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:f(f({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:f(f({},o),{},{values:"1;0;0;0;0;1;"})}]}),a||r.push({tag:"path",attributes:f(f({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},ao={hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-symbol"),i=n===null?!1:n===""?!0:n;return a.symbol=i,a}}}},ro=[Vn,Ri,Di,zi,Wi,Ji,qi,Qi,eo,to,ao];ui(ro,{mixoutsTo:O});O.noAuto;O.config;O.library;O.dom;var Ge=O.parse;O.findIconDefinition;O.toHtml;var no=O.icon;O.layer;O.text;O.counter;var io={};function Be(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,r=Array(t);a<t;a++)r[a]=e[a];return r}function oo(e){if(Array.isArray(e))return e}function so(e){if(Array.isArray(e))return Be(e)}function R(e,t,a){return(t=po(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function lo(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function fo(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var r,n,i,o,s=[],l=!0,u=!1;try{if(i=(a=a.call(e)).next,t!==0)for(;!(l=(r=i.call(a)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(d){u=!0,n=d}finally{try{if(!l&&a.return!=null&&(o=a.return(),Object(o)!==o))return}finally{if(u)throw n}}return s}}function uo(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function co(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Lt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function C(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?Lt(Object(a),!0).forEach(function(r){R(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Lt(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function mo(e,t){if(e==null)return{};var a,r,n=vo(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)===-1&&{}.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function vo(e,t){if(e==null)return{};var a={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;a[r]=e[r]}return a}function Mt(e,t){return oo(e)||fo(e,t)||Ua(e,t)||uo()}function Xe(e){return so(e)||lo(e)||Ua(e)||co()}function ho(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function po(e){var t=ho(e,"string");return typeof t=="symbol"?t:t+""}function he(e){"@babel/helpers - typeof";return he=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},he(e)}function Ua(e,t){if(e){if(typeof e=="string")return Be(e,t);var a={}.toString.call(e).slice(8,-1);return a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set"?Array.from(e):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Be(e,t):void 0}}var go="7.0.0-alpha1",Ve;try{var bo=require("@fortawesome/fontawesome-svg-core/package.json");Ve=bo.version}catch{Ve=io.FA_VERSION||"7.0.0-alpha8"}function yo(e){var t=e.beat,a=e.fade,r=e.beatFade,n=e.bounce,i=e.shake,o=e.flash,s=e.spin,l=e.spinPulse,u=e.spinReverse,d=e.pulse,c=e.fixedWidth,v=e.inverse,h=e.border,y=e.listItem,g=e.flip,w=e.size,x=e.rotation,k=e.pull,P=e.swapOpacity,L=e.rotateBy,E=e.widthAuto,B=xo(Ve,go),ie=R(R(R(R(R(R({"fa-beat":t,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":n,"fa-shake":i,"fa-flash":o,"fa-spin":s,"fa-spin-reverse":u,"fa-spin-pulse":l,"fa-pulse":d,"fa-fw":c,"fa-inverse":v,"fa-border":h,"fa-li":y,"fa-flip":g===!0,"fa-flip-horizontal":g==="horizontal"||g==="both","fa-flip-vertical":g==="vertical"||g==="both"},"fa-".concat(w),typeof w<"u"&&w!==null),"fa-rotate-".concat(x),typeof x<"u"&&x!==null&&x!==0),"fa-pull-".concat(k),typeof k<"u"&&k!==null),"fa-swap-opacity",P),"fa-rotate-by",B&&L),"fa-width-auto",B&&E);return Object.keys(ie).map(function(M){return ie[M]?M:null}).filter(function(M){return M})}function xo(e,t){for(var a=e.split("-"),r=Mt(a,2),n=r[0],i=r[1],o=t.split("-"),s=Mt(o,2),l=s[0],u=s[1],d=n.split("."),c=l.split("."),v=0;v<Math.max(d.length,c.length);v++){var h=d[v]||"0",y=c[v]||"0",g=parseInt(h,10),w=parseInt(y,10);if(g!==w)return g>w}for(var x=0;x<Math.max(d.length,c.length);x++){var k=d[x]||"0",P=c[x]||"0";if(k!==P&&k.length!==P.length)return k.length<P.length}return!(i&&!u)}function wo(e){return e=e-0,e===e}function Ya(e){return wo(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,a){return a?a.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Ao=["style"];function So(e){return e.charAt(0).toUpperCase()+e.slice(1)}function ko(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,a){var r=a.indexOf(":"),n=Ya(a.slice(0,r)),i=a.slice(r+1).trim();return n.startsWith("webkit")?t[So(n)]=i:t[n]=i,t},{})}function Ha(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Ha(e,l)}),n=Object.keys(t.attributes||{}).reduce(function(l,u){var d=t.attributes[u];switch(u){case"class":l.attrs.className=d,delete t.attributes.class;break;case"style":l.attrs.style=ko(d);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=d:l.attrs[Ya(u)]=d}return l},{attrs:{}}),i=a.style,o=i===void 0?{}:i,s=mo(a,Ao);return n.attrs.style=C(C({},n.attrs.style),o),e.apply(void 0,[t.tag,C(C({},n.attrs),s)].concat(Xe(r)))}var Ga=!1;try{Ga=!0}catch{}function Po(){if(!Ga&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Rt(e){if(e&&he(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Ge.icon)return Ge.icon(e);if(e===null)return null;if(e&&he(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function je(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?R({},e,t):{}}var Dt={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,rotateBy:!1,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1,widthAuto:!1},pe=zt.forwardRef(function(e,t){var a=C(C({},Dt),e),r=a.icon,n=a.mask,i=a.symbol,o=a.className,s=a.title,l=a.titleId,u=a.maskId,d=Rt(r),c=je("classes",[].concat(Xe(yo(a)),Xe((o||"").split(" ")))),v=je("transform",typeof a.transform=="string"?Ge.transform(a.transform):a.transform),h=je("mask",Rt(n)),y=no(d,C(C(C(C({},c),v),h),{},{symbol:i,title:s,titleId:l,maskId:u}));if(!y)return Po("Could not find icon",d),null;var g=y.abstract,w={ref:t};return Object.keys(a).forEach(function(x){Dt.hasOwnProperty(x)||(w[x]=a[x])}),Io(g[0],w)});pe.displayName="FontAwesomeIcon";pe.propTypes={beat:p.bool,border:p.bool,beatFade:p.bool,bounce:p.bool,className:p.string,fade:p.bool,flash:p.bool,mask:p.oneOfType([p.object,p.array,p.string]),maskId:p.string,fixedWidth:p.bool,inverse:p.bool,flip:p.oneOf([!0,!1,"horizontal","vertical","both"]),icon:p.oneOfType([p.object,p.array,p.string]),listItem:p.bool,pull:p.oneOf(["right","left"]),pulse:p.bool,rotation:p.oneOf([0,90,180,270]),rotateBy:p.bool,shake:p.bool,size:p.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:p.bool,spinPulse:p.bool,spinReverse:p.bool,symbol:p.oneOfType([p.bool,p.string]),title:p.string,titleId:p.string,transform:p.oneOfType([p.string,p.object]),swapOpacity:p.bool,widthAuto:p.bool};var Io=Ha.bind(null,zt.createElement);/*!
 * Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var Oo={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]},Eo={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]};le.registerPlugin(Wt);const jo=[{title:"Super-Resolution Diffusion Model",description:"A UNet-based diffusion model that generates high-resolution radiation dose distribution maps for cancer treatment planning. Trained to distinguish different body tissue types and predict how radiation propagates through each, producing realistic dose-spread imagery.",tech:["PyTorch","UNet","Diffusion Models"]},{title:"PubMed Research Agent",description:"An LLM-powered research assistant for scientific literature. The agent orchestrates PubMed API calls end-to-end — searching, retrieving, and ranking publications — then synthesizes grounded, citation-aware answers through a retrieval-augmented generation pipeline backed by OpenSearch.",tech:["LangChain","OpenSearch","Docker","Python"]},{title:"AI Debugging Agent",description:"A multi-step autonomous agent that debugs code with minimal human input. It analyzes a codebase to localize faults, generates targeted tests to reproduce failures, and applies verified fixes — all coordinated through structured tool orchestration.",tech:["Python","OpenAI API","Tool Orchestration"]},{title:"Reinforcement Learning Agent for Bomberman",description:"A multi-agent RL agent for a Bomberman competition, evolved from Q-learning to DQN to a final PPO agent with action masking and a custom CNN over the board. The rule-based masks lifted the four-player win rate from 13% to 40%, alongside a 64% win rate in duels against the rule-based baseline.",tech:["Python","PyTorch","Stable-Baselines3","Gymnasium"]}],Ne="max(16px, calc((100% - 980px) / 2 + 16px))",Ba="proj-card flex w-[85vw] shrink-0 snap-start flex-col",Xa="relative flex min-h-[400px] flex-1 flex-col overflow-hidden rounded-[28px] bg-surface-card md:min-h-[min(48vh,440px)]",No=()=>S.jsx("li",{className:`${Ba} md:w-[760px]`,children:S.jsx("div",{className:Xa,children:S.jsx("img",{src:"img/projects.jpeg",alt:"Illustration of a workshop full of projects in progress",className:"absolute inset-0 h-full w-full object-cover",loading:"lazy",decoding:"async"})})}),Co=({project:e})=>{const[t,a]=U.useState(!1),r=U.useId();return S.jsx("li",{className:`${Ba} md:w-[560px]`,children:S.jsxs("div",{className:Xa,children:[S.jsxs("div",{className:"flex h-[230px] shrink-0 flex-col justify-end p-8 md:h-[clamp(170px,26vh,230px)]",style:{background:"radial-gradient(120% 120% at 50% 100%, rgba(53,193,159,0.22) 0%, rgba(53,193,159,0.05) 45%, transparent 75%)"},children:[S.jsx("h3",{className:"text-[clamp(28px,3vw,40px)] font-semibold leading-[1.05] tracking-[-0.025em] text-white",children:e.title}),S.jsx("p",{className:"mt-3 text-[15px] text-white/70",children:e.tech.join(" · ")})]}),S.jsxs("div",{className:"flex-1 border-t border-white/10 bg-black/30 px-8 py-6",children:[S.jsx("p",{id:r,className:`text-[17px] leading-[1.47] text-white/75 md:line-clamp-none ${t?"":"line-clamp-3"}`,children:e.description}),S.jsx("button",{type:"button",onClick:()=>a(n=>!n),"aria-expanded":t,"aria-controls":r,className:"link-more mt-2 md:hidden",children:t?"Show less":"Read more"})]})]})})},Lo=()=>{const e=U.useRef(null),t=U.useRef(null),[a,r]=U.useState(!0),[n,i]=U.useState(!1);U.useEffect(()=>{const s=t.current;if(!s)return;const l=()=>{r(s.scrollLeft<=4),i(s.scrollLeft+s.clientWidth>=s.scrollWidth-4)};return l(),s.addEventListener("scroll",l,{passive:!0}),window.addEventListener("resize",l),()=>{s.removeEventListener("scroll",l),window.removeEventListener("resize",l)}},[]);const o=s=>{const l=t.current;if(!l)return;const u=l.querySelector(".proj-card")?.offsetLeft??0,d=[...l.querySelectorAll(".proj-card")].map(y=>y.offsetLeft-u),c=l.scrollLeft,v=s>0?d.find(y=>y>c+4):[...d].reverse().find(y=>y<c-4);if(v===void 0)return;const h=window.matchMedia("(prefers-reduced-motion: reduce)").matches;l.scrollTo({left:v,behavior:h?"auto":"smooth"})};return Ka(()=>{le.matchMedia().add(Ja,()=>{le.utils.toArray(".proj-reveal").forEach(l=>{le.from(l,{...qa,scrollTrigger:{trigger:l,start:"top 85%",once:!0}})})}),requestAnimationFrame(()=>Wt.refresh())},{scope:e}),S.jsxs("section",{id:"projects",ref:e,className:"relative w-full bg-surface-raised py-32",children:[S.jsxs("div",{className:"proj-reveal mx-auto max-w-[980px] px-4",children:[S.jsx("p",{className:"eyebrow",children:"Projects"}),S.jsx("h2",{className:"headline-lg mt-2 text-white",children:"Things I've built lately."})]}),S.jsxs("ul",{ref:t,"aria-label":"Projects",className:"proj-reveal mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",style:{paddingLeft:Ne,paddingRight:Ne,scrollPaddingLeft:Ne},children:[S.jsx(No,{}),jo.map(s=>S.jsx(Co,{project:s},s.title))]}),S.jsxs("div",{className:"mx-auto mt-8 flex max-w-[980px] justify-end gap-3 px-4",children:[S.jsx("button",{type:"button",onClick:()=>o(-1),disabled:a,"aria-label":"Previous project",className:"flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white/80 transition-colors duration-200 hover:bg-white/25 disabled:cursor-default disabled:opacity-40 disabled:hover:bg-white/15",children:S.jsx(pe,{icon:Eo,className:"text-sm"})}),S.jsx("button",{type:"button",onClick:()=>o(1),disabled:n,"aria-label":"Next project",className:"flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white/80 transition-colors duration-200 hover:bg-white/25 disabled:cursor-default disabled:opacity-40 disabled:hover:bg-white/15",children:S.jsx(pe,{icon:Oo,className:"text-sm"})})]})]})};export{Lo as default};
