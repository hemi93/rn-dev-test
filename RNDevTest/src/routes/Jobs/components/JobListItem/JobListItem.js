import React from 'react'
import { View, Text, Image } from 'react-native'
import JobPropType from '../../modules/JobPropType'
import getCompanyLogoURI from './modules/getCompanyLogoURI'
import InfoBar from './InfoBar'
import styles from './styles'

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

    <InfoBar job={job} />
  </View>
)

JobListItem.propTypes = {
  job: JobPropType
}

export default JobListItem
