import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import { View, Text, StyleSheet } from 'react-native'
import ReduxFormInput from '../ReduxFormInput'

const styles = StyleSheet.create({
  label: {
    fontSize: 11
  }
})

const LabelledReduxFormTextInput = ({ label, name, ...rest }) => (
  <View>
    <Text style={styles.label}> { label } </Text>
    <Field name={name} component={ReduxFormInput} {...rest} />
  </View>
)

LabelledReduxFormTextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default LabelledReduxFormTextInput
