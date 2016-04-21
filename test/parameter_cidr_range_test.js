var assert = require("assert");
var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe("parameters", function() {
  describe("cidr_range", function() {
    it("creates a cidr_range parameter", function() {
      cTests.testParticle(
        "parameter",
        "cidr_range",
        require("./fixtures/parameter_cidr_range_output_1"),
        {logicalId: "CidrRange"}
      );
    });
  });
});

