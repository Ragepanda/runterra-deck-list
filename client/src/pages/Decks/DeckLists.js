import React from 'react';
import { Helmet } from "react-helmet";
import api from '../../utils/api';
import ReactToooltip from 'react-tooltip';
import "./Decklists.css";



class Deck extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            decks: [],
            isLoaded: false,
            err: null
        };
    }

    componentDidMount() {
        api.getDeckLists()
            .then(res => {
                //console.log(res.data);
                this.setState({
                    isLoaded: true,
                    decks: res.data
                });


            })
            .catch(err => {
                this.setState({
                    isLoaded: true,
                    error: err
                })
            });
        //console.log("Mounted");
    }

    createRows() {
        const list = this.state.decks.map((deck, index) => {
            return (
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4 p-4 deck-box" key={deck.id}>
                    <a data-tip data-for={deck.id} href={"/deck_lists/" + deck.name.replace(/ /g, "_") + "/" + deck.id} className="deck-link">
                        <img className="image-container img-fluid deck-image" src={"/img/cards/" + deck.cardArtId + "-full.png"} alt={"Legends of Runeterra Decks " + deck.name} />
                        <div className="deck-name">{deck.name}</div>
                        <svg height="25" wdith="25" viewBox="0 0 25 25" className="deck-like" fill="#8a3df9">
                            <path d="M 23.2695 10.5742 L 12.8516 0.152344 C 12.7539 0.0546875 12.6211 0 12.4844 0 C 12.3438 0 12.2148 0.0546875 12.1133 0.152344 L 1.73047 10.5742 C 1.58203 10.7227 1.53516 10.9492 1.61719 11.1406 C 1.69922 11.3359 1.88672 11.4609 2.09766 11.4609 L 7.82422 11.4609 L 7.82422 24.4805 C 7.82422 24.7656 8.05859 25 8.34375 25 L 16.6758 25 C 16.9648 25 17.1953 24.7656 17.1953 24.4805 L 17.1953 11.4609 L 22.9023 11.4609 C 23.1133 11.4609 23.3008 11.3359 23.3828 11.1406 C 23.4648 10.9453 23.418 10.7227 23.2695 10.5742 Z M 23.2695 10.5742"></path>
                        </svg>
                    </a>
                    <ReactToooltip className="set-tooltips" place="top" effect="solid" id={deck.id.toString()}>
                        <p>{deck.description}</p>
                    </ReactToooltip>
                </div>
            );
        });
        return list;
    }


    render() {
        if (this.state.isLoaded === true) {
            return (
                <div className="container" id="dList">
                    <Helmet>
                        <title>{"Best Legends of Runeterra Decks | Legends of Runeterra Decks on Runeterra Nexus"}</title>
                        <meta name="description" content={'This Runeterra deck is one of the many best Legends of Runeterra decks we have here at Runeterra Nexus.'} />
                        <meta name="keywords" content={'decks,decklists,deck,decklist,best,legends,runeterra,lor,nexus'} />
                        <meta name="author" content="runeterranexus.com" />
                        <meta http-equiv="Content-Language" content="en-US" />
                        <meta name="rating" content="kids" />
                        <meta http-equiv="content-type" content="text/html" charSet="utf-8" />
                    </Helmet>

                    <div className="setName text-center pt-4"><h2>Legends of Runeterra Decklists</h2></div>
                    <div className="setName text-center pb-5 pt-1"><p>This is the deck list of Legends of Runeterra decks in the Legends of Runeterra base set. Runeterra Hub is the spot to view new Legends of Runeterra decks.</p></div>

                    <div className="row text-center">
                        {this.createRows()}
                    </div>
                </div>
            )
        }
        else {
            return (
                <div><h2>Loading...</h2></div>
            )
        }
    }


}


export default Deck;