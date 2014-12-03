var _ = require("lodash");
    
var worker = function(obj) {
    return _.forEach(obj, function(item) {
        if (item.population < 0.5) {
            item.size = 'small';
        }
        else if (1 > item.population > 0.5) {
            item.size = 'med';
        }
        else {
            item.size = 'big';
        }
    });
};
    
// export the worker function as a nodejs module
module.exports = worker;