var http = require('http');

http.createServer(function(req, res){
    res.end('Wombat');	
}).listen(8080);
