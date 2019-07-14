import React, { Component } from 'react'

import Header from '../Header'
import Footer from '../Footer'

import { GeneralContainer } from './styled'

export default class MainLayout extends Component {
  state = {
    show: false,
  }

  handleScroll = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      this.setState({ show: true })
    } else {
      this.setState({ show: false })
    }
  }

  handleToTop = () => {
    global.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  componentDidMount() {
    global.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    global.removeEventListener('scroll', this.handleScroll)
  }

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
