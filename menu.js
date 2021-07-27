const openMenu = () => {
    document.querySelector('header').classList.toggle('mobile-menu');
    document.querySelector('nav > img').classList.toggle('visible');
    document.querySelector('nav > ul').classList.toggle('mobile-nav');
    document.querySelector('nav').classList.toggle('nav-strech');
    document.querySelector('header > div').classList.toggle('visible');
}
document.querySelector('nav>img').addEventListener('click', openMenu);
const items = Array.from(document.querySelectorAll('ul > li a'));
for (let i = 0; i < items.length; i += 1) {
    items[i].addEventListener('click', openMenu);
}
document.querySelector('ul > li i').addEventListener('click', openMenu);



// const menuAction = () => {

// }

// function closeMenu() {
//     const menu = document.querySelector('nav>ul');
//     const menuItem = Array.from(document.querySelectorAll('nav > ul li'));
//     for (let item = 0; item < menuItem.length; item += 1) {
//         menuItem[item].classList.remove('menu-item');
//     }
//     menu.classList.remove('mobile-menu');
//     document.querySelector('nav > img').classList.toggle('visible');
//     document.querySelector('nav > div').classList.toggle('visible');
// }


// const closeBtn = document.querySelector('.closing-btn');