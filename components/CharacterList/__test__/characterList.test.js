import React from 'react'
import Enzyme, { mount, shallow } from 'enzyme'

import CharacterList from '../index'

describe('TEST = CHARACTERLIST', () => {
  test('TEST = CHARACTERLIST = ', () => {
    const wrapper = shallow(<CharacterList />)
    expect(wrapper).toMatchSnapshot()
  })
})