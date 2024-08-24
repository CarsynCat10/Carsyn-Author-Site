//Function that takes header and gives it the .scrolled class when the page scroll is greater than 0
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById('header').classList.add('scrolled');
  } else {
    document.getElementById('header').classList.remove('scrolled');
  }
}

function disableScrolling() {
  window.addEventListener('wheel', preventScroll, { passive: false });
  window.addEventListener('touchmove', preventScroll, { passive: false });
  window.addEventListener('keydown', preventScrollKeys, { passive: false });
}

function enableScrolling() {
  window.removeEventListener('wheel', preventScroll, { passive: false });
  window.removeEventListener('touchmove', preventScroll, { passive: false });
  window.removeEventListener('keydown', preventScrollKeys, { passive: false });
}

function preventScroll(event) {
  event.preventDefault();
  event.stopPropagation();
  return false;
}

function preventScrollKeys(event) {
  // Prevent scrolling with arrow keys, spacebar, and page up/down
  if ([32, 33, 34, 35, 36, 37, 38, 39, 40].includes(event.keyCode)) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }
}

window.onload = function () {
  // Scroll to the top on refresh
  window.scrollTo(0, 0);

  // Disable scrolling
  disableScrolling();

  // Enable scrolling after 4 seconds
  setTimeout(function () {
    enableScrolling();
  }, 4000);
};
