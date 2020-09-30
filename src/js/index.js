import '../scss/style.scss';

const arrToBottom = document.querySelector('.banner__to-bottom');
const targetId = document.querySelector('#promo');

arrToBottom.addEventListener('click', () => {
  targetId.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
