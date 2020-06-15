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
import Deck from "./pages/Decks/Deck";
import Decklists from "./pages/Decks/DeckLists";
import Deckbuilder from "./pages/Deckbuilder/Deckbuilder";
import Article from "./pages/Articles/Article";
import Articles from "./pages/Articles/Articles";
import Privacy from "./pages/Privacy/Privacy";
import Terms from "./pages/Terms/Terms";
import About from "./pages/About/About";
import Profile from "./pages/Profile/Profile";
import Links from "./pages/Links/Links";

import Navbar from "./component/Navbar";
import cookieSession from "cookie-session";

class App extends React.Component {
  componentDidMount(){
   
  }
  render() {
    return (
      <Router>
        <div className="App" id="element-with-background-image">
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/card/:name" component={Card} />
            <Route exact path="/set/" component={Set} />
            <Route exact path="/deck_lists/" component={Decklists} />
            <Route exact path="/deck_lists/:deckName/:id" component={Deck} />
            <Route exact path="/deck_builder" component={Deckbuilder} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/articles/:article/:id" component={Article} />
            <Route exact path="/articles" component={Articles}/>
            <Route exact path="/privacy" component={Privacy} />
            <Route exact path="/terms" component={Terms} />
            <Route exact path="/about" component={About} />
            <Route exact path="/links" component={Links} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
