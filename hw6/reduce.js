function countWords(inputWords) {
    return inputWords.reduce(function(a, b) {
        if (a.hasOwnProperty(b)) {
            a[b] += 1;
        }
        else {
            a[b] = 1;
        }
        return a;
    }, {});
}
    
module.exports = countWords