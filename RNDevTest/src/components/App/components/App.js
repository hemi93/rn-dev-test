import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { Actions, Scene, Router } from 'react-native-router-flux'
import Login from '../../../routes/Login'
import { redirectToLoginPage } from '../modules/actions'

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={Login} title="Login" initial style={{flex:1, backgroundColor:'red'}}/>
  </Scene>
);

const App = () => (
  <Router scenes={scenes} />
)

export default App
