import React, { Component } from 'react'
import { connect } from 'react-redux'
import withData from '../utils/withData'
import isEmpty from 'lodash/isEmpty'

import {
  getCharacterList,
  setSelectedPage,
  setOrder,
  setSearch,
} from '../actions'
import MainLayout from '../components/MainLayout'
import CharacterList from '../components/CharacterList'
import Spinner from '../components/Spinner'
import Pagination from '../components/Pagination'

class Index extends Component {
  async componentDidMount() {
    await this.props.getCharacterList()
  }

  handlePaginate = page => {
    const params = { page }
    if (!isEmpty(this.props.searchString)) {
      params.search = this.props.searchString.value
    }
    console.log('===>>>', page)
    console.log('===>>>', params)
    this.props.setSelectedPage(page)
    this.props.getCharacterList(params)
  }

  handlerSetOrder = order => {
    this.props.setOrder(order)
  }

  handlerSearch = search => {
    const params = { search }
    this.props.setSelectedPage(1)
    this.props.setSearch(search)
    this.props.getCharacterList(params)
  }

  render() {
    return (
      <MainLayout>
        <h1>List of Star Wars characters</h1>
        {this.props.characters.loading ? (
          <Spinner />
        ) : (
          <>
            <CharacterList
              handlerSetOrder={this.handlerSetOrder}
              charactersList={this.props.characters.results}
              order={this.props.order}
              handlerSearch={this.handlerSearch}
            />
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
}

const IndexPageWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
export default withData(IndexPageWithRedux)
