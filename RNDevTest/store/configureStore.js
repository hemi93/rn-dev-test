import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import app from './reducers'
import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware()

export default () => {
  let store = createStore(app, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(rootSaga)
  return store
}
