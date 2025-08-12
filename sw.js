self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('entrevista-cache').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './padrao_css_sistema.css',
        './manifest.json',
        './icon-192.png',
        './icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});