import React, { Component } from 'react'
import { ListView } from 'react-native'
import PropTypes from 'prop-types'
import InfiniteScrollView from 'react-native-infinite-scroll-view'
import FullPageLayout from '../../../layouts/FullPageLayout'
import Spinner from '../../../components/Spinner'
import JobListItem from './JobListItem'
import styles from './styles'

export default class Jobs extends Component {
  static propTypes = {
    canLoadMore: PropTypes.bool.isRequired,
    dataSource: PropTypes.object,
    loadMore: PropTypes.func.isRequired
  }

  componentDidMount () {
    this.props.loadMore()
  }

  render () {
    const { dataSource, loadMore, canLoadMore } = this.props

    return (
      <FullPageLayout>
        {!dataSource && <Spinner />}
        {dataSource && (
          <ListView
            canLoadMore={canLoadMore}
            dataSource={dataSource}
            enableEmptySections
            initialListSize={0}
            onEndReachedThreshold={10}
            onLoadMoreAsync={() => loadMore()}
            pageSize={10}
            renderRow={(job) => <JobListItem job={job} />}
            renderScrollComponent={props => <InfiniteScrollView {...props} />}
            style={styles.container}
          />
        )}
      </FullPageLayout>
    )
  }
}
