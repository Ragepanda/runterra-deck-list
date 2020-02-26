import React from 'react';
import ReactToooltip from 'react-tooltip';
import api from "../utils/api";
import "./Deck.css";

const { DeckEncoder, Card } = require('runeterra'); //We need to import this card object to properly pass stuff to the encoder


class Deck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deck: null,
            isLoaded: false,
            regionOne: "none",
            regionTwo: "none"
        }
        this.likeDeck = this.likeDeck.bind(this);
    }

    likeDeck() {
        api.likeDeck(this.props.deck.id)
            .then(res => {
                    console.log(res.data);
                    this.setState({deck:{...this.state.deck, likes: res.data.likes, likedByUser: !this.state.deck.likedByUser }}, ()=>{
                        if(this.props.updateDecks){
                            this.props.updateDecks();
                        }
                    });
                    

            })
    }

    componentDidMount() {
        const deck = DeckEncoder.decode(this.props.deck.code);
        var tempRegionOne = "none";
        var tempRegionTwo = "none";
        console.log(deck[0].code);
        for(var i = 0; i<deck.length; i++){
            if(deck[i].code.includes("SI")){
                if(tempRegionOne != "icon-shadowisles" && tempRegionOne != "none"){
                    tempRegionTwo = "icon-shadowisles";
                }
                else{
                    tempRegionOne = "icon-shadowisles";
                }
            }
             if(deck[i].code.includes("DE")){
                if(tempRegionOne != "icon-demacia" && tempRegionOne != "none"){
                    tempRegionTwo = "icon-demacia";
                }
                else{
                    tempRegionOne = "icon-demacia";
                }
            }
             if(deck[i].code.includes("NX")){
                if(tempRegionOne != "icon-noxus" && tempRegionOne != "none"){
                    tempRegionTwo = "icon-noxus";
                }
                else{
                    tempRegionOne = "icon-noxus";
                }
            }
             if(deck[i].code.includes("PZ")){
                if(tempRegionOne != "icon-piltoverzaun" && tempRegionOne != "none"){
                    tempRegionTwo = "icon-piltoverzaun";
                }
                else{
                    tempRegionOne = "icon-piltoverzaun";
                }
            }
             if(deck[i].code.includes("IO")){
                if(tempRegionOne != "icon-ionia" && tempRegionOne != "none"){
                    tempRegionTwo = "icon-ionia";
                }
                else{
                    tempRegionOne = "icon-ionia";
                }
            }
             if(deck[i].code.includes("FR")){
                if(tempRegionOne != "icon-freljord" && tempRegionOne != "none"){
                    tempRegionTwo = "icon-freljord";
                }
                else{
                    tempRegionOne = "icon-freljord";
                }
            }

        }
        this.state.regionOne = tempRegionOne;
        this.state.regionTwo = tempRegionTwo;
        this.setState({ deck: this.props.deck, isLoaded: true })
        console.log(tempRegionOne);
        console.log(tempRegionTwo);
        console.log(this.state.regionOne);
        console.log(this.state.regionTwo);
    }

    likedByUser(){
        if(this.state.deck.likedByUser===true || this.state.deck.likedByUser===undefined){
            return '#D68FD6';
        }
        else{
            return "#8a3df9";
        }
    }

    renderRegionImg(){
        if(this.state.regionTwo != "none"){
            return(
                <div className="row regionImgRow">
                <div >
                    <img className="deckRegionImg" src={"/img/regions/" + this.state.regionOne + ".png"}></img>
                </div>
                <div >
                    <img className="deckRegionImg" src={"/img/regions/" + this.state.regionTwo + ".png"}></img>
                </div>
                </div>
            );
        }
        else{
            return(
                <div className="row regionImgRow">
                 <div>
                    <img className="deckRegionImg" src={"/img/regions/" + this.state.regionOne + ".png"}></img>
                </div>
                </div>
            );
        }
    }



    render() {
        if (this.state.isLoaded === true) {
            return (
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 p-4 deck-box" key={this.state.deck.id}>
                    <a data-tip data-for={this.state.deck.id} href={"/deck_lists/" + this.state.deck.name.replace(/ /g, "_") + "/" + this.state.deck.id} className="deck-link">
                        <img className="image-container img-fluid deck-image" src={"/img/cards/" + this.state.deck.cardArtId + "-full.png"} alt={"Legends of Runeterra Decks " + this.state.deck.name} />
                        <div className="deck-name">{this.state.deck.name}</div>
                    </a>

                    <svg height="25" wdith="25" viewBox="0 0 25 25" className="deck-like" fill={this.likedByUser()} onClick={this.likeDeck}>
                        <path d="M 23.2695 10.5742 L 12.8516 0.152344 C 12.7539 0.0546875 12.6211 0 12.4844 0 C 12.3438 0 12.2148 0.0546875 12.1133 0.152344 L 1.73047 10.5742 C 1.58203 10.7227 1.53516 10.9492 1.61719 11.1406 C 1.69922 11.3359 1.88672 11.4609 2.09766 11.4609 L 7.82422 11.4609 L 7.82422 24.4805 C 7.82422 24.7656 8.05859 25 8.34375 25 L 16.6758 25 C 16.9648 25 17.1953 24.7656 17.1953 24.4805 L 17.1953 11.4609 L 22.9023 11.4609 C 23.1133 11.4609 23.3008 11.3359 23.3828 11.1406 C 23.4648 10.9453 23.418 10.7227 23.2695 10.5742 Z M 23.2695 10.5742"></path>
                    </svg>
                    <span className="num-likes" >{this.state.deck.likes}</span>
                    {this.renderRegionImg()}
                    <ReactToooltip className="set-tooltips" place="top" effect="solid" id={this.state.deck.id.toString()}>
                        <p>{this.state.deck.description}</p>
                    </ReactToooltip>
                </div>
            )
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