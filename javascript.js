// const navToggle = document.querySelector(".nav-toggle");
// const topnav = document.getElementById("topnav");

// navToggle.addEventListener("click", () => {
//     topnav.classList.toggle("active");
// });

/* addEventListener("click", ...) - executes the code in function 
when the button to open the navigation bar is clicked
() => {...} defines the code to be executed when button is clicked
 topnav.classList.toggle("active") - toggles the active class allowing it 
 to beome visible - enables active class in css*/

 function openNav() {
    document.getElementById('closeSideBar').style.width = '250px'
    document.getElementById('openSideBar').stylemarginLeft = '250px'
 }

 function closeNav() {
    document.getElementById('closeSideBar').style.width = '0'
    document.getElementById('openSideBar').stylemarginLeft = '0'
 }