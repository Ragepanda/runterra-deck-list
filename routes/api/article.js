const router = require("express").Router();
const articleController = require("../../controller/article/article");


// router.get('/hello', (req, res) => {
//     res.send({ express: 'Hello From Express' });
//   });



router.
route("/getArticleById")
.get(articleController.getArticleById);

module.exports = router;