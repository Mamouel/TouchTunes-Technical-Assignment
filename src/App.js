import React, { Component } from 'react';

import { Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home"

import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Home} />
            {/* <Route exact path='/login' component={Login} /> */}
            <Route
            component={() => (
              <div style={{ textAlign: "center" }}>
                <div style={{ margin: 40 }}>NOT FOUND</div>
                <img alt="" src="" />
              </div>
            )}
          />

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;