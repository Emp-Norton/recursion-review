var parseJSON = function(json) {
  var results = {};
};
var nextChar = function(string) {
  var results = [];
  var aOpen, aClose, oOpen, oClose, segment;
  for (var i = 0; i < string.length; i++) {
    var char = string[i];
    switch (true) {
    case char === '[':
      aOpen = i;
      break;
    case char === ']':
      aClose = i;
      break;
    case char === '{':
      oOpen = i;
      break;
    case char === '}':
      oClose = i;
      break;
    }
    
    if (aOpen && aClose) {
      segment = string.slice(aOpen, aClose + 1);
      results.push(segment);
      aClose, aOpen = null;
    } else if (oOpen && oClose) {
      segment = string.slice(oOpen, oClose + 1);
      results.push(segment);
      oOpen, oClose = null;
    }
  }
  return results;
};
var stringParse = function(string) {
   
  return string.slice(1, string.length - 1); // removes quotes
};

var parseNum = function(numString) {
  return parseInt(numString);
};

var parseBoolean = function(bool) {
  return Boolean(bool);
};

var parseObj = function(obj) {
  
};


// "{"key1" : "value1"}"

// objFlag ON
// arrayFlag
// keyFlag ON
// valueFlag

/* 

var nextChar = function(string) {
  for (var i = 0; i < string.length; i++) {
    var char = string[i];
    if (char === '"') {
      stringParse(string.slice(i + 1, string.length));
    }
  }
};

var stringParse = function(string) {
  var tempString = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== '"') {
      tempString += string[i];
    }
  }
  return tempString;
  //return string.slice(1, string.length - 1); // removes quotes
};
*/