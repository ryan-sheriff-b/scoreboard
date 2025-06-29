'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "88c7087617d5ffbb58ff25d77a0dcee8",
"version.json": "640b12013833d59c0c4e64c78f5d45bf",
"index.html": "a5486f3e38b328543b76360aaf28ebf1",
"/": "a5486f3e38b328543b76360aaf28ebf1",
"main.dart.js": "85f67fbbf65082bc65a6b3c3f3c6ab0c",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5777b348c97246427bb898f25447a470",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1a922d5ee0436c24695b0ab256e04f27",
".git/ORIG_HEAD": "80afd18451fde62af0963b2aad82aedd",
".git/config": "2236ddc1733321dada9031ea513de151",
".git/objects/92/29157807cd9c639ad1c2058ad0ace73259b252": "72c7ad8c8f0c62597fdcb0fa6e96caa6",
".git/objects/0c/f8a81adfcd240addf0b78e1556f1545349e3d3": "d09236b0f82e0849ec4e33cfdb555ad6",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9e/87e84053fae1efa3dc1c8c2bbb264c634d81c8": "24bbb23ddaf1e732507ae47e31826552",
".git/objects/04/cae5fbcd519a29250f882bfa1f87b910982d11": "6e8d03be92028cf2c0cb190e0b22d881",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/32/56257815d18afc778f8533a581e6aa9da95e94": "cf498bf24da87832d7e2a76c877daa9c",
".git/objects/69/58fadc9810c640b847b1127ce31104431e41ee": "415d291afc35abe3e68a0dd634877ee6",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/51/96ca29f2c12e902c4a0ed70a973ddc0b05115b": "56b091d02063f58739ee0ba2b6ef4930",
".git/objects/3d/2c285b21098b69dabbe56cdcdea1cc4af93ecd": "a678b34c9fefebbcc8e60b4f1f63a2cb",
".git/objects/5f/8d0aab7e2ee6cd2bb33f933cdba1aaba1c2afb": "d1c283e8cd9d9ec3ffd5c24305973121",
".git/objects/02/dddc575abc31d040b4e1957d007dc410309c56": "b6465a4ce698828c8d47cf7dd17843ba",
".git/objects/d9/996349034c86411f9c2608dcb553a7bd97e2ad": "26312dd8508fa7f5100b0ea8908013f2",
".git/objects/ad/a126fbbacec64d2ff69def87028e8d5bf2ed07": "6125426fc3888da47258ed9dbe90304a",
".git/objects/ad/f3e3554b24fd86e9967e5b8df01ef4ef397a94": "9db0c9bf9f1f0bdbdb7e2b74065438f4",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/d1/49ad75d2a674591b1ad6408b2ce4fafdea2959": "50f6ba0c725ccaaddf6b1fdd98b1130d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/e55b15b19bfbd03e104db6081b4b98b08af174": "62be9a4ec84933f382aaff41e2271475",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/1fd3800769784b8d6206d9e2121dde6086368b": "3c33b03dbda946ca7627abfa4f5bb9fb",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/28acc743d236715056dfde9d20ecd7fd8811fb": "28fc251eaaec8837dd59e9c5b8b0856a",
".git/objects/16/7619fb1baad2e1ff7f15ae050758d7b5711b4b": "372de9506f9bdb3a9e8da583a4b5e711",
".git/objects/16/b6431330aa8f9b7d206b93ec9ffe4582ee3b07": "cd7f0b3a696e4e1a419e708d095639b0",
".git/objects/1f/73b4f78049e998e41a9d5845a1f78e3a5ae9b8": "d6c7959389286ea1e84bf51e6346edcc",
".git/objects/1f/303acd93bd7f95a5163e76cc0f4165fb3af15d": "9e4fb0051ad79e9e495cd7ae127e4085",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/87/0dd4c4102c6eceb80d39598cc4274d050945e2": "238b3817777f462b818da39284fd8421",
".git/objects/87/28b94c35fd3d111597d63f02b925fa2f258971": "639e3a79abc92f2a95947af44eb989ee",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/5f22d9507bc7a63aeb362d585380a80ea4d956": "3f5d77664b4b6f3770375f215282c817",
".git/objects/21/b10864f0719d1a3747a6ef2f54ad3cde26e848": "c121f80ad85bd2dbf9cf609fd2962682",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/43/cefa26cdf0a344d98fac541a7f3ecf2c67587e": "860b4be3450afe276b7f8b0bded5d060",
".git/objects/43/f3978271dd5a65c20e90609461cd7cb3bc3e11": "d52e515cf42757657dac056283eb5104",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6e/4cf4a09ad412d5acb54a0f97cc5b9c0f23100a": "10250ed98693131c20df676c309981a4",
".git/objects/36/4e5a5e0b292d7c5d42641c605b87880c79998d": "9b9de925b2f60c429dc103c0eccb2b0b",
".git/objects/65/4c15b164d39232ba353f1240535fc1615c89b5": "e75b72741ef892bed67d70c3dac930f2",
".git/objects/3a/dfc9c508c90713edbf84b1cbb0613b1057e4ab": "8d140623d21fc6082ee876722973b52f",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/98/f345c9ccd24dffb4d341587f92fd16ba4ea6b2": "5fd00617023d37d7e8a7e3e549ec4c4e",
".git/objects/37/c4656bcb1abe36a830d89a571c73fb5970d7c9": "d23ecc442a20dc7ad7b0e9cfa7fa7abe",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/6d/ece03bc2ba52ce7482bcb98dcbec0ece73920b": "6ca83299c504b7221daa2727e6d8449d",
".git/objects/01/3789fbee3486be487f593fd81b746212404cb3": "5c422a6d28425c659383e34009122efd",
".git/objects/6c/862a3cb1711de1256894f3feabf8314c3d5c13": "57e5c7e123fff2aa3eb6b812bb024df5",
".git/objects/64/eb796bb32d42867c95e0da3c269bd4301943dc": "22d9b118f3163ac0b2bf56d9ba8ba642",
".git/objects/90/268395c1f5f1f3e7548f44c82064b4190ae274": "b8289ea9bf7fc6a6cef24b81f443c2fd",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/bf/799320d12fde48687bf28066eba35a02958f27": "8aa81bb893bf3936ff357c82194e7181",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/277bec0bbdbfd799b023ae39d7136955a08eb4": "bd8da07afc8d0274957c0b4160661e4e",
".git/objects/d5/25455d5c1783af8d82cb69c32d4a685df9e27b": "a2e4191ca764c066a3460129c22dfd9c",
".git/objects/aa/8bfae9aa8a1a76545d0b6aa5e812638e9d2b30": "da4c2435f471487bc5700a9db43dd01e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/01eb0aa0fa98e11df1ea752c74c28b17fcd547": "81ce6a40090e47aaf53da7332c81193e",
".git/objects/db/8975e08b6605571244a9f8cff1dd92839d272a": "11aa1ee13dfaa1c37ea03486e7742514",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/32241d3ee6fdf761e820a09efbef67461a87a5": "3346164058cd00d1b66a9c82fd5bb940",
".git/objects/c3/35179df2c8d96a51147ed94793de1049796ca5": "756127732d378c6fb9c9f0581f3430b3",
".git/objects/cc/9d567d806a6f23fcb9423ee226d225db3f085c": "b35e4f7108c89191754907eeb7f32ba7",
".git/objects/f0/024e3995d04049d2695a8befffe4dc46c4c03a": "0b73934d14ff419d90767d7a306a4500",
".git/objects/e8/2ad5901fe29b9b1596f5bedf8df8d252f110b7": "ba69d74a1ed1cc324f78fd78fbf9dd51",
".git/objects/ff/cb42c7c3f95c876222623189c109128a0443f4": "6e6f29f00465a88ab178c305c34ae2d5",
".git/objects/c5/8d2a12890afbd245d34182ced2f4adb3b7185c": "c51cdd4888a605e6109f0c9b806ef75a",
".git/objects/c2/648b04935bcd4fea478e6fc178c62de428c80f": "77c4085cb72ff52f4897d588be992a96",
".git/objects/e7/ddd49fbde136e97e17f7c5f8cfe9baaa42af10": "7795fdb0b83475b271f4fe3f7313ba92",
".git/objects/e7/132cb915ccfc00453163db5e5d1901a8f27ded": "77d131e52fd9e93757a1cbc59dd8ed64",
".git/objects/cb/4547e536ca0480393249884a1a4ca1a4d85198": "a3ed5fb30295f31aa35a2dc3e1f7e35b",
".git/objects/e0/a02ee557e81eae1e4e986b2188c9ad3ebfa4bf": "6ada749f8ba23ef0de02938bca1a090a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/e8bd234a4ae81158546b1158d1620e0423fbf5": "241d9e0406b223ac131627961fdfdba2",
".git/objects/79/83fa1a017c9c1b81c8c5e65d1e7a3c57871f2b": "1ca08abd107418055dfafafca407b595",
".git/objects/1e/f0f9d3d7c1a09ab0d6d46d65f87d45e50d61dd": "989532d9892f4d19531457fcd2dfc498",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/d543a67773011436c073db7cff2cdf35046a59": "7bdf2ee9c50b9b7ea850b115f9475ae7",
".git/objects/85/0626fd3aa77ed8e33aea874026d1b2ef49a072": "7056eb0d6f6389159c7190b507777645",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/8b/ad39761a5fd1a74880910332c6ea555856001d": "6f7d4e1b571146b088f04a951ba40a27",
".git/objects/14/f87d52df0b4ab63fe03c7ef27d9be25c352337": "b1356375eafc9768b876b522add58f02",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/b1ace661520055e22e693a61fa1836f28d3e6a": "65d9c58b37d10a70531d461aac0dadee",
".git/objects/25/de84f9fd9371a209b3eab7cc533e3e445089d2": "b6eefb179bb0360c9250a2527cfc5032",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6204c7d8508bb3f3aff4d7ab4bff6956",
".git/logs/refs/heads/main": "548c3a37e242fbefd17643840cce868c",
".git/logs/refs/remotes/origin/main": "721ed0e0202220ce5c5e3fb716860962",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "80afd18451fde62af0963b2aad82aedd",
".git/refs/remotes/origin/main": "80afd18451fde62af0963b2aad82aedd",
".git/index": "d0b8b963f39b4391016dae80c7233263",
".git/COMMIT_EDITMSG": "d1bf2f2bd3de831653bc0bacbb09b467",
".git/FETCH_HEAD": "5d10160e0429d3a971b5fe6cdf7d78d1",
"assets/AssetManifest.json": "9ba2f4fc1ce74f31a13209a497b3c061",
"assets/NOTICES": "dbfa82796ffd388eeb5e9c0014d69f3a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "e7a2e0ac93b4c2af5e9bb381103e7141",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "e5a49b800fd4741bd9b940bbdf24fcd1",
"assets/fonts/MaterialIcons-Regular.otf": "4b6940de53639b17e435b56c226940e7",
"assets/assets/Mask%2520group.png": "220868bc36ffd5cd6fb46672806ef4e1",
"assets/assets/light-logo.png": "250b25b4032751321f6c600b41fcb755",
"assets/assets/Group%252014.png": "250b25b4032751321f6c600b41fcb755",
"assets/assets/logo.png": "0d8a41ebe5cd30b405cc237de948debd",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
