if(!self.define){let e,n={};const s=(s,c)=>(s=new URL(s+".js",c).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,i)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(n[a])return;let o={};const r=e=>s(e,a),t={module:{uri:a},exports:o,require:r};n[a]=Promise.all(c.map((e=>t[e]||r(e)))).then((e=>(i(...e),o)))}}define(["./workbox-6a1bf588"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Spotifylogo.png",revision:"31bad8d4fc4413d54f8c19930d3739b9"},{url:"/_next/static/-Oy2tlhpY-cLGB6SHtea6/_buildManifest.js",revision:"78b95c029c576645ce00a7e996452014"},{url:"/_next/static/-Oy2tlhpY-cLGB6SHtea6/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/381-d926dafbffb8adfc.js",revision:"d926dafbffb8adfc"},{url:"/_next/static/chunks/675-8889583564ec6bb0.js",revision:"8889583564ec6bb0"},{url:"/_next/static/chunks/754-a358904f41020b66.js",revision:"a358904f41020b66"},{url:"/_next/static/chunks/75fc9c18-e61c2e0d9c9a0957.js",revision:"e61c2e0d9c9a0957"},{url:"/_next/static/chunks/95b64a6e-0d85f820efe31998.js",revision:"0d85f820efe31998"},{url:"/_next/static/chunks/d7eeaac4-d2e678c26a0f3fd9.js",revision:"d2e678c26a0f3fd9"},{url:"/_next/static/chunks/framework-a87821de553db91d.js",revision:"a87821de553db91d"},{url:"/_next/static/chunks/main-ef49a9b9a3b3d5ff.js",revision:"ef49a9b9a3b3d5ff"},{url:"/_next/static/chunks/pages/_app-da41ea3bb9fe72a8.js",revision:"da41ea3bb9fe72a8"},{url:"/_next/static/chunks/pages/_error-a4ba2246ff8fb532.js",revision:"a4ba2246ff8fb532"},{url:"/_next/static/chunks/pages/collection/playlists-055386f7057f540a.js",revision:"055386f7057f540a"},{url:"/_next/static/chunks/pages/index-ae14de86a71d55b2.js",revision:"ae14de86a71d55b2"},{url:"/_next/static/chunks/pages/login-c2cc966920d15f42.js",revision:"c2cc966920d15f42"},{url:"/_next/static/chunks/pages/playlist/%5Bid%5D-5510f0cb9f357a42.js",revision:"5510f0cb9f357a42"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-cb7634a8b6194820.js",revision:"cb7634a8b6194820"},{url:"/_next/static/css/ac5254e310a2cc77.css",revision:"ac5254e310a2cc77"},{url:"/icons/android-icon-144x144.png",revision:"c3ce78c274a7c9f61fa7b755177d2577"},{url:"/icons/android-icon-192x192.png",revision:"e757b4b9120cb72b8dc20833368a7ee0"},{url:"/icons/android-icon-36x36.png",revision:"90959f2edf64f0ec1c0a3f68320e8723"},{url:"/icons/android-icon-48x48.png",revision:"394df0824b1d935dd47f3332c8ce6ccd"},{url:"/icons/android-icon-72x72.png",revision:"baff60a2be881c87575e2566d669e769"},{url:"/icons/android-icon-96x96.png",revision:"2a9cb24f285ed41c33d1d59b2183c4f4"},{url:"/icons/apple-icon-114x114.png",revision:"e5660d421915c5e0af11228811a99742"},{url:"/icons/apple-icon-120x120.png",revision:"155bf5c74099ab1bf0f46fd2e7bb9c44"},{url:"/icons/apple-icon-144x144.png",revision:"c3ce78c274a7c9f61fa7b755177d2577"},{url:"/icons/apple-icon-152x152.png",revision:"91346612332efaac0c6b56b61d3c6c06"},{url:"/icons/apple-icon-180x180.png",revision:"14d2930f0ff88a5d06952a9ad33d6794"},{url:"/icons/apple-icon-57x57.png",revision:"f97b41e62918155b8ac51a8620ff9196"},{url:"/icons/apple-icon-60x60.png",revision:"afe607914db940dbe8711167468e8600"},{url:"/icons/apple-icon-72x72.png",revision:"baff60a2be881c87575e2566d669e769"},{url:"/icons/apple-icon-76x76.png",revision:"cebc078d572c911b0815badb0b094701"},{url:"/icons/apple-icon-precomposed.png",revision:"aa6f355c011f1579584c6e2378704ce7"},{url:"/icons/apple-icon.png",revision:"aa6f355c011f1579584c6e2378704ce7"},{url:"/icons/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"/icons/favicon-16x16.png",revision:"29e0ebc250a2f0d57a0b9c6dd08e6f81"},{url:"/icons/favicon-32x32.png",revision:"ca32c71026c1f35181d71b6f36ab9f04"},{url:"/icons/favicon-96x96.png",revision:"2a9cb24f285ed41c33d1d59b2183c4f4"},{url:"/icons/favicon.ico",revision:"e7c0c2a7f964a7ed0f1f08d2cecabf06"},{url:"/icons/manifest.json",revision:"b58fcfa7628c9205cb11a1b2c3e8f99a"},{url:"/icons/ms-icon-144x144.png",revision:"c3ce78c274a7c9f61fa7b755177d2577"},{url:"/icons/ms-icon-150x150.png",revision:"32f4ea4655434af526ad7b4d2473cd7f"},{url:"/icons/ms-icon-310x310.png",revision:"744ea6bea82012be3cf4b906221632c5"},{url:"/icons/ms-icon-70x70.png",revision:"bd29b904309a7e014c3a4fd67abb6a89"},{url:"/manifest.json",revision:"1a565ae3e6e8ac7cf403c14970be51f5"},{url:"/poster1.jpg",revision:"d7199bb07a16fdad5704cfbcb92b5990"},{url:"/poster2.jpg",revision:"bdaa69f8376232e233e5c7096fcbe03e"},{url:"/poster3.jpg",revision:"797b7598e69b7183a9717442e39ac611"},{url:"/poster4.jpg",revision:"183d0a55f51f78fff01edec7d3f30a08"},{url:"/poster5.jpg",revision:"411151e77771ffd167307c3cb0b86c74"},{url:"/poster6.jpg",revision:"61d45a60a1f8d67cb0290655573e089c"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:n,event:s,state:c})=>n&&"opaqueredirect"===n.type?new Response(n.body,{status:200,statusText:"OK",headers:n.headers}):n}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const n=e.pathname;return!n.startsWith("/api/auth/")&&!!n.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
