import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import makeRootReducer from './reducers'
import rootSaga from './saga'
import getAxiosMiddleware from './axiosMiddleware'

const sagaMiddleware = createSagaMiddleware()

export default (initialState = {}) => {
  // MIDDLEWARE CONFIG
  const middleware = [
    getAxiosMiddleware(),
    sagaMiddleware
  ]

  if (__DEV__) {
    middleware.push(createLogger())
  }

  // STORE ENHANCERS
  const enhancers = []

  const store = createStore(
    makeRootReducer(),
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
  )
  sagaMiddleware.run(rootSaga)
  return store
}
