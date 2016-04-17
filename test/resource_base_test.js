var assert = require("assert");
var cTests = require("condensation-particle-tests");

describe("resources", function() {
  describe("base", function() {
    it("creates empty resource", function() {
      var result = cTests.testParticle(
        "resource",
        "base",
        require('./fixtures/resource_base_output_1'),
        {logicalId: "BaseResource"}
      );
    });

    it("creates type 'TestMe' resource", function() {
      var result = cTests.testParticle(
        "resource",
        "base",
        require('./fixtures/resource_base_output_2'),
        {logicalId: "BaseResource",hArgs: {type: "TestMe"}}
      );
    });

    it("sets 'CreationPolicy' with object", function() {
      var result = cTests.testParticle(
        "resource",
        "base",
        require('./fixtures/resource_base_output_3'),
        {
          logicalId: "BaseResource",
          hArgs: {
            type: "TestMe",
            creationPolicy: {
              ResourceSignal: {
                Count: 1,
                Timeout: "3600"
              }
            }
          }
        }
      );
    });

    it("sets 'CreationPolicy' with string", function() {
      var result = cTests.testParticle(
        "resource",
        "base",
        require('./fixtures/resource_base_output_3'),
        {
          logicalId: "BaseResource",
          hArgs: {
            type: "TestMe",
            creationPolicy: '{"ResourceSignal": {"Count": 1, "Timeout":"3600" }}'
          }
        }
      );
    });


    it("sets 'DeletionPolicy' with string", function() {
      var result = cTests.testParticle(
        "resource",
        "base",
        require('./fixtures/resource_base_output_4'),
        {
          logicalId: "BaseResource",
          hArgs: {
            type: "TestMe",
            deletionPolicy: "Retain"
          }
        }
      );
    });

    it("sets 'UpdatePolicy' with object", function() {
      var result = cTests.testParticle(
        "resource",
        "base",
        require('./fixtures/resource_base_output_5'),
        {
          logicalId: "BaseResource",
          hArgs: {
            type: "TestMe",
            creationPolicy: {
              AutoScalingRollingUpdate : {
                MaxBatchSize: 5,
                MinInstancesInService: 10,
                MinSuccessfulInstancesPercent: 65,
                PauseTime: "PT5M",
                WaitOnResourceSignals: true
              },
              AutoScalingScheduledAction: {
                IgnoreUnmodifiedGroupSizeProperties: true
              }
            }
          }
        }
      );
    });

    it("sets 'UpdatePolicy' with string", function() {
      var result = cTests.testParticle(
        "resource",
        "base",
        require('./fixtures/resource_base_output_5'),
        {
          logicalId: "BaseResource",
          hArgs: {
            type: "TestMe",
            creationPolicy: '{"AutoScalingRollingUpdate": {"MaxBatchSize": 5, "MinInstancesInService": 10, "MinSuccessfulInstancesPercent": 65, "PauseTime": "PT5M", "WaitOnResourceSignals": true }, "AutoScalingScheduledAction": {"IgnoreUnmodifiedGroupSizeProperties": true}}'
          }
        });
    });

    it("sets 'Properties' with object", function() {
      var result = cTests.testParticle(
        "resource",
        "base",
        require('./fixtures/resource_base_output_6'),
        {
          logicalId: "BaseResource",
          hArgs: {
            type: "TestMe",
            properties: {
              Prop1: "value1"
            }
          }
        }
      );
    });

    it("sets 'UpdatePolicy' with string", function() {
      var result = cTests.testParticle(
        "resource",
        "base",
        require('./fixtures/resource_base_output_6'),
        {
          logicalId: "BaseResource",
          hArgs: {
            type: "TestMe",
            properties: '{"Prop1": "value1" }'
          }
        });
    });

    it("sets 'Condition' with string", function() {
      var result = cTests.testParticle(
        "resource",
        "base",
        require('./fixtures/resource_base_output_7'),
        {
          logicalId: "BaseResource",
          hArgs: {
            type: "TestMe",
            condition: "MyCondition"
          }
        });
    });

    it("sets 'Condition' with string", function() {
      var result = cTests.testParticle(
        "resource",
        "base",
        require('./fixtures/resource_base_output_7'),
        {
          logicalId: "BaseResource",
          hArgs: {
            type: "TestMe",
            condition: "MyCondition"
          }
        }
      );

      it("sets 'Metadata' with an object", function() {
        var result = cTests.testParticle(
          "resource",
          "base",
          require('./fixtures/resource_base_output_8'),
          {
            logicalId: "BaseResource",
            hArgs: {
              type: "TestMe",
              metadata: {
                MetaKey1: "metaValue1"
              }
            }
          }
        );
      });

      it("sets 'Metadata' a string", function() {
        var result = cTests.testParticle(
          "resource",
          "base",
          require('./fixtures/resource_base_output_8'),
          {
            logicalId: "BaseResource",
            hArgs: {
              type: "TestMe",
              metadata: '{MetaKey1: "metaValue1" }'
            }
          }
        );
      });
    });

    it("sets 'Metadata' with an object", function() {
      var result = cTests.testParticle(
        "resource",
        "base",
        require('./fixtures/resource_base_output_8'),
        {
          logicalId: "BaseResource",
          hArgs: {
            type: "TestMe",
            metadata: {
              MetaKey1: "metaValue1"
            }
          }
        }
      );
    });

    it("sets 'Metadata' a string", function() {
      var result = cTests.testParticle(
        "resource",
        "base",
        require('./fixtures/resource_base_output_8'),
        {
          logicalId: "BaseResource",
          hArgs: {
            type: "TestMe",
            metadata: '{"MetaKey1": "metaValue1" }'
          }
        }
      );
    });

    it("sets 'DependsOn' with an object", function() {
      var result = cTests.testParticle(
        "resource",
        "base",
        require('./fixtures/resource_base_output_9'),
        {
          logicalId: "BaseResource",
          hArgs: {
            type: "TestMe",
            dependsOn: ["Resource1"]
          }
        }
      );
    });

    it("sets 'DependsOn' with a string", function() {
      var result = cTests.testParticle(
        "resource",
        "base",
        require('./fixtures/resource_base_output_9'),
        {
          logicalId: "BaseResource",
          hArgs: {
            type: "TestMe",
            dependsOn: '["Resource1"]'
          }
        }
      );
    });

    it("sets 'DependsOn' with a single value", function() {
      var result = cTests.testParticle(
        "resource",
        "base",
        require('./fixtures/resource_base_output_10'),
        {
          logicalId: "BaseResource",
          hArgs: {
            type: "TestMe",
            dependsOn: 'Resource1'
          }
        }
      );
    });

  });
});

