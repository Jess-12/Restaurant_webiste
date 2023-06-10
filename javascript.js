let menu = document.querySelector('#menu-bar');
let menu = document.querySelector('.navbar');

menu.onckick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}


