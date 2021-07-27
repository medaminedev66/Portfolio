function openMenu() {
    const menu = document.querySelector('header');

    // const menuItem = Array.from(document.querySelectorAll('nav > ul li'));
    // for (let item = 0; item < menuItem.length; item += 1) {
    //     menuItem[item].classList.add('menu-item');
    // }
    menu.classList.add('mobile-menu');
    document.querySelector('nav > img').classList.toggle('visible');
    document.querySelector('nav > ul').classList.toggle('mobile-nav');
    document.querySelector('header > div').classList.toggle('visible');
}

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

const menuBtn = document.querySelector('nav>img');
menuBtn.addEventListener('click', openMenu);

// const closeBtn = document.querySelector('.closing-btn');