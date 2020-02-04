import React from "react";

import DeckListInsert from "../../component/DeckListInsert";
import baseSet from "../../card_info/set1.json";
import api from '../../utils/api';
import { Helmet } from "react-helmet";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import "./Article.css";

class Article extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoaded: false,
			layout: {},
			error: null
		};
		//console.log(this.state.deck);
		//console.log(baseSet[0].name)
	}
	componentDidMount(){
		  api.getArticleById(this.props.match.params.id)
            .then(res => {
                //console.log(res.data);
                var html = ReactHtmlParser(res.data.layout);
                console.log(html);
                this.setState({
                    isLoaded: true,
                    layout: html
                });


            })
            .catch(err => {
                this.setState({
                    //isLoaded: true,
                    //error: err
                })
            });
		console.log(this.state.layout);
	}

	testLayout(){
		return(
			<div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed dapibus turpis, ut varius enim. Phasellus vel orci diam. Phasellus dolor quam, facilisis non commodo et, hendrerit in est. Sed nec turpis purus. Nulla dignissim vitae massa in viverra. Suspendisse egestas placerat ornare. Mauris dignissim massa vel mauris tristique, eget bibendum leo fermentum. Praesent fringilla, metus vitae pellentesque sollicitudin, diam nibh aliquet lacus, id malesuada mauris risus ut orci. Nulla blandit egestas mi, ut ullamcorper lectus pharetra a. Aenean sagittis quis ante quis gravida.</p><DeckListInsert deckcode='CEBAIAIFAEHSQNQIAEAQGDAUDAQSOKJUAIAQCBI5AEAQCFYA'/><img className="cardImg" src="/img/cards/01DE001.png"></img>
				<div>ok</div>
			</div>
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
				{this.showLayout()}

			</div>
		);
	}

}
export default Article;