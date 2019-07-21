import React from 'react'
import Fields from '../Fields'
import Spinner from '../Spinner'
import Error from '../Error'
import { Container } from './styled'

const DetailCharacter = ({ character }) => {
  const detailList = [
    'name',
    'gender',
    'height',
    'hair_color',
    'skin_color',
    'eye_color',
    'birth_year',
    'mass',
  ]
  return character.loading ? (
    <Spinner />
  ) : (
    <Container>
      <h2>Datails:</h2>
      {character.error.length ? (
        <Error message={character.error} />
      ) : (
        <Fields detailList={detailList} details={character.detail} />
      )}
    </Container>
  )
}

export default DetailCharacter
