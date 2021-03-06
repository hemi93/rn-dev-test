import React from 'react'
import { Actions, Scene, Router } from 'react-native-router-flux'
import Login from '../../routes/Login'
import Jobs from '../../routes/Jobs'

const scenes = Actions.create(
  <Scene key='root'>
    <Scene key='login' component={Login} title='Login' initial hideNavBar />
    <Scene key='jobs' component={Jobs} title='Browse Jobs' hideNavBar />
  </Scene>
)

const App = () => (
  <Router scenes={scenes} />
)

export default App
