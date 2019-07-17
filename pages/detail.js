import React, { Component } from 'react'
import { connect } from 'react-redux'
import withData from '../utils/withData'
import { withRouter } from 'next/router'
import isEmpty from 'lodash/isEmpty'

import { getCharacterDetail, getCharacterPlanet } from '../actions'

import MainLayout from '../components/MainLayout'
import Spinner from '../components/Spinner'
import DetailCharacterPage from '../components/DetailCharacterPage'
import Species from '../components/Species'
import Planet from '../components/Planet'
import DetailCharacter from '../components/DetailCharacter'

class Detail extends Component {
  async componentDidMount() {
    await this.props.getCharacterDetail(this.props.router.query.id)
    await this.props.getCharacterPlanet(this.props.character.detail.homeworld)
  }

  render() {
    return (
      <MainLayout>
        {this.props.character.loading ? (
          <Spinner />
        ) : (
          <>
            <div>
              <h1>Pagina de Detalle</h1>
            </div>
            <>
              <DetailCharacter character={this.props.character} />
              <Planet planet={this.props.planet} />
              <Species species={this.props.character.species} />
            </>
          </>
        )}
      </MainLayout>
    )
  }
}

const mapStateToProps = state => {
  return {
    character: state.character,
    planet: state.planet,
  }
}

const mapDispatchToProps = {
  getCharacterDetail,
  getCharacterPlanet,
}

const DetailPageWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail)
const DetailPageWithRouter = withRouter(DetailPageWithRedux)

export default withData(DetailPageWithRouter)
