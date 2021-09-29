const scrollAnimationElm = document.querySelectorAll('.sa');
const scrollAnimationFunc = function() {
  for(let i = 0; i < scrollAnimationElm.length; i++) {
    const triggerMargin = 300;
    if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
      scrollAnimationElm[i].classList.add('show');
    }
  }
}
window.addEventListener('load', scrollAnimationFunc);
window.addEventListener('scroll', scrollAnimationFunc);