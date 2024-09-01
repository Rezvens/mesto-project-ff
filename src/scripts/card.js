export {createCard, removeCard, likeCard};

function createCard(id, likes, name, link, alt, removeCardFunc, likeCardFunc, openImagePopupFunc) { 
  const cardTemplate = document.querySelector('#card-template').content; 
  const card = cardTemplate.querySelector('.card').cloneNode(true); 

  card.querySelector('.card__title').textContent = name; 
  card.querySelector('.card__image').src = link; 
  card.querySelector('.card__image').alt = alt; 
  card.querySelector('.likes').textContent = likes.length
  card._id = id;
  card.name = name;

  const trashButton = card.querySelector('.card__delete-button');
  // если id карточки совпадает с id пользователя, то скрывать корзину, иначе вешаем листенер
  trashButton.addEventListener('click', removeCardFunc); 
  card.addEventListener('click', likeCardFunc);
  card.addEventListener('click', openImagePopupFunc);

  return card; 
};

function likeCard(evt) {
  if (evt.target.classList.contains('card__like-button')) {
    const likeButton = evt.target;
    likeButton.classList.toggle('card__like-button_is-active');

  const card = likeButton.closest('.card');
  console.log(card.name);
  console.log(card._id);

  fetch(`https://nomoreparties.co/v1/wff-cohort-21/cards/likes/${card._id}`, {
    method: 'PUT',
    headers: {
      authorization: 'e64358cb-e014-41f7-8927-e967308e67f0',
    }
  });

  }
};

function removeCard(evt) { 
  const trashButton = evt.target; 
  const card = trashButton.closest('.card');
  console.log(card)
  card.remove();

  // fetch(`https://nomoreparties.co/v1/wff-cohort-21/cards/${_id}`, {
  //   method: 'DELETE',
  //   headers: {
  //     authorization: 'e64358cb-e014-41f7-8927-e967308e67f0',
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     name: nameInput.value,
  //     about: jobInput.value
  //   })
  // }); 

};