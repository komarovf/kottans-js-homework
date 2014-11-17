'use strict';
function curryN(fn, n) {
    if (typeof n === 'undefined') n = fn.length;
    if (n <= 1) {
        return fn;
    }
    else {
        return function(arg) {
            return curryN(fn.bind(null, arg), n-1);
        };
    }
}

module.exports = curryN;