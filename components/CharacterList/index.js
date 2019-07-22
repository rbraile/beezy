import React from 'react'
import orderBy from 'lodash/orderBy'
import Card from '../../components/Card'
import Filters from '../../components/Filters'
import Order from '../../components/Order'

import {
  CharacterListContainer,
  CharacterSection,
  Aside,
  Container,
} from './styled'
import Breadcrumb from '../Breadcrumb'

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
  search,
  clearList,
}) => {
  return (
    <CharacterSection>
      <Breadcrumb />
      <h1>List of Star Wars characters</h1>

      <Container>
        <Aside>
          {search !== '' && (
            <p>
              Search: <strong>{search}</strong>
            </p>
          )}
          <Filters clearList={clearList} handlerSearch={handlerSearch} />
          <Order handlerSetOrder={handlerSetOrder} order={order} />
        </Aside>
        <CharacterListContainer>
          {!charactersList.length ? (
            <p>
              There is no results: <strong>{search}</strong>
            </p>
          ) : (
            orden(charactersList, order).map(character => (
              <Card key={character.name} {...character} />
            ))
          )}
        </CharacterListContainer>
      </Container>
    </CharacterSection>
  )
}

export default CharacterList
