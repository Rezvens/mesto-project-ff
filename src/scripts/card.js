import { deleteDataCard, putDataLikeCard, deleteDataLikeCard } from "./api";
export {createCard, removeCard, likeCard};

function createCard(profileId, ownerId, id, likes, name, link, alt, removeCardFunc, likeCardFunc, openImagePopupFunc) { 
  const cardTemplate = document.querySelector('#card-template').content; 
  const card = cardTemplate.querySelector('.card').cloneNode(true); 

  card.querySelector('.card__title').textContent = name; 
  card.querySelector('.card__image').src = link; 
  card.querySelector('.card__image').alt = alt; 
  card.querySelector('.likes').textContent = likes.length
  card._id = id;
  card.name = name;
  card.likes = likes;

  const trashButton = card.querySelector('.card__delete-button');
  if (ownerId === profileId) { trashButton.addEventListener('click', removeCardFunc) } else { trashButton.classList.add('visually-hidden') }

  card.addEventListener('click', likeCardFunc);
  card.likes.some((like) => {
  if (like._id === profileId) {
    const likeButton = card.querySelector('.card__like-button')
    likeButton.classList.add('card__like-button_is-active')
  }})
  card.addEventListener('click', openImagePopupFunc);
  return card;
}

function likeCard(evt) {
  if (evt.target.classList.contains('card__like-button')) {
    const likeButton = evt.target;
    const card = likeButton.closest('.card');
    const likesCount = card.querySelector('.likes')

    if (!likeButton.classList.contains('card__like-button_is-active')) {
      putDataLikeCard(card._id)
      .then(() => {
          likeButton.classList.add('card__like-button_is-active');
          likesCount.textContent = Number(likesCount.textContent) + 1;
      })
      .catch(error => {
        console.log(`Ошибка ${error}`);
      })
    } else {
      deleteDataLikeCard(card._id)
      .then(() => {
          likeButton.classList.remove('card__like-button_is-active');
          likesCount.textContent = Number(likesCount.textContent) - 1;
      })
      .catch(error => {
        console.log(`Ошибка ${error}`);
      })}
  }
}

function removeCard(evt) {
  const trashButton = evt.target;
  const card = trashButton.closest('.card');
  deleteDataCard(card._id)
  .then(() => {
    card.remove();
  })
  .catch(error => {
    console.log(`Ошибка ${error}`);
  })
}