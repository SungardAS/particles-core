var _ = require('lodash');

module.exports = function(str,options) {
  var isObject = false;

  if (_.isObject(str)) {
    return JSON.stringify(str);
  }
  else {
    try {
      JSON.parse(str)
      return str;
    }
    catch(e) {
      return '"'+str+'"';
    }
  }

};
