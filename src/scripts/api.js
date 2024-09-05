import { checkResponse } from "../utils/checkResponse"
export { serverData, deleteDataCard, putDataLikeCard, deleteDataLikeCard, postDataCard, patchDataProfile, patchDataAvatar }

const config = {
  baseUrl: 'https://nomoreparties.co/v1/wff-cohort-21',
  headers: {
    authorization: 'e64358cb-e014-41f7-8927-e967308e67f0',
    'Content-Type': 'application/json'
  }
}

const getProfileData = fetch(`${config.baseUrl}/users/me`, {
  headers: config.headers
})
  .then(checkResponse);

const getCardsData = fetch(`${config.baseUrl}/cards`, {
  headers: config.headers
})
  .then(checkResponse);

const serverData = [getProfileData, getCardsData];

function deleteDataCard(id) {
  return fetch(`${config.baseUrl}/cards/${id}`, {
    method: 'DELETE',
    headers: config.headers
  })
    .then(checkResponse);
}


function putDataLikeCard(id) {
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method: 'PUT',
    headers: config.headers
  })
    .then(checkResponse);
}


function deleteDataLikeCard(id) {
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method: 'DELETE',
    headers: config.headers
  })
    .then(checkResponse);
}

function postDataCard(name, link) {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: link
    })
  })
    .then(checkResponse);
}

function patchDataProfile(name, about) {
  return fetch(`${config.baseUrl}/users/me/`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      about: about
    })
  })
    .then(checkResponse);
}

function patchDataAvatar(link) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: link
    })
  })
    .then(checkResponse);
}