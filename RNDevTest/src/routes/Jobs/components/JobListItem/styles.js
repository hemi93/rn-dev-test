import { StyleSheet, Platform } from 'react-native'

const companyImageHeight = 170
const infoContainerHeight = 100

export default StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    borderBottomColor: '#F5F5F5',
    borderBottomWidth: 2,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  infoContainer: {
    flexDirection: 'row',
    height: infoContainerHeight,
    justifyContent: 'space-between',
    padding: 8
  },
  leftContainer: {
    flexDirection: 'column'
  },
  rightContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  title: {
    fontFamily: Platform.OS === 'android' ? 'sans-serif-light' : undefined,
    fontSize: 22,
    fontWeight: '400',
    marginBottom: 4
  },
  location: {
    color: '#BDBDBD',
    fontSize: 14,
    fontWeight: 'bold'
  },
  rate: {
    color: '#FF5252',
    fontSize: 20,
    textAlign: 'right'
  },
  rateType: {
    color: '#B0BEC5',
    fontSize: 10,
    textAlign: 'right'
  },
  companyImg: {
    height: companyImageHeight
  }
})
