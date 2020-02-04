const router = require("express").Router();

// const authR = require("./google");
const authCheck = (req, res, next) =>{
    if(!req.user){
        // if user is not logged in
        res.send(req.user);
    }
    else{
        // if user is logged in
        console.log("User is logged in");
        next();
    }
}

router.get("/", authCheck, (req, res) => {
    //res.send(req.user);
    res.redirect('http://localhost:3000/');
})




module.exports = router;