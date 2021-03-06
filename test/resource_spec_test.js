var assert = require("assert");
var CondensationTests = require("condensation-particle-tests");
var condensationJs = require("../condensation");

var cTests = new CondensationTests();

describe("resources", function() {

  describe("spec", function() {

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

    it("creates an 'AWS::EC2::Instance' resource", function() {
      cTests.testParticle(
        "resource",
        "spec",
        require('./fixtures/resource_spec_output_1'),
        {
          logicalId: "SpecResource",
          hOpts: {
            hash: {
              "type": "AWS::EC2::Instance",
              "ImageId": "ami-xxxxxxxxx"
            }
          },
          cOpts: {s3: {region: "us-east-1"}},
        }
      );
    });

    it("sets 'CreationPolicy' with object", function() {
      cTests.testParticle(
        "resource",
        "spec",
        require('./fixtures/resource_spec_output_2'),
        {
          logicalId: "SpecResource",
          hOpts: {
            hash: {
              type: "AWS::EC2::Instance",
              creationPolicy: {
                ResourceSignal: {
                  Count: 1,
                  Timeout: "3600"
                }
              },
              ImageId: "ami-xxxxxxxxx",
            }
          },
          cOpts: {
            s3: {
              region: "us-east-1"
            }
          }
        }
      );
    });

    it("sets 'CreationPolicy' with string", function() {
      cTests.testParticle(
        "resource",
        "spec",
        require('./fixtures/resource_spec_output_2'),
        {
          logicalId: "SpecResource",
          hOpts: {
            hash: {
              type: "AWS::EC2::Instance",
              creationPolicy: '{"ResourceSignal": {"Count": 1, "Timeout":"3600" }}',
              ImageId: "ami-xxxxxxxxx"
            }
          },
          cOpts: {
            s3: {
              region: "us-east-1"
            }
          }
        }
      );
    });

    it("sets a Required Property", function() {
      cTests.testParticle(
        "resource",
        "spec",
        require('./fixtures/resource_spec_output_3'),
        {
          logicalId: "SpecResource",
          hashOpts: {
            type: "AWS::EC2::Instance",
            ImageId: "ami-xxxxxxxxx",
          },
          cOpts: {
            s3: {
              region: "us-east-1"
            }
          }
        }
      );
    });

  });
});

