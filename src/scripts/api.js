const config = {
  baseUrl: 'https://nomoreparties.co/v1/wff-cohort-21',
  headers: {
    authorization: 'e64358cb-e014-41f7-8927-e967308e67f0',
    'Content-Type': 'application/json'
  }
}

// ЗАУГРУЗКА ИНФОРМАЦИИ О ПОЛЬЗОВАТЕЛЕ С СЕРВЕРА
const profileData = fetch(`${config.baseUrl}/users/me`, {
  headers: config.headers
})
  .then(res => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res.status);
    }
  })

// ЗАГРУЗКА КАРТОЧЕК С СЕРВЕРА
const cardsData = fetch(`${config.baseUrl}/cards`, {
  headers: config.headers
})
  .then(res => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res.status);
    }
  })

export const serverData = [profileData, cardsData];


// Promise.all(serverData)
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