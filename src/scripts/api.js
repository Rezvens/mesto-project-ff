const config = {
  baseUrl: 'https://nomoreparties.co/v1/wff-cohort-21',
  headers: {
    authorization: 'e64358cb-e014-41f7-8927-e967308e67f0',
    'Content-Type': 'application/json'
  }
}

const profileData = fetch(`${config.baseUrl}/users/me`, {
  headers: config.headers
})
  .then(res => { if (res.ok) { return res.json() } else { return Promise.reject(res.status) }})

const cardsData = fetch(`${config.baseUrl}/cards`, {
  headers: config.headers
})
  .then(res => { if (res.ok) { return res.json() } else { return Promise.reject(res.status) }})

export const serverData = [profileData, cardsData];