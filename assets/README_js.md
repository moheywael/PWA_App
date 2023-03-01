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

debuging:
<br> 

### Main important things when Touch Event is beeing fired

<br>

`1# touches Array`: it shows all places that the screen is curently being touched
<br>

`2# target touches`: ??
<br>

`3# touches`: ??
<br>

`3# touches`: ??
<br><br> 

- Tocuhstart
```js
  document.addEventListener("touchstart", (e)=>{
    console.log()
  })
```
- Tocuhmove
- Tocuhend
<br><br>