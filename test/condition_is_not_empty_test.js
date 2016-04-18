var assert = require("assert");
var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe("conditions", function() {
  describe("is_not_empty", function() {

    it("creates the condition", function() {
      var result = cTests.testParticle(
        "condition",
        "is_not_empty",
        require('./fixtures/condition_is_not_empty_output_1'),
        {logicalId: "Condition1", hArgs: {parameterLogicalId: "Parameter1"}}
      );
    });

  });
});

