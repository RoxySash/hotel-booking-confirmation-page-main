# Frontend Mentor - Hotel booking confirmation page solution

This is a solution to the [Hotel booking confirmation page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/hotel-booking-confirmation-page). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Open and close the navigation menu on smaller screens (optional JavaScript)
- Copy the Wi-Fi password to their clipboard using the copy button (optional JavaScript)

- Add a working copy button so guests can copy the Wi-Fi password in one click
- Make the sidebar navigation collapse into a toggleable menu on smaller screens
- Animate the receipt and host-note cards so they fan out on hover
- Wire up the "Print receipt" button to open a clean print view using the browser's print dialog


### Screenshot

![Desktop Solution](./assets/images/Screenshot%20Desktop%20Solution.png)
Desktop Solution
![Menu Pop out](./assets/images/Screenshot%20Hamburger%20Menu.png)
Menu Pop out
![Hover Buttons](./assets/images/Screenshot%20Hover%20Buttons.png)
Hover Buttons
![Mobile top section](./assets/images/Screenshot%20Mobile%20home%20top%20section.png)
Mobile top section


### Links

- Solution URL: [solution URL here](https://github.com/RoxySash/hotel-booking-confirmation-page-main.git)
- Live Site URL: [live site URL here](https://roxysash.github.io/hotel-booking-confirmation-page-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow



### What I learned

Using the function below I learned how to copy to the keyboard.

```js
const wifiText = wifiPassword.innerHTML;

const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(wifiText);
      alert("copied")
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

copyBtn.addEventListener("click", copyContent);
```


### Continued development

Will work on pop out animation and cleaner layouts for mobile to desktop. I do need to work on the responsiveness of my designs.


### AI Collaboration

Was not used


## Author

- Frontend Mentor - [@RoxySash](https://www.frontendmentor.io/profile/RoxySash)



