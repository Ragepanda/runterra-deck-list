import React from "react";
import { Helmet } from "react-helmet";
import baseSet from "../../card_info/set1.json";
import FilterBar from "../../component/FilterBar";
import SearchBar from "../../component/SearchBar";
class Set extends React.Component {
    

  createHelmet(){

        let metatitle = "Legends of Runeterra Card Library | Legends of Runeterra Cards on Runeterra Hub"; //will need to add a property for which set it is
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
    const list = baseSet.map((card, index) => {
      if(card.rarity != "None")
        return <div className="col-6 col-sm-6 col-md-4 col-lg-3 p-3" key={index}>
          <a href={"/card/"+card.name.replace(/ /g, "_").replace(/:/g,"")}><img className="image-container img-fluid" src={"/img/cards/"+card.cardCode+".png"} alt={"Legends of Runeterra Cards " + card.name} /></a>
        </div>
      else
        return " "
    });
    return list;
  }

  render() {
      return (
          <div className="container">
            {this.createHelmet()}
            <div className="setName text-center pt-4"><h2>Legends of Runeterra Base Set</h2></div>
            <div className="setName text-center pb-5 pt-1"><p>This is the list of Legends of Runeterra cards in the Legends of Runeterra base set. Runeterra Hub is the spot to view new Legends of Runeterra sets.</p></div>
            <div className="filterTools"></div>
            <SearchBar/>
            <FilterBar/>
          </div>
      );
  }
};

export default Set;