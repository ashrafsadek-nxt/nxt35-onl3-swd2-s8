// Responsive Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});

// Contact Form Validation
function validateForm(event) {
  event.preventDefault();

  const name = document.querySelector("#name")?.value.trim();
  const email = document.querySelector("#email")?.value.trim();
  const message = document.querySelector("#message")?.value.trim();

  if (!name || !email || !message) {
    alert("⚠ Please fill in all fields.");
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("⚠ Please enter a valid email address.");
    return;
  }

  alert("✅ Thank you, " + name + "! Your message has been sent.");
  document.querySelector("#contactForm").reset();
}

// Slider
function initSlider(sliderSelector) {
  const slider = document.querySelector(sliderSelector);
  if (!slider) return;

  const slides = slider.querySelector(".slides");
  const slideItems = slider.querySelectorAll(".slide");
  const prevBtn = slider.querySelector(".prev");
  const nextBtn = slider.querySelector(".next");

  let index = 0;

  function showSlide(i) {
    index = (i + slideItems.length) % slideItems.length;
    slides.style.transform = `translateX(${-index * 100}%)`;
  }

  prevBtn.addEventListener("click", () => showSlide(index - 1));
  nextBtn.addEventListener("click", () => showSlide(index + 1));
}

// Initialize sliders on page load
document.addEventListener("DOMContentLoaded", () => {
  initSlider("#image-slider");
  initSlider("#video-slider");
});
