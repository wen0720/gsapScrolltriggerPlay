import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.to('.c', {
  scrollTrigger: {
    trigger: '.c',
    start: 'top 500px',
    toggleActions: 'play pause reverse pause',  // toggleAction 的 default 值
    end: 'bottom 400px',
    markers: true,
    scrub: true,
    pin: '.ghost',
  },
  x: 400,
  rotation: 360,
  duration: 3
})
