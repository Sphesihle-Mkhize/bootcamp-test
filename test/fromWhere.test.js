import { fromWhere } from '../fromWhere.js';
import { strict as assert } from 'assert';

describe('fromWhere', function() {
  it('should return the town based on registration number', function() {
    assert.strictEqual(fromWhere('CY12345'), 'Bellville');
    assert.strictEqual(fromWhere('CJ12345'), 'Paarl');
    assert.strictEqual(fromWhere('CA12345'), 'Cape Town');
  });
});
