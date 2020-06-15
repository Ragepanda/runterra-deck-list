import React from 'react';
import { Helmet } from "react-helmet";
import api from '../../utils/api';
import ReactToooltip from 'react-tooltip';
import DeckItem from "../../component/Deck";
import "./Decklists.css";

const { DeckEncoder, Card } = require('runeterra'); //We need to import this card object to properly pass stuff to the encoder




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
                console.log(this.mergeSort(res.data));
                console.log("here");
                this.setState({
                    isLoaded: true,
                    decks: this.mergeSort(res.data)
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

    mergeSort (unsortedArray) {
         // No need to sort the array if the array only has one element or empty
        if (unsortedArray.length <= 1) {
            return unsortedArray;
        }
        // In order to divide the array in half, we need to figure out the middle
        const middle = Math.floor(unsortedArray.length / 2);

        // This is where we will be dividing the array into left and right
        const left = unsortedArray.slice(0, middle);
        const right = unsortedArray.slice(middle);

        // Using recursion to combine the left and right
        return this.merge(
        this.mergeSort(left), this.mergeSort(right)
        );
    }

    merge (left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;

    // We will concatenate values into the resultArray in order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex].likes > right[rightIndex].likes) {
            resultArray.push(left[leftIndex]);
            leftIndex++; // move left array cursor
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++; // move right array cursor
        }
    }

    // We need to concat here because there will be one element remaining
    // from either left OR the right
    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
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

                    <div>
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