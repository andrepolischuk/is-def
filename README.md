# is-def [![Build Status][travis-image]][travis-url]

  > Check if value is defined

  Not null, nan or undefined

## Install

```sh
npm install --save is-def
```

## Usage

```js
var isDefined = require('is-def');

isDefined(null); // false
isDefined(undefined); // false
isDefined(NaN); // false
isDefined('hello'); // true
```

## License

  MIT

[travis-url]: https://travis-ci.org/andrepolischuk/is-def
[travis-image]: https://travis-ci.org/andrepolischuk/is-def.svg?branch=master
