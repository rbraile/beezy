import React, { Component } from 'react'
import { connect } from 'react-redux'
import withData from '../utils/withData'

import { getCharacterDetail, getCharacterPlanet } from '../actions'
import MainLayout from '../components/MainLayout'
import Spinner from '../components/Spinner'
import DetailCharacterPage from '../components/DetailCharacterPage'

import { withRouter } from 'next/router'

// class Page extends React.Component {
//   render() {

//     console.log(router)
//     return <div>{router.pathname}</div>
//   }
// }

class Detail extends Component {
  async componentDidMount() {
    await this.props.getCharacterDetail(this.props.router.query.id)
    await this.props.getCharacterPlanet(this.props.character.detail.homeworld)
  }

  render() {
    console.log('renderrr---->', this.props)
    return (
      <MainLayout>
        {this.props.character.loading ? (
          <Spinner />
        ) : (
          <>
            <div>
              <h1>Pagina de Detalle</h1>
              <p>
                <span>Gender:</span>
                <strong>{this.props.character.detail.gender}</strong>
              </p>
              <p>
                <span>Height: </span>
                <strong>{this.props.character.detail.height}</strong>
              </p>
              <p>
                <span>Hair color: </span>
                <strong>{this.props.character.detail.hair_color}</strong>
              </p>
              <p>
                <span>Skin color: </span>
                <strong>{this.props.character.detail.skin_color}</strong>
              </p>
              <p>
                <span>Eye color: </span>
                <strong>{this.props.character.detail.eye_color}</strong>
              </p>
              <p>
                <span>Birth year: </span>
                <strong>{this.props.character.detail.birth_year}</strong>
              </p>
              <p>
                <span>Mass: </span>
                <strong>{this.props.character.detail.mass}</strong>
              </p>
            </div>
            {this.props.planet.loading ? (
              <Spinner />
            ) : (
              <div>
                <h2>Home wordl</h2>
                <p>
                  <span>Nombre: </span>
                  {this.props.planet.detail.name}
                </p>
                <p>
                  <span>Clima: </span>
                  {this.props.planet.detail.climate}
                </p>
                <p>
                  <span>Gravedad: </span>
                  {this.props.planet.detail.gravity}
                </p>
                <p>
                  <span>Terreno: </span>
                  {this.props.planet.detail.terrain}
                </p>
                <p>
                  <span>Poblacion: </span>
                  {this.props.planet.detail.population}
                </p>
              </div>
            )}
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
