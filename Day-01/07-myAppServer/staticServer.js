var path = require('path'),
    fs = require('fs');


var staticResourceExtns = ['.html','.js','.css','.ico','.png','.jpg'];
function isStatic(resource){
    return staticResourceExtns.indexOf(path.extname(resource)) !== -1;
}
module.exports = function(req, res, next){
    if (isStatic(req.url.pathname)){
        var resourcePath = path.join(__dirname, req.url.pathname);
        if (fs.existsSync(resourcePath)){
            //fs.createReadStream(resourcePath).pipe(res);
            var stream = fs.createReadStream(resourcePath, {encoding : 'utf8'});
            stream.on('data', function(chunk){
                res.write(chunk);
            });
            stream.on('end', function(){
                res.end();
            })
        } else {
            res.statusCode = 404;
            res.end();
        }
    } else {
        next();
    }
}
