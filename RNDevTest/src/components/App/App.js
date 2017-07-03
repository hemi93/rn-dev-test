import React from 'react'
import { Actions, Scene, Router } from 'react-native-router-flux'
import Login from '../../routes/Login'
import { COLOR_PRIMARY } from '../../constants/colors'

const styles = {
  navigationBarStyle: {
    backgroundColor: COLOR_PRIMARY
  }
}

const scenes = Actions.create(
  <Scene key='root' navigationBarStyle={styles.navigationBarStyle}>
    <Scene key='login' component={Login} title='Login' initial />
  </Scene>
)

const App = () => (
  <Router scenes={scenes} />
)

export default App
