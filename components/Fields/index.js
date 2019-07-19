import React from 'react'

const Fields = ({ detailList, details }) => {
  return detailList.map(detail => (
    <p key={detail + details[detail]}>
      <span>{detail}: </span>
      <strong>{details[detail]}</strong>
    </p>
  ))
}

export default Fields
