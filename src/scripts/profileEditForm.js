export { profileEditForm, editAvatar };

function profileEditForm(form, title, description, closePopup, renderLoading, evt) {
  evt.preventDefault();
  renderLoading(form, true);

  const nameInput = form.elements.name; 
  const jobInput = form.elements.description; 
  
  fetch('https://nomoreparties.co/v1/wff-cohort-21/users/me', {
    method: 'PATCH',
    headers: {
      authorization: 'e64358cb-e014-41f7-8927-e967308e67f0',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: nameInput.value,
      about: jobInput.value
    })
  })
    .then(res => {
      if (res.ok) {
        title.textContent = nameInput.value;
        description.textContent = jobInput.value;
      } else {
        return Promise.reject(res.status);
      }
    })
    .finally(() => {
      const openedPopup = evt.target.closest('.popup_is-opened'); 
      closePopup(openedPopup);
      renderLoading(form, false);
    })
}

function editAvatar(form, profileImage, closePopup, renderLoading, evt) {
  evt.preventDefault();
  renderLoading(form, true);

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
      profileImage.style.backgroundImage = `url(${form.elements.avalink.value}`;
      form.reset();
    } else {
      return Promise.reject(res.status);
    }
  })
  .finally(() => {
    const openedPopup = evt.target.closest('.popup');
    closePopup(openedPopup);
    renderLoading(form, false);
  })
}