var assert = require("assert");
var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe("metadata", function() {
  describe("condensation", function() {
    it.skip("creates empty resource", function() {
      cTests.testParticle(
        "metadata",
        "condensation",
        require('./fixtures/resource_base_output_1')
      );
    });

  });
});

