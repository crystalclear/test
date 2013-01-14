var http = require('http');

http.createServer(function(req, res){
    res.end('Hallo mein Schatz');	
}).listen(8080);
