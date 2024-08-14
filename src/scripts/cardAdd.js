import { createCard, removeCard } from "./card";
import { likeCard } from "./card";
import { closePopup, openImagePopup } from "./modal";

const formElement = document.forms['new-place'];
const nameInput = formElement.elements['place-name'];
const linkInput = formElement.elements.link;

function handleFormSubmit(evt) {
  evt.preventDefault();
  const cardContent = createCard(nameInput.value, linkInput.value, nameInput.value, removeCard, likeCard, openImagePopup);
  const placesList = document.querySelector('.places__list');
  placesList.prepend(cardContent);
  const openedPopup = evt.target.closest('.popup');
  closePopup(openedPopup);
  formElement.reset();
}

formElement.addEventListener('submit', handleFormSubmit); 