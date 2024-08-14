import { closePopup } from "./modal"; // импортировали функцию закрытия попапа

import { abc } from '../index.js'
console.log(abc);

const formElement = document.forms['edit-profile']; // нашли форму редактирования профиля
const nameInput = formElement.elements.name; // нашли поле для ввода имени
const jobInput = formElement.elements.description; // нашли поле для ввода занятия
const profileTitle = document.querySelector('.profile__title'); // нашли заголовок с именем
const profileDescription = document.querySelector('.profile__description'); // нашли описание под именем




function handleFormSubmit(evt) {
  evt.preventDefault(); // убрали станлартное поведение при сабмите формы
  
  profileTitle.textContent = nameInput.value; // присвоили текстовому содержимому заголовка имя из поля
  profileDescription.textContent = jobInput.value; // присвоили текстовому содержимому описания занятие из поля

  const openedPopup = evt.target.closest('.popup');
  closePopup(openedPopup); // закрыли попап
}

formElement.addEventListener('submit', handleFormSubmit); // добавили слушатель при нажатии кнопки сабмита