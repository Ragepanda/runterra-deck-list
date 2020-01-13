import React from 'react';
import './App.css';
import {
  BrowserRouter as
    Router,
  Route,
  Switch
} from 'react-router-dom';

import Home from "./pages/Home/Home";
import Card from "./pages/Card/Card";
import Set from "./pages/Set/Set";

import Navbar from "./component/navbar";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" >
              <Home />
            </Route>

            <Route exact path="/home"  >
              <Home />
            </Route>

            <Route exact path="/card/:name">
              <Card />
            </Route>
            
            <Route exact path="/set">
              <Set />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
