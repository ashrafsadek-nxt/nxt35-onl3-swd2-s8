const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
const learnMoreBtn = document.getElementById("learnMoreBtn");
learnMoreBtn.addEventListener("click", () => {
  alert("Thank you for visiting our website!");
});
const contactForm = document.getElementById("contactForm");
const formResponse = document.getElementById("formResponse");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  formResponse.textContent = "Thank you for your message, " + document.getElementById("name").value + "!";
  contactForm.reset();
});