import { Record } from 'immutable'
import { SET_AUTH } from '../../src/routes/Login/modules/constants'

const ACTION_HANDLERS = {
  [SET_AUTH] : (state, action) => {
    const {
      access_token,
      expires_in,
      token_type,
      scope
    } = action.payload

    return state.withMutations((state) => {
      state.set('access_token', access_token)
      state.set('expires_in', expires_in)
      state.set('scope', scope)
      state.set('token_type', token_type)
    })
  }
}

const InitialState = Record({
  access_token: null,
  expires_in: null,
  scope: null,
  token_type: null
})

const initialState = new InitialState()

export default function reducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
