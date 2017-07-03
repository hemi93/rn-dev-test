import { Dimensions, StyleSheet } from 'react-native'
import { COLOR_PRIMARY } from '../../../../../constants/colors'

const {
  height: deviceHeight
} = Dimensions.get('window')

export default StyleSheet.create({
  form: {
    paddingTop: 110,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    flexDirection: 'column',
    padding: 16,
    height: deviceHeight
  },
  submitButton: {
    height: 64,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16
  },
  submitButtonText: {
    fontSize: 24,
    color: COLOR_PRIMARY
  }
})
