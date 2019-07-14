import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, injectGlobal } from "styled-components";

injectGlobal`
  html {
    font-size: 10px;
  }
  body {
    font-family: "Roboto", serif;
    font-size: 16px;
    line-height: 1.6em;
    padding: 0;
    margin: 0;
  }
`;

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    return (
      <html lang="es">
        <Head>
          <link rel="stylesheet" href="/static/base.css" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
