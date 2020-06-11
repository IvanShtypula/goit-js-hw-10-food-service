import menu from '../menu.json';
import menuItem from '../templates/template.hbs'

const menuList = document.querySelector('.js-menu');

const allItems = menu.map(item => menuItem(item)).join('');

menuList.insertAdjacentHTML('beforeend', allItems);