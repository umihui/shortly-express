const models = require('../models');
const sessionUtils = require('../models/session');
const Promise = require('bluebird');
const hashUtils = require('../lib/hashUtils');
const parseCookies = require('./cookieParser');

module.exports.createSession = (req, res, next) => {
  // access parsed cookie on req
  // look up session user data

  sessionUtils.create()
    .then(function(results) { 
      console.log('SESSION CREATE', results);
      sessionUtils.get({ id: results.insertId })
        .then(function(results) { 
          console.log('GET session', results);
          res.cookie('shortlyid', results.hash, { maxAge: 100000}); 
          req.session = results;
          req.session.hash = results.hash;
          //console.log('New hash on results:', results.hash);
          next();   
        });
    })
    .catch(function(err) {
      console.log('Error in createSession');
    });  

  // if session not valid...
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

module.exports.checkLoginStatus = (req, res, next) => {
  // console.log('auth placeholder');
  // if (false) {
  // //res.send();
  // }
  next();
};

module.exports.checkCookie = (req, res, next) => {

  //console.log('COOKIE',!!req.cookie);
  if (!!req.headers.cookie) {
    parseCookies(req, res, next);

    sessionUtils.get({ hash: req.cookies['shortlyid']});
    // .then(function(result) {
      

    // });    
// or req.cookies = { shortlyid: 8352739548723 }
    next();
  } else {  
    module.exports.createSession(req, res, next);
  }







};