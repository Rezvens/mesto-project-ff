export { cardAddForm };

function cardAddForm(cardForm, nameInput, linkInput, placesList, createCard, removeCard, closePopup, openImagePopup, likeCard, evt) {
  evt.preventDefault();

  const card = createCard('0', nameInput.value, linkInput.value, nameInput.value, removeCard, likeCard, openImagePopup);

  placesList.prepend(card);

  fetch('https://nomoreparties.co/v1/wff-cohort-21/cards', {
    method: 'POST',
    headers: {
      authorization: 'e64358cb-e014-41f7-8927-e967308e67f0',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: nameInput.value,
      link: linkInput.value
    })
  }); 

  const openedPopup = evt.target.closest('.popup');
  closePopup(openedPopup);

  const button = openedPopup.querySelector('.popup__button');
  button.classList.add('button-inactive');

  cardForm.reset();

}

