module.exports = function(req, res){
    console.log('not found triggered');
    res.statusCode = 404;
    res.end();
}
