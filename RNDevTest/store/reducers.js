import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import auth from './reducers/auth'
import jobs from '../src/routes/Jobs/modules/reducer'

export const makeRootReducer = () => combineReducers({
  auth,
  form: formReducer,
  jobs
})

export default makeRootReducer
