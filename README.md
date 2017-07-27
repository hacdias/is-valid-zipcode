# is-valid-zipcode

[![Build](https://img.shields.io/travis/hacdias/is-valid-zipcode.svg?style=flat-square)][1]
[![Latest Version](https://img.shields.io/npm/v/is-valid-zipcode.svg?style=flat-square)][1]
[![Downloads per Month](https://img.shields.io/npm/dm/is-valid-zipcode.svg?style=flat-square)][1]
[![License](https://img.shields.io/npm/l/is-valid-zipcode.svg?style=flat-square)](http://opensource.org/licenses/MIT)

> Check if a zip/postal code is valid


## Install

```sh
$ npm install --save is-valid-zipcode
```


## Usage

```js
var isValidZipcode = require('is-valid-zipcode');

isValidZipcode('2000-000', 'PT');
// => true

isValidZipcode('7521785-952-520', 'PT');
//=> false
```

By default, the country is United States.

## License

MIT © [Henrique Dias](http://henriquedias.com)

[1]: https://www.npmjs.com/package/is-valid-zipcode
