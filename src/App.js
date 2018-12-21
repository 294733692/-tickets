import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './routes/home/index';
import User from './routes/user/index';
import Detail from './routes/detail/index';
import Seat from './routes/seat/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/user" exact component={User} />
          <Route path="/Detail" exact component={Detail} />
          <Route path="/Seat" exact component={Seat} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
