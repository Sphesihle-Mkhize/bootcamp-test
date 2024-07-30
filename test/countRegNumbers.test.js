import { countRegNumber } from '../countRegNumber.js';
import { strict as assert } from 'assert';

describe('countRegNumber', function() {
  it('should count the number of registration numbers', function() {
    assert.strictEqual(countRegNumber('CA12345,CY12345,CJ12345'), 3);
  });
});
