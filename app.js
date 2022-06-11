let navbar = document.querySelector(".navbar-items ul");
let bugerMenu = document.querySelector(".burger-menu-container");
let burgerItem1 = document.getElementsByClassName("burger-menu")[0];
let burgerItem2 = document.getElementsByClassName("burger-menu")[1];
let burgerItem3 = document.getElementsByClassName("burger-menu")[2];

function toggleNavbar() {
    navbar.classList.toggle("navbar-responsive");
    bugerMenu.style.top = 30+ "px";
    burgerItem1.toggleAttribute("x1");
    burgerItem2.toggleAttribute("x2");
    burgerItem3.toggleAttribute("x3");
}

function closeNavbar() {
    if (screen.width < 769) {
        navbar.classList.toggle("navbar-responsive");
        burgerItem1.removeAttribute("x1");
        burgerItem2.removeAttribute("x2");
        burgerItem3.removeAttribute("x3");
    }
}
