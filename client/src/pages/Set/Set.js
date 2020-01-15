import React from "react";
import { Helmet } from "react-helmet";
import baseSet from "../../card_info/set1.json";
import FilterBar from "../../component/FilterBar";
import ReactToooltip from "react-tooltip";
import "./Set.css"



class Set extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: {},
      isLoaded: false,
      filteredSet: baseSet
    };
    this.createHelmet = this.createHelmet.bind(this);
    this.setFilteredSet = this.setFilteredSet.bind(this);
    this.createRows = this.createRows.bind(this);
  }

  createHelmet() {

    let metatitle = "Legends of Runeterra Card Library | Legends of Runeterra Cards on Runeterra Hub"; //will need to add a property for which set it is
    let descrip = "This is the list of Legends of Runeterra cards in the Legends of Runeterra base set. Runeterra Hub is the spot to view new Legends of Runeterra sets."; //will need to add a property for which set it is
    let metacontent = "cards,card library,lor,legend, hub, legends,runeterra,deck,decklist,decklists,decks,set,sets,expansion,expansions"; //will need to add in property for which set it is

    let helmet = <Helmet>
      <title>{metatitle}</title>
      <meta name="description" content={descrip} />
      <meta name="keywords" content={metacontent} />
      <meta name="author" content="runeterrahub.com" />
      <meta http-equiv="Content-Language" content="en-US" />
      <meta name="rating" content="kids" />
      <meta http-equiv="content-type" content="text/html" charSet="utf-8" />
    </Helmet>;

    return helmet;
  }

  setFilteredSet(set){
    this.setState({filteredSet: set});
  }

  keywordTooltipText(keywords){
    if(keywords.length > 0){
      var html = <h5>Keywords</h5>;
      for(var x=0; x<keywords.length; x++){
        var text =(<p>{keywords[x]}: Definition of this keyword</p>);
        html = [html, text];
      }
      return html;
    }
  }

  createRows() {
    const list = this.state.filteredSet.map((card, index) => {
      if (card.rarity !== "None")
        return (
          <div className="col-4 col-sm-6 col-md-4 col-lg-3 p-3" key={index}>
            <a data-tip data-for={card.cardCode} href={"/card/" + card.name.replace(/ /g, "_").replace(/:/g, "")}>
              <img className="image-container img-fluid" src={"/img/cards/" + card.cardCode + ".png"} alt={"Legends of Runeterra Cards " + card.name} />
            </a>
            <ReactToooltip className="set-tooltips" place="bottom" id={card.cardCode}>
              {this.keywordTooltipText(card.keywords)}
              <h5>Flavor Text:</h5>
              <p>{card.flavorText}</p>
            </ReactToooltip> 
          </div>);
      else
        return " "
    });
    return list;
  }

  componentDidMount(){
    if(typeof this.state.filteredSet !== "undefined"){
      this.setState({isLoaded: true});
    }
  }
  // removed src: src={"../img/cards/"+card.cardCode+".png"}
  render() {
    if(this.state.isLoaded === false){
      return <div><p>Loading...</p></div>
    }
    return (

      <div className="container-fluid" id="neg-margin">
        {this.createHelmet()}
        <FilterBar setFilteredSet={this.setFilteredSet} />
        <div className="setName text-center pt-4"><h2>Legends of Runeterra Base Set</h2></div>
        <div className="setName text-center pb-5 pt-1"><p>This is the list of Legends of Runeterra cards in the Legends of Runeterra base set. Runeterra Hub is the spot to view new Legends of Runeterra sets.</p></div>
       
        <div className="row">{this.createRows()}</div>
      </div>
    );
  }
};

export default Set;