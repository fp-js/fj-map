# fj-map

[![Build Status](https://travis-ci.org/fp-js/fj-map.svg)](https://travis-ci.org/fp-js/fj-map) [![npm version](https://badge.fury.io/js/fj-map.svg)](http://badge.fury.io/js/fj-map)
> Map FP style.

## Installation

`npm install fj-map --save`

## Usage

```js
var map = require('fj-map');

let double = x => x * 2;

map(dobule, [1,2,3]); // [2,4,6]

let doubler = map(dobule);

dobuler([1,2,3]); // [2,4,6]
```
