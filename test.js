'use strict'

var assert = require('assert')
var isValidZipcode = require('./')

assert(isValidZipcode('0000', 'AF'))
assert(isValidZipcode('0000-000', 'PT'))
