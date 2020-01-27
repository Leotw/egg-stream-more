import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter, StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import createStore from './store';
import Root from './container/Root';
import Layout from './component/Layout';
import * as Sentry from '@sentry/browser';

class App extends React.Component {
  render() {
    return <React.Fragment>
      <Root {...this.props}/>
    </React.Fragment>
  }
}

/* 服务端输出 */
class ServerEntry extends Component {
  constructor(props) {
    super(props);
    Sentry.init({ dsn: props.clientCfg });
  }

  render() {
    const url = this.props.url;
    const store = createStore(Object.assign(this.props));
    return (
      <Provider store={store}>
        <StaticRouter location={url}>
          <Layout {...this.props}>
            <App/>
          </Layout>
        </StaticRouter>
      </Provider>
    );
  }
}

/* 客户端输出 */
const clientEntry = () => {
  const root = document.getElementById('app');
  const store = createStore(Object.assign(window.__INITIAL_STATE__));
  const renderMethod = root.childNodes.length > 0 ? 'hydrate' : 'render';
  const { __INITIAL_STATE__: state } = window;
  if(state.env === 'prod') {
    Sentry.init({
      dsn: state.clientCfg,
      release: `egg-stream-more@${state.version}`
    });
  }
  const render = () => {
    ReactDOM[renderMethod](
      <Provider store={store}>
        <BrowserRouter>
          { EASY_ENV_IS_DEV ? <AppContainer><App/></AppContainer> : <App/> }
        </BrowserRouter>
      </Provider>, root
    );
  };
  render();
  if(EASY_ENV_IS_DEV && module.hot) {
    module.hot.accept(() => {
      render();
    });
  }
};
export default EASY_ENV_IS_NODE ? ServerEntry : clientEntry();
