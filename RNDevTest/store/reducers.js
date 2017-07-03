import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import auth from './reducers/auth'
import jobs from '../src/routes/Jobs/modules/reducer'
import login from '../src/routes/Login/modules/reducer'

export const makeRootReducer = () => combineReducers({
  auth,
  form: formReducer,
  jobs,
  login
})

export default makeRootReducer
