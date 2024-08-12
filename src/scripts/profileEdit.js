// Находим форму в DOM
const formElement = document.forms['edit-profile'];// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
const nameInput = formElement.elements.name;// Воспользуйтесь инструментом .querySelector()
const jobInput = formElement.elements.description;// Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    // Выберите элементы, куда должны быть вставлены значения полей
  const profileTitle = document.querySelector('.profile__title');
  const profileDescription = document.querySelector('.profile__description');
    // Вставьте новые значения с помощью textContent
    profileTitle.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;

  const openPopup = document.querySelector('.popup_is-opened');
  openPopup.classList.toggle('popup_is-opened');
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit); 