'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "b7601e693be6a324cb433e29d39717ef",
"index.html": "78bdc277fc4d73e14953f7fef5bf9cac",
"/": "78bdc277fc4d73e14953f7fef5bf9cac",
"main.dart.js": "3c7192201ce23fd374e1d542170d9376",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "43c7335e1c85555e0b82da657ff9b441",
"assets/AssetManifest.json": "b5dc2895b3695fc92593994c62742c3b",
"assets/NOTICES": "59287063f87ffa217261dd8d9080fdf1",
"assets/FontManifest.json": "d8372b70d21b625c2d4602b7327224b7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "e3a9fd00752df02e250fe3d73c98ceff",
"assets/fonts/MaterialIcons-Regular.otf": "ffbbabd032918c20242ecc0f8d99b3bd",
"assets/assets/video/spa_ad_video.mp4": "65311edf08a6faf0ba263ad5bdc20ec7",
"assets/assets/social_media_icon/ic_x.png": "2b236352f66d2ed4c3935b1294ef059e",
"assets/assets/social_media_icon/ic_insta.png": "e117818a4938c93167a3ad616af8a4b0",
"assets/assets/social_media_icon/ic_fb.png": "db9b0cd8368ab73cb123e63d56a36424",
"assets/assets/social_media_icon/ic_yt.png": "08e85eed10324fdb677f8eddce553e7b",
"assets/assets/images/dog.png": "b8e13cfb66b5f6a9c0b65a6fd2e3a526",
"assets/assets/images/banner_right_1.jpeg": "1a83acc8e92152e0d659641d4c9f9d81",
"assets/assets/images/event.png": "91a7f70bca8bad310bd935f942697c36",
"assets/assets/images/banner_image.jpg": "904ee5e880f7d6331c368a4bab306b08",
"assets/assets/images/services_pricing.jpeg": "8f123cfa8492eb3b03ef1997a5965e4f",
"assets/assets/images/app_icon.png": "4823326058f4afe3da51b87a797add87",
"assets/assets/images/clipboard.png": "6b5d5720ebfb5f31dc1178e233e26f50",
"assets/assets/images/banner_left_3.jpeg": "f066a41ec388cf22ddcb1bc4a739a456",
"assets/assets/images/shower.png": "7dd1adb874bd8f8971a3b7154af06b1e",
"assets/assets/images/ic_spa_logo.jpg": "9252e05a45b803975c9a9074801f6d13",
"assets/assets/images/weight_lifter.png": "f5e725d86d50341b4b28d500cc4dc054",
"assets/assets/images/run.png": "0c68345abd711c6ed657fccd16c35767",
"assets/assets/images/about_us_image.png": "4aac1e80ad95a6e30674f43d12a338f3",
"assets/assets/images/bottom_background_image.jpg": "35c147d2b669e3e0cedf64ed11cfd007",
"assets/assets/images/wrestling.png": "97abcd8688b3dd0a53e7b6a28876d8c3",
"assets/assets/images/memo.png": "d52fe912752a12d2e4833c27461577e6",
"assets/assets/images/cyc.png": "0d2acfba5ca5a926551ea7726397890b",
"assets/assets/images/lotus.png": "42320733fba502855a164c73ffca3754",
"assets/assets/images/banner_right_3.jpeg": "173b24eb05526a6ae60d4a0b849f93af",
"assets/assets/images/sufter.png": "2f30a3082d2e15c24ef92df9ef696c4b",
"assets/assets/images/basket_ball.png": "afd70dcb413126e4afda8f2486f44e13",
"assets/assets/images/hammer.png": "b6ebf83db20645bd49e16c65e8261d6d",
"assets/assets/images/spa_location.png": "29f05cf8818a15dd2fcd68821c482864",
"assets/assets/images/swim.png": "e225ac1200a49ad7f253c56133bdd670",
"assets/assets/images/golf.png": "14392cd7e3292daae5236ae88f6cab48",
"assets/assets/images/open_hour_background.jpg": "e3f0bc4ce0453cac29502c59c29b60e6",
"assets/assets/images/spa_logo_transparent.png": "b213c35146393c41cbe7fcfddb0201bc",
"assets/assets/images/banner_left.jpeg": "02704af5f6d982dc87e2ce817872d1c5",
"assets/assets/images/banner_left_2.jpg": "2969fa3f2077e113230b34b4fc6cd975",
"assets/assets/images/open_book.png": "66ae871af386853071738c533ee5843e",
"assets/assets/images/imagelogin.png": "2a7852bb74dcaa895369376b6fe6319e",
"assets/assets/images/banner_right_2.jpeg": "ce531d21843407c25bcf7b79ab32c11b",
"assets/assets/dummy_image/spa_3.jpeg": "0a3833ec8d54775fece01afc77b795c9",
"assets/assets/dummy_image/spa_2.jpeg": "5d046de7eeff792fd252871440b71e5a",
"assets/assets/dummy_image/spa_5.jpeg": "1952e9f3577db8985d57db716bb5a255",
"assets/assets/dummy_image/spa_8.jpeg": "edd6fac020ee61d9072cfbc37e10e1cf",
"assets/assets/dummy_image/spa_4.jpeg": "7f1d354f348fd9f900eba2963f384074",
"assets/assets/dummy_image/spa_6.jpeg": "eb657aefce00d435679fce5b7d3457e4",
"assets/assets/dummy_image/spa_1.jpeg": "19931fb1bca1dade605b50687a665af4",
"assets/assets/fonts/PlayfairDisplay-VariableFont_wght.ttf": "9262890da570b6e8d1741d0e88138b9c",
"assets/assets/fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf": "7a2b1e55108afc8ac045e60953c6c75e",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
