import { countAllFromTown } from '../countAllFromTown.js';
import { strict as assert } from 'assert';

describe('countAllFromTown', function() {
  it('should count the number of registrations from the specified town', function() {
    assert.strictEqual(countAllFromTown('CA12345,CY67890,CY12345', 'CY'), 2);
  });
});
