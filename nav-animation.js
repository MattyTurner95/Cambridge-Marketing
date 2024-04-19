let lastScrollY = window.scrollY; // Tracks the last scroll position
const nav = document.querySelector('.nav'); // Selects your nav element

window.addEventListener('scroll', function () {
  if (window.scrollY > lastScrollY) {
    // Scrolling down
    nav.style.top = '-100%'; // Adjust this value based on your nav's height
  } else {
    // Scrolling up
    nav.style.top = '0';
  }
  lastScrollY = window.scrollY; // Update the last scroll position
});
