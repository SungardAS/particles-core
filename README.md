# particles-core

Often used particles for [condensation][condensation-url]

[![condensation][condensation-image]][condensation-url]

[![NPM][npm-image]][npm-url]
[![Gitter][gitter-image]][gitter-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][daviddm-image]][daviddm-url]


## Particles
* <a href="#conditions">conditions</a>
* <a href="#helpers">helpers</a>
* <a href="#parameters">parameters</a>
* <a href="#resources">resources</a>
* <a href="#sets">sets</a>

## conditions

### is\_empty

Will evalute to true if the related parameter is empty

**Parameters**

  * `paremeterLogicalId {string}` **required** LogicalId of the parameter

**Example**
```
{{parameter "m:core" "base" default=""}}
{{condition "m:core" "is_empty" parameterLogicalId="Parameter1"}}
```

-

### is\_equal\_to

Will evalute to true if the related parameter is equal to 

**Parameters**

  * `paremeterLogicalId {string}` **required** LogicalId of the parameter
  * `value {string|number}` **required** value to compare

**Example**
```
{{parameter "m:core" "base" default="matchme"}}
{{
  condition "m:core" "is_equal_to"
  parameterLogicalId="Parameter1"
  value="matchme"
}}
```

-

### is\_false

Will evalute to true if the related parameter's string is `"false"`

**Parameters**

  * `paremeterLogicalId {string}` **required** LogicalId of the parameter

**Example**
```
{{parameter "m:core" "true_false"}}
{{condition "m:core" "is_false" parameterLogicalId="Parameter1"}}
```

-

### is\_not\_empty

Will evalute to true if the related parameter has a value

**Parameters**

  * `paremeterLogicalId {string}` **required** LogicalId of the parameter

**Example**
```
{{parameter "m:core" "base" default="notempty"}}
{{condition "m:core" "is_not_empty" parameterLogicalId="Parameter1"}}
```

-

### is\_not\_equal\_to

Will evalute to true if the related parameter is not equalt to `value`

**Parameters**

  * `paremeterLogicalId {string}` **required** LogicalId of the parameter
  * `value {string|number}` **required** value to compare

**Example**
```
{{parameter "m:core" "base" default="notme"}}
{{
  condition "m:core" "is_not_equal_to"
  parameterLogicalId="Parameter1"
  value="matchme"
}}
```

-

### is\_populated

Will evalute to true if the related parameter has a non-empty value

**Parameters**

  * `paremeterLogicalId {String}` **required** LogicalId of the parameter

**Example**
```
{{parameter "m:core" "base" default="populated"}}
{{condition "m:core" "is_populated" parameterLogicalId="Parameter1"}}
```

-

### is\_true

Will evalute to true if the related parameter's string is equal to `true`

**Parameters**

  * `paremeterLogicalId {String}` **required** LogicalId of the parameter

**Example**
```
{{parameter "m:core" "true_false"}}
{{condition "m:core" "is_true" parameterLogicalId="Parameter1"}}
```


## helpers

### propertySpec

Builds a resource property based on the AWS CloudFormation Spec

**Parameters**

  * `type {string}` **required** the type of property to build
  * `properties {...kv}` Named key/value pairs

**Example**
```
{{
  helper "m:core" propertySpec
  type="AWS::AutoScaling::LaunchConfiguration.BlockDeviceMapping"
  DeviceName="/dev/sda1"
}}
```

-

### resourceSpec

Builds a resource based on the AWS CloudFormation Spec

**Parameters**

  * `type {string}` **required** the type of property to build
  * `properties {...kv}` Named key/value pairs

**Example**
```
{{
  helper "m:core" "resourceSpec"
  type="AWS::IAM::AccessKey"
  UserName="Condensation"
}}
```

-

### thisTemplate

Returns the path to the template this helper is included in

**Example**
```
{{helper "m:core" "thisTemplate"}}
```

-

### thisTemplateUrl

Returns the URL to the template this helper is included in

**Example**
```
{{helper "m:core" "thisTemplateUrl"}}
```

## outputs

### attribute

Output the attribute for a resource

**Parameters**

  * `attributeName {string}` **required** The attribute name of the
    resource to output
  * `resourceLogicalId {string}` **required** The logicalId of the
    resource
  * `description {string}` - Description of the output

**Example**
```
{{
  output "m:core" "attribute"
  logicalId="Output1"
  resourceLogicalId="Resource1"
  attributeName="Arn"
}}
```

-

### base

Create any output

**Parameters**

  * `value {string|object}` **required** String, Ref or Fn to output.
  * `description {string|object}` String, Ref or Fn to use for the
    description

**Example**
```
{{output "m:core" "base" logicalId="Output1" value="Value1" description="A Value"}}
```

## parameters

### arn

A string parameter with a constraint for valid ARN syntax

**Extends _base_**

**Example**
```
{{parameter "m:core" "arn" logicalId="Arn"}}
```

-

### base

Generic implementation of a parameter

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
  * `optional` {Boolean} Will add *[optional]* to the front of
    description, wrap *allowedPattern* with `()?` and ignore minLength
    and minValue

**Example**
```
{{parameter "m:core" "base" logicalId="Parameter1" type="String"}}
```

-

### cidr\_range

Creates a parameter that accepts a valid CIDR as the value.

**Extends _base_**

**Example**
```
{{parameter "m:core" "cidr_range" logicalId="Cidr"}}
```

-

### true\_false

Creates a parameter that accepts either "true" or "false" as the value.

**Extends _base_**

**Example**
```
{{parameter "m:core" "true_false" logicalId="DoThis"}}
```

-

## partials

## resources

### base

Create any resource

**Parameters**

  * `type {String}` **required** maps to *Type*
  * `creationPolicy {String}` maps to *CreationPolicy*
  * `deletionPolicy {String}` maps to *DeletionPolicy*
  * `updatePolicy {String}` maps to *UpdatePolicy*
  * `properties {String|Object}` maps to *Properties*
  * `condition {String}` maps to *Condition*
  * `metadata {String}` maps to *Metadata*
  * `dependsOn {Int}` maps to *DependsOn*

**Example**
```
{{resource "m:core" "base" logicalId="Resource" type="Custom::type"}}
```

-

### spec

Create any resource with properties from the AWS CloudFormation Spec

**Extends _base_**

**Parameters**

  * `properties {...kv}` - Named key/value pairs of valid properties

**Example**
```
{{
  resource "m:core" "resourceSpec"
  type="AWS::IAM::AccessKey"
  condition="MyCondition"
  dependsOn="AnotherResource"
  UserName="Condensation"
}}
```

-

## sets

### empty\_conditions

When used in a layout, will generate an `is_empty` and `is_populated`
conditions for a parameter.

**Parameters**

  * `paremeterLogicalId` **required** LogicalId for the parameter

**Example**
```
{{set "m:core" "empty_conditions" logicalId="Parameter1"}}
```

-

### equal\_conditions

When used in a layout, will generate an `is_equal_to` and
`is_not_equal_to` conditions for a parameter.

**Parameters**

  * `paremeterLogicalId` **required** LogicalId for the parameter

**Example**
```
{{set "m:core" "equal_conditions" logicalId="Parameter1"}}
```

-

### true\_false

When used in a layout, will generate a parameter and condition for true/false values

**Parameters**

  * `paremeterLogicalId` **required** LogicalId for the parameter
  * `conditionLogicalId` - If set will overried the generated logicalId
    for the conditions

Passed on to parameter

  * `default {String}` maps to *Default*
  * `noEcho {Boolean}` maps to *NoEcho*
  * `description {String}` maps to *Description*

**Example**
```
{{set "m:core" "true_false" parameterLogicalId="Parameter1"}}
```

-

[condensation-image]: https://raw.githubusercontent.com/SungardAS/condensation/master/docs/images/condensation_logo.png
[condensation-url]: https://github.com/SungardAS/condensation
[npm-image]: https://badge.fury.io/js/particles-core.svg
[npm-url]: https://nodei.co/npm/particles-core/
[gitter-image]: https://badges.gitter.im/Join%20Chat.svg
[gitter-url]: https://gitter.im/SungardAS/condensation?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge
[travis-image]: https://travis-ci.org/SungardAS/particles-core.svg?branch=master
[travis-url]: https://travis-ci.org/SungardAS/particles-core
[daviddm-image]: https://david-dm.org/SungardAS/particles-core.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/SungardAS/particles-core
