import React from 'react'
import Spinner from '../Spinner'
import Fields from '../Fields'

const Planet = ({ planet }) => {
  const detailList = ['name', 'climate', 'gravity', 'terrain', 'population']
  return planet.loading ? (
    <Spinner />
  ) : (
    <div>
      <h2>Home world</h2>
      <Fields detailList={detailList} details={planet.detail} />
    </div>
  )
}

export default Planet
