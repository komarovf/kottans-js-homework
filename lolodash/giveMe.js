var _ = require("lodash");
    
var worker = function(input) {
    result = [];
    _.forEach(_.groupBy(input, 'article'), function(item, itemname) {
        result.push({
            article: +itemname, 
            total_orders: _.reduce(item, function(sum, i) {
                return sum + i.quantity;
            }, 0)
        });
    });
    return _.sortBy(result, 'total_orders').reverse();
};
    
// export the worker function as a nodejs module
module.exports = worker;