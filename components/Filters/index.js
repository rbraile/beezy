import React, { useState } from 'react'

const Filters = ({ handlerSearch }) => {
  const [search, setSearch] = useState('')

  const handleInputChange = e => {
    const { value } = e.currentTarget
    setSearch(value)
  }

  const handlerClick = (event, next) => {
    event.preventDefault()
    event.stopPropagation()
    if (search.trim().length >= 1) {
      next(search.trim())
    }
  }

  return (
    <div>
      <h2>Filters</h2>
      <form>
        <input
          type='text'
          name='search'
          value={search}
          onChange={handleInputChange}
        />
        <button type='submit' onClick={e => handlerClick(e, handlerSearch)}>
          Filter
        </button>
      </form>
    </div>
  )
}

export default Filters
