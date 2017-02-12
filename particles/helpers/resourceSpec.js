var _ = require("lodash");
var regionSpec = require("../../regionSpec.json");
var VError = require("verror");

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
module.exports = function() {
  var options = arguments[arguments.length-1];

  var self = _.merge({},this,options.hash);
  if (options.data._parent) {
    var self = _.merge(self,options.data._parent.root);
  }
  options = options || {};
  helpers = options.handlebars.helpers;

  var type = self.type;
  if (arguments.length > 1) {
    type = arguments[0];
  }

  var propertiesBlock = [];
  var resourceSpec = regionSpec[self.s3.region].ResourceTypes[type];

  if (!resourceSpec) {
    throw new VError("%s was not found in the AWS CloudFormation Spec", type);
  }
  var specProperties = resourceSpec.Properties;

  _.each(_.toPairs(specProperties), function(kv) {
    if (!_.isNil(self[kv[0]])) {

      // cValue was written to return strings so that it is also compatible
      // as a direct call from a template.  We need to account for that here.
      var property = ['"',kv[0],'":',helpers.cValue(self[kv[0]],options)].join("");

      propertiesBlock.push(property);
    }
    else if (kv[1].Required) {
      throw new VError("%s is a required property for %s according to the AWS CloudFormation Spec", kv[0], type);
    }
  });

  var propertiesBlock = propertiesBlock.join(",");
  return ["{",propertiesBlock,"}"].join("");
};
