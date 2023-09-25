 document.addEventListener("DOMContentLoaded", function () {
  const seeMoreButton = document.getElementById("see-more-button");
  const fullDescription = document.querySelector(".full-description");
  
  seeMoreButton.addEventListener("click", function () {
    if (fullDescription.style.display === "block") {
      fullDescription.style.display = "none";
      seeMoreButton.textContent = "See More";
    } else {
      fullDescription.style.display = "block";
      seeMoreButton.textContent = "See Less";
    }
  });
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
