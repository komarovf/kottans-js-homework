function Spy(target, method) {
    var tmp = target.method;
    var result = {
        count: 0
    }
    target.method = function() {
        result.count += 1;
        return tmp.apply(this, arguments);
    };
    return result;
}
module.exports = Spy