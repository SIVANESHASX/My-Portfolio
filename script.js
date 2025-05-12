const menuIcon = document.querySelector(".menu-icon");
const sideNav = document.querySelector(".side-nav");

function showSideNav() {
    sideNav.style.display = "flex";
    menuIcon.style.display = "none";
}

function hideSideNav(){
    sideNav.style.display = "none";
    menuIcon.style.display = "block";
}