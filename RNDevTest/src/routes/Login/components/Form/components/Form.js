import React from 'react'
import PropTypes from 'prop-types'
import { Dimensions, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import LabelledReduxFormTextInput from '../../../../../components/Forms/LabelledReduxFormTextInput'
import { COLOR_PRIMARY } from '../../../../../constants/colors'

const {
  height: deviceHeight
} = Dimensions.get('window')

const styles = StyleSheet.create({
  form: {
    paddingTop: 110,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    flexDirection: 'column',
    padding: 16,
    height: deviceHeight
  },
  submitButton: {
    height: 64,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16
  },
  submitButtonText: {
    fontSize: 24,
    color: COLOR_PRIMARY
  }
})

const Form = ({ handleSubmit, onSubmit, valid }) => (
  <View style={styles.form}>
    <View>
      <LabelledReduxFormTextInput
        label='Email'
        name='email'
        required
      />
      <LabelledReduxFormTextInput
        label='Password'
        name='password'
        secureTextEntry
        required
      />
    </View>
    <TouchableOpacity
      onPress={handleSubmit(onSubmit)}
      style={styles.submitButton}
    >
      <Text style={styles.submitButtonText}>
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
