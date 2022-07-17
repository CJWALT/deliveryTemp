//showmenu
const showMenu = (toggleId, navId) => { 
    const toggle = document.getElementById(toggleId), 
    nav = document.getElementById(navId)

    //validatethatvariablesexist
    if(toggle && nav){ 
        toggle.addEventListener('click', ()=> {
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav_toggle', 'nav-menu')

//removemenu
const navLink = document.querySelectorAll('.nav__link')
    function linkAction(){
        const navMenu = document.getElementById('nav-menu')
        //when we click on each nav_link, we remove the show menu class
        navMenu.classList.remove('show-menu') 
    }
    navLink.forEach(n => n.addEventListener('click', linkAction))

//scrollSection 
const sections = document.querySelectorAll('section[id]')

function scrollActive(){ 
    const scrollY = window.pageYOffset
    
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50, 
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + 
            sectionHeight) {
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
             } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
         }

    })
}
    window.addEventListener('scroll', scrollActive)

    //change background header
function scrollHeader(){ 
    const header = document.getElementById('header'); 
    if (this.scrollY >= 80) header.classList.add('scroll-header'); 
    else header.classList.remove('scroll-header') 
}
window.addEventListener('scroll', scrollHeader);

//showscrolltop 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
     else scrollUp.classList.remove('show-scroll')
    
}
window.addEventListener('scroll', scrollUp);

//darkLightTheme

const themeButton = document.getElementById('theme-button'); 
const darkTheme = 'dark-theme'; 
const iconTheme = 'bx-toggle-right';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon'); 

const getCurrentTheme = ()=>document.body.classList.contains(darkTheme) ? 'dark' : 'light'; 
const getCurrentIcon = ()=> themeButton.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right';

if (selectedTheme) {
    document.body.classList[selectedTheme == 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon == 'bx-toggle-left' ? 'add' : 'remove'](iconTheme);
}
themeButton.addEventListener('click', () => { 
    document.body.classList.toggle(darkTheme); 
    themeButton.classList.toggle(iconTheme);
    //we save the tjeme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme()); 
    localStorage.setItem('selected-icon', getCurrentIcon())
}) 