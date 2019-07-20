import React from 'react'
import { mount, shallow } from 'enzyme'

import Card from '../index'

describe('TEST = CARD', () => {
  const character = {
    name: 'Anakin Skywalker',
    height: '188',
    mass: '84',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '41.9BBY',
    gender: 'male',
    url: 'https://swapi.co/api/people/1/',
  }

  test('TEST = CARD = SNAPSHOT', () => {
    const wrapper = mount(<Card {...character} />)
    expect(wrapper).toMatchSnapshot()
  })

  test('TEST = CARD = Has the 87 paragraph one for each detail', () => {
    const wrapper = mount(<Card {...character} />)
    expect(wrapper.find('p')).toHaveLength(7)
  })
})
