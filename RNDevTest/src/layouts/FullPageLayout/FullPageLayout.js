import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    bottom: 0,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    flexGrow: 1
  }
})

const FullPageLayout = ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
)

FullPageLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default FullPageLayout
