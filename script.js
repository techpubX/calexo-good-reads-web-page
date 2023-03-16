const navLinks = document.querySelectorAll(".Nav_Content nav ul li a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // get the id of the section to scroll to
    const id = link.getAttribute("href");
    // scroll to the section with a smooth animation
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  });
});