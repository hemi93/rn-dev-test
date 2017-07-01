import { combineReducers } from 'redux'
import auth from './reducers/auth'
import login from '../src/routes/Login/modules/reducer'

export const makeRootReducer = () => combineReducers({
  auth,
  login
})

export default makeRootReducer
