function duckCount() {
    return Array.prototype.slice.call(arguments).reduce(function(a, b) {
        return a+Object.prototype.hasOwnProperty.call(b, 'quack');
    }, 0);
}
    
module.exports = duckCount