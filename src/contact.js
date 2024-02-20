import loadNav from './index';
import map from './img-font/map.png';


const content = document.getElementById('content');

const createContactPage = () => {
    const reservationPage = document.createElement('div');
    reservationPage.classList.add('reservation-page');

    const mapDiv = document.createElement('div');
    mapDiv.classList.add('map-div');

    const mapImg = new Image();
    mapImg.src = map;
    mapImg.classList.add('map-img');

    // const adress = document.createElement('p');
    // adress.classList.add('adress');
    // adress.textContent = '1 Newtown, Bradford-on-Avon, BA15 1NQ';

//info div
    const infoDiv = document.createElement('div');
    infoDiv.classList.add('info-div');
//hours
    const timeInfo = document.createElement('div');
    timeInfo.classList.add('contact-info');

    const timeTitle = document.createElement('h4');
    timeTitle.classList.add('info-title');
    timeTitle.textContent = ('Opening Hours');

    const openingHours = document.createElement('div');
    openingHours.classList.add('time');

    const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    const hours = ['Closed','Closed','11am - 11pm','11am - 11pm','11am - 11pm','11am - 11pm','11am - 11pm'];

    for (let i = 0; i<days.length; i++) {
        const day = document.createElement('p');
        day.classList.add('day');
        day.textContent = days[i];

        const hour = document.createElement('p');
        hour.classList.add('hour');
        hour.textContent = hours[i];

        openingHours.appendChild(day);
        openingHours.appendChild(hour);
    };

    timeInfo.appendChild(timeTitle);
    timeInfo.appendChild(openingHours);

//contact
    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');

    const contactTitle = document.createElement('h4');
    contactTitle.classList.add('info-title');
    contactTitle.textContent = 'Contact';

    const contactAdress = document.createElement('p');
    contactAdress.classList.add('contact-text');
    contactAdress.textContent = '1 Newtown, Bradford-on-Avon, \n BA15 1NQ';

    const contactTelephone =  document.createElement('p');
    contactTelephone.classList.add('contact-text');
    contactTelephone.textContent = '3852-132-453';

    const contactEmail =  document.createElement('p');
    contactEmail.classList.add('contact-text');
    contactEmail.textContent = 'info@nosso.co.uk';

    contactInfo.appendChild(contactTitle);
    contactInfo.appendChild(contactAdress);
    contactInfo.appendChild(contactTelephone);
    contactInfo.appendChild(contactEmail);

    //contact form
    const reservationInfo = document.createElement('div');
    reservationInfo.classList.add('contact-info');

    const reservationTitle = document.createElement('h4');
    reservationTitle.classList.add('info-title');
    reservationTitle.textContent = 'Reservation/Contact Form';

    //form
    const contactForm = document.createElement('form');
    contactForm.classList.add('contact-form');
    
    const formName = document.createElement('div');
    formName.classList.add('form-div');
    const formNameLabel = document.createElement('label');
    formNameLabel.classList.add('contact-label');
    formNameLabel.setAttribute('for','contact-name');
    formNameLabel.textContent = 'Full Name';
    const formNameInput = document.createElement('input');
    formNameInput.classList.add('contact-input');
    formNameInput.setAttribute('type','text');
    formNameInput.setAttribute('id','contact-name');

    formName.appendChild(formNameLabel);
    formName.appendChild(formNameInput);

    const formEmail = document.createElement('div');
    formEmail.classList.add('form-div');
    const formEmailLabel = document.createElement('label');
    formEmailLabel.classList.add('contact-label');
    formEmailLabel.setAttribute('for','contact-email');
    formEmailLabel.textContent = 'E-mail';
    const formEmailInput = document.createElement('input');
    formEmailInput.classList.add('contact-input');
    formEmailInput.setAttribute('type','email');
    formEmailInput.setAttribute('id','contact-email');

    formEmail.appendChild(formEmailLabel);
    formEmail.appendChild(formEmailInput);

    const formPhone = document.createElement('div');
    formPhone.classList.add('form-div');
    const formPhoneLabel = document.createElement('label');
    formPhoneLabel.classList.add('contact-label');
    formPhoneLabel.setAttribute('for','contact-phone');
    formPhoneLabel.textContent = 'Phone Number';
    const formPhoneInput = document.createElement('input');
    formPhoneInput.classList.add('contact-input');
    formPhoneInput.setAttribute('type','number');
    formPhoneInput.setAttribute('id','contact-phone');

    formPhone.appendChild(formPhoneLabel);
    formPhone.appendChild(formPhoneInput);

    const formSubject = document.createElement('div');
    formSubject.classList.add('form-div');
    const formSubjectLabel = document.createElement('label');
    formSubjectLabel.classList.add('contact-label');
    formSubjectLabel.setAttribute('for','contact-subject');
    formSubjectLabel.textContent = 'What is it about ?';
    const formSubjectInput = document.createElement('select');
    formSubjectInput.classList.add('contact-input');
    formSubjectInput.setAttribute('name','raison');
    formSubjectInput.setAttribute('id','contact-subject');
    const option0 = document.createElement('option');
    option0.setAttribute('value','#');
    option0.setAttribute('disabled', true);
    option0.setAttribute('selected', true);
    option0.setAttribute('hidden', true);
    option0.textContent = 'Select an option';
    const option1 = document.createElement('option');
    option1.setAttribute('value','reservation');
    option1.textContent = 'Reservation';
    const option2 = document.createElement('option');
    option2.setAttribute('value','suggestions');
    option2.textContent = 'Suggestions';
    const option3 = document.createElement('option');
    option3.setAttribute('value','questions');
    option3.textContent = 'Questions';
    const option4 = document.createElement('option');
    option4.setAttribute('value','complaint');
    option4.textContent = 'Complaint';
    const option5 = document.createElement('option');
    option5.setAttribute('value','other');
    option5.textContent = 'Other';
    
    formSubjectInput.appendChild(option0);
    formSubjectInput.appendChild(option1);
    formSubjectInput.appendChild(option2);
    formSubjectInput.appendChild(option3);
    formSubjectInput.appendChild(option4);
    formSubjectInput.appendChild(option5);

    formSubject.appendChild(formSubjectLabel);
    formSubject.appendChild(formSubjectInput);

    const formMessage = document.createElement('div');
    formMessage.classList.add('form-div');
    const formMessageLabel = document.createElement('label');
    formMessageLabel.classList.add('contact-label');
    formMessageLabel.setAttribute('for','contact-message');
    formMessageLabel.textContent = 'Your Message:';
    const formMessageInput = document.createElement('textarea');
    formMessageInput.classList.add('contact-input');
    formMessageInput.setAttribute('id','contact-message');

    formMessage.appendChild(formMessageLabel);
    formMessage.appendChild(formMessageInput);

    const contactButton= document.createElement('div');
    contactButton.classList.add('form-div');

    const contactButtonInput = document.createElement('button');
    contactButtonInput.classList.add('contact-button');
    contactButtonInput.setAttribute('type','submit');
    contactButtonInput.textContent = "Send";   

    // contactButton.appendChild(contactButtonLabel);
    contactButton.appendChild(contactButtonInput);


    contactForm.appendChild(formName);
    contactForm.appendChild(formEmail);
    contactForm.appendChild(formPhone);
    contactForm.appendChild(formSubject);
    contactForm.appendChild(formMessage);
    contactForm.appendChild(contactButton);



    mapDiv.appendChild(mapImg);
    

    reservationInfo.appendChild(reservationTitle);
    reservationInfo.appendChild(contactForm);

    infoDiv.appendChild(reservationInfo);
    infoDiv.appendChild(timeInfo);
    infoDiv.appendChild(contactInfo);

    reservationPage.appendChild(mapDiv);
    reservationPage.appendChild(infoDiv);

    return reservationPage;
};


const loadContactPage = () => {
    content.innerHTML = "";
    loadNav();
    content.appendChild(createContactPage());
    
};

export default loadContactPage;