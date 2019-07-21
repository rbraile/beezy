import React from 'react'
import { Message } from './styled'

const Error = ({ message }) => {
  return (
    <div>
      <Message>{message}</Message>
    </div>
  )
}

export default Error
