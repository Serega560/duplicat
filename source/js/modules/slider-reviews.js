const swiperReviews = document.querySelector('[data-swiper="reviews"]');
const swiperButtonPrev = document.querySelector('[data-swiper-button-prev="reviews"]');
const swiperButtonNext = document.querySelector('[data-swiper-button-next="reviews"]');
console.log(swiperButtonPrev);
console.log(swiperButtonNext)
//
//
const initSwiperReviews = () => {
  return new window.Swiper(swiperReviews, {

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

export {initSwiperReviews};
