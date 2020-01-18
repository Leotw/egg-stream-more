import React from 'react';

export default class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return EASY_ENV_IS_NODE ? (
      <html lang="en">
      <head>
        <title>Egg</title>
        <meta name="keywords"/>
        <meta name="description"/>
        <meta httpEquiv="content-type" content="text/html;charset=utf-8"/>
        <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui"/>
      </head>
      <body>
      <div id="app">{children}</div>
      </body>
      </html>
    ) : children
  }
}
