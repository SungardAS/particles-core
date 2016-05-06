/*
 * Returns the S3 URL to the root level template that is currently being built.
 *
 * @return {String} The S3 URL for the template being built
 */
module.exports = function(options) {
  return [this.s3.condensationUrl.href,options.data._templatePath].join('');
};
