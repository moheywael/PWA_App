# Javascript Documentation

## JavaScipt DOM Traversal 
<br>

- document.getElementById() `selecting elemet by id`
- document.getElementByClassName() `selecting elemet by class name`
- document.querySelectorAll() `gives an Array of elements`
<br><br>
- document.querySelector() `moves downwards` 
- document.closest() `moves upwards`
<br><br>
- document.parentElement() `get the parent of that element`
- document.parentNode() `get the parent of that element too - ???`
<br><br>
- document.nextElementSibling() `get element after to in the same hierachy`
- document.previousElementSibling() `get element before to in the same hierachy`
<br><br>
- document.querySelector().children `gives an Array of that element childrens`
- document.querySelector().parent `gives an Array of that element parents of all hierachy levels`


## JavaScipt Touch Events 

### Remote Debuging : How to remote debug Google Chrome with IOS iPhone (Safari) to Windows PC
<br>

#### For Android

> - Turn Developer Tools on in your android phone and enable `USB Debugging`

> - Go to `chrome://inspect/#devices` in chrome browser, then you will see your project title name and your local ipv4 url and will see `inspect` underneath it. Click it and here you go. You have a DevTools window
<br> 

#### For IOS
> - Download NodeJS

> - Install itunes

> - Connect the IOS device with your Windows PC by USB cable and click Trust this device.

> - Install Scoop for Windows:

> - Run Windows Power Shell as administrator and then install these: 
```powershell
      scoop bucket add extras
      scoop install ios-webkit-debug-proxy
      npm install remotedebug-ios-webkit-adapter -g
``` 

> - Open iOS Settings => Safari preferences => enable “Web Inspector”

> - In Power Shell run this command: 
```powershell
      remotedebug_ios_webkit_adapter --port=9000
```

> - Open Chrome and navigate to this:
  ``` 
      chrome://inspect/#devices 
  ```
 <br><br>
  You will see this and you can click on inspect inside label with RemoteDebug IOS adapter.
 <br><br>

> - Click on configure and set localhost:9000 

<br> 

### debuging:
#### Main important things when Touch Event is beeing fired


`1# touches Array`: it shows all places that the screen is curently being touched
<br>

`2# target touches`: how many touches within the target
<br>

`3# touches`: how many total touches on the device. regret in or out the target "***NOTE*** if you touch outside the elemet that has the `Touch Event` it will effect but it will count in `Touches Array`. "
<br>

`4# touches`: ??
<br><br> 

- **Tocuhstart**
```js
  document.addEventListener("touchstart", touch =>{
    console.log(touch)
  })
```
- **Tocuhmove**

```js
  document.addEventListener("touchmove", touch =>{
    console.log(touch)
  })
```
- **Tocuhend**

```js
  document.addEventListener("touchend", touch =>{
    console.log(touch)
  })
```
<br><br>