(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{1446:function(e,t,n){"use strict";n.d(t,{G:function(){return u}});var r=n(1010),a=n(7582),i=n(5893),l=n(7294);function u(e){var t,n=e.children,u=e.onPick,s=e.style,o=e.as,c=e.multiple,d=e.onError,h=(0,l.useRef)(null),v=(0,l.useCallback)((t=(0,r._)(function(e){var t,n,r,i,l;return(0,a.Jh)(this,function(a){switch(a.label){case 0:if(null===e.target.files)return[2];if(n=Array.from(null!==(t=e.target.files)&&void 0!==t?t:[]),"file"===o)return[2,u(n.map(function(e){return{data:e,file:e}}))];r=n.map(function(e){return new Promise(function(t,n){var r=new FileReader;try{r.addEventListener("loadend",function(){try{var a=r.result;t({data:"json"===o?JSON.parse(a):a,file:e})}catch(e){n(e)}},{once:!0}),("text"===o||"json"===o)&&r.readAsText(e),"buffer"===o&&r.readAsArrayBuffer(e)}catch(e){n(e)}})}),a.label=1;case 1:return a.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return u(a.sent()),[3,4];case 3:return console.error(i=a.sent()),null===(l=d)||void 0===l||l(i,n),[3,4];case 4:return null!==h.current&&(h.current.value=""),[2]}})}),function(e){return t.apply(this,arguments)}),[o,u,d]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("input",{type:"file",style:{display:"none"},ref:h,onChange:v,multiple:void 0!==c&&c}),(0,i.jsx)("div",{onClick:function(){var e;return null===(e=h.current)||void 0===e?void 0:e.click()},style:void 0===s?{}:s,children:n})]})}},3544:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(1309),a=n(5893),i=n(5055),l=n(7114),u=n.n(l);function s(e){var t=e.checked,n=e.onChange,l=e.styleOuter,s=(0,r._)((0,i.F)(),1)[0];return(0,a.jsx)("button",{className:u()["switch-wrapper"],onClick:function(){return n(!t)},style:l||{},"aria-label":t?"Switch to off":"Switch to on",children:(0,a.jsx)("div",{className:"".concat(u()["switch-inner"]," ").concat(t?u()["switch-inner-on"]:""),style:{backgroundColor:(t?s.get("accent"):s.layer("primary",.4)).toString()}})})}},6880:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(2253),a=n(1309),i=n(5893),l=n(5829),u=n(7294),s=n(8949);function o(e){var t,n,o,c=e.children,d=e.page,h=e.style,v=(0,a._)((n=(t=(0,a._)((0,u.useState)(l.f6),2))[0],o=t[1],(0,u.useEffect)(function(){return(0,s.N7)(l.f6.state.other,function(){o((0,r._)({},l.f6))})},[]),[n,o]),1)[0];return(0,i.jsx)("div",{className:"app bg-image",style:(0,r._)({backgroundImage:"url(".concat(v.getOther("backgroundImage"+d),")")},h),children:c})}},781:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(5893);function a(e){var t=e.title,n=e.current,a=e.children,i=e.id;return(0,r.jsxs)("div",{className:n===i?"menu-panel menu-panel-visible":"menu-panel",children:[t&&(0,r.jsx)("div",{className:"menu-title",children:t}),(0,r.jsx)("div",{className:"panel-content-wrapper",children:a})]})}},7362:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(1309),a=n(5893),i=n(6743),l=n(1664),u=n.n(l),s=n(7294);function o(){var e=(0,r._)((0,s.useState)(!1),2),t=e[0],n=e[1];return(0,s.useEffect)(function(){n((0,i.OR)())},[]),t?(0,a.jsx)(a.Fragment,{}):(0,a.jsx)(u(),{className:"donate-button",href:"donate",children:"Donate"})}},1866:function(e,t,n){"use strict";n.d(t,{A:function(){return x}});var r=n(1309),a=n(5893),i=n(7294),l=n(2253),u=n(4932),s=n(3544),o=n(7600),c=n.n(o);function d(e){var t=e.data,n=e.volume,r=e.onVolumeChange,i=e.onVolumeComplete,s=e.onInstrumentPick,o=e.objectKey,d=e.instrument,h=e.theme,v=[],m=[],p=!0,g=!1,f=void 0;try{for(var y,x=t.options[Symbol.iterator]();!(p=(y=x.next()).done);p=!0){var _=y.value;_.startsWith("SFX")?m.push(_):v.push(_)}}catch(e){g=!0,f=e}finally{try{p||null==x.return||x.return()}finally{if(g)throw f}}return(0,a.jsxs)("div",{className:c()["instrument-picker"],children:[(0,a.jsx)("select",{value:d,style:{textAlign:"left",paddingLeft:"0.4rem",backgroundImage:"url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24' fill='".concat(h.getText("primary").hex().replace("#","%23"),"'><path d='M0 0h24v24H0z' fill='none'/><path d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z'/></svg>\")")},className:c().select,onChange:function(e){s({key:o,data:(0,u._)((0,l._)({},t),{value:e.target.value})})},children:0===m.length?(0,a.jsx)(a.Fragment,{children:v.map(function(e){return(0,a.jsx)("option",{value:e,children:e.replace("-"," ")},e)})}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("optgroup",{label:"Instruments",children:v.map(function(e){return(0,a.jsx)("option",{value:e,children:e.replace("-"," ")},e)})}),(0,a.jsx)("optgroup",{label:"SFX",children:m.map(function(e){return(0,a.jsx)("option",{value:e,children:e.replace("-"," ").replace("SFX_","")},e)})})]})}),(0,a.jsx)("input",{type:"range",min:1,max:100,value:n,onChange:function(e){r(Number(e.target.value))},onPointerUp:function(){i({key:o,value:n})}})]})}var h=n(9583);function v(e){var t=e.data,n=e.value,r=e.onChange,i=e.onComplete,s=e.objectKey,o=function(e){if("number"===t.type){var r=Number(n)+(t.increment||0)*e;!t.threshold||r<t.threshold[0]||r>t.threshold[1]||i({key:s,data:(0,u._)((0,l._)({},t),{value:r})})}};return(0,a.jsxs)("div",{className:c()["settings-input"],children:["number"===t.type&&(0,a.jsx)("button",{onClick:function(){return o(-1)},className:c()["settings-input-button"],style:{marginRight:"0.15rem"},"aria-label":"Decrement",children:(0,a.jsx)(h.iFH,{})}),(0,a.jsx)("input",{type:t.type,value:n,placeholder:t.placeholder||"",onBlur:function(){t.value!==n&&i({key:s,data:(0,u._)((0,l._)({},t),{value:n})})},onChange:function(e){var n=e.target;if("number"===t.type){var a=Number(n.value);if(n.value="",!t.threshold||a<t.threshold[0]||a>t.threshold[1])return;r(a)}else r(n.value)},"aria-label":t.name}),"number"===t.type&&(0,a.jsx)("button",{onClick:function(){return o(1)},className:c()["settings-input-button"],style:{marginLeft:"0.15rem"},"aria-label":"Increment",children:(0,a.jsx)(h.wEH,{})})]})}function m(e){var t=e.data,n=e.value,r=e.onChange,i=e.objectKey;return(0,a.jsx)("input",{type:"range",min:t.threshold[0],max:t.threshold[1],step:t.step,value:n,onChange:function(e){r({key:i,data:(0,u._)((0,l._)({},t),{value:Number(e.target.value)})})}})}function p(e){var t=e.value,n=e.onChange,r=e.data,i=e.objectKey,s=e.children,o=e.theme,c=e.type;return(0,a.jsx)("select",{value:t,onChange:function(e){n({key:i,data:(0,u._)((0,l._)({},r),{value:"number"==typeof c?parseInt(e.target.value):e.target.value})}),e.target.blur()},style:{backgroundImage:"url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24' fill='".concat(o.getText("primary").hex().replace("#","%23"),"'><path d='M0 0h24v24H0z' fill='none'/><path d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z'/></svg>\")")},children:s})}var g=n(5055),f=n(1014),y=(0,i.memo)(function(e){var t=e.data,n=e.update,o=e.objKey,h=e.changeVolume,y=(0,r._)((0,i.useState)(t.value),2),x=y[0],_=y[1],j=(0,r._)((0,i.useState)("instrument"===t.type?t.volume:0),2),b=j[0],w=j[1],k=(0,r._)((0,g.F)(),1)[0],C=t.type;return(0,i.useEffect)(function(){_(t.value)},[t.value]),(0,a.jsxs)("div",{className:c()["settings-row"],style:{backgroundColor:k.layer("menu_background",.15).toString()},children:[(0,a.jsxs)("div",{className:(0,f.h)(t.tooltip),style:{flex:"1"},children:[t.name,t.tooltip&&(0,a.jsx)(f.u,{style:{width:"12rem"},children:t.tooltip})]}),"select"===C&&(0,a.jsx)(p,{theme:k,type:t.options[0],onChange:n,value:t.value,objectKey:o,data:t,children:t.options.map(function(e){return(0,a.jsx)("option",{value:e,children:e},e)})}),("number"===C||"text"===C)&&(0,a.jsx)(v,{data:t,value:x,onChange:_,onComplete:n,objectKey:o}),"checkbox"===C&&(0,a.jsx)(s.Z,{checked:x,onChange:function(e){"checkbox"===C&&n({key:o,data:(0,u._)((0,l._)({},t),{value:e})})}}),"slider"===C&&(0,a.jsx)(m,{objectKey:o,data:t,value:x,onChange:n}),"instrument"===C&&h&&(0,a.jsx)(d,{theme:k,volume:b,onInstrumentPick:n,onVolumeChange:w,onVolumeComplete:h,instrument:t.value,data:t,objectKey:o})]})},function(e,t){return e.data.value===t.data.value&&e.data.volume===t.data.volume&&e.update===t.update});function x(e){var t=e.settings,n=e.changeVolume,l=e.onUpdate,u=new Map;return Object.entries(t).forEach(function(e){var t=(0,r._)(e,2),n=t[0],a=t[1];u.has(a.category)||u.set(a.category,{category:a.category,settings:{}}),u.get(a.category).settings[n]=a}),(0,a.jsx)(a.Fragment,{children:Array.from(u.values()).map(function(e){return(0,a.jsx)(i.Fragment,{children:(0,a.jsxs)("div",{className:"column",children:[(0,a.jsx)("h1",{className:c()["settings-group-title"],children:e.category}),Object.entries(e.settings).map(function(e){var t=(0,r._)(e,2),i=t[0],u=t[1];return(0,a.jsx)(y,{objKey:i,data:u,changeVolume:n,update:l},i)})]})},e.category)})})}},9218:function(e,t,n){"use strict";var r=n(5893),a=n(7294);t.Z=(0,a.memo)(function(e){var t=e.children;return(0,r.jsx)(r.Fragment,{children:t})},function(e,t){var n,r,a,i;return(null===(n=t.children)||void 0===n?void 0:n.key)!==null||(null===(r=e.children)||void 0===r?void 0:r.key)!==null?(null===(a=e.children)||void 0===a?void 0:a.key)===(null===(i=t.children)||void 0===i?void 0:i.key):void 0!==e.children})},7114:function(e){e.exports={"switch-wrapper":"Switch_switch-wrapper__sXQsI","switch-inner":"Switch_switch-inner__vcK6i","switch-inner-on":"Switch_switch-inner-on__BXwhZ"}},7600:function(e){e.exports={"instrument-picker":"Settings_instrument-picker__W7kvG",select:"Settings_select__Io3_h","settings-group-title":"Settings_settings-group-title__JR_FV","settings-row":"Settings_settings-row__N_hAE",invalid:"Settings_invalid__H_Utp","settings-input":"Settings_settings-input__keTYI","settings-input-button":"Settings_settings-input-button__CV1P1"}}}]);