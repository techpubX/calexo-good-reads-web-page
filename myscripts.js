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