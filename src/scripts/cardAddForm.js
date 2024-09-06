import { postDataCard } from "./api";
export { addNewCard };

function addNewCard(renderLoading, form, nameInput, linkInput, placesList, createCard, removeCard, closePopup, openImagePopup, likeCard, evt) {
  evt.preventDefault();
  
  const openedPopup = evt.target.closest('.popup');
  const saveButton = openedPopup.querySelector('.popup__button');
  saveButton.classList.add('button-inactive');

  renderLoading(form, true);
  postDataCard(nameInput.value, linkInput.value)
  .then((data) => {
    const card = createCard('', '', '', [], nameInput.value, linkInput.value, nameInput.value, removeCard, likeCard, openImagePopup);
    card._id = data._id;
    placesList.prepend(card);
    closePopup(openedPopup);
    form.reset();
  })
  .catch(error => {
    console.log(`Ошибка ${error}`);
  })
  .finally(() => {
    renderLoading(form, false);
  })
}

