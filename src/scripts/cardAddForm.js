export { cardAddForm };

function cardAddForm(cardForm, nameInput, linkInput, placesList, createCard, removeCard, closePopup, openImagePopup, likeCard, evt) {
  evt.preventDefault();
  const openedPopup = evt.target.closest('.popup');
  const saveButton = openedPopup.querySelector('.popup__button');

  saveButton.textContent = 'Сохранение...';
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
  })
  .then(res => {
    if (res.ok) {
      const card = createCard('', '', '', [], nameInput.value, linkInput.value, nameInput.value, removeCard, likeCard, openImagePopup);
      placesList.prepend(card);
    } else {
      return Promise.reject(res.status);
    }
  })
  .finally(() => {

    closePopup(openedPopup);
    saveButton.textContent = 'Сохранить';
    saveButton.classList.add('button-inactive');
    cardForm.reset();
  })
}

