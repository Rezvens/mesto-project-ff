import { patchDataProfile, patchDataAvatar } from "./api";
export { profileEditForm, editAvatar };

function profileEditForm(form, title, description, closePopup, renderLoading, evt) {
  evt.preventDefault();
  renderLoading(form, true);

  const nameInput = form.elements.name; 
  const jobInput = form.elements.description; 
  
  patchDataProfile(nameInput.value, jobInput.value)
    .then(() => {
      title.textContent = nameInput.value;
      description.textContent = jobInput.value;
      const openedPopup = evt.target.closest('.popup_is-opened'); 
      closePopup(openedPopup);
    })
    .catch(error => {
      console.log(`Ошибка ${error}`);
    })
    .finally(() => {
      renderLoading(form, false);
    })
}

function editAvatar(form, profileImage, closePopup, renderLoading, evt) {
  evt.preventDefault();
  renderLoading(form, true);

  patchDataAvatar(form.elements.avalink.value)
    .then(() => {
      profileImage.style.backgroundImage = `url(${form.elements.avalink.value}`;
      const openedPopup = evt.target.closest('.popup');
      closePopup(openedPopup);
      form.reset();
    })
    .catch(error => {
      console.log(`Ошибка ${error}`);
    })
    .finally(() => {
      renderLoading(form, false);
    })
}   