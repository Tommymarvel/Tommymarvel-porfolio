const contactForm = document.getElementById('contact-forms');
const email = document.getElementById('email');
const validationMessage = document.getElementById('error');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (email.value !== email.value.toLowerCase()) {
    validationMessage.style.display = 'flex';
  } else {
    contactForm.submit();
  }
});
