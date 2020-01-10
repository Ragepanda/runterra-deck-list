import React from "react";

import baseSet from "../../card_info/set1.json"
import { Helmet } from "react-helmet";
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: {},
      isLoaded: false
    };
  }


  componentDidMount() {
    var cardName = this.props.match.params.name.replace(/_/g, " ");

    for (var index = 0; index < baseSet.length; index++) {
      var searchCard = baseSet[index];

      if (searchCard.name.replace(/:/g, "") === cardName) {
        this.setState({ card: searchCard, isLoaded: true });
        break;
      }
    }
  }
  render() {

    if (this.state.isLoaded) {
      var card = this.state.card;
      return (
        <div>
           <Helmet>
           <title>{card.name + " |  Legends of Runeterra Cards"}</title>
           <meta name="description" content={card.name + " is one of the many cards in Legends of Runeterra. This page will help you evaluate " +card.name+" as well as other Legends of Runeterra cards." } />
           <meta name="keywords" content={"Legends,Runeterra, cards, lor, decks, best, card, library, list"} />
           <meta name="author" content="runeterrahub.com" />
           <meta http-equiv="Content-Language" content="en-US" />
           <meta name="rating" content="kids" />
           <meta http-equiv="content-type" content="text/html" charSet="utf-8" />
         </Helmet>                            
          <div className="cardName">
            <h2>{card.name}</h2>
          </div>

          <div>
            <img className="cardImg" src={""} alt={card.name} />
          </div>

          <div className="cardSpecs">
            <div className="row">
              <div>Name</div>
              <div>{card.name}</div>
            </div>
            <div className="row">
              <div>Mana Cost</div>
              <div>{card.cost}</div>
            </div>
            <div className="row">
              <div>Faction</div>
              <div>{card.region}</div>
            </div>
            <div className="row">
              <div>Card Type</div>
              <div>{card.type} - {card.subtype}</div>
            </div>
            <div className="row">
              <div>Attack / Health</div>
              <div>{card.attack} / {card.health}</div>
            </div>
            <div className="row">
              <div>Rarity</div>
              <div>{card.rarity}</div>
            </div>
            <div className="row">
              <div>Text</div>
              <div>{card.description}</div>
            </div>
            <div className="row">
              <div>Flavor Text</div>
              <div>{card.flavorText}</div>
            </div>
            <div className="row">
              <div>Keywords</div>
              <div>{card.keywords}</div>
            </div>
            <div className="row">
              <div>Decks with this Card</div>
              <div>CLICK HERE FOR DECKS WITH THIS CARD</div>
            </div>
            <div className="row">
              <div>Card Evaluation</div>
              <div>Data on how card fares in diff types of matches</div>
            </div>
          </div>
        </div>
      );
    }

    else{
      return(<div>Loading... </div>);
    }
  }
};

export default Card;