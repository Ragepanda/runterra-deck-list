const router = require("express").Router();

// const authR = require("./google");
const authCheck = (req, res, next) =>{
    if(!req.user){

        res.send({isLoggedIn: false, id:null});
    }
    else{
        // if user is logged in
        console.log("User is logged in");
        next();
    }
}

router.get("/", authCheck, (req, res) => {
    console.log(req.user);
   // res.send({isLoggedIn: true, id:req.user.id});
    res.redirect('http://localhost:3000/');
});






module.exports = router;