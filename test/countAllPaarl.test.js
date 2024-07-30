import { countAllPaarl } from '../countAllPaarl.js';
import { strict as assert } from 'assert';

describe('countAllPaarl', function() {
  it('should count the number of registrations from Paarl', function() {
    assert.strictEqual(countAllPaarl('CA12345,CJ12345,CJ67890'), 2);
  });
});
