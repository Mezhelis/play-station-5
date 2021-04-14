const sliderText = new Swiper('.slider-text', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.sliders-nav__button-next',
    prevEl: '.sliders-nav__button-prev',
  }
});

const sliderPsImg = new Swiper('.slider-ps-img', {
  slidesPerView: 1,
  loop: true,
  thumbs: {
    swiper: sliderText
  },
  navigation: {
    nextEl: '.sliders-nav__button-next',
    prevEl: '.sliders-nav__button-prev',
  }
});