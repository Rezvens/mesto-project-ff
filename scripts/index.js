function cardsAddContent(name, link) {
    const cardTemplate = document.querySelector('#card-template').content; // нашли шаблон карточки в HTML
    const cardContent = cardTemplate.querySelector('.card').cloneNode(true); // скопировали его содержимое

    cardContent.name = cardContent.querySelector('.card__title').textContent = name; // добавили свойству name имя карточки
    cardContent.link = cardContent.querySelector('.card__image').src = link; // добавили свойству link ссылку на карточку

    const placesList = document.querySelector('.places__list'); // нашли контейнер для карточек
    placesList.append(cardContent); // добавили карточку в конец контейнера

    const deleteButton = cardContent.querySelector('.card__delete-button'); //нашли кнопку удаления
    deleteButton.addEventListener('click', function () { //добавили слушатель для кнопки при клике
    const card = deleteButton.closest('.card'); //нашли ближайшего родителя card
    card.remove(); //удалили этот элемент
    })};

function cardsRender() {
  for (let i = 0; i < initialCards.length; i++) { // запустили цикл по длинне массива с карточками
    cardsAddContent(initialCards[i].name, initialCards[i].link) // вызвали функцию, передали name и link
}};

cardsRender();