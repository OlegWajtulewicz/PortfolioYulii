import barba from '@barba/core';
import { HomePage } from '../barba.js';
// Barba Load Wrapper
//barba.hooks.afterEnter(() => {

//HomePage();

// barba.hooks.after((data) => {
//     hasScrolled.init();
//     scroll.init();
//     // Проверяем, что переход завершен успешно
//     if (data && data.current && data.current.container) {
//         // Теперь ваш код для инициализации Swiper slider и других элементов страницы
//         // Например:;
//         hasScrolled();
//         didScroll.init();
//         st.init();
//     }
// });

// scroll/nav-up-down.js
// export function initHeaderScroll() {
//     var didScroll = false;
//     var lastScrollTop = 0;
//     var delta = 5;
//     var navbar = document.querySelector('.nav-up-down');

//     // Проверка наличия элемента с классом .nav-up-down
//     if (!navbar) return;

//     var navbarHeight = navbar.offsetHeight;

//     function hasScrolled() {
//         var st = window.pageYOffset || document.documentElement.scrollTop;

//         if (Math.abs(lastScrollTop - st) <= delta) return;

//         if (st > lastScrollTop && st > navbarHeight) {
//             navbar.classList.remove('scroll-down');
//             navbar.classList.add('scroll-up');
//         } else {
//             if (st + window.innerHeight < document.documentElement.scrollHeight) {
//                 navbar.classList.remove('scroll-up');
//                 navbar.classList.add('scroll-down');
//             }
//         }

//         lastScrollTop = st;
//     }

//     window.addEventListener('scroll', function() {
//         didScroll = true;
//     });

//     setInterval(function() {
//         if (didScroll) {
//             hasScrolled();
//             didScroll = false;
//         }
//     }, 250); // Измените интервал на 250 мс для уменьшения нагрузки
// }



    
//});

  