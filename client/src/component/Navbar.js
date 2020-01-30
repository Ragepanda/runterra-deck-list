import React from "react";

import './Navbar.css';
class Navbar extends React.Component {

//Navbar thing
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
              
              <a className="navbar-brand" href="/"><img className="mr-3" width="25 " height="25" src={"/img/cards/icon.png"} alt="Best Legends of Runeterra Decks - Runeterra Nexus" />Runeterra Nexus</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  {/* <li className="nav-item">
                    <a className="nav-link disabled" href="#">Meta</a>
                  </li> */}
                  <li className="nav-item">
                    <a className="nav-link" href="/deck_lists">Decks</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/deck_builder">Deckbuilder</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/set" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Card Library
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="/set">Base Set</a>
                    </div>
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
                  {/* <li className="nav-item">
                    <a className="nav-link disabled" href="#">Login</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="#">Register</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="#">Runeterra Tracker</a>
                  </li> */}
                </ul>
              </div>
            </nav>
        )
    }
};

export default Navbar;