const projects = [
  {
    title: 'Conference Website',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: 'img/projects/conference-mobile.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standardA daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard',
    liveLink: '#',
    sourceLink: '#',
    alt: 'alternative text',
  },
  {
    title: 'Profesional Art Printing Data 2',
    technologies: ['Html', 'Css', 'Bootsrap'],
    image: 'img/Placeholder.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard',
    liveLink: '#',
    sourceLink: '#',
    alt: 'alternative text',
  },
  {
    title: 'Countries of all the World',
    technologies: ['Css', 'Bootsrap', 'React', 'Redux'],
    image: 'img/projects/countries.PNG',
    description:
      'This React capstone project is about building a mobile web application to check a list of metrics using React and Redux. I selected an API that provides numeric data about countries then I built the webapp around it. The webapp has several pages: \n \
- Home page with a list of countries that could be filtered by some parameters(Region, population...) and a random country at the top. \n- The detail page for the country details; in the screenshot, the detail page for the Cook Islands country with its information(Capital, Population, Currency, Region...).',
    liveLink: '#',
    sourceLink: '#',
    alt: 'alternative text',
  },
  {
    title: 'Conference Website',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: 'img/projects/conference-mobile.png',
    description:
      'This project is based on an online website for a Facebook instant games conference',
    liveLink: 'https://medaminedev66.github.io/Portfolio/',
    sourceLink: 'https://github.com/medaminedev66/Portfolio',
    alt: 'alternative text',
  },
  {
    title: 'Awesome Books Project',
    technologies: ['Html', 'Css', 'JavaScript'],
    image: 'img/projects/books.png',
    description:
      'A simple App that allows a user to efficiently organize all their books.',
    liveLink: 'https://emmyobonyo.github.io/AwesomeBooks/',
    sourceLink: 'https://github.com/medaminedev66/AwesomeBooks',
    alt: 'alternative text',
  },
  {
    title: 'My personal portfolio',
    technologies: ['Html', 'Css', 'JavaScript'],
    image: 'img/projects/portfolio-desktop.JPG',
    description:
      'This is a practice project about building a mobile and website version of my portfolio.',
    liveLink: 'https://medaminedev66.github.io/Portfolio/',
    sourceLink: 'https://github.com/medaminedev66/Portfolio',
    alt: 'alternative text',
  },
  {
    title: 'Profesional Art Printing Data 7',
    technologies: ['Html', 'Css', 'Bootsrap'],
    image: 'img/Placeholder.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard',
    liveLink: '#',
    sourceLink: '#',
    alt: 'alternative text',
  },
];

// Create Html Elements

const container = document.createElement('div');
const title = document.createElement('h2');
const infoDiv = document.createElement('div');
const descBtn = document.createElement('div');
const description = document.createElement('p');
const image = document.createElement('img');
const technologies = document.createElement('ul');
const btn = document.createElement('div');
const btnOne = document.createElement('a');
const btnTwo = document.createElement('a');
const btnClose = document.createElement('button');
const i = document.createElement('i');
const icon1 = document.createElement('i');
const icon2 = document.createElement('i');
const overlay = document.createElement('div');
btnOne.innerText = 'See Live';
btnTwo.innerText = 'See Source';
btnOne.appendChild(icon1);
btnTwo.appendChild(icon2);
btn.appendChild(btnOne);
btn.appendChild(btnTwo);
btnClose.appendChild(i);
descBtn.appendChild(description);
descBtn.appendChild(btn);
infoDiv.appendChild(image);
infoDiv.appendChild(descBtn);
container.appendChild(title);
container.appendChild(btnClose);
container.appendChild(technologies);
container.appendChild(infoDiv);

// Add listeners to projects

btnClose.setAttribute('onClick', 'popClose()');
btnOne.setAttribute('onClick', 'popClose()');
btnTwo.setAttribute('onClick', 'popClose()');

// addi classes
icon1.className = 'fas fa-external-link-alt';
icon2.className = 'fab fa-github';
i.className += 'fas';
i.className += ' fa-times';
container.className = 'popContainer';
title.className = 'popTitle';
infoDiv.className = 'infoDiv';
description.className = 'popDescr';
image.className = 'popImage';
descBtn.className = 'descBtn';
technologies.className = 'popTec';
btn.className = 'popBtn';
btnClose.className += ' popBtnClose';
technologies.className = 'popTech';
overlay.className = 'popOverlay';

// open the popup function

const popOpen = (index) => {
  document.body.appendChild(container);
  document.body.appendChild(overlay);
  document.body.className = ' stopScroll';
  title.innerText = projects[index].title;
  for (let i = 0; i < projects[index].technologies.length; i += 1) {
    const li = document.createElement('li');
    li.innerText = projects[index].technologies[i];
    technologies.appendChild(li);
  }
  image.src = projects[index].image;
  image.alt = projects[index].alt;
  description.innerText = projects[index].description;
  btnOne.href = projects[index].liveLink;
  btnTwo.href = projects[index].sourceLink;
};

// Add listeners to popup elements

for (let i = 0; i <= 6; i += 1) {
  document.getElementById(i).addEventListener('click', () => {
    popOpen(i);
  });
}
// closing the popup function

const popClose = () => {
  document.body.className = '';
  if (technologies.hasChildNodes) {
    while (technologies.firstChild) {
      technologies.removeChild(technologies.firstChild);
    }
  }
  document.body.removeChild(container);
  document.body.removeChild(overlay);
};
popClose();
