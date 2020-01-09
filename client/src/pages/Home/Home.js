import React from "react";
import api from "../../utils/api";
import set1 from "../../card_info/set1.json";
import logo from '../../logo.svg';

class Home extends React.Component{
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
            console.log(set1);
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

export default Home;