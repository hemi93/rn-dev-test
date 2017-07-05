import { race, take, fork, put, select } from 'redux-saga/effects'
import { API_LOAD_MORE_JOBS, APPEND_NEXT_PAGE, LOAD_MORE } from './constants'
import { loadMoreJobsApiCall } from './actions'

function * rootJobsSaga () {
  yield fork(loadMoreDataWorker)
}

function * loadMoreDataWorker () {
  while (true) {
    yield take(LOAD_MORE)
    const { access_token: accessToken } = yield select(getAuthReducer)
    const { page } = yield select(getJobsReducer)
    yield put(loadMoreJobsApiCall({ accessToken, page }))

    const result = yield race({
      success: take(`${API_LOAD_MORE_JOBS}_SUCCESS`),
      fail: take(`${API_LOAD_MORE_JOBS}_FAIL`)
    })

    if (result.success) {
      yield put({
        type: APPEND_NEXT_PAGE,
        payload: result.success.payload.data.browse
      })
    } else {
      // TODO process fetching failure here
    }
  }
}

const getAuthReducer = (state) => state.auth

const getJobsReducer = (state) => state.jobs

export default rootJobsSaga
