if(!self.define){let e,a={};const i=(i,n)=>(i=new URL(i+".js",n).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(a[o])return;let r={};const c=e=>i(e,o),d={module:{uri:o},exports:r,require:c};a[o]=Promise.all(n.map((e=>d[e]||c(e)))).then((e=>(s(...e),r)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/LICENSE.txt",revision:"52fb7b03c8113347399dc9eee53f40e8"},{url:"/_next/static/U8bYzUwv6SI-TlFBFZYzm/_buildManifest.js",revision:"ce33a2aa2c891c45bdff09ea580d36e5"},{url:"/_next/static/U8bYzUwv6SI-TlFBFZYzm/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1a48c3c1-0a1c1bc4e2f1afee.js",revision:"0a1c1bc4e2f1afee"},{url:"/_next/static/chunks/244-ca0ca9fa3ccb1885.js",revision:"ca0ca9fa3ccb1885"},{url:"/_next/static/chunks/332-321168626ea5442e.js",revision:"321168626ea5442e"},{url:"/_next/static/chunks/framework-2c79e2a64abdb08b.js",revision:"2c79e2a64abdb08b"},{url:"/_next/static/chunks/main-41c7a067006caf69.js",revision:"41c7a067006caf69"},{url:"/_next/static/chunks/pages/%5Bsubreddit%5D-583d6144ec6401ac.js",revision:"583d6144ec6401ac"},{url:"/_next/static/chunks/pages/%5Bsubreddit%5D/%5Bsort%5D-1a7dfee38a87cd0a.js",revision:"1a7dfee38a87cd0a"},{url:"/_next/static/chunks/pages/_app-7bd19f9142cfd4c7.js",revision:"7bd19f9142cfd4c7"},{url:"/_next/static/chunks/pages/_error-fcce2422d9844950.js",revision:"fcce2422d9844950"},{url:"/_next/static/chunks/pages/auth/authorize-d6aeb35546ee6f19.js",revision:"d6aeb35546ee6f19"},{url:"/_next/static/chunks/pages/index-22f909b323e4d6ca.js",revision:"22f909b323e4d6ca"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-7e0a04d6d1a844f2.js",revision:"7e0a04d6d1a844f2"},{url:"/_next/static/css/a075f60b010aebac.css",revision:"a075f60b010aebac"},{url:"/_next/static/media/aileron-latin-400-normal.64e7cc20.woff",revision:"64e7cc20"},{url:"/_next/static/media/aileron-latin-400-normal.9829f17d.woff2",revision:"9829f17d"},{url:"/_next/static/media/fasthand-all-400-normal.993e05d2.woff",revision:"993e05d2"},{url:"/_next/static/media/fasthand-khmer-400-normal.bf544b98.woff2",revision:"bf544b98"},{url:"/_next/static/media/fasthand-latin-400-normal.6dfd1dab.woff2",revision:"6dfd1dab"},{url:"/_next/static/media/league-spartan-all-400-normal.c6d190b0.woff",revision:"c6d190b0"},{url:"/_next/static/media/league-spartan-latin-400-normal.f62736e9.woff2",revision:"f62736e9"},{url:"/_next/static/media/league-spartan-latin-ext-400-normal.c0c0b18c.woff2",revision:"c0c0b18c"},{url:"/_next/static/media/league-spartan-vietnamese-400-normal.2751ea00.woff2",revision:"2751ea00"},{url:"/android/android-launchericon-144-144.png",revision:"18cc5e87b1f9c7fbb5452aabf4d180e1"},{url:"/android/android-launchericon-192-192.png",revision:"860e76e54a04ec3dcbe58441b6e207c7"},{url:"/android/android-launchericon-48-48.png",revision:"50159884353e10ea85e634a0e923bda8"},{url:"/android/android-launchericon-512-512.png",revision:"9f214a26d24b49da6350dd5cdec8a677"},{url:"/android/android-launchericon-72-72.png",revision:"b43d03e98700f6db744d7dc8ba74ed84"},{url:"/android/android-launchericon-96-96.png",revision:"c51975fbbc7002172c45faff1ca8cf21"},{url:"/favicon.ico",revision:"49abf5f64edd5c1c4d3d9bb2d2aae734"},{url:"/ios/100.png",revision:"6963710f4f852bacfeb492259561734d"},{url:"/ios/1024.png",revision:"f530092621962b5b4d7ec79e1e7672a1"},{url:"/ios/114.png",revision:"f8bab8f754a9afd616d1d1510fe0980e"},{url:"/ios/120.png",revision:"645ccb61a9be7f42481900d1245e28c9"},{url:"/ios/128.png",revision:"ce3407b519a4be37a21ae51b44ce7d7d"},{url:"/ios/144.png",revision:"18cc5e87b1f9c7fbb5452aabf4d180e1"},{url:"/ios/152.png",revision:"86514c59259c672cd5e6c077f093e593"},{url:"/ios/16.png",revision:"3193770d700b4f4eddfb534f15dc0c6e"},{url:"/ios/167.png",revision:"3624afd01262e1091e5f497379ed924c"},{url:"/ios/180.png",revision:"47e5cc45c330e85421dd07f290ccbea6"},{url:"/ios/192.png",revision:"860e76e54a04ec3dcbe58441b6e207c7"},{url:"/ios/20.png",revision:"45d9366210d6c19b525841480e4c930e"},{url:"/ios/256.png",revision:"e01127f79489659983256c7a5888e551"},{url:"/ios/29.png",revision:"369cb8fe73d7ba3879b66e73c1547119"},{url:"/ios/32.png",revision:"40f34995a8baaff38b675cf8bc7082dc"},{url:"/ios/40.png",revision:"9400e0ac24800f0faa4962c32eb7d30f"},{url:"/ios/50.png",revision:"df2fdd90d7965197bd1e76123e8b5de7"},{url:"/ios/512.png",revision:"9f214a26d24b49da6350dd5cdec8a677"},{url:"/ios/57.png",revision:"bb7cb5d8da525e6065238835b3c61338"},{url:"/ios/58.png",revision:"a28dcbd0c12962d212e5860ac2812353"},{url:"/ios/60.png",revision:"214a39eb090c50a8c36325dae5aba23c"},{url:"/ios/64.png",revision:"c2edb2ff8680f72653375d8249d4fc3c"},{url:"/ios/72.png",revision:"b43d03e98700f6db744d7dc8ba74ed84"},{url:"/ios/76.png",revision:"e6a397c6ec62c7cbcb8b762087a7b337"},{url:"/ios/80.png",revision:"d7345bc12a62830fd00e8910ab2c51de"},{url:"/ios/87.png",revision:"ec11ccc80a7659deb12701dd58a0b3e9"},{url:"/logo.svg",revision:"ed538f7a16173ae65a6e3203cc0f7fd1"},{url:"/logo_hq.png",revision:"52d7a144dcac640ef268ec66948237a0"},{url:"/logo_small.svg",revision:"125e06a6ec90718a697a05fb6d2d83e2"},{url:"/manifest.json",revision:"b9a293a69c19993b7e0453ad60404d16"},{url:"/maskable/maskable_icon.png",revision:"f6d4c608bbf61efd80ceddae1d248340"},{url:"/maskable/maskable_icon_x128.png",revision:"270980aa67c564a11644da506d8ff097"},{url:"/maskable/maskable_icon_x192.png",revision:"22dfff82b9a61b687b0f614cb252d57c"},{url:"/maskable/maskable_icon_x384.png",revision:"4cd67886e2e4f708c6088c6eb1bb821c"},{url:"/maskable/maskable_icon_x48.png",revision:"b02f10d9c12e53dc7627778fc0981468"},{url:"/maskable/maskable_icon_x72.png",revision:"84308a8f909c1bf03b1c663a7241c15c"},{url:"/maskable/maskable_icon_x96.png",revision:"bf61d10195481bee10c4654ac31abfe5"},{url:"/maskable_icon.png",revision:"bf91096b4d529d50efbf0c7a0d124649"},{url:"/screenshots/1.jpg",revision:"bc8cae5932e787075a465dec6b298746"},{url:"/screenshots/2.jpg",revision:"58428a2c66bea7d1507d245755983bf9"},{url:"/screenshots/3.jpg",revision:"bd4266c04735ea1cf2dfe846defbaa58"},{url:"/screenshots/4.jpg",revision:"2a82d24963d2d66f3884e53d89e552b6"},{url:"/windows11/LargeTile.scale-100.png",revision:"91b6f65806b704628ad967065d5d56b7"},{url:"/windows11/LargeTile.scale-125.png",revision:"d26536cffbf03dd4c75c34ca99e487b8"},{url:"/windows11/LargeTile.scale-150.png",revision:"4d1b60a5614f88ecfb8f184bdc0d1fe4"},{url:"/windows11/LargeTile.scale-200.png",revision:"85d1de875e56054d855562a7ccce1e4c"},{url:"/windows11/LargeTile.scale-400.png",revision:"adeb2fbbb38edc8a10e0cbdba752d7ab"},{url:"/windows11/SmallTile.scale-100.png",revision:"19267687fc0cd8476e6c3edd39ffdd4f"},{url:"/windows11/SmallTile.scale-125.png",revision:"7f857bb8d3e6980337fecb89b592e1ad"},{url:"/windows11/SmallTile.scale-150.png",revision:"d23d15748dfb0378b2110139a1fcd722"},{url:"/windows11/SmallTile.scale-200.png",revision:"5db6f3bc7ad0dc93f9ccbc185f8806d3"},{url:"/windows11/SmallTile.scale-400.png",revision:"3670821fae95d9fd159b32c336247bbe"},{url:"/windows11/SplashScreen.scale-100.png",revision:"274aa9adfaab9eaf221cf59ca6ccc7e6"},{url:"/windows11/SplashScreen.scale-125.png",revision:"c1010ce52c553a8e0cb2fa51cd1655a2"},{url:"/windows11/SplashScreen.scale-150.png",revision:"49cd2187b16459ba021dd08b7dc333c9"},{url:"/windows11/SplashScreen.scale-200.png",revision:"3d9777fd087a5be892edcf811bfc2ec0"},{url:"/windows11/SplashScreen.scale-400.png",revision:"4bde590ad6f1866c1ab15d1f34de9fba"},{url:"/windows11/Square150x150Logo.scale-100.png",revision:"17e6788d0b5eeb98be62c151e75b687c"},{url:"/windows11/Square150x150Logo.scale-125.png",revision:"2b03c6f7b9ea4efd0811b84a376bbb22"},{url:"/windows11/Square150x150Logo.scale-150.png",revision:"b3f9f38455c5ab5d57aaac9940583c78"},{url:"/windows11/Square150x150Logo.scale-200.png",revision:"154ffbe4cf1b25ca2851fcf2c169fbed"},{url:"/windows11/Square150x150Logo.scale-400.png",revision:"0e70f3b95e155c7e242b6073d71cfff6"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"b7f4380ee6a2f2e90a3eb9672a60b968"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"4a2d211ae93ad677ec407a9c65bfced5"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"fbe45f21a949abc5c7e8baa0b584318a"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"ce443554955ba33ea150ec25c1b5ecbe"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"6409f7b2733f05fd3f0ef94f9c69fe39"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"1e541f3f116ed2863b172ce81b9c4523"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"69ccd8f43089b867e5f214f8b0ea0353"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"53228f544f40dbd7f186a9b41e1b376d"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"2ce72b7859aae4f95140df8e773a8926"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"f925c729027cb25ca7861ebf44db486c"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"3ab521be7c2e6b4a1a4d7feb6500a8ed"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"1593eb3bee3ef911b957fd5322de1abf"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"0b5c1e9605860c40eff0fb12222ed7f4"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"3abdc61f6f5b405add725e0607fb2c71"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"7f50776d0762e1e26f9051475573d13b"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"b7f4380ee6a2f2e90a3eb9672a60b968"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"4a2d211ae93ad677ec407a9c65bfced5"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"fbe45f21a949abc5c7e8baa0b584318a"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"ce443554955ba33ea150ec25c1b5ecbe"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"6409f7b2733f05fd3f0ef94f9c69fe39"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"1e541f3f116ed2863b172ce81b9c4523"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"69ccd8f43089b867e5f214f8b0ea0353"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"53228f544f40dbd7f186a9b41e1b376d"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"2ce72b7859aae4f95140df8e773a8926"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"f925c729027cb25ca7861ebf44db486c"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"3ab521be7c2e6b4a1a4d7feb6500a8ed"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"1593eb3bee3ef911b957fd5322de1abf"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"0b5c1e9605860c40eff0fb12222ed7f4"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"3abdc61f6f5b405add725e0607fb2c71"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"7f50776d0762e1e26f9051475573d13b"},{url:"/windows11/Square44x44Logo.scale-100.png",revision:"2ce72b7859aae4f95140df8e773a8926"},{url:"/windows11/Square44x44Logo.scale-125.png",revision:"bf9cbf31733c72889985604dcfc9809d"},{url:"/windows11/Square44x44Logo.scale-150.png",revision:"779acf0873b4ddee144a7e11f4248172"},{url:"/windows11/Square44x44Logo.scale-200.png",revision:"f4b7e497d29992afcbaaa87ed318e53e"},{url:"/windows11/Square44x44Logo.scale-400.png",revision:"2429bebc0e9f004a6b5e08e6de05acf4"},{url:"/windows11/Square44x44Logo.targetsize-16.png",revision:"b7f4380ee6a2f2e90a3eb9672a60b968"},{url:"/windows11/Square44x44Logo.targetsize-20.png",revision:"4a2d211ae93ad677ec407a9c65bfced5"},{url:"/windows11/Square44x44Logo.targetsize-24.png",revision:"fbe45f21a949abc5c7e8baa0b584318a"},{url:"/windows11/Square44x44Logo.targetsize-256.png",revision:"ce443554955ba33ea150ec25c1b5ecbe"},{url:"/windows11/Square44x44Logo.targetsize-30.png",revision:"6409f7b2733f05fd3f0ef94f9c69fe39"},{url:"/windows11/Square44x44Logo.targetsize-32.png",revision:"1e541f3f116ed2863b172ce81b9c4523"},{url:"/windows11/Square44x44Logo.targetsize-36.png",revision:"69ccd8f43089b867e5f214f8b0ea0353"},{url:"/windows11/Square44x44Logo.targetsize-40.png",revision:"53228f544f40dbd7f186a9b41e1b376d"},{url:"/windows11/Square44x44Logo.targetsize-44.png",revision:"2ce72b7859aae4f95140df8e773a8926"},{url:"/windows11/Square44x44Logo.targetsize-48.png",revision:"f925c729027cb25ca7861ebf44db486c"},{url:"/windows11/Square44x44Logo.targetsize-60.png",revision:"3ab521be7c2e6b4a1a4d7feb6500a8ed"},{url:"/windows11/Square44x44Logo.targetsize-64.png",revision:"1593eb3bee3ef911b957fd5322de1abf"},{url:"/windows11/Square44x44Logo.targetsize-72.png",revision:"0b5c1e9605860c40eff0fb12222ed7f4"},{url:"/windows11/Square44x44Logo.targetsize-80.png",revision:"3abdc61f6f5b405add725e0607fb2c71"},{url:"/windows11/Square44x44Logo.targetsize-96.png",revision:"7f50776d0762e1e26f9051475573d13b"},{url:"/windows11/StoreLogo.scale-100.png",revision:"df2fdd90d7965197bd1e76123e8b5de7"},{url:"/windows11/StoreLogo.scale-125.png",revision:"aa58e2111f5967739ef8c35f416f5e96"},{url:"/windows11/StoreLogo.scale-150.png",revision:"94a05542bf9391c3f652a715c6cd37f4"},{url:"/windows11/StoreLogo.scale-200.png",revision:"6963710f4f852bacfeb492259561734d"},{url:"/windows11/StoreLogo.scale-400.png",revision:"009c8518f8cac9e8a6d8ab6a33416593"},{url:"/windows11/Wide310x150Logo.scale-100.png",revision:"fb1c4d8286035044733c2ab5ecf2d527"},{url:"/windows11/Wide310x150Logo.scale-125.png",revision:"5d3f86a533ae707f7cfb8cc16533aeb6"},{url:"/windows11/Wide310x150Logo.scale-150.png",revision:"8ab327d61d2d54367bfd29453181b06c"},{url:"/windows11/Wide310x150Logo.scale-200.png",revision:"274aa9adfaab9eaf221cf59ca6ccc7e6"},{url:"/windows11/Wide310x150Logo.scale-400.png",revision:"3d9777fd087a5be892edcf811bfc2ec0"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:i,state:n})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
