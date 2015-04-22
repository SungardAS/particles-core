# particles-common-core

A core set of often used particles for [condensation](https://github.com/SungardAS/condensation).

## partials

### condition\_tf\_parameter

A condition for a true/false parameter that will evaluate if the
parameter is "true".

**Parameters**

  * `name {String}` *required* Name of the parameter
  * `parameterName {String}` *required* Name of the template parameter to
reference

### parameter

A generic implementation of a parameter

**Parameters**

  * `name {String}` **required** Name of the parameter
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

### parameter\_cidr\_range

Creates a parameter that accepts a valid CIDR as the value.

**Parameters**

  * `name {String}` **required** Name of the parameter
  * `default {String}` maps to *Default*
  * `noEcho {Boolean}` maps to *NoEcho*
  * `allowedValues {Array}` maps to *AllowedValues*
  * `allowedPattern {String}` maps to *AllowedPattern*
  * `description {String}` maps to *Description*

**Defaults**

  * `description` "Valid CIDR Range. Format: x.x.x.x/x"

### parameter\_tf

Creates a parameter that accepts either "true" or "false" as the value.

**Parameters**

  * `name {String}` **required** Name of the parameter
  * `default {String}` maps to *Default*
  * `noEcho {Boolean}` maps to *NoEcho*
  * `description {String}` maps to *Description*


