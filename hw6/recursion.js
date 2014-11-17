function getDependencies(tree, result) {
  if (typeof result === 'undefined') result = [];
  if (!tree.hasOwnProperty('dependencies')) return result;
  
  /*
  Object.keys(tree.dependencies).forEach(function (item) {
    var tmp = item+'@'+tree.dependencies[item].version;
    if (result.indexOf(tmp) === -1) result.push(tmp);
    getDependencies(tree.dependencies[item], result);
  });
  */
  
  for (var prop in tree.dependencies) {
      if (tree.dependencies.hasOwnProperty(prop)) {
        var tmp = prop+'@'+tree.dependencies[prop].version;
        if (result.indexOf(tmp) === -1) result.push(tmp);
        getDependencies(tree.dependencies[prop], result);
      }
  }
  
  return result.sort();
}

module.exports = getDependencies;