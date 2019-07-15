import React, { Component } from 'react'
import { connect } from 'react-redux'
import withData from '../../utils/withData'

import { getCharacterDetail } from '../../actions'
import Spinner from '../Spinner'
import { Label } from './styled'

class DetailCharacterPage extends Component {
  async componentDidMount() {
    // await this.props.getCharacterHomeworld(this.props.character.detail.homeworld)
  }

  render() {
    return <p>jj</p>
  }
}

const mapStateToProps = state => {
  return {
    character: state.character,
  }
}

const mapDispatchToProps = {
  getCharacterDetail,
}

const DetailCharacterPageWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailCharacterPage)

export default withData(DetailCharacterPageWithRedux)
