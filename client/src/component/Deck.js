import React from 'react';
import ReactToooltip from 'react-tooltip';
import api from "../utils/api";
import "./Deck.css";

class Deck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deck: null,
            isLoaded: false
        }
        this.likeDeck = this.likeDeck.bind(this);
    }

    likeDeck() {
        api.likeDeck(this.props.deck.id)
            .then(res => {
                    console.log(res.data);
                    this.setState({deck:{...this.state.deck, likes: res.data.likes }})

            })
    }

    componentDidMount() {
        this.setState({ deck: this.props.deck, isLoaded: true })
    }


    render() {
        if (this.state.isLoaded === true) {
            return (
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4 p-4 deck-box" key={this.state.deck.id}>
                    <a data-tip data-for={this.state.deck.id} href={"/deck_lists/" + this.state.deck.name.replace(/ /g, "_") + "/" + this.state.deck.id} className="deck-link">
                        <img className="image-container img-fluid deck-image" src={"/img/cards/" + this.state.deck.cardArtId + "-full.png"} alt={"Legends of Runeterra Decks " + this.state.deck.name} />
                        <div className="deck-name">{this.state.deck.name}</div>
                    </a>
                    <svg height="25" wdith="25" viewBox="0 0 25 25" className="deck-like" fill="#8a3df9" onClick={this.likeDeck}>
                        <path d="M 23.2695 10.5742 L 12.8516 0.152344 C 12.7539 0.0546875 12.6211 0 12.4844 0 C 12.3438 0 12.2148 0.0546875 12.1133 0.152344 L 1.73047 10.5742 C 1.58203 10.7227 1.53516 10.9492 1.61719 11.1406 C 1.69922 11.3359 1.88672 11.4609 2.09766 11.4609 L 7.82422 11.4609 L 7.82422 24.4805 C 7.82422 24.7656 8.05859 25 8.34375 25 L 16.6758 25 C 16.9648 25 17.1953 24.7656 17.1953 24.4805 L 17.1953 11.4609 L 22.9023 11.4609 C 23.1133 11.4609 23.3008 11.3359 23.3828 11.1406 C 23.4648 10.9453 23.418 10.7227 23.2695 10.5742 Z M 23.2695 10.5742"></path>
                    </svg>
                    <span className="num-likes" >{this.state.deck.likes}</span>

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