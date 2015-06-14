module.exports = function(req, res, next){
    console.log('not found triggered');
    res.statusCode = 404;
    res.end();
    next();
}
