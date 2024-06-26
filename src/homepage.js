const titleDiv = document.getElementById('content');
const div = document.createElement('div');
div.classList.add('homepage');
const title = document.createElement('h1');
title.classList.add('title');
title.textContent = 'WELCOME TO SPRINGS RESTAURANT!'
div.appendChild(title);

titleDiv.appendChild(div);

const homeButton = document.getElementById('home');
//const menuButton = document.getElementById('menu');
//const contactButton = document.getElementById('contact');

homeButton.addEventListener('click', () => {
    titleDiv.innerHTML = '';
    titleDiv.appendChild(div);
 });


