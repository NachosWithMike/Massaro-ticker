self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('ticker-store').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/styles.css',
        '/ticker.js',
        '/manifest.json',
        '/icon-192.png',
        '/icon-512.png',
        '/icon.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});