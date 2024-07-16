import firstVanImg from '../images/first-hotdog-van.jpg';
import chefsPhoto from '../images/making-hot-dog.jpg';

export function createEl(tag, options) {
    const el = document.createElement(tag);

    for (let key in options) {
        el[key] = options[key];
    }

    return el
}

export function createFooter() {
    const body = document.querySelector('body');

    // footer
    const footer = createEl('footer');

    // footer-contacts
    const footerContactsContainer = createEl('div', {
        className: 'contacts-container'
    });

    const contactsHeader3 = createEl('h3', {
        textContent: 'Contact Us'
    });

    const contactsEmail = createEl('p', {
        textContent: 'help@hotdogs.co'
    });

    const contactsPhone = createEl('p', {
        textContent: '(218) 284-0077'
    });

    footerContactsContainer.append(contactsHeader3, contactsEmail, contactsPhone);

    // footer-working hours
    const footerWorkingHours = createEl('div', {
        className: 'working-hours-container'
    });

    const workingHoursHeader3 = createEl('h3', {
        textContent: 'Working hours'
    });

    const weekDayHours = createEl('p', {
        textContent: 'Tuesday-Saturday, 6-10pm'
    });

    const weekendHours = createEl('p', {
        textContent: 'Friday & Saturday, 7pm-11pm'
    });

    footerWorkingHours.append(workingHoursHeader3, weekDayHours, weekendHours);

    //footer address
    const footerAddressContainer = createEl('div', {
        className: 'address-container'
    });

    const addressHeader3 = createEl('h3', {
        textContent: 'Address'
    });

    const addressParagraph = createEl('p', {
        textContent: 'Suite 160 264 Cormier Pines, Port Aurorestad, ND 17803-7173'
    });

    footerAddressContainer.append(addressHeader3, addressParagraph);

    // footer author signature
    const footerAuthorInfoContainer = createEl('div', {
        className: 'author-info-container'
    });

    const authorSignature = createEl('a', {
        textContent: 'Made by KV-Vel',
        href: 'https://github.com/KV-Vel'
    });

    footerAuthorInfoContainer.append(authorSignature);

    footer.append(footerContactsContainer, footerWorkingHours, footerAddressContainer, footerAuthorInfoContainer);

    body.append(footer);
}

export function renderAboutSection() {
    const fragment = document.createDocumentFragment();
    const contentDiv = document.querySelector('#content');
    // Story container
    const storyContainer = createEl('div', {
        className: 'our-story-container'
    });

    const storyImgContainer = createEl('div', {
        className: 'img-container'
    });

    const imagefirstHotDogVan = createEl('img', {
        alt: 'first-hotdog-van',
        className: 'first-hotdog-van',
        src: firstVanImg
    });

    const storyArticle = createEl('article', {
        className: 'our-story-article'
    });

    const storyHeader2 = createEl('h2', {
        className: 'our-story-header',
        textContent: 'Our story'
    });

    const storyParagraph = createEl('p', {
        className: 'our-story-paragraph',
        textContent: 'No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.'
    });
    storyArticle.append(storyHeader2, storyParagraph);

    storyContainer.append(storyImgContainer, storyArticle);
    storyImgContainer.append(imagefirstHotDogVan);

    //Team container
    const teamContainer = createEl('div', {
        className: 'our-team-container'
    });

    const teamArticle = createEl('article', {
        className: 'our-team-article'
    });

    const teamHeader2 = createEl('h2', {
        className: 'our-team-header',
        textContent: 'Our team'
    });

    const teamParagraph = createEl('p', {
        className: 'our-team-paragraph',
        textContent: 'Our restaurant has a team of 30 people. Many have been with us since the opening of the restaurant. For over 18 years, shoulder to shoulder, we have been inspired, creating and sharing with you what we sincerely love.'
    });

    const teamImgContainer = createEl('div', {
        className: 'img-container'
    });

    const ourChefsPhoto = createEl('img', {
        className: 'hot-dog-making',
        alt: 'our-chefs-picture',
        src: chefsPhoto
    });

    teamImgContainer.append(ourChefsPhoto);

    teamArticle.append(teamHeader2, teamParagraph);
    teamContainer.append(teamArticle, teamImgContainer);

    // Call to Menu banner
    const callToMenu = createEl('div', {
        className: 'call-to-menu'
    });

    const imgHolder = createEl('section', {
        className: 'img-holder'
    });

    const makeOrderBtn = createEl('button', {
        className: 'call-to-menu-btn',
        textContent: 'MAKE ORDER',
        type: 'button'
    });

    imgHolder.append(makeOrderBtn);

    callToMenu.append(imgHolder)

    // Appending all elements
    fragment.append(storyContainer, teamContainer, callToMenu);

    contentDiv.append(fragment);
};