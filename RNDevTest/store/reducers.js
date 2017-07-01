import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

export const makeRootReducer = (asyncReducers) => combineReducers({
  ...asyncReducers
})

export default makeRootReducer
