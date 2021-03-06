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

window.addEventListener('scroll', () => {
    wScroll = window.pageYOffset;

    if(wScroll > 30) {
        logo.style.opacity = '0';
        logo.style.visibility = 'hidden';
    } else {
        logo.style.opacity = '1';
        logo.style.visibility = 'visible';
    }
});


function openNavigation() {
    menu.addEventListener('click', () => {
        nav.classList.add('nav--open');
    
            menu.style.display = 'none';
            menuActive.style.display = 'block';
    
            for(let i = 0; i < listItems.length; i++) {
                setTimeout(() => {
                    listItems[i].style.opacity = '1';
                    listItems[i].style.transform = 'translateY(0%)';
                }, i * 150);
            }
    });
}

function changeLogo() {
    menu.addEventListener('click', () => {
        logo.classList.replace('logo--black', 'logo--white');
        for(i = 0; i < menuLines.length; i++) {
            menuLines[i].style.backgroundColor = '#fff';
        }
    });
}

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
if(document.body.id === 'home') {

openNavigation();
changeLogo();

const imgSlider = document.querySelector('.hero .grid__item--2');
const textSection = document.querySelector('.text__section');
const selectedProjects = document.querySelector('.selected-projects');
const selectedProjectsHeading = document.querySelector('.selected-projects--heading');
const selectedProjectsItems = document.querySelectorAll('.container .container__item');
let i;

window.addEventListener('scroll', () => {
    let wScroll = window.pageYOffset;

    if(wScroll > 30) {
        imgSlider.style.opacity = '1';
        imgSlider.style.transform = 'translateY(0%)';
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

//Auto Slider Img
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.slide');

    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slideIndex++;

    if(slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 5000);
}

//Drag slider
const slider = document.querySelector('.selected-projects');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('handle');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('handle');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.add('handle');
});

slider.addEventListener('mousemove', (e) => {
    if(!isDown) return; // stop fn from running;
    e.preventDefault();
    let x = e.pageX- slider.offsetLeft;
    let walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
});
} // end home page

//Projects Animations

if(document.body.id === 'projects') {

    openNavigation();
    changeLogo();

    let projectsHighlights = document.querySelector('.projects__highlights');
    let project = document.querySelectorAll('.project');
    console.log(project);

    window.addEventListener('scroll', () => {
        let wScroll = window.pageYOffset;

        if(wScroll > (projectsHighlights.offsetTop / 3.5)) {
            for(let i = 0; i < project.length; i++) {
                setTimeout(() => {
                    project[i].classList.add('project--visible');
                }, i * 500);
            }
        }
    });
}

//Proces animations and functions

if(document.body.id === 'process') {

    openNavigation();
    changeLogo();

    window.addEventListener('scroll', () => {
        let wScroll = window.pageYOffset;
        let fromTop = window.scrollY;

        const aside = document.querySelector('aside');
        const asideLinks = document.querySelectorAll('aside ul li a')
        const processItems = document.querySelector('.process__items');
        const meet = document.querySelector('#meet');
        const siteDiscovery = document.querySelector('#sitediscovery');
        const budgetAnalysis = document.querySelector('#budgetanalysis');
        const constructionDocumentacion = document.querySelector('#constructiondocumentacion');
        const structuralEnginering = document.querySelector('#structuralenginering');
        const energyEfficient = document.querySelector('#energyefficient');
        const AMComponents = document.querySelector('#AMComponents');
        const theBuild = document.querySelector('#thebuild');

        if(wScroll = (processItems.offsetTop / 1)) {
            aside.classList.add('sticky');
        }

        asideLinks.forEach(link => {
            let section = document.querySelector(link.hash);

            if(section.offsetTop <= (fromTop / 0.98) && section.offsetTop + section.offsetHeight > (fromTop / 0.98)) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });


    });
}

if(document.body.id === 'about') {
    openNavigation();
    changeLogo();
}

if(document.body.id === 'contact') {
    openNavigation();
    logo.style.color = '#fff';

    menuActive.addEventListener('click', () => {
        nav.classList.remove('nav--open');
        nav.classList.remove('nav--open');
    
        menu.style.display = 'block';
        menuActive.style.display = 'none';
    
        logo.classList.replace('logo--white', 'logo--black');
            for(i = 0; i < menuLines.length; i++) {
                menuLines[i].style.backgroundColor = '#fff';
            }
    
            for(let i = 0; i < listItems.length; i++) {
                setTimeout(() => {
                    listItems[i].style.opacity = '0';
                    listItems[i].style.transform = 'translateY(-100%)';
                }, i * 150);
            }
    });
}