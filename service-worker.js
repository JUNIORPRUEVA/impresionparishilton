self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("mini-printer-app").then((cache) => {
      return cache.addAll(["./", "./indice.html", "./manifest.json"]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
