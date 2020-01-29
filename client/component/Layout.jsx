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
        <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no,viewport-fit=cover"/>
      </head>
      <body>
      <div id="app">{children}</div>
      </body>
      </html>
    ) : children
  }
}
