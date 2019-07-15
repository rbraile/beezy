import React from 'react'
import Link from 'next/link'
import { CardContainer, DescriptionContainer, Name, Label } from './styled'

const Card = character => {
  const id = character.url.split('people/')[1].replace('/', '')
  return (
    <CardContainer key={`people-${id}`}>
      <Link href={`/detail?id=${id}`}>
        <DescriptionContainer>
          <Name>{character.name}</Name>
          <p>
            <Label>Gender:</Label>
            <strong>{character.gender}</strong>
          </p>
          <p>
            <Label>Height: </Label>
            <strong>{character.height}</strong>
          </p>
          <p>
            <Label>Hair color: </Label>
            <strong>{character.hair_color}</strong>
          </p>
          <p>
            <Label>Skin color: </Label>
            <strong>{character.skin_color}</strong>
          </p>
          <p>
            <Label>Eye color: </Label>
            <strong>{character.eye_color}</strong>
          </p>
          <p>
            <Label>Birth year: </Label>
            <strong>{character.birth_year}</strong>
          </p>
          <p>
            <Label>Mass: </Label>
            <strong>{character.mass}</strong>
          </p>
        </DescriptionContainer>
      </Link>
    </CardContainer>
  )
}

export default Card
