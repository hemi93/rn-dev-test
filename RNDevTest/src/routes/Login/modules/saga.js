import { put, take, race } from 'redux-saga/effects'
import { Actions } from 'react-native-router-flux'
import { API_SIGN_USER_IN, SUBMIT_SIGN_IN, SET_AUTH } from './constants'
import { signInApiCall, setIsLoading } from './actions'

function * rootLoginSaga () {
  while (true) {
    const { payload: credentials } = yield take(SUBMIT_SIGN_IN)
    yield put(setIsLoading(true))
    const signInPayload = getSignInPayload(credentials)
    yield put(signInApiCall(signInPayload))
    const result = yield race({
      success: take(`${API_SIGN_USER_IN}_SUCCESS`),
      fail: take(`${API_SIGN_USER_IN}_FAIL`)
    })

    if (result.success) {
      yield put({
        type: SET_AUTH,
        payload: result.success.payload.data
      })
      Actions.jobs({ type: 'replace' })
    } else {
      // TODO process sign in failure here, display information to User.
    }

    yield put(setIsLoading(false))
  }
}

const getSignInPayload = (credentials) => {
  const { email, password } = credentials

  return ({
    client_id: email,
    client_secret: password,
    grant_type: 'client_credentials'
  })
}

export default rootLoginSaga
