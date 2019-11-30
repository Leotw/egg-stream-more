import React from 'react';
import logo from '../../asset/image/logo.svg';
import './style.less';

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
      <div className="HomeContainer">
        <section><img className="logo" src={logo} alt="logo"/></section>
        <article>{message}</article>
      </div>
    );
  }
}
