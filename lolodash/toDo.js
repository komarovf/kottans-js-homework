var _ = require("lodash");
    
var worker = function(input) {
    _.forEach(input, function (item, key) {
        input[key] = _.sortBy(item, "date");
    });

    var checkdate = function (date) {
        return (new Date(date) - new Date()) < 24 * 60 * 60 * 1000 * 2;
    };

    var mytemplate = '<ul>\n' +
        '<% _.forEach(input, function(todos, name){ %>' +
            '<li><%= name %>\n' +
            '<ul>' +
            '<% _.forEach(todos, function(todo_item){ %>' +
                '<li>' +
                // Setting URGENT
                '<% if(checkdate(todo_item.date)) { %><b>URGENT</b> <% } %>' +
                '<%= todo_item.todo %>' +
                '</li>\n' +
            '<% }); %>' +
            '</ul>\n' +
            '</li>\n' +
        '<% }); %>' +
        '</ul>';

    return _.template(mytemplate, {input: input}, { 'imports': { 'checkdate': checkdate } });
};
    
// export the worker function as a nodejs module
module.exports = worker;