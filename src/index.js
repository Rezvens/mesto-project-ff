import './pages/index.css';
import './scripts/cards.js';
import './scripts/modal.js';
import './scripts/profileEdit.js';
import './scripts/cardAdd.js';
import './scripts/card.js'

import { initialCards } from './scripts/cards.js'
import { createCard, removeCard, likeCard} from './scripts/card.js';
import { openImagePopup } from './scripts/modal.js';



const placesList = document.querySelector('.places__list');

initialCards.forEach(function (card) { // функция рендера каждой картчки в массиве
  const cardContent = createCard(card.name, card.link, card.alt, removeCard, likeCard, openImagePopup) // вызвали функцию, передали name, link и alt
  placesList.append(cardContent); // добавили карточку в конец контейнера
});