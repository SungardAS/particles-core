var assert = require("assert");
var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe("conditions", function() {
  describe("is_empty", function() {

    it("creates the condition", function() {
      cTests.testParticle(
        "condition",
        "is_empty",
        require('./fixtures/condition_is_empty_output_1'),
        {logicalId: "Condition1", hashOpts: {parameterLogicalId: "Parameter1"}}
      );
    });

  });
});

