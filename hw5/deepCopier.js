// Your code goes here
function deepCopy(obj) {
  result = {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      result.i = obj.i;
    }
  }
  return result;
}