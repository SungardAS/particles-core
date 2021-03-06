var assert = require("assert");
var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe("parameters", function() {
  describe("base", function() {
    it("creates empty parameter", function() {
      cTests.testParticle(
        "parameter",
        "base",
        require('./fixtures/parameter_base_output_1'),
        {logicalId: "BaseParameter"}
      );
    });

    it("creates type 'Integer' parameter", function() {
      cTests.testParticle(
        "parameter",
        "base",
        require('./fixtures/parameter_base_output_2'),
        {logicalId: "BaseParameter",hashOpts: {type: "Integer", description: "Enter any integer"}}
      );
    });

    it("sets 'NoEcho' to \"true\" with boolean", function() {
      cTests.testParticle(
        "parameter",
        "base",
        require('./fixtures/parameter_base_output_3'),
        {logicalId: "BaseParameter",hashOpts: {type: "String", description: "password", noEcho: true}}
      );
    });

    it("sets 'NoEcho' to \"true\" with string", function() {
      cTests.testParticle(
        "parameter",
        "base",
        require('./fixtures/parameter_base_output_3'),
        {logicalId: "BaseParameter",hashOpts: {type: "String", description: "password", noEcho: "true"}}
      );
    });

    it("sets 'MaxLength' to string with number", function() {
      cTests.testParticle(
        "parameter",
        "base",
        require('./fixtures/parameter_base_output_4'),
        {logicalId: "BaseParameter",hashOpts: {type: "String", description: "password", noEcho: true, maxLength: 5}}
      );
    });

    it("sets 'MaxLength' to string with string", function() {
      cTests.testParticle(
        "parameter",
        "base",
        require('./fixtures/parameter_base_output_4'),
        {logicalId: "BaseParameter",hashOpts: {type: "String", description: "password", noEcho: true, maxLength: "5"}}
      );
    });

    it("sets 'MinLength' to string with number", function() {
      cTests.testParticle(
        "parameter",
        "base",
        require('./fixtures/parameter_base_output_5'),
        {logicalId: "BaseParameter",hashOpts: {type: "String", description: "password", noEcho: true, minLength: 5}}
      );
    });

    it("sets 'MinLength' to string with string", function() {
      cTests.testParticle(
        "parameter",
        "base",
        require('./fixtures/parameter_base_output_5'),
        {logicalId: "BaseParameter",hashOpts: {type: "String", description: "password", noEcho: true, minLength: "5"}}
      );
    });

    it("sets 'MaxValue' to string with number", function() {
      cTests.testParticle(
        "parameter",
        "base",
        require('./fixtures/parameter_base_output_6'),
        {logicalId: "BaseParameter",hashOpts: {type: "String", description: "password", noEcho: true, maxValue: 5}}
      );
    });

    it("sets 'MaxValue' to string with string", function() {
      cTests.testParticle(
        "parameter",
        "base",
        require('./fixtures/parameter_base_output_6'),
        {logicalId: "BaseParameter",hashOpts: {type: "String", description: "password", noEcho: true, maxValue: "5"}}
      );
    });

    it("sets 'MinValue' to string with number", function() {
      cTests.testParticle(
        "parameter",
        "base",
        require('./fixtures/parameter_base_output_7'),
        {logicalId: "BaseParameter",hashOpts: {type: "String", description: "password", noEcho: true, minValue: 5}}
      );
    });

    it("sets 'MinValue' to string with string", function() {
      cTests.testParticle(
        "parameter",
        "base",
        require('./fixtures/parameter_base_output_7'),
        {logicalId: "BaseParameter",hashOpts: {type: "String", description: "password", noEcho: true, minValue: "5"}}
      );
    });

    it("Will add [optional] to the description if optional=true", function() {
      cTests.testParticle(
        "parameter",
        "base",
        require('./fixtures/parameter_base_output_8'),
        {logicalId: "BaseParameter",hashOpts: {type: "String", description: "A parameter", optional:true }}
      );
    });

    it("will wrap allowedPattern if optional=true", function() {
      cTests.testParticle(
        "parameter",
        "base",
        require('./fixtures/parameter_base_output_9'),
        {
          logicalId: "BaseParameter",
          hashOpts: {
            type: "String",
            description: "A parameter",
            allowedPattern: "[a-z]+",
            optional: true
          }
        }
      );
    });

    it("will ignore minLength if optional=true", function() {
      cTests.testParticle(
        "parameter",
        "base",
        require('./fixtures/parameter_base_output_9'),
        {
          logicalId: "BaseParameter",
          hashOpts: {
            type: "String",
            description: "A parameter",
            allowedPattern: "[a-z]+",
            optional: true,
            minLength: 5
          }
        }
      );
    });

    it("will ignore minValue if optional=true", function() {
      cTests.testParticle(
        "parameter",
        "base",
        require('./fixtures/parameter_base_output_9'),
        {
          logicalId: "BaseParameter",
          hashOpts: {
            type: "String",
            description: "A parameter",
            allowedPattern: "[a-z]+",
            optional: true,
            minValue: 5
          }
        }
      );
    });
  });
});

