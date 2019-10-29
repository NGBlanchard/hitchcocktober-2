import TokenService from '../services/token-service'
import config from '../config'



const ApiService = {

  getUserData(number) {
    return fetch(`http://localhost:8000/users/${number}`, {
        headers: {
          'content-type': 'application/json',
        },
      })
        .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
      },

  getUsers(number) {
    return fetch(`${config.API_ENDPOINT}/users/${number}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      },
 
      postLogin({ user_name, password }) {
        return fetch(`${config.API_ENDPOINT}/login`, {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify({ user_name, password })
        }).then(res =>
          !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
        );
      },
      postUser(user) {
        return fetch(`${config.API_ENDPOINT}/users`, {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(user)
        }).then(res =>
          !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
        );
      }
}

export default ApiService
