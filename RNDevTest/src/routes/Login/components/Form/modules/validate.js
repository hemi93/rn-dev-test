// This would usually be translated using one of I18n libs
const IS_REQUIRED_ERROR_MESSAGE = 'is required'

export default (values) => {
  const errors = {}

  if (!values.email) {
    errors.email = IS_REQUIRED_ERROR_MESSAGE
  }

  if (!values.password) {
    errors.password = IS_REQUIRED_ERROR_MESSAGE
  }

  return errors
}
