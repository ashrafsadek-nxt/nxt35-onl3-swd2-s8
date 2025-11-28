const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const form = document.getElementById("contact-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message Sent Successfully!");
  form.reset();
});

window.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".fade-in");
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < window.innerHeight) {
      el.style.animationPlayState = "running";
    }
  });
});
