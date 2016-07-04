var _ = require("lodash");
var propertyValue = require("./propertyValue");

/*
 * Creates a Resource Property
 *
 * The property name will be equal to the name passed
 * as the first argument.
 *
 * @param {String} str - Name of the property
 * @param {Object} options - Passed in by Handlebars
 * @param {String} [options.hash.valueVariable] - Default is 'str' with the first character converted to lowercase
 * @param {String} [options.hash.type=string] - The parameter type [string|number|boolean|array|object]
 * @return {String}
 *
 */
module.exports = function(str,options) {
  options = options || {};
  options.data = options.data || {};

  var optional = options.hash.optional || false;
  var valueVariable = options.hash.valueVariable || str.charAt(0).toLowerCase() + str.slice(1);

  var propertyValueParams = {
    hash: {}
  };

  if (options.hash.type === "number") {
    propertyValueParams.hash.forceNumber = true
  }

  if (!optional || (optional && !_.isNil(this[valueVariable]))) {
    var pValue = propertyValue(this[valueVariable],propertyValueParams);

    if (options.data && options.data._properties) {
      try {
        pValue = JSON.parse(pValue);
      }
      catch(e) {
        // Is String
      }
      options.data._properties[str] = pValue;
      return;
    }
    else {
      var prop = ["\"",str,"\":",pValue];
      return prop.join('');
    }
  }
  else {
    return "";
  }
};
