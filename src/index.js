import {mainPage} from '/src/main-page.js';
import {menu} from '/src/menu.js';
import {contact} from '/src/contact.js'
import "./main.css";

let mainLogic = (function(){
    const contentDiv = document.querySelector('#content');
    const tabs = document.createElement('div');
    tabs.id = 'tabs';

    contentDiv.appendChild(tabs);

    const homeBtn = document.createElement('button');
    homeBtn.id = 'hb';
    homeBtn.innerText = 'Home';
    tabs.appendChild(homeBtn);

    const menuBtn = document.createElement('button');
    menuBtn.id = 'mb';
    menuBtn.innerText = 'Menu';
    tabs.appendChild(menuBtn);

    const contactBtn = document.createElement('button');
    contactBtn.id = 'cb';
    contactBtn.innerText = 'Contact';
    tabs.appendChild(contactBtn);

    const infoDiv = document.createElement('div');
    infoDiv.id = 'info';
    contentDiv.appendChild(infoDiv);

    homeBtn.addEventListener('click', () => {
        if (menuBtn.disabled == true) {
            const menuDiv = document.querySelector('#menuInfo');
            menuDiv.remove();
        }
        if (contactBtn.disabled == true) {
            const contactDiv = document.querySelector('#contactInfo');
            contactDiv.remove();
        }
        mainPage();
        homeBtn.disabled = true;
        menuBtn.disabled = false;
        contactBtn.disabled = false;
    });

    menuBtn.addEventListener('click', () => {
        if (homeBtn.disabled == true) {
            const homeDiv = document.querySelector('#homeInfo');
            homeDiv.remove();
        }
        if (contactBtn.disabled == true) {
            const contactDiv = document.querySelector('#contactInfo');
            contactDiv.remove();
        }
        menu();
        menuBtn.disabled = true;
        homeBtn.disabled = false;
        contactBtn.disabled = false;
    });

    contactBtn.addEventListener('click', () => {
        if (homeBtn.disabled == true) {
            const homeDiv = document.querySelector('#homeInfo');
            homeDiv.remove();
        }
        if (menuBtn.disabled == true) {
            const menuDiv = document.querySelector('#menuInfo');
            menuDiv.remove();
        }
        contact();
        homeBtn.disabled = false;
        menuBtn.disabled = false;
        contactBtn.disabled = true;
    });

    if (homeBtn.disabled == false && menuBtn.disabled == false
        && contactBtn.disabled == false) {
            homeBtn.click();
        }
})()