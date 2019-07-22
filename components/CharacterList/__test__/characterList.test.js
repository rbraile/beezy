import React from 'react'
import { shallow, mount } from 'enzyme'

import CharacterList from '../index'

describe('TEST = CHARACTERLIST', () => {
  const handlerSetOrder = jest.fn()
  const handlerSearch = jest.fn()
  const clearList = jest.fn()

  const charactersList = {
    results: [],
  }
  const order = { column: 'name', type: 'asc' }
  test('TEST = CHARACTERLIST = SNAPSHOT', () => {
    const wrapper = shallow(
      <CharacterList
        handlerSetOrder={handlerSetOrder}
        charactersList={charactersList.results}
        order={order}
        handlerSearch={handlerSearch}
        search=''
        clearList={clearList}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  test('TEST = CHARACTERLIST = Check search param', () => {
    const charactersList = {
      results: [
        {
          name: 'Luke Skywalker',
          height: '172',
          mass: '77',
          hair_color: 'blond',
          skin_color: 'fair',
          eye_color: 'blue',
          birth_year: '19BBY',
          gender: 'male',
        },
      ],
    }

    const wrapper = shallow(
      <CharacterList
        handlerSetOrder={handlerSetOrder}
        charactersList={charactersList.results}
        order={order}
        handlerSearch={handlerSearch}
        clearList={clearList}
      />
    )

    expect(wrapper.find('Card')).toHaveLength(1)
  })

  test('TEST = CHARACTERLIST = Check search param', () => {
    const searchWord = 'yoda'
    const wrapper = shallow(
      <CharacterList
        handlerSetOrder={handlerSetOrder}
        charactersList={charactersList.results}
        order={order}
        handlerSearch={handlerSearch}
        search={searchWord}
        clearList={clearList}
      />
    )

    const search = wrapper
      .find('styled__Aside')
      .find('strong')
      .text()

    expect(search).toBe('yoda')
  })
})
