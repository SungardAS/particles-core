var assert = require("assert");
var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe("conditions", function() {
  describe("is_true", function() {

    it("creates the condition", function() {
      cTests.testParticle(
        "condition",
        "is_true",
        require('./fixtures/condition_is_true_output_1'),
        {logicalId: "Condition1", hArgs: {parameterLogicalId: "Parameter1"}}
      );
    });

  });
});

