var path = require('path'),
    fs = require('fs');


var staticResourceExtns = ['.html','.js','.css','.ico','.png','.jpg'];
function isStatic(resource){
    return staticResourceExtns.indexOf(path.extname(resource)) !== -1;
}
function staticServer(defaultPath){
    return function(req, res, next){
        if (isStatic(req.url.pathname)){
            var resourcePath = path.join(defaultPath, req.url.pathname);
            if (fs.existsSync(resourcePath)){
                fs.createReadStream(resourcePath).pipe(res);
            } else {
                res.statusCode = 404;
                res.end();
            }
        } else {
            next();
        }
    }
}
staticServer.addExtension = function(extn){
    staticResourceExtns.push(extn);
}
module.exports = staticServer;
