import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { bindActionCreators } from 'redux'
import Form from '../components/Form'
import validate from '../modules/validate'
import { onSubmit } from '../modules/actions'

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onSubmit
}, dispatch)

const mapStateToProps = (state) => ({})

const ReduxForm = reduxForm({
  form: 'login',
  validate
})(Form)

export default connect(mapStateToProps, mapDispatchToProps)(ReduxForm)