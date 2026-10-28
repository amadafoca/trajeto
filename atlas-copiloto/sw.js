const C='atlas-copiloto-v1';
const CORE=['./','./index.html','./manifest.webmanifest','../assets/v1/icon-192-fresh.png','../assets/v1/icon-512-fresh.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(CORE)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x.startsWith('atlas-copiloto-')&&x!==C).map(x=>caches.delete(x)))));self.clients.claim();});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  const u=new URL(e.request.url);
  if((u.origin===location.origin && u.pathname.startsWith('/atlas-copiloto/')) || u.host.includes('fonts.g') || u.host.includes('cdnjs.cloudflare.com')){
    e.respondWith(caches.match(e.request).then(r=>{
      const net=fetch(e.request).then(res=>{ if(res && res.status===200){ const cp=res.clone(); caches.open(C).then(c=>c.put(e.request,cp)); } return res; }).catch(()=>r);
      return r || net;
    }));
  }
});
