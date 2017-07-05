import React from 'react'
import PropTypes from 'prop-types'
import { TextInput, View, Text } from 'react-native'
import styles from './styles'

const ReduxFormInput = ({ input: { onChange, ...restInput }, ...rest }) => (
  <View>
    <TextInput
      {...rest}
      {...restInput}
      onChangeText={onChange}
      style={styles.input}
      underlineColorAndroid='#9E9E9E'
    />
    {rest.meta.error && (
      <Text style={styles.error}>
        {rest.meta.error}
      </Text>
    )}
  </View>
)

ReduxFormInput.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired
  }).isRequired
}

export default ReduxFormInput
