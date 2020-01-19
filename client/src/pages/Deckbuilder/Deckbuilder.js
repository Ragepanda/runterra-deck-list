import React from "react";
import { Helmet } from "react-helmet";
import baseSet from "../../card_info/set1.json";
import keywordSet from "../../card_info/globals-en_us.json"
import FilterBar from "../../component/FilterBar";
import ReactToooltip from "react-tooltip";
import "./Deckbuilder.css";



class Set extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: {},
      isLoaded: false,
      filteredSet: baseSet,
      decklist : [],
      deckStyled : []
    };
    this.createHelmet = this.createHelmet.bind(this);
    this.setFilteredSet = this.setFilteredSet.bind(this);
    this.createRows = this.createRows.bind(this);
    this.generatePathData = this.generatePathData.bind(this);
    this.addToDeck = this.addToDeck.bind(this);
    this.removeCard = this.removeCard.bind(this);
  }

  createHelmet() {

    let metatitle = "Legends of Runeterra Deck Builder | Legends of Runeterra Cards on Runeterra Nexus"; //will need to add a property for which set it is
    let descrip = "This is a Legends of Runeterra Deckbuilder. This deckbuilder will let you filter cards by type, keywords and name. The Legends of Runeterra Deck builder here on Runeterra Nexus is the best way to create new Runeterra decks."; //will need to add a property for which set it is
    let metacontent = "cards,card library,lor,legend, nexus, legends,runeterra,deck,decklist,builder, decklists,decks,set,sets,expansion,expansions"; //will need to add in property for which set it is

    let helmet = <Helmet>
      <title>{metatitle}</title>
      <meta name="description" content={descrip} />
      <meta name="keywords" content={metacontent} />
      <meta name="author" content="runeterranexus.com" />
      <meta http-equiv="Content-Language" content="en-US" />
      <meta name="rating" content="kids" />
      <meta http-equiv="content-type" content="text/html" charSet="utf-8" />
    </Helmet>;

    return helmet;
  }

  setFilteredSet(set) {
    this.setState({ filteredSet: set });
  }

  keywordTooltipText(keywords) {
    if (keywords.length > 0) {
      var html;
      for (var x = 0; x < keywords.length; x++) {
        var definition = "";
        var isSvgFill = "";
        var fill = "";
        var path = [];

        for (var keywordIndex = 0; keywordIndex < keywordSet.keywords.length; keywordIndex++) {
          if (keywordSet.keywords[keywordIndex].name === keywords[x]) {
            definition = keywordSet.keywords[keywordIndex].description;
            isSvgFill = keywordSet.keywords[keywordIndex].svgFill;
            fill = keywordSet.keywords[keywordIndex].fill;
            
            if (typeof keywordSet.keywords[keywordIndex].path === "undefined") 
              path = [];   
            else
              path = keywordSet.keywords[keywordIndex].path;
          }
        }
        var text = (<div>
          <h6>{keywords[x] + " "}
            <svg height="35" width="35" viewBox="0 0 35 35" className="hover-icon" fill={fill}>
              {this.generatePathData(path)}
            </svg>
          </h6>
          <p>{definition}</p>
        </div>);
        html = [html, text];
      }
      return html;
    }
  }

  generatePathData(path) {
    if (path.length > 0) {
      var pathHTML = [];
      for (var x = 0; x < path.length; x++) {
        pathHTML.push(<path d={path[x]}></path>);
      }
      return pathHTML;
    }
    else {
      return;
    }
  }

  addToDeck(img){

    var cardProps = img.target.id.split(",");
    console.log(cardProps[1]);
    if (this.validEntry(cardProps)){
      if (this.state.decklist.hasOwnProperty(img.target.id) === true) {
        if (this.state.decklist[img.target.id] < 3){
          this.state.decklist[img.target.id] = this.state.decklist[img.target.id] + 1;
          this.state.decklist['size'] +=1;
          this.state.decklist[cardProps[2]] += 1;
          if (cardProps[1] === "Champion"){
            this.state.decklist['champions'] += 1;
          }
        }
      }
      else{
        this.state.decklist[img.target.id] = 1;
        this.state.decklist['size'] +=1;
        this.state.decklist[cardProps[2]] += 1;
        if (cardProps[1] === "Champion"){
          this.state.decklist['champions'] += 1;
        }
      }
    }
    console.log(this.state.decklist['champions']);
    this.setState({deckStyled : this.showDeck()});
  }


  validEntry(cardProps){
    return (this.state.decklist['size'] < 40 && ( (this.state.decklist['champions'] < 6  && cardProps[1] === 'Champion') ||  cardProps[1] !== 'Champion') && this.validRegions(cardProps) ) ? true : false;
  }

  validRegions(cardProps){
    var rCtr = 0;
    var regions = [];
    if (this.state.decklist['Demacia'] > 0){ rCtr+=1; regions.push('Demacia')};
    if (this.state.decklist['PiltoverZaun'] > 0){ rCtr+=1; regions.push('PiltoverZaun')};
    if (this.state.decklist['Freljord'] > 0){ rCtr+=1; regions.push('Freljord')};
    if (this.state.decklist['Ionia'] > 0){ rCtr+=1; regions.push('Ionia')};
    if (this.state.decklist['Noxus'] > 0){ rCtr+=1; regions.push('Noxus')};
    if (this.state.decklist['ShadowIsles'] > 0){ rCtr+=1; regions.push('ShadowIsles')};
    return (rCtr < 2 || (rCtr === 2 && regions.includes(cardProps[2]) ) ) ? true : false;

  }

  createRows() {
    const list = this.state.filteredSet.map((card, index) => {
      if (card.rarity !== "None" && card.keywords.indexOf("Skill") === -1 && card.name !== "Accelerated Purrsuit")
        return (
          <div className="col-6 col-sm-6 col-md-4 col-lg-2 p-3" key={index}>
            <div className="cardHand" data-tip data-for={card.cardCode} onClick={this.addToDeck}>
              <img className="image-container img-fluid" id={card.cardCode + "," + card.supertype + "," + card.regionRef} src={"/img/cards/" + card.cardCode + ".png"} alt={"Legends of Runeterra Cards " + card.name} />
            </div>
             <ReactToooltip className="set-tooltips" place="top" effect="solid" id={card.cardCode}>
               {this.keywordTooltipText(card.keywords)} 
              <h6>Flavor Text:</h6>
              <p>{card.flavorText}</p>
            </ReactToooltip> 
          </div>);
      else
        return " ";

    });
    return list;
  }

  componentDidMount() {
    if (typeof this.state.filteredSet !== "undefined") {
      this.setState({ isLoaded: true });
    }
    this.state.decklist['size'] = 0;
    this.state.decklist['champions'] = 0;
    this.state.decklist['Demacia'] = 0;
    this.state.decklist['PiltoverZaun'] = 0;
    this.state.decklist['Freljord'] = 0;
    this.state.decklist['Ionia'] = 0;
    this.state.decklist['Noxus'] = 0;
    this.state.decklist['ShadowIsles'] = 0;
  }

  removeCard(img){
    
    var cardProps = img.target.id.split(",");
    if (this.state.decklist[img.target.id] > 0){
      this.state.decklist[img.target.id] -=1;
      this.state.decklist[cardProps[2]] -= 1;
      this.state.decklist['size'] -= 1;
      if (cardProps[1] === "Champion"){
        this.state.decklist['champions'] -= 1;
      }
    }
    this.setState(this.state);
    this.setState({deckStyled : this.showDeck()});

  }


  showDeck(){
    const deck = Object.keys(this.state.decklist).map((prop,index) => {
      if (prop.includes(",") && this.state.decklist[prop] > 0){
          var cardProps = prop.split(",");
        return (
          <div key={index} id={prop} onClick={this.removeCard}>{cardProps[0] + " " + this.state.decklist[prop]}</div>
        );
      }
    });
    return deck;
  }

  
  render() {
    if (this.state.isLoaded === false) {
      return <div><p>Loading...</p></div>
    }
    return (

      <div className="wrapper" id="neg-margin">
        {this.createHelmet()}
    <nav id="sidebar">
            <div id="dismiss">
                <i class="fas fa-arrow-left">o</i>
            </div>
            <div class="sidebar-header">
                <h3>Current Deck</h3>
            </div>

            <div class="list-unstyled components">
                {this.state.deckStyled}
            </div>

            <ul class="list-unstyled CTAs">
                <li>
                    <a href="https://bootstrapious.com/tutorial/files/sidebar.zip" class="download">Download source</a>
                </li>
                <li>
                    <a href="https://bootstrapious.com/p/bootstrap-sidebar" class="article">Back to article</a>
                </li>
            </ul>
        </nav>
        <div id="content">
          <FilterBar setFilteredSet={this.setFilteredSet} />
          <div className="setName text-center pt-4"><h2>Legends of Runeterra Deck Builder</h2></div>
          <div className="setName text-center pb-5 pt-1"><p>This is a Legends of Runeterra Deckbuilder. This deckbuilder will let you filter cards by type, keywords and name. The Legends of Runeterra Deck builder here on Runeterra Nexus is the best way to create new Runeterra decks.</p></div>
          <div className="row">{this.createRows()}</div>
        </div>
      </div>
    );
  }
};

export default Set;
