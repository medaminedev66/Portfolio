const projects = [
    {
    title: 'My recent works',
    technologies: ['Html','Bootsrap','Ruby'],
    image: 'img/Placeholder.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard',
    liveLink: '#',
    sourceLink: '#',
},
{
    title: 'Profesional Art Printing Data',
    technologies: ['Html','Css','Bootsrap'],
    image: 'img/Placeholder.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard',
    liveLink: '#',
    sourceLink: '#'
},
{
    title: 'Profesional Art Printing Data',
    technologies: ['Html','Css','Bootsrap'],
    image: 'img/Placeholder.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard',
    liveLink: '#',
    sourceLink: '#'
},
{
    title: 'Profesional Art Printing Data',
    technologies: ['Html','Css','Bootsrap'],
    image: 'img/Placeholder.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard',
    liveLink: '#',
    sourceLink: '#'
},
{
    title: 'Profesional Art Printing Data',
    technologies: ['Html','Css','Bootsrap'],
    image: 'img/Placeholder.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard',
    liveLink: '#',
    sourceLink: '#'
}
];
const container = document.createElement('div');
const title = document.createElement('h2');
const infoDiv = document.createElement('div');
const descBtn = document.createElement('div');
const description = document.createElement('p');
const img = document.createElement('img');
const technologies = document.createElement('ul');
const btnOne = document.createElement('a');
const btnTwo = document.createElement('a');
const btnClose = document.createElement('i');

btnOne.innerText = 'See Live';
btnTwo.innerText = 'See Source';
btnClose.className += 'fas';
btnClose.className += 'fa-times';
descBtn.appendChild(description);
descBtn.appendChild(btnOne);
descBtn.appendChild(btnTwo);
infoDiv.appendChild(img);
infoDiv.appendChild(descBtn);
container.appendChild(title);
container.appendChild(btnClose);
container.appendChild(technologies);
container.appendChild(infoDiv);

function pop(index){
  let techHtml = '';
  document.body.appendChild(container);
  title.innerText = projects[index].title;
  for(let i = 0 ; projects[index].technologies.length ; i+=1) {
     techHtml += '<li>'+projects[index].technologies[0]+'</li>';
  }
  technologies.innerHTML = techHtml;
  img.src = projects[index].image;
  description.innerText = projects[index].description; 
  btnOne.href = projects[index].liveLink;
  btnTwo.href = projects[index].sourceLink;
}


// add event listeners
document.querySelector('.one > button').addEventListener('click',() => {
    pop(0);
});
document.querySelector('.two').addEventListener('click',() => {
    pop(1);
});
document.querySelector('.two > button').addEventListener('click',() => {
    pop(1);
});
document.querySelector('.three > button').addEventListener('click',() => {
    pop(2);
});
document.querySelector('.three').addEventListener('click',() => {
    pop(2);
});
document.querySelector('.four > button').addEventListener('click',() => {
    pop(3);
});
document.querySelector('.four').addEventListener('click',() => {
    pop(3);
});
document.querySelector('.five > button').addEventListener('click',() => {
    pop(4);
});
document.querySelector('.five').addEventListener('click',() => {
    pop(4);
});
document.querySelector('.six > button').addEventListener('click',() => {
    pop(5);
});
document.querySelector('.six').addEventListener('click',() => {
    pop(5);
});

// closing event




