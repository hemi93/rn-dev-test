import React from 'react'
import { KeyboardAvoidingView, Image } from 'react-native'
import Form from './Form'
import bgImageSource from './assets/bg.jpeg'
import styles from './styles'

const Login = () => (
  <KeyboardAvoidingView style={styles.container}>
    <Image source={bgImageSource} style={styles.image}>
      <Form />
    </Image>
  </KeyboardAvoidingView>
)

export default Login
