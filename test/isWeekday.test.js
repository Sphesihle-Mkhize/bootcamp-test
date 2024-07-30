import { isWeekday } from '../isWeekday.js';
import { strict as assert } from 'assert';

describe('isWeekday', function() {
  it('should return true for weekdays', function() {
    assert.strictEqual(isWeekday('Monday'), true);
  });
  it('should return false for weekends', function() {
    assert.strictEqual(isWeekday('Saturday'), false);
  });
});
