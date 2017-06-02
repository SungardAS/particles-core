var condensationJs = require("../condensation");
var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe("helper", function() {
  describe("propertySpec", function() {

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

    it("generates a property based on the specification", function() {
      var property = cTests.testParticle("helper","propertySpec",{"Status": "Enabled"},{
        hArgs: ["AWS::S3::Bucket.VersioningConfiguration"],
        hOpts: {
          hash: {
            Status: "Enabled"
          },
          data: {
            root: {
              s3: {
                region: "us-east-1"
              }
            }
          }
        }
      });

    });

    it("generates a property based on the specification using options", function() {
      var property = cTests.testParticle("helper","propertySpec",{"Status": "Enabled"},{
        hOpts: {
          hash: {
            type: "AWS::S3::Bucket.VersioningConfiguration",
            Status: "Enabled"
          },
          data: {
            root: {
              s3: {
                region: "us-east-1"
              }
            }
          }
        }
      });
    });
  });
});
