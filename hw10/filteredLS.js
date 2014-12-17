var fs = require('fs');

fs.readdir(process.argv[2], function(err, data) {
    if (!err) data.forEach(function(item) {
        if (item.split('.')[1] === process.argv[3]) console.log(item);
    });
});