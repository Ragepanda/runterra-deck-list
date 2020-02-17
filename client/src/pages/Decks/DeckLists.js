import React from 'react';
import { Helmet } from "react-helmet";
import api from '../../utils/api';
import ReactToooltip from 'react-tooltip';
import DeckItem from "../../component/Deck";
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
                console.log(res.data);
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
        
            return (
                <div className="row text-center">
                        {this.state.decks.map((deck, index)=>
                            <DeckItem deck={deck} key={index}/>
                        )
                        }
                </div>
            );

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