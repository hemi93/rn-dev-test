import React, { Component } from 'react'
import { ListView } from 'react-native'
import PropTypes from 'prop-types'
import InfiniteScrollView from 'react-native-infinite-scroll-view'
import FullPageLayout from '../../../layouts/FullPageLayout'
import JobListItem from './JobListItem'
import styles from './styles'

export default class Jobs extends Component {
  static propTypes = {
    canLoadMore: PropTypes.bool.isRequired,
    dataSource: PropTypes.object.isRequired,
    loadMore: PropTypes.func.isRequired
  }

  componentDidMount () {
    this.props.loadMore()
  }

  render () {
    const { dataSource, loadMore, canLoadMore } = this.props

    return (
      <FullPageLayout>
        {dataSource && (
          <ListView
            dataSource={dataSource}
            initialListSize={0}
            pageSize={10}
            canLoadMore={canLoadMore}
            onLoadMoreAsync={() => loadMore()}
            onEndReachedThreshold={10}
            renderRow={(job) => <JobListItem job={job} />}
            renderScrollComponent={props => <InfiniteScrollView {...props} />}
            style={styles.container}
          />
        )}
      </FullPageLayout>
    )
  }
}
