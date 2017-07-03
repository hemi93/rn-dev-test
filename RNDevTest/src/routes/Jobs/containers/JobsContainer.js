import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Jobs from '../components/Jobs'

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch)

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Jobs)
