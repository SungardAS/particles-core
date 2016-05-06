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

    it("should handle undefined values as empty strings", function() {
      var result = propertyValue(undefined);
      assert.equal(result,'""');
    });

    it("should treat a string with a number as a string by default ", function() {
      var result = propertyValue("30");
      assert.equal(result,'"30"');
    });

    it("will treat a number as a number", function() {
      var result = propertyValue(30);
      assert.equal(result,30);
    });

    it("will force a string to a number", function() {
      var result = propertyValue("30", {hash:{forceNumber:true}});
      assert.equal(result,30);
    });

  })
});
