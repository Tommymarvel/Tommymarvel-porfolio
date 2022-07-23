const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const submitError = document.getElementById("submit-error");

function validateName() {
  const name = document.getElementById("contact-name").value;

  if (name.length === 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }

  if (!name.match(/^[A-Za-z]\s{1}[A-Za-z]$/)) {
    nameError.innerHTML = "Write Full Name";
    return false;
  }
  nameError.innerHTML = "";
  return true;
}

const isLowerCase = (str) => /[a-z]/.test(str) && !/[A-Z]/.test(str);
const email = document.getElementById("contact-email");
const form = document.forms["contact-form"];

function validateEmail(e) {
  e.preventDefault();

  if (!isLowerCase(email.value)) {
    emailError.innerHTML = "Your Email should be lowercase";
  } else {
    nameError.innerHTML = "";
    form.submit();
  }
}
const validateForm = document.getElementById("formdata");
validateForm.addEventListener("submit", (e) => {
  validateEmail(e);
});
