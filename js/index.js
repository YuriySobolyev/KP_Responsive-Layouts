menu_toggler = document.querySelector('.menu_toggler');
nav = document.querySelector('.nav__block');
menu_toggler.addEventListener('click', () => {
    menu_toggler.classList.toggle('toggle_active')
    nav.classList.toggle('toggle_nav')
})