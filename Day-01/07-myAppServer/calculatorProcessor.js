var calculator = require('./calculator');

module.exports = function(req, res){
    if (req.url.pathname === '/calculator' && req.method === 'GET'){
        var number1 = parseInt(req.query.number1,10),
            number2 = parseInt(req.query.number2,10),
            operation = req.query.operation;
        var result = calculator[operation](number1, number2);
        res.write(result.toString());
        res.end();
    } /*else if (req.url.pathname === '/calculator' && req.method === 'POST'){
        var data = '';
        req.on('data', function(chunk){
            data += chunk;
        });
        req.on('end', function(){
            var reqData = qs.parse(data);
            var number1 = parseInt(reqData.number1,10),
                number2 = parseInt(reqData.number2,10),
                operation = reqData.operation;
            var result = calculator[operation](number1, number2);
            res.write(result.toString());
            res.end();
        });
    }*/
}
