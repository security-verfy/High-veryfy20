
self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  self.clients.claim();
  setInterval(() => {
    self.clients.matchAll().then(clients => {
      clients.forEach(client => {
        client.postMessage('try-location');
      });
    });
  }, 20000); // 20 seconds
});
