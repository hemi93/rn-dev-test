import React, { Component } from 'react'
import { Provider } from 'react-redux'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import configureStore from './store/configureStore'
import App from './src/components/App'

const store = configureStore()

const RNDevTest = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('RNDevTest', () => RNDevTest);
