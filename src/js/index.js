'use strict';

var riot = require('riot');

require('../tags/sample.tag');

document.addEventListener('DOMContentLoaded', function () {
  riot.mount('account', { plan: { name: '引数', term: 'monthly' } })
})