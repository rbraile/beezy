import React from 'react'
import {
  PaginationItem,
  PaginationContainer,
  PaginationItemDisabled,
} from './styled'
const amountPerPage = 10

function createItem(page, handlerOnclick, selectedPage, key, simbol) {
  return parseInt(selectedPage, 10) !== page ? (
    <PaginationItem key={key} onClick={() => handlerOnclick(page)}>
      {simbol ? simbol : page}
    </PaginationItem>
  ) : (
    <PaginationItemDisabled key={key}>{page}</PaginationItemDisabled>
  )
}

function navigator(item, onclick, selectedPage, simbol) {
  let last = item.length
  if (item.indexOf('&') !== -1) {
    last = item.indexOf('&')
  }

  const pageNum = item.substring(item.indexOf('=') + 1, last)

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

  if (prev) {
    pages.unshift(navigator(prev, onclick, selectedPage, '«'))
  }

  if (next) {
    pages.push(navigator(next, onclick, selectedPage, '»'))
  }

  return <PaginationContainer>{pages}</PaginationContainer>
}

export default Pagination
