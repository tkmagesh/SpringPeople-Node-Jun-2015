var net = require('net');
var client = net.connect({port : 9090});
client.on('data', function(msg){
    var response = JSON.parse(msg);
    switch (response.type){
        case 'watching':
            console.log('watching changes for file ' + response.filename);
            break;
        case 'change':
            console.log('file ' + response.filename + ' changed at ' + response.timeStamp);
            break;
        default :
            console.log('unknown message - ' +msg.toString());
            break;
    }
});
client.on('error', function(){
})
console.log('client running');
