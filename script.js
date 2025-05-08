 const mainIcon = document.querySelector(".menu-icon");
 const sideNav = document.querySelector(".side-navbar");
 const crossIcon = document.querySelector(".cross-icon");
 function openSideNav(){
    mainIcon.style.display= "none";
    sideNav.style.display="flex";
 }
 function closeSideNav(){
    sideNav.style.display="none";
    mainIcon.style.display="block";
 }
 