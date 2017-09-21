const models = require('../models');
const session = require('../models/session');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
  // access parsed cookie on req
  // look up session user data
  console.log(req.headers.cookie);
  if (!!req.headers.cookie) {
    console.log('HAS COOKIE');
    next();
  } else {
    console.log('NO COOKIE');
    var newSession = session;
    console.log('NEWSES:', newSession)
    newSession.create()
      .then(function(results) { 
        console.log(results);
        newSession.get({id: 1})
          .then(function(results) { 
            
            res.cookie('shortly cookie', results.hash, { maxAge: 100000}); 
            req.session = newSession;
            console.log('GET APP', results);

          });
          // .then(function() {
          //   next();
          // }); 
      });  
  }
  next();
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