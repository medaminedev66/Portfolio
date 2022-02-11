const projects = [
  {
    title: 'Lunar Hotel',
    technologies: ['Ruby on rails', 'React', 'JavaScript', 'Redux', 'Ruby'],
    image: 'img/projects/localhost_3001_.png',
    description:
      'This project is about creating API end point using Ruby on Rails and deploying the API on heroku. The API has rooms and reservations endpoints. The API also has authentication and authorization for the user. The API is used in our front end React project which is based on an app to book a room in Lunar hotel.\n \
      Demo account: \n \
      - email: testuser@test.com \n \
      - password: testpasswd',
    liveLink: 'https://lunar-hotel.netlify.app/',
    sourceLink: 'https://github.com/medaminedev66/lunar-hotel-backend',
    alt: 'lunar hotel full stack website',
  },
  {
    title: 'Javascript Capstone',
    technologies: ['Html', 'Css', 'JavaScript', 'Webpack'],
    image: 'img/projects/world-food.png',
    description:
      'The JavaScript capstone project (World Food) is about building our own web application based on an external API. The webapp have 2 user interfaces: \n \
      - A Home Page displying items that you can like \n \
      - A Comment button on home page display a Popup window with more detail about item. \n \
      - In Popup user can add comments and it will be prserved in API.\n \
      - We use an API that provides data about food and we make our webiste accoding to the data. Meals DB \n \
      - In this project we practice to give review to each other. \n \
      - We follow Gitflow for this project and solve git conflicts',
    liveLink: 'https://medaminedev66.github.io/javascript-capstone/',
    sourceLink: 'https://github.com/medaminedev66/javascript-capstone',
    alt: 'Javascript Capstone',
  },
  {
    title: 'Countries of all the World',
    technologies: ['Css', 'Bootstrap', 'React', 'Redux'],
    image: 'img/projects/countries-world.png',
    description:
      'This React capstone project is about building a mobile web application to check a list of metrics using React and Redux. I selected an API that provides numeric data about countries then I built the webapp around it. The webapp has several pages: \n \
- Home page with a list of countries that could be filtered by some parameters(Region, population...) and a random country at the top. \n- The detail page for the country details; in the screenshot, the detail page for the Cook Islands country with its information(Capital, Population, Currency, Region...).',
    liveLink: 'https://medaminedev66.github.io/countries-of-the-world/',
    sourceLink: 'https://github.com/medaminedev66/countries-of-the-world',
    alt: 'alternative text',
  },
  {
    title: 'Conference Website',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: 'img/projects/conference-screens.png',
    description:
      'This project is based on an online website for a Facebook instant games conference: \n \
      - The home page has the main program section where the different programs offered are displayed and also different distinguished speakers invited to speak in the conference. \n \
      - The about page has information about our conference and partnerships.',
    liveLink: 'https://medaminedev66.github.io/Conference-page/',
    sourceLink: 'https://github.com/medaminedev66/Conference-page',
    alt: 'alternative text',
  },
  {
    title: 'Budget app',
    technologies: ['Ruby', 'Ruby on rails', 'SASS','BOOTSTRAP'],
    image: 'img/projects/budget.png',
    description:
      'The Budget app is a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
    liveLink: 'https://medamine-budget-app.herokuapp.com/',
    sourceLink: 'https://github.com/medaminedev66/budget-app',
    alt: 'Budget app',
  },
  {
    title: 'My personal portfolio',
    technologies: ['Html', 'Css', 'JavaScript'],
    image: 'img/projects/portfolio-screens.png',
    description:
      'This is a practice project about building a mobile and website version of my portfolio.',
    liveLink: 'https://medaminedev66.github.io/Portfolio/',
    sourceLink: 'https://github.com/medaminedev66/Portfolio',
    alt: 'alternative text',
  },
  {
    title: 'Books store',
    technologies: ['React', 'JavaScript', 'Bootstrap', 'CSS'],
    image: 'img/projects/books-store.png',
    description:
      'In the Bookstore website you can: \n \
      - Display a list of books.\n \
      - Add a book.\n \
      - Remove a selected book.\n \
      Built With\n \
      - React\n \
      - JavaScript\n \
      - CSS\n \
      - Bootstrap',
    liveLink: 'https://medaminedev66.github.io/bookstore/',
    sourceLink: 'https://github.com/medaminedev66/bookstore',
    alt: 'alternative text',
  },
];

const getType = (id) => {
  let type = 'none';
  switch (id) {
    case 1:
      type = 'first';
      break;
    case 2:
      type = 'two';
      break;
    case 3:
      type = 'three';
      break;
    case 4:
      type = 'four';
      break;
    case 5:
      type = 'five';
      break;
    case 6:
      type = 'six';
      break;
  }
  return type;
};

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
container.appendChild(btnClose);
container.appendChild(title);
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
btnClose.className += 'popBtnClose';
technologies.className = 'popTech';
overlay.className = 'popOverlay';

// open the popup function

const popOpen = (index) => {
  document.body.appendChild(container);
  document.body.appendChild(overlay);
  document.body.className = 'stopScroll';
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

// Show see project button
const showButton = (id) => {
  const type = getType(id);

  document.getElementById(`b-${id}`).classList.add('show');
  document.getElementById(`h-${id}`).classList.add('visible');
  document.getElementById(`p-${id}`).classList.add('visible');
  document.getElementById(`u-${id}`).classList.add('visible');
  document.getElementById(`${id}`).classList.add(`${type}-new`);
};

const removeButton = (id) => {
  const type = getType(id);

  document.getElementById(`b-${id}`).classList.remove('show');
  document.getElementById(`h-${id}`).classList.remove('visible');
  document.getElementById(`p-${id}`).classList.remove('visible');
  document.getElementById(`u-${id}`).classList.remove('visible');
  document.getElementById(`${id}`).classList.remove(`${type}-new`);
};
// Add listeners to popup elements

for (let i = 0; i <= 6; i += 1) {
  document.getElementById(i).addEventListener('mouseover', () => {
    showButton(i);
  });

  document.getElementById(i).addEventListener('mouseout', () => {
    removeButton(i);
  });
  if (i > 0) {
    document.getElementById(`b-${i}`).addEventListener('click', () => {
      popOpen(i);
    });
  } else {
    document.getElementById(i).addEventListener('click', () => {
      popOpen(i);
    });
  }
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
