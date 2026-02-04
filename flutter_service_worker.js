'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c2e8ee3428a16b34b3fe069994148bb2",
"assets/AssetManifest.bin.json": "4e311cdfff61e4a0dd37ce91780ddd28",
"assets/AssetManifest.json": "ac69858ce7a256477a3c56b04ed90723",
"assets/assets/aya.png": "70ebfd346a6d53e5757b5670cb2264f8",
"assets/assets/data/portfolio_data.json": "d44f6219c3cfb7a1be1da51d2ee880f0",
"assets/assets/flowers.webp": "61bc2ac23cf3a2ea600e8dca01753d59",
"assets/assets/fonts/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/icons/bag.svg": "96e1b75332ae4f9667983da8597115ac",
"assets/assets/icons/business.svg": "d8c2fc359e5e9b1c11d0110a094c8eae",
"assets/assets/icons/close.svg": "c016113dddf783cd63e63334232df18f",
"assets/assets/icons/contact.svg": "4f6095f5153c092da0e73bcd8ecd7e10",
"assets/assets/icons/corner-flag.svg": "dccbf74b0d2b70bc4265e811aa437d31",
"assets/assets/icons/education.svg": "dc18ee90b1fded11dc0e97cfe1efd094",
"assets/assets/icons/email.svg": "f7736e6cfff07f94e0eb6ad8271d6e99",
"assets/assets/icons/folder.svg": "2f49d156081a46132ffca5d4cd6a8aea",
"assets/assets/icons/github.svg": "9ad35834c8cdbb8af80a9abfdd7ac8d0",
"assets/assets/icons/home.svg": "9318afc2c9cd423bd53e640b1d7a32c4",
"assets/assets/icons/linkedin.svg": "c2f6e4bcb02f9e77e596556683ce72df",
"assets/assets/icons/logo.png": "0d614b6dc87f0518a285b7b680bb1b12",
"assets/assets/icons/logo.svg": "3a5550dc5afaff860fefc98a36cf7aba",
"assets/assets/icons/menu%2520(1).svg": "8ebf007565f04580a649119d7d2eef0a",
"assets/assets/icons/menu.svg": "56db957ec669887e7835c182052a2ebf",
"assets/assets/icons/phone.svg": "21741fcf6ef598b3c0c2f54368df96e2",
"assets/assets/icons/send.svg": "c3b54dca08876ea2769f724c4b89761b",
"assets/assets/icons/skills.svg": "d40afca2687e410476c14cc47572efee",
"assets/assets/icons/x.svg": "3b50ebacffbc05dfb17b85b14322ffb5",
"assets/assets/images/Aya1_logo-removebg-preview.png": "509bc5b795cf6a046eeb64c2ccb9fcdc",
"assets/assets/images/Aya1_logo.png": "b9536cfe7e6c11d7d29a1be628ba9212",
"assets/assets/images/Aya2_logo-removebg-preview.png": "77d41da38c2ce30f49302359bbbac6f1",
"assets/assets/images/Aya2_logo.png": "f312f16639e6f0b530180f74aac85dce",
"assets/assets/images/companies/cs_academy1_logo.jfif": "1387c9e6aa2a3241a3c001b73db43d15",
"assets/assets/images/companies/el_brics.jfif": "62240850fcb2c7c3d41755ce1046b45f",
"assets/assets/images/companies/e_connect_africa_logo.jfif": "5d92e4fbf979a9484b47abaf857fa3ba",
"assets/assets/images/companies/mentor_academy_learning.jfif": "ee71c66a228731f9cc7ecf489306f322",
"assets/assets/images/me.png": "a16ea053ea48b0a04807a6fe18266353",
"assets/assets/images/projects/care_connect_sudan.png": "4e2bb934f2442dd22bfe8866e95df427",
"assets/assets/images/projects/elbalto.png": "fd5623f4e193ffb8e86f08764923c925",
"assets/assets/images/projects/mighty.png": "064a9c414a3d28f4fb462630e89a3679",
"assets/assets/images/projects/quran.png": "053c06b883774582fae21b4506d05430",
"assets/assets/images/projects/tasky.png": "666e434327ab06cace09a0aaa4334e00",
"assets/FontManifest.json": "7837085563300506f909b27fd6450e85",
"assets/fonts/MaterialIcons-Regular.otf": "202470de1f96ebfd83a891d44d64340c",
"assets/NOTICES": "2760edb94f2450b444a33c4d35f0bbb6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "15d54d142da2f2d6f2e90ed1d55121af",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "262525e2081311609d1fdab966c82bfc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "269f971cec0d5dc864fe9ae080b19e23",
"assets/packages/text_gradiate/assets/images/samp1.jpg": "26e7fa6e2138b3802d6cd66106d607ed",
"assets/packages/text_gradiate/assets/images/samp2.jpg": "7aeb160623684419591737479fcb64bc",
"assets/packages/text_gradiate/assets/images/samp3.jpg": "1e71c58ff56111ce54869dcafc1eac33",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "91c3a196635521082d9940a77819c1b9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2ca43b37bf0cf56b7b9dfaa2efe99230",
"/": "2ca43b37bf0cf56b7b9dfaa2efe99230",
"main.dart.js": "23930d0c7af887b66f494f32b6233cae",
"manifest.json": "d760de48837289b1813fe2a100bea7a8",
"version.json": "d6eb0849afb30c29d064c479d99e5037"};
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
