(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4910],{65164:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/backup",function(){return n(85215)}])},42474:function(e,t,n){"use strict";n.d(t,{k:function(){return o}});var r=n(85893),a=n(701),l=n(67294);function o(e){var t;let{options:n,selected:o,onChange:i}=e,s=(0,l.useRef)(null),c=n.find(e=>e.value===o),[d,u]=(0,l.useState)({width:0,left:0});return(0,l.useEffect)(()=>{var e;let t=null===(e=s.current)||void 0===e?void 0:e.querySelectorAll("button"),r=n.findIndex(e=>e.value===o);if(!t||r<0)return;let a=t[r].getBoundingClientRect(),l=s.current.getBoundingClientRect();u({width:a.width-3,left:a.left-l.left})},[s,n,o]),(0,r.jsxs)("div",{className:"multiple-option-slider",ref:s,style:{border:"solid 0.1rem ".concat(null!==(t=null==c?void 0:c.color)&&void 0!==t?t:"var(--accent)")},children:[n.map(e=>(0,r.jsx)("button",{onClick:()=>i(e.value),className:e===c?"multiple-options-selected":"",children:(0,a.kC)(e.text)},e.value)),(0,r.jsx)("div",{className:"multiple-option-slider-overlay",style:{width:"".concat(d.width,"px"),left:"".concat(d.left,"px"),backgroundColor:null==c?void 0:c.color}})]})}},87481:function(e,t,n){"use strict";n.d(t,{G:function(){return l}});var r=n(85893),a=n(67294);function l(e){let{children:t,onPick:n,style:l={},as:o,multiple:i=!1,onError:s}=e,c=(0,a.useRef)(null),d=(0,a.useCallback)(async e=>{var t;if(null===e.target.files)return;let r=Array.from(null!==(t=e.target.files)&&void 0!==t?t:[]);if("file"===o)return n(r.map(e=>({data:e,file:e})));let a=r.map(e=>new Promise((t,n)=>{let r=new FileReader;try{r.addEventListener("loadend",function(){try{let n=r.result;t({data:"json"===o?JSON.parse(n):n,file:e})}catch(e){n(e)}},{once:!0}),("text"===o||"json"===o)&&r.readAsText(e),"buffer"===o&&r.readAsArrayBuffer(e)}catch(e){n(e)}}));try{let e=await Promise.all(a);n(e)}catch(e){console.error(e),null==s||s(e,r)}null!==c.current&&(c.current.value="")},[o,n,s]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("input",{type:"file",style:{display:"none"},ref:c,onChange:d,multiple:i}),(0,r.jsx)("div",{onClick:()=>{var e;return null===(e=c.current)||void 0===e?void 0:e.click()},style:l,children:t})]})}},99962:function(e,t,n){"use strict";n.d(t,{V:function(){return s},q:function(){return c}});var r=n(85893),a=n(40456),l=n.n(a),o=n(69887),i=n(701);function s(e){let{style:t,className:n,opacity:a,children:s}=e,{visible:c}=(0,o.X)();return(0,r.jsx)("div",{className:(0,i.cn)("".concat(l().menu," ").concat(n),[c,l()["menu-visible"]]),style:{opacity:a,...t},children:s})}let c=(0,n(67294).forwardRef)(function(e,t){let{children:n,className:a,style:i,current:s,open:c,setOpen:d,setCurrent:u,visible:f,setVisible:g}=e;return(0,r.jsx)(o.p.Provider,{value:{current:null!=s?s:"",setCurrent:null!=u?u:e=>{},open:null!=c&&c,setOpen:null!=d?d:()=>{},visible:null==f||f,setVisible:null!=g?g:()=>{}},children:(0,r.jsx)("div",{className:"".concat(l()["menu-wrapper"]," ").concat(a),ref:t,style:i,children:n})})})},23441:function(e,t,n){"use strict";n.d(t,{d:function(){return o}});var r=n(85893),a=n(9008),l=n.n(a);function o(e){let{text:t,description:n,image:a,children:o}=e;return(0,r.jsxs)(l(),{children:[(0,r.jsx)("title",{children:t}),n&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("meta",{name:"description",content:n}),(0,r.jsx)("meta",{property:"og:description",content:n})]}),a&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("meta",{name:"image",content:a}),(0,r.jsx)("meta",{property:"og:image",content:a})]}),o]})}},2816:function(e,t,n){"use strict";n.d(t,{k:function(){return l}});var r=n(85893),a=n(420);function l(e){let{excludeMenu:t=!1,children:n,className:l="",style:o,menu:i,cropped:s=!0,contentStyle:c}=e,d=s?o:{...o,padding:0},u=i||!t;return(0,r.jsxs)("div",{className:"default-page "+l,style:{"--left-mobile-padding":u?"5rem":"1rem","--right-mobile-padding":u?"1.4rem":"1rem",...d},children:[i||!t&&(0,r.jsx)(a.O,{}),(0,r.jsx)("main",{className:"default-content appear-on-mount",style:c,children:n})]})}},420:function(e,t,n){"use strict";n.d(t,{O:function(){return m}});var r=n(85893),a=n(78773),l=n(54135),o=n(9827),i=n(40569),s=n(11163),c=n(41664),d=n.n(c),u=n(31602),f=n(99962),g=n(67421);function m(e){let{children:t,className:n,style:c}=e,{t:m}=(0,g.$G)(["menu","home"]),_=(0,s.useRouter)();return(0,r.jsx)(f.q,{className:n,style:c,children:(0,r.jsxs)(f.V,{style:{justifyContent:"flex-end"},children:[o.b.hasNavigated&&(0,r.jsx)(l.j,{style:{marginBottom:"auto"},onClick:()=>{_.back()},ariaLabel:m("go_back"),children:(0,r.jsx)(a.x_l,{className:"icon"})}),t,(0,r.jsx)(d(),{href:"https://discord.gg/Arsf65YYHq",target:"_blank",rel:"noreferrer",title:"Discord",onClick:async e=>{e.preventDefault(),await (0,u.jH)(m("home:about_to_leave_warning",{to:"discord"}))&&window.open("https://discord.gg/Arsf65YYHq","_blank")},children:(0,r.jsx)(l.j,{ariaLabel:"Discord",children:(0,r.jsx)(a.j2d,{className:"icon"})})}),(0,r.jsx)(l.j,{onClick:i.I.open,ariaLabel:m("open_home_menu"),style:{border:"solid 0.1rem var(--secondary)"},children:(0,r.jsx)(a.xng,{className:"icon"})})]})})}},24104:function(e,t,n){"use strict";n.d(t,{n:function(){return o}});var r=n(67294),a=n(68949),l=n(6340);function o(){let[e,t]=(0,r.useState)(l.k.songs);return(0,r.useEffect)(()=>(function(e){let t=(0,a.N7)(l.k.songs,()=>{e([...l.k.songs])});return e([...l.k.songs]),t})(e=>{t(e)}),[]),[e]}},85215:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var r=n(85893),a=n(48043),l=n(2816),o=n(23441),i=n(78773),s=n(67294),c=n(85565),d=n(35656),u=n(40398),f=n(26176),g=n(31602),m=n(53179),_=n(89867),p=n(16913),h=n(17544),k=n(87481),x=n(701),w=n(24104),j=n(32362),y=n(19180),v=n(6340),b=n(80219),N=n(41664),C=n.n(N),L=n(93778),S=n(42474),A=n(92634),E=n(11090),P=n(82860),J=n(67421),R=n(19116);function O(){let{t:e}=(0,J.$G)(["backup","home","logs"]),[t]=(0,A.F)(),n={marginRight:"0.3rem",marginLeft:"-0.4rem"},[N]=(0,w.n)(),O=(0,j.ih)(y.N.themes);(0,R.o)("backup");let[T,F]=(0,s.useState)("json");async function X(){m.kg.showPill("".concat(e("validating_songs"),"..."));let t=await c.v.getSongs(),n=[];for(let r of t)try{c.v.parseSong(r)}catch(t){console.error(t),n.push(r),m.kg.error(e("error_validating_song",{song_name:null==r?void 0:r.name}))}return n.length>0&&!await (0,g.cJ)(e("confirm_after_songs_validation_error"))?null:(m.kg.hidePill(),[...t])}async function z(){m.kg.showPill("".concat(e("validating_folders"),"..."));let t=[],n=await f.b.getFolders();for(let r of n)try{p.g.deserialize(r)}catch(n){console.error(n),t.push(r),m.kg.error(e("error_validating_folder",{folder_name:null==r?void 0:r.name}))}return t.length>0&&!await (0,g.cJ)(e("confirm_after_folders_validation_error"))?null:(m.kg.hidePill(),[...n])}async function V(){m.kg.showPill("".concat(e("validating_themes"),"..."));let t=await d.a.getThemes();for(let e of t);return m.kg.hidePill(),[...t]}async function B(t){for(let r of t)try{let e=Array.isArray(r.data)?r.data:[r.data];await _.bV.importAndLog(e)}catch(t){var n;console.error(t),m.kg.error(e("logs:error_importing_file",{file_name:null==r?void 0:null===(n=r.file)||void 0===n?void 0:n.name}))}}async function G(){return"delete"!==await (0,g.cJ)(e("confirm_delete_songs_step_1"))?m.kg.warn(e("action_cancelled")):(await (0,x.gw)(200),await (0,g.jH)(e("confirm_delete_songs_step_2")))?void(await v.k._DANGEROUS_CLEAR_ALL_SONGS(),await u.p._DANGEROUS_CLEAR_ALL_FOLDERS(),m.kg.success(e("deleted_all_songs_notice"))):m.kg.warn(e("action_cancelled"))}async function H(){return"delete"!==await (0,g.cJ)(e("confirm_delete_themes_step_1"))?m.kg.warn(e("action_cancelled")):(await (0,x.gw)(200),await (0,g.jH)(e("confirm_delete_themes_step_2")))?void(await y.N._DANGEROUS_CLEAR_ALL_THEMES(),m.kg.success(e("deleted_all_themes_notice"))):m.kg.warn(e("action_cancelled"))}async function q(t,n){if("json"===T)_.bV.downloadFiles(t,n);else try{m.kg.showPill("".concat(e("zipping_files"),"..."));let r=await new Promise((e,r)=>{let a=t.map(e=>{let t=_.bV.getUnknownFileExtensionAndName(e);if(!t)return["unknown".concat(Math.floor(1e3*Math.random()),".").concat(e.type),(0,L.TD)(JSON.stringify(e))];let{name:n,extension:r}=t,a=Array.isArray(e)?e:[e];return["".concat(n,".").concat(r),(0,L.TD)(JSON.stringify(a))]});(0,L.$R)({["".concat(n)]:(0,L.TD)(JSON.stringify(t)),individualFiles:Object.fromEntries(a)},(t,a)=>{if(t)return r(t);_.bV.downloadBlob(new Blob([a]),"".concat(n,".zip")),e(a)})});return m.kg.hidePill(),r}catch(e){throw m.kg.hidePill(),e}}return(0,s.useEffect)(()=>()=>m.kg.hidePill(),[]),(0,r.jsxs)(l.k,{children:[(0,r.jsx)(o.d,{text:e("home:backup_name"),description:"Manage the backups in the app, download or import songs, themes, or all of them"}),(0,r.jsx)("h1",{style:{fontSize:"1.8rem"},children:e("transfer_from_other_domain")}),(0,r.jsxs)(E.X,{align:"center",gap:"1rem",style:{paddingLeft:"1.5rem"},children:[(0,r.jsx)("div",{children:e("transfer_data_notice")}),(0,r.jsx)(C(),{href:"/transfer",style:{marginLeft:"1rem"},children:(0,r.jsx)(a.J,{cssVar:"accent",style:{gap:"0.2rem"},children:e("transfer")})})]}),(0,r.jsxs)(E.X,{align:"center",gap:"1rem",style:{margin:"1rem 0",marginTop:"2rem"},children:[(0,r.jsx)("div",{style:{fontSize:"1.8rem"},children:e("backup_as")}),(0,r.jsx)(S.k,{options:[{value:"zip",color:t.getValue("accent").toString(),text:"zip"},{value:"json",color:t.getValue("accent").toString(),text:"json"}],selected:T,onChange:F})]}),(0,r.jsx)("div",{style:{paddingLeft:"1.5rem"},children:e("backup_advice")}),(0,r.jsxs)(E.X,{gap:"0.5rem",style:{marginTop:"1rem",paddingLeft:"1.5rem"},children:[(0,r.jsxs)(a.J,{tooltip:e("download_all_backup_tooltip"),className:"flex-centered",onClick:async()=>{let t=await X();if(!t)return;let n=await z();if(!n)return;let r=await V();if(!r)return;let a=[...t,...n,...r];if(0===a.length)return m.kg.warn(e("no_items_to_backup"));try{await q(a,"".concat(D(),"-all.").concat(h.iC.toLowerCase(),"backup")),m.kg.success(e("backup_downloaded")),b.j.setLastBackupWarningTime(Date.now())}catch(t){m.kg.error(e("backup_download_error"))}},children:[(0,r.jsx)(i.ZJh,{style:n}),e("download_all_backup")]}),(0,r.jsxs)(a.J,{tooltip:e("download_songs_tooltip"),className:"flex-centered",onClick:async()=>{let t=await X();if(!t)return;let n=await z();if(!n)return;let r=[...t,...n];if(0===r.length)return m.kg.warn(e("logs:no_songs_to_backup"));try{await q(r,"".concat(D(),"-songs.").concat(h.iC.toLowerCase(),"backup")),m.kg.success(e("downloaded_songs_notice")),b.j.setLastBackupWarningTime(Date.now())}catch(t){m.kg.error(e("backup_download_error")),console.error(t)}},children:[(0,r.jsx)(i.ZJh,{style:n}),e("download_songs_backup")]}),(0,r.jsxs)(a.J,{tooltip:e("download_themes_tooltip"),className:"flex-centered",onClick:async()=>{let t=await V();if(t){if(0===t.length)return m.kg.warn(e("no_themes_to_backup"));try{await q(t,"".concat(D(),"-themes.").concat(h.iC.toLowerCase(),"backup")),m.kg.success(e("downloaded_themes_notice"))}catch(t){m.kg.error(e("backup_download_error")),console.error(t)}}},children:[(0,r.jsx)(i.ZJh,{style:n}),e("download_themes_backup")]})]}),(0,r.jsx)("h1",{style:{fontSize:"1.8rem"},children:e("import_backup")}),(0,r.jsx)("div",{style:{paddingLeft:"1.5rem"},children:e("import_backup_description")}),(0,r.jsx)(E.X,{align:"center",children:(0,r.jsx)(k.G,{onPick:B,as:"json",onError:()=>m.kg.error(e("error_reading_file")),children:(0,r.jsxs)(a.J,{className:"flex-centered",tooltip:e("import_backup_tooltip"),style:{marginTop:"1rem",backgroundColor:"var(--accent)",color:"var(--accent-text)",padding:"0.8rem"},children:[(0,r.jsx)(i.Xur,{style:{...n,fontSize:"1rem",marginRight:"0.5rem"}}),e("import_backup")]})})}),(0,r.jsx)(P.s,{justify:"center",padding:"1rem",style:{flex:"1"},children:(0,r.jsxs)(P.s,{style:{width:"fit-content"},children:[(0,r.jsxs)("span",{children:[N.length," ",e("songs")]}),(0,r.jsxs)("span",{children:[O.length," ",e("themes")]})]})}),(0,r.jsx)("h1",{style:{fontSize:"1.8rem"},children:e("delete_data")}),(0,r.jsx)("div",{style:{paddingLeft:"1.5rem"},children:e("delete_data_description")}),(0,r.jsxs)(E.X,{gap:"0.5rem",style:{marginTop:"1rem",paddingLeft:"1.5rem"},children:[(0,r.jsxs)(a.J,{className:"flex-centered",tooltip:e("delete_songs_and_folders_tooltip"),tooltipPosition:"top",style:{backgroundColor:"var(--red-bg)",color:"var(--red-text)"},onClick:G,children:[(0,r.jsx)(i.Xm5,{style:n}),e("delete_songs_and_folders")]}),(0,r.jsxs)(a.J,{className:"flex-centered",tooltip:e("delete_themes_tooltip"),tooltipPosition:"top",style:{backgroundColor:"var(--red-bg)",color:"var(--red-text)"},onClick:H,children:[(0,r.jsx)(i.Xm5,{style:n}),e("delete_themes")]})]})]})}function D(){let e=new Date;return"".concat(e.getFullYear(),"-").concat(e.getMonth(),"-").concat(e.getDate())}}},function(e){e.O(0,[3778,2888,9774,179],function(){return e(e.s=65164)}),_N_E=e.O()}]);