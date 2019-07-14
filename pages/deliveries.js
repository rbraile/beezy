import React, { Component } from 'react'
import { connect } from 'react-redux'
import withData from '../utils/withData'
import MainLayout from '../components/MainLayout'
import DeliveriesPage from '../components/DeliveriesPage'
import { setOrder } from '../actions/order.actions'

const PATHTOAPI = 'http://www.mocky.io/v2/5c498bf532000079310b58d4'

class Index extends Component {
  render() {
    const grid = {
      columns: [
        {
          title: 'Telefono',
          content: 'phone',
          orderlyFunction: this.props.setOrder,
        },
        {
          title: 'Nombre admin',
          content: 'administrativeContact.name',
          orderlyFunction: this.props.setOrder,
        },
        {
          title: 'Especialidad',
          content: 'specialty',
        },
      ],
      mobileColumns: ['name', 'address', 'phone'],
    }
    return (
      <MainLayout loading={this.props.loading} currentPath='/'>
        <DeliveriesPage pathToApi={PATHTOAPI} grid={grid} />
      </MainLayout>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = {
  setOrder,
}

const IndexPageWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
export default withData(IndexPageWithRedux)
