import React from "react";

import api from '../../utils/api';
import { Helmet } from "react-helmet";

class Articles extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoaded: false,
			articles: [],
			error: null
		};
		//console.log(this.state.deck);
		//console.log(baseSet[0].name)
	}
	componentDidMount(){
		  api.getArticles()
            .then(res => {
                //console.log(res.data);
                this.setState({
                    isLoaded: true,
                    articles: res.data
                });


            })
            .catch(err => {
                this.setState({
                    isLoaded: true,
                    error: err
                })
            });
            //console.log(this.state.articles[0]);
            //console.log(this.state.isLoaded);
	}

	createRows(){
		const list = this.state.articles.map((article, index) => {
		return(
			<div>
				<img src={article.thumbnail}></img>
				<a href={"/articles/" + article.name + "/" + article.id}>{article.title}</a>
				<p>{article.description}</p>

			</div>
		);
		});
		return list;
	}



	render(){

		if(this.state.isLoaded === true){
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
				<div>{this.createRows()}</div>

			</div>
		);}
		else {
            return (
                <div><h2>Loading...</h2></div>
            )
        }
	}


}
export default Articles;