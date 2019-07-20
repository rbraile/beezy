import React from 'react'
import {
  PaginationItem,
  PaginationContainer,
  PaginationItemDisabled,
} from './styled'
const amountPerPage = 10

function createItem(pageNumber, handlerOnclick, selectedPage, key, simbol) {
  return parseInt(selectedPage, 10) !== pageNumber ? (
    <PaginationItem key={key} onClick={() => handlerOnclick(`${pageNumber}`)}>
      {simbol ? simbol : pageNumber}
    </PaginationItem>
  ) : (
    <PaginationItemDisabled key={key}>{pageNumber}</PaginationItemDisabled>
  )
}

function navigator(item, onclick, selectedPage, simbol) {
  const pageNum = item.split('page=')[1].split('&')[0]

  return createItem(
    pageNum,
    onclick,
    selectedPage,
    `pagination-navigator-${pageNum}`,
    simbol
  )
}

const Pagination = ({ selectedPage, next, prev, count, onclick }) => {
  const pages = []
  const totalPages = Math.ceil(
    parseInt(count, 10) / parseInt(amountPerPage, 10)
  )
  for (let i = 1; i <= totalPages; i++) {
    pages.push(createItem(i, onclick, selectedPage, `pagination-${i}`))
  }

  prev && pages.unshift(navigator(prev, onclick, selectedPage, '«'))
  next && pages.push(navigator(next, onclick, selectedPage, '»'))

  return <PaginationContainer>{pages}</PaginationContainer>
}

export default Pagination
