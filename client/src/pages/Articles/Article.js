import React from "react";

import DeckListInsert from "../../component/DeckListInsert";
import baseSet from "../../card_info/set1.json";
import { Helmet } from "react-helmet";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import "./Article.css";

class Article extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoaded: false,
			layout: {}
		};
		//console.log(this.state.deck);
		//console.log(baseSet[0].name)
	}
	componentDidMount(){
		const testHTML = this.testHTMLstring();
		
		this.state.layout =  ReactHtmlParser(testHTML);
		this.setState({ isLoaded: true });
	}

	testLayout(){
		return(
			<div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed dapibus turpis, ut varius enim. Phasellus vel orci diam. Phasellus dolor quam, facilisis non commodo et, hendrerit in est. Sed nec turpis purus. Nulla dignissim vitae massa in viverra. Suspendisse egestas placerat ornare. Mauris dignissim massa vel mauris tristique, eget bibendum leo fermentum. Praesent fringilla, metus vitae pellentesque sollicitudin, diam nibh aliquet lacus, id malesuada mauris risus ut orci. Nulla blandit egestas mi, ut ullamcorper lectus pharetra a. Aenean sagittis quis ante quis gravida.</p><DeckListInsert deckcode='CEBAIAIFAEHSQNQIAEAQGDAUDAQSOKJUAIAQCBI5AEAQCFYA'/><img className="cardImg" src="/img/cards/01DE001.png"></img>
				<div>ok</div>
			</div>
		);
	}
	testHTMLstring(){
		return(
		"<div id='start'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed dapibus turpis, ut varius enim. Phasellus vel orci diam. Phasellus dolor quam, facilisis non commodo et, hendrerit in est. Sed nec turpis purus. Nulla dignissim vitae massa in viverra. Suspendisse egestas placerat ornare. Mauris dignissim massa vel mauris tristique, eget bibendum leo fermentum. Praesent fringilla, metus vitae pellentesque sollicitudin, diam nibh aliquet lacus, id malesuada mauris risus ut orci. Nulla blandit egestas mi, ut ullamcorper lectus pharetra a. Aenean sagittis quis ante quis gravida.</p><DeckListInsert deckcode='CEBAIAIFAEHSQNQIAEAQGDAUDAQSOKJUAIAQCBI5AEAQCFYA'/><img class='cardImg' src='/img/cards/01DE001.png'></img><div>ok</div></div>"
		);
	}


	showLayout(){
		if(this.state.isLoaded){
			//console.log(this.state.layout);
			return(this.state.layout);
		}
	}


	render(){
		return(
			<div className="container" >
           <Helmet>
           <title>{ " | Legends of Runeterra Articles on Runeterra Nexus"}</title>
           		<meta name="description" />
           		<meta name="keywords" />
           		<meta name="author" content="runeterranexus.com" />
           		<meta http-equiv="Content-Language" content="en-US" />
           		<meta name="rating" content="kids" />
           		<meta http-equiv="content-type" content="text/html" charSet="utf-8" />
         	</Helmet> 
         		<br/>
         		<br/>
         		<br/>
				<h3>Article Head</h3>
				<div>HELLO</div>
				{this.showLayout()}

			</div>
		);
	}

}
export default Article;