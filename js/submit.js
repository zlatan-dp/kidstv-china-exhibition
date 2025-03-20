const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const legalCheckbox = document.getElementById('legal');
const submitBtn = document.querySelector('.submit-btn');
const contactForm = document.getElementById('contact-form');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

function validateName(name) {
  return /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]{2,}$/.test(name.trim());
}

function validateEmail(email) {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.trim());
}

function validateMessage(message) {
  return message.trim().length >= 5;
}

function validateFieldOnBlur(inputElement, errorElement, validationFunction, errorMessage) {
  inputElement.addEventListener('blur', function () {
    if (inputElement.value.trim() && !validationFunction(inputElement.value)) {
      errorElement.textContent = errorMessage;
    } else {
      errorElement.textContent = '';
    }
  });
}

validateFieldOnBlur(nameInput, nameError, validateName, 'Invalid name (min. 2 letters)');
validateFieldOnBlur(emailInput, emailError, validateEmail, 'Invalid email');
validateFieldOnBlur(
  messageInput,
  messageError,
  validateMessage,
  'The message must be at least 5 characters long'
);

function updateButtonState() {
  const isNameValid = validateName(nameInput.value);
  const isEmailValid = validateEmail(emailInput.value);
  const isMessageValid = validateMessage(messageInput.value);
  const isLegalChecked = legalCheckbox.checked;

  const isValid = isNameValid && isEmailValid && isMessageValid && isLegalChecked;

  submitBtn.disabled = !isValid;

  if (isValid) {
    submitBtn.classList.add('active');
  } else {
    submitBtn.classList.remove('active');
  }
}

nameInput.addEventListener('input', updateButtonState);
emailInput.addEventListener('input', updateButtonState);
messageInput.addEventListener('input', updateButtonState);
legalCheckbox.addEventListener('change', updateButtonState);

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  if (!submitBtn.disabled) {
    // console.log(nameInput.value, emailInput.value, messageInput.value);
    alert(`Name: ${nameInput.value}\nEmail: ${emailInput.value}\nMessage: ${messageInput.value}`);

    contactForm.reset();
    updateButtonState();
  }
});
