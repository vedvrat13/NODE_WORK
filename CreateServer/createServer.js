var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type':'text/html'});
    var html = fs.readFileSync(__dirname + '/index.html', 'utf8');
    var message = 'Hello World...';

    var htmlFile = html.replace('{message}', message);
    res.end(htmlFile);
    
}).listen(1337,'127.0.0.1');
