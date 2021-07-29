const projects = [
  {
    title: 'My recent works',
    technologies: ['Html', 'Bootsrap', 'Ruby'],
    image: 'img/Placeholder.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standardA daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard',
    liveLink: '#',
    sourceLink: '#',
    alt: 'alternative text',
  },
  {
    title: 'Profesional Art Printing Data 2',
    technologies: ['Html', 'Css', 'Bootsrap'],
    image: 'img/Placeholder.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard',
    liveLink: '#',
    sourceLink: '#',
    alt: 'alternative text',
  },
  {
    title: 'Profesional Art Printing Data 3',
    technologies: ['Html', 'Css', 'Bootsrap'],
    image: 'img/Placeholder.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard',
    liveLink: '#',
    sourceLink: '#',
    alt: 'alternative text',
  },
  {
    title: 'Profesional Art Printing Data 4',
    technologies: ['Html', 'Css', 'Bootsrap'],
    image: 'img/Placeholder.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard',
    liveLink: '#',
    sourceLink: '#',
    alt: 'alternative text',
  },
  {
    title: 'Profesional Art Printing Data 5',
    technologies: ['Html', 'Css', 'Bootsrap'],
    image: 'img/Placeholder.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard',
    liveLink: '#',
    sourceLink: '#',
    alt: 'alternative text',
  },
  {
    title: 'Profesional Art Printing Data 6',
    technologies: ['Html', 'Css', 'Bootsrap'],
    image: 'img/Placeholder.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard',
    liveLink: '#',
    sourceLink: '#',
    alt: 'alternative text',
  },
  {
    title: 'Profesional Art Printing Data 7',
    technologies: ['Html', 'Css', 'Bootsrap'],
    image: 'img/Placeholder.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard',
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
