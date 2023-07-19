(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{3544:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var i=n(1309),a=n(5893),r=n(5055),s=n(7114),u=n.n(s);function o(e){var t=e.checked,n=e.onChange,s=e.styleOuter,o=(0,i._)((0,r.F)(),1)[0];return(0,a.jsx)("button",{className:u()["switch-wrapper"],onClick:function(){return n(!t)},style:s||{},"aria-label":t?"Switch to off":"Switch to on",children:(0,a.jsx)("div",{className:"".concat(u()["switch-inner"]," ").concat(t?u()["switch-inner-on"]:""),style:{backgroundColor:(t?o.get("accent"):o.layer("primary",.4)).toString()}})})}},6880:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var i=n(2253),a=n(1309),r=n(5893),s=n(5829),u=n(7294),o=n(8949);function c(e){var t,n,c,l=e.children,h=e.page,d=e.style,m=(0,a._)((n=(t=(0,a._)((0,u.useState)(s.f6),2))[0],c=t[1],(0,u.useEffect)(function(){return(0,o.N7)(s.f6.state.other,function(){c((0,i._)({},s.f6))})},[]),[n,c]),1)[0];return(0,r.jsx)("div",{className:"app bg-image",style:(0,i._)({backgroundImage:"url(".concat(m.getOther("backgroundImage"+h),")")},d),children:l})}},781:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var i=n(5893);function a(e){var t=e.title,n=e.current,a=e.children,r=e.id;return(0,i.jsxs)("div",{className:n===r?"menu-panel menu-panel-visible":"menu-panel",children:[t&&(0,i.jsx)("div",{className:"menu-title",children:t}),(0,i.jsx)("div",{className:"panel-content-wrapper",children:a})]})}},1866:function(e,t,n){"use strict";n.d(t,{A:function(){return y}});var i=n(1309),a=n(5893),r=n(7294),s=n(2253),u=n(4932),o=n(3544),c=n(7600),l=n.n(c);function h(e){var t=e.data,n=e.volume,i=e.onVolumeChange,r=e.onVolumeComplete,o=e.onInstrumentPick,c=e.objectKey,h=e.instrument,d=e.theme,m=[],p=[],v=!0,g=!1,f=void 0;try{for(var x,y=t.options[Symbol.iterator]();!(v=(x=y.next()).done);v=!0){var _=x.value;_.startsWith("SFX")?p.push(_):m.push(_)}}catch(e){g=!0,f=e}finally{try{v||null==y.return||y.return()}finally{if(g)throw f}}return(0,a.jsxs)("div",{className:l()["instrument-picker"],children:[(0,a.jsx)("select",{value:h,style:{textAlign:"left",paddingLeft:"0.4rem",backgroundImage:"url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24' fill='".concat(d.getText("primary").hex().replace("#","%23"),"'><path d='M0 0h24v24H0z' fill='none'/><path d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z'/></svg>\")")},className:l().select,onChange:function(e){o({key:c,data:(0,u._)((0,s._)({},t),{value:e.target.value})})},children:0===p.length?(0,a.jsx)(a.Fragment,{children:m.map(function(e){return(0,a.jsx)("option",{value:e,children:e.replace("-"," ")},e)})}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("optgroup",{label:"Instruments",children:m.map(function(e){return(0,a.jsx)("option",{value:e,children:e.replace("-"," ")},e)})}),(0,a.jsx)("optgroup",{label:"SFX",children:p.map(function(e){return(0,a.jsx)("option",{value:e,children:e.replace("-"," ").replace("SFX_","")},e)})})]})}),(0,a.jsx)("input",{type:"range",min:1,max:100,value:n,onChange:function(e){i(Number(e.target.value))},onPointerUp:function(){r({key:c,value:n})}})]})}var d=n(9583);function m(e){var t=e.data,n=e.value,i=e.onChange,r=e.onComplete,o=e.objectKey,c=function(e){if("number"===t.type){var i=Number(n)+(t.increment||0)*e;!t.threshold||i<t.threshold[0]||i>t.threshold[1]||r({key:o,data:(0,u._)((0,s._)({},t),{value:i})})}};return(0,a.jsxs)("div",{className:l()["settings-input"],children:["number"===t.type&&(0,a.jsx)("button",{onClick:function(){return c(-1)},className:l()["settings-input-button"],style:{marginRight:"0.15rem"},"aria-label":"Decrement",children:(0,a.jsx)(d.iFH,{})}),(0,a.jsx)("input",{type:t.type,value:n,placeholder:t.placeholder||"",onBlur:function(){t.value!==n&&r({key:o,data:(0,u._)((0,s._)({},t),{value:n})})},onChange:function(e){var n=e.target;if("number"===t.type){var a=Number(n.value);if(n.value="",!t.threshold||a<t.threshold[0]||a>t.threshold[1])return;i(a)}else i(n.value)},"aria-label":t.name}),"number"===t.type&&(0,a.jsx)("button",{onClick:function(){return c(1)},className:l()["settings-input-button"],style:{marginLeft:"0.15rem"},"aria-label":"Increment",children:(0,a.jsx)(d.wEH,{})})]})}function p(e){var t=e.data,n=e.value,i=e.onChange,r=e.objectKey;return(0,a.jsx)("input",{type:"range",min:t.threshold[0],max:t.threshold[1],step:t.step,value:n,onChange:function(e){i({key:r,data:(0,u._)((0,s._)({},t),{value:Number(e.target.value)})})}})}function v(e){var t=e.value,n=e.onChange,i=e.data,r=e.objectKey,o=e.children,c=e.theme,l=e.type;return(0,a.jsx)("select",{value:t,onChange:function(e){n({key:r,data:(0,u._)((0,s._)({},i),{value:"number"==typeof l?parseInt(e.target.value):e.target.value})}),e.target.blur()},style:{backgroundImage:"url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24' fill='".concat(c.getText("primary").hex().replace("#","%23"),"'><path d='M0 0h24v24H0z' fill='none'/><path d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z'/></svg>\")")},children:o})}var g=n(5055),f=n(1014),x=(0,r.memo)(function(e){var t=e.data,n=e.update,c=e.objKey,d=e.changeVolume,x=(0,i._)((0,r.useState)(t.value),2),y=x[0],_=x[1],b=(0,i._)((0,r.useState)("instrument"===t.type?t.volume:0),2),k=b[0],j=b[1],w=(0,i._)((0,g.F)(),1)[0],N=t.type;return(0,r.useEffect)(function(){_(t.value)},[t.value]),(0,a.jsxs)("div",{className:l()["settings-row"],style:{backgroundColor:w.layer("menu_background",.15).toString()},children:[(0,a.jsxs)("div",{className:(0,f.h)(t.tooltip),style:{flex:"1"},children:[t.name,t.tooltip&&(0,a.jsx)(f.u,{style:{width:"12rem"},children:t.tooltip})]}),"select"===N&&(0,a.jsx)(v,{theme:w,type:t.options[0],onChange:n,value:t.value,objectKey:c,data:t,children:t.options.map(function(e){return(0,a.jsx)("option",{value:e,children:e},e)})}),("number"===N||"text"===N)&&(0,a.jsx)(m,{data:t,value:y,onChange:_,onComplete:n,objectKey:c}),"checkbox"===N&&(0,a.jsx)(o.Z,{checked:y,onChange:function(e){"checkbox"===N&&n({key:c,data:(0,u._)((0,s._)({},t),{value:e})})}}),"slider"===N&&(0,a.jsx)(p,{objectKey:c,data:t,value:y,onChange:n}),"instrument"===N&&d&&(0,a.jsx)(h,{theme:w,volume:k,onInstrumentPick:n,onVolumeChange:j,onVolumeComplete:d,instrument:t.value,data:t,objectKey:c})]})},function(e,t){return e.data.value===t.data.value&&e.data.volume===t.data.volume&&e.update===t.update});function y(e){var t=e.settings,n=e.changeVolume,s=e.onUpdate,u=new Map;return Object.entries(t).forEach(function(e){var t=(0,i._)(e,2),n=t[0],a=t[1];u.has(a.category)||u.set(a.category,{category:a.category,settings:{}}),u.get(a.category).settings[n]=a}),(0,a.jsx)(a.Fragment,{children:Array.from(u.values()).map(function(e){return(0,a.jsx)(r.Fragment,{children:(0,a.jsxs)("div",{className:"column",children:[(0,a.jsx)("h1",{className:l()["settings-group-title"],children:e.category}),Object.entries(e.settings).map(function(e){var t=(0,i._)(e,2),r=t[0],u=t[1];return(0,a.jsx)(x,{objKey:r,data:u,changeVolume:n,update:s},r)})]})},e.category)})})}},9218:function(e,t,n){"use strict";var i=n(5893),a=n(7294);t.Z=(0,a.memo)(function(e){var t=e.children;return(0,i.jsx)(i.Fragment,{children:t})},function(e,t){var n,i,a,r;return(null===(n=t.children)||void 0===n?void 0:n.key)!==null||(null===(i=e.children)||void 0===i?void 0:i.key)!==null?(null===(a=e.children)||void 0===a?void 0:a.key)===(null===(r=t.children)||void 0===r?void 0:r.key):void 0!==e.children})},1185:function(e,t,n){"use strict";n.d(t,{z:function(){return o}});var i=n(1010),a=n(8564),r=n(7582),s=n(5839),u=n(7557),o=function(){function e(t){(0,a._)(this,e),this.instruments=[],this.audioInstruments=[],this.basePitch="C",this.basePitch=t}var t=e.prototype;return t.setBasePitch=function(e){this.basePitch=e},t.destroy=function(){this.audioInstruments.forEach(function(e){u.n.disconnect(e.endNode),e.dispose()})},t.syncInstruments=function(e){return this.instruments=e,this.loadInstruments()},t.loadInstruments=function(){var e=this;return(0,i._)(function(){var t,n;return(0,r.Jh)(this,function(a){var o;return t=e.instruments,(n=e.audioInstruments).splice(t.length).forEach(function(e){u.n.disconnect(e.endNode),e.dispose()}),[2,Promise.all(t.map((o=(0,i._)(function(e,t){var i,a,o;return(0,r.Jh)(this,function(r){switch(r.label){case 0:if(void 0!==n[t])return[3,2];return i=new s.ZP(e.name),n[t]=i,[4,i.load(u.n.getAudioContext())];case 1:return r.sent(),u.n.connect(i.endNode),i.changeVolume(e.volume),[2,i];case 2:if(n[t].name!==e.name)return[3,3];return n[t].changeVolume(e.volume),[2,n[t]];case 3:return a=n[t],u.n.disconnect(a.endNode),a.dispose(),o=new s.ZP(e.name),n[t]=o,[4,o.load(u.n.getAudioContext())];case 4:return r.sent(),u.n.connect(o.endNode),o.changeVolume(e.volume),[2,o];case 5:return[2]}})}),function(e,t){return o.apply(this,arguments)})))]})})()},t.playNoteOfInstrument=function(e,t,n){var i=this.instruments[e];this.audioInstruments[e].play(t,null!=n?n:i.pitch||this.basePitch)},t.playNotesOfInstrument=function(e,t,n){var i=this;t.forEach(function(t){return i.playNoteOfInstrument(e,t,n)})},e}()},8010:function(e,t,n){"use strict";n.d(t,{v:function(){return r}});var i=n(8564),a=n(2267),r=function(){function e(t,n){var a=this;(0,i._)(this,e),this.nextTick=0,this.maxFpsInterval=0,this.deltaTime=0,this.raf=0,this.duration=0,this.previousTickTime=0,this.tick=function(){var e=Date.now();a.deltaTime=e-a.nextTick,a.deltaTime>=a.maxFpsInterval&&(a.nextTick=e-a.deltaTime%a.maxFpsInterval,a.callback(a.elapsed,e-a.previousTickTime),a.previousTickTime=e),a.elapsed=e-a.startTime,a.elapsed<a.duration&&(a.raf=setTimeout(a.tick,8))},this.callback=t,this.startTime=0,this.elapsed=0,this.maxFps=n,this.maxFpsInterval=1e3/n}var t=e.prototype;return t.changeMaxFps=function(e){this.maxFps=e,this.maxFpsInterval=1e3/e},t.setCallback=function(e){this.callback=e},t.start=function(e){this.stop(),this.startTime=Date.now(),this.nextTick=Date.now(),this.previousTickTime=0,this.duration=null!=e?e:Number.MAX_SAFE_INTEGER,this.tick()},t.stop=function(){clearTimeout(this.raf)},(0,a._)(e,[{key:"fps",get:function(){return this.maxFps}}]),e}()},7114:function(e){e.exports={"switch-wrapper":"Switch_switch-wrapper__sXQsI","switch-inner":"Switch_switch-inner__vcK6i","switch-inner-on":"Switch_switch-inner-on__BXwhZ"}},7600:function(e){e.exports={"instrument-picker":"Settings_instrument-picker__W7kvG",select:"Settings_select__Io3_h","settings-group-title":"Settings_settings-group-title__JR_FV","settings-row":"Settings_settings-row__N_hAE",invalid:"Settings_invalid__H_Utp","settings-input":"Settings_settings-input__keTYI","settings-input-button":"Settings_settings-input-button__CV1P1"}}}]);