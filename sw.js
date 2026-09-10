const SCOPE=new URL(self.registration.scope);
const CACHE_PREFIX='little-sun:'+SCOPE.pathname+':';
const CACHE=CACHE_PREFIX+'408043ea4e6b';
const FILES=[{"url":"./THIRD-PARTY-NOTICES.txt","integrity":"sha256-spt3Xx2Ka5Z6oUaYB5eUljRE+MKJxPKnMNCfgatarsQ="},{"url":"./assets/index-Clw0398C.js","integrity":"sha256-GKEfFb8djrAyFZDQ1wZaiZZPoDOfxiwNF34Rvb3Y+AU="},{"url":"./assets/index-tRPtAzTQ.css","integrity":"sha256-LJILI+e6eUOFX/kdXGOfubgYimrweRbPPweiGp2d47E="},{"url":"./assets/mother-baby.png","integrity":"sha256-sIAo/NW5DaLSMVo4ZuS/c/u+fsMJrPRktzUWdCTt9SQ="},{"url":"./icons/apple-touch-icon.png","integrity":"sha256-enUmsHa7LsaJBzk4lc9zy7X3JKlmJoCgkSpXVog4hY0="},{"url":"./icons/icon-192.png","integrity":"sha256-cGSRbH+IF9FnqL2rCw1y4XpsU4EoH/UN3ceh9RK3dvY="},{"url":"./icons/icon-512.png","integrity":"sha256-Q6Aw7yOg4wPhlmxO1ErFzd6chnY5+NtaRHNAgqNtFgA="},{"url":"./icons/icon-maskable-512.png","integrity":"sha256-Q6Aw7yOg4wPhlmxO1ErFzd6chnY5+NtaRHNAgqNtFgA="},{"url":"./icons/icon.svg","integrity":"sha256-EgpKhvfzum0Bib7Kgwe3VuM3cpn59YZF+xp6pLM2hPg="},{"url":"./index.html","integrity":"sha256-RpL81yec8xM3Dy4XWUxZ0yxqgsU7P6g41HecZTaWnzk="},{"url":"./manifest.webmanifest","integrity":"sha256-9HrmT/w5eJTRZK7ohI7nY+HtI4Irqw+QqKbGJmYTqXU="}];
const inScope=url=>url.origin===SCOPE.origin&&url.pathname.startsWith(SCOPE.pathname);
async function remember(cache,request,response) {
  if(response.ok&&(!response.url||inScope(new URL(response.url)))) {
    // Storage failures must not hide a successful network response
    await cache.put(request,response.clone()).catch(()=>{});
  }
}
async function offlinePage(cache) {
  // Only the shell installed with this version's complete assets is an entry.
  return await cache.match(new URL('./index.html',SCOPE).href)
    ||await cache.match(SCOPE.href);
}
async function navigate(request) {
  const cache=await caches.open(CACHE);
  try {
    // Revalidate the browser HTTP cache as well as bypassing the SW cache
    const response=await fetch(request,{cache:'no-cache'});
    // Online HTML may reference a release whose assets have not installed yet.
    // Serve it online, but never replace this worker's ready offline shell.
    if(response.ok)return response;
    return await offlinePage(cache)||response;
  } catch {
    return await offlinePage(cache)
      ||new Response('当前离线, 请联网后重新打开晴日小馆',{status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}});
  }
}
async function staticAsset(request) {
  const cache=await caches.open(CACHE),hit=await cache.match(request);
  if(hit)return hit;
  const response=await fetch(request);
  await remember(cache,request,response);
  return response;
}
self.addEventListener('install',event=>{
  // addAll commits atomically. Integrity also rejects mixed CDN releases, even
  // when every URL returns HTTP 200. Failure leaves the active version intact.
  const requests=FILES.map(file=>new Request(new URL(file.url,SCOPE),{cache:'reload',integrity:file.integrity}));
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(requests)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith(CACHE_PREFIX)&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET'||!inScope(new URL(event.request.url)))return;
  event.respondWith(event.request.mode==='navigate'?navigate(event.request):staticAsset(event.request));
});
