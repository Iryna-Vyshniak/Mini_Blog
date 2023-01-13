// import Swiper JS
import Swiper, { Pagination, EffectFade } from 'swiper';

const mainSlider = document.querySelector('.main-slider');

function windowLoad() {
  document.body.classList.add('loaded');
  if (mainSlider) {
    new Swiper('.main-slider', {
      modules: [Pagination, EffectFade],
      loop: true,

      speed: 2000,
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: '.bullets__items',
        type: 'bullets',
        clickable: true,
      },
    });
  }
}

window.addEventListener('load', windowLoad);

document.addEventListener('click', documentActions);
function documentActions(e) {
  const targetElement = e.target;
  //tabs
  if (targetElement.closest('.nav-popular__item')) {
    const tabNavItem = targetElement.closest('.nav-popular__item');
    if (!tabNavItem.classList.contains('active')) {
      const activeTabNavItem = document.querySelector(
        '.nav-popular__item.active'
      );
      activeTabNavItem.classList.remove('active');
      tabNavItem.classList.add('active');

      const tabItems = document.querySelectorAll('.popular__tab');
      const activeTabItem = document.querySelector('.popular__tab.active');
      activeTabItem.classList.remove('active');
      tabItems[getIndex(tabNavItem)].classList.add('active');
    }
  }
}

const getIndex = el => [...el.parentNode.children].indexOf(el);
