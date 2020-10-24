import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.to('h1', {
  x: 100,
  scrollTrigger: {
    trigger: 'h1',
    start: 'top bottom',
    end: 'center center',
    scrub: true,
    markers: true,
    id: 1,
  }
})

gsap.to('h1', {
  x: 200,
  scrollTrigger: {
    immediateRender: false,
    trigger: 'h1',
    start: 'center center',
    end: 'bottom top',
    scrub: true,
    markers: true,
    id: 2
  }
})

/**
這個範例中，h1 一開始會先經過第一個 scrollTrigger，
在 h1 中心到達視窗中心的時候，
會結束第 1 個 trigger，並緊接著執行第 2 個
如果沒有在第 2 個 triggre 設定 `immediateRender: false`
h1 就會一瞬間跳回原本的 x:0，
這是因為 scrolltrigger 建立的時候，會 cache 住初始值。

或是用 .fromTo() 也可以解決這個問題
 */


// gsap.fromTo('h1', {
//   x: 100
// }, {
//   x: 200,
//   scrollTrigger: {
//     trigger: 'h1',
//     start: 'center center',
//     end: 'bottom top',
//     scrub: true
//   }
// });

gsap.to('.box', {
  x: 300,
  duration: 2,
})
