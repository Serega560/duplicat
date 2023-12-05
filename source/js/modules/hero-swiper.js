const swiperHero = document.querySelector('[data-swiper="hero"]');
const swiperButtonPrev = document.querySelector('[data-swiper-button-prev="hero"]');
const swiperButtonNext = document.querySelector('[data-swiper-button-next="hero"]');


const initSwiperHero = () => {
  return new window.Swiper(swiperHero, {

    // Параметры
    direction: 'horizontal',
    loop: false,
    effect: 'slider',
    slidesPerView: 1,

    // Кнопки
    navigation: {
      nextEl: swiperButtonNext,
      prevEl: swiperButtonPrev,
    },
  });
}

export {initSwiperHero};
