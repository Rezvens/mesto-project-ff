import { createCard, removeCard } from "./cards";

const formElement = document.forms['new-place'];
const nameInput = formElement.elements['place-name'];
const linkInput = formElement.elements.link;
function handleFormSubmit(evt) {
  evt.preventDefault();
  const cardContent = createCard(nameInput.value, linkInput.value, 'defaultValue', removeCard);
  const placesList = document.querySelector('.places__list');
  placesList.prepend(cardContent);
  const openPopup = document.querySelector('.popup_is-opened');
  openPopup.classList.toggle('popup_is-opened');
  formElement.reset();
}

formElement.addEventListener('submit', handleFormSubmit); 