import React from 'react'
import Spinner from '../Spinner'
import Fields from '../Fields'
import Error from '../Error'
import { Container } from './styled'

const Planet = ({ planet }) => {
  const detailList = ['name', 'climate', 'gravity', 'terrain', 'population']
  return planet.loading ? (
    <Spinner />
  ) : (
    <Container>
      <h2>Home world</h2>
      {planet.error.length ? (
        <Error message={planet.error} />
      ) : (
        <Fields detailList={detailList} details={planet.detail} />
      )}
    </Container>
  )
}

export default Planet
