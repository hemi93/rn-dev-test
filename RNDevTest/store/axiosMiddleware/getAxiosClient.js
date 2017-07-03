import axios from 'axios'

export default () => axios.create({
  baseURL: 'https://test.inploi.me/',
  responseType: 'json'
})
