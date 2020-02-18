import React from 'react';
import {
  Route,
  Switch
} from 'react-router';

export default(
    <Route>
      <Route path="/" />
      <Route path="/card/:name" />
      <Route path="/set/" />
      <Route path="/deck_lists/" />
      <Route path="/deck_lists/:deckName/:id" />
      <Route path="/deck_builder" />
      <Route path="/profile" />
      <Route path="/articles/:article/:id" />
      <Route path="/articles"/>
      <Route path="/privacy" />
      <Route path="/terms" />
      <Route path="/about" />
    </Route>
);