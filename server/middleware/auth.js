const models = require('../models');
const session = require('../models/session');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
  // console.log(session.isLoggedIn());
  // next();
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