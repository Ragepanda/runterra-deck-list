import React from 'react';
import baseSet from "../../card_info/set1.json";
import { Helmet } from "react-helmet";
import { Bar } from 'react-chartjs-2';
import ReactToooltip from 'react-tooltip';
import "./Deck.css"
import api from '../../utils/api';
const { DeckEncoder } = require('runeterra');


class Deck extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			deck: DeckEncoder.decode('CEBAIAIFAEHSQNQIAEAQGDAUDAQSOKJUAIAQCBI5AEAQCFYA'),
			spells: [],
			followers: [],
			champions: [],
			regions: [],
			regionCount: [0,0],
			manaCurve: [0, 0, 0, 0, 0, 0, 0, 0],
			isLoaded: false,
			numChamp: 0,
			numFollower: 0,
			numSpells: 0,
			deckName : ""
		};
		//console.log(this.state.deck);
		//console.log(baseSet[0].name)
	}


	componentDidMount() {
		console.log(this.props.match.params);
			api.getDeckById(this.props.match.params.id)
			.then((res)=>{
				this.setState({deck: DeckEncoder.decode(res.data.code)}, ()=>{
					for (var i = 0; i < this.state.deck.length; i++) {
						//console.log(this.state.deck[i].code);
						for (var j = 0; j < baseSet.length; j++) {
							if (this.state.deck[i].code === baseSet[j].cardCode) {
								//console.log(baseSet[j].name)
								if (baseSet[j].cost >= 7)
									this.state.manaCurve[7] += this.state.deck[i].count;
								else
									this.state.manaCurve[baseSet[j].cost] += this.state.deck[i].count;
								if (baseSet[j].type === "Spell") {
									baseSet[j].count = this.state.deck[i].count;
									this.state.spells.push(baseSet[j]);
									this.state.numSpells+=this.state.deck[i].count;
									this.handleRegions(baseSet[j], this.state.deck[i].count);
								}
								if (baseSet[j].type === "Unit" && baseSet[j].supertype !== "Champion") {
									baseSet[j].count = this.state.deck[i].count;
									this.state.followers.push(baseSet[j]);
									this.state.numFollower+=this.state.deck[i].count;
									this.handleRegions(baseSet[j], this.state.deck[i].count);
								}
								if (baseSet[j].type === "Unit" && baseSet[j].supertype === "Champion") {
									baseSet[j].count = this.state.deck[i].count;
									this.state.champions.push(baseSet[j]);
									this.state.numChamp+=this.state.deck[i].count;
									this.handleRegions(baseSet[j], this.state.deck[i].count);
								}
			
							}
						}
					}
					this.setState({ isLoaded: true });
					this.setState({deckName: this.props.match.params.deckName.replace(/_/g, ' ')});
					//console.log(this.state.manaCurve)
				})
			})
	}

	handleRegions(obj, count){
			if(this.state.regions.length < 1){
				this.state.regions[0] = obj.regionRef.toLowerCase();
				this.state.regionCount[0]+= count;
				//console.log("check 1");
			}
			else if(this.state.regions[0] === obj.regionRef.toLowerCase()){
				this.state.regionCount[0]+= count;
				//console.log("check 2");
			}
			else{
				this.state.regions[1] = obj.regionRef.toLowerCase();
				this.state.regionCount[1]+= count;
				//console.log("check 3");
			}
	}

	makeSpellList() {
		if (this.state.isLoaded) {
			//console.log(this.state.spells[0].name);
			this.state.spells.sort((a, b) => a.cost - b.cost || a.name.localeCompare(b.name));
			const spellList = this.state.spells.map((spell,index) =>
				<div className="cardContainer">
				<span className="count">{spell.count}</span>
				<span className={spell.rarity}></span>
				<a className={spell.region} data-tip data-for={spell.cardCode} href={"/card/" + spell.name.replace(/ /g, "_").replace(/:/g, "")}>{spell.name}
				<div className={"cardTiles " + spell.regionRef + " rounded divText"} key={index}  >
				  <div className="row justify-content-center"   >
				    <div className="col-1 cmc marginTop"  >
				      <img className="mana-image" src={"/img/misc/mana" + spell.cost + ".png"}   />
				    </div>

				    <div className="col-7 cardName marginTop text-center align-middle"  >
				      <span className="card-name-sidebar"  >{spell.name}</span>
				    </div>
				  </div>
				  <img className="image-container img-fluid card-art-deckbuilder"   src={"/img/cards/" + spell.cardCode + ".png"} alt={"Legends of Runeterra Decklist " + spell.name} />
				</div>
				</a>
				<ReactToooltip className="opaque" place="right" type="none" id={spell.cardCode}><img className="hover-images" src={"/img/cards/" + spell.cardCode + ".png"} alt={"Legends of Runeterra Decklist card " + spell.name} /></ReactToooltip>
				</div>);
			return (spellList);
		}
	}
	makeFollowerList() {
		if (this.state.isLoaded) {
			//console.log(this.state.followers[3].region);
			this.state.followers.sort((a, b) => a.cost - b.cost || a.name.localeCompare(b.name));
			const followersList = this.state.followers.map((followers,index) =>
				<div className="cardContainer">
				<span className="count">{followers.count}</span>
				<span className={followers.rarity}></span>
				<a className={followers.region} data-tip data-for={followers.cardCode} href={"/card/" + followers.name.replace(/ /g, "_").replace(/:/g, "")}>{followers.name}
				<div className={"cardTiles " + followers.regionRef + " rounded divText"} key={index}  >
				  <div className="row justify-content-center"   >
				    <div className="col-1 cmc marginTop"  >
				      <img className="mana-image" src={"/img/misc/mana" + followers.cost + ".png"}   />
				    </div>

				    <div className="col-7 cardName marginTop text-center align-middle"  >
				      <span className="card-name-sidebar"  >{followers.name}</span>
				    </div>
				  </div>
				  <img className="image-container img-fluid card-art-deckbuilder"   src={"/img/cards/" + followers.cardCode + ".png"} alt={"Legends of Runeterra Decklist " + followers.name} />
				</div>
				</a>
				<ReactToooltip className="opaque" place="right" type="none" id={followers.cardCode}><img className="hover-images" src={"/img/cards/" + followers.cardCode + ".png"} alt={"Legends of Runeterra Decklist card " + followers.name} /></ReactToooltip>
				</div>);
			return (followersList);
		}
	}
	makeChampionList() {
		if (this.state.isLoaded) {
			//console.log(this.state.champions[0].region);

				this.state.champions.sort((a, b) => a.cost - b.cost || a.name.localeCompare(b.name));
			const championsList = this.state.champions.map((champions,index) =>
				<div className="cardContainer">
				<span className="count">{champions.count}</span>
				<span className={champions.rarity}></span>
				<a className={champions.region} data-tip data-for={champions.cardCode} href={"/card/" + champions.name.replace(/ /g, "_").replace(/:/g, "")}>{champions.name}
				<div className={"cardTiles " + champions.regionRef + " rounded divText"} key={index}  >
				  <div className="row justify-content-center"   >
				    <div className="col-1 cmc marginTop"  >
				      <img className="mana-image" src={"/img/misc/mana" + champions.cost + ".png"}   />
				    </div>

				    <div className="col-7 cardName marginTop text-center align-middle"  >
				      <span className="card-name-sidebar"  >{champions.name}</span>
				    </div>
				  </div>
				  <img className="image-container img-fluid card-art-deckbuilder"   src={"/img/cards/" + champions.cardCode + ".png"} alt={"Legends of Runeterra Decklist " + champions.name} />
				</div>
				</a>
				<ReactToooltip className="opaque" place="right" type="none" id={champions.cardCode}><img className="hover-images" src={"/img/cards/" + champions.cardCode + ".png"} alt={"Legends of Runeterra Decklist card " + champions.name} /></ReactToooltip>
				</div>);
			return (championsList);
		}
	}
	makeManaCurveChart() {
		if(this.state.isLoaded){
			var data ={
			labels: ["0", "1", "2", "3", "4", "5", "6", "7+"], 
			datasets: [
			{
				data: this.state.manaCurve,
				backgroundColor: '#D68FD6'//change bar color here

			}
			]};

			var options = {
			title: {
				display: true,
				text: "Mana Curve",
				fontColor: '#FFFBF0', //Change title font color
        		fontSize: 20  //Change title font size
			},
			legend: {
        		display: false
        	},
    		scales: {
        		yAxes: [{
        			display: false,
        			backgroundColor: 'rgba(223, 128, 255)'//change grid color here
        		}],
        		xAxes: [{

        			ticks:{
        				backgroundColor: 'rgba(223, 128, 255)',
        				fontColor: '#FFF8F0', //Change x axes font color
        				fontSize: 20  //Change x axes font size
        			},
        			gridLines:{
        				display: false
        			}
        		}]
    		}
			};
			return(
				<Bar
					data={data}
					options={options}
				/>
			);
		}
	}

	render() {
		var ulStyle ={
			listStyleType: "none"
		};
		return (
			<div class="container" id="pageList">
				<Helmet>
					<title>{"Best Legends of Runeterra Decks | Legends of Runeterra Decks on Runeterra Nexus"}</title>
					<meta name="description" content={'This Runeterra deck is one of the many best Legends of Runeterra decks we have here at Runeterra Nexus.'} />
					<meta name="keywords" content={'decks,decklists,deck,decklist,best,legends,runeterra,lor,nexus'} />
					<meta name="author" content="runeterranexus.com" />
					<meta http-equiv="Content-Language" content="en-US" />
					<meta name="rating" content="kids" />
					<meta http-equiv="content-type" content="text/html" charSet="utf-8" />
				</Helmet>

				<h2>Best Legends of Runeterra Decks</h2>

				<p>This Runeterra deck is one of the many best Legends of Runeterra decks we have here at Runeterra Nexus.</p>

				<h2 className="headers">{this.state.deckName}</h2>
				<div className="row">
					<div className="col-lg-6 col-sm-12 deckList">
						<h3 className="headers">Champions</h3>
						<ui className="a" style={ulStyle}>
							{this.makeChampionList()}
						</ui>
						<h3 className="headers">Followers</h3>
						<ui style={ulStyle}>
							{this.makeFollowerList()}
						</ui>
						<h3 className="headers">Spells</h3>
						<ui style={ulStyle}>
							{this.makeSpellList()}
						</ui>
					</div>	
					<div className="col-lg-6 col-sm-12">
						<div className="row">
							<div className="regionBreakdown">
								
									<span className="counter">{this.state.regionCount[0]}</span>
									<img className="regionImg" src={"/img/regions/icon-" + this.state.regions[0] +".png"}></img>
								
								
									<span className="counter">{this.state.regionCount[1]}</span>
									<img className="regionImg" src={"/img/regions/icon-" + this.state.regions[1] + ".png"}></img>
								
							</div>
						</div>
						<div className="row">
							<div className="cardTypeBreakdown">
								<span className="counter">{this.state.numChamp}</span>
								<img className="typeImg" src="/img/misc/champion-icon.png"></img>
								<span className="counter">{this.state.numFollower}</span>
								<img className="typeImg" src="/img/misc/follower-icon.png"></img>
								<span className="counter">{this.state.numSpells}</span>
								<img className="typeImg" src="/img/misc/spell-icon.png"></img>
							</div>
						</div>
						<div className="manaCurve">
							{this.makeManaCurveChart()}
						</div>
					</div>
				</div>
			</div>
		);
	}

}



export default Deck;