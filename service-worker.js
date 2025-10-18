self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("evo360-cache").then(cache => {
      return cache.addAll([
        "/EVO360/",
        "/EVO360/index.html",
        "/EVO360/assets/css/main.css",
        "/EVO360/assets/js/app.js"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
