const router = require("express").Router();
const testRoutes = require("./test");
const deckRoutes = require("./decklist")


// uses url extension: /api/*this page's routes*
router.use("/test", testRoutes);
router.use("/decklist", deckRoutes);


module.exports = router;