import axios from 'axios'

export const ApiGeolocation = axios.create({
  baseURL: `http://ip-api.com/json/`
})
