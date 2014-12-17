module.exports = function(path, ext, callback) {
    var fs = require('fs');
    var result = [];
    
    if (!path || !ext) return callback("Path and extension should be passed!");
    
    fs.readdir(path, function(err, data) {
        if (err) return callback(err);
        data.forEach(function(item) {
            if (item.split('.')[1] === ext) result.push(item);
        });
        return callback(null, result);
    });
};