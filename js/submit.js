const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const legalCheckbox = document.getElementById('legal');
const submitBtn = document.querySelector('.submit-btn');
const contactForm = document.getElementById('contact-form');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

const submitModal = document.querySelector('.backdrop-submit');
const closeModalBtn = document.querySelector('.submit-menu-close');
const submitModalMessage = document.querySelector('.submit-menu-message');

function validateName(name) {
  return /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]{2,}(?: [A-Za-zА-Яа-яЁёІіЇїЄєҐґ]{2,})*$/.test(name.trim());
}

function validateEmail(email) {
  email = email.trim();

  const emailPattern = /^[a-zA-Z0-9][a-zA-Z0-9._%+-]*[a-zA-Z0-9]@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return (
    emailPattern.test(email) &&
    !/\.\./.test(email) && // Заборона подвійних крапок
    !/@\./.test(email) && // Заборона "@."
    !/\.@/.test(email) && // Заборона ".@"
    !/^\.|\.$/.test(email) // Заборона крапки на початку або в кінці
  );
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

// contactForm.addEventListener('submit', function (e) {
//   e.preventDefault();

//   if (!submitBtn.disabled) {
//     // console.log(nameInput.value, emailInput.value, messageInput.value);
//     alert(`Name: ${nameInput.value}\nEmail: ${emailInput.value}\nMessage: ${messageInput.value}`);

//     contactForm.reset();
//     updateButtonState();
//   }
// });

function showModal(message) {
  submitModalMessage.textContent = message;
  submitModal.classList.remove('is-hidden');
}

function closeModal() {
  submitModal.classList.add('is-hidden');
}

closeModalBtn.addEventListener('click', closeModal);

contactForm.addEventListener('submit', async function (e) {
  e.preventDefault();

  if (!submitBtn.disabled) {
    try {
      const formData = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value,
      };

      const response = await fetch('/url', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Network responce was not ok');

      const data = await response.json();

      showModal('OK');
      contactForm.reset();
      updateButtonState();
    } catch (error) {
      showModal('Error');
      console.error('Error:', error);
    }
  }
});
