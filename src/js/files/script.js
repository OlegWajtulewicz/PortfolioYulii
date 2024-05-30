// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

import Lenis from 'lenis'
import barba from '@barba/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger); 

barba.hooks.afterEnter(() => {
  

//========== card-border-color  ==============================================================================================================================================
var colors = ['#f5ce7a7d', '#eacbb1ad', '#bcb8b857', '#44413c', '#d5d6c0', '#aeaeaec2', '#c0d2d68a', '#d2c7898a']; // Предопределенный список цветов
var cards = document.querySelectorAll('.card');
cards.forEach(function(card, index) {
    card.style.backgroundColor = colors[index % colors.length]; // Используем остаток от деления для циклического выбора цвета из списка
});
//========== Lenis-scroll ==============================================================================================================================================

const lenis = new Lenis({
    duration: 1.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    direction: "vertical", // vertical, horizontal
    gestureDirection: "vertical", // vertical, horizontal, both
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  
})

lenis.on('scroll', (e) => {
  //console.log(e)
})

// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

function raf(time) {
  const startTime = performance.now();
  lenis.raf(time);
  const endTime = performance.now();
  const elapsedTime = endTime - startTime;

  if (elapsedTime < 16) {
    requestAnimationFrame(raf);
  } else {
    setTimeout(() => {
      requestAnimationFrame(raf);
    }, elapsedTime - 16);
  }
}

requestAnimationFrame(raf)
//========================================================================================================================================================

  
});






















//  скрипт из preaxa
 // document.addEventListener("DOMContentLoaded", function() {
//     const cardOutputs = document.querySelectorAll(".dateValue");
//     cardOutputs.forEach((item, index) => {
//         item.innerHTML = data[index].value;
//         // Обновляем значение каждого элемента на основе данных из массива data
//         if (index === 0) { // humidity
//             // Получаем необходимые элементы для влажности
//             var humidityProgressBar = document.querySelector(".bar-item-details-main__progress-bar.humidity");
//             var humidityDot = humidityProgressBar.querySelector(".bar-item-details-main__dot.humidityDot");
//             var humidityProgressBarWidth = humidityProgressBar.offsetWidth;
//             var humidityDotWidth = humidityDot.offsetWidth;
//             // Преобразуем значение влажности в число и получаем позицию точки на баре
//             var humidityValue = parseFloat(data[index].value);
//             var humidityDotPosition = humidityProgressBarWidth * (humidityValue / 100) - humidityDotWidth / 2;
//             // Устанавливаем стиль левого отступа точки на баре
//             humidityDot.style.left = humidityDotPosition + "px";
//         } else if (index === 1) { // barometr
//             //  код для давления
//             var barometrProgressBar = document.querySelector(".bar-item-details-main__progress-bar.barometr");
//             var barometrDot = barometrProgressBar.querySelector(".bar-item-details-main__dot.barometrDot");
//             var barometrValue = parseFloat(data[index].value);
//             var barometrProgressBarWidth = barometrProgressBar.offsetWidth;
//             var barometrDotPosition = barometrProgressBarWidth * ((barometrValue - 700) / 100);
//             barometrDot.style.left = barometrDotPosition + "px";
//         } else if (index === 2) { // visibility
//             // код для видимости
//             var visibilityProgressBar = document.querySelector(".bar-item-details-main__progress-bar.visibility");
//             var visibilityDot = visibilityProgressBar.querySelector(".bar-item-details-main__dot.visibilityDot");
//             var visibilityValue = parseFloat(data[index].value);
//             var visibilityProgressBarWidth = visibilityProgressBar.offsetWidth;
//             var visibilityDotPosition = visibilityProgressBarWidth * (visibilityValue / 100);
//             visibilityDot.style.left = visibilityDotPosition + "px";
//         }
//     });
//     const cardComment = document.querySelectorAll(".commentValue")
//     cardComment.forEach((item, index) => {
//         item.innerHTML = comment[index].value
//     }); 
// });