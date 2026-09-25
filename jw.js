const CACHE_NAME = 'compracerta-v2';
const ASSETS_TO_CACHE = [
'/',
'/index.html',
'/manifest.webmanifest',
'/icon-192.png',
'/icon-512.png'
];

// Instalação do Service Worker e armazenamento inicial em cache
self.addEventListener('install', event => {
event.waitUntil(
caches.open(CACHE_NAME)
.then(cache => {
console.log('A abrir o cache e a guardar os recursos essenciais');
return cache.addAll(ASSETS_TO_CACHE);
})
.then(() => self.skipWaiting())
);
});

// Ativação e limpeza de versões antigas do cache
self.addEventListener('activate', event => {
event.waitUntil(
caches.keys().then(cacheNames => {
return Promise.all(
cacheNames.map(cacheName => {
if (cacheName !== CACHE_NAME) {
console.log('A remover cache antigo obsoleto:', cacheName);
return caches.delete(cacheName);
}
})
);
}).then(() => self.clients.claim())
);
});

// Estratégia de Fetch: Prioridade para a rede, caindo para o cache se offline (Network First / Fallback to Cache)
self.addEventListener('fetch', event => {
// Ignora requisições que não sejam GET (como extensões ou APIs externas)
if (event.request.method !== 'GET') return;

event.respondWith(
fetch(event.request)
.then(response => {
// Se obteve sucesso na rede, clona a resposta e atualiza o cache local
if (response && response.status === 200 && response.type === 'basic') {
const responseToCache = response.clone();
caches.open(CACHE_NAME).then(cache => {
cache.put(event.request, responseToCache);
});
}
return response;
})
.catch(() => {
// Se a rede falhar, tenta recuperar do cache
return caches.match(event.request).then(cachedResponse => {
if (cachedResponse) {
return cachedResponse;
}
// Caso não esteja no cache e seja uma navegação de página, retorna o index.html
if (event.request.mode === 'navigate') {
return caches.match('/index.html');
}
});
})
);
});