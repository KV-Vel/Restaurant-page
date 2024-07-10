import 'normalize.css';
import './style.css';
import {renderAboutSection, createFooter} from './about.js';
import {renderHomePage} from './homepage.js';
import { renderContactUs } from './contactUs.js';

const content = document.querySelector('#content');
const [home, menu, about, contact] = document.querySelectorAll('.nav-btn');

(function initCreatePage() {
    renderHomePage();
    createFooter();
})();

home.addEventListener('click', () => {
    content.innerHTML = '';
    renderHomePage();
}); 

about.addEventListener('click', () => {
    content.innerHTML = '';
    renderAboutSection();
});

contact.addEventListener('click', () => {
    content.innerHTML = '';
    renderContactUs()
});