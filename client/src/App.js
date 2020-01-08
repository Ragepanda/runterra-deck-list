import React from 'react';
import logo from './logo.svg';
import './App.css';
import api from "./utils/api";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount(){
    api.getTest()
    .then(res =>{
      this.setState({
        isLoaded: true, 
        items: res.data});
        console.log(res.data);
    })
    .catch(err=>{
      this.setState({
        isLoaded: true,
        error: err
      })
    });
  }

  render() {
    const error = this.state.error;
    const isLoaded = this.state.isLoaded;
    const items = this.state.items;

    if (error) {
      return <div>Error: {error.message}</div>
    }
    else if (!isLoaded) {
      return <div>Loading...</div>
    }
    else {

      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Here is our API being passed: {this.state.items.express}
        </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
        </a>
          </header>
        </div>
        );
    }
  }
}

export default App;
