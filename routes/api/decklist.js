const router = require("express").Router();
const decklistController = require("../../controller/decklist/decklist");


// router.get('/hello', (req, res) => {
//     res.send({ express: 'Hello From Express' });
//   });

router
.route("/getDecklists")
.get(decklistController.getDecklists);

router.
route("/getDeckById")
.get(decklistController.getDeckById);

router
.route("/addNewDeck")
.post(decklistController.addNewDeck);

router
.route("/getCreatedDecks")
.get(decklistController.getCreatedDecks);

router
.route("/getLikedDecks")
.get(decklistController.getLikedDecks);

router
.route("/likeDeck")
.put(decklistController.likeDeck);

router
.route("/deleteDeck")
.delete(decklistController.deleteDeck);

module.exports = router;