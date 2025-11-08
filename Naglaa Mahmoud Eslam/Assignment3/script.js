// Responsive Menu Toggle
function toggleMenu() {
    document.getElementById('nav-menu').classList.toggle('active');
}

// Button click alert
function sayHello() {
    alert("Hello! Thanks for clicking the button.");
}

// Contact Form Submission
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert(`Thank you ${form.name.value}, your message has been sent!`);
    form.reset();
});
