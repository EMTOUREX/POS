self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("df-pos-cache").then(cache =>
      cache.addAll(["index.html", "manifest.json"])
    )
  );
});
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
