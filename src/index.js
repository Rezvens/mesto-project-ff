import './pages/index.css';
import { cardAddForm } from './scripts/cardAddForm.js';
import { initialCards } from './scripts/cards.js'
import { createCard, removeCard, likeCard} from './scripts/card.js';
import { openPopup, closePopup } from './scripts/modal.js';
import { profileEditForm } from  './scripts/profileEditForm.js'

const placesList = document.querySelector('.places__list');

initialCards.forEach((card) => { 
  const cardContent = createCard(card.name, card.link, card.alt, removeCard, likeCard, openImagePopup) 
  placesList.append(cardContent); 
});

const profileForm = document.forms['edit-profile']; 
const profileTitle = document.querySelector('.profile__title'); 
const profileDescription = document.querySelector('.profile__description'); 

profileForm.addEventListener('submit', (evt) => {
  profileEditForm(profileForm, profileTitle, profileDescription, closePopup, evt);
});

const cardForm = document.forms['new-place'];
const nameInput = cardForm.elements['place-name'];
const linkInput = cardForm.elements.link;

cardForm.addEventListener('submit', (evt) => {
  cardAddForm(cardForm, nameInput, linkInput, placesList, createCard, removeCard, closePopup, openImagePopup, likeCard, evt);
}); 

const popupEditProfile = document.querySelector('.popup_type_edit'); 
const popupAddNewCard = document.querySelector('.popup_type_new-card'); 
const profileEditButton = document.querySelector('.profile__edit-button'); 
const profileAddButton = document.querySelector('.profile__add-button'); 
const popupZoomImage = document.querySelector('.popup_type_image'); 
const popupImage = document.querySelector('.popup__image'); 
const popupCaption = document.querySelector('.popup__caption');
const popupCloseButtons = document.querySelectorAll('.popup__close'); 

profileEditButton.addEventListener('click', () => { 
  openPopup(popupEditProfile); 
  profileForm.elements.name.value = profileTitle.textContent;
  profileForm.elements.description.value = profileDescription.textContent;
});

profileAddButton.addEventListener('click', () => { 
  openPopup(popupAddNewCard); 
});

popupCloseButtons.forEach(button => { 
  button.addEventListener('click', (evt) => { 
    const openedPopup = evt.target.closest('.popup'); 
    closePopup(openedPopup); 
  }) 
});

function openImagePopup(evt) { 
  if (evt.target.classList.contains('card__image')) { 
  openPopup(popupZoomImage); 
  const card = evt.target.closest('.card'); 
  popupImage.setAttribute('src', evt.target.src); 
  const cardTitle = card.querySelector('.card__title'); 
  popupCaption.textContent = cardTitle.textContent; 
}};