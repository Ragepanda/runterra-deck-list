const router = require("express").Router();

// const authR = require("./google");
const authCheck = (req, res, next) =>{
    if(!req.user){

        res.send({isLoggedIn: false, id:null});
    }
    else{
        // if user is logged in
        next();
    }
}

router.get("/", authCheck, (req, res) => {
    if(req.headers.host === "localhost:5000")
        res.redirect('http://localhost:3000');
    else
        res.redirect('http://runeterranexus.com')
});






module.exports = router;