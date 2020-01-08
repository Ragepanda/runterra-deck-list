const router = require("express").Router();
//const booksController = require("../../controllers/booksController");

router.get('/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
  });

module.exports = router;