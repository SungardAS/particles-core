# particles-common-core

A core set of often used particles for [condensation](https://github.com/SungardAS/condensation).

## conditions

### is\_true

Will evalute to true if the related parameter is `true`

**Parameters**

  * `paremeterLogicalId {String}` **required** LogicalId of the parameter


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
