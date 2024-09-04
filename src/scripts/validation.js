export { enableValidation };



function enableValidation() {
  const formList = Array.from(document.querySelectorAll('.popup__form'));

  formList.forEach((form) => {
    setEventListeners(form);
  })
}

function setEventListeners(form) {
  const inputList = Array.from(form.querySelectorAll('.popup__input'));
  const button = form.querySelector('.button');
  toggleButtonState(inputList, button);

  inputList.forEach((input) => {
    input.addEventListener('input', () => {
      isValid(form, input);
      toggleButtonState(inputList, button);
    })
  })
}

function isValid(form, input) {
  if (input.validity.patternMismatch) {
    input.setCustomValidity(input.dataset.errorMessage);
  } else {
    input.setCustomValidity('');
  }

  if (!input.validity.valid) {
    showInputError(form, input, input.validationMessage);
  } else {
    hideInputError(form, input);
  }
}

function showInputError(form, input, errorMessage) {
  const error = form.querySelector(`.${input.id}-error`);
  input.classList.add('popup__input-error');
  error.textContent = errorMessage;
  error.classList.add('input__error-active');
}

function hideInputError(form, input) {
  const error = form.querySelector(`.${input.id}-error`);
  input.classList.remove('popup__input-error');
  error.classList.remove('input_error-active');
  error.textContent = '';
}

function hasInvalidInput(inputList) {
  return inputList.some((input) => {
    return !input.validity.valid;
  })
}

function toggleButtonState(inputList, button) {
  if (hasInvalidInput(inputList)) {
    button.setAttribute('disabled', '');
    button.classList.add('button-inactive');
    button.classList.remove('hover');
  } else {
    button.removeAttribute('disabled', '');
    button.classList.remove('button-inactive');
  }
}