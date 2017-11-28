
var getElementsByClassName = function(className) {
  var results = [];
  var elements = document.body;
  
  var checkNode = function(node) {
    if (node.classList) {
      if (node.classList.contains(className)) {
        results.push(node);
      }
    }
    if (node.childNodes) {
      for (var idx = 0; idx < node.childNodes.length; idx++) {
        checkNode(node.childNodes[idx]);
      }
    }
  };

  checkNode(elements);
  
  return results;
};
