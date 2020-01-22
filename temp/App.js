import React from 'react';
import logo from './logo.svg';
import './App.css';
const {DeckEncoder, Card} = require('runeterra'); //We need to import this card object to properly pass stuff to the encoder

function App() {
  var deck= DeckEncoder.decode('CEBAIAIFAEHSQNQIAEAQGDAUDAQSOKJUAIAQCBI5AEAQCFYA');

  var codes = [ //strings for card codes
    "01FR003",
    "01SI040",
    "01FR009",
    "01FR033",
    "01FR012",
    "01FR020",
    "01FR041",
    "01SI054",
    "01FR024",
    "01SI020",
    "01SI001",
    "01FR039",
    "01SI015",
    "01FR052",
    "01FR023",
    "",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0"
  ];
  var counts=[ //ints for card amounts
    3,
    3,
    1,
    3,
    3,
    3,
    3,
    3,
    2,
    2,
    3,
    3,
    3,
    3,
    2,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ];

  var newDeck = [];
  var realDeck = [];

  console.log(deck);
  var cards = 15;
  //console.log(deck);
  for(var i = 0; i < cards; i++){
    newDeck.push(new Card(codes[i], counts[i])); ///This is part that matters for encoding decks with the proper object

  }
  console.log(newDeck)
  //onsole.log(realDeck)
  const code2 = DeckEncoder.encode(newDeck); //Make the deck into  string
  console.log(code2);
  realDeck = DeckEncoder.decode(code2);
  console.log(realDeck)
  //var deck2 = DeckEncoder.decode(code);
  //console.log(deck2);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
