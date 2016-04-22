var assert = require("assert");
var propertyValue = require("../particles/helpers/propertyValue");

describe("helpers", function() {
  describe("propertyValue", function() {

    it("should return a string that is json withough quotes", function() {
      var result = propertyValue('{"Ref": "LogicalId"}');
      assert.deepEqual(result,'{"Ref": "LogicalId"}');
    });

    it("should return a string that is not json with quotes", function() {
      var result = propertyValue('LogicalId');
      assert.deepEqual(result,'"LogicalId"');
    });

    it("should convert objects with a prototype to strings with quotes", function() {
      var date = new Date();
      var result = propertyValue(date);
      assert.equal(result,'"'+date.toString()+'"');
    });
  })
});
