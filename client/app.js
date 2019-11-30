import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Home from './container/Home';
import Layout from './component/Layout';

class App extends React.Component {
  render() {
    return <Home {...this.props}/>
  }
}

/* 服务端输出 */
class ServerEntry extends Component {
  render() {
    return (
      <Layout {...this.props}>
        <App />
      </Layout>
    );
  }
}

/* 客户端输出 */
const clientEntry = () => {
  const root = document.getElementById('app');
  const render = () => {
    ReactDOM.hydrate(EASY_ENV_IS_DEV ? <AppContainer><App/></AppContainer> : <App/>, root);
  };
  render();
  if(EASY_ENV_IS_DEV && module.hot) {
    module.hot.accept(() => {
      render();
    });
  }
};
export default EASY_ENV_IS_NODE ? ServerEntry : clientEntry();
