var http = require('http'),
    url = require('url'),
    qs = require('querystring'),
    path = require('path'),
    fs = require('fs'),
    calculator = require('./calculator');

var staticResourceExtns = ['.html','.js','.css','.ico','.png','.jpg'];
function isStatic(resource){
    return staticResourceExtns.indexOf(path.extname(resource)) !== -1;
}

var server = http.createServer(function onRequest(req, res){
    req.url = url.parse(req.url);
    req.query = qs.parse(req.url.query);
    if (isStatic(req.url.pathname)){
        var resourcePath = path.join(__dirname, req.url.pathname);
        if (fs.existsSync(resourcePath)){
            fs.createReadStream(resourcePath).pipe(res);
        } else {
            res.statusCode = 404;
            res.end();
        }
    } else if (req.url.pathname === '/calculator'){
        var number1 = parseInt(req.query.number1,10),
            number2 = parseInt(req.query.number2,10),
            operation = req.query.operation;
        var result = calculator[operation](number1, number2);
        res.write(result.toString());
        res.end();
    } else {
        res.statusCode = 404;
        res.end();
    }
});
server.listen(9090);
console.log("Server running on port 9090!");
