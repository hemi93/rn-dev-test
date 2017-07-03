import { StyleSheet, Platform } from 'react-native'

const companyImageHeight = 170
const titlesContainerHeight = 80
export const infoBarHeight = 75

export default StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    borderBottomColor: '#F5F5F5',
    backgroundColor: 'white',
    marginBottom: 8,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  infoContainer: {
    flexDirection: 'column',
    height: titlesContainerHeight + infoBarHeight,
    justifyContent: 'space-between'
  },
  titlesContainer: {
    padding: 8,
    flexDirection: 'column'
  },
  title: {
    fontFamily: Platform.OS === 'android' ? 'sans-serif-light' : undefined,
    fontSize: 24,
    fontWeight: '400'
  },
  infoBarText: {
    color: '#607d8b',
    fontSize: 15,
    textAlign: 'center'
  },
  rateType: {
    color: '#B0BEC5',
    fontSize: 10,
    textAlign: 'center'
  },
  companyImg: {
    height: companyImageHeight
  },
  companyName: {
    fontStyle: 'italic',
    color: '#bdbdbd'
  },
  icon: {
    fontSize: 18
  }
})
