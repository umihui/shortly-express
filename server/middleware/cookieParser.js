const parseCookies = (req, res, next) => {
  var result = {};
  var cookies = req.headers.cookies || '';
  cookies.split('; ').forEach(function(c) {
    var single = c.split('=');
    result[single[0]] = single[1];
  });
  return result;

};

module.exports = parseCookies;