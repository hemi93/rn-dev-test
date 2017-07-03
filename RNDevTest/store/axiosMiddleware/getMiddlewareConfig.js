export default () => ({
  interceptors: {
    request: [{
      success: function ({ getState, dispatch, getSourceAction }, config) {
        return config
      },
      error: function ({ getState, dispatch, getSourceAction }, error) {
        return error
      }
    }
    ],
    response: [{
      success: function ({ getState, dispatch, getSourceAction }, response) {
        return Promise.resolve(response)
      },
      error: function ({ getState, dispatch, getSourceAction }, error) {
        return Promise.reject(error)
      }
    }
    ]
  }
})
