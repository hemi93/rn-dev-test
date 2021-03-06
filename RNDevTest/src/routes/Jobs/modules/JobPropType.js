import PropTypes from 'prop-types'

export default PropTypes.shape({
  address: PropTypes.string.isRequired,
  comments: PropTypes.string,
  company_img_v: PropTypes.string.isRequired,
  company_img: PropTypes.string.isRequired,
  company_type: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  employer_id: PropTypes.string.isRequired,
  employer_img_v: PropTypes.string.isRequired,
  employer_img: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
  expired: PropTypes.string.isRequired,
  first_name: PropTypes.string.isRequired,
  full_description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  job_term: PropTypes.string,
  key_skills: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  latitude: PropTypes.string.isRequired,
  living_wage: PropTypes.string,
  location_city: PropTypes.string.isRequired,
  location_country: PropTypes.string,
  location_town: PropTypes.string,
  longitude: PropTypes.string.isRequired,
  masked_rate: PropTypes.string,
  multiple: PropTypes.string.isRequired,
  postcode: PropTypes.string.isRequired,
  posted: PropTypes.string.isRequired,
  published: PropTypes.string.isRequired,
  rate_type: PropTypes.string.isRequired,
  rate: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  total: PropTypes.string,
  tronc: PropTypes.string.isRequired,
  updated: PropTypes.string.isRequired
})
