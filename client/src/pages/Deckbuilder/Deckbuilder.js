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
      deckStyled : [],
      arrow: "<",
      sidebarClass : "active",
      contentClass : "inactive",
      buttonClass  : "inactive"
    };
    this.createHelmet = this.createHelmet.bind(this);
    this.setFilteredSet = this.setFilteredSet.bind(this);
    this.createRows = this.createRows.bind(this);
    this.generatePathData = this.generatePathData.bind(this);
    this.addToDeck = this.addToDeck.bind(this);
    this.removeCard = this.removeCard.bind(this);
    this.hideBar = this.hideBar.bind(this);
    this.openSidebar = this.openSidebar.bind(this);
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
    this.setState({deckStyled : this.showDeck()});
  }


  hideBar(e){
    this.setState({arrow : ">"});
    this.setState({sidebarClass : "inactive"});
    this.setState({contentClass : "active"});
    this.setState({buttonClass : "active"});

  }

  openSidebar(e){
    this.setState({arrow : "<"});
    this.setState({sidebarClass : "active"});
    this.setState({contentClass : "inactive"});
    this.setState({buttonClass : "inactive"});
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
      if (card.rarity !== "None" && card.keywords.indexOf("Skill") === -1 && card.name !== "Accelerated Purrsuit" )
        return (
          <div className="col-6 col-sm-6 col-md-3 col-lg-2 p-3" key={index}>
            <div className="cardHand" data-tip data-for={card.cardCode} onClick={this.addToDeck}>
              <img className="image-container img-fluid" id={card.cardCode + "," + card.supertype + "," + card.regionRef + "," + card.name + "," + card.cost} src={"/img/cards/" + card.cardCode + ".png"} alt={"Legends of Runeterra Deck Builder " + card.name} />
            </div>
             <ReactToooltip className="set-tooltips" place="top" effect="solid" id={card.cardCode}>
               {card.keywords.length > 0 ? this.keywordTooltipText(card.keywords) : card.name}
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
    this.setState({sidebarClass: "active"});
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
    img.stopPropagation();
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
          //var imgUrl = { background: "linear-gradient(90deg, rgb(52,41,54) 30%, rgba(52,41,54,0) 70%), url(" + "/img/cards/" + cardProps[0] + ".png) right center no-repeat" };
        return (
          <div className="cardTile rounded divText" key={index} id={prop} onClick={this.removeCard} >
          <div className="row justify-content-center">
            <div className="col-1 rounded-circle cmc marginTop text-center">{cardProps[4]}</div>
            <div className="col-7 cardName marginTop " id={prop} onClick={this.removeCard}>{cardProps[3]}</div>
            <div className="col-1 quanBack rounded marginTop text-center">{this.state.decklist[prop]}</div>
          </div>
            <img className="image-container img-fluid" src={"/img/cards/" + cardProps[0] + ".png"} alt={"Legends of Runeterra Deck Builder " + cardProps[3]} /> 
          </div>
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
    <nav id="sidebar" className={this.state.sidebarClass}>
            <div class="sidebar-header">
                <h3>Current Deck</h3>
            </div>
            <div id="dismiss" onClick={this.hideBar}>
                {this.state.arrow}
            </div>

            <div class="list-unstyled components">
                {this.state.deckStyled}
            </div>
        </nav>
        <div id="content" className={this.state.contentClass}>
        <FilterBar className="filter" setFilteredSet={this.setFilteredSet} />
          <div id="sidebarBtn" className={this.state.buttonClass + " " + "rounded text-center"} onClick={this.openSidebar}>&#62;</div>

          <div className="setName text-center pt-4"><h2>Legends of Runeterra Deck Builder</h2></div>
          <div className="setName text-center pb-5 pt-1"><p>This is a Legends of Runeterra Deckbuilder. This deckbuilder will let you filter cards by type, keywords and name. The Legends of Runeterra Deck builder here on Runeterra Nexus is the best way to create new Runeterra decks.</p></div>
          <div className="row">{this.createRows()}</div>
        </div>
      </div>
    );
  }
};

export default Set;
