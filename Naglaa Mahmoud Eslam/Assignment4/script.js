// زر About Section
function sayHello() {
    alert("Hello! Thanks for clicking the button.");
}

// Contact Form
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert(`Thank you ${document.getElementById('name').value}, your message has been sent!`);
    form.reset();
});
