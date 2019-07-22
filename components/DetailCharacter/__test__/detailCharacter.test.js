import React from 'react'
import { mount, shallow } from 'enzyme'

import DetailCharacter from '../index'

describe('TEST = CHARACTERLIST', () => {
  const props = {
    character: {
      loading: false,
      error: '',
      detail: {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        hair_color: 'blond',
        skin_color: 'fair',
        eye_color: 'blue',
        birth_year: '41.9BBY',
        gender: 'male',
      },
    },
  }

  test('TEST = CHARACTERLIST = SNAPSHOT', () => {
    const wrapper = shallow(<DetailCharacter {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  test('TEST = CHARACTERLIST = Check when the loading is in true show the Spinner', () => {
    const character = { loading: true }
    const wrapper = shallow(<DetailCharacter character={character} />)
    expect(wrapper.find('Spinner')).toHaveLength(1)
  })

  test('TEST = CHARACTERLIST = Has the 8 paragraph one for each detail', () => {
    const wrapper = mount(<DetailCharacter {...props} />)
    expect(wrapper.find('p')).toHaveLength(8)
  })
})
