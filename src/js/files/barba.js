// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile, FLS, menuClose, menuOpen, bodyLockToggle, menuInit, bodyLock, bodyUnlock, getHash }  from "./functions.js";


import {DynamicAdapt} from './../libs/dynamic_adapt.js';
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

import barba from '@barba/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger); 
//const laptopScreen = window.matchMedia('(min-width: 479.98px)');

let scroll; 
const body = document.body;
const select = (e) => document.querySelector(e);
const selectAll = (e) => document.querySelectorAll(e);

window.onload = function() {
  window.scrollTo(0, 0);
};

initPageTransitions();
 
//==========  transition  ==============================================================================================================================================

function pageTransition() {
  let tl = gsap.timeline();

  tl.set(".transition", { 
		top: "100%",
    scaleY: 0,
	});
  tl.set(".loading-words", { 
		opacity: 0,
    y: 0
	});

////////////////////////////
  tl.to(".transition", {
    duration: 1,
    scaleY: 1,
    y: '0%',
    top: "0%",
    transformOrigin: "bottom",
    ease: "Power3.easeInOut",
  });
//////////////////////////////////

}
function contentAnimation() {
  let tl = gsap.timeline();

  tl.set(".loading-words", { 
    opacity: 0.5,
    y: -50
  });

  tl.set(".loading-words .active", { 
    display: "block",
});

tl.set(".loading-words .home-active, .loading-words .home-active-first", { 
  display: "block",
  opacity: 0
});

tl.set(".loading-words", { 
  opacity: 1,

});

tl.to(".loading-words", {
  duration: .7,
  opacity: 1,
  y: -70,
  ease: "Power4.easeOut",
  delay: .02
});

//////////////////////////////
  tl.to(".transition", {
    duration: 1,
    y: '-100%',
    transformOrigin: "top",
    ease: "power4.inOut",
    delay: 0.2,
  },"=-.9");
////////////////////////////

  tl.to(".loading-words", {
		duration: .6,
		opacity: 0,
    ease: "linear"
	},"=-.8");

  tl.set("html", { 
    cursor: "auto"
  },"=-1.2");

  tl.to(".wrapper", {
    top: 0,
    duration: 1,
    ease: "power3.inOut",
    delay: 0.3,
  },"=-1.3");

  tl.set(".transition", { 
    top: "calc(100%)",
    scaleY: 0, 
  });
}
// первая загрузка первой страницы
function initLoaderHome() {
  let tl = gsap.timeline();
  
  tl.set(".transition", { 
		top: "0",
    scaleY: 1,
	});	

  tl.set(".loading-words", { 
		opacity: 0,
    y: -50
	});

  tl.set(".loading-words h2.active", { 
		display: "none",
	});

  tl.set(".slow-load", { 
    opacity: 0
  });

  tl.set(".loading-words .home-active, .loading-words .home-active-last", { 
		display: "block",
    opacity: 0
	});

  tl.set(".loading-words .home-active-first", { 
		opacity: 1,
	});

  // tl.set("html", { 
	// 	cursor: "wait"
	// });

  tl.to(".loading-words", {
		duration: .8,
		opacity: 1,
    y: -50,
    ease: "Power4.easeOut",
    delay: .5
	});

  tl.to(".loading-words .home-active", {
		duration: .01,
		opacity: 1,
    stagger: .15,
    ease: "none",
    onStart: homeActive
  },"=-.4");

  function homeActive() {
    gsap.to(".loading-words .home-active", {
      duration: .01,
      opacity: 1,
      stagger: .15,
      ease: "none",
      delay: .15
    });
  };

 tl.to(".transition", {  
    duration: 1, 
    y: '-100%',
    transformOrigin: "top", 
    ease: "power4.inOut", 
    delay: 0.2,});

  tl.to(".loading-words", {
		duration: .3,
		opacity: 0,
    ease: "linear"
	},"=-.8");	

//  tl.set("html", { 
// 		cursor: "auto"
// 	},"=-1.2");

  tl.to(".wrapper", { top: 0, duration: 1, ease: "power3.inOut", delay: 0.3 },"=-1.1");

  tl.set(".transition", { 
    top: "calc(100%)",
    scaleY: 0, 
  },"=+.5");	

  tl.to(".slow-load", {
    duration: 1,
    ease: "Power3.easeIn",
    opacity: 1,
    clearProps: 'all'
  },"-=.9");

}
// перезагрузка  страницы
function loaderHome() {
  window.scrollTo(0, 0);
  let tl = gsap.timeline();
  
  tl.set(".transition", { 
		top: "0",
    scaleY: 1,
	});	

  tl.set(".loading-words", { 
		opacity: 0,
    y: -50
	});

  tl.set(".loading-words .active", { 
		display: "block",
	});

  tl.set(".loading-words .home-active, .loading-words .home-active-first", { 
		display: "block",
    opacity: 0
	});

  tl.set(".loading-words", { 
		opacity: 1,
    
	});

  

  tl.to(".loading-words", {
		duration: .8,
		opacity: 1,
    y: -50,
    ease: "Power4.easeOut",
    delay: .5
	});

  tl.to(".transition", {
    duration: 1,
    //scaleY: 0,
    y: '-100%',
    transformOrigin: "top",
    ease: "power4.inOut",
    delay: 0.2,
  });

  tl.to(".loading-words", {
		duration: .3,
		opacity: 0,
    ease: "linear"
	},"=-.8");

  tl.set("html", { 
		cursor: "auto"
	},"=-1.2");

  tl.to(".wrapper", { top: 0, duration: 1, ease: "power3.inOut", delay: 0.3 },"=-3.1");
  
  tl.set(".transition", { 
		top: "calc(100%)",
    scaleY: 0, 
	});
}
//========================================================================================================================================================

function delay(n) {
n = n || 0;
return new Promise((done) => {
setTimeout(() => {
  done();
}, n);
});
}


/**
* Scrolltrigger Nav
*/
function initTricksWords() {
    
  // Copyright start
  // © Code by T.RICKS, https://www.tricksdesign.com/
  // You have the license to use this code in your projects but not redistribute it to others
  // Tutorial: https://www.youtube.com/watch?v=xiAqTu4l3-g&ab_channel=TimothyRicks

  // Find all text with .tricks class and break each letter into a span
  var spanWord = document.getElementsByClassName("span-lines");
  for (var i = 0; i < spanWord.length; i++) {

  var wordWrap = spanWord.item(i);
  wordWrap.innerHTML = wordWrap.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="span-line"><span class="span-line-inner">$2</span></span>');
  }
}

initTricksWords();

//========================================================================================================================================================
function initScript() {
  select('body').classList.remove('is-loading');
  getHash();
  initScrolltriggerNav();
  addActiveClassBasedOnTitle();
  initScrolltriggerAnimations();
  
}


function initHeaderScroll(container) {
  var didScroll = false;
  var lastScrollTop = 0;
  var delta = 5;
  var navbar = container.querySelector('.nav-up-down');

  // Проверка наличия элемента с классом .nav-up-down
  if (!navbar) return;

  var navbarHeight = navbar.offsetHeight;

  function hasScrolled() {
      var st = window.pageYOffset || document.documentElement.scrollTop;

      if (Math.abs(lastScrollTop - st) <= delta) return;

      if (st > lastScrollTop && st > navbarHeight) {
          navbar.classList.remove('scroll-down');
          navbar.classList.add('scroll-up');
      } else {
          if (st + window.innerHeight < document.documentElement.scrollHeight) {
              navbar.classList.remove('scroll-up');
              navbar.classList.add('scroll-down');
          }
      }

      lastScrollTop = st;
  }

  window.addEventListener('scroll', function() {
      didScroll = true;
  });

  setInterval(function() {
      if (didScroll) {
          hasScrolled();
          didScroll = false;
      }
  }, 250); // Измените интервал на 250 мс для уменьшения нагрузки
}
function initPageScripts(container) {
  // Header scroll logic
  initHeaderScroll(container);
  
  // Additional initialization logic
  var pageTitle = document.title.trim();
  var header = container.querySelector('header');
  var sticky = container.querySelector('#sticky');
  var contentDivs = container.querySelectorAll('.section');
  var stickyOffset = sticky ? sticky.offsetTop : 0;

  function checkHeaderClass() {
    if (pageTitle === "Filmografia") {
      header.classList.add('scrolled');
    } else if (pageTitle === "Bio") {
      header.classList.add('scrolled');
    } else {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  }

  function updateStickyClass() {
    contentDivs.forEach(function(div) {
      var divOffset = div.offsetTop - window.scrollY;
      if (divOffset < stickyOffset && divOffset + div.offsetHeight > 0) {
        sticky.classList.remove("light", "dark");
        sticky.classList.add(div.classList.contains("light") ? "light" : "dark");
        return;
      }
    });
  }

  window.addEventListener('scroll', function() {
    checkHeaderClass();
    updateStickyClass();
  });

  document.addEventListener('DOMContentLoaded', function() {
    checkHeaderClass();
    updateStickyClass();
  });
}

let lenis; // Глобальная переменная для Lenis

// Функция инициализации Lenis
// function initLenis() {
//   lenis = new Lenis({
//     duration: 1.1,
//     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
//     direction: "vertical", // vertical, horizontal
//     gestureDirection: "vertical", // vertical, horizontal, both
//     smooth: true,
//     mouseMultiplier: 1,
//     smoothTouch: false,
//     touchMultiplier: 2,
//     infinite: false,
//   });

//   function raf(time) {
//     lenis.raf(time);
//     requestAnimationFrame(raf);
//   }
  
//   requestAnimationFrame(raf);

//   lenis.on('scroll', ScrollTrigger.update);

//   ScrollTrigger.scrollerProxy('[data-scroll-container]', {
//     scrollTop(value) {
//       return arguments.length ? lenis.scrollTo(value, { immediate: true }) : lenis.scroll;
//     },
//     getBoundingClientRect() {
//       return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//     },
//     pinType: document.querySelector('[data-scroll-container]').style.transform ? 'transform' : 'fixed'
//   });

//   ScrollTrigger.defaults({
//     scroller: document.querySelector('[data-scroll-container]'),
//   });

//   ScrollTrigger.addEventListener('refresh', () => lenis.update());
//   ScrollTrigger.refresh();
// }



function initPageTransitions() {
  // Функция для выполнения действий перед началом перехода
  barba.hooks.before(() => {
    //document.querySelector('html').classList.add('is-transitioning');
  });

  // Функция для выполнения действий после завершения перехода
  barba.hooks.after(() => {
    //document.querySelector('html').classList.remove('is-transitioning');
    // Повторная инициализация scroll, если это необходимо
    
    if (scroll) {
      scroll.init();
      scroll.stop();
    }
  });

  // Функция для выполнения действий перед началом каждого перехода
  barba.hooks.enter((data) => {
    initNextWord(data);
    window.scrollTo(0, 0);
    // Остановка scroll, если это необходимо
    if (scroll) {
      scroll.destroy();
    }
  });

  barba.hooks.beforeLeave((data) => {
    if (data.trigger.href === window.location.href) {
      // Здесь можно добавить кастомное поведение для текущей страницы
      // Например, принудительно перезагрузить содержимое:
      //barba.force(data.current);
    }
  });
  

  // Функция для выполнения действий после завершения каждого перехода
  barba.hooks.afterEnter(() => {
    // Прокрутка страницы вверх, если это необходимо
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    initScrolltriggerAnimations();
    initCookie();
});

barba.init({
  sing: true,
  debug: false,
  timeout: 5000,
  transitions: [
    {
      name: 'default',
      once(data) { // вызывается только один раз, когда пользователь впервые заходит на ваш сайт
        initHeaderScroll(data.next.container);
        initPageScripts(data.next.container);
        initScript();
        loaderHome();
        initScrolltriggerAnimations();
        initSpanLinesAnimation();
        initCookie();
        },
      async leave(data) {  // перед тем, как пользователь покидает текущую страницу
          const done = this.async();
         // await gsap.to(data.current.container, { opacity: 0, duration: 0.3 });
          data.current.container.remove();
          pageTransition(data.current);
          await delay(1000);
          done();
          // return gsap.timeline().to(data.current.container, {
          //   opacity: 0,
          //   duration: 0.5
          // })
      },
      async enter(data) {  // после того, как новая страница полностью загружена
          initHeaderScroll(data.next.container);
          initPageScripts(data.next.container);
          initNextWord(data);
          initScript();
          document.documentElement.scrollTop = 0;
          const da = new DynamicAdapt("max");
          da.init();
          contentAnimation();
          addActiveClassBasedOnTitle();
          initScrolltriggerAnimations();
          initTricksWords();
          initSpanLinesAnimation();
          initCookie();
         // await gsap.from(data.next.container, { opacity: 0, duration: 0.3 });
          // document.documentElement.scrollTop = 0;
          // return gsap.from(data.next.container, {
          //     opacity: 0,
          //     duration: 0.5
          // });
      },
      afterEnter(data) {
        document.title = data.next.html.match(/<title>(.*?)<\/title>/)[1];
        initNextWord(data);
        initScript();
        initScrolltriggerAnimations();
        
      },
      async beforeEnter(data) {
        ScrollTrigger.getAll().forEach(t => t.kill());
        initHeaderScroll(data.next.container);
        initPageScripts(data.next.container);
        initScript();
        addActiveClassBasedOnTitle();
        initSpanLinesAnimation();
        
      },
    },
    {
      name: 'home',
      from: { },
      to: {
        namespace: ['home']
      },
       once(data) { // вызывается только один раз, когда пользователь впервые заходит на ваш сайт
        document.documentElement.scrollTop = 0;
        initHeaderScroll(data.next.container);
        initPageScripts(data.next.container);
        initScript(); 
        delay(0);
        initLoaderHome();
        initSpanLinesAnimation();
        initCookie();
      },
    }]
}); 


}
function initScrolltriggerNav() {
  const headerElement = document.querySelector('.header');
  const noiseElement = document.querySelector('.noise');

  ScrollTrigger.create({
    trigger: noiseElement,
    start: 'top -30%',
    onUpdate: self => {
      headerElement.classList.add('scrolled');
    },
    onLeaveBack: () => {
      headerElement.classList.remove('scrolled');
    },
  });
}



function initNextWord(data) {
  // Обновление содержимого .loading-words
  let parser = new DOMParser();
  let dom = parser.parseFromString(data.next.html, 'text/html');
  let nextProjects = dom.querySelector('.loading-words');
  document.querySelector('.loading-words').innerHTML = nextProjects.innerHTML;

  // Добавление класса 'active' на основе заголовка страницы
  addActiveClassBasedOnTitle();
}

function addActiveClassBasedOnTitle() {
  // Получаем заголовок страницы
  const pageTitle = document.title.trim();
  // Находим контейнер с классом 'loading-words'
  const loadingWordsContainer = document.querySelector('.loading-words');
  // Проверяем, существует ли контейнер
  if (loadingWordsContainer) {
    // Получаем все элементы h2 внутри контейнера
    const headers = loadingWordsContainer.querySelectorAll('h2');
    // Проходим по каждому элементу h2
    headers.forEach(header => {
      // Получаем текст внутри элемента h2 без учета содержимого div
      const headerText = header.childNodes[0].nodeValue.trim();
      // Сравниваем текст элемента h2 с заголовком страницы
      if (headerText === pageTitle) {
        // Добавляем класс 'active', если текст совпадает
        header.classList.add('active');
      } else {
        // Удаляем класс 'active', если текст не совпадает (на случай динамических изменений)
        header.classList.remove('active');
      }
    });
  } else {
    console.error('Element with class "loading-words" not found.');
  }
}


//=====  hello  ===================================================================================================================================================
document.addEventListener('load', function() {
  initScrolltriggerAnimations();
  initSpanLinesAnimation();
  
});


function initScrolltriggerAnimations() {
  
  if (document.querySelector('.hello')) {
  // Анимация .hello__avatar
  if (document.querySelector('.hello__avatar')) {
    document.querySelectorAll('.hello__avatar').forEach(function(triggerElement) {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.hello',
          start: "0 bottom",
          scrub: 1
        }
      });
  
      tl.to(triggerElement, {
        y: 140,
        ease: "none"
      });
    });
  }

  // Анимация для .hello__content
  if (document.querySelector('.hello__content')) {
    document.querySelectorAll('.hello__content').forEach(function(triggerElement) {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.hello',
          start: "0 bottom",
          scrub: 1
        }
      });
  
      tl.to(triggerElement, {
        y: 40,
        ease: "none"
      });
    });
  }

  // Анимация для .hello__logo-rotate
  // if (document.querySelector('.hello__logo-rotate')) {
  //   document.querySelectorAll('.hello__logo-rotate').forEach(function(triggerElement) {
  //     let tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: '.hello',
  //         start: "0 bottom",
  //         scrub: 1
  //       }
  //     });
  
  //     tl.to(triggerElement, {
  //       y: -100,
  //       ease: "none"
  //     });
  //   });
  // }

  // Анимация для .hello__links
  // if (document.querySelector('.hello__links')) {
  //   document.querySelectorAll('.hello__links').forEach(function(triggerElement) {
  //     let tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: '.hello',
  //         start: "0 bottom",
  //         scrub: 1
  //       }
  //     });

  //     tl.to(triggerElement, {
  //       y: -100,
  //       ease: "none"
  //     });
  //   });
  // }

  // Анимация для .footer-hello__scroll-wrap
//   if (document.querySelector('.footer-hello__scroll-wrap')) {
//     document.querySelectorAll('.footer-hello__scroll-wrap').forEach(function(triggerElement) {
//       let tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: '.hello',
//           start: "0 bottom",
//           scrub: 1
//         }
//       });

//       tl.to(triggerElement, {
//         y: 20,
//         ease: "none"
//       });
//     });
// }

}

  // Анимация для .hello-block
  if (document.querySelector('.hello__wrapper')) {
    document.querySelectorAll('.hello__wrapper').forEach(function(triggerElement) {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: "0 bottom",
          end: "100% 100%", // Добавлено 'end' для завершения анимации
          scrub: 1
        }
      });
  
      tl.to(triggerElement, {
        y: 40,
        ease: "none"
      });
    });
  }


const elements2 = gsap.utils.toArray(".parallax-img-down");
elements2.forEach((element) => {
  gsap.to(element.querySelector("img"), {
    y: 60,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom", // Анимация начинается, когда нижняя часть элемента достигает нижней части экрана
      end: "bottom top",         // Анимация заканчивается, когда верхняя часть элемента достигает верхней части экрана
      scrub: true,
      //markers: true,
    },
  });
});

//========================================================================================================================================================
   
 /* line-banner */
if ( document.querySelector('.works-items__container')) {
  gsap.to('.row-1-works-items', {
    scrollTrigger: {
      trigger: '.works-items__container',
      start: "top bottom",
      scrub: 1,
    },
    xPercent: -5,
  });
}

if ( document.querySelector('.works-items__container')) {
  gsap.to('.row-2-works-items', {
    scrollTrigger: {
      trigger: '.works-items__container',
      start: "top bottom",
      scrub: 1,
    },
    xPercent: 5,
  });
}

// ScrollTrigger.matchMedia({
//   "(min-width: 767.98px)": function() {
//     if (document.querySelector('.btn-wrapper-footer__button')) {
//       gsap.to('.btn-wrapper-footer__button', {
//         scrollTrigger: {
//             trigger: '.wrapper-footer__title',
//             start: "top bottom", 
//             scrub: 1,
//             //markers: true
//         },
//         xPercent: -50, 
//     }); 
//     }
//   }
// })

}

//========================================================================================================================================================


function initSpanLinesAnimation() {
  if (document.querySelector('.span-lines.animate')) {
    document.querySelectorAll('.span-lines.animate').forEach(function(triggerElement) {
      let targetElements = triggerElement.querySelectorAll('.span-line-inner');

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          toggleActions: 'play none none reset',
          start: "0% 100%",
          end: "100% 0%"
        }
      });

      if (targetElements.length > 0) {
        tl.from(targetElements, {
          y: "100%",
          stagger: 0.01,
          ease: "power3.out",
          duration: 1,
          delay: 0
        });
      }
    });
  }
}

/**
 * Cookie init
 */
function initCookie() {
  //console.log('DOM полностью загружен и обработан');

  // Проверяем куки при загрузке страницы
  if (getCookie('cookiebar') == 1) {
      ///console.log('Куки уже установлены, скрываем панель');
      document.getElementById('gdpr-box').classList.add('notactive');
      document.querySelector('.cookies-accept').classList.add('active');
  } else {
      //console.log('Куки не установлены, показываем панель');
      document.getElementById('gdpr-box').classList.remove('notactive');
      document.querySelector('.cookies-accept').classList.add('active'); // Добавляем класс active
  }

  // Обработчик для кнопки "Принять"
  document.querySelector('.gdpr-button-accept').addEventListener('click', function() {
      //console.log('Нажата кнопка "Принять"');
      document.getElementById('gdpr-box').classList.add('notactive');
      setCookie('cookiebar', 1, 365);
      document.querySelector('.cookies-accept').classList.add('active');
      return false;
  });

  // Обработчик для кнопки "Отклонить"
  document.querySelector('.gdpr-button-decline').addEventListener('click', function() {
      //console.log('Нажата кнопка "Отклонить"');
      document.getElementById('gdpr-box').classList.add('notactive');
      return false;
  });

  // Обработчик для кнопки "Удалить куки"
  document.querySelector('.gdpr-button-remove').addEventListener('click', function() {
      //console.log('Нажата кнопка "Удалить куки"');
      deleteCookie('cookiebar');
      document.getElementById('gdpr-box').classList.remove('notactive');
      document.querySelector('.cookies-accept').classList.remove('active');
      return false;
  });
}

function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
  //console.log(`Установлена куки: ${name}=${value}; ${expires}`);
}

function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function deleteCookie(name) {
  document.cookie = name + '=; Max-Age=-99999999; path=/';
  //console.log(`Удалена куки: ${name}`);
}

document.addEventListener('DOMContentLoaded', function() {
  initCookie();
});




