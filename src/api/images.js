import axios from "axios"
import config from "../config"

const { GATEWAY_API_URL } = config

export const fetchImage = (callback, errorCallback) => {
  axios.get(`${GATEWAY_API_URL}/random`)
    .then(response => {
      callback(response.data)
    })
}