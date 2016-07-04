var assert = require("assert");
var property = require("../particles/helpers/property");

describe("helpers", function() {
  describe.only("property", function() {

    it("will create a Tags property", function() {
      var result = property.call(
        {tags: '[{"tag1": "tag1value"}]'},"Tags",{ hash: {} }
      );
      assert.deepEqual(result,'"Tags":[{"tag1": "tag1value"}]');
    });

    it("will accept a Ref", function() {
      var result = property.call(
        {vpcId: '{"Ref": "VpcId"}'},"VpcId",{ hash: {} }
      );
      assert.deepEqual(result,'"VpcId":{"Ref": "VpcId"}');
    });

    it("will accept a string", function() {
      var result = property.call(
        {vpcId: "vpc-11111111111"},"VpcId",{ hash: {} }
      );
      assert.deepEqual(result,'"VpcId":"vpc-11111111111"');
    });

    it("will force a number", function() {
      var result = property.call(
        {timeout: "100"},"Timeout",{ hash: {type: "number"} }
      );
      assert.deepEqual(result,'"Timeout":100');
    });

  })
});
