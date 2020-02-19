import React from "react";
import Modal from "react-modal";
import './Navbar.css';
import api from "../utils/api";
import { NavLink } from 'react-router-dom'

// API key for google AIzaSyCYlZotlxeVbEfGEhzQBSyqdxfLKcsYkWA
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement("#root");
class Navbar extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      isLoggedIn: null,
      isLoadedIn: false,
      displayName: ""
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.checkAuth = this.checkAuth.bind(this);
    this.logOut = this.logOut.bind(this);
    this.conditionalLoginRender = this.conditionalLoginRender.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  // googleLogin(e) {
  //   e.preventDefault();
  //   api.getGoogleLogin()
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  // }

  checkAuth() {
    console.log("Checking login info")
    api.checkLogin()
      .then((res) => {
        console.log(res.data);
        this.setState({ isLoggedIn: res.data.isLoggedIn, id: res.data.id, isLoadedIn: true, displayName: res.data.displayName })
      })
  }

  logOut() {
    api.logOut()
      .then((res) => {
        console.log("logged out");
      })
  }

  componentDidMount() {
    this.checkAuth();
  }

  conditionalLoginRender() {
    if (this.state.loggedIn === null) {
      return (<div></div>)
    }
    if (this.state.isLoggedIn === false) {
      return (
        <li className="nav-item">
          <a className="nav-link" id="modal-link" onClick={this.openModal}>Login</a>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >

            <h2 ref={subtitle => this.subtitle = subtitle}>Login</h2>
            <h2 ref={subtitle => this.subtitle = subtitle}>Test Login</h2>
            <button onClick={this.closeModal}>close</button>
            <div>I am a modal</div>
            <div className="btn">
              <a href="http://localhost:5000/auth/google"> Google </a>
            </div>

            <div className="btn" onClick={this.checkAuth}>
              IsLoggedIn
                </div>

            <div className="btn">
              <a href="http://localhost:5000/auth/logout">Log Out</a>
            </div>
          </Modal>
        </li>
      )
    }

    else {
      return (
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/profile" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {this.state.displayName}
          </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="/profile">Profile</a>

            <a className="dropdown-item" href="/profile">Created Decks</a>

            <a className="dropdown-item" href="/profile">Liked Decks</a>

            <a className="dropdown-item" href="http://localhost:5000/auth/logout">Log Out</a>
          </div>
        </li>


      )
    }
  }

  //Navbar thing
  render() {

    if (this.isLoadedIn === false) {
      return (<div></div>);
    }

    else {

      return (
        <nav id="loginModal" className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">

          <a className="navbar-brand" href="/"><img className="mr-3" width="25 " height="25" src={"/img/cards/icon.png"} alt="Best Legends of Runeterra Decks - Runeterra Nexus" />Runeterra Nexus</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {/* <li className="nav-item">
                    <a className="nav-link disabled" to="#">Meta</a>
                  </li> */}
              <li className="nav-item">
                <a className="nav-link" href="/deck_lists">Decks</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/deck_builder">Deckbuilder</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/articles">Articles</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/set" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Card Library
                    </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/set">Base Set</a>
                </div>
              </li>
              <li className="nav-item">
                &nbsp;&nbsp;
              </li>

            </ul>
            <ul className="navbar-nav mr-right">
             
  

              <li className="nav-item">
                <a className="nav-link" href="/about">&nbsp;About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/privacy">Privacy Policy</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/terms">Terms of Service</a>
              </li>
            </ul>
          </div>
        </nav>
      )
    }
  }
};

export default Navbar;