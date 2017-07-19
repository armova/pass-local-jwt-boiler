const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const LocalStrategy = require('passport-local')
const user = {
  _id: 1,
  username: 'arnoldo',
  password: '1234',
  email: 'a3@3vot.com'
}
const secret = 'super secret one'

const localOptions = { usernameField: 'username' }

// passport
const localLogin = new LocalStrategy(localOptions, function(username, password, done){
  if(username === user.username && password === user.password){
    return done(null, user)
  } else {
    return done(null, false, {error: "Your login details could not be verified. Please try again."})
  }
})

const jwtOptions = {
  // Telling Passport to check authorization headers for JWT
  jwtFromRequest: ExtractJwt.fromHeader('auth_token'),
  // Telling Passport where to find the secret
  secretOrKey: secret
}

const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
    console.log('PAYLOAD: ', payload)
    if(payload._id === user._id){
      done(null, user)
    } else {
      done(null, false)
    }
})

passport.use(jwtLogin)
passport.use(localLogin)
//-- passport end --
