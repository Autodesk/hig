import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import routes from './routes';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <Nav routes={routes} />
            <div className="App-header">
              {routes.map(routeProps => (
                <Route key={routeProps.path} {...routeProps} />
              ))}
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
