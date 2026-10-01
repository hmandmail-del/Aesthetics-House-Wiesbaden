// Minimaler Service Worker: ermöglicht "Zum Startbildschirm hinzufügen".
// Er speichert bewusst nichts zwischen, damit immer die aktuelle Website geladen wird.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* Netzwerk wie gewohnt */ });
