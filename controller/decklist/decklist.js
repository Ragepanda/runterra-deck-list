var db = require("../../models");

module.exports ={

    addNewDeck: function(req,res){
        console.log("Add New Deck Route: "+req.body.id);
        console.log("deckCode: "+req.body.deckCode);
        console.log("deckName: "+req.body.deckName);;
        console.log("deckDescription: "+req.body.deckDescription);
        db.decklist.create({
            likes:0,
            code: req.body.deckCode,
            name: req.body.deckName,
            description: req.body.deckDescription,
            creatorId: req.body.id
        })
        .then((newDeck)=>{
            db.decklist.findOne({where:{id:newDeck.dataValues.id}, include:'creator'})
            .then(deckWithUser=>{
                res.send(deckWithUser);
            })
            
        })
        
    },

    getDecklists: function (req, res){
        res.send(
            [
    
            {
                id: 1, 
                code: 'CEBAGAIDBIVC4BIBAIBAQDZRHABAGAICBMLCCBIBAMCBMJBRGYAA', 
                name: "Yasuo Control", 
                description: "This decks aims to use Recall and Stun effects to hold your opponent back until you can win with a big attack.", 
                cardArtId: "01IO015",
                likes:80 
            },
             {
                id: 2, 
                code: 'CEBAIAICCMQDCOIFAEAASCY5EAWQEAYBAADRUJIDAEBAYERXAEAQCAQC', 
                name: "Fiora Exodia", 
                description: "This decks is all about using Fiora to win, it has a ton of barriers to keep her fighting and protected.", 
                cardArtId: "01DE045",
                likes:2212310 
            },
            {
                id: 3, 
                code: 'CEBAIAIEBAFDKOQIAEBAECYYFEVTCMRZAEBACARHFUAA', 
                name: "Teemo Meme-o", 
                description: "They put Teemo in a card a game! Now use him to fill your opponents deck with poison mushrooms!", 
                cardArtId: "01PZ008",
                likes:132310 
            },
            {
                id: 4, 
                code: 'CEBAIAIFAEHSQNQHAEAQGDAUEETSSNACAEAQKFACAEAROGABAEAQCCI', 
                name: "Freljord Control", 
                description: "This deck is all about killing you opponents units and developing big threats.", 
                cardArtId: "01FR039",
                likes:232 
            },
             {
                id: 5, 
                code: 'CEBAKAICD4UTCNJWA4AQCCIMC4QSSLZUAABAEAIBAUGQEAICBIQQ', 
                name: "Karma Ramp", 
                description: "Get to 10 mana, let Karma win the game by doubling all your spells.", 
                cardArtId: "01IO041",
                likes:110 
            },
            {
                id: 6, 
                code: 'CEBAIAIDA4KBUJYGAECACDA4E4UDIAQBAECA2BABAMBAIDRYAA', 
                name: "Jinx Draven Aggro", 
                description: "Run out units quickly and discards cards for value with this aggressive decks.", 
                cardArtId: "01PZ040",
                likes:123120 
            },
             {
                id: 7, 
                code: 'CEBACAIBAMFQCBIHBMNB4IRGFMYDCNJZAIAQCBJWAEAQCIQA', 
                name: "Aristocrats", 
                description: "This deck will generate a ton of value whenever your units die.", 
                cardArtId: "01SI030",
                likes:23230 
            },
             {
                id: 8, 
                code: 'CEBAEAIAFIYAQAIEAMDBAGA3EQ2DSAQBAEACGAYBAQCAKMYCAEAQAMQBAECCO', 
                name: "Ionia P&Z Spellslingers", 
                description: "Cast spells to burn your opponent out and make your late game units cheaper.", 
                cardArtId: "01DE042",
                likes:220 
            },
            {
                id: 9, 
                code: 'CEBAKAIEBAKBONBZA4AQKBZEFAVTCNJYAEBACBJCFEAA', 
                name: "Von Yipp Aggro", 
                description: "This deck is all about buffing up 1 drop units with Von Yipp's ability.", 
                cardArtId: "01PZ023",
                likes:20 
            },
             {
                id: 10, 
                code: 'CEAQUAIAAEDAYFA4EISCOMZWAIAQCAJZAQAQABAOF44AA', 
                name: "Elites", 
                description: "This deck will take advantage of the synergies between Elite units.", 
                cardArtId: "01DE012",
                likes:0 
            },
            {
                id: 11, 
                code: 'CEBAKAIDB4LSULRXAUAQKJZIGU4DSAQCAEBQ2FQDAECSMMJSAA', 
                name: "Spiders", 
                description: "This deck will swarm the board with spiders and then buff them.", 
                cardArtId: "01SI053",
                likes:100 
            },
             {
                id: 12, 
                code: 'CEBAIAIBBYKBQHIHAECREHBCFEYDCNACAEAQCAYCAECSANQBAEAQKOQ', 
                name: "Avinia Clone", 
                description: "Using this deck you will be able to make an army of Avinia that keep coming back.", 
                cardArtId: "01FR024",
                likes:1500 
            },
             {
                id: 13, 
                code: 'CEBAIAICAIEQ2GYFAECQUFIXD4VAEAQBAUDDMBABAIBRQMJZAEAQCBIW', 
                name: "Ephemeral Aggro", 
                description: "This deck uses a ton of Ephemeral units to rush the opponent down.", 
                cardArtId: "01SI021",
                likes:0221 
            },
              {
                id: 14, 
                code: 'CEBAEAIACYTAQAIFBMNB4IRJFMYDCAQBAEAB6BABAUDQUERZAA', 
                name: "Lucian Aggro", 
                description: "This deck aims to evolve Lucian and finish the opponent off quick.", 
                cardArtId: "01DE022",
                likes:0123 
            },
             {
                id: 15, 
                code: 'CEBAIAIBBEGS2LQGAEBQKBQODYVS6AQBAEASGBABAMLB2MBSAA', 
                name: "Vladimir Self Damage", 
                description: "This deck aims to evolve Lucian and finish the opponent off quick.", 
                cardArtId: "01NX006",
                likes:30 
            },
        ]
    )
    },

    getDeckById: function(req,res){
        var id = req.query.id;
        //console.log(id);
        var cards = [
            {
                id: 1, 
                code: 'CEBAGAIDBIVC4BIBAIBAQDZRHABAGAICBMLCCBIBAMCBMJBRGYAA', 
                name: "Yasuo Control", 
                description: "This decks aims to use Recall and Stun effects to hold your opponent back until you can win with a big attack.", 
                cardArtId: "01IO015" 
            },
             {
                id: 2, 
                code: 'CEBAIAICCMQDCOIFAEAASCY5EAWQEAYBAADRUJIDAEBAYERXAEAQCAQC', 
                name: "Fiora Exodia", 
                description: "This decks is all about using Fiora to win, it has a ton of barriers to keep her fighting and protected.", 
                cardArtId: "01DE045" 
            },
            {
                id: 3, 
                code: 'CEBAIAIEBAFDKOQIAEBAECYYFEVTCMRZAEBACARHFUAA', 
                name: "Teemo Memeo", 
                description: "They put Teemo in a card a game! Now use him to fill your opponents deck with poison mushrooms!", 
                cardArtId: "01PZ008" 
            },
            {
                id: 4, 
                code: 'CEBAIAIFAEHSQNQHAEAQGDAUEETSSNACAEAQKFACAEAROGABAEAQCCI', 
                name: "Frelijord Control", 
                description: "This deck is all about killing you opponents units and developing big threats.", 
                cardArtId: "01FR039" 
            },
             {
                id: 5, 
                code: 'CEBAKAICD4UTCNJWA4AQCCIMC4QSSLZUAABAEAIBAUGQEAICBIQQ', 
                name: "Karma Ramp", 
                description: "Get to 10 mana, let Karma win the game by doubling all your spells.", 
                cardArtId: "01IO041" 
            },
            {
                id: 6, 
                code: 'CEBAIAIDA4KBUJYGAECACDA4E4UDIAQBAECA2BABAMBAIDRYAA', 
                name: "Jinx Draven Aggro", 
                description: "Run out units quickly and discards cards for value with this aggressive decks.", 
                cardArtId: "01PZ040" 
            },
             {
                id: 7, 
                code: 'CEBACAIBAMFQCBIHBMNB4IRGFMYDCNJZAIAQCBJWAEAQCIQA', 
                name: "Aristocrats", 
                description: "This deck will generate a ton of value whenever your units die.", 
                cardArtId: "01SI030" 
            },
            {
                id: 8, 
                code: 'CEBAEAIAFIYAQAIEAMDBAGA3EQ2DSAQBAEACGAYBAQCAKMYCAEAQAMQBAECCO', 
                name: "Ionia P&Z Spellslingers", 
                description: "Cast spells to burn your oppoent out and make your late game units cheaper.", 
                cardArtId: "01DE042" 
            },
            {
                id: 9, 
                code: 'CEBAKAIEBAKBONBZA4AQKBZEFAVTCNJYAEBACBJCFEAA', 
                name: "Von Yipp Aggro", 
                description: "This deck is all about buffing up 1 drop units with Von Yipp's ability.", 
                cardArtId: "01PZ023" 
            },
             {
                id: 10, 
                code: 'CEAQUAIAAEDAYFA4EISCOMZWAIAQCAJZAQAQABAOF44AA', 
                name: "Elites", 
                description: "This deck will take advantage of the synergies between Elite units.", 
                cardArtId: "01DE012" 
            },
            {
                id: 11, 
                code: 'CEBAKAIDB4LSULRXAUAQKJZIGU4DSAQCAEBQ2FQDAECSMMJSAA', 
                name: "Spiders", 
                description: "This deck will swarm the board with spiders and then buff them.", 
                cardArtId: "01SI053" 
            },
              {
                id: 12, 
                code: 'CEBAIAIBBYKBQHIHAECREHBCFEYDCNACAEAQCAYCAECSANQBAEAQKOQ', 
                name: "Avinia Clone", 
                description: "Using this deck you will be able to make an army of Avinia that keep coming back.", 
                cardArtId: "01FR024" 
            },
             {
                id: 13, 
                code: 'CEBAIAICAIEQ2GYFAECQUFIXD4VAEAQBAUDDMBABAIBRQMJZAEAQCBIW', 
                name: "Ephemeral Aggro", 
                description: "This deck uses a ton of Ephemeral units to rush the opponent down.", 
                cardArtId: "01SI021" 
            },
              {
                id: 14, 
                code: 'CEBAEAIACYTAQAIFBMNB4IRJFMYDCAQBAEAB6BABAUDQUERZAA', 
                name: "Lucian Aggro", 
                description: "This deck aims to evolve Lucian and finish the oppoent off quick.", 
                cardArtId: "01DE022" 
            },
             {
                id: 15, 
                code: 'CEBAIAIBBEGS2LQGAEBQKBQODYVS6AQBAEASGBABAMLB2MBSAA', 
                name: "Vladimir Self Damage", 
                description: "This deck aims to evolve Lucian and finish the oppoent off quick.", 
                cardArtId: "01NX006" 
            },

        ];
        var card;

        for(var x = 0; x <cards.length; x++){
            if(cards[x].id === parseInt(id)){
                card = cards[x];
                break;
            }
        }
        //console.log(card);
        res.send(card);
    }
}