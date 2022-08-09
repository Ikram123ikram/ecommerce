let showNav = document.querySelector('#bbars');
let hideNav = document.querySelector('#x_btn');
let nav = document.querySelector('#nav-bars');
showNav.addEventListener('click', () => {
    nav.style.display = 'flex';
});
hideNav.addEventListener('click', () => {
    nav.style.display = 'none';
});