var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response) {
    if (request.method === 'GET') {
        var urlObj = url.parse(request.url, true);
        var d = new Date(urlObj.query.iso);
        var result;
        
        if (urlObj.pathname === '/api/parsetime') {
            result = {
                "hour": d.getHours(),
                "minute": d.getMinutes(),
                "second": d.getSeconds()
            };
        } else {
            result = {
                "unixtime": d.getTime()
            };
        }
        
        if (result) {
            response.writeHead(200, {'Content-Type': 'application/json'});
            response.end(JSON.stringify(result));
        }
    }
});

server.listen(process.argv[2]);