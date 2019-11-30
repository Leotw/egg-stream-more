import ReactDOM from 'react-dom';

class Render {
  _client(Component, id) {
    console.log(888);
    const root = document.getElementById(id);
    const renderMethod = root.childNodes.length > 0 ? 'render' : 'hydrate';
    ReactDOM[renderMethod](Component, root);
    // if(EASY_ENV_IS_DEV) {
    //   module.hot.accept();
    //   setTimeout(render.bind(null, Component, root), 100);
    // } else {
    //   ReactDOM.render(Component, root);
    // }
  }
  _server(Component) {
    return () => Component;
    // if(EASY_ENV_IS_NODE) {
    //   return () => Component;
    // }
  }
  paint(Component, id) {
    console.log(8989);
    if(EASY_ENV_IS_NODE) {
      return this._server(Component)
    }
    console.log(8989);
    return this._client(Component, id);
  }
}
const renderInstance = new Render();

export default renderInstance;
