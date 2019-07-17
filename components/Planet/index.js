import React from 'react'
import Spinner from '../Spinner'

const Planet = ({ planet }) => {
  return planet.loading ? (
    <Spinner />
  ) : (
    <div>
      <h2>Home wordl</h2>
      <p>
        <span>Nombre: </span>
        {planet.detail.name}
      </p>
      <p>
        <span>Clima: </span>
        {planet.detail.climate}
      </p>
      <p>
        <span>Gravedad: </span>
        {planet.detail.gravity}
      </p>
      <p>
        <span>Terreno: </span>
        {planet.detail.terrain}
      </p>
      <p>
        <span>Poblacion: </span>
        {planet.detail.population}
      </p>
    </div>
  )
}

export default Planet
