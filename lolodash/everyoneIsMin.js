var _ = require("lodash");
    
var worker = function(input) {
    result = {
        hot: [], 
        warm: []
    };
    var check = function(x) {
        return x > 19;
    };
    _.forEach(input, function(item, townname) {
        if (_.every(item, check)) {
            result.hot.push(townname);
        } else if (_.some(item, check)) {
            result.warm.push(townname);
        }
    });
    return result;
};
    
// export the worker function as a nodejs module
module.exports = worker;