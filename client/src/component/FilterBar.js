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

            demToggle: false,
            freToggle: false,
            ionToggle: false,
            noxToggle: false,
            pilToggle: false,
            shaToggle: false,

            chamToggle: false,
            spelToggle: false,
            follToggle: false,

            commToggle: false,
            rareToggle: false,
            epicToggle: false,
            legnToggle: false,

            cmc0Classname: "btn btn-outline btn-sm",
            cmc1Classname: "btn btn-outline btn-sm",
            cmc2Classname: "btn btn-outline btn-sm",
            cmc3Classname: "btn btn-outline btn-sm",
            cmc4Classname: "btn btn-outline btn-sm",
            cmc5Classname: "btn btn-outline btn-sm",
            cmc6Classname: "btn btn-outline btn-sm",
            cmc7Classname: "btn btn-outline btn-sm",

            demClassname: "btn btn-outline btn-sm",
            freClassname: "btn btn-outline btn-sm",
            ionClassname: "btn btn-outline btn-sm",
            noxClassname: "btn btn-outline btn-sm",
            pilClassname: "btn btn-outline btn-sm",
            shaClassname: "btn btn-outline btn-sm",

            chamClassname: "btn btn-outline btn-sm",
            spelClassname: "btn btn-outline btn-sm",
            follClassname: "btn btn-outline btn-sm",

            commClassname: "btn btn-outline btn-sm",
            rareClassname: "btn btn-outline btn-sm",
            epicClassname: "btn btn-outline btn-sm",
            legnClassname: "btn btn-outline btn-sm",
        };

        this.cmc0State = this.cmc0State.bind(this);
        this.cmc1State = this.cmc1State.bind(this);
        this.cmc2State = this.cmc2State.bind(this);
        this.cmc3State = this.cmc3State.bind(this);
        this.cmc4State = this.cmc4State.bind(this);
        this.cmc5State = this.cmc5State.bind(this);
        this.cmc6State = this.cmc6State.bind(this);
        this.cmc7State = this.cmc7State.bind(this);

        this.demState = this.demState.bind(this);
        this.freState = this.freState.bind(this);
        this.ionState = this.ionState.bind(this);
        this.noxState = this.noxState.bind(this);
        this.pilState = this.pilState.bind(this);
        this.shaState = this.shaState.bind(this);

        this.chamState = this.chamState.bind(this);
        this.spelState = this.spelState.bind(this);
        this.follState = this.follState.bind(this);

        this.commState = this.commState.bind(this);
        this.rareState = this.rareState.bind(this);
        this.epicState = this.epicState.bind(this);
        this.legnState = this.legnState.bind(this);

        this.filterCards = this.filterCards.bind(this);
    }

    componentDidMount() {
    }





    filterCards() {

        const cardSet = baseSet;

        var subset = cardSet;
        // if (this.state.searchText === "")
        //     subset = cardSet.sort((a, b) => a.cost - b.cost || a.name.localeCompare(b.name));
        // else {
        //     var subset = cardSet.sort((a, b) => a.cost - b.cost || a.name.localeCompare(b.name)).filter((card) => {
        //         var reducedName = card.name.toLowerCase();
        //         return reducedName.includes(this.state.searchText.toLowerCase(), 0);
        //     })
        // }
        var cmcFilter = [];
        var factionFilter = [];
        var typeFilter = [];
        var rarityFilter = [];

        if (this.state.cmc0Toggle === true) {
            var cmc0Filter = [];
            cmc0Filter = subset.sort((a, b) => a.cost - b.cost || a.name.localeCompare(b.name)).filter(card => {
                var reducedCost = card.cost;
                return reducedCost === 0;
            })
            cmc0Filter.forEach(object => {
                cmcFilter.push(object);
            })
        }


        if (this.state.cmc1Toggle === true) {
            var cmc1Filter = [];
            cmc1Filter = subset.sort((a, b) => a.cost - b.cost || a.name.localeCompare(b.name)).filter(card => {
                var reducedCost = card.cost;
                return reducedCost === 1;
            })
            cmc1Filter.forEach(object => {
                cmcFilter.push(object);
            })
        }


        if (this.state.cmc2Toggle === true) {
            var cmc2Filter = [];
            cmc2Filter = subset.sort((a, b) => a.cost - b.cost || a.name.localeCompare(b.name)).filter(card => {
                var reducedCost = card.cost;
                return reducedCost === 2;
            })
            cmc2Filter.forEach(object => {
                cmcFilter.push(object);
            })
        }


        if (this.state.cmc3Toggle === true) {
            var cmc3Filter = [];
            cmc3Filter = subset.sort((a, b) => a.cost - b.cost || a.name.localeCompare(b.name)).filter(card => {
                var reducedCost = card.cost;
                return reducedCost === 3;
            })
            cmc3Filter.forEach(object => {
                cmcFilter.push(object);
            })
        }


        if (this.state.cmc4Toggle === true) {
            var cmc4Filter = [];
            cmc4Filter = subset.sort((a, b) => a.cost - b.cost || a.name.localeCompare(b.name)).filter(card => {
                var reducedCost = card.cost;
                return reducedCost === 4;
            })
            cmc4Filter.forEach(object => {
                cmcFilter.push(object);
            })
        }


        if (this.state.cmc5Toggle === true) {
            var cmc5Filter = [];
            cmc5Filter = subset.sort((a, b) => a.cost - b.cost || a.name.localeCompare(b.name)).filter(card => {
                var reducedCost = card.cost;
                return reducedCost === 5;
            })
            cmc5Filter.forEach(object => {
                cmcFilter.push(object);
            })
        }

        if (this.state.cmc6Toggle === true) {
            var cmc6Filter = [];
            cmc6Filter = subset.sort((a, b) => a.cost - b.cost || a.name.localeCompare(b.name)).filter(card => {
                var reducedCost = card.cost;
                return reducedCost === 6;
            })
            cmc6Filter.forEach(object => {
                cmcFilter.push(object);
            })
        }


        if (this.state.cmc7Toggle === true) {
            var cmc7Filter = [];
            cmc7Filter = subset.sort((a, b) => a.cost - b.cost || a.name.localeCompare(b.name)).filter(card => {
                var reducedCost = card.cost;
                return reducedCost >= 7;
            })
            cmc7Filter.forEach(object => {
                cmcFilter.push(object);
            })
        }

 


        if (this.state.demToggle === true) {
            var demFilter = [];
            demFilter = subset.sort((a, b) => a.cost - b.cost || a.name.localeCompare(b.name)).filter(card => {
                var reducedType = card.regionRef.toLowerCase();
                var filterString = "demacia";
                return reducedType === filterString;
            })
            demFilter.forEach(object => {
                factionFilter.push(object);
            })
        }

        if (this.state.freToggle === true) {
            var freToggle = [];
            freToggle = subset.sort((a, b) => a.cost - b.cost || a.name.localeCompare(b.name)).filter(card => {
                var reducedType = card.regionRef.toLowerCase();
                var filterString = "freljord";
                return reducedType === filterString;
            })
            freToggle.forEach(object => {
                factionFilter.push(object);
            })
        }

        if (this.state.ionToggle === true) {
            var ionFilter = [];
            ionFilter = subset.sort((a, b) => a.cost - b.cost || a.name.localeCompare(b.name)).filter(card => {
                var reducedType = card.regionRef.toLowerCase();
                var filterString = "ionia";
                return reducedType === filterString;
            })
            ionFilter.forEach(object => {
                factionFilter.push(object);
            })
        }

        if (this.state.noxToggle === true) {
            var noxFilter = [];
            noxFilter = subset.sort((a, b) => a.cost - b.cost || a.name.localeCompare(b.name)).filter(card => {
                var reducedType = card.regionRef.toLowerCase();
                var filterString = "noxus";
                return reducedType === filterString;
            })
            noxFilter.forEach(object => {
                factionFilter.push(object);
            })
        }

        if (this.state.pilToggle === true) {
            var pilFilter = [];
            pilFilter = subset.sort((a, b) => a.cost - b.cost || a.name.localeCompare(b.name)).filter(card => {
                var reducedType = card.regionRef.toLowerCase();
                var filterString = "piltoverzaun";
                return reducedType === filterString;
            })
            pilFilter.forEach(object => {
                factionFilter.push(object);
            })
        }

        if (this.state.shaToggle === true) {
            var shaToggle = [];
            shaToggle = subset.sort((a, b) => a.cost - b.cost || a.name.localeCompare(b.name)).filter(card => {
                var reducedType = card.regionRef.toLowerCase();
                var filterString = "shadowisles";
                return reducedType === filterString;
            })
            shaToggle.forEach(object => {
                factionFilter.push(object);
            })
        }



        if (this.state.chamToggle === true) {
            var chamToggle = [];
            chamToggle = subset.sort((a, b) => a.cost - b.cost || a.name.localeCompare(b.name)).filter(card => {
                var reducedType = card.type.toLowerCase();
                var filterString = "unit";
                return reducedType === filterString && card.supertype === "Champion";
            })
            chamToggle.forEach(object => {
                typeFilter.push(object);
            })
        }

        if (this.state.spelToggle === true) {
            var spelToggle = [];
            spelToggle = subset.sort((a, b) => a.cost - b.cost || a.name.localeCompare(b.name)).filter(card => {
                var reducedType = card.type.toLowerCase();
                var filterString = "spell";
                return reducedType === filterString;
            })
            spelToggle.forEach(object => {
                typeFilter.push(object);
            })
        }

        if (this.state.follToggle === true) {
            var follToggle = [];
            follToggle = subset.sort((a, b) => a.cost - b.cost || a.name.localeCompare(b.name)).filter(card => {
                var reducedType = card.type.toLowerCase();
                var filterString = "unit" && card.supertype != "Champion";
                return reducedType === filterString;
            })
            follToggle.forEach(object => {
                typeFilter.push(object);
            })
        }



        if (this.state.commToggle === true) {
            var commToggle = [];
            commToggle = subset.sort((a, b) => a.cost - b.cost || a.name.localeCompare(b.name)).filter(card => {
                var reducedType = card.rarity.toLowerCase();
                var filterString = "common";
                return reducedType === filterString;
            })
            commToggle.forEach(object => {
                rarityFilter.push(object);
            })
        }

        if (this.state.rareToggle === true) {
            var rareToggle = [];
            rareToggle = subset.sort((a, b) => a.cost - b.cost || a.name.localeCompare(b.name)).filter(card => {
                var reducedType = card.rarity.toLowerCase();
                var filterString = "rare";
                return reducedType === filterString;
            })
            rareToggle.forEach(object => {
                rarityFilter.push(object);
            })
        }

        if (this.state.epicToggle === true) {
            var epicToggle = [];
            epicToggle = subset.sort((a, b) => a.cost - b.cost || a.name.localeCompare(b.name)).filter(card => {
                var reducedType = card.rarity.toLowerCase();
                var filterString = "epic";
                return reducedType === filterString;
            })
            epicToggle.forEach(object => {
                rarityFilter.push(object);
            })
        }

        if (this.state.legnToggle === true) {
            var legnToggle = [];
            legnToggle = subset.sort((a, b) => a.cost - b.cost || a.name.localeCompare(b.name)).filter(card => {
                var reducedType = card.rarity.toLowerCase();
                var filterString = "champion";
                return reducedType === filterString;
            })
            legnToggle.forEach(object => {
                rarityFilter.push(object);
            })
        }




        if (this.allFalseCMC() && this.allFalseFactions() && this.allFalseRarity() && this.allFalseType()) { // full card list
            console.log("hereree");
            return subset.sort((a, b) => a.cost - b.cost || a.name.localeCompare(b.name));           
        }

        else if (this.allFalseFactions() && this.allFalseRarity() && this.allFalseType()) { //only cmc
            return cmcFilter.sort((a, b) => a.cost - b.cost || a.name.localeCompare(b.name));
        }

        else if (this.allFalseCMC() && this.allFalseRarity() && this.allFalseType()) {//only faction
            return factionFilter.sort((a, b) => a.cost - b.cost || a.name.localeCompare(b.name));
        }
        else if (this.allFalseCMC() && this.allFalseFactions() && this.allFalseType()) {//only rarity
            return rarityFilter.sort((a, b) => a.cost - b.cost || a.name.localeCompare(b.name));
        }
        else if (this.allFalseCMC() && this.allFalseFactions() && this.allFalseRarity()) {//only type
            return typeFilter.sort((a, b) => a.cost - b.cost || a.name.localeCompare(b.name));
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
                return doubleFilter.sort((a, b) => a.cost - b.cost || a.name.localeCompare(b.name));
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
                return doubleFilter.sort((a, b) => a.cost - b.cost || a.name.localeCompare(b.name));
            }
        }
    }

    allFalseFactions() {
        if (this.state.demToggle  === false && this.state.freToggle  === false && this.state.ionToggle  === false &&
            this.state.noxToggle  === false && this.state.pilToggle  === false && this.state.shaToggle  === false    ){
            return true;
        }
        else{
            return false;
        }
    }

    allFalseCMC() {
        if (this.state.cmc1Toggle === false && this.state.cmc0Toggle === false && this.state.cmc3Toggle === false &&
            this.state.cmc2Toggle === false && this.state.cmc4Toggle === false && this.state.cmc5Toggle === false &&
            this.state.cmc7Toggle === false && this.state.cmc6Toggle === false    ){
            return true;
        }
        else {
            return false;
        }
    }

    allFalseType() {
        if (this.state.chamToggle  === false && this.state.spelToggle  === false && this.state.follToggle  === false ){
            return true;
        }
        else{
            return false;
        }
    }

    allFalseRarity() {
        if (this.state.commToggle  === false && this.state.rareToggle  === false && this.state.epicToggle  === false &&
            this.state.legnToggle === false){
            return true;
        }
        else{
            return false;
        }
    }


    cmc0State(e) {
        e.preventDefault();
        if (this.state.cmc0Toggle === false) {
            this.setState({ cmc0Toggle: true });
            this.setState({ cmc0Classname: "btn btn-outline active btn-sm" });
        }

        else {
            this.setState({ cmc0Toggle: false });
            this.setState({ cmc0Classname: "btn btn-outline btn-sm" })
        }

    }

    cmc1State(e) {
        e.preventDefault();
        if (this.state.cmc1Toggle === false) {
            this.setState({ cmc1Toggle: true });
            this.setState({ cmc1Classname: "btn btn-outline active btn-sm" });
        }

        else {
            this.setState({ cmc1Toggle: false });
            this.setState({ cmc1Classname: "btn btn-outline btn-sm" })
        }

    }

    cmc2State(e) {
        e.preventDefault();
        if (this.state.cmc2Toggle === false) {
            this.setState({ cmc2Toggle: true });
            this.setState({ cmc2Classname: "btn btn-outline active btn-sm" });
        }

        else {
            this.setState({ cmc2Toggle: false });
            this.setState({ cmc2Classname: "btn btn-outline btn-sm" })
        }

    }

    cmc3State(e) {
        e.preventDefault();
        if (this.state.cmc3Toggle === false) {
            this.setState({ cmc3Toggle: true });
            this.setState({ cmc3Classname: "btn btn-outline active btn-sm" });
        }

        else {
            this.setState({ cmc3Toggle: false });
            this.setState({ cmc3Classname: "btn btn-outline btn-sm" })
        }

    }

    cmc4State(e) {
        e.preventDefault();
        if (this.state.cmc4Toggle === false) {
            this.setState({ cmc4Toggle: true });
            this.setState({ cmc4Classname: "btn btn-outline active btn-sm" });
        }

        else {
            this.setState({ cmc4Toggle: false });
            this.setState({ cmc4Classname: "btn btn-outline btn-sm" })
        }

    }

    cmc5State(e) {
        e.preventDefault();
        if (this.state.cmc5Toggle === false) {
            this.setState({ cmc5Toggle: true });
            this.setState({ cmc5Classname: "btn btn-outline active btn-sm" });
        }

        else {
            this.setState({ cmc5Toggle: false });
            this.setState({ cmc5Classname: "btn btn-outline btn-sm" })
        }

    }

    cmc6State(e) {
        e.preventDefault();
        if (this.state.cmc6Toggle === false) {
            this.setState({ cmc6Toggle: true });
            this.setState({ cmc6Classname: "btn btn-outline active btn-sm" });
        }

        else {
            this.setState({ cmc6Toggle: false });
            this.setState({ cmc6Classname: "btn btn-outline btn-sm" })
        }

    }

    cmc7State(e) {
        e.preventDefault();
        if (this.state.cmc7Toggle === false) {
            this.setState({ cmc7Toggle: true });
            this.setState({ cmc7Classname: "btn btn-outline active btn-sm" });
        }

        else {
            this.setState({ cmc7Toggle: false });
            this.setState({ cmc7Classname: "btn btn-outline btn-sm" })
        }

    }



    demState(e) {
        e.preventDefault();
        if (this.state.demToggle === false) {
            this.setState({ demToggle: true });
            this.setState({ demClassname: "btn btn-outline active" });
        }

        else {
            this.setState({ demToggle: false });
            this.setState({ demClassname: "btn btn-outline" })
        }

    }

    freState(e) {
        e.preventDefault();
        if (this.state.freToggle === false) {
            this.setState({ freToggle: true });
            this.setState({ freClassname: "btn btn-outline active" });
        }

        else {
            this.setState({ freToggle: false });
            this.setState({ freClassname: "btn btn-outline" })
        }

    }

    ionState(e) {
        e.preventDefault();
        if (this.state.ionToggle === false) {
            this.setState({ ionToggle: true });
            this.setState({ ionClassname: "btn btn-outline active" });
        }

        else {
            this.setState({ ionToggle: false });
            this.setState({ ionClassname: "btn btn-outline" })
        }

    }

    noxState(e) {
        e.preventDefault();
        if (this.state.noxToggle === false) {
            this.setState({ noxToggle: true });
            this.setState({ noxClassname: "btn btn-outline active" });
        }

        else {
            this.setState({ noxToggle: false });
            this.setState({ noxClassname: "btn btn-outline" })
        }

    }

    pilState(e) {
        e.preventDefault();
        if (this.state.pilToggle === false) {
            this.setState({ pilToggle: true });
            this.setState({ pilClassname: "btn btn-outline active" });
        }

        else {
            this.setState({ pilToggle: false });
            this.setState({ pilClassname: "btn btn-outline" })
        }

    }

    shaState(e) {
        e.preventDefault();
        if (this.state.shaToggle === false) {
            this.setState({ shaToggle: true });
            this.setState({ shaClassname: "btn btn-outline active" });
        }

        else {
            this.setState({ shaToggle: false });
            this.setState({ shaClassname: "btn btn-outline" })
        }

    }





    chamState(e) {
        e.preventDefault();
        if (this.state.chamToggle === false) {
            this.setState({ chamToggle: true });
            this.setState({ chamClassname: "btn btn-outline active" });
        }

        else {
            this.setState({ chamToggle: false });
            this.setState({ chamClassname: "btn btn-outline" })
        }

    }

    spelState(e) {
        e.preventDefault();
        if (this.state.spelToggle === false) {
            this.setState({ spelToggle: true });
            this.setState({ spelClassname: "btn btn-outline active" });
        }

        else {
            this.setState({ spelToggle: false });
            this.setState({ spelClassname: "btn btn-outline" })
        }

    }

    follState(e) {
        e.preventDefault();
        if (this.state.follToggle === false) {
            this.setState({ follToggle: true });
            this.setState({ follClassname: "btn btn-outline active" });
        }

        else {
            this.setState({ follToggle: false });
            this.setState({ follClassname: "btn btn-outline" })
        }

    }


    commState(e) {
        e.preventDefault();
        if (this.state.commToggle === false) {
            this.setState({ commToggle: true });
            this.setState({ commClassname: "btn btn-outline active" });
        }

        else {
            this.setState({ commToggle: false });
            this.setState({ commClassname: "btn btn-outline" })
        }

    }

    rareState(e) {
        e.preventDefault();
        if (this.state.rareToggle === false) {
            this.setState({ rareToggle: true });
            this.setState({ rareClassname: "btn btn-outline active" });
        }

        else {
            this.setState({ rareToggle: false });
            this.setState({ rareClassname: "btn btn-outline" })
        }

    }

    epicState(e) {
        e.preventDefault();
        if (this.state.epicToggle === false) {
            this.setState({ epicToggle: true });
            this.setState({ epicClassname: "btn btn-outline active" });
        }

        else {
            this.setState({ epicToggle: false });
            this.setState({ epicClassname: "btn btn-outline" })
        }

    }

    legnState(e) {
        e.preventDefault();
        if (this.state.legnToggle === false) {
            this.setState({ legnToggle: true });
            this.setState({ legnClassname: "btn btn-outline active" });
        }

        else {
            this.setState({ legnToggle: false });
            this.setState({ legnClassname: "btn btn-outline" })
        }

    }



    createRows() {
        var filteredCards = this.filterCards();
      const list = filteredCards.map((card, index) => {
        if(card.rarity != "None" && card.keywords.indexOf("Skill") == -1 && card.name != "Accelerated Purrsuit")
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
                <div className="col">
                    <button type="button" className={this.state.cmc0Classname +""} onClick={this.cmc0State}>0</button>
                    <button type="button" className={this.state.cmc1Classname +""} onClick={this.cmc1State}>1</button>
                    <button type="button" className={this.state.cmc2Classname +""} onClick={this.cmc2State}>2</button>
                    <button type="button" className={this.state.cmc3Classname +""} onClick={this.cmc3State}>3</button>
                    <button type="button" className={this.state.cmc4Classname +""} onClick={this.cmc4State}>4</button>
                    <button type="button" className={this.state.cmc5Classname +""} onClick={this.cmc5State}>5</button>
                    <button type="button" className={this.state.cmc6Classname +""} onClick={this.cmc6State}>6</button>
                    <button type="button" className={this.state.cmc7Classname +""} onClick={this.cmc7State}>7+</button>           
                </div>
                <div className= "col">
                        <button type="button" className={this.state.demClassname +""} onClick={this.demState}>Demacia</button>
                        <button type="button" className={this.state.freClassname +""} onClick={this.freState}>Freljord</button>
                        <button type="button" className={this.state.ionClassname +""} onClick={this.ionState}>Ionia</button>
                        <button type="button" className={this.state.noxClassname +""} onClick={this.noxState}>Noxus</button>
                        <button type="button" className={this.state.pilClassname +""} onClick={this.pilState}>Piltover & Zaum</button>
                        <button type="button" className={this.state.shaClassname +""} onClick={this.shaState}>Shadow Isles</button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button type="button" className={this.state.chamClassname +""} onClick={this.chamState}>Champion</button>
                    <button type="button" className={this.state.spelClassname +""} onClick={this.spelState}>Spell</button>
                    <button type="button" className={this.state.follClassname +""} onClick={this.follState}>Follower</button>          
                </div>
                <div className= "col">
                        <button type="button" className={this.state.commClassname +""} onClick={this.commState}>Common</button>
                        <button type="button" className={this.state.rareClassname +""} onClick={this.rareState}>Rare</button>
                        <button type="button" className={this.state.epicClassname +""} onClick={this.epicState}>Epic</button>
                        <button type="button" className={this.state.legnClassname +""} onClick={this.legnState}>Champion</button>
                </div>
            </div>
            <div className="row">{this.createRows()}</div>
        </div>
        )
    }
}
export default FilterBar;