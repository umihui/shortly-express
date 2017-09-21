const parseCookies = (req, res, next) => {
  var result = {};
  var cookies = req.headers.cookie;
  console.log('cookieParse', cookies);
  if (cookies !== undefined) {

    cookies.split('; ').forEach(function(c) {
      var single = c.split('=');
      console.log('SINGLE', single);
      result[single[0]] = single[1];
    });
  }
  req.cookies = result;
  console.log('Result: ', result);
  next();
};

module.exports = parseCookies;