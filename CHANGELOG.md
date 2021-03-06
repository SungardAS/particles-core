# Change Log
All notable changes to this project will be documented here in
accordance with [Keep a CHANGELOG][keep-changelog-url].
This project adheres to [Semantic Versioning][semver-url].

## [0.5.4] - 2017-06-02
### Fixed
- Use root object to get s3 information for propertySpec helper

## [0.5.3] - 2017-02-12
### Fixed
- Only throw errors for spec helpers if `_.isNil` is true

## [0.5.2] - 2017-02-11
### Added
- tests for spec helpers

### Changed
- spec helpers will throw an error if they cannot find a resource,
  property or a required property was not set.

## [0.5.1] - 2017-01-16
### Fixed
- tests

## [0.5.0] - 2017-01-16
### Added
- `propertySpec` helper - Builds sub properties for a resources based on the
  AWS CloudFormation Spec
- `resourceSpec` - Builds a resource and top level properties based on
  the AWS CloudFormation Spec
- `outputs/attribute` - A quick way to define an output for the
  attribute of a resource
- `resources/spec` - Build a resource based on the AWS CloudFormation
  Spec. This particle extends `resources/base`

### Removed
- `properties` helper - replaced with Spec
- `property` helper - replaced with Spec
- `propertyValue` helper - replaced by `cValue` in condensation 0.6.0
- partials `fn_get_att`, `fn_if`, `logical_id`, and `ref` in favor of
  the function helpers in condensation 0.6.0

## [0.4.6] - 2016-10-12
### Changed
- base parameter will now accept objects for `default`

## [0.4.5] - 2016-07-04
### Fixed
- use \_.cloneDeep instead of createFrame to support node < 4

## [0.4.4] - 2016-07-04
### Added
- properties helper
- property helper

## [0.4.3] - 2016-05-11
### Fixed
- optional parameters disable MinLength and MinValue

## [0.4.2] - 2016-05-09
### Added
- `propertyValue` now has a `forceNumber` option to ensuere the output
  is a number and not a string when not a reference.
- New particle `parameter/arn`
- New particle `partial/fn_if`
- `base` output now handle conditions
- 'base` parameter now takes the `optional` parameter.  When set to true
  `[optional]` will be added to the front of the description and
  `allowedPattern` will be wrapped with `()?`

### Changed
- The `ref` helper was ultimately moved to the core of condensation as
  this is where scoping of logical IDs takes place.
- `propertyValue` will handle undefined values as empty strings

## [0.4.1] - 2016-04-22
### Added
- helper for building a `Ref` for a logicalId. This will eventually replace the
  ref partial

### Fixed
- propertyValue helper will only stringify plain objects and arrays

## [0.4.0] - 2016-04-21
### Added
- This is the first release of particles-core.  It is the successor to now
  deprecated particles-common-core.
- Unit tests for particles using [condensation-particle-tests][cpt-url]

### Changed
- Updated dependencies to latest versions

[cpt-url]: https://github.com/SungardAS/condensation-particle-tests
[semver-url]: http://semver.org
[keep-changelog-url]: http://keepachangelog.com
