const router = require("express").Router();
const passport = require('passport');
const passportSetup = require("../../config/passport-setup");
// const authR = require("./google");


router.get("/logout", (req, res) => {
    req.logout();
    res.redirect('http://localhost:3000');
})

router.get("/google", passport.authenticate('google',
    {
        scope: ['profile']
    }
));

router.get("/google/redirect", passport.authenticate('google'),(req, res) => {
   //res.send(req.user.displayName);
   res.redirect('/profile/')
});


module.exports = router;