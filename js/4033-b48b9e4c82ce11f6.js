!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="2b9489ed-63bf-4b8c-a93f-0c3e2909b357",e._sentryDebugIdIdentifier="sentry-dbid-2b9489ed-63bf-4b8c-a93f-0c3e2909b357")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4033],{60376:function(e,t,a){var i={"./bn/language.json":[48296],"./bn/translation.json":[70653,653],"./en/language.json":[47295],"./en/translation.json":[67163,7163],"./es/language.json":[69717],"./es/translation.json":[68367,8367],"./fr/language.json":[37271],"./fr/translation.json":[9055,9055],"./hi/language.json":[41451,1451],"./hi/translation.json":[60593,593],"./id/language.json":[15522],"./id/translation.json":[70952,952],"./it/language.json":[2112],"./it/translation.json":[90737,737],"./ja/language.json":[69606],"./ja/translation.json":[24386,4386],"./ko/language.json":[95514],"./ko/translation.json":[22787,2787],"./pt/language.json":[39769],"./pt/translation.json":[40084,84],"./th/language.json":[78683],"./th/translation.json":[44224,4224],"./tr/language.json":[17414],"./tr/translation.json":[10078,78],"./uk/language.json":[47712],"./uk/translation.json":[31652,1652],"./vi/language.json":[92616],"./vi/translation.json":[44641,4641],"./zh/language.json":[26586],"./zh/translation.json":[14514,4514]};function n(e){if(!a.o(i,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=i[e],n=t[0];return Promise.all(t.slice(1).map(a.e)).then(function(){return a.t(n,19)})}n.keys=function(){return Object.keys(i)},n.id=60376,e.exports=n},12540:function(e,t,a){"use strict";a.r(t),a.d(t,{Container:function(){return i}});let i=(0,a(48024).ZP)("div",{shouldForwardProp:e=>"isArticlePage"!==e&&"fixedPosition"!==e})(e=>{let{theme:t,fixedPosition:a,isArticlePage:i}=e;return{display:"none",[t.breakpoints.up("sm")]:{...a?{position:"fixed",display:"block",bottom:t.spacing(2.75),right:t.spacing(3)}:{position:"static",display:"flex",justifyContent:"flex-end",marginTop:i?t.spacing(-6):t.spacing(6),marginBottom:t.spacing(2.75),marginRight:t.spacing(3),[t.breakpoints.up("sm")]:{marginTop:i?t.spacing(-6):t.spacing(8)}},zIndex:1,".link-lifi":{fontWeight:"700",color:"light"===t.palette.mode?t.palette.accent1.main:t.palette.accent1Alt.main,textDecoration:"none"}}}})},12803:function(e,t,a){"use strict";a.r(t),a.d(t,{PoweredBy:function(){return y}});var i=a(57437),n=a(85073),r=a(14582),l=a(92281),o=a(55293),g=a(3823),s=a(94317),p=a(70315),d=a(2859),f=a(22960),h=a(80511),F=a(16463),m=a(338),c=a(12540);let u=(0,s.u)(l.sf,{utm_campaign:"jumper_to_lifi",utm_medium:"powered_by"}),y=e=>{let{styles:t}=e,a=(0,f.Z)(),{trackPageload:s,trackEvent:y}=(0,o.R)(),S=(0,F.usePathname)(),k=null==S?void 0:S.substring(0,S.lastIndexOf("/")),B=(0,p.Q)("".concat("https://jumper.exchange","/").concat(S)),x=k===l.CA,b=Object.values(n.H).some(e=>null==k?void 0:k.includes("/".concat(e)));return(0,i.jsx)(c.Container,{fixedPosition:"/"===k||""===k||b||x,sx:t,isArticlePage:B,children:(0,i.jsx)(h.Z,{variant:"lifiBodySmall",sx:{zIndex:1,color:"dark"===a.palette.mode?a.palette.alphaLight500.main:a.palette.alphaDark500.main},children:(0,i.jsx)(m.c,{as:"div",i18nKey:"navbar.poweredByLifi",components:[(0,i.jsx)("span",{style:{userSelect:"none"}}),(0,i.jsx)("a",{className:"link-lifi",onClick:()=>{s({source:r.FS.PoweredBy,destination:"lifi-website",url:u,pageload:!0,disableTrackingTool:[g.H.ARCx,g.H.Cookie3]}),y({category:r.FS.PoweredBy,action:r.Mr.PoweredBy,label:"click_lifi_in_powered_by",disableTrackingTool:[g.H.ARCx,g.H.Cookie3]}),(0,d.Y)(u)},href:u,target:"_blank",rel:"noreferrer"})]})})})}},10226:function(e,t,a){"use strict";a.d(t,{E:function(){return l}});var i=a(16463),n=a(43767);let r=()=>{let{data:e,isLoading:t,error:a}=(0,n.a)({queryKey:["tools"],queryFn:async()=>{let e=await fetch("".concat("https://li.quest/v1","/tools"));return await e.json()}});return{bridgesKeys:(null==e?void 0:e.bridges)?Object.values(null==e?void 0:e.bridges).map(e=>e.key):[],exchangesKeys:(null==e?void 0:e.exchanges)?Object.values(null==e?void 0:e.exchanges).map(e=>e.key):[],isLoading:t,error:a}},l=()=>{let e=(0,i.usePathname)(),t=!1,a=!1,n=!1,l="",{bridgesKeys:o,exchangesKeys:g}=r();if(null==e?void 0:e.includes("memecoins"))return{hasTheme:t=!0,isBridgeFiltered:a,isDexFiltered:n,partnerName:l="memecoins"};let s=e&&e.split("/"),p=s&&s[s.length-2].toLowerCase();return p&&(o&&o.includes(p)?(t=!0,a=!0,l=p):g&&g.includes(p)&&(t=!0,n=!0,l=p)),{hasTheme:t,isBridgeFiltered:a,isDexFiltered:n,partnerName:l}}},9828:function(e,t,a){"use strict";a.d(t,{ThemeProvider:function(){return f}});var i=a(57437),n=a(75716),r=a(47028),l=a(20124),o=a(81915),g=a(2265),s=a(8358),p=a(21949);let d=()=>{let e=(0,n.F)(e=>e.themeMode),t=(0,r.Z)("(prefers-color-scheme: dark)");return"dark"===e||"light"!==e&&t},f=e=>{let{children:t,theme:a}=e,[,r]=(0,s.fP)(["theme"]),f=(0,n.F)(e=>e.themeMode),[h,F]=(0,g.useState)(a),m=d();(0,g.useEffect)(()=>{void 0===h&&F(m?"dark":"light")},[h,m]),(0,g.useEffect)(()=>{"auto"===f?(F(m?"dark":"light"),r("theme",m?"dark":"light",{path:"/",sameSite:!0})):(r("theme","dark"===f?"dark":"light",{path:"/",sameSite:!0}),F("dark"===f?"dark":"light"))},[f,m,r]);let c="dark"===h?p.$:p.W;return(0,i.jsxs)(o.Z,{theme:c,children:[(0,i.jsx)(l.ZP,{}),t]})}},13188:function(e,t,a){"use strict";a.d(t,{default:function(){return d}});var i=a(57437),n=a(46027),r=a(53882);a(92716);var l=a(81917),o=a(64312),g=a(42386),s={locales:["bn","en","es","fr","id","it","ja","ko","pt","th","tr","uk","vi","zh"],defaultLocale:"en"};async function p(e,t,i,r){return(i=i||(0,n.Fs)()).use(g.D),r||i.use((0,o.Z)((e,t)=>a(60376)("./".concat(e,"/").concat(t,".json")))),await i.init({lng:e,resources:r,fallbackLng:s.defaultLocale,react:{useSuspense:!1},supportedLngs:s.locales,returnEmptyString:!1,partialBundledLanguages:!0,defaultNS:t[0],fallbackNS:t[0],ns:t,preload:r?[]:s.locales}),{i18n:i,resources:i.services.resourceStore.data,t:i.t}}function d(e){let{children:t,locale:a,namespaces:o,resources:g}=e,s=(0,n.Fs)();return p(a||l.A9,o,s,g),(0,i.jsx)(r.a3,{i18n:s,children:t})}},21949:function(e,t,a){"use strict";a.d(t,{$:function(){return h},W:function(){return f}});var i=a(68285),n=a(56529),r=a(7343),l=a.n(r),o=a(87949),g=a.n(o);let s=(0,i.Z)(),p=(0,i.Z)({shape:{borderRadius:12,borderRadiusSecondary:8},components:{MuiScopedCssBaseline:{styleOverrides:{root:{fontFamily:"".concat(l().style.fontFamily,", Arial, Noto Sans, BlinkMacSystemFont, Segoe UI, Helvetica Neue, sans-serif")}}},MuiSnackbar:{styleOverrides:{root:()=>({top:80,[s.breakpoints.up("sm")]:{top:80}})}},MuiTooltip:{styleOverrides:{tooltip:e=>{let{theme:t}=e;return{backgroundColor:"rgb(0 0 0 / 64%)",backdropFilter:"blur(3px)",fontSize:"0.75rem",padding:t.spacing(1,1.5)}},arrow:{color:"rgb(0 0 0 / 64%)"}}},MuiAvatar:{styleOverrides:{img:{objectFit:"contain"}}},MuiCssBaseline:{styleOverrides:{"@supports":{fontVariationSettings:"normal"}}},MuiButton:{defaultProps:{size:"large"},styleOverrides:{root:{borderRadius:24,textTransform:"none"},sizeSmall:{height:32},sizeMedium:{height:40},sizeLarge:{height:48}}},MuiTypography:{defaultProps:{variantMapping:{lifiHeaderDisplay:"p",lifiHeaderXLarge:"p",lifiHeaderLarge:"p",lifiHeaderMedium:"p",lifiHeaderSmall:"p",lifiHeaderXSmall:"p",lifiBodyXLargeStrong:"p",lifiBodyXLarge:"p",lifiBodyLargeStrong:"p",lifiBodyLarge:"p",lifiBodyMediumStrong:"p",lifiBodyMedium:"p",lifiBodySmallStrong:"p",lifiBodySmall:"p",lifiBodyXSmallStrong:"p",lifiBodyXSmall:"p",lifiBrandHeaderXLarge:"h1"}}}},palette:{grey:{100:"#F6F5FA",200:"#ECEBF0",300:"#DDDCE0",400:"#C9C8CC",500:"#9DA1A3",600:"#8A8D8F",700:"#70767A",800:"#4B4F52",900:"#000000"},success:{main:"#0AA65B",light:"#0AA65B",dark:"#0AA65B"},error:{main:"#E5452F",light:"#E5452F",dark:"#E5452F"},warning:{main:"#FFCC00",light:"#FFCC00",dark:"#EBC942"},info:{main:"#297EFF",light:"#297EFF",dark:"#297EFF"},white:{main:"#FFFFFF",light:"#FFFFFF",dark:"#FFFFFF"},black:{main:"#000000",light:"#000000",dark:"#000000"},alphaDark100:{main:"rgba(0, 0, 0, 0.04)"},alphaDark200:{main:"rgba(0, 0, 0, 0.08)"},alphaDark300:{main:"rgba(0, 0, 0, 0.12)"},alphaDark400:{main:"rgba(0, 0, 0, 0.16)"},alphaDark500:{main:"rgba(0, 0, 0, 0.24)"},alphaDark600:{main:"rgba(0, 0, 0, 0.32)"},alphaDark700:{main:"rgba(0, 0, 0, 0.48)"},alphaDark800:{main:"rgba(0, 0, 0, 0.64)"},alphaLight100:{main:"rgba(255, 255, 255, 0.04)"},alphaLight200:{main:"rgba(255, 255, 255, 0.08)"},alphaLight300:{main:"rgba(255, 255, 255, 0.12)"},alphaLight400:{main:"rgba(255, 255, 255, 0.16)"},alphaLight500:{main:"rgba(255, 255, 255, 0.24)"},alphaLight600:{main:"rgba(255, 255, 255, 0.32)"},alphaLight700:{main:"rgba(255, 255, 255, 0.48)"},alphaLight800:{main:"rgba(255, 255, 255, 0.64)"}},typography:{fontFamily:[l().style.fontFamily,"Arial","Noto Sans","BlinkMacSystemFont","Segoe UI","Helvetica Neue","sans-serif"].join(","),lifiHeaderDisplay:{fontStyle:"normal",fontSize:"96px",lineHeight:"128px",fontWeight:700},lifiHeaderXLarge:{fontStyle:"normal",fontWeight:700,fontSize:"64px",lineHeight:"96px",letterSpacing:0},lifiHeaderLarge:{fontStyle:"normal",fontWeight:700,fontSize:"48px",lineHeight:"64px",letterSpacing:0},lifiHeaderMedium:{fontStyle:"normal",fontWeight:700,fontSize:"32px",lineHeight:"40px",letterSpacing:0},lifiHeaderSmall:{fontStyle:"normal",fontWeight:700,fontSize:"18px",lineHeight:"24px",letterSpacing:0},lifiHeaderXSmall:{fontStyle:"normal",fontWeight:700,fontSize:"18px",lineHeight:"24px",letterSpacing:0},lifiBodyXLargeStrong:{fontStyle:"normal",fontWeight:800,fontSize:"24px",lineHeight:"32px",letterSpacing:0},lifiBodyXLarge:{fontStyle:"normal",fontWeight:400,fontSize:"24px",lineHeight:"32px",letterSpacing:0},lifiBodyLargeStrong:{fontStyle:"normal",fontWeight:700,fontSize:"18px",lineHeight:"24px",letterSpacing:0},lifiBodyLarge:{fontStyle:"normal",fontWeight:500,fontSize:"18px",lineHeight:"24px",letterSpacing:0},lifiBodyMediumStrong:{fontStyle:"normal",fontWeight:700,fontSize:"16px",lineHeight:"20px",letterSpacing:0},lifiBodyMedium:{fontStyle:"normal",fontWeight:500,fontSize:"16px",lineHeight:"20px",letterSpacing:0},lifiBodySmallStrong:{fontStyle:"normal",fontWeight:700,fontSize:"14px",lineHeight:"20px",letterSpacing:0},lifiBodySmall:{fontStyle:"normal",fontWeight:400,fontSize:"14px",lineHeight:"20px",letterSpacing:0},lifiBodyXSmallStrong:{fontStyle:"normal",fontWeight:700,fontSize:"12px",lineHeight:"16px",letterSpacing:0},lifiBodyXSmall:{fontStyle:"normal",fontWeight:500,fontSize:"12px",lineHeight:"16px",letterSpacing:0},lifiBrandHeaderXLarge:{fontStyle:"normal",fontWeight:700,fontSize:"64px",lineHeight:"72px",letterSpacing:0},h1:{fontFamily:g().style.fontFamily,fontSize:s.typography.pxToRem(48),lineHeight:s.typography.pxToRem(64),letterSpacing:"inherit",fontWeight:700,[s.breakpoints.up("sm")]:{fontSize:s.typography.pxToRem(64),lineHeight:s.typography.pxToRem(72)}},h2:{fontFamily:g().style.fontFamily,fontSize:s.typography.pxToRem(36),lineHeight:s.typography.pxToRem(48),fontWeight:700},h3:{fontFamily:g().style.fontFamily,fontSize:s.typography.pxToRem(28),lineHeight:s.typography.pxToRem(36),fontWeight:700},h4:{fontFamily:g().style.fontFamily,fontSize:s.typography.pxToRem(22),lineHeight:s.typography.pxToRem(28),fontWeight:700},h5:{fontFamily:g().style.fontFamily,fontSize:s.typography.pxToRem(18),lineHeight:s.typography.pxToRem(24),fontWeight:700},h6:{fontFamily:g().style.fontFamily,fontSize:s.typography.pxToRem(12),lineHeight:s.typography.pxToRem(18),fontWeight:700}}}),d=(0,i.Z)((0,n.Z)(s,p)),f=(0,i.Z)((0,n.Z)(d,{palette:{mode:"light",background:{default:"linear-gradient(180deg, #F9F5FF 0%, #F3EBFF 49.48%, #F9F5FF 99.48%)"},text:{primary:"#000"},grey:{300:"#E5E1EB"},bg:{light:"#F3EBFF",main:"#F3EBFF",dark:"#F3EBFF"},shadow:{light:"#F3EBFF",main:"#F3EBFF",dark:"#F3EBFF"},primary:{light:"#31007A",main:"#31007A",dark:"#290066"},secondary:{light:"#E9E1F5",main:"#E9E1F5",dark:"#E9E1F5"},tertiary:{light:"#FCEBFF",main:"#FCEBFF",dark:"#FCEBFF"},accent1:{light:"#31007A",main:"#31007A",dark:"#31007A"},accent2:{light:"#8700B8",main:"#8700B8",dark:"#8700B8"},surface1:{light:"#FCFAFF",main:"#FCFAFF",dark:"#FCFAFF"},surface2:{light:"#FFFFFF",main:"#FFFFFF",dark:"#FFFFFF"},surface3:{light:"#E5E1EB",main:"#E5E1EB",dark:"#E5E1EB"},templateBg:{light:"#FEF5FF",main:"#FEF5FF",dark:"#FEF5FF"},templateOutline:{light:"#C95CFF",main:"#C95CFF",dark:"#C95CFF"},dataBg:{light:"#F5F6FF",main:"#F5F6FF",dark:"#F5F6FF"},dataOutline:{light:"#7B61FF",main:"#7B61FF",dark:"#7B61FF"}}})),h=(0,i.Z)((0,n.Z)(d,{palette:{mode:"dark",background:{default:"linear-gradient(180deg, #000000 0%, #0C001F 49.48%, #000000 99.48%)"},text:{primary:"#fff"},grey:{800:"#302B52"},bg:{light:"#030014",main:"#030014",dark:"#030014"},shadow:{light:"#F3EBFF",main:"#F3EBFF",dark:"#F3EBFF"},primary:{light:"#653BA3",main:"#653BA3",dark:"#543188"},secondary:{light:"#321D52",main:"#321D52",dark:"#321D52"},tertiary:{light:"#33163D",main:"#33163D",dark:"#33163D"},accent1:{light:"#653BA3",main:"#653BA3",dark:"#653BA3"},accent1Alt:{light:"#BEA0EB",main:"#BEA0EB",dark:"#BEA0EB"},accent2:{light:"#D35CFF",main:"#D35CFF",dark:"#D35CFF"},surface1:{light:"#120F29",main:"#120F29",dark:"#120F29"},surface2:{light:"#24203D",main:"#24203D",dark:"#24203D"},surface3:{light:"#302B52",main:"#302B52",dark:"#302B52"},templateBg:{light:"#401946",main:"#401946",dark:"#401946"},templateOutline:{light:"#D47BEB",main:"#D47BEB",dark:"#D47BEB"},dataBg:{light:"#28203D",main:"#28203D",dark:"#28203D"},dataOutline:{light:"#B8ADFF",main:"#B8ADFF",dark:"#B8ADFF"}}}))}}]);