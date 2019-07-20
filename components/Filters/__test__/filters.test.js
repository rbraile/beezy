import React from 'react'
import { mount, shallow } from 'enzyme'

import Filters from '../index'

describe('TEST = CHARACTERLIST', () => {
  test('TEST = FILTERS = SNAPSHOT', () => {
    const wrapper = mount(<Filters />)
    expect(wrapper).toMatchSnapshot()
  })

  test('TEST = FILTERS = Check has a 1 form', () => {
    const wrapper = mount(<Filters />)
    expect(wrapper.find('form')).toHaveLength(1)
  })
})
