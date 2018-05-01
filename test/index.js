const assert = require('assert');
const seSsn = require('../dist/se-ssn.cjs');

const validSsn1 = '8101013608'
const validSsn2 = '9211292835'
const validSsn3 = '0106013402'

const ssnWithInvalidControlDigit = '8101013600'
const ssnWithInvalidDate = '8109310989'

function ssnWithDash(input) {
  return input.substr(0, 6) + '-' + input.substr(6)
}

describe('seSsn.isValidSsn', function() {
  it('should pass with valid ssns', function() {
    assert.equal(seSsn.isValidSsn(validSsn1), true);
    assert.equal(seSsn.isValidSsn(validSsn2), true);
    assert.equal(seSsn.isValidSsn(validSsn3), true);
  });

  it('should pass with valid ssns with dash', function() {
    assert.equal(seSsn.isValidSsn(ssnWithDash(validSsn1)), true);
    assert.equal(seSsn.isValidSsn(ssnWithDash(validSsn2)), true);
  });

  it('should not pass with valid ssns with dash in wrong position', function() {
    assert.equal(seSsn.isValidSsn(validSsn1 + '-'), false);
  });

  it('should not pass with invalid ssn', function() {
    assert.equal(seSsn.isValidSsn(ssnWithInvalidControlDigit), false);
    assert.equal(seSsn.isValidSsn(ssnWithInvalidDate), false);
  });

  it('should not pass with invalid that is younger than minYears', function() {
    assert.equal(seSsn.isValidSsn(validSsn1, {minYears: 80}), false);
  });
});
