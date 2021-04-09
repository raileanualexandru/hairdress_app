const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const User = require('../models/User')
const validator = require('validator')

module.exports = function (passport) {
    let errors = [];
    passport.use(
        new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
            //match user 
            User.findOne({ email: email })
                
                //si l'email n'existe pas 
                .then(user => {
                    if (!user) {
                        return done(null, false, { message: 'That email is not registered' })
                    }


                    //pass match
                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if (err) throw err;

                        if (isMatch) {
                            return done(null, user);
                        } else {
                            return done(null, false, { message: 'password incorrect' })
                        }
                    })
                })
                .catch(err => console.error(err))

        })
    );

    passport.serializeUser(function(user, done) {
        done(null, user.id);
      });
      
      passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
          done(err, user);
        });
      }); 
}