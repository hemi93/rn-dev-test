import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Jobs from '../components/Jobs'
import { loadMore } from '../modules/actions'

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loadMore
}, dispatch)

const mapStateToProps = (state) => ({
  canLoadMore: state.jobs.canLoadMore,
  dataSource: state.jobs.dataSource
})

export default connect(mapStateToProps, mapDispatchToProps)(Jobs)
