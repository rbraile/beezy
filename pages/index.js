import React, { Component } from 'react'
import { connect } from 'react-redux'
import withData from '../utils/withData'

import {
  getCharacterList,
  setSelectedPage,
  setOrder,
  setSearch,
  clearOrder,
} from '../actions'
import MainLayout from '../components/MainLayout'
import CharacterList from '../components/CharacterList'
import Spinner from '../components/Spinner'
import Error from '../components/Error'
import Pagination from '../components/Pagination'

class Index extends Component {
  state = {
    search: '',
  }
  async componentDidMount() {
    !this.props.characters.results.length &&
      (await this.props.getCharacterList())
  }

  handlePaginate = page => {
    const params = { page }
    if (!this.props.searchString.length) {
      params.search = this.props.searchString.value
    }
    this.props.setSelectedPage(page)
    this.props.getCharacterList(params)
  }

  handlerSetOrder = order => {
    this.props.setOrder(order)
  }

  handlerSearch = search => {
    this.setState({ search })
    const params = { search }
    this.props.setSelectedPage(1)
    this.props.setSearch(search)
    this.props.getCharacterList(params)
  }

  clearList = () => {
    this.props.clearOrder()
    this.props.getCharacterList()
  }

  render() {
    return (
      <MainLayout>
        {this.props.characters.loading ? (
          <Spinner />
        ) : (
          <>
            {this.props.characters.error ? (
              <Error message={this.props.characters.error} />
            ) : (
              <CharacterList
                handlerSetOrder={this.handlerSetOrder}
                charactersList={this.props.characters.results}
                order={this.props.order}
                handlerSearch={this.handlerSearch}
                search={this.state.search}
                clearList={this.clearList}
              />
            )}
            <Pagination
              selectedPage={this.props.paginate.selectedPage}
              next={this.props.characters.next}
              prev={this.props.characters.previous}
              count={this.props.characters.count}
              onclick={this.handlePaginate}
            />
          </>
        )}
      </MainLayout>
    )
  }
}

const mapStateToProps = state => {
  return {
    characters: state.characters,
    order: state.order,
    searchString: state.searchString,
    paginate: state.paginate,
  }
}

const mapDispatchToProps = {
  getCharacterList,
  setSelectedPage,
  setOrder,
  setSearch,
  clearOrder,
}

const IndexPageWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
export default withData(IndexPageWithRedux)
