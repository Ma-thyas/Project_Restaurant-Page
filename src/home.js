import BckgImg from './img-font/food3.jpg';
import Icon1 from './img-font/instagram.svg';
import Icon2 from './img-font/facebook.svg';
import Icon3 from './img-font/youtube.svg';

const createHomePage = () => {
    
    const main = document.createElement('div');

    const backgroundImg = new Image();
    backgroundImg.src = BckgImg;
    backgroundImg.classList.add('backgroundImg');

    const title2 = document.createElement('h4');
    title2.classList.add('title2');
    title2.textContent = 'Organic, Artisanal, Delicious';

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'NOSSO';

    const credit = document.createElement('p');
    credit.classList.add('credit-home');
    credit.textContent = 'Photo by Brooke Lark on Unsplash';

    main.appendChild(backgroundImg);
    main.appendChild(title);
    main.appendChild(title2);
    main.appendChild(credit);

    return main;
}

const createFooter = () => {

    const footer = document.createElement('footer');
    footer.classList.add('footer');

    //adress and tel
    const where = document.createElement('div');
    where.classList.add('where');

    const adress = document.createElement('p');
    adress.classList.add('info');
    adress.textContent = '1 Newtown, Bradford-on-Avon, \n BA15 1NQ'

    const telephone = document.createElement('p');
    telephone.classList.add('info');
    telephone.textContent = '3852-132-453';

    where.appendChild(adress);
    where.appendChild(telephone);

    //when

    const when = document.createElement('div');
    when.classList.add('when');

    const hours1 = document.createElement('p');
    hours1.classList.add('info');
    hours1.textContent = 'Monday - Tuesday:  closed';

    const hours2 = document.createElement('p');
    hours2.classList.add('info');
    hours2.textContent = 'Wednesday - Sunday:  11am - 11pm';
    
    when.appendChild(hours1);
    when.appendChild(hours2);

    //social

    const follow = document.createElement('div');
    follow.classList.add('follow');

    const facebookIcon = document.createElement('img');
    facebookIcon.src = Icon2;
    facebookIcon.classList.add('icon');

    const instagramIcon = new Image();
    instagramIcon.src = Icon1;
    instagramIcon.classList.add('icon');

    const youtubeIcon = new Image();
    youtubeIcon.src = Icon3;
    youtubeIcon.classList.add('icon');

    follow.appendChild(facebookIcon);
    follow.appendChild(instagramIcon);
    follow.appendChild(youtubeIcon);

    footer.appendChild(where);
    footer.appendChild(when);
    footer.appendChild(follow);
    
    return footer;
}


const loadHomePage = () => {
    const content = document.getElementById('content');
    content.appendChild(createHomePage());
    content.appendChild(createFooter());
}

export default loadHomePage;