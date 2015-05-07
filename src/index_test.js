var assert = require('assert');
var index = require('./index');

describe('even-odd', function () {
  it('should return even if given even', function () {
    assert.equal(index(2), 'even');
  });

  it.skip('shouuld return odd if given odd', function () {
    assert.equal(index(3), 'odd');
  });
});
