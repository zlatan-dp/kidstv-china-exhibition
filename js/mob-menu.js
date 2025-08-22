const openMenuBtn = document.querySelector('.mob-menu-btn');
const closeMenuBtn = document.querySelector('.mob-menu-close');
const menuList = document.querySelector('.mob-menu-list');
const menu = document.querySelector('.backdrop');
const body = document.querySelector('body');

function toggleMenu() {
  const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

  if (menu.classList.contains('is-hidden')) {
    menu.classList.remove('is-hidden');
    body.classList.add('no-scroll');
    body.style.paddingRight = `${scrollBarWidth}px`;
  } else {
    menu.classList.add('is-hidden');
    body.classList.remove('no-scroll');
    body.removeAttribute('style');
  }
}

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);
menuList.addEventListener('click', toggleMenu);

// lupa

const pageMagnifier = new HTMLMagnifier({
  zoom: 2,
  shape: 'square',
  width: 450,
  height: 300,
});

const magnifierBtn = document.getElementById('toggleMagnifier');
let magnifierEnabled = false;

magnifierBtn.addEventListener('click', () => {
  magnifierEnabled = !magnifierEnabled;
  if (magnifierEnabled) {
    pageMagnifier.show();
    magnifierBtn.textContent = 'Вимкнути лупу';
  } else {
    pageMagnifier.hide();
    magnifierBtn.textContent = 'Увімкнути лупу';
  }
});
