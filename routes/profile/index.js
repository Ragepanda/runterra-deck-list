const router = require("express").Router();

// const authR = require("./google");
const authCheck = (req, res, next) =>{
    if(!req.user){

        res.send([{isLoggedIn:false}, {isNotLoggedIn:true}]);
    }
    else{
        // if user is logged in
        console.log("User is logged in");
        next();
    }
}

router.get("/", authCheck, (req, res) => {
    console.log(req.user);
    res.send(req.user);
    //res.redirect('http://localhost:3000/');
})




module.exports = router;