import { Record } from 'immutable'

const ACTION_HANDLERS = {
}

const InitialState = Record({
  data: null
})

const initialState = new InitialState()

export default function reducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
