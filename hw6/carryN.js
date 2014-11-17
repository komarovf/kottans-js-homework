'use strict';
function curryN(fn, n) {
    if (typeof n === 'undefined') n = fn.length - 1;
    if (n === 0) {
        return fn;
    }
    else {
        return function(arg) {
            return curryN(fn.bind(null, arg), n-1);
        };
    }
}

module.exports = curryN;