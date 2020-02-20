import React from 'react';
import {
  Route,
  Switch
} from 'react-router';


export default(
  <Switch>
    <Route exact path="/"  />
    <Route exact path="/card/:name"  />
    <Route exact path="/set/"  />
    <Route exact path="/deck_lists/"  />
    <Route exact path="/deck_lists/:deckName/:id"  />
    <Route exact path="/deck_builder"  />
    <Route exact path="/profile"  />
    <Route exact path="/articles/:article/:id"  />
    <Route exact path="/articles" />
    <Route exact path="/privacy"  />
    <Route exact path="/terms"  />
    <Route exact path="/about"  />
  </Switch>
);