import React from 'react'
import Spinner from '../Spinner'
import Fields from '../Fields'
import { Container } from './styled'

const Species = ({ species }) => {
  const detailList = ['name', 'classification', 'language', 'designation']
  return species.loading ? (
    <Spinner />
  ) : (
    <Container>
      <h2>Specie</h2>
      {species.list.map(specie => {
        return (
          <div key={specie.url}>
            <Fields detailList={detailList} details={specie} />
          </div>
        )
      })}
    </Container>
  )
}

export default Species
