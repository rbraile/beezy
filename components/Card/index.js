import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPortrait } from '@fortawesome/free-solid-svg-icons'
import { CardContainer, DescriptionContainer, Name } from './styled'

const Card = character => {
  return (
    <CardContainer key={character.mass}>
      <FontAwesomeIcon icon={faPortrait} size='8x' />
      <DescriptionContainer>
        <Name>{character.name}</Name>
        <p>
          Gender: <strong>{character.gender}</strong>
        </p>
        <p>
          Height: <strong>{character.height}</strong>
        </p>
        <p>
          Hair color: <strong>{character.hair_color}</strong>
        </p>
        <p>
          Skin color: <strong>{character.skin_color}</strong>
        </p>
        <p>
          Eye color: <strong>{character.eye_color}</strong>
        </p>
        <p>
          nombre: <strong>{character.name}</strong>
        </p>
        <p>
          Birth year: <strong>{character.birth_year}</strong>
        </p>
        <p>
          Mass: <strong>{character.mass}</strong>
        </p>
      </DescriptionContainer>
    </CardContainer>
  )
}

export default Card
