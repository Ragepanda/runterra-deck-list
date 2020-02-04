var db = require("../../models");

module.exports ={

	getArticles: function (req, res){
		res.send(
		[
			{
				id: 1, 
                layout: "<div id='start'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed dapibus turpis, ut varius enim. Phasellus vel orci diam. Phasellus dolor quam, facilisis non commodo et, hendrerit in est. Sed nec turpis purus. Nulla dignissim vitae massa in viverra. Suspendisse egestas placerat ornare. Mauris dignissim massa vel mauris tristique, eget bibendum leo fermentum. Praesent fringilla, metus vitae pellentesque sollicitudin, diam nibh aliquet lacus, id malesuada mauris risus ut orci. Nulla blandit egestas mi, ut ullamcorper lectus pharetra a. Aenean sagittis quis ante quis gravida.</p><DeckListInsert deckcode='CEBAIAIFAEHSQNQIAEAQGDAUDAQSOKJUAIAQCBI5AEAQCFYA'/><img class='cardImg' src='/img/cards/01DE001.png'></img><div>ok</div></div>",
				date: "12/31/9999",
				thumbnail: "/",
				title: "",
				description: "",
			},
			{
				id: 2, 
                layout: "<div><h2>Legends of Runeterra Beta Region Report: Shadow Isles Region and Champions</h2><h5>by Stanley Jarozewski. 2/3/2020</h5><p>The Shadow Isles region has shown to be very well rounded in the first two weeks of the Legends of Runterra open beta, as it has powerful options for aggro, control and everything in between. Here we'll look into mechanics you can expect to see in Shadow Isles, and the Champions of the Region.</p><h3>Region Identity & Keywords</h3><p>The Shadow Isles is full of cards depicting ghosts, spiders and those unfortunate enough to come across them. This region can focus on swarming the board, killing it's own units for value, or killing opponets units to control the board. It's key mechanics are Fearsome, making creatures unbloackable by anything with less than 3 power, Last Breath, and ability that triggers when the unit dies, and Ephemeral, a keyword meaning the unit will die at the end of the turn or when it strikes. This is also the only region with spells that can Drain, allowing the player to heal from the damage the spell deals.</p><h3>Champions</h3><img class='articleCard' src='/img/cards/01SI053.png'></img><img class='articleCard' src='/img/cards/01SI053T2.png'></img><img class='articleCard' src='/img/cards/01SI053T1.png'></img><p>If you enjoy spiders, Elise is the champion for you. Elise is a powerful aggresive champion whith Fearsome, that makes a spider everytime she attacks. If you can start a turn with three other spider units in play Elise will level up and give all spider allies Challenger and Fearsome, allowing you a huge advantage with attacking. Elise is also part of the starting card pool for new players, and is a great budget card to build around.  Elise's spell form, Elise's Crawling Sensation allows you to summon 2 spiders if a unit died that turn, which can go a long way to helping the Elise on board level up.</p><img class='articleCard' src='/img/cards/01SI042.png'></img><img class='articleCard' src='/img/cards/01SI042T1.png'></img><img class='articleCard' src='/img/cards/01SI042T2.png'></img><p>Hecarim is a powerful finisher to both aggro and mid range decks, and a good build around for Ephermal cards. Hecarim summons two 3/2 Ephemeral allies everytime he attacks, and having 6 health means he isn't likely to go down in a single combat. Once leveled up Hecarim can easily overtake opponets, giving all allied ephermal units +2/+0. He also checks his level up condition from anywhere, so along as you can swing with eight Ephermal units in agame you can make this Champion into a real problem for your opponent. Hecarim's spell form, Hecrarim's Onslaught of Shadows,is great value tool for defending or attacking, giving you two 3/2 Ephermal units for the turn.</p><img class='articleCard' src='/img/cards/01SI052.png'></img><img class='articleCard' src='/img/cards/01SI052T1.png'></img><img class='articleCard' src='/img/cards/01SI052T2.png'></img><p>Thresh is an insteresting Champion. Being a 3/6 Challenger for 5 mana is nice and help you control combat, and given how often units die in combat inLegends of Runeterra Tresh's level up condition isn't too difficult to acheive. But he does need to surive long enough to level up and attack and he willoften be a priority target for enemy removal because his level up effect to put another Champion from your deck on the board is very powerful. It is importantto note that a second Thresh won't pull another Champion from your deck. Thresh's spell form, Thresh's The Box, is a nice control tool, dealing 3 damage to each enemy summoned that round.</p><img class='articleCard' src='/img/cards/01SI030.png'></img><img class='articleCard' src='/img/cards/01SI030T2.png'></img><img class='articleCard' src='/img/cards/01SI030T1.png'></img><p>Kalista is a bit of tricky Champion to play, having only 2 health to start with means she is very vulenrable to removal and will often be removed before she sees three of your units die. However if unanswered and paired with the right unit her level up ability can be one of the most powerful in game, reviving a powerful ally each turn. Her spell form, Kalista's Black Spear can help mitigate you units dying by allowing you to deal 3 damage to an enemy unit for only 2 mana.</p></div>",
            	date: "02/03/2020",
            	thumbnail: "/",
            	title: "Legends of Runeterra Beta Region Report: Shadow Isles Region and Champions",
				description: "Get to know the Shadows Isles region and it's Champions.",
            },
		]
		);
	},

	getArticleById: function(req,res){
		var id = req.query.id;
		var articles = [
			{
				id: 1, 
                layout: "<div id='start'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed dapibus turpis, ut varius enim. Phasellus vel orci diam. Phasellus dolor quam, facilisis non commodo et, hendrerit in est. Sed nec turpis purus. Nulla dignissim vitae massa in viverra. Suspendisse egestas placerat ornare. Mauris dignissim massa vel mauris tristique, eget bibendum leo fermentum. Praesent fringilla, metus vitae pellentesque sollicitudin, diam nibh aliquet lacus, id malesuada mauris risus ut orci. Nulla blandit egestas mi, ut ullamcorper lectus pharetra a. Aenean sagittis quis ante quis gravida.</p><DeckListInsert deckcode='CEBAIAIFAEHSQNQIAEAQGDAUDAQSOKJUAIAQCBI5AEAQCFYA'/><img class='articleCard' src='/img/cards/01DE001.png'></img><div>ok</div></div>",
				date: "12/31/9999",
				thumbnail: "",
				title: "",
				description: "",
			},
			{
				id: 2, 
                layout: "<div><h2>Legends of Runeterra Beta Region Report: Shadow Isles Region and Champions</h2><h5>by Stanley Jarozewski. 2/3/2020</h5><p>The Shadow Isles region has shown to be very well rounded in the first two weeks of the Legends of Runterra open beta, as it has powerful options for aggro, control and everything in between. Here we'll look into mechanics you can expect to see in Shadow Isles, and the Champions of the Region.</p><h3>Region Identity & Keywords</h3><p>The Shadow Isles is full of cards depicting ghosts, spiders and those unfortunate enough to come across them. This region can focus on swarming the board, killing it's own units for value, or killing opponets units to control the board. It's key mechanics are Fearsome, making creatures unbloackable by anything with less than 3 power, Last Breath, and ability that triggers when the unit dies, and Ephemeral, a keyword meaning the unit will die at the end of the turn or when it strikes. This is also the only region with spells that can Drain, allowing the player to heal from the damage the spell deals.</p><h3>Champions</h3><img class='articleCard' src='/img/cards/01SI053.png'></img><img class='articleCard' src='/img/cards/01SI053T2.png'></img><img class='articleCard' src='/img/cards/01SI053T1.png'></img><p>If you enjoy spiders, Elise is the champion for you. Elise is a powerful aggresive champion whith Fearsome, that makes a spider everytime she attacks. If you can start a turn with three other spider units in play Elise will level up and give all spider allies Challenger and Fearsome, allowing you a huge advantage with attacking. Elise is also part of the starting card pool for new players, and is a great budget card to build around.  Elise's spell form, Elise's Crawling Sensation allows you to summon 2 spiders if a unit died that turn, which can go a long way to helping the Elise on board level up.</p><img class='articleCard' src='/img/cards/01SI042.png'></img><img class='articleCard' src='/img/cards/01SI042T1.png'></img><img class='articleCard' src='/img/cards/01SI042T2.png'></img><p>Hecarim is a powerful finisher to both aggro and mid range decks, and a good build around for Ephermal cards. Hecarim summons two 3/2 Ephemeral allies everytime he attacks, and having 6 health means he isn't likely to go down in a single combat. Once leveled up Hecarim can easily overtake opponets, giving all allied ephermal units +2/+0. He also checks his level up condition from anywhere, so along as you can swing with eight Ephermal units in agame you can make this Champion into a real problem for your opponent. Hecarim's spell form, Hecrarim's Onslaught of Shadows,is great value tool for defending or attacking, giving you two 3/2 Ephermal units for the turn.</p><img class='articleCard' src='/img/cards/01SI052.png'></img><img class='articleCard' src='/img/cards/01SI052T1.png'></img><img class='articleCard' src='/img/cards/01SI052T2.png'></img><p>Thresh is an insteresting Champion. Being a 3/6 Challenger for 5 mana is nice and help you control combat, and given how often units die in combat inLegends of Runeterra Tresh's level up condition isn't too difficult to acheive. But he does need to surive long enough to level up and attack and he willoften be a priority target for enemy removal because his level up effect to put another Champion from your deck on the board is very powerful. It is importantto note that a second Thresh won't pull another Champion from your deck. Thresh's spell form, Thresh's The Box, is a nice control tool, dealing 3 damage to each enemy summoned that round.</p><img class='articleCard' src='/img/cards/01SI030.png'></img><img class='articleCard' src='/img/cards/01SI030T2.png'></img><img class='articleCard' src='/img/cards/01SI030T1.png'></img><p>Kalista is a bit of tricky Champion to play, having only 2 health to start with means she is very vulenrable to removal and will often be removed before she sees three of your units die. However if unanswered and paired with the right unit her level up ability can be one of the most powerful in game, reviving a powerful ally each turn. Her spell form, Kalista's Black Spear can help mitigate you units dying by allowing you to deal 3 damage to an enemy unit for only 2 mana.</p></div>",
            	date: "02/03/2020",
            	thumbnail: "",
            	title: ">Legends of Runeterra Beta Region Report: Shadow Isles Region and Champions",
				description: "Get to know the Shadows Isles region and it's Champions.",
            },
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