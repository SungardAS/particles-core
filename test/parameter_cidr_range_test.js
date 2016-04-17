var assert = require("assert");
var cTests = require("condensation-particle-tests");

describe("parameters", function() {
  describe("cidr_range", function() {
    it("creates a cidr_range parameter", function() {
      var result = cTests.testParticle(
        "parameter",
        "cidr_range",
        require("./fixtures/parameter_cidr_range_output_1"),
        {logicalId: "CidrRange"}
      );
    });
  });
});

