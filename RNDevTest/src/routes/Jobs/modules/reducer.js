import { Record } from 'immutable'
import { ListView } from 'react-native'
import { APPEND_NEXT_PAGE } from './constants'

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1.id !== r2.id
})

const ACTION_HANDLERS = {
  [APPEND_NEXT_PAGE]: (state, action) => {
    const newData = [ ...state.data, ...action.payload ]
    const ids = newData.map((obj, index) => index)

    return state.withMutations((state) => {
      state.set('canLoadMore', action.payload.length > 0)
      state.set('data', newData)
      state.set('dataSource', ds.cloneWithRows(newData, ids))
      state.set('page', state.page + 1)
    })
  }
}

const InitialState = Record({
  canLoadMore: true,
  data: [],
  dataSource: null,
  page: 1
})

const initialState = new InitialState()

export default function reducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
