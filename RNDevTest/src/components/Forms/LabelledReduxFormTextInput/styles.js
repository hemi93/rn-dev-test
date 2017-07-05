import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
  label: {
    fontSize: 11,
    color: '#BDBDBD',
    backgroundColor: 'transparent'
  },
  wrapper: {
    marginBottom: 16,
    borderBottomWidth: (Platform.OS === 'ios') ? 2 : 0,
    borderBottomColor: (Platform.OS === 'ios') ? 'white' : 'transparent'
  }
})
