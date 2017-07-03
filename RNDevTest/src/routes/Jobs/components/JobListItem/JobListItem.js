import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'
import JobPropType from '../../modules/JobPropType'
import getCompanyLogoURI from './modules/getCompanyLogoURI'

const JobListItem = ({ job }) => (
  <View style={styles.container}>
    <Image
      source={{ uri: getCompanyLogoURI(job) }}
      style={styles.companyImg}
    />
    <View style={styles.infoContainer}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>
          {job.role}
        </Text>
        <Text style={styles.companyName}>
          {job.company}
        </Text>
        <Text style={styles.location}>
          {`${job.location_town || job.location_city}`}
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.rate}>
          {`${job.rate}£`}
        </Text>
        <Text style={styles.rateType}>
          {`${job.rate_type}`}
        </Text>
      </View>
    </View>
  </View>
)

JobListItem.propTypes = {
  job: JobPropType
}

export default JobListItem
