import { transportFee } from '../transportFee.js';
import { strict as assert } from 'assert';

describe('transportFee', function() {
  it('should return the correct fee based on time', function() {
    assert.strictEqual(transportFee('08:00'), 'R20');
    assert.strictEqual(transportFee('12:00'), 'R15');
    assert.strictEqual(transportFee('18:00'), 'R10');
  });
});
