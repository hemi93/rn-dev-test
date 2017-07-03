import { put, takeLatest, take, race } from 'redux-saga/effects'
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

    console.warn(result)

    if (result.success) {
      yield put({
        type: SET_AUTH,
        payload: result.success.data
      })
    } else {

    }
  }
}

const getSignInPayload = (credentials) => ({
  grant_type: 'client_credentials',
  ...credentials
})

export default rootLoginSaga
