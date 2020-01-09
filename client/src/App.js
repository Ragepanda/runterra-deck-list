import React from 'react';
import './App.css';
import {
  BrowserRouter as
    Router,
  Route,
  Switch
} from 'react-router-dom';

import Home from "./pages/Home/Home";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" exact component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
