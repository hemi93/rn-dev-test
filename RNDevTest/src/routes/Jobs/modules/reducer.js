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
      state.set('dataSource', ds.cloneWithRows(newData, ids))
      state.set('data', newData)
      state.set('page', state.page + 1)
      state.set('canLoadMore', action.payload.length > 0)
    })
  }
}

const InitialState = Record({
  canLoadMore: true,
  dataSource: ds.cloneWithRows([]),
  data: [],
  page: 1
})

const initialState = new InitialState()

export default function reducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
