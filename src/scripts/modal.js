const profileEditButton = document.querySelector('.profile__edit-button');
const popupTypeEdit = document.querySelector('.popup_type_edit');
const popup = document.querySelector('.popup');

profileEditButton.addEventListener('click', () => {
  popupTypeEdit.classList.toggle('popup_is-opened');
  if (popupTypeEdit) {
    document.addEventListener('keydown', func123)
}});



const profileAddButton = document.querySelector('.profile__add-button');
const popupNewCard = document.querySelector('.popup_type_new-card');

profileAddButton.addEventListener('click', () => {
  popupNewCard.classList.toggle('popup_is-opened');
  if (popupNewCard) {
    document.addEventListener('keydown', func123)
}});

function func123 (evt) {
}

const popupTypeImage = document.querySelector('.popup_type_image');
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup_caption');



const placesList = document.querySelector('.places__list');
placesList.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('card__image')) {
    const card = evt.target.closest('.card'); // Находим родительский элемент карточки
    if (card) {
      popupTypeImage.classList.toggle('popup_is-opened');
      popupImage.setAttribute('src', evt.target.src);
      const cardTitle = card.querySelector('.card__title'); // Ищем заголовок внутри карточки
      console.log(cardTitle.textContent); // Выводим текст заголовка
    }
  }
});

// модуль закрытия попапа на кнопку

const popupCloseButtons = document.querySelectorAll('.popup__close'); // ищем все кнопки закрытия попапа
popupCloseButtons.forEach(button => { // каждой кнопке..
  button.addEventListener('click', popupClose) // ..добавляем слушатель и передаем колбеком функцию закрытия попапа
});

function popupClose(evt) { // функция закрытия попапа
  const popup = evt.target.closest('.popup'); // нашли родительский блок попапа по его классу
  popup.classList.toggle('popup_is-opened'); // закрыли попап переключив класс открытого попапа
  document.removeEventListener('keydown', func123);
};
// модуль закрытия попапа на клавишу Esc

const openPopups = document.querySelectorAll('.popup_is-opened');