import React from "react";

import api from '../../utils/api';
import { Helmet } from "react-helmet";
import "./Articles.css"

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
			<div className="col-12 col-sm-12 col-md-6 col-lg-4">
			<div className="card bg-secondary fixed-height-card" style={{width: "18rem"}}>
				<img src={article.thumbnail} className="articleCardImage"></img>
				<div className="card-body">
					<a classname="card-title" href={"/articles/" + article.title + "/" + article.id}>{article.title}</a>
					<p className="desc-text">{article.date}</p>
					<p className="desc-text">{article.description}</p>
				</div>

			</div>
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
         		
         		<div className="container-fluid" >
         			<h2>Legends of Runeterra Articles</h2>
					<div className="row">{this.createRows()}</div>
				</div>

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