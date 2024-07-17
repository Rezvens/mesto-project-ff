function createCard(name, link, alt, removeCardFunc) { // создание карточки с имененм, источником, альтернативным текстом и коллбэком
  const cardTemplate = document.querySelector('#card-template').content; // нашли шаблон карточки в HTML
  const cardContent = cardTemplate.querySelector('.card').cloneNode(true); // скопировали его содержимое

  cardContent.querySelector('.card__title').textContent = name; // добавили в name имя карточки
  cardContent.querySelector('.card__image').src = link; // добавили в link ссылку на карточку
  cardContent.querySelector('.card__image').alt = alt; // добавили в alt альтернативный текст

  const deleteButton = cardContent.querySelector('.card__delete-button'); // нашли кнопку удаления в карточке
  deleteButton.addEventListener('click', removeCardFunc); // добавили кнопке слушатель

  return cardContent; // вернули готовую карточку
};

initialCards.forEach(function (card) { // функция рендера каждой картчки в массиве
  const cardContent = createCard(card.name, card.link, card.alt, removeCard) // вызвали функцию, передали name, link и alt
  const placesList = document.querySelector('.places__list'); // нашли контейнер для карточек
  placesList.append(cardContent); // добавили карточку в конец контейнера
});

function removeCard(evt) { // функция удаления нужной карточки
  const evtTarget = evt.target; // добавили в пременную нажатую кнопку
  const card = evtTarget.closest('.card'); // нашли родителя по классу .card
  card.remove(); //удалили карточку
};