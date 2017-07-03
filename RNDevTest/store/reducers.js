import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import auth from './reducers/auth'

export const makeRootReducer = () => combineReducers({
  auth,
  form: formReducer
})

export default makeRootReducer
