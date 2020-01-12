import React from "react";
//import "./FilterBar.css"
import baseSet from "../card_info/set1.json";

class FilterBar extends React.Component {

    constructor(props) {
        super(props); // ✅ We passed props
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            cmc0Toggle: false,
            cmc1Toggle: false,
            cmc2Toggle: false,
            cmc3Toggle: false,
            cmc4Toggle: false,
            cmc5Toggle: false,
            cmc6Toggle: false,
            cmc7Toggle: false,
            cmc8Toggle: false,
        };

        this.cmc0State = this.cmc0State.bind(this);
        this.cmc1State = this.cmc1State.bind(this);
        this.cmc2State = this.cmc2State.bind(this);
        this.cmc3State = this.cmc3State.bind(this);
        this.cmc4State = this.cmc4State.bind(this);
        this.cmc5State = this.cmc5State.bind(this);
        this.cmc6State = this.cmc6State.bind(this);
        this.cmc7State = this.cmc7State.bind(this);
        this.cmc8State = this.cmc8State.bind(this);
        this.filterCards = this.filterCards.bind(this);
    }

    componentDidMount() {
        console.log("Filter bar found");
    }

    filterCards() {
        const cardSet = baseSet;

        var subset = [];
        // if (this.state.searchText === "")
        //     subset = cardSet.sort((a, b) => a.name.localeCompare(b.name));
        // else {
        //     var subset = cardSet.sort((a, b) => a.name.localeCompare(b.name)).filter((card) => {
        //         var reducedName = card.name.toLowerCase();
        //         return reducedName.includes(this.state.searchText.toLowerCase(), 0);
        //     })
        // }
        var cmcFilter = [];
        var factionFilter = [];

        if (this.state.cmc0Toggle === true) {
                    console.log("here");
            var cmc0Filter = [];
            cmc0Filter = subset.sort((a, b) => a.name.localeCompare(b.name)).filter(card => {
                var reducedCost = card.cost;
                console.log(reducedCost)
                var filterString = 0;
                return reducedCost === 0;
            })
            cmc0Filter.forEach(object => {
                cmcFilter.push(object);
            })
        }


        if (this.state.cmc1Toggle === true) {
            var cmc1Filter = [];
            cmc1Filter = subset.sort((a, b) => a.name.localeCompare(b.name)).filter(card => {
                var reducedCost = card.cost;
                var filterString = "1";
                return reducedCost.includes(filterString, 0);
            })
            cmc1Filter.forEach(object => {
                cmcFilter.push(object);
            })
        }


        if (this.state.cmc2Toggle === true) {
            var cmc2Filter = [];
            cmc2Filter = subset.sort((a, b) => a.name.localeCompare(b.name)).filter(card => {
                var reducedCost = card.cost;
                var filterString = "2";
                return reducedCost.includes(filterString, 0);
            })
            cmc2Filter.forEach(object => {
                cmcFilter.push(object);
            })
        }


        if (this.state.cmc3Toggle === true) {
            var cmc3Filter = [];
            cmc3Filter = subset.sort((a, b) => a.name.localeCompare(b.name)).filter(card => {
                var reducedCost = card.cost;
                var filterString = "3";
                return reducedCost.includes(filterString, 0);
            })
            cmc3Filter.forEach(object => {
                cmcFilter.push(object);
            })
        }


        if (this.state.cmc4Toggle === true) {
            var cmc4Filter = [];
            cmc4Filter = subset.sort((a, b) => a.name.localeCompare(b.name)).filter(card => {
                var reducedCost = card.cost;
                var filterString = "4";
                return reducedCost.includes(filterString, 0);
            })
            cmc4Filter.forEach(object => {
                cmcFilter.push(object);
            })
        }


        if (this.state.cmc5Toggle === true) {
            var cmc5Filter = [];
            cmc5Filter = subset.sort((a, b) => a.name.localeCompare(b.name)).filter(card => {
                var reducedCost = card.cost;
                var filterString = "5";
                return reducedCost.includes(filterString, 0);
            })
            cmc5Filter.forEach(object => {
                cmcFilter.push(object);
            })
        }

        if (this.state.cmc6Toggle === true) {
            var cmc6Filter = [];
            cmc6Filter = subset.sort((a, b) => a.name.localeCompare(b.name)).filter(card => {
                var reducedCost = card.cost;
                var filterString = "6";
                return reducedCost.includes(filterString, 0);
            })
            cmc6Filter.forEach(object => {
                factionFilter.push(object);
            })
        }


        if (this.state.cmc7Toggle === true) {
            var cmc7Filter = [];
            cmc7Filter = subset.sort((a, b) => a.name.localeCompare(b.name)).filter(card => {
                var reducedCost = card.cost;
                var filterString = "7";
                return reducedCost.includes(filterString, 0);
            })
            cmc7Filter.forEach(object => {
                factionFilter.push(object);
            })
        }


        if (this.state.cmc8Toggle === true) {
            var cmc8Filter = [];
            cmc8Filter = subset.sort((a, b) => a.name.localeCompare(b.name)).filter(card => {
                var reducedCost = card.cost;
                var filterString = "8";
                return reducedCost === "8";
            })
            cmc8Filter.forEach(object => {
                factionFilter.push(object);
            })
        }   

        if (this.state.cmc1Toggle === false && this.state.cmc0Toggle === false && this.state.cmc3Toggle === false &&
            this.state.cmc2Toggle === false && this.state.cmc4Toggle === false && this.state.cmc5Toggle === false &&
            this.state.cmc8Toggle === false && this.state.cmc7Toggle === false && this.state.cmc6Toggle === false) {
            return subset.sort((a, b) => a.name.localeCompare(b.name));
            
        }

        else if (
            (this.state.cmc8Toggle === false && this.state.cmc7Toggle === false && this.state.cmc6Toggle === false) &&
            (this.state.cmc1Toggle === true || this.state.cmc0Toggle === true || this.state.cmc3Toggle === true ||
                this.state.cmc2Toggle === true || this.state.cmc4Toggle === true || this.state.cmc5Toggle === true)) {
            return cmcFilter.sort((a, b) => a.name.localeCompare(b.name));
        }

        else if ((this.state.cmc1Toggle === false && this.state.cmc0Toggle === false && this.state.cmc3Toggle === false &&
            this.state.cmc2Toggle === false && this.state.cmc4Toggle === false && this.state.cmc5Toggle === false) &&
            (this.state.cmc8Toggle === true || this.state.cmc7Toggle === true || this.state.cmc6Toggle === true)) {
            return factionFilter.sort((a, b) => a.name.localeCompare(b.name));
        }


        else {

            if (factionFilter.length >= cmcFilter.length) {
                var doubleFilter = factionFilter.filter(factionObject => {
                    var match = false;
                    cmcFilter.forEach(cmcObject => {
                        if (factionObject.name.includes(cmcObject.name))
                            match = true;
                    });
                    return match;
                })
                return doubleFilter.sort((a, b) => a.name.localeCompare(b.name));
            }

            else {
                var doubleFilter = cmcFilter.filter(cmcObject => {
                    var match = false;
                    factionFilter.forEach(factionObject => {
                        if (cmcObject.name.includes(factionObject.name))
                            match = true;
                    });
                    return match;
                })
                return doubleFilter.sort((a, b) => a.name.localeCompare(b.name));
            }
        }
    }

    cmc0State(e) {
        e.preventDefault();
        if (this.state.cmc0Toggle === false) {
            this.setState({ cmc0Toggle: true });
            this.setState({ cmc0Classname: "button small selectedFilter" });
        }

        else {
            this.setState({ cmc0Toggle: false });
            this.setState({ cmc0Classname: "button small" })
        }

    }

    cmc1State(e) {
        e.preventDefault();
        if (this.state.cmc1Toggle === false) {
            this.setState({ cmc1Toggle: true });
            this.setState({ cmc1Classname: "button small selectedFilter" });
        }

        else {
            this.setState({ cmc1Toggle: false });
            this.setState({ cmc1Classname: "button small" })
        }

    }

    cmc2State(e) {
        e.preventDefault();
        if (this.state.cmc2Toggle === false) {
            this.setState({ cmc2Toggle: true });
            this.setState({ cmc2Classname: "button small selectedFilter" });
        }

        else {
            this.setState({ cmc2Toggle: false });
            this.setState({ cmc2Classname: "button small" })
        }

    }

    cmc3State(e) {
        e.preventDefault();
        if (this.state.cmc3Toggle === false) {
            this.setState({ cmc3Toggle: true });
            this.setState({ cmc3Classname: "button small selectedFilter" });
        }

        else {
            this.setState({ cmc3Toggle: false });
            this.setState({ cmc3Classname: "button small" })
        }

    }

    cmc4State(e) {
        e.preventDefault();
        if (this.state.cmc4Toggle === false) {
            this.setState({ cmc4Toggle: true });
            this.setState({ cmc4Classname: "button small selectedFilter" });
        }

        else {
            this.setState({ cmc4Toggle: false });
            this.setState({ cmc4Classname: "button small" })
        }

    }

    cmc5State(e) {
        e.preventDefault();
        if (this.state.cmc5Toggle === false) {
            this.setState({ cmc5Toggle: true });
            this.setState({ cmc5Classname: "button small selectedFilter" });
        }

        else {
            this.setState({ cmc5Toggle: false });
            this.setState({ cmc5Classname: "button small" })
        }

    }

    cmc6State(e) {
        e.preventDefault();
        if (this.state.cmc6Toggle === false) {
            this.setState({ cmc6Toggle: true });
            this.setState({ cmc6Classname: "button small selectedFilter" });
        }

        else {
            this.setState({ cmc6Toggle: false });
            this.setState({ cmc6Classname: "button small" })
        }

    }

    cmc7State(e) {
        e.preventDefault();
        if (this.state.cmc7Toggle === false) {
            this.setState({ cmc7Toggle: true });
            this.setState({ cmc7Classname: "button small selectedFilter" });
        }

        else {
            this.setState({ cmc7Toggle: false });
            this.setState({ cmc7Classname: "button small" })
        }

    }

    cmc8State(e) {
        e.preventDefault();
        if (this.state.cmc8Toggle === false) {
            this.setState({ cmc8Toggle: true });
            this.setState({ cmc8Classname: "button small selectedFilter" });
        }

        else {
            this.setState({ cmc8Toggle: false });
            this.setState({ cmc8Classname: "button small" })
        }

    }


    createRows() {
        console.log("REALLYHERE");
        var filteredCards = this.filterCards();
      const list = filteredCards.map((card, index) => {
        if(card.rarity != "None")
          return <div className="col-6 col-sm-6 col-md-4 col-lg-3 p-3" key={index}>
            <a href={"/card/"+card.name.replace(/ /g, "_").replace(/:/g,"")}><img className="image-container img-fluid" src={"/img/cards/"+card.cardCode+".png"} alt={"Legends of Runeterra Cards " + card.name} /></a>
          </div>
        else
          return " "
      });
      return list;
    }

    render() {

        return(
        <div>
            <div className="row">
                <div className= "col-6">
                    <button className={this.state.cmc0Classname +" col-1"} onClick={this.cmc0State}>0</button>
                    <button className={this.state.cmc1Classname +" col-1"} onClick={this.cmc1State}>1</button>
                    <button className={this.state.cmc2Classname +" col-1"} onClick={this.cmc2State}>2</button>
                    <button className={this.state.cmc3Classname +" col-1"} onClick={this.cmc3State}>3</button>
                    <button className={this.state.cmc4Classname +" col-1"} onClick={this.cmc4State}>4</button>
                    <button className={this.state.cmc5Classname +" col-1"} onClick={this.cmc5State}>5</button>
                    <button className={this.state.cmc6Classname +" col-1"} onClick={this.cmc6State}>6</button>
                    <button className={this.state.cmc7Classname +" col-1"} onClick={this.cmc7State}>7</button>
                    <button className={this.state.cmc8Classname +" col-1"} onClick={this.cmc8State}>8+</button>              
                </div>
                <div className= "col-6">
                        Faction Filter
                </div>
            </div>
            <div className="row">{this.createRows()}</div>
        </div>
        )
    }
}
export default FilterBar;