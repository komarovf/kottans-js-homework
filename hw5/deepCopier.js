function deepCopy(obj) {
  if ((typeof obj !== 'object') || (obj === null)) {
    return obj;
  }
  result = {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (obj[i] instanceof Array) {
        result[i] = obj[i].slice();
      }
      else {
        result[i] = obj[i];
      }
    }
  }
  return result;
}