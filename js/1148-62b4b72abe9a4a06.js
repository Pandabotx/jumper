!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="a0ee349b-80fb-4843-99e7-9411c686d1a3",e._sentryDebugIdIdentifier="sentry-dbid-a0ee349b-80fb-4843-99e7-9411c686d1a3")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1148],{15667:function(e,t,n){"use strict";n.d(t,{Z:function(){return I}});var r=n(23950),o=n(22988),i=n(2265),a=n(44839),s=n(66492),c=n(48669),u=n(78049),l=n(48024),d=n(4556),p=n(69281),f=n(68571),b=n(12272),h=n(90468),m=n(8550);let y=i.createContext(void 0);var g=n(57437);let v=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],x=e=>{let{color:t,disableElevation:n,fullWidth:r,size:i,variant:a,classes:s}=e,u={root:["root",a,"".concat(a).concat((0,b.Z)(t)),"size".concat((0,b.Z)(i)),"".concat(a,"Size").concat((0,b.Z)(i)),"color".concat((0,b.Z)(t)),n&&"disableElevation",r&&"fullWidth"],label:["label"],startIcon:["icon","startIcon","iconSize".concat((0,b.Z)(i))],endIcon:["icon","endIcon","iconSize".concat((0,b.Z)(i))]},l=(0,c.Z)(u,h.F,s);return(0,o.Z)({},s,l)},w=e=>(0,o.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),z=(0,l.ZP)(f.Z,{shouldForwardProp:e=>(0,d.Z)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],t["".concat(n.variant).concat((0,b.Z)(n.color))],t["size".concat((0,b.Z)(n.size))],t["".concat(n.variant,"Size").concat((0,b.Z)(n.size))],"inherit"===n.color&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth]}})(e=>{var t,n;let{theme:r,ownerState:i}=e,a="light"===r.palette.mode?r.palette.grey[300]:r.palette.grey[800],s="light"===r.palette.mode?r.palette.grey.A100:r.palette.grey[700];return(0,o.Z)({},r.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(r.vars||r).shape.borderRadius,transition:r.transitions.create(["background-color","box-shadow","border-color","color"],{duration:r.transitions.duration.short}),"&:hover":(0,o.Z)({textDecoration:"none",backgroundColor:r.vars?"rgba(".concat(r.vars.palette.text.primaryChannel," / ").concat(r.vars.palette.action.hoverOpacity,")"):(0,u.Fq)(r.palette.text.primary,r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===i.variant&&"inherit"!==i.color&&{backgroundColor:r.vars?"rgba(".concat(r.vars.palette[i.color].mainChannel," / ").concat(r.vars.palette.action.hoverOpacity,")"):(0,u.Fq)(r.palette[i.color].main,r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===i.variant&&"inherit"!==i.color&&{border:"1px solid ".concat((r.vars||r).palette[i.color].main),backgroundColor:r.vars?"rgba(".concat(r.vars.palette[i.color].mainChannel," / ").concat(r.vars.palette.action.hoverOpacity,")"):(0,u.Fq)(r.palette[i.color].main,r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===i.variant&&{backgroundColor:r.vars?r.vars.palette.Button.inheritContainedHoverBg:s,boxShadow:(r.vars||r).shadows[4],"@media (hover: none)":{boxShadow:(r.vars||r).shadows[2],backgroundColor:(r.vars||r).palette.grey[300]}},"contained"===i.variant&&"inherit"!==i.color&&{backgroundColor:(r.vars||r).palette[i.color].dark,"@media (hover: none)":{backgroundColor:(r.vars||r).palette[i.color].main}}),"&:active":(0,o.Z)({},"contained"===i.variant&&{boxShadow:(r.vars||r).shadows[8]}),["&.".concat(h.Z.focusVisible)]:(0,o.Z)({},"contained"===i.variant&&{boxShadow:(r.vars||r).shadows[6]}),["&.".concat(h.Z.disabled)]:(0,o.Z)({color:(r.vars||r).palette.action.disabled},"outlined"===i.variant&&{border:"1px solid ".concat((r.vars||r).palette.action.disabledBackground)},"contained"===i.variant&&{color:(r.vars||r).palette.action.disabled,boxShadow:(r.vars||r).shadows[0],backgroundColor:(r.vars||r).palette.action.disabledBackground})},"text"===i.variant&&{padding:"6px 8px"},"text"===i.variant&&"inherit"!==i.color&&{color:(r.vars||r).palette[i.color].main},"outlined"===i.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===i.variant&&"inherit"!==i.color&&{color:(r.vars||r).palette[i.color].main,border:r.vars?"1px solid rgba(".concat(r.vars.palette[i.color].mainChannel," / 0.5)"):"1px solid ".concat((0,u.Fq)(r.palette[i.color].main,.5))},"contained"===i.variant&&{color:r.vars?r.vars.palette.text.primary:null==(t=(n=r.palette).getContrastText)?void 0:t.call(n,r.palette.grey[300]),backgroundColor:r.vars?r.vars.palette.Button.inheritContainedBg:a,boxShadow:(r.vars||r).shadows[2]},"contained"===i.variant&&"inherit"!==i.color&&{color:(r.vars||r).palette[i.color].contrastText,backgroundColor:(r.vars||r).palette[i.color].main},"inherit"===i.color&&{color:"inherit",borderColor:"currentColor"},"small"===i.size&&"text"===i.variant&&{padding:"4px 5px",fontSize:r.typography.pxToRem(13)},"large"===i.size&&"text"===i.variant&&{padding:"8px 11px",fontSize:r.typography.pxToRem(15)},"small"===i.size&&"outlined"===i.variant&&{padding:"3px 9px",fontSize:r.typography.pxToRem(13)},"large"===i.size&&"outlined"===i.variant&&{padding:"7px 21px",fontSize:r.typography.pxToRem(15)},"small"===i.size&&"contained"===i.variant&&{padding:"4px 10px",fontSize:r.typography.pxToRem(13)},"large"===i.size&&"contained"===i.variant&&{padding:"8px 22px",fontSize:r.typography.pxToRem(15)},i.fullWidth&&{width:"100%"})},e=>{let{ownerState:t}=e;return t.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},["&.".concat(h.Z.focusVisible)]:{boxShadow:"none"},"&:active":{boxShadow:"none"},["&.".concat(h.Z.disabled)]:{boxShadow:"none"}}}),$=(0,l.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.startIcon,t["iconSize".concat((0,b.Z)(n.size))]]}})(e=>{let{ownerState:t}=e;return(0,o.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===t.size&&{marginLeft:-2},w(t))}),S=(0,l.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.endIcon,t["iconSize".concat((0,b.Z)(n.size))]]}})(e=>{let{ownerState:t}=e;return(0,o.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===t.size&&{marginRight:-2},w(t))});var I=i.forwardRef(function(e,t){let n=i.useContext(m.Z),c=i.useContext(y),u=(0,s.Z)(n,e),l=(0,p.Z)({props:u,name:"MuiButton"}),{children:d,color:f="primary",component:b="button",className:h,disabled:w=!1,disableElevation:I=!1,disableFocusRipple:E=!1,endIcon:A,focusVisibleClassName:P,fullWidth:C=!1,size:Z="medium",startIcon:M,type:O,variant:j="text"}=l,k=(0,r.Z)(l,v),B=(0,o.Z)({},l,{color:f,component:b,disabled:w,disableElevation:I,disableFocusRipple:E,fullWidth:C,size:Z,type:O,variant:j}),G=x(B),N=M&&(0,g.jsx)($,{className:G.startIcon,ownerState:B,children:M}),F=A&&(0,g.jsx)(S,{className:G.endIcon,ownerState:B,children:A});return(0,g.jsxs)(z,(0,o.Z)({ownerState:B,className:(0,a.Z)(n.className,G.root,h,c||""),component:b,disabled:w,focusRipple:!E,focusVisibleClassName:(0,a.Z)(G.focusVisible,P),ref:t,type:O},k,{classes:G,children:[N,d,F]}))})},90468:function(e,t,n){"use strict";n.d(t,{F:function(){return i}});var r=n(4272),o=n(78132);function i(e){return(0,o.ZP)("MuiButton",e)}let a=(0,r.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);t.Z=a},8550:function(e,t,n){"use strict";let r=n(2265).createContext({});t.Z=r},87949:function(e){e.exports={style:{fontFamily:"'__Urbanist_4806ca', '__Urbanist_Fallback_4806ca'",fontStyle:"normal"},className:"__className_4806ca"}},43197:function(e,t,n){"use strict";function r(e,t){let n=e.exec(t);return n?.groups}n.d(t,{Zw:function(){return r},cN:function(){return a},eL:function(){return o},lh:function(){return i}});let o=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,i=/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/,a=/^\(.+?\).*?$/},52186:function(e,t,n){"use strict";n.d(t,{CI:function(){return S},FM:function(){return b},Gy:function(){return z},KY:function(){return x},M4:function(){return d},MX:function(){return g},S4:function(){return v},SM:function(){return w},cO:function(){return s},dh:function(){return $},fM:function(){return a},fs:function(){return p},gr:function(){return l},hn:function(){return I},lC:function(){return h},mv:function(){return m},wM:function(){return E},wb:function(){return u},xB:function(){return c},xL:function(){return y},yP:function(){return f}});var r=n(20101),o=n(7508),i=n(48926);class a extends i.G{constructor({docsPath:e}){super("A constructor was not found on the ABI.\nMake sure you are using the correct ABI and that the constructor exists on it.",{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorNotFoundError"})}}class s extends i.G{constructor({docsPath:e}){super("Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.\nMake sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.",{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorParamsNotFoundError"})}}class c extends i.G{constructor({data:e,params:t,size:n}){super(`Data size of ${n} bytes is too small for given parameters.`,{metaMessages:[`Params: (${(0,r.h)(t,{includeName:!0})})`,`Data:   ${e} (${n} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e,this.params=t,this.size=n}}class u extends i.G{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}}class l extends i.G{constructor({expectedLength:e,givenLength:t,type:n}){super(`ABI encoding array length mismatch for type ${n}.
Expected length: ${e}
Given length: ${t}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}}class d extends i.G{constructor({expectedSize:e,value:t}){super(`Size of bytes "${t}" (bytes${(0,o.d)(t)}) does not match expected size (bytes${e}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}}class p extends i.G{constructor({expectedLength:e,givenLength:t}){super(`ABI encoding params/values length mismatch.
Expected length (params): ${e}
Given length (values): ${t}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}}class f extends i.G{constructor(e,{docsPath:t}){super(`Encoded error signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.
You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=e}}class b extends i.G{constructor({docsPath:e}){super("Cannot extract event signature from empty topics.",{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureEmptyTopicsError"})}}class h extends i.G{constructor(e,{docsPath:t}){super(`Encoded event signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.
You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureNotFoundError"})}}class m extends i.G{constructor(e,{docsPath:t}={}){super(`Event ${e?`"${e}" `:""}not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventNotFoundError"})}}class y extends i.G{constructor(e,{docsPath:t}={}){super(`Function ${e?`"${e}" `:""}not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionNotFoundError"})}}class g extends i.G{constructor(e,{docsPath:t}){super(`Function "${e}" does not contain any \`outputs\` on ABI.
Cannot decode function result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the function exists on it.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionOutputsNotFoundError"})}}class v extends i.G{constructor(e,t){super("Found ambiguous types in overloaded ABI items.",{metaMessages:[`\`${e.type}\` in \`${(0,r.t)(e.abiItem)}\`, and`,`\`${t.type}\` in \`${(0,r.t)(t.abiItem)}\``,"","These types encode differently and cannot be distinguished at runtime.","Remove one of the ambiguous items in the ABI."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiItemAmbiguityError"})}}class x extends i.G{constructor({expectedSize:e,givenSize:t}){super(`Expected bytes${e}, got bytes${t}.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BytesSizeMismatchError"})}}class w extends i.G{constructor({abiItem:e,data:t,params:n,size:o}){super(`Data size of ${o} bytes is too small for non-indexed event parameters.`,{metaMessages:[`Params: (${(0,r.h)(n,{includeName:!0})})`,`Data:   ${t} (${o} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogDataMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e,this.data=t,this.params=n,this.size=o}}class z extends i.G{constructor({abiItem:e,param:t}){super(`Expected a topic for indexed event parameter${t.name?` "${t.name}"`:""} on event "${(0,r.t)(e,{includeName:!0})}".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogTopicsMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e}}class $ extends i.G{constructor(e,{docsPath:t}){super(`Type "${e}" is not a valid encoding type.
Please provide a valid ABI type.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}}class S extends i.G{constructor(e,{docsPath:t}){super(`Type "${e}" is not a valid decoding type.
Please provide a valid ABI type.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}}class I extends i.G{constructor(e){super(`Value "${e}" is not a valid array.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}}class E extends i.G{constructor(e){super(`"${e}" is not a valid definition type.
Valid types: "function", "event", "error"`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidDefinitionTypeError"})}}},39480:function(e,t,n){"use strict";n.d(t,{E:function(){return p},S:function(){return b}});var r=n(52186),o=n(51359),i=n(48926),a=n(64113),s=n(53932),c=n(88202),u=n(7508),l=n(49014),d=n(95046);function p(e,t){if(e.length!==t.length)throw new r.fs({expectedLength:e.length,givenLength:t.length});let n=f(function({params:e,values:t}){let n=[];for(let p=0;p<e.length;p++)n.push(function e({param:t,value:n}){let p=b(t.type);if(p){let[o,i]=p;return function(t,{length:n,param:o}){let i=null===n;if(!Array.isArray(t))throw new r.hn(t);if(!i&&t.length!==n)throw new r.gr({expectedLength:n,givenLength:t.length,type:`${o.type}[${n}]`});let a=!1,c=[];for(let n=0;n<t.length;n++){let r=e({param:o,value:t[n]});r.dynamic&&(a=!0),c.push(r)}if(i||a){let e=f(c);if(i){let t=(0,d.eC)(c.length,{size:32});return{dynamic:!0,encoded:c.length>0?(0,s.zo)([t,e]):t}}if(a)return{dynamic:!0,encoded:e}}return{dynamic:!1,encoded:(0,s.zo)(c.map(({encoded:e})=>e))}}(n,{length:o,param:{...t,type:i}})}if("tuple"===t.type)return function(t,{param:n}){let r=!1,o=[];for(let i=0;i<n.components.length;i++){let a=n.components[i],s=Array.isArray(t)?i:a.name,c=e({param:a,value:t[s]});o.push(c),c.dynamic&&(r=!0)}return{dynamic:r,encoded:r?f(o):(0,s.zo)(o.map(({encoded:e})=>e))}}(n,{param:t});if("address"===t.type)return function(e){if(!(0,a.U)(e))throw new o.b({address:e});return{dynamic:!1,encoded:(0,c.gc)(e.toLowerCase())}}(n);if("bool"===t.type)return function(e){if("boolean"!=typeof e)throw new i.G(`Invalid boolean value: "${e}" (type: ${typeof e}). Expected: \`true\` or \`false\`.`);return{dynamic:!1,encoded:(0,c.gc)((0,d.C4)(e))}}(n);if(t.type.startsWith("uint")||t.type.startsWith("int"))return function(e,{signed:t}){return{dynamic:!1,encoded:(0,d.eC)(e,{size:32,signed:t})}}(n,{signed:t.type.startsWith("int")});if(t.type.startsWith("bytes"))return function(e,{param:t}){let[,n]=t.type.split("bytes"),o=(0,u.d)(e);if(!n){let t=e;return o%32!=0&&(t=(0,c.gc)(t,{dir:"right",size:32*Math.ceil((e.length-2)/2/32)})),{dynamic:!0,encoded:(0,s.zo)([(0,c.gc)((0,d.eC)(o,{size:32})),t])}}if(o!==Number.parseInt(n))throw new r.M4({expectedSize:Number.parseInt(n),value:e});return{dynamic:!1,encoded:(0,c.gc)(e,{dir:"right"})}}(n,{param:t});if("string"===t.type)return function(e){let t=(0,d.$G)(e),n=Math.ceil((0,u.d)(t)/32),r=[];for(let e=0;e<n;e++)r.push((0,c.gc)((0,l.tP)(t,32*e,(e+1)*32),{dir:"right"}));return{dynamic:!0,encoded:(0,s.zo)([(0,c.gc)((0,d.eC)((0,u.d)(t),{size:32})),...r])}}(n);throw new r.dh(t.type,{docsPath:"/docs/contract/encodeAbiParameters"})}({param:e[p],value:t[p]}));return n}({params:e,values:t}));return 0===n.length?"0x":n}function f(e){let t=0;for(let n=0;n<e.length;n++){let{dynamic:r,encoded:o}=e[n];r?t+=32:t+=(0,u.d)(o)}let n=[],r=[],o=0;for(let i=0;i<e.length;i++){let{dynamic:a,encoded:s}=e[i];a?(n.push((0,d.eC)(t+o,{size:32})),r.push(s),o+=(0,u.d)(s)):n.push(s)}return(0,s.zo)([...n,...r])}function b(e){let t=e.match(/^(.*)\[(\d+)?\]$/);return t?[t[2]?Number(t[2]):null,t[1]]:void 0}},31006:function(e,t,n){"use strict";n.d(t,{R:function(){return l}});var r=n(53932),o=n(39480),i=n(52186),a=n(87522),s=n(20101),c=n(18748);let u="/docs/contract/encodeFunctionData";function l(e){let{args:t}=e,{abi:n,functionName:l}=1===e.abi.length&&e.functionName?.startsWith("0x")?e:function(e){let{abi:t,args:n,functionName:r}=e,o=t[0];if(r){let e=(0,c.mE)({abi:t,args:n,name:r});if(!e)throw new i.xL(r,{docsPath:u});o=e}if("function"!==o.type)throw new i.xL(void 0,{docsPath:u});return{abi:[o],functionName:(0,a.C)((0,s.t)(o))}}(e),d=n[0],p="inputs"in d&&d.inputs?(0,o.E)(d.inputs,t??[]):void 0;return(0,r.SM)([l,p??"0x"])}},20101:function(e,t,n){"use strict";n.d(t,{h:function(){return i},t:function(){return o}});var r=n(52186);function o(e,{includeName:t=!1}={}){if("function"!==e.type&&"event"!==e.type&&"error"!==e.type)throw new r.wM(e.type);return`${e.name}(${i(e.inputs,{includeName:t})})`}function i(e,{includeName:t=!1}={}){return e?e.map(e=>(function(e,{includeName:t}){return e.type.startsWith("tuple")?`(${i(e.components,{includeName:t})})${e.type.slice(5)}`:e.type+(t&&e.name?` ${e.name}`:"")})(e,{includeName:t})).join(t?", ":","):""}},18748:function(e,t,n){"use strict";n.d(t,{mE:function(){return c}});var r=n(52186),o=n(40369),i=n(64113),a=n(53263),s=n(87522);function c(e){let t;let{abi:n,args:c=[],name:u}=e,l=(0,o.v)(u,{strict:!1}),d=n.filter(e=>l?"function"===e.type?(0,s.C)(e)===u:"event"===e.type&&(0,a.n)(e)===u:"name"in e&&e.name===u);if(0!==d.length){if(1===d.length)return d[0];for(let e of d)if("inputs"in e){if(!c||0===c.length){if(!e.inputs||0===e.inputs.length)return e;continue}if(e.inputs&&0!==e.inputs.length&&e.inputs.length===c.length&&c.every((t,n)=>{let r="inputs"in e&&e.inputs[n];return!!r&&function e(t,n){let r=typeof t,o=n.type;switch(o){case"address":return(0,i.U)(t,{strict:!1});case"bool":return"boolean"===r;case"function":case"string":return"string"===r;default:if("tuple"===o&&"components"in n)return Object.values(n.components).every((n,r)=>e(Object.values(t)[r],n));if(/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(o))return"number"===r||"bigint"===r;if(/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(o))return"string"===r||t instanceof Uint8Array;if(/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(o))return Array.isArray(t)&&t.every(t=>e(t,{...n,type:o.replace(/(\[[0-9]{0,}\])$/,"")}));return!1}}(t,r)})){if(t&&"inputs"in t&&t.inputs){let n=function e(t,n,r){for(let o in t){let a=t[o],s=n[o];if("tuple"===a.type&&"tuple"===s.type&&"components"in a&&"components"in s)return e(a.components,s.components,r[o]);let c=[a.type,s.type];if(c.includes("address")&&c.includes("bytes20")||(c.includes("address")&&c.includes("string")||c.includes("address")&&c.includes("bytes"))&&(0,i.U)(r[o],{strict:!1}))return c}}(e.inputs,t.inputs,c);if(n)throw new r.S4({abiItem:e,type:n[0]},{abiItem:t,type:n[1]})}t=e}}return t||d[0]}}},53932:function(e,t,n){"use strict";function r(e){return"string"==typeof e[0]?o(e):function(e){let t=0;for(let n of e)t+=n.length;let n=new Uint8Array(t),r=0;for(let t of e)n.set(t,r),r+=t.length;return n}(e)}function o(e){return`0x${e.reduce((e,t)=>e+t.replace("0x",""),"")}`}n.d(t,{SM:function(){return o},zo:function(){return r}})},49014:function(e,t,n){"use strict";n.d(t,{T4:function(){return u},p5:function(){return l},tP:function(){return a}});var r=n(75057),o=n(40369),i=n(7508);function a(e,t,n,{strict:r}={}){return(0,o.v)(e,{strict:!1})?l(e,t,n,{strict:r}):u(e,t,n,{strict:r})}function s(e,t){if("number"==typeof t&&t>0&&t>(0,i.d)(e)-1)throw new r.mV({offset:t,position:"start",size:(0,i.d)(e)})}function c(e,t,n){if("number"==typeof t&&"number"==typeof n&&(0,i.d)(e)!==n-t)throw new r.mV({offset:n,position:"end",size:(0,i.d)(e)})}function u(e,t,n,{strict:r}={}){s(e,t);let o=e.slice(t,n);return r&&c(o,t,n),o}function l(e,t,n,{strict:r}={}){s(e,t);let o=`0x${e.replace("0x","").slice((t??0)*2,(n??e.length)*2)}`;return r&&c(o,t,n),o}},53263:function(e,t,n){"use strict";n.d(t,{n:function(){return r}});let r=n(99530).r},87522:function(e,t,n){"use strict";n.d(t,{C:function(){return i}});var r=n(49014),o=n(99530);let i=e=>(0,r.tP)((0,o.r)(e),0,4)},99530:function(e,t,n){"use strict";n.d(t,{r:function(){return d}});var r=n(82361),o=n(45626);let i=e=>(0,o.w)((0,r.O0)(e));var a=n(43197);let s=/^tuple(?<array>(\[(\d*)\])*)$/;function c(e){let t="",n=e.length;for(let r=0;r<n;r++)t+=function e(t){let n=t.type;if(s.test(t.type)&&"components"in t){n="(";let r=t.components.length;for(let o=0;o<r;o++)n+=e(t.components[o]),o<r-1&&(n+=", ");let o=(0,a.Zw)(s,t.type);return n+=`)${o?.array??""}`,e({...t,type:n})}return("indexed"in t&&t.indexed&&(n=`${n} indexed`),t.name)?`${n} ${t.name}`:n}(e[r]),r!==n-1&&(t+=", ");return t}var u=n(48926);let l=e=>(function(e){let t=!0,n="",r=0,o="",i=!1;for(let a=0;a<e.length;a++){let s=e[a];if(["(",")",","].includes(s)&&(t=!0),"("===s&&r++,")"===s&&r--,t){if(0===r){if(" "===s&&["event","function",""].includes(o))o="";else if(o+=s,")"===s){i=!0;break}continue}if(" "===s){","!==e[a-1]&&","!==n&&",("!==n&&(n="",t=!1);continue}o+=s,n+=s}}if(!i)throw new u.G("Unable to normalize signature.");return o})("string"==typeof e?e:"function"===e.type?`function ${e.name}(${c(e.inputs)})${e.stateMutability&&"nonpayable"!==e.stateMutability?` ${e.stateMutability}`:""}${e.outputs.length?` returns (${c(e.outputs)})`:""}`:"event"===e.type?`event ${e.name}(${c(e.inputs)})`:"error"===e.type?`error ${e.name}(${c(e.inputs)})`:"constructor"===e.type?`constructor(${c(e.inputs)})${"payable"===e.stateMutability?" payable":""}`:"fallback"===e.type?"fallback()":"receive() external payable");function d(e){return i(l(e))}}}]);