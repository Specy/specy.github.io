(this["webpackJsonpreact-gota"]=this["webpackJsonpreact-gota"]||[]).push([[0],{43:function(e,s,t){},44:function(e,s,t){},45:function(e,s,t){"use strict";t.r(s);var n=t(9),a=t.n(n),i=t(13),r=t(2),c=t(3),o=t(5),h=t(4),d=t(0),l=t(1),p=t(14),k=t.n(p),u=t(15),j=t.n(u),m=(t(43),t(44),t(6)),v=function(e){Object(o.a)(t,e);var s=Object(h.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=s.call(this,e)).toggleName=function(){n.setState({nameShown:!0})},n.hideName=function(){n.setState({nameShown:!1})},n.state={skin:n.props.skin,nameShown:!1},"gallery"===n.props.type?n.addSkin=n.props.addSkin.bind(Object(m.a)(n),n.state.skin):n.removeSkin=n.props.removeSkin.bind(Object(m.a)(n),n.state.skin),n}return Object(c.a)(t,[{key:"render",value:function(){var e=this.props.skin,s="https://gamedata.gota.io/skins/"+e+".png",t="gallery"===this.props.type;return Object(d.jsxs)("div",{className:"skinWrapper",onMouseOver:this.toggleName,onMouseLeave:this.hideName,onClick:this.toggleName,children:[Object(d.jsx)("div",{className:this.state.nameShown?"skinText":"skinText hidden",children:e}),Object(d.jsx)("img",{src:s,className:"skinImg"}),Object(d.jsxs)("div",{className:"buttonsHolder",children:[Object(d.jsx)("button",{className:t?"skinBtn green":"hidden",onClick:this.addSkin,children:"+"}),Object(d.jsx)("button",{className:t?"hidden":"skinBtn red ",onClick:this.removeSkin,children:"-"})]})]})}}]),t}(l.Component),b=t(16),S=function(e){Object(o.a)(t,e);var s=Object(h.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=s.call(this,e)).getPage=function(){var e=n.state.skins;if(0!==n.props.skins.length)if(n.props.skins.length<n.skinsPerPage)n.setState({skins:n.props.skins,search:n.props.search});else if(n.props.dontRandomize)n.setState({skins:n.props.skins,search:n.props.search});else{for(var s=0;s<n.skinsPerPage;s++){var t=Math.floor(Math.random()*n.props.skins.length);n.currentIndex++;var a=n.props.skins[t];e.push(a)}n.setState({skins:e,search:n.props.search})}},n.skinsPerPage=40,n.state={skins:[],search:""},n.currentIndex=0,n}return Object(c.a)(t,[{key:"render",value:function(){var e=this;return 0===this.state.skins.length&&this.getPage(),this.state.search!==this.props.search&&this.getPage(),Object(d.jsx)("div",{id:this.props.elId,className:"skinsHolder  scroll-bar",children:Object(d.jsx)(b.a,{className:"infiniteScroll",dataLength:this.state.skins.length,hasMore:!0,next:this.getPage,scrollableTarget:this.props.elId,children:this.state.skins.map((function(s,t){return Object(d.jsx)(v,{skin:s,type:e.props.type,addSkin:e.props.addSkin,removeSkin:e.props.removeSkin},t)}))})})}}]),t}(l.Component),g=function(e){Object(o.a)(t,e);var s=Object(h.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=s.call(this,e)).updateSeries=function(e){n.setState({currentSearch:e.target.value})},n.state={currentSearch:""},n}return Object(c.a)(t,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"view",children:[Object(d.jsx)("div",{className:"series",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("input",{type:"text",className:"searchInput wm-L1",placeholder:"Skin name",onBlur:this.updateSeries}),Object(d.jsx)("button",{className:"searchBtn wm-L1",onClick:this.props.search.bind(this,this.state.currentSearch),children:"\ud83d\udd0d"})]})}),Object(d.jsx)(S,{dontRandomize:!0,search:this.props.searchName,elId:"gallery",skins:this.props.skins,addSkin:this.props.addSkin,type:this.props.type,removeSkin:this.props.removeSkin})]})}}]),t}(l.Component),O=function(e){Object(o.a)(t,e);var s=Object(h.a)(t);function t(e){return Object(r.a)(this,t),s.call(this,e)}return Object(c.a)(t,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"view",children:[Object(d.jsx)("div",{className:"title",children:"Gallery"}),Object(d.jsx)(S,{elId:"gallery",search:"",skins:this.props.skins,addSkin:this.props.addSkin,type:this.props.type,removeSkin:this.props.removeSkin})]})}}]),t}(l.Component),x=function(e){Object(o.a)(t,e);var s=Object(h.a)(t);function t(e){return Object(r.a)(this,t),s.call(this,e)}return Object(c.a)(t,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"view",children:[Object(d.jsx)("div",{className:"title",children:"Your skins"}),Object(d.jsx)(S,{elId:"savedSkins",search:"",type:this.props.type,addSkin:this.props.addSkin,skins:this.props.skins,removeSkin:this.props.removeSkin})]})}}]),t}(l.Component),f=function(e){Object(o.a)(t,e);var s=Object(h.a)(t);function t(){var e;Object(r.a)(this,t),(e=s.call(this)).getSkins=Object(i.a)(a.a.mark((function s(){var t;return a.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,fetch("https://cors-anywhere.herokuapp.com/https://gamedata.gota.io/skinData.php").then((function(e){return e.json()}));case 2:t=s.sent,t=JSON.parse(t.names),e.setState({skins:t,loading:!1}),console.log("Fetched skins");case 6:case"end":return s.stop()}}),s)}))),e.addskin=function(s,t){var n=e.state.savedSkins;n.includes(s)||(n.push(s),localStorage.setItem("savedSkins",JSON.stringify(n)),e.setState({savedSkins:n}))},e.removeSkin=function(s){var t=e.state.savedSkins,n=t.indexOf(s);t.splice(n,1),localStorage.setItem("savedSkins",JSON.stringify(t)),e.setState({skins:t})},e.search=function(s){for(var t=[s],n=1;n<500;n++)t.push(s+n);t=t.filter((function(s){return e.state.skins.includes(s)})),e.setState({searchSkin:s,searchSkins:t})},e.changePageIndex=function(s){e.setState({pageIndex:s})};var n=null===localStorage.getItem("savedSkins")?[]:JSON.parse(localStorage.getItem("savedSkins"));return e.state={loading:!0,skins:[],pageIndex:0,savedSkins:n,searchSkin:"",searchSkins:[]},e.getSkins(),e}return Object(c.a)(t,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"navbar dm-L3",children:[Object(d.jsx)("button",{className:"navItem dm-L1",onClick:this.changePageIndex.bind(this,0),children:"Discover"}),Object(d.jsx)("button",{className:"navItem dm-L1",onClick:this.changePageIndex.bind(this,1),children:"Gallery"}),Object(d.jsx)("button",{className:"navItem dm-L1",onClick:this.changePageIndex.bind(this,2),children:"Your skins"})]}),this.state.loading?Object(d.jsx)("div",{className:"title text-white",children:"Loading..."}):Object(d.jsx)("div",{}),Object(d.jsxs)(j.a,{index:this.state.pageIndex,onChangeIndex:this.changePageIndex,className:"slider",children:[Object(d.jsx)(g,{skins:this.state.searchSkins,search:this.search,searchName:this.state.searchSkin,addSkin:this.addskin,type:"gallery"}),Object(d.jsx)(O,{skins:this.state.skins,addSkin:this.addskin,type:"gallery"}),Object(d.jsx)(x,{skins:this.state.savedSkins,removeSkin:this.removeSkin,type:"savedSkins"})]})]})}}]),t}(l.Component);k.a.render(Object(d.jsx)(f,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.08c0db62.chunk.js.map