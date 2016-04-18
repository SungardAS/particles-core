var assert = require("assert");
var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe("conditions", function() {
  describe("is_false", function() {

    it("creates the condition", function() {
      var result = cTests.testParticle(
        "condition",
        "is_false",
        require('./fixtures/condition_is_false_output_1'),
        {logicalId: "Condition1", hArgs: {parameterLogicalId: "Parameter1"}}
      );
    });

  });
});

