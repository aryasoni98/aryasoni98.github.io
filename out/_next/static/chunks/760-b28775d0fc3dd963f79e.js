(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[760],{3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)}},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},3391:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(n=(a=l.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(s){o=!0,i=s}finally{try{n||null==l.return||l.return()}finally{if(o)throw i}}return r}}(e,t)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,{Z:function(){return o}})},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,r){var n=r(3646),o=r(6860),i=r(379),a=r(8206);e.exports=function(e){return n(e)||o(e)||i(e)||a()}},4995:function(e,t,r){"use strict";r.d(t,{rm:function(){return _}});var{toPrimitive:n}=Symbol,o=Symbol.for("sxs.composers"),{assign:i,create:a,defineProperties:l,getOwnPropertyDescriptors:s}=Object,c=(e,t,r)=>i(l(e,s(r)),{[n]:()=>e[t],toString:()=>e[t]}),d=e=>e.includes("-")?e:e.replace(/[A-Z]/g,(e=>"-"+e.toLowerCase())),u=(e,t)=>e.reduce(((e,r)=>(e.push(...t.map((e=>e.includes("&")?e.replace(/&/g,/[ +>|~]/.test(r)&&/&.*&/.test(e)?`:is(${r})`:r):r+" "+e))),e)),[]),{isArray:p}=Array,{from:f}=Array,{prototype:{toString:g}}=Object,h=/\s*,\s*(?![^()]*\))/,m=/([\d.]+)([^]*)/,b={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},y={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},v=/\s+(?![^()]*\))/,S=e=>t=>e(..."string"==typeof t?String(t).split(v):[t]),k=JSON.stringify,w={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:S(((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e}))),marginInline:S(((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e}))),maxSize:S(((e,t)=>({maxBlockSize:e,maxInlineSize:t||e}))),minSize:S(((e,t)=>({minBlockSize:e,minInlineSize:t||e}))),paddingBlock:S(((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e}))),paddingInline:S(((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e})))},O=e=>{let t,r,n,o;const i={};return a=>{const l=k(a);return l in i?i[l]:i[l]=((e,t)=>{const r=new WeakSet,n=(e,o,i,a,l)=>{let s="";e:for(const c in e){const f=64===c.charCodeAt(0);for(const m of f&&p(e[c])?e[c]:[e[c]]){if(t&&(c!==a||m!==l)){const e=t(c,m);if(null!==e){s+="object"==typeof e&&e?n(e,o,i,c,m):null==e?"":e;continue e}}if("object"==typeof m&&m&&m.toString===g){r.has(o)&&(r.delete(o),s+="}");const e=Object(c),t=f?o:o.length?u(o,c.split(h)):c.split(h);s+=n(m,t,f?i.concat(e):i),r.has(e)&&(r.delete(e),s+="}"),r.has(t)&&(r.delete(t),s+="}")}else{for(let e=0;e<i.length;++e)r.has(i[e])||(r.add(i[e]),s+=i[e]+"{");o.length&&!r.has(o)&&(r.add(o),s+=o+"{"),s+=(f?c+" ":d(c)+":")+String(m)+";"}}}return s};return n(e,[],[])})(a,((i,a)=>{const l=i.charCodeAt(0),s=64===l?i:/[A-Z]/.test(c=i)?c:c.replace(/-[^]/g,(e=>e[1].toUpperCase()));var c;const u=64===l?i:d(i);if("function"==typeof e.utils[i]){if(e.utils[i]!=n||a!=o)return n=e.utils[i],o=a,n(e)(o)}else if("function"==typeof w[s]&&(w[s]!=n||a!=o))return n=w[s],o=a,n(o);if(o=a,t!=s&&r!=a&&u in b){t=s,r=a;const e=((e,t)=>t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,((t,r,n,o)=>r+("stretch"===n?`-moz-available${o};${e}:${r}-webkit-fill-available`:`-moz-fit-content${o};${e}:${r}fit-content`)+o)))(u,String(r));if(e!=a)return{[i]:e}}let p=64===l?(i.slice(1)in e.media?"@media "+e.media[i.slice(1)]:i).replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,((e,t,r,n,o,i)=>{const a=m.test(t),l=.0625*(a?-1:1),[s,c]=a?[n,t]:[t,n];return"("+("="===r[0]?"":">"===r[0]===a?"max-":"min-")+s+":"+("="!==r[0]&&1===r.length?c.replace(m,((e,t,n)=>Number(t)+l*(">"===r?1:-1)+n)):c)+(o?") and ("+(">"===o[0]?"min-":"max-")+s+":"+(1===o.length?i.replace(m,((e,t,r)=>Number(t)+l*(">"===o?-1:1)+r)):i):"")+")"})):36===l?("sx"===e.prefix?"-":"--"+e.prefix)+i.replace(/\$/g,"-"):i;const f="object"==typeof a&&a?a:"number"==typeof a&&a&&s in y?String(a)+"px":((e,t,r)=>t.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,((t,n,o,i,a)=>"$"==i==!!o?t:(n||"--"==i?"calc(":"")+"var("+("$"===i?("sx"===r.prefix?"-":"--"+r.prefix)+"-"+(a.includes("$")?"":e in r.themeMap?r.themeMap[e]+"-":"")+a.replace(/\$/g,"-"):i+a)+")"+(n||"--"==i?"*"+(n||"")+(o||"1")+")":""))))(s,String(a),e);return a!=f||u!=p?{[p]:f}:null}))}},{ownKeys:x}=Reflect,j=class extends Set{toString(){return f(this).join("")}get hasChanged(){const{size:e}=this;return()=>e<this.size}},B=j;j.prototype[n]=j.prototype.toString;var I="colors",E="sizes",M="space",P={gap:M,gridGap:M,columnGap:M,gridColumnGap:M,rowGap:M,gridRowGap:M,inset:M,insetBlock:M,insetBlockEnd:M,insetBlockStart:M,insetInline:M,insetInlineEnd:M,insetInlineStart:M,margin:M,marginTop:M,marginRight:M,marginBottom:M,marginLeft:M,marginBlock:M,marginBlockEnd:M,marginBlockStart:M,marginInline:M,marginInlineEnd:M,marginInlineStart:M,padding:M,paddingTop:M,paddingRight:M,paddingBottom:M,paddingLeft:M,paddingBlock:M,paddingBlockEnd:M,paddingBlockStart:M,paddingInline:M,paddingInlineEnd:M,paddingInlineStart:M,top:M,right:M,bottom:M,left:M,scrollMargin:M,scrollMarginTop:M,scrollMarginRight:M,scrollMarginBottom:M,scrollMarginLeft:M,scrollMarginX:M,scrollMarginY:M,scrollMarginBlock:M,scrollMarginBlockEnd:M,scrollMarginBlockStart:M,scrollMarginInline:M,scrollMarginInlineEnd:M,scrollMarginInlineStart:M,scrollPadding:M,scrollPaddingTop:M,scrollPaddingRight:M,scrollPaddingBottom:M,scrollPaddingLeft:M,scrollPaddingX:M,scrollPaddingY:M,scrollPaddingBlock:M,scrollPaddingBlockEnd:M,scrollPaddingBlockStart:M,scrollPaddingInline:M,scrollPaddingInlineEnd:M,scrollPaddingInlineStart:M,fontSize:"fontSizes",background:I,backgroundColor:I,backgroundImage:I,border:I,borderBlock:I,borderBlockEnd:I,borderBlockStart:I,borderBottom:I,borderBottomColor:I,borderColor:I,borderInline:I,borderInlineEnd:I,borderInlineStart:I,borderLeft:I,borderLeftColor:I,borderRight:I,borderRightColor:I,borderTop:I,borderTopColor:I,caretColor:I,color:I,columnRuleColor:I,fill:I,outline:I,outlineColor:I,stroke:I,textDecorationColor:I,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:E,minBlockSize:E,maxBlockSize:E,inlineSize:E,minInlineSize:E,maxInlineSize:E,width:E,minWidth:E,maxWidth:E,height:E,minHeight:E,maxHeight:E,flexBasis:E,gridTemplateColumns:E,gridTemplateRows:E,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},C=(e,t)=>{for(var r=JSON.stringify(t),n=r.length,o=9;n;)o=Math.imul(o^r.charCodeAt(--n),9**9);return e+(o^o>>>9).toString(36).slice(-5)},z=e=>e?"-"+e:"",R=class{constructor(e,t,r="",n=""){this.value=e,this.token=t,this.scale=r,this.prefix=n}get computedValue(){return"var("+this.variable+")"}get variable(){return"-"+z(this.prefix)+z(this.scale)+"-"+this.token}toString(){return this.computedValue}},W=class extends Array{toString(){return this.join("")}get hasChanged(){const e=String(this);return()=>e!==String(this)}},T=W;W.prototype[n]=W.prototype.toString;var A=e=>{let t,r,n,o,a,l=!1;const s="append"===e.insertionMethod?"append":"prepend";return e=>{"object"==typeof document&&(t||(t=document.head||document.documentElement),r||(r=document.getElementById("stitches")||i(document.createElement("style"),{id:"stitches",textContent:e})),n||(n=r.firstChild||new Text,l=!n.data),o||(o=r.insertBefore(new Text,n)),r.isConnected||t[s](r),o.data=e,!l&&e&&(clearTimeout(a),a=setTimeout((()=>{n.remove(),l=!0}),250)))}},L=e=>{e="object"==typeof e&&e||{};const t={};t.media=i({initial:"all"},e.media),t.theme="object"==typeof e.theme&&e.theme||{},t.themeMap="object"==typeof e.themeMap&&e.themeMap||P,t.utils="object"==typeof e.utils&&e.utils||{};const r=new Set(e.passthru?[...e.passthru,"as","className"]:["as","className"]),n=t.prefix=e.prefix||"sx";t.insertionMethod=e.insertionMethod||"prepend";const l=("function"==typeof t.insertionMethod?t.insertionMethod:A)(t),s="03kze",d=O(t),u=new B,p=new B,g=new B,h=new B,m=new B([u,p,g,h]);let b="";const y=()=>{const e=f(m).join("");b!==e&&l(b=e)},v=(e,t)=>{t="object"==typeof e&&e||Object(t);const r="root"!==(e="string"==typeof e?e:""),o=(r?".":":root,.")+(e=r&&e||C(n,t)),i=c(a(null),"className",{className:e,selector:o}),l={},u=l[o]={};for(const s in t){i[s]=a(null);for(const e in t[s]){let r=String(t[s][e]);r.includes("$")&&(r=r.replace(/\$([$\w-]+)/g,((e,t)=>t.includes("$")?e:"$"+s+e)));const o=i[s][e]=new R(r,e,s,"sx"===n?"":n);u[o.variable]=o.value}}const f=e===n+s?"":d(l);return c(i,"className",{get className(){const{hasChanged:t}=p;return p.add(f),t()&&y(),e},selector:o})},S=(e,t="")=>{const r=new B,n=new B;for(const a in e)if(e[a]!==Object(e[a])||x(e[a]).length){const t=d({[a]:e[a]});("@import"===a?r:n).add(t)}const o=c(a(null),"name",{name:t}),i=c((()=>{let e=u.hasChanged,t=g.hasChanged;return r.forEach((e=>{u.add(e)})),n.forEach((e=>{g.add(e)})),(e()||t())&&y(),o}),"name",{get name(){return String(i())}});return i},k=e=>{const t=new B,r=new T,o=new B,i=new B([t,r,o]);let{variants:l,compoundVariants:c,defaultVariants:u,...p}=e;u=Object(u);const f=C(n,e),g="."+f,m=f===n+s?"":d({[g]:p});h.add(i);const b=a(null),y=[],v=[];for(const n in l)for(const e in l[n]){const t=l[n][e];v.push({[n]:e,css:t})}v.push(...c||[]);for(const n in v){const{css:e,...t}=v[n],o=x(t),i=o.length;for(const r of o)b[r]=b[r]||a(null),b[r][t[r]]=!0;const l=(n,a)=>{n={...n};for(const e in a)void 0!==n[e]||Object(b[e])[n[e]]||(n[e]=a[e]);const l=new Set;if(o.length&&o.every((e=>{const r=n[e],o=String(t[e]);if(o===String(r))return!0;if(r===Object(r))for(const t in r)if(o==String(r[t])&&64===t.charCodeAt(0))return l.add(t),!0}))){let n=Object(e);for(const e of l)n={[e]:n};const a=f+C("",n)+"--"+(1===i?o[0]+"-"+t[o[0]]:"c"+i),s=d({["."+a]:n});return(r[i-1]||(r[i-1]=new B)).add(s),a}};y.push(l)}return{apply(e,n,o){const a=t.hasChanged,l=r.hasChanged;if(t.add(m),e){n.add(f);for(const t of y){const r=t(e,o);r&&n.add(r)}}if(a()||l())return h.add(i),!0},inline(e,t){const r=C("-",e),n=f==="-"+r?"":d({[g+r]:e});t.add(f+r);const{hasChanged:i}=o;return n&&o.add(n),i()},className:f,defaultVariants:u,selector:g,variantProps:b}},w=v("root",t.theme),j=c({css:(...e)=>{let t,n=[],l=a(null);for(const r of e)if(r===Object(r))if(o in r)for(const e of r[o])n.push(e),i(l,e.defaultVariants);else n.push(t=k(r)),i(l,t.defaultVariants);return t||n.push(t=k({})),c((e=>{const{css:i,...s}=Object(e),d=new Set;let u,p=!1;for(const t of n)p=t.apply(s,d,l)||p;i===Object(i)&&(u=t.inline(i,d)),(p||u)&&y();for(const n in t.variantProps)r.has(n)||delete s[n];void 0!==s.className&&String(s.className).split(/\s+/).forEach(d.add,d);const g=f(d);return s.className=g.join(" "),c(a(null),"className",{get[o](){return n},className:s.className,props:s,selector:t.selector})}),"className",{get[o](){return n},get className(){return t.apply()&&y(),t.className},selector:t.selector})},config:t,global:S,keyframes:e=>{const t=C(n,e);return S({["@keyframes "+t]:e},t)},prefix:n,reset:()=>(u.clear(),p.clear(),g.clear(),h.clear(),w.className,j),theme:i(v,w),get cssText(){return b},getCssString:()=>b},"cssText",{});return j},N=Symbol.for("react.element"),$=Symbol.for("react.forward_ref"),_=e=>{const t=L(e);return i(t,{styled:(...e)=>{const r=e.map((e=>Object(e).type?e.type:e)).find((e=>e))||"span",n=t.css(...e.filter((e=>o in Object(e)||e&&"object"==typeof e&&!e.$$typeof)));return Object.setPrototypeOf({render(e,t){const{props:{as:o=r,...i},...a}=n(e);return{constructor:void 0,$$typeof:N,props:i,ref:t,type:o,__v:0}},$$typeof:$,[o]:n[o],[Symbol.toPrimitive]:()=>n.selector,toString:()=>n.selector,get className(){return n.className},get selector(){return n.selector},type:r},Object(r))}})}},3367:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var o=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=o},7845:function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var n,o=(n=r(7294))&&n.__esModule?n:{default:n},i=r(3367);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,o=void 0!==n&&n,i=e.hasQuery,a=void 0!==i&&i;return r||o&&a}},7947:function(e,t,r){"use strict";var n=r(9713);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.__esModule=!0,t.defaultHead=p,t.default=void 0;var i,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=n?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(7294)),l=(i=r(617))&&i.__esModule?i:{default:i},s=r(3367),c=r(4287),d=r(7845);function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var g=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var r=a.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(f,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(o){var i=!0,a=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){a=!0;var l=o.key.slice(o.key.indexOf("$")+1);e.has(l)?i=!1:e.add(l)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var s=0,c=g.length;s<c;s++){var d=g[s];if(o.props.hasOwnProperty(d))if("charSet"===d)r.has(d)?i=!1:r.add(d);else{var u=o.props[d],p=n[d]||new Set;"name"===d&&a||!p.has(u)?(p.add(u),n[d]=p):i=!1}}}return i}}()).reverse().map((function(e,r){var i=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var l=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return l["data-href"]=l.href,l.href=void 0,l["data-optimized-fonts"]=!0,a.default.cloneElement(e,l)}return a.default.cloneElement(e,{key:i})}))}function m(e){var t=e.children,r=(0,a.useContext)(s.AmpStateContext),n=(0,a.useContext)(c.HeadManagerContext);return a.default.createElement(l.default,{reduceComponentsToState:h,headManager:n,inAmpMode:(0,d.isInAmpMode)(r)},t)}m.rewind=function(){};var b=m;t.default=b},617:function(e,t,r){"use strict";var n=r(319),o=r(4575),i=r(3913),a=(r(1506),r(2205)),l=r(8585),s=r(9754);function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=s(e);if(t){var o=s(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return l(this,r)}}t.__esModule=!0,t.default=void 0;var d=r(7294),u=function(e){a(r,e);var t=c(r);function r(e){var i;return o(this,r),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(n(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(d.Component);t.default=u},8309:function(){},9008:function(e,t,r){e.exports=r(7947)},2006:function(e,t,r){"use strict";var n=r(7294),o=r(5697),i=r.n(o);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=(0,n.forwardRef)((function(e,t){var r=e.color,o=void 0===r?"currentColor":r,i=e.size,s=void 0===i?24:i,c=l(e,["color","size"]);return n.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),n.createElement("polyline",{points:"16 18 22 12 16 6"}),n.createElement("polyline",{points:"8 6 2 12 8 18"}))}));s.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},s.displayName="Code",t.Z=s},6702:function(e,t,r){"use strict";var n=r(7294),o=r(5697),i=r.n(o);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=(0,n.forwardRef)((function(e,t){var r=e.color,o=void 0===r?"currentColor":r,i=e.size,s=void 0===i?24:i,c=l(e,["color","size"]);return n.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),n.createElement("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}))}));s.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},s.displayName="GitHub",t.Z=s},7811:function(e,t,r){"use strict";var n=r(7294),o=r(5697),i=r.n(o);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=(0,n.forwardRef)((function(e,t){var r=e.color,o=void 0===r?"currentColor":r,i=e.size,s=void 0===i?24:i,c=l(e,["color","size"]);return n.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),n.createElement("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"}))}));s.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},s.displayName="Heart",t.Z=s},9318:function(e,t,r){"use strict";var n=r(7294),o=r(5697),i=r.n(o);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=(0,n.forwardRef)((function(e,t){var r=e.color,o=void 0===r?"currentColor":r,i=e.size,s=void 0===i?24:i,c=l(e,["color","size"]);return n.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),n.createElement("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),n.createElement("rect",{x:"2",y:"9",width:"4",height:"12"}),n.createElement("circle",{cx:"4",cy:"4",r:"2"}))}));s.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},s.displayName="Linkedin",t.Z=s},408:function(e,t,r){"use strict";var n=r(7294),o=r(5697),i=r.n(o);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=(0,n.forwardRef)((function(e,t){var r=e.color,o=void 0===r?"currentColor":r,i=e.size,s=void 0===i?24:i,c=l(e,["color","size"]);return n.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),n.createElement("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),n.createElement("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),n.createElement("line",{x1:"3",y1:"18",x2:"21",y2:"18"}))}));s.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},s.displayName="Menu",t.Z=s},706:function(e,t,r){"use strict";var n=r(7294),o=r(5697),i=r.n(o);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=(0,n.forwardRef)((function(e,t){var r=e.color,o=void 0===r?"currentColor":r,i=e.size,s=void 0===i?24:i,c=l(e,["color","size"]);return n.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),n.createElement("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"}))}));s.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},s.displayName="Twitter",t.Z=s}}]);