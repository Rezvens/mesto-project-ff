export { profileEditForm, editAvatar };

function profileEditForm(form, title, description, closePopup, evt) {
  evt.preventDefault();

  const nameInput = form.elements.name; 
  const jobInput = form.elements.description; 
  
  title.textContent = nameInput.value; // поменяли локально имя
  description.textContent = jobInput.value;  // и описание

  fetch('https://nomoreparties.co/v1/wff-cohort-21/users/me', { // загрузили обновленные данные на сервер
    method: 'PATCH',
    headers: {
      authorization: 'e64358cb-e014-41f7-8927-e967308e67f0',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: nameInput.value,
      about: jobInput.value
    })
  }); 

  const openedPopup = evt.target.closest('.popup_is-opened'); 
  closePopup(openedPopup); 
}

function editAvatar(form, profileImage, closePopup, evt) {
  evt.preventDefault();

  fetch('https://nomoreparties.co/v1/wff-cohort-21/users/me/avatar', { // загрузили обновленные данные на сервер
  method: 'PATCH',
  headers: {
    authorization: 'e64358cb-e014-41f7-8927-e967308e67f0',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    avatar: form.elements.avalink.value
  })
})
  .then(res => {
    if (res.ok) {
      profileImage.src = form.elements.avalink.value;
      form.reset();
    } else {
      return Promise.reject(res.status);
    }
  });
 
  const openedPopup = evt.target.closest('.popup');
  closePopup(openedPopup);
}