(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1483],{49691:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/zen-keyboard",function(){return n(61795)}])},40208:function(e,t,n){"use strict";n.d(t,{h:function(){return s}});var a=n(85893),i=n(48043);function s(e){var t,n,s,l,r;return(0,a.jsx)(i.J,{...e,style:{width:null!==(t=e.size)&&void 0!==t?t:"2rem",height:null!==(n=e.size)&&void 0!==n?n:"2rem",minWidth:null!==(s=e.size)&&void 0!==s?s:"2rem",minHeight:null!==(l=e.size)&&void 0!==l?l:"2rem",...e.style},className:"icon-app-button flex-centered ".concat(null!==(r=e.className)&&void 0!==r?r:""),children:e.children})}},19075:function(e,t,n){"use strict";n.d(t,{O:function(){return g}});var a=n(85893),i=n(17544),s=n(21820),l=n.n(s),r=n(39324),o=n(67421),c=n(92634),u=n(67294);let d=new Set(i.BX.filter(e=>e.includes("_")).map(e=>e.split("_")[0])),m={instruments:i.BX.filter(e=>!e.includes("_"))};for(let e of d)m[e]=i.BX.filter(t=>t.startsWith(e));let h=Object.entries(m);function g(e){let{selected:t,onChange:n,style:i,className:s}=e,{t:d}=(0,o.$G)("instruments"),[g]=(0,c.F)(),v=(0,u.useMemo)(()=>"url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24' fill='".concat(g.getText("primary").hex().replace("#","%23"),"'><path d='M0 0h24v24H0z' fill='none'/><path d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z'/></svg>\")"),[g]);return(0,a.jsx)("select",{className:"".concat(l().select," ").concat(s),style:{width:"100%",padding:"0.3rem",backgroundImage:v,...i},onChange:e=>{n(e.target.value),e.target.blur()},value:t,children:1===h.length?(0,a.jsx)(a.Fragment,{children:m.instruments.map(e=>(0,a.jsx)("option",{value:e,children:d(e)},e))}):(0,a.jsx)(a.Fragment,{children:h.map(e=>{let[t,n]=e;return(0,a.jsx)("optgroup",{label:(0,r.kC)(t),children:n.map(e=>(0,a.jsx)("option",{value:e,children:d(e)},e))},t)})})})}},13042:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var a=n(85893),i=n(92634),s=n(48771),l=n.n(s);function r(e){let{checked:t,onChange:n,styleOuter:s}=e,[r]=(0,i.F)();return(0,a.jsx)("button",{className:l()["switch-wrapper"],onClick:()=>n(!t),style:s||{},"aria-label":t?"Switch to off":"Switch to on",children:(0,a.jsx)("div",{className:"".concat(l()["switch-inner"]," ").concat(t?l()["switch-inner-on"]:""),style:{backgroundColor:(t?r.get("accent"):r.layer("primary",.4)).toString()}})})}},20027:function(e,t,n){"use strict";n.d(t,{G:function(){return c},f:function(){return o}});var a=n(85893),i=n(40456),s=n.n(i),l=n(39324),r=n(69887);function o(e){let{children:t,className:n,style:i}=e,{open:o,visible:c}=(0,r.X)();return(0,a.jsx)("div",{className:(0,l.cn)("".concat(s()["side-menu"]," ").concat(n),[o&&c,s()["side-menu-open"]]),style:i,children:t})}function c(e){let{title:t,children:n,id:i}=e,{current:o}=(0,r.X)();return(0,a.jsxs)("div",{className:(0,l.cn)(s()["menu-panel"],[o===i,s()["menu-panel-visible"]]),children:[t&&(0,a.jsx)("div",{className:s()["menu-title"],children:t}),(0,a.jsx)("div",{className:s()["panel-content-wrapper"],children:n})]})}},86998:function(e,t,n){"use strict";n.d(t,{A:function(){return y}});var a=n(85893),i=n(67294),s=n(13042),l=n(21820),r=n.n(l),o=n(19075);function c(e){let{data:t,volume:n,onVolumeChange:i,onVolumeComplete:s,onInstrumentPick:l,objectKey:c,instrument:u,theme:d}=e;return(0,a.jsxs)("div",{className:r()["instrument-picker"],children:[(0,a.jsx)(o.O,{selected:u,onChange:function(e){l({key:c,data:{...t,value:e}})},className:r().select,style:{textAlign:"left",paddingLeft:"0.4rem"}}),(0,a.jsx)("input",{type:"range",min:1,max:100,value:n,onChange:function(e){i(Number(e.target.value))},onPointerUp:function(){s({key:c,value:n})}})]})}var u=n(78773);function d(e){let{data:t,value:n,onChange:i,onComplete:s,objectKey:l}=e;function o(e){if("number"===t.type){let a=Number(n)+(t.increment||0)*e;!t.threshold||a<t.threshold[0]||a>t.threshold[1]||s({key:l,data:{...t,value:a}})}}return(0,a.jsxs)("div",{className:r()["settings-input"],children:["number"===t.type&&(0,a.jsx)("button",{onClick:()=>o(-1),className:r()["settings-input-button"],style:{marginRight:"0.15rem"},"aria-label":"Decrement",children:(0,a.jsx)(u.iFH,{})}),(0,a.jsx)("input",{type:t.type,value:n,placeholder:t.placeholder||"",onBlur:function(){t.value!==n&&s({key:l,data:{...t,value:n}})},onChange:function(e){let n=e.target;if("number"===t.type){let e=Number(n.value);if(n.value="",!t.threshold||e<t.threshold[0]||e>t.threshold[1])return;i(e)}else i(n.value)},"aria-label":t.name}),"number"===t.type&&(0,a.jsx)("button",{onClick:()=>o(1),className:r()["settings-input-button"],style:{marginLeft:"0.15rem"},"aria-label":"Increment",children:(0,a.jsx)(u.wEH,{})})]})}function m(e){let{data:t,value:n,onChange:i,objectKey:s}=e;return(0,a.jsx)("input",{type:"range",min:t.threshold[0],max:t.threshold[1],step:t.step,value:n,onChange:function(e){i({key:s,data:{...t,value:Number(e.target.value)}})}})}function h(e){let{value:t,onChange:n,data:i,objectKey:s,children:l,theme:r,type:o}=e;return(0,a.jsx)("select",{value:t,onChange:function(e){n({key:s,data:{...i,value:"number"==typeof o?parseInt(e.target.value):e.target.value}}),e.target.blur()},style:{backgroundImage:"url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24' fill='".concat(r.getText("primary").hex().replace("#","%23"),"'><path d='M0 0h24v24H0z' fill='none'/><path d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z'/></svg>\")")},children:l})}var g=n(92634),v=n(10694),p=n(67421),f=(0,i.memo)(function(e){let{data:t,update:n,objKey:l,changeVolume:o}=e,{t:u}=(0,p.$G)(["settings"]),[f,y]=(0,i.useState)(t.value),[x,b]=(0,i.useState)("instrument"===t.type?t.volume:0),[k]=(0,g.F)(),{type:j}=t;return(0,i.useEffect)(()=>{y(t.value)},[t.value]),(0,a.jsxs)("div",{className:r()["settings-row"],style:{backgroundColor:k.layer("menu_background",.15).toString()},children:[(0,a.jsxs)("div",{className:(0,v.h)(t.tooltip),style:{flex:"1"},children:[u("props.".concat(t.name)),t.tooltip&&(0,a.jsx)(v.u,{style:{width:"12rem"},children:u("props.".concat(t.tooltip))})]}),"select"===j&&(0,a.jsx)(h,{theme:k,type:t.options[0],onChange:n,value:t.value,objectKey:l,data:t,children:t.options.map(e=>(0,a.jsx)("option",{value:e,children:e},e))}),("number"===j||"text"===j)&&(0,a.jsx)(d,{data:t,value:f,onChange:y,onComplete:n,objectKey:l}),"checkbox"===j&&(0,a.jsx)(s.Z,{checked:f,onChange:function(e){"checkbox"===j&&n({key:l,data:{...t,value:e}})}}),"slider"===j&&(0,a.jsx)(m,{objectKey:l,data:t,value:f,onChange:n}),"instrument"===j&&o&&(0,a.jsx)(c,{theme:k,volume:x,onInstrumentPick:n,onVolumeChange:b,onVolumeComplete:o,instrument:t.value,data:t,objectKey:l})]})},(e,t)=>e.data.value===t.data.value&&e.data.volume===t.data.volume&&e.update===t.update);function y(e){let{settings:t,changeVolume:n,onUpdate:s}=e,{t:l}=(0,p.$G)(["settings"]),o=new Map;return Object.entries(t).forEach(e=>{let[t,n]=e;o.has(n.category)||o.set(n.category,{category:n.category,settings:{}}),o.get(n.category).settings[t]=n}),(0,a.jsx)(a.Fragment,{children:Array.from(o.values()).map(e=>(0,a.jsx)(i.Fragment,{children:(0,a.jsxs)("div",{className:"column",children:[(0,a.jsx)("h1",{className:r()["settings-group-title"],children:l("category.".concat(e.category))}),Object.entries(e.settings).map(e=>{let[t,i]=e;return(0,a.jsx)(f,{objKey:t,data:i,changeVolume:n,update:s},t)})]})},e.category))})}},97411:function(e,t,n){"use strict";n.d(t,{c:function(){return s}});var a=n(85893),i=n(67294);t.Z=(0,i.memo)(function(e){let{children:t}=e;return(0,a.jsx)(a.Fragment,{children:t})},(e,t)=>{var n,a,i,s;return(null===(n=t.children)||void 0===n?void 0:n.key)!==null||(null===(a=e.children)||void 0===a?void 0:a.key)!==null?(null===(i=e.children)||void 0===i?void 0:i.key)===(null===(s=t.children)||void 0===s?void 0:s.key):void 0!==e.children});let s=(0,i.memo)(function(e){let{icon:t,size:n,className:i}=e;return(0,a.jsx)(t,{size:n,className:i})},(e,t)=>e.icon===t.icon&&e.size===t.size&&e.className===t.className)},47103:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var a=n(85893),i=n(54233),s=n(67294),l=n(68949);function r(e){let{children:t,page:n,style:r}=e,[o]=function(){let[e,t]=(0,s.useState)(i.f6);return(0,s.useEffect)(()=>(0,l.N7)(i.f6.state.other,()=>{t({...i.f6})}),[]),[e,t]}();return(0,a.jsx)("div",{className:"app bg-image",style:{backgroundImage:"url(".concat(o.getOther("backgroundImage"+n),")"),...r},children:t})}},61795:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return U}});var a=n(85893),i=n(32362),s=n(97582),l=n(17544),r=n(68949);class o{constructor(){this.keyboard=[],this.setKeyboardLayout=e=>{this.keyboard.splice(0,this.keyboard.length,...e)},this.animateNote=(e,t)=>{this.keyboard[e].triggerAnimation(t)},this.resetKeyboardLayout=()=>{this.keyboard.forEach(e=>e.setState({status:"",delay:"Genshin"===l.iC?100:200}))},this.resetOutgoingAnimation=()=>{this.keyboard.forEach(e=>e.setState({animationId:0}))},this.setNoteState=(e,t)=>{this.keyboard[e].setState(t)},(0,r.rC)(this)}}(0,s.gn)([r.LO],o.prototype,"keyboard",void 0);let c=new o;var u=n(79317),d=n(67294),m=n(54233),h=n(67274),g=n(92333),v=n.n(g),p=n(39324);let f=[{transform:"rotateY(0deg) scale(0.8)"},{transform:"rotateY(180deg) scale(0.8)"},{transform:"rotateY(360deg) scale(1)"}];function y(e){var t,n;let s;let{note:r,onClick:o,noteImage:c,noteText:g,instrumentName:y,keyPadding:x}=e,[b,k]=(0,d.useState)(""),[j,_]=(0,d.useState)(0),[N,C]=(0,d.useState)(l.kx.text.light),w=(0,d.useRef)(null),S=(0,d.useCallback)(e=>{(0,p.PF)(e),o(r)},[o,r]);(0,d.useEffect)(()=>(0,i.VZ)(r.data,function(){if("Genshin"===l.iC)k("clicked"),_(e=>e+1),setTimeout(()=>k(""),100);else{let e=w.current;if(!e)return;e.animate(f,{duration:400})}}),[r,w]),(0,d.useEffect)(()=>(0,i.VZ)(m.f6.state.data,()=>{C(function(){let e=m.f6.get("note_background");return"Genshin"!==l.iC?e.isDark()?l.kx.text.light:l.kx.text.dark:e.luminosity()>.65?l.kx.text.note:e.isDark()?l.kx.text.light:l.kx.text.dark}())}),[]);let z="".concat((s=l.Al.note,"clicked"===b&&(s+=" click-event"),s)," ").concat("Genshin"===l.iC?"":v()["sky-zen-note"]),A=null===(t=l.as[y])||void 0===t?void 0:t.clickColor;return(0,a.jsxs)("button",{onPointerDown:S,onContextMenu:p.PF,className:"button-hitbox-bigger",style:{padding:"".concat(x,"rem")},children:["Genshin"===l.iC&&(0,a.jsx)("div",{style:A&&m.f6.isDefault("accent")?{borderColor:A}:{},className:l.Al.noteAnimation},j),(0,a.jsxs)("div",{ref:w,className:z,children:["Genshin"===l.iC&&(0,a.jsx)(h.Z,{className:"genshin-border",fill:"clicked"===b?"transparent":"toClickNext"===b||"toClickAndNext"===b?"#63aea7":"var(--note-border-fill)"}),c&&(0,a.jsx)(u.Z,{name:r.noteImage,color:m.f6.isDefault("accent")?null===(n=l.as[y])||void 0===n?void 0:n.fill:void 0,background:"clicked"===b?A&&m.f6.isDefault("accent")?A:"var(--accent)":"var(--note-background)"}),(0,a.jsx)("div",{className:l.Al.noteName,style:{color:N},children:g})]})]})}var x=n(7374);let b="keyboard ".concat(v()["zen-keyboard"],"}"),k=new Map([[15,"".concat(b," keyboard-5")],[14,"".concat(b," keyboard-5")],[8,"".concat(b," keyboard-4")],[6,"".concat(b," keyboard-3")]]);function j(e){let{onNoteClick:t,instrument:n,pitch:s,verticalOffset:l,scale:r,noteNameType:o,keySpacing:u}=e,m=(0,i.ih)(c.keyboard);(0,d.useEffect)(()=>(0,x.JP)("zen_keyboard",e=>{let{shortcut:a,event:i}=e;if(i.repeat)return;let s=n.getNoteFromCode(a.name);null!==s&&t(s)}),[t,n]);let h=k.get(m.length)||b;return(0,a.jsx)("div",{className:h,style:{transform:"scale(".concat(r/100,") translateY(").concat(l,"px)"),marginTop:"unset"},children:m.map((e,i)=>(0,a.jsx)(y,{keyPadding:u,instrumentName:n.name,noteText:n.getNoteText(i,o,s),noteImage:e.noteImage,note:e,onClick:t},i))})}var _=n(12293),N=n(40569),C=n(78773),w=n(20027),S=n(54135),z=n(86998),A=n(97411),F=n(40208),I=n(92088),P=n(11828),E=n(41570),T=n(99962),Z=n(67421),G=n(63653),K=n.n(G);function L(e){let{items:t,onChange:n,value:i,Icon:s}=e,[l,r]=(0,d.useState)(!1),o=(0,_.ZP)(()=>r(!1),{active:l});return(0,a.jsxs)("div",{className:"column",ref:o,style:{alignItems:"flex-end",gap:"0.5rem"},children:[(0,a.jsx)(F.h,{onClick:()=>r(!l),style:{zIndex:2,borderRadius:"1rem",border:"solid 0.1rem var(--secondary)"},toggled:l,children:(0,a.jsx)(s,{size:18})}),l&&(0,a.jsx)("div",{className:K()["floating-selection-card"],style:{maxHeight:"75vh"},children:t.map(e=>{var t;return(0,a.jsx)("button",{className:"".concat(K()["floating-selection-card-item"]),style:i===e.value?{backgroundColor:"var(--accent)",color:"var(--accent-text)"}:{},onClick:()=>{n(e.value),r(!1)},children:e.label},null!==(t=e.key)&&void 0!==t?t:e.label)})})]})}let B=l.T_.map(e=>({value:e,label:e}));function M(e){let{settings:t,handleSettingChange:n,onVolumeChange:i,isMetronomePlaying:s,setIsMetronomePlaying:r}=e,{t:o}=(0,Z.$G)(["menu","settings","instruments"]),[c,u]=(0,d.useState)("Settings"),[m,h]=(0,d.useState)(!0),[g,v]=(0,d.useState)(!1),p=(0,_.ZP)(()=>{v(!1)},{ignoreFocusable:!0,active:""!==c}),f=(0,d.useMemo)(()=>l.BX.map(e=>({value:e,label:o("instruments:".concat(e))})),[o]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(F.h,{toggled:s,onClick:()=>r(!s),className:"metronome-button",style:{position:"absolute",top:"0.5rem",right:"5.1rem",borderRadius:"1rem",border:"solid 0.1rem var(--secondary)"},ariaLabel:o("settings:toggle_metronome"),children:(0,a.jsx)(E.eHT,{size:18})}),(0,a.jsx)("div",{style:{position:"absolute",top:"0.5rem",right:"2.8rem"},children:(0,a.jsx)(L,{value:t.pitch.value,items:B,Icon:P.n5x,onChange:e=>n({key:"pitch",data:{...t.pitch,value:e}})})}),(0,a.jsx)("div",{style:{position:"absolute",top:"0.5rem",right:"0.5rem"},children:(0,a.jsx)(L,{value:t.instrument.value,items:f,Icon:I.S0H,onChange:e=>n({key:"instrument",data:{...t.instrument,value:e}})})}),(0,a.jsxs)(T.q,{open:m,setOpen:h,current:c,setCurrent:u,ref:p,visible:g,children:[(0,a.jsx)("div",{className:"hamburger-top",onClick:()=>v(!g),children:(0,a.jsx)(A.c,{icon:C.Fm7})}),(0,a.jsxs)(T.V,{style:{justifyContent:"flex-end"},children:[(0,a.jsx)(S.j,{ariaLabel:o("toggle_menu"),style:{marginBottom:"auto"},onClick:()=>v(!g),children:(0,a.jsx)(A.c,{icon:C.aHS,className:"icon"})}),(0,a.jsx)(S.s,{id:"Settings",ariaLabel:o("open_settings_menu"),children:(0,a.jsx)(A.c,{icon:C.p4t,className:"icon"})}),(0,a.jsx)(S.j,{onClick:N.I.open,ariaLabel:o("open_home_menu"),style:{border:"solid 0.1rem var(--secondary)"},children:(0,a.jsx)(A.c,{icon:C.xng,className:"icon"})})]}),(0,a.jsx)(w.f,{children:(0,a.jsx)(w.G,{title:o("settings"),id:"Settings",children:(0,a.jsx)(z.A,{settings:t,onUpdate:n,changeVolume:i})})})]})]})}var O=n(67299),V=n(83679),D=n(65023),H=n(92761),X=n(80219),Y=n(53179),R=n(23441),W=n(47103),$=n(80331),q=n(10418),Q=n(19116);function U(){(0,Q.o)("zenKeyboard");let{t:e}=(0,Z.$G)(["home"]),[t,n]=(0,d.useState)(O.$h.data),[i,s]=(0,d.useState)(new V.Yx),[l,r]=(0,d.useState)(!1);(0,d.useEffect)(()=>{let e=X.j.getZenKeyboardSettings();return D.A.bpm=e.metronomeBpm.value,s(new V.Yx(e.instrument.value)),n(e),H.n.setReverb(e.reverb.value),()=>Y.kg.hidePill()},[]);let o=(0,d.useCallback)(e=>{X.j.updateZenKeyboardSettings(e)},[]);(0,d.useEffect)(()=>{c.setKeyboardLayout(i.notes)},[i]);let u=async e=>{let{data:a}=e;t[e.key]={...t[e.key],value:a.value},"instrument"===e.key&&s(new V.Yx(a.value)),"reverb"===e.key&&H.n.setReverb(a.value),"metronomeBpm"===e.key&&(D.A.bpm=a.value),"metronomeBeats"===e.key&&(D.A.beats=a.value),"metronomeVolume"===e.key&&D.A.changeVolume(a.value),n({...t}),o(t)};(0,d.useEffect)(()=>((async function(){Y.kg.showPill(q.WV.t("zen_keyboard:loading_instrument")),await i.load(H.n.getAudioContext()),Y.kg.hidePill(),H.n.connect(i.endNode,null)})(),()=>{H.n.disconnect(i.endNode)}),[i]);let m=(0,d.useCallback)(e=>{i.play(e.index,t.pitch.value),c.animateNote(e.index),$.mP.broadcastNoteClick(e.midiNote)},[i,t.pitch.value]);(0,d.useEffect)(()=>{l?D.A.start():D.A.stop()},[l]);let h=(0,d.useCallback)(e=>{i.changeVolume(e.value)},[i]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(R.d,{text:e("zen_keyboard_name"),description:"The simplest keyboard in the app, focus only on playing manually with all the features of the player, instrument and pitch selection, animations and metronome"}),(0,a.jsx)(M,{settings:t,isMetronomePlaying:l,setIsMetronomePlaying:r,onVolumeChange:h,handleSettingChange:u}),(0,a.jsx)("div",{className:"flex-centered",children:(0,a.jsx)(j,{instrument:i,onNoteClick:m,noteNameType:t.noteNameType.value,pitch:t.pitch.value,scale:t.keyboardSize.value,keySpacing:t.keyboardSpacing.value,verticalOffset:t.keyboardYPosition.value})})]})}U.getLayout=function(e){return(0,a.jsx)(W.Z,{page:"Main",children:e})}},63653:function(e){e.exports={"floating-selection-card":"FloatingSelection_floating-selection-card__QpTjy",fadeIn:"FloatingSelection_fadeIn__Bo8vG","floating-selection-card-item":"FloatingSelection_floating-selection-card-item__Wg1Dg"}},92333:function(e){e.exports={"zen-keyboard":"ZenKeyboard_zen-keyboard__FqTg8","sky-zen-note":"ZenKeyboard_sky-zen-note__W3j5Y"}},48771:function(e){e.exports={"switch-wrapper":"Switch_switch-wrapper__QbqdS","switch-inner":"Switch_switch-inner__2FN4t","switch-inner-on":"Switch_switch-inner-on__dXyKj"}},21820:function(e){e.exports={"instrument-picker":"Settings_instrument-picker__7I4Rw",select:"Settings_select__TfGwk","settings-group-title":"Settings_settings-group-title__ZP9Kk","settings-row":"Settings_settings-row__QAhCZ",invalid:"Settings_invalid__xvU6D","settings-input":"Settings_settings-input__TWACI","settings-input-button":"Settings_settings-input-button__AnhLi"}}},function(e){e.O(0,[8127,509,2463,2888,9774,179],function(){return e(e.s=49691)}),_N_E=e.O()}]);