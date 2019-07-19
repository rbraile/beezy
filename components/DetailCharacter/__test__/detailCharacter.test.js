import React from 'react'
import Enzyme, { mount, shallow } from 'enzyme'

import DetailCharacter from '../index'

describe('TEST = CHARACTERLIST', () => {
  const props = {
    character: {
      loading: false,
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

  test('TEST = CHARACTERLIST = MOUNT ', () => {
    const wrapper = mount(<DetailCharacter {...props} />)
    expect(wrapper.find('p')).toHaveLength(8)
  })
})
