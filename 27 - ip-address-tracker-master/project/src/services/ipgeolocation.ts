import axios from 'axios'

export const ipGeolocation = axios.create({
  baseURL: `http://ip-api.com/json/`
})
