import React from 'react'
import Spinner from '../Spinner'

const Species = ({ species }) => {
  return species.loading ? (
    <Spinner />
  ) : (
    species.list.map(specie => (
      <div key={specie.url}>
        <h2>Specie</h2>
        <p>
          <span>Nombre: </span>
          {specie.name}
        </p>
        <p>
          <span>Clasificación: </span>
          {specie.classification}
        </p>
        <p>
          <span>Lenguaje: </span>
          {specie.language}
        </p>
        <p>
          <span>Designation: </span>
          {specie.designation}
        </p>
      </div>
    ))
  )
}

export default Species
