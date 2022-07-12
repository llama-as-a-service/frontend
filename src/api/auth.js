import axios from "axios"
import config from "../config"
import Cookies from 'js-cookie'

const { AUTH_API_URL, TOKEN_COOKIE_KEY } = config

export const checkLoginStatus = (callback) => {
  const TOKEN = Cookies.get(TOKEN_COOKIE_KEY)
  if (TOKEN) {
    axios.post(`${AUTH_API_URL}/authenticate`, { token: TOKEN })
      .then(response => {
        // console.log(response.headers['x-access-token'])
        callback(response.data)
      })
      .catch((err) => callback(null, err));
  } else {
    callback(null)
  }
}
export const signInWithEmailAndPassword = (email, password, callback, errorCallback = () => { }) => {
  axios.post(`${AUTH_API_URL}/login`, { email, password })
    .then(response => {
      // console.log(response.headers['x-access-token'])
      // Cookies.set(TOKEN_COOKIE_KEY, response.headers['x-access-token'])
      Cookies.set(TOKEN_COOKIE_KEY, response.data.token)
      console.log(response.data)

      callback(response.data)
    })
    .catch((err) => {
      try {
        const errorMessage = err.response.data.message
        errorCallback(errorMessage)
      } catch (errrr) {
        console.log(err)
        errorCallback(JSON.stringify(err))
      }
    });
}
export const createUserWithEmailAndPassword = (accountDetails, callback, errorCallback = () => { }) => {
  axios.post(`${AUTH_API_URL}/register`, accountDetails)
    .then(response => {
      // console.log(response.headers['x-access-token'])
      // Cookies.set(TOKEN_COOKIE_KEY, response.headers['x-access-token'])
      Cookies.set(TOKEN_COOKIE_KEY, response.data.token)
      callback(response.data)
    })
    .catch((err) => {
      errorCallback(err.response.data.message)
    });
}
export const signOut = () => {
  Cookies.set(TOKEN_COOKIE_KEY, "missing")
}
