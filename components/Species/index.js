import React from 'react'
import Spinner from '../Spinner'
import Fields from '../Fields'
import Error from '../Error'
import { Container } from './styled'

const Species = ({ species }) => {
  const detailList = ['name', 'classification', 'language', 'designation']
  return species.loading ? (
    <Spinner />
  ) : (
    <Container>
      <h2>Specie</h2>
      {species.error ? (
        <Error message={species.error} />
      ) : species.list.length ? (
        species.list.map(specie => {
          return (
            <div key={specie.url}>
              <Fields detailList={detailList} details={specie} />
            </div>
          )
        })
      ) : (
        <p>Species there is no</p>
      )}
    </Container>
  )
}

export default Species
