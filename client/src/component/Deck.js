import React from 'react';
import ReactToooltip from 'react-tooltip';
import api from "../utils/api";
import baseSet from "../card_info/set1.json";
import "./Deck.css";
import CircleLoader from "../../node_modules/react-spinners/CircleLoader";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

const { DeckEncoder, Card } = require('runeterra'); //We need to import this card object to properly pass stuff to the encoder

const circleLoaderStyles = {
    position: "relative",
    top: "40%",
    margin: "auto"
}

class Deck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deck: null,
            deletion: false,
            isLoaded: false,
            regionOne: "none",
            regionTwo: "none",
            champions: []
        }
        this.likeDeck = this.likeDeck.bind(this);
        this.deleteButtonRender = this.deleteButtonRender.bind(this);
        this.deleteDeck = this.deleteDeck.bind(this);
    }

    likeDeck() {
        api.likeDeck(this.props.deck.id)
            .then(res => {
                console.log(res.data);
                this.setState({ deck: { ...this.state.deck, likes: res.data.likes, likedByUser: !this.state.deck.likedByUser } }, () => {
                    if (this.props.updateDecks) {
                        this.props.updateDecks();
                    }
                });


            })
    }

    componentDidMount() {
        const deck = DeckEncoder.decode(this.props.deck.code);
        var tempRegionOne = "none";
        var tempRegionTwo = "none";
        var tempChampions = [];
        //console.log(deck[0].code);
        for (var i = 0; i < deck.length; i++) {
            if (deck[i].code.includes("SI")) {
                if (tempRegionOne != "icon-shadowisles" && tempRegionOne != "none") {
                    tempRegionTwo = "icon-shadowisles";
                }
                else {
                    tempRegionOne = "icon-shadowisles";
                }
            }
            if (deck[i].code.includes("DE")) {
                if (tempRegionOne != "icon-demacia" && tempRegionOne != "none") {
                    tempRegionTwo = "icon-demacia";
                }
                else {
                    tempRegionOne = "icon-demacia";
                }
            }
            if (deck[i].code.includes("NX")) {
                if (tempRegionOne != "icon-noxus" && tempRegionOne != "none") {
                    tempRegionTwo = "icon-noxus";
                }
                else {
                    tempRegionOne = "icon-noxus";
                }
            }
            if (deck[i].code.includes("PZ")) {
                if (tempRegionOne != "icon-piltoverzaun" && tempRegionOne != "none") {
                    tempRegionTwo = "icon-piltoverzaun";
                }
                else {
                    tempRegionOne = "icon-piltoverzaun";
                }
            }
            if (deck[i].code.includes("IO")) {
                if (tempRegionOne != "icon-ionia" && tempRegionOne != "none") {
                    tempRegionTwo = "icon-ionia";
                }
                else {
                    tempRegionOne = "icon-ionia";
                }
            }
            if (deck[i].code.includes("FR")) {
                if (tempRegionOne != "icon-freljord" && tempRegionOne != "none") {
                    tempRegionTwo = "icon-freljord";
                }
                else {
                    tempRegionOne = "icon-freljord";
                }
            }
            if (deck[i].code.includes("BW")) {
                if (tempRegionOne != "icon-bilgewater" && tempRegionOne != "none") {
                    tempRegionTwo = "icon-bilgewater";
                }
                else {
                    tempRegionOne = "icon-bilgewater";
                }
            }
            for(var j = 0; j < baseSet.length; j++){
                if(deck[i].code == baseSet[j].cardCode && baseSet[j].rarity == "Champion"){
                    tempChampions.push(baseSet[j].name);
                    console.log("here");
                }
            }

        }
        this.state.regionOne = tempRegionOne;
        this.state.regionTwo = tempRegionTwo;
        this.setState({ deck: this.props.deck, isLoaded: true, champions: tempChampions})

        console.log(tempChampions);
        //console.log(tempRegionOne);
        //console.log(tempRegionTwo);
        //console.log(this.state.regionOne);
        //console.log(this.state.regionTwo);
    }

    likedByUser() {
        if (this.state.deck.likedByUser === false || this.state.deck.likedByUser === undefined) {
            return "#8a3df9";
        }
        else {
            return '#D68FD6';
        }
    }


    deleteButtonRender() {
        if (this.props.profilePage === true) {
            return (
                <svg height="25" wdith="25" viewBox="0 0 25 25" className="deck-delete" fill="#FF0000" onClick={this.deleteDeck} >
                    <path d="M 24.1797 4.92969 L 16.5977 12.5117 L 24.1797 20.0938 C 25.3047 21.2227 25.3047 23.0508 24.1797 24.1797 C 23.6133 24.7422 22.875 25.0234 22.1367 25.0234 C 21.3984 25.0234 20.6602 24.7422 20.0977 24.1797 L 12.5117 16.5938 L 4.92969 24.1797 C 4.36719 24.7422 3.625 25.0234 2.88672 25.0234 C 2.14844 25.0234 1.41016 24.7422 0.847656 24.1797 C -0.28125 23.0508 -0.28125 21.2227 0.847656 20.0938 L 8.42969 12.5117 L 0.847656 4.92969 C -0.28125 3.80078 -0.28125 1.97266 0.847656 0.84375 C 1.97266 -0.28125 3.80078 -0.28125 4.92969 0.84375 L 12.5117 8.42969 L 20.0938 0.84375 C 21.2227 -0.28125 23.0508 -0.28125 24.1758 0.84375 C 25.3047 1.97266 25.3047 3.80078 24.1797 4.92969 Z M 24.1797 4.92969">
                    </path>
                </svg>
            )
        }
    }

    deleteDeck() {
        this.setState({deletion:true},()=>{
            api.deleteDeck(this.state.deck.id)
            .then(res => {
                if (res.data.deletion === true) {
                    this.props.updateDecks();
                }
            })
        })
        
    }

    renderRegionImg() {
        if (this.state.regionTwo != "none") {
            return (
                <div className="row regionImgRow">
                <div className="deckImgHolder">
                    <img className="deckRegionImg" src={"/img/regions/" + this.state.regionOne + ".png"}></img>
                </div>
                <div className="deckImgHolder">
                    <img className="deckRegionImg" src={"/img/regions/" + this.state.regionTwo + ".png"}></img>
                </div>

                </div>
            );
        }
        else {
            return (
                <div className="row regionImgRow">
                 <div className="deckImgHolder">
                    <img className="deckRegionImg" src={"/img/regions/" + this.state.regionOne + ".png"}></img>
                </div>
                </div>
            );
        }
    }

    renderChampions(){
        var championClass ="champIcon";
        if(this.props.profilePage === true){
            championClass ="profileChampIcon"
        }
        if(this.state.champions.length > 0){
            var champImages = this.state.champions.map((champ) =>
            <img className={championClass} src={"/img/champs/" + champ + "Square.png"} alt={champ}></img>);
            return(
                <div className="champIconHolder">
                    {champImages}
                </div>
            );
        }
        else{
            return(
                <div className="champIconHolder">
                    NO CHAMPIONS
                </div>
            );
        }
    }



    render() {
        if (this.state.isLoaded === true) {

            if (this.state.deletion === true) {
                return (
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 p-4 deletion-box" key={this.state.deck.id}>
                        
                            <CircleLoader
                                size={100}
                                color={"#8A3DF9"}
                                css={circleLoaderStyles}
                            />
                            <h3>Deleting Deck...</h3>
                        
                    </div>
                )
            }
            else {
                return (
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 p-4 deck-box" key={this.state.deck.id}>
                <div className="deck-card">
                    <Link data-tip data-for={this.state.deck.id} to={"/deck_lists/" + this.state.deck.name.replace(/ /g, "_") + "/" + this.state.deck.id} className="deck-link">
                        <img className=" deck-image" src={"/img/cards/" + this.state.deck.cardArtId + "-full.png"} alt={"Legends of Runeterra Decks " + this.state.deck.name} />
                        <div className="deck-name">{this.state.deck.name}</div>
                    </Link>

                    <svg height="25" wdith="25" viewBox="0 0 25 25" className="deck-like" fill={this.likedByUser()} onClick={this.likeDeck}>
                        <path d="M 23.2695 10.5742 L 12.8516 0.152344 C 12.7539 0.0546875 12.6211 0 12.4844 0 C 12.3438 0 12.2148 0.0546875 12.1133 0.152344 L 1.73047 10.5742 C 1.58203 10.7227 1.53516 10.9492 1.61719 11.1406 C 1.69922 11.3359 1.88672 11.4609 2.09766 11.4609 L 7.82422 11.4609 L 7.82422 24.4805 C 7.82422 24.7656 8.05859 25 8.34375 25 L 16.6758 25 C 16.9648 25 17.1953 24.7656 17.1953 24.4805 L 17.1953 11.4609 L 22.9023 11.4609 C 23.1133 11.4609 23.3008 11.3359 23.3828 11.1406 C 23.4648 10.9453 23.418 10.7227 23.2695 10.5742 Z M 23.2695 10.5742"></path>
                    </svg>
                    <span className="num-likes" >{this.state.deck.likes}</span>
                    {this.deleteButtonRender()}
                    {this.renderChampions()}
                    {this.renderRegionImg()}
                    
                    <ReactToooltip className="set-tooltips" place="top" effect="solid" id={this.state.deck.id.toString()}>
                        <p>{this.state.deck.description}</p>
                    </ReactToooltip>
                    </div>
                </div>
                )
            }

        }
        else {
            return (
                <div>
                    Loading
                </div>
            )
        }
    }

}

export default Deck;