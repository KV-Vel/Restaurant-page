import {createEl} from './about';
import italianHotDog from './images/italian.png';
import classicHotDog from './images/classic.png';
import gravyHotDog from './images/gravy3.png';
import americanHotDog from './images/american2.png';
import relishHotDog from './images/relish.png';
import chicagoHotDog from './images/chicago2.png';

export function renderMenu() {
    const fragment = document.createDocumentFragment();
    const contentDiv = document.querySelector('#content');

    const menuWrapper = createEl('div', {
        className: 'menu-wrapper'
    });

    //HEADER
    const menuHeader2 = createEl('h2', {
        textContent: '----MENU-----'
    });

    //MENU ITEM 1
    const menu = createEl('div', {
        className: 'menu'
    });

    const item1 = createEl('div', {
        className: 'item'
    });

    const imgItalian = createEl('img', {
        alt: 'italian hotdog',
        className: 'menu-item-img',
        src: italianHotDog
    });

    const itemDescriptionWrapper1 = createEl('div', {
        className: 'item-description-wrapper'
    });

    const paragraphItem1 = createEl('p', {
        textContent: 'Italian hotdog'
    });

    const spanItem1 = createEl('span', {
        textContent: '5.25$'
    });

    itemDescriptionWrapper1.append(paragraphItem1, spanItem1);

    item1.append(imgItalian, itemDescriptionWrapper1);

    //MENU ITEM 2
    const item2 = createEl('div', {
        className: 'item'
    });

    const imgClassic = createEl('img', {
        alt: 'classic hotdog',
        className: 'menu-item-img',
        src: classicHotDog
    });

    const itemDescriptionWrapper2 = createEl('div', {
        className: 'item-description-wrapper'
    });

    const paragraphItem2 = createEl('p', {
        textContent: 'Classic hotdog'
    });

    const spanItem2 = createEl('span', {
        textContent: '4.89$'
    });

    itemDescriptionWrapper2.append(paragraphItem2, spanItem2);
    item2.append(imgClassic, itemDescriptionWrapper2);

    //MENU ITEM 3
    const item3 = createEl('div', {
        className: 'item'
    });

    const imgGravy = createEl('img', {
        alt: 'gravy hotdog',
        className: 'menu-item-img',
        src: gravyHotDog
    });

    const itemDescriptionWrapper3 = createEl('div', {
        className: 'item-description-wrapper'
    });

    const paragraphItem3 = createEl('p', {
        textContent: 'Gravy hotdog'
    });

    const spanItem3 = createEl('span', {
        textContent: '6.50$'
    });

    itemDescriptionWrapper3.append(paragraphItem3, spanItem3);
    item3.append(imgGravy, itemDescriptionWrapper3);

    //MENU ITEM 4
    const item4 = createEl('div', {
        className: 'item'
    });

    const imgAmerican = createEl('img', {
        alt: 'american hotdog',
        className: 'menu-item-img',
        src: americanHotDog
    });

    const itemDescriptionWrapper4 = createEl('div', {
        className: 'item-description-wrapper'
    });

    const paragraphItem4 = createEl('p', {
        textContent: 'American hotdog'
    });

    const spanItem4 = createEl('span', {
        textContent: '6.99$'
    });

    itemDescriptionWrapper4.append(paragraphItem4, spanItem4);
    item4.append(imgAmerican, itemDescriptionWrapper4);

    //MENU ITEM 5
    const item5 = createEl('div', {
        className: 'item'
    });

    const imgRelish = createEl('img', {
        alt: 'relish hotdog',
        className: 'menu-item-img',
        src: relishHotDog
    });

    const itemDescriptionWrapper5 = createEl('div', {
        className: 'item-description-wrapper'
    });

    const paragraphItem5 = createEl('p', {
        textContent: 'Relish hotdog'
    });

    const spanItem5 = createEl('span', {
        textContent: '5.00$'
    });

    itemDescriptionWrapper5.append(paragraphItem5, spanItem5);
    item5.append(imgRelish, itemDescriptionWrapper5);

    //MENU ITEM 6
    const item6 = createEl('div', {
        className: 'item'
    });

    const imgChicago = createEl('img', {
        alt: 'chicago hotdog',
        className: 'menu-item-img',
        src: chicagoHotDog
    });

    const itemDescriptionWrapper6 = createEl('div', {
        className: 'item-description-wrapper'
    });

    const paragraphItem6 = createEl('p', {
        textContent: 'Chicago hotdog'
    });

    const spanItem6 = createEl('span', {
        textContent: '7.00$'
    });

    itemDescriptionWrapper6.append(paragraphItem6, spanItem6);
    item6.append(imgChicago, itemDescriptionWrapper6);

    menu.append(item1, item2, item3, item4, item5, item6);
    menuWrapper.append(menuHeader2, menu);
    fragment.append(menuWrapper);
    contentDiv.append(fragment);
}

