import { yearsAgo } from '../yearsAgo.js';
import { strict as assert } from 'assert';

describe('yearsAgo', function() {
  it('should calculate the number of years ago', function() {
    assert.strictEqual(yearsAgo(2000), new Date().getFullYear() - 2000);
  });
});
