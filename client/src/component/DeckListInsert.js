import React from "react";
import baseSet from "../card_info/set1.json";
import ReactToooltip from 'react-tooltip';
const { DeckEncoder, Card } = require('runeterra');


class DeckListInsert extends React.Component {
	constructor(props) {
    	super(props);
  	}

  	decodeDeck(){
  		var deckIn = DeckEncoder.decode(this.props.deckcode);
  		var deck = [];
  		var spells = [];
  		var champs = [];
  		var followers = [];
  		for (var i = 0; i < deckIn.length; i++) {
			//console.log(deckIn[i].code);
			for (var j = 0; j < baseSet.length; j++) {
				if (deckIn[i].code === baseSet[j].cardCode) {
					//console.log(baseSet[j].name)
					if (baseSet[j].type === "Spell") {
						baseSet[j].count = deckIn[i].count;
						spells.push(baseSet[j]);
					}
					if (baseSet[j].type === "Unit" && baseSet[j].supertype !== "Champion") {
						baseSet[j].count = deckIn[i].count;
						followers.push(baseSet[j]);
					}
					if (baseSet[j].type === "Unit" && baseSet[j].supertype === "Champion") {
						baseSet[j].count = deckIn[i].count;
						champs.push(baseSet[j]);
					}
			
				}
			}
		}
  		console.log(deck);
  		const spellList = spells.map((card, index) =>
  			<div>
  				<span>{card.count} </span>
  				<a data-tip data-for={card.cardCode} href={"/card/" + card.name.replace(/ /g, "_").replace(/:/g, "")}>{card.name}
				</a>
				<ReactToooltip className="opaque" place="right" type="none" id={card.cardCode}><img className="hover-images" src={"/img/cards/" + card.cardCode + ".png"} alt={"Legends of Runeterra Decklist card " + card.name} /></ReactToooltip>
				
  				
  			</div>
  		);
  		const followList = followers.map((card) =>
  			<div>
  				<span>	{card.count} </span>
  				<a data-tip data-for={card.cardCode} href={"/card/" + card.name.replace(/ /g, "_").replace(/:/g, "")}>{card.name}
				</a>
				<ReactToooltip className="opaque" place="right" type="none" id={card.cardCode}><img className="hover-images" src={"/img/cards/" + card.cardCode + ".png"} alt={"Legends of Runeterra Decklist card " + card.name} /></ReactToooltip>
				
  				
  			</div>
  		);
  		const champList = champs.map((card) =>
  			<div>
  				<span>	{card.count} </span>
  				<a data-tip data-for={card.cardCode} href={"/card/" + card.name.replace(/ /g, "_").replace(/:/g, "")}>{card.name}
				</a>
				<ReactToooltip className="opaque" place="right" type="none" id={card.cardCode}><img className="hover-images" src={"/img/cards/" + card.cardCode + ".png"} alt={"Legends of Runeterra Decklist card " + card.name} /></ReactToooltip>
				
  				
  			</div>
  		);
  		deck[0] = (<h5>Champions</h5>);
  		deck[1] = champList;
  		deck[2] = (<h5>Units</h5>);
  		deck[3] = followList;
  		deck[4] = (<h5>Spells</h5>);
  		deck[5] = spellList;

  		const deckOut = deck.map((list) =>
  			<div>
  				{list}
  			</div>
  		);

  		return(
  			deckOut
  		);
  	}


	render(){
		return(
			<div>
				{this.decodeDeck()}
			</div>
		);
	}

}

export default DeckListInsert;