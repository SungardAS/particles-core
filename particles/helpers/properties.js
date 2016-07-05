var _ = require("lodash");

/*
 * Creates a Properties block for property helpers
 *
 * This helper must be used as a block and contain only
 * property helpers as the contents
 *
 *     {{#helper "m:core" "properties"}}
 *       {{helper "m:core" "property" "SubnetId"}}
 *       {{helper "m:core" "property" "Tags" optional=true}}
 *     {{/helper}}
 *
 * @return {String}
 *
 */
module.exports = function(options) {
  options = options || {};

  var data = options.data || {};

  data = _.cloneDeep(data);
  data._properties = {};

  options.fn(this,{data:data});
  var propertiesBlock = ["\"Properties\":"];
  propertiesBlock.push(JSON.stringify(data._properties));

  return propertiesBlock.join('');
};
