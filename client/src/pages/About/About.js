import React from "react";

import { Helmet } from "react-helmet";
class About extends React.Component {



  componentDidMount() {

  }
  render() {
    return(
    <div className="regBody container">
      <h1>About Us</h1>
  
      <p>We at Runeterra Nexus are a tight knit group of developers, streamers, gamers, memers and wannabe podcasters. All of us on the team have enjoyed other TCG's, such as MtG and Hearthstone, but didn't find a game worth making a website, until we started playing the Legends of Runeterra beta.</p>
    
      <p>Now we are committed to creating the best runeterra decks, the best runeterra memes and the best legends of runeterra podcast out there.</p>

      <p>Make sure to follow us @runeterranexus on Instagram, TikTok, and Twitter to stay up to date</p>
    </div>
    );
   } 
};

export default About;