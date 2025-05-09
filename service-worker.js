self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("sumba-dictionary").then(cache => {
      return cache.addAll([
        "index.html",
        "styles.css",
        "dictionary.js",
        "logo.png",
        "background.jpg"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
