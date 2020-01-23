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
        api.getDeckLists()
        .then(res =>{
          console.log(res.data);
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
        const items = this.state.items;
    
        if (error) {
          return <div>{this.createHelmet()}Error: {error.message}</div>
        }
        else if (!isLoaded) {
          return <div>{this.createHelmet()}Loading...</div>
        }
        else {
    
          return (
            <div className="Home">
                {this.createHelmet()}
                <div className="setName text-center pt-4"><h2>Runeterra Nexus</h2></div>
                <div className="setName text-center pb-5 pt-1"><p>Runeterra Nexus is your spot for Legends of Runeterra decks, Legends of Runeterra cards, and Legends of Runeterra guides.</p></div>

                <p>
                  If you love Legends of Runeterra and love staying up to date on the best Legends of Runeterra decks, make sure to stay tuned for content from Runeterra Nexus. We are your source for all new Legends of Runeterra Cards as well as the always evolving Legends of Runeterra meta. Stay tuned for our take on the best Legends of Runeterra beta decks. 
                </p>
                <div>
                	Get Started with some of these decks (link to decks page)
                </div>
                <div>
                	A powerful aggro deck for grinding the ladder (link to heckrim shark)
                </div>
                <div>
                	A powerful midrange full of spiders (link to spiders and elise)
                </div>
                
  
            </div>
            );
        }
      }
}

export default Home;