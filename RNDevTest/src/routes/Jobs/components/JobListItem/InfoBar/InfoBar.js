import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import JobPropType from '../../../modules/JobPropType'
import InfoBarElement from './InfoBarElement'
import styles from './styles'

const InfoBar = ({ job }) => (
  <View style={styles.infoBar}>
    <InfoBarElement>
      <Icon name='ios-pricetag' style={styles.icon} />
      <View>
        <Text style={styles.infoBarText}>
          {`${job.rate}£`}
        </Text>
        <Text style={styles.rateType}>
          {`${job.rate_type}`}
        </Text>
      </View>
    </InfoBarElement>

    <InfoBarElement>
      <Icon name='ios-timer' style={styles.icon} />
      <Text style={styles.infoBarText}>
        {job.experience}
      </Text>
    </InfoBarElement>

    <InfoBarElement>
      <Icon name='ios-pin' style={styles.icon} />
      <Text style={styles.infoBarText}>
        {`${job.location_town || job.location_city}`}
      </Text>
    </InfoBarElement>
  </View>
)

InfoBar.propTypes = {
  job: JobPropType
}

export default InfoBar
