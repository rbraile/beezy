import React, { Component } from 'react'

import Header from '../Header'
import Footer from '../Footer'

import { GeneralContainer } from './styled'

export default class MainLayout extends Component {
  state = {
    show: false,
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <>
        <Header {...this.props} />
        <GeneralContainer>{this.props.children}</GeneralContainer>
        <Footer />
      </>
    )
  }
}
