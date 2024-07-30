import { regCheck } from '../regCheck.js';
import { strict as assert } from 'assert';

describe('regCheck', function() {
  it('should return true if registration is from the correct town', function() {
    assert.strictEqual(regCheck('DV 23 LP GP', 'GP'), true);
  });

  it('should return false if registration is not from the correct town', function() {
    assert.strictEqual(regCheck('DV 23 LP GP', 'CY'), false);
  });

  it('should return true for another registration from the correct town', function() {
    assert.strictEqual(regCheck('5566 L', 'L'), true);
  });

  it('should return false for another registration not from the correct town', function() {
    assert.strictEqual(regCheck('5566 L', 'GP'), false);
  });
});
