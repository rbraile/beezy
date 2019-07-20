import React from 'react'
// import PropTypes from 'prop-types'
import { Provider as ReduxProvider } from 'react-redux'
import Head from 'next/head'
import initRedux from './initRedux'

// Gets the display name of a JSX component for dev tools
function getComponentDisplayName(Component) {
  return Component.displayName || Component.name || 'Unknown'
}

export default ComposedComponent => {
  return class WithData extends React.Component {
    static displayName = `WithData(${getComponentDisplayName(
      ComposedComponent
    )})`
    // static propTypes = {
    //   serverState: PropTypes.object.isRequired
    // }

    static async getInitialProps(ctx) {
      // Initial serverState with apollo (empty)
      let serverState = {}

      // Evaluate the composed component's getInitialProps()
      let composedInitialProps = {}
      if (ComposedComponent.getInitialProps) {
        composedInitialProps = await ComposedComponent.getInitialProps(ctx)
      }

      // Run all GraphQL queries in the component tree
      // and extract the resulting data
      if (!process.browser) {
        const redux = initRedux()
        // Provide the `url` prop data in case a GraphQL query uses it
        const url = { query: ctx.query, pathname: ctx.pathname }

        try {
          // Run all GraphQL queries
          ;<ReduxProvider store={redux}>
            <ComposedComponent url={url} {...composedInitialProps} />
          </ReduxProvider>
        } catch (error) {}
        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind()

        // Extract query data from the Apollo store
        serverState = {}
      }

      return {
        serverState,
        ...composedInitialProps,
      }
    }

    constructor(props) {
      super(props)
      this.redux = initRedux()
    }
    componentWillMount() {}
    componentDidMount() {}
    render() {
      return (
        // No need to use the Redux Provider
        // because Apollo sets up the store for us
        <ReduxProvider store={this.redux}>
          <ComposedComponent {...this.props} />
        </ReduxProvider>
      )
    }
  }
}
