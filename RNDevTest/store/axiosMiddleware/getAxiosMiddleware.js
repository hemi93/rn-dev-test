import axiosMiddleware from 'redux-axios-middleware'
import getAxiosClient from './getAxiosClient'
import getMiddlewareConfig from './getMiddlewareConfig'

export default () => axiosMiddleware(getAxiosClient(), getMiddlewareConfig())
