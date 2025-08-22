    const toggle = document.querySelector(".menu-toggle");
    const menu = document.getElementById("menu");
    toggle.addEventListener("click", () => {
      menu.classList.toggle("showing");
    });


    const heroBtn = document.getElementById("heroBtn");
    const heroMsg = document.getElementById("heroMsg");
    heroBtn.addEventListener("click", () => {
      heroMsg.textContent = "Button clicked! 🎉 Welcome!";
    });


    const slides = document.getElementById("slides");
    let index = 0;
    setInterval(() => {
      index = (index + 1) % 3; 
      slides.style.transform = `translateX(${-600 * index}px)`;
    }, 3000);


    const contactForm = document.getElementById("contactForm");
    const formMsg = document.getElementById("formMsg");
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      formMsg.textContent = "✅ شكراً! تم إرسال رسالتك.";
      contactForm.reset();
    });
