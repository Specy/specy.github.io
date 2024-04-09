(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2510],{66611:function(e,r,t){"use strict";t.d(r,{Z:function(){return FuzzySearch}});let Helper=class Helper{static getDescendantProperty(e,r,t=[]){let n,s,o,a,i,c;if(r){if(-1===(o=r.indexOf("."))?n=r:(n=r.slice(0,o),s=r.slice(o+1)),null!=(a=e[n])){if(s||"string"!=typeof a&&"number"!=typeof a){if("[object Array]"===Object.prototype.toString.call(a))for(i=0,c=a.length;i<c;i++)Helper.getDescendantProperty(a[i],s,t);else s&&Helper.getDescendantProperty(a,s,t)}else t.push(a)}}else t.push(e);return t}};let FuzzySearch=class FuzzySearch{constructor(e=[],r=[],t={}){Array.isArray(r)||(t=r,r=[]),this.haystack=e,this.keys=r,this.options=Object.assign({caseSensitive:!1,sort:!1},t)}search(e=""){if(""===e)return this.haystack;let r=[];for(let t=0;t<this.haystack.length;t++){let n=this.haystack[t];if(0===this.keys.length){let t=FuzzySearch.isMatch(n,e,this.options.caseSensitive);t&&r.push({item:n,score:t})}else for(let t=0;t<this.keys.length;t++){let s=Helper.getDescendantProperty(n,this.keys[t]),o=!1;for(let t=0;t<s.length;t++){let a=FuzzySearch.isMatch(s[t],e,this.options.caseSensitive);if(a){o=!0,r.push({item:n,score:a});break}}if(o)break}}return this.options.sort&&r.sort((e,r)=>e.score-r.score),r.map(e=>e.item)}static isMatch(e,r,t){e=String(e),r=String(r),t||(e=e.toLocaleLowerCase(),r=r.toLocaleLowerCase());let n=FuzzySearch.nearestIndexesFor(e,r);return!!n&&(e===r?1:n.length>1?2+(n[n.length-1]-n[0]):2+n[0])}static nearestIndexesFor(e,r){let t=r.split(""),n=[],s=FuzzySearch.indexesOfFirstLetter(e,r);return s.forEach((r,s)=>{let o=r+1;n[s]=[r];for(let r=1;r<t.length;r++){let a=t[r];if(-1===(o=e.indexOf(a,o))){n[s]=!1;break}n[s].push(o),o++}}),!!(n=n.filter(e=>!1!==e)).length&&n.sort((e,r)=>1===e.length?e[0]-r[0]:(e=e[e.length-1]-e[0])-(r=r[r.length-1]-r[0]))[0]}static indexesOfFirstLetter(e,r){let t=r[0];return e.split("").map((e,r)=>e===t&&r).filter(e=>!1!==e)}}},89802:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/error",function(){return t(35781)}])},77275:function(e,r,t){"use strict";t.d(r,{k:function(){return DefaultPage}});var n=t(72253),s=t(14932),o=t(85893),a=t(62926);function DefaultPage(e){var r=e.excludeMenu,t=e.children,i=e.className,c=e.style,l=e.menu,u=e.cropped,d=void 0===u||u?c:(0,s._)((0,n._)({},c),{padding:0});return(0,o.jsxs)("div",{className:"default-page "+(void 0===i?"":i),style:d,children:[(!(void 0!==r&&r)||!l)&&(0,o.jsx)(a.O,{}),l,(0,o.jsx)("main",{className:"default-content appear-on-mount",children:t})]})}},62926:function(e,r,t){"use strict";t.d(r,{O:function(){return SimpleMenu}});var n=t(11010),s=t(97582),o=t(85893),a=t(52091),i=t(66826),c=t(19807),l=t(10398),u=t(11163),d=t(41664),h=t.n(d),g=t(5336);function SimpleMenu(e){var r,t=e.children,d=e.className,p=(0,u.useRouter)();return(0,o.jsx)("div",{className:"menu-wrapper "+(void 0===d?"":d),children:(0,o.jsxs)("div",{className:"menu menu-visible",style:{justifyContent:"flex-end"},children:[c.U.hasNavigated&&(0,o.jsx)(i.s,{style:{marginBottom:"auto"},onClick:function(){p.back()},ariaLabel:"Go back",children:(0,o.jsx)(a.x_l,{className:"icon"})}),void 0===t?void 0:t,(0,o.jsx)(h(),{href:"https://discord.gg/Arsf65YYHq",target:"_blank",rel:"noreferrer",title:"Go to discord",onClick:(r=(0,n._)(function(e){return(0,s.Jh)(this,function(r){switch(r.label){case 0:return e.preventDefault(),[4,(0,g.jH)("You are leaving the app to go to discord, do you want to continue?")];case 1:if(!r.sent())return[2];return window.open("https://discord.gg/Arsf65YYHq","_blank"),[2]}})}),function(e){return r.apply(this,arguments)}),children:(0,o.jsx)(i.s,{ariaLabel:"Go to discord",children:(0,o.jsx)(a.j2d,{className:"icon"})})}),(0,o.jsx)(i.s,{onClick:l.I.open,ariaLabel:"Open home menu",style:{border:"solid 0.1rem var(--secondary)"},children:(0,o.jsx)(a.xng,{className:"icon"})})]})})}},35781:function(e,r,t){"use strict";t.r(r),t.d(r,{ErrorPage:function(){return ErrorPage}});var n=t(11010),s=t(91309),o=t(97582),a=t(85893),i=t(52091),c=t(5336),l=t(1062),u=t(37870),d=t(90337),h=t(28796),g=t(41072),p=t(10681),f=t(26427),m=t(36443),y=t(77275),x=t(18208),_=t(51705),w=t(73634),v=t(49894),b=t(72744),j=t(76708),k=t.n(j);function ErrorPage(){var e,r,t=(0,s._)((0,g.n)(),1)[0],i=(0,v.ih)(b.J.logs),j=(e=(0,n._)(function(e,r){return(0,o.Jh)(this,function(t){switch(t.label){case 0:return[4,(0,c.jH)("Are you sure you want to delete the song: "+e)];case 1:if(!t.sent())return[3,3];return[4,p.k.removeSong(r)];case 2:t.sent(),t.label=3;case 3:return[2]}})}),function(r,t){return e.apply(this,arguments)}),S=(r=(0,n._)(function(){return(0,o.Jh)(this,function(e){switch(e.label){case 0:return[4,(0,c.jH)("Are you sure you want to delete ALL SONGS?")];case 1:if(!e.sent())return[3,3];return[4,p.k._DANGEROUS_CLEAR_ALL_SONGS()];case 2:e.sent(),e.label=3;case 3:return[2]}})}),function(){return r.apply(this,arguments)});return(0,a.jsxs)(y.k,{className:k()["error-page"],children:[(0,a.jsx)(m.V,{text:"Error",description:"View the errors that happened in the app to send bug reports and to try to recover your songs"}),(0,a.jsxs)("div",{style:{textAlign:"center"},children:["If you unexpectedly see this page it means an error has occoured. Here you can download or delete your songs, if one caused an error, delete it. If you need help, join our",(0,a.jsx)("a",{href:"https://discord.gg/Arsf65YYHq",target:"_blank",rel:"noreferrer",style:{margin:"0 0.4rem",color:"var(--accent)"},children:"Discord"}),"and send the log file below."]}),(0,a.jsxs)("div",{className:k()["error-buttons-wrapper"],children:[(0,a.jsx)(h.J,{onClick:function(){localStorage.removeItem(l.iC+"_Composer_Settings"),localStorage.removeItem(l.iC+"_Main_Settings"),u.kg.success("Settings have been reset")},children:"Reset settings"}),(0,a.jsx)(h.J,{onClick:S,children:"Delete all songs"})]}),(0,a.jsx)("div",{className:k()["error-songs-wrapper"],children:(0,a.jsx)(d.G,{SongComponent:SongRow,songs:t,componentProps:{deleteSong:j,download:function(e){try{var r=e.name,t=x.v.parseSong(e),n=["Sky"===l.iC&&(t instanceof _.l||t instanceof w.M)?t.toOldFormat():t.serialize()];f.bV.downloadSong(n,"".concat(r,".").concat(l.iC.toLowerCase(),"sheet")),u.kg.success("Song downloaded")}catch(e){console.error(e),u.kg.error("Error downloading song")}}}})}),(0,a.jsxs)("div",{className:"row space-between",style:{margin:"1rem 0"},children:[(0,a.jsx)("div",{style:{fontSize:"2rem"},children:"Error logs"}),(0,a.jsx)(h.J,{onClick:function(){var e=b.J.logs.map(function(e){return e.message});f.bV.downloadObject(e,"".concat(l.iC,"_logs"))},children:"Download logs"})]}),(0,a.jsx)("div",{className:k()["error-logs"],children:i.map(function(e,r){return(0,a.jsx)("pre",{className:"".concat(k()["error-log-row"]," row"),children:e.message},r)})})]})}function SongRow(e){var r=e.data,t=e.deleteSong,s=e.download;return(0,a.jsxs)("div",{className:"song-row",children:[(0,a.jsx)("div",{className:"song-name",children:r.name}),(0,a.jsxs)("div",{className:"song-buttons-wrapper",children:[(0,a.jsx)("button",{className:"song-button",onClick:(0,n._)(function(){var e;return(0,o.Jh)(this,function(t){switch(t.label){case 0:return[4,x.v.getOneSerializedFromStorable(r)];case 1:if(!(e=t.sent()))return[2,u.kg.error("Could not find song")];return s(e),[2]}})}),"aria-label":"Download song ".concat(r.name),children:(0,a.jsx)(i.aBF,{})}),(0,a.jsx)("button",{className:"song-button",onClick:function(){return t(r.name,r.id)},"aria-label":"Delete song ".concat(r.name),children:(0,a.jsx)(i.Xm5,{color:"#ed4557"})})]})]})}r.default=ErrorPage},76708:function(e){e.exports={"error-page":"ErrorPage_error-page__YGVCe","error-buttons-wrapper":"ErrorPage_error-buttons-wrapper__yxRcD","error-logs":"ErrorPage_error-logs__nx3gA","error-log-row":"ErrorPage_error-log-row__tqst4","error-songs-wrapper":"ErrorPage_error-songs-wrapper__4v2PG"}}},function(e){e.O(0,[6441,9774,2888,179],function(){return e(e.s=89802)}),_N_E=e.O()}]);