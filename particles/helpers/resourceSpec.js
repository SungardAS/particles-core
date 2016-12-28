var _ = require("lodash");
var propertyValue = require("./propertyValue");
var regionSpec = require("../../regionSpec.json");

/*
 * Creates a Resource based on the AWS Resource Specification
 *
 *     {{helper "m:core" "resourceSpec" type="AWS::" [...] }}
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

  var type = self.type;

  var propertiesBlock = [];
  console.log("resourceSpec", type);
  var resourceSpec = regionSpec[self.s3.region].ResourceTypes[type];
  var specProperties = resourceSpec.Properties;

  _.each(_.toPairs(specProperties), function(kv) {
    if (self[kv[0]] || kv[1].Required) {

      // propertyValue was written to return strings so that it is also compatible
      // as a direct call from a template.  We need to account for that here.
      var property = ['"',kv[0],'":',propertyValue(self[kv[0]],options)].join("");

      propertiesBlock.push(property);
    }
  });

  var propertiesBlock = propertiesBlock.join(",");
  return ["{",propertiesBlock,"}"].join("");
};
