import React from "react";

import baseSet from "../../card_info/set1.json"
import { Helmet } from "react-helmet";
import "./Card.css";
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
        <div className="container">
           <Helmet>
           <title>{card.name + " |  Legends of Runeterra Cards on Runeterra Hub"}</title>
           <meta name="description" content={card.name + " is one of the many cards in Legends of Runeterra. Runeterra Hub is the place to help you evaluate " +card.name+" as well as other Legends of Runeterra cards." } />
           <meta name="keywords" content={card.name + ", " + card.type + ", " + card.spellSpeed + ", " + card.region + ", " + card.rarity + ", " + " Legends, Runeterra, hub, cards, lor,deck,decklist, decks,new,champion,champions, best, card, library, list,lists"} />
           <meta name="author" content="runeterrahub.com" />
           <meta http-equiv="Content-Language" content="en-US" />
           <meta name="rating" content="kids" />
           <meta http-equiv="content-type" content="text/html" charSet="utf-8" />
         </Helmet>                            
          <div className="cardName">
            <h2>{card.name}</h2>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <img className="cardImg img-fluid" src={"/img/cards/"+card.cardCode+".png"} alt={card.name} />
            </div>
  
            <div className="cardSpecs col-sm-6">
              <div className="row">
                <div className="col">Name</div>
                <div className="col">{card.name}</div>
              </div>
              <hr/>
              <div className="row">
                <div className="col">Mana Cost</div>
                <div className="col">{card.cost}</div>
              </div>
              <hr/>
              <div className="row">
                <div className="col">Faction</div>
                <div className="col">{card.region}</div>
              </div>
              <hr/>
              <div className="row">
                <div className="col">Card Type</div>
                <div className="col">{card.type} - {card.subtype}</div>
              </div>
              <hr/>
              <div className="row">
                <div className="col">Attack / Health</div>
                <div className="col">{card.attack} / {card.health}</div>
              </div>
              <hr/>
              <div className="row">
                <div className="col">Rarity</div>
                <div className="col">{card.rarity}</div>
              </div>
              <hr/>
              <div className="row">
                <div className="col">Text</div>
                <div className="col">{card.descriptionRaw}</div>
              </div>
              <hr/>
              <div className="row">
                <div className="col">Flavor Text</div>
                <div className="col">{card.flavorText}</div>
              </div>
              <hr/>
              <div className="row">
                <div className="col">Keywords</div>
                <div className="col">{card.keywords.map(kw => (<a className="" href="#" key={kw}>{kw}</a> ))}</div>
              </div>
              <hr/>
              <div className="row">
                <div className="col">Decks with this Card</div>
                <div className="col"><a className="" href="#">Click Here</a></div>
              </div>
              <hr/>
              <div className="row">
                <div className="col">Card Evaluation</div>
                <div className="col">Data App</div>
              </div>
              <hr/>
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