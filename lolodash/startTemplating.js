var _ = require("lodash");
    
var worker = function(input) {
    return _.template('Hello <%= name %> (logins: <%= login.length %>)', input);
};
    
// export the worker function as a nodejs module
module.exports = worker;