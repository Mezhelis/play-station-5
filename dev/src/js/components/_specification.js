const tabsLine = document.querySelector('.specification__tabs-line');
const specificationItem = document.querySelectorAll('.specification__item');

tabsLine.addEventListener('click', activeTabLine);

function activeTabLine(e) {
  if (!e.target.dataset.for) { return };

  for (let item of specificationItem) {
    if (e.target.dataset.for == item.dataset.id) {

      document.querySelector('.specification__line--active').classList.remove('specification__line--active');
      document.querySelector('.item-specification--active').classList.remove('item-specification--active');

      e.target.classList.add('specification__line--active');
      item.classList.add('item-specification--active');
    }
  }
};