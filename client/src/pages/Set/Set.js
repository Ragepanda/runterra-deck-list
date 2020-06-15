import React from "react";
import { Helmet } from "react-helmet";
import baseSet from "../../card_info/set1.json";
import keywordSet from "../../card_info/globals-en_us.json"
import FilterBar from "../../component/FilterBar";
import ReactToooltip from "react-tooltip";
import debounce from "lodash.debounce";
import "./Set.css"



class Set extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: {},
      isLoaded: false,
      filteredSet: baseSet,
      renderedCards: 48,
      error: false,
      hasMore: true,
      isLoading: false
    };
    this.createHelmet = this.createHelmet.bind(this);
    this.setFilteredSet = this.setFilteredSet.bind(this);
    this.createRows = this.createRows.bind(this);
    this.generatePathData = this.generatePathData.bind(this);

    window.onscroll = debounce(() => {
      const {
        loadUsers,
        state: {
          error,
          isLoading,
          hasMore,
        },
      } = this;

      // Bails early if:
      // * there's an error
      // * it's already loading
      // * there's nothing left to load
      if (error || isLoading || !hasMore) return;

      // Checks that the page has scrolled to the bottom
      if (
        window.innerHeight + document.documentElement.scrollTop
        === document.documentElement.offsetHeight
      ) {
        this.setState({renderedCards: this.state.renderedCards+12}, ()=>{
          console.log("More loaded in");
        })
        
      }
    }, 100);
  }

  createHelmet() {

    let metatitle = "Legends of Runeterra Card Library | Legends of Runeterra Cards on Runeterra Nexus"; //will need to add a property for which set it is
    let descrip = "This is the list of Legends of Runeterra cards in the Legends of Runeterra base set. Runeterra Nexus is the spot to view new Legends of Runeterra sets."; //will need to add a property for which set it is
    let metacontent = "cards,card library,lor,legend, nexus, legends,runeterra,deck,decklist,decklists,decks,set,sets,expansion,expansions"; //will need to add in property for which set it is

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
        var text = (<div key={x}>
          <h5>{keywords[x] + " "}
            <svg height="35" wdith="35" viewBox="0 0 35 35" className="hover-icon" fill={fill}>
              {this.generatePathData(path)}
            </svg>
          </h5>
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
        pathHTML.push(<path d={path[x]} key={x}></path>);
      }
      return pathHTML;
    }
    else {
      return;
    }
  }
  
  createRows() {
    var numberRendered = 0;
    const list = this.state.filteredSet.map((card, index) => {
      if (card.rarity !== "None" && card.keywords.indexOf("Skill") === -1 && card.name !== "Accelerated Purrsuit" && numberRendered<this.state.renderedCards){
        numberRendered++;
        return (
          <div className="col-6 col-sm-6 col-md-4 col-lg-2 p-3" key={index}>
            <div>
              <a data-tip data-for={card.cardCode} href={"/card/" + card.name.replace(/ /g, "_").replace(/:/g, "")}>
                <img className="image-container img-fluid card-image" src={"/img/cards/" + card.cardCode + ".png"} alt={"Legends of Runeterra Cards " + card.name} />
              </a>
            </div>
            <ReactToooltip className="set-tooltips" place="bottom" effect="solid" id={card.cardCode}>
              {card.keywords.length > 0 ? this.keywordTooltipText(card.keywords) : card.descriptionRaw !== "" ? card.descriptionRaw : card.name}
            </ReactToooltip>
          </div>);
      }
      else
        return " "
    });
    return list;
  }

  componentDidMount() {
    if (typeof this.state.filteredSet !== "undefined") {
      this.setState({ isLoaded: true });
    }
  }


  render() {
    if (this.state.isLoaded === false) {
      return <div><p>Loading...</p></div>
    }
    return (

      <div className="container-fluid" id="neg-margin">
        {this.createHelmet()}
        <FilterBar setFilteredSet={this.setFilteredSet} renderedCards={this.state.renderedCards} />
        <div className="setName text-center pt-4"><h2>Legends of Runeterra Base Set</h2></div>
        <div className="setName text-center pb-5 pt-1"><p>This is the list of Legends of Runeterra cards in the Legends of Runeterra base set. Runeterra Hub is the spot to view new Legends of Runeterra sets.</p></div>
        <div id="side-margin">
          <div className="row">{this.createRows()}</div>
        </div>
      </div>
    );
  }
};

export default Set;