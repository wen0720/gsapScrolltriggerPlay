import gsap from 'gsap';
import scrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(scrollTrigger);
const boxes = gsap.utils.toArray('.box')

boxes.forEach((box) => {
  gsap.to(box, {
    x: 300,
    scrollTrigger: {
      trigger: box,
      start: 'top bottom',
      toggleActions: 'play pause reverse'
      // scrub: true,
    }
  })
})

/*
  第一個 .box 會使全部的 box 都執行動畫
  可是 scrollTTrigger 的 trigger 項目都是第 1 個 .box
  導致第一個 trigger 發生時
  後面的 2 個 box 也跟著執行動畫。
*/

// gsap.to('.box', { // 全部的 .box 都會執行動畫
//   x: 300,
//   scrollTrigger: {
//     trigger: '.box', // 第一個 box
//     start: 'top bottom',
//   }
// })
