(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9195],{67801:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return s(97454)}])},97454:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return U}});var o=s(85893),n=s(2816),a=s(17544),i=s(10075),r=s(41664),h=s.n(r),c=s(46892),l=s(82446);function d(e){let{gap:t,rows:s,columns:n,style:a,className:i,children:r}=e;return(0,o.jsx)("div",{style:{display:"grid",gap:t,gridTemplateColumns:n,gridTemplateRows:s,...a},className:i,children:r})}var u=s(82860),p=s(74161),m=s.n(p),y=s(76724),b=s(30772),g=s(16879),f=s(49352),x=s(23441),j=s(11090),w=s(67294),v=s(72057),k=s(49315),I=s(12293),M=s(65123),_=s.n(M),D=s(701);let T={left:{left:0},right:{right:0,transform:"translateX(100%)"},center:{left:"50%",transform:"translateX(-50%)"}};function q(e){let{items:t,onChange:s,children:n,title:a,position:i="left",style:r,className:h}=e,[c,l]=(0,w.useState)(!1),d=(0,I.ZP)(()=>l(!1),{active:c});return(0,o.jsxs)("div",{ref:d,className:"".concat(h," ").concat(_()["combo-box-wrapper"]),style:r,children:[(0,o.jsx)("button",{onClick:()=>l(!c),className:"".concat(_()["combo-box-title"]),children:a}),c&&(0,o.jsx)("div",{className:"".concat(_()["combo-box-items"]),style:T[i],children:t.map((e,o)=>n(e,()=>{s(t.map((e,t)=>o===t?{...e,selected:!e.selected}:e))}))})]})}function L(e){let{children:t,onClick:s,item:n,style:a,className:i}=e;return(0,o.jsx)("button",{onClick:()=>s(n.item),style:a,className:(0,D.cn)("".concat(_()["combo-box-item"]," ").concat(i),[n.selected,_()["combo-box-item-selected"]]),children:t})}function S(e){let{children:t}=e;return(0,o.jsx)("div",{className:_()["combo-box-title-item"],children:t})}var G=s(59839),A=s(12625),W=s(52810),C=s(19116),N=s(86286),P=s(19302),F=s(5323);let B=[N._add_to_home_screen,A._easyplay1sMetadata,f._composerTutorialMetadata,g._playerTutorialMetadata,b._midiTransposeMetadata,c._midiDeviceMetadata,y._aiTransposeMetadata,G._howUseVsrgComposer].sort((e,t)=>new Date(t.createdAt).getTime()-new Date(e.createdAt).getTime()),V=Array.from(new Set(B.flatMap(e=>e.tags)).values());function U(){(0,C.o)("blog");let{IS_MOBILE:e}=(0,F.Z)(),[t,s]=(0,w.useState)(()=>V.map(e=>({item:e,selected:!1}))),i=(0,w.useMemo)(()=>t.every(e=>!e.selected)?B:B.filter(e=>t.some(t=>t.selected&&e.tags.includes(t.item))),[t]),r=(0,P.a)("(orientation: portrait)")&&e;return(0,o.jsxs)(n.k,{excludeMenu:r,contentStyle:{gap:"1rem"},children:[(0,o.jsx)(x.d,{text:"".concat(a.iC," Music Nightly Blog"),description:"Welcome to ".concat(a.iC," Music Nightly blog! Here there will be written guides, news and info about the app!")}),r&&(0,o.jsxs)(v.n3,{style:{borderRadius:"0.5rem",padding:"1rem 1.5rem"},children:[(0,o.jsx)(h(),{href:"/",children:"Home"}),(0,o.jsx)(h(),{href:"/",children:"Player"}),(0,o.jsx)(h(),{href:"/composer",children:"Composer"})]}),(0,o.jsxs)(u.s,{gap:"2rem",children:[(0,o.jsxs)(l.h,{style:{fontSize:"2.2rem",textAlign:"center"},children:["Welcome to ",a.iC," Music Nightly blog!"]}),(0,o.jsx)(W.D,{alwaysVisible:!0}),(0,o.jsxs)(u.s,{gap:"1rem",children:[(0,o.jsxs)(j.X,{justify:"between",align:"center",children:[(0,o.jsx)(l.h,{children:"Posts"}),(0,o.jsx)(q,{items:t,title:(0,o.jsx)(S,{children:"Select tags"}),onChange:s,style:{zIndex:3},children:(e,t)=>(0,o.jsx)(L,{item:e,onClick:t,children:e.item},e.item)})]}),(0,o.jsx)(d,{columns:r?"1fr":"repeat(2, 1fr)",gap:"1rem",children:i.map(e=>(0,o.jsx)(Y,{metadata:e},e.relativeUrl))})]})]})]})}function Y(e){let{metadata:t}=e,s=(0,v.E_)(t.relativeUrl),n=(0,w.useMemo)(()=>new Intl.DateTimeFormat(Intl.DateTimeFormat().resolvedOptions().locale).format(t.createdAt),[t.createdAt]);return(0,o.jsx)(h(),{href:"/blog/posts/".concat(t.relativeUrl),children:(0,o.jsxs)(i.Z,{className:"".concat(m()["blog-card"]," ").concat(s?"":m()["blog-card-new"]),style:{height:"100%"},children:[(0,o.jsxs)(l.h,{type:"h2",className:"".concat(m()["blog-card-title"]),style:{marginBottom:"-1.5rem"},children:[(0,o.jsx)("div",{className:"".concat(m()["blog-card-image"]),style:{backgroundImage:"url(".concat(t.image,")")}}),(0,o.jsx)("div",{className:"".concat(m()["blog-card-title-content"]),children:t.title}),t.author&&(0,o.jsx)("div",{style:{position:"absolute",top:"0.5rem",right:"0.5rem"},children:(0,o.jsx)(k.Q,{author:t.author,size:"2rem",noName:!0})})]}),(0,o.jsx)(u.s,{padding:"1rem",style:{paddingTop:"0.5rem"},className:"".concat(m()["blog-card-description"]),children:t.description}),(0,o.jsxs)(j.X,{justify:"between",align:"end",style:{padding:"0.5rem"},flex1:!0,children:[(0,o.jsx)(j.X,{style:{fontSize:"0.8rem"},children:(0,o.jsx)(k.I,{tags:t.tags})}),(0,o.jsx)("div",{suppressHydrationWarning:!0,children:n})]})]})})}},86286:function(e,t,s){"use strict";s.r(t),s.d(t,{_add_to_home_screen:function(){return w},default:function(){return v}});var o=s(85893),n=s(72057),a=s(82446),i=s(45305),r=s(17544),h=s(67294),c=s(49717),l=s.n(c),d=s(78773),u=s(10075),p=s(82860);function m(e){var t;let{headerContent:s,children:n,defaultExpanded:a,expanded:i,onExpanded:r,contentStyle:c,headerStyle:m,className:y,style:b,headerBackground:g="primary",contentBackground:f="var(--background-layer-10)",contentColor:x="var(--background-text)",borderColor:j="secondary"}=e,[w,v]=(0,h.useState)(null!==(t=null!=i?i:a)&&void 0!==t&&t);return(0,h.useEffect)(()=>{void 0!==i&&v(i)},[i]),(0,o.jsxs)(u.Z,{radius:"0.4rem",className:"".concat(l()["expandable-container"]," ").concat(y),background:"var(--".concat(g,")"),style:{border:"solid 0.1rem var(--".concat(j,"-layer-10)"),...b},children:[(0,o.jsxs)("button",{className:"".concat(l()["expandable-container-header"]),style:m,onClick:()=>{let e=!w;v(e),null==r||r(e)},children:[(0,o.jsx)("div",{className:"".concat(l()["expandable-container-arrow"]),children:(0,o.jsx)(d.Dli,{style:{transition:"0.3s"},className:"".concat(w?"transform rotate-90":"")})}),s]}),w&&(0,o.jsx)(p.s,{className:"".concat(l()["expandable-container-content"]),style:{borderTop:"0.1rem solid var(--".concat(j,"-layer-10)"),backgroundColor:f,color:x,...c},children:n})]})}var y=s(32362),b=s(54810),g=s(48043),f=s(67421),x=s(11090),j=s(30757);let w={title:"⬇️ Add the app to the home screen",tags:["Guide"],relativeUrl:"add-to-home-screen",image:r.GW+"/manifestData/main.webp",description:"How to add the website to the home screen on your phone or computer.",createdAt:new Date("2024/05/22"),author:n.Gx};function v(){let{t:e}=(0,f.$G)("home"),{installEvent:t}=(0,y.$d)(b.D.state);return(0,o.jsx)(n.O4,{metadata:w,children:(0,o.jsxs)("div",{children:[(0,o.jsx)(i.fL,{children:"Adding the app to the home screen will make it behave more like an actual native app. It will go full screen and create an icon to quickly access the app. In certain browsers (like chrome or chromium based) it will also allow more features, like the ability to open the files created by the app."}),t&&(0,o.jsxs)(i.fL,{children:['Your browser allows for the app to be quickly installed, just press this button and then press the "install" button that will pop up in your browser.',(0,o.jsxs)(g.J,{onClick:b.D.install,cssVar:"accent",style:{marginLeft:"1rem"},children:[(0,o.jsx)(d.aBF,{})," ",e("install_app")]})]}),(0,o.jsx)(a.h,{type:"h2",margin:"1rem 0",children:"How to install the app in different devices"}),(0,o.jsxs)(p.s,{gap:"0.8rem",children:[(0,o.jsx)(m,{headerContent:(0,o.jsx)(a.h,{type:"h2",children:"iPhone / iPad"}),children:(0,o.jsxs)(x.X,{gap:"0.5rem",children:[(0,o.jsx)(j.c,{src:r.GW+"/assets/blog/add-to-home-screen/ios1.webp",alt:"First step to download the app",width:"50%"}),(0,o.jsx)(j.c,{src:r.GW+"/assets/blog/add-to-home-screen/ios2.webp",alt:"Second step to download the app",width:"50%"})]})}),(0,o.jsxs)(m,{headerContent:(0,o.jsx)(a.h,{type:"h2",children:"PC / Mac"}),children:[(0,o.jsx)(i.fL,{children:"If you are on Mac, i suggest using the app with chrome or chromium based browsers instead of safari."}),(0,o.jsx)(j.c,{src:r.GW+"/assets/blog/add-to-home-screen/desktop.webp",alt:"Second step to download the app",width:"100%"})]}),(0,o.jsx)(m,{headerContent:(0,o.jsx)(a.h,{type:"h2",children:"Android"}),children:(0,o.jsx)(x.X,{justify:"center",flex1:!0,children:(0,o.jsx)(j.c,{src:r.GW+"/assets/blog/add-to-home-screen/android.webp",alt:"Second step to download the app",width:"50%"})})})]})]})})}},46892:function(e,t,s){"use strict";s.r(t),s.d(t,{_midiDeviceMetadata:function(){return h},default:function(){return c}});var o=s(85893),n=s(72057),a=s(82446),i=s(84455),r=s(45305);let h={title:"\uD83C\uDFB9 Use a MIDI keyboard/device",tags:["Guide"],relativeUrl:"connect-midi-device",image:s(17544).GW+"/assets/blog/zen-keyboard.webp",description:"How to connect a MIDI keyboard/device to the app, and how to use it in the player and composer.",createdAt:new Date("2024/03/19"),author:n.Gx};function c(){return(0,o.jsx)(n.O4,{metadata:h,children:(0,o.jsxs)("div",{children:[(0,o.jsx)(r.fL,{children:"Since vesion V2.3 there has been the possibility to connect a MIDI keyboard to the app. This functionality is available everywhere except on Safari browsers."}),(0,o.jsx)(a.h,{margin:"1rem 0",children:"How to connect the MIDI device"}),(0,o.jsx)(r.fL,{children:'To connect the MIDI keyboard to the app, get the appropriate cable to connect it to your device. If you are on android you might have to select the "midi" option in the USB connection settings.'}),(0,o.jsxs)(r.fL,{children:["Once connected, you must map your keyboard to the app layout, to do this visit the ",(0,o.jsx)(i.F,{href:"/keybinds",children:"keybinds"})," page. A list of all connected devices will appear, you can now start to map the MIDI keys to the app's keys. A default preset is provided, in case it does not match your keyboard, you can create a new preset and assign the keys as you wish."]}),(0,o.jsx)(a.h,{margin:"1rem 0",children:"Create a new MIDI preset"}),(0,o.jsx)(r.fL,{children:'To create a new midi preset click the "create new preset" button, you will be asked how to name it, once written, a new empty preset will be created. You now have to press the button of the note in the app that you want to start mapping, and then press the corresponding key on your keyboard. This will register that note to the MIDI key.'}),(0,o.jsx)(r.fL,{children:"You can also assign other keys of your MIDI keyboard to shortcuts in the composer, to map it, follow the same technique as the notes, click the button of the shortcut you want to map, and then press the corresponding key on your keyboard."}),(0,o.jsx)(a.h,{margin:"1rem 0",children:"Use your phone/pc as a MIDI keyboard"}),(0,o.jsxs)(r.fL,{children:["Using the app, you can turn your phone or pc into a MIDI keyboard, using the ",(0,o.jsx)(i.F,{href:"/zen-keyboard",children:"Zen Keyboard"}),", anytime you press a note in the app, a MIDI event will be triggered. This keyboard will use the same layout as the default layout."]}),(0,o.jsxs)(r.fL,{children:["This means you can connect your (android) phone to your PC via an USB cable, select the MIDI USB settings on your phone, and select it in the ",(0,o.jsx)(i.F,{href:"/keybinds",children:"keybinds"})," page."]}),(0,o.jsx)(r.fL,{children:"You can use this to make it easier to compose songs on PC, you can use the phone to select/deselect notes, and the computer for the rest of the composer features. Another way to use it, is to record songs on your pc by playing it on the phone, or practicing a song."})]})})}},12625:function(e,t,s){"use strict";s.r(t),s.d(t,{_easyplay1sMetadata:function(){return c},default:function(){return l}});var o=s(85893),n=s(72057),a=s(82446),i=s(45305),r=s(17544),h=s(30757);let c={title:"\uD83C\uDFB9 EASYPLAY 1s",tags:["Product"],relativeUrl:"easyplay-1s",image:r.GW+"/assets/blog/easyplay.webp",description:"The EASYPLAY 1s, the perfect keyboard for Sky Music Nightly",createdAt:new Date("2024/04/24"),author:n.Gx};function l(){return(0,o.jsxs)(n.O4,{metadata:c,children:[(0,o.jsx)(a.h,{children:"What it is"}),(0,o.jsxs)(i.fL,{children:["The EASYPLAY 1s is a keyboard that uses the same layout as Sky Music Nightly, and you can use it in the app to help you to compose songs and to learn them. ",(0,o.jsx)(i.N7,{external:!0,href:"https://summertones-1.kckb.me/18287a61",children:"You can find the keyboard on kickstarter here"}),"."]}),(0,o.jsx)(i.N7,{href:"https://summertones-1.kckb.me/18287a61",children:(0,o.jsx)(h.c,{src:r.GW+"/assets/blog/easyplay.webp",alt:"Easyplay 1S",height:"15rem"})}),(0,o.jsx)(a.h,{children:"The features"}),(0,o.jsx)(i.fL,{children:"It is a MIDI keyboard which uses the same layout as Sky Music Nightly, the main features are:"}),(0,o.jsxs)(i.gw,{children:[(0,o.jsx)(i.qs,{children:"20 instruments, most of which can be sustained"}),(0,o.jsx)(i.qs,{children:"4 octaves of pitch change"}),(0,o.jsx)(i.qs,{children:"Adjustable volume through a speaker and an headphone jack"}),(0,o.jsx)(i.qs,{children:"MIDI support through USB-C"})]}),(0,o.jsx)(i.fL,{children:"It's made out of translucent black plastic with replaceable keycaps and rubber pads to prevent slipping."}),(0,o.jsx)(a.h,{children:"Demo video"}),(0,o.jsx)(i.t_,{src:"https://www.youtube.com/embed/l64Qdm-FpVU?si=NmbU0nVSrLlWTsBh"}),(0,o.jsxs)(i.fL,{children:["If you are interested, ",(0,o.jsx)(i.N7,{external:!0,href:"https://summertones-1.kckb.me/18287a61",children:"you can find the keyboard on kickstarter here"}),"."]})]})}},16879:function(e,t,s){"use strict";s.r(t),s.d(t,{_playerTutorialMetadata:function(){return m},default:function(){return y}});var o=s(85893),n=s(72057),a=s(84455),i=s(82446),r=s(30757),h=s(17544),c=s(45305),l=s(70560),d=s(5323),u=s(32362),p=s(7374);let m={title:"\uD83C\uDFB5 How to use the player",relativeUrl:"how-to-use-player",tags:["Guide"],image:h.GW+"/assets/blog/help-player.webp",description:"This is a guide to help you learn how to use the player to learn, record and play songs!",createdAt:new Date("2024/03/19"),author:n.Gx};function y(){let{IS_MOBILE:e}=(0,d.Z)(),[t]=(0,u.Kq)(p.z5.getShortcutMap("player"));return(0,o.jsxs)(n.O4,{metadata:m,children:[(0,o.jsxs)(c.fL,{children:["The player is meant to help you record a song by hand or practice an existing song with the two practice tools. ",(0,o.jsx)("br",{}),"You can also import sheets made in the app / record audio of the keyboard and play freely, you also have a metronome to help you with the tempo. ",(0,o.jsx)("br",{}),"If you want a simpler keyboard you can use the ",(0,o.jsx)(a.F,{href:"/zen-keyboard",children:"Zen keyboard"})," which has all the instruments and pitch settings, but bigger keyboard and simpler interface.",(0,o.jsx)("br",{}),"In the settings you can change the instrument, pitch, reverb, volume, keyboard size, etc... If you have a MIDI keyboard, you can connect it to your device, follow the ",(0,o.jsx)(a.F,{href:"/blog/connect-midi-device",children:"MIDI device "})]}),(0,o.jsx)(i.h,{margin:"1rem 0",children:"How to use the player"}),"Genshin"!==h.iC&&(0,o.jsx)(c.fL,{children:"The images below are from the genshin version of the app, but the functionality is the same"}),(0,o.jsx)(r.c,{src:h.GW+"/assets/blog/help-player.webp",alt:"Player UI"}),(0,o.jsxs)(c.Md,{children:[(0,o.jsx)(c.qs,{children:"Pressing this button will start an audio recording, everything you play from that moment will be recorded, then downloaded as an audio file "}),(0,o.jsx)(c.qs,{children:"When you start practicing or playing a song, this bar on the left will tell you the progress of the song. You can move the start and end markers to set where to make the song/practice start and end"}),(0,o.jsx)(c.qs,{children:"This selects the playback speed of the song, useful when you are trying to play along with the approaching circles learning tool"}),(0,o.jsx)(c.qs,{children:"Together with point (2), this will restart the song from the selected start point"}),(0,o.jsx)(c.qs,{children:"When in practice mode, this is a note that you should press now. When this note appears, it will fade in red, when the fade in finishes, it will indicate the moment when you should press the note to stay in tempo"}),(0,o.jsx)(c.qs,{children:"This indicator tells you that this note will be pressed after you finished pressing all the current red notes."}),(0,o.jsx)(c.qs,{children:"This opens the song library, it's a small library made years ago by the sky music community"}),(0,o.jsx)(c.qs,{children:"View your songs"}),(0,o.jsx)(c.qs,{children:"Opens the menu of the app where you can go to all the other pages"}),(0,o.jsx)(c.qs,{children:"Visual sheet of the song"})]}),(0,o.jsx)(r.c,{src:h.GW+"/assets/blog/help-player-2.webp",alt:"Player menu help"}),(0,o.jsxs)(c.fL,{children:['When you open the "song menu", you will be shown this window. Your songs will be split between recorded and composed songs. The recorded songs are the ones which were recorded by hand, the composed songs are the ones which were composed using the ',(0,o.jsx)(a.F,{href:"/composer",children:"composer"}),". Here you can select the song to play/practice. Or download, change, rename and move between your folders."]}),(0,o.jsxs)(c.Md,{children:[(0,o.jsx)(c.qs,{children:"This is a song that you have saved in the app, by pressing the song name, you will start playing the song."}),(0,o.jsx)(c.qs,{children:"Pressing this button will start the song practice, the notes will become red, showing which notes you have to press in that moment. This should be used to learn a song, you can select sections to replay by using the notes selection bar on the right."}),(0,o.jsx)(c.qs,{children:"Pressing this button will start the second kind of practice, the approaching circles, circles will appear coming towards the note, once they reach it, you should press the note. This is meant to be used once you are more comfortable with the song, it is harder to play compared to the practice mode, but will test your muscle memory."}),(0,o.jsx)(c.qs,{children:"Opens the menu for that song, showing options to rename, move to a folder, edit, download and delete the song."}),(0,o.jsx)(c.qs,{children:"By clicking this you can select in which folder to move this song."}),(0,o.jsx)(c.qs,{children:"Those two are the download buttons, the first one is the suggested one to share it with other people, or to backup your songs. The second one downloads the song as a MIDI song, this will convert it to MIDI, but it will cause some information to be lost, as MIDI cannot store some information that is needed by the app, use it only if you need to import it in another app which is not this one."})]}),(0,o.jsx)(i.h,{margin:"1rem 0",children:"Player settings"}),(0,o.jsx)(r.c,{src:h.GW+"/assets/blog/help-player-3.webp",alt:"Player settings"}),(0,o.jsxs)(c.Md,{children:[(0,o.jsxs)(c.qs,{children:[(0,o.jsx)(c.yL,{children:"Instrument"}),": This is the instrument of the keyboard, you can change the volume"]}),(0,o.jsxs)(c.qs,{children:[(0,o.jsx)(c.yL,{children:"Pitch"}),": This is the pitch of the instrument"]}),(0,o.jsxs)(c.qs,{children:[(0,o.jsx)(c.yL,{children:"BPM"}),": The BPM which will be saved when you record the song, also used for the metronome"]}),(0,o.jsxs)(c.qs,{children:[(0,o.jsx)(c.yL,{children:"Auto sync the song's instrument and pitch"}),": When selecting a song to play, change the current instrument and pitch to match the song"]}),(0,o.jsxs)(c.qs,{children:[(0,o.jsx)(c.yL,{children:"Metronome beats"}),": Set how many beats to use in the metronome, every nth beats there will be a different sound played"]}),(0,o.jsxs)(c.qs,{children:[(0,o.jsx)(c.yL,{children:"Metronome volume"}),": The volume of the metronome"]}),(0,o.jsxs)(c.qs,{children:[(0,o.jsx)(c.yL,{children:"Reverb (cave mode)"}),": Sets if the instrument should use reverb or not."]}),(0,o.jsxs)(c.qs,{children:[(0,o.jsx)(c.yL,{children:"Note name type"}),": Sets the kind of text to show inside of the note"]}),(0,o.jsxs)(c.qs,{children:[(0,o.jsx)(c.yL,{children:"Keyboard size"}),": Scales the size of the keyboard up/down"]}),(0,o.jsxs)(c.qs,{children:[(0,o.jsx)(c.yL,{children:"Keyboard vertical position"}),": Pushes the keyboard up or down"]}),(0,o.jsxs)(c.qs,{children:[(0,o.jsx)(c.yL,{children:"Approach rate"}),': When playing the "approaching circles" mode, this is how many ms the note will take from when it appears, to when it should be pressed.']}),(0,o.jsxs)(c.qs,{children:[(0,o.jsx)(c.yL,{children:"Note animation"}),": Show an animation when you press the note"]}),(0,o.jsxs)(c.qs,{children:[(0,o.jsx)(c.yL,{children:"Show visual sheet"}),": Show the visual sheet above the keyboard. This helps to visualize the notes that are about to be played. Useful both in practice and playback of a song."]})]}),!e&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.h,{children:"Player shortcuts"}),(0,o.jsxs)(c.fL,{children:["The player has some shortcuts you can use, if you want to change them, go to the ",(0,o.jsx)(a.F,{href:"/keybinds",children:"keybinds page"})]}),(0,o.jsx)(l.A,{shortcuts:t,style:{marginTop:"1rem"}})]})]})}},59839:function(e,t,s){"use strict";s.r(t),s.d(t,{_howUseVsrgComposer:function(){return m},default:function(){return y}});var o=s(85893),n=s(7374),a=s(5323),i=s(32362),r=s(70560),h=s(72057),c=s(45305),l=s(82446),d=s(30757),u=s(84455),p=s(17544);let m={title:"\uD83E\uDD41 How to use the VSRG composer",author:h.Gx,description:"Learn how to use the VSRG composer to create beatmaps of a song",createdAt:new Date("2024/03/19"),tags:["Guide"],image:"/assets/blog/help-vsrg-composer.webp",relativeUrl:"how-to-use-vsrg-composer"};function y(){let e=n.z5.getVsrgKeybinds(6),{IS_MOBILE:t}=(0,a.Z)(),[s]=(0,i.Kq)(n.z5.getShortcutMap("vsrg_composer"));return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(h.O4,{metadata:m,children:[(0,o.jsxs)(c.fL,{children:['This is a composer to create beatmaps for the songs you have in the app. You select a song you want to create the beatmap for, and then place notes in the canvas. Each note you place can also play a sound, you can even fully compose a song in the VSRG composer (VSRG means "Vertically Scrolling Rhythm Game"). Once created, you or whoever has the beatmap, can play the song with the ',(0,o.jsx)(u.F,{href:"/vsrg-player",children:"VSRG player"}),". You will have to press the notes in time to earn more points."]}),(0,o.jsx)(l.h,{margin:"1rem 0",children:"How to setup a beatmap"}),(0,o.jsx)(c.fL,{children:"When creating a beatmap, you first have to choose which song the beatmap is for, and set some settings related to it. Let's start off exploring all the settings in the VSRG composer!"}),(0,o.jsx)(d.c,{src:p.GW+"/assets/blog/help-vsrg-composer-2.webp",alt:"VSRG composer settings"}),(0,o.jsxs)(c.Md,{children:[(0,o.jsxs)(c.qs,{children:[(0,o.jsx)(c.yL,{children:"Keys"}),": This is the number of tracks you want the beatmap to have, choose this wisely as changing it after you already made most of the beatmap might be difficult. A beatmap with less tracks might be easier to play, but harder to compose."]}),(0,o.jsxs)(c.qs,{children:[(0,o.jsx)(c.yL,{children:" BPM "}),': The bpm of the beatmap, it is used to give you guiding "columns" where to place notes, in the composer you can also select the "snap points" from 1/1 to 1/16 of the bpm. The BPM of the beatmap should either be the same of the song, or 1/2th or 1/4th of it']}),(0,o.jsxs)(c.qs,{children:[(0,o.jsx)(c.yL,{children:"Base pitch"}),": This is the base pitch of the instruments of the beatmap, you can use the instruments to play sounds when a note is pressed."]}),(0,o.jsxs)(c.qs,{children:[(0,o.jsx)(c.yL,{children:"Difficulty"}),": This is just a number that will be used for the points in your beatmap, it's your choice what difficulty to give."]}),(0,o.jsxs)(c.qs,{children:[(0,o.jsx)(c.yL,{children:"Vertical Editor"}),": With this you can decide if either having the editor be oriented vertically or horizontally, it doesn't affect the beatmap."]}),(0,o.jsxs)(c.qs,{children:[(0,o.jsx)(c.yL,{children:"Max FPS"}),': When you "play" the beatmap inside the editor, it moves at a certain FPS, high values might make the editor look smoother, but give a bit of inaccuracies in the audio, find a value that is best for your device, it doesn\'t affect the beatmap.']}),(0,o.jsxs)(c.qs,{children:[(0,o.jsx)(c.yL,{children:"Snap scroll to snap point"}),': When this is enabled, once you release your mouse/finger from moving the canvas, it will "snap" to the closest snap point it can find.']}),(0,o.jsxs)(c.qs,{children:[(0,o.jsx)(c.yL,{children:"Auto save changes"}),": Auto saves the changes to a song every 5 edits."]}),(0,o.jsxs)(c.qs,{children:[(0,o.jsx)(c.yL,{children:"Background song"}),": Here you can select which of your songs will be used as a background for the beatmap, look further for more info about this section."]})]}),(0,o.jsx)(c.fL,{children:'When you select a song for a beatmap, you can decide which layers to include in the final song, one good reason for this is to mute a specific layer that you are going to replace with the beatmap instrument, making the song seem more interctive. You can also "show" the notes of the layers inside of the editor, to more easily guide you where to place notes'}),(0,o.jsx)(d.c,{src:"/assets/blog/help-vsrg-composer-3.webp",alt:"VSRG song settings"}),(0,o.jsxs)(c.Md,{children:[(0,o.jsx)(c.qs,{children:"Deselects this song from the beatmap"}),(0,o.jsx)(c.qs,{children:"Hides the layer in the editor"}),(0,o.jsx)(c.qs,{children:"Mutes the layer"})]}),(0,o.jsx)(l.h,{margin:"1rem 0",children:"How to use the composer"}),(0,o.jsx)(c.fL,{children:'Once finished setting up the song and settings, you can start actually composing the beatmap. To do actions on the canvas you can click the boxes, you have 3 actions you can do, add a "tap" hit object, add a "held" hit object, or remove one. You can select which of the 3 actions you want to do by pressing the selector on the bottom left.'}),(0,o.jsx)(d.c,{src:"/assets/blog/help-vsrg-composer.webp",alt:"tutorial for the vsrg composer page"}),(0,o.jsxs)(c.Md,{children:[(0,o.jsx)(c.qs,{children:"This is the currently selected hit object, you can drag it around and change the notes that will be played when that note is pressed."}),(0,o.jsx)(c.qs,{children:"This is a held hit object, the person who will play the song will have to hold the button instead of just tapping it."}),(0,o.jsx)(c.qs,{children:"This is the timeline, you will be shown the notes of the song you selected so that you can more easily place hit objects in your beatmap."}),(0,o.jsx)(c.qs,{children:"This is the layer selection, a hit object is going to be part of a layer, each layer can have a different color and a different instrument. When you want to create a hit object of that layer, select the layer and then press on the canvas to create it."}),(0,o.jsx)(c.qs,{children:"You can assign notes to a hit object, you need to select a hit object and then will be able to assign notes to it. Whenever the hit object will be pressed, the sound will be played."}),(0,o.jsx)(c.qs,{children:"The action to execute whenever you tap, either create a new tap hit object, a held hit object, or delete the hit object that you click"}),(0,o.jsx)(c.qs,{children:'With this slider you can choose how much to "scale" the beatmap, to make it easier to view the whole beatmap'}),(0,o.jsx)(c.qs,{children:"Select the playback speed of the song, it's useful to listen more carefully to a song when composing"}),(0,o.jsx)(c.qs,{children:"Select how many snap points you want to create, 1/1 is one snap point per BPM, 1/2, ..., 1/16 is to place more snap points between 1 BPM unit. Every unit's BPM snap point will have a different color than the inner BPM snap points."}),(0,o.jsx)(c.qs,{children:"Current timestamp in the timeline."}),(0,o.jsx)(c.qs,{children:"Add/Remove or move between the breakpoints of the beatmap, they are sections which you can more easily jump to"})]}),!t&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.h,{margin:"1rem 0",children:"VSRG Composer shortcuts"}),(0,o.jsxs)(c.fL,{children:["The VSRG composer has some shortcuts you can use, if you want to change them, go to the ",(0,o.jsx)(u.F,{href:"/keybinds",children:"keybinds page"})]}),(0,o.jsx)(r.A,{shortcuts:s}),(0,o.jsxs)("div",{className:"row",style:{padding:"0.1rem",gap:"1rem",marginTop:"-0.1rem"},children:[(0,o.jsx)(r.s,{children:e.join("/")}),(0,o.jsx)("div",{children:" Add hit object (syncs to the registered keybinds)"})]})]})]})})}},30772:function(e,t,s){"use strict";s.r(t),s.d(t,{_midiTransposeMetadata:function(){return l},default:function(){return d}});var o=s(85893),n=s(72057),a=s(30757),i=s(82446),r=s(84455),h=s(45305),c=s(17544);let l={title:"\uD83C\uDF9B️ MIDI music transposition",relativeUrl:"midi-transpose",tags:["Guide"],image:c.GW+"/assets/blog/midi-1.webp",description:"Use MIDI songs to transpose music into the app's sheet",createdAt:new Date("2024/03/19"),author:n.Gx};function d(){return(0,o.jsxs)(n.O4,{metadata:l,children:[(0,o.jsx)(h.fL,{children:"If you want to compose a song but you don't want to start from 0, you can try to find a MIDI file for the song and use the MIDI transposing tools to convert it into a music sheet."}),(0,o.jsx)(i.h,{margin:"1rem 0",children:"Open a MIDI file"}),(0,o.jsxs)(h.fL,{children:["Once you found your MIDI file, visit the ",(0,o.jsx)(r.F,{href:"/composer",children:"composer"})," and open the song menu."]}),'Now click the "Create from MIDI/Audio", it will open the MIDI transposition tool, and select your file after pressing the "Open MIDI/Audio/Video file" button. If you want to import a video or audio file instead, visit the ',(0,o.jsx)(r.F,{href:"/blog/posts/video-audio-transpose",children:" Audio transpose guide "}),".",(0,o.jsx)(a.c,{src:c.GW+"/assets/blog/midi-btn.webp",alt:"MIDI button"}),(0,o.jsx)(i.h,{margin:"1rem 0",children:"Transpose a MIDI file"}),(0,o.jsx)(h.fL,{children:"After having selected the file, you can start changing the import settings to best convert the song to the app sheet. The MIDI song doesn't perfectly match the music sheet of the app, so you will have to adjust the settings to best fit the song."}),(0,o.jsx)(a.c,{src:c.GW+"/assets/blog/midi-1.webp",alt:"MIDI import settings"}),(0,o.jsxs)(h.Md,{children:[(0,o.jsx)(h.qs,{children:"This is the button to press to select the MIDI file."}),(0,o.jsx)(h.qs,{children:"Here you can select the BPM of the imported song, usually a higher value is preferred, as it leads to a better conversion accuracy. By default it uses 4 times the song's BPM."}),(0,o.jsx)(h.qs,{children:'The note offset is the amount by which notes are "pushed" one note up or down, this is useful when the original song is in a different pitch, or in a scale that doesn\'t match the music sheet. This is a value that is applied to all tracks, they can then be manually overridden.'}),(0,o.jsx)(h.qs,{children:"This is the default pitch of the song, it will be applied to all instruments."}),(0,o.jsx)(h.qs,{children:'The app\'s keyboard is made up only of non-accidental notes, by selecting this, all the "accidental" notes will be pushed one note down, to try to "adapt" the notes to the keyboard. This not always sounds good, so try to turn it on or off to check which is better.'}),(0,o.jsx)(h.qs,{children:"This removes all MIDI tracks which have no notes inside of it, for example, the item at number (7) has no notes, so it will be ignored."}),(0,o.jsx)(h.qs,{children:"This checkbox decides if to include the track in the conversion or not, next to it there is the name of the track, the number of notes inside of it, and the instrument that it uses."}),(0,o.jsx)(h.qs,{children:"Here you can select the name of the instrument that you want to use for this track."}),(0,o.jsx)(h.qs,{children:"This opens the setting of the track, where you can see more information, and override the global values."})]}),(0,o.jsx)(a.c,{src:c.GW+"/assets/blog/midi-2.webp",alt:"MIDI track settings"}),(0,o.jsxs)(h.Md,{children:[(0,o.jsx)(h.qs,{children:"With this you can override the note offset that you wrote in the global settings, leave it blank to use the same value of the global offset"}),(0,o.jsx)(h.qs,{children:'When a note goes over the visible notes of the app, with this value you specify how many times the notes should be tried to be "scaled down" by one octave (8 notes), this might allow you to fit more notes of a track, and make it sound better.'})]})]})}},76724:function(e,t,s){"use strict";s.r(t),s.d(t,{_aiTransposeMetadata:function(){return h},default:function(){return c}});var o=s(85893),n=s(72057),a=s(82446),i=s(84455),r=s(45305);let h={title:"\uD83D\uDD2C Video/audio to music transposition",tags:["Guide"],relativeUrl:"video-audio-transpose",image:s(17544).GW+"/assets/blog/midi-btn.webp",description:"Use the new feature in the composer to (try to) convert a audio/video into a music sheet. This is an experimental feature",createdAt:new Date("2024/03/19"),author:n.Gx};function c(){return(0,o.jsxs)(n.O4,{metadata:h,children:[(0,o.jsxs)(r.fL,{children:["In the V3.3 release, a new experimental feature has been added that allows you to convert any video/audio into a sheet, by first converting it to MIDI, by using ",(0,o.jsx)(i.F,{href:"https://basicpitch.spotify.com/",children:" Spotify's Basic Pitch "}),"."]}),(0,o.jsx)(a.h,{margin:"1rem 0",children:"Warnings"}),(0,o.jsx)(r.fL,{children:"This feature is to be used only as a last resort after you cannot find a MIDI song to transpose, or you can't do it by hand. It is not meant to create a perfect transposition, as the conversion is very difficult, but mostly as a starting point to help you transpose a song manually."}),(0,o.jsx)(a.h,{margin:"1rem 0",children:"Best practices"}),(0,o.jsx)(r.fL,{children:"It is best if you can find a video/audio of a song that uses a single instrument, the piano is the easiest to convert. Even better if there is no background noise."}),(0,o.jsx)(a.h,{margin:"1rem 0",children:"How to"}),(0,o.jsxs)(r.fL,{children:["The transposition steps are very similar to the ones of MIDI transposition, if you want to see how to do that, visit the ",(0,o.jsx)(i.F,{href:"/blog/posts/midi-transpose",children:" MIDI transposition guide "}),'. You have to open the MIDI conversion tool, and select the audio/video file by clicking the file selection button "Open MIDI/Audio/Video file"']})]})}},65123:function(e){e.exports={"combo-box-title":"combobox_combo-box-title__I1XUA","combo-box-title-item":"combobox_combo-box-title-item__IF9kr","combo-box-wrapper":"combobox_combo-box-wrapper__zG8uP","combo-box-items":"combobox_combo-box-items__tsT2F",fadeIn:"combobox_fadeIn__Z2iH2","combo-box-item":"combobox_combo-box-item__WrRTi","combo-box-item-selected":"combobox_combo-box-item-selected__5Aj75"}},49717:function(e){e.exports={"expandable-container":"expandableContainer_expandable-container__rgkQ_","expandable-container-header":"expandableContainer_expandable-container-header__yVbIj","expandable-container-content":"expandableContainer_expandable-container-content__IQCNV","expandable-container-arrow":"expandableContainer_expandable-container-arrow__GAZJq"}},74161:function(e){e.exports={"blog-card":"blog_blog-card__NuDMw","blog-card-new":"blog_blog-card-new__vibsn","blog-card-title":"blog_blog-card-title__AZ4Ee","blog-card-description":"blog_blog-card-description__rzb1W","blog-card-title-content":"blog_blog-card-title-content__pfYsz","blog-card-image":"blog_blog-card-image__ElhDd"}}},function(e){e.O(0,[9352,2888,9774,179],function(){return e(e.s=67801)}),_N_E=e.O()}]);