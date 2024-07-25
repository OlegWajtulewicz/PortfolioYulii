// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";
import { homeTexts } from './translations.js';

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
// Получаем все кнопки для переключения языков
const langButtons = document.querySelectorAll("[data-btn]");
const allLangs = ["pl", "en"];
const currentPathName = window.location.pathname;
let currentLang = localStorage.getItem("language") || checkBrowserLang() || "pl";
let currentTexts = {};


// Проверка пути страницы сайта
function checkPagePathName() {
	switch (currentPathName) {
		default:
			currentTexts = homeTexts;
			break;
	}
}
checkPagePathName();

// Изменение языка у текстов
function changeLang() {
	for (const key in currentTexts) {
		const elements = document.querySelectorAll(`[data-lang=${key}]`);
		elements.forEach(element => {
			element.textContent = currentTexts[key][currentLang];
		});
	}
	// Обновление URL с выбранным языком
	const urlParams = new URLSearchParams(window.location.search);
	urlParams.set('lang', currentLang);
	const newUrl = `${window.location.origin}${window.location.pathname}?${urlParams.toString()}${window.location.hash}`;
	window.history.replaceState(null, '', newUrl);
}
changeLang();

// Вешаем обработчики на каждую кнопку
langButtons.forEach((btn) => {
	btn.addEventListener("click", (event) => {
		if (!event.target.classList.contains("active")) {
			currentLang = event.target.dataset.btn;
			localStorage.setItem("language", currentLang);
			resetActiveClass(langButtons, "active");
			btn.classList.add("active");
			changeLang();
		}
	});
});

// Сброс активного класса у переданного массива элементов
function resetActiveClass(arr, activeClass) {
	arr.forEach((elem) => {
		elem.classList.remove(activeClass);
	});
}

// Проверка активной кнопки
function checkActiveLangButton() {
	const activeBtn = document.querySelector(`[data-btn="${currentLang}"]`);
	if (activeBtn) {
		activeBtn.classList.add("active");
	} else {
		document.querySelector('[data-btn="pl"]').classList.add("active");
	}
}
checkActiveLangButton();

// Проверка языка браузера
function checkBrowserLang() {
	const navLang = navigator.language.slice(0, 2).toLowerCase();
	return allLangs.includes(navLang) ? navLang : null;
}

loadTranslations()

console.log("navigator.language", checkBrowserLang());


//==  translations ======================================================================================================================================================
/** 
const langButtons = document.querySelectorAll("[data-btn]");
const allLangs = ["pl", "en"];
const currentPathName = window.location.pathname;
let currentLang =
	localStorage.getItem("language") || checkBrowserLang() || "pl";
let currentTexts = {};


const homeTexts = {
	"menu__link-1": {
		pl: "Aktualności",
		en: "Recently",
	},
	"menu__link-2": {
		pl: "Filmografia",
		en: "Filmography",
	},
	"menu__link-4": {
		pl: "Contakt",
		en: "Contact ",
	},
	"hello_text": {
		pl: "Kierownik produkcji | Koordynacja produkcyjna",
		en: "Production manager | Production coordination",
	},
	"loading-word": {
		pl: "Cześć",
		en: "Hello",
	},
	"works_title": {
		pl: "Aktualności",
		en: "Recently",
	},
	"loading-word-3": {
		pl: "Aktualności",
		en: "Recently",
	},
	"loading-word-4": {
		pl: "Filmografia",
		en: "Filmography",
	},
	"policy": {
		pl: "Polityka prywatności",
		en: "Privacy Policy",
	},
	"contact": {
		pl: "Skontaktuj się ze mną",
		en: "Contact me",
	},
	"chłopi": {
		pl: "CHŁOPI",
		en: "The Peasants",
	},
	"chłopi-sub": {
		pl: "Film animowany",
		en: "Animated movie",
	},
	"chłopi-role": {
		pl: "Koordynacja produkcyjna",
		en: "Production coordination",
	},
	"chłopi-descr": {
		pl: "Historia o tragicznej miłości i życiu w małej społeczności, gdzie reguły i brutalne zasady gry wyznaczają każdemu określone miejsce w grupie, a wyjście poza ciasne ramy grozi upokorzeniem i odrzuceniem.",
		en: "A tale of star-crossed love and life within the confines of a small community, where rigid rules and harsh codes of conduct dictate each individual's position within the group. Stepping beyond these narrow confines risks humiliation and ostracism.",
	},
};


// Проверка пути страницы сайта
function checkPagePathName() {
	switch (currentPathName) {
		default:
			currentTexts = homeTexts;
			break;
	}
}
checkPagePathName();

// Изменение языка у текстов
function changeLang() {
    for (const key in currentTexts) {
		const elements = document.querySelectorAll(`[data-lang=${key}]`);
		elements.forEach(element => {
		  element.textContent = currentTexts[key][currentLang];
		});
		setBlockDisplay()
	}
    // Update URL with selected language
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('lang', currentLang);
    const newUrl = `${window.location.origin}${window.location.pathname}?${urlParams.toString()}${window.location.hash}`;
    window.history.replaceState(null, '', newUrl);
    }
changeLang();

//========================================================================================================================================================


// Вешаем обработчики на каждую кнопку
langButtons.forEach((btn) => {
	btn.addEventListener("click", (event) => {
		if (!event.target.classList.contains("active")) {
			currentLang = event.target.dataset.btn;
			localStorage.setItem("language", event.target.dataset.btn);
			resetActiveClass(langButtons, "active");
			btn.classList.add("active");
			changeLang();
			setBlockDisplay();
		}
	});
});

// Сброс активного класса у переданного массива элементов
function resetActiveClass(arr, activeClass) {
	arr.forEach((elem) => {
		elem.classList.remove(activeClass);
	});
}

// Проверка активной кнопки
function checkActiveLangButton() {
	switch (currentLang) {
		
		case "pl":
			document
				.querySelector('[data-btn="pl"]')
				.classList.add("active");
			break;
		case "en":
			document
				.querySelector('[data-btn="en"]')
				.classList.add("active");
			break;

		default:
			document
				.querySelector('[data-btn="pl"]')
				.classList.add("active");
			break;
	}
}
checkActiveLangButton();

// Проверка языка браузера
function checkBrowserLang() {
	const navLang = navigator.language.slice(0, 2).toLowerCase();
	const result = allLangs.some((elem) => {
		return elem === navLang;
	});
	if (result) {
		return navLang;
	}
}

console.log("navigator.language", checkBrowserLang());

//========================================================================================================================================================
function getLanguageFromURL() {
	const urlParams = new URLSearchParams(window.location.search);
	const langParam = urlParams.get('lang');
	if (langParam) {
	  return langParam.toLowerCase();
	}
	return null;
  }
  
  function setBlockDisplay() {
	const lang = getLanguageFromURL();
	const blocks = document.querySelectorAll('[data-block]');
  
	for (const block of blocks) {
	  const blockLang = block.getAttribute('data-block');
	  if (blockLang === lang) {
		//block.style.display = 'block';
	  } else {
		//block.style.display = 'none';
	  }
	}
  }
  
  window.addEventListener('DOMContentLoaded', setBlockDisplay);

  */

  /**
   // Функция-обёртка для получения языка из URL-адреса
const allLangs = ["pl", "en"];
let currentLang = localStorage.getItem("currentLang") || checkBrowserLang() || "pl";
let currentTexts = {};

// Загрузка переводов из внешнего файла
async function loadTranslations() {
  try {
    const response = await fetch('./translations.json');
    if (!response.ok) {
      throw new Error(`Network response was not ok, status: ${response.status}`);
    }
    currentTexts = await response.json();
    changeLang(); // Обновить текст на странице после загрузки переводов
  } catch (error) {
    console.error('Error loading translations:', error);
  }
}

// Получение языка из параметров URL
function getLanguage() {
  const langParams = new URLSearchParams(window.location.search);
  const lang = langParams.get('lang');
  if (lang && allLangs.includes(lang)) {
    return lang;
  }
  return currentLang;
}

// Установка отображения блоков контента на основе языка
function setBlockDisplay(lang) {
  const blocks = document.querySelectorAll('[data-block]');
  blocks.forEach(block => {
    const blockLang = block.getAttribute('data-block');
    block.style.display = blockLang === lang ? 'block' : 'none';
  });
}

// Сброс класса "active" с кнопок языка
function resetActiveClass(buttons, className) {
  buttons.forEach(button => button.classList.remove(className));
}

// Добавление класса "active" к кнопке языка
function checkActiveLangButton(lang) {
  const langButtons = document.querySelectorAll('[data-btn]');
  resetActiveClass(langButtons, 'active');
  const activeButton = Array.from(langButtons).find(button => button.getAttribute('data-btn') === lang);
  if (activeButton) {
    activeButton.classList.add('active');
  }
}

// Обновление отображаемого текста
function changeLang() {
  const currentLanguage = getLanguage();
  const textElements = document.querySelectorAll('[data-lang]');
  textElements.forEach(element => {
    const elementLang = element.getAttribute('data-lang');
    if (elementLang && currentTexts[elementLang]) {
      element.textContent = currentTexts[elementLang][currentLanguage];
    }
  });

  setBlockDisplay(currentLanguage);
  checkActiveLangButton(currentLanguage);

  // Обновление URL с выбранным языком
  const urlParams = new URLSearchParams(window.location.search);
  urlParams.set('lang', currentLanguage);
  history.replaceState(null, '', `?${urlParams}`);
}

// Обработка события нажатия кнопки языка
function handleLanguageButtonClick(event) {
  const clickedButton = event.target;
  const lang = clickedButton.getAttribute('data-btn');
  if (lang && allLangs.includes(lang)) {
    currentLang = lang;
    changeLang();
    localStorage.setItem('currentLang', currentLang);
  }
}

// Проверка языка браузера
function checkBrowserLang() {
  const navLang = navigator.language.slice(0, 2).toLowerCase();
  return allLangs.includes(navLang) ? navLang : null;
}

// Загрузка страницы
window.addEventListener('DOMContentLoaded', () => {
  // Проверка localStorage для предпочитаемого языка
  const storedLang = localStorage.getItem('currentLang');
  if (storedLang && allLangs.includes(storedLang)) {
    currentLang = storedLang;
  }

  // Загрузка переводов для текущей страницы
  loadTranslations();

  // Добавление обработчика события нажатия кнопки языка
  const langButtons = document.querySelectorAll('[data-btn]');
  langButtons.forEach(button => button.addEventListener('click', handleLanguageButtonClick));

  // Отображение контента на основе выбранного языка
  changeLang();
});

    
  */  
  
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