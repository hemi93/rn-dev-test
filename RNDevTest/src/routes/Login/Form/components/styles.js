import { Dimensions, StyleSheet } from 'react-native'

const signInButtonHeight = 100
const signInButtonBorderRadius = signInButtonHeight / 2

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
    backgroundColor: '#FF5252',
    borderRadius: signInButtonBorderRadius,
    height: 84,
    justifyContent: 'center',
    marginBottom: 24
  },
  submitButtonText: {
    color: 'white',
    fontSize: 24
  },
  inactive: {
    opacity: 0.3
  },
  active: {
    opacity: 1
  }
})
