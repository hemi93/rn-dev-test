import axios from 'axios'
import Config from 'react-native-config'

export default () => axios.create({
  baseURL: Config.BASE_API_URL,
  responseType: 'json'
})
