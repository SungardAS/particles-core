# Change Log
All notable changes to this project will be documented here in
accordance with [Keep a CHANGELOG][keep-changelog-url].
This project adheres to [Semantic Versioning][semver-url].


## [Unreleased]
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
