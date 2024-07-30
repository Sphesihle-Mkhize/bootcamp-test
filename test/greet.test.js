import { greet } from '../greet.js';
import { strict as assert } from 'assert';

describe('greet', function() {
  it('should greet a person by name', function() {
    assert.strictEqual(greet('Sphesihle'), 'Hello, Sphesihle!');
  });
});
