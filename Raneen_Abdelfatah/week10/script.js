
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.getElementById('site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contact-form');
const statusEl = document.getElementById('form-status');

function showError(id, msg){
  const small = document.getElementById(id + '-error');
  if (small){ small.textContent = msg; }
}

function clearErrors(){
  ['name','email','message'].forEach(id => showError(id, ''));
}

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors();
    const data = new FormData(form);
    const name = (data.get('name') || '').toString().trim();
    const email = (data.get('email') || '').toString().trim();
    const message = (data.get('message') || '').toString().trim();

    let ok = true;
    if (!name){ showError('name', 'Please enter your name.'); ok = false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){ showError('email', 'Please enter a valid email.'); ok = false; }
    if (message.length < 10){ showError('message', 'Message should be at least 10 characters.'); ok = false; }

    if (!ok){
      statusEl.textContent = 'Please fix the errors above.';
      return;
    }

    statusEl.textContent = 'Sending...';
    setTimeout(() => {
      statusEl.textContent = 'Thanks! Your message has been sent.';
      form.reset();
    }, 700);
  });
}
