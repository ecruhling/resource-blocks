!function(){var e,t={175:function(e,t,c){"use strict";var r=window.wp.blocks,o=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"resource-blocks/questionnaire","version":"1.0.0","title":"Questionnaire","description":"The questions for each Team member.","keywords":["text","questions"],"attributes":{"question":{"type":"string","default":"","source":"attribute"}},"example":{"innerBlocks":[{"name":"resource-blocks/single-question","attributes":{"question":"What was your first job?"}}]},"category":"resource-blocks","textdomain":"resource-blocks","editorScript":"file:../../../../build/questionnaire.js","editorStyle":"file:../../../../build/questionnaire.css","style":"file:../../../../build/style-questionnaire.css"}'),n=window.wp.element,l=window.wp.i18n,i=window.wp.blockEditor,s=window.wp.data,h=window.wp.components,a=["Where are you from?","Red or White?","Introvert or Extrovert?","Who is the most famous person you’ve ever met?","In another life, what would your job be?","What was your first job?","What is your spirit animal?","Morning person (sunrise) or night owl (sunset)?","Favorite quote?","How do you like your coffee?","What was your dream job as a child?","Most unusual item in your desk drawer?","What is your workout of choice?","What is your dream pet?"];const v={};v.resource=(0,n.createElement)("svg",{height:"20",viewBox:"0 0 11 20",width:"11",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)("g",{fill:"#231f20"},(0,n.createElement)("path",{d:"m2.4 17.96h.38l.93 2.04h-.48l-.18-.43h-.93l-.18.43h-.46zm-.13 1.26h.63l-.3-.72h-.02c0-.01-.31.72-.31.72z"}),(0,n.createElement)("path",{d:"m4.59 17.96h1.88v.39h-.72v1.65h-.44v-1.65h-.72z"}),(0,n.createElement)("path",{d:"m8.34 17.96v1.65h1.18v.39h-1.61v-2.04z"}),(0,n.createElement)("path",{d:"m1.48 15.26h8.04v.52h-8.04z"}),(0,n.createElement)("path",{d:"m0 .03c1.21.03 2.75-.03 4.24-.03 2.03 0 4.41.39 4.41 2.91 0 1.38-1.16 2.85-3.27 2.94 1.53.16 2.34.88 2.84 2.46.75 2.31 1.18 3.03 2.72 2.97l.06.22c-.47.24-.99.35-1.52.33-1.6 0-2.4-1.35-2.88-3.13-.63-2.34-1.91-2.61-3.54-2.61v1.45c0 1.36.03 2.88.03 2.88 0 .54.21.66.88.75l.88.11v.35h-4.85v-.35l.74-.11c.46-.08.74-.21.74-.75 0 0 .01-.72.01-2.88v-3.57c0-1.25-.01-2.17-.01-2.74 0-.54-.28-.67-.74-.75l-.74-.11zm3.06 5.64h.87c2.23 0 3.09-1.08 3.09-2.71 0-2.05-1.6-2.4-3.07-2.4-.3-.01-.59.02-.88.06-.01 0-.01 5.05-.01 5.05z"}))),v.intro_paragraph=(0,n.createElement)("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)("path",{d:"m23.1 0c.5 0 .9.4.9.9v5.1c0 .5-.4.9-.9.9h-1.7c-.5 0-.9-.4-.9-.9v-1.7h-6.4v16.3h2.1c.5 0 .9.4.9.9v1.7c0 .5-.4.9-.9.9h-8.5c-.5 0-.9-.4-.9-.9v-1.7c0-.5.4-.9.9-.9h2.1v-16.3h-6.4v1.7c0 .5-.4.9-.9.9h-1.6c-.5 0-.9-.4-.9-.9v-5.1c0-.5.4-.9.9-.9z"}),(0,n.createElement)("path",{d:"m0 0h24v24h-24z",fill:"none"})),v.body_text=(0,n.createElement)("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)("path",{d:"m.7 17.1h19.1c.4 0 .7-.3.7-.7v-2.1c0-.4-.3-.7-.7-.7h-19.1c-.4.1-.7.4-.7.8v2.1c0 .3.3.6.7.6zm0-13.7h14.1c.4 0 .7-.3.7-.7v-2c0-.4-.3-.7-.7-.7h-14.1c-.4 0-.7.3-.7.7v2.1c0 .3.3.6.7.6zm22.4 3.5h-22.2c-.5 0-.9.3-.9.8v1.7c0 .5.4.9.9.9h22.3c.5 0 .9-.4.9-.9v-1.7c-.1-.5-.5-.8-1-.8zm0 13.7h-22.2c-.5 0-.9.4-.9.8v1.7c0 .5.4.9.9.9h22.3c.5 0 .9-.4.9-.9v-1.7c-.1-.4-.5-.8-1-.8z"}),(0,n.createElement)("path",{d:"m0 0h25v24h-25z",fill:"none"})),v.image_full_width=(0,n.createElement)("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)("path",{d:"m0 0h24v24h-24z",fill:"none"}),(0,n.createElement)("path",{d:"m21.74 19.2h-19.48c-1.25 0-2.26-.8-2.26-1.8v-10.8c0-1 1.01-1.8 2.26-1.8h19.5c1.23 0 2.24.8 2.24 1.8v10.8c0 1-1.01 1.8-2.26 1.8zm-16.48-12.3c-1.46 0-2.63.94-2.63 2.1s1.18 2.1 2.63 2.1 2.61-.94 2.61-2.1-1.17-2.1-2.61-2.1zm-2.26 9.9h18v-4.2l-4.1-3.28c-.22-.18-.58-.18-.79 0l-6.37 5.08-2.6-2.08c-.22-.18-.58-.18-.79 0l-3.35 2.68z"})),v.two_column_images=(0,n.createElement)("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)("path",{d:"m10.87 17.72h-9.74c-.63 0-1.13-.64-1.13-1.43v-8.58c0-.79.5-1.43 1.13-1.43h9.74c.63 0 1.13.64 1.13 1.43v8.58c0 .79-.5 1.43-1.13 1.43zm-8.24-9.78c-.73 0-1.31.75-1.31 1.66 0 .92.59 1.66 1.31 1.66s1.31-.75 1.31-1.66-.59-1.66-1.31-1.66zm-1.13 7.87h9v-3.34l-2.05-2.59c-.11-.14-.29-.14-.4 0l-3.18 4.03-1.3-1.65c-.11-.14-.29-.14-.4 0l-1.67 2.12z"}),(0,n.createElement)("path",{d:"m22.87 17.72h-9.74c-.62 0-1.13-.64-1.13-1.43v-8.58c0-.79.5-1.43 1.13-1.43h9.74c.63 0 1.13.64 1.13 1.43v8.58c0 .79-.5 1.43-1.13 1.43zm-8.24-9.78c-.73 0-1.31.75-1.31 1.66 0 .92.59 1.66 1.31 1.66s1.31-.75 1.31-1.66-.59-1.66-1.31-1.66zm-1.13 7.87h9v-3.34l-2.05-2.61c-.11-.14-.29-.14-.4 0l-3.18 4.03-1.3-1.65c-.11-.14-.29-.14-.4 0l-1.68 2.12z"}),(0,n.createElement)("path",{d:"m0 0h24v24h-24z",fill:"none"})),v.vimeo=(0,n.createElement)("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)("path",{d:"m22.4 7.16c-.09 2.03-1.51 4.8-4.24 8.32-2.84 3.68-5.23 5.52-7.19 5.52-1.21 0-2.24-1.12-3.08-3.36-.56-2.05-1.12-4.1-1.68-6.16-.62-2.24-1.29-3.36-2-3.36-.16 0-.7.33-1.63.98l-.99-1.26c1.03-.9 2.04-1.81 3.04-2.71 1.37-1.18 2.4-1.8 3.09-1.86 1.62-.16 2.62.95 2.99 3.32.4 2.56.69 4.15.84 4.77.47 2.12.98 3.18 1.54 3.18.44 0 1.09-.69 1.96-2.06.87-1.38 1.34-2.42 1.4-3.14.12-1.19-.34-1.78-1.4-1.78-.5 0-1.01.11-1.54.34 1.02-3.35 2.98-4.98 5.86-4.88 2.14.05 3.15 1.43 3.03 4.14z"}),(0,n.createElement)("path",{d:"m0 0h24v24h-24z",fill:"none"})),v.single_image=(0,n.createElement)("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)("path",{d:"m19.8 19.2h-15.6c-1 0-1.8-.8-1.8-1.8v-10.8c0-1 .8-1.8 1.8-1.8h15.6c1 0 1.8.8 1.8 1.8v10.8c0 1-.8 1.8-1.8 1.8zm-13.2-12.3c-1.16 0-2.1.94-2.1 2.1s.94 2.1 2.1 2.1 2.1-.94 2.1-2.1-.94-2.1-2.1-2.1zm-1.8 9.9h14.4v-4.2l-3.28-3.28c-.18-.18-.46-.18-.64 0l-5.08 5.08-2.08-2.08c-.18-.18-.46-.18-.64 0l-2.68 2.68z"}),(0,n.createElement)("path",{d:"m0 0h24v24h-24z",fill:"none"})),v.triptych=(0,n.createElement)("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)("path",{d:"m7 17h-6.3c-.4 0-.7-.5-.7-1.2v-7.6c0-.7.3-1.2.7-1.2h6.3c.4 0 .7.6.7 1.3v7.5c0 .7-.3 1.2-.7 1.2zm-5.3-8.6c-.5 0-.8.7-.8 1.5s.4 1.5.8 1.5.8-.7.8-1.5-.4-1.5-.8-1.5zm-.7 6.9h5.8v-2.9l-1.3-2.3c-.1-.1-.2-.1-.3 0l-2 3.5-.8-1.4c-.1-.1-.2-.1-.3 0l-1.1 1.9z"}),(0,n.createElement)("path",{d:"m15.1 17h-6.2c-.4 0-.7-.6-.7-1.3v-7.5c0-.7.3-1.2.7-1.2h6.2c.4 0 .7.6.7 1.3v7.5c0 .7-.3 1.2-.7 1.2zm-5.3-8.6c-.4 0-.8.7-.8 1.5s.4 1.5.8 1.5c.5 0 .8-.7.8-1.5.1-.8-.3-1.5-.8-1.5zm-.7 6.9h5.8v-2.9l-1.3-2.3c-.1-.1-.2-.1-.3 0l-2 3.5-.8-1.4c-.1-.1-.2-.1-.3 0l-1.1 1.9z"}),(0,n.createElement)("path",{d:"m23.3 17h-6.3c-.4 0-.7-.6-.7-1.3v-7.5c0-.7.3-1.2.7-1.2h6.2c.5 0 .8.5.8 1.2v7.5c0 .8-.3 1.3-.7 1.3zm-5.3-8.6c-.5 0-.8.7-.8 1.5s.4 1.5.8 1.5.8-.7.8-1.5-.3-1.5-.8-1.5zm-.7 6.9h5.7v-2.9l-1.3-2.3c-.1-.1-.2-.1-.3 0l-2 3.5-.8-1.4c-.1-.1-.2-.1-.3 0l-1.1 1.9z"}),(0,n.createElement)("path",{d:"m0 0h24v24h-24z",fill:"none"})),v.question=(0,n.createElement)("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)("path",{d:"m12 0c-3.7 0-6.1 1.5-8 4.3-.4.5-.3 1.1.2 1.5l2 1.5c.5.4 1.2.3 1.6-.2 1.2-1.5 2-2.3 3.9-2.3 1.4 0 3.2.9 3.2 2.3 0 1.1-.9 1.6-2.3 2.4-1.7.9-3.9 2.1-3.9 5v.5c0 .6.5 1.1 1.1 1.1h3.4c.6 0 1.1-.5 1.1-1.1v-.3c0-2 5.9-2.1 5.9-7.5 0-4.1-4.2-7.2-8.2-7.2zm-.4 17.5c-1.8 0-3.2 1.5-3.2 3.2 0 1.8 1.5 3.2 3.2 3.2s3.2-1.5 3.2-3.2-1.5-3.2-3.2-3.2z"}),(0,n.createElement)("path",{d:"m0 0h24v24h-24z",fill:"none"})),v.heading=(0,n.createElement)("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)("path",{d:"m21.6 4v16h1.6c.4 0 .8.4.8.8v1.6c0 .4-.4.8-.8.8h-8c-.4 0-.8-.4-.8-.8v-1.6c0-.4.4-.8.8-.8h1.6v-6.4h-9.6v6.4h1.6c.4 0 .8.4.8.8v1.6c0 .4-.4.8-.8.8h-8c-.4 0-.8-.4-.8-.8v-1.6c0-.4.4-.8.8-.8h1.6v-16h-1.6c-.4 0-.8-.4-.8-.8v-1.6c0-.4.4-.8.8-.8h8c.4 0 .8.4.8.8v1.6c0 .4-.4.8-.8.8h-1.6v6.4h9.6v-6.4h-1.6c-.4 0-.8-.4-.8-.8v-1.6c0-.4.4-.8.8-.8h8c.4 0 .8.4.8.8v1.6c0 .4-.4.8-.8.8z"}),(0,n.createElement)("path",{d:"m0 0h24v24h-24z",fill:"none"}));var m=v,u=c(184),p=c.n(u);const{name:w,...d}=o;(0,r.registerBlockType)(w,{...d,icon:m.question,edit:function(e,t){let{className:c}=t;const{clientId:o}=e,v=p()(c,"resource-blocks-row"),u=(0,i.useBlockProps)({className:v}),w=(0,s.useSelect)((e=>e("core/block-editor").getBlock(o).innerBlocks)),d=a.map((t=>({title:t,icon:m.question,onClick:()=>{(t=>{const c=(0,r.createBlock)("resource-blocks/single-question",{question:t});wp.data.dispatch("core/block-editor").insertBlock(c,w.length,o,!0,{question:t}),e.setAttributes({question:t})})(t)}})));return(0,n.createElement)("div",u,(0,n.createElement)(i.BlockControls,{group:"block"},(0,n.createElement)(h.ToolbarGroup,null,(0,n.createElement)(h.ToolbarDropdownMenu,{icon:m.question,label:(0,l.__)("Questions","resource-blocks"),controls:[d]}))),(0,n.createElement)(i.InnerBlocks,{allowedBlocks:["resource-blocks/single-question"],templateLock:!1,orientation:"horizontal",placeholder:(0,l.__)("Select a question from the Question mark drop down menu above.","resource-blocks"),renderAppender:!1}))},save:function(){const e=p()("resource-blocks-row");return(0,n.createElement)("div",i.useBlockProps.save({className:e}),(0,n.createElement)(i.InnerBlocks.Content,null))}})},184:function(e,t){var c;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var c=arguments[t];if(c){var n=typeof c;if("string"===n||"number"===n)e.push(c);else if(Array.isArray(c)){if(c.length){var l=o.apply(null,c);l&&e.push(l)}}else if("object"===n)if(c.toString===Object.prototype.toString)for(var i in c)r.call(c,i)&&c[i]&&e.push(i);else e.push(c.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(c=function(){return o}.apply(t,[]))||(e.exports=c)}()}},c={};function r(e){var o=c[e];if(void 0!==o)return o.exports;var n=c[e]={exports:{}};return t[e](n,n.exports,r),n.exports}r.m=t,e=[],r.O=function(t,c,o,n){if(!c){var l=1/0;for(a=0;a<e.length;a++){c=e[a][0],o=e[a][1],n=e[a][2];for(var i=!0,s=0;s<c.length;s++)(!1&n||l>=n)&&Object.keys(r.O).every((function(e){return r.O[e](c[s])}))?c.splice(s--,1):(i=!1,n<l&&(l=n));if(i){e.splice(a--,1);var h=o();void 0!==h&&(t=h)}}return t}n=n||0;for(var a=e.length;a>0&&e[a-1][2]>n;a--)e[a]=e[a-1];e[a]=[c,o,n]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var c in t)r.o(t,c)&&!r.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:t[c]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={620:0,191:0};r.O.j=function(t){return 0===e[t]};var t=function(t,c){var o,n,l=c[0],i=c[1],s=c[2],h=0;if(l.some((function(t){return 0!==e[t]}))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(s)var a=s(r)}for(t&&t(c);h<l.length;h++)n=l[h],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(a)},c=self.webpackChunkresource_blocks=self.webpackChunkresource_blocks||[];c.forEach(t.bind(null,0)),c.push=t.bind(null,c.push.bind(c))}();var o=r.O(void 0,[191],(function(){return r(175)}));o=r.O(o)}();