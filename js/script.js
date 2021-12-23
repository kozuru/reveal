// scrollmagic init
let ctrl = new ScrollMagic.Controller();

// each image
[].forEach.call(document.querySelectorAll('.inner_img'), function(e) {
  
  // gsap timeline
  let tl = new TimelineMax();
  tl.from(e, 1, { xPercent: -100, ease: Expo.easeInOut }, 0);
  tl.from(e.querySelector('.img'), 1, { xPercent: 100, ease: Expo.easeInOut }, 0);
  
  // scrollmagic scene
  let scene = new ScrollMagic.Scene({ triggerElement: e, triggerHook: .6 })
  .setTween(tl)
  .addTo(ctrl);
  
});
