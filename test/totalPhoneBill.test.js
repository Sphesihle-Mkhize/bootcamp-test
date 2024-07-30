import { totalPhoneBill } from '../totalPhoneBill.js';
import { strict as assert } from 'assert';

describe('totalPhoneBill', function() {
  it('should calculate the total phone bill', function() {
    assert.strictEqual(totalPhoneBill('call,sms,call'), 6.15);
  });
});
