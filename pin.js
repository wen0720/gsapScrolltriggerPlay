import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline()

// tl.from('.red', { xPercent: '100' })
//   .from('.blue', { xPercent: '-100' })
//   .from('.yellow', { xPercent: '100' })

gsap.utils.toArray('.wrapper').forEach((wrapper, idx) => {
  ScrollTrigger.create({
    trigger: wrapper,
    start: 'top top',
    end: '+=300px',
    markers: true,
    scrub: true,
    pin: true,
    // pinSpacing: false,
  })
})


