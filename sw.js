self.addEventListener('install', function(event){
  console.log('[Service worker] Install Service worker..', event);
})

self.addEventListener('activate', function(event){
  console.log('[Service worker] Activate Service worker..', event);
  return self.clients.claim();
})

self.addEventListener('fetch', function(event){
  console.log('[Service worker] Fetching Something..', event);
  event.respondWith(fetch(event.request));
})