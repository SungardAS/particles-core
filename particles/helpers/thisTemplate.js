/*
 * Returns the root level template that is currently being built.
 *
 * @return {String} The relative path to the template being built
 */
module.exports = function(options) {
  return options.data._templatePath;
};
