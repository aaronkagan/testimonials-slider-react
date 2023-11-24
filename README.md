# Testimonials Slider

## Table of contents

- [Overview](#overview)

  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Screenshots](#screenshots)

- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Navigate the slider using either their mouse or keyboard

### Links

- Live Demo: [https://aaronkagandev-testimonial-slider.netlify.app/](https://aaronkagandev-testimonial-slider.netlify.app/)

### Screenshots

![Desktop View](desktop-view.png)

![Mobile View](mobile-view.png)

## My process

### Built with

- Semantic HTML
- ReactJS
- Styled Components
- Mobile-first workflow

### What I learned

How to navigate the slider using the arrow keys

```js
function handleKeyPress(e: KeyboardEvent) {
  if (e.key === 'ArrowLeft') handleButtonPrev();
  if (e.key === 'ArrowRight') handleButtonNext();
}

useEffect(() => {
  window.addEventListener('keydown', handleKeyPress);

  return () => {
    window.removeEventListener('keydown', handleKeyPress);
  };
}, []);
```

## Author

- Portfolio - [aaronkagan.dev](https://www.aaronkagan.dev)
- Linkedin - [/aaron-kagan](https://www.linkedin.com/in/aaron-kagan/)
- X - [@aaronkagandev](https://www.twitter.com/aaronkagandev)
- Instagram - [aaronkagandev](https://www.instagram.com/aaronkagandev/)
