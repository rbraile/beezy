import React from 'react'
import { mount, shallow } from 'enzyme'

import Error from '../index'

describe('TEST = Error', () => {
  test('TEST = Error = SNAPSHOT', () => {
    const wrapper = mount(<Error />)
    expect(wrapper).toMatchSnapshot()
  })

  test('TEST = Error = SNAPSHOT', () => {
    const wrapper = mount(<Error message='error 404' />)

    expect(
      wrapper
        .find('styled__Message')
        .find('p')
        .text()
    ).toBe('error 404')
  })
})

// styled__Message
