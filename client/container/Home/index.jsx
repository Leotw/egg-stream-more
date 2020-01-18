import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import * as actions from './action';
import './style.less';

class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.setState({ message: window.__INITIAL_STATE__.message })
  }

  render() {
    const { message } = this.state;
    return (
      <div className="HomeContainer">
        <article>{message}</article>
        <div className="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state
};

const mapActionToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapActionToProps)(Home);
