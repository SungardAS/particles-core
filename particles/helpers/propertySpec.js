var _ = require("lodash");
var regionSpec = require("../../regionSpec.json");

/*
 * Creates a Property based on the AWS Resource Specification
 *
 *     {{helper "m:core" "propertySpec" type="AWS::" [...] }}
 *
 * @param {Object} options - Passed in by Handlebars
 * @param {String} [options.hash.type] - The AWS resource type
 * @param {String} [options.hash.PROPERTY_NAME] - Repetable for any property for this resource in the AWS Spec
 * @return {String}
 *
 */
module.exports = function(options) {
  var self = _.merge({},this,options.hash);
  options = options || {};
  helpers = options.handlebars.helpers;

  var type = self.type;

  var propertiesBlock = [];
  var propertySpec = regionSpec[self.s3.region].PropertyTypes[type];
  var specProperties = propertySpec.Properties;

  _.each(_.toPairs(specProperties), function(kv) {
    if (self[kv[0]] || kv[1].Required) {

      // cValue was written to return strings so that it is also compatible
      // as a direct call from a template.  We need to account for that here.
      var property = ['"',kv[0],'":',helpers.cValue(self[kv[0]],options)].join("");

      propertiesBlock.push(property);
    }
  });

  var propertiesBlock = propertiesBlock.join(",");
  return ["{",propertiesBlock,"}"].join("");
};
