import 'normalize.css';
import './style.css';
import {renderAboutSection, createFooter} from './about.js';
import {renderHomePage} from './homepage.js';
import { renderContactUs } from './contactUs.js';
import { renderMenu } from './menu.js';

const content = document.querySelector('#content');
const [home, menu, about, contact] = document.querySelectorAll('.nav-btn');
let isDefaultStyleRemoved = false;

(function initCreatePage() {
    renderHomePage();
    createFooter();
    home.classList.add('active');
})();

home.addEventListener('click', () => {
    content.innerHTML = '';
    renderHomePage();
}); 

about.addEventListener('click', () => {
    content.innerHTML = '';
    renderAboutSection();

    if (!isDefaultStyleRemoved) {
        home.classList.remove('active');
        isDefaultStyleRemoved = true;
    }
});

contact.addEventListener('click', () => {
    content.innerHTML = '';
    renderContactUs();

    if (!isDefaultStyleRemoved) {
        home.classList.remove('active');
        isDefaultStyleRemoved = true;
    }    
});

menu.addEventListener('click', () => {
    content.innerHTML = '';
    renderMenu();
    
    if (!isDefaultStyleRemoved) {
        home.classList.remove('active');
        isDefaultStyleRemoved = true;
    }
});