import React from "react";
import { Helmet } from "react-helmet";
import baseSet from "../../card_info/set1.json";
class Set extends React.Component {


  createHelmet(){

        let metatitle = "Legends of Runeterra Card Library  | Legends of Runeterra Cards on Runeterra Hub"; //will need to add a property for which set it is
        let descrip = "This is the list of Legends of Runeterra cards in the Legends of Runeterra base set. Runeterra Hub is the spot to view new Legends of Runeterra sets."; //will need to add a property for which set it is
        let metacontent = "cards,card library,lor,legend, hub, legends,runeterra,deck,decklist,decklists,decks,set,sets,expansion,expansions"; //will need to add in property for which set it is

        let helmet = <Helmet>
            <title>{metatitle}</title>
            <meta name="description" content={descrip}/>
            <meta name="keywords" content={metacontent} />
            <meta name="author" content="runeterrahub.com"/>
            <meta http-equiv="Content-Language" content="en-US"/>
            <meta name="rating" content="kids"/>
            <meta http-equiv="content-type" content="text/html" charSet="utf-8" />
            </Helmet>;

        return helmet;
  }

  createRows() {
    const list = baseSet.map((card, index) =>
        <div className="col-3" key={index}>
          <a href={"/card/"+card.name.replace(/ /g, "_").replace(/:/g,"")}><img className="image-container img-fluid" src={"/img/cards/"+card.cardCode+".png"} alt={card.name} /></a>
          <a href={"/card/"+card.name.replace(/ /g, "_").replace(/:/g,"")}><div className="caption">{card.name}</div></a>
        </div>
      );
    return list;
  }

  render() {
      return (
          <div className="container">
            {this.createHelmet()}
            <div className="setName">Legends of Runeterra Base Set</div>
            <div className="filterTools"></div>
            <div className="row">{this.createRows()}</div>
          </div>
      );
  }
};

export default Set;