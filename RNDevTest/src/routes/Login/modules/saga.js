import { takeLatest } from 'redux-saga/effects'
import { SUBMIT_SIGN_IN } from './constants'

function * rootLoginSaga () {
  yield takeLatest(SUBMIT_SIGN_IN, handleSubmitSignIn)
}

function * handleSubmitSignIn (action) {
  console.warn(JSON.stringify(action))
  const { email, password } = action.payload
}

export default rootLoginSaga
