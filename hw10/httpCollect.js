var http = require('http');
http.get(process.argv[2], function(response) {
    var result = "";
    response.setEncoding('utf8');
    response.on("data", function(item) {
        result += item;
    });
    response.on("end", function() {
        console.log(result.length);
        console.log(result);
    });
});