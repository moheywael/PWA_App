# PWA

## Setting it up Requirements

1. `manifest.js` <span style="margin: 0 10px;"> OR </span> `manifest. webmanifest` File to work offline 
2. serivce worker

<br>

## Manifest Structure:
- `name` the full name (appears in splash screen)
- `short_name` the short name (appears in phone home screen)   
- `icons` it is an array of icons properitese for all screen resolutions 
- `start_url` it determines which screens will show on app lunch (./index.html)
- `display` you should set it to ***standalone*** to make the website instalable
- `background_color` splash screen background color along with the icon
- `theme_color` color for the label of the app in app switcher *when you dounble click on the home screen* 

<br>

## Fixing IOS issues
### meta tags
- apple-mobile-web-app-capable(content="yes")
- apple-mobile-web-app-status-bar-style 
  - default/black
  - use the full screen
  - make the status bar translucent

*WARNING:  when you go full screen you lose access to safari back button, so you have to provide navigaion inside your app*

<br>

## Installing Prompt
1. Web App Manifest with atlest 192x192 app icon
2. Work Offline

### Handling installing prompt
1. Listen for the `beforeinstallprompt` event
2. Notify the user that your app can be installed
3. Show the prompt by calling the `prompt()`

<br>

``` javascript
   let deferredPrompt;

   window.addEventListener('beforeinstallprompt', (e)=>{
   
   // prevent chrome automatically showing the prompt
    e.preventDefault();

    deferredPrompt = e;

    // updating the ui and showing your custome button for the installation process
    // offering your prompt after the user complete his profile information
    btnAdd.style.display = "block";

    deferredPrompt.propmt()
    deferredPrompt.userChoice.then((choiceResult) =>{
      if(choiceResult.outcome === 'accepted'){
        console.log("user accepted the A2HS prompt")
      }

      deferredPrompt = null;
    })
   })

```
<br>

## all the previous `code` was before installation
### Confirmig instalations

<br>

```javascript
  window.addEventListener('appinstalled', (evt)=>{
    eapp.logEvent('a2hs', 'installed')
  })
```
<br>

## Detecting home screen launche

<br>

```css
/* Using CSS */
  @media all and (display-mode: standalone){
    body{
      background-color: yellow;
    }
  }
```

## <div style="text-align: center">OR</div>

<br>

```javascript
  // using Javascript
  window.matchMedia('(display-mode: standalone)')
 ```


## <div style="text-align: center">OR</div>

<br>

```js
// in mamifest.webmanifest
"start_url": "/index.html>from=homescreen",
"display": "standalone",

// get advantage to use analytics to see how many people are installing your PWA 
...
```

<br>
<hr>


## Converting Ordinery Website to PWA
1. write a basic service worker `sw.js`

```js
// This code executes in its own worker or thread
self.addEventListener("install", event => {
   console.log("Service worker installed");
});
self.addEventListener("activate", event => {
   console.log("Service worker activated");
});
self.addEventListener("fetch", event => {
   console.log("fetch intercepted for:", event.request.url);
});
```
