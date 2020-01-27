import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Async from '../component/Async';
import Home from './Home';
import '../asset/style/common.less';
import '../asset/style/reset.less';

export default class Root extends React.Component {
  render() {
    return (
      <div className="Container __root__">
        <Switch>
          <Route path="/about" component={Async(() => import('./About'))}/>
          <Route path="/home" component={Home}/>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
    )
  }
}
