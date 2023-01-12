// import Swiper JS
import Swiper, { Pagination, EffectFade } from 'swiper';

const mainSlider = document.querySelector('.main-slider');

function windowLoad() {
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
