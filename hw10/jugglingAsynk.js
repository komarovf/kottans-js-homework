var http = require('http');
function getData(url, cb) {
    http.get(url, function(response) {
        var result = "";
        response.setEncoding('utf8');
        response.on('error', function(e) {
            return cb(e);
        }).on("data", function(item) {
            result += item;
        }).on("end", function() {
            return cb(null, result);
        });
    });
}
var content = [];
var loaded = 0;
process.argv.slice(2,5).forEach(function(url, index) {
    getData(url, function(err, data) {
        if (!err) content[index] = data;
        if (++loaded === 3) console.log(content.join('\n'));
    });
});