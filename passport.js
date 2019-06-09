const passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  Models = require('./model'),
  passportJWT = require('passport-jwt');

var Users = Models.Users;
var JWTStrategy = passportJWT.Strategy;
var ExtractJWT = passportJWT.ExtractJwt;

passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
}, (username, password, callback) => {
  console.log(username + ' ' + password);
  Users.findOne({ username: username }, (error, user) => {
    if (error) {
      console.log(error);
      return callback(error);
    }
    if (!user) {
      console.log('incorrect username');
      return callback(null, false, { message: 'Incorrect username or password' });
    }
    console.log('Finished');
    return callback(null, user);
  });
}));

passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'cannotsay'
}, (jwtPayload, callback) => {
  return Users,findById(jwtPayload._id)
  .then((user) => {
    return callback(null, user);
  })
  .catch((error) => {
    return callback(error);
  });
}));
