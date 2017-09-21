const models = require('../models');
const session = require('../models/session');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
  // access parsed cookie on req
  // look up session user data
  // 



  // if session not valid...
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

module.exports.checkLoginStatus = (req, res, next) => {
  console.log('auth placeholder');
  if (false) {
  //res.send();
  }
  next();
};

module.exports.checkCookie = (req, res, next) => {

  console.log('COOKIE',!!req.cookie);
  next();
};