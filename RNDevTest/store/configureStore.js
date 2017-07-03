import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import makeRootReducer from './reducers'
import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware()

export default (initialState = {}) => {

  // ======================================================
  // Store Middleware
  // ======================================================
    const middleware = [
      sagaMiddleware
    ]

  // ======================================================
  // Store Enhancers
  // ======================================================
    const enhancers = []
    let composeEnhancers = compose

    if (__DEV__) {
      if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      }
    }



  const store = createStore(
    makeRootReducer(),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
      ...enhancers
    )
  )
  sagaMiddleware.run(rootSaga)
  return store
}
