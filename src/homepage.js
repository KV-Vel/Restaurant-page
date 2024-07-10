import { createEl } from "./about";

export function renderHomePage() {
    const fragment = document.createDocumentFragment();
    const contentDiv = document.querySelector('#content');

    // PARALLAX IMAGE
    const parallaxContainer = createEl('div', {
        className: 'parallax-wrapper'
    });

    // WELCOMING CONTAINER
    const welcomingSection = createEl('section', {
        className:'welcoming'
    });

    const welcomingWrapper = createEl('div');

    const welcomingHeader1 = createEl('h1', {
        textContent: 'Welcome to HOTDOGS!'
    });

    const welcomingParagraph = createEl('p', {
        textContent: "We are the meat that you can't beat, but love to eat. Quick healthy food prepared from organic and fresh ingredients by our in-house chef, ready for takeout and delivery."
    });

    const welcomingButtonContainer = createEl('div', {
        className: 'buttons-container'
    });

    const welcomingButton = createEl('button', {
        textContent: 'Menu',
        type: 'button'
    });

    welcomingButtonContainer.append(welcomingButton);
    welcomingWrapper.append(welcomingHeader1, welcomingParagraph, welcomingButtonContainer);
    welcomingSection.append(welcomingWrapper);

    //BENEFITS

    
    const benefitsSection = createEl('section', {
        className: 'benefits'
    });

    //section 1
    const benefitsContainer1 = createEl('div', {
        className: 'benefit'
    });

    const benefitHeader2 = createEl('h2', {
        textContent: 'Delivery Time'
    });

    const benefitParagraph = createEl('p', {
        textContent: "We'll deliver in 30 minutes or less, or it's free!*"
    });

    const benefitParagraphNote = createEl('p', {
        textContent: "*30 minutes delivery guarantee not applicable on New years eve,on Ganesh festival , Christmas and Durga Pooja."
    });

    benefitsContainer1.append(benefitHeader2, benefitParagraph, benefitParagraphNote);

    //section 2
    const benefitsContainer2 = createEl('div',{
        className: 'benefit'
    });

    const benefitsContainer2Header2 = createEl('h2', {
        textContent: 'Unforgetable flavour'
    });

    const benefitsContainer2Paragraph = createEl('p', {
        textContent: "We're known for our famous Chicago-style hot dogs. Our Italian beef is slow-roasted for four hours, thinly sliced, and served on freshly baked French bread. Then, it's dipped in hot gravy made with our homemade blend of seasonings that we've been perfecting for 50 years."
    });
    benefitsContainer2.append(benefitsContainer2Header2, benefitsContainer2Paragraph);

    //section 3
    const benefitsContainer3 = createEl('div',{
            className: 'benefit'
        });

    const benefitsContainer3Header2 = createEl('h2', {
         textContent: 'Reward Programm'
    });

    const benefitsContainer3Paragraph = createEl('p', {
        textContent: "With Guest Rewards, you can earn one point for every dollar spent and can redeem those points for future discounts."
    });

    const orderedList = createEl('ol');

    const li1 = createEl('li', {
        textContent: 'Earn points'
    });

    const li2 = createEl('li', {
        textContent: 'Redeem reward (25 points = $1 discount)'
    });

    orderedList.append(li1, li2);
    benefitsContainer3.append(benefitsContainer3Header2, benefitsContainer3Paragraph, orderedList);

    benefitsSection.append(benefitsContainer1, benefitsContainer2, benefitsContainer3);
    
    //SUBSCRIPTION
    const subscriptionSection = createEl('section');

    const subscriptionWrapper = createEl('div', {
        className: 'subscription-message-container'
    });

    const subscriptionBorders = createEl('div', {
        className: 'borders-container'
    });

    const subscriptionParagraph = createEl('p', {
        textContent: 'Subscribe to HOTDOGS Newsletter and get the latest news and offers in your inbox.'
    });

    const subscriptionButton = createEl('button', {
        textContent: 'SUBSCRIBE NOW',
        type: 'button'
    });

    subscriptionBorders.append(subscriptionParagraph, subscriptionButton);
    subscriptionWrapper.append(subscriptionBorders);
    subscriptionSection.append(subscriptionWrapper);

    fragment.append(parallaxContainer, welcomingSection, benefitsSection, subscriptionSection);

    contentDiv.append(fragment);
}