import React from "react";
import "./FilterBar.css";
import baseSet from "../card_info/set1.json";
import kwSet from "../card_info/globals-en_us.json";
import { Multiselect } from 'multiselect-react-dropdown';
import ReactSearchBox from 'react-search-box';

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

            cardSet : [],
            workingSet : [],

            cmcFilter : [],
            typeFilter : [],
            rarityFilter : [],
            factionFilter : [],
            keywordFilter : [],

            kwObject : [{name: "Obliterate"},
                        {name: "Double Attack"},
                        {name: "Weakest"},
                        {name: "Elusive"},
                        {name: "Drain"},
                        {name: "Stun"},
                        {name: "Trap"},
                        {name: "Overwhelm"},
                        {name: "Barrier"},
                        {name: "Capture"},
                        {name: "Frostbite"},
                        {name: "Burst"},
                        {name: "Fleeting"},
                        {name: "Fast"},
                        {name: "Overwhelm"},
                        {name: "Quick Attack"},
                        {name: "Tough"},
                        {name: "Recall"},
                        {name: "Regeneration"},
                        {name: "Lifesteal"},
                        {name: "Enlightened"},
                        {name: "Slow"},
                        {name: "Ephemeral"},
                        {name: "Last Breath"},
                        {name: "Challenger"},
                        {name: "Imbue"},
                        {name: "Fearsome"},
                        {name: "Can't Block"}],

            cardRows : "",
            searchText : "",

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

        this.onSelect = this.onSelect.bind(this);
        this.onRemove = this.onRemove.bind(this);

        this.setSearch = this.setSearch.bind(this);

        this.cardSet = baseSet;
        this.workingSet = baseSet;


       
    }

    componentDidMount() {
        this.setState({cardRows: this.createRows()});
        this.state.kwObject = this.state.kwObject.sort((a, b) => a.name.localeCompare(b.name));
        this.state.searchText = "";
    }


    filterCards() {
        var filteredSet = this.workingSet;
        if (this.state.searchText === "")
            filteredSet = filteredSet.sort((a, b) => a.cost - b.cost || a.name.localeCompare(b.name));
        else {
            filteredSet = filteredSet.sort((a, b) => a.cost - b.cost || a.name.localeCompare(b.name)).filter((card) => {
                var reducedName = card.name.toLowerCase();
                return reducedName.includes(this.state.searchText.toLowerCase(), 0);
            })
        }


            filteredSet = filteredSet.filter(card => {
            var cmcMatch     = this.allFalseCMC()      ? true : false;
            var rarityMatch  = this.allFalseRarity()   ? true : false;
            var typeMatch    = this.allFalseType()     ? true : false;
            var factionMatch = this.allFalseFactions() ? true : false;
            var keywordMatch = this.noKeywordSelected()? true : false;
            this.state.cmcFilter.some(cmcGood => {
                if (cmcGood !== 7){
                    if (card.cost === cmcGood){
                        cmcMatch = true;
                        return;
                    }
                }
                else{
                    if (card.cost >= cmcGood){
                        cmcMatch = true;
                        return;
                    }
                }
            });

            this.state.rarityFilter.some(rarityGood => {
                if (card.rarity.toLowerCase() === rarityGood){
                    rarityMatch = true;
                    return;
                }
            });

            this.state.typeFilter.some(typeGood => {
                if (card.type.toLowerCase() === typeGood || card.supertype.toLowerCase() === typeGood){
                    typeMatch = true;
                    return;
                }
            });

            this.state.factionFilter.some(factionGood => {
                if (card.regionRef.toLowerCase() === factionGood){
                    factionMatch = true;
                    return;
                }
            });

            this.state.keywordFilter.some(kwGood => {
                if (card.keywords.includes(kwGood)){
                    keywordMatch = true;
                    return;
                }
            });


            return cmcMatch && rarityMatch && factionMatch && typeMatch && keywordMatch ? true : false;
        });
        return filteredSet.sort((a, b) => a.cost - b.cost || a.name.localeCompare(b.name));
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

    noKeywordSelected() {
        if (this.state.keywordFilter.length === 0){
            return true;
        }
        else{
            return false;
        }
    }

    noSearchText() {
        if (this.state.searchText === ""){
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
            this.state.cmcFilter.push(0);
            
        }

        else {
            this.setState({ cmc0Toggle: false });
            this.setState({ cmc0Classname: "btn btn-outline btn-sm" });
            this.state.cmcFilter.splice(this.state.cmcFilter.indexOf(0), 1);
        }
        this.setState({cardRows:this.createRows()});
    }

    cmc1State(e) {
        e.preventDefault();
        if (this.state.cmc1Toggle === false) {
            this.setState({ cmc1Toggle: true });
            this.setState({ cmc1Classname: "btn btn-outline active btn-sm" });
            this.state.cmcFilter.push(1);

        }

        else {
            this.setState({ cmc1Toggle: false });
            this.setState({ cmc1Classname: "btn btn-outline btn-sm" });
            this.state.cmcFilter.splice(this.state.cmcFilter.indexOf(1), 1);

        }
        this.setState({cardRows:this.createRows()});
    }

    cmc2State(e) {
        e.preventDefault();
        if (this.state.cmc2Toggle === false) {
            this.setState({ cmc2Toggle: true });
            this.setState({ cmc2Classname: "btn btn-outline active btn-sm" });
            this.state.cmcFilter.push(2);
            
        }

        else {
            this.setState({ cmc2Toggle: false });
            this.setState({ cmc2Classname: "btn btn-outline btn-sm" });
            this.state.cmcFilter.splice(this.state.cmcFilter.indexOf(2), 1);
        }
        this.setState({cardRows:this.createRows()});
    }

    cmc3State(e) {
        e.preventDefault();
        if (this.state.cmc3Toggle === false) {
            this.setState({ cmc3Toggle: true });
            this.setState({ cmc3Classname: "btn btn-outline active btn-sm" });
            this.state.cmcFilter.push(3);

        }

        else {
            this.setState({ cmc3Toggle: false });
            this.setState({ cmc3Classname: "btn btn-outline btn-sm" });
            this.state.cmcFilter.splice(this.state.cmcFilter.indexOf(3), 1);
        }
        this.setState({cardRows:this.createRows()});
    }

    cmc4State(e) {
        e.preventDefault();
        if (this.state.cmc4Toggle === false) {
            this.setState({ cmc4Toggle: true });
            this.setState({ cmc4Classname: "btn btn-outline active btn-sm" });
            this.state.cmcFilter.push(4);
        }

        else {
            this.setState({ cmc4Toggle: false });
            this.setState({ cmc4Classname: "btn btn-outline btn-sm" });
            this.state.cmcFilter.splice(this.state.cmcFilter.indexOf(4), 1);
        }
        this.setState({cardRows:this.createRows()});
    }

    cmc5State(e) {
        e.preventDefault();
        if (this.state.cmc5Toggle === false) {
            this.setState({ cmc5Toggle: true });
            this.setState({ cmc5Classname: "btn btn-outline active btn-sm" });
            this.state.cmcFilter.push(5);
        }

        else {
            this.setState({ cmc5Toggle: false });
            this.setState({ cmc5Classname: "btn btn-outline btn-sm" });
            this.state.cmcFilter.splice(this.state.cmcFilter.indexOf(5), 1);

        }
            this.setState({cardRows:this.createRows()});
    }

    cmc6State(e) {
        e.preventDefault();
        if (this.state.cmc6Toggle === false) {
            this.setState({ cmc6Toggle: true });
            this.setState({ cmc6Classname: "btn btn-outline active btn-sm" });
            this.state.cmcFilter.push(6);

        }

        else {
            this.setState({ cmc6Toggle: false });
            this.setState({ cmc6Classname: "btn btn-outline btn-sm" });
            this.state.cmcFilter.splice(this.state.cmcFilter.indexOf(6), 1);

        }
                    this.setState({cardRows:this.createRows()});
    }

    cmc7State(e) {
        e.preventDefault();
        if (this.state.cmc7Toggle === false) {
            this.setState({ cmc7Toggle: true });
            this.setState({ cmc7Classname: "btn btn-outline active btn-sm" });
            this.state.cmcFilter.push(7);

        }

        else {
            this.setState({ cmc7Toggle: false });
            this.setState({ cmc7Classname: "btn btn-outline btn-sm" });
            this.state.cmcFilter.splice(this.state.cmcFilter.indexOf(7), 1);

        }
                    this.setState({cardRows:this.createRows()});
    }



    demState(e) {
        e.preventDefault();
        if (this.state.demToggle === false) {
            this.setState({ demToggle: true });
            this.setState({ demClassname: "btn btn-outline active" });
            this.state.factionFilter.push("demacia");
        }

        else {
            this.setState({ demToggle: false });
            this.setState({ demClassname: "btn btn-outline" });
            this.state.factionFilter.splice(this.state.factionFilter.indexOf("demacia"), 1);
        }
                    this.setState({cardRows:this.createRows()});
    }

    freState(e) {
        e.preventDefault();
        if (this.state.freToggle === false) {
            this.setState({ freToggle: true });
            this.setState({ freClassname: "btn btn-outline active" });
            this.state.factionFilter.push("freljord");
        }

        else {
            this.setState({ freToggle: false });
            this.setState({ freClassname: "btn btn-outline" });
            this.state.factionFilter.splice(this.state.factionFilter.indexOf("freljord"), 1);

        }
                    this.setState({cardRows:this.createRows()});
    }

    ionState(e) {
        e.preventDefault();
        if (this.state.ionToggle === false) {
            this.setState({ ionToggle: true });
            this.setState({ ionClassname: "btn btn-outline active" });
            this.state.factionFilter.push("ionia");
        }

        else {
            this.setState({ ionToggle: false });
            this.setState({ ionClassname: "btn btn-outline" });
            this.state.factionFilter.splice(this.state.factionFilter.indexOf("ionia"), 1);

        }
                    this.setState({cardRows:this.createRows()});
    }

    noxState(e) {
        e.preventDefault();
        if (this.state.noxToggle === false) {
            this.setState({ noxToggle: true });
            this.setState({ noxClassname: "btn btn-outline active" });
            this.state.factionFilter.push("noxus");
        }

        else {
            this.setState({ noxToggle: false });
            this.setState({ noxClassname: "btn btn-outline" });
            this.state.factionFilter.splice(this.state.factionFilter.indexOf("noxus"), 1);

        }
                    this.setState({cardRows:this.createRows()});
    }

    pilState(e) {
        e.preventDefault();
        if (this.state.pilToggle === false) {
            this.setState({ pilToggle: true });
            this.setState({ pilClassname: "btn btn-outline active" });
            this.state.factionFilter.push("piltoverzaun");

        }

        else {
            this.setState({ pilToggle: false });
            this.setState({ pilClassname: "btn btn-outline" });
            this.state.factionFilter.splice(this.state.factionFilter.indexOf("piltoverzaun"), 1);

        }
                    this.setState({cardRows:this.createRows()});
    }

    shaState(e) {
        e.preventDefault();
        if (this.state.shaToggle === false) {
            this.setState({ shaToggle: true });
            this.setState({ shaClassname: "btn btn-outline active" });
            this.state.factionFilter.push("shadowisles");
        }

        else {
            this.setState({ shaToggle: false });
            this.setState({ shaClassname: "btn btn-outline" });
            this.state.factionFilter.splice(this.state.factionFilter.indexOf("shadowisles"), 1);

        }
                    this.setState({cardRows:this.createRows()});
    }





    chamState(e) {
        e.preventDefault();
        if (this.state.chamToggle === false) {
            this.setState({ chamToggle: true });
            this.setState({ chamClassname: "btn btn-outline active" });
            this.state.typeFilter.push("champion");
        }

        else {
            this.setState({ chamToggle: false });
            this.setState({ chamClassname: "btn btn-outline" });
            this.state.typeFilter.splice(this.state.typeFilter.indexOf("champion"), 1);

        }
                    this.setState({cardRows:this.createRows()});
    }

    spelState(e) {
        e.preventDefault();
        if (this.state.spelToggle === false) {
            this.setState({ spelToggle: true });
            this.setState({ spelClassname: "btn btn-outline active" });
            this.state.typeFilter.push("spell");
        }

        else {
            this.setState({ spelToggle: false });
            this.setState({ spelClassname: "btn btn-outline" });
            this.state.typeFilter.splice(this.state.typeFilter.indexOf("spell"), 1);
        }
                    this.setState({cardRows:this.createRows()});
    }

    follState(e) {
        e.preventDefault();
        if (this.state.follToggle === false) {
            this.setState({ follToggle: true });
            this.setState({ follClassname: "btn btn-outline active" });
            this.state.typeFilter.push("unit");
        }

        else {
            this.setState({ follToggle: false });
            this.setState({ follClassname: "btn btn-outline" });
            this.state.typeFilter.splice(this.state.typeFilter.indexOf("unit"), 1);

        }
                    this.setState({cardRows:this.createRows()});
    }


    commState(e) {
        e.preventDefault();
        if (this.state.commToggle === false) {
            this.setState({ commToggle: true });
            this.setState({ commClassname: "btn btn-outline active" });
            this.state.rarityFilter.push("common");
        }

        else {
            this.setState({ commToggle: false });
            this.setState({ commClassname: "btn btn-outline" });
            this.state.rarityFilter.splice(this.state.rarityFilter.indexOf("common"), 1);

        }
                    this.setState({cardRows:this.createRows()});
    }

    rareState(e) {
        e.preventDefault();
        if (this.state.rareToggle === false) {
            this.setState({ rareToggle: true });
            this.setState({ rareClassname: "btn btn-outline active" });
            this.state.rarityFilter.push("rare");
        }

        else {
            this.setState({ rareToggle: false });
            this.setState({ rareClassname: "btn btn-outline" });
            this.state.rarityFilter.splice(this.state.rarityFilter.indexOf("rare"), 1);

        }
                    this.setState({cardRows:this.createRows()});
    }

    epicState(e) {
        e.preventDefault();
        if (this.state.epicToggle === false) {
            this.setState({ epicToggle: true });
            this.setState({ epicClassname: "btn btn-outline active" });
            this.state.rarityFilter.push("epic");
        }

        else {
            this.setState({ epicToggle: false });
            this.setState({ epicClassname: "btn btn-outline" });
            this.state.rarityFilter.splice(this.state.rarityFilter.indexOf("epic"), 1);

        }
        this.setState({cardRows:this.createRows()});
    }

    legnState(e) {
        e.preventDefault();
        if (this.state.legnToggle === false) {
            this.setState({ legnToggle: true });
            this.setState({ legnClassname: "btn btn-outline active" });
            this.state.rarityFilter.push("champion");
        }

        else {
            this.setState({ legnToggle: false });
            this.setState({ legnClassname: "btn btn-outline" });
            this.state.rarityFilter.splice(this.state.rarityFilter.indexOf("champion"), 1);

        }
        this.setState({cardRows:this.createRows()});
    }

    onSelect(optionsList, selectedItem){
            this.state.keywordFilter.push(selectedItem.name);
            this.setState({cardRows:this.createRows()});
            this.createRows();
    }

    onRemove(optionsList, selectedItem){
            this.state.keywordFilter.splice(this.state.keywordFilter.indexOf(selectedItem.name), 1);
            this.setState({cardRows:this.createRows()});
            this.createRows();
    }

    setSearch(e){
        this.state.searchText = e;
        this.setState({cardRows : this.createRows()});
        this.createRows();
    }


    createRows() {
        var filteredCards = this.filterCards();
        
      const list = filteredCards.map((card, index) => {
        if(card.rarity !== "None" && card.keywords.indexOf("Skill") === -1 && card.name !== "Accelerated Purrsuit")
          return <div className="col-6 col-sm-6 col-md-4 col-lg-2 p-3" key={index}>
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
            <div className="stickyMenu">
                <div className="row">
                    
                    <div className="accordion col-12">
                        <div className="card">
                          <div className="card-header" id="headingOne">
                            <h2 className="">
                              <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Filters
                              </button>
                            </h2>
                          </div>


                        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                          <div className="card-body">
                            <button type="button" className={this.state.cmc0Classname +""} onClick={this.cmc0State}>0</button>
                            <button type="button" className={this.state.cmc1Classname +""} onClick={this.cmc1State}>1</button>
                            <button type="button" className={this.state.cmc2Classname +""} onClick={this.cmc2State}>2</button>
                            <button type="button" className={this.state.cmc3Classname +""} onClick={this.cmc3State}>3</button>
                            <button type="button" className={this.state.cmc4Classname +""} onClick={this.cmc4State}>4</button>
                            <button type="button" className={this.state.cmc5Classname +""} onClick={this.cmc5State}>5</button>
                            <button type="button" className={this.state.cmc6Classname +""} onClick={this.cmc6State}>6</button>
                            <button type="button" className={this.state.cmc7Classname +""} onClick={this.cmc7State}>7+</button>
                          </div>
                           <div className="card-body">
                             <button type="button" className={this.state.demClassname +""} onClick={this.demState}>Demacia</button>
                             <button type="button" className={this.state.freClassname +""} onClick={this.freState}>Freljord</button>
                             <button type="button" className={this.state.ionClassname +""} onClick={this.ionState}>Ionia</button>
                             <button type="button" className={this.state.noxClassname +""} onClick={this.noxState}>Noxus</button>
                             <button type="button" className={this.state.pilClassname +""} onClick={this.pilState}>Piltover & Zaun</button>
                             <button type="button" className={this.state.shaClassname +""} onClick={this.shaState}>Shadow Isles</button>
                          </div>
                          <div className="card-body">
                            <button type="button" className={this.state.chamClassname +""} onClick={this.chamState}>Champion</button>
                            <button type="button" className={this.state.spelClassname +""} onClick={this.spelState}>Spell</button>
                            <button type="button" className={this.state.follClassname +""} onClick={this.follState}>Follower</button>          
                          </div>
                          <div className="card-body">
                            <button type="button" className={this.state.commClassname +""} onClick={this.commState}>Common</button>
                            <button type="button" className={this.state.rareClassname +""} onClick={this.rareState}>Rare</button>
                            <button type="button" className={this.state.epicClassname +""} onClick={this.epicState}>Epic</button>
                            <button type="button" className={this.state.legnClassname +""} onClick={this.legnState}>Champion</button>
                          </div>
                            <div className="card-body">
                              <Multiselect options={this.state.kwObject} onSelect={this.onSelect} placeholder="Keywords" onRemove={this.onRemove} displayValue="name" />
                            </div>
                          <div className="card-body">
                            Coming Soon
                          </div>
                          </div>
                        </div>
                    </div>
                    <div className = "col-12"><ReactSearchBox placeholder="Search Card Names..." data={this.workingSet} onChange={this.setSearch}/></div>
                </div>
            </div>
            <div className="row">{this.createRows()}</div>
        </div>
        )
    }
}
export default FilterBar;