

const popupEditProfile = document.querySelector('.popup_type_edit'); // нашли попап редактирования профиля
const popupAddNewCard = document.querySelector('.popup_type_new-card'); // нашли попап добавления новой карточки
const popupZoomImage = document.querySelector('.popup_type_image'); // нашли попап для увеличения изображения

const profileEditButton = document.querySelector('.profile__edit-button'); // нашли кнопку редактирования профиля
const profileAddButton = document.querySelector('.profile__add-button'); // нашли кнопку добавления новой карточки

const popupCloseButtons = document.querySelectorAll('.popup__close'); // ищем все кнопки закрытия попапа

profileEditButton.addEventListener('click', () => { // добавили слушатель на кнопку для открытия попапа редактирования профиля
  openPopup(popupEditProfile); // передали функцию открытия попапа
});

profileAddButton.addEventListener('click', () => { // добавили слушатель на кнопку для открытия попапа редактирования профиля
  openPopup(popupAddNewCard); // передали функцию открытия попапа
});

const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');

export function openImagePopup(evt) {
  if (evt.target.classList.contains('card__image')) {
  openPopup(popupZoomImage);
  const card = evt.target.closest('.card'); // Находим родительский элемент карточки
  popupImage.setAttribute('src', evt.target.src);
  const cardTitle = card.querySelector('.card__title'); // Ищем заголовок внутри карточки
  popupCaption.textContent = cardTitle.textContent;
}}

popupCloseButtons.forEach(button => { // каждой кнопке закрытия попапа..
  button.addEventListener('click', closePopup)
    // ..добавляем слушатель и передаем колбеком функцию закрытия попапа
});

function openPopup(popup) {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', escHandlerKeydown);
  popup.addEventListener('click', overlayHandler);
}

function overlayHandler(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup();
  }
};

function escHandlerKeydown(evt) {
  if (evt.key === 'Escape') {
    closePopup();
  }
};

function closePopup() {
  const popup = document.querySelector('.popup_is-opened');
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closePopup);
  popup.removeEventListener('click', overlayHandler);
}

export {closePopup};