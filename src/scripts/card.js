export {createCard, removeCard, likeCard};

function createCard(name, link, alt, removeCardFunc, likeCardFunc, openImagePopupFunc) { 
  const cardTemplate = document.querySelector('#card-template').content; 
  const card = cardTemplate.querySelector('.card').cloneNode(true); 

  card.querySelector('.card__title').textContent = name; 
  card.querySelector('.card__image').src = link; 
  card.querySelector('.card__image').alt = alt; 

  const trashButton = card.querySelector('.card__delete-button'); 
  trashButton.addEventListener('click', removeCardFunc); 
  card.addEventListener('click', likeCardFunc);
  card.addEventListener('click', openImagePopupFunc);

  return card; 
};

function likeCard(evt) {
  if (evt.target.classList.contains('card__like-button')) {
    const likeButton = evt.target;
    likeButton.classList.toggle('card__like-button_is-active');
  }};

function removeCard(evt) { 
  const trashButton = evt.target; 
  const card = trashButton.closest('.card'); 
  card.remove(); 
};