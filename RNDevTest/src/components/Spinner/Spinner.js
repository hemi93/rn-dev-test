import React from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator } from 'react-native'

const Spinner = ({ size, color }) => <ActivityIndicator size={size} color={color} />

Spinner.defaultProps = {
  size: 'large',
  color: '#FF5252'
}

Spinner.propTypes = {
  size: PropTypes.oneOfType([
    PropTypes.oneOf([ 'small', 'large' ]),
    PropTypes.number
  ]),
  color: PropTypes.string
}

export default Spinner
