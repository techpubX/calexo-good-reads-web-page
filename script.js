 // JavaScript for responsive navigation
 
 const navToggle = document.getElementById("nav-toggle");
 const navList = document.querySelector(".nav__list");

 navToggle.addEventListener("click", () => {
     navList.classList.toggle("show");
 });


document.onload = () => {
const navLinks = document.querySelectorAll(".nav_link");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); 

    const id = link.getAttribute("href");
    console.log(id);

    const targetElement = document.querySelector(id);
    console.log(targetElement);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
}