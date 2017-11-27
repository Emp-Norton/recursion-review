
var getElementsByClassName = function(className) {
  var results = [];
  var elements = document.all;
  
  var checkNode = function(node) {
    if (node.className.includes(className)) {
      results.push(node);
    }
  };

  for (var idx = 0; idx < elements.length; idx++) {
    checkNode(elements[idx]);
  }
  
  return results;
};
