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
