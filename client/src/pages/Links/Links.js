import React from "react";
import { Helmet } from "react-helmet";
import baseSet from "../../card_info/set1.json";
class Links extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.createHelmet = this.createHelmet.bind(this);
        this.createLinks = this.createLinks.bind(this);

    };
 


  componentDidMount() {
    
  }

  createHelmet() {

    let metatitle = "Runeterra Nexus Privacy Policy | Best Legends of Runeterra Decks on Runeterra Nexus"; //will need to add a property for which set it is
    let descrip = "This is the privacy policy for Runeterra Nexus. We are committed to bringing you the best Runeterra decks known to man."; //will need to add a property for which set it is
    let metacontent = "cards,card library,lor,legend, nexus, legends,runeterra,deck,decklist,decklists,decks,set,sets,expansion,expansions, privacy,best"; //will need to add in property for which set it is

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

  createLinks(){
    const list = baseSet.map((card, index) => {
        if (card.rarity !== "None" && card.keywords.indexOf("Skill") === -1 && card.name !== "Accelerated Purrsuit"){

          return (
            
              <div>
                <a data-tip data-for={card.cardCode} href={"/card/" + card.name.replace(/ /g, "_").replace(/:/g, "")}>{card.name}</a>
              </div>
              
            );
        }
        else
          return " "
      });
      return list;
  }

  render() {
    return(
    <div className="regBody container">
      {this.createHelmet()}
      {this.createLinks()}
    </div>
    );
   } 
};

export default Links;