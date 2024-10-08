import { gsap } from "gsap";


import '../styles/modern-normalize.css'
import '../styles/style.css'
import '../styles/components/header.css'
import '../styles/components/mobile-nav.css';
import '../styles/components/hero.css';
import '../styles/utils.css'
import mobileNav from './utils/mobile-nav';
mobileNav();


// Custom Cursor

const main = document.querySelector("html")
const cursor = document.querySelector("#cursor")

main.addEventListener("mousemove", function(dets){
  gsap.to(cursor, {
    opacity: 1,
    x: dets.x,
    y: dets.y,
    duration: 0.5,
    ease: "back.out"
  })
})


// header section animation
gsap.from(".header .header__menu li", {
  opacity: 0,
  y: -100,
  duration: 0.5,
  stagger: 0.1
})
gsap.from(".header .header__logo", {
  opacity: 0,
  y: -100,
  duration: 0.5,
  delay: 0.5
})
gsap.from(".header .header__info", {
  opacity: 0,
  duration: 0.5,
  delay: 1,
})



// Hero section animation
gsap.from(".hero .hero__title", {
  opacity: 0,
  x: -100,
  duration: 0.5,
})
gsap.from(".hero .hero__description", {
  opacity: 0,
  x: -100,
  duration: 0.5,
})
gsap.from(".hero .hero__social-proof .box", {
  opacity: 0,
  y: -50,
  stagger: 0.2
}) 
gsap.from(".hero .hero__img", {
  opacity: 0,
  y: -50,
  stagger: 0.2
}) 