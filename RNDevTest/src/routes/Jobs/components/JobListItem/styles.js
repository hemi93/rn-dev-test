import { StyleSheet, Platform } from 'react-native'

const companyImageHeight = 200
const titlesContainerHeight = 72
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
    flexDirection: 'column',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: titlesContainerHeight
  },
  title: {
    fontFamily: Platform.OS === 'android' ? 'sans-serif-light' : undefined,
    fontSize: 24,
    fontWeight: '400',
    color: '#fafafa'
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
    height: companyImageHeight,
    justifyContent: 'flex-end'
  },
  companyName: {
    fontStyle: 'italic',
    color: '#bdbdbd'
  },
  icon: {
    fontSize: 18,
    color: '#ff5252'
  }
})
