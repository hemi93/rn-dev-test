import { fork } from 'redux-saga/effects'
import loginSaga from '../src/routes/Login/modules/saga'

function * rootSaga () {
  yield [
    fork(loginSaga)
  ]
}

export default rootSaga