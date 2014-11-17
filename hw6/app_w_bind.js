var slice = Array.prototype.slice

function logger(namespace) {
    function log() {
        console.log.apply(console, [namespace].concat(slice.call(arguments)));
    }
    return log;
}

module.exports = logger