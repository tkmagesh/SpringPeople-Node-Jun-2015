var http = require('http'),
    path = require('path'),
    dataParser = require('./middlewares/dataParser'),
    staticServer = require('./middlewares/staticServer'),
    calculatorProcessor = require('./middlewares/calculatorProcessor'),
    notFoundAction = require('./middlewares/notFoundAction'),
    app = require('./app/app.js');

app.use(dataParser);
staticServer.addExtension('.txt');
app.use(staticServer(path.join(__dirname , "public")));
app.use(calculatorProcessor);
app.use(notFoundAction);

var server = http.createServer(app);
server.listen(9090);
console.log("Server running on port 9090!");
