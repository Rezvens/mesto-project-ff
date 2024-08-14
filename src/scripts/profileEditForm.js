export { profileEditForm };

function profileEditForm(form, title, description, closePopup, evt) {
  evt.preventDefault();

  const nameInput = form.elements.name; 
  const jobInput = form.elements.description; 
  
  title.textContent = nameInput.value; 
  description.textContent = jobInput.value; 

  const openedPopup = evt.target.closest('.popup_is-opened'); 
  closePopup(openedPopup); 
}

