import {iosVhFix} from './utils/ios-vh-fix';
import {initAccordions} from "./modules/accordion/init-accordion.js";
import {initSwiperHero} from "./modules/hero-swiper.js";
import initMap from "./modules/map.js";

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

    initSwiperHero();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    iosVhFix();
    initAccordions();
    initMap();
  });
});
