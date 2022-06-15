import axios from 'axios'

export const ipGeolocation = axios.create({
  baseURL: `https://api.ipgeolocation.io/`
})
