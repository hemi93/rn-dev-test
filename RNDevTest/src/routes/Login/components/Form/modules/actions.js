import { SUBMIT_SIGN_IN } from '../../../modules/constants'

export const onSubmit = (values) => ({
  type: SUBMIT_SIGN_IN,
  payload: values
})
