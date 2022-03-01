!function(){var e,t={47:function(e,t,r){"use strict";var c=window.wp.blocks,n=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"resource-blocks/full-width-video","version":"1.0.0","title":"Full-width Video","category":"resource-blocks","description":"Full-width Vimeo video embed.","textdomain":"resource-blocks","attributes":{"url":{"type":"string"},"type":{"type":"string"},"providerNameSlug":{"type":"string"},"allowResponsive":{"type":"boolean","default":true},"responsive":{"type":"boolean","default":false},"previewable":{"type":"boolean","default":true}},"example":{"attributes":{"cover":"https://example.com/image.jpg"}},"editorScript":"file:../../../../build/full-width-video.js","editorStyle":"file:../../../../build/full-width-video.css","style":"file:../../../../build/style-full-width-video.css"}'),l=window.wp.element;const a=[{ratio:"2.33",className:"wp-embed-aspect-21-9"},{ratio:"2.00",className:"wp-embed-aspect-18-9"},{ratio:"1.78",className:"wp-embed-aspect-16-9"},{ratio:"1.33",className:"wp-embed-aspect-4-3"},{ratio:"1.00",className:"wp-embed-aspect-1-1"},{ratio:"0.56",className:"wp-embed-aspect-9-16"},{ratio:"0.50",className:"wp-embed-aspect-1-2"}],o="wp-embed";var i=window.lodash,s=r(991),m=r.n(s),v=r(588),h=r.n(v);const{name:u}=n,d=e=>{var t;return null===(t=(0,c.getBlockVariations)(u))||void 0===t?void 0:t.find((t=>{let{patterns:r}=t;return function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).some((t=>e.match(t)))}(e,r)}))},p=e=>e&&e.includes('class="wp-embedded-content"'),w=e=>{if(!e)return e;const t=a.reduce(((e,t)=>{let{className:r}=t;return e[r]=!1,e}),{"wp-has-aspect-ratio":!1});return m()(e,t)};function f(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(!r)return w(t);const c=document.implementation.createHTMLDocument("");c.body.innerHTML=e;const n=c.body.querySelector("iframe");if(n&&n.height&&n.width){const e=(n.width/n.height).toFixed(2);for(let r=0;r<a.length;r++){const c=a[r];if(e>=c.ratio)return e-c.ratio>.1?w(t):m()(w(t),c.className,"wp-has-aspect-ratio")}}return t}const E=h()((function(e,t,r,c){let n=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];if(!e)return{};const l={};let{type:a="rich"}=e;const{html:s,provider_name:m}=e,v=(0,i.kebabCase)((m||t).toLowerCase());return p(s)&&(a=o),(s||"photo"===a)&&(l.type=a,l.providerNameSlug=v),l.className=f(s,r,c&&n),l}));var b=window.wp.i18n,g=window.wp.components,x=window.wp.blockEditor,z=window.wp.primitives,y=(0,l.createElement)(z.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(z.Path,{d:"M20.1 5.1L16.9 2 6.2 12.7l-1.3 4.4 4.5-1.3L20.1 5.1zM4 20.8h8v-1.5H4v1.5z"}));function S(e){return e?(0,b.__)("This embed will preserve its aspect ratio when the browser is resized."):(0,b.__)("This embed may not preserve its aspect ratio when the browser is resized.")}var _=e=>{let{blockSupportsResponsive:t,showEditButton:r,themeSupportsResponsive:c,allowResponsive:n,toggleResponsive:a,switchBackToURLInput:o}=e;return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(x.BlockControls,null,(0,l.createElement)(g.ToolbarGroup,null,r&&(0,l.createElement)(g.ToolbarButton,{className:"components-toolbar__control",label:(0,b.__)("Edit URL"),icon:y,onClick:o}))),c&&t&&(0,l.createElement)(x.InspectorControls,null,(0,l.createElement)(g.PanelBody,{title:(0,b.__)("Media settings"),className:""},(0,l.createElement)(g.ToggleControl,{label:(0,b.__)("Resize for smaller devices"),checked:n,help:S,onChange:a}))))};const k=(0,l.createElement)(g.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,l.createElement)(g.Path,{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm.5 16c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V9.8l4.7-5.3H19c.3 0 .5.2.5.5v14zm-6-9.5L16 12l-2.5 2.8 1.1 1L18 12l-3.5-3.5-1 1zm-3 0l-1-1L6 12l3.5 3.8 1.1-1L8 12l2.5-2.5z"}));(0,l.createElement)(g.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,l.createElement)(g.Path,{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm.5 16c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V9.8l4.7-5.3H19c.3 0 .5.2.5.5v14zM13.2 7.7c-.4.4-.7 1.1-.7 1.9v3.7c-.4-.3-.8-.4-1.3-.4-1.2 0-2.2 1-2.2 2.2 0 1.2 1 2.2 2.2 2.2.5 0 1-.2 1.4-.5.9-.6 1.4-1.6 1.4-2.6V9.6c0-.4.1-.6.2-.8.3-.3 1-.3 1.6-.3h.2V7h-.2c-.7 0-1.8 0-2.6.7z"})),(0,l.createElement)(g.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,l.createElement)(g.Path,{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9.2 4.5H19c.3 0 .5.2.5.5v8.4l-3-2.9c-.3-.3-.8-.3-1 0L11.9 14 9 12c-.3-.2-.6-.2-.8 0l-3.6 2.6V9.8l4.6-5.3zm9.8 15H5c-.3 0-.5-.2-.5-.5v-2.4l4.1-3 3 1.9c.3.2.7.2.9-.1L16 12l3.5 3.4V19c0 .3-.2.5-.5.5z"})),(0,l.createElement)(g.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,l.createElement)(g.Path,{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm.5 16c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V9.8l4.7-5.3H19c.3 0 .5.2.5.5v14zM10 15l5-3-5-3v6z"})),(0,l.createElement)(g.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(g.G,null,(0,l.createElement)(g.Path,{d:"M22.23 5.924c-.736.326-1.527.547-2.357.646.847-.508 1.498-1.312 1.804-2.27-.793.47-1.67.812-2.606.996C18.325 4.498 17.258 4 16.078 4c-2.266 0-4.103 1.837-4.103 4.103 0 .322.036.635.106.935-3.41-.17-6.433-1.804-8.457-4.287-.353.607-.556 1.312-.556 2.064 0 1.424.724 2.68 1.825 3.415-.673-.022-1.305-.207-1.86-.514v.052c0 1.988 1.415 3.647 3.293 4.023-.344.095-.707.145-1.08.145-.265 0-.522-.026-.773-.074.522 1.63 2.038 2.817 3.833 2.85-1.404 1.1-3.174 1.757-5.096 1.757-.332 0-.66-.02-.98-.057 1.816 1.164 3.973 1.843 6.29 1.843 7.547 0 11.675-6.252 11.675-11.675 0-.178-.004-.355-.012-.53.802-.578 1.497-1.3 2.047-2.124z"}))),(0,l.createElement)(g.SVG,{viewBox:"0 0 24 24"},(0,l.createElement)(g.Path,{d:"M21.8 8s-.195-1.377-.795-1.984c-.76-.797-1.613-.8-2.004-.847-2.798-.203-6.996-.203-6.996-.203h-.01s-4.197 0-6.996.202c-.39.046-1.242.05-2.003.846C2.395 6.623 2.2 8 2.2 8S2 9.62 2 11.24v1.517c0 1.618.2 3.237.2 3.237s.195 1.378.795 1.985c.76.797 1.76.77 2.205.855 1.6.153 6.8.2 6.8.2s4.203-.005 7-.208c.392-.047 1.244-.05 2.005-.847.6-.607.795-1.985.795-1.985s.2-1.618.2-3.237v-1.517C22 9.62 21.8 8 21.8 8zM9.935 14.595v-5.62l5.403 2.82-5.403 2.8z"})),(0,l.createElement)(g.SVG,{viewBox:"0 0 24 24"},(0,l.createElement)(g.Path,{d:"M20 3H4c-.6 0-1 .4-1 1v16c0 .5.4 1 1 1h8.6v-7h-2.3v-2.7h2.3v-2c0-2.3 1.4-3.6 3.5-3.6 1 0 1.8.1 2.1.1v2.4h-1.4c-1.1 0-1.3.5-1.3 1.3v1.7h2.7l-.4 2.8h-2.3v7H20c.5 0 1-.4 1-1V4c0-.6-.4-1-1-1z"})),(0,l.createElement)(g.SVG,{viewBox:"0 0 24 24"},(0,l.createElement)(g.G,null,(0,l.createElement)(g.Path,{d:"M12 4.622c2.403 0 2.688.01 3.637.052.877.04 1.354.187 1.67.31.42.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.67.043.95.052 1.235.052 3.638s-.01 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.42-.358.72-.673 1.036-.315.315-.615.51-1.035.673-.317.123-.794.27-1.67.31-.95.043-1.234.052-3.638.052s-2.688-.01-3.637-.052c-.877-.04-1.354-.187-1.67-.31-.42-.163-.72-.358-1.036-.673-.315-.315-.51-.615-.673-1.035-.123-.317-.27-.794-.31-1.67-.043-.95-.052-1.235-.052-3.638s.01-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.42.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.67-.31.95-.043 1.235-.052 3.638-.052M12 3c-2.444 0-2.75.01-3.71.054s-1.613.196-2.185.418c-.592.23-1.094.538-1.594 1.04-.5.5-.807 1-1.037 1.593-.223.572-.375 1.226-.42 2.184C3.01 9.25 3 9.555 3 12s.01 2.75.054 3.71.196 1.613.418 2.186c.23.592.538 1.094 1.038 1.594s1.002.808 1.594 1.038c.572.222 1.227.375 2.185.418.96.044 1.266.054 3.71.054s2.75-.01 3.71-.054 1.613-.196 2.186-.418c.592-.23 1.094-.538 1.594-1.038s.808-1.002 1.038-1.594c.222-.572.375-1.227.418-2.185.044-.96.054-1.266.054-3.71s-.01-2.75-.054-3.71-.196-1.613-.418-2.186c-.23-.592-.538-1.094-1.038-1.594s-1.002-.808-1.594-1.038c-.572-.222-1.227-.375-2.185-.418C14.75 3.01 14.445 3 12 3zm0 4.378c-2.552 0-4.622 2.07-4.622 4.622s2.07 4.622 4.622 4.622 4.622-2.07 4.622-4.622S14.552 7.378 12 7.378zM12 15c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm4.804-8.884c-.596 0-1.08.484-1.08 1.08s.484 1.08 1.08 1.08c.596 0 1.08-.484 1.08-1.08s-.483-1.08-1.08-1.08z"}))),(0,l.createElement)(g.SVG,{viewBox:"0 0 24 24"},(0,l.createElement)(g.G,null,(0,l.createElement)(g.Path,{d:"M12.158 12.786l-2.698 7.84c.806.236 1.657.365 2.54.365 1.047 0 2.05-.18 2.986-.51-.024-.037-.046-.078-.065-.123l-2.762-7.57zM3.008 12c0 3.56 2.07 6.634 5.068 8.092L3.788 8.342c-.5 1.117-.78 2.354-.78 3.658zm15.06-.454c0-1.112-.398-1.88-.74-2.48-.456-.74-.883-1.368-.883-2.11 0-.825.627-1.595 1.51-1.595.04 0 .078.006.116.008-1.598-1.464-3.73-2.36-6.07-2.36-3.14 0-5.904 1.613-7.512 4.053.21.008.41.012.58.012.94 0 2.395-.114 2.395-.114.484-.028.54.684.057.74 0 0-.487.058-1.03.086l3.275 9.74 1.968-5.902-1.4-3.838c-.485-.028-.944-.085-.944-.085-.486-.03-.43-.77.056-.742 0 0 1.484.114 2.368.114.94 0 2.397-.114 2.397-.114.486-.028.543.684.058.74 0 0-.488.058-1.03.086l3.25 9.665.897-2.997c.456-1.17.684-2.137.684-2.907zm1.82-3.86c.04.286.06.593.06.924 0 .912-.17 1.938-.683 3.22l-2.746 7.94c2.672-1.558 4.47-4.454 4.47-7.77 0-1.564-.4-3.033-1.1-4.314zM12 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"}))),(0,l.createElement)(g.SVG,{viewBox:"0 0 24 24"},(0,l.createElement)(g.Path,{d:"M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2m4.586 14.424c-.18.295-.563.387-.857.207-2.35-1.434-5.305-1.76-8.786-.963-.335.077-.67-.133-.746-.47-.077-.334.132-.67.47-.745 3.808-.87 7.076-.496 9.712 1.115.293.18.386.563.206.857M17.81 13.7c-.226.367-.706.482-1.072.257-2.687-1.652-6.785-2.13-9.965-1.166-.413.127-.848-.106-.973-.517-.125-.413.108-.848.52-.973 3.632-1.102 8.147-.568 11.234 1.328.366.226.48.707.256 1.072m.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71c-.493.15-1.016-.13-1.166-.624-.148-.495.13-1.017.625-1.167 3.532-1.073 9.404-.866 13.115 1.337.445.264.59.838.327 1.282-.264.443-.838.59-1.282.325"})),(0,l.createElement)(g.SVG,{viewBox:"0 0 24 24"},(0,l.createElement)(g.Path,{d:"m6.5 7c-2.75 0-5 2.25-5 5s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5zm11 0c-2.75 0-5 2.25-5 5s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5z"})),(0,l.createElement)(g.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(g.G,null,(0,l.createElement)(g.Path,{d:"M22.396 7.164c-.093 2.026-1.507 4.8-4.245 8.32C15.323 19.16 12.93 21 10.97 21c-1.214 0-2.24-1.12-3.08-3.36-.56-2.052-1.118-4.105-1.68-6.158-.622-2.24-1.29-3.36-2.004-3.36-.156 0-.7.328-1.634.98l-.978-1.26c1.027-.903 2.04-1.806 3.037-2.71C6 3.95 7.03 3.328 7.716 3.265c1.62-.156 2.616.95 2.99 3.32.404 2.558.685 4.148.84 4.77.468 2.12.982 3.18 1.543 3.18.435 0 1.09-.687 1.963-2.064.872-1.376 1.34-2.422 1.402-3.142.125-1.187-.343-1.782-1.4-1.782-.5 0-1.013.115-1.542.34 1.023-3.35 2.977-4.976 5.862-4.883 2.14.063 3.148 1.45 3.024 4.16z"}))),(0,l.createElement)(g.SVG,{viewBox:"0 0 24 24"},(0,l.createElement)(g.Path,{d:"M22 11.816c0-1.256-1.02-2.277-2.277-2.277-.593 0-1.122.24-1.526.613-1.48-.965-3.455-1.594-5.647-1.69l1.17-3.702 3.18.75c.01 1.027.847 1.86 1.877 1.86 1.035 0 1.877-.84 1.877-1.877 0-1.035-.842-1.877-1.877-1.877-.77 0-1.43.466-1.72 1.13L13.55 3.92c-.204-.047-.4.067-.46.26l-1.35 4.27c-2.317.037-4.412.67-5.97 1.67-.402-.355-.917-.58-1.493-.58C3.02 9.54 2 10.56 2 11.815c0 .814.433 1.523 1.078 1.925-.037.222-.06.445-.06.673 0 3.292 4.01 5.97 8.94 5.97s8.94-2.678 8.94-5.97c0-.214-.02-.424-.052-.632.687-.39 1.154-1.12 1.154-1.964zm-3.224-7.422c.606 0 1.1.493 1.1 1.1s-.493 1.1-1.1 1.1-1.1-.494-1.1-1.1.493-1.1 1.1-1.1zm-16 7.422c0-.827.673-1.5 1.5-1.5.313 0 .598.103.838.27-.85.675-1.477 1.478-1.812 2.36-.32-.274-.525-.676-.525-1.13zm9.183 7.79c-4.502 0-8.165-2.33-8.165-5.193S7.457 9.22 11.96 9.22s8.163 2.33 8.163 5.193-3.663 5.193-8.164 5.193zM20.635 13c-.326-.89-.948-1.7-1.797-2.383.247-.186.55-.3.882-.3.827 0 1.5.672 1.5 1.5 0 .482-.23.91-.586 1.184zm-11.64 1.704c-.76 0-1.397-.616-1.397-1.376 0-.76.636-1.397 1.396-1.397.76 0 1.376.638 1.376 1.398 0 .76-.616 1.376-1.376 1.376zm7.405-1.376c0 .76-.615 1.376-1.375 1.376s-1.4-.616-1.4-1.376c0-.76.64-1.397 1.4-1.397.76 0 1.376.638 1.376 1.398zm-1.17 3.38c.15.152.15.398 0 .55-.675.674-1.728 1.002-3.22 1.002l-.01-.002-.012.002c-1.492 0-2.544-.328-3.218-1.002-.152-.152-.152-.398 0-.55.152-.152.4-.15.55 0 .52.52 1.394.775 2.67.775l.01.002.01-.002c1.276 0 2.15-.253 2.67-.775.15-.152.398-.152.55 0z"})),(0,l.createElement)(g.SVG,{viewBox:"0 0 24 24"},(0,l.createElement)(g.Path,{d:"M19 3H5a2 2 0 00-2 2v14c0 1.1.9 2 2 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-5.69 14.66c-2.72 0-3.1-1.9-3.1-3.16v-3.56H8.49V8.99c1.7-.62 2.54-1.99 2.64-2.87 0-.06.06-.41.06-.58h1.9v3.1h2.17v2.3h-2.18v3.1c0 .47.13 1.3 1.2 1.26h1.1v2.36c-1.01.02-2.07 0-2.07 0z"})),(0,l.createElement)(g.SVG,{viewBox:"0 0 24 24"},(0,l.createElement)(g.Path,{d:"M18.42 14.58c-.51-.66-1.05-1.23-1.05-2.5V7.87c0-1.8.15-3.45-1.2-4.68-1.05-1.02-2.79-1.35-4.14-1.35-2.6 0-5.52.96-6.12 4.14-.06.36.18.54.4.57l2.66.3c.24-.03.42-.27.48-.5.24-1.12 1.17-1.63 2.2-1.63.56 0 1.22.21 1.55.7.4.56.33 1.31.33 1.97v.36c-1.59.18-3.66.27-5.16.93a4.63 4.63 0 0 0-2.93 4.44c0 2.82 1.8 4.23 4.1 4.23 1.95 0 3.03-.45 4.53-1.98.51.72.66 1.08 1.59 1.83.18.09.45.09.63-.1v.04l2.1-1.8c.24-.21.2-.48.03-.75zm-5.4-1.2c-.45.75-1.14 1.23-1.92 1.23-1.05 0-1.65-.81-1.65-1.98 0-2.31 2.1-2.73 4.08-2.73v.6c0 1.05.03 1.92-.5 2.88z"}),(0,l.createElement)(g.Path,{d:"M21.69 19.2a17.62 17.62 0 0 1-21.6-1.57c-.23-.2 0-.5.28-.33a23.88 23.88 0 0 0 20.93 1.3c.45-.19.84.3.39.6z"}),(0,l.createElement)(g.Path,{d:"M22.8 17.96c-.36-.45-2.22-.2-3.1-.12-.23.03-.3-.18-.05-.36 1.5-1.05 3.96-.75 4.26-.39.3.36-.1 2.82-1.5 4.02-.21.18-.42.1-.3-.15.3-.8 1.02-2.58.69-3z"})),(0,l.createElement)(g.SVG,{viewBox:"0 0 24 24"},(0,l.createElement)(g.Path,{d:"m.0206909 21 19.8160091-13.07806 3.5831 6.20826z",fill:"#4bc7ee"}),(0,l.createElement)(g.Path,{d:"m23.7254 19.0205-10.1074-17.18468c-.6421-1.114428-1.7087-1.114428-2.3249 0l-11.2931 19.16418h22.5655c1.279 0 1.8019-.8905 1.1599-1.9795z",fill:"#d4cdcb"}),(0,l.createElement)(g.Path,{d:"m.0206909 21 15.2439091-16.38571 4.3029 7.32271z",fill:"#c3d82e"}),(0,l.createElement)(g.Path,{d:"m13.618 1.83582c-.6421-1.114428-1.7087-1.114428-2.3249 0l-11.2931 19.16418 15.2646-16.38573z",fill:"#e4ecb0"}),(0,l.createElement)(g.Path,{d:"m.0206909 21 19.5468091-9.063 1.6621 2.8344z",fill:"#209dbd"}),(0,l.createElement)(g.Path,{d:"m.0206909 21 17.9209091-11.82623 1.6259 2.76323z",fill:"#7cb3c9"})),(0,l.createElement)(g.SVG,{viewBox:"0 0 24 24"},(0,l.createElement)(g.Path,{d:"m12.1479 18.5957c-2.4949 0-4.28131-1.7558-4.28131-4.0658 0-2.2176 1.78641-4.0965 4.09651-4.0965 2.2793 0 4.0349 1.7864 4.0349 4.1581 0 2.2794-1.7556 4.0042-3.8501 4.0042zm8.3521-18.5957-4.5329 1v7c-1.1088-1.41691-2.8028-1.8787-4.8049-1.8787-2.09443 0-3.97329.76993-5.5133 2.27917-1.72483 1.66323-2.6489 3.78863-2.6489 6.16033 0 2.5873.98562 4.8049 2.89526 6.499 1.44763 1.2936 3.17251 1.9402 5.17454 1.9402 1.9713 0 3.4498-.5236 4.8973-1.9402v1.9402h4.5329c0-7.6359 0-15.3641 0-23z",fill:"#333436"})),(0,l.createElement)(g.SVG,{width:"24",height:"24",viewBox:"0 0 24 24",version:"1.1"},(0,l.createElement)(g.Path,{d:"M12.289,2C6.617,2,3.606,5.648,3.606,9.622c0,1.846,1.025,4.146,2.666,4.878c0.25,0.111,0.381,0.063,0.439-0.169 c0.044-0.175,0.267-1.029,0.365-1.428c0.032-0.128,0.017-0.237-0.091-0.362C6.445,11.911,6.01,10.75,6.01,9.668 c0-2.777,2.194-5.464,5.933-5.464c3.23,0,5.49,2.108,5.49,5.122c0,3.407-1.794,5.768-4.13,5.768c-1.291,0-2.257-1.021-1.948-2.277 c0.372-1.495,1.089-3.112,1.089-4.191c0-0.967-0.542-1.775-1.663-1.775c-1.319,0-2.379,1.309-2.379,3.059 c0,1.115,0.394,1.869,0.394,1.869s-1.302,5.279-1.54,6.261c-0.405,1.666,0.053,4.368,0.094,4.604 c0.021,0.126,0.167,0.169,0.25,0.063c0.129-0.165,1.699-2.419,2.142-4.051c0.158-0.59,0.817-2.995,0.817-2.995 c0.43,0.784,1.681,1.446,3.013,1.446c3.963,0,6.822-3.494,6.822-7.833C20.394,5.112,16.849,2,12.289,2"})),(0,l.createElement)(g.SVG,{viewBox:"0 0 44 44"},(0,l.createElement)(g.Path,{d:"M32.59521,22.001l4.31885-4.84473-6.34131-1.38379.646-6.459-5.94336,2.61035L22,6.31934l-3.27344,5.60351L12.78418,9.3125l.645,6.458L7.08643,17.15234,11.40479,21.999,7.08594,26.84375l6.34131,1.38379-.64551,6.458,5.94287-2.60938L22,37.68066l3.27344-5.60351,5.94287,2.61035-.64551-6.458,6.34277-1.38183Zm.44385,2.75244L30.772,23.97827l-1.59558-2.07391,1.97888.735Zm-8.82147,6.1579L22.75,33.424V30.88977l1.52228-2.22168ZM18.56226,13.48816,19.819,15.09534l-2.49219-.88642L15.94037,12.337Zm6.87719.00116,2.62043-1.15027-1.38654,1.86981L24.183,15.0946Zm3.59357,2.6029-1.22546,1.7381.07525-2.73486,1.44507-1.94867ZM22,29.33008l-2.16406-3.15686L22,23.23688l2.16406,2.93634Zm-4.25458-9.582-.10528-3.836,3.60986,1.284v3.73242Zm5.00458-2.552,3.60986-1.284-.10528,3.836L22.75,20.92853Zm-7.78174-1.10559-.29352-2.94263,1.44245,1.94739.07519,2.73321Zm2.30982,5.08319,3.50817,1.18164-2.16247,2.9342-3.678-1.08447Zm2.4486,7.49285L21.25,30.88977v2.53485L19.78052,30.91Zm3.48707-6.31121,3.50817-1.18164,2.33228,3.03137-3.678,1.08447Zm10.87219-4.28113-2.714,3.04529L28.16418,19.928l1.92176-2.72565ZM24.06036,12.81769l-2.06012,2.6322-2.059-2.63318L22,9.292ZM9.91455,18.07227l4.00079-.87195,1.921,2.72735-3.20794,1.19019Zm2.93024,4.565,1.9801-.73462L13.228,23.97827l-2.26838.77429Zm-1.55591,3.58819L13.701,25.4021l2.64935.78058-2.14447.67853Zm3.64868,1.977L18.19,27.17334l.08313,3.46332L14.52979,32.2793Zm10.7876,2.43549.08447-3.464,3.25165,1.03052.407,4.07684Zm4.06824-3.77478-2.14545-.68,2.65063-.781,2.41266.825Z"}));var B=()=>(0,l.createElement)("div",{className:"wp-block-embed is-loading"},(0,l.createElement)(g.Spinner,null));const V={};V.resource=(0,l.createElement)("svg",{height:"20",viewBox:"0 0 11 20",width:"11",xmlns:"http://www.w3.org/2000/svg"},(0,l.createElement)("g",{fill:"#231f20"},(0,l.createElement)("path",{d:"m2.4 17.96h.38l.93 2.04h-.48l-.18-.43h-.93l-.18.43h-.46zm-.13 1.26h.63l-.3-.72h-.02c0-.01-.31.72-.31.72z"}),(0,l.createElement)("path",{d:"m4.59 17.96h1.88v.39h-.72v1.65h-.44v-1.65h-.72z"}),(0,l.createElement)("path",{d:"m8.34 17.96v1.65h1.18v.39h-1.61v-2.04z"}),(0,l.createElement)("path",{d:"m1.48 15.26h8.04v.52h-8.04z"}),(0,l.createElement)("path",{d:"m0 .03c1.21.03 2.75-.03 4.24-.03 2.03 0 4.41.39 4.41 2.91 0 1.38-1.16 2.85-3.27 2.94 1.53.16 2.34.88 2.84 2.46.75 2.31 1.18 3.03 2.72 2.97l.06.22c-.47.24-.99.35-1.52.33-1.6 0-2.4-1.35-2.88-3.13-.63-2.34-1.91-2.61-3.54-2.61v1.45c0 1.36.03 2.88.03 2.88 0 .54.21.66.88.75l.88.11v.35h-4.85v-.35l.74-.11c.46-.08.74-.21.74-.75 0 0 .01-.72.01-2.88v-3.57c0-1.25-.01-2.17-.01-2.74 0-.54-.28-.67-.74-.75l-.74-.11zm3.06 5.64h.87c2.23 0 3.09-1.08 3.09-2.71 0-2.05-1.6-2.4-3.07-2.4-.3-.01-.59.02-.88.06-.01 0-.01 5.05-.01 5.05z"}))),V.intro_paragraph=(0,l.createElement)("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},(0,l.createElement)("path",{d:"m23.1 0c.5 0 .9.4.9.9v5.1c0 .5-.4.9-.9.9h-1.7c-.5 0-.9-.4-.9-.9v-1.7h-6.4v16.3h2.1c.5 0 .9.4.9.9v1.7c0 .5-.4.9-.9.9h-8.5c-.5 0-.9-.4-.9-.9v-1.7c0-.5.4-.9.9-.9h2.1v-16.3h-6.4v1.7c0 .5-.4.9-.9.9h-1.6c-.5 0-.9-.4-.9-.9v-5.1c0-.5.4-.9.9-.9z"}),(0,l.createElement)("path",{d:"m0 0h24v24h-24z",fill:"none"})),V.body_text=(0,l.createElement)("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},(0,l.createElement)("path",{d:"m.7 17.1h19.1c.4 0 .7-.3.7-.7v-2.1c0-.4-.3-.7-.7-.7h-19.1c-.4.1-.7.4-.7.8v2.1c0 .3.3.6.7.6zm0-13.7h14.1c.4 0 .7-.3.7-.7v-2c0-.4-.3-.7-.7-.7h-14.1c-.4 0-.7.3-.7.7v2.1c0 .3.3.6.7.6zm22.4 3.5h-22.2c-.5 0-.9.3-.9.8v1.7c0 .5.4.9.9.9h22.3c.5 0 .9-.4.9-.9v-1.7c-.1-.5-.5-.8-1-.8zm0 13.7h-22.2c-.5 0-.9.4-.9.8v1.7c0 .5.4.9.9.9h22.3c.5 0 .9-.4.9-.9v-1.7c-.1-.4-.5-.8-1-.8z"}),(0,l.createElement)("path",{d:"m0 0h25v24h-25z",fill:"none"})),V.image_full_width=(0,l.createElement)("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},(0,l.createElement)("path",{d:"m0 0h24v24h-24z",fill:"none"}),(0,l.createElement)("path",{d:"m21.74 19.2h-19.48c-1.25 0-2.26-.8-2.26-1.8v-10.8c0-1 1.01-1.8 2.26-1.8h19.5c1.23 0 2.24.8 2.24 1.8v10.8c0 1-1.01 1.8-2.26 1.8zm-16.48-12.3c-1.46 0-2.63.94-2.63 2.1s1.18 2.1 2.63 2.1 2.61-.94 2.61-2.1-1.17-2.1-2.61-2.1zm-2.26 9.9h18v-4.2l-4.1-3.28c-.22-.18-.58-.18-.79 0l-6.37 5.08-2.6-2.08c-.22-.18-.58-.18-.79 0l-3.35 2.68z"})),V.two_column_images=(0,l.createElement)("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},(0,l.createElement)("path",{d:"m10.87 17.72h-9.74c-.63 0-1.13-.64-1.13-1.43v-8.58c0-.79.5-1.43 1.13-1.43h9.74c.63 0 1.13.64 1.13 1.43v8.58c0 .79-.5 1.43-1.13 1.43zm-8.24-9.78c-.73 0-1.31.75-1.31 1.66 0 .92.59 1.66 1.31 1.66s1.31-.75 1.31-1.66-.59-1.66-1.31-1.66zm-1.13 7.87h9v-3.34l-2.05-2.59c-.11-.14-.29-.14-.4 0l-3.18 4.03-1.3-1.65c-.11-.14-.29-.14-.4 0l-1.67 2.12z"}),(0,l.createElement)("path",{d:"m22.87 17.72h-9.74c-.62 0-1.13-.64-1.13-1.43v-8.58c0-.79.5-1.43 1.13-1.43h9.74c.63 0 1.13.64 1.13 1.43v8.58c0 .79-.5 1.43-1.13 1.43zm-8.24-9.78c-.73 0-1.31.75-1.31 1.66 0 .92.59 1.66 1.31 1.66s1.31-.75 1.31-1.66-.59-1.66-1.31-1.66zm-1.13 7.87h9v-3.34l-2.05-2.61c-.11-.14-.29-.14-.4 0l-3.18 4.03-1.3-1.65c-.11-.14-.29-.14-.4 0l-1.68 2.12z"}),(0,l.createElement)("path",{d:"m0 0h24v24h-24z",fill:"none"})),V.vimeo=(0,l.createElement)("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},(0,l.createElement)("path",{d:"m22.4 7.16c-.09 2.03-1.51 4.8-4.24 8.32-2.84 3.68-5.23 5.52-7.19 5.52-1.21 0-2.24-1.12-3.08-3.36-.56-2.05-1.12-4.1-1.68-6.16-.62-2.24-1.29-3.36-2-3.36-.16 0-.7.33-1.63.98l-.99-1.26c1.03-.9 2.04-1.81 3.04-2.71 1.37-1.18 2.4-1.8 3.09-1.86 1.62-.16 2.62.95 2.99 3.32.4 2.56.69 4.15.84 4.77.47 2.12.98 3.18 1.54 3.18.44 0 1.09-.69 1.96-2.06.87-1.38 1.34-2.42 1.4-3.14.12-1.19-.34-1.78-1.4-1.78-.5 0-1.01.11-1.54.34 1.02-3.35 2.98-4.98 5.86-4.88 2.14.05 3.15 1.43 3.03 4.14z"}),(0,l.createElement)("path",{d:"m0 0h24v24h-24z",fill:"none"})),V.single_image=(0,l.createElement)("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},(0,l.createElement)("path",{d:"m19.8 19.2h-15.6c-1 0-1.8-.8-1.8-1.8v-10.8c0-1 .8-1.8 1.8-1.8h15.6c1 0 1.8.8 1.8 1.8v10.8c0 1-.8 1.8-1.8 1.8zm-13.2-12.3c-1.16 0-2.1.94-2.1 2.1s.94 2.1 2.1 2.1 2.1-.94 2.1-2.1-.94-2.1-2.1-2.1zm-1.8 9.9h14.4v-4.2l-3.28-3.28c-.18-.18-.46-.18-.64 0l-5.08 5.08-2.08-2.08c-.18-.18-.46-.18-.64 0l-2.68 2.68z"}),(0,l.createElement)("path",{d:"m0 0h24v24h-24z",fill:"none"}));var P=V,M=e=>{let{label:t,value:r,onSubmit:c,onChange:n,cannotEmbed:a,fallback:o,tryAgain:i}=e;return(0,l.createElement)(g.Placeholder,{icon:(0,l.createElement)(x.BlockIcon,{icon:P.vimeo}),label:t,className:"wp-block-embed",instructions:(0,b.__)("URL to the Vimeo video. Video should be aspect ratio 137 : 66\n suggested sizes:\n 1530px x 737px (preferred) 1370px x 660px")},(0,l.createElement)("form",{onSubmit:c},(0,l.createElement)("input",{type:"url",value:r||"",className:"components-placeholder__input","aria-label":t,placeholder:(0,b.__)("https://player.vimeo.com/video/xxxxxxxxx"),onChange:n}),(0,l.createElement)(g.Button,{variant:"primary",type:"submit"},(0,b._x)("Embed","button label"))),a&&(0,l.createElement)("div",{className:"components-placeholder__error"},(0,l.createElement)("div",{className:"components-placeholder__instructions"},(0,b.__)("Sorry, this content could not be embedded.")),(0,l.createElement)(g.Button,{variant:"secondary",onClick:i},(0,b._x)("Try again","button label"))," ",(0,l.createElement)(g.Button,{variant:"secondary",onClick:o},(0,b._x)("Convert to link","button label"))))};function N(){return N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var c in r)Object.prototype.hasOwnProperty.call(r,c)&&(e[c]=r[c])}return e},N.apply(this,arguments)}var L=window.wp.compose;const C={class:"className",frameborder:"frameBorder",marginheight:"marginHeight",marginwidth:"marginWidth"};function O(e){let{html:t}=e;const r=(0,l.useRef)(),c=(0,l.useMemo)((()=>{const e=(new window.DOMParser).parseFromString(t,"text/html").querySelector("iframe"),r={};return e?(Array.from(e.attributes).forEach((e=>{let{name:t,value:c}=e;"style"!==t&&(r[C[t]||t]=c)})),r):r}),[t]);return(0,l.useEffect)((()=>{const{ownerDocument:e}=r.current,{defaultView:t}=e;function n(e){let{data:{secret:t,message:n,value:l}={}}=e;"height"===n&&t===c["data-secret"]&&(r.current.height=l)}return t.addEventListener("message",n),()=>{t.removeEventListener("message",n)}}),[]),(0,l.createElement)("div",{className:"wp-block-embed__wrapper"},(0,l.createElement)("iframe",N({ref:(0,L.useMergeRefs)([r,(0,L.useFocusableIframe)()]),title:c.title},c)))}class G extends l.Component{constructor(){super(...arguments),this.hideOverlay=this.hideOverlay.bind(this),this.state={interactive:!1}}static getDerivedStateFromProps(e,t){return!e.isSelected&&t.interactive?{interactive:!1}:null}hideOverlay(){this.setState({interactive:!0})}render(){const{preview:e,previewable:t,url:r,type:c,className:n,icon:a,label:o}=this.props,{scripts:i}=e,{interactive:s}=this.state,v="photo"===c?(e=>{const t=e.thumbnail_url||e.url,r=(0,l.createElement)("p",null,(0,l.createElement)("img",{src:t,alt:e.title,width:"100%"}));return(0,l.renderToString)(r)})(e):e.html,h=new URL(r).host.split("."),u=h.splice(h.length-2,h.length-1).join("."),d=(0,b.sprintf)((0,b.__)("Embedded content from Vimeo"),u),p=m()(c,n,"wp-block-embed__wrapper"),w="wp-embed"===c?(0,l.createElement)(O,{html:v}):(0,l.createElement)("div",{className:"wp-block-embed__wrapper"},(0,l.createElement)(g.SandBox,{html:v,scripts:i,title:d,type:p,onFocus:this.hideOverlay}),!s&&(0,l.createElement)("div",{className:"block-library-embed__interactive-overlay",onMouseUp:this.hideOverlay}));return(0,l.createElement)("figure",{className:m()(n,"wp-block-embed",{"is-type-video":"video"===c})},t?w:(0,l.createElement)(g.Placeholder,{icon:(0,l.createElement)(x.BlockIcon,{icon:a,showColors:!0}),label:o},(0,l.createElement)("p",{className:"components-placeholder__error"},(0,l.createElement)("a",{href:r},r)),(0,l.createElement)("p",{className:"components-placeholder__error"},(0,b.sprintf)((0,b.__)("Embedded content from Vimeo can't be previewed in the editor."),u))))}}var Z=G,H=r(184),j=r.n(H),R=window.wp.data,T=window.wp.coreData;const{name:F,...A}=n;(0,c.registerBlockType)(F,{...A,icon:P.vimeo,edit:e=>{const{attributes:{providerNameSlug:t,previewable:r,url:n},attributes:a,isSelected:i,onReplace:s,setAttributes:m,insertBlocksAfter:v,onFocus:h}=e,w={title:(0,b._x)("Embed","block title"),icon:k},{icon:f,title:g}=(y=t,(null===(S=(0,c.getBlockVariations)(u))||void 0===S?void 0:S.find((e=>{let{name:t}=e;return t===y})))||w);var y,S;const[V,P]=(0,l.useState)(n),[N,L]=(0,l.useState)(!1),{invalidateResolution:C}=(0,R.useDispatch)(T.store),{preview:O,fetching:G,cannotEmbed:H}=(0,R.useSelect)((e=>{var t;const{getEmbedPreview:r,isPreviewEmbedFallback:c,isRequestingEmbedPreview:l}=e(T.store);if(!n)return{fetching:!1,cannotEmbed:!1};const a=r(n),o=c(n),i=!1===(null==a?void 0:a.html)&&void 0===(null==a?void 0:a.type),s=404===(null==a||null===(t=a.data)||void 0===t?void 0:t.status),m=!!a&&!i&&!s;return{preview:m?a:void 0,fetching:l(n),cannotEmbed:!m||o}}),[n]),F=()=>{const{className:e}=a;return{...a,...E(O,g,e)}};(0,l.useEffect)((()=>{if(null==O||!O.html||!H||G)return;const e=n.replace(/\/$/,"");P(e),L(!1),m({url:e})}),[null==O?void 0:O.html,n]),(0,l.useEffect)((()=>{if(O&&!N&&(m(F()),s)){const t=function(e){var t;let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{preview:n,attributes:l={}}=e,{url:a,providerNameSlug:i,type:s,...m}=l;if(!a||!(0,c.getBlockType)(u))return;const v=d(a),h="wordpress"===i||s===o;if(!h&&v&&(v.attributes.providerNameSlug!==i||!i))return(0,c.createBlock)(u,{url:a,...m,...v.attributes});const w=null===(t=(0,c.getBlockVariations)(u))||void 0===t?void 0:t.find((e=>{let{name:t}=e;return"wordpress"===t}));return w&&n&&p(n.html)&&!h?(0,c.createBlock)(u,{url:a,...w.attributes,...r}):void 0}(e,F());t&&s(t)}}),[O,N]);const A=(0,x.useBlockProps)({className:"resource-blocks-row"});if(G)return(0,l.createElement)(z.View,A,(0,l.createElement)(B,null));const D=(0,b.sprintf)((0,b.__)("Full-width Video"),g);if(!O||H||N)return(0,l.createElement)(z.View,A,(0,l.createElement)("div",{className:"resource-blocks-column"},(0,l.createElement)(M,{icon:f,label:D,onFocus:h,onSubmit:e=>{e&&e.preventDefault(),L(!1),m({url:V})},value:V,cannotEmbed:H,onChange:e=>P(e.target.value),fallback:()=>function(e,t){const r=(0,l.createElement)("a",{href:e},e);t((0,c.createBlock)("core/paragraph",{content:(0,l.renderToString)(r)}))}(V,s),tryAgain:()=>{C("getEmbedPreview",[V])}})));const{type:I,className:U}=F(),$=j()(U,e.className);return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(_,{showEditButton:O&&!H,switchBackToURLInput:()=>L(!0)}),(0,l.createElement)(z.View,A,(0,l.createElement)("div",{className:"resource-blocks-column"},(0,l.createElement)(Z,{preview:O,previewable:r,className:$,url:V,type:I,isSelected:i,icon:f,label:D,insertBlocksAfter:v}))))},save:function(e){let{attributes:t}=e;const{url:r,type:c,providerNameSlug:n}=t;if(!r)return null;const a=m()("wp-block-embed resource-blocks-row",{[`is-type-${c}`]:c,[`is-provider-${n}`]:n,[`wp-block-embed-${n}`]:n});return(0,l.createElement)("div",x.useBlockProps.save({className:a}),(0,l.createElement)("div",{className:"resource-blocks-column"},(0,l.createElement)("div",{className:"wp-block-embed__wrapper"},`\n${r}\n`)))}})},991:function(e,t){var r;!function(){"use strict";var c=function(){function e(){}function t(e,t){for(var r=t.length,c=0;c<r;++c)n(e,t[c])}e.prototype=Object.create(null);var r={}.hasOwnProperty,c=/\s+/;function n(e,n){if(n){var l=typeof n;"string"===l?function(e,t){for(var r=t.split(c),n=r.length,l=0;l<n;++l)e[r[l]]=!0}(e,n):Array.isArray(n)?t(e,n):"object"===l?function(e,t){if(t.toString===Object.prototype.toString)for(var c in t)r.call(t,c)&&(e[c]=!!t[c]);else e[t.toString()]=!0}(e,n):"number"===l&&function(e,t){e[t]=!0}(e,n)}}return function(){for(var r=arguments.length,c=Array(r),n=0;n<r;n++)c[n]=arguments[n];var l=new e;t(l,c);var a=[];for(var o in l)l[o]&&a.push(o);return a.join(" ")}}();e.exports?(c.default=c,e.exports=c):void 0===(r=function(){return c}.apply(t,[]))||(e.exports=r)}()},184:function(e,t){var r;!function(){"use strict";var c={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var l=typeof r;if("string"===l||"number"===l)e.push(r);else if(Array.isArray(r)){if(r.length){var a=n.apply(null,r);a&&e.push(a)}}else if("object"===l)if(r.toString===Object.prototype.toString)for(var o in r)c.call(r,o)&&r[o]&&e.push(o);else e.push(r.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},588:function(e){e.exports=function(e,t){var r,c,n=0;function l(){var l,a,o=r,i=arguments.length;e:for(;o;){if(o.args.length===arguments.length){for(a=0;a<i;a++)if(o.args[a]!==arguments[a]){o=o.next;continue e}return o!==r&&(o===c&&(c=o.prev),o.prev.next=o.next,o.next&&(o.next.prev=o.prev),o.next=r,o.prev=null,r.prev=o,r=o),o.val}o=o.next}for(l=new Array(i),a=0;a<i;a++)l[a]=arguments[a];return o={args:l,val:e.apply(null,l)},r?(r.prev=o,o.next=r):c=o,n===t.maxSize?(c=c.prev).next=null:n++,r=o,o.val}return t=t||{},l.clear=function(){r=null,c=null,n=0},l}}},r={};function c(e){var n=r[e];if(void 0!==n)return n.exports;var l=r[e]={exports:{}};return t[e](l,l.exports,c),l.exports}c.m=t,e=[],c.O=function(t,r,n,l){if(!r){var a=1/0;for(m=0;m<e.length;m++){r=e[m][0],n=e[m][1],l=e[m][2];for(var o=!0,i=0;i<r.length;i++)(!1&l||a>=l)&&Object.keys(c.O).every((function(e){return c.O[e](r[i])}))?r.splice(i--,1):(o=!1,l<a&&(a=l));if(o){e.splice(m--,1);var s=n();void 0!==s&&(t=s)}}return t}l=l||0;for(var m=e.length;m>0&&e[m-1][2]>l;m--)e[m]=e[m-1];e[m]=[r,n,l]},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,{a:t}),t},c.d=function(e,t){for(var r in t)c.o(t,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={890:0,84:0};c.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,l,a=r[0],o=r[1],i=r[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(n in o)c.o(o,n)&&(c.m[n]=o[n]);if(i)var m=i(c)}for(t&&t(r);s<a.length;s++)l=a[s],c.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return c.O(m)},r=self.webpackChunkresource_blocks=self.webpackChunkresource_blocks||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var n=c.O(void 0,[84],(function(){return c(47)}));n=c.O(n)}();