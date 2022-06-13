/*-----Definitions-----*/
let navbar = document.querySelector(".navbar");
let navbarItems = document.querySelector(".navbar-items ul");
let bugerMenu = document.querySelector(".burger-menu-container");
let burgerItem1 = document.getElementsByClassName("burger-menu")[0];
let burgerItem2 = document.getElementsByClassName("burger-menu")[1];
let burgerItem3 = document.getElementsByClassName("burger-menu")[2];
let theme = document.getElementsByClassName("theme")[0];
let themeController = document.getElementById("checkbox");
let root = document.querySelector(":root");
/*-----Definitions-----*/
/*-----Navbar-----*/
function toggleNavbar() {
    navbarItems.classList.toggle("navbar-responsive");
    burgerItem1.toggleAttribute("x1");
    burgerItem2.toggleAttribute("x2");
    burgerItem3.toggleAttribute("x3");
}

function closeNavbar() {
    if (screen.width < 769) {
        navbarItems.classList.toggle("navbar-responsive");
        burgerItem1.removeAttribute("x1");
        burgerItem2.removeAttribute("x2");
        burgerItem3.removeAttribute("x3");
    }
}
/*-----Navbar-----*/
/*-----Theme-----*/
themeController.addEventListener("change", () => {
    root.style.setProperty("--background", themeController.checked ? "#efefef" : "#303434");
    root.style.setProperty("--dark-gray", themeController.checked ? "white" : "#202324");
    root.style.setProperty("--light-gray", themeController.checked ? "#e9ecef" : "#36383e");
    root.style.setProperty("--text", themeController.checked ? "#000" : "#FFFFFF");
    root.style.setProperty("--shadow", themeController.checked ? "rgba(255, 255, 255, 1)" : "rgba(0, 0, 0, 1)");

    localStorage.setItem("theme", themeController.checked ? "light" : "dark");
});

if (localStorage.getItem("theme") === "light") {
    root.style.setProperty("--background", "#efefef");
    root.style.setProperty("--dark-gray", "white");
    root.style.setProperty("--light-gray", "#e9ecef");
    root.style.setProperty("--text", "#000");
    root.style.setProperty("--shadow", "rgba(255, 255, 255, 1)");
    
    themeController.checked = true;
}

window.addEventListener("resize", () => {
    if (screen.width < 769) {
        theme.classList.add("theme-responsive");
    }
    
    if (screen.width >= 769) {
        theme.classList.remove("theme-responsive");
    }
});

if (screen.width < 769) {
    theme.classList.add("theme-responsive");
}

if (screen.width >= 769) {
    theme.classList.remove("theme-responsive");
}
/*-----Theme-----*/
