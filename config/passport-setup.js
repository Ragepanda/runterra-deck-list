const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20');
const User = require('../controller/user/user');

passport.serializeUser((user, done)=>{
    done(null, user.id)
})

passport.deserializeUser((id, done)=>{
    User.getUserById(id, done);
})

passport.use(
    new GoogleStrategy({
        callbackURL:'/auth/google/redirect',
        clientID:'123414071099-pf3vnpggq3di81fb9c3lfa1j786vsk7g.apps.googleusercontent.com',
        clientSecret:'neIT-aX3y7t4xytPip2noMWQ'
    }, (accessToken, refreshToken, profile, done) =>{
        // Invoking a controller method for logging in/creating new account with google
        User.handleLogin(profile, done);

    })
)