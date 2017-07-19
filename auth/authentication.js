const jwt = require('jsonwebtoken')
const user = {
  _id: 1,
  username: 'arnoldo',
  password: '1234',
  email: 'a3@3vot.com'
}
const secret = 'super secret one'

function generateToken(user) {
  return jwt.sign(user, secret, {
    expiresIn: 86400 // in seconds
  })
}

function login(req, res, next){
  res.status(200).json({
    token: 'JWT ' + generateToken(user),
    user: {
      _id: user._id
    }
  })
}

module.exports = {
  login
}

