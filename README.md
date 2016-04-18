# particles-core

Often used particles for [condensation][condensation-url]

[![condensation][condensation-image]][condensation-url]

[![NPM][npm-image]][npm-url]
[![Gitter][gitter-image]][gitter-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][daviddm-image]][daviddm-url]


## conditions

### is\_true

Will evalute to true if the related parameter is `true`

**Parameters**

  * `paremeterLogicalId {String}` **required** LogicalId of the parameter

### is\_false

Will evalute to true if the related parameter is `false`

**Parameters**

  * `paremeterLogicalId {String}` **required** LogicalId of the parameter

### is\_empty

Will evalute to true if the related parameter is an empty string

**Parameters**

  * `paremeterLogicalId {String}` **required** LogicalId of the parameter


##helpers

### propertyValue

Evaluates whether the property is an object or string and returns the
correct template compatible syntax for each.

**Parameters**

  * `value {string|object}` **required** The property value to evaluate
    and/or change.

## parameters

### base

  * `value {string|object}` **required** String, Ref or Fn to output.
  * `description {string|object}` String, Ref or Fn to use for the
    description

## parameters

### base

A generic implementation of a parameter

**Parameters**

  * `type {String}` **required** maps to *Type*
  * `default {String}` maps to *Default*
  * `noEcho {Boolean}` maps to *NoEcho*
  * `allowedValues {Array}` maps to *AllowedValues*
  * `allowedPattern {String}` maps to *AllowedPattern*
  * `maxLength {String}` maps to *MaxLength*
  * `minLength {String}` maps to *MinLength*
  * `maxValue {Int}` maps to *MaxValue*
  * `minValue {Int}` maps to *MinValue*
  * `description {String}` maps to *Description*
  * `constraintDescription {String}` maps to *ConstraintDescription*

### cidr\_range

Creates a parameter that accepts a valid CIDR as the value.

**Parameters**

  * `default {String}` maps to *Default*
  * `noEcho {Boolean}` maps to *NoEcho*
  * `allowedValues {Array}` maps to *AllowedValues*
  * `allowedPattern {String}` maps to *AllowedPattern*
  * `description {String}` maps to *Description*

**Defaults**

  * `description` "Valid CIDR Range. Format: x.x.x.x/x"

### true\_false

Creates a parameter that accepts either "true" or "false" as the value.

**Parameters**

  * `default {String}` maps to *Default*
  * `noEcho {Boolean}` maps to *NoEcho*
  * `description {String}` maps to *Description*

## partials

### fn\_get\_att

**Parameters**

  * `logicalId {String}` **required** logicalId to reference
  * `attributeName {String}` **required** name of the attribute to
    reference

### ref

**Parameters**

  * `logicalId {String}` **required** logicalId to reference

## sets

### true\_false

When used in a layout, will generate a parameter and condition for true/false values

**Parameters**

  * `paremeterLogicalId` **required** LogicalId for the parameter
  * `conditionLogicalId` **required** LogicalId for the condition

Passed on to parameter

  * `default {String}` maps to *Default*
  * `noEcho {Boolean}` maps to *NoEcho*
  * `description {String}` maps to *Description*

## resources

### base

A generic implementation of a resource

**Parameters**

  * `type {String}` **required** maps to *Type*
  * `creationPolicy {String}` maps to *CreationPolicy*
  * `deletionPolicy {String}` maps to *DeletionPolicy*
  * `updatePolicy {String}` maps to *UpdatePolicy*
  * `properties {String|Object}` maps to *Properties*
  * `condition {String}` maps to *Condition*
  * `metadata {String}` maps to *Metadata*
  * `dependsOn {Int}` maps to *DependsOn*

[condensation-image]: https://raw.githubusercontent.com/SungardAS/condensation/master/docs/images/condensation_logo.png
[condensation-url]: https://github.com/SungardAS/condensation
[npm-image]: https://nodei.co/npm/particles-core.png
[npm-url]: https://nodei.co/npm/particles-core/
[gitter-image]: https://badges.gitter.im/Join%20Chat.svg
[gitter-url]: https://gitter.im/SungardAS/condensation?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge
[travis-image]: https://travis-ci.org/SungardAS/particles-core.svg?branch=master
[travis-url]: https://travis-ci.org/SungardAS/particles-core
[daviddm-image]: https://david-dm.org/SungardAS/particles-core.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/SungardAS/particles-core
