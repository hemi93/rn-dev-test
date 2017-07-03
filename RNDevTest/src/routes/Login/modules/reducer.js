import { Record } from 'immutable'
import { TOGGLE_IS_LOADING } from './constants'

const ACTION_HANDLERS = {
  [TOGGLE_IS_LOADING]: (state, action) => {
    return state.set('isLoading', !state.isLoading)
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
