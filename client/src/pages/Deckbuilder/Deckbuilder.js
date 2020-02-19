import React from "react";
import { Helmet } from "react-helmet";
import baseSet from "../../card_info/set1.json";
import keywordSet from "../../card_info/globals-en_us.json"
import FilterBar from "../../component/FilterBar";
import ReactToooltip from "react-tooltip";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Modal from "react-modal";
import "./Deckbuilder.css";
import api from "../../utils/api";
const { DeckEncoder, Card } = require('runeterra'); //We need to import this card object to properly pass stuff to the encoder

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: "#011627"
  },
  overlay: { zIndex: 1000 }
};

Modal.setAppElement("#root");

class Deckbuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: {},
      modalIsOpen: false,
      loginModalIsOpen: false,
      saveModalIsOpen: false,
      codeModalIsOpen: false,
      deckCodeMessage: "",
      isLoggedIn: null,
      isLoaded: false,
      displayName: "",
      filteredSet: baseSet,
      decklist: [],
      deckStyled: [],
      arrow: "<",
      sidebarClass: "active",
      contentClass: "inactive",
      buttonClass: "inactive",
      mediumSidebarActive: "",
      deckStr: "Please Add Cards to Your Deck",
      copied: false,
      deckDescription: "",
      deckName: "",
      deckImg: "01NX042"
    };
    this.createHelmet = this.createHelmet.bind(this);
    this.setFilteredSet = this.setFilteredSet.bind(this);
    this.createRows = this.createRows.bind(this);
    this.generatePathData = this.generatePathData.bind(this);
    this.addToDeck = this.addToDeck.bind(this);
    this.removeCard = this.removeCard.bind(this);
    this.hideBar = this.hideBar.bind(this);
    this.openSidebar = this.openSidebar.bind(this);
    this.encodeDeck = this.encodeDeck.bind(this);

    this.openSaveModal = this.openSaveModal.bind(this);
    this.afterOpenSaveModal = this.afterOpenSaveModal.bind(this);
    this.closeSaveModal = this.closeSaveModal.bind(this);
    this.openCodeModal = this.openCodeModal.bind(this);
    this.afterOpenCodeModal = this.afterOpenCodeModal.bind(this);
    this.closeCodeModal = this.closeCodeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitDeck = this.submitDeck.bind(this);
    this.deckDescriptionChange = this.deckDescriptionChange.bind(this);
    this.deckNameChange = this.deckNameChange.bind(this);
    this.deckImageChange = this.deckImageChange.bind(this);
  }

  deckNameChange(e) {
    //console.log(e.target.value);
    this.setState({ deckName: e.target.value })
  }

  deckDescriptionChange(e) {
    //console.log(e.target.value);
    this.setState({ deckDescription: e.target.value })
  }

  deckImageChange(e) {
    this.setState({ deckImg: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
  }
  openSaveModal() {
    this.setState({ saveModalIsOpen: true });
  }

  afterOpenSaveModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#FFF8F0';
  }

  closeSaveModal() {
    this.setState({ saveModalIsOpen: false });
  }
  openCodeModal() {
    this.setState({ codeModalIsOpen: true });
  }

  afterOpenCodeModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#FFF8F0';
  }

  closeCodeModal() {
    this.setState({ codeModalIsOpen: false });
  }

  // openLoginModal() {
  //   this.setState({ loginModalIsOpen: true });
  // }

  // afterOpenLoginModal() {
  //   // references are now sync'd and can be accessed.
  //   this.subtitle.style.color = '#FFF8F0';
  // }

  // closeLoginModal() {
  //   this.setState({ loginModalIsOpen: false });
  // }

  submitDeck() {
    console.log("Deck Submission with id: " + this.state.id);
    if ((this.state.deckDescription.length === 0 || this.state.deckDescription === "You must write a description to submit") ||
      (this.state.deckName.length === 0 || this.state.deckName === "You must enter a deck name to submit")) {

      if (this.state.deckDescription.length === 0 || this.state.deckDescription === "You must write a description to submit") {
        this.setState({ deckDescription: "You must write a description to submit" });
      }

      if (this.state.deckName.length === 0 || this.state.deckName === "You must enter a deck name to submit") {
        this.setState({ deckName: "You must enter a deck name to submit" });
      }
    }
    else {
      api.addNewDeck(this.state.id, this.state.deckStr, this.state.deckName, this.state.deckDescription, this.state.deckImg)
        .then(res => {
          console.log(res.data);
        })
    }
  }

  createHelmet() {

    let metatitle = "Legends of Runeterra Deck Builder | Legends of Runeterra Cards on Runeterra Nexus"; //will need to add a property for which set it is
    let descrip = "This is a Legends of Runeterra Deck builder. This deck builder will let you filter cards by type, keywords and name. The Legends of Runeterra Deck builder here on Runeterra Nexus is the best way to create new Runeterra decks."; //will need to add a property for which set it is
    let metacontent = "cards,card library,lor,legend, nexus, legends,runeterra,deck,decklist,builder, deckbuilder, decklists,decks,set,sets,expansion,expansions"; //will need to add in property for which set it is

    let helmet = <Helmet>
      <title>{metatitle}</title>
      <meta name="description" content={descrip} />
      <meta name="keywords" content={metacontent} />
      <meta name="author" content="runeterranexus.com" />
      <meta http-equiv="Content-Language" content="en-US" />
      <meta name="rating" content="kids" />
      <meta http-equiv="content-type" content="text/html" charSet="utf-8" />
    </Helmet>;

    return helmet;
  }

  setFilteredSet(set) {
    this.setState({ filteredSet: set });
  }

  keywordTooltipText(keywords) {
    if (keywords.length > 0) {
      var html;
      for (var x = 0; x < keywords.length; x++) {
        var definition = "";
        var isSvgFill = "";
        var fill = "";
        var path = [];

        for (var keywordIndex = 0; keywordIndex < keywordSet.keywords.length; keywordIndex++) {
          if (keywordSet.keywords[keywordIndex].name === keywords[x]) {
            definition = keywordSet.keywords[keywordIndex].description;
            isSvgFill = keywordSet.keywords[keywordIndex].svgFill;
            fill = keywordSet.keywords[keywordIndex].fill;

            if (typeof keywordSet.keywords[keywordIndex].path === "undefined")
              path = [];
            else
              path = keywordSet.keywords[keywordIndex].path;
          }
        }
        var text = (<div key={x}>
          <h6>{keywords[x] + " "}
            <svg height="35" width="35" viewBox="0 0 35 35" className="hover-icon" fill={fill}>
              {this.generatePathData(path)}
            </svg>
          </h6>
          <p>{definition}</p>
        </div>);
        html = [html, text];
      }
      return html;
    }
  }

  generatePathData(path) {
    if (path.length > 0) {
      var pathHTML = [];
      for (var x = 0; x < path.length; x++) {
        pathHTML.push(<path d={path[x]} key={x}></path>);
      }
      return pathHTML;
    }
    else {
      return;
    }
  }

  addToDeck(img) {

    var cardProps = img.target.id.split(",");
    if (this.validEntry(cardProps)) {
      if (this.state.decklist.hasOwnProperty(img.target.id) === true) {
        if (this.state.decklist[img.target.id] < 3) {
          this.state.decklist[img.target.id] = this.state.decklist[img.target.id] + 1;
          this.state.decklist['size'] += 1;
          this.state.decklist[cardProps[2]] += 1;
          if (cardProps[1] === "Champion") {
            this.state.decklist['champions'] += 1;
          }
          if (cardProps[5] === "Unit" && cardProps[1] !== "Champion") {
            this.state.decklist['followers'] += 1;
          }
          if (cardProps[5] === "Spell") {
            this.state.decklist['spells'] += 1;
          }
        }
      }
      else {
        this.state.decklist[img.target.id] = 1;
        this.state.decklist['size'] += 1;
        this.state.decklist[cardProps[2]] += 1;
        if (cardProps[1] === "Champion") {
          this.state.decklist['champions'] += 1;
        }
        if (cardProps[5] === "Unit" && cardProps[1] !== "Champion") {
          this.state.decklist['followers'] += 1;
        }
        if (cardProps[5] === "Spell") {
          this.state.decklist['spells'] += 1;
        }
      }
    }
    this.encodeDeck()
    this.setState({ deckStyled: this.showDeck() });
  }


  hideBar(e) {
    this.setState({ arrow: ">" });
    this.setState({ sidebarClass: "inactive" });
    this.setState({ contentClass: "active" });
    this.setState({ buttonClass: "active" });
    this.setState({ mediumSidebarActive: "" })

  }

  openSidebar(e) {
    this.setState({ arrow: "<" });
    this.setState({ sidebarClass: "active" });
    this.setState({ contentClass: "inactive" });
    this.setState({ buttonClass: "inactive" });
    this.setState({ mediumSidebarActive: "medium-card-override" });
  }

  validEntry(cardProps) {
    return (this.state.decklist['size'] < 40 && ((this.state.decklist['champions'] < 6 && cardProps[1] === 'Champion') || cardProps[1] !== 'Champion') && this.validRegions(cardProps[2])) ? true : false;
  }

  validRegions(cardRegion) {
    var rCtr = 0;
    var regions = [];
    if (this.state.decklist['Demacia'] > 0) { rCtr += 1; regions.push('Demacia') };
    if (this.state.decklist['PiltoverZaun'] > 0) { rCtr += 1; regions.push('PiltoverZaun') };
    if (this.state.decklist['Freljord'] > 0) { rCtr += 1; regions.push('Freljord') };
    if (this.state.decklist['Ionia'] > 0) { rCtr += 1; regions.push('Ionia') };
    if (this.state.decklist['Noxus'] > 0) { rCtr += 1; regions.push('Noxus') };
    if (this.state.decklist['ShadowIsles'] > 0) { rCtr += 1; regions.push('ShadowIsles') };
    return (rCtr < 2 || (rCtr === 2 && regions.includes(cardRegion))) ? true : false;

  }


  createRows() {
    const list = this.state.filteredSet.map((card, index) => {
      if (card.rarity !== "None" && card.keywords.indexOf("Skill") === -1 && card.name !== "Accelerated Purrsuit" && this.validRegions(card.regionRef) === true)
        return (
          <div className={"col-6 col-sm-6 col-md-3 col-lg-2 p-3 card-zoom " + this.state.mediumSidebarActive} key={index}>
            <div data-tip data-for={"tooltip" + index} onClick={this.addToDeck}>
              <img className="image-container img-fluid" id={card.cardCode + "," + card.supertype + "," + card.regionRef + "," + card.name + "," + card.cost + "," + card.type} src={"/img/cards/" + card.cardCode + ".png"} alt={"Legends of Runeterra Deck Builder " + card.name} />
              {this.state.decklist.hasOwnProperty(card.cardCode + "," + card.supertype + "," + card.regionRef + "," + card.name + "," + card.cost + "," + card.type) === true && this.state.decklist[card.cardCode + "," + card.supertype + "," + card.regionRef + "," + card.name + "," + card.cost + "," + card.type] > 0 &&
                <div className="cardQuantity quanBack rounded text-center">{this.state.decklist[card.cardCode + "," + card.supertype + "," + card.regionRef + "," + card.name + "," + card.cost + "," + card.type] + "/3"}</div>
              }
            </div>
            <ReactToooltip className="deckbuilder-tooltips" place="bottom" effect="solid" id={"tooltip" + index}>
              {card.keywords.length > 0 ? this.keywordTooltipText(card.keywords) : card.descriptionRaw !== "" ? card.descriptionRaw : card.name}
            </ReactToooltip>
          </div>);
      else
        return " ";

    });
    return list;
  }

  encodeDeck() {
    var deckStr;
    var newDeck = [];
    Object.keys(this.state.decklist).map((prop, index) => {
      if (prop.includes(",") && this.state.decklist[prop] > 0) {
        var cardProps = prop.split(",");
        newDeck.push(new Card(cardProps[0], this.state.decklist[prop]));
      }
    });

    deckStr = DeckEncoder.encode(newDeck);
    this.setState({ deckStr: deckStr });
  }

  componentDidMount() {

    if (this.state.isLoggedIn === null) {
      api.checkLogin()
        .then(res => {
          console.log(res.data);
          if (typeof this.state.filteredSet !== "undefined") {
            this.setState({ isLoggedIn: res.data.isLoggedIn, id: res.data.id, isLoaded: true, displayName: res.data.displayName })
          }

        })
    }
    this.setState({ sidebarClass: "active" });
    this.state.decklist['size'] = 0;
    this.state.decklist['champions'] = 0;
    this.state.decklist['followers'] = 0;
    this.state.decklist['spells'] = 0;
    this.state.decklist['Demacia'] = 0;
    this.state.decklist['PiltoverZaun'] = 0;
    this.state.decklist['Freljord'] = 0;
    this.state.decklist['Ionia'] = 0;
    this.state.decklist['Noxus'] = 0;
    this.state.decklist['ShadowIsles'] = 0;
  }

  saveDeckModal() {
    if (this.state.isloggedIn === null) {
      return (<div></div>)
    }
    if (this.state.isLoggedIn === true) {
      return (
        <Modal
          isOpen={this.state.saveModalIsOpen}
          onAfterOpen={this.afterOpenSaveModal}
          onRequestClose={this.closeSaveModal}
          style={customStyles}
          contentLabel="Example Modal">
          <h2 ref={subtitle => this.subtitle = subtitle}> Save Deck</h2>
          <form onSubmit={this.handleSubmit}>
            <label className="form-input"> Name: <input type="text" name="deckName" onChange={this.deckNameChange} value={this.state.deckName} /></label>
            <label className="form-input">Description: <input type="text" name="deckDescription" onChange={this.deckDescriptionChange} value={this.state.deckDescription} /></label>
            <label className="form-input" htmlFor="deckImage">Deck Image: </label>

            <select className="form-input" id="deckImage" onChange={this.deckImageChange}>
              <option value="01NX042">Katarina</option>
              <option value="01DE045">Fiora</option>
              <option value="01DE042">Lux</option>
              <option value="01PZ008">Teemo</option>
              <option value="01FR039">Tryndamere</option>
              <option value="01FR038">Ashe</option>
              <option value="01IO015">Yasuo</option>
              <option value="01PZ040">Jinx</option>
              <option value="01IO009">Zed</option>
              <option value="01IO032">Shen</option>
              <option value="01IO041">Karma</option>
              <option value="01NX006">Vladimir</option>
              <option value="01FR024">Anivia</option>
              <option value="01SI042">Hecarim</option>
              <option value="01SI052">Thresh</option>
              <option value="01DE012">Garen</option>
              <option value="01NX020">Draven</option>
              <option value="01DE022">Lucian</option>
              <option value="01PZ056">Heimerdinger</option>
              <option value="01FR009">Braum</option>
              <option value="01NX038">Darius</option>
              <option value="01SI053">Elise</option>
              <option value="01SI030">Kalista</option>
              <option value="01PZ036">Ezreal</option>
              <option value="01NX048">Crimson Curator</option>
              <option value="01SI033">Commander Ledros</option>
              <option value="01SI035">Rhasa the Sunderer</option>
              <option value="01FR043">Heart of the Fluft</option>
              <option value="01DE031">Dawnspeakers</option>
              <option value="01IO014">Greenglade Elder</option>
              <option value="01DE054">Vanguard Redeemer</option>
            </select>
            <br />
            <button className="btn" onClick={this.submitDeck}>Submit</button>
          </form>
        </Modal>
      )
    }
    else {
      console.log("You are not logged in");
      return (
        <Modal
          isOpen={this.state.saveModalIsOpen}
          onAfterOpen={this.afterOpenSaveModal}
          onRequestClose={this.closeSaveModal}
          style={customStyles}
          contentLabel="Log In Modal">
          <h2 ref={subtitle => this.subtitle = subtitle}>Login</h2>
          <h2 ref={subtitle => this.subtitle = subtitle}>Test Login</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <div className="btn">
            <a href={"http://"+window.location.hostname+":5000/auth/google"}> Google </a>
          </div>

          <div className="btn" onClick={this.checkAuth}>
            IsLoggedIn
                </div>

          <div className="btn">
            <a href={"http://"+window.location.hostname+":5000/auth/logout"}>Log Out</a>
          </div>
        </Modal>
      )
    }
  }

  deckCodeModal(){
    return (
        <Modal
          isOpen={this.state.codeModalIsOpen}
          onAfterOpen={this.afterOpenCodeModal}
          onRequestClose={this.closeCodeModal}
          style={customStyles}
          contentLabel="Example Modal">
          <h2 ref={subtitle => this.subtitle = subtitle}> {this.state.deckCodeMessage}</h2>
          <h5 ref={subtitle => this.subtitle = subtitle}> {this.state.deckStr}</h5>
        </Modal>
      ) 
  }

  removeCard(img) {
    img.stopPropagation();
    var cardProps = img.target.id.split(",");
    if (this.state.decklist[img.target.id] > 0) {
      this.state.decklist[img.target.id] -= 1;
      this.state.decklist[cardProps[2]] -= 1;
      this.state.decklist['size'] -= 1;
      if (cardProps[1] === "Champion") {
        this.state.decklist['champions'] -= 1;
      }
      if (cardProps[5] === "Unit" && cardProps[1] !== "Champion") {
        this.state.decklist['followers'] -= 1;
      }
      if (cardProps[5] === "Spell") {
        this.state.decklist['spells'] -= 1;
      }
    }
    this.setState(this.state);
    this.setState({ deckStyled: this.showDeck() });

  }

  onCopy = () => {
    this.setState({ copied: true });
  };

  deckStrBtn = () => {
    console.log("here");
    if (this.state.decklist['size'] > 0) {
      this.encodeDeck();
      this.setState({ deckCodeMessage: "Code Copied to Clipboard" });
      this.openCodeModal();

    }
    else {
      this.setState({ deckCodeMessage: "Please add cards to deck" });
      this.openCodeModal();
    }

  }

  showDeck() {
    const deck = Object.keys(this.state.decklist).map((prop, index) => {
      if (prop.includes(",") && this.state.decklist[prop] > 0) {
        var cardProps = prop.split(",");
        //var imgUrl = { background: "linear-gradient(90deg, rgb(52,41,54) 30%, rgba(52,41,54,0) 70%), url(" + "/img/cards/" + cardProps[0] + ".png) right center no-repeat" };
        return (
          <div className={"cardTile " + cardProps[2] + " rounded divText"} key={index} id={prop} onClick={this.removeCard} >
            <div className="row justify-content-center" id={prop} onClick={this.removeCard} >
              <div className="col-1 cmc marginTop" id={prop} onClick={this.removeCard}>
                <img className="mana-image" src={"/img/misc/mana" + cardProps[4] + ".png"} id={prop} onClick={this.removeCard} />
              </div>

              <div className="col-7 cardName marginTop text-center align-middle" id={prop} onClick={this.removeCard}>
                <span className="card-name-sidebar" id={prop} onClick={this.removeCard}>{cardProps[3]}</span>
              </div>

              <div className="col-1 quanBack rounded marginTop text-center" id={prop} onClick={this.removeCard}>{this.state.decklist[prop]}</div>
            </div>
            <img className="image-container img-fluid card-art-deckbuilder" id={prop} onClick={this.removeCard} src={"/img/cards/" + cardProps[0] + ".png"} alt={"Legends of Runeterra Deck Builder " + cardProps[3]} />
          </div>
        );
      }
    });
    return deck;
  }


  render() {
    if (this.state.isLoaded === false) {
      return <div><p>Loading...</p></div>
    }
    return (

      <div className="wrapper" id="neg-margin">
        {this.createHelmet()}
        <nav id="sidebar" className={this.state.sidebarClass}>
          <div className="sidebar-header text-center">
            <h5>Current Deck</h5>
            <div id="deck-info">
              <div className="deck-stats">
                <div>{this.state.decklist['size']}/40</div>
                <div> Total </div>
              </div>
              <div className="deck-stats">
                <div>{this.state.decklist['champions']}/6</div>
                <div>
                  <svg height="20" width="20" viewBox="0 0 20 20">
                    <path d="M17.59 7.154L20.186 2s.875 1.303 1.24 3.37l.04.242-1.28 1.74H21.6c0 .35-.038.702-.085 1.053l-.05.35-1.954 2.61h1.28a18.205 18.205 0 01-2.425 4.147l.066-.089-.004.265c-.182 4.989-4.726 6.262-4.908 6.31l-.005.002.606-3.946h1.348v-3.345l1.347-1.338V9.358l-3.705 2.675v3.479h-2.022v-3.479L7.384 9.358v4.013L8.73 14.71v3.345h1.415L10.82 22s-4.857-1.222-5.048-6.312l-.004-.196-.001.02c-1.05-1.288-1.817-2.576-2.3-3.812l-.126-.335H4.69l-2.022-2.61C2.6 8.222 2.6 7.82 2.6 7.352h1.482L2.735 5.612C3.072 3.405 4.015 2 4.015 2l2.594 5.154a6.33 6.33 0 015.258-3.143l.233-.004.233.004a6.33 6.33 0 015.258 3.143L20.185 2z" fill="#FFF8F0" fillRule="nonzero"></path>
                  </svg>
                </div>
              </div>
              <div className="deck-stats">
                <div>{this.state.decklist['followers']}</div>

                <div>
                  <svg height="20" width="20" viewBox="0 0 20 20">
                    <path d="M19.218 3.429L12.167 2 5.115 3.429S6.878 10.07 3 17.07L10.051 22l.635-10s-4.02 2.286-3.455-4.286l4.936-1.428 4.936 1.428c.564 6.5-3.456 4.286-3.456 4.286l.635 10 7.051-4.929c-3.807-7-2.115-13.642-2.115-13.642z" fill="#FFF8F0" fillRule="nonzero"></path>
                  </svg>
                </div>
              </div>
              <div className="deck-stats">

                <div>{this.state.decklist['spells']}</div>
                <div>
                  <svg height="20" width="20" viewBox="0 0 20 20">
                    <path d="M4.52 15.714s-.637-4.072 5.171-9.071c.284.357.638.714.992.928.991-.571 1.629-1.643 1.629-2.785 0-1.215-.638-2.215-1.63-2.786 2.126 0 5.596 3.143 5.596 8.142v.643c-.495-.357-1.204-.571-1.841-.571-1.558 0-2.975.857-3.683 2.143.779 1.285 2.125 2.142 3.683 2.142 1.558 0 3.116-1.071 3.754-2.5a5.85 5.85 0 011.204 2.5s.992 4.429-3.117 6.5c-4.108 2.071-8.074.286-8.074.286s3.895.071 4.958-3c0-.072-4.746.643-8.641-2.571z" fill="#FFF8F0" fillRule="nonzero"></path></svg>
                </div>
              </div>
            </div>

          </div>


          <div className="list-unstyled components">
            {this.state.deckStyled}
          </div>
          <div className="submitDiv">
            <CopyToClipboard onCopy={this.onCopy} text={this.state.deckStr}>
              <button className="btn btn-outline buttonDiv" onClick={this.deckStrBtn}>Code</button>
            </CopyToClipboard>
            {this.deckCodeModal()}

            <div id="dismiss" onClick={this.hideBar}>
              {this.state.arrow}
            </div>

            <button className="btn btn-outline saveDiv" id="modal-link" onClick={this.openSaveModal}>Save</button>
            {this.saveDeckModal()}
          </div>

          <div className="noDisplay"><textarea rows={1} cols={1} readOnly value={this.state.deckStr} /></div>
        </nav>
        <div id="content" className={this.state.contentClass}>
          <FilterBar className="filter" setFilteredSet={this.setFilteredSet} />
          <div id="sidebarBtn" className={this.state.buttonClass + " " + "rounded text-center"} onClick={this.openSidebar}>&#62;</div>

          <div className="setName text-center pt-4"><h2>Legends of Runeterra Deck Builder</h2></div>
          <div className="setName text-center pb-5 pt-1"><p>This is a Legends of Runeterra Deck builder. This deck builder will let you filter cards by type, keywords and name. The Legends of Runeterra Deck builder here on Runeterra Nexus is the best way to create new Runeterra decks.</p></div>
          <div className="row positioning">{this.createRows()}</div>
        </div>
      </div>
    );
  }
};

export default Deckbuilder;
