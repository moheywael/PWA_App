# Graduation Project

## Root Variables
<br>

### *Colors*
- clr-danger: #red
- clr-success: #green
- clr-warning: #orange
<br><br>
- clr-primary: #main-color
- clr-secondary: #second_main-color
- clr-white: #white #f2f2f2
- clr-black: #black #222222
<br><br>
- clr-info-dark: #tends to gray
- clr-info-light: #tends to white
- clr-light: #light_color
- clr-dark: #dark_color
<br><br>
- clr-primary-variant: #darker of primary
- clr-dark-variant: #lighter of primary (for darkmode purposes)
- clr-background: #your_background-color (tends to white)
<br><br>
- clr-divider-line: #tend to gray
    <br><br>

### *Widget numbers*
- widget-border-radius: 2rem
- br-sm: 0.4rem 
- br-md: 0.8rem
- br-lg: 1.2rem
- widget-padding: 1.8rem
- padding: 1.2rem
- divider-line-height: 0.0625rem solid var(--clr-divider-line)
    <br><br>

### *box shadow*
- box-shadow: 0 2rem 3rem var(--clr-light)
<br><br>

### *Reseting Values*
- hyper links < a >
  - color: --clr-dark
- heading 1:
  - font-size: 1.8rem
  - font-weight: 800
- heading 2:
  - font-size: 1.4rem
- heading 3:
  - font-size: 0.87rem
- heading 4:
  - font-size: 0.8rem
- heading 5:
  - font-size: 0.77rem
- small:
  - font-size: 0.75rem

<br>

### *Main components*
- profile-logo:
  - min-width: 60px
  - width: 60px
  - width: 2.8rem
  - height: 2.8rem
  - border-raduis: 50%
  - overflow: hidden
  - padding: 0 10px
  - 
    - img::
      - width: 40px
      - height: 40px
    - text:: 
      - width: 40px
      - height: 40px
      - line-height: 40px
      - text-align: center
      - font-size: 24px
      - boder-raduis: 6px

<br><br>

## Optimizing Javascript Code
<br>

### Useage Of Funcations for your event listener

``` javascript
  // variables
  let var1 = document.querySelector('.class1')
  let var2 = document.querySelector('.class2')

  // Event Listeners
  var1.addEventListener("click", funcVar1)
  var2.addEventListener("click", funcVar2)

  // Funcations
  function funcVar1(){
    // Code Block 1
  }

  function funcVar2(){
    // Code Block 2
  }

```