import { isFromBellville } from '../isFromBellville.js';
import { strict as assert } from 'assert';

describe('isFromBellville', function() {
  it('should return true for registrations from Bellville', function() {
    assert.strictEqual(isFromBellville('CY12345'), true);
  });
  it('should return false for registrations not from Bellville', function() {
    assert.strictEqual(isFromBellville('CA12345'), false);
  });
});
