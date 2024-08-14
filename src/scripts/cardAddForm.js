export { cardAddForm };

function cardAddForm(cardForm, nameInput, linkInput, placesList, createCard, removeCard, closePopup, openImagePopup, likeCard, evt) {
  evt.preventDefault();

  const card = createCard(nameInput.value, linkInput.value, nameInput.value, removeCard, likeCard, openImagePopup);

  placesList.prepend(card);

  const openedPopup = evt.target.closest('.popup');
  closePopup(openedPopup);

  cardForm.reset();
}

