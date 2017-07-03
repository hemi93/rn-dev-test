import React from 'react'
import { KeyboardAvoidingView } from 'react-native'
import Form from './Form'

const Login = ({ isLoading }) => (
  <KeyboardAvoidingView>
    <Form />
  </KeyboardAvoidingView>
)

export default Login
