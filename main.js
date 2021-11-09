var http = require('http');
http.createServer(function(re,res){
    res.writeHead(200,{'content-type':"text/plains"});
    res.end("Hello world!");
}).listen(8080);
console.log("The result will be shown!");