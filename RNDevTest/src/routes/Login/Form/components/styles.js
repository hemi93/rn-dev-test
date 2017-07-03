import { Dimensions, StyleSheet } from 'react-native'
import { COLOR_PRIMARY } from '../../../../constants/colors'

const {
  height: deviceHeight
} = Dimensions.get('window')

export default StyleSheet.create({
  form: {
    alignSelf: 'stretch',
    flexDirection: 'column',
    height: deviceHeight,
    justifyContent: 'space-between',
    padding: 16,
    paddingTop: 110
  },
  submitButton: {
    alignItems: 'center',
    alignSelf: 'stretch',
    height: 64,
    justifyContent: 'center',
    marginBottom: 16
  },
  submitButtonText: {
    color: COLOR_PRIMARY,
    fontSize: 24
  }
})
