export {cardsArr, profileInfo};

// ЗАГРУЗКА КАРТОЧЕК С СЕРВЕРА
const cardsArr = fetch('https://nomoreparties.co/v1/wff-cohort-21/cards', {
  headers: {
    authorization: 'e64358cb-e014-41f7-8927-e967308e67f0'
  }
})


// ЗАУГРУЗКА ИНФОРМАЦИИ О ПОЛЬЗОВАТЕЛЕ С СЕРВЕРА
const profileInfo = fetch('https://nomoreparties.co/v1/wff-cohort-21/users/me', {
  headers: {
    authorization: 'e64358cb-e014-41f7-8927-e967308e67f0'
  }
})


// const promises = [cardsfetch, profileFetch];

// Promise.all(promises)
//   .then((results) => {
//     const cards = results[0];
//     cards.forEach((card) => { 
//     const cardContent = createCard(card.name, card.link, card.alt, removeCard, likeCard, openImagePopup) 
//     placesList.append(cardContent); 
//   })
//     const profile = results[1];
//     profileTitle.textContent = profile.name;
//     profileDescription.textContent = profile.about;
//     profileImage.src = profile.avatar;
//   })
//   .catch(console.log('Ошибка в загрузке данных'))