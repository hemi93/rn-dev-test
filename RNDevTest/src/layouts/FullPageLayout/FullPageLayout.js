import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Dimensions, StyleSheet, View, Text } from 'react-native'

const {
  height: deviceHeight
} = Dimensions.get("window")

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor:"transparent",
    bottom: 0,
    justifyContent: "center",
    left: 0,
    position: "absolute",
    right: 0,
    top: 0
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