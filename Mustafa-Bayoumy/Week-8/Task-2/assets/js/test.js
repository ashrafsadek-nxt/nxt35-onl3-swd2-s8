const contactForm = document.getElementById('contactForm');
const alertPlaceholder = document.getElementById('alertPlaceholder');
function showAlert(message, type = 'success') {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;
  alertPlaceholder.innerHTML = '';
  alertPlaceholder.append(wrapper);
}
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = contactForm.querySelector('#name').value.trim();
  const email = contactForm.querySelector('#email').value.trim();
  const message = contactForm.querySelector('#message').value.trim();
  if (!name || !email || !message) {
    showAlert('Please fill in all fields.', 'danger');
    return;
  }
  console.log({ name, email, message });
  showAlert('Thank you for contacting us, ' + name + '!');
  contactForm.reset();
});
