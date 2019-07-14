import React from 'react'
import Card from '../../components/Card'
import { CharacterListContainer, CharacterSection, Aside } from './styled'
import Filters from '../../components/Filters'
import Order from '../../components/Order'
import orderBy from 'lodash/orderBy'

const orden = (charactersList, order) => {
  if (order !== {}) {
    return orderBy(charactersList, [`${order.column}`], [`${order.type}`])
  }
}

const CharacterList = ({
  charactersList,
  handlerSetOrder,
  order,
  handlerSearch,
}) => {
  return (
    <CharacterSection>
      <Aside>
        <Filters handlerSearch={handlerSearch} />
        <Order handlerSetOrder={handlerSetOrder} order={order} />
      </Aside>
      <CharacterListContainer>
        {charactersList &&
          orden(charactersList, order).map(character => (
            <Card key={character.name} {...character} />
          ))}
      </CharacterListContainer>
    </CharacterSection>
  )
}

export default CharacterList
