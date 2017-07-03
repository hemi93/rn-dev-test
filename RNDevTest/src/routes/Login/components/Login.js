import React from 'react'
import PropTypes from 'prop-types'
import { KeyboardAvoidingView } from 'react-native'
import Form from './Form'

const Login = ({ isLoading }) => (
  <KeyboardAvoidingView>
    <Form />
  </KeyboardAvoidingView>
)

Login.propTypes = {
  isLoading: PropTypes.bool.isRequired
}

export default Login
