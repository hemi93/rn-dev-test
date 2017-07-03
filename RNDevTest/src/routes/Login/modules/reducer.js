import { Record } from 'immutable'
import { SET_IS_LOADING } from './constants'

const ACTION_HANDLERS = {
  [SET_IS_LOADING]: (state, action) => {
    return state.set('isLoading', action.payload)
  }
}

const InitialState = Record({
  isLoading: false
})

const initialState = new InitialState()

export default function reducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
