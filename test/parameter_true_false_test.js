var assert = require("assert");
var cTests = require("condensation-particle-tests");

describe("parameters", function() {
  describe("true_false", function() {
    it("creates a true_false parameter", function() {
      var result = cTests.testParticle(
        "parameter",
        "true_false",
        require("./fixtures/parameter_true_false_output_1"),
        {logicalId: "TrueFalse"}
      );
    });
  });
});

