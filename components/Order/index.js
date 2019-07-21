import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

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
      <ul>
        <li>
          <a onClick={() => handlerClick(handlerSetOrder, order, 'name')}>
            <FontAwesomeIcon
              icon={
                order && order.column === 'name' && order.type === 'asc'
                  ? faArrowDown
                  : faArrowUp
              }
              size='sm'
            />
            By name
          </a>
        </li>
        <li>
          <a onClick={() => handlerClick(handlerSetOrder, order, 'gender')}>
            <FontAwesomeIcon
              icon={
                order && order.column === 'gender' && order.type === 'asc'
                  ? faArrowDown
                  : faArrowUp
              }
              size='sm'
            />
            By gender
          </a>
        </li>
      </ul>
    </>
  )
}
export default Order
