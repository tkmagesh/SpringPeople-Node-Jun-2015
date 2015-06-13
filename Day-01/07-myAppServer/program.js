var http = require('http'),
    dataParser = require('./dataParser'),
    staticServer = require('./staticServer'),
    calculatorProcessor = require('./calculatorProcessor'),
    notFoundAction = require('./notFoundAction'),
    app = require('./app');

app.use(dataParser);
app.use(staticServer);
app.use(calculatorProcessor);
app.use(notFoundAction);

var server = http.createServer(app.run());
server.listen(9090);
console.log("Server running on port 9090!");
