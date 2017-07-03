import { put, take, race } from 'redux-saga/effects'
import { Actions } from 'react-native-router-flux'
import { API_SIGN_USER_IN, SUBMIT_SIGN_IN, SET_AUTH } from './constants'
import { signInApiCall } from './actions'

function * rootLoginSaga () {
  while (true) {
    const { payload: credentials } = yield take(SUBMIT_SIGN_IN)
    yield put(signInApiCall(getSignInPayload(credentials)))
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
      // TODO process login failure here
    }
  }
}

const getSignInPayload = (credentials) => {
  const { email, password } = credentials

  return ({
    grant_type: 'client_credentials',
    client_id: email,
    client_secret: password
  })
}

export default rootLoginSaga
