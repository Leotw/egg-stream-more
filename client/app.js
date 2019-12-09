import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter, StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import createStore from './store';
import Root from './container/Root';
import Layout from './component/Layout';

class App extends React.Component {
  render() {
    return <Root {...this.props}/>
  }
}

/* 服务端输出 */
class ServerEntry extends Component {
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

// const ServerEntry = (context) => {
//   const url = context.state.url;
//   class ServerContainer extends Component {
//     render() {
//       return (
//         <Layout {...this.props}>
//           <App />
//         </Layout>
//       );
//     }
//   }
//
//   return Promise.resolve()
//     .then(() => {
//       return () => {
//         return (
//           <StaticRouter location={url}>
//             <ServerContainer />
//           </StaticRouter>
//         )
//       }
//     });
// };

/* 客户端输出 */
const clientEntry = () => {
  const root = document.getElementById('app');
  const store = createStore(Object.assign(window.__INITIAL_STATE__));
  const renderMethod = root.childNodes.length > 0 ? 'render' : 'hydrate';
  const render = () => {
    ReactDOM[renderMethod](
      <Provider store={store}>
        <BrowserRouter>
          {
            EASY_ENV_IS_DEV ? <AppContainer><App/></AppContainer> : <App/>
          }
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
