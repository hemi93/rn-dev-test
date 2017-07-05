import { StyleSheet, Platform } from 'react-native'

const companyImageHeight = 200
const titlesContainerHeight = 72
export const infoBarHeight = 80

export default StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    backgroundColor: 'white',
    borderBottomColor: '#F5F5F5',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 8
  },
  titlesContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flexDirection: 'column',
    height: titlesContainerHeight,
    padding: 8
  },
  title: {
    color: '#fafafa',
    fontFamily: Platform.OS === 'android' ? 'sans-serif-light' : undefined,
    fontSize: 24,
    fontWeight: '400'
  },
  companyImg: {
    height: companyImageHeight,
    justifyContent: 'flex-end'
  },
  companyName: {
    color: '#bdbdbd',
    fontStyle: 'italic'
  }
})
