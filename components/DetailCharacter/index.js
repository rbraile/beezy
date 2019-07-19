import React from 'react'
import Fields from '../Fields'

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
    <Fields detailList={detailList} details={character.detail} />
  )
}

export default DetailCharacter
