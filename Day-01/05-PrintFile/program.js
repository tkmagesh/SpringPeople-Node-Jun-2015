console.log(process.argv);
var fs = require('fs');
var filename = './test.txt';
/*fs.readFile(filename, {encoding : 'utf8'}, function(err, fileContents){
    if (err){
        console.log("Something went wrong ", err);
    } else {
        console.log(fileContents);
    }
});*/
var readCount = 0;
var stream = fs.createReadStream(filename, {encoding : 'utf8'});
/*
stream.on('data', function(chunk){
    ++readCount;
    console.log(chunk);
});
stream.on('end', function(){
    console.log("File reading completed with - ", readCount, " read operations");
});
*/
stream.pipe(process.stdout);


