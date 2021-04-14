const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');
const body = document.querySelector('body');
const menu = document.querySelector('.menu');

function menuCloseOpen() {
  menuBtn.classList.toggle('menu__btn--active');
  menuList.classList.toggle('menu__list--active');
  body.classList.toggle('lock');
};

menuBtn.addEventListener('click', () => {
  menuCloseOpen();
});

menu.addEventListener('click', (e) => {
  if (!e.target.classList.contains('menu__link')) { return };

  menuCloseOpen();
});
