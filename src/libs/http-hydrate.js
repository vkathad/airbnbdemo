import axios from 'axios'
import Auth from './auth'
/* axios.defaults.headers = {
  'X-CSRF-TOKEN': 'xxx'
} */
//  axios.defaults.withCredentials = true
const BASE_URL = 'http://127.0.0.1:8000/api/'

export const BASE_URL_new = 'http://127.0.0.1:8000/api';


const postConfig = {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
}

export const getAuthConfig = () => {
  return {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: Auth.getAuthToken()
    }
  }
}

export const post = async (url, payload, config = postConfig) => {
  const data = await axios.post(BASE_URL + url, payload, config)
  return data
}

export const postwithOu = async (url, config,payload ) => {
  const data = await axios.post(BASE_URL + url, payload, config)
  return data
}

export const get = async (url, args) => {
  const data = await axios.get(BASE_URL + url,args)
  return data
}

export const dummyRequest = async (response) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(response)
    }, 1500)
  })
}
export const BASEURL = () => {
  return BASE_URL;
};
