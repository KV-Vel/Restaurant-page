import { createEl } from "./about";

export function renderContactUs() {
    const fragment = document.createDocumentFragment();
    const contentDiv = document.querySelector('#content');


    /* Wrapper */
    const formWrapper = createEl('div', {
        className: 'form-wrapper'
    });
    
    const headerGroup = createEl('div', {
        className: 'contact-form-header-group'
    });

    const header1 = createEl('h1', {
        className: 'contact-form-header',
        textContent: 'Contact form'
    });

    const paragraphOfHeader = createEl('p', {
        textContent: 'Your feedback is important to us. Please use the below form to contact us and one of our team members will get in touch with you soon.'
    });

    headerGroup.append(header1, paragraphOfHeader);
    /* Wrapper */

    /* Form */
    const form = createEl('form');

    // 1 group
    const formGroup1 = createEl('div', {
        className: 'form-group'
    });

    const labelGroup1 = createEl('label', {
        for: 'name',
        textContent: 'Name *'
    });

    const inputGroup1 = createEl('input', {
        required: true,
        type: 'text',
        id: 'name'
    });

    formGroup1.append(labelGroup1, inputGroup1);

    //2 group
    const formGroup2 = createEl('div', {
        className: 'form-group'
    });

    const labelGroup2 = createEl('label', {
        for: 'lastName',
        textContent: 'Last Name *'
    });

    const inputGroup2 = createEl('input', {
        required: true,
        type: 'text',
        id: 'lastName'
    });

    formGroup2.append(labelGroup2, inputGroup2);

    //3 group
    const formGroup3 = createEl('div', {
        className: 'form-group'
    });

    const labelGroup3 = createEl('label', {
        for: 'e-mail',
        textContent: 'Email *'
    });

    const inputGroup3 = createEl('input', {
        required: true,
        type: 'email',
        id: 'e-mail'
    });

    formGroup3.append(labelGroup3, inputGroup3);

    //4 group
    const formGroup4 = createEl('div', {
        className: 'form-group'
    });

    const labelGroup4 = createEl('label', {
        for: 'subject',
        textContent: 'Subject *'
    });

    const selectDropDown = createEl('select', {
        name: 'subject',
        required: true,
        id: 'subject'
    });

    const option1 = createEl('option', {
        selected: true,
        textContent: 'Information request'
    });

    const option2 = createEl('option', {
        textContent: 'Customer service'
    });

    const option3 = createEl('option', {
        textContent: 'Human resources'
    });

    selectDropDown.append(option1, option2, option3);

    formGroup4.append(labelGroup4, selectDropDown);

    //5 group
    const formGroup5 = createEl('div', {
        className: 'form-group --full-width'
    });

    const labelGroup5 = createEl('label', {
        for: 'message',
        textContent: 'Message *'
    });

    const textArea = createEl('textarea', {
        id: 'message',
        rows: 5
    });
    
    formGroup5.append(labelGroup5, textArea);

    //6 group
    const formGroup6 = createEl('div', {
        className: 'form-group --full-width'
    });

    const submitBtn = createEl('button', {
        textContent: 'Submit',
        type: 'submit'
    });

    formGroup6.append(submitBtn);

    //footnote
    const footnote = createEl('span', {
        textContent: '* Required fields',
        className: 'footnote'
    });

    //news-checkbox-container

    const newsCheckBoxContainer = createEl('div', {
        className: 'news-checkbox-container --full-width'
    });

    const newsCheckBox = createEl('input', {
        id: 'receive-news-checkbox',
        type: 'checkbox'
    }); 

    const labelCheckBox = createEl('label', {
        for: 'receive-news-checkbox',
        textContent: 'I hereby authorize Lesters to send me information and promotions'
    });

    newsCheckBoxContainer.append(newsCheckBox, labelCheckBox);

    form.append(formGroup1, formGroup2, formGroup3, formGroup4, formGroup5, formGroup6, footnote, newsCheckBoxContainer);
    /* Form */
    
    formWrapper.append(headerGroup, form);
    fragment.append(formWrapper);
    
    contentDiv.append(fragment);
}