'use strict'

module.exports = function (zipcode, country) {
  if (typeof zipcode !== 'string') {
    throw new TypeError('Expected a string for zipcode')
  }

  var zipcodes = require('zipcodes-regex')
  
  if (typeof country === 'undefined') {
    country = 'US';
  }

  if (!zipcodes[country]) {
    throw new ReferenceError('Invalid country ' + country)
  }

  if (zipcodes[country] === 0) {
    throw new TypeError('There is no regular expression for the country you selected');
  }

  var regex = new RegExp(zipcodes[country])
  return regex.test(zipcode)
}
