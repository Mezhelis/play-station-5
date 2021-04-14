const questionsList = document.querySelector('.questions__list');

questionsList.addEventListener('click', questionOpen);

function questionOpen(e) {
  let elem = e.target.closest('.item-question');
  if (elem.classList.contains('item-question--active')) { return };

  document.querySelector('.item-question--active').classList.remove('item-question--active');

  elem.classList.add('item-question--active');
};