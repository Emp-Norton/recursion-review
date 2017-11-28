
var stringifyJSON = function(obj) {
  var primitives = ['number', 'boolean', 'string'];
  var voids = [null, undefined];
  var type = typeof obj;
  if (type === 'string') {
    return `"${obj}"`;
  }

  if (voids.includes(obj)) {
    return 'null';
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
      var value = stringifyJSON(obj[key]);
      if (typeof obj[key] !== 'function' && typeof obj[key] !== 'undefined') {
        stringifiedChildren.push(`"${key}":${value}`);
      }
    }
    return `{${stringifiedChildren.join(',')}}`;
  }

  if (primitives.includes(type)) {
    return '' + obj;
  }

   
};



