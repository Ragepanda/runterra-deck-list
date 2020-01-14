import React from "react";
import { NavLink } from 'react-router-dom';

import './Navbar.css';
class Navbar extends React.Component {
    constructor(props) {
        super(props); // ✅ We passed props
      }
//navbar
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <a className="navbar-brand" href="/">Runeterra Hub</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <a className="nav-link disabled" href="#">Meta</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="#">Decks</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="#">Deckbuilder</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Card Library
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="/set">Base Set</a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="#">Login</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="#">Register</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="#">Hub Tracker</a>
                  </li>
                </ul>
              </div>
            </nav>
        )
    }
};

export default Navbar;