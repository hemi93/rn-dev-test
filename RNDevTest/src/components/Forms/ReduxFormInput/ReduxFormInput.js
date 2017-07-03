import React from 'react'
import PropTypes from 'prop-types'
import { TextInput, View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  input: {
    alignSelf: 'stretch'
  },
  error: {
    color: '#C62828',
    alignSelf: 'flex-end',
    fontSize: 10
  }
})

const ReduxFormInput = ({ input: { onChange, ...restInput }, ...rest }) => (
  <View>
    <TextInput
      {...rest}
      {...restInput}
      onChangeText={onChange}
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
