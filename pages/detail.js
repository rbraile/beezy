import React, { Component } from 'react'
import { connect } from 'react-redux'
import withData from '../utils/withData'
import { withRouter } from 'next/router'

import { getCharacterDetail, getCharacterPlanet } from '../actions'

import MainLayout from '../components/MainLayout'
import Spinner from '../components/Spinner'
import Species from '../components/Species'
import Planet from '../components/Planet'
import DetailCharacter from '../components/DetailCharacter'
import Breadcrumb from '../components/Breadcrumb'
import { Container, Annex } from '../static/styled'

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
            <Breadcrumb page={this.props.character.detail.name} />
            <h1>Details Page</h1>
            <Container>
              <DetailCharacter character={this.props.character} />
              <Annex>
                <Planet planet={this.props.planet} />
                <Species species={this.props.character.species} />
              </Annex>
            </Container>
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
