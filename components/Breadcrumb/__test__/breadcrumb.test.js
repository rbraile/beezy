import React from 'react'
import { mount, shallow } from 'enzyme'

import Breadcrumb from '../index'

describe('TEST = Breadcrumb', () => {
  test('TEST = Breadcrumb = SNAPSHOT', () => {
    const wrapper = mount(<Breadcrumb />)
    expect(wrapper).toMatchSnapshot()
  })
})
