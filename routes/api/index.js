const router = require("express").Router();
const testRoutes = require("./test");


// uses url extension: /api/*this page's routes*
router.use("/test", testRoutes);


module.exports = router;