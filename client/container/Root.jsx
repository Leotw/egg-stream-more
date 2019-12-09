import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Pane from '../component/Pane';


export default class Root extends React.Component {
  render() {
    return (
      <div className="Container __root__">
        <Pane />
        <Switch>
          <Route path="/about" component={About}/>
          <Route path="/home" component={Home}/>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
    )
  }
}
