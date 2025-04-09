// Service Worker para Lupi Mídias

const CACHE_NAME = 'lupi-midias-cache-v1';
const OFFLINE_URL = '/offline.html';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/offline.html',
  '/logo.webp',
  '/icon.webp',
  '/assets/css/main.css',
  '/assets/js/main.js',
];

// Instalação do Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        // Pré-cache dos recursos críticos
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => self.skipWaiting())
  );
});

// Ativação do Service Worker e limpeza de caches antigos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            // Remover caches antigos
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Estratégia de cache: Stale-While-Revalidate
// Serve o cache existente primeiro (mesmo que antigo) e depois atualiza o cache
self.addEventListener('fetch', (event) => {
  // Ignora requisições não GET e requisições de analytics
  if (
    event.request.method !== 'GET' ||
    event.request.url.includes('google-analytics.com') ||
    event.request.url.includes('googletagmanager.com')
  ) {
    return;
  }

  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request).then((cachedResponse) => {
        const fetchPromise = fetch(event.request)
          .then((networkResponse) => {
            // Somente cachear respostas válidas
            if (
              networkResponse && 
              networkResponse.status === 200 && 
              networkResponse.type === 'basic'
            ) {
              // Não podemos usar a mesma resposta duas vezes, então precisamos cloná-la
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          })
          .catch((error) => {
            // Se não conseguirmos acessar a rede e não tivermos um cache,
            // voltar para a página offline
            if (event.request.mode === 'navigate') {
              return caches.match(OFFLINE_URL);
            }
            return null;
          });

        // Se temos um cache, retorne-o imediatamente, e então atualize-o
        return cachedResponse || fetchPromise;
      });
    })
  );
});

// Sincronização em segundo plano para formulários
self.addEventListener('sync', (event) => {
  if (event.tag === 'form-submit') {
    event.waitUntil(syncFormData());
  }
});

// Função para sincronizar dados de formulário armazenados localmente
async function syncFormData() {
  const dbPromise = indexedDB.open('form-data', 1);
  
  dbPromise.onupgradeneeded = function(event) {
    const db = event.target.result;
    if (!db.objectStoreNames.contains('outbox')) {
      db.createObjectStore('outbox', { keyPath: 'id', autoIncrement: true });
    }
  };
  
  const db = await new Promise((resolve) => {
    dbPromise.onsuccess = (event) => resolve(event.target.result);
  });
  
  const transaction = db.transaction('outbox', 'readwrite');
  const store = transaction.objectStore('outbox');
  const requests = await new Promise((resolve) => {
    const allRequests = [];
    store.openCursor().onsuccess = (event) => {
      const cursor = event.target.result;
      if (cursor) {
        allRequests.push(cursor.value);
        cursor.continue();
      } else {
        resolve(allRequests);
      }
    };
  });
  
  // Tentar enviar cada solicitação armazenada
  for (const request of requests) {
    try {
      await fetch(request.url, {
        method: request.method,
        headers: request.headers,
        body: request.body,
        mode: 'cors',
      });
      
      // Se bem-sucedido, remover da fila
      const deleteTransaction = db.transaction('outbox', 'readwrite');
      const deleteStore = deleteTransaction.objectStore('outbox');
      deleteStore.delete(request.id);
    } catch (error) {
      console.error('Falha ao sincronizar dados do formulário:', error);
    }
  }
}

// Notificações push
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    
    const options = {
      body: data.body,
      icon: '/icon.webp',
      badge: '/icon.webp',
      vibrate: [100, 50, 100],
      data: {
        url: data.url || '/'
      }
    };
    
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Ação ao clicar na notificação
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.notification.data && event.notification.data.url) {
    event.waitUntil(
      clients.openWindow(event.notification.data.url)
    );
  }
}); 