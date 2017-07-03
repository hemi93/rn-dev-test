import { StyleSheet } from 'react-native'
import { infoBarHeight } from '../styles'

export default StyleSheet.create({
  infoBarElement: {
    height: infoBarHeight,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 8
  }
})
