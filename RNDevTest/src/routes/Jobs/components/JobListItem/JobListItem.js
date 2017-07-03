import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import styles from './styles'

const JobListItem = ({ job }) => (
  <View style={styles.container}>
    <Text>
      {job.id}
    </Text>
  </View>
)

JobListItem.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.string.isRequired,
    employer_id: PropTypes.string.isRequired,
    job_term: PropTypes.string,
    role: PropTypes.string.isRequired,
    full_description: PropTypes.string.isRequired,
    key_skills: PropTypes.string.isRequired,
    experience: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    rate: PropTypes.string.isRequired,
    rate_type: PropTypes.string.isRequired,
    masked_rate: PropTypes.string,
    tronc: PropTypes.string.isRequired,
    living_wage: PropTypes.string,
    multiple: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    location_town: PropTypes.string,
    location_city: PropTypes.string.isRequired,
    postcode: PropTypes.string.isRequired,
    location_country: PropTypes.string,
    latitude: PropTypes.string.isRequired,
    longitude: PropTypes.string.isRequired,
    comments: PropTypes.string,
    posted: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    updated: PropTypes.string.isRequired,
    published: PropTypes.string.isRequired,
    expired: PropTypes.string.isRequired,
    first_name: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    company_type: PropTypes.string.isRequired,
    employer_img: PropTypes.string.isRequired,
    employer_img_v: PropTypes.string.isRequired,
    company_img: PropTypes.string.isRequired,
    company_img_v: PropTypes.string.isRequired,
    total: PropTypes.string
  })
}

export default JobListItem
