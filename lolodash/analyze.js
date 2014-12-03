var _ = require("lodash");
    
var worker = function(input) {
    var av = _.reduce(input, function(sum, item) {
        return sum + item.income;
    }, 0) / input.length;
    return {
        'average': av,
        'underperform': _.sortBy(_.filter(input, function(item) {
            return item.income <= av;
        }), 'income'),
        'overperform': _.sortBy(_.filter(input, function(item) {
            return item.income > av;
        }), 'income') 
    };
    
};
    
// export the worker function as a nodejs module
module.exports = worker;