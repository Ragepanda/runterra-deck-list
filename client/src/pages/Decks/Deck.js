import React from 'react';
import baseSet from "../../card_info/set1.json";
import { Helmet } from "react-helmet";
const {DeckEncoder} = require('runeterra');


class Deck extends React.Component{
	constructor(props) {
    	super(props);
    	
  		this.state = {
  			deck: DeckEncoder.decode('CEBAIAIFAEHSQNQIAEAQGDAUDAQSOKJUAIAQCBI5AEAQCFYA'),
      		spells: [],
      		followers: [],
      		champions: [],
      		isLoaded: false
    	};
    	//console.log(this.state.deck);
    	//console.log(baseSet[0].name)
  	}

 
  	componentDidMount() {
  		for(var i =0; i < this.state.deck.length; i++){
  			//console.log(this.state.deck[i].code);
  			for (var j = 0; j < baseSet.length; j++){
  				if(this.state.deck[i].code == baseSet[j].cardCode){
  					//console.log(baseSet[j].name)
  					if(baseSet[j].type == "Spell"){
  						baseSet[j].count = this.state.deck[i].count;
  						this.state.spells.push(baseSet[j]);
  					}
  					if(baseSet[j].type == "Unit" && baseSet[j].supertype != "Champion"){
  						baseSet[j].count = this.state.deck[i].count;
  						this.state.followers.push(baseSet[j]);
  					}
  					if(baseSet[j].type == "Unit" && baseSet[j].supertype == "Champion"){
  						baseSet[j].count = this.state.deck[i].count;
  						this.state.champions.push(baseSet[j]);
  					}
  					
  				}
  			}
  		}
  		this.setState({isLoaded: true })
  		console.log(this.state.spells)
  		console.log(this.state.followers)
  		console.log(this.state.champions)
	}

	makeSpellList(){
		if(this.state.isLoaded){
			//console.log(this.state.spells[0].name);
			const spellList = this.state.spells.map((spell) => <li><a href={"/card/"+spell.name}>{spell.name} x {spell.count}</a></li>);
			return(spellList);
		}
	}
	makeFollowerList(){
		if(this.state.isLoaded){
			//console.log(this.state.followerss[0].name);
			const followersList = this.state.followers.map((followers) => <li><a href={"/card/"+followers.name}>{followers.name} x {followers.count}</a></li>);
			return(followersList);
		}
	}
	makeChampionList(){
		if(this.state.isLoaded){
			//console.log(this.state.championss[0].name);
			const championsList = this.state.champions.map((champions) => <li><a href={"/card/"+champions.name}>{champions.name} x {champions.count}</a></li>);
			return(championsList);
		}
	}

	render(){
		return(
			<div>
			<Helmet>
           <title>{ " | Legends of Runeterra Cards on Runeterra Hub"}</title>
           		<meta name="description" content={''} />
           		<meta name="keywords" content={''} />
           		<meta name="author" content="runeterrahub.com" />
           		<meta http-equiv="Content-Language" content="en-US" />
           		<meta name="rating" content="kids" />
          		<meta http-equiv="content-type" content="text/html" charSet="utf-8" />
         	</Helmet> 
				<h2>Deck Name</h2>
				<h3>Champions</h3>
				<ui>
					{this.makeChampionList()}
				</ui>
				<h3>Followers</h3>
				<ui>
					{this.makeFollowerList()}
				</ui>
				<h3>Spells</h3>
				<ui>
					{this.makeSpellList()}
				</ui>
			</div>
		);
	}

}



export default Deck;