import React from 'react'
import Spinner from '../Spinner'
import Fields from '../Fields'
import { Container } from './styled'

const Planet = ({ planet }) => {
  const detailList = ['name', 'climate', 'gravity', 'terrain', 'population']
  return planet.loading ? (
    <Spinner />
  ) : (
    <Container>
      <h2>Home world</h2>
      <Fields detailList={detailList} details={planet.detail} />
    </Container>
  )
}

export default Planet
