const router = require("express").Router();
const testRoutes = require("./test");
const deckRoutes = require("./decklist");
const articleRoutes = require("./article");


// uses url extension: /api/*this page's routes*
router.use("/test", testRoutes);
router.use("/decklist", deckRoutes);
router.use("/article", articleRoutes);


module.exports = router;