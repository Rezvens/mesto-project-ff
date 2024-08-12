export const initialCards = [
    {
      name: 'Зрение',
      link: 'https://images.unsplash.com/photo-1523536334348-b792b2c0fa41?q=80&w=2369&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Мужчина в очках смотрит вверх на воздушные шары на фоне серого неба',
    },
    {
      name: 'Слух',
      link: 'https://images.unsplash.com/photo-1584635234347-ce88034d9501?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Русая женщина наслаждается музыкой в бепроводных наушникх',
    },
    {
      name: 'Обоняние',
      link: 'https://images.unsplash.com/photo-1508090228729-c062eefc9bef?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Женщина держит в ладонях оранжевый цветок и наслаждается его ароматом',
    },
    {
      name: 'Осязание',
      link: 'https://images.unsplash.com/photo-1629284320201-f03e8c0a03e1?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Две руки прикасаются к красно-желтым яблокам на фоне зеленой листвы дерева',
    },
    {
      name: 'Вкус',
      link: 'https://images.unsplash.com/photo-1529973565457-a60a2ccf750d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Мужчинав деловом костюме держит сочный бургер',
    },
    {
      name: 'Равновесие',
      link: 'https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?q=80&w=2699&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Сиуэт человека на фоне заката и моря стоит на камне и держит равновесие',
    }
];

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