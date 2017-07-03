import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import styles from './styles'

const InfoBarElement = ({ children }) => (
  <View style={styles.infoBarElement}>
    {children}
  </View>
)

InfoBarElement.propTypes = {
  children: PropTypes.node.isRequired
}

export default InfoBarElement
