import { Dimensions, StyleSheet } from 'react-native'

const { width } = Dimensions.get('window')

export default StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    width
  },
  container: {
    flex: 1,
    width
  }
})
