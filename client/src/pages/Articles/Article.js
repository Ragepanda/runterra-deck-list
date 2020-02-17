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
                //console.log(html);
                this.setState({
                    isLoaded: true,
                    layout: html,
                    description: res.data.description,
                    title: res.data.title
                });


            })
            .catch(err => {
                this.setState({
                    //isLoaded: true,
                    //error: err
                })
            });
		//console.log(this.state.layout);
	}

	testLayout(){
		return(
			<div>
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
			<div className="container text-center bckgrd" >
           <Helmet>
           <title>{ this.state.title + " | Legends of Runeterra Articles on Runeterra Nexus"}</title>
           		<meta name="description" content={this.state.description} />
           		<meta name="keywords" content={this.state.keywords} />
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