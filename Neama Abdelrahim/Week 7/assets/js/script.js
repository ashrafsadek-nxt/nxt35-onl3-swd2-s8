// Toggle Menu
const menuToggle = document.getElementById("menuToggle");
const navBar = document.getElementById("navBar");

menuToggle.addEventListener("click", () => {
    navBar.classList.toggle("show");
});

// Scroll to top button
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
});

scrollTopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
});

const readBtns = document.querySelectorAll(".artReadBtn");
readBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        alert("سيتم فتح المقال قريباً ✅");
    });
});

// Contact Form
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    alert("شكراً لك " + name + "، تم استلام رسالتك بنجاح ✅");
    this.reset();
});