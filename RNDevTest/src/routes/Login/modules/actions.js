import {
  API_SIGN_USER_IN,
  SET_IS_LOADING
} from './constants'

export const signInApiCall = (data) => ({
  type: API_SIGN_USER_IN,
  payload: {
    request: {
      data,
      method: 'POST',
      url: '/token'
    }
  }
})

export const setIsLoading = (isLoading) => ({
  type: SET_IS_LOADING,
  payload: isLoading
})
