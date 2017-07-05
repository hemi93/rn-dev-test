import React from 'react'
import PropTypes from 'prop-types'
import Config from 'react-native-config'
import { KeyboardAvoidingView, Image, Text } from 'react-native'
import Form from './Form'
import Spinner from '../../../components/Spinner'
import bgImageSource from './assets/bg.jpeg'
import styles from './styles'

const Login = ({ isLoading }) => (
  <KeyboardAvoidingView style={styles.container}>
    <Image source={bgImageSource} style={styles.image}>
      <Text style={styles.title}> { Config.APP_NAME } </Text>
      {isLoading && <Spinner />}
      {!isLoading && <Form />}
    </Image>
  </KeyboardAvoidingView>
)

Login.propTypes = {
  isLoading: PropTypes.bool.isRequired
}

export default Login
