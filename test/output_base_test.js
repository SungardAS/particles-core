var assert = require("assert");
var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe("outputs", function() {
  describe("base", function() {

    it("creates empty resource", function() {
      var result = cTests.testParticle(
        "output",
        "base",
        require('./fixtures/output_base_output_1'),
        {logicalId: "Output1"}
      );
    });

    it("creates output 'Output1' with value", function() {
      var result = cTests.testParticle(
        "output",
        "base",
        require('./fixtures/output_base_output_2'),
        {logicalId: "Output1", hArgs:{value: "A Value"}}
      );
    });

    it("creates output 'Output1' with value and description", function() {
      var result = cTests.testParticle(
        "output",
        "base",
        require('./fixtures/output_base_output_3'),
        {logicalId: "Output1", hArgs:{value: "A Value", description: "A description"}}
      );
    });

  });
});

