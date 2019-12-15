require('normalize.css/normalize.css');
require('./styles/index.scss');

document.addEventListener("DOMContentLoaded", () => {    
    const navBarToggle = document.getElementById("navbar-toggle");
    const nav = document.getElementsByClassName("navbar__nav")[0];
    navBarToggle.addEventListener("click", () => {
        
        nav.classList.toggle("navbar__nav--active");
    });

    const navbarLinks = document.querySelectorAll(".navbar__link");
    navbarLinks.forEach(element => {
        element.addEventListener("click", () => {
            nav.classList.remove("navbar__nav--active");
        });
    });
});