var assert = require("assert");
var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe("parameters", function() {
  describe("true_false", function() {
    it("creates a true_false parameter", function() {
      cTests.testParticle(
        "parameter",
        "true_false",
        require("./fixtures/parameter_true_false_output_1"),
        {logicalId: "TrueFalse"}
      );
    });
  });
});

