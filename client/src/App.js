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
    console.log(props);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" exact component={Home} />
            <Route exact path="/card/:name" component={Card} />
            <Route exact path="/set/" component={Set} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
