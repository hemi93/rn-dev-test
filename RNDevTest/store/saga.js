import { fork } from 'redux-saga/effects'
import loginSaga from '../src/routes/Login/modules/saga'
import jobsSaga from '../src/routes/Jobs/modules/saga'

function * rootSaga () {
  yield [
    fork(loginSaga),
    fork(jobsSaga)
  ]
}

export default rootSaga
