var _ = require("lodash");
var regionSpec = require("../../regionSpec.json");

/*
 * Creates an Output based on the AWS Resource Specification
 *
 *     {{helper "m:core" "outputSpec" type="AWS::" resourceLogicalId="LogicalId" attribute="Arn"}}
 *
 * @param {Object} options - Passed in by Handlebars
 * @param {String} [options.hash.type] - The AWS resource type
 * @param {String} [options.hash.resourceLogicalId] - LogicalId of the Resource to get attribute for
 * @param {String} [options.hash.attribute] - Name of the attribute
 * @return {String}
 *
 */
module.exports = function(options) {
  var self = this;
  options = options || {};

  var type = this.Type || this.type;

  var propertiesBlock = [];
  var resourceSpec = regionSpec[this.s3.region].ResourceTypes[type];
  var specAttributes = resourceSpec.Attributes;

  options.hash.value = '{"Fn::GetAtt": ["'+self.resourceLogicalId+'","'+self.attribute+'"]}';

  if (specAttributes[self.attribute]) {
    return options.handlebars.helpers.output.apply(self,["base",options]);
  };
  throw "nope";

};
