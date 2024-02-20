import _ from 'lodash';
import './style.css';
import loadHomePage from './home';
import loadMenuPage from './menu';
import loadRestaurantPage from './restaurant';
import  loadContactPage from './contact';

//navbar

const createNavBar = () => {
  const navbar = document.createElement('header');
  navbar.classList.add('navbar');

  const homeBtn = document.createElement('button');
  homeBtn.classList.add('btn-nav');
  homeBtn.textContent = 'Home';
  homeBtn.addEventListener('click', loadPage );

  const menuBtn = document.createElement('button');
  menuBtn.classList.add('btn-nav');
  menuBtn.textContent = 'Menu';
  menuBtn.addEventListener('click', loadMenuPage);

  const restoBtn = document.createElement('button');
  restoBtn.classList.add('btn-nav');
  restoBtn.textContent = 'The Restaurant';
  restoBtn.addEventListener('click', loadRestaurantPage);

  const contactBtn = document.createElement('button');
  contactBtn.classList.add('btn-nav');
  contactBtn.textContent = 'Contact';
  contactBtn.addEventListener('click', loadContactPage);
  

  navbar.appendChild(homeBtn);
  navbar.appendChild(menuBtn);
  navbar.appendChild(restoBtn);
  navbar.appendChild(contactBtn);
  
  return navbar;
};

const content = document.getElementById('content');

const loadNav = () => {
  content.appendChild(createNavBar());
};


const loadPage = () => {
  content.textContent = '';
  loadNav();
  loadHomePage();
};

loadPage();

export default loadNav;


