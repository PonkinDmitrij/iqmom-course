import '../scss/style.scss';
import Swiper, { Navigation, Pagination } from 'swiper';

const arrToBottom = document.querySelector('.banner__to-bottom');
const promo = document.querySelector('#promo');
const bannerBuy = document.querySelector('.banner__buy');
const products = document.querySelector('#products');

arrToBottom.addEventListener('click', () => {
  promo.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

bannerBuy.addEventListener('click', (evt) => {
  evt.preventDefault();
  products.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

Swiper.use([Navigation, Pagination]);

const mySwiper = new Swiper('.swiper-container', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
