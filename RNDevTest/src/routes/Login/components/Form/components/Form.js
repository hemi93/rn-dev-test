import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity } from 'react-native'
import LabelledReduxFormTextInput from '../../../../../components/Forms/LabelledReduxFormTextInput'
import styles from './styles'

const Form = ({ handleSubmit, onSubmit, valid }) => (
  <View style={styles.form}>
    <View>
      <LabelledReduxFormTextInput
        label='Email'
        name='email'
        required
        keyboardType='email-address'
      />
      <LabelledReduxFormTextInput
        label='Password'
        name='password'
        secureTextEntry
        required
      />
    </View>
    <TouchableOpacity
      onPress={valid ? handleSubmit(onSubmit) : () => {}}
      style={[styles.submitButton, valid ? styles.active : styles.inactive]}
    >
      <Text style={[styles.submitButtonText, valid ? styles.active : styles.inactive]}>
        Sign In
      </Text>
    </TouchableOpacity>
  </View>
)

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  valid: PropTypes.bool.isRequired
}

export default Form
