import React from 'react';

export default class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }
  componentDidMount() {
    console.log(window.__INITIAL_STATE__);
    this.setState({ message: window.__INITIAL_STATE__.message })
  }

  render() {
    const { message } = this.state;
    return (
      <React.Fragment>
        {message}
      </React.Fragment>
    );
  }
}
