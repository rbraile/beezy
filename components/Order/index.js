import React from 'react'

const handlerClick = (next, order, column) => {
  let newOrder = { column: column, type: 'asc' }
  if (
    order.hasOwnProperty('column') &&
    order.column === column &&
    order.type === 'asc'
  ) {
    newOrder = { column: column, type: 'desc' }
  }
  next(newOrder)
}

const Order = ({ handlerSetOrder, order }) => {
  return (
    <>
      <h2>Order</h2>
      <a onClick={() => handlerClick(handlerSetOrder, order, 'name')}>
        By name
      </a>
      <a onClick={() => handlerClick(handlerSetOrder, order, 'gender')}>
        By gender
      </a>
    </>
  )
}
export default Order
