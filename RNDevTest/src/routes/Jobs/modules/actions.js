import {
  API_LOAD_MORE_JOBS,
  LOAD_MORE
} from './constants'

export const loadMore = () => ({
  type: LOAD_MORE
})

export const loadMoreJobsApiCall = ({ page, accessToken }) => ({
  type: API_LOAD_MORE_JOBS,
  payload: {
    request: {
      method: 'GET',
      url: `/jobs/${page}?token=${accessToken}`
    }
  }
})
