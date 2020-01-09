import React from "react";
import { NavLink } from 'react-router-dom';

// import './NavBar.css';
class Navbar extends React.Component {
    constructor() {

      }

    render() {
        return (
            <div className="navbar">
                <div className="navbar-brand">
                    <h1><a href="/">Runeterra Hub</a></h1>
                </div>
                <nav>
                    <ul>
                        <li class="active"><NavLink className="nav-link" to="/meta">Meta</NavLink></li>
                        <li><NavLink className="nav-link" to="/decks">Decks</NavLink></li>
                        <li><NavLink className="nav-link" to="/deckbuilder">Deckbuilder</NavLink></li>
                        <li><NavLink className="nav-link dropdown dropdown-toggle" to="/cards">Card Library</NavLink></li>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="/cards/base">Base Set</a>
                                <a className="dropdown-item" href="/cards/expansion">Expansion Set</a>
                            </div>
                        <li><NavLink className="nav-link" to="/login">Login</NavLink></li>
                        <li><NavLink className="nav-link" to="/register">Register</NavLink></li>
                        <li><NavLink className="nav-link" to="/tracker">Hub Tracker</NavLink></li>
                    </ul>
                </nav>
            </div>
        )
    }
};

export default Navbar;