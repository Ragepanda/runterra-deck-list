const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20');
const User = require('../controller/user/user');
const config = require("../config/config.json");


passport.serializeUser((user, done)=>{
    done(null, user.id)
})

passport.deserializeUser((id, done)=>{
    User.getUserById(id, done);
})

passport.use(
    new GoogleStrategy({
        callbackURL: '/auth/google/redirect',
        clientID: config.google.clientID,
        clientSecret: config.google.clientSecret
    }, (accessToken, refreshToken, profile, done) =>{
        // Invoking a controller method for logging in/creating new account with google
        User.handleLogin(profile, done);

    })
)