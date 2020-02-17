import React from "react";
import baseSet from "../../card_info/set1.json"
import { Helmet } from "react-helmet";
import "./Card.css";
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: {},
      assocCards: [],
      cardIndex: 0,
      activeCard : {},
      isLoaded: false,
      isPrevDisabled: false,
      isNextDisabled: false
    };
    this.cardArray = [];
    this.cardPrev = this.cardPrev.bind(this);
    this.cardNext = this.cardNext.bind(this);
  }


  componentDidMount() {
    var cardName = this.props.match.params.name.replace(/_/g, " ");

    for (var index = 0; index < baseSet.length; index++) {
      var searchCard = baseSet[index];

      if (searchCard.name.replace(/:/g, "") === cardName && searchCard.collectible === true) {
        this.setState({ card: searchCard , activeCard: searchCard});
        for (var lmn =0; lmn < searchCard.associatedCardRefs.length; lmn++){
          for (var idx = 0; idx < baseSet.length; idx++ ){
            var cardCode = searchCard.associatedCardRefs[lmn];
            if (cardCode === baseSet[idx].cardCode){
              this.cardArray[lmn+1] = baseSet[idx];
            }
          }
        }
        
        this.cardArray[0] = searchCard;
        this.setState({assocCards: this.cardArray, isLoaded: true});
        break;
      }
    }
  }

  cardNext() {

    this.setState({isNextDisabled: true});
    setTimeout(() => this.setState({isNextDisabled : false}), 601);
    var cardIndex = this.state.cardIndex;
    var length = this.state.assocCards.length;
    this.setState({cardIndex: (cardIndex + 1) % length});
  }

  cardPrev() {


    this.setState({isPrevDisabled: true});
    setTimeout(() => this.setState({isPrevDisabled : false}), 601);

    var cardIndex = this.state.cardIndex;
    var length = this.state.assocCards.length;
    cardIndex = cardIndex == 0 ? length-1 : (cardIndex-1)%length;
    this.setState({cardIndex: cardIndex});
  }

  render() {

    if (this.state.isLoaded) {
      return (
        <div className="container">
           <Helmet>
           <title>{this.state.assocCards[this.state.cardIndex].name + " | Legends of Runeterra Cards on Runeterra Nexus"}</title>
           <meta name="description" content={this.state.assocCards[this.state.cardIndex].name + " is one of the many cards in Legends of Runeterra. Runeterra Nexus is the place to help you evaluate " +this.state.assocCards[this.state.cardIndex].name+" as well as other Legends of Runeterra cards." } />
           <meta name="keywords" content={this.state.assocCards[this.state.cardIndex].name + ", " + this.state.assocCards[this.state.cardIndex].type + ", " + this.state.assocCards[this.state.cardIndex].spellSpeed + ", " + this.state.assocCards[this.state.cardIndex].region + ", " + this.state.assocCards[this.state.cardIndex].rarity + ", Legends, Runeterra, Nexus, cards, lor,deck,decklist, decks,new,champion,champions, best, card, library, list,lists"} />
           <meta name="author" content="runeterranexus.com" />
           <meta http-equiv="Content-Language" content="en-US" />
           <meta name="rating" content="kids" />
           <meta http-equiv="content-type" content="text/html" charSet="utf-8" />
         </Helmet>                            
          <div className="text-center cardName"  id="cardList">
            <h2 className="pt-3">{this.state.assocCards[this.state.cardIndex].name}</h2>
            <p className="pb-4 pt-1">{this.state.assocCards[this.state.cardIndex].name + " is one of the many cards in Legends of Runeterra. Runeterra Nexus is the place to help you evaluate " +this.state.assocCards[this.state.cardIndex].name+" as well as other Legends of Runeterra cards."}</p>
          </div>

          <div className="row">
            { this.state.assocCards.length <= 1 && 
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <img className="bigCardImg img-fluid" src={"/img/cards/"+this.state.assocCards[this.state.cardIndex].cardCode+".png"} alt={this.state.assocCards[this.state.cardIndex].name} />
              </div>
            }

            { this.state.assocCards.length > 1 &&
              <div id="carouselExampleControls" className="carousel slide col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 carousel-fade" data-ride="carousel" data-interval="false">
                <div className="carousel-inner">
                {this.state.assocCards.map( (assocCard,index) =>
                  <div className={index === 0 ? "carousel-item active" : "carousel-item"} key={index}>
                    <img className="d-block bigCardImg img-fluid" src={"/img/cards/"+assocCard.cardCode+".png"} alt={assocCard.name}/>
                  </div>
               )}
                </div>
                <button className="carousel-control-prev btn btn-outline carousel-select" disabled={this.state.isPrevDisabled} href="#carouselExampleControls" role="button" onClick={this.cardPrev} data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </button>
                <button className="carousel-control-next btn btn-outline carousel-select" disabled={this.state.isNextDisabled} href="#carouselExampleControls" role="button" onClick={this.cardNext} data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </button>
              </div>
            }
  
            <div className=" pt-2 cardSpecs col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="row">
                <div className="col">Name</div>
                <div className="col">{this.state.assocCards[this.state.cardIndex].name}</div>
              </div>
              <hr/>
              <div className="row">
                <div className="col">Mana Cost</div>
                <div className="col">{this.state.assocCards[this.state.cardIndex].cost}</div>
              </div>
              <hr/>
              <div className="row">
                <div className="col">Faction</div>
                <div className="col">{this.state.assocCards[this.state.cardIndex].region}</div>
              </div>
              <hr/>
              <div className="row">
                <div className="col">Card Type</div>
                <div className="col">{this.state.assocCards[this.state.cardIndex].supertype === "" ? this.state.assocCards[this.state.cardIndex].type : this.state.assocCards[this.state.cardIndex].type +" - "+this.state.assocCards[this.state.cardIndex].supertype}</div>
              </div>
              <hr/>
              <div className="row">
                <div className="col">Attack / Health</div>
                <div className="col">{this.state.assocCards[this.state.cardIndex].attack} / {this.state.assocCards[this.state.cardIndex].health}</div>
              </div>
              <hr/>
              <div className="row">
                <div className="col">Rarity</div>
                <div className="col">{this.state.assocCards[this.state.cardIndex].rarity}</div>
              </div>
              <hr/>
              <div className="row">
                <div className="col">Text</div>
                <div className="col">{this.state.assocCards[this.state.cardIndex].descriptionRaw}</div>
              </div>
              <hr/>
              <div className="row">
                <div className="col">Flavor Text</div>
                <div className="col">{this.state.assocCards[this.state.cardIndex].flavorText}</div>
              </div>
              <hr/>
              <div className="row">
                <div className="col">Keywords</div>
                <div className="col"><div className="row">{this.state.assocCards[this.state.cardIndex].keywords.map(kw => (<a className="col-12" href="#" key={kw}>{kw}</a> ))}</div></div>
              </div>
              <hr/>
              <div className="row">
                <div className="col">Decks with this Card</div>
                <div className="col"><a className="" href="#">Coming Soon!</a></div>
              </div>
              <hr/>
              <div className="row">
                <div className="col">Card Evaluation</div>
                <div className="col">Coming Soon!</div>
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