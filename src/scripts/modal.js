const popupEditProfile = document.querySelector('.popup_type_edit'); // нашли попап редактирования профиля
const popupAddNewCard = document.querySelector('.popup_type_new-card'); // нашли попап добавления новой карточки
const popupZoomImage = document.querySelector('.popup_type_image'); // нашли попап для увеличения изображения
const profileEditButton = document.querySelector('.profile__edit-button'); // нашли кнопку редактирования профиля
const profileAddButton = document.querySelector('.profile__add-button'); // нашли кнопку добавления новой карточки
const popupCloseButtons = document.querySelectorAll('.popup__close'); // ищем все кнопки закрытия попапа
const popupImage = document.querySelector('.popup__image'); 
const popupCaption = document.querySelector('.popup__caption');

profileEditButton.addEventListener('click', () => { // добавили слушатель на кнопку для открытия попапа редактирования профиля
  openPopup(popupEditProfile); // передали функцию открытия попапа
});

profileAddButton.addEventListener('click', () => { // добавили слушатель на кнопку для открытия попапа редактирования профиля
  openPopup(popupAddNewCard); // передали функцию открытия попапа
});

export function openImagePopup(evt) { // экспортировали при объявлении функции для открытия изображения
  if (evt.target.classList.contains('card__image')) { // если кликнутый элмент изображение карточки, то..
  openPopup(popupZoomImage); // ..открой попап изображения
  const card = evt.target.closest('.card'); // Находим родительский элемент карточки
  popupImage.setAttribute('src', evt.target.src); // изображению попапа присваиваем ссылку нажатого изображения
  const cardTitle = card.querySelector('.card__title'); // Ищем заголовок внутри карточки
  popupCaption.textContent = cardTitle.textContent; // опианию под изображением присваиваем заголовок карточки
}}

popupCloseButtons.forEach(button => { // каждой кнопке закрытия попапа..
  button.addEventListener('click', closePopup) // ..добавляем слушатель и передаем колбеком функцию закрытия попапа
});

function openPopup(popup) { // функция открытия попапа, который передали как аргумент
  popup.classList.add('popup_is-opened'); // присвоили этому попапу класс открытия
  document.addEventListener('keydown', escHandlerKeydown); // добавили слушатель нажатия клавиш, пока попап открыт
  popup.addEventListener('click', overlayHandler); // добавили слушатель клика на оверлей, пока попап открыт
}

function overlayHandler(evt) { // функция закрытия попапа на оверлей
  if (evt.target === evt.currentTarget) { // если клик на оверлей, то..
    closePopup(); // закрыть попап
  }
};

function escHandlerKeydown(evt) { // функция закрытия попапа на Esc
  if (evt.key === 'Escape') { // если клавиша Esc, то..
    closePopup();// ..закрыть попап
  }
};

function closePopup() { // функция закрытия попапа
  const popup = document.querySelector('.popup_is-opened'); // нашли открытый попап
  popup.classList.remove('popup_is-opened'); // убрали у него класс открытия
  document.removeEventListener('keydown', closePopup); // удалили слушатель клавишы Esc
  popup.removeEventListener('click', overlayHandler); // удалили слушатель клика на оверлей
}

export {closePopup, openPopup};