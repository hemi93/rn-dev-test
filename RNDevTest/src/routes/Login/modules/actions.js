import {
  API_SIGN_USER_IN
} from './constants'

export const signInApiCall = (data) => ({
  type: API_SIGN_USER_IN,
  payload: {
    request: {
      method: 'POST',
      url: '/token',
      data
    }
  }
})
