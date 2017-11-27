
var stringifyJSON = function(obj) {
  var primitives = ['number', 'boolean', 'string'];
  var voids = [null, undefined];
  var type = typeof obj;
  if (type === 'string') {
    return `"${obj}"`;
  }

  if (Array.isArray(obj)) {
    var stringifiedChildren = [];
    for (var i = 0; i < obj.length; i++) {
      stringifiedChildren.push(stringifyJSON(obj[i]));
    }
    return `[${stringifiedChildren.join(',')}]`;
  }

  if (type === 'object') {
    var stringifiedChildren = [];
    for (var key in obj) {
      stringifiedChildren.push(`${key} : ${obj[key]}`);
    }
    return `[${stringifiedChildren.join(',')}]`;
  }

  if (primitives.includes(type)) {
    return '' + obj;
  }

  if (voids.includes(obj)) {
    return 'null';
  }  
};



