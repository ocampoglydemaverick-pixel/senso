
const CACHE_NAME = 'senso-app-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/senso-icon-72x72.png',
  '/icons/senso-icon-96x96.png',
  '/icons/senso-icon-128x128.png',
  '/icons/senso-icon-144x144.png',
  '/icons/senso-icon-152x152.png',
  '/icons/senso-icon-192x192.png',
  '/icons/senso-icon-384x384.png',
  '/icons/senso-icon-512x512.png'
];

// Install a service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Cache and return requests
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// Update a service worker
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
