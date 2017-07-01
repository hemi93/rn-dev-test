import { applyMiddleware, compose, createStore as createReduxStore } from 'redux'
import thunk from 'redux-thunk'
import makeRootReducer from './reducers'
import { routerMiddleware } from 'react-router-redux'
import rootSaga from './sagas'
import axiosMiddleware from './axiosMiddleware'
import { browserHistory } from 'react-router'

const persistConfig = {
  whitelist: ['routing', 'app', 'drawer']
}

export const sagaMiddleware = createSagaMiddleware(rootSaga)

const createStore = async () => new Promise((resolve, reject) => {
  getStoredState(persistConfig, (error, restoredState) => {
    if (error) {
      reject(error)
    }

  // ======================================================
  // Middleware Configuration
  // ======================================================
    const middleware = [
      axiosMiddleware(),
      logger,
      sagaMiddleware,
      thunk,
      routerMiddleware(browserHistory)
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

    if (__DEV__) {
      const freeze = require('redux-freeze')
      middleware.push(freeze)
    }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
    const store = createReduxStore(
      makeRootReducer(),
      restoredState,
      composeEnhancers(
        applyMiddleware(...middleware),
        ...enhancers
      )
    )
    store.asyncReducers = {}

    if (module.hot) {
      module.hot.accept('./reducers', () => {
        const reducers = require('./reducers').default
        store.replaceReducer(reducers(store.asyncReducers))
      })
    }

    createPersistor(store, persistConfig)
    sagaMiddleware.run(rootSaga)

    return resolve(store)
  })
})

export default createStore
