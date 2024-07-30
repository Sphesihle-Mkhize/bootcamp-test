import { findItemsOver20 } from '../findItemsOver20.js';
import { strict as assert } from 'assert';

describe('findItemsOver20', function() {
  it('should return items with quantity over 20', function() {
    const items = [{ name: 'item1', qty: 25 }, { name: 'item2', qty: 10 }];
    assert.deepStrictEqual(findItemsOver20(items), [{ name: 'item1', qty: 25 }]);
  });
});
