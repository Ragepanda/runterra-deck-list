import React from "react";
import api from "../../utils/api";
import set1 from "../../card_info/set1.json";
import logo from '../../logo.svg';
import { Helmet } from "react-helmet";
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
        })
        .catch(err=>{
          this.setState({
            isLoaded: true,
            error: err
          })
        });
      }

      createHelmet(){

            let metatitle = "Runeterra Hub  | Legends of Runeterra Decks, Cards, Guides and Community";
            let descrip = "Runeterra Hub is your spot for Legends of Runeterra decks, Legends of Runeterra cards, and Legends of Runeterra guides.";
            let metacontent = "cards, hub, card library, lor, legend, legends, runeterra, deck, decklist, decklists, decks, set, sets, spell, spells, community, guides, guide, faction, factions, champion, champions";

            let helmet = <Helmet>
                <title>{metatitle}</title>
                <meta name="description" content={descrip}/>
                <meta name="keywords" content={metacontent} />
                <meta name="author" content="runeterrahub.com"/>
                <meta http-equiv="Content-Language" content="en-US"/>
                <meta name="rating" content="kids"/>
                <meta http-equiv="content-type" content="text/html" charSet="utf-8" />
                </Helmet>;

            return helmet;
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
            <div className="Home">
              
                <p>
                  Here is our API being passed: {this.state.items.express}
            </p>
                
  
            </div>
            );
        }
      }
}

export default Home;