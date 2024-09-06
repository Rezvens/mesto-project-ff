export { enableValidation, clearValidation };



function enableValidation(settings) {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));

  formList.forEach((form) => {
    setEventListeners(form, settings);
  })
}

function setEventListeners(form, settings) {
  const inputList =  Array.from(form.querySelectorAll(settings.inputSelector));
  const button = form.querySelector(settings.submitButtonSelector);
  toggleButtonState(inputList, button, settings);

  inputList.forEach((input) => {
    input.addEventListener('input', () => {
      isValid(form, input, settings);
      toggleButtonState(inputList, button, settings);
    })
  })
}

function isValid(form, input, settings) {
  if (input.validity.patternMismatch) {
    input.setCustomValidity(input.dataset.errorMessage);
  } else {
    input.setCustomValidity('');
  }

  if (!input.validity.valid) {
    showInputError(form, input, input.validationMessage, settings);
  } else {
    hideInputError(form, input, settings);
  }
}

function showInputError(form, input, errorMessage, settings) {
  const error = form.querySelector(`.${input.id}-error`);
  input.classList.add(settings.inputErrorClass);
  error.textContent = errorMessage;
  error.classList.add(settings.errorClass);
}

function hideInputError(form, input, settings) {
  const error = form.querySelector(`.${input.id}-error`);
  input.classList.remove(settings.inputErrorClass);
  error.classList.remove(settings.errorClass);
  error.textContent = '';
}

function hasInvalidInput(inputList) {
  return inputList.some((input) => {
    return !input.validity.valid;
  })
}

function toggleButtonState(inputList, button, settings) {
  if (hasInvalidInput(inputList)) {
    button.setAttribute('disabled', '');
    button.classList.add(settings.inactiveButtonClass);
    button.classList.remove(settings.hoverButtonClass);
  } else {
    button.removeAttribute('disabled', '');
    button.classList.remove(settings.inactiveButtonClass);
  }
}

function clearValidation(form, settings) {
  const button = form.querySelector(settings.buttonClass);
  const inputList = Array.from(form.querySelectorAll(settings.inputSelector));
  toggleButtonState(inputList, button, settings);
}