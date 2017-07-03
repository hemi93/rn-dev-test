import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width,
    height
  },
  container: {
    flex: 1,
    height,
    width
  },
  title: {
    color: '#FF5252',
    fontSize: 34,
    marginTop: 50,
    textAlign: 'center'
  }
})
