var db = require("../../models");

module.exports ={
	getArticleById: function(req,res){
		var id = req.query.id;
		var articles = [
			{
				id: 1, 
                layout: "<div id='start'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed dapibus turpis, ut varius enim. Phasellus vel orci diam. Phasellus dolor quam, facilisis non commodo et, hendrerit in est. Sed nec turpis purus. Nulla dignissim vitae massa in viverra. Suspendisse egestas placerat ornare. Mauris dignissim massa vel mauris tristique, eget bibendum leo fermentum. Praesent fringilla, metus vitae pellentesque sollicitudin, diam nibh aliquet lacus, id malesuada mauris risus ut orci. Nulla blandit egestas mi, ut ullamcorper lectus pharetra a. Aenean sagittis quis ante quis gravida.</p><DeckListInsert deckcode='CEBAIAIFAEHSQNQIAEAQGDAUDAQSOKJUAIAQCBI5AEAQCFYA'/><img class='cardImg' src='/img/cards/01DE001.png'></img><div>ok</div></div>",
			}
		];
		var article;

        for(var x = 0; x <articles.length; x++){
            if(articles[x].id === parseInt(id)){
                article = articles[x];
                break;
            }
        }
        //console.log(article);
        res.send(article);
	}

}