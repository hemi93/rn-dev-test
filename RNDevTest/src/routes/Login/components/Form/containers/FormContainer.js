import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { bindActionCreators } from 'redux'
import Form from '../components/Form'
import validate from '../modules/validate'
import { onSubmit } from '../modules/actions'
import Config from 'react-native-config' // FIXME Only needed during debugging

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onSubmit
}, dispatch)

// FIXME Populate with debug values
const mapStateToProps = (state) => ({
  initialValues: {
    email: Config.TEST_ACCOUNT_EMAIL || '',
    password: Config.TEST_ACCOUNT_PASSWORD || ''
  }
})

const ReduxForm = reduxForm({
  form: 'login',
  validate
})(Form)

export default connect(mapStateToProps, mapDispatchToProps)(ReduxForm)
