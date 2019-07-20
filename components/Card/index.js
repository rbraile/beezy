import React from 'react'
import Link from 'next/link'
import { CardContainer, DescriptionContainer, Name } from './styled'
import Fields from '../Fields'

const Card = character => {
  const id = character.url.split('people/')[1].replace('/', '')
  const detailList = [
    'gender',
    'height',
    'hair_color',
    'skin_color',
    'eye_color',
    'birth_year',
    'mass',
  ]
  return (
    <CardContainer key={`people-${id}`}>
      <Link href={`/detail?id=${id}`}>
        <DescriptionContainer>
          <Name>{character.name}</Name>
          <Fields detailList={detailList} details={character} />
        </DescriptionContainer>
      </Link>
    </CardContainer>
  )
}

export default Card
