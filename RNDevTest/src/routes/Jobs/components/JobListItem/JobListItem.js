import React from 'react'
import { View, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './styles'
import JobPropType from '../../modules/JobPropType'
import InfoBarElement from './InfoBarElement'
import InfoBar from './InfoBar'
import getCompanyLogoURI from './modules/getCompanyLogoURI'

const JobListItem = ({ job }) => (
  <View style={styles.container}>
    <Image
      source={{ uri: getCompanyLogoURI(job) }}
      style={styles.companyImg}
    >
      <View style={styles.titlesContainer}>
        <Text style={styles.title}>
          {job.role}
        </Text>
        <Text style={styles.companyName}>
          {job.company}
        </Text>
      </View>
    </Image>
    <InfoBar>
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
    </InfoBar>
  </View>
)

JobListItem.propTypes = {
  job: JobPropType
}

export default JobListItem
