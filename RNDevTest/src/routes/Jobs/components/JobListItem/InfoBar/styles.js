import { StyleSheet } from 'react-native'
import { infoBarHeight } from '../styles'

export default StyleSheet.create({
  infoBar: {
    height: infoBarHeight,
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  icon: {
    fontSize: 22,
    color: '#ff5252'
  },
  infoBarText: {
    color: '#90a4ae',
    fontSize: 15,
    textAlign: 'center'
  },
  rateType: {
    color: '#B0BEC5',
    fontSize: 10,
    textAlign: 'center'
  }
})
