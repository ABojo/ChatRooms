const User = require('./models/User');
const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy;

const setupPassport = (passport) => {
  //This function determines whether or not a user should be authenticaed
  passport.use(
    new LocalStrategy(async function (username, password, done) {
      const user = await User.findOne({ username });
      if (!user) return done(null, false);

      const passIsValid = await bcrypt.compare(password, user.password);
      if (!passIsValid) return done(null, false);

      return done(null, user);
    })
  );

  //Attaches the user ID to the session when the user is authenticated(req.session.passport.user)
  passport.serializeUser(function (user, done) {
    done(null, user._id);
  });

  //When the server recieves a request it will attach the user contained in the session to the request object(req.user)
  passport.deserializeUser(async function (id, done) {
    const user = await User.findById(id);
    done(null, user);
  });
};

module.exports = setupPassport;
