// O app saiu de /atlas-copiloto/ para /atlas-copiloto/canastra-2026/.
// Este service worker substitui o antigo: apaga o cache, se desinstala e recarrega as abas abertas.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>{e.waitUntil((async()=>{
  const k=await caches.keys(); await Promise.all(k.filter(x=>x.startsWith('atlas-copiloto-')).map(x=>caches.delete(x)));
  await self.registration.unregister();
  for(const c of await self.clients.matchAll({type:'window'})) c.navigate(c.url);
})());});
