import axios from 'axios'

export const ApiGeolocation = axios.create({
  baseURL: `https://geo.ipify.org/api/v2/`
})
