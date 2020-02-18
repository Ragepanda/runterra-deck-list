var db = require("../../models");

module.exports ={
// Passport's Method for completing a login, or creating a new account.
    handleLogin: function(accountData, done){   
        db.User.findOne({
            where:{
                accountId: accountData.id
            }
        })
        .then((entry) =>{            
            if(entry === null){
                db.User.create({
                    displayName: accountData.displayName,
                    accountType: 'google',
                    accountId: accountData.id
                })
                .then((newEntry) =>{
                    done(null, newEntry.dataValues);
                })
            }
            else{
                done(null, entry.dataValues);
            }          
        })
    },

// Passport's Deserialize Overload method - Not used for site retrieval
    getUserById: function(id, done){
        db.User.findOne({
            where:{
                id: id
            }
        })
        .then((user)=>{
            done(null, user.dataValues)
        })
    }
}