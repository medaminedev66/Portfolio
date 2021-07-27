const closeMenu = () => {
  document.querySelector('header').classList.remove('mobile-menu');
  document.querySelector('nav > img').classList.remove('visible');
  document.querySelector('nav > ul').classList.remove('mobile-nav');
  document.querySelector('nav').classList.remove('nav-strech');
  document.querySelector('header > div').classList.remove('visible');

}

const openMenu = () => {
  document.querySelector('header').classList.add('mobile-menu');
  document.querySelector('nav > img').classList.add('visible');
  document.querySelector('nav > ul i').classList.toggle('visible');
  document.querySelector('nav > ul').classList.add('mobile-nav');
  document.querySelector('nav').classList.add('nav-strech');
  document.querySelector('header > div').classList.add('visible');
}
document.querySelector('nav>img').addEventListener('click', openMenu);
const items = Array.from(document.querySelectorAll('ul > li a'));
for (let i = 0; i < items.length; i += 1) {
  items[i].addEventListener('click', closeMenu);
}
document.querySelector('ul > li i').addEventListener('click', closeMenu);
