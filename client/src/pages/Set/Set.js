import React from "react";
import { Helmet } from "react-helmet";
import baseSet from "../../card_info/set1.json";
class Set extends React.Component {


  createHelmet(){

        let metatitle = "Runeterra Base Set Card Library  | Legends of Runeterra Cards on Runeterra Hub";
        let descrip = "This is the list of cards in the base set for Legends of Runeterra.";
        let metacontent = "cards,card library, legends,runeterra,deck,decklist,decklists,decks,set,sets,expansion,expansions";

        let helmet = <Helmet>
            <title>{metatitle}</title>
            <meta name="description" content={descrip}/>
            <meta name="keywords" content={metacontent} />
            <meta name="author" content="thedrinksly.com"/>
            <meta http-equiv="Content-Language" content="en-US"/>
            <meta name="rating" content="kids"/>
            <meta http-equiv="content-type" content="text/html" charSet="utf-8" />
            </Helmet>;

        return helmet;
  }

  createRows() {
    const list = baseSet.map((card, index) =>
        <a><li className="list-container" key={index}>
          <img className="image-container" src={card.assets.gameAbsolutePath} alt={card.name} />
          <div className="text-container"> {card.name} </div>
        </li></a>
      );
    return list;
  }

  render() {
      return (
          <div>
            {this.createHelmet()}
            <div className="setName">this.props.setName</div>
            <div className="filterTools"></div>
            <ul className="cardRows">{this.createRows()}</ul>
          </div>
      );
  }
};

export default Set;