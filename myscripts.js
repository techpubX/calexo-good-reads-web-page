 // JavaScript for responsive navigation

 const navToggle = document.getElementById("nav-toggle");
 const navList = document.querySelector(".nav__list");

 navToggle.addEventListener("click", () => {
     navList.classList.toggle("show");
 });


