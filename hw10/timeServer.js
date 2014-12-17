var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function(socket) {
    var data = strftime('%F %R', new Date());
    socket.write(data);
    socket.end();
});
server.listen(process.argv[2]);