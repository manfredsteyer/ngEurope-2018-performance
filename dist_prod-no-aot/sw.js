importScripts('./assets/workbox-sw.dev.v2.0.2-rc1-2.0.2-rc1.0.js');

const workboxSW = new WorkboxSW();

const networkFirst = workboxSW.strategies.networkFirst();
const cacheFirst = workboxSW.strategies.cacheFirst();

workboxSW.router.registerRoute(new RegExp('^http:\/\/www.angular.at\/api\/'), networkFirst);
workboxSW.router.registerRoute(/./, cacheFirst);

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());


