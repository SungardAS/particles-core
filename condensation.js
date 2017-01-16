var _ = require("lodash");
var async = require("async");
var fs = require("fs-extra");
var path = require('path');
var request = require("request");
var stringify = require('json-stable-stringify');

var specUrlMap = {
  "us-east-1": "https://d1uauaxba7bl26.cloudfront.net/latest/CloudFormationResourceSpecification.json",
  "us-east-2": "https://dnwj8swjjbsbt.cloudfront.net/latest/CloudFormationResourceSpecification.json",
  "us-west-1": "https://d68hl49wbnanq.cloudfront.net/latest/CloudFormationResourceSpecification.json",
  "us-west-2": "https://d201a2mn26r7lk.cloudfront.net/latest/CloudFormationResourceSpecification.json",
  "ap-south-1": "https://d2senuesg1djtx.cloudfront.net/latest/CloudFormationResourceSpecification.json",
  "ap-northeast-2": "https://d1ane3fvebulky.cloudfront.net/latest/CloudFormationResourceSpecification.json",
  "ap-southeast-1": "https://doigdx0kgq9el.cloudfront.net/latest/CloudFormationResourceSpecification.json",
  "ap-southeast-2": "https://d2stg8d246z9di.cloudfront.net/latest/CloudFormationResourceSpecification.json",
  "eu-central-1": "https://d1mta8qj7i28i2.cloudfront.net/latest/CloudFormationResourceSpecification.json",
  "eu-west-1": "https://d3teyb21fexa9r.cloudfront.net/latest/CloudFormationResourceSpecification.json",
  "sa-east-1": "https://d3c9jyj3w509b0.cloudfront.net/latest/CloudFormationResourceSpecification.json"
};

module.exports.initialize = function(conf,cb) {

  var allRegions = _.map(conf.options.s3, function(s3opts) {
    return s3opts.aws.region;
  });
  var uniqueRegions = _.uniq(allRegions);

  async.map(
    uniqueRegions,
    function(awsRegion, done) {
      var url = specUrlMap[awsRegion] || specUrlMap["us-east-1"];
      request(url, function(err, res, body) {
        var regionSpec = {};
        regionSpec[awsRegion] = JSON.parse(body);
        done(err,regionSpec);
      });
    },
    function(err,results) {
      if(err) return cb(err);

      var regionSpec = {};
      _.each(results, function(r) {
        regionSpec = _.merge(regionSpec,r);
      });

      fs.outputFile(
        path.join(__dirname,'regionSpec.json'),
        stringify(regionSpec),
        cb
      );
    }
  );

}
