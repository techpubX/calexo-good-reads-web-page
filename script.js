const navLinks = document.querySelectorAll(".nav_link");

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