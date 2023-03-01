// self.addEventListener("install", event => {
//     console.log("Service worker installed");
// });
// self.addEventListener("activate", event => {
//     console.log("Service worker activated");
// });
// self.addEventListener("fetch", event => {
//     console.log("Service worker fetched");
// });

const cashName = 'cache-v1'
const resoucesToPrecache = ["/", "script.js", "style.css", "assets/images/lms-icon.png"];

// self is the worker in worker file 
// self is the window in everywhere else 


self.addEventListener("install", (event) => {
    event.waitUntil(
        // adding all the files in the cache

        // we have to open the cache before adding the files
        caches.open(cashName).then(
            cache => {

                // this takes a list of resourses loads then from the network
                // and puts them in tge cache
                // it return a promise
                return cache.addAll(resoucesToPrecache)
            }
        )
    );
});


// fetch event handler
self.addEventListener("fetch", event => {
    event.respondWith(caches.open(event.request)).then(cachedResponse => {
        // cache First Strategy [search online]

        // here we are trying to find the file we cached earlier 
        // if it isn't in the cache? 
        //  caches.match(event.request) will return null and this is not good
        // so we include an OR logic to if it does not exist go ahead and try the network
        // this called the cache-first-startegy

        return cachedResponse || fetch(event.request)
    })
});


    // async () => {
//     const cache = await caches.open("pwa-assets");
//     return cache.addAll(urlsToCache);}