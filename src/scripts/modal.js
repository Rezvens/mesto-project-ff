export {closePopup, openPopup};

function openPopup(popup) { 
  popup.classList.add('popup_is-opened'); 
  document.addEventListener('keydown', escHandler); 
  popup.addEventListener('click', overlayHandler); 
};

function overlayHandler(evt) { 
  if (evt.target === evt.currentTarget) { 
    const openedPopup = evt.target.closest('.popup'); 
    closePopup(openedPopup); 
  }
};

function escHandler(evt) { 
  if (evt.key === 'Escape') { 
    const openedPopup = document.querySelector('.popup_is-opened');
    closePopup(openedPopup);
  }
};

function closePopup(openedPopup) { 
  openedPopup.classList.remove('popup_is-opened'); 
  document.removeEventListener('keydown', escHandler); 
  openedPopup.removeEventListener('click', overlayHandler); 
};