var assert = require("assert");
var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe("parameters", function() {
  describe("arn", function() {
    it("creates an arn parameter", function() {
      cTests.testParticle(
        "parameter",
        "arn",
        require("./fixtures/parameter_arn_output_1"),
        {logicalId: "ARN"}
      );
    });
  });
});

