import loadNav from './index';
import RestoImg1 from './img-font/restaurant.jpg';
import RestoImg2 from './img-font/restaurant2.jpg';
import RestoImg3 from './img-font/food1.jpg';

const content = document.getElementById('content');

const createRestaurantPage = () => {
    const presentation = document.createElement('div');
    presentation.classList.add('restaurant-page');
   
    const image1 = document.createElement('figure');
    const img1 = new Image();
    img1.src = RestoImg1;
    img1.classList.add('restoImg');
    const legend1 = document.createElement('figcaption');
    legend1.classList.add('credit-restaurant')
    legend1.textContent = 'Photo by shawnanggg on Unsplash'
    image1.appendChild(img1);
    image1.appendChild(legend1);

    const description1 = document.createElement('p');
    description1.classList.add('description');
    description1.textContent = `Welcome to Nosso, where nature meets gastronomy in the heart of the British countryside.\n
    Founded on the principles of sustainability, health, and community, we strive to provide a culinary experience that nourishes both body and soul. \n
    Our commitment to organic farming practices ensures that every ingredient on your plate is free from harmful chemicals and pesticides.`;
    
    const image2 = document.createElement('figure');
    const img2 = new Image();
    img2.src = RestoImg2;
    img2.classList.add('restoImg');
    const legend2 = document.createElement('figcaption');
    legend2.classList.add('credit-restaurant')
    legend2.textContent = 'Photo by Marika Pamp on Unsplash'
    image2.appendChild(img2);
    image2.appendChild(legend2);
   
    const description2 = document.createElement('p');
    description2.classList.add('description');
    description2.textContent = `Our menu celebrates the rich flavors and textures of seasonal produce, showcasing the best that nature has to offer. \n
    We source our ingredients from local farmers and producers who share our dedication to sustainable agriculture. \n
    By supporting local growers, we not only reduce our carbon footprint but also promote biodiversity and preserve the natural beauty of the countryside.`;

    const image3 = document.createElement('figure');
    const img3 = new Image();
    img3.src = RestoImg3;
    img3.classList.add('restoImg');
    const legend3 = document.createElement('figcaption');
    legend3.classList.add('credit-restaurant')
    legend3.textContent = 'Photo by Stefan Johnson on Unsplash'
    image3.appendChild(img3);
    image3.appendChild(legend3);



    presentation.appendChild(image1);
    presentation.appendChild(description1);
    presentation.appendChild(image3);
    presentation.appendChild(description2);
    presentation.appendChild(image2);


    return presentation;
}


const loadRestaurantPage = () => {
    content.innerHTML = "";
    loadNav();
    content.appendChild(createRestaurantPage());
    
};

export default loadRestaurantPage;