var assert = require("assert");
var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe("conditions", function() {
  describe("is_equal_to", function() {

    it("creates the condition", function() {
      cTests.testParticle(
        "condition",
        "is_equal_to",
        require('./fixtures/condition_is_equal_to_output_1'),
        {logicalId: "Condition1", hArgs: {parameterLogicalId: "Parameter1", value: "Match Me"}}
      );
    });

  });
});

