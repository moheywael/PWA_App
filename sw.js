// #1
const CACHE_NAME = "static_cache"
const STATIC_ASSETS = [
    "/",
    "/index.html",
    "/script.js",
    "/style.css",
    "/assets/images/lms-icon.png"
]

// #2 caching
async function preCache() {
    const cache = await caches.open(CACHE_NAME)
    return cache.addAll(STATIC_ASSETS)

}

// #2 caching
self.addEventListener("install", event => {
    console.log("Service worker installed");

    event.waitUntil(preCache())

});


self.addEventListener("activate", event => {
    console.log("Service worker activated");
});

async function fetchAssest(event) {
    try {
        const response = fetch(event.request)
        return response
    }
    catch (err) {
        const cache = await caches.open(CACHE_NAME)
        return cache.match(event.request)
    }
}

// this who applys cache-first-stratgy
self.addEventListener("fetch", event => {
    console.log("Service worker fetched");
    event.responseWith(fetchAssest(event))
});
