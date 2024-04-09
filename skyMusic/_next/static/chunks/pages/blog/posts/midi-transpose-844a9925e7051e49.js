(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2268],{89946:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/posts/midi-transpose",function(){return s(60426)}])},2546:function(e,t,s){"use strict";s.d(t,{c:function(){return BlogImage}});var o=s(85893),i=s(26276);function BlogImage(e){var t=e.src,s=e.alt,n=e.height;return(0,o.jsx)(i.X,{justify:"center",children:(0,o.jsx)("img",{src:t,alt:s,style:{height:void 0===n?"min(20rem, 70vh)":n,borderRadius:"0.5rem",margin:"2rem 0",boxShadow:"0 0 0.5rem 0.5rem rgba(0, 0, 0, 0.1)"}})})}},60426:function(e,t,s){"use strict";s.r(t),s.d(t,{_midiTransposeMetadata:function(){return c},default:function(){return BlogPage}});var o=s(85893),i=s(19548),n=s(2546),a=s(35763),r=s(94146),h=s(24420),l=s(1062),c={title:"\uD83C\uDF9B️ MIDI music transposition",relativeUrl:"midi-transpose",tags:["Guide"],image:l.GW+"/assets/blog/midi-1.webp",description:"Use MIDI songs to transpose music into the app's sheet",createdAt:new Date("2024/03/19"),author:i.Gx};function BlogPage(){return(0,o.jsxs)(i.O4,{metadata:c,children:[(0,o.jsx)(h.fL,{children:"If you want to compose a song but you don't want to start from 0, you can try to find a MIDI file for the song and use the MIDI transposing tools to convert it into a music sheet."}),(0,o.jsx)(a.h,{margin:"1rem 0",children:"Open a MIDI file"}),(0,o.jsxs)(h.fL,{children:["Once you found your MIDI file, visit the ",(0,o.jsx)(r.F,{href:"/composer",children:"composer"})," and open the song menu."]}),'Now click the "Create from MIDI/Audio", it will open the MIDI transposition tool, and select your file after pressing the "Open MIDI/Audio/Video file" button. If you want to import a video or audio file instead, visit the ',(0,o.jsx)(r.F,{href:"/blog/posts/video-audio-transpose",children:" Ai transpose guide "}),".",(0,o.jsx)(n.c,{src:l.GW+"/assets/blog/midi-btn.webp",alt:"MIDI button"}),(0,o.jsx)(a.h,{margin:"1rem 0",children:"Transpose a MIDI file"}),(0,o.jsx)(h.fL,{children:"After having selected the file, you can start changing the import settings to best convert the song to the app sheet. The MIDI song doesn't perfectly match the music sheet of the app, so you will have to adjust the settings to best fit the song."}),(0,o.jsx)(n.c,{src:l.GW+"/assets/blog/midi-1.webp",alt:"MIDI import settings"}),(0,o.jsxs)(h.Md,{children:[(0,o.jsx)(h.qs,{children:"This is the button to press to select the MIDI file."}),(0,o.jsx)(h.qs,{children:"Here you can select the BPM of the imported song, usually a higher value is preferred, as it leads to a better conversion accuracy. By default it uses 4 times the song's BPM."}),(0,o.jsx)(h.qs,{children:'The note offset is the amount by which notes are "pushed" one note up or down, this is useful when the original song is in a different pitch, or in a scale that doesn\'t match the music sheet. This is a value that is applied to all tracks, they can then be manually overridden.'}),(0,o.jsx)(h.qs,{children:"This is the default pitch of the song, it will be applied to all instruments."}),(0,o.jsx)(h.qs,{children:'The app\'s keyboard is made up only of non-accidental notes, by selecting this, all the "accidental" notes will be pushed one note down, to try to "adapt" the notes to the keyboard. This not always sounds good, so try to turn it on or off to check which is better.'}),(0,o.jsx)(h.qs,{children:"This removes all MIDI tracks which have no notes inside of it, for example, the item at number (7) has no notes, so it will be ignored."}),(0,o.jsx)(h.qs,{children:"This checkbox decides if to include the track in the conversion or not, next to it there is the name of the track, the number of notes inside of it, and the instrument that it uses."}),(0,o.jsx)(h.qs,{children:"Here you can select the name of the instrument that you want to use for this track."}),(0,o.jsx)(h.qs,{children:"This opens the setting of the track, where you can see more information, and override the global values."})]}),(0,o.jsx)(n.c,{src:l.GW+"/assets/blog/midi-2.webp",alt:"MIDI track settings"}),(0,o.jsxs)(h.Md,{children:[(0,o.jsx)(h.qs,{children:"With this you can override the note offset that you wrote in the global settings, leave it blank to use the same value of the global offset"}),(0,o.jsx)(h.qs,{children:'When a note goes over the visible notes of the app, with this value you specify how many times the notes should be tried to be "scaled down" by one octave (8 notes), this might allow you to fit more notes of a track, and make it sound better.'})]})]})}}},function(e){e.O(0,[5752,9774,2888,179],function(){return e(e.s=89946)}),_N_E=e.O()}]);