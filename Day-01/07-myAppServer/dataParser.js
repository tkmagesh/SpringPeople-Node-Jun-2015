var url = require('url'),
    qs = require('querystring');
module.exports = function(req, res){
    req.url = url.parse(req.url);
    req.query = qs.parse(req.url.query);
}
