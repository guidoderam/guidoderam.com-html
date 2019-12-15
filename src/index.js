require('normalize.css/normalize.css');
require('./styles/index.scss');

document.addEventListener("DOMContentLoaded", () => {    
    const navBarToggle = document.getElementById("navbar-toggle");

    navBarToggle.addEventListener("click", () => {
        const nav = document.getElementsByClassName("navbar__nav");
        nav[0].classList.toggle("navbar__nav--active");
    });
});
