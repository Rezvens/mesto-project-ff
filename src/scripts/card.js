export {createCard, removeCard, likeCard};

function createCard(name, link, alt, removeCardFunc, likeCardFunc, openImagePopupFunc) { // создание карточки с имененм, источником, альтернативным текстом и коллбэком
  const cardTemplate = document.querySelector('#card-template').content; // нашли шаблон карточки в HTML
  const card = cardTemplate.querySelector('.card').cloneNode(true); // скопировали его содержимое

  card.querySelector('.card__title').textContent = name; // добавили в name имя карточки
  card.querySelector('.card__image').src = link; // добавили в link ссылку на карточку
  card.querySelector('.card__image').alt = alt; // добавили в alt альтернативный текст

  const deleteButton = card.querySelector('.card__delete-button'); // нашли кнопку удаления в карточке
  deleteButton.addEventListener('click', removeCardFunc); // добавили кнопке слушатель
  card.addEventListener('click', likeCardFunc);
  card.addEventListener('click', openImagePopupFunc);
  return card; // вернули готовую карточку
};

function likeCard(evt) {
  if (evt.target.classList.contains('card__like-button')) {
    const likeButton = evt.target;
    likeButton.classList.toggle('card__like-button_is-active');
  }};

function removeCard(evt) { // функция удаления нужной карточки
  const trashButton = evt.target; // добавили в пременную нажатую кнопку
  const card = trashButton.closest('.card'); // нашли родителя по классу .card
  card.remove(); //удалили карточку
};