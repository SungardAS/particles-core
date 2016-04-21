var assert = require("assert");
var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe("conditions", function() {
  describe("is_populated", function() {

    it("creates the condition", function() {
      cTests.testParticle(
        "condition",
        "is_populated",
        require('./fixtures/condition_is_not_empty_output_1'),
        {logicalId: "Condition1", hArgs: {parameterLogicalId: "Parameter1"}}
      );
    });

  });
});

