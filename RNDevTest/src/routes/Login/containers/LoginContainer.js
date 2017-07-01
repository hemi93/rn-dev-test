import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Login from '../components/Login'

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Login)