var _ = require("lodash");
/*
 * Returns the root level template that is currently being built.
 *
 * @return {String} The relative path to the template being built
 */
module.exports = function() {
  var elements = _.slice(arguments,0,arguments.length-1);
  return ["[",elements.join(","),"]"].join("");
};
