class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
        this.delete = this.delete.bind(this);
    }

    _getResponseData(res) {
        return res.ok
        ? res.json()
        : Promise.reject(`Ошибка: ${res.status}`)
    }

    getAllCards() {
        return fetch(`${this._url}/cards`, {
            method: 'GET',
            headers: this._headers
        }).then(res => this._getResponseData(res))
    }

    addNewCard(data) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: `${data.name}`,
                link: `${data.link}`
            })
        }).then(res => this._getResponseData(res))
    }

    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: this._headers
        }).then(res => this._getResponseData(res))
    }

    editUserInfo(userData) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: `${userData.name}`,
                about: `${userData.about}`
            })
        }).then(res => this._getResponseData(res))
    }

    editAvatar(link) {
        return fetch(`${this._url}/users/me/avatar`, {
          method: 'PATCH',
          headers: this._headers,
          body: JSON.stringify({
            avatar: link.avatar
          })
        }).then(res => this._getResponseData(res))
    }

    like(cardId, isLiked) {
        return fetch(`${this._url}/cards/likes/${cardId}`, {
            method: isLiked ? "PUT" : "DELETE",
          headers: this._headers
        }).then(res => this._getResponseData(res))
    }

    delete(cardId) {
        return fetch(`${this._url}/cards/${cardId}`, {
          method: 'DELETE',
          headers: this._headers
        }).then(res => this._getResponseData(res))
    }
}

const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-23',
    headers: {
      authorization: '6bb43f5c-9c55-4b96-82c0-2583ec7e1ebb',
      "content-type": "application/json"
    }
  });

export default api;