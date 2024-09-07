// import { deleteDataCard } from './scripts/api.js';
import './pages/index.css';
import { addNewCard } from './scripts/cardAddForm.js';
import { createCard, removeCard, likeCard} from './scripts/card.js';
import { openPopup, closePopup, renderLoading } from './scripts/modal.js';
import { editProfile, editAvatar } from  './scripts/profileEditForm.js'
import './scripts/validation.js';
import { enableValidation, clearValidation } from './scripts/validation.js';

const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  buttonClass: '.button',
  inactiveButtonClass: 'button-inactive',
  hoverButtonClass: 'hover',
  inputErrorClass: 'popup__input-error',
  errorClass: 'input__error-active'
}

const placesList = document.querySelector('.places__list');

const profileForm = document.forms['edit-profile']; 
const profileTitle = document.querySelector('.profile__title'); 
const profileDescription = document.querySelector('.profile__description');
const avatarForm = document.forms['edit-avatar'];
const profileImage = document.querySelector('.profile__image');

profileForm.addEventListener('submit', (evt) => {
  editProfile(profileForm, profileTitle, profileDescription, closePopup, renderLoading, evt);
});

const profileEditButton = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('.popup_type_edit'); 

profileEditButton.addEventListener('click', () => { 
  profileForm.elements.name.value = profileTitle.textContent;
  profileForm.elements.description.value = profileDescription.textContent;
  openPopup(popupEditProfile);
});

const cardForm = document.forms['new-place'];
const nameInput = cardForm.elements['place-name'];
const linkInput = cardForm.elements.link;

cardForm.addEventListener('submit', (evt) => {
  addNewCard(renderLoading, cardForm, nameInput, linkInput, placesList, createCard, removeCard, closePopup, openImagePopup, likeCard, evt);
}); 

const profileAddButton = document.querySelector('.profile__add-button'); 
const popupAddNewCard = document.querySelector('.popup_type_new-card');
const popupEditAvatar = document.querySelector('.popup_type_avatar');

profileAddButton.addEventListener('click', () => {
  clearValidation(cardForm, settings)
  openPopup(popupAddNewCard); 
});

profileImage.addEventListener('click', () => {
  openPopup(popupEditAvatar);
  clearValidation(avatarForm, settings)
})

avatarForm.addEventListener('submit', (evt) => {
  editAvatar(avatarForm, profileImage, closePopup, renderLoading, evt)
})

const popupZoomImage = document.querySelector('.popup_type_image'); 
const popupImage = document.querySelector('.popup__image'); 
const popupCaption = document.querySelector('.popup__caption');

function openImagePopup(evt) { 
  if (evt.target.classList.contains('card__image')) { 
  openPopup(popupZoomImage); 
  const card = evt.target.closest('.card'); 
  popupImage.setAttribute('src', evt.target.src); 
  popupImage.setAttribute('alt', evt.target.alt);
  const cardTitle = card.querySelector('.card__title'); 
  popupCaption.textContent = cardTitle.textContent; 
}};

const popupCloseButtons = document.querySelectorAll('.popup__close'); 

popupCloseButtons.forEach(button => { 
  button.addEventListener('click', (evt) => { 
    const openedPopup = evt.target.closest('.popup'); 
    closePopup(openedPopup); 
  }) 
});



enableValidation(settings);

import { serverData } from './scripts/api.js';

Promise.all(serverData)
  .then((results) => {
    const profile = results[0];
    profileTitle.textContent = profile.name;
    profileDescription.textContent = profile.about;
    profileImage.style.backgroundImage = `url(${profile.avatar}`;
    const profileId = profile._id;

    const cards = results[1];
    cards.forEach((card) => { 
      const cardContent = createCard(profileId, card.owner._id, card._id, card.likes, card.name, card.link, card.name, removeCard, likeCard, openImagePopup) 
      placesList.append(cardContent); 
      })
  })
  .catch(error => {
    console.log(`Ошибка ${error}`);
  });