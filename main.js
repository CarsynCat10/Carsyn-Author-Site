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
