import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import auth from './reducers/auth'
import login from '../src/routes/Login/modules/reducer'

export const makeRootReducer = () => combineReducers({
  auth,
  form: formReducer,
  login
})

export default makeRootReducer
