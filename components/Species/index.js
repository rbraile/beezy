import React from 'react'
import Spinner from '../Spinner'
import Fields from '../Fields'

const Species = ({ species }) => {
  const detailList = ['name', 'classification', 'language', 'designation']
  return species.loading ? (
    <Spinner />
  ) : (
    species.list.map(specie => {
      return (
        <div key={specie.url}>
          <h2>Specie</h2>
          <Fields detailList={detailList} details={specie} />
        </div>
      )
    })
  )
}

export default Species
