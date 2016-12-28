/*
 * Returns the root level template that is currently being built.
 *
 * @return {String} The relative path to the template being built
 */
module.exports = function(logicalId, attributeName, options) {
  return '{"Fn::GetAtt": ["'+logicalId+'","'+attributeName+'"]}';
};
