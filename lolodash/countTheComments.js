var _ = require("lodash");
    
var worker = function(input) {
    var result = [];
    _.forEach(_.groupBy(input, 'username'), function(item, name) {
        result.push({username: name, comment_count: _.size(item)});
    });
    return _.sortBy(result, 'comment_count').reverse();
};
    
// export the worker function as a nodejs module
module.exports = worker;