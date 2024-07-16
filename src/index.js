import 'normalize.css';
import './style.css';
import { renderAboutSection, createFooter } from './js-modules/about.js';
import { renderHomePage } from './js-modules/homepage.js';
import { renderContactUs } from './js-modules/contactUs.js';
import { renderMenu } from './js-modules/menu.js';

const navigationBar = document.querySelector('nav');
const content = document.querySelector('#content');
export const [...navButtons] = document.querySelectorAll('.nav-btn');

(function initCreatePage(homepageButton) {
    renderHomePage();
    createFooter();

    homepageButton.classList.add('active');
})(navButtons[0]);

function handleTabs(e) {
    navButtons.find(btn => btn.classList.contains('active'))
              .classList.remove('active');

    e.target.classList.add('active');

    content.innerHTML = '';

    switch (e.target.textContent) {
        case 'About':
            renderAboutSection();
            break;
        case 'Home':
            renderHomePage();
            break;
        case 'Menu':
            renderMenu();
            break;
        case 'Contact':
            renderContactUs();
            break;
    }
}

navigationBar.addEventListener('click', handleTabs);