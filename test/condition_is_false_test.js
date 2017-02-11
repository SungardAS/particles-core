var assert = require("assert");
var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe("conditions", function() {
  describe("is_false", function() {

    it("creates the condition", function() {
      cTests.testParticle(
        "condition",
        "is_false",
        require('./fixtures/condition_is_false_output_1'),
        {logicalId: "Condition1", hashOpts: {parameterLogicalId: "Parameter1"}}
      );
    });

  });
});

