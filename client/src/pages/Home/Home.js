import React from "react";
import api from "../../utils/api";
import { Helmet } from "react-helmet";
import "./Home.css";
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
        api.getDeckLists()
        .then(res =>{
          //console.log(res.data);
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

            let metatitle = "Runeterra Nexus | Legends of Runeterra Decks, Cards, Guides and Community";
            let descrip = "Runeterra Nexus is your spot for Legends of Runeterra decks, Legends of Runeterra cards, and Legends of Runeterra guides.";
            let metacontent = "cards, nexus, card library, lor, legend, legends, runeterra, deck, decklist, decklists, decks, set, sets, spell, spells, community, guides, guide, faction, factions, champion, champions";

            let helmet = <Helmet>
                <title>{metatitle}</title>
                <meta name="description" content={descrip}/>
                <meta name="keywords" content={metacontent} />
                <meta name="author" content="runeterranexus.com"/>
                <meta http-equiv="Content-Language" content="en-US"/>
                <meta name="rating" content="kids"/>
                <meta http-equiv="content-type" content="text/html" charSet="utf-8" />
                </Helmet>;

            return helmet;
      }
    
      render() {
        const error = this.state.error;
        const isLoaded = this.state.isLoaded;
    
        if (error) {
          return <div>{this.createHelmet()}Error: {error.message}</div>
        }
        else if (!isLoaded) {
          return <div>{this.createHelmet()}Loading...</div>
        }
        else {
    
          return (
            <div className="container Home">
                {this.createHelmet()}
                <div className="setName text-center pt-4"><h2>Runeterra Nexus</h2></div>
                <div className="setName pb-5 pt-1"><p>Runeterra Nexus is your spot for Legends of Runeterra decks, Legends of Runeterra cards, and Legends of Runeterra guides.</p></div>

                <div>
                  If you love Legends of Runeterra and want to stay up to date on the best Legends of Runeterra decks, make sure to stay tuned for content from Runeterra Nexus. We are your source for all new Legends of Runeterra Cards as well as the always evolving Legends of Runeterra meta. Stay tuned for our take on the best Legends of Runeterra beta decks. 
                	For now, get started in the Legends of Runeterra Beta with some of the best Legends of Runeterra decks.
                <div>&nbsp;</div>
                  <div className="text-center"><a className="pinkLink" href="/deck_lists">Best Legends of Runeterra Decks</a></div>
                </div>

                
  
            </div>
            );
        }
      }
}

export default Home;