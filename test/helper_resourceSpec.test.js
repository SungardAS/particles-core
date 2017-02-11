var condensationJs = require("../condensation");
var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe("helper", function() {
  describe("resourceSpec", function() {

    before(function(done) {
      condensationJs.initialize({
        options: {
          s3: [{
            aws: {
              region: "us-east-1"
            }
          }]
        }
      },done);
    });

    it("generates a resource based on the specification", function() {
      var resource = cTests.testParticle("helper","resourceSpec",{},{
        hArgs: ["AWS::S3::Bucket"],
        cOpts: {
          s3: {
            region: "us-east-1"
          }
        }
      });

    });

    it("generates a resource based on the specification using options", function() {
      var resource = cTests.testParticle("helper","resourceSpec",{},{
        hOpts: {
          hash: {
            type: "AWS::S3::Bucket"
          }
        },
        cOpts: {
          s3: {
            region: "us-east-1"
          }
        }
      });
    });
  });
});
