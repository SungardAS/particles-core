var _ = require("lodash");
var regionSpec = require("../../regionSpec.json");
var VError = require("verror");

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
module.exports = function() {
  var options = arguments[arguments.length-1];
  var type;

  var self = _.merge({},this,options.hash);
  options = options || {};
  helpers = options.handlebars.helpers;

  type = self.type;
  if (arguments.length > 1) {
    type = arguments[0];
  }

  var propertiesBlock = {};

  // always look in handlebars root object for s3 region
  var propertySpec = regionSpec[options.data.root.s3.region].PropertyTypes[type];

  if (!propertySpec) {
    throw new VError("%s was not found in the AWS CloudFormation Spec", type);
  }

  var specProperties = propertySpec.Properties;

  _.each(_.toPairs(specProperties), function(kv) {
    if (!_.isNil(self[kv[0]])) {

      propertiesBlock[kv[0]] = options.cUtil.parse(self[kv[0]]);
    }
    else if (kv[1].Required) {
      throw new VError("%s is a required property for %s according to the AWS CloudFormation Spec", kv[0], type);
    }
  });

  var returnString = helpers.cValue(propertiesBlock, options);
  return returnString;
};
