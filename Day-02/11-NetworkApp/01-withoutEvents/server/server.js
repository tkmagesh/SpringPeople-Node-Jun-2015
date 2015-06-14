var fs = require('fs'),
    net = require('net'),
    fname = process.argv[2];

if (!fname) throw Error('invalid filename');
filename = require('path').join(__dirname, fname);

var server = net.createServer(function(connection){
   console.log('a new connection is established');
   connection.write(JSON.stringify({
       type : 'watching',
       filename : filename
   }) + '\n');
   var watcher = fs.watchFile(filename, function(){

       var response = {
           type : 'change',
           filename : filename,
           timeStamp : Date.now().toString()
       };
       connection.write(JSON.stringify(response) + "\n");
   });
   connection.on('end', function(){
       fs.unwatchFile(filename, watcher);
   });
});
server.listen(9090, function(){
    console.log('server listening on port 9090');
})
