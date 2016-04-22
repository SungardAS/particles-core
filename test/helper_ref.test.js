var assert = require("assert");
var ref = require("../particles/helpers/ref");

describe("helpers", function() {
  describe("ref", function() {

    it("should accept a string and return it as a Ref", function() {
      var result = ref("LogicalId");
      assert.deepEqual(result,'{"Ref": "LogicalId"}');
    });

  })
});
