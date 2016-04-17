var _ = require("lodash");
var assert = require("assert");
var sections = require('condensation/lib/condensation/template-helpers/sections');
var Condensation = require('condensation/lib/condensation');

var condensation = exports.condensation = new Condensation();

// condensation options
var cOpts = module.exports.cOpts = {
  particleLoader: condensation.particleLoader,
  handlebars: condensation.handlebars
};

// Handlebars options
var hOptsFunc = exports.hOptsFunc = function() {
  return {
    data: {
      _file: {path: '',},
      root: {s3: { prefix:'' }}
    },
    hash: {}
  };
};

var processParticle = module.exports.processParticle = function(particleType,particlePath,options) {
  var hOpts = hOptsFunc();
  hOpts.hash.logicalId = options.logicalId;

  hOpts.hash = _.merge(hOpts.hash,options.hArgs);

  var result = sections[particleType].helper.apply(condensation, [null, particlePath, null, hOpts, cOpts]);
  result = JSON.parse('{' + result + '}');

  return result;
};

var testParticle = module.exports.testParticle = function(particleType,particlePath,fixture,options) {
  var result = processParticle(particleType,particlePath,options);
  assert.deepStrictEqual(result, fixture);
};
