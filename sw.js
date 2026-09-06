const SCOPE=new URL(self.registration.scope);
const CACHE_PREFIX='little-sun:'+SCOPE.pathname+':';
const CACHE=CACHE_PREFIX+'38040839afd5';
const FILES=["./","./THIRD-PARTY-NOTICES.txt","./assets/index-0dgLRma3.js","./assets/index-ClWw5FCD.css","./assets/mother-baby.png","./icons/apple-touch-icon.png","./icons/icon-192.png","./icons/icon-512.png","./icons/icon-maskable-512.png","./icons/icon.svg","./index.html","./manifest.webmanifest"];
const inScope=url=>url.origin===SCOPE.origin&&url.pathname.startsWith(SCOPE.pathname);
async function remember(cache,request,response) {
  if(response.ok&&(!response.url||inScope(new URL(response.url)))) {
    // Storage failures must not hide a successful network response
    await cache.put(request,response.clone()).catch(()=>{});
  }
}
async function offlinePage(cache,request) {
  return await cache.match(request)
    ||await cache.match(new URL('./index.html',SCOPE).href)
    ||await cache.match(SCOPE.href);
}
async function navigate(request) {
  const cache=await caches.open(CACHE);
  try {
    // Revalidate the browser HTTP cache as well as bypassing the SW cache
    const response=await fetch(request,{cache:'no-cache'});
    if(response.ok){await remember(cache,request,response);return response;}
    return await offlinePage(cache,request)||response;
  } catch {
    return await offlinePage(cache,request)
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
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith(CACHE_PREFIX)&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET'||!inScope(new URL(event.request.url)))return;
  event.respondWith(event.request.mode==='navigate'?navigate(event.request):staticAsset(event.request));
});
