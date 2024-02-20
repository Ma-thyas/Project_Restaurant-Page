import loadNav from './index';

const content = document.getElementById('content');
const menu = document.createElement('div');
menu.classList.add('menu');


const createMenuFrame = () => {
    
    createMainTitle();
    createMenuParts();

    return menu;   
}

const item = (name, description, price, type) => {

    return { name, description, price, type};
};

const starter1 = item('Sweet Potato and Ginger Soup','Served with an almond and tarragon pesto','7 £','starter');
const starter2 = item('Truffled Broccoli','Cauliflower pannacotta, pickled kohlrabi and thyme dressing','7.5 £','starter');
const starter3 = item('Roast Beetroot','Lavender, blueberries and homemade cream cheese curds and hazelnuts','7.5 £','starter');
const starter4 = item('Grilled Squash','Herb emulsion, speckled lentils, pine nut puree and lemon mint granita','7.75 £','starter');
const main1 = item('Stuffed Courgette Flower','Smoked dorset red and ricotta, cannellini beans and chard in a romesco sauce','15.75 £','main');
const main2 = item('White Onion Tatin',`Heritage carrots, runner beans and greens, goat's cheese mousse and a curried emulsion`,'15.75 £','main');
const main3 = item('Fennel and Apricot Tagine','Roast courgette, chickpeas, citrus puree, pistachios and spiced panisse','15.25 £','main');
const main4 = item(`Fresh Ewe's Cheese Parcels`,`Fresh ewe's cheese filo parcels with a fresh strawberry, mint pickled cucumber and shallot salad`,'15.25 £','main');
const dessert1 = item('Lightly Spiced Chocolate Pot','Orange gel and candied Pistachios','4.95 £','dessert');
const dessert2 = item('Orange and Cardamom Pannacotta','Rhubarb compote and ginger granita','4.95 £','dessert');
const dessert3 = item('Roast Peach','Shortbread, homemade mascarpone, fresh raspberries, and a raspberry coulis','4.95 £','dessert');


const createMainTitle = () => {
    const menuTile = document.createElement('h2');
    menuTile.classList.add('ourMenuTitle');
    menuTile.textContent = 'Our Food Menu';

    menu.appendChild(menuTile);
};

const menuParts = ['Starters','Main Course', 'Desserts'];

const createMenuParts = () => {

    const menuContent = document.createElement('div');
    menuContent.classList.add('menuContent');
    menu.appendChild(menuContent);

    for (let i = 0; i < menuParts.length; i++) {
        const course = document.createElement('div');
        course.classList.add('course');
        
        const courseName = document.createElement('h3');
        courseName.classList.add('courseTitle');
        courseName.textContent = menuParts[i];

        const courseContent = document.createElement('div');
        courseContent.classList.add('courseContent');

        if (menuParts[i] == menuParts[0]) {
            courseContent.appendChild((createItem(starter1)));
            courseContent.appendChild((createItem(starter2)));
            courseContent.appendChild((createItem(starter3)));
            courseContent.appendChild((createItem(starter4)));
        } else if (menuParts[i] == menuParts[1]) {
            courseContent.appendChild((createItem(main1)));
            courseContent.appendChild((createItem(main2)));
            courseContent.appendChild((createItem(main3)));
            courseContent.appendChild((createItem(main4)));
        } else if (menuParts[i] == menuParts[2]) {
            courseContent.appendChild((createItem(dessert1)));
            courseContent.appendChild((createItem(dessert2)));
            courseContent.appendChild((createItem(dessert3)));
        }

        course.appendChild(courseName);
        course.appendChild(courseContent);
        menuContent.appendChild(course);
    }
};

const createItem = (item) => {

    const menuItem = document.createElement('div');
    menuItem.classList.add('menuItem');

    const foodName = document.createElement('h3');
    foodName.classList.add('foodName');
    foodName.textContent = item.name;

    const foodDescription = document.createElement('p');
    foodDescription.classList.add('foodDescription');
    foodDescription.textContent = item.description;

    const foodPrice = document.createElement('p');
    foodPrice.classList.add('foodPrice');
    foodPrice.textContent = item.price;

    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);
    menuItem.appendChild(foodPrice);

    return menuItem;
};

const loadMenuPage = () => {
    menu.innerHTML = "";
    content.innerHTML = "";
    loadNav();
    content.appendChild(createMenuFrame());
};

export default loadMenuPage;

