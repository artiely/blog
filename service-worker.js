/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6ae45edcd51a7bb8999dc7a5769ba49d"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.2173700b.css",
    "revision": "e9854d195daf9442de3c6ad7de9ca271"
  },
  {
    "url": "assets/img/0.75e5ce67.png",
    "revision": "75e5ce67ce0cac437d615d4366696436"
  },
  {
    "url": "assets/img/1.e552afb7.png",
    "revision": "e552afb708fab5f9b8cff007251c5591"
  },
  {
    "url": "assets/img/2.8365eace.png",
    "revision": "8365eacec5c48828c44a9527fbd47cde"
  },
  {
    "url": "assets/img/3.a3c81f67.png",
    "revision": "a3c81f67958d886079768becbc52316f"
  },
  {
    "url": "assets/img/css3.b839c134.jpg",
    "revision": "b839c1344b558e77a15bc409d15b36be"
  },
  {
    "url": "assets/js/1.8c81e4d4.js",
    "revision": "4de3d93795b126212e7e5914596fcc28"
  },
  {
    "url": "assets/js/10.12604f94.js",
    "revision": "c31167a451c3ee2e1c6aeb592ad036c5"
  },
  {
    "url": "assets/js/11.0cdec5c1.js",
    "revision": "a1d362b8ff350ec3cee536bd5ac85873"
  },
  {
    "url": "assets/js/12.9bf73653.js",
    "revision": "895dbe793fa2282d6df2440d788f778e"
  },
  {
    "url": "assets/js/13.d95297fb.js",
    "revision": "2273b672101cbd86635e29bd61384eeb"
  },
  {
    "url": "assets/js/14.2ea2a3c7.js",
    "revision": "18c7fb2f8fec2804c083b8e46dceec2c"
  },
  {
    "url": "assets/js/15.c2a0d56f.js",
    "revision": "c3c2c20721ec60fb04cbb045721b619f"
  },
  {
    "url": "assets/js/16.40241c79.js",
    "revision": "8cc77633fa57d574b45f0e60cc28df5f"
  },
  {
    "url": "assets/js/17.31e81dcd.js",
    "revision": "f1d024286a639430abf70513b475ef24"
  },
  {
    "url": "assets/js/18.93a9df77.js",
    "revision": "7fcd03b0fe263ed839fe50c82f93cc1b"
  },
  {
    "url": "assets/js/19.e8ebed72.js",
    "revision": "c9c9533e8563ebd1d6ed4739115a37ac"
  },
  {
    "url": "assets/js/2.bf28a613.js",
    "revision": "94dd8d262bad3a274b84dbff03456ad8"
  },
  {
    "url": "assets/js/20.a56d40fe.js",
    "revision": "caac2c9c91383bddf56e5bfb506e78e3"
  },
  {
    "url": "assets/js/21.c45cc6a0.js",
    "revision": "99bdb255b94d802129ccb94ede6f3eb4"
  },
  {
    "url": "assets/js/22.038bdad3.js",
    "revision": "78e0381ac77325ea3ef9af8111deca9e"
  },
  {
    "url": "assets/js/23.5162a8b8.js",
    "revision": "53a1f79450692feda7cedbdc13c0f773"
  },
  {
    "url": "assets/js/24.b607a018.js",
    "revision": "b59f6a404600b635bfd76fcfda2bbcd0"
  },
  {
    "url": "assets/js/25.de0c6c2a.js",
    "revision": "e1a916d3d4610e68d354ddb6623c542c"
  },
  {
    "url": "assets/js/26.5e21a563.js",
    "revision": "5d2d97f9fc9ee75a0cb6e3b235b449e0"
  },
  {
    "url": "assets/js/27.ab439d69.js",
    "revision": "7f0bf0c631fa16bb2d71ea54f700c7b1"
  },
  {
    "url": "assets/js/28.4fd966e2.js",
    "revision": "6d4d1b419e8b9c6d366e817956b5d86d"
  },
  {
    "url": "assets/js/29.392ab91e.js",
    "revision": "47eeb23860beea8ed97726ba2f2f4f27"
  },
  {
    "url": "assets/js/3.3649ee24.js",
    "revision": "fe80452d7e4f737fe620602b035fd69a"
  },
  {
    "url": "assets/js/30.09e7f492.js",
    "revision": "10f612690469c62436b818fcfd01466c"
  },
  {
    "url": "assets/js/31.78ce8ce8.js",
    "revision": "d1ee65b58a187baee5cb6ce149679156"
  },
  {
    "url": "assets/js/32.19b01470.js",
    "revision": "f8c17314f5f624f7dce893f524ed5f26"
  },
  {
    "url": "assets/js/33.f51f05b0.js",
    "revision": "dbbb034a5e9f7134c39c8ccf80b8d0b5"
  },
  {
    "url": "assets/js/34.589ca9e3.js",
    "revision": "9778f82fd2d5884c5e606fb83738d90b"
  },
  {
    "url": "assets/js/35.661ead7a.js",
    "revision": "6a3a0835350f9dbd1d93a947676cc632"
  },
  {
    "url": "assets/js/36.d77d4378.js",
    "revision": "e8285e199b37a8cac2cc7aea0e7bd261"
  },
  {
    "url": "assets/js/37.f7bdde40.js",
    "revision": "e2a4dc7252e0c0366f9b75da02381922"
  },
  {
    "url": "assets/js/6.ae858723.js",
    "revision": "9ef7b06a367d37f66da210856b87398e"
  },
  {
    "url": "assets/js/7.b00630ee.js",
    "revision": "00b81592aa4665afa7fe0675ee79f060"
  },
  {
    "url": "assets/js/8.6beadc7e.js",
    "revision": "4cc59f8884a7773761f14724d9b2a3ac"
  },
  {
    "url": "assets/js/9.1603bf11.js",
    "revision": "9cdfc7a71451b7abe490fa43c4b847cf"
  },
  {
    "url": "assets/js/app.cf0e29ea.js",
    "revision": "576eff0f2034ea0136c287e3aabcb046"
  },
  {
    "url": "assets/js/vendors~notification.14a8d4df.js",
    "revision": "f3231c5bf69be3e5d70e5a88ef32c08e"
  },
  {
    "url": "category/index.html",
    "revision": "59df82dfed13dccd5ce134a585021fd1"
  },
  {
    "url": "guide/rule/css.html",
    "revision": "4d86a4ccb5b13d0260de615a13cb3827"
  },
  {
    "url": "guide/rule/desgin.html",
    "revision": "2d1de8c8030751c7d6290f4a8dcec53a"
  },
  {
    "url": "guide/rule/file.html",
    "revision": "a493c1a176ef024b6f8a1490541014ed"
  },
  {
    "url": "guide/rule/html.html",
    "revision": "4f59b9547d3051ef308b00ab17a659f3"
  },
  {
    "url": "guide/rule/index.html",
    "revision": "c9c9bd3a29a7a7f3b782433b271e9af7"
  },
  {
    "url": "guide/rule/interview.html",
    "revision": "69e037582e1448cecc7e1d0359468b46"
  },
  {
    "url": "guide/rule/js.html",
    "revision": "790703498db7a85d8b8beabf8b7eac19"
  },
  {
    "url": "guide/rule/question.html",
    "revision": "600dd80e9bc80026bfd784a3ec21f366"
  },
  {
    "url": "guide/rule/vue.html",
    "revision": "fa067dc2ad94845558eef62867f04949"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "4c5adbf4541deedf68495cbc1e677d87"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "note/get-vs-post.html",
    "revision": "b3715453e006b0d6767e87eef2b5f6c4"
  },
  {
    "url": "note/get-vs-post.jpg",
    "revision": "af890acaf9e731f9b72acaeaed4b8821"
  },
  {
    "url": "note/index.html",
    "revision": "d7788e07359a88c895ba18b3959d4741"
  },
  {
    "url": "note/weiyunsuan.jpg",
    "revision": "606390001bc3ed2653575c3a462ed05c"
  },
  {
    "url": "original/axios.jpg",
    "revision": "2f403bbb0d8481804b99bd493531017c"
  },
  {
    "url": "original/create-custom-VuePress-theme.html",
    "revision": "829df086c9e39d05c5f0adcce8131f98"
  },
  {
    "url": "original/index.html",
    "revision": "fa4681a253e1ed88108b8800763c4929"
  },
  {
    "url": "original/vscode.png",
    "revision": "3f981acdd2c7c5959db6de937efb4aea"
  },
  {
    "url": "original/vue-cli.html",
    "revision": "9f4a58e00070ab8b0b8387718f6ca9a7"
  },
  {
    "url": "original/vue-router.html",
    "revision": "24fdb1d2135ab90b3e2235a48dc5fa80"
  },
  {
    "url": "original/vue-vscode.html",
    "revision": "28e83f2859ede41b2a4e76120a3429d3"
  },
  {
    "url": "original/vue.observable.html",
    "revision": "c50e49a59eeccb94f3c3c38b64fe1a43"
  },
  {
    "url": "original/vuepress.png",
    "revision": "041cf4dd95e52ccca9872cd35339431e"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "rule/css.jpg",
    "revision": "385b1cd120f9e63862f1c8e8eda080e3"
  },
  {
    "url": "rule/css2.jpg",
    "revision": "e461335ae28344849da246750c4f3a9d"
  },
  {
    "url": "rule/html.jpg",
    "revision": "ccf1a2a6ceee432718494a2df80b568e"
  },
  {
    "url": "rule/js.png",
    "revision": "451741494e92a239759bae0a76a337ba"
  },
  {
    "url": "rule/qa.jpg",
    "revision": "e96d1fd06fafb892e3c6b92d0dee4e60"
  },
  {
    "url": "rule/vue.png",
    "revision": "1edf13fafa9bab2e621bb1733501a314"
  },
  {
    "url": "rule/vue2.png",
    "revision": "09145ad8dc41f2fb0116daaad6f8257c"
  },
  {
    "url": "tag/css,less,BEM.html",
    "revision": "e8a7e63c0f20857b56447610d84b4268"
  },
  {
    "url": "tag/file,filename.html",
    "revision": "23c68d8374e6f49cd4ae6d9b5ff78c6d"
  },
  {
    "url": "tag/get,post,HTTP,TCP/IP.html",
    "revision": "b549734c5f61e625e8320393dfcb5b31"
  },
  {
    "url": "tag/html,web,html5.html",
    "revision": "ca326c3c3db6531062a45d22183695a4"
  },
  {
    "url": "tag/index.html",
    "revision": "a82b16dfa5da73b298f889a2d8997d66"
  },
  {
    "url": "tag/js,eslint,javascript.html",
    "revision": "c77d35a4020e3db43a644ca7d0f55485"
  },
  {
    "url": "tag/promise,nodejs,http,api,fetch,vue,axios.html",
    "revision": "984af766b30b9a5916f51d9ee1b728e9"
  },
  {
    "url": "tag/vue,eslint,standard.html",
    "revision": "9efb75a8c2e920bf4247ad4bfbeb4acd"
  },
  {
    "url": "tag/vue,VScode,vetur,ESLint,prettier.html",
    "revision": "0737fcf95aa820361d79ec39358a6414"
  },
  {
    "url": "tag/vuepress,vue.html",
    "revision": "fbce1f6cad311bc90c4ba375badfdfa8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
