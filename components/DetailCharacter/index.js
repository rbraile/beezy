import React from 'react'

const DetailCharacter = ({ character }) => {
  return character.loading ? (
    <Spinner />
  ) : (
    <div>
      <p>
        <span>Name:</span>
        <strong>{character.detail.name}</strong>
      </p>
      <p>
        <span>Gender:</span>
        <strong>{character.detail.gender}</strong>
      </p>
      <p>
        <span>Height: </span>
        <strong>{character.detail.height}</strong>
      </p>
      <p>
        <span>Hair color: </span>
        <strong>{character.detail.hair_color}</strong>
      </p>
      <p>
        <span>Skin color: </span>
        <strong>{character.detail.skin_color}</strong>
      </p>
      <p>
        <span>Eye color: </span>
        <strong>{character.detail.eye_color}</strong>
      </p>
      <p>
        <span>Birth year: </span>
        <strong>{character.detail.birth_year}</strong>
      </p>
      <p>
        <span>Mass: </span>
        <strong>{character.detail.mass}</strong>
      </p>
    </div>
  )
}

export default DetailCharacter
