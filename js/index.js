//Navigation
const menu = document.querySelector('.menu');
const menuActive = document.querySelector('.menu--active');
const menuLines = document.querySelectorAll('.menu--line');
const menuLine1 = document.querySelector('.menu--line--1');
const menuLine2 = document.querySelector('.menu--line--2');
const nav = document.querySelector('.nav');
const listItems = document.querySelectorAll('.nav li');
const logo = document.querySelector('.logo');
const letters = document.querySelectorAll('.letters');

menu.addEventListener('click', () => {
    nav.classList.add('nav--open');

        logo.classList.replace('logo--black', 'logo--white');
        for(i = 0; i < menuLines.length; i++) {
            menuLines[i].style.backgroundColor = '#fff';
        }

        menu.style.display = 'none';
        menuActive.style.display = 'block';

        for(let i = 0; i < listItems.length; i++) {
            setTimeout(() => {
                listItems[i].style.opacity = '1';
                listItems[i].style.transform = 'translateY(0%)';
            }, i * 150);
        }
});

menuActive.addEventListener('click', () => {
    nav.classList.remove('nav--open');
    nav.classList.remove('nav--open');

    menu.style.display = 'block';
    menuActive.style.display = 'none';

    logo.classList.replace('logo--white', 'logo--black');
        for(i = 0; i < menuLines.length; i++) {
            menuLines[i].style.backgroundColor = '#000';
        }

        for(let i = 0; i < listItems.length; i++) {
            setTimeout(() => {
                listItems[i].style.opacity = '0';
                listItems[i].style.transform = 'translateY(-100%)';
            }, i * 150);
        }
});

//Home Animations 
const imgSlider = document.querySelector('.hero .grid__item--2');

const textSection = document.querySelector('.text__section');
const selectedProjects = document.querySelector('.selected-projects');
const selectedProjectsHeading = document.querySelector('.selected-projects h2');
const selectedProjectsItems = document.querySelectorAll('.selected-projects .container__item');
let i;

window.addEventListener('scroll', () => {
    let wScroll = window.pageYOffset;

    if(wScroll > 30) {
        imgSlider.style.opacity = '1';
        imgSlider.style.transform = 'translateY(0%)';
    }

    if(wScroll > 30) {
        logo.style.opacity = '0';
        logo.style.visibility = 'hidden';
    } else {
        logo.style.opacity = '1';
        logo.style.visibility = 'visible';
    }

    if(wScroll > (textSection.offsetTop / 1.75)) {
        textSection.style.opacity = '1';
        textSection.style.transform = 'translateY(0%)';
    }

    if(wScroll > (selectedProjects.offsetTop / 1.25)) {
        selectedProjectsHeading.style.opacity = '1';
        selectedProjectsHeading.style.transform = 'translateY(0%)';
        
        for(let i = 0; i < selectedProjectsItems.length; i++) {
            setTimeout(() => {
                selectedProjectsItems[i].style.opacity = '1';
            }, i * 500);
        }
    }
});