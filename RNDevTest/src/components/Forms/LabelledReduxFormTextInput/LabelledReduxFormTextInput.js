import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import { View, Text } from 'react-native'
import ReduxFormInput from '../ReduxFormInput'
import styles from './styles'

const LabelledReduxFormTextInput = ({ label, name, ...rest }) => (
  <View style={styles.wrapper}>
    <Text style={styles.label}>
      {label}
    </Text>
    <Field
      component={ReduxFormInput}
      name={name}
      {...rest}
    />
  </View>
)

LabelledReduxFormTextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default LabelledReduxFormTextInput
