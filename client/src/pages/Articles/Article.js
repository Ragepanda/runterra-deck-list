import React from "react";

import DeckListInsert from "../../component/DeckListInsert";
import baseSet from "../../card_info/set1.json";
import { Helmet } from "react-helmet";
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
		this.state.layout = <DeckListInsert deckcode='CEBAIAIFAEHSQNQIAEAQGDAUDAQSOKJUAIAQCBI5AEAQCFYA'/>;
		this.setState({ isLoaded: true });
	}

	showLayout(){
		if(this.state.isLoaded){
			console.log(this.state.layout);
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