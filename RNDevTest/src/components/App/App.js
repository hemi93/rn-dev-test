import React from 'react'
import { Actions, Scene, Router } from 'react-native-router-flux'
import Login from '../../routes/Login'
import Jobs from '../../routes/Jobs'
import styles from './styles'

const scenes = Actions.create(
  <Scene key='root' navigationBarStyle={styles.navigationBarStyle}>
    <Scene key='login' component={Login} title='Login' initial />
    <Scene key='jobs' component={Jobs} title='Browse Jobs' />
  </Scene>
)

const App = () => (
  <Router scenes={scenes} />
)

export default App
