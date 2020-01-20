var db = require("../../models");

module.exports ={

    getDecklists: function (req, res){
        res.send(
            [
            {
                id: 1, 
                code: 'CEBAIAIFAEHSQNQIAEAQGDAUDAQSOKJUAIAQCBI5AEAQCFYA', 
                name: "Example Deck", 
                description: "This is a very cool deck meant to test our API", 
                cardArtId: "01FR033" 
            },
            {
                id: 2, 
                code: 'CEBAKAIFBYKSKJZVBAAQEBQIEQVC2NBWG4AACAIBAIOQ', 
                name: "Some Spiders In This One.", 
                description: "This is a really cool deck meant to test our API, this is the second one.", 
                cardArtId: "01PZ017" 
            },
            {
                id: 3, 
                code: 'CEAAAAQUAECACDASCMKBUGY4EQTCUKZNFYXTINJWG44RIAIFA4EQWDAOCULBOGRCEQSSOKBLFUXTAMJV', 
                name: "One of Everything", 
                description: "This is a super cool deck meant to test our API, this list is garbage.", 
                cardArtId: "01DE020" 
            }
        ]
    )
    },

    getDeckById: function(req,res){
        var id = req.query.id;
        console.log(id);
        var cards = [
            {
                id: 1, 
                code: 'CEBAIAIFAEHSQNQIAEAQGDAUDAQSOKJUAIAQCBI5AEAQCFYA', 
                name: "Example Deck", 
                description: "This is a very cool deck meant to test our API", 
                cardArtId: "01FR033" 
            },
            {
                id: 2, 
                code: 'CEBAKAIFBYKSKJZVBAAQEBQIEQVC2NBWG4AACAIBAIOQ', 
                name: "Some Spiders In This One.", 
                description: "This is a really cool deck meant to test our API, this is the second one.", 
                cardArtId: "01PZ017" 
            },
            {
                id: 3, 
                code: 'CEAAAAQUAECACDASCMKBUGY4EQTCUKZNFYXTINJWG44RIAIFA4EQWDAOCULBOGRCEQSSOKBLFUXTAMJV', 
                name: "One of Everything", 
                description: "This is a super cool deck meant to test our API, this list is garbage.", 
                cardArtId: "01DE020" 
            }
        ];
        var card;

        for(var x = 0; x <cards.length; x++){
            console.log(cards[x].id +" vs. "+parseInt(id));
            if(cards[x].id === parseInt(id)){
                console.log("ID match");
                card = cards[x];
                break;
            }
        }
        console.log(card);
        res.send(card);
    }
}