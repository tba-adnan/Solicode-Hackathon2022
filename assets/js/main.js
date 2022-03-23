// Show menu 
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if(toggleId && navId){
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show__menu');
        })
    }
}

showMenu('nav-toggle', 'nav-menu');

// Remove menu mobile
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const menu = document.getElementById('nav-menu');
    menu.classList.remove('show__menu');
}
navLink.forEach(link => link.addEventListener('click', linkAction));
