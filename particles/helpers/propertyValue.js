var _ = require('lodash');

module.exports = function(str,options) {
  var isObject = false;

  if (_.isPlainObject(str) || _.isArray(str)) {
    return JSON.stringify(str);
  }
  else {
    try {
      var check = JSON.parse(str)
      if (_.isBoolean(check)) {
        throw("boolean");
      }
      return str;
    }
    catch(e) {
      return '"'+str+'"';
    }
  }

};
