const router = require("express").Router();
const passport = require('passport');
const passportSetup = require("../../config/passport-setup");
// const authR = require("./google");

const authCheck = (req, res, next) =>{
    if(!req.user){
        res.send({isLoggedIn: false, id:null, displayName:null});
    }
    else{
        // if user is logged in
        console.log("User is logged in");
        next();
    }
}

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

router.get("/isLoggedIn", authCheck, (req, res) => {
    console.log(req.user);
    res.send({isLoggedIn: true, id:req.user.id, displayName:req.user.displayName});
    
});


module.exports = router;