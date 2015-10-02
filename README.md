# particles-common-core

A core set of often used particles for [condensation](https://github.com/SungardAS/condensation).

[![logo](https://raw.githubusercontent.com/SungardAS/condensation/master/docs/images/condensation_logo.png)](https://github.com/SungardAS/condensation)

[![NPM](https://nodei.co/npm/particles-common-core.png)](https://nodei.co/npm/particles-common-core/)

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/SungardAS/condensation?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![Dependency
Status](https://david-dm.org/SungardAS/particles-common-core.svg?branch=master)](https://david-dm.org/SungardAS/particles-common-core?branch=master)


## conditions

### is\_true

Will evalute to true if the related parameter is `true`

**Parameters**

  * `paremeterLogicalId {String}` **required** LogicalId of the parameter

### is\_false

Will evalute to true if the related parameter is `false`

**Parameters**

  * `paremeterLogicalId {String}` **required** LogicalId of the parameter

### is\_false

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
