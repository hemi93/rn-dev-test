import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import styles from './styles'

const FullPageLayout = ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
)

FullPageLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default FullPageLayout
