import Config from 'react-native-config'

export default (job) => {
  const baseAddress = Config.IMAGE_CDN_BASE_ADDRESS

  return `${baseAddress}/c_thumb/v${job.employer_img_v}/${job.employer_img}`
}
