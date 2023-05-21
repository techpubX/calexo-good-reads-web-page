var typed = new typed(".multiple-text", {
  strings: ["Discover", " Your Next", "Favourite Book"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 100,
  loop: true,
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